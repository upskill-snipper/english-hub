// ─── IELTS Academic Reading — practice item bank (Set 8) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domains: how volcanoes form and are monitored /
// the history of map-making / behavioural economics and "nudges".
//
// One complete, carefully-checked test: 3 passages, 40 questions. Every answer
// is verifiable from the passage text and is justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_8: ReadingTest[] = [
  {
    id: 'rd-academic-008',
    title: 'Academic Reading — Practice Test 8',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-008-p1',
        title: 'How Volcanoes Are Born and Watched',
        body: `A volcano is, at its simplest, a place where the molten interior of the planet finds a path to the surface. Beneath the thin crust on which we live lies the mantle, a vast layer of rock so hot that it behaves, over long periods, almost like a thick fluid. Where this rock is heated further or where the pressure upon it is released, it can begin to melt, forming pockets of liquid rock called magma. Because magma is lighter than the solid material around it, it rises, collecting in chambers a few kilometres below the ground until it forces its way upward through cracks and weaknesses in the crust. The moment it breaks the surface it acquires a new name: lava.

Most of the world's volcanoes are not scattered at random but are strung along the edges of the great plates that make up the outer shell of the Earth. Where one plate slides beneath another, the descending slab drags water down with it, and this water lowers the melting point of the rock above, generating magma in abundance. The ring of volcanoes that encircles the Pacific Ocean, often called the Ring of Fire, marks precisely such a chain of plate boundaries. A smaller number of volcanoes, however, sit far from any plate edge. These are thought to be fed by narrow plumes of unusually hot rock rising from deep within the mantle, and the islands of Hawaii are the classic example. As a plate drifts slowly over one of these fixed hot spots, a line of volcanoes is created, the oldest lying furthest from the source.

Not all eruptions are alike, and the difference is largely a matter of chemistry. The crucial factor is the proportion of silica in the magma, because silica controls how easily the molten rock flows. Magma poor in silica is runny, and the gases dissolved within it escape gently, producing the rivers of glowing lava that can be filmed at close quarters. Magma rich in silica, by contrast, is stiff and sticky; the gases cannot escape easily and build up enormous pressure until the volcano clears its throat in a sudden, violent blast. It is these explosive eruptions, hurling ash and rock high into the atmosphere, that pose the gravest threat to human life.

Predicting such events has become one of the central tasks of modern geology, and although no scientist can yet name the day an eruption will occur, the warning signs are increasingly well understood. A volcano preparing to erupt is rarely silent. As fresh magma forces its way upward, it cracks the surrounding rock, generating swarms of tiny earthquakes that sensitive instruments can detect long before any human would feel them. Networks of seismometers placed around an active volcano allow geologists to trace the movement of magma as if they were listening to it climb.

Other clues are written on the surface of the mountain itself. The arrival of magma beneath a volcano causes the ground to swell, sometimes by no more than a few centimetres, and this subtle deformation can be measured with great precision. Instruments called tiltmeters register the faint tilting of the slopes, while satellites and ground-based receivers using the global positioning system track how points on the volcano move apart as it inflates. A bulge that grows steadily over weeks is a serious matter, for it suggests that pressure is accumulating below.

The gases that escape from a volcano offer a third line of evidence. Magma releases sulphur dioxide and carbon dioxide as it nears the surface, and a sudden change in the quantity or the mixture of these gases can signal that fresh magma has arrived from below. Scientists now measure these emissions both on the ground and from aircraft, and even from space. Taken on its own, no single sign is conclusive; an earthquake swarm may fade away, and a bulge may stop growing without an eruption following. The art of forecasting lies in weighing all the signals together.

The value of this work is not in doubt. When the Philippine volcano Pinatubo showed mounting unrest in 1991, careful monitoring persuaded the authorities to evacuate the surrounding area before the mountain erupted in one of the largest blasts of the century. Tens of thousands of people were moved to safety, and many lives were saved. Yet the same episode revealed the limits of the science, for the exact timing of the eruption remained uncertain until almost the final hours. Volcanoes, it seems, will surrender their secrets only so far, and the people who live in their shadow must learn to read the warnings and respect the doubt that remains.`,
        questions: [
          {
            id: 'rd-008-p1-q1',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Once molten rock breaks through the surface of the ground it is given a new name, _______.',
            acceptableAnswers: ['lava'],
            explanation:
              'The first paragraph states: "The moment it breaks the surface it acquires a new name: lava." The required word is "lava".',
          },
          {
            id: 'rd-008-p1-q2',
            type: 'tfng',
            prompt: 'Magma rises through the crust because it is lighter than the rock around it.',
            answer: 'true',
            explanation:
              'The first paragraph says: "Because magma is lighter than the solid material around it, it rises." This matches the statement, so it is True.',
          },
          {
            id: 'rd-008-p1-q3',
            type: 'mcq',
            prompt:
              'According to the passage, how does water help to create magma where one plate slides beneath another?',
            options: [
              'It cools the descending slab until it cracks apart.',
              'It lowers the melting point of the rock above the slab.',
              'It increases the pressure on the rock until it liquefies.',
              'It carries dissolved minerals up towards the surface.',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that the descending slab "drags water down with it, and this water lowers the melting point of the rock above, generating magma in abundance." Option B captures this.',
          },
          {
            id: 'rd-008-p1-q4',
            type: 'tfng',
            prompt: 'All of the world’s volcanoes are located at the boundaries between plates.',
            answer: 'false',
            explanation:
              'The second paragraph states that "a smaller number of volcanoes... sit far from any plate edge" and are fed by mantle plumes, giving Hawaii as an example. The word "all" makes the statement contradict the text, so it is False.',
          },
          {
            id: 'rd-008-p1-q5',
            type: 'tfng',
            prompt:
              'The hot spot that feeds the Hawaiian volcanoes moves steadily across the Pacific plate.',
            answer: 'false',
            explanation:
              'The second paragraph says a line of volcanoes forms "as a plate drifts slowly over one of these fixed hot spots." It is the plate that moves over a fixed hot spot, not the hot spot that moves, so the statement is False.',
          },
          {
            id: 'rd-008-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The way molten rock flows is controlled chiefly by the proportion of _______ it contains.',
            acceptableAnswers: ['silica'],
            explanation:
              'The third paragraph states: "The crucial factor is the proportion of silica in the magma, because silica controls how easily the molten rock flows." The missing word is "silica".',
          },
          {
            id: 'rd-008-p1-q7',
            type: 'mcq',
            prompt: 'Why are silica-rich eruptions especially dangerous?',
            options: [
              'The lava flows so quickly that people cannot escape it.',
              'The magma is so hot that it melts the surrounding rock.',
              'The trapped gases build up pressure until the volcano erupts violently.',
              'The eruptions continue for far longer than other types.',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph explains that silica-rich magma is "stiff and sticky; the gases cannot escape easily and build up enormous pressure until the volcano clears its throat in a sudden, violent blast." Option C matches this.',
          },
          {
            id: 'rd-008-p1-q8',
            type: 'tfng',
            prompt:
              'Scientists are now able to state in advance the exact day an eruption will happen.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that "no scientist can yet name the day an eruption will occur." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p1-q9',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: As magma forces its way upward it cracks the rock around it, producing swarms of tiny _______ that instruments can detect.',
            acceptableAnswers: ['earthquakes'],
            explanation:
              'The fourth paragraph says rising magma "cracks the surrounding rock, generating swarms of tiny earthquakes that sensitive instruments can detect." The required word is "earthquakes".',
          },
          {
            id: 'rd-008-p1-q10',
            type: 'mcq',
            prompt:
              'What does a slowly growing bulge on the side of a volcano suggest to geologists?',
            options: [
              'That an eruption has already begun underground.',
              'That pressure is building up beneath the volcano.',
              'That the volcano is becoming extinct.',
              'That gases are escaping harmlessly from the rock.',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph states that "a bulge that grows steadily over weeks is a serious matter, for it suggests that pressure is accumulating below." Option B is correct.',
          },
          {
            id: 'rd-008-p1-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Devices known as _______ register the faint tilting of a volcano’s slopes as the ground swells.',
            acceptableAnswers: ['tiltmeters'],
            explanation:
              'The fifth paragraph says: "Instruments called tiltmeters register the faint tilting of the slopes." The missing word is "tiltmeters".',
          },
          {
            id: 'rd-008-p1-q12',
            type: 'tfng',
            prompt:
              'A single warning sign on its own is enough for scientists to be certain an eruption will follow.',
            answer: 'false',
            explanation:
              'The sixth paragraph states that "no single sign is conclusive" and that "the art of forecasting lies in weighing all the signals together." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p1-q13',
            type: 'mcq',
            prompt:
              'What does the example of Mount Pinatubo in 1991 illustrate about volcano monitoring?',
            options: [
              'That monitoring can prevent a volcano from erupting at all.',
              'That monitoring can save lives but cannot fix the exact moment of an eruption.',
              'That gas measurements are more reliable than earthquake records.',
              'That evacuations are usually ordered too late to be useful.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph says monitoring led to an evacuation that saved many lives, "yet the same episode revealed the limits of the science, for the exact timing of the eruption remained uncertain until almost the final hours." Option B captures both points.',
          },
        ],
      },
      {
        id: 'rd-academic-008-p2',
        title: 'Drawing the World',
        body: `A map is a curious kind of object. It claims to show the world, yet it can never show the world as it truly is, for the surface it represents is curved while the page is flat, and the territory is vast while the sheet is small. Every map is therefore a compromise, a deliberate selection of what to include and what to leave out. The history of map-making, or cartography, is in large part the story of how people have negotiated that compromise, and of how their maps have reflected not only the knowledge of their age but also its assumptions about the shape and centre of the world.

The earliest surviving maps were not made to help travellers find their way. A clay tablet from ancient Babylon, scratched some two and a half thousand years ago, shows the city set within a ring of water and surrounded by distant lands drawn as simple triangles. It was less a practical guide than a picture of how the Babylonians imagined their place in the cosmos, with their own city firmly at the heart of it. This instinct to put oneself at the centre would prove remarkably persistent, and for centuries maps revealed as much about the beliefs of those who drew them as about the lands they depicted.

The Greeks brought a more measured spirit to the task. Aware that the Earth was a sphere, scholars in the ancient world grappled with the problem of representing a curved surface on a flat one, and they devised a grid of lines that allowed any place to be fixed by two numbers. The great achievement of this tradition was a treatise by the scholar Ptolemy, working in Egypt in the second century, who gathered the coordinates of thousands of places and explained how they might be plotted. His instructions were so careful that, more than a thousand years later, scholars were able to reconstruct his maps from the figures he had left behind.

Through the long centuries that followed in Europe, however, much of this learning was set aside. Many maps of the medieval period were arranged not to guide a traveller but to express a religious view of creation. The known continents were often squeezed into a circle, with the holy city of Jerusalem placed at the centre and unexplored regions filled with the images of strange beasts. Such maps were never intended to be measured against the ground; they were diagrams of meaning rather than instruments of navigation, and to judge them as failed attempts at accuracy is to misunderstand their purpose entirely.

Practical map-making was kept alive elsewhere, above all at sea. Sailors in the Mediterranean produced charts criss-crossed by lines radiating from compass points, designed to help a navigator hold a steady bearing from one port to the next. These charts were closely guarded, for an accurate map of a coastline or a safe harbour was a commercial secret of real value, and the captains who possessed one held an advantage over their rivals that they were anxious not to share.

The voyages of the fifteenth and sixteenth centuries transformed everything. As ships returned from continents that no existing map had shown, cartographers struggled to fit the swelling mass of new information onto the page. The deepest difficulty was an old one made urgent: how to flatten a globe without distorting it. Any attempt to peel the curved surface onto a sheet must stretch some parts and shrink others, and no projection can preserve shape, area and distance all at once. The famous solution published by Gerardus Mercator in 1569 was designed for sailors, allowing a course of constant compass bearing to appear as a straight line, an enormous convenience for navigation. Its cost was a steady exaggeration of size towards the poles, so that lands in the far north and south appear far larger than they really are. Generations of schoolchildren have absorbed a quietly misleading picture of the globe as a result.

What every map shares, across all these centuries, is the necessity of choice. The cartographer must decide what matters enough to be shown and what can be omitted, which name to attach to a place that different peoples call by different names, and where, quite literally, to put the centre of the world. Far from being neutral records, maps carry the fingerprints of their makers. To read an old map well is therefore to learn not only about distant coastlines but about the people who drew them and the world they believed they inhabited.`,
        questions: [
          {
            id: 'rd-008-p2-q14',
            type: 'mcq',
            prompt:
              'According to the first paragraph, why can a map never show the world exactly as it is?',
            options: [
              'Because map-makers deliberately try to deceive their readers.',
              'Because a curved, vast surface must be shown on a flat, small sheet.',
              'Because the names of places keep changing over time.',
              'Because no one has ever measured the whole world accurately.',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph states that a map "can never show the world as it truly is, for the surface it represents is curved while the page is flat, and the territory is vast while the sheet is small." Option B captures this.',
          },
          {
            id: 'rd-008-p2-q15',
            type: 'tfng',
            prompt:
              'The ancient Babylonian map on the clay tablet was designed mainly to help travellers.',
            answer: 'false',
            explanation:
              'The second paragraph says the Babylonian tablet "was less a practical guide than a picture of how the Babylonians imagined their place in the cosmos." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p2-q16',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The Babylonian tablet shows the city set within a ring of _______ and surrounded by distant lands drawn as triangles.',
            acceptableAnswers: ['water'],
            explanation:
              'The second paragraph describes the city "set within a ring of water and surrounded by distant lands drawn as simple triangles." The required word is "water".',
          },
          {
            id: 'rd-008-p2-q17',
            type: 'tfng',
            prompt: 'Greek scholars believed the Earth was a sphere.',
            answer: 'true',
            explanation:
              'The third paragraph states that the Greeks were "aware that the Earth was a sphere." This matches the statement, so it is True.',
          },
          {
            id: 'rd-008-p2-q18',
            type: 'tfng',
            prompt:
              'Ptolemy’s original maps have survived unchanged from the second century to the present day.',
            answer: 'false',
            explanation:
              'The third paragraph says that "more than a thousand years later, scholars were able to reconstruct his maps from the figures he had left behind," which means the maps had to be rebuilt from his coordinates rather than surviving intact. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p2-q19',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: On many medieval European maps, the holy city of _______ was placed at the centre of the known continents.',
            acceptableAnswers: ['Jerusalem'],
            explanation:
              'The fourth paragraph says the continents were "squeezed into a circle, with the holy city of Jerusalem placed at the centre." The required word is "Jerusalem".',
          },
          {
            id: 'rd-008-p2-q20',
            type: 'mcq',
            prompt: 'How does the writer suggest medieval religious maps should be judged?',
            options: [
              'As failed attempts to record coastlines accurately.',
              'As diagrams of meaning rather than tools for navigation.',
              'As the most precise maps produced before the modern age.',
              'As copies of the earlier maps made by the Greeks.',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph states these maps "were diagrams of meaning rather than instruments of navigation, and to judge them as failed attempts at accuracy is to misunderstand their purpose entirely." Option B matches.',
          },
          {
            id: 'rd-008-p2-q21',
            type: 'tfng',
            prompt:
              'Accurate sea charts were freely shared among rival captains in the Mediterranean.',
            answer: 'false',
            explanation:
              'The fifth paragraph says the charts "were closely guarded, for an accurate map... was a commercial secret of real value," and that captains were "anxious not to share" their advantage. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p2-q22',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: No map _______ can keep shape, area and distance all correct at the same time.',
            acceptableAnswers: ['projection'],
            explanation:
              'The sixth paragraph states that "no projection can preserve shape, area and distance all at once." The required word is "projection".',
          },
          {
            id: 'rd-008-p2-q23',
            type: 'mcq',
            prompt: 'Why was the Mercator projection of 1569 so useful to sailors?',
            options: [
              'It showed the true size of every continent.',
              'It made a course of constant compass bearing appear as a straight line.',
              'It placed the most important ports at the centre of the map.',
              'It removed all distortion from the far north and south.',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph says Mercator’s projection allowed "a course of constant compass bearing to appear as a straight line, an enormous convenience for navigation." Option B is correct.',
          },
          {
            id: 'rd-008-p2-q24',
            type: 'tfng',
            prompt: 'On the Mercator map, lands near the poles look larger than they really are.',
            answer: 'true',
            explanation:
              'The sixth paragraph states that the projection produced "a steady exaggeration of size towards the poles, so that lands in the far north and south appear far larger than they really are." This matches the statement, so it is True.',
          },
          {
            id: 'rd-008-p2-q25',
            type: 'tfng',
            prompt:
              'Mercator created his projection because governments ordered him to make navigation easier.',
            answer: 'not-given',
            explanation:
              'The passage says the projection "was designed for sailors" and was convenient for navigation, but it never states why Mercator made it or whether any government ordered him to. There is no information about his motive, so the answer is Not Given.',
          },
          {
            id: 'rd-008-p2-q26',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The writer argues that maps are not neutral records but carry the _______ of their makers.',
            acceptableAnswers: ['fingerprints'],
            explanation:
              'The final paragraph states: "Far from being neutral records, maps carry the fingerprints of their makers." The required word is "fingerprints".',
          },
        ],
      },
      {
        id: 'rd-academic-008-p3',
        title: 'The Gentle Art of the Nudge',
        body: `For much of its history, economics rested on a flattering assumption about human beings. People were imagined as rational calculators who weighed up the costs and benefits of every choice and then acted in their own best interest. This tidy picture made the mathematics elegant, but anyone who has ever bought something they did not need, or put off a task they knew was urgent, might suspect that it does not quite match the way real people behave. Over the past few decades a field known as behavioural economics has set out to study that gap, drawing on psychology to describe how ordinary people actually make decisions rather than how a perfectly logical agent ought to.

The findings have been humbling. Researchers have shown that our choices are powerfully shaped by the way options are presented, by what is easiest to do, and by what we believe others are doing. We tend to stick with whatever is offered as the standard option, to be more troubled by a loss than we are pleased by an equivalent gain, and to give far too much weight to the present at the expense of the future. None of this means that people are foolish. It means that human judgement runs on mental shortcuts that usually serve us well but can be predictably led astray.

It was from this insight that the idea of the "nudge" emerged. A nudge is a small change to the environment in which a choice is made that steers people towards a particular option without forbidding any alternative or significantly altering the rewards on offer. Crucially, a nudge must leave people free to do as they please; it persuades rather than compels. Placing fruit at eye level in a canteen is a nudge, because the chips remain available to anyone who wants them. Banning the chips altogether is not a nudge but a rule. The whole approach rests on the recognition that there is no such thing as a neutral way of presenting a choice, and that since something must be placed at eye level, it may as well be the apple.

The single most striking demonstration of the power of nudges concerns the way people save for retirement. When employees have to take deliberate action to join a pension scheme, many never get around to it, even when their employer offers to match their contributions and they stand to lose money by staying out. The delay is not a considered decision but the familiar human tendency to postpone anything that feels effortful. The remedy proved beautifully simple. When the arrangement is reversed, so that new staff are enrolled automatically and must take action only if they wish to opt out, participation rates climb dramatically. Nothing has been taken away; anyone is still free to leave. Yet because inaction now keeps people in the scheme rather than out of it, the natural human preference for doing nothing works in their favour instead of against them.

The same logic has been applied far beyond the workplace. Governments have rewritten official letters in plain language and found that more citizens pay their taxes on time, particularly when the letter mentions, truthfully, that the great majority of their neighbours have already paid. This last technique relies on our sensitivity to social norms: learning that most people behave in a certain way is often a more effective spur than any threat or reward. Hospitals, schools and energy companies have all adopted versions of the method, and a number of governments have set up dedicated teams to design and test such interventions before rolling them out.

The appeal of nudging is easy to understand. It is usually cheap, it preserves freedom of choice, and it can achieve results that heavy-handed regulation cannot. Yet the approach has provoked serious criticism, and not only from those who dislike any official interference. Some object that nudges work precisely because people do not notice them, and that to influence citizens through their unconscious biases is a quiet form of manipulation, however benign the intention. If a nudge must escape attention to succeed, the critics ask, can those affected truly be said to have consented to it?

Defenders reply that the choice is not between influence and its absence. Because the way options are arranged will always tilt our decisions in some direction, the only real question is whether that arrangement should be left to accident or designed with the public interest in mind. On this view, a thoughtful nudge is simply an honest acknowledgement of how human beings really decide. The debate is unlikely to be settled soon, but it has already changed the way many institutions think about the gap between the choices people make and the choices they would, on reflection, prefer to have made.`,
        questions: [
          {
            id: 'rd-008-p3-q27',
            type: 'mcq',
            prompt:
              'What was the traditional economic assumption about human beings described in the first paragraph?',
            options: [
              'That people rarely think about the future at all.',
              'That people are rational calculators acting in their own best interest.',
              'That people copy whatever those around them do.',
              'That people prefer simple choices to complicated ones.',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph says people "were imagined as rational calculators who weighed up the costs and benefits of every choice and then acted in their own best interest." Option B matches this.',
          },
          {
            id: 'rd-008-p3-q28',
            type: 'tfng',
            prompt:
              'According to the passage, people are more upset by a loss than they are pleased by a gain of the same size.',
            answer: 'true',
            explanation:
              'The second paragraph states that people tend "to be more troubled by a loss than we are pleased by an equivalent gain." This matches the statement, so it is True.',
          },
          {
            id: 'rd-008-p3-q29',
            type: 'tfng',
            prompt:
              'The writer states that people who use mental shortcuts are behaving foolishly.',
            answer: 'false',
            explanation:
              'The second paragraph explicitly says "None of this means that people are foolish" and that the shortcuts "usually serve us well." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p3-q30',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A nudge steers people towards a particular option without forbidding any _______.',
            acceptableAnswers: ['alternative'],
            explanation:
              'The third paragraph defines a nudge as a change that steers people "towards a particular option without forbidding any alternative." The required word is "alternative".',
          },
          {
            id: 'rd-008-p3-q31',
            type: 'mcq',
            prompt: 'Why does the writer use the example of fruit and chips in a canteen?',
            options: [
              'To show that healthy food is always cheaper than unhealthy food.',
              'To show the difference between a nudge and a rule.',
              'To show that people ignore where food is placed.',
              'To show that canteens should ban unhealthy options.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph contrasts placing fruit at eye level, which "is a nudge, because the chips remain available," with "banning the chips altogether," which "is not a nudge but a rule." Option B captures the purpose of the example.',
          },
          {
            id: 'rd-008-p3-q32',
            type: 'tfng',
            prompt:
              'A nudge, as defined in the passage, removes a person’s freedom to choose differently.',
            answer: 'false',
            explanation:
              'The third paragraph stresses that "a nudge must leave people free to do as they please; it persuades rather than compels." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-008-p3-q33',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: When new staff are enrolled in a pension scheme automatically and must act only to opt out, _______ rates rise sharply.',
            acceptableAnswers: ['participation'],
            explanation:
              'The fourth paragraph states that when employees "are enrolled automatically and must take action only if they wish to opt out, participation rates climb dramatically." The required word is "participation".',
          },
          {
            id: 'rd-008-p3-q34',
            type: 'mcq',
            prompt:
              'According to the passage, why do automatic-enrolment pension schemes work so well?',
            options: [
              'They offer larger employer contributions than other schemes.',
              'They make it impossible for employees to leave the scheme.',
              'They mean that doing nothing now keeps people in the scheme.',
              'They reward employees who join with an immediate bonus.',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph explains that "because inaction now keeps people in the scheme rather than out of it, the natural human preference for doing nothing works in their favour." Option C matches; the scheme still lets people leave, so B is wrong.',
          },
          {
            id: 'rd-008-p3-q35',
            type: 'tfng',
            prompt:
              'Telling people that most of their neighbours have already paid their taxes can encourage them to pay on time.',
            answer: 'true',
            explanation:
              'The fifth paragraph says more citizens pay on time "particularly when the letter mentions, truthfully, that the great majority of their neighbours have already paid." This matches the statement, so it is True.',
          },
          {
            id: 'rd-008-p3-q36',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: The technique of mentioning what most people do relies on our sensitivity to _______.',
            acceptableAnswers: ['social norms'],
            explanation:
              'The fifth paragraph states that the technique "relies on our sensitivity to social norms." The required two words are "social norms".',
          },
          {
            id: 'rd-008-p3-q37',
            type: 'tfng',
            prompt:
              'Behavioural insight teams have been used by governments in every country in the world.',
            answer: 'not-given',
            explanation:
              'The fifth paragraph says "a number of governments have set up dedicated teams" to design such interventions, but it never claims that every country in the world has done so. There is no information supporting "every country," so the answer is Not Given.',
          },
          {
            id: 'rd-008-p3-q38',
            type: 'mcq',
            prompt: 'What is the main criticism of nudging described in the sixth paragraph?',
            options: [
              'That nudges are too expensive for most governments to use.',
              'That nudges influence people through biases they do not notice, which may be a form of manipulation.',
              'That nudges only work on people who are already well informed.',
              'That nudges take away freedom of choice from citizens.',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph reports the objection that "nudges work precisely because people do not notice them, and that to influence citizens through their unconscious biases is a quiet form of manipulation." Option B matches; the passage elsewhere says nudges are cheap and preserve choice, ruling out A and D.',
          },
          {
            id: 'rd-008-p3-q39',
            type: 'mcq',
            prompt: 'How do defenders of nudging respond to this criticism?',
            options: [
              'They argue that the way options are arranged always influences us, so the only question is whether it is designed well.',
              'They claim that nudges have no real effect on people’s decisions.',
              'They say that manipulation is acceptable if it saves money.',
              'They insist that citizens always notice when they are being nudged.',
            ],
            correctIndex: 0,
            explanation:
              'The final paragraph says defenders argue that "the way options are arranged will always tilt our decisions," so "the only real question is whether that arrangement should be left to accident or designed with the public interest in mind." Option A matches.',
          },
          {
            id: 'rd-008-p3-q40',
            type: 'tfng',
            prompt: 'The writer states that the debate about nudging has now been firmly settled.',
            answer: 'false',
            explanation:
              'The final paragraph says "the debate is unlikely to be settled soon." The statement contradicts this, so it is False.',
          },
        ],
      },
    ],
  },
]
