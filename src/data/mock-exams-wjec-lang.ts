// @ts-nocheck

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * All nine extracts are specially written for this bank (the Wave 5 content
 * batch, commit 8abb2cc1); none is a published writer's words. Their labels
 * said otherwise. The three Component 1 passages were "Adapted literary
 * fiction", which reads as a published novel cut down, and one was dated
 * "early 20th century" although nothing in it belongs to that period.
 * Component 2 Paper 1 credited its two articles to the Guardian and
 * Psychology Today: prose written here, printed under the names of real
 * publications. Web searches for a distinctive sentence from four of the
 * passages, both of those articles among them, found no published source.
 * Every label now says Original.
 *
 * The model answers were not in step with the extracts:
 *   - a quotation with its words changed: "feeds the great machinery" (the
 *     text: "another small hunger feeding the great machinery");
 *   - quotations that silently dropped words: "compassion had its own kind
 *     of honesty" three times (the text has "she realised" in the middle),
 *     "talked late into nights", "beautiful and indifferent to
 *     beauty-seeking", "harder and more lonely", "boys found it threatening",
 *     "tea rooms and draper's shops";
 *   - short quotations, under the checker's four-word threshold, that are not
 *     in the text at all: "chosen", "twenty minutes", "between", "digest",
 *     "digests", "digesting", "mechanism", "commodity", "value", "beyond",
 *     "came", "believed", "ladylike", "pats her hand" (the chairman "patted"
 *     it) and "excitable", which the newspaper never wrote: its note says
 *     "ladies often became overexcited", of ladies in general, not of her;
 *   - wrong terms: the fragment "Then twenty." called analepsis (a
 *     flashback); two separate short sentences called asyndeton; the literal
 *     "weight of snow" called a metaphor and the simile "like a cathedral" a
 *     metaphor; "beautiful and indifferent" called oxymoronic; "another"
 *     called a possessive article; "glittering" called colour imagery; a
 *     free-standing sentence called parenthetical;
 *   - claims about the wrong lines: sentences called "the final line" that
 *     are not last; the digestion image placed in James's second year (it is
 *     in the first); the vicar's "unnecessary" given to Margaret's interests
 *     (it is said of her walks); a claim that unmarried women travelled
 *     chaperoned, and readings of "capitalist systems" and "gaslighting" that
 *     the words quoted do not support; "Her speak is not futile protest".
 * Those answers now quote only what their extract says and analyse the words
 * they quote.
 *
 * Also repaired: the em-dash sweep of May 2026 (commit f82b978f) left words
 * joined by a bare hyphen ("her choice-a deliberate turning away"), now
 * spaced; the extracts, which are the site's own prose, and the answers were
 * in American spelling and are now British; the Component 2 subtitle
 * said "Imaginative Writing" over sections of transactional writing;
 * Component 2 Paper 1's Extract B ended by calling the struggle it defends
 * "a personal failing"; a writing task asked for "local shops and gather
 * spaces".
 *
 * Found on a second reading the same day. That hyphen repair split one real
 * compound, leaving "a more psychologically damaging form of isolation -
 * driving pressure", and spaced the number ranges ("A grade 4 - 5
 * response", "400 - 600 words"). A model answer said "back towards the world
 * she had sworn to abandon" shows the world to be "internal", which the words
 * do not say; another gave the James passage an "implicit argument" for
 * resisting the city that it never makes; the Paper 3 answers had "hidden
 * books" (there is one), called a noun phrase a clause, and called
 * Margaret's striding "the opening image" (the passage opens with her
 * mother). The suggested times gave a 12-mark question 10 minutes and an
 * 8-mark one 15; in Component 2 they added up to 80 minutes in a section
 * that says 75. They now follow the marks. Component 2 Paper 3 Question 3
 * told students that both extracts "discuss what is being lost", which the
 * work-life essay does not; it now asks what each writer thinks is lost or
 * undervalued.
 *
 * NOT FIXED, a content decision. The real Component 1 paper prints a
 * published twentieth-century prose extract, and Component 2 pairs a
 * nineteenth-century with a twenty-first-century text. These papers practise
 * the question types, but with specially written passages, so they do not
 * practise reading the kinds of source the exam sets.
 *
 * The papers are not served: nothing imports wjecLangMocks (checked 27
 * September 2026; teacher-toolkit-index.ts names this file only as a string).
 * The repository is public, though, and a bank that is wired in later prints
 * what is here.
 */

import { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams'

// ============================================================================
// COMPONENT 1: LITERARY EXTRACTS
// ============================================================================

// Original fiction, specially written for this practice paper.
const WJEC_C1_P1_LITERARY_EXTRACT = `In the grey light of dawn, the valley lay still beneath a weight of snow. Sarah stood at the window of the cottage, her fingers pressed against the cold pane, watching the path that wound down towards the village. For three months now, she had barely left this room. The isolation had been her choice - a deliberate turning away from the noise and judgement of the world below.

She had come here to escape, and escape she had. The previous owner's books lined the shelves; the kitchen was well-stocked; the isolation absolute. But this morning, something had shifted. A car had become stuck on the bend below, and through her binoculars she could see an elderly man struggling in the snow, his movements slow and confused.

Sarah watched for ten minutes. Then twenty. No other cars passed. The village was two miles away. His chances of being found before nightfall were minimal.

She pulled on her boots. She wrapped her scarf around her face. And she walked down into the snow, back towards the world she had sworn to abandon. Later, when the old man asked her name, she almost didn't answer. But compassion, she realised, had its own kind of honesty. You could not truly live by running away from others; you could only live by running towards them, however imperfectly, however afraid.`

// Original fiction, specially written for this practice paper.
const WJEC_C1_P2_LITERARY_EXTRACT = `The city rose before James like a cathedral of ambition. He had come from the small towns of the south, where the horizons were wide and the pace was slow, and the sight of London's towers filled him with a hunger he couldn't name. He was twenty-two, with nothing but a suitcase and the belief that the city would absorb him, transform him, make him into something greater than the narrow self he'd known at home.

For the first year, he lived in a room barely larger than a cupboard, worked in a bookshop for wages that would have seemed insulting anywhere but the capital, and walked the streets at night as though he were being slowly digested by some vast and glittering beast. The city was both beautiful and indifferent to his beauty-seeking. It had no use for his provincial wonder. It wanted only what it had always wanted: more, faster, now.

He made friends with others like himself - hungry, bright young people who spoke of art and politics and the future as though these were places they could actually live. They talked late into the nights in basement bars, and it seemed to James that the city was not absorbing him so much as it was consuming him, atom by atom, replacing the boy he had been with something harder and more useful and infinitely more lonely. By his third year in London, he barely remembered what he had come to find. He had become what the city needed: another voice, another ambition, another small hunger feeding the great machinery.`

// Original fiction, specially written for this practice paper.
const WJEC_C1_P3_LITERARY_EXTRACT = `Her mother had said it was unladylike. The vicar had suggested it was unnecessary. The local boys, she suspected, found it threatening. But Margaret continued her evening walks through the town regardless, striding past the tea rooms and the draper's shops in 1957, her sensible shoes striking the pavement with a rhythm that was almost defiant.

She was twenty-eight and unmarried, which was itself a form of rebellion. She worked as a secretary, which paid her own way and required no man's permission. She read Simone de Beauvoir, which she kept carefully hidden beneath the floorboards of her bedroom. And she had opinions - about politics, about education, about the role of women in a society that seemed determined to keep them small and manageable and safely contained within the domestic sphere.

The town was not large enough to contain Margaret's questions. When she spoke at the parish council about extending the library's opening hours, the chairman had actually patted her hand and told her not to trouble herself with such matters. When she wrote a letter to the local newspaper about equal pay, it was published with a condescending editorial note suggesting that ladies often became overexcited about such topics.

But Margaret continued. She wore her skirts shorter than was fashionable. She took the train to London alone. She made friends with other women who questioned and argued and refused to become the dutiful daughters their mothers had been. And in this refusal - this small, daily insistence on her own right to exist fully in the world - she discovered something her mother had never known: the quiet power of a woman who will not be made small.`

// ============================================================================
// COMPONENT 2: NON-FICTION EXTRACTS
// ============================================================================

// Original article, specially written for this practice paper.
const WJEC_C2_P1_NONFICTION_A = `The decline of the high street is not, as many commentators suggest, primarily an economic issue. It is, more fundamentally, a loss of community. For generations, the high street was the heart of the town - not merely a place to buy goods, but a space where neighbours met, where knowledge was shared, where the identity of place was forged and reinforced.

The corner shop owner knew his customers' names and preferred purchases. The market traders were fixtures, their presence a marker of continuity and belonging. The public house served not merely alcohol but civic purpose; it was where news was exchanged, where disputes were mediated, where the social fabric was daily rewoven.

The online shopping revolution has made shopping more convenient, certainly. But convenience has come at a cost that no algorithm calculates: the gradual dissolution of public life. When we buy online, we do not encounter our neighbours. We do not overhear conversations or stumble upon unexpected connections. We do not participate in the small rituals and exchanges that once constituted community life.

The high streets of Britain are dying not because of simple market forces, but because we have systematically chosen efficiency over connection. We have valued the speed of delivery over the slowness of relationship. And in doing so, we have created a strange new loneliness at the heart of our towns - the loneliness of having everything available but nothing to belong to.`

// Original article, specially written for this practice paper.
const WJEC_C2_P1_NONFICTION_B = `The smartphone in your pocket is designed to be addictive. This is not speculation or moral panic; it is the documented intention of the engineers and psychologists who created it. Every notification is calibrated to trigger a neural response. Every interface is coloured and configured to maximise engagement. The apps you use have teams of specialists dedicated entirely to keeping you using them, checking them, returning to them obsessively throughout the day.

Social media platforms, which now dominate how billions of people access information and construct their sense of self, operate according to a business model that requires your addiction. They are free to use because you are not the customer - you are the product being sold to advertisers. The more time you spend, the more valuable the data about your behaviours and preferences becomes. Your attention is the commodity being harvested and monetised.

The consequences are measurable and troubling. Studies consistently show correlations between heavy social media use and increased rates of anxiety, depression, and loneliness - particularly among young people whose psychological development is still forming. The constant stream of curated, filtered versions of others' lives creates unrealistic standards and fuels perpetual dissatisfaction with our own circumstances.

Yet the addictive potential is rarely discussed openly. Instead, we frame social media use as a matter of personal responsibility: "Just use it less," we tell ourselves and each other. This ignores the reality that these platforms employ some of the world's brightest minds specifically to make moderation difficult. Struggling to put down a tool designed to be addictive is not a personal failing, and it is not a burden we should be asked to bear alone.`

// Original essay, specially written for this practice paper.
const WJEC_C2_P2_NONFICTION_A = `The extinction of species is not a future crisis - it is a present catastrophe. We are living through what scientists call the sixth mass extinction, an era when the rate of species loss is between 1,000 and 10,000 times higher than the natural baseline. Unlike previous extinction events, which were driven by geological or astronomical phenomena, this one has a single cause: us.

The mechanisms are familiar: habitat destruction through deforestation and development, pollution of air and water, climate change, overexploitation through hunting and fishing, and the introduction of invasive species. Each of these would be concerning in isolation. Together, they form a perfect catastrophe for the natural world.

The loss is not merely aesthetic or sentimental. Every species exists within complex networks of ecological relationship. Remove one thread, and the entire web begins to unravel. Plants depend on specific pollinators. Predators depend on prey. Decomposers depend on the dead matter of countless other organisms. When we lose species at this rate, we are simplifying ecosystems to dangerous degrees, reducing resilience and increasing the likelihood of cascading collapse.

What makes this crisis particularly difficult is that its most catastrophic effects will be felt by people who are not responsible for it. The nations that contributed least to climate change and biodiversity loss will experience them most severely. This is not merely an environmental crisis; it is a justice crisis. Unless we transform our relationship with the natural world fundamentally and soon, we will bequeath to future generations a vastly diminished and far less generous planet than the one we inherited.`

// Original essay, specially written for this practice paper.
const WJEC_C2_P2_NONFICTION_B = `Reading, in the contemporary moment, has undergone a profound transformation. For centuries, reading meant sitting quietly with a book, allowing the mind to inhabit another's consciousness, following complex arguments through sustained attention. This form of reading developed particular cognitive capacities: the ability to concentrate, to delay gratification, to hold multiple threads of meaning in mind simultaneously.

The screen has fundamentally altered this practice. Online reading is characterised by fragmentation - we encounter texts in short bursts, interrupted by notifications, hyperlinks, and the constant temptation to switch to a different window or application. Studies of online reading behaviour show patterns of skimming and scanning rather than deep comprehension. The average internet user spends mere seconds on any given page before moving on.

This shift is not neutral. It is reshaping how we think. The neuroplasticity of the brain means that repeated patterns of attention literally rewire neural pathways. Those who spend most of their reading time online are developing different cognitive patterns from those who read primarily from paper. This is not a judgement - it is simply an observation about how media shapes consciousness.

The concern is not that screen reading is wholly bad, but that it may be becoming the default, even as research suggests that deep, sustained reading produces different and arguably richer forms of understanding. If an entire generation learns to read primarily through screens, accustomed to fragmented attention and superficial engagement, what capacities will they lack? What forms of understanding will become increasingly rare? These are not nostalgic questions - they are urgent ones about the future of human cognition itself.`

// Original essay, specially written for this practice paper.
const WJEC_C2_P3_NONFICTION_A = `The concept of work-life balance has become ubiquitous in contemporary management culture. Every corporation promotes it, every wellness programme emphasises it, every lifestyle magazine features articles about achieving it. Yet the phrase itself contains a troubling assumption: that work and life are separate domains that need to be managed in equilibrium.

This framing is relatively recent. For most of human history, work was not separated from life - it was integrated into it. Subsistence farmers did not clock out at five o'clock. Artisans in pre-industrial societies did not experience a clear boundary between labour and leisure. The separation is a product of industrialisation, an attempt to rationalise and control human productivity.

Yet this separation has never been as clean as the rhetoric suggests. For many workers, particularly those in service industries and care professions, the boundary remains porous. For others, particularly in knowledge work and creative fields, work seeps perpetually into supposed leisure time. The email that arrives at dinner, the work problem mulled over during a walk, the project that colonises your thoughts even as you're supposedly resting - these are the norm rather than the exception.

Perhaps the real issue is not achieving balance between separate domains, but developing a more integrated understanding of how we want to spend our time and energy across all the dimensions of our lives. This requires not just personal discipline but structural change: workplaces that respect boundaries not because balance is good for productivity, but because human flourishing demands it; cultures that value rest and presence as intrinsic goods, not merely as fuel for future productivity; and an economic system that does not demand the impossible equation of being fully present at work while also fully present at home.`

// Original essay, specially written for this practice paper.
const WJEC_C2_P3_NONFICTION_B = `Public libraries occupy a peculiar and increasingly precarious position in contemporary society. They are spaces of profound democratic significance - institutions founded on the principle that knowledge and stories should be available to all regardless of ability to pay. Yet they are also expensive to maintain, used by a minority of the population, and seemingly expendable in times of budget constraint.

The decline of library usage in some demographics has been attributed to the internet. Why visit a library to look up information when you can access infinitely more through a screen at home? Why borrow a book when you can purchase it on Kindle? These questions assume that libraries are primarily about the efficient distribution of information, when in fact their greatest value may lie in other dimensions.

Libraries are gathering spaces where homeless people find shelter and dignity. They are places where children from homes without books encounter stories and imagination. They are hubs where people without internet access remain connected to essential digital services. They are communities of readers and learners and seekers. They are institutions that trust their users, that do not require payment, that operate according to principles of hospitality rather than profit.

In treating libraries as mere conduits for information, we have missed what has always been their deeper purpose: to be commons - spaces held in trust for the public good, where the poorest person has as much right as the wealthiest, where knowledge is not a commodity but a human right. If we allow these institutions to fade, we will have dismantled not just buildings but a vital democratic infrastructure. We will have declared that some people's access to knowledge and community is simply not worth the cost.`

// ============================================================================
// COMPONENT 1, PAPER 1: 20th Century Literature + Creative Writing
// ============================================================================

const WJEC_C1_P1: MockExamPaper = {
  id: 'wjec-c1-lang-p1',
  board: 'WJEC',
  paperNumber: 1,
  component: 1,
  title: 'WJEC GCSE English Language: Component 1, Paper 1',
  subtitle: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
  code: 'C700U10-1',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'c1-p1-reading',
      title: 'Section A: Reading',
      totalMarks: 40,
      description:
        'Read the extract below and answer all questions. You have 60 minutes for this section.',
      sourceText: WJEC_C1_P1_LITERARY_EXTRACT,
      sourceAttribution: 'Original fiction, specially written for this practice paper',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            "How does the writer use language to convey Sarah's initial state of mind in the opening paragraph?",
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The writer uses words like "grey" and "weight" to create a heavy, depressed atmosphere that matches Sarah\'s mood. The snow covering the valley suggests isolation and coldness, showing she is separated from the world. The phrase "deliberate turning away" tells us directly that Sarah has chosen to be alone. The cold pane under her fingers emphasises the barrier between her and other people, which reflects her emotional state.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The writer creates a pathetic fallacy where the natural setting reflects Sarah\'s emotional landscape. Words such as "grey," "still," and the heavy phrase "weight of snow" establish a tone of stasis and depression. The deliberate parallel between the physical isolation of the cottage and her emotional withdrawal creates an immediate sense of alienation. The image of her pressing her fingers against the "cold pane" is particularly effective - it suggests both barrier and longing, her hand seeking connection while the glass remains cold and unyielding. This tactile detail conveys psychological tension beneath apparent calm.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The opening establishes Sarah\'s psychological state through sophisticated use of setting and sensory detail. The natural world is rendered in muted, almost monochromatic language ("grey light," "weight of snow"), creating an environment that externalises her emotional numbness while paradoxically emphasising the heaviness of her withdrawal. The verb "pressed" suggests both yearning and resistance - her hand moves towards connection but stops short, literally and figuratively bounded by the glass. The plain statement "For three months now, she had barely left this room" is given without comment or explanation, as though this self-imposed imprisonment is so established it barely needs stating - a technique that conveys the totality of her isolation. The phrase "deliberate turning away" is crucial: it establishes that her isolation is chosen, not imposed, which complicates our understanding of her character. She is active in her rejection of the world, making her subsequent decision to help the old man a more significant moral turning point.',
            },
          ],
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText: "What does the passage suggest about the reasons for Sarah's isolation?",
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The text says Sarah came to the cottage "to escape" and it was a "deliberate turning away from the noise and judgement of the world below." This suggests two things upset her: the noise and the judgement. The judgement is important - it implies people were criticising her or not accepting her. The isolation was her escape from these negative things in the outside world.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The passage indicates Sarah\'s isolation is motivated by a need to escape both literal and figurative noise - the "noise and judgement of the world." This dual motivation suggests her withdrawal is both active and defensive: she is escaping from something (external judgement and social pressure) rather than towards something positive. The fact that this escape is described as "deliberate" and as "her choice" suggests a degree of agency, but also possibly of desperation. The three-month timeframe implies this is not a brief retreat but a more extended withdrawal that has become habitual, and the phrase "escape she had" suggests she regards it, for now, as a success.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer carefully distinguishes between different forms of social pressure that drove Sarah\'s retreat. The "noise" of the world suggests the cacophony of constant demands and stimulation of modern life. But more significantly, the "judgement" points to interpersonal rejection or condemnation, a more psychologically damaging pressure towards isolation. The ambiguity here is productive: we are not told what she is being judged for, which universalises her experience. The passage offers no moral judgement of her escape; instead, it presents her withdrawal as a rational, if incomplete, response to social pain. The three-month duration and her establishment of a sustainable life (a "well-stocked" kitchen, the previous owner\'s books on the shelves) suggest this is not a crisis response but a considered attempt at an alternative way of living. This context makes her ultimate decision to help the old man more dramatically significant - it represents a conscious choice to re-engage with the world despite the pain that drove her away.',
            },
          ],
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            'How does the writer create suspense in the passage? Analyse specific techniques.',
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The writer creates suspense by describing the old man stuck in the snow. We don\'t know if he will be rescued. The writer has Sarah watching for ten, then twenty minutes, which creates tension because we\'re waiting to see if she will help. The paragraph starting "Sarah watched" makes us wonder what she will decide. Her decision to go and help is suspenseful because we\'ve been waiting for her choice. The short sentences like "No other cars passed" create urgency.',
            },
            {
              gradeRange: '6-7',
              answer:
                'Suspense is created through several techniques. First, the situation itself is inherently dramatic: an elderly person in danger, isolated and in physical distress. The writer uses temporal progression - "ten minutes," then the fragment "Then twenty." - to build tension as Sarah deliberates. This extended moment of inaction creates what might be called "negative space" where the reader awaits action. The phrase "His chances of being found before nightfall were minimal" introduces genuine jeopardy and a deadline. Short, declarative sentences ("No other cars passed. The village was two miles away.") create a staccato rhythm that conveys both the barrenness of the landscape and the urgency of the situation. Crucially, because we know Sarah\'s history of withdrawal, we genuinely don\'t know if she will help. This creates character-based suspense: will she remain isolated, or will she break her self-imposed imprisonment?',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer constructs suspense through multiple interlocking techniques. The situation itself presents immediate physical jeopardy, but the real tension is psychological: we are uncertain whether Sarah will break her three-month retreat to help a stranger. The writer builds this tension through careful temporal pacing. The sequence "watched for ten minutes. Then twenty" stretches the moment: the verbless fragment "Then twenty." adds ten more minutes in two words, making the reader feel the same duration of deliberation that Sarah does. This temporal expansion mirrors her internal conflict. The line "His chances of being found before nightfall were minimal" introduces both physical danger and a hard deadline - narrative stakes are clearly established. At the sentence level, the writer employs brevity, placing short declarative sentences side by side with no connectives to link them: "No other cars passed. The village was two miles away." The run of short sentences creates a rhythm that feels almost breathless, conveying both the landscape\'s isolation and Sarah\'s mounting emotional pressure. The greatest suspense, however, derives from character tension rather than plot mechanics. Because we understand the depth of Sarah\'s withdrawal and her stated intention to remain isolated, her ultimate choice to help becomes genuinely unpredictable. The passage is structured so that the reader cannot anticipate her decision - we hold our breath through her deliberation precisely because her previous behaviour provides no clear indication of what she will choose. The sentence that resolves it, "And she walked down into the snow, back towards the world she had sworn to abandon," is narratively inevitable yet emotionally surprising - a paradox that generates the deepest form of suspense: existential change.',
            },
          ],
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            'Discuss what the passage reveals about human connection and isolation. Support your answer with reference to the text.',
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The passage shows that isolation is not natural for humans. Sarah has chosen to be alone, but when she sees someone in danger, she cannot ignore them. This suggests that human connection is stronger than the desire to be alone. Near the end, Sarah realises that compassion "had its own kind of honesty" - this suggests that being kind to others is more real and true than hiding away. The passage suggests that we cannot really live by running away from people; we need other people. The last sentence says you "could not truly live by running away from others" - meaning that connection with others is important to a real life.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The passage develops a complex meditation on the necessity of human connection despite the pain it can cause. Sarah\'s initial isolation is presented as an escape from "noise and judgement," suggesting connection involves risk and vulnerability. However, her response to the old man\'s predicament reveals that complete isolation is untenable - when faced with genuine human need, her withdrawal becomes impossible to maintain. The passage suggests isolation is not truly possible; even in deliberate retreat, we remain implicated in others\' fates. The concluding reflection - "compassion, she realised, had its own kind of honesty" - is philosophically significant. It posits that engagement with others, however difficult, is more fundamentally true than retreat. The sentence "You could not truly live by running away from others; you could only live by running towards them" encapsulates the passage\'s central argument: authentic life requires connection despite the vulnerability it entails. The word "imperfectly" in "however imperfectly, however afraid" is crucial - it acknowledges that re-engagement is difficult and incomplete, yet necessary.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The passage constructs a sophisticated argument about the paradox of human isolation through both narrative and philosophical reflection. Sarah\'s three-month retreat represents a rational but ultimately incomplete response to social pain. The writer carefully establishes that her isolation is not pathological but chosen - she has established a functional life, complete with material sustenance and intellectual resources (the previous owner\'s books). Yet this self-sufficiency proves fragile when confronted with genuine human need. The passage explores the phenomenology of connection: isolation is not actually possible because we remain embedded in networks of moral obligation and shared vulnerability. Sarah cannot ignore the old man\'s danger without denying her own humanity; her isolation is revealed as illusory the moment another\'s life becomes tangible to her. The writer\'s use of the phrase "back towards the world she had sworn to abandon" is particularly sophisticated - walking towards one stranger is described as a return to "the world", which shows that what she abandoned was not a place but other people and what she owes them. The concluding philosophical statement resolves the passage\'s central tension: "compassion, she realised, had its own kind of honesty. You could not truly live by running away from others". The parenthetical "she realised" matters: the insight is presented as Sarah\'s own discovery rather than the narrator\'s lesson. This positions connection not as an obligation imposed from without but as an intrinsic dimension of authentic living. The phrase "however imperfectly, however afraid" is existentially rich - it acknowledges that authentic connection is never clean or complete; it occurs amid uncertainty and trepidation. This nuance suggests that the passage\'s vision of connection is mature rather than sentimental. Human beings cannot live in isolation, but neither can they achieve perfect presence or completeness in relationship. Sarah lives somewhere between withdrawal and engagement: even after she walks down into the snow, she "almost didn\'t answer" when the old man asks her name.',
            },
          ],
        },
      ],
    },
    {
      id: 'c1-p1-writing',
      title: 'Section B: Creative Writing',
      totalMarks: 40,
      description:
        'Write a creative piece of prose (fiction, autobiography, or imaginative recount) on one of the following titles. You have 45 minutes for this section. Aim for 400-600 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            'Choose one of the following writing tasks:\n\n(a) "The Stranger": Write about an unexpected encounter with someone from outside your normal world.\n\n(b) "Returning": Write about going back to a place you once knew well but have not visited for a long time.\n\n(c) "What I Almost Did": Write about a moment when you nearly made a choice that would have changed your life, but ultimately chose differently.',
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'creative-writing',
          markScheme: [],
          section: 'Writing',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'A grade 4-5 response would: Tell a clear story with beginning, middle, and end; Use paragraphs correctly; Include some varied sentence types; Use vocabulary that is mostly correct; Have mostly correct spelling and punctuation; Create some sense of character or feeling; Address the chosen prompt fully.',
            },
            {
              gradeRange: '6-7',
              answer:
                'A grade 6-7 response would: Develop a narrative with well-defined characters and settings; Use vocabulary confidently and precisely to create tone; Vary sentence structures deliberately for effect (short sentences for emphasis, complex sentences for detail); Use paragraphing to structure ideas clearly; Create a clear voice or perspective that engages the reader; Include specific, vivid details that show rather than tell; Have only minor errors in spelling and punctuation; Sustain a coherent narrative voice throughout.',
            },
            {
              gradeRange: '8-9',
              answer:
                'A grade 8-9 response would: Create a sophisticated, layered narrative with depth of characterisation; Employ language deliberately and precisely to create atmosphere and mood; Use sentence structures with deliberate variety - fragmentation, parenthetical details, varied clause positioning - to control pace and emphasis; Demonstrate sophisticated control of point of view; Include sensory and emotional details that create genuine resonance; Explore complexity rather than simple emotion or event; Demonstrate mastery of form and voice; Show almost no errors in mechanics while maintaining fluidity and style; Engage the reader through originality of perspective or insight.',
            },
          ],
        },
      ],
    },
  ],
}

// ============================================================================
// COMPONENT 1, PAPER 2: 20th Century Literature + Creative Writing
// ============================================================================

const WJEC_C1_P2: MockExamPaper = {
  id: 'wjec-c1-lang-p2',
  board: 'WJEC',
  paperNumber: 2,
  component: 1,
  title: 'WJEC GCSE English Language: Component 1, Paper 2',
  subtitle: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
  code: 'C700U10-1',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'c1-p2-reading',
      title: 'Section A: Reading',
      totalMarks: 40,
      description:
        'Read the extract below and answer all questions. You have 60 minutes for this section.',
      sourceText: WJEC_C1_P2_LITERARY_EXTRACT,
      sourceAttribution: 'Original fiction, specially written for this practice paper',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            'What impression does the writer create of the city in the opening sentences?',
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The writer makes the city sound grand and impressive. It "rose before James like a cathedral," which makes it sound religious and important. The city is beautiful and full of towers. It attracts James with "a hunger he couldn\'t name," showing it has a powerful effect on him. The writer shows the city as attractive and desirable to someone from a small town.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The opening establishes the city as both seductive and overwhelming. The simile "rose before James like a cathedral" invokes religious architecture - suggesting grandeur, permanence, and spiritual significance. Yet the juxtaposition with James\'s "hunger" that he "couldn\'t name" introduces psychological complexity: he is drawn to the city for reasons he cannot articulate. This hunger is not rational desire but something more primal. The contrast between his small-town origins and the city\'s vastness emphasises his vulnerability to its attractions. His "belief that the city would absorb him, transform him, make him into something greater" reveals his youthful naivety - he imagines absorption as an ennobling process, not realising it might also be a form of consumption.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer establishes the city through an interweaving of spiritual and appetitive imagery. The "cathedral of ambition" is the opening image - it conflates architectural grandeur with psychological yearning, suggesting the city is not merely a physical space but a psychological and spiritual landscape. The language of "hunger" and "absorb" begins a pattern of eating and taking in that the passage will complete later with "digested" and "consuming": the city is established as something that swallows rather than nourishes. That James\'s hunger is one "he couldn\'t name" establishes his unconsciousness of what drives him - he is drawn by desires he cannot articulate or control. This lack of self-knowledge makes him particularly vulnerable. The last sentence of the first paragraph gives him "the belief that the city would absorb him, transform him, make him into something greater," which reveals a tragic naivety. The three verbs rise in hope, yet "absorb" already hints that the city takes him in rather than lifts him up. James anticipates absorption as an ennobling process, while the reader, alert to the ambiguity of "hunger" and "absorb," senses the danger before James does.',
            },
          ],
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText:
            "Analyse how the writer's presentation of James changes as the passage progresses.",
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'At the start, James is hopeful and excited about the city. He has ambition and believes it will change him for the better. But as the passage continues, we see his hopes wear away. He works for low wages, lives in a room "barely larger than a cupboard" and walks the streets at night. By the third year, he "barely remembered what he had come to find." He becomes "harder" and "infinitely more lonely." The writer shows how the city changed James in negative ways, not the positive way he expected.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The passage traces James\'s psychological dissolution across three stages. Initially, he is characterised by eager naivety: his youth, his suitcase, his belief in transformation. The second stage, his "first year," presents him experiencing the city\'s indifference - he is absorbed into its machinery without recognition or reciprocation. The simile of walking the streets "as though he were being slowly digested by some vast and glittering beast" is the turning point, where the imagery signals that absorption is consumption, not transformation. The third stage shows progressive dehumanisation: he makes friends with others as "hungry" as himself, yet even among them the city is "consuming him, atom by atom," and by his "third year," he has become "something harder and more useful and infinitely more lonely." The word "useful" is particularly damning - it suggests he has become instrumental, a tool for the city\'s consumption of ambition. The closing image of him as "another voice, another ambition, another small hunger feeding the great machinery" reduces him from individual consciousness to mere function.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The passage structures James\'s trajectory as a tragic arc of assimilation and loss of self. The opening presents him as a consciousness with agency and desire: he "had come from the small towns of the south," carrying "the belief that the city would absorb him," and his yearning is active and specific. In the first year, the grammar has shifted subtly - he is being acted upon rather than acting, walking the streets "as though he were being slowly digested." The city "had no use for his provincial wonder," positioning his consciousness as object rather than subject. The image of digestion, introduced in that first year, marks the point at which absorption begins to look like destruction of self. Yet critically, his friendships with others like himself suggest a moment of potential collective resistance - they "spoke of art and politics and the future as though these were places they could actually live," and they "talked late into the nights in basement bars." This is poignant precisely because it fails. By the third year, the narrative voice becomes almost elegiac. The phrase "he barely remembered what he had come to find" suggests memory itself has been erased - a deeper loss than material ambition. The final image - "another voice, another ambition, another small hunger feeding the great machinery" - completes the reduction of human consciousness to mechanism. Notably, the passage never explicitly judges James for this transformation. Instead, it presents the city as a system that inevitably consumes the individuals within it. The tragedy lies not in James\'s weakness but in the inhumanity of a system that can only value humans insofar as they serve its expansion. His loneliness by the end is not the consequence of his failure but of the success of the city\'s absorption of him.',
            },
          ],
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            'How does the writer use language to convey the nature of the city and its effects on individuals?',
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The writer uses similes and metaphors to describe the city. It rose "like a cathedral," making it sound grand. But later James feels as though he is being "slowly digested" by a "beast," which shows the city is dangerous and eats people up. The language changes from beautiful (cathedral, glittering) to violent (digested, consuming). Words like "lonely," "harder," and "machinery" show how people become cold and mechanical in the city. The metaphors show the city as beautiful but also dangerous.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The writer employs extended metaphorical patterns to establish the city as simultaneously attractive and destructive. The initial simile of the "cathedral of ambition" suggests spiritual significance and permanence. But this quickly shifts to organic images of consumption: James walks the streets "as though he were being slowly digested," and later the city is "consuming him, atom by atom," suggesting he is food for the city\'s growth. The pairing "beautiful and indifferent" captures the city\'s essential nature - it appears to offer transcendence (beauty) while remaining emotionally unavailable. The language progressively dehumanises James through mechanical and practical vocabulary: "useful" and, finally, "the great machinery." Visual imagery - the "glittering" of the beast - appeals to the eye, yet the city is "beautiful and indifferent to his beauty-seeking," inverting normal expectations. This unexpected pairing highlights the city\'s cruelty: it attracts individuals yearning for beauty while denying them meaningful engagement with it. The economic language - "wages that would have seemed insulting anywhere but the capital," a city that wants "more, faster, now" - emphasises the city\'s nature as a system of exchange where human worth is determined by usefulness.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer employs sophisticated linguistic and imagistic patterns to establish the city as a complex, devouring system. The opening sacred architecture ("cathedral of ambition") establishes aspiration as the city\'s organising principle while undercutting its spiritual significance - this is a cathedral to ambition, not to transcendence. The progression from architectural to biological to mechanical metaphors traces James\'s transformation. The image of digestion - "slowly digested by some vast and glittering beast" - is particularly rich: it positions the city as an organism that consumes and transforms matter (James) into fuel for its own continued expansion. The paradox of beauty combined with indifference - "beautiful and indifferent to his beauty-seeking" - is linguistically sophisticated. The writer could have made the city indifferent to beauty itself, but specifies "indifferent to his beauty-seeking," emphasising that what the city rejects is not beauty itself but the seeker\'s yearning. This distinction suggests the city does not merely fail to reward individual aspiration; it actively negates it. The shift in vocabulary from humanising language ("provincial wonder," "the boy he had been") to instrumental language ("useful," "what the city needed") constitutes linguistic dehumanisation. James becomes "another small hunger" - the determiner "another," repeated three times, marks him as merely one instance of a general category rather than a unique consciousness. The phrase "feeding the great machinery" is particularly damning: the organic metaphor of consumption evolves into mechanical metaphor, suggesting the city is not even a living organism but a machine - indifferent to the quality of what fuels it. The closing tricolon ("another voice, another ambition, another small hunger") creates rhythmic equivalence - James\'s identity flattens into mere enumeration. This linguistic flattening enacts the loss of individual consciousness that the passage describes. The writer has created a complete semantic field in which the city operates as a system of consumption that necessarily destroys what it attracts, making James\'s tragedy not exceptional but systematic and inevitable.',
            },
          ],
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            "Discuss the passage's view of ambition and change. What does it suggest about personal transformation?",
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'James wants to be changed and made greater by the city, but the passage suggests this doesn\'t happen in the way he hoped. Instead of becoming greater, he becomes "something harder and more useful and infinitely more lonely." The passage suggests that ambition can change you, but not always in good ways. The city promised transformation but gave him only isolation. This shows that wanting to change yourself can be dangerous if you don\'t understand what will change you.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The passage presents a critical perspective on romantic notions of transformation. James\'s initial belief that "the city would absorb him, transform him, make him into something greater" represents the conventional narrative of self-improvement through ambition and relocation. However, the passage subverts this narrative. The transformation that occurs is precisely the opposite of what James anticipated: instead of becoming greater, he becomes "something harder and more useful" - qualities that are instrumentally valuable but existentially hollow. The passage suggests that personal transformation is real but not redemptive when it occurs within systems designed to extract rather than nourish individual potential. James does change; the tragedy lies in the nature of that change. His loneliness by the third year indicates that the psychological cost of transformation into the city\'s machinery is the loss of genuine human connection. The passage\'s implicit argument is that ambition for personal transformation, when directed towards systems that fundamentally do not value human flourishing, necessarily results in diminishment rather than growth.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The passage deconstructs the mythology of transformative ambition through a sophisticated analysis of how systems reshape individuals. James\'s initial vision of transformation is rooted in a Romantic conception of the city as a space of self-realisation - the artist leaves his provincial home to become his true self in the metropolis. This is a recognisable cultural narrative, familiar from a long tradition of stories about young people arriving in the capital. Yet the writer demonstrates how this narrative obscures the mechanisms through which systems extract labour and aspirational energy from individuals while offering only the illusion of self-realisation. The key insight lies in the temporal structure: transformation does occur, but it is antithetical to what James anticipated. He sought transformation into "something greater"; instead, he is transformed into something useful - a mechanism. The passage suggests that personal transformation within such a system, one that pays "wages" and values what is "useful," is inevitable but pernicious. You cannot remain unchanged in such systems; they necessarily remake you. But they remake you into forms that serve their expansion rather than your flourishing. The phrase "he barely remembered what he had come to find" is existentially tragic: it suggests that ambition itself, the psychological drive for transformation and meaning, has been erased through the very process of its cultivation. This is a loss deeper than material disappointment - it is a loss of consciousness of loss itself. The passage\'s profound insight is that the most efficient form of exploitation does not crush aspirations but redirects them, channelling them into the machinery of the system itself. By the end, James is "another small hunger feeding the great machinery" - his ambition has become fuel rather than vision. The passage offers no way out and never says what James should have done instead; the change simply happens to him, and that is what makes it bleak.',
            },
          ],
        },
      ],
    },
    {
      id: 'c1-p2-writing',
      title: 'Section B: Creative Writing',
      totalMarks: 40,
      description:
        'Write a creative piece of prose (fiction, autobiography, or imaginative recount) on one of the following titles. You have 45 minutes for this section. Aim for 400-600 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            'Choose one of the following writing tasks:\n\n(a) "Arrival": Write about arriving somewhere new and your first impressions.\n\n(b) "The Cost": Write about something you gained that required you to lose something else.\n\n(c) "What Remains": Write about what persists when everything else changes.',
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'creative-writing',
          markScheme: [],
          section: 'Writing',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'A grade 4-5 response: Uses clear paragraphs; tells a coherent story; includes some sensory details; uses a range of vocabulary; has largely accurate spelling and punctuation; addresses the chosen prompt directly; shows some sense of character or perspective.',
            },
            {
              gradeRange: '6-7',
              answer:
                'A grade 6-7 response: Develops ideas through specific details and examples; uses vocabulary deliberately to create tone and atmosphere; varies sentence structures to create effects; controls point of view effectively; shows insight into character motivation or emotion; uses paragraphing to structure argument or narrative logically; demonstrates secure control of spelling and punctuation; sustains engagement throughout.',
            },
            {
              gradeRange: '8-9',
              answer:
                'A grade 8-9 response: Demonstrates sophisticated control of language and form; creates vivid, layered characterisation or reflection; employs precise vocabulary for specific effects; varies sentence structures deliberately to control pace, emphasis, and meaning; shows insight into psychological complexity; uses imagery and sensory detail with precision and impact; demonstrates almost flawless control of conventions while maintaining fluidity; creates a compelling, original voice; engages reader through depth of perspective or originality of approach.',
            },
          ],
        },
      ],
    },
  ],
}

// ============================================================================
// COMPONENT 1, PAPER 3: 20th Century Literature + Creative Writing
// ============================================================================

const WJEC_C1_P3: MockExamPaper = {
  id: 'wjec-c1-lang-p3',
  board: 'WJEC',
  paperNumber: 3,
  component: 1,
  title: 'WJEC GCSE English Language: Component 1, Paper 3',
  subtitle: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
  code: 'C700U10-1',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'c1-p3-reading',
      title: 'Section A: Reading',
      totalMarks: 40,
      description:
        'Read the extract below and answer all questions. You have 60 minutes for this section.',
      sourceText: WJEC_C1_P3_LITERARY_EXTRACT,
      sourceAttribution: 'Original fiction set in 1957, specially written for this practice paper',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            "How does the writer reveal Margaret's character through her actions and choices?",
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'Margaret does things that show she is brave and independent. She takes evening walks even though her mother says it\'s "unladylike" and the vicar suggests it\'s "unnecessary." She works as a secretary, which means she earns her own money and doesn\'t need a man to support her. She reads Simone de Beauvoir in secret and has opinions about politics. She writes to the newspaper and speaks at the parish council about things she believes in. All these actions show Margaret is willing to break the rules to live the life she wants.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The writer establishes Margaret\'s character primarily through her deliberate acts of non-conformity. Her evening walks are noteworthy not because walking is inherently transgressive but because of how she walks: "striding," a posture of confidence and visibility. Her employment as a secretary is presented as economic independence - a precondition for the autonomy she later demonstrates. The details about hiding Simone de Beauvoir "beneath the floorboards of her bedroom" suggest awareness of her non-conformity\'s risk; she hides the book because she understands the consequences of its discovery. Her public actions - speaking at parish council, writing to the newspaper - demonstrate courage: she is willing to make her views known despite social censure. The narrator notes that her attempts to contribute are literally condescended to (the chairman "patted her hand"; the "condescending editorial note" says that "ladies often became overexcited"), yet Margaret persists. This persistence despite explicit dismissal is the measure of her character: it is not enough for her to hold non-traditional views privately; she enacts them publicly despite costs.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer constructs Margaret\'s character through a carefully calibrated escalation of transgression and persistence. The image in the first paragraph - striding past traditional establishments (tea rooms, draper\'s shops) - is symbolic: she moves through spaces coded as feminine and conformist while embodying masculine markers of movement (stride, rhythm, potential defiance). That her shoes are "sensible" is significant - they prioritise function and durability over aesthetics or conventional femininity, establishing her practical intelligence. Her age (twenty-eight and unmarried) is presented factually rather than sympathetically, and the narrator calls it "itself a form of rebellion": not a tragedy but a stance. The sentence about her employment, a job "which paid her own way and required no man\'s permission," establishes that her economic independence underpins her other freedoms. The image of hiding Simone de Beauvoir "beneath the floorboards" is particularly rich. It suggests awareness of power dynamics - she knows the text would be condemned if discovered, yet she reads it anyway. This is not naive radicalism but conscious transgression. The second half of the passage shifts from private to public actions, demonstrating an escalation. She does not merely think differently; she acts on her difference in visible ways. Critically, when her contributions are dismissed - the chairman patronising, the newspaper condescending - she does not retreat. The narrator does not tell us she is disheartened; instead, the next paragraph opens with the three-word sentence "But Margaret continued." The words echo the first paragraph, where "But Margaret continued her evening walks" answered her mother, the vicar and the local boys. The repetition makes her persistence a pattern: each new dismissal meets the same reply. The final image - "the quiet power of a woman who will not be made small" - is the passage\'s thesis. Her power is "quiet" rather than loud or forceful. This suggests that her refusal operates through persistence and presence rather than confrontation. She does not shout down her opponents; she simply refuses to disappear. In a society structured around women\'s diminishment, this refusal is revolutionary. The passage\'s deepest insight is that Margaret\'s character consists not in the individual acts of transgression but in the accumulated stance of refusal - the daily, repeated choice to occupy space and voice despite pressure to do otherwise.',
            },
          ],
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText: 'What does the passage suggest about the society Margaret lives in?',
          marks: 8,
          suggestedTimeMinutes: 12,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The society Margaret lives in is very traditional and conservative about women. Her mother thinks her evening walks are "unladylike." The vicar thinks they are "unnecessary." The town is small, and everyone seems to have an opinion about what she does. She suspects the local boys find her walks "threatening." The parish chairman tells her "not to trouble herself with such matters" and the newspaper suggests that ladies become "overexcited" about topics like equal pay. The society doesn\'t take women\'s ideas seriously and expects women to be passive and accepting. Margaret\'s behaviour shows how limited women\'s freedom is in this time and place.',
            },
            {
              gradeRange: '6-7',
              answer:
                "The passage portrays a patriarchal society structured around the control and containment of women. Multiple institutions - family (mother), church (vicar), civic structures (parish council), media (newspaper) - conspire, perhaps unconsciously, to prevent women from claiming authority or public voice. The casual dismissiveness with which Margaret's attempts at contribution are received - the chairman's literal patting of her hand, the newspaper's condescending editorial - reveals a society that views women's engagement in civic and intellectual life as something to be soothed or excused rather than answered. The reference to the local boys finding her walks threatening suggests that her non-conformity unsettles the gender hierarchy; her visibility and autonomy challenge conventional expectations of women's passivity. The society expects women to stay \"safely contained within the domestic sphere.\" When women transgress these boundaries, they are not met with direct prohibition but with patronisation and marginalisation. The passage suggests this might be more insidious than direct repression: it dismisses rather than forbids, making dissent seem not immoral but futile. The size and insularity of the town exacerbate this: in such a community, non-conformity is impossible to hide, and social pressure is pervasive and unrelenting.",
            },
            {
              gradeRange: '8-9',
              answer:
                'The passage constructs a sophisticated critique of mid-twentieth-century patriarchal society, revealing how power operates not through explicit prohibition but through psychological diminishment and exclusion from epistemic authority. Multiple institutional structures - familial, religious, civic, media - enforce women\'s containment not through violence but through what might be called institutional condescension: consistent messaging that women\'s intellectual and civic engagement is improper, pointless, or overwrought. The word "unladylike" establishes that the society has explicit codes governing female behaviour. The vicar\'s suggestion that her walks are "unnecessary" is particularly revealing: it implies that a woman\'s freedom to move about her own town is a luxury, not a right. The detail that "the local boys, she suspected, found it threatening" indicates that her non-conformity unsettles the gender hierarchy on which this society depends, though the phrase "she suspected" reminds us that this is Margaret\'s reading of them. Her visible independence undermines the argument that women naturally require male governance; therefore, she must be pathologised as threatening rather than recognised as simply exercising human autonomy. The sentences describing her attempts at civic participation reveal how institutional mechanisms of power operate. The chairman does not forbid her speech; he "patted her hand" - a gesture that is superficially kind while conveying deep condescension, and the adverb "actually" registers the narrator\'s disbelief. The physical touch infantilises her, placing her outside the realm of rational debate. Similarly, the newspaper does not censor her letter; it publishes it with an editorial note suggesting that "ladies often became overexcited about such topics," a generalisation that turns her argument about equal pay into a symptom of her sex and positions women\'s emotions as inherently unreliable. This is more subtle and therefore more pernicious than censorship, because it creates the appearance of inclusion while actually delegitimising her contribution. The passage\'s reference to Margaret hiding Simone de Beauvoir "beneath the floorboards" suggests a society where certain ideas are dangerous - not legally forbidden but socially interdicted through shame and surveillance. The town\'s small size is crucial: in such communities, there is no possibility of anonymous individuality; non-conformity is perpetually visible and thus perpetually subject to correction. The passage implies that Margaret\'s struggle is not against overt tyranny but against the pervasive, ambient pressure of a culture structured around women\'s diminishment. The society Margaret inhabits is not uniquely cruel; it is normalised patriarchy - the everyday machinery through which women are systematically excluded from authority, voice, and public presence. Her quiet persistence is radical precisely because it challenges this apparently natural order through mere refusal to accept the diminished space offered to her.',
            },
          ],
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            "Analyse the writer's use of specific details to develop the passage's themes.",
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The writer uses specific details to show Margaret\'s independence and the society\'s opposition to it. Details like "sensible shoes," "evening walks," "Simone de Beauvoir," and "the train to London alone" all show Margaret making her own choices. Details like "unladylike," "unnecessary," and "found it threatening" show how others disapprove of her. The detail about her work as a secretary shows she has her own money. The detail about the chairman patting her hand shows the dismissive way men treat her ideas. All these specific details build up a picture of Margaret refusing to be controlled.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The writer employs specific details strategically to embody abstract themes of autonomy and conformity. The description of her shoes as "sensible" establishes practicality as a defining characteristic - it is not frivolous femininity but rational self-determination. "The tea rooms and the draper\'s shops" represent conventional feminine spaces; her striding past them indicates both physical movement through and psychological distance from conventional femininity. The hiding of Simone de Beauvoir "beneath the floorboards" is richly symbolic: it places feminist thought literally beneath the surface, suggesting both its presence as a foundational influence and its necessary concealment. The detail that she "took the train to London alone" places the word "alone" at the end of a short sentence, where it carries the stress, suggesting that in this town a woman travelling without company is remarkable. The specificity of detail - the chairman literally patting her hand, the newspaper\'s word "overexcited" - grounds abstract patriarchal dismissal in concrete interactions. These details create a cumulative effect: together they construct a portrait not merely of a woman with different values, but of someone whose every choice is an act of deliberate non-conformity. The repetition of specific transgressive actions (speaking, writing, thinking, moving, claiming space) establishes that her non-conformity is not incidental but constitutive of her identity.',
            },
            {
              gradeRange: '8-9',
              answer:
                'The writer employs a systematic vocabulary of specificity that functions on multiple levels: literal description, symbolic resonance, and thematic amplification. The "sensible shoes" operate both literally (practical footwear) and symbolically (the literal grounding of women\'s rationality in a culture that positions women as inherently irrational). The description of her stride - "striking the pavement with a rhythm that was almost defiant" - gives the rhythm of her steps a human attitude, a form of personification that turns confidence into sound; the word "almost" introduces a subtle note of qualification, suggesting that in her society, even walking confidently comes close to transgression. The prepositions of movement - "through the town," "past the tea rooms" - establish her body as moving through and beyond conventional feminine spaces without stopping in them. The detail about Simone de Beauvoir is particularly sophisticated: the choice of this writer is not incidental. De Beauvoir\'s argument in The Second Sex, that a woman is not born but becomes one, shaped by what her society expects of her, would speak directly to Margaret\'s situation; hiding it beneath floorboards suggests both her intellectual hunger and the systematic interdiction of female philosophical development. The phrase "which she kept carefully hidden" adds a temporal dimension: this hiding is ongoing, daily, requiring continuous vigilance. This detail suggests that patriarchal control is not a singular imposition but a constant negotiation. The specific institutional moments - the parish council, the newspaper editorial - are chosen to show systemic rather than individual opposition. The chairman\'s gesture of patting her hand is described with behavioural precision; this physical gesture conveys volumes about how women\'s intellectual contributions are simultaneously acknowledged and delegitimised. The newspaper\'s note that "ladies often became overexcited about such topics" is particularly significant: it answers an argument about equal pay with a remark about feelings, treating emotion as a feminine weakness and positioning rationality itself as masculine. The detail about Margaret\'s age (twenty-eight) establishes that her non-conformity is not youthful rebellion but sustained commitment. The accumulation of these specific details creates a portrait of a woman whose entire existence is structured as an ongoing act of resistance to systematic diminishment. Notably, the details are never melodramatic; the writer presents Margaret\'s refusal as quiet and persistent rather than performative. This stylistic choice encodes the passage\'s central argument: authentic resistance operates through sustained presence and refusal rather than loud confrontation. The specificity of detail anchors this argument: it is not in grand gestures but in the accumulated weight of small choices - sensible shoes, regular walks, a hidden book, spoken opinions - that Margaret constitutes her freedom.',
            },
          ],
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            "Discuss the significance of the final sentence. How does it encapsulate the passage's central message?",
          marks: 12,
          suggestedTimeMinutes: 18,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'The final sentence says Margaret has discovered "the quiet power of a woman who will not be made small." This is important because it shows that Margaret\'s power comes not from being loud or fighting but from being quiet and refusing to disappear. It connects to the earlier message that she keeps walking and keeps speaking even when people dismiss her. The word "small" refers back to all the ways society tries to limit and diminish women. Margaret\'s refusal to accept this diminishment is her true power. It sums up the message that women can be powerful by simply refusing to accept the roles society gives them.',
            },
            {
              gradeRange: '6-7',
              answer:
                'The final sentence crystallises the passage\'s central argument about power and resistance. The phrase "quiet power" is paradoxical - power is typically associated with noise and assertion, yet the passage argues that Margaret\'s power is quiet, operating through persistent presence rather than confrontation. The phrase "woman who will not be made small" directly addresses the passage\'s recurring concern with containment and diminishment. To be "made small" is to be confined to limited roles and spaces; Margaret\'s refusal is therefore an assertion of fullness and presence. Crucially, the sentence emphasises that this is something she has "discovered" - her power is not granted by others but recognised through her own actions. The final sentence suggests that authentic power, at least in the context of a patriarchal society, lies not in opposing power directly but in persistent refusal to accept the terms of one\'s own diminishment. This reframes the entire passage: Margaret\'s non-conformity is not merely rebellion for its own sake but a deliberate cultivation of power through refusal. The sentence\'s final position in the passage gives it particular weight - it is the last statement we read, and it redefines all of Margaret\'s previous actions as expressions of this discovered power. Her walks are not lonely defiance but the exercise of this quiet power. Her speech at the parish council is not futile protest but the enactment of it. The sentence even uses "small" twice: her insistence is "small, daily," yet it is what ensures she "will not be made small," and the second "small" echoes the society in the second paragraph that seemed "determined to keep them small."',
            },
            {
              gradeRange: '8-9',
              answer:
                'The final sentence represents the passage\'s philosophical culmination and represents an inversion of conventional power hierarchies. The phrase "quiet power" deliberately juxtaposes two terms: "power," which in patriarchal discourse is associated with noise, authority, and visible domination, and "quiet," which connotes absence and inconspicuousness. This paradox is generative - it suggests that power can operate in dimensions imperceptible to those accustomed to conventional power expressions. The passivised verb in "will not be made small" is crucial: it refuses victimhood even as it acknowledges that society systematically attempts to diminish women. By choosing "will not be made small" rather than a phrase about growing large, the passage articulates power not as assertion of superiority but as refusal of imposed inferiority. This is a fundamentally different conception of power: one not concerned with dominance but with the maintenance of one\'s own fullness in the face of systematic pressure towards diminishment. The word "discovered" adds an epistemological dimension - Margaret\'s power is not external, granted by society or earned through conventional success. It is discovered, and discovered "in this refusal," suggesting it emerges through the very acts of non-conformity the passage describes. The phrase "something her mother had never known" closes the circle the first sentence opened with "Her mother had said it was unladylike": the voice of disapproval that began the passage is the one the ending leaves behind. The passage implies that Margaret experiences, through her repeated acts of refusal, that her persistence has intrinsic value. This is an existential power grounded not in institutional authority but in the simple fact of her continuing to exist fully despite systematic pressure to the contrary. Placing this sentence at the passage\'s end gives it retroactive significance: all of Margaret\'s previous actions - her walks, her reading, her opinions, her journey to London - are reframed as expressions of this power. The final sentence elevates what might otherwise be read as isolated acts of rebellion into a coherent philosophy of quiet resistance. Notably, the final mention is specifically of "a woman" - not Margaret, but the archetype she represents. This abstraction suggests that her power is not idiosyncratic but generalisable; it is available to any woman who chooses similar refusal. The passage\'s deepest insight is that in patriarchal societies, authentic power for women may lie not in acquiring male-coded attributes (authority, loudness, institutional position) but in the refusal to accept the small space society offers - a refusal that, through its very persistence, constitutes a form of power that patriarchal structures cannot easily recognise or neutralise because it operates outside their vocabulary.',
            },
          ],
        },
      ],
    },
    {
      id: 'c1-p3-writing',
      title: 'Section B: Creative Writing',
      totalMarks: 40,
      description:
        'Write a creative piece of prose (fiction, autobiography, or imaginative recount) on one of the following titles. You have 45 minutes for this section. Aim for 400-600 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            'Choose one of the following writing tasks:\n\n(a) "Breaking Rules": Write about a moment when you had to choose between following a rule and doing what seemed right.\n\n(b) "Invisible": Write about being overlooked or underestimated and what you discovered as a result.\n\n(c) "Becoming": Write about a transformation in how you understand yourself or your place in the world.',
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'creative-writing',
          markScheme: [],
          section: 'Writing',
          modelAnswers: [
            {
              gradeRange: '4-5',
              answer:
                'A grade 4-5 response will: Tell a clear, focused story with recognisable beginning, middle, and end; Use paragraphing to organise ideas; Employ a variety of sentence types and lengths; Use vocabulary accurately and with some precision; Demonstrate mostly accurate spelling and punctuation; Create sense of voice or perspective; Fully address the chosen prompt.',
            },
            {
              gradeRange: '6-7',
              answer:
                'A grade 6-7 response will: Develop a narrative or reflection with clear structure and insight; Use language deliberately to create specific effects; Vary sentence structures for deliberate purpose; Establish and maintain a consistent point of view; Include concrete details that develop the narrative; Show understanding of character motivation or internal logic; Demonstrate secure control of spelling and punctuation; Create a voice that engages the reader throughout.',
            },
            {
              gradeRange: '8-9',
              answer:
                'A grade 8-9 response will: Demonstrate sophisticated control of narrative technique and language; Create compelling characterisation or reflection through precise language choices; Employ varied sentence structures to control pacing and emphasis; Show insight into psychological complexity; Use imagery and sensory detail with precision; Develop ideas with originality and depth; Maintain almost flawless control of conventions while preserving fluidity; Create a distinctive and engaging voice; Demonstrate originality of perspective or approach.',
            },
          ],
        },
      ],
    },
  ],
}

// ============================================================================
// COMPONENT 2: NON-FICTION PAPERS
// ============================================================================

const WJEC_C2_P1: MockExamPaper = {
  id: 'wjec-c2-lang-p1',
  board: 'WJEC',
  paperNumber: 1,
  component: 2,
  title: 'WJEC GCSE English Language: Component 2, Paper 1',
  subtitle: 'Component 2: Non-Fiction Reading and Transactional Writing',
  code: 'C700U20-1',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'c2-p1-reading',
      title: 'Section A: Reading Non-Fiction',
      totalMarks: 40,
      description:
        'Read both extracts below and answer all questions. You have 75 minutes for this section.',
      sourceText: `EXTRACT A:\n${WJEC_C2_P1_NONFICTION_A}\n\nEXTRACT B:\n${WJEC_C2_P1_NONFICTION_B}`,
      sourceAttribution:
        'Two original articles, specially written for this practice paper (the high street; smartphones and social media)',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            'According to Extract A, what are the main consequences of the decline of high streets?',
          marks: 5,
          suggestedTimeMinutes: 10,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText:
            'How does Extract B explain the design of social media platforms? Identify the key argument.',
          marks: 8,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            'Compare how the two extracts present the relationship between human wellbeing and modern systems/technologies.',
          marks: 12,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            "Evaluate the effectiveness of the writers' arguments. Which extract is more persuasive and why?",
          marks: 15,
          suggestedTimeMinutes: 30,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
      ],
    },
    {
      id: 'c2-p1-writing',
      title: 'Section B: Transactional Writing',
      totalMarks: 40,
      description:
        'Complete one of the following transactional writing tasks. You have 45 minutes for this section. Aim for 350-500 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            'Write a formal letter to your local council proposing a community initiative to revitalise your town centre and encourage people to visit local shops and gathering spaces.',
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'transactional-writing',
          markScheme: [],
          section: 'Writing',
        },
      ],
    },
  ],
}

const WJEC_C2_P2: MockExamPaper = {
  id: 'wjec-c2-lang-p2',
  board: 'WJEC',
  paperNumber: 2,
  component: 2,
  title: 'WJEC GCSE English Language: Component 2, Paper 2',
  subtitle: 'Component 2: Non-Fiction Reading and Transactional Writing',
  code: 'C700U20-1',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'c2-p2-reading',
      title: 'Section A: Reading Non-Fiction',
      totalMarks: 40,
      description:
        'Read both extracts below and answer all questions. You have 75 minutes for this section.',
      sourceText: `EXTRACT A:\n${WJEC_C2_P2_NONFICTION_A}\n\nEXTRACT B:\n${WJEC_C2_P2_NONFICTION_B}`,
      sourceAttribution:
        'Two original essays, specially written for this practice paper (species extinction; reading on screens)',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            'What does Extract A identify as the root cause of current species extinction?',
          marks: 5,
          suggestedTimeMinutes: 10,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText:
            'According to Extract B, how has screen-based reading changed our thinking patterns?',
          marks: 8,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            'Both extracts discuss loss. Compare the types of loss each extract presents and their significance.',
          marks: 12,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            'Choose one extract. Analyse how its writer uses language to emphasise the seriousness of their argument.',
          marks: 15,
          suggestedTimeMinutes: 30,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
      ],
    },
    {
      id: 'c2-p2-writing',
      title: 'Section B: Transactional Writing',
      totalMarks: 40,
      description:
        'Complete one of the following transactional writing tasks. You have 45 minutes for this section. Aim for 350-500 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            "Write an informative blog post or article for a school website explaining the impact of technology on young people's reading habits and suggesting strategies for maintaining deep reading practices.",
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'transactional-writing',
          markScheme: [],
          section: 'Writing',
        },
      ],
    },
  ],
}

const WJEC_C2_P3: MockExamPaper = {
  id: 'wjec-c2-lang-p3',
  board: 'WJEC',
  paperNumber: 3,
  component: 2,
  title: 'WJEC GCSE English Language: Component 2, Paper 3',
  subtitle: 'Component 2: Non-Fiction Reading and Transactional Writing',
  code: 'C700U20-1',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'c2-p3-reading',
      title: 'Section A: Reading Non-Fiction',
      totalMarks: 40,
      description:
        'Read both extracts below and answer all questions. You have 75 minutes for this section.',
      sourceText: `EXTRACT A:\n${WJEC_C2_P3_NONFICTION_A}\n\nEXTRACT B:\n${WJEC_C2_P3_NONFICTION_B}`,
      sourceAttribution:
        'Two original essays, specially written for this practice paper (work-life balance; public libraries)',
      questions: [
        {
          id: 'q1',
          questionNumber: 1,
          questionText:
            'What does Extract A suggest is problematic about the concept of "work-life balance"?',
          marks: 5,
          suggestedTimeMinutes: 10,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q2',
          questionNumber: 2,
          questionText:
            "Identify and explain the reasons given in Extract B for libraries' precarious position in society.",
          marks: 8,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q3',
          questionNumber: 3,
          questionText:
            'Both extracts suggest that something of value is being lost or undervalued in contemporary society. Compare what each writer identifies and why it matters.',
          marks: 12,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
        {
          id: 'q4',
          questionNumber: 4,
          questionText:
            "Assess the effectiveness of the writers' persuasive techniques. Consider their use of language, structure, and argument development.",
          marks: 15,
          suggestedTimeMinutes: 30,
          questionType: 'analysis',
          markScheme: [],
          section: 'Reading',
        },
      ],
    },
    {
      id: 'c2-p3-writing',
      title: 'Section B: Transactional Writing',
      totalMarks: 40,
      description:
        'Complete one of the following transactional writing tasks. You have 45 minutes for this section. Aim for 350-500 words.',
      questions: [
        {
          id: 'q5',
          questionNumber: 5,
          questionText:
            'Write a proposal to your school leadership suggesting ways to help students achieve better balance between academic work and personal wellbeing. Present your case persuasively.',
          marks: 40,
          suggestedTimeMinutes: 45,
          questionType: 'transactional-writing',
          markScheme: [],
          section: 'Writing',
        },
      ],
    },
  ],
}

// ============================================================================
// EXPORT: Complete WJEC Mock Exam Collection
// ============================================================================

export const wjecLangMocks: MockExamPaper[] = [
  WJEC_C1_P1,
  WJEC_C1_P2,
  WJEC_C1_P3,
  WJEC_C2_P1,
  WJEC_C2_P2,
  WJEC_C2_P3,
]
