// @ts-nocheck
// ─── Practice question bank: Edexcel / Pearson (GCSE, IGCSE and IAL) ────────────────────────────────────────
//
// Split out of the former single 636 KB `src/data/practice-data.ts` (Aug 2026).
// That file was imported at module scope by the 'use client' /practice page, so
// the ENTIRE cross-board bank was shipped in that route's First Load JS before
// the student had even chosen a board. Each board now lives in its own module
// and is pulled in on demand by `loadPracticeQuestions()` in ./load.ts.
//
// INVARIANT: every question in this file must be tagged with a board this
// slice covers. `load.ts` decides which slice a student's exam board needs,
// and `matchesPracticeBoard()` still filters afterwards, so a mis-filed
// question silently disappears from the student's pool rather than leaking.

import type { PracticeQuestion } from './types'

export const edexcelPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'edexcel-p2-retrieval-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Retrieval (Q1)',
    difficulty: 'Foundation',
    extract: `The marketplace was alive with colour and noise. Stalls lined both sides of the narrow lane, their awnings flapping in the autumn breeze. Mrs Alston moved between them with practised efficiency, her basket already half full. She paused at the fishmonger's, inspecting the catch with a critical eye. The mackerel were fresh - she could tell by the brightness of their scales and the clarity of their eyes - but the prices had gone up again. Everything had gone up. She selected two fish, counted out her coins carefully, and moved on without a word.\n\nAt the far end of the market, where the lane opened into the square, a boy sat cross-legged on the cobblestones with a wooden flute. He could not have been more than ten. His shoes were held together with string and his jacket hung off one shoulder, but his playing was extraordinary - a melody that rose above the shouts and clatter like smoke above a chimney, curling and drifting until it seemed to fill the entire square. Mrs Alston stopped. She stood very still for a long time. Then she placed a coin in the cap at his feet and walked away quickly, before anyone could see her expression.`,
    extractSource: 'Original composition in the style of literary realism',
    question:
      'From lines 1-8, identify four things you learn about Mrs Alston from the extract. (4 marks)',
    modelAnswers: {
      'Grade 4-5': `From the extract, I learn that Mrs Alston is experienced at shopping in the market because she moves with "practised efficiency." I also learn that she is careful with money, as she "counted out her coins carefully." Third, she has knowledge about fish because she can tell whether mackerel are fresh by looking at their scales and eyes. Finally, she does not like to show her emotions, as she walks away "quickly, before anyone could see her expression."`,
      'Grade 6-7': `The extract reveals that Mrs Alston is a regular and efficient market shopper who navigates the stalls with "practised efficiency," suggesting long familiarity with this routine. She is also financially careful, counting coins precisely and noting that "everything had gone up," implying she is conscious of price changes and possibly under financial pressure. Her ability to judge the freshness of mackerel by "the brightness of their scales and the clarity of their eyes" reveals practical domestic expertise. Finally, her transaction is conducted without unnecessary interaction - she moves on "without a word" - indicating a reserved, unsentimental character.`,
      'Grade 8-9': `Mrs Alston is established as a figure of practised domestic competence: she shops with "practised efficiency," a phrase implying both routine and skill. She is financially watchful, selecting only two fish and counting coins carefully, while her internal observation that "everything had gone up" reveals an awareness of economic pressure. Her expertise in judging fish freshness - by scales and eyes - speaks to a lifetime of domestic knowledge. Perhaps most significantly, she is emotionally guarded: she conducts her purchase "without a word" and later leaves the boy musician "quickly, before anyone could see her expression," suggesting someone who feels deeply but considers the display of emotion a vulnerability.`,
    },
    markScheme: [
      'Identifies four distinct pieces of information about Mrs Alston',
      'Points are supported with textual reference or quotation',
      'Each point is clearly a separate piece of information (not repetition)',
      'Points are drawn from the specified line range',
    ],
    examinerTips: [
      'This is a retrieval question - keep answers clear and concise.',
      'Each point should be a separate, distinct piece of information.',
      'Use short quotations to support each point.',
      'Do not over-analyse - this question tests comprehension, not analysis.',
    ],
  },
  {
    id: 'edexcel-p2-lang-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Language Analysis (Q3)',
    difficulty: 'Higher',
    extract: `The river had changed. It was no longer the gentle companion of summer - the slow, green water that had carried their paper boats and reflected the willows in a trembling mirror. Now it was something else entirely. The rains had swollen it to a creature of muscle and fury, a brown torrent that tore at the banks and swallowed the meadow in great, hungry gulps. Trees that had stood for fifty years leaned at desperate angles, their roots exposed like the tendons of a clenched fist.\n\nAnna stood at the edge and felt the ground vibrate beneath her boots. The noise was immense - not the polite murmur of a river but the full-throated roar of something that had forgotten it was ever tame. Spray struck her face like cold needles. Somewhere beneath the surface, she knew, the footbridge was still there - or what remained of it. Three days ago she had crossed it without thinking. Now it was an archaeological fact, something that belonged to the past tense of this landscape.`,
    extractSource: 'Original composition',
    question:
      'Analyse how the writer uses language and structure to present the power of the river. Support your views with detailed reference to the text. (15 marks)',
    modelAnswers: {
      'Grade 4-5': `The writer uses language to show the river is powerful and dangerous. The river is personified as "a creature of muscle and fury" which makes it sound like a strong, angry animal. The verb "tore" shows how violent the water is, and "swallowed the meadow in great, hungry gulps" makes the river seem like it is eating the land. The simile "roots exposed like the tendons of a clenched fist" suggests the trees are struggling against the water. The writer uses contrast to show how different the river is now compared to before. In summer it was a "gentle companion" with "slow, green water" but now it is a "brown torrent." This structural contrast helps the reader understand how much things have changed. The noise is described as a "full-throated roar" rather than a "polite murmur," which shows how overwhelming the river has become.`,
      'Grade 6-7': `The writer constructs the river's power through a sustained metaphorical transformation from domestic companion to untamed predator. The opening - "The river had changed" - is deceptively simple, its past perfect tense encoding a transformation that is already complete before the narrative begins. The structure enacts this shift: the first sentence recalls the summer river as a "gentle companion," but this pastoral image is immediately dismantled by the adversative "Now it was something else entirely." The metaphor of "a creature of muscle and fury" assigns the river both physical and emotional force, the noun "muscle" implying strength while "fury" attributes intention. The predatory lexical field intensifies - "tore," "swallowed," "hungry gulps" - constructing the river as an appetite that cannot be satisfied. The simile comparing exposed roots to "the tendons of a clenched fist" is particularly effective: it humanises the trees' resistance while the adjective "clenched" implies both tension and futility. In the second paragraph, the sensory register shifts from visual to physical - "the ground vibrate," "spray struck her face like cold needles" - immersing the reader in the river's power. The final image of the footbridge as "an archaeological fact" belonging to "the past tense of this landscape" is structurally significant: it reframes the river's destruction as a geological rather than meteorological event, elevating its power from the temporary to the epochal.`,
      'Grade 8-9': `The extract orchestrates a systematic dismantling of the pastoral, constructing the river's power not merely as physical force but as a rupture in the relationship between humans and landscape. The opening pluperfect - "The river had changed" - places the transformation before the text itself, making the river's power a fait accompli that the writing can only describe retrospectively. The structural movement from remembered summer to terrible present operates through a rhetoric of negation: the river is defined first by what it is no longer - "no longer the gentle companion" - before being reimagined through the language of embodied violence. The metaphor "a creature of muscle and fury" is deliberately non-specific; this is not a named animal but an abstraction of force, and the pairing of the physical "muscle" with the affective "fury" refuses to separate the river's strength from its apparent volition. The predatory semantic field - "tore," "swallowed," "hungry gulps" - personifies the river as an insatiable appetite, while the verbal patterning of violent present tense against the nostalgic past ("had carried," "reflected") creates a temporal chasm that mirrors the physical one. The simile of roots "like the tendons of a clenched fist" is structurally pivotal: it reverses the pathetic fallacy by reading the landscape through the human body rather than the reverse, suggesting that nature has absorbed and surpassed human strength. The second paragraph shifts the locus of power from visual spectacle to somatic experience - the ground "vibrates," spray strikes "like cold needles" - collapsing the observational distance that had allowed the first paragraph its comparisons. The final reconception of the footbridge as "an archaeological fact" belonging to "the past tense of this landscape" is the extract's most intellectually ambitious move: it grammaticalises destruction, suggesting that the river has not merely damaged infrastructure but rewritten the temporal grammar of the place itself.`,
    },
    markScheme: [
      'Analyses language choices with detailed, perceptive commentary',
      'Comments on structural features and their effects',
      'Uses well-integrated textual references',
      'Considers the combined effect of language and structure',
      'Employs subject terminology precisely and purposefully',
      'Explores multiple layers of meaning',
    ],
    examinerTips: [
      'Edexcel asks you to consider BOTH language and structure - address both.',
      'Move beyond feature-spotting to explore how techniques create meaning.',
      'Consider how the text changes from beginning to end.',
      'The best answers explore how language and structure work together.',
    ],
  },
  {
    id: 'edexcel-p1-eval-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Evaluation (Q4)',
    difficulty: 'Foundation',
    extract: `I was seventeen when I first stood on the summit of Helvellyn and understood, for the first time, why people climb mountains. It is not for the view - though the view that day was extraordinary, the lakes laid out below like shattered mirrors reflecting a sky that could not decide whether to rain or shine. It is not for the achievement, although there is satisfaction in reaching a place that your legs and lungs have earned. It is for the silence.\n\nAt nine hundred and fifty metres, the world falls quiet. The petty noise of daily life - the phone, the traffic, the endless opinions of people who have never climbed anything steeper than an escalator - all of it drops away. What remains is wind, rock, and the sound of your own breathing. You become, briefly, the simplest version of yourself. No signal. No notifications. No performance. Just a body on a mountain, doing what bodies were designed to do.\n\nI have climbed Helvellyn thirty-seven times since that first ascent. I go in all seasons, in all weathers. People ask why I keep returning to the same mountain, and I tell them: it is not the same mountain. It is never the same mountain. The mountain changes with every visit because you change - and Helvellyn, unlike most things in life, has the decency to reflect that back to you honestly.`,
    extractSource: 'Original composition in the style of nature writing',
    question:
      "To what extent do you agree with the writer's view that climbing mountains offers something valuable that modern life does not? Evaluate the text, supporting your views with detailed reference to the source. (15 marks)",
    modelAnswers: {
      'Grade 4-5': `I mostly agree with the writer's view because they make a convincing argument. The writer says that climbing mountains is valuable because of "the silence" you find at the top. They contrast this with the "petty noise of daily life" like phones and traffic, which makes modern life seem stressful. The phrase "endless opinions of people who have never climbed anything steeper than an escalator" is humorous and makes the reader think about how much unnecessary noise there is in everyday life. The writer also argues that mountains help you understand yourself. The line "you become, briefly, the simplest version of yourself" suggests that being in nature strips away all the complications. I find this persuasive because many people do feel that being outdoors is calming. However, the writer does not consider that not everyone can climb mountains, so this experience might not be available to all people.`,
      'Grade 6-7': `The writer presents a compelling case, though one that relies as much on rhetorical skill as on logical argument. The central claim - that mountains offer valuable silence absent from modern life - is persuasive partly because of how the writer structures the argument. The anaphoric "It is not for the view… It is not for the achievement" builds expectation before the short declarative "It is for the silence" delivers the thesis with satisfying clarity. The subsequent critique of modern life is effective: the tricolon "the phone, the traffic, the endless opinions" escalates from specific irritations to a generalised critique, while the dismissive "people who have never climbed anything steeper than an escalator" uses humour to recruit the reader's sympathy. However, this is also where the argument is most vulnerable - it constructs a somewhat self-congratulatory division between climbers and non-climbers that risks alienating readers. The writer's claim that "you become, briefly, the simplest version of yourself" is the text's most evocative moment, and the qualifier "briefly" lends it honesty. The final paragraph's insistence that "it is never the same mountain" is rhetorically powerful, with the italicised repetition creating emphasis, though the personification of Helvellyn as having "decency" perhaps overextends the metaphor. On balance, the writer succeeds in conveying a genuine and infectious enthusiasm, even if the argument occasionally substitutes poetic intensity for rigorous logic.`,
      'Grade 8-9': `The writer's argument is seductive, eloquent, and, in places, deliberately evasive - which is to say, it is excellent persuasive writing whose rhetorical craft should be admired before it is believed. The central thesis - that mountains provide a silence that modern life has made rare - is structurally positioned as a revelation, withheld through two negative constructions ("It is not for the view… It is not for the achievement") before being delivered in a four-word declarative. This is a preacher's rhythm, and it is effective: the reader experiences the rhetorical equivalent of reaching the summit. The critique of modernity is sharp but selective: the tricolon of "the phone, the traffic, the endless opinions" constructs a world of superficiality, while the sardonic aside about escalators flatters the reader into identifying with the climber rather than the criticised. This is a text that creates an in-group and invites you to join it. The claim that one becomes "the simplest version of yourself" is the argument's emotional centre, and it resonates because it articulates a widely felt yearning. Yet it is worth interrogating: is simplicity genuinely available on a mountain, or does the writer merely project their desire for it onto the landscape? The final paragraph's insistence that "it is never the same mountain" because "you change" is philosophically interesting - it echoes Heraclitus's river - but the closing personification of Helvellyn as having "decency" quietly reveals the writer's romanticism. Mountains do not have decency; they have indifference, and it is precisely this indifference that makes them useful mirrors. The writer succeeds enormously in making me want to climb Helvellyn; they succeed less in proving that the experience is universally valuable rather than personally meaningful. But perhaps that distinction matters less than the writing suggests.`,
    },
    markScheme: [
      'Evaluates the text critically, considering how effectively the writer conveys their perspective',
      'Supports evaluation with well-chosen textual references',
      "Considers the writer's methods and their effect on the reader",
      'Presents a clear personal response that goes beyond simple agreement or disagreement',
      'Maintains a critical stance throughout, not merely summarising',
    ],
    examinerTips: [
      'Evaluation means weighing up - show where the writer is effective AND where the argument has limits.',
      'Always support your judgement with quotation.',
      "Consider the writer's methods (structure, language, rhetoric) as part of your evaluation.",
      'A top-level answer treats the text as a crafted piece of writing, not just a collection of opinions.',
    ],
  },
  {
    id: 'edexcel-p1-write-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Transactional Writing (Q5)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      "Your local council is considering closing the town's only public library to save money. Write a letter to the council arguing that the library should remain open. (40 marks: 24 for content and organisation, 16 for technical accuracy)",
    modelAnswers: {
      'Grade 4-5': `Dear Councillors,\n\nI am writing to express my strong opposition to the proposed closure of our town library. I believe this would be a serious mistake that would affect many people in our community.\n\nFirstly, the library is used by hundreds of people every week. It is not just a place to borrow books - it is a community hub. Elderly residents come for the reading groups, parents bring toddlers to story time, and students use it as a quiet place to study. Where would all these people go if the library closed?\n\nSecondly, not everyone has internet access at home. The library provides free computers and Wi-Fi, which many people rely on for job applications, benefits claims, and keeping in touch with family. Closing the library would cut off the most vulnerable people in our community from essential services.\n\nFinally, libraries save money in the long run. Research shows that for every pound spent on libraries, communities receive over five pounds in social and economic value. People who use libraries are healthier, better educated, and less isolated. Closing the library might save money now, but it will cost much more in the future.\n\nI urge you to reconsider this proposal and find alternative savings that do not destroy a vital community resource.\n\nYours faithfully,\nA Concerned Resident`,
      'Grade 6-7': `Dear Members of the Council,\n\nI write regarding the proposed closure of our public library. I should declare an interest: I use the library every week, as do my children, my elderly mother, and approximately four hundred other residents whose voices are conspicuously absent from your consultation document. I should also declare a certainty: this closure would be an act of institutional vandalism dressed up as fiscal responsibility.\n\nLet me address the financial argument directly, since it is the one you have chosen to make. The annual cost of running the library is, I understand, approximately £180,000. This is presented in your proposal as a saving. It is not. It is a cost - transferred from the council's books to the community's shoulders. When the library closes, your free computer access disappears. Your job seekers will travel twelve miles to the nearest alternative. Your elderly residents will lose the only social contact some of them have outside their own homes. The costs of increased isolation, unemployment, and digital exclusion will appear on other budgets - health, social care, welfare - but they will be no less real for being someone else's problem.\n\nThe library is also, let us not forget, a place of education. Our town has some of the lowest literacy rates in the county. Closing the library is the equivalent of diagnosing a patient with malnutrition and then locking the pantry. The children who use the library's reading programmes are disproportionately from families who cannot afford to buy books. You are proposing to remove the only free access to literature that these children have, and you are doing so in a document that cites "community wellbeing" as a council priority. The irony should embarrass you.\n\nI recognise that savings must be made. I do not recognise that they must be made here. I ask you to reconsider - not as a gesture, but as a genuine reassessment of what this community can afford to lose.\n\nYours faithfully,\nA Resident Who Intends to Be Present at the Next Council Meeting`,
      'Grade 8-9': `Dear Councillors,\n\nI have read your proposal to close the public library. I have read it carefully, in the library, using the reading skills I first developed there as a child. I mention this not for sentimental effect - though sentiment is not the disqualification you seem to believe it is - but because it illustrates a principle your proposal fails to grasp: libraries are not static repositories of books. They are engines of the very competencies that allow a person to read a council document and respond to it critically. You are proposing to close the factory that makes citizens.\n\nThe financial case is, I accept, superficially coherent. £180,000 is not nothing. But a budget is a moral document, and the decision to cut the library rather than - to choose one alternative - the £220,000 spent annually on consultancy fees reveals a set of priorities that should be stated explicitly rather than hidden behind the language of necessity. You are not closing the library because you must. You are closing it because you have decided that the people who use it matter less than the people who do not.\n\nConsider who those people are. They are the unemployed, using free internet to apply for jobs your economic development strategy claims to care about. They are the isolated elderly, for whom the Thursday reading group is the difference between a week with human contact and a week without. They are the children of families where a book is a luxury, discovering for the first time that knowledge is free and that the world is larger than their postcode. These are not abstractions. They are your constituents. And they are, by no coincidence, the constituents least likely to attend your consultation events, least likely to respond to your surveys, and least likely to have the social capital to make their objections heard. Their silence is not consent. It is the very disadvantage your library exists to address.\n\nI do not doubt your good intentions. I doubt your arithmetic. The costs you propose to save will reappear - in GP surgeries, in benefits offices, in the attainment gap that already shames this town. You will have balanced one budget by unbalancing several others, and the people who bear the cost will be, as always, those who can least afford it.\n\nKeep the library open. It is not a luxury. It is the floor.\n\nYours faithfully,\nA Taxpayer, a Reader, and a Voter`,
    },
    markScheme: [
      'Matches the form and conventions of a formal letter',
      'Presents a clear, sustained argument with persuasive techniques',
      'Addresses the audience appropriately (formal register for council)',
      'Uses evidence and reasoning, not just assertion',
      'Organises ideas coherently with effective paragraphing',
      'Demonstrates technical accuracy with ambitious vocabulary and varied syntax',
    ],
    examinerTips: [
      'Match the FORM precisely - Edexcel marks form conventions (letter layout, appropriate sign-off).',
      'Adapt your register to the audience: a council requires formality.',
      'Use concrete examples and data to strengthen abstract arguments.',
      'The best transactional writing sounds like a real person with genuine conviction.',
    ],
  },
  {
    id: 'edexcel-5',
    board: 'Edexcel',
    type: 'Information Retrieval',
    tier: 'GCSE',
    title: 'Language Paper 1 Q1 Information Retrieval',
    extract: `The storm arrived without warning on the evening of September 14th. By midnight, winds exceeding ninety miles per hour had torn roofing tiles from houses across the southern counties and brought down power lines in Kent, Sussex, and Hampshire. Emergency services received over twelve thousand calls in the first three hours. Roads were blocked by fallen trees - an estimated fifteen million trees were uprooted across southern England before dawn - and the railway network was suspended entirely south of the Thames.

Mrs Patricia Denton, seventy-three, of Sevenoaks in Kent, described the experience as "the most terrifying night of my life." She had been woken at two o'clock by the sound of her greenhouse disintegrating. "I lay in bed listening to the whole garden being torn apart," she said. "There was nothing I could do except wait for it to stop." Her neighbour, Mr Gerald Howe, lost the oak tree that had stood in his front garden for over a century. It fell across two parked cars and came to rest against the wall of the local primary school.

The economic cost of the storm was later estimated at over one billion pounds. Eighteen people lost their lives. The Met Office was criticised for failing to issue an adequate warning, a controversy that led to a fundamental overhaul of the national weather forecasting system.`,
    extractSource: 'Adapted from an account of the Great Storm of 1987',
    question:
      'From lines 1-12, identify the information given about the storm and its effects. Give four examples. (4 marks)',
    marks: 4,
    timing: '15 minutes',
    markScheme: [
      'Identifies four distinct pieces of information from the specified lines',
      'Each point is clearly supported with textual reference',
      'Points are genuinely different (not repetitions of the same idea)',
      'Answers are drawn from the correct line range',
    ],
    examinerTips: [
      'This is a retrieval question - keep answers clear and factual.',
      'Do not analyse language. Simply find and state information.',
      'Each point should be a separate fact supported by a short quotation.',
      'Check you are answering from the correct line range.',
    ],
    modelAnswers: {
      'Grade 4-5': `First, the storm arrived unexpectedly "without warning on the evening of September 14th." Second, the winds were extremely powerful, "exceeding ninety miles per hour," causing damage to houses. Third, emergency services were overwhelmed, receiving "over twelve thousand calls in the first three hours." Fourth, a huge number of trees were destroyed - "an estimated fifteen million trees were uprooted across southern England."`,
      'Grade 6-7': `The extract reveals that the storm struck suddenly and without adequate forecasting, arriving "without warning." Its physical impact was devastating: winds over ninety miles per hour caused structural damage across "Kent, Sussex, and Hampshire," and approximately "fifteen million trees were uprooted." The scale of the emergency is conveyed by the volume of calls to emergency services - "over twelve thousand" in three hours - while the disruption to infrastructure is shown by the complete suspension of "the railway network" south of the Thames.`,
      'Grade 8-9': `The storm's onset was sudden and unforecast, arriving "without warning" on September 14th. Its destructive force operated on multiple scales: domestically, winds exceeding ninety miles per hour stripped roofing tiles and brought down power lines across three counties; environmentally, "an estimated fifteen million trees were uprooted" before dawn. The human response was overwhelmed - emergency services fielded "over twelve thousand calls in the first three hours" - and transport infrastructure collapsed entirely, with the railway network "suspended" south of the Thames. The specificity of these details - exact wind speeds, precise call volumes, named counties - constructs a picture of a national emergency unfolding with a speed that outpaced the capacity to respond.`,
    },
  },
  {
    id: 'edexcel-6',
    board: 'Edexcel',
    type: 'Transactional Writing',
    tier: 'GCSE',
    title: 'Language Paper 1 Q5 Transactional Writing',
    extract: '',
    question:
      'Your school is considering replacing all physical textbooks with tablets and digital resources. Write a speech to be delivered at a school assembly giving your views on this proposal. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    markScheme: [
      'Matches the conventions of a speech (direct address, rhetorical devices, audience awareness)',
      'Presents a clear, sustained viewpoint with supporting evidence or examples',
      'Organises ideas effectively with coherent paragraphing',
      'Uses varied and ambitious vocabulary appropriate to audience and purpose',
      'Demonstrates a range of sentence structures for deliberate effect',
      'Achieves a high standard of technical accuracy',
    ],
    examinerTips: [
      'A speech must sound like a speech. Use direct address, rhetorical questions, and repetition.',
      'Know your audience: this is a school assembly, so the tone should be confident but accessible.',
      'Address counter-arguments to demonstrate sophistication.',
      'End with a memorable closing line that your audience will remember.',
    ],
    modelAnswers: {
      'Grade 4-5': `Good morning, everyone. I want to talk to you today about the proposal to replace our textbooks with tablets.

Now, I know what some of you are thinking: "Great, lighter bags!" And yes, carrying one tablet instead of five heavy textbooks would be a relief for our backs. There are some real advantages to going digital. You can search for information instantly. You can highlight and make notes without ruining a book. And the school would save money in the long run because digital resources can be updated without buying new editions.

However, I think there are serious problems with this idea. First, screens are bad for our eyes. We already spend hours looking at phones and computers at home. Do we really want to add six more hours of screen time during the school day? Second, tablets break. What happens when your tablet crashes the morning of an important lesson? A textbook never runs out of battery.

There is also the issue of distraction. Be honest with yourselves - if you had a tablet in front of you in every lesson, would you always be reading the textbook, or would you sometimes be checking messages, playing games, or watching videos? I think we all know the answer.

My suggestion is a compromise: keep textbooks for core subjects but offer digital resources as an additional option. That way we get the benefits of technology without losing the reliability of books. Thank you.`,
      'Grade 6-7': `Good morning. I would like you to do something for me. Close your eyes - just for a moment - and think about a book that mattered to you. Not the words in it, but the object itself. The weight of it. The smell of the pages. The corner you folded down because you could not find a bookmark. The coffee stain on page forty-seven that reminds you of the afternoon you read it.

Now open your eyes. The proposal before us would ensure that no student in this school ever has that experience again.

I am not a technophobe. I own a phone, a laptop, and more chargers than I care to admit. I understand that digital resources are searchable, updatable, and lighter than the average Year 11 bag. These are genuine advantages and I do not dismiss them. But I want us to think carefully about what we would lose.

Research from the University of Stavanger has shown that students who read on paper retain more information than those who read on screens. The physical act of turning pages, of feeling your progress through a book, creates what psychologists call "cognitive mapping" - a spatial understanding of where information lives. A textbook has a geography. A tablet has a scroll bar. These are not equivalent.

There is also the question of equity. Not every student has reliable Wi-Fi at home. Not every student can afford to replace a broken screen. A textbook is a robust, democratic technology: it works for everyone, everywhere, without a password or a software update. A tablet is only as reliable as its battery and its broadband connection, and both of these, in this country, are considerably less reliable than we pretend.

Finally - and I say this with affection for every one of you - we cannot be trusted. A tablet in every lesson is a portal to every distraction the internet has ever invented. We are sixteen. Our prefrontal cortices are works in progress. Asking us to have an open browser and a Snapchat account inches from our biology notes and to simply choose wisely is not realistic. It is an experiment, and we are the subjects.

Keep the books. Supplement them with technology by all means. But do not replace the thing that works with the thing that glows. Thank you.`,
      'Grade 8-9': `I would like to begin with a confession. When I first heard about this proposal, I was in favour of it. Lighter bags, instant access, no more discovering at 8:47am that you have left your English anthology on the kitchen table - what is not to like? Then I thought about it for more than thirty seconds, which is, I suspect, longer than this proposal has been thought about by anyone who will not have to live with its consequences.

Let me be precise about what is being proposed. We are not being offered technology as a supplement. We are being offered technology as a replacement. Every physical textbook - removed. Every page - digitised. Every student - issued a screen and told that this is progress. And perhaps it is. But progress towards what?

The evidence on digital reading is not ambiguous. It is clear. A meta-analysis published in Educational Research Review, covering over 170,000 participants, found that reading comprehension is significantly better on paper than on screen. This is not nostalgia dressed as science. It is science dressed as science. The reasons are neurological: paper provides tactile and spatial cues that support memory encoding. When you read a physical book, your brain maps information to a physical location - top of the left page, near the diagram, three chapters in. A screen offers no such architecture. It offers a uniform, glowing rectangle, and the brain, faced with uniformity, retains less. We know this. The research is not new. The question is whether we care.

I suspect the real motivation for this proposal is financial. Digital licences, over time, cost less than replacing damaged textbooks. This is true. It is also true that the cheapest option and the best option are, in education, almost never the same thing. We could save money by removing the heating. We could save money by increasing class sizes to fifty. We do not do these things because we recognise, correctly, that education is an investment, not a cost centre. Textbooks should be subject to the same logic.

And then there is the question none of us want to ask but all of us know the answer to. If every student in this room has a tablet open in every lesson, will they use it exclusively for learning? I look around this assembly hall and I see three hundred people, every one of whom has, at some point, opened a browser intending to research the Treaty of Versailles and emerged forty-five minutes later having watched a man rank every flavour of crisp. I include myself. I include, with the greatest respect, several members of staff. Distraction is not a failure of willpower. It is a design feature of the technology we are proposing to place at the centre of every lesson.

I am not asking you to reject technology. I am asking you to reject the assumption that newer means better, that screens are inherently superior to pages, and that the correct response to every problem is to add a device. Keep the textbooks. Use technology where it genuinely improves learning. And when someone tells you that the future is digital, remind them that the future is also the generation sitting in this room - and we deserve tools that are chosen because they work, not because they are fashionable.

Thank you.`,
    },
  },
  {
    id: 'edexcel-7',
    board: 'Edexcel',
    type: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Literature Poetry Comparison',
    extract: `Poem A - "Ozymandias" by Percy Bysshe Shelley:
"I met a traveller from an antique land,
Who said - 'Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed.'"

Poem B - "My Last Duchess" by Robert Browning (extract):
"That's my last Duchess painted on the wall,
Looking as if she were alive. I call
That piece a wonder, now: Fra Pandolf's hands
Worked busily a day, and there she stands.
Will't please you sit and look at her?"`,
    question:
      'Compare how the poets explore the theme of power and its limitations in "Ozymandias" and "My Last Duchess." (20 marks)',
    marks: 20,
    timing: '35 minutes',
    markScheme: [
      'Compares ideas about power across both poems',
      "Analyses how the poets' methods convey attitudes to power",
      'Uses well-selected quotations from both poems',
      'Explores how form and structure contribute to meaning',
      'Considers how context informs the treatment of power',
      'Maintains an integrated comparative approach throughout',
    ],
    examinerTips: [
      'Compare throughout. Do not write about one poem and then the other.',
      'Consider how each poet uses form and structure, not just language.',
      'Think about what both poems suggest about the nature of power itself.',
      'Context should deepen your analysis, not exist as a separate paragraph.',
    ],
    modelAnswers: {
      'Grade 4-5': `Both "Ozymandias" and "My Last Duchess" present powerful men who try to control others, but both poems suggest that power has limits.

In "Ozymandias," the pharaoh is presented as arrogant and commanding. The description of his "frown, and wrinkled lip, and sneer of cold command" shows he was a cruel ruler who wanted to intimidate others. However, his statue is now broken and surrounded by empty desert, which shows that even the most powerful leaders are eventually forgotten. The word "shattered" suggests complete destruction of his power.

In "My Last Duchess," the Duke is also controlling. He speaks about his dead wife as if she were a possession, calling her "my last Duchess" - the possessive pronoun "my" shows ownership. He controls who can look at her painting: "Will't please you sit and look at her?" is a command disguised as a polite question. The Duke's power seems more intact than Ozymandias's, but the fact that he can only control a painting, not a living person, reveals its limitation.

Both poems use art to explore power. Ozymandias's power survives only through the sculptor's skill, while the Duke has replaced his wife with a portrait he can control. Both suggest that powerful men try to preserve their authority through art but ultimately reveal their own weakness.`,
      'Grade 6-7': `Shelley and Browning both anatomise power through its material remnants - a statue and a painting - and both reveal that the desire to control outlasts the ability to do so.

Shelley constructs Ozymandias's power as already ruined. The sonnet's opening removes the pharaoh from his own story: he does not speak directly but is reported through a chain of narration - traveller to poet to reader - that structurally enacts the erosion of authority. The "shattered visage" retains the "sneer of cold command," but the command is now directed at empty desert. The irony is architectural: the passions "yet survive," but only because the sculptor - the subordinate, the servant - captured them in stone. Power is preserved by the very craft it patronised, and the pharaoh's immortality depends on the artist he almost certainly considered beneath him. The volta comes in the inscription's boast - "Look on my Works, ye Mighty, and despair!" - which the surrounding "lone and level sands" render absurd.

Browning's Duke presents a more insidious form of power: one that is current, active, and performed. The dramatic monologue allows the Duke to speak without interruption, his control of the conversation mirroring his desire to control everything around him. The painting of the Duchess is "a wonder" precisely because it is static - she cannot blush, cannot smile at other men, cannot exhibit the independence that so enraged him. The possessive "my last Duchess" reduces a human being to a catalogued item, and the phrase "last" implies she is one in a sequence, her replacement already being negotiated. Yet Browning's form subtly undermines the Duke's authority: the rhyming couplets are deliberately run-on, their enjambment suggesting a speaker who cannot quite control his own rhetoric, whose composure is a performance that threatens to slip.

Both poems suggest that the truest expression of power is the attempt to outlast death - through statues, through portraits - and both reveal this attempt as ultimately futile. Ozymandias's monument is rubble; the Duke's control extends only to a painting on a wall. Art survives the powerful, but it does not serve them - it exposes them.`,
      'Grade 8-9': `Both poems stage an encounter with power through its aesthetic afterlife - a broken statue, a commissioned portrait - and both discover that art, which the powerful deploy as an instrument of control, ultimately becomes the instrument of their exposure.

Shelley's sonnet is a masterclass in structural irony. Ozymandias never speaks to us directly; his voice arrives through three mediations - sculptor to traveller to poet - each layer of remove enacting the historical distance that has rendered his authority meaningless. The "two vast and trunkless legs of stone" are a monument to dismemberment: the body of power has been amputated, leaving only the stance of authority without its substance. That the "sneer of cold command" survives while the empire does not is Shelley's central irony - the emotions of tyranny are more durable than its achievements. The sculptor "well those passions read" - and the verb "read" is crucial, positioning the artist as interpreter rather than servant. The hand that "mocked" the passions carries a deliberate ambiguity: it means both "copied" and "ridiculed," so the statue simultaneously memorialises and satirises its subject. Shelley, writing in the aftermath of the Napoleonic Wars, understood that empires generate monuments in direct proportion to their insecurity, and that the desert - patient, indifferent, infinite - is the only honest critic of human ambition.

Browning's Duke operates in a different register of power - intimate, domestic, and therefore more disturbing. Where Ozymandias commanded armies, the Duke commands a conversation, and his dramatic monologue is itself an exercise in control: we hear only his voice, see only through his gaze. The Duchess has been converted from a living woman into "a piece" on a wall - the reduction is linguistic before it is literal. The crucial revelation - that the Duke "gave commands; / Then all smiles stopped together" - is delivered with a syntactic brevity that mirrors the efficiency of the violence it describes. The painting is not a memorial but a correction: it fixes the Duchess in the posture the Duke preferred, her smile now permanently directed by his permission. Yet Browning's form performs the same subversion as Shelley's. The enjambed couplets - technically closed but experientially open - create a tension between the Duke's desire for containment and the poem's refusal to be contained. His rhetoric slips: "I choose / Never to stoop" protests too much, and the final descent to negotiate a dowry exposes the transactional reality beneath the aesthetic surface.

The poems converge on a devastating insight: power that requires a monument is power that suspects its own impermanence. Ozymandias commissions a colossus because empires end; the Duke commissions a portrait because wives die or are killed. Both men attempt to transcend their limitations through art, and both are betrayed by it - Ozymandias by a sculptor who embedded mockery in the stone, the Duke by a monologue that reveals far more than he intends. Shelley and Browning, writing within three decades of each other, both recognised that the Romantic fascination with power was inseparable from the recognition of its futility - and that the poet's task was not to celebrate or condemn the powerful but to let them speak until they condemned themselves.`,
    },
  },
  {
    id: 'edexcel-p1-19c-reading-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Comprehension and Inference (Q1-2)',
    type: 'reading',
    difficulty: 'Foundation',
    extract: `I arrived in Manchester on a Tuesday in November, and the first thing that struck me was the sky - or rather, the absence of it. A pall of smoke hung over the city so dense and so low that one could scarcely distinguish the rooftops from the clouds. The streets were crowded beyond anything I had witnessed in London. Men, women, and children of every description hurried along the pavements, their faces blackened with soot, their clothing threadbare, their expressions fixed in that peculiar blankness which I have since learned to recognise as the mask of exhaustion.\n\nThe factories dominated everything. They rose on every side like the cathedrals of some new and pitiless religion, their chimneys belching forth a smoke that tasted of sulphur and coated the tongue with a metallic bitterness. I counted fourteen mills within a single mile of my lodging. The noise was incessant - a great grinding, clattering roar that began before dawn and did not cease until long after dark. The workers who emerged from these establishments at the end of their shifts moved with the slow, mechanical gait of people whose bodies had been borrowed for the day and returned in worse condition than they were lent.\n\nI spoke with one woman, a spinner, who told me she worked fourteen hours a day for seven shillings a week. She was thirty-one years old. She looked fifty.`,
    extractSource:
      'Adapted from a 19th-century social investigation report, in the style of Friedrich Engels',
    question:
      "Read the extract carefully. (a) Identify four things you learn about the conditions in Manchester from the extract. (4 marks) (b) What impressions do you get of the writer's attitude towards what they witnessed? Use evidence from the text to support your answer. (6 marks)",
    marks: 10,
    timing: '15 minutes',
    modelAnswers: {
      'Grade 4-5': `(a) From the extract, I learn that Manchester was extremely polluted, with smoke so thick you could not see the sky properly. I also learn that the streets were very crowded with people who looked exhausted and dirty. Third, the factories were noisy, with a "grinding, clattering roar" that went on all day. Finally, workers were poorly paid - one woman earned only "seven shillings a week" for fourteen-hour days.\n\n(b) The writer seems shocked and horrified by the conditions in Manchester. They describe the smoke as a "pall," which is a word associated with death and funerals, suggesting they see Manchester as a place of suffering. The writer compares the factories to "cathedrals of some new and pitiless religion," which shows they think industry has replaced God with something cruel. The writer is clearly sympathetic to the workers, particularly the spinner who "looked fifty" at thirty-one. By including her age and appearance, the writer wants the reader to feel outraged at how work has aged her.`,
      'Grade 6-7': `(a) The extract reveals that Manchester's air pollution was severe enough to obscure the sky entirely, described as "a pall of smoke" that made rooftops indistinguishable from clouds. The city was densely populated and its inhabitants visibly marked by poverty - "faces blackened with soot" and "clothing threadbare." The industrial infrastructure was overwhelming, with fourteen mills within a single mile, producing constant noise from before dawn until after dark. Working conditions were exploitative: a thirty-one-year-old spinner worked fourteen-hour days for seven shillings a week, and the physical toll was such that she appeared decades older than her actual age.\n\n(b) The writer adopts the stance of an appalled but controlled witness. Their attitude is conveyed less through direct condemnation than through the precision of their observation: the counting of "fourteen mills within a single mile" performs the investigative rigour of someone compiling evidence for an indictment. The metaphor comparing factories to "cathedrals of some new and pitiless religion" reveals a writer who views industrialisation as an ideological system demanding human sacrifice, the adjective "pitiless" attributing to capitalism the cold indifference of a deity without mercy. The description of workers moving with "the slow, mechanical gait of people whose bodies had been borrowed for the day" is particularly revealing: the passive construction "had been borrowed" frames the workers as objects rather than agents, and the verb "borrowed" implies a transaction in which the body is a commodity - used and "returned in worse condition." The final two sentences - the spinner's age and appearance - are devastating in their restraint. The writer offers no commentary, allowing the factual juxtaposition of "thirty-one years old" and "looked fifty" to speak for itself. This is the controlled outrage of a writer who trusts their evidence to be more persuasive than their anger.`,
      'Grade 8-9': `(a) The extract establishes Manchester as a city physically dominated by industrial pollution: the sky is obscured by smoke that renders rooftops and clouds indistinguishable. The population is dense, visibly impoverished, and marked by the physical residue of their labour - soot-blackened faces, threadbare clothing, expressions of "exhaustion." Industrial infrastructure is overwhelming in scale (fourteen mills per mile) and temporally inescapable, producing noise from before dawn until after dark. Labour conditions are exploitative both economically (seven shillings for seventy-hour weeks) and physiologically, ageing workers far beyond their years.\n\n(b) The writer's attitude is one of forensic indignation - moral outrage disciplined by the conventions of empirical investigation, producing a text that is simultaneously reportage and polemic. The opening admission that the sky's absence was "the first thing that struck me" positions the writer as an outsider whose perceptual framework is being overwhelmed, and the verb "struck" encodes the city's environment as a form of assault. The governing metaphor - factories as "cathedrals of some new and pitiless religion" - reveals a writer who understands industrialisation not merely as an economic system but as a totalising ideology. The word "cathedrals" attributes to the mills the architectural grandeur and social centrality of religious institutions, while "pitiless" performs the crucial inversion: where cathedrals promise mercy, these structures offer none. The smoke that "tasted of sulphur" invokes the traditional imagery of hell, grounding the metaphor in sensory experience. The writer's most politically charged intervention is the metaphor of borrowed bodies: workers whose physical selves "had been borrowed for the day and returned in worse condition than they were lent." This is the language of property and contract, applied to human flesh - and the comparative "worse condition" reframes industrial labour as a violation of an implied agreement, the worker's body degraded by a transaction they had no power to negotiate. The closing vignette of the spinner is structured as the culmination of the argument. The writer provides her testimony ("fourteen hours a day for seven shillings a week"), her age, and her appearance, then stops. The two terminal sentences - "She was thirty-one years old. She looked fifty" - are brutally paratactic, refusing the connective tissue of explanation or sentiment. The gap between the sentences is the gap between fact and injustice, and the writer's refusal to fill it is both a rhetorical strategy and a moral statement: the evidence needs no interpretation because the reader's own conscience will supply it.`,
    },
    markScheme: [
      'Identifies four distinct, accurate pieces of information from the extract (Q1)',
      'Supports each point with textual reference or quotation',
      "Analyses how the writer's language reveals their attitude (Q2)",
      'Comments on the effect of specific word choices and techniques',
      "Shows understanding of the writer's purpose and perspective",
      'Distinguishes between explicit and implicit information',
    ],
    examinerTips: [
      'Part (a) is straightforward retrieval - keep answers clear and concise, one point per sentence.',
      "Part (b) requires inference - read between the lines for the writer's attitude.",
      'Remember: Edexcel Paper 1 uses 19th-century NON-FICTION, not fiction.',
      'Use short, embedded quotations rather than copying out long sections.',
    ],
  },
  {
    id: 'edexcel-p1-19c-language-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Language Analysis (Q3)',
    type: 'reading',
    difficulty: 'Higher',
    extract: `The condition of the lodging-houses in which the poorest of the poor take refuge beggars all description. I visited one such establishment in Whitechapel last Thursday evening and found, in a single room of perhaps twelve feet by ten, no fewer than seventeen persons - men, women, and children - sleeping, if that word can be applied to so fitful and wretched a state. The air was foul beyond endurance. A single candle guttered on a broken table, casting a yellow and uncertain light over a scene that resembled nothing so much as the hold of a slave ship.\n\nThe walls ran with damp. The floor, which was bare earth in places where the boards had rotted through, was covered in a substance I will not describe to a readership unaccustomed to such particulars, except to say that it would not have been tolerated in any stable in the country. There was no ventilation, no sanitation, and no water save a single pail in the corner from which all seventeen occupants were expected to drink. The landlord of this establishment, I subsequently discovered, charges fourpence a night for the privilege of sleeping in it. He owns eleven such properties. He lives in Kensington.`,
    extractSource:
      'Adapted from 19th-century investigative journalism, in the style of Henry Mayhew',
    question:
      'Analyse how the writer uses language and structure to convey the horrors of the lodging-house and to influence the reader. Support your views with detailed reference to the text. (15 marks)',
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer uses strong language to show how terrible the lodging-house is. The phrase "beggars all description" means it is so bad the writer cannot fully describe it. The room is overcrowded, with "seventeen persons" in a space only "twelve feet by ten," and the writer uses the dash to list "men, women, and children" to show that everyone, even children, had to live in these conditions.\n\nThe simile comparing the room to "the hold of a slave ship" is very powerful because it connects the lodging-house to slavery, suggesting the people living there are being treated as less than human. The writer describes the floor with a substance they "will not describe," which makes the reader imagine something truly disgusting.\n\nThe structure is also effective. The writer saves the most shocking information for the end: the landlord charges fourpence a night, owns eleven properties, and "lives in Kensington." The three short sentences at the end create a powerful contrast between the landlord's wealth and the poverty of the people living in his properties. This is designed to make the reader angry at the injustice.`,
      'Grade 6-7': `The writer deploys the conventions of investigative journalism to construct a systematic exposé that moves from visceral description to political indictment. The opening declaration - "beggars all description" - is a rhetorical paradox: the writer claims the scene is indescribable, then proceeds to describe it with devastating specificity. This functions as a form of apophasis, signalling to the reader that what follows will exceed their expectations of suffering.\n\nThe statistical precision - "twelve feet by ten," "seventeen persons" - operates as evidence, grounding the emotional appeal in verifiable fact. The parenthetical qualification "if that word can be applied to so fitful and wretched a state" challenges the reader's vocabulary, implying that comfortable language cannot accommodate this reality. The simile "resembled nothing so much as the hold of a slave ship" is the paragraph's most politically charged moment: it invokes the abolitionist cause - won within living memory for Victorian readers - to reframe domestic poverty as a moral obscenity of equivalent scale.\n\nThe second paragraph intensifies through accumulation. The anaphoric "no ventilation, no sanitation, and no water" uses the tricolon of negation to define the space by what it lacks, each absence more fundamental than the last. The writer's refusal to describe the floor's covering - "I will not describe to a readership unaccustomed to such particulars" - is a masterful rhetorical manoeuvre: it simultaneously protects the reader's sensibility and weaponises their imagination, forcing them to conjure horrors worse than description could provide.\n\nThe structural climax is the final three sentences. The revelation of the landlord's fourpence charge, his eleven properties, and his Kensington residence constitutes a devastating tricolon of escalating outrage. Each sentence is shorter than the last. "He lives in Kensington" - just four words - concentrates the entire argument into a geographical contrast between Whitechapel and Kensington that the Victorian reader would have understood immediately: the squalor that generates the profit and the suburb where the profit is enjoyed. The writer's restraint here is the most powerful tool in the extract: no adjective, no commentary - just the fact, presented as its own condemnation.`,
      'Grade 8-9': `The extract operates as a carefully engineered machine of moral persuasion, deploying the rhetorical conventions of Victorian social investigation - empirical detail, controlled horror, strategic revelation - to convert observation into indictment.\n\nThe opening gambit - "beggars all description" - performs a double function. Ostensibly, it confesses the inadequacy of language; structurally, it prepares the reader for content that will exceed their framework for processing suffering. The verb "beggars" is itself revealing: to beggar is to impoverish, and the writer's choice of a word associated with destitution to describe the failure of representation subtly argues that poverty contaminates everything it touches, including the language used to describe it. What follows is relentlessly specific: "twelve feet by ten," "seventeen persons," "a single candle." The precision is both evidentiary and rhetorical - the writer establishes credibility through measurement while using the gap between the numbers (twelve by ten, seventeen people) to make the reader perform the calculation of suffering for themselves.\n\nThe parenthetical "if that word can be applied to so fitful and wretched a state" interrogates the word "sleeping" and, by extension, the entire vocabulary of domestic normality. Sleep implies rest, comfort, safety; the writer's qualification denies all three. The simile comparing the scene to "the hold of a slave ship" is the extract's most incendiary intervention, deliberately invoking a moral consensus - the wrongness of slavery - and redirecting it towards domestic poverty. For a Victorian readership, this analogy was both shocking and strategically astute: it recruited the moral authority of abolitionism for the cause of social reform.\n\nThe second paragraph shifts from sensory horror to rhetorical strategy. The floor's covering, withheld from the "readership unaccustomed to such particulars," is the extract's most sophisticated technique: the occupatio (describing by refusing to describe) transforms the reader from passive recipient into active imaginer, and the euphemistic framing - "would not have been tolerated in any stable" - makes its point through comparison. The occupants live in conditions that would be considered unacceptable for horses, and the writer trusts the reader to register the implication: these people are being treated as worth less than animals.\n\nThe tricolon of absence - "no ventilation, no sanitation, and no water" - accelerates through human necessities, each denial more elemental than the last, culminating in the shared drinking pail. But the extract's true structural achievement is its final three sentences, which execute a devastating shift from the experiential to the economic. "He charges fourpence a night" quantifies exploitation. "He owns eleven such properties" multiplies it. "He lives in Kensington" locates the profit. The sentences contract as the outrage expands; the final four words perform the geographical violence of Victorian capitalism - the short distance between Whitechapel and Kensington that is also the moral distance between those who suffer and those who profit from suffering. The writer offers no explicit judgement because the structure has already delivered the verdict. The reader is left not with an argument to evaluate but with a fact to act upon.`,
    },
    markScheme: [
      'Analyses specific language choices and their effects in detail',
      "Comments on how structural features contribute to the writer's purpose",
      'Explores how the writer positions and influences the reader',
      'Uses well-integrated quotations with close textual analysis',
      'Employs subject terminology precisely and purposefully',
      'Considers the interplay between language and structure',
    ],
    examinerTips: [
      'Edexcel Paper 1 Q3 asks for BOTH language and structure - address both explicitly.',
      "Remember this is 19th-century non-fiction: consider the writer's purpose (to inform, persuade, campaign).",
      'Analyse the effect of specific techniques rather than simply identifying them.',
      'Consider how the writer positions the reader - are you being persuaded, shocked, moved?',
    ],
  },
  {
    id: 'edexcel-p1-transactional-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Transactional Writing (Q5)',
    type: 'writing',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      'You have been asked to give a speech to your year group about the importance of reading. Write your speech. In your speech you could explain why reading matters, give examples from your own experience, and persuade your audience to read more. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Good morning everyone. I want to talk to you today about something that changed my life - reading. I know that sounds dramatic, but hear me out.\n\nWhen I was younger, I hated reading. I thought books were boring and that there were much better things to do with my time, like playing games or watching videos. Then one day, when I was stuck at my nan's house with nothing to do, I picked up a book from her shelf. It was a detective story. I finished it in two days.\n\nThat book didn't just entertain me - it showed me a world I'd never thought about. I started to notice details, to wonder about people's motives, to think about things from different angles. Reading doesn't just give you stories. It gives you a different way of seeing.\n\nI know what some of you are thinking: "I don't have time" or "I can't concentrate." But you don't need to read for hours. Even ten minutes a day adds up. That's over sixty hours a year. Imagine what sixty hours of new ideas could do for your mind.\n\nStudies show that people who read regularly are better at understanding other people's emotions, are less stressed, and do better in exams - not just in English, but in every subject. Reading makes your brain stronger in ways that nothing else can.\n\nSo here's my challenge to you: pick up one book this month. Just one. Give it fifty pages. If you don't like it, try another. The right book is out there - you just haven't found it yet.\n\nThank you.`,
      'Grade 6-7': `Let me begin with a confession. I didn't come here to tell you that reading is important. You already know that. Your teachers have been saying it since primary school, and if repetition were sufficient to change behaviour, you would all be reading Dostoevsky by now. So I'm not going to tell you reading is important. I'm going to tell you why it matters to me, and you can decide for yourself whether any of it applies to you.\n\nTwo years ago, I went through a period I don't talk about much. Things at home were difficult. School felt pointless. I spent most of my evenings staring at my phone, scrolling through other people's lives and feeling worse about my own. Then my English teacher - who I suspect knew more about what I was going through than she let on - left a book on my desk. No instruction. No reading log. Just a book, with a Post-it note that said: "You might like this."\n\nI did like it. I more than liked it. For the first time in months, I spent an evening thinking about someone else's problems instead of my own. And here's what I didn't expect: when I came back to my own problems afterwards, they looked different. Smaller, somehow. More manageable. Not because the book had solved anything, but because it had reminded me that difficulty is universal, that other people survive it, and that the way we tell stories about our struggles is part of how we overcome them.\n\nReading is not a hobby. It is a technology for understanding human experience. Every book you read installs a new perspective in your mind - a new way of seeing, feeling, interpreting. Research from the University of Toronto found that people who read literary fiction score significantly higher on tests of empathy. Not because fiction teaches you to be kind, but because it forces you to inhabit a consciousness that is not your own. That is a skill. And it is a skill that social media - which shows you only what you already agree with - is actively eroding.\n\nI am not asking you to abandon your phones. I am asking you to spend thirty minutes a day with something that was written to expand your mind rather than to harvest your attention. The difference matters. It matters more than most things you will do today.\n\nFind the book that changes you. It exists. I promise.`,
      'Grade 8-9': `I want to start by admitting something uncomfortable. Standing here, asking you to read more, I am aware that I sound like every assembly you have ever sat through - earnest, well-meaning, and approximately thirty seconds from losing your attention. So let me skip the part where I tell you that reading is good for you. You are not children. You do not need to be told that vegetables exist. What I want to talk about instead is what reading actually does - not to your grades, not to your vocabulary, but to the architecture of your thinking.\n\nEvery piece of information you consume shapes the way your mind works. Social media trains you to scan, to react, to move on. It rewards speed over depth, opinion over understanding, and outrage over nuance. Reading - sustained, serious, effortful reading - trains the opposite. It teaches you to hold a complex idea in your mind for longer than a notification cycle. It teaches you to tolerate ambiguity, to resist the tyranny of the simple answer, to understand that most things worth knowing cannot be compressed into a caption. In an attention economy, the ability to concentrate is not merely useful. It is an act of resistance.\n\nBut reading does something else - something more subversive than improving your focus. It gives you access to the interior lives of people you will never meet. When you read a novel, you do not simply learn about a character; you become them, temporarily. You inherit their memories, their anxieties, their way of noticing the world. Neuroscience confirms what readers have always known: the brain does not distinguish clearly between reading about an experience and having one. When you read about someone walking through snow, your motor cortex activates. When you read about someone's grief, your emotional circuitry responds. Reading is not a metaphor for empathy. It is the mechanism.\n\nI think about this often - particularly when I hear people describe reading as a luxury, as something for people who have time and comfort and quiet. Reading is not a luxury. It is the most democratic form of education ever invented. A library card costs nothing. A second-hand book costs less than a coffee. And what you receive in return is access to every mind that has ever thought clearly enough to write something down. That is not a hobby. That is an inheritance.\n\nSo here is what I am asking. Not that you read more - that framing turns reading into a chore, and chores are the enemy of genuine engagement. What I am asking is that you find the thing that unlocks it for you. It might be fiction. It might be history, or science, or poetry, or the biography of someone whose life was nothing like yours. The format does not matter. What matters is the moment - and it will come, if you let it - when you look up from a page and realise that the world has become, in some small but irreversible way, larger than it was before you started reading.\n\nThat moment is worth every page that precedes it. Go and find it.`,
    },
    markScheme: [
      'Matches the conventions of the specified form (speech - direct address, rhetorical devices)',
      'Communicates clearly and effectively with a sustained, compelling argument',
      'Adapts tone and register to the specified audience (year group peers)',
      'Uses a range of persuasive techniques (anecdote, evidence, rhetorical questions, direct address)',
      'Organises ideas coherently with effective paragraphing and structural control',
      'Demonstrates technical accuracy with ambitious vocabulary and varied syntax',
    ],
    examinerTips: [
      'Edexcel Paper 1 Q5 is transactional writing - match the FORM exactly (speech, letter, article, etc.).',
      'A speech must sound like spoken language: use direct address, rhetorical questions, and varied pace.',
      'The best responses feel authentic - write as if you genuinely care about the topic.',
      'Plan your structure: a strong opening, 3-4 developed points, and a memorable conclusion.',
    ],
  },
  {
    id: 'edexcel-p2-fiction-reading-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Fiction Reading (Q1-3)',
    type: 'reading',
    difficulty: 'Foundation',
    extract: `The kitchen was the warmest room in the house, and in winter it was the only room that mattered. Grace stood at the counter rolling pastry with the same wooden pin her mother had used, and her mother before that. The flour dusted her forearms like first snow on a dark field. Outside, the January light was already failing at half past three, and the window had become a black mirror in which she could see herself - a woman of sixty-two, alone in a kitchen, making a pie that nobody had asked for.\n\nThe radio murmured on the shelf above the cooker. She kept it on all day, not for the programmes but for the voices - the low, companionable hum of strangers talking about things that did not concern her. It filled the spaces that silence would otherwise occupy, and silence, she had discovered, was not the peaceful thing that poets claimed. Silence was an animal that grew larger the more room you gave it.\n\nShe heard the gate. The particular squeak of the hinge that David had promised to oil every weekend for thirty years and never had. For a moment - one brief, treacherous moment - she forgot. Her hands stilled on the rolling pin and she almost called out his name. Then she remembered. The gate squeaked in the wind sometimes. That was all. She returned to the pastry and pressed harder than was necessary, and the radio kept talking, and the light kept failing, and the pie kept being made for nobody.`,
    extractSource: 'Original composition in the style of contemporary literary fiction',
    question:
      "How does the writer present Grace's loneliness and grief in this extract? You should comment on the writer's use of language and structure, and use examples from the text to support your answer. (15 marks)",
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer presents Grace as lonely and grieving through her actions and surroundings. She is described as "alone in a kitchen, making a pie that nobody had asked for," which shows she has no one to cook for but continues the routine anyway. This suggests her loneliness comes from losing someone she used to care for.\n\nThe radio is an important detail. Grace keeps it on "not for the programmes but for the voices," which tells us she needs to hear other people talking even if she is not part of the conversation. The writer says silence "was an animal that grew larger the more room you gave it," which is a metaphor showing that being quiet makes loneliness worse.\n\nThe most emotional part is when Grace hears the gate and almost calls out David's name. The phrase "one brief, treacherous moment" shows that her memory tricked her into thinking David was still alive. The word "treacherous" means her own mind betrayed her. When she "remembered," the short sentence creates a sudden, sad moment. At the end, the repetition of "and" in "the radio kept talking, and the light kept failing, and the pie kept being made for nobody" creates a feeling of everything continuing sadly without stopping.`,
      'Grade 6-7': `The writer constructs Grace's loneliness not as dramatic suffering but as something woven into the texture of ordinary domestic life. The opening positions the kitchen as a site of diminished significance - it is "the only room that mattered," implying that the rest of the house has become irrelevant, its rooms abandoned to cold and emptiness. Grace's pastry-making with a rolling pin inherited from her mother and grandmother establishes continuity, but the simile "flour dusted her forearms like first snow on a dark field" introduces a visual of seasonal death that shadows the domestic warmth.\n\nThe structural centrepiece of the extract is the radio, which functions as a prosthetic for human connection. The writer's distinction - "not for the programmes but for the voices" - reveals that Grace requires not content but presence. The metaphor of silence as "an animal that grew larger the more room you gave it" personifies absence as something predatory and expansive, reframing the quiet house as a space of active threat rather than passive emptiness.\n\nThe gate sequence is the extract's emotional climax, and the writer handles it with precise structural control. The parenthetical "one brief, treacherous moment" slows the narrative to the pace of the experience itself, the adjective "treacherous" attributing agency to memory - it is the mind that betrays, not the gate. The sentence "Then she remembered" operates as a volta: two words that collapse the momentary hope. The final sentence uses polysyndeton - "and the radio kept talking, and the light kept failing, and the pie kept being made for nobody" - to create a rhythm of relentless continuation. The progressive verbs ("kept talking," "kept failing," "kept being made") insist that life does not stop for grief; it merely continues, emptied of purpose. The passive "kept being made" is particularly devastating: the pie has no maker in this construction, only a process - Grace herself has been grammatically erased from the activity that defines her.`,
      'Grade 8-9': `The extract's achievement is its refusal to separate grief from the ordinary - indeed, its central argument is that grief is the ordinary, reconstituted. Grace's loneliness is not dramatised through crisis but through continuation: the kitchen is still warm, the pastry is still being made, the rolling pin is still the same one her mother used. The domestic ritual persists, but its audience has vanished, and this absence transforms every familiar action into an elegy.\n\nThe opening paragraph establishes this through a carefully managed tension between warmth and void. The kitchen is "the warmest room" - and in winter "the only room that mattered" - a formulation that simultaneously conveys comfort and contraction, the shrinking of a life to a single habitable space. The inherited rolling pin introduces temporal depth, connecting Grace to a matrilineal chain of domesticity, but the simile comparing flour to "first snow on a dark field" disrupts the warmth with an image of covering, of cold, of landscapes emptied by winter. The window that becomes "a black mirror" forces Grace into self-confrontation: she sees "a woman of sixty-two, alone in a kitchen, making a pie that nobody had asked for." The shift from first-person experience to third-person observation is structurally crucial - Grace sees herself from outside, and the image is stripped of interiority, reduced to its social facts. "Nobody had asked for" is the phrase that carries the weight: it transforms cooking from an act of love into an act of absence.\n\nThe radio passage reconfigures silence as an antagonist. Grace's need is not for information but for "the low, companionable hum of strangers" - the adjective "companionable" revealing how debased the currency of company has become. The metaphor of silence as "an animal that grew larger the more room you gave it" inverts the usual framing of quiet as peace; here, silence is organic, predatory, and spatial - it occupies the house the way a living creature would, expanding to fill the vacancy left by David.\n\nThe gate sequence executes the extract's most psychologically precise moment. The "particular squeak" - not any squeak, but this one, individualised by thirty years of unrepaired familiarity - triggers an involuntary recognition. The parenthetical "one brief, treacherous moment" performs a temporal suspension: we are held in the instant before reality reasserts itself, and the adjective "treacherous" locates betrayal not in the external world but in the mechanism of memory itself, which offers the dead back to us and then withdraws them. "Then she remembered" is syntactically brutal in its brevity - a full stop after three words, enacting the abruptness of recollection. The compensatory gesture - pressing the pastry "harder than was necessary" - displaces emotional pain into physical force, the adverbial phrase "than was necessary" acknowledging the excess while refusing to name its cause.\n\nThe final polysyndetic sentence - "and the radio kept talking, and the light kept failing, and the pie kept being made for nobody" - is the extract's structural and thematic culmination. The repeated "and" refuses closure, insisting on continuation without resolution. The progressive aspect ("kept") emphasises duration rather than completion. And the final phrase, "for nobody," grammatically empties the sentence of its recipient, just as grief has emptied the kitchen of its purpose. The pie is still being made. It is being made for nobody. This is what grief looks like when it has stopped being an event and become a condition.`,
    },
    markScheme: [
      'Analyses how language choices create a sense of loneliness and grief',
      'Comments on structural features and their effects (sequencing, climax, repetition)',
      'Uses well-selected, embedded quotations with close analysis',
      'Explores how the writer positions the reader emotionally',
      'Employs subject terminology precisely and in service of the argument',
      'Develops a sustained, coherent interpretation',
    ],
    examinerTips: [
      'Edexcel Paper 2 uses 20th/21st-century fiction - think about character construction and narrative technique.',
      'Address both language AND structure as the question requires.',
      'The best answers explore how small domestic details carry large emotional weight.',
      'Consider what the writer withholds or implies, not just what they state directly.',
    ],
  },
  {
    id: 'edexcel-p2-nonfiction-comparison-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Non-Fiction Comparison (Q4)',
    type: 'reading',
    difficulty: 'Higher',
    extract: `Source A - From a letter written by a soldier during the First World War, 1916:\n"You ask me what it is like out here, and I find I cannot tell you honestly without either frightening you or boring you, because the truth is that it is both terrifying and tedious in almost equal measure. We spend days in the trench doing nothing at all - mending socks, writing letters, sleeping in mud - and then, without warning, the sky tears open and the world becomes a place of noise and metal and men screaming. Afterwards, there is silence. We count who is missing. We make tea. The ordinariness of what follows the horror is, I think, the thing I shall never be able to explain to anyone who was not here."\n\nSource B - From a 21st-century travel writer visiting the battlefields of the Western Front, 2019:\n"The fields at the Somme are green now, and very quiet. Cows graze where men died in their thousands, and the grass - thick, well-fed grass - covers everything. A guide explains that the soil here still produces iron fragments every spring, pushed upward by the frost: shrapnel, buttons, occasionally bone. The earth has not forgotten, even if the surface has learned to look as though it has. I stand at the edge of a crater that has become a pond and try to feel something adequate. I cannot. The scale defeats imagination. Seventy thousand casualties on the first day - a number so large it ceases to be a number and becomes instead a kind of weather, a pressure system of grief too vast to be experienced by a single mind."`,
    extractSource:
      "Source A: Adapted from a 1916 soldier's letter; Source B: Adapted from a 2019 travel essay",
    question:
      "Compare how the writers of Source A and Source B convey their experiences of war. You should compare the writers' different perspectives and experiences, how they use language and structure to convey those experiences, and the effects on the reader. (15 marks)",
    marks: 15,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The two writers have very different experiences of war. Source A is a soldier actually fighting in the trenches, while Source B is a modern visitor looking at the old battlefields. Despite this, both writers struggle to communicate what war means.\n\nSource A describes war as "both terrifying and tedious," which shows it is a mix of boredom and fear. The soldier lists everyday activities like "mending socks, writing letters, sleeping in mud" to show how ordinary much of trench life was. But then "the sky tears open" and everything becomes violent. The contrast between normal activities and sudden horror is very effective. Source A says the hardest thing to explain is "the ordinariness of what follows the horror" - making tea after people have died.\n\nSource B describes the modern battlefields as "green now, and very quiet." The writer uses the detail of iron fragments and "occasionally bone" being pushed up by frost to show that the war is still physically present beneath the surface. The metaphor at the end comparing the number of casualties to "a kind of weather" suggests that the scale of death is too big to understand as individual people.\n\nBoth writers admit they cannot fully communicate their experience. Source A says "I cannot tell you honestly" and Source B says "I cannot" feel "something adequate." This similarity is interesting because even though they are over a hundred years apart, war defeats both of their abilities to express what they feel.`,
      'Grade 6-7': `Both sources engage with the fundamental incommunicability of war, but from radically different temporal and experiential positions - one from within the event, one from a century's distance - and the comparison reveals as much about the limits of language as about the conflict itself.\n\nSource A's soldier writes from immediate experience and frames his letter through an admission of communicative failure: he "cannot tell you honestly" without causing either fear or boredom. This binary maps onto the structure of his account, which oscillates between the "tedious" - the domestic listing of "mending socks, writing letters, sleeping in mud" - and the "terrifying," rendered through the violent metaphor of the sky tearing open. The asyndetic shift from routine to carnage ("the world becomes a place of noise and metal and men screaming") enacts the suddenness of bombardment, the polysyndeton of "and" piling sensory assault without pause. Most striking is the coda: "We count who is missing. We make tea." The paratactic juxtaposition of death and domesticity refuses to grant either activity greater significance, and this flattening is itself the trauma the writer identifies - "the ordinariness of what follows the horror."\n\nSource B approaches war from the opposite direction: not from within but from above, looking down at grass that "covers everything." The writer's perspective is archaeological - the Somme's surface has "learned to look as though it has" forgotten, the personification attributing to the landscape a performance of normality that the iron fragments and bone betray every spring. Where Source A's horror is immediate and sonic ("noise and metal and men screaming"), Source B's is geological and silent, emerging from the earth in fragments. The final metaphor - casualties as "a kind of weather, a pressure system of grief" - reframes loss as atmospheric, something experienced not individually but environmentally, and the phrase "too vast to be experienced by a single mind" directly echoes Source A's conviction that the truth cannot be communicated.\n\nThe structural parallel is significant. Both writers build towards admissions of inadequacy - Source A's "I shall never be able to explain" and Source B's "I cannot" feel "something adequate" - but the nature of the failure differs. Source A cannot communicate because language cannot bridge the gap between experience and description. Source B cannot feel because imagination cannot bridge the gap between statistics and reality. Together, the texts argue that war exceeds both the capacity to describe and the capacity to comprehend.`,
      'Grade 8-9': `These texts occupy opposite ends of war's temporal spectrum - one immersed in the event, one visiting its residue - and their juxtaposition reveals that the passage of a century has not resolved the representational crisis that combat inaugurates; it has merely relocated it.\n\nSource A writes from within what might be called the grammar of survival. The opening admission - "I find I cannot tell you honestly" - establishes communicative failure as the letter's governing condition, and the two options offered to the recipient ("frightening you or boring you") map precisely onto the two modes of trench experience that the paragraph subsequently dramatises. The boredom is rendered through asyndetic listing: "mending socks, writing letters, sleeping in mud" - the final item disrupting the domestic rhythm with its material reminder that this is not home. The terror arrives through a single violent metaphor: "the sky tears open." The verb "tears" operates simultaneously as physical rupture and emotional distress, and the brevity of the transition - no paragraph break, no preparation - syntactically reproduces the phenomenology of bombardment. What follows is polysyndetic accumulation: "noise and metal and men screaming," the repeated "and" refusing hierarchy, insisting that every element of the sensory assault arrives simultaneously. But the letter's most psychologically penetrating observation is its last: "the ordinariness of what follows the horror." The subsequent actions - "We count who is missing. We make tea" - are presented in identical syntactic structures, each a subject-verb-object sentence of four words, granting death and tea-making equal grammatical weight. This is not callousness but dissociation, and the soldier's identification of this flattening as the truly inexpressible element reveals a sophistication of self-analysis that the register of a personal letter both enables and constrains.\n\nSource B inherits this inexpressibility but transforms it from a failure of language into a failure of imagination. The writer is a professional communicator visiting a site of historical trauma, and the tension between their rhetorical competence and their emotional inadequacy generates the passage's central irony: the better they describe the Somme, the more clearly they demonstrate that description cannot access what happened there. The opening is deliberately pastoral - "green now, and very quiet" - and the cows grazing "where men died in their thousands" creates a juxtaposition so extreme it borders on the obscene, the pastoral surface functioning as a kind of repression. The parenthetical detail of the grass - "thick, well-fed grass" - is quietly horrifying once the reader registers what it has been fed by, and the dash before this description mimics the moment of realisation. The personification of the earth as something that "has not forgotten, even if the surface has learned to look as though it has" reframes the landscape as a site of performed normality, the verb "learned" attributing to the ground a deliberate strategy of concealment.\n\nThe culminating metaphor - seventy thousand casualties reimagined as "a kind of weather, a pressure system of grief too vast to be experienced by a single mind" - is Source B's most ambitious attempt to find a language adequate to scale. By converting numerical loss into meteorological phenomenon, the writer argues that mass death operates environmentally rather than individually: it is not seventy thousand separate tragedies but a single atmospheric condition that no individual consciousness can contain. This directly parallels Source A's claim that "the ordinariness of what follows the horror" is inexplicable to "anyone who was not here" - both writers locate war's defining characteristic in its resistance to individual processing.\n\nThe deepest connection between the texts, however, is structural: both build towards confessions of inadequacy that are, paradoxically, the most eloquent moments in each piece. Source A's "I shall never be able to explain" and Source B's "I cannot" feel "something adequate" are not failures of writing but its highest achievements - the point at which language, by honestly acknowledging what it cannot do, accomplishes more than any description could. The century between the texts has changed everything about how war is accessed and nothing about how it defeats representation.`,
    },
    markScheme: [
      'Compares perspectives and experiences across both sources throughout',
      'Analyses methods (language, structure, tone, imagery) used by both writers',
      'Evaluates the impact on the reader for each source',
      'Uses comparative connectives to integrate the analysis',
      'Embeds well-selected quotations from both sources',
      "Shows perceptive understanding of how context shapes each writer's approach",
    ],
    examinerTips: [
      'Compare throughout - do not write about one source and then the other.',
      "Consider how the writers' different positions (participant vs. visitor) shape their language.",
      'Evaluate effectiveness: which writer conveys the experience more powerfully, and why?',
      'The best answers find structural and thematic parallels between the sources, not just differences.',
    ],
  },
  {
    id: 'edexcel-p2-imaginative-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Imaginative Writing (Q5)',
    type: 'writing',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      'Write a narrative or descriptive piece about a journey that changes the person making it. You may wish to write about a physical journey, an emotional journey, or both. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `The train pulled away from the platform and I watched the city shrink behind me. Tower blocks, then houses, then fields. It was the first time I had travelled anywhere alone.\n\nMum had been worried, of course. She had packed me sandwiches and written the address on a piece of paper even though I had it on my phone. "You never know," she said, folding it into my pocket. I smiled and told her I'd be fine, but as the train gathered speed, I wasn't sure I believed it.\n\nThe journey took three hours. I watched the countryside change through the window - flat fields giving way to hills, then to mountains that appeared suddenly, like something rising from the sea. I ate my sandwiches at Birmingham and bought a coffee that was too hot and too bitter, and I felt, for the first time, like someone who belonged in the world rather than someone who was just visiting it.\n\nAt the other end, the station was smaller than I expected. The air smelled different - cleaner, somehow, and colder. I walked out into the light and looked at the mountains, and they looked back at me, and I understood something I hadn't understood before: that the world was bigger than my bedroom, bigger than my school, bigger than every worry that had ever kept me awake. It had been there all along, waiting for me to arrive.\n\nI took out my phone and called Mum. "I'm here," I said. And I meant it in a way I hadn't expected to.`,
      'Grade 6-7': `The road from the coast climbed for eleven miles before it levelled out, and during those eleven miles the person driving changed.\n\nNot visibly. Not in any way that a photograph would have captured. She still had the same hands on the steering wheel, the same crease between her eyebrows, the same overnight bag on the back seat containing clothes she had packed in the dark while her husband slept. But somewhere between the second and the seventh mile - she could not have said exactly where - something shifted. A knot that had been tightening for months loosened by a single, crucial turn.\n\nThe landscape helped. It always does, when you are trying to think, to have something larger than your thoughts to look at. The sea appeared in the rear-view mirror, flat and grey and indifferent, and she felt a small, irrational gratitude towards it - for being there, for being vast, for not caring whether she was happy or not. There is a particular comfort in the indifference of geography.\n\nShe stopped at a lay-by at the top of the hill. Got out. The wind was fierce and tasted of salt and heather. Below her, the road she had driven unwound like ribbon dropped from a great height, and at the bottom, too small to see clearly, was the house she had left. The house where the arguments lived. The house whose silence was louder than any shouting.\n\nShe would go back. She knew that. The bag on the back seat was overnight, not permanent. But standing here, with the wind pulling at her coat and the whole country spread out below her like an answer to a question she had not yet learned to ask, she understood that going back and staying the same were not the same thing.\n\nShe got back in the car. She drove on. The road descended into a valley she had never visited, and the unfamiliarity of it felt, just for a moment, like freedom.`,
      'Grade 8-9': `The boat left at dawn, which is to say it left in the space between one version of the world and another. The harbour was still dark - oil-black water, the creak of ropes, the smell of diesel and salt and yesterday's catch. The boy stood on the deck with his bag between his feet and watched the quay recede and thought: I will remember this. He was seventeen. He was wrong about almost everything, but about this he was right.\n\nHe was leaving the island because the island had run out of things to teach him. This is not the same as saying he had learned everything - the island was old and deep and knew more than any seventeen-year-old could extract in a lifetime. But it had taught him what it could teach someone who stayed, and the rest of its lessons, paradoxically, could only be understood from a distance. His mother knew this. She had stood at the kitchen door that morning and held him by the shoulders and looked at him with an expression he would spend years learning to translate: pride and grief and the particular courage of a person who loves something enough to release it.\n\nThe crossing took four hours. He spent them on deck, watching the island diminish. It did not disappear all at once. First the houses went - the whitewashed cottages, the church, the school where he had been bored and cold and intermittently, unexpectedly happy. Then the harbour wall. Then the hill above the harbour, the one they called the Saddle, though it looked more like a shoulder. Finally, the whole island was just a smudge on the horizon, the colour of pencil lead, and then it was not even that. It was memory. The transition was so gradual he could not identify the moment it ceased to be a place and became an idea.\n\nThe mainland, when it arrived, was louder than he expected. Cars. Signs. People walking with a speed that suggested they had somewhere to be and were not confident of arriving. He stepped off the boat and onto a concrete quay that smelled of exhaust fumes and rain, and the first thing he noticed was that nobody noticed him. On the island, every arrival was an event. Here, he was simply one more body in a city of bodies, anonymous and unobserved, and the feeling was simultaneously terrifying and exhilarating - the loneliness of a person who has not yet learned to distinguish between freedom and isolation.\n\nHe would learn. It would take years, and the lessons would not always be kind, and there would be nights in small rented rooms when the silence pressed against the walls and he would close his eyes and hear the sea - not the real sea, which was miles away, but the remembered sea, which was closer, and louder, and colder. But he would learn that a journey does not change you in the moment of travelling. It changes you in the years that follow, slowly, the way water changes stone - not by force but by persistence, by arriving and departing and arriving again until the shape of what you were has become the shape of what you are.\n\nHe picked up his bag. He walked into the city. Behind him, the boat sounded its horn once - a low, resonant note that hung in the air like a question mark, or a full stop, or something that was neither, because the sentence it belonged to had not yet been written.`,
    },
    markScheme: [
      'Creates a compelling narrative with a clear sense of journey and transformation',
      'Uses language imaginatively with varied and well-chosen vocabulary',
      'Demonstrates structural control (pacing, withholding, shifts in focus or time)',
      'Engages the reader through sensory detail and emotional resonance',
      'Maintains a consistent and convincing narrative voice',
      'Shows technical accuracy with ambitious punctuation and varied syntax',
    ],
    examinerTips: [
      'Edexcel Paper 2 Q5 asks for imaginative writing - this can be narrative OR descriptive.',
      'The best responses explore internal change, not just external events.',
      'Use specific, concrete details to anchor abstract emotions.',
      'Control your pacing: do not rush the transformation. Let it emerge gradually.',
      'A strong ending should resonate beyond the page - leave the reader thinking.',
    ],
  },
  {
    id: 'edexcel-lit-macbeth-extract-1',
    board: 'Edexcel',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: "Macbeth - Extract-Based (Banquo's Ghost)",
    extract: `Avaunt, and quit my sight! Let the earth hide thee!\nThy bones are marrowless, thy blood is cold;\nThou hast no speculation in those eyes\nWhich thou dost glare with!\n\nPrithee, see there! Behold! Look! Lo!\nIf I stand here, I saw him.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 3 Scene 4",
    question:
      "Explore how Shakespeare presents Macbeth's guilt and fear in this extract and elsewhere in the play. You must refer to the context of the play in your answer. (40 marks - 15 AO1, 15 AO2, 10 AO3)",
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Macbeth as terrified and guilty after seeing Banquo\'s ghost at the banquet. He shouts "Avaunt, and quit my sight!" which means "go away," showing he is desperate to escape the vision. The exclamation marks show he is panicking. He describes the ghost\'s "bones" as "marrowless" and "blood" as "cold," which reminds us that Banquo is dead because Macbeth had him murdered. The word "speculation" means the ability to see or think, and Macbeth says the ghost\'s eyes have no intelligence in them, yet they still "glare" at him, which is frightening.

The series of commands "Behold! Look! Lo!" shows that Macbeth is losing control and trying to make other people see what he sees. But nobody else can see the ghost, which makes the other characters and the audience question his sanity.

Earlier in the play, Macbeth\'s guilt appears after he kills Duncan. He says "Will all great Neptune\'s ocean wash this blood clean from my hand?" which shows he feels his guilt can never be removed. The blood is a symbol of guilt that appears throughout the play. Before the murder, he also sees a floating dagger - "Is this a dagger which I see before me?" - which shows his guilty conscience was already creating hallucinations.

Shakespeare uses Macbeth\'s fear and guilt to show that crime does not go unpunished. A Jacobean audience would have believed that murdering a king was a sin against God because of the Divine Right of Kings. Macbeth\'s mental torment is his punishment, even before he is killed in battle at the end.`,
      'Grade 6-7': `Shakespeare dramatises guilt in this extract as a sensory assault that collapses the boundary between Macbeth\'s inner psychological state and external reality. The imperative "Avaunt, and quit my sight!" reveals a man attempting to command the supernatural with the same authority he uses as king, but the very need to issue such a command demonstrates his powerlessness - the ghost will not obey because it is a manifestation of Macbeth\'s conscience, not a subject of his kingdom.

The physical description of the ghost - "bones are marrowless," "blood is cold" - is significant because it forces Macbeth to confront the material reality of what he has done. Marrow and warm blood are signs of life, and their absence catalogues the vitality Macbeth has destroyed. The accusation that the ghost has "no speculation in those eyes" is psychologically complex: Macbeth denies the ghost the capacity for sight or thought, yet the glaring eyes torment him precisely because they seem to see and judge. This contradiction exposes the mechanism of guilt - the accuser is internal, projected outward as an external threat.

The staccato sequence "Behold! Look! Lo!" marks the complete disintegration of Macbeth\'s public composure. The monosyllabic, exclamatory commands compress language to its most basic level, suggesting a mind reduced to panic. This public breakdown is dramatically significant: the banquet scene represents Macbeth\'s attempt to consolidate power through social performance, and the ghost\'s appearance destroys the performance from within. Lady Macbeth\'s frantic attempts to explain his behaviour - "my lord is often thus" - only underscore the extent of the failure.

Shakespeare traces guilt as a progressive condition that intensifies with each crime. After Duncan\'s murder, guilt manifests as sensory disturbance: "Methought I heard a voice cry, \'Sleep no more!'" The insomnia that follows becomes both symptom and punishment - the man who murdered a sleeping king is denied sleep himself. The hallucinated dagger in Act 2 Scene 1 prefigures the ghost, establishing a pattern in which Macbeth\'s guilt takes visual, hallucinatory form. By Act 5, guilt has consumed Lady Macbeth entirely - her sleepwalking scene mirrors Macbeth\'s hallucinations but in a female register: where he shouts and commands, she whispers and scrubs.

Contextually, the ghost scene engages with Jacobean beliefs about the supernatural. James I, who wrote Daemonologie, believed firmly in the reality of spectral visitations, and the ambiguity of Banquo\'s ghost - visible to Macbeth but not to the other characters - would have been genuinely unsettling to an audience for whom the boundary between natural and supernatural was porous. Shakespeare uses this ambiguity to make guilt itself a form of haunting: whether the ghost is real or imagined, its effect on Macbeth is identical, because conscience cannot be distinguished from supernatural punishment.`,
      'Grade 8-9': `Shakespeare constructs guilt in this extract not as a moral emotion but as an epistemological crisis - a collapse of the categories through which Macbeth understands reality. The ghost of Banquo occupies an impossible ontological position: it is both present and absent, both seen and unseen, both dead and accusatory. Macbeth\'s command "Avaunt, and quit my sight!" attempts to reassert the boundary between the living and the dead that his own actions have dissolved, but the imperative mode - the language of kingship and authority - is precisely the wrong register for addressing a manifestation of conscience. You cannot command guilt to leave; you can only endure it.

The anatomical specificity of "bones are marrowless," "blood is cold" is a form of forensic denial - Macbeth catalogues the signs of death as though by demonstrating that the ghost is physically impossible, he can dismiss it. But this empirical argument collapses under the weight of its own evidence: the very details that prove Banquo cannot be present are the details that prove Macbeth killed him. The word "speculation" - meaning both sight and rational thought - is the extract\'s most loaded term. Macbeth claims the ghost lacks the capacity for intelligent observation, yet the "glare" contradicts him. This contradiction is the mechanism of guilt itself: the guilty mind projects judgement onto every surface, then protests that the judgement is unfounded, a recursive loop that Shakespeare dramatises through the oscillation between denial and terror.

The breakdown "Behold! Look! Lo!" represents the final evacuation of rhetorical control. These are not merely exclamations but performative speech acts: Macbeth is trying to make others see what he sees, to externalise his private torment and thereby validate it. The failure of this attempt - no one else can see the ghost - is the scene\'s most devastating moment, because it confirms that Macbeth\'s guilt is not only irremediable but incommunicable. He is imprisoned within a subjective reality that his subjects cannot share, and this isolation is the true punishment for regicide: the king who killed a king is cut off from the community of shared perception that kingship is supposed to guarantee.

Shakespeare architecturally embeds guilt into the play\'s dramatic structure. The dagger hallucination in Act 2 establishes the visual hallucination as Macbeth\'s characteristic guilt response; the voice crying "Sleep no more! Macbeth does murder sleep" translates guilt into an auditory register; the ghost scene combines both into a full sensory assault. This escalation traces the progressive colonisation of Macbeth\'s consciousness by the consequences of his actions. By Act 5, Macbeth has moved beyond guilt into something closer to affective numbness - "I have supped full with horrors; / Direness, familiar to my slaughter, / Cannot once start me" - but this is not resolution; it is the final stage of guilt\'s destruction, the point at which the self has been so thoroughly consumed that it can no longer register its own damage.

The contextual significance of the ghost scene extends beyond Jacobean supernaturalism. James I\'s Daemonologie provides one framework, but the scene also engages with classical precedents - the ghost at the feast echoes Seneca\'s Thyestes, a revenge tragedy in which the violated dead return to contaminate the living. Shakespeare synthesises these traditions to create a guilt that is simultaneously psychological, theological, and political. The public setting of the banquet is essential: Macbeth\'s guilt does not merely torment him privately but erupts into the political sphere, disrupting the feast that is supposed to cement his authority. The body politic mirrors the individual body - both are haunted, both are disintegrating, and both will ultimately collapse under the weight of the crime that inaugurated them.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents guilt and fear through language, imagery, and dramatic technique',
      'Explores the significance of specific words and phrases in the extract',
      'Discusses guilt and fear across the whole play with well-chosen references',
      'Considers relevant context (Jacobean beliefs, Divine Right, supernatural)',
      'Uses precisely embedded quotations to support a sustained argument',
      "Shows understanding of Shakespeare's dramatic methods and purposes",
    ],
    examinerTips: [
      'Edexcel awards 10 marks for context (AO3) - weave it throughout your answer, do not bolt it on.',
      'Consider the dramatic effect: how does this scene work on stage and for the audience?',
      'The best responses connect guilt to wider themes: power, kingship, the natural order.',
      'Use the extract as a springboard but give equal weight to the rest of the play.',
    ],
  },
  {
    id: 'edexcel-lit-macbeth-extract-2',
    board: 'Edexcel',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth - Extract-Based (The Witches)',
    extract: `When shall we three meet again\nIn thunder, lightning, or in rain?\n\nWhen the hurlyburly\'s done,\nWhen the battle\'s lost and won.\n\nFair is foul, and foul is fair:\nHover through the fog and filthy air.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 1 Scene 1",
    question:
      'Explore how Shakespeare presents the supernatural as a disruptive force in this extract and elsewhere in the play. You must refer to the context of the play in your answer. (40 marks)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents the supernatural as strange and threatening from the very beginning of the play. The witches ask "When shall we three meet again in thunder, lightning, or in rain?" which immediately creates a dark, stormy atmosphere. The fact that they meet in bad weather suggests they are connected to chaos and danger.

The phrase "When the hurlyburly\'s done, when the battle\'s lost and won" is confusing because a battle is usually either lost or won, not both. This oxymoron suggests the witches see the world differently from normal people and can blur the line between victory and defeat. The rhyming couplets give their speech a chant-like quality, which makes them sound like they are casting a spell.

The most important line is "Fair is foul, and foul is fair," which means that good things are bad and bad things are good. This sets up the theme of the whole play where nothing is as it seems. Macbeth later echoes this when he says "So foul and fair a day I have not seen," which shows the witches\' influence is already affecting him without him knowing.

Elsewhere in the play, the witches appear in Act 1 Scene 3 to give Macbeth the prophecies that start his ambition. They also appear in Act 4 with the apparitions that give him false confidence. The supernatural disrupts Macbeth\'s life by tempting him to commit murder and making him overconfident.

Shakespeare\'s audience would have believed witches were real. King James I was very interested in witchcraft and even wrote a book about it. By presenting the witches as disruptive, Shakespeare was reflecting the fears of his time and perhaps flattering the king.`,
      'Grade 6-7': `Shakespeare positions the supernatural as the play\'s opening gesture, ensuring that disruption precedes order and that the audience\'s first experience of Macbeth\'s world is one of instability. The witches\' scene is only thirteen lines long, but it establishes the moral and linguistic framework for everything that follows.

The trochaic tetrameter - "When shall WE three MEET aGAIN" - inverts the iambic pentameter that will characterise the human characters\' speech. This metrical disruption is not accidental: the witches speak in a rhythm that contradicts the play\'s dominant heartbeat, formally encoding their position outside the natural order. The rhyming couplets - "again/rain," "done/won," "fair/air" - give their language the quality of incantation, each rhyme clicking shut like a lock, sealing the spell.

The paradox "When the battle\'s lost and won" establishes equivocation as the witches\' defining mode. They inhabit a logic in which contradictions coexist, where defeat and victory are simultaneous rather than opposed. This is disruptive at the deepest level: it undermines the binary categories - good/evil, truth/falsehood, natural/unnatural - on which social order depends. "Fair is foul, and foul is fair" is the play\'s thesis statement, a chiasmus that formally mirrors the inversion it describes. The consonant alliteration of "foul" and "fair" binds opposites together phonetically, making them linguistically inseparable.

The setting - "thunder, lightning, or in rain" - and the closing "fog and filthy air" construct the supernatural as a meteorological phenomenon, a disruption of the natural world that reflects the moral disruption the witches will cause. The pathetic fallacy here is inverted: rather than nature reflecting human emotion, the weather reflects supernatural intention, suggesting that the witches have the power to disorder creation itself.

Shakespeare extends the supernatural\'s disruptive power through the play\'s other hallucinations and portents: the floating dagger, the voice that cries "sleep no more," Banquo\'s ghost, and the apparitions in Act 4. Each of these moments shares the witches\' characteristic ambiguity - they could be supernatural visitations or psychological projections, and Shakespeare never resolves this question. The ambiguity itself is the disruption: by refusing to confirm whether the supernatural is real or imagined, Shakespeare leaves both his characters and his audience in a state of interpretive instability.

Contextually, James I\'s Daemonologie (1597) provided a theological framework in which witchcraft was both real and deeply threatening to the state. The witches\' ability to influence a potential king would have resonated with an audience aware of the Gunpowder Plot and the fragility of political order. Shakespeare uses the supernatural not merely as a dramatic device but as a political metaphor: forces that cannot be controlled by rational authority will always threaten the structures that authority builds.`,
      'Grade 8-9': `Shakespeare opens Macbeth with the supernatural not to establish a plot but to dismantle an epistemology. Before a single human character appears, the witches have invalidated the audience\'s capacity to distinguish between opposites - fair and foul, lost and won, thunder and action. This is disruption at the foundational level: not the disruption of events but the disruption of the categories through which events are understood.

The formal properties of the witches\' speech are themselves agents of disruption. The trochaic tetrameter - stressed-unstressed, the inverse of the iambic pentameter that Renaissance drama coded as the rhythm of rational, civilised speech - creates a falling rhythm that linguistically enacts descent. Where iambic pentameter rises (da-DUM), the witches\' metre falls (DUM-da), and this prosodic inversion mirrors the moral inversion their words describe. The rhyming couplets produce a paradoxical effect: they impose a rigid acoustic order on content that is semantically chaotic, creating a form of language in which sound and sense are in perpetual tension. This is incantation - language that does not describe reality but seeks to alter it - and its presence at the play\'s opening establishes that the world of Macbeth is one in which words have material power.

"Fair is foul, and foul is fair" is the play\'s most analysed line, but its formal properties deserve closer attention than its semantic content typically receives. The chiasmus - AB/BA - creates a closed linguistic loop, a structure without exit, and this enclosure formally represents the trap that the witches\' logic constitutes: once fair and foul are interchangeable, moral reasoning becomes impossible because there is no stable ground from which to evaluate action. The alliterative binding of "fair" and "foul" makes the words phonetically adjacent, and this acoustic proximity performs the conceptual collapse the line describes. When Macbeth later echoes the phrase - "So foul and fair a day I have not seen" - the repetition demonstrates that the witches\' language has infiltrated his consciousness before they have even met him. The supernatural\'s disruption is not confined to direct interaction but operates through a contagion of speech, a viral linguistics that spreads through echo and repetition.

The paradox "lost and won" deserves particular attention because it anticipates the play\'s treatment of every subsequent binary. Macbeth\'s victories are defeats; his kingship is his destruction; his security is his vulnerability. The witches\' equivocal language does not merely predict these paradoxes but produces them: the prophecies in Act 1 Scene 3 ("Thane of Cawdor," "King hereafter") are simultaneously true and misleading, offering Macbeth accurate information that leads to catastrophic conclusions. The apparitions in Act 4 repeat this pattern with refined cruelty: "none of woman born" and "until Great Birnam Wood" are literally true but functionally false, and their equivocation destroys Macbeth more effectively than any direct assault because they weaponise the gap between language and meaning.

Shakespeare\'s engagement with the supernatural is inseparable from its political context. James I\'s dual identity as author of Daemonologie and patron of Shakespeare\'s company creates a specific dynamic: the play simultaneously validates the king\'s beliefs about witchcraft and dramatises the vulnerability of kingship to supernatural manipulation. But Shakespeare\'s treatment is more subtle than royal flattery. By making the witches\' power operate primarily through language - through prophecy, equivocation, and the dissolution of semantic categories - he transforms the supernatural from a folk belief into an investigation of how meaning itself can be corrupted. The witches are dangerous not because they command storms or conjure apparitions but because they demonstrate that language, the instrument through which political and moral order is maintained, can be turned against itself. In this reading, the supernatural is not an external force that disrupts a stable world but a revelation that stability was always an illusion, maintained only by the fragile consensus that fair means fair and foul means foul.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents the supernatural through language, form, and dramatic structure',
      'Explores the effects of specific words, rhythm, and rhetorical devices in the extract',
      'Discusses the supernatural across the whole play with well-selected references',
      'Considers relevant context (Jacobean attitudes to witchcraft, James I, equivocation)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised response to the idea of disruption',
    ],
    examinerTips: [
      "Consider the witches' language as a dramatic technique, not just as speech.",
      'The best responses connect the supernatural to themes of power, language, and order.',
      'Context about James I and witchcraft should deepen your analysis, not sit separately.',
      'Do not just describe what happens - analyse how and why Shakespeare constructs meaning.',
    ],
  },
  {
    id: 'edexcel-lit-acc-transform-1',
    board: 'Edexcel',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: "A Christmas Carol - Scrooge's Transformation",
    extract: `He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world. Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good, at which some people did not have their fill of laughter in the outset.`,
    extractSource: "Written in the style of Charles Dickens's A Christmas Carol, Stave 5",
    question:
      "Explore how Dickens presents Scrooge's transformation in this extract and in the novella as a whole. (40 marks)",
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens presents Scrooge as completely changed from the cold, selfish man he was at the beginning. He is now described as "as good a friend, as good a master, and as good a man" which shows he has become kind in every part of his life - personally, professionally, and morally. The repetition of the word "good" six times in the first sentence emphasises how thoroughly he has changed.

When people laugh at his transformation, Scrooge does not care because "he was wise enough to know" that good changes are always mocked at first. This shows he has not only become kind but also wise. The old Scrooge would have been angry or dismissive, but the new Scrooge is patient and understanding.

At the beginning of the novella, Scrooge is described as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner." The list of horrible adjectives shows how mean and greedy he was. He refuses to donate to charity, saying the poor should go to the workhouses, and he treats his clerk Bob Cratchit very badly, making him work in a freezing office.

The three ghosts cause his transformation. The Ghost of Christmas Past shows him how he lost the ability to love, especially when Belle leaves him because he cares more about money. The Ghost of Christmas Present shows him the Cratchit family, especially Tiny Tim, who is ill but happy. The Ghost of Christmas Yet to Come shows him his own lonely death, which finally terrifies him into changing.

Dickens wrote A Christmas Carol to make wealthy Victorians care about the poor. By showing that even someone as mean as Scrooge can change, Dickens is saying that everyone has the ability to become generous and compassionate. The transformation is his message of hope for Victorian society.`,
      'Grade 6-7': `Dickens constructs Scrooge\'s transformation in this extract as comprehensive, public, and enduring - a deliberate rebuttal of the isolation and selfishness that defined him in Stave 1. The tricolon "as good a friend, as good a master, and as good a man" maps transformation onto three domains - social, economic, and moral - suggesting that genuine change must permeate every aspect of existence. The repetition of "good" - six times in a single sentence - is stylistically unusual for Dickens, whose prose typically favours variety, and its deliberate insistence creates an incantatory effect that mirrors the supernatural transformation that produced it.

The detail about people laughing at the "alteration" is significant because it acknowledges the social resistance to moral change. Scrooge\'s response - "he let them laugh, and little heeded them" - demonstrates a new emotional security: the man who was once so armoured against human connection that he dismissed Christmas as "Humbug!" now possesses the equanimity to absorb mockery without retreating. The narrative voice\'s observation that "nothing ever happened on this globe, for good, at which some people did not have their fill of laughter" extends Scrooge\'s wisdom to a universal principle, positioning his transformation as part of a pattern of human progress that is always initially resisted.

Dickens structures the novella as a process of progressive emotional excavation. The Ghost of Christmas Past does not merely show Scrooge his history but reconnects him with the feelings he has suppressed. The memory of his lonely childhood in the boarding school - and his subsequent tears - demonstrates that Scrooge\'s cruelty is a defence mechanism against vulnerability. Belle\'s departure provides the pivotal moment: she tells him that "a golden idol has displaced me," identifying avarice as a substitute for love. The Ghost of Christmas Present confronts Scrooge with the present consequences of his philosophy through the Cratchit family, whose warmth and generosity despite poverty offers a direct contrast to Scrooge\'s wealth and misery. Tiny Tim\'s potential death - "I see a vacant seat... and a crutch without an owner" - translates Scrooge\'s economic callousness into a specific, personal consequence.

The Ghost of Christmas Yet to Come completes the process through fear rather than sentiment. The image of Scrooge\'s unmourned death - his possessions stolen, his name unremembered - confronts him with the logical endpoint of his philosophy: absolute isolation. Dickens ensures that transformation arrives not through rational persuasion but through emotional shock, a pattern consistent with his belief that social reform required a change of heart, not just a change of policy.

Contextually, the novella was written in 1843, a period of acute social crisis. The 1842 Mines Report and the Poor Law Amendment Act had exposed the conditions of the working poor, and Dickens - who had experienced childhood poverty in the blacking factory - used the novella as an accessible vehicle for social criticism. Scrooge\'s transformation dramatises the possibility that the wealthy could be moved to generosity, a message directed specifically at the Victorian middle class whose charitable impulse Dickens sought to activate.`,
      'Grade 8-9': `Dickens constructs Scrooge\'s transformation in this extract with a rhetorical excess that is itself part of the novella\'s argument. The sixfold repetition of "good" in a single sentence is not carelessness but strategy: it overwhelms the reader\'s critical faculties in precisely the way that Scrooge\'s transformation overwhelms his former self, substituting abundance for the parsimony that characterised both his language and his life. The tricolon "as good a friend, as good a master, and as good a man" maps moral reformation onto the three spheres of Victorian male identity - the personal, the economic, and the ethical - and the escalating significance of each term (from "friend" to "master" to "man") traces a movement from the relational to the essential, from what Scrooge does to what he is.

The passage\'s most sophisticated moment is its treatment of social resistance. "Some people laughed to see the alteration in him, but he let them laugh, and little heeded them" acknowledges that transformation provokes scepticism, and Scrooge\'s indifference to mockery demonstrates a security that his former self - obsessively defensive, dismissive of sentiment - could never have achieved. The narrative voice\'s generalisation - "nothing ever happened on this globe, for good, at which some people did not have their fill of laughter" - performs a characteristic Dickensian manoeuvre: it extracts a universal principle from a particular instance, elevating Scrooge\'s personal redemption into a model of human progress. The phrase "for good" operates as a double entendre - both "permanently" and "for the benefit of" - and this linguistic richness is itself a marker of the transformed Scrooge, whose earlier speech was characterised by the impoverished monosyllable "Humbug!"

Dickens designs the novella\'s structure as a systematic dismantling of Scrooge\'s psychological defences. Stave 1 establishes those defences with almost clinical precision: the catalogue of predatory adjectives - "squeezing, wrenching, grasping, scraping, clutching, covetous" - performs a verbal inventory of avarice, each participle describing a different physical action of acquisition. This language constructs Scrooge as a mechanism rather than a person, a point reinforced by the famous description of him as "solitary as an oyster" - a simile that encodes both isolation and the hard shell that protects it. Marley\'s ghost initiates the process of cracking that shell, and the subsequent visitations work through different emotional registers: nostalgia and loss (Past), empathy and shame (Present), terror (Yet to Come).

The Ghost of Christmas Past operates through the recovery of suppressed affect. Young Scrooge at the boarding school is the novella\'s emotional key: the boy weeping in an empty room establishes that Scrooge\'s cruelty is a response to abandonment, a defensive structure built around a wound. Belle\'s departure crystallises the mechanism - she identifies that "another idol has displaced me," naming money as a substitute attachment object - and the older Scrooge\'s anguished response ("Remove me! I cannot bear it!") demonstrates that the feelings he has spent decades suppressing remain operative. This is Dickens\'s psychological insight: transformation is not the creation of new feelings but the reactivation of feelings that were always present.

The Ghost of Christmas Present shifts the register from personal memory to social conscience. The Cratchit family functions as an embodied argument against Scrooge\'s Malthusian philosophy - his earlier question "Are there no prisons? Are there no workhouses?" is answered by the spectacle of a family whose poverty is not a moral failing but a structural consequence of the system Scrooge profits from. Tiny Tim is Dickens\'s most calculated emotional weapon: a dying child whose death is directly attributable to the economic conditions that Scrooge perpetuates. The allegorical figures of Ignorance and Want, hidden beneath the Ghost\'s robes, universalise this argument - they are not the Cratchits\' children but society\'s, and the warning "Beware them both" directs the reader\'s attention from individual charity to systemic reform.

The novella\'s power as social criticism lies in its formal choice: the fairy tale. By casting economic injustice as a supernatural narrative with a redemptive arc, Dickens makes social reform emotionally accessible in a way that parliamentary reports could not. The transformation is deliberately excessive - Scrooge does not merely become adequate but becomes the best friend, master, and man in the city - because Dickens understood that political persuasion requires not just intellectual agreement but emotional conversion. The novella does not argue for the welfare state; it creates the feeling that makes the welfare state imaginable.`,
    },
    markScheme: [
      "Analyses how Dickens presents Scrooge's transformation through language and narrative structure",
      'Explores specific words, phrases, and rhetorical techniques in the extract',
      'Traces the transformation across all five staves of the novella',
      "Considers relevant context (Victorian poverty, Dickens's social purpose, the Poor Law)",
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised response to the nature and purpose of transformation',
    ],
    examinerTips: [
      'The transformation is a process, not an event - trace how it develops across the whole novella.',
      "Connect Scrooge's personal change to Dickens's wider social message.",
      'The ghosts are not just characters - they are structural devices. Analyse what each one achieves.',
      'The best answers consider why Dickens chose this form (a fairy tale / ghost story) for a social message.',
    ],
  },
  {
    id: 'edexcel-lit-acc-social-1',
    board: 'Edexcel',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol - Social Criticism',
    extract: `"Are there no prisons?" asked Scrooge.\n"Plenty of prisons," said the gentleman.\n"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"\n"They are. Still," returned the gentleman, "I wish I could say they were not."\n"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.\n"Both very busy, sir."\n"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I\'m very glad to hear it."`,
    extractSource: "Written in the style of Charles Dickens's A Christmas Carol, Stave 1",
    question:
      'Explore how Dickens uses the character of Scrooge to present ideas about social responsibility in this extract and in the novella as a whole. (40 marks)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens shows Scrooge as someone who does not care about poor people at all. When asked to give money to charity, Scrooge asks "Are there no prisons?" and "And the Union workhouses?" This shows he thinks the poor should be dealt with by the government through harsh institutions, not by individual kindness. He calls prisons and the treadmill part of a "useful course," which shows he thinks punishing poor people is a good thing.

The word "demanded" is used instead of "asked," which shows Scrooge is aggressive and impatient. When the charity collector says he wishes workhouses did not exist, Scrooge ignores his feelings completely and says he is "very glad to hear" they are still operating. This makes Scrooge seem cold and heartless.

Throughout the novella, Dickens criticises this attitude. When the Ghost of Christmas Present shows Scrooge the Cratchit family, he sees that Bob Cratchit is poor because Scrooge pays him very little, yet the family is loving and happy despite their poverty. Tiny Tim is ill and may die, which shows that Scrooge\'s meanness has real consequences for real people.

The Ghost also reveals two children called Ignorance and Want hiding under his robes, which represent the problems in society. The Ghost warns Scrooge to "beware them both" but especially Ignorance. This is Dickens telling the reader that society\'s biggest problem is not poverty itself but the fact that wealthy people choose to ignore it.

Dickens wrote the novella in 1843 when many people in England were very poor. The Poor Law of 1834 had created workhouses where conditions were deliberately harsh to discourage people from asking for help. Dickens hated this system and used Scrooge to show how wrong it was to blame poor people for being poor.`,
      'Grade 6-7': `Dickens constructs this exchange as a dialogue in which Scrooge\'s moral bankruptcy is exposed through his own words. The stichomythic structure - rapid alternation between speakers - gives the scene a forensic quality, as though Scrooge is being cross-examined and convicting himself with every answer. His catalogue of institutions - "prisons," "Union workhouses," "the Treadmill," "the Poor Law" - reveals a mind that has outsourced compassion to bureaucracy, converting the suffering of individuals into administrative categories.

The word "useful" is the extract\'s most revealing adjective. Scrooge describes the punitive machinery of the Poor Law as a "useful course," a phrase that exposes the utilitarian calculus underlying his worldview: the poor are a problem to be managed, not people to be helped. The sarcastic politeness of "I\'m very glad to hear it" adds cruelty to indifference - Scrooge is not merely uncharitable but actively pleased that systems of punishment are functioning. The reporting verb "demanded" positions Scrooge as interrogator rather than conversationalist, his language performing the power imbalance that the scene describes.

Dickens uses the entire novella to systematically dismantle the philosophy this extract articulates. Each ghost counters a specific aspect of Scrooge\'s worldview. The Ghost of Christmas Past shows that Scrooge was not always like this - his empathy was destroyed by specific experiences of abandonment and loss, suggesting that callousness is made, not innate. The Ghost of Christmas Present offers the Cratchit family as a living rebuttal to Scrooge\'s dismissal: their poverty is not a result of laziness but of exploitation, and their dignity in the face of hardship challenges the assumption that the poor deserve their suffering. The allegorical children, Ignorance and Want, escalate the critique from the personal to the systemic - they are not Scrooge\'s creation but society\'s, and the Spirit\'s warning to "beware them both, and all of their degree, but most of all beware this boy" identifies wilful ignorance as more dangerous than poverty itself.

The Ghost of Christmas Yet to Come confronts Scrooge with the ultimate consequence of his philosophy: a death so lonely that his possessions are stolen and his corpse lies unwatched. The parallel with Tiny Tim\'s death - one mourned extravagantly, the other not at all - demonstrates that the value society places on a life is directly related to the love invested in it, not the wealth accumulated.

Contextually, Dickens was responding to the 1834 Poor Law Amendment Act, which created a system of workhouses designed to be so unpleasant that only the truly desperate would enter them. The principle of "less eligibility" - that workhouse conditions should be worse than the worst available employment - was precisely the kind of institutional cruelty that Scrooge endorses. Dickens had also read the Parliamentary Blue Books on child labour and had visited the ragged schools of Field Lane, experiences that fuelled the novella\'s anger. By making the reader empathise with the Cratchits and despise Scrooge, Dickens converts abstract social criticism into personal emotional engagement.`,
      'Grade 8-9': `Dickens engineers this exchange as a masterclass in dramatic self-incrimination. Scrooge\'s interrogative mode - "Are there no prisons?" "And the Union workhouses?" "The Treadmill and the Poor Law are in full vigour, then?" - catalogues the machinery of institutionalised cruelty with the satisfied thoroughness of an investor checking his portfolio. Each question is rhetorical in the truest sense: Scrooge already knows the answers and asks not for information but for confirmation that the systems protecting him from moral obligation are still operational. The escalating specificity - from "prisons" (general) to "Union workhouses" (specific legislation) to "the Treadmill" (specific punishment) - traces the Victorian Poor Law\'s punitive logic to its literal endpoint: the mechanical degradation of human bodies.

The adjective "useful" is the extract\'s ideological fulcrum. It performs the linguistic operation that makes institutional cruelty possible: the transformation of human suffering into administrative efficiency. By describing the Poor Law as a "useful course," Scrooge adopts the discourse of political economy - specifically, the Malthusian argument that poverty is a natural check on population growth and should not be alleviated by charity. Dickens despised this position, having attacked it directly in Oliver Twist and his journalism, and he constructs Scrooge as its dramatic embodiment: a character who has so thoroughly internalised the language of utility that he can no longer perceive the humanity it erases.

The formal structure of the exchange - its stichomythia, its restrained civility, its veneer of reasonable discourse - is itself part of Dickens\'s critique. The charity collector\'s quiet interjection - "I wish I could say they were not" - introduces a note of moral anguish that Scrooge entirely fails to register, and this failure of perception is more damning than active cruelty. Scrooge does not oppose charity because he has considered the arguments and found them wanting; he opposes it because the suffering of others is simply invisible to him, screened by the institutional apparatus he catalogues with such satisfaction.

Dickens structures the novella so that each supernatural visitation removes one layer of this screen. The Ghost of Christmas Past establishes that Scrooge\'s callousness is a learned behaviour - the lonely boy at the boarding school possessed empathy, and its destruction was a process, not a given. This is politically significant: if callousness is constructed, it can be deconstructed, and the novella\'s redemptive arc is therefore an argument for the possibility of social reform. The Ghost of Christmas Present delivers the novella\'s most direct social criticism through the allegorical children, Ignorance and Want. These figures operate at a different register from the rest of the text - they are not characters but concepts made flesh, and their appearance beneath the Ghost\'s robes suggests that the abundance of Christmas (and, by extension, of a wealthy society) conceals rather than eliminates poverty. The Ghost\'s instruction to "beware this boy" - Ignorance - echoes Dickens\'s conviction that social reform requires not just economic redistribution but a transformation of consciousness: the wealthy must first learn to see the poor as human before they will act to help them.

The novella\'s choice of form - the Christmas ghost story - is inseparable from its social purpose. Dickens rejected the pamphlet he had originally planned (to be titled "An Appeal to the People of England on Behalf of the Poor Man\'s Child") in favour of fiction because he understood that emotional persuasion operates differently from rational argument. The ghost story permits what the essay cannot: the literal haunting of the comfortable by the consequences of their comfort. Scrooge\'s transformation is not a policy proposal but a moral demonstration, and its power lies in the reader\'s identification with the process - not merely observing change but imaginatively experiencing it. By making social responsibility a matter of feeling rather than argument, Dickens created a text that has influenced charitable behaviour for nearly two centuries, outlasting every parliamentary report that addressed the same conditions. The novella is itself a haunting: it visits the reader, shows them what they would prefer not to see, and demands a response.`,
    },
    markScheme: [
      'Analyses how Dickens uses Scrooge to criticise Victorian attitudes to the poor',
      'Explores specific language choices and their effects in the extract',
      'Discusses social responsibility across the whole novella',
      "Considers relevant context (the Poor Law, Malthusianism, Victorian poverty, Dickens's purpose)",
      'Uses well-integrated quotations to support a sustained argument',
      'Develops a conceptualised response linking character to social criticism',
    ],
    examinerTips: [
      "Always connect Scrooge's attitudes to their real-world Victorian context.",
      'The best responses treat the novella as a deliberate social intervention, not just a story.',
      "Analyse Dickens's methods: why a ghost story? Why a fairy-tale structure?",
      'Consider the role of each ghost in challenging the philosophy Scrooge expresses here.',
    ],
  },
  {
    id: 'edexcel-lit-poetry-comp-1',
    board: 'Edexcel',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Anthology Comparison - Relationships',
    extract: `Poem A - "Sonnet 43" by Elizabeth Barrett Browning (extract):\n"How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height\nMy soul can reach, when feeling out of sight\nFor the ends of being and ideal grace.\nI love thee to the level of every day\'s\nMost quiet need, by sun and candle-light."\n\nCompare with one other poem from the Relationships anthology.`,
    extractSource: 'Poetry anthology extract',
    question:
      'Compare how the poets present intense feelings of love in "Sonnet 43" and one other poem from the Relationships anthology. (20 marks)',
    marks: 20,
    timing: '35 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Sonnet 43" by Elizabeth Barrett Browning and "Valentine" by Carol Ann Duffy present intense feelings of love, but they do so in very different ways.

In "Sonnet 43," Browning uses the Petrarchan sonnet form to express a love that is grand and spiritual. The opening question "How do I love thee?" introduces the idea that her love is so great she needs to "count the ways." She uses spatial metaphors - "depth and breadth and height" - to show that her love fills every dimension. The phrase "when feeling out of sight / For the ends of being" suggests her love extends beyond the physical world into something spiritual. She also shows that love is part of everyday life - "by sun and candle-light" - meaning she loves constantly, day and night.

In "Valentine," Duffy takes a very different approach. Instead of traditional romantic imagery, she offers an onion as a symbol of love. "I give you an onion" is surprising and unromantic, which immediately challenges the reader\'s expectations. The onion\'s layers represent the stages of a relationship, and the line "it will blind you with tears like a lover" suggests that love causes pain as well as joy. The possessive tone at the end - "its scent will cling to your knife" - is almost threatening, showing that love leaves a permanent mark.

Both poets present love as all-consuming, but Browning presents it as entirely positive and uplifting, while Duffy acknowledges its darker, more possessive aspects. Browning uses traditional poetic form and language, while Duffy deliberately rejects convention to show that real love is complicated.`,
      'Grade 6-7': `Browning and Duffy both explore love as a force that overwhelms conventional expression, but their formal strategies for handling this inexpressibility are diametrically opposed: Browning expands into abstraction, Duffy contracts into the physical.

Browning\'s sonnet opens with the rhetorical question "How do I love thee?" - a question that the poem simultaneously attempts and fails to answer, since the implied premise is that love exceeds the capacity of language. The subsequent spatial metaphors - "depth and breadth and height" - attempt to quantify the unquantifiable, using the vocabulary of measurement to describe an emotion that resists measurement. The tricolon creates a sense of three-dimensional fullness, as though love occupies all available space. The phrase "when feeling out of sight / For the ends of being and ideal grace" elevates love to a spiritual plane; the enjambment across "sight / For" creates a reaching quality that formally enacts the soul\'s extension towards the transcendent. Yet Browning anchors this abstraction in the quotidian - "to the level of every day\'s / Most quiet need, by sun and candle-light" - insisting that intense love manifests not only in grand gestures but in daily constancy.

Duffy\'s "Valentine" refuses the Petrarchan tradition that Browning inhabits. The blunt declaration "I give you an onion" is a deliberate affront to poetic convention - the absence of a verb of feeling ("I love") and the substitution of a domestic object for a symbol of romance performs the poem\'s central argument: that authentic love requires honest language, not inherited cliche. The onion as extended metaphor generates meanings that the traditional rose cannot: its layers suggest complexity and gradual revelation; the tears it produces acknowledge that love involves pain; its lingering scent implies that love persists whether or not it is wanted. The line "its scent will cling to your knife" introduces an unsettling possessiveness - the imagery of clinging and cutting suggests that love, once given, cannot be cleanly removed.

The formal contrast is revealing. Browning\'s Petrarchan sonnet - fourteen lines, ABBA rhyme scheme, iambic pentameter - uses inherited form to contain overwhelming emotion, the strict structure functioning as a vessel for feeling that might otherwise become formless. Duffy\'s free verse, with its irregular line lengths and absence of rhyme, formally rejects containment, suggesting that modern love requires a form as unpredictable as the emotion itself. Both poems, however, share a quality of intensity that transcends their formal differences: Browning\'s repetitive anaphora ("I love thee... I love thee") and Duffy\'s imperative repetitions ("Take it" / "I give you an onion") both use rhetorical insistence to convey the urgency of love that demands expression.`,
      'Grade 8-9': `Browning and Duffy occupy positions at opposite ends of a tradition that both poets simultaneously inhabit and interrogate: the attempt to render the intensity of love in language that is adequate to the experience. Browning works within the Petrarchan sonnet form - the originary structure of Western love poetry - and pushes its conventions to their limits; Duffy explodes those conventions from the outside, substituting the domestic for the sublime. Yet both arrive, by radically different routes, at the same paradox: that the most intense feelings are the ones that language is least equipped to express.

Browning\'s opening gambit - "How do I love thee? Let me count the ways" - establishes a mathematical metaphor that the poem immediately overwhelms. The verb "count" promises enumeration, but the spatial abstractions that follow - "depth and breadth and height" - refuse to be counted because they describe dimensions, not units. This is the poem\'s formal engine: the tension between the finite structure of the sonnet (fourteen lines, a countable form) and the infinite feeling it attempts to contain. The enjambment "when feeling out of sight / For the ends of being and ideal grace" performs the soul\'s reaching beyond its own boundaries - "out of sight" is both literal (beyond vision) and figurative (beyond comprehension) - and the phrase "ideal grace" introduces a Platonic dimension, suggesting that love participates in a transcendent form that earthly expression can only approximate. The subsequent descent to the quotidian - "every day\'s / Most quiet need, by sun and candle-light" - is not a diminishment but a completion: Browning argues that love\'s intensity is measured not by its most exalted moments but by its constant, unremarkable presence, the way it inhabits "quiet need" as fully as it inhabits "the ends of being."

Duffy\'s "Valentine" begins by refusing the terms of the tradition Browning exemplifies. "Not a red rose or a satin heart" - the negatives arrive before the gift, establishing the poem\'s method of definition by exclusion. The onion is presented not as a symbol of love but as love itself - "I give you an onion" - and the directness of this declaration contains an implicit critique of the Petrarchan tradition\'s tendency to substitute rhetoric for honesty. The onion\'s concentric layers function as a structural metaphor for the poem\'s argument: love is not a surface phenomenon but something that must be opened, layer by layer, and the process of revelation inevitably produces tears. The line "It will blind you with tears / like a lover" uses the simile to startling effect - the onion does what a lover does, and the equation of the inanimate with the intimate creates a defamiliarisation that forces the reader to re-examine the nature of romantic feeling.

The poems\' treatment of permanence reveals their deepest divergence. Browning locates love\'s permanence in the spiritual - "I shall but love thee better after death" - employing the future tense to project love beyond mortality into the eternal. This is consistent with the Victorian equation of romantic love with religious devotion, and the poem\'s sonnet form, with its centuries-old lineage, formally embodies the endurance it describes. Duffy\'s permanence is more troubling: "Its scent will cling to your knife" transforms persistence into something closer to contamination, the verb "cling" carrying connotations of desperate attachment, while "knife" introduces violence into a love poem\'s closing image. Where Browning\'s love transcends the body, Duffy\'s inhabits it with an insistence that is simultaneously passionate and threatening, and the ambiguity of this final image - is it a promise or a warning? - captures the complexity of modern love in a way that the Petrarchan tradition\'s certainties cannot accommodate.`,
    },
    markScheme: [
      'Compares how both poets present intense love through language, form, and imagery',
      'Analyses specific poetic techniques and their effects in both poems',
      'Maintains a comparative structure throughout',
      'Considers relevant contextual factors for both poets',
      'Uses well-integrated quotations from both poems',
      'Develops a sustained personal interpretation of both texts',
    ],
    examinerTips: [
      'Structure comparatively - do not write about one poem then the other.',
      'Compare methods, not just themes: how does form shape the expression of love?',
      'The best responses find unexpected connections as well as obvious differences.',
      'For Edexcel, 20 marks means a focused, concise response - do not overwrite.',
    ],
  },
  {
    id: 'edexcel-lit-unseen-1',
    board: 'Edexcel',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `First Snow\n\nThe garden has forgotten how to be itself.\nEvery blade, every branch, every bin lid\nis someone else - anonymous and clean.\n\nThe children have run out without their coats\nbecause joy is urgent and cannot wait\nfor zips.\n\nA blackbird stands on the white lawn\nlike a full stop on an empty page,\nthe only word the morning needs.`,
    extractSource: 'Original poem written for this exercise',
    question:
      'In "First Snow," how does the poet use language and structure to present the experience of snow? (20 marks)',
    marks: 20,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet presents snow as something that transforms the world and brings excitement. The opening line "The garden has forgotten how to be itself" uses personification to show that the snow has changed everything so much that the garden is unrecognisable. The listing of "every blade, every branch, every bin lid" uses repetition of "every" to show that the snow covers absolutely everything.

The phrase "anonymous and clean" describes how the snow makes everything the same - you cannot tell what is underneath. The word "anonymous" means without a name or identity, which shows how snow hides the familiar world.

The second stanza shows the excitement snow causes. The children "run out without their coats" because they are so excited. The phrase "joy is urgent and cannot wait for zips" is a lovely image that personifies joy as something that rushes and will not slow down. The short word "zips" on its own line creates a sudden stop that mirrors the children\'s impatience.

The final image of the blackbird on the white lawn "like a full stop on an empty page" is a simile comparing the snowy garden to a blank page. This suggests the snow has erased everything and the blackbird is the only mark on it. The phrase "the only word the morning needs" suggests that sometimes one simple thing is enough, and beauty can be found in simplicity.`,
      'Grade 6-7': `The poet presents snow as an act of erasure and renewal, using imagery that connects the natural world to the act of writing. The opening personification - "The garden has forgotten how to be itself" - attributes a cognitive process to the landscape, suggesting that snow does not merely cover the garden but alters its identity. The verb "forgotten" implies that the garden\'s true nature still exists beneath the surface but is temporarily inaccessible, a loss that is presented as liberating rather than threatening.

The tricolon "every blade, every branch, every bin lid" uses anaphoric repetition to create a catalogue that moves from the natural to the domestic. The inclusion of the mundane "bin lid" alongside the poetic "blade" and "branch" insists that snow\'s transformative power is democratic - it beautifies the ugly as readily as the already beautiful. The description "anonymous and clean" completes the transformation: the adjective "anonymous" strips objects of their individual identity, while "clean" carries connotations of purity and fresh starts.

The second stanza shifts from observation to action. The children running out "without their coats" is an image of physical abandon that contrasts with the stillness of the first stanza. The enjambed assertion that "joy is urgent and cannot wait / for zips" is the poem\'s most formally inventive moment: the line break after "wait" creates a pause that mimics the impatience it describes, and the isolation of "for zips" on its own line - a single monosyllabic word after an abstract philosophical claim - produces a bathetic drop from the sublime to the practical that is simultaneously comic and profound.

The closing stanza achieves resolution through the extended simile of blackbird as "full stop on an empty page." This image performs a double function: it describes a visual scene (black bird on white ground) while simultaneously constructing the poem as a self-referential act. If the snow is an "empty page," then the poem we are reading is itself an attempt to write on that blankness, and the blackbird - "the only word the morning needs" - suggests that the best response to beauty is not elaboration but restraint. The poem practises what it preaches: at only nine lines, it is itself a minimal mark on the page, a "full stop" that says everything by saying very little.`,
      'Grade 8-9': `The poem constructs snow as an epistemological event - not merely a meteorological phenomenon but a transformation in the conditions of knowing. The opening line\'s personification, "The garden has forgotten how to be itself," attributes to the landscape a form of identity crisis that is also, paradoxically, a liberation. The verb "forgotten" is precisely calibrated: it implies neither permanent loss nor violent erasure but a temporary suspension of the garden\'s accumulated identity - its weeds, its neglect, its familiarity - beneath a surface of undifferentiated white. The anaphoric catalogue "every blade, every branch, every bin lid" traces a descending hierarchy from the pastoral to the prosaic, and the inclusion of "bin lid" is the poem\'s most deliberate choice: it insists that snow\'s beauty is indiscriminate, transforming waste into wonder with the same equanimity it brings to grass and trees. The adjective "anonymous" is loaded - in an age of surveillance and data, anonymity is itself a form of freedom, and the snow grants the garden the privacy of blankness.

The second stanza performs a tonal shift from contemplation to urgency through a single, decisive image. The children who "run out without their coats" embody a pre-rational response to beauty - their joy bypasses the adult mechanisms of caution and preparation. The enjambment "cannot wait / for zips" is a formal tour de force: the abstract noun "joy" is given the kinetic properties of a physical force, and the line break enacts the very impatience it describes, the reader\'s eye leaping from "wait" to the bathos of "zips" with a velocity that mirrors the children\'s rush. The monosyllable "zips" - placed alone, isolated by white space - is simultaneously a concrete noun and an onomatopoeic verb, its sound replicating the sharp, quick action of a zip that is not, in this case, being used. The stanza\'s argument - that authentic response to beauty is incompatible with practical preparation - carries implications beyond the literal: it suggests that the impulse to organise, categorise, and prepare (the adult impulse, the analytical impulse) is antithetical to the experience it seeks to preserve.

The final stanza resolves the poem through the governing metaphor that has been implicit from the opening: snow as blank page. The blackbird standing "like a full stop on an empty page" completes the transformation of landscape into text, and the simile operates at several levels simultaneously. Visually, it captures the stark contrast of black on white with photographic precision. Grammatically, a full stop is a mark of completion, and by identifying the blackbird as such, the poet suggests that the snowy morning is a finished sentence - complete in itself, requiring no addition. The appositive phrase "the only word the morning needs" extends the metaphor into a philosophy of sufficiency: in the presence of beauty, less is more, and the attempt to describe exhaustively is a form of desecration. The poem enacts this philosophy through its own brevity - nine lines, three stanzas, no excess - making its form an argument for the aesthetic restraint its content advocates. The reader is left with the image of the blackbird: still, precise, and sufficient, a mark on the morning\'s blankness that says everything by being exactly, and only, itself.`,
    },
    markScheme: [
      'Analyses how the poet uses language to present the experience of snow',
      'Explores the effects of specific images, similes, and personification',
      'Comments on structural choices (stanza organisation, enjambment, line isolation)',
      'Uses well-selected quotations embedded in analytical sentences',
      "Develops a personal interpretation of the poem's ideas and effects",
      'Writes with clarity and analytical precision',
    ],
    examinerTips: [
      'For unseen poetry, trust your instincts - there is no single "correct" reading.',
      'Comment on what the poem does, not just what it says.',
      'Pay attention to the shortest lines - poets often isolate words for emphasis.',
      'Consider how the poem ends: the final image usually carries the most weight.',
    ],
  },
  {
    id: 'edexcel-p1-read-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Reading Comprehension',
    difficulty: 'Foundation',
    extract: `The railway station was a cathedral of commerce. Massive iron girders stretched across the vaulted ceiling like the ribs of some sleeping leviathan. Passengers moved beneath them in a constant stream - businessmen with briefcases, tourists with maps, students with backpacks - a democratic flow of humanity converging on destinations both real and imagined. The smell of coffee and diesel fuel hung in the air, an odd perfume of modernity. And everywhere, everywhere, there was movement: the hurried shuffle of feet, the clank of departures boards, the hiss of train brakes.`,
    extractSource: 'Original composition',
    question:
      'What impression of the railway station does the writer create in this extract? Use evidence from the text to support your answer.',
    marks: 8,
    timing: '10 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer creates an impression of a busy and impressive place. The comparison to "a cathedral of commerce" shows it is a grand building where people go for important reasons. The "iron girders" compared to "the ribs of some sleeping leviathan" makes the building seem very large and alive. The "constant stream" of different types of people shows how many use the station. Sensory details like the "smell of coffee and diesel fuel" and sounds like "the clank of departures boards" make it feel lively and modern.`,
      'Grade 6-7': `The writer presents the station as both majestic and vital. The opening simile "a cathedral of commerce" elevates the space by comparing it to a place of worship whilst grounding it in commercial activity. The extended metaphor of iron girders as "the ribs of some sleeping leviathan" personifies the building as a living creature, suggesting it contains and sustains human movement. The cataloguing of passengers using asyndeton (omitting "and") creates a sense of hurried multiplicity. The sensory imagery - smell of "coffee and diesel fuel," onomatopoeia of "clank" and "hiss" - creates an acoustic and olfactory impression of relentless motion, constructing the station as a space where individual travellers are subsumed into collective movement.`,
      'Grade 8-9': `The writer constructs the station as a paradoxical space where architectural sublimity is inseparable from commercial functionality. The opening comparison "cathedral of commerce" conjoins transcendence with materialism, establishing tension at the linguistic level. The metaphor of girders as "ribs of some sleeping leviathan" operates across registers: it implies organic interiority whilst the sleeping state suggests latent commercial power. The paratactic catalogue of passengers (absence of conjunctions) creates linguistic acceleration mirroring the experiential compression of public transport. The synesthetic formulation "an odd perfume of modernity" marks the station as a space where aesthetic categories collide with industrial reality. Final acoustic onomatopoeia creates what approaches modernist urban poetry, where the city\'s sounds become a form of language itself. Anaphoric repetition "everywhere, everywhere, there was movement" linguistically enacts the overwhelming presence of motion, establishing the station as a space where individual identity is subsumed into collective circulation.`,
    },
    markScheme: [
      'Identifies overall impression (impressive, busy, modern)',
      'Selects relevant textual evidence',
      'Explains how language choices create the impression',
      'Uses subject terminology accurately',
    ],
    examinerTips: [
      'Begin with a statement about the overall impression.',
      'Embed short quotations in your sentences.',
      'Explain the effect of specific word choices.',
    ],
  },
]
