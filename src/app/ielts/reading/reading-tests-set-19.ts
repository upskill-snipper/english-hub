// ─── IELTS Academic Reading - practice item bank (Set 19) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: hibernation and how
// animals survive winter / the history of the dictionary / mangrove forests and
// coastal protection.
//
// This test showcases the Matching question type across all three passages:
// Matching Headings (Passage 1), Matching Information / which-paragraph
// (Passage 2) and Matching Features - statements to people (Passage 3), set
// alongside the usual mix of True/False/Not Given, multiple choice and
// sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_19: ReadingTest[] = [
  {
    id: 'rd-academic-019',
    title: 'Academic Reading - Practice Test 19',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-019-p1',
        title: 'Surviving the Winter',
        body: `When the days shorten and the cold sets in, food grows scarce for many animals, and the simple business of staying alive becomes a struggle. A small mammal loses heat to its surroundings far faster than a large one, because its body is small relative to its surface, and in a hard frost it may burn through its reserves in a single night. Faced with months of scarcity, animals have evolved three broad answers. Some migrate, travelling to warmer regions where food is still plentiful. Some remain active, growing thicker coats and hunting through the snow. And some take a stranger course: they shut their bodies down almost completely and wait the season out. This last strategy is hibernation, and it is far more remarkable than the everyday word "sleep" suggests.

A hibernating animal is not merely asleep. During true hibernation an animal's body temperature falls dramatically, in some cases to within a degree or two of freezing, and its heart, which might beat hundreds of times a minute when the creature is active, may slow to only a handful of beats in the same period. Breathing becomes so shallow and infrequent that an observer could be forgiven for thinking the animal dead. By cooling itself in this way the animal slows every chemical reaction in its body, and so reduces the rate at which it consumes its stored fuel. The saving is enormous: an animal that tried to remain warm and alert through a long winter would need far more food than it could ever store, whereas a hibernator can survive for months on the fat it has laid down in autumn.

That autumn preparation is itself a crucial part of the strategy. In the weeks before hibernation many animals eat voraciously, sometimes doubling their body weight, and lay down a special tissue called brown fat. Ordinary white fat is simply a store of energy, but brown fat is different: when the animal needs to raise its temperature again, this tissue can burn its contents directly to produce heat, acting in effect as a built-in furnace. The timing of all this is governed less by the weather of any particular year than by the shortening of the days, a signal far more reliable than temperature, which can rise and fall unpredictably from week to week.

It would be a mistake, however, to imagine that a hibernating animal simply falls asleep in October and wakes in spring. Most hibernators rouse themselves periodically throughout the winter, raising their body temperature back to normal for a few hours or days before sinking down again. These arousals are puzzling, because warming up is extraordinarily expensive: a single return to normal temperature can consume as much energy as many days spent in the cold, dormant state, and together the arousals may account for most of the fuel a hibernator burns all winter. Exactly why animals pay this heavy price is still debated. Some researchers suspect the warm periods allow the body to carry out essential maintenance - restoring the immune system, for instance, or allowing the brain to sleep in the ordinary sense, which the deep cold seems to prevent.

Not every animal that disappears in winter is a true hibernator. The bear, the creature most people picture when the word is mentioned, is in fact a borderline case. A denning bear lowers its heart rate and does not eat, drink or pass waste for months, which is impressive enough, yet its body temperature drops only slightly, by a few degrees rather than dozens. This shallow dormancy means a bear can be roused quickly if disturbed - a useful ability for an animal large enough to defend itself, and essential for a female that gives birth and nurses her cubs in the depths of the denning season. Smaller hibernators such as ground squirrels, which go genuinely cold, cannot wake so readily, and a disturbed one may take an hour or more to become fully active.

Hibernation, then, is not a single phenomenon but a spectrum of strategies for enduring scarcity, ranging from the bear's light slumber to the near-suspended animation of the smallest mammals. Scientists studying these animals are driven by more than curiosity about the natural world. A ground squirrel can lie at close to freezing for weeks and then warm up with no lasting damage to its heart or brain, feats that would kill a human being. If researchers could understand how a hibernator protects its tissues through such extremes, the knowledge might one day help patients survive heart attacks, strokes or the long, cold journey of space travel.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-019-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A built-in furnace prepared in advance' },
              { key: 'ii', label: 'Three ways to face a season of scarcity' },
              { key: 'iii', label: 'Why warm-blooded animals cannot live in the cold' },
              { key: 'iv', label: 'The costly puzzle of waking in midwinter' },
              { key: 'v', label: 'A shutdown far deeper than sleep' },
              { key: 'vi', label: 'The bear as a borderline case' },
              { key: 'vii', label: 'A migration route across continents' },
              { key: 'viii', label: 'From light slumber to the edge of medicine' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'v' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'viii' },
            ],
            explanation:
              'A sets out the "three broad answers" to winter scarcity - migrate, stay active, or shut down (ii). B explains that hibernation "is not merely asleep" but a dramatic shutdown of temperature, heart rate and breathing (v). C describes the autumn build-up of brown fat that acts "as a built-in furnace" (i). D discusses the puzzling, energy-expensive periodic arousals during winter (iv). E presents the bear as "a borderline case" of shallow dormancy (vi). F moves from the spectrum of strategies to possible medical applications (viii). Heading iii ("Why warm-blooded animals cannot live in the cold") is a distractor - the passage never claims they cannot; heading vii ("A migration route across continents") is a distractor, as migration is only mentioned in passing in A and no route is described.',
          },
          {
            id: 'rd-019-p1-q2',
            type: 'tfng',
            prompt: 'Migrating animals travel greater distances than animals that hibernate.',
            answer: 'not-given',
            explanation:
              'Paragraph A mentions that some animals migrate "to warmer regions" and that hibernators "shut their bodies down," but the passage never compares the distances travelled by the two groups. There is no information to support or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-019-p1-q3',
            type: 'tfng',
            prompt:
              'During true hibernation an animal stops breathing completely for the whole winter.',
            answer: 'false',
            explanation:
              'Paragraph B says that during hibernation "Breathing becomes so shallow and infrequent that an observer could be forgiven for thinking the animal dead." Breathing slows but does not stop, so the statement is False.',
          },
          {
            id: 'rd-019-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Before hibernating, many animals lay down a special tissue called _______, which can burn its contents directly to produce heat.',
            acceptableAnswers: ['brown fat'],
            explanation:
              'Paragraph C explains that animals "lay down a special tissue called brown fat" which, unlike white fat, "can burn its contents directly to produce heat." The required answer is "brown fat".',
          },
          {
            id: 'rd-019-p1-q5',
            type: 'mcq',
            prompt: 'According to the passage, what mainly determines the timing of hibernation?',
            options: [
              'The temperature in any particular week',
              'The shortening of the days',
              'The amount of fat the animal has stored',
              'The depth of the snow on the ground',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states the timing "is governed less by the weather of any particular year than by the shortening of the days, a signal far more reliable than temperature." Option B is correct; temperature is explicitly described as less reliable, ruling out option A.',
          },
          {
            id: 'rd-019-p1-q6',
            type: 'mcq',
            prompt: 'Why are the periodic arousals during winter described as "puzzling"?',
            options: [
              'They happen only in the very largest hibernators.',
              'They allow the animal to feed without leaving its den.',
              'They use up a great deal of energy that the animal can barely spare.',
              'They cause lasting damage to the animal’s heart and brain.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says arousals are puzzling "because warming up is extraordinarily expensive" and "may account for most of the fuel a hibernator burns all winter." Option C captures this. The same paragraph notes the reasons are "still debated," and feeding is not mentioned, ruling out option B.',
          },
          {
            id: 'rd-019-p1-q7',
            type: 'tfng',
            prompt:
              'A denning bear’s body temperature falls only slightly compared with that of a ground squirrel.',
            answer: 'true',
            explanation:
              'Paragraph E states a denning bear\'s "body temperature drops only slightly, by a few degrees rather than dozens," while ground squirrels "go genuinely cold." The statement matches, so it is True.',
          },
          {
            id: 'rd-019-p1-q8',
            type: 'tfng',
            prompt: 'Female bears are unable to give birth while they are in their winter dens.',
            answer: 'false',
            explanation:
              'Paragraph E notes the bear\'s ability to rouse quickly is "essential for a female that gives birth and nurses her cubs in the depths of the denning season." Births do occur in the den, so the statement is False.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-019-p2',
        title: 'The Story of the Dictionary',
        body: `We tend to treat the dictionary as a kind of court of final appeal, the place that settles an argument about what a word "really" means or how it should be spelled. Yet the dictionary as we know it is a surprisingly recent invention, and for most of the history of writing people managed without one. The earliest ancestors of the modern dictionary were not lists of a language explained in its own terms at all, but bilingual aids: clay tablets from ancient Mesopotamia, some four thousand years old, that paired words in one language with their equivalents in another so that scribes could read documents written in an older or foreign tongue. The purpose was practical translation, not the description of a single language.

For a long time this remained the pattern. In medieval Europe the typical word-book was a list of difficult Latin terms, each followed by an easier Latin word or a translation into the local language, compiled to help students struggling with texts in a language that was no longer anyone's mother tongue. The idea of explaining ordinary English words in English, for the benefit of English speakers, would have seemed almost pointless: why define words that every reader already knew? The first book that could fairly be called an English dictionary did not appear until 1604, and it was a modest affair, listing only a few thousand "hard words" - the difficult, often foreign-derived terms that an ordinary reader might stumble over - and ignoring the common vocabulary entirely.

Over the following century these "hard word" books grew larger and more ambitious, until the goal shifted from explaining only the difficult words to recording the whole of the language. The most celebrated product of this new ambition in English was the dictionary published by Samuel Johnson in 1755. Johnson worked for years with a small team of assistants, and his great innovation was to illustrate the meaning of words with quotations drawn from respected writers, so that a reader could see not merely what a word was said to mean but how it had actually been used. His definitions could be precise and they could be playful - his much-quoted entry for a "lexicographer", a writer of dictionaries, described such a person as a "harmless drudge" - and his work shaped English dictionaries for the better part of a century.

Johnson's dictionary, for all its scale, was largely the achievement of one determined man. The project that eventually overtook it was conceived on an entirely different model. The vast work that became the Oxford English Dictionary, begun in the second half of the nineteenth century, set out to record every word in the language and, for each, to trace its history through dated quotations showing when and how its meaning had changed over the centuries. No single scholar could read enough to achieve this, and so the editors issued a public appeal, inviting volunteers across the English-speaking world to read books and send in slips of paper recording interesting uses of words. Hundreds of thousands of such slips poured in, and the dictionary was, in a real sense, a great collaborative enterprise, assembled from the reading of a scattered army of contributors. The work took decades; the first complete edition was not finished until 1928, long after the project had begun.

Behind these practical labours lay a question that still divides those who make dictionaries: should a dictionary tell people how they ought to use words, or simply describe how words are actually used? The first view, known as prescriptivism, treats the dictionary as a guardian of correct usage, ruling some words and meanings acceptable and others mistaken. The second, descriptivism, holds that the lexicographer's task is to observe and record the language as it really is, including usages that some might consider sloppy or wrong, and to leave judgements of taste to the reader. Most modern dictionaries lean firmly towards description, recording new words and shifting meanings as they spread, and noting that a usage is disliked rather than forbidding it outright. This shift has not been universally welcomed, and the appearance of an informal new word in a respected dictionary still reliably provokes complaints that standards are being abandoned.

The digital age has transformed the dictionary once again. Freed from the cost and bulk of paper, online dictionaries can be far larger than any printed volume, updated continually rather than every few decades, and enriched with recorded pronunciations and links between related words. They can also watch the language in something close to real time, tracking the spread of a new term across millions of pages of text and adding it within months of its first appearance. The court of final appeal, it turns out, has always been quietly changing its judgements; it has simply learned to do so more quickly.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-019-p2-q1',
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
                text: 'a description of how the public was asked to help build a dictionary',
                answer: 'D',
              },
              {
                id: 'p2-i-2',
                text: 'an account of the oldest known word-lists, used for translation between languages',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'an explanation of two opposing views about what a dictionary should do',
                answer: 'E',
              },
              {
                id: 'p2-i-4',
                text: 'a reference to the first book that could be called an English dictionary',
                answer: 'B',
              },
              {
                id: 'p2-i-5',
                text: 'a mention of the advantages that freedom from paper has brought',
                answer: 'F',
              },
            ],
            explanation:
              'Item 1 → D, which describes the public appeal inviting "volunteers across the English-speaking world to read books and send in slips of paper." Item 2 → A, which describes the four-thousand-year-old Mesopotamian clay tablets used "for practical translation." Item 3 → E, which sets out prescriptivism and descriptivism, the two opposing views. Item 4 → B: "The first book that could fairly be called an English dictionary did not appear until 1604." Item 5 → F, which explains that online dictionaries, "Freed from the cost and bulk of paper," can be larger and continually updated.',
          },
          {
            id: 'rd-019-p2-q2',
            type: 'tfng',
            prompt:
              'The earliest ancestors of the dictionary explained the words of a language in that same language.',
            answer: 'false',
            explanation:
              'Paragraph A says the earliest ancestors "were not lists of a language explained in its own terms at all, but bilingual aids" pairing words with equivalents in another language. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-019-p2-q3',
            type: 'tfng',
            prompt:
              'The English dictionary of 1604 defined the everyday words that ordinary readers already knew.',
            answer: 'false',
            explanation:
              'Paragraph B states the 1604 book listed only a few thousand "hard words" while "ignoring the common vocabulary entirely." It did not define everyday words, so the statement is False.',
          },
          {
            id: 'rd-019-p2-q4',
            type: 'mcq',
            prompt: 'What is described as Samuel Johnson’s great innovation?',
            options: [
              'Working entirely alone without any assistants',
              'Recording every word in the English language',
              'Illustrating meanings with quotations from respected writers',
              'Defining only the most difficult foreign-derived words',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says Johnson\'s "great innovation was to illustrate the meaning of words with quotations drawn from respected writers." Option C is correct; he worked "with a small team of assistants" (not alone), and recording every word was the later aim of the Oxford project (D).',
          },
          {
            id: 'rd-019-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Johnson’s entry for a "lexicographer" famously described such a person as a _______.',
            acceptableAnswers: ['harmless drudge'],
            explanation:
              'Paragraph C quotes Johnson\'s entry describing a lexicographer as a "harmless drudge." The required answer is "harmless drudge".',
          },
          {
            id: 'rd-019-p2-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE number from the passage: The first complete edition of the Oxford English Dictionary was not finished until _______.',
            acceptableAnswers: ['1928'],
            explanation:
              'Paragraph D states that "the first complete edition was not finished until 1928, long after the project had begun." The required answer is "1928".',
          },
          {
            id: 'rd-019-p2-q7',
            type: 'mcq',
            prompt:
              'According to the passage, what is the difference between prescriptivism and descriptivism?',
            options: [
              'Prescriptivism records new words, while descriptivism rejects them.',
              'Prescriptivism rules on correct usage, while descriptivism observes how words are actually used.',
              'Prescriptivism applies only to printed dictionaries, while descriptivism applies only to digital ones.',
              'Prescriptivism was invented by Johnson, while descriptivism was invented by the Oxford editors.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E explains prescriptivism "treats the dictionary as a guardian of correct usage," while descriptivism holds the task is "to observe and record the language as it really is." Option B captures the contrast; the other options invent distinctions the passage does not make.',
          },
          {
            id: 'rd-019-p2-q8',
            type: 'tfng',
            prompt: 'Most modern dictionaries forbid usages that some people consider wrong.',
            answer: 'false',
            explanation:
              'Paragraph E says most modern dictionaries "lean firmly towards description," "noting that a usage is disliked rather than forbidding it outright." Because they do not forbid such usages, the statement is False.',
          },
          {
            id: 'rd-019-p2-q9',
            type: 'tfng',
            prompt: 'Online dictionaries have completely replaced printed dictionaries.',
            answer: 'not-given',
            explanation:
              'Paragraph F describes the advantages of online dictionaries - being larger, continually updated and able to track new words "within months" - but it never claims that they have replaced printed dictionaries altogether. The passage gives no information either way, so the statement is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-019-p3',
        title: 'The Forests Between Land and Sea',
        body: `Where the land meets the sea in the tropics, a peculiar kind of forest often stands in the way. Mangroves are trees and shrubs that grow in the salty, waterlogged mud of sheltered coasts, estuaries and lagoons, their roots submerged twice a day by the rising tide. To thrive in such a place is no small feat. The soil is so saturated that it holds almost no oxygen for roots to breathe, and the water is salty enough to kill most plants. Mangroves have evolved an array of solutions: some species send up special roots that rise out of the mud like snorkels to take in air, while others filter salt out at the root or push it into old leaves that are then shed. For decades these strange coastal woodlands were dismissed as worthless swamps, fit only to be cleared, but that view has been overturned by a growing understanding of what they do.

The most dramatic of their services is protection against the sea. A belt of mangroves several hundred metres wide can blunt the force of waves driven ashore by a storm, their tangled roots and dense stems absorbing energy that would otherwise batter the coast behind. After a great ocean wave struck the shores of the Indian Ocean in 2004, researchers comparing stretches of coastline found that villages sheltered behind healthy mangrove forests had, in general, suffered less damage and fewer deaths than similar settlements on cleared and exposed shores. The forests cannot stop a truly enormous wave, and the evidence is not uniform, but the broad pattern persuaded many governments that the trees were a form of natural sea defence worth keeping.

Mangroves do more than break waves. The maze of roots beneath the water is a nursery for fish, offering young fish a sheltered place to grow up safe from larger predators in the open sea, and many of the fish that coastal communities later catch in deeper water begin life among the mangroves. The forests also trap sediment washing down from the land, building up the soil and, in places, allowing the coast to grow seaward rather than retreat. And by holding the muddy shoreline together with their roots, they slow the erosion that would otherwise eat away at the land behind them. A single belt of trees, in other words, defends the coast, feeds the fishery and stabilises the very ground it stands on.

In recent years a further service has attracted particular attention. Mangroves are extraordinarily effective at capturing carbon from the atmosphere and locking it away - not chiefly in their wood, as a rainforest does, but in the deep, waterlogged mud in which they grow. Because that mud holds so little oxygen, the dead leaves and roots that fall into it rot only very slowly, and the carbon they contain can stay buried for centuries or longer. Acre for acre, a mangrove forest can store several times as much carbon as a typical forest on dry land, most of it hidden underground. This "blue carbon", as the carbon held by coastal ecosystems has come to be called, has made the protection of mangroves attractive to those seeking to slow the warming of the climate.

There is, however, a darker side to this hidden store. When a mangrove forest is cleared - most often, in recent decades, to make ponds for farming prawns, or to create land for building - the carbon that has accumulated in its soil over centuries does not simply stay where it is. Exposed to the air, the drained mud begins to break down, and the carbon locked within it escapes into the atmosphere. Clearing a mangrove forest therefore does double harm: it removes a system that was absorbing carbon, and it releases a vast quantity that had been safely stored. For this reason the destruction of mangroves contributes far more to the warming of the planet than their modest area might suggest.

The loss has been severe. Over the past half-century a large share of the world's mangroves has been cut down, and although the rate of loss has slowed as their value has become better known, the forests remain under pressure from coastal development and shrimp farming. The response has been a wave of restoration projects, in which mangroves are replanted on shores from which they had vanished. Such projects are not always successful: seedlings planted in the wrong place, or without regard for the tides and the flow of fresh water, frequently die. The marine biologist Aisha Ndlovu, who has studied such schemes, argues that the most effective approach is often not to plant at all, but simply to restore the natural flow of water to a degraded site and allow the mangroves to return on their own. Where conditions are right, she observes, the forest is perfectly capable of replanting itself.`,
        questions: [
          // ── Matching Features - statements to people/sources (5 items) = 5 marks ──
          {
            id: 'rd-019-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of services and effects of mangroves below. Match each statement to the function it describes in the passage. Write the correct letter, A-E. There are more options than statements, so you will not use them all.',
            options: [
              { key: 'A', label: 'Protection against storm waves' },
              { key: 'B', label: 'A nursery for young fish' },
              { key: 'C', label: 'The long-term storage of carbon' },
              { key: 'D', label: 'The trapping of sediment from the land' },
              { key: 'E', label: 'A source of timber for building' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'It can allow a coastline to grow seaward instead of retreating.',
                answer: 'D',
              },
              {
                id: 'p3-f-2',
                text: 'It was credited with reducing damage and deaths after the 2004 ocean wave.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'It relies on the lack of oxygen in the mud, which slows decay.',
                answer: 'C',
              },
              {
                id: 'p3-f-4',
                text: 'It gives young fish a safe place to grow before they move to deeper water.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'It is the function described by the term "blue carbon".',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → D: paragraph C says the forests "trap sediment washing down from the land... allowing the coast to grow seaward rather than retreat." Item 2 → A: paragraph B reports villages behind mangroves "suffered less damage and fewer deaths" after the 2004 wave. Item 3 → C: paragraph D explains the mud "holds so little oxygen" so material "rot[s] only very slowly," storing carbon. Item 4 → B: paragraph C calls the roots "a nursery for fish," a safe place before fish are caught "in deeper water." Item 5 → C: paragraph D names the carbon held by such ecosystems "blue carbon." Option E ("A source of timber for building") is a distractor - the passage notes mangroves store carbon in mud rather than wood and never presents them as a timber source.',
          },
          {
            id: 'rd-019-p3-q2',
            type: 'tfng',
            prompt: 'Mangroves grow in soil that contains very little oxygen.',
            answer: 'true',
            explanation:
              'Paragraph A states "The soil is so saturated that it holds almost no oxygen for roots to breathe." This matches the statement, so it is True.',
          },
          {
            id: 'rd-019-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Some mangrove species send up special roots that rise out of the mud like _______ to take in air.',
            acceptableAnswers: ['snorkels'],
            explanation:
              'Paragraph A says some species "send up special roots that rise out of the mud like snorkels to take in air." The required word is "snorkels".',
          },
          {
            id: 'rd-019-p3-q4',
            type: 'tfng',
            prompt:
              'The passage claims that mangrove forests can stop even the largest ocean waves.',
            answer: 'false',
            explanation:
              'Paragraph B states plainly that "The forests cannot stop a truly enormous wave." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-019-p3-q5',
            type: 'tfng',
            prompt: 'Mangrove forests shelter a greater variety of young fish than coral reefs do.',
            answer: 'not-given',
            explanation:
              'Paragraph C describes the mangrove roots as "a nursery for fish" offering young fish a safe place to grow, but the passage never mentions coral reefs or compares the variety of fish in the two habitats. There is no basis for the comparison, so the statement is Not Given.',
          },
          {
            id: 'rd-019-p3-q6',
            type: 'mcq',
            prompt:
              'According to the passage, where do mangroves store most of the carbon they capture?',
            options: [
              'In their wood, as a rainforest does',
              'In the deep, waterlogged mud in which they grow',
              'In the salt pushed into their old leaves',
              'In the bodies of the young fish they shelter',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says mangroves lock carbon away "not chiefly in their wood, as a rainforest does, but in the deep, waterlogged mud in which they grow," with "most of it hidden underground." Option B is correct; option A is precisely the contrast the passage rejects.',
          },
          {
            id: 'rd-019-p3-q7',
            type: 'mcq',
            prompt: 'Why does clearing a mangrove forest do "double harm" to the climate?',
            options: [
              'It removes a carbon-absorbing system and releases stored carbon.',
              'It destroys fish nurseries and increases coastal erosion.',
              'It both traps sediment and exposes the coast to waves.',
              'It kills the trees and pollutes the surrounding seawater.',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph E explains that clearing "removes a system that was absorbing carbon, and it releases a vast quantity that had been safely stored." Option A captures both halves of the "double harm." The other options describe real effects of mangroves but not the climate-specific double harm the passage defines.',
          },
          {
            id: 'rd-019-p3-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In recent decades, mangroves have most often been cleared to make ponds for farming _______, or to create land for building.',
            acceptableAnswers: ['prawns', 'shrimp'],
            explanation:
              'Paragraph E states mangroves are cleared "most often... to make ponds for farming prawns, or to create land for building," and paragraph F refers to the same activity as "shrimp farming." Either "prawns" or "shrimp" is accepted.',
          },
          {
            id: 'rd-019-p3-q9',
            type: 'mcq',
            prompt: 'What does Aisha Ndlovu suggest about restoring mangroves?',
            options: [
              'That planting as many seedlings as possible is the surest method',
              'That restoration projects always fail and should be abandoned',
              'That it is often best to restore the natural water flow and let mangroves return by themselves',
              'That mangroves can only be restored in places where they have never grown before',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F reports Ndlovu argues "the most effective approach is often not to plant at all, but simply to restore the natural flow of water to a degraded site and allow the mangroves to return on their own." Option C matches; she does not say projects always fail, ruling out option B.',
          },
          {
            id: 'rd-019-p3-q10',
            type: 'tfng',
            prompt:
              'The worldwide rate at which mangroves are being lost has increased over the past fifty years.',
            answer: 'false',
            explanation:
              'Paragraph F says that "the rate of loss has slowed as their value has become better known." Because the rate has slowed rather than increased, the statement is False.',
          },
        ],
      },
    ],
  },
]
