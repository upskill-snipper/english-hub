// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons';

// ─── Lesson 1: What is Media Literacy? — Introduction ────────────────────────

const lesson1: LessonPlan = {
  id: 'media-literacy-01-introduction',
  title: 'What is Media Literacy? — Introduction',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Define media literacy and explain why it is an essential skill in the modern world.',
    'Identify the different forms of media texts that surround us in daily life.',
    'Begin to analyse how media texts are constructed to communicate meaning to specific audiences.',
  ],
  successCriteria: [
    'I can define media literacy in my own words and give at least two reasons why it matters.',
    'I can identify and categorise at least five different types of media text.',
    'I can explain how one media text has been constructed to appeal to its target audience.',
  ],
  keywords: [
    'media literacy', 'media text', 'audience', 'purpose',
    'representation', 'construct', 'decode', 'producer',
  ],
  starterActivity: {
    title: 'Media Audit: Your Last 24 Hours',
    duration: '8 minutes',
    instructions:
      'Students list every media text they have encountered in the last 24 hours — from cereal boxes and bus adverts to TikTok videos and text messages. In pairs, students compare lists and categorise them into groups (print, digital, broadcast, social). Class discussion: which category dominates? Why? Teacher introduces the term "media literacy" as the ability to access, analyse, evaluate, and create media.',
    differentiation: {
      support: 'Provide a prompt sheet listing common media encounters (e.g., TV, phone notifications, posters) to help students build their list.',
      core: 'Students categorise independently and add notes on why each text was created (to inform, persuade, entertain).',
      stretch: 'Students consider which media texts they consumed passively versus actively and discuss why the distinction matters.',
    },
    resources: ['Media audit prompt sheet (support tier)', 'Categorisation grid handout'],
  },
  mainActivities: [
    {
      title: 'Media Texts Gallery Walk',
      duration: '20 minutes',
      instructions:
        'Set up six stations around the room, each displaying a different media text: (1) a print newspaper front page, (2) a social media post with comments, (3) a film poster, (4) a charity leaflet, (5) a screenshot of a YouTube thumbnail, (6) a text message conversation. At each station, students complete a response grid answering: What type of media text is this? Who is the target audience? What is the purpose? What techniques can you identify? Students spend 3 minutes at each station before rotating.',
      differentiation: {
        support: 'Provide a word bank of media terms (headline, caption, logo, hashtag, slogan) and sentence starters for each question.',
        core: 'Students complete the grid independently, using subject-specific terminology in their responses.',
        stretch: 'Students add a column evaluating how effectively each text achieves its purpose, with evidence from the text itself.',
      },
      resources: ['Six printed/displayed media texts', 'Response grid worksheet', 'Word bank (support tier)', 'Timer for rotations'],
    },
    {
      title: 'Deconstructing a Media Text',
      duration: '20 minutes',
      instructions:
        'Teacher models how to deconstruct a media text using a projected advert: identifying the producer, audience, purpose, language choices, visual techniques, and implicit messages. Students then select one of the six gallery walk texts and write a detailed deconstruction paragraph using the acronym PACT (Purpose, Audience, Construction, Techniques). Two or three students share under the visualiser for peer feedback.',
      differentiation: {
        support: 'Provide a PACT scaffold with sentence starters for each element of the paragraph.',
        core: 'Students write a full PACT paragraph independently, embedding at least three media terminology words.',
        stretch: 'Students write a second paragraph comparing their chosen text with another from the gallery walk, analysing differences in construction.',
      },
      resources: ['Projected advert for modelling', 'PACT scaffold sheet (support tier)', 'Media terminology reference card'],
    },
  ],
  plenaryActivity: {
    title: 'One Word, One Sentence, One Question',
    duration: '7 minutes',
    instructions:
      'Students write on a sticky note: one key word they have learned, one sentence summarising what media literacy is, and one question they still have. Teacher collects and reads selected responses aloud, addressing common misconceptions and previewing the next lesson on advertising techniques.',
    differentiation: {
      support: 'Sentence starter provided: "Media literacy is important because..."',
      core: 'Full response expected with accurate use of new terminology.',
      stretch: 'Students frame their question as something that challenges or extends the lesson content.',
    },
  },
  homework:
    'Collect three different media texts from your daily life (photographs, screenshots, or physical examples). For each, write two sentences identifying the purpose and target audience.',
  worksheetQuestions: [
    {
      question: 'Define "media literacy" in your own words and explain why it is important in the 21st century.',
      lines: 5,
      modelAnswer:
        'Media literacy is the ability to critically analyse, evaluate, and understand the messages communicated through different forms of media. It is important in the 21st century because we are surrounded by more media than ever before — from social media feeds and news websites to advertising and podcasts. Without media literacy, we risk accepting messages at face value without questioning who created them, why, and what techniques are being used to influence our thinking.',
      marks: 4,
    },
    {
      question: 'Identify three different types of media text and explain the purpose of each.',
      lines: 6,
      modelAnswer:
        'A newspaper front page is a print media text whose purpose is to inform the public about current events, though it may also persuade through its selection and framing of stories. A charity leaflet is a print media text designed to persuade the reader to donate money or support a cause, using emotive language and imagery. A YouTube video thumbnail is a digital media text whose purpose is to attract viewers and encourage them to click on the video, often using bold colours, exaggerated facial expressions, and provocative text.',
      marks: 6,
    },
    {
      question: 'Choose one media text and explain how it has been constructed to appeal to its target audience. Use the PACT framework.',
      lines: 8,
      modelAnswer:
        'A film poster for a superhero movie is constructed to appeal to a teenage and young adult audience. Its purpose is to persuade the audience to watch the film. The audience is targeted through the use of a well-known actor shown in a dynamic, powerful pose, which creates excitement and anticipation. The construction includes dark, dramatic colours and a city skyline in the background to suggest danger and high stakes. Techniques include a tagline in bold, capitalised font ("The world needs a hero") which creates a sense of urgency, and the release date positioned prominently at the bottom to prompt immediate action.',
      marks: 6,
    },
    {
      question: 'What is the difference between a "producer" and an "audience" in media terms?',
      lines: 4,
      modelAnswer:
        'A producer is the person, company, or organisation that creates and distributes a media text. They make deliberate choices about content, language, and design to achieve a specific purpose. The audience is the group of people who receive, consume, or interact with the media text. The producer always has the audience in mind when constructing a text, tailoring their choices to appeal to or influence that particular group.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a foundational lesson — do not assume prior knowledge of media terminology.',
    'The gallery walk texts should be printed in colour and laminated for reuse across classes.',
    'The PACT acronym is introduced here and will be used throughout the scheme of work as a consistent analytical framework.',
    'Collect sticky notes from the plenary to identify students who need terminology reinforcement.',
    'Consider displaying a "Media Wall" in the classroom where students can add media texts they encounter throughout the unit.',
  ],
  targetedSkills: [
    'AO2: Analysis of language and structure',
    'Critical thinking',
    'Classification and categorisation',
    'Analytical writing',
    'Media terminology',
  ],
};

// ─── Lesson 2: Analysing Advertisements — Visual and Written Techniques ──────

const lesson2: LessonPlan = {
  id: 'media-literacy-02-analysing-advertisements',
  title: 'Analysing Advertisements: Visual and Written Techniques',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse the visual techniques used in print and digital advertisements.',
    'Examine how written language in adverts is crafted to persuade specific audiences.',
    'Evaluate the effectiveness of advertising techniques in shaping consumer behaviour.',
  ],
  successCriteria: [
    'I can identify at least four visual techniques used in advertisements (e.g., colour, layout, camera angle, composition).',
    'I can analyse how written language features such as slogans, imperatives, and rhetorical questions function in adverts.',
    'I can write a detailed analytical response evaluating how an advert uses both visual and written techniques to persuade.',
  ],
  keywords: [
    'slogan', 'imperative', 'rhetorical question', 'composition',
    'colour connotation', 'typography', 'brand identity', 'target demographic',
  ],
  starterActivity: {
    title: 'Slogan Match-Up',
    duration: '7 minutes',
    instructions:
      'Display ten famous advertising slogans on the board (e.g., "Just Do It", "Because You\'re Worth It", "Every Little Helps") with the brand names scrambled. Students match slogans to brands in pairs. Discuss: why are some slogans so memorable? What language features do they share? Teacher draws out that effective slogans use short sentences, imperatives, personal pronouns, and repetition.',
    differentiation: {
      support: 'Provide a multiple-choice format rather than open matching.',
      core: 'Students match independently and identify one language feature per slogan.',
      stretch: 'Students create their own slogan for an imaginary product and explain their language choices.',
    },
    resources: ['Slogan match-up slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Visual Techniques Toolkit',
      duration: '18 minutes',
      instructions:
        'Teacher introduces six key visual techniques used in advertisements: colour connotation, composition and layout, camera angle/shot type, use of models/celebrities, typography, and use of white space. For each technique, show a real advert example and model how to analyse it. Students create a "Visual Techniques Toolkit" reference page in their books, with each technique defined and illustrated with a sketched example. This will be used as a reference throughout the unit.',
      differentiation: {
        support: 'Provide a partially completed toolkit with definitions already written; students add examples and sketches.',
        core: 'Students create the full toolkit independently, writing definitions in their own words.',
        stretch: 'Students rank the six techniques from most to least persuasive and justify their top choice in a short paragraph.',
      },
      resources: ['Visual techniques slide deck with advert examples', 'Toolkit template (support tier)'],
    },
    {
      title: 'Comparative Advert Analysis',
      duration: '23 minutes',
      instructions:
        'Students receive two adverts for similar products aimed at different target demographics (e.g., a perfume advert targeting young women versus one targeting older men). Students complete a comparative analysis table examining: visual techniques, written language, target audience, and overall tone. They then write a comparative analytical paragraph using the structure: "Both adverts use... However, Advert A differs from Advert B in that..." Teacher models the first row of the table and the opening of the paragraph before students work independently.',
      differentiation: {
        support: 'Provide a pre-structured paragraph frame with connectives and sentence starters for comparison.',
        core: 'Students complete the table and write the comparative paragraph independently using at least four media terms.',
        stretch: 'Students evaluate which advert is more effective at reaching its target audience and explain why, considering cultural context.',
      },
      resources: ['Two printed adverts for comparison', 'Comparative analysis table', 'Paragraph frame (support tier)', 'Media terms checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Technique Spotlight',
    duration: '7 minutes',
    instructions:
      'Teacher projects a new, unseen advert. Students have 2 minutes to identify as many techniques as possible on mini-whiteboards. Class shares and the teacher annotates the advert on screen, modelling precise analytical vocabulary. Close by asking: "Is this advert effective? Why or why not?"',
    differentiation: {
      support: 'Students can refer to their Visual Techniques Toolkit and are expected to identify at least two techniques.',
      core: 'Students identify at least four techniques and explain the effect of one.',
      stretch: 'Students comment on the overall effectiveness of the advert, considering what is absent as well as what is present.',
    },
  },
  homework:
    'Find one print or digital advert and annotate it, identifying at least five techniques (visual and written). Write a paragraph explaining how the advert targets its audience.',
  worksheetQuestions: [
    {
      question: 'Explain what "colour connotation" means and give an example of how it is used in advertising.',
      lines: 4,
      modelAnswer:
        'Colour connotation refers to the associations and emotions that different colours evoke in the audience. For example, red is often associated with passion, danger, or urgency, so it is frequently used in sale adverts to create a sense of excitement and encourage impulsive buying. Green is associated with nature, health, and sustainability, so it is commonly used in adverts for organic or eco-friendly products to reinforce the brand\'s environmental message.',
      marks: 4,
    },
    {
      question: 'Analyse the use of language in the following slogan: "Taste the Rainbow." What techniques are used and what effect do they create?',
      lines: 5,
      modelAnswer:
        'The slogan "Taste the Rainbow" uses an imperative verb ("taste") which directly commands the audience to take action, creating a sense of immediacy and engagement. The metaphor of "the rainbow" suggests variety, colour, and joy, associating the product with a multi-sensory, pleasurable experience. The brevity of the slogan — just three words — makes it highly memorable and easy to repeat, which reinforces brand recognition. The synaesthetic quality of "tasting" a visual phenomenon also creates intrigue and makes the product seem unique.',
      marks: 5,
    },
    {
      question: 'Compare two adverts for similar products aimed at different audiences. How do they use different techniques to appeal to their target demographics?',
      lines: 8,
      modelAnswer:
        'Advert A, for a perfume targeting young women, uses soft pink and gold tones to connote femininity, romance, and luxury. A young model is photographed in a close-up shot, making direct eye contact with the viewer to create a personal connection. The slogan "Be Unforgettable" uses an imperative and an aspirational adjective to suggest the product will transform the buyer. Advert B, for a cologne targeting older men, uses dark navy and silver tones to connote sophistication, power, and masculinity. The model is shown in a mid-shot wearing a suit, with a city skyline behind him, connoting success and professionalism. The slogan "Command the Room" uses a forceful imperative that appeals to confidence and authority. Both adverts use aspirational imagery, but they construct entirely different identities to match their target demographics.',
      marks: 8,
    },
    {
      question: 'Why do advertisers use celebrities or models in their adverts? Explain with reference to audience response.',
      lines: 5,
      modelAnswer:
        'Advertisers use celebrities and models to create aspirational associations — the audience is encouraged to believe that by purchasing the product, they can achieve a similar lifestyle, appearance, or status. This works because audiences often admire and trust public figures, so a celebrity endorsement functions as a form of social proof. Additionally, using a recognisable face attracts attention and makes the advert more memorable, increasing the likelihood that the audience will recall the product when making purchasing decisions.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Select adverts that are age-appropriate and represent diverse demographics.',
    'The Visual Techniques Toolkit is a key reference resource — ensure students keep it accessible for future lessons.',
    'When modelling analysis, emphasise the difference between identifying a technique and explaining its effect.',
    'The comparative analysis task prepares students for Paper 2 comparison questions at GCSE level.',
    'Consider using adverts from different decades to introduce how advertising has evolved over time.',
  ],
  targetedSkills: [
    'AO2: Analysis of language and structure',
    'Comparative analysis',
    'Persuasive techniques identification',
    'Analytical paragraph writing',
    'Visual literacy',
  ],
};

// ─── Lesson 3: News Media — Bias and Representation ─────────────────────────

const lesson3: LessonPlan = {
  id: 'media-literacy-03-news-bias-representation',
  title: 'News Media: Bias and Representation',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Understand how news media constructs representations of events, people, and groups.',
    'Identify techniques used by newspapers to introduce bias into their reporting.',
    'Compare how different news sources cover the same event and evaluate the impact of editorial choices.',
  ],
  successCriteria: [
    'I can explain the difference between objective reporting and biased reporting, with examples.',
    'I can identify at least three techniques newspapers use to introduce bias (e.g., headline framing, image selection, emotive language).',
    'I can compare two news articles on the same event and analyse how editorial choices shape the reader\'s understanding.',
  ],
  keywords: [
    'bias', 'objectivity', 'editorial', 'framing',
    'emotive language', 'representation', 'tabloid', 'broadsheet',
  ],
  starterActivity: {
    title: 'Two Headlines, One Story',
    duration: '8 minutes',
    instructions:
      'Display two real newspaper headlines covering the same event but from different publications (e.g., a tabloid and a broadsheet). Students discuss in pairs: What is the same? What is different? Which words carry the most weight? Teacher reveals both headlines are about the identical event and asks: "If the facts are the same, why are the headlines so different?" Introduce the concept of media bias and editorial framing.',
    differentiation: {
      support: 'Highlight the key emotive words in each headline and provide definitions.',
      core: 'Students independently identify the differences and explain which headline seems more biased and why.',
      stretch: 'Students rewrite both headlines to be as neutral and objective as possible, then discuss what is lost or gained.',
    },
    resources: ['Two contrasting headline slides', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Bias Detective: Newspaper Techniques',
      duration: '20 minutes',
      instructions:
        'Teacher introduces six techniques newspapers use to introduce bias: (1) headline framing and word choice, (2) image selection and cropping, (3) emotive language versus neutral language, (4) selection and omission of facts, (5) placement and prominence of stories, (6) use of expert quotations and sources. For each technique, students examine a real example and annotate it on a worksheet, identifying the technique and explaining its effect on the reader. Teacher models the first annotation in detail.',
      differentiation: {
        support: 'Provide annotations for the first three techniques; students complete the remaining three independently.',
        core: 'Students annotate all six examples independently, using the correct terminology.',
        stretch: 'Students identify which technique is the most subtle and therefore the most dangerous form of bias, justifying their choice.',
      },
      resources: ['Bias techniques handout with real examples', 'Annotation worksheet', 'Highlighters'],
    },
    {
      title: 'Comparative News Analysis',
      duration: '20 minutes',
      instructions:
        'Students receive two full news articles from different sources covering the same event (one tabloid, one broadsheet). Using a structured comparison grid, students analyse: headline and subheadline, opening paragraph, language register, image choice, factual content included/excluded, and overall tone. Students then write a comparative analysis paragraph: "Both articles report on [event], but they construct very different representations. Source A uses... whereas Source B..." Two examples are shared and peer-assessed against success criteria.',
      differentiation: {
        support: 'Provide a partially completed comparison grid and a paragraph frame with connectives.',
        core: 'Students complete the grid and write the paragraph independently, using at least five media literacy terms.',
        stretch: 'Students add a concluding sentence evaluating which article is more trustworthy and why, considering ownership and political alignment.',
      },
      resources: ['Two news articles (tabloid and broadsheet)', 'Comparison grid worksheet', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Bias Barometer',
    duration: '7 minutes',
    instructions:
      'Teacher reads four short news extracts aloud. For each, students rate the level of bias on a scale of 1-5 using fingers held up. Teacher selects students to justify their ratings using terminology from the lesson. Close with the question: "Can any news reporting ever be truly objective?"',
    differentiation: {
      support: 'Students are expected to give a rating and one reason.',
      core: 'Students justify their rating using at least one specific technique identified in the extract.',
      stretch: 'Students consider whether objectivity is possible or desirable in journalism and explain their position.',
    },
  },
  homework:
    'Find two online news articles covering the same recent event from different sources. Write a paragraph comparing how each source presents the event differently, identifying at least two bias techniques.',
  worksheetQuestions: [
    {
      question: 'Define "media bias" and explain why it matters for news consumers.',
      lines: 5,
      modelAnswer:
        'Media bias refers to the tendency of news organisations to present information in a way that favours a particular perspective, political viewpoint, or agenda, rather than reporting facts objectively. It matters for news consumers because biased reporting can shape public opinion, reinforce stereotypes, and prevent people from understanding the full picture of an event. If readers are unaware of bias, they may accept a one-sided version of events as truth, which can influence their attitudes, voting behaviour, and understanding of the world.',
      marks: 4,
    },
    {
      question: 'Explain three techniques that newspapers use to introduce bias into their reporting.',
      lines: 6,
      modelAnswer:
        'First, headline framing involves choosing specific words that prime the reader to interpret the story in a particular way — for example, "Flood of Migrants" uses a metaphor that dehumanises people and implies threat, whereas "Increase in Migration" is neutral. Second, selection and omission means that editors choose which facts to include and which to leave out, which can dramatically alter the reader\'s understanding of an event. Third, image selection introduces bias through the choice of photograph — an unflattering image of a politician can undermine their credibility, while a heroic image can build sympathy, regardless of the article\'s written content.',
      marks: 6,
    },
    {
      question: 'Compare how a tabloid and a broadsheet might report on the same event differently. Use specific examples of techniques.',
      lines: 8,
      modelAnswer:
        'A tabloid is likely to use a short, sensational headline with emotive language, puns, or alliteration to grab attention — for example, "SCHOOL CHAOS!" — whereas a broadsheet might use a longer, more informative headline such as "Government Announces Changes to School Curriculum." The tabloid would typically use informal register, shorter paragraphs, and dramatic language designed to provoke an emotional response, while the broadsheet would use formal register, complex sentences, and expert quotations to convey authority and depth. The tabloid might select a dramatic photograph showing distressed parents, while the broadsheet might use a more neutral image of the Education Secretary at a podium. These editorial choices mean the same event is represented very differently, shaping the reader\'s emotional and intellectual response.',
      marks: 8,
    },
    {
      question: 'Can news reporting ever be truly objective? Explain your answer.',
      lines: 5,
      modelAnswer:
        'It is arguable that no news reporting can ever be truly objective because every article involves editorial choices — which stories to cover, which facts to include, which images to use, and which words to select. These choices inevitably reflect the values, priorities, and perspectives of the journalist and the publication. However, quality journalism strives for balance by presenting multiple viewpoints, attributing claims to sources, and separating opinion from factual reporting. The key skill for a media-literate reader is not to find perfectly objective news, but to read critically, consult multiple sources, and recognise bias when it is present.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Use recent, age-appropriate news stories that students are likely to have encountered.',
    'Be sensitive to the political diversity of students and families — present bias as a technique to analyse, not a partisan issue.',
    'The tabloid/broadsheet distinction is useful but increasingly outdated — note that many broadsheets now use tabloid formats and that online news blurs these categories.',
    'This lesson links directly to AQA Paper 2 comparison questions and non-fiction reading skills.',
    'Encourage students to think about their own news consumption habits and sources.',
  ],
  targetedSkills: [
    'AO2: Analysis of language and structure',
    'AO3: Context and perspective',
    'Comparative analysis',
    'Critical evaluation',
    'Non-fiction reading',
  ],
};

// ─── Lesson 4: Social Media — Language and Influence ─────────────────────────

const lesson4: LessonPlan = {
  id: 'media-literacy-04-social-media-language',
  title: 'Social Media: Language and Influence',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Analyse the distinctive language features of social media platforms and their effects on communication.',
    'Examine how influencers and brands use social media language to persuade and engage audiences.',
    'Evaluate the impact of social media on language change and on young people\'s communication habits.',
  ],
  successCriteria: [
    'I can identify at least four distinctive language features of social media (e.g., hashtags, abbreviations, emojis, informal register).',
    'I can analyse how a social media post uses language and visual features to influence its audience.',
    'I can write an evaluative response considering whether social media is changing language for better or worse.',
  ],
  keywords: [
    'influencer', 'hashtag', 'algorithm', 'engagement',
    'call to action', 'register', 'idiolect', 'neologism',
  ],
  starterActivity: {
    title: 'Decode the Post',
    duration: '7 minutes',
    instructions:
      'Display a fictional social media post that includes hashtags, emojis, abbreviations, a tagged location, and a call to action. Students annotate the post on mini-whiteboards, labelling every language and visual feature they can identify. Class discussion: how is the language of social media different from the language of a newspaper article or a novel? Why has this register developed?',
    differentiation: {
      support: 'Provide a word bank of social media terms (hashtag, caption, filter, tag, emoji) to guide annotations.',
      core: 'Students annotate independently and explain the purpose of at least three features.',
      stretch: 'Students consider how the same message would be communicated in formal written English and discuss what is gained and lost in translation.',
    },
    resources: ['Fictional social media post slide', 'Mini-whiteboards', 'Word bank (support tier)'],
  },
  mainActivities: [
    {
      title: 'The Language of Influence',
      duration: '22 minutes',
      instructions:
        'Students examine three real (anonymised) social media posts: (1) a brand advertisement disguised as a personal recommendation, (2) an influencer promoting a product with a discount code, (3) a viral awareness campaign post. For each, students complete an analysis grid identifying: the platform, target audience, language register, persuasive techniques used, visual features, and the intended effect on the audience. Teacher models the analysis of the first post in detail. Class discussion: how do social media posts blur the line between personal content and advertising?',
      differentiation: {
        support: 'Provide a completed model analysis for the first post and sentence starters for the remaining two.',
        core: 'Students complete all three analyses independently using media literacy terminology.',
        stretch: 'Students consider the ethical implications of undisclosed advertising and discuss whether influencer marketing should be more heavily regulated.',
      },
      resources: ['Three anonymised social media post examples', 'Analysis grid worksheet', 'Model analysis (support tier)'],
    },
    {
      title: 'Social Media and Language Change — Debate Preparation',
      duration: '19 minutes',
      instructions:
        'Divide the class into two groups: "Social media is enriching the English language" versus "Social media is damaging the English language." Each group receives a resource pack with evidence, quotations from linguists, and examples. Students work in small groups to prepare three key arguments with supporting evidence. Groups then present their strongest argument in a structured mini-debate format (1 minute per side, 30 seconds rebuttal). Teacher summarises by introducing the concept of descriptivism versus prescriptivism in language attitudes.',
      differentiation: {
        support: 'Provide pre-written argument structures with gaps for students to add evidence and examples.',
        core: 'Students construct arguments independently using the resource pack, structuring point, evidence, and explanation.',
        stretch: 'Students act as adjudicators for the debate, evaluating the strength of both sides and writing a balanced conclusion.',
      },
      resources: ['Debate resource packs (two sets)', 'Argument planning sheet', 'Timer for debate'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Social Media Language',
    duration: '7 minutes',
    instructions:
      'Students write a response to the question: "Give one example of how social media has changed the way we use language. Is this change positive, negative, or neutral? Explain your reasoning." Collect responses and use them to inform groupings for the next lesson.',
    differentiation: {
      support: 'Sentence starter: "One way social media has changed language is... I think this is [positive/negative/neutral] because..."',
      core: 'Full written response with a specific example and clear reasoning.',
      stretch: 'Students link their response to the concepts of descriptivism or prescriptivism discussed in the debate.',
    },
  },
  homework:
    'Analyse one social media post from a brand or influencer you follow. Identify three persuasive techniques used and write a paragraph explaining how the post tries to influence its audience.',
  worksheetQuestions: [
    {
      question: 'Identify four distinctive language features of social media communication and explain the purpose of each.',
      lines: 6,
      modelAnswer:
        'First, hashtags (e.g., #MondayMotivation) are used to categorise content and increase its visibility to a wider audience beyond the poster\'s followers. Second, abbreviations and acronyms (e.g., "tbh", "imo") are used to communicate quickly and informally, reflecting the fast-paced nature of online interaction. Third, emojis function as a form of paralanguage, replacing the facial expressions and tone of voice that are absent in written digital communication. Fourth, direct address and imperatives (e.g., "Tag a friend!", "Link in bio!") are calls to action designed to increase engagement and interaction with the post.',
      marks: 8,
    },
    {
      question: 'How do influencers blur the line between personal content and advertising? Give examples of techniques they use.',
      lines: 5,
      modelAnswer:
        'Influencers blur the line between personal content and advertising by presenting sponsored posts in the same informal, conversational style as their non-sponsored content, making it difficult for followers to distinguish between genuine recommendations and paid promotions. Techniques include using first-person anecdotes ("I\'ve been using this for weeks and I love it"), casual language and slang that mirrors everyday speech, and integrating products into lifestyle content such as "morning routine" or "what I eat in a day" videos. While regulations require disclosure (e.g., #ad), these labels are often placed inconspicuously, and the overall effect is that the audience receives advertising that feels like a personal endorsement from a trusted friend.',
      marks: 5,
    },
    {
      question: 'Do you think social media is changing the English language for better or worse? Write a balanced argument considering both perspectives.',
      lines: 8,
      modelAnswer:
        'On one hand, social media is enriching the English language by accelerating the creation of new words (neologisms) such as "selfie", "vlog", and "ghosting", which reflect new social phenomena. It has also made language more democratic, allowing diverse voices and dialects to reach global audiences. Linguists who take a descriptivist view argue that language has always evolved and that social media is simply the latest driver of natural change. On the other hand, critics argue that social media encourages abbreviated, imprecise communication that may erode young people\'s ability to write in formal, extended prose. The constant use of informal register online may make it harder for students to code-switch into academic or professional writing. A balanced view recognises that social media has expanded the range of English but that media literacy — understanding when each register is appropriate — is essential.',
      marks: 8,
    },
    {
      question: 'What is the difference between "descriptivism" and "prescriptivism" in attitudes to language? How does each view relate to social media language?',
      lines: 5,
      modelAnswer:
        'Prescriptivism is the belief that there are fixed rules of correct language use and that deviations from these rules represent a decline in standards. A prescriptivist might argue that social media language — with its abbreviations, lack of punctuation, and informal grammar — is corrupting English. Descriptivism, by contrast, is the linguistic approach that observes and records how language is actually used without making judgements about correctness. A descriptivist would view social media language as a fascinating evolution, noting that new words, structures, and communication styles are a natural response to new technology and social contexts.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Use fictional or anonymised social media posts to avoid promoting specific brands or individuals.',
    'Be sensitive to students who may not have social media accounts — frame the lesson around the texts rather than personal experience.',
    'The debate activity works well as a precursor to Paper 2 writing tasks that require balanced arguments.',
    'The concepts of descriptivism and prescriptivism can be introduced briefly here and developed further in a language-focused scheme.',
    'This lesson provides opportunities for cross-curricular links with PSHE regarding online safety and digital citizenship.',
  ],
  targetedSkills: [
    'AO2: Analysis of language',
    'AO5: Writing for purpose and audience',
    'Debate and argumentation',
    'Evaluative writing',
    'Sociolinguistic awareness',
  ],
};

// ─── Lesson 5: Digital Communication — Formal vs Informal Register ───────────

const lesson5: LessonPlan = {
  id: 'media-literacy-05-digital-communication-register',
  title: 'Digital Communication: Formal vs Informal Register',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Understand the concept of register and how it varies across different digital communication contexts.',
    'Analyse the language features that distinguish formal and informal digital texts.',
    'Demonstrate the ability to code-switch between registers by rewriting texts for different audiences and purposes.',
  ],
  successCriteria: [
    'I can define "register" and explain how it is determined by audience, purpose, and context.',
    'I can identify specific language features that signal formal or informal register in digital texts.',
    'I can rewrite a text, shifting its register appropriately for a different audience and context.',
  ],
  keywords: [
    'register', 'code-switching', 'formality', 'colloquialism',
    'Standard English', 'tone', 'context', 'audience',
  ],
  starterActivity: {
    title: 'Register Sorting',
    duration: '7 minutes',
    instructions:
      'Display eight short digital texts on the board: a work email, a text to a friend, a LinkedIn post, a tweet, a formal complaint email, an Instagram caption, a cover letter email, and a WhatsApp voice note transcription. Students sort them into a spectrum from most formal to most informal. Discuss: what clues helped you decide? Teacher introduces the term "register" and links it to audience, purpose, and context.',
    differentiation: {
      support: 'Provide the two extreme examples (most formal and most informal) already placed on the spectrum.',
      core: 'Students sort independently and identify two language features that signal the register of each text.',
      stretch: 'Students explain why the same person might use all eight registers in a single day and what this tells us about language.',
    },
    resources: ['Eight digital text examples on cards or slides', 'Spectrum line for board'],
  },
  mainActivities: [
    {
      title: 'Register Analysis: Spotting the Features',
      duration: '20 minutes',
      instructions:
        'Students receive a worksheet with four pairs of digital texts — each pair communicates the same message but in different registers (e.g., a formal email requesting a meeting versus a text message doing the same). For each pair, students highlight and label the language features that indicate register: sentence length, vocabulary choices, use of contractions, punctuation, greeting and sign-off conventions, use of emojis or abbreviations, and overall tone. Students then complete a summary table listing the key features of formal and informal digital register.',
      differentiation: {
        support: 'Provide a checklist of features to look for (contractions, sentence length, punctuation, greetings) and highlight the first pair as a model.',
        core: 'Students annotate independently and complete the summary table with their own examples.',
        stretch: 'Students identify a "middle register" (semi-formal) and explain when and why it is used in digital communication.',
      },
      resources: ['Paired digital texts worksheet', 'Summary table template', 'Feature checklist (support tier)', 'Highlighters'],
    },
    {
      title: 'Code-Switching Challenge',
      duration: '21 minutes',
      instructions:
        'Students are given three scenarios requiring them to write the same message in three different registers: (1) a text message to a friend explaining you cannot attend their party, (2) an email to a teacher explaining your absence from a lesson, (3) a formal letter to a headteacher requesting permission for absence. Students write all three versions, then swap with a partner who peer-assesses using a register checklist. Teacher selects strong examples to share under the visualiser, discussing what changes between versions and what stays the same.',
      differentiation: {
        support: 'Provide a scaffold for each text with the opening line and key structural features already in place.',
        core: 'Students write all three texts independently, demonstrating clear register shifts with at least three distinct features per text.',
        stretch: 'Students write a fourth version — a social media post explaining their absence — and analyse how this register differs from all three.',
      },
      resources: ['Scenario card', 'Register checklist for peer assessment', 'Scaffold sheets (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Register Remix',
    duration: '7 minutes',
    instructions:
      'Teacher displays a deliberately inappropriate text (e.g., a formal legal letter written in text-speak, or a text message written in Shakespearean English). Students identify what is wrong and explain why register matters using the terminology from the lesson. Close with the key takeaway: effective communicators can code-switch fluently between registers depending on audience, purpose, and context.',
    differentiation: {
      support: 'Students identify at least two features that make the text inappropriate for its context.',
      core: 'Students explain why the register is inappropriate and suggest corrections.',
      stretch: 'Students discuss whether there are situations where deliberately using the wrong register can be effective (e.g., humour, satire).',
    },
  },
  homework:
    'Write the same message ("I would like to return a faulty product") in three different registers: a formal complaint letter, an email to customer service, and a social media post tagging the company. Annotate each to explain your language choices.',
  worksheetQuestions: [
    {
      question: 'Define "register" in your own words and explain what determines which register a writer uses.',
      lines: 4,
      modelAnswer:
        'Register is the level of formality in a piece of communication, which is determined by three key factors: audience (who the text is for), purpose (why it is being written), and context (the situation in which the communication takes place). For example, a job application email would use formal register because the audience is a potential employer, the purpose is to make a professional impression, and the context is a professional setting where Standard English is expected.',
      marks: 4,
    },
    {
      question: 'Identify four language features that distinguish formal digital communication from informal digital communication.',
      lines: 6,
      modelAnswer:
        'First, formal digital communication uses complete sentences with correct grammar and punctuation, whereas informal communication often uses fragments, abbreviations, and non-standard punctuation (e.g., multiple exclamation marks). Second, formal texts use sophisticated, precise vocabulary (e.g., "I would be grateful if you could"), while informal texts use colloquialisms and slang (e.g., "can u pls"). Third, formal communication avoids contractions ("cannot", "would not") while informal communication relies heavily on them ("can\'t", "wouldn\'t"). Fourth, formal texts follow conventional greeting and sign-off structures ("Dear Sir/Madam... Yours faithfully"), while informal texts may have no greeting at all or use casual openers ("Hey!", "Yo").',
      marks: 8,
    },
    {
      question: 'What is "code-switching" and why is it an important skill?',
      lines: 5,
      modelAnswer:
        'Code-switching is the ability to shift between different language registers, dialects, or styles depending on the social context, audience, and purpose. It is an important skill because effective communication requires adapting language to suit different situations — the way you speak to friends at lunch is appropriately different from the way you write an exam essay or speak in a job interview. Being able to code-switch demonstrates linguistic flexibility and awareness, and it ensures that your message is received appropriately by its intended audience.',
      marks: 4,
    },
    {
      question: 'Rewrite the following text message in formal register, suitable for a professional email: "hey can u send me that report thing asap? cheers mate"',
      lines: 5,
      modelAnswer:
        'Dear [Name], I hope this email finds you well. I am writing to request that you send me the report at your earliest convenience, as I require it for an upcoming deadline. I would be most grateful for your prompt attention to this matter. Kind regards, [Your Name]. The key changes include: replacing the informal greeting with a formal salutation, expanding abbreviations into full words, replacing colloquialisms ("cheers mate") with professional sign-off language, using complete sentences with correct punctuation, and adopting a polite, professional tone throughout.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson connects directly to AQA Paper 2 Section B writing tasks, which require students to adapt register for different audiences.',
    'Emphasise that no register is inherently better than another — appropriateness depends entirely on context.',
    'The code-switching challenge can be extended into a longer writing assessment if needed.',
    'Use the "Register Remix" plenary to reinforce that humour can be a powerful teaching tool for understanding appropriateness.',
    'Consider linking this lesson to students\' own experiences of accidentally using the wrong register (e.g., sending a casual message to a teacher).',
  ],
  targetedSkills: [
    'AO5: Writing for audience and purpose',
    'AO6: Technical accuracy',
    'Register awareness',
    'Code-switching',
    'Peer assessment',
  ],
};

// ─── Lesson 6: Film and Television — Narrative and Cinematography ────────────

const lesson6: LessonPlan = {
  id: 'media-literacy-06-film-television-narrative',
  title: 'Film and Television: Narrative and Cinematography',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Understand how film and television use narrative structures to engage audiences.',
    'Analyse key cinematographic techniques and explain their effects on meaning and audience response.',
    'Apply media literacy skills to "read" a moving image text using appropriate terminology.',
  ],
  successCriteria: [
    'I can identify and explain at least three narrative techniques used in film and television (e.g., flashback, foreshadowing, non-linear narrative).',
    'I can analyse how camera angles, shot types, lighting, and sound create meaning in a film extract.',
    'I can write an analytical paragraph about a film extract using cinematographic terminology accurately.',
  ],
  keywords: [
    'cinematography', 'mise-en-scene', 'shot type', 'camera angle',
    'diegetic sound', 'non-diegetic sound', 'narrative arc', 'editing',
  ],
  starterActivity: {
    title: 'What Can You See? What Can You Hear?',
    duration: '8 minutes',
    instructions:
      'Play a 60-second clip from a well-known film (with no dialogue — just visuals and music). Students write down everything they notice: what they see and what they hear. Class feedback reveals that students are unconsciously "reading" the text — camera angles, lighting, music, and colour all communicate meaning without a single word being spoken. Teacher introduces the concept that film is a "text" that can be analysed just like a written one.',
    differentiation: {
      support: 'Provide a two-column observation grid (What I See / What I Hear) to structure note-taking.',
      core: 'Students write freely and then categorise their observations into visual and audio techniques.',
      stretch: 'Students infer the mood, genre, and target audience from the clip alone and explain their reasoning.',
    },
    resources: ['60-second film clip (no dialogue)', 'Observation grid (support tier)'],
  },
  mainActivities: [
    {
      title: 'Cinematography Toolkit',
      duration: '20 minutes',
      instructions:
        'Teacher introduces key cinematographic techniques through a slide presentation with visual examples: (1) Shot types — extreme close-up, close-up, mid-shot, long shot, extreme long shot; (2) Camera angles — high angle, low angle, eye level, Dutch tilt; (3) Camera movement — pan, tilt, tracking, zoom; (4) Lighting — high-key, low-key, backlighting, natural; (5) Sound — diegetic and non-diegetic; (6) Editing — cut, fade, cross-cut, slow motion. Students create a cinematography reference page in their books with each technique defined and an example of its effect. Teacher shows a short clip after every two techniques to identify them in action.',
      differentiation: {
        support: 'Provide a partially completed reference page with definitions; students add effects and examples.',
        core: 'Students complete the full reference page independently with their own descriptions of each effect.',
        stretch: 'Students identify which techniques are used most commonly in specific genres (horror, comedy, action) and explain why.',
      },
      resources: ['Cinematography slide deck', 'Short film clips for examples', 'Reference page template (support tier)'],
    },
    {
      title: 'Film Extract Analysis',
      duration: '20 minutes',
      instructions:
        'Play a 3-minute extract from an age-appropriate film (e.g., an opening sequence or a key dramatic scene). Students watch the extract three times: first for overall impression, second to note visual techniques, third to note audio techniques. Using their cinematography toolkit, students complete a detailed analysis grid and then write an analytical paragraph explaining how the director uses at least three techniques to create meaning. Teacher models the opening sentence of the paragraph and the structure: technique identified, specific example from the clip, effect on the audience.',
      differentiation: {
        support: 'Provide sentence starters for the paragraph and a simplified analysis grid focusing on three key techniques.',
        core: 'Students write a full paragraph independently analysing at least three techniques with specific evidence.',
        stretch: 'Students write a second paragraph considering how the extract would change if one key technique were altered (e.g., changing the music from minor to major key).',
      },
      resources: ['Film extract (3 minutes)', 'Analysis grid', 'Paragraph scaffold (support tier)', 'Cinematography toolkit reference'],
    },
  ],
  plenaryActivity: {
    title: 'Technique Bingo',
    duration: '7 minutes',
    instructions:
      'Students create a 3x3 bingo grid with nine cinematographic terms from the lesson. Teacher plays a final short clip (60 seconds) and students cross off techniques they spot. First to complete a line calls "Cut!" and must explain each technique they identified with its effect. This reinforces terminology recall in an engaging format.',
    differentiation: {
      support: 'Provide a pre-populated bingo grid with the nine most accessible techniques.',
      core: 'Students choose their own nine techniques from the full toolkit.',
      stretch: 'Students must explain the effect of each technique on the audience, not just identify it.',
    },
  },
  homework:
    'Watch the opening 5 minutes of any film or TV programme. Identify five cinematographic techniques used and write a paragraph analysing how the opening engages the audience.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between a close-up shot and a long shot. When might a director choose to use each one?',
      lines: 5,
      modelAnswer:
        'A close-up shot frames a subject tightly, typically showing a character\'s face from the neck up, and is used to convey emotion, intimacy, or intensity. A director might use a close-up during a moment of emotional revelation to ensure the audience notices subtle facial expressions. A long shot, by contrast, shows the full figure of a character within their environment, establishing the setting and the character\'s relationship to it. A director might use a long shot at the beginning of a scene to orient the audience geographically, or to show a character\'s isolation by emphasising the empty space around them.',
      marks: 4,
    },
    {
      question: 'What is the difference between diegetic and non-diegetic sound? Give an example of each and explain its effect.',
      lines: 5,
      modelAnswer:
        'Diegetic sound is any sound that exists within the world of the film — sounds that the characters themselves could hear, such as dialogue, footsteps, traffic, or a radio playing. Non-diegetic sound is added in post-production and exists outside the film\'s world — the characters cannot hear it. The most common example is a musical score or soundtrack. For instance, a tense violin crescendo during a horror scene is non-diegetic sound that builds suspense for the audience even though the character on screen cannot hear it. Diegetic sound, such as a creaking door, makes the world feel realistic and grounded.',
      marks: 5,
    },
    {
      question: 'Analyse a film extract you have watched, explaining how the director uses at least three techniques to create meaning for the audience.',
      lines: 8,
      modelAnswer:
        'In the opening sequence, the director uses a slow tracking shot that follows the protagonist through a deserted street, creating a sense of unease by revealing the environment gradually rather than all at once. The low-key lighting casts deep shadows across the buildings, connoting danger, secrecy, and the unknown — the audience is positioned to feel as uncertain as the character. A low-angle shot of the antagonist standing at the end of the street makes them appear powerful and threatening, while the protagonist is shown in a high-angle shot that emphasises their vulnerability. The non-diegetic sound of a low, droning cello underscores the tension throughout, growing louder as the characters approach each other, building anticipation for the confrontation.',
      marks: 8,
    },
    {
      question: 'Why is it useful to analyse film and television as "texts"? How is this similar to analysing written texts?',
      lines: 5,
      modelAnswer:
        'Analysing film and television as texts is useful because it encourages us to look beyond surface-level entertainment and consider the deliberate choices made by directors, editors, and producers to communicate meaning. Just as a writer selects specific words, sentence structures, and literary techniques to create effects, a filmmaker selects shot types, camera angles, lighting, and sound to shape the audience\'s emotional and intellectual response. In both cases, the "author" has an intention, the text is constructed rather than natural, and the audience is positioned to respond in particular ways. The skills of close analysis, inference, and evaluation apply equally to written and moving image texts.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Select film clips that are age-appropriate and widely accessible — avoid anything with a certificate above the year group.',
    'The cinematography toolkit will be used as a reference across the unit — ensure students retain it in their books.',
    'Watching the extract three times is essential: first for engagement, second and third for analytical note-taking.',
    'This lesson introduces transferable analytical skills that mirror those used in literary analysis for GCSE English Literature.',
    'Consider displaying a "Shot of the Week" on the classroom screen to keep cinematographic analysis active between lessons.',
  ],
  targetedSkills: [
    'AO2: Analysis of language and structure (adapted for moving image)',
    'Moving image analysis',
    'Analytical paragraph writing',
    'Technical terminology',
    'Visual literacy',
  ],
};

// ─── Lesson 7: Podcasts and Audio — Analysing Spoken Word ────────────────────

const lesson7: LessonPlan = {
  id: 'media-literacy-07-podcasts-audio-spoken-word',
  title: 'Podcasts and Audio: Analysing Spoken Word',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Understand how podcasts and audio media use spoken language features to engage and persuade listeners.',
    'Analyse the techniques used in podcasts including tone, pace, structure, and rhetorical devices.',
    'Evaluate how the absence of visual elements in audio media affects the way meaning is communicated.',
  ],
  successCriteria: [
    'I can identify at least four spoken language features used in podcasts (e.g., tone shifts, rhetorical questions, anecdotes, direct address).',
    'I can analyse how a podcast extract uses spoken word techniques to engage its audience.',
    'I can explain how audio-only media differs from visual media in the way it communicates meaning.',
  ],
  keywords: [
    'podcast', 'tone', 'pace', 'inflection',
    'rhetoric', 'anecdote', 'direct address', 'paralanguage',
  ],
  starterActivity: {
    title: 'Voices Without Faces',
    duration: '8 minutes',
    instructions:
      'Play 30-second audio clips from three different podcasts (e.g., a true crime podcast, a comedy podcast, and an educational podcast). Without revealing the genre or title, students guess the type, target audience, and purpose of each clip based solely on vocal delivery. Discuss: how did you know? What vocal clues guided your judgement? Teacher introduces the concept that voice alone — tone, pace, volume, accent — communicates enormous amounts of information.',
    differentiation: {
      support: 'Provide a multiple-choice option for each clip (e.g., "Is this clip: A) comedy, B) news, C) true crime?").',
      core: 'Students identify the genre, audience, and purpose independently with reasoning.',
      stretch: 'Students consider how the same script would be received differently if delivered in a different tone or accent.',
    },
    resources: ['Three 30-second podcast audio clips', 'Audio playback equipment'],
  },
  mainActivities: [
    {
      title: 'Spoken Language Analysis: Podcast Extract',
      duration: '22 minutes',
      instructions:
        'Play a 2-3 minute extract from an age-appropriate, engaging podcast. Students listen twice: first for overall comprehension, second with a transcript to annotate specific spoken language features. Using a colour-coded annotation system, students identify: rhetorical questions (blue), anecdotes (green), direct address to the listener (red), changes in tone or pace (underline), and use of humour or informality (yellow). Students then complete a short analysis writing task: "How does the podcaster engage the listener in this extract? Analyse at least three techniques with specific examples."',
      differentiation: {
        support: 'Provide a pre-annotated transcript with two features already identified; students find and annotate three more.',
        core: 'Students annotate the full transcript independently and write the analysis using at least three techniques.',
        stretch: 'Students consider the structural choices of the extract — how does the podcaster sequence their ideas for maximum impact?',
      },
      resources: ['Podcast extract audio (2-3 minutes)', 'Printed transcript', 'Coloured highlighters', 'Analysis writing frame'],
    },
    {
      title: 'Podcast Script Writing',
      duration: '18 minutes',
      instructions:
        'Students write a 1-minute podcast script introducing a topic of their choice to a teenage audience. They must include at least four spoken language techniques from the lesson: a hook opening, direct address, at least one anecdote or example, a rhetorical question, and a clear sign-off. In pairs, students practise delivering their scripts aloud, focusing on tone, pace, and emphasis. Two or three volunteers perform for the class, and the audience provides feedback on which techniques were most effective and why.',
      differentiation: {
        support: 'Provide a script template with structural markers (hook, introduction, example, question, sign-off) and sentence starters.',
        core: 'Students write the full script independently, incorporating at least four techniques.',
        stretch: 'Students record their scripts using a phone or device and listen back, evaluating their own delivery and making improvements.',
      },
      resources: ['Script template (support tier)', 'Timer for performances', 'Recording devices (stretch tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Audio vs Visual: What\'s Different?',
    duration: '7 minutes',
    instructions:
      'Quick-fire class discussion: "What can audio media do that visual media cannot? What does it lose?" Students contribute ideas verbally, and the teacher records them in a two-column table on the board. Key point to draw out: audio media relies entirely on voice, sound effects, and music to create imagery in the listener\'s mind — it is in some ways the most "literary" form of media because the audience must actively construct the visual world.',
    differentiation: {
      support: 'Students contribute at least one idea to each column.',
      core: 'Students explain their points with reasoning and examples from the lesson.',
      stretch: 'Students draw a parallel between how audio media and written fiction both rely on the audience\'s imagination.',
    },
  },
  homework:
    'Listen to a 5-minute section of any podcast. Write a paragraph analysing how the podcaster uses spoken language techniques to engage the audience. Include at least three specific examples.',
  worksheetQuestions: [
    {
      question: 'Explain how podcasters use "direct address" to engage their audience. Why is this technique particularly effective in audio media?',
      lines: 5,
      modelAnswer:
        'Direct address is when the podcaster speaks to the listener using the second person pronoun "you" — for example, "Have you ever wondered why..." or "I want you to imagine..." This technique creates a sense of intimacy and personal connection, as though the podcaster is speaking directly to each individual listener rather than broadcasting to a faceless audience. It is particularly effective in audio media because listeners typically consume podcasts alone through headphones, which makes the direct address feel genuinely personal and conversational. This sense of one-to-one communication builds trust and keeps the listener engaged.',
      marks: 4,
    },
    {
      question: 'What role does "pace" play in a podcast, and how can changes in pace affect the listener\'s experience?',
      lines: 5,
      modelAnswer:
        'Pace refers to the speed at which the podcaster speaks, and it is a powerful tool for shaping the listener\'s emotional response. A fast pace can convey excitement, urgency, or enthusiasm, drawing the listener in and creating energy. A slow pace, by contrast, can build tension, add gravitas to a serious point, or give the listener time to absorb complex information. Strategic pauses — moments of silence — can create dramatic effect, signal a shift in topic, or emphasise the importance of what has just been said. Skilled podcasters vary their pace throughout an episode to maintain interest and mirror the emotional arc of their content.',
      marks: 5,
    },
    {
      question: 'Compare how a podcast and a television programme might cover the same topic differently. What are the advantages and limitations of each medium?',
      lines: 8,
      modelAnswer:
        'A television programme can use visual evidence — footage, graphics, on-screen text, and the physical presence of a presenter — to communicate information, which can make complex topics more accessible and engaging. However, television requires the viewer\'s full visual attention, making it less flexible in terms of when and how it can be consumed. A podcast, by contrast, relies entirely on spoken word, sound effects, and music, which means it must work harder to paint pictures with language and maintain engagement without visual stimulation. However, the intimacy of the audio format — typically listened to through headphones — creates a uniquely personal connection between presenter and listener. Podcasts are also more portable and can be consumed during commutes, exercise, or daily tasks. Both formats make editorial choices about what to include and exclude, and both can introduce bias through framing and emphasis, but the techniques they use to do so are fundamentally different.',
      marks: 8,
    },
    {
      question: 'Why might podcasts be described as the most "literary" form of media?',
      lines: 4,
      modelAnswer:
        'Podcasts might be described as the most literary form of media because, like novels and poems, they rely heavily on the audience\'s imagination to construct meaning. Without visual images to provide information directly, the podcaster must use descriptive language, narrative techniques, and vocal delivery to create pictures in the listener\'s mind. This process of mental imagery creation mirrors the experience of reading literature, where the reader actively constructs the visual world from the writer\'s words. Both forms demand active engagement rather than passive consumption.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Select podcast extracts that are age-appropriate, culturally diverse, and demonstrate a range of spoken language techniques.',
    'Providing transcripts is essential for the annotation activity — students find it very difficult to analyse spoken language without a written reference.',
    'The script-writing activity can be extended into a full podcast production project if time allows.',
    'This lesson supports AQA Spoken Language endorsement objectives and Paper 2 non-fiction analysis skills.',
    'Consider using extracts from student-made podcasts if available — this increases engagement and relatability.',
  ],
  targetedSkills: [
    'AO2: Analysis of spoken language',
    'Spoken Language endorsement skills',
    'Creative writing (script)',
    'Performance and delivery',
    'Comparative analysis',
  ],
};

// ─── Lesson 8: Propaganda and Persuasion in Media ────────────────────────────

const lesson8: LessonPlan = {
  id: 'media-literacy-08-propaganda-persuasion',
  title: 'Propaganda and Persuasion in Media',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Define propaganda and distinguish it from other forms of persuasion in media.',
    'Identify and analyse the key techniques used in propaganda across historical and modern contexts.',
    'Evaluate the ethical implications of propaganda and its impact on public opinion and behaviour.',
  ],
  successCriteria: [
    'I can define propaganda and explain how it differs from advertising or news reporting.',
    'I can identify and explain at least four propaganda techniques (e.g., bandwagon, fear appeal, loaded language, repetition).',
    'I can analyse a propaganda text and evaluate its effectiveness and ethical implications.',
  ],
  keywords: [
    'propaganda', 'persuasion', 'bandwagon', 'fear appeal',
    'loaded language', 'scapegoating', 'appeal to authority', 'disinformation',
  ],
  starterActivity: {
    title: 'Persuasion or Propaganda?',
    duration: '8 minutes',
    instructions:
      'Display four short media texts: (1) a charity advert asking for donations, (2) a wartime recruitment poster, (3) a political party campaign leaflet, (4) a health campaign poster about handwashing. Students discuss in pairs: which of these are persuasion and which are propaganda? Is there a clear line between the two? Teacher facilitates class discussion and introduces a working definition: propaganda is systematic communication designed to influence attitudes and behaviour in service of a political or ideological agenda, often using manipulation and one-sided information.',
    differentiation: {
      support: 'Provide a simple definition comparison sheet: "Persuasion is... Propaganda is..." with examples.',
      core: 'Students articulate the distinction independently and justify their categorisation of each text.',
      stretch: 'Students consider whether all persuasion exists on a spectrum with propaganda and discuss where the ethical line falls.',
    },
    resources: ['Four media text examples on slides', 'Definition comparison sheet (support tier)'],
  },
  mainActivities: [
    {
      title: 'Propaganda Techniques Investigation',
      duration: '22 minutes',
      instructions:
        'Students work through a structured investigation of eight key propaganda techniques: (1) Bandwagon — "Everyone is doing it", (2) Fear Appeal — creating anxiety to prompt action, (3) Loaded Language — emotionally charged vocabulary, (4) Repetition — reinforcing messages through constant exposure, (5) Testimonial/Appeal to Authority — using respected figures, (6) Scapegoating — blaming a group for complex problems, (7) Card Stacking — presenting only favourable information, (8) Glittering Generalities — using vague, positive language to mask specifics. For each technique, students examine a historical or modern example, define the technique, and explain how it manipulates the audience. Students compile their findings into a propaganda techniques reference guide.',
      differentiation: {
        support: 'Provide definitions for each technique; students focus on identifying examples and explaining effects.',
        core: 'Students write their own definitions and analyse each example independently.',
        stretch: 'Students find a modern real-world example of each technique from their own media consumption and add it to their guide.',
      },
      resources: ['Propaganda examples pack (historical and modern)', 'Reference guide template', 'Definitions sheet (support tier)'],
    },
    {
      title: 'Propaganda Text Analysis',
      duration: '18 minutes',
      instructions:
        'Students receive a historical propaganda poster (e.g., a World War I or II recruitment poster) and a modern propaganda-style text (e.g., a political social media graphic or a manipulative online advertisement). For each text, students write an analytical paragraph identifying at least three propaganda techniques, explaining how each works to influence the audience, and evaluating the overall effectiveness of the text. Students then write a brief reflection: "How does understanding propaganda techniques make you a more critical media consumer?"',
      differentiation: {
        support: 'Provide an annotated model analysis of the historical poster; students write independently about the modern text using the model as a guide.',
        core: 'Students analyse both texts independently, using accurate terminology and specific evidence.',
        stretch: 'Students compare the two texts, discussing how propaganda techniques have evolved from print to digital media and why.',
      },
      resources: ['Historical propaganda poster', 'Modern propaganda-style text', 'Model analysis (support tier)', 'Paragraph structure guide'],
    },
  ],
  plenaryActivity: {
    title: 'Propaganda Red Flags',
    duration: '7 minutes',
    instructions:
      'Students create a personal "Propaganda Red Flag" checklist — a list of five warning signs that a text might be using propaganda techniques. These could include: one-sided information, emotional manipulation, appeals to fear, demonisation of a group, or vague language without evidence. Teacher collects ideas and compiles a class list. Close with the message: recognising these techniques does not mean rejecting all persuasion — it means making informed, critical choices about what to believe.',
    differentiation: {
      support: 'Students select five red flags from a provided list of ten and explain their choices.',
      core: 'Students generate their own five red flags based on the lesson content.',
      stretch: 'Students rank their red flags from most to least dangerous and explain their reasoning.',
    },
  },
  homework:
    'Find one example of propaganda or manipulative media from any time period. Identify three techniques used and write a paragraph evaluating how effectively the text manipulates its audience.',
  worksheetQuestions: [
    {
      question: 'Define propaganda and explain how it differs from other forms of persuasion such as advertising.',
      lines: 5,
      modelAnswer:
        'Propaganda is a systematic form of communication designed to influence public attitudes and behaviour in service of a political, ideological, or social agenda. Unlike commercial advertising, which aims to sell products, propaganda aims to shape beliefs, often about political leaders, social groups, or national identity. While advertising may use exaggeration, propaganda often employs deliberate manipulation, one-sided information, and emotional exploitation. The key distinction is intent: advertising sells goods, while propaganda sells ideas — and it often relies on suppressing alternative viewpoints to do so.',
      marks: 4,
    },
    {
      question: 'Explain three propaganda techniques with examples and describe how each one manipulates the audience.',
      lines: 8,
      modelAnswer:
        'Bandwagon is the technique of suggesting that "everyone" supports a cause or idea, pressuring the audience to conform through fear of being left out. For example, a political campaign might say "Millions are already on board — join the movement!" to imply that resistance is futile and agreement is the norm. Fear Appeal works by creating anxiety about a threat and then presenting the propagandist\'s message as the solution. A wartime poster showing an invading enemy with the caption "They\'re coming — enlist now!" exploits the audience\'s fear to motivate action. Scapegoating involves blaming a specific group for complex social problems, redirecting public anger away from the real causes. Historical examples include propaganda that blamed economic crises on minority groups, simplifying complex issues into a false narrative of blame.',
      marks: 9,
    },
    {
      question: 'Analyse a propaganda poster, identifying at least three techniques and evaluating its effectiveness.',
      lines: 8,
      modelAnswer:
        'The World War I recruitment poster "Your Country Needs YOU" uses several propaganda techniques to powerful effect. First, direct address through the second person pronoun "YOU" (in bold, capitalised text) creates personal responsibility — the viewer cannot dismiss the message as aimed at someone else. Second, the appeal to authority is achieved through the image of Lord Kitchener, a respected military figure, pointing directly at the viewer, which adds weight and legitimacy to the call. Third, loaded language in the word "needs" implies urgency and duty — the country is in crisis and requires the viewer\'s personal sacrifice. The poster is highly effective because it combines visual and linguistic techniques to create an inescapable sense of personal obligation, making it very difficult for the viewer to look away without feeling guilty.',
      marks: 8,
    },
    {
      question: 'Why is it important to be able to recognise propaganda techniques in modern media?',
      lines: 5,
      modelAnswer:
        'Recognising propaganda techniques in modern media is essential because propaganda has not disappeared — it has simply migrated to new platforms. Social media, political campaigns, and online advertising all employ propaganda techniques such as fear appeal, bandwagon, and loaded language to influence attitudes and behaviour. Without the ability to identify these techniques, individuals are vulnerable to manipulation, accepting one-sided or emotionally charged messages without questioning their source, evidence, or intent. Media literacy empowers citizens to engage critically with information, distinguish between evidence-based argument and emotional manipulation, and make informed decisions rather than being passively shaped by those who control media narratives.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Handle this topic sensitively — some students may have personal connections to propaganda through family history or current political contexts.',
    'Use historical examples as the primary focus, as they provide analytical distance, but draw clear links to modern equivalents.',
    'Emphasise that the goal is not to make students cynical about all media but to equip them with the tools to engage critically.',
    'This lesson links strongly to AO3 (context) and prepares students for non-fiction analysis at GCSE.',
    'Consider cross-curricular links with History (wartime propaganda) and PSHE (media manipulation and radicalisation).',
  ],
  targetedSkills: [
    'AO2: Analysis of language and structure',
    'AO3: Context',
    'Critical evaluation',
    'Ethical reasoning',
    'Analytical writing',
  ],
};

// ─── Lesson 9: Creating Your Own Media Text ──────────────────────────────────

const lesson9: LessonPlan = {
  id: 'media-literacy-09-creating-media-text',
  title: 'Creating Your Own Media Text',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Apply knowledge of media techniques to plan and create an original media text for a specific audience and purpose.',
    'Make deliberate, justified choices about language, layout, and visual features in media production.',
    'Reflect critically on the construction process, evaluating how producer choices shape audience reception.',
  ],
  successCriteria: [
    'I can plan a media text with a clearly defined target audience, purpose, and set of techniques.',
    'I can create an original media text that demonstrates at least five deliberate technical choices.',
    'I can write a reflective commentary explaining and justifying my creative decisions using media literacy terminology.',
  ],
  keywords: [
    'production', 'composition', 'layout', 'mode of address',
    'anchorage', 'white space', 'house style', 'draft',
  ],
  starterActivity: {
    title: 'The Producer\'s Brief',
    duration: '7 minutes',
    instructions:
      'Teacher presents a "client brief" on the board: "A national charity wants to create a media text to raise awareness of ocean plastic pollution among 13-16 year olds. You are the media production team. What type of media text would you create and why?" Students brainstorm in pairs: poster, social media campaign, podcast intro, short film, infographic, magazine advert? Class vote on the most effective format, with students justifying their choices using knowledge from previous lessons.',
    differentiation: {
      support: 'Provide a list of possible formats with brief descriptions to choose from.',
      core: 'Students propose a format and justify their choice with reference to audience and purpose.',
      stretch: 'Students propose a multi-platform campaign using two or more formats and explain how they would complement each other.',
    },
    resources: ['Client brief slide', 'Format options list (support tier)'],
  },
  mainActivities: [
    {
      title: 'Planning Your Media Text',
      duration: '18 minutes',
      instructions:
        'Students choose their media text format and complete a detailed planning sheet. The planning sheet requires them to specify: (1) Format — what type of media text, (2) Audience — specific target demographic with justification, (3) Purpose — to inform, persuade, entertain, or a combination, (4) Five key techniques they will use and why, (5) A rough layout sketch or structural plan, (6) Language register and tone. Teacher circulates to approve plans before students begin production, ensuring all plans are ambitious but achievable within the time available.',
      differentiation: {
        support: 'Provide a planning template with guided prompts and examples for each section.',
        core: 'Students complete the planning sheet independently with clear justifications for each choice.',
        stretch: 'Students include a brief analysis of a professional example of their chosen format, explaining which techniques they will adopt and adapt.',
      },
      resources: ['Planning sheet', 'Guided planning template (support tier)', 'Examples of professional media texts for reference'],
    },
    {
      title: 'Media Text Production',
      duration: '23 minutes',
      instructions:
        'Students create their media text using available resources. Poster and print texts can be created on A3 paper with art materials or on devices using design software. Social media posts can be drafted on templates. Podcast scripts can be written and rehearsed. Students must ensure that every element of their text is a deliberate, justifiable choice. With 5 minutes remaining, students write a short reflective commentary (100-150 words) on the back of their text or on a separate sheet, explaining three key decisions they made and why, using media literacy terminology throughout.',
      differentiation: {
        support: 'Provide a design template with layout guides and a reflective commentary scaffold with sentence starters.',
        core: 'Students create and reflect independently, demonstrating at least five deliberate technical choices.',
        stretch: 'Students create a second version of their text for a different audience and write a comparative commentary explaining how and why they adapted their choices.',
      },
      resources: ['A3 paper, art materials, devices', 'Design templates (support tier)', 'Social media post templates', 'Reflective commentary scaffold (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Gallery Presentation and Peer Feedback',
    duration: '7 minutes',
    instructions:
      'Students display their media texts around the room or on desks. In a brief gallery walk, students view three peers\' texts and leave one sticky-note comment on each, identifying one effective technique and suggesting one improvement. Teacher selects two or three strong examples to discuss as a class, asking the creators to explain their choices. Close by linking back to the unit: "Now that you have been the producer, how does this change the way you will read media texts in the future?"',
    differentiation: {
      support: 'Provide a feedback sentence starter: "One effective technique I noticed is... One improvement could be..."',
      core: 'Students give specific, terminology-driven feedback.',
      stretch: 'Students evaluate whether the text would achieve its stated purpose with its target audience and explain why.',
    },
  },
  homework:
    'Complete and refine your reflective commentary to 200 words. Ensure you explain at least five deliberate choices using media literacy terminology, linking each choice to its intended effect on your target audience.',
  worksheetQuestions: [
    {
      question: 'Why is it important to define your target audience before creating a media text?',
      lines: 4,
      modelAnswer:
        'Defining your target audience before creating a media text is essential because every production decision — from language register and colour palette to layout and platform — should be guided by who the text is designed to reach. A text targeting teenagers will use different vocabulary, visual conventions, and modes of address than one targeting adults. Without a clear audience in mind, a producer risks creating a text that fails to engage anyone effectively, because its techniques are unfocused and its message is unclear. Audience awareness ensures that every element of the text works towards a coherent, targeted purpose.',
      marks: 4,
    },
    {
      question: 'Explain three deliberate choices you made when creating your media text and justify each one using media literacy terminology.',
      lines: 8,
      modelAnswer:
        'First, I chose to use a bold, sans-serif font in red and white for my headline because sans-serif fonts connote modernity and clarity, while red creates a sense of urgency — both appropriate for a campaign targeting young people about an urgent environmental issue. Second, I used direct address ("You can make a difference") as my mode of address to create personal responsibility and a sense of empowerment, making the audience feel that their individual action matters. Third, I left significant white space around the central image to create visual impact and ensure the photograph of ocean pollution was the focal point of the composition, rather than competing with cluttered text or graphics.',
      marks: 6,
    },
    {
      question: 'How does the experience of creating a media text change the way you "read" media texts produced by others?',
      lines: 5,
      modelAnswer:
        'Creating a media text reveals that nothing in a professional media product is accidental — every colour, word, image, and layout choice is deliberate and designed to achieve a specific effect on the audience. Having made these decisions myself, I now look at adverts, social media posts, and news articles with a more critical eye, asking: "Why did the producer choose this image? Why is this word in bold? Who is the intended audience and what response are they trying to provoke?" This shift from passive consumer to active, critical reader is the core of media literacy — understanding that media texts are constructed, not natural, and that recognising this construction gives us the power to evaluate messages rather than simply absorbing them.',
      marks: 5,
    },
    {
      question: 'What is a "mode of address" and why does it matter in media production?',
      lines: 4,
      modelAnswer:
        'Mode of address refers to the way a media text speaks to its audience — the tone, register, and relationship it establishes between producer and consumer. A formal mode of address (e.g., "The public is advised to...") creates distance and authority, suitable for government announcements. An informal, direct mode of address (e.g., "Hey, you! Check this out!") creates intimacy and energy, suitable for youth-targeted social media. The mode of address matters because it determines how the audience perceives the text: as authoritative, friendly, urgent, or relatable. Choosing the wrong mode of address can alienate the target audience entirely.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is the creative application lesson of the unit — it should feel dynamic and student-led.',
    'Approve plans before production to prevent students from spending time on unfocused or over-ambitious projects.',
    'The reflective commentary is the most important assessment element — it demonstrates whether students understand why they made their choices, not just what they created.',
    'Ensure a range of materials is available: art supplies for print texts, device access for digital texts, paper templates for those without device access.',
    'The gallery walk plenary should be brisk — keep energy high and feedback focused.',
  ],
  targetedSkills: [
    'AO5: Writing for audience and purpose',
    'AO6: Technical accuracy',
    'Media production',
    'Creative application',
    'Reflective and evaluative writing',
  ],
};

// ─── Lesson 10: Critical Evaluation — Fake News and Source Reliability ───────

const lesson10: LessonPlan = {
  id: 'media-literacy-10-fake-news-source-reliability',
  title: 'Critical Evaluation: Fake News and Source Reliability',
  text: 'Media Literacy and Digital Texts',
  board: 'AQA',
  yearGroup: '7-9',
  duration: '60 minutes',
  objectives: [
    'Define "fake news" and understand the different forms it can take, from satire to deliberate disinformation.',
    'Apply a systematic framework for evaluating the reliability of media sources and claims.',
    'Develop practical strategies for identifying misinformation and making informed judgements about media credibility.',
  ],
  successCriteria: [
    'I can distinguish between different types of misleading content: satire, misinformation, disinformation, and clickbait.',
    'I can apply the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) to evaluate a source\'s reliability.',
    'I can analyse a piece of media content and write a justified evaluation of its credibility.',
  ],
  keywords: [
    'fake news', 'misinformation', 'disinformation', 'clickbait',
    'source reliability', 'fact-checking', 'confirmation bias', 'credibility',
  ],
  starterActivity: {
    title: 'Real or Fake?',
    duration: '8 minutes',
    instructions:
      'Display six headlines on the board — three are from genuine news sources and three are fabricated or from satire sites. Students vote (thumbs up / thumbs down) on whether each is real or fake. Reveal the answers. Most classes will get at least one wrong. Discussion: why is it so difficult to tell? What made the fake headlines convincing? Teacher introduces the term "fake news" and distinguishes between its different forms: satire (intentional humour), misinformation (unintentional inaccuracy), and disinformation (deliberate deception).',
    differentiation: {
      support: 'After the vote, provide a checklist of "red flag" features (sensational language, no named source, suspicious URL) to help students revise their answers.',
      core: 'Students explain their reasoning for each vote before the reveal.',
      stretch: 'Students consider why fake news is more dangerous now than in previous eras and link their answer to social media and algorithms.',
    },
    resources: ['Six headline slides (three real, three fake)', 'Red flag checklist (support tier)'],
  },
  mainActivities: [
    {
      title: 'The CRAAP Test: Evaluating Sources',
      duration: '20 minutes',
      instructions:
        'Teacher introduces the CRAAP test framework for evaluating source reliability: Currency (when was it published? Is it up to date?), Relevance (does it relate to your topic? Is it at the right level?), Authority (who wrote it? What are their credentials?), Accuracy (is it supported by evidence? Can claims be verified?), Purpose (why was it created? To inform, persuade, sell, or entertain?). Students practise applying the CRAAP test to four different sources: (1) a Wikipedia article, (2) a tabloid news story, (3) an academic research summary, (4) a social media post sharing a statistic. For each source, students complete a CRAAP evaluation grid and assign a reliability score from 1-5.',
      differentiation: {
        support: 'Provide the CRAAP questions as a simplified checklist with yes/no responses; students give an overall score with one sentence of justification.',
        core: 'Students complete the full evaluation grid independently with written justifications for each criterion.',
        stretch: 'Students identify which CRAAP criterion is most important and argue why, then suggest additional criteria that the framework might be missing.',
      },
      resources: ['CRAAP test explanation handout', 'Four source examples', 'Evaluation grid worksheet', 'Simplified checklist (support tier)'],
    },
    {
      title: 'Fact-Checking in Practice',
      duration: '20 minutes',
      instructions:
        'Students receive a dossier of five media claims — some true, some false, some partially true. Using fact-checking strategies taught by the teacher (lateral reading, checking the original source, looking for corroboration from multiple outlets, checking the URL and publication, reverse image searching), students investigate each claim and write a verdict: True, False, or Partially True, with a written justification explaining their reasoning and the evidence they used. This activity can be conducted with printed materials or, if devices are available, with guided internet access. Students then write a concluding reflection: "What is the most important thing I can do to avoid being misled by fake news?"',
      differentiation: {
        support: 'Provide a step-by-step fact-checking guide and limit the investigation to three claims with scaffolded response frames.',
        core: 'Students investigate all five claims independently and write justified verdicts.',
        stretch: 'Students create their own "Fake News Survival Guide" — a one-page resource for younger students explaining how to spot and check fake news.',
      },
      resources: ['Claims dossier (five items)', 'Fact-checking strategy guide', 'Devices for internet access (optional)', 'Response frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Pledge and Reflect',
    duration: '7 minutes',
    instructions:
      'Students write a "Media Literacy Pledge" — three specific actions they will take in their daily media consumption as a result of this unit (e.g., "I will check the source before sharing a news story", "I will look for evidence before accepting a claim", "I will consider who benefits from a message"). Two or three students share their pledges. Teacher closes the unit by revisiting the definition of media literacy from Lesson 1 and asking: "How has your understanding of media literacy changed over these ten lessons?"',
    differentiation: {
      support: 'Provide a pledge template with options to select from and space to add one personal pledge.',
      core: 'Students write three original pledges with reasoning.',
      stretch: 'Students reflect on which lesson in the unit was most impactful for them and explain why in a short paragraph.',
    },
  },
  homework:
    'Write a 300-word essay responding to the question: "In the age of social media, is media literacy the most important skill a young person can have?" Include arguments for and against, and reach a clear conclusion.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between misinformation and disinformation. Why does the distinction matter?',
      lines: 5,
      modelAnswer:
        'Misinformation is false or inaccurate information that is spread without the intent to deceive — the person sharing it genuinely believes it to be true. For example, someone might share an outdated health statistic without realising it has been updated. Disinformation, by contrast, is deliberately false information created and spread with the intent to mislead, manipulate, or cause harm — for example, a fabricated news story designed to influence an election. The distinction matters because it affects how we respond: misinformation can be corrected through education and fact-checking, whereas disinformation requires us to consider who created it, why, and what agenda they are serving.',
      marks: 5,
    },
    {
      question: 'Apply the CRAAP test to evaluate the reliability of a source. Explain your assessment for each criterion.',
      lines: 8,
      modelAnswer:
        'Evaluating a social media post claiming that "90% of ocean plastic comes from just 10 rivers": Currency — the post has no date, which is a red flag, as data changes frequently and outdated statistics can be misleading. Relevance — the topic is relevant to environmental discussions, but the post lacks depth or context. Authority — the post is shared by an anonymous account with no credentials or affiliation with an environmental organisation, reducing its authority significantly. Accuracy — the claim is presented without a link to the original study, and no methodology is described; fact-checking reveals the statistic comes from a 2017 study that has since been updated with different findings. Purpose — the post appears designed to generate engagement (likes and shares) rather than inform, as it uses a dramatic statistic without nuance. Overall reliability score: 2/5 — the claim has a kernel of truth but is presented without context, attribution, or accuracy.',
      marks: 10,
    },
    {
      question: 'What is "confirmation bias" and how does it make people more vulnerable to fake news?',
      lines: 5,
      modelAnswer:
        'Confirmation bias is the psychological tendency to seek out, believe, and remember information that confirms our existing beliefs while ignoring or dismissing information that contradicts them. It makes people more vulnerable to fake news because they are more likely to accept and share false stories that align with their worldview without questioning the source or evidence. Social media algorithms amplify this effect by showing users content similar to what they have previously engaged with, creating "echo chambers" where the same perspectives are reinforced and alternative viewpoints are rarely encountered. Overcoming confirmation bias requires deliberate, conscious effort to seek out diverse sources and challenge one\'s own assumptions.',
      marks: 5,
    },
    {
      question: 'Why is media literacy considered an essential skill in the 21st century? Use evidence and examples from across this unit to support your answer.',
      lines: 8,
      modelAnswer:
        'Media literacy is considered essential in the 21st century because the volume, speed, and reach of media have expanded dramatically with digital technology, meaning individuals encounter more media messages in a single day than previous generations encountered in a month. Without media literacy, people are vulnerable to manipulation through advertising techniques that blur the line between content and promotion, news bias that shapes public opinion without readers\' awareness, propaganda techniques that exploit emotions to override critical thinking, and fake news that can spread globally within hours. This unit has demonstrated that every media text — from adverts and news articles to social media posts and podcasts — is constructed by a producer who makes deliberate choices to achieve a specific purpose. Media literacy equips individuals with the analytical tools to decode these constructions, question the intentions behind them, and make informed decisions about what to believe, share, and act upon. In an era where information is power, media literacy is the skill that ensures that power is distributed to the audience, not concentrated in the hands of producers alone.',
      marks: 10,
    },
  ],
  teacherNotes: [
    'This lesson works as both a standalone critical thinking session and as the culminating lesson of the media literacy unit.',
    'The "Real or Fake?" starter is most effective with headlines that are genuinely difficult to distinguish — avoid obviously absurd examples.',
    'If internet access is available, the fact-checking activity is much more authentic and engaging; if not, provide printed source materials.',
    'The CRAAP test is a widely used academic framework — introducing it at KS3 prepares students for independent research at KS4 and beyond.',
    'The pledges in the plenary create personal accountability and can be revisited in future lessons to assess lasting impact.',
    'Consider sharing the "Fake News Survival Guides" created by stretch students with younger year groups as a cross-school literacy initiative.',
  ],
  targetedSkills: [
    'AO2: Analysis of language',
    'AO3: Context and critical evaluation',
    'Source evaluation',
    'Fact-checking and research',
    'Extended evaluative writing',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const mediaLiteracyLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
];
