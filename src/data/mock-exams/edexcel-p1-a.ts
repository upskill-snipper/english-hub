// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * PEARSON EDEXCEL GCSE ENGLISH LANGUAGE PAPER 1 (1EN0/01), MOCKS 01 TO 05.
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
 *   - 01 context said "Two years earlier"; the extract says nearly two years.
 *   - 01 Q4 answer had the storm hang "over" Belrive and Copêt; it hung over
 *     the lake between them. Now "between".
 *   - 02 Q2 answer and scheme gave Watson's guess ("doubtless") as her reason.
 *   - 02 Q3 answer left the "it" of "Small threw it into the Thames" unnamed,
 *     so it could be read as the treasure; it is the key. Now named.
 *   - 03 Q2 scheme read "One shell" as the Martians' fire; it is a shell the
 *     ship might have fired, which would have drawn the Heat-Ray. Rewritten.
 *   - 03 Q3 answer and scheme made one Martian both "cut down" and "crumpled";
 *     the wreck crumples "a second Martian". Now two.
 *   - 04 Q2 scheme point "he seems to come from somewhere" now says what the
 *     text says: land is "not, in reality, so distant as we had supposed".
 *   - 04 Q3 answer called the end of the last paragraph "The final paragraph",
 *     as if apart from "Good God! Margaret". Now "The rest of that paragraph".
 *   - 04 Q3 answer put the question "before any description of him", but he
 *     is first said to speak with an accent. Now "of his condition".
 *   - 04 Q4 answer said the stranger "was following" the giant, which the
 *     extract never says. Now "whether the stranger was following him".
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

// src/data/full-texts/frankenstein.ts, Chapter VII: 4 paragraphs, 658 words. Italic marks dropped: 1.
const EXTRACT_01 = `It was completely dark when I arrived in the environs of Geneva; the gates of the town were already shut; and I was obliged to pass the night at Secheron, a village at the distance of half a league from the city. The sky was serene; and, as I was unable to rest, I resolved to visit the spot where my poor William had been murdered. As I could not pass through the town, I was obliged to cross the lake in a boat to arrive at Plainpalais. During this short voyage I saw the lightnings playing on the summit of Mont Blanc in the most beautiful figures. The storm appeared to approach rapidly; and, on landing, I ascended a low hill, that I might observe its progress. It advanced; the heavens were clouded, and I soon felt the rain coming slowly in large drops, but its violence quickly increased.

I quitted my seat, and walked on, although the darkness and storm increased every minute, and the thunder burst with a terrific crash over my head. It was echoed from Salêve, the Juras, and the Alps of Savoy; vivid flashes of lightning dazzled my eyes, illuminating the lake, making it appear like a vast sheet of fire; then for an instant every thing seemed of a pitchy darkness, until the eye recovered itself from the preceding flash. The storm, as is often the case in Switzerland, appeared at once in various parts of the heavens. The most violent storm hung exactly north of the town, over that part of the lake which lies between the promontory of Belrive and the village of Copêt. Another storm enlightened Jura with faint flashes; and another darkened and sometimes disclosed the Môle, a peaked mountain to the east of the lake.

While I watched the tempest, so beautiful yet terrific, I wandered on with a hasty step. This noble war in the sky elevated my spirits; I clasped my hands, and exclaimed aloud, "William, dear angel! this is thy funeral, this thy dirge!" As I said these words, I perceived in the gloom a figure which stole from behind a clump of trees near me; I stood fixed, gazing intently: I could not be mistaken. A flash of lightning illuminated the object, and discovered its shape plainly to me; its gigantic stature, and the deformity of its aspect, more hideous than belongs to humanity, instantly informed me that it was the wretch, the filthy dæmon, to whom I had given life. What did he there? Could he be (I shuddered at the conception) the murderer of my brother? No sooner did that idea cross my imagination, than I became convinced of its truth; my teeth chattered, and I was forced to lean against a tree for support. The figure passed me quickly, and I lost it in the gloom. Nothing in human shape could have destroyed that fair child. He was the murderer! I could not doubt it. The mere presence of the idea was an irresistible proof of the fact. I thought of pursuing the devil; but it would have been in vain, for another flash discovered him to me hanging among the rocks of the nearly perpendicular ascent of Mont Salêve, a hill that bounds Plainpalais on the south. He soon reached the summit, and disappeared.

I remained motionless. The thunder ceased; but the rain still continued, and the scene was enveloped in an impenetrable darkness. I revolved in my mind the events which I had until now sought to forget: the whole train of my progress towards the creation; the appearance of the work of my own hands alive at my bedside; its departure. Two years had now nearly elapsed since the night on which he first received life; and was this his first crime? Alas! I had turned loose into the world a depraved wretch, whose delight was in carnage and misery; had he not murdered my brother?`

const EXTRACT_01_SOURCE =
  'Mary Shelley, Frankenstein (1818; the text of the revised edition of 1831), from Chapter 7'

// src/data/full-texts/the-sign-of-four.ts, Chapter XI: 18 paragraphs, 668 words. Italic marks dropped: 1.
const EXTRACT_02 = `I think that I must have been rather overacting my delight, and that she detected a hollow ring in my congratulations, for I saw her eyebrows rise a little, and she glanced at me curiously.

“If I have it,” said she, “I owe it to you.”

“No, no,” I answered, “not to me, but to my friend Sherlock Holmes. With all the will in the world, I could never have followed up a clue which has taxed even his analytical genius. As it was, we very nearly lost it at the last moment.”

“Pray sit down and tell me all about it, Dr. Watson,” said she.

I narrated briefly what had occurred since I had seen her last,—Holmes’s new method of search, the discovery of the Aurora, the appearance of Athelney Jones, our expedition in the evening, and the wild chase down the Thames. She listened with parted lips and shining eyes to my recital of our adventures. When I spoke of the dart which had so narrowly missed us, she turned so white that I feared that she was about to faint.

“It is nothing,” she said, as I hastened to pour her out some water. “I am all right again. It was a shock to me to hear that I had placed my friends in such horrible peril.”

“That is all over,” I answered. “It was nothing. I will tell you no more gloomy details. Let us turn to something brighter. There is the treasure. What could be brighter than that? I got leave to bring it with me, thinking that it would interest you to be the first to see it.”

“It would be of the greatest interest to me,” she said. There was no eagerness in her voice, however. It had struck her, doubtless, that it might seem ungracious upon her part to be indifferent to a prize which had cost so much to win.

“What a pretty box!” she said, stooping over it. “This is Indian work, I suppose?”

“Yes; it is Benares metal-work.”

“And so heavy!” she exclaimed, trying to raise it. “The box alone must be of some value. Where is the key?”

“Small threw it into the Thames,” I answered. “I must borrow Mrs. Forrester’s poker.” There was in the front a thick and broad hasp, wrought in the image of a sitting Buddha. Under this I thrust the end of the poker and twisted it outward as a lever. The hasp sprang open with a loud snap. With trembling fingers I flung back the lid. We both stood gazing in astonishment. The box was empty!

No wonder that it was heavy. The iron-work was two-thirds of an inch thick all round. It was massive, well made, and solid, like a chest constructed to carry things of great price, but not one shred or crumb of metal or jewelry lay within it. It was absolutely and completely empty.

“The treasure is lost,” said Miss Morstan, calmly.

As I listened to the words and realised what they meant, a great shadow seemed to pass from my soul. I did not know how this Agra treasure had weighed me down, until now that it was finally removed. It was selfish, no doubt, disloyal, wrong, but I could realise nothing save that the golden barrier was gone from between us. “Thank God!” I ejaculated from my very heart.

She looked at me with a quick, questioning smile. “Why do you say that?” she asked.

“Because you are within my reach again,” I said, taking her hand. She did not withdraw it. “Because I love you, Mary, as truly as ever a man loved a woman. Because this treasure, these riches, sealed my lips. Now that they are gone I can tell you how I love you. That is why I said, ‘Thank God.’”

“Then I say, ‘Thank God,’ too,” she whispered, as I drew her to my side. Whoever had lost a treasure, I knew that night that I had gained one.`

const EXTRACT_02_SOURCE = 'Arthur Conan Doyle, The Sign of Four (1890), from Chapter 11'

// src/data/full-texts/the-war-of-the-worlds.ts, Book One, Chapter XVII: The Thunder Child: 9 paragraphs, 694 words. Italic marks dropped: 3.
const EXTRACT_03 = `He sprang to his feet and saw to starboard, and not a hundred yards from their heeling, pitching boat, a vast iron bulk like the blade of a plough tearing through the water, tossing it on either side in huge waves of foam that leaped towards the steamer, flinging her paddles helplessly in the air, and then sucking her deck down almost to the waterline.

A douche of spray blinded my brother for a moment. When his eyes were clear again he saw the monster had passed and was rushing landward. Big iron upperworks rose out of this headlong structure, and from that twin funnels projected and spat a smoking blast shot with fire. It was the torpedo ram, Thunder Child, steaming headlong, coming to the rescue of the threatened shipping.

Keeping his footing on the heaving deck by clutching the bulwarks, my brother looked past this charging leviathan at the Martians again, and he saw the three of them now close together, and standing so far out to sea that their tripod supports were almost entirely submerged. Thus sunken, and seen in remote perspective, they appeared far less formidable than the huge iron bulk in whose wake the steamer was pitching so helplessly. It would seem they were regarding this new antagonist with astonishment. To their intelligence, it may be, the giant was even such another as themselves. The Thunder Child fired no gun, but simply drove full speed towards them. It was probably her not firing that enabled her to get so near the enemy as she did. They did not know what to make of her. One shell, and they would have sent her to the bottom forthwith with the Heat-Ray.

She was steaming at such a pace that in a minute she seemed halfway between the steamboat and the Martians—a diminishing black bulk against the receding horizontal expanse of the Essex coast.

Suddenly the foremost Martian lowered his tube and discharged a canister of the black gas at the ironclad. It hit her larboard side and glanced off in an inky jet that rolled away to seaward, an unfolding torrent of Black Smoke, from which the ironclad drove clear. To the watchers from the steamer, low in the water and with the sun in their eyes, it seemed as though she were already among the Martians.

They saw the gaunt figures separating and rising out of the water as they retreated shoreward, and one of them raised the camera-like generator of the Heat-Ray. He held it pointing obliquely downward, and a bank of steam sprang from the water at its touch. It must have driven through the iron of the ship’s side like a white-hot iron rod through paper.

A flicker of flame went up through the rising steam, and then the Martian reeled and staggered. In another moment he was cut down, and a great body of water and steam shot high in the air. The guns of the Thunder Child sounded through the reek, going off one after the other, and one shot splashed the water high close by the steamer, ricocheted towards the other flying ships to the north, and smashed a smack to matchwood.

But no one heeded that very much. At the sight of the Martian’s collapse the captain on the bridge yelled inarticulately, and all the crowding passengers on the steamer’s stern shouted together. And then they yelled again. For, surging out beyond the white tumult, drove something long and black, the flames streaming from its middle parts, its ventilators and funnels spouting fire.

She was alive still; the steering gear, it seems, was intact and her engines working. She headed straight for a second Martian, and was within a hundred yards of him when the Heat-Ray came to bear. Then with a violent thud, a blinding flash, her decks, her funnels, leaped upward. The Martian staggered with the violence of her explosion, and in another moment the flaming wreckage, still driving forward with the impetus of its pace, had struck him and crumpled him up like a thing of cardboard. My brother shouted involuntarily. A boiling tumult of steam hid everything again.`

const EXTRACT_03_SOURCE =
  'H. G. Wells, The War of the Worlds (1898), Book One, from Chapter 17, The Thunder Child'

// src/data/full-texts/frankenstein.ts, Letter IV: 8 paragraphs, 669 words.
const EXTRACT_04 = `Last Monday (July 31st), we were nearly surrounded by ice, which closed in the ship on all sides, scarcely leaving her the sea-room in which she floated. Our situation was somewhat dangerous, especially as we were compassed round by a very thick fog. We accordingly lay to, hoping that some change would take place in the atmosphere and weather.

About two o'clock the mist cleared away, and we beheld, stretched out in every direction, vast and irregular plains of ice, which seemed to have no end. Some of my comrades groaned, and my own mind began to grow watchful with anxious thoughts, when a strange sight suddenly attracted our attention, and diverted our solicitude from our own situation. We perceived a low carriage, fixed on a sledge and drawn by dogs, pass on towards the north, at the distance of half a mile: a being which had the shape of a man, but apparently of gigantic stature, sat in the sledge, and guided the dogs. We watched the rapid progress of the traveller with our telescopes, until he was lost among the distant inequalities of the ice.

This appearance excited our unqualified wonder. We were, as we believed, many hundred miles from any land; but this apparition seemed to denote that it was not, in reality, so distant as we had supposed. Shut in, however, by ice, it was impossible to follow his track, which we had observed with the greatest attention.

About two hours after this occurrence, we heard the ground sea; and before night the ice broke, and freed our ship. We, however, lay to until the morning, fearing to encounter in the dark those large loose masses which float about after the breaking up of the ice. I profited of this time to rest for a few hours.

In the morning, however, as soon as it was light, I went upon deck, and found all the sailors busy on one side of the vessel, apparently talking to some one in the sea. It was, in fact, a sledge, like that we had seen before, which had drifted towards us in the night, on a large fragment of ice. Only one dog remained alive; but there was a human being within it, whom the sailors were persuading to enter the vessel. He was not, as the other traveller seemed to be, a savage inhabitant of some undiscovered island, but an European. When I appeared on deck, the master said, "Here is our captain, and he will not allow you to perish on the open sea."

On perceiving me, the stranger addressed me in English, although with a foreign accent. "Before I come on board your vessel," said he, "will you have the kindness to inform me whither you are bound?"

You may conceive my astonishment on hearing such a question addressed to me from a man on the brink of destruction, and to whom I should have supposed that my vessel would have been a resource which he would not have exchanged for the most precious wealth the earth can afford. I replied, however, that we were on a voyage of discovery towards the northern pole.

Upon hearing this he appeared satisfied, and consented to come on board. Good God! Margaret, if you had seen the man who thus capitulated for his safety, your surprise would have been boundless. His limbs were nearly frozen, and his body dreadfully emaciated by fatigue and suffering. I never saw a man in so wretched a condition. We attempted to carry him into the cabin; but as soon as he had quitted the fresh air, he fainted. We accordingly brought him back to the deck, and restored him to animation by rubbing him with brandy, and forcing him to swallow a small quantity. As soon as he showed signs of life we wrapped him up in blankets, and placed him near the chimney of the kitchen stove. By slow degrees he recovered, and ate a little soup, which restored him wonderfully.`

const EXTRACT_04_SOURCE =
  'Mary Shelley, Frankenstein (1818; the text of the revised edition of 1831), from Letter 4'

// src/data/full-texts/jekyll-and-hyde.ts, Dr. Lanyon’s Narrative: 9 paragraphs, 669 words.
const EXTRACT_05 = `Twelve o’clock had scarce rung out over London, ere the knocker sounded very gently on the door. I went myself at the summons, and found a small man crouching against the pillars of the portico.

“Are you come from Dr. Jekyll?” I asked.

He told me “yes” by a constrained gesture; and when I had bidden him enter, he did not obey me without a searching backward glance into the darkness of the square. There was a policeman not far off, advancing with his bull’s eye open; and at the sight, I thought my visitor started and made greater haste.

These particulars struck me, I confess, disagreeably; and as I followed him into the bright light of the consulting room, I kept my hand ready on my weapon. Here, at last, I had a chance of clearly seeing him. I had never set eyes on him before, so much was certain. He was small, as I have said; I was struck besides with the shocking expression of his face, with his remarkable combination of great muscular activity and great apparent debility of constitution, and—last but not least—with the odd, subjective disturbance caused by his neighbourhood. This bore some resemblance to incipient rigour, and was accompanied by a marked sinking of the pulse. At the time, I set it down to some idiosyncratic, personal distaste, and merely wondered at the acuteness of the symptoms; but I have since had reason to believe the cause to lie much deeper in the nature of man, and to turn on some nobler hinge than the principle of hatred.

This person (who had thus, from the first moment of his entrance, struck in me what I can only describe as a disgustful curiosity) was dressed in a fashion that would have made an ordinary person laughable; his clothes, that is to say, although they were of rich and sober fabric, were enormously too large for him in every measurement—the trousers hanging on his legs and rolled up to keep them from the ground, the waist of the coat below his haunches, and the collar sprawling wide upon his shoulders. Strange to relate, this ludicrous accoutrement was far from moving me to laughter. Rather, as there was something abnormal and misbegotten in the very essence of the creature that now faced me—something seizing, surprising and revolting—this fresh disparity seemed but to fit in with and to reinforce it; so that to my interest in the man’s nature and character, there was added a curiosity as to his origin, his life, his fortune and status in the world.

These observations, though they have taken so great a space to be set down in, were yet the work of a few seconds. My visitor was, indeed, on fire with sombre excitement.

“Have you got it?” he cried. “Have you got it?” And so lively was his impatience that he even laid his hand upon my arm and sought to shake me.

I put him back, conscious at his touch of a certain icy pang along my blood. “Come, sir,” said I. “You forget that I have not yet the pleasure of your acquaintance. Be seated, if you please.” And I showed him an example, and sat down myself in my customary seat and with as fair an imitation of my ordinary manner to a patient, as the lateness of the hour, the nature of my preoccupations, and the horror I had of my visitor, would suffer me to muster.

“I beg your pardon, Dr. Lanyon,” he replied civilly enough. “What you say is very well founded; and my impatience has shown its heels to my politeness. I come here at the instance of your colleague, Dr. Henry Jekyll, on a piece of business of some moment; and I understood...” He paused and put his hand to his throat, and I could see, in spite of his collected manner, that he was wrestling against the approaches of the hysteria—“I understood, a drawer...”`

const EXTRACT_05_SOURCE =
  'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), from Chapter 9, Dr. Lanyon’s Narrative'

// ─── Edexcel Paper 1 mock exams, 01 to 05 ────────────────────────────────────────

export const edexcelP1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: Mary Shelley, Frankenstein, Chapter 7 (the storm at Plainpalais)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-01',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Mock A1',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-01-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Victor Frankenstein is travelling home to Geneva, in Switzerland, after a letter from his father has told him that his young brother, William, has been murdered. Nearly two years earlier, Victor had given life to a creature he built, and then abandoned it.\n\nWords you may need: a league is about three miles; Secheron, Plainpalais, Belrive and Copêt are places beside the lake at Geneva, and Mont Blanc, Salêve, the Juras, the Alps of Savoy and the Môle are mountains around it; a dirge is a song of mourning; a dæmon is an evil spirit.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-01-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows that Victor arrives at Geneva after dark.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"It was completely dark"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "It was completely dark"; "completely dark"; "the gates of the town were already shut"; "pass the night".',
            ],
          },
          {
            id: 'edexcel-p1-01-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nI quitted my seat, and walked on, although the darkness and storm increased every minute, and the thunder burst with a terrific crash over my head. It was echoed from Salêve, the Juras, and the Alps of Savoy; vivid flashes of lightning dazzled my eyes, illuminating the lake, making it appear like a vast sheet of fire; then for an instant every thing seemed of a pitchy darkness, until the eye recovered itself from the preceding flash. The storm, as is often the case in Switzerland, appeared at once in various parts of the heavens. The most violent storm hung exactly north of the town, over that part of the lake which lies between the promontory of Belrive and the village of Copêt. Another storm enlightened Jura with faint flashes; and another darkened and sometimes disclosed the Môle, a peaked mountain to the east of the lake.\n\nGive two ways in which this part of the extract shows how powerful the storm is. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The thunder "burst with a terrific crash" over his head.\n2. The lightning lit up the lake, "making it appear like a vast sheet of fire".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: the thunder "burst with a terrific crash" over his head; the thunder echoed back "from Salêve, the Juras, and the Alps of Savoy"; the lightning "dazzled my eyes"; the lightning made the lake "appear like a vast sheet of fire"; between the flashes everything was "of a pitchy darkness"; there were storms "in various parts of the heavens" at once; the "darkness and storm increased every minute".',
            ],
          },
          {
            id: 'edexcel-p1-01-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "While I watched the tempest" to "He soon reached the summit, and disappeared".\n\nIn this part of the extract, how does the writer use language and structure to show Victor\'s feelings when he sees the figure?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'At the start of this part the storm lifts Victor\'s mood. The pairing "so beautiful yet terrific" and the metaphor "This noble war in the sky" make the violence seem grand rather than frightening, and his cry "William, dear angel! this is thy funeral, this thy dirge!" uses repetition and exclamation to turn grief into a kind of wild excitement.\n\nThe writer then changes the direction of the paragraph with "As I said these words", and Victor\'s feelings change with it. The verb "stole" makes the figure\'s movement secret and threatening. His words for it, "the wretch, the filthy dæmon", show his disgust, and "more hideous than belongs to humanity" shows that he cannot think of it as a man. The bracketed aside "(I shuddered at the conception)" interrupts his own question, as if the thought is too horrible to finish without a pause, and his body betrays his terror: "my teeth chattered, and I was forced to lean against a tree for support".\n\nThe sentences show how quickly his fear becomes certainty. The questions he asks himself, such as "What did he there?", show his mind racing, and they give way to short, blunt statements: "He was the murderer! I could not doubt it." Finally, the lightning shapes the whole sighting. One flash reveals the creature and "another flash" shows him climbing the mountain, until the paragraph ends on the word "disappeared". Victor is left powerless, and the reader is left knowing that the threat is still free.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'At first the storm lifts his spirits: the pairing "so beautiful yet terrific" and the metaphor "This noble war in the sky" make the violence seem grand rather than frightening.',
                'His cry "William, dear angel! this is thy funeral, this thy dirge!" uses repetition and exclamation to turn grief into wild excitement.',
                'The verb "stole" makes the figure secretive and threatening.',
                'His words for the creature, "the wretch, the filthy dæmon" and "more hideous than belongs to humanity", show his disgust, and calling it "the devil" makes it evil rather than human.',
                'His body shows his terror: "my teeth chattered, and I was forced to lean against a tree for support".',
              ],
              'Structure: points you might make': [
                'The paragraph turns at "As I said these words", from elation to horror.',
                'The bracketed aside "(I shuddered at the conception)" interrupts his own question, as if the thought is too dreadful to finish without a pause.',
                'Questions ("What did he there?") show his mind racing, and the short sentences "He was the murderer! I could not doubt it." show it settling on a certainty.',
                'The lightning shapes the sighting: one flash reveals the creature and "another flash" shows him climbing away, until the paragraph ends on "disappeared", with the threat still free.',
              ],
            },
          },
          {
            id: 'edexcel-p1-01-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to build a growing sense of horror.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer is highly successful in building horror, mainly because she makes us wait for it. The extract opens with Victor arriving when it is "completely dark", locked out of the town, and the first paragraph slowly gathers the storm: it "appeared to approach rapidly", and the rain came "slowly in large drops, but its violence quickly increased". This gradual build works well, because the reader, like Victor, can sense something approaching without knowing what it is.\n\nHowever, the writer does not simply make the storm frightening. Victor sees "the lightnings playing on the summit of Mont Blanc in the most beautiful figures", and later calls the storm "so beautiful yet terrific" and "This noble war in the sky". I think this is a clever choice, because it lifts Victor\'s spirits just before the worst moment, so the horror arrives as a shock. Some readers may feel that the long account of where each storm hung, between "the promontory of Belrive" and "the village of Copêt", slows the pace too much. Yet it also creates a storm surrounding him on every side, so that by the time he wanders on alone through the dark there seems to be no escape.\n\nThe appearance of the creature is the most successful moment. It is first only "a figure which stole from behind a clump of trees", and the verb "stole" makes it sly and threatening. Then "A flash of lightning illuminated the object", and we see it only in that instant: "its gigantic stature, and the deformity of its aspect, more hideous than belongs to humanity". Showing the creature in a flash is far more frightening than a long description, because the reader\'s imagination has to fill in the darkness that follows. Victor\'s terror is made physical, "my teeth chattered, and I was forced to lean against a tree for support", so his fear is shown rather than simply told.\n\nThe horror then deepens from what Victor sees to what he understands. The questions "What did he there?" and "Could he be ... the murderer of my brother?" lead to the blunt exclamation "He was the murderer!" It could be argued that Victor jumps to this conclusion too quickly, and he even admits that "The mere presence of the idea was an irresistible proof of the fact". But I think this is part of the horror: Victor is certain because he knows what he has made, and the reader begins to share his dread. The image of the creature "hanging among the rocks" of an almost vertical mountain, before it reaches the summit and vanishes, shows that it is stronger and quicker than any man, which makes the threat even greater.\n\nThe final paragraph is perhaps the most disturbing, because the horror turns inward. The thunder ceases, "but the rain still continued", and the scene lies in "an impenetrable darkness", a fitting image for Victor\'s mind. He remembers "the work of my own hands alive at my bedside" and admits "I had turned loose into the world a depraved wretch, whose delight was in carnage and misery". The extract ends on a question, "had he not murdered my brother?", so the reader is left with guilt as well as fear. Overall the writer succeeds very well: the storm, the glimpse in the lightning and Victor\'s guilty realisation each add a further layer of horror, and the ending leaves it unresolved.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'Darkness frames the extract, from "completely dark" at the start to "an impenetrable darkness" at the end, so the horror grows in a world Victor cannot see.',
                'The storm builds slowly: it "appeared to approach rapidly", and the rain came "slowly in large drops, but its violence quickly increased", so the reader senses something coming.',
                'The storm is also beautiful ("the most beautiful figures", "so beautiful yet terrific"), which lifts Victor just before the shock. Some may feel the place names slow the pace; others that they surround him with storms.',
                'The creature is seen only in a flash of lightning ("its gigantic stature, and the deformity of its aspect"), which leaves the reader to imagine the rest.',
                'His terror ("my teeth chattered") and his leap to "He was the murderer!" make the horror moral as well as physical. Some may find his certainty too sudden, though he admits "The mere presence of the idea was an irresistible proof of the fact".',
                'The ending turns the horror inward, into guilt ("I had turned loose into the world a depraved wretch"), and the closing question leaves it unresolved.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-01-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-01-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, were caught outdoors in a storm. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a storm over a lake at night, with forked lightning striking the mountains behind it. Picture 2: a person in a long coat standing alone on a dark country path, lit from behind by a single street lamp.\n\nWrite about a time when you, or someone you know, saw something that was hard to explain. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe storm reached Gran\'s farm on the last night of the summer holidays, and it came the way bad news comes: slowly at first, and then all at once.\n\nAll afternoon the sky over the hill had been the colour of a bruise. The air was thick and still, and the swallows flew so low over the yard that they almost brushed the puddles. Gran kept glancing at the window. "The ewes are still up on the top field," she said at last, and I knew from her voice that she meant me.\n\nI pulled on Grandad\'s old waxed coat, which still smelt of engine oil and peppermints, and set off up the lane with the torch in my pocket. By the time I reached the stile the first drops were falling, heavy as coins. They struck the dry earth and vanished.\n\nThen the light changed. A flicker, far off behind the hill, like someone testing a switch. I counted the way Grandad had taught me. One. Two. Three. Four. The thunder rolled in on the fifth second, low and long, and the ground seemed to hum under my boots.\n\nBy the top field the rain had stopped pretending. It came sideways, in sheets, and the wind tore at my hood until I gave up and let it go. The ewes had huddled in the corner by the broken wall, a grey knot of wet wool, their eyes catching my torch like small green lamps. I shouted and waved my arms, and they stared at me as though I were the strangest thing they had ever seen.\n\nThe lightning came again, closer. For one white second the whole valley leapt out of the dark: the farmhouse, the black ribbon of the river, the single oak on the ridge with every leaf picked out in silver. Then it was gone, and the darkness that followed was thicker than before. The crack of thunder was so loud that I felt it in my teeth.\n\nI do not remember deciding to run. I remember the gate, and the ewes pouring through it in a rush of hooves and panic, and my own breath sawing in my chest. I remember slipping in the mud by the trough and landing on my hands, and the cold shock of water up my sleeves. I remember thinking, quite calmly, that Grandad would have laughed at me.\n\nThen I saw the light in the kitchen window. Gran had put the lamp on the sill, the way she used to when Grandad was out late with the tractor. It was a small, steady, yellow square, and it did not flicker once while the sky above it tore itself apart.\n\nThe ewes found their own way into the barn. I bolted the door behind them and stood for a moment with my forehead against the wet wood, listening to the rain drum on the tin roof like a thousand impatient fingers.\n\nWhen I came in, dripping onto the flagstones, Gran did not say a word. She simply put a mug of cocoa into my hands and a towel over my head, and we sat together by the stove while the storm grumbled its way off towards the sea.\n\nIt is years since that night. Gran sold the farm long ago, and the oak on the ridge came down in another storm. But whenever I hear thunder, I still count the seconds, and I still look for a light in a window.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be a story, a description or a monologue: a walk home in a thunderstorm, perhaps, or a camping trip that went wrong.',
                'Question 6 could use the storm over the lake, the figure on the path, or neither picture.',
                'Like the extract, a strong piece might let the weather build slowly, use light and darkness for effect, and save its turning point until late on.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: Arthur Conan Doyle, The Sign of Four, Chapter 11 (the empty box)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-02',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Mock A2',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-02-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Dr Watson, the narrator, brings an iron box to Miss Mary Morstan. It is believed to hold the Agra treasure, which would make her one of the richest young women in England. Watson loves her, but he fears that such a fortune would put her out of his reach.\n\nWords you may need: the Aurora is the steam launch that Holmes and Watson chased down the River Thames; Athelney Jones is a police detective; Small is the man who was captured with the box; Benares is a city in India known for its metal-work; a hasp is a metal fastening for a lid; ejaculated is an old word for cried out.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-02-q1',
            questionNumber: 1,
            questionText:
              "Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that Watson's delight is not real.",
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"a hollow ring in my congratulations"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "overacting my delight"; "overacting"; "a hollow ring in my congratulations"; "hollow ring".',
            ],
          },
          {
            id: 'edexcel-p1-02-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\n“That is all over,” I answered. “It was nothing. I will tell you no more gloomy details. Let us turn to something brighter. There is the treasure. What could be brighter than that? I got leave to bring it with me, thinking that it would interest you to be the first to see it.”\n\n“It would be of the greatest interest to me,” she said. There was no eagerness in her voice, however. It had struck her, doubtless, that it might seem ungracious upon her part to be indifferent to a prize which had cost so much to win.\n\nGive two ways in which this part of the extract shows that Miss Morstan is not excited by the treasure. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. "There was no eagerness in her voice".\n2. Watson believes she says it interests her only because it "might seem ungracious" to be "indifferent" to it.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: "There was no eagerness in her voice"; Watson believes she says it interests her only because it "might seem ungracious" not to; Watson thinks she is "indifferent to a prize".',
            ],
          },
          {
            id: 'edexcel-p1-02-q3',
            questionNumber: 3,
            questionText:
              "Read again this part of the extract.\n\n“Small threw it into the Thames,” I answered. “I must borrow Mrs. Forrester’s poker.” There was in the front a thick and broad hasp, wrought in the image of a sitting Buddha. Under this I thrust the end of the poker and twisted it outward as a lever. The hasp sprang open with a loud snap. With trembling fingers I flung back the lid. We both stood gazing in astonishment. The box was empty!\n\nNo wonder that it was heavy. The iron-work was two-thirds of an inch thick all round. It was massive, well made, and solid, like a chest constructed to carry things of great price, but not one shred or crumb of metal or jewelry lay within it. It was absolutely and completely empty.\n\n“The treasure is lost,” said Miss Morstan, calmly.\n\nAs I listened to the words and realised what they meant, a great shadow seemed to pass from my soul. I did not know how this Agra treasure had weighed me down, until now that it was finally removed. It was selfish, no doubt, disloyal, wrong, but I could realise nothing save that the golden barrier was gone from between us. “Thank God!” I ejaculated from my very heart.\n\nIn this part of the extract, how does the writer use language and structure to show Watson's feelings as the box is opened?\n\nRefer closely to the text to support your views.",
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer builds suspense by slowing down the opening of the box. Watson explains that the key is gone ("Small threw it into the Thames") and has to borrow a poker, and each step is described: the hasp, the poker thrust under it, the "loud snap". His nerves show in "With trembling fingers I flung back the lid", where the adjective shows his anxiety and the verb "flung" his urgency. The short exclamation "The box was empty!" then lands as a sudden shock after the long build-up.\n\nThe next paragraph slows the pace again. Its emphatic language, "not one shred or crumb" and "absolutely and completely empty", hammers home the emptiness, and the simile "like a chest constructed to carry things of great price" makes the box seem almost to mock them. Miss Morstan\'s calm reply is given a paragraph of its own, and it becomes the turning point of this part.\n\nFrom here the focus moves inside Watson\'s mind. The metaphor "a great shadow seemed to pass from my soul" presents his relief as light breaking through darkness, and he admits that the treasure had "weighed me down", as though it were a heavy load. Calling it "the golden barrier" shows that he saw the wealth as a wall between himself and Mary. His list of self-accusations, "selfish, no doubt, disloyal, wrong", shows that he feels guilty for being glad, but his joy bursts out anyway in the exclamation "Thank God!", spoken, as he says, "from my very heart".',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'In "With trembling fingers I flung back the lid", the adjective shows his nerves and the verb "flung" his haste to know.',
                'The emphatic phrases "not one shred or crumb" and "absolutely and completely empty" stress the emptiness again and again.',
                'The simile "like a chest constructed to carry things of great price" makes the empty box seem to mock them.',
                'The metaphor "a great shadow seemed to pass from my soul" presents his relief as light after darkness, and "weighed me down" shows the treasure as a burden.',
                'Calling the wealth "the golden barrier" shows that he saw it as a wall between them, and the list "selfish, no doubt, disloyal, wrong" shows his guilt at feeling glad.',
              ],
              'Structure: points you might make': [
                'The opening of the box is slowed by small steps (the poker, the hasp, the lever) to build suspense before the short sentence "The box was empty!"',
                'A paragraph of explanation, "No wonder that it was heavy", slows the pace after the shock.',
                "Miss Morstan's calm reply has a paragraph of its own, and it is the turning point between the shock and Watson's joy.",
                'The focus moves from outward actions to his inner feelings, and the part ends on his outburst "Thank God!"',
              ],
            },
          },
          {
            id: 'edexcel-p1-02-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to build suspense and then to end in a moment of happiness.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is very successful, because the real suspense in this extract is not about the treasure but about two people who cannot say what they feel. From the first sentence Watson tells us that he is hiding something: he was "overacting my delight", and she has heard "a hollow ring in my congratulations". After this, every cheerful thing he says reads as a mask, and the reader starts to watch for the truth breaking through.\n\nMiss Morstan is just as guarded, and this deepens the suspense. When Watson mentions "the dart which had so narrowly missed us", she turns "so white that I feared that she was about to faint", a reaction far stronger than politeness, which hints at how much she cares for him. Yet about the fortune itself "There was no eagerness in her voice". The writer never states her feelings directly. We see them only through Watson\'s eyes, and his guesses ("doubtless") may be wrong, so the reader is kept guessing too.\n\nThe opening of the box is drawn out with great skill. Each detail delays the moment: she admires the "pretty box", finds it "so heavy", asks for the key, and learns that "Small threw it into the Thames". Watson must borrow a poker and lever open a hasp "wrought in the image of a sitting Buddha". By the time he lifts the lid "With trembling fingers", the reader is as tense as he is. Then the writer breaks the tension with one short sentence: "The box was empty!" After so much weight and description, the shock is complete.\n\nWhat makes the ending succeed is that the loss at once becomes a gain. Miss Morstan\'s reply, "The treasure is lost", is spoken "calmly", which surprises us, and Watson\'s reaction is joy: "a great shadow seemed to pass from my soul". The metaphor of "the golden barrier" explains everything that has gone before, because the treasure was the reason he could not speak. His declaration then builds through repeated reasons ("Because you are within my reach again", "Because I love you, Mary", "Because this treasure, these riches, sealed my lips"), so his feelings pour out in a rush after being held back for so long.\n\nSome readers may find the ending a little too neat. The final sentence, "Whoever had lost a treasure, I knew that night that I had gained one", wraps up the scene in a balanced phrase, and Watson\'s gladness at Mary\'s loss could seem selfish, as he admits himself: "It was selfish, no doubt, disloyal, wrong". However, I think this honesty strengthens the ending. Because Watson confesses his selfishness, his happiness feels human rather than smug, and Mary\'s whispered "Thank God" shows that the feeling is shared. Overall the writer builds and releases suspense very effectively, moving the reader from tension to shock to delight within a few hundred words.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The first paragraph signals hidden feelings ("overacting my delight", "a hollow ring"), so the reader senses tension beneath the cheerful talk.',
                'Miss Morstan adds to the suspense: she nearly faints at the danger Watson faced, yet shows "no eagerness" about the treasure, hinting at feelings she does not state.',
                'Details of the box ("so heavy", "Benares metal-work", a hasp "wrought in the image of a sitting Buddha") and the missing key delay the opening.',
                'The short sentence "The box was empty!" reverses every expectation.',
                'Her calm "The treasure is lost" and his relief ("a great shadow seemed to pass from my soul") turn loss into gain.',
                'The repeated "Because" in his declaration and the balanced last sentence give a satisfying close. Some readers may find it too neat, or his gladness at her loss selfish, as he admits himself.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-02-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-02-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, lost something but gained something better. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: an old wooden chest standing open and empty on a dusty attic floor. Picture 2: two friends laughing together under one umbrella on a rainy street.\n\nWrite a story with the title "The Empty Box". Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nI lost my sketchbook on the number 14 bus on a wet Tuesday in March, and for three days I was certain that my life was over.\n\nIt was not an ordinary sketchbook. It had a cracked blue cover held together with tape, and inside it were two years of my life: the view from our kitchen window in every season, my little brother asleep on the sofa with his mouth open, the old man who fed the pigeons outside the library, and, on the very last page, a drawing I had never shown anyone. It was my portfolio for the art college interview, and the interview was on Friday.\n\nI searched everywhere. I rang the bus company four times. A bored voice told me that nothing had been handed in, and that I should "keep checking". I walked the whole route of the number 14 in the rain, staring into gutters like someone who had lost a pet. By Thursday night I had stopped crying and started to feel strangely empty, like a room after the furniture has gone.\n\n"Draw something new," Mum said. "You\'ve got tonight."\n\nI almost laughed. One night, to replace two years. But I had nothing else, so I sat at the kitchen table with a cheap pad and a pencil and looked around me. The kettle. The cracked tile above the sink. My brother\'s football boots, still caked in mud, abandoned by the door. Mum herself, asleep in the armchair by eleven o\'clock, her glasses slipping down her nose.\n\nI drew until two in the morning. I did not try to make anything beautiful. I drew what was there, quickly, because there was no time to be careful, and somewhere around midnight I realised that the pictures were better than anything in the lost book. They were looser. They breathed.\n\nAt the interview, a tall woman with silver rings on every finger turned the pages slowly, saying nothing. My heart was thumping so hard that I was sure she could hear it. At last she stopped at the drawing of Mum in the armchair.\n\n"When did you do this?"\n\n"Last night," I admitted. "I lost my real portfolio."\n\nShe looked at me over her glasses, exactly as Mum does. "This is your real portfolio," she said.\n\nI got my place. And the sketchbook? It turned up a week later, handed in at the library by the old man with the pigeons. He had recognised himself on page twelve. He had written a note in shaky capitals and tucked it inside the cover: YOU HAVE MADE ME LOOK VERY HANDSOME. THANK YOU.\n\nWe are friends now, Mr Okafor and I. On Saturday mornings I take my sketchbook to the library steps, and he tells me about Lagos, and about the bakery he ran for thirty years, and about his wife, who loved birds. I draw while he talks. I have filled two new books since the spring.\n\nI still keep the old blue one on my shelf, with its cracked cover and its tape. Every time I look at it, I remember the Tuesday I thought I had lost everything, and the Friday I found out what I had really been looking for.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be about a lost competition, a lost possession or a missed chance that led somewhere unexpected.',
                'Question 6 could use the empty chest, the friends under the umbrella, or neither picture.',
                'Like the extract, a strong piece might delay its key moment, then let a disappointment turn into something better.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: H. G. Wells, The War of the Worlds, Book One, Chapter 17 (the Thunder Child)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-03',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Mock A3',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-03-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, the narrator tells what happened to his brother, who is escaping from England on a small paddle steamer. Martians in huge three-legged fighting machines are wading out to sea towards the crowded ships. They carry the Heat-Ray, a beam that burns whatever it touches, and canisters of a poisonous Black Smoke.\n\nWords you may need: starboard is the right-hand side of a ship and larboard the left; a torpedo ram, or ironclad, is an armoured warship built to ram enemy ships; a leviathan is a huge sea monster; reek is smoke; a smack is a small fishing boat.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-03-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows how close the warship comes to the steamer.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"not a hundred yards"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "not a hundred yards"; "not a hundred yards from their heeling, pitching boat".',
            ],
          },
          {
            id: 'edexcel-p1-03-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nKeeping his footing on the heaving deck by clutching the bulwarks, my brother looked past this charging leviathan at the Martians again, and he saw the three of them now close together, and standing so far out to sea that their tripod supports were almost entirely submerged. Thus sunken, and seen in remote perspective, they appeared far less formidable than the huge iron bulk in whose wake the steamer was pitching so helplessly. It would seem they were regarding this new antagonist with astonishment. To their intelligence, it may be, the giant was even such another as themselves. The Thunder Child fired no gun, but simply drove full speed towards them. It was probably her not firing that enabled her to get so near the enemy as she did. They did not know what to make of her. One shell, and they would have sent her to the bottom forthwith with the Heat-Ray.\n\nGive two ways in which this part of the extract shows how the Martians react to the Thunder Child. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. They seemed to be "regarding this new antagonist with astonishment".\n2. "They did not know what to make of her", so they let her come close.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: they seemed to be "regarding this new antagonist with astonishment"; they may have thought it was "even such another as themselves", a giant like them; "They did not know what to make of her"; they let her come close without attacking, because she held her fire: had she fired "One shell", they would have sunk her with the Heat-Ray.',
            ],
          },
          {
            id: 'edexcel-p1-03-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "A flicker of flame went up through the rising steam" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to show the excitement of the battle?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer uses violent, physical language to make the battle thrilling. One Martian "reeled and staggered" and is "cut down", and later a second is struck by the flaming wreck, which "crumpled him up like a thing of cardboard". This simile is especially effective, because the creatures that have seemed unstoppable are suddenly as flimsy as a toy, and the reader shares the watchers\' amazement. The noise and light of the fight come in quick lists, "a violent thud, a blinding flash", which give the reader one sensation after another without a pause.\n\nThe excitement of the crowd is shown as something beyond words. The captain "yelled inarticulately" and the passengers "shouted together", and the plain sentence "And then they yelled again" builds the cheering in stages. The ship itself is described almost as a living hero: "She was alive still", with "the flames streaming from its middle parts", so the reader admires it as if it were a person fighting on.\n\nThe structure keeps swinging between hope and fear. The short sentence "But no one heeded that very much." turns away from the stray shell to the celebration. Then the writer delays the good news with an inverted sentence, "surging out beyond the white tumult, drove something long and black", so that the reader, like the passengers, sees a shape before knowing it is the ship. The final paragraph rises to a climax as the ship rams the second Martian, but it ends by pulling back to one watcher, "My brother shouted involuntarily.", and then hiding the scene completely: "A boiling tumult of steam hid everything again." The reader is left as uncertain as the people on the steamer.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'Violent verbs pile up: one Martian "reeled and staggered" and is "cut down", and a second is "crumpled" by the wreckage.',
                'The simile "like a thing of cardboard" makes the terrible Martian suddenly flimsy.',
                'The crowd\'s reaction goes beyond words: the captain "yelled inarticulately" and the passengers "shouted together".',
                'The ship is presented as a living hero: "She was alive still", with fire "streaming from its middle parts".',
                'The list "a violent thud, a blinding flash" gives sound and light in quick succession.',
              ],
              'Structure: points you might make': [
                'The short sentence "But no one heeded that very much." swings the focus from danger to celebration.',
                'The inverted sentence "surging out beyond the white tumult, drove something long and black" delays the reveal that the ship has survived.',
                'Hope and fear alternate from paragraph to paragraph, building to the climax of the ram.',
                'The short sentence "My brother shouted involuntarily." brings the reader back to one watcher, and the last sentence hides everything in steam, leaving the outcome uncertain.',
              ],
            },
          },
          {
            id: 'edexcel-p1-03-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to make the reader feel the tension and excitement of a battle at sea.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer succeeds very well in creating tension and excitement, largely because of where he places the reader. We do not see the battle from the warship but from a small paddle steamer, through the eyes of the narrator\'s brother, who is helpless to affect what happens. At the start the steamer is thrown about by the warship\'s wake, "sucking her deck down almost to the waterline", and later the brother keeps "his footing on the heaving deck by clutching the bulwarks". Because the watchers are "low in the water and with the sun in their eyes", the reader, like them, often cannot be sure what is happening, which keeps the tension high.\n\nThe writer also makes the Thunder Child seem enormous and frightening, even though it is on the humans\' side. It is "a vast iron bulk like the blade of a plough tearing through the water", and "this charging leviathan". The simile of the plough suggests unstoppable force, and the comparison with a sea monster gives it a kind of wild life. Next to it, the Martians, "Thus sunken, and seen in remote perspective", look "far less formidable", which is a clever reversal: for a moment the reader dares to hope.\n\nThe suspense depends on the ship\'s daring. It "fired no gun, but simply drove full speed towards them", and the writer reminds us of the danger with the stark sentence "One shell, and they would have sent her to the bottom forthwith with the Heat-Ray." From then on we are waiting for the blow to fall. When it does, the simile "like a white-hot iron rod through paper" shows the terrible ease of the Heat-Ray, and the reader fears the ship is lost.\n\nThe writer then reverses our fears twice. First the Martian "reeled and staggered" and is "cut down", and the passengers cheer. Then the ship, which seemed destroyed, reappears: "surging out beyond the white tumult, drove something long and black, the flames streaming from its middle parts". The phrase "She was alive still" makes the ship sound like a wounded animal still fighting, and when it rams the second Martian and "crumpled him up like a thing of cardboard", the excitement is at its height. Yet the reader also senses the cost, since "her decks, her funnels, leaped upward" in the explosion, and the triumph is mixed with loss.\n\nSome readers might find parts of the extract less gripping. The naval words, such as "upperworks", "bulwarks" and "larboard", may be unfamiliar, and the narrator often hedges, as in "it may be" and "it seems", which reminds us that he is retelling his brother\'s account. However, I think these features make the battle more convincing, as though we are reading a true report from a witness. The ending is especially effective: after the climax, "A boiling tumult of steam hid everything again", so the reader is left, like the passengers, staring into the cloud. Overall the extract is a highly successful piece of action writing, because it controls what the reader can see and keeps switching between fear and hope.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The battle is seen from the small steamer, so the reader is a helpless watcher, "low in the water and with the sun in their eyes".',
                'The warship is huge and terrifying even to its own side: "a vast iron bulk like the blade of a plough", a "charging leviathan".',
                'Suspense comes from the ship not firing ("One shell, and they would have sent her to the bottom") and from the brother not knowing what will happen.',
                'The Heat-Ray is made terrible by the simile "like a white-hot iron rod through paper".',
                'The climax, as the burning ship rams a second Martian, is both triumphant and tragic.',
                'Some may find the naval words ("upperworks", "bulwarks", "larboard") or the cautious "it may be" and "it seems" distancing; others that they make it read like a true report.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-03-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-03-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, came to the rescue. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: an orange lifeboat crashing through huge grey waves. Picture 2: a crowd on a harbour wall, cheering and waving as a boat comes in.\n\nWrite a story with the title "Against the Odds". Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nNobody at the bay on that August afternoon was watching the tide. That was the trouble.\n\nI was fourteen and bored, sitting on the sea wall with a bag of chips while my cousins built a sandcastle large enough to be seen from space. The causeway to Gull Island lay below us, a long grey spine of stones and seaweed, and a sign at the end of it, faded by years of salt, warned that the crossing was safe only for two hours either side of low water. Nobody ever read it.\n\nI noticed the dog first. A small brown terrier, barking at the far end of the causeway, running in tight circles on the rocks. Then I saw the man. He was old, with a white cap and a walking stick, and he was making his way back across the stones very, very slowly.\n\nAnd the sea was coming in.\n\nIt did not rush. That was what made it so frightening. It slid. Thin silver tongues of water licked over the lowest stones, drew back, and came again a little further. On either side of the causeway the sandbanks were vanishing, one after another, as if someone were quietly rubbing them out.\n\nI dropped my chips. I do not remember climbing down the steps, only the cold of the first puddle soaking through my trainers. The stones were slick with weed and I slipped twice, grazing my palm. Behind me I heard my aunt shouting my name, high and furious, but it seemed to come from very far away.\n\nWhen I reached him, the water was already over his ankles. Up close he was even older than I had thought, his face creased like paper that has been folded too many times, and he was breathing in short, painful gasps.\n\n"Can\'t hurry," he said, almost apologetically. "Knees."\n\n"Hold on to me," I said, as if I knew what I was doing.\n\nHe put his hand on my shoulder, and it was surprisingly heavy. The terrier pressed itself against our legs, whining. We moved together, one stone at a time, while the sea climbed to our shins, then our knees. It pulled at us gently, patiently, like a child tugging at a sleeve. I fixed my eyes on the steps and counted them in my head, because counting was easier than thinking.\n\nHalfway across, the old man stumbled. For one terrible second I felt his whole weight drag sideways, towards the deep channel where the water was already dark and moving fast. I dug my feet in and pulled, and something in my shoulder burned, and then, somehow, he was upright again.\n\n"Nearly there," I lied.\n\nBy the time we reached the steps the water was at my waist, and the terrier was swimming. Hands reached down from the wall: my aunt, two fishermen, a woman in a sun hat who was crying for no reason that I could see. They hauled the old man up, then the dog, then me, and for a moment everyone was talking at once.\n\nI sat on the warm concrete, shaking, and watched the sea close over the causeway as if it had never been there at all. The old man sat beside me, wrapped in somebody\'s beach towel, and the terrier licked the salt from my grazed hand.\n\n"Thank you," he said quietly, when the fuss had died down. "Forty years I\'ve walked that crossing. Never once read the sign."\n\n"Nobody does," I said.\n\nHe laughed then, a dry, crackling sound, and offered me his hand to shake. It was still trembling, and so was mine.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be a dramatic rescue, or a quieter one: helping a friend, a stranger or an animal when it mattered.',
                'Question 6 could use the lifeboat, the cheering crowd, or neither picture.',
                'Like the extract, a strong piece might switch between hope and fear, and control what the reader can see at each moment.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: Mary Shelley, Frankenstein, Letter 4 (the stranger on the ice)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-04',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Mock A4',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-04-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nFrankenstein begins with letters written by Robert Walton, an English explorer, to his sister, Margaret Saville, at home in England. In this extract, Walton's ship is on its way to the North Pole when it becomes trapped in the ice.\n\nWords you may need: to lie to is to stop a ship and hold it in place; a ground sea is a heavy swell of the sea; capitulated means gave in or agreed to terms; whither means where.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-04-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that the ship is in danger.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"nearly surrounded by ice"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "nearly surrounded by ice"; "closed in the ship on all sides"; "scarcely leaving her the sea-room in which she floated"; "Our situation was somewhat dangerous"; "compassed round by a very thick fog".',
            ],
          },
          {
            id: 'edexcel-p1-04-q2',
            questionNumber: 2,
            questionText:
              "Read again this part of the extract.\n\nAbout two o'clock the mist cleared away, and we beheld, stretched out in every direction, vast and irregular plains of ice, which seemed to have no end. Some of my comrades groaned, and my own mind began to grow watchful with anxious thoughts, when a strange sight suddenly attracted our attention, and diverted our solicitude from our own situation. We perceived a low carriage, fixed on a sledge and drawn by dogs, pass on towards the north, at the distance of half a mile: a being which had the shape of a man, but apparently of gigantic stature, sat in the sledge, and guided the dogs. We watched the rapid progress of the traveller with our telescopes, until he was lost among the distant inequalities of the ice.\n\nThis appearance excited our unqualified wonder. We were, as we believed, many hundred miles from any land; but this apparition seemed to denote that it was not, in reality, so distant as we had supposed. Shut in, however, by ice, it was impossible to follow his track, which we had observed with the greatest attention.\n\nGive two things that the crew see or learn about the traveller on the sledge. You may answer in your own words or with quotations.",
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He "had the shape of a man, but apparently of gigantic stature".\n2. He was travelling fast, on a sledge drawn by dogs, "towards the north".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he rides "a low carriage, fixed on a sledge and drawn by dogs"; he is heading "towards the north"; he has "the shape of a man, but apparently of gigantic stature"; he guides the dogs himself; he moves quickly ("the rapid progress of the traveller"); he disappears "among the distant inequalities of the ice"; his being there suggests that land is "not, in reality, so distant as we had supposed".',
            ],
          },
          {
            id: 'edexcel-p1-04-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "On perceiving me, the stranger addressed me in English" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to show Walton\'s reactions to the stranger?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Walton\'s first reaction is astonishment, and the writer shows it by placing the stranger\'s question before any description of his condition. The stranger asks, in polite and formal words, "will you have the kindness to inform me whither you are bound?", and only afterwards does Walton explain why this is so strange: the man is "on the brink of destruction". The metaphor of the brink shows how close to death Walton believes him to be, and the exaggeration "the most precious wealth the earth can afford" shows how valuable the ship should seem to him. The contrast makes the stranger\'s calm question seem almost unbelievable.\n\nThe paragraph that follows marks a turning point. The exclamation and direct address, "Good God! Margaret", show Walton\'s shock breaking through his usual careful style, and "your surprise would have been boundless" invites his sister, and the reader, to share it. The verb "capitulated" is interesting, because it makes the stranger\'s agreement sound like a surrender after a siege, as though he gave in only reluctantly. Walton\'s surprise then changes to pity. The description "His limbs were nearly frozen, and his body dreadfully emaciated by fatigue and suffering", with the adverb "dreadfully", and the plain statement "I never saw a man in so wretched a condition" show how much the sight moves him.\n\nThe rest of that paragraph is structured as a series of careful actions: "We attempted to carry him into the cabin", "We accordingly brought him back to the deck", and "As soon as he showed signs of life we wrapped him up in blankets". This step-by-step order shows the crew\'s care and the stranger\'s slow recovery. It ends on a gentle note, "restored him wonderfully", but because the stranger still has not explained himself, the reader is left as curious as Walton.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The phrase "on the brink of destruction" shows how near to death Walton thinks the stranger is, which makes his question astonishing.',
                'The exaggeration "the most precious wealth the earth can afford" shows how valuable Walton expects rescue to be.',
                'The exclamation and direct address, "Good God! Margaret", show his shock, and "your surprise would have been boundless" asks his sister to share it.',
                'The word "capitulated" treats the stranger\'s agreement like a surrender after a siege, suggesting a proud, stubborn man.',
                'The description "His limbs were nearly frozen, and his body dreadfully emaciated by fatigue and suffering" turns astonishment into pity.',
              ],
              'Structure: points you might make': [
                "The part opens with dialogue: the stranger's strange question comes before Walton's reaction, so the reader is puzzled with him.",
                'The direct address to Margaret marks the turning point from surprise to sympathy.',
                'The last paragraph is a sequence of actions ("We attempted", "We accordingly brought him back", "As soon as he showed signs of life") that show his slow recovery.',
                'It ends calmly, on "restored him wonderfully", but the mystery of who he is remains.',
              ],
            },
          },
          {
            id: 'edexcel-p1-04-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create a sense of mystery.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates mystery very successfully, chiefly by giving the reader questions and withholding the answers. The setting prepares for this. In the first paragraph the ship is "nearly surrounded by ice" and "compassed round by a very thick fog", and when the fog clears, the crew see "vast and irregular plains of ice, which seemed to have no end". This empty, endless landscape makes anything that appears in it seem strange, and it cuts the crew off from any help or explanation.\n\nThe first sighting is the heart of the mystery. The crew see "a low carriage, fixed on a sledge and drawn by dogs", and in it "a being which had the shape of a man, but apparently of gigantic stature". The writer chooses the word "being" rather than "man", and the phrase "the shape of a man" suggests that it only looks human. The word "apparently" adds doubt, because they see it from "the distance of half a mile" through telescopes. Then it is "lost among the distant inequalities of the ice", so the reader is given a glimpse and nothing more. Walton\'s reasoning deepens the puzzle: they believed they were "many hundred miles from any land", and he calls the figure an "apparition", a word that hints at something ghostly.\n\nThe writer also uses delay well. The ice breaks, night falls, and Walton rests "for a few hours", so the reader must wait. The next morning a second sledge appears, "like that we had seen before", and the reader naturally connects the two travellers. However, this man is "an European", not the giant, so instead of answering the mystery the second traveller adds to it. His first words are a question of his own, "will you have the kindness to inform me whither you are bound?", and Walton is as astonished as we are that a man "on the brink of destruction" should care where the ship is going. The question suggests that he has a purpose, perhaps a pursuit, that he will not explain.\n\nSome readers may feel that the style of the letter weakens the mystery. Walton often writes like a ship\'s log, with "About two o\'clock" and "About two hours after this occurrence", and the calm, practical account of brandy, blankets and soup at the end could seem flat after the strange sightings. However, I think this matter-of-fact tone is part of the writer\'s success. Because Walton is a sensible captain recording facts for his sister, his account is believable, and the impossible figure on the ice becomes more unsettling for appearing in such a plain report.\n\nBy the end of the extract the stranger is safe and eating "a little soup", but nothing has been explained: who the giant was, whether the stranger was following him, or why he needed to know the ship\'s direction. The writer leaves the reader with all of these questions, which is exactly what a successful opening to a mystery should do.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The setting isolates the ship: fog, then "vast and irregular plains of ice, which seemed to have no end".',
                'The first traveller is a "being" with "the shape of a man, but apparently of gigantic stature", seen at a distance through telescopes before he vanishes.',
                'Walton\'s reasoning deepens the puzzle: they are "many hundred miles from any land", so the "apparition" should not be there.',
                'A delay (the ice breaking, the night) is followed by a second sledge, linking the two travellers without explaining them.',
                'The stranger\'s question, "whither you are bound?", and his refusal to board without an answer raise more questions than they answer.',
                'Some may find the plain, report-like style ("About two o\'clock", "About two hours after this occurrence") flat; others that its calm makes the strange events more believable.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-04-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-04-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, met a stranger in an unexpected place. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a ship trapped in sea ice under a heavy grey sky. Picture 2: a single figure walking across a snowfield towards the camera, too far away to recognise.\n\nWrite about a journey into the unknown. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe mist came down on the second day of the expedition, at about four o\'clock, and it came so quickly that it seemed to rise out of the ground.\n\nOne minute we could see the whole of the moor spread out below us, purple and brown, with the reservoir glinting in the valley like a dropped coin. The next, there was nothing. The world shrank to a circle of wet grass about ten metres wide, and the four of us stood in the middle of it, staring at one another.\n\n"It\'s fine," said Priya, who had the map. "We just follow the bearing."\n\nWe followed the bearing. Priya held the compass flat on her palm, and we walked in single file behind her, so close that I could hear the rustle of her waterproof. The mist was not like smoke, as I had always imagined. It was heavier than that, and colder, and it beaded on our eyelashes and soaked through our gloves. Sounds behaved strangely inside it. A sheep coughed somewhere to our left, and it sounded as though it were standing right beside me.\n\nAfter an hour the path disappeared. It did not end. It simply faded, the way a pencil line fades when you rub it out, until we were walking on bare heather with no idea whether anyone had ever walked there before.\n\nNobody said that we were lost. Nobody needed to.\n\nThen the ground began to slope downwards, and the heather gave way to stones, and we heard water. A stream, fast and narrow, cutting across our path. On the far side, half hidden by the mist, stood a low stone building with no roof. Its empty windows looked at us like the eye sockets of something very old.\n\n"That\'s not on the map," said Tom.\n\nWe crossed the stream on a line of slippery stones and stood inside the ruin, glad of any walls at all. Someone, long ago, had lived here. There was a fireplace, blackened at the back, and a rusted hook still hanging above it. In one corner a rowan tree had grown up through the floor, and its berries were the only colour in the whole grey world.\n\nWe sat with our backs to the wall and shared the last of the chocolate. Priya traced the stream on the map with a wet finger, and slowly her face changed.\n\n"There," she said. "If this is that stream, then the campsite is just down the valley. We\'ve come the long way round, that\'s all."\n\nIt turned out that she was right. Forty minutes later we saw the first glow of the campsite lights, blurred and golden through the mist, and we cheered as if we had reached the North Pole.\n\nThat night, lying in my sleeping bag and listening to the rain on the tent, I could not stop thinking about the ruined house. Someone had built it stone by stone, and sat by that fire, and watched the mist come down over the same moor. They had known the way through it without a map or a compass. For a few hours that afternoon, we had walked into their world, the world before paths, and found that it was not empty at all.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be a chance meeting on a journey, at a station, in a hospital waiting room or in the middle of nowhere.',
                'Question 6 could use the ship in the ice, the figure in the snow, or neither picture, and the unknown could be a place, a new school or a new life.',
                'Like the extract, a strong piece might hold back what the reader wants to know, and let a calm narrator describe something strange.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: Robert Louis Stevenson, Jekyll and Hyde, Chapter 9 (Lanyon's midnight visitor)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-p1-05',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Mock A5',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-05-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Dr Lanyon, a London doctor, describes what happened after he received a letter from his old friend, Dr Henry Jekyll. Jekyll begged him to fetch a drawer of chemicals from Jekyll's laboratory and to hand it, at midnight, to a man who would call in Jekyll's name.\n\nWords you may need: a portico is a porch held up by pillars; a policeman's bull's eye is a lantern with a thick, rounded lens; debility means weakness; incipient rigour is the start of a shivering fit; an accoutrement is an outfit; misbegotten means badly made.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-05-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that the visitor does not want to draw attention to himself.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"the knocker sounded very gently on the door"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "the knocker sounded very gently"; "very gently"; "crouching against the pillars of the portico"; "crouching".',
            ],
          },
          {
            id: 'edexcel-p1-05-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nHe told me “yes” by a constrained gesture; and when I had bidden him enter, he did not obey me without a searching backward glance into the darkness of the square. There was a policeman not far off, advancing with his bull’s eye open; and at the sight, I thought my visitor started and made greater haste.\n\nGive two things which suggest that the visitor is nervous of being seen. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. He gave "a searching backward glance into the darkness of the square" before he came in.\n2. When he saw the policeman, he "started and made greater haste".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he answers only "by a constrained gesture", not in words; he gives "a searching backward glance into the darkness of the square" before he enters; he "started" when he saw the policeman; he "made greater haste" to get inside.',
            ],
          },
          {
            id: 'edexcel-p1-05-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "This person" to "sought to shake me".\n\nIn this part of the extract, how does the writer use language and structure to show Lanyon\'s feelings about his visitor?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Lanyon\'s feelings about his visitor are mixed from the start, and the writer shows this through the phrase "a disgustful curiosity". The adjective "disgustful" shows repulsion, but the noun "curiosity" shows that Lanyon cannot stop looking, and this tension runs through the whole part. The clothes are described in a long, detailed list: they are "enormously too large for him in every measurement", with "the trousers hanging on his legs and rolled up", "the waist of the coat below his haunches", and "the collar sprawling wide upon his shoulders". The verb "sprawling" makes even the collar seem out of control.\n\nThe writer then reverses what we expect. The "ludicrous accoutrement" ought to be funny, but it was "far from moving me to laughter". Instead Lanyon senses "something abnormal and misbegotten in the very essence of the creature". The noun "creature" and the adjective "misbegotten" make the visitor seem less than human, and the three words "seizing, surprising and revolting" build to the strongest feeling, disgust.\n\nThe structure mirrors the way Lanyon tries to make sense of what he feels. His sentences are long and full of careful qualifications, a bracketed aside and dashes, as if a scientist were recording symptoms. Then a short paragraph changes the pace: "These observations, though they have taken so great a space to be set down in, were yet the work of a few seconds." This reminds the reader how fast the impressions came, and the contradiction "on fire with sombre excitement" prepares for a burst of action. The visitor\'s repeated question, "Have you got it?", breaks into the calm description, and his hand on Lanyon\'s arm turns observation into confrontation, leaving Lanyon, and the reader, on edge.',
            },
            markScheme: {
              'How it is marked (6 marks)': Q3_LEVELS,
              'Language: points you might make': [
                'The phrase "a disgustful curiosity" joins repulsion and fascination.',
                'The detailed list of the clothes ("the trousers hanging on his legs", "the collar sprawling wide upon his shoulders") makes the visitor grotesque.',
                'The "ludicrous accoutrement" should be funny but is "far from moving me to laughter", which shows Lanyon\'s growing dread.',
                'Calling the visitor "the creature" and "misbegotten" makes him seem less than human.',
                'The three adjectives "seizing, surprising and revolting" build towards disgust, and "on fire with sombre excitement" is a contradiction that unsettles.',
              ],
              'Structure: points you might make': [
                'Long, carefully balanced sentences, with a bracketed aside and dashes, show a scientist trying to analyse a feeling he cannot explain.',
                'The short paragraph "These observations ... were yet the work of a few seconds" shifts the time and speeds up the pace.',
                'The sudden dialogue, "Have you got it?", repeated, breaks into the description and turns observation into confrontation.',
              ],
            },
          },
          {
            id: 'edexcel-p1-05-q4',
            questionNumber: 4,
            questionText:
              "In this extract, the writer sets out to create a sense of unease about Lanyon's visitor.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.",
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is extremely successful in creating unease, because almost every detail suggests that something is wrong while nothing is fully explained. The setting begins this. "Twelve o\'clock had scarce rung out over London" when the knock comes, and it comes "very gently", which is odder than a loud knock would be. Lanyon finds "a small man crouching against the pillars of the portico", and the verb "crouching" makes the visitor seem furtive, almost animal. His "searching backward glance into the darkness of the square" and his start at the sight of a policeman suggest that he has something to hide.\n\nWhat makes the unease so convincing is that it comes from a doctor, a man of science. Lanyon admits that he "kept my hand ready on my weapon", which tells the reader how threatening the visitor seems. He then describes his own feelings as if they were symptoms: "the odd, subjective disturbance caused by his neighbourhood", which "bore some resemblance to incipient rigour, and was accompanied by a marked sinking of the pulse". The medical language makes the reaction seem physical and involuntary, as if his body knows something his mind does not. The writer adds a further layer by letting Lanyon look back: "I have since had reason to believe the cause to lie much deeper in the nature of man". This hint makes the reader uneasy about what Lanyon has since discovered.\n\nThe description of the clothes is also very effective. They are "enormously too large for him in every measurement", with the trousers "rolled up to keep them from the ground". In another story this might be comic, and Lanyon admits that it "would have made an ordinary person laughable". But he insists that it was "far from moving me to laughter", because there was "something abnormal and misbegotten in the very essence of the creature that now faced me". Turning something comic into something sinister is a powerful way to unsettle the reader.\n\nThe tension rises when the visitor speaks. His question, "Have you got it?", repeated, and his hand on Lanyon\'s arm break the polite manners of the consulting room, and Lanyon feels "a certain icy pang along my blood". Lanyon tries to restore order, sitting down "with as fair an imitation of my ordinary manner to a patient" as he can manage, but the word "imitation" shows that his calm is only an act. The visitor then replies "civilly enough", which is almost more worrying, and the extract ends with him "wrestling against the approaches of the hysteria", unable to finish his sentence: "I understood, a drawer...".\n\nSome readers may find Lanyon\'s language too formal and abstract, with phrases such as "idiosyncratic, personal distaste" and "great apparent debility of constitution" slowing the pace. However, I think this is deliberate: a calm, rational man is struggling to explain something irrational, and his failure to find the words is itself unsettling. Overall the writer creates a strong and growing sense of unease, and the unfinished final sentence leaves the reader desperate to know what is in the drawer.',
            },
            markScheme: {
              'How it is marked (15 marks)': Q4_LEVELS,
              'Points you might make': [
                'The time and place set the mood: midnight, a gentle knock, a man "crouching against the pillars of the portico", and the darkness of the square.',
                'The visitor\'s secrecy (the "searching backward glance", his start at the policeman) and Lanyon\'s "hand ready on my weapon" suggest danger.',
                'Lanyon\'s body reacts as a doctor would note it: "incipient rigour" and "a marked sinking of the pulse", which makes the unease seem real.',
                'His hint that the cause lies "much deeper in the nature of man" adds mystery.',
                'The clothes "enormously too large for him" are strange rather than funny, and the visitor\'s touch brings "a certain icy pang along my blood".',
                'The extract ends with the visitor fighting "the approaches of the hysteria" and unable to finish his sentence. Some may find Lanyon\'s abstract words slow, others that his struggle to explain is what makes the scene disturbing.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-05-writing',
        title: 'Section B: Imaginative Writing',
        description: SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-05-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, had an unexpected visitor. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a front door at night, lit by a single lamp, with a long shadow falling across the step. Picture 2: an old-fashioned doctor's study, its shelves lined with bottles and books.\n\nWrite a story about a secret. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.",
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe power went off at ten past eleven, just as the storm was getting into its stride, and the knock came twenty minutes later.\n\nI was alone in the house. Mum was on a night shift at the hospital, and my brother was staying at a friend\'s, which was why I had been allowed, for the first time, to stay home by myself. I had been very grown-up about it. I had made a sandwich, watched half a film and checked the back door twice. Then the lights died, the fridge fell silent, and the house became somewhere I had never been before.\n\nI found the torch in the kitchen drawer and sat on the stairs with it switched off, because the darkness felt safer than the small, shaking circle of light. The rain was hammering on the porch roof. Somewhere a gate was banging, again and again, like someone who would not take no for an answer.\n\nThen: three knocks. Not loud. Polite, almost. That was the worst part.\n\nI did not move. I told myself that if I sat still enough, whoever it was would go away. The letterbox rattled, and a gust of cold air ran across the hall floor and touched my bare feet. Then a voice, thin and cracked, came through the slot.\n\n"Hello? Is anybody there? I\'m so sorry. I\'ve locked myself out."\n\nI knew that voice. It took me a moment, because I had never heard it frightened before, but I knew it.\n\nMrs Hargreaves from number twelve was standing on our step in a dressing gown and a pair of fluffy slippers, which were soaked through. She was holding a candle in a jam jar, and its flame threw her shadow huge and wobbling across the front of the house. Her white hair was plastered to her head.\n\n"I went out to see to the bins," she said, "and the wind blew the door shut behind me. The key\'s on the hall table. Of all the silly things." Her teeth were chattering.\n\nI brought her inside and wrapped her in the throw from the sofa. We sat in the kitchen by the light of the torch and her candle, and I made us both tea with water from the kettle, which was still warm. She held the mug in both hands, the way people do in films, and slowly the colour came back into her face.\n\nWe talked for an hour. I had lived next door to her all my life and I had never really spoken to her beyond "good morning". It turned out that she had been a nurse, like Mum. She had once delivered a baby in the back of a taxi on the ring road. She had a son in Canada who rang every Sunday, and she had not told him that she was lonely, because she did not want him to worry.\n\nAt half past midnight the lights came back on all at once, startling us both, and the fridge shuddered back into life. Mum rang the locksmith from the hospital, and by one o\'clock Mrs Hargreaves was safely home, waving to me from her lit-up doorway.\n\nNow, every Thursday, I take her bins out for her. She pays me in shortbread and stories. And whenever there is a storm, I think of that knock on the door, polite and frightened, and how close I came to not answering it.',
            },
            markScheme: {
              'How it is marked (40 marks)': WRITING_LEVELS,
              'What earns marks': WRITING_REWARDS,
              'Ideas for these tasks': [
                'Question 5 could be a visit that frightened, delighted or puzzled you: a late-night knock, a long-lost relative, a neighbour in need.',
                'Question 6 could use the door at night, the study, or neither picture.',
                'Like the extract, a strong piece might build unease through small details and keep back an explanation until the end, or leave it out altogether.',
              ],
            },
          },
        ],
      },
    ],
  },
]
