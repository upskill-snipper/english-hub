// ─── IELTS Academic Reading — practice item bank (Set 33) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of
// chocolate / animal camouflage / the development of the railways.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features — statements to defence
// strategies (Passage 3), alongside the usual mix of True/False/Not Given,
// multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_33: ReadingTest[] = [
  {
    id: 'rd-academic-033',
    title: 'Academic Reading — Practice Test 33',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-033-p1',
        title: 'A Short History of Chocolate',
        body: `Few foods have travelled so far, in both distance and meaning, as chocolate. The bar that melts in a modern pocket descends from a bitter ceremonial drink prepared thousands of miles away and many centuries ago. Its source is the seed of the cacao tree, a modest understorey plant of the tropical American forests, whose pods hang oddly from the trunk and older branches rather than from the twigs. Inside each pod lie rows of pale seeds wrapped in sweet pulp, and it is these seeds, once fermented, dried and roasted, that yield the substance we know. The long journey from that forest seed to an industrial product is a story of conquest, fashion, chemistry and machinery, and at almost every stage chocolate was something quite unlike the sweet most people picture today.

The peoples of Mesoamerica were the first to make use of cacao, and they treated it with a respect bordering on reverence. Among the Maya and later the Aztecs the roasted seeds were ground to a paste, mixed with water and flavoured with chilli, maize or fragrant flowers, then poured repeatedly between vessels to raise a thick froth that was prized above the liquid beneath. The resulting drink was bitter and unsweetened, nothing like modern cocoa, and it carried a heavy weight of ritual and status. Cacao seeds served as a form of currency, exchanged for goods in the marketplace, and the drink itself was associated with rulers, warriors and the gods. To consume it was as much a statement of rank as a pleasure of the palate.

Chocolate crossed the Atlantic in the wake of the Spanish conquest of the sixteenth century. The first Europeans to taste the bitter brew were unimpressed, but in the kitchens of the Spanish court it was gradually transformed to suit local taste. The decisive change was the addition of sugar, together with warming spices such as cinnamon, which turned a sharp, alien drink into a sweet and fashionable one. For a time Spain managed to keep its new luxury something of a secret, but the fashion could not be contained for ever. Over the following century the sweetened drink spread to the courts and coffee houses of France, Italy and England, where it was sipped by the wealthy as an expensive and faintly exotic indulgence, often credited with medicinal virtues it almost certainly did not possess.

For all its popularity, chocolate remained a drink, and a rich and greasy one, because the ground seed is roughly half fat. That fat, known as cocoa butter, floated awkwardly on the surface of the cup and made the beverage heavy to digest. The problem was solved in 1828 by a Dutch chemist, Coenraad van Houten, who devised a press capable of squeezing much of the cocoa butter out of the roasted paste. What remained could be ground into a fine, low-fat powder that mixed far more easily with liquid. Van Houten also treated the powder with an alkali to soften its harsh flavour and darken its colour, a process still called 'Dutching' today. His press did more than improve the drink, however, for it separated cocoa into two useful streams — the powder and the butter — and so unlocked the possibility of a chocolate that could be eaten rather than drunk.

The solid bar was the result. In 1847 the English firm of Fry's combined cocoa powder, sugar and melted cocoa butter to produce a paste that could be cast in a mould and set hard, creating what is generally regarded as the first true eating chocolate. It was dark and rather coarse by later standards, but the principle was established. A further refinement came from Switzerland: in 1875 Daniel Peter, drawing on a neighbour's expertise in dried milk, succeeded in blending milk into chocolate to make the first milk chocolate, milder and creamier than anything before it. Soon afterwards the Swiss manufacturer Rodolphe Lindt invented a process called conching, in which the chocolate is slowly worked and warmed for hours, driving off harsh flavours and giving the smooth, melting texture that consumers came to expect.

These inventions arrived just as the wider economy was being reshaped by the factory, and chocolate followed the same path as so many other goods. What had been a costly drink for the elite became, through mechanisation and falling prices, an everyday treat within the reach of ordinary families. Large firms built whole communities around their works, advertised their products on a grand scale, and turned a forest seed once counted out as money into one of the most familiar pleasures of the industrial age. The bitter ceremonial brew of Mesoamerica had become, in barely three centuries, a cheap and cheerful bar sold on every street.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-033-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A ritual drink among the peoples of Mesoamerica' },
              { key: 'ii', label: 'Sweetened and made fashionable in Europe' },
              { key: 'iii', label: 'From a forest seed to a worldwide product' },
              { key: 'iv', label: 'A Dutch press that split cocoa in two' },
              { key: 'v', label: 'How cacao trees are grown on modern plantations' },
              { key: 'vi', label: 'The invention of chocolate that could be eaten' },
              { key: 'vii', label: 'A cheap treat for the industrial age' },
              { key: 'viii', label: 'The health risks of eating too much sugar' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'i' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A traces cacao from "that forest seed to an industrial product" (iii). B describes the bitter, ritual drink of the Maya and Aztecs (i). C covers the addition of sugar that made it "sweet and fashionable" in Europe (ii). D explains van Houten\'s press that "separated cocoa into two useful streams" (iv). E narrates the first eating chocolate and milk chocolate (vi). F describes how it "became... an everyday treat" of the industrial age (vii). Heading v (modern plantation growing) is a distractor never discussed; heading viii (health risks of sugar) is a distractor — the passage does not address the dangers of sugar.',
          },
          {
            id: 'rd-033-p1-q2',
            type: 'tfng',
            prompt:
              'The pods of the cacao tree grow from the trunk and older branches rather than from the twigs.',
            answer: 'true',
            explanation:
              'Paragraph A states that the cacao tree\'s "pods hang oddly from the trunk and older branches rather than from the twigs." This matches the statement, so it is True.',
          },
          {
            id: 'rd-033-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Among the Maya and Aztecs the roasted seeds were used as a form of _______, exchanged for goods in the marketplace.',
            acceptableAnswers: ['currency'],
            explanation:
              'Paragraph B states that "Cacao seeds served as a form of currency, exchanged for goods in the marketplace." The required word is "currency".',
          },
          {
            id: 'rd-033-p1-q4',
            type: 'mcq',
            prompt:
              'According to paragraph C, what was the decisive change made to chocolate in the Spanish court?',
            options: [
              'It was chilled and served as a cold drink.',
              'It was pressed to remove its fat.',
              'Sugar was added, along with spices such as cinnamon.',
              'It was mixed with chilli and maize.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C says "The decisive change was the addition of sugar, together with warming spices such as cinnamon." Option C matches. Chilli and maize were Mesoamerican flavourings (paragraph B), not the Spanish change.',
          },
          {
            id: 'rd-033-p1-q5',
            type: 'tfng',
            prompt: 'Europeans enjoyed the bitter chocolate drink as soon as they first tasted it.',
            answer: 'false',
            explanation:
              'Paragraph C states that "The first Europeans to taste the bitter brew were unimpressed." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-033-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Van Houten treated the cocoa powder with an _______ to soften its harsh flavour and darken its colour.',
            acceptableAnswers: ['alkali'],
            explanation:
              'Paragraph D explains that van Houten "treated the powder with an alkali to soften its harsh flavour and darken its colour." The required word is "alkali".',
          },
          {
            id: 'rd-033-p1-q7',
            type: 'mcq',
            prompt:
              'Why was the invention of conching by Rodolphe Lindt significant, according to paragraph E?',
            options: [
              'It allowed milk to be added to chocolate for the first time.',
              'It removed the fat that made the drink greasy.',
              'It gave chocolate the smooth, melting texture consumers expected.',
              'It enabled chocolate to be cast in a mould and set hard.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph E says conching, in which chocolate "is slowly worked and warmed for hours," gave "the smooth, melting texture that consumers came to expect." Option C matches. Adding milk was Daniel Peter\'s achievement, and casting in a mould was Fry\'s.',
          },
          {
            id: 'rd-033-p1-q8',
            type: 'tfng',
            prompt:
              'Daniel Peter learned how to make dried milk himself before inventing milk chocolate.',
            answer: 'not-given',
            explanation:
              'Paragraph E says Peter drew "on a neighbour\'s expertise in dried milk," but the passage never states whether Peter himself learned to make dried milk. There is no information to confirm or contradict this, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-033-p2',
        title: 'The Art of Disappearing',
        body: `In the unending struggle between predator and prey, few weapons are as elegant as the ability to go unseen. Camouflage — the use of colour, pattern and form to avoid detection or recognition — is one of nature's most widespread defences, and also one of its most varied. It is not a single trick but a whole repertoire of strategies, each exploiting a different weakness in the way eyes and brains make sense of a scene. The same animal may even combine several at once. What unites them is a common purpose: to break the link between an object and the observer who would otherwise notice it, whether that observer is a hunting bird, a stalking cat or a wary insect.

The simplest and most familiar strategy is background matching, in which an animal's colours and textures resemble those of its usual surroundings so closely that it seems to melt into them. A green caterpillar on a green leaf, a brown moth on bark, a sandy lizard on a desert floor — all rely on blending with a typical background. The strategy works best when the creature stays in the habitat it matches and keeps still, since movement betrays even the most perfect colouring. Some species go further and can adjust their appearance: certain flatfish, for instance, shift the pattern of their skin to suit the seabed beneath them, while the well-known chameleon changes colour partly for the same end, though as much for signalling to other chameleons as for hiding.

A subtler approach attacks not the colour of an animal but its outline. The eye recognises objects largely by their edges, the continuous boundary that separates a shape from its background, and an animal that breaks up that boundary becomes far harder to pick out. This is the principle of disruptive colouration, in which bold patches of contrasting colour run across the body, often crossing the edges of limbs or wings. Instead of seeing a single recognisable form, the observer's eye is drawn to the separate patches and fails to assemble them into the shape of an animal at all. Many fish, frogs and ground-nesting birds carry such markings, and human armies borrowed the same idea for the irregular blotches of military camouflage.

A third strategy turns the logic of camouflage on its head, not by matching the background but by imitating some particular object that a predator has no interest in eating. This is mimicry of an inanimate or unappealing thing. Stick insects resemble twigs so faithfully that they are overlooked among the branches; certain caterpillars are shaped and coloured like bird droppings, which few predators would choose to investigate; and some butterflies fold their wings to present the exact likeness of a dead, veined leaf, complete with imitation blemishes. Here the animal is not hiding against a surface but masquerading as a specific, worthless object, exploiting the fact that a predator categorises what it sees and dismisses anything it deems inedible.

One of the most ingenious tricks of all addresses a problem that flat colouring cannot solve: the betraying effect of light and shadow. Sunlight falls from above, so a solid, evenly coloured body is lit on top and shaded beneath, and that gradient of brightness gives away its rounded, three-dimensional shape even when its colour matches the background. The answer is countershading, in which an animal is darker on its upper surface and paler on its underside. The dark top, catching the light, and the pale belly, lying in shadow, cancel out the natural gradient, so the animal appears flat and shapeless and is far harder to detect. Countless fish, deer, mice and birds are countershaded in exactly this way, the boundary between dark and light running neatly along their flanks.

Camouflage, then, is less a single adaptation than an arms race written across the skins of animals. As predators evolve sharper eyes and quicker pattern recognition, prey evolve ever more refined ways to defeat them, and predators in turn use camouflage of their own to approach unseen. The strategies overlap and reinforce one another, and a single creature may match its background, break up its outline and be countershaded all at once. Studying these tricks has taught biologists a great deal not only about animals but about vision itself, for every method of hiding is, in effect, a clue to how seeing works — and to how it can be fooled.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-033-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
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
                text: 'a definition of camouflage and the idea that it is not a single trick',
                answer: 'A',
              },
              {
                id: 'p2-i-2',
                text: "an explanation of how shading reveals an animal's three-dimensional shape",
                answer: 'E',
              },
              {
                id: 'p2-i-3',
                text: 'the point that staying still matters as much as matching colour',
                answer: 'B',
              },
              {
                id: 'p2-i-4',
                text: 'the statement that human armies adopted a natural camouflage principle',
                answer: 'C',
              },
              {
                id: 'p2-i-5',
                text: 'examples of animals that imitate worthless objects such as twigs',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → A, which defines camouflage and calls it "not a single trick but a whole repertoire of strategies." Item 2 → E, which explains how the "gradient of brightness gives away its rounded, three-dimensional shape." Item 3 → B: "movement betrays even the most perfect colouring." Item 4 → C: "human armies borrowed the same idea for the irregular blotches of military camouflage." Item 5 → D, with its stick insects, bird-dropping caterpillars and dead-leaf butterflies.',
          },
          {
            id: 'rd-033-p2-q2',
            type: 'tfng',
            prompt:
              'Background matching is described as the most complex of all the camouflage strategies.',
            answer: 'false',
            explanation:
              'Paragraph B calls background matching "The simplest and most familiar strategy." This contradicts the claim that it is the most complex, so it is False.',
          },
          {
            id: 'rd-033-p2-q3',
            type: 'mcq',
            prompt: 'According to paragraph B, why does the chameleon change colour?',
            options: [
              'Only in order to hide from predators',
              'Partly to hide and partly to signal to other chameleons',
              'To match the temperature of its surroundings',
              'To imitate the appearance of a dead leaf',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says the chameleon "changes colour partly for the same end, though as much for signalling to other chameleons as for hiding." Option B matches.',
          },
          {
            id: 'rd-033-p2-q4',
            type: 'gap',
            prompt:
              "Complete the sentence with TWO words from the passage: In _______ _______, bold patches of contrasting colour run across the body and break up the animal's outline.",
            acceptableAnswers: ['disruptive colouration'],
            explanation:
              'Paragraph C names "the principle of disruptive colouration, in which bold patches of contrasting colour run across the body." The required words are "disruptive colouration".',
          },
          {
            id: 'rd-033-p2-q5',
            type: 'mcq',
            prompt:
              'How does disruptive colouration make an animal harder to see, according to paragraph C?',
            options: [
              'By making the animal exactly the same colour as its background',
              'By drawing the eye to separate patches so it fails to assemble the whole shape',
              'By cancelling out the effect of light and shadow on the body',
              'By making the animal resemble a specific inedible object',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains that "the observer\'s eye is drawn to the separate patches and fails to assemble them into the shape of an animal at all." Option B matches. Cancelling light and shadow describes countershading (D), and resembling an object describes mimicry (D).',
          },
          {
            id: 'rd-033-p2-q6',
            type: 'tfng',
            prompt: 'Some caterpillars avoid being eaten by looking like bird droppings.',
            answer: 'true',
            explanation:
              'Paragraph D states that "certain caterpillars are shaped and coloured like bird droppings, which few predators would choose to investigate." This matches the statement, so it is True.',
          },
          {
            id: 'rd-033-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In _______, an animal is darker on top and paler underneath, which cancels out the natural gradient of light.',
            acceptableAnswers: ['countershading'],
            explanation:
              'Paragraph E describes "countershading, in which an animal is darker on its upper surface and paler on its underside," cancelling the gradient. The required word is "countershading".',
          },
          {
            id: 'rd-033-p2-q8',
            type: 'tfng',
            prompt:
              'Predators never use camouflage themselves, since it serves only to protect prey.',
            answer: 'false',
            explanation:
              'Paragraph F says "predators in turn use camouflage of their own to approach unseen." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-033-p2-q9',
            type: 'tfng',
            prompt: 'A single animal may use more than one camouflage strategy at the same time.',
            answer: 'true',
            explanation:
              'Paragraph F states that "a single creature may match its background, break up its outline and be countershaded all at once," and paragraph A notes "The same animal may even combine several at once." This matches the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-033-p3',
        title: 'The Coming of the Railways',
        body: `The railway did not appear suddenly. Like many great inventions it grew slowly out of older, humbler arrangements, the most important of which was the wagonway. Long before the age of steam, miners in Britain and continental Europe had found that a loaded cart rolled far more easily along wooden rails than over rough ground, and by the seventeenth century such tracks were a common sight around collieries, carrying coal down to rivers and harbours. The wagons were drawn by horses or simply allowed to run downhill under gravity, and the rails, at first wooden and later faced or made entirely of iron, did nothing more than guide the wheels and reduce friction. Yet in these modest mineral lines lay the two essential ideas of the railway: a prepared track and a flanged wheel kept on it.

What the wagonways lacked was a source of power independent of muscle and slope, and that was supplied by the steam engine. Early steam engines were huge, stationary machines used to pump water out of mines, far too heavy to move themselves, but engineers gradually learned to make them smaller and stronger. The breakthrough came in 1804, when Richard Trevithick mounted a high-pressure steam engine on a wagon and ran it along a tramway in South Wales, hauling a load of iron and a crowd of passengers. Trevithick's locomotive proved that steam could pull a useful weight along rails, though its heavy engine cracked the brittle cast-iron track and the experiment led to nothing lasting. It fell to others to turn the idea into a practical machine.

The decisive figures were George Stephenson and his son Robert, engineers of great practical skill. George had built locomotives for colliery lines and, crucially, championed a track of tough wrought iron and a standard gauge that would let engines run from one line onto another. When the Stockton and Darlington Railway opened in 1825 it was the first public railway to use steam locomotives, though it still carried much of its traffic by horse. The true turning point came in 1830 with the Liverpool and Manchester Railway, the first line designed from the outset to be worked entirely by steam and to carry passengers as well as freight between two great cities. Its success, and the speed and reliability of the Stephensons' celebrated engine the Rocket, persuaded a doubting public that the railway was the transport of the future.

What followed was an explosion of building without parallel in the nation's history. In the 1840s Britain was gripped by what came to be called 'railway mania', a frenzy of speculation in which companies were floated and lines proposed at a reckless pace. Investors poured their savings into railway shares in the hope of quick profit, Parliament passed act after act authorising new routes, and armies of labourers known as navvies dug the cuttings, raised the embankments and bored the tunnels by hand. Much money was lost when the bubble burst and many proposed lines were never built, but the mania left behind a dense national network that more cautious investment might never have produced. By the middle of the century the map of Britain was being redrawn in iron.

The effects of this network reached into almost every corner of life. For the first time ordinary people could travel quickly and cheaply over long distances, and journeys that had taken days by coach were reduced to hours. Fresh food, newspapers and the post moved at unheard-of speed, knitting distant towns into a single market and a single conversation. One curious but far-reaching consequence concerned time itself: because each town had traditionally kept its own local time by the sun, railway timetables were a confusion until the companies imposed a single standard time across the country, set by the clocks of the capital. The railway thus did something no government had managed, synchronising the nation's clocks for the sake of its trains.

The social changes were equally profound. Cities could now draw food and fuel from far afield and so grew larger than ever before, while their workers, freed from the need to live within walking distance of their work, began to spread into the new suburbs that lines made possible. Seaside towns that had been sleepy fishing villages swelled into bustling resorts as excursion trains brought day-trippers by the thousand. Whole industries — coal, iron, engineering — were enlarged by the demand for rails, engines and rolling stock. The railway, born in the coal pits as a way of moving minerals a little more easily, had within a few decades reshaped the economy, the landscape and the daily habits of an entire society.`,
        questions: [
          // ── Matching Features — statements to defence strategies... (5 items) = 5 marks ──
          // (Matching the railway lines/engines to the facts in the passage.)
          {
            id: 'rd-033-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of railways and locomotives below. Match each statement to the line or engine it relates to in the passage. Write the correct letter, A, B, C or D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: "Trevithick's locomotive (1804)" },
              { key: 'B', label: 'The Stockton and Darlington Railway' },
              { key: 'C', label: 'The Liverpool and Manchester Railway' },
              { key: 'D', label: 'The Rocket' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'was the first public railway to use steam locomotives.',
                answer: 'B',
              },
              {
                id: 'p3-f-2',
                text: 'cracked the brittle cast-iron track on which it ran.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'was the first line designed from the outset to be worked entirely by steam.',
                answer: 'C',
              },
              {
                id: 'p3-f-4',
                text: 'was a celebrated engine whose speed and reliability impressed a doubting public.',
                answer: 'D',
              },
              {
                id: 'p3-f-5',
                text: 'still carried much of its traffic by horse despite using steam.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → B: the Stockton and Darlington "was the first public railway to use steam locomotives." Item 2 → A: Trevithick\'s locomotive "cracked the brittle cast-iron track." Item 3 → C: the Liverpool and Manchester was "the first line designed from the outset to be worked entirely by steam." Item 4 → D: the Rocket\'s "speed and reliability... persuaded a doubting public." Item 5 → B: the Stockton and Darlington "still carried much of its traffic by horse."',
          },
          {
            id: 'rd-033-p3-q2',
            type: 'tfng',
            prompt:
              'The two essential ideas of the railway — a prepared track and a flanged wheel — were already present in the early wagonways.',
            answer: 'true',
            explanation:
              'Paragraph A states that "in these modest mineral lines lay the two essential ideas of the railway: a prepared track and a flanged wheel kept on it." This matches the statement, so it is True.',
          },
          {
            id: 'rd-033-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The earliest steam engines were heavy, stationary machines used to _______ water out of mines.',
            acceptableAnswers: ['pump'],
            explanation:
              'Paragraph B describes "huge, stationary machines used to pump water out of mines." The required word is "pump".',
          },
          {
            id: 'rd-033-p3-q4',
            type: 'mcq',
            prompt: "According to paragraph B, what did Trevithick's 1804 experiment prove?",
            options: [
              'That cast-iron rails were strong enough for heavy engines',
              'That steam could pull a useful weight along rails',
              'That horses were no longer needed on any railway',
              'That a standard gauge was essential for through running',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says "Trevithick\'s locomotive proved that steam could pull a useful weight along rails." Option B matches. The track in fact cracked, so option A is contradicted.',
          },
          {
            id: 'rd-033-p3-q5',
            type: 'mcq',
            prompt:
              'Why did George Stephenson champion a standard gauge, according to paragraph C?',
            options: [
              'So that engines could run from one line onto another',
              'So that the rails could be made of cheaper cast iron',
              'So that horses and locomotives could share the same track',
              'So that the Rocket could travel at higher speeds',
            ],
            correctIndex: 0,
            explanation:
              'Paragraph C says George championed "a standard gauge that would let engines run from one line onto another." Option A matches.',
          },
          {
            id: 'rd-033-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: During the 1840s the labourers who dug the cuttings and bored the tunnels by hand were known as _______.',
            acceptableAnswers: ['navvies'],
            explanation:
              'Paragraph D refers to "armies of labourers known as navvies" who "dug the cuttings, raised the embankments and bored the tunnels by hand." The required word is "navvies".',
          },
          {
            id: 'rd-033-p3-q7',
            type: 'tfng',
            prompt:
              'Every railway line proposed during the period of railway mania was eventually built.',
            answer: 'false',
            explanation:
              'Paragraph D states that "many proposed lines were never built." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-033-p3-q8',
            type: 'mcq',
            prompt:
              'Why were railway timetables a source of confusion before a single standard time was imposed?',
            options: [
              'Because trains were frequently late',
              'Because each town traditionally kept its own local time by the sun',
              'Because the companies could not agree on a common gauge',
              'Because clocks were rare outside the capital',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E explains that "because each town had traditionally kept its own local time by the sun, railway timetables were a confusion." Option B matches.',
          },
          {
            id: 'rd-033-p3-q9',
            type: 'tfng',
            prompt:
              'The railway companies set the single national standard time using the clocks of the capital.',
            answer: 'true',
            explanation:
              'Paragraph E states that the companies "imposed a single standard time across the country, set by the clocks of the capital." This matches the statement, so it is True.',
          },
          {
            id: 'rd-033-p3-q10',
            type: 'tfng',
            prompt:
              'Seaside resorts proved more profitable for the railway companies than freight traffic.',
            answer: 'not-given',
            explanation:
              'Paragraph F notes that excursion trains turned fishing villages into resorts, but the passage makes no comparison of the profitability of resort travel and freight. There is no information to confirm or contradict this, so it is Not Given.',
          },
        ],
      },
    ],
  },
]
