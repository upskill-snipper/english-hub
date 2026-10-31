// @ts-nocheck

/**
 * OCR GCSE English Language Component 02, Exploring effects and impact
 * (J351/02): five mock papers, ocr-p2-06 to ocr-p2-10, each built on a
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
 * Since 31 October 2026 scripts/check-mock-exam-extracts.mjs knows the novel
 * and checks each Fitzgerald passage against the held text: all five match it
 * in full. (Until then it had no entry for Gatsby and could not check them.)
 *
 * SECOND READING, 31 October 2026, by a checker who did not write the papers,
 * against the two texts each paper prints, the novel, the guide and the
 * marker's scheme. Every quotation of any length was checked by script
 * against the text its question prints. Fixed:
 * - P6 Q1(b): credited a "loud, bright night" as a sound; it names none, so
 *   only the two sounds in the lines now earn marks.
 * - P6 Q3: "The last paragraph brings the two sides together in one
 *   sentence" (it has two); now "The final sentence".
 * - P6 Q4: Gatsby called "a character alone among others", though he is alone
 *   on an empty lawn; answer and mark scheme rewritten.
 * - P7 Q4: both texts said to warn against "judging by the surface"; the
 *   father's advice is about others' advantages, so now "judging too quickly".
 * - P8 Q1(a): "before he speaks" excluded its own answer (his unfinished
 *   sentences are speech); now "before he asks Nick's opinion of him".
 * - P8 Q1(c): a muddled note on "San Francisco"; it now says plainly that it
 *   is one of Gatsby's claims and earns the mark.
 * - P8 Q2: Nick reads the inscriptions "aloud" (the text does not say so) and
 *   "laughed at" the clichés (he restrains his laughter); both corrected, in
 *   the mark scheme too.
 * - P8 Q4: "Then it was all true," closed on a comma the text does not have
 *   (it has a full stop); the comma now sits outside.
 * - P8 Q4: Nick as Gatsby's "companion who sees less" did not hold; the
 *   comparison is now Adeyemi beside Vasik against no one checking Nick.
 * - P9 Q1(a): the reporter's connection was one he "did not fully
 *   understand"; the text says he either would not reveal it or did not.
 * - P10 Q3: a quotation stood alone as a sentence with no main verb; the
 *   sentence now has one.
 * - P10 Q4 and its mark scheme: Gatsby "tells this story because" and "a
 *   memory Gatsby wanted to recover"; Nick only "gathered" it, and what
 *   Gatsby wants back is "some idea of himself". Both reworded.
 * - This docblock said the extract check could not verify the Gatsby
 *   passages; corrected above.
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
 * - Q5 and Q6, 31 October 2026: P10's "describe the setting and the light
 *   closely" (OCR's "describe the setting", words added) and "reflect on how
 *   you feel about it now" (OCR's June 2024 "how you feel about that time
 *   now") are now "bring the place and its light to life in close detail"
 *   and "reflect on what you feel when you look back on it". Left as
 *   ocr-p2-c.ts has them, for one decision across the bank: "In your writing
 *   you could:" (OCR has "should") and "choose a narrator and a clear point
 *   of view".
 *
 * The notes below, from 26 and 27 September 2026, describe the model answers
 * these papers printed until 31 October 2026. Those answers have been
 * replaced; the five passages they checked are each paper's Text 2 now,
 * unchanged.
 */

/**
 * OCR GCSE English Language Component 02, Exploring Effects and Impact
 * (J351/02): five mock papers, Exams 06 to 10, each built on a specially
 * written extract. Live: served through allMockExamPapers.
 *
 * WHAT WAS WRONG (audit of 26 September 2026). None of the five extracts is
 * by a real author: all five were written for these papers and say so, so
 * there was no attribution to correct and no genuine text to restore. The
 * fault was in the model answers. scripts/check-mock-exam-extracts.mjs
 * flagged three quotations of four words or more; checking every quotation
 * of any length found nine that were not the extract's words. Four changed
 * the wording: "that had not moved once" (the extract has "which had not
 * moved once since she sat down"), "extraordinarily ordinary" (for "a face
 * of extraordinary ordinariness"), "like a stage set" (for "in the way that
 * a stage set is immaculate") and "burning carefully" (for "Someone burned
 * something very carefully"). "written in ink that changed colour" was a
 * silent cut of "an", and "read" was a scare quote of a word the extract
 * never uses. The Exam 09 Q4 Grade 6-7 answer had a drafting slip
 * left in a live model answer: it quoted "behind the noise-screen", which is
 * Exam 06's extract, and then said, in the answer itself, "wait, that's the
 * wrong extract". It also set the question's own words, real and truthful,
 * in quotation marks as though the extract used them. A model answer is
 * where a student learns what accurate quotation looks like, so every
 * quotation is now the extract's words, whole, with no silent cuts.
 *
 * The analysis around each quotation was reread against the extract and
 * corrected where it said what the extract does not: an Exam 10 answer had
 * the writer returning "to the knitting and the window throughout" (the
 * window appears once, in the first sentence, and the knitting comes back
 * only in the last paragraph); an Exam 10 answer called "Perhaps he was
 * right" a rhetorical question; an Exam 09 answer gave the opening
 * sentence's calm to Ernesto (it is the narrator's "nobody ... thought it
 * especially remarkable"); an Exam 06 answer had the city "scrubbed clean"
 * of individuality (the extract says "of memory") and treated Maren's age as
 * twenty-seven (the extract never gives it); an Exam 08 answer turned
 * Vasik's unspoken thought about Adeyemi into a spoken dismissal.
 * "Judgment" in the Exam 07 answers now matches the mark scheme's
 * "judgement".
 *
 * A second review the same day found claims the first pass left standing.
 * The Exam 09 Q4 Grade 6-7 answer said the impossible events were given
 * "more sensory and emotional specificity" than any ordinary one, in scare
 * quotes round "ordinary"; the square oranges and the shadows get one plain
 * sentence each, while the baking gets flour-dusted hands, so the claim was
 * the reverse of the text. It now makes the point the extract does support:
 * the impossible is reported in the same flat sentences as the everyday. The
 * Exam 08 Q3 Grade 4-5 answer praised a "short final sentence"; the last
 * sentence is twelve words and longer than the one before it, which is the
 * short one it now quotes. The Exam 08 Q4 Grade 4-5 answer said "the
 * evidence" had been "erased"; the extract says the scent had. The Exam 10
 * Q4 Grade 4-5 answer said Mr Ramsay "dismisses" his wife; the extract says
 * he "despised her for it". Three quotations closed on a full stop inside
 * the marks where the extract's sentence runs on ("eyes forward", "any wife
 * in any market town", "nothing, and everything"); the stop now sits
 * outside, so no quotation claims to end a sentence it does not end.
 *
 * Exam 10's label now says what its passage borrows. It is written after
 * Virginia Woolf's To the Lighthouse (1927) and uses her Ramsays and two
 * lines of her dialogue ("It won't be fine" and "But it may be fine - I
 * expect it will be fine"); checked against the Project Gutenberg Australia
 * text (0100101), none of its twenty sentences is Woolf's, and the longest
 * run of words it shares with the novel is her line of eleven. The old label,
 * "after Virginia Woolf", left a student free to take the whole passage for
 * hers. Woolf died in 1941, so the novel is out of UK copyright and the
 * borrowing needs no licence.
 */

import type { MockExamPaper } from './types'

// ─── Text 2 of each paper: passages written for this site ───────────────────
// Kept word for word from the papers as they were before 31 October 2026.

const EXTRACT_06 = `The city had been scrubbed clean of memory. Where once there had been bookshops and cafés with hand-lettered signs, there were now grey-panelled Distribution Centres, each one identical, each one humming with the low electrical drone that Maren had learned to stop hearing years ago. The citizens moved through the streets in their regulation coats, eyes forward, steps measured, and if they remembered a time before the Consolidation, they gave no outward sign.

Maren paused at the corner of what had once been Lindenstrasse. She knew this because her grandmother had told her, in whispered sessions behind the noise-screen in the bathroom, stories of a world where streets had names that meant something - where a linden tree had actually grown, where people had sat beneath it and talked about whatever they wished. The idea was almost impossible to hold in her mind. Talking about whatever you wished. The words arranged themselves into a grammatically correct sentence but refused to become real.

She reached into her pocket and closed her fingers around the object. It was no larger than a matchbox, smooth on one side, ridged on the other, and warm - always warm, as though it contained a tiny, patient engine. She did not know what it was. She had found it three days ago in the rubble of a demolished building on the eastern perimeter, and since then her dreams had changed. They were full of colour now - blues and greens she had no names for - and in them, people spoke freely, laughed without checking over their shoulders, and touched each other with an ease that made her wake up weeping.

The object pulsed gently against her palm. Maren walked on, her face as blank as every other face on the street, while inside her chest something that had been sleeping for twenty-seven years began, tentatively, to stir.`

const EXTRACT_06_SOURCE =
  'Specially written for this practice paper: an original dystopian story, not from a published book'

const EXTRACT_07 = `The trial of Martha Hallingham began on a Tuesday, which the newspapers would later note was the same day of the week on which her husband had disappeared. The courtroom was packed to the upper gallery, and those who could not secure a seat pressed themselves against the windows in the corridor outside, craning for a glimpse of the woman who had, according to the prosecution, poisoned the most respected physician in Ashford with a compound of arsenic dissolved in barley water.

Martha herself sat perfectly upright in the dock, her hands folded in her lap. She wore a dress of dark grey wool - modest, well-made, the kind of dress that spoke of careful economy rather than poverty. Her hair was pinned beneath a bonnet of black crepe, and her expression was one of composed attentiveness, as though she were watching a sermon rather than fighting for her life.

The murmuring crowd studied her and found nothing to satisfy their appetite. They had come expecting a monster, or at the very least a woman undone by guilt, and instead they found this: a face of extraordinary ordinariness. Pale skin, unremarkable features, a mouth that was neither cruel nor kind. She could have been any wife in any market town in England, and perhaps that was the most unsettling thing of all.

Mr Justice Cavendish adjusted his spectacles and addressed the jury. "Gentlemen," he said, "you will hear evidence of a most particular and disturbing character. I urge you to attend to the facts and to the facts alone. The character of the accused, her demeanour, her appearance - these are not evidence. Only the testimony of witnesses and the findings of science may guide your deliberations."

But the jury were already watching Martha's hands, which had not moved once since she sat down, and wondering what those still, patient fingers had stirred into the barley water on the morning of the fourteenth of March.`

const EXTRACT_07_SOURCE =
  'Specially written for this practice paper: an original story set at an imaginary Victorian trial, not from a published book or a real case'

const EXTRACT_08 = `Inspector Lena Vasik had seen enough crime scenes to know that the absence of evidence was itself a kind of evidence. The flat on Ravenscourt Terrace was immaculate. Not merely tidy - immaculate, in the way that a stage set is immaculate: everything chosen, everything placed, everything designed to communicate a specific message. The books on the shelf were arranged by colour. The single orchid on the windowsill had been watered that morning. The bed was made with hospital corners so precise they could have been measured with a set square.

And in the centre of the living room, on a rug that had been recently vacuumed, there was a perfect circle of ash, approximately eighteen inches in diameter, containing nothing at all.

"Someone burned something," said Constable Adeyemi, which Vasik felt was a contribution of limited analytical value.

"Someone burned something very carefully," she corrected. "Look at the rug. No scorch marks. No discolouration beyond the ash itself. Whatever was burned here was burned in a container - a metal bowl, probably - and then the container was removed. What we're looking at isn't the fire. It's the ghost of the fire."

She crouched beside the circle and inhaled. Nothing. Not the acrid smell of burned paper, not the chemical tang of burned plastic, not the sweet heaviness of burned fabric. Whatever had been destroyed, it had been destroyed so completely that even its scent had been erased.

The flat belonged to Dr Yusuf Okonkwo, lecturer in applied mathematics at the university, reported missing by his department secretary after he failed to attend three consecutive lectures without explanation. His colleagues described him as meticulous, private, and unfailingly punctual. A man of absolute routine. Which made his disappearance, and the ceremonial neatness of his empty flat, all the more disturbing.

Vasik stood up and looked at the circle of ash again. It occurred to her that she was not looking at a crime scene. She was looking at a message. And the message was: I have left nothing for you to find.`

const EXTRACT_08_SOURCE =
  'Specially written for this practice paper: an original crime story, not from a published book'

const EXTRACT_09 = `On the morning that the river began to flow uphill, nobody in the town of San Isidro thought it especially remarkable. The baker, Ernesto Delgado, noticed it first when he went down to fill his bucket at six o'clock and found the water moving south instead of north, climbing the gentle gradient towards the church with a quiet, unhurried determination, as though it had simply decided that the sea was no longer to its liking and wished to try the mountains instead.

Ernesto watched for a full minute, then shrugged and filled his bucket. The water tasted the same. He carried it back to the bakery, mixed his dough, and shaped the morning's loaves with flour-dusted hands that trembled only slightly. In San Isidro, one learned not to remark upon things that defied explanation. There had been the year the oranges grew square. There had been the week when everyone's shadow pointed in the wrong direction. There had been Catalina Espinoza's baby, born with eyes the colour of opals, who had spoken in complete sentences from the age of three days and then, abruptly, at six months, stopped speaking entirely and never uttered another word.

These things happened. They happened in the way that rain happened, or drought, or the slow death of a marriage - not because anyone wished them to, but because San Isidro existed in a fold of the world where the ordinary rules applied only loosely, like a shirt buttoned in the wrong holes. The town's single doctor, a weary man named Ferreira who had been educated in Lisbon and regretted it daily, had long ago abandoned the attempt to find medical explanations for his patients' complaints. When old Señora Vidal came to him reporting that her deceased husband was sitting in his usual chair each evening, reading the newspaper and complaining about the government, Ferreira simply prescribed camomile tea and suggested she set an extra place at dinner.

The river flowed uphill for nine days. On the tenth morning it resumed its natural course, and with it carried a small wooden box that lodged itself against the bridge supports. Inside the box was a letter, written in an ink that changed colour as you read it, addressed to no one and signed by everyone.`

const EXTRACT_09_SOURCE =
  'Specially written for this practice paper: an original magical realist story, not from a published book'

const EXTRACT_10 = `Mrs Ramsay sat by the window, knitting. The needles clicked softly, rhythmically, a sound that had become so much a part of the house that the children no longer heard it, just as they no longer heard the sea or the tick of the grandfather clock in the hall. She was knitting a stocking for the lighthouse keeper's boy, though whether they would go to the lighthouse tomorrow was still, as it had been all day, a matter of painful uncertainty.

Her husband had said no. He had said it firmly and with that particular precision of cruelty that he reserved for the destruction of hope. "It won't be fine," he had said, studying the barometer with the attention he usually gave to philosophical problems. And the boy - her youngest, her most sensitive, the one whose face registered every shift in the emotional weather of the house - had looked at her with such anguished expectation that she had felt the words forming before she could stop them: "But it may be fine - I expect it will be fine."

She knew it was a lie, or at least an exaggeration, and she knew that her husband despised her for it. He believed in truth - hard, angular, unadorned truth - and regarded her instinct to soften and console as a species of dishonesty. Perhaps he was right. Perhaps it was dishonest to tell a child that tomorrow might bring what you secretly feared it would not. But what was the alternative? To strip every moment of its possibility? To meet a six-year-old's hope with a barometric reading?

The light was changing. The long summer evening was beginning its slow collapse into dusk, and the colours in the garden - the blues of the delphiniums, the fierce reds of the hot pokers - were deepening into something richer and stranger, as though the flowers were revealing their true selves only now, in the failing light. Mrs Ramsay watched, and felt the old familiar tug: the sense that beauty was always most intense at the moment of its disappearance, that to look at something lovely was already to mourn it.

The stocking grew beneath her needles. She did not think about the lighthouse. She thought about nothing, and everything, in the way that only a woman who has spent thirty years attending to the needs of others can think - her mind moving like water around the fixed stones of duty and love and the terrible, luminous brevity of a summer's day.`

const EXTRACT_10_SOURCE =
  "Specially written for this practice paper, after Virginia Woolf: it borrows the Ramsays and two lines of dialogue from To the Lighthouse (1927), but the passage is not Woolf's text"

// ─── Text 1 of each paper: F. Scott Fitzgerald, The Great Gatsby (1925) ──────
// Cut by script, in whole paragraphs, from src/data/full-texts/the-great-gatsby.ts
// (the 1925 first edition as transcribed and checked against the page scans by
// Wikisource). Italic markers are dropped; nothing else is changed, including
// the edition's American spelling and its punctuation.

// Chapter I, paragraphs 151-152.
const GATSBY_06 = `Already it was deep summer on roadhouse roofs and in front of wayside garages, where new red gaspumps sat out in pools of light, and when I reached my estate at West Egg I ran the car under its shed and sat for a while on an abandoned grass roller in the yard. The wind had blown off, leaving a loud, bright night, with wings beating in the trees and a persistent organ sound as the full bellows of the earth blew the frogs full of life. The silhouette of a moving cat wavered across the moonlight, and turning my head to watch it, I saw that I was not alone—fifty feet away a figure had emerged from the shadow of my neighbor’s mansion and was standing with his hands in his pockets regarding the silver pepper of the stars. Something in his leisurely movements and the secure position of his feet upon the lawn suggested that it was Mr. Gatsby himself, come out to determine what share was his of our local heavens.

I decided to call to him. Miss Baker had mentioned him at dinner, and that would do for an introduction. But I didn’t call to him, for he gave a sudden intimation that he was content to be alone—he stretched out his arms toward the dark water in a curious way, and, far as I was from him, I could have sworn he was trembling. Involuntarily I glanced seaward—and distinguished nothing except a single green light, minute and far away, that might have been the end of a dock. When I looked once more for Gatsby he had vanished, and I was alone again in the unquiet darkness.`

const GATSBY_06_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter I'

// Chapter I, paragraphs 1-4.
const GATSBY_07 = `In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.

“Whenever you feel like criticising any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”

He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.

And, after boasting this way of my tolerance, I come to the admission that it has a limit. Conduct may be founded on the hard rock or the wet marshes, but after a certain point I don’t care what it’s founded on. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction—Gatsby, who represented everything for which I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which is dignified under the name of the “creative temperament”—it was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again. No—Gatsby turned out all right at the end; it is what preyed on Gatsby, what foul dust floated in the wake of his dreams that temporarily closed out my interest in the abortive sorrows and short-winded elations of men.`

const GATSBY_07_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter I'

// Chapter IV, paragraphs 18-41.
const GATSBY_08 = `And then came that disconcerting ride. We hadn’t reached West Egg Village before Gatsby began leaving his elegant sentences unfinished and slapping himself indecisively on the knee of his caramel-colored suit.

“Look here, old sport,” he broke out surprisingly, “what’s your opinion of me, anyhow?”

A little overwhelmed, I began the generalized evasions which that question deserves.

“Well, I’m going to tell you something about my life,” he interrupted. “I don’t want you to get a wrong idea of me from all these stories you hear.”

So he was aware of the bizarre accusations that flavored conversation in his halls.

“I’ll tell you God’s truth.” His right hand suddenly ordered divine retribution to stand by. “I am the son of some wealthy people in the Middle West—all dead now. I was brought up in America but educated at Oxford, because all my ancestors have been educated there for many years. It is a family tradition.”

He looked at me sideways—and I knew why Jordan Baker had believed he was lying. He hurried the phrase “educated at Oxford,” or swallowed it, or choked on it, as though it had bothered him before. And with this doubt, his whole statement fell to pieces, and I wondered if there wasn’t something a little sinister about him, after all.

“What part of the Middle West?” I inquired casually.

“San Francisco.”

“I see.”

“My family all died and I came into a good deal of money.”

His voice was solemn, as if the memory of that sudden extinction of a clan still haunted him. For a moment I suspected that he was pulling my leg, but a glance at him convinced me otherwise.

“After that I lived like a young rajah in all the capitals of Europe—Paris, Venice, Rome—collecting jewels, chiefly rubies, hunting big game, painting a little, things for myself only, and trying to forget something very sad that had happened to me long ago.”

With an effort I managed to restrain my incredulous laughter. The very phrases were worn so threadbare that they evoked no image except that of a turbaned “character” leaking sawdust at every pore as he pursued a tiger through the Bois de Boulogne.

“Then came the war, old sport. It was a great relief, and I tried very hard to die, but I seemed to bear an enchanted life. I accepted a commission as first lieutenant when it began. In the Argonne Forest I took the remains of my machine-gun battalion so far forward that there was a half mile gap on either side of us where the infantry couldn’t advance. We stayed there two days and two nights, a hundred and thirty men with sixteen Lewis guns, and when the infantry came up at last they found the insignia of three German divisions among the piles of dead. I was promoted to be a major, and every Allied government gave me a decoration—even Montenegro, little Montenegro down on the Adriatic Sea!”

Little Montenegro! He lifted up the words and nodded at them—with his smile. The smile comprehended Montenegro’s troubled history and sympathized with the brave struggles of the Montenegrin people. It appreciated fully the chain of national circumstances which had elicited this tribute from Montenegro’s warm little heart. My incredulity was submerged in fascination now; it was like skimming hastily through a dozen magazines.

He reached in his pocket, and a piece of metal, slung on a ribbon, fell into my palm.

“That’s the one from Montenegro.”

To my astonishment, the thing had an authentic look. “Orderi di Danilo,” ran the circular legend, “Montenegro, Nicolas Rex.”

“Turn it.”

“Major Jay Gatsby,” I read, “For Valour Extraordinary.”

“Here’s another thing I always carry. A souvenir of Oxford days. It was taken in Trinity Quad—the man on my left is now the Earl of Doncaster.”

It was a photograph of half a dozen young men in blazers loafing in an archway through which were visible a host of spires. There was Gatsby, looking a little, not much, younger—with a cricket bat in his hand.

Then it was all true. I saw the skins of tigers flaming in his palace on the Grand Canal; I saw him opening a chest of rubies to ease, with their crimson-lighted depths, the gnawings of his broken heart.`

const GATSBY_08_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter IV'

// Chapter VI, paragraphs 1-7.
const GATSBY_09 = `About this time an ambitious young reporter from New York arrived one morning at Gatsby’s door and asked him if he had anything to say.

“Anything to say about what?” inquired Gatsby politely.

“Why—any statement to give out.”

It transpired after a confused five minutes that the man had heard Gatsby’s name around his office in a connection which he either wouldn’t reveal or didn’t fully understand. This was his day off and with laudable initiative he had hurried out “to see.”

It was a random shot, and yet the reporter’s instinct was right. Gatsby’s notoriety, spread about by the hundreds who had accepted his hospitality and so become authorities upon his past, had increased all summer until he fell just short of being news. Contemporary legends such as the “underground pipe-line to Canada” attached themselves to him, and there was one persistent story that he didn’t live in a house at all, but in a boat that looked like a house and was moved secretly up and down the Long Island shore. Just why these inventions were a source of satisfaction to James Gatz of North Dakota, isn’t easy to say.

James Gatz—that was really, or at least legally, his name. He had changed it at the age of seventeen and at the specific moment that witnessed the beginning of his career—when he saw Dan Cody’s yacht drop anchor over the most insidious flat on Lake Superior. It was James Gatz who had been loafing along the beach that afternoon in a torn green jersey and a pair of canvas pants, but it was already Jay Gatsby who borrowed a rowboat, pulled out to the Tuolomee, and informed Cody that a wind might catch him and break him up in half an hour.

I suppose he’d had the name ready for a long time, even then. His parents were shiftless and unsuccessful farm people—his imagination had never really accepted them as his parents at all. The truth was that Jay Gatsby of West Egg, Long Island, sprang from his Platonic conception of himself. He was a son of God—a phrase which, if it means anything, means just that—and he must be about His Father’s business, the service of a vast, vulgar, and meretricious beauty. So he invented just the sort of Jay Gatsby that a seventeen year-old boy would be likely to invent, and to this conception he was faithful to the end.`

const GATSBY_09_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter VI'

// Chapter VI, paragraphs 132-134.
const GATSBY_10 = `He talked a lot about the past, and I gathered that he wanted to recover something, some idea of himself perhaps, that had gone into loving Daisy. His life had been confused and disordered since then, but if he could once return to a certain starting place and go over it all slowly, he could find out what that thing was. . . .

. . . One autumn night, five years before, they had been walking down the street when the leaves were falling, and they came to a place where there were no trees and the sidewalk was white with moonlight. They stopped here and turned toward each other. Now it was a cool night with that mysterious excitement in it which comes at the two changes of the year. The quiet lights in the houses were humming out into the darkness and there was a stir and bustle among the stars. Out of the corner of his eye Gatsby saw that the blocks of the sidewalks really formed a ladder and mounted to a secret place above the trees—he could climb to it, if he climbed alone, and once there he could suck on the pap of life, gulp down the incomparable milk of wonder.

His heart beat faster and faster as Daisy’s white face came up to his own. He knew that when he kissed this girl, and forever wed his unutterable visions to her perishable breath, his mind would never romp again like the mind of God. So he waited, listening for a moment longer to the tuning-fork that had been struck upon a star. Then he kissed her. At his lips’ touch she blossomed for him like a flower and the incarnation was complete.`

const GATSBY_10_SOURCE = 'F. Scott Fitzgerald, The Great Gatsby (1925), from Chapter VI'

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

export const ocrP2B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 6: Reaching for what is out of reach
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-06',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-06-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, has just come home late at night to the small house he rents on Long Island. Next door stands the huge mansion of a man called Gatsby, whom Nick has not yet met.\n\nText 2 is a story specially written for this practice paper. It is set in a city whose rulers control what people may say and remember.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-06-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Text 1, from "Already it was deep summer" to "our local heavens".\n\n(a) Where does Nick sit when he gets home? [1]\n\n(b) Give two sounds that Nick hears in the night. [2]\n\n(c) What is the figure on the lawn doing when Nick first sees him? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_06}\n\nText 2:\n${EXTRACT_06}`,
            extractSource: `Text 1: ${GATSBY_06_SOURCE} | Text 2: ${EXTRACT_06_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) On an abandoned grass roller in the yard.\n(b) Wings beating in the trees; the frogs, which make a persistent organ sound.\n(c) He is standing with his hands in his pockets, looking up at the stars.',
            },
            markScheme: [
              '(a) 1 mark: on an (abandoned) grass roller in the yard.',
              '(b) 1 mark for each of: "wings beating in the trees"; the frogs, or "a persistent organ sound". Own words or short quotations both earn the mark. A "loud, bright night" names no sound, so it earns nothing on its own.',
              '(c) 1 mark: standing with his hands in his pockets, or looking at the stars ("regarding the silver pepper of the stars").',
              'Credit only answers drawn from the first paragraph. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-06-q2',
            questionNumber: 2,
            questionText:
              'Look again at the second paragraph of Text 1, from "I decided to call to him" to the end.\n\nHow does the writer use language and structure to make Gatsby seem mysterious?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_06,
            extractSource: GATSBY_06_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald builds mystery by setting up an action and then cancelling it. The paragraph begins with Nick\'s simple decision, "I decided to call to him", and even gives a reason, but the next sentence overturns it: "But I didn\'t call to him". The conjunction "But" turns the moment away from an ordinary introduction towards something private. Gatsby is never heard, and never seen clearly. Nick picks up only a "sudden intimation", a formal, vague noun which suggests that Gatsby\'s wish to be alone is sensed rather than shown.\n\nThe gesture at the centre of the paragraph is strange and intense: "he stretched out his arms toward the dark water in a curious way". The adjective "curious" admits that Nick cannot explain it, and the qualification "far as I was from him, I could have sworn he was trembling" keeps the reader at the same distance as Nick, unsure of what he sees. The pauses in the next sentence make the reader\'s eye follow Nick\'s glance "seaward", where he finds "nothing except a single green light, minute and far away". The light is small and unexplained, which makes it more intriguing, and "that might have been the end of a dock" leaves even its nature uncertain.\n\nThe final sentence completes the mystery: "he had vanished", and Nick is "alone again in the unquiet darkness". The verb "vanished" suggests something almost magical, and the word "alone" answers the first paragraph\'s "I saw that I was not alone", so Gatsby appears and disappears without a single word.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the decision that is cancelled ("I decided to call to him" and then "But I didn\'t call to him").',
                'Analysis of the strange gesture ("stretched out his arms toward the dark water in a curious way") and of Nick\'s uncertainty ("I could have sworn he was trembling").',
                'Comment on the green light, "minute and far away", which the paragraph leaves unexplained.',
                'Structure: Nick\'s glance following Gatsby\'s, then the ending in which Gatsby "had vanished" and Nick is "alone again", echoing the first paragraph.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-06-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents the city and Maren's feelings about it.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents the city as a place emptied of individuality and memory, and Maren as someone whose inner life is only just beginning to wake against it.\n\nThe opening sentence is short and blunt: "The city had been scrubbed clean of memory." The metaphor of scrubbing makes memory sound like dirt that has been removed, and the past perfect suggests that this happened long ago. The contrast that follows sets "bookshops and cafés with hand-lettered signs", personal and handmade, against "grey-panelled Distribution Centres, each one identical". The repetition of "each one" and the colourless "grey-panelled" stress sameness. Sound adds to the oppression: the "low electrical drone" is something Maren "had learned to stop hearing", which shows how people adapt to control until they no longer notice it. The citizens move "eyes forward, steps measured", a clipped description that makes them sound drilled like soldiers.\n\nThe second paragraph moves from the present city to the remembered one. The phrase "what had once been Lindenstrasse" shows that even the street\'s name has been taken away, and Maren\'s knowledge comes from "whispered sessions behind the noise-screen in the bathroom", a detail that reveals the fear surrounding any memory. Her grandmother\'s world, where people "talked about whatever they wished", is so foreign that Maren can hardly imagine it. The minor sentence "Talking about whatever you wished." repeats the phrase as if she were testing it, and the words "refused to become real", so even language has lost its meaning for her.\n\nThe third paragraph introduces hope through the object. It is described in close, physical detail, "smooth on one side, ridged on the other, and warm", and the simile "as though it contained a tiny, patient engine" makes it feel alive. Its effect is on her dreams, which are now "full of colour", with "blues and greens she had no names for", a vivid contrast with the grey of the opening. What people do in the dreams, they "spoke freely, laughed without checking over their shoulders", shows by implication everything the city forbids, and "an ease that made her wake up weeping" shows how much she has been missing without knowing it.\n\nThe final sentence brings the two sides together. Outwardly Maren conforms, with "her face as blank as every other face on the street", but "inside her chest something that had been sleeping for twenty-seven years began, tentatively, to stir". The commas around "tentatively" slow the sentence and make the change feel fragile, and ending on the verb "stir" leaves the reader with a sense of a beginning rather than a resolution.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the metaphor "scrubbed clean of memory" and of the contrast between handmade "bookshops and cafés" and identical "Distribution Centres".',
                'Comment on the signs of control and fear: the drone Maren "had learned to stop hearing", the "whispered sessions behind the noise-screen", words that "refused to become real".',
                'Comment on the object and the dreams "full of colour" as the source of hope, and on what the dreams show the city forbids.',
                'Structure: from the city to the remembered street to the object to the final sentence, where a blank face hides something that "began, tentatively, to stir".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-06-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, a character reaches for something they cannot have.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the characters and what they long for\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present longing\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_06}\n\nText 2:\n${EXTRACT_06}`,
            extractSource: `Text 1: ${GATSBY_06_SOURCE} | Text 2: ${EXTRACT_06_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement more fully for Text 1 than for Text 2. Both characters reach towards something distant, but in Text 1 the reaching seems hopeless, while in Text 2 what Maren reaches for may be coming within her grasp.\n\nIn Text 1, Gatsby\'s longing is shown through a single, striking gesture: "he stretched out his arms toward the dark water in a curious way". What he reaches for is "a single green light, minute and far away", so the distance is built into the description. The words "minute" and "far away" make it seem impossible to reach, and Nick "could have sworn he was trembling", which suggests the intensity of a desire Gatsby cannot satisfy. Even before this, Fitzgerald gives Gatsby a cosmic ambition, having "come out to determine what share was his of our local heavens", which makes his desire sound vast and slightly absurd. Then "he had vanished", and Nick is "alone again in the unquiet darkness", so the reaching ends in nothing. As a reader I feel the sadness of a longing that the scene never explains but that clearly cannot be fulfilled.\n\nIn Text 2, Maren also longs for something she cannot have: a world where people "talked about whatever they wished". The idea is "almost impossible to hold in her mind", and the words "refused to become real", so she longs for something she cannot even picture properly. Yet unlike Gatsby, she holds something real: "She reached into her pocket and closed her fingers around the object." The verb "reached" is the statement\'s own, but here the reaching succeeds. The object is "warm - always warm", and it "pulsed gently against her palm", which suggests that hope is physically within her grasp. The ending, in which something "began, tentatively, to stir", suggests that what she longs for may yet come.\n\nThe writers present longing through similar methods but with different results. Both use light and colour as symbols: Gatsby\'s "single green light" and Maren\'s dreams "full of colour", set against a city of "grey-panelled" buildings. Both show a character alone with a longing nobody shares: Gatsby stands by himself on his lawn, "content to be alone", while Nick watches from "fifty feet away", and Maren walks among other people with "her face as blank as every other face on the street", keeping her secret. Both writers also keep the object of longing mysterious. Fitzgerald\'s light only "might have been the end of a dock", and Maren "did not know what it was". However, Fitzgerald narrates from outside, through Nick, so Gatsby\'s longing is seen but never explained, while Text 2 takes us inside Maren\'s dreams and feelings, so we understand exactly what she misses.\n\nOverall, I largely agree. Both characters reach for something they cannot have, and both texts make the reader feel the force of that longing. But the statement fits Text 1 better: Gatsby\'s arms stretch towards a light he cannot touch, whereas Maren\'s fingers have already closed around something, and her story ends not with a loss but with a beginning.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds; many answers will find it truer of Text 1 than of Text 2.',
                'Text 1: the gesture towards "the dark water", the light "minute and far away", the trembling, and the ending in which Gatsby "had vanished".',
                'Text 2: a longing for a world where people "talked about whatever they wished", which Maren can barely imagine, against the object she holds and the hope that begins "to stir".',
                "Comparison of methods: light and colour as symbols; a character alone with a secret longing, on an empty lawn or in a crowded street; a mysterious object of longing; a narrator outside Gatsby against a narrative inside Maren's mind.",
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
        id: 'ocr-p2-06-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-06-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Light Across the Water'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- create a setting at night, or across a distance\n- leave the reader with a sense of hope, or of loss.\n\nOR\n\nQuestion 6\nWrite about a time when you wanted something very much.\n\nIn your writing you could:\n- describe what you wanted and why it mattered to you\n- explain how you felt while you waited or tried\n- reflect on what happened in the end and what it taught you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 5\n\nThe Light Across the Water\n\nEvery night at nine o\'clock, Isla took the torch from the hook by the back door and walked down to the end of the jetty.\n\nThe island was quiet at that hour. The last of the day\'s light lay along the horizon like a thin strip of copper, and the sea had gone the colour of slate. Behind her, the village settled into its evening sounds: a dog barking twice and giving up, a door closing, the generator at the shop coughing into life. In front of her there was only water, black and patient, and four miles of it between the island and the mainland.\n\nOn the far shore, low and gold, sat the lights of the town. Most of them were just lights: street lamps, the petrol station, the long bright windows of the supermarket. But one of them, high up and a little to the left of the harbour, belonged to the hospital, and somewhere behind it, on the third floor, was her mother.\n\nThe ferry did not run in winter storms, and this winter had brought nothing else. For eleven days the sea had thrown itself against the island as if it wanted to wear it away, and for eleven days Isla had listened to her father talking on the phone in a voice that grew quieter every time.\n\nTonight the storm had blown itself out. The air was cold and very clear, so clear that the town seemed close enough to touch, and Isla stood at the end of the jetty with the torch in both hands and her heart going faster than it should.\n\nShe had read somewhere that light could travel for miles over water. She did not know if that was true. She did not know if anyone would be looking. She switched the torch on anyway, pointed it at the far shore, and counted. On, two, three. Off, two, three. On.\n\nNothing came back. Of course nothing came back. The town went on glittering in its ordinary way, the water slapped against the posts beneath her feet, and Isla felt suddenly foolish, a girl in a coat too big for her, flashing a torch at the dark like someone in an old film.\n\nShe was about to turn for home when she saw it.\n\nHigh up, a little to the left of the harbour, one light went out.\n\nShe held her breath. The light came back. Went out. Came back. On, two, three. Off, two, three. On.\n\nIsla did not know she was crying until the wind turned her cheeks cold. She flashed the torch again, faster this time, clumsy with happiness, and the light across the water answered every time, steady and certain, as if it had been waiting all along for someone to ask.\n\nWhen she ran back up the path, her father was standing in the doorway with the phone pressed to his ear, and he was smiling, properly smiling, for the first time in eleven days.\n\n"She saw you," he said. "Your mum. The nurse wheeled her to the window. She says the ferry\'s running on Thursday."\n\nIsla looked back at the sea. The light was still there, small and gold and four miles away. It had never seemed so close.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, a setting at night or across a distance created through precise detail, and an ending that leaves a definite sense of hope or of loss.',
                'Question 6: a personal account that makes clear what was wanted and why, conveys the feelings of waiting or trying, and reflects on the outcome.',
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
  // PAPER 7: Judging other people
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-07',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-07-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is the opening of The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, introduces himself by recalling some advice his father once gave him, and looks back on a summer he spent near New York.\n\nText 2 is a story specially written for this practice paper. It is set at a murder trial in Victorian England; the trial and the people in it are imaginary.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-07-q1',
            questionNumber: 1,
            questionText:
              'Look again at Text 1, from the beginning to "parcelled out unequally at birth."\n\n(a) What advice did Nick\'s father give him? [1]\n\n(b) Give two results, according to Nick, of his habit of reserving judgements. [2]\n\n(c) Why does Nick sometimes pretend to be asleep? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_07}\n\nText 2:\n${EXTRACT_07}`,
            extractSource: `Text 1: ${GATSBY_07_SOURCE} | Text 2: ${EXTRACT_07_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Whenever he felt like criticising anyone, to remember that not everyone has had the advantages he has had.\n(b) Any two of: it has opened up many curious natures to him; it has made him the victim of veteran bores; abnormal minds attach themselves to him; he was unjustly accused at college of being a politician; he has been told the secret griefs of wild, unknown men.\n(c) To avoid hearing private confessions that he does not want to hear.',
            },
            markScheme: [
              '(a) 1 mark: before criticising anyone, remember that not everyone has had his advantages.',
              '(b) 1 mark for each of two of: it "opened up many curious natures" to him; it made him "the victim of not a few veteran bores"; abnormal minds attach themselves to him; he was "unjustly accused of being a politician"; he was told "the secret griefs of wild, unknown men".',
              '(c) 1 mark: to escape an unwanted confidence, an "intimate revelation" he can see coming.',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-07-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last paragraph of Text 1, from "And, after boasting" to the end.\n\nHow does the writer use language and structure to make the reader curious about Gatsby?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_07,
            extractSource: GATSBY_07_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald makes Gatsby intriguing by presenting him as a contradiction. The paragraph opens with Nick admitting that his tolerance has a limit and that he wanted the world "at a sort of moral attention forever", a military metaphor that suggests disgust at what he has seen. Then comes the exception, signalled by the word "Only": "Only Gatsby, the man who gives his name to this book, was exempt from my reaction". The dash that follows repeats the name, "Gatsby, who represented everything for which I have an unaffected scorn", so the reader learns in the same breath that Nick scorns what Gatsby stands for and yet excuses him. That paradox demands an explanation.\n\nThe language then rises to praise. The conditional "If personality is an unbroken series of successful gestures" hints that Gatsby\'s personality may be a performance, yet "there was something gorgeous about him". The simile comparing him to "one of those intricate machines that register earthquakes ten thousand miles away" makes his sensitivity seem extraordinary, almost scientific, and the noun phrases "an extraordinary gift for hope" and "a romantic readiness" build him up further.\n\nFinally, the structure withholds the story while hinting at how it ends. "Gatsby turned out all right at the end" reassures, but the dark metaphor of "what foul dust floated in the wake of his dreams" suggests that something terrible happened around him. The reader is left knowing that there is an ending, and that it involves both dreams and ruin, but not what it is.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the exception introduced by "Only" and the paradox of a man Nick excuses though he represents "everything for which I have an unaffected scorn".',
                'Analysis of the praise: the conditional "If personality is an unbroken series of successful gestures", the simile of the machines that "register earthquakes", "an extraordinary gift for hope".',
                'Comment on the dark metaphor of "foul dust" and on how it hints at the ending.',
                "Structure: the turn from Nick's limit to the exception, the build-up of praise, and the ending that withholds the story.",
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-07-q3',
            questionNumber: 3,
            questionText:
              'Look again at Text 2.\n\nExplore how the writer presents Martha and the way other people see her.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Martha as a calm, unreadable figure, and the structure keeps turning the reader\'s attention from Martha herself to the people watching her, so that the text becomes as much about judging as about guilt.\n\nThe opening paragraph presents her through other people before we see her. The newspapers\' later remark that the trial began on "the same day of the week on which her husband had disappeared" is a coincidence that means nothing as evidence, yet it is the first thing the writer tells us, which shows how eager people are to find patterns. The crowd "pressed themselves against the windows", "craning for a glimpse", verbs that make them sound hungry and intrusive. The charge is given only "according to the prosecution", a phrase that reminds us that nothing has yet been proved.\n\nThe second paragraph describes Martha with careful restraint. She sits "perfectly upright in the dock, her hands folded in her lap", an image of control. Her dress is "modest, well-made", and the writer adds that it "spoke of careful economy rather than poverty", which shows how closely her clothes are being read for clues. The simile "as though she were watching a sermon rather than fighting for her life" sets calm against danger, and the contrast makes her composure seem either innocent or chilling.\n\nThe third paragraph turns to the crowd\'s disappointment. The metaphor of "appetite" makes their interest sound greedy, almost predatory, and the writer lists what they expected, "a monster, or at the very least a woman undone by guilt", before the colon reveals what they found: "a face of extraordinary ordinariness". This paradox is the heart of the text. The list "Pale skin, unremarkable features, a mouth that was neither cruel nor kind" describes her mostly by what she is not, and the paragraph ends by suggesting that her ordinariness is "the most unsettling thing of all", because it means that anyone could be a poisoner, or anyone could be wrongly accused.\n\nThe fourth paragraph gives the voice of reason. The judge uses formal, legal diction, "evidence of a most particular and disturbing character", and repetition, "to the facts and to the facts alone", to insist that "her demeanour, her appearance" are "not evidence".\n\nThe structure then undercuts him at once. The last paragraph begins with "But", and "the jury were already watching Martha\'s hands". The adverb "already" shows that they have ignored his warning before he has finished giving it. The text ends on "those still, patient fingers" and what they might have "stirred into the barley water", so the reader, like the jury, is left imagining a guilt that nothing has proved. This final turn makes us aware that we too have been judging her by her appearance.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of how Martha is presented through other people first: the newspapers\' coincidence, the crowd "craning for a glimpse", the charge given only "according to the prosecution".',
                'Comment on the restrained description of Martha (her clothes read for clues; the simile of "a sermon") and on the paradox of "a face of extraordinary ordinariness".',
                'Comment on the judge\'s formal, repetitive warning that "her demeanour, her appearance" are "not evidence".',
                'Structure: the move from crowd to Martha to judge, and the final turn, beginning "But", in which the jury ignore him at once.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-07-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show how difficult it is to judge other people fairly.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the ways people are judged in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present judging\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_07}\n\nText 2:\n${EXTRACT_07}`,
            extractSource: `Text 1: ${GATSBY_07_SOURCE} | Text 2: ${EXTRACT_07_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I strongly agree with the statement. Both texts show people trying to judge others and finding it hard to do fairly, although Text 1 presents a narrator who claims to have learned how, while Text 2 shows a whole courtroom failing at it.\n\nIn Text 1, Nick presents fair judgement as something taught and practised. His father\'s advice, "just remember that all the people in this world haven\'t had the advantages that you\'ve had", asks him to allow for other people\'s circumstances, and Nick says it made him "inclined to reserve all judgments". He presents this as a virtue that "opened up many curious natures to me", and his claim that "Reserving judgments is a matter of infinite hope" suggests that holding back keeps him open to surprise. Yet Fitzgerald shows the difficulty even here. Nick admits that his tolerance "has a limit", and he calls his father\'s view, and his own repetition of it, snobbish: "as my father snobbishly suggested, and I snobbishly repeat". His belief that "a sense of the fundamental decencies is parcelled out unequally at birth" is itself a judgement of others. By the end of the passage he says that Gatsby represented "everything for which I have an unaffected scorn", so the reader sees that even a man proud of his fairness judges sharply.\n\nIn Text 2 the difficulty is dramatised. The crowd has already decided what Martha should look like, "a monster, or at the very least a woman undone by guilt", and their "appetite" for a story makes fair judgement impossible. When she turns out to have "a face of extraordinary ordinariness", they are unsettled rather than reassured. The judge states the principle of fairness clearly, "I urge you to attend to the facts and to the facts alone", and names what is "not evidence": "her demeanour, her appearance". But the final paragraph shows the jury "already watching Martha\'s hands", imagining what they "had stirred into the barley water". The structure, which places the judge\'s warning directly before its failure, makes the point that knowing the rule is not the same as following it.\n\nThe writers\' methods differ. Fitzgerald uses a first-person narrator who reflects on his own habits, and his tone is wry and self-mocking, as in the repetition of "snobbishly". The reader is invited to judge Nick\'s judgement. Text 2 uses third-person narration that moves from the crowd to Martha to the judge and the jury, so the reader watches several kinds of judging at once. Both writers, however, include a warning against judging too quickly: Nick\'s father warns him against criticising people who have not had his advantages, and the judge warns against judging by "her appearance". Both also leave the judgement hanging. Nick hints at "what foul dust floated in the wake of his dreams" without explaining it, and Text 2 ends before any verdict.\n\nOverall, I agree. Both texts suggest that fair judgement is an ideal people aim at and constantly fall short of. Text 2 shows this more dramatically, because a life depends on it, but Text 1 is subtler, because it shows the problem inside one thoughtful mind. As a reader, Text 2 makes me uneasy about the jury, while Text 1 makes me question the narrator I am about to trust.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: the father\'s advice and Nick\'s habit of reserving judgement, undercut by his admission of a limit, his "snobbishly", and his scorn.',
                'Text 2: a crowd that expects "a monster", a judge who insists on "the facts alone", and a jury already judging Martha\'s hands.',
                "Comparison of methods: a reflective, self-mocking first-person narrator against a third-person narrative that watches several judges at once; a warning against judging too quickly in both (the father's advice, the judge's instruction); endings that leave judgement unresolved.",
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
        id: 'ocr-p2-07-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-07-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Verdict'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- build tension towards a decision\n- leave the reader thinking about what is fair.\n\nOR\n\nQuestion 6\nWrite about a time when you judged someone too quickly, or when you were judged unfairly.\n\nIn your writing you could:\n- describe the situation and the people involved\n- explain what was assumed, and what turned out to be true\n- reflect on what the experience taught you.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nFor most of Year 9, I was certain that Mr Pryce at number 14 was the most miserable man in Wales.\n\nHe lived alone in the house at the end of our terrace, the one with the overgrown hedge and the net curtains that had turned the colour of weak tea. He never said hello. If you walked past while he was putting his bins out, he looked at you as if you had personally insulted his recycling. When our football went over his wall, it came back two days later, flat, with no note. My friends and I invented a whole history for him: a retired headmaster, or a spy, or a man who had once been famous and had never forgiven the world for forgetting him.\n\nI am not proud of what I said about him. Most of it was meant to be funny. Some of it was meant to be cruel, and I told myself that did not matter, because he would never hear it.\n\nThe day I learned I was wrong was a Saturday in February. I was walking back from the shop with milk when I saw him at his front door, trying to lift a bag of compost out of the boot of a taxi. He had it halfway up when his legs gave way, not dramatically, just slowly, the way a deckchair folds, and he sat down hard on the wet path with the compost on his lap.\n\nFor a second I thought about walking on. I am telling the truth about that, because the second matters. Then I put the milk down and went over.\n\nUp close, he was smaller than I had thought, and his hands were shaking. "I\'m fine," he said, which was obviously untrue, and then, after a moment, "Would you mind?"\n\nI carried the compost through his house to the back garden, and that was where my whole invented history fell apart. The garden was beautiful. Not neat, but full: raised beds of winter vegetables, a greenhouse with tomato plants waiting for spring, and along the back wall a row of bird feeders so busy that the air seemed to shiver with sparrows.\n\n"My wife\'s," he said, following my gaze. "She did the planning. I just did the digging." He paused. "The doctor says no more lifting now."\n\nWe had a cup of tea in his kitchen. He told me that his wife had died two years before, that he had lost most of the hearing in one ear, which was why he never answered when people called out, that the football had been punctured by his roses, and that he had left it on the wall because he did not know which house it belonged to. He had not been ignoring us. He had simply not heard us, and had been too tired, or too sad, to try.\n\nI help him in the garden on Saturdays now. He is not the most miserable man in Wales. He is quite funny, actually, in a dry way that takes time to notice.\n\nWhat I learned is simple, and I wish I had learned it without someone falling over. A closed door does not tell you what is behind it. Most people are carrying something you cannot see, and the story you invent about them says more about you than it does about them.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent point of view, tension that builds towards a decision, and an ending that leaves the reader weighing what is fair.',
                'Question 6: a personal account that sets out what was assumed and what was true, conveys the moment of discovery, and reflects honestly on what was learned.',
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
  // PAPER 8: Evidence and appearances
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-08',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-08-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. The narrator, Nick Carraway, is being driven into New York by his rich neighbour, Gatsby, about whom many strange rumours are told.\n\nText 2 is a story specially written for this practice paper. A police inspector examines the flat of a university lecturer who has gone missing.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-08-q1',
            questionNumber: 1,
            questionText:
              'Look again at Text 1, from the beginning to "a glance at him convinced me otherwise."\n\n(a) Give one thing Gatsby does on the drive, before he asks Nick\'s opinion of him, that shows he is uneasy. [1]\n\n(b) Why does Gatsby say he wants to tell Nick about his life? [1]\n\n(c) Give two claims Gatsby makes about his family or his education. [2]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_08}\n\nText 2:\n${EXTRACT_08}`,
            extractSource: `Text 1: ${GATSBY_08_SOURCE} | Text 2: ${EXTRACT_08_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) He leaves his sentences unfinished, or he keeps slapping himself on the knee.\n(b) So that Nick does not get the wrong idea of him from all the stories people tell.\n(c) Any two of: he is the son of wealthy people in the Middle West; his family are all dead; he was brought up in America; he was educated at Oxford; all his ancestors were educated there, as a family tradition; he came into a good deal of money.',
            },
            markScheme: [
              '(a) 1 mark: he leaves "his elegant sentences unfinished", or he keeps "slapping himself indecisively on the knee".',
              '(b) 1 mark: he does not want Nick to "get a wrong idea" of him from the stories people tell.',
              '(c) 1 mark for each of two of: "the son of some wealthy people in the Middle West"; his family are "all dead now"; "brought up in America"; "educated at Oxford"; his ancestors were educated there, "a family tradition"; he "came into a good deal of money". His answer "San Francisco", when Nick asks which part of the Middle West, is also a claim and earns the mark.',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-08-q2',
            questionNumber: 2,
            questionText:
              'Look again at Text 1, from "He reached in his pocket" to the end.\n\nHow does the writer use language and structure to show Nick\'s doubts giving way to belief?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_08,
            extractSource: GATSBY_08_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald shows Nick\'s change of mind through evidence that is literally put into his hands. The section begins with a short, physical action: "a piece of metal, slung on a ribbon, fell into my palm". The verb "fell" makes the medal seem to arrive almost by itself, and Nick\'s reaction, "To my astonishment, the thing had an authentic look", shows his disbelief beginning to waver. Calling it "the thing" keeps his distance, but the adjective "authentic" admits that it convinces him.\n\nThe structure then speeds up through short lines of dialogue and quotation. Gatsby\'s brief command "Turn it." and the inscriptions Nick reads, "Orderi di Danilo" and "For Valour Extraordinary", give the evidence the authority of print. A second proof follows at once, the photograph "taken in Trinity Quad", with "a host of spires" and Gatsby "with a cricket bat in his hand", details that answer Nick\'s earlier doubt about Oxford directly.\n\nThe climax is the short, flat sentence "Then it was all true." Its simplicity marks the moment of belief. But Fitzgerald undercuts it at once. Nick\'s imagination runs away with the very clichés that earlier made him struggle not to laugh: "the skins of tigers flaming in his palace on the Grand Canal" and "a chest of rubies" easing "the gnawings of his broken heart". The extravagant, romantic language suggests that Nick has not so much weighed the evidence as been carried away by it, so the reader is left less certain than he is.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the physical arrival of the evidence ("fell into my palm") and on Nick\'s reaction, "the thing had an authentic look".',
                'Comment on the short lines of dialogue and the inscriptions Nick reads, which speed the passage up and lend the evidence authority.',
                'Analysis of the short sentence "Then it was all true." as the turning point.',
                'Comment on the extravagant language that follows ("the skins of tigers flaming", "a chest of rubies"), which suggests that Nick has been carried away.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-08-q3',
            questionNumber: 3,
            questionText:
              'Look again at Text 2.\n\nExplore how the writer presents Inspector Vasik and what she finds in the flat.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Vasik as sharp, precise and slightly superior, and the flat as a puzzle whose very perfection is the clue.\n\nThe opening sentence establishes her expertise through a paradox: "the absence of evidence was itself a kind of evidence". This tells the reader at once that Vasik notices what others miss, and it sets up the whole text, in which the most important thing is what is not there. The description of the flat is built on repetition. It is "Not merely tidy - immaculate", and "immaculate" returns in the simile "in the way that a stage set is immaculate". The tricolon "everything chosen, everything placed, everything designed" suggests deliberate staging, as though the flat were performing for an audience. The details that follow come in short, precise sentences: books "arranged by colour", an orchid "watered that morning", hospital corners that "could have been measured with a set square". The exactness of the language mirrors the exactness of the room and of Vasik\'s eye.\n\nThe second paragraph is a single sentence set apart, which gives the central discovery a space of its own. The writer delays the key noun with a run of phrases, "in the centre of the living room, on a rug that had been recently vacuumed", before revealing "a perfect circle of ash", and ends on the anticlimax "containing nothing at all".\n\nThe dialogue presents Vasik\'s character through contrast. Constable Adeyemi\'s obvious remark, "Someone burned something", is judged in Vasik\'s thoughts as "a contribution of limited analytical value", a dry, formal phrase that shows her impatience without her saying it aloud. Her reply repeats his words and adds two more, "very carefully", which shows precisely how far her thinking goes beyond his. Her explanation is a sequence of short, confident statements and fragments, "No scorch marks. No discolouration", building to the metaphor "It\'s the ghost of the fire", which makes the evidence sound haunting as well as logical.\n\nThe fifth paragraph uses a list of negatives, "Not the acrid smell of burned paper, not the chemical tang of burned plastic, not the sweet heaviness of burned fabric", which turns the absence of a smell into something vivid. The background on Dr Okonkwo then supplies the human mystery: he was "meticulous, private, and unfailingly punctual", "A man of absolute routine", a fragment that stresses how out of character his disappearance is.\n\nThe ending reframes everything. Vasik realises that "she was not looking at a crime scene. She was looking at a message." The two sentences mirror each other, and the colon then delivers the message itself, "I have left nothing for you to find", which gives the missing man a voice for the first time and turns the flat into a deliberate communication. The reader is left with a chilling sense that the disappearance was planned.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the opening paradox, "the absence of evidence was itself a kind of evidence", and of the repeated "immaculate" and the simile of "a stage set".',
                'Comment on the precise details of the flat and on the circle of ash, set apart in its own paragraph and "containing nothing at all".',
                'Comment on how the dialogue contrasts Vasik with Adeyemi ("Someone burned something very carefully") and on the metaphor "the ghost of the fire".',
                'Structure: the list of absent smells, the background on the missing man, and the ending that turns the scene into "a message".',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-08-q4',
            questionNumber: 4,
            questionText:
              "'In both texts, the characters cannot trust what they are shown.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of what the characters are shown, and how they respond\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present evidence and appearances\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_08}\n\nText 2:\n${EXTRACT_08}`,
            extractSource: `Text 1: ${GATSBY_08_SOURCE} | Text 2: ${EXTRACT_08_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement for both texts, but in different ways: in Text 1 Nick is shown evidence that seems to prove a story he doubted, while in Text 2 Vasik is shown a scene so carefully arranged that she distrusts it from the start.\n\nIn Text 1, Gatsby shows Nick a version of himself, first in words and then in objects. His story is a string of clichés: he is "the son of some wealthy people in the Middle West", "educated at Oxford", and he lived "like a young rajah in all the capitals of Europe". Nick does not trust it. When Gatsby "hurried the phrase" about Oxford, "or swallowed it, or choked on it", Nick says that "his whole statement fell to pieces". The comic moment in which the Middle West turns out to be "San Francisco" makes the lie obvious, and Nick admits, "With an effort I managed to restrain my incredulous laughter." Then the evidence arrives: the medal "had an authentic look", and the photograph shows Gatsby in "Trinity Quad". "Then it was all true", Nick concludes. Yet the reader is not so sure. Nick\'s sudden, extravagant vision of "a chest of rubies" suggests that he has been dazzled, and a medal and a photograph can be produced to support a story as easily as to prove it.\n\nIn Text 2, Vasik distrusts what she is shown from the beginning. The flat is "immaculate, in the way that a stage set is immaculate", and a stage set exists to create an illusion. Everything in it is "designed to communicate a specific message", so its very neatness becomes suspicious. Her constable takes the scene at face value, "Someone burned something", but Vasik reads beyond it, and her conclusion, "She was looking at a message", shows that she treats the room as a performance rather than a record.\n\nThe writers\' methods differ. Fitzgerald uses dialogue and Nick\'s first-person reactions, so the reader follows his doubts as they rise and fall, from "I wondered if there wasn\'t something a little sinister about him" to "Then it was all true." The tone is comic and ironic. The writer of Text 2 uses close third-person narration and the conventions of detective fiction, precise detail and expert deduction, to build a mood of cool suspicion. Both writers, however, focus on objects as evidence: Gatsby\'s medal and photograph, Vasik\'s circle of ash. The pairing of characters works differently, though. Text 2 sets Vasik beside a companion who sees less, Constable Adeyemi, who notices only the obvious, while in Text 1 nobody checks Nick, so the man who doubts the story is also the man it wins over.\n\nOverall, I agree. Both texts are about the gap between what is shown and what is true. Vasik is right to distrust a scene designed to say "I have left nothing for you to find". Nick, by contrast, distrusts Gatsby\'s words but trusts his objects, and Fitzgerald leaves the reader wondering whether that trust is any wiser. For me Text 1 is the more unsettling, because its narrator is persuaded, and we cannot be sure that he should have been.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: a story Nick rightly distrusts ("his whole statement fell to pieces"), then objects that persuade him ("Then it was all true."), and the hint that he has been dazzled.',
                'Text 2: a flat "immaculate" like "a stage set", which Vasik distrusts at once and reads as "a message".',
                'Comparison of methods: comic, ironic first-person narration against cool third-person detective fiction; objects as evidence in both; in Text 2 a companion who sees less, in Text 1 a doubter who is also the one won over.',
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
        id: 'ocr-p2-08-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-08-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'Nothing Left Behind'.\n\nIn your writing you could:\n- choose a narrator and keep to their point of view\n- use small details to build suspense\n- end with a discovery, or with a question the reader is left with.\n\nOR\n\nQuestion 6\nWrite about a time when you found out the truth about something.\n\nIn your writing you could:\n- describe what you believed at first\n- explain how you found out the truth\n- reflect on how it changed what you thought or felt.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 5\n\nNothing Left Behind\n\nThe removal van had gone by the time I got there. All that was left of the Okoros' house was a square of paler grass where their trampoline used to stand, and a FOR SALE sign leaning in the front garden like a tired guest.\n\nI stood on the pavement with my bike and tried to make sense of it. Danny had been at school on Friday. He had borrowed my calculator in maths and said, \"See you Monday,\" and grinned the way he always did, as if the two of us shared a joke nobody else had heard. Now it was Sunday, and his house was empty.\n\nThe back gate was unlocked. I told myself I was only checking.\n\nThe garden looked wrong without its clutter. No football boots by the step, no deflated paddling pool, no washing line strung with his little sisters' socks. The kitchen window was bare, and through it I could see the outline of the room picked out in dust: a rectangle where the fridge had been, a darker patch of wall where the calendar had hung. Someone had swept the floor. Someone had wiped the counters. It was the cleanest I had ever seen it, and that was what frightened me. It looked as if they had wanted to leave nothing at all.\n\nI tried the back door. It opened.\n\nInside, the house echoed. My trainers squeaked on the tiles, and the sound came back to me from every corner, as if the empty rooms were repeating me to make sure I was real. I went upstairs to Danny's room, the box room at the front, where we had spent most of Year 7 building a cardboard city across the floor and arguing about whether it needed an airport.\n\nIt was bare. Not even a drawing pin in the wall. The carpet still held four deep dents where his bed had stood, and I stared at them for a long time, because they were the only proof that anything had happened in that room at all.\n\nI nearly left. I was on the landing when I remembered the loose floorboard.\n\nIt was under the window, the one we had found by accident when Danny dropped a marble and it vanished with a hollow clunk. We called it the vault. We kept our most important things in it: a fossil from a school trip, a five-pound note we were saving for something we never decided on, a list of rules for the cardboard city written in two colours of felt tip.\n\nI knelt and lifted the board.\n\nThe fossil was gone. The money was gone. The rules were gone. In their place lay a single envelope with my name on it, in Danny's terrible handwriting.\n\nMy hands were not quite steady as I opened it. Inside was my calculator, and a page torn from his maths book.\n\nSorry, it said. Dad got the job in Glasgow. We only found out on Thursday and Mum said not to tell anyone till it was definite. I didn't want to say goodbye at school in case I cried in front of Jordan Pike. Here's your calculator. The vault is yours now. Write to me. Address on the back.\n\nI turned the page over. There it was, in green felt tip, underlined twice.\n\nI sat on the bare floor of the empty room and laughed, and the house laughed back at me from every wall. He had left something behind after all. He had left the most important thing: a way to find him.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent narrator, small details that build suspense, and an ending that delivers a discovery or leaves a deliberate question.',
                "Question 6: a personal account that sets out what was believed, shows how the truth came out, and reflects on how it changed the writer's thinking or feelings.",
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
  // PAPER 9: Stories stranger than the truth
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-09',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-09-reading',
        title: 'Section A: Reading',
        description:
          'Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. Gatsby is a rich man who gives enormous parties at his mansion on Long Island, and all summer people have told strange stories about him. Here the narrator, Nick Carraway, explains where Gatsby really came from.\n\nText 2 is a story specially written for this practice paper. It is set in San Isidro, an imaginary town where strange things happen.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-09-q1',
            questionNumber: 1,
            questionText:
              "Look again at Text 1, from the beginning to \"isn't easy to say.\"\n\n(a) Why had the reporter come to Gatsby's door? [1]\n\n(b) Give two of the stories that people told about Gatsby. [2]\n\n(c) What was Gatsby's real name? [1]",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_09}\n\nText 2:\n${EXTRACT_09}`,
            extractSource: `Text 1: ${GATSBY_09_SOURCE} | Text 2: ${EXTRACT_09_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                "(a) He had heard Gatsby's name at his office, in a connection he either would not reveal or did not fully understand, and he came on his day off to see for himself.\n(b) That there was an underground pipe-line to Canada; that Gatsby did not live in a house at all but in a boat that looked like a house, moved secretly up and down the shore.\n(c) James Gatz.",
            },
            markScheme: [
              '(a) 1 mark: he had heard Gatsby\'s name at his office and hurried out "to see", or he wanted a statement from him.',
              '(b) 1 mark for each of: the "underground pipe-line to Canada"; that he lived "in a boat that looked like a house" and was moved secretly along the shore.',
              '(c) 1 mark: James Gatz.',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-09-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last two paragraphs of Text 1, from the paragraph beginning "James Gatz" to the end.\n\nHow does the writer use language and structure to present the moment when James Gatz became Jay Gatsby?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_09,
            extractSource: GATSBY_09_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald presents the change of name as a single, decisive moment, and then reveals that it had been prepared for a long time. The paragraph opens with the plain fact, "James Gatz", followed by a pause and the careful correction "that was really, or at least legally, his name", which suggests that a legal name matters less than the self a person chooses. The change is fixed in time with almost ceremonial precision, "at the age of seventeen and at the specific moment that witnessed the beginning of his career", and the verb "witnessed" personifies the moment, as if it were watching history being made.\n\nThe key sentence is built on a contrast between the two names. "It was James Gatz who had been loafing along the beach" in "a torn green jersey and a pair of canvas pants", but "it was already Jay Gatsby who borrowed a rowboat". The parallel structure, "It was" answered by "but it was already", shows the transformation happening inside one sentence, and the verbs change from the idle "loafing" to the purposeful "borrowed", "pulled out" and "informed".\n\nThe final paragraph explains the change. "I suppose he\'d had the name ready for a long time, even then" shows that the moment was something he had rehearsed. The phrase "his Platonic conception of himself" suggests an ideal self, and the list "a vast, vulgar, and meretricious beauty", with its alliteration on "vast, vulgar", is both admiring and critical. The last clause, "to this conception he was faithful to the end", turns self-invention into a kind of loyalty, and hints that the end of his story is coming.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the correction "that was really, or at least legally, his name" and on the ceremonial precision of "the specific moment that witnessed the beginning of his career".',
                'Analysis of the parallel sentence that sets "James Gatz who had been loafing" against "already Jay Gatsby who borrowed a rowboat", and of the change in the verbs.',
                'Comment on "his Platonic conception of himself", the critical list "a vast, vulgar, and meretricious beauty", and the final "faithful to the end".',
                'Structure: the single decisive moment, then the paragraph that shows it had long been prepared.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-09-q3',
            questionNumber: 3,
            questionText:
              'Look again at Text 2.\n\nExplore how the writer presents the town of San Isidro and the way its people respond to strange events.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents San Isidro as a place where the impossible is ordinary, and the humour of the text comes from the gap between extraordinary events and the calm, matter-of-fact way they are reported.\n\nThe opening sentence sets the tone at once. The first clause states an impossible event, "the river began to flow uphill", and the main clause dismisses it: "nobody in the town of San Isidro thought it especially remarkable". The narrator\'s understatement, "especially remarkable", makes the town\'s calm the real surprise. The river is then personified with a gentle, comic dignity, climbing "with a quiet, unhurried determination, as though it had simply decided that the sea was no longer to its liking". The writer gives the river a will and treats its choice as a matter of taste.\n\nErnesto\'s response shows the town\'s habit in miniature. He "watched for a full minute, then shrugged and filled his bucket", and the short sentence "The water tasted the same." reduces a miracle to a practical check. The only sign of feeling is tucked into a detail, hands "that trembled only slightly", so the writer hints that the calm is learned rather than natural. The general statement that "one learned not to remark upon things that defied explanation" makes it a rule of the community.\n\nThe second paragraph then lists earlier wonders through repetition: "There had been the year the oranges grew square. There had been the week when everyone\'s shadow pointed in the wrong direction." Each impossible event gets one plain sentence, as plain as a report of the weather, which makes the extraordinary sound routine. The third example is longer and stranger, the baby who spoke "in complete sentences from the age of three days" and then "never uttered another word", and its sad ending gives the list a darker note.\n\nThe third paragraph explains the town\'s attitude through comparison. These things happened "in the way that rain happened, or drought, or the slow death of a marriage", a list that moves from weather to human sadness and suggests that the town accepts sorrow as calmly as it accepts magic. The simile "like a shirt buttoned in the wrong holes" makes the town\'s broken rules homely and comic. The doctor, "who had been educated in Lisbon and regretted it daily", stands for reason giving up: his answer to a ghost is to prescribe "camomile tea" and suggest "an extra place at dinner", a kindly, absurd response that treats the dead husband as a guest.\n\nThe final paragraph returns to the river and closes on one last wonder, a letter "written in an ink that changed colour as you read it, addressed to no one and signed by everyone". The paradox of the final phrase leaves the reader with a sense of shared mystery, as if the whole town were part of the magic it refuses to remark upon.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the opening, which sets an impossible event against the understatement "especially remarkable", and of the personified river.',
                'Comment on Ernesto\'s practical response ("The water tasted the same.") and the one hint of feeling in hands "that trembled only slightly".',
                'Comment on the repeated "There had been", which reports wonders as plainly as the weather, and on the darker examples and comparisons ("the slow death of a marriage").',
                'Structure: the river\'s nine days frame the text, and the ending\'s paradox, a letter "addressed to no one and signed by everyone", draws the whole town into the mystery.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-09-q4',
            questionNumber: 4,
            questionText:
              "'Both texts show people who would rather believe a good story than the plain truth.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of how the people in both texts respond to the strange or unexplained\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present stories and the truth\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_09}\n\nText 2:\n${EXTRACT_09}`,
            extractSource: `Text 1: ${GATSBY_09_SOURCE} | Text 2: ${EXTRACT_09_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I agree with the statement for Text 1, where people prefer legends to facts and Gatsby prefers his own invention to his past, but only partly for Text 2, where the people of San Isidro do not so much prefer stories as refuse to explain anything at all.\n\nIn Text 1, stories about Gatsby spread faster than facts. His guests have "become authorities upon his past" simply by accepting "his hospitality", and the ironic word "authorities" mocks their confidence. Fitzgerald calls their tales "Contemporary legends", such as the "underground pipe-line to Canada" and the "persistent story that he didn\'t live in a house at all, but in a boat that looked like a house". These are better stories than the truth, which is that he is "James Gatz of North Dakota". Most strikingly, Gatsby himself prefers a story: he "invented just the sort of Jay Gatsby that a seventeen year-old boy would be likely to invent", and "to this conception he was faithful to the end". His parents were "shiftless and unsuccessful farm people" whom "his imagination had never really accepted", so he chose a better story for his own life. As a reader I find this both admirable and sad.\n\nIn Text 2 the townspeople seem at first to do the opposite. When the river flows uphill, "nobody ... thought it especially remarkable", and "one learned not to remark upon things that defied explanation". They do not invent explanations; they simply carry on, as Ernesto "shrugged and filled his bucket". However, the town\'s whole way of life is a kind of story. San Isidro "existed in a fold of the world where the ordinary rules applied only loosely", and the doctor has "abandoned the attempt to find medical explanations". Rather than face the plain truth that something is wrong, the town accepts the strange and makes room for it, so that a widow is told to "set an extra place at dinner". In that sense they choose a comforting story over a disturbing truth.\n\nThe writers present this in different ways. Fitzgerald\'s narrator is ironic and analytical, using formal phrases such as "Platonic conception of himself" to examine why Gatsby invented himself, and his tone mixes admiration with judgement. The writer of Text 2 uses the deadpan style of magical realism, reporting impossible events in plain sentences such as "There had been the year the oranges grew square", so that the reader, too, is drawn into accepting them. Both writers use lists to show how many stories or wonders surround their subjects, and both end on an image of something lasting or mysterious: Gatsby\'s dream, kept "to the end", and a letter "addressed to no one and signed by everyone".\n\nOverall, I agree more for Text 1. Gatsby and the people around him actively prefer good stories to plain facts. The people of San Isidro accept wonders rather than inventing them, but they too prefer living inside a story to asking what the truth might be. Both texts suggest that a story can be a kind of shelter.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds; many answers will find it truer of Text 1.',
                'Text 1: the guests as "authorities upon his past", the "Contemporary legends", and Gatsby\'s own self-invention, to which he was "faithful to the end".',
                'Text 2: a town that will not "remark upon things that defied explanation", whose acceptance of the strange is itself a comforting story.',
                'Comparison of methods: an ironic, analytical narrator against the deadpan style of magical realism; lists of rumours and wonders in both; mysterious, lasting images at the end of each.',
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
        id: 'ocr-p2-09-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-09-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Day the River Turned'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- make strange events seem real through precise detail\n- show how people react to what they cannot explain.\n\nOR\n\nQuestion 6\nWrite about a time when something happened that you could not explain.\n\nIn your writing you could:\n- describe what happened, and where\n- explain how you and the people around you reacted\n- reflect on what you think about it now.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                'Question 6\n\nThe summer I was eleven, our tortoise came home.\n\nThat does not sound like much, so I should explain. Our tortoise, Archibald, had disappeared three years earlier, during a heatwave, when someone left the side gate open. We searched for weeks. My dad walked the alleys behind our street with a torch every evening, calling his name, which was pointless, because tortoises do not come when they are called, and because Archibald had never in his life come when he was called. We put up posters. We knocked on doors. In the end Mum sat me down at the kitchen table and told me, very gently, that he had probably found a quiet place and gone to sleep for good, and that we should remember him as he was: slow, stubborn and very fond of strawberries.\n\nI cried for a day and then, the way you do at eight, I mostly forgot.\n\nThree years later, on a hot Sunday in July, I went out to the garden to fetch the paddling pool and found him sitting on the patio.\n\nI knew him at once. He had a chip in the edge of his shell, near his front left leg, shaped like a tiny bite, from the day my cousin dropped him on the path when we were both five. He had the same pale scratch across the top that looked like a lightning bolt. He was a little bigger and a lot dustier, and he was sitting in exactly the spot where we used to leave his strawberries, staring at the back door as if he were waiting for room service.\n\nI shrieked so loudly that next door\'s dog started barking.\n\nMy parents came running. Dad stood very still with his hand over his mouth. Mum knelt on the patio in her dressing gown and turned Archibald over in her hands, checking the chip, the scratch, the funny pale patch under his chin. "It can\'t be," she kept saying. "It can\'t be." But it was.\n\nNobody has ever explained it. Our garden is walled on three sides, with a locked gate on the fourth. The nearest open ground is a scrubby park half a mile away, across two roads. The vet said that tortoises can survive a long time if they find food and shelter, and that they sometimes have a surprising sense of direction, but she also said, frowning at her notes, that she had never heard of one finding its way back after three years.\n\nWe asked the neighbours. Nobody had seen him. Nobody had been looking after him. An elderly man two doors down told us, very seriously, that his cat had once come back after a fortnight, and that animals know where they belong. My uncle said someone must have found him and dropped him over the wall as a joke. But nobody we knew would have recognised him, and nobody we asked would admit to it.\n\nI think about it more than I expected to. Part of me wants a sensible answer: a kind stranger, a gap in the wall we never found, a tortoise who simply walked very slowly in the right direction for a very long time. Another part of me hopes we never find out. Most things in life come with an explanation attached. It is strangely comforting to have one thing that does not, sitting on the patio in the sunshine, chewing a strawberry as if he had never been away.',
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a consistent point of view, precise detail that makes the strange believable, and a clear picture of how people react to it.',
                'Question 6: a personal account that describes the event and its setting closely, shows how people reacted, and reflects on it from the present.',
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
  // PAPER 10: Beauty that cannot last
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ocr-p2-10',
    board: 'OCR',
    paperNumber: 2,
    title: 'Component 02: Exploring Effects and Impact',
    subtitle: 'English Language J351/02',
    code: 'J351/02',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'ocr-p2-10-reading',
        title: 'Section A: Reading',
        description:
          "Read Text 1 and Text 2, then answer all four questions in this section. Spend about 12 minutes reading the two texts before you start. OCR advises about one hour for the whole section.\n\nText 1 is from The Great Gatsby, a novel by F. Scott Fitzgerald published in 1925. Gatsby has been telling the narrator, Nick Carraway, about the past, and about Daisy, whom he loved five years before, when he was a young army officer.\n\nText 2 is a story specially written for this practice paper, in the manner of Virginia Woolf's novel To the Lighthouse (1927). It borrows Woolf's characters, the Ramsays, and two lines of their dialogue, but the passage is not Woolf's writing.",
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-10-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first two paragraphs of Text 1, from "He talked a lot about the past" to "the incomparable milk of wonder."\n\n(a) What did Gatsby want to recover, according to Nick? [1]\n\n(b) Give two details that describe the autumn night five years before. [2]\n\n(c) What did Gatsby see the blocks of the sidewalk form? [1]',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Text 1:\n${GATSBY_10}\n\nText 2:\n${EXTRACT_10}`,
            extractSource: `Text 1: ${GATSBY_10_SOURCE} | Text 2: ${EXTRACT_10_SOURCE}`,
            modelAnswers: {
              'Grade 4-5':
                '(a) Something, perhaps some idea of himself, that had gone into loving Daisy.\n(b) Any two of: the leaves were falling; the sidewalk was white with moonlight; it was a cool night; there was a mysterious excitement in the air; the lights in the houses were humming out into the darkness; there was a stir and bustle among the stars.\n(c) A ladder, leading to a secret place above the trees.',
            },
            markScheme: [
              '(a) 1 mark: "some idea of himself" that had gone into loving Daisy, or something he had lost in loving her.',
              '(b) 1 mark for each of two of: "the leaves were falling"; the sidewalk "white with moonlight"; "a cool night"; its "mysterious excitement"; the lights "humming out into the darkness"; "a stir and bustle among the stars".',
              '(c) 1 mark: a ladder (to "a secret place above the trees").',
              'Credit only answers drawn from the lines named. An answer line that packs in several guesses earns nothing.',
            ],
          },
          {
            id: 'ocr-p2-10-q2',
            questionNumber: 2,
            questionText:
              'Look again at the last paragraph of Text 1, from "His heart beat faster" to the end.\n\nHow does the writer use language and structure to present the moment of the kiss?\n\nBack up your points with short quotations from these lines and relevant subject terminology.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: GATSBY_10,
            extractSource: GATSBY_10_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'Fitzgerald presents the kiss as a moment of enormous, almost religious importance, and he delays it to make it feel momentous. The paragraph opens with physical tension, "His heart beat faster and faster", where the repeated "faster" mimics a quickening pulse. Instead of moving straight to the kiss, the next sentence explains what it will cost: "when he kissed this girl, and forever wed his unutterable visions to her perishable breath, his mind would never romp again like the mind of God". The contrast between "unutterable visions" and "perishable breath" sets something infinite against something mortal, and the verb "wed" makes the kiss a kind of marriage that cannot be undone.\n\nThe structure then slows time. "So he waited", and the metaphor of "the tuning-fork that had been struck upon a star" makes the pause musical and cosmic, as if the universe were holding a note. Only then comes the short, simple sentence "Then he kissed her." After the long build-up, its plainness gives the moment great force.\n\nThe final sentence turns to transformation. The simile "she blossomed for him like a flower" makes Daisy bloom into the shape of his dream, and the religious noun "incarnation" suggests that his idea has taken bodily form in her. The reader senses both the beauty of the moment and its danger: Gatsby has tied his limitless dream to one "perishable" person.',
            },
            markScheme: {
              'What to reward': [
                'Comment on the physical build-up ("His heart beat faster and faster") and the delay before the kiss itself.',
                'Analysis of the contrast between "unutterable visions" and "perishable breath", and of the verb "wed".',
                'Comment on the metaphor of "the tuning-fork that had been struck upon a star" and the plain sentence "Then he kissed her."',
                'Comment on the simile "like a flower" and the religious noun "incarnation" as the paragraph\'s ending.',
              ],
              'Levels (6 marks, one mark a level)': Q2_LEVELS,
            },
          },
          {
            id: 'ocr-p2-10-q3',
            questionNumber: 3,
            questionText:
              "Look again at Text 2.\n\nExplore how the writer presents Mrs Ramsay's thoughts and feelings.\n\nWrite about both the language and the structure of the text, backing up your points with short quotations and relevant subject terminology.",
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 8-9':
                'The writer presents Mrs Ramsay\'s mind as calm on the surface and full of conflict beneath, moving between a small domestic moment and large questions about truth, hope and loss.\n\nThe opening paragraph presents her through quiet routine. The short first sentence, "Mrs Ramsay sat by the window, knitting.", is still and simple, and the adverbs "softly, rhythmically" make the knitting a soothing background, a sound "so much a part of the house that the children no longer heard it". But the paragraph ends on tension: the trip to the lighthouse is "a matter of painful uncertainty", and the adjective "painful" reveals how much she cares.\n\nThe second paragraph explains the source of that pain. Her husband\'s refusal is described in harsh, abstract language, "that particular precision of cruelty that he reserved for the destruction of hope", which shows that she sees him as clinical and cold. His words, "It won\'t be fine", are set against her son\'s "anguished expectation", and the long parenthesis about the boy, "her youngest, her most sensitive", interrupts the sentence just as her love interrupts her husband\'s logic. Her reply comes before she can stop it, since "she had felt the words forming", which presents her kindness as instinct rather than choice.\n\nThe third paragraph shows her inner argument. She admits the lie plainly, "She knew it was a lie, or at least an exaggeration", and knows "that her husband despised her for it". The repetition of "Perhaps" at the start of two sentences shows her weighing his view honestly. Then she turns the argument round with three questions: "But what was the alternative?", "To strip every moment of its possibility?" and "To meet a six-year-old\'s hope with a barometric reading?" The contrast between "hope" and "barometric reading" sets feeling against measurement, and the questions show her defending her instinct to protect a child\'s hope.\n\nThe fourth paragraph moves from argument to perception, and her feelings deepen into melancholy. The colours "deepening into something richer and stranger" make the dusk beautiful, but the phrase "slow collapse into dusk" makes it a kind of ending. Her central thought, "that beauty was always most intense at the moment of its disappearance, that to look at something lovely was already to mourn it", turns the evening into a meditation on loss.\n\nThe final paragraph returns to the knitting and draws the two sides of her together. She "thought about nothing, and everything", a paradox that captures a mind both at rest and full. The closing simile, "her mind moving like water around the fixed stones of duty and love", presents her thoughts as fluid and her obligations as solid, and the pairing "terrible, luminous brevity" ends the text on the same mixture of beauty and sorrow that runs through her whole character.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of the quiet routine of the opening ("softly, rhythmically") and of the tension in "a matter of painful uncertainty".',
                'Comment on the harsh language for her husband ("precision of cruelty") against the tenderness for her son, and on her reply as instinct ("she had felt the words forming").',
                'Comment on her inner argument: the repeated "Perhaps", the three questions, the contrast of "hope" and "barometric reading".',
                'Structure: from routine to conflict to argument to the dusk and its thought about beauty and loss, then back to the knitting in the final paragraph.',
                'Answers that deal with only language or only structure stay in the lower levels; the top levels need detailed, fairly even attention to both.',
              ],
              'Levels (12 marks, two marks a level)': Q3_LEVELS,
            },
          },
          {
            id: 'ocr-p2-10-q4',
            questionNumber: 4,
            questionText:
              "'Both texts suggest that the most beautiful moments are also the saddest.'\n\nSay how far you agree with this statement, and why.\n\nIn your answer:\n- give your impressions of the moments of beauty in both texts\n- explain the effect the two texts have on you as a reader\n- compare the methods each writer uses to present beauty and sadness\n- quote from both texts to back up your points.",
            marks: 18,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: `Text 1:\n${GATSBY_10}\n\nText 2:\n${EXTRACT_10}`,
            extractSource: `Text 1: ${GATSBY_10_SOURCE} | Text 2: ${EXTRACT_10_SOURCE}`,
            modelAnswers: {
              'Grade 8-9':
                'I largely agree. Both texts present moments of great beauty that carry a sense of loss within them, although in Text 1 the sadness lies in what the beautiful moment will cost, while in Text 2 it lies in the moment\'s disappearing.\n\nIn Text 1 the autumn night is one of the most beautiful scenes Gatsby remembers. The sidewalk is "white with moonlight", there is "a stir and bustle among the stars", and Gatsby sees the sidewalk form "a ladder" to "a secret place above the trees". The language of wonder, "the incomparable milk of wonder", makes the moment feel limitless. Yet sadness runs through it. Gatsby knows that when he kisses Daisy "his mind would never romp again like the mind of God", so the kiss is also an ending, a loss of freedom. The phrase "her perishable breath" reminds us that Daisy is mortal and changeable, unlike his dream. The frame of the passage is sad too: Nick gathers that Gatsby talks about the past because "he wanted to recover something", which shows that the beautiful moment is already lost and that he is trying to return to it.\n\nIn Text 2 the link between beauty and sadness is stated directly. Mrs Ramsay feels "that beauty was always most intense at the moment of its disappearance, that to look at something lovely was already to mourn it". The dusk is beautiful, with "the blues of the delphiniums, the fierce reds of the hot pokers", but it is also "the failing light" and a "slow collapse into dusk". The ending\'s "terrible, luminous brevity of a summer\'s day" combines the two feelings in a single phrase. Unlike Text 1, however, the sadness here also comes from other people: from her husband\'s "precision of cruelty", and from her son\'s hope about the lighthouse, which she fears will be disappointed.\n\nThe writers\' methods are alike in some ways. Both use light: Fitzgerald\'s moonlight and stars, the changing evening light of Text 2. Both use contrast and paradox, Fitzgerald setting "unutterable visions" against "perishable breath", and the writer of Text 2 describing a mind that thinks "about nothing, and everything". However, the viewpoints differ. In Text 1 the moment is a memory, reported by Nick as Gatsby told it, so it is already in the past and shaped by longing. Text 2 stays inside Mrs Ramsay\'s mind in the present, as the evening fades around her, so the reader feels the beauty and the loss at the same moment as she does. Fitzgerald\'s sentences build to a climax, "Then he kissed her.", while those of Text 2 flow and circle like "water around the fixed stones", mirroring a mind that moves rather than arrives.\n\nOverall, I agree that both texts make their most beautiful moments sad, but in different ways. In Text 1 the beauty is the beginning of a loss that Gatsby cannot yet see; in Text 2 the beauty and the loss are felt at the very same time. For me, Text 2 states the idea more movingly, because Mrs Ramsay understands it, whereas Gatsby does not.',
            },
            markScheme: {
              'What to reward': [
                'A clear verdict on how far the statement holds, kept up to the end.',
                'Text 1: the beauty of the remembered night, set against what the kiss will cost and the "perishable" person it is tied to; the sense, in "he wanted to recover something", that what he loved is already lost.',
                'Text 2: beauty "most intense at the moment of its disappearance", the dusk as "slow collapse", and sadness that also comes from other people.',
                "Comparison of methods: light and paradox in both; a remembered moment reported at a distance against a present moment inside a character's mind; a climax against a flowing, circling structure.",
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
        id: 'ocr-p2-10-writing',
        title: 'Section B: Writing',
        description:
          'Answer ONE question from this section: Question 5 or Question 6. Both tasks are linked to the ideas in the reading texts. OCR advises about one hour for this section, including time to plan your writing and to check it at the end.\n\nYou are marked on content and organisation (24 marks) and on technical accuracy: spelling, punctuation, vocabulary and sentences (16 marks).',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-10-q5',
            questionNumber: 5,
            label: 'Q5 or Q6',
            questionText:
              "Answer ONE of the following.\n\nEITHER\n\nQuestion 5\nWrite a story with the title 'The Last Evening of Summer'.\n\nIn your writing you could:\n- choose a narrator and a clear point of view\n- bring the place and its light to life in close detail\n- suggest what the characters feel without stating it directly.\n\nOR\n\nQuestion 6\nWrite about a moment you wished could last for ever.\n\nIn your writing you could:\n- describe the moment, the place and the people with you\n- explain why it mattered so much\n- reflect on what you feel when you look back on it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]",
            marks: 40,
            suggestedTimeMinutes: 60,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "Question 6\n\nThe night before my sister left for university, we climbed out of her bedroom window and sat on the garage roof.\n\nWe were not supposed to. Mum had banned the garage roof years ago, after I got stuck up there aged six and the fire brigade had to come, an event my family has never let me forget. But Mia said rules did not count on your last night, and I was fourteen and would have followed her anywhere, so I squeezed through the window after her and we sat on the warm felt with our knees pulled up, side by side, like two birds on a wire.\n\nIt was the end of September, and the evening still held the last of the summer's heat. The sky over the rooftops was the colour of an apricot, fading at the edges into a soft, bruised blue. Below us, our street was doing its ordinary evening things: Mr Lewis washing his car for the second time that week, the twins from number 9 skidding their bikes along the pavement, someone's barbecue sending up a thin grey thread of smoke that smelled of sausages and charcoal. I remember thinking that I had seen all of this a thousand times and never once actually looked at it.\n\nMia had a bag of the terrible fizzy sweets we used to buy with our pocket money, the ones that turned your tongue blue. We ate them all. We talked about nothing in particular: a teacher we had both had, the summer we tried to build a raft, the time Dad reversed into the hedge. Every so often we stopped talking, and the quiet was not awkward. It was full.\n\nThen the street lamps came on, one by one, all the way down the hill, as if someone were walking along lighting them. Mia went very still.\n\n\"I'm going to miss this,\" she said.\n\nI did not answer, because I did not trust my voice. I just leaned against her shoulder and watched the sky turn from apricot to lavender to a deep, grainy blue, and I tried, with everything I had, to make the moment stop. I wanted to stay on that roof for ever: the warm felt, the blue tongues, the lamps, my sister's shoulder, the last summer that we would both live in the same house.\n\nOf course, it did not stop. The light went. Mum called us in for supper, then called again, more sharply, having guessed where we were. We climbed back through the window, scraping our knees and laughing.\n\nThe next morning Mia packed the car, hugged me too hard on the drive, and was gone by ten.\n\nShe comes home at Christmas and in the summer, and we get on better now than we ever did when she lived here. But we have never sat on the garage roof again. I think we both know it would not be the same, and neither of us wants to find out.\n\nI used to wish that evening could have lasted for ever. Now I think I understand that part of what made it beautiful was that it could not. We both knew it was the last one. That was why we looked so hard.",
            },
            markScheme: {
              'What to reward': [
                'Question 5: a story that answers to its title, with a clear point of view, close description of setting and light, and feelings suggested rather than stated.',
                'Question 6: a personal account that recreates the moment and the people in it, makes clear why it mattered, and reflects on it from the present.',
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
