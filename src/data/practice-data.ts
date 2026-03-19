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
    marks: 12,
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
    marks: 10,
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
    marks: 20,
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
      'Grade 6-7': `The writer deploys the conventions of investigative journalism to construct a systematic expose that moves from visceral description to political indictment. The opening declaration — "beggars all description" — is a rhetorical paradox: the writer claims the scene is indescribable, then proceeds to describe it with devastating specificity. This functions as a form of apophasis, signalling to the reader that what follows will exceed their expectations of suffering.\n\nThe statistical precision — "twelve feet by ten," "seventeen persons" — operates as evidence, grounding the emotional appeal in verifiable fact. The parenthetical qualification "if that word can be applied to so fitful and wretched a state" challenges the reader's vocabulary, implying that comfortable language cannot accommodate this reality. The simile "resembled nothing so much as the hold of a slave ship" is the paragraph's most politically charged moment: it invokes the abolitionist cause — won within living memory for Victorian readers — to reframe domestic poverty as a moral obscenity of equivalent scale.\n\nThe second paragraph intensifies through accumulation. The anaphoric "no ventilation, no sanitation, and no water" uses the tricolon of negation to define the space by what it lacks, each absence more fundamental than the last. The writer's refusal to describe the floor's covering — "I will not describe to a readership unaccustomed to such particulars" — is a masterful rhetorical manoeuvre: it simultaneously protects the reader's sensibility and weaponises their imagination, forcing them to conjure horrors worse than description could provide.\n\nThe structural climax is the final three sentences. The revelation of the landlord's fourpence charge, his eleven properties, and his Kensington residence constitutes a devastating tricolon of escalating outrage. Each sentence is shorter than the last. "He lives in Kensington" — just four words — concentrates the entire argument into a geographical contrast between Whitechapel and Kensington that the Victorian reader would have understood immediately: the squalor that generates the profit and the suburb where the profit is enjoyed. The writer's restraint here is the most powerful tool in the extract: no adjective, no commentary — just the fact, presented as its own condemnation.`,
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
];

export default practiceQuestions;
