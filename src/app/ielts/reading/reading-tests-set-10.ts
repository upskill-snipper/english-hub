// ─── IELTS Academic Reading - practice item bank (Set 10) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domains: the science of taste and flavour /
// the history of vaccination / vertical farming and the future of food.
//
// One complete, carefully-checked test: 3 passages, 40 questions. Every answer
// is verifiable from the passage text and is justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_10: ReadingTest[] = [
  {
    id: 'rd-academic-010',
    title: 'Academic Reading - Practice Test 10',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-010-p1',
        title: 'The Science of Taste and Flavour',
        body: `It is easy to assume that the pleasure we take in food comes from the tongue, yet this familiar belief turns out to be only a small part of the truth. The tongue, and the soft tissue around it, is studded with taste buds that detect a surprisingly limited set of basic qualities: sweet, sour, salty, bitter and the savoury sensation known by its Japanese name, umami. These five categories, however, account for almost nothing of what people mean when they describe a dish as delicious. What we casually call the taste of a strawberry or a roast is in fact flavour, a far richer construction assembled by the brain from several different streams of information at once.

The most important of these streams arrives not through the mouth but through the nose. As we chew, volatile compounds are released and travel upward through a passage at the back of the throat to the olfactory receptors high in the nasal cavity. This route, known as retronasal smell, is quite distinct from the ordinary sniffing of an aroma before eating. The brain, however, does not keep the two channels separate. It binds the incoming smell so tightly to the sensations from the tongue that the resulting experience seems to come entirely from the food in the mouth. The simplest demonstration is also the most familiar: hold the nose while eating, and an apple and a slice of raw potato become almost impossible to tell apart, because the sugary and starchy textures are similar and the distinguishing aromas have been blocked.

Other senses contribute in ways that are easy to overlook. Texture, temperature and even mild pain all shape the final impression. The cooling tingle of mint, the burn of chilli and the prickle of a carbonated drink are not tastes at all but signals carried by nerves that respond to touch and irritation, and yet the brain folds them seamlessly into the flavour. Sound plays its part too: experiments have shown that the same biscuit is judged fresher and more appealing when it crunches loudly, even though nothing about its chemistry has changed.

Genetics adds a further layer of variation, which is why two people can disagree so sharply about the same meal. A well-studied example concerns a bitter compound that some individuals detect intensely while others cannot taste at all, the difference resting on a single gene. Those who are highly sensitive to bitterness often dislike vegetables such as broccoli and sprouts, and the trait appears to run in families. It is a useful reminder that there is no single correct version of how a food tastes; each of us inhabits a slightly different sensory world.

Expectation, finally, can be as powerful as any signal from the senses. The colour of a food, the price on the menu and even the description a waiter offers all influence the verdict the brain reaches before the first mouthful is fully chewed. In one striking study, a white wine that had been coloured red with an odourless dye was described by trained tasters using the vocabulary normally reserved for red wines, as though their eyes had quietly overruled their noses. Marketing exploits the same effect: a dessert presented on heavy white china is frequently rated as more intense and better made than the identical dish served on a light plastic plate.

Understanding flavour as a construction of the brain, rather than a fixed property of food, has consequences that reach beyond the dinner table. It helps explain why illness or ageing, both of which dull the sense of smell, can rob eating of its pleasure and lead to poor nutrition. It offers food companies a means of reducing sugar or salt without an obvious loss of satisfaction, by adjusting aroma or texture instead. Above all, it overturns a long-standing assumption. The flavours that seem to live in our food are, in a real sense, manufactured within us, and the meal we enjoy is as much an achievement of the brain as it is of the cook.`,
        questions: [
          {
            id: 'rd-010-p1-q1',
            type: 'tfng',
            prompt: 'The taste buds on the tongue can detect more than five basic qualities.',
            answer: 'false',
            explanation:
              'The first paragraph lists exactly five basic qualities the taste buds detect: "sweet, sour, salty, bitter and the savoury sensation known by its Japanese name, umami." The statement claims there are more than five, which contradicts the text, so it is False.',
          },
          {
            id: 'rd-010-p1-q2',
            type: 'tfng',
            prompt:
              'What we usually describe as the taste of a food is largely the work of the brain.',
            answer: 'true',
            explanation:
              'The first paragraph states that what we call taste "is in fact flavour, a far richer construction assembled by the brain." This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p1-q3',
            type: 'mcq',
            prompt: 'According to the passage, what is retronasal smell?',
            options: [
              'The act of sniffing an aroma before food enters the mouth',
              'Smell that reaches the nose from the throat as food is chewed',
              'A sense of smell that exists only in people with a particular gene',
              'The brain’s memory of aromas experienced in the past',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that as we chew, volatile compounds "travel upward through a passage at the back of the throat to the olfactory receptors," and calls this "retronasal smell," distinguishing it from "the ordinary sniffing of an aroma before eating." Option B matches; option A describes the contrasting kind of smell.',
          },
          {
            id: 'rd-010-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: If you hold your _______ while eating, an apple and a slice of raw potato become hard to tell apart.',
            acceptableAnswers: ['nose'],
            explanation:
              'The second paragraph says: "hold the nose while eating, and an apple and a slice of raw potato become almost impossible to tell apart." The missing word is "nose".',
          },
          {
            id: 'rd-010-p1-q5',
            type: 'mcq',
            prompt: 'How does the passage describe the burn of chilli and the tingle of mint?',
            options: [
              'As basic tastes detected by the taste buds',
              'As aromas carried to the nose by retronasal smell',
              'As signals carried by nerves that respond to touch and irritation',
              'As reactions caused mainly by a person’s expectations',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph states that the burn of chilli and the tingle of mint "are not tastes at all but signals carried by nerves that respond to touch and irritation." Option C is correct.',
          },
          {
            id: 'rd-010-p1-q6',
            type: 'tfng',
            prompt:
              'A biscuit was rated as fresher when it made a louder crunch, despite no change to its chemistry.',
            answer: 'true',
            explanation:
              'The third paragraph reports that "the same biscuit is judged fresher and more appealing when it crunches loudly, even though nothing about its chemistry has changed." This matches the statement, so it is True.',
          },
          {
            id: 'rd-010-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Sensitivity to a particular _______ compound, which some people taste intensely and others not at all, depends on a single gene.',
            acceptableAnswers: ['bitter'],
            explanation:
              'The fourth paragraph describes "a bitter compound that some individuals detect intensely while others cannot taste at all, the difference resting on a single gene." The required word is "bitter".',
          },
          {
            id: 'rd-010-p1-q8',
            type: 'tfng',
            prompt:
              'People who are very sensitive to the bitter compound tend to enjoy vegetables such as broccoli.',
            answer: 'false',
            explanation:
              'The fourth paragraph says those "highly sensitive to bitterness often dislike vegetables such as broccoli and sprouts." The statement claims they enjoy such vegetables, which contradicts the text, so it is False.',
          },
          {
            id: 'rd-010-p1-q9',
            type: 'mcq',
            prompt:
              'What did the study involving white wine coloured red with an odourless dye show?',
            options: [
              'That the dye changed the chemical flavour of the wine',
              'That trained tasters could not detect the presence of any dye',
              'That what the tasters saw influenced how they described the wine',
              'That red wine contains more aroma compounds than white wine',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph reports that tasters described the dyed white wine "using the vocabulary normally reserved for red wines, as though their eyes had quietly overruled their noses." This shows sight influenced their descriptions, so option C is correct. The dye was odourless and did not change the chemistry.',
          },
          {
            id: 'rd-010-p1-q10',
            type: 'tfng',
            prompt:
              'The white wine used in the study had been chilled to a lower temperature than the red wines.',
            answer: 'not-given',
            explanation:
              'The fifth paragraph describes the wine being "coloured red with an odourless dye" but says nothing about its temperature or how it compared with red wines. No information about chilling is given, so the answer is Not Given.',
          },
          {
            id: 'rd-010-p1-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A dessert served on heavy white _______ is often rated as more intense than the same dish on a light plastic plate.',
            acceptableAnswers: ['china'],
            explanation:
              'The fifth paragraph states that "a dessert presented on heavy white china is frequently rated as more intense and better made than the identical dish served on a light plastic plate." The missing word is "china".',
          },
          {
            id: 'rd-010-p1-q12',
            type: 'mcq',
            prompt:
              'According to the final paragraph, why might food companies adjust aroma or texture?',
            options: [
              'To make their products look more expensive on the shelf',
              'To reduce sugar or salt without an obvious loss of satisfaction',
              'To slow down the ageing of the people who eat them',
              'To make foods safer for people with a sensitive gene',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph says the understanding of flavour "offers food companies a means of reducing sugar or salt without an obvious loss of satisfaction, by adjusting aroma or texture instead." Option B is correct.',
          },
          {
            id: 'rd-010-p1-q13',
            type: 'tfng',
            prompt:
              'A loss of the sense of smell can make eating less enjoyable and harm nutrition.',
            answer: 'true',
            explanation:
              'The final paragraph explains that illness or ageing, "both of which dull the sense of smell, can rob eating of its pleasure and lead to poor nutrition." This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p1-q14',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The passage concludes that the flavours that seem to live in our food are, in a real sense, _______ within us.',
            acceptableAnswers: ['manufactured'],
            explanation:
              'The final sentence states that "the flavours that seem to live in our food are, in a real sense, manufactured within us." The required word is "manufactured".',
          },
        ],
      },
      {
        id: 'rd-academic-010-p2',
        title: 'A Short History of Vaccination',
        body: `Long before anyone understood what caused disease, people noticed a curious pattern: those who survived an outbreak of a particular illness were rarely struck down by it a second time. Smallpox, one of the great killers of the past, left its survivors scarred but protected, and across several parts of the world this observation gave rise to a daring practice. In a procedure later called variolation, healthy people were deliberately exposed to material taken from the sores of a smallpox patient, in the hope that a mild, controlled infection would grant them the same lifelong immunity. The method carried a real and frightening risk, for a proportion of those treated developed the full disease and died, yet in regions where smallpox was common it could still tilt the odds in a person's favour.

The decisive advance is usually credited to the English doctor Edward Jenner, working in the closing years of the eighteenth century. Jenner was intrigued by a piece of rural folklore which held that milkmaids who had caught cowpox, a mild disease of cattle, seemed never to suffer from smallpox. In 1796 he tested the idea directly, taking matter from a cowpox sore on a dairymaid's hand and introducing it into the arm of a young boy. When the child was later exposed to smallpox, he did not fall ill. Jenner had shown that a harmless relative of a dangerous disease could be used to produce protection, and he named the technique after the Latin word for cow, vacca. The age of vaccination had begun, though it would be a century before anyone could explain why it worked.

That explanation depended on the slow acceptance of the germ theory of disease. Through the second half of the nineteenth century, the work of researchers such as Louis Pasteur in France and Robert Koch in Germany established that many illnesses are caused by specific microorganisms. Pasteur went further, discovering almost by accident that bacteria weakened in the laboratory could be injected to confer immunity without causing serious illness, and he extended the principle to diseases far beyond smallpox. The understanding that a vaccine trains the body's own defences to recognise an invader, so that a later encounter is met with a swift and crushing response, gave the practice a firm scientific foundation for the first time.

The twentieth century turned this foundation into one of the most successful enterprises in the history of medicine. Vaccines were developed against diphtheria, tetanus, whooping cough, polio and measles, among many others, and where they were widely used the diseases retreated dramatically. The campaign against smallpox was the most ambitious of all. Coordinated internationally and reaching into the remotest communities, it pursued the virus until, in 1980, the disease was declared eradicated - the only human infection ever to have been deliberately wiped from the planet. For a disease that had killed hundreds of millions, this was an achievement without parallel.

Success, paradoxically, brought a new difficulty. As terrifying illnesses vanished from everyday experience, the public memory of their horror faded, and the rare side effects of vaccines began to loom larger in people's minds than the diseases they prevented. Doubts spread, sometimes fuelled by false claims that circulated faster than the evidence to correct them, and in several countries vaccination rates fell far enough for once-vanquished diseases to return. The mathematics that governs an epidemic is unforgiving: protection depends not only on the individual but on a sufficiently high proportion of the surrounding population being immune, a condition that breaks down quickly when confidence is lost.

The story of vaccination is therefore not a simple march of progress but a continuing effort that is as much social as scientific. The laboratory can produce ever safer and more effective vaccines, yet their value is realised only when enough people choose, or are persuaded, to use them. Two centuries after Jenner's experiment, the central insight remains as relevant as ever: a threat that has become invisible has not necessarily gone away, and the protection that hides it must be actively maintained.`,
        questions: [
          {
            id: 'rd-010-p2-q1',
            type: 'tfng',
            prompt:
              'People observed that surviving certain diseases often protected a person from catching them again.',
            answer: 'true',
            explanation:
              'The first paragraph states that "those who survived an outbreak of a particular illness were rarely struck down by it a second time." This matches the statement, so it is True.',
          },
          {
            id: 'rd-010-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In the practice called _______, healthy people were deliberately exposed to material from a smallpox patient’s sores.',
            acceptableAnswers: ['variolation'],
            explanation:
              'The first paragraph describes "a procedure later called variolation," in which "healthy people were deliberately exposed to material taken from the sores of a smallpox patient." The required word is "variolation".',
          },
          {
            id: 'rd-010-p2-q3',
            type: 'tfng',
            prompt: 'Variolation was completely safe for everyone who underwent it.',
            answer: 'false',
            explanation:
              'The first paragraph says the method "carried a real and frightening risk, for a proportion of those treated developed the full disease and died." This contradicts the claim that it was completely safe, so it is False.',
          },
          {
            id: 'rd-010-p2-q4',
            type: 'mcq',
            prompt: 'What piece of folklore drew Edward Jenner’s attention?',
            options: [
              'That smallpox survivors were immune to cowpox',
              'That milkmaids who had caught cowpox seemed never to get smallpox',
              'That cattle were unable to pass any disease to humans',
              'That people who drank fresh milk rarely became ill',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph states that Jenner was intrigued by folklore "which held that milkmaids who had caught cowpox... seemed never to suffer from smallpox." Option B is correct.',
          },
          {
            id: 'rd-010-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Jenner named the new technique after the Latin word for _______.',
            acceptableAnswers: ['cow'],
            explanation:
              'The second paragraph says "he named the technique after the Latin word for cow, vacca." The missing word is "cow".',
          },
          {
            id: 'rd-010-p2-q6',
            type: 'tfng',
            prompt:
              'Scientists could explain why Jenner’s technique worked shortly after his 1796 experiment.',
            answer: 'false',
            explanation:
              'The second paragraph states that after the technique began, "it would be a century before anyone could explain why it worked." This contradicts the idea that it was explained shortly afterwards, so it is False.',
          },
          {
            id: 'rd-010-p2-q7',
            type: 'mcq',
            prompt: 'According to the passage, what did Louis Pasteur discover almost by accident?',
            options: [
              'That cowpox and smallpox were caused by the same microorganism',
              'That weakened bacteria could be injected to confer immunity without serious illness',
              'That vaccines worked only against bacterial, not viral, diseases',
              'That milkmaids were naturally immune to most infections',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph says Pasteur discovered "almost by accident that bacteria weakened in the laboratory could be injected to confer immunity without causing serious illness." Option B matches this directly.',
          },
          {
            id: 'rd-010-p2-q8',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: A vaccine works by training the body’s own _______ to recognise an invader so a later encounter is met swiftly.',
            acceptableAnswers: ['defences', 'defenses'],
            explanation:
              'The third paragraph explains that "a vaccine trains the body’s own defences to recognise an invader, so that a later encounter is met with a swift and crushing response." The required word is "defences" (the American spelling "defenses" is also accepted).',
          },
          {
            id: 'rd-010-p2-q9',
            type: 'tfng',
            prompt: 'Smallpox is the only human disease that has been deliberately eradicated.',
            answer: 'true',
            explanation:
              'The fourth paragraph states that smallpox was declared eradicated in 1980, "the only human infection ever to have been deliberately wiped from the planet." This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p2-q10',
            type: 'mcq',
            prompt:
              'Why, according to the passage, did doubts about vaccines spread once diseases became rare?',
            options: [
              'Because vaccines had become much more expensive to produce',
              'Because the rare side effects came to seem larger than the forgotten diseases',
              'Because scientists admitted they no longer understood how vaccines worked',
              'Because governments stopped funding vaccination programmes',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph explains that as illnesses vanished, "the rare side effects of vaccines began to loom larger in people’s minds than the diseases they prevented." Option B captures this.',
          },
          {
            id: 'rd-010-p2-q11',
            type: 'tfng',
            prompt:
              'The eradication of smallpox in 1980 was led by a single national government acting alone.',
            answer: 'not-given',
            explanation:
              'The fourth paragraph says the campaign was "coordinated internationally," but the passage never states which body or country led it, nor that a single government acted alone. The specific claim is not addressed, so the answer is Not Given.',
          },
          {
            id: 'rd-010-p2-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Protection against an epidemic depends on a sufficiently high _______ of the surrounding population being immune.',
            acceptableAnswers: ['proportion'],
            explanation:
              'The fifth paragraph states that protection "depends not only on the individual but on a sufficiently high proportion of the surrounding population being immune." The required word is "proportion".',
          },
          {
            id: 'rd-010-p2-q13',
            type: 'mcq',
            prompt:
              'What is the central insight the passage draws from the history of vaccination?',
            options: [
              'That the laboratory can now eliminate every infectious disease',
              'That older methods such as variolation were never genuinely useful',
              'That a threat which has become invisible has not necessarily gone away',
              'That vaccines should be made compulsory in every country',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states the central insight: "a threat that has become invisible has not necessarily gone away, and the protection that hides it must be actively maintained." Option C matches this.',
          },
        ],
      },
      {
        id: 'rd-academic-010-p3',
        title: 'Vertical Farming and the Future of Food',
        body: `As the world's population climbs and its cities swell, a familiar question grows more urgent: how will we feed everyone without clearing yet more forest for fields? One answer, increasingly visible in disused warehouses and purpose-built towers, is to abandon the horizontal field altogether and grow food upward. Vertical farming stacks crops in tiers, sometimes dozens high, inside climate-controlled buildings where every variable that a plant experiences is set by machines rather than the weather. Its advocates present it not as a curiosity but as a serious response to the limits of conventional agriculture.

The appeal becomes clear once the inefficiencies of the open field are spelled out. Traditional farming is at the mercy of season, drought and pest, and it consumes enormous quantities of land and fresh water. A vertical farm, by contrast, can operate in any climate and at any latitude, untroubled by frost or flood, and it can harvest crop after crop throughout the year. Because the plants are grown without soil - their roots bathed in a nutrient solution, or suspended in air and misted at intervals - water that would otherwise drain away is captured and recirculated. Such systems can use a small fraction of the water demanded by a conventional crop, an advantage that grows more compelling as fresh water becomes scarcer. Sited within or beside the cities they supply, these farms also cut the long journeys that wilt produce and burn fuel, delivering leaves to a shop the same day they are picked.

The decisive technology, and the source of the industry's greatest difficulty, is light. Indoor crops cannot rely on the sun, and for decades artificial lighting was simply too expensive and too inefficient to make the idea workable. The breakthrough came with the light-emitting diode, or LED, which converts electricity into light with far less waste heat than older lamps and, crucially, can be tuned to emit only those wavelengths a plant actually uses for photosynthesis. Engineers found that delivering chiefly red and blue light, the parts of the spectrum plants absorb most readily, could drive rapid growth while wasting little energy on colours the crop largely ignores. Even so, supplying the light that the sun would otherwise provide for free remains the heaviest cost a vertical farm must bear, and the electricity bill can decide whether the whole enterprise turns a profit.

This dependence on power explains both the promise and the limits of the technology as it stands. Where electricity is cheap and clean, the case is strong; where it is expensive or generated by burning fossil fuels, a vertical farm may consume more energy than the field it replaces, undermining the environmental argument that is meant to justify it. For this reason the economics, at present, favour a narrow range of crops. Leafy greens and herbs grow quickly, sell for a high price relative to their weight and need little light to mature, which makes them well suited to the indoor model. Staple crops tell a different story: wheat, rice and potatoes are bulky, cheap and hungry for light, and no one has yet shown that they can be grown profitably in a tower.

Critics seize on exactly this point. A technology that can supply a city with salad leaves and basil, they argue, is a welcome novelty but no answer to the fundamental challenge of feeding billions, which still rests on the grains that vertical farms cannot economically produce. There is force in the objection. Yet its defenders reply that the comparison is unfair, for the purpose of vertical farming is not to replace the wheat field but to relieve it. Every salad crop grown in a stacked tower is one no longer demanding land, water and transport in the countryside, freeing those resources for the staples that genuinely need open ground.

What seems most likely is that vertical farming will become one tool among many rather than a single solution. As LEDs grow more efficient and renewable electricity cheaper, the range of crops that make sense indoors will slowly widen, and the practice may spread from luxury greens toward more everyday produce. It will not abolish the farm, but in a warming and crowded world it offers something valuable: a way to grow at least some of our food reliably, locally and with a lighter demand on the land, whatever the weather chooses to do outside.`,
        questions: [
          {
            id: 'rd-010-p3-q1',
            type: 'mcq',
            prompt: 'How does the passage describe a vertical farm?',
            options: [
              'A traditional field that has been moved closer to a city',
              'Crops stacked in tiers inside a climate-controlled building',
              'A greenhouse that relies entirely on natural sunlight',
              'A method of farming used only for grains such as wheat',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph states that "vertical farming stacks crops in tiers... inside climate-controlled buildings where every variable... is set by machines rather than the weather." Option B matches this description.',
          },
          {
            id: 'rd-010-p3-q2',
            type: 'tfng',
            prompt:
              'A vertical farm can grow crops regardless of the climate or latitude where it is located.',
            answer: 'true',
            explanation:
              'The second paragraph states that a vertical farm "can operate in any climate and at any latitude, untroubled by frost or flood." This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In a vertical farm the plants are grown without _______, with their roots in a nutrient solution or misted in the air.',
            acceptableAnswers: ['soil'],
            explanation:
              'The second paragraph says the plants are "grown without soil - their roots bathed in a nutrient solution, or suspended in air and misted at intervals." The missing word is "soil".',
          },
          {
            id: 'rd-010-p3-q4',
            type: 'tfng',
            prompt: 'Vertical farms typically use more fresh water than conventional crops.',
            answer: 'false',
            explanation:
              'The second paragraph states that such systems "can use a small fraction of the water demanded by a conventional crop." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-010-p3-q5',
            type: 'mcq',
            prompt:
              'According to the passage, what advantage comes from siting a vertical farm within or beside a city?',
            options: [
              'It allows the farm to use sunlight more effectively',
              'It reduces the long journeys that wilt produce and burn fuel',
              'It lowers the cost of the electricity the farm consumes',
              'It makes it possible to grow staple crops profitably',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph says farms sited near cities "cut the long journeys that wilt produce and burn fuel, delivering leaves to a shop the same day they are picked." Option B is correct.',
          },
          {
            id: 'rd-010-p3-q6',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word (or abbreviation) from the passage: The key technology that made indoor growing workable was the light-emitting diode, or _______.',
            acceptableAnswers: ['LED'],
            explanation:
              'The third paragraph identifies the breakthrough as "the light-emitting diode, or LED." The required answer is "LED".',
          },
          {
            id: 'rd-010-p3-q7',
            type: 'mcq',
            prompt: 'Why are LEDs particularly well suited to vertical farming?',
            options: [
              'They are cheaper to manufacture than any other type of lamp',
              'They can be tuned to emit chiefly the wavelengths plants use for photosynthesis',
              'They remove the need for any electricity at all',
              'They allow plants to be grown in ordinary soil indoors',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that the LED "can be tuned to emit only those wavelengths a plant actually uses for photosynthesis," chiefly red and blue light. Option B captures this.',
          },
          {
            id: 'rd-010-p3-q8',
            type: 'tfng',
            prompt: 'Lighting is the heaviest cost that a vertical farm must bear.',
            answer: 'true',
            explanation:
              'The third paragraph states that "supplying the light that the sun would otherwise provide for free remains the heaviest cost a vertical farm must bear." This matches the statement, so it is True.',
          },
          {
            id: 'rd-010-p3-q9',
            type: 'tfng',
            prompt:
              'A vertical farm powered by fossil-fuel electricity may use more energy than the field it replaces.',
            answer: 'true',
            explanation:
              'The fourth paragraph says that where electricity "is expensive or generated by burning fossil fuels, a vertical farm may consume more energy than the field it replaces." This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p3-q10',
            type: 'mcq',
            prompt: 'Why do the current economics favour leafy greens and herbs?',
            options: [
              'They store better than other crops after harvesting',
              'They grow quickly, sell for a high price by weight and need little light',
              'They can be grown only indoors and not in open fields',
              'They require no nutrient solution to grow successfully',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph states that leafy greens and herbs "grow quickly, sell for a high price relative to their weight and need little light to mature, which makes them well suited to the indoor model." Option B matches.',
          },
          {
            id: 'rd-010-p3-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Staple crops such as wheat, rice and potatoes are bulky, cheap and hungry for _______, so they cannot yet be grown profitably in a tower.',
            acceptableAnswers: ['light'],
            explanation:
              'The fourth paragraph describes staples as "bulky, cheap and hungry for light." The missing word is "light".',
          },
          {
            id: 'rd-010-p3-q12',
            type: 'tfng',
            prompt:
              'Defenders argue that the aim of vertical farming is to relieve the wheat field rather than replace it.',
            answer: 'true',
            explanation:
              'The fifth paragraph states that "the purpose of vertical farming is not to replace the wheat field but to relieve it," freeing land and water for staples. This supports the statement, so it is True.',
          },
          {
            id: 'rd-010-p3-q13',
            type: 'tfng',
            prompt:
              'The passage predicts that vertical farming will completely replace traditional farms within ten years.',
            answer: 'not-given',
            explanation:
              'The final paragraph predicts vertical farming will be "one tool among many rather than a single solution" and explicitly says "it will not abolish the farm," but it gives no timescale such as ten years for any change. A specific ten-year prediction is not made, so the answer is Not Given.',
          },
        ],
      },
    ],
  },
]
