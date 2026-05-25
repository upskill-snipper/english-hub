// ─── IELTS Academic Reading - practice item bank (Set 25) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the economics of
// happiness (GDP versus wellbeing) / the invention of the printing press / how
// birds learn and use song.
//
// This test is MATCHING-RICH. It contains four matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and both Matching Features - statements to
// researchers - and Matching Sentence Endings (Passage 3), alongside the usual
// mix of True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 4 (features) + 3 (endings) + 7 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_25: ReadingTest[] = [
  {
    id: 'rd-academic-025',
    title: 'Academic Reading - Practice Test 25',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-025-p1',
        title: 'The Economics of Happiness',
        body: `For most of the twentieth century, the success of a nation was measured by a single yardstick: how much it produced. Gross domestic product, or GDP, the total value of the goods and services a country generates in a year, became the figure that governments watched most anxiously and that newspapers reported most prominently. It is an undeniably useful number, telling us how busy an economy is and how fast it is growing. Yet GDP was never designed to capture whether the people inside that economy were actually flourishing, and in recent decades a growing band of economists has argued that the two things are not at all the same.

The doubts crystallised around an observation first set out by the American economist Richard Easterlin in the 1970s. Comparing surveys of reported happiness with national income, he noticed a curious pattern. Within any single country at a given moment, richer people did tend to describe themselves as more satisfied than poorer ones, just as common sense would predict. But when whole nations were tracked over long stretches of time, decades of rising income often produced no lasting rise in average happiness at all. A country could become twice as wealthy and find its citizens no more content than before. This apparent contradiction came to be known as the Easterlin paradox, and it has been argued over ever since.

Several explanations have been offered for why extra national wealth seems to buy so little extra contentment. One rests on the idea of adaptation: people quickly grow used to improvements in their circumstances, so that a larger house or a faster car delivers a burst of pleasure that soon fades, returning them to roughly their previous mood. A second explanation points to comparison. Much of the satisfaction people draw from income is relative rather than absolute; what matters is not simply how much one has, but how much one has compared with neighbours, colleagues and friends. If everyone's income rises together, these relative positions are unchanged, and so, the argument runs, is the general level of happiness.

None of this means that money is irrelevant to wellbeing. The evidence suggests, rather, that its effect is strongest at the bottom of the scale. For someone struggling to afford food, shelter and medicine, additional income brings a genuine and lasting improvement in life. Once a comfortable standard of living has been reached, however, further increases appear to matter far less, and other ingredients of a good life come to dominate: secure employment, good health, trusting relationships and a sense that one's society is fair. These are precisely the things that a rising GDP does not guarantee and may sometimes even undermine.

Faced with such findings, a number of governments have begun to measure progress in new ways. The small Himalayan kingdom of Bhutan famously declared that it would pursue 'Gross National Happiness' rather than chase output alone, building surveys of psychological wellbeing, health and community vitality into the way it judges its own performance. Larger and richer states have followed in their own fashion. Several national statistical offices now run regular surveys asking citizens directly how satisfied they are with their lives, and a widely read international report ranks countries each year by reported life satisfaction rather than by income. The aim is not to throw away GDP but to set beside it a fuller picture of how a population is faring.

What does all this imply for the people who make policy? If the goal of government is taken to be the wellbeing of citizens rather than the mere expansion of the economy, then priorities begin to shift. Spending on mental health, on parks and public spaces, on shorter commutes and on the reduction of unemployment may yield greater returns in human terms than policies aimed purely at raising output. Critics warn that happiness is slippery and hard to measure, that a single survey question cannot capture the texture of a life, and that governments which set out to engineer contentment may overreach. Supporters reply that GDP, for all its precision, has quietly been used as a measure of welfare for generations, and that asking people how their lives are going, imperfect though it is, can hardly be a worse guide than counting only what they buy.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-025-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Where money really does make a difference' },
              { key: 'ii', label: 'A paradox in the relationship between income and happiness' },
              { key: 'iii', label: 'A single measure that was never meant to gauge wellbeing' },
              { key: 'iv', label: 'New ways governments have begun to measure progress' },
              { key: 'v', label: 'How GDP is calculated in practice' },
              { key: 'vi', label: 'Two reasons why rising wealth may not raise contentment' },
              { key: 'vii', label: 'What the findings might mean for policy' },
              { key: 'viii', label: 'Why happiness surveys should replace economics entirely' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'ii' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'vi' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'i' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'iv' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A explains that GDP "was never designed to capture whether the people inside that economy were actually flourishing" (iii). B sets out the Easterlin "paradox" between income and happiness (ii). C gives two explanations - adaptation and comparison - for why wealth buys little contentment (vi). D argues money matters most "at the bottom of the scale" (i). E describes governments measuring progress "in new ways," from Bhutan onwards (iv). F asks "What does all this imply for the people who make policy?" (vii). Heading v (how GDP is calculated) is a distractor - the passage defines GDP but never explains its calculation; heading viii (surveys should replace economics entirely) is a distractor and is explicitly denied: "The aim is not to throw away GDP."',
          },
          {
            id: 'rd-025-p1-q2',
            type: 'tfng',
            prompt:
              'GDP was originally created as a way of measuring whether citizens were flourishing.',
            answer: 'false',
            explanation:
              'Paragraph A states that "GDP was never designed to capture whether the people inside that economy were actually flourishing." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-025-p1-q3',
            type: 'mcq',
            prompt:
              'What did Richard Easterlin observe when whole nations were tracked over long periods?',
            options: [
              'Richer people within a country were always less satisfied than poorer people.',
              'Decades of rising income often produced no lasting rise in average happiness.',
              'A country that doubled its wealth became roughly twice as content.',
              'Average happiness fell steadily as national income increased.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says that when nations were tracked over time, "decades of rising income often produced no lasting rise in average happiness at all," and a country could become twice as wealthy yet "no more content than before." Option B matches; option C is the opposite of what he found.',
          },
          {
            id: 'rd-025-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: One explanation rests on the idea of _______ - people quickly grow used to improvements, so the pleasure soon fades.',
            acceptableAnswers: ['adaptation'],
            explanation:
              'Paragraph C says, "One rests on the idea of adaptation: people quickly grow used to improvements in their circumstances." The required word is "adaptation".',
          },
          {
            id: 'rd-025-p1-q5',
            type: 'mcq',
            prompt:
              'According to paragraph C, why might happiness stay the same even when everyone’s income rises together?',
            options: [
              'Because money loses its value as more of it is printed',
              'Because people’s relative positions compared with others are unchanged',
              'Because higher incomes are always taxed away by governments',
              'Because people stop comparing themselves with others once they are rich',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C argues that satisfaction from income is "relative rather than absolute," and "If everyone\'s income rises together, these relative positions are unchanged, and so... is the general level of happiness." Option B matches.',
          },
          {
            id: 'rd-025-p1-q6',
            type: 'tfng',
            prompt:
              'Additional income brings a genuine and lasting improvement to the lives of people who are struggling to afford basic necessities.',
            answer: 'true',
            explanation:
              'Paragraph D states that "For someone struggling to afford food, shelter and medicine, additional income brings a genuine and lasting improvement in life." This matches the statement, so it is True.',
          },
          {
            id: 'rd-025-p1-q7',
            type: 'gap',
            prompt:
              'Complete the phrase with TWO words from the passage: Rather than chase output alone, Bhutan declared that it would pursue _______ _______.',
            acceptableAnswers: ['Gross National', 'gross national'],
            explanation:
              'Paragraph E says Bhutan "declared that it would pursue \'Gross National Happiness\'." The two words completing the phrase "Gross National Happiness" are "Gross National".',
          },
          {
            id: 'rd-025-p1-q8',
            type: 'tfng',
            prompt:
              'The international report mentioned in the passage ranks countries each year by their total national income.',
            answer: 'false',
            explanation:
              'Paragraph E says the "widely read international report ranks countries each year by reported life satisfaction rather than by income." This contradicts the statement, so it is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-025-p2',
        title: 'The Press That Changed Everything',
        body: `Before the middle of the fifteenth century, almost every book in Europe was made by hand. In the scriptoria of monasteries and, later, in the workshops of professional copyists, scribes bent over sheets of parchment or paper and reproduced texts one letter at a time. A single substantial volume might take a skilled copyist the best part of a year to complete, and the result, however beautiful, was correspondingly expensive. Books were treasures, chained to library desks and owned only by the wealthy, the Church and the great universities. The slowness of copying did more than make books rare; it also meant that errors crept in, since each new copy was taken from an earlier one, and a mistake made by one scribe was faithfully passed on by the next.

The transformation is associated above all with one man, Johannes Gutenberg, a goldsmith working in the German city of Mainz around 1450. Gutenberg did not invent printing outright; the idea of pressing an inked image onto paper was already old, and in East Asia whole pages had long been printed from carved wooden blocks. His decisive contribution was movable type: individual letters, each cast in metal, that could be arranged into words and lines, locked into a frame to print a page, and then taken apart and rearranged to print something entirely different. Because the type was reusable, the laborious part of the work needed to be done only once.

Several inventions had to come together for the system to succeed. Gutenberg devised a metal alloy that melted at a low enough temperature to be cast easily yet hardened into letters durable enough to survive thousands of impressions. He adapted a press of the kind already used for crushing grapes and olives, so that an even pressure could be applied across a whole sheet at a stroke. And he developed a thick, oil-based ink that clung to metal type far better than the water-based inks used by scribes. The famous Bible he produced around 1455, printed in twin columns of dense, even script, was intended to look as much like a fine manuscript as possible, for the printed book at first imitated the very thing it would eventually replace.

The consequences were swift and dramatic. Within fifty years of Gutenberg's Bible, presses had been set up in towns across Europe, and millions of printed books were in circulation where there had been only thousands of manuscripts before. The price of books fell steeply, and with it the barrier that had kept reading the preserve of a small elite. As books became cheaper and more plentiful, the incentive to learn to read grew, and literacy, though still far from universal, began its long climb through the population. Texts that had once existed in a handful of fragile copies could now be multiplied in their thousands, making it far harder for any single work to be lost entirely.

Printing also changed the nature of knowledge itself. When every copy of a book was identical, a scholar in one city could refer another, in a distant town, to a precise page and line and be confident they were looking at exactly the same words. Diagrams, maps and tables could be reproduced without the distortions that crept in when they were copied by hand, which proved especially valuable to the sciences. Standardised editions made it easier to compare, criticise and build upon earlier work, and the steady accumulation of corrected, cross-referenced texts laid foundations on which later advances would rest.

Not everyone welcomed the new technology. Some scribes and scholars lamented the loss of the handwritten book as a work of art, and authorities both religious and political soon grew uneasy at how quickly the press could spread ideas they wished to suppress. Pamphlets and printed tracts could now reach huge audiences before the authorities could react, and attempts to control them through licensing and censorship met with limited success. Whatever the intentions of those who used it, the printing press had loosened an old monopoly on the written word, and the flow of cheap, identical, rapidly produced text would reshape religion, politics and learning for centuries to come.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-025-p2-q1',
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
                text: 'a description of three separate technical developments that the system required',
                answer: 'C',
              },
              {
                id: 'p2-i-2',
                text: 'an explanation of how copying by hand allowed errors to accumulate',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'the reaction of authorities who feared the spread of ideas',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'how identical copies let distant scholars refer to exactly the same text',
                answer: 'E',
              },
              {
                id: 'p2-i-5',
                text: 'a statement that Gutenberg did not invent printing from nothing',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → C, which describes the low-melting alloy, the adapted press and the oil-based ink. Item 2 → A: "a mistake made by one scribe was faithfully passed on by the next." Item 3 → F: authorities "grew uneasy at how quickly the press could spread ideas they wished to suppress." Item 4 → E: "a scholar in one city could refer another... to a precise page and line and be confident they were looking at exactly the same words." Item 5 → B: "Gutenberg did not invent printing outright."',
          },
          {
            id: 'rd-025-p2-q2',
            type: 'tfng',
            prompt:
              'A single large book could take a skilled copyist close to a year to produce by hand.',
            answer: 'true',
            explanation:
              'Paragraph A states that "A single substantial volume might take a skilled copyist the best part of a year to complete." This matches the statement, so it is True.',
          },
          {
            id: 'rd-025-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Gutenberg’s decisive contribution was _______ _______ - individual metal letters that could be arranged, used and then rearranged.',
            acceptableAnswers: ['movable type'],
            explanation:
              'Paragraph B says, "His decisive contribution was movable type: individual letters, each cast in metal." The two words required are "movable type".',
          },
          {
            id: 'rd-025-p2-q4',
            type: 'mcq',
            prompt: 'According to paragraph B, what was already old by Gutenberg’s time?',
            options: [
              'The casting of individual reusable metal letters',
              'The idea of pressing an inked image onto paper',
              'The use of an oil-based ink that clung to metal',
              'The printing of books in twin columns',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says "the idea of pressing an inked image onto paper was already old," and that in East Asia pages had long been printed from wooden blocks. Option B matches; movable metal type (option A) was Gutenberg\'s own contribution.',
          },
          {
            id: 'rd-025-p2-q5',
            type: 'mcq',
            prompt:
              'Why did Gutenberg need an alloy that melted at a low temperature but then hardened?',
            options: [
              'So that it could be coloured to resemble gold',
              'So that the letters could be cast easily yet survive thousands of impressions',
              'So that the press could apply pressure across a whole sheet',
              'So that the ink would cling to the metal type',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains the alloy "melted at a low enough temperature to be cast easily yet hardened into letters durable enough to survive thousands of impressions." Option B matches; the press and the ink are separate inventions described in the same paragraph.',
          },
          {
            id: 'rd-025-p2-q6',
            type: 'tfng',
            prompt:
              'Gutenberg intended his printed Bible to look quite different from a handwritten manuscript.',
            answer: 'false',
            explanation:
              'Paragraph C says the Bible "was intended to look as much like a fine manuscript as possible, for the printed book at first imitated the very thing it would eventually replace." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-025-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As books became cheaper and more plentiful, _______ began its long climb through the population.',
            acceptableAnswers: ['literacy'],
            explanation:
              'Paragraph D states that "literacy, though still far from universal, began its long climb through the population." The required word is "literacy".',
          },
          {
            id: 'rd-025-p2-q8',
            type: 'tfng',
            prompt:
              'Attempts to control printed pamphlets through licensing and censorship were largely successful.',
            answer: 'false',
            explanation:
              'Paragraph F says that "attempts to control them through licensing and censorship met with limited success." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-025-p2-q9',
            type: 'tfng',
            prompt:
              'Gutenberg earned a large personal fortune from his invention of the printing press.',
            answer: 'not-given',
            explanation:
              'The passage describes Gutenberg as a goldsmith and credits him with movable type and the 1455 Bible, but it says nothing about whether he made money, or any fortune, from the invention. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-025-p3',
        title: 'Learning the Tune: How Birds Communicate',
        body: `To a person out walking at dawn, the chorus of a wood may sound like a single joyous noise, but to the birds producing it the sound is dense with meaning. Birds communicate through two broad classes of vocal signal, and the distinction between them matters. Calls are usually short, simple sounds, often a single note, and many of them appear to be innate, produced correctly even by a bird raised in isolation. They serve immediate, practical purposes: a sharp alarm call warns of a hawk overhead, a contact call keeps the members of a flock together in dense foliage, a begging call from a nestling demands to be fed. Song, by contrast, is typically longer, more elaborate and more variable, and in most species it is produced chiefly by males during the breeding season.

What song signals has been the subject of decades of study, and two main functions stand out. The first is the defence of territory. A male singing vigorously from a prominent perch is, in effect, announcing that a patch of habitat is occupied and that rivals should keep away; experiments in which a resident male is removed show that its territory is taken over far more slowly if a loudspeaker continues to broadcast its song. The second function is the attraction of a mate. A complex, well-performed song can advertise the singer's quality, since producing it well demands health, energy and experience, and in many species females have been shown to prefer males with larger or more elaborate song repertoires.

Perhaps the most remarkable thing about birdsong is that, in a great many species, it is not innate at all but learned, in a way that bears a striking resemblance to the way human infants acquire speech. A young songbird is not born knowing its song; it must hear an adult of its own kind and gradually learn to copy it. Crucially, this learning is confined to a particular window early in life, a sensitive period during which the developing brain is primed to absorb the sounds it hears. A bird that hears no song of its own species during this period will never sing normally, however much it is exposed to the correct song later on.

The process of learning unfolds in recognisable stages. First comes a phase of pure listening, in which the young bird memorises the song of a tutor, usually its father or a near neighbour, storing a kind of template in its memory. Some weeks or months later it begins to practise, producing at first a rambling, unstructured warble that researchers, borrowing a term from human development, call subsong. By listening to its own efforts and comparing them with the memorised template, the bird gradually refines this raw material, dropping what does not fit and sharpening what does, until the song crystallises into the precise, stable form it will use as an adult.

Because song is learned by ear and passed from one generation to the next, it can drift and change much as human languages do, and this gives rise to one of the most intriguing phenomena in the field: the song dialect. Birds of the same species living in different valleys or districts often sing recognisably different versions of their song, and a trained listener can sometimes identify where a bird comes from simply by the way it sings. These local dialects are not coded in the genes but maintained by learning, with each generation of young males copying the established song of the place where they settle, so that a regional 'accent' can persist for many years.

Dialects raise questions that researchers are still working to answer. Some have suggested that a shared dialect helps females identify males that are well suited to local conditions, since a bird singing the local song is likely to have been raised nearby; others suspect that dialects are simply an accidental by-product of copying, with no function of their own. What is clear is that birdsong, far from being the fixed and instinctive performance it was once assumed to be, is in many species a flexible, culturally transmitted tradition, handed down and quietly altered from one generation to the next, and offering biologists a rare living model of how learned behaviour evolves.`,
        questions: [
          // ── Matching Features - statements to research findings (4 items) = 4 marks ──
          {
            id: 'rd-025-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of vocal-signal categories below. Match each statement to the category it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Calls' },
              { key: 'B', label: 'Song' },
              { key: 'C', label: 'Subsong' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'is often a single note and may be produced correctly even by a bird raised in isolation.',
                answer: 'A',
              },
              {
                id: 'p3-f-2',
                text: 'is the rambling, unstructured warble a young bird produces when it first begins to practise.',
                answer: 'C',
              },
              {
                id: 'p3-f-3',
                text: 'is used to warn other birds of a hawk overhead.',
                answer: 'A',
              },
              {
                id: 'p3-f-4',
                text: 'can advertise a male’s quality and is preferred by females when more elaborate.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → A (Calls): "Calls are usually short, simple sounds, often a single note, and many of them appear to be innate, produced correctly even by a bird raised in isolation." Item 2 → C (Subsong): the young bird produces "at first a rambling, unstructured warble that researchers... call subsong." Item 3 → A (Calls): "a sharp alarm call warns of a hawk overhead." Item 4 → B (Song): a complex song "can advertise the singer\'s quality" and females "prefer males with larger or more elaborate song repertoires."',
          },
          // ── Matching Sentence Endings (3 items) = 3 marks ──
          {
            id: 'rd-025-p3-q2',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence with the correct ending, A-E, from the box below. There are more endings than sentences, so you will not use them all. Write the correct letter, A-E.',
            options: [
              {
                key: 'A',
                label: 'if a loudspeaker continues to broadcast the resident male’s song.',
              },
              { key: 'B', label: 'because the gene for that song has been switched off.' },
              { key: 'C', label: 'during a sensitive period early in its life.' },
              { key: 'D', label: 'by comparing its own efforts with a memorised template.' },
              { key: 'E', label: 'only after it has finished breeding for the season.' },
            ],
            items: [
              {
                id: 'p3-e-1',
                text: 'Experiments show that a vacated territory is taken over far more slowly',
                answer: 'A',
              },
              {
                id: 'p3-e-2',
                text: 'A young songbird is primed to absorb the song it hears',
                answer: 'C',
              },
              {
                id: 'p3-e-3',
                text: 'The bird gradually refines its raw subsong',
                answer: 'D',
              },
            ],
            explanation:
              'Sentence 1 → A: paragraph B says a removed male\'s territory "is taken over far more slowly if a loudspeaker continues to broadcast its song." Sentence 2 → C: paragraph C says learning "is confined to a particular window early in life, a sensitive period during which the developing brain is primed to absorb the sounds it hears." Sentence 3 → D: paragraph D says the bird refines its song "By listening to its own efforts and comparing them with the memorised template." Endings B and E are distractors not supported by the passage.',
          },
          {
            id: 'rd-025-p3-q3',
            type: 'mcq',
            prompt: 'According to paragraph A, how do calls generally differ from song?',
            options: [
              'Calls are longer and more elaborate than song.',
              'Calls are usually short and simple, and many appear to be innate.',
              'Calls are produced chiefly by males during the breeding season.',
              'Calls must be learned from an adult during a sensitive period.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A describes calls as "short, simple sounds, often a single note, and many of them appear to be innate," whereas song is "longer, more elaborate and more variable." Option B matches; the breeding-season and learning features belong to song.',
          },
          {
            id: 'rd-025-p3-q4',
            type: 'tfng',
            prompt:
              'A bird that hears no song of its own species during the sensitive period can still learn to sing normally if it is exposed to the song later in life.',
            answer: 'false',
            explanation:
              'Paragraph C states that such a bird "will never sing normally, however much it is exposed to the correct song later on." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-025-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: During the listening phase the young bird memorises a tutor’s song, storing a kind of _______ in its memory.',
            acceptableAnswers: ['template'],
            explanation:
              'Paragraph D says the bird memorises its tutor\'s song, "storing a kind of template in its memory." The required word is "template".',
          },
          {
            id: 'rd-025-p3-q6',
            type: 'tfng',
            prompt:
              'Birds of the same species living in different valleys often sing recognisably different versions of their song.',
            answer: 'true',
            explanation:
              'Paragraph E states that "Birds of the same species living in different valleys or districts often sing recognisably different versions of their song." This matches the statement, so it is True.',
          },
          {
            id: 'rd-025-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Local song _______ are not coded in the genes but maintained by each generation copying the established song of a place.',
            acceptableAnswers: ['dialects'],
            explanation:
              'Paragraph E explains that "These local dialects are not coded in the genes but maintained by learning." The required word is "dialects".',
          },
          {
            id: 'rd-025-p3-q8',
            type: 'mcq',
            prompt:
              'What does the passage say researchers still disagree about regarding dialects?',
            options: [
              'Whether dialects exist in any bird species at all',
              'Whether dialects serve a function or are merely an accidental by-product of copying',
              'Whether dialects are inherited directly through the genes',
              'Whether females are able to hear differences between dialects',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F reports that some think a shared dialect helps females identify locally suited males, while "others suspect that dialects are simply an accidental by-product of copying, with no function of their own." Option B captures this open question.',
          },
          {
            id: 'rd-025-p3-q9',
            type: 'tfng',
            prompt:
              'Birds with regional song dialects are known to live longer than birds without them.',
            answer: 'not-given',
            explanation:
              'The passage discusses how dialects arise and what they might signal, but it never mentions the lifespan of birds or compares the longevity of those with and without dialects. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
    ],
  },
]
