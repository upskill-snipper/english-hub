import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Reading Detective: read a passage, then answer five multiple-choice
 * questions on it: what it says ("Find it", retrieval), what it implies
 * (inference), a word or image (language), how it is built (structure), the
 * narrator's or writer's attitude (viewpoint), and which quotation best proves
 * a claim (evidence). A round plays three passages, dealt whole, fifteen
 * questions in all (src/app/games/reading-detective/page.tsx).
 *
 * Moved out of src/app/games/reading-detective/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The bank lists every passage's questions one by one, each with its passage.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, 16
 * October 2026):
 *
 *   - "What name is given to scientists who study volcanoes?" offered
 *     Geologists beside Volcanologists, and a volcanologist is a geologist, so
 *     a student who knew that was marked wrong (the question has since gone:
 *     see below);
 *   - "What should you do after folding the paper in half lengthways?"
 *     offered "Fold the wings", which the instructions also have you do after
 *     that fold, later on;
 *   - the right answer to "Why was the narrator so curious about the drawer?"
 *     read "It was being forbidden made it tempting", which is not a sentence;
 *   - four questions whose answers the passage states in so many words were
 *     labelled "Work it out" (inference). They became "Find it" (retrieval),
 *     which is also the skill the student's account records for them.
 *
 * THE OPTIONS WERE NEVER SHUFFLED (found by the second reader, 16 October
 * 2026). The page showed each question's options in the order written here,
 * and the right answer was written first or second in 33 of 36. The page now
 * shuffles each question's options per attempt with the site's shared helper
 * (src/lib/quiz/shuffle.ts) and marks a click by the option itself, not by its
 * position; `answer` names the right option as written.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder that day: the games are
 * "too obvious and easy. not enough depth", and "use as much actual text as
 * possible". Measured (.tmp-games-audit/REPORT-ks3.md): twelve passages of
 * about 65 words, used up in six or seven rounds; the right option the
 * longest in 26 of 36 questions, so picking the longest scored 78 per cent
 * without reading; nothing on language, structure, viewpoint or choosing a
 * quotation; and an explanation that gave the next question's answer. What
 * changed:
 *
 *   - 43 passages of 200 to 350 words, five questions each, 215 questions.
 *     31 are real extracts from works out of UK copyright, cut word for word
 *     from the held texts in src/data/full-texts/ (each passage's `source`
 *     says which, and where), only at sentence ends, keeping the held text's
 *     own spelling, punctuation and italics: Great Expectations (chapters 1,
 *     4, 25), A Christmas Carol (staves 1, 1, 2, 5), Jane Eyre (1, 2, 7),
 *     Pride and Prejudice (3, 7), Silas Marner (5, 12, 14), Frankenstein
 *     (letter 4, chapters 11, 12), Jekyll and Hyde (1, 2), The Sign of Four
 *     (1, 2, 7), The War of the Worlds (book 1, chapters 1, 2), Animal Farm
 *     (1, 2, 3, 10), Kipling's If and Keats's La Belle Dame sans Merci. None
 *     repeats an extract Comprehension Challenge uses. The other twelve are
 *     the site's own: the original passages, each lengthened around its
 *     sentences, because no held text is a modern story, fact box, set of
 *     instructions or blog post.
 *   - Every question has a tier (Question.tier): 62 at tier 1, 69 at tier 2
 *     and 84 at tier 3, as the check below left them. Each passage asks its
 *     easiest first.
 *   - Four new kinds of question: language (39), structure (31), viewpoint
 *     (16) and evidence (29), beside retrieval (62) and inference (38), as
 *     the check below left them.
 *   - Options of one form and close in length. The answer is the unique
 *     longest option in 15 per cent of questions and the unique shortest in
 *     11, and where one option stands out, a quarter longer or shorter than
 *     every other, it is the answer in 3 of 41 (it was in 59 of 100 before
 *     the check below). Wrong options are misreadings a student makes or
 *     details from elsewhere in the passage; a quotation offered as an
 *     option is copied from the passage.
 *   - Within a passage, no question's prompt or explanation states another's
 *     answer, since the page asks a passage's questions together: no
 *     question asks how a character feels when another asks for the best
 *     evidence of that feeling.
 *   - The two spaced hyphens the site's own passages used as dashes (in
 *     Volcanoes and Why I Switched Off Notifications) are gone.
 *
 * The original 36 questions: 25 kept, each with new options and a new
 * explanation, and 11 removed:
 *
 *   - kept with their options as they were: "How did Ana feel about the
 *     track at first?" and "In which direction does the Nile flow?" ("How
 *     many times had Mara checked her watch?" was too, until the check below
 *     replaced "Twice");
 *   - kept with new options: the rest, among them "Why could Mara not take a
 *     taxi?", now "Find it", since the passage says why with "so";
 *     "What is melted rock called once it reaches the surface?" (Gas is now
 *     Pumice); and "What can you infer about the plant's roots before
 *     repotting?", whose "They are painted" was absurd;
 *   - "What should you do after folding the paper in half lengthways?" is now
 *     "In step 1, what should you do straight after folding the paper in
 *     half?": the lengthened instructions fold the sheet in half again at
 *     step 4, which made "Fold it in half again" arguable (the writer's
 *     "straight after" left the wings, which follow step 4, right as well:
 *     see the check below);
 *   - removed because the passage states the answer in so many words: "What
 *     does the passage suggest would happen if bees disappeared?", "How does
 *     the writer feel by the end?" (the coding club), "What kind of throw does
 *     the text recommend?", "How did the writer feel by Sunday evening?",
 *     "Why did the yearly floods help farmers?" and "Why should you avoid
 *     sheltering under a lone tree?";
 *   - removed because the stem gave the answer away: "What name is given to
 *     scientists who study volcanoes?" (the stem's own "volcanoes") and "Why
 *     do volcanologists monitor warning signs?", whose prompt named the other
 *     question's answer;
 *   - removed because a new question in the same passage would have given it
 *     away, or it the new one: "How does Mara most likely feel when the
 *     headlights appear?" (beside "Which detail best shows Mara's relief?")
 *     and "What does Ana's grin at the end show?" (beside the evidence
 *     question on Ana's change of mind).
 *
 * CHECKED (24 October 2026) by a second, independent reader, as the founder
 * decided: every question read against its passage; each of the 31 extracts
 * found as one unbroken run of its held section, cut at sentence ends; every
 * quotation in an option and an explanation checked against the passage (one
 * explanation, Wemmick's gun, had left out "said Wemmick" with no ellipsis);
 * each author dead by 1955 (Orwell, the latest, in 1950); and the facts in
 * the site's own passages (a twelfth of a teaspoon, the waggle dance, more
 * than 250 kinds of UK bee, Kilauea 1983 to 2018, Arthur's Seat, the Nile's
 * 6,650 kilometres, eleven countries and Khartoum, Kemet, the Aswan High Dam
 * in 1970, a kilometre every three seconds, thirty minutes after the last
 * thunder). The three moments the writer weighed for readers of 11 to 14
 * (the convict's threat in Great Expectations chapter 1, the room where Mr.
 * Reed died, Scrooge's "surplus population") stay: each is a set text's own,
 * widely taught at that age, and none is dwelt on. Fixed, one line each:
 *
 *   A second right answer, or one question repeating another:
 *   - The Last Bus, the watch: "had checked" can mean before this check,
 *     which made "Twice" right too. It is now "Four times" (four o'clock).
 *   - Making a Paper Aeroplane, the first fold: step 4 folds the sheet in
 *     half along the lengthways crease and the wings come next, so "Fold the
 *     wings down" was right too. The prompt now names step 1.
 *   - Eppie, 'must proceed to extremities': the same sentence and the same
 *     point as the question before it ('a trembling sense that he was using
 *     a strong measure'), whose explanation gave its answer. It is now an
 *     inference on 'The weaving must stand still a long while this morning'.
 *
 *   The wrong kind or tier:
 *   - Staying Safe in a Storm, the metal roof: the passage gives the reason
 *     ("because the charge travels"), so "Find it" at tier 2, not inference
 *     at tier 3.
 *   - Christmas Morning, why Scrooge is pleased: he says it ("I haven't
 *     missed it"), so "Find it" at tier 1.
 *   - Two Gentlemen Call, Scrooge's questions: asks what they suggest, not
 *     how the passage is built, so inference, not structure.
 *   - Volcanoes, 'dormant': the passage defines it word for word: tier 1.
 *   - Repotting a Plant, 'Do not be alarmed': the line says it: tier 2.
 *   - Why I Switched Off Notifications, the washing machine: tier 2, which
 *     also puts the passage's easiest first again.
 *   - Holmes Explains, observation and deduction: telling two ideas apart,
 *     tier 2.
 *   - Pinchin Lane, 'a most magical effect': tier 2, easiest first again.
 *   - If, who is speaking: a tier 2 question came last; it now comes third.
 *
 *   Options no reader would choose, a stem that gave a clue, or an answer
 *   whose form differed from its options':
 *   - The Last Bus, the third paragraph: three options began "It shows",
 *     one being "she has fallen asleep", and the stem's "hopes" was in the
 *     answer. New options; the stem now says her heart lifts and sinks.
 *   - The Honey Bee, 'only part of the story': "found only in stories" was a
 *     joke, and the answer 52 characters against 33 to 36. New options.
 *   - The Honey Bee, the final paragraph: "To advertise a brand of honey".
 *     Near neighbours now (to blame, to explain, to warn).
 *   - Repotting a Plant, the watering: "Only once it is repotted" denied the
 *     stem. It is now "Just before you tip it out".
 *   - Repotting a Plant, the opening: "never repot a houseplant", and the
 *     answer 56 characters against 41 to 44. New options.
 *   - Volcanoes, the third paragraph: only the answer described a structure.
 *     The options are four orders now, one of them the answer reversed.
 *   - The Marble Race, Ana's silence: "She has fallen asleep", and the answer
 *     alone began "It". New options.
 *   - The Marble Race, the two failures: "They explain how marbles are made".
 *     New options.
 *   - Staying Safe in a Storm, the opening: "Because counting seconds stops
 *     lightning" is now "So you know how long the storm will last".
 *   - If, keeping your head: "Keep your hat on in a strong wind" is now
 *     "Remember facts when others forget them".
 *   - Holmes Explains, the chuckle: the stem's "surprising" matched the
 *     answer's "surprise". It now asks what shows him amused by Watson's
 *     astonishment.
 *   - The Cottagers, the narrator moved: "'I observed, with pleasure'", his
 *     pleasure at his own help, replaces the young woman's loud voice.
 *   - The Big Barn, the tone: the stem called Orwell's narrator "he".
 *   - By the Hearth, the gold on the floor: the answer said "its yellow
 *     hair" with no child named. It now says the child's.
 *   - Why I Switched Off Notifications, the washing machine: the answer
 *     alone began "They", among three "The writer".
 *   - Walworth, the 'chasm': the answer alone did not begin "It".
 *   - Old Fezziwig, 'In came': the answer alone did not begin "It".
 *   - The Ice, the letter: the answer alone did not begin "It".
 *   - The By-Street, the cheerful street: the answer alone did not begin
 *     "To".
 *   - A Frosty Night, the footstep: the answer alone did not begin "It".
 *   - The Falling Star, the stillness: the answer alone did not begin "It".
 *   - The Yard, the pig on his hind legs: the answer alone did not begin
 *     "It".
 *   - If, 'impostors': the answer alone did not begin "Both".
 *   - If, the 'If' clauses: the answer alone did not begin "It".
 *   - La Belle Dame sans Merci, the last stanza: the answer alone did not
 *     begin "It shows".
 *   - The Eve of the War, the microbes: the answer alone did not begin
 *     "Humans".
 *   - By the Hearth, the false hope: the answer alone began "So".
 *
 *   Length gave the answer away. Where one option was a quarter longer or
 *   shorter than every other, it was the answer in 59 of 100 such questions
 *   (the writer's measure, the unique longest in 20 per cent, could not see
 *   it). Each line shortens or lengthens the answer, or a quotation, without
 *   changing what it says (answer, then the other options, in characters):
 *   - The Last Bus: the taxi (21; 28 to 32); Mara's relief (65; 35 to 51).
 *   - My First Coding Club: the welcome (79; 30 to 38).
 *   - The Locked Drawer: the narrator's curiosity (56; 32 to 34).
 *   - Volcanoes: the Ring of Fire (21; 32 to 35).
 *   - Making a Paper Aeroplane: the nose dive (45; 26 to 37).
 *   - Why I Switched Off Notifications: reaching for the phone (60; 39 to
 *     42).
 *   - The River Nile: Khartoum (11; 18 to 28); 'the black land' (56; 31 to
 *     39).
 *   - Staying Safe in a Storm: the metal roof (66; 39 to 46).
 *   - Learning to Cook: the fifth attempt (59; 33 to 42).
 *   - On the Marshes: 'savage lair' (53; 38 to 41); the man's suffering (17;
 *     24 to 40).
 *   - Christmas Dinner: the fowls (24; three of 32); the grown-ups (51; 42
 *     to 47).
 *   - Walworth: the gun (18; 26 to 27); the narrator touched (71; 43 to 46).
 *   - Scrooge: the last paragraph (52; 38 to 41); mean with money (14; 25 to
 *     42).
 *   - Two Gentlemen Call: the fund (22; 33 to 37); the pen (63; 49 to 53).
 *   - Old Fezziwig: the desk (11; 19 to 24); the fiddler's energy (60; 19 to
 *     38).
 *   - Christmas Morning: Scrooge pleased (20; 26 to 32); the pace (55; 42 to
 *     49).
 *   - A Winter Afternoon: 'physical inferiority' (54; 40 to 48); 'shrined'
 *     (26; 41 to 43).
 *   - The Red-Room: 'no jail' (60; 38 to 42); the figure in the glass (18; 38
 *     to 42).
 *   - Mr. Brocklehurst: the ending (62; 47 to 51); the shaking hand (18; 27
 *     to 40).
 *   - The Ball: 'fastidious' (20; 40 to 47); 'tolerable' (51; 37 to 45).
 *   - Elizabeth Sets Out: her eagerness (72; 24 to 50).
 *   - By the Loom: the guineas at supper (24; 34 to 40); the drowning man
 *     (57; 37 to 42).
 *   - By the Hearth: 'the chasm' (30; 42 to 47); the false hope (62; 46 to
 *     52).
 *   - Eppie: her misdeeds (29; 32 to 36); the narrator's view (54; 40 to 46).
 *   - The Ice: the land (55; 41 to 47); the mood (31; 39 to 45).
 *   - In the Forest: the wet branches (13; 19 to 27); his mind (64; 44 to
 *     47).
 *   - The Cottagers: the narrator moved (19; 40 to 54); how we see him (63;
 *     44 to 45).
 *   - The By-Street: 'smiling saleswomen' (29; 41 to 45); the neglect (69; 43
 *     to 63).
 *   - A Frosty Night: 'a ballroom floor' (58; 39 to 43).
 *   - Holmes Explains: the instep (13; 20 to 25); 'Eliminate' (67; 50 to 55).
 *   - Miss Morstan: 'limited means' (15; 28 to 30); Watson's feelings (60; 43
 *     to 45).
 *   - Pinchin Lane: 'a most magical effect' (33; 39 to 40); the spellings
 *     (62; 37 to 41).
 *   - The Eve of the War: men on Mars (58; 37 to 43); 'those departed days'
 *     (20; 33 to 38).
 *   - The Falling Star: the black mark (57; 33 to 38).
 *   - The Big Barn: 'cynical' (20; 31 to 32); the tone (62; 37 to 44).
 *   - The Farmhouse: 'unanimous' (21; 34 to 35); the hams (64; 41 to 45).
 *   - The Harvest: the tools (56; 33 to 40).
 *   - The Yard: the pig on his hind legs (64; 35 to 45).
 *   - If: keeping your head (59; 33 to 38); who is speaking (23; 28 to 36).
 *   - La Belle Dame sans Merci: 'palely loitering' (54; 41 to 44).
 *
 *   Then the opposite tell: the answer was the unique longest option in only
 *   5 questions, so "never the longest" would have paid. Twenty-seven answers
 *   then the second longest by a few characters gained a word, none standing
 *   out (the honey bee's structure; the coding club's ending; 'dormant' and
 *   the bulging ground; the final view of phones; the grandmother's pasta and
 *   the burn mark; Pip's name; the Christmas dinner's build-up; the oyster,
 *   the cold within and 'tight-fisted'; the boy's board; the lost walk and
 *   Jane's exclusion; 'tolerable'; Elizabeth's walk; Silas's hiding place and
 *   the drowning man; the cottagers' food; the blind forehead; the letter
 *   Watson never wrote; Miss Morstan's composure; the microbes and the great
 *   disillusionment; the animals' arrival; the pigs who do not work).
 */

/**
 * What a question asks a reader to do, and the badge the page shows over it:
 * find what the passage says (retrieval), work out what it means (inference),
 * weigh a word or image (language), see why the writer orders it so
 * (structure), read the narrator's or writer's attitude (viewpoint), or choose
 * the quotation that best proves a claim (evidence). The last four were added
 * on 24 October 2026.
 */
export type QType = 'retrieval' | 'inference' | 'language' | 'structure' | 'viewpoint' | 'evidence'

export interface Question {
  prompt: string
  options: string[]
  /** index into options of the correct answer */
  answer: number
  type: QType
  /**
   * 1 finding and recognising; 2 understanding (an inference, a word or image
   * in context, why a writer orders it so); 3 the exam skill (the effect of one
   * precise word, best evidence, a viewpoint or a reading the passage
   * supports). Each passage asks its easiest first. Added 24 October 2026.
   */
  tier: 1 | 2 | 3
}

export interface Passage {
  kind: string
  title: string
  /**
   * Paragraphs separated by a blank line, which the page prints one by one; in
   * a poem, lines separated by a single line break. `_word_` is the author's
   * italics, as the held texts mark them.
   */
  text: string
  /**
   * For a real extract: who wrote it and where in the work it comes from,
   * printed under the passage, and the held text it was cut from word for
   * word (src/data/full-texts/<held>.ts, the section titled `section`). A
   * passage without a source is the site's own.
   */
  source?: { author: string; work: string; where: string; held: string; section: string }
  questions: Question[]
}

/** A passage's paragraphs, as the page prints them. */
const paragraphs = (...p: string[]) => p.join('\n\n')

export const PASSAGES: Passage[] = [
  // ─── The site's own passages: modern stories and non-fiction ───
  {
    kind: 'Story snippet',
    title: 'The Last Bus',
    text: paragraphs(
      'Mara checked her watch for the third time. The 17:40 should have arrived eight minutes ago, and the sky was turning the colour of cold tea. Rehearsal had overrun again, and by the time Mr Okoro finally let them go, the car park was empty and everyone else had been collected.',
      "She pulled her sleeves down over her hands. The shelter had three walls and a bench, and the timetable behind its scratched plastic was so faded that it might have been describing buses from another century. Her phone had died at four o'clock, halfway through a game of chess with her brother. She had spent her last coins on a sandwich at lunch, so a taxi was out of the question.",
      'A car went past, then another, their tyres hissing on the wet road. Each time a light appeared at the far end of the street, her heart lifted, and each time it sank again as the light turned out to belong to something smaller. She began to count the lamp posts, then the bricks in the wall opposite, then the seconds between cars.',
      'When a pair of headlights finally swung round the corner, high and wide and unmistakable, she stood up so quickly that her bag slid off the bench. She did not bother to brush the mud from it. The doors folded open with a sigh, warm air rolled out to meet her, and the driver nodded as if he had been expecting her all along.',
      'Mara dropped into the seat above the heater and let out a breath she felt she had been holding for half an hour.',
    ),
    questions: [
      {
        prompt: 'How many times had Mara checked her watch?',
        options: ['Three times', 'Once', 'Four times', 'Eight times'],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why could Mara not take a taxi?',
        options: [
          'She had promised to take the bus',
          'She had spent all her money',
          'The taxi rank had closed early',
          'No taxis came down that road',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'the sky was turning the colour of cold tea' suggest about the evening?",
        options: [
          'A storm is about to break overhead',
          'The sun is rising after a long night',
          'It is growing dull, brown and gloomy',
          'It is a warm and cosy summer night',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "In the third paragraph, Mara's heart lifts and sinks again and again. How does this build tension?",
        options: [
          'It hurries the story on towards the bus',
          'It hints that someone is following her',
          'It shows the street growing ever busier',
          'It stretches the wait with each false hope',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: "Which detail best shows Mara's relief?",
        options: [
          "'let out a breath she felt she had been holding'",
          "'She pulled her sleeves down over her hands'",
          "'She began to count the lamp posts'",
          "'the driver nodded as if he had been expecting her'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The Honey Bee',
    text: paragraphs(
      'A single honey bee will produce only about a twelfth of a teaspoon of honey in its entire life. To make one jar, thousands of bees must visit millions of flowers. A worker bee born in summer lives for only around six weeks, and she spends almost all of that time working: cleaning cells, feeding young bees, guarding the entrance and, in her final weeks, flying out to gather food.',
      'Inside the hive, nectar is passed from bee to bee and stored in wax cells. The bees fan their wings over the cells until much of the water has evaporated and the nectar has thickened into honey. Each cell is then sealed with a lid of wax, ready for the winter.',
      'Bees communicate the direction of food by performing a movement scientists call the "waggle dance". A returning bee runs in a straight line, waggling her body, then loops round to start again. The angle of the run shows the other bees which way to fly in relation to the sun, and the length of the waggle shows how far away the flowers are.',
      'Without bees and other pollinators, many of the fruits and vegetables we eat would become far harder to grow. As bees move from flower to flower, they carry pollen, which plants need in order to make fruit and seeds. Honey bees are only part of the story: the United Kingdom is home to more than 250 kinds of bee, and most of them live alone rather than in hives.',
      'Many of these bees are struggling as meadows disappear and gardens are paved over. Planting even a small patch of wild flowers can give them somewhere to feed.',
    ),
    questions: [
      {
        prompt: 'How much honey does one bee make in its whole life?',
        options: [
          'About half a jar in a summer',
          'About a twelfth of a teaspoon',
          'About a quarter of a teaspoon',
          'About a teaspoon each week',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What is the "waggle dance" used for?',
        options: [
          'To choose which bee will be the queen',
          'To keep the honey cells warm at night',
          'To tell other bees where to find food',
          'To warn the hive that wasps are near',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'Honey bees are only part of the story' mean here?",
        options: [
          'Honey bees do less work than other bees',
          'The facts about honey bees are unproven',
          'More facts about honey are still to come',
          'Many other kinds of bee matter as well',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'How is the fact box organised?',
        options: [
          "From one bee's work to the importance of all the bees",
          'From the oldest facts to the newest discoveries',
          'From the dangers bees face to how honey is sold',
          "From one bee's story to a recipe that uses its honey",
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'What is the main purpose of the final paragraph?',
        options: [
          'To blame people for paving gardens',
          'To urge readers to help the bees',
          'To explain why meadows are vanishing',
          'To warn that bees will die out',
        ],
        answer: 1,
        type: 'viewpoint',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Repotting a Plant',
    text: paragraphs(
      'How do you know when a houseplant needs a new home? Look underneath the pot. If roots are poking out of the drainage holes, or if water runs straight through the soil as soon as you pour it in, the plant has probably outgrown its pot. Spring is the best time to move it, because the plant is starting to grow again after the winter.',
      'You will need a pot with drainage holes, fresh compost, a watering can and some newspaper to catch the mess.',
      'Before you begin, water the plant lightly an hour ahead so the soil holds together. Choose a new pot only one size larger than the old one; a pot that is too big can lead to soggy roots, because the extra compost holds water that the roots cannot yet reach.',
      'Spread out the newspaper and put a layer of compost in the bottom of the new pot. Gently tip the plant out, loosen the tangled roots with your fingers, and place it in fresh compost. The top of the old soil should sit about two centimetres below the rim, which leaves room for watering.',
      'Fill the gaps around the sides with more compost. Finally, press the soil down softly and water it once more.',
      'Keep the plant out of strong sunlight for a week while its roots settle. Do not be alarmed if it droops a little at first: it is getting used to its new home.',
    ),
    questions: [
      {
        prompt: 'When should you water the plant before starting?',
        options: [
          'A week before you start',
          'Just before you tip it out',
          'An hour before you begin',
          'The night before you start',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why should the new pot be only one size larger?',
        options: [
          'A bigger pot would be too heavy to move',
          'Larger pots let in too much strong sunlight',
          'The plant would grow far too tall too fast',
          'Spare compost stays wet and roots go soggy',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What can you infer about the plant’s roots before repotting?',
        options: [
          'They are tangled and cramped',
          'They are dry, brown and dead',
          'They have been cut back short',
          'They are floating in water',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          'Why does the writer begin with signs that a plant needs repotting, before listing what you need?',
        options: [
          'To show that every plant must be repotted',
          'So readers can check the job is needed',
          'To warn readers that repotting is risky',
          'So readers will buy a bigger pot first',
        ],
        answer: 1,
        type: 'structure',
        tier: 2,
      },
      {
        prompt: "Why does the writer add 'Do not be alarmed if it droops a little at first'?",
        options: [
          'To tell readers to repot it all over again',
          'To admit the instructions might be wrong',
          'To reassure readers that drooping is usual',
          'To warn that the plant has probably died',
        ],
        answer: 2,
        type: 'viewpoint',
        tier: 2,
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'My First Coding Club',
    text: paragraphs(
      "I almost did not go. The poster in the library said 'Coding Club: all welcome', but I had decided that 'all' meant people who already knew what they were doing. I imagined a room full of experts who would laugh at my questions. I walked past the door twice before my sister, who had come to return her books, gave me a shove.",
      "Instead, the leader handed me a sticky note and said everyone there had once been a beginner. 'Write down anything that confuses you,' she said, 'and stick it on the board. We answer every single one.' By the end of the evening the board was yellow with notes, and only a few of them were mine.",
      'We were making simple games. For the first half-hour my cat refused to do anything at all. Then Priya, who was sitting next to me, pointed out that I had told it to move when someone pressed a key, but had never told it which key. I fixed one line, pressed the space bar, and watched the cat glide across the screen like a tiny furry skater.',
      'I cannot pretend I understood everything. Loops still make my head spin, and I have no idea what half the buttons do. But nobody laughed, not once, and when I asked a question I thought was silly, two other people said they had been wondering the same thing.',
      'I walked home grinning, already planning what to build next week. It turns out that the hardest part of coding was not the code. It was walking through the door.',
    ),
    questions: [
      {
        prompt: 'What did the leader hand the writer?',
        options: ['A library card', 'A coding manual', 'A poster', 'A sticky note'],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why did the writer almost not go?',
        options: [
          'They feared being laughed at',
          'They had to return books to the library',
          'They did not know where the club met',
          'They had no computer of their own',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'the board was yellow with notes' suggest?",
        options: [
          'The writer had covered it with questions',
          'Many people had questions, not just the writer',
          'The board had been painted a bright shade of yellow',
          'Nobody had asked a single question all night',
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "Why does the writer end with 'It was walking through the door'?",
        options: [
          'The writer will not go back next week',
          'Coding is too hard for most to learn',
          'The real challenge was nerves, not the code',
          'The door to the club was very hard to open',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that the club makes beginners feel welcome?',
        options: [
          "'Loops still make my head spin'",
          "'my cat refused to do anything at all'",
          "'I walked past the door twice'",
          "'But nobody laughed, not once'",
        ],
        answer: 3,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Locked Drawer',
    text: paragraphs(
      'Dad had told us never to touch the bottom drawer of his desk, so of course it was all I could think about. My sister said it was full of money. My best friend was certain it held clues to a crime. I privately hoped for treasure maps.',
      'One rainy afternoon, with Dad at work and my sister at football, I found the small brass key hidden under a pot of pencils. My hands were shaking as I turned it. The drawer stuck, then slid open with a groan that seemed loud enough to be heard down the street.',
      "Inside there were no jewels or secrets, only a faded photograph of a boy who looked exactly like me. He had my sticking-out ears and the same gap between his front teeth, and he was holding up a muddy trophy as if it were made of gold. I turned the photograph over. On the back, in my grandmother's careful handwriting, it said: Michael, aged twelve, Under-13s cup final.",
      "Michael is my dad's name.",
      'I was still staring at it when I heard the front door. There was no time to hide anything. Dad stood in the doorway of the study with his coat dripping, and looked at the open drawer, then at the photograph in my hand.',
      'I waited for the shouting. Instead, he sat down on the edge of the desk and smiled in a way I had never seen before.',
      "'We lost that final six-nil,' he said. 'But your gran was so proud, you'd think we'd won the World Cup.'",
    ),
    questions: [
      {
        prompt: 'Where was the brass key hidden?',
        options: [
          'Under a pot of pencils',
          "In Dad's coat pocket",
          'Behind the study door',
          'Inside a football boot',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What was actually inside the drawer?',
        options: ['A bundle of money', 'A photograph', 'A treasure map', 'A muddy trophy'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why was the narrator so curious about the drawer?',
        options: [
          'It made a strange noise at night',
          'Their sister had said it was empty',
          'Dad had forbidden them to touch it',
          'A friend had dared them to open it',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "Why does the writer give 'Michael is my dad's name.' a paragraph of its own?",
        options: [
          "It shows the narrator had forgotten Dad's name",
          'It starts a new part of the story, years later',
          'It explains why Dad was angry about the drawer',
          'It lets the surprise of who the boy is sink in',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that Dad is not angry about the drawer?',
        options: [
          "'smiled in a way I had never seen before'",
          "'looked at the open drawer'",
          "'Dad stood in the doorway of the study with his coat dripping'",
          "'I waited for the shouting'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'Volcanoes',
    text: paragraphs(
      "A volcano is an opening in the Earth's surface through which melted rock, ash and gases can escape. Melted rock below the ground is called magma; once it reaches the surface it is called lava.",
      "Most volcanoes form along the edges of the huge slabs of rock, called tectonic plates, that make up the Earth's outer layer. Where plates pull apart or push against one another, magma can find a way up. So many volcanoes surround the Pacific Ocean that the area is known as the Ring of Fire.",
      'Not all volcanoes erupt violently. Some release lava slowly and steadily for years: Kilauea, in Hawaii, erupted almost without a break from 1983 to 2018. Others, fed by thick, sticky magma, trap gas until the pressure becomes too great and they explode, hurling ash high into the sky.',
      "Scientists sort volcanoes into three groups. An active volcano has erupted in recent history and could erupt again. A dormant volcano is quiet for now but may wake. An extinct volcano is not expected to erupt ever again; Arthur's Seat, the hill that rises above Edinburgh, is what remains of one that last erupted millions of years ago.",
      'Scientists who study volcanoes are known as volcanologists, and they monitor warning signs to help keep nearby towns safe. Swarms of small earthquakes, ground that bulges upwards and changes in the gases escaping from a volcano can all suggest that magma is on the move.',
    ),
    questions: [
      {
        prompt: 'What is melted rock called once it reaches the surface?',
        options: ['Pumice', 'Lava', 'Magma', 'Ash'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why is the area around the Pacific Ocean called the Ring of Fire?',
        options: [
          'Clouds of ash hang high above it',
          'The sun sets there in a ring of red',
          'Many volcanoes surround the ocean',
          'Hot lava flows across its sea floor',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'dormant' mean, as the passage uses it?",
        options: [
          'Never expected to erupt again at all',
          'Erupting almost all of the time',
          'Too small to do any harm at all',
          'Quiet for now, but it may erupt again',
        ],
        answer: 3,
        type: 'language',
        tier: 1,
      },
      {
        prompt: "Why do volcanologists watch for 'ground that bulges upwards'?",
        options: [
          'It may mean that magma is rising up below',
          'It shows that the volcano is now extinct',
          'It means the soil is good for farming',
          'It shows that an earthquake has ended',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "How does the third paragraph develop the idea that 'Not all volcanoes erupt violently'?",
        options: [
          'A warning, then advice on staying safe',
          'A gentle example, then an explosive contrast',
          'A list of eruptions from oldest to newest',
          'An explosive example, then a gentle contrast',
        ],
        answer: 1,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Making a Paper Aeroplane',
    text: paragraphs(
      'You will need one clean sheet of paper and a flat surface. The whole job takes about five minutes.',
      '1. Take a clean sheet of A4 paper and fold it exactly in half lengthways, then open it out again so a crease remains.',
      '2. Fold the top two corners in to meet the centre line, forming a sharp point.',
      '3. Fold the new slanting edges in to the centre line as well, so that the point becomes longer and narrower.',
      '4. Fold the whole sheet in half along the first crease, with the folded flaps on the outside.',
      "5. Fold each side down to make the wings, keeping both sides even so the plane flies straight. The bottom edge of each wing should line up with the bottom edge of the plane's body.",
      'Hold it under the wings and launch it with a gentle, level throw. Throwing harder does not make it fly further: a hard throw usually sends a paper plane into a loop or straight into the floor.',
      'If your plane dives nose first, bend the back edges of both wings up very slightly. If it climbs steeply and then drops, bend them down a little instead. Small changes make a big difference, so adjust one thing at a time and test again.',
      "Finally, fly it somewhere open, and never aim it at anyone's face: even a paper point can hurt an eye.",
    ),
    questions: [
      {
        prompt: 'In step 1, what should you do straight after folding the paper in half?',
        options: [
          'Fold the wings down',
          'Turn it over',
          'Open it out again',
          'Tear it along the crease',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why must both sides be kept even?',
        options: [
          'So the point stays very sharp',
          'So it can be thrown harder',
          'So the wings can bend up later',
          'So the plane flies straight',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Your plane keeps diving nose first. What should you change?',
        options: [
          "Bend the wings' back edges up",
          "Bend the wings' back edges down",
          'Throw it harder and higher',
          'Fold the point longer and thinner',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "Why do so many sentences begin with verbs such as 'Take', 'Fold' and 'Hold'?",
        options: [
          'They list the materials you will need',
          'They command you to do each step',
          'They describe what the writer once did',
          'They are questions for the reader',
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'Why are the folding steps numbered, but the advice after them is not?',
        options: [
          'The tips matter more than the folds do',
          'The numbers show how long each step takes',
          'The folds must come in order; the tips as needed',
          'The writer simply forgot to number the last part',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Why I Switched Off Notifications',
    text: paragraphs(
      'For months my phone buzzed every few minutes, and I felt I had to reply at once. Group chats, game reminders, a video app telling me that someone I had never met had posted something new: each buzz pulled my eyes away from whatever I was doing. One evening I watched a whole film with my family and realised afterwards that I could not say how it ended.',
      'So last weekend I tried an experiment. I turned every notification off and left the phone in another room while I read.',
      'At first I kept reaching for a phone that was not there. My hand would drift towards my pocket as if it had a mind of its own. On Saturday morning I read the same page over and over. I was certain I was missing something important.',
      'I was not. When I finally checked, on Saturday night, there was nothing that could not have waited: a few jokes in the group chat, two adverts and a reminder about a game I had stopped playing.',
      'By Sunday evening I had finished an entire book and felt strangely calm, something I had not felt in a long time. It was a quiet sort of feeling, like the moment after a washing machine stops spinning, when you suddenly notice how loud it had been.',
      'I have not given up my phone, and I do not think anyone needs to. But I have turned back on only the notifications that come from people, not from apps. The rest can wait until I choose to look.',
    ),
    questions: [
      {
        prompt: 'Where did the writer leave their phone while reading?',
        options: [
          'Inside their pocket',
          'Beside their book',
          'With their family',
          'In another room',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What does "kept reaching for a phone that was not there" suggest?',
        options: [
          'Checking it had become an automatic habit',
          'The writer had lost the phone somewhere',
          'The phone had been broken over the weekend',
          'The writer was expecting an important call',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "What does the comparison to 'the moment after a washing machine stops spinning' suggest?",
        options: [
          'The writer missed the buzzing of the phone',
          'The writer saw how loud it was once it stopped',
          'The writer did the washing on Sunday evening',
          "The writer's head was still spinning with dizziness",
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'Why does the writer describe watching a film and not knowing how it ended?',
        options: [
          'It proves the film was much too long',
          'It explains how to use a phone well',
          'It shows the problem that led to the experiment',
          'It recommends a good film for families to watch',
        ],
        answer: 2,
        type: 'structure',
        tier: 2,
      },
      {
        prompt: "What is the writer's final view of phones?",
        options: [
          'Everyone should give up phones completely',
          'Notifications from people are the worst',
          'Apps matter more than people do',
          'Phones are fine if you choose when to look',
        ],
        answer: 3,
        type: 'viewpoint',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Marble Race',
    text: paragraphs(
      'Tomas had built the track himself out of cardboard tubes taped along the staircase. It had taken him the whole of Saturday: twenty-three toilet-roll tubes, four kitchen-roll tubes, the inside of a roll of wrapping paper and most of a roll of tape. The loop at the bottom, made from a cereal box bent into a circle, had collapsed twice before lunch.',
      'His little sister Ana doubted it would work and folded her arms. She sat on the bottom step in her pyjamas and announced, to nobody in particular, that marbles cannot go upside down.',
      "'Watch,' said Tomas.",
      'On his first try the marble flew off the loop and vanished under the sofa. On his second it stopped halfway down, wedged in a joint he had taped too tightly. Ana said nothing, which was worse than laughing.',
      'Tomas fixed the joint, smoothed the tape with his thumb, and climbed to the top step. He let the blue marble go; it rattled, dropped, looped, and shot off the final ramp straight into the waiting cup. The clink seemed to fill the whole house.',
      "For a moment neither of them moved. Then Ana's arms slowly unfolded, and a grin spread across her face.",
      "'Again,' she said, already climbing the stairs. 'And this time I want to let it go.'",
    ),
    questions: [
      {
        prompt: 'What did Tomas build the track from?',
        options: ['Cardboard tubes', 'The stair banisters', 'Plastic cups', 'Sofa cushions'],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'How did Ana feel about the track at first?',
        options: ['Proud', 'Doubtful', 'Excited', 'Frightened'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "Why is Ana's silence after the second failure 'worse than laughing'?",
        options: [
          'It shows she is too upset to speak',
          'It means she was not watching at all',
          'It suggests she expected it to fail',
          'It shows she wants to help him fix it',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: 'Why does the writer show two failed tries before the success?',
        options: [
          'They prove that Ana was right all along',
          'They show that Tomas should give up',
          'They explain how the track was built',
          'They make the final success feel earned',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that Ana has changed her mind about the track?',
        options: [
          "'And this time I want to let it go'",
          "'marbles cannot go upside down'",
          "'She sat on the bottom step in her pyjamas'",
          "'For a moment neither of them moved'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The River Nile',
    text: paragraphs(
      'The Nile is one of the longest rivers in the world and flows northwards through north-eastern Africa. From its farthest source to the Mediterranean Sea, it runs for about 6,650 kilometres, and the land it drains lies in eleven different countries.',
      'The river has two main branches. The White Nile flows from the great lakes of central Africa, while the Blue Nile rises in the highlands of Ethiopia. The two meet at Khartoum, in Sudan, and travel on together through the desert to Egypt.',
      "For thousands of years its yearly floods left rich, dark soil along its banks, allowing farmers to grow crops in an otherwise dry land. Every summer, heavy rains in Ethiopia swelled the river until it spilled over the fields; when the water drew back, it left behind a layer of fertile mud. The ancient Egyptians called their country Kemet, 'the black land', after this soil, and called the desert beyond it 'the red land'.",
      'Many ancient towns and cities grew up close to the water. The river was their road as well as their farm: boats carried grain, stone and people up and down its length.',
      'In 1970 the Aswan High Dam was completed in southern Egypt. It ended the yearly floods, stored water for dry years and produced electricity. It also trapped the rich mud behind it, so farmers now rely on fertilisers instead.',
      'Today the river is still vital, providing water and transport for millions of people.',
    ),
    questions: [
      {
        prompt: 'In which direction does the Nile flow?',
        options: ['Westwards', 'Northwards', 'Southwards', 'Eastwards'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Where do the White Nile and the Blue Nile meet?',
        options: [
          'At the Mediterranean Sea',
          'In the highlands of Ethiopia',
          'At Khartoum, in Sudan',
          'At Aswan, in Egypt',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "Why did the ancient Egyptians call their country 'the black land'?",
        options: [
          'Their skies were often dark with storms',
          'Their temples were built of black stone',
          'The desert sand there was black',
          'The floods left rich, dark soil behind',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: 'Why did many ancient towns grow up near the Nile?',
        options: [
          'It gave them food, water and a road',
          'It was the only place with flat ground',
          'It kept enemies away with its floods',
          'Its banks were cooler than the coast',
        ],
        answer: 0,
        type: 'inference',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the Aswan High Dam brought problems as well as benefits?',
        options: [
          "'In 1970 the Aswan High Dam was completed'",
          "'It also trapped the rich mud behind it'",
          "'stored water for dry years'",
          "'produced electricity'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Staying Safe in a Storm',
    text: paragraphs(
      'Thunderstorms in the United Kingdom are usually short, but lightning is powerful and unpredictable. Follow these steps to stay safe.',
      'Watch the sky. You can work out how far away a storm is by counting the seconds between a flash of lightning and the thunder that follows. Sound travels about a kilometre every three seconds, so a gap of nine seconds means the storm is about three kilometres away. If the gap is shorter than thirty seconds, it is time to take shelter.',
      'If you are outdoors when a thunderstorm begins, do not shelter under a tall, lone tree, as it can attract lightning. Keep away from open hilltops, metal fences and water, including swimming pools.',
      'Move quickly to a building or a car with a solid roof. A car with a metal roof protects you because the charge travels around the outside of the metal and down into the ground; a soft-topped car or a tent does not.',
      'Once inside, stay away from windows and avoid using taps, since pipes can carry an electrical charge. For the same reason, wait until the storm has passed before having a bath or a shower.',
      'If you are caught in the open with nowhere to go, crouch low with your feet together and your hands on your knees. Do not lie flat on the ground.',
      'Wait until at least thirty minutes after the last thunder before going back outside. Lightning can strike many kilometres from the centre of a storm, even when the rain has stopped.',
    ),
    questions: [
      {
        prompt: 'How long should you wait after the last thunder?',
        options: [
          'Until the rain has stopped',
          'Until you see blue sky',
          'At least thirty minutes',
          'At least thirty seconds',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does the text say to avoid using taps?',
        options: [
          'The water may have been made dirty',
          'Storms make the water pressure drop',
          'Running water attracts the lightning',
          'Pipes can carry an electrical charge',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          'You count fifteen seconds between a flash and its thunder. About how far away is the storm?',
        options: ['Five kilometres', 'Fifteen kilometres', 'Three kilometres', 'Half a kilometre'],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: 'Why is a car with a metal roof safe in a storm, when a tent is not?',
        options: [
          'Tents are usually put up on high ground',
          'Its metal leads the charge to the ground',
          'A car is heavy, so lightning cannot move it',
          'The rubber tyres stop electricity reaching you',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 2,
      },
      {
        prompt: 'Why does the text begin by explaining how to judge how far away a storm is?',
        options: [
          'So you know how long the storm will last',
          'To prove that every storm is far away',
          'So you know when it is time to shelter',
          'To show that UK thunderstorms are rare',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Learning to Cook',
    text: paragraphs(
      'When I moved into my own flat, I could barely boil an egg. I had always eaten what other people cooked, and I had never once wondered how they did it.',
      'My first attempt at pasta ended with a smoke alarm and a very hard lump in the pan. I had wandered off to answer a message, forgotten all about it, and come back to find the water boiled away and the pasta welded to the bottom. I opened every window in the flat and ate toast for dinner.',
      "Rather than giving up, I watched my grandmother carefully the next time I visited and wrote down every step. She did not use a recipe. She tasted things. She stirred the pasta in the first minute, 'so it doesn't stick together and sulk', and she tested a piece before draining it instead of trusting the time on the packet. When I asked how much salt to add to the water, she said, 'More than you think.'",
      "My notebook filled up quickly. Some of it was useful, such as how long to cook an onion before it turns sweet, and some of it was simply her: 'Never cook when you are cross.'",
      "A month later, I cooked a meal for friends and nobody guessed it was only my fifth attempt. One of them asked for the recipe. I told her the truth: it was my grandmother's, written down in my own handwriting, with a burn mark on the cover from that very first night.",
    ),
    questions: [
      {
        prompt: 'What happened during the first pasta attempt?',
        options: [
          'The pasta came out soggy',
          'The cooker would not light',
          'The pan cracked in two',
          'A smoke alarm sounded',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What did the writer do to improve?',
        options: [
          'Watched their grandmother and took notes',
          'Followed the times printed on the packet',
          'Took a cookery class at a local college',
          'Watched cooking videos every evening',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What can you infer from "nobody guessed it was only my fifth attempt"?',
        options: [
          'The friends had cooked the meal themselves',
          'The writer had improved very quickly',
          'The friends did not like the meal',
          'The writer cooks for friends every day',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "What does Grandmother's advice to stir the pasta 'so it doesn't stick together and sulk' suggest about her?",
        options: [
          'She dislikes cooking pasta for others',
          'She believes pasta has real feelings',
          'She speaks of food warmly and with humour',
          'She is strict and gets cross with cooks',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "Why does the writer end with the burn mark on the notebook's cover?",
        options: [
          'It shows that the notebook is now useless',
          'It warns readers never to cook pasta',
          'It shows the grandmother was careless',
          'It ties the success back to the first failure',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  // ─── Real extracts, word for word from the held texts (24 October 2026) ───
  {
    kind: 'Classic novel',
    title: 'On the Marshes',
    text: paragraphs(
      'Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things, seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain, that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dykes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing, was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.',
      '"Hold your noise!" cried a terrible voice, as a man started up from among the graves at the side of the church porch. "Keep still, you little devil, or I\'ll cut your throat!"',
      'A fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared and growled; and whose teeth chattered in his head as he seized me by the chin.',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'Great Expectations',
      where: 'Chapter 1',
      held: 'great-expectations',
      section: 'Chapter 1',
    },
    questions: [
      {
        prompt: 'According to the first paragraph, what is scattered across the marshes?',
        options: ['Cattle feeding', 'Dykes and gates', 'Gravestones', 'Patches of nettles'],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'a great iron on his leg' suggest about the man?",
        options: [
          'He is a soldier in heavy armour',
          'He has broken out of a prison',
          "He works at a blacksmith's forge",
          'He has hurt his leg in a fall',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'the distant savage lair' suggest about the sea?",
        options: [
          'It is calm and still in the evening light',
          'It is where the man in grey has hidden',
          'It seems like the den of a fierce beast',
          'It is too distant to be a danger to Pip',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "The narrator says 'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip' instead of 'I'. What does this suggest?",
        options: [
          'Pip is another boy the narrator once saw in the churchyard',
          'The narrator is still a child, telling the story as it happens',
          'The narrator dislikes his own name and so wants to hide it from us',
          'The grown-up narrator is looking back at his own small, scared self',
        ],
        answer: 3,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that the man is suffering, not only frightening?',
        options: [
          "'whose teeth chattered in his head'",
          "'and glared and growled'",
          "'a man started up from among the graves'",
          "'as he seized me by the chin'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Christmas Dinner',
    text: paragraphs(
      "Among this good company I should have felt myself, even if I hadn't robbed the pantry, in a false position. Not because I was squeezed in at an acute angle of the table-cloth, with the table in my chest, and the Pumblechookian elbow in my eye, nor because I was not allowed to speak (I didn't want to speak), nor because I was regaled with the scaly tips of the drumsticks of the fowls, and with those obscure corners of pork of which the pig, when living, had had the least reason to be vain. No; I should not have minded that if they would only have left me alone. But they wouldn't leave me alone. They seemed to think the opportunity lost, if they failed to point the conversation at me, every now and then, and stick the point into me. I might have been an unfortunate little bull in a Spanish arena, I got so smartingly touched up by these moral goads.",
      'It began the moment we sat down to dinner. Mr. Wopsle said grace with theatrical declamation—as it now appears to me, something like a religious cross of the Ghost in Hamlet with Richard the Third—and ended with the very proper aspiration that we might be truly grateful. Upon which my sister fixed me with her eye, and said, in a low reproachful voice, "Do you hear that? Be grateful."',
      '"Especially," said Mr. Pumblechook, "be grateful, boy, to them which brought you up by hand."',
      'Mrs. Hubble shook her head, and contemplating me with a mournful presentiment that I should come to no good, asked, "Why is it that the young are never grateful?" This moral mystery seemed too much for the company until Mr. Hubble tersely solved it by saying, "Naterally wicious." Everybody then murmured "True!" and looked at me in a particularly unpleasant and personal manner.',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'Great Expectations',
      where: 'Chapter 4',
      held: 'great-expectations',
      section: 'Chapter 4',
    },
    questions: [
      {
        prompt: 'What part of the fowls is the narrator given to eat?',
        options: [
          'The obscure corners of the fowls',
          'The scaly tips of the drumsticks',
          'The plump slices from the breast',
          'The wings, with all the stuffing',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "The narrator lists being squeezed in, kept quiet and given the worst meat, then says 'No; I should not have minded that'. Why build up to this?",
        options: [
          'To show that the other guests were treated just as badly',
          'To show that Christmas dinner was a success after all',
          'To show that the lecturing hurt far more than the discomfort',
          'To show that he was too greedy to notice anything else',
        ],
        answer: 2,
        type: 'structure',
        tier: 2,
      },
      {
        prompt:
          "What does the narrator suggest by calling himself 'an unfortunate little bull in a Spanish arena'?",
        options: [
          'He is so angry that he wants to charge at the guests',
          'He is being fattened up to be eaten, like the pork',
          'He is strong and proud, like a champion in a contest',
          'He is jabbed at for sport by people bigger than him',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          'Looking back as an adult, how does the narrator present the grown-ups at the dinner?',
        options: [
          'As pompous bullies whom he now laughs at',
          'As wise elders whose advice he now accepts',
          'As frightening figures he still cannot laugh at',
          'As dull guests he hardly noticed at the time',
        ],
        answer: 0,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the adults look for chances to criticise the narrator?',
        options: [
          "'Mr. Wopsle said grace with theatrical declamation'",
          "'They seemed to think the opportunity lost'",
          "'nor because I was not allowed to speak'",
          "'and the Pumblechookian elbow in my eye'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Walworth',
    text: paragraphs(
      'At first with such discourse, and afterwards with conversation of a more general nature, did Mr. Wemmick and I beguile the time and the road, until he gave me to understand that we had arrived in the district of Walworth.',
      "It appeared to be a collection of black lanes, ditches, and little gardens, and to present the aspect of a rather dull retirement. Wemmick's house was a little wooden cottage in the midst of plots of garden, and the top of it was cut out and painted like a battery mounted with guns.",
      '"My own doing," said Wemmick. "Looks pretty; don\'t it?"',
      'I highly commended it. I think it was the smallest house I ever saw; with the queerest Gothic windows (by far the greater part of them sham), and a Gothic door, almost too small to get in at.',
      '"That\'s a real flagstaff, you see," said Wemmick, "and on Sundays I run up a real flag. Then look here. After I have crossed this bridge, I hoist it up—so—and cut off the communication."',
      'The bridge was a plank, and it crossed a chasm four feet wide and two deep. But it was very pleasant to see the pride with which he hoisted it up, and made it fast; smiling as he did so, with a relish, and not merely mechanically.',
      '"At nine o\'clock every night, Greenwich time," said Wemmick, "the gun fires. There he is, you see! And when you hear him go, I think you\'ll say he\'s a Stinger."',
      'The piece of ordnance referred to, was mounted in a separate fortress, constructed of lattice-work. It was protected from the weather by an ingenious little tarpaulin contrivance in the nature of an umbrella.',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'Great Expectations',
      where: 'Chapter 25',
      held: 'great-expectations',
      section: 'Chapter 25',
    },
    questions: [
      {
        prompt: "What has been cut out and painted on the top of Wemmick's cottage?",
        options: [
          'A row of Gothic windows',
          'A drawbridge across a deep moat',
          'A battery mounted with guns',
          'A flag on a real flagstaff',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "When does Wemmick's gun fire?",
        options: [
          'Every Sunday, with the flag',
          'Whenever a visitor crosses',
          'At noon, by Greenwich time',
          "At nine o'clock every night",
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "Why does the passage describe Walworth as 'a rather dull retirement' before it reaches Wemmick's house?",
        options: [
          'The dull district makes his fanciful house stand out',
          'It shows that the narrator wishes he had stayed home',
          'It warns that Wemmick is a dull and gloomy man',
          'It explains why the house had to be built so small',
        ],
        answer: 0,
        type: 'structure',
        tier: 2,
      },
      {
        prompt:
          "The bridge crosses a ditch 'four feet wide and two deep', which the narrator calls a 'chasm'. What is the effect of that word?",
        options: [
          'It suggests the house stands on a steep cliff',
          'It makes the tiny ditch sound comically grand',
          'It warns the reader that the ditch is dangerous',
          'It shows the narrator is afraid he will fall in',
        ],
        answer: 1,
        type: 'language',
        tier: 3,
      },
      {
        prompt:
          "Which detail best shows that the narrator is touched by Wemmick's delight, not only amused by it?",
        options: [
          "'a Gothic door, almost too small to get in at'",
          "'an ingenious little tarpaulin contrivance'",
          "'it was very pleasant to see the pride'",
          "'I think it was the smallest house I ever saw'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'Scrooge',
    text: paragraphs(
      "Oh! But he was a tight-fisted hand at the grind-stone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.",
      'External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn\'t know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often "came down" handsomely, and Scrooge never did.',
      'Nobody ever stopped him in the street to say, with gladsome looks, "My dear Scrooge, how are you? When will you come to see me?" No beggars implored him to bestow a trifle, no children asked him what it was o\'clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men\'s dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, "No eye at all is better than an evil eye, dark master!"',
      'But what did Scrooge care! It was the very thing he liked. To edge his way along the crowded paths of life, warning all human sympathy to keep its distance, was what the knowing ones call "nuts" to Scrooge.',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'A Christmas Carol',
      where: 'Stave 1',
      held: 'a-christmas-carol',
      section: "Stave I: Marley's Ghost",
    },
    questions: [
      {
        prompt: "What do the blind men's dogs do when they see Scrooge coming?",
        options: [
          'Bark to warn their owners',
          'Run up to him, wagging their tails',
          'Lie down and refuse to move on',
          'Tug their owners into doorways',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'solitary as an oyster' suggest about Scrooge?",
        options: [
          'He keeps himself shut tight away from everyone else',
          'He is slippery and hard to deal with in business',
          'He is happiest when he is far away by the sea',
          'He feels lonely and longs for some company',
        ],
        answer: 0,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "Dickens writes that 'The cold within him froze his old features'. Why place the cold 'within' Scrooge?",
        options: [
          'He has been out walking in the snow for too long',
          'His coldness comes from his own nature, not the weather',
          'He is ill, and can never keep his old body warm enough',
          'His house is freezing because he lights no fires',
        ],
        answer: 1,
        type: 'language',
        tier: 3,
      },
      {
        prompt:
          'The third paragraph lists people who never greet Scrooge. How does the last paragraph change the way we see this?',
        options: [
          'It reveals that he has never noticed it',
          'It reveals that he is too busy to care',
          'It reveals that he enjoys being avoided',
          'It reveals that he is secretly hurt by it',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that Scrooge is mean with money?',
        options: [
          "'nipped his pointed nose'",
          "'A frosty rime was on his head'",
          "'shrivelled his cheek, stiffened his gait'",
          "'he was a tight-fisted hand at the grind-stone'",
        ],
        answer: 3,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'Two Gentlemen Call',
    text: paragraphs(
      '"At this festive season of the year, Mr. Scrooge," said the gentleman, taking up a pen, "it is more than usually desirable that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time. Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir."',
      '"Are there no prisons?" asked Scrooge.',
      '"Plenty of prisons," said the gentleman, laying down the pen again.',
      '"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"',
      '"They are. Still," returned the gentleman, "I wish I could say they were not."',
      '"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.',
      '"Both very busy, sir."',
      '"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I\'m very glad to hear it."',
      '"Under the impression that they scarcely furnish Christian cheer of mind or body to the multitude," returned the gentleman, "a few of us are endeavouring to raise a fund to buy the Poor some meat and drink, and means of warmth. We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices. What shall I put you down for?"',
      '"Nothing!" Scrooge replied.',
      '"You wish to be anonymous?"',
      '"I wish to be left alone," said Scrooge. "Since you ask me what I wish, gentlemen, that is my answer. I don\'t make merry myself at Christmas and I can\'t afford to make idle people merry. I help to support the establishments I have mentioned--they cost enough; and those who are badly off must go there."',
      '"Many can\'t go there; and many would rather die."',
      '"If they would rather die," said Scrooge, "they had better do it, and decrease the surplus population. Besides--excuse me--I don\'t know that."',
      '"But you might know it," observed the gentleman.',
      '"It\'s not my business," Scrooge returned. "It\'s enough for a man to understand his own business, and not to interfere with other people\'s. Mine occupies me constantly. Good afternoon, gentlemen!"',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'A Christmas Carol',
      where: 'Stave 1',
      held: 'a-christmas-carol',
      section: "Stave I: Marley's Ghost",
    },
    questions: [
      {
        prompt: 'What do the gentlemen want to buy for the poor?',
        options: [
          'Meat and drink, and means of warmth',
          'Places for them in the workhouses',
          'Tickets for a Christmas entertainment',
          'New clothes and boots for the winter',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does the gentleman lay down his pen after Scrooge asks about prisons?',
        options: [
          'He is so shocked that he means to leave',
          'He sees that Scrooge will give them nothing',
          "He has already written down Scrooge's gift",
          'He means to list the prisons for Scrooge',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "What does Scrooge mean when he says the poor who would rather die should 'decrease the surplus population'?",
        options: [
          'Poor families should move out to the countryside',
          'More houses should be built so that no one is homeless',
          'There are too many people, and fewer would suit him',
          'The workhouses should take in fewer people each year',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "Scrooge answers the appeal with questions about prisons and workhouses, then says he is 'very glad to hear' they are busy. What does this suggest?",
        options: [
          'He wants to know where to send his own Christmas gift',
          'He was truly afraid that the prisons had all closed',
          'He has never heard of such places and is curious',
          'He thinks those places are all that the poor deserve',
        ],
        answer: 3,
        type: 'inference',
        tier: 3,
      },
      {
        prompt: 'How does Dickens want readers to react to Scrooge in this scene?',
        options: [
          'To be shocked at how little he cares about the poor',
          'To agree that charity only rewards idle people',
          'To admire him for paying for the prisons and workhouses',
          'To pity him because he is lonely and unhappy at Christmas',
        ],
        answer: 0,
        type: 'viewpoint',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'Old Fezziwig',
    text: paragraphs(
      'In came a fiddler with a music-book, and went up to the lofty desk, and made an orchestra of it, and tuned like fifty stomach-aches. In came Mrs. Fezziwig, one vast substantial smile. In came the three Miss Fezziwigs, beaming and lovable. In came the six young followers whose hearts they broke. In came all the young men and women employed in the business. In came the housemaid, with her cousin, the baker. In came the cook, with her brother\'s particular friend, the milkman. In came the boy from over the way, who was suspected of not having board enough from his master; trying to hide himself behind the girl from next door but one, who was proved to have had her ears pulled by her mistress. In they all came, one after another; some shyly, some boldly, some gracefully, some awkwardly, some pushing, some pulling; in they all came, anyhow and everyhow. Away they all went, twenty couple at once; hands half round and back again the other way; down the middle and up again; round and round in various stages of affectionate grouping; old top couple always turning up in the wrong place; new top couple starting off again, as soon as they got there; all top couples at last, and not a bottom one to help them! When this result was brought about, old Fezziwig, clapping his hands to stop the dance, cried out, "Well done!" and the fiddler plunged his hot face into a pot of porter, especially provided for that purpose. But scorning rest, upon his reappearance, he instantly began again, though there were no dancers yet, as if the other fiddler had been carried home, exhausted, on a shutter, and he were a bran-new man resolved to beat him out of sight, or perish.',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'A Christmas Carol',
      where: 'Stave 2',
      held: 'a-christmas-carol',
      section: 'Stave II: The First of the Three Spirits',
    },
    questions: [
      {
        prompt: 'Where does the fiddler set himself up to play?',
        options: [
          'By the warehouse door',
          'On top of the lofty desk',
          'On a wooden shutter',
          'Beside the pot of porter',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does 'suspected of not having board enough from his master' suggest about the boy?",
        options: [
          'He has no proper bed to sleep in',
          'He is bored by the work he is set',
          'His master does not feed him well enough',
          'His master gives him too little wood',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'Mrs. Fezziwig, one vast substantial smile' suggest about her?",
        options: [
          'She smiles politely to hide her dislike',
          'She is so thin that her smile looks huge',
          'She is laughing at the guests as they come',
          'She is large and full of warm good humour',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "Why does Dickens begin sentence after sentence with 'In came'?",
        options: [
          'It makes guests pour in, one after another',
          'It slows the scene to show how dull it is',
          'It warns that the room is getting too full',
          'It shows each guest was formally announced',
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: "Which detail best shows the fiddler's tireless energy?",
        options: [
          "'clapping his hands to stop the dance'",
          "'he instantly began again'",
          "'and tuned like fifty stomach-aches'",
          "'with a music-book'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'Christmas Morning',
    text: paragraphs(
      'He was checked in his transports by the churches ringing out the lustiest peals he had ever heard. Clash, clang, hammer; ding, dong, bell. Bell, dong, ding; hammer, clang, clash! Oh, glorious, glorious!',
      'Running to the window, he opened it, and put out his head. No fog, no mist; clear, bright, jovial, stirring, cold; cold, piping for the blood to dance to; Golden sunlight; Heavenly sky; sweet fresh air; merry bells. Oh, glorious! Glorious!',
      '"What\'s to-day!" cried Scrooge, calling downward to a boy in Sunday clothes, who perhaps had loitered in to look about him.',
      '"EH?" returned the boy, with all his might of wonder.',
      '"What\'s to-day, my fine fellow?" said Scrooge.',
      '"To-day!" replied the boy. "Why, CHRISTMAS DAY."',
      '"It\'s Christmas Day!" said Scrooge to himself. "I haven\'t missed it. The Spirits have done it all in one night. They can do anything they like. Of course they can. Of course they can. Hallo, my fine fellow!"',
      '"Hallo!" returned the boy.',
      '"Do you know the Poulterer\'s, in the next street but one, at the corner?" Scrooge inquired.',
      '"I should hope I did," replied the lad.',
      '"An intelligent boy!" said Scrooge. "A remarkable boy! Do you know whether they\'ve sold the prize Turkey that was hanging up there?--Not the little prize Turkey: the big one?"',
      '"What, the one as big as me?" returned the boy.',
      '"What a delightful boy!" said Scrooge. "It\'s a pleasure to talk to him. Yes, my buck!"',
      '"It\'s hanging there now," replied the boy.',
      '"Is it?" said Scrooge. "Go and buy it."',
      '"Walk-ER!" exclaimed the boy.',
      '"No, no," said Scrooge, "I am in earnest. Go and buy it, and tell \'em to bring it here, that I may give them the direction where to take it. Come back with the man, and I\'ll give you a shilling. Come back with him in less than five minutes and I\'ll give you half-a-crown!"',
    ),
    source: {
      author: 'Charles Dickens',
      work: 'A Christmas Carol',
      where: 'Stave 5',
      held: 'a-christmas-carol',
      section: 'Stave V: The End of It',
    },
    questions: [
      {
        prompt:
          'What will Scrooge give the boy if he comes back with the man in less than five minutes?',
        options: ['The small turkey', 'A sixpence', 'Half-a-crown', 'A shilling'],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why is Scrooge so pleased to hear that it is Christmas Day?',
        options: [
          'He thinks the shops will be shut',
          'He has business to finish today',
          'He can stay in bed all day',
          'He has not missed it after all',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does the list 'Clash, clang, hammer; ding, dong, bell' help the reader to do?",
        options: [
          'Hear the joyful jangle of the bells',
          'Picture workmen hammering in the street',
          'Feel the cold of the frosty morning',
          "Sense Scrooge's anger at being woken",
        ],
        answer: 0,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          'The scene moves from short cries about the weather to a quick exchange with the boy. What does this pace suggest about Scrooge?',
        options: [
          'He is nervous and hiding his true feelings',
          'He is bursting with energy and eager to act',
          'He is confused and keeps forgetting his questions',
          'He is impatient because the boy is slow and rude',
        ],
        answer: 1,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: "Which detail best shows that Scrooge now enjoys other people's company?",
        options: [
          "'The Spirits have done it all in one night'",
          "'calling downward to a boy in Sunday clothes'",
          "'It's a pleasure to talk to him'",
          "'and put out his head'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'A Winter Afternoon',
    text: paragraphs(
      'There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.',
      'I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.',
      'The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy. Me, she had dispensed from joining the group; saying, “She regretted to be under the necessity of keeping me at a distance; but that until she heard from Bessie, and could discover by her own observation, that I was endeavouring in good earnest to acquire a more sociable and childlike disposition, a more attractive and sprightly manner—something lighter, franker, more natural, as it were—she really must exclude me from privileges intended only for contented, happy, little children.”',
      '“What does Bessie say I have done?” I asked.',
      '“Jane, I don’t like cavillers or questioners; besides, there is something truly forbidding in a child taking up her elders in that manner. Be seated somewhere; and until you can speak pleasantly, remain silent.”',
      'A breakfast-room adjoined the drawing-room, I slipped in there. It contained a bookcase: I soon possessed myself of a volume, taking care that it should be one stored with pictures. I mounted into the window-seat: gathering up my feet, I sat cross-legged, like a Turk; and, having drawn the red moreen curtain nearly close, I was shrined in double retirement.',
    ),
    source: {
      author: 'Charlotte Brontë',
      work: 'Jane Eyre',
      where: 'Chapter 1',
      held: 'jane-eyre',
      section: 'Chapter 1',
    },
    questions: [
      {
        prompt: 'Why is there no walk that afternoon?',
        options: [
          'Mrs. Reed had forbidden the children to go out',
          'The children had already walked all morning',
          'Bessie the nurse was too busy to take them',
          'The wind had brought dark clouds and soaking rain',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does 'humbled by the consciousness of my physical inferiority' to her cousins suggest?",
        options: [
          'She feels weaker and smaller than they are',
          'She feels cleverer than all of her cousins',
          'She is too ill to go out in the cold air',
          'She is proud of being much tougher than they are',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          'Which detail best suggests that the Reed children are not as good as their mother believes?',
        options: [
          "'looked perfectly happy'",
          "'(for the time neither quarrelling nor crying)'",
          "'clustered round their mama in the drawing-room'",
          "'she lay reclined on a sofa by the fireside'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
      {
        prompt: 'How does the narrator want readers to see her exclusion from the family group?',
        options: [
          'As kind, since it protects her from her cousins',
          'As a joke, since Mrs. Reed is only teasing her',
          'As unfair: she is shut out and is never even told why',
          'As fair, since she has clearly behaved very badly',
        ],
        answer: 2,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: "What does 'I was shrined in double retirement' suggest about the window-seat?",
        options: [
          'It is a holy place where she goes to pray',
          'It is a prison where she has been shut away',
          'It is a cold place she longs to escape from',
          'It is a safe, hidden refuge she treasures',
        ],
        answer: 3,
        type: 'language',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Red-Room',
    text: paragraphs(
      'Mr. Reed had been dead nine years: it was in this chamber he breathed his last; here he lay in state; hence his coffin was borne by the undertaker’s men; and, since that day, a sense of dreary consecration had guarded it from frequent intrusion.',
      'My seat, to which Bessie and the bitter Miss Abbot had left me riveted, was a low ottoman near the marble chimney-piece; the bed rose before me; to my right hand there was the high, dark wardrobe, with subdued, broken reflections varying the gloss of its panels; to my left were the muffled windows; a great looking-glass between them repeated the vacant majesty of the bed and room. I was not quite sure whether they had locked the door; and when I dared move, I got up and went to see. Alas! yes: no jail was ever more secure. Returning, I had to cross before the looking-glass; my fascinated glance involuntarily explored the depth it revealed. All looked colder and darker in that visionary hollow than in reality: and the strange little figure there gazing at me, with a white face and arms specking the gloom, and glittering eyes of fear moving where all else was still, had the effect of a real spirit: I thought it like one of the tiny phantoms, half fairy, half imp, Bessie’s evening stories represented as coming out of lone, ferny dells in moors, and appearing before the eyes of belated travellers. I returned to my stool.',
      'Superstition was with me at that moment; but it was not yet her hour for complete victory: my blood was still warm; the mood of the revolted slave was still bracing me with its bitter vigour; I had to stem a rapid rush of retrospective thought before I quailed to the dismal present.',
    ),
    source: {
      author: 'Charlotte Brontë',
      work: 'Jane Eyre',
      where: 'Chapter 2',
      held: 'jane-eyre',
      section: 'Chapter 2',
    },
    questions: [
      {
        prompt: 'How long has Mr. Reed been dead?',
        options: ['Nine years', 'Nine months', 'Ten years', 'A few weeks'],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'no jail was ever more secure' tell us?",
        options: [
          'Bessie is standing guard outside the door',
          'The door is locked, and she cannot get out',
          'She feels safe from the Reeds in this room',
          'The red-room was once used as a prison',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What is 'the strange little figure' she sees in the looking-glass?",
        options: [
          'Miss Abbot, watching her from the doorway',
          'A painting of a fairy beside the glass',
          'Her own reflection, pale and frightened',
          'The ghost of Mr. Reed, rising from the bed',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          'The passage opens with the fact that Mr. Reed died in this room. How does placing it first affect what follows?',
        options: [
          'It explains why the room is kept so very tidy',
          'It shows that the narrator misses her uncle',
          'It suggests the room will soon be used again',
          'It makes all that she then sees seem haunted',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the narrator is still defiant, not yet beaten by fear?',
        options: [
          "'my blood was still warm'",
          "'I returned to my stool'",
          "'Superstition was with me at that moment'",
          "'glittering eyes of fear'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Mr. Brocklehurst',
    text: paragraphs(
      'Meantime, Mr. Brocklehurst, standing on the hearth with his hands behind his back, majestically surveyed the whole school. Suddenly his eye gave a blink, as if it had met something that either dazzled or shocked its pupil; turning, he said in more rapid accents than he had hitherto used—',
      '“Miss Temple, Miss Temple, what—_what_ is that girl with curled hair? Red hair, ma’am, curled—curled all over?” And extending his cane he pointed to the awful object, his hand shaking as he did so.',
      '“It is Julia Severn,” replied Miss Temple, very quietly.',
      '“Julia Severn, ma’am! And why has she, or any other, curled hair? Why, in defiance of every precept and principle of this house, does she conform to the world so openly—here in an evangelical, charitable establishment—as to wear her hair one mass of curls?”',
      '“Julia’s hair curls naturally,” returned Miss Temple, still more quietly.',
      '“Naturally! Yes, but we are not to conform to nature; I wish these girls to be the children of Grace: and why that abundance? I have again and again intimated that I desire the hair to be arranged closely, modestly, plainly. Miss Temple, that girl’s hair must be cut off entirely; I will send a barber to-morrow: and I see others who have far too much of the excrescence—that tall girl, tell her to turn round. Tell all the first form to rise up and direct their faces to the wall.”',
      'Miss Temple passed her handkerchief over her lips, as if to smooth away the involuntary smile that curled them; she gave the order, however, and when the first class could take in what was required of them, they obeyed. Leaning a little back on my bench, I could see the looks and grimaces with which they commented on this manoeuvre: it was a pity Mr. Brocklehurst could not see them too; he would perhaps have felt that, whatever he might do with the outside of the cup and platter, the inside was further beyond his interference than he imagined.',
    ),
    source: {
      author: 'Charlotte Brontë',
      work: 'Jane Eyre',
      where: 'Chapter 7',
      held: 'jane-eyre',
      section: 'Chapter 7',
    },
    questions: [
      {
        prompt: "According to Miss Temple, why does Julia Severn's hair curl?",
        options: [
          'It was curled for his visit',
          'It curls of its own accord',
          'She curls it with hot tongs',
          'Her mother has it curled',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "Why does Mr. Brocklehurst want Julia's hair cut off even though it curls naturally?",
        options: [
          'He fears that long hair is unhealthy for the girls',
          'He is punishing Julia for answering him rudely',
          'He wants them plain and modest, even against nature',
          'He thinks Julia has lied about curling her own hair',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "Miss Temple's smile is said to have 'curled' her lips. Why is this a clever choice of word?",
        options: [
          'It shows that Miss Temple is angry with Julia',
          "It hints that Miss Temple's own hair is curled",
          'It shows that she is in pain from biting her lip',
          'It echoes the curls he condemns, and mocks him',
        ],
        answer: 3,
        type: 'language',
        tier: 3,
      },
      {
        prompt:
          "The passage moves from Mr. Brocklehurst's angry speeches to the girls' silent grimaces. What does this ending reveal?",
        options: [
          'He controls their looks, but not their thoughts',
          'The girls are terrified of the punishments he gives',
          'The girls agree that curls are a sign of vanity',
          'Miss Temple has secretly told them to disobey him',
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that Mr. Brocklehurst is truly outraged by the curls, not merely pretending?',
        options: [
          "'majestically surveyed the whole school'",
          "'his hand shaking as he did so'",
          "'his hands behind his back'",
          "'replied Miss Temple, very quietly'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Ball',
    text: paragraphs(
      '"Come, Darcy," said he, "I must have you dance. I hate to see you standing about by yourself in this stupid manner. You had much better dance."',
      '"I certainly shall not. You know how I detest it, unless I am particularly acquainted with my partner. At such an assembly as this, it would be insupportable. Your sisters are engaged, and there is not another woman in the room, whom it would not be a punishment to me to stand up with."',
      '"I would not be so fastidious as you are," cried Bingley, "for a kingdom! Upon my honour, I never met with so many pleasant girls in my life, as I have this evening; and there are several of them you see uncommonly pretty."',
      '"_You_ are dancing with the only handsome girl in the room," said Mr. Darcy, looking at the eldest Miss Bennet.',
      '"Oh! she is the most beautiful creature I ever beheld! But there is one of her sisters sitting down just behind you, who is very pretty, and I dare say, very agreeable. Do let me ask my partner to introduce you."',
      '"Which do you mean?" and turning round, he looked for a moment at Elizabeth, till catching her eye, he withdrew his own and coldly said, "She is tolerable; but not handsome enough to tempt _me_; and I am in no humour at present to give consequence to young ladies who are slighted by other men. You had better return to your partner and enjoy her smiles, for you are wasting your time with me."',
      'Mr. Bingley followed his advice. Mr. Darcy walked off; and Elizabeth remained with no very cordial feelings towards him. She told the story however with great spirit among her friends; for she had a lively, playful disposition, which delighted in any thing ridiculous.',
    ),
    source: {
      author: 'Jane Austen',
      work: 'Pride and Prejudice',
      where: 'Chapter 3',
      held: 'pride-and-prejudice',
      section: 'Chapter 3',
    },
    questions: [
      {
        prompt: "Whom does Darcy call 'the only handsome girl in the room'?",
        options: [
          "One of Bingley's sisters",
          'A girl sitting behind him',
          'The eldest Miss Bennet',
          'Elizabeth Bennet',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does Bingley's reply, 'I would not be so fastidious as you are', show about him?",
        options: [
          "He is jealous of Darcy's good looks and fortune",
          'He is very fussy about whom he dances with',
          'He is tired of dancing and wants to stop',
          'He is easily pleased and enjoying himself',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "Darcy calls Elizabeth 'tolerable'. What is the effect of this word?",
        options: [
          'It is faint praise that really works as an insult',
          'It means she is patient and easy-going',
          'It shows he thinks her very beautiful',
          'It is a kindly way to refuse the introduction',
        ],
        answer: 0,
        type: 'language',
        tier: 3,
      },
      {
        prompt: "How does the narrator present Elizabeth's reaction in the last paragraph?",
        options: [
          'She is furious and plans her revenge on him',
          'She is stung, but makes it a funny story',
          'She is crushed and leaves the ball in tears',
          'She agrees with Darcy and feels plain',
        ],
        answer: 1,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that Darcy thinks himself above the company at the ball?',
        options: [
          "'and turning round, he looked for a moment at Elizabeth'",
          "'Mr. Bingley followed his advice'",
          "'At such an assembly as this, it would be insupportable'",
          "'I hate to see you standing about by yourself in this stupid manner'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Elizabeth Sets Out',
    text: paragraphs(
      'Elizabeth, feeling really anxious, was determined to go to her, though the carriage was not to be had; and as she was no horse-woman, walking was her only alternative. She declared her resolution.',
      '"How can you be so silly," cried her mother, "as to think of such a thing, in all this dirt! You will not be fit to be seen when you get there."',
      '"I shall be very fit to see Jane--which is all I want."',
      '"Is this a hint to me, Lizzy," said her father, "to send for the horses?"',
      '"No, indeed. I do not wish to avoid the walk. The distance is nothing, when one has a motive; only three miles. I shall be back by dinner."',
      '"I admire the activity of your benevolence," observed Mary, "but every impulse of feeling should be guided by reason; and, in my opinion, exertion should always be in proportion to what is required."',
      '"We will go as far as Meryton with you," said Catherine and Lydia.--Elizabeth accepted their company, and the three young ladies set off together.',
      '"If we make haste," said Lydia, as they walked along, "perhaps we may see something of Captain Carter before he goes."',
      "In Meryton they parted; the two youngest repaired to the lodgings of one of the officers' wives, and Elizabeth continued her walk alone, crossing field after field at a quick pace, jumping over stiles and springing over puddles with impatient activity, and finding herself at last within view of the house, with weary ancles, dirty stockings, and a face glowing with the warmth of exercise.",
    ),
    source: {
      author: 'Jane Austen',
      work: 'Pride and Prejudice',
      where: 'Chapter 7',
      held: 'pride-and-prejudice',
      section: 'Chapter 7',
    },
    questions: [
      {
        prompt: 'Why must Elizabeth walk to see her sister?',
        options: [
          'Her father has forbidden her to take the horses',
          'She enjoys long walks across the fields',
          'Her sisters want to walk to Meryton with her',
          'No carriage can be had, and she is no horse-woman',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does Mrs. Bennet's warning, 'You will not be fit to be seen', show about her?",
        options: [
          'Looks matter more to her than Jane',
          'She fears Elizabeth will catch a cold',
          'She thinks the walk is too far for anyone',
          'She wants to go and see Jane herself',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does Lydia's remark about Captain Carter suggest about her?",
        options: [
          'She is afraid of walking through Meryton',
          'She thinks more of officers than of Jane',
          'She is worried about Jane and wants to hurry',
          'She has a message for the Captain from home',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "One by one, each member of the family answers Elizabeth's plan. What do their replies show?",
        options: [
          'Everyone agrees that the walk is sensible',
          'They all try their hardest to stop her going',
          "Each reply shows that person's own concerns",
          'The whole family is united in worry for Jane',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: "Which detail best shows Elizabeth's eagerness to reach her sister?",
        options: [
          "'with weary ancles, dirty stockings'",
          "'In Meryton they parted'",
          "'finding herself at last within view of the house'",
          "'springing over puddles with impatient activity'",
        ],
        answer: 3,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'By the Loom',
    text: paragraphs(
      'As soon as he was warm he began to think it would be a long while to wait till after supper before he drew out his guineas, and it would be pleasant to see them on the table before him as he ate his unwonted feast. For joy is the best of wine, and Silas’s guineas were a golden wine of that sort.',
      'He rose and placed his candle unsuspectingly on the floor near his loom, swept away the sand without noticing any change, and removed the bricks. The sight of the empty hole made his heart leap violently, but the belief that his gold was gone could not come at once—only terror, and the eager effort to put an end to the terror. He passed his trembling hand all about the hole, trying to think it possible that his eyes had deceived him; then he held the candle in the hole and examined it curiously, trembling more and more. At last he shook so violently that he let fall the candle, and lifted his hands to his head, trying to steady himself, that he might think. Had he put his gold somewhere else, by a sudden resolution last night, and then forgotten it? A man falling into dark waters seeks a momentary footing even on sliding stones; and Silas, by acting as if he believed in false hopes, warded off the moment of despair. He searched in every corner, he turned his bed over, and shook it, and kneaded it; he looked in his brick oven where he laid his sticks. When there was no other place to be searched, he kneeled down again and felt once more all round the hole. There was no untried refuge left for a moment’s shelter from the terrible truth.',
    ),
    source: {
      author: 'George Eliot',
      work: 'Silas Marner',
      where: 'Chapter 5',
      held: 'silas-marner',
      section: 'Chapter V',
    },
    questions: [
      {
        prompt: 'Where had Silas hidden his guineas?',
        options: [
          'In a hole beneath the floor bricks by his loom',
          'Inside his bed, under the mattress',
          'In the brick oven where he laid his sticks',
          'In a box on the table by the fire',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does Silas want to take out his guineas before supper?',
        options: [
          'He wants to count them before a purchase',
          'He loves to look at them as he eats',
          'He needs money to pay for his supper',
          'He fears a thief may come for them',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does the narrator mean by calling Silas's guineas 'a golden wine'?",
        options: [
          'His gold coins smell as sweet as wine',
          'He drinks wine to forget his loneliness',
          'Gazing at his gold gives him heady joy',
          'He spends all his money on expensive drink',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "What does the comparison 'A man falling into dark waters seeks a momentary footing even on sliding stones' show about Silas?",
        options: [
          'He is afraid of drowning in the river',
          'He is searching the floor for loose stones',
          'He is calmly deciding where to look next',
          'He clings to false hopes to put off despair',
        ],
        answer: 3,
        type: 'language',
        tier: 3,
      },
      {
        prompt: "How is the passage ordered to build Silas's despair?",
        options: [
          'Happy expectation, then a search that slowly runs out of hope',
          'The theft first, then a flashback to how he earned the gold',
          'A calm search that ends when he finds the gold somewhere else',
          'A quarrel with a neighbour, then a lonely, hopeless search',
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'By the Hearth',
    text: paragraphs(
      'When Marner’s sensibility returned, he continued the action which had been arrested, and closed his door, unaware of the chasm in his consciousness, unaware of any intermediate change, except that the light had grown dim, and that he was chilled and faint. He thought he had been too long standing at the door and looking out. Turning towards the hearth, where the two logs had fallen apart, and sent forth only a red uncertain glimmer, he seated himself on his fireside chair, and was stooping to push his logs together, when, to his blurred vision, it seemed as if there were gold on the floor in front of the hearth. Gold!—his own gold—brought back to him as mysteriously as it had been taken away! He felt his heart begin to beat violently, and for a few moments he was unable to stretch out his hand and grasp the restored treasure. The heap of gold seemed to glow and get larger beneath his agitated gaze. He leaned forward at last, and stretched forth his hand; but instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls. In utter amazement, Silas fell on his knees and bent his head low to examine the marvel: it was a sleeping child—a round, fair thing, with soft yellow rings all over its head. Could this be his little sister come back to him in a dream—his little sister whom he had carried about in his arms for a year before she died, when he was a small boy without shoes or stockings? That was the first thought that darted across Silas’s blank wonderment. _Was_ it a dream? He rose to his feet again, pushed his logs together, and, throwing on some dried leaves and sticks, raised a flame; but the flame did not disperse the vision—it only lit up more distinctly the little round form of the child, and its shabby clothing. It was very much like his little sister.',
    ),
    source: {
      author: 'George Eliot',
      work: 'Silas Marner',
      where: 'Chapter 12',
      held: 'silas-marner',
      section: 'Chapter XII',
    },
    questions: [
      {
        prompt: "What do Silas's fingers touch instead of coins?",
        options: ['A shabby blanket', 'Soft warm curls', 'A heap of dry leaves', 'The fallen logs'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does Silas at first think there is gold on the floor?',
        options: [
          'A neighbour has secretly returned his money',
          'He dropped some coins there earlier that night',
          "In dim light, the child's hair looks like gold",
          'He has been dreaming of his lost gold all evening',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'the chasm in his consciousness' suggest?",
        options: [
          'He fell into a deep pit just outside his door',
          'He has been thinking very deeply about his loss',
          'He has suddenly understood a painful truth',
          'His mind went blank, and he did not know it',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          'Why does the writer let Silas, and the reader, believe for a moment that the gold has come back?',
        options: [
          'To make the child he finds seem more of a marvel',
          'To show that Silas has now gone quite mad with grief',
          'To prove that his money was never really stolen',
          'To make us distrust everything that Silas says',
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that the child stirs old, tender memories in Silas?',
        options: [
          "'with soft yellow rings all over its head'",
          "'Could this be his little sister come back to him'",
          "'He rose to his feet again, pushed his logs together'",
          "'it only lit up more distinctly the little round form'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Eppie',
    text: paragraphs(
      '“Naughty, naughty Eppie,” he suddenly began, holding her on his knee, and pointing to her muddy feet and clothes—“naughty to cut with the scissors and run away. Eppie must go into the coal-hole for being naughty. Daddy must put her in the coal-hole.”',
      'He half-expected that this would be shock enough, and that Eppie would begin to cry. But instead of that, she began to shake herself on his knee, as if the proposition opened a pleasing novelty. Seeing that he must proceed to extremities, he put her into the coal-hole, and held the door closed, with a trembling sense that he was using a strong measure. For a moment there was silence, but then came a little cry, “Opy, opy!” and Silas let her out again, saying, “Now Eppie ’ull never be naughty again, else she must go in the coal-hole—a black naughty place.”',
      'The weaving must stand still a long while this morning, for now Eppie must be washed, and have clean clothes on; but it was to be hoped that this punishment would have a lasting effect, and save time in future—though, perhaps, it would have been better if Eppie had cried more.',
      'In half an hour she was clean again, and Silas having turned his back to see what he could do with the linen band, threw it down again, with the reflection that Eppie would be good without fastening for the rest of the morning. He turned round again, and was going to place her in her little chair near the loom, when she peeped out at him with black face and hands again, and said, “Eppie in de toal-hole!”',
      'This total failure of the coal-hole discipline shook Silas’s belief in the efficacy of punishment. “She’d take it all for fun,” he observed to Dolly, “if I didn’t hurt her, and that I can’t do, Mrs. Winthrop. If she makes me a bit o’ trouble, I can bear it. And she’s got no tricks but what she’ll grow out of.”',
    ),
    source: {
      author: 'George Eliot',
      work: 'Silas Marner',
      where: 'Chapter 14',
      held: 'silas-marner',
      section: 'Chapter XIV',
    },
    questions: [
      {
        prompt: 'What has Eppie done to deserve punishment?',
        options: [
          'Climbed on the bed and broken it',
          'Torn her clothes and lost her boots',
          'Cut with the scissors and run away',
          'Broken the loom and hidden the linen',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "Why does Silas hold the coal-hole door 'with a trembling sense that he was using a strong measure'?",
        options: [
          'He is afraid that Eppie will escape and run off',
          'He is shivering from the cold of the coal-hole',
          'He is furious and fighting to control his temper',
          'He hates to be harsh with Eppie, even a little',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does Eppie's 'Eppie in de toal-hole' show?",
        options: [
          'She went back in because she enjoyed it',
          'She is frightened and is hiding from Silas',
          'She is asking to be let out of the dark',
          'She is telling Silas that she is sorry',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "How does the narrator want readers to feel about Silas's attempt to punish Eppie?",
        options: [
          'Bored, because nothing much really happens',
          'Amused and fond, as his gentle plan fails',
          'Angry, because he is so cruel to a small child',
          'Worried, because Eppie is in real danger',
        ],
        answer: 1,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt:
          "The narrator says 'The weaving must stand still a long while this morning'. What does this suggest about Silas?",
        options: [
          'He is glad of any excuse to stop weaving',
          'Eppie has damaged the loom with the scissors',
          'Eppie matters more to him than his work',
          'He is too upset to work after punishing her',
        ],
        answer: 2,
        type: 'inference',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Ice',
    text: paragraphs(
      'So strange an accident has happened to us, that I cannot forbear recording it, although it is very probable that you will see me before these papers can come into your possession.',
      'Last Monday (July 31st), we were nearly surrounded by ice, which closed in the ship on all sides, scarcely leaving her the sea-room in which she floated. Our situation was somewhat dangerous, especially as we were compassed round by a very thick fog. We accordingly lay to, hoping that some change would take place in the atmosphere and weather.',
      "About two o'clock the mist cleared away, and we beheld, stretched out in every direction, vast and irregular plains of ice, which seemed to have no end. Some of my comrades groaned, and my own mind began to grow watchful with anxious thoughts, when a strange sight suddenly attracted our attention, and diverted our solicitude from our own situation. We perceived a low carriage, fixed on a sledge and drawn by dogs, pass on towards the north, at the distance of half a mile: a being which had the shape of a man, but apparently of gigantic stature, sat in the sledge, and guided the dogs. We watched the rapid progress of the traveller with our telescopes, until he was lost among the distant inequalities of the ice.",
      'This appearance excited our unqualified wonder. We were, as we believed, many hundred miles from any land; but this apparition seemed to denote that it was not, in reality, so distant as we had supposed. Shut in, however, by ice, it was impossible to follow his track, which we had observed with the greatest attention.',
      'About two hours after this occurrence, we heard the ground sea; and before night the ice broke, and freed our ship. We, however, lay to until the morning, fearing to encounter in the dark those large loose masses which float about after the breaking up of the ice. I profited of this time to rest for a few hours.',
    ),
    source: {
      author: 'Mary Shelley',
      work: 'Frankenstein',
      where: 'Letter 4',
      held: 'frankenstein',
      section: 'Letter IV',
    },
    questions: [
      {
        prompt: 'What was pulling the sledge?',
        options: ['A pair of horses', 'Some reindeer', 'Two of the sailors', 'A team of dogs'],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does the sighting suggest that land may be nearer than the crew believed?',
        options: [
          'A sledge traveller must have come from land',
          'They can see mountains through the telescopes',
          'The ice has broken up and the sea is calm',
          'The traveller shouts to them that land is close',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "Why does the writer call the figure 'a being which had the shape of a man' rather than simply 'a man'?",
        options: [
          'He thinks it might be one of his own crew',
          'He is not sure that the huge figure is human',
          'He is too far away to tell a man from a woman',
          "He wants to keep the traveller's name a secret",
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'The passage is written as a letter to someone at home. What does this form add?',
        options: [
          "It lets us hear the traveller's own thoughts",
          'It makes the events seem long ago and calm',
          "It lets us share the writer's fear and wonder",
          'It shows he never expects to see home again',
        ],
        answer: 2,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: 'How does the mood change across the passage?',
        options: [
          'From calm, to rising panic, to disaster',
          'From excitement to boredom as nothing happens',
          'From fear to anger at the strange traveller',
          'From danger, to wonder, to relief and rest',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'In the Forest',
    text: paragraphs(
      '"The moon had disappeared from the night, and again, with a lessened form, showed itself, while I still remained in the forest. My sensations had, by this time, become distinct, and my mind received every day additional ideas. My eyes became accustomed to the light, and to perceive objects in their right forms; I distinguished the insect from the herb, and, by degrees, one herb from another. I found that the sparrow uttered none but harsh notes, whilst those of the blackbird and thrush were sweet and enticing.',
      '"One day, when I was oppressed by cold, I found a fire which had been left by some wandering beggars, and was overcome with delight at the warmth I experienced from it. In my joy I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects! I examined the materials of the fire, and to my joy found it to be composed of wood. I quickly collected some branches; but they were wet, and would not burn. I was pained at this, and sat still watching the operation of the fire. The wet wood which I had placed near the heat dried, and itself became inflamed. I reflected on this; and, by touching the various branches, I discovered the cause, and busied myself in collecting a great quantity of wood, that I might dry it, and have a plentiful supply of fire. When night came on, and brought sleep with it, I was in the greatest fear lest my fire should be extinguished. I covered it carefully with dry wood and leaves, and placed wet branches upon it; and then, spreading my cloak, I lay on the ground, and sunk into sleep.',
    ),
    source: {
      author: 'Mary Shelley',
      work: 'Frankenstein',
      where: 'Chapter 11',
      held: 'frankenstein',
      section: 'Chapter XI',
    },
    questions: [
      {
        prompt: 'Who had left the fire?',
        options: [
          'Some wandering beggars',
          'Woodcutters gathering branches',
          'Travellers lost in the forest',
          'A shepherd and his dog',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why would the first branches the narrator collected not burn?',
        options: [
          'The fire had gone out',
          'The branches were wet',
          'They were covered in leaves',
          'They were too thick',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does the narrator mean by 'the same cause should produce such opposite effects'?",
        options: [
          'The moon grows smaller and then larger again',
          'Birds sing sweetly by day and harshly by night',
          'Fire can warm him, and yet it also burns him',
          'Wet wood and dry wood burn in the same way',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "How does the passage show the narrator's mind developing?",
        options: [
          'He forgets more each day as the moon changes',
          'He learns everything at once on the first night',
          'He is taught step by step by a kind stranger',
          'He moves from noticing things to finding causes',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the narrator is learning about the world from the very beginning?',
        options: [
          "'I distinguished the insect from the herb'",
          "'I lay on the ground'",
          "'I was in the greatest fear lest my fire should be extinguished'",
          "'had been left by some wandering beggars'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Cottagers',
    text: paragraphs(
      '"A considerable period elapsed before I discovered one of the causes of the uneasiness of this amiable family: it was poverty; and they suffered that evil in a very distressing degree. Their nourishment consisted entirely of the vegetables of their garden, and the milk of one cow, which gave very little during the winter, when its masters could scarcely procure food to support it. They often, I believe, suffered the pangs of hunger very poignantly, especially the two younger cottagers; for several times they placed food before the old man, when they reserved none for themselves.',
      '"This trait of kindness moved me sensibly. I had been accustomed, during the night, to steal a part of their store for my own consumption; but when I found that in doing this I inflicted pain on the cottagers, I abstained, and satisfied myself with berries, nuts, and roots, which I gathered from a neighbouring wood.',
      '"I discovered also another means through which I was enabled to assist their labours. I found that the youth spent a great part of each day in collecting wood for the family fire; and, during the night, I often took his tools, the use of which I quickly discovered, and brought home firing sufficient for the consumption of several days.',
      '"I remember, the first time that I did this, the young woman, when she opened the door in the morning, appeared greatly astonished on seeing a great pile of wood on the outside. She uttered some words in a loud voice, and the youth joined her, who also expressed surprise. I observed, with pleasure, that he did not go to the forest that day, but spent it in repairing the cottage, and cultivating the garden.',
    ),
    source: {
      author: 'Mary Shelley',
      work: 'Frankenstein',
      where: 'Chapter 12',
      held: 'frankenstein',
      section: 'Chapter XII',
    },
    questions: [
      {
        prompt: "What cause of the family's unhappiness does the narrator discover?",
        options: ['A quarrel', 'Poverty', 'The long winter', 'Loneliness'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What did the cottagers live on?',
        options: [
          'Berries, nuts and roots from the wood',
          'Fish caught in a nearby river',
          'Garden vegetables and the milk of one cow',
          'Bread and meat bought in the town',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "Why does the narrator stop taking food from the cottagers' store?",
        options: [
          'He is afraid of being caught',
          'He has found a better store',
          'The old man asks him to stop',
          'He finds it is hurting them',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "Which detail best shows that the family's selflessness touches the narrator?",
        options: [
          "'This trait of kindness moved me sensibly'",
          "'they suffered that evil in a very distressing degree'",
          "'the milk of one cow, which gave very little'",
          "'I observed, with pleasure'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
      {
        prompt: "How does the narrator's account make readers feel about him?",
        options: [
          'We find him foolish for wasting all his time',
          'We see him as kind, though he stays hidden',
          'We fear him as a thief who preys on the poor',
          'We think him cold and only curious about them',
        ],
        answer: 1,
        type: 'viewpoint',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'The By-Street',
    text: paragraphs(
      'It chanced on one of these rambles that their way led them down a by-street in a busy quarter of London. The street was small and what is called quiet, but it drove a thriving trade on the weekdays. The inhabitants were all doing well, it seemed, and all emulously hoping to do better still, and laying out the surplus of their gains in coquetry; so that the shop fronts stood along that thoroughfare with an air of invitation, like rows of smiling saleswomen. Even on Sunday, when it veiled its more florid charms and lay comparatively empty of passage, the street shone out in contrast to its dingy neighbourhood, like a fire in a forest; and with its freshly painted shutters, well-polished brasses, and general cleanliness and gaiety of note, instantly caught and pleased the eye of the passenger.',
      'Two doors from one corner, on the left hand going east the line was broken by the entry of a court; and just at that point a certain sinister block of building thrust forward its gable on the street. It was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper; and bore in every feature, the marks of prolonged and sordid negligence. The door, which was equipped with neither bell nor knocker, was blistered and distained. Tramps slouched into the recess and struck matches on the panels; children kept shop upon the steps; the schoolboy had tried his knife on the mouldings; and for close on a generation, no one had appeared to drive away these random visitors or to repair their ravages.',
      'Mr. Enfield and the lawyer were on the other side of the by-street; but when they came abreast of the entry, the former lifted up his cane and pointed.',
      '“Did you ever remark that door?” he asked; and when his companion had replied in the affirmative, “It is connected in my mind,” added he, “with a very odd story.”',
    ),
    source: {
      author: 'Robert Louis Stevenson',
      work: 'Strange Case of Dr Jekyll and Mr Hyde',
      where: 'Chapter 1, Story of the Door',
      held: 'jekyll-and-hyde',
      section: 'Story of the Door',
    },
    questions: [
      {
        prompt: 'What is the door of the sinister building without?',
        options: [
          'A handle and its hinges',
          'A step and a porch',
          'A bell and a knocker',
          'A lock and a key',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'like rows of smiling saleswomen' suggest about the shop fronts?",
        options: [
          'They are run by cheerful women shopkeepers',
          'They are dark and shuttered up for Sunday',
          'They are crowded with eager weekday customers',
          'They look bright and seem to invite you in',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "The building has 'a blind forehead of discoloured wall'. What is the effect of describing it like a face?",
        options: [
          'It seems a blank, unseeing face, which unsettles us',
          'It makes the building seem friendly and human',
          'It shows that the wall has been freshly painted',
          'It suggests someone watches from a window',
        ],
        answer: 0,
        type: 'language',
        tier: 3,
      },
      {
        prompt: 'Why does Stevenson describe the cheerful street before the building?',
        options: [
          'To show the street matters more than the door',
          'To make the door seem darker by contrast',
          'To show that the whole neighbourhood is dingy',
          'To suggest the door belongs to a busy shop',
        ],
        answer: 1,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that nobody has looked after the building for years?',
        options: [
          "'on the left hand going east the line was broken'",
          "'It was two storeys high; showed no window'",
          "'the marks of prolonged and sordid negligence'",
          "'a certain sinister block of building thrust forward its gable'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'A Frosty Night',
    text: paragraphs(
      'And at last his patience was rewarded. It was a fine dry night; frost in the air; the streets as clean as a ballroom floor; the lamps, unshaken by any wind, drawing a regular pattern of light and shadow. By ten o’clock, when the shops were closed, the by-street was very solitary and, in spite of the low growl of London from all round, very silent. Small sounds carried far; domestic sounds out of the houses were clearly audible on either side of the roadway; and the rumour of the approach of any passenger preceded him by a long time. Mr. Utterson had been some minutes at his post, when he was aware of an odd light footstep drawing near. In the course of his nightly patrols, he had long grown accustomed to the quaint effect with which the footfalls of a single person, while he is still a great way off, suddenly spring out distinct from the vast hum and clatter of the city. Yet his attention had never before been so sharply and decisively arrested; and it was with a strong, superstitious prevision of success that he withdrew into the entry of the court.',
      'The steps drew swiftly nearer, and swelled out suddenly louder as they turned the end of the street. The lawyer, looking forth from the entry, could soon see what manner of man he had to deal with. He was small and very plainly dressed and the look of him, even at that distance, went somehow strongly against the watcher’s inclination. But he made straight for the door, crossing the roadway to save time; and as he came, he drew a key from his pocket like one approaching home.',
      'Mr. Utterson stepped out and touched him on the shoulder as he passed. “Mr. Hyde, I think?”',
      'Mr. Hyde shrank back with a hissing intake of the breath. But his fear was only momentary; and though he did not look the lawyer in the face, he answered coolly enough: “That is my name. What do you want?”',
    ),
    source: {
      author: 'Robert Louis Stevenson',
      work: 'Strange Case of Dr Jekyll and Mr Hyde',
      where: 'Chapter 2, Search for Mr. Hyde',
      held: 'jekyll-and-hyde',
      section: 'Search for Mr. Hyde',
    },
    questions: [
      {
        prompt: 'By what time were the shops closed and the by-street solitary?',
        options: ['At midnight', 'By nine', 'Soon after dusk', 'By ten'],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'he drew a key from his pocket like one approaching home' suggest?",
        options: [
          'He has a key and comes and goes as he likes',
          'He is a burglar who is about to break in',
          'He has lost his way and is looking for home',
          'He is a servant sent there on an errand',
        ],
        answer: 0,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'the streets as clean as a ballroom floor' suggest about the night?",
        options: [
          'Heavy rain has washed the streets clean',
          'The empty streets gleam bare in the frost',
          'A grand dance is being held nearby tonight',
          'The streets are crowded with people dancing',
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          'The first paragraph describes the silent street and a distant footstep before the man appears. What is the effect?',
        options: [
          'It shows the street is safe and cheerful',
          'It delays the action, as nothing important happens',
          'It builds suspense as we wait with Utterson',
          'It shows Utterson has fallen asleep at his post',
        ],
        answer: 2,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which detail best shows that Hyde is startled when Utterson stops him?',
        options: [
          "'he answered coolly enough'",
          "'The steps drew swiftly nearer, and swelled out suddenly louder'",
          "'very plainly dressed'",
          "'shrank back with a hissing intake of the breath'",
        ],
        answer: 3,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Holmes Explains',
    text: paragraphs(
      '“Not at all,” I answered, earnestly. “It is of the greatest interest to me, especially since I have had the opportunity of observing your practical application of it. But you spoke just now of observation and deduction. Surely the one to some extent implies the other.”',
      '“Why, hardly,” he answered, leaning back luxuriously in his arm-chair, and sending up thick blue wreaths from his pipe. “For example, observation shows me that you have been to the Wigmore Street Post-Office this morning, but deduction lets me know that when there you dispatched a telegram.”',
      '“Right!” said I. “Right on both points! But I confess that I don’t see how you arrived at it. It was a sudden impulse upon my part, and I have mentioned it to no one.”',
      '“It is simplicity itself,” he remarked, chuckling at my surprise,—“so absurdly simple that an explanation is superfluous; and yet it may serve to define the limits of observation and of deduction. Observation tells me that you have a little reddish mould adhering to your instep. Just opposite the Wigmore Street Office they have taken up the pavement and thrown up some earth which lies in such a way that it is difficult to avoid treading in it in entering. The earth is of this peculiar reddish tint which is found, as far as I know, nowhere else in the neighbourhood. So much is observation. The rest is deduction.”',
      '“How, then, did you deduce the telegram?”',
      '“Why, of course I knew that you had not written a letter, since I sat opposite to you all morning. I see also in your open desk there that you have a sheet of stamps and a thick bundle of post-cards. What could you go into the post-office for, then, but to send a wire? Eliminate all other factors, and the one which remains must be the truth.”',
    ),
    source: {
      author: 'Arthur Conan Doyle',
      work: 'The Sign of Four',
      where: 'Chapter 1',
      held: 'the-sign-of-four',
      section: 'Chapter I',
    },
    questions: [
      {
        prompt: "What does Holmes notice on Watson's instep?",
        options: [
          'A little reddish mould',
          'A fresh green grass stain',
          'A splash of grey mud',
          'White dust from the road',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'How does Holmes know that Watson did not go to the post office to post a letter?',
        options: [
          "He could see Watson's letters still on the desk",
          'He sat with him all morning and saw no letter written',
          'Watson had told him he meant to send a telegram',
          'The post office in Wigmore Street takes no letters',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "What does Holmes mean by 'Eliminate all other factors, and the one which remains must be the truth'?",
        options: [
          'The simplest answer to a problem is never the right one',
          'Gather every clue you can find before deciding anything',
          'Rule out every other answer, and what is left is true',
          'Always trust your very first guess about a problem',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'According to Holmes, what is the difference between observation and deduction?',
        options: [
          'Observation is guessing; deduction is simply knowing',
          'They are the same thing under two different names',
          'Deduction notices clues; observation reasons from them',
          'Observation notices clues; deduction reasons from them',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "Which detail best shows that Holmes is amused by Watson's astonishment?",
        options: [
          "'he remarked, chuckling at my surprise'",
          "'I have mentioned it to no one'",
          "'sending up thick blue wreaths from his pipe'",
          "'since I sat opposite to you all morning'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Miss Morstan',
    text: paragraphs(
      'Miss Morstan entered the room with a firm step and an outward composure of manner. She was a blonde young lady, small, dainty, well gloved, and dressed in the most perfect taste. There was, however, a plainness and simplicity about her costume which bore with it a suggestion of limited means. The dress was a sombre greyish beige, untrimmed and unbraided, and she wore a small turban of the same dull hue, relieved only by a suspicion of white feather in the side. Her face had neither regularity of feature nor beauty of complexion, but her expression was sweet and amiable, and her large blue eyes were singularly spiritual and sympathetic. In an experience of women which extends over many nations and three separate continents, I have never looked upon a face which gave a clearer promise of a refined and sensitive nature. I could not but observe that as she took the seat which Sherlock Holmes placed for her, her lip trembled, her hand quivered, and she showed every sign of intense inward agitation.',
      '“I have come to you, Mr. Holmes,” she said, “because you once enabled my employer, Mrs. Cecil Forrester, to unravel a little domestic complication. She was much impressed by your kindness and skill.”',
      '“Mrs. Cecil Forrester,” he repeated thoughtfully. “I believe that I was of some slight service to her. The case, however, as I remember it, was a very simple one.”',
      '“She did not think so. But at least you cannot say the same of mine. I can hardly imagine anything more strange, more utterly inexplicable, than the situation in which I find myself.”',
      'Holmes rubbed his hands, and his eyes glistened. He leaned forward in his chair with an expression of extraordinary concentration upon his clear-cut, hawklike features. “State your case,” said he, in brisk, business tones.',
    ),
    source: {
      author: 'Arthur Conan Doyle',
      work: 'The Sign of Four',
      where: 'Chapter 2',
      held: 'the-sign-of-four',
      section: 'Chapter II',
    },
    questions: [
      {
        prompt: 'Who is Mrs. Cecil Forrester?',
        options: [
          "An old friend of Watson's",
          "Miss Morstan's employer",
          "Miss Morstan's mother",
          "Holmes's housekeeper",
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'a suggestion of limited means' tell us about Miss Morstan?",
        options: [
          'She means to stay only briefly',
          'She is unwilling to say much',
          'She has little money to spend',
          'She has a narrow, limited mind',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "The first paragraph begins with her 'outward composure' and ends with 'intense inward agitation'. What does this shift show?",
        options: [
          'She grows nervous because Holmes is very rude to her',
          'She is only pretending to be upset for sympathy',
          'She calms down once she has sat in her chair',
          'Her calm is only on the surface; inside she is anxious',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          "What does the narrator's description of Miss Morstan suggest about his feelings for her?",
        options: [
          'He is deeply taken with her and admires her',
          'He suspects she is lying about her troubles',
          'He finds her plain and rather dull to look at',
          'He is jealous of her friendship with Holmes',
        ],
        answer: 0,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: "Which detail best shows Holmes's eagerness to hear a difficult case?",
        options: [
          "'as I remember it, was a very simple one'",
          "'Holmes rubbed his hands, and his eyes glistened'",
          "'he repeated thoughtfully'",
          "'I believe that I was of some slight service to her'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'Pinchin Lane',
    text: paragraphs(
      'Pinchin Lane was a row of shabby two-storied brick houses in the lower quarter of Lambeth. I had to knock for some time at No. 3 before I could make my impression. At last, however, there was the glint of a candle behind the blind, and a face looked out at the upper window.',
      '“Go on, you drunken vagabone,” said the face. “If you kick up any more row I’ll open the kennels and let out forty-three dogs upon you.”',
      '“If you’ll let one out it’s just what I have come for,” said I.',
      '“Go on!” yelled the voice. “So help me gracious, I have a wiper in the bag, an’ I’ll drop it on your ’ead if you don’t hook it.”',
      '“But I want a dog,” I cried.',
      '“I won’t be argued with!” shouted Mr. Sherman. “Now stand clear, for when I say ‘three,’ down goes the wiper.”',
      '“Mr. Sherlock Holmes—” I began, but the words had a most magical effect, for the window instantly slammed down, and within a minute the door was unbarred and open. Mr. Sherman was a lanky, lean old man, with stooping shoulders, a stringy neck, and blue-tinted glasses.',
      '“A friend of Mr. Sherlock is always welcome,” said he. “Step in, sir. Keep clear of the badger; for he bites. Ah, naughty, naughty, would you take a nip at the gentleman?” This to a stoat which thrust its wicked head and red eyes between the bars of its cage. “Don’t mind that, sir: it’s only a slow-worm. It hain’t got no fangs, so I gives it the run o’ the room, for it keeps the beetles down. You must not mind my bein’ just a little short wi’ you at first, for I’m guyed at by the children, and there’s many a one just comes down this lane to knock me up. What was it that Mr. Sherlock Holmes wanted, sir?”',
    ),
    source: {
      author: 'Arthur Conan Doyle',
      work: 'The Sign of Four',
      where: 'Chapter 7',
      held: 'the-sign-of-four',
      section: 'Chapter VII',
    },
    questions: [
      {
        prompt: 'How many dogs does Mr. Sherman threaten to let out?',
        options: ['Three', 'Thirteen', 'Forty-three', 'Thirty-four'],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "Why is Mr. Sherman 'a little short' with Watson at first?",
        options: [
          'He has been woken by his barking dogs',
          'He thinks Watson wants to steal a dog',
          'He dislikes Sherlock Holmes and his friends',
          'Children often bang on his door for fun',
        ],
        answer: 3,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'the words had a most magical effect' suggest?",
        options: [
          "Holmes's name changes his mood at once",
          'Watson has cast a spell to open the door',
          'The words scare Mr. Sherman into hiding',
          'Mr. Sherman does not hear Watson at all',
        ],
        answer: 0,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "Why does Conan Doyle print Mr. Sherman's speech with spellings such as 'wiper' for viper and 'hain't'?",
        options: [
          'To make him sound grand and well educated',
          'To show his rough, local way of speaking',
          'To show that he cannot spell properly',
          'Because these spellings were correct then',
        ],
        answer: 1,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'Which detail best shows that Mr. Sherman is fond of his animals?',
        options: [
          "'a lanky, lean old man, with stooping shoulders'",
          "'the window instantly slammed down'",
          "'Ah, naughty, naughty, would you take a nip'",
          "'Keep clear of the badger; for he bites'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Eve of the War',
    text: paragraphs(
      'No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own; that as men busied themselves about their various concerns they were scrutinised and studied, perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water. With infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter. It is possible that the infusoria under the microscope do the same. No one gave a thought to the older worlds of space as sources of human danger, or thought of them only to dismiss the idea of life upon them as impossible or improbable. It is curious to recall some of the mental habits of those departed days. At most terrestrial men fancied there might be other men upon Mars, perhaps inferior to themselves and ready to welcome a missionary enterprise. Yet across the gulf of space, minds that are to our minds as ours are to those of the beasts that perish, intellects vast and cool and unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their plans against us. And early in the twentieth century came the great disillusionment.',
    ),
    source: {
      author: 'H. G. Wells',
      work: 'The War of the Worlds',
      where: 'Book 1, Chapter 1',
      held: 'the-war-of-the-worlds',
      section: 'Book One, Chapter I: The Eve of the War',
    },
    questions: [
      {
        prompt: 'How did most people imagine any men on Mars, if they imagined them at all?',
        options: [
          'Far wiser than us, and planning an invasion',
          'Exactly like us in every possible way',
          'Too small to be seen through any telescope',
          'Lesser beings, ready to welcome missionaries',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "Humans are compared to 'the transient creatures that swarm and multiply in a drop of water'. What does this suggest?",
        options: [
          'Humans are like tiny microbes to the Martians',
          'Humans are dirty and spread disease',
          'Humans live mostly in or near the sea',
          'Humans are clever enough to use microscopes',
        ],
        answer: 0,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "What is the effect of describing the Martian minds as 'vast and cool and unsympathetic'?",
        options: [
          'They seem confused and unsure what to do',
          'They seem coldly superior and without pity',
          'They seem calm, friendly and easy to reason with',
          'They seem enormous in body but slow in mind',
        ],
        answer: 1,
        type: 'language',
        tier: 3,
      },
      {
        prompt:
          "Looking back on 'those departed days', how does the narrator see people's confidence then?",
        options: [
          'As sensible, since there was no danger',
          'As the fault of careless scientists',
          'As foolish and blind to the danger',
          'As a brave and admirable calmness',
        ],
        answer: 2,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt:
          "Why does the paragraph end with the short sentence 'And early in the twentieth century came the great disillusionment'?",
        options: [
          'It sums up a peaceful century that is ending',
          'It explains exactly how the war was won',
          'It shows the narrator has lost interest',
          'It hints at a great shock to come, so we read on',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novel',
    title: 'The Falling Star',
    text: paragraphs(
      'He remained standing at the edge of the pit that the Thing had made for itself, staring at its strange appearance, astonished chiefly at its unusual shape and colour, and dimly perceiving even then some evidence of design in its arrival. The early morning was wonderfully still, and the sun, just clearing the pine trees towards Weybridge, was already warm. He did not remember hearing any birds that morning, there was certainly no breeze stirring, and the only sounds were the faint movements from within the cindery cylinder. He was all alone on the common.',
      'Then suddenly he noticed with a start that some of the grey clinker, the ashy incrustation that covered the meteorite, was falling off the circular edge of the end. It was dropping off in flakes and raining down upon the sand. A large piece suddenly came off and fell with a sharp noise that brought his heart into his mouth.',
      'For a minute he scarcely realised what this meant, and, although the heat was excessive, he clambered down into the pit close to the bulk to see the Thing more clearly. He fancied even then that the cooling of the body might account for this, but what disturbed that idea was the fact that the ash was falling only from the end of the cylinder.',
      'And then he perceived that, very slowly, the circular top of the cylinder was rotating on its body. It was such a gradual movement that he discovered it only through noticing that a black mark that had been near him five minutes ago was now at the other side of the circumference. Even then he scarcely understood what this indicated, until he heard a muffled grating sound and saw the black mark jerk forward an inch or so. Then the thing came upon him in a flash. The cylinder was artificial—hollow—with an end that screwed out! Something within the cylinder was unscrewing the top!',
      '“Good heavens!” said Ogilvy. “There’s a man in it—men in it! Half roasted to death! Trying to escape!”',
    ),
    source: {
      author: 'H. G. Wells',
      work: 'The War of the Worlds',
      where: 'Book 1, Chapter 2',
      held: 'the-war-of-the-worlds',
      section: 'Book One, Chapter II: The Falling Star',
    },
    questions: [
      {
        prompt: 'How does he first notice that the top of the cylinder is turning?',
        options: [
          'A black mark has moved round the rim',
          'He hears the top grinding loudly round',
          'The ash falls off in one large piece',
          'He sees steam rising from the end',
        ],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'Why does the falling ash disturb his idea that the Thing was simply cooling?',
        options: [
          'The ash is rising into the air, not falling',
          'Cooling would loosen ash all over, not at one end',
          'The ash is far too hot to have come from mere cooling',
          'Meteorites never cool down once they land',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'brought his heart into his mouth' suggest?",
        options: [
          'A shout of excitement',
          'A feeling of calm',
          'A sudden jolt of fear',
          'A wave of sickness from the heat',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          'The first paragraph describes how still and silent the morning is. Why does Wells begin this way?',
        options: [
          'It shows that nothing exciting will happen that day',
          'It shows the birds have been frightened away',
          'It suggests Ogilvy is daydreaming and imagining things',
          'It makes the strange sounds all the more startling',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows the moment Ogilvy finally understands what the cylinder is?',
        options: [
          "'Then the thing came upon him in a flash'",
          "'For a minute he scarcely realised what this meant'",
          "'dimly perceiving even then some evidence of design'",
          "'He fancied even then that the cooling of the body might account for this'",
        ],
        answer: 0,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'The Big Barn',
    text: paragraphs(
      'Before long the other animals began to arrive and make themselves comfortable after their different fashions. First came the three dogs, Bluebell, Jessie, and Pincher, and then the pigs, who settled down in the straw immediately in front of the platform. The hens perched themselves on the window-sills, the pigeons fluttered up to the rafters, the sheep and cows lay down behind the pigs and began to chew the cud. The two cart-horses, Boxer and Clover, came in together, walking very slowly and setting down their vast hairy hoofs with great care lest there should be some small animal concealed in the straw. Clover was a stout motherly mare approaching middle life, who had never quite got her figure back after her fourth foal. Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together. A white stripe down his nose gave him a somewhat stupid appearance, and in fact he was not of first-rate intelligence, but he was universally respected for his steadiness of character and tremendous powers of work. After the horses came Muriel, the white goat, and Benjamin, the donkey. Benjamin was the oldest animal on the farm, and the worst tempered. He seldom talked, and when he did, it was usually to make some cynical remark—for instance, he would say that God had given him a tail to keep the flies off, but that he would sooner have had no tail and no flies. Alone among the animals on the farm he never laughed. If asked why, he would say that he saw nothing to laugh at. Nevertheless, without openly admitting it, he was devoted to Boxer; the two of them usually spent their Sundays together in the small paddock beyond the orchard, grazing side by side and never speaking.',
    ),
    source: {
      author: 'George Orwell',
      work: 'Animal Farm',
      where: 'Chapter 1',
      held: 'animal-farm',
      section: 'Chapter I',
    },
    questions: [
      {
        prompt: 'Where do the pigs settle down?',
        options: [
          'Behind the sheep and the cows',
          'In the straw right in front of the platform',
          'Up in the rafters beside the fluttering pigeons',
          'On the window-sills beside the hens',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt:
          "Boxer and Clover set down their hoofs 'with great care lest there should be some small animal concealed in the straw'. What does this show?",
        options: [
          'They are old and their legs are weak',
          'They are searching the straw for food',
          'They are gentle with smaller animals',
          'They are afraid of being bitten by rats',
        ],
        answer: 2,
        type: 'inference',
        tier: 2,
      },
      {
        prompt: "What does 'cynical' suggest about Benjamin's remarks?",
        options: [
          'He is cheerful and full of jokes',
          'He is shy and hates to be heard',
          'He gives wise and helpful advice',
          'He sneers and expects the worst',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "What is the narrator's tone in describing the animals' arrival?",
        options: [
          'Plain and matter-of-fact, with a quiet humour',
          'Excited, and full of breathless exclamations',
          'Angry, and mocking every animal in turn',
          'Sad, and full of pity for the animals',
        ],
        answer: 0,
        type: 'viewpoint',
        tier: 3,
      },
      {
        prompt: 'Which detail best suggests that Benjamin is warmer than he seems?',
        options: [
          "'the oldest animal on the farm, and the worst tempered'",
          "'the two of them usually spent their Sundays together'",
          "'Alone among the animals on the farm he never laughed'",
          "'he would sooner have had no tail and no flies'",
        ],
        answer: 1,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'The Farmhouse',
    text: paragraphs(
      "Then they filed back to the farm buildings and halted in silence outside the door of the farmhouse. That was theirs too, but they were frightened to go inside. After a moment, however, Snowball and Napoleon butted the door open with their shoulders and the animals entered in single file, walking with the utmost care for fear of disturbing anything. They tiptoed from room to room, afraid to speak above a whisper and gazing with a kind of awe at the unbelievable luxury, at the beds with their feather mattresses, the looking-glasses, the horsehair sofa, the Brussels carpet, the lithograph of Queen Victoria over the drawing-room mantelpiece. They were just coming down the stairs when Mollie was discovered to be missing. Going back, the others found that she had remained behind in the best bedroom. She had taken a piece of blue ribbon from Mrs. Jones's dressing-table, and was holding it against her shoulder and admiring herself in the glass in a very foolish manner. The others reproached her sharply, and they went outside. Some hams hanging in the kitchen were taken out for burial, and the barrel of beer in the scullery was stove in with a kick from Boxer's hoof, otherwise nothing in the house was touched. A unanimous resolution was passed on the spot that the farmhouse should be preserved as a museum. All were agreed that no animal must ever live there.",
    ),
    source: {
      author: 'George Orwell',
      work: 'Animal Farm',
      where: 'Chapter 2',
      held: 'animal-farm',
      section: 'Chapter II',
    },
    questions: [
      {
        prompt: 'Who butts the farmhouse door open?',
        options: [
          'Mollie and Benjamin',
          'Bluebell, Jessie and Pincher',
          'Snowball and Napoleon',
          'Boxer and Mollie',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What is Mollie doing when the others find her?',
        options: [
          'Lying asleep on a feather mattress',
          'Eating one of the hams down in the kitchen',
          'Hiding from the others under the bed',
          'Posing in the glass with a blue ribbon',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'A unanimous resolution was passed' mean?",
        options: [
          'Every animal agreed on the decision',
          'One leader made the decision alone',
          'The animals promised to try harder',
          'The vote was won by a narrow margin',
        ],
        answer: 0,
        type: 'language',
        tier: 2,
      },
      {
        prompt: "Why are the hams taken out of the kitchen 'for burial'?",
        options: [
          'Mr. Jones ordered it before he was driven off',
          'They are dead pigs, so they deserve respect',
          'The hams have gone bad and smell terrible',
          'The pigs want to hide the food to eat later',
        ],
        answer: 1,
        type: 'inference',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the animals respect the house rather than wanting to use it?',
        options: [
          "'the barrel of beer in the scullery was stove in'",
          "'They were just coming down the stairs'",
          "'walking with the utmost care for fear of disturbing anything'",
          "'Snowball and Napoleon butted the door open with their shoulders'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'The Harvest',
    text: paragraphs(
      'How they toiled and sweated to get the hay in! But their efforts were rewarded, for the harvest was an even bigger success than they had hoped.',
      'Sometimes the work was hard; the implements had been designed for human beings and not for animals, and it was a great drawback that no animal was able to use any tool that involved standing on his hind legs. But the pigs were so clever that they could think of a way round every difficulty. As for the horses, they knew every inch of the field, and in fact understood the business of mowing and raking far better than Jones and his men had ever done. The pigs did not actually work, but directed and supervised the others. With their superior knowledge it was natural that they should assume the leadership. Boxer and Clover would harness themselves to the cutter or the horse-rake (no bits or reins were needed in these days, of course) and tramp steadily round and round the field with a pig walking behind and calling out "Gee up, comrade!" or "Whoa back, comrade!" as the case might be. And every animal down to the humblest worked at turning the hay and gathering it. Even the ducks and hens toiled to and fro all day in the sun, carrying tiny wisps of hay in their beaks. In the end they finished the harvest in two days\' less time than it had usually taken Jones and his men. Moreover, it was the biggest harvest that the farm had ever seen. There was no wastage whatever; the hens and ducks with their sharp eyes had gathered up the very last stalk. And not an animal on the farm had stolen so much as a mouthful.',
    ),
    source: {
      author: 'George Orwell',
      work: 'Animal Farm',
      where: 'Chapter 3',
      held: 'animal-farm',
      section: 'Chapter III',
    },
    questions: [
      {
        prompt: 'Why was it hard for the animals to use the farm tools?',
        options: [
          'They had been broken in the Rebellion',
          'The pigs would not let anyone touch them',
          'Mr. Jones had taken them all away',
          'They were made for humans on two legs',
        ],
        answer: 3,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'How much sooner than Jones and his men did the animals finish the harvest?',
        options: ['Two days', 'Two weeks', 'In half the time', 'Three days'],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What do the ducks and hens 'carrying tiny wisps of hay in their beaks' show?",
        options: [
          'The birds are building nests for the winter',
          'Even the smallest animals do all that they can',
          'The ducks and hens are lazy and do very little',
          'The hay is too heavy for the bigger animals',
        ],
        answer: 1,
        type: 'inference',
        tier: 2,
      },
      {
        prompt:
          "The narrator says the pigs 'did not actually work' while 'every animal down to the humblest' did. What does this contrast suggest?",
        options: [
          'The other animals resent the pigs and will rebel',
          'The farm work is shared out equally among all',
          'The pigs already set themselves above all the rest',
          'The pigs are too weak to do heavy farm work',
        ],
        answer: 2,
        type: 'inference',
        tier: 3,
      },
      {
        prompt:
          'Which detail best shows that the animals are honest now that they work for themselves?',
        options: [
          "'There was no wastage whatever'",
          "'the hens and ducks with their sharp eyes'",
          "'they knew every inch of the field'",
          "'not an animal on the farm had stolen'",
        ],
        answer: 3,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic novella',
    title: 'The Yard',
    text: paragraphs(
      "It was just after the sheep had returned, on a pleasant evening when the animals had finished work and were making their way back to the farm buildings, that the terrified neighing of a horse sounded from the yard. Startled, the animals stopped in their tracks. It was Clover's voice. She neighed again, and all the animals broke into a gallop and rushed into the yard. Then they saw what Clover had seen.",
      'It was a pig walking on his hind legs.',
      'Yes, it was Squealer. A little awkwardly, as though not quite used to supporting his considerable bulk in that position, but with perfect balance, he was strolling across the yard. And a moment later, out from the door of the farmhouse came a long file of pigs, all walking on their hind legs. Some did it better than others, one or two were even a trifle unsteady and looked as though they would have liked the support of a stick, but every one of them made his way right round the yard successfully. And finally there was a tremendous baying of dogs and a shrill crowing from the black cockerel, and out came Napoleon himself, majestically upright, casting haughty glances from side to side, and with his dogs gambolling round him.',
      'He carried a whip in his trotter.',
      'There was a deadly silence. Amazed, terrified, huddling together, the animals watched the long line of pigs march slowly round the yard. It was as though the world had turned upside-down. Then there came a moment when the first shock had worn off and when, in spite of everything-in spite of their terror of the dogs, and of the habit, developed through long years, of never complaining, never criticising, no matter what happened—they might have uttered some word of protest. But just at that moment, as though at a signal, all the sheep burst out into a tremendous bleating of—',
      '"Four legs good, two legs BETTER! Four legs good, two legs BETTER! Four legs good, two legs BETTER!"',
    ),
    source: {
      author: 'George Orwell',
      work: 'Animal Farm',
      where: 'Chapter 10',
      held: 'animal-farm',
      section: 'Chapter X',
    },
    questions: [
      {
        prompt: 'Whose terrified neighing first calls the animals to the yard?',
        options: ["Clover's", "Squealer's", "Napoleon's", "Benjamin's"],
        answer: 0,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: 'What does Napoleon carry in his trotter?',
        options: ['A set of keys', 'A whip', 'A clay pipe', 'A walking stick'],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'It was as though the world had turned upside-down' suggest?",
        options: [
          'An earthquake has shaken the whole farm',
          'The pigs are walking around on their heads',
          'Everything they believed has been reversed',
          'The animals feel dizzy and sick with fear',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt:
          "Why does Orwell give 'It was a pig walking on his hind legs.' a paragraph of its own?",
        options: [
          'It shows that the pig fell over straight away',
          'It marks the start of a new chapter',
          'It shows that the narrator is bored by it',
          'It makes the shocking sight stand out sharply',
        ],
        answer: 3,
        type: 'structure',
        tier: 3,
      },
      {
        prompt:
          "Why do the sheep burst into bleating 'just at that moment, as though at a signal'?",
        options: [
          'They drown out any protest before it starts',
          'They are frightened of the dogs and the whip',
          'They are cheering Clover for raising the alarm',
          'They are hungry and want to be given supper',
        ],
        answer: 0,
        type: 'inference',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic poem',
    title: 'If',
    text: paragraphs(
      'If you can keep your head when all about you\nAre losing theirs and blaming it on you;\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too;\nIf you can wait and not be tired by waiting,\nOr being lied about, don’t deal in lies,\nOr being hated, don’t give way to hating,\nAnd yet don’t look too good, nor talk too wise;',
      'If you can dream--and not make dreams your master;\nIf you can think--and not make thoughts your aim,\nIf you can meet with Triumph and Disaster\nAnd treat those two impostors just the same;\nIf you can bear to hear the truth you’ve spoken\nTwisted by knaves to make a trap for fools,\nOr watch the things you gave your life to, broken,\nAnd stoop and build ‘em up with worn-out tools;',
      'If you can make one heap of all your winnings\nAnd risk it on one turn of pitch-and-toss,\nAnd lose, and start again at your beginnings\nAnd never breathe a word about your loss;\nIf you can force your heart and nerve and sinew\nTo serve your turn long after they are gone,\nAnd so hold on when there is nothing in you\nExcept the Will which says to them: ‘Hold on!’',
      'If you can talk with crowds and keep your virtue,\nOr walk with Kings--nor lose the common touch,\nIf neither foes nor loving friends can hurt you,\nIf all men count with you, but none too much;\nIf you can fill the unforgiving minute\nWith sixty seconds’ worth of distance run,\nYours is the Earth and everything that’s in it,\nAnd--which is more--you’ll be a Man, my son!',
    ),
    source: {
      author: 'Rudyard Kipling',
      work: 'If',
      where: 'the whole poem',
      held: 'if',
      section: 'If—',
    },
    questions: [
      {
        prompt: "What does the poem tell the reader to do with 'Triumph and Disaster'?",
        options: [
          'Share them both with crowds and with Kings',
          'Treat the two of them in just the same way',
          'Celebrate the first and hide from the second',
          'Build them both up again with worn-out tools',
        ],
        answer: 1,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'keep your head when all about you / Are losing theirs' mean?",
        options: [
          'Think for yourself in every argument',
          'Remember facts when others forget them',
          'Stay calm when everyone around you panics',
          'Stand tall when others bow their heads',
        ],
        answer: 2,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'Who is speaking, and to whom, as the last line reveals?',
        options: [
          'A boy promising to please his father',
          'A parent giving advice to a son',
          'A king speaking to his loyal army',
          'A teacher talking to a class',
        ],
        answer: 1,
        type: 'viewpoint',
        tier: 2,
      },
      {
        prompt: "Why does the speaker call Triumph and Disaster 'impostors'?",
        options: [
          'Both are people who have lied to the speaker',
          'Both are enemies who will set a trap for you',
          'Both always arrive together, side by side',
          'Both seem to be more than they really are',
        ],
        answer: 3,
        type: 'language',
        tier: 3,
      },
      {
        prompt:
          "The whole poem is built from 'If' clauses, and the main clause comes only at the end. What is the effect?",
        options: [
          'It makes the reward feel earned after many tests',
          'It shows that the speaker cannot decide what to say',
          'It turns the poem into questions with no answers',
          'It suggests the rules do not matter in the end',
        ],
        answer: 0,
        type: 'structure',
        tier: 3,
      },
    ],
  },
  {
    kind: 'Classic poem',
    title: 'La Belle Dame sans Merci',
    text: paragraphs(
      'O what can ail thee, knight-at-arms\nAlone and palely loitering?\nThe sedge is withered from the lake,\nAnd no birds sing!',
      "O what can ail thee, knight-at-arms\nSo haggard and so woe-begone?\nThe squirrel's granary is full,\nAnd the harvest's done.",
      'I see a lily on thy brow,\nWith anguish moist and fever dew;\nAnd on thy cheek a fading rose\nFast withereth too--',
      "I met a lady in the meads\nFull beautiful, a faery's child;\nHer hair was long, her foot was light,\nAnd her eyes were wild--",
      'I made a garland for her head,\nAnd bracelets too, and fragrant zone;\nShe looked at me as she did love,\nAnd made sweet moan--',
      "I set her on my pacing steed,\nAnd nothing else saw all day long;\nFor sideways would she lean, and sing\nA faery's song--",
      'She found me roots of relish sweet,\nAnd honey wild, and manna dew;\nAnd sure in language strange she said,\nI love thee true--',
      'She took me to her elfin grot,\nAnd there she gazed and sighed full sore,\nAnd there I shut her wild, wild eyes\nWith kisses four.',
      'And there she lulled me asleep,\nAnd there I dreamed, ah woe betide,\nThe latest dream I ever dreamed\nOn the cold hill side.',
      "I saw pale kings, and princes too,\nPale warriors, death-pale were they all;\nWho cried--'La Belle Dame sans Merci\nHath thee in thrall.'",
      "I saw their starv'd lips in the gloam\nWith horrid warning gaped wide,\nAnd I awoke, and found me here\nOn the cold hill side.",
      'And this is why I sojourn here\nAlone and palely loitering,\nThough the sedge is withered from the lake,\nAnd no birds sing.',
    ),
    source: {
      author: 'John Keats',
      work: 'La Belle Dame sans Merci',
      where: 'the whole poem',
      held: 'la-belle-dame-sans-merci',
      section: 'La Belle Dame sans Merci',
    },
    questions: [
      {
        prompt: 'What has happened to the sedge by the lake?',
        options: [
          'It has been harvested',
          'It has turned gold',
          'It has withered',
          'It has flowered',
        ],
        answer: 2,
        type: 'retrieval',
        tier: 1,
      },
      {
        prompt: "What does 'Alone and palely loitering' suggest about the knight?",
        options: [
          'He is hiding from his enemies by the lake',
          'He is waiting happily for the lady to return',
          'He is resting after winning a great battle',
          'He is pale and lonely, lingering aimlessly',
        ],
        answer: 3,
        type: 'language',
        tier: 2,
      },
      {
        prompt: 'Who speaks the first three stanzas, and who speaks the rest?',
        options: [
          'A questioner, then the knight',
          'The knight first, then the lady',
          'The lady first, then the knight',
          'The pale kings first, then the knight',
        ],
        answer: 0,
        type: 'viewpoint',
        tier: 2,
      },
      {
        prompt: 'The last stanza repeats words from the first. What is the effect?',
        options: [
          'It shows that the knight has escaped at last',
          'It shows the knight is still trapped there',
          'It shows that the questioner has forgotten',
          'It shows that the season is turning to springtime',
        ],
        answer: 1,
        type: 'structure',
        tier: 3,
      },
      {
        prompt: 'Which line best suggests that the lady is not quite human?',
        options: [
          "'I made a garland for her head'",
          "'I set her on my pacing steed'",
          "'Full beautiful, a faery's child'",
          "'Her hair was long, her foot was light'",
        ],
        answer: 2,
        type: 'evidence',
        tier: 3,
      },
    ],
  },
]

/** One question with the passage it is asked about: what the bank lists. */
export interface PassageQuestion {
  passage: Passage
  question: Question
}

export const BANK: GameBank<PassageQuestion> = {
  slug: 'reading-detective',
  // Every question in one list, passage by passage, each with its passage.
  items: PASSAGES.flatMap((passage) =>
    passage.questions.map((question) => ({ passage, question })),
  ),
  // A prompt such as "How is the fact box organised?" names its question only
  // beside its passage, so the key has both.
  key: ({ passage, question }) => `${passage.title}: ${question.prompt}`,
  answer: ({ question }) => question.options[question.answer],
  options: ({ question }) => question.options,
  tag: ({ question }) => question.type,
  tier: ({ question }) => question.tier,
  // No `facts`: the page deals a passage whole, so its five questions always
  // meet, and none of them, nor any question in another passage, states
  // another's answer in its prompt or explanation (checked with
  // src/lib/games/give-aways.ts on 24 October 2026). Two extracts from one
  // work ask about different things.
  deepened: '2026-10-24',
}
