// ─── IELTS Academic Reading - practice item bank (Set 23) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of
// refrigeration and the cold chain / the history of public sanitation and clean
// water / how ant colonies organise themselves.
//
// This test is MATCHING-RICH. It contains TWO matching questions of DIFFERENT
// variants: Matching Headings (Passage 1) and Matching Features - statements to
// named researchers (Passage 3), alongside the usual mix of True/False/Not
// Given, multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Gap answers obey the stated word limit and every
// acceptable answer appears verbatim in the passage.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_23: ReadingTest[] = [
  {
    id: 'rd-academic-023',
    title: 'Academic Reading - Practice Test 23',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-023-p1',
        title: 'Keeping the Cold',
        body: `For most of human history, the cold was something to be endured rather than created. People could not make it on demand, and so they hunted for it where nature offered it freely. In cold climates blocks of ice were cut from frozen lakes in winter and buried in straw or sawdust in deep cellars, where a surprising amount survived into the warm months. Warmer societies dug pits, packed them with snow carried down from the mountains, and roofed them against the sun. These stores were precious and were used sparingly, chiefly to cool drinks for the rich or to preserve a little food for a short time. The idea that an ordinary household might one day produce cold whenever it wished would have seemed a fantasy.

The fantasy began to look possible once scientists understood why things grow cold in the first place. The key insight was that when a liquid evaporates into a gas it draws heat from its surroundings, which is why a wet hand feels chilly in a breeze. In the nineteenth century inventors learned to harness this effect deliberately. A volatile fluid was made to evaporate inside a closed loop of pipes, absorbing heat from a cabinet, and was then compressed back into a liquid elsewhere, releasing that heat outside. By driving the cycle with a pump, a machine could move heat from a cold place to a warmer one again and again, in defiance of its natural tendency to flow the other way. For the first time, cold could be manufactured.

The earliest customers for this new technology were not households but industries that lost money to spoilage. Breweries wanted to brew through the summer; meat packers wanted to store carcasses; and above all, those who shipped food across oceans wanted their cargo to arrive fit to eat. A turning point came in the 1870s and 1880s, when refrigerated ships first carried frozen meat from the southern hemisphere to Europe across the equator without it rotting on the way. Distant grasslands that had been almost worthless for export, because their produce could never reach a hungry market in time, were suddenly linked to dinner tables thousands of kilometres away. Trade in perishable goods was transformed.

The domestic refrigerator took longer to arrive, and at first it was viewed with suspicion. The early machines were noisy, expensive and, more alarmingly, dangerous, because the gases that worked so well inside the pipes were often poisonous or flammable. A leak in the night could be lethal, and several deaths were reported. The breakthrough that made the appliance safe enough for the ordinary kitchen was the development in the late 1920s of a new family of synthetic gases that were stable, non-toxic and would not catch fire. These compounds seemed almost miraculous, and within a generation the humming refrigerator had become a fixture of homes across the industrial world, quietly reshaping how families shopped, cooked and ate.

Yet the miracle carried a hidden cost that took decades to reveal. From the 1970s onwards scientists gathered evidence that these same synthetic gases, once released into the air, drifted slowly upward and damaged the layer of ozone high in the atmosphere that screens the planet from harmful radiation. The discovery prompted an unusual burst of international cooperation, and the offending chemicals were phased out by treaty and replaced with less harmful alternatives. The episode is often held up as proof that the world can act together when a danger is clearly understood, though some of the replacement gases later turned out to contribute to a different problem, the warming of the climate, and are now being restricted in their turn.

Behind the modern refrigerator lies something larger and less visible: an unbroken chain of cold that stretches from the field to the kitchen. A vegetable picked in one country may be chilled within hours, kept cold in a warehouse, carried in a refrigerated lorry, displayed in a cooled cabinet and finally stored in a domestic fridge, never once being allowed to warm up along the way. This cold chain, as it is known, is one of the quiet achievements of the modern world. It allows medicines and vaccines to travel safely, lets people eat fruit out of season, and has sharply reduced the amount of food that is lost to spoilage. Its weak point is that it depends utterly on a constant supply of energy; where power is unreliable, the chain breaks, and the cold that was so hard to win is lost in a matter of hours.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-023-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A gift gathered from nature, not made' },
              { key: 'ii', label: 'Industry leads the way' },
              { key: 'iii', label: 'A safe gas brings the machine indoors' },
              { key: 'iv', label: 'How freezing changes the flavour of food' },
              { key: 'v', label: 'Understanding why evaporation cools' },
              { key: 'vi', label: 'An unbroken chain from field to kitchen' },
              { key: 'vii', label: 'A hidden cost high in the atmosphere' },
              { key: 'viii', label: 'Why ice cellars were built underground' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'i' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'v' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'vi' },
            ],
            explanation:
              'A describes how people "hunted for it where nature offered it freely", harvesting ice and snow rather than making cold (i). B explains the insight that "when a liquid evaporates into a gas it draws heat from its surroundings" and how machines harnessed it (v). C states the "earliest customers... were not households but industries that lost money to spoilage" (ii). D recounts the late-1920s "synthetic gases that were stable, non-toxic and would not catch fire", which made the appliance safe for the kitchen (iii). E covers the damage these gases did to "the layer of ozone high in the atmosphere" (vii). F introduces "an unbroken chain of cold that stretches from the field to the kitchen" (vi). Heading iv (flavour of frozen food) is a distractor the passage never discusses; heading viii (why cellars were underground) is a distractor - A mentions cellars but never explains the choice of depth as its theme.',
          },
          {
            id: 'rd-023-p1-q2',
            type: 'tfng',
            prompt:
              'In cold climates, ice cut from frozen lakes could be kept for several months if it was buried in straw or sawdust.',
            answer: 'true',
            explanation:
              'Paragraph A says blocks of ice "were cut from frozen lakes in winter and buried in straw or sawdust in deep cellars, where a surprising amount survived into the warm months." Surviving into the warm months supports the statement, so it is True.',
          },
          {
            id: 'rd-023-p1-q3',
            type: 'tfng',
            prompt:
              'A refrigeration machine moves heat in the same direction that heat would flow naturally.',
            answer: 'false',
            explanation:
              'Paragraph B says the machine moves heat "from a cold place to a warmer one... in defiance of its natural tendency to flow the other way." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-023-p1-q4',
            type: 'tfng',
            prompt:
              'The first refrigerated voyages carrying frozen meat to Europe took several weeks to complete.',
            answer: 'not-given',
            explanation:
              'Paragraph C says refrigerated ships "carried frozen meat from the southern hemisphere to Europe across the equator without it rotting on the way", but it never states how long these voyages took. The duration is neither confirmed nor denied, so the answer is Not Given.',
          },
          {
            id: 'rd-023-p1-q5',
            type: 'mcq',
            prompt: 'Why were early domestic refrigerators regarded as dangerous?',
            options: [
              'They consumed far more electricity than households could supply.',
              'The gases inside their pipes were often poisonous or flammable.',
              'They could explode if the cabinet was opened too quickly.',
              'They released radiation that damaged the surrounding kitchen.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D states the early machines were "dangerous, because the gases that worked so well inside the pipes were often poisonous or flammable", and that "A leak in the night could be lethal." Option B captures this.',
          },
          {
            id: 'rd-023-p1-q6',
            type: 'mcq',
            prompt:
              'What does the passage say about the synthetic gases developed in the late 1920s?',
            options: [
              'They were cheaper to produce than any earlier refrigerant.',
              'They made the refrigerator safe enough for the ordinary kitchen.',
              'They allowed refrigerators to work without any electricity.',
              'They were banned almost as soon as they were introduced.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D calls the new gases "the breakthrough that made the appliance safe enough for the ordinary kitchen", being "stable, non-toxic and would not catch fire." Option B matches; the ozone problem (E) emerged decades later, so option D is wrong.',
          },
          {
            id: 'rd-023-p1-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When a liquid evaporates it draws _______ from its surroundings, which is why a wet hand feels chilly in a breeze.',
            acceptableAnswers: ['heat'],
            explanation:
              'Paragraph B states that "when a liquid evaporates into a gas it draws heat from its surroundings, which is why a wet hand feels chilly in a breeze." The required word is "heat".',
          },
          {
            id: 'rd-023-p1-q8',
            type: 'gap',
            prompt:
              'Complete the summary with TWO words from the passage: The continuous system of refrigeration that runs from the field to the kitchen is known as the _______.',
            acceptableAnswers: ['cold chain'],
            explanation:
              'Paragraph F describes "an unbroken chain of cold that stretches from the field to the kitchen" and names it: "This cold chain, as it is known." The required two-word answer is "cold chain".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-023-p2',
        title: 'The Hidden City',
        body: `Beneath the streets of any large city runs a second city that almost no one ever sees. It is a network of pipes and channels that brings clean water in and carries dirty water away, and its smooth operation is so taken for granted that it becomes visible only when it fails. Yet this buried machinery is among the greatest of human inventions, and the story of how it came to be built is, in large part, the story of how cities learned to stop poisoning themselves.

The problem is as old as the city itself. Wherever large numbers of people crowd together, their waste accumulates, and for most of history it was simply thrown into the nearest street or stream. Some ancient societies built impressive drains and brought fresh water in along great channels, but such systems were rare, were often reserved for the privileged, and were largely forgotten when those societies declined. For centuries afterwards the typical town drew its drinking water from wells and rivers that were also, in effect, its sewers. The result was a steady toll of disease that people accepted as an unavoidable feature of urban life, without understanding its cause.

That misunderstanding was itself a serious obstacle. The dominant theory held that diseases such as cholera were spread by foul air, a poisonous vapour rising from rotting matter and stagnant water. The theory was not absurd, for disease did cluster in the dirtiest and most malodorous districts, but it pointed reformers in a misleading direction, encouraging them to attack bad smells rather than the contaminated water that was the true culprit. The decisive challenge to this idea came in the middle of the nineteenth century, when a London doctor investigating a violent local outbreak traced it to a single public water pump. By mapping where the victims had lived and drunk, he showed that those who took their water from that one source fell ill while others nearby did not. His careful detective work pointed to water, not air, as the carrier of the disease, though it took years for the conclusion to be widely accepted.

Even before the science was settled, the sheer scale of urban filth was forcing action. As industrial cities swelled, their rivers became open sewers so foul that, in one famous episode, the stench from a great European river grew so overpowering during a hot summer that the politicians working beside it could no longer ignore the problem and finally voted the money for a remedy. The remedy was engineering on a grand scale: vast networks of brick-lined sewers, laid at a careful gradient so that gravity alone would carry the waste away to be discharged well clear of where people drew their water. These works were among the largest construction projects of their age, and they transformed the health of the cities that undertook them, even though their designers had often been motivated as much by the desire to banish the smell as by any clear theory of infection.

Carrying waste away was only half of the task; bringing in water that was genuinely safe to drink was the other. It gradually became clear that water could look perfectly clear and still be deadly, and so cities began to treat their supply before it reached the public. Passing water slowly through beds of sand was found to remove much of the invisible danger, and later the addition of small, carefully controlled amounts of chlorine killed the organisms that remained. This last step, simple and cheap, is regarded by many public-health experts as one of the most effective measures ever taken to protect human life, even though it attracts almost no attention from the people it protects daily.

The benefits of all this hidden effort are easy to overlook precisely because they are so complete. In cities with good sanitation, diseases that once killed thousands have become so rare that most inhabitants have never encountered them and scarcely know their names. This very success breeds a kind of forgetfulness: pipes laid generations ago are not always renewed, and the slow, unglamorous work of maintaining the network competes poorly for funds against more visible projects. The danger, experts warn, is that a system which has worked invisibly for so long may be assumed to look after itself, until the day a neglected pipe bursts or a supply is contaminated and the hidden city beneath the streets forces its way, briefly and unpleasantly, back into view.`,
        questions: [
          {
            id: 'rd-023-p2-q1',
            type: 'tfng',
            prompt:
              'No ancient society managed to build systems for supplying fresh water and removing waste.',
            answer: 'false',
            explanation:
              'Paragraph B states that "Some ancient societies built impressive drains and brought fresh water in along great channels", though such systems were rare. Because some societies did build them, the statement is False.',
          },
          {
            id: 'rd-023-p2-q2',
            type: 'tfng',
            prompt:
              'For centuries, many towns took their drinking water from the same rivers that received their waste.',
            answer: 'true',
            explanation:
              'Paragraph B says "the typical town drew its drinking water from wells and rivers that were also, in effect, its sewers." This supports the statement, so it is True.',
          },
          {
            id: 'rd-023-p2-q2b',
            type: 'tfng',
            prompt:
              'The drains built by ancient societies were larger than the brick-lined sewers constructed in industrial cities.',
            answer: 'not-given',
            explanation:
              'Paragraph B mentions that "Some ancient societies built impressive drains", and paragraph D describes the later "vast networks of brick-lined sewers", but the passage never compares the size of the two. No such comparison is made, so the answer is Not Given.',
          },
          {
            id: 'rd-023-p2-q3',
            type: 'tfng',
            prompt:
              'The theory that disease was spread by foul air was entirely without any basis in observation.',
            answer: 'false',
            explanation:
              'Paragraph C says "The theory was not absurd, for disease did cluster in the dirtiest and most malodorous districts." Because there was an observed pattern behind it, the claim that it had no basis is False.',
          },
          {
            id: 'rd-023-p2-q5',
            type: 'mcq',
            prompt: 'How did the London doctor identify the source of the cholera outbreak?',
            options: [
              'By analysing the chemical content of the water in a laboratory.',
              'By mapping where the victims had lived and obtained their water.',
              'By measuring the strength of the smell in different streets.',
              'By interviewing doctors who treated patients across the city.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C states he traced the outbreak to a single pump "By mapping where the victims had lived and drunk", showing that those using that source fell ill. Option B describes this method.',
          },
          {
            id: 'rd-023-p2-q6',
            type: 'mcq',
            prompt:
              'According to the passage, what finally persuaded politicians to fund a remedy for a foul European river?',
            options: [
              'A scientific report proving the river spread cholera.',
              'A campaign led by the doctors of the city.',
              'The overpowering stench of the river during a hot summer.',
              'The collapse of several bridges across the river.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D describes how "the stench from a great European river grew so overpowering during a hot summer that the politicians working beside it could no longer ignore the problem and finally voted the money for a remedy." Option C matches.',
          },
          {
            id: 'rd-023-p2-q7',
            type: 'mcq',
            prompt:
              'What does the passage say motivated the designers of the great brick-lined sewers?',
            options: [
              'A clear scientific understanding that water carried infection.',
              'Often, the wish to remove the smell as much as any theory of infection.',
              'A desire to create the largest structures of their age for prestige.',
              'Pressure from citizens who understood how cholera was spread.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says the designers "had often been motivated as much by the desire to banish the smell as by any clear theory of infection." Option B reflects this directly.',
          },
          {
            id: 'rd-023-p2-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The brick-lined sewers were laid at a careful gradient so that _______ alone would carry the waste away.',
            acceptableAnswers: ['gravity'],
            explanation:
              'Paragraph D describes sewers "laid at a careful gradient so that gravity alone would carry the waste away." The required word is "gravity".',
          },
          {
            id: 'rd-023-p2-q9',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: To clean the water supply, cities first passed it slowly through beds of _______, and later added chlorine to kill the organisms that remained.',
            acceptableAnswers: ['sand'],
            explanation:
              'Paragraph E states that "Passing water slowly through beds of sand was found to remove much of the invisible danger, and later the addition of... chlorine killed the organisms that remained." The required word is "sand".',
          },
          {
            id: 'rd-023-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Many public-health experts regard the addition of small amounts of _______ to drinking water as one of the most effective measures ever taken to protect human life.',
            acceptableAnswers: ['chlorine'],
            explanation:
              'Paragraph E says the addition of "carefully controlled amounts of chlorine killed the organisms that remained" and that "This last step... is regarded by many public-health experts as one of the most effective measures ever taken to protect human life." The required word is "chlorine".',
          },
          {
            id: 'rd-023-p2-q11',
            type: 'mcq',
            prompt: 'What danger does the writer warn about in the final paragraph?',
            options: [
              'That cities will run out of clean water as their populations grow.',
              'That old diseases will become resistant to modern treatment.',
              'That a system working invisibly may be neglected until it fails.',
              'That the cost of chlorine will rise beyond what cities can afford.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F warns that "a system which has worked invisibly for so long may be assumed to look after itself, until the day a neglected pipe bursts or a supply is contaminated." Option C captures this warning.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-023-p3',
        title: 'The Logic of the Anthill',
        body: `An ant colony presents one of nature's most striking puzzles. A single ant is a simple creature with a tiny brain and a limited repertoire of behaviours, yet a colony of thousands behaves as though it were a single intelligent organism. It builds elaborate nests, wages organised warfare, farms fungus or herds aphids, and adjusts the size of its workforce to the food available, all without any ant being in charge. There is no architect issuing plans and no manager assigning tasks. The order that so impresses us emerges, somehow, from the actions of individuals that have no view of the whole.

How this happens has fascinated biologists for decades, and the central idea to come out of their work is that the colony is governed not by command but by communication. Ants talk to one another chiefly through chemicals called pheromones, scent signals that they lay down and detect with extraordinary sensitivity. A forager returning from a rich source of food, for example, lays a trail of pheromone on its way back to the nest; other ants follow the trail to the food and reinforce it as they return, so that a path to a good source quickly becomes strong while a path to an exhausted one fades as the scent evaporates and is no longer renewed. The behaviourist Marcus Oduya, who has spent years filming foraging trails, emphasises that no ant decides which route the colony should take. The shortest route tends to win simply because ants travelling it complete the round trip fastest and so reinforce it most often. The clever outcome, he likes to say, is produced by a crowd of individuals following very simple rules.

If pheromones are the colony's language, then the division of labour is among its most remarkable achievements. The tasks of the colony - foraging, caring for the young, building, defending - are shared out among the workers, and the proportion doing each job shifts as circumstances change. The myrmecologist Selina Brandt has studied how this allocation works and rejects the popular notion that ants are born into fixed careers. In many species, she points out, a worker's job depends largely on its age: young workers tend to remain inside, nursing the brood, while older ones graduate to the riskier work of foraging outside, so that the colony spends its most expendable members where danger is greatest. Yet this schedule is not rigid. Brandt has shown that if a colony suddenly loses many of its foragers, some of the younger nurses will mature faster and switch to foraging earlier than they otherwise would, restoring the balance. The system, in her words, is flexible precisely because no individual is irreplaceable.

A third strand of research treats the colony less as a society than as a kind of distributed computer. The theorist Idris Vasquez argues that a colony solves problems in much the way a computer network does, by passing simple messages between many units none of which holds the answer alone. When ants choose the shortest path to food, or pick the best new nest site from several on offer, they are, in his analysis, performing a computation, and one that no single ant could carry out. What looks like collective wisdom, he maintains, is really the result of many parallel interactions, each trivial in itself. He is careful to add that this does not mean the colony is conscious or that it plans ahead; the ants are not aware they are computing anything, any more than the parts of a calculator understand arithmetic.

This way of thinking has spread well beyond the study of insects. Engineers facing problems of their own - how to route traffic through a crowded network, how to schedule deliveries, how to coordinate fleets of small robots - have borrowed directly from the ant. Algorithms inspired by pheromone trails are now used to find efficient routes through complex systems, an approach that has proved its worth in real applications. The appeal is obvious: a method that needs no central controller is robust, because the failure of any one part does not bring down the whole, and it scales easily to very large numbers. The ant colony, it turns out, had solved problems of organisation long before human engineers even thought to ask the questions.

None of this means the analogy should be pushed too far. Critics caution that an ant colony is not literally a brain, a computer or a factory, and that such comparisons, however useful, are metaphors that capture only part of the truth. The deeper lesson, most researchers agree, is more general and more surprising: that sophisticated, adaptive order can arise from the bottom up, without design, planning or anyone in charge, simply from many simple agents interacting according to simple rules. It is a lesson that unsettles our instinct to look for a leader behind every organised thing.`,
        questions: [
          // ── Matching Features - statements to researchers (5 items) = 5 marks ──
          {
            id: 'rd-023-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of researchers below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Marcus Oduya' },
              { key: 'B', label: 'Selina Brandt' },
              { key: 'C', label: 'Idris Vasquez' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'A colony solves problems in much the way a computer network does.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'No single ant decides which route the colony as a whole should take.',
                answer: 'A',
              },
              {
                id: 'p3-f-3',
                text: 'The job an ant does often depends on how old it is rather than being fixed from birth.',
                answer: 'B',
              },
              {
                id: 'p3-f-4',
                text: 'The colony’s flexibility comes from the fact that no individual is irreplaceable.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'The colony is not conscious and does not plan ahead.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → C (Vasquez): he "argues that a colony solves problems in much the way a computer network does." Item 2 → A (Oduya): he "emphasises that no ant decides which route the colony should take." Item 3 → B (Brandt): she rejects fixed careers and shows "a worker’s job depends largely on its age." Item 4 → B (Brandt): "The system, in her words, is flexible precisely because no individual is irreplaceable." Item 5 → C (Vasquez): he adds that this "does not mean the colony is conscious or that it plans ahead."',
          },
          {
            id: 'rd-023-p3-q2',
            type: 'tfng',
            prompt: 'A colony of ants is directed by a single ant that issues plans to the others.',
            answer: 'false',
            explanation:
              'Paragraph A states that the colony behaves as one organism "without any ant being in charge", and that "There is no architect issuing plans and no manager assigning tasks." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-023-p3-q3',
            type: 'tfng',
            prompt:
              'A pheromone trail leading to a food source that has been used up fades over time.',
            answer: 'true',
            explanation:
              'Paragraph B says a path to a good source becomes strong "while a path to an exhausted one fades as the scent evaporates and is no longer renewed." This matches the statement, so it is True.',
          },
          {
            id: 'rd-023-p3-q4',
            type: 'tfng',
            prompt:
              'According to Brandt, young worker ants are usually the ones sent out to forage away from the nest.',
            answer: 'false',
            explanation:
              'Paragraph C says "young workers tend to remain inside, nursing the brood, while older ones graduate to the riskier work of foraging outside." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-023-p3-q5',
            type: 'tfng',
            prompt:
              'Algorithms inspired by ant behaviour have now completely replaced all older methods of routing traffic through networks.',
            answer: 'not-given',
            explanation:
              'Paragraph E says such algorithms "are now used to find efficient routes through complex systems" and have "proved its worth in real applications", but it never claims they have replaced all older routing methods. Whether older methods have been displaced is not addressed, so the answer is Not Given.',
          },
          {
            id: 'rd-023-p3-q6',
            type: 'mcq',
            prompt: 'According to the passage, how do ants mainly communicate with one another?',
            options: [
              'By touching one another with their antennae in a fixed code',
              'Through chemical scent signals called pheromones',
              'By producing sounds that other ants can detect',
              'By performing movements similar to a dance',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that "Ants talk to one another chiefly through chemicals called pheromones, scent signals that they lay down and detect with extraordinary sensitivity." Option B is correct.',
          },
          {
            id: 'rd-023-p3-q7',
            type: 'mcq',
            prompt:
              'Why, according to Oduya, does the shortest foraging route tend to become the most used?',
            options: [
              'Because the strongest ants are sent along it',
              'Because ants travelling it complete the round trip fastest and reinforce it most often',
              'Because an experienced forager chooses it for the colony',
              'Because its pheromone does not evaporate like that on other routes',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that "The shortest route tends to win simply because ants travelling it complete the round trip fastest and so reinforce it most often." Option B matches.',
          },
          {
            id: 'rd-023-p3-q8',
            type: 'mcq',
            prompt:
              'What happens, according to Brandt, when a colony suddenly loses many of its foragers?',
            options: [
              'The colony stops foraging until new workers are born.',
              'Some younger nurses mature faster and begin foraging earlier than usual.',
              'The remaining foragers refuse to leave the nest.',
              'The colony abandons the nest and searches for a new site.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C reports Brandt has shown that if a colony loses many foragers, "some of the younger nurses will mature faster and switch to foraging earlier than they otherwise would, restoring the balance." Option B is correct.',
          },
          {
            id: 'rd-023-p3-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A returning forager lays a _______ of pheromone on its way back to the nest, which other ants follow and reinforce.',
            acceptableAnswers: ['trail'],
            explanation:
              'Paragraph B states that a forager "lays a trail of pheromone on its way back to the nest; other ants follow the trail to the food and reinforce it." The required word is "trail".',
          },
          {
            id: 'rd-023-p3-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Vasquez argues that when ants choose the shortest path to food, they are performing a _______ that no single ant could carry out.',
            acceptableAnswers: ['computation'],
            explanation:
              'Paragraph D says that when ants choose the shortest path or the best nest site "they are, in his analysis, performing a computation, and one that no single ant could carry out." The required word is "computation".',
          },
          {
            id: 'rd-023-p3-q11',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: A method of organisation that needs no central controller is _______, because the failure of any one part does not bring down the whole.',
            acceptableAnswers: ['robust'],
            explanation:
              'Paragraph E states that "a method that needs no central controller is robust, because the failure of any one part does not bring down the whole." The required word is "robust".',
          },
          {
            id: 'rd-023-p3-q12',
            type: 'mcq',
            prompt: 'What do critics, as described in the final paragraph, caution about?',
            options: [
              'That ant colonies are far less organised than they appear',
              'That comparing a colony to a brain or computer is only a partial metaphor',
              'That engineers have misunderstood how pheromone trails work',
              'That ants are in fact directed by a hidden leader',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F says critics caution that "an ant colony is not literally a brain, a computer or a factory, and that such comparisons, however useful, are metaphors that capture only part of the truth." Option B reflects this.',
          },
        ],
      },
    ],
  },
]
