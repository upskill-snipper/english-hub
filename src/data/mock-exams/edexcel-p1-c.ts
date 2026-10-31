// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * PEARSON EDEXCEL GCSE ENGLISH LANGUAGE PAPER 1 (1EN0/01), MOCKS 11 TO 15.
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
 * CHECKED 31 October 2026 by a second reader, against each extract and the
 * held edition. Fixed:
 *   - 12 Q1 accepted "an obscure part of the town" as a bad name; obscure
 *     means out of the way. No longer accepted, and the scheme says why.
 *   - 12 Q3 answer and scheme read "here's a chance!" as a chance to profit;
 *     it means a coincidence ("met here without meaning it"). Corrected, and
 *     the glossary gives the sense.
 *   - 13 Q4 answer gave the narrator the forest's "moral wilderness"; the
 *     text says "to Hester's mind". Added.
 *   - 13 Q5/Q6 story recalled "the boy with the bicycle in the photographs",
 *     who is not in it. Now the boy who first walked the path.
 *   - 14 context had Enfield's story "Months before"; the novel puts it more
 *     than a year earlier. Corrected.
 *   - 14 glossary put the court "behind Dr Jekyll's house"; it opens off the
 *     by-street, under his windows. Corrected.
 *   - 14 Q3 scheme had one long sentence take the men "out of the court";
 *     they leave it in the sentence before. Corrected.
 *   - 14 Q4 answer and scheme said we never learn what the men saw; Jekyll's
 *     look is named, only its cause is withheld. Corrected.
 *   - 15 Q2 asked for "two things that the creature learns to tell apart",
 *     which one pair answers; it asks for two examples, and the scheme no
 *     longer credits "to perceive objects in their right forms".
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

// src/data/full-texts/the-war-of-the-worlds.ts, Book One, Chapter IV: The Cylinder Opens: 10 paragraphs, 657 words.
const EXTRACT_11 = `The crowd swayed a little, and I elbowed my way through. Every one seemed greatly excited. I heard a peculiar humming sound from the pit.

“I say!” said Ogilvy; “help keep these idiots back. We don’t know what’s in the confounded thing, you know!”

I saw a young man, a shop assistant in Woking I believe he was, standing on the cylinder and trying to scramble out of the hole again. The crowd had pushed him in.

The end of the cylinder was being screwed out from within. Nearly two feet of shining screw projected. Somebody blundered against me, and I narrowly missed being pitched onto the top of the screw. I turned, and as I did so the screw must have come out, for the lid of the cylinder fell upon the gravel with a ringing concussion. I stuck my elbow into the person behind me, and turned my head towards the Thing again. For a moment that circular cavity seemed perfectly black. I had the sunset in my eyes.

I think everyone expected to see a man emerge—possibly something a little unlike us terrestrial men, but in all essentials a man. I know I did. But, looking, I presently saw something stirring within the shadow: greyish billowy movements, one above another, and then two luminous disks—like eyes. Then something resembling a little grey snake, about the thickness of a walking stick, coiled up out of the writhing middle, and wriggled in the air towards me—and then another.

A sudden chill came over me. There was a loud shriek from a woman behind. I half turned, keeping my eyes fixed upon the cylinder still, from which other tentacles were now projecting, and began pushing my way back from the edge of the pit. I saw astonishment giving place to horror on the faces of the people about me. I heard inarticulate exclamations on all sides. There was a general movement backwards. I saw the shopman struggling still on the edge of the pit. I found myself alone, and saw the people on the other side of the pit running off, Stent among them. I looked again at the cylinder, and ungovernable terror gripped me. I stood petrified and staring.

A big greyish rounded bulk, the size, perhaps, of a bear, was rising slowly and painfully out of the cylinder. As it bulged up and caught the light, it glistened like wet leather.

Two large dark-coloured eyes were regarding me steadfastly. The mass that framed them, the head of the thing, was rounded, and had, one might say, a face. There was a mouth under the eyes, the lipless brim of which quivered and panted, and dropped saliva. The whole creature heaved and pulsated convulsively. A lank tentacular appendage gripped the edge of the cylinder, another swayed in the air.

Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance. The peculiar V-shaped mouth with its pointed upper lip, the absence of brow ridges, the absence of a chin beneath the wedgelike lower lip, the incessant quivering of this mouth, the Gorgon groups of tentacles, the tumultuous breathing of the lungs in a strange atmosphere, the evident heaviness and painfulness of movement due to the greater gravitational energy of the earth—above all, the extraordinary intensity of the immense eyes—were at once vital, intense, inhuman, crippled and monstrous. There was something fungoid in the oily brown skin, something in the clumsy deliberation of the tedious movements unspeakably nasty. Even at this first encounter, this first glimpse, I was overcome with disgust and dread.

Suddenly the monster vanished. It had toppled over the brim of the cylinder and fallen into the pit, with a thud like the fall of a great mass of leather. I heard it give a peculiar thick cry, and forthwith another of these creatures appeared darkly in the deep shadow of the aperture.`

const EXTRACT_11_SOURCE =
  'H. G. Wells, The War of the Worlds (1898), Book One, from Chapter 4, The Cylinder Opens'

// src/data/full-texts/a-christmas-carol.ts, Stave IV: The Last of the Spirits: 14 paragraphs, 688 words.
const EXTRACT_12 = `They left the busy scene, and went into an obscure part of the town, where Scrooge had never penetrated before, although he recognised its situation, and its bad repute. The ways were foul and narrow; the shops and houses wretched; the people half-naked, drunken, slipshod, ugly. Alleys and archways, like so many cesspools, disgorged their offences of smell, and dirt, and life, upon the straggling streets; and the whole quarter reeked with crime, with filth, and misery.

Far in this den of infamous resort, there was a low-browed, beetling shop, below a pent-house roof, where iron, old rags, bottles, bones, and greasy offal, were bought. Upon the floor within, were piled up heaps of rusty keys, nails, chains, hinges, files, scales, weights, and refuse iron of all kinds. Secrets that few would like to scrutinise were bred and hidden in mountains of unseemly rags, masses of corrupted fat, and sepulchres of bones. Sitting in among the wares he dealt in, by a charcoal stove, made of old bricks, was a grey-haired rascal, nearly seventy years of age; who had screened himself from the cold air without, by a frousy curtaining of miscellaneous tatters, hung upon a line; and smoked his pipe in all the luxury of calm retirement.

Scrooge and the Phantom came into the presence of this man, just as a woman with a heavy bundle slunk into the shop. But she had scarcely entered, when another woman, similarly laden, came in too; and she was closely followed by a man in faded black, who was no less startled by the sight of them, than they had been upon the recognition of each other. After a short period of blank astonishment, in which the old man with the pipe had joined them, they all three burst into a laugh.

"Let the charwoman alone to be the first!" cried she who had entered first. "Let the laundress alone to be the second; and let the undertaker's man alone to be the third. Look here, old Joe, here's a chance! If we haven't all three met here without meaning it!"

"You couldn't have met in a better place," said old Joe, removing his pipe from his mouth. "Come into the parlour. You were made free of it long ago, you know; and the other two an't strangers. Stop till I shut the door of the shop. Ah! How it skreeks! There an't such a rusty bit of metal in the place as its own hinges, I believe; and I'm sure there's no such old bones here, as mine. Ha, ha! We're all suitable to our calling, we're well matched. Come into the parlour. Come into the parlour."

The parlour was the space behind the screen of rags. The old man raked the fire together with an old stair-rod, and having trimmed his smoky lamp (for it was night), with the stem of his pipe, put it in his mouth again.

While he did this, the woman who had already spoken threw her bundle on the floor, and sat down in a flaunting manner on a stool; crossing her elbows on her knees, and looking with a bold defiance at the other two.

"What odds then! What odds, Mrs. Dilber?" said the woman. "Every person has a right to take care of themselves. He always did."

"That's true, indeed!" said the laundress. "No man more so."

"Why then, don't stand staring as if you was afraid, woman; who's the wiser? We're not going to pick holes in each other's coats, I suppose?"

"No, indeed!" said Mrs. Dilber and the man together. "We should hope not."

"Very well, then!" cried the woman. "That's enough. Who's the worse for the loss of a few things like these? Not a dead man, I suppose."

"No, indeed," said Mrs. Dilber, laughing.

"If he wanted to keep 'em after he was dead, a wicked old screw," pursued the woman, "why wasn't he natural in his lifetime? If he had been, he'd have had somebody to look after him when he was struck with Death, instead of lying gasping out his last there, alone by himself."`

const EXTRACT_12_SOURCE = 'Charles Dickens, A Christmas Carol (1843), from Stave 4'

// src/data/full-texts/the-scarlet-letter.ts, Chapter XVI: A Forest Walk: 9 paragraphs, 560 words.
const EXTRACT_13 = `The road, after the two wayfarers had crossed from the Peninsula to the mainland, was no other than a footpath. It straggled onward into the mystery of the primeval forest. This hemmed it in so narrowly, and stood so black and dense on either side, and disclosed such imperfect glimpses of the sky above, that, to Hester’s mind, it imaged not amiss the moral wilderness in which she had so long been wandering. The day was chill and sombre. Overhead was a gray expanse of cloud, slightly stirred, however, by a breeze; so that a gleam of flickering sunshine might now and then be seen at its solitary play along the path. This flitting cheerfulness was always at the further extremity of some long vista through the forest. The sportive sunlight—feebly sportive, at best, in the predominant pensiveness of the day and scene—withdrew itself as they came nigh, and left the spots where it had danced the drearier, because they had hoped to find them bright.

“Mother,” said little Pearl, “the sunshine does not love you. It runs away and hides itself, because it is afraid of something on your bosom. Now, see! There it is, playing a good way off. Stand you here, and let me run and catch it. I am but a child. It will not flee from me—for I wear nothing on my bosom yet!”

“Nor ever will, my child, I hope,” said Hester.

“And why not, mother?” asked Pearl, stopping short, just at the beginning of her race. “Will not it come of its own accord when I am a woman grown?”

“Run away, child,” answered her mother, “and catch the sunshine. It will soon be gone.”

Pearl set forth at a great pace, and as Hester smiled to perceive, did actually catch the sunshine, and stood laughing in the midst of it, all brightened by its splendour, and scintillating with the vivacity excited by rapid motion. The light lingered about the lonely child, as if glad of such a playmate, until her mother had drawn almost nigh enough to step into the magic circle too.

“It will go now,” said Pearl, shaking her head.

“See!” answered Hester, smiling; “now I can stretch out my hand and grasp some of it.”

As she attempted to do so, the sunshine vanished; or, to judge from the bright expression that was dancing on Pearl’s features, her mother could have fancied that the child had absorbed it into herself, and would give it forth again, with a gleam about her path, as they should plunge into some gloomier shade. There was no other attribute that so much impressed her with a sense of new and untransmitted vigour in Pearl’s nature, as this never failing vivacity of spirits: she had not the disease of sadness, which almost all children, in these latter days, inherit, with the scrofula, from the troubles of their ancestors. Perhaps this, too, was a disease, and but the reflex of the wild energy with which Hester had fought against her sorrows before Pearl’s birth. It was certainly a doubtful charm, imparting a hard, metallic lustre to the child’s character. She wanted—what some people want throughout life—a grief that should deeply touch her, and thus humanise and make her capable of sympathy. But there was time enough yet for little Pearl.`

const EXTRACT_13_SOURCE =
  'Nathaniel Hawthorne, The Scarlet Letter (1850), from Chapter 16, A Forest Walk'

// src/data/full-texts/jekyll-and-hyde.ts, Incident at the Window: 14 paragraphs, 553 words.
const EXTRACT_14 = `It chanced on Sunday, when Mr. Utterson was on his usual walk with Mr. Enfield, that their way lay once again through the by-street; and that when they came in front of the door, both stopped to gaze on it.

“Well,” said Enfield, “that story’s at an end at least. We shall never see more of Mr. Hyde.”

“I hope not,” said Utterson. “Did I ever tell you that I once saw him, and shared your feeling of repulsion?”

“It was impossible to do the one without the other,” returned Enfield. “And by the way, what an ass you must have thought me, not to know that this was a back way to Dr. Jekyll’s! It was partly your own fault that I found it out, even when I did.”

“So you found it out, did you?” said Utterson. “But if that be so, we may step into the court and take a look at the windows. To tell you the truth, I am uneasy about poor Jekyll; and even outside, I feel as if the presence of a friend might do him good.”

The court was very cool and a little damp, and full of premature twilight, although the sky, high up overhead, was still bright with sunset. The middle one of the three windows was half-way open; and sitting close beside it, taking the air with an infinite sadness of mien, like some disconsolate prisoner, Utterson saw Dr. Jekyll.

“What! Jekyll! Jekyll!” he cried. “I trust you are better.”

“I am very low, Utterson,” replied the doctor drearily, “very low. It will not last long, thank God.”

“You stay too much indoors,” said the lawyer. “You should be out, whipping up the circulation like Mr. Enfield and me. (This is my cousin—Mr. Enfield—Dr. Jekyll.) Come now; get your hat and take a quick turn with us.”

“You are very good,” sighed the other. “I should like to very much; but no, no, no, it is quite impossible; I dare not. But indeed, Utterson, I am very glad to see you; this is really a great pleasure; I would ask you and Mr. Enfield up, but the place is really not fit.”

“Why, then,” said the lawyer, good-naturedly, “the best thing we can do is to stay down here and speak with you from where we are.”

“That is just what I was about to venture to propose,” returned the doctor with a smile. But the words were hardly uttered, before the smile was struck out of his face and succeeded by an expression of such abject terror and despair, as froze the very blood of the two gentlemen below. They saw it but for a glimpse for the window was instantly thrust down; but that glimpse had been sufficient, and they turned and left the court without a word. In silence, too, they traversed the by-street; and it was not until they had come into a neighbouring thoroughfare, where even upon a Sunday there were still some stirrings of life, that Mr. Utterson at last turned and looked at his companion. They were both pale; and there was an answering horror in their eyes.

“God forgive us, God forgive us,” said Mr. Utterson.

But Mr. Enfield only nodded his head very seriously, and walked on once more in silence.`

const EXTRACT_14_SOURCE =
  'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), Chapter 7, Incident at the Window'

// src/data/full-texts/frankenstein.ts, Chapter XI: 4 paragraphs, 588 words.
const EXTRACT_15 = `"Several changes of day and night passed, and the orb of night had greatly lessened, when I began to distinguish my sensations from each other. I gradually saw plainly the clear stream that supplied me with drink, and the trees that shaded me with their foliage. I was delighted when I first discovered that a pleasant sound, which often saluted my ears, proceeded from the throats of the little winged animals who had often intercepted the light from my eyes. I began also to observe, with greater accuracy, the forms that surrounded me, and to perceive the boundaries of the radiant roof of light which canopied me. Sometimes I tried to imitate the pleasant songs of the birds, but was unable. Sometimes I wished to express my sensations in my own mode, but the uncouth and inarticulate sounds which broke from me frightened me into silence again.

"The moon had disappeared from the night, and again, with a lessened form, showed itself, while I still remained in the forest. My sensations had, by this time, become distinct, and my mind received every day additional ideas. My eyes became accustomed to the light, and to perceive objects in their right forms; I distinguished the insect from the herb, and, by degrees, one herb from another. I found that the sparrow uttered none but harsh notes, whilst those of the blackbird and thrush were sweet and enticing.

"One day, when I was oppressed by cold, I found a fire which had been left by some wandering beggars, and was overcome with delight at the warmth I experienced from it. In my joy I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects! I examined the materials of the fire, and to my joy found it to be composed of wood. I quickly collected some branches; but they were wet, and would not burn. I was pained at this, and sat still watching the operation of the fire. The wet wood which I had placed near the heat dried, and itself became inflamed. I reflected on this; and, by touching the various branches, I discovered the cause, and busied myself in collecting a great quantity of wood, that I might dry it, and have a plentiful supply of fire. When night came on, and brought sleep with it, I was in the greatest fear lest my fire should be extinguished. I covered it carefully with dry wood and leaves, and placed wet branches upon it; and then, spreading my cloak, I lay on the ground, and sunk into sleep.

"It was morning when I awoke, and my first care was to visit the fire. I uncovered it, and a gentle breeze quickly fanned it into a flame. I observed this also, and contrived a fan of branches, which roused the embers when they were nearly extinguished. When night came again, I found, with pleasure, that the fire gave light as well as heat; and that the discovery of this element was useful to me in my food; for I found some of the offals that the travellers had left had been roasted, and tasted much more savoury than the berries I gathered from the trees. I tried, therefore, to dress my food in the same manner, placing it on the live embers. I found that the berries were spoiled by this operation, and the nuts and roots much improved.`

const EXTRACT_15_SOURCE =
  'Mary Shelley, Frankenstein (1818; the text of the revised edition of 1831), from Chapter 11'

// ─── Edexcel Paper 1 mock exams, 11 to 15 ────────────────────────────────────────

export const edexcelP1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11: H. G. Wells, The War of the Worlds, Book One, Chapter 4 (the cylinder opens)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-11',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-11-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, the narrator has come back to Horsell Common, near Woking in Surrey, where a huge metal cylinder fell from the sky early that morning. It is now evening, and a crowd has gathered round the pit the cylinder made. The lid of the cylinder has been slowly unscrewing from the inside.\n\nWords you may need: Ogilvy is an astronomer and Stent is the Astronomer Royal, and both have come to examine the cylinder; terrestrial means belonging to the Earth; a Gorgon is a monster from Greek myth with snakes for hair; fungoid means like a fungus; the aperture is the opening of the cylinder.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-11-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that something is happening inside the pit.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"a peculiar humming sound from the pit"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "a peculiar humming sound from the pit"; "a peculiar humming sound"; "humming".',
            ],
          },
          {
            id: 'edexcel-p1-11-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nThe end of the cylinder was being screwed out from within. Nearly two feet of shining screw projected. Somebody blundered against me, and I narrowly missed being pitched onto the top of the screw. I turned, and as I did so the screw must have come out, for the lid of the cylinder fell upon the gravel with a ringing concussion. I stuck my elbow into the person behind me, and turned my head towards the Thing again. For a moment that circular cavity seemed perfectly black. I had the sunset in my eyes.\n\nGive two things that happen as the cylinder opens. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The lid of the cylinder "fell upon the gravel with a ringing concussion".\n2. For a moment the opening "seemed perfectly black", because the narrator had the sunset in his eyes.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: "Nearly two feet of shining screw projected"; somebody "blundered against" the narrator, so that he nearly fell onto the screw; the lid "fell upon the gravel with a ringing concussion"; the opening "seemed perfectly black" for a moment; the narrator was dazzled: "I had the sunset in my eyes".',
            ],
          },
          {
            id: 'edexcel-p1-11-q3',
            questionNumber: 3,
            questionText:
              "Read again this part of the extract.\n\nI think everyone expected to see a man emerge—possibly something a little unlike us terrestrial men, but in all essentials a man. I know I did. But, looking, I presently saw something stirring within the shadow: greyish billowy movements, one above another, and then two luminous disks—like eyes. Then something resembling a little grey snake, about the thickness of a walking stick, coiled up out of the writhing middle, and wriggled in the air towards me—and then another.\n\nA sudden chill came over me. There was a loud shriek from a woman behind. I half turned, keeping my eyes fixed upon the cylinder still, from which other tentacles were now projecting, and began pushing my way back from the edge of the pit. I saw astonishment giving place to horror on the faces of the people about me. I heard inarticulate exclamations on all sides. There was a general movement backwards. I saw the shopman struggling still on the edge of the pit. I found myself alone, and saw the people on the other side of the pit running off, Stent among them. I looked again at the cylinder, and ungovernable terror gripped me. I stood petrified and staring.\n\nIn this part of the extract, how does the writer use language and structure to show the narrator's fear?\n\nRefer closely to the text to support your views.",
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer begins by showing what the narrator expected, so that his fear grows out of surprise. "I think everyone expected to see a man emerge", he says, "in all essentials a man". What he sees instead is described in vague, half-glimpsed phrases: "something stirring within the shadow", "greyish billowy movements, one above another". Because he cannot see clearly, neither can we, and the uncertainty is frightening. The first definite details are "two luminous disks—like eyes", where the simile suggests that they are not quite eyes, and "something resembling a little grey snake, about the thickness of a walking stick". These familiar comparisons make the alien thing worse, because ordinary objects become horrible.\n\nThe verbs then give the tentacle a will of its own. It "coiled up out of the writhing middle, and wriggled in the air towards me", and the words "towards me" make the reader feel that it is reaching for the narrator personally. The dash before "and then another" makes us pause, so the second tentacle lands like a shock.\n\nThe structure of the next paragraph shows his fear growing. It opens with two short sentences, "A sudden chill came over me. There was a loud shriek from a woman behind.", which quicken the pace. Then a series of sentences beginning "I saw" and "I heard" records the crowd\'s reaction, "astonishment giving place to horror", and its retreat, until "I found myself alone". The isolation makes his fear more intense, and the metaphor "ungovernable terror gripped me" presents terror as a hand that seizes him. The paragraph ends with "I stood petrified and staring", so instead of running, he is frozen, and the reader is left trapped at the edge of the pit with him.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The expectation of "a man" is overturned by vague, half-seen shapes: "something stirring within the shadow", "greyish billowy movements".',
                'The simile "two luminous disks—like eyes" and the comparison with "a little grey snake" turn familiar images into horrible ones.',
                'The verbs "coiled", "writhing" and "wriggled in the air towards me" make the tentacle seem to reach for him.',
                'His fear is physical: "A sudden chill came over me", and "ungovernable terror gripped me", as if terror were a hand.',
                'The final "I stood petrified and staring" shows that fear has frozen him.',
              ],
              'Structure: points you might make': [
                'The first paragraph builds slowly, detail by detail, and the dash in "and then another" delays the last horror.',
                'The second paragraph opens with short sentences ("A sudden chill came over me. There was a loud shriek from a woman behind.") that quicken the pace.',
                'The repeated "I saw ... I heard ... I saw" records the crowd fleeing until "I found myself alone".',
                'It ends with the narrator paralysed, which leaves the reader in suspense.',
              ],
            },
          },
          {
            id: 'edexcel-p1-11-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to make the reader feel the horror of the first sight of a Martian.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is highly successful in creating horror, partly because he begins with an ordinary, even comic, scene. The crowd "swayed a little", everyone "seemed greatly excited", and Ogilvy\'s exasperated "help keep these idiots back" makes the people seem like spectators at a show. A young shop assistant has been pushed into the hole by the crowd, and the narrator himself is nearly "pitched onto the top of the screw". This bustle makes the horror that follows much sharper, because nobody, including the reader, is prepared for it.\n\nThe writer also delays the moment of revelation very effectively. The screw turns, the lid falls "with a ringing concussion", and then "For a moment that circular cavity seemed perfectly black. I had the sunset in my eyes." The two short sentences hold the reader in suspense, staring into the dark with the narrator.\n\nWhen the Martian appears, the writer reveals it gradually, which makes it more frightening. First the narrator admits that "everyone expected to see a man emerge", so the reader\'s expectation is set up only to be overturned. Then come "greyish billowy movements", "two luminous disks—like eyes", and a tentacle like "a little grey snake". The crowd\'s "astonishment giving place to horror" and the narrator\'s "ungovernable terror" prepare us, and only then does "A big greyish rounded bulk, the size, perhaps, of a bear" rise out of the cylinder. The simile "it glistened like wet leather" is unpleasant and vivid, and the creature\'s slowness, "rising slowly and painfully", makes it seem more alive and more horrible.\n\nThe close-up description is the most powerful part. The creature has "a mouth under the eyes, the lipless brim of which quivered and panted, and dropped saliva", and "The whole creature heaved and pulsated convulsively". These details are disgusting, and the writer then gathers them into one enormous sentence, listing "the peculiar V-shaped mouth", "the Gorgon groups of tentacles" and "the extraordinary intensity of the immense eyes", until it ends with the adjectives "vital, intense, inhuman, crippled and monstrous". The list piles horror on horror, and the final word, "monstrous", sums them all up. The narrator also speaks directly to us: "Those who have never seen a living Martian can scarcely imagine the strange horror of its appearance." This makes us feel that we are being told the truth by a witness, and his confession that he was "overcome with disgust and dread" gives the reader permission to feel the same.\n\nSome readers might feel that the scientific explanations, such as "the greater gravitational energy of the earth", interrupt the horror by making the narrator sound like a lecturer. However, I think they make the Martian more believable, and therefore more frightening, because it is a real creature struggling in our world rather than a fantasy. The ending is also very effective. Just as the monster "vanished", toppling into the pit, "another of these creatures appeared darkly in the deep shadow of the aperture". The relief lasts only a moment, and the horror is doubled. Overall the extract succeeds brilliantly in making the first sight of a Martian both disgusting and terrifying.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The excited, almost comic crowd ("help keep these idiots back") makes the horror that follows sharper.',
                'The opening of the lid is delayed by small events, and the dark "circular cavity" leaves the reader waiting.',
                'The writer overturns the expectation of "a man" and reveals the creature bit by bit: movements, eyes, tentacles, then the "big greyish rounded bulk".',
                'The close-up description ("the lipless brim of which quivered and panted, and dropped saliva") is disgusting, and the long list of features ends "inhuman, crippled and monstrous".',
                'The narrator speaks to the reader ("Those who have never seen a living Martian") and admits "disgust and dread".',
                'The ending, as the creature falls and "another of these creatures appeared", multiplies the threat. Some may find the scientific detail ("the greater gravitational energy of the earth") slows the horror; others that it makes it more believable.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-11-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-11-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, saw something that seemed impossible. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a crowd standing round a deep pit on an open common at sunset, all staring into it. Picture 2: a streak of strange green light falling through the night sky over a sleeping town.\n\nWrite a story about a first meeting. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nI had imagined my grandfather so many times that I was not sure I would recognise the real one.\n\nFor twelve years he had been a voice on the phone, crackling across five thousand miles, always asking the same three questions: was I eating properly, was I working hard at school, and was I being kind to my mother. He had been a face on a screen, frozen and jerky, with a ceiling fan turning slowly behind his head. He had been the man in the old photograph on our hallway wall, young and thin, with a moustache like a paintbrush and a bicycle almost as tall as he was. But he had never been a person who could stand in a room with me.\n\nNow he was somewhere in the sky above Manchester, on a plane that was forty minutes late.\n\nThe arrivals hall was too bright and too loud. Families clustered round the barrier with balloons and flowers and hand-written signs. A small boy in a superhero cape had fallen asleep across two chairs. Every time the sliding doors opened, a ripple of hope ran through the crowd, and then, when the wrong people came through, it died away again. Mum kept checking her phone and smoothing her hair. I had never seen her nervous before.\n\n"What if he doesn\'t like me?" I said.\n\nShe laughed, but it came out shaky. "He already likes you. He\'s liked you since before you were born."\n\nThe doors opened again. A businessman with a wheelie case. Two students in matching hoodies. An enormous family in bright clothes, all talking at once, swallowed instantly by an even larger family waiting for them. And then, at the back, moving slowly, a small old man pushing a trolley with one battered brown suitcase on it.\n\nHe was much smaller than I had expected. That was the first thing. In the photographs and on the screen he had always seemed tall, but this man barely came up to Mum\'s shoulder. He wore a grey wool jacket that was too warm for June and a flat cap, and he was looking around the hall with an expression that I recognised at once, because I had seen it on my own face in the mirror on my first day at secondary school. He looked lost.\n\nMum made a sound I had never heard before, halfway between a laugh and a sob, and ducked under the barrier.\n\nI stayed where I was. I watched them hold each other for a long time, rocking slightly, his cap knocked sideways, and I felt suddenly shy, as though I had walked in on something that did not belong to me.\n\nThen he looked over her shoulder, and saw me.\n\nHe did not ask any of the three questions. He let go of Mum, very gently, and walked over to me, and he took my face in both his hands. His palms were dry and warm and rough, like the pages of an old book. He looked at me for so long that I began to blush.\n\n"Ah," he said at last, softly, in English. "There you are."\n\nAs if he had been looking for me for a long time. As if I were the one who had finally arrived.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about something in the sky, an astonishing performance, a strange coincidence or an impossible rescue.',
                'Question 6 could use the crowd round the pit, the falling light, or neither picture, and the meeting could be with a person, an animal or something stranger.',
                'Like the extract, a strong piece might delay the key moment and reveal what is seen a little at a time.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 12: Charles Dickens, A Christmas Carol, Stave 4 (old Joe's shop)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-12',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-12-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, the Ghost of Christmas Yet to Come, a silent Phantom, is showing Ebenezer Scrooge what will happen after the death of a man who died alone and unloved. Scrooge does not yet know who the man is. The Phantom leads him to a shop in one of the poorest parts of London, where three people have come to sell things they have taken from the dead man.\n\nWords you may need: repute means reputation; beetling means jutting out; offal is the waste parts of an animal; sepulchres are tombs; frousy means dirty and musty; a charwoman is a cleaner and a laundress a washerwoman; here's a chance means what a coincidence; skreeks means squeaks; What odds? means What does it matter?; a screw is a miser.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-12-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows that this part of the town has a bad name.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"its bad repute"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept either of: "its bad repute"; "bad repute". Not "an obscure part of the town": obscure means little known or out of the way, which is not the same as having a bad name.',
            ],
          },
          {
            id: 'edexcel-p1-12-q2',
            questionNumber: 2,
            questionText:
              "Read again this part of the extract.\n\nFar in this den of infamous resort, there was a low-browed, beetling shop, below a pent-house roof, where iron, old rags, bottles, bones, and greasy offal, were bought. Upon the floor within, were piled up heaps of rusty keys, nails, chains, hinges, files, scales, weights, and refuse iron of all kinds. Secrets that few would like to scrutinise were bred and hidden in mountains of unseemly rags, masses of corrupted fat, and sepulchres of bones. Sitting in among the wares he dealt in, by a charcoal stove, made of old bricks, was a grey-haired rascal, nearly seventy years of age; who had screened himself from the cold air without, by a frousy curtaining of miscellaneous tatters, hung upon a line; and smoked his pipe in all the luxury of calm retirement.\n\nGive two things you learn about old Joe's shop. You may answer in your own words or with quotations.",
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. It buys "iron, old rags, bottles, bones, and greasy offal".\n2. Its floor is piled with "heaps of rusty keys, nails, chains, hinges".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: it is "low-browed" and "beetling", under "a pent-house roof"; it buys "iron, old rags, bottles, bones, and greasy offal"; its floor is piled with "rusty keys, nails, chains, hinges"; it hides secrets in "mountains of unseemly rags"; it is heated by "a charcoal stove, made of old bricks"; old Joe keeps out the cold with "a frousy curtaining of miscellaneous tatters".',
            ],
          },
          {
            id: 'edexcel-p1-12-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "Let the charwoman alone to be the first!" to "looking with a bold defiance at the other two".\n\nIn this part of the extract, how does the writer use language and structure to present the people at old Joe\'s shop?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents the people at the shop as greedy and shameless, mainly through their own words. The charwoman\'s first speech turns their meeting into a kind of mock ceremony: "Let the charwoman alone to be the first! ... Let the laundress alone to be the second; and let the undertaker\'s man alone to be the third." The repeated pattern, counting them off one by one, makes it sound as though they are proud to have arrived in order, like winners in a race. Her exclamations "Look here, old Joe, here\'s a chance! If we haven\'t all three met here without meaning it!" make a joke of the coincidence that has brought them together, as if it were a lucky accident and not a cause for shame.\n\nOld Joe is presented as a cheerful rogue. He jokes about his own shop, "Ah! How it skreeks!", and compares himself with its rusty hinges: "I\'m sure there\'s no such old bones here, as mine." His comment "We\'re all suitable to our calling, we\'re well matched" shows that he sees nothing wrong in what they do; he is almost proud of it. The repetition of "Come into the parlour. Come into the parlour." shows his eagerness to begin business. The dialect, such as "an\'t", makes the characters sound real and rough.\n\nThe structure lets the characters reveal themselves. This part is mostly dialogue, with only short passages of narration, so the reader judges them by what they say. The narration that does appear adds to the grim mood: the parlour is only "the space behind the screen of rags", and the bracketed aside "(for it was night)" reminds us of the darkness in which they work. The part ends with the woman throwing "her bundle on the floor" and sitting "in a flaunting manner on a stool", "looking with a bold defiance at the other two". Her pose shows that she feels no shame, and it prepares the reader for the argument that follows.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The pattern "Let the charwoman alone to be the first ... the second ... the third" turns their meeting into a mock ceremony.',
                'The exclamations "here\'s a chance!" and "If we haven\'t all three met here without meaning it!" make a joke of the coincidence (the "chance") that has brought them together, not a cause for shame.',
                'Old Joe jokes about his own "old bones" and the rusty hinges, and "We\'re all suitable to our calling, we\'re well matched" shows that they are proud of their trade.',
                'The repeated "Come into the parlour" shows his eagerness to do business.',
                'The woman "threw her bundle on the floor" and sat "in a flaunting manner", "looking with a bold defiance", which shows that she feels no shame.',
              ],
              'Structure: points you might make': [
                'The part is mostly dialogue, so the characters reveal themselves in their own words and dialect ("an\'t", "skreeks").',
                'The bracketed "(for it was night)" reminds the reader of the darkness around them.',
                "It ends on the woman's defiant pose, preparing for the argument that follows.",
              ],
            },
          },
          {
            id: 'edexcel-p1-12-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create a grim and disturbing atmosphere.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates a grim and disturbing atmosphere very successfully, beginning with the setting. Scrooge is led into "an obscure part of the town" with "its bad repute", and the description is a catalogue of squalor: "The ways were foul and narrow; the shops and houses wretched; the people half-naked, drunken, slipshod, ugly." The list of adjectives is blunt and unsparing, and the simile "Alleys and archways, like so many cesspools" is deliberately disgusting. The paragraph ends with a three-part phrase, "the whole quarter reeked with crime, with filth, and misery", and the verb "reeked" makes the reader almost smell it.\n\nOld Joe\'s shop continues the gloom. It is "low-browed" and "beetling", and it buys "iron, old rags, bottles, bones, and greasy offal". The long list of objects on the floor, "rusty keys, nails, chains, hinges, files, scales, weights, and refuse iron of all kinds", suggests a place where everything ends up when it is no longer wanted. The most disturbing sentence hints at something worse: "Secrets that few would like to scrutinise were bred and hidden in mountains of unseemly rags, masses of corrupted fat, and sepulchres of bones." The images of corruption and tombs fill the shop with death, even before the reader learns why the visitors have come.\n\nThe writer then makes the atmosphere more disturbing through humour. When the three visitors recognise each other, "they all three burst into a laugh", and old Joe jokes about his "old bones". The laughter is unsettling, because we know they have come to sell a dead man\'s belongings. Old Joe is described as "a grey-haired rascal" who sits "in all the luxury of calm retirement", and the irony of "luxury" in such a place adds to the grim comedy.\n\nThe dialogue is the most chilling part. The charwoman says, "Every person has a right to take care of themselves. He always did." This argument is disturbing because it is exactly the kind of thing the dead man himself believed, so his selfishness has come back to rob him. Her question, "Who\'s the worse for the loss of a few things like these? Not a dead man, I suppose.", shows complete indifference to death, and Mrs Dilber\'s laughing agreement makes it worse. The final speech, describing a man "lying gasping out his last there, alone by himself", is perhaps the darkest moment, because it reveals that he died without anyone to care for him.\n\nSome readers might feel that the comic dialogue and dialect, such as "skreeks" and "an\'t", lighten the grim mood, making the scene feel more like a comedy than a horror. However, I think the humour is exactly what makes it so disturbing. People laughing over a dead man\'s belongings are more horrible than people weeping, because they show how little his life meant to anyone. For a reader who suspects who the dead man might be, the scene is a frightening warning. Overall the writer succeeds in creating an atmosphere that is grim, squalid and, above all, morally disturbing.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The district is described through dirt and crime: "The ways were foul and narrow", alleys "like so many cesspools", a quarter that "reeked with crime, with filth, and misery".',
                'The lists of junk ("rusty keys, nails, chains, hinges, files, scales, weights") and images of decay and death ("masses of corrupted fat, and sepulchres of bones") build the gloom.',
                'Old Joe is a "grey-haired rascal" in "the luxury of calm retirement", an ironic phrase.',
                'The three thieves meet and "burst into a laugh", and their laughter at a death is disturbing.',
                'Their excuses ("Every person has a right to take care of themselves. He always did.") echo the selfishness the dead man showed.',
                'The last speech, of a man "lying gasping out his last there, alone by himself", is chilling. Some may find the comedy lightens the grimness; others that laughter at death makes it worse.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-12-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-12-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, found out what other people really thought. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a cluttered junk shop lit by a single smoky lamp. Picture 2: a narrow city alley at night, with wet cobbles shining under a street lamp.\n\nWrite about a place that most people would rather avoid. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nNobody goes to Harker's Yard unless they have to. It lies at the bottom of Mill Lane, behind a fence of corrugated iron that leans like a row of bad teeth, and even the foxes seem to cross the road to avoid it.\n\nYou smell it before you see it. Oil, first of all, thick and black and old, the smell that soaks into the ground and never leaves. Then rust, sharp and metallic, like the taste of a bitten lip. Underneath, something sweeter and more rotten, which might be the river or might be something you would rather not think about.\n\nThe gate is chained, but the chain is loose, and the gap is just wide enough for a thin person to squeeze through. Inside, the yard opens out like a valley of iron. Cars are stacked four or five high in towers that sway very slightly in the wind, their windows smashed, their doors hanging open like mouths that have forgotten what they were going to say. A washing machine lies on its back with its door gaping. A child's bicycle, bent into a shape that no bicycle should be, is tangled in a coil of wire. Everything here was once wanted. Everything here has been thrown away.\n\nThe silence is the strangest part. You would expect a scrapyard to be loud, full of crashing and grinding, but on a Sunday afternoon there is nothing. Only the creak of metal cooling, and the faint ticking of the towers, and now and then the dry rattle of a crisp packet blown across the concrete. Your own footsteps sound far too loud. Without meaning to, you begin to walk on tiptoe.\n\nIn the far corner stands the office: a caravan on bricks, its paint faded to the colour of weak tea. A sign in the window, written in marker pen, says BACK IN 10 MINS. Judging by the dust on it, the sign has been there for several years. Behind the glass, a calendar still shows a month from long ago, and a mug sits on the desk beside a phone with a curly cord, as if someone simply stood up one day, walked out and never came back.\n\nPeople in town tell stories about the yard. They say that old Harker kept a dog the size of a pony, and that some nights you can still hear it barking. They say that a boy climbed one of the towers for a dare and that the whole thing came down around him. They say all sorts of things. Nobody knows which, if any, are true, and that is the point of a place like this. It is a place for stories, because nobody goes close enough to check.\n\nBut if you stand very still in the middle of the yard, in the late afternoon, something happens. The sun drops low over the river and comes slanting through the gaps between the towers, and for a few minutes every scratched panel and broken mirror catches fire. The rust glows orange and gold. The puddles of oil shine with rainbows. For those few minutes, Harker's Yard is the most beautiful place I have ever seen.\n\nThen the sun goes down, and it is just a scrapyard again, and you squeeze back out through the gap in the gate, and you do not tell anyone where you have been.",
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about an overheard conversation, a message read by mistake, or a surprise that showed how much someone was liked.',
                'Question 6 could use the junk shop, the alley, or neither picture: a scrapyard, an empty shopping centre, a waiting room.',
                'Like the extract, a strong piece might build atmosphere through lists of precise detail, and let characters reveal themselves in their own words.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 13: Nathaniel Hawthorne, The Scarlet Letter, Chapter 16 (the walk into the forest)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-13',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-13-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nThe Scarlet Letter is set in the 1640s, in the strict Puritan settlement of Boston, in New England. Hester Prynne has been made to wear a scarlet letter A on her dress as a punishment for breaking the settlement's moral laws. In this extract, seven years later, she walks into the forest with her young daughter, Pearl.\n\nWords you may need: wayfarers are travellers; primeval means ancient and untouched; nigh means near; sportive means playful; pensiveness means thoughtful sadness; vivacity means liveliness; untransmitted means not passed down; scrofula is a disease; to humanise is to make more human and kind.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-13-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first two sentences of the extract.\n\nGive one word or phrase from them which shows what the way through the forest is like.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"no other than a footpath"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "no other than a footpath"; "a footpath"; "It straggled onward"; "straggled".',
            ],
          },
          {
            id: 'edexcel-p1-13-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\n“Mother,” said little Pearl, “the sunshine does not love you. It runs away and hides itself, because it is afraid of something on your bosom. Now, see! There it is, playing a good way off. Stand you here, and let me run and catch it. I am but a child. It will not flee from me—for I wear nothing on my bosom yet!”\n\n“Nor ever will, my child, I hope,” said Hester.\n\n“And why not, mother?” asked Pearl, stopping short, just at the beginning of her race. “Will not it come of its own accord when I am a woman grown?”\n\nGive two things that Pearl says about the sunshine. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. It "does not love" her mother and "runs away and hides itself".\n2. It "will not flee from me", so she can run and catch it.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: it "does not love" her mother; it "runs away and hides itself"; it "is afraid of something on your bosom"; she wants to "run and catch it"; it "will not flee from me", because she wears nothing on her bosom.',
            ],
          },
          {
            id: 'edexcel-p1-13-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "Pearl set forth at a great pace" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to present Pearl?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Pearl through images of light. When she races ahead, she "did actually catch the sunshine, and stood laughing in the midst of it, all brightened by its splendour, and scintillating with the vivacity excited by rapid motion". The verb "scintillating" means sparkling, so Pearl seems to give off light herself. The personification "The light lingered about the lonely child, as if glad of such a playmate" suggests that nature loves her, and "the magic circle" makes her seem like a fairy child. Yet the adjective "lonely" hints that, apart from the sunlight, she has no playmates at all.\n\nThe structure of this part then tests Pearl\'s words from earlier. When Hester tries to "grasp some of it", "the sunshine vanished", so the light avoids her mother, just as Pearl said it would. The writer then adds a stranger idea: Hester "could have fancied that the child had absorbed it into herself, and would give it forth again". Pearl is presented almost as a store of light, something more than an ordinary child.\n\nThe final paragraph changes from action to reflection, and the narrator\'s view of Pearl becomes more complicated. She has "this never failing vivacity of spirits" and lacks "the disease of sadness", which sounds like a gift. But the narrator calls it "a doubtful charm, imparting a hard, metallic lustre to the child\'s character". The metaphor of metal suggests that her brightness is cold and hard, like polished metal rather than warm sunlight. She lacks "a grief that should deeply touch her, and thus humanise and make her capable of sympathy". The part ends on a short, gentle sentence, "But there was time enough yet for little Pearl.", which suggests that she may still change, and leaves the reader wondering what grief might do it.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'Light surrounds her: she "stood laughing in the midst of it, all brightened by its splendour, and scintillating with the vivacity excited by rapid motion".',
                'The personification "The light lingered about the lonely child, as if glad of such a playmate" suggests that nature loves her, but "lonely" hints at her isolation.',
                '"the magic circle" makes her seem like a fairy child.',
                'Hester fancies "the child had absorbed it into herself", as if Pearl were a source of light.',
                'Her brightness has a cold side: "a hard, metallic lustre to the child\'s character", and she needs "a grief that should deeply touch her".',
              ],
              'Structure: points you might make': [
                "The part moves from action and dialogue (the race for the sunshine) to the narrator's long reflection on Pearl's nature.",
                'When Hester reaches out, "the sunshine vanished", which proves Pearl\'s words.',
                'It ends on a short, gentle sentence, "But there was time enough yet for little Pearl.", which hints that she may change.',
              ],
            },
          },
          {
            id: 'edexcel-p1-13-q4',
            questionNumber: 4,
            questionText:
              "In this extract, the writer sets out to use the forest and the sunlight to show the characters' feelings.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.",
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is very successful in using the setting to show the characters\' feelings, although in places the meaning is made quite obvious. From the start, the forest mirrors Hester\'s state of mind. The footpath "straggled onward into the mystery of the primeval forest", and the trees stand "so black and dense on either side" that they allow only "imperfect glimpses of the sky above". The narrator then tells us directly that, to Hester\'s mind, it "imaged not amiss the moral wilderness in which she had so long been wandering". This makes the link between the dark forest and Hester\'s guilt and loneliness very clear. Some readers might feel that this explanation is too heavy-handed, because it tells us what to think instead of letting the image work. However, it does establish the symbolism that the rest of the extract develops more subtly.\n\nThe weather adds to the mood. "The day was chill and sombre", with "a gray expanse of cloud", and the sunshine appears only as "a gleam of flickering sunshine" that is "always at the further extremity of some long vista". This is a powerful image of happiness that is always just out of reach. The sunlight "withdrew itself as they came nigh, and left the spots where it had danced the drearier", so even the hope of brightness makes the gloom worse.\n\nThe most effective part is the way the writer gives this symbolism to Pearl, who speaks it with a child\'s bluntness. "Mother," she says, "the sunshine does not love you. It runs away and hides itself, because it is afraid of something on your bosom." The reader knows that the "something" is the scarlet letter, and Pearl\'s innocent words are more painful than any narrator\'s comment. When she says "I wear nothing on my bosom yet!", Hester\'s quiet reply, "Nor ever will, my child, I hope", reveals a mother\'s love and her fear that Pearl might suffer as she has.\n\nThe writer then acts out the idea. Pearl "did actually catch the sunshine, and stood laughing in the midst of it", and the light "lingered about the lonely child, as if glad of such a playmate". But when Hester says, "now I can stretch out my hand and grasp some of it", "the sunshine vanished". The scene shows, without needing to explain, that joy belongs to the child and not to the mother, and I find this simple action very moving.\n\nThe final paragraph returns to the narrator\'s reflection, and it adds a surprising twist. Pearl\'s brightness is not wholly good: it gives "a hard, metallic lustre to the child\'s character", and she lacks "a grief that should deeply touch her". This suggests that the sunlight, like Pearl, is beautiful but cold. Some readers may find this long, abstract paragraph slows the extract down after the lively chase. Yet it deepens our understanding of both characters, since Hester\'s sorrow and Pearl\'s lack of it are two sides of the same story. Overall, despite some moments where the symbolism is spelled out, the writer uses the forest and the sunlight very effectively to show the feelings of a sad mother and her strange, bright child.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The narrow, "black and dense" forest "imaged not amiss the moral wilderness" of Hester\'s life, so the setting mirrors her state of mind.',
                'The "chill and sombre" day and the "gray expanse of cloud" create gloom, while the sunshine is always "at the further extremity", like happiness out of reach.',
                'Pearl\'s words, "the sunshine does not love you", say aloud what the setting suggests, and link the gloom to the letter on Hester\'s "bosom".',
                'Hester\'s reply, "Nor ever will, my child, I hope", shows her love and her sorrow.',
                'The sunshine gathers round Pearl but vanishes when Hester reaches for it.',
                'Some may find the meaning too plainly explained ("imaged not amiss the moral wilderness") or the final reflection slow; others that the simple dialogue and the vanishing light are subtle and moving.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-13-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-13-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, spent a day outdoors with someone they love. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a narrow path through a dark forest, with a single patch of sunlight far ahead. Picture 2: a child laughing in a pool of sunlight among tall trees.\n\nWrite about a walk that you will never forget. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe last walk I took with my grandfather was along the cliffs at Saltwick, on a Sunday in September, three days before he moved into Oakfield House.\n\nHe had walked that path every Sunday of his life. He knew every stile and every gorse bush, and the place where the fence had blown down in the storm of 1987, and the exact spot where, he claimed, he had once seen a seal wave at him. But his legs had grown slow and uncertain that summer, and he had started to forget things: where he had put his glasses, what day it was, sometimes my name. So the doctors had decided, and Mum had decided, and now everything was arranged.\n\n"One more go," he said, when I arrived that morning. "Before they lock me up."\n\n"Grandad. It\'s a care home, not a prison."\n\n"Same thing, with better biscuits."\n\nThe day could not decide what it wanted to be. Heavy grey clouds hung over the sea, but every now and then they tore apart and a shaft of sunlight fell through and walked across the water, turning a patch of it silver, like a spotlight searching for something. Then the clouds closed again, and the sea went back to the colour of slate.\n\nWe walked slowly. Grandad held my arm on one side and his stick on the other, and every few minutes he stopped, not to rest, he insisted, but to look. He looked at the sea for a long time. He looked at the gulls hanging on the wind above the cliff edge, perfectly still, as if they had been pinned there. He looked at the heather, which had gone from purple to rust, and he rubbed a sprig of it between his fingers and smelt it, and closed his eyes.\n\n"Your grandmother loved this," he said. "She used to say it smelt of honey and bonfires."\n\nI had never met my grandmother. She died before I was born. But in that moment, with the wind pulling at our coats and the heather between his fingers, I felt as though she were walking with us too.\n\nHalfway along, the clouds broke properly for the first time. The sunlight came down over the headland all at once, so bright that we both had to shade our eyes, and the whole cliff blazed: the gorse yellow, the grass green, the sea suddenly blue right out to the edge of the world. Grandad laughed out loud. It was a young laugh, the laugh of the boy who had first walked this path all those years ago, and I had not heard it for months.\n\n"There," he said, pointing. "There\'s my seal."\n\nI looked, and looked, and saw nothing but a dark rock with the waves washing over it. But I said, "I see it," because he wanted me to, and because, in a way, I did.\n\nWe sat on the bench at the top of the steps for a long time, until the sun went in again and the wind turned cold. Then we walked back the way we had come, even more slowly than before.\n\nHe has been at Oakfield House for two years now. Some days he knows me, and some days he does not. But on the good days, he always asks the same question.\n\n"Have you been to the cliffs? Did you see my seal?"\n\nAnd I always tell him yes.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be a day at the beach, in a park or on a hill, perhaps a last day before a change.',
                'Question 6 could use the forest path, the child in the sunlight, or neither picture.',
                'Like the extract, a strong piece might let the weather and the setting carry the feelings, so that the reader senses them without being told.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 14: Robert Louis Stevenson, Jekyll and Hyde, Chapter 7 (the face at the window)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-14',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-14-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Mr Utterson, a London lawyer, is out walking with his cousin, Mr Enfield. More than a year before, Enfield had told him about a violent man named Mr Hyde, who used a door in a quiet side street. Since then Hyde has disappeared, and Utterson's old friend, Dr Jekyll, has shut himself away from everyone.\n\nWords you may need: the by-street is the side street where the door stands; the court is a small yard off the by-street, overlooked by the windows of Dr Jekyll's private room; mien means expression or manner; disconsolate means unhappy beyond comfort; abject means utterly wretched; a thoroughfare is a main street.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-14-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows what Utterson and Enfield do when they reach the door.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"both stopped to gaze on it"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "both stopped to gaze on it"; "stopped to gaze".',
            ],
          },
          {
            id: 'edexcel-p1-14-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nThe court was very cool and a little damp, and full of premature twilight, although the sky, high up overhead, was still bright with sunset. The middle one of the three windows was half-way open; and sitting close beside it, taking the air with an infinite sadness of mien, like some disconsolate prisoner, Utterson saw Dr. Jekyll.\n\n“What! Jekyll! Jekyll!” he cried. “I trust you are better.”\n\n“I am very low, Utterson,” replied the doctor drearily, “very low. It will not last long, thank God.”\n\nGive two ways in which this part of the extract shows that Jekyll is unhappy. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He sits "with an infinite sadness of mien", "like some disconsolate prisoner".\n2. He tells Utterson, "I am very low".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he sits "with an infinite sadness of mien"; he looks "like some disconsolate prisoner"; he says "I am very low"; he replies "drearily"; he seems glad that his state "will not last long".',
            ],
          },
          {
            id: 'edexcel-p1-14-q3',
            questionNumber: 3,
            questionText:
              'Read again this part of the extract.\n\n“That is just what I was about to venture to propose,” returned the doctor with a smile. But the words were hardly uttered, before the smile was struck out of his face and succeeded by an expression of such abject terror and despair, as froze the very blood of the two gentlemen below. They saw it but for a glimpse for the window was instantly thrust down; but that glimpse had been sufficient, and they turned and left the court without a word. In silence, too, they traversed the by-street; and it was not until they had come into a neighbouring thoroughfare, where even upon a Sunday there were still some stirrings of life, that Mr. Utterson at last turned and looked at his companion. They were both pale; and there was an answering horror in their eyes.\n\n“God forgive us, God forgive us,” said Mr. Utterson.\n\nBut Mr. Enfield only nodded his head very seriously, and walked on once more in silence.\n\nIn this part of the extract, how does the writer use language and structure to show the effect of what Utterson and Enfield see?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer makes the change in Jekyll sudden and violent. His friendly reply ends "with a smile", but "the words were hardly uttered, before the smile was struck out of his face". The verb "struck" makes it sound as if something has hit him. The expression that replaces it is one of "abject terror and despair", the strongest words the writer could choose, and its effect on the watchers is shown through the hyperbole that it "froze the very blood of the two gentlemen below". The reader is told the effect but never shown the cause, which makes the moment more frightening.\n\nThe speed of the moment adds to its power. They saw it "but for a glimpse", because "the window was instantly thrust down". The adverb "instantly" and the forceful verb "thrust" suggest that Jekyll, or something in him, is desperate to hide what has happened. Yet "that glimpse had been sufficient", which shows that a single second was enough to horrify them.\n\nThe structure then slows down to show their shock. They "turned and left the court without a word", and the next sentence repeats the idea: "In silence, too, they traversed the by-street". This long sentence follows them all the way to "a neighbouring thoroughfare, where even upon a Sunday there were still some stirrings of life", as though they need to reach ordinary life again before they can face each other. Only then does Utterson "at last" look at Enfield, and they see "an answering horror in their eyes", so the horror is shared and confirmed. The repeated "God forgive us, God forgive us" sounds like a prayer, as if they feel they have seen something evil, or failed their friend. The part ends with Enfield\'s silent nod and the words "walked on once more in silence", so nothing is explained, and the mystery stays with the reader.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The violent verb in "the smile was struck out of his face" makes the change sudden, as if Jekyll had been hit.',
                '"abject terror and despair" names the most extreme feelings, and "froze the very blood" shows their effect on the two watchers.',
                'The window is "instantly thrust down", and they see it "but for a glimpse", so the moment is over almost before it begins.',
                'Silence is repeated: "without a word", "In silence, too", "walked on once more in silence".',
                '"an answering horror in their eyes" shows that they share the horror, and the repeated "God forgive us" sounds like a prayer.',
              ],
              'Structure: points you might make': [
                'The turn comes in the middle of a paragraph ("But the words were hardly uttered"), so the reader is as unprepared as they are.',
                'A long sentence follows them along the by-street until they reach "some stirrings of life", delaying their reaction.',
                "The part ends with a short line of speech and Enfield's silent nod, and nothing is explained.",
              ],
            },
          },
          {
            id: 'edexcel-p1-14-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create a sense of mystery and dread.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates mystery and dread very successfully, chiefly by withholding the most important information. The extract begins in an ordinary, relaxed way, with Utterson "on his usual walk with Mr. Enfield" on a Sunday. Enfield\'s comment, "that story\'s at an end at least. We shall never see more of Mr. Hyde.", creates a false sense of security, and the reader who suspects that the story is far from over feels uneasy at once.\n\nThe setting introduces the first hint of something wrong. The court is "very cool and a little damp, and full of premature twilight, although the sky, high up overhead, was still bright with sunset". Darkness has come too early to the place where Jekyll lives, while ordinary daylight lingers above, which suggests that something unnatural surrounds him. Jekyll himself sits "taking the air with an infinite sadness of mien, like some disconsolate prisoner". The simile of a prisoner is intriguing, because nobody has locked him up, so the reader wonders what is keeping him inside.\n\nJekyll\'s words deepen the mystery. He says he is "very low" and that "It will not last long, thank God", which is a strange and worrying thing to be grateful for. When Utterson invites him to walk, he answers "no, no, no, it is quite impossible; I dare not". The triple "no" and the word "dare" suggest fear rather than illness, and the reader is left asking what he is afraid of. Utterson\'s cheerful, chatty replies, "You should be out, whipping up the circulation", contrast with Jekyll\'s gloom, and they make what happens next more shocking.\n\nThe climax is sudden. Just as Jekyll smiles and agrees to talk, "the smile was struck out of his face and succeeded by an expression of such abject terror and despair, as froze the very blood of the two gentlemen below". Then "the window was instantly thrust down". The writer gives us the effect without the cause: we are told the look on Jekyll\'s face, but never what put it there, or what else the two men glimpsed. I think this is the source of the dread, because each reader imagines something worse than any description could provide.\n\nThe ending keeps the mystery alive. The men leave "without a word", walk "In silence", and look at each other only when they reach "some stirrings of life". The "answering horror in their eyes" and Utterson\'s "God forgive us, God forgive us" suggest that they have glimpsed something evil, and Enfield\'s silent nod shows that neither can put it into words.\n\nSome readers may find the extract frustrating. It is very short, it contains little description, and it tells us the men were horrified rather than showing us what horrified them. However, I believe that this restraint is exactly what makes it effective. By leaving a gap at the centre of the scene, the writer makes the reader do the imagining, and the silence at the end lingers long after the final line. Overall the extract succeeds very well in creating both mystery and dread.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'It begins calmly, on a Sunday walk, and Enfield\'s "that story\'s at an end at least" creates false security.',
                'The court is "full of premature twilight" while the sky is "still bright with sunset": darkness gathers where Jekyll is.',
                'Jekyll is "like some disconsolate prisoner", and his "I dare not" and "no, no, no" hint at a secret.',
                'Utterson\'s cheerful chatter makes the sudden "abject terror and despair" more shocking.',
                'The cause is never shown: the window is "instantly thrust down", and the two men leave in silence.',
                "The short chapter shows Jekyll's terror and the two men's horror but never their cause. Some may find this frustrating; others that the gap the reader must fill is what creates the dread.",
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-14-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-14-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, were worried about a friend. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a face at an upstairs window of a tall, dark house, half hidden by a curtain. Picture 2: two people walking away down an empty city street at dusk.\n\nWrite a story with the title "The Window". Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nLeo stopped coming to football in February, and for a while I told myself it was nothing.\n\nWe had played together every Saturday since we were six, on the muddy pitch behind the leisure centre, Leo in goal and me in defence, shouting at each other the whole match like an old married couple. He was the loudest person I knew. He sang in the showers. He did impressions of every teacher in the school, even the ones who had only been there a week. So when he missed one match, and then another, and then a third, I noticed. But I did not say anything. You don\'t, do you? You wait for it to sort itself out.\n\nAt school he was different too, although it took me a while to put my finger on how. He still came. He still sat next to me in maths. But the noise had gone out of him. He laughed at my jokes a beat too late, as if he had to be reminded to. At lunch he pushed his food around the plate and checked his phone every few minutes, then put it face down on the table, as though it had said something he did not want to hear.\n\n"You all right?" I asked him once, in the queue for the bus.\n\n"Fine," he said. "Just tired."\n\nHe was not fine. I knew that the way you know when a song is played slightly out of tune. But "fine" is a locked door, and I did not know how to knock.\n\nIn the end it was his little sister who told me. Maisie was eight, and she sat behind us on the bus, and one afternoon, when Leo had gone to the front to talk to someone, she leaned forward and whispered in my ear.\n\n"Dad\'s in hospital," she said. "Again. Leo doesn\'t want anyone to know."\n\nI did not sleep much that night. I lay in bed and thought about all the Saturdays Leo\'s dad had stood on the touchline in his huge orange coat, cheering louder than anyone, bringing a flask of hot chocolate for the whole team at half-time. I thought about how I had not noticed that he had stopped coming either.\n\nThe next day, after school, I did not get on the bus. I walked to Leo\'s house instead, and stood outside for a long time, rehearsing what I would say. Every version sounded wrong. In the end I just knocked.\n\nHe opened the door in his school shirt, and when he saw me, his face did something complicated.\n\n"Maisie told you," he said. It was not a question.\n\n"Yeah."\n\nFor a moment I thought that he was going to shut the door. Then his shoulders dropped, as though he had been carrying something very heavy for a very long time and had finally been allowed to put it down.\n\nWe did not talk much, that first afternoon. We sat on his bedroom floor and played the same video game we had played when we were ten, and he lost on purpose, the way he always used to, so that I would not feel bad. And then, somewhere in the middle of the third level, without looking at me, he started to tell me everything.\n\nHis dad came home in April. He was thinner, and quieter, and he sat on a folding chair on the touchline instead of standing. But he still brought the hot chocolate, and when Leo saved a penalty in the last minute of the season, he cheered louder than anyone.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a friend who has changed, gone quiet, moved away or kept a secret, and what you did about it.',
                'Question 6 could use the face at the window, the two people in the street, or neither picture.',
                'Like the extract, a strong piece might hold back what the reader most wants to know, and use silence as well as speech.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 15: Mary Shelley, Frankenstein, Chapter 11 (the creature's first days)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-15',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-15-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn Frankenstein, Victor Frankenstein builds a creature, brings it to life and then abandons it in horror. In this extract, the creature tells Victor what he remembers of his first days alive, alone in a forest near the town of Ingolstadt, in Germany. Each paragraph opens with speech marks because he is telling his story aloud.\n\nWords you may need: the orb of night is the moon; the radiant roof of light is the sky; uncouth means rough and awkward; inarticulate means without clear words; offals are scraps of food; to dress food is to cook it.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-15-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows that some time has passed.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"Several changes of day and night passed"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "Several changes of day and night passed"; "Several changes of day and night"; "the orb of night had greatly lessened".',
            ],
          },
          {
            id: 'edexcel-p1-15-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\n"The moon had disappeared from the night, and again, with a lessened form, showed itself, while I still remained in the forest. My sensations had, by this time, become distinct, and my mind received every day additional ideas. My eyes became accustomed to the light, and to perceive objects in their right forms; I distinguished the insect from the herb, and, by degrees, one herb from another. I found that the sparrow uttered none but harsh notes, whilst those of the blackbird and thrush were sweet and enticing.\n\nGive two examples of the creature learning to tell one thing from another. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He can tell "the insect from the herb".\n2. He can tell the sparrow\'s "harsh notes" from the songs of the blackbird and thrush.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he can tell his own sensations apart, which have "become distinct"; he can tell "the insect from the herb"; he can tell "one herb from another"; he can tell the sparrow\'s "harsh notes" from the "sweet and enticing" songs of the blackbird and thrush. Each example is a pair: "the insect" and "the herb" given as two answers make one point.',
            ],
          },
          {
            id: 'edexcel-p1-15-q3',
            questionNumber: 3,
            questionText:
              'Read again this part of the extract.\n\n"One day, when I was oppressed by cold, I found a fire which had been left by some wandering beggars, and was overcome with delight at the warmth I experienced from it. In my joy I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects! I examined the materials of the fire, and to my joy found it to be composed of wood. I quickly collected some branches; but they were wet, and would not burn. I was pained at this, and sat still watching the operation of the fire. The wet wood which I had placed near the heat dried, and itself became inflamed. I reflected on this; and, by touching the various branches, I discovered the cause, and busied myself in collecting a great quantity of wood, that I might dry it, and have a plentiful supply of fire. When night came on, and brought sleep with it, I was in the greatest fear lest my fire should be extinguished. I covered it carefully with dry wood and leaves, and placed wet branches upon it; and then, spreading my cloak, I lay on the ground, and sunk into sleep.\n\nIn this part of the extract, how does the writer use language and structure to show the creature\'s discovery of fire?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer shows the creature\'s discovery of fire as a moment of joy, pain and learning. His first reaction is pure delight: he was "overcome with delight at the warmth I experienced from it". Then comes a childlike mistake, "In my joy I thrust my hand into the live embers, but quickly drew it out again with a cry of pain." The verb "thrust" shows how eagerly and innocently he reaches out, and the sudden "cry of pain" makes the reader wince for him, as we might for a small child.\n\nHis response to the pain shows a mind beginning to work. The exclamation "How strange, I thought, that the same cause should produce such opposite effects!" combines wonder with reasoning, and from this point the language becomes that of an experiment. He "examined the materials of the fire", "reflected on this", and "by touching the various branches, I discovered the cause". These verbs of thinking and testing present him as intelligent and curious, almost like a young scientist, which makes him seem far from a monster.\n\nThe structure of the paragraph is a chain of cause and effect. Each sentence moves one step further: he finds the fire, burns himself, examines it, tries wet branches that "would not burn", watches them dry and catch, and finally understands. The plain sentences, joined by "and" and semicolons, make it read like a careful, step-by-step account by someone who has had to work everything out alone. Feelings appear at each stage, "I was pained at this", and later "I was in the greatest fear lest my fire should be extinguished", so the reader sees how precious the fire has become. The paragraph moves from "One day" to "When night came on", and it ends calmly, with him spreading his cloak and sinking "into sleep" beside the fire he has learned to keep alive.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                '"overcome with delight at the warmth" shows his simple joy, and "In my joy I thrust my hand into the live embers" shows a child\'s innocence.',
                'The exclamation "How strange, I thought, that the same cause should produce such opposite effects!" shows wonder and the beginnings of reasoning.',
                'Verbs of thinking and testing ("I examined", "I reflected on this", "I discovered the cause") show him learning like a scientist.',
                'Words of feeling ("I was pained at this", "the greatest fear lest my fire should be extinguished") show how much the fire matters to him.',
              ],
              'Structure: points you might make': [
                'The paragraph is a chain of cause and effect: discovery, pain, examination, experiment, understanding, care.',
                'Plain sentences joined by "and" or semicolons make it read like a careful, step-by-step account.',
                'It moves from "One day" to "When night came on", and ends calmly as he "sunk into sleep", having made the fire safe.',
              ],
            },
          },
          {
            id: 'edexcel-p1-15-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to make the reader feel sympathy for the creature.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is very successful in making the reader feel sympathy for the creature, largely because she lets him tell his own story. The first-person voice, "I began to distinguish my sensations from each other", takes the reader inside his experience, so that we discover the world alongside him rather than judging him from outside.\n\nThe most moving feature is his innocence. He does not yet know the names of things, so he describes them in roundabout ways: birdsong is "a pleasant sound" that "proceeded from the throats of the little winged animals", and the sky is "the radiant roof of light which canopied me". These phrases make him seem like a very young child, delighted by what everyone else takes for granted. He was "delighted" by the birds, and he notices that "the sparrow uttered none but harsh notes, whilst those of the blackbird and thrush were sweet and enticing". His pleasure in small things makes him sympathetic, because it shows a gentle nature.\n\nThe writer also emphasises his loneliness. He tells us, "Sometimes I tried to imitate the pleasant songs of the birds, but was unable", and "the uncouth and inarticulate sounds which broke from me frightened me into silence again". This is perhaps the saddest moment in the extract, because he is frightened by his own voice and has nobody to teach him how to speak. The repetition of "Sometimes" at the start of two sentences suggests that he tried again and again, alone.\n\nHis discovery of fire continues to build sympathy. He is "overcome with delight at the warmth", but when "In my joy I thrust my hand into the live embers", he draws it out "with a cry of pain". The reader winces for him. Yet instead of giving up, he reasons patiently, "How strange, I thought, that the same cause should produce such opposite effects!", and teaches himself to dry wood, keep the fire alive and cook. His fear that the fire might go out, "the greatest fear lest my fire should be extinguished", shows how vulnerable he is, and his diet of berries, nuts and the "offals that the travellers had left" reminds us that he survives on scraps.\n\nSome readers may find his language too sophisticated to be believable. Words such as "canopied" and "intercepted" do not sound like a newborn creature. However, he is telling this story later, after he has learned to speak, and I think the contrast between his elegant language and his helpless experiences actually increases our sympathy, because it shows how intelligent and sensitive he is. The reader, who knows that Victor abandoned him, cannot help feeling that this curious, gentle being deserved better. Overall the writer succeeds very well in making the creature someone we pity and admire rather than fear.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The first-person voice lets the reader share his experience from the inside.',
                'He does not know the names of things: birds are "the little winged animals", the sky "the radiant roof of light", which shows his innocence.',
                'His loneliness is moving: he tries to imitate the birds "but was unable", and his own "uncouth and inarticulate sounds" frighten him "into silence again".',
                'He learns everything alone, through patience and reasoning, which makes him admirable.',
                'The fire brings joy and then "a cry of pain", and his fear that it will go out shows his vulnerability.',
                'He lives on berries and the "offals that the travellers had left". Some may find his sophisticated language ("canopied", "intercepted") unlike a newborn; others that it shows how intelligent he is, which makes his abandonment more unjust.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-15-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-15-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, discovered something for the first time. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a small campfire glowing in a dark forest clearing. Picture 2: a bird singing on a bare branch against a pale morning sky.\n\nWrite about a time when you, or someone you know, felt completely alone. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nI saw snow for the first time when I was eleven years old, on my third morning in England, and at first I thought that the world had broken.\n\nWe had arrived late at night, after two flights and a long, silent drive through a darkness full of orange lights. I remember very little of it except the cold, which was not like any cold I had known. At home, cold was the inside of the fridge, or the shade under the mango tree at noon. This cold was different. It got inside your clothes and found your bones. It made the inside of my nose hurt when I breathed.\n\nFor two days it rained. The sky was the colour of a dirty sink, and the rain did not fall properly, the way rain should. It hung in the air and drifted sideways and made everything damp without ever seeming to arrive. I stayed in our new flat and watched it from the window, and I missed everything: the noise of the street, the smell of my grandmother\'s kitchen, the heat lying across my shoulders like a warm hand.\n\nThen, on the third morning, I woke up and something was wrong with the light.\n\nIt was too bright. It came through the thin curtains with a strange, flat whiteness, and the room was silent in a way that it had not been before. No cars. No footsteps. Even the pigeons on the roof opposite had gone quiet. I lay in bed for a long time, listening to that silence, feeling my heart beat faster, because I did not understand it.\n\nWhen I pulled back the curtain, I gasped out loud.\n\nEverything had disappeared. The car park, the bins, the scrubby little patch of grass, the cars parked along the street: all of it had been rubbed out and replaced with a thick, soft, perfect whiteness, like the inside of a pillow. The roofs were white. The railings had a narrow white line along the top of each one, as neat as icing. And the air was full of it, still falling, slowly, in huge flakes that turned and drifted and seemed in no hurry at all.\n\nI did not wait for anyone. I pulled my coat on over my pyjamas and ran down four flights of stairs in my trainers and burst out of the front door.\n\nThe cold hit my face like a slap. Then the snow touched me. A flake landed on my cheek and melted at once, a tiny cold kiss. Another caught on my eyelashes. I held out my hands and watched them land on my palms, each one a small white star, perfect for a second before it became a drop of water. I put out my tongue, like children do in films, and it tasted of nothing at all, and of everything.\n\nI walked out into the middle of the car park. The snow squeaked under my feet, which surprised me so much that I laughed. I turned around and saw my footprints behind me, the only marks in the whole white world, and I felt as though I were the first person ever to have walked there.\n\nMum found me twenty minutes later, soaked to the knees and shaking with cold, lying on my back in the snow and moving my arms up and down. She stood in the doorway in her dressing gown and I thought she would be angry. But she only looked at me, and then up at the falling sky, and then she began, very slowly, to smile.\n\n"Well," she said. "Perhaps it will not be so bad here after all."',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a first sight of the sea or snow, a first night away from home, or learning a new skill.',
                'Question 6 could use the campfire, the bird on the branch, or neither picture.',
                'Like the extract, a strong piece might show the world through fresh eyes and pay close attention to the senses.',
              ],
            },
          },
        ],
      },
    ],
  },
]
