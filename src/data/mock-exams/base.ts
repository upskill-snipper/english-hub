// ─── Mock Exam Data: base bank ───────────────────────────────────────────────
// The original hand-authored AQA / Edexcel / OCR / WJEC papers.
//
// Split out of `src/data/mock-exams.ts` (Aug 2026): the aggregator statically
// imports every other bank, so anything that dynamic-imported `./mock-exams`
// to reach these papers still dragged the whole 2.8 MB bank into the chunk.
// Keeping the base papers in their own module makes them independently
// loadable by `src/data/mock-exam-loader.ts`.

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * These papers are live (mock-exam-loader chunk 'base', and allMockExamPapers
 * through ../mock-exams), so what follows was in front of students.
 *
 * Three extracts put a real writer's name over words the writer never wrote:
 *   - AQA_P1_EXTRACT, labelled "Adapted from Charles Dickens, Great
 *     Expectations (1861)" and printed by AQA Paper 1 and OCR Component 02,
 *     was not an adaptation. None of its sixteen sentences is in the novel.
 *     Two carry a phrase of Dickens's inside words he did not write (the
 *     convict's threat to cut Pip's throat, and "a great iron on his leg");
 *     the other fourteen, with the creeping fog, the bird cry and a convict
 *     with "the eyes of a creature that had nothing left to lose", were made
 *     up.
 *   - AQA_P2_SOURCE_B, labelled "Henry Mayhew, London Labour and the London
 *     Poor (1851)" and printed by AQA Paper 2 and WJEC Component 2: not one
 *     of its nine sentences is in the four volumes as printed. Its family of
 *     eight in one room was invented.
 *   - EDEXCEL_P2_SOURCE_B, labelled "From a letter by Matthew Arnold,
 *     published in The Times, 1867": none of its nine sentences is in
 *     Culture and Anarchy, and no letter of Arnold's to The Times is on
 *     Gutenberg to check it against.
 * The note that stood here since April (FC20) said as much of the two
 * Victorian sources, "original composition in the period style, not
 * verbatim", and left the labels in place. A student sees the label, not the
 * comment. Worse, the model answers quoted the invented lines back as the
 * writers' own: fifty quotations of four words or more, in eleven questions,
 * as Dickens's or Mayhew's, and six more, in two Edexcel Paper 2 questions,
 * as Arnold's.
 *
 * WHAT THEY ARE NOW. Each is cut by script from the Project Gutenberg text,
 * never retyped. Nothing is changed but line breaks and one "--", printed as
 * the dash it transcribes. Each is pinned, word for word, by
 * src/__tests__/mock-exam-base-quotes-the-real-text.test.ts:
 *   - AQA_P1_EXTRACT: Great Expectations, Chapter 1, from "Ours was the marsh
 *     country" to Pip on the tombstone while the convict eats his bread, in
 *     the text of the 1867 edition (Gutenberg #1400). It is the scene the
 *     invented extract imitated.
 *   - AQA_P2_SOURCE_B: Mayhew's description of the Asylum for the Houseless
 *     Poor, from London Labour and the London Poor, Volume 3 (1861;
 *     Gutenberg #57060): two paragraphs on the crowd waiting in the snow,
 *     then, after a cut marked [...], two on the comfortable onlooker who
 *     gives thanks that he is not one of them. The cut leaves out his account
 *     of the bread, the ledger and the sleeping wards. The passage stops
 *     before a paragraph that describes disabled people in terms of its time
 *     that a student would need a note on.
 *   - EDEXCEL_P2_SOURCE_B: Mayhew again, "Watercress Girl", from Volume 1
 *     (1851; Gutenberg #55998, the enlarged edition of 1861): his two
 *     paragraphs on meeting an eight-year-old street-seller who "had
 *     entirely lost all childish ways", before her own statement. No genuine
 *     Arnold text about the young is on Gutenberg. Dickens's "Crime and
 *     Education" would have fitted, but ./edexcel-p2-a.ts now prints the two
 *     paragraphs that suited these questions, and a student working through
 *     both Edexcel Paper 2 banks should not meet the same source twice. This
 *     one is a real nineteenth-century writer's concern for a child, so the
 *     questions keep their wording. REMOVED 31 October 2026, when Edexcel
 *     Paper 2 was restructured to Pearson's paper, which reads only 20th and
 *     21st century non-fiction (see the note above that paper); neither
 *     ./edexcel-p2-a.ts nor this file prints a nineteenth-century Paper 2
 *     source any longer.
 * Every question that prints them was brought into step: the AQA Paper 1
 * questions point at paragraphs, not line numbers; the answers for AQA Paper
 * 1, OCR Component 02, and the questions using Source B in AQA Paper 2, WJEC
 * Component 2 and Edexcel Paper 2, were rewritten for the real passages,
 * with every quotation checked against its extract by script.
 *
 * ALSO CORRECTED, around the extracts written for this bank:
 *   - the model answers still called the writers of the two modern opinion
 *     pieces "Chen" and "Mitchell", and Edexcel Paper 2 Question 3 asked how "Dr
 *     Mitchell" uses language: the invented bylines FC20 removed from the
 *     labels. They are now "the writer of Source A";
 *   - "Pip sat. He ate" in an answer on the WJEC kitchen extract, whose boy
 *     is Nathan, and "Breakfast. Sit down." quoted as one line when the
 *     narration comes between them; "I have walked through every major
 *     city", "70% reported" and two Edexcel Paper 1 quotations with words
 *     silently left out;
 *   - "we" called second person, "profoundly, terrifyingly" called
 *     adjectives, and "RSPPH" for the Royal Society for Public Health;
 *   - the OCR Component 01 letter, labelled "Letter to the local council
 *     planning department, 2024" over a signature, read as a real letter by
 *     a real person. It is labelled as specially written, like the others;
 *   - four questions sent the student to line numbers ("lines 1-8", "lines
 *     9-20", "lines 1-6", "lines 1-5") that the mock-exam page does not print:
 *     it sets each extract as wrapped text, so no line can be counted. They
 *     now name a paragraph, as the AQA Paper 1 questions do;
 *   - the Asylum passage never says "I": it shows the crowd in the present
 *     tense, as anyone at the window would see it. Answers that had Mayhew
 *     describing "what he saw with his own eyes", and WJEC Component 2
 *     Question 4's "personal witness account", claimed more than the extract
 *     shows, and were written for the invented source, which did say "I".
 *     They now speak of his close description. AQA Paper 2 Question 2 asked
 *     about "living conditions", which suited the invented family in one
 *     room; the real crowd is outside in the snow, so it now asks about the
 *     conditions of the homeless people in each source;
 *   - Edexcel Paper 2 Question 1 keyed four true statements out of eight, but
 *     "Face-to-face interaction involved shared experiences" is also true of
 *     Source A, which pairs the two. It is replaced by a false one;
 *   - terms a student would copy: "any one of us" called direct address (it
 *     is an inclusive pronoun), "comforting" called sarcastic "because our
 *     excuses are not comforting at all" (the writer's point is that they do
 *     comfort us), "found themselves" called passive (it is reflexive), the
 *     reader sharing what Nathan sees called dramatic irony, "progressive
 *     participles", the final "we" called a shift from the third person when
 *     Source A says "we" from its first sentence, "paragraphs 4-6" of a
 *     seven-paragraph extract, a convict's soaking called an injury, and Pip
 *     given "only his name" when he first pleads for his life.
 */

import type { MockExamPaper } from './types'

// ─── Source Extracts ─────────────────────────────────────────────────────────

// Gutenberg #1400, Chapter 1, eleven consecutive paragraphs, cut by script.
const AQA_P1_EXTRACT = `Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.

“Hold your noise!” cried a terrible voice, as a man started up from among the graves at the side of the church porch. “Keep still, you little devil, or I’ll cut your throat!”

A fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared, and growled; and whose teeth chattered in his head as he seized me by the chin.

“Oh! Don’t cut my throat, sir,” I pleaded in terror. “Pray don’t do it, sir.”

“Tell us your name!” said the man. “Quick!”

“Pip, sir.”

“Once more,” said the man, staring at me. “Give it mouth!”

“Pip. Pip, sir.”

“Show us where you live,” said the man. “Pint out the place!”

I pointed to where our village lay, on the flat in-shore among the alder-trees and pollards, a mile or more from the church.

The man, after looking at me for a moment, turned me upside down, and emptied my pockets. There was nothing in them but a piece of bread. When the church came to itself,—for he was so sudden and strong that he made it go head over heels before me, and I saw the steeple under my feet,—when the church came to itself, I say, I was seated on a high tombstone, trembling while he ate the bread ravenously.`

const AQA_P1_EXTRACT_SOURCE =
  'Charles Dickens, Great Expectations (1861), from Chapter 1, in the text of the 1867 edition'

// Written for the site, and printed by AQA Paper 2 and WJEC Component 2.
// CHECKED 31 October 2026 against the official figures. It said rough
// sleeping in England "has increased by 169% since 2010": that was the rise
// from 1,768 in the autumn 2010 count to 4,751 in autumn 2017 (MHCLG, Rough
// Sleeping Statistics Autumn 2017, January 2018), and the autumn 2025
// snapshot (published 26 February 2026) is 4,793, 171% above 2010 and above
// 2017's peak. It now gives the 2010 to 2017 rise, which AQA Paper 2's
// answers quote as "169%", and says the count has since gone higher. "Over
// 700 people died while homeless" stands: the ONS estimate for deaths
// registered in 2025 (published 1 October 2026) is 974.
const AQA_P2_SOURCE_A = `I have walked through the streets of every major city in Europe and I can tell you this: nowhere on this continent do we treat our homeless population with such calculated indifference as we do in Britain. Last winter, while temperatures plummeted to minus eight degrees, I counted fourteen people sleeping in doorways within a single mile of Westminster - fourteen human beings curled under cardboard and sleeping bags while our elected representatives debated the finer points of trade policy less than a hundred yards away.

The statistics are damning. Rough sleeping in England rose by 169% between 2010 and 2017, and it has since climbed higher still. Over 700 people died while homeless last year alone. Behind every number is a name, a story, a sequence of events that could, with only the slightest alteration, have happened to any one of us. The mortgage payment missed because of illness. The relationship that fractured. The mental health crisis that went unsupported. These are not alien experiences. They are profoundly, terrifyingly ordinary.

And yet we walk past. We avert our eyes. We tell ourselves comforting stories about choice and personal responsibility, because the alternative - accepting that our society has systematically failed hundreds of thousands of its citizens - is too uncomfortable to contemplate.`

// FACT-CHECK 2026-04: source attribution corrected per verified-library audit
const AQA_P2_SOURCE_A_REF =
  'Original opinion piece composition (anonymous, contemporary broadsheet style, c.2024)'

// Gutenberg #57060, "Description of the Asylum for the Houseless", two pairs
// of consecutive paragraphs with the cut between them marked, cut by script.
const AQA_P2_SOURCE_B = `It is a terrible thing, indeed, to look down upon that squalid crowd from one of the upper windows of the institution. There they stand shivering in the snow, with their thin, cobwebby garments hanging in tatters about them. Many are without shirts; with their bare skin showing through the rents and gaps of their clothes, like the hide of a dog with the mange. Some have their greasy coats and trousers tied round their wrists and ankles with string, to prevent the piercing wind from blowing up them. A few are without shoes; and these keep one foot only to the ground, while the bare flesh that has had to tramp through the snow is blue and livid-looking as half-cooked meat.

It is a sullenly silent crowd, without any of the riot and rude frolic which generally ensue upon any gathering in the London streets; for the only sounds heard are the squealing of the beggar infants, or the wrangling of the vagrant boys for the front ranks, together with a continued succession of hoarse coughs, that seem to answer each other like the bleating of a flock of sheep.

[...]

Then come the self-congratulations and the self-questionings! and as a man, sound in health and limb, walking through a hospital, thanks God that he has been spared the bodily ailments, the mere sight of which sickens him, so in this refuge for the starving and the homeless, the first instinct of the well-to-do visitor is to breathe a thanksgiving (like the Pharisee in the parable) that “he is not as one of these.”

But the vain conceit has scarcely risen to the tongue before the better nature whispers in the mind’s ear, “By what special virtue of your own are you different from them? How comes it that you are well clothed and well fed, whilst so many go naked and hungry?” And if you in your arrogance, ignoring all the accidents that have helped to build up your worldly prosperity, assert that you have been the “architect of your own fortune,” who, let us ask, gave you the genius or energy for the work?`

const AQA_P2_SOURCE_B_REF =
  'Henry Mayhew, London Labour and the London Poor, Volume 3 (1861), from his description of the Asylum for the Houseless Poor, Cripplegate. Words left out are marked [...]'

// ─── Edexcel Extracts ────────────────────────────────────────────────────────

// EDEXCEL PAPER 1 (edexcel-lang-p1), RESTRUCTURED 31 October 2026. Found on 24
// October 2026, the day the AI marker was corrected to mark each paper as its
// board does: this paper printed a modern passage written for the site, where
// Pearson's 1EN0/01 is always an unseen extract of nineteenth-century fiction,
// and its questions were worth 4, 2, 6, 15 and 40, so that Section A, labelled
// 24, held 27 and the paper 67, not Pearson's 64. Its Question 1 asked for four
// things; Pearson's asks for one. It is now set as
// src/data/mark-scheme-guides/edexcel-lang-paper1.ts describes 1EN0/01, in the
// pattern of src/data/mock-exams/edexcel-p1-a.ts (whose docblock gives the
// detail), on the extract below, cut by script from the held edition and
// checked against it byte for byte. Its answers quote only the extract's
// words, as src/__tests__/mock-exam-base-quotes-the-real-text.test.ts requires.
// CHECKED 31 October 2026 by a second reader, against the extract and the held
// edition: every reading question, scheme and answer held. One fix: the Q5/Q6
// model story sent a lost thirteen-year-old to the beach for two hours with a
// man she had just met; her mother now speaks to him first and agrees.
// src/data/full-texts/the-war-of-the-worlds.ts, Book One, Chapter X: In the Storm: 7 paragraphs, 617 words, cut by script.
const EDEXCEL_P1_EXTRACT = `From Ripley until I came through Pyrford I was in the valley of the Wey, and the red glare was hidden from me. As I ascended the little hill beyond Pyrford Church the glare came into view again, and the trees about me shivered with the first intimation of the storm that was upon me. Then I heard midnight pealing out from Pyrford Church behind me, and then came the silhouette of Maybury Hill, with its tree-tops and roofs black and sharp against the red.

Even as I beheld this a lurid green glare lit the road about me and showed the distant woods towards Addlestone. I felt a tug at the reins. I saw that the driving clouds had been pierced as it were by a thread of green fire, suddenly lighting their confusion and falling into the field to my left. It was the third falling star!

Close on its apparition, and blindingly violet by contrast, danced out the first lightning of the gathering storm, and the thunder burst like a rocket overhead. The horse took the bit between his teeth and bolted.

A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once the lightning had begun, it went on in as rapid a succession of flashes as I have ever seen. The thunderclaps, treading one on the heels of another and with a strange crackling accompaniment, sounded more like the working of a gigantic electric machine than the usual detonating reverberations. The flickering light was blinding and confusing, and a thin hail smote gustily at my face as I drove down the slope.

At first I regarded little but the road before me, and then abruptly my attention was arrested by something that was moving rapidly down the opposite slope of Maybury Hill. At first I took it for the wet roof of a house, but one flash following another showed it to be in swift rolling movement. It was an elusive vision—a moment of bewildering darkness, and then, in a flash like daylight, the red masses of the Orphanage near the crest of the hill, the green tops of the pine trees, and this problematical object came out clear and sharp and bright.

And this Thing I saw! How can I describe it? A monstrous tripod, higher than many houses, striding over the young pine trees, and smashing them aside in its career; a walking engine of glittering metal, striding now across the heather; articulate ropes of steel dangling from it, and the clattering tumult of its passage mingling with the riot of the thunder. A flash, and it came out vividly, heeling over one way with two feet in the air, to vanish and reappear almost instantly as it seemed, with the next flash, a hundred yards nearer. Can you imagine a milking stool tilted and bowled violently along the ground? That was the impression those instant flashes gave. But instead of a milking stool imagine it a great body of machinery on a tripod stand.

Then suddenly the trees in the pine wood ahead of me were parted, as brittle reeds are parted by a man thrusting through them; they were snapped off and driven headlong, and a second huge tripod appeared, rushing, as it seemed, headlong towards me. And I was galloping hard to meet it! At the sight of the second monster my nerve went altogether. Not stopping to look again, I wrenched the horse’s head hard round to the right and in another moment the dog cart had heeled over upon the horse; the shafts smashed noisily, and I was flung sideways and fell heavily into a shallow pool of water.`

const EDEXCEL_P1_EXTRACT_SOURCE =
  'H. G. Wells, The War of the Worlds (1898), Book One, from Chapter 10, In the Storm'

// Edexcel Paper 2's texts since 31 October 2026, when the paper was
// restructured to Pearson's (see the note above the paper). Pearson's Paper 2
// reads two 20th or 21st century non-fiction texts, and src/data/full-texts
// holds no non-fiction, so Text 1 is a memoir written for this paper, in place
// of the Mayhew passage (1851) that the docblock above describes. Text 2 is
// the old Source A, word for word but for one sentence (31 October 2026, see
// the note above the paper): its figures were credited to a study the Royal
// Society for Public Health never published, and are now the writer's own.
const EDEXCEL_P2_TEXT_1 = `We were the first family in our road to own a television. My father bought it in May 1953, a month before the Coronation, and it arrived in a wooden cabinet so large that it took two men and a great deal of swearing to carry it into the front room. The screen was the size of a dinner plate. On the day of the Coronation, twenty-three people crowded into that room to watch, sitting on chairs borrowed from the chapel, and my mother made sandwiches until the bread ran out.

Within a year, I had fallen completely in love with it. I watched whatever was on, which was not much: a puppet show, a cookery programme, a man drawing cartoons, the test card with its strange, sad music. I would sit cross-legged on the rug, so close to the screen that my mother said my eyes would go square. When it was switched off at night, I watched the little white dot in the middle shrink and vanish, and felt as though a friend had left the room.

The grown-ups were alarmed. Our headmaster told an assembly that television would rot our brains and ruin our handwriting. The vicar preached a sermon against it. My grandmother, who had never watched it, was certain that it was bad for the nerves, and our neighbour wrote to the local paper to complain that children no longer played in the street. My aunt, a teacher, said that we would grow up unable to hold a conversation, because we would be too busy staring at a box.

Looking back, some of their worries were not foolish. I did spend too long in front of that screen, and there were summer evenings when I stayed indoors while my friends were out on their bicycles. But the box also showed me things I would never otherwise have seen: the inside of a coal mine, the top of a mountain, a ballet, a debate in which grown men argued about things I had never thought about. I learned that the world was very much larger than our road.

My grandchildren now carry screens in their pockets, and I hear the same warnings I heard seventy years ago, almost word for word. I do not know whether the warnings are right this time. I only know that every generation seems to fear the new thing that its children love, and that the children, somehow, grow up anyway.`

const EDEXCEL_P2_TEXT_1_REF =
  'Specially written for this practice paper (not a published text): a memoir of growing up with the first television in the road in the 1950s'

const EDEXCEL_P2_TEXT_2 = `Social media has not merely changed how teenagers communicate - it has fundamentally restructured the architecture of adolescent identity. Where previous generations constructed their sense of self through face-to-face interaction, through the slow accumulation of shared experiences and private conversations, today's young people are building their identities in public, in real time, before an audience of hundreds.

The implications are profound. When I surveyed the 180 students in my school's Year 10 last term, 70% reported that social media made them feel worse about their appearance, while 62% said it increased their anxiety about social situations. The paradox is stark: the very platforms designed to connect us are making young people feel more isolated, more inadequate, and more anxious than any previous generation.

I am not a technophobe. I recognise that social media offers genuine benefits - community, creativity, connection across distance. But we must be honest about the costs. When a thirteen-year-old cannot eat breakfast without first checking how many likes her post received overnight, something has gone fundamentally wrong. When a fifteen-year-old boy measures his worth by his follower count, we are not witnessing normal adolescent development. We are witnessing a crisis.`

// FACT-CHECK 2026-04: source attribution corrected per verified-library audit
const EDEXCEL_P2_TEXT_2_REF =
  "Specially written for this practice paper (not a published text): a teacher's opinion article about social media and how teenagers form their identities"

// ─── OCR Extracts ────────────────────────────────────────────────────────────

const OCR_P1_SOURCE = `Dear Sir,

I write to you in a state of considerable agitation regarding the proposed demolition of the Elm Street Community Centre, a building which has served this neighbourhood faithfully for over sixty years. I have attended meetings, celebrations, and (in times of personal difficulty) support groups within its walls, and I can assure you that its value to this community cannot be measured in the cold language of property development and profit margins.

Last Tuesday evening, I sat in the main hall as Mrs Patricia Ogden, aged eighty-three, read a poem she had written about her late husband. The room was full. People who had never spoken to each other before found themselves united by a single act of human vulnerability. That is what the community centre does: it creates the conditions for connection.

You tell us that the building is "no longer fit for purpose." I would ask: whose purpose? The roof leaks, certainly, and the heating is unreliable, and the car park has potholes that could swallow a small dog. But fitness for purpose is not only a matter of bricks and plumbing. It is a matter of what happens within those walls, and what happens within those walls is irreplaceable.

I urge you to reconsider. A new block of luxury apartments will bring profit. It will not bring community.

Yours faithfully,
Margaret Thornton`

const OCR_P1_SOURCE_REF =
  'Specially written for this practice paper (not a published text): a letter to a local council planning department'

/**
 * Text 2 of OCR Component 01 (ocr-lang-p1), added 24 October 2026, when the
 * paper was restructured to OCR's: OCR sets two non-fiction texts, one from
 * the 19th century and one from the 20th or 21st, and this paper printed only
 * the letter above. Dickens on the lonely in London, cut by script from
 * Project Gutenberg (#882) on 27 September 2026 for src/data/mock-exams-aqa.ts,
 * a bank the site does not serve, where the extract check found it word for
 * word; copied from there by script, never retyped. No live paper prints it.
 */
const OCR_P1_TEXT_2 = `It is strange with how little notice, good, bad, or indifferent, a man may live and die in London. He awakens no sympathy in the breast of any single person; his existence is a matter of interest to no one save himself; he cannot be said to be forgotten when he dies, for no one remembered him when he was alive. There is a numerous class of people in this great metropolis who seem not to possess a single friend, and whom nobody appears to care for. Urged by imperative necessity in the first instance, they have resorted to London in search of employment, and the means of subsistence. It is hard, we know, to break the ties which bind us to our homes and friends, and harder still to efface the thousand recollections of happy days and old times, which have been slumbering in our bosoms for years, and only rush upon the mind, to bring before it associations connected with the friends we have left, the scenes we have beheld too probably for the last time, and the hopes we once cherished, but may entertain no more. These men, however, happily for themselves, have long forgotten such thoughts. Old country friends have died or emigrated; former correspondents have become lost, like themselves, in the crowd and turmoil of some busy city; and they have gradually settled down into mere passive creatures of habit and endurance.`

const OCR_P1_TEXT_2_REF =
  'Charles Dickens, "Thoughts about People", Sketches by Boz (1836; text of a later Chapman & Hall edition)'

// ─── WJEC Extract ────────────────────────────────────────────────────────────

// Since 31 October 2026, Animal Farm, Chapter X, cut by script from
// src/data/full-texts/animal-farm.ts in whole paragraphs and never retyped; it
// replaced a passage written for the site. After it come Eduqas's bands for
// each Component 1 question, in this file's own words, from
// src/data/mark-scheme-guides/eduqas-lang-comp1.ts.
// EDITION QUIRKS, LEFT AS THE EDITION HAS THEM: the held text reads "tatted
// wall" for the "tarred wall" of Chapter II, and "everything-in" with a hyphen
// where printed editions have a dash; scripts/check-mock-exam-extracts.mjs
// holds the extract to that edition word for word, so neither is corrected
// by hand. It also prints stressed words in capitals ("BETTER"), so no answer
// treats those capitals as Orwell's own device, and none quotes either slip.
const WJEC_P1_EXTRACT = `One day in early summer Squealer ordered the sheep to follow him, and led them out to a piece of waste ground at the other end of the farm, which had become overgrown with birch saplings. The sheep spent the whole day there browsing at the leaves under Squealer's supervision. In the evening he returned to the farmhouse himself, but, as it was warm weather, told the sheep to stay where they were. It ended by their remaining there for a whole week, during which time the other animals saw nothing of them. Squealer was with them for the greater part of every day. He was, he said, teaching them to sing a new song, for which privacy was needed.

It was just after the sheep had returned, on a pleasant evening when the animals had finished work and were making their way back to the farm buildings, that the terrified neighing of a horse sounded from the yard. Startled, the animals stopped in their tracks. It was Clover's voice. She neighed again, and all the animals broke into a gallop and rushed into the yard. Then they saw what Clover had seen.

It was a pig walking on his hind legs.

Yes, it was Squealer. A little awkwardly, as though not quite used to supporting his considerable bulk in that position, but with perfect balance, he was strolling across the yard. And a moment later, out from the door of the farmhouse came a long file of pigs, all walking on their hind legs. Some did it better than others, one or two were even a trifle unsteady and looked as though they would have liked the support of a stick, but every one of them made his way right round the yard successfully. And finally there was a tremendous baying of dogs and a shrill crowing from the black cockerel, and out came Napoleon himself, majestically upright, casting haughty glances from side to side, and with his dogs gambolling round him.

He carried a whip in his trotter.

There was a deadly silence. Amazed, terrified, huddling together, the animals watched the long line of pigs march slowly round the yard. It was as though the world had turned upside-down. Then there came a moment when the first shock had worn off and when, in spite of everything-in spite of their terror of the dogs, and of the habit, developed through long years, of never complaining, never criticising, no matter what happened—they might have uttered some word of protest. But just at that moment, as though at a signal, all the sheep burst out into a tremendous bleating of—

"Four legs good, two legs BETTER! Four legs good, two legs BETTER! Four legs good, two legs BETTER!"

It went on for five minutes without stopping. And by the time the sheep had quieted down, the chance to utter any protest had passed, for the pigs had marched back into the farmhouse.

Benjamin felt a nose nuzzling at his shoulder. He looked round. It was Clover. Her old eyes looked dimmer than ever. Without saying anything, she tugged gently at his mane and led him round to the end of the big barn, where the Seven Commandments were written. For a minute or two they stood gazing at the tatted wall with its white lettering.

"My sight is failing," she said finally. "Even when I was young I could not have read what was written there. But it appears to me that that wall looks different. Are the Seven Commandments the same as they used to be, Benjamin?"

For once Benjamin consented to break his rule, and he read out to her what was written on the wall. There was nothing there now except a single Commandment. It ran:

ALL ANIMALS ARE EQUAL

BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS

After that it did not seem strange when next day the pigs who were supervising the work of the farm all carried whips in their trotters. It did not seem strange to learn that the pigs had bought themselves a wireless set, were arranging to install a telephone, and had taken out subscriptions to 'John Bull', 'Tit-Bits', and the 'Daily Mirror'. It did not seem strange when Napoleon was seen strolling in the farmhouse garden with a pipe in his mouth—no, not even when the pigs took Mr. Jones's clothes out of the wardrobes and put them on, Napoleon himself appearing in a black coat, ratcatcher breeches, and leather leggings, while his favourite sow appeared in the watered silk dress which Mrs. Jones had been used to wearing on Sundays.`

const WJEC_P1_EXTRACT_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter X. Text: Project Gutenberg Australia.'

const WJEC_P1_Q01_MARKING = [
  'One mark for each correct, separate point taken from the lines the question names, up to 5.',
  'A point the lines suggest counts as well as one they state, as long as the lines support it.',
  'No mark for a detail from outside those lines, for the same point made twice, or for a whole sentence copied out without the point picked out of it.',
]

const WJEC_P1_Q02_MARKING = [
  '5 marks: sharp, accurate points that notice less obvious things, each backed by a well-chosen quotation, with subject terms used to explain the effect of the words.',
  '4 marks: accurate, well-supported points, with clear comment on how the language creates them.',
  '3 marks: several relevant points, each backed by a quotation, with some comment on the words the writer chose.',
  '2 marks: one or two simple, obvious points, with some support.',
  '1 mark: a very slight answer, perhaps one point with little or no support.',
  'All five marks are for language (AO2), and only the lines the question names count. A short, focused answer can earn full marks.',
]

const WJEC_P1_Q03_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive across the whole of the lines named, analysing in detail how the language works, including subtler choices, with well-judged subject terms.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how particular words affect the reader, with accurate subject terms.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain what particular words show, using some subject terms correctly.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; may name a technique without explaining it.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language (AO2), not structure. Material from outside the lines named earns nothing, and a quotation with no explanation earns little.',
]

const WJEC_P1_Q04_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive, analysing in detail how language and structure work together, including the subtler choices.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how the words and the order of events work on the reader.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain how the words and the order of events create the effect.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; techniques are named rather than explained.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language and structure together (AO2): what happens, in what order and at what pace, as well as the words chosen. An answer only about words, or one that retells the events, answers half the question.',
]

const WJEC_P1_Q05_MARKING = [
  "Band 5 (9 to 10 marks): a persuasive, perceptive judgement that takes in the whole passage, with every reference well chosen, showing real insight into how the writer shapes the reader's thoughts and feelings.",
  "Band 4 (7 to 8 marks): a clear, well-argued judgement that stays close to the text, with well-chosen evidence and real discussion of the writer's choices.",
  "Band 3 (5 to 6 marks): begins to judge the text, with sensible references and some sense of the passage as a whole and of the writer's choices.",
  'Band 2 (3 to 4 marks): gives a view backed by a few obvious references, with little on the whole passage or on how the writer works.',
  'Band 1 (1 to 2 marks): an opinion with little more than a passing reference to the text.',
  'This question assesses evaluation (AO4). You may agree, disagree or partly agree: what is rewarded is a clear judgement, held to from start to finish, drawn from the final lines and from the passage as a whole. Retelling the story, or using only the final lines, holds an answer down.',
]

const WJEC_P1_Q11_MARKING = {
  'Communication and organisation (AO5, up to 24 marks)': [
    'Band 5 (20 to 24 marks): an original story that holds the reader from start to end, with detailed characters and a carefully built structure.',
    'Band 4 (15 to 19 marks): a story in firm control, shaped with a clear purpose, with believable detail and some original ideas.',
    'Band 3 (10 to 14 marks): a clear, well-organised story that is going somewhere, with some developed detail, though it plays safe.',
    'Band 2 (5 to 9 marks): a story the reader can follow that is starting to take shape, though plot and characters are thin.',
    'Band 1 (1 to 4 marks): a very simple story, or one that is hard to follow, with little organisation.',
  ],
  'Vocabulary, sentence structure, spelling and punctuation (AO6, up to 16 marks)': [
    'Band 5 (14 to 16 marks): spelling, punctuation and grammar close to faultless; sentences varied for effect; a wide vocabulary used precisely.',
    'Band 4 (11 to 13 marks): errors are rare; sentences are chosen for effect; vocabulary is ambitious.',
    'Band 3 (7 to 10 marks): sentences are varied; most punctuation and spelling is correct.',
    'Band 2 (4 to 6 marks): sentences vary a little; most everyday words are spelt correctly.',
    'Band 1 (1 to 3 marks): sentences are mostly alike; errors in spelling, punctuation and tense are frequent.',
  ],
  'What holds the marks down': [
    'The two marks are given separately, each on its own grid.',
    'Writing that only describes, without telling a story, cannot reach the top of the range: the task asks for a narrative, or an account of an experience, real or imagined.',
    'A story learnt in advance that does not fit the title chosen.',
    'A piece far shorter than the guidance of about 450 to 600 words.',
    'Sentences run together with commas, and missing full stops.',
  ],
}

// ─── OCR Component 02 (ocr-lang-p2): its two texts, since 31 October 2026 ──
// Text 1: F. Scott Fitzgerald, The Great Gatsby (1925), Chapter IX, paragraphs
// 139 to 141 of src/data/full-texts/the-great-gatsby.ts, cut by script in
// whole paragraphs; italic markers dropped, nothing else changed. Text 2 was
// written for this practice paper and its label says so.
const OCR_P2_TEXT_1 = `One of my most vivid memories is of coming back West from prep school and later from college at Christmas time. Those who went farther than Chicago would gather in the old dim Union Street station at six o’clock of a December evening, with a few Chicago friends, already caught up into their own holiday gayeties, to bid them a hasty good-by. I remember the fur coats of the girls returning from Miss This-or-That’s and the chatter of frozen breath and the hands waving overhead as we caught sight of old acquaintances, and the matchings of invitations: “Are you going to the Ordways’? the Herseys’? the Schultzes’?” and the long green tickets clasped tight in our gloved hands. And last the murky yellow cars of the Chicago, Milwaukee & St. Paul railroad looking cheerful as Christmas itself on the tracks beside the gate.

When we pulled out into the winter night and the real snow, our snow, began to stretch out beside us and twinkle against the windows, and the dim lights of small Wisconsin stations moved by, a sharp wild brace came suddenly into the air. We drew in deep breaths of it as we walked back from dinner through the cold vestibules, unutterably aware of our identity with this country for one strange hour, before we melted indistinguishably into it again.

That’s my Middle West—not the wheat or the prairies or the lost Swede towns, but the thrilling returning trains of my youth, and the street lamps and sleigh bells in the frosty dark and the shadows of holly wreaths thrown by lighted windows on the snow. I am part of that, a little solemn with the feel of those long winters, a little complacent from growing up in the Carraway house in a city where dwellings are still called through decades by a family’s name. I see now that this has been a story of the West, after all—Tom and Gatsby, Daisy and Jordan and I, were all Westerners, and perhaps we possessed some deficiency in common which made us subtly unadaptable to Eastern life.`

const OCR_P2_TEXT_1_REF = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter IX'

const OCR_P2_TEXT_2 = `The last coach north left Victoria at ten past eleven, and by the time it reached the motorway most of the passengers were asleep.

Amira was not. She sat with her forehead against the cold window and watched London unravel behind her: the tower blocks thinning into warehouses, the warehouses into fields, the fields into a darkness so complete that the glass gave her back only her own face. Three months at university had changed that face, she thought, though she could not have said how. It looked older in the dark. It looked like someone who knew where she was going.

Service stations came and went like small, bright islands. At each one the driver switched on the lights, the sleepers stirred and blinked and settled again, and the coach sighed back on to the road. Somewhere past Leicester a baby began to cry, softly at first and then with real conviction, and its mother walked it up and down the aisle, humming a tune that Amira almost recognised.

She had told herself she would not be sentimental. She had a reading list and a part-time job and a whole new set of friends who said lunch when she would have said dinner. She had a life. But as the hours went by, she found herself counting the signs. Doncaster. Wetherby. Scotch Corner. The names were like stepping stones across a river, and she was crossing them one at a time.

Snow began near Durham. It came out of the dark in slow, fat flakes that turned gold in the headlights, and the motorway hushed beneath it. Then the coach crested the last hill, and there below her, scattered like a handful of coins, were the lights of the city: the bridges strung across the river, the dark tower of the cathedral, the cranes standing over the quayside like patient herons.

Something in her chest loosened that she had not known was tight.

Her dad was waiting at the coach station, exactly where she had known he would be, in the coat he had worn for as long as she could remember, holding a flask of tea in one hand and her old scarf in the other. He did not say anything clever. He just wound the scarf round her neck, the way he had when she was six, and said, "You're home, pet."

And she was. Not because of the city, or the snow, or even the house waiting at the end of the journey, but because of the scarf, still warm from his pocket, and the way he said it, as if it had never been in doubt.`

const OCR_P2_TEXT_2_REF =
  'Specially written for this practice paper: an original story about a journey home, not from a published book'

/**
 * ocr-lang-p2's level descriptors: this site's own words, adapted from
 * src/data/mark-scheme-guides/ocr-lang-component02.ts. OCR's descriptors are
 * its copyright and are not copied.
 */
const OCR_P2_LEVELS = {
  q2: [
    '6 marks: analyses language and structure in consistent depth and with subtlety; exact subject terms strengthen every point.',
    '5 marks: insightful analysis that gives language and structure fairly even, detailed attention; terms fit naturally.',
    '4 marks: explains with understanding what both the language and the structure do, though one may get more attention than the other.',
    '3 marks: explains some effects clearly and mentions both language and structure, though not both fully.',
    '2 marks: notices some features, but mostly of either language or structure, and names more than it explains.',
    '1 mark: describes or retells the lines, with little sense of how the writer creates the effect and few or no subject terms.',
  ],
  q3: [
    '11-12 marks: detailed, subtle analysis of language and structure in every point, showing exactly how the writer shapes what the reader feels; terms are exact and strengthen the argument.',
    '9-10 marks: insightful analysis that gives language and structure fairly even, detailed attention; terms fit naturally into the explanations.',
    '7-8 marks: explains in some depth what both the language and the structure do, though one may get more attention than the other; terms help to develop the points.',
    '5-6 marks: explains some effects clearly and mentions both language and structure, though one is explained less fully; some useful terms.',
    '3-4 marks: notices some features, but says much more about either language or structure than the other, and often names features without explaining them; some terms, not always relevant ones.',
    '1-2 marks: mostly describes or retells the lines, with little sense of how the writer creates effects and few or no subject terms.',
  ],
  ao4: [
    '11-12 marks: judges the statement sharply and with balance from start to finish, explains fully how both texts work on the reader, and builds exactly the right quotations into the argument.',
    '9-10 marks: weighs up the statement with care, explains clearly how the texts affect the reader, and picks quotations that make the case convincing.',
    '7-8 marks: develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
    '5-6 marks: makes clear judgements on the statement, with some sense of how the texts affect a reader, backed by suitable quotations.',
    '3-4 marks: gives simple judgements on the statement, notices a little of the effect on the reader, and uses some suitable quotations.',
    '1-2 marks: mostly retells the texts or copies out lines, with little real judgement of the statement.',
  ],
  ao3: [
    '6 marks: moves between the two texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
    '5 marks: keeps the comparison going through the whole answer, covering both ideas and methods.',
    '4 marks: develops the comparison of both what the writers think and how they show it.',
    "3 marks: sets the writers' ideas side by side clearly, and begins to compare their methods too.",
    "2 marks: identifies the main ways in which the writers' ideas are alike or different.",
    "1 mark: notes one or two basic likenesses or differences between the writers' ideas.",
  ],
  ao5: [
    '21-24 marks: every part of the piece is shaped on purpose to work on the reader; bold, well-judged choices of voice and style; a structure fully under control and used for a range of effects.',
    '17-20 marks: confident writing whose voice and style suit the task from start to finish; firmly shaped, with paragraphs and sentences planned to do particular jobs for the reader.',
    '13-16 marks: handles the form clearly, with a voice and style that suit the task; well organised, sometimes using its structure for effect.',
    '9-12 marks: stays with the task and keeps the reader in mind; the tone is right but slips at times; a clear overall shape, and paragraphs mostly work.',
    '5-8 marks: mostly keeps to the task, tries for a fitting tone, and shows some organisation through paragraphs and links.',
    '1-4 marks: some attempt at the kind of writing asked for, with little sense of the reader or of a planned shape.',
  ],
  ao6: [
    '13-16 marks: bold, varied sentences built to give each idea its full force; punctuation accurate and chosen for effect as well as clarity; precise vocabulary; even difficult words spelt correctly, with only the very occasional slip.',
    '9-12 marks: sentences varied widely and on purpose; punctuation accurate throughout and making the meaning clear; some ambitious vocabulary that works; longer words spelt correctly, with the odd slip on unusual ones.',
    '5-8 marks: different kinds of sentence, mostly correct and now and then used for effect; punctuation usually right; some words clearly chosen for effect; a few spelling slips.',
    '1-4 marks: mostly simple sentences with some longer ones attempted; uneven punctuation; plain but relevant vocabulary; everyday words largely spelt correctly.',
  ],
}

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const mockExamPapers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // AQA ENGLISH LANGUAGE PAPER 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p1',
    board: 'AQA',
    paperNumber: 1,
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    subtitle: 'English Language 8700/1',
    code: '8700/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${AQA_P1_EXTRACT_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p1-q1',
            questionNumber: 1,
            questionText:
              'Read again the first paragraph of the source. Choose four statements below which are TRUE.\n\nA) Pip lived in marsh country, down by the river.\nB) It was a warm, sunny morning.\nC) The churchyard was overgrown with nettles.\nD) The marshes were high and hilly.\nE) Cattle were feeding on the marshes.\nF) The river was bright and sparkling.\nG) The wind was rushing from the sea.\nH) Pip felt calm and unafraid.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - These are the four true statements based on the first paragraph. A: "Ours was the marsh country, down by the river." C: "this bleak place overgrown with nettles was the churchyard." E: "with scattered cattle feeding on it." G: "the distant savage lair from which the wind was rushing was the sea."',
              'Grade 6-7':
                'A, C, E, G - The correct answers are found by careful reference to the first paragraph only. B is false (it was "a memorable raw afternoon towards evening"), D is false (the marshes are a "dark flat wilderness"), F is false (the river is "the low leaden line"), and H is false (Pip is "growing afraid of it all and beginning to cry").',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks for incorrect selections',
            ],
          },
          {
            id: 'aqa-p1-q2',
            questionNumber: 2,
            questionText:
              'Look in detail at the first paragraph of the source, from "Ours was the marsh country" to "was Pip." How does the writer use language here to describe the marshland setting?\n\nYou could include the writer\'s choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the churchyard as a "bleak place overgrown with nettles", which makes it sound cold, empty and uncared for. The marshes are a "dark flat wilderness", and the word "wilderness" suggests a wild place where nobody lives. The river is "the low leaden line", and "leaden" makes it sound grey and heavy, like the metal lead. The writer calls the sea a "savage lair", a metaphor that makes it sound like the den of a wild animal. Pip himself is only "the small bundle of shivers", which shows how small and frightened he feels in this huge, cold place.',
              'Grade 6-7':
                'Dickens presents the marshes as a vast, hostile place by listing what Pip "found out for certain" in one long sentence. The repeated "and that" moves the eye outward, from the churchyard to the marshes, the river and the sea, so the landscape seems to stretch further with every clause. The descriptions are bleak and colourless: the churchyard is a "bleak place overgrown with nettles", the marshes a "dark flat wilderness", and the river "the low leaden line", where the alliteration on "l" slows the phrase down and "leaden" suggests something heavy, grey and lifeless. The metaphor "the distant savage lair from which the wind was rushing" turns the sea into the den of a wild animal, so even the weather seems to attack. The sentence ends not with the landscape but with Pip, "the small bundle of shivers growing afraid of it all": after the huge setting, the child is reduced to a small, trembling object, which shows how helpless he is in it.',
              'Grade 8-9':
                'Dickens makes the setting the means by which Pip first understands the world: this is his "first most vivid and broad impression of the identity of things", and the adult narrator\'s formal, abstract phrasing sits against the child\'s fear. The heart of the paragraph is one long sentence built on the repeated "and that", a pattern of discovery in which each part of the place is named in turn: the churchyard, the graves, the marshes, the river, the sea. The syntax works like a view widening to the horizon, and the diction darkens as it goes. The "dark flat wilderness" is "intersected with dikes and mounds and gates", where the polysyndeton makes the land seem endless; "the low leaden line beyond was the river" uses alliteration and the metaphor of lead to make the water heavy and lifeless; and "the distant savage lair from which the wind was rushing" turns the sea into the den of a predator, so the wind itself seems to spring out at the boy. Even the time of day is hostile: "a memorable raw afternoon towards evening", where "raw" suggests both bitter cold and something painfully exposed. The final clause reverses the movement. Having looked outward to the sea, the sentence turns back to "the small bundle of shivers growing afraid of it all and beginning to cry", and names him last. The child comes at the end of the list, as one more thing in the landscape, small and exposed, which prepares the reader for the voice that breaks in at the start of the next paragraph.',
            },
            markScheme: [
              'Identifies relevant language features (metaphor, personification, imagery)',
              'Analyses the effect of specific words and phrases',
              'Comments on how language creates mood/atmosphere',
              'Uses subject terminology accurately',
              'Embeds quotations rather than bolt-on',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p1-q3',
            questionNumber: 3,
            questionText:
              'You now need to think about the whole of the source.\n\nHow has the writer structured the text to build tension and create a sense of threat?\n\nYou could write about:\n- what the writer focuses your attention on at the beginning\n- how and why the writer changes this focus as the extract develops\n- any other structural features that interest you.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'At the beginning, the writer focuses on the setting: the churchyard, the marshes, the river and the sea. This creates a bleak, lonely mood, and the paragraph ends with Pip "beginning to cry", so we already know he is frightened. Then the focus changes suddenly when a voice shouts "Hold your noise!" This interruption is shocking because it comes straight after we see Pip alone. The writer then describes the man in detail, which makes him frightening. After that there is a lot of short dialogue, like "Tell us your name!" and "Quick!", which speeds up the pace and makes the scene tense. At the end, the man turns Pip upside down and Pip is left "trembling" on a tombstone, so the extract ends with Pip still in danger.',
              'Grade 6-7':
                'Dickens structures the extract so that a slow, wide description of the setting is broken by a sudden, close threat. The first paragraph is a single panoramic view: one long sentence moves outward from the churchyard to the marshes, the river and "the distant savage lair from which the wind was rushing", before turning back to Pip, "the small bundle of shivers". Ending the paragraph on the frightened child makes him seem tiny and exposed just before the threat arrives. The shift is abrupt. The second paragraph opens with direct speech, "Hold your noise!", so the reader hears the convict before seeing him, and he "started up from among the graves", as though the dead of the first paragraph had come to life. The third paragraph slows the action to describe him in three sentences with no main verb ("A fearful man", "A man with no hat", "A man who had been soaked in water"), and the last of them ends in contact: "he seized me by the chin." The pace then quickens through very short lines of dialogue ("Quick!", "Pip, sir.") that show Pip\'s terror and the man\'s control. The extract ends with the church going "head over heels" as Pip is turned upside down, and the final image of Pip "trembling while he ate the bread ravenously" leaves the threat unresolved.',
              'Grade 8-9':
                'The extract is built on one sharp structural contrast: a long, slow opening that looks outward over an empty landscape, and a sudden threat that comes from very close. Dickens gives the whole first paragraph to the setting, and most of it to one sentence that moves from the churchyard to the marshes, the river and the sea through the repeated "and that". The effect is of a view widening to the horizon, so the reader, like Pip, looks outward and away. The sentence then turns back to "the small bundle of shivers", and the delay has made him as small as possible at the moment the threat arrives. The threat does not come from the horizon. The direct speech "Hold your noise!" breaks in with no warning, and the convict "started up from among the graves at the side of the church porch": he rises out of the very place the first paragraph filled with the dead, so the setting seems to produce him. The third paragraph then stops the action to describe him in three sentences with no main verb, each adding detail, from the "great iron on his leg" to what has been done to him ("soaked in water, and smothered in mud, and lamed by stones"), until the last clause ends in contact: "he seized me by the chin." From here the structure narrows to dialogue. The lines shrink to "Quick!" and "Pip, sir.", and the rapid exchange of commands and answers puts the reader inside Pip\'s fear. The last paragraph turns the world upside down, the church going "head over heels" and Pip seeing "the steeple under my feet", and it ends not with escape but with Pip "seated on a high tombstone, trembling" while the man eats. Ending on the convict\'s hunger rather than on any resolution leaves the reader, like Pip, waiting to learn what he will do next.',
            },
            markScheme: [
              'Comments on the overall structural progression',
              'Analyses how the writer shifts focus between paragraphs',
              'Comments on sentence-level structural choices',
              'Considers the effect of structure on the reader',
              'Uses structural terminology (shift, focus, pace, tension, volta)',
              'Top band: perceptive, detailed structural analysis',
            ],
          },
          {
            id: 'aqa-p1-q4',
            questionNumber: 4,
            questionText:
              'Focus this part of your answer on the second part of the source, from the paragraph beginning "Hold your noise!" to the end.\n\nA student said: "The writer makes the convict seem genuinely terrifying. You feel real fear when reading this section."\n\nTo what extent do you agree?\n\nIn your response, you could:\n- consider your own impressions of the convict\n- evaluate how the writer has created these impressions\n- support your response with references to the text.',
            marks: 20,
            suggestedTimeMinutes: 22,
            questionType: 'evaluation',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that the writer makes the convict terrifying. He shouts "Hold your noise!" before we even see him, and then he threatens, "Keep still, you little devil, or I\'ll cut your throat!" This is a violent and direct threat to a small child. He has "a great iron on his leg", which shows he is an escaped prisoner. He "glared, and growled", which makes him sound like an animal. When he turns Pip upside down, we see how strong and rough he is. However, the writer also makes me feel sorry for him. He has been "soaked in water, and smothered in mud", and he "limped, and shivered", so he is cold and hurt. He also eats Pip\'s bread "ravenously", which shows he is starving. Overall, I mostly agree, because the threats are frightening even though the convict is suffering too.',
              'Grade 6-7':
                'I largely agree, though I think Dickens creates a fear that is mixed with pity and even humour. The convict is introduced as "a terrible voice" before he is seen, and his first words are commands and a threat to kill: "Keep still, you little devil, or I\'ll cut your throat!" Rising "from among the graves", he seems to come from the dead. The description that follows piles up detail in sentences with no main verb, beginning "A fearful man, all in coarse grey, with a great iron on his leg." The iron marks him as an escaped convict, and the list of verbs "limped, and shivered, and glared, and growled" moves from suffering to animal menace. His power over Pip is physical: he "seized me by the chin" and "turned me upside down", and Pip can only answer "Pip, sir." However, the same description invites sympathy. The passive verbs in "soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars" show things being done to him, and his teeth "chattered in his head" with cold. The ending, where he "ate the bread ravenously", suggests that his threats come from hunger. His dialect ("Pint out the place!") and the comic image of the church going "head over heels" also soften the fear, because the adult Pip is looking back on the scene. So the section is frightening, but the fear is complicated by pity.',
              'Grade 8-9':
                'The student is right that the convict is frightening, but I would argue that Dickens makes the reader\'s fear uneasy, because the scene is told by an adult looking back on his childhood terror, and that voice mixes horror with pity and comedy. The fear is real. The convict is heard before he is seen, as "a terrible voice", and his first speech moves from command to a threat of death: "Keep still, you little devil, or I\'ll cut your throat!" That he "started up from among the graves" makes him seem to rise out of the dead the first paragraph has just listed. The three sentences that describe him ("A fearful man", "A man with no hat", "A man who had been soaked in water") have no main verb, as if the child can take in the man only as a heap of frightening details, and they end in the violence of "he seized me by the chin." The rapid dialogue that follows gives the convict every command ("Tell us your name!", "Quick!", "Give it mouth!") and Pip only a plea for his life and his name, so the power is entirely one-sided. Yet the same description is full of suffering. The long chain of passive verbs, "soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars", presents a man who has been hurt by everything around him, and the rhythm of "limped, and shivered, and glared, and growled" moves from pain to menace in four verbs, as though the one causes the other. His teeth "chattered in his head", which is cold, not cruelty. The ending confirms it: his search of Pip\'s pockets finds "nothing in them but a piece of bread", and he "ate the bread ravenously". The comic sentence that begins "When the church came to itself" shows the upside-down world from the child\'s point of view, and the narrator\'s humour lets the reader see the terror from a safe distance. So I agree that the section creates real fear, but it is fear of a hungry, hunted man, and Dickens makes us pity him in the same moment.',
            },
            markScheme: [
              'Evaluates critically with a clear personal response',
              'Shows a sustained and nuanced argument',
              'Selects and analyses appropriate textual evidence',
              'Considers alternative interpretations',
              "Demonstrates sophisticated understanding of writer's craft",
              'Top band: evaluative, critical, conceptualised response',
            ],
          },
        ],
      },
      {
        id: 'aqa-p1-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p1-q5',
            questionNumber: 5,
            questionText:
              'You are going to enter a creative writing competition.\n\nYour entry will be judged by a panel of published authors.\n\nEither:\nWrite a description suggested by this picture: [Imagine a photograph of an abandoned fairground at dusk, with rusting rides silhouetted against a darkening sky.]\n\nOr:\nWrite the opening part of a story about a place that holds a secret.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear and engaging piece of creative writing that: uses some descriptive techniques (simile, metaphor, sensory detail); has a clear structure with distinct paragraphs; includes varied vocabulary; attempts to create atmosphere; demonstrates generally accurate spelling and punctuation with some variety in sentence structure.',
              'Grade 6-7':
                'A compelling piece that: crafts a controlled atmosphere through sustained sensory detail; uses varied and ambitious vocabulary; demonstrates conscious structural choices (e.g., circular structure, shifts in pace); employs a range of sentence forms for effect; shows consistent accuracy in spelling, punctuation, and grammar with some sophisticated constructions (semicolons, colons, dashes).',
              'Grade 8-9':
                'An assured, crafted piece that: creates a vivid, immersive experience through precise, original imagery; demonstrates sophisticated structural control with deliberate shifts in pace, perspective, or focus; uses an extensive vocabulary with precise word choices; employs varied sentence structures with complete control; shows technical virtuosity in punctuation (including semicolons, colons, parenthetical dashes, ellipses used for effect); creates a distinctive narrative voice.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Communication, tone, style, register',
              'AO5: Organisation of ideas with structural/grammatical features',
              'AO6 Technical Accuracy (16 marks): Sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Spelling including ambitious vocabulary',
              'AO6: Variety of sentence forms for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AQA ENGLISH LANGUAGE PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lang-p2',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${AQA_P2_SOURCE_A_REF}\nSource B: ${AQA_P2_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer has visited cities outside Britain.\nB) The writer counted fourteen homeless people in one area.\nC) The temperature was minus ten degrees.\nD) People were sleeping in doorways.\nE) The homeless people were near Westminster.\nF) Politicians were discussing housing policy.\nG) The writer walked a single mile.\nH) The sleeping people had tents.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, B, D, E - A: the writer has "walked through the streets of every major city in Europe." B: "I counted fourteen people." D: "sleeping in doorways." E: "within a single mile of Westminster."',
            },
            markScheme: ['1 mark for each correct answer', 'Maximum 4 marks'],
          },
          {
            id: 'aqa-p2-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the differences and similarities in the conditions of the homeless people described in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources describe homeless people who are exposed to bitter cold. In Source A, people are sleeping in doorways in "minus eight degrees", with only "cardboard and sleeping bags" to cover them. In Source B, the poor "stand shivering in the snow" outside the Asylum. The people in Source B seem to have even less than those in Source A: many "are without shirts" and "A few are without shoes", and their clothes are "hanging in tatters". Both sources show that whole groups are suffering: Source A counts "fourteen people" in a single mile, and Source B describes a "squalid crowd" that includes babies, because we hear "the squealing of the beggar infants". A difference is that the people in Source B are waiting outside a shelter, "this refuge for the starving and the homeless", while the people in Source A are sleeping on the street.',
              'Grade 6-7':
                'Both writers describe people with no home who are exposed to extreme cold, but the conditions in Source B are more desperate in their physical detail. The writer of Source A reports people "curled under cardboard and sleeping bags" in "minus eight degrees", so they have at least some makeshift protection. Mayhew\'s crowd have almost none: they "stand shivering in the snow" in "thin, cobwebby garments hanging in tatters", many "are without shirts", and some have their clothes "tied round their wrists and ankles with string" against the wind. The bare feet whose flesh is "blue and livid-looking" show the cold doing visible harm. Both sources suggest that the poor include the vulnerable: Source A implies that anyone could be affected ("any one of us"), while Mayhew\'s crowd includes "beggar infants" and is full of "hoarse coughs", which suggests illness. There is a difference in shelter, though. Source A\'s rough sleepers lie in doorways "within a single mile of Westminster", close to power but ignored by it, while Mayhew\'s crowd is seen "from one of the upper windows of the institution", a refuge for the homeless. Both, however, show people seen as a group rather than as individuals: "fourteen human beings" in Source A, a "squalid crowd" in Source B.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear differences and/or similarities',
              'Uses evidence from both texts',
              'Synthesises rather than alternates between texts',
              'Infers beyond surface-level details',
            ],
          },
          {
            id: 'aqa-p2-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to persuade the reader that homelessness is a crisis that demands action?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${AQA_P2_SOURCE_A}`,
            extractSource: AQA_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses statistics like "169%" to show how big the problem is and shock the reader. The phrase "over 700 people died" is emotive because it makes us think about real deaths. The inclusive pronoun in "any one of us" makes the reader feel personally connected. The listing of "the mortgage payment missed... the relationship that fractured... the mental health crisis" makes homelessness seem like it could happen to anyone. The word "comforting" in "comforting stories" is critical: the writer suggests our excuses exist to make us feel better, not because they are true.',
              'Grade 6-7':
                'The writer deploys a carefully escalating rhetorical strategy, moving from statistical evidence to emotional appeal to moral accusation. The opening establishes authority through personal testimony - "I have walked through the streets of every major city in Europe" - before delivering the devastating juxtaposition of "fourteen human beings curled under cardboard" against "elected representatives" debating "the finer points of trade policy." The spatial proximity ("less than a hundred yards away") makes the moral distance obscene. The statistics function not merely as evidence but as indictment: "169%" and "700 people died" are positioned as unanswerable facts. However, the most sophisticated persuasive technique is the tricolon of ordinary misfortune - "The mortgage payment missed... The relationship that fractured... The mental health crisis" - which uses sentence fragments and the definite article ("The") to make each scenario feel specific, inevitable, and universal simultaneously. The final paragraph is built on the first person plural: "we walk past. We avert our eyes. We tell ourselves comforting stories." The anaphoric "we" is simultaneously accusatory and inclusive; the reader cannot escape complicity.',
              'Grade 8-9':
                'The writer orchestrates a rhetorical progression from logos to pathos to ethos that systematically dismantles the reader\'s defences against engagement. The opening paragraph performs a spatial argument: the journey from "every major city in Europe" narrows to "a single mile of Westminster," a structural compression that mirrors the closing distance between affluence and destitution. The juxtaposition of "fourteen human beings curled under cardboard" with representatives debating "the finer points of trade policy" deploys the bathetic gap between human suffering and bureaucratic abstraction - "finer points" is particularly devastating, its connotation of refinement grotesquely inappropriate alongside "minus eight degrees." The second paragraph\'s statistical barrage - "169%," "700 people died" - is strategically placed after the personal testimony, ensuring the numbers attach to the already-visualised scene rather than remaining abstract. But the paragraph\'s most powerful technique is the syntactic shift to sentence fragments: "The mortgage payment missed because of illness. The relationship that fractured." These are not sentences but snapshots of catastrophe, their incompleteness mirroring lives interrupted. The adjective "ordinary" in "profoundly, terrifyingly ordinary" is the paragraph\'s key word - the paired adverbs, both intensifiers, transform the commonplace into something that should alarm us. The final paragraph enacts the moral confrontation the text has been building towards: the repeated "we" collapses the observer/observed distinction, while "comforting stories" uses the adjective with bitter irony, exposing self-deception as a deliberate strategy of moral evasion.',
            },
            markScheme: [
              'Analyses persuasive language techniques in detail',
              'Comments on the effect of specific words and phrases',
              'Considers how language positions the reader',
              'Uses subject terminology accurately and precisely',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to poverty and social responsibility.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers feel strongly about poverty, and both want the reader to feel responsible. The writer of Source A is angry and blames society directly: "we walk past. We avert our eyes." Mayhew also challenges comfortable people. He imagines a well-off person who thanks God that "he is not as one of these", and then asks, "How comes it that you are well clothed and well fed, whilst so many go naked and hungry?" Both writers attack the excuses people make. Source A criticises "comforting stories about choice and personal responsibility", and Mayhew challenges the boast of being the "architect of your own fortune". A difference is that Source A uses statistics, like "169%", while Mayhew describes the people in close physical detail, such as the crowd who "stand shivering in the snow".',
              'Grade 6-7':
                'Both writers see poverty as a test for the comfortable, and both reject the idea that the poor are simply to blame, but they convey this in different ways. The writer of Source A is openly accusatory. The contrast between "fourteen human beings curled under cardboard" and politicians debating "the finer points of trade policy" attacks those in power, and the repeated "we" in "we walk past. We avert our eyes." makes the reader share the guilt. The writer dismisses "comforting stories about choice and personal responsibility" as self-deception. Mayhew reaches a similar conclusion through observation and then reflection. He first describes the crowd in physical detail, their "thin, cobwebby garments hanging in tatters", and then turns on the onlooker\'s pride. He imagines the "self-congratulations" of a comfortable man who, "like the Pharisee in the parable", is glad that "he is not as one of these". Then "the better nature whispers" a question: "How comes it that you are well clothed and well fed, whilst so many go naked and hungry?" His rhetorical questions dismantle the idea of the self-made man, the "architect of your own fortune", by asking "who, let us ask, gave you the genius or energy for the work?" This is the same target as Source A\'s "personal responsibility". The methods differ. The modern writer relies on statistics ("169%") and the collective "we", and grounds the argument in shame at a public failure; Mayhew relies on close description, on the second person "you", and on religion, making pride itself the sin. Both conclude that the fortunate owe the poor more than judgement.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows clear understanding of different perspectives',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-q5',
            questionNumber: 5,
            questionText:
              '"Young people today have a responsibility to make the world a better place - and they are rising to the challenge."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative piece that: addresses the statement directly; uses some persuasive devices (rhetorical questions, direct address); has a clear structure with introduction, body paragraphs, and conclusion; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted argument that: engages with the statement critically (not just agree/disagree); uses a range of rhetorical techniques fluently; deploys evidence and examples effectively; matches the register of a broadsheet article; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'A compelling, assured argument that: offers a nuanced, sophisticated perspective; crafts a distinctive voice appropriate to the form; deploys rhetorical strategies with precision and control; uses counter-argument to strengthen the position; demonstrates extensive vocabulary and varied syntax; shows technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Clear, effective communication matched to form, purpose, audience',
              'AO5: Structured argument with coherent paragraphing',
              'AO6 (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used effectively',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL ENGLISH LANGUAGE PAPER 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p1',
    board: 'Edexcel',
    paperNumber: 1,
    title: 'Paper 1: Fiction and Imaginative Writing',
    subtitle: 'English Language 1EN0/01',
    code: '1EN0/01',
    totalTimeMinutes: 105,
    totalMarks: 64,
    sections: [
      {
        id: 'edexcel-p1-reading',
        title: 'Section A: Reading',
        description:
          'Read the extract below and answer ALL the questions in this section. You should spend about 1 hour on this section, including about 10 minutes reading the extract.\n\nIn this extract, the narrator is driving a horse and dog cart home alone at night, after taking his wife to safety in the town of Leatherhead, in Surrey. Martians have arrived near his home at Woking, inside metal cylinders that fell from the sky like shooting stars, and a red glare from the fires they have started lights up the sky.\n\nWords you may need: Ripley, Pyrford, Addlestone and Maybury Hill are places in Surrey; a dog cart is a light carriage with two wheels; lurid means glaring and unnatural; smote means struck; detonating reverberations are the booming echoes of an explosion; problematical means hard to make out; articulate here means jointed; career means rushing course.',
        totalMarks: 24,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'edexcel-p1-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of the extract.\n\nGive one word or phrase from it which shows that it is very late at night.',
            marks: 1,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5': '"I heard midnight pealing out from Pyrford Church"',
            },
            markScheme: [
              'One mark for one correct answer taken from the part of the extract the question names.',
              'A single word or a short quotation is enough: no explanation is needed.',
              'Accept any one of: "I heard midnight pealing out from Pyrford Church"; "midnight pealing out"; "midnight".',
            ],
          },
          {
            id: 'edexcel-p1-q2',
            questionNumber: 2,
            questionText:
              'Read again this part of the extract.\n\nEven as I beheld this a lurid green glare lit the road about me and showed the distant woods towards Addlestone. I felt a tug at the reins. I saw that the driving clouds had been pierced as it were by a thread of green fire, suddenly lighting their confusion and falling into the field to my left. It was the third falling star!\n\nClose on its apparition, and blindingly violet by contrast, danced out the first lightning of the gathering storm, and the thunder burst like a rocket overhead. The horse took the bit between his teeth and bolted.\n\nGive two ways in which this part of the extract shows that the night is becoming more dangerous. You may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. A "thread of green fire" falls into the field beside him: "It was the third falling star!"\n2. The thunder frightens the horse, which "took the bit between his teeth and bolted".',
            },
            markScheme: [
              'One mark for each correct point taken from the part of the extract printed with the question, up to two.',
              'Your own words and short quotations both count, but the second point must be different from the first.',
              'Points may include: a "lurid green glare" lights up the road; a "thread of green fire" falls into a field beside the road: "the third falling star"; the lightning is "blindingly violet"; "the thunder burst like a rocket overhead"; the horse "bolted", so the narrator loses control.',
            ],
          },
          {
            id: 'edexcel-p1-q3',
            questionNumber: 3,
            questionText:
              'Read again the part of the extract from "And this Thing I saw!" to the end of the extract.\n\nIn this part of the extract, how does the writer use language and structure to show the narrator\'s fear of the fighting machines?\n\nRefer closely to the text to support your views.',
            marks: 6,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer shows the narrator\'s fear first through his struggle to describe what he sees. The paragraph opens with an exclamation and a question, "And this Thing I saw! How can I describe it?", and the capital letter in "Thing" makes it sound like something without a proper name, a monster. He then tries again: "A monstrous tripod, higher than many houses, striding over the young pine trees, and smashing them aside in its career". The adjective "monstrous", the comparison with houses and the violent verb "smashing" show its terrible size and power. Sound adds to the fear, as "the clattering tumult of its passage" mixes "with the riot of the thunder", so the machine seems part of the storm.\n\nThe lightning shapes the way the machine is seen. "A flash, and it came out vividly", and then, "with the next flash, a hundred yards nearer". The reader sees it in jumps, as the narrator does, and each jump brings it closer, which is far more frightening than a smooth approach. To help us imagine it, the narrator uses a surprisingly homely comparison: "Can you imagine a milking stool tilted and bowled violently along the ground?" By speaking to the reader directly and choosing a farmyard object, he makes the alien machine easier to picture, and somehow more disturbing.\n\nThen the writer increases the terror with "Then suddenly": a second tripod bursts out of the pine wood, and the trees part "as brittle reeds are parted by a man thrusting through them". The simile shows how little the trees resist. The exclamation "And I was galloping hard to meet it!" shows the narrator\'s horror at his own situation, and the short admission "my nerve went altogether" marks the moment his courage breaks. The final sentence rushes through his actions in a string of clauses: he "wrenched the horse\'s head", the cart "heeled over", "the shafts smashed noisily", and he "fell heavily into a shallow pool of water". The sudden, flat ending in the pool shows how completely his fear has overwhelmed him.',
            },
            markScheme: {
              'How it is marked (6 marks)': [
                'Level 1 (1 to 2 marks): a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or on structure only, or one that is unbalanced between them, cannot go above this level.',
                'Level 2 (3 to 4 marks): explains how both the language and the structure create effects, with well-matched quotations.',
                'Level 3 (5 to 6 marks): analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
              ],
              'Language: points you might make': [
                'The exclamation "And this Thing I saw!" and the question "How can I describe it?" show a narrator struggling for words, and the capital letter makes "Thing" sound monstrous.',
                '"A monstrous tripod, higher than many houses" and the verbs "striding" and "smashing them aside" show its size and power.',
                'Sounds add to the terror: "the clattering tumult of its passage mingling with the riot of the thunder".',
                'The homely comparison with "a milking stool tilted and bowled violently along the ground" helps the reader picture something unimaginable.',
                'The simile "as brittle reeds are parted by a man thrusting through them" shows how easily the second machine breaks the trees, and "my nerve went altogether" admits his panic.',
              ],
              'Structure: points you might make': [
                'The lightning structures the sighting: "A flash, and it came out vividly", then "with the next flash, a hundred yards nearer", so the machine moves in terrifying jumps.',
                '"Then suddenly" brings in a second machine just as the reader takes in the first.',
                'The exclamation "And I was galloping hard to meet it!" shows his horror at his own position.',
                'The last sentence follows the crash in a rush of clauses and ends abruptly in the pool.',
              ],
            },
          },
          {
            id: 'edexcel-p1-q4',
            questionNumber: 4,
            questionText:
              "In this extract, the writer sets out to make the reader share the narrator's terror.\n\nEvaluate how well the writer achieves this.\n\nSupport your judgement with detailed references to the whole extract.",
            marks: 15,
            suggestedTimeMinutes: 32,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'I think the writer is very successful in making the reader share the narrator\'s terror, because he builds the fear in stages and keeps us inside the narrator\'s experience throughout. The extract begins with an uneasy night journey. The "red glare" of the fires comes and goes as the road dips, and "the trees about me shivered with the first intimation of the storm that was upon me". The personification of the shivering trees suggests that even nature is afraid. Then "I heard midnight pealing out from Pyrford Church behind me", and the striking of midnight, a traditional hour of danger, adds to the tension.\n\nThe next events take away the narrator\'s control. "a lurid green glare lit the road", and he sees "a thread of green fire" falling into a field: "It was the third falling star!" The exclamation shows his alarm, and the reader, knowing what the falling stars bring, shares it. Immediately the lightning "danced out", "the thunder burst like a rocket overhead", and "The horse took the bit between his teeth and bolted." From this point the narrator is no longer in charge of his own journey, which makes him, and us, feel helpless.\n\nThe storm itself is made strange and frightening. The thunderclaps sound "more like the working of a gigantic electric machine than the usual detonating reverberations", a comparison that makes even the weather seem mechanical and alien. "The flickering light was blinding and confusing", and "a thin hail smote gustily at my face", so the reader can almost feel the sting of it.\n\nThe first sight of the fighting machine is especially effective because it is uncertain. At first he "took it for the wet roof of a house", and he calls it "an elusive vision". Only in "a flash like daylight" does "this problematical object" come out "clear and sharp and bright". Then comes the exclamation "And this Thing I saw! How can I describe it?", and the description of "A monstrous tripod, higher than many houses". The lightning shows it in jumps, "a hundred yards nearer" with each flash, which makes its approach terrifying. When a second tripod appears, "rushing, as it seemed, headlong towards me", and the narrator admits "my nerve went altogether", the reader\'s fear is at its height. The crash that follows, ending with him falling "heavily into a shallow pool of water", is sudden and shocking.\n\nSome readers may feel that parts of the extract weaken the terror. The question "Can you imagine a milking stool tilted and bowled violently along the ground?" might seem almost comic, and the many place names, such as Pyrford and Addlestone, could slow the pace. We also know that the narrator survives, since he is telling the story. However, I think these features add to the effect. The familiar English places make the invasion feel close to home, and the homely milking stool makes the unimaginable machine real, which is more frightening than a vague description. The first-person voice, with its exclamations and direct questions, pulls the reader into the dog cart beside him. Overall the writer succeeds very well in making the reader share the narrator\'s terror.',
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
                'The night builds tension: the "red glare", trees that "shivered with the first intimation of the storm", and midnight striking behind him.',
                'The "lurid green glare" of a falling star and the bolting horse take away his control.',
                'The storm is unnatural: the thunder sounds "like the working of a gigantic electric machine", and the light is "blinding and confusing".',
                'The first sight is uncertain, "an elusive vision", mistaken at first for "the wet roof of a house".',
                'The "Thing" approaches in flashes, a second appears, and the crash ends it. The first-person voice, the exclamations and the direct question to the reader draw us in.',
                "Some may find the milking stool comic, or the place names and the narrator's survival reduce the terror; others that the familiar English places and the homely image make the invasion feel closer to home.",
              ],
            },
          },
        ],
      },
      {
        id: 'edexcel-p1-writing',
        title: 'Section B: Imaginative Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. You should spend about 45 minutes on it, including about 5 minutes planning and 5 minutes checking your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              'Answer ONE of the two questions below.\n\nQuestion 5\nWrite about a time when you, or someone you know, were caught in the middle of something frightening. Your writing can be real or imagined.\n\nOR\n\nQuestion 6\nIn the exam, two pictures are printed with this question. Here they are described in words. Picture 1: a horse and cart racing down a dark country road under a stormy sky. Picture 2: lightning over a pine wood, with a dark shape among the trees that could be anything.\n\nWrite about a journey that went wrong. Your writing can be real or imagined. You may base it on one of the pictures, or on neither.\n\nEach question is worth 40 marks: 24 for content and organisation, and 16 for vocabulary, sentence structure, spelling and punctuation.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nIt was supposed to be the simplest journey in the world. One train, fifty minutes, from our station to Gran\'s, where she would be waiting on the platform with a flask of tea and a bag of lemon sherbets, as she had every summer since I was eight. This year, at thirteen, I was making it on my own for the first time.\n\n"Platform two," said Mum, for the fifth time, as we stood on the bridge. "The ten fifteen. Do not get off until you see the sign for Ashby."\n\n"I know," I said, with all the patience of someone who definitely knew.\n\nThe train was late, and crowded, and I found a seat by the window opposite an old man with a very large dog. I put my headphones in. I watched the town slide away, and then the fields, yellow and green and flat as a tablecloth. I must have closed my eyes for a moment, because when I opened them the fields had turned into hills, and the hills were getting steeper, and a voice was saying, "This train terminates here."\n\nI looked out. The sign on the platform did not say Ashby. It said a name I had never seen in my life, with far too many consonants in it.\n\nFor a long moment I simply sat there, while the carriage emptied around me. My heart had started to thud. I checked my phone: one bar of battery, then none, and the screen went black in my hand like a door closing.\n\nI got off because there was nothing else to do. The station was tiny, with a single bench, a tub of red geraniums and a clock that had stopped at twenty past four. The air smelt of salt. Beyond the railings, at the bottom of a steep street of little white houses, I could see the sea, glittering and enormous and completely unexpected.\n\nI had gone the wrong way. Not just the wrong station, but the wrong direction entirely.\n\nI would like to say that I stayed calm. I did not. I sat on the bench and stared at the dead phone and felt my eyes begin to sting, while a seagull on the railing watched me with an expression of deep contempt.\n\n"You look like someone who\'s got on the wrong train."\n\nIt was the old man with the dog. The dog had sat down on my foot.\n\nHis name was Mr Penhaligon, and it turned out that he had got on the wrong train himself, once, in 1961, and ended up in Scotland. He took me to the station café, where a woman with silver earrings let me use her phone to ring Mum, who said a lot of things very loudly and then, after a while, started to laugh. She asked to speak to Mr Penhaligon, and they talked for a long time. The next train back was not for two hours, and Mum said that I could wait with him. So Mr Penhaligon bought me a pasty, and we walked his dog down the steep street to the beach.\n\nI had never seen the sea like that before, on a weekday, with nobody watching. The tide was going out, leaving long silver ribbons of water on the sand, and the dog ran in circles, barking at the waves as if they had insulted him. I took off my trainers and walked in up to my ankles, and the cold took my breath away, and I laughed out loud for no reason at all.\n\nI caught the four o\'clock train, and changed where I should have changed, and arrived at Gran\'s three hours late, sunburnt and sandy and very happy. She was waiting on the platform with the flask of tea and the lemon sherbets, exactly as always.\n\n"Good journey?" she asked.\n\n"The best," I said. And I meant it.',
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
                'Question 5 could be about a storm, an accident, being lost or a moment of danger in a crowd.',
                'Question 6 could use the racing cart, the lightning over the pine wood, or neither picture, and the journey could go wrong in a frightening or a funny way.',
                'Like the extract, a strong piece might build tension in stages and let the reader see events as the narrator saw them.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL ENGLISH LANGUAGE PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  // RESTRUCTURED 31 October 2026 to Pearson's paper, as
  // src/data/mark-scheme-guides/edexcel-lang-paper2.ts and the marker's scheme
  // edexcel-lang-paper2 set it out, and held there by
  // src/__tests__/a-language-mock-is-the-boards-paper.test.ts. It set reading
  // questions worth 4, 8, 12 and 16 and two writing tasks worth 24 and 32, so
  // its total and time were Pearson's but no question was. Pearson's Paper 2 is
  // Questions 1 and 2 (2 marks each) and 3 (15) on Text 1, 4 and 5 (1 each) and
  // 6 (15) on Text 2, 7(a) (6) and 7(b) (14) on both, then Question 8 or 9 for
  // 40, in 2 hours 5 minutes, on two 20th or 21st century non-fiction texts. The
  // Mayhew passage of 1851 is replaced by a memoir written for this paper (see
  // the constants above); the social media article is kept as Text 2, word
  // for word but for the sentence corrected below. Question 1 prints both
  // texts, because the mock-exam page shows only
  // the first question's extract. src/__tests__/mock-exam-base-quotes-the-real-
  // text.test.ts still pins the Mayhew passage and its label, so its
  // EDEXCEL_P2_SOURCE_B pin is to be retired with this change.
  // CHECKED 31 October 2026 by a second reader, question by question, against
  // the guide and the texts. Corrected:
  //   - Text 2 credited "A 2024 study by the Royal Society for Public Health"
  //     with 70% of 14 to 17 year olds feeling worse about their appearance and
  //     62% more anxious. No such RSPH study was found: its #StatusOfMind
  //     report (May 2017) surveyed 14 to 24 year olds, as the press reported
  //     it, and the 70% on its page is a rise in reported anxiety over 25
  //     years. The figures are now from the writer's
  //     own survey of a Year 10, the label (an "Original opinion piece
  //     composition", which did not say it was written for this paper) says
  //     it is a teacher's article written for the paper, and Questions 6 and
  //     7(b) weigh one school's survey instead of an organisation's authority.
  //   - 7(b): the writer of Text 1 does not "doubt" the new warnings, but
  //     does "not know whether the warnings are right this time".
  //   - Board wording: "Evaluate how successfully this is achieved." (Question
  //     6), "Use evidence from both texts to support your answer." (7(a)),
  //     "Compare how the ... writers present their ideas and perspectives"
  //     (7(b)) and Question 2's "You may use your own words or quotations" are
  //     Pearson's sentences or all but; each is reworded.
  {
    id: 'edexcel-lang-p2',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-reading',
        title: 'Section A: Reading',
        description: `Answer ALL questions in this section. You are advised to spend about 1 hour and 20 minutes on it.\n\nRead Text 1 and answer Questions 1 to 3. Then read Text 2 and answer Questions 4 to 6. Question 7 is about both texts.\n\nText 1: ${EDEXCEL_P2_TEXT_1_REF}\nText 2: ${EDEXCEL_P2_TEXT_2_REF}\n\nGlossary for Text 1: the Coronation: the crowning of Queen Elizabeth II in June 1953; the test card: a still picture shown on television when no programme was on. Glossary for Text 2: technophobe: a person who fears new technology.`,
        totalMarks: 56,
        suggestedTimeMinutes: 80,
        questions: [
          {
            id: 'edexcel-p2-q1',
            questionNumber: 1,
            questionText:
              "Look at the first paragraph of Text 1.\n\nIdentify two details about the family's first television.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_TEXT_1}\n\nText 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_TEXT_1_REF} | Text 2: ${EDEXCEL_P2_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                '1. It came in a large wooden cabinet.\n2. Its screen was the size of a dinner plate.',
            },
            markScheme: [
              '1 mark for each correct point, up to 2.',
              'Accept any two of: it was the first in the road; it was bought in May 1953, a month before the Coronation; it came in a wooden cabinet so large that two men had to carry it in; its screen was the size of a dinner plate.',
              "A word, a short phrase or the student's own words is enough.",
            ],
          },
          {
            id: 'edexcel-p2-q2',
            questionNumber: 2,
            questionText:
              'Read the second paragraph of Text 1, beginning "Within a year".\n\nGive two things the writer watched or did in front of the television.\n\nYou may answer in your own words or with quotations.',
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'retrieval',
            extract: `Text 1:\n${EDEXCEL_P2_TEXT_1}`,
            extractSource: EDEXCEL_P2_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7':
                '1. The writer watched "a puppet show".\n2. The writer sat "cross-legged on the rug, so close to the screen that my mother said my eyes would go square".',
            },
            markScheme: [
              '1 mark for each correct point, up to 2. The two points must be different.',
              'Accept: watched a puppet show; a cookery programme; a man drawing cartoons; the test card; sat cross-legged on the rug close to the screen; watched the white dot shrink and vanish when it was switched off.',
              "Quotations and the student's own words both count.",
            ],
          },
          {
            id: 'edexcel-p2-q3',
            questionNumber: 3,
            questionText:
              "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest.\n\nRefer closely to the text to support your views.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: `Text 1:\n${EDEXCEL_P2_TEXT_1}`,
            extractSource: EDEXCEL_P2_TEXT_1_REF,
            modelAnswers: {
              'Grade 6-7': `The writer makes the memoir interesting by describing the arrival of the family's first television and the adults' worries about it.

In the first paragraph, the writer uses humour. The television was so big that it took "two men and a great deal of swearing" to carry it in, but the screen was only "the size of a dinner plate". This contrast is funny. The writer describes "twenty-three people" watching the Coronation, which shows how special the television was.

In the second paragraph, the writer says "I had fallen completely in love with it", which shows how much the child enjoyed television. The mother's warning that the child's "eyes would go square" is funny. When the television was switched off, the writer felt "as though a friend had left the room", which shows how important it had become.

The third paragraph begins with the short sentence "The grown-ups were alarmed." The writer lists the adults' worries, such as the headmaster saying television would "rot our brains". The grandmother "had never watched it" but was still sure it was bad, which makes the adults seem a little silly.

In the fourth paragraph, the writer admits that "some of their worries were not foolish", but explains that television showed the child things like "the top of a mountain". This makes the memoir balanced.

At the end, the writer links the past to the present, saying that people now give the same warnings "almost word for word". This makes the reader think about modern worries about phones.`,
              'Grade 8-9': `The writer engages the reader by recreating the excitement of a new invention through a child's eyes, setting it against the adults' alarm, and then ending with a reflection that links the past to the present.

The first paragraph presents the television's arrival as a grand event. The cabinet was "so large that it took two men and a great deal of swearing to carry it into the front room", a comic detail that contrasts with the anticlimax of a screen "the size of a dinner plate". The scene of "twenty-three people" on "chairs borrowed from the chapel" for the Coronation, with sandwiches made "until the bread ran out", shows that the television briefly turned a private room into a public one.

The second paragraph recreates a child's devotion. The opening, "Within a year, I had fallen completely in love with it", presents the relationship as a romance, and the list of programmes, "a puppet show, a cookery programme, a man drawing cartoons", is gently funny because so little was on. The mother's warning that the child's "eyes would go square" adds humour, and the final image of the white dot that would "shrink and vanish", leaving the child feeling "as though a friend had left the room", is touching and a little sad.

The third paragraph turns to the adults, and its short opening sentence, "The grown-ups were alarmed.", is followed by a list of warnings that builds to comic absurdity: television would "rot our brains and ruin our handwriting", the vicar "preached a sermon against it", and the grandmother, "who had never watched it", was sure it was bad for the nerves. That last detail makes the reader question the adults' judgement.

The fourth paragraph is balanced. The phrase "some of their worries were not foolish" concedes a point, and the image of staying indoors while friends were "out on their bicycles" admits a cost. But the turn on "But" leads to a list of discoveries, "the inside of a coal mine, the top of a mountain, a ballet", that shows the television widening the child's world, and the conclusion that "the world was very much larger than our road" echoes "our road" in the first sentence.

The final paragraph shifts to the present with "My grandchildren now carry screens in their pockets", and the phrase "almost word for word" makes the reader see that today's warnings repeat old ones. The final sentence, that "every generation seems to fear the new thing that its children love", turns a personal memory into a general observation, and its dry ending, that the children "grow up anyway", leaves the reader smiling.`,
            },
            markScheme: [
              'Credit analysis of both language and structure, with references from across Text 1, each linked to its effect on the reader.',
              'Language could include: the comic contrast between the huge cabinet and the small screen; the love the child feels and the image of the white dot; the list of adult warnings that builds to absurdity; the list of discoveries; the dry final phrase "grow up anyway".',
              'Structure could include: the movement from the arrival, to the child\'s devotion, to the adults\' alarm, to a balanced judgement, to the present; the short sentence that opens the third paragraph; the turn on "But"; the echo of "our road"; the ending that links the 1950s to today.',
              'Level 1 (1-3 marks): says a little about the text and names some features, with few quotations.',
              'Level 2 (4-6 marks): comments on the writing, with quotations that fit but are not explored. An answer on language only, or on structure only, goes no higher than this level.',
              'Level 3 (7-9 marks): explains how both the language and the structure create effects, with well-matched quotations.',
              'Level 4 (10-12 marks): explores both the language and the structure in detail, with plenty of quotations backing up each point.',
              'Level 5 (13-15 marks): analyses both with real insight, using carefully chosen quotations that sharpen every point.',
            ],
          },
          {
            id: 'edexcel-p2-q4',
            questionNumber: 4,
            questionText:
              'Look at the first paragraph of Text 2.\n\nIdentify one way in which the writer says young people today build their identities.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: EDEXCEL_P2_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'In public, before an audience of hundreds.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: in public; in real time; before an audience of hundreds.',
            ],
          },
          {
            id: 'edexcel-p2-q5',
            questionNumber: 5,
            questionText:
              'Look at the third paragraph of Text 2.\n\nIdentify one benefit of social media that the writer recognises.',
            marks: 1,
            suggestedTimeMinutes: 1,
            questionType: 'retrieval',
            extract: `Text 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: EDEXCEL_P2_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': 'Connection across distance.',
            },
            markScheme: [
              '1 mark for one correct point.',
              'Accept one of: community; creativity; connection across distance.',
            ],
          },
          {
            id: 'edexcel-p2-q6',
            questionNumber: 6,
            questionText:
              'In Text 2, the writer sets out to persuade the reader that social media is harming young people.\n\nEvaluate how well the writer achieves this. Refer closely to the text to support your judgement.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Text 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: EDEXCEL_P2_TEXT_2_REF,
            modelAnswers: {
              'Grade 6-7': `I think the writer is quite successful in persuading the reader that social media harms young people, because the article uses statistics, a fair tone and powerful examples.

At the start, the writer says social media has "fundamentally restructured" how teenagers form their identities. This strong language makes the change sound serious. The writer explains that young people now build their identities "in public", which suggests they are under pressure.

In the second paragraph, the writer uses statistics from a survey of their own students, such as "70%" feeling worse about their appearance. This makes the argument seem reliable, although one year group is a small sample. The writer also points out a paradox: social media was designed to connect us but makes young people feel "more isolated".

In the third paragraph, the writer says "I am not a technophobe", which makes the writer seem fair. The examples of a thirteen-year-old checking her likes before breakfast and a boy measuring his worth by his "follower count" make the problem feel real.

The ending, "We are witnessing a crisis.", is short and powerful. However, the writer does not suggest any solutions, and the examples are not of real people, so some readers might not be fully convinced.`,
              'Grade 8-9': `The writer is fairly successful, because the article moves from a grand claim, to statistics, to a concession, to vivid examples, building to a dramatic conclusion; but some of its claims are larger than its evidence.

The opening sentence makes a sweeping claim: social media has "fundamentally restructured the architecture of adolescent identity". The metaphor of architecture suggests that something solid and basic has been rebuilt, and the contrast between previous generations, who built identity "through the slow accumulation of shared experiences and private conversations", and today's young people, who build it "in public, in real time, before an audience of hundreds", is effective because the three phrases make the pressure feel relentless.

The second paragraph supports the claim with statistics: "70%" said social media made them "feel worse about their appearance" and "62%" said it increased their anxiety. These figures are striking, and because they come from the writer's own students they feel immediate, but one year group in one school is a small sample from which to judge all young people. The paradox that "the very platforms designed to connect us are making young people feel more isolated" is the most persuasive idea in the article, and the list "more isolated, more inadequate, and more anxious" builds emphasis.

The third paragraph makes the writer seem reasonable. The short sentence "I am not a technophobe." and the admission that social media offers "genuine benefits" make the criticism that follows more credible. The two examples, a thirteen-year-old who "cannot eat breakfast without first checking how many likes her post received overnight" and a fifteen-year-old who "measures his worth by his follower count", are specific and recognisable, and the sentences beginning "When" build to the short, blunt conclusion: "We are witnessing a crisis."

However, the article is short and does not say what should be done, and calling the situation "a crisis" on the strength of two imagined examples may seem exaggerated to a sceptical reader. The claim that young people are more anxious "than any previous generation" is also asserted rather than proved. Overall, the writer persuades well within a short space, but the argument relies more on strong language than on evidence.`,
            },
            markScheme: [
              'A clear judgement of how successfully the writer persuades, kept up through the answer and supported by detailed reference to Text 2.',
              'Points that could be evaluated: the sweeping opening and the metaphor of architecture; the contrast between past and present ways of building identity; the statistics and the paradox of platforms that isolate; the concession that makes the writer seem fair; the two examples and the blunt final sentence.',
              "A balanced view is creditable, for example that the figures come from one school's survey, that the examples are imagined, or that no solution is offered.",
              'Level 1 (1-3 marks): mostly describes the content; opinions are given without reasons, with few quotations.',
              'Level 2 (4-6 marks): comments on the content and offers simple opinions, backed by quotations that fit but are not explored.',
              'Level 3 (7-9 marks): explains how the writing achieves its effect and gives a reasoned view of how well it works, with suitable quotations.',
              'Level 4 (10-12 marks): analyses the text and builds a well-argued judgement, with detailed quotations backing up every point.',
              'Level 5 (13-15 marks): evaluates the text as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
              "From Level 2 upwards, comments on the writer's techniques earn credit only when they support the judgement of how successful the writing is.",
            ],
          },
          {
            id: 'edexcel-p2-q7a',
            questionNumber: 7,
            label: '7(a)',
            questionText:
              "Both texts describe adults' worries about young people and a new kind of screen.\n\nWhat similarities are there between the two writers' accounts? Support each point with evidence from both texts.",
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${EDEXCEL_P2_TEXT_1}\n\nText 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_TEXT_1_REF} | Text 2: ${EDEXCEL_P2_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 6-7':
                'Both texts describe adults who are worried about young people and screens. In Text 1 the headmaster said television "would rot our brains", and in Text 2 the writer says social media is causing "a crisis". Both texts suggest that screens stop young people from spending time together in person: in Text 1 children "no longer played in the street", and in Text 2 the writer contrasts today\'s teenagers with generations who grew up "through face-to-face interaction". Both writers also admit that screens have good points, such as television showing "the top of a mountain" and social media offering "connection across distance".',
              'Grade 8-9':
                'Both writers describe adults worrying about how a new kind of screen will affect the young: in Text 1 the headmaster warned that television "would rot our brains", and in Text 2 the writer fears that social media makes young people "more anxious than any previous generation". Both describe the fear that screens replace real company. In Text 1 a neighbour complained that "children no longer played in the street" and an aunt feared they would be "unable to hold a conversation", while in Text 2 "private conversations" have given way to living "in public". Both show screens taking over daily life, the child sitting "so close to the screen" and the thirteen-year-old who "cannot eat breakfast without first checking" her likes. Finally, both admit that the screens bring benefits, Text 1 recalling that television "showed me things I would never otherwise have seen" and Text 2 granting social media "genuine benefits".',
            },
            markScheme: [
              'Similarities could include: adults worrying about the effect of a new screen on the young; the fear that screens replace real company and conversation; screens taking over daily life; the admission that screens also bring benefits.',
              'Both texts must be used: an answer that draws on one text only scores 0.',
              'Level 1 (1-2 marks): spots one or two similarities but links them only loosely, with little evidence.',
              'Level 2 (3-4 marks): finds sensible similarities and joins the texts clearly, with suitable evidence, though one text may get more attention than the other.',
              'Level 3 (5-6 marks): finds well-observed similarities and weaves the two texts together throughout, with well-chosen evidence from both.',
              'This question rewards finding and combining evidence; analysis of language earns nothing extra.',
            ],
          },
          {
            id: 'edexcel-p2-q7b',
            questionNumber: 7,
            label: '7(b)',
            questionText:
              "Compare the two writers' ideas and perspectives about young people and new technology, and how each writer conveys them.\n\nRefer closely to both texts in your answer.",
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Text 1:\n${EDEXCEL_P2_TEXT_1}\n\nText 2:\n${EDEXCEL_P2_TEXT_2}`,
            extractSource: `Text 1: ${EDEXCEL_P2_TEXT_1_REF} | Text 2: ${EDEXCEL_P2_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 6-7': `Both writers write about young people and screens, but they have different perspectives. The writer of Text 1 remembers loving television as a child and does not think the adults' worries were completely right. The writer of Text 2 is worried that social media is harming young people and calls it "a crisis".

Both writers are fair. The writer of Text 1 admits that "some of their worries were not foolish", and the writer of Text 2 says "I am not a technophobe" and accepts that social media has "genuine benefits".

The tones are different. Text 1 is funny and thoughtful, with humour such as the mother saying the child's "eyes would go square". Text 2 is serious and urgent, using statistics such as "70%".

The writers also reach different conclusions. Text 1 suggests that adults always worry about new things, saying that "every generation seems to fear the new thing that its children love". Text 2 suggests that this time the danger is real. Overall, Text 1 is more relaxed about technology, while Text 2 is more worried.`,
              'Grade 8-9': `Both writers recognise that a new screen can harm the young and also enrich them, but the writer of Text 1, looking back over a lifetime, is sceptical of the alarm, while the writer of Text 2 shares it.

The writer of Text 1 remembers loving television as a child, "I had fallen completely in love with it", and presents the adults' fears with gentle mockery. The list of warnings builds to absurdity, and the grandmother "who had never watched it" undermines the whole chorus of disapproval. The writer of Text 2 is one of the worried adults. The argument begins with a grand claim about "the architecture of adolescent identity" and ends with the verdict "We are witnessing a crisis."

Yet both writers try to be fair. Text 1 concedes that "some of their worries were not foolish" and admits staying in "while my friends were out on their bicycles". Text 2 concedes "I am not a technophobe" and grants "genuine benefits - community, creativity, connection across distance". The difference is in where each concession leads: Text 1 ends by suggesting the fears are a repeated pattern, while Text 2 ends by insisting that this time "something has gone fundamentally wrong".

Their perspectives come partly from their positions. The writer of Text 1 has seen the fears of the 1950s come and go, and now hears them again "almost word for word", which leaves the writer unsure whether the new warnings are right. The writer of Text 2 writes from inside the present, as a teacher, with figures from a survey of their own students, "70%" and "62%", that suggest a new and measurable harm. One writer has history on their side; the other has evidence, though from a single school.

Their methods reflect their purposes. Text 1 is a memoir that uses humour, such as the warning that the child's "eyes would go square", and vivid images of discovery, "the inside of a coal mine, the top of a mountain, a ballet", to show what television gave. Text 2 is an opinion article that uses metaphor, statistics, a paradox and two imagined examples in sentences beginning "When". Text 1 ends with a wry general observation, that "every generation seems to fear the new thing that its children love"; Text 2 ends with an alarm. Read together, they ask a real question: whether today's worry is a new truth or an old habit.`,
            },
            markScheme: [
              'Comparisons could include: both writers see that a new screen can harm and enrich the young, but Text 1 is sceptical of the alarm and Text 2 shares it; both make concessions, which lead Text 1 to see a repeated pattern and Text 2 to insist on a new danger; Text 1 draws on a lifetime of experience, Text 2 on figures from the present; Text 1 uses humour and images of discovery and ends wryly, Text 2 metaphor, statistics, paradox and examples and ends with an alarm.',
              'Level 1 (1-2 marks): says what each text is about without really comparing them, with few quotations.',
              "Level 2 (3-5 marks): makes the more obvious comparisons and comments on the writers' views, with quotations that fit but are not explored. An answer that deals with only one text in detail goes no higher than this level.",
              "Level 3 (6-8 marks): makes several comparisons and explains each writer's views and how they come across, with well-matched quotations. An answer that is unbalanced between the texts cannot reach this level.",
              'Level 4 (9-11 marks): compares the texts on many points and explores how each writer gets their views across, with evidence drawn evenly from both.',
              'Level 5 (12-14 marks): compares the texts in depth and from many angles, analysing how each writer conveys their view, with carefully chosen evidence from both.',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-writing',
        title: 'Section B: Transactional Writing',
        description:
          'Answer ONE question in this section, either Question 8 or Question 9. You are advised to spend about 45 minutes on it, including time to plan your answer and to check it.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p2-q8-9',
            questionNumber: 8,
            label: 'Q8 or Q9',
            questionText:
              'Answer ONE question: either Question 8 or Question 9.\n\nQuestion 8\n\nYour school is considering a ban on mobile phones during the school day.\n\nWrite a speech for a school assembly in which you argue for or against the ban.\n\nYou could write about:\n• how students use their phones in school\n• the effects on learning and friendships\n• what rules would be fair\nand any other ideas of your own.\n\nOR\n\nQuestion 9\n\nWrite an article for a website for parents in which you advise them how to help their children use screens sensibly.\n\nYou could write about:\n• the benefits and dangers of screens for young people\n• rules that work and rules that do not\n• how parents can set a good example\nand any other ideas of your own.\n\n(40 marks: 24 for content and organisation, 16 for vocabulary, sentence structure, spelling and punctuation)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 6-7': `Question 8: a speech for a school assembly, for the ban

Good morning, everyone.

Our school is considering a ban on mobile phones during the school day, and I would like to explain why I support it.

Firstly, phones are a distraction in lessons. Even when they are on silent, many students check them under the desk, and a single notification is enough to break your concentration. Teachers have to waste time telling students to put their phones away instead of teaching. If phones were kept in lockers, everyone could focus on learning.

Secondly, a ban would improve friendships. At lunchtime, many students sit together but spend the whole break looking at their screens instead of talking to each other. Without phones, we would have to talk, play games and get to know each other better. I think break times would be much happier.

Thirdly, a ban could help to reduce online bullying during the school day. Some students are upset by messages and photos that are shared in school, and this affects how they feel in lessons. If phones were put away, school would feel like a safer place.

I understand that some students and parents worry about emergencies. That is a fair point. However, the school office has a phone, and parents can always call it if they need to contact their child. Students who need their phones for medical reasons could be given permission to keep them.

The rules should be fair. I suggest that phones are switched off and kept in lockers from the start of the school day until the end, with a few sensible exceptions. Teachers could also allow phones in lessons where they are needed for research.

In conclusion, a ban on mobile phones would help us to concentrate, make friends and feel safer. I hope you will support it. Thank you for listening.`,
              'Grade 8-9': `Question 9: an article for a website for parents

Switching Off Without Falling Out: A Teenager's Guide for Parents

Let me start with a confession. I am fifteen, and last month I worked out that I had spent nearly five hours a day on my phone. Most of that time I could not account for. I was not learning, or talking to friends, or even enjoying myself. I was scrolling, and I suspect many of your children are too. So, as someone on the other side of the argument, here is my advice on helping your children use screens sensibly, without turning your home into a battlefield.

First, please do not panic. Screens are not all bad. My phone is how I keep in touch with my grandmother, how I revise for chemistry and how I found the running club that I now go to twice a week. Your child's screen may be a lifeline as well as a distraction. If you treat every minute online as wasted, your child will stop telling you what they do there, and that is far more dangerous than the screen itself.

Second, make rules together, not for us. When my parents simply announced a ban on phones after nine o'clock, I resented it and broke it. When we sat down and agreed rules as a family, I kept them, because I had helped to make them. Good rules are simple and specific: no phones at the dinner table, phones charged downstairs at night, and an hour of homework before any games. Bad rules are vague, such as a promise of less screen time, and impossible to keep.

Third, think about sleep. Many teenagers take their phones to bed and lie awake answering messages long after midnight. A phone charged outside the bedroom is one of the best gifts you can give your child, even if they will not thank you for it at the time.

Finally, and most importantly, set an example. It is very hard to take advice about screen time from a parent who checks their emails at every meal. If you want your children to put their phones down, put yours down too. Go for a walk together, cook a meal, or play a board game that nobody can win by scrolling. You may find that your children are more willing to switch off than you think, as long as there is something better to switch on to.

Screens are part of our world, and they are not going away. Your job is not to protect us from them completely, but to help us learn to control them before they control us.`,
            },
            markScheme: [
              'Question 8 (a speech for an assembly): a clear position for or against the ban, sustained throughout; spoken features such as direct address; developed reasons about learning and friendships; a fair answer to worries such as emergencies, and sensible rules.',
              'Question 9 (an article for a website for parents): a headline and an engaging opening; balanced advice on the benefits and dangers of screens; practical, well-organised suggestions; a register that advises parents respectfully.',
              "AO5, content and organisation (24 marks). Level 1 (1-4): some ideas come across, with little sense of audience or purpose. Level 2 (5-9): the writing knows its audience and purpose, in a simple, steady tone, with ideas in order and in paragraphs. Level 3 (10-14): ideas and techniques suit the audience and purpose, the tone fits, and each point builds on the last. Level 4 (15-19): the writing is shaped to affect the reader, with a well-judged tone and register and a structure under control throughout. Level 5 (20-24): the writing steers the reader's response in subtle ways, with a confident voice and complex ideas that hold together.",
              'AO6, vocabulary, sentence structure, spelling and punctuation (16 marks). Level 1 (1-4): simple words, frequent spelling mistakes, shaky punctuation and repetitive sentences. Level 2 (5-7): everyday words spelt correctly, punctuation mostly right and some varied sentences. Level 3 (8-10): a good choice of words, most tricky spellings right, a range of punctuation, and sentences shaped for the purpose. Level 4 (11-13): words chosen with care from a wide range, only the odd slip, and punctuation and sentences used for clarity and purpose. Level 5 (14-16): ambitious, precise vocabulary, errors so rare they never get in the way, and a full range of punctuation and sentence types chosen for effect.',
              'The two objectives are marked separately and the marks are added together.',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 01
  // ═══════════════════════════════════════════════════════════════════════════
  // Restructured to OCR's paper on 24 October 2026, as the guide
  // src/data/mark-scheme-guides/ocr-lang-component01.ts sets it out
  // (src/__tests__/a-language-mock-is-the-boards-paper.test.ts holds it). It
  // printed one text, set questions worth 4, 6, 14 and 16 and a writing task
  // marked 32 and 8, and gave the writing 40 minutes, so answers to Questions
  // 3 and 4 reached no marker question. OCR sets two texts, one of them from
  // the 19th century (OCR_P1_TEXT_2, above), Question 1 for 4, 2 for 6, 3 for
  // 12 and 4 for 18, then Question 5 or 6 for 40 (24 and 16), about an hour a
  // section. Question 2 now brings the two texts together, Question 3 is on
  // Text 2, and Question 4 has a statement to evaluate and compare. The
  // question ids are kept.
  //
  // CHECKED BY A SECOND READER, 31 October 2026, against both texts, the guide
  // and OCR's own papers (the J351/01 sample paper and the 2022 paper):
  // - Board wording: Questions 2 to 4 closed on OCR's own sentences ("explain
  //   the impact of these ideas on you as a reader", "support your response
  //   with quotations from both texts", "referring to the text, using relevant
  //   subject terminology") and AQA's "Use details from both sources"; they now
  //   ask the same in this site's words. Question 4 still opened on OCR's "How
  //   far do you agree with this statement?"; it now reads as the chunk papers
  //   do ("Decide how far you agree with this view.", "In your answer:").
  // - Style: the letter, written for this bank, used dashes as punctuation; they
  //   are now brackets and a comma, with no word changed.
  // - Question 3's answer said the men's "old friends" are "lost, like
  //   themselves" in a busy city; Dickens says that of "former correspondents"
  //   (old friends "have died or emigrated"). Corrected.
  // - Question 4's answer said the men "forget themselves"; what they have
  //   forgotten is home and friends. It now says "their own pasts".
  {
    id: 'ocr-lang-p1',
    board: 'OCR',
    paperNumber: 1,
    title: 'Component 01: Communicating Information and Ideas',
    subtitle: 'English Language J351/01',
    code: 'J351/01',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p1-reading',
        title: 'Section A: Reading',
        description: `Read the two texts below, then answer all four questions. You are advised to spend about one hour on this section, about 12 minutes of it reading the texts.\n\nText 1: ${OCR_P1_SOURCE_REF}\nText 2: ${OCR_P1_TEXT_2_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-q1',
            questionNumber: 1,
            questionText: `Look again at the first paragraph of the letter in Text 1, from "I write to you" to "profit margins."\n\n(a) For how long has the community centre served the neighbourhood? [1]\n\n(b) Identify two kinds of gathering the writer has attended at the centre. [2]\n\n(c) In what kind of language, according to the writer, can the centre's value not be measured? [1]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${OCR_P1_SOURCE}\n\nText 2:\n${OCR_P1_TEXT_2}`,
            extractSource: `Text 1: ${OCR_P1_SOURCE_REF} | Text 2: ${OCR_P1_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) For over sixty years.\n(b) Meetings and celebrations.\n(c) "the cold language of property development and profit margins".`,
            },
            markScheme: [
              '(a) 1 mark: over sixty years.',
              '(b) 1 mark each, up to 2, for: meetings; celebrations; support groups.',
              '(c) 1 mark: "the cold language of property development and profit margins" (accept the language of property development and profit).',
              'Every answer must come from the first paragraph of the letter.',
            ],
          },
          {
            id: 'ocr-p1-q2',
            questionNumber: 2,
            questionText: `What do the two writers suggest people need from the places where they live?\n\nAnswer by linking the two texts, and back each point with evidence from both.`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Text 1:\n${OCR_P1_SOURCE}\n\nText 2:\n${OCR_P1_TEXT_2}`,
            extractSource: `Text 1: ${OCR_P1_SOURCE_REF} | Text 2: ${OCR_P1_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers suggest that people need to be noticed, and connected to others, where they live. The writer of the letter describes a hall where "People who had never spoken to each other before found themselves united", and sums up the centre's purpose as creating "the conditions for connection". Dickens shows what happens without such connection: a man in London "awakens no sympathy in the breast of any single person", and many people "seem not to possess a single friend". Both writers also see that people's lives depend on more than buildings and money. The letter says that the centre's value "cannot be measured in the cold language of property development and profit margins", and that what matters is "what happens within those walls"; Dickens's lonely men came to London "in search of employment, and the means of subsistence", and in doing so broke the ties that bound them to their "homes and friends". In both texts, a place without human ties leaves people diminished: the letter warns that luxury apartments "will not bring community", and Dickens's men have become "mere passive creatures of habit and endurance".`,
            },
            markScheme: [
              'Level 3 (5-6 marks): connects the two texts confidently and in detail, with well-chosen evidence from both, and sees the ideas, attitudes or feelings they share as well as the surface facts.',
              'Level 2 (3-4 marks): makes sensible connections between the texts with relevant evidence, though one text may get more attention than the other.',
              'Level 1 (1-2 marks): picks out a few details, mostly obvious ones and often from one text, and does little to connect them.',
              'Reward points that link the texts, each backed by evidence from both, and a fair balance between the two. There are no marks here for analysing language.',
              'Links to credit: being noticed and connected to others ("the conditions for connection"; a man who "awakens no sympathy"); lives that depend on more than buildings or money ("what happens within those walls"; ties to "homes and friends" broken by the search for work); what people become without such ties ("mere passive creatures of habit and endurance").',
            ],
          },
          {
            id: 'ocr-p1-q3',
            questionNumber: 3,
            questionText: `Look again at Text 2, the whole text.\n\nHow does Dickens use language and structure to make the reader feel sympathy for the lonely people he describes?\n\nRefer closely to the words of the text, and use subject terminology to explain their effects.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: OCR_P1_TEXT_2,
            extractSource: OCR_P1_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9': `Dickens opens with a general statement that sounds calm but is quietly shocking: "It is strange with how little notice, good, bad, or indifferent, a man may live and die in London." The list "good, bad, or indifferent" covers every kind of attention, and the pairing "live and die" sums up a whole life in two verbs, as if nothing that anyone sees happens in between.\n\nThe second sentence builds the loneliness through its structure. Three clauses separated by semicolons each say the same thing more strongly: "He awakens no sympathy", "his existence is a matter of interest to no one save himself", and finally the paradox "he cannot be said to be forgotten when he dies, for no one remembered him when he was alive". The repeated negatives, "no sympathy", "no one", "no one", pile up until the last clause, where even being forgotten is denied him. The paradox makes the reader stop and feel how complete this isolation is.\n\nDickens then widens the view from one man to "a numerous class of people in this great metropolis". There is a painful irony in the crowd: so many people, yet they "seem not to possess a single friend". He explains how this happened, "Urged by imperative necessity", which shows that these men did not choose loneliness: need drove them to London.\n\nThe middle of the paragraph turns to the reader with the inclusive "we know" and "us": "It is hard, we know, to break the ties which bind us to our homes and friends". By speaking of "our bosoms" and "the friends we have left", Dickens makes the reader share the feeling instead of looking down on it. The comparison "hard... and harder still" and the long list that follows, "the friends we have left, the scenes we have beheld too probably for the last time, and the hopes we once cherished, but may entertain no more", slow the sentence into something like a lament.\n\nThe ending is the bleakest part. "These men, however, happily for themselves, have long forgotten such thoughts" uses "happily" with bitter irony, since forgetting is a mercy only because the memories would hurt. The comparison "lost, like themselves, in the crowd and turmoil of some busy city" shows that their former correspondents have shared the same fate, and the final phrase, "mere passive creatures of habit and endurance", reduces men to creatures who merely endure. The structure, from a general truth to the reader's own memories and back to these men, makes the reader feel that this could happen to anyone.`,
            },
            markScheme: [
              'Level 6 (11-12 marks): detailed, subtle analysis of language and structure in every point, showing exactly how the writer steers the reader; subject terms are exact and strengthen the argument.',
              'Level 5 (9-10 marks): analyses with insight, giving language and structure fairly even, detailed attention; terms fit naturally into the explanations.',
              'Level 4 (7-8 marks): explains with understanding, and in some depth, what both the language and the structure do, though one may get more attention than the other.',
              'Level 3 (5-6 marks): explains some effects clearly and mentions both language and structure, though one is explained less fully.',
              'Level 2 (3-4 marks): notices some features but says much more about one of language or structure, and often names features without explaining them.',
              'Level 1 (1-2 marks): mostly describes or retells the text, with little sense of how the writer creates effects.',
              'An answer that leaves structure out, or adds one sentence about it at the end, cannot reach the higher levels. Reward short, precise quotations, each followed by what it suggests and how it affects the reader.',
              'Language to credit: the list "good, bad, or indifferent" and the pairing "live and die"; the repeated negatives and the paradox of being forgotten; the inclusive "we know" and "us"; the irony of "happily"; the final "mere passive creatures of habit and endurance".',
              'Structure to credit: a general truth first; clauses built up with semicolons; the view widened from one man to a whole class; the turn to the reader in the middle; the bleakest point kept for the end.',
            ],
          },
          {
            id: 'ocr-p1-q4',
            questionNumber: 4,
            questionText: `"Both writers show that a town or city can easily forget the people who live in it."\n\nDecide how far you agree with this view.\n\nIn your answer:\n• weigh up the writers' ideas on people and the places where they live, and how far the statement holds for each text\n• say how the texts affect you as a reader, and why\n• compare how each writer presents those ideas\n• quote from both texts to support your points.`,
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${OCR_P1_SOURCE}\n\nText 2:\n${OCR_P1_TEXT_2}`,
            extractSource: `Text 1: ${OCR_P1_SOURCE_REF} | Text 2: ${OCR_P1_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9': `I agree with this statement, although the writers show the forgetting in different ways: Dickens shows a city that has already forgotten its people, while the writer of the letter writes to stop her town from forgetting them.\n\nDickens makes the forgetting complete. A man may "live and die" in London with "how little notice", and the paradox that he "cannot be said to be forgotten when he dies, for no one remembered him when he was alive" goes beyond the statement: the city never noticed him in the first place. The people he describes are a whole "numerous class" in "this great metropolis", so the indifference belongs to the city, not to one neighbour. The effect on me is a mixture of pity and unease, because the shift to "we" and "our bosoms" in the middle of the passage suggests that any of us could become one of these men.\n\nThe letter shows the forgetting as a danger rather than a fact. The council speaks "the cold language of property development and profit margins", and its phrase "no longer fit for purpose" treats the centre as a building, not as a place full of people. The reply, "whose purpose?", reminds the council that people live in the town. The example of Mrs Patricia Ogden, "aged eighty-three", reading a poem about "her late husband", gives the town's forgotten people a name and a face. As a reader, I am moved by the anecdote, and I feel the contrast at the end, "A new block of luxury apartments will bring profit. It will not bring community.", as a warning about what the town is about to forget.\n\nSo the writers differ in hope. Dickens's men have "long forgotten such thoughts" themselves and have "settled down" into habit, and nothing in the passage suggests a remedy. The writer of the letter believes that a place like the community centre "creates the conditions for connection", so the town can still remember its people if it keeps the places where they meet.\n\nTheir methods differ too. Dickens writes in the third person about "a man" and "These men", in long, balanced sentences that sound like a sad general truth, with the city as a "crowd" and a "turmoil". The letter is written in the first person, by a witness ("Last Tuesday evening, I sat in the main hall"), and as a formal letter it uses a question and a short final paragraph to press for action: "I urge you to reconsider." Both, however, set a cold, impersonal system against warm human ties: profit margins against connection, the "crowd" against the "friends we have left".\n\nOverall, the statement fits both texts. Dickens shows a city that forgets its people so completely that they forget their own pasts, and the letter shows a council about to forget them for the sake of profit, though its writer still believes the council can be persuaded to remember.`,
            },
            markScheme: {
              'AO4, evaluation (12 marks)': [
                'Level 6 (11-12 marks): judges the statement sharply and with balance from start to finish, explains fully how both texts work on the reader, and builds exactly the right quotations into the argument.',
                'Level 5 (9-10 marks): weighs up the statement with care, explains clearly how the texts affect the reader, and chooses quotations that make the case convincing.',
                'Level 4 (7-8 marks): develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
                'Level 3 (5-6 marks): makes clear judgements on the statement, with some sense of how the texts affect a reader and suitable quotations.',
                'Level 2 (3-4 marks): gives simple judgements, notices a little of how the texts affect a reader, and uses some suitable quotations.',
                'Level 1 (1-2 marks): mostly says what happens in the texts, by retelling or copying, with little real judgement.',
                'The verdict may differ between the two texts. An answer that quotes from only one text cannot reach the higher levels.',
                'In this paper: Text 2 shows a city that has already forgotten its people ("no one remembered him when he was alive"); the letter shows a council about to forget them for "profit margins", and still hopes to keep "the conditions for connection". Credit a judgement that sees this difference in hope.',
              ],
              'AO3, comparison (6 marks)': [
                'Level 6 (6 marks): moves between the texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
                'Level 5 (5 marks): keeps the comparison going through the whole answer, covering both ideas and methods.',
                'Level 4 (4 marks): develops the comparison of both what the writers think and how they show it.',
                "Level 3 (3 marks): sets the writers' ideas side by side clearly, and begins to compare their methods.",
                "Level 2 (2 marks): spots the main ways the writers' ideas and viewpoints are alike or different.",
                'Level 1 (1 mark): notes one or two basic likenesses or differences.',
                'Evaluation and comparison may be woven together all the way through. Writing about the texts separately, never linking them, earns very little of this mark.',
                "Methods to compare: a general truth in the third person against a witness's letter in the first; long, balanced sentences against a question and a short final paragraph; a cold system set against human ties in both.",
              ],
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p1-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question: Question 5 or Question 6. You are advised to spend about one hour on this section, including time to plan and to check your work.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText: `Answer ONE of the following questions.\n\nQuestion 5\nWrite a letter to your local council arguing that a building or open space in your area should be kept for the community.\nIn your letter you could:\n• describe the place and how people use it\n• explain what would be lost if it closed\n• suggest how it could be kept going.\n\nOR\n\nQuestion 6\nWrite an article for a magazine for young people, giving advice on how to make friends when you move to a new town or school.\nIn your article you could:\n• describe what it can feel like to be new\n• suggest practical ways to meet people\n• explain why it is worth making the effort.\n\nIn your answer you will be assessed on content and organisation (24 marks) and on technical accuracy (16 marks).`,
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Question 6, a magazine article.\n\nNew town, new school, no friends? Read this first\n\nOn my first day at a new school, I ate my lunch alone in the library and pretended to read. I am not proud of it, but I am telling you because, if you have just moved somewhere new, you may be tempted to do the same. Please do not. I have now moved house four times, and I have learned that being new is hard but not hopeless. Here is what I wish someone had told me.\n\nFirst, know that the feeling passes. In your first week, everyone else seems to belong. They have their jokes, their seats on the bus, their friends from primary school. It is easy to decide that there is no room for you. But most groups are not as closed as they look. People are usually too busy worrying about themselves to notice that you are worrying too.\n\nSecond, say yes. When someone invites you to sit with them, join a game or come to a club, accept, even if you would rather go home and watch television. You will not like everyone you meet, and that is fine. Friendship is partly a matter of numbers: the more people you talk to, the more likely you are to find the ones you click with.\n\nThird, join something. Clubs, teams, choirs, drama groups and volunteering schemes are the quickest way to meet people, because they give you something to do together. It is far easier to talk to someone while you are both building a set for the school play than to walk up to a stranger in the canteen and say hello. Many towns have youth groups, libraries and sports centres that run free sessions, so ask at reception or look on the council's website.\n\nFourth, be the one who asks. Ask people where they bought their trainers, what they thought of the maths homework, or which teacher they would most like to avoid. Most people enjoy being asked about themselves, and a question is much easier to start than a story.\n\nFinally, keep in touch with your old friends, but do not let them stop you making new ones. A message from your best friend at home can be a comfort on a bad day. Just make sure that you look up from your phone often enough to notice the people around you.\n\nIt took me six weeks to find my first real friend at my last school. She was the girl who lent me a pen in my first science lesson, and I nearly forgot to say thank you. We are still friends now. So be brave, be patient, and say thank you for the pen. You never know where it might lead.`,
            },
            markScheme: {
              'AO5, content and organisation (24 marks)': [
                'Level 6 (21-24 marks): bends the form on purpose to influence the reader; bold, well-judged choices of tone and style drive the purpose; every part of the structure is controlled and used for effect.',
                'Level 5 (17-20 marks): uses the form confidently, with a sure sense of reader and purpose; tone and style hold steady throughout; paragraphs and sentences are planned to do particular jobs.',
                'Level 4 (13-16 marks): adapts the form clearly for the reader and purpose, with a suitable tone and style; well organised, and sometimes uses structure for effect.',
                'Level 3 (9-12 marks): keeps to the form with audience and purpose in mind; the tone is right but slips at times; a clear overall shape, with paragraphs and links that mostly work.',
                'Level 2 (5-8 marks): mostly keeps to a suitable form, tries for a fitting tone, and shows some organisation through paragraphs and links.',
                'Level 1 (1-4 marks): makes some attempt at a suitable form, but does little to suit the tone to the reader, with little planned structure.',
              ],
              'AO6, technical accuracy (16 marks)': [
                'Level 4 (13-16 marks): bold, varied sentences give each idea its full force; punctuation is accurate and chosen for effect; vocabulary is precise, and even difficult words are spelt correctly, with only the very occasional slip.',
                'Level 3 (9-12 marks): sentences are varied widely and on purpose; punctuation is accurate and makes the meaning clear; some ambitious words work well, with the odd slip on irregular or unusual spellings.',
                'Level 2 (5-8 marks): different kinds of sentence, mostly correct and now and then used for effect; punctuation usually right; some words clearly chosen for effect; a few spelling slips, including on harder words.',
                'Level 1 (1-4 marks): mostly simple sentences with some longer ones attempted; uneven punctuation; plain but relevant vocabulary; everyday words largely spelt correctly.',
              ],
              'For these tasks': [
                'Both tasks are marked the same way, on two grids marked separately and added: AO5 for content and organisation (24) and AO6 for technical accuracy (16).',
                'Question 5 is a formal letter to a council: set out and addressed as a letter, with a clear purpose, reasons and a request.',
                'Question 6 is a magazine article for young readers: a title, a friendly and encouraging voice, and practical advice.',
              ],
            },
          },
        ],
      },
    ],
  },

  // Restructured on 31 October 2026 to the paper Eduqas sets (C700U10-1), as
  // src/data/mark-scheme-guides/eduqas-lang-comp1.ts describes it;
  // src/__tests__/a-language-mock-is-the-boards-paper.test.ts holds it to it.
  // It set four reading questions worth 5, 10, 10 and 15 on a passage written
  // for the site, and two writing titles. Eduqas sets five questions worth 5,
  // 5, 10, 10 and 10 (labelled 01 to 05) on an extract of twentieth-century
  // fiction, then one story from four titles (labelled 11). WJEC_P1_EXTRACT is
  // now Animal Farm, Chapter X. The code is C700U10-1 (it was C700QS/1, the
  // qualification's code), and the question ids are new (a1 to a5 and b1),
  // because src/store/exam-store.ts keeps a student's answers by question id
  // and an answer to the old Question 5, a story, must never be shown as an
  // answer to the new Question 05, an evaluation.
  //
  // SECOND READING, 31 October 2026 (a checker, against the extract, the held
  // novel and the guide). Fixed:
  //   - Board wording: the instructions in Questions 01 to 05 and the Section B
  //     rubric repeated Eduqas's own sentences ("List five things you learn
  //     about ...", "You should refer to the language used in the text to
  //     support your answer", "how the writer has created these thoughts and
  //     feelings"); now in this file's words, asking for the same things.
  //   - Question 03, Grade 6-7 called Squealer "unsteady" while quoting his
  //     "perfect balance" (the unsteady ones are "one or two" others); now
  //     "awkward".
  //   - Question 04 credited "the capital letters" of "BETTER" as the writer's
  //     device; this edition prints every stressed word in capitals (see
  //     WJEC_P1_EXTRACT), so the answers and the credit list now speak of the
  //     stress on the word.
  //   - Question 05 called 'John Bull' and 'Tit-Bits' newspapers (they are
  //     magazines), gave Squealer's awkward walk to all the pigs, called
  //     Benjamin's rule one of silence (it is not to read), and quoted "MORE
  //     EQUAL" in lower case; each corrected.
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 1: Animal Farm, Chapter X
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-lang-p1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${WJEC_P1_EXTRACT_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p1-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "One day in early summer" to "for which privacy was needed."\n\nList five things this paragraph tells you about Squealer and the sheep.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. In early summer Squealer led the sheep to a piece of waste ground.\n2. The ground was overgrown with birch saplings.\n3. The sheep spent the whole day there eating the leaves.\n4. They stayed there for a whole week.\n5. Squealer said he was teaching them a new song that needed privacy.',
            },
            markScheme: {
              'How the marks are given': WJEC_P1_Q01_MARKING,
              'Credit, for example': [
                'It was early summer; Squealer ordered the sheep to follow him; he led them to waste ground at the other end of the farm; it was overgrown with birch saplings; they browsed the leaves all day while he watched; he went back to the farmhouse in the evening; he told them to stay because it was warm; they stayed for a whole week; the other animals saw nothing of them; Squealer was with them most of every day; he said he was teaching them a new song that needed privacy.',
              ],
            },
          },
          {
            id: 'wjec-p1-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "It was just after the sheep had returned" to "It was a pig walking on his hind legs."\n\nHow does the writer show that something shocking has happened?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer builds up to the shock before revealing it. The evening is "pleasant", which makes the interruption more startling, and the "terrified neighing of a horse" breaks the calm. The adjective "terrified" tells us that something is badly wrong before we know what it is. The animals are "Startled" and stop "in their tracks", and the short sentence "It was Clover\'s voice." makes the danger personal. They "broke into a gallop and rushed into the yard", and the writer delays the answer with "Then they saw what Clover had seen." The revelation is given its own short paragraph, "It was a pig walking on his hind legs.", which makes it stand out as a terrible moment.',
            },
            markScheme: {
              'How the marks are given': WJEC_P1_Q02_MARKING,
              'Credit, for example': [
                'The calm evening broken by the "terrified neighing of a horse".',
                'The animals "Startled", stopping "in their tracks", then galloping into the yard.',
                'The delay of "Then they saw what Clover had seen." and the one-sentence paragraph that reveals the pig on his hind legs.',
              ],
            },
          },
          {
            id: 'wjec-p1-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "Yes, it was Squealer." to "He carried a whip in his trotter."\n\nWhat impressions do you get of the pigs in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The pigs seem proud and powerful, and also a little ridiculous. Squealer walks "A little awkwardly, as though not quite used to supporting his considerable bulk in that position", which is comic, because he is fat and awkward, yet he moves "with perfect balance". The verb "strolling" makes him seem relaxed, as if walking on two legs were normal.\n\nThe other pigs come out in "a long file of pigs, all walking on their hind legs", which makes them seem organised, like a parade. The writer adds humour by saying that "one or two were even a trifle unsteady and looked as though they would have liked the support of a stick", but stresses that "every one of them made his way right round the yard successfully", which shows their determination to look like humans.\n\nNapoleon\'s entrance is the most important. It is announced by "a tremendous baying of dogs and a shrill crowing from the black cockerel", like a king\'s arrival. He is "majestically upright, casting haughty glances from side to side", and the words "majestically" and "haughty" show his pride and arrogance. His dogs are "gambolling round him", so he is protected. Finally, the short separate paragraph "He carried a whip in his trotter." is shocking, because a whip is a tool for driving animals, and now a pig carries one.',
              'Grade 8-9':
                'The writer presents the pigs with a mixture of comedy and menace, so that the reader laughs at them and fears them in the same few lines.\n\nSquealer comes first, and the description is precisely balanced. He walks "A little awkwardly, as though not quite used to supporting his considerable bulk in that position", where the polite phrase "considerable bulk" mocks his size, "but with perfect balance". The conjunction "but" turns the joke into a warning: he has practised. The verb "strolling" is casual, as if the most shocking thing on the farm were nothing at all.\n\nThe other pigs follow, "a long file of pigs, all walking on their hind legs", and the image of a procession makes the moment ceremonial. The writer keeps the comedy going, "one or two were even a trifle unsteady and looked as though they would have liked the support of a stick", the understatement "a trifle" and the image of a walking stick making them look like elderly gentlemen. Yet the sentence ends firmly: "every one of them made his way right round the yard successfully". The pattern of each sentence, a comic detail followed by success, shows how the pigs\' ambition overcomes their absurdity.\n\nNapoleon\'s entrance is built as a climax. It is heralded by sound, "a tremendous baying of dogs and a shrill crowing from the black cockerel", like a fanfare for a king. The word "finally" marks him as the last and greatest, "majestically upright", and the adverb "majestically" with the phrase "casting haughty glances from side to side" makes him a monarch surveying his subjects. His dogs "gambolling round him" are playful in movement but threatening in purpose. The writer then sets a single sentence apart as its own paragraph: "He carried a whip in his trotter." The plain statement, with the comic word "trotter" set against the menace of "whip", is the most frightening moment, because a whip has only one use on a farm. The impression is of pigs who have become ridiculous imitations of men and, for that very reason, dangerous ones.',
            },
            markScheme: {
              'How the marks are given': WJEC_P1_Q03_MARKING,
              'Credit, for example': [
                'Squealer\'s comic awkwardness ("considerable bulk") and his "perfect balance".',
                'The procession of pigs, some "a trifle unsteady", every one succeeding.',
                'Napoleon\'s royal entrance: the baying and crowing, "majestically upright", "haughty glances", his dogs.',
                'The one-sentence paragraph "He carried a whip in his trotter." and its menace.',
              ],
            },
          },
          {
            id: 'wjec-p1-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "There was a deadly silence." to "the pigs had marched back into the farmhouse."\n\nHow does the writer create tension and drama in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates tension by showing the animals\' shock and then their silencing. The short sentence "There was a deadly silence." sets the mood, and the adjective "deadly" suggests danger. The animals are "Amazed, terrified, huddling together", and the list shows their fear building. The simile "It was as though the world had turned upside-down" sums up the shock: everything they believed has been reversed.\n\nThen the writer creates suspense by suggesting that the animals might finally speak. There "came a moment when the first shock had worn off", and they "might have uttered some word of protest". The long sentence, with its interruption about "their terror of the dogs" and "the habit, developed through long years, of never complaining, never criticising", makes the reader wait for the protest. But it never comes: "But just at that moment, as though at a signal, all the sheep burst out into a tremendous bleating". The dash at the end leads straight into the chant, "Four legs good, two legs BETTER!", which is repeated three times, and the stress on "BETTER" makes it loud and overwhelming. It goes on "for five minutes without stopping", and "the chance to utter any protest had passed". The drama ends with the pigs simply marching back inside, which shows how easily they have won.',
              'Grade 8-9':
                'The writer creates tension by building towards a protest that never happens, and the drama lies in the moment of hope being taken away.\n\nThe section opens with stillness: "There was a deadly silence." The adjective "deadly" turns silence into threat, and the list that follows, "Amazed, terrified, huddling together", moves from the mind to the body, as shock becomes fear and fear becomes a herd\'s instinct to bunch together. The image of "the long line of pigs" marching "slowly round the yard" is ceremonial and intimidating. The simile "It was as though the world had turned upside-down" states the meaning plainly: the order of the farm has been reversed in front of their eyes.\n\nThe long sentence that follows is the heart of the tension. It begins "Then there came a moment when the first shock had worn off", and the reader expects action. But the sentence is delayed by an interruption about "their terror of the dogs, and of the habit, developed through long years, of never complaining, never criticising, no matter what happened", so the obstacles to protest are piled up inside the very sentence that imagines it. Only then does the main idea arrive: "they might have uttered some word of protest". The modal "might have" holds the protest in possibility.\n\nThe interruption comes "just at that moment, as though at a signal", and the phrase "as though at a signal" suggests what the reader has guessed: the sheep have been trained. The sentence breaks off with a dash, and the chant takes over, "Four legs good, two legs BETTER!", three times, the stress on "BETTER" making it a shout that drowns everything else. The final paragraph releases the tension flatly: "It went on for five minutes without stopping", and "the chance to utter any protest had passed, for the pigs had marched back into the farmhouse." The pigs need do nothing at all. The drama ends in silence, and the reader feels the animals\' last chance slip away.',
            },
            markScheme: {
              'How the marks are given': WJEC_P1_Q04_MARKING,
              'Credit, for example': [
                '"There was a deadly silence." and the animals "Amazed, terrified, huddling together".',
                'The simile "as though the world had turned upside-down".',
                'Structure: the long sentence that builds towards a protest, broken off by the sheep\'s chant "as though at a signal".',
                'The repeated chant, with its stressed "BETTER", and the flat ending: "the chance to utter any protest had passed".',
              ],
            },
          },
          {
            id: 'wjec-p1-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Benjamin felt a nose nuzzling at his shoulder." to the end of the extract.\n\n"By the end of this extract, the pigs have become no different from the humans the animals once rebelled against."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the pigs, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I mostly agree. In the final lines, the pigs take on every sign of human life. They carry "whips in their trotters", buy "a wireless set", plan "to install a telephone", and take out "subscriptions" to magazines and a newspaper. Napoleon strolls in the garden "with a pipe in his mouth", and the pigs even put on "Mr. Jones\'s clothes", with Napoleon\'s favourite sow wearing "the watered silk dress which Mrs. Jones had been used to wearing on Sundays". This shows that they have taken the place of Mr and Mrs Jones.\n\nThe single Commandment shows the change in their thinking: "ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS". The idea of being "MORE EQUAL" makes no sense, which shows how they have twisted the rules to give themselves power. Earlier in the extract they walk "on their hind legs", and Napoleon carries "a whip in his trotter", which makes them look like the men they replaced.\n\nHowever, they are still pigs. Squealer walks "A little awkwardly", and some look as though they need "the support of a stick", so they are imitations rather than real men. Also, the repeated phrase "It did not seem strange" shows that the other animals have accepted the change, which is perhaps even more worrying. So the pigs have become like the humans in almost every way that matters.',
              'Grade 8-9':
                'I largely agree, and the final lines show the change happening in three ways: in the law, in possessions and in the minds of the other animals. But I think the writer suggests that the pigs are something worse than the humans they replace.\n\nThe scene at the barn wall turns the change into law. Clover\'s failing sight, "My sight is failing", and her hesitant question, "Are the Seven Commandments the same as they used to be, Benjamin?", show an old animal who senses the truth but needs it read aloud. Benjamin "For once" breaks his rule and reads it out, which tells us that the moment is grave. The wall now holds "nothing there now except a single Commandment", and its words, "ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS", are set in capitals on separate lines, like a notice. The logic is impossible, "MORE EQUAL" contradicting "EQUAL", and the contradiction is the point: the pigs now rule by a law that means whatever they say it means.\n\nThe last paragraph then lists the possessions of the old masters, under the repeated "It did not seem strange": "whips in their trotters", "a wireless set", "a telephone", magazines and a newspaper, Napoleon "with a pipe in his mouth" and, as the climax, "Mr. Jones\'s clothes". The dash before "no, not even when the pigs took Mr. Jones\'s clothes" marks the final step, and Napoleon\'s favourite sow in "the watered silk dress which Mrs. Jones had been used to wearing on Sundays" completes the replacement of the Joneses. The repetition shows something worse than the pigs\' greed: the animals\' acceptance. Nothing seems strange any more.\n\nAcross the extract, the transformation has been staged. The pigs walk "on their hind legs", Napoleon is "majestically upright" with "a whip in his trotter", and the sheep\'s "Four legs good, two legs BETTER!" silences protest. In all this the pigs have become like the humans. Yet the writer\'s comedy, "a trifle unsteady", "the support of a stick", reminds us that they are imitations, and their power rests on dogs, slogans and a rewritten law. So the pigs have become the humans the animals rebelled against, and the extract suggests that, armed with the language of equality, they may be even harder to resist.',
            },
            markScheme: {
              'How the marks are given': WJEC_P1_Q05_MARKING,
              'Credit, for example': [
                "Agreement: the whips, wireless, telephone, magazines, newspaper and pipe; Mr and Mrs Jones's clothes; the single rewritten Commandment.",
                'Agreement from the whole extract: the pigs on their hind legs, Napoleon with a whip, the silencing chant.',
                'Qualification: the comedy of their unsteadiness shows them as imitations; the other animals\' acceptance ("It did not seem strange") may be the darker point.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-p1-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-p1-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Morning After.\n\n(b) Write about a time when something was left unspoken.\n\n(c) Write a story that begins: "The new girl walked into the classroom and everyone went quiet."\n\n(d) Write a story that ends with these words: "From that day on, things were never quite the same."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (b), a time when something was left unspoken (about 570 words).\n\nFor three weeks my father went to work every morning at eight o'clock, and for three weeks he did not have a job.\n\nI found out on a Wednesday. I was supposed to be at school, but there was a burst pipe in the science block and they sent us home at ten, and I walked back the long way, through the park, because the sun was out and nobody was expecting me. That was when I saw him.\n\nHe was sitting on the bench by the duck pond, in his grey suit and his good shoes, with his briefcase on his knees. He was feeding the ducks. He was doing it very slowly and very carefully, breaking each piece of bread into tiny crumbs, as if it were a job that needed doing well.\n\nI stopped behind the bandstand and watched him. A woman with a pushchair walked past and said good morning, and he said good morning back, in his normal voice. Then he went back to the ducks.\n\nI understood all at once. The suit, the briefcase, the way he had stopped talking about the office at dinner. The way Mum had started buying the cheap cereal and saying it was healthier.\n\nI did not go over to him. I do not know whether that was the right thing. I only knew, in a way I could not have explained, that he did not want me to see him like that, and that if I went over, he would have to pretend, or not pretend, and either would be terrible.\n\nSo I went home the other way, let myself in and sat in my room until four o'clock, when I would normally have come back from school.\n\nHe came home at half past five, as usual. He put his briefcase down in the hall, as usual. He asked me how my day had been.\n\n'Fine,' I said. 'We had a burst pipe.'\n\n'Exciting,' he said, and smiled, and went upstairs to change.\n\nThat evening I made him a cup of tea without being asked, the strong way he likes it, with two sugars, and took it to him in the living room. He looked at me over the top of his newspaper with a surprised expression.\n\n'What's this for?' he said.\n\n'Nothing,' I said. 'Just tea.'\n\nHe held it in both hands for a long time without drinking it.\n\nI made him tea every evening after that. He never asked me why again, and I never told him. In February he got a new job, at a firm on the other side of town, and the cheap cereal disappeared, and he started talking about work at dinner again, about his new manager and the terrible coffee machine.\n\nIt was two years later, on my sixteenth birthday, that he told me. We were washing up, and he said, without looking at me, that there had been a time when he was out of work and too ashamed to say so, and that he used to sit in the park and feed the ducks.\n\n'I know,' I said.\n\nHe stopped drying the plate in his hand and looked at me for a long moment.\n\n'The tea,' he said.\n\n'The tea,' I said.\n\nHe put the plate down and hugged me, with the tea towel still over his shoulder, and neither of us said anything else. We did not need to.",
            },
            markScheme: WJEC_P1_Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 2
  // ═══════════════════════════════════════════════════════════════════════════
  // RESTRUCTURED 24 October 2026 to the paper Eduqas sets (C700U20-1), as
  // src/data/mark-scheme-guides/eduqas-lang-comp2.ts describes it. It set four
  // reading questions worth 5, 10, 10 and 15 and one 40-mark writing task,
  // where Eduqas sets six reading questions worth 3, 10, 3, 10, 4 and 10 and
  // two compulsory writing tasks of 20, so only Question 2's answer found a
  // marker question of its worth. It now sets 1.1 to 1.6 and 2.1 and 2.2
  // (questionNumber 1 to 6, then 1 and 2, with the board's numbers as
  // labels), carries the paper code C700U20-1 in place of C700QS/2, and keeps
  // its two sources, which it shares with AQA Paper 2 above, word for word.
  // No question asks about Source A's unsourced figures. Every quotation in a
  // reading question was checked by script against the extract that question
  // prints. The marking text is the site's own, as in
  // src/data/mock-exams/wjec-c2-a.ts, written out here because this file is
  // shared.
  //
  // CHECKED 31 October 2026 by a second reader, against both sources, the
  // guide and Eduqas's Summer 2025 paper: every reading question, scheme and
  // answer held, and the Mayhew passage is word for word (100%). One fix:
  // Source A said rough sleeping in England "has increased by 169% since
  // 2010", which was the rise to 2017; the official count is now 171% above
  // 2010, so Source A gives the 2010 to 2017 rise and says it has since gone
  // higher (the note above AQA_P2_SOURCE_A has the figures).
  //
  // BOARD WORDING, 31 October 2026, brought into line with
  // src/data/mock-exams/wjec-c2-a.ts and wjec-c2-b.ts: Questions 1.2, 1.5 and
  // 1.6 and the Section B guidance opened with the sentences those files
  // record as Eduqas's own Summer 2025 wording, or near copies ("You should
  // comment on:", "Using details from both texts, explain briefly", "Both of
  // these texts are about", "Aim to write about 300 to 400 words for each
  // task"). All 4 are reworded in the site's own words and ask the same
  // things, and 1.5 now asks which text each detail comes from, as Eduqas's
  // does. Marks, schemes and answers are unchanged.
  {
    id: 'wjec-lang-p2',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p2-reading',
        title: 'Section A: Reading',
        description:
          'Answer all the questions in this section. You are advised to spend about an hour on it: about 10 minutes reading the two texts, then about 50 minutes answering. Questions 1.1 and 1.2 are on Source A, the 21st-century text; Questions 1.3 and 1.4 are on Source B, the 19th-century text; Questions 1.5 and 1.6 are on both.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p2-q1',
            questionNumber: 1,
            label: '1.1',
            questionText: `Read Source A, the 21st-century text, and answer the questions below.\n\n(a) How many people did the writer count sleeping in doorways near Westminster? [1]\n(b) How low did the temperature fall that winter, according to the writer? [1]\n(c) Give one of the ordinary events that, according to the writer, can lead to someone becoming homeless. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: Specially written for The English Hub (not a published text): an opinion article on homelessness | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `(a) Fourteen.\n(b) To minus eight degrees.\n(c) Missing a mortgage payment because of illness.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all. Each answer must come from Source A, the 21st-century text: an answer from Source B earns nothing.',
                "A short phrase is enough, in your own words or the writer's; no explanation is needed.",
              ],
              Answers: [
                '(a) Fourteen.',
                '(b) Minus eight degrees.',
                '(c) Any one of: a mortgage payment missed because of illness; a relationship that broke down; a mental health crisis that went without support.',
              ],
            },
          },
          {
            id: 'wjec-p2-q2',
            questionNumber: 2,
            label: '1.2',
            questionText: `Source A is an opinion article about homelessness. The writer wants to persuade readers to care about homeless people and to see their own part in the problem.\n\nHow does the writer try to do this?\n\nIn your answer, comment on:\n• what the writer says\n• the writer's choice of language and tone\n• how the article is structured, and any other methods the writer uses.\n\n[10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${AQA_P2_SOURCE_A}`,
            extractSource:
              'Specially written for The English Hub (not a published text): an opinion article on homelessness',
            modelAnswers: {
              'Grade 8-9': `The writer opens with personal authority and a bold comparison: "I have walked through the streets of every major city in Europe and I can tell you this". The direct address in "I can tell you this" makes the reader listen, and the claim that "nowhere on this continent" treats homeless people with "such calculated indifference as we do in Britain" is a shocking accusation. The adjective "calculated" suggests that the neglect is deliberate, and the pronoun "we" includes the reader in it from the first sentence.\n\nThe writer then gives an eyewitness example. The detail "while temperatures plummeted to minus eight degrees" makes the cold vivid, and the number is repeated for emphasis: "I counted fourteen people sleeping in doorways ... fourteen human beings". Changing "people" to "human beings" insists on their humanity, and the picture of them "curled under cardboard and sleeping bags" is pitiful. The contrast with "our elected representatives", debating "the finer points of trade policy less than a hundred yards away", is bitterly ironic: the distance is tiny, but the indifference is vast.\n\nThe second paragraph turns to statistics, introduced by the blunt sentence "The statistics are damning." The word "damning" suggests that the figures are evidence in a trial. The writer then turns numbers back into people: "Behind every number is a name, a story". The inclusive phrase "could ... have happened to any one of us" makes the reader feel that homelessness is not something that happens only to others. Three short fragments follow, "The mortgage payment missed because of illness. The relationship that fractured. The mental health crisis that went unsupported.", each an ordinary misfortune the reader can imagine. The paragraph ends on "profoundly, terrifyingly ordinary", in which two adverbs intensify the word "ordinary" so that the familiar becomes frightening.\n\nThe final paragraph turns the accusation on the reader: "And yet we walk past. We avert our eyes." The repeated "We" at the start of short sentences builds a sense of shared guilt. The writer exposes our excuses as "comforting stories about choice and personal responsibility", stories that make us feel better, and explains why we tell them: the truth, that society "has systematically failed hundreds of thousands of its citizens", is "too uncomfortable to contemplate". Ending on our discomfort rather than on the homeless people themselves makes the reader face their own part in the problem.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, but the answer is short and drifts from the question.',
                'Band 2 (3 to 4 marks): some useful details with a little comment on them, but parts of the text are missed.',
                "Band 3 (5 to 6 marks): a fair spread of details, and a start on explaining how the writer's words, tone and structure do their job.",
                'Band 4 (7 to 8 marks): plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through, and subject terms that help.',
                "Band 5 (9 to 10 marks): the whole text covered with sharp, well-explained points, picking apart in detail how the writer's methods work on the reader.",
                'Work through the text in order and use all of it. Quotations should be long enough to make sense, each followed by comment: fragments with no explanation, or techniques listed with no link to the question, earn little.',
              ],
              'Points you might make': [
                `Personal authority and direct address ("I can tell you this"); "calculated indifference" suggests deliberate neglect.`,
                `An eyewitness scene: "fourteen people" become "fourteen human beings"; the irony of representatives "less than a hundred yards away".`,
                `"The statistics are damning." and the turn from numbers to people: "Behind every number is a name, a story".`,
                `The inclusive "any one of us" and three fragments of ordinary misfortune; "profoundly, terrifyingly ordinary".`,
                `The accusing "We" ("we walk past. We avert our eyes") and the exposure of "comforting stories about choice and personal responsibility".`,
              ],
            },
          },
          {
            id: 'wjec-p2-q3',
            questionNumber: 3,
            label: '1.3',
            questionText: `Read Source B, the 19th-century text, and answer the questions below.\n\n(The Asylum for the Houseless Poor was a London charity that gave homeless people bread and a bed for the night in winter. "Livid" means bluish, the colour of a bruise; "vagrant" means homeless and wandering; "the Pharisee in the parable" is a man in a story told by Jesus who thanks God that he is better than other people; "architect of your own fortune" means the maker of your own success.)\n\n(a) From where does the onlooker look down on the crowd? [1]\n(b) Why do some of the crowd tie their coats and trousers with string at the wrists and ankles? [1]\n(c) Give one sound that can be heard from the crowd. [1]`,
            marks: 3,
            suggestedTimeMinutes: 4,
            questionType: 'short-answer',
            extract: `Source B:\n${AQA_P2_SOURCE_B}`,
            extractSource: AQA_P2_SOURCE_B_REF,
            modelAnswers: {
              'Grade 4-5': `(a) From one of the upper windows of the Asylum.\n(b) To stop the cold wind blowing up their clothes.\n(c) Hoarse coughing.`,
            },
            markScheme: {
              'How it is marked (3 marks)': [
                'One mark for each correct answer, 3 marks in all, from Source B, the 19th-century text. An answer from Source A earns nothing.',
                'Show that you have understood the older language by putting it simply: a long passage copied out does not show that.',
              ],
              Answers: [
                '(a) From one of the upper windows of the institution (the Asylum).',
                '(b) To stop the piercing wind blowing up inside their clothes.',
                '(c) Any one of: babies crying; boys squabbling over places at the front; hoarse coughing.',
              ],
            },
          },
          {
            id: 'wjec-p2-q4',
            questionNumber: 4,
            label: '1.4',
            questionText: `Read Source B again.\n\nA student said: ‘Mayhew is more interested in criticising the comfortable onlooker than in describing the homeless.’\n\nHow far do you agree with this view?\n\nIn your answer, give your own view of how Mayhew presents the homeless crowd and the onlooker across the whole text, and explain how his choices of words and details create that view. Support your answer with references to the text. [10]`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'evaluation',
            extract: `Source B:\n${AQA_P2_SOURCE_B}`,
            extractSource: AQA_P2_SOURCE_B_REF,
            modelAnswers: {
              'Grade 8-9': `I partly agree. Mayhew's closing paragraphs are a direct moral challenge to the comfortable onlooker, and they may be his main purpose. But the first half of the passage describes the homeless in such detail that it cannot be dismissed as a mere introduction: it is what gives the challenge its force.\n\nThe passage opens with a judgement: "It is a terrible thing, indeed, to look down upon that squalid crowd from one of the upper windows of the institution." From the start, the focus is partly on the person looking down, but the description that follows concentrates on the crowd. They "stand shivering in the snow, with their thin, cobwebby garments hanging in tatters about them". The adjective "cobwebby" makes their clothes seem as flimsy as a spider's web. The similes are deliberately shocking: bare skin shows through their clothes "like the hide of a dog with the mange", and bare feet are "blue and livid-looking as half-cooked meat". These comparisons make the suffering physical and hard to forget.\n\nThe second paragraph adds sound. It is "a sullenly silent crowd", without "the riot and rude frolic" of other London gatherings, and the only noises are "the squealing of the beggar infants", "the wrangling of the vagrant boys" and "hoarse coughs, that seem to answer each other like the bleating of a flock of sheep". The simile of the sheep suggests helplessness. Up to this point, the passage is almost entirely about the homeless.\n\nAfter the cut, however, Mayhew turns to the onlooker, and his tone becomes satirical. The "self-congratulations and the self-questionings!" of the comfortable are compared to the relief of a healthy man walking through a hospital, and "the well-to-do visitor" is likened to "the Pharisee in the parable", who gives thanks that "he is not as one of these". This biblical reference condemns pride as a sin. Then "the better nature" asks: "By what special virtue of your own are you different from them? How comes it that you are well clothed and well fed, whilst so many go naked and hungry?" The switch to "you" makes the challenge personal, and the final question, "who, let us ask, gave you the genius or energy for the work?", undermines the idea of the self-made man.\n\nSo the statement is half right. The ending shows that Mayhew's purpose is to criticise complacency, but he earns the right to do so through his close, vivid description of the crowd. Without that description, the onlooker's pride would not seem so shameful.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a quick opinion, or a detail or two, with little to back it up.',
                'Band 2 (3 to 4 marks): begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
                'Band 3 (5 to 6 marks): judges the statement properly, using details from across the text and noticing how the language helps.',
                "Band 4 (7 to 8 marks): a clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
                'Band 5 (9 to 10 marks): a detailed argument that convinces, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
                'Reach a judgement and keep to it, tracking the whole of Source B in order. A summary that does not judge holds itself down, and material from Source A earns nothing here.',
              ],
              'Points you might make': [
                `The first half is close description: "stand shivering in the snow"; the similes "like the hide of a dog with the mange" and "blue and livid-looking as half-cooked meat".`,
                `Sound adds to it: "a sullenly silent crowd"; "hoarse coughs, that seem to answer each other like the bleating of a flock of sheep".`,
                `After the cut, satire of the onlooker's "self-congratulations", and "the Pharisee in the parable".`,
                `The challenge of "the better nature", in the second person: "How comes it that you are well clothed and well fed".`,
                'The description gives the challenge its force; a strong answer weighs the two halves and reaches a judgement.',
              ],
            },
          },
          {
            id: 'wjec-p2-q5',
            questionNumber: 5,
            label: '1.5',
            questionText: `Bring together details from both texts to explain briefly how each writer shows homeless people suffering from the cold. Make clear which text each detail comes from. [4]`,
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'summary',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: Specially written for The English Hub (not a published text): an opinion article on homelessness | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5': `In Source A, the writer saw fourteen people "sleeping in doorways" near Westminster when the temperature fell to "minus eight degrees", with only "cardboard and sleeping bags" to cover them. In Source B, Mayhew describes a crowd "shivering in the snow" in thin rags; some have no shirts or shoes, their bare feet are "blue and livid-looking", and they tie their clothes with string against "the piercing wind".`,
            },
            markScheme: {
              'How it is marked (4 marks)': [
                'Band 1 (1 mark): only a little relevant detail, or details from one text only. An answer on one text stays here, however full it is.',
                'Band 2 (2 marks): a relevant detail or two from each text.',
                'Band 3 (3 marks): several relevant details from both texts, brought together sensibly.',
                'Band 4 (4 marks): a good spread of exactly the right details from both texts, brought together clearly.',
                'Make clear which text each detail comes from. The question wants the details, not how they are written: comment on language earns nothing here.',
              ],
              'Details you might bring together': [
                'Source A: people sleeping in doorways at minus eight degrees, curled under cardboard and sleeping bags.',
                'Source B: a crowd waiting in the snow in thin, torn clothes; some without shirts or shoes; feet blue with cold; clothes tied with string against the wind.',
              ],
            },
          },
          {
            id: 'wjec-p2-q6',
            questionNumber: 6,
            label: '1.6',
            questionText: `Source A and Source B are both about homelessness and the way comfortable people respond to it.\n\nCompare:\n• what the writers say about homeless people and those who pass them by\n• how they get their ideas across.\n\nUse evidence from both texts, and make clear which text each point comes from. [10]`,
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'comparison',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: Specially written for The English Hub (not a published text): an opinion article on homelessness | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 8-9': `Both writers are angered by the neglect of homeless people, and both argue that the comfortable have no right to look down on them, but they present this in different ways.\n\nWhat they say about the homeless is similar. The writer of Source A describes "fourteen human beings curled under cardboard and sleeping bags", and Mayhew, in Source B, a crowd that must "stand shivering in the snow" with bare flesh "blue and livid-looking". Both stress that the homeless are ordinary people brought low by circumstance. Source A insists that homelessness could "have happened to any one of us", through events such as "The mortgage payment missed because of illness"; Mayhew's "better nature" asks, "By what special virtue of your own are you different from them?"\n\nBoth also attack the same comfortable story. Source A rejects "comforting stories about choice and personal responsibility"; Mayhew mocks the boast of being the "architect of your own fortune". Each writer turns from the homeless to the onlooker and accuses the reader of looking away: "we walk past. We avert our eyes" (Source A), while Mayhew's visitor gives thanks that "he is not as one of these" (Source B).\n\nTheir methods differ. The writer of Source A uses confrontational modern journalism: a personal claim ("I have walked through the streets of every major city in Europe"), an attack on those in power debating "the finer points of trade policy", statistics introduced as "damning", and short, accusing sentences with the collective "we". Mayhew combines close description with a moral challenge. His similes, the hide "of a dog with the mange" and flesh like "half-cooked meat", make the suffering physical before he turns to the onlooker, and he appeals to religion, comparing the complacent visitor to "the Pharisee in the parable", so that pride itself becomes the sin.\n\nTheir tones differ too. Source A is angry and urgent, and ends on society's guilt: the truth is "too uncomfortable to contemplate". Mayhew's tone moves from pity to satire, and he ends with a question that leaves the reader to answer: "who, let us ask, gave you the genius or energy for the work?"\n\nSo both writers want readers to see the homeless as people like themselves. The modern writer appeals to shame at a public failure, while Mayhew appeals to conscience and humility.`,
            },
            markScheme: {
              'How it is marked (10 marks)': [
                'Band 1 (1 to 2 marks): a detail or two, perhaps from one text only, or with no way to tell which text is meant.',
                'Band 2 (3 to 4 marks): some sound details from both texts, and a first try at saying how the writers get them across.',
                'Band 3 (5 to 6 marks): a fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
                'Band 4 (7 to 8 marks): details from both texts examined properly, with detailed comment on the methods each writer uses.',
                "Band 5 (9 to 10 marks): both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
                'Both halves of the question count: what the writers say, and how they get it across. Draw links between the texts, and always make clear which text you mean.',
              ],
              'Points you might make': [
                'Both show ordinary people brought low by circumstance, and both deny that the comfortable are better than them.',
                `Both attack the comfortable story: "choice and personal responsibility" (Source A); the "architect of your own fortune" (Source B).`,
                'Both accuse the onlooker: those who "walk past" (Source A); the self-congratulating visitor (Source B).',
                'Methods: personal claims, statistics and short accusing sentences (Source A); vivid similes, then satire and a biblical comparison (Source B).',
                'Tone: angry and urgent (Source A); pity turning to satire, ending on a question (Source B).',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-p2-writing',
        title: 'Section B: Writing',
        description:
          'Answer both questions in this section. You are advised to spend about 30 minutes on each: about 5 minutes planning and about 25 minutes writing. Each is worth 20 marks: 12 for communication and organisation, and 8 for writing accurately. Each piece should be about 300 to 400 words long.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p2-q7',
            questionNumber: 1,
            label: '2.1',
            questionText: `Your school magazine is running a series called Making a Difference.\n\nWrite an article for the magazine about how young people can make a positive difference in their communities. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `You are never too young to make a difference\n\nWhen people talk about changing the world, they usually mean politicians, business leaders or famous campaigners. Most of us are fourteen or fifteen, with homework, part-time jobs and very little money. What could we possibly change? More than you might think, as long as we start close to home.\n\nTake the food bank in town. Last winter, our form collected tins and packets every Friday for a month. It took each of us a few minutes and a few coins, and by Christmas we had filled the back of a car. The volunteers told us that our donation fed several families for a week. Nobody in our form became famous, but some families had a warmer Christmas because of us.\n\nTime can matter even more than money. Many older people in our community live alone, and a visit or a phone call can be the highlight of their week. Several students in Year 10 now help at the lunch club in the community centre on Saturdays, serving tea and playing board games. They say that they get as much from it as the people they help: stories about the town during the war, tips on baking, and a good deal of laughter.\n\nYou do not have to join an organisation to help. You can pick up litter on your way to school, offer to walk a neighbour's dog, or make sure that the new student in your class has someone to sit with at lunch. Small acts of kindness spread. When people see someone helping, they are more likely to help too.\n\nAnd you can use your voice. Young people have campaigned for safer roads, cleaner parks and better facilities for teenagers, and won. Writing a polite, well-argued letter to the council, or speaking up at a school council meeting, can achieve more than you expect.\n\nMaking a difference does not mean doing everything. It means doing something. So this week, choose one small way to help someone in your community. You may find that it changes you as much as it changes them.`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a magazine article: a headline, an engaging opening, and paragraphs that each develop one idea.',
                'An encouraging, lively tone that suits fellow students.',
                'Practical, varied examples, each developed with reasons and detail.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
          {
            id: 'wjec-p2-q8',
            questionNumber: 2,
            label: '2.2',
            questionText: `Your local council is deciding whether to spend more money on helping people who are homeless in your area.\n\nWrite a letter to the council giving your views. [20]`,
            marks: 20,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 8-9': `Dear Councillors,\n\nI am writing to urge you to spend more money on helping people who are homeless in our town. I know that the council's budget is under great pressure and that every decision involves difficult choices. But I believe that this is one of the most important choices you will make this year.\n\nEvery morning on my way to school, I pass people sleeping in the doorways of empty shops on the high street. Some of them are not much older than I am. On the coldest mornings, I have seen people wrapped in nothing more than a thin blanket. It is hard to believe that this is happening in a town as prosperous as ours, and harder still to walk past and do nothing.\n\nHomelessness is rarely the result of one bad decision. People lose their homes because they lose a job, because a family breaks down, or because they fall ill and cannot pay the rent. Any of us could face one of those misfortunes. What matters is whether there is help available when it happens.\n\nSpending money on homelessness is not only the right thing to do; it is also sensible. People who sleep on the streets are more likely to become seriously ill, and so to need emergency care in hospital. Helping someone into a safe home, with support to find work, costs less in the long run than leaving them to struggle. It also makes our town centre safer and more welcoming for everyone.\n\nI would ask the council to consider three steps: providing more emergency beds during the winter months; working with local charities to offer advice on housing, health and employment; and helping people to keep their homes before they lose them, through advice on rent and debt. Many residents, including students at my school, would be glad to volunteer.\n\nHow we treat the people with the least says a great deal about our community. I hope that you will choose to help them.\n\nYours faithfully,\n\nNia Roberts`,
            },
            markScheme: {
              'How it is marked (20 marks)': [
                'Two marks are given and added together: up to 12 for communication and organisation (AO5) and up to 8 for writing accurately (AO6), each found on its own scale.',
                'Band 1 (AO5 1 to 2, AO6 1): some idea of the form and the reader, but little to say and ideas in a simple order; sentences mostly alike, and errors frequent.',
                'Band 2 (AO5 3 to 4, AO6 2 to 3): aware of the purpose and the reader, with a few reasons and paragraphs, though the points are not developed; sentences vary a little and most spelling is right.',
                'Band 3 (AO5 5 to 7, AO6 4 to 5): fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
                'Band 4 (AO5 8 to 10, AO6 6 to 7): right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences varied for effect, and errors rare.',
                'Band 5 (AO5 11 to 12, AO6 8): ambitious, polished writing, with a tone exactly right for the reader, ideas developed in depth so that they persuade, and accuracy close to faultless, with a wide, precise vocabulary.',
              ],
              'What earns marks in this task': [
                'The features of a formal letter: a greeting, an opening that states your purpose, clear paragraphs and a suitable sign-off.',
                'A formal, respectful tone for councillors, compassionate but reasoned.',
                'A clear view, developed with reasons and examples, and practical suggestions.',
                'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
              ],
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 02
  // ═══════════════════════════════════════════════════════════════════════════
  // Set as OCR's J351/02 since 31 October 2026
  // (src/data/mark-scheme-guides/ocr-lang-component02.ts). Until then it printed
  // one passage, the opening of Great Expectations (AQA_P1_EXTRACT): an 1861
  // novel, where this component sets only 20th and 21st-century prose. Its
  // questions were worth 4, 12, 8 and 16, with a writing task said to be marked
  // 32 for content and 8 for accuracy, and its Question 3 asked about structure
  // alone; an answer sent to the marker found no question of its worth. It now
  // sets OCR's Questions 1 to 4 (4, 6, 12 and 18 marks) on two texts, then
  // Question 5 or 6 (40: 24 for content and organisation, 16 for accuracy), an
  // hour a section. Text 1 is Fitzgerald, cut from the held Great Gatsby. Text 2
  // was written for this paper: Question 4 compares two writers, so a second
  // Fitzgerald passage would not do, and the only other 20th-century prose the
  // site holds, Animal Farm, is one of OCR's own Literature set texts, where
  // OCR's Language texts are unseen.
  //
  // CHECKED 31 October 2026 by a second reader, against both texts, the novel
  // and the guide. What was wrong, and what changed:
  // - Questions 2, 3 and 4 used OCR's own rubric sentences ("How far do you
  //   agree with this statement?", "In your answer you should:", and its Question
  //   3 instruction with words added); each is now in this site's words.
  // - The Section A note said Tom, Daisy, Jordan and Gatsby all grew up in the
  //   Middle West; Daisy and Jordan come from Louisville, and Nick calls them all
  //   Westerners. It now says they came to the East from the West.
  // - Question 3 answer: "Something in her chest loosened" was called a paradox;
  //   it is a realisation, and now says so.
  // - Question 4 answer: the invitations of Text 1 were said to "mark the way
  //   home" like Amira's road signs; they are the families' Christmas parties.
  // - Question 4 answer: Amira's relief came "as the coach arrives"; it comes as
  //   the city comes into view, before the coach station.
  // - Question 4 answer and scheme: Text 2 was told "in the present"; it is in
  //   the past tense, within a single night, and now says that.
  {
    id: 'ocr-lang-p2',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from the end of The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, has spent a summer in the East, near New York, with Tom, Daisy, Jordan and his neighbour Gatsby, who, like him, all came to the East from the West of America. Here he remembers travelling home at Christmas when he was young.\n\nText 2 is a story specially written for this practice paper. Amira, a student, is travelling home by coach at Christmas after her first term at university.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "One of my most vivid memories" to "the tracks beside the gate."\n\n(a) Where did the travellers gather on a December evening? [1]\n\n(b) Give two things Nick remembers about the people at the station. [2]\n\n(c) What does Nick say the yellow railway cars looked as cheerful as? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${OCR_P2_TEXT_1}\n\nText 2:\n${OCR_P2_TEXT_2}`,
            extractSource: `Text 1: ${OCR_P2_TEXT_1_REF} | Text 2: ${OCR_P2_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "(a) In the old, dim Union Street station, at six o'clock.\n(b) Any two of: the girls' fur coats; the chatter of frozen breath; hands waving overhead as they saw old acquaintances; everyone matching invitations to parties; the long green tickets held tight in gloved hands.\n(c) Christmas itself.",
            },
            markScheme: [
              '(a) 1 mark: the (old, dim) Union Street station.',
              '(b) 1 mark for each of two of: "the fur coats of the girls"; "the chatter of frozen breath"; "the hands waving overhead"; "the matchings of invitations"; "the long green tickets clasped tight in our gloved hands".',
              '(c) 1 mark: "Christmas itself".',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last two paragraphs of Text 1, from "When we pulled out" to the end.\n\nHow does the writer use language and structure to show what the Middle West means to Nick?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: OCR_P2_TEXT_1,
            extractSource: OCR_P2_TEXT_1_REF,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald shows that the Middle West means a feeling rather than a landscape. The first of these paragraphs carries the journey into the night in one long sentence joined by "and": the snow "began to stretch out beside us and twinkle against the windows", and "the dim lights of small Wisconsin stations moved by", before the climax, "a sharp wild brace came suddenly into the air". The correction "the real snow, our snow" shows his sense of belonging, as if even the weather were his. The phrase "unutterably aware of our identity with this country for one strange hour" makes the feeling intense but brief, and "before we melted indistinguishably into it again" uses the image of melting snow to show the young travellers becoming part of the place.\n\nThe last paragraph opens with a direct statement, "That\'s my Middle West", and then defines it by contrast: "not the wheat or the prairies or the lost Swede towns, but the thrilling returning trains of my youth". The rejection of the obvious, geographical answer shows that home is made of memories, and the list that follows, "the street lamps and sleigh bells in the frosty dark and the shadows of holly wreaths", is full of light and sound. The short declaration "I am part of that" is the emotional centre. The paragraph then turns reflective with the balanced phrases "a little solemn" and "a little complacent", and Nick\'s realisation that "this has been a story of the West, after all" shows him understanding his whole summer through the place he came from.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the long sentence that carries the train into the night, the possessive "our snow", and the brief, intense feeling of "one strange hour".',
                'Comment on the definition by contrast, "not the wheat or the prairies", and on the list of lights and sounds that follows.',
                'Comment on the declaration "I am part of that" and the balanced "a little solemn" and "a little complacent".',
                'Structure: from the journey to a definition of home, ending on the realisation that "this has been a story of the West".',
              ],
              'Levels (6 marks, one mark a level)': OCR_P2_LEVELS.q2,
            },
          },
          {
            id: 'ocr-p2-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Amira's feelings during her journey home.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: OCR_P2_TEXT_2,
            extractSource: OCR_P2_TEXT_2_REF,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Amira\'s journey as a gradual return to feelings she has tried to keep at a distance, and the structure follows the coach from the anonymous darkness of the motorway to the warmth of arrival.\n\nThe second paragraph opens with a short, emphatic sentence, "Amira was not.", which sets her apart from the sleeping passengers and suggests that she is too full of thought to rest. The list in which London unravels, "the tower blocks thinning into warehouses, the warehouses into fields, the fields into a darkness", repeats each noun at the start of the next phrase, so the city seems to dissolve step by step. When the window gives "her back only her own face", the journey turns inward. The repeated "It looked" in two short sentences shows her studying a new, more confident self, "someone who knew where she was going", though the reader may suspect that the confidence is partly a performance.\n\nThe third paragraph uses gentle, soothing imagery. The simile "like small, bright islands" turns service stations into places of safety in the dark, and the personification of the coach that "sighed back on to the road" makes the journey feel weary and patient. The tune that Amira "almost recognised" is a quiet hint that something familiar is waiting for her.\n\nThe fourth paragraph shows her resisting her feelings. The plain statements "She had told herself she would not be sentimental" and "She had a life" sound like arguments she is having with herself. The turn on "But" reveals her true state, and the minor sentences "Doncaster. Wetherby. Scotch Corner." slow the pace to the rhythm of the road signs. The simile "like stepping stones across a river" makes each place a step towards home.\n\nThe fifth paragraph is the most visual. The snow "turned gold in the headlights", and "the motorway hushed beneath it", so the weather seems to soften the world for her arrival. The view from the hill is a list of landmarks, "the bridges strung across the river, the dark tower of the cathedral", ending in the simile of cranes "like patient herons", which makes the city seem to have been waiting.\n\nThe single-sentence sixth paragraph, "Something in her chest loosened that she had not known was tight.", is the emotional turning point. Setting it apart gives it weight, and the realisation that she had been tense without knowing it shows how much she had hidden from herself.\n\nThe ending moves from the city to one person. Her father\'s actions are ordinary and loving: he "did not say anything clever" but "wound the scarf round her neck, the way he had when she was six". The final paragraph rejects the obvious answers, "Not because of the city, or the snow", and places home in "the scarf, still warm from his pocket", so the text closes on the idea that home is a person and a gesture rather than a place.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of how the opening sets Amira apart ("Amira was not.") and how the list of London unravelling turns the journey inward to "her own face".',
                'Comment on the soothing imagery of the road ("like small, bright islands", the coach that "sighed") and on the resistance in "She had told herself she would not be sentimental".',
                'Comment on the minor sentences of the road signs, the snow that "turned gold", and the city of cranes "like patient herons".',
                'Structure: the single-sentence turning point ("Something in her chest loosened"), then the ending that places home in a person and a gesture.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': OCR_P2_LEVELS.q3,
            },
          },
          {
            id: 'ocr-p2-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show that home is a feeling rather than a place.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of what home means to Nick and to Amira\n- explain the effect the two texts have on you as a reader\n- compare how the two writers present journeys home\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${OCR_P2_TEXT_1}\n\nText 2:\n${OCR_P2_TEXT_2}`,
            extractSource: `Text 1: ${OCR_P2_TEXT_1_REF} | Text 2: ${OCR_P2_TEXT_2_REF}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree with the statement. Both writers deliberately reject the idea that home is simply a location, though Nick finds home in memories of a whole region and a way of life, while Amira finds it in a single person.\n\nIn Text 1, Nick defines his Middle West by what it is not: "not the wheat or the prairies or the lost Swede towns". Instead, it is "the thrilling returning trains of my youth", a set of sensations rather than a map. His memories are full of feeling: "the chatter of frozen breath", "the long green tickets clasped tight in our gloved hands", and the snow that he calls "the real snow, our snow". The possessive "our" shows belonging, and the moment when the travellers are "unutterably aware of our identity with this country for one strange hour" makes home an experience felt in the body. His declaration, "I am part of that", turns home into part of his identity. Yet there is also a place in his memories, "the Carraway house in a city where dwellings are still called through decades by a family\'s name", so for Nick home is a feeling rooted in a particular community.\n\nIn Text 2, Amira\'s feeling of home grows as she nears the city, but the writer is clear that the place is not the point. As the city comes into view, "Something in her chest loosened that she had not known was tight", which shows that home is first of all a physical, emotional release. The final paragraph rejects the obvious answers, "Not because of the city, or the snow, or even the house", and places home in her father\'s gesture and "the way he said it, as if it had never been in doubt". The words "You\'re home, pet" make home something given to her by someone who loves her.\n\nThe writers\' methods are similar in many ways. Both describe winter journeys through snow and darkness: Fitzgerald\'s snow begins to "twinkle against the windows", and the snow of Text 2 "turned gold in the headlights". Both use lists of names: the families whose Christmas invitations Nick and his friends compare, "the Ordways\'? the Herseys\'? the Schultzes\'?", and the road signs that mark Amira\'s way home, "Doncaster. Wetherby. Scotch Corner." Both set light against the dark, in "the shadows of holly wreaths thrown by lighted windows on the snow" and in city lights "scattered like a handful of coins". However, Fitzgerald writes as an adult looking back, in long, reflective sentences that end in a judgement about the whole novel, while the writer of Text 2 stays within a single night and ends on a small, intimate moment.\n\nOverall, I agree. Both texts show that home is felt rather than found on a map. Nick\'s home is a shared memory and an identity, which leaves him "a little solemn" and "a little complacent", while Amira\'s is a person waiting with a scarf. For me Text 2 makes the point more movingly, because it ends with a single, simple act of love, but Text 1 shows more fully how the places we come from stay inside us.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: a Middle West defined by memories rather than geography ("not the wheat or the prairies"), felt in the body and part of Nick\'s identity, yet rooted in a family and a city.',
                "Text 2: a feeling that grows as the city nears, then is placed in a father's gesture rather than the city, the snow or the house.",
                'Comparison of methods: winter journeys, lists of names and light against dark in both; an adult looking back in long, reflective sentences against a single night of travel, told as it unfolds.',
                'Quotations from both texts, built into the argument. Evaluation and comparison may be woven together all the way through.',
              ],
              'Evaluation (AO4, 12 marks, two marks a level)': OCR_P2_LEVELS.ao4,
              'Comparison (AO3, 6 marks, one mark a level)': OCR_P2_LEVELS.ao3,
              Marking: ['The two grids are marked separately and the marks added, out of 18.'],
            },
          },
        ],
      },
      {
        id: 'ocr-p2-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Journey Home'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- describe the journey and the places along the way\n- end with an arrival, or with a moment of realisation.\n\nOR\n\nQuestion 6\nWrite about a place that feels like home to you.\n\nIn your writing you could:\n- describe the place, its sounds and smells, and the people in it\n- explain why it feels like home\n- reflect on whether home is a place, a person or a feeling.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nIf you asked me where home is, I would not say our flat. I would say the back room of my mum's shop.\n\nThe shop is on the corner of Albert Road, squeezed between a launderette and a barber's, and from the front it looks like every other corner shop in the country: buckets of flowers by the door, a sign for the lottery, newspapers in a wire rack that rattles when the buses go past. But behind the counter there is a door with a bead curtain, and behind the bead curtain is a room about the size of a large wardrobe, and that is where I grew up.\n\nIt has a kettle, a fridge that hums in a low, comforting voice, a calendar from a cash-and-carry that is always on the wrong month, and two plastic chairs. One of the chairs has a crack in the seat that pinches if you sit on it carelessly. The other has been mine since I was old enough to climb on to it. The room smells of cardamom from Mum's tea, of cardboard from the deliveries, and of the sweet, slightly burnt bread that arrives every morning at six.\n\nI did my homework in that room for ten years. I learned my times tables there, chanting them over the noise of the till. I read every book in the school library at that little table, while customers came and went on the other side of the beads: the builder who bought the same chocolate bar every morning, the old lady who paid in coins she had counted out at home, the boys from the high school who pretended not to know me when their friends were around. I could tell who it was just from their voices, and from Mum's voice changing for each of them, brisk with the builder, gentle with the old lady, patient with the boys.\n\nWhat makes it home is not the room itself. It is far too small, and far too cold in winter. It is the way the bead curtain clicks when Mum comes through with two cups of tea. It is the way she rests her hand on the top of my head for a second as she passes, without saying anything, the way you might touch a lucky charm. It is the radio murmuring in the language my grandmother spoke, turned low so that customers will not hear. It is knowing that, whatever has happened at school, whatever anyone has said, I can push through those beads and sit on my chair and be exactly who I am.\n\nWe might move next year. Mum has been talking about selling the shop, and I understand why. She has worked there seven days a week for as long as I have been alive. She deserves a rest.\n\nBut I have been thinking about it a lot, and I have decided something. If the shop goes, I will not lose my home. I will lose a room, which is sad, and I will miss the fridge's hum and the bread at six. But home was never the room. It was the tea, and the hand on my head, and the voice that changed for every customer and never changed for me. Wherever we go, I think we will take that with us.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, a journey told through precise detail, and an ending of arrival or realisation.',
                'Question 6: a personal account that brings the place and its people to life, explains why it feels like home, and reflects on what home really is.',
                'Either task: a deliberate shape, varied sentences and vocabulary chosen for effect, and accurate spelling and punctuation, including the punctuation of any speech.',
              ],
              'Content and organisation (AO5, 24 marks)': OCR_P2_LEVELS.ao5,
              'Technical accuracy (AO6, 16 marks)': OCR_P2_LEVELS.ao6,
              Marking: ['The two grids are marked separately and the marks added, out of 40.'],
            },
          },
        ],
      },
    ],
  },
]
