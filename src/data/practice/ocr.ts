// @ts-nocheck
// ─── Practice question bank: OCR ────────────────────────────────────────
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

export const ocrPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'ocr-c01-synth-1',
    board: 'OCR',
    paper: 1,
    questionType: 'Synthesis (Q3)',
    difficulty: 'Foundation',
    extract: `Source A: "School uniform is a leveller. When every child wears the same blazer, the same tie, the same polished shoes, the differences that divide them - wealth, background, the cruelty of fashion - become invisible. Uniform does not eliminate inequality, but it removes its most visible marker. A child in uniform is simply a student, and that anonymity is a kindness."\n- Adapted from a headteacher's letter to parents, 2019\n\nSource B: "I hated my school uniform with a passion that has not dimmed in twenty years. The polyester blazer that trapped sweat against your skin. The tie that served no purpose except to give older boys something to grab you by. The shoes that had to be 'plain black leather' even though my family could barely afford them. Uniform was not a leveller - it was a reminder, every single morning, that someone else controlled what I wore, what I looked like, who I was allowed to be."\n- Adapted from a newspaper opinion column, 2022`,
    extractSource:
      "Source A: Adapted from a 2019 headteacher's letter; Source B: Adapted from a 2022 opinion column",
    question:
      'Using details from both sources, write a summary of the different views on school uniform. (6 marks)',
    modelAnswers: {
      'Grade 4-5': `The two sources present different views on school uniform. Source A argues that uniform is positive because it is "a leveller" that makes differences between students "invisible." The headteacher believes that when everyone wears the same clothes, students are judged equally. In contrast, Source B disagrees strongly, calling uniform "a reminder" that someone else controlled them. Where Source A sees anonymity as "a kindness," the writer of Source B felt uniform took away their identity, saying it controlled "who I was allowed to be." Source A acknowledges uniform does not fix inequality but helps, while Source B argues it actually highlighted poverty because the required shoes were difficult to afford.`,
      'Grade 6-7': `The sources offer directly opposing views on uniform, though both engage with the question of identity. Source A frames uniform as socially beneficial, arguing it renders the "differences that divide" students - specifically "wealth, background, the cruelty of fashion" - "invisible." The headteacher positions uniformity as protective, calling the resulting "anonymity" a "kindness." Source B systematically dismantles this argument through personal experience: far from eliminating markers of inequality, uniform "was a reminder" of financial hardship, since the mandated "plain black leather" shoes were unaffordable. Where Source A sees uniform as removing control from external forces like fashion, Source B reframes it as substituting one form of control for another - "someone else controlled what I wore." Both writers implicitly agree that uniform concerns power, but they disagree fundamentally about who benefits from that power.`,
      'Grade 8-9': `Both sources address uniform as a mechanism of social control, but they diverge entirely on whether that control is benevolent or oppressive. Source A presents the institutional perspective: uniform is "a leveller" that neutralises the "visible markers" of economic disparity, offering students the "kindness" of "anonymity." The concession that uniform "does not eliminate inequality" lends the argument credibility through acknowledged limitation. Source B counters with embodied testimony: the physical discomfort of "polyester" that "trapped sweat," the vulnerability of a tie that gave bullies "something to grab you by," and the economic burden of compulsory shoes the writer's family "could barely afford." Where Source A abstracts uniform into a principle of equality, Source B insists on its material reality. The fundamental disagreement is philosophical: Source A equates uniformity with fairness, while Source B equates it with erasure - "who I was allowed to be." Notably, Source A's anonymity and Source B's loss of identity describe the same phenomenon; they merely disagree on whether it constitutes liberation or suppression.`,
    },
    markScheme: [
      'Synthesises information from BOTH sources (not just one)',
      'Identifies clear points of comparison or contrast between the sources',
      'Uses textual references from both sources to support points',
      'Presents a coherent overview rather than listing separate points',
      "Shows understanding of the writers' different perspectives",
    ],
    examinerTips: [
      'OCR synthesis questions require you to combine information from both sources - do not write about each source separately.',
      'Use comparative connectives: "while," "whereas," "in contrast," "both sources agree that."',
      'Keep your answer focused on summarising views, not analysing language.',
      'Aim for 3-4 well-developed comparative points rather than many undeveloped ones.',
    ],
  },
  {
    id: 'ocr-c01-eval-1',
    board: 'OCR',
    paper: 1,
    questionType: 'Evaluative Comparison (Q4)',
    difficulty: 'Higher',
    extract: `Source A (1869): "The railway has brought about changes in rural life that no revolution could have accomplished. Villages that were, within living memory, a day's journey from the nearest town now lie a mere forty minutes distant. The farmer who once knew nothing beyond his own parish boundary now reads a London newspaper over his breakfast. Whether this constitutes progress I leave to the reader's judgement, but I note that the hedgerows are quieter than they were, the lanes emptier, and the young increasingly difficult to persuade that their future lies in the soil."\n- Adapted from a Victorian rural journal\n\nSource B (2024): "The broadband cable reached our village last March. Within six months, three households had someone working from home, the pub had Wi-Fi, and our nearest shop - which had been six miles away - was now, effectively, the internet. My neighbour, who is seventy-four and has never left the county, now video-calls her grandson in Melbourne every Sunday. Connectivity has not destroyed our community. But it has quietly renegotiated the terms on which we belong to it."\n- Adapted from a contemporary rural blog`,
    extractSource:
      'Source A: Adapted from an 1869 journal; Source B: Adapted from a 2024 blog post',
    question:
      "Compare how the writers of Source A and Source B present the impact of new technology on rural communities. In your answer you should consider the writers' use of language, the impact of the texts on the reader, and the contexts in which they were written. (14 marks)",
    modelAnswers: {
      'Grade 4-5': `Both writers discuss how new technology has changed life in rural areas, but they have different attitudes. Source A, from 1869, writes about the railway. The writer says it has brought "changes that no revolution could have accomplished," which shows how powerful the railway was. However, the writer seems worried about the effects, noting that "the hedgerows are quieter" and young people are leaving. Source B writes about broadband internet in 2024. This writer is more positive, giving examples of how the internet has helped, such as a neighbour who "video-calls her grandson in Melbourne." Both writers use specific examples to show change. Source A mentions the farmer reading a London newspaper, while Source B mentions working from home and online shopping. The final line of Source B - "quietly renegotiated the terms" - is similar to Source A's ambiguous tone, as both writers suggest technology changes things in ways that are not entirely comfortable.`,
      'Grade 6-7': `Both extracts examine the moment when a new technology transforms rural isolation, and though separated by 155 years, they share a strikingly similar ambivalence. Source A frames the railway's impact through the rhetoric of revolution - "changes that no revolution could have accomplished" - borrowing political language to convey the scale of disruption. The temporal compression from "a day's journey" to "forty minutes distant" dramatises the collapse of rural isolation, while the image of a farmer reading "a London newspaper over his breakfast" captures the penetration of metropolitan culture into previously insular spaces. Source B mirrors this structure precisely: the broadband cable arrives, and within "six months" the village has been functionally reorganised. The nearest shop is now "effectively, the internet" - a dryly witty reformulation that parallels Source A's newspaper-reading farmer. Both writers use the language of quiet transformation rather than dramatic upheaval: Source A's hedgerows are "quieter," lanes "emptier"; Source B's technology "quietly renegotiated" community bonds. However, their tonal registers differ. Source A adopts a deliberately noncommittal stance - "whether this constitutes progress I leave to the reader's judgement" - but the elegiac listing of losses undermines this neutrality. Source B is warmer and more personal, deploying the specific anecdote of the seventy-four-year-old neighbour to humanise the statistics. The contextual difference is significant: Source A writes at a moment of uncertain change, while Source B writes with retrospective awareness of how similar anxieties about the railway proved both justified and survivable.`,
      'Grade 8-9': `These texts are haunted by the same question - what happens to a place when distance ceases to matter? - and their formal and rhetorical strategies reveal as much about their historical moments as about their ostensible subjects. Source A deploys the rhetoric of ambivalent witness. The opening hyperbole - "changes that no revolution could have accomplished" - is double-edged: it attributes to the railway a power that exceeds political upheaval, implicitly questioning whether such power should belong to a commercial enterprise. The syntactic movement of the final sentence - from the passive observation of quieter hedgerows and emptier lanes to the active difficulty of persuading the young "that their future lies in the soil" - enacts a loss of agency that mirrors the community's experience. The writer's claim to neutrality ("I leave to the reader's judgement") is performatively undermined by the elegiac cadence of what follows; this is a text that pretends to objectivity while mourning. Source B, writing in full knowledge of how such narratives unfold, adopts a different strategy: pragmatic acceptance leavened by ironic precision. The observation that the nearest shop "was now, effectively, the internet" compresses an economic revolution into a single subordinate clause, and the adverb "effectively" does significant work - it acknowledges that the change is functional rather than felt, practical rather than emotional. The anecdote of the seventy-four-year-old video-calling Melbourne operates as a counter-narrative to Source A's departing youth: where Source A's young leave the village, Source B's elderly reach beyond it without moving. Both texts culminate in qualified conclusions. Source A's "whether this constitutes progress" and Source B's "quietly renegotiated the terms on which we belong" are structurally parallel moments of hedged judgement. But where Source A's ambivalence sounds like grief, Source B's sounds like maturity - the product of a culture that has lived through enough technological transformations to know that the apocalypse is rarely as total as it first appears.`,
    },
    markScheme: [
      'Compares methods (language, structure, tone) across both sources',
      'Evaluates the impact on the reader for both texts',
      'Considers contextual factors (time period, audience, purpose)',
      'Integrates quotations from both sources throughout',
      'Maintains a comparative structure (not sequential)',
      'Shows perceptive understanding of how context shapes meaning',
    ],
    examinerTips: [
      'OCR values comparison - write about both sources together, not one then the other.',
      'Context means more than just the date: consider audience, purpose, and genre.',
      'Evaluate HOW effectively each writer conveys their ideas, not just WHAT they say.',
      'The best answers find unexpected connections between the sources.',
    ],
  },
  {
    id: 'ocr-c02-lang-1',
    board: 'OCR',
    paper: 2,
    questionType: 'Language and Structure Analysis (Q3)',
    difficulty: 'Foundation',
    extract: `The old woman sat in the corner of the railway carriage and watched the countryside accelerate. Fields blurred into hedgerows, hedgerows into woodland, woodland into the grey smear of approaching suburbs. She had not taken a train in eleven years. The last time had been with Harold, who had insisted on first class even though they could not afford it, because he said a person should experience luxury at least once before deciding they did not need it. Harold had been dead for ten of those eleven years.\n\nShe opened her handbag and took out a sandwich wrapped in greaseproof paper. Egg and cress. She had made it at five o'clock that morning, standing in the kitchen in her dressing gown while the house ticked and settled around her. The bread was slightly stale now but she ate it anyway, carefully, over the paper, catching every crumb. Opposite her, a young man in headphones stared at his phone. He had not looked up once since Crewe.`,
    extractSource: 'Original composition in the style of literary realism',
    question:
      "How does the writer use language and structure to portray the old woman's character and situation? (15 marks)",
    modelAnswers: {
      'Grade 4-5': `The writer presents the old woman as someone who is lonely and careful. She is described as sitting "in the corner," which makes her seem small and isolated. The detail that she has "not taken a train in eleven years" tells us she does not travel often, and the memory of Harold shows she has lost her husband. The fact that Harold "insisted on first class even though they could not afford it" tells us they were not wealthy, and the writer uses this memory to show both love and loss. The woman is presented as very careful and precise - she eats "over the paper, catching every crumb," which suggests she does not like waste. The contrast with the "young man in headphones" who "had not looked up once since Crewe" makes her seem even more alone, because even the person sitting opposite her is ignoring her. The detail about making the sandwich at "five o'clock that morning" shows she was up very early, perhaps because she could not sleep due to anxiety about the journey.`,
      'Grade 6-7': `The writer constructs the old woman through accumulative domestic detail and structural isolation. The opening image positions her "in the corner," a spatial metaphor for marginality that is reinforced by the accelerating landscape she "watches" but does not participate in - the progressive blurring of "fields into hedgerows, hedgerows into woodland" syntactically enacts a world moving faster than she can process. The parenthetical memory of Harold is structurally central: it occupies the emotional core of the first paragraph, and the detail that he "insisted on first class even though they could not afford it" encodes both his character (generous, perhaps impractical) and their economic reality in a single clause. The devastating brevity of "Harold had been dead for ten of those eleven years" uses the arithmetic of grief - the precise counting - to suggest that the old woman measures time by his absence. The second paragraph shifts to the present tense of small, careful actions. The sandwich - "egg and cress," made at "five o'clock that morning" - is rendered with a specificity that elevates the mundane into the poignant. She eats "carefully, over the paper, catching every crumb," and the participial phrase creates a sense of habitual precision born of either thrift or loneliness or both. The structural juxtaposition with the young man "in headphones" who "had not looked up once since Crewe" creates an implicit commentary on generational disconnection: two people sharing a space but inhabiting entirely different worlds.`,
      'Grade 8-9': `The extract's power resides in its refusal to sentimentalise. The old woman is portrayed not through emotional vocabulary but through the geometry of small actions, and the reader's sympathy is earned through precision rather than pathos. The opening positions her "in the corner" - already marginal - watching the landscape undergo a syntactic acceleration that she cannot match: the asyndetic listing of "fields blurred into hedgerows, hedgerows into woodland, woodland into the grey smear" uses chain-linking to create momentum, while the noun "smear" introduces visual distortion that suggests the world is becoming illegible to her. The memory of Harold is introduced through the temporal marker "eleven years" and then immediately bisected: "Harold had been dead for ten of those eleven years." The mathematical precision is devastating precisely because it is not emotional - it is the language of someone who has learned to accommodate grief as fact. Harold himself is characterised through a single, perfectly chosen anecdote: his insistence on first class "even though they could not afford it" compresses an entire marriage into a subordinate clause - his extravagance, her awareness, their shared understanding that experience matters more than money. The structural movement from memory to present action - the sandwich, the greaseproof paper, the crumbs - performs the work of returning from the past, and the meticulous domestic detail ("egg and cress," "five o'clock that morning," "the house ticked and settled") constructs a life of solitary routine. The verb "ticked" personifies the house as a companion, its settling sounds the only company in the pre-dawn kitchen. The final detail - the young man who "had not looked up once since Crewe" - is structurally positioned as a quiet indictment, not of him specifically, but of a world in which this woman's extraordinary ordinariness goes entirely unwitnessed.`,
    },
    markScheme: [
      'Analyses language choices and their effects on the reader',
      'Comments on structural features (narrative perspective, sequencing, juxtaposition)',
      'Uses well-selected and embedded quotations',
      'Considers how character is constructed through detail and implication',
      'Uses subject terminology accurately and purposefully',
    ],
    examinerTips: [
      'In OCR Component 02, you are working with fiction - think about how the writer constructs character.',
      'Consider what is NOT said as much as what is - implication is powerful.',
      'Comment on the effect of specific word choices, not just techniques.',
      'Structure your response around ideas or effects, not line-by-line.',
    ],
  },
  {
    id: 'ocr-c02-write-1',
    board: 'OCR',
    paper: 2,
    questionType: 'Narrative/Descriptive Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question:
      "Write the opening of a story set in a place that holds a significant memory for the narrator. Focus on creating a vivid sense of place and the narrator's emotional connection to it. (30 marks)",
    modelAnswers: {
      'Grade 4-5': `The playground looked smaller than I remembered. The climbing frame, which had once seemed as tall as a skyscraper, barely reached my shoulder now. The rubber surface was cracked and faded, the bright colours I remembered replaced by a tired grey.\n\nI sat down on the roundabout and pushed myself slowly with one foot. The metal groaned underneath me. Twenty years had not been kind to this place. The swings had lost their seats, just chains hanging empty against the sky. The slide was still there but its surface was rough and dull where it had once been smooth and shiny.\n\nThis is where we used to come every day after school, me and Callum. We would race to the swings, arguing over who got the good one - the one that went higher, the one with the seat that didn't pinch your legs. He always won. He was faster than me at everything.\n\nI had not been back here since the summer it happened. The summer everything changed. Standing here now, I could almost hear the sound of his laughter, carried on the wind like a ghost that refused to leave.`,
      'Grade 6-7': `The kitchen door still sticks. You have to lift the handle slightly and push with your hip - a specific, practised movement that my body remembers even though I have not performed it in seven years. Inside, the room is exactly and nothing like it was. The Formica table is the same table. The clock above the cooker is the same clock, still running three minutes fast because my mother believed that punctuality required deception. But the light is different. It falls through the window at an angle I do not recognise, and I realise, with a small shock, that the sycamore in the garden must have been cut down.\n\nThe smell is what undoes me. Not the smell of cooking - the house has been empty for months - but the smell underneath: wood polish and old carpet and something faintly metallic that I have never been able to name but which is, unmistakably, the smell of this house and no other. It enters through my nose and arrives somewhere behind my ribs, in the place where memory lives when it has nowhere else to go.\n\nI put the kettle on. This is not sentiment. This is procedure. When you return to a house where someone has died, you put the kettle on, because the alternative is to stand in the hallway and listen to the silence, and the silence in this house has teeth.`,
      'Grade 8-9': `The field is still here, which surprises me, though I cannot say what I expected - a car park, perhaps, or one of those identikit housing developments that consume the edges of market towns like a slow fungal infection. But no. The field is still here. The same field. The same slope rising gently to the copse of beeches at the ridge, the same ditch along the western boundary where, in a previous life, a boy who shared my name used to look for newts.\n\nI climb the gate rather than open it. This is not nostalgia. The latch has always been broken.\n\nThe grass is longer than it should be at this time of year, which means Harding has stopped grazing his sheep here, which means Harding is probably dead. I add this to the list of things that have changed while I was busy being elsewhere. The list is kept in a part of my mind that I try not to visit - a room with no windows where the furniture is covered in dust sheets and the air smells of apology.\n\nAt the top of the slope I stop. Below me, the village arranges itself with the careful randomness of something that has been settling into its own shape for nine hundred years. The church. The pub. The school whose playground I can see from here - a square of tarmac the size of a postage stamp from this distance, ringed by a fence that was always too low to keep anything in or out. I spent every lunchtime of every term for seven years inside that square. I learned, within its boundaries, most of what I know about love and hierarchy and the specific cruelty of exclusion. I have not set foot inside it since.\n\nThe wind moves through the beeches behind me with a sound like applause, or like pages turning. I sit down on the grass and wait for the past to arrive, the way you wait for a bus you are not sure is still running.`,
    },
    markScheme: [
      'Creates a convincing and vivid sense of place',
      'Establishes a clear emotional connection between narrator and setting',
      'Uses language imaginatively with well-chosen vocabulary',
      'Demonstrates structural control (opening, pacing, withholding)',
      'Maintains consistent narrative voice',
      'Shows technical accuracy with ambitious punctuation and syntax',
    ],
    examinerTips: [
      'The best openings raise questions that make the reader want to continue.',
      'Use specific, concrete details rather than vague or generic descriptions.',
      "Let the narrator's emotions emerge through what they notice, not through telling the reader how they feel.",
      'Control your pacing - not everything needs to be revealed immediately.',
    ],
  },
  {
    id: 'ocr-5',
    board: 'OCR',
    type: 'Reading Comprehension',
    tier: 'GCSE',
    title: 'Language Paper 1 Q1 Reading Comprehension',
    extract: `The first thing you notice about the market in Marrakech is the noise. It hits you like a wall the moment you step through the gate - a roar made up of a thousand smaller sounds, each one fighting to be heard. Traders shout prices across the narrow lanes. Mopeds weave between the crowds, their horns blaring. Somewhere, a radio plays Arabic pop music at a volume that suggests the owner believes the entire souk should share his taste.

The colours come next. Pyramids of spices - saffron yellow, paprika red, turmeric gold - are arranged on low tables with a precision that suggests the trader is an artist as much as a merchant. Leather bags hang from hooks in every shade of brown the animal kingdom can produce. Carpets are stacked in towers that lean against the walls like sleeping giants, their patterns so intricate that you could stare at one for an hour and still find something new.

Then the smells arrive, and they are less romantic. Tanning pits on the eastern side of the medina produce a stench that clings to your clothes and follows you home. Fresh mint, sold in great bunches by boys who cannot be older than eight, provides temporary relief. Bread bakes somewhere out of sight, its warm, yeasty scent threading through the chaos like a rumour of civilisation.

You will get lost. This is not a possibility but a certainty. The lanes twist and double back and arrive at dead ends that were not dead ends yesterday because someone has parked a cart across them. Maps are useless. Ask for directions and you will receive confident, contradictory advice from five different people, all of whom are correct, because in Marrakech there are always at least three ways to get anywhere, and none of them are the one you would choose.`,
    extractSource: 'Original composition in the style of travel writing',
    question:
      'Read the extract carefully. Based on what you have read, identify and explain five things you learn about the market in Marrakech. Use evidence from the text to support each point. (10 marks)',
    marks: 10,
    timing: '15 minutes',
    markScheme: [
      'Identifies five distinct pieces of information about the market',
      'Supports each point with relevant textual evidence',
      'Shows understanding of implicit as well as explicit information',
      'Points are clearly expressed and not repetitive',
      'Demonstrates comprehension of the whole text, not just one section',
    ],
    examinerTips: [
      'This is a comprehension question. You are being tested on understanding, not analysis.',
      'Five points means roughly two marks each. Support every point with a quotation.',
      'Look across the whole extract. Do not take all your points from one paragraph.',
      'Make each point clearly distinct from the others.',
    ],
    modelAnswers: {
      'Grade 4-5': `First, the market is extremely noisy. The writer says it "hits you like a wall" and is made up of "a thousand smaller sounds" including traders shouting and mopeds blaring. Second, the market is very colourful, with spices displayed in "pyramids" of "saffron yellow, paprika red, turmeric gold." Third, the traders take care with how their goods look, arranging spices "with a precision that suggests the trader is an artist." Fourth, the market has unpleasant smells as well as nice ones - the tanning pits produce "a stench that clings to your clothes." Fifth, it is very easy to get lost because "the lanes twist and double back" and maps are described as "useless."`,
      'Grade 6-7': `The market is characterised first by sensory overload: the noise is so intense it "hits you like a wall," composed of competing sounds from traders, mopeds, and radios. This suggests an environment that overwhelms visitors. Second, the market is visually striking, with goods displayed with artistic care - spice pyramids of "saffron yellow, paprika red, turmeric gold" are arranged with "a precision" that elevates trade into an aesthetic practice. Third, it is a place of stark contrasts: the "stench" of the tanning pits coexists with the "warm, yeasty scent" of baking bread and "fresh mint," suggesting beauty and unpleasantness are inseparable. Fourth, the market employs young children, with mint "sold in great bunches by boys who cannot be older than eight," indicating a different cultural attitude to child labour. Fifth, the market's layout is chaotic and constantly changing - dead ends appear because "someone has parked a cart across them" - creating a space that resists navigation and where even confident directions are "contradictory."`,
      'Grade 8-9': `The market is presented as an environment that assaults the senses in a specific hierarchy: "the first thing you notice is the noise," then "the colours come next," then "the smells arrive" - suggesting a place so overwhelming that the visitor processes it in stages rather than all at once. Second, it is a space where commerce and artistry merge: the spice trader arranges his goods "with a precision that suggests the trader is an artist as much as a merchant," implying that the market values presentation as a form of craft. Third, the market contains stark material inequalities: boys "who cannot be older than eight" sell mint alongside traders whose carpet collections are described with the language of gallery exhibition, suggesting a hierarchy within the market's apparent chaos. Fourth, the physical environment is both sensory and adversarial - the tanning pits produce a stench that "clings to your clothes and follows you home," using verbs that personify the smell as something that attaches itself to visitors, making the market's presence inescapable even after leaving. Fifth, the market is a space that defeats Western assumptions about navigability: maps are "useless," directions are "confident" but "contradictory," and the lanes themselves change daily, suggesting that the market operates according to a logic that visitors must surrender to rather than impose upon.`,
    },
  },
  {
    id: 'ocr-6',
    board: 'OCR',
    type: 'Shakespeare Extract',
    tier: 'GCSE',
    title: 'Literature Section A Shakespeare Extract',
    extract: `MACBETH:
Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? Or art thou but
A dagger of the mind, a false creation,
Proceeding from the heat-oppressed brain?
I see thee yet, in form as palpable
As this which now I draw.
Thou marshall'st me the way that I was going,
And such an instrument I was to use.
Mine eyes are made the fools o' the other senses,
Or else worth all the rest. I see thee still,
And on thy blade and dudgeon gouts of blood,
Which was not so before. There's no such thing.
It is the bloody business which informs
Thus to mine eyes.

(Macbeth, Act 2 Scene 1)`,
    question:
      "How does Shakespeare use this extract to present Macbeth's state of mind at this point in the play? Explore how the extract contributes to the play as a whole. (24 marks)",
    marks: 24,
    timing: '30 minutes',
    markScheme: [
      "Analyses how language presents Macbeth's psychological state",
      'Explores the significance of the extract within the wider play',
      'Uses well-selected quotations analysed in detail',
      'Considers how dramatic techniques (soliloquy, stage imagery) contribute to meaning',
      'Shows awareness of relevant context (Jacobean attitudes to conscience, kingship, the supernatural)',
      'Develops a coherent, sustained argument',
    ],
    examinerTips: [
      'The extract is a starting point, not a boundary. Refer to the rest of the play.',
      'Consider why Shakespeare uses a soliloquy here - what does it reveal?',
      "Think about the audience's experience. What would a Jacobean audience think?",
      'Analyse specific words, not just general ideas.',
    ],
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Macbeth as deeply disturbed and unsure of what is real. Macbeth sees a dagger floating in the air but cannot tell whether it is real or imaginary. He asks "Is this a dagger which I see before me?" which shows his confusion. The rhetorical question reveals that he is talking to himself, trying to make sense of what is happening.

Macbeth calls the dagger "a false creation, proceeding from the heat-oppressed brain." The adjective "heat-oppressed" suggests his mind is overheating with guilt and anxiety about the murder he is about to commit. He knows the dagger might not be real, but he still follows it - "Thou marshall'st me the way that I was going" - which suggests he feels he is being led towards the murder by fate or by a force he cannot control.

The appearance of "gouts of blood" on the blade is significant because it foreshadows the bloodshed to come. The word "gouts" means large drops, which makes the image vivid and disturbing. Macbeth then tries to dismiss the vision - "There's no such thing" - but his attempt to regain control is unconvincing because we know he is about to kill Duncan.

Shakespeare uses a soliloquy here to let the audience see inside Macbeth's mind. This is important because in public Macbeth appears confident, but in private he is tormented. This links to the play's wider theme of appearance versus reality.`,
      'Grade 6-7': `Shakespeare presents Macbeth at the threshold of irreversible action, using the dagger soliloquy to dramatise the final collapse of his resistance. The hallucination functions simultaneously as a psychological symptom and a theatrical device: Macbeth's inability to determine whether the dagger is real - "Art thou not, fatal vision, sensible / To feeling as to sight?" - externalises his internal division between moral revulsion and murderous ambition.

The language of the soliloquy oscillates between rational analysis and compulsive surrender. Macbeth attempts to diagnose his own condition - "a false creation, / Proceeding from the heat-oppressed brain" - using the vocabulary of Elizabethan humoral medicine, which attributed hallucinations to an excess of choler. This clinical self-assessment demonstrates that Macbeth retains the intellectual capacity to recognise his deterioration, which makes his failure to act on that recognition all the more tragic. The "heat-oppressed brain" locates the disturbance in the body rather than the supernatural, yet the preceding scenes - the Witches' prophecies, Lady Macbeth's invocation of "spirits" - ensure that the audience cannot so easily dismiss the metaphysical dimension.

The pivotal moment comes with "Thou marshall'st me the way that I was going." The verb "marshall'st" implies military command, casting Macbeth as a soldier following orders, yet the qualifying clause "the way that I was going" reveals that the dagger leads him only where he has already chosen to go. Shakespeare thus denies Macbeth the comfort of compulsion: the dagger does not create his intention but confirms it. This links to the wider play's exploration of free will - the Witches predict, but Macbeth acts.

The appearance of "gouts of blood" on the blade transforms the hallucination from a symbol of intent to a premonition of consequence. Macbeth's attempt to dismiss it - "There's no such thing" - is undermined by the very need to articulate the denial. Shakespeare places this soliloquy immediately before the murder, creating a dramatic pause in which the audience witnesses the last moments of Macbeth's conscience. After this scene, Macbeth will kill Duncan, and his subsequent soliloquies will be characterised not by hesitation but by deepening despair.`,
      'Grade 8-9': `The dagger soliloquy is Shakespeare's most sustained dramatic exploration of the mind at the moment of moral crisis, and its power derives from a carefully constructed impossibility: Macbeth knows the dagger is not real, says so explicitly, and follows it anyway. This is not irrationality. It is the dramatisation of a will that has already committed to the act while the conscience performs its final, futile audit.

The soliloquy opens with a question - "Is this a dagger which I see before me?" - that is simultaneously addressed to the hallucination, to Macbeth himself, and to the audience. Shakespeare deploys the second person "thee" to grant the dagger the status of an interlocutor, a rhetorical choice that performs the very confusion between real and unreal that the speech investigates. The imperative "Come, let me clutch thee" is startling in its intimacy: Macbeth does not recoil from the vision but reaches for it, the verb "clutch" encoding both desire and desperation. When the clutch fails - "I have thee not, and yet I see thee still" - the coordinating "and yet" holds the contradiction in suspension, refusing to resolve it.

Macbeth's attempt at rational self-diagnosis - "a false creation, / Proceeding from the heat-oppressed brain" - is a remarkable moment of early modern cognitive science. The phrase "heat-oppressed" draws on humoral theory, locating the hallucination in physiological imbalance rather than demonic intervention. But Shakespeare's audience would have held both explanations simultaneously: in a post-Reformation culture saturated with anxiety about the Devil's capacity to deceive the senses, Macbeth's rationalism is not reassuring but terrifying, because it raises the possibility that the dagger is both a medical symptom and a supernatural sign - that the categories are not mutually exclusive.

The soliloquy's structural turning point is "Thou marshall'st me the way that I was going, / And such an instrument I was to use." The past continuous "was going" and "was to use" are devastating: they reveal that the decision has already been made, that the dagger is not a cause but a confirmation. Shakespeare thus resolves the play's central question about agency - are the Witches responsible, or is Macbeth? - with a both/and rather than an either/or. The dagger leads, but it leads where Macbeth was already headed. Free will and determinism collapse into each other.

The final transformation - "gouts of blood, / Which was not so before" - accelerates the hallucination from invitation to prophecy. The word "gouts," from the French for drops, carries medical connotations of disease, and the blood that appears unprompted on the blade foreshadows not only Duncan's murder but the entire haemorrhagic trajectory of the play: Banquo's ghost, Lady Macbeth's obsessive handwashing, the final "damned spot" that will not come clean. Macbeth's dismissal - "There's no such thing" - is Shakespeare's most devastating use of dramatic irony, because the audience knows that in the world of this play, such things exist: witches prophesy, nature revolts, and the blood of murdered kings will not be washed away. The soliloquy is, in essence, the last moment before Macbeth crosses a threshold that transforms him from a man who contemplates evil into a man who commits it - and Shakespeare ensures we understand that the crossing is entirely voluntary.`,
    },
  },
  {
    id: 'ocr-7',
    board: 'OCR',
    type: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Literature Poetry Unseen',
    extract: `"The Horses" by Edwin Muir (extract):

Barely a twelvemonth after
The seven days war that put the world to sleep,
Late in the evening the strange horses came.
By then we had made our covenant with silence,
But in the first few days it was so still
We listened to our breathing and were afraid.
On the second day
The radios failed; we turned the knobs; no answer.
On the third day a warship passed us, heading north,
Dead bodies piled on the deck. On the sixth day
A plane plunged over us into the sea. Thereafter
Nothing. The radios dumb;
And still they stand in corners of our kitchens,
And stand, perhaps, turned on, in a million rooms
All over the world.`,
    question:
      'In this poem, Muir presents a world recovering from catastrophe. How does the poet use language, form, and structure to convey the experience of the survivors? (24 marks)',
    marks: 24,
    timing: '30 minutes',
    markScheme: [
      "Analyses how language choices convey the survivors' experience",
      'Comments on the effects of structural and formal choices',
      'Uses well-selected quotations analysed in close detail',
      'Explores multiple layers of meaning',
      'Develops a coherent personal response to the poem',
      'Considers how the poem creates effects on the reader',
    ],
    examinerTips: [
      'This is an unseen poem, so you have no notes to rely on. Read it at least three times.',
      'Do not try to cover everything. Choose the most interesting features and analyse them in depth.',
      'Consider what the poem does NOT say as well as what it does.',
      'Pay attention to form: line breaks, enjambment, rhythm. These are deliberate choices.',
    ],
    modelAnswers: {
      'Grade 4-5': `Muir presents a world that has been destroyed by war, and the survivors are described as living in silence and fear. The opening line, "Barely a twelvemonth after / The seven days war," tells us the war was very short - only seven days - but devastating enough to "put the world to sleep." The metaphor of sleep suggests death or the end of civilisation as we know it.

The survivors have "made our covenant with silence," which means they have accepted that the world has gone quiet. The word "covenant" is a religious word meaning a promise or agreement, which suggests the silence is almost sacred to them. They "listened to our breathing and were afraid," which shows how unnaturally quiet the world has become - normally you would not be able to hear your own breathing.

Muir uses a list structure to describe the days after the war. "On the second day the radios failed," "On the third day a warship passed," "On the sixth day a plane plunged." This counting of days echoes the biblical creation story, but instead of God creating the world, everything is being destroyed. The radios being "dumb" is personification that makes the technology seem dead.

The image of radios that "still they stand in corners of our kitchens" is powerful because it shows that the objects of modern life are still there but useless. The word "still" could mean they are motionless or that they remain - both meanings work. This suggests the survivors are surrounded by reminders of the world they have lost.`,
      'Grade 6-7': `Muir constructs the post-apocalyptic experience through a rhetoric of subtraction - the poem catalogues what has been lost, and the survivors are defined by their relationship to absence. The opening temporal marker, "Barely a twelvemonth after," establishes a community that measures time from the catastrophe, as religions measure from a founding event. The "seven days war" inverts the Genesis creation narrative: where God created the world in seven days, humanity unmade it in the same span. The euphemistic "put the world to sleep" refuses the vocabulary of violence, the gentleness of "sleep" creating an unsettling dissonance with the reality of mass destruction.

The structural device of numbered days - second, third, sixth - extends the biblical parallel while charting the progressive collapse of civilisation's infrastructure. The radios "failed" on the second day; by the sixth, a plane "plunged over us into the sea." The verb "plunged" implies uncontrolled descent, and the absence of explanation - no cause is given - suggests that understanding has collapsed alongside technology. The single-word sentence "Nothing" after "Thereafter" is the poem's structural nadir, a void in the text that enacts the void in the world.

The most haunting image is of the radios that "still they stand in corners of our kitchens, / And stand, perhaps, turned on, in a million rooms." The repetition of "stand" personifies the radios as silent witnesses, while "perhaps, turned on" is devastating in its uncertainty - it imagines other survivors, elsewhere, who may or may not exist, performing the same futile gesture of turning a knob and receiving "no answer." The domestic setting - "corners of our kitchens" - grounds the apocalypse in the quotidian, and the radios become monuments to a connectivity that has been permanently severed.

The "covenant with silence" is the poem's most significant phrase. A covenant is bilateral, reciprocal - it implies that the survivors have not merely endured silence but agreed to it, accepted it as the new condition of existence. This positions silence not as absence but as a form of speech, the only language adequate to the scale of what has happened.`,
      'Grade 8-9': `Muir's extract operates at the intersection of elegy and Genesis, constructing the aftermath of catastrophe as an inverted creation myth in which the numbered days mark not the building of a world but its systematic disassembly. The formal structure enacts this: the poem begins with a temporal precision - "Barely a twelvemonth," "the seven days war" - that implies a culture still capable of measurement, but the language progressively loosens its grip on specificity. By the end of the extract, the survivors can only say "perhaps" and "a million rooms," approximations that reveal a community losing its epistemic confidence along with its technology.

The phrase "put the world to sleep" is the extract's most carefully calibrated euphemism. "Sleep" is not death but its rehearsal, and the ambiguity is functional: it allows the possibility that the world might wake, while the weight of the surrounding imagery makes that possibility vanishingly faint. The passive construction - the war "put the world to sleep" - denies agency, as though the catastrophe were a natural process rather than a human choice. This grammatical evasion is itself a symptom of trauma: the survivors cannot or will not name what they have done to themselves.

The numbered days - "On the second day," "On the third day," "On the sixth day" - unmistakably echo Genesis, but the echo is inverted. Where the biblical narrative moves from void to plenitude, Muir's moves from remnant to nothing. The radios fail; the warship carries "dead bodies piled on the deck" (the participle "piled" denying the dead even the dignity of arrangement); the plane "plunges" without explanation. The missing days - the first, the fourth, the fifth - are as significant as the ones named: their absence suggests either that nothing happened on those days or that what happened was too formless to narrate. Either reading reinforces the collapse of coherent experience.

The pivotal word is "Thereafter." It occupies a line break, suspended between the plane's descent and the single-word verdict: "Nothing." This enjambment forces the reader to pause at the edge of the unknown, mimicking the survivors' experience of waiting for a future that may not arrive. "The radios dumb" - the adjective carrying both its modern sense of mute and its older sense of stupid - reduces technology to a pathetic object, and the image of radios standing "in corners of our kitchens" is devastating precisely because of its domesticity. The kitchen is the room of sustenance, of daily routine, and the dead radio in its corner is a monument to the quotidian world that has been lost. The speculative extension - "And stand, perhaps, turned on, in a million rooms / All over the world" - is the extract's most poignant gesture. The word "perhaps" admits the possibility that the survivors are entirely alone, that no one else is listening, that the silence is not a covenant but a fact. Yet the act of imagining other rooms, other radios, other listeners, is itself a refusal of that isolation - an assertion of community that persists even when community cannot be verified.

The "covenant with silence" is theologically loaded. A covenant in the Judeo-Christian tradition is a binding agreement between God and humanity - the rainbow after the Flood, the tablets of the Law. Muir's survivors have made their covenant not with God but with silence, suggesting that in the post-apocalyptic world, absence has replaced the divine as the organising principle of existence. This is not nihilism but a chastened realism: the survivors have learned to inhabit a world stripped of the noise - technological, military, informational - that once passed for meaning, and in doing so, they have discovered a form of attention that the pre-catastrophe world could not accommodate.`,
    },
  },
  {
    id: 'ocr-lit-macbeth-1',
    board: 'OCR',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth - Kingship and Tyranny',
    extract: `Besides, this Duncan\nHath borne his faculties so meek, hath been\nSo clear in his great office, that his virtues\nWill plead like angels, trumpet-tongued, against\nThe deep damnation of his taking-off;\nAnd pity, like a naked new-born babe,\nStriding the blast, or heaven\'s cherubin horsed\nUpon the sightless couriers of the air,\nShall blow the horrid deed in every eye,\nThat tears shall drown the wind.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 1 Scene 7",
    question:
      'How does Shakespeare use this extract to explore ideas about kingship? In your response you should explore how Shakespeare presents good and bad kingship in the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Duncan as an ideal king to make Macbeth\'s plan to murder him seem even more terrible. Macbeth says Duncan has "borne his faculties so meek," meaning he has used his power with humility. The word "meek" suggests gentleness and modesty, which are good qualities in a king. He has also been "clear in his great office," meaning he has been honest and transparent.

Macbeth imagines that Duncan\'s virtues will "plead like angels, trumpet-tongued" against his murder. This simile compares Duncan\'s good qualities to angels who will announce the crime to everyone. The phrase "deep damnation" shows Macbeth knows he will go to hell for this. The image of "pity, like a naked new-born babe" compares the feeling of pity to a helpless baby, but this baby is powerful enough to "stride the blast" - riding on the wind. This paradox shows that pity and justice may seem weak but are actually unstoppable.

Duncan represents good kingship in the play. He rewards loyal soldiers, like making Macbeth Thane of Cawdor, and he speaks kindly to everyone. When he arrives at Macbeth\'s castle, he calls it a "pleasant seat" and praises Lady Macbeth as an "honoured hostess," which shows his trusting, generous nature.

By contrast, Macbeth becomes a tyrant after taking the throne. He has Banquo murdered, attacks Macduff\'s innocent family, and rules through fear. Macduff calls Scotland under Macbeth "our suffering country" and says it "weeps" and "bleeds." The contrast between Duncan\'s gentle kingship and Macbeth\'s tyranny shows Shakespeare\'s message that a good king serves his people while a bad king serves only himself.

Shakespeare wrote the play for James I, who believed in the Divine Right of Kings. By showing that murdering a good king leads to chaos and damnation, Shakespeare is supporting the idea that kings are chosen by God and should not be overthrown.`,
      'Grade 6-7': `Shakespeare constructs this soliloquy as a legal brief against regicide, with Macbeth acting as both prosecutor and defendant. The legal metaphor - Duncan\'s virtues will "plead like angels" against the "deep damnation of his taking-off" - frames the murder as a trial in which the verdict is predetermined: heaven itself will testify against the killer. This is significant because Macbeth is not merely evaluating the practical risks of murder but weighing its cosmic consequences, revealing a moral imagination that his subsequent actions will systematically destroy.

Duncan\'s kingship is characterised through two key qualities: meekness and clarity. "Borne his faculties so meek" presents humility as an attribute of power - the verb "borne" suggests that kingship is a burden carried with grace, not a prize seized with force. "Clear in his great office" implies both transparency and moral purity, the adjective "clear" suggesting an absence of corruption. These qualities implicitly define what good kingship looks like: it is service, not domination; openness, not secrecy. The contrast with Macbeth\'s subsequent reign - characterised by paranoia, secrecy, and violence - is structured to be as stark as possible.

The imagery escalates from the legal to the apocalyptic. "Pity, like a naked new-born babe, striding the blast" is one of Shakespeare\'s most complex images: pity is simultaneously the most vulnerable thing imaginable (a naked baby) and the most powerful (striding the blast). This paradox captures a central thesis about kingship - that true authority comes from compassion, not force, and that vulnerability is a form of strength that tyranny cannot comprehend. The progression to "heaven\'s cherubin horsed upon the sightless couriers of the air" marshals the full machinery of divine retribution, the Latinate vocabulary ("cherubin," "couriers") creating a register of cosmic grandeur that dwarfs Macbeth\'s mortal ambition.

Shakespeare traces a deliberate arc from Duncan\'s idealised kingship through Macbeth\'s tyranny to Malcolm\'s restoration. Malcolm\'s testing of Macduff in Act 4 Scene 3 - where he pretends to be worse than Macbeth before revealing his true virtue - functions as a catalogue of kingly qualities and their perversions. The "king-becoming graces" Malcolm lists - "justice, verity, temp\'rance, stableness, bounty, perseverance, mercy, lowliness, devotion, patience, courage, fortitude" - provide the normative standard against which Macbeth\'s reign is measured and found wanting.

Contextually, the play speaks directly to James I\'s political self-image. James claimed descent from Banquo (historically inaccurate but politically useful), and the show of eight kings in Act 4 flatters this genealogy. More significantly, the play dramatises the theory of the Divine Right of Kings by showing that Duncan\'s murder produces not just political instability but natural disorder - storms, darkness, animals behaving unnaturally - confirming that the king\'s body and the body politic are mystically connected. Shakespeare\'s presentation of kingship is therefore simultaneously aesthetic, moral, and political: good kingship produces beauty and order; bad kingship produces ugliness and chaos.`,
      'Grade 8-9': `Shakespeare deploys this soliloquy as the play\'s most sustained exploration of political theology - the intersection of divine authority and temporal power that constitutes the conceptual foundation of early modern kingship. Macbeth\'s analysis of Duncan\'s virtues is not a character assessment but a cosmological argument: the murder of a good king does not merely violate human law but ruptures the relationship between heaven and earth that the king\'s person embodies.

The language of the extract performs a progressive amplification from the political to the transcendent. Duncan has "borne his faculties so meek" - the past participle "borne" activates the dual meaning of carrying and suffering, presenting kingship as a form of passion (in the theological sense) rather than possession. "Meek" is a specifically Christian virtue - "Blessed are the meek, for they shall inherit the earth" - and its application to a king performs a radical theological move: it suggests that true sovereignty consists not in the exercise of power but in its restraint. "Clear in his great office" extends this by presenting transparency as a political virtue; the word "clear" resonates with visual and moral purity, suggesting that Duncan\'s governance is characterised by an openness that has nothing to hide.

The image of virtues that "plead like angels, trumpet-tongued" transforms moral qualities into eschatological agents. The angels do not merely witness but advocate - "plead" is a legal verb that positions the murder as a case before a divine court. The adjective "trumpet-tongued" invokes the Last Judgement, where trumpets herald the final reckoning, and the implication is that Duncan\'s murder will accelerate cosmic justice. The phrase "deep damnation" is significant in its geological metaphor - damnation has depth, suggesting an abyss that awaits the murderer, and the adjective "deep" contrasts with the "clear" surface of Duncan\'s virtue, constructing a vertical moral geography in which goodness is elevated and evil is subterranean.

The image of "pity, like a naked new-born babe, striding the blast" is arguably the most complex metaphor in Shakespeare\'s work. Cleanth Brooks\'s celebrated analysis identified the paradox of vulnerability and power as the image\'s central mechanism, but the figure extends further than this. The "naked new-born babe" invokes the Christ child - divinity clothed in the most vulnerable flesh - and its ability to "stride the blast" recalls the harrowing of hell, where innocence conquers the storms of damnation. The progression to "heaven\'s cherubin horsed upon the sightless couriers of the air" multiplies the agents of retribution, the cherubim riding invisible horses across the sky, and the final image - "tears shall drown the wind" - achieves a sublime reversal in which human grief overpowers natural force, compassion physically extinguishing the violence of the storm.

Shakespeare structures the play so that every quality attributed to Duncan in this speech is systematically inverted in Macbeth\'s reign. Where Duncan is "meek," Macbeth rules through terror; where Duncan is "clear," Macbeth operates in secrecy and deception, instructing Lady Macbeth to "look like the innocent flower, but be the serpent under it." The deterioration is tracked through the play\'s imagery: under Duncan, Scotland is a garden tended by a gracious king; under Macbeth, it is a diseased body "almost afraid to know itself." The public response mirrors this - Duncan inspires loyalty; Macbeth inspires only the fear that drives his thanes to defect.

The political theology of kingship that Shakespeare dramatises was not merely a literary convention but a functioning ideology. James I\'s The True Law of Free Monarchies (1598) argued that kings are God\'s lieutenants on earth, and Basilikon Doron (1599) instructed his son in the duties of Christian kingship. Shakespeare\'s play both endorses and complicates this ideology: it demonstrates that regicide produces cosmic disorder, but it also exposes the fragility of the system by showing how easily a good king can be destroyed by a single ambitious subject. The play\'s final image of restored order under Malcolm is necessary but not entirely reassuring - the audience has seen how thin the line is between legitimate monarchy and tyranny, and the play\'s warning is directed not only at potential usurpers but at kings themselves, whose authority depends on embodying the virtues this soliloquy so eloquently catalogues.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents ideas about kingship through language and imagery',
      'Explores the significance of specific words and images in the extract',
      'Discusses good and bad kingship across the whole play',
      'Considers relevant context (Divine Right, James I, political theology)',
      'Uses well-integrated quotations to support a conceptualised argument',
      "Shows understanding of Shakespeare's dramatic methods and purposes",
    ],
    examinerTips: [
      'OCR values detailed analysis of the extract - spend time on specific words and images.',
      "The contrast between Duncan and Macbeth as kings is the essay's structural backbone.",
      "Consider Malcolm's role in the play's conclusion - he represents the restoration of good kingship.",
      'Context about James I is relevant but should support textual analysis, not replace it.',
    ],
  },
  {
    id: 'ocr-lit-macbeth-2',
    board: 'OCR',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'Macbeth - Appearance vs Reality',
    extract: `There\'s no art\nTo find the mind\'s construction in the face:\nHe was a gentleman on whom I built\nAn absolute trust.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 1 Scene 4",
    question:
      'How does Shakespeare explore the theme of appearance versus reality in Macbeth? Use this extract as a starting point and refer to the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Duncan says there is "no art to find the mind\'s construction in the face," meaning it is impossible to tell what someone is really thinking by looking at them. He is talking about the original Thane of Cawdor, who betrayed him, and saying he trusted him completely - "an absolute trust." This is ironic because Duncan is about to give that same title to Macbeth, who will also betray and murder him.

The theme of appearance versus reality runs through the whole play. The witches say "Fair is foul, and foul is fair," which means things that look good are actually bad and things that look bad might be good. This sets up the idea that nothing in the play can be trusted.

Lady Macbeth tells Macbeth to "look like the innocent flower, but be the serpent under it." This means he should appear kind and welcoming while planning murder. The image of a flower hiding a snake shows that beautiful appearances can hide dangerous reality.

After the murder, both Macbeth and Lady Macbeth pretend to be shocked and upset. Macbeth says he killed Duncan\'s guards in "fury" at their supposed crime, when really he was covering his tracks. Lady Macbeth pretends to faint to distract everyone. Their whole reign is built on pretending to be something they are not.

Shakespeare uses this theme to warn the audience that you cannot always trust what you see. For a Jacobean audience who had experienced plots like the Gunpowder Plot, this message about hidden treachery would have been very relevant.`,
      'Grade 6-7': `Shakespeare uses Duncan\'s lines as a structural hinge that concentrates the play\'s central preoccupation with the unreliability of surfaces. The statement "There\'s no art to find the mind\'s construction in the face" articulates a philosophical problem - the opacity of consciousness - that the play will dramatise repeatedly. The word "art" is significant: it implies that reading another person\'s intentions would require a special skill or technique, and its absence means that trust is always, inevitably, a gamble. The adjective "absolute" before "trust" intensifies the irony - Duncan\'s trust is not qualified or cautious but total, and it is about to be betrayed for the second time.

The dramatic irony is layered: Duncan speaks these lines about the Thane of Cawdor\'s treachery just as Macbeth - the new Thane of Cawdor - enters. The audience, aware of Macbeth\'s "black and deep desires," perceives the gap between Duncan\'s trusting perception and reality. Shakespeare structures this moment so that Duncan\'s observation about the impossibility of reading faces becomes, ironically, the most truthful thing anyone says in the play - and Duncan is entirely unaware of how immediately it applies to the man before him.

Shakespeare distributes the theme of deception across multiple characters and dramatic modes. The witches establish equivocation as a structural principle: their prophecies are linguistically true but intentionally misleading, demonstrating that language itself can create a false appearance. Lady Macbeth\'s instruction to "look like the innocent flower, but be the serpent under it" translates equivocation from the supernatural to the domestic, using the Edenic imagery of the serpent to link deception with original sin. The play\'s imagery consistently returns to the idea of concealment: "False face must hide what the false heart doth know," Macbeth declares, and the repetition of "false" emphasises that deception corrupts both the surface and the substance.

The banquet scene (Act 3, Scene 4) dramatises the collapse of the appearance Macbeth has constructed. His attempt to perform the role of gracious host - the appearance he is maintaining for his court - is destroyed by the ghost of Banquo, which represents the return of suppressed reality. Lady Macbeth\'s frantic attempts to maintain appearances ("Sit, worthy friends") reveal the effort required to sustain the gap between what is seen and what is known. By Act 5, the theme resolves through inversion: the approaching army disguised with branches from Birnam Wood creates a reality that appears impossible - the wood is moving - but is, in fact, exactly what the witches predicted. Appearance and reality finally coincide, but only in the moment of Macbeth\'s destruction.

Contextually, the theme of equivocation had specific resonance for a Jacobean audience. The Gunpowder Plot trials of 1606 centred on the Jesuit doctrine of equivocation - the idea that one could speak misleading truths under oath - and Shakespeare\'s Porter scene directly references "an equivocator, that could swear in both the scales against either scale." The play connects private deception to public danger, suggesting that the inability to distinguish appearance from reality threatens not just individuals but the state itself.`,
      'Grade 8-9': `Shakespeare constructs this brief utterance as a philosophical axiom that the rest of the play will simultaneously prove and exploit. Duncan\'s observation that "there\'s no art to find the mind\'s construction in the face" articulates what philosophers would later call the problem of other minds - the impossibility of accessing another consciousness through external observation. The word "construction" is particularly resonant: it implies that the mind is not a transparent window but a built thing, an architecture with hidden rooms, and the face is merely its facade. The theatrical metaphor is latent but unmistakable - an actor\'s face conceals the person behind the role, and Shakespeare, writing for a theatre in which boys played women and commoners played kings, was acutely aware that the stage is itself a machine for producing the gap between appearance and reality.

The dramatic irony of the moment operates at several levels. Most immediately, Macbeth enters directly after Duncan\'s lament about the previous Cawdor\'s treachery, inheriting both the title and the pattern of betrayal. But the irony extends further: Duncan\'s statement is empirically correct - you genuinely cannot read someone\'s intentions from their face - yet his response to this insight is not caution but renewed trust. The adjective "absolute" is devastating: having acknowledged the impossibility of certainty, Duncan proceeds to invest total confidence in his next assessment. This is not stupidity but a structural feature of the social world Shakespeare dramatises: political society requires trust, and trust requires the very confidence in surfaces that the play systematically undermines.

The witches' equivocation establishes the play\'s epistemological framework: language in Macbeth does not reveal truth but constructs multiple, incompatible truths simultaneously. "Fair is foul, and foul is fair" is not a statement about morality but about ontology - it announces a world in which categories of evaluation are unreliable, and the confident assignment of value (this is good, this is bad, this person is trustworthy) is always premature. The prophecies that follow are exercises in semantic precision - "none of woman born" is technically accurate, yet it creates a false impression of invulnerability. Shakespeare is not merely dramatising deception but interrogating the relationship between language and truth, suggesting that equivocation is not an aberration of language but its fundamental condition.

Lady Macbeth\'s counsel to "look like the innocent flower, but be the serpent under it" crystallises the play\'s treatment of appearance into a single, powerful instruction. The Edenic imagery is deliberate: the serpent\'s deception of Eve is the originary act of equivocation, the moment when language was first used to create a false appearance of reality. By invoking this myth, Shakespeare connects the Macbeths\' domestic plotting to the cosmic scale of the Fall, suggesting that every act of deliberate deception recapitulates the original sin. The flower-serpent image also functions as a figure for dramatic irony itself - the audience sees the serpent that the other characters mistake for a flower, and this privileged perception is the play\'s primary mechanism of moral instruction.

The play\'s resolution enacts a final, paradoxical alignment of appearance and reality. Birnam Wood\'s approach - soldiers carrying branches - creates an appearance (a moving forest) that fulfils a prophecy the audience assumed was metaphorical. Macduff\'s revelation that he was "from his mother\'s womb untimely ripped" similarly transforms what appeared to be a universal category ("of woman born") into a technical exclusion. In both cases, the witches\' language was accurate all along - the appearance of impossibility was itself the deception. Shakespeare constructs a world in which the truth was always available, encoded in the very words of the prophecy, but could not be perceived because the characters (and the audience) imposed their own expectations onto language. The play\'s ultimate argument about appearance and reality is therefore not simply that surfaces deceive but that we are complicit in our own deception: we see what we expect to see, trust what we want to trust, and the "art" that Duncan lacked is not supernatural insight but the willingness to interrogate our own assumptions.`,
    },
    markScheme: [
      'Analyses how Shakespeare explores appearance versus reality through language and dramatic structure',
      'Closely examines specific words and images in the extract',
      'Traces the theme across the whole play with well-chosen references',
      'Considers relevant context (equivocation, Gunpowder Plot, theatrical conventions)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised, original response to the theme',
    ],
    examinerTips: [
      'OCR rewards close reading of the extract - spend time on individual words.',
      'The theme of appearance versus reality connects to almost everything in the play: witches, kingship, gender, language.',
      "Consider the audience's role: dramatic irony makes the audience see through appearances that characters cannot.",
      'The best responses engage with the idea of equivocation at a linguistic, not just moral, level.',
    ],
  },
  {
    id: 'ocr-lit-modern-1',
    board: 'OCR',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: "An Inspector Calls - Sheila Birling's Development",
    extract: `You\'re pretending everything is just as it was before. I\'m telling you - it isn\'t. And it won\'t be. Not for me. Whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you\'ve stopped. You\'re ready to go on in the same old way.`,
    extractSource: "Written in the style of J.B. Priestley's An Inspector Calls, Act 3",
    question:
      'How does Priestley present Sheila as a character who changes? Explore how Sheila develops in this extract and in the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Sheila has completely changed from the beginning of the play. She is now telling her parents that they cannot pretend nothing happened. She says "You\'re pretending everything is just as it was before" and "it isn\'t." This shows she has learned from the Inspector\'s visit and refuses to go back to her old way of thinking.

The phrase "you began to learn something. And now you\'ve stopped" shows her frustration that her parents have not changed like she has. The short sentences make her sound strong and certain. She accuses them of being "ready to go on in the same old way," which shows she has rejected their values.

At the beginning of the play, Sheila is described as "a pretty girl in her early twenties, very pleased with life." She is excited about her engagement to Gerald and seems childish and spoilt. When she finds out she got Eva Smith fired from a shop because she was jealous, she is immediately upset and takes responsibility, saying "I know I\'m to blame - and I\'m desperately sorry."

This is different from her parents, who try to avoid blame. Sheila learns quickly and even starts to understand the Inspector\'s methods before the others do. She warns Gerald that the Inspector will find out everything anyway. By the end, she has grown from a naive young woman into someone with a strong moral sense.

Priestley uses Sheila to represent hope for the future. As a younger character, she can change and learn, unlike her parents who are stuck in their old ways. Priestley wanted his 1945 audience to be like Sheila - to accept responsibility and build a better society.`,
      'Grade 6-7': `Priestley constructs Sheila\'s development as the play\'s most complete moral arc, moving her from complicity in the capitalist system her family represents to active opposition against it. In this extract, the transformation is announced through a linguistic register entirely different from her opening dialogue. The imperative "I\'m telling you" asserts authority over her parents, inverting the generational hierarchy that the play\'s opening established. The short, emphatic declaratives - "it isn\'t. And it won\'t be. Not for me." - use syntactic simplicity to convey moral certainty, each sentence fragment adding emphasis like hammer blows. The sentence "You began to learn something. And now you\'ve stopped" is the play\'s most devastating indictment of the older generation, compressing an entire trajectory of moral failure into two clauses.

Sheila\'s starting point is carefully established as privileged ignorance rather than malice. The stage direction describes her as "very pleased with life" - a phrase that implies both contentment and complacency, the pleasure of someone who has never been required to examine the conditions of her comfort. Her treatment of Eva Smith - having her fired from Milwards because Eva held a dress against herself and "looked as if she was laughing at me" - reveals not cruelty but an unconscious entitlement that cannot tolerate any challenge to her self-image.

Her response to the Inspector\'s revelation is immediate and visceral - "I\'ll never, never do it again to anybody" - and the repetition of "never" signals genuine emotional engagement rather than the performative regret her parents will later display. Crucially, Sheila begins to understand the Inspector\'s purpose before the other characters: she recognises that he "knows" and tries to prevent Gerald and her mother from incriminating themselves. This perceptiveness marks her development from passive object of the family\'s ambitions (the engagement is clearly a business alliance) to active moral intelligence.

The generational divide is Priestley\'s structural mechanism for expressing his political argument. Sheila and Eric - the younger generation - accept responsibility; Mr and Mrs Birling - the older generation - reject it. Gerald occupies an ambiguous middle position: he shows genuine feeling for Daisy Rensall but ultimately allies himself with the parents\' desire to dismiss the evening. Priestley aligns the audience with Sheila, making her development a model for the response he demands from his 1945 audience: recognition, guilt, and the determination to change. The welfare state being constructed in the post-war period is the political expression of the moral awakening Sheila dramatises.`,
      'Grade 8-9': `Priestley engineers Sheila\'s development as a dramatised conversion - a movement from ideological unconsciousness to critical awareness that functions as both character arc and political instruction manual. In this extract, Sheila has crossed a threshold that her parents cannot or will not cross, and the language registers this transformation with precision. The accusation "You\'re pretending" identifies her parents\' behaviour as performance, a deliberate construction of normality designed to contain the evening\'s revelations within a frame that renders them manageable. The verb "pretending" is significant because it applies to her parents the same strategy of deception that the family employed against Eva - the gap between appearance and reality that the Inspector has spent three acts exposing now characterises the Birlings\' relationship to themselves.

The fragmentary syntax - "it isn\'t. And it won\'t be. Not for me." - performs the breakdown of the family\'s discursive unity. Priestley has structured the play so that the Birlings begin as a syntactic unit, finishing each other\'s sentences, sharing assumptions that do not require articulation. Sheila\'s isolated fragments announce her separation from this collective voice: she now speaks as an individual moral agent rather than as a member of the family. The conjunction "And" at the beginning of a sentence - grammatically unorthodox - creates a cumulative emphasis that mirrors the irreversibility of her change.

The observation "You began to learn something. And now you\'ve stopped" is the play\'s most economical diagnosis of the bourgeois capacity for moral regression. The verb "began" acknowledges that the older Birlings did experience genuine discomfort during the investigation - they were not entirely immune to the Inspector\'s revelations. But "stopped" identifies the mechanism by which privileged people neutralise ethical challenges: they engage with the discomfort just long enough to demonstrate their sensitivity, then retreat to the comfort of their original position. Priestley\'s insight is that this retreat is not passive but active - "You\'re ready to go on in the same old way" - a deliberate choice to prioritise comfort over conscience.

Sheila\'s starting point is essential to understanding the political work her transformation performs. She begins as the archetypal product of her class: materially comfortable, emotionally shallow (her excitement about the engagement ring is presented as consumerist rather than romantic), and casually cruel. Her treatment of Eva at Milwards - motivated by vanity and class entitlement - is not presented as exceptional but as typical, the unremarkable behaviour of someone who has been taught to see working-class women as objects rather than subjects. Priestley ensures that the audience recognises this behaviour not as villainy but as normality, because his argument depends on the recognition that systemic cruelty does not require malicious intent - only the conditions of privilege that make other people\'s suffering invisible.

Her transformation is catalysed not by argument but by empathy - the moment she imaginatively inhabits Eva\'s experience. This is consistent with Priestley\'s broader dramatic philosophy, expressed in his interest in the theories of J.W. Dunne and P.D. Ouspensky, that genuine moral change requires a shift in perception rather than an accumulation of evidence. The Inspector provides evidence; Sheila provides the perceptual shift. Her increasing anticipation of the Inspector\'s revelations demonstrates that once the perceptual shift has occurred, the connections between cause and consequence become visible - she can "see" what her parents cannot because she has accepted the premise that their actions have consequences beyond their immediate circle.

Priestley positions Sheila as the bridge between stage and auditorium. Her transformation models the response he demands from his post-war audience: the recognition that the pre-war social order was not merely flawed but actively destructive, and that returning to "the same old way" - as the older Birlings wish to do, and as many in 1945 wished to do - would constitute a moral failure of historic proportions. The telephone call at the play\'s end - announcing that a real inspector is on the way - is directed at the Birlings but resonates for the audience: the reckoning that Sheila has accepted and her parents have evaded is coming regardless, and the only choice is whether to face it with the honesty of the young or the evasion of the old.`,
    },
    markScheme: [
      "Analyses how Priestley presents Sheila's development through language and dramatic technique",
      'Explores specific language choices in the extract and their effects',
      "Traces Sheila's character arc across the whole play",
      'Considers relevant context (generational divide, 1945 audience, socialism)',
      'Uses well-integrated quotations to support a sustained argument',
      "Develops a conceptualised response about Priestley's purpose in creating this character",
    ],
    examinerTips: [
      "Sheila's development must be traced as a process - show how each stage leads to the next.",
      'The contrast with her parents is essential: use it to structure your argument.',
      "Consider Priestley's purpose: Sheila is a model for the audience.",
      'OCR values close reading - spend significant time on the extract before moving to the wider play.',
    ],
  },
  {
    id: 'ocr-lit-modern-2',
    board: 'OCR',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls - Social Class and Inequality',
    extract: `We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night.`,
    extractSource: "Written in the style of J.B. Priestley's An Inspector Calls, Act 3",
    question:
      'How does Priestley explore ideas about social class and inequality in the play? Use this extract as a starting point and refer to the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, the Inspector delivers his final message about social class and responsibility. He says "We are members of one body" which means all people in society are connected, regardless of their class. The phrase "we are responsible for each other" is a direct statement that rich people should care about poor people. The warning about "fire and blood and anguish" suggests that if the upper classes do not treat working people fairly, there will be terrible consequences like war.

Throughout the play, Priestley shows how the upper class mistreats the working class through Eva Smith\'s story. Mr Birling fires her for asking for a small wage increase. Sheila uses her social position to get Eva fired from a shop. Gerald keeps her as a mistress - using his wealth and status to control her. Mrs Birling refuses her charity because Eva used the Birling name. Eric gets her pregnant and gives her stolen money. Each character uses their class privilege to harm Eva, often without thinking about it.

The Birling family represents the wealthy upper class who believe they are better than working people. Mr Birling says "a man has to look after himself" which shows he does not believe in helping others. Mrs Birling refers to Eva as "a girl of that sort," showing she sees working-class people as inferior.

Priestley wrote the play in 1945 when Britain was building the welfare state after the war. He wanted to show that the old class system, where the rich ignored the poor, was wrong and needed to change. The Inspector represents Priestley\'s own socialist beliefs that everyone should be treated equally and cared for.`,
      'Grade 6-7': `Priestley uses the Inspector\'s final speech as the rhetorical climax of a play that has systematically exposed the mechanisms by which class privilege produces and conceals suffering. The declaration "We are members of one body" invokes both the Christian corpus mysticum and the socialist concept of solidarity, deliberately fusing religious and political language to appeal to the broadest possible audience. The warning about "fire and blood and anguish" functions as prophecy for the 1912 characters and historical fact for the 1945 audience, exploiting dramatic irony to demonstrate that the consequences of class division are not hypothetical but proven.

Priestley structures the play so that each Birling\'s interaction with Eva Smith exposes a different mechanism of class oppression. Mr Birling\'s dismissal of her wage request represents economic exploitation - the straightforward extraction of profit from labour. Sheila\'s actions at Milwards represent social power - the ability of the consumer class to destroy livelihoods through caprice. Gerald\'s relationship represents sexual exploitation enabled by economic inequality - his "kindness" to Eva is inseparable from the power differential that makes her dependent on him. Mrs Birling\'s refusal at the charity represents institutional gatekeeping - the control of social safety nets by the very class whose behaviour creates the need for them. Eric\'s assault represents the ultimate expression of entitled masculinity - the assumption that class and gender privilege grant access to working-class women\'s bodies.

The chain of causation is crucial to Priestley\'s argument about class. No single Birling destroyed Eva; rather, the cumulative effect of a system in which each person exercises their class privilege "normally" produces a fatal result. This is the play\'s most radical insight: the Birlings are not exceptional villains but representative figures whose everyday behaviour within a stratified society has lethal consequences. Priestley ensures that the audience recognises themselves in the Birlings - not in the specifics of their actions but in the structural position they occupy.

The generational response to the Inspector maps onto Priestley\'s political optimism. Mr and Mrs Birling\'s refusal to change represents the entrenched upper class; Sheila and Eric\'s moral awakening represents the possibility of generational progress. Priestley, writing in 1945 as the Labour Party won its landslide election victory, saw the welfare state as the political equivalent of Sheila\'s transformation - a collective acceptance of responsibility that the Inspector\'s speech demands. The play\'s setting in 1912 allows Priestley to demonstrate what happens when that acceptance is refused: the "fire and blood" of two world wars, which the audience has already survived and which the Birlings, frozen in their complacency, cannot yet imagine.`,
      'Grade 8-9': `Priestley constructs the play as a dramatic experiment in making visible the invisible architecture of class. The Inspector\'s closing declaration - "We are members of one body" - is the thesis statement of a work that has spent three acts demonstrating its truth through the Birlings\' inability to perceive it. The genius of Priestley\'s structure is that each revelation forces the audience to trace a causal chain that the characters themselves refuse to acknowledge: the connection between Mr Birling\'s wage decision and Eva\'s death is obvious to the audience but invisible to Birling, because class operates precisely by obscuring the relationship between privilege and suffering.

The metaphor of "one body" is carefully chosen. It invokes the medieval concept of the body politic - the idea that society is an organism in which each member has a function and a responsibility to the whole - but it also echoes the Christian doctrine of the corpus mysticum, in which the Church is understood as the living body of Christ. Priestley secularises both traditions: his "body" is neither political nor spiritual but social, a network of interdependence that exists whether or not its members acknowledge it. The genius of the metaphor is that it describes a fact, not an aspiration - the Birlings are already "members of one body" with Eva Smith, connected by economic chains they have chosen not to see. The Inspector does not create these connections; he reveals them.

Priestley\'s analysis of class operates through the concept of what might be called structural violence - harm that is produced not by individual malice but by the normal functioning of social systems. Each Birling\'s interaction with Eva is, by the standards of their class and time, unremarkable: employers dismiss troublesome workers; customers complain about shop assistants; wealthy men take working-class mistresses; charitable organisations apply their criteria; young men of good family behave badly. The play\'s moral force derives from the aggregation of these "normal" acts into a fatal sequence, demonstrating that a social system built on class inequality produces death as a routine by-product, not an exceptional outcome.

The class dynamics of the play extend beyond the Birlings\' treatment of Eva to encompass the relationships between the characters themselves. The engagement of Sheila and Gerald is explicitly a class alliance - Birling hopes it will lead to a merger between "Crofts Limited" and his own firm, confessing that he looks forward to a time "when Crofts and Birlings are no longer competing but are working together." Marriage, in this framework, is an instrument of capital accumulation, and Sheila\'s feelings are subordinate to her economic function. Gerald\'s class position subtly exceeds the Birlings\' - his family are landed gentry rather than industrial bourgeoisie - and the social aspiration this differential produces in Mr Birling reveals that class operates not only between the wealthy and the poor but within the gradations of privilege itself.

Mrs Birling\'s behaviour at the charity is Priestley\'s most precise dramatisation of how institutional power reinforces class hierarchy. Her refusal to help Eva is based not on resource constraints but on social judgement - Eva used the name "Birling," an act that Mrs Birling considers presumptuous. The class offence is not that Eva needed help but that she claimed a connection to a family above her station. Mrs Birling\'s charity does not exist to alleviate poverty but to police the boundaries of class, and her position as chair gives her the institutional authority to enforce those boundaries with lethal consequences.

The play\'s temporal structure - written in 1945, set in 1912 - is itself a class argument. Priestley positions his audience at a historical vantage point from which they can see that the comfortable world of the Birlings was built on foundations that would produce two world wars and a depression. The "fire and blood and anguish" the Inspector prophesies is not divine punishment but the historical consequence of a class system that concentrates wealth while distributing suffering. By making this consequence visible through the play\'s dual time frame, Priestley transforms a domestic drama into an argument for systemic change - not charity, which the play treats as an instrument of class control, but structural transformation of the kind the 1945 Labour government was attempting to implement through the welfare state, the NHS, and the nationalisation of key industries. The Inspector\'s final word - "Good night" - is both a farewell and a warning: the night he describes, of social catastrophe produced by class indifference, has already fallen once and will fall again unless the lesson is learned.`,
    },
    markScheme: [
      'Analyses how Priestley presents social class and inequality through language, character, and structure',
      'Explores specific language choices in the extract',
      'Discusses class across the whole play, covering multiple characters and their roles',
      'Considers relevant context (1912 vs 1945, socialism, welfare state, class structure)',
      'Uses well-integrated quotations to support a sustained argument',
      'Develops a conceptualised response linking individual behaviour to systemic inequality',
    ],
    examinerTips: [
      'Each Birling represents a different aspect of class power - use this to structure your argument.',
      'The dual time setting is essential context - always consider both 1912 and 1945.',
      'OCR expects detailed close reading of the extract as well as wider knowledge of the play.',
      'The best answers connect individual actions to systemic structures rather than treating them in isolation.',
    ],
  },
  {
    id: 'ocr-lit-poetry-anth-1',
    board: 'OCR',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Anthology - Time and Memory',
    extract: `Poem A - "Hour" by Carol Ann Duffy (extract):\n"Love\'s time\'s beggar, but even a single hour,\nbright as a dropped coin, makes love rich.\nWe find an hour together, spend it not on flowers\nor wine, but the whole of the summer sky and a grass ditch."\n\nCompare with one other poem from the anthology.`,
    extractSource: 'Poetry anthology extract',
    question:
      'Compare how poets present the relationship between time and human emotion in "Hour" and one other poem from the anthology. (40 marks)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Hour" by Carol Ann Duffy and "Sonnet 43" by Elizabeth Barrett Browning explore how love relates to time, but they do so in different ways.

In "Hour," Duffy writes about how a single hour of love can feel incredibly valuable. The metaphor "Love\'s time\'s beggar" means that love is always at the mercy of time - there is never enough of it. But the simile "bright as a dropped coin" turns a small amount of time into something precious and shining. The word "bright" suggests happiness and value. The couple do not spend their hour on expensive things like "flowers or wine" but on natural things like "the whole of the summer sky and a grass ditch." This shows that love does not need material things to be rich - it transforms ordinary time into something extraordinary.

In "Sonnet 43," Browning writes about a love that seems to exist outside time altogether. She says "I love thee to the depth and breadth and height my soul can reach," using spatial metaphors that suggest her love has no limits. When she writes "I love thee with the breath, smiles, tears, of all my life," she connects love to every moment of her existence. The phrase "all my life" suggests love fills every second of time.

Both poets present love as something that transforms time. Duffy shows a single hour becoming rich and valuable, while Browning shows love filling an entire lifetime. Duffy focuses on the scarcity of time, while Browning writes as though time is infinite when filled with love.`,
      'Grade 6-7': `Duffy and Browning both explore the paradox of love\'s relationship to time - its apparent helplessness before time\'s power and its capacity to transcend temporal limitation - but their strategies for resolving this paradox diverge significantly.

Duffy\'s "Hour" begins with a compressed metaphor: "Love\'s time\'s beggar." The double possessive creates a syntactic chain of dependency - love belongs to time, and time reduces love to a state of supplication. Yet the volta arrives immediately: "but even a single hour, / bright as a dropped coin, makes love rich." The economic metaphor transforms scarcity into wealth through an act of imaginative revaluation: the hour is "dropped" - found, accidental, seemingly insignificant - but its brightness makes it valuable. The allusion to the Midas myth ("Midas light") that runs through the poem suggests that love possesses an alchemical power to transform the base metal of time into gold, but unlike Midas, this transformation produces not cursed isolation but genuine richness.

The couple\'s rejection of "flowers or wine" in favour of "the whole of the summer sky and a grass ditch" articulates a counter-economy in which value is measured by attention rather than expenditure. The juxtaposition of "summer sky" (vast, beautiful) with "grass ditch" (small, mundane) insists that love\'s transformative power operates on the ordinary as readily as the sublime. This is Duffy\'s central argument: time is not the enemy of love but its medium, and a single hour, fully inhabited, contains as much emotional richness as a lifetime of distraction.

Browning\'s "Sonnet 43" approaches the time-love relationship from the opposite direction. Where Duffy concentrates love into a single hour, Browning expands it across all dimensions. The spatial metaphors - "depth and breadth and height" - refuse temporal limitation by converting time into space, as though love can be measured in cubic metres rather than minutes. The phrase "by sun and candle-light" spans the entire diurnal cycle, suggesting continuous, unbroken devotion. The poem\'s final declaration - "I shall but love thee better after death" - makes the most radical claim of all: love will outlast mortality, extending beyond the temporal frame altogether.

The formal contrast between the poems is revealing. Duffy\'s Shakespearean sonnet, with its volta and resolution, dramatises the moment of transformation - the turn from "beggar" to "rich" - while Browning\'s Petrarchan sonnet, with its seamless development, presents love as already established and permanent. Duffy writes from within time, finding richness in a single hour; Browning writes from a position that claims to be already outside time, looking back on a love whose permanence is assumed. Both poets ultimately suggest that love\'s value is not diminished by temporal limitation but defined by it - it is precisely because the hour is finite that it is bright, and precisely because life ends that love must be declared infinite.`,
      'Grade 8-9': `Duffy and Browning both confront the fundamental incompatibility between love\'s subjective experience of timelessness and time\'s objective indifference to human feeling, but they resolve this tension through radically different formal and philosophical strategies.

Duffy\'s opening - "Love\'s time\'s beggar" - compresses into four words a relationship that the Petrarchan tradition has spent centuries elaborating. The double genitive is syntactically dense: love possesses time\'s beggar, or love is the beggar of time, or love belongs to time and is made a beggar by it. This grammatical ambiguity is deliberate - it mirrors the instability of love\'s temporal position, simultaneously subject and object, possessor and possessed. The immediate counterclaim - "but even a single hour, bright as a dropped coin, makes love rich" - performs the alchemical transformation that is the poem\'s central conceit. The simile "bright as a dropped coin" is precisely chosen: a dropped coin is found by accident, it glints momentarily before being picked up, and its value is predetermined rather than earned. The hour of love shares all these properties - it is unexpected, transient, and valuable not because of what the lovers do with it but because of what love does to it.

The poem\'s rejection of conventional romantic tokens - "not on flowers / or wine" - is not mere anti-materialism but an epistemological claim about the relationship between attention and time. Flowers wilt; wine is consumed; both are destroyed by time. But "the whole of the summer sky and a grass ditch" cannot be used up because they are not possessions but perceptions. Duffy argues that love defeats time not by slowing it or escaping it but by intensifying the quality of experience within it - making each moment so perceptually rich that its duration becomes irrelevant. The juxtaposition of "summer sky" (infinite, elevated) with "grass ditch" (finite, lowly) insists that this intensification is indiscriminate: love does not select beautiful objects to contemplate but beautifies whatever it contemplates.

Browning\'s strategy is architecturally different. Where Duffy concentrates, Browning expands, and her expansion operates through the systematic conversion of quality into quantity. "How do I love thee? Let me count the ways" establishes a mathematical framework that the poem simultaneously fulfils and overwhelms - the "ways" cannot, in fact, be counted, and the attempt to enumerate them produces not a finite list but an infinite series. The spatial metaphors - "depth and breadth and height" - extend love into three physical dimensions, but the qualifying clause "when feeling out of sight / For the ends of being and ideal grace" pushes beyond the physical into the metaphysical, reaching for a transcendence that spatial language cannot contain. This is the poem\'s formal paradox: it uses the language of measurement to describe the immeasurable, and the inadequacy of its own vocabulary becomes the proof of love\'s excess.

The poems\' respective treatments of death crystallise their philosophical divergence. Browning\'s "I shall but love thee better after death" makes an absolute claim - love not only survives death but improves, as though mortality is a refinement rather than a termination. This is a profoundly Christian assertion, locating the perfection of love in the afterlife and rendering earthly time a mere prelude. Duffy makes no such claim. Her poem\'s power lies precisely in its acceptance of temporal limitation - the hour will end, and the poem offers no consolation beyond the brightness of the hour itself. This is a secular poetics of love, one that finds sufficiency in the present moment rather than projecting fulfilment into eternity.

Both poems ultimately reveal that the relationship between time and emotion is not one of opposition but of mutual definition. Love does not exist despite time or outside it but through it - shaped by its pressure, intensified by its scarcity, made articulate by the urgency of its passing. Duffy and Browning represent two responses to this realisation: one grasps the moment; the other reaches for forever. Neither resolution is final, and the fact that poets continue to write about love and time suggests that the tension between them is not a problem to be solved but a condition to be inhabited.`,
    },
    markScheme: [
      'Compares how both poets present the relationship between time and emotion',
      'Analyses specific language, form, and structural techniques in both poems',
      'Maintains a comparative structure throughout',
      'Considers relevant contextual factors for both poets',
      'Uses well-integrated quotations from both poems',
      'Develops a conceptualised, original argument about both texts',
    ],
    examinerTips: [
      'OCR awards high marks for perceptive, original comparisons - go beyond the obvious.',
      "Compare methods as well as themes: how does each poem's form shape its argument?",
      'Consider what the poems disagree about as well as what they share.',
      'Contextual knowledge should enhance analysis, not substitute for it.',
    ],
  },
  {
    id: 'ocr-lit-unseen-1',
    board: 'OCR',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `The Supermarket at Midnight\n\nThe aisles are empty now, the music off.\nA man in a blue tabard mops the floor\nin long, unhurried arcs, the way a priest\nmight swing a censer through a darkened church.\n\nThe fruit gleams under lights that never sleep.\nBananas curve like questions no one asked.\nA pyramid of tins stands guard\nover nothing anyone would want to steal.\n\nSomewhere, a freezer hums a single note -\na sound so constant it becomes a silence,\nthe way a life, lived quietly enough,\ncan disappear without anyone noticing it has gone.`,
    extractSource: 'Original poem written for this exercise',
    question:
      'Explore how the poet uses language and imagery to create meaning in "The Supermarket at Midnight." (24 marks)',
    marks: 24,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet uses language and imagery to make an ordinary supermarket seem meaningful and almost sacred. In the first stanza, the man mopping the floor is compared to "a priest" swinging "a censer through a darkened church." This simile makes the boring act of cleaning seem like a religious ceremony, which makes the reader see the supermarket in a new way. The word "unhurried" suggests calmness and peace.

In the second stanza, the bananas "curve like questions no one asked," which is an unusual simile that makes the fruit seem lonely or forgotten. The tins stand "guard over nothing anyone would want to steal," which is funny because it suggests the supermarket is protecting worthless things, as if everything is pointless at night.

The final stanza compares the freezer\'s humming to silence - "a sound so constant it becomes a silence." This oxymoron suggests that when something is always there, you stop noticing it. The poet then extends this idea to human life: "the way a life, lived quietly enough, can disappear without anyone noticing it has gone." This is a sad ending that compares a quiet life to the freezer\'s hum - always there but unnoticed. The poem seems to be about how ordinary people and ordinary places can be overlooked.`,
      'Grade 6-7': `The poet transforms the supermarket - perhaps the most mundane of modern spaces - into a site of philosophical meditation, using the emptiness of midnight to expose the meanings that daylight commerce conceals.

The opening stanza establishes the supermarket as a space evacuated of its usual purpose. "The aisles are empty now, the music off" - the absence of shoppers and background music strips the environment to its physical essentials, and into this void the poet introduces an unexpected comparison. The cleaner mopping in "long, unhurried arcs" is likened to "a priest" swinging "a censer through a darkened church," a simile that sacralises the mundane. The verb "swing" and the adjective "unhurried" attribute to the cleaning a deliberate, ritualistic quality, suggesting that all repetitive labour possesses a kind of devotional dignity. The qualification "might" - "the way a priest might" - introduces a note of tentativeness that prevents the comparison from becoming heavy-handed.

The second stanza deploys two conceits that hover between the comic and the profound. "Bananas curve like questions no one asked" anthropomorphises the fruit through its shape - the curve of a banana does resemble a question mark - but the metaphor extends beyond visual resemblance. An unasked question is a thought that remained unexpressed, and the bananas become emblems of suppressed curiosity, decorative but unanswered. The "pyramid of tins" that "stands guard / over nothing anyone would want to steal" inverts the logic of security: the tins are arranged as if protecting something precious, but their vigil is for goods of negligible value. The comic bathos masks a serious point - much of what we guard most carefully is, in the end, not worth guarding.

The final stanza achieves the poem\'s deepest insight through a chain of comparison. The freezer\'s hum - "a single note" - becomes silence through constancy, and this paradox is then extended to human existence: "a life, lived quietly enough, / can disappear without anyone noticing it has gone." The enjambment across the final two lines delays the word "gone," making its arrival feel like an actual disappearance. The poem\'s emotional weight is concentrated in this closing image, which transforms the supermarket cleaner from a background figure into a representative of all those whose quiet labour sustains the world without being seen. The entire poem functions as an act of noticing what is usually unnoticed - a poetic equivalent of the midnight visit that reveals what daylight hides.`,
      'Grade 8-9': `The poem performs an act of defamiliarisation in the Shklovskian sense - it takes the most habitual of environments and renders it strange, not through surreal distortion but through the simple expedient of removing the people and purposes that normally define it. The supermarket at midnight is the same space as the supermarket at midday, yet the absence of shoppers and commerce reveals a different set of meanings, as if the building has shed its daytime function and stands exposed as pure structure, awaiting interpretation.

The opening simile - the cleaner as priest, the mop as censer - is the poem\'s foundational conceit, and its success depends on the precision of the comparison. Both acts are ritual: repetitive, purposeful, and performed in a space made sacred (or at least significant) by its architecture. The phrase "long, unhurried arcs" captures the physical motion of mopping with cinematographic precision, and the adjective "unhurried" is the stanza\'s emotional key - it attributes to the cleaner a quality of patience that transforms labour from drudgery into something approaching contemplation. The word "darkened" applies to the church but resonates with the supermarket\'s reduced lighting, creating a visual continuity between the two spaces that supports the conceptual comparison. The simile argues, implicitly, that all spaces are sanctified by the care invested in them, and that the distinction between sacred and profane is a function of attention rather than architecture.

The second stanza shifts from the sacred to the absurd, deploying two images that operate in the gap between appearance and significance. "Bananas curve like questions no one asked" is the poem\'s most formally adventurous line: it transforms a visual observation (bananas are curved) into an existential statement (there are questions that remain unposed), and the transition is so smooth that the reader barely notices the leap from the concrete to the abstract. The "pyramid of tins" standing "guard / over nothing anyone would want to steal" inverts the commercial logic that built the pyramid in the first place - by day, the arrangement is a marketing strategy; by night, stripped of its audience, it becomes an unintentional monument to the absurdity of abundance. The enjambment that isolates "over nothing" at the line break creates a pause in which the reader registers the void before the qualifying clause arrives.

The final stanza completes the poem\'s movement from observation through absurdity to elegy. The freezer\'s hum - "a single note" that "becomes a silence" - introduces a paradox about the relationship between constancy and perception: a sound that never changes ceases to be heard, not because it has stopped but because the ear has adapted. The poem then performs its most ambitious extension: "the way a life, lived quietly enough, / can disappear without anyone noticing it has gone." The subject of this comparison is simultaneously the cleaner, the freezer, the bananas, and anyone whose existence unfolds below the threshold of social visibility. The adverb "quietly" is the line\'s most important word - it identifies not volume but manner, suggesting that it is not the scale of a life but its mode that determines its visibility. The verb "disappear" is reflexive - the life does not die or end but disappears, a word that implies the observer\'s failure as much as the subject\'s cessation.

The poem\'s final line - "without anyone noticing it has gone" - achieves a devastating effect through its tense structure. "Has gone" is the present perfect, denoting an action completed in the recent past whose effects persist into the present, and the phrase "without anyone noticing" creates a gap between the event and its perception that is the poem\'s real subject. The supermarket at midnight is a figure for everything that exists without being observed, performs without being acknowledged, and ends without being mourned - and the poem itself, by noticing what it describes as unnoticed, performs the act of attention it identifies as absent, making the reader complicit in a recognition that comes, like all the poem\'s recognitions, just too late.`,
    },
    markScheme: [
      'Analyses how the poet uses language and imagery to create meaning',
      'Explores the effects of specific similes, metaphors, and word choices',
      "Comments on structure, form, and the poem's overall movement",
      "Develops a personal interpretation with reference to the poem's themes",
      'Uses well-selected, embedded quotations',
      'Writes with analytical precision and clarity',
    ],
    examinerTips: [
      'For OCR unseen poetry, you have significant time - use it for careful, detailed reading.',
      "Comment on the poem's development from beginning to end.",
      "The best responses identify the poem's central argument or insight and trace how it builds.",
      "Do not list techniques - analyse how specific choices contribute to the poem's meaning as a whole.",
    ],
  },
  {
    id: 'ocr-p1-desc-1',
    board: 'OCR',
    paper: 1,
    type: 'Creative Writing (Descriptive)',
    difficulty: 'Higher',
    title: 'Describe a space that holds significance',
    extract: ``,
    question:
      'Write a descriptive piece about a space that holds meaning for you. Your writing should convey both what the space looks like and what it means to you. (400-500 words)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `The old library was my sanctuary. It was a large room on the second floor with tall windows that let in streams of afternoon light. Shelves stretched from floor to ceiling, packed with thousands of books. There was a smell of old paper and dust that I found comforting. In the corner near the window was my favourite armchair covered in dark green velvet. Nobody else ever sat there. I would spend hours there after school reading or looking out at the street below. The librarian, Mrs Chen, always made sure the cushion was ready for me. The room felt separate from the world - warm, safe, full of stories. When I was there, I didn\'t have to think about anything else. The books seemed to hold answers to questions I was afraid to ask aloud.`,
      'Grade 6-7': `The old library was my sanctuary - a space apart. Situated on the second floor of the town centre, it was a large rectangular room with tall sash windows facing the street. During late afternoon, when the sun angled through the western windows, light would strike the dust motes suspended in air, transforming them into a luminous cloud existing outside time. The shelves - dark wood, Victorian era - stretched from floor to ceiling on every wall except the one facing the windows. Thousands of books occupied these shelves, their spines faded by decades of light exposure: reds become russets, blues become slate. The air held the distinctive olfactory signature of a working library: sweet, slightly musty scent of ageing paper, overlaid with the metallic tang of dust. In the corner formed by the window wall and eastern bookshelves stood an armchair upholstered in dark green velvet, worn at the arms where countless hands had rested. This was my designated spot, though no plaque announced it. The librarian, Mrs Chen, had recognised my need for refuge and tacitly approved my occupation of this chair. The room functioned as a threshold space - neither entirely interior nor exterior, neither fully social nor solitary. The windows opened onto the street, yet the books created acoustic insulation muffling traffic below. I would sit in that chair in late afternoons, light gradually shifting as the sun moved westward, and in that liminal space between day and evening, I discovered that silence could be speech, and being understood could mean being left alone.`,
      'Grade 8-9': `The library was a threshold space - positioned at that exact point where private refuge becomes public institution, where interior life finds its architectural correlative. Located on the second floor of the town centre, it was a large rectangular chamber whose proportions created an acoustic envelope quite distinct from street-level commercial spaces below. The windows - tall sash windows along the western wall - operated as a selective portal: they admitted light and the abstract knowledge of the street\'s existence without requiring actual engagement with it. During late afternoon, when the sun descended to a particular angle of incidence, light would enter nearly horizontally, and billions of dust particles suspended in air would become visible as a three-dimensional scattering medium, the light itself made phenomenologically present through the matter it illuminated. The bookshelves - constructed of dark wood probably oak, though original colour had darkened to something closer to walnut - occupied every wall except the one containing windows. These shelves, rising from ankle-height to above-head-height, created intimate crowding; the books themselves bore witness to accumulated time through their material degradation: spines faded by photodegradation, pages yellowed by oxidation, cloth covers worn at creases where they had been opened thousands of times. The air maintained a persistent olfactory signature - the faintly sweet, slightly cloying scent of cellulose degradation mixed with fungal and bacterial colonisation of organic substrate, a smell that chemically registers as "age" to human sensory apparatus. The armchair - upholstered velvet piece dating probably from the 1950s, its grey-green having taken on the patina of extended contact with human skin-oils - occupied the corner formed by window wall and eastern bookshelves. Mrs Chen, the librarian, had with remarkable psychological acuity identified the spatial requirements of a particular type of refuge-seeker, and had implicitly designated this chair as my territory. The room functioned as a kind of hyper-civilised cave: it was interior, yet the windows created visual connection to external world; it was social (other people came and went; Mrs Chen worked at circulation desk), yet one could remain fundamentally solitary within it; it was dedicated to transmission of cultural content through texts, yet the primary function it performed for me was pre-linguistic - the experience of being in a space where the demand for performance, for social participation, for embodied presence required in the street below, was simply suspended. The library taught me something fundamental about space and consciousness: that refuge is not isolation, that understanding can mean respecting someone\'s need for silence, and that architecture, when it attends carefully enough to human need, can become a kind of language itself.`,
    },
    markScheme: [
      'Creates vivid, detailed description of space',
      'Uses sophisticated vocabulary and varied sentence structures',
      'Conveys personal meaning and emotional significance',
      'Employs literary techniques (imagery, metaphor, sensory detail)',
      'Sustains consistent tone and perspective',
      'Demonstrates control of spelling, punctuation, grammar',
    ],
    examinerTips: [
      "Show, don't tell - use specific sensory details to reveal meaning.",
      'Vary sentence length and structure for impact.',
      'Personal significance should emerge through description, not statement.',
      'Consider how space affects emotion, memory, identity.',
    ],
  },
]
