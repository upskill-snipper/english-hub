// ─── IELTS Academic Reading - practice item bank (Set 17) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of the
// compass and navigation at sea / the science of spider silk / the psychology
// of crowds.
//
// This test uses the Matching question type three times, one per passage:
// Matching Headings (Passage 1), Matching Information / which-paragraph
// (Passage 2) and Matching Features - statements to researchers (Passage 3),
// alongside the usual mix of True/False/Not Given, multiple choice and
// sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_17: ReadingTest[] = [
  {
    id: 'rd-academic-017',
    title: 'Academic Reading - Practice Test 17',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-017-p1',
        title: 'Finding the Way: The Compass and Navigation at Sea',
        body: `For most of human history, to sail beyond the sight of land was to gamble with one's life. Early mariners hugged the coast, noting headlands and river mouths, and ventured into open water only when the weather was settled and the destination near. When they did leave the shore behind, they steered by the heavens: the position of the sun by day and, more reliably, the fixed pattern of the stars by night. The Pole Star, which sits almost directly above the northern axis of the Earth and therefore scarcely seems to move, was especially prized, for a navigator who kept it at a steady height could hold a steady course. The great weakness of this method was obvious to anyone who had spent a night at sea. Beneath a blanket of cloud the sky vanished, the guiding stars were lost, and a ship could wander for days with no sure sense of its heading.

The instrument that eased this difficulty arrived from the East. Chinese scholars had noticed, perhaps two thousand years ago, that a sliver of lodestone - a naturally magnetic rock - would, if allowed to turn freely, always come to rest pointing in the same direction. By the time this curious property was being put to practical use, craftsmen had learned to rub an iron needle against a lodestone so that the needle itself became magnetic and could be floated on a straw in a bowl of water. Such a needle would swing until it lay along an invisible line running roughly north and south. Knowledge of the device spread slowly westward along trade routes, and by the twelfth century sailors in European waters were describing a floating needle that found north even when every star was hidden. For the first time a ship could hold its course through fog and cloud, and the seasons in which long voyages were possible grew accordingly longer.

The compass was a triumph, but it concealed a trap that took centuries to understand. A magnetic needle does not, in fact, point to the true north of the maps - the fixed northern point about which the Earth turns. It points instead towards the magnetic pole, a slowly wandering spot that lies some distance away and is not fixed at all. The angle between the direction a compass shows and true north is called variation, or declination, and it differs from place to place and drifts from year to year. A captain who trusted the needle blindly, without allowing for this angle, might believe he was sailing due north while in truth edging steadily to one side, an error that grew with every mile until it carried him far from where he meant to be.

Knowing one's direction, however, solves only half of the problem of navigation. To fix a position on the featureless surface of the ocean, a sailor must also know two coordinates: latitude, the distance north or south of the equator, and longitude, the distance east or west. Latitude was the easier of the two. By measuring with a simple instrument how high the noon sun or the Pole Star rose above the horizon, a navigator could calculate his latitude with fair accuracy, a technique understood in principle for many hundreds of years. Longitude was a far crueller puzzle, and for want of a solution to it countless ships were wrecked on coasts their captains believed to be safely distant.

The reason longitude proved so stubborn lies in the turning of the Earth itself. Because the planet rotates once in twenty-four hours, every hour of difference in local time corresponds to a fixed slice of the way around the globe. If a sailor could somehow carry with him the exact time at a known place - a home port, say - and compare it with the local time aboard ship, read from the sun, the gap between the two clocks would reveal at once how far east or west he had travelled. The principle had been understood for generations. The obstacle was wholly practical: no clock existed that could keep accurate time on the heaving, salt-laden deck of a ship, where damp, changing temperatures and the constant motion of the waves defeated every delicate mechanism of springs and pendulums.

The breakthrough, when it came in the eighteenth century, was the work of a self-taught English clockmaker who devoted decades to the task. After years of patient refinement he produced a timekeeper, no larger than a generous pocket watch, that held its accuracy on a long ocean voyage to within a handful of seconds. With such a device aboard, a navigator could read his longitude almost as readily as his latitude, and the open sea was at last laid out on a reliable grid. Together the magnetic compass and the accurate sea clock transformed an art that had once depended on luck and a clear sky into something approaching a science, and made possible the dense web of ocean traffic on which the modern world still depends.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-017-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A hidden flaw in the needle’s direction' },
              { key: 'ii', label: 'Steering by sun and stars, until the clouds came' },
              { key: 'iii', label: 'Two numbers needed to fix a position' },
              { key: 'iv', label: 'A magnetic stone travels west' },
              { key: 'v', label: 'Why magnetic poles never move' },
              { key: 'vi', label: 'The clock that conquered the ocean grid' },
              { key: 'vii', label: 'Time as the secret key to longitude' },
              { key: 'viii', label: 'How sailors mapped the ocean floor' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'i' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A describes steering by the sun and the Pole Star and the danger when cloud hid the sky (ii). B traces the lodestone and the magnetic needle spreading west from China to Europe (iv). C reveals the "trap" that the needle points to the wandering magnetic pole, not true north - variation/declination (i). D explains that fixing a position needs two coordinates, latitude and longitude (iii). E argues that carrying the home-port time and comparing it with local time would reveal longitude (vii). F describes the clockmaker’s sea clock that finally made the ocean a reliable grid (vi). Heading v ("Why magnetic poles never move") is a distractor that contradicts the passage, which says the magnetic pole "is not fixed at all"; heading viii ("How sailors mapped the ocean floor") is a distractor - the passage is about position-finding on the surface, not the seabed.',
          },
          {
            id: 'rd-017-p1-q2',
            type: 'tfng',
            prompt:
              'Early mariners preferred to sail far out into the open ocean rather than follow the coastline.',
            answer: 'false',
            explanation:
              'Paragraph A states that "Early mariners hugged the coast... and ventured into open water only when the weather was settled and the destination near." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-017-p1-q3',
            type: 'mcq',
            prompt: 'Why was the Pole Star especially useful to early navigators?',
            options: [
              'It was the brightest object visible in the night sky.',
              'It sits almost directly above the Earth’s northern axis and barely seems to move.',
              'It could still be seen clearly through thick cloud.',
              'It indicated the exact longitude of a ship at sea.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the Pole Star "sits almost directly above the northern axis of the Earth and therefore scarcely seems to move," so a navigator who kept it at a steady height could hold a steady course. Option B captures this; the passage does not call it the brightest star, and it disappeared under cloud.',
          },
          {
            id: 'rd-017-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Chinese scholars found that a sliver of _______, a naturally magnetic rock, would always come to rest pointing in the same direction.',
            acceptableAnswers: ['lodestone'],
            explanation:
              'Paragraph B states that "a sliver of lodestone - a naturally magnetic rock - would, if allowed to turn freely, always come to rest pointing in the same direction." The required word is "lodestone".',
          },
          {
            id: 'rd-017-p1-q5',
            type: 'tfng',
            prompt:
              'By the twelfth century, sailors in European waters were using a floating magnetic needle to find north.',
            answer: 'true',
            explanation:
              'Paragraph B states that "by the twelfth century sailors in European waters were describing a floating needle that found north even when every star was hidden." This matches the statement, so it is True.',
          },
          {
            id: 'rd-017-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The angle between the direction a compass shows and true north is called _______, or declination.',
            acceptableAnswers: ['variation'],
            explanation:
              'Paragraph C states: "The angle between the direction a compass shows and true north is called variation, or declination." The required word is "variation".',
          },
          {
            id: 'rd-017-p1-q7',
            type: 'mcq',
            prompt:
              'According to the passage, why could a captain who trusted the compass blindly go badly astray?',
            options: [
              'The needle would gradually lose its magnetism during a long voyage.',
              'The magnetic pole points towards the equator rather than the north.',
              'The needle points to the magnetic pole, not true north, so an uncorrected error grows with distance.',
              'The compass only worked correctly when the stars were also visible.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C explains the needle "points instead towards the magnetic pole" and that a captain who ignored this angle "might believe he was sailing due north while in truth edging steadily to one side, an error that grew with every mile." Option C states this.',
          },
          {
            id: 'rd-017-p1-q9',
            type: 'mcq',
            prompt: 'Why did finding longitude depend on keeping accurate time?',
            options: [
              'Because the position of the stars changes with the time of night',
              'Because each hour of difference between two clocks corresponds to a fixed distance around the globe',
              'Because the magnetic pole moves at a steady rate each hour',
              'Because the sun rises at the same moment everywhere on Earth',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E explains that because the Earth "rotates once in twenty-four hours, every hour of difference in local time corresponds to a fixed slice of the way around the globe," so comparing home-port time with local time reveals the distance travelled east or west. Option B captures this.',
          },
          {
            id: 'rd-017-p1-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: No early clock could keep accurate time aboard ship because damp, changing temperatures and the constant _______ of the waves defeated its delicate mechanism.',
            acceptableAnswers: ['motion'],
            explanation:
              'Paragraph E states that "the constant motion of the waves defeated every delicate mechanism of springs and pendulums." The required word is "motion".',
          },
          {
            id: 'rd-017-p1-q11',
            type: 'tfng',
            prompt:
              'The clockmaker who solved the longitude problem had been formally trained at a famous university.',
            answer: 'not-given',
            explanation:
              'Paragraph F describes him only as "a self-taught English clockmaker who devoted decades to the task." Whether he had any formal or university training is not mentioned, so the statement is Not Given.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-017-p2',
        title: 'Stronger than Steel: The Science of Spider Silk',
        body: `Few materials in the natural world have provoked as much admiration, or as much frustration, among scientists as the silk spun by spiders. Weight for weight, the dragline silk that forms the spokes and frame of a typical orb web is among the toughest materials known, able to absorb a remarkable amount of energy before it breaks. It is often said to be stronger than steel, and although such comparisons can mislead, the underlying point holds: a thread so fine as to be almost invisible can stop a flying insect in mid-air without snapping. What makes the achievement stranger still is that the spider manufactures this extraordinary fibre at body temperature, from a watery liquid, using no high heat, no harsh chemicals and no great pressure of the kind a human factory would require.

The secret lies partly in what the silk is made of and partly in how it is assembled. Silk is a protein, built from long chains of the small molecular units that make up all proteins. Within these chains lie two contrasting regions. Some stretches fold into tight, orderly blocks in which the chains pack closely together, rather like the neat structure of a crystal; these rigid blocks give the fibre its great strength. Other stretches remain loose and tangled, a disordered jumble that can stretch and recoil; these springy regions give the silk its remarkable ability to absorb a sudden shock without breaking. It is the marriage of the two - stiffness and stretch together in a single thread - that accounts for the silk’s celebrated toughness, a balance that engineers find very hard to achieve in materials of their own.

Equally remarkable is the way the spider turns a liquid into a solid thread on demand. The silk begins as a concentrated protein solution stored inside a gland, where the chains are kept apart and prevented from solidifying. As the liquid is drawn down a narrow duct towards the spinnerets at the rear of the animal, conditions along the duct change: the acidity rises, certain salts are removed, and the protein chains are pulled into alignment by the sheer act of being stretched. By the time the material emerges into the air it has been transformed, almost instantaneously, from a soluble liquid into an insoluble fibre. Crucially, the spider controls the process, adjusting the speed at which it draws the thread to tune the properties of the silk it produces.

It would be a mistake, however, to speak of spider silk as though it were a single substance. A typical garden spider can spin as many as seven different kinds, each from its own gland and each suited to a particular job. The stiff dragline silk that frames the web and serves as the spider’s lifeline is quite unlike the stretchy, glue-coated capture spiral that must absorb the impact of prey and hold it fast. There is a silk for wrapping captured insects, a fine silk for swathing eggs in a protective case, and others besides. This versatility, the ability to spin a whole toolkit of fibres tuned to different purposes from variations on a single chemistry, is among the qualities that researchers most envy.

The temptation to copy such a material has proved irresistible, yet for many years it defeated every effort. Spiders cannot easily be farmed as silkworms are, for they are territorial and inclined to eat one another when crowded together, so harvesting silk directly from the animals has never been practical on any useful scale. The obvious alternative is to manufacture the silk proteins separately - by inserting the relevant genes into bacteria, yeast or other host organisms, which then produce the proteins in quantity. Persuading a microbe to churn out the protein has gradually become possible. The far harder step has been the spinning: coaxing that protein to assemble into a fibre with the strength of the natural thread, reproducing outside the body a delicate process that the spider performs effortlessly within it.

If those obstacles can be overcome, the rewards may be considerable. Because silk proteins are not rejected by the body, researchers are exploring their use in medicine, as fine sutures, as scaffolds on which damaged tissue might be encouraged to regrow, and as coatings for implants. Others imagine lightweight protective fabrics, or ropes and nets of exceptional strength for industry. Perhaps the most appealing prospect of all is environmental. A material as tough as engineering plastics, yet spun gently from water at ordinary temperatures and able to break down harmlessly when discarded, would be a quiet rebuke to the energy-hungry, polluting processes by which so many modern materials are made. The spider, it turns out, may have been demonstrating a kind of green chemistry for many millions of years.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-017-p2-q1',
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
                text: 'an explanation of how the spider changes a liquid into a solid thread as it is drawn out',
                answer: 'C',
              },
              {
                id: 'p2-i-2',
                text: 'the reason spiders cannot be farmed in the way silkworms are',
                answer: 'E',
              },
              {
                id: 'p2-i-3',
                text: 'a description of two contrasting regions within the silk’s protein chains',
                answer: 'B',
              },
              {
                id: 'p2-i-4',
                text: 'the suggestion that spider silk could be more environmentally friendly than man-made materials',
                answer: 'F',
              },
              {
                id: 'p2-i-5',
                text: 'the claim that a single spider can produce several different types of silk',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → C, which describes the protein solution being drawn down a duct where acidity rises and the chains align, turning liquid into an insoluble fibre. Item 2 → E: spiders "are territorial and inclined to eat one another when crowded together," so they cannot be farmed like silkworms. Item 3 → B, which contrasts the tight, orderly blocks with the loose, tangled regions. Item 4 → F, which imagines a tough material "spun gently from water" that breaks down harmlessly - a "green chemistry." Item 5 → D: "A typical garden spider can spin as many as seven different kinds."',
          },
          {
            id: 'rd-017-p2-q3',
            type: 'tfng',
            prompt:
              'To produce its silk, a spider requires high temperatures and strong chemicals similar to those used in factories.',
            answer: 'false',
            explanation:
              'Paragraph A states the spider makes the fibre "at body temperature, from a watery liquid, using no high heat, no harsh chemicals and no great pressure of the kind a human factory would require." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-017-p2-q4',
            type: 'mcq',
            prompt: 'According to the passage, what gives spider silk its great strength?',
            options: [
              'The loose, tangled regions that can stretch and recoil',
              'The tight, orderly blocks in which the protein chains pack closely together',
              'The glue that coats the capture spiral of the web',
              'The high temperature at which the silk is spun',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that the chains forming "tight, orderly blocks... rather like the neat structure of a crystal; these rigid blocks give the fibre its great strength." Option B is correct; the loose regions provide stretch, not strength.',
          },
          {
            id: 'rd-017-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As the silk liquid is drawn towards the _______ at the rear of the spider, its acidity rises and the protein chains are pulled into alignment.',
            acceptableAnswers: ['spinnerets'],
            explanation:
              'Paragraph C describes the liquid being "drawn down a narrow duct towards the spinnerets at the rear of the animal." The required word is "spinnerets".',
          },
          {
            id: 'rd-017-p2-q6',
            type: 'mcq',
            prompt: 'How does the spider tune the properties of the silk it produces?',
            options: [
              'By raising the temperature of the protein solution',
              'By mixing several proteins together in one gland',
              'By adjusting the speed at which it draws out the thread',
              'By adding extra salts to the silk as it emerges',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C states the spider controls the process, "adjusting the speed at which it draws the thread to tune the properties of the silk it produces." Option C matches.',
          },
          {
            id: 'rd-017-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The stiff dragline silk also serves as the spider’s _______, quite unlike the stretchy, glue-coated capture spiral.',
            acceptableAnswers: ['lifeline'],
            explanation:
              'Paragraph D refers to "The stiff dragline silk that frames the web and serves as the spider’s lifeline." The required word is "lifeline".',
          },
          {
            id: 'rd-017-p2-q8',
            type: 'tfng',
            prompt:
              'Scientists have found it easier to spin artificial silk into a strong fibre than to make the silk proteins.',
            answer: 'false',
            explanation:
              'Paragraph E says producing the protein "has gradually become possible," but "The far harder step has been the spinning." So spinning is harder than making the protein, and the statement is False.',
          },
          {
            id: 'rd-017-p2-q9',
            type: 'mcq',
            prompt:
              'Which use of spider silk does the passage describe as possibly the most appealing?',
            options: [
              'Its use as fine sutures and tissue scaffolds in medicine',
              'Its use in strong industrial ropes and nets',
              'Its environmental advantage as a tough material made gently and able to break down harmlessly',
              'Its use as a coating for medical implants',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F lists medical and industrial uses, then says "Perhaps the most appealing prospect of all is environmental," describing a tough material spun gently from water that breaks down harmlessly. Option C matches that judgement.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-017-p3',
        title: 'The Psychology of Crowds',
        body: `When large numbers of people gather in one place - at a concert, a protest, a religious festival or a football match - something seems to change in the way they behave. Observers have long sensed that a crowd is not merely a collection of separate individuals but acquires, somehow, a character of its own. For more than a century, scholars have tried to pin down what that character is, and whether the change a crowd works on its members is to be feared or, on the contrary, welcomed. The answers they have offered reveal as much about the assumptions of each age as about the crowds themselves.

The earliest influential theory took a dim view. Writing in the late nineteenth century, the French thinker Gustave Lefort argued that an individual swallowed up in a crowd loses the faculties that ordinarily restrain him. In Lefort’s account, the crowd is governed by contagion: emotions and impulses spread from person to person like a fever, and the result is a single, primitive "group mind" far less rational and more easily swayed than any of the people who compose it. A respectable citizen, on this view, might be carried by the mob into acts of violence or folly that he would never contemplate alone. The theory was enormously influential, and its grim picture of the crowd as a mindless, dangerous beast shaped official attitudes for decades.

Later researchers came to regard this portrait as a caricature, and a politically convenient one. The historian Marian Devas has pointed out that the early theorists wrote in a period of social unrest, when those in authority were frightened of the urban poor, and that their science conveniently dismissed popular protest as mere irrationality. A closer look at real gatherings, she argues, tells a different story. Crowds are rarely the formless mobs of the old theory; even an angry one usually directs its actions at particular targets - a hated official, a symbolic building - while leaving others untouched, which is hardly the behaviour of people who have lost all reason. The violence of crowds, where it occurs, tends to be patterned rather than random.

A second objection concerns the very idea that people lose their identity in a crowd. The social psychologist Idris Connaught has spent much of his career arguing close to the opposite. Far from dissolving the self, he contends, belonging to a crowd can switch a person’s sense of who they are from the personal to the collective: for the duration of the event, one thinks and acts less as a private individual and more as a member of a group - a supporter of this team, a believer in that cause. This shift, Connaught stresses, does not abolish judgement but redirects it. People in a crowd follow the norms and values of the group they identify with, which is why a crowd of football supporters and a crowd of religious pilgrims behave so differently. Their behaviour is shaped, not abandoned.

This newer understanding has practical consequences, above all for the policing of large events. For most of the twentieth century, the authorities planned for crowds on the assumption of the old theory: a crowd was a powder keg, liable to ignite at any moment, and the safest response to disorder was an overwhelming show of force. Yet research now suggests that such heavy-handed tactics can be self-defeating. When police treat a peaceful gathering as a single hostile mass and act against it indiscriminately, those caught up in it - most of whom had no quarrel with anyone - may come to feel a shared sense of grievance, and a crowd that posed little threat can be pushed towards the very confrontation the authorities feared. Heavy-handedness, in short, can manufacture the danger it was meant to prevent.

The lesson drawn by many who study the field is one of restraint and discrimination. Rather than confronting a crowd as an undifferentiated enemy, they argue, those responsible for public safety should distinguish the few who may be intent on trouble from the many who are not, and should communicate with a gathering rather than simply suppress it. None of this is to pretend that crowds are never dangerous; a packed space can turn lethal through sheer physical crush even when no one intends harm, and that remains a serious risk to be managed. But the old image of the crowd as an inherently mindless beast, ready at any moment to throw off the veneer of civilisation, has not survived a careful look at how people in groups actually behave. We are, it seems, more ourselves in a crowd than the early theorists ever supposed.`,
        questions: [
          // ── Matching Features - statements to thinkers (5 items) = 5 marks ──
          {
            id: 'rd-017-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of people below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Gustave Lefort' },
              { key: 'B', label: 'Marian Devas' },
              { key: 'C', label: 'Idris Connaught' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'Being part of a crowd shifts a person’s sense of identity from the personal to the collective.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'Inside a crowd, emotions spread from person to person and produce a single, primitive group mind.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'Early theories of the crowd suited authorities who were afraid of popular protest.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'Belonging to a crowd redirects a person’s judgement rather than removing it.',
                answer: 'C',
              },
              {
                id: 'p3-f-5',
                text: 'Even an angry crowd usually aims its actions at particular targets rather than acting at random.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → C (Connaught): belonging to a crowd "can switch a person’s sense of who they are from the personal to the collective." Item 2 → A (Lefort): "the crowd is governed by contagion: emotions and impulses spread from person to person like a fever," producing "a single, primitive ‘group mind.’" Item 3 → B (Devas): the early theorists wrote when authorities "were frightened of the urban poor," and their science "conveniently dismissed popular protest as mere irrationality." Item 4 → C (Connaught): the shift "does not abolish judgement but redirects it." Item 5 → B (Devas): "even an angry one usually directs its actions at particular targets... rather than random."',
          },
          {
            id: 'rd-017-p3-q2',
            type: 'tfng',
            prompt:
              'The passage suggests that theories about crowds reflect the assumptions of the time in which they were written.',
            answer: 'true',
            explanation:
              'Paragraph A states that the answers scholars offered "reveal as much about the assumptions of each age as about the crowds themselves." This supports the statement, so it is True.',
          },
          {
            id: 'rd-017-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: In Lefort’s account, the crowd is governed by _______, so that emotions spread from person to person like a fever.',
            acceptableAnswers: ['contagion'],
            explanation:
              'Paragraph B states that "the crowd is governed by contagion: emotions and impulses spread from person to person like a fever." The required word is "contagion".',
          },
          {
            id: 'rd-017-p3-q4',
            type: 'mcq',
            prompt: 'According to Lefort, what happens to a respectable citizen who joins a crowd?',
            options: [
              'They keep their usual judgement but apply it to the group’s goals.',
              'They may be carried into acts of violence or folly they would never commit alone.',
              'They quickly leave the crowd once it becomes violent.',
              'They take charge and try to calm the people around them.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that, on Lefort’s view, "A respectable citizen... might be carried by the mob into acts of violence or folly that he would never contemplate alone." Option B matches.',
          },
          {
            id: 'rd-017-p3-q5',
            type: 'tfng',
            prompt:
              'Devas argues that the violence of crowds, where it happens, is usually random and without pattern.',
            answer: 'false',
            explanation:
              'Paragraph C states that, on Devas’s reading, even an angry crowd "directs its actions at particular targets" and that crowd violence "tends to be patterned rather than random." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-017-p3-q6',
            type: 'mcq',
            prompt: 'How does Connaught’s view differ most sharply from the earliest theory?',
            options: [
              'He believes crowds are always more dangerous than individuals.',
              'He argues that people in a crowd lose their identity completely.',
              'He contends that, rather than dissolving the self, a crowd redirects a person’s judgement towards the group.',
              'He claims that crowds never follow any shared norms or values.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says Connaught argues "close to the opposite" of the early theory: "Far from dissolving the self," a crowd shifts identity to the collective and "does not abolish judgement but redirects it." Option C captures this; the passage explicitly says people follow the group’s norms, ruling out option D.',
          },
          {
            id: 'rd-017-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: For most of the twentieth century, the authorities treated a crowd as a powder _______, liable to ignite at any moment.',
            acceptableAnswers: ['keg'],
            explanation:
              'Paragraph E states that, under the old theory, "a crowd was a powder keg, liable to ignite at any moment." The required word is "keg".',
          },
          {
            id: 'rd-017-p3-q8',
            type: 'tfng',
            prompt:
              'The passage states that heavy-handed policing can sometimes create the very disorder it was meant to prevent.',
            answer: 'true',
            explanation:
              'Paragraph E argues that indiscriminate force can give a peaceful crowd "a shared sense of grievance," pushing it "towards the very confrontation the authorities feared," and that "Heavy-handedness... can manufacture the danger it was meant to prevent." This matches the statement, so it is True.',
          },
          {
            id: 'rd-017-p3-q10',
            type: 'mcq',
            prompt:
              'What is the main lesson the passage draws for those responsible for public safety?',
            options: [
              'They should always meet crowds with an overwhelming show of force.',
              'They should distinguish the few who may want trouble from the many who do not, and communicate rather than simply suppress.',
              'They should ban large gatherings wherever possible.',
              'They should rely entirely on the old theory of the group mind.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F states that those responsible for safety "should distinguish the few who may be intent on trouble from the many who are not, and should communicate with a gathering rather than simply suppress it." Option B matches this lesson of "restraint and discrimination."',
          },
        ],
      },
    ],
  },
]
