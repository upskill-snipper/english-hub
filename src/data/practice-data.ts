export interface ModelAnswers {
  [grade: string]: string;
}

export interface PracticeQuestion {
  id: string;
  board: string;
  paper?: number;
  questionType?: string;
  type?: string;
  difficulty?: string;
  tier?: string;
  title?: string;
  extract: string;
  extractSource?: string;
  question: string;
  marks?: number;
  timing?: string;
  modelAnswers: ModelAnswers;
  markScheme: string[];
  examinerTips: string[];
}

export const practiceQuestions: PracticeQuestion[] = [
  // AQA Paper 1 Q2 - Language Analysis
  {
    id: 'p1-lang-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Language Analysis (Q2)',
    difficulty: 'Foundation',
    extract: `The morning fog crept across the marshes like a living thing, its cold fingers probing every hollow and ditch. Pip shivered and pulled his thin coat tighter, but nothing could keep out the chill that seemed to rise from the very earth beneath his feet. The churchyard stones stood like broken teeth in the grey half-light, each one marking a life that had ended in this desolate place.`,
    extractSource: 'Adapted from Charles Dickens, Great Expectations',
    question: 'How does the writer use language to create a sense of fear and discomfort in this extract? You could include the writer\'s choice of words and phrases, language features and techniques, and sentence forms.',
    modelAnswers: {
      'Grade 4-5': `The writer uses personification when the fog "crept across the marshes like a living thing" which makes it seem threatening and alive. The word "crept" suggests something sneaky and dangerous. The writer also uses a metaphor when describing the fog's "cold fingers probing every hollow," which makes the fog seem like it is searching for Pip, creating fear. The simile comparing gravestones to "broken teeth" makes the churchyard sound ugly and frightening. The word "desolate" means lonely and empty, which adds to the uncomfortable feeling.`,
      'Grade 6-7': `Dickens personifies the fog as a predatory, sentient force, describing it as "a living thing" with "cold fingers probing every hollow and ditch." The verb "probing" implies an invasive, deliberate searching, as though the landscape itself is hostile. This pathetic fallacy establishes nature as an antagonist. The simile "stood like broken teeth" transforms the gravestones into something grotesque and decayed, the adjective "broken" suggesting violence and neglect. Dickens layers discomfort through tactile imagery — "shivered," "thin coat," "chill" — creating a cumulative physical unease that mirrors Pip's vulnerability. The final noun phrase "this desolate place" anchors the paragraph in isolation, the demonstrative "this" forcing proximity between reader and setting.`,
      'Grade 8-9': `Dickens constructs an atmosphere of existential dread through sustained personification of the natural world as a malevolent intelligence. The fog does not simply exist — it "crept" and its "cold fingers" are "probing," verbs that suggest both stealth and violation. The progressive movement from external threat ("across the marshes") to bodily invasion ("the very earth beneath his feet") dramatises Pip's powerlessness as the hostile environment closes in on him. The simile comparing gravestones to "broken teeth" operates on multiple levels: the visual resemblance creates a visceral, almost corporeal image of the graveyard as a monstrous mouth, while the adjective "broken" encodes both physical decay and the shattered lives they represent. Dickens's syntax reinforces vulnerability — the short declarative "Pip shivered" is swallowed by the longer qualifying clause, just as Pip himself is overwhelmed by his surroundings. The final phrase, "this desolate place," with its deictic "this," collapses the distance between reader and text, demanding that we inhabit Pip's fear rather than merely observe it.`,
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
      'Always explain WHY a technique creates an effect — don\'t just spot it.',
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
      'Grade 6-7': `The writer constructs the woman's power through her effect on others rather than through direct description. The opening sentence — "She was not beautiful in any conventional sense" — uses the negative construction to immediately challenge the reader's expectations, implying that her power transcends physical appearance. The tricolon of "too angular," "too wide," "too deep" initially frames her features as flaws, but the repeated "too" paradoxically emphasises their distinctiveness rather than their inadequacy. Her impact is conveyed through the reactions of those around her: conversations "faltered" — a verb suggesting involuntary weakness — and men "stood foolishly, mid-sentence," the interrupting comma mimicking the disruption she causes. The final image of movement "with the grace of someone who had never once doubted" attributes her power to absolute self-possession, the adverb "never" and "once" intensifying the certainty.`,
      'Grade 8-9': `The writer constructs female power as something that cannot be contained by conventional frameworks of beauty or language. The opening negative — "not beautiful in any conventional sense" — performs a double function: it denies the male gaze its usual vocabulary while simultaneously drawing attention to the inadequacy of that vocabulary. The tricolon cataloguing her features ("too angular," "too wide," "too deep") employs the adverb "too" not as genuine criticism but as a marker of excess that refuses to conform to normative standards. Her brows seem "permanently raised in a question that nobody had yet answered" — this is not insecurity but intellectual challenge, the temporal "yet" implying that others have failed her, not the reverse. The syntactic shift at "But when she entered a room" pivots the paragraph from static description to dynamic effect. The short declaratives — "The air changed. Conversations faltered." — enact the disruption they describe, their brevity cutting through the elaborate preceding sentence. The men, previously "holding forth on matters of great importance," are reduced to standing "foolishly, mid-sentence" — the parenthetical "mid-sentence" brilliantly capturing the moment of fracture. Her power is ultimately located not in beauty but in certainty: the final clause, "the grace of someone who had never once doubted where she was going," uses the pluperfect to suggest a lifetime of self-assurance, while the word "grace" reclaims a term usually applied to passive femininity and charges it with purpose and direction.`,
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
  // AQA Paper 1 Q3 - Structure
  {
    id: 'p1-struct-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Structure Analysis (Q3)',
    difficulty: 'Foundation',
    extract: `At first, the house seemed ordinary enough. A red door, a brass knocker, a welcome mat that said WELCOME in cheerful block letters. The windows reflected the afternoon sun and the garden was neat, if unimaginative — a row of marigolds, a square of lawn.\n\nBut as Tom walked up the path, he noticed something odd. One of the upstairs curtains twitched, though no one was supposed to be home. The welcome mat, he now saw, was turned at an angle, as if someone had left in a hurry. Or arrived.\n\nThe door was already open. Not wide — just an inch. Enough to see the darkness inside. Enough to know that stepping through it would change everything.`,
    extractSource: 'Original composition',
    question: 'How has the writer structured the text to interest you as a reader? You could write about what the writer focuses your attention on at the beginning, how and why the writer changes this focus as the text develops, and any other structural features that interest you.',
    modelAnswers: {
      'Grade 4-5': `At the beginning, the writer focuses on making the house seem normal and safe. Words like "ordinary," "cheerful" and "neat" make the reader feel comfortable. The paragraph describes things you would expect to see at any house. In the second paragraph, the focus shifts to things that are wrong. The curtain "twitched" even though nobody should be home, and the mat is at an angle. The word "But" at the start signals this change clearly. By the end, the tension has built up and the open door creates a cliffhanger. The short sentences "Not wide — just an inch" slow the reader down and create suspense. The final sentence makes us want to read on.`,
      'Grade 6-7': `The writer structures the text as a movement from normality to unease, using a carefully controlled shift in focus. The opening paragraph establishes a deliberately mundane setting through the listing of domestic details — "A red door, a brass knocker, a welcome mat." The use of declarative fragments creates a snapshot effect, inviting the reader to construct a picture of safety. The phrase "if unimaginative" adds a note of mild dismissiveness that reinforces the ordinariness. The second paragraph pivots on the adversative "But," signalling a disruption. The writer narrows the focus from the general scene to specific unsettling details: the twitching curtain, the angled mat. The past participle "turned" is ambiguous — passive voice withholds who or what caused it — and the final fragment "Or arrived" is structurally isolated for maximum impact, reversing the reader's assumption and reframing the scene. The final paragraph accelerates the shift through increasingly short sentences. "Not wide — just an inch" uses the dash to create a pause that mimics the tentative opening of the door. The closing sentence, with its abstract noun "everything," elevates the domestic into the ominous, using the future conditional to create a cliffhanger that compels continued reading.`,
      'Grade 8-9': `The extract is structured as a carefully orchestrated collapse of the domestic into the uncanny. The opening paragraph performs the work of reassurance — the listing of "A red door, a brass knocker, a welcome mat" uses noun phrases in a paratactic sequence that mimics the reader's scanning eye, constructing a world of comfortable predictability. The welcome mat that says "WELCOME in cheerful block letters" is almost parodic in its ordinariness, the capitalisation rendering it a sign rather than a genuine greeting. The phrase "neat, if unimaginative" subtly positions the narrator as detached, observational — someone cataloguing surfaces rather than inhabiting the scene. This detachment becomes significant when the second paragraph destabilises what has been established. The structural hinge — "But" — is deliberately conventional, because the disruption works precisely because it infiltrates through the same ordinary details: the mat is still there, but now "turned at an angle." The writer's structural technique here is to re-present familiar objects as evidence, transforming the descriptive mode into something closer to forensic investigation. The parenthetical "Or arrived" functions as a structural volta, a two-word reversal that reframes every preceding detail. In the final paragraph, the sentence fragments perform the work of approaching the unknown: "Not wide — just an inch" uses the self-correcting structure to dramatise the narrowing of focus, while "Enough to see the darkness inside" and "Enough to know" create an anaphoric rhythm that builds inevitability. The abstract final clause — "would change everything" — refuses specificity, and this structural withholding is itself the source of the text's power: the reader must step through the door of reading to resolve the tension the writer has created.`,
    },
    markScheme: [
      'Comments on the overall structural shift (beginning/middle/end)',
      'Analyses how focus changes across paragraphs',
      'Comments on sentence-level structural choices',
      'Considers the effect on the reader',
      'Uses structural terminology (shift, focus, pace, tension)',
    ],
    examinerTips: [
      'Don\'t just describe what happens — explain WHY the writer makes structural choices.',
      'Think about beginning, middle, and end separately.',
      'Comment on paragraph openings and sentence length as structural tools.',
    ],
  },
  // AQA Paper 2 Q4 - Comparison
  {
    id: 'p2-comp-1',
    board: 'AQA',
    paper: 2,
    questionType: 'Comparison (Q4)',
    difficulty: 'Higher',
    extract: `Source A (1912): "The suffragette movement has gone too far. These women — if they may still be called such — have abandoned every principle of feminine decency in their hysterical pursuit of a right they are temperamentally unfit to exercise. The vote is a serious matter, requiring calm judgement and rational deliberation. It is not a plaything for those governed by emotion."\n\nSource B (2020): "Women's participation in politics has transformed every democracy for the better. Research consistently shows that gender-diverse legislatures produce more effective policy outcomes. Yet even now, women hold only 26% of parliamentary seats worldwide. The barriers are structural, not natural — and dismantling them requires more than good intentions."`,
    extractSource: 'Source A: Adapted from a 1912 editorial; Source B: Adapted from a 2020 policy paper',
    question: 'Compare how the two writers convey their different perspectives on women in politics. In your answer, you could compare their different perspectives, the methods they use to convey those perspectives, and how far you agree with either writer.',
    modelAnswers: {
      'Grade 4-5': `The two writers have very different perspectives on women in politics. Source A, from 1912, argues that women should not have the vote because they are "temperamentally unfit" and too emotional. Source B, from 2020, argues the opposite — that women make politics better. Source A uses negative language like "hysterical" and "abandoned every principle of feminine decency" to make the suffragettes sound unreasonable. In contrast, Source B uses facts and statistics such as "only 26% of parliamentary seats" to support their argument logically. Both writers use confident language but Source A relies on insults while Source B uses evidence. I agree more with Source B because it uses real data rather than just opinions.`,
      'Grade 6-7': `The two sources present diametrically opposed perspectives, yet both deploy rhetorical strategies designed to make their position seem like common sense. Source A constructs women as emotionally unstable through the lexical field of irrationality — "hysterical," "emotion," "plaything" — positioning the vote as requiring qualities antithetical to femininity. The parenthetical aside "if they may still be called such" questions the suffragettes' very womanhood, implying that political ambition is a form of gender betrayal. In contrast, Source B reframes women's political participation as empirically beneficial, using the assertive "consistently shows" and the quantitative "only 26%" to ground its argument in evidence rather than ideology. Where Source A naturalises exclusion — women are "temperamentally unfit" — Source B historicises it, insisting that "the barriers are structural, not natural." This single sentence directly contradicts the entire premise of Source A. Both writers use the tricolon: Source A's "calm judgement and rational deliberation" constructs a narrow definition of political competence, while Source B's "more than good intentions" implies that passive support is insufficient. However, Source A's reliance on ad hominem attack ("hysterical," "governed by emotion") contrasts sharply with Source B's appeal to collective benefit.`,
      'Grade 8-9': `These two sources are separated by over a century, yet they are locked in the same argument — one that persists because it concerns not simply women's rights but the contested boundary between nature and politics. Source A's rhetorical strategy depends on presenting exclusion as protection: the vote requires "calm judgement," a quality the writer implicitly reserves for men, while women are "governed by emotion" — the passive construction itself enacting the subjugation it describes. The lexis of contamination — "abandoned," "gone too far," "hysterical" — frames women's political agency as pathological, something to be diagnosed rather than debated. The parenthetical "if they may still be called such" is the text's most violent move: it revokes gender identity as punishment for transgression, revealing that the writer's real anxiety is not about competence but about control. Source B refuses this framework entirely. Its opening assertion — "Women's participation in politics has transformed every democracy for the better" — is not defensive but declarative, positioning women's exclusion as the aberration. The statistics ("only 26%") function not as dry data but as an indictment, the adverb "only" encoding both insufficiency and injustice. The crucial intervention comes in Source B's distinction between structural and natural barriers: this directly dismantles the essentialist logic of Source A, insisting that what one era calls "temperament" is merely the residue of unexamined power structures. Both writers claim objectivity — Source A through the appeal to "rational deliberation," Source B through research evidence — yet their rhetorical modes are fundamentally different: Source A argues from assumed authority, Source B from accumulated evidence. The shift between them maps the broader movement in Western thought from deductive to inductive reasoning about equality.`,
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
      'Don\'t forget to include your own perspective in the final paragraph.',
    ],
  },
  // Paper 1 Q5 - Creative Writing
  {
    id: 'p1-write-1',
    board: 'AQA',
    paper: 1,
    questionType: 'Creative Writing (Q5)',
    difficulty: 'Foundation',
    extract: '',
    extractSource: '',
    question: 'Write a description suggested by this picture: A lone figure walking along an empty beach at sunset. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    modelAnswers: {
      'Grade 4-5': `The beach stretched out in front of her like a golden ribbon. The sun was setting, turning the sky orange and pink. She walked slowly along the water's edge, her feet sinking into the wet sand with each step.\n\nThe waves rolled in gently, making a soft shushing sound as they reached the shore. Seagulls circled overhead, their cries echoing across the empty beach. She was completely alone, but she didn't mind. Sometimes you need to be alone to hear yourself think.\n\nThe wind blew her hair across her face and she tasted salt on her lips. The air smelled of seaweed and something else — something clean and fresh that you only find at the coast. She breathed it in deeply, filling her lungs.\n\nAs the sun sank lower, the shadows grew longer. The sand beneath her feet changed from warm gold to cool grey. Soon the light would be gone, but she wasn't ready to leave. Not yet. There was something about this place, this moment, that she wanted to hold onto for just a little while longer.`,
      'Grade 6-7': `Amber light pooled across the sand like spilled honey, thick and warm against the cooling air. The beach was deserted — not empty, exactly, but cleared, as if the tide had taken the crowds along with the shells and driftwood. Only one figure remained.\n\nShe walked at the waterline where the sand was firmest, each footprint filling with silver water the moment she lifted her heel. Behind her, a chain of small lakes marked her path. Ahead, the beach curved into haze, the boundary between sand and sky dissolved by the low sun.\n\nThe sea breathed beside her — a slow, rhythmic exhale that seemed to come from somewhere deep beneath the surface. Each wave unravelled itself across the shore like a whispered secret, retreating before she could catch the words. Overhead, a single gull hung motionless against the bruised sky, suspended on thermals that she could feel pressing against her own skin.\n\nShe stopped. The wind dropped. For one held breath, everything was still: the sea paused mid-reach, the gull frozen, the light balanced on the horizon like a coin on its edge. Then the moment passed. The wave completed its collapse. The gull wheeled away. And she walked on, leaving nothing behind but footprints that the sea would claim within the hour.`,
      'Grade 8-9': `There is a particular quality to light at the edge of the day — not dimmer, exactly, but denser, as if the sun, in its final minutes, is trying to fit everything it has left into a narrower and narrower beam. The sand caught it and held it. Each grain seemed to contain its own small fire.\n\nShe walked where the water met the land, that uncertain border where solid ground remembers it was once sea and the sea remembers it will one day be land. Her footprints were negotiations: the sand agreed to hold her weight; she agreed to leave. Neither party had any intention of keeping their promise.\n\nThe wind came from nowhere in particular. It carried salt, and the ghost of warmth, and the sound of something that might have been waves or might have been her own breathing — she had stopped being able to tell the difference. The coast had a way of dissolving boundaries. Skin and air. Sound and silence. The present tense and every other tense that had ever washed up on this shore.\n\nA gull stitched a line between two clouds, its cry unravelling behind it like thread. She watched it without seeing it. There were things to think about and she had brought them here to think about them, but the beach had its own agenda. It wanted her attention. It wanted her to notice how the foam caught the last of the light and wore it briefly, like lace, before letting it go. It wanted her to understand that letting go was not loss but repetition — that everything the tide took, it also returned, changed and salt-cleaned and ready to be found again.\n\nThe sun touched the water. She stopped walking. Somewhere behind her, her footprints were already filling in.`,
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
      'Vary your sentence lengths deliberately — short sentences for impact, long for atmosphere.',
      'End strongly. Your final image or sentence should linger.',
    ],
  },
  // Paper 2 - Writing to Argue
  {
    id: 'p2-write-1',
    board: 'AQA',
    paper: 2,
    questionType: 'Writing to Argue/Persuade (Q5)',
    difficulty: 'Foundation',
    extract: '',
    extractSource: '',
    question: '"Social media does more harm than good for young people." Write an article for a broadsheet newspaper in which you argue for or against this statement. (40 marks)',
    modelAnswers: {
      'Grade 4-5': `Social media is a huge part of young people's lives today. Most teenagers spend hours every day on platforms like Instagram and TikTok. But is this actually hurting them?\n\nFirstly, social media can be bad for mental health. Studies have shown that young people who spend a lot of time on social media are more likely to feel anxious or depressed. This is because they are constantly comparing themselves to other people's perfect-looking lives, which are usually fake anyway.\n\nHowever, social media is not all bad. It helps young people stay connected with friends and family. During lockdown, it was the only way many teenagers could socialise. It also allows young people to find communities of people who share their interests, which can be especially important for those who feel different or isolated.\n\nOn the other hand, cyberbullying is a serious problem. Unlike bullying at school, online bullying follows you home. There is no escape. Young people can receive hurtful messages at any time of day or night.\n\nIn conclusion, while social media has some benefits, I believe it does more harm than good for young people. The damage to mental health and the risk of cyberbullying outweigh the advantages of staying connected. Social media companies need to do more to protect their youngest users.`,
      'Grade 6-7': `Every generation fears for its children. In the 1950s, it was rock and roll. In the 1980s, video games. Today, the moral panic has a new target: social media. But this time, the panic might be justified.\n\nThe evidence is difficult to ignore. A landmark study by the Royal Society for Public Health found that Instagram was the worst social media platform for young people's mental health. Rates of anxiety and depression among teenagers have risen in almost exact correlation with smartphone adoption. Coincidence? Researchers increasingly think not. The mechanisms are well understood: social comparison, sleep disruption, addictive design features engineered by Silicon Valley's brightest minds. When an app is deliberately designed to be impossible to put down, calling its effects on teenagers "their own choice" is disingenuous at best.\n\nYet dismissing social media entirely would be both naive and counterproductive. For LGBTQ+ teenagers in unsupportive environments, online communities can be lifelines. For young people with niche interests, social media provides connection that geography denies. The issue is not the technology itself but the exploitative business model that underpins it: attention harvested, sold to advertisers, and consequences externalised onto the mental health services that pick up the pieces.\n\nThe solution, then, is not abstinence but regulation. We do not allow children to buy alcohol or drive cars. We should not allow technology companies to design addictive products targeted at developing brains without meaningful oversight. Until we treat social media companies with the same regulatory seriousness we apply to tobacco or gambling, we are choosing corporate profits over children's wellbeing. And that is a choice we should all be uncomfortable with.`,
      'Grade 8-9': `Consider a thought experiment. A stranger approaches your child and offers them a device. This device will allow your child to compare their appearance with digitally manipulated images for several hours a day. It will deliver messages from anonymous strangers directly to their bedroom at 2am. It will track their location, harvest their personal data, and sell their attention to the highest bidder. It will be deliberately engineered to be psychologically addictive. Would you hand it over? You already have.\n\nThe debate about whether social media harms young people is, at this point, performative. We know it does. The American Psychological Association, the Royal College of Psychiatrists, and the Surgeon General of the United States have all issued formal warnings. Adolescent mental health has deteriorated across every metric that correlates with social media use. The remaining question is not whether the harm exists but why we continue to tolerate it.\n\nThe answer, predictably, is money. Social media companies generate revenue by maximising engagement, and engagement is maximised by content that provokes anxiety, outrage, and inadequacy. A teenager who feels confident and content is a teenager who puts down their phone. The business model depends on ensuring they do not. This is not conspiracy — it is quarterly earnings reports.\n\nDefenders of social media point to its connective potential, and they are not wrong. For marginalised young people, online communities provide solidarity that their physical environments deny. But this argument mistakes a feature for a justification. Cars are useful; we still require seatbelts. The question has never been whether social media offers benefits but whether those benefits require the current model of unregulated, algorithmically optimised psychological exploitation.\n\nThey do not. And until we stop framing this as a debate about personal responsibility — as if a fourteen-year-old can reasonably be expected to resist tools designed by teams of behavioural psychologists — we remain complicit in the damage. The children are not the problem. The adults who profit from their attention are.`,
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
      'Open with something striking — a fact, a question, a bold statement.',
      'Address the counter-argument to show sophistication.',
      'End with a powerful closing line that echoes your opening.',
      'Use short paragraphs for emphasis. One-sentence paragraphs are powerful.',
    ],
  },
  // ========================================
  // EDEXCEL GCSE ENGLISH LANGUAGE QUESTIONS
  // ========================================

  // Edexcel Paper 2 (1EN2/02) - Fiction and Imaginative Writing
  // Q1-type: Retrieval / Comprehension
  {
    id: 'edexcel-p2-retrieval-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Retrieval (Q1)',
    difficulty: 'Foundation',
    extract: `The marketplace was alive with colour and noise. Stalls lined both sides of the narrow lane, their awnings flapping in the autumn breeze. Mrs Alston moved between them with practised efficiency, her basket already half full. She paused at the fishmonger's, inspecting the catch with a critical eye. The mackerel were fresh — she could tell by the brightness of their scales and the clarity of their eyes — but the prices had gone up again. Everything had gone up. She selected two fish, counted out her coins carefully, and moved on without a word.\n\nAt the far end of the market, where the lane opened into the square, a boy sat cross-legged on the cobblestones with a wooden flute. He could not have been more than ten. His shoes were held together with string and his jacket hung off one shoulder, but his playing was extraordinary — a melody that rose above the shouts and clatter like smoke above a chimney, curling and drifting until it seemed to fill the entire square. Mrs Alston stopped. She stood very still for a long time. Then she placed a coin in the cap at his feet and walked away quickly, before anyone could see her expression.`,
    extractSource: 'Original composition in the style of literary realism',
    question: 'From lines 1–8, identify four things you learn about Mrs Alston from the extract. (4 marks)',
    modelAnswers: {
      'Grade 4-5': `From the extract, I learn that Mrs Alston is experienced at shopping in the market because she moves with "practised efficiency." I also learn that she is careful with money, as she "counted out her coins carefully." Third, she has knowledge about fish because she can tell whether mackerel are fresh by looking at their scales and eyes. Finally, she does not like to show her emotions, as she walks away "quickly, before anyone could see her expression."`,
      'Grade 6-7': `The extract reveals that Mrs Alston is a regular and efficient market shopper who navigates the stalls with "practised efficiency," suggesting long familiarity with this routine. She is also financially careful, counting coins precisely and noting that "everything had gone up," implying she is conscious of price changes and possibly under financial pressure. Her ability to judge the freshness of mackerel by "the brightness of their scales and the clarity of their eyes" reveals practical domestic expertise. Finally, her transaction is conducted without unnecessary interaction — she moves on "without a word" — indicating a reserved, unsentimental character.`,
      'Grade 8-9': `Mrs Alston is established as a figure of practised domestic competence: she shops with "practised efficiency," a phrase implying both routine and skill. She is financially watchful, selecting only two fish and counting coins carefully, while her internal observation that "everything had gone up" reveals an awareness of economic pressure. Her expertise in judging fish freshness — by scales and eyes — speaks to a lifetime of domestic knowledge. Perhaps most significantly, she is emotionally guarded: she conducts her purchase "without a word" and later leaves the boy musician "quickly, before anyone could see her expression," suggesting someone who feels deeply but considers the display of emotion a vulnerability.`,
    },
    markScheme: [
      'Identifies four distinct pieces of information about Mrs Alston',
      'Points are supported with textual reference or quotation',
      'Each point is clearly a separate piece of information (not repetition)',
      'Points are drawn from the specified line range',
    ],
    examinerTips: [
      'This is a retrieval question — keep answers clear and concise.',
      'Each point should be a separate, distinct piece of information.',
      'Use short quotations to support each point.',
      'Do not over-analyse — this question tests comprehension, not analysis.',
    ],
  },

  // Edexcel Paper 2 (1EN2/02) - Language Analysis
  {
    id: 'edexcel-p2-lang-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Language Analysis (Q3)',
    difficulty: 'Higher',
    extract: `The river had changed. It was no longer the gentle companion of summer — the slow, green water that had carried their paper boats and reflected the willows in a trembling mirror. Now it was something else entirely. The rains had swollen it to a creature of muscle and fury, a brown torrent that tore at the banks and swallowed the meadow in great, hungry gulps. Trees that had stood for fifty years leaned at desperate angles, their roots exposed like the tendons of a clenched fist.\n\nAnna stood at the edge and felt the ground vibrate beneath her boots. The noise was immense — not the polite murmur of a river but the full-throated roar of something that had forgotten it was ever tame. Spray struck her face like cold needles. Somewhere beneath the surface, she knew, the footbridge was still there — or what remained of it. Three days ago she had crossed it without thinking. Now it was an archaeological fact, something that belonged to the past tense of this landscape.`,
    extractSource: 'Original composition',
    question: 'Analyse how the writer uses language and structure to present the power of the river. Support your views with detailed reference to the text. (15 marks)',
    modelAnswers: {
      'Grade 4-5': `The writer uses language to show the river is powerful and dangerous. The river is personified as "a creature of muscle and fury" which makes it sound like a strong, angry animal. The verb "tore" shows how violent the water is, and "swallowed the meadow in great, hungry gulps" makes the river seem like it is eating the land. The simile "roots exposed like the tendons of a clenched fist" suggests the trees are struggling against the water. The writer uses contrast to show how different the river is now compared to before. In summer it was a "gentle companion" with "slow, green water" but now it is a "brown torrent." This structural contrast helps the reader understand how much things have changed. The noise is described as a "full-throated roar" rather than a "polite murmur," which shows how overwhelming the river has become.`,
      'Grade 6-7': `The writer constructs the river's power through a sustained metaphorical transformation from domestic companion to untamed predator. The opening — "The river had changed" — is deceptively simple, its past perfect tense encoding a transformation that is already complete before the narrative begins. The structure enacts this shift: the first sentence recalls the summer river as a "gentle companion," but this pastoral image is immediately dismantled by the adversative "Now it was something else entirely." The metaphor of "a creature of muscle and fury" assigns the river both physical and emotional force, the noun "muscle" implying strength while "fury" attributes intention. The predatory lexical field intensifies — "tore," "swallowed," "hungry gulps" — constructing the river as an appetite that cannot be satisfied. The simile comparing exposed roots to "the tendons of a clenched fist" is particularly effective: it humanises the trees' resistance while the adjective "clenched" implies both tension and futility. In the second paragraph, the sensory register shifts from visual to physical — "the ground vibrate," "spray struck her face like cold needles" — immersing the reader in the river's power. The final image of the footbridge as "an archaeological fact" belonging to "the past tense of this landscape" is structurally significant: it reframes the river's destruction as a geological rather than meteorological event, elevating its power from the temporary to the epochal.`,
      'Grade 8-9': `The extract orchestrates a systematic dismantling of the pastoral, constructing the river's power not merely as physical force but as a rupture in the relationship between humans and landscape. The opening pluperfect — "The river had changed" — places the transformation before the text itself, making the river's power a fait accompli that the writing can only describe retrospectively. The structural movement from remembered summer to terrible present operates through a rhetoric of negation: the river is defined first by what it is no longer — "no longer the gentle companion" — before being reimagined through the language of embodied violence. The metaphor "a creature of muscle and fury" is deliberately non-specific; this is not a named animal but an abstraction of force, and the pairing of the physical "muscle" with the affective "fury" refuses to separate the river's strength from its apparent volition. The predatory semantic field — "tore," "swallowed," "hungry gulps" — personifies the river as an insatiable appetite, while the verbal patterning of violent present tense against the nostalgic past ("had carried," "reflected") creates a temporal chasm that mirrors the physical one. The simile of roots "like the tendons of a clenched fist" is structurally pivotal: it reverses the pathetic fallacy by reading the landscape through the human body rather than the reverse, suggesting that nature has absorbed and surpassed human strength. The second paragraph shifts the locus of power from visual spectacle to somatic experience — the ground "vibrates," spray strikes "like cold needles" — collapsing the observational distance that had allowed the first paragraph its comparisons. The final reconception of the footbridge as "an archaeological fact" belonging to "the past tense of this landscape" is the extract's most intellectually ambitious move: it grammaticalises destruction, suggesting that the river has not merely damaged infrastructure but rewritten the temporal grammar of the place itself.`,
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
      'Edexcel asks you to consider BOTH language and structure — address both.',
      'Move beyond feature-spotting to explore how techniques create meaning.',
      'Consider how the text changes from beginning to end.',
      'The best answers explore how language and structure work together.',
    ],
  },

  // Edexcel Paper 1 (1EN2/01) - Non-Fiction Reading: Evaluation
  {
    id: 'edexcel-p1-eval-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Evaluation (Q4)',
    difficulty: 'Foundation',
    extract: `I was seventeen when I first stood on the summit of Helvellyn and understood, for the first time, why people climb mountains. It is not for the view — though the view that day was extraordinary, the lakes laid out below like shattered mirrors reflecting a sky that could not decide whether to rain or shine. It is not for the achievement, although there is satisfaction in reaching a place that your legs and lungs have earned. It is for the silence.\n\nAt nine hundred and fifty metres, the world falls quiet. The petty noise of daily life — the phone, the traffic, the endless opinions of people who have never climbed anything steeper than an escalator — all of it drops away. What remains is wind, rock, and the sound of your own breathing. You become, briefly, the simplest version of yourself. No signal. No notifications. No performance. Just a body on a mountain, doing what bodies were designed to do.\n\nI have climbed Helvellyn thirty-seven times since that first ascent. I go in all seasons, in all weathers. People ask why I keep returning to the same mountain, and I tell them: it is not the same mountain. It is never the same mountain. The mountain changes with every visit because you change — and Helvellyn, unlike most things in life, has the decency to reflect that back to you honestly.`,
    extractSource: 'Original composition in the style of nature writing',
    question: 'To what extent do you agree with the writer\'s view that climbing mountains offers something valuable that modern life does not? Evaluate the text, supporting your views with detailed reference to the source. (15 marks)',
    modelAnswers: {
      'Grade 4-5': `I mostly agree with the writer's view because they make a convincing argument. The writer says that climbing mountains is valuable because of "the silence" you find at the top. They contrast this with the "petty noise of daily life" like phones and traffic, which makes modern life seem stressful. The phrase "endless opinions of people who have never climbed anything steeper than an escalator" is humorous and makes the reader think about how much unnecessary noise there is in everyday life. The writer also argues that mountains help you understand yourself. The line "you become, briefly, the simplest version of yourself" suggests that being in nature strips away all the complications. I find this persuasive because many people do feel that being outdoors is calming. However, the writer does not consider that not everyone can climb mountains, so this experience might not be available to all people.`,
      'Grade 6-7': `The writer presents a compelling case, though one that relies as much on rhetorical skill as on logical argument. The central claim — that mountains offer valuable silence absent from modern life — is persuasive partly because of how the writer structures the argument. The anaphoric "It is not for the view… It is not for the achievement" builds expectation before the short declarative "It is for the silence" delivers the thesis with satisfying clarity. The subsequent critique of modern life is effective: the tricolon "the phone, the traffic, the endless opinions" escalates from specific irritations to a generalised critique, while the dismissive "people who have never climbed anything steeper than an escalator" uses humour to recruit the reader's sympathy. However, this is also where the argument is most vulnerable — it constructs a somewhat self-congratulatory division between climbers and non-climbers that risks alienating readers. The writer's claim that "you become, briefly, the simplest version of yourself" is the text's most evocative moment, and the qualifier "briefly" lends it honesty. The final paragraph's insistence that "it is never the same mountain" is rhetorically powerful, with the italicised repetition creating emphasis, though the personification of Helvellyn as having "decency" perhaps overextends the metaphor. On balance, the writer succeeds in conveying a genuine and infectious enthusiasm, even if the argument occasionally substitutes poetic intensity for rigorous logic.`,
      'Grade 8-9': `The writer's argument is seductive, eloquent, and, in places, deliberately evasive — which is to say, it is excellent persuasive writing whose rhetorical craft should be admired before it is believed. The central thesis — that mountains provide a silence that modern life has made rare — is structurally positioned as a revelation, withheld through two negative constructions ("It is not for the view… It is not for the achievement") before being delivered in a four-word declarative. This is a preacher's rhythm, and it is effective: the reader experiences the rhetorical equivalent of reaching the summit. The critique of modernity is sharp but selective: the tricolon of "the phone, the traffic, the endless opinions" constructs a world of superficiality, while the sardonic aside about escalators flatters the reader into identifying with the climber rather than the criticised. This is a text that creates an in-group and invites you to join it. The claim that one becomes "the simplest version of yourself" is the argument's emotional centre, and it resonates because it articulates a widely felt yearning. Yet it is worth interrogating: is simplicity genuinely available on a mountain, or does the writer merely project their desire for it onto the landscape? The final paragraph's insistence that "it is never the same mountain" because "you change" is philosophically interesting — it echoes Heraclitus's river — but the closing personification of Helvellyn as having "decency" quietly reveals the writer's romanticism. Mountains do not have decency; they have indifference, and it is precisely this indifference that makes them useful mirrors. The writer succeeds enormously in making me want to climb Helvellyn; they succeed less in proving that the experience is universally valuable rather than personally meaningful. But perhaps that distinction matters less than the writing suggests.`,
    },
    markScheme: [
      'Evaluates the text critically, considering how effectively the writer conveys their perspective',
      'Supports evaluation with well-chosen textual references',
      'Considers the writer\'s methods and their effect on the reader',
      'Presents a clear personal response that goes beyond simple agreement or disagreement',
      'Maintains a critical stance throughout, not merely summarising',
    ],
    examinerTips: [
      'Evaluation means weighing up — show where the writer is effective AND where the argument has limits.',
      'Always support your judgement with quotation.',
      'Consider the writer\'s methods (structure, language, rhetoric) as part of your evaluation.',
      'A top-level answer treats the text as a crafted piece of writing, not just a collection of opinions.',
    ],
  },

  // Edexcel Paper 1 (1EN2/01) - Transactional Writing
  {
    id: 'edexcel-p1-write-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Transactional Writing (Q5)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: 'Your local council is considering closing the town\'s only public library to save money. Write a letter to the council arguing that the library should remain open. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    modelAnswers: {
      'Grade 4-5': `Dear Councillors,\n\nI am writing to express my strong opposition to the proposed closure of our town library. I believe this would be a serious mistake that would affect many people in our community.\n\nFirstly, the library is used by hundreds of people every week. It is not just a place to borrow books — it is a community hub. Elderly residents come for the reading groups, parents bring toddlers to story time, and students use it as a quiet place to study. Where would all these people go if the library closed?\n\nSecondly, not everyone has internet access at home. The library provides free computers and Wi-Fi, which many people rely on for job applications, benefits claims, and keeping in touch with family. Closing the library would cut off the most vulnerable people in our community from essential services.\n\nFinally, libraries save money in the long run. Research shows that for every pound spent on libraries, communities receive over five pounds in social and economic value. People who use libraries are healthier, better educated, and less isolated. Closing the library might save money now, but it will cost much more in the future.\n\nI urge you to reconsider this proposal and find alternative savings that do not destroy a vital community resource.\n\nYours faithfully,\nA Concerned Resident`,
      'Grade 6-7': `Dear Members of the Council,\n\nI write regarding the proposed closure of our public library. I should declare an interest: I use the library every week, as do my children, my elderly mother, and approximately four hundred other residents whose voices are conspicuously absent from your consultation document. I should also declare a certainty: this closure would be an act of institutional vandalism dressed up as fiscal responsibility.\n\nLet me address the financial argument directly, since it is the one you have chosen to make. The annual cost of running the library is, I understand, approximately £180,000. This is presented in your proposal as a saving. It is not. It is a cost — transferred from the council's books to the community's shoulders. When the library closes, your free computer access disappears. Your job seekers will travel twelve miles to the nearest alternative. Your elderly residents will lose the only social contact some of them have outside their own homes. The costs of increased isolation, unemployment, and digital exclusion will appear on other budgets — health, social care, welfare — but they will be no less real for being someone else's problem.\n\nThe library is also, let us not forget, a place of education. Our town has some of the lowest literacy rates in the county. Closing the library is the equivalent of diagnosing a patient with malnutrition and then locking the pantry. The children who use the library's reading programmes are disproportionately from families who cannot afford to buy books. You are proposing to remove the only free access to literature that these children have, and you are doing so in a document that cites "community wellbeing" as a council priority. The irony should embarrass you.\n\nI recognise that savings must be made. I do not recognise that they must be made here. I ask you to reconsider — not as a gesture, but as a genuine reassessment of what this community can afford to lose.\n\nYours faithfully,\nA Resident Who Intends to Be Present at the Next Council Meeting`,
      'Grade 8-9': `Dear Councillors,\n\nI have read your proposal to close the public library. I have read it carefully, in the library, using the reading skills I first developed there as a child. I mention this not for sentimental effect — though sentiment is not the disqualification you seem to believe it is — but because it illustrates a principle your proposal fails to grasp: libraries are not static repositories of books. They are engines of the very competencies that allow a person to read a council document and respond to it critically. You are proposing to close the factory that makes citizens.\n\nThe financial case is, I accept, superficially coherent. £180,000 is not nothing. But a budget is a moral document, and the decision to cut the library rather than — to choose one alternative — the £220,000 spent annually on consultancy fees reveals a set of priorities that should be stated explicitly rather than hidden behind the language of necessity. You are not closing the library because you must. You are closing it because you have decided that the people who use it matter less than the people who do not.\n\nConsider who those people are. They are the unemployed, using free internet to apply for jobs your economic development strategy claims to care about. They are the isolated elderly, for whom the Thursday reading group is the difference between a week with human contact and a week without. They are the children of families where a book is a luxury, discovering for the first time that knowledge is free and that the world is larger than their postcode. These are not abstractions. They are your constituents. And they are, by no coincidence, the constituents least likely to attend your consultation events, least likely to respond to your surveys, and least likely to have the social capital to make their objections heard. Their silence is not consent. It is the very disadvantage your library exists to address.\n\nI do not doubt your good intentions. I doubt your arithmetic. The costs you propose to save will reappear — in GP surgeries, in benefits offices, in the attainment gap that already shames this town. You will have balanced one budget by unbalancing several others, and the people who bear the cost will be, as always, those who can least afford it.\n\nKeep the library open. It is not a luxury. It is the floor.\n\nYours faithfully,\nA Taxpayer, a Reader, and a Voter`,
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
      'Match the FORM precisely — Edexcel marks form conventions (letter layout, appropriate sign-off).',
      'Adapt your register to the audience: a council requires formality.',
      'Use concrete examples and data to strengthen abstract arguments.',
      'The best transactional writing sounds like a real person with genuine conviction.',
    ],
  },

  // ========================================
  // OCR GCSE ENGLISH LANGUAGE QUESTIONS
  // ========================================

  // OCR Component 01 - Communicating Information and Ideas
  // Synthesis question
  {
    id: 'ocr-c01-synth-1',
    board: 'OCR',
    paper: 1,
    questionType: 'Synthesis (Q3)',
    difficulty: 'Foundation',
    extract: `Source A: "School uniform is a leveller. When every child wears the same blazer, the same tie, the same polished shoes, the differences that divide them — wealth, background, the cruelty of fashion — become invisible. Uniform does not eliminate inequality, but it removes its most visible marker. A child in uniform is simply a student, and that anonymity is a kindness."\n— Adapted from a headteacher's letter to parents, 2019\n\nSource B: "I hated my school uniform with a passion that has not dimmed in twenty years. The polyester blazer that trapped sweat against your skin. The tie that served no purpose except to give older boys something to grab you by. The shoes that had to be 'plain black leather' even though my family could barely afford them. Uniform was not a leveller — it was a reminder, every single morning, that someone else controlled what I wore, what I looked like, who I was allowed to be."\n— Adapted from a newspaper opinion column, 2022`,
    extractSource: 'Source A: Adapted from a 2019 headteacher\'s letter; Source B: Adapted from a 2022 opinion column',
    question: 'Using details from both sources, write a summary of the different views on school uniform. (6 marks)',
    modelAnswers: {
      'Grade 4-5': `The two sources present different views on school uniform. Source A argues that uniform is positive because it is "a leveller" that makes differences between students "invisible." The headteacher believes that when everyone wears the same clothes, students are judged equally. In contrast, Source B disagrees strongly, calling uniform "a reminder" that someone else controlled them. Where Source A sees anonymity as "a kindness," the writer of Source B felt uniform took away their identity, saying it controlled "who I was allowed to be." Source A acknowledges uniform does not fix inequality but helps, while Source B argues it actually highlighted poverty because the required shoes were difficult to afford.`,
      'Grade 6-7': `The sources offer directly opposing views on uniform, though both engage with the question of identity. Source A frames uniform as socially beneficial, arguing it renders the "differences that divide" students — specifically "wealth, background, the cruelty of fashion" — "invisible." The headteacher positions uniformity as protective, calling the resulting "anonymity" a "kindness." Source B systematically dismantles this argument through personal experience: far from eliminating markers of inequality, uniform "was a reminder" of financial hardship, since the mandated "plain black leather" shoes were unaffordable. Where Source A sees uniform as removing control from external forces like fashion, Source B reframes it as substituting one form of control for another — "someone else controlled what I wore." Both writers implicitly agree that uniform concerns power, but they disagree fundamentally about who benefits from that power.`,
      'Grade 8-9': `Both sources address uniform as a mechanism of social control, but they diverge entirely on whether that control is benevolent or oppressive. Source A presents the institutional perspective: uniform is "a leveller" that neutralises the "visible markers" of economic disparity, offering students the "kindness" of "anonymity." The concession that uniform "does not eliminate inequality" lends the argument credibility through acknowledged limitation. Source B counters with embodied testimony: the physical discomfort of "polyester" that "trapped sweat," the vulnerability of a tie that gave bullies "something to grab you by," and the economic burden of compulsory shoes the writer's family "could barely afford." Where Source A abstracts uniform into a principle of equality, Source B insists on its material reality. The fundamental disagreement is philosophical: Source A equates uniformity with fairness, while Source B equates it with erasure — "who I was allowed to be." Notably, Source A's anonymity and Source B's loss of identity describe the same phenomenon; they merely disagree on whether it constitutes liberation or suppression.`,
    },
    markScheme: [
      'Synthesises information from BOTH sources (not just one)',
      'Identifies clear points of comparison or contrast between the sources',
      'Uses textual references from both sources to support points',
      'Presents a coherent overview rather than listing separate points',
      'Shows understanding of the writers\' different perspectives',
    ],
    examinerTips: [
      'OCR synthesis questions require you to combine information from both sources — do not write about each source separately.',
      'Use comparative connectives: "while," "whereas," "in contrast," "both sources agree that."',
      'Keep your answer focused on summarising views, not analysing language.',
      'Aim for 3-4 well-developed comparative points rather than many undeveloped ones.',
    ],
  },

  // OCR Component 01 - Evaluative Comparison
  {
    id: 'ocr-c01-eval-1',
    board: 'OCR',
    paper: 1,
    questionType: 'Evaluative Comparison (Q4)',
    difficulty: 'Higher',
    extract: `Source A (1869): "The railway has brought about changes in rural life that no revolution could have accomplished. Villages that were, within living memory, a day's journey from the nearest town now lie a mere forty minutes distant. The farmer who once knew nothing beyond his own parish boundary now reads a London newspaper over his breakfast. Whether this constitutes progress I leave to the reader's judgement, but I note that the hedgerows are quieter than they were, the lanes emptier, and the young increasingly difficult to persuade that their future lies in the soil."\n— Adapted from a Victorian rural journal\n\nSource B (2024): "The broadband cable reached our village last March. Within six months, three households had someone working from home, the pub had Wi-Fi, and our nearest shop — which had been six miles away — was now, effectively, the internet. My neighbour, who is seventy-four and has never left the county, now video-calls her grandson in Melbourne every Sunday. Connectivity has not destroyed our community. But it has quietly renegotiated the terms on which we belong to it."\n— Adapted from a contemporary rural blog`,
    extractSource: 'Source A: Adapted from an 1869 journal; Source B: Adapted from a 2024 blog post',
    question: 'Compare how the writers of Source A and Source B present the impact of new technology on rural communities. In your answer you should consider the writers\' use of language, the impact of the texts on the reader, and the contexts in which they were written. (14 marks)',
    modelAnswers: {
      'Grade 4-5': `Both writers discuss how new technology has changed life in rural areas, but they have different attitudes. Source A, from 1869, writes about the railway. The writer says it has brought "changes that no revolution could have accomplished," which shows how powerful the railway was. However, the writer seems worried about the effects, noting that "the hedgerows are quieter" and young people are leaving. Source B writes about broadband internet in 2024. This writer is more positive, giving examples of how the internet has helped, such as a neighbour who "video-calls her grandson in Melbourne." Both writers use specific examples to show change. Source A mentions the farmer reading a London newspaper, while Source B mentions working from home and online shopping. The final line of Source B — "quietly renegotiated the terms" — is similar to Source A's ambiguous tone, as both writers suggest technology changes things in ways that are not entirely comfortable.`,
      'Grade 6-7': `Both extracts examine the moment when a new technology transforms rural isolation, and though separated by 155 years, they share a strikingly similar ambivalence. Source A frames the railway's impact through the rhetoric of revolution — "changes that no revolution could have accomplished" — borrowing political language to convey the scale of disruption. The temporal compression from "a day's journey" to "forty minutes distant" dramatises the collapse of rural isolation, while the image of a farmer reading "a London newspaper over his breakfast" captures the penetration of metropolitan culture into previously insular spaces. Source B mirrors this structure precisely: the broadband cable arrives, and within "six months" the village has been functionally reorganised. The nearest shop is now "effectively, the internet" — a dryly witty reformulation that parallels Source A's newspaper-reading farmer. Both writers use the language of quiet transformation rather than dramatic upheaval: Source A's hedgerows are "quieter," lanes "emptier"; Source B's technology "quietly renegotiated" community bonds. However, their tonal registers differ. Source A adopts a deliberately noncommittal stance — "whether this constitutes progress I leave to the reader's judgement" — but the elegiac listing of losses undermines this neutrality. Source B is warmer and more personal, deploying the specific anecdote of the seventy-four-year-old neighbour to humanise the statistics. The contextual difference is significant: Source A writes at a moment of uncertain change, while Source B writes with retrospective awareness of how similar anxieties about the railway proved both justified and survivable.`,
      'Grade 8-9': `These texts are haunted by the same question — what happens to a place when distance ceases to matter? — and their formal and rhetorical strategies reveal as much about their historical moments as about their ostensible subjects. Source A deploys the rhetoric of ambivalent witness. The opening hyperbole — "changes that no revolution could have accomplished" — is double-edged: it attributes to the railway a power that exceeds political upheaval, implicitly questioning whether such power should belong to a commercial enterprise. The syntactic movement of the final sentence — from the passive observation of quieter hedgerows and emptier lanes to the active difficulty of persuading the young "that their future lies in the soil" — enacts a loss of agency that mirrors the community's experience. The writer's claim to neutrality ("I leave to the reader's judgement") is performatively undermined by the elegiac cadence of what follows; this is a text that pretends to objectivity while mourning. Source B, writing in full knowledge of how such narratives unfold, adopts a different strategy: pragmatic acceptance leavened by ironic precision. The observation that the nearest shop "was now, effectively, the internet" compresses an economic revolution into a single subordinate clause, and the adverb "effectively" does significant work — it acknowledges that the change is functional rather than felt, practical rather than emotional. The anecdote of the seventy-four-year-old video-calling Melbourne operates as a counter-narrative to Source A's departing youth: where Source A's young leave the village, Source B's elderly reach beyond it without moving. Both texts culminate in qualified conclusions. Source A's "whether this constitutes progress" and Source B's "quietly renegotiated the terms on which we belong" are structurally parallel moments of hedged judgement. But where Source A's ambivalence sounds like grief, Source B's sounds like maturity — the product of a culture that has lived through enough technological transformations to know that the apocalypse is rarely as total as it first appears.`,
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
      'OCR values comparison — write about both sources together, not one then the other.',
      'Context means more than just the date: consider audience, purpose, and genre.',
      'Evaluate HOW effectively each writer conveys their ideas, not just WHAT they say.',
      'The best answers find unexpected connections between the sources.',
    ],
  },

  // OCR Component 02 - Exploring Effects and Impact (Fiction)
  {
    id: 'ocr-c02-lang-1',
    board: 'OCR',
    paper: 2,
    questionType: 'Language and Structure Analysis (Q3)',
    difficulty: 'Foundation',
    extract: `The old woman sat in the corner of the railway carriage and watched the countryside accelerate. Fields blurred into hedgerows, hedgerows into woodland, woodland into the grey smear of approaching suburbs. She had not taken a train in eleven years. The last time had been with Harold, who had insisted on first class even though they could not afford it, because he said a person should experience luxury at least once before deciding they did not need it. Harold had been dead for ten of those eleven years.\n\nShe opened her handbag and took out a sandwich wrapped in greaseproof paper. Egg and cress. She had made it at five o'clock that morning, standing in the kitchen in her dressing gown while the house ticked and settled around her. The bread was slightly stale now but she ate it anyway, carefully, over the paper, catching every crumb. Opposite her, a young man in headphones stared at his phone. He had not looked up once since Crewe.`,
    extractSource: 'Original composition in the style of literary realism',
    question: 'How does the writer use language and structure to portray the old woman\'s character and situation? (15 marks)',
    modelAnswers: {
      'Grade 4-5': `The writer presents the old woman as someone who is lonely and careful. She is described as sitting "in the corner," which makes her seem small and isolated. The detail that she has "not taken a train in eleven years" tells us she does not travel often, and the memory of Harold shows she has lost her husband. The fact that Harold "insisted on first class even though they could not afford it" tells us they were not wealthy, and the writer uses this memory to show both love and loss. The woman is presented as very careful and precise — she eats "over the paper, catching every crumb," which suggests she does not like waste. The contrast with the "young man in headphones" who "had not looked up once since Crewe" makes her seem even more alone, because even the person sitting opposite her is ignoring her. The detail about making the sandwich at "five o'clock that morning" shows she was up very early, perhaps because she could not sleep due to anxiety about the journey.`,
      'Grade 6-7': `The writer constructs the old woman through accumulative domestic detail and structural isolation. The opening image positions her "in the corner," a spatial metaphor for marginality that is reinforced by the accelerating landscape she "watches" but does not participate in — the progressive blurring of "fields into hedgerows, hedgerows into woodland" syntactically enacts a world moving faster than she can process. The parenthetical memory of Harold is structurally central: it occupies the emotional core of the first paragraph, and the detail that he "insisted on first class even though they could not afford it" encodes both his character (generous, perhaps impractical) and their economic reality in a single clause. The devastating brevity of "Harold had been dead for ten of those eleven years" uses the arithmetic of grief — the precise counting — to suggest that the old woman measures time by his absence. The second paragraph shifts to the present tense of small, careful actions. The sandwich — "egg and cress," made at "five o'clock that morning" — is rendered with a specificity that elevates the mundane into the poignant. She eats "carefully, over the paper, catching every crumb," and the participial phrase creates a sense of habitual precision born of either thrift or loneliness or both. The structural juxtaposition with the young man "in headphones" who "had not looked up once since Crewe" creates an implicit commentary on generational disconnection: two people sharing a space but inhabiting entirely different worlds.`,
      'Grade 8-9': `The extract's power resides in its refusal to sentimentalise. The old woman is portrayed not through emotional vocabulary but through the geometry of small actions, and the reader's sympathy is earned through precision rather than pathos. The opening positions her "in the corner" — already marginal — watching the landscape undergo a syntactic acceleration that she cannot match: the asyndetic listing of "fields blurred into hedgerows, hedgerows into woodland, woodland into the grey smear" uses chain-linking to create momentum, while the noun "smear" introduces visual distortion that suggests the world is becoming illegible to her. The memory of Harold is introduced through the temporal marker "eleven years" and then immediately bisected: "Harold had been dead for ten of those eleven years." The mathematical precision is devastating precisely because it is not emotional — it is the language of someone who has learned to accommodate grief as fact. Harold himself is characterised through a single, perfectly chosen anecdote: his insistence on first class "even though they could not afford it" compresses an entire marriage into a subordinate clause — his extravagance, her awareness, their shared understanding that experience matters more than money. The structural movement from memory to present action — the sandwich, the greaseproof paper, the crumbs — performs the work of returning from the past, and the meticulous domestic detail ("egg and cress," "five o'clock that morning," "the house ticked and settled") constructs a life of solitary routine. The verb "ticked" personifies the house as a companion, its settling sounds the only company in the pre-dawn kitchen. The final detail — the young man who "had not looked up once since Crewe" — is structurally positioned as a quiet indictment, not of him specifically, but of a world in which this woman's extraordinary ordinariness goes entirely unwitnessed.`,
    },
    markScheme: [
      'Analyses language choices and their effects on the reader',
      'Comments on structural features (narrative perspective, sequencing, juxtaposition)',
      'Uses well-selected and embedded quotations',
      'Considers how character is constructed through detail and implication',
      'Uses subject terminology accurately and purposefully',
    ],
    examinerTips: [
      'In OCR Component 02, you are working with fiction — think about how the writer constructs character.',
      'Consider what is NOT said as much as what is — implication is powerful.',
      'Comment on the effect of specific word choices, not just techniques.',
      'Structure your response around ideas or effects, not line-by-line.',
    ],
  },

  // OCR Component 02 - Creative Writing
  {
    id: 'ocr-c02-write-1',
    board: 'OCR',
    paper: 2,
    questionType: 'Narrative/Descriptive Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: 'Write the opening of a story set in a place that holds a significant memory for the narrator. Focus on creating a vivid sense of place and the narrator\'s emotional connection to it. (30 marks)',
    modelAnswers: {
      'Grade 4-5': `The playground looked smaller than I remembered. The climbing frame, which had once seemed as tall as a skyscraper, barely reached my shoulder now. The rubber surface was cracked and faded, the bright colours I remembered replaced by a tired grey.\n\nI sat down on the roundabout and pushed myself slowly with one foot. The metal groaned underneath me. Twenty years had not been kind to this place. The swings had lost their seats, just chains hanging empty against the sky. The slide was still there but its surface was rough and dull where it had once been smooth and shiny.\n\nThis is where we used to come every day after school, me and Callum. We would race to the swings, arguing over who got the good one — the one that went higher, the one with the seat that didn't pinch your legs. He always won. He was faster than me at everything.\n\nI had not been back here since the summer it happened. The summer everything changed. Standing here now, I could almost hear the sound of his laughter, carried on the wind like a ghost that refused to leave.`,
      'Grade 6-7': `The kitchen door still sticks. You have to lift the handle slightly and push with your hip — a specific, practised movement that my body remembers even though I have not performed it in seven years. Inside, the room is exactly and nothing like it was. The Formica table is the same table. The clock above the cooker is the same clock, still running three minutes fast because my mother believed that punctuality required deception. But the light is different. It falls through the window at an angle I do not recognise, and I realise, with a small shock, that the sycamore in the garden must have been cut down.\n\nThe smell is what undoes me. Not the smell of cooking — the house has been empty for months — but the smell underneath: wood polish and old carpet and something faintly metallic that I have never been able to name but which is, unmistakably, the smell of this house and no other. It enters through my nose and arrives somewhere behind my ribs, in the place where memory lives when it has nowhere else to go.\n\nI put the kettle on. This is not sentiment. This is procedure. When you return to a house where someone has died, you put the kettle on, because the alternative is to stand in the hallway and listen to the silence, and the silence in this house has teeth.`,
      'Grade 8-9': `The field is still here, which surprises me, though I cannot say what I expected — a car park, perhaps, or one of those identikit housing developments that consume the edges of market towns like a slow fungal infection. But no. The field is still here. The same field. The same slope rising gently to the copse of beeches at the ridge, the same ditch along the western boundary where, in a previous life, a boy who shared my name used to look for newts.\n\nI climb the gate rather than open it. This is not nostalgia. The latch has always been broken.\n\nThe grass is longer than it should be at this time of year, which means Harding has stopped grazing his sheep here, which means Harding is probably dead. I add this to the list of things that have changed while I was busy being elsewhere. The list is kept in a part of my mind that I try not to visit — a room with no windows where the furniture is covered in dust sheets and the air smells of apology.\n\nAt the top of the slope I stop. Below me, the village arranges itself with the careful randomness of something that has been settling into its own shape for nine hundred years. The church. The pub. The school whose playground I can see from here — a square of tarmac the size of a postage stamp from this distance, ringed by a fence that was always too low to keep anything in or out. I spent every lunchtime of every term for seven years inside that square. I learned, within its boundaries, most of what I know about love and hierarchy and the specific cruelty of exclusion. I have not set foot inside it since.\n\nThe wind moves through the beeches behind me with a sound like applause, or like pages turning. I sit down on the grass and wait for the past to arrive, the way you wait for a bus you are not sure is still running.`,
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
      'Let the narrator\'s emotions emerge through what they notice, not through telling the reader how they feel.',
      'Control your pacing — not everything needs to be revealed immediately.',
    ],
  },

  // ========================================
  // WJEC EDUQAS GCSE ENGLISH LANGUAGE QUESTIONS
  // ========================================

  // WJEC Eduqas Component 1 - 20th Century Literature Reading
  {
    id: 'wjec-c1-lang-1',
    board: 'WJEC',
    paper: 1,
    questionType: 'Language and Structure Analysis (Q2)',
    difficulty: 'Foundation',
    extract: `The factory whistle blew at six. By ten past, the street was full of men — a dark river of caps and boots flowing downhill towards the gates. Thomas walked among them with his hands in his pockets and his collar turned up against the cold. He was eighteen and had worked at the mill for four years, since the day after his fourteenth birthday, when his father had shaken his hand and said, "You're a man now," as if manhood were a door you stepped through rather than a thing that grew on you slowly, like moss on a wall.\n\nThe mill loomed ahead, its chimney drawing a black line against the pale sky. The noise reached him before the building did — a low, mechanical hum that he felt in his teeth before he heard it in his ears. Inside, the air was thick with cotton dust that coated your throat and settled in your lungs like snow filling a ditch. The machines were already running. They were always already running. Thomas took his place at the loom and became, as he did every morning, a small moving part in a large, indifferent engine.`,
    extractSource: 'Original composition in the style of early 20th-century realism',
    question: 'How does the writer use language to present working life in this extract? You should write about the effects of the writer\'s language choices and use examples from the text. (10 marks)',
    modelAnswers: {
      'Grade 4-5': `The writer uses language to show that working life is hard and dehumanising. The men going to work are described as "a dark river of caps and boots," which is a metaphor that makes them seem like a mass rather than individuals. The words "caps and boots" reduce them to items of clothing, as if they have no personal identity. The factory is presented negatively through the description of the noise as "a low, mechanical hum that he felt in his teeth," which sounds uncomfortable and invasive. The cotton dust "settled in your lungs like snow filling a ditch," which is a simile comparing something harmful to something natural, making it seem like the damage is just part of everyday life. The final sentence is the most powerful, where Thomas "became a small moving part in a large, indifferent engine." The metaphor of the factory as an "engine" and Thomas as just a "part" shows how the work takes away his humanity. The adjective "indifferent" means the factory does not care about the workers at all.`,
      'Grade 6-7': `The writer constructs working life as a process of depersonalisation, using language that systematically strips individuality from the workers. The opening metaphor — "a dark river of caps and boots" — reduces the men to a collective flow, the synecdoche of "caps and boots" replacing human identity with industrial uniform. The adjective "dark" functions both literally and symbolically, encoding the pre-dawn grimness and the bleak prospects of their labour. Thomas's father's assertion that "you're a man now" is immediately undercut by the narrator's observation that manhood is "a thing that grew on you slowly, like moss on a wall" — a simile that reframes this rite of passage as something organic and gradual rather than the abrupt, economically driven threshold it actually is. The mill itself is characterised through sensory assault: the noise is "felt in his teeth" before it is heard, the synaesthetic description suggesting a physical violation. The simile of cotton dust settling "like snow filling a ditch" is quietly devastating — it naturalises occupational harm, while "ditch" implies both the trench of industry and the grave. The culminating metaphor of Thomas as "a small moving part in a large, indifferent engine" completes the dehumanisation, the adjective "indifferent" attributing to the factory a cold absence of concern that makes exploitation structural rather than personal.`,
      'Grade 8-9': `The extract performs the very process it describes: the language systematically converts a human being into a component. The opening image of workers as "a dark river of caps and boots" establishes the governing logic — the men are not named, not individualised, not even fully embodied. They are reduced to the metonymic fragments that contact the industrial world: headwear and footwear, the points where body meets labour. That this river flows "downhill towards the gates" encodes both geography and metaphor; the direction is always down, and the gates suggest containment as much as entry. Thomas's father's claim that "you're a man now" performs a rhetorical violence that the narrator immediately exposes through the counter-simile of manhood as "moss on a wall" — something that accumulates imperceptibly, organically, and by implication, parasitically. The father's handshake is an economic transaction disguised as a paternal ceremony: at fourteen, the boy becomes a unit of production. The mill's physical presence is rendered through a careful escalation of sensory invasion. It is first visual — the chimney's "black line against the pale sky," a mark of pollution encoded as calligraphy. Then auditory and somatic — the hum "felt in his teeth" — before becoming respiratory: cotton dust that "settled in your lungs like snow filling a ditch." The shift to the second person "your" at this point is structurally significant; it universalises the experience, implicating every worker (and potentially every reader) in the bodily harm. The simile's beauty — snow, filling, the soft sibilance — is in grotesque tension with its meaning, enacting how the aesthetic of labour can disguise its lethality. The final sentence achieves the text's complete transformation: Thomas "became a small moving part in a large, indifferent engine." The copular verb "became" marks a metamorphosis. He is no longer a person operating a machine; he is a machine component. And the comma-separated "indifferent" — placed where one might expect "efficient" or "productive" — reveals the text's moral argument: the engine does not hate its workers; it simply does not register their existence.`,
    },
    markScheme: [
      'Analyses specific language choices and their effects',
      'Comments on how language presents the theme of working life',
      'Uses well-selected quotations embedded in analysis',
      'Considers connotations and implications beyond surface meaning',
      'Uses subject terminology appropriately (not just listing techniques)',
    ],
    examinerTips: [
      'WJEC Eduqas gives you 10 marks for this question — be concise but analytical.',
      'Focus on the effects of language choices, not just identification of techniques.',
      'Consider how word choices build up to create an overall impression.',
      'Always move from quotation to analysis — what does this word/phrase suggest?',
    ],
  },

  // WJEC Eduqas Component 1 - Two-Task Writing (Narrative)
  {
    id: 'wjec-c1-write-1',
    board: 'WJEC',
    paper: 1,
    questionType: 'Narrative Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: 'Write about a time when someone had to make a difficult decision. You may write from any perspective. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    modelAnswers: {
      'Grade 4-5': `The letter sat on the kitchen table for three days before she opened it. Everyone knew what it was. The envelope was brown and official-looking, with a typed address and a postmark from London. Her mother walked past it every morning, pretending not to notice.\n\nWhen she finally opened it, her hands were shaking. She read it twice, put it down, picked it up, and read it again. The offer was everything she had worked for: a place at a university three hundred miles away, studying the subject she loved. It should have been the happiest moment of her life.\n\nBut her mother was ill. Not seriously ill — not yet — but the kind of ill that meant someone needed to be around. To check the medication. To drive to appointments. To sit in the kitchen in the evenings and make things feel normal. Her brother had already left. Her father had left long before that.\n\nShe sat at the table for a long time, the letter in front of her. The kitchen clock ticked loudly. Outside, a bird was singing. She picked up her phone, found the number, and dialled. When the voice at the other end answered, she took a breath and said the words she had practised in her head all morning.`,
      'Grade 6-7': `He told himself he would decide by Friday. On Friday he told himself he would decide by Monday. On Monday he told himself that some decisions make themselves if you leave them long enough, and he went to work and did not think about it, except that he thought about nothing else.\n\nThe facts were simple. His father needed help. Not the kind of help that could be delivered from two hundred miles away via weekly phone calls and guilt — the physical, daily, undramatic help of someone being present. Meals prepared. Bills opened. The slow bureaucracy of aging navigated by someone who could still read the small print.\n\nThe facts on the other side were also simple. He had a life. A flat. A job he had spent five years building. A relationship that was beginning, cautiously, to use the word "we" instead of "I." None of these things were portable.\n\nHe drove up on Saturday. The house smelled of toast and loneliness — that particular combination of unwashed dishes and drawn curtains that means someone has stopped performing the rituals of order. His father was in the kitchen, attempting to change a lightbulb from a chair that wobbled. He was not frail. That was the difficult thing. He was not frail, not helpless, not incapable. He was just old enough that the distance between managing and not managing had narrowed to a margin that could be erased by a fall, a flu, a letter left unopened.\n\n"You didn't need to come," his father said, which was the sentence that settled it.`,
      'Grade 8-9': `The morning the consultant used the word "progressive," Ruth left the hospital and sat in her car for forty minutes without starting the engine. She did not cry. She was, she realised later, performing triage on her own future — sorting what could be saved from what could not, and discovering, with clinical clarity, that the categories were not as distinct as she had assumed.\n\nHer mother had eleven months. Perhaps fourteen, if the particular cruelty of this disease decided to be slow rather than swift. The consultant had delivered this information with the practised gentleness of someone who ruins lives on a professional basis, and Ruth had nodded and asked sensible questions because that is what you do when the world contracts to a small, bright room with a box of tissues placed at a conspicuous angle.\n\nThe PhD could wait. That was the obvious answer, and everyone said it, and Ruth hated them for saying it because it was true. Three years of research. A supervisor who had called her work "genuinely original," which, in the restrained vocabulary of academia, was practically a declaration of love. A funded position that would not be held, because funding is a river and you swim in it when it flows or you do not swim at all.\n\nShe made two lists. This was her methodology for everything — two columns, evidence weighed, conclusion drawn. The left column said: career, independence, the future she had earned. The right column said: her mother's name. Just the name. No justification required.\n\nThe lists were not equal. They had never been equal. Ruth had known the answer before she made them, just as she suspected the consultant had known the diagnosis before the scans confirmed it. Some decisions are not choices at all but recognitions — moments when you discover what you have already decided, and the only task remaining is to say it aloud.\n\nShe started the car. She drove, not to the university, but home.`,
    },
    markScheme: [
      'Creates a convincing narrative with a clear sense of the decision and its difficulty',
      'Develops character through action, dialogue, and interior thought',
      'Uses language ambitiously and precisely',
      'Structures the narrative effectively (pacing, withholding, climax)',
      'Demonstrates sustained technical accuracy',
      'Maintains a consistent and appropriate narrative voice',
    ],
    examinerTips: [
      'WJEC Eduqas allocates equal marks for content/organisation and accuracy — do not neglect either.',
      'The prompt says "a time when someone had to make a difficult decision" — you can write about yourself or a character.',
      'Show the difficulty of the decision through the character\'s thought process, not just by telling the reader it was difficult.',
      'A strong ending that resonates is more valuable than a dramatic plot twist.',
    ],
  },

  // WJEC Eduqas Component 2 - Reading Across Centuries
  {
    id: 'wjec-c2-comp-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Reading Across Centuries Comparison (Q4)',
    difficulty: 'Foundation',
    extract: `Text A (1847): "The governess occupies a position of peculiar difficulty. She is not a servant, yet she is not family. She eats alone in her room or, if permitted to join the family table, sits in a silence that is expected rather than chosen. She educates the children, yet her own education — often superior to that of her employer — earns her no respect, only suspicion. She is, in short, a gentlewoman who must earn her bread without ever appearing to need it."\n— Adapted from a Victorian essay on women's employment\n\nText B (2023): "Teaching assistants are the invisible infrastructure of the education system. They arrive before the teachers, leave after them, and spend the hours between managing behaviour, supporting SEND pupils, running interventions, and performing a hundred daily acts of patience that never appear on any data spreadsheet. Their average salary is £18,000. Their average level of commitment is immeasurable. We talk endlessly about teacher retention while the people who hold classrooms together are paid less than supermarket shelf-stackers."`,
    extractSource: 'Text A: Adapted from a Victorian essay, 1847; Text B: Adapted from a 2023 education article',
    question: 'Both texts present people who work in education but are undervalued. Compare how the two writers convey their attitudes towards the people they describe. You should compare the writers\' use of language and the ways they try to influence the reader. (10 marks)',
    modelAnswers: {
      'Grade 4-5': `Both writers argue that certain education workers are not valued properly. Text A describes the governess as being in "a position of peculiar difficulty" because she does not belong to any clear social group — "not a servant, yet not family." Similarly, Text B calls teaching assistants "the invisible infrastructure," meaning they are essential but unnoticed. Both writers use contrast to show unfairness. Text A contrasts the governess's education with the lack of respect she receives, while Text B contrasts the high commitment of TAs with their low salary of "£18,000." Text A uses formal language and the word "gentlewoman" to emphasise the governess's social status, while Text B uses more modern, direct language and statistics. Both writers want to make the reader feel sympathy. Text A does this by showing the governess's loneliness — eating "alone in her room" — while Text B uses the comparison with "supermarket shelf-stackers" to make the reader feel that TAs' pay is unfair.`,
      'Grade 6-7': `Both texts advocate for undervalued educators, but their rhetorical strategies reflect their different historical contexts. Text A constructs the governess's predicament through the language of paradox: she is "not a servant, yet not family"; her education "earns her no respect, only suspicion." The antithetical structures enact the impossible position she occupies, caught between categories that refuse to accommodate her. The concluding paradox — a "gentlewoman who must earn her bread without ever appearing to need it" — captures the Victorian double bind of gendered class expectation with devastating economy. Text B employs a more contemporary rhetoric of quantification and indignation. The metaphor of "invisible infrastructure" borrows from engineering to argue that TAs are structurally essential, while the tricolon of "managing behaviour, supporting SEND pupils, running interventions" catalogues their labour to make it visible. The juxtaposition of the statistical ("£18,000") with the abstract ("immeasurable") creates a rhetorical contrast that highlights the gap between value and remuneration. Where Text A's influence is achieved through the reader's sympathy — the lonely meals, the enforced silence — Text B's is achieved through provocation, the comparison with "supermarket shelf-stackers" designed to produce outrage. Both writers position their subjects as essential yet expendable, though Text A's tone is one of resigned observation while Text B's is one of active protest.`,
      'Grade 8-9': `These texts are separated by 176 years, yet they prosecute the same argument: that a society's commitment to education can be measured by how it treats its least visible educators. The rhetorical architectures, however, are shaped by profoundly different conceptions of injustice. Text A operates within a discourse of social taxonomy: the governess's suffering is produced by her categorical illegibility — she fits neither "servant" nor "family," and the repeated negatives ("not… yet not") syntactically perform the erasure she experiences socially. The Victorian writer's critique is implicitly gendered: the governess's "education — often superior to that of her employer" — is parenthetically enclosed, as if the writer is smuggling this subversive comparison past a readership that might not wish to confront it. The final formulation — "earn her bread without ever appearing to need it" — exposes the performative economy of Victorian femininity, where the governess must simultaneously labour and deny that labour. Text B translates this structural invisibility into contemporary terms: TAs are "invisible infrastructure," a metaphor that argues for their necessity while acknowledging their erasure. The rhetorical force of Text B derives from accumulation and juxtaposition — the itemised list of duties followed by the blunt "£18,000," then the abstractly vast "immeasurable," creating a gap between economic and human value that the reader is invited to find intolerable. The final comparison with "supermarket shelf-stackers" is deliberately provocative: it is not a criticism of retail workers but an exposure of the irrational economics of care work. Where Text A influences through pathos — the solitary meal, the imposed silence — Text B influences through logos, marshalling evidence toward an unanswerable conclusion. Yet both texts share a structural irony: they give voice to the voiceless using the very rhetorical and literary competencies that their subjects taught to others.`,
    },
    markScheme: [
      'Compares the writers\' attitudes and methods across both texts',
      'Analyses how language is used to influence the reader in each text',
      'Considers differences in historical context and how they shape the writing',
      'Uses embedded textual references from both texts',
      'Maintains a comparative rather than sequential structure',
    ],
    examinerTips: [
      'WJEC Eduqas Component 2 often pairs a 19th-century text with a modern one — consider how context shapes both argument and method.',
      'Compare HOW the writers try to influence you, not just WHAT they think.',
      'Find points of similarity AND difference between the texts.',
      'The best answers treat differences in time period as something that explains differences in method.',
    ],
  },

  // WJEC Eduqas Component 2 - Two-Task Writing (Persuasive/Discursive)
  {
    id: 'wjec-c2-write-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Persuasive/Discursive Writing (Q6)',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: '"Every young person should spend a year doing voluntary or community work before starting university or full-time employment." Write an article for a newspaper giving your views on this proposal. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    modelAnswers: {
      'Grade 4-5': `Should every young person spend a year doing community work before going to university or starting a job? Some people think this is a great idea, but I think it is more complicated than it sounds.\n\nOn the one hand, community work could be very beneficial. Young people would gain real-world experience that they cannot get in a classroom. They would learn skills like teamwork, communication, and problem-solving. They would also get to help other people, which could make them feel more confident and mature.\n\nHowever, there are problems with making this compulsory. Not every family can afford for their child to spend a year without earning money. Some young people need to start working straight away to support themselves or their families. Making everyone do voluntary work could actually make inequality worse, because richer students would find it easy while poorer students would struggle.\n\nAlso, forced volunteering is a contradiction. The whole point of voluntary work is that it is freely chosen. If you make it compulsory, you take away the thing that makes it valuable.\n\nIn conclusion, while community work is a good thing, I do not believe it should be forced on all young people. Instead, it should be encouraged and made accessible, with financial support for those who need it.`,
      'Grade 6-7': `There is something seductive about the idea of a national service year for young people. It promises to fix everything we worry about: a generation staring at screens, communities coming apart, graduates who can write essays but cannot change a tyre. One year of "real" work, the argument goes, and they will emerge as responsible, empathetic, employable adults. It is a compelling narrative. It is also, I would suggest, a fantasy.\n\nLet me be clear: I am not against voluntary work. I spent six months working in a food bank after my A-levels, and it taught me more about the country I live in than three years of university managed. But the key word in that sentence is "I." I chose it. I had parents who could support me financially while I did it. I had a university place waiting for me afterwards. These are not universally available conditions.\n\nThe proposal to make a service year compulsory ignores the single most important fact about young people in this country: they are not all the same. For a middle-class student with a safety net, a gap year of volunteering is an enriching experience. For a care leaver, a young carer, or someone from a family where every adult wage matters, it is a year of financial hardship imposed by people who have never experienced financial hardship.\n\nThere is also the philosophical objection, which is simple and, I think, unanswerable: compulsory volunteering is an oxymoron. The value of voluntary work lies precisely in its voluntariness — in the decision to give your time freely. Mandate it and you do not create a culture of service; you create a culture of resentment.\n\nThe instinct behind this proposal is a good one. We should want young people to engage with their communities. But we should do so by removing barriers — funding gap-year placements, offering bursaries, creating meaningful opportunities — not by adding another compulsory hoop to a generation that is already over-tested, over-examined, and under-trusted.`,
      'Grade 8-9': `Whenever a society does not know what to do with its young people, it proposes to make them useful. National service, gap year schemes, voluntary work mandates — the specifics change, but the underlying impulse remains constant: the suspicion that eighteen-year-olds, left to their own devices, will squander themselves, and that the solution is to give them purpose before they have had the chance to find their own.\n\nThe current proposal — a compulsory year of voluntary or community work before university or employment — has the sleek plausibility of a conference keynote. It sounds progressive: service, community, real-world experience. It sounds fair: everyone does it, so nobody is disadvantaged. It sounds, most importantly, like it costs nothing, since the labour is unpaid. It is, of course, precisely the people for whom it would cost the most who have the least say in whether it happens.\n\nConsider two eighteen-year-olds. One lives in a four-bedroom house in Surrey, with parents who will fund her year of community work as cheerfully as they funded her Duke of Edinburgh expedition. She will volunteer at a heritage charity, develop her communication skills, and mention it in her personal statement. The other lives in a two-bedroom flat in Middlesbrough with a single parent who works nights. He needs to earn. Not wants to — needs to. For him, a compulsory unpaid year is not an opportunity but a punishment, administered by a political class that has confused its own privileged experience of youth with a universal one.\n\nThe deepest flaw in the proposal is conceptual. Volunteering, by definition, requires consent. Strip that consent away and you do not have volunteering; you have conscription with better branding. The psychological evidence is unambiguous: intrinsic motivation — the kind that produces genuine civic engagement — is destroyed by external compulsion. You will not create a generation that cares about community by forcing them to perform community service. You will create a generation that associates community with coercion.\n\nNone of this means the impulse is wrong. It means the mechanism is. If we want young people to volunteer, we should make volunteering attractive, accessible, and financially viable. Fund it. Recognise it. Build it into the structures of education and employment as an option, not an obligation. Trust young people to make good decisions when good decisions are available to them — and acknowledge that many of them already do, without being asked, in food banks and care homes and mentoring programmes that operate on goodwill and receive considerably less political attention than compulsory schemes that do not yet exist.\n\nThe desire to shape the young is understandable. The refusal to let them shape themselves is not.`,
    },
    markScheme: [
      'Presents a clear and sustained viewpoint on the proposal',
      'Addresses the form and audience (newspaper article)',
      'Uses a range of persuasive and/or discursive techniques effectively',
      'Organises ideas coherently with effective paragraphing and discourse markers',
      'Demonstrates ambitious and accurate use of vocabulary and sentence structures',
      'Achieves a high standard of technical accuracy throughout',
    ],
    examinerTips: [
      'WJEC Eduqas allocates 20 marks for accuracy — careful proofreading is essential.',
      'A discursive article can argue a position while acknowledging complexity — you do not have to be one-sided.',
      'Use concrete examples and hypothetical scenarios to make abstract arguments vivid.',
      'The strongest writing has a distinctive voice — let your personality come through while maintaining appropriate register.',
    ],
  },
  // ========================================
  // ADDITIONAL AQA QUESTIONS
  // ========================================

  // AQA Paper 1 Q5 - Creative Writing (Narrative)
  {
    id: 'aqa-7',
    board: 'AQA',
    type: 'Creative Writing',
    tier: 'GCSE',
    title: 'Paper 1 Q5 Creative Writing (Narrative)',
    extract: '',
    question: 'Write a story about a character who discovers something unexpected in a place they thought they knew well. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
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
      'The "discovery" does not have to be dramatic — subtlety is more impressive than melodrama.',
      'Show character through what they notice and how they react, not by telling the reader who they are.',
      'Vary your paragraph lengths. A one-sentence paragraph after a long one creates powerful emphasis.',
    ],
    modelAnswers: {
      'Grade 4-5': `Every Tuesday for three years, Martin walked his dog through the cemetery at the end of Ashfield Road. He knew every path, every bench, every stone angel with its mossy wings and blank, patient face. He knew which graves had fresh flowers and which had been forgotten. He liked the quiet. The dead, he had often thought, were better company than the living.

It was a cold morning in November when he noticed the door. It was set into the back wall of the old chapel, half hidden by ivy. He had walked past this wall hundreds of times and never seen it. The door was small — too small for an adult to walk through without stooping — and it was painted the same grey as the stone, which is why, he supposed, it had been invisible for so long.

He tried the handle. It opened.

Inside was a narrow staircase leading down. The air smelled of damp earth and something else, something sweet and old, like the pages of a book left in a drawer for decades. His dog whined and would not follow him.

At the bottom of the stairs was a room. It was small, no bigger than a garden shed, and lined from floor to ceiling with shelves. On the shelves were jars — hundreds of them, glass jars with handwritten labels, each one containing what looked like dried flowers and folded pieces of paper. Martin picked one up and read the label. It said a name he recognised: Eleanor Parsons, 1843–1901. She was buried in the third row, near the yew tree.

He opened the jar carefully. Inside, wrapped around a sprig of dried lavender, was a letter. It began: "My dearest Eleanor, I write this knowing you will never read it, but the writing is the thing."

Martin sat down on the cold floor and read every word.`,
      'Grade 6-7': `The allotment had been his father's and his grandfather's before that, and David had taken it over the way you inherit a face — without choosing it, without questioning it, simply by being next in line. He came every Saturday, turned the soil, talked to the runner beans, and avoided thinking about anything that mattered. The allotment was good for that. It asked nothing of you except presence.

He was digging a new trench for potatoes when the spade struck metal. Not a stone — the sound was wrong, hollow and resonant, like tapping a bell. He scraped the earth away with his hands and found a biscuit tin, rusted at the edges but intact. The lid resisted, then gave with a sound like a small sigh.

Inside, wrapped in oilcloth that had kept the damp out for what turned out to be forty-seven years, was a notebook. His grandfather's handwriting — he recognised the slanted capitals, the way the letter g always dropped below the line like a fishhook. But the content was not what he expected. Not planting schedules. Not seed orders.

Poems. Page after page of them. Sonnets, mostly, though David was no expert. They were about a woman called Eira, a name David had never heard his grandfather speak. They were tender and precise and occasionally funny, and they described a love affair that had apparently lasted thirty years alongside a marriage David's grandmother had always described as contented.

David sat on the upturned bucket he used as a chair and read them with the strange, vertiginous sensation of discovering that the ground you stand on has a basement. His grandfather — the man who communicated exclusively in weather observations and unsolicited advice about compost — had contained this. Had written these words, in this handwriting, and buried them in a biscuit tin three feet beneath a potato trench, where they waited in the dark with the patience of something that knows it will eventually be found.

He put the notebook in his coat pocket. He did not tell anyone. Some discoveries are not secrets exactly, but they are private — they belong to the earth that held them and the person who was meant, eventually, to dig.`,
      'Grade 8-9': `The house had been hers for nine months, which is to say it had been hers for long enough to stop noticing it. She knew its sounds — the boiler's arthritic cough at six each morning, the way the third stair protested underfoot like a cat whose tail you have stepped on — and she knew its silences, which were more various than she had expected. The silence of a Tuesday afternoon was not the silence of a Sunday evening. The house, she had come to understand, was a building that remembered being full of people and had not yet adjusted to containing only one.

It was the wallpaper that started it. She was stripping the back bedroom — a floral pattern of such aggressive cheerfulness that it could only have been chosen in the 1970s by someone who believed optimism could be applied with paste — when the paper came away and beneath it was another layer. And beneath that, another. She kept peeling, carefully now, the way you turn the pages of something fragile, and each layer was a decade: roses over stripes over a pale geometric print that she could date, by its colours, to the late 1940s.

Behind the last layer, the plaster was bare. Almost bare. Someone had written on it in pencil, in small, careful letters that had survived beneath their papery archaeology for what she calculated was at least seventy-five years.

It said: "Renovated this room myself, August 1948. Took three weekends. Margaret says the colour is wrong but Margaret is wrong about most things and I love her for it. If you are reading this you have stripped the wallpaper, which means Margaret's taste has finally been overruled. She will not forgive you. — J. Haldane"

Nadia sat on the bare floorboards and read it again. Then again. She was aware of an emotion she could not immediately name — something adjacent to grief but warmer, like holding a cup that someone else has recently put down. J. Haldane. She said the name aloud and the house absorbed it the way it absorbed everything: patiently, without comment, adding it to the record of sounds it had been keeping since before she was born.

She went downstairs and made tea. She drank it at the kitchen table, thinking about the man who had written on his own wall in the reasonable expectation that his words would be buried for ever, and who had written them anyway, because the impulse to leave a mark is older than the expectation that anyone will find it.

She did not wallpaper the room. She painted around the words, leaving them exposed, a small rectangle of 1948 in a room that was otherwise 2024. Visitors asked about it. She told them it was a feature. She did not tell them that she sometimes stood in the doorway in the evenings and read it again, not because she had forgotten the words but because the act of reading them was a conversation with someone she had never met, conducted across a distance that neither paper nor plaster could entirely close.`,
    },
  },

  // AQA Paper 2 Q2 - Summary & Synthesis
  {
    id: 'aqa-8',
    board: 'AQA',
    type: 'Summary & Synthesis',
    tier: 'GCSE',
    title: 'Paper 2 Q2 Summary & Synthesis',
    extract: `Source A: "Travel in the nineteenth century was an endurance test. A journey from London to Edinburgh by stagecoach took four days in good weather and considerably longer in bad. Passengers were packed together in cramped, unsprung carriages that jolted over rutted roads, arriving bruised, exhausted, and covered in the dust of three counties. Inns along the route were unreliable — the beds often shared with strangers, the food indifferent, the prices exorbitant. To travel was to suffer, and only those with compelling business or exceptional stubbornness undertook long journeys voluntarily."\n— Adapted from a history of British transport, 2018\n\nSource B: "I took the 06:15 from King's Cross and was in Edinburgh by ten. I spent the journey answering emails, drinking a coffee that cost more than my grandfather earned in a day, and watching England turn into Scotland through a window that was, by modern standards, almost clean. The train was warm, fast, and largely empty. I read the paper, slept for forty minutes, and arrived feeling precisely as I had when I left, which is both the miracle and the disappointment of modern travel: it delivers you to your destination without requiring you to experience the journey at all."`,
    question: 'Use details from both sources. Write a summary of the differences between travelling in the nineteenth century and travelling today. (8 marks)',
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
      'Grade 4-5': `The two sources show that travel has changed dramatically. In Source A, a journey from London to Edinburgh took "four days" by stagecoach, whereas in Source B the same journey by train takes less than four hours. The physical experience is also very different: nineteenth-century passengers arrived "bruised, exhausted, and covered in dust," while the modern traveller arrives "feeling precisely as I had when I left," suggesting the journey requires no physical effort at all. Accommodation was a problem in Source A, with "unreliable" inns and beds "shared with strangers," but Source B's traveller has everything they need on the train itself — coffee, warmth, and space to sleep. Finally, Source A says only those with "compelling business" would travel voluntarily because it was so unpleasant, while Source B suggests modern travel is so easy that it has lost all sense of adventure or experience.`,
      'Grade 6-7': `The sources present nineteenth-century travel as an ordeal and modern travel as an absence of experience. The most fundamental difference is temporal: Source A's four-day stagecoach journey has been compressed into Source B's four-hour train ride, a transformation that has removed not only discomfort but also, as Source B's writer notes, the experience of the journey itself. Physically, the contrast is stark — Source A's passengers endure cramped, "unsprung carriages" and arrive damaged, while Source B's narrator travels in warmth and comfort, the greatest inconvenience being an overpriced coffee. The social dimension has also shifted: where Source A's travellers were forced into unwanted intimacy, sharing beds with strangers at roadside inns, Source B's train is "largely empty," and the traveller's interactions are with emails and newspapers rather than people. Perhaps most tellingly, Source A frames travel as something requiring "exceptional stubbornness," while Source B frames it as something requiring so little that the traveller barely registers it — "the miracle and the disappointment" being that modern travel has eliminated suffering at the cost of eliminating significance.`,
      'Grade 8-9': `The sources trace a paradox: as travel has become physically easier, it has become experientially emptier. Source A's nineteenth-century journey is defined by embodied suffering — passengers are "bruised, exhausted, and covered in dust," their bodies serving as records of the distance traversed. Source B's modern equivalent produces no such record; the traveller arrives unchanged, the journey having been so frictionless as to be almost imperceptible. The infrastructure of travel has been inverted: Source A describes a hostile network of "unreliable" inns and shared beds, where comfort was contingent and uncertain, while Source B's train provides a self-contained environment of warmth and solitude that insulates the traveller from the landscape entirely. The relationship between traveller and journey has also shifted from active endurance to passive consumption — Source A's travellers choose to suffer for "compelling business," exercising agency through stubbornness, while Source B's narrator is transported, spending the journey on activities entirely unrelated to travel itself. Both sources ultimately suggest that the quality of a journey is measured not by comfort but by transformation: Source A's travel changed the traveller physically; Source B's writer suggests that modern travel's failure to change us at all is "both the miracle and the disappointment."`,
    },
  },

  // AQA Literature Paper 2 - Poetry Comparison
  {
    id: 'aqa-9',
    board: 'AQA',
    type: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Literature Paper 2 Poetry Comparison',
    extract: `Poem A — "Remains" by Simon Armitage (extract):
"His blood-Loss shadow stays on the street, and out on patrol
I walk right over it week after week. Then I'm home on leave.
But I blink and he bursts again through the doors of the bank.
Sleep, and he's probably armed, and probably dangerous,
and me and somebody else and somebody else
are all of the same mind."

Poem B — "War Photographer" by Carol Ann Duffy (extract):
"In his dark room he is finally alone
with spools of suffering set out in ordered rows.
The only light is red and softly glows,
as though this were a church and he a priest
preparing to intone a Mass."`,
    question: 'Compare how the poets present the lasting effects of conflict in "Remains" and "War Photographer." (30 marks)',
    marks: 30,
    timing: '45 minutes',
    markScheme: [
      'Compares ideas and themes across both poems',
      'Analyses how language, form, and structure create meaning in both poems',
      'Uses well-selected quotations from both poems',
      'Explores the poets\' methods and their effects on the reader',
      'Considers relevant contextual factors',
      'Maintains a comparative structure throughout',
    ],
    examinerTips: [
      'Structure by theme or idea, not poem by poem.',
      'Compare methods, not just content — how do the poets achieve similar or different effects?',
      'Use the extracts as a starting point but refer to the whole poems.',
      'Context should illuminate your analysis, not replace it.',
    ],
    modelAnswers: {
      'Grade 4-5': `Both "Remains" by Simon Armitage and "War Photographer" by Carol Ann Duffy present characters haunted by their experiences of conflict, but they do so in different ways.

In "Remains," the soldier cannot escape the memory of killing a looter. The image of the "blood-shadow" that "stays on the street" shows that the violence has left a permanent mark. The verb "stays" suggests the memory will not go away. When the soldier says "I blink and he bursts again through the doors," it shows the memory replays involuntarily, even at home. The repetition of "probably armed, and probably dangerous" reveals his uncertainty about whether the killing was justified.

In "War Photographer," Duffy presents a different kind of haunting. The photographer is "finally alone" in his dark room, which suggests he needs to separate himself from the world to process what he has seen. The metaphor comparing the dark room to a church and the photographer to "a priest preparing to intone a Mass" gives his work a sacred, solemn quality, suggesting the suffering he has witnessed deserves reverence.

Both poems show that conflict follows people home. The soldier in "Remains" is invaded by memories he cannot control, while the photographer in "War Photographer" chooses to revisit the suffering through his work. Both suggest that witnessing violence changes a person permanently.`,
      'Grade 6-7': `Both poets examine how conflict persists beyond the battlefield, but their speakers occupy fundamentally different positions — one as participant, one as witness — and these positions shape the form and language of each poem.

Armitage's soldier is trapped in repetition. The "blood-shadow" that "stays on the street" functions as a literal and psychological stain, and the present tense "stays" refuses the distance of memory, insisting that the past is ongoing. The enjambment across "on patrol / I walk right over it" forces the reader to experience the unavoidable confrontation that the soldier faces weekly. The shift to "home on leave" offers no escape; the conjunction "But" immediately reinstates the trauma through the hallucinatory image of the looter bursting "again through the doors." The colloquial voice — "me and somebody else and somebody else" — creates an unsettling casualness that reflects how the military normalises violence while the psyche cannot.

Duffy's photographer, by contrast, processes conflict through ritual and craft. The dark room is a controlled space — "ordered rows" of suffering impose structure on chaos — and the simile of "a church" sacralises the act of developing photographs. Where Armitage's soldier is overwhelmed by involuntary memory, Duffy's photographer deliberately returns to images of suffering, making his trauma a vocational choice. The sibilance of "spools of suffering set out" creates a hushed, reverent tone that contrasts sharply with Armitage's staccato, fragmented syntax.

Both poems ultimately suggest that the lasting effect of conflict is a division of self: Armitage's soldier is split between the street and home, waking and sleeping; Duffy's photographer is divided between "Rural England" and the war zones he documents. Neither can fully inhabit one world without being pulled back to the other.`,
      'Grade 8-9': `Armitage and Duffy approach the aftermath of conflict from opposing vectors — one from inside the experience, one from its periphery — yet both arrive at the same conclusion: that conflict does not end when the shooting stops but takes up permanent residence in the consciousness of those it touches.

Armitage's "Remains" dramatises trauma as a failure of temporal boundaries. The "blood-shadow" that "stays on the street" is an image of extraordinary compression — it is simultaneously a bloodstain, a shadow, and a psychological imprint, the compound noun refusing to separate the physical from the metaphorical. The present tense "stays" is the poem's most important verb: it denies the past its pastness, insisting that for the traumatised mind, the event is perpetually occurring. The structural collapse from external reality ("out on patrol") to internal hallucination ("I blink and he bursts again") enacts the mechanism of PTSD, where sensory triggers dissolve the boundary between then and now. Armitage's use of the colloquial register — "me and somebody else and somebody else" — is a formally radical choice: it mimics the soldier's attempt to depersonalise the killing, but the vague repetition of "somebody else" betrays the anonymity that military culture demands while revealing its psychological cost. The phrase "all of the same mind" carries a bitter irony: the shared decision to shoot creates a shared guilt that is, paradoxically, experienced in isolation.

Duffy's "War Photographer" constructs a fundamentally different relationship between subject and conflict. Where Armitage's soldier is invaded by memory, Duffy's photographer curates it. The "ordered rows" of film spools impose a taxonomy on suffering that the suffering itself resists, and the religious imagery — the dark room as "church," the photographer as "priest" — elevates the act of witnessing to a sacrament. This is not accidental: Duffy is interrogating the ethics of turning pain into art, a question the poem shares with its own medium. The soft, controlled rhyme scheme (alone/rows/glows) and the measured iambic pentameter formally enact the photographer's attempt to contain the uncontainable, creating a surface calm that the content continually threatens to rupture.

The crucial difference is agency. Armitage's soldier has no choice — the memory "bursts" through uninvited, and the poem's lack of regular form mirrors this loss of control. Duffy's photographer chooses to return to the images, yet this apparent agency is itself a form of compulsion: he develops the photographs because he cannot not develop them, the ritual of the dark room being the only structure that makes the chaos legible. Both poems ultimately locate the lasting effect of conflict not in physical injury but in the impossibility of integrating the experience into ordinary life. Armitage's soldier walks over the bloodstain "week after week," unable to avoid it; Duffy's photographer produces images that his audience will glance at "between the bath and pre-lunch beers." In both cases, the real damage is the gap between those who carry the weight of what they have seen and a society that has the luxury of looking away.`,
    },
  },

  // ========================================
  // ADDITIONAL EDEXCEL QUESTIONS
  // ========================================

  // Edexcel Language Paper 1 Q1 - Information Retrieval
  {
    id: 'edexcel-5',
    board: 'Edexcel',
    type: 'Information Retrieval',
    tier: 'GCSE',
    title: 'Language Paper 1 Q1 Information Retrieval',
    extract: `The storm arrived without warning on the evening of September 14th. By midnight, winds exceeding ninety miles per hour had torn roofing tiles from houses across the southern counties and brought down power lines in Kent, Sussex, and Hampshire. Emergency services received over twelve thousand calls in the first three hours. Roads were blocked by fallen trees — an estimated fifteen million trees were uprooted across southern England before dawn — and the railway network was suspended entirely south of the Thames.

Mrs Patricia Denton, seventy-three, of Sevenoaks in Kent, described the experience as "the most terrifying night of my life." She had been woken at two o'clock by the sound of her greenhouse disintegrating. "I lay in bed listening to the whole garden being torn apart," she said. "There was nothing I could do except wait for it to stop." Her neighbour, Mr Gerald Howe, lost the oak tree that had stood in his front garden for over a century. It fell across two parked cars and came to rest against the wall of the local primary school.

The economic cost of the storm was later estimated at over one billion pounds. Eighteen people lost their lives. The Met Office was criticised for failing to issue an adequate warning, a controversy that led to a fundamental overhaul of the national weather forecasting system.`,
    extractSource: 'Adapted from an account of the Great Storm of 1987',
    question: 'From lines 1-12, identify the information given about the storm and its effects. Give four examples. (4 marks)',
    marks: 4,
    timing: '15 minutes',
    markScheme: [
      'Identifies four distinct pieces of information from the specified lines',
      'Each point is clearly supported with textual reference',
      'Points are genuinely different (not repetitions of the same idea)',
      'Answers are drawn from the correct line range',
    ],
    examinerTips: [
      'This is a retrieval question — keep answers clear and factual.',
      'Do not analyse language. Simply find and state information.',
      'Each point should be a separate fact supported by a short quotation.',
      'Check you are answering from the correct line range.',
    ],
    modelAnswers: {
      'Grade 4-5': `First, the storm arrived unexpectedly "without warning on the evening of September 14th." Second, the winds were extremely powerful, "exceeding ninety miles per hour," causing damage to houses. Third, emergency services were overwhelmed, receiving "over twelve thousand calls in the first three hours." Fourth, a huge number of trees were destroyed — "an estimated fifteen million trees were uprooted across southern England."`,
      'Grade 6-7': `The extract reveals that the storm struck suddenly and without adequate forecasting, arriving "without warning." Its physical impact was devastating: winds over ninety miles per hour caused structural damage across "Kent, Sussex, and Hampshire," and approximately "fifteen million trees were uprooted." The scale of the emergency is conveyed by the volume of calls to emergency services — "over twelve thousand" in three hours — while the disruption to infrastructure is shown by the complete suspension of "the railway network" south of the Thames.`,
      'Grade 8-9': `The storm's onset was sudden and unforecast, arriving "without warning" on September 14th. Its destructive force operated on multiple scales: domestically, winds exceeding ninety miles per hour stripped roofing tiles and brought down power lines across three counties; environmentally, "an estimated fifteen million trees were uprooted" before dawn. The human response was overwhelmed — emergency services fielded "over twelve thousand calls in the first three hours" — and transport infrastructure collapsed entirely, with the railway network "suspended" south of the Thames. The specificity of these details — exact wind speeds, precise call volumes, named counties — constructs a picture of a national emergency unfolding with a speed that outpaced the capacity to respond.`,
    },
  },

  // Edexcel Language Paper 1 Q5 - Transactional Writing
  {
    id: 'edexcel-6',
    board: 'Edexcel',
    type: 'Transactional Writing',
    tier: 'GCSE',
    title: 'Language Paper 1 Q5 Transactional Writing',
    extract: '',
    question: 'Your school is considering replacing all physical textbooks with tablets and digital resources. Write a speech to be delivered at a school assembly giving your views on this proposal. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
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

There is also the issue of distraction. Be honest with yourselves — if you had a tablet in front of you in every lesson, would you always be reading the textbook, or would you sometimes be checking messages, playing games, or watching videos? I think we all know the answer.

My suggestion is a compromise: keep textbooks for core subjects but offer digital resources as an additional option. That way we get the benefits of technology without losing the reliability of books. Thank you.`,
      'Grade 6-7': `Good morning. I would like you to do something for me. Close your eyes — just for a moment — and think about a book that mattered to you. Not the words in it, but the object itself. The weight of it. The smell of the pages. The corner you folded down because you could not find a bookmark. The coffee stain on page forty-seven that reminds you of the afternoon you read it.

Now open your eyes. The proposal before us would ensure that no student in this school ever has that experience again.

I am not a technophobe. I own a phone, a laptop, and more chargers than I care to admit. I understand that digital resources are searchable, updatable, and lighter than the average Year 11 bag. These are genuine advantages and I do not dismiss them. But I want us to think carefully about what we would lose.

Research from the University of Stavanger has shown that students who read on paper retain more information than those who read on screens. The physical act of turning pages, of feeling your progress through a book, creates what psychologists call "cognitive mapping" — a spatial understanding of where information lives. A textbook has a geography. A tablet has a scroll bar. These are not equivalent.

There is also the question of equity. Not every student has reliable Wi-Fi at home. Not every student can afford to replace a broken screen. A textbook is a robust, democratic technology: it works for everyone, everywhere, without a password or a software update. A tablet is only as reliable as its battery and its broadband connection, and both of these, in this country, are considerably less reliable than we pretend.

Finally — and I say this with affection for every one of you — we cannot be trusted. A tablet in every lesson is a portal to every distraction the internet has ever invented. We are sixteen. Our prefrontal cortices are works in progress. Asking us to have an open browser and a Snapchat account inches from our biology notes and to simply choose wisely is not realistic. It is an experiment, and we are the subjects.

Keep the books. Supplement them with technology by all means. But do not replace the thing that works with the thing that glows. Thank you.`,
      'Grade 8-9': `I would like to begin with a confession. When I first heard about this proposal, I was in favour of it. Lighter bags, instant access, no more discovering at 8:47am that you have left your English anthology on the kitchen table — what is not to like? Then I thought about it for more than thirty seconds, which is, I suspect, longer than this proposal has been thought about by anyone who will not have to live with its consequences.

Let me be precise about what is being proposed. We are not being offered technology as a supplement. We are being offered technology as a replacement. Every physical textbook — removed. Every page — digitised. Every student — issued a screen and told that this is progress. And perhaps it is. But progress towards what?

The evidence on digital reading is not ambiguous. It is clear. A meta-analysis published in Educational Research Review, covering over 170,000 participants, found that reading comprehension is significantly better on paper than on screen. This is not nostalgia dressed as science. It is science dressed as science. The reasons are neurological: paper provides tactile and spatial cues that support memory encoding. When you read a physical book, your brain maps information to a physical location — top of the left page, near the diagram, three chapters in. A screen offers no such architecture. It offers a uniform, glowing rectangle, and the brain, faced with uniformity, retains less. We know this. The research is not new. The question is whether we care.

I suspect the real motivation for this proposal is financial. Digital licences, over time, cost less than replacing damaged textbooks. This is true. It is also true that the cheapest option and the best option are, in education, almost never the same thing. We could save money by removing the heating. We could save money by increasing class sizes to fifty. We do not do these things because we recognise, correctly, that education is an investment, not a cost centre. Textbooks should be subject to the same logic.

And then there is the question none of us want to ask but all of us know the answer to. If every student in this room has a tablet open in every lesson, will they use it exclusively for learning? I look around this assembly hall and I see three hundred people, every one of whom has, at some point, opened a browser intending to research the Treaty of Versailles and emerged forty-five minutes later having watched a man rank every flavour of crisp. I include myself. I include, with the greatest respect, several members of staff. Distraction is not a failure of willpower. It is a design feature of the technology we are proposing to place at the centre of every lesson.

I am not asking you to reject technology. I am asking you to reject the assumption that newer means better, that screens are inherently superior to pages, and that the correct response to every problem is to add a device. Keep the textbooks. Use technology where it genuinely improves learning. And when someone tells you that the future is digital, remind them that the future is also the generation sitting in this room — and we deserve tools that are chosen because they work, not because they are fashionable.

Thank you.`,
    },
  },

  // Edexcel Literature - Poetry Comparison
  {
    id: 'edexcel-7',
    board: 'Edexcel',
    type: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Literature Poetry Comparison',
    extract: `Poem A — "Ozymandias" by Percy Bysshe Shelley:
"I met a traveller from an antique land,
Who said — 'Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed.'"

Poem B — "My Last Duchess" by Robert Browning (extract):
"That's my last Duchess painted on the wall,
Looking as if she were alive. I call
That piece a wonder, now: Fra Pandolf's hands
Worked busily a day, and there she stands.
Will't please you sit and look at her?"`,
    question: 'Compare how the poets explore the theme of power and its limitations in "Ozymandias" and "My Last Duchess." (20 marks)',
    marks: 20,
    timing: '35 minutes',
    markScheme: [
      'Compares ideas about power across both poems',
      'Analyses how the poets\' methods convey attitudes to power',
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

In "My Last Duchess," the Duke is also controlling. He speaks about his dead wife as if she were a possession, calling her "my last Duchess" — the possessive pronoun "my" shows ownership. He controls who can look at her painting: "Will't please you sit and look at her?" is a command disguised as a polite question. The Duke's power seems more intact than Ozymandias's, but the fact that he can only control a painting, not a living person, reveals its limitation.

Both poems use art to explore power. Ozymandias's power survives only through the sculptor's skill, while the Duke has replaced his wife with a portrait he can control. Both suggest that powerful men try to preserve their authority through art but ultimately reveal their own weakness.`,
      'Grade 6-7': `Shelley and Browning both anatomise power through its material remnants — a statue and a painting — and both reveal that the desire to control outlasts the ability to do so.

Shelley constructs Ozymandias's power as already ruined. The sonnet's opening removes the pharaoh from his own story: he does not speak directly but is reported through a chain of narration — traveller to poet to reader — that structurally enacts the erosion of authority. The "shattered visage" retains the "sneer of cold command," but the command is now directed at empty desert. The irony is architectural: the passions "yet survive," but only because the sculptor — the subordinate, the servant — captured them in stone. Power is preserved by the very craft it patronised, and the pharaoh's immortality depends on the artist he almost certainly considered beneath him. The volta comes in the inscription's boast — "Look on my Works, ye Mighty, and despair!" — which the surrounding "lone and level sands" render absurd.

Browning's Duke presents a more insidious form of power: one that is current, active, and performed. The dramatic monologue allows the Duke to speak without interruption, his control of the conversation mirroring his desire to control everything around him. The painting of the Duchess is "a wonder" precisely because it is static — she cannot blush, cannot smile at other men, cannot exhibit the independence that so enraged him. The possessive "my last Duchess" reduces a human being to a catalogued item, and the phrase "last" implies she is one in a sequence, her replacement already being negotiated. Yet Browning's form subtly undermines the Duke's authority: the rhyming couplets are deliberately run-on, their enjambment suggesting a speaker who cannot quite control his own rhetoric, whose composure is a performance that threatens to slip.

Both poems suggest that the truest expression of power is the attempt to outlast death — through statues, through portraits — and both reveal this attempt as ultimately futile. Ozymandias's monument is rubble; the Duke's control extends only to a painting on a wall. Art survives the powerful, but it does not serve them — it exposes them.`,
      'Grade 8-9': `Both poems stage an encounter with power through its aesthetic afterlife — a broken statue, a commissioned portrait — and both discover that art, which the powerful deploy as an instrument of control, ultimately becomes the instrument of their exposure.

Shelley's sonnet is a masterclass in structural irony. Ozymandias never speaks to us directly; his voice arrives through three mediations — sculptor to traveller to poet — each layer of remove enacting the historical distance that has rendered his authority meaningless. The "two vast and trunkless legs of stone" are a monument to dismemberment: the body of power has been amputated, leaving only the stance of authority without its substance. That the "sneer of cold command" survives while the empire does not is Shelley's central irony — the emotions of tyranny are more durable than its achievements. The sculptor "well those passions read" — and the verb "read" is crucial, positioning the artist as interpreter rather than servant. The hand that "mocked" the passions carries a deliberate ambiguity: it means both "copied" and "ridiculed," so the statue simultaneously memorialises and satirises its subject. Shelley, writing in the aftermath of the Napoleonic Wars, understood that empires generate monuments in direct proportion to their insecurity, and that the desert — patient, indifferent, infinite — is the only honest critic of human ambition.

Browning's Duke operates in a different register of power — intimate, domestic, and therefore more disturbing. Where Ozymandias commanded armies, the Duke commands a conversation, and his dramatic monologue is itself an exercise in control: we hear only his voice, see only through his gaze. The Duchess has been converted from a living woman into "a piece" on a wall — the reduction is linguistic before it is literal. The crucial revelation — that the Duke "gave commands; / Then all smiles stopped together" — is delivered with a syntactic brevity that mirrors the efficiency of the violence it describes. The painting is not a memorial but a correction: it fixes the Duchess in the posture the Duke preferred, her smile now permanently directed by his permission. Yet Browning's form performs the same subversion as Shelley's. The enjambed couplets — technically closed but experientially open — create a tension between the Duke's desire for containment and the poem's refusal to be contained. His rhetoric slips: "I choose / Never to stoop" protests too much, and the final descent to negotiate a dowry exposes the transactional reality beneath the aesthetic surface.

The poems converge on a devastating insight: power that requires a monument is power that suspects its own impermanence. Ozymandias commissions a colossus because empires end; the Duke commissions a portrait because wives die or are killed. Both men attempt to transcend their limitations through art, and both are betrayed by it — Ozymandias by a sculptor who embedded mockery in the stone, the Duke by a monologue that reveals far more than he intends. Shelley and Browning, writing within three decades of each other, both recognised that the Romantic fascination with power was inseparable from the recognition of its futility — and that the poet's task was not to celebrate or condemn the powerful but to let them speak until they condemned themselves.`,
    },
  },

  // ========================================
  // ADDITIONAL OCR QUESTIONS
  // ========================================

  // OCR Language Paper 1 Q1 - Reading Comprehension
  {
    id: 'ocr-5',
    board: 'OCR',
    type: 'Reading Comprehension',
    tier: 'GCSE',
    title: 'Language Paper 1 Q1 Reading Comprehension',
    extract: `The first thing you notice about the market in Marrakech is the noise. It hits you like a wall the moment you step through the gate — a roar made up of a thousand smaller sounds, each one fighting to be heard. Traders shout prices across the narrow lanes. Mopeds weave between the crowds, their horns blaring. Somewhere, a radio plays Arabic pop music at a volume that suggests the owner believes the entire souk should share his taste.

The colours come next. Pyramids of spices — saffron yellow, paprika red, turmeric gold — are arranged on low tables with a precision that suggests the trader is an artist as much as a merchant. Leather bags hang from hooks in every shade of brown the animal kingdom can produce. Carpets are stacked in towers that lean against the walls like sleeping giants, their patterns so intricate that you could stare at one for an hour and still find something new.

Then the smells arrive, and they are less romantic. Tanning pits on the eastern side of the medina produce a stench that clings to your clothes and follows you home. Fresh mint, sold in great bunches by boys who cannot be older than eight, provides temporary relief. Bread bakes somewhere out of sight, its warm, yeasty scent threading through the chaos like a rumour of civilisation.

You will get lost. This is not a possibility but a certainty. The lanes twist and double back and arrive at dead ends that were not dead ends yesterday because someone has parked a cart across them. Maps are useless. Ask for directions and you will receive confident, contradictory advice from five different people, all of whom are correct, because in Marrakech there are always at least three ways to get anywhere, and none of them are the one you would choose.`,
    extractSource: 'Original composition in the style of travel writing',
    question: 'Read the extract carefully. Based on what you have read, identify and explain five things you learn about the market in Marrakech. Use evidence from the text to support each point. (10 marks)',
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
      'Grade 4-5': `First, the market is extremely noisy. The writer says it "hits you like a wall" and is made up of "a thousand smaller sounds" including traders shouting and mopeds blaring. Second, the market is very colourful, with spices displayed in "pyramids" of "saffron yellow, paprika red, turmeric gold." Third, the traders take care with how their goods look, arranging spices "with a precision that suggests the trader is an artist." Fourth, the market has unpleasant smells as well as nice ones — the tanning pits produce "a stench that clings to your clothes." Fifth, it is very easy to get lost because "the lanes twist and double back" and maps are described as "useless."`,
      'Grade 6-7': `The market is characterised first by sensory overload: the noise is so intense it "hits you like a wall," composed of competing sounds from traders, mopeds, and radios. This suggests an environment that overwhelms visitors. Second, the market is visually striking, with goods displayed with artistic care — spice pyramids of "saffron yellow, paprika red, turmeric gold" are arranged with "a precision" that elevates trade into an aesthetic practice. Third, it is a place of stark contrasts: the "stench" of the tanning pits coexists with the "warm, yeasty scent" of baking bread and "fresh mint," suggesting beauty and unpleasantness are inseparable. Fourth, the market employs young children, with mint "sold in great bunches by boys who cannot be older than eight," indicating a different cultural attitude to child labour. Fifth, the market's layout is chaotic and constantly changing — dead ends appear because "someone has parked a cart across them" — creating a space that resists navigation and where even confident directions are "contradictory."`,
      'Grade 8-9': `The market is presented as an environment that assaults the senses in a specific hierarchy: "the first thing you notice is the noise," then "the colours come next," then "the smells arrive" — suggesting a place so overwhelming that the visitor processes it in stages rather than all at once. Second, it is a space where commerce and artistry merge: the spice trader arranges his goods "with a precision that suggests the trader is an artist as much as a merchant," implying that the market values presentation as a form of craft. Third, the market contains stark material inequalities: boys "who cannot be older than eight" sell mint alongside traders whose carpet collections are described with the language of gallery exhibition, suggesting a hierarchy within the market's apparent chaos. Fourth, the physical environment is both sensory and adversarial — the tanning pits produce a stench that "clings to your clothes and follows you home," using verbs that personify the smell as something that attaches itself to visitors, making the market's presence inescapable even after leaving. Fifth, the market is a space that defeats Western assumptions about navigability: maps are "useless," directions are "confident" but "contradictory," and the lanes themselves change daily, suggesting that the market operates according to a logic that visitors must surrender to rather than impose upon.`,
    },
  },

  // OCR Literature Section A - Shakespeare Extract
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
    question: 'How does Shakespeare use this extract to present Macbeth\'s state of mind at this point in the play? Explore how the extract contributes to the play as a whole. (24 marks)',
    marks: 24,
    timing: '30 minutes',
    markScheme: [
      'Analyses how language presents Macbeth\'s psychological state',
      'Explores the significance of the extract within the wider play',
      'Uses well-selected quotations analysed in detail',
      'Considers how dramatic techniques (soliloquy, stage imagery) contribute to meaning',
      'Shows awareness of relevant context (Jacobean attitudes to conscience, kingship, the supernatural)',
      'Develops a coherent, sustained argument',
    ],
    examinerTips: [
      'The extract is a starting point, not a boundary. Refer to the rest of the play.',
      'Consider why Shakespeare uses a soliloquy here — what does it reveal?',
      'Think about the audience\'s experience. What would a Jacobean audience think?',
      'Analyse specific words, not just general ideas.',
    ],
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Macbeth as deeply disturbed and unsure of what is real. Macbeth sees a dagger floating in the air but cannot tell whether it is real or imaginary. He asks "Is this a dagger which I see before me?" which shows his confusion. The rhetorical question reveals that he is talking to himself, trying to make sense of what is happening.

Macbeth calls the dagger "a false creation, proceeding from the heat-oppressed brain." The adjective "heat-oppressed" suggests his mind is overheating with guilt and anxiety about the murder he is about to commit. He knows the dagger might not be real, but he still follows it — "Thou marshall'st me the way that I was going" — which suggests he feels he is being led towards the murder by fate or by a force he cannot control.

The appearance of "gouts of blood" on the blade is significant because it foreshadows the bloodshed to come. The word "gouts" means large drops, which makes the image vivid and disturbing. Macbeth then tries to dismiss the vision — "There's no such thing" — but his attempt to regain control is unconvincing because we know he is about to kill Duncan.

Shakespeare uses a soliloquy here to let the audience see inside Macbeth's mind. This is important because in public Macbeth appears confident, but in private he is tormented. This links to the play's wider theme of appearance versus reality.`,
      'Grade 6-7': `Shakespeare presents Macbeth at the threshold of irreversible action, using the dagger soliloquy to dramatise the final collapse of his resistance. The hallucination functions simultaneously as a psychological symptom and a theatrical device: Macbeth's inability to determine whether the dagger is real — "Art thou not, fatal vision, sensible / To feeling as to sight?" — externalises his internal division between moral revulsion and murderous ambition.

The language of the soliloquy oscillates between rational analysis and compulsive surrender. Macbeth attempts to diagnose his own condition — "a false creation, / Proceeding from the heat-oppressed brain" — using the vocabulary of Elizabethan humoral medicine, which attributed hallucinations to an excess of choler. This clinical self-assessment demonstrates that Macbeth retains the intellectual capacity to recognise his deterioration, which makes his failure to act on that recognition all the more tragic. The "heat-oppressed brain" locates the disturbance in the body rather than the supernatural, yet the preceding scenes — the Witches' prophecies, Lady Macbeth's invocation of "spirits" — ensure that the audience cannot so easily dismiss the metaphysical dimension.

The pivotal moment comes with "Thou marshall'st me the way that I was going." The verb "marshall'st" implies military command, casting Macbeth as a soldier following orders, yet the qualifying clause "the way that I was going" reveals that the dagger leads him only where he has already chosen to go. Shakespeare thus denies Macbeth the comfort of compulsion: the dagger does not create his intention but confirms it. This links to the wider play's exploration of free will — the Witches predict, but Macbeth acts.

The appearance of "gouts of blood" on the blade transforms the hallucination from a symbol of intent to a premonition of consequence. Macbeth's attempt to dismiss it — "There's no such thing" — is undermined by the very need to articulate the denial. Shakespeare places this soliloquy immediately before the murder, creating a dramatic pause in which the audience witnesses the last moments of Macbeth's conscience. After this scene, Macbeth will kill Duncan, and his subsequent soliloquies will be characterised not by hesitation but by deepening despair.`,
      'Grade 8-9': `The dagger soliloquy is Shakespeare's most sustained dramatic exploration of the mind at the moment of moral crisis, and its power derives from a carefully constructed impossibility: Macbeth knows the dagger is not real, says so explicitly, and follows it anyway. This is not irrationality. It is the dramatisation of a will that has already committed to the act while the conscience performs its final, futile audit.

The soliloquy opens with a question — "Is this a dagger which I see before me?" — that is simultaneously addressed to the hallucination, to Macbeth himself, and to the audience. Shakespeare deploys the second person "thee" to grant the dagger the status of an interlocutor, a rhetorical choice that performs the very confusion between real and unreal that the speech investigates. The imperative "Come, let me clutch thee" is startling in its intimacy: Macbeth does not recoil from the vision but reaches for it, the verb "clutch" encoding both desire and desperation. When the clutch fails — "I have thee not, and yet I see thee still" — the coordinating "and yet" holds the contradiction in suspension, refusing to resolve it.

Macbeth's attempt at rational self-diagnosis — "a false creation, / Proceeding from the heat-oppressed brain" — is a remarkable moment of early modern cognitive science. The phrase "heat-oppressed" draws on humoral theory, locating the hallucination in physiological imbalance rather than demonic intervention. But Shakespeare's audience would have held both explanations simultaneously: in a post-Reformation culture saturated with anxiety about the Devil's capacity to deceive the senses, Macbeth's rationalism is not reassuring but terrifying, because it raises the possibility that the dagger is both a medical symptom and a supernatural sign — that the categories are not mutually exclusive.

The soliloquy's structural turning point is "Thou marshall'st me the way that I was going, / And such an instrument I was to use." The past continuous "was going" and "was to use" are devastating: they reveal that the decision has already been made, that the dagger is not a cause but a confirmation. Shakespeare thus resolves the play's central question about agency — are the Witches responsible, or is Macbeth? — with a both/and rather than an either/or. The dagger leads, but it leads where Macbeth was already headed. Free will and determinism collapse into each other.

The final transformation — "gouts of blood, / Which was not so before" — accelerates the hallucination from invitation to prophecy. The word "gouts," from the French for drops, carries medical connotations of disease, and the blood that appears unprompted on the blade foreshadows not only Duncan's murder but the entire haemorrhagic trajectory of the play: Banquo's ghost, Lady Macbeth's obsessive handwashing, the final "damned spot" that will not come clean. Macbeth's dismissal — "There's no such thing" — is Shakespeare's most devastating use of dramatic irony, because the audience knows that in the world of this play, such things exist: witches prophesy, nature revolts, and the blood of murdered kings will not be washed away. The soliloquy is, in essence, the last moment before Macbeth crosses a threshold that transforms him from a man who contemplates evil into a man who commits it — and Shakespeare ensures we understand that the crossing is entirely voluntary.`,
    },
  },

  // OCR Literature - Unseen Poetry
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
    question: 'In this poem, Muir presents a world recovering from catastrophe. How does the poet use language, form, and structure to convey the experience of the survivors? (24 marks)',
    marks: 24,
    timing: '30 minutes',
    markScheme: [
      'Analyses how language choices convey the survivors\' experience',
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
      'Grade 4-5': `Muir presents a world that has been destroyed by war, and the survivors are described as living in silence and fear. The opening line, "Barely a twelvemonth after / The seven days war," tells us the war was very short — only seven days — but devastating enough to "put the world to sleep." The metaphor of sleep suggests death or the end of civilisation as we know it.

The survivors have "made our covenant with silence," which means they have accepted that the world has gone quiet. The word "covenant" is a religious word meaning a promise or agreement, which suggests the silence is almost sacred to them. They "listened to our breathing and were afraid," which shows how unnaturally quiet the world has become — normally you would not be able to hear your own breathing.

Muir uses a list structure to describe the days after the war. "On the second day the radios failed," "On the third day a warship passed," "On the sixth day a plane plunged." This counting of days echoes the biblical creation story, but instead of God creating the world, everything is being destroyed. The radios being "dumb" is personification that makes the technology seem dead.

The image of radios that "still they stand in corners of our kitchens" is powerful because it shows that the objects of modern life are still there but useless. The word "still" could mean they are motionless or that they remain — both meanings work. This suggests the survivors are surrounded by reminders of the world they have lost.`,
      'Grade 6-7': `Muir constructs the post-apocalyptic experience through a rhetoric of subtraction — the poem catalogues what has been lost, and the survivors are defined by their relationship to absence. The opening temporal marker, "Barely a twelvemonth after," establishes a community that measures time from the catastrophe, as religions measure from a founding event. The "seven days war" inverts the Genesis creation narrative: where God created the world in seven days, humanity unmade it in the same span. The euphemistic "put the world to sleep" refuses the vocabulary of violence, the gentleness of "sleep" creating an unsettling dissonance with the reality of mass destruction.

The structural device of numbered days — second, third, sixth — extends the biblical parallel while charting the progressive collapse of civilisation's infrastructure. The radios "failed" on the second day; by the sixth, a plane "plunged over us into the sea." The verb "plunged" implies uncontrolled descent, and the absence of explanation — no cause is given — suggests that understanding has collapsed alongside technology. The single-word sentence "Nothing" after "Thereafter" is the poem's structural nadir, a void in the text that enacts the void in the world.

The most haunting image is of the radios that "still they stand in corners of our kitchens, / And stand, perhaps, turned on, in a million rooms." The repetition of "stand" personifies the radios as silent witnesses, while "perhaps, turned on" is devastating in its uncertainty — it imagines other survivors, elsewhere, who may or may not exist, performing the same futile gesture of turning a knob and receiving "no answer." The domestic setting — "corners of our kitchens" — grounds the apocalypse in the quotidian, and the radios become monuments to a connectivity that has been permanently severed.

The "covenant with silence" is the poem's most significant phrase. A covenant is bilateral, reciprocal — it implies that the survivors have not merely endured silence but agreed to it, accepted it as the new condition of existence. This positions silence not as absence but as a form of speech, the only language adequate to the scale of what has happened.`,
      'Grade 8-9': `Muir's extract operates at the intersection of elegy and Genesis, constructing the aftermath of catastrophe as an inverted creation myth in which the numbered days mark not the building of a world but its systematic disassembly. The formal structure enacts this: the poem begins with a temporal precision — "Barely a twelvemonth," "the seven days war" — that implies a culture still capable of measurement, but the language progressively loosens its grip on specificity. By the end of the extract, the survivors can only say "perhaps" and "a million rooms," approximations that reveal a community losing its epistemic confidence along with its technology.

The phrase "put the world to sleep" is the extract's most carefully calibrated euphemism. "Sleep" is not death but its rehearsal, and the ambiguity is functional: it allows the possibility that the world might wake, while the weight of the surrounding imagery makes that possibility vanishingly faint. The passive construction — the war "put the world to sleep" — denies agency, as though the catastrophe were a natural process rather than a human choice. This grammatical evasion is itself a symptom of trauma: the survivors cannot or will not name what they have done to themselves.

The numbered days — "On the second day," "On the third day," "On the sixth day" — unmistakably echo Genesis, but the echo is inverted. Where the biblical narrative moves from void to plenitude, Muir's moves from remnant to nothing. The radios fail; the warship carries "dead bodies piled on the deck" (the participle "piled" denying the dead even the dignity of arrangement); the plane "plunges" without explanation. The missing days — the first, the fourth, the fifth — are as significant as the ones named: their absence suggests either that nothing happened on those days or that what happened was too formless to narrate. Either reading reinforces the collapse of coherent experience.

The pivotal word is "Thereafter." It occupies a line break, suspended between the plane's descent and the single-word verdict: "Nothing." This enjambment forces the reader to pause at the edge of the unknown, mimicking the survivors' experience of waiting for a future that may not arrive. "The radios dumb" — the adjective carrying both its modern sense of mute and its older sense of stupid — reduces technology to a pathetic object, and the image of radios standing "in corners of our kitchens" is devastating precisely because of its domesticity. The kitchen is the room of sustenance, of daily routine, and the dead radio in its corner is a monument to the quotidian world that has been lost. The speculative extension — "And stand, perhaps, turned on, in a million rooms / All over the world" — is the extract's most poignant gesture. The word "perhaps" admits the possibility that the survivors are entirely alone, that no one else is listening, that the silence is not a covenant but a fact. Yet the act of imagining other rooms, other radios, other listeners, is itself a refusal of that isolation — an assertion of community that persists even when community cannot be verified.

The "covenant with silence" is theologically loaded. A covenant in the Judeo-Christian tradition is a binding agreement between God and humanity — the rainbow after the Flood, the tablets of the Law. Muir's survivors have made their covenant not with God but with silence, suggesting that in the post-apocalyptic world, absence has replaced the divine as the organising principle of existence. This is not nihilism but a chastened realism: the survivors have learned to inhabit a world stripped of the noise — technological, military, informational — that once passed for meaning, and in doing so, they have discovered a form of attention that the pre-catastrophe world could not accommodate.`,
    },
  },

  // ========================================
  // ADDITIONAL WJEC QUESTIONS
  // ========================================

  // WJEC Component 1 Section A Q1 - Information Retrieval
  {
    id: 'wjec-5',
    board: 'WJEC',
    type: 'Information Retrieval',
    tier: 'GCSE',
    title: 'Component 1 Section A Q1 Information Retrieval',
    extract: `The village school had twelve pupils when it closed in 1987. Miss Griffiths, who had taught there for thirty-one years, locked the door for the last time on a Friday afternoon in July and posted the key through the letterbox of the county education office the following Monday. She did not attend the closure meeting. She said afterwards that she saw no point in watching people who had never set foot in a classroom decide the fate of one.

The building stood empty for six years. Rain found its way through the slate roof. Vandals broke three windows and spray-painted something on the back wall that Miss Griffiths, walking past on her way to the post office, described as "illiterate, which rather proves my point." The parish council discussed its future intermittently but could not agree on a use. A developer offered to convert it into holiday apartments. A local farmer wanted to use it for storage. Neither proposal attracted a majority.

In 1993, a woman called Helen Rhys moved to the village from Cardiff and, within six months, had persuaded the council to let her reopen the building as a community centre. She raised fourteen thousand pounds through bake sales, sponsored walks, and what she called "the systematic exploitation of middle-class guilt." The centre opened on September 3rd, 1994. Miss Griffiths cut the ribbon. She was eighty-two years old and used the occasion to deliver a short speech about the importance of education that the local newspaper described as "moving" and the parish councillor seated nearest to her described as "fifteen minutes too long."`,
    extractSource: 'Original composition in the style of local history writing',
    question: 'Read lines 1-15 carefully. Choose five statements below which are true. Write the correct letter in each box. (5 marks)\n\n(a) The school had twelve pupils when it closed.\n(b) Miss Griffiths taught at the school for over forty years.\n(c) Miss Griffiths posted the key through the education office letterbox.\n(d) The building was empty for ten years.\n(e) Vandals damaged the building.\n(f) The parish council quickly agreed on a new use.\n(g) Helen Rhys was originally from Cardiff.\n(h) The community centre opened in 1993.\n(i) Miss Griffiths cut the ribbon at the opening.\n(j) The local newspaper called Miss Griffiths\'s speech "fifteen minutes too long."',
    marks: 5,
    timing: '10 minutes',
    markScheme: [
      'Correctly identifies true statements: (a), (c), (e), (g), (i)',
      'Award one mark for each correct answer, up to five marks',
      'No marks deducted for incorrect answers',
    ],
    examinerTips: [
      'Read each statement carefully and check it against the text.',
      'Watch out for statements that are almost true but change a key detail.',
      'If unsure, go back to the exact line in the text to verify.',
      'This question tests close reading, not interpretation.',
    ],
    modelAnswers: {
      'Grade 4-5': `The five true statements are (a), (c), (e), (g), and (i). Statement (a) is true because the text says "the village school had twelve pupils when it closed." Statement (c) is confirmed by "posted the key through the letterbox of the county education office." Statement (e) is true because "vandals broke three windows and spray-painted something on the back wall." Statement (g) is true as the text says Helen Rhys "moved to the village from Cardiff." Statement (i) is correct because "Miss Griffiths cut the ribbon."`,
      'Grade 6-7': `The correct answers are (a), (c), (e), (g), and (i). The distractors are carefully designed: (b) is false because she taught for thirty-one years, not over forty; (d) is false because the building was empty for six years, not ten; (f) is the opposite of what happened, as the council "could not agree"; (h) is false because the centre opened in 1994, not 1993; and (j) attributes the "fifteen minutes too long" comment to the newspaper, when it was actually said by the parish councillor.`,
      'Grade 8-9': `The correct answers are (a), (c), (e), (g), and (i). Each false statement contains a specific distortion: (b) inflates thirty-one years to "over forty"; (d) doubles the vacancy period from six to ten years; (f) reverses the council's indecision; (h) confuses Helen Rhys's arrival date (1993) with the centre's opening date (1994); and (j) misattributes a quotation, assigning the councillor's remark to the newspaper. The question tests precision of reading rather than inference.`,
    },
  },

  // WJEC Component 2 Section B - Persuasive Writing
  {
    id: 'wjec-6',
    board: 'WJEC',
    type: 'Persuasive Writing',
    tier: 'GCSE',
    title: 'Component 2 Section B Persuasive Writing',
    extract: '',
    question: 'Your local park is threatened with being sold for housing development. Write a letter to the local newspaper persuading readers that the park must be saved. (20 marks for communication and organisation, 20 marks for writing accuracy)',
    marks: 40,
    timing: '30 minutes',
    markScheme: [
      'Matches the conventions of a letter to a newspaper',
      'Presents a clear, sustained persuasive argument',
      'Uses a range of rhetorical techniques effectively',
      'Organises ideas coherently with effective discourse markers',
      'Demonstrates ambitious vocabulary and varied sentence structures',
      'Maintains a high standard of technical accuracy',
    ],
    examinerTips: [
      'WJEC gives equal marks for content and accuracy. Proofread carefully.',
      'A letter to a newspaper is semi-formal: passionate but controlled.',
      'Use concrete local details to make your argument feel real and specific.',
      'The best persuasive writing acknowledges the opposing view before dismantling it.',
    ],
    modelAnswers: {
      'Grade 4-5': `Dear Editor,

I am writing to express my concern about the proposal to sell Brynmoor Park for housing development. I believe this would be a terrible loss for our community.

Brynmoor Park has been part of this town for over eighty years. Generations of families have played there, walked their dogs there, and enjoyed the green space. My own children learned to ride their bikes on the path by the duck pond. If we sell this park, where will people go?

The council says we need more housing. I understand this, but building on the park is not the answer. There are brownfield sites on the old industrial estate that could be developed instead. Why destroy something irreplaceable when alternatives exist?

Parks are not luxuries. Research shows that access to green space improves mental and physical health. Our town already has fewer parks per person than the national average. Removing Brynmoor would make this worse. The NHS spends millions treating illnesses that could be prevented by outdoor exercise. Selling the park to save money now will cost us more in the long term.

I urge every reader who values this park to attend the council meeting on March 25th and make their voice heard. Once the park is gone, it is gone forever.

Yours faithfully,
A Concerned Resident`,
      'Grade 6-7': `Dear Editor,

I should like to draw your readers' attention to a proposal that has, so far, attracted remarkably little attention for something that would permanently alter the character of our town. The council intends to sell Brynmoor Park — all four acres of it, including the memorial garden, the children's playground, and the avenue of horse chestnuts that has lined the eastern boundary since 1938 — to a property developer.

The financial logic is, I suppose, defensible. Land has value. Housing is needed. A park generates no revenue. But this reasoning treats a community asset as though it were a derelict warehouse, and it reveals a particular kind of poverty — not financial, but imaginative. A council that cannot conceive of value beyond the balance sheet is a council that has forgotten what it exists to protect.

Let me offer some figures that do not appear in the proposal. Brynmoor Park is used by an estimated three thousand residents every week. The Saturday morning parkrun attracts over a hundred runners. The Friends of Brynmoor group — volunteers who maintain the flowerbeds, clear litter, and organise seasonal events — donate approximately two thousand hours of unpaid labour annually. This is not a neglected space waiting to be repurposed. It is a thriving civic resource that the council is proposing to destroy because someone has offered to buy it.

The housing argument is a distraction. There are fourteen acres of brownfield land on the former Trevithick Works site, less than half a mile from the park, that have been earmarked for development for over a decade. The reason they remain undeveloped is not a shortage of land but a shortage of political will. It is cheaper and easier to sell a park than to remediate a contaminated industrial site, and the council has chosen accordingly. This is not a housing policy. It is a path of least resistance.

I ask your readers to consider what kind of town they wish to live in — one that protects its green spaces or one that sells them. The consultation closes on April 12th. I hope we are not too late.

Yours faithfully,
D. Morgan`,
      'Grade 8-9': `Dear Editor,

There is a test that every town faces sooner or later, and it is this: when money is short and land is valuable, do you sell the park? The answer reveals everything about a community's understanding of what it is for. Our council has chosen its answer. I am writing to suggest that it is the wrong one.

Brynmoor Park is four acres. In the language of the proposal document, it is "an underperforming asset with significant development potential." In the language of everyone who has ever used it, it is the place where your children take their first unsupervised steps away from you, where the elderly walk circuits that keep them mobile for another year, where the bereaved sit on the bench by the memorial garden because grief needs somewhere to go that is not a living room. These uses do not appear on a spreadsheet. They are, nonetheless, the reason the park exists.

I have read the proposal. I note that it quantifies the revenue from the land sale but does not quantify the cost of losing the park. This is not an oversight. It is a strategy. The benefits of green space — reduced GP visits, improved mental health, lower rates of childhood obesity, stronger social cohesion — are extensively documented but diffuse, accruing across budgets and timescales that exceed the electoral cycle. The revenue from selling the park, by contrast, arrives in a single, legible figure that can be placed in a column marked "income." The council has chosen the legible option, which is understandable. It is also cowardly.

The housing argument deserves engagement, because it is not frivolous. We do need housing. But the implicit claim — that this park is the only available land — is false, and the council knows it is false. The Trevithick Works brownfield site, three hundred metres to the south, has been designated for residential development since 2014. It remains undeveloped because remediation is expensive and complicated, and because a park is easier to sell than a problem is to solve. The choice being presented as necessity is, in reality, a preference — a preference for the simple over the right.

I do not think the councillors who approved this proposal are malicious. I think they are tired, and that tired people reach for the nearest solution rather than the best one. But this is a decision that cannot be undone. Houses, once built, do not revert to grass. The chestnuts, once felled, do not regrow in our lifetimes. Every generation inherits the irreversible decisions of the one before it, and if we permit this sale, our children will inherit a town that chose concrete over canopy, revenue over refuge, and the expedient over the enduring.

The consultation closes on April 12th. I would urge every reader who has ever walked through Brynmoor Park to respond — not because it will definitely make a difference, but because silence, in these matters, is always interpreted as consent.

Yours faithfully,
D. Morgan`,
    },
  },

  // WJEC Literature Component 1 - Shakespeare Analysis
  {
    id: 'wjec-7',
    board: 'WJEC',
    type: 'Shakespeare Analysis',
    tier: 'GCSE',
    title: 'Literature Component 1 Shakespeare',
    extract: `PROSPERO:
Our revels now are ended. These our actors,
As I foretold you, were all spirits and
Are melted into air, into thin air;
And, like the baseless fabric of this vision,
The cloud-capped towers, the gorgeous palaces,
The solemn temples, the great globe itself,
Yea, all which it inherit, shall dissolve,
And, like this insubstantial pageant faded,
Leave not a rack behind. We are such stuff
As dreams are made on, and our little life
Is rounded with a sleep.

(The Tempest, Act 4 Scene 1)`,
    question: 'How does Shakespeare use this speech to explore ideas about power, illusion, and the nature of life? You should consider the language and imagery used, the significance of the speech in the play as a whole, and relevant context. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    markScheme: [
      'Analyses how language and imagery convey ideas about power and impermanence',
      'Explores the significance of the speech within the wider play',
      'Uses well-selected quotations analysed in close detail',
      'Considers relevant context (Shakespeare\'s late career, theatre, colonialism)',
      'Shows understanding of how the speech functions as a dramatic moment',
      'Develops a coherent and sustained argument',
    ],
    examinerTips: [
      'This speech operates on multiple levels. Consider the character, the play, and the playwright.',
      'Think about what Prospero is saying about his own magic — and what Shakespeare might be saying about theatre.',
      'Analyse specific words and images, not just general themes.',
      'Context should illuminate your interpretation, not be bolted on as a separate paragraph.',
    ],
    modelAnswers: {
      'Grade 4-5': `In this speech, Prospero tells the other characters that the magical show he created is over. He says the actors "were all spirits" that have "melted into air," which shows his power to create and dismiss illusions. This links to the rest of the play where Prospero uses magic to control everyone on the island.

Prospero then says that everything — "the cloud-capped towers, the gorgeous palaces, the solemn temples" — will eventually disappear. The listing of grand buildings creates an image of the most impressive things humans can create, and then Prospero says even these "shall dissolve." This is about the temporary nature of everything, including power itself.

The most famous line is "We are such stuff as dreams are made on." This compares human life to a dream, suggesting that life is fragile and unreal. The word "little" in "our little life" makes human existence seem small and unimportant. The phrase "rounded with a sleep" means life is surrounded by sleep — the sleep before birth and the sleep of death.

This speech is significant because Prospero is Shakespeare's last great character, and many people believe Shakespeare is speaking through him. When Prospero says the show is over, Shakespeare may be saying goodbye to the theatre. The "great globe" could refer to the Globe Theatre as well as the world, which would make this a very personal speech about Shakespeare's own career ending.`,
      'Grade 6-7': `Prospero's speech marks the moment when Shakespeare's most powerful magician confronts the limits of his own art, and in doing so, articulates a vision of universal impermanence that extends far beyond the immediate dramatic context.

The opening — "Our revels now are ended" — operates on three simultaneous levels: Prospero dismisses the masque he has conjured for Ferdinand and Miranda; Shakespeare signals the approaching end of the play; and the ageing playwright, in what is widely considered his final solo work, contemplates the conclusion of his theatrical career. The word "revels" carries connotations of festivity and indulgence, but its proximity to "ended" immediately introduces the theme of cessation.

The actors who "were all spirits" have "melted into air, into thin air" — the repetition of "air" with the qualifying "thin" enacts the process of dissolution it describes, the phrase becoming lighter and less substantial with each word. This is Prospero describing his magic, but it is also Shakespeare describing theatre: actors who embody characters for two hours and then cease to exist. The "baseless fabric of this vision" uses textile imagery — "fabric" — to suggest both construction and fragility, while "baseless" denies even the illusion of permanence.

The asyndetic listing of "cloud-capped towers," "gorgeous palaces," "solemn temples," "the great globe itself" creates a crescendo of human achievement before the devastating verb "dissolve" reduces it all to nothing. The "great globe" is Shakespeare's most celebrated double meaning: simultaneously the Earth and the Globe Theatre, collapsing the distinction between the world and the stage that The Tempest has been exploring throughout. The adjective "great" is quietly ironic when applied to a wooden playhouse in Southwark, yet the irony cuts both ways — if the globe is a theatre, then the theatre is a globe, and what happens on stage is as real as what happens in the world.

"We are such stuff as dreams are made on" is the speech's philosophical centre. The noun "stuff" — material, substance — is deliberately prosaic, grounding the metaphysical claim in the language of craft. Dreams are "made on," not "made of," a preposition that suggests construction rather than composition, reinforcing the theatrical metaphor. Human life is not merely dreamlike; it is manufactured, performed, and temporary. The final image — "our little life / Is rounded with a sleep" — wraps existence in oblivion, the verb "rounded" suggesting both completeness and enclosure. We emerge from unconsciousness and return to it, and everything between is performance.`,
      'Grade 8-9': `This speech is Shakespeare's most extraordinary act of dramatic ventriloquism: a character who commands spirits tells us that everything — including the art that commands spirits — is ephemeral. The result is a passage that dismantles its own medium, using the resources of theatrical illusion to argue for the illusoriness of theatre, and by extension, of existence itself.

Prospero begins with closure: "Our revels now are ended." The possessive "our" is inclusive, drawing the audience into complicity with a theatrical event that is about to declare itself unreal. The actors "were all spirits" — the past tense is immediate, performative, the transformation from presence to absence happening in the speaking of it. "Melted into air, into thin air" is Shakespeare's most precisely engineered diminuendo: the repetition strips away substance syllable by syllable, the adjective "thin" further attenuating what "air" has already rendered intangible. The line performs its own argument — by the time we reach the second "air," the spirits have vanished linguistically as well as dramatically.

The subsequent catalogue — "the cloud-capped towers, the gorgeous palaces, / The solemn temples, the great globe itself" — constructs a hierarchy of human civilisation only to subject it to a single verb: "dissolve." The progression from architectural to cosmic is significant. Shakespeare moves from the edifices of secular power ("towers"), through wealth ("gorgeous palaces") and religion ("solemn temples"), to the totality of the physical world ("the great globe"), and annihilates them equally. The "great globe" is, of course, the play's most celebrated pun — simultaneously the planet and the theatre on Bankside where these words were first spoken. This dual reference is not merely clever; it is structurally essential. By identifying the world with the theatre, Shakespeare collapses the ontological distinction between reality and representation. If the Globe is the globe, then the dissolution of one is the dissolution of the other, and the audience watching the play is implicated in the impermanence it describes.

"We are such stuff / As dreams are made on" — the line's fame has perhaps dulled our awareness of its radicalism. The word "stuff" is a textile term: fabric, material for construction. Human beings are not compared to dreams but identified as the raw material from which dreams are manufactured. The preposition "on" (rather than the later emendation "of") preserves the sense of fabrication — dreams are "made on" us as garments are made on a loom. We are simultaneously the dreamer, the dream, and the material of dreaming, a triple identity that Shakespeare leaves deliberately unresolved.

The concluding image — "our little life / Is rounded with a sleep" — is the speech's quietest and most devastating moment. "Little" is devastating after the grandeur of towers and palaces, reducing the individual human span to a diminutive in a sentence about eternity. "Rounded" has been debated for four centuries: does it mean "surrounded," implying that sleep (oblivion, death) encloses life on both sides? Or "completed," implying that sleep gives life its shape, its fullness? Shakespeare, characteristically, means both. Life is bounded by unconsciousness — the sleep before birth, the sleep after death — and it is only within this frame that it achieves whatever form it has. The sleep does not diminish life; it defines it.

Contextually, this speech represents Shakespeare's most direct engagement with his own art's mortality. Writing The Tempest around 1611, near the end of his career, Shakespeare creates a magician who renounces his power — and in doing so, writes the most powerful speech in the canon. The paradox is the point: Prospero's relinquishment of magic is itself the supreme act of magic, just as Shakespeare's farewell to the theatre is his most theatrically accomplished moment. The speech does not mourn impermanence; it transfigures it, making the transience of art not a failure but its defining condition.`,
    },
  },
  // ============================================
  // EDEXCEL 1EN2 SPEC-ALIGNED PRACTICE QUESTIONS
  // ============================================

  // 1. Edexcel Paper 1 Reading — 19th-Century Non-Fiction: Comprehension/Inference
  {
    id: 'edexcel-p1-19c-reading-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Comprehension and Inference (Q1-2)',
    type: 'reading',
    difficulty: 'Foundation',
    extract: `I arrived in Manchester on a Tuesday in November, and the first thing that struck me was the sky — or rather, the absence of it. A pall of smoke hung over the city so dense and so low that one could scarcely distinguish the rooftops from the clouds. The streets were crowded beyond anything I had witnessed in London. Men, women, and children of every description hurried along the pavements, their faces blackened with soot, their clothing threadbare, their expressions fixed in that peculiar blankness which I have since learned to recognise as the mask of exhaustion.\n\nThe factories dominated everything. They rose on every side like the cathedrals of some new and pitiless religion, their chimneys belching forth a smoke that tasted of sulphur and coated the tongue with a metallic bitterness. I counted fourteen mills within a single mile of my lodging. The noise was incessant — a great grinding, clattering roar that began before dawn and did not cease until long after dark. The workers who emerged from these establishments at the end of their shifts moved with the slow, mechanical gait of people whose bodies had been borrowed for the day and returned in worse condition than they were lent.\n\nI spoke with one woman, a spinner, who told me she worked fourteen hours a day for seven shillings a week. She was thirty-one years old. She looked fifty.`,
    extractSource: 'Adapted from a 19th-century social investigation report, in the style of Friedrich Engels',
    question: 'Read the extract carefully. (a) Identify four things you learn about the conditions in Manchester from the extract. (4 marks) (b) What impressions do you get of the writer\'s attitude towards what they witnessed? Use evidence from the text to support your answer. (6 marks)',
    marks: 10,
    timing: '15 minutes',
    modelAnswers: {
      'Grade 4-5': `(a) From the extract, I learn that Manchester was extremely polluted, with smoke so thick you could not see the sky properly. I also learn that the streets were very crowded with people who looked exhausted and dirty. Third, the factories were noisy, with a "grinding, clattering roar" that went on all day. Finally, workers were poorly paid — one woman earned only "seven shillings a week" for fourteen-hour days.\n\n(b) The writer seems shocked and horrified by the conditions in Manchester. They describe the smoke as a "pall," which is a word associated with death and funerals, suggesting they see Manchester as a place of suffering. The writer compares the factories to "cathedrals of some new and pitiless religion," which shows they think industry has replaced God with something cruel. The writer is clearly sympathetic to the workers, particularly the spinner who "looked fifty" at thirty-one. By including her age and appearance, the writer wants the reader to feel outraged at how work has aged her.`,
      'Grade 6-7': `(a) The extract reveals that Manchester's air pollution was severe enough to obscure the sky entirely, described as "a pall of smoke" that made rooftops indistinguishable from clouds. The city was densely populated and its inhabitants visibly marked by poverty — "faces blackened with soot" and "clothing threadbare." The industrial infrastructure was overwhelming, with fourteen mills within a single mile, producing constant noise from before dawn until after dark. Working conditions were exploitative: a thirty-one-year-old spinner worked fourteen-hour days for seven shillings a week, and the physical toll was such that she appeared decades older than her actual age.\n\n(b) The writer adopts the stance of an appalled but controlled witness. Their attitude is conveyed less through direct condemnation than through the precision of their observation: the counting of "fourteen mills within a single mile" performs the investigative rigour of someone compiling evidence for an indictment. The metaphor comparing factories to "cathedrals of some new and pitiless religion" reveals a writer who views industrialisation as an ideological system demanding human sacrifice, the adjective "pitiless" attributing to capitalism the cold indifference of a deity without mercy. The description of workers moving with "the slow, mechanical gait of people whose bodies had been borrowed for the day" is particularly revealing: the passive construction "had been borrowed" frames the workers as objects rather than agents, and the verb "borrowed" implies a transaction in which the body is a commodity — used and "returned in worse condition." The final two sentences — the spinner's age and appearance — are devastating in their restraint. The writer offers no commentary, allowing the factual juxtaposition of "thirty-one years old" and "looked fifty" to speak for itself. This is the controlled outrage of a writer who trusts their evidence to be more persuasive than their anger.`,
      'Grade 8-9': `(a) The extract establishes Manchester as a city physically dominated by industrial pollution: the sky is obscured by smoke that renders rooftops and clouds indistinguishable. The population is dense, visibly impoverished, and marked by the physical residue of their labour — soot-blackened faces, threadbare clothing, expressions of "exhaustion." Industrial infrastructure is overwhelming in scale (fourteen mills per mile) and temporally inescapable, producing noise from before dawn until after dark. Labour conditions are exploitative both economically (seven shillings for seventy-hour weeks) and physiologically, ageing workers far beyond their years.\n\n(b) The writer's attitude is one of forensic indignation — moral outrage disciplined by the conventions of empirical investigation, producing a text that is simultaneously reportage and polemic. The opening admission that the sky's absence was "the first thing that struck me" positions the writer as an outsider whose perceptual framework is being overwhelmed, and the verb "struck" encodes the city's environment as a form of assault. The governing metaphor — factories as "cathedrals of some new and pitiless religion" — reveals a writer who understands industrialisation not merely as an economic system but as a totalising ideology. The word "cathedrals" attributes to the mills the architectural grandeur and social centrality of religious institutions, while "pitiless" performs the crucial inversion: where cathedrals promise mercy, these structures offer none. The smoke that "tasted of sulphur" invokes the traditional imagery of hell, grounding the metaphor in sensory experience. The writer's most politically charged intervention is the metaphor of borrowed bodies: workers whose physical selves "had been borrowed for the day and returned in worse condition than they were lent." This is the language of property and contract, applied to human flesh — and the comparative "worse condition" reframes industrial labour as a violation of an implied agreement, the worker's body degraded by a transaction they had no power to negotiate. The closing vignette of the spinner is structured as the culmination of the argument. The writer provides her testimony ("fourteen hours a day for seven shillings a week"), her age, and her appearance, then stops. The two terminal sentences — "She was thirty-one years old. She looked fifty" — are brutally paratactic, refusing the connective tissue of explanation or sentiment. The gap between the sentences is the gap between fact and injustice, and the writer's refusal to fill it is both a rhetorical strategy and a moral statement: the evidence needs no interpretation because the reader's own conscience will supply it.`,
    },
    markScheme: [
      'Identifies four distinct, accurate pieces of information from the extract (Q1)',
      'Supports each point with textual reference or quotation',
      'Analyses how the writer\'s language reveals their attitude (Q2)',
      'Comments on the effect of specific word choices and techniques',
      'Shows understanding of the writer\'s purpose and perspective',
      'Distinguishes between explicit and implicit information',
    ],
    examinerTips: [
      'Part (a) is straightforward retrieval — keep answers clear and concise, one point per sentence.',
      'Part (b) requires inference — read between the lines for the writer\'s attitude.',
      'Remember: Edexcel Paper 1 uses 19th-century NON-FICTION, not fiction.',
      'Use short, embedded quotations rather than copying out long sections.',
    ],
  },

  // 2. Edexcel Paper 1 Reading — 19th-Century Non-Fiction: Language Analysis
  {
    id: 'edexcel-p1-19c-language-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Language Analysis (Q3)',
    type: 'reading',
    difficulty: 'Higher',
    extract: `The condition of the lodging-houses in which the poorest of the poor take refuge beggars all description. I visited one such establishment in Whitechapel last Thursday evening and found, in a single room of perhaps twelve feet by ten, no fewer than seventeen persons — men, women, and children — sleeping, if that word can be applied to so fitful and wretched a state. The air was foul beyond endurance. A single candle guttered on a broken table, casting a yellow and uncertain light over a scene that resembled nothing so much as the hold of a slave ship.\n\nThe walls ran with damp. The floor, which was bare earth in places where the boards had rotted through, was covered in a substance I will not describe to a readership unaccustomed to such particulars, except to say that it would not have been tolerated in any stable in the country. There was no ventilation, no sanitation, and no water save a single pail in the corner from which all seventeen occupants were expected to drink. The landlord of this establishment, I subsequently discovered, charges fourpence a night for the privilege of sleeping in it. He owns eleven such properties. He lives in Kensington.`,
    extractSource: 'Adapted from 19th-century investigative journalism, in the style of Henry Mayhew',
    question: 'Analyse how the writer uses language and structure to convey the horrors of the lodging-house and to influence the reader. Support your views with detailed reference to the text. (15 marks)',
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer uses strong language to show how terrible the lodging-house is. The phrase "beggars all description" means it is so bad the writer cannot fully describe it. The room is overcrowded, with "seventeen persons" in a space only "twelve feet by ten," and the writer uses the dash to list "men, women, and children" to show that everyone, even children, had to live in these conditions.\n\nThe simile comparing the room to "the hold of a slave ship" is very powerful because it connects the lodging-house to slavery, suggesting the people living there are being treated as less than human. The writer describes the floor with a substance they "will not describe," which makes the reader imagine something truly disgusting.\n\nThe structure is also effective. The writer saves the most shocking information for the end: the landlord charges fourpence a night, owns eleven properties, and "lives in Kensington." The three short sentences at the end create a powerful contrast between the landlord's wealth and the poverty of the people living in his properties. This is designed to make the reader angry at the injustice.`,
      'Grade 6-7': `The writer deploys the conventions of investigative journalism to construct a systematic exposé that moves from visceral description to political indictment. The opening declaration — "beggars all description" — is a rhetorical paradox: the writer claims the scene is indescribable, then proceeds to describe it with devastating specificity. This functions as a form of apophasis, signalling to the reader that what follows will exceed their expectations of suffering.\n\nThe statistical precision — "twelve feet by ten," "seventeen persons" — operates as evidence, grounding the emotional appeal in verifiable fact. The parenthetical qualification "if that word can be applied to so fitful and wretched a state" challenges the reader's vocabulary, implying that comfortable language cannot accommodate this reality. The simile "resembled nothing so much as the hold of a slave ship" is the paragraph's most politically charged moment: it invokes the abolitionist cause — won within living memory for Victorian readers — to reframe domestic poverty as a moral obscenity of equivalent scale.\n\nThe second paragraph intensifies through accumulation. The anaphoric "no ventilation, no sanitation, and no water" uses the tricolon of negation to define the space by what it lacks, each absence more fundamental than the last. The writer's refusal to describe the floor's covering — "I will not describe to a readership unaccustomed to such particulars" — is a masterful rhetorical manoeuvre: it simultaneously protects the reader's sensibility and weaponises their imagination, forcing them to conjure horrors worse than description could provide.\n\nThe structural climax is the final three sentences. The revelation of the landlord's fourpence charge, his eleven properties, and his Kensington residence constitutes a devastating tricolon of escalating outrage. Each sentence is shorter than the last. "He lives in Kensington" — just four words — concentrates the entire argument into a geographical contrast between Whitechapel and Kensington that the Victorian reader would have understood immediately: the squalor that generates the profit and the suburb where the profit is enjoyed. The writer's restraint here is the most powerful tool in the extract: no adjective, no commentary — just the fact, presented as its own condemnation.`,
      'Grade 8-9': `The extract operates as a carefully engineered machine of moral persuasion, deploying the rhetorical conventions of Victorian social investigation — empirical detail, controlled horror, strategic revelation — to convert observation into indictment.\n\nThe opening gambit — "beggars all description" — performs a double function. Ostensibly, it confesses the inadequacy of language; structurally, it prepares the reader for content that will exceed their framework for processing suffering. The verb "beggars" is itself revealing: to beggar is to impoverish, and the writer's choice of a word associated with destitution to describe the failure of representation subtly argues that poverty contaminates everything it touches, including the language used to describe it. What follows is relentlessly specific: "twelve feet by ten," "seventeen persons," "a single candle." The precision is both evidentiary and rhetorical — the writer establishes credibility through measurement while using the gap between the numbers (twelve by ten, seventeen people) to make the reader perform the calculation of suffering for themselves.\n\nThe parenthetical "if that word can be applied to so fitful and wretched a state" interrogates the word "sleeping" and, by extension, the entire vocabulary of domestic normality. Sleep implies rest, comfort, safety; the writer's qualification denies all three. The simile comparing the scene to "the hold of a slave ship" is the extract's most incendiary intervention, deliberately invoking a moral consensus — the wrongness of slavery — and redirecting it towards domestic poverty. For a Victorian readership, this analogy was both shocking and strategically astute: it recruited the moral authority of abolitionism for the cause of social reform.\n\nThe second paragraph shifts from sensory horror to rhetorical strategy. The floor's covering, withheld from the "readership unaccustomed to such particulars," is the extract's most sophisticated technique: the occupatio (describing by refusing to describe) transforms the reader from passive recipient into active imaginer, and the euphemistic framing — "would not have been tolerated in any stable" — makes its point through comparison. The occupants live in conditions that would be considered unacceptable for horses, and the writer trusts the reader to register the implication: these people are being treated as worth less than animals.\n\nThe tricolon of absence — "no ventilation, no sanitation, and no water" — accelerates through human necessities, each denial more elemental than the last, culminating in the shared drinking pail. But the extract's true structural achievement is its final three sentences, which execute a devastating shift from the experiential to the economic. "He charges fourpence a night" quantifies exploitation. "He owns eleven such properties" multiplies it. "He lives in Kensington" locates the profit. The sentences contract as the outrage expands; the final four words perform the geographical violence of Victorian capitalism — the short distance between Whitechapel and Kensington that is also the moral distance between those who suffer and those who profit from suffering. The writer offers no explicit judgement because the structure has already delivered the verdict. The reader is left not with an argument to evaluate but with a fact to act upon.`,
    },
    markScheme: [
      'Analyses specific language choices and their effects in detail',
      'Comments on how structural features contribute to the writer\'s purpose',
      'Explores how the writer positions and influences the reader',
      'Uses well-integrated quotations with close textual analysis',
      'Employs subject terminology precisely and purposefully',
      'Considers the interplay between language and structure',
    ],
    examinerTips: [
      'Edexcel Paper 1 Q3 asks for BOTH language and structure — address both explicitly.',
      'Remember this is 19th-century non-fiction: consider the writer\'s purpose (to inform, persuade, campaign).',
      'Analyse the effect of specific techniques rather than simply identifying them.',
      'Consider how the writer positions the reader — are you being persuaded, shocked, moved?',
    ],
  },

  // 3. Edexcel Paper 1 Writing — Transactional Writing (letter/article/speech)
  {
    id: 'edexcel-p1-transactional-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Transactional Writing (Q5)',
    type: 'writing',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: 'You have been asked to give a speech to your year group about the importance of reading. Write your speech. In your speech you could explain why reading matters, give examples from your own experience, and persuade your audience to read more. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Good morning everyone. I want to talk to you today about something that changed my life — reading. I know that sounds dramatic, but hear me out.\n\nWhen I was younger, I hated reading. I thought books were boring and that there were much better things to do with my time, like playing games or watching videos. Then one day, when I was stuck at my nan's house with nothing to do, I picked up a book from her shelf. It was a detective story. I finished it in two days.\n\nThat book didn't just entertain me — it showed me a world I'd never thought about. I started to notice details, to wonder about people's motives, to think about things from different angles. Reading doesn't just give you stories. It gives you a different way of seeing.\n\nI know what some of you are thinking: "I don't have time" or "I can't concentrate." But you don't need to read for hours. Even ten minutes a day adds up. That's over sixty hours a year. Imagine what sixty hours of new ideas could do for your mind.\n\nStudies show that people who read regularly are better at understanding other people's emotions, are less stressed, and do better in exams — not just in English, but in every subject. Reading makes your brain stronger in ways that nothing else can.\n\nSo here's my challenge to you: pick up one book this month. Just one. Give it fifty pages. If you don't like it, try another. The right book is out there — you just haven't found it yet.\n\nThank you.`,
      'Grade 6-7': `Let me begin with a confession. I didn't come here to tell you that reading is important. You already know that. Your teachers have been saying it since primary school, and if repetition were sufficient to change behaviour, you would all be reading Dostoevsky by now. So I'm not going to tell you reading is important. I'm going to tell you why it matters to me, and you can decide for yourself whether any of it applies to you.\n\nTwo years ago, I went through a period I don't talk about much. Things at home were difficult. School felt pointless. I spent most of my evenings staring at my phone, scrolling through other people's lives and feeling worse about my own. Then my English teacher — who I suspect knew more about what I was going through than she let on — left a book on my desk. No instruction. No reading log. Just a book, with a Post-it note that said: "You might like this."\n\nI did like it. I more than liked it. For the first time in months, I spent an evening thinking about someone else's problems instead of my own. And here's what I didn't expect: when I came back to my own problems afterwards, they looked different. Smaller, somehow. More manageable. Not because the book had solved anything, but because it had reminded me that difficulty is universal, that other people survive it, and that the way we tell stories about our struggles is part of how we overcome them.\n\nReading is not a hobby. It is a technology for understanding human experience. Every book you read installs a new perspective in your mind — a new way of seeing, feeling, interpreting. Research from the University of Toronto found that people who read literary fiction score significantly higher on tests of empathy. Not because fiction teaches you to be kind, but because it forces you to inhabit a consciousness that is not your own. That is a skill. And it is a skill that social media — which shows you only what you already agree with — is actively eroding.\n\nI am not asking you to abandon your phones. I am asking you to spend thirty minutes a day with something that was written to expand your mind rather than to harvest your attention. The difference matters. It matters more than most things you will do today.\n\nFind the book that changes you. It exists. I promise.`,
      'Grade 8-9': `I want to start by admitting something uncomfortable. Standing here, asking you to read more, I am aware that I sound like every assembly you have ever sat through — earnest, well-meaning, and approximately thirty seconds from losing your attention. So let me skip the part where I tell you that reading is good for you. You are not children. You do not need to be told that vegetables exist. What I want to talk about instead is what reading actually does — not to your grades, not to your vocabulary, but to the architecture of your thinking.\n\nEvery piece of information you consume shapes the way your mind works. Social media trains you to scan, to react, to move on. It rewards speed over depth, opinion over understanding, and outrage over nuance. Reading — sustained, serious, effortful reading — trains the opposite. It teaches you to hold a complex idea in your mind for longer than a notification cycle. It teaches you to tolerate ambiguity, to resist the tyranny of the simple answer, to understand that most things worth knowing cannot be compressed into a caption. In an attention economy, the ability to concentrate is not merely useful. It is an act of resistance.\n\nBut reading does something else — something more subversive than improving your focus. It gives you access to the interior lives of people you will never meet. When you read a novel, you do not simply learn about a character; you become them, temporarily. You inherit their memories, their anxieties, their way of noticing the world. Neuroscience confirms what readers have always known: the brain does not distinguish clearly between reading about an experience and having one. When you read about someone walking through snow, your motor cortex activates. When you read about someone's grief, your emotional circuitry responds. Reading is not a metaphor for empathy. It is the mechanism.\n\nI think about this often — particularly when I hear people describe reading as a luxury, as something for people who have time and comfort and quiet. Reading is not a luxury. It is the most democratic form of education ever invented. A library card costs nothing. A second-hand book costs less than a coffee. And what you receive in return is access to every mind that has ever thought clearly enough to write something down. That is not a hobby. That is an inheritance.\n\nSo here is what I am asking. Not that you read more — that framing turns reading into a chore, and chores are the enemy of genuine engagement. What I am asking is that you find the thing that unlocks it for you. It might be fiction. It might be history, or science, or poetry, or the biography of someone whose life was nothing like yours. The format does not matter. What matters is the moment — and it will come, if you let it — when you look up from a page and realise that the world has become, in some small but irreversible way, larger than it was before you started reading.\n\nThat moment is worth every page that precedes it. Go and find it.`,
    },
    markScheme: [
      'Matches the conventions of the specified form (speech — direct address, rhetorical devices)',
      'Communicates clearly and effectively with a sustained, compelling argument',
      'Adapts tone and register to the specified audience (year group peers)',
      'Uses a range of persuasive techniques (anecdote, evidence, rhetorical questions, direct address)',
      'Organises ideas coherently with effective paragraphing and structural control',
      'Demonstrates technical accuracy with ambitious vocabulary and varied syntax',
    ],
    examinerTips: [
      'Edexcel Paper 1 Q5 is transactional writing — match the FORM exactly (speech, letter, article, etc.).',
      'A speech must sound like spoken language: use direct address, rhetorical questions, and varied pace.',
      'The best responses feel authentic — write as if you genuinely care about the topic.',
      'Plan your structure: a strong opening, 3-4 developed points, and a memorable conclusion.',
    ],
  },

  // 4. Edexcel Paper 2 Reading — 20th/21st-Century Fiction Extract Analysis
  {
    id: 'edexcel-p2-fiction-reading-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Fiction Reading (Q1-3)',
    type: 'reading',
    difficulty: 'Foundation',
    extract: `The kitchen was the warmest room in the house, and in winter it was the only room that mattered. Grace stood at the counter rolling pastry with the same wooden pin her mother had used, and her mother before that. The flour dusted her forearms like first snow on a dark field. Outside, the January light was already failing at half past three, and the window had become a black mirror in which she could see herself — a woman of sixty-two, alone in a kitchen, making a pie that nobody had asked for.\n\nThe radio murmured on the shelf above the cooker. She kept it on all day, not for the programmes but for the voices — the low, companionable hum of strangers talking about things that did not concern her. It filled the spaces that silence would otherwise occupy, and silence, she had discovered, was not the peaceful thing that poets claimed. Silence was an animal that grew larger the more room you gave it.\n\nShe heard the gate. The particular squeak of the hinge that David had promised to oil every weekend for thirty years and never had. For a moment — one brief, treacherous moment — she forgot. Her hands stilled on the rolling pin and she almost called out his name. Then she remembered. The gate squeaked in the wind sometimes. That was all. She returned to the pastry and pressed harder than was necessary, and the radio kept talking, and the light kept failing, and the pie kept being made for nobody.`,
    extractSource: 'Original composition in the style of contemporary literary fiction',
    question: 'How does the writer present Grace\'s loneliness and grief in this extract? You should comment on the writer\'s use of language and structure, and use examples from the text to support your answer. (15 marks)',
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer presents Grace as lonely and grieving through her actions and surroundings. She is described as "alone in a kitchen, making a pie that nobody had asked for," which shows she has no one to cook for but continues the routine anyway. This suggests her loneliness comes from losing someone she used to care for.\n\nThe radio is an important detail. Grace keeps it on "not for the programmes but for the voices," which tells us she needs to hear other people talking even if she is not part of the conversation. The writer says silence "was an animal that grew larger the more room you gave it," which is a metaphor showing that being quiet makes loneliness worse.\n\nThe most emotional part is when Grace hears the gate and almost calls out David's name. The phrase "one brief, treacherous moment" shows that her memory tricked her into thinking David was still alive. The word "treacherous" means her own mind betrayed her. When she "remembered," the short sentence creates a sudden, sad moment. At the end, the repetition of "and" in "the radio kept talking, and the light kept failing, and the pie kept being made for nobody" creates a feeling of everything continuing sadly without stopping.`,
      'Grade 6-7': `The writer constructs Grace's loneliness not as dramatic suffering but as something woven into the texture of ordinary domestic life. The opening positions the kitchen as a site of diminished significance — it is "the only room that mattered," implying that the rest of the house has become irrelevant, its rooms abandoned to cold and emptiness. Grace's pastry-making with a rolling pin inherited from her mother and grandmother establishes continuity, but the simile "flour dusted her forearms like first snow on a dark field" introduces a visual of seasonal death that shadows the domestic warmth.\n\nThe structural centrepiece of the extract is the radio, which functions as a prosthetic for human connection. The writer's distinction — "not for the programmes but for the voices" — reveals that Grace requires not content but presence. The metaphor of silence as "an animal that grew larger the more room you gave it" personifies absence as something predatory and expansive, reframing the quiet house as a space of active threat rather than passive emptiness.\n\nThe gate sequence is the extract's emotional climax, and the writer handles it with precise structural control. The parenthetical "one brief, treacherous moment" slows the narrative to the pace of the experience itself, the adjective "treacherous" attributing agency to memory — it is the mind that betrays, not the gate. The sentence "Then she remembered" operates as a volta: two words that collapse the momentary hope. The final sentence uses polysyndeton — "and the radio kept talking, and the light kept failing, and the pie kept being made for nobody" — to create a rhythm of relentless continuation. The progressive verbs ("kept talking," "kept failing," "kept being made") insist that life does not stop for grief; it merely continues, emptied of purpose. The passive "kept being made" is particularly devastating: the pie has no maker in this construction, only a process — Grace herself has been grammatically erased from the activity that defines her.`,
      'Grade 8-9': `The extract's achievement is its refusal to separate grief from the ordinary — indeed, its central argument is that grief is the ordinary, reconstituted. Grace's loneliness is not dramatised through crisis but through continuation: the kitchen is still warm, the pastry is still being made, the rolling pin is still the same one her mother used. The domestic ritual persists, but its audience has vanished, and this absence transforms every familiar action into an elegy.\n\nThe opening paragraph establishes this through a carefully managed tension between warmth and void. The kitchen is "the warmest room" — and in winter "the only room that mattered" — a formulation that simultaneously conveys comfort and contraction, the shrinking of a life to a single habitable space. The inherited rolling pin introduces temporal depth, connecting Grace to a matrilineal chain of domesticity, but the simile comparing flour to "first snow on a dark field" disrupts the warmth with an image of covering, of cold, of landscapes emptied by winter. The window that becomes "a black mirror" forces Grace into self-confrontation: she sees "a woman of sixty-two, alone in a kitchen, making a pie that nobody had asked for." The shift from first-person experience to third-person observation is structurally crucial — Grace sees herself from outside, and the image is stripped of interiority, reduced to its social facts. "Nobody had asked for" is the phrase that carries the weight: it transforms cooking from an act of love into an act of absence.\n\nThe radio passage reconfigures silence as an antagonist. Grace's need is not for information but for "the low, companionable hum of strangers" — the adjective "companionable" revealing how debased the currency of company has become. The metaphor of silence as "an animal that grew larger the more room you gave it" inverts the usual framing of quiet as peace; here, silence is organic, predatory, and spatial — it occupies the house the way a living creature would, expanding to fill the vacancy left by David.\n\nThe gate sequence executes the extract's most psychologically precise moment. The "particular squeak" — not any squeak, but this one, individualised by thirty years of unrepaired familiarity — triggers an involuntary recognition. The parenthetical "one brief, treacherous moment" performs a temporal suspension: we are held in the instant before reality reasserts itself, and the adjective "treacherous" locates betrayal not in the external world but in the mechanism of memory itself, which offers the dead back to us and then withdraws them. "Then she remembered" is syntactically brutal in its brevity — a full stop after three words, enacting the abruptness of recollection. The compensatory gesture — pressing the pastry "harder than was necessary" — displaces emotional pain into physical force, the adverbial phrase "than was necessary" acknowledging the excess while refusing to name its cause.\n\nThe final polysyndetic sentence — "and the radio kept talking, and the light kept failing, and the pie kept being made for nobody" — is the extract's structural and thematic culmination. The repeated "and" refuses closure, insisting on continuation without resolution. The progressive aspect ("kept") emphasises duration rather than completion. And the final phrase, "for nobody," grammatically empties the sentence of its recipient, just as grief has emptied the kitchen of its purpose. The pie is still being made. It is being made for nobody. This is what grief looks like when it has stopped being an event and become a condition.`,
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
      'Edexcel Paper 2 uses 20th/21st-century fiction — think about character construction and narrative technique.',
      'Address both language AND structure as the question requires.',
      'The best answers explore how small domestic details carry large emotional weight.',
      'Consider what the writer withholds or implies, not just what they state directly.',
    ],
  },

  // 5. Edexcel Paper 2 Reading — Literary Non-Fiction Comparison
  {
    id: 'edexcel-p2-nonfiction-comparison-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Non-Fiction Comparison (Q4)',
    type: 'reading',
    difficulty: 'Higher',
    extract: `Source A — From a letter written by a soldier during the First World War, 1916:\n"You ask me what it is like out here, and I find I cannot tell you honestly without either frightening you or boring you, because the truth is that it is both terrifying and tedious in almost equal measure. We spend days in the trench doing nothing at all — mending socks, writing letters, sleeping in mud — and then, without warning, the sky tears open and the world becomes a place of noise and metal and men screaming. Afterwards, there is silence. We count who is missing. We make tea. The ordinariness of what follows the horror is, I think, the thing I shall never be able to explain to anyone who was not here."\n\nSource B — From a 21st-century travel writer visiting the battlefields of the Western Front, 2019:\n"The fields at the Somme are green now, and very quiet. Cows graze where men died in their thousands, and the grass — thick, well-fed grass — covers everything. A guide explains that the soil here still produces iron fragments every spring, pushed upward by the frost: shrapnel, buttons, occasionally bone. The earth has not forgotten, even if the surface has learned to look as though it has. I stand at the edge of a crater that has become a pond and try to feel something adequate. I cannot. The scale defeats imagination. Seventy thousand casualties on the first day — a number so large it ceases to be a number and becomes instead a kind of weather, a pressure system of grief too vast to be experienced by a single mind."`,
    extractSource: 'Source A: Adapted from a 1916 soldier\'s letter; Source B: Adapted from a 2019 travel essay',
    question: 'Compare how the writers of Source A and Source B convey their experiences of war. You should compare the writers\' different perspectives and experiences, how they use language and structure to convey those experiences, and the effects on the reader. (15 marks)',
    marks: 15,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The two writers have very different experiences of war. Source A is a soldier actually fighting in the trenches, while Source B is a modern visitor looking at the old battlefields. Despite this, both writers struggle to communicate what war means.\n\nSource A describes war as "both terrifying and tedious," which shows it is a mix of boredom and fear. The soldier lists everyday activities like "mending socks, writing letters, sleeping in mud" to show how ordinary much of trench life was. But then "the sky tears open" and everything becomes violent. The contrast between normal activities and sudden horror is very effective. Source A says the hardest thing to explain is "the ordinariness of what follows the horror" — making tea after people have died.\n\nSource B describes the modern battlefields as "green now, and very quiet." The writer uses the detail of iron fragments and "occasionally bone" being pushed up by frost to show that the war is still physically present beneath the surface. The metaphor at the end comparing the number of casualties to "a kind of weather" suggests that the scale of death is too big to understand as individual people.\n\nBoth writers admit they cannot fully communicate their experience. Source A says "I cannot tell you honestly" and Source B says "I cannot" feel "something adequate." This similarity is interesting because even though they are over a hundred years apart, war defeats both of their abilities to express what they feel.`,
      'Grade 6-7': `Both sources engage with the fundamental incommunicability of war, but from radically different temporal and experiential positions — one from within the event, one from a century's distance — and the comparison reveals as much about the limits of language as about the conflict itself.\n\nSource A's soldier writes from immediate experience and frames his letter through an admission of communicative failure: he "cannot tell you honestly" without causing either fear or boredom. This binary maps onto the structure of his account, which oscillates between the "tedious" — the domestic listing of "mending socks, writing letters, sleeping in mud" — and the "terrifying," rendered through the violent metaphor of the sky tearing open. The asyndetic shift from routine to carnage ("the world becomes a place of noise and metal and men screaming") enacts the suddenness of bombardment, the polysyndeton of "and" piling sensory assault without pause. Most striking is the coda: "We count who is missing. We make tea." The paratactic juxtaposition of death and domesticity refuses to grant either activity greater significance, and this flattening is itself the trauma the writer identifies — "the ordinariness of what follows the horror."\n\nSource B approaches war from the opposite direction: not from within but from above, looking down at grass that "covers everything." The writer's perspective is archaeological — the Somme's surface has "learned to look as though it has" forgotten, the personification attributing to the landscape a performance of normality that the iron fragments and bone betray every spring. Where Source A's horror is immediate and sonic ("noise and metal and men screaming"), Source B's is geological and silent, emerging from the earth in fragments. The final metaphor — casualties as "a kind of weather, a pressure system of grief" — reframes loss as atmospheric, something experienced not individually but environmentally, and the phrase "too vast to be experienced by a single mind" directly echoes Source A's conviction that the truth cannot be communicated.\n\nThe structural parallel is significant. Both writers build towards admissions of inadequacy — Source A's "I shall never be able to explain" and Source B's "I cannot" feel "something adequate" — but the nature of the failure differs. Source A cannot communicate because language cannot bridge the gap between experience and description. Source B cannot feel because imagination cannot bridge the gap between statistics and reality. Together, the texts argue that war exceeds both the capacity to describe and the capacity to comprehend.`,
      'Grade 8-9': `These texts occupy opposite ends of war's temporal spectrum — one immersed in the event, one visiting its residue — and their juxtaposition reveals that the passage of a century has not resolved the representational crisis that combat inaugurates; it has merely relocated it.\n\nSource A writes from within what might be called the grammar of survival. The opening admission — "I find I cannot tell you honestly" — establishes communicative failure as the letter's governing condition, and the two options offered to the recipient ("frightening you or boring you") map precisely onto the two modes of trench experience that the paragraph subsequently dramatises. The boredom is rendered through asyndetic listing: "mending socks, writing letters, sleeping in mud" — the final item disrupting the domestic rhythm with its material reminder that this is not home. The terror arrives through a single violent metaphor: "the sky tears open." The verb "tears" operates simultaneously as physical rupture and emotional distress, and the brevity of the transition — no paragraph break, no preparation — syntactically reproduces the phenomenology of bombardment. What follows is polysyndetic accumulation: "noise and metal and men screaming," the repeated "and" refusing hierarchy, insisting that every element of the sensory assault arrives simultaneously. But the letter's most psychologically penetrating observation is its last: "the ordinariness of what follows the horror." The subsequent actions — "We count who is missing. We make tea" — are presented in identical syntactic structures, each a subject-verb-object sentence of four words, granting death and tea-making equal grammatical weight. This is not callousness but dissociation, and the soldier's identification of this flattening as the truly inexpressible element reveals a sophistication of self-analysis that the register of a personal letter both enables and constrains.\n\nSource B inherits this inexpressibility but transforms it from a failure of language into a failure of imagination. The writer is a professional communicator visiting a site of historical trauma, and the tension between their rhetorical competence and their emotional inadequacy generates the passage's central irony: the better they describe the Somme, the more clearly they demonstrate that description cannot access what happened there. The opening is deliberately pastoral — "green now, and very quiet" — and the cows grazing "where men died in their thousands" creates a juxtaposition so extreme it borders on the obscene, the pastoral surface functioning as a kind of repression. The parenthetical detail of the grass — "thick, well-fed grass" — is quietly horrifying once the reader registers what it has been fed by, and the dash before this description mimics the moment of realisation. The personification of the earth as something that "has not forgotten, even if the surface has learned to look as though it has" reframes the landscape as a site of performed normality, the verb "learned" attributing to the ground a deliberate strategy of concealment.\n\nThe culminating metaphor — seventy thousand casualties reimagined as "a kind of weather, a pressure system of grief too vast to be experienced by a single mind" — is Source B's most ambitious attempt to find a language adequate to scale. By converting numerical loss into meteorological phenomenon, the writer argues that mass death operates environmentally rather than individually: it is not seventy thousand separate tragedies but a single atmospheric condition that no individual consciousness can contain. This directly parallels Source A's claim that "the ordinariness of what follows the horror" is inexplicable to "anyone who was not here" — both writers locate war's defining characteristic in its resistance to individual processing.\n\nThe deepest connection between the texts, however, is structural: both build towards confessions of inadequacy that are, paradoxically, the most eloquent moments in each piece. Source A's "I shall never be able to explain" and Source B's "I cannot" feel "something adequate" are not failures of writing but its highest achievements — the point at which language, by honestly acknowledging what it cannot do, accomplishes more than any description could. The century between the texts has changed everything about how war is accessed and nothing about how it defeats representation.`,
    },
    markScheme: [
      'Compares perspectives and experiences across both sources throughout',
      'Analyses methods (language, structure, tone, imagery) used by both writers',
      'Evaluates the impact on the reader for each source',
      'Uses comparative connectives to integrate the analysis',
      'Embeds well-selected quotations from both sources',
      'Shows perceptive understanding of how context shapes each writer\'s approach',
    ],
    examinerTips: [
      'Compare throughout — do not write about one source and then the other.',
      'Consider how the writers\' different positions (participant vs. visitor) shape their language.',
      'Evaluate effectiveness: which writer conveys the experience more powerfully, and why?',
      'The best answers find structural and thematic parallels between the sources, not just differences.',
    ],
  },

  // 6. Edexcel Paper 2 Writing — Imaginative Writing (narrative/descriptive)
  {
    id: 'edexcel-p2-imaginative-1',
    board: 'Edexcel',
    paper: 2,
    questionType: 'Imaginative Writing (Q5)',
    type: 'writing',
    difficulty: 'Higher',
    extract: '',
    extractSource: '',
    question: 'Write a narrative or descriptive piece about a journey that changes the person making it. You may wish to write about a physical journey, an emotional journey, or both. (40 marks: 24 for content and organisation, 16 for technical accuracy)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `The train pulled away from the platform and I watched the city shrink behind me. Tower blocks, then houses, then fields. It was the first time I had travelled anywhere alone.\n\nMum had been worried, of course. She had packed me sandwiches and written the address on a piece of paper even though I had it on my phone. "You never know," she said, folding it into my pocket. I smiled and told her I'd be fine, but as the train gathered speed, I wasn't sure I believed it.\n\nThe journey took three hours. I watched the countryside change through the window — flat fields giving way to hills, then to mountains that appeared suddenly, like something rising from the sea. I ate my sandwiches at Birmingham and bought a coffee that was too hot and too bitter, and I felt, for the first time, like someone who belonged in the world rather than someone who was just visiting it.\n\nAt the other end, the station was smaller than I expected. The air smelled different — cleaner, somehow, and colder. I walked out into the light and looked at the mountains, and they looked back at me, and I understood something I hadn't understood before: that the world was bigger than my bedroom, bigger than my school, bigger than every worry that had ever kept me awake. It had been there all along, waiting for me to arrive.\n\nI took out my phone and called Mum. "I'm here," I said. And I meant it in a way I hadn't expected to.`,
      'Grade 6-7': `The road from the coast climbed for eleven miles before it levelled out, and during those eleven miles the person driving changed.\n\nNot visibly. Not in any way that a photograph would have captured. She still had the same hands on the steering wheel, the same crease between her eyebrows, the same overnight bag on the back seat containing clothes she had packed in the dark while her husband slept. But somewhere between the second and the seventh mile — she could not have said exactly where — something shifted. A knot that had been tightening for months loosened by a single, crucial turn.\n\nThe landscape helped. It always does, when you are trying to think, to have something larger than your thoughts to look at. The sea appeared in the rear-view mirror, flat and grey and indifferent, and she felt a small, irrational gratitude towards it — for being there, for being vast, for not caring whether she was happy or not. There is a particular comfort in the indifference of geography.\n\nShe stopped at a lay-by at the top of the hill. Got out. The wind was fierce and tasted of salt and heather. Below her, the road she had driven unwound like ribbon dropped from a great height, and at the bottom, too small to see clearly, was the house she had left. The house where the arguments lived. The house whose silence was louder than any shouting.\n\nShe would go back. She knew that. The bag on the back seat was overnight, not permanent. But standing here, with the wind pulling at her coat and the whole country spread out below her like an answer to a question she had not yet learned to ask, she understood that going back and staying the same were not the same thing.\n\nShe got back in the car. She drove on. The road descended into a valley she had never visited, and the unfamiliarity of it felt, just for a moment, like freedom.`,
      'Grade 8-9': `The boat left at dawn, which is to say it left in the space between one version of the world and another. The harbour was still dark — oil-black water, the creak of ropes, the smell of diesel and salt and yesterday's catch. The boy stood on the deck with his bag between his feet and watched the quay recede and thought: I will remember this. He was seventeen. He was wrong about almost everything, but about this he was right.\n\nHe was leaving the island because the island had run out of things to teach him. This is not the same as saying he had learned everything — the island was old and deep and knew more than any seventeen-year-old could extract in a lifetime. But it had taught him what it could teach someone who stayed, and the rest of its lessons, paradoxically, could only be understood from a distance. His mother knew this. She had stood at the kitchen door that morning and held him by the shoulders and looked at him with an expression he would spend years learning to translate: pride and grief and the particular courage of a person who loves something enough to release it.\n\nThe crossing took four hours. He spent them on deck, watching the island diminish. It did not disappear all at once. First the houses went — the whitewashed cottages, the church, the school where he had been bored and cold and intermittently, unexpectedly happy. Then the harbour wall. Then the hill above the harbour, the one they called the Saddle, though it looked more like a shoulder. Finally, the whole island was just a smudge on the horizon, the colour of pencil lead, and then it was not even that. It was memory. The transition was so gradual he could not identify the moment it ceased to be a place and became an idea.\n\nThe mainland, when it arrived, was louder than he expected. Cars. Signs. People walking with a speed that suggested they had somewhere to be and were not confident of arriving. He stepped off the boat and onto a concrete quay that smelled of exhaust fumes and rain, and the first thing he noticed was that nobody noticed him. On the island, every arrival was an event. Here, he was simply one more body in a city of bodies, anonymous and unobserved, and the feeling was simultaneously terrifying and exhilarating — the loneliness of a person who has not yet learned to distinguish between freedom and isolation.\n\nHe would learn. It would take years, and the lessons would not always be kind, and there would be nights in small rented rooms when the silence pressed against the walls and he would close his eyes and hear the sea — not the real sea, which was miles away, but the remembered sea, which was closer, and louder, and colder. But he would learn that a journey does not change you in the moment of travelling. It changes you in the years that follow, slowly, the way water changes stone — not by force but by persistence, by arriving and departing and arriving again until the shape of what you were has become the shape of what you are.\n\nHe picked up his bag. He walked into the city. Behind him, the boat sounded its horn once — a low, resonant note that hung in the air like a question mark, or a full stop, or something that was neither, because the sentence it belonged to had not yet been written.`,
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
      'Edexcel Paper 2 Q5 asks for imaginative writing — this can be narrative OR descriptive.',
      'The best responses explore internal change, not just external events.',
      'Use specific, concrete details to anchor abstract emotions.',
      'Control your pacing: do not rush the transformation. Let it emerge gradually.',
      'A strong ending should resonate beyond the page — leave the reader thinking.',
    ],
  },

  // ========================================
  // LITERATURE PRACTICE QUESTIONS
  // ========================================

  // ----------------------------------------
  // AQA LITERATURE (6 questions)
  // ----------------------------------------

  // AQA Literature — Macbeth Character Analysis
  {
    id: 'aqa-lit-macbeth-char-1',
    board: 'AQA',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'Macbeth — Character Analysis (Lady Macbeth)',
    extract: `Come, you spirits\nThat tend on mortal thoughts, unsex me here,\nAnd fill me from the crown to the toe top-full\nOf direst cruelty. Make thick my blood,\nStop up the access and passage to remorse,\nThat no compunctious visitings of nature\nShake my fell purpose, nor keep peace between\nThe effect and it. Come to my woman\'s breasts,\nAnd take my milk for gall, you murd\'ring ministers.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 1 Scene 5',
    question: 'Starting with this extract, how does Shakespeare present Lady Macbeth as a powerful character? Write about how Shakespeare presents Lady Macbeth in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Lady Macbeth as a powerful character who wants to become cruel and ruthless. She calls on "spirits" to "unsex me here," which means she wants to lose her feminine qualities because she sees them as weak. The phrase "fill me from the crown to the toe top-full of direst cruelty" shows she wants to be completely filled with evil so she can carry out the murder of King Duncan. The word "direst" is a superlative which shows she wants the most extreme cruelty possible.

She also asks the spirits to "make thick my blood" and "stop up the access and passage to remorse." This means she wants to stop herself feeling guilty. The word "remorse" shows that she knows what they are planning is wrong, but she wants to block those feelings. The metaphor of taking her "milk for gall" shows she wants to replace her nurturing, motherly nature with poison and bitterness.

In the rest of the play, Lady Macbeth is powerful when she persuades Macbeth to kill Duncan by questioning his masculinity. She calls him a "coward" and says she would dash her own baby\'s brains out, which is shocking and shows her determination. However, later in the play her power fades. In the sleepwalking scene she tries to wash imaginary blood from her hands, saying "Out, damned spot." This shows the guilt she tried to block out in this extract has returned and destroyed her. She eventually dies offstage, possibly by suicide.

Shakespeare uses Lady Macbeth to show that trying to reject natural feelings leads to destruction. A Jacobean audience would have found her terrifying because women were expected to be obedient and gentle, not commanding evil spirits.`,
      'Grade 6-7': `Shakespeare presents Lady Macbeth as a figure who seeks power through the deliberate rejection of femininity and natural feeling. Her invocation to the "spirits that tend on mortal thoughts" positions her as a character who actively courts the supernatural, establishing a transgressive agency that would have profoundly unsettled a Jacobean audience for whom such appeals constituted genuine blasphemy. The imperative "unsex me here" is a demand for transformation that equates womanhood with weakness — the verb "unsex" implying that gender itself is an obstacle to the power she craves.

The anatomical specificity of her language — "crown to the toe," "blood," "breasts," "milk" — grounds her ambition in the body, creating a visceral sense of physical violation. The request to "make thick my blood" and "stop up the access and passage to remorse" constructs guilt as a liquid that flows through natural channels; to become powerful, she must physically block these passages. The metaphor reveals an awareness that cruelty is not her natural state — it must be artificially imposed. The substitution of "milk for gall" transforms the maternal into the toxic, the verb "take" suggesting that the spirits must remove her humanity by force.

In the wider play, Lady Macbeth\'s power manifests most clearly in Act 1 Scene 7, where she manipulates Macbeth through an assault on his masculinity, asking "Was the hope drunk / Wherein you dressed yourself?" Her rhetorical control here mirrors the commanding imperatives of the extract, positioning her as the true architect of the regicide. Yet Shakespeare structures her arc as a trajectory from control to disintegration. The sleepwalking scene inverts the extract precisely: the woman who demanded that her blood be thickened now obsessively washes her hands; the woman who summoned darkness now requires "light by her continually." The remorse she commanded the spirits to block has found its way through, proving that the "compunctious visitings of nature" cannot be permanently suppressed.

Contextually, James I\'s fascination with witchcraft makes Lady Macbeth\'s invocation of spirits particularly charged — she occupies a space between ambitious wife and witch, her language echoing the incantatory rhythms of the Weird Sisters. Shakespeare uses her to explore the relationship between gender, power, and moral corruption, ultimately suggesting that power seized through unnatural means is inherently self-consuming.`,
      'Grade 8-9': `Shakespeare constructs Lady Macbeth\'s power in this extract as fundamentally paradoxical: it is an assertion of will that simultaneously announces its own dependency. The invocation "Come, you spirits" adopts the imperative mode, but the very need to summon external forces reveals that the cruelty she desires is not innate — it must be imported, injected, artificially installed. Her power, then, is not self-generated but borrowed, and this distinction proves structurally decisive for the trajectory of her character.

The command to "unsex me here" operates on multiple levels. Superficially, it is a rejection of feminine weakness in a patriarchal order that equates womanhood with passivity. But more profoundly, it is a request for ontological transformation — the verb "unsex" does not mean "make me masculine" but rather "remove my sex entirely," positioning Lady Macbeth as seeking to exist outside the categories of gender altogether. This is radical: in the rigidly gendered hierarchy of Jacobean England, to be unsexed is to be unnatural, and the unnatural in Shakespeare\'s moral universe is always ultimately punished. The spatial metaphor "from the crown to the toe" anticipates the crown Macbeth will seize, collapsing the personal body and the body politic into a single site of corruption.

The physiological imagery — "make thick my blood," "stop up the access and passage to remorse" — reveals a sophisticated understanding of interiority. Lady Macbeth conceptualises conscience as a physical system with "access" points that can be blocked, constructing guilt not as a moral abstraction but as a bodily fluid. The request to exchange "milk for gall" is perhaps the extract\'s most disturbing image: it transforms the breast — the site of maternal nourishment, of the bond between mother and child — into a vessel for poison. The theological implications are significant: in Christian iconography, the Madonna\'s milk symbolises divine grace, and Lady Macbeth\'s rejection of it constitutes a deliberate inversion of the sacred.

Shakespeare carefully structures the play so that every element of this speech is later inverted. The woman who demanded the removal of remorse is consumed by it in Act 5, her compulsive handwashing a physiological response to the psychological blockage she herself requested. The "thick" blood she desired manifests as the indelible blood on her hands — "all the perfumes of Arabia will not sweeten this little hand" — the diminutive "little" poignantly recovering the femininity she had sought to destroy. The darkness she summoned ("Come, thick night") becomes the darkness of her madness, and her need for "light by her continually" represents the complete collapse of the persona she constructed in this extract.

What makes Lady Macbeth\'s characterisation so enduring is Shakespeare\'s refusal to simplify her. She is neither monster nor victim but a character whose ambition exposes the violence inherent in the gender hierarchy she inhabits. Her tragedy is not that she sought power but that the only route to power available to her required the annihilation of her own humanity — a critique that implicates the patriarchal structure as much as the individual who attempts to subvert it.`,
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
      'Consider how Shakespeare structures Lady Macbeth\'s arc — the trajectory from power to collapse is crucial.',
      'Context should support your argument, not replace analysis.',
      'Use the phrase "Shakespeare presents" to keep focus on authorial method.',
    ],
  },

  // AQA Literature — Macbeth Theme Analysis
  {
    id: 'aqa-lit-macbeth-theme-1',
    board: 'AQA',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'Macbeth — Theme of Ambition',
    extract: `I have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o\'erleaps itself\nAnd falls on the other.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 1 Scene 7',
    question: 'Starting with this extract, how does Shakespeare present the theme of ambition in Macbeth? Write about how ambition is presented in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents ambition as dangerous and destructive. Macbeth says he has "no spur to prick the sides of my intent," which is a metaphor comparing his plan to kill Duncan to a horse that needs to be kicked to make it go. This shows that Macbeth does not really have a good reason to commit the murder. The only thing driving him is "vaulting ambition," which he describes as something that "o'erleaps itself and falls on the other." This image of jumping too high and falling over suggests that ambition will lead to failure and destruction.

Earlier in the play, the witches start Macbeth\'s ambition by predicting he will become Thane of Cawdor and then King. When the first prediction comes true, Macbeth starts to take the second seriously. He says "Stars, hide your fires; let not light see my black and deep desires," which shows he already has dark ambitions that he is ashamed of.

Lady Macbeth also drives his ambition forward. She tells him he is "too full o\' the milk of human kindness" and challenges his manhood to make him act. After killing Duncan, Macbeth\'s ambition grows — he has Banquo murdered and attacks Macduff\'s family, showing that ambition has turned him into a tyrant.

Shakespeare uses the theme of ambition to warn the audience that wanting too much power leads to destruction. This would have been important to James I, who had survived the Gunpowder Plot and would have wanted to see that those who challenge the king are punished.`,
      'Grade 6-7': `Shakespeare presents ambition in this extract as a force that is simultaneously compelling and self-destructive. The equestrian metaphor — "no spur to prick the sides of my intent" — frames murder as a journey that requires motivation, and Macbeth\'s admission that he lacks any justification beyond ambition itself reveals the hollowness at the centre of his resolve. The image of "vaulting ambition, which o\'erleaps itself / And falls on the other" draws on the physical action of mounting a horse too eagerly, overshooting the saddle, and falling. The verb "o\'erleaps" carries a sense of reckless excess, and the inevitable "falls" foreshadows Macbeth\'s own trajectory — he will leap for the crown and be destroyed by the very act of reaching for it.

The extract is significant because it represents Macbeth\'s most rational moment regarding ambition. He recognises its danger clearly, yet proceeds regardless — suggesting that ambition in the play operates less as a conscious choice and more as an ungovernable compulsion. This reading is supported by his soliloquy in Act 1 Scene 3, where the witches\' prophecy triggers an immediate internal conflict: "why do I yield to that suggestion / Whose horrid image doth unfix my hair." The verb "yield" implies surrender to a force stronger than reason.

Shakespeare externalises ambition through the witches and Lady Macbeth, who function as catalysts. The witches\' prophecies provide the content of ambition — kingship — while Lady Macbeth provides its mechanism, goading Macbeth with accusations of cowardice and manipulating gender expectations. Yet Shakespeare ensures that neither can be held solely responsible; Macbeth\'s aside that "the Prince of Cumberland" is "a step on which I must fall down, or else o\'erleap" echoes the extract\'s "o\'erleaps" and establishes that ambition was present before any external influence.

As the play progresses, ambition metastasises. The murder of Duncan generates not satisfaction but further killing — Banquo, Macduff\'s family — because ambition, once acted upon, creates the very threats it seeks to eliminate. Macbeth\'s later declaration that he is "in blood stepped in so far that, should I wade no more, returning were as tedious as go o\'er" presents ambition as a river of blood from which retreat is impossible, the casual word "tedious" revealing how thoroughly ambition has corroded his moral sense.

Contextually, the play engages with the Jacobean concept of the Great Chain of Being, in which ambition to rise above one\'s ordained place constitutes a sin against the divine order. Macbeth\'s ambition does not merely destroy him — it disorders the entire natural world, producing storms, unnatural darkness, and animals eating each other. Shakespeare suggests that individual ambition has cosmic consequences, a warning directed at a court still shaken by the Gunpowder Plot.`,
      'Grade 8-9': `Shakespeare constructs ambition in this extract not as a character trait but as a structural principle — a force that shapes and ultimately destroys the architecture of selfhood. Macbeth\'s admission that he possesses "no spur / To prick the sides of my intent, but only / Vaulting ambition" is remarkable for its logical clarity: he has methodically eliminated every justification for Duncan\'s murder and arrived at ambition as the irreducible remainder. The equestrian metaphor operates with precise mechanical logic — without a legitimate "spur," the rider has no control over the horse, and ambition becomes not a tool of the will but an autonomous force that propels the self beyond its capacity. The image of ambition that "o\'erleaps itself / And falls on the other" is proleptic, encoding the entire arc of the play in a single figure: the reach that exceeds the grasp, the ascent that guarantees the fall. The word "other" is deliberately vague — it could refer to the other side of the horse, but it also gestures towards the "other" self Macbeth will become, the tyrant produced by the act of overreaching.

What makes this moment structurally crucial is that it represents the last point at which Macbeth possesses genuine self-knowledge. He sees the danger with complete clarity, articulates it with rhetorical precision, and proceeds regardless. This paradox — lucid self-awareness combined with an inability to act on that awareness — is the defining characteristic of Shakespearean tragic ambition. It distinguishes Macbeth from a simple villain: he is not ignorant of the consequences but compelled by a force that renders knowledge irrelevant.

Shakespeare distributes the origins of ambition across multiple agents, resisting any single causal explanation. The witches\' prophecies function as what Banquo calls "instruments of darkness" — they do not create ambition but activate a latent potential, as evidenced by Macbeth\'s immediate imaginative leap to murder: "My thought, whose murder yet is but fantastical, / Shakes so my single state of man." The physiological response — the shaking, the unnatural disruption of his "single state" — suggests that ambition operates at the somatic level, below conscious control. Lady Macbeth\'s role is more explicitly rhetorical; her manipulation in Act 1 Scene 7 targets Macbeth\'s masculinity, but she is herself driven by an ambition she recognises as requiring supernatural intervention to fulfil: "Come, you spirits / That tend on mortal thoughts, unsex me here." The parallel invocations — his to darkness, hers to spirits — create a shared grammar of ambition that binds the couple in a mutual destruction.

The play\'s most profound insight is that ambition is self-perpetuating: each act of ambition creates the conditions that demand further action. Duncan\'s murder makes Banquo a threat; Banquo\'s murder makes Fleance a fugitive; the attempt to secure power generates an exponentially expanding field of danger. Macbeth\'s metaphor of being "in blood / Stepped in so far" captures this logic with devastating economy — the spatial metaphor of wading through blood transforms cumulative moral choices into a physical landscape from which retreat requires the same effort as continuation, making moral distinction meaningless. The word "tedious" is the most chilling in the play: it reduces the calculation between further atrocity and repentance to a question of convenience rather than conscience.

Shakespeare ultimately presents ambition as a force that consumes the structures it claims to build. The Great Chain of Being — the Jacobean cosmological hierarchy in which each creature occupies a divinely ordained position — is not merely disrupted but inverted: the king becomes murderer, the subject becomes tyrant, and nature itself convulses in response. The play\'s restoration of order through Malcolm is significant but incomplete; the audience has witnessed how fragile that order was, how easily ambition can dismantle it. This is Shakespeare\'s warning to James I\'s court, but it transcends its historical moment: ambition in Macbeth is not a period-specific vice but a permanent feature of the human condition, the "vaulting" impulse that propels civilisation forward and, in the same motion, threatens to destroy it.`,
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
      'A theme question requires you to trace an idea across the whole play — do not just analyse the extract.',
      'Consider how the theme develops and changes, not just where it appears.',
      'The best responses treat ambition as something complex, not simply "bad."',
      'Link context to specific moments rather than bolting it on at the end.',
    ],
  },

  // AQA Literature — An Inspector Calls (Responsibility Theme)
  {
    id: 'aqa-lit-aic-theme-1',
    board: 'AQA',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls — Theme of Responsibility',
    extract: `But just remember this. One Eva Smith has gone — but there are millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, and what we think and say and do. We don\'t live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.`,
    extractSource: 'Written in the style of J.B. Priestley\'s An Inspector Calls, Act 3',
    question: 'How does Priestley use the character of the Inspector to present ideas about responsibility? Write about how the Inspector presents ideas about responsibility in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, the Inspector presents the idea that everyone is responsible for each other. He says "we don't live alone" and "we are members of one body," which means that all people are connected and what we do affects others. The phrase "millions and millions of Eva Smiths" shows that Eva is not just one person but represents all working-class people who suffer because of how they are treated by the rich.

The Inspector warns that if people do not learn to be responsible, "they will be taught it in fire and blood and anguish." This is a threatening warning that suggests war or revolution will come if society does not change. The rule of three — "fire and blood and anguish" — makes the warning sound serious and frightening.

Earlier in the play, the Inspector shows each member of the Birling family how they were responsible for Eva Smith\'s death. Mr Birling sacked her for asking for higher wages. Sheila got her fired from a shop because she was jealous. Gerald kept her as a mistress then abandoned her. Mrs Birling refused her help at the charity. Eric got her pregnant and stole money. The Inspector makes each of them face what they did.

Priestley uses the Inspector to show that people in 1912 needed to take more responsibility for others. The play was written in 1945, and the audience would know that two world wars had already happened, which makes the Inspector\'s warning about "fire and blood" seem like a prophecy that came true. Priestley was a socialist who believed in the welfare state and wanted his audience to learn from the Birlings\' mistakes.`,
      'Grade 6-7': `Priestley uses the Inspector as a mouthpiece for socialist ideology, and this extract functions as the play\'s moral thesis. The movement from the specific — "One Eva Smith has gone" — to the universal — "millions and millions of Eva Smiths and John Smiths" — enacts the Inspector\'s central argument: that individual suffering is systemic, not incidental. The addition of "John Smiths" broadens the category beyond gender, while the surname "Smith" — the most common English name — makes the victims everypeople, representatives of an entire class rendered invisible by those who exploit them. The listing of "their lives, their hopes and fears, their suffering and chance of happiness" restores to these anonymous millions the full complexity of human interiority that the Birlings have denied Eva throughout the play.

The declaration "We are members of one body" carries deliberate biblical resonance, echoing St Paul\'s metaphor of the Church as the body of Christ (1 Corinthians 12). Priestley, though a socialist rather than a conventional Christian, appropriates religious language to give his social message moral authority. The short declarative sentences — "We don\'t live alone. We are members of one body. We are responsible for each other." — use syntactic simplicity to present these ideas as self-evident truths rather than debatable opinions. The anaphoric "We are" creates a rhetorical rhythm that is almost incantatory, reinforcing the Inspector\'s quasi-prophetic status.

The final warning — "fire and blood and anguish" — transforms the Inspector from investigator to prophet. For the 1912 characters, this is a threat; for the 1945 audience, it is history. Priestley exploits dramatic irony to devastating effect: the audience knows that two world wars have already delivered the "lesson" the Inspector predicts, making the Birlings\' complacency not merely selfish but catastrophically wrong. The polysyndetic "and" in "fire and blood and anguish" creates a cumulative weight, each noun adding another layer of consequence.

Throughout the play, the Inspector functions as a structural device that forces responsibility upon characters who resist it. His method — revealing each family member\'s involvement sequentially — mirrors the chain of causation that destroyed Eva, demonstrating that responsibility is collective and cumulative. The younger generation\'s response is significant: Sheila and Eric accept responsibility, suggesting that Priestley believed social change was possible through generational shift. Mr and Mrs Birling\'s refusal to accept responsibility — their relief when the Inspector\'s identity is questioned — represents the entrenched capitalist class that Priestley sought to challenge.`,
      'Grade 8-9': `Priestley constructs the Inspector\'s final speech as a rhetorical set piece that operates simultaneously as dramatic climax, political manifesto, and secular prophecy. The movement from singular to plural — "One Eva Smith" to "millions and millions" — is not merely a broadening of scope but a fundamental challenge to the individualist ethics that underpin the Birlings\' worldview. Throughout the play, each family member has treated their interaction with Eva as an isolated event, a private transaction without wider consequence. The Inspector\'s speech dismantles this atomised morality by insisting on interconnection: "their lives... all intertwined with our lives." The verb "intertwined" is precisely chosen — it implies not a simple connection but an inextricable entanglement, a fabric of social relations that cannot be separated into discrete threads.

The theological register of "We are members of one body" performs complex ideological work. Priestley appropriates the Pauline metaphor of the corpus mysticum not to endorse Christian doctrine but to secularise it, transforming a spiritual concept into a socialist one. This is characteristic of Priestley\'s method: he takes the moral vocabulary that his bourgeois audience would recognise and redirects it towards conclusions they would find uncomfortable. The Birlings attend church, observe propriety, and maintain the outward forms of moral respectability — yet they have systematically destroyed a young woman. The Inspector forces them to confront the gap between their professed values and their actual behaviour, a gap that Priestley identifies as the defining hypocrisy of the capitalist class.

The syntactic structure of the speech enacts its argument. The short, declarative sentences — "We don\'t live alone. We are members of one body. We are responsible for each other." — strip away the qualifications and equivocations that have characterised the Birlings\' language throughout the play. Where Mr Birling speaks in expansive, self-congratulatory periods ("a man has to mind his own business and look after himself and his own"), the Inspector speaks in absolutes. The contrast is structural and ideological: Birling\'s syntax reflects the complexity of self-justification, while the Inspector\'s reflects the simplicity of moral truth.

The prophecy of "fire and blood and anguish" is the play\'s most audacious deployment of dramatic irony. Written in 1945, the speech ventriloquises a character in 1912 predicting events that the audience has already lived through. This temporal layering creates a unique relationship between stage and auditorium: the audience possesses knowledge that vindicates the Inspector and condemns the Birlings, transforming passive spectatorship into active moral judgement. The warning is also prospective — in 1945, with the memory of war fresh and the welfare state being constructed, Priestley implies that the choice between collective responsibility and catastrophic individualism is not historical but ongoing. The Inspector\'s "if" preserves human agency: destruction is not inevitable, but it is the logical consequence of the philosophy Mr Birling articulates.

The Inspector\'s supernatural ambiguity — is he a ghost, a time traveller, a personification of conscience? — is essential to Priestley\'s purpose. By refusing to naturalise the Inspector, Priestley prevents the audience from dismissing his message as the opinion of a particular individual. The Inspector is not a character with a psychology but a dramatic function: he exists to make the invisible visible, to force the comfortable to confront the consequences of their comfort. His departure does not resolve the play but opens it outward — the telephone call announcing that a real inspector is on the way suggests that the reckoning the Birlings have tried to evade is merely deferred, never cancelled. Responsibility, Priestley insists, cannot be escaped through clever argument or social privilege; it can only be accepted or suffered.`,
    },
    markScheme: [
      'Analyses how Priestley uses the Inspector to present ideas about responsibility',
      'Explores the significance of specific language choices in the extract',
      'Discusses responsibility across the whole play, including other characters\' responses',
      'Considers relevant context (1912 setting, 1945 audience, socialism, welfare state)',
      'Uses well-integrated quotations from the extract and the wider play',
      'Develops a conceptualised argument about Priestley\'s purpose and message',
    ],
    examinerTips: [
      'The Inspector is a mouthpiece — always write "Priestley uses the Inspector to..." rather than treating him as a real person.',
      'The dual time frame (1912 setting, 1945 audience) is essential context.',
      'Consider how different characters respond to responsibility — the generational divide matters.',
      'The best answers treat the play as a deliberate construction, not a realistic story.',
    ],
  },

  // AQA Literature — An Inspector Calls (Character Analysis)
  {
    id: 'aqa-lit-aic-char-1',
    board: 'AQA',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls — Mr Birling Character Analysis',
    extract: `But the way some of these cranks talk and write now, you\'d think everybody has to look after everybody else, as if we were all mixed up together like bees in a hive — community and all that nonsense. A man has to mind his own business and look after himself and his own — and I speak as a hard-headed practical man of business.`,
    extractSource: 'Written in the style of J.B. Priestley\'s An Inspector Calls, Act 1',
    question: 'How and why does Priestley present Mr Birling as an unlikeable character? Write about how Mr Birling is presented in this extract and in the play as a whole. (30 marks + 4 AO4)',
    marks: 34,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Priestley presents Mr Birling as unlikeable because he is selfish and dismissive. He calls people who believe in community "cranks," which is a rude word that shows he thinks caring about others is stupid. The phrase "community and all that nonsense" shows he completely rejects the idea that people should help each other. He says "a man has to mind his own business and look after himself," which shows he only cares about himself and his family.

Mr Birling describes himself as "a hard-headed practical man of business," which shows he is proud and thinks being tough makes him better than others. The word "hard-headed" suggests he has no feelings or sympathy for people less fortunate than him.

In the rest of the play, Mr Birling is shown to be wrong about many things. He says the Titanic is "unsinkable" and that there will not be a war, but the audience knows both of these are wrong. This dramatic irony makes him look foolish and arrogant. When the Inspector reveals that Mr Birling sacked Eva Smith for asking for better wages, Mr Birling shows no guilt. He says he "can\'t accept any responsibility" and thinks paying low wages is just good business.

Priestley makes Mr Birling unlikeable to criticise capitalist businessmen who only care about profit. In 1945 when the play was written, Priestley wanted the audience to reject Mr Birling\'s selfish views and support the new welfare state that would help everyone, not just the rich.`,
      'Grade 6-7': `Priestley constructs Mr Birling as a figure of deliberate dramatic irony whose every assertion is designed to be undermined by the audience\'s superior knowledge. In this extract, Birling dismisses collective responsibility as the province of "cranks," a term that positions those who advocate for social welfare as irrational extremists. The simile "all mixed up together like bees in a hive" is intended as a reductio ad absurdum, but Priestley inverts Birling\'s rhetoric: the audience is meant to recognise the bee colony — cooperative, interdependent, productive — as a more admirable model than Birling\'s atomised individualism. His language reveals him through what he intends as persuasion: the self-description "a hard-headed practical man of business" uses three adjectives that are meant to signal competence but instead communicate a narrowness of vision. The word "hard" carries connotations of cruelty as well as pragmatism, while "practical" implies a refusal to engage with abstract ethical principles.

The syntactic structure of Birling\'s speech is revealing. The repetitive self-reference — "a man has to mind his own business and look after himself and his own" — creates a rhetorical circle that excludes everyone beyond the family unit. The polysyndetic "and" accumulates possessive pronouns ("himself," "his own") until selfishness becomes a grammatical principle, each clause reinforcing the boundary between self and other.

Priestley places this speech at the opening of the play so that the Inspector\'s subsequent revelations systematically dismantle Birling\'s philosophy. Each family member\'s involvement with Eva demonstrates that they are, in fact, "all mixed up together" — the Birlings\' actions have consequences that cross class boundaries whether they acknowledge it or not. Birling\'s response to the investigation — bluster, denial, concern for his knighthood — reveals that his "practical" worldview is actually a mechanism for avoiding moral accountability. His relief when the Inspector\'s credentials are questioned, and his eagerness to "settle it sensibly," expose a man whose primary concern is reputation rather than ethics.

Contextually, Birling represents the Edwardian capitalist class whose complacency Priestley held responsible for the social inequalities that persisted through two world wars. His confidently wrong predictions — the Titanic, the impossibility of war — function as a structural warning: the audience is positioned to distrust everything Birling says, including his rejection of social responsibility. Priestley ensures that Birling\'s philosophy is not merely wrong but dangerous, the logical precursor to the "fire and blood and anguish" the Inspector prophesies.`,
      'Grade 8-9': `Priestley engineers Mr Birling as a character whose dramatic function is to be comprehensively, catastrophically wrong — and in so doing, to invalidate the entire ideological framework he represents. The extract is carefully positioned at the play\'s opening, before the Inspector\'s arrival, so that Birling\'s philosophy is fully articulated before it is subjected to systematic demolition. This structural choice is essential: Priestley does not merely present an alternative to Birling\'s individualism; he ensures that the audience watches that individualism collapse under the weight of its own consequences.

The language of the extract reveals Birling through his rhetorical strategies. The dismissal of social reformers as "cranks" is an ad hominem that substitutes mockery for engagement — Birling does not argue against collective responsibility but ridicules it, a tactic that reveals intellectual insecurity masquerading as confidence. The simile "like bees in a hive" is Birling\'s attempt at absurdist analogy, but Priestley loads it with ironic potential: the hive is, in fact, a model of functional cooperation, and Birling\'s contempt for it exposes the limitations of his imagination rather than the absurdity of the concept. The phrase "community and all that nonsense" performs a rhetorical sleight of hand, using the dismissive "all that" to bundle complex social philosophy into a category that can be rejected wholesale. The definite article "all" suggests that Birling has not engaged with these ideas sufficiently to distinguish between them — they are, to him, a single, undifferentiated threat to his self-interest.

The self-designation "a hard-headed practical man of business" functions as an ideological manifesto compressed into a noun phrase. Each modifier performs specific work: "hard-headed" asserts rationality while encoding emotional inaccessibility; "practical" privileges utility over ethics; "man of business" locates identity entirely within the economic sphere. Priestley constructs a character who has so thoroughly identified himself with his economic function that he has no language for moral reasoning — a limitation that the Inspector\'s investigation will ruthlessly expose.

Priestley\'s most sophisticated technique is the deployment of dramatic irony as an ideological weapon. Birling\'s predictions — that the Titanic is "unsinkable," that war is impossible, that technology will bring perpetual prosperity — are not incidental errors but the logical products of his worldview. A man who believes that individual self-interest is the organising principle of human society will inevitably fail to anticipate collective catastrophes, because his conceptual framework has no mechanism for understanding systemic risk. The audience\'s knowledge that every prediction is wrong performs the critical work that the play\'s argument requires: it establishes that Birling\'s judgement is fundamentally unreliable, so that when he dismisses collective responsibility, the audience has already been trained to recognise his dismissals as indicators of truth rather than error.

The character\'s response to the investigation completes Priestley\'s portrait. Birling\'s concern shifts from Eva\'s death to his knighthood, from moral accountability to social reputation — a displacement that reveals the true priorities of his class. His eagerness to discover that the Inspector was "a fake" and his attempt to reframe the evening as "an elaborate sell" are not merely self-serving but structurally necessary: they demonstrate that the capitalist mindset is incapable of incorporating moral feedback because it lacks the conceptual vocabulary to process it. Birling cannot learn from the Inspector because learning would require him to dismantle the identity he has spent a lifetime constructing. In this, Priestley suggests that the obstacle to social progress is not ignorance but investment — the Birlings of the world resist change not because they do not understand the argument for responsibility but because accepting it would cost them everything they have built their sense of self upon.`,
    },
    markScheme: [
      'Analyses how Priestley presents Mr Birling as unlikeable through language and dramatic irony',
      'Explores the effect of specific words and rhetorical strategies in the extract',
      'Discusses Birling\'s role and characterisation across the whole play',
      'Considers relevant context (capitalism, socialism, the welfare state, dramatic irony)',
      'Uses well-integrated quotations from the extract and the wider play',
      'Develops a sustained argument about Priestley\'s purpose in creating this character',
    ],
    examinerTips: [
      'Always frame your analysis around Priestley\'s intentions — why did he make Birling say this?',
      'Dramatic irony is essential to any answer about Mr Birling.',
      'Do not just describe what Birling says — analyse what it reveals about him and about Priestley\'s message.',
      'The contrast between Birling and the Inspector is a structural device worth exploring.',
    ],
  },

  // AQA Literature — Poetry Comparison (Power & Conflict)
  {
    id: 'aqa-lit-poetry-comp-1',
    board: 'AQA',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Power & Conflict Poetry Comparison',
    extract: `Poem A — "Ozymandias" by Percy Bysshe Shelley:\n"I met a traveller from an antique land,\nWho said — Two vast and trunkless legs of stone\nStand in the desert. Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away."\n\nCompare with one other poem from the Power and Conflict anthology.`,
    extractSource: 'Poetry anthology extract',
    question: 'Compare how poets present the abuse or futility of power in "Ozymandias" and one other poem from the Power and Conflict anthology. (30 marks)',
    marks: 30,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Ozymandias" by Shelley and "My Last Duchess" by Browning present the idea that power can be abused and that powerful people can be arrogant and cruel.

In "Ozymandias," Shelley describes a broken statue in the desert. The inscription "My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!" shows that the king was arrogant and wanted everyone to fear him. The title "King of Kings" shows he thought he was the most powerful ruler of all. However, the irony is that "Nothing beside remains" — all his works have been destroyed and only a broken statue is left. The "lone and level sands" that "stretch far away" show that nature has outlasted his power. Shelley is saying that even the most powerful people will be forgotten.

In "My Last Duchess," Browning presents the Duke as another powerful man who abuses his authority. He talks about his dead wife\'s portrait and reveals that he was jealous of her friendliness. He says "I gave commands; Then all smiles stopped together," which strongly suggests he had her killed. The phrase "I gave commands" shows he uses his power casually to control and destroy. Like Ozymandias, the Duke treats people as objects — he now prefers the portrait because he can control it, pulling a curtain over it so "none puts by the curtain I have drawn for you, but I."

Both poems show that powerful people try to control others but ultimately reveal their own weaknesses. Ozymandias\'s power has crumbled to nothing, while the Duke\'s need to control his wife reveals his insecurity rather than his strength.`,
      'Grade 6-7': `Both Shelley and Browning examine the relationship between power and its eventual futility, though they approach it from different temporal perspectives — Shelley from the vantage point of centuries of decay, Browning from the immediacy of tyrannical control.

Shelley structures "Ozymandias" as a narrative within a narrative — "I met a traveller from an antique land, / Who said" — creating multiple layers of distance between the reader and Ozymandias\'s power. This framing device is itself a comment on the transience of authority: the king\'s words reach us only through a chain of intermediaries, his command reduced to reported speech. The ironic juxtaposition of "Look on my Works, ye Mighty, and despair!" with "Nothing beside remains" is the poem\'s central structural device, placing the boast and its negation in devastating proximity. The final image — "The lone and level sands stretch far away" — uses the plosive alliteration of "lone and level" and the expansive vowel sounds to create a sense of vast emptiness that swallows the "colossal Wreck" of Ozymandias\'s ambition.

Browning\'s "My Last Duchess" presents power as present and active rather than historical and decayed. The Duke\'s dramatic monologue reveals his tyranny through what he considers normal conversation: he discusses the murder of his wife with the same tone he uses to point out artworks. The enjambment and caesura in "I gave commands; / Then all smiles stopped together" creates a terrifying pause that contains an entire act of violence within a semi-colon. Where Ozymandias\'s power is explicitly stated ("King of Kings"), the Duke\'s is implicit — he never admits to murder, yet his control over the narrative mirrors his control over the Duchess.

Both poets use art as a vehicle for exploring power. Ozymandias\'s statue was intended to immortalise his greatness but now records only his arrogance; the Duke\'s portrait preserves his wife but only as an object under his control. In both cases, art outlasts the powerful — but it preserves the truth of their character rather than the image they sought to project. Shelley\'s sonnet form, with its unconventional rhyme scheme, itself enacts the breakdown of structures, while Browning\'s relentless iambic pentameter couplets mirror the Duke\'s need for control. Both poets suggest that the attempt to possess power absolutely is ultimately self-defeating.`,
      'Grade 8-9': `Shelley and Browning both anatomise power as a fundamentally performative act — one that requires an audience to function and that is therefore always vulnerable to the audience\'s withdrawal, disappearance, or reinterpretation.

"Ozymandias" is constructed as a study in the archaeology of arrogance. The poem\'s triple narrative frame — the poet, the traveller, the inscription — places three acts of mediation between the reader and Ozymandias\'s original assertion of power, a structure that formally enacts the erosion it describes. Each layer of retelling diminishes the king\'s authority: his words, once carved in stone as commands, are now reported speech within reported speech, their imperative force entirely neutralised. The irony of "Look on my Works, ye Mighty, and despair!" is not simply that the works have vanished but that the command to "Look" survives only in a context that inverts its meaning — we look and despair not at Ozymandias\'s power but at its absence. Shelley\'s chosen form — a Petrarchan sonnet whose rhyme scheme deliberately fractures its own conventions (ABABACDCEDEFEF) — embodies the poem\'s thesis at the level of prosody: the structure of power cannot sustain itself and will inevitably fragment.

Browning\'s "My Last Duchess" presents power at its most concentrated and most revealing. The dramatic monologue form is critical: the Duke believes he is demonstrating his authority and taste, but the reader perceives a confession. The gap between the Duke\'s self-presentation and the reader\'s understanding creates an irony that Browning sustains across fifty-six lines. The possessive "My Last Duchess" reduces a human being to a title of ownership, the adjective "Last" chilling in its implication that the Duchess is merely one in a sequence of possessions. The line "I gave commands; / Then all smiles stopped together" is a masterpiece of understatement: the euphemistic vagueness of "commands" and the finality of "stopped" contain murder within the syntax of administrative efficiency. The caesura after "commands" creates a silence that is itself the space of the Duchess\'s death — unnamed, unnarrated, erased by the very grammar that records it.

What unites the poems is their shared insight that power\'s greatest vulnerability is its dependence on representation. Ozymandias required a sculptor to project his authority; the Duke requires a portrait to contain his wife\'s threatening vitality. In both cases, the artwork becomes the site where power is simultaneously displayed and undermined — the sculptor "well those passions read" and reproduced the "sneer of cold command" rather than the majesty the king intended, while Fra Pandolf\'s portrait preserves the "spot of joy" on the Duchess\'s cheek that the Duke found so intolerable. Art, in both poems, serves truth rather than power, and it is this insubordination of representation that drives the thematic argument.

The temporal contrast between the poems is structurally significant. Shelley writes from a position of historical hindsight, allowing time itself to deliver the verdict on Ozymandias — the "boundless and bare" sands are the ultimate critic. Browning writes from within the exercise of power, capturing the Duke mid-performance, and the reader must deliver the verdict that time has not yet reached. This difference in temporal positioning creates complementary forms of dramatic irony: in Shelley, we see the outcome; in Browning, we foresee it. Together, the poems argue that the futility of tyrannical power is not merely historical accident but structural inevitability — power that depends on subjugation will always, eventually, meet the force that dissolves it, whether that force is geological time or the moral intelligence of the reader.`,
    },
    markScheme: [
      'Compares how both poets present power and its futility',
      'Analyses specific language, form, and structural choices in both poems',
      'Explores the poets\' methods and their effects on the reader',
      'Maintains a comparative structure throughout (not poem-by-poem)',
      'Considers relevant contextual factors for both poems',
      'Uses precise, well-integrated quotations from both poems',
    ],
    examinerTips: [
      'Structure by theme or idea, not poem by poem.',
      'Compare methods, not just content — how do the poets achieve different effects?',
      'Form and structure matter: comment on sonnet form, dramatic monologue, rhyme, enjambment.',
      'Context should illuminate analysis, not replace it.',
    ],
  },

  // AQA Literature — Unseen Poetry
  {
    id: 'aqa-lit-unseen-1',
    board: 'AQA',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `The Old Pier\n\nIt stands, though barely, listing like a drunk\nwho can\'t remember where he lives.\nThe timbers groan at every tide,\na sound like ships that never sailed.\n\nOnce, families queued here, sunburned, loud,\nwith buckets, rods, and small ambitions —\na mackerel, perhaps, or just the satisfaction\nof standing where the land gives up.\n\nNow the railings rust to lace.\nBirds own what people left behind.\nThe sea still comes, indifferent as a clock,\nand the pier receives it, open-armed,\nthe way the old receive what they cannot prevent.`,
    extractSource: 'Original poem written for this exercise',
    question: 'In "The Old Pier," how does the poet present ideas about time and decay? You should consider the poet\'s use of language, form, and structure. (24 marks)',
    marks: 24,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet presents the old pier as something that is falling apart over time. The simile "listing like a drunk who can\'t remember where he lives" compares the pier to a drunk person, which makes it seem unsteady and lost. The word "barely" shows it is only just still standing. The timbers "groan," which is personification that makes the pier sound like it is in pain.

The second stanza describes how the pier used to be busy with "families" who were "sunburned" and "loud." The phrase "small ambitions" — wanting to catch "a mackerel" — shows that the pier was a place of simple, everyday happiness. The phrase "where the land gives up" is interesting because it personifies the land as giving up, which connects to the theme of decay.

In the final stanza, time has changed everything. The railings have rusted "to lace," which is a metaphor that makes something ugly (rust) sound delicate and beautiful. "Birds own what people left behind" shows that nature has taken over from humans. The simile comparing the sea to "a clock" shows that time keeps going regardless. The final image of the pier receiving the sea "open-armed" like an old person who cannot prevent what is happening is sad because it suggests acceptance of decay and death.`,
      'Grade 6-7': `The poet structures the poem as a temporal triptych — present decay, remembered vitality, and philosophical acceptance — using the pier as a metaphor for ageing and the passage of time.

The opening stanza establishes decay through personification. The simile "listing like a drunk / who can\'t remember where he lives" is simultaneously comic and poignant: the enjambment across the line break creates a stumbling rhythm that mimics the pier\'s physical instability, while the image of forgetting "where he lives" transforms structural damage into a form of dementia, conflating the architectural with the human. The aural imagery of timbers groaning "like ships that never sailed" adds a layer of unfulfilled potential — the pier\'s sound evokes journeys never taken, ambitions unrealised.

The second stanza pivots to memory, and the shift in tone is achieved through specificity. The listing of "buckets, rods, and small ambitions" moves from concrete objects to abstract feelings, the adjective "small" conveying both modesty and tenderness. The phrase "where the land gives up" operates on two levels: literally, where the coastline ends, but figuratively, where the known world surrenders to the unknown. The caesura created by the dash before "a mackerel, perhaps" introduces a hesitancy that captures the tentative nature of hope.

The final stanza resolves the temporal structure with an image of acceptance. The metaphor "rust to lace" performs a transformation that is itself the poem\'s central insight: decay has its own beauty, its own artistry. The simile "indifferent as a clock" strips time of intentionality — the sea does not destroy the pier deliberately, just as time does not target the old. The closing lines, comparing the pier\'s openness to "the way the old receive what they cannot prevent," make the poem\'s allegorical meaning explicit without sentimentality. The verb "receive" is carefully chosen: it implies neither resistance nor welcome but a dignified passivity, an acceptance that is itself a form of grace.`,
      'Grade 8-9': `The poem enacts a meditation on temporality through a structure that mirrors the archaeological layers of the pier itself — the present visible surface, the buried past, and the philosophical substrate that connects them.

The opening stanza deploys personification not as decorative technique but as ontological argument: by comparing the pier to "a drunk / who can\'t remember where he lives," the poet collapses the distinction between structure and self, implying that places, like people, possess a form of memory that deterioration erodes. The enjambment across "a drunk / who can\'t remember" is formally precise — the line break creates a momentary suspension that replicates the drunk\'s unsteadiness, the second line arriving late and uncertain. The synesthetic image of timbers groaning "like ships that never sailed" layers sound onto absence: the pier was built for arrivals and departures, but the ships it evokes are imagined rather than real, and the groan becomes an expression of purposes unfulfilled. The subjunctive "never sailed" contains an entire counter-history of possibility.

The second stanza\'s shift to past vitality is achieved through the cataloguing technique — "buckets, rods, and small ambitions" — a list that moves from the tangible to the intangible with the precision of a zoom lens pulling back. The modifier "small" before "ambitions" is the stanza\'s emotional centre: it refuses to aggrandise the past, insisting instead that the pier\'s significance lay in the ordinary. The phrase "where the land gives up" achieves a remarkable compression — it is simultaneously geographical description (the coastline\'s end), existential metaphor (the boundary of the known), and proleptic echo of the poem\'s final theme of surrender. The line break after "satisfaction" delays the revelation that the satisfaction is modest — "of standing" — and this delay is itself satisfying, the form performing the pleasure of patience.

The final stanza achieves resolution through a series of transformations that refuse sentimentality. "Railings rust to lace" transforms corrosion into artistry through a metaphor that insists on the aesthetic dimension of entropy — an essentially Romantic claim that beauty is not diminished but restructured by time. The claim that "Birds own what people left behind" inverts the colonial narrative of possession: the pier, built to extend human dominion over the sea, has been reclaimed by the natural world, and the verb "own" grants to birds the very property rights that humans have forfeited. The simile "indifferent as a clock" is philosophically precise — a clock does not intend to measure time; it simply does so, and the sea\'s relationship to the pier is similarly devoid of agency or malice.

The poem\'s closing lines — "the pier receives it, open-armed, / the way the old receive what they cannot prevent" — consummate the human-structural allegory with an image of radical acceptance. The compound adjective "open-armed" operates in deliberate tension: it suggests welcome, but the subsequent qualification ("what they cannot prevent") reveals that the welcome is born of powerlessness, not generosity. This is not resignation but something more complex — a dignity that emerges precisely from the absence of alternatives. The final word, "prevent," ends the poem on a stressed syllable that closes like a door, and the absence of any subsequent image or commentary allows the reader to sit with the silence that follows, a formal equivalent of the pier\'s own patient waiting.`,
    },
    markScheme: [
      'Analyses how the poet uses language to present ideas about time and decay',
      'Explores the effects of specific images, metaphors, and similes',
      'Comments on form and structure (stanza organisation, line breaks, progression)',
      'Uses well-selected quotations embedded in analysis',
      'Considers the poet\'s overall purpose and the reader\'s response',
      'Develops a sustained personal interpretation',
    ],
    examinerTips: [
      'For unseen poetry, read the poem at least twice before writing.',
      'Comment on the overall journey of the poem — how does it develop from start to finish?',
      'Pay attention to form: line breaks, stanza divisions, and punctuation all create meaning.',
      'Offer a personal response: what does the poem make you think and feel?',
    ],
  },

  // ----------------------------------------
  // EDEXCEL LITERATURE (6 questions)
  // ----------------------------------------

  // Edexcel Literature — Macbeth Extract-Based 1
  {
    id: 'edexcel-lit-macbeth-extract-1',
    board: 'Edexcel',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth — Extract-Based (Banquo\'s Ghost)',
    extract: `Avaunt, and quit my sight! Let the earth hide thee!\nThy bones are marrowless, thy blood is cold;\nThou hast no speculation in those eyes\nWhich thou dost glare with!\n\nPrithee, see there! Behold! Look! Lo!\nIf I stand here, I saw him.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 3 Scene 4',
    question: 'Explore how Shakespeare presents Macbeth\'s guilt and fear in this extract and elsewhere in the play. You must refer to the context of the play in your answer. (40 marks — 15 AO1, 15 AO2, 10 AO3)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Macbeth as terrified and guilty after seeing Banquo\'s ghost at the banquet. He shouts "Avaunt, and quit my sight!" which means "go away," showing he is desperate to escape the vision. The exclamation marks show he is panicking. He describes the ghost\'s "bones" as "marrowless" and "blood" as "cold," which reminds us that Banquo is dead because Macbeth had him murdered. The word "speculation" means the ability to see or think, and Macbeth says the ghost\'s eyes have no intelligence in them, yet they still "glare" at him, which is frightening.

The series of commands "Behold! Look! Lo!" shows that Macbeth is losing control and trying to make other people see what he sees. But nobody else can see the ghost, which makes the other characters and the audience question his sanity.

Earlier in the play, Macbeth\'s guilt appears after he kills Duncan. He says "Will all great Neptune\'s ocean wash this blood clean from my hand?" which shows he feels his guilt can never be removed. The blood is a symbol of guilt that appears throughout the play. Before the murder, he also sees a floating dagger — "Is this a dagger which I see before me?" — which shows his guilty conscience was already creating hallucinations.

Shakespeare uses Macbeth\'s fear and guilt to show that crime does not go unpunished. A Jacobean audience would have believed that murdering a king was a sin against God because of the Divine Right of Kings. Macbeth\'s mental torment is his punishment, even before he is killed in battle at the end.`,
      'Grade 6-7': `Shakespeare dramatises guilt in this extract as a sensory assault that collapses the boundary between Macbeth\'s inner psychological state and external reality. The imperative "Avaunt, and quit my sight!" reveals a man attempting to command the supernatural with the same authority he uses as king, but the very need to issue such a command demonstrates his powerlessness — the ghost will not obey because it is a manifestation of Macbeth\'s conscience, not a subject of his kingdom.

The physical description of the ghost — "bones are marrowless," "blood is cold" — is significant because it forces Macbeth to confront the material reality of what he has done. Marrow and warm blood are signs of life, and their absence catalogues the vitality Macbeth has destroyed. The accusation that the ghost has "no speculation in those eyes" is psychologically complex: Macbeth denies the ghost the capacity for sight or thought, yet the glaring eyes torment him precisely because they seem to see and judge. This contradiction exposes the mechanism of guilt — the accuser is internal, projected outward as an external threat.

The staccato sequence "Behold! Look! Lo!" marks the complete disintegration of Macbeth\'s public composure. The monosyllabic, exclamatory commands compress language to its most basic level, suggesting a mind reduced to panic. This public breakdown is dramatically significant: the banquet scene represents Macbeth\'s attempt to consolidate power through social performance, and the ghost\'s appearance destroys the performance from within. Lady Macbeth\'s frantic attempts to explain his behaviour — "my lord is often thus" — only underscore the extent of the failure.

Shakespeare traces guilt as a progressive condition that intensifies with each crime. After Duncan\'s murder, guilt manifests as sensory disturbance: "Methought I heard a voice cry, \'Sleep no more!'" The insomnia that follows becomes both symptom and punishment — the man who murdered a sleeping king is denied sleep himself. The hallucinated dagger in Act 2 Scene 1 prefigures the ghost, establishing a pattern in which Macbeth\'s guilt takes visual, hallucinatory form. By Act 5, guilt has consumed Lady Macbeth entirely — her sleepwalking scene mirrors Macbeth\'s hallucinations but in a female register: where he shouts and commands, she whispers and scrubs.

Contextually, the ghost scene engages with Jacobean beliefs about the supernatural. James I, who wrote Daemonologie, believed firmly in the reality of spectral visitations, and the ambiguity of Banquo\'s ghost — visible to Macbeth but not to the other characters — would have been genuinely unsettling to an audience for whom the boundary between natural and supernatural was porous. Shakespeare uses this ambiguity to make guilt itself a form of haunting: whether the ghost is real or imagined, its effect on Macbeth is identical, because conscience cannot be distinguished from supernatural punishment.`,
      'Grade 8-9': `Shakespeare constructs guilt in this extract not as a moral emotion but as an epistemological crisis — a collapse of the categories through which Macbeth understands reality. The ghost of Banquo occupies an impossible ontological position: it is both present and absent, both seen and unseen, both dead and accusatory. Macbeth\'s command "Avaunt, and quit my sight!" attempts to reassert the boundary between the living and the dead that his own actions have dissolved, but the imperative mode — the language of kingship and authority — is precisely the wrong register for addressing a manifestation of conscience. You cannot command guilt to leave; you can only endure it.

The anatomical specificity of "bones are marrowless," "blood is cold" is a form of forensic denial — Macbeth catalogues the signs of death as though by demonstrating that the ghost is physically impossible, he can dismiss it. But this empirical argument collapses under the weight of its own evidence: the very details that prove Banquo cannot be present are the details that prove Macbeth killed him. The word "speculation" — meaning both sight and rational thought — is the extract\'s most loaded term. Macbeth claims the ghost lacks the capacity for intelligent observation, yet the "glare" contradicts him. This contradiction is the mechanism of guilt itself: the guilty mind projects judgement onto every surface, then protests that the judgement is unfounded, a recursive loop that Shakespeare dramatises through the oscillation between denial and terror.

The breakdown "Behold! Look! Lo!" represents the final evacuation of rhetorical control. These are not merely exclamations but performative speech acts: Macbeth is trying to make others see what he sees, to externalise his private torment and thereby validate it. The failure of this attempt — no one else can see the ghost — is the scene\'s most devastating moment, because it confirms that Macbeth\'s guilt is not only irremediable but incommunicable. He is imprisoned within a subjective reality that his subjects cannot share, and this isolation is the true punishment for regicide: the king who killed a king is cut off from the community of shared perception that kingship is supposed to guarantee.

Shakespeare architecturally embeds guilt into the play\'s dramatic structure. The dagger hallucination in Act 2 establishes the visual hallucination as Macbeth\'s characteristic guilt response; the voice crying "Sleep no more! Macbeth does murder sleep" translates guilt into an auditory register; the ghost scene combines both into a full sensory assault. This escalation traces the progressive colonisation of Macbeth\'s consciousness by the consequences of his actions. By Act 5, Macbeth has moved beyond guilt into something closer to affective numbness — "I have supped full with horrors; / Direness, familiar to my slaughter, / Cannot once start me" — but this is not resolution; it is the final stage of guilt\'s destruction, the point at which the self has been so thoroughly consumed that it can no longer register its own damage.

The contextual significance of the ghost scene extends beyond Jacobean supernaturalism. James I\'s Daemonologie provides one framework, but the scene also engages with classical precedents — the ghost at the feast echoes Seneca\'s Thyestes, a revenge tragedy in which the violated dead return to contaminate the living. Shakespeare synthesises these traditions to create a guilt that is simultaneously psychological, theological, and political. The public setting of the banquet is essential: Macbeth\'s guilt does not merely torment him privately but erupts into the political sphere, disrupting the feast that is supposed to cement his authority. The body politic mirrors the individual body — both are haunted, both are disintegrating, and both will ultimately collapse under the weight of the crime that inaugurated them.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents guilt and fear through language, imagery, and dramatic technique',
      'Explores the significance of specific words and phrases in the extract',
      'Discusses guilt and fear across the whole play with well-chosen references',
      'Considers relevant context (Jacobean beliefs, Divine Right, supernatural)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Shows understanding of Shakespeare\'s dramatic methods and purposes',
    ],
    examinerTips: [
      'Edexcel awards 10 marks for context (AO3) — weave it throughout your answer, do not bolt it on.',
      'Consider the dramatic effect: how does this scene work on stage and for the audience?',
      'The best responses connect guilt to wider themes: power, kingship, the natural order.',
      'Use the extract as a springboard but give equal weight to the rest of the play.',
    ],
  },

  // Edexcel Literature — Macbeth Extract-Based 2
  {
    id: 'edexcel-lit-macbeth-extract-2',
    board: 'Edexcel',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth — Extract-Based (The Witches)',
    extract: `When shall we three meet again\nIn thunder, lightning, or in rain?\n\nWhen the hurlyburly\'s done,\nWhen the battle\'s lost and won.\n\nFair is foul, and foul is fair:\nHover through the fog and filthy air.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 1 Scene 1',
    question: 'Explore how Shakespeare presents the supernatural as a disruptive force in this extract and elsewhere in the play. You must refer to the context of the play in your answer. (40 marks)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents the supernatural as strange and threatening from the very beginning of the play. The witches ask "When shall we three meet again in thunder, lightning, or in rain?" which immediately creates a dark, stormy atmosphere. The fact that they meet in bad weather suggests they are connected to chaos and danger.

The phrase "When the hurlyburly\'s done, when the battle\'s lost and won" is confusing because a battle is usually either lost or won, not both. This oxymoron suggests the witches see the world differently from normal people and can blur the line between victory and defeat. The rhyming couplets give their speech a chant-like quality, which makes them sound like they are casting a spell.

The most important line is "Fair is foul, and foul is fair," which means that good things are bad and bad things are good. This sets up the theme of the whole play where nothing is as it seems. Macbeth later echoes this when he says "So foul and fair a day I have not seen," which shows the witches\' influence is already affecting him without him knowing.

Elsewhere in the play, the witches appear in Act 1 Scene 3 to give Macbeth the prophecies that start his ambition. They also appear in Act 4 with the apparitions that give him false confidence. The supernatural disrupts Macbeth\'s life by tempting him to commit murder and making him overconfident.

Shakespeare\'s audience would have believed witches were real. King James I was very interested in witchcraft and even wrote a book about it. By presenting the witches as disruptive, Shakespeare was reflecting the fears of his time and perhaps flattering the king.`,
      'Grade 6-7': `Shakespeare positions the supernatural as the play\'s opening gesture, ensuring that disruption precedes order and that the audience\'s first experience of Macbeth\'s world is one of instability. The witches\' scene is only thirteen lines long, but it establishes the moral and linguistic framework for everything that follows.

The trochaic tetrameter — "When shall WE three MEET aGAIN" — inverts the iambic pentameter that will characterise the human characters\' speech. This metrical disruption is not accidental: the witches speak in a rhythm that contradicts the play\'s dominant heartbeat, formally encoding their position outside the natural order. The rhyming couplets — "again/rain," "done/won," "fair/air" — give their language the quality of incantation, each rhyme clicking shut like a lock, sealing the spell.

The paradox "When the battle\'s lost and won" establishes equivocation as the witches\' defining mode. They inhabit a logic in which contradictions coexist, where defeat and victory are simultaneous rather than opposed. This is disruptive at the deepest level: it undermines the binary categories — good/evil, truth/falsehood, natural/unnatural — on which social order depends. "Fair is foul, and foul is fair" is the play\'s thesis statement, a chiasmus that formally mirrors the inversion it describes. The consonant alliteration of "foul" and "fair" binds opposites together phonetically, making them linguistically inseparable.

The setting — "thunder, lightning, or in rain" — and the closing "fog and filthy air" construct the supernatural as a meteorological phenomenon, a disruption of the natural world that reflects the moral disruption the witches will cause. The pathetic fallacy here is inverted: rather than nature reflecting human emotion, the weather reflects supernatural intention, suggesting that the witches have the power to disorder creation itself.

Shakespeare extends the supernatural\'s disruptive power through the play\'s other hallucinations and portents: the floating dagger, the voice that cries "sleep no more," Banquo\'s ghost, and the apparitions in Act 4. Each of these moments shares the witches\' characteristic ambiguity — they could be supernatural visitations or psychological projections, and Shakespeare never resolves this question. The ambiguity itself is the disruption: by refusing to confirm whether the supernatural is real or imagined, Shakespeare leaves both his characters and his audience in a state of interpretive instability.

Contextually, James I\'s Daemonologie (1597) provided a theological framework in which witchcraft was both real and deeply threatening to the state. The witches\' ability to influence a potential king would have resonated with an audience aware of the Gunpowder Plot and the fragility of political order. Shakespeare uses the supernatural not merely as a dramatic device but as a political metaphor: forces that cannot be controlled by rational authority will always threaten the structures that authority builds.`,
      'Grade 8-9': `Shakespeare opens Macbeth with the supernatural not to establish a plot but to dismantle an epistemology. Before a single human character appears, the witches have invalidated the audience\'s capacity to distinguish between opposites — fair and foul, lost and won, thunder and action. This is disruption at the foundational level: not the disruption of events but the disruption of the categories through which events are understood.

The formal properties of the witches\' speech are themselves agents of disruption. The trochaic tetrameter — stressed-unstressed, the inverse of the iambic pentameter that Renaissance drama coded as the rhythm of rational, civilised speech — creates a falling rhythm that linguistically enacts descent. Where iambic pentameter rises (da-DUM), the witches\' metre falls (DUM-da), and this prosodic inversion mirrors the moral inversion their words describe. The rhyming couplets produce a paradoxical effect: they impose a rigid acoustic order on content that is semantically chaotic, creating a form of language in which sound and sense are in perpetual tension. This is incantation — language that does not describe reality but seeks to alter it — and its presence at the play\'s opening establishes that the world of Macbeth is one in which words have material power.

"Fair is foul, and foul is fair" is the play\'s most analysed line, but its formal properties deserve closer attention than its semantic content typically receives. The chiasmus — AB/BA — creates a closed linguistic loop, a structure without exit, and this enclosure formally represents the trap that the witches\' logic constitutes: once fair and foul are interchangeable, moral reasoning becomes impossible because there is no stable ground from which to evaluate action. The alliterative binding of "fair" and "foul" makes the words phonetically adjacent, and this acoustic proximity performs the conceptual collapse the line describes. When Macbeth later echoes the phrase — "So foul and fair a day I have not seen" — the repetition demonstrates that the witches\' language has infiltrated his consciousness before they have even met him. The supernatural\'s disruption is not confined to direct interaction but operates through a contagion of speech, a viral linguistics that spreads through echo and repetition.

The paradox "lost and won" deserves particular attention because it anticipates the play\'s treatment of every subsequent binary. Macbeth\'s victories are defeats; his kingship is his destruction; his security is his vulnerability. The witches\' equivocal language does not merely predict these paradoxes but produces them: the prophecies in Act 1 Scene 3 ("Thane of Cawdor," "King hereafter") are simultaneously true and misleading, offering Macbeth accurate information that leads to catastrophic conclusions. The apparitions in Act 4 repeat this pattern with refined cruelty: "none of woman born" and "until Great Birnam Wood" are literally true but functionally false, and their equivocation destroys Macbeth more effectively than any direct assault because they weaponise the gap between language and meaning.

Shakespeare\'s engagement with the supernatural is inseparable from its political context. James I\'s dual identity as author of Daemonologie and patron of Shakespeare\'s company creates a specific dynamic: the play simultaneously validates the king\'s beliefs about witchcraft and dramatises the vulnerability of kingship to supernatural manipulation. But Shakespeare\'s treatment is more subtle than royal flattery. By making the witches\' power operate primarily through language — through prophecy, equivocation, and the dissolution of semantic categories — he transforms the supernatural from a folk belief into an investigation of how meaning itself can be corrupted. The witches are dangerous not because they command storms or conjure apparitions but because they demonstrate that language, the instrument through which political and moral order is maintained, can be turned against itself. In this reading, the supernatural is not an external force that disrupts a stable world but a revelation that stability was always an illusion, maintained only by the fragile consensus that fair means fair and foul means foul.`,
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
      'Consider the witches\' language as a dramatic technique, not just as speech.',
      'The best responses connect the supernatural to themes of power, language, and order.',
      'Context about James I and witchcraft should deepen your analysis, not sit separately.',
      'Do not just describe what happens — analyse how and why Shakespeare constructs meaning.',
    ],
  },

  // Edexcel Literature — A Christmas Carol (Scrooge's Transformation)
  {
    id: 'edexcel-lit-acc-transform-1',
    board: 'Edexcel',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol — Scrooge\'s Transformation',
    extract: `He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world. Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good, at which some people did not have their fill of laughter in the outset.`,
    extractSource: 'Written in the style of Charles Dickens\'s A Christmas Carol, Stave 5',
    question: 'Explore how Dickens presents Scrooge\'s transformation in this extract and in the novella as a whole. (40 marks)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens presents Scrooge as completely changed from the cold, selfish man he was at the beginning. He is now described as "as good a friend, as good a master, and as good a man" which shows he has become kind in every part of his life — personally, professionally, and morally. The repetition of the word "good" six times in the first sentence emphasises how thoroughly he has changed.

When people laugh at his transformation, Scrooge does not care because "he was wise enough to know" that good changes are always mocked at first. This shows he has not only become kind but also wise. The old Scrooge would have been angry or dismissive, but the new Scrooge is patient and understanding.

At the beginning of the novella, Scrooge is described as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner." The list of horrible adjectives shows how mean and greedy he was. He refuses to donate to charity, saying the poor should go to the workhouses, and he treats his clerk Bob Cratchit very badly, making him work in a freezing office.

The three ghosts cause his transformation. The Ghost of Christmas Past shows him how he lost the ability to love, especially when Belle leaves him because he cares more about money. The Ghost of Christmas Present shows him the Cratchit family, especially Tiny Tim, who is ill but happy. The Ghost of Christmas Yet to Come shows him his own lonely death, which finally terrifies him into changing.

Dickens wrote A Christmas Carol to make wealthy Victorians care about the poor. By showing that even someone as mean as Scrooge can change, Dickens is saying that everyone has the ability to become generous and compassionate. The transformation is his message of hope for Victorian society.`,
      'Grade 6-7': `Dickens constructs Scrooge\'s transformation in this extract as comprehensive, public, and enduring — a deliberate rebuttal of the isolation and selfishness that defined him in Stave 1. The tricolon "as good a friend, as good a master, and as good a man" maps transformation onto three domains — social, economic, and moral — suggesting that genuine change must permeate every aspect of existence. The repetition of "good" — six times in a single sentence — is stylistically unusual for Dickens, whose prose typically favours variety, and its deliberate insistence creates an incantatory effect that mirrors the supernatural transformation that produced it.

The detail about people laughing at the "alteration" is significant because it acknowledges the social resistance to moral change. Scrooge\'s response — "he let them laugh, and little heeded them" — demonstrates a new emotional security: the man who was once so armoured against human connection that he dismissed Christmas as "Humbug!" now possesses the equanimity to absorb mockery without retreating. The narrative voice\'s observation that "nothing ever happened on this globe, for good, at which some people did not have their fill of laughter" extends Scrooge\'s wisdom to a universal principle, positioning his transformation as part of a pattern of human progress that is always initially resisted.

Dickens structures the novella as a process of progressive emotional excavation. The Ghost of Christmas Past does not merely show Scrooge his history but reconnects him with the feelings he has suppressed. The memory of his lonely childhood in the boarding school — and his subsequent tears — demonstrates that Scrooge\'s cruelty is a defence mechanism against vulnerability. Belle\'s departure provides the pivotal moment: she tells him that "a golden idol has displaced me," identifying avarice as a substitute for love. The Ghost of Christmas Present confronts Scrooge with the present consequences of his philosophy through the Cratchit family, whose warmth and generosity despite poverty offers a direct contrast to Scrooge\'s wealth and misery. Tiny Tim\'s potential death — "I see a vacant seat... and a crutch without an owner" — translates Scrooge\'s economic callousness into a specific, personal consequence.

The Ghost of Christmas Yet to Come completes the process through fear rather than sentiment. The image of Scrooge\'s unmourned death — his possessions stolen, his name unremembered — confronts him with the logical endpoint of his philosophy: absolute isolation. Dickens ensures that transformation arrives not through rational persuasion but through emotional shock, a pattern consistent with his belief that social reform required a change of heart, not just a change of policy.

Contextually, the novella was written in 1843, a period of acute social crisis. The 1842 Mines Report and the Poor Law Amendment Act had exposed the conditions of the working poor, and Dickens — who had experienced childhood poverty in the blacking factory — used the novella as an accessible vehicle for social criticism. Scrooge\'s transformation dramatises the possibility that the wealthy could be moved to generosity, a message directed specifically at the Victorian middle class whose charitable impulse Dickens sought to activate.`,
      'Grade 8-9': `Dickens constructs Scrooge\'s transformation in this extract with a rhetorical excess that is itself part of the novella\'s argument. The sixfold repetition of "good" in a single sentence is not carelessness but strategy: it overwhelms the reader\'s critical faculties in precisely the way that Scrooge\'s transformation overwhelms his former self, substituting abundance for the parsimony that characterised both his language and his life. The tricolon "as good a friend, as good a master, and as good a man" maps moral reformation onto the three spheres of Victorian male identity — the personal, the economic, and the ethical — and the escalating significance of each term (from "friend" to "master" to "man") traces a movement from the relational to the essential, from what Scrooge does to what he is.

The passage\'s most sophisticated moment is its treatment of social resistance. "Some people laughed to see the alteration in him, but he let them laugh, and little heeded them" acknowledges that transformation provokes scepticism, and Scrooge\'s indifference to mockery demonstrates a security that his former self — obsessively defensive, dismissive of sentiment — could never have achieved. The narrative voice\'s generalisation — "nothing ever happened on this globe, for good, at which some people did not have their fill of laughter" — performs a characteristic Dickensian manoeuvre: it extracts a universal principle from a particular instance, elevating Scrooge\'s personal redemption into a model of human progress. The phrase "for good" operates as a double entendre — both "permanently" and "for the benefit of" — and this linguistic richness is itself a marker of the transformed Scrooge, whose earlier speech was characterised by the impoverished monosyllable "Humbug!"

Dickens designs the novella\'s structure as a systematic dismantling of Scrooge\'s psychological defences. Stave 1 establishes those defences with almost clinical precision: the catalogue of predatory adjectives — "squeezing, wrenching, grasping, scraping, clutching, covetous" — performs a verbal inventory of avarice, each participle describing a different physical action of acquisition. This language constructs Scrooge as a mechanism rather than a person, a point reinforced by the famous description of him as "solitary as an oyster" — a simile that encodes both isolation and the hard shell that protects it. Marley\'s ghost initiates the process of cracking that shell, and the subsequent visitations work through different emotional registers: nostalgia and loss (Past), empathy and shame (Present), terror (Yet to Come).

The Ghost of Christmas Past operates through the recovery of suppressed affect. Young Scrooge at the boarding school is the novella\'s emotional key: the boy weeping in an empty room establishes that Scrooge\'s cruelty is a response to abandonment, a defensive structure built around a wound. Belle\'s departure crystallises the mechanism — she identifies that "another idol has displaced me," naming money as a substitute attachment object — and the older Scrooge\'s anguished response ("Remove me! I cannot bear it!") demonstrates that the feelings he has spent decades suppressing remain operative. This is Dickens\'s psychological insight: transformation is not the creation of new feelings but the reactivation of feelings that were always present.

The Ghost of Christmas Present shifts the register from personal memory to social conscience. The Cratchit family functions as an embodied argument against Scrooge\'s Malthusian philosophy — his earlier question "Are there no prisons? Are there no workhouses?" is answered by the spectacle of a family whose poverty is not a moral failing but a structural consequence of the system Scrooge profits from. Tiny Tim is Dickens\'s most calculated emotional weapon: a dying child whose death is directly attributable to the economic conditions that Scrooge perpetuates. The allegorical figures of Ignorance and Want, hidden beneath the Ghost\'s robes, universalise this argument — they are not the Cratchits\' children but society\'s, and the warning "Beware them both" directs the reader\'s attention from individual charity to systemic reform.

The novella\'s power as social criticism lies in its formal choice: the fairy tale. By casting economic injustice as a supernatural narrative with a redemptive arc, Dickens makes social reform emotionally accessible in a way that parliamentary reports could not. The transformation is deliberately excessive — Scrooge does not merely become adequate but becomes the best friend, master, and man in the city — because Dickens understood that political persuasion requires not just intellectual agreement but emotional conversion. The novella does not argue for the welfare state; it creates the feeling that makes the welfare state imaginable.`,
    },
    markScheme: [
      'Analyses how Dickens presents Scrooge\'s transformation through language and narrative structure',
      'Explores specific words, phrases, and rhetorical techniques in the extract',
      'Traces the transformation across all five staves of the novella',
      'Considers relevant context (Victorian poverty, Dickens\'s social purpose, the Poor Law)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised response to the nature and purpose of transformation',
    ],
    examinerTips: [
      'The transformation is a process, not an event — trace how it develops across the whole novella.',
      'Connect Scrooge\'s personal change to Dickens\'s wider social message.',
      'The ghosts are not just characters — they are structural devices. Analyse what each one achieves.',
      'The best answers consider why Dickens chose this form (a fairy tale / ghost story) for a social message.',
    ],
  },

  // Edexcel Literature — A Christmas Carol (Social Criticism)
  {
    id: 'edexcel-lit-acc-social-1',
    board: 'Edexcel',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol — Social Criticism',
    extract: `"Are there no prisons?" asked Scrooge.\n"Plenty of prisons," said the gentleman.\n"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"\n"They are. Still," returned the gentleman, "I wish I could say they were not."\n"The Treadmill and the Poor Law are in full vigour, then?" said Scrooge.\n"Both very busy, sir."\n"Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course," said Scrooge. "I\'m very glad to hear it."`,
    extractSource: 'Written in the style of Charles Dickens\'s A Christmas Carol, Stave 1',
    question: 'Explore how Dickens uses the character of Scrooge to present ideas about social responsibility in this extract and in the novella as a whole. (40 marks)',
    marks: 40,
    timing: '55 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens shows Scrooge as someone who does not care about poor people at all. When asked to give money to charity, Scrooge asks "Are there no prisons?" and "And the Union workhouses?" This shows he thinks the poor should be dealt with by the government through harsh institutions, not by individual kindness. He calls prisons and the treadmill part of a "useful course," which shows he thinks punishing poor people is a good thing.

The word "demanded" is used instead of "asked," which shows Scrooge is aggressive and impatient. When the charity collector says he wishes workhouses did not exist, Scrooge ignores his feelings completely and says he is "very glad to hear" they are still operating. This makes Scrooge seem cold and heartless.

Throughout the novella, Dickens criticises this attitude. When the Ghost of Christmas Present shows Scrooge the Cratchit family, he sees that Bob Cratchit is poor because Scrooge pays him very little, yet the family is loving and happy despite their poverty. Tiny Tim is ill and may die, which shows that Scrooge\'s meanness has real consequences for real people.

The Ghost also reveals two children called Ignorance and Want hiding under his robes, which represent the problems in society. The Ghost warns Scrooge to "beware them both" but especially Ignorance. This is Dickens telling the reader that society\'s biggest problem is not poverty itself but the fact that wealthy people choose to ignore it.

Dickens wrote the novella in 1843 when many people in England were very poor. The Poor Law of 1834 had created workhouses where conditions were deliberately harsh to discourage people from asking for help. Dickens hated this system and used Scrooge to show how wrong it was to blame poor people for being poor.`,
      'Grade 6-7': `Dickens constructs this exchange as a dialogue in which Scrooge\'s moral bankruptcy is exposed through his own words. The stichomythic structure — rapid alternation between speakers — gives the scene a forensic quality, as though Scrooge is being cross-examined and convicting himself with every answer. His catalogue of institutions — "prisons," "Union workhouses," "the Treadmill," "the Poor Law" — reveals a mind that has outsourced compassion to bureaucracy, converting the suffering of individuals into administrative categories.

The word "useful" is the extract\'s most revealing adjective. Scrooge describes the punitive machinery of the Poor Law as a "useful course," a phrase that exposes the utilitarian calculus underlying his worldview: the poor are a problem to be managed, not people to be helped. The sarcastic politeness of "I\'m very glad to hear it" adds cruelty to indifference — Scrooge is not merely uncharitable but actively pleased that systems of punishment are functioning. The reporting verb "demanded" positions Scrooge as interrogator rather than conversationalist, his language performing the power imbalance that the scene describes.

Dickens uses the entire novella to systematically dismantle the philosophy this extract articulates. Each ghost counters a specific aspect of Scrooge\'s worldview. The Ghost of Christmas Past shows that Scrooge was not always like this — his empathy was destroyed by specific experiences of abandonment and loss, suggesting that callousness is made, not innate. The Ghost of Christmas Present offers the Cratchit family as a living rebuttal to Scrooge\'s dismissal: their poverty is not a result of laziness but of exploitation, and their dignity in the face of hardship challenges the assumption that the poor deserve their suffering. The allegorical children, Ignorance and Want, escalate the critique from the personal to the systemic — they are not Scrooge\'s creation but society\'s, and the Spirit\'s warning to "beware them both, and all of their degree, but most of all beware this boy" identifies wilful ignorance as more dangerous than poverty itself.

The Ghost of Christmas Yet to Come confronts Scrooge with the ultimate consequence of his philosophy: a death so lonely that his possessions are stolen and his corpse lies unwatched. The parallel with Tiny Tim\'s death — one mourned extravagantly, the other not at all — demonstrates that the value society places on a life is directly related to the love invested in it, not the wealth accumulated.

Contextually, Dickens was responding to the 1834 Poor Law Amendment Act, which created a system of workhouses designed to be so unpleasant that only the truly desperate would enter them. The principle of "less eligibility" — that workhouse conditions should be worse than the worst available employment — was precisely the kind of institutional cruelty that Scrooge endorses. Dickens had also read the Parliamentary Blue Books on child labour and had visited the ragged schools of Field Lane, experiences that fuelled the novella\'s anger. By making the reader empathise with the Cratchits and despise Scrooge, Dickens converts abstract social criticism into personal emotional engagement.`,
      'Grade 8-9': `Dickens engineers this exchange as a masterclass in dramatic self-incrimination. Scrooge\'s interrogative mode — "Are there no prisons?" "And the Union workhouses?" "The Treadmill and the Poor Law are in full vigour, then?" — catalogues the machinery of institutionalised cruelty with the satisfied thoroughness of an investor checking his portfolio. Each question is rhetorical in the truest sense: Scrooge already knows the answers and asks not for information but for confirmation that the systems protecting him from moral obligation are still operational. The escalating specificity — from "prisons" (general) to "Union workhouses" (specific legislation) to "the Treadmill" (specific punishment) — traces the Victorian Poor Law\'s punitive logic to its literal endpoint: the mechanical degradation of human bodies.

The adjective "useful" is the extract\'s ideological fulcrum. It performs the linguistic operation that makes institutional cruelty possible: the transformation of human suffering into administrative efficiency. By describing the Poor Law as a "useful course," Scrooge adopts the discourse of political economy — specifically, the Malthusian argument that poverty is a natural check on population growth and should not be alleviated by charity. Dickens despised this position, having attacked it directly in Oliver Twist and his journalism, and he constructs Scrooge as its dramatic embodiment: a character who has so thoroughly internalised the language of utility that he can no longer perceive the humanity it erases.

The formal structure of the exchange — its stichomythia, its restrained civility, its veneer of reasonable discourse — is itself part of Dickens\'s critique. The charity collector\'s quiet interjection — "I wish I could say they were not" — introduces a note of moral anguish that Scrooge entirely fails to register, and this failure of perception is more damning than active cruelty. Scrooge does not oppose charity because he has considered the arguments and found them wanting; he opposes it because the suffering of others is simply invisible to him, screened by the institutional apparatus he catalogues with such satisfaction.

Dickens structures the novella so that each supernatural visitation removes one layer of this screen. The Ghost of Christmas Past establishes that Scrooge\'s callousness is a learned behaviour — the lonely boy at the boarding school possessed empathy, and its destruction was a process, not a given. This is politically significant: if callousness is constructed, it can be deconstructed, and the novella\'s redemptive arc is therefore an argument for the possibility of social reform. The Ghost of Christmas Present delivers the novella\'s most direct social criticism through the allegorical children, Ignorance and Want. These figures operate at a different register from the rest of the text — they are not characters but concepts made flesh, and their appearance beneath the Ghost\'s robes suggests that the abundance of Christmas (and, by extension, of a wealthy society) conceals rather than eliminates poverty. The Ghost\'s instruction to "beware this boy" — Ignorance — echoes Dickens\'s conviction that social reform requires not just economic redistribution but a transformation of consciousness: the wealthy must first learn to see the poor as human before they will act to help them.

The novella\'s choice of form — the Christmas ghost story — is inseparable from its social purpose. Dickens rejected the pamphlet he had originally planned (to be titled "An Appeal to the People of England on Behalf of the Poor Man\'s Child") in favour of fiction because he understood that emotional persuasion operates differently from rational argument. The ghost story permits what the essay cannot: the literal haunting of the comfortable by the consequences of their comfort. Scrooge\'s transformation is not a policy proposal but a moral demonstration, and its power lies in the reader\'s identification with the process — not merely observing change but imaginatively experiencing it. By making social responsibility a matter of feeling rather than argument, Dickens created a text that has influenced charitable behaviour for nearly two centuries, outlasting every parliamentary report that addressed the same conditions. The novella is itself a haunting: it visits the reader, shows them what they would prefer not to see, and demands a response.`,
    },
    markScheme: [
      'Analyses how Dickens uses Scrooge to criticise Victorian attitudes to the poor',
      'Explores specific language choices and their effects in the extract',
      'Discusses social responsibility across the whole novella',
      'Considers relevant context (the Poor Law, Malthusianism, Victorian poverty, Dickens\'s purpose)',
      'Uses well-integrated quotations to support a sustained argument',
      'Develops a conceptualised response linking character to social criticism',
    ],
    examinerTips: [
      'Always connect Scrooge\'s attitudes to their real-world Victorian context.',
      'The best responses treat the novella as a deliberate social intervention, not just a story.',
      'Analyse Dickens\'s methods: why a ghost story? Why a fairy-tale structure?',
      'Consider the role of each ghost in challenging the philosophy Scrooge expresses here.',
    ],
  },

  // Edexcel Literature — Poetry Anthology Comparison
  {
    id: 'edexcel-lit-poetry-comp-1',
    board: 'Edexcel',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Anthology Comparison — Relationships',
    extract: `Poem A — "Sonnet 43" by Elizabeth Barrett Browning (extract):\n"How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height\nMy soul can reach, when feeling out of sight\nFor the ends of being and ideal grace.\nI love thee to the level of every day\'s\nMost quiet need, by sun and candle-light."\n\nCompare with one other poem from the Relationships anthology.`,
    extractSource: 'Poetry anthology extract',
    question: 'Compare how the poets present intense feelings of love in "Sonnet 43" and one other poem from the Relationships anthology. (20 marks)',
    marks: 20,
    timing: '35 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Sonnet 43" by Elizabeth Barrett Browning and "Valentine" by Carol Ann Duffy present intense feelings of love, but they do so in very different ways.

In "Sonnet 43," Browning uses the Petrarchan sonnet form to express a love that is grand and spiritual. The opening question "How do I love thee?" introduces the idea that her love is so great she needs to "count the ways." She uses spatial metaphors — "depth and breadth and height" — to show that her love fills every dimension. The phrase "when feeling out of sight / For the ends of being" suggests her love extends beyond the physical world into something spiritual. She also shows that love is part of everyday life — "by sun and candle-light" — meaning she loves constantly, day and night.

In "Valentine," Duffy takes a very different approach. Instead of traditional romantic imagery, she offers an onion as a symbol of love. "I give you an onion" is surprising and unromantic, which immediately challenges the reader\'s expectations. The onion\'s layers represent the stages of a relationship, and the line "it will blind you with tears like a lover" suggests that love causes pain as well as joy. The possessive tone at the end — "its scent will cling to your knife" — is almost threatening, showing that love leaves a permanent mark.

Both poets present love as all-consuming, but Browning presents it as entirely positive and uplifting, while Duffy acknowledges its darker, more possessive aspects. Browning uses traditional poetic form and language, while Duffy deliberately rejects convention to show that real love is complicated.`,
      'Grade 6-7': `Browning and Duffy both explore love as a force that overwhelms conventional expression, but their formal strategies for handling this inexpressibility are diametrically opposed: Browning expands into abstraction, Duffy contracts into the physical.

Browning\'s sonnet opens with the rhetorical question "How do I love thee?" — a question that the poem simultaneously attempts and fails to answer, since the implied premise is that love exceeds the capacity of language. The subsequent spatial metaphors — "depth and breadth and height" — attempt to quantify the unquantifiable, using the vocabulary of measurement to describe an emotion that resists measurement. The tricolon creates a sense of three-dimensional fullness, as though love occupies all available space. The phrase "when feeling out of sight / For the ends of being and ideal grace" elevates love to a spiritual plane; the enjambment across "sight / For" creates a reaching quality that formally enacts the soul\'s extension towards the transcendent. Yet Browning anchors this abstraction in the quotidian — "to the level of every day\'s / Most quiet need, by sun and candle-light" — insisting that intense love manifests not only in grand gestures but in daily constancy.

Duffy\'s "Valentine" refuses the Petrarchan tradition that Browning inhabits. The blunt declaration "I give you an onion" is a deliberate affront to poetic convention — the absence of a verb of feeling ("I love") and the substitution of a domestic object for a symbol of romance performs the poem\'s central argument: that authentic love requires honest language, not inherited cliche. The onion as extended metaphor generates meanings that the traditional rose cannot: its layers suggest complexity and gradual revelation; the tears it produces acknowledge that love involves pain; its lingering scent implies that love persists whether or not it is wanted. The line "its scent will cling to your knife" introduces an unsettling possessiveness — the imagery of clinging and cutting suggests that love, once given, cannot be cleanly removed.

The formal contrast is revealing. Browning\'s Petrarchan sonnet — fourteen lines, ABBA rhyme scheme, iambic pentameter — uses inherited form to contain overwhelming emotion, the strict structure functioning as a vessel for feeling that might otherwise become formless. Duffy\'s free verse, with its irregular line lengths and absence of rhyme, formally rejects containment, suggesting that modern love requires a form as unpredictable as the emotion itself. Both poems, however, share a quality of intensity that transcends their formal differences: Browning\'s repetitive anaphora ("I love thee... I love thee") and Duffy\'s imperative repetitions ("Take it" / "I give you an onion") both use rhetorical insistence to convey the urgency of love that demands expression.`,
      'Grade 8-9': `Browning and Duffy occupy positions at opposite ends of a tradition that both poets simultaneously inhabit and interrogate: the attempt to render the intensity of love in language that is adequate to the experience. Browning works within the Petrarchan sonnet form — the originary structure of Western love poetry — and pushes its conventions to their limits; Duffy explodes those conventions from the outside, substituting the domestic for the sublime. Yet both arrive, by radically different routes, at the same paradox: that the most intense feelings are the ones that language is least equipped to express.

Browning\'s opening gambit — "How do I love thee? Let me count the ways" — establishes a mathematical metaphor that the poem immediately overwhelms. The verb "count" promises enumeration, but the spatial abstractions that follow — "depth and breadth and height" — refuse to be counted because they describe dimensions, not units. This is the poem\'s formal engine: the tension between the finite structure of the sonnet (fourteen lines, a countable form) and the infinite feeling it attempts to contain. The enjambment "when feeling out of sight / For the ends of being and ideal grace" performs the soul\'s reaching beyond its own boundaries — "out of sight" is both literal (beyond vision) and figurative (beyond comprehension) — and the phrase "ideal grace" introduces a Platonic dimension, suggesting that love participates in a transcendent form that earthly expression can only approximate. The subsequent descent to the quotidian — "every day\'s / Most quiet need, by sun and candle-light" — is not a diminishment but a completion: Browning argues that love\'s intensity is measured not by its most exalted moments but by its constant, unremarkable presence, the way it inhabits "quiet need" as fully as it inhabits "the ends of being."

Duffy\'s "Valentine" begins by refusing the terms of the tradition Browning exemplifies. "Not a red rose or a satin heart" — the negatives arrive before the gift, establishing the poem\'s method of definition by exclusion. The onion is presented not as a symbol of love but as love itself — "I give you an onion" — and the directness of this declaration contains an implicit critique of the Petrarchan tradition\'s tendency to substitute rhetoric for honesty. The onion\'s concentric layers function as a structural metaphor for the poem\'s argument: love is not a surface phenomenon but something that must be opened, layer by layer, and the process of revelation inevitably produces tears. The line "It will blind you with tears / like a lover" uses the simile to startling effect — the onion does what a lover does, and the equation of the inanimate with the intimate creates a defamiliarisation that forces the reader to re-examine the nature of romantic feeling.

The poems\' treatment of permanence reveals their deepest divergence. Browning locates love\'s permanence in the spiritual — "I shall but love thee better after death" — employing the future tense to project love beyond mortality into the eternal. This is consistent with the Victorian equation of romantic love with religious devotion, and the poem\'s sonnet form, with its centuries-old lineage, formally embodies the endurance it describes. Duffy\'s permanence is more troubling: "Its scent will cling to your knife" transforms persistence into something closer to contamination, the verb "cling" carrying connotations of desperate attachment, while "knife" introduces violence into a love poem\'s closing image. Where Browning\'s love transcends the body, Duffy\'s inhabits it with an insistence that is simultaneously passionate and threatening, and the ambiguity of this final image — is it a promise or a warning? — captures the complexity of modern love in a way that the Petrarchan tradition\'s certainties cannot accommodate.`,
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
      'Structure comparatively — do not write about one poem then the other.',
      'Compare methods, not just themes: how does form shape the expression of love?',
      'The best responses find unexpected connections as well as obvious differences.',
      'For Edexcel, 20 marks means a focused, concise response — do not overwrite.',
    ],
  },

  // Edexcel Literature — Unseen Poetry
  {
    id: 'edexcel-lit-unseen-1',
    board: 'Edexcel',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `First Snow\n\nThe garden has forgotten how to be itself.\nEvery blade, every branch, every bin lid\nis someone else — anonymous and clean.\n\nThe children have run out without their coats\nbecause joy is urgent and cannot wait\nfor zips.\n\nA blackbird stands on the white lawn\nlike a full stop on an empty page,\nthe only word the morning needs.`,
    extractSource: 'Original poem written for this exercise',
    question: 'In "First Snow," how does the poet use language and structure to present the experience of snow? (20 marks)',
    marks: 20,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet presents snow as something that transforms the world and brings excitement. The opening line "The garden has forgotten how to be itself" uses personification to show that the snow has changed everything so much that the garden is unrecognisable. The listing of "every blade, every branch, every bin lid" uses repetition of "every" to show that the snow covers absolutely everything.

The phrase "anonymous and clean" describes how the snow makes everything the same — you cannot tell what is underneath. The word "anonymous" means without a name or identity, which shows how snow hides the familiar world.

The second stanza shows the excitement snow causes. The children "run out without their coats" because they are so excited. The phrase "joy is urgent and cannot wait for zips" is a lovely image that personifies joy as something that rushes and will not slow down. The short word "zips" on its own line creates a sudden stop that mirrors the children\'s impatience.

The final image of the blackbird on the white lawn "like a full stop on an empty page" is a simile comparing the snowy garden to a blank page. This suggests the snow has erased everything and the blackbird is the only mark on it. The phrase "the only word the morning needs" suggests that sometimes one simple thing is enough, and beauty can be found in simplicity.`,
      'Grade 6-7': `The poet presents snow as an act of erasure and renewal, using imagery that connects the natural world to the act of writing. The opening personification — "The garden has forgotten how to be itself" — attributes a cognitive process to the landscape, suggesting that snow does not merely cover the garden but alters its identity. The verb "forgotten" implies that the garden\'s true nature still exists beneath the surface but is temporarily inaccessible, a loss that is presented as liberating rather than threatening.

The tricolon "every blade, every branch, every bin lid" uses anaphoric repetition to create a catalogue that moves from the natural to the domestic. The inclusion of the mundane "bin lid" alongside the poetic "blade" and "branch" insists that snow\'s transformative power is democratic — it beautifies the ugly as readily as the already beautiful. The description "anonymous and clean" completes the transformation: the adjective "anonymous" strips objects of their individual identity, while "clean" carries connotations of purity and fresh starts.

The second stanza shifts from observation to action. The children running out "without their coats" is an image of physical abandon that contrasts with the stillness of the first stanza. The enjambed assertion that "joy is urgent and cannot wait / for zips" is the poem\'s most formally inventive moment: the line break after "wait" creates a pause that mimics the impatience it describes, and the isolation of "for zips" on its own line — a single monosyllabic word after an abstract philosophical claim — produces a bathetic drop from the sublime to the practical that is simultaneously comic and profound.

The closing stanza achieves resolution through the extended simile of blackbird as "full stop on an empty page." This image performs a double function: it describes a visual scene (black bird on white ground) while simultaneously constructing the poem as a self-referential act. If the snow is an "empty page," then the poem we are reading is itself an attempt to write on that blankness, and the blackbird — "the only word the morning needs" — suggests that the best response to beauty is not elaboration but restraint. The poem practises what it preaches: at only nine lines, it is itself a minimal mark on the page, a "full stop" that says everything by saying very little.`,
      'Grade 8-9': `The poem constructs snow as an epistemological event — not merely a meteorological phenomenon but a transformation in the conditions of knowing. The opening line\'s personification, "The garden has forgotten how to be itself," attributes to the landscape a form of identity crisis that is also, paradoxically, a liberation. The verb "forgotten" is precisely calibrated: it implies neither permanent loss nor violent erasure but a temporary suspension of the garden\'s accumulated identity — its weeds, its neglect, its familiarity — beneath a surface of undifferentiated white. The anaphoric catalogue "every blade, every branch, every bin lid" traces a descending hierarchy from the pastoral to the prosaic, and the inclusion of "bin lid" is the poem\'s most deliberate choice: it insists that snow\'s beauty is indiscriminate, transforming waste into wonder with the same equanimity it brings to grass and trees. The adjective "anonymous" is loaded — in an age of surveillance and data, anonymity is itself a form of freedom, and the snow grants the garden the privacy of blankness.

The second stanza performs a tonal shift from contemplation to urgency through a single, decisive image. The children who "run out without their coats" embody a pre-rational response to beauty — their joy bypasses the adult mechanisms of caution and preparation. The enjambment "cannot wait / for zips" is a formal tour de force: the abstract noun "joy" is given the kinetic properties of a physical force, and the line break enacts the very impatience it describes, the reader\'s eye leaping from "wait" to the bathos of "zips" with a velocity that mirrors the children\'s rush. The monosyllable "zips" — placed alone, isolated by white space — is simultaneously a concrete noun and an onomatopoeic verb, its sound replicating the sharp, quick action of a zip that is not, in this case, being used. The stanza\'s argument — that authentic response to beauty is incompatible with practical preparation — carries implications beyond the literal: it suggests that the impulse to organise, categorise, and prepare (the adult impulse, the analytical impulse) is antithetical to the experience it seeks to preserve.

The final stanza resolves the poem through the governing metaphor that has been implicit from the opening: snow as blank page. The blackbird standing "like a full stop on an empty page" completes the transformation of landscape into text, and the simile operates at several levels simultaneously. Visually, it captures the stark contrast of black on white with photographic precision. Grammatically, a full stop is a mark of completion, and by identifying the blackbird as such, the poet suggests that the snowy morning is a finished sentence — complete in itself, requiring no addition. The appositive phrase "the only word the morning needs" extends the metaphor into a philosophy of sufficiency: in the presence of beauty, less is more, and the attempt to describe exhaustively is a form of desecration. The poem enacts this philosophy through its own brevity — nine lines, three stanzas, no excess — making its form an argument for the aesthetic restraint its content advocates. The reader is left with the image of the blackbird: still, precise, and sufficient, a mark on the morning\'s blankness that says everything by being exactly, and only, itself.`,
    },
    markScheme: [
      'Analyses how the poet uses language to present the experience of snow',
      'Explores the effects of specific images, similes, and personification',
      'Comments on structural choices (stanza organisation, enjambment, line isolation)',
      'Uses well-selected quotations embedded in analytical sentences',
      'Develops a personal interpretation of the poem\'s ideas and effects',
      'Writes with clarity and analytical precision',
    ],
    examinerTips: [
      'For unseen poetry, trust your instincts — there is no single "correct" reading.',
      'Comment on what the poem does, not just what it says.',
      'Pay attention to the shortest lines — poets often isolate words for emphasis.',
      'Consider how the poem ends: the final image usually carries the most weight.',
    ],
  },

  // ----------------------------------------
  // OCR LITERATURE (6 questions)
  // ----------------------------------------

  // OCR Literature — Shakespeare (Macbeth) 1
  {
    id: 'ocr-lit-macbeth-1',
    board: 'OCR',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth — Kingship and Tyranny',
    extract: `Besides, this Duncan\nHath borne his faculties so meek, hath been\nSo clear in his great office, that his virtues\nWill plead like angels, trumpet-tongued, against\nThe deep damnation of his taking-off;\nAnd pity, like a naked new-born babe,\nStriding the blast, or heaven\'s cherubin horsed\nUpon the sightless couriers of the air,\nShall blow the horrid deed in every eye,\nThat tears shall drown the wind.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 1 Scene 7',
    question: 'How does Shakespeare use this extract to explore ideas about kingship? In your response you should explore how Shakespeare presents good and bad kingship in the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Shakespeare presents Duncan as an ideal king to make Macbeth\'s plan to murder him seem even more terrible. Macbeth says Duncan has "borne his faculties so meek," meaning he has used his power with humility. The word "meek" suggests gentleness and modesty, which are good qualities in a king. He has also been "clear in his great office," meaning he has been honest and transparent.

Macbeth imagines that Duncan\'s virtues will "plead like angels, trumpet-tongued" against his murder. This simile compares Duncan\'s good qualities to angels who will announce the crime to everyone. The phrase "deep damnation" shows Macbeth knows he will go to hell for this. The image of "pity, like a naked new-born babe" compares the feeling of pity to a helpless baby, but this baby is powerful enough to "stride the blast" — riding on the wind. This paradox shows that pity and justice may seem weak but are actually unstoppable.

Duncan represents good kingship in the play. He rewards loyal soldiers, like making Macbeth Thane of Cawdor, and he speaks kindly to everyone. When he arrives at Macbeth\'s castle, he calls it a "pleasant seat" and praises Lady Macbeth as an "honoured hostess," which shows his trusting, generous nature.

By contrast, Macbeth becomes a tyrant after taking the throne. He has Banquo murdered, attacks Macduff\'s innocent family, and rules through fear. Macduff calls Scotland under Macbeth "our suffering country" and says it "weeps" and "bleeds." The contrast between Duncan\'s gentle kingship and Macbeth\'s tyranny shows Shakespeare\'s message that a good king serves his people while a bad king serves only himself.

Shakespeare wrote the play for James I, who believed in the Divine Right of Kings. By showing that murdering a good king leads to chaos and damnation, Shakespeare is supporting the idea that kings are chosen by God and should not be overthrown.`,
      'Grade 6-7': `Shakespeare constructs this soliloquy as a legal brief against regicide, with Macbeth acting as both prosecutor and defendant. The legal metaphor — Duncan\'s virtues will "plead like angels" against the "deep damnation of his taking-off" — frames the murder as a trial in which the verdict is predetermined: heaven itself will testify against the killer. This is significant because Macbeth is not merely evaluating the practical risks of murder but weighing its cosmic consequences, revealing a moral imagination that his subsequent actions will systematically destroy.

Duncan\'s kingship is characterised through two key qualities: meekness and clarity. "Borne his faculties so meek" presents humility as an attribute of power — the verb "borne" suggests that kingship is a burden carried with grace, not a prize seized with force. "Clear in his great office" implies both transparency and moral purity, the adjective "clear" suggesting an absence of corruption. These qualities implicitly define what good kingship looks like: it is service, not domination; openness, not secrecy. The contrast with Macbeth\'s subsequent reign — characterised by paranoia, secrecy, and violence — is structured to be as stark as possible.

The imagery escalates from the legal to the apocalyptic. "Pity, like a naked new-born babe, striding the blast" is one of Shakespeare\'s most complex images: pity is simultaneously the most vulnerable thing imaginable (a naked baby) and the most powerful (striding the blast). This paradox captures a central thesis about kingship — that true authority comes from compassion, not force, and that vulnerability is a form of strength that tyranny cannot comprehend. The progression to "heaven\'s cherubin horsed upon the sightless couriers of the air" marshals the full machinery of divine retribution, the Latinate vocabulary ("cherubin," "couriers") creating a register of cosmic grandeur that dwarfs Macbeth\'s mortal ambition.

Shakespeare traces a deliberate arc from Duncan\'s idealised kingship through Macbeth\'s tyranny to Malcolm\'s restoration. Malcolm\'s testing of Macduff in Act 4 Scene 3 — where he pretends to be worse than Macbeth before revealing his true virtue — functions as a catalogue of kingly qualities and their perversions. The "king-becoming graces" Malcolm lists — "justice, verity, temp\'rance, stableness, bounty, perseverance, mercy, lowliness, devotion, patience, courage, fortitude" — provide the normative standard against which Macbeth\'s reign is measured and found wanting.

Contextually, the play speaks directly to James I\'s political self-image. James claimed descent from Banquo (historically inaccurate but politically useful), and the show of eight kings in Act 4 flatters this genealogy. More significantly, the play dramatises the theory of the Divine Right of Kings by showing that Duncan\'s murder produces not just political instability but natural disorder — storms, darkness, animals behaving unnaturally — confirming that the king\'s body and the body politic are mystically connected. Shakespeare\'s presentation of kingship is therefore simultaneously aesthetic, moral, and political: good kingship produces beauty and order; bad kingship produces ugliness and chaos.`,
      'Grade 8-9': `Shakespeare deploys this soliloquy as the play\'s most sustained exploration of political theology — the intersection of divine authority and temporal power that constitutes the conceptual foundation of early modern kingship. Macbeth\'s analysis of Duncan\'s virtues is not a character assessment but a cosmological argument: the murder of a good king does not merely violate human law but ruptures the relationship between heaven and earth that the king\'s person embodies.

The language of the extract performs a progressive amplification from the political to the transcendent. Duncan has "borne his faculties so meek" — the past participle "borne" activates the dual meaning of carrying and suffering, presenting kingship as a form of passion (in the theological sense) rather than possession. "Meek" is a specifically Christian virtue — "Blessed are the meek, for they shall inherit the earth" — and its application to a king performs a radical theological move: it suggests that true sovereignty consists not in the exercise of power but in its restraint. "Clear in his great office" extends this by presenting transparency as a political virtue; the word "clear" resonates with visual and moral purity, suggesting that Duncan\'s governance is characterised by an openness that has nothing to hide.

The image of virtues that "plead like angels, trumpet-tongued" transforms moral qualities into eschatological agents. The angels do not merely witness but advocate — "plead" is a legal verb that positions the murder as a case before a divine court. The adjective "trumpet-tongued" invokes the Last Judgement, where trumpets herald the final reckoning, and the implication is that Duncan\'s murder will accelerate cosmic justice. The phrase "deep damnation" is significant in its geological metaphor — damnation has depth, suggesting an abyss that awaits the murderer, and the adjective "deep" contrasts with the "clear" surface of Duncan\'s virtue, constructing a vertical moral geography in which goodness is elevated and evil is subterranean.

The image of "pity, like a naked new-born babe, striding the blast" is arguably the most complex metaphor in Shakespeare\'s work. Cleanth Brooks\'s celebrated analysis identified the paradox of vulnerability and power as the image\'s central mechanism, but the figure extends further than this. The "naked new-born babe" invokes the Christ child — divinity clothed in the most vulnerable flesh — and its ability to "stride the blast" recalls the harrowing of hell, where innocence conquers the storms of damnation. The progression to "heaven\'s cherubin horsed upon the sightless couriers of the air" multiplies the agents of retribution, the cherubim riding invisible horses across the sky, and the final image — "tears shall drown the wind" — achieves a sublime reversal in which human grief overpowers natural force, compassion physically extinguishing the violence of the storm.

Shakespeare structures the play so that every quality attributed to Duncan in this speech is systematically inverted in Macbeth\'s reign. Where Duncan is "meek," Macbeth rules through terror; where Duncan is "clear," Macbeth operates in secrecy and deception, instructing Lady Macbeth to "look like the innocent flower, but be the serpent under it." The deterioration is tracked through the play\'s imagery: under Duncan, Scotland is a garden tended by a gracious king; under Macbeth, it is a diseased body "almost afraid to know itself." The public response mirrors this — Duncan inspires loyalty; Macbeth inspires only the fear that drives his thanes to defect.

The political theology of kingship that Shakespeare dramatises was not merely a literary convention but a functioning ideology. James I\'s The True Law of Free Monarchies (1598) argued that kings are God\'s lieutenants on earth, and Basilikon Doron (1599) instructed his son in the duties of Christian kingship. Shakespeare\'s play both endorses and complicates this ideology: it demonstrates that regicide produces cosmic disorder, but it also exposes the fragility of the system by showing how easily a good king can be destroyed by a single ambitious subject. The play\'s final image of restored order under Malcolm is necessary but not entirely reassuring — the audience has seen how thin the line is between legitimate monarchy and tyranny, and the play\'s warning is directed not only at potential usurpers but at kings themselves, whose authority depends on embodying the virtues this soliloquy so eloquently catalogues.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents ideas about kingship through language and imagery',
      'Explores the significance of specific words and images in the extract',
      'Discusses good and bad kingship across the whole play',
      'Considers relevant context (Divine Right, James I, political theology)',
      'Uses well-integrated quotations to support a conceptualised argument',
      'Shows understanding of Shakespeare\'s dramatic methods and purposes',
    ],
    examinerTips: [
      'OCR values detailed analysis of the extract — spend time on specific words and images.',
      'The contrast between Duncan and Macbeth as kings is the essay\'s structural backbone.',
      'Consider Malcolm\'s role in the play\'s conclusion — he represents the restoration of good kingship.',
      'Context about James I is relevant but should support textual analysis, not replace it.',
    ],
  },

  // OCR Literature — Shakespeare (Macbeth) 2
  {
    id: 'ocr-lit-macbeth-2',
    board: 'OCR',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'Macbeth — Appearance vs Reality',
    extract: `There\'s no art\nTo find the mind\'s construction in the face:\nHe was a gentleman on whom I built\nAn absolute trust.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 1 Scene 4',
    question: 'How does Shakespeare explore the theme of appearance versus reality in Macbeth? Use this extract as a starting point and refer to the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Duncan says there is "no art to find the mind\'s construction in the face," meaning it is impossible to tell what someone is really thinking by looking at them. He is talking about the original Thane of Cawdor, who betrayed him, and saying he trusted him completely — "an absolute trust." This is ironic because Duncan is about to give that same title to Macbeth, who will also betray and murder him.

The theme of appearance versus reality runs through the whole play. The witches say "Fair is foul, and foul is fair," which means things that look good are actually bad and things that look bad might be good. This sets up the idea that nothing in the play can be trusted.

Lady Macbeth tells Macbeth to "look like the innocent flower, but be the serpent under it." This means he should appear kind and welcoming while planning murder. The image of a flower hiding a snake shows that beautiful appearances can hide dangerous reality.

After the murder, both Macbeth and Lady Macbeth pretend to be shocked and upset. Macbeth says he killed Duncan\'s guards in "fury" at their supposed crime, when really he was covering his tracks. Lady Macbeth pretends to faint to distract everyone. Their whole reign is built on pretending to be something they are not.

Shakespeare uses this theme to warn the audience that you cannot always trust what you see. For a Jacobean audience who had experienced plots like the Gunpowder Plot, this message about hidden treachery would have been very relevant.`,
      'Grade 6-7': `Shakespeare uses Duncan\'s lines as a structural hinge that concentrates the play\'s central preoccupation with the unreliability of surfaces. The statement "There\'s no art to find the mind\'s construction in the face" articulates a philosophical problem — the opacity of consciousness — that the play will dramatise repeatedly. The word "art" is significant: it implies that reading another person\'s intentions would require a special skill or technique, and its absence means that trust is always, inevitably, a gamble. The adjective "absolute" before "trust" intensifies the irony — Duncan\'s trust is not qualified or cautious but total, and it is about to be betrayed for the second time.

The dramatic irony is layered: Duncan speaks these lines about the Thane of Cawdor\'s treachery just as Macbeth — the new Thane of Cawdor — enters. The audience, aware of Macbeth\'s "black and deep desires," perceives the gap between Duncan\'s trusting perception and reality. Shakespeare structures this moment so that Duncan\'s observation about the impossibility of reading faces becomes, ironically, the most truthful thing anyone says in the play — and Duncan is entirely unaware of how immediately it applies to the man before him.

Shakespeare distributes the theme of deception across multiple characters and dramatic modes. The witches establish equivocation as a structural principle: their prophecies are linguistically true but intentionally misleading, demonstrating that language itself can create a false appearance. Lady Macbeth\'s instruction to "look like the innocent flower, but be the serpent under it" translates equivocation from the supernatural to the domestic, using the Edenic imagery of the serpent to link deception with original sin. The play\'s imagery consistently returns to the idea of concealment: "False face must hide what the false heart doth know," Macbeth declares, and the repetition of "false" emphasises that deception corrupts both the surface and the substance.

The banquet scene (Act 3, Scene 4) dramatises the collapse of the appearance Macbeth has constructed. His attempt to perform the role of gracious host — the appearance he is maintaining for his court — is destroyed by the ghost of Banquo, which represents the return of suppressed reality. Lady Macbeth\'s frantic attempts to maintain appearances ("Sit, worthy friends") reveal the effort required to sustain the gap between what is seen and what is known. By Act 5, the theme resolves through inversion: the approaching army disguised with branches from Birnam Wood creates a reality that appears impossible — the wood is moving — but is, in fact, exactly what the witches predicted. Appearance and reality finally coincide, but only in the moment of Macbeth\'s destruction.

Contextually, the theme of equivocation had specific resonance for a Jacobean audience. The Gunpowder Plot trials of 1606 centred on the Jesuit doctrine of equivocation — the idea that one could speak misleading truths under oath — and Shakespeare\'s Porter scene directly references "an equivocator, that could swear in both the scales against either scale." The play connects private deception to public danger, suggesting that the inability to distinguish appearance from reality threatens not just individuals but the state itself.`,
      'Grade 8-9': `Shakespeare constructs this brief utterance as a philosophical axiom that the rest of the play will simultaneously prove and exploit. Duncan\'s observation that "there\'s no art to find the mind\'s construction in the face" articulates what philosophers would later call the problem of other minds — the impossibility of accessing another consciousness through external observation. The word "construction" is particularly resonant: it implies that the mind is not a transparent window but a built thing, an architecture with hidden rooms, and the face is merely its facade. The theatrical metaphor is latent but unmistakable — an actor\'s face conceals the person behind the role, and Shakespeare, writing for a theatre in which boys played women and commoners played kings, was acutely aware that the stage is itself a machine for producing the gap between appearance and reality.

The dramatic irony of the moment operates at several levels. Most immediately, Macbeth enters directly after Duncan\'s lament about the previous Cawdor\'s treachery, inheriting both the title and the pattern of betrayal. But the irony extends further: Duncan\'s statement is empirically correct — you genuinely cannot read someone\'s intentions from their face — yet his response to this insight is not caution but renewed trust. The adjective "absolute" is devastating: having acknowledged the impossibility of certainty, Duncan proceeds to invest total confidence in his next assessment. This is not stupidity but a structural feature of the social world Shakespeare dramatises: political society requires trust, and trust requires the very confidence in surfaces that the play systematically undermines.

The witches' equivocation establishes the play\'s epistemological framework: language in Macbeth does not reveal truth but constructs multiple, incompatible truths simultaneously. "Fair is foul, and foul is fair" is not a statement about morality but about ontology — it announces a world in which categories of evaluation are unreliable, and the confident assignment of value (this is good, this is bad, this person is trustworthy) is always premature. The prophecies that follow are exercises in semantic precision — "none of woman born" is technically accurate, yet it creates a false impression of invulnerability. Shakespeare is not merely dramatising deception but interrogating the relationship between language and truth, suggesting that equivocation is not an aberration of language but its fundamental condition.

Lady Macbeth\'s counsel to "look like the innocent flower, but be the serpent under it" crystallises the play\'s treatment of appearance into a single, powerful instruction. The Edenic imagery is deliberate: the serpent\'s deception of Eve is the originary act of equivocation, the moment when language was first used to create a false appearance of reality. By invoking this myth, Shakespeare connects the Macbeths\' domestic plotting to the cosmic scale of the Fall, suggesting that every act of deliberate deception recapitulates the original sin. The flower-serpent image also functions as a figure for dramatic irony itself — the audience sees the serpent that the other characters mistake for a flower, and this privileged perception is the play\'s primary mechanism of moral instruction.

The play\'s resolution enacts a final, paradoxical alignment of appearance and reality. Birnam Wood\'s approach — soldiers carrying branches — creates an appearance (a moving forest) that fulfils a prophecy the audience assumed was metaphorical. Macduff\'s revelation that he was "from his mother\'s womb untimely ripped" similarly transforms what appeared to be a universal category ("of woman born") into a technical exclusion. In both cases, the witches\' language was accurate all along — the appearance of impossibility was itself the deception. Shakespeare constructs a world in which the truth was always available, encoded in the very words of the prophecy, but could not be perceived because the characters (and the audience) imposed their own expectations onto language. The play\'s ultimate argument about appearance and reality is therefore not simply that surfaces deceive but that we are complicit in our own deception: we see what we expect to see, trust what we want to trust, and the "art" that Duncan lacked is not supernatural insight but the willingness to interrogate our own assumptions.`,
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
      'OCR rewards close reading of the extract — spend time on individual words.',
      'The theme of appearance versus reality connects to almost everything in the play: witches, kingship, gender, language.',
      'Consider the audience\'s role: dramatic irony makes the audience see through appearances that characters cannot.',
      'The best responses engage with the idea of equivocation at a linguistic, not just moral, level.',
    ],
  },

  // OCR Literature — Modern Prose/Drama 1
  {
    id: 'ocr-lit-modern-1',
    board: 'OCR',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls — Sheila Birling\'s Development',
    extract: `You\'re pretending everything is just as it was before. I\'m telling you — it isn\'t. And it won\'t be. Not for me. Whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you\'ve stopped. You\'re ready to go on in the same old way.`,
    extractSource: 'Written in the style of J.B. Priestley\'s An Inspector Calls, Act 3',
    question: 'How does Priestley present Sheila as a character who changes? Explore how Sheila develops in this extract and in the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Sheila has completely changed from the beginning of the play. She is now telling her parents that they cannot pretend nothing happened. She says "You\'re pretending everything is just as it was before" and "it isn\'t." This shows she has learned from the Inspector\'s visit and refuses to go back to her old way of thinking.

The phrase "you began to learn something. And now you\'ve stopped" shows her frustration that her parents have not changed like she has. The short sentences make her sound strong and certain. She accuses them of being "ready to go on in the same old way," which shows she has rejected their values.

At the beginning of the play, Sheila is described as "a pretty girl in her early twenties, very pleased with life." She is excited about her engagement to Gerald and seems childish and spoilt. When she finds out she got Eva Smith fired from a shop because she was jealous, she is immediately upset and takes responsibility, saying "I know I\'m to blame — and I\'m desperately sorry."

This is different from her parents, who try to avoid blame. Sheila learns quickly and even starts to understand the Inspector\'s methods before the others do. She warns Gerald that the Inspector will find out everything anyway. By the end, she has grown from a naive young woman into someone with a strong moral sense.

Priestley uses Sheila to represent hope for the future. As a younger character, she can change and learn, unlike her parents who are stuck in their old ways. Priestley wanted his 1945 audience to be like Sheila — to accept responsibility and build a better society.`,
      'Grade 6-7': `Priestley constructs Sheila\'s development as the play\'s most complete moral arc, moving her from complicity in the capitalist system her family represents to active opposition against it. In this extract, the transformation is announced through a linguistic register entirely different from her opening dialogue. The imperative "I\'m telling you" asserts authority over her parents, inverting the generational hierarchy that the play\'s opening established. The short, emphatic declaratives — "it isn\'t. And it won\'t be. Not for me." — use syntactic simplicity to convey moral certainty, each sentence fragment adding emphasis like hammer blows. The sentence "You began to learn something. And now you\'ve stopped" is the play\'s most devastating indictment of the older generation, compressing an entire trajectory of moral failure into two clauses.

Sheila\'s starting point is carefully established as privileged ignorance rather than malice. The stage direction describes her as "very pleased with life" — a phrase that implies both contentment and complacency, the pleasure of someone who has never been required to examine the conditions of her comfort. Her treatment of Eva Smith — having her fired from Milwards because Eva held a dress against herself and "looked as if she was laughing at me" — reveals not cruelty but an unconscious entitlement that cannot tolerate any challenge to her self-image.

Her response to the Inspector\'s revelation is immediate and visceral — "I\'ll never, never do it again to anybody" — and the repetition of "never" signals genuine emotional engagement rather than the performative regret her parents will later display. Crucially, Sheila begins to understand the Inspector\'s purpose before the other characters: she recognises that he "knows" and tries to prevent Gerald and her mother from incriminating themselves. This perceptiveness marks her development from passive object of the family\'s ambitions (the engagement is clearly a business alliance) to active moral intelligence.

The generational divide is Priestley\'s structural mechanism for expressing his political argument. Sheila and Eric — the younger generation — accept responsibility; Mr and Mrs Birling — the older generation — reject it. Gerald occupies an ambiguous middle position: he shows genuine feeling for Daisy Rensall but ultimately allies himself with the parents\' desire to dismiss the evening. Priestley aligns the audience with Sheila, making her development a model for the response he demands from his 1945 audience: recognition, guilt, and the determination to change. The welfare state being constructed in the post-war period is the political expression of the moral awakening Sheila dramatises.`,
      'Grade 8-9': `Priestley engineers Sheila\'s development as a dramatised conversion — a movement from ideological unconsciousness to critical awareness that functions as both character arc and political instruction manual. In this extract, Sheila has crossed a threshold that her parents cannot or will not cross, and the language registers this transformation with precision. The accusation "You\'re pretending" identifies her parents\' behaviour as performance, a deliberate construction of normality designed to contain the evening\'s revelations within a frame that renders them manageable. The verb "pretending" is significant because it applies to her parents the same strategy of deception that the family employed against Eva — the gap between appearance and reality that the Inspector has spent three acts exposing now characterises the Birlings\' relationship to themselves.

The fragmentary syntax — "it isn\'t. And it won\'t be. Not for me." — performs the breakdown of the family\'s discursive unity. Priestley has structured the play so that the Birlings begin as a syntactic unit, finishing each other\'s sentences, sharing assumptions that do not require articulation. Sheila\'s isolated fragments announce her separation from this collective voice: she now speaks as an individual moral agent rather than as a member of the family. The conjunction "And" at the beginning of a sentence — grammatically unorthodox — creates a cumulative emphasis that mirrors the irreversibility of her change.

The observation "You began to learn something. And now you\'ve stopped" is the play\'s most economical diagnosis of the bourgeois capacity for moral regression. The verb "began" acknowledges that the older Birlings did experience genuine discomfort during the investigation — they were not entirely immune to the Inspector\'s revelations. But "stopped" identifies the mechanism by which privileged people neutralise ethical challenges: they engage with the discomfort just long enough to demonstrate their sensitivity, then retreat to the comfort of their original position. Priestley\'s insight is that this retreat is not passive but active — "You\'re ready to go on in the same old way" — a deliberate choice to prioritise comfort over conscience.

Sheila\'s starting point is essential to understanding the political work her transformation performs. She begins as the archetypal product of her class: materially comfortable, emotionally shallow (her excitement about the engagement ring is presented as consumerist rather than romantic), and casually cruel. Her treatment of Eva at Milwards — motivated by vanity and class entitlement — is not presented as exceptional but as typical, the unremarkable behaviour of someone who has been taught to see working-class women as objects rather than subjects. Priestley ensures that the audience recognises this behaviour not as villainy but as normality, because his argument depends on the recognition that systemic cruelty does not require malicious intent — only the conditions of privilege that make other people\'s suffering invisible.

Her transformation is catalysed not by argument but by empathy — the moment she imaginatively inhabits Eva\'s experience. This is consistent with Priestley\'s broader dramatic philosophy, expressed in his interest in the theories of J.W. Dunne and P.D. Ouspensky, that genuine moral change requires a shift in perception rather than an accumulation of evidence. The Inspector provides evidence; Sheila provides the perceptual shift. Her increasing anticipation of the Inspector\'s revelations demonstrates that once the perceptual shift has occurred, the connections between cause and consequence become visible — she can "see" what her parents cannot because she has accepted the premise that their actions have consequences beyond their immediate circle.

Priestley positions Sheila as the bridge between stage and auditorium. Her transformation models the response he demands from his post-war audience: the recognition that the pre-war social order was not merely flawed but actively destructive, and that returning to "the same old way" — as the older Birlings wish to do, and as many in 1945 wished to do — would constitute a moral failure of historic proportions. The telephone call at the play\'s end — announcing that a real inspector is on the way — is directed at the Birlings but resonates for the audience: the reckoning that Sheila has accepted and her parents have evaded is coming regardless, and the only choice is whether to face it with the honesty of the young or the evasion of the old.`,
    },
    markScheme: [
      'Analyses how Priestley presents Sheila\'s development through language and dramatic technique',
      'Explores specific language choices in the extract and their effects',
      'Traces Sheila\'s character arc across the whole play',
      'Considers relevant context (generational divide, 1945 audience, socialism)',
      'Uses well-integrated quotations to support a sustained argument',
      'Develops a conceptualised response about Priestley\'s purpose in creating this character',
    ],
    examinerTips: [
      'Sheila\'s development must be traced as a process — show how each stage leads to the next.',
      'The contrast with her parents is essential: use it to structure your argument.',
      'Consider Priestley\'s purpose: Sheila is a model for the audience.',
      'OCR values close reading — spend significant time on the extract before moving to the wider play.',
    ],
  },

  // OCR Literature — Modern Prose/Drama 2
  {
    id: 'ocr-lit-modern-2',
    board: 'OCR',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'An Inspector Calls — Social Class and Inequality',
    extract: `We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night.`,
    extractSource: 'Written in the style of J.B. Priestley\'s An Inspector Calls, Act 3',
    question: 'How does Priestley explore ideas about social class and inequality in the play? Use this extract as a starting point and refer to the play as a whole. (40 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, the Inspector delivers his final message about social class and responsibility. He says "We are members of one body" which means all people in society are connected, regardless of their class. The phrase "we are responsible for each other" is a direct statement that rich people should care about poor people. The warning about "fire and blood and anguish" suggests that if the upper classes do not treat working people fairly, there will be terrible consequences like war.

Throughout the play, Priestley shows how the upper class mistreats the working class through Eva Smith\'s story. Mr Birling fires her for asking for a small wage increase. Sheila uses her social position to get Eva fired from a shop. Gerald keeps her as a mistress — using his wealth and status to control her. Mrs Birling refuses her charity because Eva used the Birling name. Eric gets her pregnant and gives her stolen money. Each character uses their class privilege to harm Eva, often without thinking about it.

The Birling family represents the wealthy upper class who believe they are better than working people. Mr Birling says "a man has to look after himself" which shows he does not believe in helping others. Mrs Birling refers to Eva as "a girl of that sort," showing she sees working-class people as inferior.

Priestley wrote the play in 1945 when Britain was building the welfare state after the war. He wanted to show that the old class system, where the rich ignored the poor, was wrong and needed to change. The Inspector represents Priestley\'s own socialist beliefs that everyone should be treated equally and cared for.`,
      'Grade 6-7': `Priestley uses the Inspector\'s final speech as the rhetorical climax of a play that has systematically exposed the mechanisms by which class privilege produces and conceals suffering. The declaration "We are members of one body" invokes both the Christian corpus mysticum and the socialist concept of solidarity, deliberately fusing religious and political language to appeal to the broadest possible audience. The warning about "fire and blood and anguish" functions as prophecy for the 1912 characters and historical fact for the 1945 audience, exploiting dramatic irony to demonstrate that the consequences of class division are not hypothetical but proven.

Priestley structures the play so that each Birling\'s interaction with Eva Smith exposes a different mechanism of class oppression. Mr Birling\'s dismissal of her wage request represents economic exploitation — the straightforward extraction of profit from labour. Sheila\'s actions at Milwards represent social power — the ability of the consumer class to destroy livelihoods through caprice. Gerald\'s relationship represents sexual exploitation enabled by economic inequality — his "kindness" to Eva is inseparable from the power differential that makes her dependent on him. Mrs Birling\'s refusal at the charity represents institutional gatekeeping — the control of social safety nets by the very class whose behaviour creates the need for them. Eric\'s assault represents the ultimate expression of entitled masculinity — the assumption that class and gender privilege grant access to working-class women\'s bodies.

The chain of causation is crucial to Priestley\'s argument about class. No single Birling destroyed Eva; rather, the cumulative effect of a system in which each person exercises their class privilege "normally" produces a fatal result. This is the play\'s most radical insight: the Birlings are not exceptional villains but representative figures whose everyday behaviour within a stratified society has lethal consequences. Priestley ensures that the audience recognises themselves in the Birlings — not in the specifics of their actions but in the structural position they occupy.

The generational response to the Inspector maps onto Priestley\'s political optimism. Mr and Mrs Birling\'s refusal to change represents the entrenched upper class; Sheila and Eric\'s moral awakening represents the possibility of generational progress. Priestley, writing in 1945 as the Labour Party won its landslide election victory, saw the welfare state as the political equivalent of Sheila\'s transformation — a collective acceptance of responsibility that the Inspector\'s speech demands. The play\'s setting in 1912 allows Priestley to demonstrate what happens when that acceptance is refused: the "fire and blood" of two world wars, which the audience has already survived and which the Birlings, frozen in their complacency, cannot yet imagine.`,
      'Grade 8-9': `Priestley constructs the play as a dramatic experiment in making visible the invisible architecture of class. The Inspector\'s closing declaration — "We are members of one body" — is the thesis statement of a work that has spent three acts demonstrating its truth through the Birlings\' inability to perceive it. The genius of Priestley\'s structure is that each revelation forces the audience to trace a causal chain that the characters themselves refuse to acknowledge: the connection between Mr Birling\'s wage decision and Eva\'s death is obvious to the audience but invisible to Birling, because class operates precisely by obscuring the relationship between privilege and suffering.

The metaphor of "one body" is carefully chosen. It invokes the medieval concept of the body politic — the idea that society is an organism in which each member has a function and a responsibility to the whole — but it also echoes the Christian doctrine of the corpus mysticum, in which the Church is understood as the living body of Christ. Priestley secularises both traditions: his "body" is neither political nor spiritual but social, a network of interdependence that exists whether or not its members acknowledge it. The genius of the metaphor is that it describes a fact, not an aspiration — the Birlings are already "members of one body" with Eva Smith, connected by economic chains they have chosen not to see. The Inspector does not create these connections; he reveals them.

Priestley\'s analysis of class operates through the concept of what might be called structural violence — harm that is produced not by individual malice but by the normal functioning of social systems. Each Birling\'s interaction with Eva is, by the standards of their class and time, unremarkable: employers dismiss troublesome workers; customers complain about shop assistants; wealthy men take working-class mistresses; charitable organisations apply their criteria; young men of good family behave badly. The play\'s moral force derives from the aggregation of these "normal" acts into a fatal sequence, demonstrating that a social system built on class inequality produces death as a routine by-product, not an exceptional outcome.

The class dynamics of the play extend beyond the Birlings\' treatment of Eva to encompass the relationships between the characters themselves. The engagement of Sheila and Gerald is explicitly a class alliance — Birling hopes it will lead to a merger between "Crofts Limited" and his own firm, confessing that he looks forward to a time "when Crofts and Birlings are no longer competing but are working together." Marriage, in this framework, is an instrument of capital accumulation, and Sheila\'s feelings are subordinate to her economic function. Gerald\'s class position subtly exceeds the Birlings\' — his family are landed gentry rather than industrial bourgeoisie — and the social aspiration this differential produces in Mr Birling reveals that class operates not only between the wealthy and the poor but within the gradations of privilege itself.

Mrs Birling\'s behaviour at the charity is Priestley\'s most precise dramatisation of how institutional power reinforces class hierarchy. Her refusal to help Eva is based not on resource constraints but on social judgement — Eva used the name "Birling," an act that Mrs Birling considers presumptuous. The class offence is not that Eva needed help but that she claimed a connection to a family above her station. Mrs Birling\'s charity does not exist to alleviate poverty but to police the boundaries of class, and her position as chair gives her the institutional authority to enforce those boundaries with lethal consequences.

The play\'s temporal structure — written in 1945, set in 1912 — is itself a class argument. Priestley positions his audience at a historical vantage point from which they can see that the comfortable world of the Birlings was built on foundations that would produce two world wars and a depression. The "fire and blood and anguish" the Inspector prophesies is not divine punishment but the historical consequence of a class system that concentrates wealth while distributing suffering. By making this consequence visible through the play\'s dual time frame, Priestley transforms a domestic drama into an argument for systemic change — not charity, which the play treats as an instrument of class control, but structural transformation of the kind the 1945 Labour government was attempting to implement through the welfare state, the NHS, and the nationalisation of key industries. The Inspector\'s final word — "Good night" — is both a farewell and a warning: the night he describes, of social catastrophe produced by class indifference, has already fallen once and will fall again unless the lesson is learned.`,
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
      'Each Birling represents a different aspect of class power — use this to structure your argument.',
      'The dual time setting is essential context — always consider both 1912 and 1945.',
      'OCR expects detailed close reading of the extract as well as wider knowledge of the play.',
      'The best answers connect individual actions to systemic structures rather than treating them in isolation.',
    ],
  },

  // OCR Literature — Poetry Anthology
  {
    id: 'ocr-lit-poetry-anth-1',
    board: 'OCR',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Anthology — Time and Memory',
    extract: `Poem A — "Hour" by Carol Ann Duffy (extract):\n"Love\'s time\'s beggar, but even a single hour,\nbright as a dropped coin, makes love rich.\nWe find an hour together, spend it not on flowers\nor wine, but the whole of the summer sky and a grass ditch."\n\nCompare with one other poem from the anthology.`,
    extractSource: 'Poetry anthology extract',
    question: 'Compare how poets present the relationship between time and human emotion in "Hour" and one other poem from the anthology. (40 marks)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Hour" by Carol Ann Duffy and "Sonnet 43" by Elizabeth Barrett Browning explore how love relates to time, but they do so in different ways.

In "Hour," Duffy writes about how a single hour of love can feel incredibly valuable. The metaphor "Love\'s time\'s beggar" means that love is always at the mercy of time — there is never enough of it. But the simile "bright as a dropped coin" turns a small amount of time into something precious and shining. The word "bright" suggests happiness and value. The couple do not spend their hour on expensive things like "flowers or wine" but on natural things like "the whole of the summer sky and a grass ditch." This shows that love does not need material things to be rich — it transforms ordinary time into something extraordinary.

In "Sonnet 43," Browning writes about a love that seems to exist outside time altogether. She says "I love thee to the depth and breadth and height my soul can reach," using spatial metaphors that suggest her love has no limits. When she writes "I love thee with the breath, smiles, tears, of all my life," she connects love to every moment of her existence. The phrase "all my life" suggests love fills every second of time.

Both poets present love as something that transforms time. Duffy shows a single hour becoming rich and valuable, while Browning shows love filling an entire lifetime. Duffy focuses on the scarcity of time, while Browning writes as though time is infinite when filled with love.`,
      'Grade 6-7': `Duffy and Browning both explore the paradox of love\'s relationship to time — its apparent helplessness before time\'s power and its capacity to transcend temporal limitation — but their strategies for resolving this paradox diverge significantly.

Duffy\'s "Hour" begins with a compressed metaphor: "Love\'s time\'s beggar." The double possessive creates a syntactic chain of dependency — love belongs to time, and time reduces love to a state of supplication. Yet the volta arrives immediately: "but even a single hour, / bright as a dropped coin, makes love rich." The economic metaphor transforms scarcity into wealth through an act of imaginative revaluation: the hour is "dropped" — found, accidental, seemingly insignificant — but its brightness makes it valuable. The allusion to the Midas myth ("Midas light") that runs through the poem suggests that love possesses an alchemical power to transform the base metal of time into gold, but unlike Midas, this transformation produces not cursed isolation but genuine richness.

The couple\'s rejection of "flowers or wine" in favour of "the whole of the summer sky and a grass ditch" articulates a counter-economy in which value is measured by attention rather than expenditure. The juxtaposition of "summer sky" (vast, beautiful) with "grass ditch" (small, mundane) insists that love\'s transformative power operates on the ordinary as readily as the sublime. This is Duffy\'s central argument: time is not the enemy of love but its medium, and a single hour, fully inhabited, contains as much emotional richness as a lifetime of distraction.

Browning\'s "Sonnet 43" approaches the time-love relationship from the opposite direction. Where Duffy concentrates love into a single hour, Browning expands it across all dimensions. The spatial metaphors — "depth and breadth and height" — refuse temporal limitation by converting time into space, as though love can be measured in cubic metres rather than minutes. The phrase "by sun and candle-light" spans the entire diurnal cycle, suggesting continuous, unbroken devotion. The poem\'s final declaration — "I shall but love thee better after death" — makes the most radical claim of all: love will outlast mortality, extending beyond the temporal frame altogether.

The formal contrast between the poems is revealing. Duffy\'s Shakespearean sonnet, with its volta and resolution, dramatises the moment of transformation — the turn from "beggar" to "rich" — while Browning\'s Petrarchan sonnet, with its seamless development, presents love as already established and permanent. Duffy writes from within time, finding richness in a single hour; Browning writes from a position that claims to be already outside time, looking back on a love whose permanence is assumed. Both poets ultimately suggest that love\'s value is not diminished by temporal limitation but defined by it — it is precisely because the hour is finite that it is bright, and precisely because life ends that love must be declared infinite.`,
      'Grade 8-9': `Duffy and Browning both confront the fundamental incompatibility between love\'s subjective experience of timelessness and time\'s objective indifference to human feeling, but they resolve this tension through radically different formal and philosophical strategies.

Duffy\'s opening — "Love\'s time\'s beggar" — compresses into four words a relationship that the Petrarchan tradition has spent centuries elaborating. The double genitive is syntactically dense: love possesses time\'s beggar, or love is the beggar of time, or love belongs to time and is made a beggar by it. This grammatical ambiguity is deliberate — it mirrors the instability of love\'s temporal position, simultaneously subject and object, possessor and possessed. The immediate counterclaim — "but even a single hour, bright as a dropped coin, makes love rich" — performs the alchemical transformation that is the poem\'s central conceit. The simile "bright as a dropped coin" is precisely chosen: a dropped coin is found by accident, it glints momentarily before being picked up, and its value is predetermined rather than earned. The hour of love shares all these properties — it is unexpected, transient, and valuable not because of what the lovers do with it but because of what love does to it.

The poem\'s rejection of conventional romantic tokens — "not on flowers / or wine" — is not mere anti-materialism but an epistemological claim about the relationship between attention and time. Flowers wilt; wine is consumed; both are destroyed by time. But "the whole of the summer sky and a grass ditch" cannot be used up because they are not possessions but perceptions. Duffy argues that love defeats time not by slowing it or escaping it but by intensifying the quality of experience within it — making each moment so perceptually rich that its duration becomes irrelevant. The juxtaposition of "summer sky" (infinite, elevated) with "grass ditch" (finite, lowly) insists that this intensification is indiscriminate: love does not select beautiful objects to contemplate but beautifies whatever it contemplates.

Browning\'s strategy is architecturally different. Where Duffy concentrates, Browning expands, and her expansion operates through the systematic conversion of quality into quantity. "How do I love thee? Let me count the ways" establishes a mathematical framework that the poem simultaneously fulfils and overwhelms — the "ways" cannot, in fact, be counted, and the attempt to enumerate them produces not a finite list but an infinite series. The spatial metaphors — "depth and breadth and height" — extend love into three physical dimensions, but the qualifying clause "when feeling out of sight / For the ends of being and ideal grace" pushes beyond the physical into the metaphysical, reaching for a transcendence that spatial language cannot contain. This is the poem\'s formal paradox: it uses the language of measurement to describe the immeasurable, and the inadequacy of its own vocabulary becomes the proof of love\'s excess.

The poems\' respective treatments of death crystallise their philosophical divergence. Browning\'s "I shall but love thee better after death" makes an absolute claim — love not only survives death but improves, as though mortality is a refinement rather than a termination. This is a profoundly Christian assertion, locating the perfection of love in the afterlife and rendering earthly time a mere prelude. Duffy makes no such claim. Her poem\'s power lies precisely in its acceptance of temporal limitation — the hour will end, and the poem offers no consolation beyond the brightness of the hour itself. This is a secular poetics of love, one that finds sufficiency in the present moment rather than projecting fulfilment into eternity.

Both poems ultimately reveal that the relationship between time and emotion is not one of opposition but of mutual definition. Love does not exist despite time or outside it but through it — shaped by its pressure, intensified by its scarcity, made articulate by the urgency of its passing. Duffy and Browning represent two responses to this realisation: one grasps the moment; the other reaches for forever. Neither resolution is final, and the fact that poets continue to write about love and time suggests that the tension between them is not a problem to be solved but a condition to be inhabited.`,
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
      'OCR awards high marks for perceptive, original comparisons — go beyond the obvious.',
      'Compare methods as well as themes: how does each poem\'s form shape its argument?',
      'Consider what the poems disagree about as well as what they share.',
      'Contextual knowledge should enhance analysis, not substitute for it.',
    ],
  },

  // OCR Literature — Unseen Poetry
  {
    id: 'ocr-lit-unseen-1',
    board: 'OCR',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry Analysis',
    extract: `The Supermarket at Midnight\n\nThe aisles are empty now, the music off.\nA man in a blue tabard mops the floor\nin long, unhurried arcs, the way a priest\nmight swing a censer through a darkened church.\n\nThe fruit gleams under lights that never sleep.\nBananas curve like questions no one asked.\nA pyramid of tins stands guard\nover nothing anyone would want to steal.\n\nSomewhere, a freezer hums a single note —\na sound so constant it becomes a silence,\nthe way a life, lived quietly enough,\ncan disappear without anyone noticing it has gone.`,
    extractSource: 'Original poem written for this exercise',
    question: 'Explore how the poet uses language and imagery to create meaning in "The Supermarket at Midnight." (24 marks)',
    marks: 24,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet uses language and imagery to make an ordinary supermarket seem meaningful and almost sacred. In the first stanza, the man mopping the floor is compared to "a priest" swinging "a censer through a darkened church." This simile makes the boring act of cleaning seem like a religious ceremony, which makes the reader see the supermarket in a new way. The word "unhurried" suggests calmness and peace.

In the second stanza, the bananas "curve like questions no one asked," which is an unusual simile that makes the fruit seem lonely or forgotten. The tins stand "guard over nothing anyone would want to steal," which is funny because it suggests the supermarket is protecting worthless things, as if everything is pointless at night.

The final stanza compares the freezer\'s humming to silence — "a sound so constant it becomes a silence." This oxymoron suggests that when something is always there, you stop noticing it. The poet then extends this idea to human life: "the way a life, lived quietly enough, can disappear without anyone noticing it has gone." This is a sad ending that compares a quiet life to the freezer\'s hum — always there but unnoticed. The poem seems to be about how ordinary people and ordinary places can be overlooked.`,
      'Grade 6-7': `The poet transforms the supermarket — perhaps the most mundane of modern spaces — into a site of philosophical meditation, using the emptiness of midnight to expose the meanings that daylight commerce conceals.

The opening stanza establishes the supermarket as a space evacuated of its usual purpose. "The aisles are empty now, the music off" — the absence of shoppers and background music strips the environment to its physical essentials, and into this void the poet introduces an unexpected comparison. The cleaner mopping in "long, unhurried arcs" is likened to "a priest" swinging "a censer through a darkened church," a simile that sacralises the mundane. The verb "swing" and the adjective "unhurried" attribute to the cleaning a deliberate, ritualistic quality, suggesting that all repetitive labour possesses a kind of devotional dignity. The qualification "might" — "the way a priest might" — introduces a note of tentativeness that prevents the comparison from becoming heavy-handed.

The second stanza deploys two conceits that hover between the comic and the profound. "Bananas curve like questions no one asked" anthropomorphises the fruit through its shape — the curve of a banana does resemble a question mark — but the metaphor extends beyond visual resemblance. An unasked question is a thought that remained unexpressed, and the bananas become emblems of suppressed curiosity, decorative but unanswered. The "pyramid of tins" that "stands guard / over nothing anyone would want to steal" inverts the logic of security: the tins are arranged as if protecting something precious, but their vigil is for goods of negligible value. The comic bathos masks a serious point — much of what we guard most carefully is, in the end, not worth guarding.

The final stanza achieves the poem\'s deepest insight through a chain of comparison. The freezer\'s hum — "a single note" — becomes silence through constancy, and this paradox is then extended to human existence: "a life, lived quietly enough, / can disappear without anyone noticing it has gone." The enjambment across the final two lines delays the word "gone," making its arrival feel like an actual disappearance. The poem\'s emotional weight is concentrated in this closing image, which transforms the supermarket cleaner from a background figure into a representative of all those whose quiet labour sustains the world without being seen. The entire poem functions as an act of noticing what is usually unnoticed — a poetic equivalent of the midnight visit that reveals what daylight hides.`,
      'Grade 8-9': `The poem performs an act of defamiliarisation in the Shklovskian sense — it takes the most habitual of environments and renders it strange, not through surreal distortion but through the simple expedient of removing the people and purposes that normally define it. The supermarket at midnight is the same space as the supermarket at midday, yet the absence of shoppers and commerce reveals a different set of meanings, as if the building has shed its daytime function and stands exposed as pure structure, awaiting interpretation.

The opening simile — the cleaner as priest, the mop as censer — is the poem\'s foundational conceit, and its success depends on the precision of the comparison. Both acts are ritual: repetitive, purposeful, and performed in a space made sacred (or at least significant) by its architecture. The phrase "long, unhurried arcs" captures the physical motion of mopping with cinematographic precision, and the adjective "unhurried" is the stanza\'s emotional key — it attributes to the cleaner a quality of patience that transforms labour from drudgery into something approaching contemplation. The word "darkened" applies to the church but resonates with the supermarket\'s reduced lighting, creating a visual continuity between the two spaces that supports the conceptual comparison. The simile argues, implicitly, that all spaces are sanctified by the care invested in them, and that the distinction between sacred and profane is a function of attention rather than architecture.

The second stanza shifts from the sacred to the absurd, deploying two images that operate in the gap between appearance and significance. "Bananas curve like questions no one asked" is the poem\'s most formally adventurous line: it transforms a visual observation (bananas are curved) into an existential statement (there are questions that remain unposed), and the transition is so smooth that the reader barely notices the leap from the concrete to the abstract. The "pyramid of tins" standing "guard / over nothing anyone would want to steal" inverts the commercial logic that built the pyramid in the first place — by day, the arrangement is a marketing strategy; by night, stripped of its audience, it becomes an unintentional monument to the absurdity of abundance. The enjambment that isolates "over nothing" at the line break creates a pause in which the reader registers the void before the qualifying clause arrives.

The final stanza completes the poem\'s movement from observation through absurdity to elegy. The freezer\'s hum — "a single note" that "becomes a silence" — introduces a paradox about the relationship between constancy and perception: a sound that never changes ceases to be heard, not because it has stopped but because the ear has adapted. The poem then performs its most ambitious extension: "the way a life, lived quietly enough, / can disappear without anyone noticing it has gone." The subject of this comparison is simultaneously the cleaner, the freezer, the bananas, and anyone whose existence unfolds below the threshold of social visibility. The adverb "quietly" is the line\'s most important word — it identifies not volume but manner, suggesting that it is not the scale of a life but its mode that determines its visibility. The verb "disappear" is reflexive — the life does not die or end but disappears, a word that implies the observer\'s failure as much as the subject\'s cessation.

The poem\'s final line — "without anyone noticing it has gone" — achieves a devastating effect through its tense structure. "Has gone" is the present perfect, denoting an action completed in the recent past whose effects persist into the present, and the phrase "without anyone noticing" creates a gap between the event and its perception that is the poem\'s real subject. The supermarket at midnight is a figure for everything that exists without being observed, performs without being acknowledged, and ends without being mourned — and the poem itself, by noticing what it describes as unnoticed, performs the act of attention it identifies as absent, making the reader complicit in a recognition that comes, like all the poem\'s recognitions, just too late.`,
    },
    markScheme: [
      'Analyses how the poet uses language and imagery to create meaning',
      'Explores the effects of specific similes, metaphors, and word choices',
      'Comments on structure, form, and the poem\'s overall movement',
      'Develops a personal interpretation with reference to the poem\'s themes',
      'Uses well-selected, embedded quotations',
      'Writes with analytical precision and clarity',
    ],
    examinerTips: [
      'For OCR unseen poetry, you have significant time — use it for careful, detailed reading.',
      'Comment on the poem\'s development from beginning to end.',
      'The best responses identify the poem\'s central argument or insight and trace how it builds.',
      'Do not list techniques — analyse how specific choices contribute to the poem\'s meaning as a whole.',
    ],
  },

  // ----------------------------------------
  // WJEC LITERATURE (6 questions)
  // ----------------------------------------

  // WJEC Literature — Shakespeare 1
  {
    id: 'wjec-lit-macbeth-1',
    board: 'WJEC',
    type: 'Extract-Based Essay',
    questionType: 'Extract-Based Essay',
    tier: 'GCSE',
    title: 'Macbeth — The Dagger Soliloquy',
    extract: `Is this a dagger which I see before me,\nThe handle toward my hand? Come, let me clutch thee.\nI have thee not, and yet I see thee still.\nArt thou not, fatal vision, sensible\nTo feeling as to sight? Or art thou but\nA dagger of the mind, a false creation,\nProceeding from the heat-oppressed brain?`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 2 Scene 1',
    question: 'Look at how Macbeth speaks and behaves here. What does it reveal about his state of mind at this point in the play? How does Shakespeare make this a dramatic and significant moment? (15 marks)',
    marks: 15,
    timing: '20 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Macbeth is about to murder King Duncan, and his state of mind is confused and frightened. He sees a dagger floating in front of him but cannot tell if it is real or imagined. The question "Is this a dagger which I see before me?" shows he is uncertain about what he is seeing. When he says "Come, let me clutch thee" he tries to grab it, which shows he wants to confirm whether it is real.

The phrase "I have thee not, and yet I see thee still" shows his confusion — he cannot touch it but he can still see it. He calls it "a dagger of the mind, a false creation" which shows he thinks his brain might be tricking him. The phrase "heat-oppressed brain" suggests his mind is overheated with stress and guilt about what he is about to do.

Shakespeare makes this dramatic by putting Macbeth alone on stage, talking to himself. The audience can see his inner struggle. The dagger pointing towards Duncan\'s chamber shows that Macbeth is being drawn towards the murder even though part of him does not want to do it. This makes the audience feel tense because they know the murder is about to happen.

This is significant because it shows that even before the murder, Macbeth\'s mind is already disturbed. It foreshadows the guilt and madness that will get worse throughout the play, like when he sees Banquo\'s ghost later.`,
      'Grade 6-7': `The dagger soliloquy reveals Macbeth\'s state of mind as fractured between rational self-awareness and hallucinatory compulsion. The opening question — "Is this a dagger which I see before me?" — dramatises the breakdown of empirical certainty: Macbeth cannot trust his own senses, and the interrogative form externalises his internal crisis. The sequence of contradictions that follows — "I have thee not, and yet I see thee still" — stages a battle between the evidence of touch (which denies the dagger\'s existence) and sight (which confirms it), and Macbeth\'s inability to resolve this contradiction reveals a mind in which the normal hierarchy of perception has collapsed.

Shakespeare makes this moment dramatically significant through the soliloquy form itself. Macbeth is alone on stage in the dark, addressing a vision that the audience may or may not see (productions make different choices about staging the dagger). This ambiguity places the audience in the same epistemological position as Macbeth — uncertain whether the supernatural is real or whether they are witnessing the projections of a guilty mind. The dagger\'s handle turns "toward my hand," suggesting invitation, as though the hallucination is guiding Macbeth towards the murder and his own will is being supplanted by an external force.

The self-diagnosis — "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain" — is remarkably lucid. Macbeth correctly identifies the hallucination as a psychological phenomenon, the compound adjective "heat-oppressed" suggesting a mind feverish with anticipation and moral pressure. Yet this lucidity is dramatically ironic: the man who can diagnose his own hallucination will proceed to act on it regardless, demonstrating that self-knowledge is no defence against compulsion. This paradox — seeing clearly and acting destructively — defines Macbeth\'s tragic character.

The moment is also structurally significant within the play\'s pattern of visions and hallucinations. It establishes that Macbeth\'s guilt manifests as sensory disturbance before the crime is committed, foreshadowing the voice that cries "Sleep no more" and the ghost of Banquo. Shakespeare constructs a psychological trajectory in which each crime deepens the sensory disruption, suggesting that violence does not merely damage the victim but fundamentally alters the perpetrator\'s relationship with reality.`,
      'Grade 8-9': `Shakespeare constructs the dagger soliloquy as a dramatisation of the moment when the will capitulates to desire — the instant before action in which the self confronts its own capacity for destruction and recognises that knowledge will not prevent it.

The opening question — "Is this a dagger which I see before me, / The handle toward my hand?" — is not merely about epistemology but about agency. The dagger\'s handle is oriented towards Macbeth, an invitation that transforms the hallucination from a passive image into an active solicitation. The directional detail is crucial: in sword-fighting, presenting the handle is a gesture of offering — the dagger is not threatening Macbeth but arming him, and the question of whether it is real or imagined becomes secondary to its functional significance. Whether the dagger exists or not, it points the way; whether it is supernatural or psychological, its effect is the same.

The imperative "Come, let me clutch thee" enacts the reaching of the will towards the act. The verb "clutch" is more violent than "grasp" or "hold" — it implies desperation, the tightening of fingers around something that might escape, and its failure ("I have thee not") creates a moment of grotesque physical comedy: a man grasping at empty air in the darkness. But the conjunction "and yet I see thee still" refuses to let the failure dismiss the vision. Shakespeare constructs a hierarchy of senses in which sight overrules touch, and this inversion mirrors the larger epistemological collapse the play performs: in Macbeth\'s world, what you see (prophecy, hallucination, the appearance of innocence) carries more weight than what you can verify.

The self-diagnosis — "a dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain" — is the soliloquy\'s most analytically sophisticated passage. Macbeth proposes a materialist explanation for his vision: the brain, overheated by psychological pressure, has produced a "false creation." The medical vocabulary — "heat-oppressed" derives from the humoral theory in which excessive heat produces delirium — positions Macbeth as his own physician, diagnosing the symptom while unable to treat the underlying condition. The word "false" resonates throughout the play: the "false face" that must hide the "false heart," the "false" Thane of Cawdor, the equivocating witches. The dagger is "false" in the sense of unreal, but it is also "false" in the sense of treacherous — it leads Macbeth towards a murder that will destroy him.

Shakespeare makes this moment dramatically significant by staging the soliloquy as a threshold scene. Macbeth stands between the world of intention and the world of action, and the soliloquy occupies the temporal space in which retreat is still possible. The audience knows — because they have witnessed his vacillation, Lady Macbeth\'s persuasion, and his eventual resolution — that Macbeth will cross this threshold, and the dramatic tension derives not from uncertainty about the outcome but from the excruciating proximity to a decision that cannot be undone. The dagger, whether real or imagined, is the last image Macbeth sees before he enters Duncan\'s chamber, and its ambiguous status — suspended between reality and hallucination, invitation and warning — captures the play\'s fundamental insight: that the most consequential actions are performed in a state of radical uncertainty, by minds that cannot fully distinguish between what they see and what they desire to see.`,
    },
    markScheme: [
      'Analyses what the extract reveals about Macbeth\'s state of mind',
      'Explores specific language choices and their dramatic effects',
      'Comments on how Shakespeare makes this a dramatic and significant moment',
      'Shows understanding of the extract\'s significance within the play as a whole',
      'Uses well-selected quotations from the extract',
      'Writes with clarity and analytical precision',
    ],
    examinerTips: [
      'WJEC extract questions are shorter (15 marks) — keep your response focused and concise.',
      'Focus on the extract itself rather than ranging widely across the play.',
      'Consider dramatic effect: how does this work on stage? What does the audience experience?',
      'Comment on the soliloquy as a form — what does speaking alone reveal?',
    ],
  },

  // WJEC Literature — Shakespeare 2
  {
    id: 'wjec-lit-macbeth-2',
    board: 'WJEC',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'Macbeth — The Decline of Macbeth',
    extract: `I am in blood\nStepped in so far that, should I wade no more,\nReturning were as tedious as go o\'er.`,
    extractSource: 'Written in the style of Shakespeare\'s Macbeth, Act 3 Scene 4',
    question: 'How does Shakespeare present Macbeth\'s moral decline? Write about the presentation of Macbeth in this extract and elsewhere in the play. (15 marks + essay 25 marks)',
    marks: 40,
    timing: '50 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Macbeth says he has gone so far in committing murder that he might as well continue. The metaphor "I am in blood stepped in so far" compares his crimes to wading through a river of blood. This is a powerful image that shows he has committed so many murders that he is surrounded by the consequences.

The word "tedious" is surprising because it means boring or tiring, not horrifying. This shows that Macbeth no longer feels shock at what he has done — murder has become routine to him. This is part of his moral decline: he has gone from being a loyal soldier to someone who sees killing as merely inconvenient.

At the beginning of the play, Macbeth is a brave and respected warrior. He is called "brave Macbeth" and "noble Macbeth" by the other characters. King Duncan rewards him with the title Thane of Cawdor. He seems like a good person, although the witches\' prophecies start to corrupt his thinking.

His first major decline comes when he murders Duncan. Even then, he feels terrible guilt, saying "Will all great Neptune\'s ocean wash this blood clean from my hand?" This shows he knows what he has done is wrong. But after this, his decline accelerates. He has Banquo murdered, and then attacks Macduff\'s innocent wife and children. Each crime shows him becoming more ruthless and less human.

By the end of the play, Macbeth seems almost numb. He says "I have supped full with horrors" meaning he is so used to terrible things that they no longer affect him. When he hears Lady Macbeth has died, he says "She should have died hereafter" — he barely reacts. Shakespeare presents this numbness as the final stage of moral decline: Macbeth has not just become evil, he has lost the ability to feel anything at all.`,
      'Grade 6-7': `Shakespeare presents Macbeth\'s moral decline through a carefully structured sequence of psychological states: initial resistance, tormented action, desperate escalation, and finally emotional numbness. This extract captures the pivotal moment where Macbeth abandons the possibility of redemption and commits to continued violence.

The blood metaphor — "in blood / Stepped in so far" — transforms cumulative murder into a physical landscape. The verb "stepped" implies gradual immersion rather than a single plunge, suggesting that moral decline is not a dramatic fall but an incremental process — each crime taking Macbeth deeper into a river he did not initially intend to cross. The enjambment across "in blood / Stepped" forces the reader to wade through the line break as Macbeth wades through blood, creating a formal equivalent of the experience it describes.

The word "tedious" is the extract\'s most devastating choice. Macbeth reduces the moral calculation between continued murder and repentance to a question of effort — both directions are equally "tedious," equally tiresome, and the distinction between them is logistical rather than ethical. This represents a catastrophic failure of moral vocabulary: the man who once asked whether "all great Neptune\'s ocean" could clean his hands now treats the same blood with weary indifference. Shakespeare tracks moral decline not through increasing horror but through decreasing affect — Macbeth becomes more dangerous precisely as he becomes less horrified.

The play\'s opening establishes Macbeth as a figure of martial virtue. The Captain\'s account of the battle — Macbeth\'s sword that "smoked with bloody execution" — presents violence as heroic when sanctioned by legitimate authority. This is significant because it establishes that Macbeth is not naturally peaceful: his capacity for violence pre-exists his corruption, and the witches\' prophecies redirect rather than create his destructive potential. The soliloquy in Act 1 Scene 7 demonstrates his moral awareness at its most acute — he catalogues every reason not to kill Duncan, recognises the justice of his own arguments, and proceeds regardless, making his crime one of knowledge rather than ignorance.

The murder of Banquo marks a qualitative shift. Where Duncan\'s murder was performed reluctantly, in anguished awareness of its consequences, Banquo\'s is commissioned pragmatically — Macbeth hires murderers, distances himself from the act, and frames the decision in the language of political necessity. The decline from personal anguish to administrative efficiency is Shakespeare\'s most chilling insight into the mechanics of tyranny. By Act 4, the attack on Macduff\'s family represents pure tactical violence — Macbeth no longer even pretends to moral justification but acts on impulse: "The firstlings of my heart shall be the firstlings of my hand."

By Act 5, Shakespeare completes the arc with the "Tomorrow, and tomorrow, and tomorrow" soliloquy, in which Macbeth arrives at a nihilism so complete that life itself is "a tale told by an idiot, full of sound and fury, signifying nothing." This is not philosophical wisdom but the endpoint of moral decline: a consciousness so thoroughly emptied by violence that it can no longer perceive meaning in anything. Shakespeare presents Macbeth\'s tragedy not as punishment for a single crime but as the progressive self-destruction of a complex moral intelligence — the loss not merely of goodness but of the capacity to recognise goodness, which is the more terrible deprivation.`,
      'Grade 8-9': `Shakespeare architecturally designs Macbeth\'s moral decline as a study in the erosion of interiority — the progressive emptying of a rich psychological landscape until nothing remains but the mechanical repetition of violence. This extract captures the precise moment at which moral reasoning is replaced by strategic calculation, and the metaphor Shakespeare chooses to dramatise this transition is one of the most formally perfect in English literature.

"I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o\'er" constructs moral experience as topography — a river of blood through which Macbeth has waded to the midpoint, where forward and backward are equidistant and therefore, in his calculus, equivalent. The geographical metaphor performs a philosophical operation: it converts a moral question (should I continue killing?) into a spatial one (which direction is shorter?), and this conversion is itself the moral decline the speech describes. The ethical distinction between continuing to murder and ceasing to murder — which should be absolute — has been dissolved into a quantitative assessment of effort. The word "tedious" consummates this dissolution: it belongs to the vocabulary of inconvenience, not morality, and its presence in a sentence about mass murder constitutes a form of linguistic atrocity — the violence done to language mirrors the violence done to human life.

Shakespeare establishes Macbeth\'s starting point with characteristic precision. The battlefield report in Act 1 Scene 2 presents a man whose violence is not only acceptable but celebrated — Macbeth "unseamed" Macdonwald "from the nave to the chops," a description of extraordinary brutality that is narrated with heroic relish. This establishes that the distinction between legitimate and illegitimate violence in the play\'s moral universe is not a matter of degree but of authorisation: the same act that makes Macbeth "brave" on the battlefield makes him a "butcher" in the bedchamber. The play interrogates this distinction rather than simply endorsing it, asking whether a man whose profession is killing can meaningfully be said to "decline" when he redirects that capacity from state-sanctioned to self-interested targets.

The soliloquy in Act 1 Scene 7 represents the high-water mark of Macbeth\'s moral consciousness. His enumeration of reasons against the murder — Duncan\'s kinship, his hospitality, his virtue — demonstrates a sophisticated moral intelligence capable of weighing competing obligations. The imagery is cosmically scaled: angels "trumpet-tongued," pity as a "naked new-born babe / Striding the blast." This linguistic richness is itself significant — Macbeth\'s moral imagination at this point is so fertile that it produces some of the most complex figurative language in Shakespeare. The subsequent decline can be measured not only in the escalation of violence but in the impoverishment of language: compare the baroque complexity of Act 1 Scene 7 with the deadened monosyllables of "She should have died hereafter" in Act 5. Moral decline is, in Shakespeare\'s dramatisation, a form of linguistic decline — the progressive loss of the vocabulary through which ethical distinctions are made.

The murder of Banquo introduces the bureaucratisation of violence that the blood-wading metaphor will later describe. Macbeth does not kill Banquo himself but hires proxies, and his conversation with the murderers is conducted in the language of employment negotiation rather than moral deliberation. This distancing — from personal to delegated violence — mirrors the political structures of tyranny, in which the ruler maintains power through a chain of command that diffuses moral responsibility. The attack on Macduff\'s family completes the transition from reluctant murderer to systematic tyrant — these are not rivals or threats but innocents, and their destruction serves no strategic purpose beyond the expression of power itself.

The "Tomorrow" soliloquy in Act 5 is the terminus of the decline, and its nihilism is not a philosophical position but a psychological condition. When Macbeth declares life "a tale told by an idiot, full of sound and fury, signifying nothing," he is describing his own experience with devastating accuracy: his life has become a tale of sound and fury — battles, murders, hauntings — that has been emptied of significance by the very violence that was supposed to secure his ambition. The circular irony is complete: Macbeth killed to gain meaning (kingship, power, legacy) and the killing itself has destroyed his capacity to experience meaning. This is Shakespeare\'s profoundest insight into the psychology of violence: it does not merely damage others but annihilates the perpetrator\'s inner world, leaving a figure who can describe the emptiness of existence with poetic precision but can no longer feel anything at all — a consciousness that has become its own tomb.`,
    },
    markScheme: [
      'Analyses how Shakespeare presents Macbeth\'s moral decline through language and imagery',
      'Closely examines specific words and images in the extract',
      'Traces the decline across the whole play with well-chosen references',
      'Considers relevant context (Jacobean attitudes, the moral order, tragedy)',
      'Uses precisely embedded quotations to support a sustained argument',
      'Develops a conceptualised response to the nature of moral decline',
    ],
    examinerTips: [
      'WJEC splits marks between extract analysis and the wider essay — address both carefully.',
      'Track the decline as a process with distinct stages, not a single event.',
      'Pay close attention to changes in Macbeth\'s language — how his vocabulary changes reflects his moral change.',
      'Consider what makes Macbeth a tragic figure rather than simply a villain.',
    ],
  },

  // WJEC Literature — Prose (19th Century) 1
  {
    id: 'wjec-lit-prose-19c-1',
    board: 'WJEC',
    type: 'Character Analysis',
    questionType: 'Character Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol — The Ghost of Christmas Yet to Come',
    extract: `The Phantom slowly, gravely, silently, approached. When it came near him, Scrooge bent down upon his knee; for in the very air through which this Spirit moved it seemed to scatter gloom and mystery.\nIt was shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand.`,
    extractSource: 'Written in the style of Charles Dickens\'s A Christmas Carol, Stave 4',
    question: 'How does Dickens use the Ghost of Christmas Yet to Come to create fear and to change Scrooge? Write about this extract and the novella as a whole. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens creates fear through the way the Ghost is described. It approaches "slowly, gravely, silently," and the three adverbs build up a sense of something terrifying. Unlike the other ghosts who speak and interact with Scrooge, this Ghost says nothing, which makes it even more frightening because Scrooge cannot reason with it.

The Ghost is "shrouded in a deep black garment" which hides everything about it. The word "shrouded" connects to death because shrouds are used to wrap dead bodies. The only visible part is "one outstretched hand," which is pointing, directing Scrooge to look at scenes of his future. The darkness and mystery make the Ghost seem like death itself.

Scrooge\'s reaction shows his fear — he "bent down upon his knee," which means he is kneeling in submission. The phrase "scatter gloom and mystery" shows the Ghost brings darkness wherever it goes. This is the most powerful ghost because it represents the future, which Scrooge can still change.

The Ghost of Christmas Yet to Come changes Scrooge by showing him the worst possible future. It shows people stealing from his dead body, his lonely grave, and the Cratchit family mourning Tiny Tim. These scenes terrify Scrooge because he sees that if he does not change, he will die alone and unmourned while innocent people like Tiny Tim will also die.

Dickens uses this Ghost to deliver the final shock that completes Scrooge\'s transformation. After the emotional memories of the Ghost of Christmas Past and the social lessons of the Ghost of Christmas Present, the Ghost of Christmas Yet to Come provides the fear that finally makes Scrooge determined to change his ways.`,
      'Grade 6-7': `Dickens constructs the Ghost of Christmas Yet to Come as the novella\'s most psychologically effective agent of transformation, using its silence and concealment to force both Scrooge and the reader into an active, interpretive role that the previous ghosts\' verbosity precluded.

The extract\'s adverbial tricolon — "slowly, gravely, silently" — establishes the Ghost\'s approach as ritualistic and inevitable. Each adverb reduces a different quality: "slowly" eliminates haste, "gravely" eliminates levity, "silently" eliminates communication. The Ghost arrives not as a character but as an absence — a figure defined by what it withholds. The verb "scatter" in "seemed to scatter gloom and mystery" suggests the Ghost does not merely possess these qualities but disperses them, contaminating the atmosphere it moves through. The passive construction — "it seemed" — introduces uncertainty, as if the narrator is unsure whether the effect is real or projected.

The description of the garment — "concealed its head, its face, its form" — uses anaphoric repetition to catalogue what cannot be seen, and the effect is paradoxical: the more Dickens describes the concealment, the more vivid our sense of what is concealed. The "one outstretched hand" is the only point of contact between the Ghost and the visible world, and its gesture of pointing becomes the stave\'s controlling image — the Ghost does not speak but directs, forcing Scrooge to look at what he would rather not see.

The Ghost\'s silence is its most powerful attribute. The Ghost of Christmas Past engages Scrooge in dialogue; the Ghost of Christmas Present challenges and instructs. The Ghost of Christmas Yet to Come simply presents evidence and waits. This method is more terrifying because it requires Scrooge to draw his own conclusions — there is no spirit to argue with, no interpretation to reject. The silence also connects the Ghost to death itself, which is similarly non-negotiable and inarticulate.

Dickens designs the three ghosts as a pedagogical sequence. The Ghost of Christmas Past teaches through emotion (nostalgia, regret); the Ghost of Christmas Present teaches through empathy (the Cratchits, Ignorance and Want); the Ghost of Christmas Yet to Come teaches through fear (death, oblivion). Each appeals to a different psychological faculty, and together they dismantle every defence Scrooge has constructed against moral feeling. The final ghost is positioned last because fear is the most primitive and powerful motivator — Dickens understood that sustained behavioural change requires not just intellectual conviction but visceral dread.

Contextually, the Ghost draws on the memento mori tradition — the medieval artistic convention of representing death as a hooded, skeletal figure — and the Victorian fascination with mortality that produced elaborate funeral customs, mourning dress, and deathbed scenes. Dickens appropriates this cultural preoccupation to serve his social argument: the fear of death, properly directed, becomes the catalyst for a transformed life.`,
      'Grade 8-9': `Dickens constructs the Ghost of Christmas Yet to Come as the novella\'s most sophisticated rhetorical instrument — a figure whose power derives not from what it reveals but from the interpretive labour it demands of its subject. Where the previous Ghosts are pedagogues, this one is a mirror: it presents images without commentary and forces Scrooge to supply the meaning, a process that constitutes the final stage of his moral education.

The extract\'s formal properties are carefully calibrated to produce dread through restraint. The triple adverb sequence — "slowly, gravely, silently" — performs a rhythmic deceleration that mimics the Ghost\'s approach, each word longer than the last (two syllables, two syllables, three syllables), the tempo broadening as the figure draws near. The absence of a main verb in the descriptive passage — we are told what the Ghost conceals but not what it does — creates a grammatical vacuum that corresponds to the Ghost\'s ontological ambiguity. The verb "shrouded" is Dickens\'s most loaded choice: it belongs to the lexical field of burial, but "shroud" also means "to hide," and the double meaning collapses the distinction between death and concealment, suggesting that what the garment hides is not a body but its absence — the Ghost may be not a figure but a void, a shape made of darkness.

The "one outstretched hand" operates as a metonymic concentration of the Ghost\'s power. In a figure that is otherwise entirely concealed, this single visible element carries the full weight of the Ghost\'s agency. The hand points but does not speak, directs but does not explain, and this combination of purposeful gesture and absolute silence creates what might be called authoritarian pedagogy — instruction that permits no questioning. Scrooge, who has throughout the novella resisted, argued, and pleaded with the spirits, is here reduced to obedience: he "bent down upon his knee" not because the Ghost commands it but because its presence makes resistance inconceivable.

The Ghost\'s method — showing Scrooge scenes from a possible future without identifying him as the dead man until the final moment — is a narrative technique borrowed from parable. By withholding the revelation that the unmourned corpse is Scrooge himself, Dickens forces Scrooge (and the reader) to develop empathy for the anonymous dead before discovering that the object of pity is the self. This is morally transformative because it breaks the circuit of self-interest: Scrooge learns to feel compassion for a stranger before learning that the stranger is him, and this sequence cannot be reversed — the compassion, once felt, cannot be unfelt merely because its object turns out to be the self.

Dickens positions the Ghost of Christmas Yet to Come as the culmination of a carefully structured sequence in which each ghost dismantles a specific psychological defence. The Ghost of Christmas Past penetrates Scrooge\'s temporal defence — his refusal to acknowledge the past that made him who he is. The Ghost of Christmas Present penetrates his spatial defence — his refusal to acknowledge the suffering that exists beyond his counting house. The Ghost of Christmas Yet to Come penetrates his ultimate defence — the assumption that the future is not his concern. Together, the three ghosts reconstruct Scrooge\'s moral world by forcing him to inhabit temporal and spatial dimensions he has spent decades excluding.

The novella\'s fairy-tale structure is essential to understanding the Ghost\'s function. In realist fiction, death is final; in the fairy tale, it is conditional. The Ghost shows Scrooge a future that can be avoided, and this conditionality is what makes fear productive rather than paralysing. Dickens understood that despair is the enemy of reform — if the future is fixed, there is no motivation to change — and the Ghost\'s silence on the question of whether these shadows "are" or merely "may be" preserves the possibility of agency that makes Scrooge\'s transformation both credible and morally instructive. The reader, like Scrooge, is left with a choice: to dismiss the vision and continue as before, or to accept its implications and live differently. The Ghost\'s outstretched hand points at Scrooge, but it also points at us.`,
    },
    markScheme: [
      'Analyses how Dickens uses the Ghost to create fear through language and imagery',
      'Explores specific words and phrases in the extract and their effects',
      'Discusses the Ghost\'s role in Scrooge\'s transformation across the novella',
      'Considers relevant context (Victorian attitudes to death, Dickens\'s social purpose)',
      'Uses well-integrated quotations to support the argument',
      'Develops a sustained response about the Ghost\'s significance',
    ],
    examinerTips: [
      'WJEC expects you to cover both the extract and the wider text.',
      'Consider the Ghost in relation to the other two ghosts — the sequence matters.',
      'The Ghost\'s silence is as important as what the other ghosts say.',
      'Connect the Ghost\'s function to Dickens\'s purpose: why does he use fear to promote social change?',
    ],
  },

  // WJEC Literature — Prose (19th Century) 2
  {
    id: 'wjec-lit-prose-19c-2',
    board: 'WJEC',
    type: 'Theme Analysis',
    questionType: 'Theme Analysis',
    tier: 'GCSE',
    title: 'A Christmas Carol — Poverty and Wealth',
    extract: `Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.`,
    extractSource: 'Written in the style of Charles Dickens\'s A Christmas Carol, Stave 1',
    question: 'How does Dickens present ideas about poverty and wealth in A Christmas Carol? Write about this extract and the novella as a whole. (20 marks)',
    marks: 20,
    timing: '30 minutes',
    modelAnswers: {
      'Grade 4-5': `In this extract, Dickens describes Scrooge as extremely greedy and unkind. The list of adjectives "squeezing, wrenching, grasping, scraping, clutching, covetous" all describe someone who holds onto their money tightly and takes from others. Each word is about grabbing and keeping, which shows Scrooge represents the worst qualities of wealth.

The simile "hard and sharp as flint" compares Scrooge to a stone, suggesting he has no warmth or softness. Flint cannot produce "generous fire," meaning Scrooge cannot be generous. The word "solitary as an oyster" is another simile that shows he has closed himself off from everyone, like an oyster in its shell.

Throughout the novella, Dickens contrasts Scrooge\'s wealth with the poverty of others. The Cratchit family is poor but happy and loving. They share a small goose for Christmas dinner and enjoy it together. Tiny Tim is ill because they cannot afford proper medical care, but he is cheerful and kind. This contrast shows that wealth does not bring happiness but poverty does not destroy it either.

Dickens also shows the suffering caused by poverty. The Ghost of Christmas Present reveals two children called Ignorance and Want, who represent the problems in society. The charity collectors describe people who would "rather die" than go to the workhouse. These details show how terrible poverty was in Victorian England.

Dickens wrote this novella in 1843 to make rich people feel responsible for the poor. He believed that wealthy people like Scrooge could change society if they chose to be generous. The transformation at the end — where Scrooge raises Bob Cratchit\'s wages, sends a turkey to the Cratchits, and donates to charity — shows Dickens\'s vision of what individual generosity could achieve.`,
      'Grade 6-7': `Dickens opens the novella by constructing Scrooge as wealth itself personified — not merely a wealthy man but the embodiment of acquisition as a way of being. The heptad of predatory participles — "squeezing, wrenching, grasping, scraping, clutching, covetous" — escalates through increasingly violent physical actions, each one describing a different mode of taking. The grammatical choice is significant: these are present participles, suggesting ongoing, habitual action rather than completed events. Scrooge does not merely have money; he is perpetually in the process of acquiring it, and this perpetuity is itself a form of moral stasis.

The simile "hard and sharp as flint, from which no steel had ever struck out generous fire" operates on several levels. Literally, flint produces fire when struck by steel — it requires external force to generate warmth. The past perfect "had ever" establishes that no such force has been successfully applied, but the conditional structure implies that it could be — that even Scrooge possesses the latent capacity for generosity, awaiting the right catalyst. The three ghosts become that catalyst, and Dickens\'s structural genius is to make the same material (Scrooge\'s character) produce both the hardness of Stave 1 and the warmth of Stave 5.

Dickens presents poverty and wealth not as neutral economic conditions but as moral states with spiritual consequences. The Cratchit family demonstrates that material poverty need not produce spiritual poverty — their celebration of Christmas is richer in love, gratitude, and connection than anything in Scrooge\'s empty house. Bob Cratchit toasts his employer despite his exploitation, an act of grace that shames Scrooge more effectively than any accusation. Conversely, Scrooge\'s wealth has produced a poverty of human connection — he is "solitary as an oyster," enclosed in a shell of accumulated capital that insulates him from the human world.

The allegorical children, Ignorance and Want, universalise the argument from individual to systemic. Priestley\'s critique is not simply that Scrooge is mean but that he represents a class whose philosophy — articulated in his endorsement of prisons, workhouses, and the treadmill — produces and perpetuates poverty. The Ghost\'s warning to "beware this boy" (Ignorance) implies that the greater danger is not poverty itself but the refusal to acknowledge it — the wilful blindness of a wealthy class that has constructed ideological justifications for the suffering it produces.

Contextually, Dickens was responding to the political economy of Malthus and the utilitarian philosophy that underpinned the 1834 Poor Law. Scrooge\'s language — "decrease the surplus population" — directly echoes Malthusian arguments about overpopulation, and Dickens returns this language to Scrooge later in the novella when the Ghost of Christmas Present quotes it back to him. By making Scrooge speak the language of political economy, Dickens demonstrates that economic theory, stripped of its abstractions, produces specific, identifiable human suffering — and that the transformation of society begins with the transformation of the heart.`,
      'Grade 8-9': `Dickens opens A Christmas Carol with a prose style that performs the very critique it articulates. The description of Scrooge is not analytical but incantatory — the seven-fold catalogue of participles ("squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner") builds through rhythmic accumulation rather than logical argument, overwhelming the reader with the sheer excess of Scrooge\'s avarice. The stylistic excess is deliberate: Dickens fights accumulation with accumulation, deploying a surplus of language to combat a surplus of capital. The shift from physical participles (squeezing through clutching) to the abstract adjective "covetous" marks a progression from action to disposition, from what Scrooge does to what he is, and the appositional "old sinner" introduces the theological register that will govern the novella\'s moral logic.

The simile "solitary as an oyster" condenses the novella\'s central argument about wealth into a single image. The oyster produces a pearl — the most valuable object in the Elizabethan imagination — but only by sealing itself off from the world, converting irritation into treasure through a process of organic isolation. Scrooge\'s wealth operates by the same logic: it is produced by closing off every channel of human connection, and the pearl he has generated — his fortune — exists within a shell that makes it inaccessible to anyone, including himself. The transformation Dickens narrates is the cracking of this shell, and the subsequent redistribution of its contents — money, warmth, connection — to the community from which they were extracted.

Dickens structures the novella so that poverty and wealth are not simply opposed but causally connected. The Cratchits are not poor by accident; they are poor because Scrooge pays Bob Cratchit fifteen shillings a week — a wage he could easily increase, given that he "had his name painted up on the warehouse." The causal chain is explicit: Scrooge\'s wealth is extracted from the labour of people like Cratchit, and the Cratchits\' poverty is the direct product of Scrooge\'s business practices. Dickens does not present this as a structural analysis of capitalism (he was not Marx), but the novella\'s emotional logic arrives at a similar conclusion: wealth that is accumulated through the exploitation of labour is not legitimate prosperity but institutional theft.

The novella\'s treatment of poverty is, however, more complex than simple sympathy. The Cratchit family is idealised — their poverty is picturesque, their suffering ennobling, and their gratitude unfailing — and this idealisation has been criticised as condescending, a middle-class fantasy of the "deserving poor." But Dickens\'s purpose is rhetorical rather than documentary: the Cratchits must be sympathetic because Dickens is writing for an audience that needs to be moved, not informed. The allegorical children — Ignorance and Want — operate at a different register entirely: they are not lovable but monstrous, "yellow, meagre, ragged, scowling, wolfish," and their appearance beneath the Ghost\'s robes suggests that the pleasant surface of prosperous society conceals a feral underclass that civilisation has created and refuses to acknowledge.

The transformation in Stave 5 raises the question of whether individual generosity is adequate to systemic poverty. Scrooge raises Cratchit\'s wages, saves Tiny Tim, and donates to charity — but these are acts of personal benevolence within a system that produced the conditions necessitating them. Dickens was aware of this limitation — his journalism and novels consistently argue for institutional reform as well as individual charity — but the novella\'s form (the fairy tale, the redemption narrative) demands a resolution that is personal rather than political. The tension between the systemic diagnosis and the individual solution is the novella\'s productive contradiction: it makes the reader feel that change is possible (through Scrooge\'s example) while implicitly acknowledging that feeling is not enough (through the scale of suffering the Ghosts reveal). The novella\'s enduring power lies precisely in this unresolved tension — it moves us to generosity while leaving the structural causes of poverty untouched, a combination that explains both its enormous cultural influence and its ultimate political limitations.`,
    },
    markScheme: [
      'Analyses how Dickens presents poverty and wealth through language, character, and structure',
      'Explores specific words and phrases in the extract and their effects',
      'Discusses poverty and wealth across the whole novella',
      'Considers relevant context (Victorian poverty, the Poor Law, Dickens\'s social purpose)',
      'Uses well-integrated quotations to support the argument',
      'Develops a sustained, conceptualised response to the theme',
    ],
    examinerTips: [
      'WJEC expects close reading of the extract — spend time on individual words and images.',
      'Connect poverty to specific characters and scenes across the novella.',
      'Consider Dickens\'s purpose: why did he write this novella? What response did he want?',
      'The best responses recognise complexity — Dickens\'s treatment of poverty is not simple.',
    ],
  },

  // WJEC Literature — Poetry 1
  {
    id: 'wjec-lit-poetry-1',
    board: 'WJEC',
    type: 'Poetry Comparison',
    questionType: 'Poetry Comparison',
    tier: 'GCSE',
    title: 'Poetry Comparison — Loss and Grief',
    extract: `Poem A — "Funeral Blues" by W.H. Auden (extract):\n"Stop all the clocks, cut off the telephone,\nPrevent the dog from barking with a juicy bone,\nSilence the pianos and with muffled drum\nBring out the coffin, let the mourners come.\n\nHe was my North, my South, my East, my West,\nMy working week and my Sunday rest,\nMy noon, my midnight, my talk, my song;\nI thought that love would last for ever: I was wrong."\n\nCompare with one other poem about loss.`,
    extractSource: 'Poetry extract',
    question: 'Compare how the poets present grief and loss in "Funeral Blues" and one other poem you have studied. (25 marks)',
    marks: 25,
    timing: '40 minutes',
    modelAnswers: {
      'Grade 4-5': `Both "Funeral Blues" by W.H. Auden and "Do Not Go Gentle into That Good Night" by Dylan Thomas present strong feelings of grief and loss, but they express them in different ways.

In "Funeral Blues," Auden presents grief as wanting to stop the entire world. The opening commands — "Stop all the clocks, cut off the telephone" — are imperatives that show the speaker wants everything to halt because the person they love has died. The metaphor "He was my North, my South, my East, my West" uses compass directions to show that the dead person was everything — they gave the speaker\'s life direction and meaning. The final line "I thought that love would last for ever: I was wrong" is simple and devastating. The colon creates a pause before the blunt admission "I was wrong," which makes the reader feel the speaker\'s shock.

In "Do Not Go Gentle into That Good Night," Thomas presents grief differently — not as mourning someone who has already died but as desperately trying to prevent death. The repeated refrain "Rage, rage against the dying of the light" is addressed to his dying father, urging him to fight death. The verb "rage" suggests anger and energy, which contrasts with Auden\'s stillness and silence.

Both poems present grief as overwhelming, but they respond to it in opposite ways. Auden wants the world to stop and be quiet; Thomas wants his father to fight and rage. Auden accepts the loss but is devastated by it; Thomas refuses to accept it at all. Both poets use structured forms — Auden\'s regular rhyming couplets and Thomas\'s villanelle — to contain emotions that might otherwise be uncontrollable.`,
      'Grade 6-7': `Auden and Thomas present grief as an experience that disrupts the fundamental order of the world, but their responses to this disruption are diametrically opposed: Auden demands that the world acknowledge its collapse; Thomas demands that the dying refuse to complete it.

Auden\'s opening stanza uses a sequence of imperatives — "Stop," "cut off," "Prevent," "Silence" — that attempt to impose the speaker\'s grief onto external reality. The commands escalate from the mechanical (clocks, telephones) to the organic (the dog) to the artistic (pianos), suggesting that grief demands the cessation of all activity, whether functional, natural, or creative. The "muffled drum" introduces a military funeral register that elevates private loss to public ceremony, and the final command — "let the mourners come" — shifts from prohibition to permission, acknowledging that grief requires witnesses.

The second stanza transforms the dead person into the speaker\'s entire coordinate system. The compass metaphor — "my North, my South, my East, my West" — constructs the beloved as the reference point by which the speaker navigated the world, and the subsequent temporal pairs ("My working week and my Sunday rest, / My noon, my midnight") extend this to time itself. The anaphoric "My" asserts possession while simultaneously cataloguing loss: each claim of ownership is also an inventory of what has been taken. The final line — "I thought that love would last for ever: I was wrong" — achieves its devastating effect through simplicity. After the elaborate figurative language of the preceding lines, the monosyllabic admission "I was wrong" strips away rhetoric, and the colon that precedes it creates a silence in which the reader feels the full weight of disillusionment.

Thomas\'s "Do Not Go Gentle into That Good Night" adopts the opposite strategy: where Auden accepts loss and demands that the world respond to it, Thomas refuses loss and demands that the dying resist it. The villanelle form — with its obsessive repetition of two refrains — formally enacts the poem\'s emotional compulsion: the repeated "Do not go gentle" and "Rage, rage against the dying of the light" return like the speaker\'s refusal to accept mortality, each recurrence carrying additional emotional weight. The euphemism "that good night" makes death sound gentle and welcoming, and the poem\'s fury is directed not just at death but at the temptation of acceptance.

The four central stanzas catalogue different types of men — "wise men," "good men," "wild men," "grave men" — who all resist death, regardless of how they have lived. Thomas argues that the impulse to resist is universal, not a function of character or achievement. The paradox "Grave men, near death, who see with blinding sight" transforms the physical limitations of dying into a form of enhanced perception — even at the point of death, clarity is possible, and this clarity itself is an argument against submission.

Both poets ultimately use formal constraint to manage overwhelming emotion. Auden\'s regular rhyming couplets and quatrain structure contain his grief within a predictable acoustic pattern, while Thomas\'s villanelle — one of the most restrictive forms in English poetry — channels desperation into an intricate arrangement of repeated lines and interlocking rhymes. The formal discipline of both poems argues implicitly that grief, however devastating, can be shaped into art, and that this shaping is itself a form of resistance to the chaos that loss threatens to impose.`,
      'Grade 8-9': `Auden and Thomas articulate competing philosophies of grief that illuminate a fundamental question: is the appropriate response to loss acceptance or resistance? Both poets write from positions of extremity — Auden from the aftermath of death, Thomas from its approach — and the temporal difference between their positions generates formally and philosophically distinct treatments of the same emotional territory.

Auden\'s "Funeral Blues" opens with a series of imperatives that attempt to restructure reality around the fact of loss. "Stop all the clocks, cut off the telephone" — these are not hyperbolic expressions of sorrow but literal demands for the cessation of the mechanisms by which ordinary time is measured and transmitted. The clock and the telephone are instruments of social coordination, and their silencing is a demand that the social world acknowledge its own inadequacy in the face of individual loss. The escalation to "Prevent the dog from barking" extends the command to the natural world, and "Silence the pianos" extends it to the aesthetic — grief, in Auden\'s formulation, is so total that it invalidates function, nature, and art simultaneously.

The compass metaphor in the second stanza — "He was my North, my South, my East, my West" — performs the rhetorical operation that is the poem\'s most formally ambitious move. By identifying the beloved with all four cardinal directions, the speaker establishes that the dead person was not merely important but constitutive — not a feature of the speaker\'s world but its coordinate system, the framework within which all other positions were defined. The death of such a person does not merely create a gap in the world but collapses the world\'s structure, making navigation impossible. The subsequent temporal coordinates ("working week and Sunday rest, / noon, midnight") extend the metaphor into time, suggesting that the beloved organised not just space but duration — and the loss of this temporal structure is what gives the poem\'s opening its logic: if the person who gave time its meaning is dead, then clocks must stop because time itself has become meaningless.

Thomas\'s villanelle occupies the opposite emotional position: where Auden accepts death and demands that the world accommodate it, Thomas refuses death and demands that the dying defy it. The villanelle form is the poem\'s most profound formal choice: its two refrains — "Do not go gentle into that good night" and "Rage, rage against the dying of the light" — return with the mechanical inevitability of a ticking clock, and this formal inexorability mirrors the biological inevitability that the poem\'s content resists. The tension between the form\'s deterministic structure and the speaker\'s insistence on agency is the poem\'s tragic engine: the words demand freedom while the form demonstrates constraint, and the reader experiences both simultaneously.

The four central stanzas construct a taxonomy of resistance that is philosophically crucial. Thomas argues that rage against death is not contingent on how one has lived — wise men, good men, wild men, and grave men all resist, regardless of their relationship to wisdom, goodness, freedom, or solemnity. This universalisation of resistance is itself an argument: if death is resisted by all types of men, then resistance is not a personal choice but a natural imperative, and to "go gentle" is to act against nature, not in accordance with it. The paradox "Grave men, near death, who see with blinding sight" crystallises this argument: proximity to death produces not resignation but perception, a clarity so intense it is experienced as blindness, and this paradoxical seeing-through-loss is the poem\'s closest approach to a philosophy of grief.

The poems\' respective endings reveal their deepest divergence. Auden\'s "I thought that love would last for ever: I was wrong" arrives at a truth that is simultaneously devastating and clarifying — the recognition of error is painful, but it is also knowledge, a form of understanding that, however bitter, replaces illusion with reality. Thomas\'s final stanza — "And you, my father, there on the sad height, / Curse, bless, me now with your fierce tears, I pray" — refuses closure entirely: the oxymoron "Curse, bless" and the compound plea demand from the dying father a response that contains contradiction, an emotional state that is simultaneously hostile and loving, rejecting and embracing. Where Auden\'s grief resolves into acceptance, Thomas\'s remains permanently unresolved, suspended between rage and supplication, and the poem\'s final word — "pray" — introduces a religious register that the poem\'s secular fury has consistently resisted, as though grief, at its most extreme, collapses even the distinction between belief and unbelief.`,
    },
    markScheme: [
      'Compares how both poets present grief and loss through language, form, and imagery',
      'Analyses specific poetic techniques and their effects in both poems',
      'Maintains a comparative structure throughout',
      'Considers relevant contextual factors for both poets',
      'Uses well-integrated quotations from both poems',
      'Develops a sustained, original argument about both texts',
    ],
    examinerTips: [
      'WJEC values sustained comparison — write about both poems together, not one then the other.',
      'Consider form and structure: why does each poet choose their particular form?',
      'Compare how the poems end as well as how they begin.',
      'Personal engagement with the poems is valued — what do they make you feel and think?',
    ],
  },

  // WJEC Literature — Poetry 2 (Unseen)
  {
    id: 'wjec-lit-poetry-2',
    board: 'WJEC',
    type: 'Unseen Poetry',
    questionType: 'Unseen Poetry',
    tier: 'GCSE',
    title: 'Unseen Poetry — Nature and Change',
    extract: `Late October\n\nThe trees are giving everything away —\ntheir savings, all of them, in reds and golds,\nscattered like coins across the pavement\nfor anyone to pick up, or not.\n\nThe wind is generous with what it takes.\nIt carries a leaf past my window\nthe way a river carries a boat\nthat has slipped its mooring.\n\nSoon the branches will stand with nothing,\nhonest at last, their shape revealed\nlike the truth you see in someone\'s face\nwhen they have stopped pretending to be fine.`,
    extractSource: 'Original poem written for this exercise',
    question: 'How does the poet use language and imagery to present ideas about nature and change in "Late October"? (20 marks)',
    marks: 20,
    timing: '25 minutes',
    modelAnswers: {
      'Grade 4-5': `The poet uses autumn as a way to talk about change and honesty. In the first stanza, the trees are "giving everything away," which personifies them as generous people. Their leaves are compared to "savings" in "reds and golds," which uses the colours of autumn leaves and also makes them sound like treasure. The simile "scattered like coins across the pavement" continues this idea of money, suggesting the trees are spending all their wealth.

The phrase "for anyone to pick up, or not" at the end of the stanza is casual, as if the trees do not care what happens to their leaves. This adds to the idea that autumn is about letting go without worrying.

In the second stanza, the wind is described as "generous with what it takes," which is a clever paradox because you would not normally call taking something generous. The leaf carried past the window is compared to "a boat that has slipped its mooring," which means a boat that has come loose from where it was tied. This suggests the leaf is drifting freely, which connects to the idea of things being released and changing.

The final stanza is the most powerful. The branches will "stand with nothing, honest at last," which suggests that losing leaves is like becoming honest — taking away the covering reveals the truth underneath. The simile comparing bare branches to "the truth you see in someone\'s face when they have stopped pretending to be fine" makes the poem suddenly feel personal and emotional. It suggests that sometimes losing things reveals who we really are, and that this honesty, even though it looks bare and exposed, is something valuable.`,
      'Grade 6-7': `The poet constructs autumn as an extended metaphor for emotional honesty, using the progressive shedding of leaves to explore the paradox that loss can reveal rather than diminish.

The opening line — "The trees are giving everything away" — establishes the central conceit through personification that operates in two registers simultaneously. Literally, the trees are dropping leaves; figuratively, they are performing an act of radical generosity, divesting themselves of accumulated wealth. The economic metaphor — "their savings, all of them, in reds and golds" — is sustained with precision: "savings" implies long accumulation (the entire growing season), and "reds and golds" are simultaneously autumnal colours and the colours of currency. The simile "scattered like coins across the pavement" extends the analogy to its physical conclusion, but the qualifying phrase "for anyone to pick up, or not" introduces an indifference that complicates the metaphor — this is generosity without concern for the recipient, giving without attachment to outcome. The casual comma before "or not" creates a shrug in the poem\'s tone, a nonchalance that will later be revealed as a form of wisdom.

The second stanza introduces the paradox that structures the poem\'s argument: "The wind is generous with what it takes." Generosity and taking are normally antithetical, but the oxymoron suggests that in the context of natural change, removal is itself a gift — the wind disperses what the trees have released, and this dispersal is a form of redistribution. The simile of the leaf as "a boat that has slipped its mooring" transforms loss into freedom: the boat has not been stolen but released, and the passive construction "has slipped" suggests that the separation is natural rather than violent, an organic loosening rather than a forced break.

The final stanza achieves the poem\'s emotional climax through a revelation that the preceding imagery has been preparing. The bare branches "stand with nothing, honest at last" — the adverbial "at last" implies that the previous state (leafy, full, apparently thriving) was a form of concealment, and that the branches\' true nature is revealed only through loss. The closing simile — "like the truth you see in someone\'s face / when they have stopped pretending to be fine" — ruptures the nature poem\'s pastoral register with a suddenly intimate, human observation. The phrase "pretending to be fine" is deliberately colloquial, almost painfully contemporary, and its insertion into a poem about autumn creates a tonal dissonance that is the poem\'s most effective device: the reader is confronted, unexpectedly, with the recognition that the poem has been about human vulnerability all along.

The three-stanza structure traces a movement from extravagance (giving away) through transition (drifting) to exposure (standing with nothing), and this progression mirrors the process of emotional unburdening. The poem argues, through its sustained natural metaphor, that the state we most fear — vulnerability, exposure, the loss of what we have accumulated — is also the state in which we are most truthful, and that this truthfulness, like the bare branch, possesses a beauty that concealment, however lush, cannot match.`,
      'Grade 8-9': `The poem constructs autumn as an epistemology of loss — a sustained argument that the process of shedding reveals more than the process of accumulation, and that what we call "nothing" (bare branches, empty hands, exposed feeling) may be the precondition for a form of truth that fullness obscures.

The opening stanza establishes an extended economic metaphor whose implications unfold with the precision of a logical proof. "The trees are giving everything away" personifies shedding as voluntary divestment, transforming a biological process into a moral act. The word "everything" is crucial: it insists on completeness, distinguishing this from selective generosity. The subsequent metaphor — "their savings, all of them, in reds and golds" — performs a complex operation on the reader\'s conceptual framework. "Savings" implies deferred gratification, wealth accumulated over time through restraint, and the revelation that the trees are surrendering these savings reframes autumn not as decay but as the decision to spend what has been stored. The colour-words "reds and golds" function doubly, signifying both natural beauty and monetary value, and this duality is the stanza\'s argumentative engine: beauty and value are being released simultaneously, and the question of who receives them ("for anyone to pick up, or not") is answered with a syntactic shrug that implies indifference to reception. The comma before "or not" creates a pause that is philosophically loaded — it suggests that the act of giving is sufficient in itself, independent of gratitude or utility.

The second stanza introduces the poem\'s central paradox through a single, compressed line: "The wind is generous with what it takes." This oxymoron requires the reader to reconcile generosity with appropriation, and the resolution lies in the poem\'s implicit argument that in a system of natural change, taking and giving are not opposed but continuous — the wind takes from the tree and gives to the air, the ground, the world beyond the tree\'s reach. The simile of the leaf as "a boat / that has slipped its mooring" extends this logic: "slipped" is reflexive, suggesting that the leaf released itself rather than being torn, and "mooring" implies that the attachment was always temporary, a provisional tethering rather than a permanent bond. The image of a boat drifting on a river introduces movement and direction into what might otherwise seem random, suggesting that loss has its own trajectory, its own destination.

The final stanza consummates the poem\'s argument with an image that retrospectively reorganises everything that has preceded it. "Soon the branches will stand with nothing, / honest at last" — the temporal adverb "soon" introduces anticipation rather than observation, and the adverbial "at last" is the poem\'s most revealing word. It implies that the branches\' summer foliage was not merely beautiful but concealing — a form of display that, like all display, was partially dishonest. The bare branch is "honest" because it shows its actual structure without ornament: every fork, every bend, every point of growth and breakage is visible. The closing simile — "like the truth you see in someone\'s face / when they have stopped pretending to be fine" — detonates the poem\'s pastoral surface to expose the human substrate beneath. The phrase "pretending to be fine" is the most emotionally loaded in the poem precisely because of its casualness — it belongs to everyday speech, to the vocabulary of social interaction, and its eruption into a poem about autumn creates a recognition that is physically startling. The reader realises that the poem has been about human concealment and human revelation all along, and that the trees, the wind, the drifting leaf were vehicles for a truth that could only be approached obliquely: that our fullest, most decorated states may be our least honest, and that the stripping away of what we thought we needed may be the beginning, not the end, of what we are.`,
    },
    markScheme: [
      'Analyses how the poet uses language and imagery to present nature and change',
      'Explores the effects of specific metaphors, similes, and word choices',
      'Comments on structure and the poem\'s development across its three stanzas',
      'Develops a personal interpretation of the poem\'s deeper meanings',
      'Uses well-selected, embedded quotations',
      'Writes with analytical precision and genuine engagement',
    ],
    examinerTips: [
      'For unseen poetry, spend time absorbing the poem before writing.',
      'WJEC values personal engagement — show what the poem means to you as well as analysing technique.',
      'Track how the poem builds its argument from stanza to stanza.',
      'The shift to human emotion in the final stanza is the poem\'s key moment — make sure you analyse it fully.',
    ],
  },

  // EDEXCEL PAPER 1 - Language Analysis & Reading
  {
    id: 'edexcel-p1-read-1',
    board: 'Edexcel',
    paper: 1,
    questionType: 'Reading Comprehension',
    difficulty: 'Foundation',
    extract: `The railway station was a cathedral of commerce. Massive iron girders stretched across the vaulted ceiling like the ribs of some sleeping leviathan. Passengers moved beneath them in a constant stream — businessmen with briefcases, tourists with maps, students with backpacks — a democratic flow of humanity converging on destinations both real and imagined. The smell of coffee and diesel fuel hung in the air, an odd perfume of modernity. And everywhere, everywhere, there was movement: the hurried shuffle of feet, the clank of departures boards, the hiss of train brakes.`,
    extractSource: 'Original composition',
    question: 'What impression of the railway station does the writer create in this extract? Use evidence from the text to support your answer.',
    marks: 8,
    timing: '10 minutes',
    modelAnswers: {
      'Grade 4-5': `The writer creates an impression of a busy and impressive place. The comparison to "a cathedral of commerce" shows it is a grand building where people go for important reasons. The "iron girders" compared to "the ribs of some sleeping leviathan" makes the building seem very large and alive. The "constant stream" of different types of people shows how many use the station. Sensory details like the "smell of coffee and diesel fuel" and sounds like "the clank of departures boards" make it feel lively and modern.`,
      'Grade 6-7': `The writer presents the station as both majestic and vital. The opening simile "a cathedral of commerce" elevates the space by comparing it to a place of worship whilst grounding it in commercial activity. The extended metaphor of iron girders as "the ribs of some sleeping leviathan" personifies the building as a living creature, suggesting it contains and sustains human movement. The cataloguing of passengers using asyndeton (omitting "and") creates a sense of hurried multiplicity. The sensory imagery — smell of "coffee and diesel fuel," onomatopoeia of "clank" and "hiss" — creates an acoustic and olfactory impression of relentless motion, constructing the station as a space where individual travellers are subsumed into collective movement.`,
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

  // OCR PAPER 1 - Creative Writing (Descriptive)
  {
    id: 'ocr-p1-desc-1',
    board: 'OCR',
    paper: 1,
    type: 'Creative Writing (Descriptive)',
    difficulty: 'Higher',
    title: 'Describe a space that holds significance',
    extract: ``,
    question: 'Write a descriptive piece about a space that holds meaning for you. Your writing should convey both what the space looks like and what it means to you. (400-500 words)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `The old library was my sanctuary. It was a large room on the second floor with tall windows that let in streams of afternoon light. Shelves stretched from floor to ceiling, packed with thousands of books. There was a smell of old paper and dust that I found comforting. In the corner near the window was my favourite armchair covered in dark green velvet. Nobody else ever sat there. I would spend hours there after school reading or looking out at the street below. The librarian, Mrs Chen, always made sure the cushion was ready for me. The room felt separate from the world — warm, safe, full of stories. When I was there, I didn\'t have to think about anything else. The books seemed to hold answers to questions I was afraid to ask aloud.`,
      'Grade 6-7': `The old library was my sanctuary — a space apart. Situated on the second floor of the town centre, it was a large rectangular room with tall sash windows facing the street. During late afternoon, when the sun angled through the western windows, light would strike the dust motes suspended in air, transforming them into a luminous cloud existing outside time. The shelves — dark wood, Victorian era — stretched from floor to ceiling on every wall except the one facing the windows. Thousands of books occupied these shelves, their spines faded by decades of light exposure: reds become russets, blues become slate. The air held the distinctive olfactory signature of a working library: sweet, slightly musty scent of ageing paper, overlaid with the metallic tang of dust. In the corner formed by the window wall and eastern bookshelves stood an armchair upholstered in dark green velvet, worn at the arms where countless hands had rested. This was my designated spot, though no plaque announced it. The librarian, Mrs Chen, had recognised my need for refuge and tacitly approved my occupation of this chair. The room functioned as a threshold space — neither entirely interior nor exterior, neither fully social nor solitary. The windows opened onto the street, yet the books created acoustic insulation muffling traffic below. I would sit in that chair in late afternoons, light gradually shifting as the sun moved westward, and in that liminal space between day and evening, I discovered that silence could be speech, and being understood could mean being left alone.`,
      'Grade 8-9': `The library was a threshold space — positioned at that exact point where private refuge becomes public institution, where interior life finds its architectural correlative. Located on the second floor of the town centre, it was a large rectangular chamber whose proportions created an acoustic envelope quite distinct from street-level commercial spaces below. The windows — tall sash windows along the western wall — operated as a selective portal: they admitted light and the abstract knowledge of the street\'s existence without requiring actual engagement with it. During late afternoon, when the sun descended to a particular angle of incidence, light would enter nearly horizontally, and billions of dust particles suspended in air would become visible as a three-dimensional scattering medium, the light itself made phenomenologically present through the matter it illuminated. The bookshelves — constructed of dark wood probably oak, though original colour had darkened to something closer to walnut — occupied every wall except the one containing windows. These shelves, rising from ankle-height to above-head-height, created intimate crowding; the books themselves bore witness to accumulated time through their material degradation: spines faded by photodegradation, pages yellowed by oxidation, cloth covers worn at creases where they had been opened thousands of times. The air maintained a persistent olfactory signature — the faintly sweet, slightly cloying scent of cellulose degradation mixed with fungal and bacterial colonisation of organic substrate, a smell that chemically registers as "age" to human sensory apparatus. The armchair — upholstered velvet piece dating probably from the 1950s, its grey-green having taken on the patina of extended contact with human skin-oils — occupied the corner formed by window wall and eastern bookshelves. Mrs Chen, the librarian, had with remarkable psychological acuity identified the spatial requirements of a particular type of refuge-seeker, and had implicitly designated this chair as my territory. The room functioned as a kind of hyper-civilised cave: it was interior, yet the windows created visual connection to external world; it was social (other people came and went; Mrs Chen worked at circulation desk), yet one could remain fundamentally solitary within it; it was dedicated to transmission of cultural content through texts, yet the primary function it performed for me was pre-linguistic — the experience of being in a space where the demand for performance, for social participation, for embodied presence required in the street below, was simply suspended. The library taught me something fundamental about space and consciousness: that refuge is not isolation, that understanding can mean respecting someone\'s need for silence, and that architecture, when it attends carefully enough to human need, can become a kind of language itself.`,
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
      'Show, don\'t tell — use specific sensory details to reveal meaning.',
      'Vary sentence length and structure for impact.',
      'Personal significance should emerge through description, not statement.',
      'Consider how space affects emotion, memory, identity.',
    ],
  },

  // WJEC PAPER 2 - Comparative Reading
  {
    id: 'wjec-p2-comp-1',
    board: 'WJEC',
    paper: 2,
    questionType: 'Comparative Reading',
    difficulty: 'Higher',
    extract: `Source A — Urban commute:\n\nThe train car smelled of synthetic fabrics and human fatigue. By 7:45 a.m., every seat was occupied, and standing room was at a premium. A businessman checked his phone for the third time in two minutes. A young mother gripped a shopping bag with one hand and her daughter\'s wrist with the other. An elderly man clutched a newspaper as though it were a life raft. Everyone faced forward, eyes fixed on the door at the far end. No one spoke. The fluorescent lights hummed their constant, nerve-testing song.\n\nSource B — Rural journey:\n\nThe bus wound through the Cotswolds, and time seemed to slow. The passengers — perhaps fifteen in total — seemed to know one another. An old woman offered the woman next to her a boiled sweet from a tin. Two farmers discussed the autumn planting in voices suggesting a conversation ongoing for decades. The driver knew everyone by name. When we stopped at a village of perhaps a hundred people, he called out: "Mrs Hartwell, your stop!" As if the entire vehicle were a social apparatus designed to move people not efficiently, but together.`,
    extractSource: 'Original compositions',
    question: 'Compare the presentations of transport and community in these two sources. What values does each prioritise? (30 marks)',
    marks: 30,
    timing: '35 minutes',
    modelAnswers: {
      'Grade 4-5': `Source A shows a modern city where people travel together but feel alone. "Every seat was occupied, and standing room was at a premium" shows the train is crowded, but "No one spoke" shows people avoid each other. The businessman checks his phone repeatedly, the mother grips her daughter, and the elderly man clutches his newspaper "as though it were a life raft," suggesting people are protecting themselves from each other. The fluorescent lights create an unpleasant "nerve-testing" atmosphere. Source A values efficiency and speed — getting people somewhere fast.\n\nSource B is different. The bus "wound through the Cotswolds, and time seemed to slow," which makes the journey seem peaceful. Passengers "seemed to know one another," and people are caring: the woman offers sweets, farmers talk together, the driver knows everyone by name. The final phrase says the bus is designed "to move people not efficiently, but together." Source B values community and relationships over speed. Both sources are about transport, but Source A values efficiency while Source B values connection.`,
      'Grade 6-7': `The two sources present contrasting visions of transport as either isolating or communal. Source A constructs the urban train as an experience of enforced proximity without genuine connection. The opening sensory detail — "the train car smelled of synthetic fabrics and human fatigue" — establishes both physical and affective environment; "fatigue" suggests exhaustion and emotional disconnection rather than mere tiredness. The writer catalogues passengers by functional role ("businessman," "mother," "elderly man") rather than by name or relationship, fragmenting the group into isolated subjects. Key structural contrast: crowding (every seat occupied) versus isolation (no one speaks, eyes fixed forward). The metaphor of the newspaper as "a life raft" suggests passengers use objects as barriers against connection. The simile about fluorescent lights creating a "nerve-testing song" conveys oppressive sensory environment through synesthesia.\n\nSource B inverts nearly every element. The bus "wound through the Cotswolds, and time seemed to slow" — verbs "wound" and "slow" create organic, leisurely movement rather than urgent transit. Small number of passengers ("perhaps fifteen in total") establishes pre-existing community. Writer records acts of care: old woman offering sweets, farmers in ongoing conversation, driver calling passengers by name. These details construct transport as vehicle for relationships. The final statement — "as if the entire vehicle were a social apparatus designed to move people not efficiently, but together" — explicitly contrasts efficiency with togetherness. The comparison reveals fundamentally different philosophies: urban transport processes individuals; rural transport maintains community bonds.`,
      'Grade 8-9': `These sources articulate competing theories of transport embedded within larger arguments about modernity, community, and social life organisation. Source A constructs the urban train as a space of enforced proximity that paradoxically isolates, whilst Source B constructs the rural bus as a space of deliberate connection. The comparison reveals that transport infrastructure is never merely functional; it is always already ideological, encoding values about efficiency, individuality, community, and temporal experience.\n\nSource A\'s opening — "The train car smelled of synthetic fabrics and human fatigue" — performs olfactory characterisation registering the space as fundamentally unnatural, as constructed environment animated by human exhaustion. The sensory detail grounds the reader in bodily experience whilst simultaneously registering alienation. The writer\'s cataloguing of passengers by functional role ("businessman," "mother," "elderly man") employs a sociological grammar — passengers identified not by individuality but by role in apparatus of reproduction and consumption. The structural irony is central: physical crowding ("every seat was occupied") exists alongside affective isolation ("No one spoke"). This paradox of crowded solitude is the source\'s central argument: modern transport produces what we might call "presence without connection." The metaphor of the newspaper as "a life raft" transforms information delivery into survival mechanism, suggesting public transit is inherently threatening. The final image — fluorescent lights creating a "nerve-testing song" — registers sensory oppression through synesthesia, transforming light into sound, involuntary into something that "tests" the nervous system.\n\nSource B constructs an almost Edenic alternative. The bus "wound through the Cotswolds, and time seemed to slow" — lexicon of organic movement ("wound") and temporal deceleration ("slow") establishes this as anti-modern space. Passengers "seemed to know one another," foregrounding not efficiency but care: the old woman offering sweets "from a tin," the farmers in conversation "suggested to be ongoing" (temporally extended, part of established pattern), the driver calling passengers by name. Each detail constructs the bus as "social infrastructure" — a mechanism that does not abstract individuals into a system but rather embeds them in networks of recognition and relationship. The closing statement — "as if the entire vehicle were a social apparatus designed to move people not efficiently, but together" — repositions what transport does: from moving bodies efficiently to moving people as members of a community. The phrase "as if" is crucial: it suggests the bus achieves this not through explicit design but through conditions of rural life (smaller population, longer cohabitation histories, driver\'s embodied knowledge of passengers).\n\nThe comparison reveals that transport infrastructure is never neutral. Source A\'s train encodes modernity\'s fundamental alienation — the proliferation of connections that paradoxically produce isolation. Source B\'s bus encodes anti-modern values — the belief that movement should be relational rather than transactional. What is at stake is not merely how we travel, but what kind of social life travel enables or prevents. The contrast between the train\'s "nerve-testing" lights and the bus driver\'s personal recognition of each passenger encapsulates the central tension: modern efficiency produces stress and isolation; older forms of social organisation produce connection and care. Yet the writer\'s use of "as if" suggests this alternative is increasingly unavailable — that the rural bus\'s model represents a disappearing rather than emerging form of modernity.`,
    },
    markScheme: [
      'Identifies key differences in presentation of transport',
      'Analyses values implicit in each source',
      'Selects specific textual evidence supporting comparison',
      'Explains how language and imagery create contrasting impressions',
      'Develops sustained comparative argument',
      'Uses precise terminology and sophisticated analysis',
    ],
    examinerTips: [
      'Address the comparison directly — avoid analysing one source then the other.',
      'Look for contrasts in vocabulary, tone, imagery, structure.',
      'Consider what values each writer prioritises, even if unstated.',
      'Use comparative phrases: "whereas," "in contrast," "similarly."',
    ],
  },

  // CAIE PAPER 1 - Argumentative Writing
  {
    id: 'caie-p1-arg-1',
    board: 'CAIE',
    paper: 1,
    type: 'Argumentative Writing',
    difficulty: 'Higher',
    title: 'Technology and human connection',
    extract: ``,
    question: 'Write an argumentative essay: Has technology primarily strengthened or weakened human connection? (500-600 words)',
    marks: 50,
    timing: '60 minutes',
    modelAnswers: {
      'Grade 4-5': `Technology has both helped and hurt human connection. On one hand, technology lets people stay in touch across distances. Fifty years ago, if you moved away from family, you could only contact them by expensive phone calls or slow letters. Now you can video call anyone for free. Social media lets you maintain friendships even without seeing people daily. Parents can watch children grow up through videos even if they work in different countries. Technology has made the world smaller.\n\nOn the other hand, some worry technology is replacing real connection. When people are together, they are often looking at phones instead of talking. Young people spend hours on social media but may not have deep friendships. Texting is not as meaningful as talking face-to-face. Video calls are not the same as being in the same room. Technology can make people feel lonely even when connected to hundreds online.\n\nI think technology has mainly strengthened connection, but it depends on how we use it. Technology gives us tools to stay in touch, but we must choose to use them well. The problem is not technology itself but how we use it. If we use technology to maintain real relationships, it is helpful. If we use it to avoid real relationships, it is harmful. In the future, people will learn to use technology better and find balance between online and offline connection.`,
      'Grade 6-7': `The question of whether technology has strengthened or weakened human connection requires examining what we mean by "connection" and how we measure its quality. I argue that whilst technology has expanded quantity and reach of connection, the crucial question is whether it has deepened capacity for sustained, embodied, vulnerable interaction associated with meaningful relationship.\n\nThe case for technology\'s positive impact is compelling. Digital communication has dissolved geographical barriers once imposing natural limits on relationship formation and maintenance. A person separated from family by continents can now maintain daily visual and auditory contact in ways unimaginable a generation ago. For those with shared interests, the internet has enabled formation of communities impossible within geographically bounded spaces. For marginalised or isolated individuals — those with rare conditions, or those in rural areas — technology has provided access to support networks and friendship groups otherwise inaccessible. These are genuine goods.\n\nHowever, increased connectivity may not translate to increased connection in any meaningful sense. Sociological research suggests that digital communication prevalence may be associated with declining social skills and increased loneliness, particularly among young people. When communication occurs through mediated channels, certain crucial dimensions of human interaction are necessarily absent: embodied presence of the other, involuntary body-language communication, temporal synchronicity of genuine dialogue, requirement to be genuinely vulnerable in shared physical space. Social media incentivises a particular kind of self-presentation (curated, performed, optimised for audience approval) potentially antithetical to the authenticity genuine connection requires. The phenomenon of "phubbing" (snubbing someone through phone use) suggests technology creates "presence without attention," where bodies are co-located but conscious attention is directed elsewhere.\n\nI contend that technology has expanded capacity for what we might call "contact" — maintenance of ongoing awareness of others\' lives — but not necessarily strengthened capacity for "connection" — experience of being genuinely known and valued. These are not the same. One can have hundreds of social media friends and feel profoundly lonely; one can have limited contact with a single person and experience deep connection. Technology may make maintaining superficial ties easier whilst potentially making it harder to develop deeper ones, insofar as it reduces friction and temporal commitment required to maintain relationship.\n\nThe solution is not rejecting technology but developing intentionality about how we use it. Technology should serve connection, not replace it. A video call with a distant relative is meaningful insofar as it sustains existing relationship; it cannot substitute for embodied presence required to initiate new relationships or deepen existing ones. In this view, technology has strengthened capacity to maintain connection across distance, but this is a different and perhaps lesser good than capacity to generate genuine connection in the first place.`,
      'Grade 8-9': `The question of technology\'s relationship to human connection requires acknowledging that "connection" is not univocal category but rather spectrum of relational modes — from broadcast intimacy of social media to embodied vulnerability of physical presence — and that different technologies facilitate different modalities whilst potentially inhibiting others. I argue that technology has fundamentally altered nature of human connection in ways that are neither simply beneficial nor harmful, but represent structural transformation in how relationship is mediated, experienced, and valued.\n\nThe case for technology as connection-enabling is not merely nostalgic sentiment. Capacity to maintain visual, auditory, and textual contact across geographical distance represents genuine expansion of human relational possibility. For diaspora communities, for intellectually isolated individuals, for those whose identities would be persecuted in their local contexts, digital communication has literally made survival possible and community viable. The internet has enabled formation of affinity groups based on shared interests, identities, and values impossible within pre-digital geographic constraint. Moreover, affordances of asynchronous communication (email, messaging, forums) have enabled certain kinds of reflection and deliberation that synchronous face-to-face conversation, with demands for immediate response, may inhibit. A teenager struggling with their identity can find community and counsel online in ways impossible in a small town twenty years ago. These are not trivial goods.\n\nYet phenomenological and sociological evidence suggests that digital connection, whilst genuinely connecting in certain respects, may be systematically incapable of producing sustained vulnerability and mutual recognition associated with deep relationship. Mediation of communication through technological interfaces introduces what we might call "relational distance" — the other is always also absent, always also pixelated, always also selectable (one can mute, block, unfollow). The requirement to curate self-presentation on social media (what sociologists call "impression management") may be fundamentally at odds with kind of unstaged authenticity generating genuine intimacy. The asynchronous nature of much digital communication, moreover, dissolves temporal co-presence (the experience of moving through time together) many argue essential to relational depth. When we can always defer response, always filter interaction, always present our "best self," we may be creating conditions not for deeper connection but for what we might call "performance intimacy" — simulation of closeness without its actual achievement.\n\nMoreover, proliferation of connection may be paradoxically correlated with experiences of loneliness. A person with hundreds of social media followers may experience acute alienation from all of them; a person with few genuine friends may experience profound belonging. This suggests that quantity and quality of connection are not merely different dimensions of same phenomenon but potentially inversely related. The algorithmic structuring of social media networks, which tend to amplify outrage and engagement over nuance and understanding, may actively inhibit kind of listening and interpretation genuine connection requires.\n\nI propose that technology has not simply "strengthened" or "weakened" human connection, but has rather reorganised what connection is and what it requires. We have gained capacity to maintain contact across distance, to find community based on interest rather than proximity, to sustain awareness of others\' lives through constant streams of updates. We have lost, or at least made harder to access, embodied presence, temporal co-existence, and unstaged authenticity perhaps characterising pre-digital friendship. Whether this trade-off represents progress or decline depends on what we value in human relationship. The answer is not rejecting technology but developing critical consciousness of what it can and cannot do, and creating practices and spaces (both digital and physical) where kind of connection we actually need can flourish.`,
    },
    markScheme: [
      'Develops clear, sustained argument with nuanced position',
      'Examines multiple perspectives fairly and thoroughly',
      'Supports claims with relevant evidence and examples',
      'Uses sophisticated vocabulary and sentence structures',
      'Maintains logical coherence throughout',
      'Demonstrates critical thinking about complex issues',
    ],
    examinerTips: [
      'Acknowledge complexity — avoid oversimplification.',
      'Consider what assumptions underlie different positions.',
      'Use specific examples to illustrate abstract claims.',
      'Your argument should develop and become more sophisticated as you write.',
    ],
  },

  // AQA PAPER 2 - Persuasive Writing (Leaflet)
  {
    id: 'aqa-p2-leaflet-1',
    board: 'AQA',
    paper: 2,
    type: 'Persuasive Writing',
    questionType: 'Persuasive Writing',
    difficulty: 'Higher',
    title: 'Persuasive leaflet about screen time',
    extract: ``,
    question: 'Write a persuasive leaflet for teenagers encouraging them to reduce daily screen usage and spend more time on offline activities. (400-500 words)',
    marks: 40,
    timing: '45 minutes',
    modelAnswers: {
      'Grade 4-5': `BREAK FREE: Your Guide to Life Beyond the Screen\n\nHow much time do you spend looking at screens? Studies show young people spend an average of 7 hours a day on screens. That\'s more time than you spend sleeping!\n\nWhy does it matter?\nScreens are everywhere — phones, laptops, tablets. But too much online time can:\n• Make you feel anxious and depressed\n• Give you headaches and eye strain\n• Stop you sleeping properly\n• Make you less likely to exercise\n• Reduce your ability to concentrate\n\nWhat can you do?\n1. Set limits. Don\'t use your phone for an hour before bed.\n2. Find offline activities. Read, walk, meet friends, play sport, draw, cook.\n3. Use apps that limit screen time. Some phones have settings that stop you using apps after a certain time.\n4. Make phone-free zones. Don\'t have phones at dinner or in bedrooms.\n5. Ask for help. If you find reducing screen time hard, talk to a trusted adult.\n\nThe benefits of less screen time:\n• Better sleep\n• Better mood\n• More real friendships\n• Better concentration\n• More time for hobbies\n\nTake the challenge!\nTry reducing screen time by just one hour a day. See how you feel after a week. You might be surprised.\n\nYou are in control. Your phone doesn\'t have to control you.`,
      'Grade 6-7': `BREAK FREE: Reclaim Your Life from the Screen\n\n[Header with striking image of person looking out at sunrise rather than at phone]\n\nA HARD TRUTH:\nYoung people now spend an average of seven hours daily on screens. That\'s one third of your waking life spent looking at a glowing rectangle. Compare that to time with family (30 minutes) or physical activity (1 hour). The maths is stark.\n\nWHAT SCIENCE TELLS US:\n\nYour brain on screens:\nExcessive screen time changes how your brain works. It reduces concentration, makes anxiety and depression more likely, and disrupts sleep cycles crucial during adolescence. The blue light from screens tricks your brain into thinking it\'s daytime, keeping you awake precisely when you need rest.\n\nYour mood on screens:\nSocial media is designed to be addictive. Every like, comment, and notification triggers a release of dopamine — the "feel-good" chemical. This creates a cycle of craving and checking mimicking addictive behaviour. Studies show heavy social media users report higher levels of loneliness and anxiety. The paradox is stark: we use phones to feel connected, yet end up feeling more isolated.\n\nYour body on screens:\nPhysical activity plummets. Sleep quality deteriorates. Focus becomes fragmented. You\'re not imagining the headaches and eye strain — they\'re real physiological responses to prolonged exposure.\n\nWHAT YOU CAN DO:\n\nSmall changes, big results:\n• Create a "phone-free hour" each day.\n• Establish bedroom boundaries. Phones out after 9 p.m. Your sleep will improve immediately.\n• Replace one hour of screen time daily with something physical: walking, cycling, dancing, sport.\n• Seek real conversation. Meet friends in person. Notice the difference in how connected you feel.\n• Pursue offline hobbies. Rediscover the absorption that comes from reading, drawing, music, or sport.\n\nTHE CHALLENGE:\nReduce daily screen time by 30 minutes for one week. Track how you feel. We predict: better sleep, clearer thinking, improved mood, more energy.\n\nYOU\'RE IN CONTROL.\nDon\'t let your phone control you. The life beyond the screen is waiting.`,
      'Grade 8-9': `BREAK FREE: A Call to Conscious Consumption\n\n[Striking visual: silhouette of person silhouetted against phone screen, progressively fading back to reveal landscape]\n\nA STATISTICAL RECKONING:\n\nYoung people now expend approximately seven hours daily on digital screens. This warrants serious examination: across a seventy-year lifespan, this represents roughly one-third of conscious existence spent in mediated interaction with digital interfaces. The opportunity cost is profound. Seven hours online represents subtraction from seven hours of embodied, unmediated experience — time with people you love, time moving your body, time in silence and solitude, time in natural world.\n\nTHE NEUROSCIENCE OF SCREEN DEPENDENCY:\n\nWhat you\'re experiencing is not weakness; it\'s neurobiology. Social media platforms employ techniques derived from behavioural psychology specifically designed to maximise engagement and dependency. Every notification, like, and comment triggers dopamine release — the same neurochemical implicated in addiction. You are not being weak when you constantly check your phone; you are responding to mechanisms engineered by some of the world\'s largest technology companies explicitly to capture and monetise your attention.\n\nMoreover, the structure of digital communication — fragmented, interruptive, algorithmically-curated — fundamentally alters how your brain processes information. Studies using fMRI imaging demonstrate that heavy social media use is correlated with reduced grey matter density in regions associated with decision-making, impulse control, and emotional regulation. The relationship is bidirectional: excessive screen time rewires your brain in ways that make sustained focus, deep reading, and genuine conversation increasingly difficult.\n\nWHAT\'S AT STAKE:\n\nThis is not merely a health issue (though correlation between heavy screen use and depression, anxiety, and sleep disorders is now well-established). It\'s an existential question: What kind of life do you want to live? What experiences matter? What constitutes genuine connection?\n\nA person might have ten thousand social media followers and experience acute loneliness. Conversely, a person might have a handful of real friendships characterised by embodied presence, vulnerability, and kind of sustained attention that only develops over time. Which is connection? Which is belonging?\n\nWHAT YOU CAN DO:\n\nReclaim your attention:\n1. Quantify. Track your actual screen time for one week. The number will likely shock you.\n2. Create sanctuary. Designate rooms or times as phone-free zones. Your bedroom is for sleep, not scrolling.\n3. Replace, don\'t just restrict. Don\'t just remove your phone; make space for what matters: conversation, movement, creation, solitude.\n4. Seek friction. Make accessing digital content slightly harder: logout of apps, put phone in another room, use grayscale mode.\n5. Practise presence. When with friends, phones are away. Experience what genuine dialogue feels like.\n\nTHE EXPERIMENT:\nReduce daily screen time by one hour for fourteen days. Notice: sleep quality, mood, concentration, sense of connection with people around you. The data will convince you far more than any argument.\n\nFINAL THOUGHT:\nYou were not born with a phone in your hand. You are capable of a kind of attention and presence that your phone is engineered to prevent you from achieving. The life beyond the screen — life of embodied presence, of boredom that sparks creativity, of genuine friendship, of being fully present to your own existence — is available to you. You simply have to choose it.`,
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
      'Visual layout and formatting matter — use headings and white space.',
    ],
  },
];

export default practiceQuestions;
