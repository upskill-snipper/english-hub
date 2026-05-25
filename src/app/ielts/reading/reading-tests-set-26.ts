// ─── IELTS Academic Reading — practice item bank (Set 26) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: urban green spaces and
// the heat-island effect / the chemistry of bread-making / how memory works and
// why we forget.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Sentence Endings (Passage 3),
// alongside the usual mix of True/False/Not Given, multiple choice and
// sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_26: ReadingTest[] = [
  {
    id: 'rd-academic-026',
    title: 'Academic Reading — Practice Test 26',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-026-p1',
        title: 'The Green City',
        body: `For most of the history of town planning, parks and gardens were treated as ornaments: pleasant places to walk on a Sunday, but a luxury to be trimmed from the budget whenever money was short. That view is now changing fast. A growing body of research has reframed urban green space not as decoration but as infrastructure, a working part of the city as essential to its health as its drains or its power lines. Trees, lawns and planted corridors, it turns out, quietly perform a range of jobs that engineers would otherwise have to solve with concrete and steel, and they do so while costing comparatively little to maintain.

The clearest of these jobs concerns temperature. A dense district of buildings and roads behaves quite differently from open countryside. Dark surfaces such as asphalt and brick absorb the sun's heat through the day and release it slowly after dark, while the sheer mass of masonry stores warmth that never fully escapes overnight. Add the heat thrown out by traffic, air conditioning and industry, and a large city can run several degrees warmer than the fields around it, a difference known as the urban heat island. The effect is strongest on still summer nights, exactly when residents most need relief, and it can turn a heatwave from an inconvenience into a danger for the elderly and the unwell.

Vegetation pushes back against this warming in two distinct ways. The first is shade: a mature tree intercepts sunlight before it can strike and heat the pavement beneath, so the surface and the air above it stay cooler. The second is subtler. Plants draw water up through their roots and release it as vapour from their leaves, a process called transpiration, and because turning liquid water into vapour absorbs heat, the air around a stand of greenery is measurably chilled. A well-planted park can be several degrees cooler than the treeless streets that surround it, and that pocket of coolness spills outward into the neighbouring blocks.

The benefits extend well beyond comfort on a hot day. Leaves trap airborne dust and some pollutant gases, modestly improving the air. Roots and soil soak up rainfall that would otherwise sheet off hard surfaces and overwhelm the drains, reducing the risk of flash flooding after a storm. There are gains for the mind as well as the body: numerous studies report that people with easy access to green space tend to be more physically active, recover faster from illness and report lower levels of stress, although untangling cause from effect in such findings is notoriously difficult. Greenery also shelters wildlife, from insects to birds, that would struggle to survive in a landscape of glass and tarmac.

To deliver these gains across a whole city, however, isolated parks are not enough. Planners increasingly think in terms of green corridors: continuous ribbons of vegetation, often following rivers, canals or disused railway lines, that thread through the built-up area and link one patch of habitat to the next. For wildlife, such corridors are vital, because an animal stranded in a single small park is cut off, whereas a connected network allows species to move, feed and breed across a far larger territory. For people, the same corridors double as walking and cycling routes, offering a way to cross the city on foot that is cooler, quieter and safer than the road.

Yet the distribution of all these advantages is rarely even, and this has become one of the central concerns of modern planning. Wealthier districts tend to have more and better-maintained green space, while poorer neighbourhoods, which often suffer the worst air and the fiercest heat, may have least of all. Closing that gap is not simply a matter of planting more trees, for green space can be a mixed blessing: when a run-down area is suddenly made attractive, rents may rise and long-standing residents be priced out, the very people the improvement was meant to help. Designing parks that serve the communities already living beside them, rather than displacing them, is among the hardest problems the green city must solve.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-026-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Shade and transpiration: two ways plants cool the air' },
              { key: 'ii', label: 'Why a city runs hotter than the countryside' },
              { key: 'iii', label: 'From ornament to infrastructure: a change of view' },
              { key: 'iv', label: 'The uneven sharing of green, and who loses out' },
              { key: 'v', label: 'How parks raise the value of every nearby home' },
              { key: 'vi', label: 'Linking the patches: the case for green corridors' },
              { key: 'vii', label: 'Benefits beyond heat: air, floods, health and wildlife' },
              { key: 'viii', label: 'The cost of maintaining public gardens' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'ii' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'iv' },
            ],
            explanation:
              'A describes the shift from treating green space "as decoration" to seeing it as "infrastructure" (iii). B explains the urban heat island — why "a large city can run several degrees warmer than the fields around it" (ii). C sets out shade and transpiration as the two ways "Vegetation pushes back against this warming" (i). D lists benefits "beyond comfort" — air, flooding, health and wildlife (vii). E argues for "green corridors" linking isolated patches (vi). F covers the uneven distribution of green space and who "loses out" (iv). Heading v (parks raising the value of every nearby home) is a distractor — the passage instead warns rising rents can displace residents; heading viii (the cost of maintenance) is a distractor never developed.',
          },
          {
            id: 'rd-026-p1-q2',
            type: 'tfng',
            prompt:
              'Town planners have traditionally regarded parks and gardens as an essential service rather than a luxury.',
            answer: 'false',
            explanation:
              'Paragraph A says that for most of planning history green space was "a luxury to be trimmed from the budget whenever money was short," and that the view of it as essential infrastructure is "now changing fast." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-026-p1-q3',
            type: 'tfng',
            prompt: 'The urban heat island effect is at its most intense on still summer nights.',
            answer: 'true',
            explanation:
              'Paragraph B states that "The effect is strongest on still summer nights, exactly when residents most need relief." This matches the statement, so it is True.',
          },
          {
            id: 'rd-026-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Plants draw up water and release it as vapour from their leaves, a heat-absorbing process called _______.',
            acceptableAnswers: ['transpiration'],
            explanation:
              'Paragraph C describes plants releasing water vapour "from their leaves, a process called transpiration." The required word is "transpiration".',
          },
          {
            id: 'rd-026-p1-q5',
            type: 'mcq',
            prompt:
              'According to paragraph C, why does the air around a stand of greenery become cooler through transpiration?',
            options: [
              'Because the leaves physically block the wind from the area',
              'Because turning liquid water into vapour absorbs heat from the air',
              'Because the roots release cold water directly into the soil',
              'Because shade from the canopy stops sunlight reaching the leaves',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C explains that "because turning liquid water into vapour absorbs heat, the air around a stand of greenery is measurably chilled." Option B matches. Shade (option D) is described as a separate mechanism, not the cause of transpirational cooling.',
          },
          {
            id: 'rd-026-p1-q6',
            type: 'mcq',
            prompt:
              'Why does the passage argue that isolated parks are not enough for a whole city?',
            options: [
              'Because single parks are too expensive for most cities to build',
              'Because a connected network lets wildlife move, feed and breed across a larger area, unlike an animal stranded in one small park',
              'Because isolated parks attract too many visitors and become overcrowded',
              'Because parks must always be built beside rivers or canals to function',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E says "an animal stranded in a single small park is cut off, whereas a connected network allows species to move, feed and breed across a far larger territory." Option B matches this reasoning for green corridors.',
          },
          {
            id: 'rd-026-p1-q7',
            type: 'tfng',
            prompt:
              'Improving green space in a run-down area can sometimes lead to existing residents being priced out.',
            answer: 'true',
            explanation:
              'Paragraph F warns that "when a run-down area is suddenly made attractive, rents may rise and long-standing residents be priced out, the very people the improvement was meant to help." This matches the statement, so it is True.',
          },
          {
            id: 'rd-026-p1-q8',
            type: 'tfng',
            prompt:
              'Green corridors built along disused railway lines cost less to create than those that follow rivers.',
            answer: 'not-given',
            explanation:
              'Paragraph E mentions corridors following "rivers, canals or disused railway lines" but makes no comparison of the cost of building one type versus another. There is no information to confirm or contradict the statement, so it is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-026-p2',
        title: 'The Chemistry of a Loaf',
        body: `A loaf of bread is one of the oldest of all manufactured foods, and at first glance one of the simplest: flour, water, salt and a little yeast, worked together and baked. Yet inside that plain list of ingredients a remarkable sequence of chemical transformations takes place, and the difference between a dense, heavy brick and a light, airy loaf comes down to whether the baker has managed those transformations well. Bread-making is, in the most literal sense, applied chemistry, even though for thousands of years the bakers who practised it had no notion of the molecules they were so skilfully manipulating.

Everything begins with flour, and in particular with the proteins it contains. Wheat flour holds two proteins, glutenin and gliadin, that on their own do very little. The moment water is added and the dough is worked, however, these two proteins link up to form a third substance, gluten, an elastic, stretchy network that gives dough its characteristic springy feel. It is this network that makes wheat almost uniquely suited to bread. Kneading the dough develops the gluten further, lining up the tangled protein strands into long, ordered chains, which is why a well-kneaded dough is smooth and resilient while an under-worked one tears easily and will not hold its shape.

The role of the gluten becomes clear only once the second great process, fermentation, gets under way. Yeast is a living, single-celled fungus, and when it is mixed into a warm, moist dough it begins to feed on the sugars present in the flour. As it feeds, it gives off two by-products: alcohol, most of which later evaporates in the oven, and carbon dioxide gas. It is this gas that does the crucial work. Bubbles of carbon dioxide form throughout the dough and try to escape, but the elastic gluten network traps them, stretching around each bubble like the skin of a balloon. Trapped and expanding, the bubbles cause the whole mass to swell and rise, and it is they that give a finished loaf its open, holey crumb. Without gluten to hold the gas, the dough would simply leak it away and stay flat.

Fermentation does more than inflate the dough; it also builds flavour, which is why time matters so much to a good loaf. A dough left to rise slowly, often in a cool place over many hours, develops a far deeper and more complex taste than one rushed through in a warm room. The reason is that yeast is not the only organism at work. Bread doughs, and especially the traditional starters used to make sourdough, also harbour populations of bacteria that produce mild acids as they feed. These acids contribute the pleasant tang of a good sourdough and, as a useful side effect, help to preserve the bread and slow the growth of mould. The baker who hurries fermentation trades flavour for speed.

When the risen dough finally goes into a hot oven, a last burst of activity precedes the setting of the loaf. The sudden heat makes the trapped gas expand sharply and drives the yeast to a brief frenzy of activity before the rising temperature kills it, so the loaf leaps upward in its first minutes in the oven, an effect bakers call oven spring. Then, as the interior approaches the temperature of boiling water, two things happen that fix the structure permanently: the starches in the flour absorb water and stiffen, and the gluten proteins are cooked firm, so that the soft, stretchy dough is transformed into the set, sliceable crumb of finished bread.

The crust is a different story, governed by a reaction that needs much higher temperatures than the moist interior can ever reach. Where the dry surface of the loaf climbs well above the boiling point of water, the sugars and proteins there react together in a cascade of changes known as the Maillard reaction. This is the same browning process that colours a seared steak or roasted coffee, and it generates hundreds of new aromatic compounds along with the deep golden-brown colour of a good crust. It is not, despite a common confusion, the same as caramelisation, which involves sugars alone; the Maillard reaction requires proteins as well, and it is largely responsible for the rich, toasty smell of bread fresh from the oven.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-026-p2-q1',
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
                text: 'a description of how two flour proteins combine to form gluten',
                answer: 'B',
              },
              {
                id: 'p2-i-2',
                text: 'the claim that bakers long practised their craft without knowing the chemistry involved',
                answer: 'A',
              },
              {
                id: 'p2-i-3',
                text: 'an explanation of why the crust differs from the inside of the loaf',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'the role of bacteria in developing flavour and helping to preserve the bread',
                answer: 'D',
              },
              {
                id: 'p2-i-5',
                text: 'an account of how trapped gas makes the dough rise',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → B, where glutenin and gliadin "link up to form a third substance, gluten." Item 2 → A: bakers "had no notion of the molecules they were so skilfully manipulating." Item 3 → F, which explains the crust is "governed by a reaction that needs much higher temperatures." Item 4 → D, on bacteria producing acids that add tang and "help to preserve the bread." Item 5 → C, where carbon dioxide bubbles are trapped by gluten and "cause the whole mass to swell and rise."',
          },
          {
            id: 'rd-026-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When water is added and the dough is worked, glutenin and gliadin link up to form _______, an elastic network.',
            acceptableAnswers: ['gluten'],
            explanation:
              'Paragraph B states that the two proteins "link up to form a third substance, gluten, an elastic, stretchy network." The required word is "gluten".',
          },
          {
            id: 'rd-026-p2-q3',
            type: 'mcq',
            prompt: 'According to paragraph B, what is the purpose of kneading the dough?',
            options: [
              'To add more water to the flour proteins',
              'To line up the tangled protein strands into long, ordered chains',
              'To kill any bacteria present in the flour',
              'To warm the dough so that the yeast can begin to feed',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says kneading "develops the gluten further, lining up the tangled protein strands into long, ordered chains," which makes the dough smooth and resilient. Option B matches.',
          },
          {
            id: 'rd-026-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: As yeast feeds on the sugars in the flour, it gives off alcohol and _______, the gas that makes the dough rise.',
            acceptableAnswers: ['carbon dioxide'],
            explanation:
              'Paragraph C states that yeast gives off "alcohol... and carbon dioxide gas," and that this gas does "the crucial work" of raising the dough. The required two words are "carbon dioxide".',
          },
          {
            id: 'rd-026-p2-q5',
            type: 'tfng',
            prompt:
              'A dough that is left to rise slowly over many hours develops a deeper flavour than one made quickly in a warm room.',
            answer: 'true',
            explanation:
              'Paragraph D says a dough "left to rise slowly, often in a cool place over many hours, develops a far deeper and more complex taste than one rushed through in a warm room." This matches the statement, so it is True.',
          },
          {
            id: 'rd-026-p2-q6',
            type: 'tfng',
            prompt:
              "Sourdough bread is healthier to eat than bread made with ordinary baker's yeast.",
            answer: 'not-given',
            explanation:
              'Paragraph D notes that the acids in sourdough add tang and help slow mould, but the passage never compares the healthiness of sourdough with that of ordinary yeasted bread. There is no information to support or contradict the statement, so it is Not Given.',
          },
          {
            id: 'rd-026-p2-q7',
            type: 'gap',
            prompt:
              'Complete the phrase with TWO words from the passage: The sudden upward leap of the loaf in its first minutes in the oven is an effect bakers call _______.',
            acceptableAnswers: ['oven spring'],
            explanation:
              'Paragraph E describes the loaf leaping upward in its first minutes "in the oven, an effect bakers call oven spring." The required two words are "oven spring".',
          },
          {
            id: 'rd-026-p2-q8',
            type: 'mcq',
            prompt:
              'How, according to paragraph F, does the Maillard reaction differ from caramelisation?',
            options: [
              'The Maillard reaction occurs only inside the loaf, not on the crust',
              'The Maillard reaction needs proteins as well as sugars, whereas caramelisation involves sugars alone',
              'Caramelisation requires much higher temperatures than the Maillard reaction',
              'Caramelisation produces the toasty aroma while the Maillard reaction does not',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F states the Maillard reaction "is not... the same as caramelisation, which involves sugars alone; the Maillard reaction requires proteins as well." Option B matches this distinction.',
          },
          {
            id: 'rd-026-p2-q9',
            type: 'tfng',
            prompt: 'Bread is described as one of the oldest of all manufactured foods.',
            answer: 'true',
            explanation:
              'Paragraph A opens by calling a loaf of bread "one of the oldest of all manufactured foods, and at first glance one of the simplest." This matches the statement, so it is True.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-026-p3',
        title: 'Why We Forget',
        body: `Memory is so much a part of who we are that it is easy to imagine it as a kind of recording, a faithful library in which every experience is filed away and can, in principle, be played back. Decades of research have shown that this picture is almost entirely wrong. Memory is not a recording but a reconstruction, an active and rather unreliable process, and forgetting — far from being simply a fault in the machine — turns out to be one of its most important features. To understand why, it helps to break remembering down into the three stages that psychologists have long used to describe it.

The first stage is encoding, the process by which a fleeting experience is converted into a form the brain can keep. Encoding is highly selective: of the flood of sensory information arriving at any moment, only a small fraction is ever registered deeply enough to last, and attention is the gatekeeper. Information that is merely glimpsed, or attended to only weakly, may never be encoded at all, which is why we so often fail to recall a name we were told moments earlier. Crucially, material that is processed for its meaning, and linked to things we already know, is encoded far more strongly than material rehearsed only as empty sound. This is the single most useful fact about memory for any student: understanding something is a more powerful aid to remembering it than mere repetition.

The second stage is storage, the retention of encoded information over time, and it is here that the famous pattern of forgetting reveals itself. In the nineteenth century a German researcher, Hermann Ebbinghaus, ran a long and patient series of experiments on himself, memorising lists of nonsense syllables and then testing how much he could recall after various intervals. The curve he plotted has been confirmed many times since. Forgetting is rapid at first — a great deal is lost within the first hours and days — and then levels off, so that whatever survives the initial steep decline tends to endure far longer. This shape, the so-called forgetting curve, explains why information reviewed soon after it is first learned, before that early drop has run its course, is so much more likely to stick.

The third stage, retrieval, is the act of bringing a stored memory back into awareness, and it is far less reliable than it feels. A memory does not sit waiting to be read off a shelf; it is rebuilt each time it is recalled, assembled from fragments and patched with assumptions about what must have happened. Retrieval also depends heavily on cues. A memory that cannot be summoned in one setting may surface readily when the right reminder is present, which is why returning to a place, or catching a particular smell, can suddenly unlock recollections that seemed long gone. The information had not vanished; what was missing was the cue to reach it.

This reconstructive quality has a striking and unsettling consequence: memories can be not merely lost but false, recollections of events that never happened at all, held with complete sincerity. Because retrieval rebuilds rather than replays, a memory can absorb details suggested afterwards — by a leading question, a photograph, or another person's account — and weave them seamlessly into the original, with no inner signal to flag the join. Laboratory studies have repeatedly shown how readily confident, detailed memories of fictitious events can be planted in willing volunteers. The implications reach well beyond the laboratory, not least for the criminal courts, where the confident testimony of an eyewitness has long carried great weight and has sometimes proved to be sincerely, disastrously mistaken.

Given all this fallibility, it is tempting to regard forgetting as a pure defect, a failing to be corrected if only we could. The deeper truth is the opposite. A memory that retained everything would be not a blessing but a burden, clogged with the trivial and the outdated and unable to find what matters amid the clutter. Forgetting is, in large part, the mind's way of discarding the irrelevant and keeping the general lessons of experience while shedding the useless particulars. The rare individuals who genuinely cannot forget often describe their condition as exhausting rather than enviable. Far from being the enemy of a good memory, a certain amount of forgetting is what makes a useful one possible.`,
        questions: [
          // ── Matching Sentence Endings (5 items, 8 options → 3 distractors) = 5 marks ──
          {
            id: 'rd-026-p3-q1',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence with the correct ending, A–H, from the box below. There are more endings than sentences, so you will not use them all. Write the correct letter, A–H.',
            options: [
              { key: 'A', label: 'is processed for its meaning and linked to existing knowledge.' },
              { key: 'B', label: 'can be planted in willing volunteers in laboratory studies.' },
              { key: 'C', label: 'every experience is filed away and can be played back exactly.' },
              { key: 'D', label: 'is rapid at first and then levels off over time.' },
              { key: 'E', label: 'helps the mind discard the irrelevant and keep what matters.' },
              { key: 'F', label: 'depends heavily on cues such as a place or a smell.' },
              { key: 'G', label: 'can be deliberately switched off by an effort of will.' },
              { key: 'H', label: 'always improves the more often a fact is simply repeated.' },
            ],
            items: [
              {
                id: 'p3-e-1',
                text: 'Information is encoded most strongly when it',
                answer: 'A',
              },
              {
                id: 'p3-e-2',
                text: 'According to the forgetting curve, the loss of stored information',
                answer: 'D',
              },
              {
                id: 'p3-e-3',
                text: 'The retrieval of a memory',
                answer: 'F',
              },
              {
                id: 'p3-e-4',
                text: 'Confident, detailed memories of events that never happened',
                answer: 'B',
              },
              {
                id: 'p3-e-5',
                text: 'A certain amount of forgetting is useful because it',
                answer: 'E',
              },
            ],
            explanation:
              'Item 1 → A: material "processed for its meaning, and linked to things we already know, is encoded far more strongly" (paragraph B). Item 2 → D: forgetting "is rapid at first... and then levels off" (paragraph C). Item 3 → F: retrieval "depends heavily on cues," such as a place or a smell (paragraph D). Item 4 → B: studies show "confident, detailed memories of fictitious events can be planted in willing volunteers" (paragraph E). Item 5 → E: forgetting is "the mind\'s way of discarding the irrelevant and keeping the general lessons of experience" (paragraph F). Endings C, G and H are distractors the passage either rejects or never states.',
          },
          {
            id: 'rd-026-p3-q2',
            type: 'tfng',
            prompt:
              'Memory works like a faithful recording that plays experiences back exactly as they happened.',
            answer: 'false',
            explanation:
              'Paragraph A says that the picture of memory as "a recording" is "almost entirely wrong" and that memory is instead "a reconstruction, an active and rather unreliable process." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-026-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The first stage of memory, the conversion of a fleeting experience into a form the brain can keep, is called _______.',
            acceptableAnswers: ['encoding'],
            explanation:
              'Paragraph B opens: "The first stage is encoding, the process by which a fleeting experience is converted into a form the brain can keep." The required word is "encoding".',
          },
          {
            id: 'rd-026-p3-q4',
            type: 'mcq',
            prompt:
              'According to paragraph B, what does the passage call "the single most useful fact about memory for any student"?',
            options: [
              'That repeating information aloud is the best way to memorise it',
              'That understanding something aids remembering more powerfully than mere repetition',
              'That attention plays no real part in whether information is encoded',
              'That sensory information is always encoded deeply and permanently',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that the most useful fact for a student is that "understanding something is a more powerful aid to remembering it than mere repetition." Option B matches.',
          },
          {
            id: 'rd-026-p3-q5',
            type: 'gap',
            prompt:
              'Complete the name with ONE word from the passage: The nineteenth-century researcher who memorised lists of nonsense syllables to test his own recall was Hermann _______.',
            acceptableAnswers: ['Ebbinghaus'],
            explanation:
              'Paragraph C names "a German researcher, Hermann Ebbinghaus," who tested his recall of nonsense syllables. The required word is "Ebbinghaus".',
          },
          {
            id: 'rd-026-p3-q6',
            type: 'tfng',
            prompt:
              'Ebbinghaus carried out his memory experiments by testing large groups of student volunteers.',
            answer: 'false',
            explanation:
              'Paragraph C says Ebbinghaus "ran a long and patient series of experiments on himself," memorising the syllables and testing his own recall. This contradicts the statement that he tested groups of volunteers, so it is False.',
          },
          {
            id: 'rd-026-p3-q7',
            type: 'mcq',
            prompt:
              'Why, according to paragraph D, can returning to a place or catching a particular smell suddenly unlock a memory?',
            options: [
              'Because the memory had completely vanished and is being created anew',
              'Because retrieval depends on cues, and the right reminder provides the missing cue',
              'Because smells and places are stored separately from other memories',
              'Because such memories were never properly encoded in the first place',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D explains that retrieval "depends heavily on cues" and that the information "had not vanished; what was missing was the cue to reach it." Option B matches, and option A is explicitly contradicted.',
          },
          {
            id: 'rd-026-p3-q8',
            type: 'tfng',
            prompt:
              'The passage suggests that the confident testimony of eyewitnesses has sometimes been sincerely mistaken.',
            answer: 'true',
            explanation:
              'Paragraph E states that in the courts "the confident testimony of an eyewitness... has sometimes proved to be sincerely, disastrously mistaken." This matches the statement, so it is True.',
          },
          {
            id: 'rd-026-p3-q9',
            type: 'mcq',
            prompt:
              'What is the main point the passage makes about forgetting in its final paragraph?',
            options: [
              'Forgetting is a pure defect that science should aim to eliminate',
              'A memory that retained everything would be a burden, so some forgetting makes a useful memory possible',
              'People who cannot forget anything find the ability highly enviable',
              'Forgetting affects only trivial information and never anything important',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F argues that "A memory that retained everything would be not a blessing but a burden" and that "a certain amount of forgetting is what makes a useful one possible." Option B matches; the rare people who cannot forget describe it "as exhausting rather than enviable," ruling out option C.',
          },
          {
            id: 'rd-026-p3-q10',
            type: 'tfng',
            prompt:
              'Most people are aware at the time when a false detail has been woven into one of their memories.',
            answer: 'false',
            explanation:
              'Paragraph E says a memory can absorb suggested details "and weave them seamlessly into the original, with no inner signal to flag the join." This contradicts the idea that people are aware of the join, so it is False.',
          },
        ],
      },
    ],
  },
]
