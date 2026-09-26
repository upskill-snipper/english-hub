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
 *     questions keep their wording.
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

const AQA_P2_SOURCE_A = `I have walked through the streets of every major city in Europe and I can tell you this: nowhere on this continent do we treat our homeless population with such calculated indifference as we do in Britain. Last winter, while temperatures plummeted to minus eight degrees, I counted fourteen people sleeping in doorways within a single mile of Westminster - fourteen human beings curled under cardboard and sleeping bags while our elected representatives debated the finer points of trade policy less than a hundred yards away.

The statistics are damning. Rough sleeping in England has increased by 169% since 2010. Over 700 people died while homeless last year alone. Behind every number is a name, a story, a sequence of events that could, with only the slightest alteration, have happened to any one of us. The mortgage payment missed because of illness. The relationship that fractured. The mental health crisis that went unsupported. These are not alien experiences. They are profoundly, terrifyingly ordinary.

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

const EDEXCEL_P1_EXTRACT = `She was not beautiful in any conventional sense. Her face was too angular, her mouth too wide, her eyes set too deep beneath brows that seemed permanently raised in a question that nobody had yet answered. But when she entered a room, the air changed. Conversations faltered. Men who had been holding forth on matters of great importance suddenly lost the thread of their arguments and stood foolishly, mid-sentence, watching her cross the floor with the grace of someone who had never once doubted where she was going.

Elena had learned early that the world sorted women into categories - the pretty ones, the clever ones, the dangerous ones - and that the worst thing you could be was uncategorisable. At school, teachers had not known what to do with her. She was not disruptive, exactly, but her silence had a quality that unsettled them, as though she were conducting a private assessment of their competence and finding them wanting.

Now, at twenty-seven, she worked in a gallery on the South Bank, surrounded by paintings worth more than most people's houses, and she understood something that her younger self had only intuited: that power was not about what you did or said, but about what you withheld. The pause before answering. The steady gaze that refused to look away first. The small, deliberate smile that gave nothing away.

The phone rang. She let it ring four times before picking up. "Whitfield Gallery," she said. Her voice was calm, unhurried, precise. On the other end, someone was breathing quickly.

"Elena? It's Marcus. We need to talk. Something has happened."

She held the receiver away from her ear for a moment, studying the painting on the wall opposite - a Rothko, all burning reds and deep, ominous blacks. Then she brought it back.

"Go on," she said.`

const EDEXCEL_P1_EXTRACT_SOURCE = 'Original literary fiction composition'

const EDEXCEL_P2_SOURCE_A = `Social media has not merely changed how teenagers communicate - it has fundamentally restructured the architecture of adolescent identity. Where previous generations constructed their sense of self through face-to-face interaction, through the slow accumulation of shared experiences and private conversations, today's young people are building their identities in public, in real time, before an audience of hundreds.

The implications are profound. A 2024 study by the Royal Society for Public Health found that 70% of young people aged 14-17 reported that social media made them feel worse about their appearance, while 62% said it increased their anxiety about social situations. The paradox is stark: the very platforms designed to connect us are making young people feel more isolated, more inadequate, and more anxious than any previous generation.

I am not a technophobe. I recognise that social media offers genuine benefits - community, creativity, connection across distance. But we must be honest about the costs. When a thirteen-year-old cannot eat breakfast without first checking how many likes her post received overnight, something has gone fundamentally wrong. When a fifteen-year-old boy measures his worth by his follower count, we are not witnessing normal adolescent development. We are witnessing a crisis.`

// FACT-CHECK 2026-04: source attribution corrected per verified-library audit
const EDEXCEL_P2_SOURCE_A_REF =
  'Original opinion piece composition (anonymous, contemporary education-feature style, c.2024)'

// Gutenberg #55998 (Volume 1), "Watercress Girl", the two paragraphs of
// Mayhew's own account before her statement, cut by script.
const EDEXCEL_P2_SOURCE_B = `The little watercress girl who gave me the following statement, although only eight years of age, had entirely lost all childish ways, and was, indeed, in thoughts and manner, a woman. There was something cruelly pathetic in hearing this infant, so young that her features had scarcely formed themselves, talking of the bitterest struggles of life, with the calm earnestness of one who had endured them all. I did not know how to talk with her. At first I treated her as a child, speaking on childish subjects; so that I might, by being familiar with her, remove all shyness, and get her to narrate her life freely. I asked her about her toys and her games with her companions; but the look of amazement that answered me soon put an end to any attempt at fun on my part. I then talked to her about the parks, and whether she ever went to them. “The parks!” she replied in wonder, “where are they?” I explained to her, telling her that they were large open places with green grass and tall trees, where beautiful carriages drove about, and people walked for pleasure, and children played. Her eyes brightened up a little as I spoke; and she asked, half doubtingly, “Would they let such as me go there—just to look?” All her knowledge seemed to begin and end with water-cresses, and what they fetched. She knew no more of London than that part she had seen on her rounds, and believed that no quarter of the town was handsomer or pleasanter than it was at Farringdon-market or at Clerkenwell, where she lived. Her little face, pale and thin with privation, was wrinkled where the dimples ought to have been, and she would sigh frequently. When some hot dinner was offered to her, she would not touch it, because, if she eat too much, “it made her sick,” she said; “and she wasn’t used to meat, only on a Sunday.”

The poor child, although the weather was severe, was dressed in a thin cotton gown, with a threadbare shawl wrapped round her shoulders. She wore no covering to her head, and the long rusty hair stood out in all directions. When she walked she shuffled along, for fear that the large carpet slippers that served her for shoes should slip off her feet.`

const EDEXCEL_P2_SOURCE_B_REF =
  'Henry Mayhew, London Labour and the London Poor, Volume 1 (1851), from "Watercress Girl", in the text of the enlarged edition of 1861'

// ─── OCR Extracts ────────────────────────────────────────────────────────────

const OCR_P1_SOURCE = `Dear Sir,

I write to you in a state of considerable agitation regarding the proposed demolition of the Elm Street Community Centre, a building which has served this neighbourhood faithfully for over sixty years. I have attended meetings, celebrations, and - in times of personal difficulty - support groups within its walls, and I can assure you that its value to this community cannot be measured in the cold language of property development and profit margins.

Last Tuesday evening, I sat in the main hall as Mrs Patricia Ogden, aged eighty-three, read a poem she had written about her late husband. The room was full. People who had never spoken to each other before found themselves united by a single act of human vulnerability. That is what the community centre does: it creates the conditions for connection.

You tell us that the building is "no longer fit for purpose." I would ask: whose purpose? The roof leaks, certainly, and the heating is unreliable, and the car park has potholes that could swallow a small dog. But fitness for purpose is not only a matter of bricks and plumbing. It is a matter of what happens within those walls - and what happens within those walls is irreplaceable.

I urge you to reconsider. A new block of luxury apartments will bring profit. It will not bring community.

Yours faithfully,
Margaret Thornton`

const OCR_P1_SOURCE_REF =
  'Specially written for this practice paper (not a published text): a letter to a local council planning department'

// ─── WJEC Extract ────────────────────────────────────────────────────────────

const WJEC_P1_EXTRACT = `The kitchen smelled of burnt toast and something else - something sharp and chemical that Nathan could not identify. His mother stood at the counter with her back to him, very still, holding a letter in both hands. The radio was playing, some cheerful pop song about sunshine and summer, and the contrast between its bright melody and the silence of the kitchen was almost unbearable.

"Mum?" he said.

She did not turn around. He watched her shoulders rise and fall - one long, controlled breath - and then she folded the letter carefully, once, twice, three times, until it was small enough to fit in her palm. She slid it into her apron pocket and turned to face him with a smile that was almost, but not quite, convincing.

"Breakfast," she said. "Sit down."

Nathan sat. His mother moved around the kitchen with the efficient grace of someone performing a routine so familiar it required no thought: kettle on, bread in toaster, butter from the fridge. But her hands were shaking. The butter knife rattled against the plate. She set it down carefully, pressing her fingers flat against the counter as if to steady them - or to steady herself.

"What was that letter?" Nathan asked.

"Nothing important." She placed the toast in front of him. "Eat."

He ate. But the word "nothing" sat between them like a third person at the table, taking up space, breathing the same air, waiting to be acknowledged.`

const WJEC_P1_EXTRACT_SOURCE = 'Original literary fiction composition'

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
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EDEXCEL_P1_EXTRACT_SOURCE}`,
        totalMarks: 24,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: 'edexcel-p1-q1',
            questionNumber: 1,
            questionText:
              'Read the first paragraph of the extract.\n\nList four things about the woman from this part of the source.',
            marks: 4,
            suggestedTimeMinutes: 3,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. She was not beautiful in a conventional sense. 2. Her face was too angular. 3. When she entered a room, conversations faltered. 4. She moved with grace.',
            },
            markScheme: [
              '1 mark per valid point, maximum 4',
              'Must be from the specified paragraph only',
            ],
          },
          {
            id: 'edexcel-p1-q2',
            questionNumber: 2,
            questionText:
              "Read the first paragraph of the extract again.\n\nList two things you learn about men's reactions to the woman.",
            marks: 2,
            suggestedTimeMinutes: 2,
            questionType: 'short-answer',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. They lost the thread of their arguments. 2. They stood foolishly, mid-sentence, watching her.',
            },
            markScheme: [
              '1 mark per valid point, maximum 2',
              "Must relate to men's reactions specifically",
            ],
          },
          {
            id: 'edexcel-p1-q3',
            questionNumber: 3,
            questionText:
              'Read the extract from the paragraph beginning "Elena had learned early" to the end. Analyse how the writer uses language to present Elena as a powerful and controlled character.\n\nSupport your views with detailed reference to the text.',
            marks: 6,
            suggestedTimeMinutes: 10,
            questionType: 'analysis',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer shows Elena is powerful by saying she understood "that power was not about what you did or said, but about what you withheld." This shows she is clever and knows how to control situations. The listing of "The pause before answering. The steady gaze that refused to look away first. The small, deliberate smile that gave nothing away." shows all the specific ways she uses to maintain control. The adjective "deliberate" suggests everything she does is planned and careful.',
              'Grade 6-7':
                'The writer constructs Elena\'s power through a rhetoric of deliberate absence. The key insight - "power was not about what you did or said, but about what you withheld" - redefines power as negative space, and the subsequent tricolon ("The pause... The steady gaze... The small, deliberate smile") catalogues three forms of controlled restraint. Each noun phrase begins with the definite article "The," lending an almost instructional quality, as though these are techniques to be studied. The verb "withheld" is significant: it implies that Elena possesses more than she reveals, that her restraint is active choice rather than limitation. The phone scene dramatises this: "She let it ring four times" - the specificity of "four" suggests counting, calculation, a refusal to appear eager. Her voice is described through three adjectives - "calm, unhurried, precise" - each a form of control.',
              'Grade 8-9':
                'The writer presents Elena\'s power as fundamentally epistemological - a control over knowledge, disclosure, and the terms of engagement. The abstract noun "power" is redefined through negation: "not about what you did or said, but about what you withheld." This inversion is radical: in a society that equates power with action and speech, Elena locates it in omission. The tricolon that follows - "The pause before answering. The steady gaze that refused to look away first. The small, deliberate smile that gave nothing away" - is structured as three sentence fragments, each a performed withholding of complete syntax. The definite articles create the impression of a codified system, while the relative clauses ("that refused," "that gave nothing away") attribute agency to the gestures themselves. The Rothko painting - "all burning reds and deep, ominous blacks" - functions as an objective correlative for Elena\'s internal state: passionate intensity contained within absolute stillness. The final exchange crystallises the dynamic: Marcus is "breathing quickly" (involuntary, uncontrolled), while Elena\'s two-word response, "Go on," is a masterclass in narrative economy - she cedes nothing while compelling full disclosure from the other party.',
            },
            markScheme: [
              'Analyses specific language choices and their effects',
              'Comments on how the writer presents character',
              'Uses relevant subject terminology',
              'Embeds quotations within analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'edexcel-p1-q4',
            questionNumber: 4,
            questionText:
              'Read the whole extract.\n\n"The writer successfully creates a character who is fascinating and unpredictable. The reader is drawn in because we never quite know what Elena will do next."\n\nTo what extent do you agree with this view?\n\nYou should:\n- consider the writer\'s use of language, form, and structure\n- evaluate how the writer creates effects\n- support your views with quotations from the text.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EDEXCEL_P1_EXTRACT,
            extractSource: EDEXCEL_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that Elena is fascinating because the writer gives us lots of detail about how she affects people but we never fully understand her. The description of her as "not beautiful in any conventional sense" makes us curious about what she does look like. The fact that conversations stop when she enters a room shows she has a powerful effect. However, I think we do learn quite a lot about her - we know she works in a gallery, she is twenty-seven, and she has learned to use silence as power. The phone call at the end creates suspense because we want to know what has happened. Overall, I mostly agree because the writer keeps some mystery about Elena throughout.',
              'Grade 6-7':
                'I substantially agree with the statement, though I would refine the claim: Elena is fascinating not because she is unpredictable but precisely because she is supremely predictable in her control - and it is the tension between this controlled surface and the unknown depths beneath it that creates fascination. The writer structures the extract to reveal Elena in layers: the external effect (paragraph 1), the backstory (paragraph 2), the philosophy (paragraph 3), and the dramatic test (paragraphs 4 to 7). Each layer offers apparent disclosure while actually deepening the mystery. We learn what Elena does but never what she feels. The Rothko painting - "burning reds and deep, ominous blacks" - is the closest we get to interiority, and even this is indirect. The final phone call is structurally brilliant: Marcus\'s "Something has happened" introduces narrative urgency, but Elena\'s response ("Go on") refuses to meet it. The reader is left, like Marcus, waiting for Elena to reveal what she knows - which is exactly where her power lies.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              "Analyses writer's methods (language, structure, form)",
              'Uses well-selected textual evidence',
              'Shows nuanced understanding of characterisation',
              'Top band: perceptive, critical evaluation',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p1-writing',
        title: 'Section B: Imaginative Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'edexcel-p1-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your writing:\n\nEither:\n(a) Write about a time when a phone call changed everything.\nYour response could be real or imagined. You may wish to base your response on the extract.\n\nOr:\n(b) The Waiting Room.\nWrite a piece of imaginative writing with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of imaginative writing with: a recognisable structure; use of descriptive and narrative techniques; varied vocabulary; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere and pace; crafted use of imagery and sensory detail; structural choices for effect; consistent accuracy in SPaG with ambitious constructions.',
              'Grade 8-9':
                'An assured, sophisticated piece with: a distinctive voice; precise, original imagery; masterful structural control; extensive vocabulary deployed with precision; technical virtuosity throughout.',
            },
            markScheme: [
              'AO5 (24 marks): Communication, register, organisation',
              'AO6 (16 marks): SPaG accuracy, sentence variety, ambitious vocabulary',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EDEXCEL ENGLISH LANGUAGE PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'edexcel-lang-p2',
    board: 'Edexcel',
    paperNumber: 2,
    title: 'Paper 2: Non-Fiction and Transactional Writing',
    subtitle: 'English Language 1EN0/02',
    code: '1EN0/02',
    totalTimeMinutes: 125,
    totalMarks: 96,
    sections: [
      {
        id: 'edexcel-p2-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EDEXCEL_P2_SOURCE_A_REF}\nSource B: ${EDEXCEL_P2_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'edexcel-p2-q1',
            questionNumber: 1,
            questionText:
              'Read again the first paragraph of Source A.\n\nChoose four statements below which are TRUE.\n\nA) Social media has changed how teenagers communicate.\nB) Previous generations built identity through face-to-face interaction.\nC) Young people build identities in private.\nD) Identity formation now happens in real time.\nE) The audience is usually small.\nF) Previous generations formed their sense of self quickly.\nG) Social media was designed for teenagers only.\nH) Identity construction now happens in public.',
            marks: 4,
            suggestedTimeMinutes: 4,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, B, D, H - A: "Social media has not merely changed how teenagers communicate." B: "previous generations constructed their sense of self through face-to-face interaction." D: "in real time." H: "building their identities in public."',
            },
            markScheme: ['1 mark per correct answer, maximum 4'],
          },
          {
            id: 'edexcel-p2-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nThe writers of both texts express concern about young people. Use details from both sources to write a summary of the concerns expressed.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are worried about young people, but for different reasons. Source A is concerned that social media is harming teenagers\' mental health: "70% of young people aged 14-17" said it made them "feel worse about their appearance". Source B, by Henry Mayhew, is worried about a poor eight-year-old girl who sells watercress in the streets. He says she "had entirely lost all childish ways", because she has to work instead of play. When he talks about the parks, she asks, "where are they?" Both writers worry that young people are missing out on a normal childhood. Source A describes a thirteen-year-old who "cannot eat breakfast without first checking" her likes, and Mayhew describes a child who is cold and poorly fed, with a face "pale and thin with privation".',
              'Grade 6-7':
                'Both writers express concern that young people are losing something essential, but they locate the danger in different places. The writer of Source A sees a psychological threat from technology: social media has "fundamentally restructured the architecture of adolescent identity", and the statistics (70% feel worse about their appearance, 62% more anxious about social situations) present the harm as damage to confidence and wellbeing. Mayhew\'s concern, writing in 1851, is more basic: an eight-year-old girl who sells watercress has "entirely lost all childish ways" and is "in thoughts and manner, a woman". Poverty has taken her childhood. She does not understand his questions about "her toys and her games", does not know where the parks are, and "All her knowledge seemed to begin and end with water-cresses". Her body shows the cost, her face "pale and thin with privation", her feet in "large carpet slippers" in severe weather. Both writers suggest that childhood itself is being cut short. In Source A a thirteen-year-old "cannot eat breakfast without first checking" her likes; in Source B a child is heard "talking of the bitterest struggles of life, with the calm earnestness of one who had endured them all". Source A balances its concern with a concession, "I am not a technophobe", and grants social media "genuine benefits"; Mayhew offers no such balance, only the small hope that "Her eyes brightened up a little" when he tells her about the parks.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies concerns from each writer',
              'Synthesises similarities and differences',
              'Uses embedded evidence',
            ],
          },
          {
            id: 'edexcel-p2-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer of Source A use language to present their argument about social media and young people?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}`,
            extractSource: EDEXCEL_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses strong language to show the seriousness of the problem. The metaphor "restructured the architecture" makes social media sound like it has physically changed something, which makes it seem powerful and dangerous. The writer uses statistics from a study to give the argument authority. The word "paradox" shows that social media does the opposite of what it should do. The examples at the end - a "thirteen-year-old" checking likes and a "fifteen-year-old boy" measuring worth by followers - make the problem feel real and personal. The final word "crisis" is emotive and urgent.',
              'Grade 6-7':
                'The writer constructs the argument through a carefully layered rhetorical strategy that moves from intellectual analysis to emotional impact. The opening metaphor - "restructured the architecture of adolescent identity" - is deliberately architectural, implying that social media has not merely influenced but rebuilt the foundational structures of selfhood. The contrasting verbs "constructed" (past generations) versus "building" (present) create a temporal distinction: the past tense suggests completed, stable identity, while the progressive aspect implies an ongoing, unstable process. The statistics attributed to the Royal Society for Public Health function as an appeal to authority, lending institutional weight, while the word "paradox" signals intellectual sophistication - the writer is not merely complaining but identifying a structural contradiction. The concessive paragraph ("I am not a technophobe") is strategically placed to pre-empt counter-argument before the emotional climax: the two hypothetical scenarios ("When a thirteen-year-old cannot eat breakfast without first checking...") use temporal specificity to transform statistics into narrative. The final sentence - "We are witnessing a crisis" - deploys the progressive aspect and the collective "we" to create urgency and shared responsibility.',
            },
            markScheme: [
              'Analyses language techniques in detail',
              'Comments on specific word choices and their effects',
              'Considers how language persuades the reader',
              'Uses subject terminology accurately',
              'Top band: sophisticated, conceptualised analysis',
            ],
          },
          {
            id: 'edexcel-p2-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on the challenges facing young people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EDEXCEL_P2_SOURCE_A}\n\nSource B:\n${EDEXCEL_P2_SOURCE_B}`,
            extractSource: `Source A: ${EDEXCEL_P2_SOURCE_A_REF} | Source B: ${EDEXCEL_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are concerned about young people but see different challenges. The writer of Source A thinks the main challenge is social media, which makes teenagers anxious and unhappy with how they look. Mayhew thinks the challenge is poverty: the watercress girl has to work in the streets at eight years old, so she has no chance to be a child. The writer of Source A uses statistics and examples, such as a "fifteen-year-old boy" who measures his worth by his followers. Mayhew describes a real child he met and talked to, and he gives her own words, such as "where are they?" when he mentions the parks. The tone of Source A is worried and urgent, and it ends by calling the situation "a crisis". Mayhew\'s tone is sad and pitying: he says there was "something cruelly pathetic" in hearing her talk.',
              'Grade 6-7':
                'The two writers see very different challenges facing the young, and their methods reflect their different times. The writer of Source A presents a psychological challenge created by technology: social media has "fundamentally restructured" how identity is formed, and teenagers are now "building their identities in public". Mayhew presents a material one. The watercress girl has been aged by work and want: "although only eight years of age", she "had entirely lost all childish ways". The methods differ too. The modern writer builds authority from evidence, a named study and percentages, and then from typical cases, such as the thirteen-year-old who "cannot eat breakfast without first checking" her likes. Mayhew builds it from a single encounter, and from his own failure in it: "I did not know how to talk with her." He tries "speaking on childish subjects", her toys and games, and is met with "the look of amazement", so the reader discovers her lost childhood as he does. Physical detail does the rest: her face "was wrinkled where the dimples ought to have been", an image that puts old age where childhood should be. Both writers suggest that childhood is being cut short, but Source A sees young people exposed to too much of the world, "before an audience of hundreds", while Mayhew sees a child who knows almost nothing of it beyond "water-cresses, and what they fetched". Source A ends by naming "a crisis"; Mayhew makes no argument at all, and trusts the reader\'s pity to do the work.',
            },
            markScheme: [
              'Compares perspectives throughout the response',
              'Analyses methods used by both writers',
              'Uses evidence from both texts',
              'Shows perceptive understanding of both texts',
            ],
          },
        ],
      },
      {
        id: 'edexcel-p2-writing',
        title: 'Section B: Transactional Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Answer BOTH questions.',
        totalMarks: 56,
        suggestedTimeMinutes: 55,
        questions: [
          {
            id: 'edexcel-p2-q5',
            questionNumber: 5,
            questionText:
              'Your school or college is debating whether mobile phones should be banned during the school day.\n\nWrite a speech to be delivered at a school assembly in which you argue your point of view on this topic.\n\n(16 marks for content / 8 marks for SPaG)',
            marks: 24,
            suggestedTimeMinutes: 25,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: appropriate form features (direct address, rhetorical questions); a sustained argument; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: sophisticated rhetorical techniques; counter-argument addressed; appropriate register for audience; accurate and varied SPaG.',
              'Grade 8-9':
                'An assured, compelling speech with: masterful rhetoric; nuanced argument; distinctive voice; technical virtuosity.',
            },
            markScheme: [
              'Content (16 marks): Purpose, audience, form',
              'SPaG (8 marks): Accurate, varied, ambitious',
            ],
          },
          {
            id: 'edexcel-p2-q6',
            questionNumber: 6,
            questionText:
              'A national newspaper is asking for contributions to a series called "Things That Matter."\n\nWrite an article about something you feel passionately about.\n\n(24 marks for content / 8 marks for SPaG)',
            marks: 32,
            suggestedTimeMinutes: 30,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form features (headline, subheadings optional); a sustained argument or exploration; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling article with: distinctive journalistic voice; effective use of evidence and example; structural sophistication; accurate, varied SPaG.',
              'Grade 8-9':
                'An outstanding article with: assured journalistic voice; compelling narrative and argument woven together; ambitious vocabulary and syntax; technical virtuosity.',
            },
            markScheme: [
              'Content (24 marks): Communication, register, form, organisation',
              'SPaG (8 marks): Sentence demarcation, punctuation range, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 01
  // ═══════════════════════════════════════════════════════════════════════════
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
        description: `Read the source text carefully. Then answer all the questions in this section.\n\nSource: ${OCR_P1_SOURCE_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p1-q1',
            questionNumber: 1,
            questionText:
              'Identify four reasons Margaret Thornton gives for opposing the demolition of the community centre.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5':
                '1. It has served the neighbourhood for over sixty years. 2. She has attended meetings, celebrations, and support groups there. 3. It creates conditions for connection between people. 4. A new block of luxury apartments will not bring community.',
            },
            markScheme: ['1 mark per valid reason, maximum 4'],
          },
          {
            id: 'ocr-p1-q2',
            questionNumber: 2,
            questionText:
              'How does the writer use the example of Mrs Patricia Ogden to support her argument? Explain using evidence from the text.',
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'analysis',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the example of Mrs Ogden to show that the community centre brings people together. She describes how people "who had never spoken to each other before found themselves united" by hearing the poem. Mrs Ogden\'s age (eighty-three) shows that the centre serves elderly people who might otherwise be isolated. The description of her reading a poem about her "late husband" adds emotion and shows the centre provides a place for people to share personal experiences.',
              'Grade 6-7':
                'Thornton deploys the anecdote strategically: it transforms an abstract argument about community value into a concrete, emotionally specific moment. Mrs Ogden\'s age ("eighty-three") and subject matter ("her late husband") immediately establish vulnerability, while the detail that strangers "found themselves united by a single act of human vulnerability" elevates the personal into the universal. The reflexive verb "found themselves" suggests the connection was organic and unforced - precisely the kind of outcome that cannot be engineered in "luxury apartments." By naming Mrs Ogden, Thornton gives the community centre a human face, making demolition feel less like a planning decision and more like an act of personal harm.',
            },
            markScheme: [
              'Explains how the example supports the argument',
              'Uses evidence from the text',
              'Analyses the persuasive effect of the anecdote',
              'Top band: detailed, perceptive analysis',
            ],
          },
          {
            id: 'ocr-p1-q3',
            questionNumber: 3,
            questionText:
              'How does the writer use language and structure to argue against the demolition of the community centre?\n\nAnalyse the techniques used and their effects.',
            marks: 14,
            suggestedTimeMinutes: 18,
            questionType: 'analysis',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a formal letter format to show she is serious and respectable. She uses emotive language like "considerable agitation" and personal examples ("I have attended meetings"). The rhetorical question "whose purpose?" challenges the council directly. She lists the building\'s faults ("the roof leaks... the heating is unreliable") before arguing these don\'t matter, which shows she is being honest and fair. The final short paragraph uses contrast: "profit" versus "community" to make her point clearly.',
              'Grade 6-7':
                'Thornton constructs her argument through a sophisticated interplay of concession and rebuttal. The formal epistolary register establishes authority, while "considerable agitation" balances emotional investment with dignified restraint. The structural heart of the letter is the third paragraph, which performs a rhetorical reversal: she quotes the council\'s own phrase ("no longer fit for purpose") before dismantling it through the interrogative "whose purpose?" The concessive listing of faults ("The roof leaks, certainly, and the heating is unreliable") - with the humorous addition of potholes that "could swallow a small dog" - demonstrates strategic honesty: by acknowledging the building\'s physical failings, she strengthens her claim that its value is intangible. The final paragraph\'s antithetical structure ("A new block of luxury apartments will bring profit. It will not bring community") uses syntactic parallelism to frame the choice as binary and moral, the repetition of "will bring" highlighting the absence.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on specific effects on the reader',
              'Uses subject terminology accurately',
              'Considers the overall argument and its development',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'ocr-p1-q4',
            questionNumber: 4,
            questionText:
              '"Margaret Thornton writes persuasively but ultimately fails to make a convincing case because she relies too heavily on emotion rather than practical arguments."\n\nTo what extent do you agree with this view? Evaluate the effectiveness of the letter.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: OCR_P1_SOURCE,
            extractSource: OCR_P1_SOURCE_REF,
            modelAnswers: {
              'Grade 4-5':
                'I partially agree. The letter does use a lot of emotion - the story about Mrs Ogden is touching and the language is passionate. However, she also makes practical points: the centre has served the community for 60 years and brings people together. She could have been more persuasive by including statistics or alternative proposals. But I think the emotional argument is actually a strength because it reminds the council that real people will be affected.',
              'Grade 6-7':
                "I largely disagree with the statement's implicit assumption that emotion and persuasion are separable categories. Thornton's emotional appeals are themselves arguments: the Mrs Ogden anecdote is not merely sentimental but evidential - it demonstrates a specific instance, which she witnessed, of the centre's social function. Moreover, the letter does contain pragmatic reasoning: the distinction between physical \"fitness for purpose\" and social value is a conceptual argument, not an emotional one. Where the letter could be strengthened is in proposing alternatives (renovation rather than demolition, for example), but its rhetorical purpose is to challenge a decision, not to offer planning advice. The accusation that emotion undermines argument reflects a false dichotomy: in the context of community planning, emotional testimony is primary evidence.",
            },
            markScheme: [
              'Evaluates with a sustained personal response',
              'Considers both strengths and limitations',
              'Uses textual evidence to support evaluation',
              'Shows nuanced understanding of rhetorical effectiveness',
            ],
          },
        ],
      },
      {
        id: 'ocr-p1-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 35 minutes on this section. Choose ONE of the following tasks.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'ocr-p1-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following writing tasks:\n\nEither:\n(a) Your local area is planning to build on green space. Write a letter to the local newspaper arguing whether this should or should not go ahead.\n\nOr:\n(b) Write an article for a magazine aimed at young people about the importance of community.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear, purposeful piece in the appropriate form with: a sustained argument; some persuasive techniques; generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted piece with: sophisticated rhetorical techniques; appropriate register; well-organised argument; consistent technical accuracy.',
              'Grade 8-9':
                'An outstanding piece with: compelling argument; distinctive voice; ambitious vocabulary; structural sophistication; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Purpose, audience, form, structure',
              'Technical Accuracy (8 marks): SPaG accuracy and range',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-lang-p1',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700QS/1',
    code: 'C700QS/1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p1-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${WJEC_P1_EXTRACT_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p1-q1',
            questionNumber: 1,
            questionText:
              'Read the first paragraph. List five things you learn about the kitchen and what is happening from this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The kitchen smelled of burnt toast. 2. There was a sharp chemical smell Nathan could not identify. 3. His mother was standing at the counter. 4. She had her back to him. 5. She was holding a letter in both hands.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-p1-q2',
            questionNumber: 2,
            questionText:
              "How does the writer create a sense of tension and unease in this extract?\n\nYou should comment on:\n- what is said and what is not said\n- the writer's use of language and structure\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates tension through what is not said. The mother tells Nathan the letter is "nothing important" but her shaking hands show this is not true. The contrast between the "cheerful pop song" and the "silence of the kitchen" is unsettling. The mother folds the letter "once, twice, three times" as if trying to make it disappear. Nathan feels the word "nothing" is like "a third person at the table" which is a metaphor showing how the unspoken truth takes up space between them. Short sentences like "Nathan sat." and "He ate." create a tense, awkward mood.',
              'Grade 6-7':
                'The writer constructs tension through a sustained gap between surface behaviour and underlying reality. The mother\'s smile is "almost, but not quite, convincing" - the qualifying phrase transforms reassurance into its opposite. The domestic routine - "kettle on, bread in toaster, butter from the fridge" - is described through staccato noun phrases that mimic automatic movement, but the mechanical efficiency is undermined by the shaking hands and the butter knife that "rattled against the plate." This contrast between controlled routine and involuntary physical response lets the reader see, through Nathan\'s eyes, what his mother is trying to hide. The structural centrepiece is the letter itself, folded "once, twice, three times" - the deliberate counting suggests an attempt to compress distressing content into something manageable. The radio provides an ironic counterpoint, its "cheerful pop song about sunshine and summer" grotesquely inappropriate for the emotional atmosphere. The final image - "nothing" sitting "between them like a third person at the table, taking up space, breathing the same air, waiting to be acknowledged" - is the extract\'s most powerful technique, personifying silence itself as a living, patient presence. The present participles ("taking up," "breathing," "waiting") give the unspoken its own agency.',
            },
            markScheme: [
              'Analyses language and structural techniques',
              'Comments on what is said and unsaid',
              'Considers effects on the reader',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed analysis',
            ],
          },
          {
            id: 'wjec-p1-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of the relationship between Nathan and his mother from this extract?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Nathan and his mother seem close but there is a barrier between them. Nathan notices small details about his mother - her shaking hands, the way she folds the letter - which shows he pays attention to her and cares. His mother tries to protect him by hiding the letter and saying it is "nothing important." The short dialogue shows they are not good at talking about difficult things. The mother uses commands - "Sit down," "Eat" - which could show she is trying to keep control of the situation.',
              'Grade 6-7':
                'The extract presents a relationship characterised by mutual care expressed through mutual concealment. The mother\'s instinct to protect Nathan manifests as suppression: she folds the letter away, manufactures a smile, deploys imperatives ("Sit down." / "Eat.") as instruments of normalcy. Her body, however, betrays what her words deny - the shaking hands are involuntary disclosure. Nathan, for his part, is perceptive but compliant: he "ate" despite his awareness that something is wrong, respecting the performance of normality even while seeing through it. The single-word exchange pattern - "Mum?" / "Breakfast" / "Eat" - suggests a family where emotional vocabulary is limited, where love is expressed through practical action (making breakfast) rather than verbal intimacy. The most telling detail is Nathan\'s question - "What was that letter?" - and the mother\'s deflection. His willingness to ask but not press the point, and her willingness to lie but not convincingly, creates a portrait of a relationship where both parties are trying to protect each other, and both know it.',
            },
            markScheme: [
              'Analyses the relationship with textual support',
              "Comments on both characters' behaviour and motivations",
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-p1-q4',
            questionNumber: 4,
            questionText:
              '"The writer successfully uses an everyday setting to create a powerful emotional impact."\n\nTo what extent do you agree? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: WJEC_P1_EXTRACT,
            extractSource: WJEC_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "I agree that the ordinary kitchen setting makes the emotional tension more powerful. Because everything seems normal at first (burnt toast, radio playing, making breakfast), the unease creeps in gradually. The reader recognises this kind of morning routine, which makes it feel real. The shaking hands and the hidden letter are more disturbing because they happen during something so ordinary. The ending is powerful because we still don't know what the letter says, which creates suspense.",
              'Grade 6-7':
                'I strongly agree, and I would argue that the domestic setting is not merely a backdrop but the mechanism through which emotional impact is generated. The writer weaponises familiarity: every detail - the burnt toast, the radio, the kettle and toaster - belongs to a morning routine the reader recognises, and it is precisely this recognition that makes the disruption so unsettling. The technique is essentially one of defamiliarisation: the mother\'s shaking hands are disturbing because they occur in a context where hands should be steady. The writer\'s structural control is masterful: the extract begins with smell (burnt toast, chemical sharpness), moves to sight (the mother\'s posture), then sound (the radio), building a multi-sensory portrait of normality before the emotional content intrudes. The short, imperative dialogue ("Sit down." "Eat.") has an almost ritualistic quality, as though both characters are performing "breakfast" as a form of emotional management. The emotional impact is amplified by restraint - we never learn the letter\'s contents, and neither does Nathan. This withholding is itself a structural argument about how families handle crisis: not through dramatic confrontation but through the careful maintenance of routine, even when routine has become a fiction.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-p1-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-p1-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when something was left unspoken.\nYour response could be real or imagined.\n\nOr:\n(b) The Morning After.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere; crafted imagery; structural sophistication; consistent SPaG accuracy.',
              'Grade 8-9':
                'An assured, distinctive piece with: original voice; precise imagery; masterful control of pace and structure; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (24 marks): Communication, voice, structure',
              'Technical Accuracy (16 marks): Sentence demarcation, punctuation, spelling, sentence variety',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC EDUQAS ENGLISH LANGUAGE COMPONENT 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-lang-p2',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700QS/2',
    code: 'C700QS/2',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-p2-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-p2-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about homelessness (Source A).\n\nList five things you learn about the current homelessness situation from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The writer has visited cities across Europe. 2. Fourteen people were sleeping rough near Westminster. 3. Temperatures dropped to minus eight degrees. 4. Rough sleeping has increased by 169% since 2010. 5. Over 700 homeless people died last year.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-p2-q2',
            questionNumber: 2,
            questionText:
              'How does the 21st-century writer use language to persuade the reader to care about homelessness?\n\nYou should comment on specific words and phrases and their effects.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${AQA_P2_SOURCE_A}`,
            extractSource: AQA_P2_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses emotive language like "calculated indifference" to make the reader feel guilty. The phrase "human beings" reminds us that homeless people are real people. Statistics like "169%" and "700 people died" shock the reader. The inclusive pronoun in "any one of us" makes the problem feel personal. The word "comforting" criticises our excuses: it suggests we tell them to make ourselves feel better.',
              'Grade 6-7':
                'The writer deploys a multi-layered persuasive strategy. The collocated adjective-noun phrase "calculated indifference" implies that society\'s neglect is deliberate rather than accidental, transforming a passive failure into an active moral choice. The spatial argument - "less than a hundred yards away" - makes physical proximity a moral indictment. The tricolon of ordinary misfortune ("The mortgage payment missed... The relationship that fractured... The mental health crisis") uses the definite article to transform hypotheticals into inevitabilities. Each sentence fragment is a snapshot of catastrophe. The first person plural in "we walk past. We avert our eyes" creates inescapable complicity through anaphoric repetition of "we." The adverbs in "profoundly, terrifyingly ordinary" intensify "ordinary" in a way that makes the familiar frightening - a rhetorical tour de force that reframes the reader\'s own life as precarious.',
            },
            markScheme: [
              'Analyses specific language techniques',
              'Comments on word-level effects',
              'Considers persuasive strategies',
              'Uses embedded quotations',
            ],
          },
          {
            id: 'wjec-p2-q3',
            questionNumber: 3,
            questionText:
              "Now look at both texts. Compare and contrast the writers' attitudes to poverty.\n\nYou should compare:\n- what they think and feel about poverty\n- how they present their ideas.",
            marks: 10,
            suggestedTimeMinutes: 15,
            questionType: 'comparison',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers care about the poor and want the reader to feel responsible. The writer of Source A uses statistics and accuses the reader: "we walk past. We avert our eyes." Mayhew describes the crowd, people who "stand shivering in the snow", and then turns to the comfortable reader and asks, "How comes it that you are well clothed and well fed, whilst so many go naked and hungry?" Both writers reject the idea that poor people only have themselves to blame. Source A is angrier and more direct about society, while Mayhew questions the pride of the well-off.',
              'Grade 6-7':
                'Both writers are angered by the neglect of the poor, and both argue that the comfortable have no right to look down on them, but they present this differently. The writer of Source A uses confrontational modern journalism: statistics ("169%"), an attack on those in power debating "the finer points of trade policy", and the collective "we" to make the reader complicit. Mayhew combines close observation with a moral challenge. His description of the crowd, "shivering in the snow" with bare flesh "blue and livid-looking", makes the suffering physical before he turns to the onlooker. He then imagines the "self-congratulations" of the well-to-do onlooker, who gives thanks that "he is not as one of these", and punctures them with a question from "the better nature": "How comes it that you are well clothed and well fed, whilst so many go naked and hungry?" Both writers therefore attack the same comfortable story. Source A rejects "choice and personal responsibility"; Mayhew challenges the boast of being the "architect of your own fortune". The difference lies in what they appeal to. The modern writer appeals to shame at a public failure, while Mayhew appeals to religion, comparing the complacent onlooker to "the Pharisee in the parable", so that pride itself becomes the sin.',
            },
            markScheme: [
              'Compares attitudes from both texts',
              'Analyses methods of presentation',
              'Uses evidence from both sources',
              'Shows clear comparative analysis',
            ],
          },
          {
            id: 'wjec-p2-q4',
            questionNumber: 4,
            questionText:
              '"Both writers make the reader care about poverty, but the 19th-century writer is more effective because his close description of the poor is more powerful than statistics."\n\nTo what extent do you agree? You should refer to both texts.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: `Source A:\n${AQA_P2_SOURCE_A}\n\nSource B:\n${AQA_P2_SOURCE_B}`,
            extractSource: `Source A: ${AQA_P2_SOURCE_A_REF} | Source B: ${AQA_P2_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'I partly agree. Mayhew\'s description is very powerful because it shows the people so closely: they "stand shivering in the snow" and many "are without shirts". This makes me picture them clearly. But Source A also describes what its writer saw, because the writer "counted fourteen people sleeping in doorways", and the statistics, like "Over 700 people died", show how big the problem is. I think Mayhew makes me feel more, but Source A makes me understand the scale.',
              'Grade 6-7':
                'I would challenge the idea that the two texts divide neatly into description and statistics. The writer of Source A also begins with a scene, "I counted fourteen people sleeping in doorways", and only then turns to numbers; the statistics work because they follow a scene the reader has already pictured. Equally, Mayhew\'s power does not come only from his description, although details such as the bare flesh that is "blue and livid-looking as half-cooked meat" are hard to forget. It comes as much from what he does with it: he turns from the crowd to the reader and asks why "you are well clothed and well fed" while others are not, and who "gave you the genius or energy for the work". The statement is right that Mayhew\'s account is more vivid, but Source A is arguably more effective as persuasion for a modern audience, because it links suffering to a measurable failure and names who is responsible. Both are effective, in different ways and for different readers.',
            },
            markScheme: [
              'Evaluates both texts with a personal response',
              'Compares effectiveness of different methods',
              'Uses evidence from both texts',
              'Shows nuanced critical judgement',
            ],
          },
        ],
      },
      {
        id: 'wjec-p2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 30 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'wjec-p2-q5',
            questionNumber: 5,
            questionText:
              'Your headteacher has asked students to contribute to the school magazine on the theme of "Making a Difference."\n\nWrite an article for the magazine about how young people can make a positive difference in their communities.\n\n(20 marks for communication and organisation / 12 marks for writing accurately / 8 marks for SPaG)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate form; a range of ideas; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening; sophisticated argument; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling voice; nuanced exploration; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (20 marks): Purpose, form, voice, structure',
              'Writing Accurately (12 marks): Sentence variety, vocabulary range',
              'SPaG (8 marks): Spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCR ENGLISH LANGUAGE COMPONENT 02
  // ═══════════════════════════════════════════════════════════════════════════
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
          'Read the extract below carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'ocr-p2-q1',
            questionNumber: 1,
            questionText:
              'Read the extract below.\n\nList four things about the setting from the opening paragraph.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. It was marsh country, down by the river. 2. The churchyard was a bleak place overgrown with nettles. 3. Cattle were feeding on the flat marshes. 4. The wind was rushing in from the sea.',
            },
            markScheme: ['1 mark per valid point, maximum 4'],
          },
          {
            id: 'ocr-p2-q2',
            questionNumber: 2,
            questionText:
              'How does the writer use language to create a sense of danger and isolation in the extract?\n\nYou should consider:\n- word choices and their effects\n- imagery and figurative language\n- the overall impact on the reader.',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates isolation by describing the marshes as a "dark flat wilderness", which makes them sound empty and wild. The sea is a "savage lair", a metaphor that makes it sound like the home of a dangerous animal. Pip is "the small bundle of shivers", so he seems tiny and alone. Danger comes from the convict, who shouts "Keep still, you little devil, or I\'ll cut your throat!" He "glared, and growled" like an animal, and he has "a great iron on his leg", which shows he is an escaped prisoner.',
              'Grade 6-7':
                'Dickens builds isolation first. The churchyard is a "bleak place overgrown with nettles", the marshes a "dark flat wilderness", and the river "the low leaden line", a phrase whose alliteration and metaphor make the landscape heavy, grey and empty. The metaphor of the sea as "the distant savage lair from which the wind was rushing" suggests that even nature is a predator. Against this vast setting, Pip is reduced to "the small bundle of shivers growing afraid of it all", a metaphor that makes him a tiny, trembling object rather than a person. Danger then arrives in language that is sudden and violent. The convict\'s imperatives, "Hold your noise!" and "Keep still", and his threat to "cut your throat" break in after the long descriptive sentence before them. The list of verbs "limped, and shivered, and glared, and growled" makes him sound like a wounded animal, and the village where Pip might find help is "a mile or more from the church", which confirms that he is on his own.',
            },
            markScheme: [
              'Analyses language techniques with specific examples',
              'Comments on effects of individual words',
              'Considers how imagery creates atmosphere',
              'Uses subject terminology accurately',
            ],
          },
          {
            id: 'ocr-p2-q3',
            questionNumber: 3,
            questionText:
              'How does the writer use structure to build towards the encounter with the convict?\n\nYou should consider how the extract as a whole is organised.',
            marks: 8,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The extract begins with a long description of the setting, the churchyard, the marshes, the river and the sea, which creates a lonely mood. The first paragraph ends with Pip "beginning to cry", so we know he is scared before anything happens. Then the convict suddenly shouts "Hold your noise!", which is a shock because it comes straight after the quiet description. After that, the writer describes the man and uses lots of short dialogue, which makes the scene fast and tense.',
              'Grade 6-7':
                'The extract is structured to move from a wide, empty setting to sudden, close danger. The opening paragraph looks outward: one long sentence, built on the repeated "and that", names the churchyard, the marshes, the river and the sea, so the view widens towards the horizon. It then turns back to Pip, "the small bundle of shivers", ending the paragraph on the child at his most exposed. The encounter breaks in with no warning. The second paragraph opens with direct speech, "Hold your noise!", so the reader hears the convict before seeing him, and he "started up from among the graves", out of the churchyard the first paragraph described. The third paragraph then pauses on the man in three sentences with no main verb, and the last of them ends in contact: "he seized me by the chin." The structure has narrowed from the whole landscape to a hand on a child\'s face, and the short lines of dialogue that follow keep the pace fast and the threat close.',
            },
            markScheme: [
              'Comments on overall structural progression',
              'Analyses how focus changes between paragraphs',
              'Comments on sentence-level structure',
              'Considers the effect on the reader',
            ],
          },
          {
            id: 'ocr-p2-q4',
            questionNumber: 4,
            questionText:
              '"The writer makes the reader fear the convict but also feel sympathy for him."\n\nTo what extent do you agree with this view? Use evidence from the text.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'evaluation',
            extract: AQA_P1_EXTRACT,
            extractSource: AQA_P1_EXTRACT_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I mostly agree. The convict is frightening because he threatens to "cut your throat" and he "glared, and growled" like an animal. But the writer also makes us feel sorry for him. He has been "soaked in water, and smothered in mud", and his "teeth chattered in his head", so he is freezing. He eats Pip\'s bread "ravenously", which shows he is starving. So we feel both fear and sympathy.',
              'Grade 6-7':
                'I strongly agree. Dickens creates fear through the convict\'s violent imperatives ("Keep still, you little devil, or I\'ll cut your throat!"), through the "great iron on his leg" that marks him as an escaped prisoner, and through his physical power over Pip: he "seized me by the chin" and "turned me upside down". But the same description is full of suffering. The passive verbs in "soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars" show a man hurt by everything around him, and his teeth "chattered in his head" with cold. The verbs "limped, and shivered, and glared, and growled" move from pain to menace, which suggests that his suffering and his danger are connected. The ending, where he "ate the bread ravenously", shows that his threats come from hunger. Dickens makes the reader hold fear and pity together: the convict is dangerous because he is desperate, and pitiable because of what he has endured.',
            },
            markScheme: [
              'Evaluates with a sustained personal response',
              'Considers both fear and sympathy',
              'Uses textual evidence effectively',
              'Shows nuanced understanding',
            ],
          },
        ],
      },
      {
        id: 'ocr-p2-writing',
        title: 'Section B: Writing',
        description: 'You are advised to spend about 35 minutes on this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'ocr-p2-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following:\n\nEither:\n(a) Write a descriptive piece about a place at a particular time of day, focusing on creating atmosphere through language.\n\nOr:\n(b) Write the opening of a story that begins with a character discovering something unexpected.\n\n(32 marks for content and organisation / 8 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 40,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece with: descriptive or narrative techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: crafted atmosphere; conscious technique; consistent accuracy.',
              'Grade 8-9':
                'An outstanding piece with: distinctive voice; precise imagery; structural mastery; technical virtuosity.',
            },
            markScheme: [
              'Content & Organisation (32 marks): Voice, imagery, structure, effect',
              'Technical Accuracy (8 marks): SPaG accuracy and ambition',
            ],
          },
        ],
      },
    ],
  },
]
