// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * The five extracts are specially written for this bank and labelled as such
 * ("Original ... composition"); none claims to be a published writer's words,
 * and not a word of any extract was changed. "In the style of" on three
 * labels names a manner, not a source. These papers are live
 * (allMockExamPapers, through ./index), so what follows was in front of
 * students.
 *
 *   - labels: EXTRACT_13 and EXTRACT_15 ended "c. 1952" and "c. 1962". On a
 *     paper titled "20th Century Literature", a bare date reads as when the
 *     passage was written, and neither was written then. EXTRACT_15 is set
 *     after 1961 (Beulah's clock has been wrong "since the Eisenhower
 *     administration"); nothing in EXTRACT_13 fixes a year, and nothing in it
 *     contradicts 1952. Both now say "set in about" the year, and
 *     "composition" like the other three.
 *
 * The model answers were not in step with the extracts. Every quotation in
 * them, of any length, is now in its extract word for word, apart from
 * "ordinary" in wjec-c1-14-q4, which quotes the question's own statement:
 *   - words changed: wjec-c1-15-q2 (Grade 6-7) quoted "the kind of truth
 *     people spoke aloud and the kind they carried in their bodies"; the
 *     extract has "two kinds of truth" and then "the kind people spoke aloud
 *     and ...". ...-14-q4 quoted the heron's strike as "bypassing time" (it
 *     "seemed to bypass time entirely"), and ...-13-q2 put an ellipsis where
 *     the text has only a full stop ("three fifty-seven. Three minutes.");
 *   - claims the extract does not bear out: Lucille's "hands" knowing the
 *     work (her fingers do); Lucille taking no part in the town's watching,
 *     with her lean to see the Fontaine house read as "not gossip but
 *     compassion" (that look is her last act, and is itself watching); her
 *     porch overlooking "the whole community"; the woman in the red hat's
 *     cat-at-a-mouse-hole patience casting Denny as prey (she is watching the
 *     street, and has not looked at him once); the two of them observing
 *     "each other", "never directly" (he has watched her for forty-five
 *     minutes; only the last glimpse is a reflection); Denny priding himself
 *     on being "noticed and feared" (he prides himself on noticing); the
 *     whole extract filling the three minutes to four o'clock "across five
 *     paragraphs" (three fifty-seven
 *     arrives in the fourth, and four o'clock never comes); a "dark" coffee
 *     shop; Eileen reading the telegram "calmly" (its warmth "nearly undid
 *     her"); the light "still golden" at the end (the last paragraph has only
 *     Thomas holding his worm "up to the light"); Jem sitting "comfortably"
 *     (he lowers himself on knees that have "ceased to be allies"); the
 *     swallows carrying calendars (they leave "as though" they did); the
 *     second sentence of EXTRACT_11 quoted as part of "the opening sentence";
 *   - wrong terms, and students copy terms: the roots "like the bones of the
 *     earth", the future "like furniture being moved in a darkened room" and
 *     the opinions moving "the way weather moved" called metaphors (they are
 *     similes); the heron that "might have been carved" from stone called a
 *     simile (it has no "like" or "as"); the stopped courthouse clock called a
 *     metonym (it is a symbol); the house "holding its breath" called a
 *     metaphor (it is personification, introduced by "As though"); a phrase
 *     called a sentence; and the mark scheme for wjec-c1-15-q2 listed an
 *     extended metaphor, which that extract does not contain (its weather
 *     comparison is an extended simile);
 *   - every Question 1 said "Read lines 1-6", "1-7" or "1-8", but the
 *     mock-exam page prints the extract as wrapped paragraphs with no line
 *     numbers (src/app/dashboard/mock-exam/page.tsx), so no student could
 *     find those lines. Each now names the paragraphs every model-answer point
 *     already came from: the first paragraph (papers 12, 13 and 14) or the
 *     first two (papers 11 and 15).
 *
 * A second reading the same day, against each extract, found five more:
 *   - wjec-c1-11-q3 (Grade 6-7) cut Rosa's "could not have explained it"
 *     before "to anyone who had not stood before it" and read it as knowledge
 *     beyond her power to put into words; the whole clause says only those
 *     who have stood there would understand;
 *   - the first fix of wjec-c1-12-q4 (Grade 6-7) said Thomas "still" holds
 *     his worm at the end; at the start he is explaining that worms have no
 *     feelings, and finds one only in the last paragraph, so the close
 *     returns to the children rather than repeating an image;
 *   - wjec-c1-15-q4 (Grade 6-7) called the first paragraphs "warm, comic"
 *     and an "idyllic surface" broken only by the Fontaine boy, when the heat
 *     presses "like a hand on a chest" and the second paragraph already has
 *     people crossing the street "to avoid a certain house";
 *   - wjec-c1-15-q3 (Grade 4-5) had Lucille knowing "everyone and
 *     everything" because she has lived there all her life; the extract
 *     says neither;
 *   - wjec-c1-13-q3 (Grade 4-5) still called the stand-off "cat-and-mouse",
 *     the reading the Grade 6-7 answer had been corrected away from.
 */

// ─── Extracts ──────────────────────────────────────────────────────────────────

const EXTRACT_11 = `The house had been waiting for her. She was certain of this, though she could not have explained it to anyone who had not stood before it in the blue half-light of dawn and felt, as she did, that its windows were watching. It was the kind of house that should not have existed - not here, not in this flat, practical town of canning factories and hardware stores, where the most exotic thing anyone had ever seen was a two-headed calf at the county fair.

And yet here it stood, at the end of Magnolia Street, behind a wrought-iron gate that had rusted into a permanent half-open position: three storeys of faded coral plaster, a tower with a widow's walk, and a garden so overgrown that the roses had climbed the drainpipes and forced their way through the shutters. The house breathed. That was the only word for it. Its timbers creaked without wind. Its curtains moved in rooms where no window was open. At night, the neighbours said, you could see lights drifting from room to room, slow and purposeful, like someone conducting an inspection.

Rosa set down her suitcase. The gate did not need pushing; it swung inward at her approach with a sound like a sigh. The garden path was cracked and buckled, invaded by dandelions whose seed heads caught the early light and held it, each one a tiny, trembling sun.

Inside, the hallway smelled of beeswax and dried lavender and something older - stone, perhaps, or the particular mustiness of paper left too long in darkness. A grandfather clock stood against the far wall, its pendulum still. Rosa reached out and touched the glass case. Beneath her fingertips, the mechanism shuddered, and the pendulum began to swing. Tick. Tick. Tick. As though the house had been holding its breath, waiting for permission to resume.`

const EXTRACT_11_SOURCE =
  'Original literary fiction composition - magical realism, in the style of Isabel Allende'

const EXTRACT_12 = `The telegram arrived at half past three on a Tuesday afternoon in September, and afterwards, whenever Eileen thought about the war, she would remember the precise quality of the light that day - golden and heavy, the kind of light that makes ordinary objects look like paintings of themselves. The front door was open. A breeze carried the smell of cut grass and coal smoke. The children were in the back garden, and she could hear Thomas, who was five, explaining to his sister with great seriousness that worms did not have feelings.

She saw the boy on the bicycle first. He was perhaps sixteen, thin-faced, with a cap pulled low over his eyes, and he cycled with the careful deliberation of someone carrying something fragile. When he stopped at the gate and reached into his satchel, Eileen understood. She understood before he had dismounted, before he had opened the gate, before he had walked up the path with the envelope held in front of him like an offering. She understood because the women of this street had been teaching each other to understand for four years now - through glances, through the sudden hush that fell when someone's name was mentioned, through the black armbands that appeared one by one, like a slow disease spreading from house to house.

"Mrs Pemberton?"

She took the envelope. It was warm from the satchel, from the boy's body heat, and this small, human detail nearly undid her. She pressed her thumbnail into the seal, tore, and read. The words were brief and formal and made no allowance for the fact that they were dismantling a life. Deeply regret. Lance Corporal. Killed in action. France. The King and Queen.

She folded the telegram and placed it on the hall table, beside the vase of chrysanthemums she had arranged that morning. Then she went to the back door and watched her children playing. Thomas had found a worm and was holding it up to the light with an expression of solemn wonder. Clara was ignoring him, absorbed in arranging stones into a pattern only she understood. Eileen watched them and felt the future rearranging itself around her, silently, completely, like furniture being moved in a darkened room.`

const EXTRACT_12_SOURCE =
  "Original literary fiction composition - wartime Britain, in the style of Sarah Waters' war fiction"

const EXTRACT_13 = `Denny Kovacs had been watching the woman in the red hat for forty-five minutes and he was beginning to think she was smarter than he was. This was not a thought that came naturally to him. Denny had a high opinion of his own intelligence, built on twenty-two years of staying alive in a city that ate the slow-witted for breakfast and used the merely average as napkins. He had survived by noticing things. The way a man's right hand drifted to his coat pocket. The fractional hesitation before a lie. The particular silence of a room that contained someone who was not supposed to be there.

But the woman in the red hat gave him nothing. She sat at the counter of the coffee shop on West 47th Street, stirring her cup with a steady, circular motion that never varied, and she watched the street with the patience of a cat watching a mouse hole. She had not looked at Denny once, which meant either she hadn't noticed him - unlikely, given his position by the magazine rack - or she had noticed him immediately and decided he was not worth the expenditure of a glance.

The rain fell in vertical sheets outside the window, turning the neon signs into watercolours. A cab honked. Two men in dark coats hurried past with newspapers held over their heads, a gesture so futile it could only be instinctive. The coffee shop smelled of burnt grounds and wet wool and the faintly sweet chemical tang of the linoleum floor.

Denny lit a cigarette and considered his options. The package was in his inside pocket - small, wrapped in brown paper, heavier than it looked. He had been told to deliver it to the woman in the red hat at precisely four o'clock. It was now three fifty-seven. Three minutes. Three minutes in which the geometry of the room might shift, in which the door might open and admit someone whose intentions were less ambiguous than the woman's.

He exhaled smoke and watched it flatten against the rain-streaked window. In the reflection, the woman raised her cup to her lips. Her eyes, above the rim, were steady and dark and absolutely unreadable.`

const EXTRACT_13_SOURCE = 'Original literary fiction composition - crime noir, set in about 1952'

const EXTRACT_14 = `The river was low that August, lower than old Jem Catling could remember in sixty years of watching it. He stood on the bank where the alders leaned out over the water, their roots exposed like the bones of the earth, and he could see the riverbed - stones and mud and the dark shapes of things that had lain hidden for decades: a bicycle wheel, a boot, the rusted frame of a pram. The river, stripped of its depth, had become an archaeology of carelessness.

Above him, a heron stood motionless in the shallows, one leg raised, its grey plumage so perfectly still that it might have been carved from the same stone as the bridge upstream. Jem watched it with the professional respect of one patient creature observing another. The heron's eye was a bright, unblinking amber, and it was fixed on a point in the water with an intensity that excluded everything else - the sky, the bank, the old man watching from ten yards away. The whole world had narrowed to the space between the heron's beak and the surface of the stream.

Then, with a movement so swift it seemed to bypass time entirely, the beak struck. A flash of silver. The fish writhed once, a brief and futile convulsion, and was still. The heron tilted its head back, worked its throat, and swallowed.

Jem exhaled. He had not realised he had been holding his breath. He lowered himself onto the bank with the careful deliberation of a man whose knees had long since ceased to be allies, and he sat among the meadowsweet and the dried seed heads of hogweed and watched the light change on the water. The river moved slowly, barely moving at all, and its surface carried the reflections of clouds that drifted with the same unhurried patience, so that looking down was like looking up into a second, inverted sky.

The swallows were gathering. He had noticed them for three days now, assembling on the telephone wires above Fletcher's field, restless and electric with purpose. They would leave soon. They always left before September, as though they carried calendars in their hollow bones, and their departure was the first admission that summer was ending - an admission that the flowers and the insects and the warm, sweet air would make for weeks yet, but that the swallows, who saw further, could not deny.`

const EXTRACT_14_SOURCE =
  "Original nature writing composition - in the style of Roger Deakin's Waterlog"

const EXTRACT_15 = `The heat pressed down on the town like a hand on a chest, and nothing moved except the dogs, who had sense enough to lie in whatever shade they could find and wait for evening. Main Street was empty at two in the afternoon. The storefronts shimmered behind their plate glass, and the courthouse clock, which had not kept accurate time since the Eisenhower administration, stood at a quarter past something, its hour hand missing entirely.

Lucille Boudreaux sat on her front porch, shelling butter beans into a colander, and she watched the heat rise from the road in waves that made the Baptist church across the street appear to tremble, as though uncertain of its own convictions. Lucille was seventy-three years old and had lived in Beulah, Mississippi, for every one of those years, and she had learned that there were two kinds of truth in a small town: the kind people spoke aloud and the kind they carried in their bodies - in the way they crossed the street to avoid a certain house, or the way a conversation stopped when certain names were mentioned.

The butter beans made a sound like rain falling into a tin bucket. Pop, pop, pop. Lucille worked without looking at her hands, her fingers knowing the work so deeply that her mind was free to wander, and it wandered now to the house at the end of Cypress Lane, where the Fontaine boy had come home three days ago after seven years away. Seven years. He had left in the back of a sheriff's car on a hot night in July, and now he was back, and the town had responded the way small towns always respond to the return of someone they have decided to remember in only one way: with silence, and with watching.

She could feel it - the whole town watching, from behind curtains and above coffee cups and through the slats of venetian blinds. Nobody went to see him. Nobody called. But everybody knew he was there, and everybody had an opinion, and the opinions moved through Beulah the way weather moved through it - slowly, invisibly, but with a force that could flatten you if you stood in its path.

Lucille dropped the last bean and set the colander aside. She wiped her hands on her apron and looked at the Fontaine house, which she could see from her porch if she leaned just a little to the left. The curtains were drawn. A pickup truck, red and rusted, sat in the drive. A sprinkler turned on the brown lawn, its arc catching the sunlight and throwing brief, useless rainbows into the heavy air.`

const EXTRACT_15_SOURCE =
  'Original literary fiction composition - Southern American Gothic, set in about 1962'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const wjecC1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 11 - Magical Realism
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-11',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-11-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_11_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-11-q1',
            questionNumber: 1,
            questionText:
              'Read the first two paragraphs. List five things you learn about the house and its surroundings from these paragraphs.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "1. The house is three storeys tall with faded coral plaster. 2. It has a tower with a widow's walk. 3. It is behind a wrought-iron gate that has rusted half-open. 4. The garden is overgrown with roses climbing the drainpipes. 5. The town is flat and practical, known for canning factories and hardware stores.",
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-11-q2',
            questionNumber: 2,
            questionText:
              "How does the writer use language to present the house as a living, mysterious presence?\n\nYou should comment on:\n- the writer's choice of words and phrases\n- the writer's use of language features and techniques\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer makes the house seem alive by saying it "breathed." This personification makes the house seem like a living thing, which is eerie. The windows are described as "watching," which suggests the house is aware of Rosa\'s arrival. The gate "swung inward at her approach with a sound like a sigh," and the simile makes it seem as though the house is welcoming her. When the clock starts after Rosa touches it, it is "as though the house had been holding its breath" which is another way the writer gives the house human qualities. The dandelion seed heads are described as "tiny, trembling sun" which adds a magical, dreamlike quality.',
              'Grade 6-7':
                'The writer employs sustained personification to dissolve the boundary between architecture and organism. The house "breathed" - a single, declarative assertion that refuses metaphorical qualification: it does not breathe "like" a living thing; it breathes. This directness is characteristic of magical realism, where the supernatural is presented without apology. The windows are "watching," the gate produces "a sound like a sigh" - the simile here is gentler, suggesting welcome rather than menace. The verb choices are carefully calibrated: "creaked without wind" and "moved in rooms where no window was open" create cause-without-cause, the grammatical structure itself mimicking the uncanny. The clock sequence is structurally pivotal: the onomatopoeic "Tick. Tick. Tick." - each word sentence-final, each separated by a full stop - enacts the resumption of time itself. The closing personification, "holding its breath, waiting for permission to resume", positions Rosa not as an intruder but as the person the house has been waiting for, transforming a Gothic trope into something closer to reunion. The dandelion seed heads as "tiny, trembling sun" is a microcosmic image that infuses the ordinary with wonder.',
            },
            markScheme: [
              'Identifies and analyses language features (personification, simile, metaphor, onomatopoeia)',
              'Comments on word choices and their effects',
              'Considers how language creates atmosphere',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'wjec-c1-11-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Rosa and her feelings about the house?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Rosa seems drawn to the house. She arrives with a suitcase, which tells us she is planning to stay. She is not afraid - she walks through the gate and enters the hallway calmly. When she touches the clock and it starts again, it suggests she has a special connection to the house. She was "certain" the house had been waiting for her, which shows she feels a sense of destiny or belonging. The detail about the hallway smelling of beeswax and lavender makes the house seem comforting rather than scary.',
              'Grade 6-7':
                'Rosa is presented as someone who exists at the intersection of the rational and the intuitive. Her certainty that "the house had been waiting for her" is immediately qualified by the admission that she "could not have explained it to anyone who had not stood before it" - hers is a knowledge that only experience gives, and that words cannot pass on to someone who has not felt it. The suitcase is significant: she has come prepared to stay, suggesting premeditation and purpose. Her physical interaction with the house is characterised by a calm reciprocity that defies Gothic convention - where a typical protagonist might hesitate at the threshold, Rosa proceeds with quiet assurance. The act of touching the clock is both tender and transformative: "reached out and touched" carries connotations of gentleness, and the clock\'s response - shuddering into life - suggests the house has been dormant rather than dead, waiting for Rosa specifically. The sensory catalogue of the hallway - "beeswax and dried lavender and something older" - shows Rosa perceiving the house in layers, the most recent scents giving way to something ancient. She is not merely visiting; she is resuming an interrupted connection.',
            },
            markScheme: [
              "Analyses Rosa's character and feelings with textual support",
              'Comments on actions, reactions, and implied emotions',
              'Considers what is suggested as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-11-q4',
            questionNumber: 4,
            questionText:
              '"The writer creates a world where the magical feels completely natural and believable."\n\nTo what extent do you agree with this view? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that the writer makes the magical feel natural. The house\'s strange qualities - breathing, watching, moving its curtains - are described alongside ordinary details like the rusted gate and dandelions, which makes the supernatural feel part of everyday life. The practical town with "canning factories and hardware stores" provides a contrast that makes the magical house seem more surprising but also more real. When the clock starts working after Rosa touches it, it is described simply, without drama, as though this is a normal thing to happen. This calm tone makes the reader accept the magical elements.',
              'Grade 6-7':
                'I agree substantially, and I would argue the writer\'s primary technique is tonal consistency - the supernatural is narrated in the same register as the mundane, refusing the Gothic tradition of heightened dread. The opening sentences establish this contract: "The house had been waiting for her" is presented as fact, not metaphor, and "She was certain of this" positions subjective intuition as reliable knowledge. The structural strategy is one of embedding: the house\'s impossible qualities ("breathed," "creaked without wind," lights "drifting from room to room") are nestled within precise physical description (faded coral plaster, wrought-iron gate, dandelions). This interweaving prevents the reader from distinguishing where realism ends and magic begins. The town itself - "flat, practical," defined by "canning factories and hardware stores" - functions as an anchor of ordinariness that makes the house\'s strangeness feel like an anomaly within a credible world rather than a feature of an incredible one. The clock sequence is the extract\'s most effective moment: the transition from stillness to movement is triggered by Rosa\'s touch, suggesting agency without explaining mechanism. The onomatopoeic "Tick. Tick. Tick." is ordinary sound rendered extraordinary by context. The writer\'s refusal to explain - to provide a rational mechanism for the clock\'s resumption - is itself the technique that makes the magic believable: explanation would invite scepticism, whereas acceptance invites wonder.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Considers how writer creates effects on the reader',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-11-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-11-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when a place felt alive.\nYour response could be real or imagined.\n\nOr:\n(b) The House That Remembered.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques including sensory detail; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled atmosphere that blurs the boundary between real and surreal; crafted imagery with original figurative language; structural sophistication (e.g., building from the ordinary to the extraordinary); consistent SPaG accuracy with ambitious punctuation.',
              'Grade 8-9':
                'An assured, distinctive piece with: an original voice that sustains tonal control; precise, layered imagery that rewards re-reading; masterful pacing that withholds and reveals; technical virtuosity including sophisticated sentence forms and punctuation used for deliberate effect.',
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
  // EXAM 12 - Historical / Wartime
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-12',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-12-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_12_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-12-q1',
            questionNumber: 1,
            questionText:
              'Read the first paragraph. List five things you learn about Eileen and the scene from this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The telegram arrived at half past three on a Tuesday in September. 2. The light was golden and heavy that afternoon. 3. The front door was open. 4. There was a breeze carrying the smell of cut grass and coal smoke. 5. The children were playing in the back garden.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-12-q2',
            questionNumber: 2,
            questionText:
              "How does the writer use language to convey the devastating impact of the telegram's arrival?\n\nYou should comment on:\n- the writer's choice of words and phrases\n- the writer's use of language features and techniques\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the contrast between the beautiful day and the terrible news to make the telegram more devastating. The light is "golden and heavy" and children are playing, which creates a peaceful scene. The boy on the bicycle carries the envelope "like an offering" - this simile makes it sound almost religious but also suggests sacrifice. The telegram\'s words are described as "brief and formal" and they "made no allowance" for the fact they were "dismantling a life." The word "dismantling" is powerful because it suggests Eileen\'s life is being taken apart piece by piece. The list of formal phrases - "Deeply regret. Lance Corporal. Killed in action" - shows how cold and impersonal the message is.',
              'Grade 6-7':
                'The writer constructs the telegram\'s impact through a technique of devastating juxtaposition. The opening sentence establishes memory as the framing device - "afterwards, whenever Eileen thought about the war" - indicating that this moment will become the defining event. The light is "golden and heavy," an aesthetic quality that transforms the afternoon into a painting, and this beauty intensifies the cruelty of what follows. The boy on the bicycle is described with meticulous precision - "thin-faced, with a cap pulled low" - as though Eileen\'s perception has become hyperacute. The simile "like an offering" carries sacrificial connotations, linking the envelope to the broader sacrifice of war. The most devastating linguistic choice is "dismantling a life" - the mechanical verb "dismantling" suggests systematic destruction, not sudden catastrophe. The telegram itself is rendered as fragmented phrases - "Deeply regret. Lance Corporal. Killed in action. France. The King and Queen" - stripped of syntax, stripped of humanity. The detail that the envelope was "warm from the satchel, from the boy\'s body heat" is unbearably poignant: the warmth of a living body delivering news of a dead one. The final simile - "the future rearranging itself around her, silently, completely, like furniture being moved in a darkened room" - makes abstract devastation physical: the future is something that happens to Eileen, not something she controls.',
            },
            markScheme: [
              'Identifies and analyses language features (juxtaposition, simile, metaphor, fragmented syntax)',
              'Comments on word choices and their effects',
              'Considers how language conveys emotional impact',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'wjec-c1-12-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Eileen and how she responds to the news?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Eileen seems strong but is deeply affected. She "understood" what the telegram meant before even opening it, which shows she has been preparing for this possibility. The warmth of the envelope "nearly undid her", but she reads it, then folds it and places it on the table, showing she is trying to keep control. She does not cry or collapse, but instead watches her children playing, which suggests she is thinking about how their lives will change. The image of Thomas holding up a worm "with an expression of solemn wonder" shows the innocence the children still have, which makes Eileen\'s knowledge more painful.',
              'Grade 6-7':
                'Eileen is presented as a woman whose composure is not the absence of feeling but its most extreme expression. Her understanding precedes the telegram\'s delivery - "She understood before he had dismounted" - and this pre-knowledge is attributed not to supernatural intuition but to communal experience: the women of the street have been "teaching each other to understand." This positions Eileen\'s grief within a collective narrative of loss. Her physical response is characterised by controlled, purposeful action: she "pressed her thumbnail into the seal, tore, and read" - three verbs in rapid succession that perform the act of confrontation. The decision to place the telegram "beside the vase of chrysanthemums she had arranged that morning" is profoundly significant: the flowers represent the domestic life she inhabited hours ago, and placing the telegram beside them enacts the collision of normalcy and catastrophe. Her final act - watching the children - reveals a mother processing her own grief through the lens of her responsibility. Thomas\'s "solemn wonder" at the worm and Clara\'s private game of arranging stones embody an innocence that Eileen must now protect while carrying knowledge that will eventually destroy it. The simile of "furniture being moved in a darkened room" captures her experience of the future as something rearranged by invisible hands: she cannot see the new configuration but knows everything has changed.',
            },
            markScheme: [
              "Analyses Eileen's character and responses with textual support",
              'Comments on both actions and implied emotions',
              'Considers what is suggested as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-12-q4',
            questionNumber: 4,
            questionText:
              '"The writer creates an overwhelming sense of loss without ever becoming sentimental or melodramatic."\n\nTo what extent do you agree with this view? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that the extract is very moving without being over-the-top. The writer does not describe Eileen crying or screaming - instead, she is quiet and controlled, which makes the emotion more powerful. The children playing in the garden while their mother receives terrible news is sad because they don\'t know what has happened. The formal, cold language of the telegram - "Killed in action" - contrasts with the warm, personal detail of the envelope being warm from the boy\'s body. The ending, where Eileen simply watches her children, is more powerful than any dramatic reaction would have been.',
              'Grade 6-7':
                "I agree emphatically, and I would argue that the writer's restraint is itself the technique that generates emotional power. The structural architecture is one of controlled contrast: the extract opens with beauty (golden light, garden sounds, children playing) and closes by returning to the children, now seen through knowledge. Nothing in the garden has changed - the children still play, and Thomas, who at the start was explaining that worms did not have feelings, now holds a worm up to the light - but the reader's understanding of these details has been utterly altered. This is a structural argument about how loss works: the world continues; only the person within it is changed. The writer avoids sentimentality through three specific strategies. First, Eileen's understanding precedes the telegram, which removes the shock of revelation and replaces it with the quieter devastation of confirmation. Second, the telegram itself is rendered as bureaucratic fragments rather than emotional narrative - \"Deeply regret. Lance Corporal. Killed in action. France. The King and Queen\" - and the inadequacy of this language is itself the emotional content. Third, the writer refuses Eileen any conventional expression of grief: she folds, places, watches. This sequence of transitive verbs - each requiring an object, each directed outward - shows a woman who channels devastation into action because the alternative is collapse. The most powerful moment is the smallest: the envelope is \"warm from the satchel, from the boy's body heat.\" That human warmth carrying inhuman news is, I would argue, the extract's most emotionally devastating detail, and it works precisely because the writer does not comment on it. The restraint is the point.",
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Considers how writer creates effects on the reader',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-12-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-12-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when everything changed.\nYour response could be real or imagined.\n\nOr:\n(b) The Telegram.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled emotional restraint; crafted use of contrast and juxtaposition; structural sophistication (e.g., before/after structure, circular ending); consistent SPaG accuracy with ambitious punctuation.',
              'Grade 8-9':
                'An assured, distinctive piece with: an original voice that controls tone with precision; imagery that operates on multiple levels; masterful structural pacing; technical virtuosity that includes varied and sophisticated sentence forms.',
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
  // EXAM 13 - Crime / Noir
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-13',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-13-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_13_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-13-q1',
            questionNumber: 1,
            questionText:
              'Read the first paragraph. List five things you learn about Denny Kovacs from this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. Denny has been watching the woman in the red hat for forty-five minutes. 2. He has a high opinion of his own intelligence. 3. He has survived for twenty-two years in the city. 4. He survives by noticing things. 5. He can detect when someone is about to lie.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-13-q2',
            questionNumber: 2,
            questionText:
              "How does the writer use language to create tension and a sense of danger in this extract?\n\nYou should comment on:\n- the writer's choice of words and phrases\n- the writer's use of language features and techniques\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates tension through the details of watching and waiting. Denny is observing the woman, but she does not look at him, which is suspicious. The metaphor of the city eating "the slow-witted for breakfast" makes it sound dangerous and predatory. The rain outside creates a dark atmosphere, with neon signs turning into "watercolours" - suggesting things are blurred and unclear. The package is described as "heavier than it looked" which hints that it is something important or dangerous. The countdown from "three fifty-seven" to "precisely four o\'clock" creates real suspense. The woman\'s eyes being "absolutely unreadable" is menacing because the reader cannot tell if she is friend or enemy.',
              'Grade 6-7':
                'The writer generates tension through a sustained interplay between observation and uncertainty. Denny\'s professional vocabulary - "the fractional hesitation before a lie," "the particular silence of a room that contained someone who was not supposed to be there" - establishes him as an expert reader of situations, which makes his failure to read the woman profoundly unsettling. If he cannot decode her, the reader is equally helpless. The extended metaphor of the city as predator ("ate the slow-witted for breakfast and used the merely average as napkins") establishes a Darwinian world where attention is survival. The woman\'s stillness is weaponised: she stirs her cup "with a steady, circular motion that never varied" - the monotony of the gesture suggesting absolute self-control. The rain transforms the external world into impressionism - "neon signs into watercolours" - blurring legibility in a story that depends entirely on reading signs correctly. The temporal countdown ("It was now three fifty-seven. Three minutes.") compresses time into a weapon, and the phrase "the geometry of the room might shift" intellectualises danger into spatial terms, suggesting that threat is a matter of positioning. The final image - the woman\'s eyes "steady and dark and absolutely unreadable" - uses a tricolon that builds to an absolute: not merely difficult to read but "absolutely" beyond interpretation, a word that slams a door on the possibility of understanding.',
            },
            markScheme: [
              'Identifies and analyses language features (metaphor, simile, tricolon, temporal pressure)',
              'Comments on word choices and their effects',
              'Considers how language creates tension and atmosphere',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'wjec-c1-13-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of the relationship between Denny and the woman in the red hat?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Denny and the woman seem to be opponents in some kind of game. He is watching her but she does not acknowledge him, which puts her in control. He thinks she might have "noticed him immediately and decided he was not worth the expenditure of a glance," which would be insulting to someone with "a high opinion of his own intelligence". He has been told to deliver a package to her, so they are connected through a third party. The fact that they are in the same room but not communicating creates a tense, wary stand-off.',
              'Grade 6-7':
                'The relationship is characterised by an asymmetry of power disguised as mutual indifference. Denny, established as an expert observer, is rendered impotent by the woman\'s refusal to engage: she "gave him nothing." This phrase operates on multiple levels - she offers no information, no reaction, no acknowledgement. The possibility that she "noticed him immediately and decided he was not worth the expenditure of a glance" is devastating to Denny\'s self-conception: the word "expenditure" frames attention as currency, and she has judged him too cheap to spend it on. The delivery task creates an enforced connection - he must approach her - but the three-minute delay suspends them in a charged space between strangers and counterparts. The woman\'s patience ("the patience of a cat watching a mouse hole") is predatory, yet what she watches is the street, not Denny: the feline simile makes her the hunter and leaves him outside the hunt altogether, not even worth watching - an inversion of his self-image as the man who notices everything. The reflection in the window, where he sees her raise her cup, adds a final layer of mediation: at the close he reads her only as a reflection in rain-streaked glass, and whether she has been observing him at all he cannot tell. This suggests a relationship built entirely on indirect reading, where trust is impossible and interpretation is everything.',
            },
            markScheme: [
              'Analyses the dynamic between the two characters with textual support',
              'Comments on power, control, and observation',
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-13-q4',
            questionNumber: 4,
            questionText:
              '"The writer creates a gripping atmosphere of suspense that keeps the reader on edge throughout."\n\nTo what extent do you agree with this view? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                "I agree that the extract is very suspenseful. The writer keeps the reader on edge by not telling us what the package is or why it needs to be delivered. Denny watching the woman creates tension because we don't know if she is dangerous. The countdown to four o'clock gives the extract a deadline, making us feel that something important is about to happen. The rain falling outside the coffee shop window adds to the tense atmosphere. The ending, with the woman's \"unreadable\" eyes, leaves us unsure of what will happen next, which is gripping.",
              'Grade 6-7':
                'I agree strongly, and I would argue that the extract\'s suspense derives not from what happens (almost nothing does) but from the anticipation of what might. Structurally, the extract is built on delay: four o\'clock, the moment on which everything depends, never arrives, and the last two paragraphs dwell inside the final three minutes - a cigarette, a breath of smoke, a reflection. This temporal distortion mirrors Denny\'s heightened state of awareness, where every detail becomes significant. The writer\'s structural control is evident in the progressive narrowing of focus: the extract opens with forty-five minutes of observation, contracts to "three minutes," and the reader senses an inevitable convergence. The package - "small, wrapped in brown paper, heavier than it looked" - is a masterclass in suggestive withholding: we know its physical properties but nothing of its contents, and this gap between material and meaning generates anxiety. The setting contributes through its liminal quality: the coffee shop is a threshold space, the rain outside creating a boundary between inside and outside that might, at any moment, be breached ("the door might open and admit someone whose intentions were less ambiguous"). The woman herself is the extract\'s central engine of suspense because she is a text that cannot be read - and in a narrative where reading (observing, interpreting, decoding) is equated with survival, illegibility is threat. The final image, viewed through glass and rain - mediated, distorted - refuses resolution, leaving the reader suspended in the same uncertainty that defines Denny\'s experience.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Considers how writer creates effects on the reader',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-13-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-13-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when you had to wait for something important.\nYour response could be real or imagined.\n\nOr:\n(b) The Exchange.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques including atmosphere; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled tension sustained through pacing; crafted sensory detail that builds atmosphere; structural sophistication (e.g., compressed timeframe, withheld information); consistent SPaG accuracy with ambitious punctuation.',
              'Grade 8-9':
                'An assured, distinctive piece with: an original voice that controls pace with precision; imagery that combines the physical and the psychological; masterful structural withholding that rewards the reader; technical virtuosity across sentence forms and punctuation.',
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
  // EXAM 14 - Nature Writing
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-14',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-14-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_14_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-14-q1',
            questionNumber: 1,
            questionText:
              'Read the first paragraph. List five things you learn about the river and its surroundings from this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The river was lower than Jem Catling could remember in sixty years. 2. Alders leaned out over the water on the bank. 3. The tree roots were exposed. 4. You could see the riverbed with stones and mud. 5. Hidden objects were revealed, including a bicycle wheel, a boot, and a pram frame.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-14-q2',
            questionNumber: 2,
            questionText:
              "How does the writer use language to vividly portray the natural world?\n\nYou should comment on:\n- the writer's choice of words and phrases\n- the writer's use of language features and techniques\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer brings the natural world to life through vivid description. The heron is described as standing "motionless" and looking as though it was "carved from the same stone as the bridge" - this comparison shows how still and statuesque the bird is. Its eye is "bright, unblinking amber" which makes it sound intense and focused. The description of the heron striking the fish - "a movement so swift it seemed to bypass time entirely" - uses hyperbole to show how incredibly fast it was. The river\'s surface carrying "reflections of clouds" creates a beautiful image of two skies, one above and one below. The simile comparing the exposed roots to "the bones of the earth" makes the riverbank seem like a living body.',
              'Grade 6-7':
                'The writer employs a technique of patient accumulation that mirrors the natural world it describes. The opening simile - roots exposed "like the bones of the earth" - anatomises the landscape, presenting the drought-lowered river as an act of excavation, revealing what is normally hidden. The revealed objects (bicycle wheel, boot, pram) function as a compressed human archaeology, and the phrase "an archaeology of carelessness" transforms ecological observation into moral commentary. The heron is rendered through the language of sculpture and stillness: "carved from the same stone" refuses the animate in favour of the geological, while the eye - "bright, unblinking amber" - concentrates life into a single point of colour. The kill sequence demonstrates the writer\'s temporal control: the long, suspended description of patience gives way to a sentence where the strike "seemed to bypass time entirely." The verb "bypass" suggests not speed but the transcendence of temporal experience. The dying fish\'s "brief and futile convulsion" is devastatingly compressed - two adjectives that contain an entire narrative of struggle and failure. The final passage achieves a sustained lyricism: the river reflects clouds so that "looking down was like looking up into a second, inverted sky" - a simile that dissolves the boundary between above and below, creating a doubled world of quiet symmetry. The swallows\' leaving "as though they carried calendars in their hollow bones" is the extract\'s most memorable image, anthropomorphising instinct as knowledge and transforming departure into admission.',
            },
            markScheme: [
              'Identifies and analyses language features (metaphor, simile, personification, sensory detail)',
              'Comments on word choices and their effects',
              'Considers how language creates a vivid sense of the natural world',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'wjec-c1-14-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Jem Catling and his relationship with the natural world?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Jem Catling seems like an old man who knows the natural world very well. He has been watching the river for sixty years, which shows a long connection to this place. He watches the heron with "professional respect," suggesting he sees the bird as an equal - both of them are patient and observant. He held his breath while watching the heron hunt, which shows he was deeply absorbed in the moment. He sits "among the meadowsweet", suggesting he belongs in this landscape. He has noticed the swallows gathering for three days, showing he pays close attention to seasonal changes.',
              'Grade 6-7':
                'Jem is presented as a figure of deep embeddedness in the natural world - not as a visitor to nature but as a participant in it. His sixty years of river-watching position him as a living archive of ecological knowledge, and the phrase "lower than old Jem Catling could remember" makes his memory the measure of the river\'s condition. His observation of the heron is characterised as "professional respect of one patient creature observing another" - a remarkable phrase that dissolves the boundary between human and animal, casting both as practitioners of the same discipline: attentive stillness. The detail that he "had not realised he had been holding his breath" reveals involuntary sympathy with the heron\'s concentration - his body has mimicked the bird\'s suspension without his conscious knowledge. His physical limitations are noted without sentimentality: his knees have "long since ceased to be allies," a wry military metaphor that acknowledges ageing as a campaign of gradual betrayal. But his positioning among "meadowsweet and the dried seed heads of hogweed" is not merely rest; it is integration. He does not sit beside nature but within it. His sense that the swallows leave "as though they carried calendars in their hollow bones" reveals a perception of the natural world as possessed of its own intelligence, a knowledge that exceeds the human.',
            },
            markScheme: [
              "Analyses Jem's character and relationship with nature",
              'Comments on actions, observations, and implied attitudes',
              'Considers what is suggested as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-14-q4',
            questionNumber: 4,
            questionText:
              '"The writer makes the reader see the beauty in ordinary, everyday moments in the natural world."\n\nTo what extent do you agree with this view? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that the writer finds beauty in simple natural moments. The heron catching a fish is something that happens every day, but the writer makes it seem dramatic and special through detailed description. The reflection of clouds in the water, creating "a second, inverted sky," is a beautiful image of something ordinary. The swallows gathering on wires is a common sight, but the writer makes it meaningful by connecting it to the end of summer. Even the exposed riverbed, with its old objects, is presented as interesting rather than ugly. However, some moments go beyond the "ordinary" - the heron\'s strike, which "seemed to bypass time entirely", feels extraordinary rather than everyday.',
              'Grade 6-7':
                'I agree substantially, though I would refine the claim: the writer does not merely reveal beauty in the ordinary but argues that beauty is the ordinary, perceived with sufficient attention. The extract\'s structural principle is patience: it moves at the pace of the natural world it describes, refusing the conventional narrative urgency of plot or conflict. The heron sequence - which occupies the structural centre - is a demonstration of this principle: the long description of stillness rewards the reader (and Jem) with the explosive moment of the strike. Beauty here is not aesthetic decoration but the product of attentive waiting. The writer\'s language consistently elevates observation into revelation: the exposed roots are not merely visible but lie "like the bones of the earth"; the river surface does not merely reflect but creates "a second, inverted sky"; the swallows do not merely migrate but leave as though they carried "calendars in their hollow bones." Each comparison transforms the seen into the understood. Structurally, the extract moves from the specific (the riverbed, the heron) to the panoramic (the sky, the gathering swallows) to the elegiac (the approaching end of summer), creating a progression from observation to meditation to a gentle acceptance of transience. The final sentence - with its image of swallows who "saw further" and "could not deny" - personifies the birds as prophets and positions their departure as the first honest acknowledgement of what everything else conceals. This structural movement enacts the extract\'s argument: that paying close attention to the natural world leads, inevitably, to an awareness of time and loss, and that this awareness is itself a form of beauty.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Considers how writer creates effects on the reader',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-14-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-14-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when you noticed something beautiful in an unexpected place.\nYour response could be real or imagined.\n\nOr:\n(b) The Last Day of Summer.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques including sensory detail and imagery; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled lyrical quality; crafted imagery that connects the physical and the emotional; structural sophistication (e.g., cyclical patterns, shifts from close-up to wide); consistent SPaG accuracy with ambitious punctuation.',
              'Grade 8-9':
                'An assured, distinctive piece with: an original contemplative voice; precise, original imagery that transforms the ordinary; masterful control of pace and perspective; technical virtuosity including varied and sophisticated sentence forms.',
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
  // EXAM 15 - Southern American
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-15',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-15-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully. Then answer all the questions in this section.\n\nSource: ${EXTRACT_15_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-15-q1',
            questionNumber: 1,
            questionText:
              'Read the first two paragraphs. List five things you learn about the town and Lucille from these paragraphs.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                '1. The heat was so intense that nothing moved except dogs seeking shade. 2. Main Street was empty at two in the afternoon. 3. The courthouse clock had not kept accurate time since the Eisenhower era. 4. Lucille Boudreaux was sitting on her front porch. 5. She was shelling butter beans into a colander.',
            },
            markScheme: ['1 mark per valid point, maximum 5'],
          },
          {
            id: 'wjec-c1-15-q2',
            questionNumber: 2,
            questionText:
              "How does the writer use language to create a vivid sense of place and community?\n\nYou should comment on:\n- the writer's choice of words and phrases\n- the writer's use of language features and techniques\n- the effects on the reader.\n\nYou must refer to the text to support your answer.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'The writer creates a vivid picture of a hot Southern American town. The heat is described as pressing down "like a hand on a chest," a simile that makes it feel suffocating. The empty streets and shimmering storefronts show how extreme the heat is. The detail about the courthouse clock being broken since the "Eisenhower administration" gives a sense of a town where time has almost stopped. The Baptist church appearing to "tremble, as though uncertain of its own convictions" is a humorous personification. Lucille shelling butter beans "pop, pop, pop" uses onomatopoeia that gives a rhythmic, repetitive quality, capturing the slow pace of life. The town\'s gossip is compared to weather - "slowly, invisibly, but with a force that could flatten you" - suggesting the community\'s judgements are a natural force.',
              'Grade 6-7':
                'The writer constructs place through a layered technique that fuses physical environment with social texture. The opening simile - heat "like a hand on a chest" - is simultaneously sensory and oppressive, suggesting both temperature and the town\'s suffocating social pressure. The broken courthouse clock, which "had not kept accurate time since the Eisenhower administration," works as a symbol of institutional decay and temporal stagnation: Beulah exists in a kind of permanent present, resistant to change. The personification of the Baptist church "uncertain of its own convictions" is wryly subversive, using the heat shimmer to question the certainty of the town\'s moral framework. Lucille\'s distinction between "two kinds of truth" - "the kind people spoke aloud and the kind they carried in their bodies" - is the extract\'s philosophical core, positioning knowledge as embodied rather than verbal - truth is revealed through avoidance, through the way "a conversation stopped when certain names were mentioned." The extended simile comparing opinions to weather - moving "slowly, invisibly, but with a force that could flatten you" - captures the peculiar power of small-town consensus: invisible, impersonal, and irresistible. The final image of the sprinkler "throwing brief, useless rainbows into the heavy air" is a complex detail: the rainbows are beautiful but futile, decorative in a landscape of drought and social cruelty, a microcosm of appearance masking substance.',
            },
            markScheme: [
              'Identifies and analyses language features (simile, personification, onomatopoeia, extended simile)',
              'Comments on word choices and their effects',
              'Considers how language creates a sense of place and community',
              'Uses textual references to support analysis',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'wjec-c1-15-q3',
            questionNumber: 3,
            questionText:
              'What impressions do you get of Lucille and her attitude towards the town and its people?\n\nYou must refer to the text to support your answer.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'Lucille comes across as a wise, observant woman who understands her community deeply. She has lived in Beulah for all seventy-three years of her life, which suggests she knows the town and its people very well. She understands that there are two kinds of truth - spoken and unspoken - which shows she is thoughtful and perceptive. She notices the town watching the Fontaine boy but she seems more understanding than judgemental. Her porch gives her a view of the street and of the Fontaine house, suggesting she is someone who watches and reflects rather than gossips. The detail about her fingers "knowing the work" while her mind wanders suggests she is a deep thinker.',
              'Grade 6-7':
                'Lucille is presented as the town\'s unofficial historian and moral conscience - a woman whose seventy-three years of unbroken residency have given her an understanding of Beulah that is simultaneously affectionate and critical. Her philosophical observation about "two kinds of truth" positions her above the town\'s surface narrative: she sees what others perform and what they conceal. The physical detail of her fingers "knowing the work so deeply that her mind was free to wander" is a metaphor for her relationship with Beulah itself - she inhabits its routines so completely that she can observe it from a critical distance while remaining embedded within it. Her attitude toward the town\'s response to the Fontaine boy is observant rather than approving: she "could feel it - the whole town watching," "from behind curtains and above coffee cups", and she names that watching as the town\'s, not her own. The phrase "everybody had an opinion, and the opinions moved through Beulah the way weather moved through it" is her most perceptive observation - she understands communal judgement as a natural phenomenon, impersonal and unstoppable. Yet there is implicit criticism: the comparison to weather that "could flatten you" acknowledges the destructive potential of collective silence. She is not wholly apart from it, though: her final act is to look at the Fontaine house herself, which she can see only "if she leaned just a little to the left". Her look may carry compassion, or at least a curiosity unclouded by the town\'s predetermined verdict. The "brief, useless rainbows" she observes could be read as an image for her own position: beauty and perception in a context that has no use for either.',
            },
            markScheme: [
              "Analyses Lucille's character and attitudes with textual support",
              'Comments on her relationship with the community',
              'Considers what is implied as well as stated',
              'Top band: perceptive, thoughtful interpretation',
            ],
          },
          {
            id: 'wjec-c1-15-q4',
            questionNumber: 4,
            questionText:
              '"The writer presents a community that is both familiar and deeply unsettling."\n\nTo what extent do you agree with this view? You should consider the writer\'s use of language and structure in your response.',
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'evaluation',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 4-5':
                'I agree that the town feels both familiar and unsettling. The familiar details - the porch, the butter beans, the Baptist church, the dogs in the shade - create a recognisable picture of a small Southern town. But underneath this is something darker. The whole town is watching the Fontaine boy but "nobody went to see him" and "nobody called," which is cruel. The silence and the watching feel threatening. The opinions that can "flatten you" suggest the community can be destructive. The heat itself adds to the unsettling feeling, pressing down on everything. However, some details, like Lucille on her porch, feel warm and comforting rather than unsettling.',
              'Grade 6-7':
                'I agree strongly, and I would argue that the extract\'s power lies in the way familiarity and menace are not separate elements but the same thing seen from different angles. The writer structures the extract as a gradual reveal: the first paragraphs set warm, comic details - the broken clock, the trembling church, the shelling of butter beans - beside quieter hints of something harder, such as the way people "crossed the street to avoid a certain house", before the introduction of the Fontaine boy gives that unease a focus. The community\'s surveillance is described through images of domestic intimacy - "behind curtains and above coffee cups and through the slats of venetian blinds" - which makes the watching feel more invasive because it is woven into the fabric of daily life. The structural progression from heat (physical oppression) to silence (social oppression) to watching (psychological oppression) creates a layered portrait of a community whose mechanisms of control are invisible but absolute. The weather simile is the extract\'s most effective device for fusing familiarity with menace: weather in a Southern town is utterly ordinary, yet the writer uses it to describe a force that "could flatten you" - transforming the quotidian into the threatening. The final image of the sprinkler throwing "brief, useless rainbows into the heavy air" is both beautiful and futile - a concentrated expression of the extract\'s argument that in a community like Beulah, beauty and cruelty coexist so completely that they become indistinguishable. The Fontaine boy\'s drawn curtains and rusted truck are details that speak of poverty, isolation, and exclusion, rendered in the same warm, observational prose as Lucille\'s butter beans. This tonal consistency is the writer\'s most unsettling technique: the community\'s cruelty is narrated in the same voice as its charm, suggesting they are inseparable.',
            },
            markScheme: [
              'Evaluates with a clear, sustained personal response',
              'Analyses language and structural methods',
              'Uses textual evidence to support evaluation',
              'Considers how writer creates effects on the reader',
              'Top band: evaluative, critical, conceptualised',
            ],
          },
        ],
      },
      {
        id: 'wjec-c1-15-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. You are reminded of the need to plan your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-15-q5',
            questionNumber: 5,
            questionText:
              'Choose ONE of the following titles for your creative prose writing:\n\nEither:\n(a) Write about a time when someone returned after a long absence.\nYour response could be real or imagined.\n\nOr:\n(b) The Town That Watched.\nWrite a short piece of prose with this title.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear piece of creative prose with: recognisable structure; use of descriptive techniques including setting and atmosphere; varied vocabulary; generally accurate SPaG.',
              'Grade 6-7':
                'A compelling piece with: controlled sense of place and community; crafted dialogue and descriptive prose; structural sophistication (e.g., multiple perspectives, tension between surface and subtext); consistent SPaG accuracy with ambitious punctuation.',
              'Grade 8-9':
                'An assured, distinctive piece with: an original voice that captures a specific place and time; imagery that operates on both literal and symbolic levels; masterful structural control of revelation and withholding; technical virtuosity including varied and sophisticated sentence forms.',
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
]
