// @ts-nocheck

/**
 * OCR GCSE English Language Component 02, Exploring effects and impact
 * (J351/02): five mock papers, ocr-p2-01 to ocr-p2-05, each built on a
 * passage written for this site and one from F. Scott Fitzgerald's The Great
 * Gatsby. Live: served through allMockExamPapers.
 *
 * RESTRUCTURED 31 OCTOBER 2026, so that each paper is OCR's real paper. The
 * fault was found on 24 October 2026, the day the AI marker was corrected to
 * mark each paper as its board does.
 *
 * WHAT WAS WRONG. Each paper printed one passage and set questions worth 4,
 * 8, 12, 16 and 40 marks: an 8-mark question on language alone, a 12-mark
 * question on structure alone, a 16-mark evaluation of the one passage, and
 * one writing question said to be marked 32 for content and 8 for accuracy,
 * whose two options were a description and the opening of a story. OCR's
 * J351/02 is not that paper (src/data/mark-scheme-guides/ocr-lang-component02.ts). Its
 * Reading Insert holds two texts, both 20th or 21st-century literary prose.
 * Section A sets Question 1 (4 marks, short answers on Text 1), Question 2
 * (6 marks, language and structure in a short part of Text 1), Question 3
 * (12 marks, language and structure in Text 2) and Question 4 (18 marks, a
 * statement about both texts, evaluated for 12 and compared for 6). Section
 * B sets Question 5 or Question 6, one piece of creative writing for 40
 * marks (24 for content and organisation, 16 for technical accuracy); in
 * the papers the guide was checked against (OCR's sample paper and June
 * 2024), the tasks are a story from a given title and personal writing
 * about an experience. A student practising these
 * mocks sat an exam that does not exist, and an answer sent to the marker
 * found no question of its worth, so it got general feedback with no marks
 * (src/__tests__/a-language-mock-is-the-boards-paper.test.ts).
 *
 * WHAT IT IS NOW. Each paper is OCR's: two sections of 40 marks and about an
 * hour each; Questions 1 to 4 worth 4, 6, 12 and 18; and the writing as one
 * question worth 40, labelled "Q5 or Q6", with both tasks in it. Questions 2
 * and 3 ask about language and structure together, as OCR's do. Text 2 is
 * the passage each paper already printed, word for word. Each was written
 * for this site, and its label now says so in plain words. Text 1, which
 * every paper lacked, is a passage of F. Scott Fitzgerald's The Great Gatsby
 * (1925), chosen to share a theme with Text 2 for Question 4. Fitzgerald died
 * in 1940, so the novel is out of UK copyright. Each passage was cut by
 * script from src/data/full-texts/the-great-gatsby.ts, in whole paragraphs,
 * except that Paper 2's stops at a sentence end inside its third paragraph;
 * only the italic markers are dropped. The novel is not a GCSE set text, so
 * it is unseen, as OCR's texts are; Animal Farm, the other 20th-century prose
 * held, is one of OCR's own Literature set texts and was not used. Every
 * question, mark scheme and model answer is new, because the old ones were
 * written for other questions. Where a question names part of a text it
 * quotes that part's first and last words, since the page prints no line
 * numbers. Each question worth 6 marks or more has one strong model answer,
 * filed under Grade 8-9; each model answer quotes the text its question
 * prints, word for word.
 *
 * Since 31 October 2026 scripts/check-mock-exam-extracts.mjs knows the novel
 * and checks each Fitzgerald passage against the held text: all five match it
 * in full. (Until then it had no entry for Gatsby and could not check them.)
 *
 * SECOND READING, 31 October 2026, by a checker who did not write the papers,
 * against the two texts each paper prints, the novel, the guide and the
 * marker's scheme. Every quotation of any length was checked by script
 * against the text its question prints. Fixed:
 * - P1 Q3: "slow, vegetable patience" called a paradox; it gives a plant a
 *   human quality, so it is now personification.
 * - P1 Q3: the sound "defined only by what it is not", though it is also
 *   "low, rhythmic"; now "mostly".
 * - P1 Q3: "Clara stopped." called the shortest sentence, which ties with
 *   "Probate complications."; now "a two-word sentence".
 * - P1 Q3: "The last words" quoted words that are not the last; now "The last
 *   sentence".
 * - P2 Q4: the blackbird said to "watch" the waste, though the text calls it
 *   "indifferent"; answer and mark scheme now say it ignores the ruin.
 * - P3 Q1(c): credited Gatsby's "elaborate formality of speech", which Nick
 *   notices after the introduction, for what he noticed before it; dropped.
 * - P3 Q4: "Nadia's observed smile" read as her own (it is the woman's in the
 *   blue coat); and she "slips back into her role", which the text does not
 *   say. Both rewritten.
 * - P4: the context line had Gatsby "go with" Nick, as if on the train; it
 *   now says they arrive at the house together, as the passage shows.
 * - P4 Q1(c): asked about the newspaper that part (a) already credits, so one
 *   detail could score twice; it now asks what the woman drops.
 * - P4 Q2 and Q4: the butler's reply called "misheard"; Nick imagines it and
 *   corrects himself ("What he really said was"). Now so.
 * - P4 Q4: "the whole village" quoted lower-case where the text has "The";
 *   requoted.
 * - P5: the context line had Nick leave "at the end of a summer"; he leaves
 *   after "late in October" (Chapter IX), so now autumn.
 * - This docblock said the extract check could not verify the Gatsby
 *   passages, and that all were whole paragraphs; corrected above.
 *
 * OCR'S WORDING. On 31 October 2026 every question was compared with fourteen
 * of OCR's J351/02 papers (June 2017 to June 2025) and its sample paper.
 * Sentences that copied OCR's, or changed only a word or two of them, now ask
 * the same thing in this site's words, as ocr-p2-c.ts does; the question
 * stems ("How does the writer use language and structure to", "Explore how
 * the writer presents") are the task itself and stay, as there. Question 1
 * needed no change.
 * - Q2, 31 October 2026: "Support your answer with quotations, using relevant
 *   subject terminology" joined OCR's Question 2 and 3 sentences; now "Back up
 *   your points with short quotations from these lines and relevant subject
 *   terminology", as in ocr-p2-c.ts.
 * - Q3, 31 October 2026: OCR's "Support your ideas by referring to the
 *   language and structure of this section, using relevant subject
 *   terminology" (sample paper, 2017 and June 2018), with "the text" for "this
 *   section"; now ocr-p2-c.ts's "Write about both the language and the
 *   structure of the text, backing up your points with short quotations and
 *   relevant subject terminology".
 * - Q4, 31 October 2026: OCR's "How far do you agree with this statement?",
 *   "In your answer you should:" and "Support your response with quotations
 *   from both texts" (with "answer") are now ocr-p2-c.ts's "Say how far you
 *   agree with this statement, and why.", "In your answer:" and "quote from
 *   both texts to back up your points."; OCR's bullet "compare the ways the
 *   writers present" is now "compare the methods each writer uses to
 *   present", not ocr-p2-c.ts's "compare how the two writers present", which
 *   is OCR's June 2025 bullet ("compare how the writers present") with "two"
 *   added.
 * - Q5 and Q6, 31 October 2026: P3's "choose a clear point of view and keep
 *   to it" (OCR's "choose a clear viewpoint", words added) is now P5's
 *   "choose a narrator and keep to their point of view"; P4's "explain how it
 *   affected what you did and how you felt" (OCR's June 2024 "how it affected
 *   your thoughts and feelings") is now "explain how the weather shaped what
 *   you did and how you felt". Left as ocr-p2-c.ts has them, for one decision
 *   across the bank: "In your writing you could:" (OCR has "should") and
 *   "choose a narrator and a clear point of view".
 *
 * The notes below, from 27 September 2026, describe the model answers these
 * papers printed until 31 October 2026. Those answers have been replaced; the
 * five passages they checked are each paper's Text 2 now, unchanged.
 */

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * The five extracts are specially written for this bank and labelled as
 * original compositions; none names a real author and none was changed. All
 * five papers are live. The model answers were not in step with them:
 *   - quotations whose words are not the extract's: "sailor reading the sky"
 *     (the text has "a sailor reads the sky"); "uncertain of her welcome",
 *     twice (the narrator generalises, "When you grow up uncertain of your
 *     welcome"); the rock "protruding like" (it "protruded from the riverbed
 *     like"); "Water remembers" (the grandfather says "The river remembers");
 *     "furring" and "arranging her features" (the text has "furred" and
 *     "arranged"); the forest floor as a "forgotten language" (a book written
 *     in "a language most people had forgotten how to read");
 *   - eight quotations that joined the text's words with words left out and
 *     no ellipsis: the grandfather's lines without "Tom", the revealed objects
 *     without "furred with algae", the forest's closing line four times
 *     without "she wrote", the forest floor as a "book in a language" without
 *     "written", and the fungal threads without "mycorrhizal connections".
 *     Each is now quoted whole;
 *   - two allusions: Keats's line quoted as "joy forever" (Endymion has "a joy
 *     for ever", checked against Project Gutenberg eBook #24280), and
 *     Tennyson's "red in tooth and claw" (In Memoriam, #70950) set in brackets
 *     as though the extract said it. It is now attributed to him;
 *   - case and commas: "silently screaming", four times, where the text has
 *     "silently, screaming" (a Grade 8-9 answer builds its point on those
 *     commas), and "the problem" and "not in any supernatural sense" where the
 *     text opens each with a capital;
 *   - wrong terms: the crowd image ("It was like walking through a crowd")
 *     called a metaphor four times, when it is a simile; a question introduced
 *     by "Nadia wondered" called free indirect discourse; "was sending" called
 *     present progressive; a colon after "empty was not the right word", which
 *     ends in a full stop; the estate agent's quoted words called "reported
 *     form"; "dramatic irony" where Clara knows what the reader knows; Paper
 *     4's past-tense opening called "an extended present tense"; the numbness
 *     climbing "with the slow deliberation of rising water", which has no
 *     comparing word ("like", "as", "the way"), called a simile; and Paper 2's
 *     parenthesis quoted inside brackets, when the text sets it between dashes;
 *   - things the extract does not say: Tom in his grandfather's "chair" (he
 *     sits on the porch where his grandfather used to sit); "smell" among the
 *     senses of Paper 5's opening (none is described); the oak's carbon going
 *     to "younger trees" (it goes to the trees around it); "She says" of what
 *     the narration says; "skill" in quotation marks, a word the extract never
 *     uses; "the opening clause" for the second sentence; "the pivotal
 *     sentence" for two; and "the closing sentence" for one clause of it.
 *
 * WHAT IT IS NOW. Every quotation in a model answer, of any length, is in its
 * extract word for word, case and inner punctuation included, except the
 * question's own words ("curse", "end of childhood innocence", "indifference")
 * and the two allusions, which are named as Keats's and Tennyson's. The
 * checker covers quotations of four words or more; the shorter ones were
 * checked by a one-off script against the same extracts. Where a quotation
 * changed, the sentence round it was reread so that its analysis is still
 * true of the words now quoted.
 *
 * A SECOND READING (27 September 2026) found that claim still untrue in one
 * place, and more claims about the words that the extracts do not bear out.
 * Fixed: "The last beautiful thing ..." opened a sentence with a capital the
 * text does not have; Paper 4's "ashamed" was said to introduce a register
 * "the first paragraphs withheld", when the opening's water already crept
 * "like something ashamed of itself"; "The river had kept its secrets for
 * years" called a sentence (it is a clause of one); Paper 4's first paragraph
 * said to show Tom looking at the river (he looks in the second); the porch
 * called a "circular return" (it is not in the opening); Ellis said to "shed"
 * tears and "cry" (his eyes fill with tears); Paper 2's structure called "two
 * halves" (it runs three paragraphs, then one, then one); Paper 5's fourth
 * paragraph called a soundscape and a move "into sound" with the buzzard in
 * it (the buzzard is seen circling), and a "sensory inventory" giving sight
 * to the second paragraph, which the same answer says is about what cannot
 * be seen; Paper 5's opening scale called "microscopic" (the growth is seen
 * and touched, not magnified) and the forest, not the forest floor, called a
 * text; "vegetable patience" called an oxymoron in one answer and a paradox
 * in the next (now a paradox in both);
 * "growing", "creeping" and "reaching" called "progressive verbs" (they are
 * present participles); and the opening sentence given an "isolated
 * position", when a second sentence follows it in the same paragraph.
 */

import type { MockExamPaper } from './types'

// ─── Text 2 of each paper: passages written for this site ───────────────────
// Kept word for word from the papers as they were before 31 October 2026.

const EXTRACT_01 = `The house had been waiting. That was the only way to explain the quality of its silence - not the passive quiet of an empty building, but the held-breath stillness of something that knows you are coming and has prepared itself accordingly.

Clara pushed the front door and it swung inward without resistance, as though the house were inviting her inside. The hallway stretched ahead, long and narrow, papered in a pattern of dark green vines that seemed, in the failing light, to be growing - creeping upward from the skirting boards and reaching toward the ceiling with slow, vegetable patience. The air was thick and sweet, like overripe fruit, and beneath it was something else: a cold, mineral smell, the scent of stone and standing water.

She had been told the house was empty. The estate agent had said so quite clearly, smiling his professional smile: "Vacant for three years. Probate complications." But empty was not the right word. Every room she passed seemed occupied by the memory of its former inhabitants. A chair stood at an angle to the fireplace, as though someone had just risen from it. A book lay open on a side table, its pages yellowed and curled, frozen mid-sentence. In the kitchen, a single cup sat on the draining board, a dark ring of tannin marking where the tea had been.

It was in the upstairs corridor that she first heard it. A low, rhythmic sound from behind the door at the far end - not quite breathing, not quite tapping, but something between the two. A sound that had no business existing in a house that had been empty for three years.

Clara stopped. The corridor seemed to lengthen before her, the door at its end receding with each heartbeat. The wallpaper vines twisted in her peripheral vision. And the sound continued - patient, unhurried, certain - as though it had been waiting, just as the house had been waiting, for someone to come and hear it.`

const EXTRACT_01_SOURCE =
  'Specially written for this practice paper: an original Gothic story, not from a published book'

const EXTRACT_02 = `The bombardment had stopped an hour ago but the silence that followed was worse. It was a silence that pressed against the eardrums, a silence so complete that Private Ellis could hear the blood moving through his own veins and the small, wet sounds of the mud beneath him adjusting to the absence of concussion.

He lay in the crater with his face against the earth, breathing in the smell of churned soil and cordite and something sweet and terrible that he would not name. His left arm was beneath him at an angle that could not be natural, but he felt no pain - only a spreading numbness that seemed to be climbing from his fingers toward his shoulder with the slow deliberation of rising water.

Around him, the landscape had been remade. Where once there had been fields - he had seen the photographs, the gentle farmland of northern France - there was now a moonscape of craters and shattered stumps, everything reduced to the same uniform brown. The wire coiled between the lines like brambles from a nightmare, and here and there, shapes lay among the mud that he forced his eyes to skip over, registering them only as interruptions in the terrain.

A bird sang. The sound was so unexpected, so absurdly beautiful in that wrecked place, that Ellis felt his eyes fill with tears. It was a blackbird, perched on the stump of what had once been an oak tree, and it sang as though nothing had happened - as though the world were still whole, still green, still capable of mornings. The melody rose and fell in the grey air, each note as precise and deliberate as a struck bell.

Ellis closed his eyes. The numbness had reached his elbow now. Above him, the blackbird continued its song, indifferent and magnificent, the last beautiful thing in a world that had forgotten what beauty was.`

const EXTRACT_02_SOURCE =
  'Specially written for this practice paper: an original story set in the First World War, not from a published book'

const EXTRACT_03 = `She had always been good at knowing what other people were thinking. Not in any supernatural sense - she did not believe in mind-reading, or auras, or any of the things her mother had believed in - but in the ordinary, observable way of someone who had spent her childhood watching faces. When you grow up uncertain of your welcome, you learn to read a room the way a sailor reads the sky: constantly, instinctively, with a vigilance that becomes so habitual you forget it is there.

Nadia sat in the therapist's waiting room and studied the other patients. The man by the window was afraid but trying to hide it - she could tell by the way he held his magazine, gripping it too tightly, his eyes fixed on a single point on the page. The woman in the blue coat was angry, though she was smiling - the smile sat on her face like an object placed there by someone else, and beneath it her jaw was clenched so hard that the muscles in her temples flickered.

These observations came to Nadia without effort, the way breathing came, the way blinking came. The problem - the reason she was here, in this room with its neutral carpet and its careful watercolours and its box of tissues placed just so on the low table - was that she could not turn it off. She read people the way other people read words: automatically, compulsively, unable to look at a face without decoding it. And the thing about reading people is that most of what you find is pain. Concealed, managed, compartmentalised pain - but pain nonetheless.

It was exhausting. It was like walking through a crowd of people who were all, silently, screaming.

Her name was called. She stood, smoothed her skirt, arranged her features into an expression of calm competence - she was good at that, very good, she had practised it since she was seven years old - and walked toward the door. The therapist would see a composed young woman. Nadia wondered, with the detachment that was her particular defence, how long it would take for someone trained in reading people to see past the person Nadia had built and find the one she had hidden.`

const EXTRACT_03_SOURCE =
  'Specially written for this practice paper: an original story, not from a published book'

const EXTRACT_04 = `The summer Tom turned fourteen was the summer the river dried up. Not completely - there was still a trickle at the deepest point, a thin thread of brown water that crept between the exposed stones like something ashamed of itself - but enough that the old swimming hole where three generations of children had learned to dive was reduced to a muddy depression fringed with cracked earth.

Tom stood on the bank and looked at what remained. The rope swing still hung from the oak branch, its frayed end dangling above dry ground, and the flat rock where his father had sunbathed as a boy protruded from the riverbed like a grey shoulder shrugging itself free. Everything that had been hidden beneath the water was now revealed: rusted cans, a bicycle wheel furred with algae, the broken neck of a bottle glinting in the sun. The river had kept its secrets for years, and now, stripped bare, it looked ashamed.

His grandfather had warned him this would happen. "The river remembers," the old man had said, sitting in his chair on the porch with his hands folded over his stick and his eyes fixed on something Tom could not see. "It remembers when it was wide and deep and cold, and it remembers every summer they took more than they gave back. Water has a longer memory than people, Tom. Water holds a grudge."

Tom had not understood then. He was beginning to understand now. The fields beyond the river were yellow where they should have been green, and the cattle stood in whatever shade they could find, their sides heaving. Mrs Kenworth's garden, which had won prizes every year since before Tom was born, was a cemetery of brown stalks. The whole village seemed to be holding its breath, waiting for rain that the sky refused to deliver.

That evening, Tom sat on the porch where his grandfather used to sit and watched the sun go down over the dry riverbed. He was fourteen years old, and he understood for the first time that things did not last - that the world he had assumed was permanent was, in fact, as fragile as the thread of water still creeping between the stones.`

const EXTRACT_04_SOURCE =
  'Specially written for this practice paper: an original coming-of-age story, not from a published book'

const EXTRACT_05 = `The forest floor was a book written in a language most people had forgotten how to read. Dr Anya Marsh crouched beside a fallen oak and traced the lines of fungal growth that spread across its bark in patterns as intricate as circuitry. Beneath her fingers, the wood was soft and warm - not the warmth of sunlight, but the warmth of decomposition, of a thousand organisms converting death into the raw materials of new life.

She had been studying this particular patch of ancient woodland for seven years, and in that time she had come to understand something that still astonished her: the trees were talking to each other. Not in words, not in any way that would satisfy the sceptics who dismissed her research as anthropomorphism, but through a network of fungal threads - mycorrhizal connections - that linked root to root beneath the soil in a web of mutual exchange. Carbon, nitrogen, phosphorus, water: the currency of survival, traded between species in transactions that defied the competitive model of evolution she had been taught as an undergraduate.

The old oak she knelt beside was dying. Its crown was thin, its bark splitting, its roots weakened by decades of drought and disease. But it was not dying alone. Through the fungal network, it was sending its remaining carbon stores outward - to the young birches at the clearing's edge, to the holly that grew in its shadow, even to the beech on the far side of the ridge. It was, in the only language available to it, saying goodbye. Or perhaps it was saying something more practical: here, take this, use it, grow.

Above her, a buzzard circled in the thermals, and somewhere deeper in the wood a woodpecker drummed its rapid, purposeful percussion against dead timber. The forest was never silent, Anya reflected, if you knew how to listen. It spoke in the creak of branches, in the whisper of leaves turning in the wind, in the slow, patient conversation of roots beneath the earth.

She stood, brushed the soil from her knees, and recorded her observations in the battered notebook she carried everywhere. The old oak would be dead within a year. But its legacy would persist in every tree it had fed, every seedling it had sheltered, every thread of fungal connection it had maintained. Nothing in a forest, she wrote, is ever truly lost. It is only translated.`

const EXTRACT_05_SOURCE =
  'Specially written for this practice paper: an original story about a scientist, not from a published book'

// ─── Text 1 of each paper: F. Scott Fitzgerald, The Great Gatsby (1925) ──────
// Cut by script, in whole paragraphs (GATSBY_02 ends at a sentence end, as its
// note says), from src/data/full-texts/the-great-gatsby.ts (the 1925 first
// edition as transcribed and checked against the page scans by Wikisource).
// Italic markers are dropped; nothing else is changed, including the
// edition's American spelling and its punctuation.

// Chapter I, paragraphs 18-27.
const GATSBY_01 = `And so it happened that on a warm windy evening I drove over to East Egg to see two old friends whom I scarcely knew at all. Their house was even more elaborate than I expected, a cheerful red-and-white Georgian Colonial mansion, overlooking the bay. The lawn started at the beach and ran toward the front door for a quarter of a mile, jumping over sun-dials and brick walks and burning gardens—finally when it reached the house drifting up the side in bright vines as though from the momentum of its run. The front was broken by a line of French windows, glowing now with reflected gold and wide open to the warm windy afternoon, and Tom Buchanan in riding clothes was standing with his legs apart on the front porch.

He had changed since his New Haven years. Now he was a sturdy straw-haired man of thirty with a rather hard mouth and a supercilious manner. Two shining arrogant eyes had established dominance over his face and gave him the appearance of always leaning aggressively forward. Not even the effeminate swank of his riding clothes could hide the enormous power of that body—he seemed to fill those glistening boots until he strained the top lacing, and you could see a great pack of muscle shifting when his shoulder moved under his thin coat. It was a body capable of enormous leverage—a cruel body.

His speaking voice, a gruff husky tenor, added to the impression of fractiousness he conveyed. There was a touch of paternal contempt in it, even toward people he liked—and there were men at New Haven who had hated his guts.

“Now, don’t think my opinion on these matters is final,” he seemed to say, “just because I’m stronger and more of a man than you are.” We were in the same senior society, and while we were never intimate I always had the impression that he approved of me and wanted me to like him with some harsh, defiant wistfulness of his own.

We talked for a few minutes on the sunny porch.

“I’ve got a nice place here,” he said, his eyes flashing about restlessly.

Turning me around by one arm, he moved a broad flat hand along the front vista, including in its sweep a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat that bumped the tide offshore.

“It belonged to Demaine, the oil man.” He turned me around again, politely and abruptly. “We'll go inside.”

We walked through a high hallway into a bright rosy-colored space, fragilely bound into the house by French windows at either end. The windows were ajar and gleaming white against the fresh grass outside that seemed to grow a little way into the house. A breeze blew through the room, blew curtains in at one end and out the other like pale flags, twisting them up toward the frosted wedding-cake of the ceiling, and then rippled over the wine-colored rug, making a shadow on it as wind does on the sea.

The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon. They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house. I must have stood for a few moments listening to the whip and snap of the curtains and the groan of a picture on the wall. Then there was a boom as Tom Buchanan shut the rear windows and the caught wind died out about the room, and the curtains and the rugs and the two young women ballooned slowly to the floor.`

const GATSBY_01_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter I'

// Chapter II, paragraphs 1-3, the last cut at a sentence end.
const GATSBY_02 = `About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land. This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of ash-gray men, who move dimly and already crumbling through the powdery air. Occasionally a line of gray cars crawls along an invisible track, gives out a ghastly creak, and comes to rest, and immediately the ash-gray men swarm up with leaden spades and stir up an impenetrable cloud, which screens their obscure operations from your sight.

But above the gray land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg. The eyes of Doctor T. J. Eckleburg are blue and gigantic—their retinas are one yard high. They look out of no face, but, instead, from a pair of enormous yellow spectacles which pass over a nonexistent nose. Evidently some wild wag of an oculist set them there to fatten his practice in the borough of Queens, and then sank down himself into eternal blindness, or forgot them and moved away. But his eyes, dimmed a little by many paintless days, under sun and rain, brood on over the solemn dumping ground.

The valley of ashes is bounded on one side by a small foul river, and, when the drawbridge is up to let barges through, the passengers on waiting trains can stare at the dismal scene for as long as half an hour.`

const GATSBY_02_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter II'

// Chapter III, paragraphs 71-87.
const GATSBY_03 = `“Much better.” I turned again to my new acquaintance. “This is an unusual party for me. I haven’t even seen the host. I live over there—” I waved my hand at the invisible hedge in the distance, “and this man Gatsby sent over his chauffeur with an invitation.”

For a moment he looked at me as if he failed to understand.

“I’m Gatsby,” he said suddenly.

“What!” I exclaimed. “Oh, I beg your pardon.”

“I thought you knew, old sport. I’m afraid I’m not a very good host.”

He smiled understandingly—much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced—or seemed to face—the whole eternal world for an instant, and then concentrated on you with an irresistible prejudice in your favor. It understood you just so far as you wanted to be understood, believed in you as you would like to believe in yourself, and assured you that it had precisely the impression of you that, at your best, you hoped to convey. Precisely at that point it vanished—and I was looking at an elegant young rough-neck, a year or two over thirty, whose elaborate formality of speech just missed being absurd. Some time before he introduced himself I’d got a strong impression that he was picking his words with care.

Almost at the moment when Mr. Gatsby identified himself a butler hurried toward him with the information that Chicago was calling him on the wire. He excused himself with a small bow that included each of us in turn.

“If you want anything just ask for it, old sport,” he urged me. “Excuse me. I will rejoin you later.”

When he was gone I turned immediately to Jordan—constrained to assure her of my surprise. I had expected that Mr. Gatsby would be a florid and corpulent person in his middle years.

“Who is he?” I demanded. “Do you know?”

“He’s just a man named Gatsby.”

“Where is he from, I mean? And what does he do?”

“Now you’re started on the subject,” she answered with a wan smile. “Well, he told me once he was an Oxford man.”

A dim background started to take shape behind him, but at her next remark it faded away.

“However, I don’t believe it.”

“Why not?”

“I don’t know,” she insisted, “I just don’t think he went there.”`

const GATSBY_03_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter III'

// Chapter VII, paragraphs 19-29.
const GATSBY_04 = `The next day was broiling, almost the last, certainly the warmest, of the summer. As my train emerged from the tunnel into sunlight, only the hot whistles of the National Biscuit Company broke the simmering hush at noon. The straw seats of the car hovered on the edge of combustion; the woman next to me perspired delicately for a while into her white shirtwaist, and then, as her newspaper dampened under her fingers, lapsed despairingly into deep heat with a desolate cry. Her pocket-book slapped to the floor.

“Oh, my!” she gasped.

I picked it up with a weary bend and handed it back to her, holding it at arm’s length and by the extreme tip of the corners to indicate that I had no designs upon it—but every one near by, including the woman, suspected me just the same.

“Hot!” said the conductor to familiar faces. “Some weather! . . . Hot! . . . Hot! . . . Hot! . . . Is it hot enough for you? Is it hot? Is it . . .?”

My commutation ticket came back to me with a dark stain from his hand. That any one should care in this heat whose flushed lips he kissed, whose head made damp the pajama pocket over his heart!

. . . Through the hall of the Buchanans’ house blew a faint wind, carrying the sound of the telephone bell out to Gatsby and me as we waited at the door.

“The master’s body!” roared the butler into the mouthpiece. “I’m sorry, madame, but we can’t furnish it—it’s far too hot to touch this noon!”

What he really said was: “Yes . . . Yes . . . I’ll see.”

He set down the receiver and came toward us, glistening slightly, to take our stiff straw hats.

“Madame expects you in the salon!” he cried, needlessly indicating the direction. In this heat every extra gesture was an affront to the common store of life.

The room, shadowed well with awnings, was dark and cool. Daisy and Jordan lay upon an enormous couch, like silver idols weighing down their own white dresses against the singing breeze of the fans.`

const GATSBY_04_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter VII'

// Chapter IX, paragraphs 165-168.
const GATSBY_05 = `I spent my Saturday nights in New York because those gleaming, dazzling parties of his were with me so vividly that I could still hear the music and the laughter, faint and incessant, from his garden, and the cars going up and down his drive. One night I did hear a material car there, and saw its lights stop at his front steps. But I didn’t investigate. Probably it was some final guest who had been away at the ends of the earth and didn’t know that the party was over.

On the last night, with my trunk packed and my car sold to the grocer, I went over and looked at that huge incoherent failure of a house once more. On the white steps an obscene word, scrawled by some boy with a piece of brick, stood out clearly in the moonlight, and I erased it, drawing my shoe raspingly along the stone. Then I wandered down to the beach and sprawled out on the sand.

Most of the big shore places were closed now and there were hardly any lights except the shadowy, moving glow of a ferryboat across the Sound. And as the moon rose higher the inessential houses began to melt away until gradually I became aware of the old island here that flowered once for Dutch sailors’ eyes—a fresh, green breast of the new world. Its vanished trees, the trees that had made way for Gatsby’s house, had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an esthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.

And as I sat there brooding on the old, unknown world, I thought of Gatsby’s wonder when he first picked out the green light at the end of Daisy’s dock. He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it. He did not know that it was already behind him, somewhere back in that vast obscurity beyond the city, where the dark fields of the republic rolled on under the night.`

const GATSBY_05_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter IX'

// ─── Level descriptors ──────────────────────────────────────────────────────
// This site's own words, adapted from the guide
// (src/data/mark-scheme-guides/ocr-lang-component02.ts). OCR's descriptors are
// its copyright and are not copied.

/** Question 2: six marks, one a level, language and structure together. */
const Q2_LEVELS = [
  '6 marks: analyses language and structure in consistent depth and with subtlety; exact subject terms strengthen every point.',
  '5 marks: insightful analysis that gives language and structure fairly even, detailed attention; terms fit naturally.',
  '4 marks: explains with understanding what both the language and the structure do, though one may get more attention than the other.',
  '3 marks: explains some effects clearly and mentions both language and structure, though not both fully.',
  '2 marks: notices some features, but mostly of either language or structure, and names more than it explains.',
  '1 mark: describes or retells the lines, with little sense of how the writer creates the effect and few or no subject terms.',
]

/** Question 3: twelve marks, two a level, language and structure together. */
const Q3_LEVELS = [
  '11-12 marks: detailed, subtle analysis of language and structure in every point, showing exactly how the writer shapes what the reader feels; terms are exact and strengthen the argument.',
  '9-10 marks: insightful analysis that gives language and structure fairly even, detailed attention; terms fit naturally into the explanations.',
  '7-8 marks: explains in some depth what both the language and the structure do, though one may get more attention than the other; terms help to develop the points.',
  '5-6 marks: explains some effects clearly and mentions both language and structure, though one is explained less fully; some useful terms.',
  '3-4 marks: notices some features, but says much more about either language or structure than the other, and often names features without explaining them; some terms, not always relevant ones.',
  '1-2 marks: mostly describes or retells the lines, with little sense of how the writer creates effects and few or no subject terms.',
]

/** Question 4, evaluation (AO4): twelve marks, two a level. */
const Q4_AO4_LEVELS = [
  '11-12 marks: judges the statement sharply and with balance from start to finish, explains fully how both texts work on the reader, and builds exactly the right quotations into the argument.',
  '9-10 marks: weighs up the statement with care, explains clearly how the texts affect the reader, and picks quotations that make the case convincing.',
  '7-8 marks: develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
  '5-6 marks: makes clear judgements on the statement, with some sense of how the texts affect a reader, backed by suitable quotations.',
  '3-4 marks: gives simple judgements on the statement, notices a little of the effect on the reader, and uses some suitable quotations.',
  '1-2 marks: mostly retells the texts or copies out lines, with little real judgement of the statement.',
]

/** Question 4, comparison (AO3): six marks, one a level. */
const Q4_AO3_LEVELS = [
  '6 marks: moves between the two texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
  '5 marks: keeps the comparison going through the whole answer, covering both ideas and methods.',
  '4 marks: develops the comparison of both what the writers think and how they show it.',
  "3 marks: sets the writers' ideas side by side clearly, and begins to compare their methods too.",
  "2 marks: identifies the main ways in which the writers' ideas are alike or different.",
  "1 mark: notes one or two basic likenesses or differences between the writers' ideas.",
]

/** Questions 5 and 6, content and organisation (AO5): twenty-four marks on six levels. */
const WRITING_AO5_LEVELS = [
  '21-24 marks: every part of the piece is shaped on purpose to work on the reader; bold, well-judged choices of voice and style; a structure fully under control and used for a range of effects.',
  '17-20 marks: confident writing whose voice and style suit the task from start to finish; firmly shaped, with paragraphs and sentences planned to do particular jobs for the reader.',
  '13-16 marks: handles the form clearly, with a voice and style that suit the task; well organised, sometimes using its structure for effect.',
  '9-12 marks: stays with the task and keeps the reader in mind; the tone is right but slips at times; a clear overall shape, and paragraphs mostly work.',
  '5-8 marks: mostly keeps to the task, tries for a fitting tone, and shows some organisation through paragraphs and links.',
  '1-4 marks: some attempt at the kind of writing asked for, with little sense of the reader or of a planned shape.',
]

/** Questions 5 and 6, technical accuracy (AO6): sixteen marks on four levels. */
const WRITING_AO6_LEVELS = [
  '13-16 marks: bold, varied sentences built to give each idea its full force; punctuation accurate and chosen for effect as well as clarity; precise vocabulary; even difficult words spelt correctly, with only the very occasional slip.',
  '9-12 marks: sentences varied widely and on purpose; punctuation accurate throughout and making the meaning clear; some ambitious vocabulary that works; longer words spelt correctly, with the odd slip on unusual ones.',
  '5-8 marks: different kinds of sentence, mostly correct and now and then used for effect; punctuation usually right; some words clearly chosen for effect; a few spelling slips.',
  '1-4 marks: mostly simple sentences with some longer ones attempted; uneven punctuation; plain but relevant vocabulary; everyday words largely spelt correctly.',
]

// ─── Exam Papers ────────────────────────────────────────────────────────────

export const ocrP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1: Houses that seem alive
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-01',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-01-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, drives over to East Egg, on Long Island near New York, to visit his cousin Daisy and her husband, Tom Buchanan.\n\nText 2 is a story specially written for this practice paper. Clara has come to look round a house that has stood empty for three years.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-01-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "And so it happened" to "on the front porch".\n\n(a) Give two details from this paragraph which show that the Buchanans\' house is grand. [2]\n\n(b) The French windows are "glowing now with reflected gold". What does this suggest about the house? [1]\n\n(c) What is Tom Buchanan wearing when Nick arrives? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_01}\n\nText 2:\n${EXTRACT_01}`,
            extractSource: `Text 1: ${GATSBY_01_SOURCE} | Text 2: ${EXTRACT_01_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Any two of: it is "even more elaborate than I expected"; it is "a cheerful red-and-white Georgian Colonial mansion"; it overlooks the bay; its lawn runs "for a quarter of a mile"; it has sun-dials, brick walks and gardens; its front has "a line of French windows".\n(b) The house looks rich and splendid, almost as if it were made of gold, as it shines in the evening light.\n(c) Riding clothes.',
            },
            markScheme: [
              '(a) 1 mark for each of two details, such as: "even more elaborate than I expected"; "Georgian Colonial mansion"; it overlooks the bay; the lawn runs "for a quarter of a mile"; sun-dials, brick walks and gardens; "a line of French windows". A short quotation or the detail in your own words both earn the mark.',
              '(b) 1 mark for a sensible inference: the house looks wealthy, luxurious or golden, or it catches the light of the sunset.',
              '(c) 1 mark: riding clothes.',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-01-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last two paragraphs of Text 1, from "We walked through a high hallway" to the end.\n\nHow does the writer use language and structure to make the room seem full of movement?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_01,
            extractSource: GATSBY_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald fills the room with movement by handing control of it to the wind. One long sentence carries the breeze from end to end: it "blew through the room", "blew curtains in at one end and out the other", kept "twisting them up toward the frosted wedding-cake of the ceiling" and finally "rippled over the wine-colored rug". The repeated verb "blew" and the chain of clauses make the sentence itself sweep restlessly across the room, from window to ceiling to floor. The similes turn the room into open air, since the curtains fly "like pale flags" and the shadow on the rug moves "as wind does on the sea", so a drawing room becomes a landscape.\n\nThe people move as though they were part of the furnishings. The women are "buoyed up as though upon an anchored balloon" and their dresses are "rippling and fluttering" as if they had flown round the house, so even they seem carried by the wind rather than moving themselves. Sound adds energy: "the whip and snap of the curtains" and "the groan of a picture on the wall" make the room noisy and alive.\n\nStructurally, the movement builds across both paragraphs and is then stopped in a single sentence, which turns on "a boom" as Tom shuts the windows, after which everything "ballooned slowly to the floor". The list "the curtains and the rugs and the two young women" puts the women alongside the furnishings, and the sudden stillness, which comes from Tom, hints at the power he holds over the house and everyone in it.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the verbs of movement in the long sentence about the breeze ("blew", "twisting", "rippled") and of how its run of clauses carries the reader across the room.',
                'Comment on the similes "like pale flags" and "as wind does on the sea", which make the room feel like open air.',
                'Comment on how the women seem moved by the room rather than moving ("buoyed up as though upon an anchored balloon"), and on the sounds of "the whip and snap of the curtains".',
                'Structure: the build-up of movement and sound, then the sudden stop when Tom shuts the windows and everything "ballooned slowly to the floor".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-01-q3',
            questionNumber: 3,
            questionText:
              'Look again at Text 2.\n\nExplore how the writer builds a sense of threat as Clara moves through the house.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer builds threat by making the house, rather than any person, the thing that acts. The short opening sentence, "The house had been waiting.", gives the building a will of its own before Clara even arrives, and the past perfect continuous suggests that it has been waiting a long time. The writer then sets "the passive quiet of an empty building" against "the held-breath stillness of something that knows you are coming". The compound adjective "held-breath" turns the silence into something alive and holding itself back, and the second person "you" puts the reader in Clara\'s place.\n\nAs Clara enters, the language keeps hinting that the house is alive. The door swings open "as though the house were inviting her inside", and the wallpaper vines seem to be "creeping upward from the skirting boards and reaching toward the ceiling". The present participles make the movement continuous, and the personification in "slow, vegetable patience" unsettles, because patience belongs to something that thinks. Smell is used against Clara too: the air is sweet "like overripe fruit", which hints at decay, and beneath it lies "the scent of stone and standing water", which suggests something cold and buried.\n\nStructurally, the third paragraph slows down to fill the house with signs of people who are no longer there. The estate agent\'s confident "Vacant for three years." is undercut at once by the short sentence "But empty was not the right word." The objects that follow, a chair "as though someone had just risen from it", a book "frozen mid-sentence" and a single cup, are evidence of lives interrupted, and the reader begins to wonder what interrupted them.\n\nThe fourth paragraph moves from sight to sound, which is more threatening because it cannot be seen. The sound comes from "behind the door at the far end", out of sight, and is defined mostly by what it is not: "not quite breathing, not quite tapping". The final paragraph opens with a two-word sentence, "Clara stopped.", which halts her just as the threat is closest. After it, fear seems to bend the space itself, as the corridor "seemed to lengthen before her" and the door is "receding with each heartbeat". The triple "patient, unhurried, certain" makes the sound calm and sure of itself while Clara is not. The last sentence echoes the first, "just as the house had been waiting", so the text ends where it began, inside the house\'s waiting, and it never reveals what lies behind the door. That circular structure, with no resolution, leaves the reader as trapped as Clara.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the personification of the house ("The house had been waiting.", "inviting her inside") and of the vines and smells that suggest both life and decay.',
                'Comment on the contrast between an ordinary empty silence and "the held-breath stillness of something that knows you are coming".',
                'Structure: the move from the front door to the upstairs corridor; the third paragraph\'s evidence of interrupted lives; the turn from sight to sound; the short sentence "Clara stopped." at the moment of greatest tension.',
                'Comment on the circular ending, which returns to the opening idea of waiting and leaves the threat unexplained.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-01-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, the houses seem more alive than the people in them.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the houses and the people in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present the houses\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_01}\n\nText 2:\n${EXTRACT_01}`,
            extractSource: `Text 1: ${GATSBY_01_SOURCE} | Text 2: ${EXTRACT_01_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement more for Text 2 than for Text 1. Both houses are made to seem alive, but in Text 1 the people are not so much lifeless as controlled, while in Text 2 the house\'s life is a threat that no one controls.\n\nIn Text 1, Fitzgerald describes the Buchanans\' house as bursting with energy. The lawn "ran toward the front door for a quarter of a mile, jumping over sun-dials and brick walks and burning gardens", and the verbs "ran" and "jumping" make it sound like an excited animal. Inside, the wind takes over, as it "blew curtains in at one end and out the other like pale flags". The two women, by contrast, seem passive: they are "buoyed up as though upon an anchored balloon", and their dresses are "rippling and fluttering as if they had just been blown back in after a short flight around the house". They seem moved by the house rather than moving themselves, which supports the statement.\n\nHowever, Tom complicates it. He is the most physical presence in the text, with "a great pack of muscle shifting" under his coat and "a cruel body", and when he shuts the windows "the caught wind died out about the room" and everything "ballooned slowly to the floor". The house is alive, but Tom can switch its life off, so in Text 1 the most powerful thing is, after all, a person.\n\nIn Text 2 the house is alive in a sinister way. "The house had been waiting" gives it intention, and it seems to be "inviting her inside". The vines grow with "slow, vegetable patience". Clara, the only person present, mostly reacts: she "pushed the front door", she "stopped", and the corridor "seemed to lengthen before her". The people who once lived there survive only as traces, a chair left "as though someone had just risen from it" and a book "frozen mid-sentence", and the sound behind the door, "patient, unhurried, certain", suggests a presence that has outlasted them all.\n\nThe writers\' methods are similar but create opposite effects. Both use personification and verbs of movement to animate their houses. Fitzgerald\'s long, flowing sentences and light, playful images, such as "the frosted wedding-cake of the ceiling", create a bright restlessness that is almost comic, whereas the writer of Text 2 uses short sentences and images of stillness and decay, such as "standing water" and "held-breath stillness", to make the house menacing. Their viewpoints differ too: Nick narrates in the first person as an amused observer, so the reader enjoys the spectacle, while the third-person narration of Text 2 stays close to Clara and shares her unease.\n\nOverall, I largely agree. In both texts the house seems more alive than the people, but in Text 1 that life is a display of wealth that Tom can stop at will, while in Text 2 it is something no one can stop. As a reader I find Text 2 more disturbing for exactly that reason: its house is not showing off, it is waiting.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement is true, kept up to the end; it may be truer of one text than the other.',
                'Text 1: the lawn and the wind given energy and will ("jumping over sun-dials", "like pale flags"); the women carried by the room ("buoyed up as though upon an anchored balloon"); Tom as the one person with force, able to stop the room\'s movement.',
                'Text 2: the house given intention ("The house had been waiting"); Clara mostly reacting; the people who lived there present only as objects; the sound as a presence that has outlasted them.',
                "Comparison of methods: personification in both; Fitzgerald's long, light, playful sentences against the short sentences and images of decay in Text 2; a first-person observer against close third-person narration.",
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': Q4_AO4_LEVELS,
              'Comparison (AO3, 6 marks, one mark a level)': Q4_AO3_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-01-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-01-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The House Remembers'.\n\nIn your writing you could:\n- choose whether to tell the story in the first or the third person\n- make the house as vivid as any character in the story\n- build towards a discovery or a moment of change.\n\nOR\n\nQuestion 6\nWrite about a time when you visited a place for the first time and it made a strong impression on you.\n\nIn your writing you could:\n- describe what you saw, heard and felt as you arrived\n- explain what you had expected and how the place was different\n- reflect on why the visit has stayed with you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 5\n\nThe House Remembers\n\nEvery summer of my childhood, my grandmother's house greeted me with the same three sounds: the gate's rusty complaint, the slap of the screen door, and her voice calling my name from somewhere deep inside, as if the house itself had spoken.\n\nThis year there was only the gate.\n\nI stood on the path with the key in my hand. It was heavier than a key should be. Mum had given it to me at the station without a word, pressing it into my palm the way you might hand someone a small bird.\n\nThe front door stuck, as it always had, and I put my shoulder to it the way Gran had taught me. Lift and push, love. It gave with a sigh. Inside, the hall smelled of lavender polish and old paper, and the light fell through the coloured glass above the door in squares of red and amber, exactly where it had always fallen. For a moment I could not move. Nobody had told the house. It was still keeping her routines.\n\nI walked through the rooms slowly, like a visitor in a museum. In the kitchen, her reading glasses lay folded on the windowsill, their arms crossed like a small, patient insect. The calendar still showed June. The tap still dripped, a steady tick that measured out the silence. In the front room, the armchair held the shape of her: a soft hollow in the cushion, a faint dent where her head had rested. I did not sit in it. It did not feel like mine to sit in.\n\nUpstairs, the floorboard outside the bathroom creaked under my foot, and I froze, because that creak had always meant she was coming. My heart did a foolish thing. It hoped.\n\nThen I laughed, a small, cracked sound, and the house seemed to listen.\n\nIt was in her bedroom that I found the tin. It sat on the wardrobe shelf, an old biscuit tin with a Scottish loch on the lid, and inside, wrapped in tissue, were letters. Not hers. Mine. Every card I had ever sent her, from the wobbly crayon of my first thank-you note to the postcard from last year's school trip, each one flattened and dated in her tidy hand. Underneath them lay a note: For when you come back.\n\nI sat on the edge of her bed and read them all. My own voice came back to me across the years, growing up page by page, and somewhere in the middle I understood what she had been doing. She had been keeping me. While I was busy growing, she had been building a house of paper to remember me by.\n\nWhen I finally went downstairs, the light had moved. The red and amber squares had slid across the hall and climbed halfway up the wall, the way they always did by late afternoon, and I realised that the house would go on doing this whether anyone watched or not. The sun would still find the glass. The tap would still keep time.\n\nI locked the door behind me and rested my hand flat against it, the way you might rest a hand on someone's shoulder.\n\n\"I'll be back,\" I told it.\n\nThe gate complained as I left. This time I heard it as a goodbye.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with the house given a presence of its own through precise detail, and a clear, consistent point of view.',
                'Question 6: a personal account of a first visit that describes the place closely, sets what was expected against what was found, and reflects on why it mattered.',
                'Either task: a deliberate shape (an opening that draws the reader in, a focus that develops, an ending that feels intended), varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': WRITING_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': WRITING_AO6_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2: Ruined landscapes
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-02',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-02-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator describes a stretch of wasteland that lies between the rich suburbs of Long Island and the city of New York.\n\nText 2 is a story specially written for this practice paper. It is set on a First World War battlefield in northern France, after a bombardment.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-02-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "About half way" to "from your sight".\n\n(a) Give two of the shapes that the writer says the ashes grow into or take the form of. [2]\n\n(b) The road runs beside the railway "so as to shrink away from" the area of land. What does this suggest about the place? [1]\n\n(c) What do the men in the valley use to stir up the cloud? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_02}\n\nText 2:\n${EXTRACT_02}`,
            extractSource: `Text 1: ${GATSBY_02_SOURCE} | Text 2: ${EXTRACT_02_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Any two of: ridges, hills, grotesque gardens, houses, chimneys, rising smoke, men.\n(b) The place is so ugly or unpleasant that even the road seems to want to keep away from it.\n(c) Leaden spades.',
            },
            markScheme: [
              '(a) 1 mark for each of two of: ridges; hills; grotesque gardens; houses; chimneys; rising smoke; men. Do not credit wheat, which the ashes only grow like.',
              '(b) 1 mark for a sensible inference: the place is ugly, unpleasant or frightening, so that even the road seems to want to avoid it.',
              '(c) 1 mark: spades, or leaden spades.',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-02-q2',
            questionNumber: 2,
            questionText:
              'Look again at the second paragraph of Text 1, from "But above the gray land" to "the solemn dumping ground".\n\nHow does the writer use language and structure to make the eyes of Doctor T. J. Eckleburg seem strange and unsettling?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_02,
            extractSource: GATSBY_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald makes the eyes unsettling first by making the reader wait for them. The paragraph opens with the conjunction "But" and a long approach, "above the gray land and the spasms of bleak dust which drift endlessly over it", before the reader, addressed directly as "you", finally sees "the eyes of Doctor T. J. Eckleburg". The phrase is repeated at the start of the next sentence, which fixes our attention on the eyes as if we cannot look away.\n\nTheir size is exaggerated with precise, almost medical detail: they are "blue and gigantic" and "their retinas are one yard high". The writer then strips away everything human around them. They "look out of no face" and sit above "a nonexistent nose", so they become eyes without a person, staring at no one in particular. The story of the oculist who "sank down himself into eternal blindness" adds a dark irony, since the man who put the eyes there may no longer be able to see.\n\nThe last sentence gives the eyes the verb "brood", which personifies them as gloomy and watchful, and "the solemn dumping ground" lends a rubbish tip the seriousness of a graveyard. The paragraph moves from the wide grey land to the close detail of the eyes and then back out to the whole landscape, so that by the end the eyes seem to preside over all of it.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the delay before the eyes appear, and on the repetition of "the eyes of Doctor T. J. Eckleburg", which fixes the reader\'s attention.',
                'Analysis of the exaggerated, precise detail ("blue and gigantic", "their retinas are one yard high") and of eyes that "look out of no face".',
                'Comment on the irony of the oculist\'s "eternal blindness" and on the personifying verb "brood".',
                'Structure: the move from the wide land to the close detail of the eyes and back out to "the solemn dumping ground".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-02-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Ellis's thoughts and feelings as he lies in the crater.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Ellis as a man cut off from his own body and from the world around him, held in a terrible stillness until a single moment of beauty breaks through.\n\nThe opening paragraph is built on silence. The first sentence overturns what the reader expects, since "the silence that followed was worse" than the shelling. The repetition of "a silence", first one that "pressed against the eardrums" and then one "so complete" that Ellis can hear "the blood moving through his own veins", makes the quiet physical and oppressive, almost another kind of bombardment. Even the mud is personified as "adjusting to the absence of concussion", as if the ground itself were still flinching.\n\nEllis\'s feelings are shown more through what he avoids than through what he says. He breathes in "something sweet and terrible that he would not name", and the modal "would not" shows a mind refusing to face what lies near him. Later, the "shapes" in the mud are things "he forced his eyes to skip over", registered "only as interruptions in the terrain". This detached, almost military vocabulary shows how he protects himself from horror. His injury is described with the same distance: his arm lies "at an angle that could not be natural", yet he feels "no pain", only a numbness climbing "with the slow deliberation of rising water". The image suggests something slow that cannot be stopped, and its return in the last paragraph, "The numbness had reached his elbow now", creates a quiet, growing dread.\n\nThe landscape mirrors his state of mind. Farmland he knew from photographs has become "a moonscape of craters and shattered stumps", the wire is coiled "like brambles from a nightmare", and everything is "reduced to the same uniform brown", a phrase that drains the world of colour and life.\n\nThe structure then turns on the short sentence "A bird sang." Placed at the start of the fourth paragraph, it interrupts the bleakness just as the song interrupts the silence. The language becomes lyrical: the song is "absurdly beautiful", and the blackbird sings "as though the world were still whole, still green, still capable of mornings", a tricolon whose repeated "still" holds out the world Ellis has lost. His response, as he feels "his eyes fill with tears", is the first feeling he does not push away.\n\nThe final paragraph closes the frame. "Ellis closed his eyes" echoes his earlier effort to look away, but now he chooses not to see. The bird is "indifferent and magnificent", a pairing that makes nature both uncaring and wonderful, and the closing words, "the last beautiful thing in a world that had forgotten what beauty was", leave the reader with comfort and grief at once.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the oppressive silence of the opening, made physical by repetition ("pressed against the eardrums") and by the personified mud.',
                'Comment on how Ellis avoids his own feelings: what "he would not name", the shapes "he forced his eyes to skip over", and numbness in place of pain.',
                'Comment on the destroyed landscape ("a moonscape of craters and shattered stumps", "like brambles from a nightmare") as a reflection of his state of mind.',
                'Structure: the turn on the short sentence "A bird sang."; the shift into lyrical language; the return of the numbness; the ending that closes on "the last beautiful thing".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-02-q4',
            questionNumber: 4,
            questionText:
              "'Both writers make their ruined landscapes seem strangely beautiful.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the two landscapes\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present the landscapes\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_02}\n\nText 2:\n${EXTRACT_02}`,
            extractSource: `Text 1: ${GATSBY_02_SOURCE} | Text 2: ${EXTRACT_02_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement to a large extent, although the two writers find very different kinds of beauty in their ruined places, and in Text 1 it is closer to grotesque fascination than to anything comforting.\n\nFitzgerald\'s valley of ashes is ugly in every detail but described with a strange, inventive energy. The image of "a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens" turns a dump into a dark parody of the countryside, and "fantastic" suggests something dreamlike as well as unreal. The workers are "ash-gray men, who move dimly and already crumbling through the powdery air", which is horrifying, since they seem made of the waste they handle, yet the sentence has an almost poetic rhythm. The eyes of Doctor T. J. Eckleburg, "blue and gigantic" behind "enormous yellow spectacles", bring the only colours into the grey scene and "brood on over the solemn dumping ground". As a reader I am fascinated rather than charmed: the beauty lies in the writing, not in the place.\n\nIn Text 2 the land is just as destroyed, "a moonscape of craters and shattered stumps", and Ellis cannot bear to look at all of it, forcing "his eyes to skip over" the shapes in the mud. Here the writer does not make the ruin itself beautiful. Instead beauty arrives from outside it, in the blackbird, whose song is "so absurdly beautiful in that wrecked place" that Ellis is moved to tears. The bird sings from "the stump of what had once been an oak tree", so even the beauty is perched on destruction.\n\nThe methods compare closely. Both writers use colour to show ruin: Fitzgerald\'s "gray land" and "bleak dust", and the "same uniform brown" of Text 2. Both turn natural images into nightmares, Fitzgerald with his farm of ashes and Text 2 with wire coiled "like brambles from a nightmare". Both also place something above the waste, but with opposite feeling. Fitzgerald\'s eyes "brood" over it, a verb that makes them heavy and judging, while the blackbird singing above Ellis is "indifferent and magnificent", paying the ruin no attention at all. The viewpoints differ as well. Fitzgerald\'s narrator stands at a distance and even addresses the reader as "you", like a guide on a tour, so the scene feels like a strange spectacle. Text 2 stays close to a wounded soldier whose numbness creeps "with the slow deliberation of rising water", so the landscape is suffered rather than observed.\n\nOverall, I agree that both writers find something striking in their ruined landscapes, but I would qualify the statement. Fitzgerald makes the ruin itself strangely beautiful through the inventiveness of his description, though it stays disturbing. The writer of Text 2 keeps the ruin ugly and lets one living thing provide the beauty, which I find more moving. The ending of Text 2, "the last beautiful thing in a world that had forgotten what beauty was", affects me more, because it makes the reader feel both what has been lost and what is still worth saving.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end; the answer may find it truer of one text than the other.',
                'Text 1: the inventive, grotesque imagery of the valley ("a fantastic farm", "ash-gray men") and the brooding eyes, fascinating rather than lovely.',
                'Text 2: a landscape kept ugly ("the same uniform brown") with beauty arriving from outside it in the blackbird\'s song.',
                'Comparison of methods: colour, nightmarish natural imagery and a presence above the ruin in both (eyes that "brood", a bird that is "indifferent"); a distant guide who addresses "you" against a narrative that stays close to a wounded soldier.',
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': Q4_AO4_LEVELS,
              'Comparison (AO3, 6 marks, one mark a level)': Q4_AO3_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-02-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-02-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'After the Storm'.\n\nIn your writing you could:\n- tell the story from one character's point of view\n- describe the place as it was before and as it is now\n- include a small detail that changes the mood.\n\nOR\n\nQuestion 6\nWrite about a time when you found something beautiful in an unexpected place.\n\nIn your writing you could:\n- describe the place and what made it seem ordinary or unpromising\n- explain what you noticed and how it made you feel\n- reflect on why the moment has stayed with you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe car park behind our local retail park is the least beautiful place I know. It is a flat grey square of tarmac, painted with faded white lines and scattered with trolleys that people have abandoned at odd angles, like cattle wandering away from a herd. In winter, at about half past four, it is at its worst: the floodlights buzz on too early, the puddles hold a film of oil, and the only sound is the beep of cars being locked by people in a hurry to be somewhere else.\n\nI was waiting there one December afternoon while my dad returned a broken kettle. I was fifteen, bored and cold, and I had decided that nothing interesting had ever happened in that car park or ever would.\n\nThen the sky began to move.\n\nAt first I thought it was smoke. A dark smudge was gathering above the warehouse roofs, thickening and thinning as I watched, as if someone were drawing on the clouds with charcoal and then rubbing it out. Then the smudge folded in on itself, poured sideways and became, suddenly and unmistakably, birds. Thousands of them. Starlings, I found out later, though at the time I had no word for what I was seeing.\n\nThey moved as one creature. The shape stretched into a ribbon, curled into a funnel, then burst apart and gathered again, so fast that my eyes could not keep up. It was like watching the wind made visible. Every so often the whole flock tilted, the light caught thousands of wings at once, and the shape flashed silver for a second before darkening again. I could hear it, too: a soft, rushing sound, like a wave dragging back over shingle, which seemed far too gentle for something so enormous.\n\nNobody else looked up. A woman loaded bags into her boot. A man argued on his phone. A boy in a supermarket uniform pushed a long snake of trolleys across the tarmac, his head down against the cold. Above them the sky was performing the most extraordinary thing I had ever seen, and the car park carried on exactly as before.\n\nI stood with my hands in my pockets and my mouth slightly open, and I did not take a photograph. I am still not sure why. I think some part of me knew that a phone screen would shrink it into something small, and I wanted, just once, to see something too big to keep.\n\nAfter about ten minutes the flock poured down, all at once, into the bare trees along the bypass, and the sky was empty again. The floodlights buzzed. A trolley rattled. My dad came back with a new kettle and asked why I was smiling.\n\n"No reason," I said, which was not true.\n\nI still go to that car park, and it is still the least beautiful place I know. But now, whenever I am there in winter, I look up. I have learned that a place does not have to be beautiful to be the setting for something beautiful, and that wonder does not always choose its scenery. Sometimes it turns up behind a retail park, above a row of abandoned trolleys, and waits to see who will notice.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent point of view, a clear contrast between before and after, and a detail that shifts the mood.',
                'Question 6: a personal account that makes an ordinary place vivid, describes the unexpected beauty precisely, and reflects on why the moment mattered.',
                'Either task: a deliberate shape, varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': WRITING_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': WRITING_AO6_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 3: The faces people show
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-03',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-03-reading',
        title: 'Section A: Reading',
        description:
          "Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, is at one of the huge parties given by his neighbour, Gatsby, whom he has never met. He has been chatting to a man of about his own age, and to Jordan Baker, a friend.\n\nText 2 is a story specially written for this practice paper. Nadia is sitting in a therapist's waiting room.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-03-q1',
            questionNumber: 1,
            questionText:
              'Look again at Text 1, from the beginning to "picking his words with care."\n\n(a) What had Gatsby sent to Nick\'s house? [1]\n\n(b) Give two things that Gatsby\'s smile seems to do for the person it is turned on. [2]\n\n(c) What had Nick noticed about the way Gatsby spoke, even before he introduced himself? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_03}\n\nText 2:\n${EXTRACT_03}`,
            extractSource: `Text 1: ${GATSBY_03_SOURCE} | Text 2: ${EXTRACT_03_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) His chauffeur, with an invitation to the party.\n(b) Any two of: it seems to understand you as far as you want to be understood; it believes in you as you would like to believe in yourself; it assures you that it sees you as you hope to be seen at your best; it concentrates on you with a prejudice in your favour.\n(c) That he was picking his words with care.',
            },
            markScheme: [
              '(a) 1 mark: his chauffeur, or an invitation brought by his chauffeur.',
              '(b) 1 mark for each of two of: it seems to understand you "just so far as you wanted to be understood"; it believes in you "as you would like to believe in yourself"; it assures you that it has the impression of you that you hoped to give; it concentrates on you "with an irresistible prejudice in your favor". Own words or short quotations both earn the mark.',
              '(c) 1 mark: he was "picking his words with care", or he chose his words carefully. Not his "elaborate formality of speech", which Nick notices only after Gatsby has introduced himself.',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-03-q2',
            questionNumber: 2,
            questionText:
              'Look again at the paragraph of Text 1 beginning "He smiled understandingly".\n\nHow does the writer use language and structure to show the effect of Gatsby\'s smile on Nick?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_03,
            extractSource: GATSBY_03_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald presents the smile as almost magical, and then lets it vanish. The paragraph opens with a correction, "He smiled understandingly—much more than understandingly", where the repetition and the pause suggest that ordinary words are not enough for it. Hyperbole raises it further: it is one of the "rare smiles" you meet "four or five times in life", with "a quality of eternal reassurance", and it "faced—or seemed to face—the whole eternal world". The interruption "or seemed to face" is the first hint that Nick is being dazzled rather than told the truth.\n\nThe smile is then personified through a sequence of verbs, "understood", "believed" and "assured", built into one long, flattering sentence. The second person "you" draws the reader into the experience, so we feel what Nick feels: the smile tells you exactly what you want to hear, that it has "the impression of you that, at your best, you hoped to convey".\n\nStructurally, the paragraph builds to that sentence and then breaks. "Precisely at that point it vanished", and Nick sees instead "an elegant young rough-neck" whose speech "just missed being absurd". The repetition of "Precisely" ties the smile\'s perfect timing to its sudden disappearance, and the shift from the warm, eternal language of the smile to the cool, critical description of the man suggests that the charm is a performance, and that Nick has noticed the effort behind it.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the self-correction "much more than understandingly" and on the hyperbole ("eternal reassurance", "the whole eternal world").',
                'Analysis of the personified smile and its verbs ("understood", "believed", "assured"), and of the second person "you" that draws the reader in.',
                'Comment on the hint of doubt in "or seemed to face".',
                'Structure: the long, flattering build-up, then the break at "Precisely at that point it vanished" and the cooler description of "an elegant young rough-neck".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-03-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Nadia's ability to read other people, and what it costs her.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Nadia\'s skill as both a gift and a burden, and the structure moves steadily from the first to the second.\n\nThe opening paragraph makes the ability sound calm and rational. The writer rules out anything mysterious with "Not in any supernatural sense" and grounds it in "the ordinary, observable way of someone who had spent her childhood watching faces". The simile "the way a sailor reads the sky" suggests a practical skill learned for survival, and the list "constantly, instinctively, with a vigilance" shows that it never switches off. The clause "When you grow up uncertain of your welcome" quietly reveals its cause: an insecure childhood.\n\nThe second paragraph shows the skill at work. Nadia\'s readings are precise and physical: the man grips his magazine "too tightly", and the woman\'s smile "sat on her face like an object placed there by someone else". That simile separates the smile from the feeling beneath it, and the detail of a jaw clenched so hard "that the muscles in her temples flickered" shows how closely Nadia watches.\n\nThe third paragraph turns from gift to cost. The interruption "The problem - the reason she was here" delays the confession, and the long parenthesis about the waiting room, with its "box of tissues placed just so", suggests a place arranged to manage feelings, just as Nadia manages hers. The key admission is that "she could not turn it off". The adverbs "automatically, compulsively" make the skill sound like a compulsion rather than a talent, and the final sentence of the paragraph, "Concealed, managed, compartmentalised pain - but pain nonetheless", repeats "pain" to show what she is forced to see in everyone.\n\nThe fourth paragraph is only two sentences long, and its brevity enacts her exhaustion. The simile "like walking through a crowd of people who were all, silently, screaming" is the emotional climax: the commas around "silently" slow the phrase down, so that the silence and the screaming arrive separately and clash.\n\nFinally, the writer reveals that Nadia hides herself as carefully as she reads others. She "arranged her features into an expression of calm competence", a phrase that makes her face something she assembles, and the aside "she had practised it since she was seven years old" links the performance to her childhood. The ending turns the skill back on her, as Nadia wonders how long a therapist would take to "see past the person Nadia had built and find the one she had hidden". The verbs "built" and "hidden" suggest two selves, and the text closes on the hidden one, so the reader is left with the cost rather than the gift.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of how the opening presents the skill as rational and learned ("the way a sailor reads the sky") and hints at its cause in an insecure childhood.',
                'Comment on the precise, physical details of her readings of others, such as the smile "like an object placed there by someone else".',
                'Comment on the turn from gift to cost: "she could not turn it off", the adverbs "automatically, compulsively", the repeated "pain".',
                'Structure: the move from skill to demonstration to cost to the two-sentence fourth paragraph, and the ending that reveals the self Nadia has "built" and the one she has "hidden".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-03-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, the face a person shows to the world is a performance.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the characters and the faces they show\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present people hiding or showing their true selves\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_03}\n\nText 2:\n${EXTRACT_03}`,
            extractSource: `Text 1: ${GATSBY_03_SOURCE} | Text 2: ${EXTRACT_03_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree with the statement for Text 2 and largely agree for Text 1, although Fitzgerald leaves it more open whether Gatsby\'s charm is a performance or a genuine gift.\n\nIn Text 2 the idea of performance is everywhere. Nadia sees it in others: the woman in the blue coat smiles while she is angry, and her smile "sat on her face like an object placed there by someone else", which makes a face something put on from outside. Nadia performs too. She "arranged her features into an expression of calm competence", and the verb "arranged" makes her face something built, like a room. The aside "she had practised it since she was seven years old" shows how long she has rehearsed, and the final sentence makes the two selves explicit: "the person Nadia had built" and "the one she had hidden". As a reader, I find this sad rather than sinister, because her performance is a way of surviving pain.\n\nIn Text 1, Gatsby\'s smile is also a kind of performance, but a dazzling one. It "understood you just so far as you wanted to be understood" and "believed in you as you would like to believe in yourself", which suggests that it gives people exactly what they want. Yet Fitzgerald hints at the effort behind it. "Precisely at that point it vanished", and Nick finds "an elegant young rough-neck" whose "elaborate formality of speech just missed being absurd". He had already noticed that Gatsby "was picking his words with care". Jordan\'s doubts strengthen the idea: her report that "he told me once he was an Oxford man" is followed by "However, I don\'t believe it." The reader is left suspecting that Gatsby\'s whole public self has been constructed.\n\nThe writers present performance in contrasting ways. Text 2 uses close third-person narration that takes us inside Nadia\'s mind, so we see both the mask and the person behind it. Fitzgerald uses Nick\'s first-person view from outside, so we see only the effect of Gatsby\'s smile, through hyperbole such as "eternal reassurance", and never his inner thoughts. Both writers use figurative language to separate a face from a feeling: the smile Nadia watches on the woman in the blue coat is "like an object", while Gatsby\'s smile is personified as if it acted on its own. Both texts also use a sudden change to expose the performance. In Text 1 the smile "vanished"; in Text 2 Nadia\'s name is called and we watch her put her composed face together.\n\nOverall, I agree. Both texts show faces that are performed, but for different reasons. Nadia performs calm to protect herself, and the writer makes us sympathise with her. Gatsby performs warmth to win people over, and Fitzgerald makes us admire the performance while doubting the man. The statement is only largely true of Text 1 because the smile\'s effect on Nick is real, even if the man behind it is uncertain, whereas in Text 2 the gap between the face and the feeling is the whole point.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 2: performance seen in others (a smile "like an object") and in Nadia herself ("arranged her features"), with the two selves of the ending.',
                'Text 1: the dazzling, flattering smile that then "vanished"; the effort Nick notices in Gatsby\'s speech; Jordan\'s doubt about Oxford.',
                "Comparison of methods: close third-person narration inside Nadia's mind against Nick's first-person view from outside; figurative language that separates faces from feelings; a sudden change that exposes the performance in both.",
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': Q4_AO4_LEVELS,
              'Comparison (AO3, 6 marks, one mark a level)': Q4_AO3_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-03-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-03-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Mask'.\n\nIn your writing you could:\n- choose a narrator and keep to their point of view\n- show the difference between how a character seems and how they feel\n- build towards a moment when the mask slips.\n\nOR\n\nQuestion 6\nWrite about a time when you had to hide how you really felt.\n\nIn your writing you could:\n- describe the situation and the people around you\n- explain what you showed on the outside and what you felt inside\n- reflect on what the experience taught you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe Mask\n\nThe mask was white, with a painted smile that curled up at both ends like a question nobody had asked. Mrs Okafor handed it to me in the drama studio three weeks before the performance and said, "You\'re the Fool, Sam. You make them laugh. That\'s the job."\n\nI was good at that job. I had been doing it, without a mask, since Year 7.\n\nAt school I was the one who fell off chairs on purpose, who did the teachers\' voices, who turned every awkward silence into a punchline. People liked me the way you like a radio playing in another room: it was cheerful, it filled the space, and nobody ever wondered whether it wanted to be switched off.\n\nAt home, things were quieter. Dad had moved out in September. The house had a new sound, a careful hush, as if everyone were walking on ice that might crack. Mum smiled a lot, too. I noticed because I recognised it. It was my smile, the one I wore to school.\n\nRehearsals were easy. With the mask on, I could be as loud as I liked. The others laughed at every fall, every flapping sleeve, every wrong exit. Mrs Okafor clapped and said I was a natural, and I bowed, and behind the painted grin my real face did nothing at all.\n\nThe first night came. The hall smelled of floor polish and hot lights. From the wings I could see the rows of plastic chairs filling up, parents waving programmes, little brothers kicking the seats in front. I scanned the faces the way I always did, and there, in the third row, was Mum. Beside her, holding her coat, was Dad.\n\nHe had come.\n\nSomething in my chest went very still.\n\nMy cue arrived. I tumbled on to the stage, and the audience laughed, the big, warm laugh I had worked for. I did the trip. I did the voice. I did the business with the ladder, and the laugh came again, louder. But under the mask my eyes kept returning to the third row, where my parents sat side by side, not touching, both laughing at their son.\n\nAnd then, in the quiet part, the Fool\'s only serious speech, my voice cracked.\n\nIt was only a small crack. Most people probably thought it was acting. But I felt the words change shape in my mouth, and I could not get them back. The hall went silent. Not the empty silence of a joke falling flat, but a listening silence, the kind I had never earned before.\n\nI finished the speech. I do not know how. When the lights went down, I stood in the dark of the wings and slid the mask off, and my face was wet.\n\nAfterwards, in the corridor, Mum hugged me for a long time. Dad stood a little way off, turning his car keys over in his hand.\n\n"That speech," he said at last. "I didn\'t know you could do that."\n\n"Neither did I," I said.\n\nIt was the truest thing I had said all year, and I said it without a mask, and for once I did not turn it into a joke.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, literally or not, with a consistent point of view, a clear gap between appearance and feeling, and a moment when the mask slips.',
                'Question 6: a personal account that sets out the situation, contrasts what was shown with what was felt, and reflects honestly on what was learned.',
                'Either task: a deliberate shape, varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': WRITING_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': WRITING_AO6_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 4: The heat of summer
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-04',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-04-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. On the hottest day of the summer, the narrator, Nick Carraway, travels by train to have lunch with his cousin Daisy and her husband, Tom Buchanan, at their house on Long Island. He and his neighbour Gatsby arrive at the house together.\n\nText 2 is a story specially written for this practice paper. It is set in a village during a summer of drought.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-04-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "The next day was broiling" to "slapped to the floor".\n\n(a) Give two details from this paragraph which show how hot it is on the train. [2]\n\n(b) What is the only sound that breaks "the simmering hush at noon"? [1]\n\n(c) What does the woman next to Nick drop? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_04}\n\nText 2:\n${EXTRACT_04}`,
            extractSource: `Text 1: ${GATSBY_04_SOURCE} | Text 2: ${EXTRACT_04_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Any two of: the day is "broiling", the warmest of the summer; the straw seats "hovered on the edge of combustion"; the woman next to Nick perspires; her newspaper dampens under her fingers; she lapses "despairingly into deep heat".\n(b) The hot whistles of the National Biscuit Company.\n(c) Her pocket-book, which is her purse.',
            },
            markScheme: [
              '(a) 1 mark for each of two of: the day is "broiling" or the warmest of the summer; the seats "hovered on the edge of combustion"; the woman "perspired"; the newspaper "dampened under her fingers"; she "lapsed despairingly into deep heat with a desolate cry". A short quotation or the detail in your own words both earn the mark.',
              '(b) 1 mark: the (hot) whistles of the National Biscuit Company.',
              '(c) 1 mark: her "pocket-book", or her purse or handbag.',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-04-q2',
            questionNumber: 2,
            questionText:
              "Look again at Text 1, from the conductor's words to the end.\n\nHow does the writer use language and structure to show the effect of the heat on people?\n\nBack up your points with short quotations from these lines and relevant subject terminology.",
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_04,
            extractSource: GATSBY_04_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald shows the heat wearing people down until even speech and movement become too much. The conductor\'s words are broken into fragments, "Hot! . . . Hot! . . . Hot!", and the ellipses stretch the repetition out, so his speech seems to melt and trail away into "Is it . . .?" The heat even marks objects: Nick\'s ticket comes back "with a dark stain from his hand", a small, unpleasant detail that makes the heat physical.\n\nThe structure then jumps, through the ellipsis that opens the next paragraph, straight to the Buchanans\' house, as if the rest of the journey were too exhausting to describe. There the butler\'s reply, "The master\'s body!" and "it\'s far too hot to touch this noon!", is undercut by "What he really said was", and the joke shows the heat making Nick\'s mind drift into absurdity. The butler is "glistening slightly", and Nick\'s comment that "every extra gesture was an affront to the common store of life" uses formal, exaggerated diction to suggest that energy has become something precious that no one can afford to waste.\n\nThe final paragraph contrasts sharply with what comes before it. The room is "dark and cool", and Daisy and Jordan lie "like silver idols weighing down their own white dresses". The simile makes them still, cool and precious, almost statues, as if the only escape from the heat were to stop moving altogether. Ending on this stillness, after the noise and fragments of the train, shows the heat\'s power to bring life to a halt.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the conductor\'s fragmented, repeated "Hot!" and of the ellipses that make his speech trail away.',
                'Comment on physical details of the heat ("a dark stain from his hand", "glistening slightly") and on the exaggerated formality of "an affront to the common store of life".',
                'Comment on the butler\'s reply as Nick comically imagines it, then corrects with "What he really said was", and on what it suggests about the heat\'s effect on the mind.',
                'Structure: the jump, through an ellipsis, from the train to the house; the closing contrast of a room "dark and cool" and women "like silver idols".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-04-q3',
            questionNumber: 3,
            questionText:
              'Look again at Text 2.\n\nExplore how the writer presents the effects of the drought on Tom and his village.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents the drought as more than a change in the weather: it strips the village bare and forces Tom to see that the world he trusted is fragile.\n\nThe opening sentence links two events through parallel structure, "The summer Tom turned fourteen was the summer the river dried up", so the drought and Tom\'s growing up are tied together from the start. The correction "Not completely" leads into a long parenthesis that lingers on what is left, "a thin thread of brown water that crept between the exposed stones like something ashamed of itself". The simile personifies the river as ashamed, which makes its weakness feel almost moral, and the swimming hole where "three generations of children had learned to dive" is reduced to "a muddy depression fringed with cracked earth", a phrase in which "depression" hints at sadness as well as shape.\n\nIn the second paragraph the drought exposes what was hidden. The list "rusted cans, a bicycle wheel furred with algae, the broken neck of a bottle glinting in the sun" is ugly and specific, and it reveals the rubbish people have thrown into the river. The rock "like a grey shoulder shrugging itself free" makes the landscape seem to climb out of the water, and the paragraph closes on personification again: the river, "stripped bare", "looked ashamed". The repeated idea of shame makes the reader feel the drought as a kind of exposure.\n\nThe third paragraph turns back in time to the grandfather\'s warning. His speech uses repetition, "The river remembers" and "it remembers", and ends with two short, emphatic sentences: "Water has a longer memory than people, Tom. Water holds a grudge." The personification gives the river a will and a memory, and it suggests that the drought is a consequence of people who "took more than they gave back".\n\nThe fourth paragraph widens the focus to the whole village. The short sentences "Tom had not understood then. He was beginning to understand now." mark a turning point in his thinking. The colour contrast of fields "yellow where they should have been green", the cattle with "their sides heaving" and the metaphor of Mrs Kenworth\'s garden as "a cemetery of brown stalks" build a semantic field of death and exhaustion. The village "seemed to be holding its breath", and the sky "refused to deliver" rain, so nature seems to be punishing the place on purpose.\n\nThe final paragraph is calm and reflective. Tom sits "on the porch where his grandfather used to sit", taking his grandfather\'s place as if he has inherited his understanding. The last sentence states the lesson directly, "things did not last", and its final image returns to the opening, comparing the world to "the thread of water still creeping between the stones". This circular structure turns the small trickle of the first paragraph into a symbol of everything fragile in Tom\'s life.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the personified river ("like something ashamed of itself", "looked ashamed") and of what the drought reveals ("a bicycle wheel furred with algae").',
                'Comment on the grandfather\'s repeated "remembers" and his warning that "Water holds a grudge".',
                'Comment on the effects across the village: fields "yellow where they should have been green", a garden that is "a cemetery of brown stalks", a village "holding its breath".',
                'Structure: the opening that ties the drought to Tom\'s age; the turn in "He was beginning to understand now."; the circular ending that returns to the thread of water as a symbol of fragility.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-04-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, the summer heat is presented as a threat rather than a pleasure.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the heat and its effects in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present the heat\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_04}\n\nText 2:\n${EXTRACT_04}`,
            extractSource: `Text 1: ${GATSBY_04_SOURCE} | Text 2: ${EXTRACT_04_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement for Text 2, where the heat is a real and lasting danger, but only partly for Text 1, where Fitzgerald presents the heat as an exhausting nuisance that is as comic as it is threatening.\n\nIn Text 1 the heat is certainly oppressive. The day is "broiling", the seats "hovered on the edge of combustion", and the woman on the train "lapsed despairingly into deep heat with a desolate cry". The hyperbole makes ordinary discomfort sound like disaster, and the conductor\'s repeated "Hot!" shows people reduced to a single word. Yet much of this is funny. The woman\'s pocket-book "slapped to the floor", and Nick hands it back holding it "by the extreme tip of the corners" so that no one will think he means to steal it. Nick\'s comic version of the butler\'s reply, "it\'s far too hot to touch this noon!", is a joke, which he drops at once with "What he really said was". So the heat here is a trial of patience, and the reader smiles at the characters\' suffering rather than fearing for them. There is a hint of something darker, though: "every extra gesture was an affront to the common store of life" suggests that life itself is being drained.\n\nIn Text 2 the heat is a threat in a far more serious sense, because it destroys things that do not come back. The river has "dried up", the swimming hole is "a muddy depression fringed with cracked earth", the cattle stand with "their sides heaving", and Mrs Kenworth\'s prize garden is "a cemetery of brown stalks". The metaphor of the cemetery brings death directly into the description. The sky "refused to deliver" rain, so nature itself seems hostile. For Tom the drought teaches that "things did not last", which makes the heat threatening in a deeper way: it ends his belief that the world is permanent.\n\nThe writers\' methods differ in tone. Fitzgerald uses comic exaggeration, fragmented dialogue and a sudden cut to the cool, dark room where Daisy and Jordan lie "like silver idols", so the heat is something to escape. The writer of Text 2 uses personification ("Water holds a grudge"), a semantic field of death and a slow, reflective structure that ends with Tom watching "the sun go down over the dry riverbed". Both writers, however, show the heat changing how people behave: in Text 1 every movement becomes an effort, and in Text 2 the village "seemed to be holding its breath". Both also use the heat to bring something to the surface. In Text 1 it makes people irritable and suspicious, since "every one near by, including the woman, suspected me just the same"; in Text 2 it reveals the "rusted cans" and the broken bottle that the river had hidden.\n\nOverall, I agree more than I disagree. Neither text treats the summer as a pleasure, but only Text 2 makes the heat a true threat, because its damage is lasting and it changes how Tom sees the world. In Text 1 the heat is uncomfortable and faintly ominous, but Fitzgerald\'s humour keeps it from feeling dangerous.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds; many answers will find it truer of Text 2 than of Text 1.',
                'Text 1: hyperbole and fragmented speech that make the heat oppressive but also comic; the hint that it drains "the common store of life"; escape into a room "dark and cool".',
                'Text 2: lasting damage to the river, fields, cattle and garden; the metaphor of "a cemetery of brown stalks"; the drought as the lesson that "things did not last".',
                'Comparison of methods: comedy, dialogue and a cut to a new scene against personification, a semantic field of death and a slow, reflective ending; heat changing behaviour in both.',
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': Q4_AO4_LEVELS,
              'Comparison (AO3, 6 marks, one mark a level)': Q4_AO3_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-04-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-04-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Longest Summer'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- use the weather to create atmosphere\n- show how a character has changed by the end.\n\nOR\n\nQuestion 6\nWrite about a time when the weather changed a day for you.\n\nIn your writing you could:\n- describe the weather and the place closely\n- explain how the weather shaped what you did and how you felt\n- reflect on why you remember the day.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nThe heatwave had lasted eleven days by the morning of my first GCSE exam, and I was convinced it had been arranged personally to ruin me.\n\nOur town was not built for heat. The pavements softened. The grass in the park turned the colour of toast. Every window in our street was open, and every one of them leaked the same sounds: electric fans whirring, televisions talking about hosepipe bans, someone's baby crying in a thin, exhausted way that made the whole road feel tired. At night I lay on top of my duvet with a damp flannel on my forehead, reciting quotations to the ceiling, and the air was so thick that the words seemed to hang in it.\n\nOn the morning of the exam, the sky was white. Not blue, not cloudy, but a flat, glaring white, as if the heat had bleached the colour out of it. I walked to school with my clear plastic pencil case sticking to my palm and my shirt sticking to my back, and I felt, for the first time in my life, that the weather was pressing down on me like a hand.\n\nThe sports hall was worse. The rows of desks stood in perfect lines under skylights that turned the room into a greenhouse. Somebody had propped the fire doors open, but no breeze came through, only the smell of cut grass and hot rubber from the running track. The invigilator, a tall man with a lanyard and a handkerchief, kept dabbing at his neck. I turned over the paper. The first question swam in front of my eyes.\n\nThen, about forty minutes in, the light changed.\n\nIt happened so slowly that at first I thought I was imagining it. The glare softened. The squares of sunlight on the floor faded to grey, then vanished. A hush spread through the hall that had nothing to do with exam rules: two hundred pens slowed down at once. And then came a sound I will never forget, a long, low roll of thunder that seemed to start at one end of the town and travel all the way to the other.\n\nThe rain arrived like applause. It drummed on the skylights so hard that the invigilator gave up trying to look stern and simply smiled. Through the fire doors I could see it bouncing off the track, steaming as it hit the hot surface, and the smell that rolled into the hall was the sweetest thing I had ever breathed: wet earth, wet tarmac, wet everything.\n\nI picked up my pen. My head, which had felt stuffed with cotton wool for eleven days, was suddenly clear. I wrote faster than I had ever written, as if the storm had washed something out of me and left room to think.\n\nWhen we came out an hour later, the whole town smelled new. Gutters were overflowing. A boy from my maths class stood in the car park with his arms spread wide and his face turned up to the rain, and nobody laughed at him, because half of us wanted to do the same.\n\nI do not remember much of what I wrote that day. But I remember the moment the sky broke, and the feeling that came with it: that even the heaviest, most airless days end, and that sometimes the end arrives exactly when you need it.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, weather that creates atmosphere, and a character who has changed by the end.',
                'Question 6: a personal account that describes the weather and the place closely, shows how it changed the day, and reflects on why it is remembered.',
                'Either task: a deliberate shape, varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': WRITING_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': WRITING_AO6_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 5: Places that remember
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-05',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-05-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from the last pages of The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, is about to leave Long Island for good. It is autumn, and his rich neighbour, Gatsby, died at the end of the summer. Gatsby gave famous parties at his mansion, and he loved Daisy, who lived across the bay.\n\nText 2 is a story specially written for this practice paper. Dr Anya Marsh is a scientist who has studied one patch of ancient woodland for seven years.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-05-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first two paragraphs of Text 1, from "I spent my Saturday nights" to "sprawled out on the sand".\n\n(a) Why did Nick spend his Saturday nights in New York? [1]\n\n(b) Who does Nick think was in the car he heard one night? [1]\n\n(c) Give two things Nick does, or has done, on his last night. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_05}\n\nText 2:\n${EXTRACT_05}`,
            extractSource: `Text 1: ${GATSBY_05_SOURCE} | Text 2: ${EXTRACT_05_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                "(a) Because he remembered Gatsby's parties so vividly that he could still hear the music and laughter from Gatsby's garden.\n(b) Some final guest who had been far away and did not know that the party was over.\n(c) Any two of: he has packed his trunk; he has sold his car to the grocer; he looks at Gatsby's house once more; he rubs out a word scrawled on the steps; he wanders down to the beach; he lies on the sand.",
            },
            markScheme: [
              '(a) 1 mark: the memory of Gatsby\'s parties was so vivid that he could still hear "the music and the laughter" from the garden, or he wanted to get away from those memories.',
              '(b) 1 mark: "some final guest" who had been "away at the ends of the earth" and did not know the party was over.',
              '(c) 1 mark for each of two of: packed his trunk; sold his car to the grocer; looked at the house once more; erased the word on the steps with his shoe; wandered down to the beach; sprawled out on the sand.',
              'Credit only answers drawn from the first two paragraphs. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-05-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last two paragraphs of Text 1, from "Most of the big shore places" to the end.\n\nHow does the writer use language and structure to present the island as it once was, and Gatsby\'s dream?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_05,
            extractSource: GATSBY_05_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald uses the dark, empty present to reveal a vision of the past. The first of these paragraphs begins with absence, as the shore places are "closed" and there are "hardly any lights", and then the present dissolves: "the inessential houses began to melt away". The verb "melt" makes the modern world seem flimsy and temporary, and the adverb "gradually" slows the reader down into Nick\'s daydream.\n\nWhat appears is "the old island here that flowered once for Dutch sailors\' eyes", described in a metaphor of new life, "a fresh, green breast of the new world". The language becomes elevated and almost religious: the vanished trees "pandered in whispers" to "the last and greatest of all human dreams", and humanity is imagined "face to face for the last time in history with something commensurate to his capacity for wonder". The superlatives and the very long sentence build to that final word, "wonder", which makes the moment feel vast and unrepeatable.\n\nThe structure then links this history to Gatsby. The final paragraph repeats the word in "Gatsby\'s wonder when he first picked out the green light", so Gatsby becomes the last of those dreamers. The rhythm turns sad: his dream "must have seemed so close that he could hardly fail to grasp it", but the next sentence reverses it, "He did not know that it was already behind him". The paragraph ends on a wide, dark image, "the dark fields of the republic rolled on under the night", so the dream is swallowed by the size of the country and by the past.',
            },
            markScheme: {
              'What to reward': [
                'Comment on how the present fades ("the inessential houses began to melt away") to reveal the past.',
                'Analysis of the metaphor "a fresh, green breast of the new world", the personified trees that "pandered in whispers", and the superlatives that build to "wonder".',
                'Structure: the repetition of "wonder" that links the first explorers to Gatsby; the reversal "He did not know that it was already behind him"; the closing image of "the dark fields of the republic".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-05-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Anya's feelings about the forest.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Anya\'s feelings as a mixture of scientific precision and wonder, and the structure moves from the close study of one tree to a reflection on the whole forest.\n\nThe opening metaphor, "The forest floor was a book written in a language most people had forgotten how to read", shows at once that Anya sees the woodland as something to be read and understood, and it suggests pride, since she is one of the few who still can. Her closeness to it is physical: she "crouched" and "traced the lines of fungal growth", and the simile "as intricate as circuitry" mixes nature with technology in a way that shows her admiration for its complexity. Even decay is seen positively, as "a thousand organisms converting death into the raw materials of new life".\n\nThe second paragraph shows her excitement and her defensiveness. The phrase "something that still astonished her" reveals that seven years of study have not dulled her wonder, and the colon builds to the simple, striking claim that "the trees were talking to each other". The writer then qualifies it with negatives, "Not in words, not in any way that would satisfy the sceptics", which shows that Anya expects to be doubted. The economic metaphors of "the currency of survival" and of "transactions" present the forest as a cooperative society rather than a battleground.\n\nThe third paragraph introduces tenderness. The short sentence "The old oak she knelt beside was dying." is followed by a list of decline, "Its crown was thin, its bark splitting, its roots weakened", and then a turn: "But it was not dying alone." The personification of the oak "saying goodbye" makes Anya\'s feelings almost emotional, but she corrects herself at once with "Or perhaps it was saying something more practical", and the imperatives "here, take this, use it, grow" capture both her affection and her scientific caution.\n\nThe fourth paragraph widens her attention to the life around her, as a buzzard circles above and a woodpecker drums against dead timber, and her reflection that "The forest was never silent... if you knew how to listen" shows a patient, attentive love for the place. The tricolon "in the creak of branches, in the whisper of leaves turning in the wind, in the slow, patient conversation of roots" builds from what can be heard to what is hidden, which mirrors her own understanding.\n\nThe ending is quiet and hopeful. A plain fact, "The old oak would be dead within a year", is followed by the repeated "every tree it had fed, every seedling it had sheltered, every thread of fungal connection", which stresses what will survive. The final words, which Anya writes in her notebook, "Nothing in a forest... is ever truly lost. It is only translated", return to the opening image of language. This circular structure shows that her feeling for the forest is not grief but faith in its continuity.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the opening metaphor of the forest floor as "a book written in a language most people had forgotten how to read", and of the simile "as intricate as circuitry".',
                'Comment on the wonder that survives seven years of study ("something that still astonished her") and on the economic metaphors of "currency" and "transactions".',
                'Comment on the personified oak "saying goodbye", corrected at once to "something more practical", as a sign of both feeling and scientific caution.',
                'Structure: the move from one tree to the whole forest; the short sentences that turn the third paragraph; the circular ending that returns to the idea of language in "It is only translated".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-05-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show that a place holds on to the memory of what has happened in it.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the places in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present the past in these places\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_05}\n\nText 2:\n${EXTRACT_05}`,
            extractSource: `Text 1: ${GATSBY_05_SOURCE} | Text 2: ${EXTRACT_05_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I largely agree with the statement. Both writers present places that keep traces of their past, but in Text 1 the memory belongs mostly to Nick, while in Text 2 it seems to belong to the forest itself.\n\nIn Text 1 the place is full of echoes. Gatsby\'s parties are "with me so vividly that I could still hear the music and the laughter, faint and incessant, from his garden", and the car that stops at his steps belongs, Nick imagines, to "some final guest" who "didn\'t know that the party was over". The house still stands, "that huge incoherent failure of a house", and even the "obscene word" scrawled on its steps shows how the place now attracts mockery. Yet much of this memory is in Nick\'s head: he "could still hear" the music, but the garden is silent. The deeper memory comes later, as the modern houses "melt away" and he sees "the old island here that flowered once for Dutch sailors\' eyes". The island seems to hold its history under the surface, and its "vanished trees" are remembered as having "pandered in whispers" to a dream. This makes the reader feel that every place has layers of the past beneath it.\n\nIn Text 2 the forest holds on to the past in a literal, physical way. "The forest floor was a book", which suggests a record that can be read, and the dying oak passes on its carbon so that "its legacy would persist in every tree it had fed, every seedling it had sheltered". The forest remembers by recycling: decay becomes "the raw materials of new life". The final line, "Nothing in a forest, she wrote, is ever truly lost. It is only translated", states the idea directly.\n\nThe writers present the past in contrasting moods. Fitzgerald\'s is elegiac. His long, rhythmic sentences and superlatives, such as "the last and greatest of all human dreams", build a sense of loss, and the closing image of "the dark fields of the republic" rolling on "under the night" makes the past vast and out of reach. The writer of Text 2 is hopeful. Anya\'s precise, scientific vocabulary ("mycorrhizal connections", "carbon stores") sits beside gentle personification, such as the oak "saying goodbye", to suggest that the past is not lost but transformed. Both writers, though, use the idea of language: Fitzgerald\'s trees "pandered in whispers", and Anya\'s forest "spoke in the creak of branches". Both also end by looking beyond one life to something much larger: the continent and its history in Text 1, the whole web of the forest in Text 2.\n\nOverall, I agree that both places hold the memory of what has happened in them. The difference is that in Text 1 the memory is haunting, a reminder of dreams that failed, while in Text 2 it is reassuring, proof that what dies goes on in another form. As a reader I find Text 1 sadder and Text 2 more comforting, and the contrast shows how differently the same idea can be made to feel.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: echoes of the parties that Nick "could still hear"; the house as a "huge incoherent failure"; the island beneath the modern houses and its "vanished trees".',
                'Text 2: the forest floor as "a book"; the oak\'s legacy passed on to other trees; decay turned into "new life"; the closing idea that nothing "is ever truly lost".',
                'Comparison of methods: elegiac long sentences and superlatives against precise scientific vocabulary and gentle personification; images of language and whispering in both; endings that look beyond one life.',
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': Q4_AO4_LEVELS,
              'Comparison (AO3, 6 marks, one mark a level)': Q4_AO3_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-05-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-05-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Last Day'.\n\nIn your writing you could:\n- choose a narrator and keep to their point of view\n- describe a place that is about to change or be left behind\n- end with a moment of reflection or surprise.\n\nOR\n\nQuestion 6\nWrite about a place that has changed since you first knew it.\n\nIn your writing you could:\n- describe the place as you first remember it\n- describe how it has changed, and why\n- reflect on what the change means to you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nWhen I was seven, the field at the end of our road was the biggest place in the world.\n\nIt was not really a field, I know that now. It was a scrubby triangle of land between the back gardens and the railway line, with a broken fence on one side and a single horse chestnut tree in the middle, leaning slightly, as if it were listening for trains. But to me and my friends it was a kingdom. In spring the grass grew taller than our heads, and we wore paths through it that led to dens nobody else could find. In autumn the chestnut dropped its conkers in their spiky green cases, and we split them open with our heels to find the polished brown treasure inside, so glossy it looked wet. In winter, when the field froze, every blade of grass was furred with white, and our breath hung over it like smoke.\n\nI remember the smell of it most: crushed grass and diesel from the passing trains, and after rain, a sharp green scent that seemed to rise straight out of the ground.\n\nThe first sign was a sign. It appeared one Monday, fixed to the fence on two metal legs: a picture of neat new houses with neat new families waving from their neat new windows. Planning permission granted. My mum read it out loud and then said, "Well, it was bound to happen," in the voice adults use when they are sad but do not want to discuss it.\n\nThe diggers came in March. I watched from my bedroom window as they peeled back the field like the lid of a tin. Our paths disappeared in an afternoon. The dens took an hour. The chestnut tree lasted until a Thursday, and I made myself watch, though I did not want to, because it felt wrong to let it go without anyone paying attention. It came down more quietly than I expected, with a long creak and a soft, heavy thump that I felt through the window glass.\n\nNow there are fourteen houses where the field was. They are perfectly nice houses. The families who live in them are perfectly nice families, and their children ride scooters up and down the smooth new pavement where our paths used to wind through the grass. One of them, a small boy in a red helmet, waved at me last week, and I waved back, and I wondered what his kingdom is, and whether he knows that he is standing in mine.\n\nI used to think that when a place changed, it simply stopped existing. I am not so sure any more. When I walk past those houses, I still know exactly where the chestnut stood: the third front garden on the left, just beside a silver car. I still know where the biggest den was, and where my friend Priya fell and broke her wrist, and where we buried a time capsule that nobody has ever dug up. It is all still there, underneath, the way old writing shows through a page that has been rubbed out.\n\nThe field has gone. But I have not finished remembering it, and as long as I remember it, it has not quite gone at all.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent narrator, a place on the edge of change described closely, and an ending of reflection or surprise.',
                'Question 6: a personal account that recreates the place as it was, shows clearly how and why it changed, and reflects on what the change means.',
                'Either task: a deliberate shape, varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': WRITING_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': WRITING_AO6_LEVELS,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },
]
