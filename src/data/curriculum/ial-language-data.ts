/**
 * IAL English Language - Data Sets for Analysis Practice
 * All texts are original, written for educational purposes.
 * Covers Units WEN01, WEN02, and WEN04 of the Pearson IAL English Language specification.
 * All strings are ASCII-safe.
 */

// ── Interface ─────────────────────────────────────────────────────────────────

export interface LanguageDataSet {
  id: string;
  title: string;
  unit: 'WEN01' | 'WEN02' | 'WEN04';
  dataType: 'spoken-transcript' | 'written-text' | 'social-media' | 'historical-text' | 'survey-data';
  context: string;
  data: string;
  annotationTasks: string[];
  analysisQuestions: string[];
  theoriesApplicable: string[];
  markSchemePoints: string[];
}

// ── Data Sets ─────────────────────────────────────────────────────────────────

export const ialLanguageDataSets: LanguageDataSet[] = [

  // ── WEN01: Language and Context ───────────────────────────────────────────

  // WEN01 DS1: Spoken transcript -- accent and dialect
  {
    id: 'wen01-ds1',
    title: 'Informal Conversation: Accent and Dialect Features',
    unit: 'WEN01',
    dataType: 'spoken-transcript',
    context: 'A spontaneous conversation between two friends from the West Midlands, recorded at a community centre. Both speakers are in their late teens. The transcript uses standard orthography with some phonological representation. Key: (.) = micropause, (..) = short pause, // = overlapping speech, [laughs] = paralinguistic feature.',
    data: `[Transcript begins mid-conversation]

A: so I was proper bostin about it yeah (..) like I proper cor believe it still
B: [laughs] ay ya // proper daft you
A:              // I know I know but (..) it were dead good though weren't it
B: it were yeah (..) me nan says we'm all gonna get laughed at if we talk like that
A: like what though (..) like normal?
B: [laughs] nah like (..) you know (..) like saying cor and am and all that
A: everybody round yer talks like that though (..) it int wrong is it
B: that's what I say (..) me nan just watches too much telly (..) she thinks everyone talks BBC
A: [laughs] BBC english (..) yo her's well old-fashioned her is
B: ay (..) her means well though

[Transcript ends]`,
    annotationTasks: [
      'Identify and label all non-standard lexical items, noting which are regional dialect words.',
      'Highlight examples of non-standard grammar and annotate the standard equivalent.',
      'Mark all phonological representations and describe the accent feature each illustrates.',
      'Identify discourse features such as overlaps, pauses, and adjacency pairs.',
      'Annotate any examples of code-switching or accommodation between speakers.',
    ],
    analysisQuestions: [
      'Analyse the dialect features present in this transcript, using appropriate linguistic frameworks.',
      'How do the speakers position themselves in relation to their regional identity through their language use?',
      'What does this transcript reveal about attitudes to accent and dialect? Refer to specific examples.',
      'Analyse the discourse structure of the conversation, focusing on how the speakers co-construct meaning.',
      'To what extent does this transcript support Trudgill\'s findings on dialect and social identity?',
    ],
    theoriesApplicable: [
      'Trudgill -- dialect levelling and regional identity',
      'Labov -- social stratification of language and the prestige of non-standard forms',
      'Milroy and Milroy -- language attitudes and standard language ideology',
      'Grice -- cooperative principle and conversational maxims',
      'Accommodation theory (Giles) -- convergence and divergence',
    ],
    markSchemePoints: [
      'Identification of West Midlands dialect vocabulary: "bostin" (excellent), "cor" (cannot), "wem" (we are), "ay" (no/have not), "yer" (here)',
      'Non-standard grammar: "it were", "her is", "her means" (third-person pronoun "her" for "she")',
      'Discourse features: overlapping speech, micropause use, adjacency pairs (question-response), back-channelling',
      'Discussion of covert prestige and positive attitudes toward regional dialect among peers',
      'Reference to standard language ideology via the character of the grandmother watching "BBC English"',
      'Analysis of identity construction through dialect: regional solidarity and in-group membership',
    ],
  },

  // WEN01 DS2: Social media posts -- online language
  {
    id: 'wen01-ds2',
    title: 'Social Media Posts: Features of Online Language',
    unit: 'WEN01',
    dataType: 'social-media',
    context: 'A series of posts from a public social media thread discussing a school sports day. Posted across approximately 90 minutes on a social platform with a 280-character limit. Posters are a mix of students, parents, and one teacher. Usernames have been anonymised. Original timestamps and formatting preserved.',
    data: `@student_user1 [11:02]
omg the relay race was UNREAL lmaooo actual chaos from start to finish #sportsday #fail

@parent_account [11:04]
Can't believe how well all the children performed today! So proud of Year 9 :) what a lovely afternoon

@student_user2 [11:07]
ngl ms jones nearly fell over during the staff race lol she was SPRINTING tho respect

@student_user1 [11:08]
@student_user2 deaddddd she was giving it EVERYTHING bro [crying laughing emoji] [running emoji]

@teacher_official [11:15]
What a wonderful sports day! Congratulations to all students on their tremendous effort and sportsmanship. Well done to Green House for the overall win.

@parent_account [11:17]
@teacher_official Thank you to all the staff for organising such a brilliant event! We really appreciate everything you do.

@student_user3 [11:19]
green house won bc they cheat every yr no cap [unamused emoji]

@student_user2 [11:21]
@student_user3 FACTS blue house was robbed

@student_user1 [11:23]
anyway it was peak fun even if we got destroyed lol see everyone tmr`,
    annotationTasks: [
      'Classify all instances of non-standard spelling and explain the linguistic process each represents.',
      'Identify examples of internet-specific lexis (initialisms, acronyms, neologisms) and annotate their full forms.',
      'Annotate the emoji usage and analyse its pragmatic function in each instance.',
      'Compare the register of the teacher and parent posts with the student posts, noting specific lexical and grammatical differences.',
      'Identify examples of graphological features specific to the social media format (hashtags, @mentions, character limits).',
    ],
    analysisQuestions: [
      'Analyse the ways in which the context of social media shapes the language choices of different users in this thread.',
      'How do the student posts differ from the adult posts in terms of lexis, grammar, and pragmatic function?',
      'Examine the role of emoji in this text. To what extent do they compensate for the absence of prosodic features in written language?',
      'Analyse this data in relation to Crystal\'s argument that internet language is a new linguistic medium.',
      'What does this thread reveal about the relationship between online register and social identity?',
    ],
    theoriesApplicable: [
      'Crystal -- Netspeak and the internet as a distinct linguistic medium',
      'Grice -- cooperative principle and flouting of maxims in informal online interaction',
      'Halliday -- field, tenor, and mode as determinants of register',
      'Thurlow -- digital discourse and computer-mediated communication',
      'Sociolinguistics of identity -- language as social positioning',
    ],
    markSchemePoints: [
      'Identification of internet-specific features: initialisms (omg, lmaooo, ngl, lol), letter elongation ("deaddddd"), capitalisation for emphasis (UNREAL, EVERYTHING)',
      'Comparison of register across user types: teacher uses formal standard English, students use informal digital vernacular',
      'Emoji analysis: pragmatic function of laughing/crying emoji as tonal modifier, compensating for lack of tone of voice',
      'Graphological features: hashtags for audience extension, @mentions for direct address within a public thread',
      'Discussion of Crystal\'s concept of asynchronous written interaction that exhibits properties of spoken language',
      'Identity construction: students perform peer solidarity and in-group membership through shared digital vernacular',
    ],
  },

  // WEN01 DS3: Workplace email exchange -- occupational register
  {
    id: 'wen01-ds3',
    title: 'Workplace Email Exchange: Occupational Register and Professional Discourse',
    unit: 'WEN01',
    dataType: 'written-text',
    context: 'An email exchange between three colleagues at a marketing agency. The exchange takes place over one working day and involves a line manager (Priya), a junior employee (Marcus), and an external client contact (Sandra). The emails concern a delayed project deliverable. Names have been changed.',
    data: `--- Email 1 ---
From: Priya Sharma (Senior Account Manager)
To: Marcus Webb (Junior Copywriter)
Subject: RE: Project Delta -- Copy Deadline
Time: 09:14

Marcus,

Just a quick flag before the client catch-up this afternoon -- the Project Delta copy was due on my desk by COB yesterday. I haven't received anything from you. Can you give me an updated ETA and a brief explanation of where we're at?

If there are blockers, flag them now so we can manage client expectations proactively.

Best,
Priya

--- Email 2 ---
From: Marcus Webb (Junior Copywriter)
To: Priya Sharma (Senior Account Manager)
Subject: RE: Project Delta -- Copy Deadline
Time: 09:47

Hi Priya,

Apologies for the delay -- completely on me. I hit some complications with the brand guidelines document (the version I was sent appears to be an older draft) which meant I needed to do a full rework of the tone section overnight. I'm currently at around 70% and am confident I can have a clean draft over to you by 14:00 today.

Happy to jump on a quick call before the client meeting if that's helpful.

Marcus

--- Email 3 ---
From: Priya Sharma (Senior Account Manager)
To: Sandra Okafor (Client, Delta Brands Ltd)
CC: Marcus Webb
Subject: Project Delta -- Update on Copy Deliverable
Time: 10:03

Dear Sandra,

I wanted to reach out with a brief update on the Project Delta copy. Due to a version discrepancy in the brand guidelines documentation received from your team, our copywriter has needed to make some revisions to ensure full alignment with your current brand standards. We are on track to have a polished draft ready for your review by end of business today.

We apologise for any inconvenience this may have caused and appreciate your patience. Please do not hesitate to contact me directly if you have any questions.

Warm regards,
Priya Sharma
Senior Account Manager | Apex Creative Agency`,
    annotationTasks: [
      'Identify all examples of occupational jargon and business-specific lexis, defining each term.',
      'Annotate the politeness strategies used in each email, distinguishing positive and negative politeness.',
      'Compare the tone and register of the internal emails (Priya-Marcus) with the external email (Priya-Sandra).',
      'Identify examples of face-threatening acts and analyse how they are mitigated.',
      'Annotate the discourse structure of each email: how do openings and closings signal register and relationship?',
    ],
    analysisQuestions: [
      'Analyse how the three writers adapt their register to reflect the different relationships and purposes of their emails.',
      'How is face managed in this email exchange? Refer to Brown and Levinson\'s politeness theory in your answer.',
      'Examine the use of occupational register in these emails. How does specialist lexis function in the workplace context?',
      'Analyse the power dynamics revealed through the language choices in this exchange.',
      'To what extent does the internal/external distinction shape the linguistic features of these emails?',
    ],
    theoriesApplicable: [
      'Brown and Levinson -- politeness theory, positive and negative face, face-threatening acts',
      'Goffman -- impression management and face work',
      'Halliday -- field, tenor, and mode in register analysis',
      'Fairclough -- critical discourse analysis and power in language',
      'Grice -- cooperative principle and how workplace communication hedges and qualifies',
    ],
    markSchemePoints: [
      'Occupational lexis: COB (close of business), ETA (estimated time of arrival), "deliverable", "blockers", "manage client expectations", "brand guidelines"',
      'Register shift between internal and external emails: internal is direct and functional; external is formal and face-saving',
      'Face-threatening acts: Priya requesting explanation from Marcus is mitigated by "just a quick flag" and hedged urgency',
      'Brown and Levinson: Priya to client uses positive politeness ("We appreciate your patience") and negative politeness (apology, hedging)',
      'Power encoded in discourse: Priya reframes Marcus\'s error as a "version discrepancy" in the client email -- protecting agency face',
      'Discourse structure: formal salutations/closings calibrated to relationship; internal uses first names and informal sign-off',
    ],
  },

  // WEN01 DS4: Interview transcript -- gender and language
  {
    id: 'wen01-ds4',
    title: 'Interview Transcript: Gender and Language in Interaction',
    unit: 'WEN01',
    dataType: 'spoken-transcript',
    context: 'A recorded job interview at a financial services firm. The interviewer (Morgan, female, senior manager) interviews a candidate (Jamie, male, recent graduate) for a junior analyst position. The transcript is lightly edited for readability. Key: (.) = micropause, (..) = pause, [laughs] = paralinguistic, [inaudible] = unclear section.',
    data: `[Transcript excerpt, approximately 15 minutes into interview]

Morgan: so tell me (..) um (..) what would you say is your greatest professional strength

Jamie: yeah so (..) I think definitely my (..) my analytical skills (..) I'm very data-driven
       I've worked with Python and SQL throughout my degree and I've always been quite (..)
       quite confident in turning large datasets into (..) into actionable insights

Morgan: mm (..) and can you give me a specific example of that

Jamie: yeah absolutely so (..) in my final year project I was working with (..)
       um (..) sales data from a retail client and I built a predictive model that (..)
       that improved their forecast accuracy by about thirty percent (..) which the client
       was really happy with

Morgan: that's impressive (..) and how did you handle it when the model didn't perform
        as expected initially (..) because I'm sure there were challenges

Jamie: [laughs] yeah there definitely were (..) um (..) I think the key thing was just (..)
       staying calm and (..) and being quite systematic about it (..) I went back to the
       data quality first (..) then checked the feature engineering (..) I suppose I was
       quite (..) quite stubborn about it [laughs]

Morgan: [laughs] that's a good quality to have in this role (..) resilience is really
        important here (..) um (..) so what draws you to financial services specifically

Jamie: yeah so (..) I've always been really interested in (..) in how markets work and (..)
       and I think there's something quite exciting about (..) the pace of the industry`,
    annotationTasks: [
      'Identify and annotate all hedging devices used by both speakers.',
      'Analyse the distribution of interruptions, overlaps, and minimal responses across the two speakers.',
      'Annotate examples of self-repair and disfluency, noting any patterns across speakers.',
      'Identify the questions asked by the interviewer and classify their type (open, closed, probing).',
      'Annotate any examples of language that could be analysed in terms of gender and interactional style.',
    ],
    analysisQuestions: [
      'Analyse the interactional features of this transcript, paying attention to how each speaker manages the conversation.',
      'To what extent does this data support or challenge Lakoff\'s theory of women\'s language?',
      'Analyse the power dynamics in this interview. How does the institutional context shape language use?',
      'Examine the use of hedging in this transcript. What functions does it serve for each speaker?',
      'Discuss what this transcript reveals about gender and language. How useful is the dominant/cooperative framework for analysing this data?',
    ],
    theoriesApplicable: [
      'Lakoff -- women\'s language features (hedging, tag questions, politeness)',
      'Tannen -- rapport talk vs report talk; difference model of gender and language',
      'Cameron -- performativity and the social construction of gender through language',
      'Grice -- cooperative principle and how interviewees manage face and information',
      'Fairclough -- institutional discourse and power in interaction',
    ],
    markSchemePoints: [
      'Hedging by both speakers: "I think", "quite", "sort of", "I suppose" -- not exclusively female as Lakoff suggests',
      'Institutional power: Morgan controls topic, controls question-asking, evaluates responses ("that\'s impressive")',
      'Discourse structure: adjacency pairs (question-answer) driven by institutional context, not gender',
      'Self-repair and disfluency distributed across both speakers -- challenges deficit/dominance models',
      'Discussion of Cameron\'s critique of Lakoff: language choices reflect context and power, not inherent gender difference',
      'Interviewee management of face: Jamie\'s laughter and hedging ("I suppose I was quite stubborn") soften self-promotion',
    ],
  },

  // ── WEN02: Language Diversity and Change ──────────────────────────────────

  // WEN02 DS1: 18th century newspaper extract -- historical language change
  {
    id: 'wen02-ds1',
    title: '18th Century Newspaper Extract: Historical Language Change',
    unit: 'WEN02',
    dataType: 'historical-text',
    context: 'An extract from a fictional broadsheet newspaper, The London Intelligencer, modelled on the conventions of 18th-century English journalism (circa 1745). The text is written for educational purposes to illustrate historical features of English. Students should analyse it as a representative historical text type.',
    data: `THE LONDON INTELLIGENCER
Being an Account of the most Material Occurrences and Transactions both Foreign and Domestick.

SATURDAY, the Fourteenth of OCTOBER, 1745.

To the READERS of this Paper.

THE Publisher of this Paper takes the Liberty to acquaint his Readers, that he hath lately receiv'd several Letters of Complaint concerning the late Disposition of certain Merchants of this City, who are accus'd of practising most vile and injurious Deceits upon the Publick, in the Matter of the Sale of Woollen Goods at the Exchange.

It is reported, upon credible Authority, that these same Merchants have, for a Period of some Months past, been selling Goods of inferior Quality under false Pretence of their being of the finest Manufacture; and that divers Persons of Rank and Substance have been thus most shamefully impos'd upon.

The Publisher doth assure his Readers that he shall pursue this Matter with the utmost Diligence, and shall spare neither Labour nor Expence in the Discharge of his Duty to the Publick Interest. He calleth upon all Persons who have suffer'd by these Practices to communicate their Grievances to this Office, where they shall receive a most candid and impartial Hearing.

Given under our Hand this Day.
THE PUBLISHER.`,
    annotationTasks: [
      'Identify all archaic verb forms and annotate their modern equivalents.',
      'Highlight all examples of 18th-century spelling conventions that differ from modern standard spelling.',
      'Annotate the capitalisation conventions and explain how they differ from contemporary practice.',
      'Identify examples of grammatical constructions that are no longer standard in modern English.',
      'Annotate the discourse structure of the extract and compare it to a modern newspaper editorial.',
    ],
    analysisQuestions: [
      'Analyse the key ways in which the language of this 18th-century text differs from contemporary written English.',
      'What does this extract reveal about the process of language change? Use appropriate linguistic terminology in your answer.',
      'Analyse the grammatical features of this text. How do verb forms, pronoun use, and sentence structure reflect the language of the period?',
      'How does the vocabulary of this text reflect the historical, social, and cultural context of 18th-century England?',
      'To what extent can the linguistic features of this text be explained by Aitchison\'s models of language change?',
    ],
    theoriesApplicable: [
      'Aitchison -- language change models: chaining, blending, semantic change',
      'Great Vowel Shift and its legacy in Early Modern English spelling',
      'Standardisation -- the role of print culture and prescriptivism in 18th-century England',
      'Lexical borrowing and the expansion of English vocabulary in the 18th century',
      'Corpus linguistics approaches to historical language change',
    ],
    markSchemePoints: [
      'Archaic verb morphology: "hath" (has), "doth" (does), "calleth" (calls) -- third-person singular "-th" suffix',
      'Archaic second-person forms absent here, but publisher\'s address uses formal "he" self-reference',
      'Spelling conventions: "receiv\'d", "accus\'d", "impos\'d" (contracted past participle), "Publick", "Domestick" (archaic "-ick" suffix)',
      'Capitalisation: nouns systematically capitalised ("Merchants", "Exchange", "Publisher") -- influence of German printing conventions',
      'Formal, periodic sentence structure; lengthy subordinate clauses; passive constructions for authority',
      'Semantic change discussion: "Divers" (several/various) now archaic; "Substance" meaning wealth/social standing',
    ],
  },

  // WEN02 DS2: 1950s advertisement -- lexical change
  {
    id: 'wen02-ds2',
    title: '1950s Advertisement: Lexical Change and Shifting Social Values',
    unit: 'WEN02',
    dataType: 'historical-text',
    context: 'A fictional print advertisement modelled on 1950s British consumer advertising conventions, created for educational purposes. It advertises a domestic appliance (an electric washing machine) and is aimed at a female domestic audience. Students should analyse it as representative of mid-20th-century advertising language.',
    data: `MARVEL-WASH ELECTRIC WASHER
The Modern Housewife's Greatest Helper!

Are YOU still slaving over the washtub? Then it is high time you discovered the MARVEL-WASH ELECTRIC WASHER -- the miracle of modern science that will transform your Monday washday into a genuine pleasure!

Every careful housewife knows that cleanliness is the foundation of a happy, healthy home. With MARVEL-WASH, you need never again worry about stubborn collars and grubby cuffs -- our patented Gentle-Action drum tackles even the most troublesome fabrics with ease and efficiency.

Your husband will be simply delighted to see his shirts emerge sparkling white and fresh every single time. And YOU will have so much more time and energy for the truly important things in life -- keeping a beautiful home, preparing nourishing meals, and enjoying quality time with your children.

MARVEL-WASH is available at all good electrical retailers.
Ask your husband today!

MARVEL-WASH -- Because Every Home Deserves the Best.
[Recommended price: 47 guineas]`,
    annotationTasks: [
      'Identify all lexical items that carry dated or archaic connotations in a contemporary context.',
      'Annotate the ideological assumptions about gender encoded in the vocabulary and discourse.',
      'Identify all direct address forms and analyse their pragmatic function.',
      'Annotate examples of persuasive language techniques and evaluate their effectiveness for the target audience.',
      'Mark any lexical fields and analyse what they reveal about the values of the period.',
    ],
    analysisQuestions: [
      'Analyse the ways in which the language of this advertisement reflects the social values and gender ideologies of the 1950s.',
      'Examine the lexical change evident when comparing this text\'s language with contemporary advertising. What has changed and why?',
      'How does this text construct the identity of its target audience through language? What assumptions does it make?',
      'Analyse the persuasive techniques used in this advertisement. How have advertising discourse conventions changed since the 1950s?',
      'What does this advertisement reveal about the relationship between language, power, and ideology?',
    ],
    theoriesApplicable: [
      'Fairclough -- critical discourse analysis and the ideological function of language',
      'Semantic change -- amelioration, pejoration, broadening, and narrowing of meaning',
      'Fowler -- the language of news and advertising as ideologically loaded',
      'Lakoff -- language and gender; the construction of femininity through discourse',
      'Sapir-Whorf hypothesis -- language reflects and shapes cultural assumptions',
    ],
    markSchemePoints: [
      'Lexical change: "housewife" has shifted in connotation; "slaving", "Monday washday", "washtub" are now archaic or dated',
      'Gender ideology encoded in lexis: women defined by domestic role ("careful housewife", "keeping a beautiful home")',
      'Presupposition: "your husband" presupposes a married, heterosexual, male-breadwinner household',
      'Persuasive techniques: direct address, rhetorical question, imperative ("Ask your husband today!")',
      'Lexical field of science and modernity: "miracle of modern science", "patented", "electric" -- appeals to technological progress',
      'Fairclough: advertising naturalises ideological assumptions; the text presents gender norms as common sense',
    ],
  },

  // WEN02 DS3: Contemporary blog post vs 1980s magazine -- comparative
  {
    id: 'wen02-ds3',
    title: 'Comparative Texts: 1980s Magazine Column vs Contemporary Blog Post',
    unit: 'WEN02',
    dataType: 'written-text',
    context: 'Two texts on a similar topic (personal finance advice for young adults) written approximately forty years apart. Text A is modelled on a 1980s consumer magazine column; Text B is modelled on a contemporary personal finance blog post. Both texts are fictional and created for educational analysis. Students should compare the language of both texts.',
    data: `--- TEXT A: "Making Your Money Work" (fictional, modelled on 1980s magazine style) ---

For the young professional entering the world of work for the first time, the question of managing one\'s personal finances can seem a daunting prospect. In an era of high interest rates and considerable economic uncertainty, it is more important than ever that the young person approaching financial independence should do so with both prudence and foresight.

The sensible course of action is, first and foremost, to establish a regular savings habit. One should aim to set aside no less than ten per cent of one\'s net monthly income before all other expenditure. This discipline, once established, will stand one in good stead throughout one\'s working life.

Furthermore, one must exercise considerable caution when considering the taking on of credit. Hire purchase agreements and personal loans, while occasionally necessary, should be approached with the utmost circumspection.

--- TEXT B: "I\'m 22 and Finally Got My Money Sorted -- Here\'s What Actually Helped" (fictional, modelled on contemporary blog style) ---

OK so I\'m not going to pretend I had it together financially when I first started working. Honestly? Complete disaster. I had no idea what a pension was, I was spending my entire paycheck by the 20th of every month, and I had about 47p in savings. Relatable? I thought so.

But here\'s the thing -- sorting your finances out doesn\'t have to be complicated or boring. These are the three things that genuinely changed everything for me:

1. The 50/30/20 rule (seriously, just Google it)
2. Automating my savings so I literally never see the money
3. Cutting one big thing, not a hundred tiny things

You don\'t need to be a finance bro to get this stuff right. You just need to start somewhere. Even if that somewhere is this blog post at 11pm while you\'re eating cereal for dinner.`,
    annotationTasks: [
      'Create a systematic comparison table of lexical features across both texts.',
      'Annotate the pronoun use in each text and explain how it constructs the relationship between writer and reader.',
      'Identify the discourse structure of each text and compare how information is organised.',
      'Annotate the grammatical features of each text, focusing on sentence length, complexity, and subordination.',
      'Identify examples of semantic change by comparing vocabulary choices across the two texts for the same concepts.',
    ],
    analysisQuestions: [
      'Compare and contrast the language features of these two texts, analysing how context and mode have shaped each writer\'s choices.',
      'How do the two texts construct their relationship with the reader through language? Compare the use of pronouns, address, and tone.',
      'Analyse the changes in written English evident when comparing these two texts. What linguistic trends do they illustrate?',
      'What do these texts reveal about how the conventions of advice writing have changed over forty years?',
      'Discuss the extent to which these texts support or challenge the view that informal language is increasingly acceptable in written discourse.',
    ],
    theoriesApplicable: [
      'Halliday -- register: field, tenor, and mode differences across the two texts',
      'Crystal -- informalization of written language and the influence of digital culture',
      'Fairclough -- conversationalisation of public discourse',
      'Leech and Short -- stylistics and the analysis of prose style',
      'Bernstein -- restricted and elaborated codes in relation to audience and context',
    ],
    markSchemePoints: [
      'Text A: formal register, third-person address ("one"), complex subordinate clauses, Latinate vocabulary ("circumspection", "prudence", "foresight")',
      'Text B: informal register, second-person direct address ("you"), fragmented syntax, colloquialisms ("finance bro", "sorted"), parenthetical asides',
      'Pronoun shift: "one" (Text A) vs "I" and "you" (Text B) -- shift from impersonal authority to personal experience and peer address',
      'Discourse structure: Text A uses continuous prose with discourse markers ("Furthermore", "first and foremost"); Text B uses numbered list and conversational fragments',
      'Fairclough\'s "conversationalisation": Text B exemplifies the democratisation of expert advice through informal register',
      'Crystal: digital writing conventions (numbered lists, parenthetical humour, direct address) influence Text B even in a written format',
    ],
  },

  // ── WEN04: Language Investigation ────────────────────────────────────────

  // WEN04 DS1: Focus group transcript -- qualitative data
  {
    id: 'wen04-ds1',
    title: 'Focus Group Transcript: Qualitative Data on Language Attitudes',
    unit: 'WEN04',
    dataType: 'spoken-transcript',
    context: 'A focus group transcript from a small-scale language attitudes study conducted with six participants (aged 17-18) from a secondary school sixth form. The moderator (M) asked participants about their attitudes to accent and Standard English. Participants are identified as P1-P6. The study is fictional and created for educational purposes. Key: (.) = micropause, [laughs] = paralinguistic, [inaudible] = unclear.',
    data: `[Focus Group -- Language Attitudes Study -- Session 2, approx. 35 minutes in]

M: so what I want to ask now is (..) do you think the way you speak affects how people see you

P2: definitely (..) like (..) I think people make assumptions straight away
P5: yeah one hundred percent (..) my gran always says I sound common when I drop my aitches
P1: but is that her problem or yours [laughs]
P5: [laughs] both probably
P3: I think it depends where you are though (..) like at home it doesn't matter (..)
    but I know that when I go for like jobs and stuff I speak differently
M: can you say more about that
P3: yeah like (..) I switch (..) I don't even think about it now (..) I just (..)
    I make my voice a bit more (..) I don't know (..) posher I suppose
P4: [laughs] code-switching
P3: is that what it's called
P4: yeah we did it in English (..) like you change how you talk for different situations
P6: I do that too (..) but I feel a bit weird about it (..) like am I being fake
P2: I don't think so (..) I think everyone does it
P1: yeah but some people don't have to do it as much (..) like if you already speak
    in a way that sounds (..) I don't know (..) educated (..) you've got an advantage
M: that's interesting (..) does anyone want to respond to that
P5: I think that's true (..) but it's not fair (..) like why should an accent mean
    you're less intelligent (..) it's just geography isn't it

[Transcript continues]`,
    annotationTasks: [
      'Identify and annotate all instances of hedging language and explain their pragmatic function.',
      'Annotate the floor management across the transcript: who holds the floor longest and how is it transferred?',
      'Identify examples of lexical choices that reveal the participants\' metalinguistic awareness.',
      'Mark all instances where participants express attitudes (positive, negative, or ambivalent) to accent and dialect.',
      'Annotate the moderator\'s interventions and analyse their effect on the direction of the discussion.',
    ],
    analysisQuestions: [
      'Analyse this focus group transcript as qualitative data for a language attitudes investigation. What are its strengths and limitations as a data source?',
      'What attitudes to accent and Standard English are revealed in this transcript? Refer to specific examples.',
      'Analyse the interactional features of this focus group. How do the participants collaboratively construct meaning?',
      'How useful is the concept of code-switching for understanding the language behaviour described by participants in this transcript?',
      'Evaluate the methodological choices reflected in this transcript. What questions does it raise about the reliability and validity of focus group data?',
    ],
    theoriesApplicable: [
      'Labov -- social stratification and the prestige of standard forms',
      'Trudgill -- covert prestige and the value of non-standard varieties',
      'Myers-Scotton -- code-switching and the markedness model',
      'Milroy and Milroy -- standard language ideology and its social consequences',
      'Matched Guise Technique -- language attitudes research methodology',
    ],
    markSchemePoints: [
      'Qualitative data strengths: rich, naturalistic data; reveals complex attitudes and metalinguistic awareness; generates hypotheses',
      'Limitations: small sample (n=6), observer\'s paradox, social desirability bias in group setting, non-generalisable',
      'Attitudes revealed: standard/prestige accent advantageous (P1, P5); code-switching as pragmatic adaptation (P3, P4); perceived unfairness of accent prejudice (P5)',
      'Code-switching discussed by participants themselves -- demonstrates metalinguistic awareness and relevance of concept to lived experience',
      'Hedging widespread: "I think", "I suppose", "I don\'t know" -- tentative speech reflecting sensitive topic and peer audience',
      'Moderator questions are open ("can you say more about that") to elicit elaboration without leading',
    ],
  },

  // WEN04 DS2: Questionnaire results summary -- quantitative data
  {
    id: 'wen04-ds2',
    title: 'Questionnaire Results Summary: Quantitative Data on Language Use',
    unit: 'WEN04',
    dataType: 'survey-data',
    context: 'Summary results from a fictional questionnaire-based language investigation conducted by an A-level student. The study examined the relationship between age and attitudes to text message abbreviations among 40 participants (20 aged 15-25, 20 aged 45-65). The data below represents a summary of responses to key questions. Created for educational purposes.',
    data: `INVESTIGATION TITLE: "Do attitudes to text message abbreviations vary by age?"
METHODOLOGY: Online questionnaire, 40 participants (n=20 per age group)
DATA COLLECTION: April 2025

--- QUESTION 1: "Do you use abbreviations when sending text messages?" ---
Age Group 15-25: Yes = 18 (90%) | Sometimes = 2 (10%) | No = 0 (0%)
Age Group 45-65: Yes = 6 (30%) | Sometimes = 10 (50%) | No = 4 (20%)

--- QUESTION 2: "Rate your comfort reading abbreviations in messages" ---
Scale: 1 (Very uncomfortable) to 5 (Very comfortable)
Age Group 15-25: Mean = 4.7 | Median = 5 | Mode = 5
Age Group 45-65: Mean = 2.9 | Median = 3 | Mode = 2

--- QUESTION 3: "Do you think using abbreviations is unprofessional?" ---
Age Group 15-25: Strongly Agree = 1 | Agree = 2 | Neutral = 5 | Disagree = 7 | Strongly Disagree = 5
Age Group 45-65: Strongly Agree = 7 | Agree = 9 | Neutral = 3 | Disagree = 1 | Strongly Disagree = 0

--- QUESTION 4: "List three abbreviations you use or recognise" (open-ended) ---
Age Group 15-25 most common responses: lol, omg, ngl, tbh, imo, lmk, brb, smh, irl, idk
Age Group 45-65 most common responses: lol, btw, asap, fyi, omg, (many left blank)

--- RESEARCHER NOTES ---
Limitations noted: convenience sample via social media may skew toward tech-comfortable respondents;
self-reported data may not reflect actual usage; binary age grouping may obscure intra-group variation.`,
    annotationTasks: [
      'Identify the key patterns and trends in the quantitative data across all four questions.',
      'Annotate potential sources of bias in the methodology and explain how each might affect the data.',
      'Calculate and annotate the difference in mean comfort scores between age groups and comment on its significance.',
      'Identify the limitations of quantitative data for this type of language investigation.',
      'Annotate the open-ended question data (Q4) and explain why it produces qualitatively different information from the closed questions.',
    ],
    analysisQuestions: [
      'Analyse this questionnaire data as evidence for or against the hypothesis that attitudes to text abbreviations vary by age.',
      'Evaluate the methodology of this investigation. What are the strengths and limitations of using a questionnaire to investigate language attitudes?',
      'What does this data reveal about generational differences in language use and attitudes? Refer to specific figures in your answer.',
      'How reliable and valid is this data? Consider sample size, sampling method, and question design in your answer.',
      'How might this quantitative data be complemented by qualitative data collection? What additional insights might qualitative methods provide?',
    ],
    theoriesApplicable: [
      'Crystal -- digital language and generational difference in technology adoption',
      'Trudgill and Chambers -- apparent-time hypothesis and age-grading in language variation',
      'Research methodology -- reliability, validity, triangulation in language investigation',
      'Labov -- language change from below and above; community norms and prestige',
      'Matched Guise Technique -- comparison with attitudinal research using other methods',
    ],
    markSchemePoints: [
      'Key finding: significant generational difference -- 90% of 15-25 year olds use abbreviations vs 30% of 45-65 year olds',
      'Attitude gap: Q3 shows 80% of older group find abbreviations unprofessional vs 15% of younger group',
      'Comfort score gap: mean difference of 1.8 points on 5-point scale is substantial and statistically meaningful for this sample size',
      'Methodological limitations: convenience sampling, self-report bias, binary age grouping, small n=40 limits generalisability',
      'Q4 (open-ended) reveals depth: younger group uses more varied, recent initialisms; older group recognises fewer and more established abbreviations',
      'Triangulation discussion: qualitative follow-up (e.g., interview or focus group) would contextualise attitudes and reveal reasons behind quantitative patterns',
    ],
  },

  // WEN04 DS3: Mixed-methods sample data
  {
    id: 'wen04-ds3',
    title: 'Mixed-Methods Sample: Combining Qualitative and Quantitative Data',
    unit: 'WEN04',
    dataType: 'survey-data',
    context: 'A fictional mixed-methods language investigation sample combining quantitative corpus data with a qualitative interview excerpt. The investigation examines the use of hedging language in male and female student academic writing. The quantitative data is from a small corpus of 10 essays (5 male, 5 female students, all aged 17). The qualitative data is a short interview extract with one participant. Created for educational purposes.',
    data: `--- QUANTITATIVE DATA: Hedging frequency in student academic essays ---
Total corpus: 10 essays (5 male-authored, 5 female-authored), 1,000 words each = 10,000 words total

Hedging devices identified and counted per 1,000 words:
                        Male authors    Female authors
Modal verbs (may/might/could):  4.2         6.8
Approximators (about/around):   1.1         2.3
Reporting verbs (suggests/implies): 2.4     3.9
First-person distancing (it could be argued): 0.8  1.6
Total hedges per 1,000 words:   8.5         14.6

--- STATISTICAL NOTE ---
These figures are from a very small corpus (n=5 per group) and should be treated as indicative only.
No inferential statistics have been applied. Results cannot be generalised to the wider population.

--- QUALITATIVE DATA: Interview extract with Participant F3 (female, aged 17) ---

Interviewer: when you\'re writing an essay do you ever think about how certain you sound?
F3: yeah (..) definitely (..) I think I use a lot of "might" and "could" (..)
    because I don\'t want to sound (..) I don\'t know (..) arrogant or like I\'m
    saying I\'m definitely right when (..) when maybe I\'m not
Interviewer: is that something you were taught to do?
F3: a bit (..) my teacher always says to hedge your claims (..) but I think I
    probably do it more than I need to (..) like (..) I sometimes read my essays
    back and think I sound (..) unsure (..) when I\'m actually quite confident`,
    annotationTasks: [
      'Annotate the quantitative data table, identifying the key patterns and what they suggest about gender and hedging.',
      'Identify the limitations of this corpus data and explain how each limitation affects the conclusions that can be drawn.',
      'Annotate the qualitative interview extract, identifying themes related to hedging, confidence, and gender socialisation.',
      'Analyse how the qualitative data adds to, challenges, or contextualises the quantitative findings.',
      'Identify the methodological strengths of the mixed-methods approach evident in this sample.',
    ],
    analysisQuestions: [
      'Analyse this mixed-methods data, discussing what the combination of quantitative and qualitative evidence reveals about gender and hedging in academic writing.',
      'Evaluate the reliability and validity of the quantitative corpus data in this investigation. What are its key limitations?',
      'How does the qualitative interview data contextualise or complicate the quantitative findings? Refer to specific examples.',
      'To what extent does this data support or challenge the view that female writers hedge more than male writers?',
      'Discuss the advantages and disadvantages of a mixed-methods approach for this type of language investigation.',
    ],
    theoriesApplicable: [
      'Lakoff -- women\'s language and hedging as a feature associated with female speakers',
      'Cameron -- social constructionist critique: hedging as learned academic behaviour, not inherent gender difference',
      'Holmes -- gender and politeness; hedging as positive politeness strategy',
      'Hyland -- hedging in academic discourse as epistemic marker, not gender marker',
      'Research methodology -- triangulation, corpus linguistics, mixed-methods design in language investigation',
    ],
    markSchemePoints: [
      'Quantitative finding: female authors show higher hedging frequency across all categories (14.6 vs 8.5 per 1,000 words)',
      'Critical caveat: n=5 per group is too small for reliable conclusions -- results are indicative only; risk of over-generalisation',
      'Qualitative insight: F3 attributes hedging to taught academic convention AND to anxiety about appearing arrogant -- not simply gender identity',
      'Triangulation: interview complicates the quantitative pattern -- hedging may reflect academic socialisation, not an inherent gender trait',
      'Cameron\'s critique applicable: if hedging is taught behaviour in academic contexts, the gender difference may reflect differential socialisation, not language deficit',
      'Mixed-methods strength: quantitative data identifies a pattern; qualitative data provides possible explanations and participant perspective',
    ],
  },
];
