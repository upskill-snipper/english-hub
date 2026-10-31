// @ts-nocheck
// ─── Edexcel GCSE English Language Mock Exams ────────────────────────────────
// 6 complete exam papers: 3x Paper 1 (Fiction & Imaginative Writing, restructured 31 October 2026)
// 3x Paper 2 (Non-fiction & Transactional Writing, restructured 31 October 2026)
// Code: 1EN0/01 (Paper 1) and 1EN0/02 (Paper 2)

// FACT-CHECK 2026-09-27 (node scripts/check-mock-exam-extracts.mjs --file
// mock-exams-edexcel). All six papers here are live: the loader serves them
// from this module.
//
// WHAT WAS WRONG. Every one of the nine reading passages was written for this
// file, and none is anyone else's words, but seven were labelled as if they
// were: "Adapted from feature journalism, The Guardian, 2022", "Adapted from
// academic article, Conservation Biology Quarterly, 2023", "Letter to local
// council, submitted by community group, 2024", "Adapted from local news
// feature, BBC Local, 2023", two "Adapted from contemporary memoir"s, and
// "From collected essays by William Davies, 2022". William Davies is a real,
// living writer; the essay was never his. An audit note of 2026-04-28 (FC20)
// recorded that these labels were fabricated and left them printing on the
// live papers. Searches for distinctive sentences from four of the passages
// found no published original. Every label now says the passage was
// specially written for this practice paper, and nothing here names a
// publication or a person as its source.
//
// The model answers and one question also quoted words the passages do not
// contain: "stood in stunned silence" and "stunning silence" (the passage has
// "sat in stunned silence"), "monument to permanence" (it is "monuments"),
// "clocking out" and "walking out" ("clocked", "walked"), "a museum of
// interruption... preserves a life mid-pause" (the passage says "preserved",
// after a full stop), "cost unjustifiable", "leaving all along" (it is
// "leaving me all along"), "economic benefit" and "community benefit"
// (neither is there), and a question about what people "understood
// intellectually", a phrase the passage never uses. Four more quotations
// dropped words from their middle with no ellipsis. Each quotation is now
// the passage's own words, and the sentence around it was reread against
// them. An answer that called Rosalind "homeless" (she has a home she cannot
// bear to stay in), and a question and answers that gave the anonymous
// writers of three passages a sex the passages never state, were corrected
// too.
//
// The feral-cat passage (Paper 1 Set B) contradicted itself. It set "8.7
// million" feral cats beside 94 million owned ones, then said the feral cats
// "outnumber their domesticated cousins", and a model answer taught that as
// fact. We found no estimate of 8.7 million: the one researchers cite (Loss,
// Will and Marra, Nature Communications, 2013) is 30 to 80 million unowned
// cats. Its "420 descendants in seven years" had no source either. The
// passage now gives that range and plain breeding biology (two or three
// litters a year, kittens breeding before their first birthday), and the
// answers follow it.
//
// A second read the same day found what the first pass missed. One answer
// still made the Paper 2 Set A narrator female ("her mother's honesty"), and
// another gave both of that paper's sources "the narrator", though Source 1
// is told in the third person. Three answers turned "her marriage ended" into "divorce" or
// "marital breakdown", which the story never says. A Paper 2 Set B answer
// said the passage "explicitly" has the unemployed losing "job-search
// facilities and dignity"; it mentions neither. Paper 1 Set C question 1
// asked what "the writer" meant by calling the green "underutilised" and
// "inefficient": those are the words the writer reports others using, only
// to reject them. The three model letters for Paper 1 Set B question 5 open
// "Dear [Councillor Name]" and closed "Yours faithfully", the close for a
// reader not named, under a mark scheme that rewards the correct close; they
// now close "Yours sincerely", and their -ize spellings match the -ise of
// the rest of each letter. Two Paper 2 Set A stories had "arrived early to
// practice" (the verb is "practise") and "sat in his usual table".
//
// The mock-exam page (src/app/dashboard/mock-exam/page.tsx) prints only the
// first question's extract in each section, so Source 2 of every Paper 2 here
// was never shown, although the section said "Read the two extracts below",
// and Set A questions 3 and 4, Set B questions 2 to 4 and Set C questions 3
// and 4 asked about a text the student could not see. Since 31 October 2026
// Question 1 of each Paper 2 prints both texts (see the note above the Paper 2
// texts). The page itself still shows only the first question's extract.
//
// Pearson Edexcel 1EN0 Paper 1 is Fiction and Imaginative Writing (a
// nineteenth-century extract; 1 hour 45 minutes, 64 marks) and Paper 2 is
// Non-fiction and Transactional Writing (two non-fiction texts; 2 hours 5
// minutes, 96 marks). These papers have the two titles the wrong way round,
// and neither paper's timings, tariffs or question pattern is the board's.
// Renaming them changes the generated paper index, so it is a separate
// change. Paper 2 (Sets A to C) has since been restructured to Pearson's
// paper, title, timings and tariffs included, and Set C's writing task has
// model answers in place of the bracketed placeholders it had (31 October
// 2026; see the note above the Paper 2 texts). Paper 1 (Sets A to C) has been
// restructured the same way, as Fiction and Imaginative Writing on a
// nineteenth-century extract (31 October 2026; see the note above the Paper 1
// extracts).

// QA 2026-08-23: this module is one of the loader's lazy sources
// (`edexcel` in SOURCE_LOADERS). It imported its shapes from the AGGREGATOR
// with a value-form `import { ... }`, not `import type`, so nothing but SWC's
// type-elision stopped the "lazy" edexcel chunk re-importing
// `src/data/mock-exams.ts` - which statically pulls every other bank, i.e. the
// entire ~2.8 MB paper set the split was meant to remove. The file also
// carries `// @ts-nocheck`, so tsc would never have flagged it. Point at the
// type-only leaf module and mark it `import type` so the aggregator is
// unreachable from this chunk by construction.
import type { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams/types'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 1 EXTRACTS: Fiction and Imaginative Writing (1EN0/01)
// ═══════════════════════════════════════════════════════════════════════════
//
// RESTRUCTURED 31 October 2026. Found on 24 October 2026, the day the AI
// marker was corrected to mark each paper as its board does: Sets A to C were
// not Pearson's Paper 1. Each printed a passage of non-fiction written for
// the site (a factory closing, feral cats, a letter about a town green), where
// Paper 1 is always an unseen extract of nineteenth-century fiction, and each
// set questions worth 4, 8, 8 and 20 and one transactional writing task worth
// 56: 96 marks, Paper 2's total, under Paper 1's code. Pearson sets 1, 2, 6
// and 15 marks of reading and one piece of imaginative writing for 40, from a
// choice of two tasks: 64 marks in 1 hour 45 minutes. A student sat an exam
// that does not exist, and an answer handed to the marker found no question
// of its worth, so it got general feedback with no marks.
//
// Each set is now 1EN0/01 as src/data/mark-scheme-guides/edexcel-lang-paper1.ts
// describes it, in the pattern of src/data/mock-exams/edexcel-p1-a.ts (whose
// docblock gives the detail), on a nineteenth-century extract cut by script
// from the held edition named above its constant and checked against it byte
// for byte. Nothing in an extract is changed. Every quotation in the reading
// answers and mark schemes was checked by script against its extract. The
// corrections of 27 September 2026 recorded at the top of this file for the
// Paper 1 sets were to the passages these papers printed until then, the
// site's own, and to their answers, which went with them.
//
// CHECKED 31 October 2026 by a second reader, against each extract and the
// held edition. Fixed:
//   - the file's first lines still called Paper 1 "Non-Fiction & Transactional
//     Writing". Now Fiction and Imaginative Writing.
//   - Set B context sent the party to see Bartholomew "about a hidden
//     treasure"; he has just found it, as Thaddeus tells them. Corrected.
//   - Set B Q3 answer and scheme had the pair "comfort and protection" show
//     that the feeling is shared; it is "there was in her also" that does.
//   - Set C context made Dunstan "the wild younger son" of the squire; the
//     novel calls him the second son, and there is a third. Corrected.

// src/data/full-texts/jekyll-and-hyde.ts, The Last Night: 17 paragraphs, 712 words, cut by script.
const EDEXCEL_P1_SET_A_EXTRACT = `It was a wild, cold, seasonable night of March, with a pale moon, lying on her back as though the wind had tilted her, and flying wrack of the most diaphanous and lawny texture. The wind made talking difficult, and flecked the blood into the face. It seemed to have swept the streets unusually bare of passengers, besides; for Mr. Utterson thought he had never seen that part of London so deserted. He could have wished it otherwise; never in his life had he been conscious of so sharp a wish to see and touch his fellow-creatures; for struggle as he might, there was borne in upon his mind a crushing anticipation of calamity. The square, when they got there, was full of wind and dust, and the thin trees in the garden were lashing themselves along the railing. Poole, who had kept all the way a pace or two ahead, now pulled up in the middle of the pavement, and in spite of the biting weather, took off his hat and mopped his brow with a red pocket-handkerchief. But for all the hurry of his coming, these were not the dews of exertion that he wiped away, but the moisture of some strangling anguish; for his face was white and his voice, when he spoke, harsh and broken.

“Well, sir,” he said, “here we are, and God grant there be nothing wrong.”

“Amen, Poole,” said the lawyer.

Thereupon the servant knocked in a very guarded manner; the door was opened on the chain; and a voice asked from within, “Is that you, Poole?”

“It’s all right,” said Poole. “Open the door.”

The hall, when they entered it, was brightly lighted up; the fire was built high; and about the hearth the whole of the servants, men and women, stood huddled together like a flock of sheep. At the sight of Mr. Utterson, the housemaid broke into hysterical whimpering; and the cook, crying out “Bless God! it’s Mr. Utterson,” ran forward as if to take him in her arms.

“What, what? Are you all here?” said the lawyer peevishly. “Very irregular, very unseemly; your master would be far from pleased.”

“They’re all afraid,” said Poole.

Blank silence followed, no one protesting; only the maid lifted her voice and now wept loudly.

“Hold your tongue!” Poole said to her, with a ferocity of accent that testified to his own jangled nerves; and indeed, when the girl had so suddenly raised the note of her lamentation, they had all started and turned towards the inner door with faces of dreadful expectation. “And now,” continued the butler, addressing the knife-boy, “reach me a candle, and we’ll get this through hands at once.” And then he begged Mr. Utterson to follow him, and led the way to the back garden.

“Now, sir,” said he, “you come as gently as you can. I want you to hear, and I don’t want you to be heard. And see here, sir, if by any chance he was to ask you in, don’t go.”

Mr. Utterson’s nerves, at this unlooked-for termination, gave a jerk that nearly threw him from his balance; but he recollected his courage and followed the butler into the laboratory building through the surgical theatre, with its lumber of crates and bottles, to the foot of the stair. Here Poole motioned him to stand on one side and listen; while he himself, setting down the candle and making a great and obvious call on his resolution, mounted the steps and knocked with a somewhat uncertain hand on the red baize of the cabinet door.

“Mr. Utterson, sir, asking to see you,” he called; and even as he did so, once more violently signed to the lawyer to give ear.

A voice answered from within: “Tell him I cannot see anyone,” it said complainingly.

“Thank you, sir,” said Poole, with a note of something like triumph in his voice; and taking up his candle, he led Mr. Utterson back across the yard and into the great kitchen, where the fire was out and the beetles were leaping on the floor.

“Sir,” he said, looking Mr. Utterson in the eyes, “Was that my master’s voice?”

“It seems much changed,” replied the lawyer, very pale, but giving look for look.`

const EDEXCEL_P1_SET_A_SOURCE =
  'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), from Chapter 8, The Last Night'

// src/data/full-texts/the-sign-of-four.ts, Chapter V: 15 paragraphs, 707 words, cut by script.
const EDEXCEL_P1_SET_B_EXTRACT = `Inside, a gravel path wound through desolate grounds to a huge clump of a house, square and prosaic, all plunged in shadow save where a moonbeam struck one corner and glimmered in a garret window. The vast size of the building, with its gloom and its deathly silence, struck a chill to the heart. Even Thaddeus Sholto seemed ill at ease, and the lantern quivered and rattled in his hand.

“I cannot understand it,” he said. “There must be some mistake. I distinctly told Bartholomew that we should be here, and yet there is no light in his window. I do not know what to make of it.”

“Does he always guard the premises in this way?” asked Holmes.

“Yes; he has followed my father’s custom. He was the favourite son, you know, and I sometimes think that my father may have told him more than he ever told me. That is Bartholomew’s window up there where the moonshine strikes. It is quite bright, but there is no light from within, I think.”

“None,” said Holmes. “But I see the glint of a light in that little window beside the door.”

“Ah, that is the housekeeper’s room. That is where old Mrs. Bernstone sits. She can tell us all about it. But perhaps you would not mind waiting here for a minute or two, for if we all go in together and she has no word of our coming she may be alarmed. But hush! what is that?”

He held up the lantern, and his hand shook until the circles of light flickered and wavered all round us. Miss Morstan seized my wrist, and we all stood with thumping hearts, straining our ears. From the great black house there sounded through the silent night the saddest and most pitiful of sounds,—the shrill, broken whimpering of a frightened woman.

“It is Mrs. Bernstone,” said Sholto. “She is the only woman in the house. Wait here. I shall be back in a moment.” He hurried for the door, and knocked in his peculiar way. We could see a tall old woman admit him, and sway with pleasure at the very sight of him.

“Oh, Mr. Thaddeus, sir, I am so glad you have come! I am so glad you have come, Mr. Thaddeus, sir!” We heard her reiterated rejoicings until the door was closed and her voice died away into a muffled monotone.

Our guide had left us the lantern. Holmes swung it slowly round, and peered keenly at the house, and at the great rubbish-heaps which cumbered the grounds. Miss Morstan and I stood together, and her hand was in mine. A wondrous subtle thing is love, for here were we two who had never seen each other before that day, between whom no word or even look of affection had ever passed, and yet now in an hour of trouble our hands instinctively sought for each other. I have marvelled at it since, but at the time it seemed the most natural thing that I should go out to her so, and, as she has often told me, there was in her also the instinct to turn to me for comfort and protection. So we stood hand in hand, like two children, and there was peace in our hearts for all the dark things that surrounded us.

“What a strange place!” she said, looking round.

“It looks as though all the moles in England had been let loose in it. I have seen something of the sort on the side of a hill near Ballarat, where the prospectors had been at work.”

“And from the same cause,” said Holmes. “These are the traces of the treasure-seekers. You must remember that they were six years looking for it. No wonder that the grounds look like a gravel-pit.”

At that moment the door of the house burst open, and Thaddeus Sholto came running out, with his hands thrown forward and terror in his eyes.

“There is something amiss with Bartholomew!” he cried. “I am frightened! My nerves cannot stand it.” He was, indeed, half blubbering with fear, and his twitching feeble face peeping out from the great Astrakhan collar had the helpless appealing expression of a terrified child.`

const EDEXCEL_P1_SET_B_SOURCE = 'Arthur Conan Doyle, The Sign of Four (1890), from Chapter 5'

// src/data/full-texts/silas-marner.ts, Chapter V: 6 paragraphs, 758 words, cut by script.
const EDEXCEL_P1_SET_C_EXTRACT = `He reached his door in much satisfaction that his errand was done: he opened it, and to his short-sighted eyes everything remained as he had left it, except that the fire sent out a welcome increase of heat. He trod about the floor while putting by his lantern and throwing aside his hat and sack, so as to merge the marks of Dunstan’s feet on the sand in the marks of his own nailed boots. Then he moved his pork nearer to the fire, and sat down to the agreeable business of tending the meat and warming himself at the same time.

Any one who had looked at him as the red light shone upon his pale face, strange straining eyes, and meagre form, would perhaps have understood the mixture of contemptuous pity, dread, and suspicion with which he was regarded by his neighbours in Raveloe. Yet few men could be more harmless than poor Marner. In his truthful simple soul, not even the growing greed and worship of gold could beget any vice directly injurious to others. The light of his faith quite put out, and his affections made desolate, he had clung with all the force of his nature to his work and his money; and like all objects to which a man devotes himself, they had fashioned him into correspondence with themselves. His loom, as he wrought in it without ceasing, had in its turn wrought on him, and confirmed more and more the monotonous craving for its monotonous response. His gold, as he hung over it and saw it grow, gathered his power of loving together into a hard isolation like its own.

As soon as he was warm he began to think it would be a long while to wait till after supper before he drew out his guineas, and it would be pleasant to see them on the table before him as he ate his unwonted feast. For joy is the best of wine, and Silas’s guineas were a golden wine of that sort.

He rose and placed his candle unsuspectingly on the floor near his loom, swept away the sand without noticing any change, and removed the bricks. The sight of the empty hole made his heart leap violently, but the belief that his gold was gone could not come at once—only terror, and the eager effort to put an end to the terror. He passed his trembling hand all about the hole, trying to think it possible that his eyes had deceived him; then he held the candle in the hole and examined it curiously, trembling more and more. At last he shook so violently that he let fall the candle, and lifted his hands to his head, trying to steady himself, that he might think. Had he put his gold somewhere else, by a sudden resolution last night, and then forgotten it? A man falling into dark waters seeks a momentary footing even on sliding stones; and Silas, by acting as if he believed in false hopes, warded off the moment of despair. He searched in every corner, he turned his bed over, and shook it, and kneaded it; he looked in his brick oven where he laid his sticks. When there was no other place to be searched, he kneeled down again and felt once more all round the hole. There was no untried refuge left for a moment’s shelter from the terrible truth.

Yes, there was a sort of refuge which always comes with the prostration of thought under an overpowering passion: it was that expectation of impossibilities, that belief in contradictory images, which is still distinct from madness, because it is capable of being dissipated by the external fact. Silas got up from his knees trembling, and looked round at the table: didn’t the gold lie there after all? The table was bare. Then he turned and looked behind him—looked all round his dwelling, seeming to strain his brown eyes after some possible appearance of the bags where he had already sought them in vain. He could see every object in his cottage—and his gold was not there.

Again he put his trembling hands to his head, and gave a wild ringing scream, the cry of desolation. For a few moments after, he stood motionless; but the cry had relieved him from the first maddening pressure of the truth. He turned, and tottered towards his loom, and got into the seat where he worked, instinctively seeking this as the strongest assurance of reality.`

const EDEXCEL_P1_SET_C_SOURCE = 'George Eliot, Silas Marner (1861), from Chapter 5'

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 TEXTS: Non-fiction and Transactional Writing (1EN0/02)
// ═══════════════════════════════════════════════════════════════════════════
//
// RESTRUCTURED 31 October 2026 to Pearson's paper, as
// src/data/mark-scheme-guides/edexcel-lang-paper2.ts and the marker's scheme
// edexcel-lang-paper2 set it out, and held there by
// src/__tests__/a-language-mock-is-the-boards-paper.test.ts. Sets A to C were
// titled "Fiction and Imaginative Writing", set reading questions worth 4, 8,
// 8 and 20 and one 56-mark story in 105 minutes, and Sets A and C read a short
// story as Source 1. Pearson's Paper 2 reads two 20th or 21st century
// non-fiction texts, in 2 hours 5 minutes for 96 marks: Questions 1 and 2
// (2 marks each) and 3 (15) on Text 1, 4 and 5 (1 each) and 6 (15) on Text 2,
// 7(a) (6) and 7(b) (14) on both, then Question 8 or 9 for 40. The two short
// stories are replaced by non-fiction written for these papers and labelled
// so (src/data/full-texts holds no non-fiction to take a real extract from);
// the memoirs, the essay and the library feature are kept word for word.
// Question 1 of each paper prints both texts, because the mock-exam page shows
// only the first question's extract for a whole section.
//
// CHECKED 31 October 2026 by a second reader, question by question, against
// the guide and the texts. No text here credits a real body with a finding;
// the one general claim, that charities warn loneliness can harm health as
// much as smoking, names none. Corrected:
//   - Set A Question 2 credited the weddings, funerals and dance class the
//     women went to as ways they "look after each other"; it no longer does.
//   - Set A Question 6: "the three sentences beginning That" (the first of the
//     three is a clause, "that her honesty"); now the three parallel clauses.
//   - Set A 7(a): Text 1 was said to show painful things "once kept quiet";
//     it shows them spoken about, and only Text 2 has the silence.
//   - Set B Question 3: "a Tuesday in November" was called a precise date, a
//     sentence read "The detail that the books already packed", and the list
//     of the third paragraph sat in the first of the sentences said to follow.
//   - Set B Question 5 asked what the writer "met for the first time", which
//     the paragraph says only of the hunger; now what came into the writer's
//     life. 7(a): the library text was said to contrast an earlier time with
//     the present, which it does not; 7(b): Text 2 was said to end with a
//     question, and it ends with a tentative statement.
//   - Set C Question 6 and 7(b): "the ordinary extraordinary labour" was
//     called a paradox (it is an oxymoron), and "I could have recycled them"
//     a temptation. Question 2 counted "they were kept" and where they were
//     kept as two points; 7(a) quoted "the weather" from Text 1 alone as both
//     texts' evidence, and said Text 1 "imagines" the letters it describes.
//   - Board wording: "Evaluate how successfully this is achieved." (Question
//     6), "Use evidence from both texts to support your answer." (7(a)),
//     "Compare how the ... writers present their ideas and perspectives"
//     (7(b)) and Question 2's "You may use your own words or quotations" are
//     Pearson's sentences or all but; each is reworded.

// Pearson's levels for each kind of question, in our own words, from the
// guide; each question puts its own points to look for in front of them.
const EDEXCEL_P2_MARKS_Q3 = [
  'Level 1 (1-3 marks): says a little about the text and names some features, with few quotations.',
  'Level 2 (4-6 marks): comments on the writing, with quotations that fit but are not explored. An answer on language only, or on structure only, goes no higher than this level.',
  'Level 3 (7-9 marks): explains how both the language and the structure create effects, with well-matched quotations.',
  'Level 4 (10-12 marks): explores both the language and the structure in detail, with plenty of quotations backing up each point.',
  'Level 5 (13-15 marks): analyses both with real insight, using carefully chosen quotations that sharpen every point.',
]

const EDEXCEL_P2_MARKS_Q6 = [
  'Level 1 (1-3 marks): mostly describes the content; opinions are given without reasons, with few quotations.',
  'Level 2 (4-6 marks): comments on the content and offers simple opinions, backed by quotations that fit but are not explored.',
  'Level 3 (7-9 marks): explains how the writing achieves its effect and gives a reasoned view of how well it works, with suitable quotations.',
  'Level 4 (10-12 marks): analyses the text and builds a well-argued judgement, with detailed quotations backing up every point.',
  'Level 5 (13-15 marks): evaluates the text as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
  "From Level 2 upwards, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
]

const EDEXCEL_P2_MARKS_Q7A = [
  'Both texts must be used: an answer that draws on one text only scores 0.',
  'Level 1 (1-2 marks): spots one or two similarities but links them only loosely, with little evidence.',
  'Level 2 (3-4 marks): finds sensible similarities and joins the texts clearly, with suitable evidence, though one text may get more attention than the other.',
  'Level 3 (5-6 marks): finds well-observed similarities and weaves the two texts together throughout, with well-chosen evidence from both.',
  'This question rewards finding and combining evidence; analysis of language earns nothing extra.',
]

const EDEXCEL_P2_MARKS_Q7B = [
  'Level 1 (1-2 marks): says what each text is about without really comparing them, with few quotations.',
  "Level 2 (3-5 marks): makes the more obvious comparisons and comments on the writers' views, with quotations that fit but are not explored. An answer that deals with only one text in detail goes no higher than this level.",
  "Level 3 (6-8 marks): makes several comparisons and explains each writer's views and how they come across, with well-matched quotations. An answer that is unbalanced between the texts cannot reach this level.",
  'Level 4 (9-11 marks): compares the texts on many points and explores how each writer gets their views across, with evidence drawn evenly from both.',
  'Level 5 (12-14 marks): compares the texts in depth and from many angles, analysing how each writer conveys their view, with carefully chosen evidence from both.',
]

const EDEXCEL_P2_MARKS_WRITING = [
  "AO5, content and organisation (24 marks). Level 1 (1-4): some ideas come across, with little sense of audience or purpose. Level 2 (5-9): the writing knows its audience and purpose, in a simple, steady tone, with ideas in order and in paragraphs. Level 3 (10-14): ideas and techniques suit the audience and purpose, the tone fits, and each point builds on the last. Level 4 (15-19): the writing is shaped to affect the reader, with a well-judged tone and register and a structure under control throughout. Level 5 (20-24): the writing steers the reader's response in subtle ways, with a confident voice and complex ideas that hold together.",
  'AO6, vocabulary, sentence structure, spelling and punctuation (16 marks). Level 1 (1-4): simple words, frequent spelling mistakes, shaky punctuation and repetitive sentences. Level 2 (5-7): everyday words spelt correctly, punctuation mostly right and some varied sentences. Level 3 (8-10): a good choice of words, most tricky spellings right, a range of punctuation, and sentences shaped for the purpose. Level 4 (11-13): words chosen with care from a wide range, only the odd slip, and punctuation and sentences used for clarity and purpose. Level 5 (14-16): ambitious, precise vocabulary, errors so rare they never get in the way, and a full range of punctuation and sentence types chosen for effect.',
  'The two objectives are marked separately and the marks are added together.',
]

const EDEXCEL_P2_WRITING_NOTE =
  '(40 marks: 24 for content and organisation, 16 for vocabulary, sentence structure, spelling and punctuation)'

const EDEXCEL_P2_SECTION_A_GUIDANCE =
  'Answer ALL questions in this section. You are advised to spend about 1 hour and 20 minutes on it.\n\nRead Text 1 and answer Questions 1 to 3. Then read Text 2 and answer Questions 4 to 6. Question 7 is about both texts.'

const EDEXCEL_P2_SECTION_B_GUIDANCE =
  'Answer ONE question in this section, either Question 8 or Question 9. You are advised to spend about 45 minutes on it, including time to plan your answer and to check it.'

const EDEXCEL_P2_SET_A_SOURCE_1 = `Every Tuesday at ten o'clock, in a café on the corner of Albion Street, six women push two tables together by the window and order what they have ordered for eleven years: a pot of tea for six and one slice of carrot cake, cut into six pieces. The café's owner no longer asks. When the door opens and the first of them arrives, he simply puts the kettle on.

They call themselves the Tuesday Club, though nobody can remember who first used the name. The oldest is eighty-one; the youngest, a retired nurse, is sixty-four. They met at a bereavement group at the local library, where each had gone after losing a husband, and they began coming to the café afterwards because none of them wanted to go home to an empty house. "We came for an hour," says Maureen, who keeps the group's birthday list in a notebook in her handbag. "That was in 2015. We are still here."

Loneliness is often described as a modern epidemic, and charities warn that it can harm health as much as smoking. Yet what happens around this table looks less like a cure than like a habit, kept up with care. When one of them misses a Tuesday, the others ring that evening. When one of them was in hospital last winter, they took it in turns to visit, and brought the carrot cake with them, wrapped in a napkin. Together they have been to six weddings of grandchildren, two funerals and, one memorable afternoon, a dance class at the leisure centre, which they all agree was a mistake.

Their conversation moves easily between the serious and the silly. In the space of twenty minutes they discuss a friend's diagnosis, the price of bus fares and whether the new vicar is too young to be trusted. They interrupt each other constantly and laugh at things that would mean nothing to a stranger, because the jokes go back years.

When I ask what the group has given them, there is a pause. Then Jean, who has said almost nothing all morning, puts down her cup. "When my husband died, I thought that was the end of being known," she says. "Here, I am known." The others nod. Nobody says anything for a moment, and then somebody asks who wants the last piece of cake, and the conversation moves on.`

// AUDIT NOTE (FC20, 2026-04-28) said these framing labels were fabricated and
// named William Davies as a real writer whose words these were not, but left
// the labels in place. Relabelled 2026-09-27: see the docblock at the top.

const EDEXCEL_P2_SET_A_SOURCE_1_REF =
  'Specially written for this practice paper (not a published text): a feature article about a weekly friendship group in a café'

const EDEXCEL_P2_SET_A_SOURCE_2 = `It took me five years to understand that my mother had been leaving me all along. Not physically - she was present in the kitchen, in the garden, driving me to school. But something essential had withdrawn. I could feel it in the way she looked at me: with affection, certainly, but also with a kind of distance, as though she was watching me from the other side of glass.

Later, I learned about the depression, the medication, the appointments with the therapist whose name I never knew. My father spoke about it in quiet conversations with his sister, conversations that ended abruptly when I entered the room. For years, I interpreted her distance as rejection. It took becoming an adult myself to understand that her withdrawal was not a comment on me, but a symptom of her own struggle with consciousness itself.

When she finally spoke about it - this was after I had moved away, after I had my own problems to contend with - she apologised. "I was not present for you," she said. "I was somewhere else."

I told her what I had come to believe: that her honesty about her absence was a kind of presence. That her refusal to pretend was a gift. That I would rather have a mother who was honestly struggling than one who performed a false competence.`

const EDEXCEL_P2_SET_A_SOURCE_2_REF = 'Memoir-style piece specially written for this practice paper'

const EDEXCEL_P2_SET_B_SOURCE_1 = `The library closed on a Tuesday in November. The notice had been posted three months earlier, but the reality of closure came as a shock nonetheless. Mrs Chen, who had worked there for twenty-three years, arrived on the Tuesday to find the doors locked, the books already packed into boxes. She had not said goodbye to the regular patrons. There had been no ceremony, no acknowledgment of the thousands of hours she had spent helping people find stories.

The building itself was not grand - a Victorian red-brick structure that had been adapted and modified countless times. Its roof leaked. The heating system was temperamental. The computers were old. In the calculus of local government budgets, its closure made sense. It was inefficient. Its footfall did not justify its cost. In purely economic terms, keeping it open was indefensible.

But the closure eliminated a crucial gathering point for the elderly, the unemployed, the lonely. It removed a space where children could experience books before they could afford to buy them. It severed a connection for people whose lives had few connections remaining.`

const EDEXCEL_P2_SET_B_SOURCE_1_REF = 'Local news feature specially written for this practice paper'

const EDEXCEL_P2_SET_B_SOURCE_2 = `I was born in 1947 in a village where electricity was still a novelty. My childhood was lived by lamplight and candle, by the rhythms of agriculture and season. We did not have a telephone. News arrived by post or by word of mouth. The wider world was something that happened somewhere else, to other people.

Then I went to grammar school, and the world rushed in. Suddenly I was encountering ideas, books, people from different backgrounds. I felt, for the first time, a hunger - a hunger for knowledge, for understanding, for connection with the world beyond my village. That hunger has never left me.

Now, living in an age of unlimited information, of instant communication, of constant connectivity, I observe something curious: I do not see this hunger in young people. They have access to everything, and yet they seem satisfied with nothing, endlessly scrolling, endlessly consuming, but never quite sated. Perhaps it is the nature of unlimited access to diminish appetite.`

const EDEXCEL_P2_SET_C_SOURCE_1 = `Somewhere on my phone are eleven thousand messages from my best friend. We have sent each other jokes, photographs, voice notes at two in the morning and, on one bad night, a long conversation that got me through it. I could not tell you where most of them are. I am not sure that, if I lost my phone tomorrow, I could get any of them back.

We are the most connected generation in history, and perhaps the one that will leave the least behind. Our grandparents wrote letters, and kept them, tied with ribbon in shoeboxes and biscuit tins. A single letter could take days to cross a country and weeks to cross an ocean, so people chose their words with care. They wrote about the weather, the neighbours and the price of bread, and in between, almost by accident, they wrote down their lives.

We write far more than they ever did, but we write it on the move, in fragments, and we let it vanish. Messages disappear when an account is closed. Photographs live on servers owned by companies that may not exist in twenty years. Apps are designed to make us reply quickly, not to make us remember. A whole friendship can now be conducted in words that nobody, not even the people who wrote them, will ever read again.

I am not suggesting that we abandon our phones and buy writing paper, though there are worse ideas. The speed of modern messaging is a gift. It means that nobody has to wait three weeks to hear that a baby has been born or that a parent is ill. But speed and permanence are not the same thing, and we have quietly given up one for the other without noticing.

So here is a modest proposal. Once a year, choose the messages that matter: the ones that made you laugh until you cried, the ones that got you through. Save them somewhere safe. Print a few. Better still, once in a while, write something by hand and post it to someone you love. It will take longer. That is rather the point.

In fifty years, someone may want to know who we were. It would be a shame if the only answer was a forgotten password.`

const EDEXCEL_P2_SET_C_SOURCE_1_REF =
  'Specially written for this practice paper (not a published text): an opinion article about digital messages and what they leave behind'

const EDEXCEL_P2_SET_C_SOURCE_2 = `I understand now why my grandmother kept the letters. For fifty years, she maintained a box beneath her bed containing correspondence with her sister, who emigrated to Australia in 1952. They wrote monthly, sometimes more frequently during periods of crisis or celebration. The letters were neither literary nor formally beautiful. They were accounts: of weather, of children\'s achievements, of small grievances and larger joys.

When my grandmother died, I was asked to sort through her papers. I found the letters - hundreds of them - arranged chronologically, each envelope carefully preserved, the stamps from different eras cataloguing decades of postal history. I could have recycled them. They held no market value, no particular artistic merit.

Instead, I began to read. And as I read, I encountered something I had not anticipated: the lived texture of a relationship that spanned the entire second half of the twentieth century. The letters revealed a sister bond that persisted across continents, that survived separations and deaths and changing circumstances. They were not great literature, but they were testimony to the ordinary extraordinary labour of maintaining love across distance and time.`

const EDEXCEL_P2_SET_C_SOURCE_2_REF = 'Memoir-style piece specially written for this practice paper'
const EDEXCEL_P2_SET_B_SOURCE_2_REF = 'Personal essay specially written for this practice paper'

// ═══════════════════════════════════════════════════════════════════════════
// EDEXCEL PAPER 1: FICTION AND IMAGINATIVE WRITING (1EN0/01)
// ═══════════════════════════════════════════════════════════════════════════

export const edexcelMockExams: MockExamPaper[] = [
  {
    id: 'edexcel-lang-p1-set-a',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Set A',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-a-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Mr Utterson, a London lawyer, is being taken across London at night by Poole, the butler of his old friend Dr Jekyll. Poole has come to Utterson's house in a state of terror, saying that something is wrong with his master, who has stayed locked in his private room for days.\n\nWords you may need: wrack is broken cloud driven by the wind; diaphanous and lawny mean thin and see-through, like fine cloth; calamity means disaster; the knife-boy is the servant who cleans the knives; the surgical theatre is a lecture room once used to teach surgery, now a storeroom; red baize is a heavy cloth covering a door; the cabinet is Dr Jekyll's private room above his laboratory.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-a-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows what the weather is like.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"a wild, cold, seasonable night of March"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "a wild, cold, seasonable night"; "wild"; "cold"; "as though the wind had tilted her"; "flying wrack".',
            ],
          },
          {
            id: 'edexcel-p1-a-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nThe hall, when they entered it, was brightly lighted up; the fire was built high; and about the hearth the whole of the servants, men and women, stood huddled together like a flock of sheep. At the sight of Mr. Utterson, the housemaid broke into hysterical whimpering; and the cook, crying out “Bless God! it’s Mr. Utterson,” ran forward as if to take him in her arms.\n\n“What, what? Are you all here?” said the lawyer peevishly. “Very irregular, very unseemly; your master would be far from pleased.”\n\n“They’re all afraid,” said Poole.\n\nBlank silence followed, no one protesting; only the maid lifted her voice and now wept loudly.\n\nGive two ways in which this part of the extract shows that the servants are frightened. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. They "stood huddled together like a flock of sheep" round the fire.\n2. The housemaid "broke into hysterical whimpering" when she saw Utterson.',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: they "stood huddled together like a flock of sheep"; the housemaid "broke into hysterical whimpering"; the cook runs to Utterson "as if to take him in her arms"; Poole says "They’re all afraid"; the maid "wept loudly"; the hall is "brightly lighted up" and the fire "built high", as if to keep the dark away.',
            ],
          },
          {
            id: 'edexcel-p1-a-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from the paragraph in which Poole says "you come as gently as you can" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to build tension as Poole and Utterson go to the cabinet door?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer builds tension first through Poole\'s instructions. "Now, sir," he says, "you come as gently as you can. I want you to hear, and I don\'t want you to be heard." The balanced sentence makes secrecy sound essential, and the warning that follows, "if by any chance he was to ask you in, don\'t go", is chilling, because it suggests that whoever is behind the door is dangerous. Utterson\'s reaction is physical: his nerves "gave a jerk that nearly threw him from his balance", and he has to recollect "his courage".\n\nThe structure then takes the reader step by step towards the unknown. The men pass through "the laboratory building", "the surgical theatre, with its lumber of crates and bottles", and reach "the foot of the stair", each place closer to the cabinet. Poole\'s fear increases the tension: he makes "a great and obvious call on his resolution" before he climbs, and he knocks "with a somewhat uncertain hand". If the butler, who knows the house, is so afraid, the reader is afraid too.\n\nThe climax is a single line from a speaker we never see: "Tell him I cannot see anyone," it said complainingly. The writer gives us only "A voice", never a face, and the adverb "complainingly" makes it sound strangely childish, nothing like the master Poole has served for years. The writer then pulls the men back to the kitchen, "where the fire was out and the beetles were leaping on the floor", a cold, neglected room that reflects the decay of the household. Poole\'s direct question, "Was that my master\'s voice?", turns tension into dread, and Utterson\'s reply, "It seems much changed", is short and understated. He is "very pale, but giving look for look", which shows that he is frightened but refuses to admit it, and the reader is left with the unanswered question of who is in the cabinet.',
            },
            markScheme: {
              'How it is marked (6 marks)': [
                'Level 1 (1 to 2 marks): a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or on structure only, or one that is unbalanced between them, cannot go above this level.',
                'Level 2 (3 to 4 marks): explains how both the language and the structure create effects, with well-matched quotations.',
                'Level 3 (5 to 6 marks): analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
              ],
              'Language: points you might make': [
                'Poole\'s balanced instructions, "I want you to hear, and I don’t want you to be heard", and his warning, "if by any chance he was to ask you in, don’t go", suggest danger behind the door.',
                'Utterson\'s nerves "gave a jerk that nearly threw him from his balance", and he has to recollect "his courage".',
                'Poole makes "a great and obvious call on his resolution" and knocks "with a somewhat uncertain hand", so even he is afraid.',
                'The voice answers "complainingly", which is strange and unsettling.',
                'The kitchen, "where the fire was out and the beetles were leaping on the floor", is cold and neglected.',
              ],
              'Structure: points you might make': [
                'The two men move step by step, through the laboratory and the surgical theatre "to the foot of the stair", towards the unknown.',
                'The climax is a single line from a voice whose speaker is never seen.',
                'They then retreat to the kitchen, where Poole\'s blunt question, "Was that my master’s voice?", turns the tension into dread.',
                'The part ends on a short, understated reply, "It seems much changed", which leaves the question open.',
              ],
            },
          },
          {
            id: 'edexcel-p1-a-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create an atmosphere of fear and dread.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_A_EXTRACT,
            extractSource: EDEXCEL_P1_SET_A_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is very successful in creating fear and dread, because he builds them gradually, from the weather to the household and finally to a single voice behind a door. The extract begins with "a wild, cold, seasonable night of March, with a pale moon, lying on her back as though the wind had tilted her". The personification of the moon, knocked over by the wind, suggests a world that is off balance, and "flying wrack" adds a sense of restless movement. The wind "flecked the blood into the face", so that even the weather seems to attack the two men.\n\nThe empty streets increase Utterson\'s unease. He "thought he had never seen that part of London so deserted", and he feels "so sharp a wish to see and touch his fellow-creatures". This shows his loneliness and fear, and the phrase "a crushing anticipation of calamity" tells the reader that something terrible is expected, without saying what. The trees in the square are "lashing themselves along the railing", as though they were in pain. Poole, too, shows that this is no ordinary errand: he mops his brow, but "these were not the dews of exertion that he wiped away, but the moisture of some strangling anguish". The word "strangling" suggests a fear so strong that it chokes him.\n\nThe arrival at the house is especially effective. Poole\'s prayer, "God grant there be nothing wrong", and Utterson\'s "Amen" show both men expecting the worst. The door is "opened on the chain", and a voice asks "Is that you, Poole?", which reveals that the servants are afraid to let anyone in. Inside, they stand "huddled together like a flock of sheep", a simile that makes them seem helpless, and the housemaid\'s "hysterical whimpering" and loud weeping spread the panic. When she cries out, they all turn "towards the inner door with faces of dreadful expectation", so the reader\'s attention is fixed on that door too.\n\nSome readers may feel that Utterson\'s peevish complaint, "Very irregular, very unseemly; your master would be far from pleased", lightens the mood, since it makes him sound fussy. However, I think it increases the dread, because it shows a respectable man clinging to good manners in a situation where manners no longer matter. Poole\'s blunt answer, "They\'re all afraid", cuts through his complaint and makes the fear official.\n\nThe final part brings the dread to its height. Poole\'s warning, "if by any chance he was to ask you in, don\'t go", is terrifying in its simplicity. The voice from behind the door is never given a face, and the word "complainingly" makes it unsettling rather than threatening, which is somehow worse. The extract ends in the cold kitchen, with Poole\'s question, "Was that my master\'s voice?", and Utterson\'s pale reply, "It seems much changed". Nothing has been seen, and nothing explained, yet the reader is convinced that something dreadful has happened to Dr Jekyll. Overall the writer creates fear and dread with great skill, through atmosphere, the reactions of frightened people and the power of what is left unsaid.',
            },
            markScheme: {
              'How it is marked (15 marks)': [
                'Level 1 (1 to 3 marks): mostly describes what happens. Opinions are given without reasons, and there are few quotations.',
                'Level 2 (4 to 6 marks): comments on what happens and offers simple opinions, backed by quotations that fit but are not explored.',
                'Level 3 (7 to 9 marks): explains how the writing creates the effect and gives a reasoned view of how well it works, with suitable quotations.',
                'Level 4 (10 to 12 marks): analyses the extract and builds a well-argued judgement, with detailed quotations backing up every point.',
                'Level 5 (13 to 15 marks): evaluates the extract as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
                "From Level 2 up, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
              ],
              'Points you might make': [
                'The night is unsettling: "a pale moon, lying on her back as though the wind had tilted her", as if the world were off balance.',
                'The empty streets and Utterson\'s "crushing anticipation of calamity" show dread before anything has happened.',
                'Violent details, the trees "lashing themselves along the railing" and Poole\'s "strangling anguish", add to it.',
                'The guarded household, with the door "opened on the chain" and the servants "huddled together like a flock of sheep", shows that fear has taken over.',
                'Faces "of dreadful expectation" turn to "the inner door", and Poole\'s warning, "don’t go", points to danger.',
                'The unseen voice and the question "Was that my master’s voice?" end it. Some may find Utterson\'s peevish "Very irregular, very unseemly" lightens the mood; others that his clinging to good manners deepens the dread.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-a-writing',
        title: 'Section B: Imaginative Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. You should spend about 45 minutes on it, including about 5 minutes planning and 5 minutes checking your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-a-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, had to find courage. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a tall London house at night, with a single lit window high up. Picture 2: a group of frightened people huddled round a fire in a large, dim hall.\n\nWrite a story with the title "The Locked Room". Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe door at the end of my grandmother\'s landing had been locked for as long as I could remember.\n\nIt was an ordinary door, painted the same cream as all the others, with a brass handle that had gone dull with age. But it was the only door in the house that I had never seen open. When I was little, I used to press my ear to it and listen. I never heard anything. That was almost worse.\n\n"What\'s in there?" I asked Gran once, when I was about six.\n\nShe was ironing at the time, and she did not look up. "Nothing that concerns you," she said, and the iron hissed as she pressed it down, and that was the end of the conversation.\n\nSo the room grew in my imagination, the way locked rooms do. Sometimes it held treasure. Sometimes it held a body. My cousin Dev, who was two years older and knew everything, told me it was where Gran kept the ghost of Grandad, who had died before I was born. After that I ran past it at night with my eyes shut.\n\nI was thirteen when Gran went into hospital with her hip, and Mum and I went to stay at her house to look after the cat. On the second evening, Mum sent me upstairs to find a spare blanket, and as I passed the door at the end of the landing, I saw something I had never seen before.\n\nThere was a key in the lock.\n\nI stood very still. The house was quiet except for the tick of the hall clock downstairs and the rain on the skylight. I knew that I should walk past. I knew exactly what Gran would say. But my hand was already reaching out, as though it belonged to someone else, and the key turned with a small, stiff click.\n\nThe door swung inwards.\n\nThe room smelt of dust, and turpentine, and something else, something sweet and old, like the inside of a book. In the grey light from the window I could make out shapes: a table, a chair, a tall wooden easel with a sheet thrown over it. And all around the walls, stacked in rows, leaning against each other, were canvases. Dozens of them. Perhaps a hundred.\n\nI found the light switch. And I gasped.\n\nThey were paintings. Paintings of the sea, of the harbour, of fishing boats with red sails. Paintings of a young woman with dark hair, laughing, reading, asleep in a deckchair. I knew her face, although I had only ever seen it old. It was Gran.\n\nIn the corner of each canvas, in small, neat letters, was a name: R. Malhotra. My grandfather.\n\nI do not know how long I stood there. Long enough for Mum to come looking for me. She stopped in the doorway, and for a moment I thought she would be angry. But she only put her hand over her mouth, and then she came and stood beside me, and we looked at the paintings together without saying a word.\n\nWhen Gran came home, we did not hide what we had done. I thought that she might cry, or shout. Instead she sat down slowly in the old chair by the easel, and touched the corner of a canvas very gently, the way you might touch a sleeping child.\n\n"I could not bear to look at them," she said. "And I could not bear to give them away."\n\nThe room is not locked any more. Grandad\'s paintings hang in every room of the house now, and the one of Gran asleep in the deckchair hangs above my bed.',
            },
            markScheme: {
              'How it is marked (40 marks)': [
                'AO5, 24 marks, for content and organisation, on five levels: 1 to 4, some ideas but little sense of purpose or reader; 5 to 9, a clear purpose and a steady tone, with ideas in order and in paragraphs; 10 to 14, ideas and techniques chosen to suit the task, each building on the last; 15 to 19, shaped deliberately to affect the reader, with tone, style and structure under control; 20 to 24, a confident voice that steers the reader in subtle ways, with the whole piece holding together.',
                'AO6, 16 marks, for vocabulary, sentence structure, spelling and punctuation, on five levels: 1 to 4, simple words and frequent errors; 5 to 7, everyday words spelt correctly, punctuation mostly right, sentences beginning to vary; 8 to 10, good word choice, a mix of punctuation used correctly, sentences shaped for the purpose; 11 to 13, words chosen with care, only the odd slip, punctuation placed to make meaning clear; 14 to 16, ambitious vocabulary used with purpose, errors so rare they never get in the way, a full range of sentences each chosen for its effect.',
                'The two marks are added together. Answer one of the two tasks only.',
              ],
              'What earns marks': [
                'A clear purpose, and a voice that suits the task and the reader.',
                'A planned shape: an opening that draws the reader in, development, and a deliberate ending.',
                'Paragraphs and links that carry the reader through, and choices such as detail, dialogue or a shift in time made for effect.',
                'Varied, precise vocabulary and a range of sentence structures chosen for effect.',
                'Accurate spelling and punctuation, including commas, apostrophes and the punctuation of speech.',
              ],
              'Ideas for these tasks': [
                'Question 5 could be about facing a fear, standing up for someone, or doing something difficult for the first time.',
                'Question 6 could use the house at night, the frightened group, or neither picture, and the locked room could hold a secret, a danger or a surprise.',
                "Like the extract, a strong piece might build dread through setting and people's reactions, and hold back what lies behind the door.",
              ],
            },
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 1: SET B
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-set-b',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Set B',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-b-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, Dr Watson, the narrator, and the detective Sherlock Holmes have come at night with Miss Mary Morstan to Pondicherry Lodge, a large house on the edge of London. They are with Thaddeus Sholto, who has brought them to see his brother, Bartholomew. Bartholomew has just found a treasure that their late father hid in the house, and part of it is owed to Miss Morstan.\n\nWords you may need: prosaic means plain and ordinary; a garret is a room at the top of a house; reiterated means repeated; cumbered means cluttered; Ballarat is a gold-mining town in Australia, where prospectors dig for gold; Astrakhan is a curly fur used for coat collars.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-b-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows that the house is dark.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"all plunged in shadow"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "all plunged in shadow"; "plunged in shadow"; "shadow".',
            ],
          },
          {
            id: 'edexcel-p1-b-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nHe held up the lantern, and his hand shook until the circles of light flickered and wavered all round us. Miss Morstan seized my wrist, and we all stood with thumping hearts, straining our ears. From the great black house there sounded through the silent night the saddest and most pitiful of sounds,—the shrill, broken whimpering of a frightened woman.\n\n“It is Mrs. Bernstone,” said Sholto. “She is the only woman in the house. Wait here. I shall be back in a moment.” He hurried for the door, and knocked in his peculiar way. We could see a tall old woman admit him, and sway with pleasure at the very sight of him.\n\nGive two ways in which this part of the extract shows that the group is frightened. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. Sholto\'s "hand shook until the circles of light flickered and wavered".\n2. They "all stood with thumping hearts, straining our ears".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: Sholto\'s "hand shook", so that the light "flickered and wavered"; Miss Morstan "seized my wrist"; they "stood with thumping hearts, straining our ears".',
            ],
          },
          {
            id: 'edexcel-p1-b-q3',
            questionNumber: 3,
            questionText:
              "Read again this part of the extract.\n\nOur guide had left us the lantern. Holmes swung it slowly round, and peered keenly at the house, and at the great rubbish-heaps which cumbered the grounds. Miss Morstan and I stood together, and her hand was in mine. A wondrous subtle thing is love, for here were we two who had never seen each other before that day, between whom no word or even look of affection had ever passed, and yet now in an hour of trouble our hands instinctively sought for each other. I have marvelled at it since, but at the time it seemed the most natural thing that I should go out to her so, and, as she has often told me, there was in her also the instinct to turn to me for comfort and protection. So we stood hand in hand, like two children, and there was peace in our hearts for all the dark things that surrounded us.\n\nIn this part of the extract, how does the writer use language and structure to show Watson's feelings for Miss Morstan?\n\nRefer closely to the text to support your views.",
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer begins this paragraph with Holmes at work, swinging the lantern and peering "keenly" at the house, and then turns quietly to Watson and Miss Morstan. The shift is marked by a simple statement: "Miss Morstan and I stood together, and her hand was in mine." The plain words make the moment tender, as if nothing more needs to be said.\n\nWatson then steps back to reflect, and the language rises. The inverted sentence "A wondrous subtle thing is love" puts the description before the subject, an unusual word order that makes it sound like a declaration. He contrasts their short acquaintance, "two who had never seen each other before that day, between whom no word or even look of affection had ever passed", with what their bodies did: "our hands instinctively sought for each other". The adverb "instinctively" presents love as something natural and sudden, which happens before either of them has decided anything.\n\nThe structure of the reflection hints at the future. "I have marvelled at it since" and "as she has often told me" show that Watson is looking back from a time when they are still together, so the reader senses that this moment begins a lasting relationship. The word "also" in "there was in her also the instinct to turn to me for comfort and protection" shows that the feeling is shared, not just Watson\'s.\n\nThe paragraph ends with a simile and a contrast: "So we stood hand in hand, like two children, and there was peace in our hearts for all the dark things that surrounded us." The comparison with children suggests innocence and trust, while "peace in our hearts" is set against "all the dark things", so their love becomes a small light in the threatening night. Coming in the middle of a tense scene, this calm paragraph makes the reader care about them, which makes the fear that follows stronger.',
            },
            markScheme: {
              'How it is marked (6 marks)': [
                'Level 1 (1 to 2 marks): a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or on structure only, or one that is unbalanced between them, cannot go above this level.',
                'Level 2 (3 to 4 marks): explains how both the language and the structure create effects, with well-matched quotations.',
                'Level 3 (5 to 6 marks): analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
              ],
              'Language: points you might make': [
                'The plain statement "her hand was in mine" is tender and simple.',
                'The inverted sentence "A wondrous subtle thing is love" lifts the tone and shows his wonder.',
                'The contrast between "never seen each other before that day" and hands that "instinctively sought for each other" presents love as natural and sudden.',
                '"there was in her also the instinct to turn to me for comfort and protection" shows that the feeling is shared.',
                'The simile "like two children" suggests innocence, and "peace in our hearts" is set against "all the dark things that surrounded us".',
              ],
              'Structure: points you might make': [
                "The paragraph opens with Holmes at work, then turns to Watson's feelings, a pause in the tension.",
                'Looking back, "I have marvelled at it since" and "as she has often told me", hints at a future together.',
                'It ends on a contrast between peace and darkness before the strange place returns.',
              ],
            },
          },
          {
            id: 'edexcel-p1-b-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to create an atmosphere of mystery and unease.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_B_EXTRACT,
            extractSource: EDEXCEL_P1_SET_B_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer creates mystery and unease very successfully, mainly through the setting and through sound. The house is described as "a huge clump of a house, square and prosaic, all plunged in shadow save where a moonbeam struck one corner and glimmered in a garret window". The word "clump" makes it shapeless and heavy, and the single moonbeam only emphasises the darkness everywhere else. "The vast size of the building, with its gloom and its deathly silence, struck a chill to the heart." The adjective "deathly" prepares the reader for something terrible, and even Thaddeus Sholto "seemed ill at ease", with his lantern quivering and rattling in his hand.\n\nThe mystery deepens through small details that do not fit. Bartholomew was told that they were coming, "and yet there is no light in his window". Sholto says, "I do not know what to make of it", and his confusion becomes the reader\'s. Holmes, who notices everything, spots "the glint of a light in that little window beside the door", so the reader is made to look closely at the house as if searching for clues.\n\nThe most effective moment is the sudden sound. Sholto breaks off his own speech with "But hush! what is that?", and the writer makes us wait: the lantern shakes, Miss Morstan "seized my wrist", and they stand "with thumping hearts, straining our ears". Then, "From the great black house there sounded through the silent night the saddest and most pitiful of sounds,—the shrill, broken whimpering of a frightened woman." The long sentence delays the sound until its end, and the adjectives "shrill" and "broken" make it disturbing. The housekeeper\'s joy when she sees Sholto, repeated "I am so glad you have come!", is almost more unsettling, because it suggests she has been waiting in terror.\n\nThe writer then pauses the tension with Watson\'s reflection on love, and with his light remark that the grounds look "as though all the moles in England had been let loose in it". Some readers may feel that these lighter moments break the atmosphere. However, I think they are part of the writer\'s skill. The love paragraph gives the reader a moment of "peace in our hearts", and Holmes\'s explanation that the holes are "the traces of the treasure-seekers" adds a strange history of greed to the house. The calm makes the ending more shocking.\n\nAt the climax "the door of the house burst open, and Thaddeus Sholto came running out, with his hands thrown forward and terror in his eyes". His cry, "There is something amiss with Bartholomew!", is all the more frightening because it is vague. He is "half blubbering with fear", and his face has "the helpless appealing expression of a terrified child". The extract stops there, so the reader is left, like the characters, standing outside the dark house and wondering what is wrong. Overall the writer creates a powerful sense of mystery and unease, using silence, sound and a sudden reversal of calm.',
            },
            markScheme: {
              'How it is marked (15 marks)': [
                'Level 1 (1 to 3 marks): mostly describes what happens. Opinions are given without reasons, and there are few quotations.',
                'Level 2 (4 to 6 marks): comments on what happens and offers simple opinions, backed by quotations that fit but are not explored.',
                'Level 3 (7 to 9 marks): explains how the writing creates the effect and gives a reasoned view of how well it works, with suitable quotations.',
                'Level 4 (10 to 12 marks): analyses the extract and builds a well-argued judgement, with detailed quotations backing up every point.',
                'Level 5 (13 to 15 marks): evaluates the extract as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
                "From Level 2 up, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
              ],
              'Points you might make': [
                'The house is "a huge clump of a house", "all plunged in shadow", and its "deathly silence, struck a chill to the heart".',
                'Even Sholto\'s lantern "quivered and rattled", and the missing light in Bartholomew\'s window is unexplained: "I do not know what to make of it."',
                'The interrupted "But hush! what is that?" and "the shrill, broken whimpering of a frightened woman" bring sound into the silence.',
                'The paragraph of love is a pause that makes the ending more shocking.',
                'The dug-up grounds ("as though all the moles in England had been let loose in it"), which Holmes explains as "the traces of the treasure-seekers", hint at the greed behind the mystery.',
                'Sholto bursting out "with his hands thrown forward and terror in his eyes" ends it on a cliffhanger. Some may find the love scene and the light remark about moles break the tension; others that the false calm makes the ending more frightening.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-b-writing',
        title: 'Section B: Imaginative Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. You should spend about 45 minutes on it, including about 5 minutes planning and 5 minutes checking your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-b-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, arrived somewhere strange at night. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a huge dark house behind a high wall, with one window lit by moonlight. Picture 2: two people holding hands tightly as they look up at something out of the picture.\n\nWrite about a time when you, or someone you know, found comfort in another person. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe coach turned off the main road at a quarter to ten, and the headlights swept across a sign that said BRACKEN HALL OUTDOOR CENTRE, and then across nothing at all.\n\nWe had been travelling since three o\'clock. For most of the journey the coach had been a riot of noise: crisp packets, arguments about music, someone at the back singing the same line of the same song over and over. But as the road narrowed and the trees closed in on either side, the noise drained away. By the time we bumped up the long drive, the only sound was the engine and the scrape of branches along the windows, like fingers.\n\nBracken Hall stood at the top of the drive. It was huge and black against a sky that was only slightly less black, with chimneys sticking up like broken teeth. Every window was dark except one, high up under the roof, where a weak yellow light glowed and then went out as we watched.\n\n"Brilliant," said Kai, beside me. "We\'re going to be murdered."\n\nNobody laughed.\n\nInside, it was worse. The hallway was enormous and cold, with a stone floor that made every footstep echo. A stuffed stag\'s head stared down at us from above the fireplace, its glass eyes catching the light. Somewhere in the depths of the building a pipe was knocking, slowly and steadily, like someone patient trying to get in. Mr Price, who had been cheerful for two hundred miles, was suddenly very busy with his clipboard.\n\nThey put six of us in a dormitory at the top of the house, with bunk beds made of dark wood and a window that rattled in its frame. I had the top bunk by the window. When the lights went out, the darkness was so complete that I could not see my own hand, and the silence was full of small sounds: the wind fingering the glass, the creak of the old building settling, a soft scratching inside the wall that I told myself very firmly was a mouse.\n\nI lay awake for a long time. I was thinking about home, about my own bed and the orange glow of the street light through my curtains, and the familiar hum of the fridge downstairs. I felt very small and very far away.\n\nThen, from the bunk below, a voice whispered, "Are you awake?"\n\nIt was Ellie Okoro. We had been in the same class for three years and had probably spoken about ten words to each other in all that time.\n\n"Yes," I whispered back.\n\n"I can\'t sleep. I keep hearing things."\n\n"The scratching?"\n\n"The scratching," she agreed, and somehow the fact that she had heard it too made it less frightening.\n\nWe talked for an hour, in whispers, with the wind rattling the window. We talked about our families, and the worst teacher we had ever had, and what we wanted to be. It turned out that she was terrified of horses, and that she had a little brother who collected snails, and that she had brought a torch shaped like a frog. At some point she reached up through the gap between the bunk and the wall, and I reached down, and we held hands in the dark like small children, and neither of us mentioned it.\n\nIn the morning, the sun came up over the hills and poured through the rattling window, and Bracken Hall turned out to be an ordinary old house with a lot of draughts. The scratching really was a mouse. And Ellie and I have been best friends ever since.',
            },
            markScheme: {
              'How it is marked (40 marks)': [
                'AO5, 24 marks, for content and organisation, on five levels: 1 to 4, some ideas but little sense of purpose or reader; 5 to 9, a clear purpose and a steady tone, with ideas in order and in paragraphs; 10 to 14, ideas and techniques chosen to suit the task, each building on the last; 15 to 19, shaped deliberately to affect the reader, with tone, style and structure under control; 20 to 24, a confident voice that steers the reader in subtle ways, with the whole piece holding together.',
                'AO6, 16 marks, for vocabulary, sentence structure, spelling and punctuation, on five levels: 1 to 4, simple words and frequent errors; 5 to 7, everyday words spelt correctly, punctuation mostly right, sentences beginning to vary; 8 to 10, good word choice, a mix of punctuation used correctly, sentences shaped for the purpose; 11 to 13, words chosen with care, only the odd slip, punctuation placed to make meaning clear; 14 to 16, ambitious vocabulary used with purpose, errors so rare they never get in the way, a full range of sentences each chosen for its effect.',
                'The two marks are added together. Answer one of the two tasks only.',
              ],
              'What earns marks': [
                'A clear purpose, and a voice that suits the task and the reader.',
                'A planned shape: an opening that draws the reader in, development, and a deliberate ending.',
                'Paragraphs and links that carry the reader through, and choices such as detail, dialogue or a shift in time made for effect.',
                'Varied, precise vocabulary and a range of sentence structures chosen for effect.',
                'Accurate spelling and punctuation, including commas, apostrophes and the punctuation of speech.',
              ],
              'Ideas for these tasks': [
                "Question 5 could be about a late arrival at a new home, a hotel, a campsite, a relative's house or a residential trip.",
                'Question 6 could use the dark house, the two people holding hands, or neither picture.',
                'Like the extract, a strong piece might set a moment of comfort against a threatening background, and use sound as well as sight.',
              ],
            },
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 1: SET C
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1-set-c',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01 - Set C',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-c-reading',
        title: 'Section A: Reading',
        description:
          "Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nSilas Marner is a weaver who lives alone in a cottage outside the village of Raveloe. For fifteen years he has worked at his loom and saved his earnings in gold, which he keeps in a hole under the floor and counts every night. While he was out on a short errand this evening, Dunstan Cass, the squire's wild second son, came into the empty cottage. In this extract, Silas comes home.\n\nWords you may need: meagre means thin; to beget is to produce; wrought means worked, or shaped; unwonted means unusual; guineas are gold coins; prostration means collapse; dissipated means driven away.",
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-c-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first sentence of the extract.\n\nGive one word or phrase from it which shows how Silas feels as he arrives home.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"in much satisfaction that his errand was done"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "in much satisfaction"; "much satisfaction"; "satisfaction".',
            ],
          },
          {
            id: 'edexcel-p1-c-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nAny one who had looked at him as the red light shone upon his pale face, strange straining eyes, and meagre form, would perhaps have understood the mixture of contemptuous pity, dread, and suspicion with which he was regarded by his neighbours in Raveloe. Yet few men could be more harmless than poor Marner. In his truthful simple soul, not even the growing greed and worship of gold could beget any vice directly injurious to others. The light of his faith quite put out, and his affections made desolate, he had clung with all the force of his nature to his work and his money; and like all objects to which a man devotes himself, they had fashioned him into correspondence with themselves. His loom, as he wrought in it without ceasing, had in its turn wrought on him, and confirmed more and more the monotonous craving for its monotonous response. His gold, as he hung over it and saw it grow, gathered his power of loving together into a hard isolation like its own.\n\nGive two things you learn about Silas from this part of the extract. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. His neighbours regard him with "contemptuous pity, dread, and suspicion".\n2. He has "clung with all the force of his nature to his work and his money".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: he has a "pale face, strange straining eyes, and meagre form"; his neighbours regard him with "contemptuous pity, dread, and suspicion"; he is harmless: "few men could be more harmless than poor Marner"; he has lost his faith: "The light of his faith quite put out"; he has "clung with all the force of his nature to his work and his money"; his gold has cut him off from others, in "a hard isolation like its own".',
            ],
          },
          {
            id: 'edexcel-p1-c-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "He rose and placed his candle" to "shelter from the terrible truth".\n\nIn this part of the extract, how does the writer use language and structure to show Silas\'s feelings as he discovers that his gold has gone?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer begins with calm, ordinary actions: Silas "placed his candle unsuspectingly on the floor near his loom, swept away the sand without noticing any change, and removed the bricks". The adverb "unsuspectingly" makes the reader dread what he is about to find, because we know more than he does. Then the shock arrives in one sentence: "The sight of the empty hole made his heart leap violently". The writer explains that "the belief that his gold was gone could not come at once—only terror, and the eager effort to put an end to the terror", and the repetition of "terror" shows how it fills his mind.\n\nHis fear is shown through his body, and it grows in stages. First "his trembling hand" passes round the hole; then he is "trembling more and more"; at last "he shook so violently that he let fall the candle". This build-up makes the reader feel his panic rising. The question "Had he put his gold somewhere else, by a sudden resolution last night, and then forgotten it?" takes us inside his head and shows how desperately he wants another explanation.\n\nThe writer then steps back with a striking image: "A man falling into dark waters seeks a momentary footing even on sliding stones". This comparison with a drowning man shows that his false hopes are as unsafe as slippery stones, but he clings to them anyway. The search becomes frantic, as the list "he turned his bed over, and shook it, and kneaded it" shows, with each "and" adding another desperate action.\n\nThe structure of the search is circular. It spreads out round the room, to the bed and the oven, and then comes back to where it began: "he kneeled down again and felt once more all round the hole". This return shows that there is nowhere left to look. The part ends with a sentence of terrible finality, "There was no untried refuge left for a moment\'s shelter from the terrible truth", and the words "refuge" and "shelter" make the truth sound like a storm that he can no longer hide from.',
            },
            markScheme: {
              'How it is marked (6 marks)': [
                'Level 1 (1 to 2 marks): a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or on structure only, or one that is unbalanced between them, cannot go above this level.',
                'Level 2 (3 to 4 marks): explains how both the language and the structure create effects, with well-matched quotations.',
                'Level 3 (5 to 6 marks): analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
              ],
              'Language: points you might make': [
                'The adverb "unsuspectingly" makes the reader dread what he is about to find.',
                '"The sight of the empty hole made his heart leap violently", and the repetition in "only terror, and the eager effort to put an end to the terror" shows panic.',
                'His trembling grows ("trembling more and more", "he shook so violently that he let fall the candle"), so the fear is shown through his body.',
                'The question "Had he put his gold somewhere else ...?" takes us into his desperate hope.',
                'The image "A man falling into dark waters seeks a momentary footing even on sliding stones" shows him clinging to false hopes.',
                'The list "he turned his bed over, and shook it, and kneaded it" makes the search frantic.',
              ],
              'Structure: points you might make': [
                'Calm, ordinary actions open the part ("placed his candle", "swept away the sand", "removed the bricks") before the shock.',
                'The reaction builds in stages, from trembling to shaking to dropping the candle.',
                'The search spreads round the room and then returns to the hole, a circle that shows there is nowhere left to look.',
                'It ends on a sentence of finality: "There was no untried refuge left".',
              ],
            },
          },
          {
            id: 'edexcel-p1-c-q4',
            questionNumber: 4,
            questionText:
              'In this extract, the writer sets out to make the reader feel sympathy for Silas.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.',
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_SET_C_EXTRACT,
            extractSource: EDEXCEL_P1_SET_C_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer makes the reader feel deep sympathy for Silas, mainly because she lets us see his happiness before she takes it away. The extract opens with him reaching his door "in much satisfaction that his errand was done", enjoying "a welcome increase of heat" and "the agreeable business of tending the meat and warming himself". These are small, simple pleasures, and the reader warms to him. Yet the writer has already planted a warning: he walks about the floor "so as to merge the marks of Dunstan\'s feet on the sand in the marks of his own nailed boots". We know that someone has been in the cottage, and Silas does not, so every contented moment that follows becomes painful to read.\n\nThe narrator then gives us a portrait that makes us pity him. His neighbours regard him with "contemptuous pity, dread, and suspicion", but the narrator insists that "few men could be more harmless than poor Marner". The adjective "poor" shows the narrator\'s own sympathy, and it guides ours. We learn that, with "The light of his faith quite put out, and his affections made desolate", he has clung to his work and his money because he has nothing else. The metaphors are especially powerful: his loom "had in its turn wrought on him", and his gold "gathered his power of loving together into a hard isolation like its own". These images show a man who has become like the things he loves, mechanical and hard, but they also show that the gold has taken the place of people. That makes the reader sad rather than critical.\n\nHis pleasure in the gold is described with tenderness: "For joy is the best of wine, and Silas\'s guineas were a golden wine of that sort." Because the narrator understands how much the guineas mean to him, the reader is prepared to share his loss.\n\nThe discovery itself is told slowly, through his body. His heart leaps "violently", his hand trembles, and at last "he shook so violently that he let fall the candle". The narrator explains his false hopes with great understanding: "A man falling into dark waters seeks a momentary footing even on sliding stones". The reader does not laugh at his searching of the bed and the oven, because the image of a drowning man makes it heartbreaking. Even when he imagines that the gold might be lying on the table, the narrator calls this "that expectation of impossibilities", which is "still distinct from madness", so she defends his dignity.\n\nSome readers may find these long explanations slow the action, especially the paragraph beginning "Yes, there was a sort of refuge". However, I think they are central to the writer\'s success, because they help us understand Silas instead of simply watching him suffer. The climax, "a wild ringing scream, the cry of desolation", is all the more moving after such a careful build-up, and the final image of him tottering to his loom, "instinctively seeking this as the strongest assurance of reality", is very sad, because the loom is the only thing he has left. Overall the writer succeeds very well in making the reader feel for a lonely, harmless man who has lost the one thing he loved.',
            },
            markScheme: {
              'How it is marked (15 marks)': [
                'Level 1 (1 to 3 marks): mostly describes what happens. Opinions are given without reasons, and there are few quotations.',
                'Level 2 (4 to 6 marks): comments on what happens and offers simple opinions, backed by quotations that fit but are not explored.',
                'Level 3 (7 to 9 marks): explains how the writing creates the effect and gives a reasoned view of how well it works, with suitable quotations.',
                'Level 4 (10 to 12 marks): analyses the extract and builds a well-argued judgement, with detailed quotations backing up every point.',
                'Level 5 (13 to 15 marks): evaluates the extract as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
                "From Level 2 up, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
              ],
              'Points you might make': [
                'The calm opening, his "satisfaction" and his "unwonted feast", makes the loss crueller, and the mention of "the marks of Dunstan’s feet" tells the reader what he does not know.',
                'The narrator\'s portrait shows a harmless, lonely man: "few men could be more harmless than poor Marner", "The light of his faith quite put out".',
                'The metaphors of the loom that "wrought on him" and the gold that "gathered his power of loving together into a hard isolation" show what his life has become.',
                'His joy in the guineas, "a golden wine", makes their loss heartbreaking.',
                'The discovery is shown step by step through his body, and the image of a man "falling into dark waters" makes his false hopes pitiful.',
                'The "wild ringing scream, the cry of desolation", and his return to the loom end it. Some may find the narrator\'s long explanations slow; others that they help us understand him, not just watch him.',
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-c-writing',
        title: 'Section B: Imaginative Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. You should spend about 45 minutes on it, including about 5 minutes planning and 5 minutes checking your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-c-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, lost something precious. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: an old wooden box standing open and empty on a cottage floor. Picture 2: a lonely cottage at night, with rain falling and a single light in the window.\n\nWrite about a time when you, or someone you know, felt that their world had fallen apart. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nBiscuit went missing on the coldest night of the year, three days before Christmas.\n\nHe was not a remarkable cat. He was ginger and overweight and slightly cross-eyed, and he had a habit of sleeping in the washing basket and leaving orange hairs on everything that had just been cleaned. But he had been ours for eleven years, which was almost my whole life. He slept on the end of my bed every night, a warm, purring weight against my feet, and in the morning he woke me by patting my face with one soft paw, very gently, as if he were checking that I was still there.\n\nThat evening I let him out at nine, as usual. It had been snowing all afternoon, and the garden was a sheet of blue-white under the street light. Biscuit sniffed the air at the back door, shook one paw in disgust, and stepped out anyway, leaving a neat line of prints across the lawn. I watched him disappear under the fence. Then I closed the door and went to watch television, and I did not think about him again for an hour.\n\nAt ten, he had not come back. At eleven, I stood at the back door in my coat and rattled his biscuit tin, which always worked. The sound rang out across the dark gardens, and nothing came. The snow had started again, thick and silent, and it was already filling in his footprints.\n\nI did not sleep that night. I lay in bed with my feet pulled up, because the end of the bed was cold and empty, and every time I heard a sound I jumped up and ran to the window. Once it was a fox. Once it was the wind shifting the snow off the shed roof. By three in the morning I was certain that he was dead, frozen somewhere under a hedge, and I cried so quietly into my pillow that I hoped nobody would hear.\n\nThe next day we searched everywhere. Dad knocked on every door in the road. Mum made posters with a photograph of Biscuit asleep in the washing basket, and I stuck them on every lamp post between our house and the park, my fingers so cold that I could hardly peel the tape. People were kind. They said he would come home. They said cats were clever. Nobody looked as though they believed it.\n\nOn the second night I stopped rattling the tin. I did not want to hear the silence that followed.\n\nOn the third morning, Christmas Eve, Mrs Patel from number nine rang our doorbell at half past seven, still in her dressing gown, with her hair in a scarf.\n\n"I think," she said carefully, "that you\'d better come and look in my garage."\n\nHe was there, curled up on an old sleeping bag behind her car, thinner and dustier and very offended. He had crept in when she was unloading her shopping, and the door had shut behind him, and he had spent three days living on a bag of bird seed and his own dignity.\n\nWhen I picked him up, he did not purr at first. He just pushed his head hard under my chin, the way he used to when I was small, and stayed there.\n\nHe is fifteen now, and stiff in the mornings, and he still sleeps on the end of my bed. Some nights I wake up and reach down with my foot, just to check that he is there.',
            },
            markScheme: {
              'How it is marked (40 marks)': [
                'AO5, 24 marks, for content and organisation, on five levels: 1 to 4, some ideas but little sense of purpose or reader; 5 to 9, a clear purpose and a steady tone, with ideas in order and in paragraphs; 10 to 14, ideas and techniques chosen to suit the task, each building on the last; 15 to 19, shaped deliberately to affect the reader, with tone, style and structure under control; 20 to 24, a confident voice that steers the reader in subtle ways, with the whole piece holding together.',
                'AO6, 16 marks, for vocabulary, sentence structure, spelling and punctuation, on five levels: 1 to 4, simple words and frequent errors; 5 to 7, everyday words spelt correctly, punctuation mostly right, sentences beginning to vary; 8 to 10, good word choice, a mix of punctuation used correctly, sentences shaped for the purpose; 11 to 13, words chosen with care, only the odd slip, punctuation placed to make meaning clear; 14 to 16, ambitious vocabulary used with purpose, errors so rare they never get in the way, a full range of sentences each chosen for its effect.',
                'The two marks are added together. Answer one of the two tasks only.',
              ],
              'What earns marks': [
                'A clear purpose, and a voice that suits the task and the reader.',
                'A planned shape: an opening that draws the reader in, development, and a deliberate ending.',
                'Paragraphs and links that carry the reader through, and choices such as detail, dialogue or a shift in time made for effect.',
                'Varied, precise vocabulary and a range of sentence structures chosen for effect.',
                'Accurate spelling and punctuation, including commas, apostrophes and the punctuation of speech.',
              ],
              'Ideas for these tasks': [
                'Question 5 could be about a lost object, a lost pet, or something precious that cannot be replaced.',
                'Question 6 could use the empty box, the lonely cottage, or neither picture, and the cause could be large or small.',
                "Like the extract, a strong piece might show a character's happiness first, then follow the moment of loss closely, through the body as well as the mind.",
              ],
            },
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 2: NON-FICTION AND TRANSACTIONAL WRITING (1EN0/02)
  // ═══════════════════════════════════════════════════════════════════════════
  // SET A. Restructured 31 October 2026: see the note above the Paper 2 texts.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2-set-a',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set A',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-a-reading',
        title: 'Section A: Reading',
        description: `${EDEXCEL_P2_SECTION_A_GUIDANCE}\n\nText 1: ${EDEXCEL_P2_SET_A_SOURCE_1_REF}\nText 2: ${EDEXCEL_P2_SET_A_SOURCE_2_REF}\n\nGlossary for Text 1: bereavement group: a group where people who have lost someone close meet to support each other. Glossary for Text 2: competence: being able to cope.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-a-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things the six women do or order every Tuesday.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_A_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_A_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_A_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                '1. They push two tables together by the window.\n2. They order a pot of tea for six.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: they push two tables together by the window; they order a pot of tea for six; they order one slice of carrot cake, cut into six pieces.',
              "A word, a short phrase or the student's own words is enough.",
              "Do not credit what the café's owner does.",
            ],
          },
          {
            id: 'edexcel-p2-a-q2',
            questionNumber: 2,
            questionText:
              'Read the third paragraph of Text 1, beginning "Loneliness is often described".\n\nGive two ways in which the women look after each other.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_A_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. When one of them misses a Tuesday, "the others ring that evening".\n2. When one was in hospital, "they took it in turns to visit".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: they ring a friend who misses a Tuesday; they took turns to visit the friend in hospital; they brought her carrot cake.',
              'Do not credit the weddings, funerals and dance class they have been to together: the paragraph gives these as outings they shared, not as ways of looking after each other.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-a-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${EDEXCEL_P2_SET_A_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the feature interesting by describing a group of friends in detail and saving the most moving moment for the end.

In the first paragraph, the writer describes the women's routine. They always order "a pot of tea for six and one slice of carrot cake, cut into six pieces", which is a funny and specific detail. The owner "no longer asks", which shows how long they have been coming.

In the second paragraph, the writer explains that the women met at "a bereavement group" after their husbands died. This makes the reader understand why the group matters so much. Maureen's words, "We are still here", show how long the friendship has lasted.

In the third paragraph, the writer describes how the women care for each other. When one misses a Tuesday, "the others ring that evening", which shows their kindness. The story about the dance class that "was a mistake" adds humour.

In the fourth paragraph, the writer shows that their conversation moves "between the serious and the silly", which makes the friendship seem natural.

The ending is the most powerful part. Jean says "Here, I am known", and the repetition of "known" shows what the group means to her. The writer ends with the last piece of cake, which links back to the start.`,
              'Grade 8-9': `The writer engages the reader by building a detailed, affectionate portrait of a group of friends and holding back its emotional meaning until the final paragraph.

The opening paragraph uses precise detail to establish a ritual. The specifics, "a pot of tea for six and one slice of carrot cake, cut into six pieces", are slightly comic, and the repetition of "six" makes the friendship seem balanced and complete. The short sentence "The café's owner no longer asks." shows how fixed the routine has become, and the image of a man who "simply puts the kettle on" when the door opens lets the reader feel the warmth of being expected.

The second paragraph supplies background, and its key detail is placed quietly in the middle: the women met "at a bereavement group", each "after losing a husband". The phrase "none of them wanted to go home to an empty house" reveals the loneliness that brought them together without dwelling on it. Maureen's words, "We came for an hour" and "We are still here", add a human voice and a gentle joke about time.

The third paragraph widens the focus to a general issue, loneliness as "a modern epidemic", and then turns it with "Yet": what happens at the table "looks less like a cure than like a habit, kept up with care". The list of kindnesses, ringing "that evening", taking "it in turns to visit", bringing the cake "wrapped in a napkin", shows care through actions, and the comic climax, the dance class "which they all agree was a mistake", stops the paragraph from becoming sentimental.

The fourth paragraph captures the rhythm of their talk. The list "a friend's diagnosis, the price of bus fares and whether the new vicar is too young to be trusted" moves from the serious to the silly in a single sentence, imitating the conversation it describes.

The final paragraph slows down. The pause after the question, and the detail that Jean "has said almost nothing all morning", build suspense, so that her words, "When my husband died, I thought that was the end of being known" and "Here, I am known", land with great force. The repetition of "known" is the emotional heart of the piece. The writer then lets the moment pass naturally, as somebody asks "who wants the last piece of cake", returning to the cake of the first paragraph and ending as the conversation, and the friendship, simply carries on.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the precise, slightly comic details of the order and the repetition of "six"; the owner who no longer asks; the quiet placing of the bereavement; the list of kindnesses and the comic dance class; the list that moves from a diagnosis to the new vicar; the repetition of "known".',
              'Structure could include: the movement from ritual, to background, to the wider issue of loneliness, to conversation, to the final moment; the turn on "Yet"; the suspense built before Jean speaks; the return to the cake of the first paragraph at the end.',
              ...EDEXCEL_P2_MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-a-q4',
            questionNumber: 4,
            questionText:
              "Look at the first paragraph of Text 2.\n\nIdentify one way in which the writer's mother was still present in the writer's life.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'She drove the writer to school.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: she was in the kitchen; she was in the garden; she drove the writer to school; she looked at the writer with affection.',
            ],
          },
          {
            id: 'edexcel-p2-a-q5',
            questionNumber: 5,
            questionText:
              "Look at the second paragraph of Text 2.\n\nIdentify one thing the writer learned later about the mother's illness.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'She had depression.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: she had depression; she took medication; she had appointments with a therapist; the father talked about it quietly with his sister.',
            ],
          },
          {
            id: 'edexcel-p2-a-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to show how their understanding of their mother changed over time.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_A_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in showing how their understanding of their mother changed, because the memoir moves clearly from the child's confusion to the adult's understanding.

At the start, the writer says the mother "had been leaving me all along", but then explains that she was present "in the kitchen, in the garden". This shows that the absence was emotional, not physical. The simile "from the other side of glass" helps the reader to imagine the distance.

In the second paragraph, the writer explains what they learned later, about "the depression, the medication". The sentence "For years, I interpreted her distance as rejection" shows how the child misunderstood. The writer then explains that it was "a symptom of her own struggle", which shows the change in understanding.

In the third paragraph, the mother apologises: "I was not present for you." These short, simple words are moving.

At the end, the writer says that the mother's "honesty about her absence was a kind of presence". This shows that the writer has forgiven her. However, the memoir is very short, so we do not learn much about the writer's feelings as a child, which makes it less vivid than it could be.`,
              'Grade 8-9': `The writer is very successful in showing how their understanding changed, because the memoir is structured as a journey from a child's misreading, through an adult's discovery, to a final reinterpretation, and its language is precise and restrained.

The opening sentence is arresting: "It took me five years to understand that my mother had been leaving me all along." The word "leaving" is at once corrected, "Not physically", and the list of places where she was present, "in the kitchen, in the garden, driving me to school", makes the absence more painful because it was hidden inside ordinary life. The simile of watching "from the other side of glass" captures a closeness that cannot be touched.

The second paragraph shows the change in understanding. The list "the depression, the medication, the appointments with the therapist whose name I never knew" reveals what the child had not known, and the detail of conversations "that ended abruptly when I entered the room" shows how the truth was kept from the child. The key contrast is between "For years, I interpreted her distance as rejection" and the adult's realisation that her withdrawal was "not a comment on me, but a symptom of her own struggle". This clear before and after makes the change easy to follow.

The third paragraph is the turning point, and it is effective because it is short. The mother's words, "I was not present for you" and "I was somewhere else", are simple and honest, and the brief aside, "after I had my own problems to contend with", hints that the writer's own adult struggles helped them to understand.

The final paragraph completes the change. The paradox "her honesty about her absence was a kind of presence" reverses the opening idea of "leaving", and the three parallel clauses beginning "that", building to the preference for "a mother who was honestly struggling" over one "who performed a false competence", end with a mature, forgiving judgement.

The memoir is less successful in one respect: some phrases, such as "her own struggle with consciousness itself", are abstract and harder to grasp than the concrete details elsewhere. Overall, however, the writer conveys the change in understanding movingly, and the structure lets the reader share the journey.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer conveys the change in understanding, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the arresting opening and its correction, "Not physically"; the simile of the glass; the before and after of rejection and understanding; the mother\'s short, honest apology; the final paradox and the three parallel clauses beginning "that".',
              "A balanced view is creditable, for example that some phrases are abstract, or that the memoir is too short to show the child's feelings in detail.",
              ...EDEXCEL_P2_MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-a-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about people coping with loss and absence.\n\nWhat similarities are there between the experiences the two writers describe? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EDEXCEL_P2_SET_A_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_A_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_A_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe people coping with loss. In Text 1 the women had each lost "a husband", and in Text 2 the writer felt the mother "had been leaving me all along". Both texts show that people find comfort when they can be honest: Jean says "Here, I am known", and the writer of Text 2 says the mother\'s "honesty about her absence was a kind of presence". Both texts also show that talking about problems helps, as the women discuss "a friend\'s diagnosis" and the mother "finally spoke about it".',
              'Grade 8-9':
                'Both texts describe people living with an absence at the heart of their lives: the women of the Tuesday Club met "after losing a husband" and did not want "to go home to an empty house", while the writer of Text 2 had a mother who "had been leaving me all along". Both show painful things being spoken about: in Text 1 the women openly discuss "a friend\'s diagnosis", and in Text 2, after years in which the father\'s "quiet conversations" stopped when the child came in, the mother "finally spoke about it". In both, honesty brings comfort, Jean saying "Here, I am known" and the writer of Text 2 deciding that "her honesty about her absence was a kind of presence". Finally, both show that these things take time: the friendship has been kept up for eleven years, and the writer of Text 2 took "five years to understand" and had to become "an adult" before seeing the truth.',
            },
            markScheme: [
              "Similarities could include: an absence at the heart of people's lives; painful things spoken about openly, in Text 2 only after years of silence; honesty and being known as a comfort; understanding and friendship that take time.",
              ...EDEXCEL_P2_MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-a-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about what people need from those close to them, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Text 1:\n${EDEXCEL_P2_SET_A_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_A_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_A_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_A_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7': `Both writers write about the people we depend on, but they present this in different ways. The writer of Text 1 describes a group of friends who support each other, for example by visiting one of them in hospital. The writer of Text 2 describes a mother who was distant because of depression.

Both texts suggest that people need to be understood. In Text 1, Jean says "Here, I am known", and in Text 2 the writer comes to understand that the mother's distance was "not a comment on me".

The tones are different. Text 1 is warm and sometimes funny, such as the dance class that "was a mistake". Text 2 is quiet and serious, as the writer remembers feeling rejected.

The writers use different methods. Text 1 is a feature article with quotations from the women. Text 2 is a memoir that ends with a paradox: "her honesty about her absence was a kind of presence". Overall, Text 1 shows the comfort of friendship, while Text 2 shows the value of honesty within a family.`,
              'Grade 8-9': `Both writers suggest that what people most need from those close to them is to be truly known, but the writer of Text 1 observes this from outside, in a group of friends, while the writer of Text 2 discovers it from inside a family.

The writer of Text 1 is a journalist describing other people. The needs are shown through actions, the friends who "ring that evening" and who "took it in turns to visit", and the emotional meaning is given to Jean: "Here, I am known." The writer of Text 2 is describing their own life, and the need is shown through its absence: a child who felt watched "from the other side of glass" and "interpreted her distance as rejection".

Their ideas about what people need differ slightly. For the women in Text 1, the need is for company and continuity, a "habit, kept up with care", that fills the space left by loss. For the writer of Text 2, the need is for honesty: the conclusion is that "her refusal to pretend was a gift", and that it is better to have "a mother who was honestly struggling than one who performed a false competence". One text values being accompanied; the other values being told the truth.

Both texts, however, suggest that this need is met through openness about pain. The women can talk about "a friend's diagnosis" as easily as "the price of bus fares", and Jean speaks openly of the moment "When my husband died". The mother in Text 2 is finally able to say "I was not present for you."

Their methods reflect their perspectives. Text 1 is a feature article that uses precise detail, humour and quoted speech, and it saves its emotional climax for the last paragraph before letting the conversation move on. Text 2 is a reflective memoir that uses abstract language, such as "a symptom of her own struggle", a simile of glass and a final paradox, and it is structured as a single journey from misunderstanding to forgiveness. Read together, the texts suggest that the people closest to us matter most when they let us see them as they are.`,
            },
            markScheme: [
              'Comparisons could include: both writers suggest that people need to be truly known, but Text 1 observes this in a group of friends and Text 2 discovers it inside a family; Text 1 values company and continuity, Text 2 honesty; both show the need met through openness about pain; Text 1 uses precise detail, humour and quoted speech, Text 2 abstract language, a simile and a paradox.',
              ...EDEXCEL_P2_MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-a-writing',
        title: 'Section B: Transactional Writing',
        description: EDEXCEL_P2_SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-a-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for your local newspaper in which you persuade readers to do more to help people in their community who are lonely.\n\nYou could write about:\n• who may be lonely, and why\n• the effects of loneliness\n• simple things people could do to help\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Every school should run a scheme in which students spend time with older people in their community."\n\nWrite a letter to your headteacher in which you give your views on this idea.\n\nYou could write about:\n• what students and older people could gain\n• the difficulties of running such a scheme\n• how it could work\nand any other ideas of your own.\n\n${EDEXCEL_P2_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 9: a letter to a headteacher

Dear Mrs Bennett,

I am writing to suggest that our school starts a scheme in which students spend time with older people in our community. I believe it would benefit both the students and the older people, and I hope you will consider it.

Firstly, many older people in our town live alone and feel lonely. Some of them may go days without speaking to anyone. If students visited them regularly, or spent time with them at a local care home or community centre, it would give them company and something to look forward to.

Secondly, students would gain a lot from the scheme. Older people have lived through many changes and have fascinating stories to tell. By listening to them, we could learn about history in a way that no textbook can teach. We would also develop our confidence and communication skills, which would help us in job interviews and in later life.

I understand that there could be some difficulties. Students would need to be safe, and older people might feel nervous about meeting teenagers they do not know. However, the scheme could be organised carefully with a local care home or charity, and students could always visit in pairs or groups, with a teacher present.

The scheme could work in a simple way. Students in Year 10 could volunteer for one afternoon a month as part of their enrichment activities. They could play board games, help with technology, such as video calls with relatives, or simply chat over a cup of tea. At the end of the year, the school could hold a celebration for everyone involved.

In conclusion, I believe this scheme would make a real difference to our community. It would help older people to feel less lonely and help students to become more caring and confident.

Thank you for reading my letter.

Yours sincerely,

Aisha Rahman`,
              'Grade 8-9': `Question 8: an article for a local newspaper

The Empty Chair: Why Loneliness Is Everybody's Business

There is a woman on my street who waves at me every morning. For months I waved back without thinking. Then, one wet Saturday, I knocked on her door to return a parcel that had been delivered to us by mistake, and she kept me talking for forty minutes. As I left, she said something I have never forgotten: "You're the first person I've spoken to since Wednesday."

Loneliness is often invisible. It does not show on a person's face as they walk to the shops, and it is rarely mentioned when we ask how someone is. Yet it is all around us. It affects older people who have lost a partner, young parents at home with a baby, students who have moved to a new town, carers who never get a day off and people who live alone with an illness. Anyone can be lonely, and most of us will be at some point in our lives.

The effects are serious. Loneliness can make people anxious and low, and doctors warn that it can damage physical health too. A person who feels that nobody would notice if they disappeared is less likely to look after themselves, to see a doctor or to ask for help. Loneliness is not just sadness. It is a slow wearing away of a person's sense that they matter.

The good news is that the cure is often surprisingly simple. Most lonely people do not need grand gestures. They need ordinary contact, repeated often enough to become a habit. Knock on a neighbour's door and introduce yourself. Offer to pick up some shopping. Stop for a proper conversation at the bus stop instead of staring at your phone. If you belong to a club, a choir or a place of worship, invite someone new along, and then make sure they are not left sitting alone.

Communities can do more as well. Cafés could set aside a table where anyone who wants company can sit and talk. Schools could link students with older people for regular visits. Local councils could support the groups that already bring people together, which are often run by volunteers on almost no money.

None of this takes much time. But for the person on the receiving end, it can be the difference between a week of silence and a week in which somebody knew their name.

The woman on my street and I now have a cup of tea together every Saturday. It costs me an hour. It has given me a friend. Next time you pass someone you only ever wave at, stop. You may find that they have been waiting for you to knock.`,
            },
            markScheme: [
              'Question 8 (an article for a local newspaper): a headline and an engaging opening, perhaps an anecdote; a clear explanation of who may be lonely and why it matters; practical suggestions for readers and for communities; a persuasive, warm register.',
              'Question 9 (a letter to a headteacher): a suitable greeting and sign-off and a polite, formal register; a clear view on the idea, with its benefits for both groups; an honest answer to the difficulties; practical suggestions for how it could work.',
              ...EDEXCEL_P2_MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL PAPER 2: SET B. Restructured 31 October 2026: see the note above
  // the Paper 2 texts. Both texts are kept word for word.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2-set-b',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set B',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-b-reading',
        title: 'Section A: Reading',
        description: `${EDEXCEL_P2_SECTION_A_GUIDANCE}\n\nText 1: ${EDEXCEL_P2_SET_B_SOURCE_1_REF}\nText 2: ${EDEXCEL_P2_SET_B_SOURCE_2_REF}\n\nGlossary for Text 1: patrons: regular users; the calculus of local government budgets: the council's working out of costs; footfall: the number of people who come in. Glossary for Text 2: novelty: something new and unusual; sated: satisfied.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-b-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two things Mrs Chen found when she arrived at the library on the Tuesday.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_B_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_B_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_B_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                '1. The doors were locked.\n2. The books were already packed into boxes.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept: the doors were locked; the books were already packed into boxes.',
              'Do not credit details from later paragraphs.',
            ],
          },
          {
            id: 'edexcel-p2-b-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "The building itself was not grand".\n\nGive two problems with the library building.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_B_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7': '1. "Its roof leaked."\n2. "The computers were old."',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: the roof leaked; the heating was unreliable; the computers were old; it had been altered many times; it cost more than its number of visitors justified.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-b-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${EDEXCEL_P2_SET_B_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the text interesting by describing the closure of the library and showing why it matters.

The first sentence, "The library closed on a Tuesday in November.", is short and simple, which makes the closure sound sudden and final. The writer focuses on Mrs Chen, who had worked there "for twenty-three years", which makes the reader feel sorry for her. The detail of "the books already packed into boxes" shows how quickly everything ended.

In the second paragraph, the writer describes the building's problems in short sentences: "Its roof leaked." and "The computers were old." This makes the building sound run-down. The writer explains that its closure "made sense" in economic terms.

The structure changes in the third paragraph with "But". The writer explains that the library was important for "the elderly, the unemployed, the lonely". The repetition of "It" at the start of the last two sentences builds up the sense of loss. The verb "severed" shows that closing the library cut people off from each other.

This structure, moving from the closure to the reasons for it and then to its cost, makes the reader think that the closure was a mistake.`,
              'Grade 8-9': `The writer holds the reader's interest by telling the story of the library's closure in three carefully balanced paragraphs: a human moment, the official case for closing it, and the human cost that case leaves out.

The opening sentence is short and flat, "The library closed on a Tuesday in November.", like a news report, and the plain detail of the day and the month makes the closure feel real. The writer then focuses on one person, Mrs Chen, who "had worked there for twenty-three years", so that the reader experiences the closure through her shock. The image of "the doors locked, the books already packed into boxes" is quietly brutal, and the paragraph ends with a list of absences, "no ceremony, no acknowledgment", that stresses how little her "thousands of hours" were valued. The phrase "helping people find stories" presents her work warmly, as a kind of guidance.

The second paragraph changes tone and imitates the language of officials. It begins with a concession, "The building itself was not grand", and then uses a string of short, blunt sentences, "Its roof leaked. The heating system was temperamental. The computers were old.", which sound like a surveyor's report. The words "the calculus of local government budgets", "inefficient" and "footfall" belong to accountants rather than readers, and the final judgement, "In purely economic terms, keeping it open was indefensible", seems to settle the matter. The word "purely" quietly suggests that economics is not the only measure.

The third paragraph turns on "But", and the structure becomes an argument. The list "the elderly, the unemployed, the lonely" names the people the budget ignores, and the paragraph's three sentences, beginning "But the closure eliminated", "It removed" and "It severed", build in force. The verb "severed" is the strongest in the text, suggesting a violent cut. The final phrase, "people whose lives had few connections remaining", ends on loneliness and loss, leaving the reader to judge whether the closure really "made sense".`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the flat, news-like opening; the focus on Mrs Chen and the list of absences; the short, blunt sentences that sound like a report; the official vocabulary of budgets and footfall, and the word "purely"; the verb "severed".',
              'Structure could include: three balanced paragraphs, from a human moment, to the official case, to the human cost; the concession at the start of the second paragraph; the turn on "But"; the three sentences that build in force; the ending on loneliness.',
              ...EDEXCEL_P2_MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-b-q4',
            questionNumber: 4,
            questionText:
              "Look at the first paragraph of Text 2.\n\nIdentify one detail about the writer's childhood.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The family did not have a telephone.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: the writer was born in 1947; in a village where electricity was a novelty; life was lived by lamplight and candle; by the rhythms of farming and the seasons; there was no telephone; news came by post or by word of mouth.',
            ],
          },
          {
            id: 'edexcel-p2-b-q5',
            questionNumber: 5,
            questionText:
              "Look at the second paragraph of Text 2.\n\nIdentify one thing that came into the writer's life at grammar school.",
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'People from different backgrounds.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: ideas; books; people from different backgrounds; a hunger for knowledge, understanding or connection.',
            ],
          },
          {
            id: 'edexcel-p2-b-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer tries to convince the reader that young people today have lost the hunger for knowledge that the writer once felt.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_B_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in convincing the reader, because the essay contrasts the past and the present in a clear and interesting way.

In the first paragraph, the writer describes a childhood "by lamplight and candle". This shows how different life was, and it makes the reader understand why the writer valued knowledge.

In the second paragraph, the writer describes going to grammar school, when "the world rushed in". The repetition of "a hunger" shows how strongly the writer wanted to learn. The short sentence "That hunger has never left me." is powerful.

In the third paragraph, the writer argues that young people today do not have this hunger. The writer says they are "endlessly scrolling, endlessly consuming", and the repetition makes this sound like a bad habit.

However, the writer does not give any evidence for this claim, apart from saying "I observe something curious". Some young people might feel that the writer is being unfair. The ending uses "Perhaps", which makes the writer sound less certain.`,
              'Grade 8-9': `The writer is partly successful. The essay is skilfully built on a contrast between a childhood of scarcity and a present of plenty, and its language is memorable, but its central claim about young people rests on the writer's impression rather than on evidence.

The first paragraph establishes the writer's authority through a vivid picture of the past. Being "born in 1947 in a village where electricity was still a novelty" places the writer in a different world, and the phrase "lived by lamplight and candle, by the rhythms of agriculture and season" is rhythmic and nostalgic. The final sentence, "The wider world was something that happened somewhere else, to other people", conveys the isolation that makes the later hunger convincing.

The second paragraph is the most effective. The phrase "the world rushed in" suggests sudden excitement, and the repetition in "a hunger - a hunger for knowledge, for understanding, for connection" builds a sense of longing. The short final sentence, "That hunger has never left me.", is simple and sincere, and the reader is likely to admire the writer's lifelong curiosity.

The third paragraph makes the argument, and it is here that the essay is weakest. The list "of unlimited information, of instant communication, of constant connectivity" is impressive, and the paradox that young people "have access to everything, and yet they seem satisfied with nothing" is neatly phrased. The repetition of "endlessly scrolling, endlessly consuming" creates an image of mindless activity. However, the writer says only "I observe something curious", and that young people "seem" satisfied with nothing, which admits that this is a personal impression. A young reader may find the generalisation unfair.

The final sentence, "Perhaps it is the nature of unlimited access to diminish appetite", is thought-provoking, and the word "Perhaps" makes it tentative rather than preachy. Overall, the writer conveys a sincere view with real skill, but persuades older readers more easily than the young people the essay is about.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer convinces, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the vivid picture of a childhood without electricity or a telephone; the sudden excitement of grammar school and the repeated "hunger"; the impressive list of modern connection and the paradox of having everything and being satisfied with nothing; the tentative "Perhaps" of the ending.',
              'A balanced view is creditable, for example that the claim about young people rests on impression rather than evidence, and may seem unfair to them.',
              ...EDEXCEL_P2_MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-b-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts describe places and experiences that opened up the world to people.\n\nWhat similarities are there between them? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EDEXCEL_P2_SET_B_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_B_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_B_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe places where people could find books and knowledge. In Text 1 the library let children "experience books before they could afford to buy them", and in Text 2 the grammar school introduced the writer to "ideas, books". Both texts also talk about connection: the library\'s closure "severed a connection", and the writer of Text 2 wanted "connection with the world beyond my village". Both texts suggest that something important is being lost: a "crucial gathering point" in Text 1 and young people\'s "hunger" in Text 2.',
              'Grade 8-9':
                'Both texts describe a place that gave people access to books they could not otherwise reach: the library was "a space where children could experience books before they could afford to buy them", and the grammar school brought the writer of Text 2 into contact with "ideas, books, people from different backgrounds". Both link these places with connection: the library\'s closure "severed a connection for people whose lives had few connections remaining", and the writer of Text 2 felt "a hunger" for "connection with the world beyond my village". Both also look back over many years: the library closes after Mrs Chen\'s "twenty-three years" there, and the writer of Text 2 looks back from "an age of unlimited information" to a childhood "by lamplight and candle". Finally, both suggest that something valuable is being lost, whether "a crucial gathering point" or young people\'s hunger for knowledge.',
            },
            markScheme: [
              'Similarities could include: places that gave people access to books and ideas they could not otherwise reach; the link between such places and connection with others; a look back over many years; a sense that something valuable is being lost.',
              ...EDEXCEL_P2_MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-b-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about access to books and knowledge, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Text 1:\n${EDEXCEL_P2_SET_B_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_B_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_B_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_B_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7': `Both writers think books and knowledge are important, but they have different worries. The writer of Text 1 is worried that people are losing access to books because the library has closed. The writer of Text 2 is worried that young people have so much information that they no longer feel "a hunger" for it.

The writers blame different things. Text 1 suggests that the library closed because of money, as its closure only "made sense" in budget terms. Text 2 suggests that young people are to blame, because they are "endlessly scrolling".

Both writers value connection between people. Text 1 says the library was "a crucial gathering point", and Text 2 describes a hunger "for connection".

The writers use different methods. Text 1 is a news feature that focuses on Mrs Chen and the building. Text 2 is a personal essay that compares the writer's childhood with today. Overall, Text 1 is sad about what has been lost, while Text 2 is disappointed in young people.`,
              'Grade 8-9': `Both writers believe that access to books and knowledge is precious, but the writer of Text 1 worries that people are losing that access, while the writer of Text 2 worries that young people with unlimited access no longer value it.

For the writer of Text 1, the problem is scarcity created by cuts. The library offered "a space where children could experience books before they could afford to buy them", and its closure takes that away from those who need it most, "the elderly, the unemployed, the lonely". For the writer of Text 2, the problem is the opposite: abundance. In "an age of unlimited information", young people "have access to everything, and yet they seem satisfied with nothing". One writer mourns a door that has closed; the other laments that an open door is no longer used.

Their attitudes to those responsible differ. Text 1 is critical of decisions made "In the calculus of local government budgets", where the closure "made sense" only "In purely economic terms". Text 2 blames no institution, and instead questions the young, wondering whether "it is the nature of unlimited access to diminish appetite". Text 1 defends ordinary people against officials; Text 2 passes judgement on a generation.

Both writers value connection. The library's closure "severed a connection for people whose lives had few connections remaining", and the writer of Text 2 remembers a hunger "for connection with the world beyond my village". But Text 1 presents connection as something a community provides, while Text 2 presents it as something an individual must want.

Their methods reflect their purposes. Text 1 is a news feature told in the third person, focusing on Mrs Chen and using blunt sentences, "Its roof leaked.", to voice the official case before overturning it with "But". Text 2 is a personal essay in the first person that uses nostalgic imagery, "lamplight and candle", the repetition of "a hunger", and an uncertain final sentence beginning "Perhaps". Text 1 ends with loss; Text 2 ends with a tentative suggestion.`,
            },
            markScheme: [
              'Comparisons could include: both writers think access to books and knowledge is precious, but Text 1 fears people are losing it and Text 2 fears young people no longer value it; Text 1 criticises budget decisions, Text 2 questions the young; both value connection, as something a community provides in Text 1 and something an individual must want in Text 2; Text 1 is a third-person news feature that voices and then overturns the official case, Text 2 a first-person essay of nostalgic imagery, repetition and a tentative ending.',
              ...EDEXCEL_P2_MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-b-writing',
        title: 'Section B: Transactional Writing',
        description: EDEXCEL_P2_SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-b-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nYour local council plans to close the library in your area to save money.\n\nWrite a letter to the council in which you argue that the library should stay open.\n\nYou could write about:\n• who uses the library, and why\n• what would be lost if it closed\n• other ways the council could save money or keep it open\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Young people today have everything and appreciate nothing."\n\nWrite an article for a newspaper in which you give your views on this statement.\n\nYou could write about:\n• the opportunities young people have\n• the pressures they face\n• what young people value\nand any other ideas of your own.\n\n${EDEXCEL_P2_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: a letter to the council

Dear Councillor Lewis,

I am writing to ask you to keep Southfield Library open. I know that the council needs to save money, but I believe that closing the library would be a serious mistake for our community.

The library is used by many different people. I go there after school to do my homework, because it is quiet and I can use the computers. My grandmother goes to the reading group on Thursdays, and it is one of the few times she leaves the house. Young families come to the story sessions for toddlers, and people who are looking for work use the computers to search for jobs.

If the library closed, all of these people would lose something important. Children whose families cannot afford to buy books would have nowhere to borrow them. Older people who live alone would lose a place to meet others. Students without a quiet space at home would find it harder to study.

I understand that the building is old and needs repairs. However, there are other ways to save money or keep the library open. The council could reduce the opening hours instead of closing it completely. Volunteers could help to run some of the sessions, as they do in other towns. The library could also raise money by renting out its meeting room to local groups.

A library is much more than a building full of books. It is a place where everyone is welcome, whatever their age or background, and where nobody has to pay to learn. Once it has gone, it will be very difficult to bring back.

I hope that you will think again about this decision. Thank you for taking the time to read my letter.

Yours sincerely,

Ryan Clarke`,
              'Grade 8-9': `Question 9: an article for a newspaper

Everything and Nothing? A Teenager Answers Back

"Young people today have everything and appreciate nothing." I have heard some version of this sentence all my life: from relatives at Christmas, from comedians on television, and once, memorably, from a man in a supermarket queue who disapproved of my headphones. It is time somebody my age answered back.

Let me begin by admitting what is true. My generation does have extraordinary opportunities. I can learn almost anything from a video, talk to a friend on the other side of the world for free and find any book, song or film in seconds. My grandparents grew up without a telephone. I carry a computer in my pocket that is more powerful than the ones that guided astronauts to the moon. If having everything means having access to everything, then, yes, we do.

But access is not the same as ease. We are the first generation to grow up with our every mistake recorded and shared. We sit a great many examinations, and we will leave education for a world of high rents, uncertain jobs and a climate that our elders have damaged and left us to repair. Many of my friends are anxious, and some of them have part-time jobs that help to pay their family's bills. It is hard to recognise this generation in the picture of pampered teenagers who want for nothing.

As for appreciating nothing, I would ask the critics to look more closely. Young people volunteer, campaign and raise money for causes they care about. We march for the environment and stand up for fairness with an energy that puts many adults to shame. We appreciate our families, our friends and the chances we have; we simply show it in ways that older people do not always notice, because they happen online or in places adults do not go.

Of course, some young people take things for granted. So do some adults. Ingratitude is not a disease of the young; it is a human failing, and every generation has its share. The same complaint has been made about the young for as long as anyone can remember.

So, the next time you are tempted to say that young people have everything and appreciate nothing, try asking one of us what we hope for, and what we fear. You may be surprised by how much we value, and how much we are carrying.`,
            },
            markScheme: [
              'Question 8 (a letter to the council): a suitable greeting and sign-off and a formal register; a clear argument, with examples of who uses the library and what would be lost; practical alternatives to closure; a firm conclusion.',
              'Question 9 (an article for a newspaper): a headline and an engaging opening; a clear view on the statement, developed with reasons and examples; awareness of what is true in the statement; a conclusion that draws the argument together.',
              ...EDEXCEL_P2_MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
  // EDEXCEL PAPER 2: SET C. Restructured 31 October 2026: see the note above
  // the Paper 2 texts. Text 1 replaces a short story; Text 2 is kept word for
  // word. The writing task's model answers, bracketed placeholders until now,
  // are written out.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2-set-c',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02 - Set C',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-c-reading',
        title: 'Section A: Reading',
        description: `${EDEXCEL_P2_SECTION_A_GUIDANCE}\n\nText 1: ${EDEXCEL_P2_SET_C_SOURCE_1_REF}\nText 2: ${EDEXCEL_P2_SET_C_SOURCE_2_REF}\n\nGlossary for Text 1: permanence: lasting for ever; a modest proposal: a small, sensible suggestion. Glossary for Text 2: correspondence: letters exchanged; chronologically: in order of date; testimony: evidence.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-c-q1',
            questionNumber: 1,
            questionText:
              'Look at the first paragraph of Text 1.\n\nIdentify two kinds of message the writer and their best friend have sent each other.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_C_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_C_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_C_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7': '1. Jokes.\n2. Voice notes at two in the morning.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: jokes; photographs; voice notes; a long conversation on a bad night.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-c-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "We are the most connected generation in history".\n\nGive two details about the letters that the writer\'s grandparents\' generation wrote.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_SET_C_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. They were kept "tied with ribbon in shoeboxes and biscuit tins".\n2. People "chose their words with care".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              "Accept: they were kept, tied with ribbon in shoeboxes and biscuit tins; a letter took days to cross a country and weeks to cross an ocean; people chose their words with care; they wrote about the weather, the neighbours and the price of bread; they recorded people's lives.",
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-c-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${EDEXCEL_P2_SET_C_SOURCE_1}`,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the article interesting by starting with a personal example and then arguing that modern messages may be lost.

The article begins with the writer's "eleven thousand messages" from a best friend. This large number grabs the reader's attention. The writer admits "I could not tell you where most of them are", which makes the reader think about their own messages.

In the second paragraph, the writer compares modern messages with old letters, which were kept "tied with ribbon in shoeboxes and biscuit tins". This image is nostalgic and shows how carefully letters were kept.

In the third paragraph, the writer uses short sentences, such as "Messages disappear when an account is closed.", to show how easily modern messages are lost.

The fourth paragraph makes the writer seem fair, because it admits that "The speed of modern messaging is a gift."

At the end, the writer gives a "modest proposal" with simple instructions, such as "Save them somewhere safe." The last sentence, about "a forgotten password", is a clever ending because it shows how easily our memories could disappear.`,
              'Grade 8-9': `The writer engages the reader by opening with a personal confession, widening it into a claim about a whole generation, and ending with a practical, gently witty proposal, so that the argument feels both personal and important.

The opening sentence uses a striking number, "eleven thousand messages", to show the sheer quantity of modern communication, and the list of what they contain, "jokes, photographs, voice notes at two in the morning", moves from the trivial to the serious with "a long conversation that got me through it". The admission that "I could not tell you where most of them are" turns abundance into loss, and the reader is likely to recognise the feeling.

The second paragraph uses a paradox to state the argument: we are "the most connected generation in history, and perhaps the one that will leave the least behind". The writer then contrasts our habits with our grandparents', using concrete, homely images, letters "tied with ribbon in shoeboxes and biscuit tins", and explains why their words mattered: because letters were slow, people "chose their words with care". The phrase "almost by accident, they wrote down their lives" is the heart of the paragraph, suggesting that ordinary letters became precious records.

The third paragraph returns to the present with three phrases, "on the move, in fragments, and we let it vanish", that make modern writing seem hurried and careless. The short sentences that follow, such as "Messages disappear when an account is closed", build a sense of fragility, and the contrast "designed to make us reply quickly, not to make us remember" sums up the problem neatly.

The fourth paragraph adds balance. The writer is not "suggesting that we abandon our phones", and the humorous aside "though there are worse ideas" keeps the tone light. The concession that speed "is a gift" makes the writer seem fair, and the paragraph ends by naming the real loss: "speed and permanence are not the same thing".

The final two paragraphs turn the argument into action. The "modest proposal" is broken into short commands, "Save them somewhere safe. Print a few.", and the dry sentence "That is rather the point" is witty. The ending looks fifty years ahead, and its last image, "a forgotten password", is a clever, slightly sad symbol of a life that could vanish.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the striking number of messages and the list that moves from jokes to a bad night; the paradox of the most connected generation leaving the least behind; the homely image of letters tied with ribbon; the contrast between replying quickly and remembering; the witty aside and the final image of a forgotten password.',
              'Structure could include: the movement from a personal confession, to a claim about a generation, to a contrast with the past, to a concession, to a proposal; the short sentences that build a sense of fragility; the short commands of the proposal; the ending that looks fifty years ahead.',
              ...EDEXCEL_P2_MARKS_Q3,
            ],
          },
          {
            id: 'edexcel-p2-c-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one thing the letters were about.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'The weather.',
            },
            markScheme: [
              '1 mark for one correct point.',
              "Accept one of: the weather; children's achievements; small grievances; larger joys.",
            ],
          },
          {
            id: 'edexcel-p2-c-q5',
            questionNumber: 5,
            questionText:
              'Look at the second paragraph of Text 2.\n\nIdentify one detail about the way the grandmother had kept the letters.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': 'They were arranged in order of date.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: they were arranged in order of date; each envelope was carefully preserved; she had kept hundreds of them.',
            ],
          },
          {
            id: 'edexcel-p2-c-q6',
            questionNumber: 6,
            questionText:
              "In Text 2, the writer tries to show why the grandmother's letters came to matter so much.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: EDEXCEL_P2_SET_C_SOURCE_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is successful in showing why the letters came to matter, because the memoir moves from the writer's first reaction to a deeper understanding.

The memoir begins with "I understand now", which tells the reader that the writer has learned something. The writer explains that the grandmother and her sister wrote to each other "For fifty years", which shows how strong their bond was.

In the second paragraph, the writer admits "I could have recycled them", because the letters "held no market value". This honesty makes the change in the third paragraph more powerful.

The third paragraph begins with the short sentence "Instead, I began to read." This is the turning point. The writer explains that the letters showed "a sister bond that persisted across continents", which shows how much the sisters loved each other.

The ending, "maintaining love across distance and time", sums up why the letters matter. However, the writer does not describe any of the letters in detail, so it is harder for the reader to feel their importance.`,
              'Grade 8-9': `The writer is largely successful, because the memoir is structured as a small journey of discovery, from duty to curiosity to understanding, and its restrained language makes the final judgement feel earned.

The opening sentence, "I understand now why my grandmother kept the letters.", tells us the conclusion first, which creates curiosity about how the writer reached it. The details of the correspondence, "For fifty years", "monthly", with a sister "who emigrated to Australia in 1952", establish its length and faithfulness. The writer is honest that the letters were "neither literary nor formally beautiful", and the list of their contents, "of weather, of children's achievements, of small grievances and larger joys", moves from the trivial to the emotional, hinting at what they really held.

The second paragraph describes the writer's first, practical response. The letters, "hundreds of them", were "arranged chronologically, each envelope carefully preserved", details that show the grandmother's care without stating it. The writer admits that they could simply have been thrown away: "I could have recycled them." This honesty is effective, because it makes the change that follows more convincing.

The third paragraph turns on "Instead, I began to read.", a short sentence that marks the moment of change. The phrase "the lived texture of a relationship" suggests something that can almost be touched, and the list of what the bond "survived", "separations and deaths and changing circumstances", shows its strength. The final oxymoron, "the ordinary extraordinary labour of maintaining love across distance and time", sums up why the letters matter: they are ordinary in content but extraordinary in what they show.

The text is less successful in one way. It tells us that the letters revealed a deep bond, but it never quotes or describes a single letter, so the reader must take the writer's word for it. A specific example might have been more moving. Even so, the memoir conveys clearly why the letters came to matter.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer shows why the letters came to matter, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the opening that gives the conclusion first; the details of fifty years of monthly letters; the honest admission that the letters were not literary and could have been recycled; the turning point, "Instead, I began to read."; the final oxymoron, "ordinary extraordinary labour".',
              "A balanced view is creditable, for example that no letter is quoted or described, so the reader must take the writer's word for their power.",
              ...EDEXCEL_P2_MARKS_Q6,
            ],
          },
          {
            id: 'edexcel-p2-c-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              'Both texts are about letters and messages between people who care about each other.\n\nWhat similarities are there between the ways the two writers describe them? Support each point with evidence from both texts.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EDEXCEL_P2_SET_C_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_C_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_C_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe letters that were kept for a long time. In Text 1 letters were kept "in shoeboxes and biscuit tins", and in Text 2 the grandmother kept hers in "a box beneath her bed". Both texts say that the letters were about everyday things: "the weather, the neighbours and the price of bread" in Text 1, and "weather" and "small grievances" in Text 2. Both texts also suggest that the letters were important because they showed people\'s lives and relationships, as people "wrote down their lives" in Text 1 and the letters showed "a sister bond" in Text 2.',
              'Grade 8-9':
                'Both texts describe letters kept for many years in boxes: the grandmother kept hers in "a box beneath her bed" for "fifty years", and the writer of Text 1 describes letters "tied with ribbon in shoeboxes and biscuit tins". Both describe letters about ordinary things, "weather" and "small grievances and larger joys" in Text 2, and "the weather, the neighbours and the price of bread" in Text 1. Both mention the distance letters had to travel, to the sister "who emigrated to Australia in 1952" and in letters that took "weeks to cross an ocean". Finally, both suggest that such ordinary letters become a record of a life, Text 1 saying that people "wrote down their lives" and Text 2 finding in them "the lived texture of a relationship".',
            },
            markScheme: [
              'Similarities could include: letters kept for many years in boxes; letters about ordinary, everyday things; the distance letters travelled; ordinary letters becoming a record of a life or a relationship.',
              ...EDEXCEL_P2_MARKS_Q7A,
            ],
          },
          {
            id: 'edexcel-p2-c-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about keeping letters and messages, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Text 1:\n${EDEXCEL_P2_SET_C_SOURCE_1}\n\nText 2:\n${EDEXCEL_P2_SET_C_SOURCE_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_SET_C_SOURCE_1_REF} | Text 2: ${EDEXCEL_P2_SET_C_SOURCE_2_REF}`,
            modelAnswers: {
              'Grade 6-7': `Both writers think that letters and messages are important records of relationships, but they present this differently. The writer of Text 2 describes finding the grandmother's letters and realising how much they meant. The writer of Text 1 worries that modern messages will be lost, because they "vanish".

Both writers think that ordinary letters can be valuable. In Text 2 the letters were "neither literary nor formally beautiful" but showed a strong bond. In Text 1 the writer says that people "wrote down their lives" without meaning to.

The tones are different. Text 2 is thoughtful and grateful. Text 1 is worried but also humorous, such as the ending about "a forgotten password".

The writers use different methods. Text 2 is a memoir that tells a personal story. Text 1 is an opinion article that gives advice, such as "Print a few." Overall, Text 2 shows why old letters matter, and Text 1 warns that we may not leave such letters behind.`,
              'Grade 8-9': `Both writers value written words that preserve a relationship, but the writer of Text 2 describes discovering that value in letters that survived, while the writer of Text 1 fears that today's messages will not survive at all.

The writer of Text 2 presents the letters as a personal discovery. At first they seemed worthless, with "no market value, no particular artistic merit", and the writer admits "I could have recycled them". Reading them changed everything: they became "testimony to the ordinary extraordinary labour of maintaining love across distance and time". The writer of Text 1 reaches the same idea about old letters from the outside, saying that people "wrote down their lives" almost "by accident", but uses it as a warning, because our own messages may "vanish".

Their attitudes to the present differ. Text 2 does not mention modern communication at all; its focus is on the past and on gratitude. Text 1 is concerned with the present, noting that "Apps are designed to make us reply quickly, not to make us remember", yet it is balanced, conceding that "The speed of modern messaging is a gift". Text 1 looks forward to a future in which someone "may want to know who we were"; Text 2 looks back on a past that someone wanted to keep.

Both writers suggest that ordinary words can become precious. In Text 2 the letters were "accounts: of weather, of children's achievements", and in Text 1 they were about "the weather, the neighbours and the price of bread". For both, the value lies not in literary quality but in faithfulness over time.

Their methods reflect their purposes. Text 2 is a reflective memoir that tells the story of one discovery, turning on the short sentence "Instead, I began to read." and ending with an oxymoron. Text 1 is an opinion article that opens with a confession, contrasts the generations, gives short commands, "Save them somewhere safe. Print a few.", and ends with the witty image of "a forgotten password". Read together, the texts suggest that the letters in Text 2 are exactly the kind of record that the writer of Text 1 fears our generation will not leave.`,
            },
            markScheme: [
              'Comparisons could include: both writers value written words that preserve a relationship, but Text 2 discovers that value in letters that survived and Text 1 fears modern messages will not survive; Text 2 looks back with gratitude, Text 1 looks ahead with concern while granting that speed is a gift; both find value in ordinary words; Text 2 is a memoir of one discovery that ends in an oxymoron, Text 1 an opinion article of confession, contrast and commands that ends in a witty image.',
              ...EDEXCEL_P2_MARKS_Q7B,
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-c-writing',
        title: 'Section B: Transactional Writing',
        description: EDEXCEL_P2_SECTION_B_GUIDANCE,
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-c-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText: `Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nWrite an article for a magazine for young people in which you persuade readers to keep a record of their lives, such as a diary, a journal or a box of letters and photographs.\n\nYou could write about:\n• why people forget so much of their lives\n• what a record could mean in the future\n• different ways of keeping one\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\n"Handwriting is no longer worth teaching in schools."\n\nWrite a speech for a debate at your school or college in which you argue for or against this statement.\n\nYou could write about:\n• how often people write by hand today\n• what handwriting offers that typing does not\n• how schools should spend their time\nand any other ideas of your own.\n\n${EDEXCEL_P2_WRITING_NOTE}`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: an article for a magazine for young people

Remember This: Why You Should Keep a Record of Your Life

Can you remember what you did on your tenth birthday? What about your first day at secondary school? Most of us forget far more of our lives than we realise. That is why I think every young person should keep a record of their life, whether it is a diary, a journal or a box of letters and photographs.

We forget so much because our lives are busy and full of new experiences. Every day, new memories push out old ones. We also take thousands of photos on our phones, but we rarely look at them again, and they can easily be lost if a phone breaks.

A record of your life could mean a lot in the future. When you are older, you will be able to look back and remember how you felt, what made you laugh and what you worried about. You might even share it with your own children or grandchildren one day. Think about how fascinating it would be to read a diary written by your grandparents when they were your age.

There are many different ways to keep a record. You could write a few lines in a diary every night before you go to bed. You could keep a scrapbook with tickets, photos and notes from special days. Some people like to write letters to their future selves and open them years later. Even saving your favourite messages from friends in a special folder is a good start.

Keeping a record does not have to take much time. Just ten minutes a week can make a big difference.

In conclusion, keeping a record of your life is a simple way to make sure your memories are not lost. Start today, and one day you will be glad you did.`,
              'Grade 8-9': `Question 9: a speech for a debate, against the statement

Good morning, everyone. I want to begin by asking you to remember the last time somebody wrote you a letter by hand. Not a text, not an email, not a message that vanished after a day, but a piece of paper with their handwriting on it. Some of you are smiling. I suspect you can remember exactly what it said.

That is my first argument against the motion. Handwriting is personal in a way that typing never can be. When my grandfather died last year, the most precious thing he left was not money or furniture. It was a birthday card he had written to me when I was six, in his careful, looping hand. A typed message would have said the same words. It would not have been him.

My opponents will say that this is sentimental, and that schools should prepare us for the real world, where almost everything is typed. They are right that we type more than we write. But they are wrong to think that handwriting is therefore useless. Some studies have suggested that students who take notes by hand remember more than those who type, because writing slowly forces us to think about what matters. And most of us still sit our examinations with a pen. A school that stopped teaching handwriting would be sending its students into the exam hall unprepared.

Handwriting also teaches patience and care. In a world of instant messages and autocorrect, there is value in a skill that cannot be hurried: in forming each letter, in seeing your own work take shape on the page. It is no accident that so many artists, writers and scientists still begin their ideas with a pencil and a notebook.

None of this means that we should spend hours practising copperplate, or that typing does not matter. Of course schools should teach us to type quickly and well. The question is not handwriting or typing; it is whether we throw away a skill that has served people for thousands of years simply because a newer one has arrived.

So I urge you to vote against the motion. Teach us to type, by all means. But do not take away our pens. One day, someone may want to read what we wrote, in our own hand. Let us make sure that we can still give them something to read. Thank you.`,
            },
            markScheme: [
              'Question 8 (an article for a magazine for young people): a headline and an engaging opening; a clear, persuasive explanation of why a record matters; practical suggestions for different ways of keeping one; a lively register that suits young readers.',
              'Question 9 (a speech for a debate): a clear position for or against the statement, sustained throughout; spoken features such as direct address and an anecdote; developed reasons about what handwriting offers and what schools need; an answer to the other side.',
              ...EDEXCEL_P2_MARKS_WRITING,
            ],
          },
        ],
      },
    ],
  },
]
