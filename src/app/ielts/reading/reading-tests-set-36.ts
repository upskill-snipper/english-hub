// ─── IELTS Academic Reading - practice item bank (Set 36) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of the
// alphabet (from pictograms to the Phoenician and Greek scripts) / plate
// tectonics and the moving continents / the science of fermentation in dairy
// foods.
//
// This test is MATCHING-RICH. It contains three matching questions across two
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features - statements to scientists
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_36: ReadingTest[] = [
  {
    id: 'rd-academic-036',
    title: 'Academic Reading - Practice Test 36',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-036-p1',
        title: 'The Long Road to the Alphabet',
        body: `Writing is so woven into modern life that it is easy to forget how strange an invention it is. For most of human history people managed without it, passing on stories, laws and recipes entirely by memory and speech. The earliest true writing systems, which appeared in Mesopotamia and Egypt rather more than five thousand years ago, were not alphabets at all. They began as pictures: a small drawing of an ox stood for an ox, a wavy line for water, a circle with rays for the sun. Such picture signs, or pictograms, are easy to understand but clumsy to use, for a separate sign is needed for every object, and many ideas cannot be drawn at all.

The first great step beyond simple pictures was to let a sign stand not only for the thing it showed but for the sound of its name. A drawing of a bee might come to represent the sound 'bee' wherever it occurred, even inside a word that had nothing to do with insects. Once signs could carry sounds, scribes could write abstract words and grammatical endings that no picture could capture. The cost of this flexibility, however, was complexity. The cuneiform script of Mesopotamia, pressed into wet clay with a reed, and the hieroglyphs of Egypt both swelled to many hundreds of signs, mixing pictures, sound signs and silent markers that showed which category a word belonged to. Mastering such a system took years, and literacy remained the jealously guarded preserve of a small class of professional scribes.

The breakthrough that eventually simplified writing came not from the great empires but from the trading peoples of the eastern Mediterranean coast. Somewhere among the Semitic-speaking workers and merchants of the region, probably before 1500 BCE, someone hit upon a radically economical idea. Instead of a sign for each word or syllable, why not a sign for each separate consonant sound? A language has only a few dozen such sounds, so a few dozen signs would suffice for everything. Each letter was named after a common word beginning with that sound, and the shape of the letter was a simplified picture of that word, so that the sign for the sound 'b' derived from a word for 'house' and the sign for 'm' from a word for 'water'. This early Semitic script wrote only the consonants and left the reader to supply the vowels from knowledge of the language.

It was the Phoenicians, the great seafaring traders of the coast of what is now Lebanon, who carried this consonant alphabet around the Mediterranean. Their ships called at ports from Cyprus to Spain, and wherever their merchants settled the convenient script travelled with them as a tool of commerce and record. Because the Phoenician alphabet was so much easier to learn than the older systems, it spread widely and was borrowed and adapted by many neighbouring peoples. The very order of the letters, and the names of several of them, can still be traced in alphabets used today, a quiet inheritance from a maritime trading network of nearly three thousand years ago.

The Greeks, who adopted the Phoenician letters for their own language, made the change that turned a consonant script into a full alphabet. Greek, unlike the Semitic languages, could not be read clearly when its vowels were left out, so the Greeks took several Phoenician letters that stood for consonant sounds their own language did not use and reassigned them to stand for vowels instead. For the first time a written system represented both the consonants and the vowels of speech with separate signs of equal status. The result could record any word in the language unambiguously, and could in principle be read aloud correctly by someone who had never heard it spoken. It is this Greek innovation that lies behind the alphabets of Europe.

From the Greek alphabet the chain of borrowing continued. The Romans took a version of it, by way of neighbours in Italy, and shaped the letters into the forms that fill this page; the same Roman alphabet later spread with European languages across much of the globe. Other branches led to the scripts of Russia and the Slavic world. What is striking, looking back, is how few times the alphabetic idea seems to have been invented. The world's many alphabets are not independent discoveries but cousins, almost all descended from that single economical insight on the eastern Mediterranean shore: that the boundless variety of human speech can be captured with a handful of humble signs.`,
        questions: [
          // ── Matching Headings (6 items, 9 options -> 3 distractors) = 6 marks ──
          {
            id: 'rd-036-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-ix) for each paragraph.',
            options: [
              { key: 'i', label: 'Adding the vowels: the Greek contribution' },
              { key: 'ii', label: 'Pictures as the first form of writing' },
              { key: 'iii', label: 'The invention of paper and ink' },
              { key: 'iv', label: 'One sign for each consonant sound' },
              { key: 'v', label: 'How printing made books cheap' },
              { key: 'vi', label: 'Traders who spread the new script by sea' },
              { key: 'vii', label: 'When a sign began to carry a sound' },
              { key: 'viii', label: 'A family of related alphabets, not separate inventions' },
              { key: 'ix', label: 'The decline of writing in the modern age' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'vii' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'iv' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vi' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'i' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'viii' },
            ],
            explanation:
              "A describes the earliest writing as pictograms, small drawings standing for objects (ii). B explains the step of letting a sign stand for the sound of its name (vii). C sets out the economical idea of one sign per consonant sound (iv). D covers the Phoenician seafarers who carried the script around the Mediterranean (vi). E describes the Greeks reassigning letters to represent vowels (i). F presents the world's alphabets as related cousins rather than separate inventions (viii). Headings iii, v and ix (paper and ink, printing, and the decline of writing) are distractors never discussed.",
          },
          {
            id: 'rd-036-p1-q2',
            type: 'tfng',
            prompt: 'Every human society has used some form of writing.',
            answer: 'false',
            explanation:
              'Paragraph A states that "For most of human history people managed without it, passing on stories, laws and recipes entirely by memory and speech." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-036-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Picture signs, in which a small drawing stands for an object, are known as _______.',
            acceptableAnswers: ['pictograms'],
            explanation:
              'Paragraph A says: "Such picture signs, or pictograms, are easy to understand but clumsy to use." The required word is "pictograms".',
          },
          {
            id: 'rd-036-p1-q4',
            type: 'mcq',
            prompt:
              'According to paragraph B, what was the main drawback of letting signs stand for sounds?',
            options: [
              'It made it impossible to write abstract words.',
              'The systems became complex, swelling to many hundreds of signs.',
              'The signs could no longer be pressed into clay.',
              'It meant that vowels could no longer be written down.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says "The cost of this flexibility, however, was complexity," noting that cuneiform and hieroglyphs "both swelled to many hundreds of signs." Option B matches; the passage actually says sound signs let scribes write abstract words, ruling out option A.',
          },
          {
            id: 'rd-036-p1-q5',
            type: 'tfng',
            prompt:
              'In the great empires of Mesopotamia and Egypt, the ability to read and write was limited to a small group of trained scribes.',
            answer: 'true',
            explanation:
              'Paragraph B states that mastering the script "took years, and literacy remained the jealously guarded preserve of a small class of professional scribes." This supports the statement, so it is True.',
          },
          {
            id: 'rd-036-p1-q6',
            type: 'mcq',
            prompt: 'What was distinctive about the early Semitic script described in paragraph C?',
            options: [
              'It used a separate sign for every word in the language.',
              'It wrote only the consonants and left the reader to supply the vowels.',
              'It was invented by the scribes of the Egyptian court.',
              'It could only be written by pressing reeds into wet clay.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "This early Semitic script wrote only the consonants and left the reader to supply the vowels from knowledge of the language." Option B matches directly.',
          },
          {
            id: 'rd-036-p1-q7',
            type: 'tfng',
            prompt:
              'The Phoenician alphabet was harder to learn than the older writing systems it competed with.',
            answer: 'false',
            explanation:
              'Paragraph D states that "the Phoenician alphabet was so much easier to learn than the older systems," which is why it spread. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-036-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The Greeks reassigned several Phoenician letters so that, for the first time, a script represented both consonants and _______ with separate signs.',
            acceptableAnswers: ['vowels'],
            explanation:
              'Paragraph E says the Greeks reassigned letters "to stand for vowels instead," so that a written system "represented both the consonants and the vowels of speech with separate signs of equal status." The required word is "vowels".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-036-p2',
        title: 'The Restless Earth',
        body: `To the eye, the ground beneath our feet is the very symbol of stability. Yet the outer shell of the planet is broken into a number of vast rigid slabs, called tectonic plates, which drift slowly over a hotter, softer layer below. They move at about the speed at which fingernails grow, a few centimetres a year, but over millions of years that creeping motion has rearranged the face of the world, opening and closing oceans and pushing up mountain ranges. The modern understanding of how this happens, known as plate tectonics, is one of the great unifying ideas of the Earth sciences, and like many such ideas it was resisted for decades before it was accepted.

The first clue was a simple one, noticed by anyone who has looked carefully at a world map. The coastlines on either side of the Atlantic, particularly the bulge of South America and the matching hollow of Africa, look as though they were once joined and have since been pulled apart. Early in the twentieth century a German scientist, Alfred Wegener, gathered this and other evidence into a bold proposal he called continental drift: the continents, he argued, had once formed a single supercontinent and had slowly wandered to their present positions. He pointed out that identical fossils and matching rock formations were found on coastlines now separated by thousands of kilometres of ocean.

For all the appeal of his evidence, Wegener could not explain what force could possibly shift something as massive as a continent through the solid rock of the ocean floor, and without such a mechanism most geologists dismissed his idea. The answer, when it came, lay not on the continents at all but on the floor of the deep sea, which remained almost entirely unexplored until the middle of the century. Surveys then revealed a colossal chain of undersea mountains, the mid-ocean ridges, winding through every ocean basin, and running along the crest of each ridge was a deep central valley from which heat poured.

The explanation, worked out in the 1960s, became known as sea-floor spreading. Along the mid-ocean ridges, molten rock rises from below, cools and hardens to form new ocean floor, which then moves slowly away on either side as though carried on a pair of conveyor belts. The ocean is therefore not a permanent basin but a surface that is continually being created at its centre and is widest where spreading has gone on longest. Striking confirmation came from the magnetism frozen into the new rock: as it cooled, it recorded the direction of the Earth\'s magnetic field, which is known to reverse from time to time, and the sea floor on each side of a ridge was found to carry a matching pattern of magnetic stripes, a mirror image that could only mean the floor was spreading outwards symmetrically.

If new crust is constantly being made at the ridges, and the Earth is not growing larger, then old crust must be destroyed somewhere to make room. This happens at the great trenches, the deepest places in the oceans, where one plate is forced down beneath another and sinks back into the hot interior, a process called subduction. The boundaries between plates are thus of contrasting kinds. At a spreading ridge two plates move apart and new crust is born; at a subduction zone or other convergent boundary they collide and crust is consumed; and along a third kind of boundary, the great faults where plates merely slide past one another, crust is neither created nor destroyed but ground against itself.

These restless boundaries are where the planet shows its power. Most of the world\'s earthquakes occur along plate edges, where the slabs lock together under enormous strain and then jerk suddenly free, sending out the shock waves we feel as a tremor. Volcanoes, too, cluster along boundaries, especially above subduction zones where the descending plate melts and feeds molten rock to the surface. Where two continents collide head-on, neither can easily sink, and the crust crumples upward into great mountain chains. The Himalayas, the highest range on Earth, are still rising today, squeezed up by the slow collision of the landmass of India with the rest of Asia, a reminder that the apparently solid ground is, on the timescale of the planet, very much alive.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-036-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A-F. Which paragraph contains the following information? Write the correct letter, A-F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
              { key: 'F', label: 'Paragraph F' },
            ],
            items: [
              {
                id: 'p2-i-1',
                text: 'an account of how a pattern of magnetism confirmed that the sea floor was spreading',
                answer: 'D',
              },
              {
                id: 'p2-i-2',
                text: 'the reason most geologists at first rejected the idea of drifting continents',
                answer: 'C',
              },
              {
                id: 'p2-i-3',
                text: 'an explanation of how a mountain range is formed when two continents collide',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'a description of the three contrasting kinds of boundary between plates',
                answer: 'E',
              },
              {
                id: 'p2-i-5',
                text: 'a comparison of the speed of plate movement with a familiar everyday rate',
                answer: 'A',
              },
            ],
            explanation:
              'Item 1 -> D, which describes magnetic stripes forming "a mirror image" that confirmed spreading. Item 2 -> C: Wegener "could not explain what force could possibly shift" a continent, so geologists dismissed the idea. Item 3 -> F, on continents colliding and the crust crumpling into mountains like the Himalayas. Item 4 -> E, which sets out spreading, convergent and sliding boundaries. Item 5 -> A: plates move "at about the speed at which fingernails grow."',
          },
          {
            id: 'rd-036-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: The rigid outer slabs that drift over the softer layer beneath are called _______.',
            acceptableAnswers: ['tectonic plates'],
            explanation:
              'Paragraph A says the outer shell "is broken into a number of vast rigid slabs, called tectonic plates." The required two words are "tectonic plates".',
          },
          {
            id: 'rd-036-p2-q3',
            type: 'mcq',
            prompt: 'What did Alfred Wegener propose in his theory of continental drift?',
            options: [
              'That the ocean floor was spreading outward from undersea ridges',
              'That the continents had once formed a single supercontinent and later moved apart',
              "That the Earth's magnetic field reverses from time to time",
              'That earthquakes are caused by plates sliding past one another',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says Wegener argued "the continents... had once formed a single supercontinent and had slowly wandered to their present positions." Option B matches. The other options describe later discoveries, not Wegener\'s proposal.',
          },
          {
            id: 'rd-036-p2-q4',
            type: 'tfng',
            prompt:
              'The deep ocean floor had been thoroughly explored before Wegener put forward his theory.',
            answer: 'false',
            explanation:
              'Paragraph C states the deep sea floor "remained almost entirely unexplored until the middle of the century," which is after Wegener proposed his idea early in the twentieth century. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-036-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: At a mid-ocean ridge, molten rock rises and hardens to form new ocean floor, a process known as sea-floor _______.',
            acceptableAnswers: ['spreading'],
            explanation:
              'Paragraph D names the process "sea-floor spreading," in which new floor forms at the ridge and moves away on either side. The required word is "spreading".',
          },
          {
            id: 'rd-036-p2-q6',
            type: 'mcq',
            prompt:
              'According to paragraph E, why must old crust be destroyed somewhere on the Earth?',
            options: [
              'Because the oceans are slowly becoming shallower',
              'Because new crust is constantly being made while the Earth is not growing larger',
              'Because the magnetic field reverses and demands new rock',
              'Because subduction zones produce more crust than the ridges',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E reasons that "If new crust is constantly being made at the ridges, and the Earth is not growing larger, then old crust must be destroyed somewhere to make room." Option B matches this logic.',
          },
          {
            id: 'rd-036-p2-q7',
            type: 'mcq',
            prompt:
              'According to paragraph D, what did the matching pattern of magnetic stripes on either side of a ridge reveal?',
            options: [
              "That the Earth's magnetic field had never reversed",
              'That the sea floor was spreading outwards symmetrically',
              'That molten rock no longer rises at the ridges',
              'That the continents had stopped moving',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says the matching magnetic stripes formed "a mirror image that could only mean the floor was spreading outwards symmetrically." Option B matches this directly.',
          },
          {
            id: 'rd-036-p2-q8',
            type: 'tfng',
            prompt: "Most of the world's earthquakes happen at the edges of the plates.",
            answer: 'true',
            explanation:
              'Paragraph F states that "Most of the world\'s earthquakes occur along plate edges, where the slabs lock together under enormous strain and then jerk suddenly free." This supports the statement, so it is True.',
          },
          {
            id: 'rd-036-p2-q9',
            type: 'tfng',
            prompt: 'The Himalayas have stopped growing and are now slowly being worn down.',
            answer: 'false',
            explanation:
              'Paragraph F says the Himalayas "are still rising today, squeezed up by the slow collision" of India with Asia. This contradicts the statement that they have stopped growing, so it is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-036-p3',
        title: 'The Chemistry of the Dairy',
        body: `Long before anyone understood why it worked, people across the world had learned to keep milk from spoiling by deliberately allowing it to change. Fresh milk is among the most perishable of foods, yet when it is soured, thickened and salted in the right ways it can be stored for weeks, months or even years. The processes that achieve this, the making of yoghurt and cheese, are among the oldest examples of food preservation, and they all rest on the same hidden workforce: communities of microscopic organisms whose ordinary feeding transforms the milk. The study of these organisms, and of the chemical changes they bring about, is the science of fermentation.

The microbes most important to the dairy are a family of bacteria that feed on lactose, the natural sugar of milk. As they consume it they release lactic acid as a waste product, and it is this acid that does much of the work. Acid makes milk turn sour, but it also alters the milk proteins, which begin to tangle together and thicken the liquid, and it discourages the spoilage microbes and harmful germs that cannot tolerate sour conditions. In effect the helpful bacteria make the milk into a place where their rivals cannot live, and in doing so they preserve it. This is the basic trick behind almost every soured-milk food, from the thinnest drinking yoghurt to the hardest aged cheese.

Yoghurt is the simplest case. Warm milk is given a small amount of a previous batch, or of a prepared culture, which seeds it with the right bacteria, and is then kept warm for some hours. The bacteria multiply rapidly in the heat, pouring out lactic acid until the milk has set into a soft, tart gel. Because the acidity rises quickly and the product is eaten while still moist, yoghurt keeps the bacteria alive and is ready in less than a day. The same souring lies behind a happy accident of digestion: many people who cannot comfortably drink fresh milk, because they lack the means to digest its sugar, can eat yoghurt without trouble, since the bacteria have already broken down much of the lactose for them.

Cheese begins along the same path but then takes a decisive extra step: the separation of the milk into solid and liquid. After the milk has begun to sour, the cheesemaker usually adds a substance called rennet, traditionally taken from the stomach of a calf, which contains an enzyme that attacks the milk proteins and makes them clump together far more firmly than acid alone could manage. The milk parts into soft white lumps, the curds, and a watery greenish liquid, the whey. It is the curds, drained and pressed to expel the whey, that become cheese; the more whey is removed, the drier and harder the final product will be. A fresh, wet curd makes a soft cheese to be eaten within days, while a curd pressed hard and dry can be kept for years.

What happens after the curds are formed is what gives the world its bewildering variety of cheeses, and the key word is ripening. A young cheese is bland and rubbery; the flavours, aromas and textures we prize develop slowly during weeks or months of careful storage, as enzymes and a succession of microbes continue to work on the curd. Proteins are broken down into smaller fragments that taste savoury, and fats are split into compounds that carry powerful smells. Tiny differences in the process send the result in wildly different directions. Salt is rubbed on or mixed in to control which microbes thrive; particular moulds may be introduced on purpose, the blue veins of some cheeses being the visible threads of a mould deliberately encouraged to grow inside.

The conditions of ripening shape the cheese as surely as the recipe. A cheese matured in a cool, damp cave develops differently from one ripened in a warm, dry room, because temperature and humidity decide which organisms flourish and how fast the chemistry proceeds. For most of history all of this was done by feel and tradition, the knowledge handed down without any notion of the microbes at work. Only in the nineteenth century, once it was shown that fermentation is driven by living organisms rather than by some property of the milk itself, did it become possible to understand the dairy scientifically, to select particular strains of bacteria and mould, and to turn an ancient craft into a controlled and repeatable process.`,
        questions: [
          // ── Matching Features - statements to scientists/things (5 items) = 5 marks ──
          {
            id: 'rd-036-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of items below. Match each statement to the item it relates to in the passage. Write the correct letter, A, B, C or D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Lactic acid' },
              { key: 'B', label: 'Rennet' },
              { key: 'C', label: 'The whey' },
              { key: 'D', label: 'Yoghurt' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'is the watery greenish liquid that separates from the solid lumps.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'is the waste product the milk bacteria release as they feed on lactose.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'can often be eaten by people who cannot comfortably drink fresh milk.',
                answer: 'D',
              },
              {
                id: 'p3-f-4',
                text: 'contains an enzyme that makes milk proteins clump together firmly.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'discourages the spoilage microbes that cannot tolerate sour conditions.',
                answer: 'A',
              },
            ],
            explanation:
              'Item 1 -> C: the passage calls the whey "a watery greenish liquid." Item 2 -> A: bacteria "release lactic acid as a waste product." Item 3 -> D: many who cannot drink fresh milk "can eat yoghurt without trouble." Item 4 -> B: rennet "contains an enzyme that attacks the milk proteins and makes them clump together." Item 5 -> A: the acid "discourages the spoilage microbes and harmful germs that cannot tolerate sour conditions."',
          },
          {
            id: 'rd-036-p3-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The dairy bacteria feed on _______, the natural sugar of milk.',
            acceptableAnswers: ['lactose'],
            explanation:
              'Paragraph B describes "a family of bacteria that feed on lactose, the natural sugar of milk." The required word is "lactose".',
          },
          {
            id: 'rd-036-p3-q3',
            type: 'tfng',
            prompt:
              'People had learned to make yoghurt and cheese long before they understood the reasons these methods worked.',
            answer: 'true',
            explanation:
              'Paragraph A states that "Long before anyone understood why it worked, people across the world had learned to keep milk from spoiling." This supports the statement, so it is True.',
          },
          {
            id: 'rd-036-p3-q4',
            type: 'mcq',
            prompt: 'According to paragraph B, how do the helpful bacteria preserve the milk?',
            options: [
              'By raising its temperature so that germs are killed by heat',
              'By producing acid that makes the milk into a place where rival microbes cannot live',
              'By removing the natural sugar so that no other organism can feed',
              'By thickening the proteins until no liquid remains',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that the acid "discourages the spoilage microbes," so "the helpful bacteria make the milk into a place where their rivals cannot live, and in doing so they preserve it." Option B matches.',
          },
          {
            id: 'rd-036-p3-q5',
            type: 'mcq',
            prompt:
              'Why can many people who cannot comfortably drink fresh milk still eat yoghurt?',
            options: [
              'Because yoghurt contains no milk proteins at all',
              'Because the bacteria have already broken down much of the lactose',
              'Because yoghurt is always served cold',
              'Because the rennet in yoghurt removes the sugar',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says such people can eat yoghurt "since the bacteria have already broken down much of the lactose for them." Option B matches. Rennet is associated with cheese, not yoghurt, so option D is wrong.',
          },
          {
            id: 'rd-036-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When cheese is made, the milk parts into soft white lumps known as the _______, and a watery liquid.',
            acceptableAnswers: ['curds'],
            explanation:
              'Paragraph D says the milk "parts into soft white lumps, the curds, and a watery greenish liquid, the whey." The required word is "curds".',
          },
          {
            id: 'rd-036-p3-q7',
            type: 'tfng',
            prompt:
              'A cheese made from curds that have been pressed hard and dry can be stored for a long time.',
            answer: 'true',
            explanation:
              'Paragraph D states that "a curd pressed hard and dry can be kept for years," whereas a wet curd makes a soft cheese eaten within days. This supports the statement, so it is True.',
          },
          {
            id: 'rd-036-p3-q8',
            type: 'tfng',
            prompt: 'The blue veins seen in some cheeses are caused by a harmful contamination.',
            answer: 'false',
            explanation:
              'Paragraph E says the blue veins are "the visible threads of a mould deliberately encouraged to grow inside," not an accidental or harmful contamination. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-036-p3-q9',
            type: 'tfng',
            prompt:
              'Cheese ripened in a cool, damp cave will taste exactly the same as cheese ripened in a warm, dry room.',
            answer: 'false',
            explanation:
              'Paragraph F states that "A cheese matured in a cool, damp cave develops differently from one ripened in a warm, dry room," because conditions decide which organisms flourish. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-036-p3-q10',
            type: 'tfng',
            prompt:
              'The scientific understanding that living organisms drive fermentation made it possible to select particular strains of bacteria and mould.',
            answer: 'true',
            explanation:
              'Paragraph F says that once it was shown fermentation "is driven by living organisms," it became possible "to select particular strains of bacteria and mould." This supports the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
