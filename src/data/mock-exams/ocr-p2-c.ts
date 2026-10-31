// @ts-nocheck

/**
 * OCR GCSE English Language Component 02, Exploring effects and impact
 * (J351/02): five mock papers, ocr-p2-11 to ocr-p2-15, each built on a
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
 * script, in whole paragraphs, from src/data/full-texts/the-great-gatsby.ts;
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
 * Each Fitzgerald passage was compared with the held text, paragraph by
 * paragraph, by the script that cut it. scripts/check-mock-exam-extracts.mjs
 * now holds The Great Gatsby too, and on 31 October 2026 found all five word
 * for word in it; each sits in the chapter its label names. (Until then this
 * note said the check had no entry for the novel.)
 *
 * THE BYLINES. Until 31 October 2026 each of these five passages was printed
 * under a byline naming a writer and a published book: "Eleanor Vance, The
 * Turning Drum (2019)", "Tariq Osman, The Long Crossing (2021)", "Priya
 * Kapoor, 'The Index', Futures Anthology (2023)", "Catherine Healey, The
 * Space You Left (2022)" and "Josephine Treadwell, Moss and Bone (2020)". The
 * passages and the bylines came into the repository together, when this bank
 * was written for the site on 22 March 2026 (commit c6da6e9ed), and nothing
 * records a source for any of them; scripts/check-mock-exam-extracts.mjs
 * could list them only as named sources it cannot verify. A byline that names
 * a person presents words written here as a published writer's, which is how
 * 67 of 128 "real writer" extracts in these banks were found to be invented
 * on 26 September 2026. Each passage is now labelled as written for this
 * practice paper, and its words are unchanged. The two quotations that the
 * extract check flagged as silent cuts (in ocr-p2-15) went with the old model
 * answers. On 31 October 2026 a distinctive sentence of each passage was
 * searched for on the web and none was found, and no question, mark scheme
 * or answer names any of the five writers or books.
 *
 * CHECKED 31 OCTOBER 2026 by a second reader, against both texts, the novel
 * and the guide. What was wrong, and what changed:
 * - Questions 2, 3 and 4 of each paper used OCR's own rubric sentences ("How
 *   far do you agree with this statement?", "In your answer you should:",
 *   "Support your ideas by referring to the text, using relevant subject
 *   terminology" with words added): each is now in this site's words.
 *   Question 4's comparison bullet, "compare how the two writers present", was
 *   OCR's June 2025 bullet with one word added; it now reads "compare the
 *   methods each writer uses to present", as papers 01 to 10 do.
 * - ocr-p2-12 Q4 answer: Gatsby gave up "two minutes before Daisy arrives";
 *   he gives up at two minutes to four, the moment her car turns in.
 * - ocr-p2-12 Q4 answer and scheme: "a rich, confident man"; nothing in the
 *   passage shows him confident. He is now the rich, finely dressed man it
 *   shows.
 * - ocr-p2-13 Q4 answer: Jess had "judged others" by the system; the text says
 *   she voted for it and defended it, and the answer now says that.
 * - ocr-p2-14 Q2 answer and scheme: two lists from two sentences were called
 *   "the longest sentence"; they are now two long sentences.
 * - ocr-p2-15 Q1 scheme: credited the open front door as how Gatsby looks or
 *   sounds; removed.
 * - ocr-p2-15 Q3 answer: "the colour of bone left out in weather" was called a
 *   simile, and words from two sentences "the last sentence"; both corrected.
 * - ocr-p2-15 Q3 scheme and Q4 answer: the door itself was "like a mouth"; the
 *   text says it of the dark gap of the open door.
 * - ocr-p2-15 Q4 answer: Gatsby's house was the one "he built" for Daisy; a
 *   brewer built it (Chapter V), and the passage says nothing of why he has it.
 * - ocr-p2-15 Q4 answer: "her house" for the house in Text 2 could be read
 *   as the writer's, whom the old byline made a woman; it is now Emmeline's
 *   house.
 * - ocr-p2-15 Q4 answer: Gatsby's house "has changed overnight"; the passage
 *   says how it seemed that night, its rooms unaired "for many days". It now
 *   "seems to have changed".
 */

import type { MockExamPaper } from './types'

// ─── Text 2 of each paper: passages written for this site ───────────────────
// Kept word for word from the papers as they were before 31 October 2026.

const EXTRACT_11 = `The laundrette was the only place on the estate that stayed warm past six o'clock. Rita knew this because she had tried everywhere else: the library closed at five-thirty, the community centre had stopped opening on Tuesdays, and the chip shop owner had started giving her looks that said she had outstayed her welcome an hour ago.

She fed two pound coins into the machine and watched her son's school uniform turn slow circles behind the glass. The fabric was getting thin at the elbows. She could see the pale weave beneath the navy, threads separating like tired fingers letting go of a ledge. Next term they would need new ones, and next term was three weeks away, and three weeks might as well have been three centuries for all the difference it made to her bank balance.

A woman she half-recognised sat at the far end of the bench, folding towels with the mechanical precision of someone who had folded ten thousand towels before and expected to fold ten thousand more. Neither of them spoke. There was a kind of agreement in places like this - an understanding that silence was not unfriendliness but simply the sound of people conserving what little energy they had left.

Outside, rain hit the plate-glass window in irregular bursts, each gust pressing water against the glass like a palm laid flat. The fluorescent light above the dryer flickered once, twice, then held steady. Rita pulled her coat tighter and calculated: electricity meter, bus fare, the school trip letter crumpled at the bottom of her bag requesting twelve pounds she did not have. The numbers circled in her head the same way the uniform circled in the drum - endlessly, going nowhere, always coming back to the same position.`

const EXTRACT_11_SOURCE =
  'Specially written for this practice paper: an original story set on a housing estate, not from a published book'

const EXTRACT_12 = `The rope bridge swayed thirty feet above the gorge and Kai could feel every one of those feet in the looseness of his knees. Below, the river had carved itself a channel through black rock, the water so fast and so white that it looked solid - a frozen scream of foam wedged between the cliffs. Spray rose in curtains and soaked the wooden slats ahead of him, turning each one into a gamble.

He had crossed bridges like this before, or told himself he had. The training ground at Dohar had rope bridges strung between towers, but those were twelve feet up and the ground beneath was sand. This was different. This was the kind of crossing that separated the people who talked about courage from the people who had it.

His guide, Amara, was already on the other side. She stood with her arms folded, one foot resting on a boulder, watching him with an expression that might have been patience or might have been contempt. It was hard to tell with Amara. She had a face that gave nothing away - weathered brown skin, deep-set eyes, a mouth that sat in a permanent line between severity and amusement.

"Move your feet," she called across the gorge. Her voice barely carried over the water's roar. "Don't look at the river. Look at the next slat."

Kai looked at the next slat. It was dark with moisture, its grain swollen, a crack running along one edge like a vein in a wrist. He placed his foot on it and felt it bow under his weight. The ropes groaned. The whole structure tilted two inches to the left and his stomach tilted with it.

He thought about turning back. He thought about the village they had left that morning, the fire in the stone hearth, the woman who had given him bread and not asked for payment. He could be there now. Safe. Warm. Ordinary. But ordinary was the thing he had left home to escape, and the mountain on the far side of the gorge held something that no amount of safety could replace: an answer.`

const EXTRACT_12_SOURCE =
  'Specially written for this practice paper: an original adventure story, not from a published book'

const EXTRACT_13 = `The notification arrived at 6:47 a.m., the way all the worst ones did - early enough to ruin breakfast, too late to pretend you had not seen it. Jess stared at the screen embedded in her kitchen counter and read the words twice, then a third time, because her brain refused to accept them at normal speed.

CITIZEN UPDATE - CLASSIFICATION REVISION
Your Productivity Index has been recalculated.
Previous rating: 7.2 (Contributor)
Updated rating: 4.1 (Dependent)
Please report to your nearest Reassignment Centre within 48 hours.

She put down her coffee cup with exaggerated care, as if the steadiness of her hand could compensate for the chaos erupting behind her ribs. Dependent. The word sat in her chest like a stone dropped into still water, sending ripples outward through every plan she had made, every assumption about what her life would look like next week, next month, next year.

Through the window, the city carried on as though nothing had happened. Commuter pods slid along their magnetic rails in neat silver lines. The park across the street was immaculate - the grass a regulation green, the trees pruned into shapes that looked organic from a distance but up close revealed the geometric precision of algorithmic landscaping. A maintenance drone floated past her window, its single lens swivelling to face her for exactly two seconds before moving on. She resisted the urge to wave.

Jess had always believed in the system. That was the hardest part. She had voted for the Productivity Index in the referendum of 2031, had argued with her mother about it over Sunday dinners, had written a university essay defending it with the earnest conviction of someone who had never imagined it might one day be turned against her. The system worked. The system was fair. The system ensured that everyone contributed according to their ability and received according to their output. She had believed this the way she believed in gravity - not as an opinion but as a fact of the physical world.

Now gravity had reversed, and she was falling upward into nothing.`

const EXTRACT_13_SOURCE =
  'Specially written for this practice paper: an original science-fiction story, not from a published book'

const EXTRACT_14 = `The kitchen table had been in the family for forty years, and it showed. Its surface was a map of their history: the burn mark from the Christmas Eve when Dad had put the casserole dish down without a mat; the ring of white where Mum's plant pot had sat for a decade, leaching moisture into the oak; the crescent of gouges along one edge where Sophie had done her homework with a compass in Year 8, pressing too hard because the maths was too hard.

Now they sat around it - Sophie, Dad, and the absence that occupied Mum's chair - and tried to have a conversation about selling the house.

"It's just bricks," Dad said, the way he always said difficult things: quickly, as if speed could outrun the pain. He wrapped both hands around his mug and looked at a point somewhere above Sophie's left shoulder.

Sophie wanted to say: it is not just bricks. It is the pencil marks on the doorframe where you measured me every birthday until I was fifteen. It is the garden where Mum grew tomatoes that never quite ripened. It is the creak on the seventh stair that I can still hear when I close my eyes in my flat in London, two hundred miles away, lying awake at three in the morning, missing a version of this house that probably never existed in exactly the way I remember it.

Instead she said: "Have you spoken to an estate agent?"

Dad nodded. His hair had gone completely white since the funeral. It had happened so fast that Sophie sometimes did a double-take when she saw him, as though her father had been replaced by an older, frailer understudy who had learned the part but could not quite inhabit it.

"They said spring would be best," he said. "The garden looks better in spring."

The garden. Mum's garden. The roses she had fed and pruned and fussed over and talked to - actually talked to, full sentences, as though the plants were more responsive than her family, which, Sophie reflected with a guilt that tasted like iron, they probably were.`

const EXTRACT_14_SOURCE =
  'Specially written for this practice paper: an original story about a family, not from a published book'

const EXTRACT_15 = `The house had been dying for longer than anyone in Colter County could remember. It stood at the end of a dirt road that the parish had stopped maintaining in 1987, its porch sagging like a jaw gone slack, its clapboard siding the colour of bone left out in weather. Live oaks crowded the yard, their branches hung so heavy with Spanish moss that they seemed to be dragging themselves toward the ground in slow, grey exhaustion.

Emmeline had not been back in eleven years, and the house had made use of every one of them. The front steps, which her grandfather had built from cypress wood and sworn would last a century, gave under her foot with a sound like a sigh. The screen door hung from a single hinge. Behind it, the main door stood open, darkness visible through the gap like a mouth that had been waiting to speak.

She went in. The hallway smelled of damp and something older - a sweetness that was not quite rot but was heading in that direction, the way fruit smells the day before it turns. Wallpaper peeled from the walls in long curls, revealing the plaster beneath, which was cracked and stained with watermarks that formed shapes she did not want to interpret.

The parlour was as she remembered it, and worse. Her grandmother's furniture was still arranged with the formal precision of a woman who believed that appearances were not merely important but were, in fact, the only thing standing between civilisation and chaos. The settee, the wing chair, the mahogany side table with its doily gone yellow. But over everything lay a film of dust so thick it looked deliberate, as though the house had been slowly upholstering itself in grey.

On the mantelpiece, a photograph: her grandmother, her mother, herself - three generations of women arranged on the front porch in descending order of height, squinting into sunlight, none of them smiling. Emmeline picked it up. The glass was cracked across her mother's face, a diagonal line that split her from forehead to chin. She put it back exactly where it had been, in the dust-free rectangle that marked its place like a grave plot, and she understood something she had driven four hundred miles to avoid understanding: that she had not come back to sell the house. She had come back because the house had summoned her, the way it always did, the way every haunted thing eventually calls its ghosts home.`

const EXTRACT_15_SOURCE =
  'Specially written for this practice paper: an original Gothic story set in the American South, not from a published book'

// ─── Text 1 of each paper: F. Scott Fitzgerald, The Great Gatsby (1925) ──────
// Cut by script, in whole paragraphs, from src/data/full-texts/the-great-gatsby.ts
// (the 1925 first edition as transcribed and checked against the page scans by
// Wikisource). Italic markers are dropped; nothing else is changed, including
// the edition's American spelling and its punctuation.

// Chapter III, paragraphs 1-3.
const GATSBY_11 = `There was music from my neighbor’s house through the summer nights. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars. At high tide in the afternoon I watched his guests diving from the tower of his raft, or taking the sun on the hot sand of his beach while his two motor-boats slit the waters of the Sound, drawing aquaplanes over cataracts of foam. On week-ends his Rolls-Royce became an omnibus, bearing parties to and from the city between nine in the morning and long past midnight, while his station wagon scampered like a brisk yellow bug to meet all trains. And on Mondays eight servants, including an extra gardener, toiled all day with mops and scrubbing-brushes and hammers and garden-shears, repairing the ravages of the night before.

Every Friday five crates of oranges and lemons arrived from a fruiterer in New York—every Monday these same oranges and lemons left his back door in a pyramid of pulpless halves. There was a machine in the kitchen which could extract the juice of two hundred oranges in half an hour if a little button was pressed two hundred times by a butler’s thumb.

At least once a fortnight a corps of caterers came down with several hundred feet of canvas and enough colored lights to make a Christmas tree of Gatsby’s enormous garden. On buffet tables, garnished with glistening hors-d’œuvre, spiced baked hams crowded against salads of harlequin designs and pastry pigs and turkeys bewitched to a dark gold. In the main hall a bar with a real brass rail was set up, and stocked with gins and liquors and with cordials so long forgotten that most of his female guests were too young to know one from another.`

const GATSBY_11_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter III'

// Chapter V, paragraphs 34-48.
const GATSBY_12 = `The day agreed upon was pouring rain. At eleven o’clock a man in a raincoat, dragging a lawn-mower, tapped at my front door and said that Mr. Gatsby had sent him over to cut my grass. This reminded me that I had forgotten to tell my Finn to come back, so I drove into West Egg Village to search for her among soggy whitewashed alleys and to buy some cups and lemons and flowers.

The flowers were unnecessary, for at two o’clock a greenhouse arrived from Gatsby’s, with innumerable receptacles to contain it. An hour later the front door opened nervously, and Gatsby, in a white flannel suit, silver shirt, and gold-colored tie, hurried in. He was pale, and there were dark signs of sleeplessness beneath his eyes.

“Is everything all right?” he asked immediately.

“The grass looks fine, if that’s what you mean.”

“What grass?” he inquired blankly. “Oh, the grass in the yard.” He looked out the window at it, but, judging from his expression, I don’t believe he saw a thing.

“Looks very good,” he remarked vaguely. “One of the papers said they thought the rain would stop about four. I think it was The Journal. Have you got everything you need in the shape of—of tea?”

I took him into the pantry, where he looked a little reproachfully at the Finn. Together we scrutinized the twelve lemon cakes from the delicatessen shop.

“Will they do?” I asked.

“Of course, of course! They’re fine!” and he added hollowly, “. . . old sport.”

The rain cooled about half-past three to a damp mist, through which occasional thin drops swam like dew. Gatsby looked with vacant eyes through a copy of Clay’s “Economics,” starting at the Finnish tread that shook the kitchen floor, and peering toward the bleared windows from time to time as if a series of invisible but alarming happenings were taking place outside. Finally he got up and informed me, in an uncertain voice, that he was going home.

“Why’s that?”

“Nobody’s coming to tea. It’s too late!” He looked at his watch as if there was some pressing demand on his time elsewhere. “I can’t wait all day.”

“Don’t be silly; it’s just two minutes to four.”

He sat down miserably, as if I had pushed him, and simultaneously there was the sound of a motor turning into my lane. We both jumped up, and, a little harrowed myself, I went out into the yard.

Under the dripping bare lilac-trees a large open car was coming up the drive. It stopped. Daisy’s face, tipped sideways beneath a three-cornered lavender hat, looked out at me with a bright ecstatic smile.`

const GATSBY_12_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter V'

// Chapter I, paragraphs 13-15.
const GATSBY_13 = `It was a matter of chance that I should have rented a house in one of the strangest communities in North America. It was on that slender riotous island which extends itself due east of New York—and where there are, among other natural curiosities, two unusual formations of land. Twenty miles from the city a pair of enormous eggs, identical in contour and separated only by a courtesy bay, jut out into the most domesticated body of salt water in the Western hemisphere, the great wet barnyard of Long Island Sound. They are not perfect ovals—like the egg in the Columbus story, they are both crushed flat at the contact end—but their physical resemblance must be a source of perpetual wonder to the gulls that fly overhead. To the wingless a more interesting phenomenon is their dissimilarity in every particular except shape and size.

I lived at West Egg, the—well, the less fashionable of the two, though this is a most superficial tag to express the bizarre and not a little sinister contrast between them. My house was at the very tip of the egg, only fifty yards from the Sound, and squeezed between two huge places that rented for twelve or fifteen thousand a season. The one on my right was a colossal affair by any standard—it was a factual imitation of some Hôtel de Ville in Normandy, with a tower on one side, spanking new under a thin beard of raw ivy, and a marble swimming pool, and more than forty acres of lawn and garden. It was Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a mansion inhabited by a gentleman of that name. My own house was an eyesore, but it was a small eyesore, and it had been overlooked, so I had a view of the water, a partial view of my neighbor’s lawn, and the consoling proximity of millionaires—all for eighty dollars a month.

Across the courtesy bay the white palaces of fashionable East Egg glittered along the water, and the history of the summer really begins on the evening I drove over there to have dinner with the Tom Buchanans. Daisy was my second cousin once removed, and I’d known Tom in college. And just after the war I spent two days with them in Chicago.`

const GATSBY_13_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter I'

// Chapter V, paragraphs 112-122.
const GATSBY_14 = `He hadn’t once ceased looking at Daisy, and I think he revalued everything in his house according to the measure of response it drew from her well-loved eyes. Sometimes, too, he stared around at his possessions in a dazed way, as though in her actual and astounding presence none of it was any longer real. Once he nearly toppled down a flight of stairs.

His bedroom was the simplest room of all—except where the dresser was garnished with a toilet set of pure dull gold. Daisy took the brush with delight, and smoothed her hair, whereupon Gatsby sat down and shaded his eyes and began to laugh.

“It’s the funniest thing, old sport,” he said hilariously. “I can’t— When I try to—”

He had passed visibly through two states and was entering upon a third. After his embarrassment and his unreasoning joy he was consumed with wonder at her presence. He had been full of the idea so long, dreamed it right through to the end, waited with his teeth set, so to speak, at an inconceivable pitch of intensity. Now, in the reaction, he was running down like an overwound clock.

Recovering himself in a minute he opened for us two hulking patent cabinets which held his massed suits and dressing-gowns and ties, and his shirts, piled like bricks in stacks a dozen high.

“I’ve got a man in England who buys me clothes. He sends over a selection of things at the beginning of each season, spring and fall.”

He took out a pile of shirts and began throwing them, one by one, before us, shirts of sheer linen and thick silk and fine flannel, which lost their folds as they fell and covered the table in many colored disarray. While we admired he brought more and the soft rich heap mounted higher—shirts with stripes and scrolls and plaids in coral and applegreen and lavender and faint orange, with monograms of Indian blue. Suddenly, with a strained sound, Daisy bent her head into the shirts and began to cry stormily.

“They’re such beautiful shirts,” she sobbed, her voice muffled in the thick folds. “It makes me sad because I’ve never seen such—such beautiful shirts before.”

After the house, we were to see the grounds and the swimming-pool, and the hydroplane and the midsummer flowers—but outside Gatsby’s window it began to rain again, so we stood in a row looking at the corrugated surface of the Sound.

“If it wasn’t for the mist we could see your home across the bay,” said Gatsby. “You always have a green light that burns all night at the end of your dock.”

Daisy put her arm through his abruptly, but he seemed absorbed in what he had just said. Possibly it had occurred to him that the colossal significance of that light had now vanished forever. Compared to the great distance that had separated him from Daisy it had seemed very near to her, almost touching her. It had seemed as close as a star to the moon. Now it was again a green light on a dock. His count of enchanted objects had diminished by one.`

const GATSBY_14_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter V'

// Chapter VIII, paragraphs 1-4.
const GATSBY_15 = `I couldn’t sleep all night; a fog-horn was groaning incessantly on the Sound, and I tossed half-sick between grotesque reality and savage, frightening dreams. Toward dawn I heard a taxi go up Gatsby’s drive, and immediately I jumped out of bed and began to dress—I felt that I had something to tell him, something to warn him about, and morning would be too late.

Crossing his lawn, I saw that his front door was still open and he was leaning against a table in the hall, heavy with dejection or sleep.

“Nothing happened,” he said wanly. “I waited, and about four o’clock she came to the window and stood there for a minute and then turned out the light.”

His house had never seemed so enormous to me as it did that night when we hunted through the great rooms for cigarettes. We pushed aside curtains that were like pavilions, and felt over innumerable feet of dark wall for electric light switches—once I tumbled with a sort of splash upon the keys of a ghostly piano. There was an inexplicable amount of dust everywhere, and the rooms were musty, as though they hadn’t been aired for many days. I found the humidor on an unfamiliar table, with two stale, dry cigarettes inside. Throwing open the French windows of the drawing-room, we sat smoking out into the darkness.`

const GATSBY_15_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter VIII'

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

export const ocrP2C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 11: Money and how people live
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-11',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-11-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, describes the parties given every weekend by his rich neighbour, Gatsby, at his mansion on Long Island.\n\nText 2 is a story specially written for this practice paper. Rita, a mother who is short of money, is spending the evening in a laundrette on a housing estate.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-11-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "There was music" to "the night before".\n\n(a) Give two things that Gatsby\'s guests do in the afternoon. [2]\n\n(b) What does Gatsby\'s Rolls-Royce become at weekends? [1]\n\n(c) What do the eight servants do on Mondays? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_11}\n\nText 2:\n${EXTRACT_11}`,
            extractSource: `Text 1: ${GATSBY_11_SOURCE} | Text 2: ${EXTRACT_11_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Any two of: they dive from the tower of his raft; they lie in the sun on the hot sand of his beach; they are drawn on aquaplanes behind his motor-boats.\n(b) An omnibus, carrying parties to and from the city.\n(c) They clean and mend the house and garden after the party, repairing the damage of the night before.',
            },
            markScheme: [
              '(a) 1 mark for each of two of: "diving from the tower of his raft"; "taking the sun on the hot sand of his beach"; riding on aquaplanes drawn by his motor-boats.',
              '(b) 1 mark: "an omnibus", or a bus that carries guests to and from the city.',
              '(c) 1 mark: they clean and repair, "repairing the ravages of the night before", or they work all day with mops, brushes, hammers and shears.',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-11-q2',
            questionNumber: 2,
            questionText:
              'Look again at the second and third paragraphs of Text 1, from "Every Friday" to the end.\n\nHow does the writer use language and structure to show the wealth and the waste of Gatsby\'s parties?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_11,
            extractSource: GATSBY_11_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald shows wealth through quantity and waste through structure. The second paragraph opens with a precise, balanced contrast: "Every Friday five crates of oranges and lemons arrived", while "every Monday these same oranges and lemons left his back door in a pyramid of pulpless halves". The repetition of "every" and of "oranges and lemons" frames a whole weekend of consumption in a single sentence, and the image of a "pyramid of pulpless halves", with its alliteration on "p", turns the waste into a kind of monument. The machine that extracts "the juice of two hundred oranges in half an hour" sounds like modern luxury, but the condition "if a little button was pressed two hundred times by a butler\'s thumb" exposes the human labour behind it, and the repeated "two hundred" makes the effort sound absurd.\n\nThe third paragraph piles up abundance in long lists. Caterers bring "several hundred feet of canvas and enough colored lights to make a Christmas tree of Gatsby\'s enormous garden", a metaphor that turns the garden into one giant decoration. The food comes in a rich, crowded sentence: "spiced baked hams crowded against salads of harlequin designs and pastry pigs and turkeys bewitched to a dark gold". The verb "crowded" and the repeated "and" make the tables seem overloaded, while "bewitched" makes the food seem magical rather than real. The paragraph ends with cordials "so long forgotten that most of his female guests were too young to know one from another", a wry detail which suggests that the guests cannot even appreciate what is spent on them.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the balanced "Every Friday" and "every Monday" and the image of "a pyramid of pulpless halves".',
                'Comment on the juice machine and the "butler\'s thumb" that exposes the labour behind the luxury.',
                'Analysis of the long lists and the metaphor of "a Christmas tree", the crowded food ("turkeys bewitched to a dark gold") and the wry final detail about the cordials.',
                'Structure: a weekly cycle of arrival and waste, then a paragraph that piles up more and more.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-11-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Rita's situation and feelings.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Rita as a woman trapped by poverty, and the language and structure keep returning to images of circling, waiting and making do.\n\nThe opening sentence establishes her situation through a plain, practical fact: "The laundrette was the only place on the estate that stayed warm past six o\'clock." The detail reveals, without saying so, that she cannot afford to heat her home. The list that follows, "the library closed at five-thirty, the community centre had stopped opening on Tuesdays", shows how carefully she has searched for warmth, and the chip shop owner\'s "looks that said she had outstayed her welcome" adds the shame of being unwanted.\n\nThe second paragraph turns to her son\'s uniform, which becomes a symbol of her worries. It turns "slow circles behind the glass", and the fabric is wearing thin, its "threads separating like tired fingers letting go of a ledge". The simile is striking because it suggests desperation and exhaustion, as if the threads, like Rita, were barely holding on. The sentence that follows uses repetition and hyperbole, "next term was three weeks away, and three weeks might as well have been three centuries", to show that time cannot help when money is the problem.\n\nThe third paragraph widens the focus to another woman, folding towels "with the mechanical precision of someone who had folded ten thousand towels before and expected to fold ten thousand more". The repeated "ten thousand" makes hers a life of endless, unchanging labour, which reflects Rita\'s own. Their silence is explained as "simply the sound of people conserving what little energy they had left", a phrase that presents tiredness as a shared condition of the estate rather than a personal failing.\n\nThe final paragraph combines the setting and her thoughts. The rain, "pressing water against the glass like a palm laid flat", seems to press in on her, and the light that "flickered once, twice, then held steady" creates a moment of tension, as if even the electricity were uncertain. Her thinking is then presented as a list of costs, "electricity meter, bus fare, the school trip letter", ending on "twelve pounds she did not have", a blunt phrase that names the problem exactly.\n\nThe last sentence ties the structure together. "The numbers circled in her head the same way the uniform circled in the drum", and the closing phrase, "endlessly, going nowhere, always coming back to the same position", echoes the uniform\'s "slow circles" from the second paragraph. This circular image shows that Rita\'s worries have no way out, and the text itself ends with nothing in her situation changed.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of how the opening reveals her poverty indirectly ("the only place on the estate that stayed warm past six o\'clock") and of the shame in the chip shop owner\'s looks.',
                'Comment on the uniform as a symbol, the simile "like tired fingers letting go of a ledge", and the hyperbole of "three centuries".',
                'Comment on the other woman\'s endless labour ("ten thousand towels") and the shared silence of tiredness.',
                'Structure: the list of costs ending on "twelve pounds she did not have", and the circular final sentence that echoes the uniform\'s "slow circles".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-11-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show that money decides how people live.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the lives described in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present wealth and poverty\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_11}\n\nText 2:\n${EXTRACT_11}`,
            extractSource: `Text 1: ${GATSBY_11_SOURCE} | Text 2: ${EXTRACT_11_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree. Both texts show lives shaped by money, though from opposite ends: Text 1 shows what limitless wealth makes possible and what it wastes, while Text 2 shows how the lack of money narrows every part of Rita\'s life.\n\nIn Text 1, money makes everything happen on a vast scale. Gatsby\'s guests dive "from the tower of his raft", "his two motor-boats slit the waters of the Sound", and "his Rolls-Royce became an omnibus". The repeated possessive "his" shows that all this pleasure belongs to one man\'s wealth. Money also creates waste: "eight servants, including an extra gardener, toiled all day" to repair "the ravages of the night before", and the oranges leave "in a pyramid of pulpless halves". The detail that the juice machine depends on a button "pressed two hundred times by a butler\'s thumb" shows that wealth also decides how other people live, since the servants\' days are shaped by Gatsby\'s parties. As a reader I am dazzled but also uneasy, because the extravagance seems empty.\n\nIn Text 2, money, or the lack of it, decides even where Rita can be warm. The laundrette is "the only place on the estate that stayed warm past six o\'clock", and she spends her evening there because she cannot heat her home. Her son\'s uniform is "getting thin at the elbows", and three weeks "might as well have been three centuries for all the difference it made to her bank balance". Her thoughts are a list of bills, "electricity meter, bus fare, the school trip letter", ending with "twelve pounds she did not have". Money controls her time, her movements and even her silence, which the writer describes as people "conserving what little energy they had left".\n\nThe writers\' methods sharpen the contrast. Fitzgerald uses long, flowing sentences crowded with lists of luxury, such as "spiced baked hams crowded against salads of harlequin designs and pastry pigs", so the prose itself feels overloaded. The writer of Text 2 uses plainer sentences and practical details, such as "two pound coins", so the prose feels careful and counted, like Rita\'s money. Both writers use circular images. In Text 1 the oranges arrive "Every Friday" and leave "every Monday", a weekly cycle of excess; in Text 2 the uniform turns "slow circles" and the numbers circle "endlessly, going nowhere". Both cycles suggest that nothing changes: the rich go on spending, and the poor go on worrying.\n\nOverall, I agree. Money decides how people live in both texts, but its effects are opposite. In Text 1 it buys pleasure for some and labour for others, and its waste hints at emptiness. In Text 2 its absence narrows a whole life to a warm laundrette and a list of costs. Read together, the two texts make each other more striking: the "pyramid of pulpless halves" seems even more wasteful beside Rita\'s "twelve pounds she did not have".',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: pleasure on a vast scale that belongs to one man\'s wealth, the servants whose days it shapes, and the waste of the "pyramid of pulpless halves".',
                'Text 2: a life narrowed by the lack of money, from where Rita can be warm to the "twelve pounds she did not have".',
                'Comparison of methods: crowded lists of luxury against plain, counted details; weekly cycles of excess against the circling uniform and numbers.',
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
        id: 'ocr-p2-11-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-11-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'Just Enough'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- describe a setting that reveals how the characters live\n- show a small moment that matters a great deal.\n\nOR\n\nQuestion 6\nWrite about a time when you had to manage without something you needed or wanted.\n\nIn your writing you could:\n- describe the situation and how it felt\n- explain what you did, or what other people did to help\n- reflect on what the experience taught you about what matters.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nJust Enough\n\nMum counted the coins twice before we went in, laying them out on her palm under the street light: a pound, a fifty, three twenties and a scatter of coppers that winked like small brown eyes.\n\n"Two pounds eighteen," she said. "That\'s a hot chocolate, Ellie. With cream, if we\'re lucky."\n\nThe café on Market Street had steamed-up windows and a bell over the door that jangled when we pushed it open. Inside, the warmth hit us like a hug. It smelled of toast and coffee and something sweet and cinnamon that made my stomach turn over with longing. A man in a paint-splashed jacket was reading a newspaper by the radiator. Two old ladies were sharing a teacake with great ceremony, cutting it into smaller and smaller pieces as if to make it last for ever.\n\nWe sat at the table by the window, the one with the wobbly leg that everybody avoids. Mum folded her hands on the plastic tablecloth. She was still wearing her work tabard under her coat, and I could see the name badge pinned to it, slightly crooked.\n\n"Your choice," she said. "Anything up to two pounds eighteen."\n\nI studied the menu as if it were an exam. Hot chocolate was two pounds ten. With cream it was two pounds forty. I did the sum four times, hoping the answer would change, and it did not.\n\n"Just a plain one," I said. "I don\'t really like cream."\n\nThat was a lie, and Mum knew it was a lie, because she had watched me eat squirty cream straight from the can on my birthday. But she did not say anything. She just reached across and tucked a strand of hair behind my ear, which is what she does when there are words she has decided not to say.\n\nThe hot chocolate came in a tall glass mug, so hot I had to hold it by the handle. I pushed it into the middle of the table.\n\n"Halves," I said.\n\n"It\'s yours, love."\n\n"Halves," I said again, and she smiled the tired smile that makes her look younger and older at the same time, and she took the first sip.\n\nWe passed it back and forth. Outside, the rain started, fine and silver under the street lights, and the window fogged over until the whole world shrank to the size of our table. I told her about my science test. She told me about a customer who had tried to return a lamp he had obviously dropped. We laughed so loudly that the old ladies looked round.\n\nWhen I went up to pay, the woman behind the counter took the coins without counting them and put a small paper bag into my hand.\n\n"Day-old," she said, before I could argue. "Just going in the bin."\n\nInside were two cinnamon buns, still faintly warm.\n\nI carried them back to the table as carefully as if they were made of glass. Mum looked at the bag, and then at the woman, who was suddenly very busy wiping the coffee machine.\n\n"Well," Mum said quietly. "That\'s just enough, isn\'t it."\n\nWe ate them slowly, the way the old ladies ate their teacake, making them last. It was the best meal I have ever had. Not because of the buns, though they were very good, but because for half an hour, with two pounds eighteen and a wobbly table, we had exactly what we needed.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, a setting that reveals how the characters live, and a small moment that carries real weight.',
                'Question 6: a personal account that shows what was missing and how it felt, explains how the writer or others managed, and reflects on what matters.',
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
  // PAPER 12: Nerve
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-12',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-12-reading',
        title: 'Section A: Reading',
        description:
          "Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. Gatsby has asked the narrator, Nick Carraway, to invite Daisy, a woman Gatsby loved five years before, to tea at Nick's small house, so that Gatsby can meet her again. This is the day of the tea.\n\nText 2 is a story specially written for this practice paper. Kai, a young traveller, is crossing a rope bridge high above a mountain river.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-12-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first two paragraphs of Text 1, from "The day agreed upon" to "beneath his eyes."\n\n(a) Who comes to Nick\'s door at eleven o\'clock, and why? [1]\n\n(b) What arrives from Gatsby\'s house at two o\'clock? [1]\n\n(c) Give two details that show that Gatsby is nervous or has not slept. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_12}\n\nText 2:\n${EXTRACT_12}`,
            extractSource: `Text 1: ${GATSBY_12_SOURCE} | Text 2: ${EXTRACT_12_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) A man with a lawn-mower, sent by Gatsby to cut Nick\'s grass.\n(b) A "greenhouse" of flowers, with containers to hold them.\n(c) Any two of: the front door opens nervously; he hurries in; he is pale; there are dark signs of sleeplessness beneath his eyes.',
            },
            markScheme: [
              '(a) 1 mark: a man sent by Gatsby to cut the grass.',
              '(b) 1 mark: a mass of flowers ("a greenhouse"), with containers for them.',
              '(c) 1 mark for each of two of: the door "opened nervously"; he "hurried in"; "He was pale"; "dark signs of sleeplessness beneath his eyes".',
              'Credit only answers drawn from the first two paragraphs. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-12-q2',
            questionNumber: 2,
            questionText:
              'Look again at Text 1, from "The rain cooled" to "I went out into the yard."\n\nHow does the writer use language and structure to show Gatsby\'s nervousness as he waits?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_12,
            extractSource: GATSBY_12_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald shows Gatsby\'s nerves through what he cannot do: concentrate, keep still or wait. The section opens with the weather easing, as the rain cools "to a damp mist, through which occasional thin drops swam like dew", a soft, slow image that contrasts with Gatsby\'s agitation. He looks "with vacant eyes" through a book, and the adjective "vacant" shows that he takes nothing in. The verb "starting" shows him jumping at ordinary sounds, and the long sentence ends with him "peering toward the bleared windows" as if "a series of invisible but alarming happenings were taking place outside", a comic exaggeration that reveals how fast his imagination is racing.\n\nThe structure then breaks into short, sharp dialogue. His announcement that he is going home comes "in an uncertain voice", and his excuse, "Nobody\'s coming to tea. It\'s too late!", followed by "I can\'t wait all day.", is a run of short, panicky sentences. Nick\'s calm reply, "it\'s just two minutes to four", undercuts it with humour.\n\nThe climax is timed exactly. Gatsby "sat down miserably, as if I had pushed him", a simile that shows him collapsing in defeat, and "simultaneously" the car arrives. The adverb links his giving up to the very moment his hope is answered, and Nick\'s own admission, "a little harrowed myself", shows that the tension has spread to him too.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the calm, slow weather set against Gatsby\'s agitation, and on the "vacant eyes" and the comic exaggeration of "invisible but alarming happenings".',
                "Comment on the short, panicky lines of dialogue (\"Nobody's coming to tea. It's too late!\") and Nick's calm reply.",
                'Analysis of the simile "as if I had pushed him" and of the adverb "simultaneously", which times his surrender to the car\'s arrival.',
                'Structure: a slow build of nerves, the break into dialogue, then the climax at "two minutes to four".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-12-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Kai's fear as he crosses the bridge.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Kai\'s fear as both physical and moral: his body is frightened by the height, and his mind is tested by the question of whether he is brave.\n\nThe opening sentence connects the danger to his body at once. The bridge sways "thirty feet above the gorge", and Kai "could feel every one of those feet in the looseness of his knees", a play on "feet" that turns a measurement into a sensation. The river below is described in violent, contradictory imagery: the water is "so fast and so white that it looked solid", and the metaphor "a frozen scream of foam" joins movement, stillness and terror in a single phrase. The final clause, "turning each one into a gamble", makes every step a risk.\n\nThe second paragraph adds self-doubt. The correction "or told himself he had" reveals that his confidence may be self-deception, and the contrast with the training ground, only "twelve feet up" with sand beneath, makes the real crossing seem far more serious. The sentences "This was different." and "This was the kind of crossing that separated the people who talked about courage from the people who had it" begin with the same words, and the repetition raises the stakes from danger to identity.\n\nThe third paragraph shifts the focus to Amara, which increases the pressure on Kai. Her calm posture, "arms folded, one foot resting on a boulder", contrasts with his loose knees, and her unreadable expression, which "might have been patience or might have been contempt", makes him feel judged. Her instructions in the fourth paragraph are short imperatives, "Move your feet" and "Look at the next slat", and the detail that "Her voice barely carried over the water\'s roar" stresses how alone he is.\n\nThe fifth paragraph slows down to a single step. The slat is examined closely, "dark with moisture, its grain swollen", and the simile "a crack running along one edge like a vein in a wrist" brings the human body back into the image, which makes the danger feel fragile and personal. The short sentence "The ropes groaned." creates tension, and the parallel "The whole structure tilted two inches to the left and his stomach tilted with it" ties the bridge\'s movement to his fear.\n\nThe final paragraph moves inside his mind. The repeated "He thought about" shows him drawn towards safety, and the three one-word sentences "Safe. Warm. Ordinary." make the comfort he imagines sound tempting. But the turn in "But ordinary was the thing he had left home to escape" changes his fear into determination. The text ends on "an answer", held back until after the colon, so the reader understands why he will keep going without learning what he hopes to find.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of fear felt in the body ("every one of those feet in the looseness of his knees") and of the violent imagery of the river ("a frozen scream of foam").',
                'Comment on self-doubt ("or told himself he had") and on the repetition that turns the crossing into a test of courage.',
                'Comment on Amara as an unreadable judge and on the close detail of the slat ("like a vein in a wrist").',
                'Structure: the slowing to a single step, the short sentences of tension, the temptation of "Safe. Warm. Ordinary." and the turn to determination that ends on "an answer".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-12-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show characters who almost give up just before they reach what they want.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the two characters and what they want\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present fear and nerve\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_12}\n\nText 2:\n${EXTRACT_12}`,
            extractSource: `Text 1: ${GATSBY_12_SOURCE} | Text 2: ${EXTRACT_12_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement for both texts, though Fitzgerald treats the moment comically and the writer of Text 2 seriously, and only one of the two characters actually reaches what he wants within the passage.\n\nIn Text 1, Gatsby\'s nerves build all afternoon until he gives up. He arrives "pale", with "dark signs of sleeplessness beneath his eyes", and he cannot concentrate: he looks "with vacant eyes" through a book and peers out as if "invisible but alarming happenings were taking place outside". Finally he announces that he is "going home", insisting, "Nobody\'s coming to tea. It\'s too late!" The irony is that it is "just two minutes to four", and at the moment he sits down "miserably, as if I had pushed him", Daisy\'s car arrives "simultaneously". Fitzgerald times the near surrender to the second, so Gatsby very nearly gives up just before he reaches what he wants. The text ends with Daisy\'s "bright ecstatic smile", so the reader knows that he has succeeded, at least for now. As a reader I find this funny and touching: a rich man, dressed in "a white flannel suit, silver shirt, and gold-colored tie", undone by a tea party.\n\nIn Text 2, Kai\'s temptation to give up is more serious. "He thought about turning back", and the village he imagines, with its "fire in the stone hearth", is summed up as "Safe. Warm. Ordinary." The danger is real: the slat bows "under his weight" and "The ropes groaned." Yet the passage ends before he reaches the other side. His resolve returns in "But ordinary was the thing he had left home to escape", and the "answer" on the far side is still ahead of him. So he almost gives up, but we do not see him arrive.\n\nThe writers\' methods differ in tone. Fitzgerald uses gentle comedy, exaggeration such as "a greenhouse arrived from Gatsby\'s", and short lines of dialogue that expose Gatsby\'s panic. The writer of Text 2 uses tense physical description and short sentences, such as "The ropes groaned.", to build suspense. Both, however, use a calm second figure to set off the hero\'s fear. Nick says, "Don\'t be silly", and Amara stands with "arms folded", watching with "patience or ... contempt". Both writers also slow time just before the turning point: Fitzgerald with the rain that "cooled about half-past three to a damp mist", the writer of Text 2 with the close examination of "the next slat".\n\nOverall, I agree. Both texts capture the moment just before success, when fear is strongest. The statement fits Text 1 exactly, since Gatsby gives up at "two minutes to four", the very moment Daisy\'s car turns into the lane. It fits Text 2 only in part: Kai almost turns back, but whether he reaches his answer is left open. I find Text 2 more gripping, because the danger is real, but Text 1 more surprising, because it shows that the fear of disappointment can be as strong as the fear of falling.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds; it fits Text 1 exactly, and Text 2 only in part.',
                'Text 1: nerves building to the moment Gatsby gives up, timed to "two minutes to four" and the car\'s arrival; the comedy of a rich, finely dressed man undone by a tea party.',
                'Text 2: the real danger of the bridge, the temptation of "Safe. Warm. Ordinary.", and a resolve that returns before the ending, with the far side not yet reached.',
                'Comparison of methods: gentle comedy and dialogue against tense physical description; a calm second figure in both; time slowed before the turning point.',
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
        id: 'ocr-p2-12-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-12-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Crossing'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- build tension through the setting and the character's thoughts\n- end at a moment of decision or of arrival.\n\nOR\n\nQuestion 6\nWrite about a time when you were nervous about something that mattered to you.\n\nIn your writing you could:\n- describe the build-up and how you felt\n- explain what happened in the end\n- reflect on what the experience showed you about yourself.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe programme said I was on seventh. I know, because I read it so many times that the paper went soft at the folds.\n\nIt was the Year 10 spring concert, and I had agreed, in a moment of madness in January, to sing a solo. Ms Achebe, our music teacher, had asked for volunteers, and the silence in the room had been so long and so painful that my hand had gone up on its own, the way your hand shoots out to catch a falling glass. By the time I realised what I had done, she had written my name on the board in green marker, and it was too late.\n\nFor three months, the concert was a small cloud on the horizon. Then, suddenly, it was the whole sky.\n\nOn the night itself, I sat in the music room with the other performers while the hall filled up next door. I could hear it through the wall: the scrape of chairs, a baby crying, the rising tide of a few hundred people talking at once. My mouth had gone so dry that my tongue felt like a piece of cardboard. I kept going to the water fountain, then worrying that I would need the toilet in the middle of my song, then going to the toilet, then going back to the water fountain.\n\nThe first act was the Year 7 recorder group. The second was a boy who juggled. I listened to each round of applause and felt it pushing me closer, like a queue at a theme park, step by step towards the front.\n\nDuring the fifth act I decided I could not do it.\n\nI had it all worked out. I would tell Ms Achebe I felt sick, which was true. Someone else could have my slot. Nobody would mind. In a year, nobody would remember. I stood up, my heart thumping, and walked to the door of the music room, and Ms Achebe was standing just outside it, as if she had been waiting.\n\nShe did not ask what was wrong. She just looked at me and said, very quietly, "The first line is the hardest. After that, the song does the work."\n\nThen she went back into the hall, and I stood in the corridor with my hand on the door frame, and I heard the applause for the sixth act.\n\nI do not really remember walking on to the stage. I remember the lights, which were hotter and brighter than I expected, so that the audience became a dark blur with the occasional glint of a phone. I remember the first notes of the piano, and the awful moment of silence before I had to come in, and my voice coming out thinner than I wanted.\n\nAnd then, exactly as she had said, the song took over. By the second verse my voice had steadied. By the chorus I had forgotten to be frightened, because I was too busy singing. At the end there was a pause, a real one, before the applause came, and I have never heard a sweeter silence.\n\nI learned something about myself that night. I am a person who gets very frightened. But I am also a person who can be frightened and do the thing anyway, and I did not know that until I was standing in a corridor, deciding.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, tension built through setting and thought, and an ending at a moment of decision or arrival.',
                'Question 6: a personal account that conveys the build-up of nerves, tells what happened, and reflects honestly on what it revealed.',
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
  // PAPER 13: Status
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-13',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-13-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, describes the part of Long Island, near New York, where he has rented a house for the summer.\n\nText 2 is a story specially written for this practice paper. It is set in a city of the future where every citizen is given a rating.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-13-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "It was a matter of chance" to "shape and size."\n\n(a) How far from the city are the "pair of enormous eggs"? [1]\n\n(b) What separates the two eggs? [1]\n\n(c) Give two details from this paragraph which suggest that the place is strange or unusual. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_13}\n\nText 2:\n${EXTRACT_13}`,
            extractSource: `Text 1: ${GATSBY_13_SOURCE} | Text 2: ${EXTRACT_13_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Twenty miles.\n(b) A courtesy bay.\n(c) Any two of: it is "one of the strangest communities in North America"; it has "natural curiosities"; it has "two unusual formations of land"; the land is shaped like "a pair of enormous eggs"; the eggs are "a source of perpetual wonder to the gulls".',
            },
            markScheme: [
              '(a) 1 mark: twenty miles.',
              '(b) 1 mark: a (courtesy) bay.',
              '(c) 1 mark for each of two of: "one of the strangest communities in North America"; "natural curiosities"; "two unusual formations of land"; "a pair of enormous eggs"; "a source of perpetual wonder to the gulls"; the two places differ in every way "except shape and size". A short quotation or the detail in your own words both earn the mark.',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-13-q2',
            questionNumber: 2,
            questionText:
              'Look again at the second paragraph of Text 1, from "I lived at West Egg" to "eighty dollars a month."\n\nHow does the writer use language and structure to show the difference between Nick\'s house and the houses around it?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_13,
            extractSource: GATSBY_13_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald contrasts the houses through scale and through Nick\'s self-mocking tone. The paragraph begins with a hesitation, "I lived at West Egg, the—well, the less fashionable of the two", where the break and the filler "well" suggest embarrassment, and the polite label "less fashionable" is immediately called "a most superficial tag" for something "bizarre and not a little sinister". The understatement "not a little sinister" hints that the difference between the Eggs is more than social.\n\nNick\'s house is then "squeezed between two huge places", and the verb "squeezed" makes it seem small and crowded out. Gatsby\'s mansion is described in a long, piling list: "a factual imitation of some Hôtel de Ville in Normandy, with a tower on one side", then "a marble swimming pool, and more than forty acres of lawn and garden". The adjective "colossal" and the precise numbers stress its excess, while "imitation" suggests that it is grand but not genuine. The metaphor of "a thin beard of raw ivy" personifies the building as young and newly made, like its money.\n\nNick\'s own house comes last, in a comic, balanced sentence: "My own house was an eyesore, but it was a small eyesore, and it had been overlooked". The repetition of "eyesore" turns insult into humour. The paragraph ends with an ironic list, "a view of the water, a partial view of my neighbor\'s lawn, and the consoling proximity of millionaires", and the punchline "all for eighty dollars a month" sets his modest rent against the "twelve or fifteen thousand a season" of the houses beside him.',
            },
            markScheme: {
              'What to reward': [
                'Comment on Nick\'s hesitant, self-mocking "the—well, the less fashionable of the two" and the understatement "not a little sinister".',
                'Analysis of the description of Gatsby\'s mansion: "colossal", "imitation", the list of tower, pool and "forty acres", the "thin beard of raw ivy".',
                'Comment on the comic repetition of "eyesore" and the ironic list ending "all for eighty dollars a month".',
                "Structure: the paragraph moves from the two Eggs to the mansion and ends on Nick's small house, so the contrast closes on a punchline.",
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-13-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Jess's reaction to the news she receives.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Jess\'s reaction as a slow collapse of certainty, moving from physical shock to the realisation that everything she believed has turned against her.\n\nThe opening sentence sets a tone of weary dread. The notification arrives "the way all the worst ones did", which suggests that bad news is routine in this world, and the balanced phrases "early enough to ruin breakfast, too late to pretend you had not seen it" capture a trapped feeling. Jess reads it "twice, then a third time, because her brain refused to accept them at normal speed", and this repetition shows shock as a kind of slowing down.\n\nThe notification itself is set out on separate lines, in capital letters and official language, "CITIZEN UPDATE - CLASSIFICATION REVISION", which makes it cold and impersonal. The drop from "7.2 (Contributor)" to "4.1 (Dependent)" reduces a person to a number and a label, and the instruction "within 48 hours" adds urgency.\n\nThe third paragraph shows her body reacting. She puts her cup down "with exaggerated care", as if she could control the "chaos erupting behind her ribs", a metaphor that sets calm outward behaviour against inner turmoil. The one-word sentence "Dependent." isolates the label, and the simile "like a stone dropped into still water, sending ripples outward" shows how one word disturbs every part of her future, which the tricolon "next week, next month, next year" stretches further and further.\n\nThe fourth paragraph contrasts her crisis with the indifferent city, which "carried on as though nothing had happened". Its precise, controlled details, "a regulation green" and "the geometric precision of algorithmic landscaping", suggest a world in which even nature is managed. The drone that turns to face her "for exactly two seconds" makes her feel watched, and the small, dry sentence "She resisted the urge to wave" shows a flash of bitter humour.\n\nThe fifth paragraph explains why the news hurts so much: "Jess had always believed in the system. That was the hardest part." The list of what she did, voting, arguing and writing an essay, shows how deeply she supported it, and the repeated "The system worked. The system was fair. The system ensured" sounds like a slogan she once repeated without thinking. Her belief is compared to belief in "gravity", which prepares for the ending.\n\nThe final paragraph is a single sentence set apart: "Now gravity had reversed, and she was falling upward into nothing." The paradox of "falling upward" captures the impossibility of what has happened, and ending on "nothing" leaves Jess, and the reader, with no ground to stand on.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the dread and shock of the opening ("the way all the worst ones did", reading the words three times).',
                'Comment on the cold official language and capitals of the notification, and the label "Dependent." isolated in its own sentence.',
                'Comment on the indifferent, managed city ("a regulation green", the watching drone) and on the slogan-like repetition of "The system".',
                'Structure: from shock to the body\'s reaction to the city to her lost belief, then the one-sentence final paragraph and its paradox of "falling upward".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-13-q4',
            questionNumber: 4,
            questionText:
              "'Both texts present a society that judges people by their status.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the two societies and the people in them\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present status\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_13}\n\nText 2:\n${EXTRACT_13}`,
            extractSource: `Text 1: ${GATSBY_13_SOURCE} | Text 2: ${EXTRACT_13_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree with the statement. Both texts show societies that sort people into ranks, although in Text 1 the ranking is social and unspoken, while in Text 2 it is official and enforced.\n\nIn Text 1, Long Island is divided between two Eggs that look alike but differ in status. Nick lives at West Egg, "the—well, the less fashionable of the two", and his hesitation shows how awkward the label is. Nick calls the contrast "bizarre and not a little sinister", which suggests that the difference in status is more troubling than it seems. Status is measured in money and appearance: the houses around Nick rent "for twelve or fifteen thousand a season", Gatsby\'s mansion is "a colossal affair by any standard", and East Egg has "white palaces" that "glittered along the water". Nick\'s own house is "an eyesore", and the "consoling proximity of millionaires" is ironic, since he lives near the rich without being one of them. This society judges by fashion and wealth, and Nick, with gentle humour, places himself near the bottom of it.\n\nIn Text 2, status is given a number. Jess is moved from "7.2 (Contributor)" to "4.1 (Dependent)", and the labels make her worth to society depend entirely on her "Productivity Index". The order to "report to your nearest Reassignment Centre" shows that status decides where and how she will live. The city itself reflects this order, with commuter pods "in neat silver lines" and grass "a regulation green", and the drone that turns "to face her" suggests constant surveillance. The cruellest point is that Jess had "always believed in the system" and thought it "was fair", so she defended the very rules that now judge her.\n\nThe writers present status in different ways. Fitzgerald uses an ironic, conversational narrator who mocks the social labels even as he describes them, and humour, such as the "small eyesore" and the "great wet barnyard of Long Island Sound", to puncture pretension. The writer of Text 2 uses the cold language of bureaucracy, capitals and numbers, to show status as something imposed from above. Both writers, however, use place to show rank. In Text 1 a bay separates "fashionable East Egg" from West Egg; in Text 2 the "Reassignment Centre" will move Jess elsewhere. Both also suggest that the surface of the system hides something darker: Nick\'s "sinister" contrast, and the "algorithmic landscaping" that looks "organic from a distance".\n\nOverall, I agree. Both texts present societies in which people are judged by status, but Text 2 makes it literal and frightening, while Text 1 makes it subtle and comic. Text 2 affects me more strongly, because its judgement has immediate consequences, but Text 1 seems more realistic, because it shows how status works without anyone needing to write it down.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: two places alike in shape but not in status, the "less fashionable" West Egg and the "white palaces" of East Egg, measured in rent and size, and Nick\'s ironic place among millionaires.',
                'Text 2: status as a number and a label, enforced by the "Reassignment Centre" and a watching city, and Jess\'s belief that the system "was fair".',
                'Comparison of methods: an ironic, conversational narrator against the cold language of bureaucracy; place used to show rank in both; a surface that hides something darker.',
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
        id: 'ocr-p2-13-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-13-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Rating'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- create a setting that shows the rules of the society\n- build towards a moment when a character questions those rules.\n\nOR\n\nQuestion 6\nWrite about a time when you felt you did not fit in.\n\nIn your writing you could:\n- describe the place and the people around you\n- explain how you felt, and why\n- reflect on what you learned from the experience.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nOn my first day at Ashgrove Academy, I was the only person in the building wearing a blazer with gold buttons.\n\nIt had seemed such a small thing. We moved in February, halfway through Year 8, when Dad\'s job was transferred, and the school\'s uniform shop had sold out of my size. Mum found a blazer in a charity shop that was almost the right shade of green. Almost. Under the strip lights of the Year 8 corridor it glowed like a traffic light, and its buttons, which Mum said looked smart, caught the light every time I moved.\n\nNobody said anything at first. That was almost worse. People simply looked, the way you look at a bird that has flown indoors: curious, slightly alarmed, waiting to see where it will land.\n\nI was put in a form group where everyone had known each other since they were four. They had their own jokes, their own nicknames, their own seating plan that nobody had written down but everybody followed. I sat in the only empty chair, beside the radiator, which clanked like a ghost in chains. At break I stood by the vending machine and pretended to be very interested in the crisps.\n\nThe thing about not fitting in is that it makes you notice everything. I noticed that the girls by the window all wore their hair in the same high ponytail. I noticed that people said words I had never heard, and used words I knew to mean something else. I noticed that nobody carried a lunchbox, and I spent my first lunchtime eating my sandwiches in a toilet cubicle so that nobody would see mine, which had a cartoon penguin on the lid.\n\nAt home I told Mum it was fine. I was good at that. Every evening she asked how it had gone, and every evening I said, "Fine," and went upstairs and lay on my bed and stared at the ceiling of a bedroom that still did not feel like mine.\n\nIt was a boy called Dev who changed things, and he did not even mean to. In science we were put together to label a diagram of a flower, and halfway through he looked at my buttons and said, "Are you in the army or something?"\n\nI could have cried. Instead, for reasons I still do not understand, I saluted.\n\nHe laughed. Not at me, I realised, but with me, a real, surprised laugh, and the girl on the next bench laughed too, and then somehow we were all arguing about which part of the flower was the stamen, and the lesson was over before I remembered to feel awkward.\n\nThe next week Mum managed to buy a proper blazer. I was relieved, of course. But I kept one of the gold buttons. It sits in a dish on my desk, and whenever I start something new and feel the old fear rising, the sense that everyone else knows the rules except me, I look at it.\n\nWhat I learned at Ashgrove is that fitting in matters less than I thought. Most people are too busy worrying about their own buttons to judge yours for long. And sometimes the thing that makes you stand out is exactly what lets someone start a conversation.',
            },
            markScheme: {
              'What to reward': [
                "Question 5: a story that answers to its title, with a consistent point of view, a setting that shows the society's rules, and a moment when a character questions them.",
                'Question 6: a personal account that conveys the place and the feeling of not belonging, explains why, and reflects on what was learned.',
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
  // PAPER 14: What objects say
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-14',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-14-reading',
        title: 'Section A: Reading',
        description:
          "Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. Gatsby, a rich man, is showing Daisy, the woman he loved five years before, round his mansion for the first time. The narrator, Nick Carraway, is with them.\n\nText 2 is a story specially written for this practice paper. Sophie and her father sit at the kitchen table of the family home some time after her mother's death.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-14-q1',
            questionNumber: 1,
            questionText:
              'Look again at Text 1, from the beginning to "like an overwound clock."\n\n(a) How does Gatsby now judge the things in his house? [1]\n\n(b) What does Daisy do with the brush? [1]\n\n(c) Give two of the states, or feelings, that Gatsby passes through. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_14}\n\nText 2:\n${EXTRACT_14}`,
            extractSource: `Text 1: ${GATSBY_14_SOURCE} | Text 2: ${EXTRACT_14_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) By how much they impress Daisy, or how she responds to them.\n(b) She smooths her hair with it.\n(c) Any two of: embarrassment; unreasoning joy; wonder at her presence; he runs down like an overwound clock.',
            },
            markScheme: [
              '(a) 1 mark: by "the measure of response it drew from her well-loved eyes", or by whether Daisy likes them.',
              '(b) 1 mark: she smooths her hair with it.',
              '(c) 1 mark for each of two of: embarrassment; "unreasoning joy"; "wonder at her presence"; exhaustion, as he runs down "like an overwound clock".',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-14-q2',
            questionNumber: 2,
            questionText:
              'Look again at Text 1, from "Recovering himself in a minute" to "such beautiful shirts before."\n\nHow does the writer use language and structure to present the moment when Gatsby shows Daisy his shirts?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_14,
            extractSource: GATSBY_14_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald builds the scene through an accumulation that becomes overwhelming. The shirts are first described as solid and orderly, "piled like bricks in stacks a dozen high", a simile that makes wealth something built and heavy. When Gatsby begins "throwing them, one by one, before us", the order collapses: the shirts "lost their folds as they fell and covered the table in many colored disarray".\n\nTwo long sentences pile up the shirts, first by material, "shirts of sheer linen and thick silk and fine flannel", then by pattern and colour, "stripes and scrolls and plaids in coral and applegreen and lavender and faint orange". The repeated "and" makes each list seem endless, and the alliteration of "fine flannel" and "stripes and scrolls" makes them luxurious to read. Between the two lists, the phrase "the soft rich heap mounted higher" shows the display growing almost out of control, which reflects Gatsby\'s need to impress.\n\nThe structure then turns abruptly. The adverb "Suddenly" introduces Daisy\'s reaction, "with a strained sound, Daisy bent her head into the shirts and began to cry stormily", and "stormily" makes her tears as excessive as the shirts. Her explanation, "It makes me sad because I\'ve never seen such—such beautiful shirts before", stumbles on a repeated word, and its oddness leaves the reader to wonder what she is really crying about: perhaps the life she might have had with him, or the years that have passed.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the shirts "piled like bricks" and the order that collapses into "many colored disarray".',
                'Analysis of the two long, accumulating sentences of fabrics, patterns and colours, their repeated "and" and their alliteration.',
                'Comment on the abrupt turn at "Suddenly" and on Daisy\'s stormy, puzzling tears.',
                'Structure: a display that builds to excess and then breaks into emotion.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-14-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Sophie's feelings about her family and the house.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Sophie\'s feelings as a deep, unspoken grief, and the structure keeps setting what she feels against what she is able to say.\n\nThe opening paragraph uses the table as a record of family life. The metaphor "Its surface was a map of their history" turns scratches into memories, and the list that follows, separated by semicolons, moves through the family one by one: Dad\'s "burn mark", Mum\'s "ring of white", and Sophie\'s own "crescent of gouges". The final detail, "pressing too hard because the maths was too hard", has a gentle humour, which shows her affection for these memories.\n\nThe second paragraph is a single sentence that brings grief into the room. Between the dashes, the list "Sophie, Dad, and the absence that occupied Mum\'s chair" places the absence alongside the living, and the personification of "the absence" as something that "occupied" a chair makes the loss physical and present.\n\nThe dialogue shows the gap between father and daughter. Dad\'s line "It\'s just bricks" is explained as the way "he always said difficult things: quickly, as if speed could outrun the pain", and the detail that he looks "at a point somewhere above Sophie\'s left shoulder" shows that he cannot meet her eyes.\n\nThe fourth paragraph reveals what Sophie cannot say. The repeated "It is", beginning three sentences, builds a powerful list of memories, "the pencil marks on the doorframe", "the garden", "the creak on the seventh stair", each one small but precious. The long final sentence stretches across distance and time, "two hundred miles away, lying awake at three in the morning", and ends with a self-aware admission: she misses "a version of this house that probably never existed in exactly the way I remember it". This shows that her grief is also for a childhood she knows she has idealised.\n\nThe structure then cuts back sharply to what she actually says: "Have you spoken to an estate agent?" The contrast between the long, emotional paragraph and this short, practical question shows how much is left unspoken.\n\nHer feelings about her father appear in the sixth paragraph. His hair "had gone completely white since the funeral", and the extended theatre metaphor of "an older, frailer understudy who had learned the part but could not quite inhabit it" suggests that grief has made him a stranger to her.\n\nThe final paragraph turns to the garden and to guilt. The fragments "The garden. Mum\'s garden." show Sophie\'s thoughts snagging on the word, and the list of verbs, "fed and pruned and fussed over and talked to", shows her mother\'s devotion. The simile "a guilt that tasted like iron" makes her guilt sharp and bodily, and the admission that the roses were probably "more responsive than her family" ends the text on her painful regret that the family did not show its love while there was still time.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the table as "a map of their history" and of the absence that "occupied Mum\'s chair".',
                'Comment on the gap between Dad\'s quick "It\'s just bricks" and Sophie\'s unspoken list of memories, built on the repeated "It is".',
                'Comment on the theatre metaphor of the "understudy" and on the guilt "that tasted like iron".',
                'Structure: the long unspoken paragraph cut short by a practical question, and the ending that turns from the house to the garden and to regret.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-14-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, objects say what the characters cannot.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the objects and the characters in both texts\n- explain the effect the two texts have on you as a reader\n- compare how the two writers use objects to show feelings\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_14}\n\nText 2:\n${EXTRACT_14}`,
            extractSource: `Text 1: ${GATSBY_14_SOURCE} | Text 2: ${EXTRACT_14_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree with the statement. In both texts ordinary objects carry feelings too strong or too painful to be spoken, though in Text 1 they speak of longing and in Text 2 of grief.\n\nIn Text 1, Gatsby uses his possessions to communicate with Daisy. He "revalued everything in his house according to the measure of response it drew from her well-loved eyes", so his whole house becomes a message to her. When he cannot finish a sentence, "I can\'t— When I try to—", he turns to objects instead, opening cabinets of shirts "piled like bricks in stacks a dozen high" and throwing them "one by one, before us". The shirts say what he cannot: that he has made himself rich for her. Daisy, too, responds through the objects rather than in plain words. She cries "stormily" into the shirts and says, "It makes me sad because I\'ve never seen such—such beautiful shirts before", an explanation that is clearly not the whole truth. Finally the green light, "a green light that burns all night at the end of your dock", is revealed as the object that held his dream, and its loss of meaning, "His count of enchanted objects had diminished by one", shows that the real Daisy has replaced the symbol.\n\nIn Text 2 the kitchen table is "a map of their history", and its marks preserve memories that the family cannot discuss. The "absence that occupied Mum\'s chair" turns an empty chair into an object full of grief. When Dad says "It\'s just bricks", he is trying to make the house a mere object, but Sophie\'s silent list of "pencil marks on the doorframe" and "the creak on the seventh stair" shows that the house holds everything she feels. What she actually says, "Have you spoken to an estate agent?", is practical and cold, so the objects carry her emotion while her words hide it.\n\nThe writers present this in different ways. Fitzgerald uses lavish, accumulating description, such as "coral and applegreen and lavender and faint orange", so the objects overwhelm the characters and the reader. The writer of Text 2 uses small, precise details, a burn mark, a white ring, the gouges of a compass, so the objects are modest and intimate. Both writers, however, set objects against failed speech. Gatsby\'s sentences break off, and Daisy\'s explanation dodges the truth; Sophie\'s real thoughts stay inside her head, and her father looks "at a point somewhere above Sophie\'s left shoulder". Both also end with an object that has become a symbol: the green light for Gatsby\'s dream, and Mum\'s roses for the love the family failed to show.\n\nOverall, I agree. In both texts the most important feelings are expressed through things rather than words. In Text 1 the objects are dazzling and extravagant, like Gatsby\'s hopes; in Text 2 they are worn and ordinary, like the family\'s grief. I find Text 2 more moving, because its objects are the kind every family has, but Text 1 more surprising, because a pile of shirts makes a grown woman cry.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: the house as a message to Daisy, shirts that say what Gatsby cannot, Daisy\'s evasive tears, and the green light as one of his "enchanted objects".',
                "Text 2: the table as \"a map of their history\", the absence in Mum's chair, the house's small marks set against Sophie's practical words.",
                'Comparison of methods: lavish, accumulating description against small, precise detail; objects set against failed speech in both; final symbols in both.',
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
        id: 'ocr-p2-14-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-14-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'What We Kept'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- build the story around one or two important objects\n- let the objects reveal feelings that the characters do not say.\n\nOR\n\nQuestion 6\nWrite about an object that is important to you.\n\nIn your writing you could:\n- describe the object closely\n- explain where it came from and what it means to you\n- reflect on why it matters more than its value would suggest.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nThe most important object I own is a guitar that I cannot play.\n\nIt leans in the corner of my bedroom, between the wardrobe and the window, where the afternoon light falls across it. It is a cheap acoustic guitar, the kind you can buy in any music shop for less than a pair of trainers. Its body is the colour of runny honey, darker at the edges where years of hands have rubbed it. There is a long scratch across the front, shaped like a river on a map, and a sticker from a festival so faded that only four letters survive. The top string is missing. The other five are tarnished and slack, and if you brush them, they give out a sound like someone sighing in another room.\n\nIt belonged to my dad before he was my dad. He bought it when he was sixteen, with money from his paper round, and he took it everywhere: to friends' bedrooms, to beaches, to a field in Somerset where, he claims, he once played for three hours in the rain while people danced in the mud. He was not, by his own admission, very good. He knew about eleven chords and four complete songs. But he played them so often that, when I was little, I thought they were the only songs in the world.\n\nI remember the guitar more clearly than almost anything else from my early childhood. I remember lying in bed with the door open, listening to him play downstairs after I was supposed to be asleep, the notes floating up the stairs like warm air. I remember the smell of the case, a mixture of dust and old velvet and something sharp, like pencil shavings. I remember sitting on his knee while he pressed my fingers on to the strings, which hurt, and then strummed for me, so that for one shining moment it sounded as if I could play.\n\nHe stopped playing when he started working nights. There was never time for it any more, he said. The guitar went into the loft, then into the garage, and then, when we moved house, it nearly went to the tip. I found it in a pile by the front door marked for the charity shop, and I carried it upstairs without asking anyone.\n\nDad saw it in my room a week later. He did not say anything at first. He just picked it up, sat on the edge of my bed and turned it over in his hands, running his thumb along the river-shaped scratch. Then he played, very badly, the first few bars of one of his four songs, the five strings making it sound lopsided and strange. Halfway through he stopped and laughed, and his eyes were wet.\n\n\"I'd forgotten,\" he said. He did not say what.\n\nI have never learned to play it. I keep meaning to. But I have realised that the guitar's value has nothing to do with music. It is a record of a person my father used to be, the sixteen-year-old with a paper round and a field full of dancers, a person I never met but somehow still know. Every time I look at it, I remember that the people we love had whole lives before we arrived. One day I will put a new string on it. Until then, it does not need to make a sound to mean something.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent point of view, built around one or two objects that reveal what the characters do not say.',
                'Question 6: a personal account that describes the object closely, explains its history and meaning, and reflects on why it matters beyond its worth.',
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
  // PAPER 15: Houses that hold feelings
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-15',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-15-reading',
        title: 'Section A: Reading',
        description:
          "Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. Late in the novel, after a night on which things have gone badly wrong, the narrator, Nick Carraway, goes at dawn to the mansion where his neighbour, Gatsby, once gave enormous parties. Gatsby has spent the night waiting outside the house of Daisy, the woman he loves, in case she needed him.\n\nText 2 is a story specially written for this practice paper. It is set in the American South, where Emmeline has returned to her grandmother's house after eleven years away.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-15-q1',
            questionNumber: 1,
            questionText:
              'Look again at Text 1, from the beginning to "turned out the light."\n\n(a) What sound keeps Nick awake? [1]\n\n(b) Why does Nick get dressed at once when he hears the taxi? [1]\n\n(c) Give two details that show how Gatsby looks or sounds when Nick finds him. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_15}\n\nText 2:\n${EXTRACT_15}`,
            extractSource: `Text 1: ${GATSBY_15_SOURCE} | Text 2: ${EXTRACT_15_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) A fog-horn groaning out on the Sound.\n(b) He feels he has something to tell Gatsby, a warning, and that by morning it will be too late.\n(c) Any two of: he is leaning against a table in the hall; he looks heavy with dejection or sleep; he speaks wanly.',
            },
            markScheme: [
              '(a) 1 mark: a fog-horn, "groaning incessantly on the Sound".',
              '(b) 1 mark: he has "something to warn him about", and "morning would be too late".',
              '(c) 1 mark for each of two of: "leaning against a table in the hall"; "heavy with dejection or sleep"; he speaks "wanly".',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-15-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last paragraph of Text 1, from "His house had never seemed so enormous" to the end.\n\nHow does the writer use language and structure to make Gatsby\'s house seem strange and empty?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_15,
            extractSource: GATSBY_15_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald makes the house seem vast and abandoned by describing it through two men fumbling in the dark. The opening sentence, "His house had never seemed so enormous to me as it did that night", uses a comparison to show that the house has changed in Nick\'s eyes rather than in size, and the search "for cigarettes" makes their purpose small against the "great rooms".\n\nThe language exaggerates size and darkness. The simile "curtains that were like pavilions" makes ordinary curtains seem like huge tents, and "innumerable feet of dark wall" stresses how much empty space there is. The sentence then breaks into a sudden, clumsy moment: "once I tumbled with a sort of splash upon the keys of a ghostly piano". The unexpected word "splash" turns a jarring chord into something almost liquid, and "ghostly" suggests that the house is haunted by the parties that once filled it.\n\nThe next sentence moves from sight and sound to smell and touch: "an inexplicable amount of dust everywhere", and rooms that "were musty, as though they hadn\'t been aired for many days". The adjective "inexplicable" shows Nick\'s unease, as if the house had aged overnight. Even the cigarettes are "stale, dry", found in "the humidor on an unfamiliar table", so nothing in Gatsby\'s own house feels familiar. The paragraph ends with the two men throwing open the windows and facing "out into the darkness", an image of emptiness and waiting which suggests that the house, like Gatsby\'s hope, has been hollowed out.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the comparison "never seemed so enormous" and on the small purpose ("for cigarettes") set against the "great rooms".',
                'Analysis of the exaggerated images of size and darkness ("curtains that were like pavilions", "innumerable feet of dark wall") and of the "ghostly piano".',
                'Comment on the dust, the musty rooms and the "stale, dry" cigarettes as signs of neglect and unease.',
                'Structure: a paragraph that moves through the dark house and ends facing "out into the darkness".',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-15-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents the house and Emmeline's feelings as she returns to it.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents the house as a living, dying creature that seems to have a will of its own, and Emmeline\'s feelings move from reluctance to the unsettling recognition that she has been drawn back against her intentions.\n\nThe opening sentence personifies the house at once: it "had been dying for longer than anyone in Colter County could remember". The verb "dying" makes it a living thing in slow decline. The images that follow are bodily and decayed: the porch is sagging "like a jaw gone slack", a simile, and the siding is "the colour of bone left out in weather". Even the trees seem exhausted, "dragging themselves toward the ground in slow, grey exhaustion", so the whole place shares the house\'s decline.\n\nThe second paragraph gives the house agency. The clause "the house had made use of every one of them" suggests that it has used Emmeline\'s absence deliberately. Her grandfather\'s promise that the steps "would last a century" is undercut when they give "with a sound like a sigh", a simile that makes the house seem weary, even reproachful. The open door, with "darkness visible through the gap like a mouth that had been waiting to speak", is the most sinister image: the house seems ready to say something to her.\n\nThe third paragraph is driven by smell and sight. The short sentence "She went in." shows a reluctant decision, and the comparison of the smell to "the way fruit smells the day before it turns" suggests a place on the edge of rot. The watermarks that "formed shapes she did not want to interpret" reveal her unease, since she is afraid of what she might see.\n\nThe fourth paragraph brings in her grandmother. The furniture is arranged "with the formal precision of a woman who believed that appearances were not merely important but were, in fact, the only thing standing between civilisation and chaos", a long, formal clause that captures a strict, proud character. The list "The settee, the wing chair, the mahogany side table" lingers on each object, and the dust "so thick it looked deliberate", as if the house "had been slowly upholstering itself in grey", continues the idea that the house acts on purpose.\n\nThe final paragraph moves to the climax of her feelings. The photograph of "three generations of women" with "none of them smiling" suggests an unhappy family line, and the crack "that split her from forehead to chin" across her mother\'s face hints at a broken relationship. The simile "like a grave plot" links the house to death. The last two sentences reveal her true motive: "she had not come back to sell the house. She had come back because the house had summoned her". The final clause, "the way every haunted thing eventually calls its ghosts home", reverses expectation, since Emmeline herself is the ghost, and it leaves the reader with a chilling sense that she belongs to the house as much as it belongs to her.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the personified, dying house and its bodily similes ("like a jaw gone slack", "the colour of bone left out in weather").',
                'Comment on the house\'s apparent will: it "had made use of every one" of the years, and the dark gap of its open door is "like a mouth that had been waiting to speak".',
                'Comment on Emmeline\'s unease (shapes "she did not want to interpret") and on the grandmother\'s character in the furniture\'s "formal precision".',
                'Structure: from the approach to the hall to the parlour to the photograph, ending on the revelation that the house "had summoned her" and the reversal in "calls its ghosts home".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-15-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, the house reflects the feelings of the people in it.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the houses and the people in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present the houses\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_15}\n\nText 2:\n${EXTRACT_15}`,
            extractSource: `Text 1: ${GATSBY_15_SOURCE} | Text 2: ${EXTRACT_15_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I largely agree with the statement. In both texts the house seems to mirror the state of the people in it, though in Text 1 the house reflects Gatsby\'s sudden emptiness, while in Text 2 it seems to have feelings and intentions of its own.\n\nIn Text 1, Gatsby\'s house seems to have changed to match his despair. Nick finds him "heavy with dejection or sleep", and his report, "Nothing happened", spoken "wanly", shows that his hopes have collapsed. The house then reflects this. It "had never seemed so enormous", as if Gatsby had shrunk inside it, and the two men must feel their way over "innumerable feet of dark wall", lost in a place that is meant to be his. The "inexplicable amount of dust" and rooms that seemed not to have "been aired for many days" make the house feel neglected, as if no one had lived there. Even the cigarettes are "stale, dry", and the "ghostly piano" suggests that the parties which once filled the house are now only ghosts. As a reader I feel the emptiness of a man whose great house has lost its meaning now that his long night of waiting has come to nothing.\n\nIn Text 2 the house reflects the family\'s history and Emmeline\'s feelings, but it also seems to act. It "had been dying", its porch is "like a jaw gone slack", and the dark gap of its open door is "like a mouth that had been waiting to speak". The house\'s decay reflects the decline of the family, three generations of women with "none of them smiling", and the crack across her mother\'s face reflects a broken bond. The grandmother\'s character survives in the furniture\'s "formal precision". But the ending goes further than reflection: "the house had summoned her", so the house is not only a mirror but a force with its own will.\n\nThe writers\' methods share a great deal. Both use dust: Fitzgerald\'s "inexplicable amount of dust everywhere" and the "film of dust so thick it looked deliberate" in Text 2. Both use darkness and things half seen, from Fitzgerald\'s "dark wall" to the "darkness visible through the gap" in Text 2. Both describe sound in eerie terms, the "ghostly piano" and the steps that give "with a sound like a sigh". However, Fitzgerald\'s description is brief and restrained, filtered through Nick\'s first-person view on a tense night, while the writer of Text 2 uses extended Gothic imagery and personification, so that Emmeline\'s house feels more alive and more threatening.\n\nOverall, I agree. In both texts the house reflects the people in it: Gatsby\'s despair and the family\'s decline. But Text 2 pushes the idea further, until the house seems to feel and choose for itself, while in Text 1 the house is a mirror that shows Gatsby what he has lost. I find Text 1 sadder, because the emptiness is his own, and Text 2 more frightening, because the house seems to want Emmeline back.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: a house that "had never seemed so enormous", dusty and dark, reflecting Gatsby\'s dejection after "Nothing happened".',
                'Text 2: a dying house that reflects a family\'s decline but also seems to act, until it "had summoned her".',
                'Comparison of methods: dust, darkness and eerie sounds in both; a brief, restrained first-person account against extended Gothic imagery and personification.',
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
        id: 'ocr-p2-15-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-15-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'Coming Home'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- make the setting reflect the character's feelings\n- build towards a moment of realisation.\n\nOR\n\nQuestion 6\nWrite about a time when you went back to a place after a long time away.\n\nIn your writing you could:\n- describe the place as you found it\n- explain what had changed, and what had not\n- reflect on how the visit made you feel.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nComing Home\n\nThe car turned into Sycamore Road at exactly four o\'clock, and for a moment Owen could not breathe.\n\nIt looked smaller. That was the first thing. After four months of hospital corridors, long and white and humming, the street seemed to have shrunk while he was away: the houses pressed closer together, the pavements narrower, the sky lower over the rooftops. The sycamore that gave the road its name was bare now. When he left in October it had been a blaze of orange, dropping leaves like burning paper on to the parked cars. Now its branches scratched at the grey February air like fingers looking for something they had lost.\n\nDad parked outside number 22 and turned off the engine. Neither of them moved.\n\n"Ready?" Dad asked.\n\nOwen nodded, although he was not sure what he was ready for.\n\nThe front door was the same green, with the same chip near the letterbox where Owen had once swung his bike into it. The step was the same height. He had imagined this step so many times, lying awake on the ward with the machines beeping softly around him, that climbing it now felt strange, like walking into a photograph.\n\nInside, the house smelled of furniture polish and the lemon washing-up liquid Mum always bought. Someone had hoovered. Someone had put flowers on the hall table, yellow tulips, their heads drooping slightly in the warmth of the radiator. On the stairs his old school shoes still stood side by side, waiting, exactly where he had kicked them off the night before everything changed.\n\nHe climbed the stairs slowly, one hand on the rail. Four months ago he had raced up them two at a time. Now he counted them. Fourteen.\n\nHis bedroom door was half open. He pushed it with one finger.\n\nNothing had moved. The football posters were still curling at the corners. The model aeroplane still hung from the ceiling on its fishing line, turning very slightly in the draught from the door. His bed was made, the duvet pulled tight, the pillow plumped into a shape nobody had slept in for four months. On the desk lay the maths homework he had never finished, the pencil still resting in the crease of the book, as if he had only stepped out of the room for a minute.\n\nOwen sat down on the edge of the bed and looked at it all, and he felt something he had not expected. Not happiness, exactly, and not sadness. Something in between. The room was exactly as he had left it. But he was not.\n\nHe thought about the boy who had kicked off those shoes in October, the boy who had left that sum half done because he was bored and wanted to watch television. That boy had not known anything. He had not known what it was to wake at three in the morning and hear someone crying two beds away. He had not known how kind strangers could be, or how long a night could last.\n\nDownstairs, he heard Mum laugh at something Dad said, a real laugh, the first in months.\n\nOwen picked up the pencil. He looked at the unfinished sum for a long moment. Then, slowly and carefully, he wrote the answer.\n\nHe was home. It was not quite the same home, and he was not quite the same boy. But perhaps that was what coming home really meant: bringing back everything that had happened, and finding there was still room for it all.',
            },
            markScheme: {
              'What to reward': [
                "Question 5: a story that answers to its title, with a consistent point of view, a setting that reflects the character's feelings, and a clear moment of realisation.",
                'Question 6: a personal account that describes the place as it was found, sets what had changed against what had not, and reflects on the feelings the visit brought.',
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
