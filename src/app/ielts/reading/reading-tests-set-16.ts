// ─── IELTS Academic Reading — practice item bank (Set 16) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: fermentation and food
// preservation / the history of the bicycle / how animals use camouflage.
//
// This test is MATCHING-RICH. It contains three matching questions of three
// DIFFERENT variants: Matching Headings (Passage 1, with two distractor
// headings), Matching Features — statements to named figures (Passage 2), and
// Matching Sentence Endings (Passage 3), alongside the usual mix of
// True/False/Not Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Ids are unique within the test ('rd-016-...').
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_16: ReadingTest[] = [
  {
    id: 'rd-academic-016',
    title: 'Academic Reading — Practice Test 16',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-016-p1',
        title: 'Fermentation and the Preservation of Food',
        body: `Long before anyone understood why it worked, people across the world had learned to keep food edible far beyond its natural life by allowing it, in a controlled way, to spoil. The paradox is only apparent. The decay that ruins a forgotten loaf or a carton of milk is driven by a riot of competing microbes, but if a single helpful group of organisms can be encouraged to dominate quickly, it transforms the food into a state that the harmful microbes can no longer invade. This is the quiet logic behind fermentation, a process that gave the ancient world bread, beer, cheese, wine and a long list of pickled vegetables, and that for most of human history was the closest thing there was to a refrigerator.

At the heart of the process are micro-organisms, chiefly certain bacteria and yeasts, that feed on the sugars present in the raw ingredient. As they consume these sugars they release waste products of their own, and it is these by-products, rather than the microbes themselves, that do the preserving. Lactic acid bacteria, the workhorses of pickling, flood their surroundings with acid until the food becomes too sour for rival organisms to tolerate. Yeasts, by contrast, convert sugar into alcohol and carbon dioxide; the alcohol in wine and beer is itself a preservative, while the gas is what lifts a loaf of bread. In every case a hostile chemical environment is created by the very creatures that thrive in it, and the spoilage organisms that would otherwise flourish are shut out. The principle is the same whether the food in question is a vegetable, a grain or the milk of an animal: a single helpful population is encouraged, the conditions it creates suppress everything else, and a perishable ingredient is turned into one that will keep for months.

For thousands of years this was achieved entirely by accident and instinct. A cook who left milk in a warm place and found it had thickened into something tangy and keepable did not know that bacteria were responsible; the knowledge passed down was practical, not theoretical. The decisive shift came in the nineteenth century, when the French chemist Louis Pasteur demonstrated that fermentation was not a purely chemical reaction, as many of his contemporaries believed, but the work of living micro-organisms. Once it was understood that specific organisms produced specific results, fermentation could be studied, controlled and deliberately improved rather than merely hoped for.

That understanding allowed producers to abandon their reliance on whatever microbes happened to be floating in the air. Today a cheesemaker or brewer typically adds a starter culture, a carefully selected population of the desired organisms, at the very beginning. By introducing a large number of the right microbes from the outset, the producer ensures that these organisms win the race for the available sugars before any unwanted competitor can establish itself, and the result is far more consistent than anything the older, chancier methods could promise. The taste of a traditional regional cheese, once an unrepeatable accident of local conditions, can now be reproduced reliably batch after batch.

It would be a mistake, however, to think of fermentation as merely a means of keeping food from rotting. The same microbial activity that preserves a food also transforms it, often creating flavours and textures prized in their own right. The sharp complexity of a mature cheese, the sourness of yoghurt, the deep savoury notes of soy sauce and the effervescence of sparkling drinks are all products of fermentation, and many would be impossible to manufacture by any other route. Foods that began as a way of surviving the winter became delicacies, sought out for their taste rather than their keeping qualities.

In recent decades fermented foods have attracted attention for a further reason. Researchers studying the community of bacteria that lives in the human gut have suggested that the live cultures in foods such as yoghurt and certain pickles may benefit digestion and general health, though firm conclusions are still some way off and many popular claims run well ahead of the evidence. Much of the difficulty lies in the sheer complexity of the gut, where hundreds of species interact in ways that are only beginning to be mapped, so that isolating the contribution of any single fermented food is far from straightforward. Whatever that research eventually concludes, the older achievement is beyond dispute: by harnessing the appetites of microbes, our ancestors found a way to carry the harvest of one season safely into the next, and in doing so created some of the most distinctive flavours on the human table.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-016-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A flavour worth seeking for its own sake' },
              { key: 'ii', label: 'The discovery that living things were at work' },
              { key: 'iii', label: 'Why fermented foods are cheaper to produce' },
              { key: 'iv', label: 'Controlled spoilage as an early form of preservation' },
              { key: 'v', label: 'How chosen cultures make the result reliable' },
              { key: 'vi', label: 'The microbes and the by-products that protect the food' },
              { key: 'vii', label: 'A possible benefit still under investigation' },
              { key: 'viii', label: 'The decline of traditional regional cheeses' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iv' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'vi' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'v' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'i' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vii' },
            ],
            explanation:
              'A introduces the "quiet logic" of letting food spoil "in a controlled way" to preserve it (iv). B explains the micro-organisms and, crucially, that "it is these by-products, rather than the microbes themselves, that do the preserving" (vi). C recounts Pasteur showing fermentation "was... the work of living micro-organisms" (ii). D describes adding "a starter culture" so the right organisms "win the race" and the result is "far more consistent" (v). E argues fermentation also "transforms" food so that foods "became delicacies, sought out for their taste" (i). F covers gut-bacteria research whose "firm conclusions are still some way off" (vii). Heading iii ("cheaper to produce") is a distractor the passage never claims; heading viii ("the decline of traditional regional cheeses") is a distractor — D actually says such cheeses can now be reproduced reliably, not that they are declining.',
          },
          {
            id: 'rd-016-p1-q2',
            type: 'tfng',
            prompt:
              'In fermentation, it is the by-products released by the microbes, rather than the microbes themselves, that preserve the food.',
            answer: 'true',
            explanation:
              'Paragraph B states that as the organisms consume sugars "they release waste products of their own, and it is these by-products, rather than the microbes themselves, that do the preserving." This matches the statement exactly, so it is True.',
          },
          {
            id: 'rd-016-p1-q3',
            type: 'tfng',
            prompt:
              'Before the nineteenth century, cooks who fermented food understood that bacteria were responsible for the change.',
            answer: 'false',
            explanation:
              'Paragraph C says a cook who soured milk "did not know that bacteria were responsible; the knowledge passed down was practical, not theoretical." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-016-p1-q4',
            type: 'tfng',
            prompt:
              'Pasteur was the first scientist to recommend adding a starter culture to milk when making cheese.',
            answer: 'not-given',
            explanation:
              'Paragraph C credits Pasteur with demonstrating that fermentation is the work of living micro-organisms, and paragraph D discusses starter cultures used "today," but the passage never says Pasteur recommended adding one or that he was the first to do so. There is no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-016-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Lactic acid bacteria preserve pickled vegetables by making their surroundings too _______ for rival organisms to tolerate.',
            acceptableAnswers: ['sour'],
            explanation:
              'Paragraph B states that lactic acid bacteria "flood their surroundings with acid until the food becomes too sour for rival organisms to tolerate." The required word is "sour".',
          },
          {
            id: 'rd-016-p1-q6',
            type: 'mcq',
            prompt:
              'According to the passage, why does adding a starter culture make the finished product more consistent?',
            options: [
              'It removes all of the sugar from the raw ingredient before fermentation begins.',
              'It kills the harmful microbes directly with heat at the start of the process.',
              'It lets the chosen microbes win the race for the sugars before competitors can establish themselves.',
              'It allows the producer to rely on the microbes already floating in the air.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D explains that by introducing many of the right microbes "from the outset, the producer ensures that these organisms win the race for the available sugars before any unwanted competitor can establish itself," giving a more consistent result. Option C captures this; option D is the opposite of what producers now do.',
          },
          {
            id: 'rd-016-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with TWO words from the passage: To control fermentation reliably, a modern cheesemaker or brewer adds a _______ — a chosen population of the desired organisms — at the very beginning.',
            acceptableAnswers: ['starter culture'],
            explanation:
              'Paragraph D states that a producer "typically adds a starter culture, a carefully selected population of the desired organisms, at the very beginning." The required answer is "starter culture".',
          },
          {
            id: 'rd-016-p1-q8',
            type: 'mcq',
            prompt: 'What point does the writer make about fermented foods in paragraph E?',
            options: [
              'They are valued only for their ability to last a long time.',
              'They are prized for flavours and textures that other methods cannot produce.',
              'They taste better when the fermentation happens entirely by accident.',
              'They were never eaten as delicacies until very recently.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says the microbial activity "also transforms" the food, creating "flavours and textures prized in their own right," many of which "would be impossible to manufacture by any other route." Option B reflects this; the paragraph explicitly warns against thinking of fermentation as "merely a means of keeping food from rotting," which rules out option A.',
          },
          {
            id: 'rd-016-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Pasteur showed that fermentation was not a purely chemical reaction but the work of living _______.',
            acceptableAnswers: ['micro-organisms', 'microorganisms', 'micro organisms'],
            explanation:
              'Paragraph C states that Pasteur "demonstrated that fermentation was not a purely chemical reaction... but the work of living micro-organisms." The required answer is "micro-organisms" (spelling variants accepted).',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-016-p2',
        title: 'The Long Road to the Modern Bicycle',
        body: `The bicycle seems so obvious a machine that it is easy to assume it was invented in a single stroke. In fact the design we ride today is the survivor of nearly a century of false starts, each solving one problem while creating another, and the people who contributed to it rarely guessed where their work would lead.

The earliest ancestor of the bicycle had no pedals at all. Around 1817 the German inventor Karl Drais built a two-wheeled wooden machine that the rider straddled and pushed along the ground with the feet, steering by a pivoting front wheel. Drais conceived it less as a sporting device than as a practical answer to a particular crisis: a recent volcanic eruption had ruined harvests across Europe, horses were dying of starvation, and a vehicle that needed no feeding had an obvious appeal. His "running machine" attracted brief curiosity but was soon dismissed as a toy, partly because riding it on the rough roads of the day was so uncomfortable.

The next leap was to make the rider's effort drive the machine rather than merely balance it. In the 1860s pedals were attached directly to the front wheel, producing the vehicle that became known as the velocipede or, more memorably, the boneshaker — a name that records exactly how it felt on cobbled streets, for its iron-banded wooden wheels transmitted every bump straight to the rider. Yet the boneshaker contained the seed of a serious limitation. Because the pedals turned the wheel directly, the machine moved forward only as far as the wheel's circumference with each turn of the pedals, so the sole way to go faster was to enlarge the front wheel.

This logic produced the strange and now-iconic machine of the 1870s, with an enormous front wheel and a tiny rear one. The engineer James Starley was among those who refined it into a lighter, faster vehicle, replacing heavy wooden parts with slender metal ones and tensioned wire spokes that could carry a large wheel at a fraction of the old weight. For a decade it was the height of fashion among young and athletic men. But it was also alarming. The rider perched high above the front axle, and the slightest obstacle could pitch him head first over the handlebars, an accident so common it earned its own name. The machine was fast but dangerous, and almost impossible for older or less agile riders to mount at all, since climbing aboard meant scrambling up to a saddle set well above head height.

The decisive breakthrough was the chain. Rather than fixing the pedals to the wheel, a designer could connect them by a chain to a toothed wheel on the rear axle, and by making that rear cog smaller than the one the pedals turned, a single push of the pedals could spin the wheel more than once. Speed was now a matter of gearing rather than of wheel size, and the front wheel could shrink to something safe. The result, which appeared in the 1880s and was widely promoted by the manufacturer John Kemp Starley — a nephew of James — was christened the "safety bicycle." With two wheels of equal and modest size, a chain drive and, soon afterwards, air-filled rubber tyres to cushion the ride, it is recognisably the bicycle of today.

The social consequences were greater than the engineering. The safety bicycle was cheap enough for ordinary working people and stable enough for almost anyone to learn, and it spread with astonishing speed in the 1890s. For the first time, individuals of modest means could travel several miles on a whim, without a horse and without a railway timetable, and at a moment of their own choosing rather than the railway company's. Historians have argued that the bicycle widened the area in which people could look for work or a marriage partner, loosening the grip of the village on those born within it. It played a particular part in the lives of women, for whom it offered a rare and conspicuous form of independent movement, and it even influenced what they wore, encouraging looser and more practical clothing than the fashions of the day. A machine that had begun as a curiosity for the wealthy had, within a single generation, quietly helped to reshape everyday life.`,
        questions: [
          // ── Matching Features — statements to named figures (5 items) = 5 marks ──
          {
            id: 'rd-016-p2-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of people below. Match each statement to the person it correctly describes according to the passage. Write the correct letter, A, B, C or D. NB You may use any letter more than once, and there are more people than you need.',
            options: [
              { key: 'A', label: 'Karl Drais' },
              { key: 'B', label: 'James Starley' },
              { key: 'C', label: 'John Kemp Starley' },
              { key: 'D', label: 'Louis Pasteur' },
            ],
            items: [
              {
                id: 'p2-f-1',
                text: 'built an early two-wheeled machine that the rider pushed along with the feet',
                answer: 'A',
              },
              {
                id: 'p2-f-2',
                text: 'helped refine the machine with the very large front wheel',
                answer: 'B',
              },
              {
                id: 'p2-f-3',
                text: 'widely promoted the vehicle that became known as the safety bicycle',
                answer: 'C',
              },
              {
                id: 'p2-f-4',
                text: 'was responding to a crisis caused by a volcanic eruption and dying horses',
                answer: 'A',
              },
              {
                id: 'p2-f-5',
                text: 'was a nephew of an earlier bicycle engineer',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → A: Drais "built a two-wheeled wooden machine that the rider straddled and pushed along the ground with the feet." Item 2 → B: "The engineer James Starley was among those who refined it" — "it" being the high-wheeled machine of the 1870s. Item 3 → C: the safety bicycle "was widely promoted by the manufacturer John Kemp Starley." Item 4 → A: Drais designed his machine after "a recent volcanic eruption had ruined harvests... horses were dying of starvation." Item 5 → C: John Kemp Starley is identified as "a nephew of James." Option D (Louis Pasteur) is a distractor — he is not mentioned in this passage at all.',
          },
          {
            id: 'rd-016-p2-q2',
            type: 'tfng',
            prompt: 'Karl Drais’s machine of around 1817 had pedals attached to its front wheel.',
            answer: 'false',
            explanation:
              'Paragraph B states that Drais\'s "earliest ancestor of the bicycle had no pedals at all" and that the rider "pushed [it] along the ground with the feet." Pedals on the front wheel appeared only in the 1860s (paragraph C). The statement is therefore False.',
          },
          {
            id: 'rd-016-p2-q3',
            type: 'tfng',
            prompt:
              'The nickname “boneshaker” reflected how uncomfortable the velocipede was to ride on cobbled streets.',
            answer: 'true',
            explanation:
              'Paragraph C says the velocipede was "known as the velocipede or, more memorably, the boneshaker — a name that records exactly how it felt on cobbled streets, for its iron-banded wooden wheels transmitted every bump straight to the rider." This supports the statement, so it is True.',
          },
          {
            id: 'rd-016-p2-q4',
            type: 'mcq',
            prompt:
              'According to the passage, why did the front wheel of the boneshaker have to be enlarged to go faster?',
            options: [
              'Because a larger wheel was lighter and easier to turn',
              'Because the pedals were joined to the wheel by a chain',
              'Because the pedals turned the wheel directly, so each turn moved it only one circumference',
              'Because a bigger wheel made the machine safer to ride',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C explains that "because the pedals turned the wheel directly, the machine moved forward only as far as the wheel\'s circumference with each turn of the pedals, so the sole way to go faster was to enlarge the front wheel." Option C states this; the chain (option B) was the later solution that removed this constraint.',
          },
          {
            id: 'rd-016-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The decisive breakthrough that allowed the front wheel to shrink was the _______, which connected the pedals to a cog on the rear axle.',
            acceptableAnswers: ['chain'],
            explanation:
              'Paragraph E opens, "The decisive breakthrough was the chain," and explains that connecting the pedals "by a chain to a toothed wheel on the rear axle" meant speed depended on gearing, so "the front wheel could shrink to something safe." The required word is "chain".',
          },
          {
            id: 'rd-016-p2-q6',
            type: 'mcq',
            prompt: 'What made the high-wheeled machine of the 1870s so dangerous?',
            options: [
              'Its chain drive frequently broke under the rider’s weight.',
              'The rider sat high above the front axle and could be thrown forward over the handlebars.',
              'Its air-filled tyres burst easily on rough roads.',
              'It was too heavy for most riders to control downhill.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says "The rider perched high above the front axle, and the slightest obstacle could pitch him head first over the handlebars." Option B captures this. The high-wheeler had no chain drive (that came later, paragraph E), so option A is wrong.',
          },
          {
            id: 'rd-016-p2-q7',
            type: 'gap',
            prompt:
              'Complete the summary with TWO words from the passage: Soon after the chain drive appeared, _______ tyres were added to cushion the ride, giving the machine we recognise today.',
            acceptableAnswers: ['air-filled', 'rubber', 'air-filled rubber'],
            explanation:
              'Paragraph E states the safety bicycle gained, "soon afterwards, air-filled rubber tyres to cushion the ride." The two-word answer is "air-filled" (also accepted: "rubber", or the full "air-filled rubber").',
          },
          {
            id: 'rd-016-p2-q8',
            type: 'tfng',
            prompt:
              'The passage states that the safety bicycle spread slowly because it remained too expensive for ordinary people.',
            answer: 'false',
            explanation:
              'Paragraph F says the safety bicycle "was cheap enough for ordinary working people and stable enough for almost anyone to learn, and it spread with astonishing speed in the 1890s." The statement reverses both the price and the speed, so it is False.',
          },
          {
            id: 'rd-016-p2-q9',
            type: 'tfng',
            prompt: 'Karl Drais earned a large fortune from sales of his running machine.',
            answer: 'not-given',
            explanation:
              'Paragraph B says the running machine "attracted brief curiosity but was soon dismissed as a toy," but the passage says nothing about how much money, if any, Drais made from it. There is no information either way, so the answer is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-016-p3',
        title: 'The Many Arts of Animal Camouflage',
        body: `To survive, an animal must often avoid being seen — by the prey it hopes to ambush, or by the predator that hopes to eat it. Over millions of years natural selection has produced an extraordinary range of solutions to this single problem, and the word "camouflage" turns out to cover not one trick but several quite distinct strategies, each defeating the eye in a different way.

The most familiar is simple background matching, in which an animal's colour and pattern resemble its usual surroundings so closely that it seems to melt into them. A green caterpillar on a green leaf, or a sandy-coloured lizard on desert rock, is hard to pick out because there is little contrast between the animal and what lies behind it. Background matching works best when an animal stays in one kind of place, for an animal coloured to vanish against bark will stand out sharply the moment it strays onto pale sand or fresh green foliage. Some species have nonetheless taken the strategy to remarkable extremes; a few can even adjust their colour to suit a new background, as a flatfish does when it settles on the sea floor, sensing the tone beneath it and shifting its own markings to match within minutes.

A subtler method attacks not the animal's colour but its shape. The eye recognises a creature partly by its tell-tale outline, and a trick known as disruptive colouration breaks that outline up. Bold patches of contrasting colour, often placed at the very edge of the body, fool the observer into seeing several unrelated shapes rather than one animal. The stripes of many fish and the irregular blotches on a frog work in this way: paradoxically, a striking pattern can conceal better than a plain one, because it prevents the eye from assembling the parts into a recognisable whole.

A third strategy addresses a problem that pure colour-matching cannot solve. Light usually falls from above, so a solid-bodied animal lit from the top is brighter on its back and shadowed beneath, and that gradient of shading betrays its rounded form even when its colour matches the background. The answer, found in countless fish and many other animals, is countershading: the back is darker and the belly paler, so that the extra light on top and the shadow below cancel out and the animal appears flat and insubstantial. It is the visual opposite of the shading a painter would add to make an object look three-dimensional.

Some animals do not hide at all but instead disguise themselves as a specific object of no interest to a hungry eye. This is masquerade, and its targets are things a predator would simply ignore. A stick insect resembles a twig, certain caterpillars mimic bird droppings, and some butterflies, when their wings are folded, are all but indistinguishable from a dead leaf, complete with imitation veins and blemishes. Unlike background matching, masquerade can work even when the animal is in full view, because the observer sees it clearly but misidentifies it as something not worth a second glance.

Camouflage is not confined to the moment of stillness, however, and this points to its limits. Most of these methods fail the instant their owner moves, because motion is one of the strongest cues the eye possesses; a perfectly hidden insect gives itself away the moment it walks, which is why so many camouflaged animals will freeze for long periods and edge forward only by tiny degrees. There is, too, a constant evolutionary tension at work, for predators are under equal pressure to defeat the disguises of their prey, and a concealment that works against one hunter may fail against another that sees the world differently. The colours of flowers and insects that look plain to human eyes, for instance, can appear vividly patterned to creatures able to see ultraviolet light, so a disguise judged perfect by one observer may be glaringly obvious to another. Many predators, moreover, hunt by smell or by detecting heat, senses against which visual camouflage offers no protection at all. The result is not a fixed solution but an endless contest, in which every refinement on one side is eventually met by a counter-move on the other.`,
        questions: [
          // ── Matching Sentence Endings (5 items, 8 options → distractors) = 5 marks ──
          {
            id: 'rd-016-p3-q1',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence about camouflage strategies with the correct ending, A–H, from the list below, according to the passage. There are more endings than sentences, so you will not use them all. Write the correct letter, A–H.',
            options: [
              {
                key: 'A',
                label: 'breaks up the animal’s outline so the eye cannot assemble it into a whole.',
              },
              { key: 'B', label: 'works only when the animal is completely hidden from view.' },
              {
                key: 'C',
                label: 'cancels out the shading that would otherwise reveal a rounded body.',
              },
              {
                key: 'D',
                label: 'makes the animal resemble a specific object not worth a second glance.',
              },
              {
                key: 'E',
                label: 'relies on the animal’s colour and pattern resembling its surroundings.',
              },
              {
                key: 'F',
                label: 'is most effective when the animal moves quickly across open ground.',
              },
              {
                key: 'G',
                label: 'protects the animal against predators that hunt by smell or heat.',
              },
              {
                key: 'H',
                label: 'requires the animal to give off a warning colour to deter attackers.',
              },
            ],
            items: [
              { id: 'p3-e-1', text: 'Background matching', answer: 'E' },
              { id: 'p3-e-2', text: 'Disruptive colouration', answer: 'A' },
              { id: 'p3-e-3', text: 'Countershading', answer: 'C' },
              { id: 'p3-e-4', text: 'Masquerade', answer: 'D' },
              { id: 'p3-e-5', text: 'Visual camouflage in general', answer: 'B' },
            ],
            explanation:
              'Background matching → E: an animal\'s "colour and pattern resemble its usual surroundings so closely that it seems to melt into them." Disruptive colouration → A: bold edge patches make the observer "see several unrelated shapes rather than one animal," preventing the eye from assembling the parts. Countershading → C: darker back and paler belly mean "the extra light on top and the shadow below cancel out," hiding the rounded form. Masquerade → D: the animal disguises itself "as a specific object of no interest," misidentified "as something not worth a second glance." Visual camouflage in general → B: the final paragraph stresses these methods "fail the instant their owner moves" and offer "no protection at all" against smell or heat, i.e. they work only while the animal stays hidden from the eye. Endings F (effective during fast movement — the passage says the opposite), G (protects against smell/heat — the passage denies this) and H (warning colour) are distractors not supported by the text.',
          },
          {
            id: 'rd-016-p3-q2',
            type: 'tfng',
            prompt:
              'According to the passage, a bold, striking pattern can sometimes conceal an animal more effectively than a plain colour.',
            answer: 'true',
            explanation:
              'Paragraph C states: "paradoxically, a striking pattern can conceal better than a plain one, because it prevents the eye from assembling the parts into a recognisable whole." This supports the statement, so it is True.',
          },
          {
            id: 'rd-016-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The trick of breaking up an animal’s tell-tale outline with contrasting patches is called _______ colouration.',
            acceptableAnswers: ['disruptive'],
            explanation:
              'Paragraph C names "a trick known as disruptive colouration" that "breaks that outline up." The required word is "disruptive".',
          },
          {
            id: 'rd-016-p3-q4',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: In _______, an animal’s back is darker and its belly paler, so the light from above and the shadow below cancel out and the body looks flat.',
            acceptableAnswers: ['countershading'],
            explanation:
              'Paragraph D introduces "countershading: the back is darker and the belly paler, so that the extra light on top and the shadow below cancel out and the animal appears flat." The required word is "countershading".',
          },
          {
            id: 'rd-016-p3-q5',
            type: 'mcq',
            prompt:
              'How does masquerade differ from background matching, according to the passage?',
            options: [
              'Masquerade changes the animal’s colour to match the ground beneath it.',
              'Masquerade can succeed even when the animal is seen clearly, because it is mistaken for something dull.',
              'Masquerade works only at night, when shapes are harder to make out.',
              'Masquerade relies on the animal staying perfectly still in one type of habitat.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says that "Unlike background matching, masquerade can work even when the animal is in full view, because the observer sees it clearly but misidentifies it as something not worth a second glance." Option B states this contrast; colour-changing (option A) belongs to background matching in paragraph B.',
          },
          {
            id: 'rd-016-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A creature that uses masquerade, such as a stick insect, disguises itself as a _______ that a predator would simply ignore.',
            acceptableAnswers: ['twig'],
            explanation:
              'Paragraph E gives the example that "A stick insect resembles a twig." The required single word naming what the stick insect imitates is "twig".',
          },
          {
            id: 'rd-016-p3-q7',
            type: 'mcq',
            prompt:
              'Why does the writer say camouflage is "not a fixed solution but an endless contest"?',
            options: [
              'Because animals lose their camouflage as they grow older',
              'Because predators are under pressure to defeat their prey’s disguises, so each refinement is met by a counter-move',
              'Because most animals eventually abandon camouflage in favour of speed',
              'Because camouflage only ever evolves in prey, never in predators',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F describes "a constant evolutionary tension... for predators are under equal pressure to defeat the disguises of their prey," so that "every refinement on one side is eventually met by a counter-move on the other." Option B captures this idea.',
          },
          {
            id: 'rd-016-p3-q8',
            type: 'tfng',
            prompt:
              'Visual camouflage gives an animal effective protection against predators that hunt by smell or by detecting heat.',
            answer: 'false',
            explanation:
              'Paragraph F states that "Many predators hunt by smell or by detecting heat, senses against which visual camouflage offers no protection at all." The statement claims the opposite, so it is False.',
          },
          {
            id: 'rd-016-p3-q9',
            type: 'tfng',
            prompt:
              'The passage claims that background matching is the only camouflage strategy capable of fooling a predator.',
            answer: 'false',
            explanation:
              'The passage describes several distinct strategies — background matching, disruptive colouration, countershading and masquerade — and opens by saying camouflage "turns out to cover not one trick but several quite distinct strategies." The claim that background matching is the only effective strategy contradicts the whole passage, so it is False.',
          },
        ],
      },
    ],
  },
]
