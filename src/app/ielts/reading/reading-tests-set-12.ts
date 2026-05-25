// ─── IELTS Academic Reading — practice item bank (Set 12) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: how soap and detergents
// clean / the domestication of the horse and its impact on human history / the
// economics and psychology of queuing.
//
// This test SHOWCASES the matching question type added to the ObjectiveQuestion
// union. It includes three matching questions across the three passages:
//   • Passage 1 — variant:'headings'  (with two distractor headings)
//   • Passage 2 — variant:'endings'   (sentence stems → candidate endings)
//   • Passage 3 — variant:'features'  (statements → the named theories)
// alongside the usual True/False/Not Given, MCQ and gap-completion items.
//
// One complete, carefully-checked test: 3 passages, 40 marks. Every answer is
// verifiable from the passage text and is justified in the explanation. For
// every matching question, each item.answer equals exactly one option.key.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_12: ReadingTest[] = [
  {
    id: 'rd-academic-012',
    title: 'Academic Reading — Practice Test 12',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ── Passage 1 ─────────────────────────────────────────────────────────
      {
        id: 'rd-academic-012-p1',
        title: 'How Soap and Detergents Clean',
        body: `Water alone is a poor cleaner of greasy surfaces, and the reason is a matter of basic chemistry. Most of the dirt that clings to skin, fabric and dishes is bound up with oil, and oil and water famously refuse to mix. The molecules of water cling tightly to one another, and an intruding drop of grease is squeezed out rather than absorbed, so the two never blend into a single liquid. When a greasy plate is rinsed under the tap, the water simply slides over the film of fat without lifting it away, no matter how vigorously the plate is shaken. To make cleaning possible, something must persuade the water and the oil to come together, and that is precisely the task performed by soap and the synthetic detergents that have largely replaced it.

The secret lies in the unusual shape of a single soap molecule. One end of the molecule is attracted to water and is described as hydrophilic, a term meaning "water-loving". The opposite end is repelled by water but readily dissolves in oil and grease; it is called hydrophobic, or "water-fearing". A substance built from molecules of this divided character is known as a surfactant, and its double nature is the key to everything that follows. Because neither end is comfortable on its own, the molecule is forced to arrange itself at the boundary between water and grease, with one tail buried in the oil and the other head reaching out into the water.

When enough surfactant molecules gather around a droplet of oil, they surround it completely. Their oil-loving tails point inward and grip the grease, while their water-loving heads face outward, forming a tiny sphere called a micelle. The droplet of dirt is now wrapped in a shell that the surrounding water finds entirely agreeable, and so the whole package can be carried off in the rinse. Dirt that water could never have touched is lifted from the surface and floated away, broken into fragments small enough to remain suspended rather than settling back down.

Soap itself is an ancient invention, made by boiling animal fat or plant oil with an alkali such as wood ash. The product cleans well, but it has a stubborn weakness. In so-called hard water, which is rich in dissolved minerals, soap reacts with calcium and magnesium to form an insoluble grey curd. This is the familiar scum that rings a bathtub and dulls washed clothing, and it represents soap that has been wasted rather than used. For centuries there was no remedy beyond softening the water first.

The twentieth century supplied an answer in the form of synthetic detergents, the first of which were developed when shortages of natural fats encouraged chemists to look for alternatives. These manufactured surfactants were designed so that the troublesome end of the molecule would not bind to the minerals in hard water. As a result they rinse cleanly and leave no curd, which is why almost every modern washing powder and dishwashing liquid is built around a detergent rather than traditional soap. The cleaning mechanism, however, is unchanged: the same hydrophilic head and hydrophobic tail, the same patient assembly of micelles around the dirt.

Modern cleaning products rarely rely on the surfactant alone. A washing powder is a careful mixture in which each ingredient has a job. Enzymes are added to break down particular kinds of stain: proteases attack the proteins in blood and grass, while others target fats or starch, snipping large stubborn molecules into smaller pieces that the surfactant can then surround. Compounds called builders soften the water and hold loosened dirt in suspension so that it cannot redeposit on the fabric. Bleaches may be included to destroy coloured stains by chemically altering the molecules that absorb light, turning a vivid mark colourless even when it is not fully removed. Optical brighteners perform a subtler trick still, absorbing invisible ultraviolet light and re-emitting it as a faint blue glow that makes white cloth appear brighter to the eye, even though it is not in fact any cleaner.

Heat and motion complete the process. Warm water makes grease softer and helps the surfactant work faster, while the tumbling of a washing machine or the scrubbing of a hand provides the mechanical energy that shakes loosened dirt free of the fibres. None of these aids removes the need for the surfactant, but together they explain why a modern wash achieves in half an hour what once took a long day of boiling and beating at the riverside.`,
        questions: [
          // Matching — headings (with two distractors). 5 marks.
          {
            id: 'rd-012-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has several sections. Choose the most suitable heading for each of paragraphs A, B, C, D and F from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct letter for each paragraph.',
            options: [
              { key: 'i', label: 'Why plain water fails to remove grease' },
              { key: 'ii', label: 'A molecule with two opposite ends' },
              { key: 'iii', label: 'How the dirt is trapped and carried away' },
              { key: 'iv', label: 'An old product and its problem with hard water' },
              { key: 'v', label: 'The helpers added to a modern washing powder' },
              { key: 'vi', label: 'The future of waterless cleaning' },
              { key: 'vii', label: 'How perfumes are chosen for cleaning products' },
            ],
            items: [
              {
                id: 'rd-012-p1-q1-a',
                text: 'Paragraph A (opening paragraph: "Water alone is a poor cleaner…")',
                answer: 'i',
              },
              {
                id: 'rd-012-p1-q1-b',
                text: 'Paragraph B ("The secret lies in the unusual shape…")',
                answer: 'ii',
              },
              {
                id: 'rd-012-p1-q1-c',
                text: 'Paragraph C ("When enough surfactant molecules gather…")',
                answer: 'iii',
              },
              {
                id: 'rd-012-p1-q1-d',
                text: 'Paragraph D ("Soap itself is an ancient invention…")',
                answer: 'iv',
              },
              {
                id: 'rd-012-p1-q1-e',
                text: 'Paragraph F ("Modern cleaning products rarely rely on the surfactant alone…")',
                answer: 'v',
              },
            ],
            explanation:
              'A explains that water slides over grease without lifting it, so plain water fails (i). B describes the molecule with a hydrophilic head and hydrophobic tail — two opposite ends (ii). C describes the surfactant surrounding the droplet to form a micelle that is carried off in the rinse (iii). D introduces ancient soap and its weakness in hard water, the grey curd (iv). The paragraph beginning "Modern cleaning products rarely rely on the surfactant alone" lists enzymes, builders and optical brighteners — the helpers in a washing powder (v). Headings vi (waterless cleaning) and vii (perfumes) are distractors not discussed in the passage.',
          },
          {
            id: 'rd-012-p1-q2',
            type: 'tfng',
            prompt: 'Oil and water mix together easily when they are rinsed under a tap.',
            answer: 'false',
            explanation:
              'The first paragraph states that "oil and water famously refuse to mix" and that water "simply slides over the film of fat without lifting it away." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-012-p1-q3',
            type: 'tfng',
            prompt: 'The hydrophobic end of a soap molecule dissolves easily in oil and grease.',
            answer: 'true',
            explanation:
              'The second paragraph says the end "repelled by water… readily dissolves in oil and grease; it is called hydrophobic." This matches the statement, so it is True.',
          },
          {
            id: 'rd-012-p1-q4',
            type: 'tfng',
            prompt:
              'Synthetic detergents were first developed because natural fats were in short supply.',
            answer: 'true',
            explanation:
              'The fifth paragraph states that synthetic detergents were developed "when shortages of natural fats encouraged chemists to look for alternatives," which supports the statement, so it is True.',
          },
          {
            id: 'rd-012-p1-q5',
            type: 'tfng',
            prompt: 'Optical brighteners make white cloth physically cleaner than it was before.',
            answer: 'false',
            explanation:
              'The passage says optical brighteners make white cloth "appear brighter to the eye, even though it is not in fact any cleaner." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-012-p1-q6',
            type: 'mcq',
            prompt: 'What is a micelle, according to the passage?',
            options: [
              'A mineral that forms when soap meets hard water',
              'A tiny sphere of surfactant molecules surrounding a droplet of oil',
              'An enzyme that breaks down protein stains',
              'A type of alkali used to make soap',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph describes the surfactant molecules surrounding an oil droplet "forming a tiny sphere called a micelle," with oil-loving tails inward and water-loving heads outward. Option B is correct.',
          },
          {
            id: 'rd-012-p1-q7',
            type: 'mcq',
            prompt: 'Why does ordinary soap leave a grey curd in hard water?',
            options: [
              'It contains too much animal fat.',
              'It reacts with dissolved calcium and magnesium to form an insoluble substance.',
              'It is not warmed sufficiently before use.',
              'It lacks the enzymes found in modern powders.',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph explains that in hard water "soap reacts with calcium and magnesium to form an insoluble grey curd." Option B matches this.',
          },
          {
            id: 'rd-012-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A substance whose molecules have both a water-loving and a water-fearing end is known as a _______.',
            acceptableAnswers: ['surfactant'],
            explanation:
              'The second paragraph states: "A substance built from molecules of this divided character is known as a surfactant." The required word is "surfactant".',
          },
          {
            id: 'rd-012-p1-q9',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Added to washing powders, _______ such as proteases break down particular stains by cutting large molecules into smaller pieces.',
            acceptableAnswers: ['enzymes'],
            explanation:
              'The sixth paragraph says "Enzymes are added to break down particular kinds of stain: proteases attack the proteins in blood and grass." The missing word is "enzymes".',
          },
          {
            id: 'rd-012-p1-q10',
            type: 'mcq',
            prompt: 'What is the role of the compounds called builders in a washing powder?',
            options: [
              'They make the wax in the surfactant set harder.',
              'They soften the water and stop loosened dirt from settling back on the fabric.',
              'They produce the faint blue glow seen on white cloth.',
              'They replace the surfactant in very hard water.',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph states that "Compounds called builders soften the water and hold loosened dirt in suspension so that it cannot redeposit on the fabric." Option B matches this; the blue glow is produced by optical brighteners, not builders.',
          },
        ],
      },
      // ── Passage 2 ─────────────────────────────────────────────────────────
      {
        id: 'rd-academic-012-p2',
        title: 'The Domestication of the Horse',
        body: `Few animals have shaped human history as profoundly as the horse, yet the story of its domestication was for a long time among the most difficult chapters of prehistory to reconstruct. Cattle, sheep and goats were altered visibly by life under human care, shrinking in size or changing in build, and they leave clear traces in the archaeological record. A tamed horse, by contrast, looks much like a wild one, and bones alone rarely reveal whether an animal was hunted, herded or ridden. For decades scholars argued over where and when the relationship began, proposing rival homelands scattered across the continent, with little firm evidence to settle the dispute.

The most persuasive answer now points to the grasslands of the western steppe, in what is today northern Kazakhstan, around five and a half thousand years ago. A community known to archaeologists as the Botai left behind enormous quantities of horse bones, far more than would be expected if the animals had merely been hunted. The pattern of ages at death also resembled that of a managed herd rather than a wild population picked off by hunters. Most striking of all, chemical analysis of pottery from the site detected the residue of mare's milk, and a people who milked horses must certainly have controlled them.

Other clues concerned the horses' teeth. On several Botai jaws researchers identified a particular kind of wear on the premolars, the sort of damage caused by a bit held in the mouth. A bit is used to guide a ridden or harnessed animal, and its mark on the teeth is regarded as some of the earliest physical evidence that horses were not only kept but also ridden. Taken together, the milk residue, the herd structure and the worn teeth made a powerful case that the Botai had crossed the line from hunting to husbandry.

The consequences of that change unfolded slowly but reached almost every corner of the ancient world. At first the horse was probably valued chiefly as a convenient source of meat and milk that could feed itself on grass too poor for crops. Only later did its true gift become apparent. A person on horseback could travel several times farther in a day than one on foot, and could manage flocks spread across distances that would otherwise have been unworkable. Herders who adopted the horse were able to exploit the vast open grasslands far more effectively than their neighbours, and their way of life spread with them.

Transport was transformed in turn. The earliest use of horses for hauling came with simple carts, but these heavy vehicles, with their solid wooden wheels, were slow and clumsy. The decisive innovation was the spoked wheel, far lighter than a solid disc, which made possible the light two-wheeled chariot. Drawn at speed by a pair of horses, the chariot became the dominant instrument of warfare across the Bronze Age, prized by rulers from Egypt to China. For several centuries the mere possession of chariots could decide the fate of kingdoms, and the craftsmen who built them were among the most valued servants of any court.

In time the chariot gave way to the ridden warhorse, a shift that depended on better breeding and on equipment that let a rider control a galloping mount with his hands free to use a weapon. Mounted warriors could strike swiftly and withdraw before a slower enemy could respond, and empires were repeatedly built and broken by peoples who had mastered the technique. The advantage was so great that it persisted, remarkably, into the age of gunpowder, and cavalry remained a serious military force well into the modern era.

The influence of the horse was never confined to war. It carried messages and merchants along the trade routes that knitted distant civilisations together, allowing goods, technologies and ideas to move at a pace the ancient world had never known. Relay systems of fresh mounts, established by several early empires, let a single urgent dispatch cross hundreds of kilometres in a matter of days, binding scattered provinces to a central authority that could now react to distant events before they spiralled out of control. It ploughed fields, hauled the harvest and drew the coaches that linked one town to the next. So thoroughly did it weave itself into human affairs that the language still preserves its memory, measuring the output of engines in units of horsepower long after the animal itself was retired from the work. The taming of a single species on a remote grassland thus set in motion changes whose echoes are with us still.`,
        questions: [
          {
            id: 'rd-012-p2-q10',
            type: 'tfng',
            prompt:
              'The bones of a domesticated horse are easy to distinguish from those of a wild horse.',
            answer: 'false',
            explanation:
              'The first paragraph states that "a tamed horse looks much like a wild one, and bones alone rarely reveal whether an animal was hunted, herded or ridden." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-012-p2-q11',
            type: 'tfng',
            prompt: 'Residue of mare’s milk was found on pottery at the Botai site.',
            answer: 'true',
            explanation:
              'The second paragraph reports that "chemical analysis of pottery from the site detected the residue of mare\'s milk." This matches the statement, so it is True.',
          },
          {
            id: 'rd-012-p2-q12',
            type: 'tfng',
            prompt:
              'The Botai people are known to have grown crops on the grasslands where they kept horses.',
            answer: 'not-given',
            explanation:
              'The passage describes the Botai keeping and milking horses on grasslands and notes the horses fed on "grass too poor for crops," but it never states whether the Botai themselves grew crops. There is no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-012-p2-q13',
            type: 'tfng',
            prompt: 'Cavalry stopped being a serious military force once gunpowder was introduced.',
            answer: 'false',
            explanation:
              'The sixth paragraph says the advantage of mounted warriors "persisted, remarkably, into the age of gunpowder, and cavalry remained a serious military force well into the modern era." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-012-p2-q14',
            type: 'mcq',
            prompt: 'What did the particular wear on the premolars of some Botai horses indicate?',
            options: [
              'That the horses had been fed an unusually tough diet',
              'That the horses were very old when they died',
              'That a bit had been held in the horses’ mouths',
              'That the horses had been bred for larger teeth',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph explains that the wear was "the sort of damage caused by a bit held in the mouth," used to guide a ridden or harnessed animal. Option C is correct.',
          },
          {
            id: 'rd-012-p2-q15',
            type: 'mcq',
            prompt: 'According to the passage, what made the light two-wheeled chariot possible?',
            options: [
              'The taming of faster breeds of horse',
              'The invention of the spoked wheel',
              'The discovery of stronger types of wood',
              'The development of paved roads',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph states that "The decisive innovation was the spoked wheel, far lighter than a solid disc, which made possible the light two-wheeled chariot." Option B is correct.',
          },
          // Matching — sentence endings. 5 marks.
          {
            id: 'rd-012-p2-q16',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence (1–5) with the correct ending (A–G) from the box below, based on the information in the passage. There are more endings than sentences, so you will not use them all.',
            options: [
              {
                key: 'A',
                label: 'far more horse bones than hunting alone would explain.',
              },
              {
                key: 'B',
                label: 'travel several times farther in a day than someone on foot.',
              },
              {
                key: 'C',
                label: 'the dominant instrument of warfare across the Bronze Age.',
              },
              {
                key: 'D',
                label: 'equipment that freed the rider’s hands to use a weapon.',
              },
              {
                key: 'E',
                label: 'measuring the power of engines in units of horsepower.',
              },
              {
                key: 'F',
                label: 'because their wheels were made of a single solid disc.',
              },
              {
                key: 'G',
                label: 'so that crops could be grown on the open steppe.',
              },
            ],
            items: [
              {
                id: 'rd-012-p2-q16-1',
                text: 'The Botai settlement contained',
                answer: 'A',
              },
              {
                id: 'rd-012-p2-q16-2',
                text: 'A rider on horseback could',
                answer: 'B',
              },
              {
                id: 'rd-012-p2-q16-3',
                text: 'Drawn at speed by two horses, the chariot became',
                answer: 'C',
              },
              {
                id: 'rd-012-p2-q16-4',
                text: 'The shift to the ridden warhorse depended on better breeding and on',
                answer: 'D',
              },
              {
                id: 'rd-012-p2-q16-5',
                text: 'The language still preserves the memory of the horse by',
                answer: 'E',
              },
            ],
            explanation:
              'Sentence 1 → A: the Botai left "enormous quantities of horse bones, far more than would be expected if the animals had merely been hunted." Sentence 2 → B: a rider "could travel several times farther in a day than one on foot." Sentence 3 → C: the chariot "became the dominant instrument of warfare across the Bronze Age." Sentence 4 → D: the shift depended on "equipment that let a rider control a galloping mount with his hands free to use a weapon." Sentence 5 → E: the language measures engine output "in units of horsepower." Endings F and G are distractors that contradict or are not stated in the passage (early carts were slow because of solid wheels, but that ending does not complete sentence 1–5 correctly, and crops are never grown on the steppe).',
          },
          {
            id: 'rd-012-p2-q17',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The most persuasive evidence for early domestication comes from the western _______, in what is now northern Kazakhstan.',
            acceptableAnswers: ['steppe'],
            explanation:
              'The second paragraph locates the evidence on "the grasslands of the western steppe, in what is today northern Kazakhstan." The required word is "steppe".',
          },
          {
            id: 'rd-012-p2-q18',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Carrying messages and merchants along _______ routes, the horse let goods, technologies and ideas move at a new pace.',
            acceptableAnswers: ['trade'],
            explanation:
              'The final paragraph says the horse "carried messages and merchants along the trade routes that knitted distant civilisations together." The missing word is "trade".',
          },
        ],
      },
      // ── Passage 3 ─────────────────────────────────────────────────────────
      {
        id: 'rd-academic-012-p3',
        title: 'The Economics and Psychology of Queuing',
        body: `A queue is the visible price of getting something for nothing, or at least for the same money as everyone else. Wherever a popular service is offered at a fixed price and demand outstrips the rate at which it can be supplied, a line forms. The economist sees in this a simple rationing device. When a price is held too low to balance supply and demand, some other mechanism must decide who is served and who waits, and time spent standing in line is one such mechanism. Those who value the service most, the argument runs, are the ones most willing to bear the cost of waiting, so the queue quietly sorts customers by the strength of their desire.

This tidy picture conceals a genuine waste. The hours that customers spend in a line are, from society's point of view, simply lost; nobody gains the time that the waiting people give up. A business could in principle eliminate the queue by raising its price until demand fell to match supply, and economists have long noted that firms often choose not to do so. The puzzle is why. Part of the answer is that a visible line is excellent advertising. A restaurant with people waiting outside signals its quality to passers-by far more convincingly than any sign in the window, and the owner may judge that the queue attracts more custom than it drives away.

Faced with unavoidable waiting, managers have learned to treat the queue not as a fixed fact but as a problem to be designed. Here the findings of psychology matter as much as those of economics, because what governs a customer's mood is rarely the true length of the wait. Researchers have repeatedly shown that the perception of waiting can diverge sharply from the clock, and that a passenger's satisfaction depends far more on how the wait feels than on how many minutes it actually lasts.

One of the most robust findings is that unoccupied time feels longer than occupied time. A wait with nothing to do drags, while the same interval passes quickly if attention is engaged. A celebrated illustration comes from an airport that received complaints about the long wait for luggage at the carousel. Rather than speed up the baggage handling, the airport moved the arrival gates farther from the reclaim hall, so that passengers spent most of the interval walking rather than standing idle at the belt. The actual wait was scarcely shortened, yet the complaints fell away, because the time now felt occupied.

A second principle is that uncertain waits feel longer than waits of known length. Not knowing how long a delay will last breeds anxiety, and anxiety stretches time. This is why a screen that announces "your call will be answered in approximately four minutes" can soothe a caller even when the wait is no shorter than before; the information itself is a comfort. For the same reason, an unexplained wait is harder to bear than one whose cause is understood. A delay that is justified — passengers are told the aircraft is being de-iced for their safety — is tolerated far more readily than an identical delay about which nothing is said.

Fairness is a third and especially powerful concern. People will endure a long wait with reasonable calm provided they believe the order is just, but the sight of a latecomer being served first can provoke an anger out of all proportion to the few seconds actually lost. This insight explains a quiet revolution in the design of waiting areas. Banks and post offices have widely abandoned the old arrangement of a separate line at each counter in favour of a single combined line that feeds whichever window falls vacant next. The single line is not always faster, and may even feel longer because it looks so long, but it guarantees that customers are served strictly in the order they arrived, and that guarantee of fairness is worth more to most people than a marginal saving of time.

The most ambitious response, however, is to remove the need to stand in line at all. Theme parks now issue passes that allow a visitor to reserve a place in an electronic queue and return at an appointed hour, converting dead waiting into time that can be spent elsewhere in the park. Such schemes show how far the modern understanding of queuing has travelled: the line is no longer accepted as an unchangeable nuisance, but managed, disguised and occasionally abolished, in recognition of the simple truth that the experience of waiting is at least as important as its length.`,
        questions: [
          {
            id: 'rd-012-p3-q19',
            type: 'tfng',
            prompt:
              'A queue tends to form when a service is offered at a fixed price and demand exceeds the rate of supply.',
            answer: 'true',
            explanation:
              'The first paragraph states that "Wherever a popular service is offered at a fixed price and demand outstrips the rate at which it can be supplied, a line forms." This matches the statement, so it is True.',
          },
          {
            id: 'rd-012-p3-q20',
            type: 'tfng',
            prompt:
              'Economists say that businesses are always unable to remove a queue by raising prices.',
            answer: 'false',
            explanation:
              'The second paragraph says a firm "could in principle eliminate the queue by raising its price until demand fell to match supply," but that firms "often choose not to do so." It is a choice, not an inability, so the statement is False.',
          },
          {
            id: 'rd-012-p3-q21',
            type: 'tfng',
            prompt:
              'The single combined line used by banks is always faster than separate lines at each counter.',
            answer: 'false',
            explanation:
              'The sixth paragraph states the single line "is not always faster, and may even feel longer because it looks so long." The statement claims it is always faster, which contradicts the text, so it is False.',
          },
          {
            id: 'rd-012-p3-q22',
            type: 'tfng',
            prompt:
              'Theme-park reservation passes let visitors spend their waiting time elsewhere in the park.',
            answer: 'true',
            explanation:
              'The final paragraph says the passes allow a visitor to "return at an appointed hour, converting dead waiting into time that can be spent elsewhere in the park." This supports the statement, so it is True.',
          },
          {
            id: 'rd-012-p3-q23',
            type: 'mcq',
            prompt:
              'According to the economist’s view in the first paragraph, what does a queue effectively do?',
            options: [
              'It raises the price of the service for everyone.',
              'It sorts customers according to how strongly they want the service.',
              'It reduces the quality of the service being offered.',
              'It encourages businesses to supply more of the service.',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph argues that those who value the service most are most willing to wait, so "the queue quietly sorts customers by the strength of their desire." Option B is correct.',
          },
          {
            id: 'rd-012-p3-q24',
            type: 'mcq',
            prompt:
              'Why did the airport move its arrival gates farther from the baggage reclaim hall?',
            options: [
              'To make the baggage handling genuinely faster',
              'To reduce the distance staff had to carry the luggage',
              'So that passengers spent the waiting time walking rather than standing idle',
              'To create more space for additional shops',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph explains the airport "moved the arrival gates farther from the reclaim hall, so that passengers spent most of the interval walking rather than standing idle," making the time feel occupied. Option C is correct.',
          },
          // Matching — features (statements → named principles/theories). 5 marks.
          {
            id: 'rd-012-p3-q25',
            type: 'matching',
            variant: 'features',
            prompt:
              'The passage discusses several ideas about waiting. Match each statement (1–5) with the idea it best illustrates (A–D) from the list below. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Unoccupied time feels longer than occupied time.' },
              { key: 'B', label: 'Uncertain or unexplained waits feel longer than known ones.' },
              { key: 'C', label: 'Waits that seem unfair provoke disproportionate anger.' },
              { key: 'D', label: 'A visible queue serves as advertising for a business.' },
            ],
            items: [
              {
                id: 'rd-012-p3-q25-1',
                text: 'A restaurant with people waiting outside signals its quality to passers-by.',
                answer: 'D',
              },
              {
                id: 'rd-012-p3-q25-2',
                text: 'A recorded message estimating a four-minute wait reassures a telephone caller.',
                answer: 'B',
              },
              {
                id: 'rd-012-p3-q25-3',
                text: 'Seeing a latecomer served first angers people far more than the seconds lost would justify.',
                answer: 'C',
              },
              {
                id: 'rd-012-p3-q25-4',
                text: 'Passengers who walk to the carousel complain less than those who stand idle at the belt.',
                answer: 'A',
              },
              {
                id: 'rd-012-p3-q25-5',
                text: 'Telling passengers an aircraft is being de-iced for safety makes a delay easier to accept.',
                answer: 'B',
              },
            ],
            explanation:
              'Statement 1 → D: a waiting line "signals its quality to passers-by," excellent advertising. Statement 2 → B: the "approximately four minutes" message soothes because the information reduces uncertainty. Statement 3 → C: a latecomer served first "can provoke an anger out of all proportion," a fairness concern. Statement 4 → A: walking makes the time feel occupied, and unoccupied time feels longer than occupied time. Statement 5 → B: an explained, justified delay is tolerated more readily than an unexplained one, the same principle that uncertain or unexplained waits feel longer (so B is used twice, as the instruction permits).',
          },
          {
            id: 'rd-012-p3-q26',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The economist regards a queue as a _______ device that decides who is served when a price is held too low.',
            acceptableAnswers: ['rationing'],
            explanation:
              'The first paragraph calls the queue "a simple rationing device" used when a price is too low to balance supply and demand. The required word is "rationing".',
          },
          {
            id: 'rd-012-p3-q27',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The widespread switch to a single combined line is driven above all by customers’ concern for _______.',
            acceptableAnswers: ['fairness'],
            explanation:
              'The sixth paragraph identifies "Fairness" as the third and especially powerful concern and explains that the single line "guarantees that customers are served strictly in the order they arrived." The missing word is "fairness".',
          },
        ],
      },
    ],
  },
]
