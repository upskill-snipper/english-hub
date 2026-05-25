// ─── IELTS Academic Reading - practice item bank (Set 18) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the story of salt in
// human history / how skyscrapers are designed and built / the science of
// laughter.
//
// This test contains three matching questions, one per passage, each of a
// different variant: Matching Headings (Passage 1, with distractors), Matching
// Information / which-paragraph (Passage 2) and Matching Features - statements
// to researchers (Passage 3), alongside the usual mix of True/False/Not Given,
// multiple choice and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_18: ReadingTest[] = [
  {
    id: 'rd-academic-018',
    title: 'Academic Reading - Practice Test 18',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-018-p1',
        title: 'The Story of Salt',
        body: `It is hard, in an age when a carton of salt costs almost nothing, to imagine that this plain white substance was once among the most fought-over commodities on Earth. Yet for most of recorded history salt was treasured, taxed, hoarded and even used as money. The reason lies in biology rather than taste. The human body cannot manufacture salt and loses it constantly through sweat and other processes, so a steady supply is not a luxury but a necessity; without it the nerves cannot fire and the muscles cannot work. For peoples whose diet was rich in meat the need could often be met from the food itself, but for the farming societies that came to dominate the ancient world, living chiefly on grain and vegetables, salt had to be found and carried, sometimes across great distances.

The deeper value of salt, however, lay not in seasoning but in preservation. Before refrigeration there was no reliable way to keep meat or fish from rotting within days, and a society that could not store food through the lean months lived perpetually on the edge of hunger. Salt changed this. Packed in salt or soaked in brine, fish and meat could be kept for months and carried far from where they were caught or slaughtered. Whole industries and trading networks grew up around salted cod, herring and pork, and navies and armies marched on provisions that salt alone made possible. In a very real sense, salt allowed civilisations to plan beyond the next harvest.

Because it was at once essential and unevenly distributed, salt was a natural source of wealth and power for any ruler who could control its supply. Governments across the ancient and medieval world imposed taxes and monopolies on it, reasoning that since everyone had to buy salt, a tax upon it could not be escaped. Such taxes were lucrative but deeply resented, and the history of salt is studded with protests and revolts provoked by the price of something people could not do without. The most famous of these came in the twentieth century, when a long protest march to the sea to make salt in defiance of a colonial monopoly became a symbol of resistance recognised around the world.

Where salt came from depended on geography. Along warm coastlines it could be harvested by letting seawater flood shallow ponds and evaporate under the sun, leaving a crust of crystals to be raked up; this method, simple and ancient, is still practised today. Inland, the picture was different. Some communities sat above vast underground deposits, the dried remains of seas that had vanished long ago, and these could be dug out as rock salt in mines that were themselves sources of great wealth. Other peoples drew salty water from natural springs and boiled it down over fires, a fuel-hungry process that nonetheless sustained settlements for centuries. Each source left its mark on the landscape and on the routes by which the salt travelled.

Those routes could be remarkably long. Across the Sahara, caravans of camels carried slabs of salt south from desert mines to the markets of West Africa, where in some periods it was exchanged for gold almost weight for weight, so scarce was salt in the regions to the south and so plentiful the gold. In Europe, roads and even towns grew up along the paths by which salt was carried from the sea or the mines to the interior, and a number of place names still echo this trade. The very word by which a Roman soldier's allowance was known is often linked, rightly or wrongly, to salt, a connection that survives in a common English word for the wages of work.

The reign of salt as a treasure could not last. In the nineteenth and twentieth centuries new methods of mining and manufacture, together with the railways and ships that could move heavy goods cheaply, caused the price of salt to collapse. At the same time the rise of canning and, later, refrigeration removed the ancient need to preserve food with salt at all. Within a few generations a substance that had shaped trade routes, filled treasuries and provoked rebellions dwindled into one of the cheapest things in the kitchen. Its story is a reminder that the value of a commodity is not fixed in its nature but granted by the needs and the technology of an age.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-018-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'A body that cannot do without it' },
              { key: 'ii', label: 'How the modern world made salt cheap' },
              { key: 'iii', label: 'Why salt is bad for human health' },
              { key: 'iv', label: 'Keeping food before the age of cold' },
              { key: 'v', label: 'Long roads carrying a precious cargo' },
              { key: 'vi', label: 'Taxes, monopolies and the anger they caused' },
              { key: 'vii', label: 'The many places salt was drawn from' },
              { key: 'viii', label: 'A single recipe shared by every nation' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'i' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'iv' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'vi' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'vii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'v' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'ii' },
            ],
            explanation:
              'A explains that "the human body cannot manufacture salt" and needs a steady supply, making it a biological necessity (i). B describes preservation "before refrigeration", how salting kept meat and fish for months (iv). C covers the taxes and monopolies imposed on salt and the "protests and revolts" they provoked (vi). D lists the different sources - coastal ponds, rock-salt mines and salty springs (vii). E follows the long trade routes, from Saharan caravans to European salt roads (v). F explains how new mining, transport, canning and refrigeration "caused the price of salt to collapse" (ii). Heading iii ("Why salt is bad for human health") is a distractor - the passage discusses the need for salt, not its harms; heading viii ("A single recipe shared by every nation") is a distractor the passage never supports.',
          },
          {
            id: 'rd-018-p1-q2',
            type: 'tfng',
            prompt: 'The human body is able to produce its own salt when supplies run low.',
            answer: 'false',
            explanation:
              'Paragraph A states plainly that "The human body cannot manufacture salt and loses it constantly." This directly contradicts the statement, so it is False.',
          },
          {
            id: 'rd-018-p1-q3',
            type: 'mcq',
            prompt:
              'According to the passage, why was salt especially important before the invention of refrigeration?',
            options: [
              'It was the only substance that could improve the flavour of food.',
              'It allowed meat and fish to be preserved and stored for months.',
              'It was the cheapest food available to farming societies.',
              'It could be used in place of coins in every market.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that "Before refrigeration there was no reliable way to keep meat or fish from rotting", but that packed in salt or brine "fish and meat could be kept for months." Option B captures this preservation role.',
          },
          {
            id: 'rd-018-p1-q4',
            type: 'tfng',
            prompt:
              'Rulers taxed salt partly because they believed a tax on it could not be avoided.',
            answer: 'true',
            explanation:
              'Paragraph C says governments imposed taxes and monopolies on salt, "reasoning that since everyone had to buy salt, a tax upon it could not be escaped." This matches the statement, so it is True.',
          },
          {
            id: 'rd-018-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Along warm coastlines, salt was obtained by allowing seawater to flood shallow ponds and _______ under the sun.',
            acceptableAnswers: ['evaporate'],
            explanation:
              'Paragraph D describes harvesting salt by "letting seawater flood shallow ponds and evaporate under the sun, leaving a crust of crystals." The required word is "evaporate".',
          },
          {
            id: 'rd-018-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Underground deposits left by vanished seas could be dug out of mines as _______.',
            acceptableAnswers: ['rock salt'],
            explanation:
              'Paragraph D states that some communities sat above deposits that "could be dug out as rock salt in mines." The required answer is "rock salt".',
          },
          {
            id: 'rd-018-p1-q7',
            type: 'tfng',
            prompt:
              'In some periods, salt carried across the Sahara was traded for gold of roughly equal weight.',
            answer: 'true',
            explanation:
              'Paragraph E says that in the markets of West Africa salt "was exchanged for gold almost weight for weight, so scarce was salt in the regions to the south." This supports the statement, so it is True.',
          },
          {
            id: 'rd-018-p1-q8',
            type: 'mcq',
            prompt:
              'What does the writer conclude from the history of salt in the final paragraph?',
            options: [
              'Salt will probably become valuable and fought-over once again.',
              'The value of a commodity comes from the needs and technology of its time.',
              'Modern societies have lost an essential skill by abandoning salting.',
              'Refrigeration has made salt completely useless in the kitchen.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph states that the story of salt "is a reminder that the value of a commodity is not fixed in its nature but granted by the needs and the technology of an age." Option B restates this conclusion.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-018-p2',
        title: 'Building Tall: How Skyscrapers Are Designed',
        body: `For most of human history the height of a building was limited by the strength of stone. A tall masonry tower had to carry its own enormous weight down through walls that grew thicker and thicker towards the base, until at some point the lowest walls would have left no usable room inside at all. The wall, in other words, was both the skin of the building and the structure that held it up, and beyond a certain height this arrangement simply could not continue. The skyscraper became possible only when engineers learned to separate these two jobs, so that a light outer covering could be hung upon a strong inner frame.

The breakthrough was the steel frame, a rigid skeleton of columns and beams that carries the weight of every floor and channels it down to the foundations. Once the frame bears the load, the outer wall no longer needs to support anything but itself and the weather; it becomes a thin curtain of glass or stone hung from the structure, which is why the term "curtain wall" is used. This separation transformed what a building could be. Floors could be stacked far higher than masonry had ever allowed, and the walls between them could open up into the broad windows that give modern towers their glassy appearance. A second invention was just as important, for no one would climb eighty floors on foot. The safety lift, which would not fall even if its cable broke, made the upper storeys of a tall building as usable as the lower ones, and without it the skyscraper would have remained an impractical curiosity.

Holding a tower up against gravity, however, turns out to be the easier problem. The far greater challenge is the wind, which presses against the broad face of a tall building with a force that grows rapidly with height and tries both to push the tower over and to make it sway. A skyscraper must therefore be braced against these sideways, or lateral, forces, and much of the hidden engineering of a tall building is devoted to this single task. Designers add stiff cores of concrete around the lift shafts, or diagonal braces within the frame, or thick "shear walls", all intended to resist the wind's push. Curiously, the aim is not to make the building perfectly rigid, which is neither possible nor desirable, but to control how much it moves. A well-designed tower is expected to sway gently at the top; the engineer's job is to keep that movement within limits the structure can tolerate and the occupants will not notice.

Comfort, indeed, can matter as much as safety. A building may be perfectly strong and yet sway just enough to make the people inside it feel queasy, as though aboard a ship. To prevent this, the tallest towers sometimes carry a remarkable device near their summit: a huge mass, often hundreds of tonnes of steel or concrete, suspended so that it can swing. When the wind pushes the building one way, the mass lags behind and pulls the other, damping the sway much as a steadying hand quiets a swinging rope. Such a tuned mass damper does nothing to make the building stronger, but it makes the upper floors far more comfortable to live and work in.

The ground beneath a skyscraper is as important as the structure above it, for all that enormous weight must ultimately be carried by the earth. Where solid rock lies close to the surface, the foundations can rest directly upon it. More often, engineers must drive long columns called piles deep into the ground until they reach a firm layer, transferring the building's load past the soft soil near the surface. Getting this wrong is not an option, since a tower that settles unevenly will lean, and the famous leaning towers of history are monuments to foundations that were not equal to their burden. The design of what cannot be seen, below ground, is among the most demanding parts of the whole enterprise.

Today the limits on height are as much economic as structural. Engineers are confident they could build considerably higher than the tallest towers that now exist; what restrains them is the cost and the awkward arithmetic of very tall buildings. As a tower rises, an ever larger share of each floor must be given over to the lifts and structure needed to serve the floors above, until eventually the topmost storeys provide too little usable space to justify their expense. The supertall building, for all its drama, is governed in the end not only by the laws of physics but by the harder logic of money.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-018-p2-q1',
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
                text: 'a description of a heavy moving device used to reduce uncomfortable swaying',
                answer: 'D',
              },
              {
                id: 'p2-i-2',
                text: 'the point that what limits height today is increasingly financial rather than technical',
                answer: 'F',
              },
              {
                id: 'p2-i-3',
                text: 'an explanation of why thick masonry walls set a limit on building height',
                answer: 'A',
              },
              {
                id: 'p2-i-4',
                text: 'a reference to the importance of foundations that reach a firm layer underground',
                answer: 'E',
              },
              {
                id: 'p2-i-5',
                text: 'a statement that an invention was needed before people would use the upper floors',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → D, which describes the "tuned mass damper", a suspended mass that swings to damp the building\'s sway. Item 2 → F: "the limits on height are as much economic as structural" and are "governed... by the harder logic of money." Item 3 → A, which explains that masonry walls "grew thicker and thicker towards the base" until no room remained. Item 4 → E, which describes driving piles "deep into the ground until they reach a firm layer." Item 5 → B, which states that without the safety lift "no one would climb eighty floors on foot" and the skyscraper "would have remained an impractical curiosity."',
          },
          {
            id: 'rd-018-p2-q2',
            type: 'mcq',
            prompt: 'What made the skyscraper possible, according to the passage?',
            options: [
              'Making the outer walls thicker so they could bear more weight',
              'Separating the load-bearing structure from the outer covering',
              'Replacing stone entirely with glass in the walls',
              'Reducing the number of floors carried by each wall',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph A says the skyscraper "became possible only when engineers learned to separate these two jobs, so that a light outer covering could be hung upon a strong inner frame." Option B states this separation.',
          },
          {
            id: 'rd-018-p2-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Because the frame carries the load, the thin outer wall of glass or stone hung from it is known as a _______.',
            acceptableAnswers: ['curtain wall'],
            explanation:
              'Paragraph B explains that the outer wall "becomes a thin curtain of glass or stone hung from the structure, which is why the term \'curtain wall\' is used." The required answer is "curtain wall".',
          },
          {
            id: 'rd-018-p2-q4',
            type: 'tfng',
            prompt:
              'The passage states that supporting a tower against gravity is harder than bracing it against the wind.',
            answer: 'false',
            explanation:
              'Paragraph C says "Holding a tower up against gravity... turns out to be the easier problem. The far greater challenge is the wind." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-018-p2-q5',
            type: 'mcq',
            prompt: 'What does the passage say is the aim when designing a tower to resist wind?',
            options: [
              'To make the building completely rigid so it cannot move at all',
              'To allow the building to sway as much as possible to release the force',
              'To control the amount the building moves within tolerable limits',
              'To ensure the building leans slightly into the prevailing wind',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C states that the aim "is not to make the building perfectly rigid... but to control how much it moves", keeping the sway "within limits the structure can tolerate and the occupants will not notice." Option C matches.',
          },
          {
            id: 'rd-018-p2-q6',
            type: 'tfng',
            prompt: 'A tuned mass damper increases the structural strength of a tall building.',
            answer: 'false',
            explanation:
              'Paragraph D says the tuned mass damper "does nothing to make the building stronger, but it makes the upper floors far more comfortable." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-018-p2-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Where there is no solid rock near the surface, engineers drive long columns called _______ deep into the ground to reach a firm layer.',
            acceptableAnswers: ['piles'],
            explanation:
              'Paragraph E says engineers "must drive long columns called piles deep into the ground until they reach a firm layer." The required word is "piles".',
          },
          {
            id: 'rd-018-p2-q8',
            type: 'tfng',
            prompt:
              'Engineers believe it is currently impossible to build any higher than the tallest existing towers.',
            answer: 'false',
            explanation:
              'Paragraph F states that "Engineers are confident they could build considerably higher than the tallest towers that now exist", but are restrained by cost. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-018-p2-q9',
            type: 'mcq',
            prompt:
              'According to the final paragraph, why does extra height eventually stop being worthwhile?',
            options: [
              'The wind at great height becomes impossible to resist.',
              'A growing share of each floor must serve the floors above, leaving too little usable space.',
              'The foundations can no longer be made to reach solid rock.',
              'Lifts cannot be built to travel beyond a certain height.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F explains that "an ever larger share of each floor must be given over to the lifts and structure needed to serve the floors above, until eventually the topmost storeys provide too little usable space to justify their expense." Option B matches this economic argument.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-018-p3',
        title: 'The Science of Laughter',
        body: `Laughter feels like one of the most personal of human responses, an involuntary burst of delight at something funny. Yet when scientists began to study it closely they found something surprising: most laughter has little to do with jokes at all. Researchers who eavesdropped on thousands of everyday conversations, noting exactly what was said in the moments before someone laughed, discovered that the great majority of laughs followed remarks that were not in any way humorous - banal comments, greetings and questions of the most ordinary kind. Laughter, it seemed, was less a reaction to wit than a social signal, a sound we make to smooth and bind our dealings with one another.

The most telling clue to its true purpose is that we laugh far more readily in company than alone. The psychologist Robert Provine, who pioneered the study of everyday laughter, found that people are many times more likely to laugh when others are present than when they are by themselves, even when they are doing exactly the same thing, such as watching the same comedy. This strongly suggests that laughter is fundamentally about connection rather than amusement. Provine also noticed that within a conversation it is usually the speaker, not the listener, who laughs most, which fits awkwardly with the idea that laughter is simply a response to something funny that one has heard.

If laughter is a social glue, it is one we have inherited from deep in our evolutionary past. The primatologist Marina Devlin studies the play of young apes, which pant and gasp in a rhythmic way when they tumble and chase one another, especially during mock fighting. This panting, she argues, is the direct ancestor of human laughter, a signal that the rough-and-tumble is only a game and that no real aggression is meant. On this view laughter began as a way of saying "this is play", long before our ancestors could say anything at all, and its modern role in defusing tension and signalling goodwill is a refinement of that ancient function rather than a break from it.

Not all laughter, however, springs from the same source, and here researchers draw an important distinction. The neuroscientist Hassan Bauer separates the spontaneous, helpless laughter that bubbles up unbidden - the kind that can leave us gasping and unable to stop - from the deliberate, polite laughter we produce on purpose to be agreeable. The two, he has shown, are driven by different pathways in the brain and even sound subtly different to the ear, so that listeners can usually tell a genuine laugh from a posed one. The polite version, he suggests, is a relatively recent overlay, a piece of voluntary social theatre laid on top of the older, automatic response we share with other animals.

Because laughter binds groups together, it can also be turned outward to exclude. Bauer points out that the same signal that draws a circle of friends closer can, as mockery, be aimed at those outside the circle, and that the dread of being laughed at is a powerful force shaping human behaviour. Devlin adds that this double edge is precisely what one would expect of a signal that evolved to mark the boundaries of a group, defining who belongs by making plain who does not. Laughter, in this light, is not simply warm and benign; it is a tool for managing membership, capable of wounding as well as welcoming.

One further feature has long puzzled observers: laughter spreads. The sound of one person laughing tends to set off others, which is why theatres are designed to seat audiences together and why some television programmes once added recorded laughter to their soundtracks in the hope of coaxing it from viewers at home. Provine regards this contagiousness as further proof that laughter is built for groups rather than individuals, a kind of behaviour that passes from person to person almost like a yawn. It is not, on this account, something we choose to do so much as something that happens to us when we are among others who are doing it too.

Whatever its uses, laughter appears to be genuinely good for us, though scientists are careful not to overstate the case. There is reasonable evidence that a good laugh relaxes the muscles, eases the body's response to stress and may modestly improve the flow of blood, and the simple fact that laughter strengthens social bonds is itself valuable, since strong relationships are among the best predictors of long-term health. Some popular claims, however, run well ahead of what has actually been demonstrated, and Bauer cautions that laughter is no miracle cure. Its real power, the researchers broadly agree, lies less in any direct effect on the body than in its extraordinary ability to knit human beings together.`,
        questions: [
          // ── Matching Features - statements to researchers (5 items) = 5 marks ──
          {
            id: 'rd-018-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of researchers below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Robert Provine' },
              { key: 'B', label: 'Marina Devlin' },
              { key: 'C', label: 'Hassan Bauer' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'Spontaneous and deliberate laughter are produced by different pathways in the brain.',
                answer: 'C',
              },
              {
                id: 'p3-f-2',
                text: 'The rhythmic panting of young apes at play is the direct ancestor of human laughter.',
                answer: 'B',
              },
              {
                id: 'p3-f-3',
                text: 'Within a conversation, the speaker usually laughs more than the listener.',
                answer: 'A',
              },
              {
                id: 'p3-f-4',
                text: 'A signal that bonds a group is naturally suited to marking who is excluded from it.',
                answer: 'B',
              },
              {
                id: 'p3-f-5',
                text: 'Laughter should not be regarded as a miracle cure for ill health.',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → C (Bauer): he shows spontaneous and deliberate laughter "are driven by different pathways in the brain." Item 2 → B (Devlin): the apes\' panting "is the direct ancestor of human laughter." Item 3 → A (Provine): he "noticed that within a conversation it is usually the speaker, not the listener, who laughs most." Item 4 → B (Devlin): she adds that the double edge "is precisely what one would expect of a signal that evolved to mark the boundaries of a group." Item 5 → C (Bauer): he "cautions that laughter is no miracle cure."',
          },
          {
            id: 'rd-018-p3-q2',
            type: 'tfng',
            prompt:
              'Studies of everyday conversation found that most laughter follows remarks that are genuinely funny.',
            answer: 'false',
            explanation:
              'Paragraph A reports that "the great majority of laughs followed remarks that were not in any way humorous." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-018-p3-q3',
            type: 'mcq',
            prompt:
              'What does the passage say is the most telling clue to the true purpose of laughter?',
            options: [
              'That people find the same jokes funny across different cultures',
              'That we laugh far more readily in company than when alone',
              'That children laugh more often than adults do',
              'That laughter is impossible to fake convincingly',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B states that "The most telling clue to its true purpose is that we laugh far more readily in company than alone." Option B matches directly.',
          },
          {
            id: 'rd-018-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Devlin argues that laughter began as a way of signalling that rough-and-tumble is only _______, before our ancestors could speak.',
            acceptableAnswers: ['play'],
            explanation:
              'Paragraph C says laughter "began as a way of saying \'this is play\', long before our ancestors could say anything at all." The required word is "play".',
          },
          {
            id: 'rd-018-p3-q5',
            type: 'tfng',
            prompt:
              'According to Bauer, listeners can usually tell the difference between a genuine laugh and a posed one.',
            answer: 'true',
            explanation:
              'Paragraph D says the two kinds of laughter "even sound subtly different to the ear, so that listeners can usually tell a genuine laugh from a posed one." This matches the statement, so it is True.',
          },
          {
            id: 'rd-018-p3-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Bauer describes polite laughter as a relatively recent overlay, a piece of voluntary social _______ laid over an older automatic response.',
            acceptableAnswers: ['theatre'],
            explanation:
              'Paragraph D calls the polite version "a relatively recent overlay, a piece of voluntary social theatre laid on top of the older, automatic response." The required word is "theatre", exactly as it appears in the passage.',
          },
          {
            id: 'rd-018-p3-q7',
            type: 'tfng',
            prompt:
              'The passage suggests that laughter can be used to exclude people as well as to include them.',
            answer: 'true',
            explanation:
              'Paragraph E says the same signal that "draws a circle of friends closer can, as mockery, be aimed at those outside the circle", and is "capable of wounding as well as welcoming." This supports the statement, so it is True.',
          },
          {
            id: 'rd-018-p3-q8',
            type: 'tfng',
            prompt:
              'Scientists have proven that laughter is one of the most effective medical treatments available.',
            answer: 'not-given',
            explanation:
              'Paragraph F notes some modest health benefits but stresses that scientists are "careful not to overstate the case" and that laughter "is no miracle cure." The passage neither makes nor supports the specific claim that it is among the most effective medical treatments, so this is Not Given.',
          },
          {
            id: 'rd-018-p3-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Provine treats the way laughter spreads from person to person, almost like a _______, as proof that it is built for groups.',
            acceptableAnswers: ['yawn'],
            explanation:
              'The paragraph on contagiousness says laughter is "a kind of behaviour that passes from person to person almost like a yawn", which Provine regards as proof it is built for groups. The required word is "yawn".',
          },
          {
            id: 'rd-018-p3-q10',
            type: 'mcq',
            prompt: 'What do the researchers broadly agree is the real power of laughter?',
            options: [
              'Its direct ability to cure physical illness',
              'Its capacity to make people find life funnier',
              'Its extraordinary ability to knit human beings together',
              'Its usefulness in helping people fall asleep',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph concludes that laughter\'s "real power... lies less in any direct effect on the body than in its extraordinary ability to knit human beings together." Option C restates this.',
          },
        ],
      },
    ],
  },
]
