// @ts-nocheck
// ─── Practice question bank: AQA GCSE ────────────────────────────────────────
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

export const aqaPracticeQuestions: PracticeQuestion[] = [
  {
    id: 'p1-lang-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Language Analysis (Q2)',
    difficulty: 'Foundation',
    extract: `The morning fog crept across the marshes like a living thing, its cold fingers probing every hollow and ditch. Pip shivered and pulled his thin coat tighter, but nothing could keep out the chill that seemed to rise from the very earth beneath his feet. The churchyard stones stood like broken teeth in the grey half-light, each one marking a life that had ended in this desolate place.`,
    extractSource: 'Adapted from Charles Dickens, Great Expectations',
    question:
      "How does the writer use language to create a sense of fear and discomfort in this extract? You could include the writer's choice of words and phrases, language features and techniques, and sentence forms.",
    modelAnswers: {
      'Grade 4-5': `The writer uses personification when the fog "crept across the marshes like a living thing" which makes it seem threatening and alive. The word "crept" suggests something sneaky and dangerous. The writer also uses a metaphor when describing the fog's "cold fingers probing every hollow," which makes the fog seem like it is searching for Pip, creating fear. The simile comparing gravestones to "broken teeth" makes the churchyard sound ugly and frightening. The word "desolate" means lonely and empty, which adds to the uncomfortable feeling.`,
      'Grade 6-7': `Dickens personifies the fog as a predatory, sentient force, describing it as "a living thing" with "cold fingers probing every hollow and ditch." The verb "probing" implies an invasive, deliberate searching, as though the landscape itself is hostile. This pathetic fallacy establishes nature as an antagonist. The simile "stood like broken teeth" transforms the gravestones into something grotesque and decayed, the adjective "broken" suggesting violence and neglect. Dickens layers discomfort through tactile imagery - "shivered," "thin coat," "chill" - creating a cumulative physical unease that mirrors Pip's vulnerability. The final noun phrase "this desolate place" anchors the paragraph in isolation, the demonstrative "this" forcing proximity between reader and setting.`,
      'Grade 8-9': `Dickens constructs an atmosphere of existential dread through sustained personification of the natural world as a malevolent intelligence. The fog does not simply exist - it "crept" and its "cold fingers" are "probing," verbs that suggest both stealth and violation. The progressive movement from external threat ("across the marshes") to bodily invasion ("the very earth beneath his feet") dramatises Pip's powerlessness as the hostile environment closes in on him. The simile comparing gravestones to "broken teeth" operates on multiple levels: the visual resemblance creates a visceral, almost corporeal image of the graveyard as a monstrous mouth, while the adjective "broken" encodes both physical decay and the shattered lives they represent. Dickens's syntax reinforces vulnerability - the short declarative "Pip shivered" is swallowed by the longer qualifying clause, just as Pip himself is overwhelmed by his surroundings. The final phrase, "this desolate place," with its deictic "this," collapses the distance between reader and text, demanding that we inhabit Pip's fear rather than merely observe it.`,
    },
    markScheme: [
      'Identifies relevant language features (simile, metaphor, personification)',
      'Analyses the effect of specific words and phrases',
      'Comments on how language creates mood/atmosphere',
      'Uses subject terminology accurately',
      'Embeds quotations rather than bolt-on',
    ],
    examinerTips: [
      'Start with the overall effect before zooming into specific words.',
      'Use "the verb/adjective/noun X suggests..." rather than "the writer uses a metaphor."',
      "Always explain WHY a technique creates an effect - don't just spot it.",
    ],
  },
  {
    id: 'p1-lang-2',
    board: 'AQA',
    paper: 1,
    questionType: 'Language Analysis (Q2)',
    difficulty: 'Higher',
    extract: `She was not beautiful in any conventional sense. Her face was too angular, her mouth too wide, her eyes set too deep beneath brows that seemed permanently raised in a question that nobody had yet answered. But when she entered a room, the air changed. Conversations faltered. Men who had been holding forth on matters of great importance suddenly lost the thread of their arguments and stood foolishly, mid-sentence, watching her cross the floor with the grace of someone who had never once doubted where she was going.`,
    extractSource: 'Original composition in the style of literary fiction',
    question: 'How does the writer use language to present the woman as a powerful figure?',
    modelAnswers: {
      'Grade 4-5': `The writer shows the woman is powerful by describing her effect on other people. When she enters a room "conversations faltered" and men "lost the thread of their arguments." This shows she has power over people without even trying. The writer uses the phrase "the grace of someone who had never once doubted where she was going" which shows she is confident and sure of herself. The word "grace" suggests she moves beautifully and smoothly. The adverb "foolishly" makes the men seem weak compared to her.`,
      'Grade 6-7': `The writer constructs the woman's power through her effect on others rather than through direct description. The opening sentence - "She was not beautiful in any conventional sense" - uses the negative construction to immediately challenge the reader's expectations, implying that her power transcends physical appearance. The tricolon of "too angular," "too wide," "too deep" initially frames her features as flaws, but the repeated "too" paradoxically emphasises their distinctiveness rather than their inadequacy. Her impact is conveyed through the reactions of those around her: conversations "faltered" - a verb suggesting involuntary weakness - and men "stood foolishly, mid-sentence," the interrupting comma mimicking the disruption she causes. The final image of movement "with the grace of someone who had never once doubted" attributes her power to absolute self-possession, the adverb "never" and "once" intensifying the certainty.`,
      'Grade 8-9': `The writer constructs female power as something that cannot be contained by conventional frameworks of beauty or language. The opening negative - "not beautiful in any conventional sense" - performs a double function: it denies the male gaze its usual vocabulary while simultaneously drawing attention to the inadequacy of that vocabulary. The tricolon cataloguing her features ("too angular," "too wide," "too deep") employs the adverb "too" not as genuine criticism but as a marker of excess that refuses to conform to normative standards. Her brows seem "permanently raised in a question that nobody had yet answered" - this is not insecurity but intellectual challenge, the temporal "yet" implying that others have failed her, not the reverse. The syntactic shift at "But when she entered a room" pivots the paragraph from static description to dynamic effect. The short declaratives - "The air changed. Conversations faltered." - enact the disruption they describe, their brevity cutting through the elaborate preceding sentence. The men, previously "holding forth on matters of great importance," are reduced to standing "foolishly, mid-sentence" - the parenthetical "mid-sentence" brilliantly capturing the moment of fracture. Her power is ultimately located not in beauty but in certainty: the final clause, "the grace of someone who had never once doubted where she was going," uses the pluperfect to suggest a lifetime of self-assurance, while the word "grace" reclaims a term usually applied to passive femininity and charges it with purpose and direction.`,
    },
    markScheme: [
      'Analyses how the writer presents power through indirect characterisation',
      'Comments on sentence structure and its effects',
      'Explores the connotations of individual words',
      'Considers how the reader is positioned',
      'Uses sophisticated analytical vocabulary',
    ],
    examinerTips: [
      'Consider what the writer does NOT say as well as what they do.',
      'Comment on sentence structure, not just word choice.',
      'Show awareness of how the reader is being manipulated.',
    ],
  },
  {
    id: 'p1-struct-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Structure Analysis (Q3)',
    difficulty: 'Foundation',
    extract: `At first, the house seemed ordinary enough. A red door, a brass knocker, a welcome mat that said WELCOME in cheerful block letters. The windows reflected the afternoon sun and the garden was neat, if unimaginative - a row of marigolds, a square of lawn.\n\nBut as Tom walked up the path, he noticed something odd. One of the upstairs curtains twitched, though no one was supposed to be home. The welcome mat, he now saw, was turned at an angle, as if someone had left in a hurry. Or arrived.\n\nThe door was already open. Not wide - just an inch. Enough to see the darkness inside. Enough to know that stepping through it would change everything.`,
    extractSource: 'Original composition',
    question:
      'How has the writer structured the text to interest you as a reader? You could write about what the writer focuses your attention on at the beginning, how and why the writer changes this focus as the text develops, and any other structural features that interest you.',
    modelAnswers: {
      'Grade 4-5': `At the beginning, the writer focuses on making the house seem normal and safe. Words like "ordinary," "cheerful" and "neat" make the reader feel comfortable. The paragraph describes things you would expect to see at any house. In the second paragraph, the focus shifts to things that are wrong. The curtain "twitched" even though nobody should be home, and the mat is at an angle. The word "But" at the start signals this change clearly. By the end, the tension has built up and the open door creates a cliffhanger. The short sentences "Not wide - just an inch" slow the reader down and create suspense. The final sentence makes us want to read on.`,
      'Grade 6-7': `The writer structures the text as a movement from normality to unease, using a carefully controlled shift in focus. The opening paragraph establishes a deliberately mundane setting through the listing of domestic details - "A red door, a brass knocker, a welcome mat." The use of declarative fragments creates a snapshot effect, inviting the reader to construct a picture of safety. The phrase "if unimaginative" adds a note of mild dismissiveness that reinforces the ordinariness. The second paragraph pivots on the adversative "But," signalling a disruption. The writer narrows the focus from the general scene to specific unsettling details: the twitching curtain, the angled mat. The past participle "turned" is ambiguous - passive voice withholds who or what caused it - and the final fragment "Or arrived" is structurally isolated for maximum impact, reversing the reader's assumption and reframing the scene. The final paragraph accelerates the shift through increasingly short sentences. "Not wide - just an inch" uses the dash to create a pause that mimics the tentative opening of the door. The closing sentence, with its abstract noun "everything," elevates the domestic into the ominous, using the future conditional to create a cliffhanger that compels continued reading.`,
      'Grade 8-9': `The extract is structured as a carefully orchestrated collapse of the domestic into the uncanny. The opening paragraph performs the work of reassurance - the listing of "A red door, a brass knocker, a welcome mat" uses noun phrases in a paratactic sequence that mimics the reader's scanning eye, constructing a world of comfortable predictability. The welcome mat that says "WELCOME in cheerful block letters" is almost parodic in its ordinariness, the capitalisation rendering it a sign rather than a genuine greeting. The phrase "neat, if unimaginative" subtly positions the narrator as detached, observational - someone cataloguing surfaces rather than inhabiting the scene. This detachment becomes significant when the second paragraph destabilises what has been established. The structural hinge - "But" - is deliberately conventional, because the disruption works precisely because it infiltrates through the same ordinary details: the mat is still there, but now "turned at an angle." The writer's structural technique here is to re-present familiar objects as evidence, transforming the descriptive mode into something closer to forensic investigation. The parenthetical "Or arrived" functions as a structural volta, a two-word reversal that reframes every preceding detail. In the final paragraph, the sentence fragments perform the work of approaching the unknown: "Not wide - just an inch" uses the self-correcting structure to dramatise the narrowing of focus, while "Enough to see the darkness inside" and "Enough to know" create an anaphoric rhythm that builds inevitability. The abstract final clause - "would change everything" - refuses specificity, and this structural withholding is itself the source of the text's power: the reader must step through the door of reading to resolve the tension the writer has created.`,
    },
    markScheme: [
      'Comments on the overall structural shift (beginning/middle/end)',
      'Analyses how focus changes across paragraphs',
      'Comments on sentence-level structural choices',
      'Considers the effect on the reader',
      'Uses structural terminology (shift, focus, pace, tension)',
    ],
    examinerTips: [
      "Don't just describe what happens - explain WHY the writer makes structural choices.",
      'Think about beginning, middle, and end separately.',
      'Comment on paragraph openings and sentence length as structural tools.',
    ],
  },
  {
    id: 'p2-comp-1',
    board: 'AQA',
    paper: 2,
    questionType: 'Comparison (Q4)',
    difficulty: 'Higher',
    extract: `Source A (1912): "The suffragette movement has gone too far. These women - if they may still be called such - have abandoned every principle of feminine decency in their hysterical pursuit of a right they are temperamentally unfit to exercise. The vote is a serious matter, requiring calm judgement and rational deliberation. It is not a plaything for those governed by emotion."\n\nSource B (2020): "Women's participation in politics has transformed every democracy for the better. Research consistently shows that gender-diverse legislatures produce more effective policy outcomes. Yet even now, women hold only 26% of parliamentary seats worldwide. The barriers are structural, not natural - and dismantling them requires more than good intentions."`,
    extractSource:
      'Source A: Adapted from a 1912 editorial; Source B: Adapted from a 2020 policy paper',
    question:
      'Compare how the two writers convey their different perspectives on women in politics. In your answer, you could compare their different perspectives, the methods they use to convey those perspectives, and how far you agree with either writer.',
    modelAnswers: {
      'Grade 4-5': `The two writers have very different perspectives on women in politics. Source A, from 1912, argues that women should not have the vote because they are "temperamentally unfit" and too emotional. Source B, from 2020, argues the opposite - that women make politics better. Source A uses negative language like "hysterical" and "abandoned every principle of feminine decency" to make the suffragettes sound unreasonable. In contrast, Source B uses facts and statistics such as "only 26% of parliamentary seats" to support their argument logically. Both writers use confident language but Source A relies on insults while Source B uses evidence. I agree more with Source B because it uses real data rather than just opinions.`,
      'Grade 6-7': `The two sources present diametrically opposed perspectives, yet both deploy rhetorical strategies designed to make their position seem like common sense. Source A constructs women as emotionally unstable through the lexical field of irrationality - "hysterical," "emotion," "plaything" - positioning the vote as requiring qualities antithetical to femininity. The parenthetical aside "if they may still be called such" questions the suffragettes' very womanhood, implying that political ambition is a form of gender betrayal. In contrast, Source B reframes women's political participation as empirically beneficial, using the assertive "consistently shows" and the quantitative "only 26%" to ground its argument in evidence rather than ideology. Where Source A naturalises exclusion - women are "temperamentally unfit" - Source B historicises it, insisting that "the barriers are structural, not natural." This single sentence directly contradicts the entire premise of Source A. Both writers use the tricolon: Source A's "calm judgement and rational deliberation" constructs a narrow definition of political competence, while Source B's "more than good intentions" implies that passive support is insufficient. However, Source A's reliance on ad hominem attack ("hysterical," "governed by emotion") contrasts sharply with Source B's appeal to collective benefit.`,
      'Grade 8-9': `These two sources are separated by over a century, yet they are locked in the same argument - one that persists because it concerns not simply women's rights but the contested boundary between nature and politics. Source A's rhetorical strategy depends on presenting exclusion as protection: the vote requires "calm judgement," a quality the writer implicitly reserves for men, while women are "governed by emotion" - the passive construction itself enacting the subjugation it describes. The lexis of contamination - "abandoned," "gone too far," "hysterical" - frames women's political agency as pathological, something to be diagnosed rather than debated. The parenthetical "if they may still be called such" is the text's most violent move: it revokes gender identity as punishment for transgression, revealing that the writer's real anxiety is not about competence but about control. Source B refuses this framework entirely. Its opening assertion - "Women's participation in politics has transformed every democracy for the better" - is not defensive but declarative, positioning women's exclusion as the aberration. The statistics ("only 26%") function not as dry data but as an indictment, the adverb "only" encoding both insufficiency and injustice. The crucial intervention comes in Source B's distinction between structural and natural barriers: this directly dismantles the essentialist logic of Source A, insisting that what one era calls "temperament" is merely the residue of unexamined power structures. Both writers claim objectivity - Source A through the appeal to "rational deliberation," Source B through research evidence - yet their rhetorical modes are fundamentally different: Source A argues from assumed authority, Source B from accumulated evidence. The shift between them maps the broader movement in Western thought from deductive to inductive reasoning about equality.`,
    },
    markScheme: [
      'Compares perspectives explicitly (not just describes each separately)',
      'Analyses methods used by both writers',
      'Uses comparative connectives throughout',
      'Evaluates how effectively each writer conveys their view',
      'Embeds quotations from both sources',
    ],
    examinerTips: [
      'Structure your answer by theme or method, not source by source.',
      'Use comparative language throughout: "whereas," "in contrast," "similarly."',
      "Don't forget to include your own perspective in the final paragraph.",
    ],
  },
  {
    id: 'p1-write-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Creative Writing (Q5)',
    difficulty: 'Foundation',
    extract: '',
    extractSource: '',
    question:
      'Write a description suggested by this picture: A lone figure walking along an empty beach at sunset. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    modelAnswers: {
      'Grade 4-5': `The beach stretched out in front of her like a golden ribbon. The sun was setting, turning the sky orange and pink. She walked slowly along the water's edge, her feet sinking into the wet sand with each step.\n\nThe waves rolled in gently, making a soft shushing sound as they reached the shore. Seagulls circled overhead, their cries echoing across the empty beach. She was completely alone, but she didn't mind. Sometimes you need to be alone to hear yourself think.\n\nThe wind blew her hair across her face and she tasted salt on her lips. The air smelled of seaweed and something else - something clean and fresh that you only find at the coast. She breathed it in deeply, filling her lungs.\n\nAs the sun sank lower, the shadows grew longer. The sand beneath her feet changed from warm gold to cool grey. Soon the light would be gone, but she wasn't ready to leave. Not yet. There was something about this place, this moment, that she wanted to hold onto for just a little while longer.`,
      'Grade 6-7': `Amber light pooled across the sand like spilled honey, thick and warm against the cooling air. The beach was deserted - not empty, exactly, but cleared, as if the tide had taken the crowds along with the shells and driftwood. Only one figure remained.\n\nShe walked at the waterline where the sand was firmest, each footprint filling with silver water the moment she lifted her heel. Behind her, a chain of small lakes marked her path. Ahead, the beach curved into haze, the boundary between sand and sky dissolved by the low sun.\n\nThe sea breathed beside her - a slow, rhythmic exhale that seemed to come from somewhere deep beneath the surface. Each wave unravelled itself across the shore like a whispered secret, retreating before she could catch the words. Overhead, a single gull hung motionless against the bruised sky, suspended on thermals that she could feel pressing against her own skin.\n\nShe stopped. The wind dropped. For one held breath, everything was still: the sea paused mid-reach, the gull frozen, the light balanced on the horizon like a coin on its edge. Then the moment passed. The wave completed its collapse. The gull wheeled away. And she walked on, leaving nothing behind but footprints that the sea would claim within the hour.`,
      'Grade 8-9': `There is a particular quality to light at the edge of the day - not dimmer, exactly, but denser, as if the sun, in its final minutes, is trying to fit everything it has left into a narrower and narrower beam. The sand caught it and held it. Each grain seemed to contain its own small fire.\n\nShe walked where the water met the land, that uncertain border where solid ground remembers it was once sea and the sea remembers it will one day be land. Her footprints were negotiations: the sand agreed to hold her weight; she agreed to leave. Neither party had any intention of keeping their promise.\n\nThe wind came from nowhere in particular. It carried salt, and the ghost of warmth, and the sound of something that might have been waves or might have been her own breathing - she had stopped being able to tell the difference. The coast had a way of dissolving boundaries. Skin and air. Sound and silence. The present tense and every other tense that had ever washed up on this shore.\n\nA gull stitched a line between two clouds, its cry unravelling behind it like thread. She watched it without seeing it. There were things to think about and she had brought them here to think about them, but the beach had its own agenda. It wanted her attention. It wanted her to notice how the foam caught the last of the light and wore it briefly, like lace, before letting it go. It wanted her to understand that letting go was not loss but repetition - that everything the tide took, it also returned, changed and salt-cleaned and ready to be found again.\n\nThe sun touched the water. She stopped walking. Somewhere behind her, her footprints were already filling in.`,
    },
    markScheme: [
      'Uses varied and effective vocabulary',
      'Creates a sustained atmosphere/mood',
      'Uses sensory details beyond just sight',
      'Varies sentence structures for effect',
      'Demonstrates technical accuracy (spelling, punctuation, grammar)',
      'Organises ideas with structural variety (paragraph types, shifts)',
    ],
    examinerTips: [
      'Spend 5 minutes planning before you write.',
      'Focus on QUALITY of description, not telling a story.',
      'Use all five senses, not just sight.',
      'Vary your sentence lengths deliberately - short sentences for impact, long for atmosphere.',
      'End strongly. Your final image or sentence should linger.',
    ],
  },
  {
    id: 'p2-write-1',
    board: 'AQA',
    paper: 2,
    questionType: 'Writing to Argue/Persuade (Q5)',
    difficulty: 'Foundation',
    extract: '',
    extractSource: '',
    question:
      '"Social media does more harm than good for young people." Write an article for a broadsheet newspaper in which you argue for or against this statement. (40 marks)',
    modelAnswers: {
      'Grade 4-5': `Social media is a huge part of young people's lives today. Most teenagers spend hours every day on platforms like Instagram and TikTok. But is this actually hurting them?\n\nFirstly, social media can be bad for mental health. Studies have shown that young people who spend a lot of time on social media are more likely to feel anxious or depressed. This is because they are constantly comparing themselves to other people's perfect-looking lives, which are usually fake anyway.\n\nHowever, social media is not all bad. It helps young people stay connected with friends and family. During lockdown, it was the only way many teenagers could socialise. It also allows young people to find communities of people who share their interests, which can be especially important for those who feel different or isolated.\n\nOn the other hand, cyberbullying is a serious problem. Unlike bullying at school, online bullying follows you home. There is no escape. Young people can receive hurtful messages at any time of day or night.\n\nIn conclusion, while social media has some benefits, I believe it does more harm than good for young people. The damage to mental health and the risk of cyberbullying outweigh the advantages of staying connected. Social media companies need to do more to protect their youngest users.`,
      'Grade 6-7': `Every generation fears for its children. In the 1950s, it was rock and roll. In the 1980s, video games. Today, the moral panic has a new target: social media. But this time, the panic might be justified.\n\nThe evidence is difficult to ignore. A landmark study by the Royal Society for Public Health found that Instagram was the worst social media platform for young people's mental health. Rates of anxiety and depression among teenagers have risen in almost exact correlation with smartphone adoption. Coincidence? Researchers increasingly think not. The mechanisms are well understood: social comparison, sleep disruption, addictive design features engineered by Silicon Valley's brightest minds. When an app is deliberately designed to be impossible to put down, calling its effects on teenagers "their own choice" is disingenuous at best.\n\nYet dismissing social media entirely would be both naive and counterproductive. For LGBTQ+ teenagers in unsupportive environments, online communities can be lifelines. For young people with niche interests, social media provides connection that geography denies. The issue is not the technology itself but the exploitative business model that underpins it: attention harvested, sold to advertisers, and consequences externalised onto the mental health services that pick up the pieces.\n\nThe solution, then, is not abstinence but regulation. We do not allow children to buy alcohol or drive cars. We should not allow technology companies to design addictive products targeted at developing brains without meaningful oversight. Until we treat social media companies with the same regulatory seriousness we apply to tobacco or gambling, we are choosing corporate profits over children's wellbeing. And that is a choice we should all be uncomfortable with.`,
      'Grade 8-9': `Consider a thought experiment. A stranger approaches your child and offers them a device. This device will allow your child to compare their appearance with digitally manipulated images for several hours a day. It will deliver messages from anonymous strangers directly to their bedroom at 2am. It will track their location, harvest their personal data, and sell their attention to the highest bidder. It will be deliberately engineered to be psychologically addictive. Would you hand it over? You already have.\n\nThe debate about whether social media harms young people is, at this point, performative. We know it does. The American Psychological Association, the Royal College of Psychiatrists, and the Surgeon General of the United States have all issued formal warnings. Adolescent mental health has deteriorated across every metric that correlates with social media use. The remaining question is not whether the harm exists but why we continue to tolerate it.\n\nThe answer, predictably, is money. Social media companies generate revenue by maximising engagement, and engagement is maximised by content that provokes anxiety, outrage, and inadequacy. A teenager who feels confident and content is a teenager who puts down their phone. The business model depends on ensuring they do not. This is not conspiracy - it is quarterly earnings reports.\n\nDefenders of social media point to its connective potential, and they are not wrong. For marginalised young people, online communities provide solidarity that their physical environments deny. But this argument mistakes a feature for a justification. Cars are useful; we still require seatbelts. The question has never been whether social media offers benefits but whether those benefits require the current model of unregulated, algorithmically optimised psychological exploitation.\n\nThey do not. And until we stop framing this as a debate about personal responsibility - as if a fourteen-year-old can reasonably be expected to resist tools designed by teams of behavioural psychologists - we remain complicit in the damage. The children are not the problem. The adults who profit from their attention are.`,
    },
    markScheme: [
      'Clear viewpoint maintained throughout',
      'Uses rhetorical devices effectively (direct address, rhetorical questions, tricolon)',
      'Supports arguments with evidence or examples',
      'Considers and addresses counter-arguments',
      'Appropriate register for a broadsheet audience',
      'Technically accurate with ambitious vocabulary',
    ],
    examinerTips: [
      'Open with something striking - a fact, a question, a bold statement.',
      'Address the counter-argument to show sophistication.',
      'End with a powerful closing line that echoes your opening.',
      'Use short paragraphs for emphasis. One-sentence paragraphs are powerful.',
    ],
  },
  {
    id: 'aqa-7',
    board: 'AQA',
    type: 'Creative Writing',
    tier: 'GCSE',
    title: 'Paper 1 Q5 Creative Writing (Narrative)',
    extract: '',
    question:
      'Write a story about a character who discovers something unexpected in a place they thought they knew well. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    markScheme: [
      'Creates a compelling narrative with a clear arc (setup, discovery, consequence)',
      'Develops character through action, thought, and reaction',
      'Uses varied and ambitious vocabulary for deliberate effect',
      'Demonstrates structural control: pacing, tension, climax',
      'Employs a range of sentence forms for effect',
      'Maintains technical accuracy throughout with ambitious punctuation',
    ],
    examinerTips: [
      'Plan your story before writing. Know your ending before you start.',
      'The "discovery" does not have to be dramatic - subtlety is more impressive than melodrama.',
      'Show character through what they notice and how they react, not by telling the reader who they are.',
      'Vary your paragraph lengths. A one-sentence paragraph after a long one creates powerful emphasis.',
    ],
    modelAnswers: {
      'Grade 4-5': `Every Tuesday for three years, Martin walked his dog through the cemetery at the end of Ashfield Road. He knew every path, every bench, every stone angel with its mossy wings and blank, patient face. He knew which graves had fresh flowers and which had been forgotten. He liked the quiet. The dead, he had often thought, were better company than the living.

It was a cold morning in November when he noticed the door. It was set into the back wall of the old chapel, half hidden by ivy. He had walked past this wall hundreds of times and never seen it. The door was small - too small for an adult to walk through without stooping - and it was painted the same grey as the stone, which is why, he supposed, it had been invisible for so long.

He tried the handle. It opened.

Inside was a narrow staircase leading down. The air smelled of damp earth and something else, something sweet and old, like the pages of a book left in a drawer for decades. His dog whined and would not follow him.

At the bottom of the stairs was a room. It was small, no bigger than a garden shed, and lined from floor to ceiling with shelves. On the shelves were jars - hundreds of them, glass jars with handwritten labels, each one containing what looked like dried flowers and folded pieces of paper. Martin picked one up and read the label. It said a name he recognised: Eleanor Parsons, 1843-1901. She was buried in the third row, near the yew tree.

He opened the jar carefully. Inside, wrapped around a sprig of dried lavender, was a letter. It began: "My dearest Eleanor, I write this knowing you will never read it, but the writing is the thing."

Martin sat down on the cold floor and read every word.`,
      'Grade 6-7': `The allotment had been his father's and his grandfather's before that, and David had taken it over the way you inherit a face - without choosing it, without questioning it, simply by being next in line. He came every Saturday, turned the soil, talked to the runner beans, and avoided thinking about anything that mattered. The allotment was good for that. It asked nothing of you except presence.

He was digging a new trench for potatoes when the spade struck metal. Not a stone - the sound was wrong, hollow and resonant, like tapping a bell. He scraped the earth away with his hands and found a biscuit tin, rusted at the edges but intact. The lid resisted, then gave with a sound like a small sigh.

Inside, wrapped in oilcloth that had kept the damp out for what turned out to be forty-seven years, was a notebook. His grandfather's handwriting - he recognised the slanted capitals, the way the letter g always dropped below the line like a fishhook. But the content was not what he expected. Not planting schedules. Not seed orders.

Poems. Page after page of them. Sonnets, mostly, though David was no expert. They were about a woman called Eira, a name David had never heard his grandfather speak. They were tender and precise and occasionally funny, and they described a love affair that had apparently lasted thirty years alongside a marriage David's grandmother had always described as contented.

David sat on the upturned bucket he used as a chair and read them with the strange, vertiginous sensation of discovering that the ground you stand on has a basement. His grandfather - the man who communicated exclusively in weather observations and unsolicited advice about compost - had contained this. Had written these words, in this handwriting, and buried them in a biscuit tin three feet beneath a potato trench, where they waited in the dark with the patience of something that knows it will eventually be found.

He put the notebook in his coat pocket. He did not tell anyone. Some discoveries are not secrets exactly, but they are private - they belong to the earth that held them and the person who was meant, eventually, to dig.`,
      'Grade 8-9': `The house had been hers for nine months, which is to say it had been hers for long enough to stop noticing it. She knew its sounds - the boiler's arthritic cough at six each morning, the way the third stair protested underfoot like a cat whose tail you have stepped on - and she knew its silences, which were more various than she had expected. The silence of a Tuesday afternoon was not the silence of a Sunday evening. The house, she had come to understand, was a building that remembered being full of people and had not yet adjusted to containing only one.

It was the wallpaper that started it. She was stripping the back bedroom - a floral pattern of such aggressive cheerfulness that it could only have been chosen in the 1970s by someone who believed optimism could be applied with paste - when the paper came away and beneath it was another layer. And beneath that, another. She kept peeling, carefully now, the way you turn the pages of something fragile, and each layer was a decade: roses over stripes over a pale geometric print that she could date, by its colours, to the late 1940s.

Behind the last layer, the plaster was bare. Almost bare. Someone had written on it in pencil, in small, careful letters that had survived beneath their papery archaeology for what she calculated was at least seventy-five years.

It said: "Renovated this room myself, August 1948. Took three weekends. Margaret says the colour is wrong but Margaret is wrong about most things and I love her for it. If you are reading this you have stripped the wallpaper, which means Margaret's taste has finally been overruled. She will not forgive you. - J. Haldane"

Nadia sat on the bare floorboards and read it again. Then again. She was aware of an emotion she could not immediately name - something adjacent to grief but warmer, like holding a cup that someone else has recently put down. J. Haldane. She said the name aloud and the house absorbed it the way it absorbed everything: patiently, without comment, adding it to the record of sounds it had been keeping since before she was born.

She went downstairs and made tea. She drank it at the kitchen table, thinking about the man who had written on his own wall in the reasonable expectation that his words would be buried for ever, and who had written them anyway, because the impulse to leave a mark is older than the expectation that anyone will find it.

She did not wallpaper the room. She painted around the words, leaving them exposed, a small rectangle of 1948 in a room that was otherwise 2024. Visitors asked about it. She told them it was a feature. She did not tell them that she sometimes stood in the doorway in the evenings and read it again, not because she had forgotten the words but because the act of reading them was a conversation with someone she had never met, conducted across a distance that neither paper nor plaster could entirely close.`,
    },
  },
  {
    id: 'aqa-8',
    board: 'AQA',
    type: 'Summary & Synthesis',
    tier: 'GCSE',
    title: 'Paper 2 Q2 Summary & Synthesis',
    extract: `Source A: "Travel in the nineteenth century was an endurance test. A journey from London to Edinburgh by stagecoach took four days in good weather and considerably longer in bad. Passengers were packed together in cramped, unsprung carriages that jolted over rutted roads, arriving bruised, exhausted, and covered in the dust of three counties. Inns along the route were unreliable - the beds often shared with strangers, the food indifferent, the prices exorbitant. To travel was to suffer, and only those with compelling business or exceptional stubbornness undertook long journeys voluntarily."\n- Adapted from a history of British transport, 2018\n\nSource B: "I took the 06:15 from King's Cross and was in Edinburgh by ten. I spent the journey answering emails, drinking a coffee that cost more than my grandfather earned in a day, and watching England turn into Scotland through a window that was, by modern standards, almost clean. The train was warm, fast, and largely empty. I read the paper, slept for forty minutes, and arrived feeling precisely as I had when I left, which is both the miracle and the disappointment of modern travel: it delivers you to your destination without requiring you to experience the journey at all."`,
    question:
      'Use details from both sources. Write a summary of the differences between travelling in the nineteenth century and travelling today. (8 marks)',
    marks: 8,
    timing: '10 minutes',
    markScheme: [
      'Identifies clear differences between the two experiences of travel',
      'Synthesises information from both sources (not one then the other)',
      'Uses quotations or textual references to support each point',
      'Makes perceptive inferences beyond surface meaning',
      'Writes clearly and concisely in own words where appropriate',
    ],
    examinerTips: [
      'This is a summary question, not a language analysis question. Focus on what the sources say, not how they say it.',
      'Aim for 3-4 well-developed comparative points.',
      'Use connectives that signal comparison: "whereas," "by contrast," "while."',
      'Keep your answer concise. Eight marks means roughly eight minutes.',
    ],
    modelAnswers: {
      'Grade 4-5': `The two sources show that travel has changed dramatically. In Source A, a journey from London to Edinburgh took "four days" by stagecoach, whereas in Source B the same journey by train takes less than four hours. The physical experience is also very different: nineteenth-century passengers arrived "bruised, exhausted, and covered in dust," while the modern traveller arrives "feeling precisely as I had when I left," suggesting the journey requires no physical effort at all. Accommodation was a problem in Source A, with "unreliable" inns and beds "shared with strangers," but Source B's traveller has everything they need on the train itself - coffee, warmth, and space to sleep. Finally, Source A says only those with "compelling business" would travel voluntarily because it was so unpleasant, while Source B suggests modern travel is so easy that it has lost all sense of adventure or experience.`,
      'Grade 6-7': `The sources present nineteenth-century travel as an ordeal and modern travel as an absence of experience. The most fundamental difference is temporal: Source A's four-day stagecoach journey has been compressed into Source B's four-hour train ride, a transformation that has removed not only discomfort but also, as Source B's writer notes, the experience of the journey itself. Physically, the contrast is stark - Source A's passengers endure cramped, "unsprung carriages" and arrive damaged, while Source B's narrator travels in warmth and comfort, the greatest inconvenience being an overpriced coffee. The social dimension has also shifted: where Source A's travellers were forced into unwanted intimacy, sharing beds with strangers at roadside inns, Source B's train is "largely empty," and the traveller's interactions are with emails and newspapers rather than people. Perhaps most tellingly, Source A frames travel as something requiring "exceptional stubbornness," while Source B frames it as something requiring so little that the traveller barely registers it - "the miracle and the disappointment" being that modern travel has eliminated suffering at the cost of eliminating significance.`,
      'Grade 8-9': `The sources trace a paradox: as travel has become physically easier, it has become experientially emptier. Source A's nineteenth-century journey is defined by embodied suffering - passengers are "bruised, exhausted, and covered in dust," their bodies serving as records of the distance traversed. Source B's modern equivalent produces no such record; the traveller arrives unchanged, the journey having been so frictionless as to be almost imperceptible. The infrastructure of travel has been inverted: Source A describes a hostile network of "unreliable" inns and shared beds, where comfort was contingent and uncertain, while Source B's train provides a self-contained environment of warmth and solitude that insulates the traveller from the landscape entirely. The relationship between traveller and journey has also shifted from active endurance to passive consumption - Source A's travellers choose to suffer for "compelling business," exercising agency through stubbornness, while Source B's narrator is transported, spending the journey on activities entirely unrelated to travel itself. Both sources ultimately suggest that the quality of a journey is measured not by comfort but by transformation: Source A's travel changed the traveller physically; Source B's writer suggests that modern travel's failure to change us at all is "both the miracle and the disappointment."`,
    },
  },
  {
    id: 'aqa-9',
    board: 'AQA',
    type: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Literature Paper 2 Poetry Comparison',
    extract: `Poem A - "Remains" by Simon Armitage (extract):
"His blood-shadow stays on the street, and out on patrol
I walk right over it week after week. Then I'm home on leave.
But I blink and he bursts again through the doors of the bank.
Sleep, and he's probably armed, and probably dangerous,
and me and somebody else and somebody else
are all of the same mind."

Poem B - "War Photographer" by Carol Ann Duffy (extract):
"In his dark room he is finally alone
with spools of suffering set out in ordered rows.
The only light is red and softly glows,
as though this were a church and he a priest
preparing to intone a Mass."`,
    question:
      'Compare how the poets present the lasting effects of conflict in "Remains" and "War Photographer." (30 marks)',
    marks: 30,
    timing: '45 minutes',
    markScheme: [
      'Compares ideas and themes across both poems',
      'Analyses how language, form, and structure create meaning in both poems',
      'Uses well-selected quotations from both poems',
      "Explores the poets' methods and their effects on the reader",
      'Considers relevant contextual factors',
      'Maintains a comparative structure throughout',
    ],
    examinerTips: [
      'Structure by theme or idea, not poem by poem.',
      'Compare methods, not just content - how do the poets achieve similar or different effects?',
      'Use the extracts as a starting point but refer to the whole poems.',
      'Context should illuminate your analysis, not replace it.',
    ],
    modelAnswers: {
      'Grade 4-5': `Both "Remains" by Simon Armitage and "War Photographer" by Carol Ann Duffy present characters haunted by their experiences of conflict, but they do so in different ways.

In "Remains," the soldier cannot escape the memory of killing a looter. The image of the "blood-shadow" that "stays on the street" shows that the violence has left a permanent mark. The verb "stays" suggests the memory will not go away. When the soldier says "I blink and he bursts again through the doors," it shows the memory replays involuntarily, even at home. The repetition of "probably armed, and probably dangerous" reveals his uncertainty about whether the killing was justified.

In "War Photographer," Duffy presents a different kind of haunting. The photographer is "finally alone" in his dark room, which suggests he needs to separate himself from the world to process what he has seen. The metaphor comparing the dark room to a church and the photographer to "a priest preparing to intone a Mass" gives his work a sacred, solemn quality, suggesting the suffering he has witnessed deserves reverence.

Both poems show that conflict follows people home. The soldier in "Remains" is invaded by memories he cannot control, while the photographer in "War Photographer" chooses to revisit the suffering through his work. Both suggest that witnessing violence changes a person permanently.`,
      'Grade 6-7': `Both poets examine how conflict persists beyond the battlefield, but their speakers occupy fundamentally different positions - one as participant, one as witness - and these positions shape the form and language of each poem.

Armitage's soldier is trapped in repetition. The "blood-shadow" that "stays on the street" functions as a literal and psychological stain, and the present tense "stays" refuses the distance of memory, insisting that the past is ongoing. The enjambment across "on patrol / I walk right over it" forces the reader to experience the unavoidable confrontation that the soldier faces weekly. The shift to "home on leave" offers no escape; the conjunction "But" immediately reinstates the trauma through the hallucinatory image of the looter bursting "again through the doors." The colloquial voice - "me and somebody else and somebody else" - creates an unsettling casualness that reflects how the military normalises violence while the psyche cannot.

Duffy's photographer, by contrast, processes conflict through ritual and craft. The dark room is a controlled space - "ordered rows" of suffering impose structure on chaos - and the simile of "a church" sacralises the act of developing photographs. Where Armitage's soldier is overwhelmed by involuntary memory, Duffy's photographer deliberately returns to images of suffering, making his trauma a vocational choice. The sibilance of "spools of suffering set out" creates a hushed, reverent tone that contrasts sharply with Armitage's staccato, fragmented syntax.

Both poems ultimately suggest that the lasting effect of conflict is a division of self: Armitage's soldier is split between the street and home, waking and sleeping; Duffy's photographer is divided between "Rural England" and the war zones he documents. Neither can fully inhabit one world without being pulled back to the other.`,
      'Grade 8-9': `Armitage and Duffy approach the aftermath of conflict from opposing vectors - one from inside the experience, one from its periphery - yet both arrive at the same conclusion: that conflict does not end when the shooting stops but takes up permanent residence in the consciousness of those it touches.

Armitage's "Remains" dramatises trauma as a failure of temporal boundaries. The "blood-shadow" that "stays on the street" is an image of extraordinary compression - it is simultaneously a bloodstain, a shadow, and a psychological imprint, the compound noun refusing to separate the physical from the metaphorical. The present tense "stays" is the poem's most important verb: it denies the past its pastness, insisting that for the traumatised mind, the event is perpetually occurring. The structural collapse from external reality ("out on patrol") to internal hallucination ("I blink and he bursts again") enacts the mechanism of PTSD, where sensory triggers dissolve the boundary between then and now. Armitage's use of the colloquial register - "me and somebody else and somebody else" - is a formally radical choice: it mimics the soldier's attempt to depersonalise the killing, but the vague repetition of "somebody else" betrays the anonymity that military culture demands while revealing its psychological cost. The phrase "all of the same mind" carries a bitter irony: the shared decision to shoot creates a shared guilt that is, paradoxically, experienced in isolation.

Duffy's "War Photographer" constructs a fundamentally different relationship between subject and conflict. Where Armitage's soldier is invaded by memory, Duffy's photographer curates it. The "ordered rows" of film spools impose a taxonomy on suffering that the suffering itself resists, and the religious imagery - the dark room as "church," the photographer as "priest" - elevates the act of witnessing to a sacrament. This is not accidental: Duffy is interrogating the ethics of turning pain into art, a question the poem shares with its own medium. The soft, controlled rhyme scheme (alone/rows/glows) and the measured iambic pentameter formally enact the photographer's attempt to contain the uncontainable, creating a surface calm that the content continually threatens to rupture.

The crucial difference is agency. Armitage's soldier has no choice - the memory "bursts" through uninvited, and the poem's lack of regular form mirrors this loss of control. Duffy's photographer chooses to return to the images, yet this apparent agency is itself a form of compulsion: he develops the photographs because he cannot not develop them, the ritual of the dark room being the only structure that makes the chaos legible. Both poems ultimately locate the lasting effect of conflict not in physical injury but in the impossibility of integrating the experience into ordinary life. Armitage's soldier walks over the bloodstain "week after week," unable to avoid it; Duffy's photographer produces images that his audience will glance at "between the bath and pre-lunch beers." In both cases, the real damage is the gap between those who carry the weight of what they have seen and a society that has the luxury of looking away.`,
    },
  },
  {
    id: 'aqa-lit-macbeth-char-1',
    board: 'AQA',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'Macbeth - Character Analysis (Lady Macbeth)',
    extract: `Come, you spirits\nThat tend on mortal thoughts, unsex me here,\nAnd fill me from the crown to the toe top-full\nOf direst cruelty. Make thick my blood,\nStop up the access and passage to remorse,\nThat no compunctious visitings of nature\nShake my fell purpose, nor keep peace between\nThe effect and it. Come to my woman\'s breasts,\nAnd take my milk for gall, you murd\'ring ministers.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 1 Scene 5",
    question:
      'Starting with this extract, how does Shakespeare present Lady Macbeth as a powerful character? Write about how Shakespeare presents Lady Macbeth in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Lady Macbeth as a powerful character who wants to become cruel and ruthless. She calls on "spirits" to "unsex me here," which means she wants to lose her feminine qualities because she sees them as weak. The phrase "fill me from the crown to the toe top-full of direst cruelty" shows she wants to be completely filled with evil so she can carry out the murder of King Duncan. The word "direst" is a superlative which shows she wants the most extreme cruelty possible.

She also asks the spirits to "make thick my blood" and "stop up the access and passage to remorse." This means she wants to stop herself feeling guilty. The word "remorse" shows that she knows what they are planning is wrong, but she wants to block those feelings. The metaphor of taking her "milk for gall" shows she wants to replace her nurturing, motherly nature with poison and bitterness.

In the rest of the play, Lady Macbeth is powerful when she persuades Macbeth to kill Duncan by questioning his masculinity. She calls him a "coward" and says she would dash her own baby\'s brains out, which is shocking and shows her determination. However, later in the play her power fades. In the sleepwalking scene she tries to wash imaginary blood from her hands, saying "Out, damned spot." This shows the guilt she tried to block out in this extract has returned and destroyed her. She eventually dies offstage, possibly by suicide.

Shakespeare uses Lady Macbeth to show that trying to reject natural feelings leads to destruction. A Jacobean audience would have found her terrifying because women were expected to be obedient and gentle, not commanding evil spirits.`,
      'Grade 6-7': `Shakespeare presents Lady Macbeth as a figure who seeks power through the deliberate rejection of femininity and natural feeling. Her invocation to the "spirits that tend on mortal thoughts" positions her as a character who actively courts the supernatural, establishing a transgressive agency that would have profoundly unsettled a Jacobean audience for whom such appeals constituted genuine blasphemy. The imperative "unsex me here" is a demand for transformation that equates womanhood with weakness - the verb "unsex" implying that gender itself is an obstacle to the power she craves.

The anatomical specificity of her language - "crown to the toe," "blood," "breasts," "milk" - grounds her ambition in the body, creating a visceral sense of physical violation. The request to "make thick my blood" and "stop up the access and passage to remorse" constructs guilt as a liquid that flows through natural channels; to become powerful, she must physically block these passages. The metaphor reveals an awareness that cruelty is not her natural state - it must be artificially imposed. The substitution of "milk for gall" transforms the maternal into the toxic, the verb "take" suggesting that the spirits must remove her humanity by force.

In the wider play, Lady Macbeth\'s power manifests most clearly in Act 1 Scene 7, where she manipulates Macbeth through an assault on his masculinity, asking "Was the hope drunk / Wherein you dressed yourself?" Her rhetorical control here mirrors the commanding imperatives of the extract, positioning her as the true architect of the regicide. Yet Shakespeare structures her arc as a trajectory from control to disintegration. The sleepwalking scene inverts the extract precisely: the woman who demanded that her blood be thickened now obsessively washes her hands; the woman who summoned darkness now requires "light by her continually." The remorse she commanded the spirits to block has found its way through, proving that the "compunctious visitings of nature" cannot be permanently suppressed.

Contextually, James I\'s fascination with witchcraft makes Lady Macbeth\'s invocation of spirits particularly charged - she occupies a space between ambitious wife and witch, her language echoing the incantatory rhythms of the Weird Sisters. Shakespeare uses her to explore the relationship between gender, power, and moral corruption, ultimately suggesting that power seized through unnatural means is inherently self-consuming.`,
      'Grade 8-9': `Shakespeare constructs Lady Macbeth\'s power in this extract as fundamentally paradoxical: it is an assertion of will that simultaneously announces its own dependency. The invocation "Come, you spirits" adopts the imperative mode, but the very need to summon external forces reveals that the cruelty she desires is not innate - it must be imported, injected, artificially installed. Her power, then, is not self-generated but borrowed, and this distinction proves structurally decisive for the trajectory of her character.

The command to "unsex me here" operates on multiple levels. Superficially, it is a rejection of feminine weakness in a patriarchal order that equates womanhood with passivity. But more profoundly, it is a request for ontological transformation - the verb "unsex" does not mean "make me masculine" but rather "remove my sex entirely," positioning Lady Macbeth as seeking to exist outside the categories of gender altogether. This is radical: in the rigidly gendered hierarchy of Jacobean England, to be unsexed is to be unnatural, and the unnatural in Shakespeare\'s moral universe is always ultimately punished. The spatial metaphor "from the crown to the toe" anticipates the crown Macbeth will seize, collapsing the personal body and the body politic into a single site of corruption.

The physiological imagery - "make thick my blood," "stop up the access and passage to remorse" - reveals a sophisticated understanding of interiority. Lady Macbeth conceptualises conscience as a physical system with "access" points that can be blocked, constructing guilt not as a moral abstraction but as a bodily fluid. The request to exchange "milk for gall" is perhaps the extract\'s most disturbing image: it transforms the breast - the site of maternal nourishment, of the bond between mother and child - into a vessel for poison. The theological implications are significant: in Christian iconography, the Madonna\'s milk symbolises divine grace, and Lady Macbeth\'s rejection of it constitutes a deliberate inversion of the sacred.

Shakespeare carefully structures the play so that every element of this speech is later inverted. The woman who demanded the removal of remorse is consumed by it in Act 5, her compulsive handwashing a physiological response to the psychological blockage she herself requested. The "thick" blood she desired manifests as the indelible blood on her hands - "all the perfumes of Arabia will not sweeten this little hand" - the diminutive "little" poignantly recovering the femininity she had sought to destroy. The darkness she summoned ("Come, thick night") becomes the darkness of her madness, and her need for "light by her continually" represents the complete collapse of the persona she constructed in this extract.

What makes Lady Macbeth\'s characterisation so enduring is Shakespeare\'s refusal to simplify her. She is neither monster nor victim but a character whose ambition exposes the violence inherent in the gender hierarchy she inhabits. Her tragedy is not that she sought power but that the only route to power available to her required the annihilation of her own humanity - a critique that implicates the patriarchal structure as much as the individual who attempts to subvert it.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents Lady Macbeth as powerful through language and imagery',
      'Explores the significance of specific words and phrases in the extract',
      'Develops a convincing argument about her character across the whole play',
      'Considers relevant context (Jacobean attitudes to gender, witchcraft, monarchy)',
      'Uses well-selected quotations from the extract and the wider play',
      'Maintains a clear, sustained analytical argument throughout',
    ],
    examinerTips: [
      'Start with the extract but ensure you cover the rest of the play in equal detail.',
      "Consider how Shakespeare structures Lady Macbeth's arc - the trajectory from power to collapse is crucial.",
      'Context should support your argument, not replace analysis.',
      'Use the phrase "Shakespeare presents" to keep focus on authorial method.',
    ],
  },
  {
    id: 'aqa-lit-macbeth-theme-1',
    board: 'AQA',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'Macbeth - Theme of Ambition',
    extract: `I have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o\'erleaps itself\nAnd falls on the other.`,
    extractSource: "Written in the style of Shakespeare's Macbeth, Act 1 Scene 7",
    question:
      'Starting with this extract, how does Shakespeare present the theme of ambition in Macbeth? Write about how ambition is presented in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents ambition as dangerous and destructive. Macbeth says he has "no spur to prick the sides of my intent," which is a metaphor comparing his plan to kill Duncan to a horse that needs to be kicked to make it go. This shows that Macbeth does not really have a good reason to commit the murder. The only thing driving him is "vaulting ambition," which he describes as something that "o'erleaps itself and falls on the other." This image of jumping too high and falling over suggests that ambition will lead to failure and destruction.

Earlier in the play, the witches start Macbeth\'s ambition by predicting he will become Thane of Cawdor and then King. When the first prediction comes true, Macbeth starts to take the second seriously. He says "Stars, hide your fires; let not light see my black and deep desires," which shows he already has dark ambitions that he is ashamed of.

Lady Macbeth also drives his ambition forward. She tells him he is "too full o\' the milk of human kindness" and challenges his manhood to make him act. After killing Duncan, Macbeth\'s ambition grows - he has Banquo murdered and attacks Macduff\'s family, showing that ambition has turned him into a tyrant.

Shakespeare uses the theme of ambition to warn the audience that wanting too much power leads to destruction. This would have been important to James I, who had survived the Gunpowder Plot and would have wanted to see that those who challenge the king are punished.`,
      'Grade 6-7': `Shakespeare presents ambition in this extract as a force that is simultaneously compelling and self-destructive. The equestrian metaphor - "no spur to prick the sides of my intent" - frames murder as a journey that requires motivation, and Macbeth\'s admission that he lacks any justification beyond ambition itself reveals the hollowness at the centre of his resolve. The image of "vaulting ambition, which o\'erleaps itself / And falls on the other" draws on the physical action of mounting a horse too eagerly, overshooting the saddle, and falling. The verb "o\'erleaps" carries a sense of reckless excess, and the inevitable "falls" foreshadows Macbeth\'s own trajectory - he will leap for the crown and be destroyed by the very act of reaching for it.

The extract is significant because it represents Macbeth\'s most rational moment regarding ambition. He recognises its danger clearly, yet proceeds regardless - suggesting that ambition in the play operates less as a conscious choice and more as an ungovernable compulsion. This reading is supported by his soliloquy in Act 1 Scene 3, where the witches\' prophecy triggers an immediate internal conflict: "why do I yield to that suggestion / Whose horrid image doth unfix my hair." The verb "yield" implies surrender to a force stronger than reason.

Shakespeare externalises ambition through the witches and Lady Macbeth, who function as catalysts. The witches\' prophecies provide the content of ambition - kingship - while Lady Macbeth provides its mechanism, goading Macbeth with accusations of cowardice and manipulating gender expectations. Yet Shakespeare ensures that neither can be held solely responsible; Macbeth\'s aside that "the Prince of Cumberland" is "a step on which I must fall down, or else o\'erleap" echoes the extract\'s "o\'erleaps" and establishes that ambition was present before any external influence.

As the play progresses, ambition metastasises. The murder of Duncan generates not satisfaction but further killing - Banquo, Macduff\'s family - because ambition, once acted upon, creates the very threats it seeks to eliminate. Macbeth\'s later declaration that he is "in blood stepped in so far that, should I wade no more, returning were as tedious as go o\'er" presents ambition as a river of blood from which retreat is impossible, the casual word "tedious" revealing how thoroughly ambition has corroded his moral sense.

Contextually, the play engages with the Jacobean concept of the Great Chain of Being, in which ambition to rise above one\'s ordained place constitutes a sin against the divine order. Macbeth\'s ambition does not merely destroy him - it disorders the entire natural world, producing storms, unnatural darkness, and animals eating each other. Shakespeare suggests that individual ambition has cosmic consequences, a warning directed at a court still shaken by the Gunpowder Plot.`,
      'Grade 8-9': `Shakespeare constructs ambition in this extract not as a character trait but as a structural principle - a force that shapes and ultimately destroys the architecture of selfhood. Macbeth\'s admission that he possesses "no spur / To prick the sides of my intent, but only / Vaulting ambition" is remarkable for its logical clarity: he has methodically eliminated every justification for Duncan\'s murder and arrived at ambition as the irreducible remainder. The equestrian metaphor operates with precise mechanical logic - without a legitimate "spur," the rider has no control over the horse, and ambition becomes not a tool of the will but an autonomous force that propels the self beyond its capacity. The image of ambition that "o\'erleaps itself / And falls on the other" is proleptic, encoding the entire arc of the play in a single figure: the reach that exceeds the grasp, the ascent that guarantees the fall. The word "other" is deliberately vague - it could refer to the other side of the horse, but it also gestures towards the "other" self Macbeth will become, the tyrant produced by the act of overreaching.

What makes this moment structurally crucial is that it represents the last point at which Macbeth possesses genuine self-knowledge. He sees the danger with complete clarity, articulates it with rhetorical precision, and proceeds regardless. This paradox - lucid self-awareness combined with an inability to act on that awareness - is the defining characteristic of Shakespearean tragic ambition. It distinguishes Macbeth from a simple villain: he is not ignorant of the consequences but compelled by a force that renders knowledge irrelevant.

Shakespeare distributes the origins of ambition across multiple agents, resisting any single causal explanation. The witches\' prophecies function as what Banquo calls "instruments of darkness" - they do not create ambition but activate a latent potential, as evidenced by Macbeth\'s immediate imaginative leap to murder: "My thought, whose murder yet is but fantastical, / Shakes so my single state of man." The physiological response - the shaking, the unnatural disruption of his "single state" - suggests that ambition operates at the somatic level, below conscious control. Lady Macbeth\'s role is more explicitly rhetorical; her manipulation in Act 1 Scene 7 targets Macbeth\'s masculinity, but she is herself driven by an ambition she recognises as requiring supernatural intervention to fulfil: "Come, you spirits / That tend on mortal thoughts, unsex me here." The parallel invocations - his to darkness, hers to spirits - create a shared grammar of ambition that binds the couple in a mutual destruction.

The play\'s most profound insight is that ambition is self-perpetuating: each act of ambition creates the conditions that demand further action. Duncan\'s murder makes Banquo a threat; Banquo\'s murder makes Fleance a fugitive; the attempt to secure power generates an exponentially expanding field of danger. Macbeth\'s metaphor of being "in blood / Stepped in so far" captures this logic with devastating economy - the spatial metaphor of wading through blood transforms cumulative moral choices into a physical landscape from which retreat requires the same effort as continuation, making moral distinction meaningless. The word "tedious" is the most chilling in the play: it reduces the calculation between further atrocity and repentance to a question of convenience rather than conscience.

Shakespeare ultimately presents ambition as a force that consumes the structures it claims to build. The Great Chain of Being - the Jacobean cosmological hierarchy in which each creature occupies a divinely ordained position - is not merely disrupted but inverted: the king becomes murderer, the subject becomes tyrant, and nature itself convulses in response. The play\'s restoration of order through Malcolm is significant but incomplete; the audience has witnessed how fragile that order was, how easily ambition can dismantle it. This is Shakespeare\'s warning to James I\'s court, but it transcends its historical moment: ambition in Macbeth is not a period-specific vice but a permanent feature of the human condition, the "vaulting" impulse that propels civilisation forward and, in the same motion, threatens to destroy it.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents ambition through language, imagery, and metaphor',
      'Traces the theme of ambition across the whole play, not just the extract',
      'Explores how different characters relate to the theme of ambition',
      'Considers contextual factors (Great Chain of Being, Jacobean politics, divine right)',
      'Uses precisely selected quotations embedded in analytical sentences',
      'Develops a sustained, conceptualised argument about the nature of ambition',
    ],
    examinerTips: [
      'A theme question requires you to trace an idea across the whole play - do not just analyse the extract.',
      'Consider how the theme develops and changes, not just where it appears.',
      'The best responses treat ambition as something complex, not simply "bad."',
      'Link context to specific moments rather than bolting it on at the end.',
    ],
  },
  {
    id: 'aqa-lit-aic-theme-1',
    board: 'AQA',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls - Theme of Responsibility',
    extract: `But just remember this. One Eva Smith has gone - but there are millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, and what we think and say and do. We don\'t live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.`,
    extractSource: "Written in the style of J.B. Priestley's An Inspector Calls, Act 3",
    question:
      'How does Priestley use the character of the Inspector to present ideas about responsibility? Write about how the Inspector presents ideas about responsibility in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, the Inspector presents the idea that everyone is responsible for each other. He says "we don't live alone" and "we are members of one body," which means that all people are connected and what we do affects others. The phrase "millions and millions of Eva Smiths" shows that Eva is not just one person but represents all working-class people who suffer because of how they are treated by the rich.

The Inspector warns that if people do not learn to be responsible, "they will be taught it in fire and blood and anguish." This is a threatening warning that suggests war or revolution will come if society does not change. The rule of three - "fire and blood and anguish" - makes the warning sound serious and frightening.

Earlier in the play, the Inspector shows each member of the Birling family how they were responsible for Eva Smith\'s death. Mr Birling sacked her for asking for higher wages. Sheila got her fired from a shop because she was jealous. Gerald kept her as a mistress then abandoned her. Mrs Birling refused her help at the charity. Eric got her pregnant and stole money. The Inspector makes each of them face what they did.

Priestley uses the Inspector to show that people in 1912 needed to take more responsibility for others. The play was written in 1945, and the audience would know that two world wars had already happened, which makes the Inspector\'s warning about "fire and blood" seem like a prophecy that came true. Priestley was a socialist who believed in the welfare state and wanted his audience to learn from the Birlings\' mistakes.`,
      'Grade 6-7': `Priestley uses the Inspector as a mouthpiece for socialist ideology, and this extract functions as the play\'s moral thesis. The movement from the specific - "One Eva Smith has gone" - to the universal - "millions and millions of Eva Smiths and John Smiths" - enacts the Inspector\'s central argument: that individual suffering is systemic, not incidental. The addition of "John Smiths" broadens the category beyond gender, while the surname "Smith" - the most common English name - makes the victims everypeople, representatives of an entire class rendered invisible by those who exploit them. The listing of "their lives, their hopes and fears, their suffering and chance of happiness" restores to these anonymous millions the full complexity of human interiority that the Birlings have denied Eva throughout the play.

The declaration "We are members of one body" carries deliberate biblical resonance, echoing St Paul\'s metaphor of the Church as the body of Christ (1 Corinthians 12). Priestley, though a socialist rather than a conventional Christian, appropriates religious language to give his social message moral authority. The short declarative sentences - "We don\'t live alone. We are members of one body. We are responsible for each other." - use syntactic simplicity to present these ideas as self-evident truths rather than debatable opinions. The anaphoric "We are" creates a rhetorical rhythm that is almost incantatory, reinforcing the Inspector\'s quasi-prophetic status.

The final warning - "fire and blood and anguish" - transforms the Inspector from investigator to prophet. For the 1912 characters, this is a threat; for the 1945 audience, it is history. Priestley exploits dramatic irony to devastating effect: the audience knows that two world wars have already delivered the "lesson" the Inspector predicts, making the Birlings\' complacency not merely selfish but catastrophically wrong. The polysyndetic "and" in "fire and blood and anguish" creates a cumulative weight, each noun adding another layer of consequence.

Throughout the play, the Inspector functions as a structural device that forces responsibility upon characters who resist it. His method - revealing each family member\'s involvement sequentially - mirrors the chain of causation that destroyed Eva, demonstrating that responsibility is collective and cumulative. The younger generation\'s response is significant: Sheila and Eric accept responsibility, suggesting that Priestley believed social change was possible through generational shift. Mr and Mrs Birling\'s refusal to accept responsibility - their relief when the Inspector\'s identity is questioned - represents the entrenched capitalist class that Priestley sought to challenge.`,
      'Grade 8-9': `Priestley constructs the Inspector\'s final speech as a rhetorical set piece that operates simultaneously as dramatic climax, political manifesto, and secular prophecy. The movement from singular to plural - "One Eva Smith" to "millions and millions" - is not merely a broadening of scope but a fundamental challenge to the individualist ethics that underpin the Birlings\' worldview. Throughout the play, each family member has treated their interaction with Eva as an isolated event, a private transaction without wider consequence. The Inspector\'s speech dismantles this atomised morality by insisting on interconnection: "their lives... all intertwined with our lives." The verb "intertwined" is precisely chosen - it implies not a simple connection but an inextricable entanglement, a fabric of social relations that cannot be separated into discrete threads.

The theological register of "We are members of one body" performs complex ideological work. Priestley appropriates the Pauline metaphor of the corpus mysticum not to endorse Christian doctrine but to secularise it, transforming a spiritual concept into a socialist one. This is characteristic of Priestley\'s method: he takes the moral vocabulary that his bourgeois audience would recognise and redirects it towards conclusions they would find uncomfortable. The Birlings attend church, observe propriety, and maintain the outward forms of moral respectability - yet they have systematically destroyed a young woman. The Inspector forces them to confront the gap between their professed values and their actual behaviour, a gap that Priestley identifies as the defining hypocrisy of the capitalist class.

The syntactic structure of the speech enacts its argument. The short, declarative sentences - "We don\'t live alone. We are members of one body. We are responsible for each other." - strip away the qualifications and equivocations that have characterised the Birlings\' language throughout the play. Where Mr Birling speaks in expansive, self-congratulatory periods ("a man has to mind his own business and look after himself and his own"), the Inspector speaks in absolutes. The contrast is structural and ideological: Birling\'s syntax reflects the complexity of self-justification, while the Inspector\'s reflects the simplicity of moral truth.

The prophecy of "fire and blood and anguish" is the play\'s most audacious deployment of dramatic irony. Written in 1945, the speech ventriloquises a character in 1912 predicting events that the audience has already lived through. This temporal layering creates a unique relationship between stage and auditorium: the audience possesses knowledge that vindicates the Inspector and condemns the Birlings, transforming passive spectatorship into active moral judgement. The warning is also prospective - in 1945, with the memory of war fresh and the welfare state being constructed, Priestley implies that the choice between collective responsibility and catastrophic individualism is not historical but ongoing. The Inspector\'s "if" preserves human agency: destruction is not inevitable, but it is the logical consequence of the philosophy Mr Birling articulates.

The Inspector\'s supernatural ambiguity - is he a ghost, a time traveller, a personification of conscience? - is essential to Priestley\'s purpose. By refusing to naturalise the Inspector, Priestley prevents the audience from dismissing his message as the opinion of a particular individual. The Inspector is not a character with a psychology but a dramatic function: he exists to make the invisible visible, to force the comfortable to confront the consequences of their comfort. His departure does not resolve the play but opens it outward - the telephone call announcing that a real inspector is on the way suggests that the reckoning the Birlings have tried to evade is merely deferred, never cancelled. Responsibility, Priestley insists, cannot be escaped through clever argument or social privilege; it can only be accepted or suffered.`,
    },
    markScheme: [
      'Analyses how Priestley uses the Inspector to present ideas about responsibility',
      'Explores the significance of specific language choices in the extract',
      "Discusses responsibility across the whole play, including other characters' responses",
      'Considers relevant context (1912 setting, 1945 audience, socialism, welfare state)',
      'Uses well-integrated quotations from the extract and the wider play',
      "Develops a conceptualised argument about Priestley's purpose and message",
    ],
    examinerTips: [
      'The Inspector is a mouthpiece - always write "Priestley uses the Inspector to..." rather than treating him as a real person.',
      'The dual time frame (1912 setting, 1945 audience) is essential context.',
      'Consider how different characters respond to responsibility - the generational divide matters.',
      'The best answers treat the play as a deliberate construction, not a realistic story.',
    ],
  },
  {
    id: 'aqa-lit-aic-char-1',
    board: 'AQA',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls - Mr Birling Character Analysis',
    extract: `But the way some of these cranks talk and write now, you\'d think everybody has to look after everybody else, as if we were all mixed up together like bees in a hive - community and all that nonsense. A man has to mind his own business and look after himself and his own - and I speak as a hard-headed practical man of business.`,
    extractSource: "Written in the style of J.B. Priestley's An Inspector Calls, Act 1",
    question:
      'How and why does Priestley present Mr Birling as an unlikeable character? Write about how Mr Birling is presented in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Priestley presents Mr Birling as unlikeable because he is selfish and dismissive. He calls people who believe in community "cranks," which is a rude word that shows he thinks caring about others is stupid. The phrase "community and all that nonsense" shows he completely rejects the idea that people should help each other. He says "a man has to mind his own business and look after himself," which shows he only cares about himself and his family.

Mr Birling describes himself as "a hard-headed practical man of business," which shows he is proud and thinks being tough makes him better than others. The word "hard-headed" suggests he has no feelings or sympathy for people less fortunate than him.

In the rest of the play, Mr Birling is shown to be wrong about many things. He says the Titanic is "unsinkable" and that there will not be a war, but the audience knows both of these are wrong. This dramatic irony makes him look foolish and arrogant. When the Inspector reveals that Mr Birling sacked Eva Smith for asking for better wages, Mr Birling shows no guilt. He says he "can\'t accept any responsibility" and thinks paying low wages is just good business.

Priestley makes Mr Birling unlikeable to criticise capitalist businessmen who only care about profit. In 1945 when the play was written, Priestley wanted the audience to reject Mr Birling\'s selfish views and support the new welfare state that would help everyone, not just the rich.`,
      'Grade 6-7': `Priestley constructs Mr Birling as a figure of deliberate dramatic irony whose every assertion is designed to be undermined by the audience\'s superior knowledge. In this extract, Birling dismisses collective responsibility as the province of "cranks," a term that positions those who advocate for social welfare as irrational extremists. The simile "all mixed up together like bees in a hive" is intended as a reductio ad absurdum, but Priestley inverts Birling\'s rhetoric: the audience is meant to recognise the bee colony - cooperative, interdependent, productive - as a more admirable model than Birling\'s atomised individualism. His language reveals him through what he intends as persuasion: the self-description "a hard-headed practical man of business" uses three adjectives that are meant to signal competence but instead communicate a narrowness of vision. The word "hard" carries connotations of cruelty as well as pragmatism, while "practical" implies a refusal to engage with abstract ethical principles.

The syntactic structure of Birling\'s speech is revealing. The repetitive self-reference - "a man has to mind his own business and look after himself and his own" - creates a rhetorical circle that excludes everyone beyond the family unit. The polysyndetic "and" accumulates possessive pronouns ("himself," "his own") until selfishness becomes a grammatical principle, each clause reinforcing the boundary between self and other.

Priestley places this speech at the opening of the play so that the Inspector\'s subsequent revelations systematically dismantle Birling\'s philosophy. Each family member\'s involvement with Eva demonstrates that they are, in fact, "all mixed up together" - the Birlings\' actions have consequences that cross class boundaries whether they acknowledge it or not. Birling\'s response to the investigation - bluster, denial, concern for his knighthood - reveals that his "practical" worldview is actually a mechanism for avoiding moral accountability. His relief when the Inspector\'s credentials are questioned, and his eagerness to "settle it sensibly," expose a man whose primary concern is reputation rather than ethics.

Contextually, Birling represents the Edwardian capitalist class whose complacency Priestley held responsible for the social inequalities that persisted through two world wars. His confidently wrong predictions - the Titanic, the impossibility of war - function as a structural warning: the audience is positioned to distrust everything Birling says, including his rejection of social responsibility. Priestley ensures that Birling\'s philosophy is not merely wrong but dangerous, the logical precursor to the "fire and blood and anguish" the Inspector prophesies.`,
      'Grade 8-9': `Priestley engineers Mr Birling as a character whose dramatic function is to be comprehensively, catastrophically wrong - and in so doing, to invalidate the entire ideological framework he represents. The extract is carefully positioned at the play\'s opening, before the Inspector\'s arrival, so that Birling\'s philosophy is fully articulated before it is subjected to systematic demolition. This structural choice is essential: Priestley does not merely present an alternative to Birling\'s individualism; he ensures that the audience watches that individualism collapse under the weight of its own consequences.

The language of the extract reveals Birling through his rhetorical strategies. The dismissal of social reformers as "cranks" is an ad hominem that substitutes mockery for engagement - Birling does not argue against collective responsibility but ridicules it, a tactic that reveals intellectual insecurity masquerading as confidence. The simile "like bees in a hive" is Birling\'s attempt at absurdist analogy, but Priestley loads it with ironic potential: the hive is, in fact, a model of functional cooperation, and Birling\'s contempt for it exposes the limitations of his imagination rather than the absurdity of the concept. The phrase "community and all that nonsense" performs a rhetorical sleight of hand, using the dismissive "all that" to bundle complex social philosophy into a category that can be rejected wholesale. The definite article "all" suggests that Birling has not engaged with these ideas sufficiently to distinguish between them - they are, to him, a single, undifferentiated threat to his self-interest.

The self-designation "a hard-headed practical man of business" functions as an ideological manifesto compressed into a noun phrase. Each modifier performs specific work: "hard-headed" asserts rationality while encoding emotional inaccessibility; "practical" privileges utility over ethics; "man of business" locates identity entirely within the economic sphere. Priestley constructs a character who has so thoroughly identified himself with his economic function that he has no language for moral reasoning - a limitation that the Inspector\'s investigation will ruthlessly expose.

Priestley\'s most sophisticated technique is the deployment of dramatic irony as an ideological weapon. Birling\'s predictions - that the Titanic is "unsinkable," that war is impossible, that technology will bring perpetual prosperity - are not incidental errors but the logical products of his worldview. A man who believes that individual self-interest is the organising principle of human society will inevitably fail to anticipate collective catastrophes, because his conceptual framework has no mechanism for understanding systemic risk. The audience\'s knowledge that every prediction is wrong performs the critical work that the play\'s argument requires: it establishes that Birling\'s judgement is fundamentally unreliable, so that when he dismisses collective responsibility, the audience has already been trained to recognise his dismissals as indicators of truth rather than error.

The character\'s response to the investigation completes Priestley\'s portrait. Birling\'s concern shifts from Eva\'s death to his knighthood, from moral accountability to social reputation - a displacement that reveals the true priorities of his class. His eagerness to discover that the Inspector was "a fake" and his attempt to reframe the evening as "an elaborate sell" are not merely self-serving but structurally necessary: they demonstrate that the capitalist mindset is incapable of incorporating moral feedback because it lacks the conceptual vocabulary to process it. Birling cannot learn from the Inspector because learning would require him to dismantle the identity he has spent a lifetime constructing. In this, Priestley suggests that the obstacle to social progress is not ignorance but investment - the Birlings of the world resist change not because they do not understand the argument for responsibility but because accepting it would cost them everything they have built their sense of self upon.`,
    },
    markScheme: [
      'Analyses how Priestley presents Mr Birling as unlikeable through language and dramatic irony',
      'Explores the effect of specific words and rhetorical strategies in the extract',
      "Discusses Birling's role and characterisation across the whole play",
      'Considers relevant context (capitalism, socialism, the welfare state, dramatic irony)',
      'Uses well-integrated quotations from the extract and the wider play',
      "Develops a sustained argument about Priestley's purpose in creating this character",
    ],
    examinerTips: [
      "Always frame your analysis around Priestley's intentions - why did he make Birling say this?",
      'Dramatic irony is essential to any answer about Mr Birling.',
      "Do not just describe what Birling says - analyse what it reveals about him and about Priestley's message.",
      'The contrast between Birling and the Inspector is a structural device worth exploring.',
    ],
  },
  {
    id: 'aqa-lit-poetry-comp-1',
    board: 'AQA',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Power & Conflict Poetry Comparison',
    extract: `Poem A - "Ozymandias" by Percy Bysshe Shelley:\n"I met a traveller from an antique land,\nWho said - Two vast and trunkless legs of stone\nStand in the desert. Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away."\n\nCompare with one other poem from the Power and Conflict anthology.`,
    extractSource: 'Poetry anthology extract',
    question:
      'Compare how poets present the abuse or futility of power in "Ozymandias" and one other poem from the Power and Conflict anthology. (30 marks)',
    marks: 30,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Ozymandias" by Shelley and "My Last Duchess" by Browning present the idea that power can be abused and that powerful people can be arrogant and cruel.

In "Ozymandias," Shelley describes a broken statue in the desert. The inscription "My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!" shows that the king was arrogant and wanted everyone to fear him. The title "King of Kings" shows he thought he was the most powerful ruler of all. However, the irony is that "Nothing beside remains" - all his works have been destroyed and only a broken statue is left. The "lone and level sands" that "stretch far away" show that nature has outlasted his power. Shelley is saying that even the most powerful people will be forgotten.

In "My Last Duchess," Browning presents the Duke as another powerful man who abuses his authority. He talks about his dead wife\'s portrait and reveals that he was jealous of her friendliness. He says "I gave commands; Then all smiles stopped together," which strongly suggests he had her killed. The phrase "I gave commands" shows he uses his power casually to control and destroy. Like Ozymandias, the Duke treats people as objects - he now prefers the portrait because he can control it, pulling a curtain over it so "none puts by the curtain I have drawn for you, but I."

Both poems show that powerful people try to control others but ultimately reveal their own weaknesses. Ozymandias\'s power has crumbled to nothing, while the Duke\'s need to control his wife reveals his insecurity rather than his strength.`,
      'Grade 6-7': `Both Shelley and Browning examine the relationship between power and its eventual futility, though they approach it from different temporal perspectives - Shelley from the vantage point of centuries of decay, Browning from the immediacy of tyrannical control.

Shelley structures "Ozymandias" as a narrative within a narrative - "I met a traveller from an antique land, / Who said" - creating multiple layers of distance between the reader and Ozymandias\'s power. This framing device is itself a comment on the transience of authority: the king\'s words reach us only through a chain of intermediaries, his command reduced to reported speech. The ironic juxtaposition of "Look on my Works, ye Mighty, and despair!" with "Nothing beside remains" is the poem\'s central structural device, placing the boast and its negation in devastating proximity. The final image - "The lone and level sands stretch far away" - uses the plosive alliteration of "lone and level" and the expansive vowel sounds to create a sense of vast emptiness that swallows the "colossal Wreck" of Ozymandias\'s ambition.

Browning\'s "My Last Duchess" presents power as present and active rather than historical and decayed. The Duke\'s dramatic monologue reveals his tyranny through what he considers normal conversation: he discusses the murder of his wife with the same tone he uses to point out artworks. The enjambment and caesura in "I gave commands; / Then all smiles stopped together" creates a terrifying pause that contains an entire act of violence within a semi-colon. Where Ozymandias\'s power is explicitly stated ("King of Kings"), the Duke\'s is implicit - he never admits to murder, yet his control over the narrative mirrors his control over the Duchess.

Both poets use art as a vehicle for exploring power. Ozymandias\'s statue was intended to immortalise his greatness but now records only his arrogance; the Duke\'s portrait preserves his wife but only as an object under his control. In both cases, art outlasts the powerful - but it preserves the truth of their character rather than the image they sought to project. Shelley\'s sonnet form, with its unconventional rhyme scheme, itself enacts the breakdown of structures, while Browning\'s relentless iambic pentameter couplets mirror the Duke\'s need for control. Both poets suggest that the attempt to possess power absolutely is ultimately self-defeating.`,
      'Grade 8-9': `Shelley and Browning both anatomise power as a fundamentally performative act - one that requires an audience to function and that is therefore always vulnerable to the audience\'s withdrawal, disappearance, or reinterpretation.

"Ozymandias" is constructed as a study in the archaeology of arrogance. The poem\'s triple narrative frame - the poet, the traveller, the inscription - places three acts of mediation between the reader and Ozymandias\'s original assertion of power, a structure that formally enacts the erosion it describes. Each layer of retelling diminishes the king\'s authority: his words, once carved in stone as commands, are now reported speech within reported speech, their imperative force entirely neutralised. The irony of "Look on my Works, ye Mighty, and despair!" is not simply that the works have vanished but that the command to "Look" survives only in a context that inverts its meaning - we look and despair not at Ozymandias\'s power but at its absence. Shelley\'s chosen form - a Petrarchan sonnet whose rhyme scheme deliberately fractures its own conventions (ABABACDCEDEFEF) - embodies the poem\'s thesis at the level of prosody: the structure of power cannot sustain itself and will inevitably fragment.

Browning\'s "My Last Duchess" presents power at its most concentrated and most revealing. The dramatic monologue form is critical: the Duke believes he is demonstrating his authority and taste, but the reader perceives a confession. The gap between the Duke\'s self-presentation and the reader\'s understanding creates an irony that Browning sustains across fifty-six lines. The possessive "My Last Duchess" reduces a human being to a title of ownership, the adjective "Last" chilling in its implication that the Duchess is merely one in a sequence of possessions. The line "I gave commands; / Then all smiles stopped together" is a masterpiece of understatement: the euphemistic vagueness of "commands" and the finality of "stopped" contain murder within the syntax of administrative efficiency. The caesura after "commands" creates a silence that is itself the space of the Duchess\'s death - unnamed, unnarrated, erased by the very grammar that records it.

What unites the poems is their shared insight that power\'s greatest vulnerability is its dependence on representation. Ozymandias required a sculptor to project his authority; the Duke requires a portrait to contain his wife\'s threatening vitality. In both cases, the artwork becomes the site where power is simultaneously displayed and undermined - the sculptor "well those passions read" and reproduced the "sneer of cold command" rather than the majesty the king intended, while Fra Pandolf\'s portrait preserves the "spot of joy" on the Duchess\'s cheek that the Duke found so intolerable. Art, in both poems, serves truth rather than power, and it is this insubordination of representation that drives the thematic argument.

The temporal contrast between the poems is structurally significant. Shelley writes from a position of historical hindsight, allowing time itself to deliver the verdict on Ozymandias - the "boundless and bare" sands are the ultimate critic. Browning writes from within the exercise of power, capturing the Duke mid-performance, and the reader must deliver the verdict that time has not yet reached. This difference in temporal positioning creates complementary forms of dramatic irony: in Shelley, we see the outcome; in Browning, we foresee it. Together, the poems argue that the futility of tyrannical power is not merely historical accident but structural inevitability - power that depends on subjugation will always, eventually, meet the force that dissolves it, whether that force is geological time or the moral intelligence of the reader.`,
    },
    markScheme: [
      'Compares how both poets present power and its futility',
      'Analyses specific language, form, and structural choices in both poems',
      "Explores the poets' methods and their effects on the reader",
      'Maintains a comparative structure throughout (not poem-by-poem)',
      'Considers relevant contextual factors for both poems',
      'Uses precise, well-integrated quotations from both poems',
    ],
    examinerTips: [
      'Structure by theme or idea, not poem by poem.',
      'Compare methods, not just content - how do the poets achieve different effects?',
      'Form and structure matter: comment on sonnet form, dramatic monologue, rhyme, enjambment.',
      'Context should illuminate analysis, not replace it.',
    ],
  },
  {
    id: 'aqa-lit-unseen-1',
    board: 'AQA',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `The Old Pier\n\nIt stands, though barely, listing like a drunk\nwho can\'t remember where he lives.\nThe timbers groan at every tide,\na sound like ships that never sailed.\n\nOnce, families queued here, sunburned, loud,\nwith buckets, rods, and small ambitions -\na mackerel, perhaps, or just the satisfaction\nof standing where the land gives up.\n\nNow the railings rust to lace.\nBirds own what people left behind.\nThe sea still comes, indifferent as a clock,\nand the pier receives it, open-armed,\nthe way the old receive what they cannot prevent.`,
    extractSource: 'Original poem written for this exercise',
    question:
      'In "The Old Pier," how does the poet present ideas about time and decay? You should consider the poet\'s use of language, form, and structure. (24 marks)',
    marks: 24,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet presents the old pier as something that is falling apart over time. The simile "listing like a drunk who can\'t remember where he lives" compares the pier to a drunk person, which makes it seem unsteady and lost. The word "barely" shows it is only just still standing. The timbers "groan," which is personification that makes the pier sound like it is in pain.

The second stanza describes how the pier used to be busy with "families" who were "sunburned" and "loud." The phrase "small ambitions" - wanting to catch "a mackerel" - shows that the pier was a place of simple, everyday happiness. The phrase "where the land gives up" is interesting because it personifies the land as giving up, which connects to the theme of decay.

In the final stanza, time has changed everything. The railings have rusted "to lace," which is a metaphor that makes something ugly (rust) sound delicate and beautiful. "Birds own what people left behind" shows that nature has taken over from humans. The simile comparing the sea to "a clock" shows that time keeps going regardless. The final image of the pier receiving the sea "open-armed" like an old person who cannot prevent what is happening is sad because it suggests acceptance of decay and death.`,
      'Grade 6-7': `The poet structures the poem as a temporal triptych - present decay, remembered vitality, and philosophical acceptance - using the pier as a metaphor for ageing and the passage of time.

The opening stanza establishes decay through personification. The simile "listing like a drunk / who can\'t remember where he lives" is simultaneously comic and poignant: the enjambment across the line break creates a stumbling rhythm that mimics the pier\'s physical instability, while the image of forgetting "where he lives" transforms structural damage into a form of dementia, conflating the architectural with the human. The aural imagery of timbers groaning "like ships that never sailed" adds a layer of unfulfilled potential - the pier\'s sound evokes journeys never taken, ambitions unrealised.

The second stanza pivots to memory, and the shift in tone is achieved through specificity. The listing of "buckets, rods, and small ambitions" moves from concrete objects to abstract feelings, the adjective "small" conveying both modesty and tenderness. The phrase "where the land gives up" operates on two levels: literally, where the coastline ends, but figuratively, where the known world surrenders to the unknown. The caesura created by the dash before "a mackerel, perhaps" introduces a hesitancy that captures the tentative nature of hope.

The final stanza resolves the temporal structure with an image of acceptance. The metaphor "rust to lace" performs a transformation that is itself the poem\'s central insight: decay has its own beauty, its own artistry. The simile "indifferent as a clock" strips time of intentionality - the sea does not destroy the pier deliberately, just as time does not target the old. The closing lines, comparing the pier\'s openness to "the way the old receive what they cannot prevent," make the poem\'s allegorical meaning explicit without sentimentality. The verb "receive" is carefully chosen: it implies neither resistance nor welcome but a dignified passivity, an acceptance that is itself a form of grace.`,
      'Grade 8-9': `The poem enacts a meditation on temporality through a structure that mirrors the archaeological layers of the pier itself - the present visible surface, the buried past, and the philosophical substrate that connects them.

The opening stanza deploys personification not as decorative technique but as ontological argument: by comparing the pier to "a drunk / who can\'t remember where he lives," the poet collapses the distinction between structure and self, implying that places, like people, possess a form of memory that deterioration erodes. The enjambment across "a drunk / who can\'t remember" is formally precise - the line break creates a momentary suspension that replicates the drunk\'s unsteadiness, the second line arriving late and uncertain. The synesthetic image of timbers groaning "like ships that never sailed" layers sound onto absence: the pier was built for arrivals and departures, but the ships it evokes are imagined rather than real, and the groan becomes an expression of purposes unfulfilled. The subjunctive "never sailed" contains an entire counter-history of possibility.

The second stanza\'s shift to past vitality is achieved through the cataloguing technique - "buckets, rods, and small ambitions" - a list that moves from the tangible to the intangible with the precision of a zoom lens pulling back. The modifier "small" before "ambitions" is the stanza\'s emotional centre: it refuses to aggrandise the past, insisting instead that the pier\'s significance lay in the ordinary. The phrase "where the land gives up" achieves a remarkable compression - it is simultaneously geographical description (the coastline\'s end), existential metaphor (the boundary of the known), and proleptic echo of the poem\'s final theme of surrender. The line break after "satisfaction" delays the revelation that the satisfaction is modest - "of standing" - and this delay is itself satisfying, the form performing the pleasure of patience.

The final stanza achieves resolution through a series of transformations that refuse sentimentality. "Railings rust to lace" transforms corrosion into artistry through a metaphor that insists on the aesthetic dimension of entropy - an essentially Romantic claim that beauty is not diminished but restructured by time. The claim that "Birds own what people left behind" inverts the colonial narrative of possession: the pier, built to extend human dominion over the sea, has been reclaimed by the natural world, and the verb "own" grants to birds the very property rights that humans have forfeited. The simile "indifferent as a clock" is philosophically precise - a clock does not intend to measure time; it simply does so, and the sea\'s relationship to the pier is similarly devoid of agency or malice.

The poem\'s closing lines - "the pier receives it, open-armed, / the way the old receive what they cannot prevent" - consummate the human-structural allegory with an image of radical acceptance. The compound adjective "open-armed" operates in deliberate tension: it suggests welcome, but the subsequent qualification ("what they cannot prevent") reveals that the welcome is born of powerlessness, not generosity. This is not resignation but something more complex - a dignity that emerges precisely from the absence of alternatives. The final word, "prevent," ends the poem on a stressed syllable that closes like a door, and the absence of any subsequent image or commentary allows the reader to sit with the silence that follows, a formal equivalent of the pier\'s own patient waiting.`,
    },
    markScheme: [
      'Analyses how the poet uses language to present ideas about time and decay',
      'Explores the effects of specific images, metaphors, and similes',
      'Comments on form and structure (stanza organisation, line breaks, progression)',
      'Uses well-selected quotations embedded in analysis',
      "Considers the poet's overall purpose and the reader's response",
      'Develops a sustained personal interpretation',
    ],
    examinerTips: [
      'For unseen poetry, read the poem at least twice before writing.',
      'Comment on the overall journey of the poem - how does it develop from start to finish?',
      'Pay attention to form: line breaks, stanza divisions, and punctuation all create meaning.',
      'Offer a personal response: what does the poem make you think and feel?',
    ],
  },
  {
    id: 'aqa-p2-leaflet-1',
    board: 'AQA',
    paper: 2,
    type: 'Persuasive Writing',
    questionType: 'Persuasive Writing',
    difficulty: 'Higher',
    title: 'Persuasive leaflet about screen time',
    extract: ``,
    question:
      'Write a persuasive leaflet for teenagers encouraging them to reduce daily screen usage and spend more time on offline activities. (400-500 words)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `BREAK FREE: Your Guide to Life Beyond the Screen\n\nHow much time do you spend looking at screens? Studies show young people spend an average of 7 hours a day on screens. That\'s more time than you spend sleeping!\n\nWhy does it matter?\nScreens are everywhere - phones, laptops, tablets. But too much online time can:\n• Make you feel anxious and depressed\n• Give you headaches and eye strain\n• Stop you sleeping properly\n• Make you less likely to exercise\n• Reduce your ability to concentrate\n\nWhat can you do?\n1. Set limits. Don\'t use your phone for an hour before bed.\n2. Find offline activities. Read, walk, meet friends, play sport, draw, cook.\n3. Use apps that limit screen time. Some phones have settings that stop you using apps after a certain time.\n4. Make phone-free zones. Don\'t have phones at dinner or in bedrooms.\n5. Ask for help. If you find reducing screen time hard, talk to a trusted adult.\n\nThe benefits of less screen time:\n• Better sleep\n• Better mood\n• More real friendships\n• Better concentration\n• More time for hobbies\n\nTake the challenge!\nTry reducing screen time by just one hour a day. See how you feel after a week. You might be surprised.\n\nYou are in control. Your phone doesn\'t have to control you.`,
      'Grade 6-7': `BREAK FREE: Reclaim Your Life from the Screen\n\n[Header with striking image of person looking out at sunrise rather than at phone]\n\nA HARD TRUTH:\nYoung people now spend an average of seven hours daily on screens. That\'s one third of your waking life spent looking at a glowing rectangle. Compare that to time with family (30 minutes) or physical activity (1 hour). The maths is stark.\n\nWHAT SCIENCE TELLS US:\n\nYour brain on screens:\nExcessive screen time changes how your brain works. It reduces concentration, makes anxiety and depression more likely, and disrupts sleep cycles crucial during adolescence. The blue light from screens tricks your brain into thinking it\'s daytime, keeping you awake precisely when you need rest.\n\nYour mood on screens:\nSocial media is designed to be addictive. Every like, comment, and notification triggers a release of dopamine - the "feel-good" chemical. This creates a cycle of craving and checking mimicking addictive behaviour. Studies show heavy social media users report higher levels of loneliness and anxiety. The paradox is stark: we use phones to feel connected, yet end up feeling more isolated.\n\nYour body on screens:\nPhysical activity plummets. Sleep quality deteriorates. Focus becomes fragmented. You\'re not imagining the headaches and eye strain - they\'re real physiological responses to prolonged exposure.\n\nWHAT YOU CAN DO:\n\nSmall changes, big results:\n• Create a "phone-free hour" each day.\n• Establish bedroom boundaries. Phones out after 9 p.m. Your sleep will improve immediately.\n• Replace one hour of screen time daily with something physical: walking, cycling, dancing, sport.\n• Seek real conversation. Meet friends in person. Notice the difference in how connected you feel.\n• Pursue offline hobbies. Rediscover the absorption that comes from reading, drawing, music, or sport.\n\nTHE CHALLENGE:\nReduce daily screen time by 30 minutes for one week. Track how you feel. We predict: better sleep, clearer thinking, improved mood, more energy.\n\nYOU\'RE IN CONTROL.\nDon\'t let your phone control you. The life beyond the screen is waiting.`,
      'Grade 8-9': `BREAK FREE: A Call to Conscious Consumption\n\n[Striking visual: silhouette of person silhouetted against phone screen, progressively fading back to reveal landscape]\n\nA STATISTICAL RECKONING:\n\nYoung people now expend approximately seven hours daily on digital screens. This warrants serious examination: across a seventy-year lifespan, this represents roughly one-third of conscious existence spent in mediated interaction with digital interfaces. The opportunity cost is profound. Seven hours online represents subtraction from seven hours of embodied, unmediated experience - time with people you love, time moving your body, time in silence and solitude, time in natural world.\n\nTHE NEUROSCIENCE OF SCREEN DEPENDENCY:\n\nWhat you\'re experiencing is not weakness; it\'s neurobiology. Social media platforms employ techniques derived from behavioural psychology specifically designed to maximise engagement and dependency. Every notification, like, and comment triggers dopamine release - the same neurochemical implicated in addiction. You are not being weak when you constantly check your phone; you are responding to mechanisms engineered by some of the world\'s largest technology companies explicitly to capture and monetise your attention.\n\nMoreover, the structure of digital communication - fragmented, interruptive, algorithmically-curated - fundamentally alters how your brain processes information. Studies using fMRI imaging demonstrate that heavy social media use is correlated with reduced grey matter density in regions associated with decision-making, impulse control, and emotional regulation. The relationship is bidirectional: excessive screen time rewires your brain in ways that make sustained focus, deep reading, and genuine conversation increasingly difficult.\n\nWHAT\'S AT STAKE:\n\nThis is not merely a health issue (though correlation between heavy screen use and depression, anxiety, and sleep disorders is now well-established). It\'s an existential question: What kind of life do you want to live? What experiences matter? What constitutes genuine connection?\n\nA person might have ten thousand social media followers and experience acute loneliness. Conversely, a person might have a handful of real friendships characterised by embodied presence, vulnerability, and kind of sustained attention that only develops over time. Which is connection? Which is belonging?\n\nWHAT YOU CAN DO:\n\nReclaim your attention:\n1. Quantify. Track your actual screen time for one week. The number will likely shock you.\n2. Create sanctuary. Designate rooms or times as phone-free zones. Your bedroom is for sleep, not scrolling.\n3. Replace, don\'t just restrict. Don\'t just remove your phone; make space for what matters: conversation, movement, creation, solitude.\n4. Seek friction. Make accessing digital content slightly harder: logout of apps, put phone in another room, use grayscale mode.\n5. Practise presence. When with friends, phones are away. Experience what genuine dialogue feels like.\n\nTHE EXPERIMENT:\nReduce daily screen time by one hour for fourteen days. Notice: sleep quality, mood, concentration, sense of connection with people around you. The data will convince you far more than any argument.\n\nFINAL THOUGHT:\nYou were not born with a phone in your hand. You are capable of a kind of attention and presence that your phone is engineered to prevent you from achieving. The life beyond the screen - life of embodied presence, of boredom that sparks creativity, of genuine friendship, of being fully present to your own existence - is available to you. You simply have to choose it.`,
    },
    markScheme: [
      'Constructs persuasive argument with clear appeals to audience',
      'Uses rhetorical techniques effectively (rhetoric, repetition, emotional appeal)',
      'Structures leaflet with clear sections and visual impact',
      'Maintains persuasive tone appropriate to purpose and audience',
      'Supports claims with relevant evidence and examples',
      'Uses accurate spelling, punctuation, grammar',
    ],
    examinerTips: [
      'Remember your audience: teenagers. Avoid being patronising or preachy.',
      'Use questions and direct address to engage the reader.',
      'Combine factual information with emotional appeals.',
      'Visual layout and formatting matter - use headings and white space.',
    ],
  },
]
