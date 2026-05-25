// ─── IELTS Academic Reading - practice item bank (Set 30) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the discovery of
// antibiotics / fungal networks beneath forests / the history of lighthouses.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features - statements to people
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_30: ReadingTest[] = [
  {
    id: 'rd-academic-030',
    title: 'Academic Reading - Practice Test 30',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-030-p1',
        title: 'The Accidental Cure',
        body: `Few discoveries have saved as many lives as the antibiotic, and fewer still owe so much to luck. The story usually begins in the late summer of 1928, in a cluttered laboratory in London where a Scottish researcher named Alexander Fleming was studying a common bacterium. Returning from a holiday, he noticed that one of his culture dishes, left uncovered on a bench, had become contaminated with a stray mould. This in itself was unremarkable; mould spores drift through any building. What caught his eye was the clear ring around the intruder. In a circle about the mould the bacteria had simply dissolved away, as though something seeping out of it had killed them. Many a scientist would have rinsed the spoiled dish and forgotten it. Fleming did not, and that small refusal to tidy up changed the course of medicine.

The mould belonged to the genus Penicillium, and Fleming named the active substance it released penicillin. He showed that even when heavily diluted it stopped the growth of several dangerous bacteria, yet seemed harmless to animal cells, and he published his findings in 1929. Curiously, the discovery then languished for more than a decade. Fleming was no chemist, and the substance proved maddeningly difficult to extract and purify; it was unstable, present only in tiny amounts, and broke down before it could be collected in any useful quantity. He kept the mould alive and continued to mention it, but without a way to turn the liquid into a usable drug, penicillin remained a laboratory curiosity rather than a medicine.

The breakthrough came at the end of the 1930s from a team at the University of Oxford led by Howard Florey, an Australian, and Ernst Chain, a refugee chemist from Germany. Where Fleming had observed, they engineered. Through painstaking chemistry they managed to concentrate penicillin and to test it properly, first in mice deliberately infected with lethal bacteria and then, cautiously, in human patients. The early results were dramatic but also heartbreaking, because the drug was so scarce that supplies sometimes ran out before a patient was cured. The Oxford team even recycled penicillin from the urine of treated patients to stretch their meagre stocks. It was clear that the substance worked; what nobody yet knew was how to make enough of it.

The answer lay across the Atlantic. With Britain at war and its laboratories under strain, Florey carried samples of the mould to the United States in 1941 and sought help from American laboratories and companies. There, researchers hunted for more productive strains of the mould - famously isolating a far better one from a mouldy melon in a market - and developed deep-tank fermentation, growing the Penicillium in great vats rather than on the surface of trays. Output soared. By the time of the Normandy landings in 1944, penicillin was being manufactured on an industrial scale and was saving the lives of wounded soldiers who, in any earlier war, would have died of infected wounds. A discovery born of an untidy bench had become one of the most important drugs in history.

How do such drugs work? Antibiotics exploit the differences between bacterial cells and our own. Some, like penicillin itself, attack the tough outer wall that surrounds a bacterium, a structure that human cells simply do not possess; without it the bacterium swells and bursts. Others jam the machinery a microbe uses to copy its genetic material or to build the proteins it needs to live. Because they target features peculiar to bacteria, antibiotics can kill the invader while leaving the patient's own tissues largely untouched. This is also why they are useless against the common cold or influenza, which are caused by viruses, organisms built on entirely different lines that an antibiotic has no purchase on.

There is, however, a sting in the tale. Bacteria reproduce with astonishing speed, and among the billions in any infection there will occasionally be one whose chance mutations let it survive a dose of the drug. When the others die, that survivor inherits the field and passes its resistance to its descendants. Each time an antibiotic is used - and especially each time it is used carelessly, in too small a dose or for an infection it cannot cure - the bacteria that withstand it are favoured. Over the decades this relentless selection has produced strains resistant to one drug after another, and the medical community now warns that some infections are again becoming difficult to treat. The remedy, ironically, is restraint: using these precious medicines sparingly, so that the very weapon Fleming stumbled upon is not blunted by overuse.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-030-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Turning a curiosity into a tested medicine' },
              { key: 'ii', label: 'How antibiotics tell friend from foe' },
              { key: 'iii', label: 'A chance observation on an untidy bench' },
              { key: 'iv', label: 'Mass production and a wartime triumph' },
              { key: 'v', label: 'The high cost of modern drug research' },
              { key: 'vi', label: 'A promising substance that could not be made useful' },
              { key: 'vii', label: 'Resistance: how overuse blunts the weapon' },
              { key: 'viii', label: 'The search for a vaccine against bacteria' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'vi' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'ii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A recounts Fleming noticing the contaminated dish and his "refusal to tidy up" (iii). B describes penicillin proving "maddeningly difficult to extract" so it "remained a laboratory curiosity" (vi). C covers the Oxford team concentrating and testing the drug in mice and patients (i). D describes US deep-tank fermentation and industrial-scale manufacture by 1944 (iv). E explains how antibiotics target bacterial features but not viruses (ii). F covers mutation, selection and the warning against overuse (vii). Heading v (cost of research) and viii (a vaccine against bacteria) are distractors never discussed.',
          },
          {
            id: 'rd-030-p1-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Fleming named the active substance released by the mould _______.',
            acceptableAnswers: ['penicillin'],
            explanation:
              'Paragraph B states that Fleming "named the active substance it released penicillin." The required word is "penicillin".',
          },
          {
            id: 'rd-030-p1-q3',
            type: 'tfng',
            prompt:
              'Fleming was able to purify penicillin into a usable drug shortly after he discovered it.',
            answer: 'false',
            explanation:
              'Paragraph B says the substance "proved maddeningly difficult to extract and purify" and that "without a way to turn the liquid into a usable drug, penicillin remained a laboratory curiosity." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-030-p1-q4',
            type: 'mcq',
            prompt:
              'Why did the Oxford team recover penicillin from the urine of treated patients?',
            options: [
              'To test whether the drug was safe to use in humans',
              'Because the drug was so scarce that they needed to stretch their supplies',
              'To prove that penicillin passed harmlessly through the body',
              'Because the mould could not be grown anywhere in Britain',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "the drug was so scarce that supplies sometimes ran out" and that the team "recycled penicillin from the urine of treated patients to stretch their meagre stocks." Option B matches.',
          },
          {
            id: 'rd-030-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: In the United States, researchers grew the mould in great vats using a method called _______.',
            acceptableAnswers: ['deep-tank fermentation'],
            explanation:
              'Paragraph D states that American researchers "developed deep-tank fermentation, growing the Penicillium in great vats." The required phrase is "deep-tank fermentation".',
          },
          {
            id: 'rd-030-p1-q6',
            type: 'mcq',
            prompt:
              'According to paragraph E, why are antibiotics useless against the common cold?',
            options: [
              'Because colds are caused by viruses, which are built on entirely different lines',
              'Because the cold virus has an especially tough outer wall',
              'Because antibiotics break down before they reach the throat',
              'Because the body destroys antibiotics before they can act on a cold',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph E explains antibiotics "are useless against the common cold or influenza, which are caused by viruses, organisms built on entirely different lines that an antibiotic has no purchase on." Option A matches.',
          },
          {
            id: 'rd-030-p1-q7',
            type: 'tfng',
            prompt:
              'Penicillin works by attacking a tough outer wall that bacteria have but human cells lack.',
            answer: 'true',
            explanation:
              'Paragraph E says some antibiotics, "like penicillin itself, attack the tough outer wall that surrounds a bacterium, a structure that human cells simply do not possess." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p1-q8',
            type: 'tfng',
            prompt:
              'Resistant strains of bacteria have become more common because antibiotics are sometimes used carelessly.',
            answer: 'true',
            explanation:
              'Paragraph F states that "each time it is used carelessly, in too small a dose or for an infection it cannot cure - the bacteria that withstand it are favoured," producing resistant strains. This matches the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-030-p2',
        title: 'The Wood-Wide Web',
        body: `Walk into an old forest and the trees seem to stand alone, each rooted in its own patch of ground, competing quietly with its neighbours for light and water. The reality hidden beneath your feet is stranger and more sociable. The soil of almost every forest is laced with the fine threads of fungi, and these threads weave the separate trees into a single living network through which food, water and even chemical messages can travel. Scientists, half in jest, have nicknamed it the wood-wide web. It is one of the great partnerships of the natural world, and for most of human history we had no idea it was there.

At the heart of the system is an ancient alliance between trees and fungi known as mycorrhiza, a word that means simply 'fungus-root'. The fungus does not attack the tree; instead its threads, far finer than the tree's own roots, sheathe and sometimes penetrate them, spreading out through the soil in a vast filigree. Because these threads are so slender, they reach into tiny spaces in the earth that a clumsy root could never enter, and they are far better than the tree at scavenging scarce minerals such as phosphorus and nitrogen. The fungus passes a share of this harvest to the tree. In a forest, the great majority of plants live in such a partnership, and many simply cannot thrive without it.

What does the fungus get in return? It cannot make its own food, for unlike a green plant it has no way of capturing sunlight. The tree, by contrast, is a master of that art, drawing carbon dioxide from the air and using the energy of sunlight to build sugars. Some of those sugars flow down into the roots and across into the fungal threads, paying for the minerals the fungus supplies. The exchange is a genuine trade: carbon flowing one way, mineral nutrients the other, each partner offering what it can gather easily and receiving what it cannot. Neither is being charitable; each is, in effect, doing business with the other.

The most surprising discovery is that the fungal threads do not link a tree only to the soil but to other trees as well. Because a single fungus can connect to the roots of many plants at once, it forms living cables that join tree to tree, sometimes across considerable distances and even between trees of different species. Experiments using carbon labelled so that it could be traced have shown that sugars can pass from one tree, through the fungal network, into another. In some forests a few large, old trees turn out to be especially well connected, acting as hubs linked to dozens of their neighbours. Such trees can channel surplus food to shaded seedlings struggling on the forest floor, giving the next generation a start it could not manage alone.

The network appears to carry more than food. There is evidence that when a tree is attacked by insects it can release warning chemicals that travel through the fungal links, and that neighbours receiving these signals begin to prepare their own chemical defences before the pests arrive. In this way a threat to one plant becomes information shared by many. Some researchers describe the forest, a little daringly, as behaving almost like a single organism, its members linked into a system that pools resources and passes news of danger from one individual to the next.

Not everyone is persuaded that the forest is quite so harmonious, and a note of caution is worth sounding. The same threads that share food can also spread harm: certain fungi and even diseases may travel along the network, and a large tree feeding a seedling might equally be tightening its grip on the territory. Some scientists argue that words like 'sharing' and 'cooperation' risk reading human kindness into what may be simple physics and self-interest. Whatever the truth of that debate, the central insight stands. The forest is not a crowd of solitary individuals but a connected community, and the soil beneath it is alive with traffic we are only beginning to map.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-030-p2-q1',
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
                text: 'a warning that the network can carry harm as well as benefit',
                answer: 'F',
              },
              {
                id: 'p2-i-2',
                text: 'an explanation of what the fungus gives to the tree',
                answer: 'B',
              },
              {
                id: 'p2-i-3',
                text: 'the claim that messages of danger can pass between trees',
                answer: 'E',
              },
              {
                id: 'p2-i-4',
                text: 'the nickname scientists have given to the underground network',
                answer: 'A',
              },
              {
                id: 'p2-i-5',
                text: 'evidence that sugars can travel from one tree to another',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → F, which cautions that "the same threads that share food can also spread harm." Item 2 → B: the fungus is "far better than the tree at scavenging scarce minerals" and "passes a share of this harvest to the tree." Item 3 → E, on warning chemicals travelling "through the fungal links." Item 4 → A, which coins "the wood-wide web." Item 5 → D: labelled-carbon experiments showed "sugars can pass from one tree, through the fungal network, into another."',
          },
          {
            id: 'rd-030-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The ancient alliance between trees and fungi is known as _______, a word meaning "fungus-root".',
            acceptableAnswers: ['mycorrhiza'],
            explanation:
              'Paragraph B describes "an ancient alliance between trees and fungi known as mycorrhiza, a word that means simply \'fungus-root\'." The required word is "mycorrhiza".',
          },
          {
            id: 'rd-030-p2-q3',
            type: 'tfng',
            prompt: 'The fungal threads are finer than the roots of the tree itself.',
            answer: 'true',
            explanation:
              'Paragraph B says the fungus\'s threads are "far finer than the tree\'s own roots" and reach into tiny spaces "a clumsy root could never enter." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p2-q4',
            type: 'mcq',
            prompt: 'Why is the fungus unable to make its own food?',
            options: [
              'Because it lives entirely underground, away from the air',
              'Because it has no way of capturing sunlight, unlike a green plant',
              'Because it is too small to gather enough minerals',
              'Because the tree takes all the available carbon dioxide',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states that the fungus "cannot make its own food, for unlike a green plant it has no way of capturing sunlight." Option B matches.',
          },
          {
            id: 'rd-030-p2-q5',
            type: 'mcq',
            prompt:
              'According to paragraph C, how is the relationship between the tree and the fungus best described?',
            options: [
              'As an act of charity by the larger partner',
              'As a genuine trade in which each gives what it can gather easily',
              'As a contest that the tree usually wins',
              'As a temporary arrangement that ends in summer',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C calls the exchange "a genuine trade: carbon flowing one way, mineral nutrients the other," and adds "Neither is being charitable." Option B matches and option A is explicitly denied.',
          },
          {
            id: 'rd-030-p2-q6',
            type: 'tfng',
            prompt: 'The fungal network can connect trees that belong to different species.',
            answer: 'true',
            explanation:
              'Paragraph D says the fungus "forms living cables that join tree to tree... and even between trees of different species." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A few large, old trees act as _______, each linked to dozens of their neighbours.',
            acceptableAnswers: ['hubs'],
            explanation:
              'Paragraph D states that some old trees are "especially well connected, acting as hubs linked to dozens of their neighbours." The required word is "hubs".',
          },
          {
            id: 'rd-030-p2-q8',
            type: 'tfng',
            prompt:
              'All scientists now agree that trees in a forest cooperate selflessly with one another.',
            answer: 'false',
            explanation:
              'Paragraph F says "Not everyone is persuaded that the forest is quite so harmonious" and that some scientists argue words like "sharing" and "cooperation" risk "reading human kindness into what may be simple physics and self-interest." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-030-p2-q9',
            type: 'tfng',
            prompt:
              'Trees connected by the fungal network grow taller than trees that are not connected.',
            answer: 'not-given',
            explanation:
              'The passage describes nutrients, sugars and signals moving through the network, but it never compares the height or growth rate of connected versus unconnected trees. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-030-p3',
        title: 'Lights on the Rocks',
        body: `For as long as people have put to sea, they have feared the moment when a familiar coast turns into a hidden danger. A shoreline that guides a ship by day becomes, in darkness or fog, a line of unseen rocks waiting to tear open a hull. The earliest answer was the simplest imaginable: a fire on a headland. Ancient sailors steered by bonfires lit on high ground, and the famous tower of Alexandria, built in Egypt more than two thousand years ago and counted among the wonders of the ancient world, is usually regarded as the first true lighthouse, a great stone column crowned with a flame. For many centuries little changed. A keeper burned wood or coal in an open brazier at the top of a tower, and the light such fires gave was feeble, smoky and easily lost in bad weather, precisely when it was needed most.

No stretch of water tested the lighthouse builder more cruelly than the Eddystone rocks, a low reef lying in the open sea off the south-western coast of England, directly in the path of ships making for the busy port of Plymouth. The reef was barely above water at high tide and battered by the full force of the Atlantic, yet so many vessels were wrecked there that something had to be attempted. The first tower, an ornate wooden structure, was completed at the start of the eighteenth century and was promptly swept away, along with its designer, in a great storm. A second, partly of timber, burned down. The reef seemed to defeat every attempt to tame it.

The decisive change came from an engineer named John Smeaton, who rebuilt the Eddystone light in the 1750s and in doing so reinvented how such towers were made. Rather than timber, he built in stone, and he shaped the tower like the broad trunk of an oak tree, wide and heavy at the base so that the weight of the sea would press it down onto the rock rather than topple it. He cut the granite blocks so that each was dovetailed into its neighbours, locking the whole structure together as a single mass that the waves could not prise apart. He even experimented with a form of cement that would set hard under water. Smeaton's tower stood for well over a century, and its design became the model for wave-swept lighthouses everywhere.

A tower, however sturdy, was only as good as the light it carried, and here the old open flame remained a weakness. The transformation of the light itself owed most to a French physicist, Augustin Fresnel, who in the 1820s devised a new kind of lens. A solid glass lens big enough to gather the light of a lighthouse lamp would have been impossibly heavy, so Fresnel replaced it with a set of concentric glass rings, each angled to bend the light, surrounding a central lens. This arrangement caught light that would otherwise have scattered uselessly into the sky or the sea and bent it into a single concentrated beam. The Fresnel lens, far lighter than a solid one yet vastly more powerful, could throw a beam many miles out to sea, and it was soon adopted in lighthouses across the world.

The character of a lighthouse beam also became a language in its own right. Two lights burning steadily on the same coast can be confused, so engineers gave each station its own signature, a distinct rhythm of flashes and pauses produced by rotating the lens or screening the lamp. A navigator consulting a chart could identify exactly which light lay ahead from the pattern alone - so many flashes in so many seconds - and so fix the ship's position. The lighthouse thus did more than warn of danger; read correctly, it told a sailor where on the map the vessel actually was.

For generations every lighthouse needed keepers, men who lived in these lonely towers and tended the lamp through the night, trimming wicks and winding the clockwork that turned the lens. It was an isolated and sometimes perilous life. In the twentieth century, however, the keepers' days were numbered. Electric lamps replaced oil, automatic switches and timers took over the routine of lighting and rotation, and eventually remote monitoring allowed a distant office to watch over a light that no longer needed a human hand. One by one the keepers were withdrawn, and the towers fell silent of human presence. The lights still turn, but the satellite and the electronic chart have taken over much of their old work, and the lighthouse, once the very emblem of safety at sea, has quietly become more a monument than a necessity.`,
        questions: [
          // ── Matching Features - statements to people (5 items) = 5 marks ──
          {
            id: 'rd-030-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of people below. Match each statement to the person it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'The builders of the tower of Alexandria' },
              { key: 'B', label: 'John Smeaton' },
              { key: 'C', label: 'Augustin Fresnel' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'shaped a tower like the trunk of an oak tree.',
                answer: 'B',
              },
              {
                id: 'p3-f-2',
                text: 'created what is usually regarded as the first true lighthouse.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'replaced a heavy solid lens with a set of concentric glass rings.',
                answer: 'C',
              },
              {
                id: 'p3-f-4',
                text: 'dovetailed granite blocks so the waves could not prise them apart.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'devised a way to bend scattered light into a single concentrated beam.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → B (Smeaton): he "shaped the tower like the broad trunk of an oak tree." Item 2 → A: the tower of Alexandria "is usually regarded as the first true lighthouse." Item 3 → C (Fresnel): he "replaced it with a set of concentric glass rings." Item 4 → B (Smeaton): he "cut the granite blocks so that each was dovetailed into its neighbours... that the waves could not prise apart." Item 5 → C (Fresnel): his lens "bent it into a single concentrated beam."',
          },
          {
            id: 'rd-030-p3-q2',
            type: 'tfng',
            prompt: 'The earliest navigational lights were simple fires lit on high ground.',
            answer: 'true',
            explanation:
              'Paragraph A says "The earliest answer was the simplest imaginable: a fire on a headland," and that "Ancient sailors steered by bonfires lit on high ground." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p3-q3',
            type: 'mcq',
            prompt:
              'According to paragraph A, why was the light from early coal or wood fires often inadequate?',
            options: [
              'It was feeble and smoky, and easily lost in bad weather',
              'It could only be seen during daylight hours',
              'It required too many keepers to maintain',
              'It attracted ships towards the rocks rather than away from them',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph A states that the light from open fires "was feeble, smoky and easily lost in bad weather, precisely when it was needed most." Option A matches.',
          },
          {
            id: 'rd-030-p3-q4',
            type: 'tfng',
            prompt: 'The first lighthouse built on the Eddystone rocks was destroyed in a storm.',
            answer: 'true',
            explanation:
              'Paragraph B says the first tower, "an ornate wooden structure," was "promptly swept away, along with its designer, in a great storm." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p3-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Smeaton built the Eddystone tower from _______ rather than timber, shaping it wide and heavy at the base.',
            acceptableAnswers: ['stone'],
            explanation:
              'Paragraph C states that "Rather than timber, he built in stone." The required word is "stone".',
          },
          {
            id: 'rd-030-p3-q6',
            type: 'mcq',
            prompt:
              'Why did Fresnel not simply use a single large solid glass lens in lighthouses?',
            options: [
              'Because solid glass could not survive the salt air',
              'Because a solid lens big enough would have been impossibly heavy',
              'Because a solid lens scattered light into the sky',
              'Because solid glass was too expensive to produce in France',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D explains that "A solid glass lens big enough to gather the light of a lighthouse lamp would have been impossibly heavy, so Fresnel replaced it" with glass rings. Option B matches.',
          },
          {
            id: 'rd-030-p3-q7',
            type: 'tfng',
            prompt:
              'Each lighthouse was given a distinct pattern of flashes so that sailors could tell one light from another.',
            answer: 'true',
            explanation:
              'Paragraph E says engineers "gave each station its own signature, a distinct rhythm of flashes and pauses," so that a navigator could "identify exactly which light lay ahead from the pattern alone." This matches the statement, so it is True.',
          },
          {
            id: 'rd-030-p3-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Before automation, _______ lived in the towers and tended the lamp through the night.',
            acceptableAnswers: ['keepers'],
            explanation:
              'Paragraph F states that "every lighthouse needed keepers, men who lived in these lonely towers and tended the lamp through the night." The required word is "keepers".',
          },
          {
            id: 'rd-030-p3-q9',
            type: 'mcq',
            prompt: 'What does paragraph F suggest about lighthouses today?',
            options: [
              'They have been demolished now that ships no longer need them',
              'They are still operated by keepers in most countries',
              'They have largely become monuments rather than necessities',
              'They are now more important than ever for navigation',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F concludes that "the satellite and the electronic chart have taken over much of their old work, and the lighthouse... has quietly become more a monument than a necessity." Option C matches.',
          },
          {
            id: 'rd-030-p3-q10',
            type: 'tfng',
            prompt: 'The tower of Alexandria was taller than every lighthouse built after it.',
            answer: 'not-given',
            explanation:
              'Paragraph A calls the tower of Alexandria "a great stone column" and the first true lighthouse, but the passage never gives its height or compares it with the height of any later lighthouse. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
    ],
  },
]
