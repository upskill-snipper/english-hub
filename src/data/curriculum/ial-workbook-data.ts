// =============================================================================
// IAL (Edexcel) Years 12-13 Workbook & Homework Data
// Units: WEN01 Language & Context | WEN02 Language Change
//        WEN03 Crafting Language  | WEN04 Language Investigation
// =============================================================================

import type { WorkbookExercise, HomeworkTask } from './y8-workbook-data';

// =============================================================================
// WORKBOOK EXERCISES (24 total)
// =============================================================================

export const ialWorkbookExercises: WorkbookExercise[] = [

  // ---------------------------------------------------------------------------
  // Unit 1: Language & Context (WEN01) -- 15 exercises
  // ---------------------------------------------------------------------------
  {
    id: 'ial-wb-ex-01',
    title: 'Register and Audience in Political Speeches',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Read the two political speech extracts provided (Churchill, 1940; Blair, 1997).</p>' +
      '<ol>' +
      '<li>Identify and comment on three lexical or grammatical features that signal formal register in each extract. (6 marks)</li>' +
      '<li>How does each speaker position their audience through pronoun use and direct address? (4 marks)</li>' +
      '<li>Using appropriate linguistic frameworks, analyse how context shapes the language choices in both speeches. (10 marks)</li>' +
      '</ol>' +
      '<p><em>Use the GAIL framework (Grammar, Audience, Idiom, Lexis) to structure your response.</em></p>',
    modelAnswer:
      'Churchill employs elevated lexis ("we shall fight on the beaches") alongside anaphora to create rhetorical momentum, signalling a formal oratorical register suited to a wartime address. Grammatically, declarative sentences of command carry modal certainty. ' +
      'Blair shifts to a more conversational register through shorter sentences and colloquial phrasing, reflecting a post-1997 political culture favouring accessibility. Both speakers use inclusive first-person plural ("we") to construct solidarity with their audience. ' +
      'Contextually, Churchill\'s address is shaped by existential threat: hyperbolic lexis and elevated syntax are pragmatically appropriate when rallying a nation under siege. Blair\'s post-election context demands optimism and consensus, producing warmer, less combative prosody. ' +
      'A linguistic analysis should note the role of speech act theory: Churchill performs directives and commissives, Blair predominantly performs expressives and representatives. Register is therefore not merely stylistic but is determined by social function and audience expectation.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['register', 'audience', 'lexis', 'grammar', 'context', 'pragmatics', 'anaphora', 'pronoun use'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-02',
    title: 'Sociolects and Identity in Spoken Discourse',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Read the three transcripts of informal conversation between peer groups (Transcript A: teenagers, 1998; Transcript B: teenagers, 2018; Transcript C: workplace colleagues, 2018).</p>' +
      '<ol>' +
      '<li>Define "sociolect" and identify two sociolectal features in Transcript A. (4 marks)</li>' +
      '<li>Compare the sociolectal features of Transcripts A and B. What changes in youth language do they reveal? (8 marks)</li>' +
      '<li>Evaluate the claim that sociolects primarily function to reinforce group identity rather than to communicate information. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'A sociolect is a variety of language used by a particular social group, defined by shared characteristics such as age, occupation, or subculture. In Transcript A, features include slang lexis ("wicked", "bare") and non-standard syntax typical of late 1990s youth speech. ' +
      'Comparing A and B reveals lexical change (new slang, influence of social media and AAVE borrowings in 2018 data) alongside continuing grammatical features such as discourse markers and hedges. This illustrates how sociolects are dynamic, absorbing new cultural influences while preserving identity-marking functions. ' +
      'The evaluative question invites critical engagement: while Halliday\'s social semiotic model supports the identity-construction function of sociolect, it would be reductive to deny its referential role. Sociolects encode shared cultural knowledge efficiently (Grice\'s maxim of manner). However, the marked features -- slang, non-standard grammar -- are often redundant from a purely informational standpoint, supporting the identity argument. A strong answer acknowledges both functions and uses Transcript C as a counterexample where workplace sociolect serves professional clarity.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['sociolect', 'identity', 'slang', 'youth language', 'discourse', 'Halliday', 'AAVE', 'social media'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO4'],
  },

  {
    id: 'ial-wb-ex-03',
    title: 'Evaluating Deficit and Difference Models of Gender Language',
    termUnit: 'WEN01: Language and Context',
    type: 'evaluation',
    instructions:
      '<p>Read the short summary of Robin Lakoff\'s "Language and Woman\'s Place" (1975) and the counter-arguments from Deborah Cameron\'s "The Myth of Mars and Venus" (2007).</p>' +
      '<ol>' +
      '<li>Outline the key claims of Lakoff\'s deficit model. (4 marks)</li>' +
      '<li>Explain how the difference model (Tannen) challenges the deficit model. (6 marks)</li>' +
      '<li>Evaluate how far either model adequately accounts for gender variation in contemporary British English. Use linguistic evidence in your answer. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Lakoff argues that women\'s language is characterised by features reflecting social powerlessness: hedges ("sort of", "I think"), tag questions, super-polite forms, and empty adjectives. This deficit model frames women\'s language as deficient compared to a male norm. ' +
      'Tannen\'s difference model reframes these features as reflecting different communicative goals: women use language for "rapport talk" (maintaining relationships) while men use it for "report talk" (conveying information). Neither style is inherently inferior. ' +
      'Evaluation should consider: (1) both models risk essentialism by treating gender as binary and fixed; (2) Cameron\'s critique highlights that observed differences are context-dependent and often overstated; (3) corpus research (Coates, Holmes) shows considerable overlap between male and female speech; (4) contemporary British English is shaped by intersecting identity factors -- class, ethnicity, sexuality -- that neither model sufficiently addresses. A strong evaluation acknowledges the historical value of both models while arguing for a more nuanced, intersectional approach.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['Lakoff', 'Tannen', 'Cameron', 'deficit model', 'difference model', 'gender', 'tag questions', 'hedges', 'corpus'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3', 'WEN01.AO4'],
  },

  {
    id: 'ial-wb-ex-04',
    title: 'Evaluating Power in Institutional Discourse',
    termUnit: 'WEN01: Language and Context',
    type: 'evaluation',
    instructions:
      '<p>Read the two medical consultation transcripts (GP with patient). One is from 1975; one is from 2020.</p>' +
      '<ol>' +
      '<li>Identify features of asymmetrical power in the 1975 transcript. Refer to specific linguistic evidence. (6 marks)</li>' +
      '<li>How has the distribution of interactional power shifted in the 2020 transcript? (6 marks)</li>' +
      '<li>Evaluate the view that institutional discourse always reflects and reproduces existing social hierarchies. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The 1975 transcript exhibits asymmetrical power through: the GP\'s use of minimal response and topic control (initiating all topic shifts); use of technical register inaccessible to the patient; and the patient\'s repeated back-channel responses and deference markers. Fairclough\'s notion of discourse as social practice is useful here. ' +
      'By 2020, features of mitigation have increased: the GP uses hedged directives ("I\'d suggest..."), invites patient opinion, and uses shared naming. These reflect a cultural shift toward patient-centred care and shared decision-making. ' +
      'Evaluation of the claim that institutional discourse always reproduces hierarchy: this is broadly supported by CDA (Critical Discourse Analysis -- Fairclough, van Dijk), which shows that unequal access to institutional language reproduces social inequality. However, the diachronic comparison above complicates "always" -- discourse can and does change as power relations shift. Furthermore, Goffman\'s concept of face-work shows that institutional participants negotiate rather than simply accept power asymmetries. A nuanced evaluation avoids determinism.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['institutional discourse', 'power', 'CDA', 'Fairclough', 'asymmetry', 'topic control', 'face-work', 'Goffman'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-05',
    title: 'Comparing Representation of Class in Tabloid and Broadsheet Press',
    termUnit: 'WEN01: Language and Context',
    type: 'comparison',
    instructions:
      '<p>Read the two newspaper articles covering the same industrial strike (one from a tabloid, one from a broadsheet).</p>' +
      '<ol>' +
      '<li>Analyse the lexical and syntactic choices used to represent the striking workers in each article. (10 marks)</li>' +
      '<li>Compare how grammatical structure and nominalisations are used to frame agency differently in each text. (6 marks)</li>' +
      '<li>What do the differences reveal about the ideological positions of each publication? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The tabloid uses emotive lexis ("chaos", "held to ransom") and nominalisation to suppress worker agency (e.g., "disruption caused by the strike" rather than "workers disrupted services"), constructing strikers as a threat. Short, punchy sentences maximise impact. ' +
      'The broadsheet employs more neutral reporting verbs, longer attributive clauses, and provides contextual detail about pay conditions. Agency is more clearly assigned -- workers are grammatical subjects of verbs that describe deliberate choice ("workers voted", "unions demanded"). ' +
      'Comparative analysis should use transitivity (Halliday\'s systemic functional grammar) to show how participants are constructed as actors or recipients. Nominalisation in the tabloid removes human agency and masks causation. ' +
      'Ideologically, the tabloid\'s framing positions it as aligned with managerial/establishment interests; the broadsheet\'s framing (though not uncritical) allows greater space for contextualised judgement. Van Dijk\'s ideological square is a useful analytical framework.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['tabloid', 'broadsheet', 'transitivity', 'nominalisation', 'agency', 'ideology', 'Halliday', 'van Dijk', 'class'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06',
    title: 'Analysing Multimodal Advertising Language',
    termUnit: 'WEN01: Language and Context',
    type: 'analysis',
    instructions:
      '<p>Study the two full-page magazine advertisements provided (a luxury car brand and a charity appeal).</p>' +
      '<ol>' +
      '<li>Analyse the linguistic strategies each advertisement uses to address its target audience. (8 marks)</li>' +
      '<li>How does each advertisement use imperative mood, second-person address, and presupposition to position the reader? (8 marks)</li>' +
      '<li>What does a comparison of the two texts reveal about how advertising language constructs consumer identity? (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The car advertisement employs lexis of aspiration and exclusivity ("crafted", "engineered for those who demand more"), second-person address positioning the reader as a discerning individual, and presupposition that the reader already belongs to an elite consumer group. ' +
      'The charity advertisement uses a direct imperative ("Act now") alongside emotive noun phrases ("desperate families") and statistics to construct urgency and moral obligation. Second-person address here creates personal responsibility. ' +
      'Both texts use presupposition as a powerful implicit framing device: the car advertisement presupposes the reader values luxury; the charity advertisement presupposes the reader has the means and moral inclination to give. ' +
      'The comparison reveals how advertising discourse constructs consumer identity: it does not merely reflect pre-existing identities but actively interpellates (Althusser) readers into subject positions. The luxury advertisement produces an identity of aspiration and distinction; the charity advertisement produces an identity of moral agency. This demonstrates that advertising language is fundamentally ideological.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['advertising', 'imperative', 'presupposition', 'second-person address', 'interpellation', 'Althusser', 'consumer identity', 'multimodal'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06b',
    title: 'Phonological Features of Spoken Interaction',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Read the following transcript of a teenager explaining weekend plans to a friend:</p>' +
      '<p><em>"Yeah so like I was gonna go down the shops innit but me mum was like nah you gotta stay in and revise cos exams are comin up yeah and I was proper annoyed like"</em></p>' +
      '<ol>' +
      '<li>Identify three phonological features present in this transcript (e.g. elision, assimilation, glottal stops). (6 marks)</li>' +
      '<li>For each feature, provide the specific example and explain how it reflects the speaker\'s social context. (6 marks)</li>' +
      '<li>Comment on how these phonological choices contribute to the speaker\'s construction of identity. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Elision is evident in "gonna" (going to) and "gotta" (got to), where unstressed syllables are dropped, reflecting informal register typical of casual peer-to-peer conversation. ' +
      'The use of "comin" shows g-dropping — the omission of the final /g/ in the present participle — a well-documented sociolinguistic variable associated with informal speech. ' +
      'The tag "innit" functions as an invariant tag question replacing standard forms, strongly associated with Multicultural London English (MLE). ' +
      'These phonological choices collectively construct an identity rooted in youth culture and informality, signalling in-group membership with peers rather than conformity to prestige norms.',
    marks: 20,
    difficulty: 'foundation',
    keywords: ['elision', 'g-dropping', 'glottal stop', 'phonology', 'sociolect', 'MLE', 'connected speech'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2'],
  },

  {
    id: 'ial-wb-ex-06c',
    title: 'Prosodic Features and Pragmatic Meaning',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Study the following exchange between a teacher and student:</p>' +
      '<p><em>Teacher: "So (.) you\'re telling me (.) that the dog (1.0) ate your homework"<br/>Student: "yeah (.) it DID (.) honestly miss"</em></p>' +
      '<ol>' +
      '<li>Identify the prosodic and paralinguistic features indicated by the transcription conventions. (4 marks)</li>' +
      '<li>Analyse how stress, intonation, and pausing contribute to meaning. (8 marks)</li>' +
      '<li>Discuss the power dynamics revealed through these features. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The teacher\'s micropauses (.) between clauses create deliberate, measured delivery conveying scepticism. The longer pause (1.0) before "ate your homework" adds dramatic emphasis implying disbelief. ' +
      'The student\'s emphatic stress on "DID" (capitalisation) is a prosodic strategy asserting truthfulness — a positive polarity marker countering implied doubt. The address term "miss" acknowledges institutional power asymmetry as a politeness strategy. ' +
      'The exchange demonstrates how prosodic features encode power: the teacher\'s controlled, paused delivery asserts authority, while the student\'s emphatic stress attempts to resist the subordinate position. The micropause before "honestly" may paradoxically undermine the claim of honesty.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['prosody', 'stress', 'intonation', 'micropause', 'power', 'paralinguistic', 'pragmatics'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06d',
    title: 'Lexical and Semantic Field Analysis in Political Rhetoric',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Read the following extract from a political speech:</p>' +
      '<p><em>"We stand together at a crossroads. The path ahead demands courage, sacrifice, and unwavering resolve. Our nation has weathered storms before, and we will not be broken by the tempest that now threatens our shores. We are the shield that guards our children\'s future."</em></p>' +
      '<ol>' +
      '<li>Identify two distinct semantic fields operating in this extract. (4 marks)</li>' +
      '<li>For each field, list at least three lexical items belonging to it. (6 marks)</li>' +
      '<li>Analyse how these semantic fields work together to construct a particular message and position the audience. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Two dominant semantic fields: warfare/conflict ("courage", "sacrifice", "resolve", "shield", "guards") and weather/nature ("weathered storms", "tempest", "shores", "crossroads", "path"). ' +
      'The warfare lexis frames the political situation as a battle requiring military virtues. The weather lexis naturalises the crisis — storms are inevitable but temporary — while dramatising threat. ' +
      'The interaction is rhetorically powerful: warfare demands active participation while weather implies external, natural force rather than political failure. The pronoun "we" (five occurrences) and possessive "our" create synthetic personalisation, constructing unified national identity. ' +
      'The speech uses semantic fields to create pathos that bypasses rational analysis of the actual political situation.',
    marks: 20,
    difficulty: 'foundation',
    keywords: ['semantic field', 'lexis', 'metaphor', 'rhetoric', 'synthetic personalisation', 'connotation', 'political discourse'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06e',
    title: 'Grammatical Frameworks: Clause Structure and Effect',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Analyse the following sentence from a literary text:</p>' +
      '<p><em>"The ancient, crumbling wall that surrounded the forgotten garden had slowly surrendered to the persistent ivy, its grey stones now entirely hidden beneath a thick blanket of dark green leaves."</em></p>' +
      '<ol>' +
      '<li>Identify and label the main clause, the relative clause, and the absolute clause. (6 marks)</li>' +
      '<li>Explain the grammatical function of the relative clause "that surrounded the forgotten garden." (4 marks)</li>' +
      '<li>Comment on how the grammatical choices contribute to meaning and effect. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The main clause is "The ancient, crumbling wall...had slowly surrendered to the persistent ivy." The defining relative clause "that surrounded the forgotten garden" post-modifies the noun phrase, identifying which wall. ' +
      'The absolute clause "its grey stones now entirely hidden beneath a thick blanket of dark green leaves" provides supplementary description as a non-finite clause. ' +
      'Pre-modifying adjectives ("ancient", "crumbling", "forgotten") front-load noun phrases with deterioration. "Surrendered" personifies the wall while "slowly" stretches the action temporally. ' +
      'The absolute clause mirrors the ivy\'s coverage — syntax buries the stones beneath layers of modification, just as ivy buries them physically. Form enacts meaning.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['clause structure', 'relative clause', 'absolute clause', 'subordination', 'noun phrase', 'personification', 'syntax'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2'],
  },

  {
    id: 'ial-wb-ex-06f',
    title: 'Language, Gender, and Identity Construction',
    termUnit: 'WEN01: Language and Context',
    type: 'analysis',
    instructions:
      '<p>Read the following two job advertisements:</p>' +
      '<p><strong>Ad A:</strong> <em>"We are looking for a dynamic, competitive individual who thrives under pressure and is determined to crush targets."</em></p>' +
      '<p><strong>Ad B:</strong> <em>"We are seeking a collaborative, supportive team member who values communication and is committed to nurturing client relationships."</em></p>' +
      '<ol>' +
      '<li>Analyse the lexical and semantic choices in each advertisement. (6 marks)</li>' +
      '<li>With reference to theories by Lakoff, Tannen, or Cameron, discuss how these advertisements may be gendered. (8 marks)</li>' +
      '<li>Evaluate whether gendered language in job advertisements reflects or constructs social reality. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Ad A employs a semantic field of aggression: "competitive", "thrives under pressure", "crush targets", "drives results." Ad B employs cooperation and care: "collaborative", "supportive", "nurturing", "builds consensus." ' +
      'Tannen\'s difference model: Ad A reflects "report talk" (competitive, status-driven), Ad B reflects "rapport talk" (relationship-building). Cameron (2007) would critique this as reinforcing the "myth of Mars and Venus", arguing communicative styles are performed, not innate. ' +
      'Research by Gaucher et al. (2011) found gendered wording deters women from applying to "masculine-coded" roles, suggesting language does not merely mirror social reality but actively shapes participation and access. ' +
      'The advertisements may not merely reflect but actively construct gendered norms through lexical choices.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['gender', 'Lakoff', 'Tannen', 'Cameron', 'semantic field', 'report talk', 'rapport talk', 'gendered language'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO4'],
  },

  {
    id: 'ial-wb-ex-06g',
    title: 'Discourse Analysis: Turn-Taking and Institutional Power',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Study the following doctor-patient conversation:</p>' +
      '<p><em>D: "Right (.) so what seems to be the problem today"<br/>P: "Well I\'ve been having these headaches and (.) um (.) they\'re getting quite—"<br/>D: "How long has this been going on"<br/>P: "About three weeks I think maybe—"<br/>D: "Any other symptoms (.) nausea (.) vision problems"<br/>P: "No I don\'t think (.) well actually my eyes have been a bit—"<br/>D: "Right let\'s have a look then"</em></p>' +
      '<ol>' +
      '<li>Identify examples of adjacency pairs, topic management, and interruptions. (6 marks)</li>' +
      '<li>Using Fairclough\'s concept of "power in discourse" or Zimmerman and West\'s research, analyse the power dynamics. (8 marks)</li>' +
      '<li>Discuss how institutional context shapes discourse patterns. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The doctor controls turn allocation, using "Right" as a discourse marker to signal transitions and functioning as gatekeeper. Question-answer adjacency pairs are initiated exclusively by the doctor. ' +
      'The patient\'s utterances are consistently interrupted (indicated by dashes). Patient fillers ("well", "um") and hedges ("I think", "maybe") reflect deference, while the doctor\'s utterances are direct and unhedged. ' +
      'Zimmerman and West (1975) found power asymmetry predicts interruption patterns: the powerful participant (doctor) interrupts the less powerful (patient). Fairclough would identify "power in discourse" — power exercised through linguistic choices within the interaction. ' +
      'The institutional context of medicine legitimises this asymmetric discourse, though research suggests patient outcomes improve with more collaborative strategies.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['adjacency pair', 'turn-taking', 'interruption', 'Fairclough', 'Zimmerman and West', 'institutional discourse', 'power'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06h',
    title: 'Language and Social Class: Comparing Registers',
    termUnit: 'WEN01: Language and Context',
    type: 'comparison',
    instructions:
      '<p>Compare the following descriptions of a football match:</p>' +
      '<p><strong>Text A (broadsheet):</strong> <em>"The match culminated in a scintillating display of tactical ingenuity as the visitors orchestrated a decisive counter-attack in the dying minutes."</em></p>' +
      '<p><strong>Text B (fan forum):</strong> <em>"absolute scenes at the end lads!! they smashed it up the other end and banged one in right at the death get innnnnn"</em></p>' +
      '<ol>' +
      '<li>Compare the lexical, grammatical, and orthographic features of each extract. (8 marks)</li>' +
      '<li>With reference to Bernstein or Trudgill, discuss how language use correlates with social context. (8 marks)</li>' +
      '<li>Evaluate the assumption that one variety is linguistically "superior." (4 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Text A uses Latinate, polysyllabic lexis ("culminated", "scintillating", "orchestrated"), complex subordination, and conventionalised metaphor. Text B uses monosyllabic Anglo-Saxon lexis ("smashed", "banged"), graphological stretching ("innnnnn"), no capitalisation, and paratactic coordination — conventions of CMC. ' +
      'Bernstein would classify A as "elaborated code" and B as "restricted code." However, Labov (1969) argued non-standard varieties are equally logical; what Bernstein interpreted as deficit was linguistic difference. ' +
      'Text B is highly effective within context: "absolute scenes" is concise and evocative; orthographic stretching iconically represents celebration intensity. Trudgill notes "covert prestige" — speakers may choose vernacular to signal authenticity and solidarity. Neither variety is linguistically superior; each is maximally effective for its context.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['social class', 'Bernstein', 'elaborated code', 'restricted code', 'Labov', 'Trudgill', 'covert prestige', 'CMC'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO4'],
  },

  {
    id: 'ial-wb-ex-06i',
    title: 'Digital Discourse and CMC Analysis',
    termUnit: 'WEN01: Language and Context',
    type: 'language-analysis',
    instructions:
      '<p>Analyse the following social media exchange:</p>' +
      '<p><em>User A: "Can\'t believe the council is closing the library again. #SaveOurLibrary #CutsKill"<br/>User B: "@UserA lol typical snowflake. libraries are dead get over it 📖💀"<br/>User A: "Imagine thinking access to knowledge is something to laugh about. Thread 🧵👇"<br/>User C: "@UserB ratio + L + nobody asked"</em></p>' +
      '<ol>' +
      '<li>Identify features specific to Computer-Mediated Communication including hashtags, emojis, and abbreviated forms. (6 marks)</li>' +
      '<li>Analyse how users construct identity and manage face through these features. (8 marks)</li>' +
      '<li>Discuss how social media discourse challenges or reinforces traditional models of power. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'CMC features: hashtags (#SaveOurLibrary) as topic markers and political slogans; at-mentions for direct public address; emojis (📖💀) as paralinguistic cues; "lol" as discourse marker; "ratio + L + nobody asked" as formulaic platform-specific face-threatening act. ' +
      'User A constructs politically engaged identity through hashtag activism and collective "Our." User B deploys "snowflake" — a pejorative neologism performing confrontational identity through deliberate impoliteness (Culpeper, 2011). User A\'s "Imagine thinking..." uses the imperative to position User B\'s view as absurd. ' +
      'Social media challenges traditional power by bypassing institutional gatekeepers. However, new hierarchies emerge: algorithmic amplification, follower counts, and "ratio" create new forms of social capital. The medium changes but the struggle for discursive power remains.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['CMC', 'hashtag', 'emoji', 'face', 'impoliteness', 'Culpeper', 'digital discourse', 'social media'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-wb-ex-06j',
    title: 'Critical Discourse Analysis: Ideology in Institutional Language',
    termUnit: 'WEN01: Language and Context',
    type: 'analysis',
    instructions:
      '<p>Read the following extract from a school prospectus:</p>' +
      '<p><em>"At Greenfield Academy, we believe every child deserves an outstanding education. Our dedicated team of highly qualified professionals nurtures each student\'s unique potential in a safe, supportive, and stimulating environment. We welcome applications from families who share our values and our vision for the future."</em></p>' +
      '<ol>' +
      '<li>Conduct a linguistic analysis covering lexis, grammar, semantics, and pragmatics. (8 marks)</li>' +
      '<li>Analyse how the text constructs institutional identity. (6 marks)</li>' +
      '<li>Discuss the power dynamics between institution and reader, considering who is included and excluded. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Semantic fields of care ("nurtures", "safe", "supportive") and excellence ("outstanding", "highly qualified", "state-of-the-art") construct the school as both warm and rigorous. Pre-modification is heavy: the tricolon "safe, supportive, and stimulating" (alliterative) creates polished promotional discourse. ' +
      'First-person plural pronouns ("we believe", "our team") create synthetic personalisation while asserting authority. Declaratives present claims as facts. Nominalisation ("excellence") converts qualitative judgement into abstract noun, seeming objective. ' +
      'The final sentence performs subtle gatekeeping: "families who share our values" implies some families do not. The defining relative clause sets conditions disguised as welcome. This is Fairclough\'s "technologisation of discourse" — market-driven language applied to public service, naturalising ideological choices as common sense.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['CDA', 'Fairclough', 'institutional discourse', 'synthetic personalisation', 'gatekeeping', 'ideology', 'nominalisation', 'marketisation'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3', 'WEN01.AO4'],
  },

  // ---------------------------------------------------------------------------
  // Unit 2: Language Change (WEN02) -- 15 exercises
  // ---------------------------------------------------------------------------
  {
    id: 'ial-wb-ex-07',
    title: 'Tracing Semantic Change: Amelioration and Pejoration',
    termUnit: 'WEN02: Language Change',
    type: 'language-analysis',
    instructions:
      '<p>Study the following set of words and their documented meanings across three time periods: <em>nice</em> (c.1300, c.1600, c.1900); <em>villain</em> (c.1300, c.1600, c.1900); <em>naughty</em> (c.1400, c.1700, c.2000).</p>' +
      '<ol>' +
      '<li>Define amelioration and pejoration with reference to two of the words above. (4 marks)</li>' +
      '<li>Analyse the social and cultural factors that drove the semantic shifts in <em>villain</em> and <em>nice</em>. (8 marks)</li>' +
      '<li>How useful are the concepts of amelioration and pejoration as frameworks for understanding language change? (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Amelioration describes a word\'s meaning becoming more positive over time: "nice" originally meant "foolish" (from Latin "nescius" -- ignorant), moving through "precise" to its modern positive sense. Pejoration is the opposite: "villain" originally meant a feudal serf, acquiring its modern sense of a criminal through class-based social attitudes. ' +
      'Social drivers of semantic change in "villain": feudal class structure associated peasantry with moral inferiority, leading to pejoration through social stigma. "Nice" reflects the growing value placed on pleasantness and sociability in post-Enlightenment bourgeois culture. The semantic history of both words is therefore inseparable from the social history of England. ' +
      'Evaluating amelioration/pejoration as frameworks: they are descriptively useful -- they categorise directional semantic drift -- but they are limited as explanatory frameworks. They describe outcomes but do not fully explain causes. Blank and Koch\'s cognitive semantic model (conceptual metaphor, metonymy) offers a richer explanatory framework. Additionally, these categories are scalar, not binary, and many words undergo complex, non-linear shifts that neither term captures adequately.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['amelioration', 'pejoration', 'semantic change', 'etymology', 'social context', 'diachronic', 'cognitive semantics'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3'],
  },

  {
    id: 'ial-wb-ex-08',
    title: 'Grammatical Change: The Progressive Aspect in British English',
    termUnit: 'WEN02: Language Change',
    type: 'language-analysis',
    instructions:
      '<p>Read the data set showing frequency counts of the progressive aspect ("be + -ing") in four corpora: Early Modern English (1600-1700), Late Modern English (1800-1900), Standard British English (1990-2000), and Current British English (2015-2020).</p>' +
      '<ol>' +
      '<li>Describe the trend shown by the data. (4 marks)</li>' +
      '<li>Analyse two possible explanations for the increased use of the progressive in contemporary British English. (8 marks)</li>' +
      '<li>To what extent does evidence of grammatical change support or challenge the prescriptivist position? (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'The data shows a consistent increase in the frequency of the progressive aspect across the four time periods, with a marked acceleration between the Late Modern and Contemporary periods. ' +
      'Possible explanations: (1) Contact with American English, which uses the progressive more frequently (media influence, cultural exchange). (2) Stylistic preference for aspect-marking that conveys ongoing, vivid action -- a feature of informal, conversational English that has spread into more formal registers. Leech\'s corpus-based research supports this "colloquialisation" of standard written English. ' +
      'Prescriptivist challenge: prescriptivists argue that progressive forms such as "I\'m loving it" (stative progressive) violate traditional grammar rules and represent language decline. However, the diachronic data undermines this: grammatical change is systematic, widespread, and historically attested. Descriptivists (Crystal, Aitchison) point out that all of today\'s standard forms were once non-standard. The prescriptivist position confuses social judgement with linguistic fact, as labelled "the language myth" by Bauer and Trudgill.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['progressive aspect', 'grammatical change', 'prescriptivism', 'descriptivism', 'corpus', 'colloquialisation', 'Leech', 'Crystal'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  {
    id: 'ial-wb-ex-09',
    title: 'Technology and Lexical Innovation: Digital Communication',
    termUnit: 'WEN02: Language Change',
    type: 'language-analysis',
    instructions:
      '<p>Read the short corpus of digital communications: three text messages (2005, 2012, 2022), two social media posts (2012, 2022), and one email (2022).</p>' +
      '<ol>' +
      '<li>Identify and categorise three types of lexical innovation visible in the digital texts (e.g., neologism, blending, functional shift). (6 marks)</li>' +
      '<li>Analyse how the norms of digital communication have changed between 2005 and 2022. (8 marks)</li>' +
      '<li>Evaluate the claim that digital communication is responsible for a decline in standard written English. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Three types of lexical innovation: (1) Neologism through functional shift -- "to friend", "to ghost", "to troll" (nouns and adjectives becoming verbs). (2) Blending -- "selfie" (self + the -ie suffix), "facepalm". (3) Initialisms and acronyms -- "lol", "tbh", "imo". ' +
      'Norms of digital communication have shifted: early texts (2005) show more use of phonetic spelling ("u", "gr8") and minimal punctuation as keyboard constraints drove abbreviation. By 2022, autocorrect and smartphone keyboards have restored more standard spelling; however, informal pragmatic features (emoji, lower-case aesthetic, ironic use of formal register) have increased. Platform-specific norms (Twitter character limits shaping compression; Instagram favouring visual over verbal) demonstrate that digital communication is not monolithic. ' +
      'Evaluation of the "decline" claim: David Crystal argues in "Language and the Internet" that netspeak is a creative, systematic addition to the speaker\'s repertoire, not a replacement of standard forms. Users demonstrate code-switching competence. The correlation between texting and literacy decline is not supported by empirical research (Plester et al.). The concern reflects moral panic rather than linguistic evidence.',
    marks: 20,
    difficulty: 'developing',
    keywords: ['neologism', 'digital communication', 'netspeak', 'Crystal', 'lexical innovation', 'code-switching', 'functional shift', 'blending'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3'],
  },

  {
    id: 'ial-wb-ex-10',
    title: 'Comparing Early Modern and Contemporary English Texts',
    termUnit: 'WEN02: Language Change',
    type: 'comparison',
    instructions:
      '<p>Read Extract A (Pepys\' Diary, 1666) and Extract B (a contemporary blog diary entry, 2023) covering a day in London.</p>' +
      '<ol>' +
      '<li>Identify and analyse three grammatical differences between the two texts. (6 marks)</li>' +
      '<li>Compare the lexical choices in each text and explain what these reveal about language change. (8 marks)</li>' +
      '<li>Using the concept of "standardisation", discuss how far the development of standard written English is visible in these two texts. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Grammatical differences: (1) Pepys uses the second-person pronoun "thou"/"thee" (now archaic); the blog uses "you" throughout. (2) Verb inflection: Pepys employs third-person "-eth" endings ("goeth", "saith"), now replaced by "-s". (3) Word order: Pepys uses verb-second constructions influenced by Latin and earlier English syntax; contemporary syntax is more rigidly SVO. ' +
      'Lexical comparison reveals both loss and gain: words like "bespake" and "prithee" reflect Early Modern vocabulary now lost, while the blog incorporates digital-era lexis ("scrolled", "posted", "pinged"). Borrowing patterns also differ: Pepys draws on French and Latin prestige forms; the blog shows American English influence. ' +
      'Standardisation: the establishment of the printing press, Johnson\'s Dictionary (1755), and later compulsory education drove standardisation of spelling and grammar. Pepys\'s text shows pre-standardisation variability (inconsistent spelling within the same entry). The blog, despite informal register, adheres to standard spelling norms, demonstrating how thoroughly standardisation has been internalised -- even in informal writing.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['Early Modern English', 'standardisation', 'diachronic', 'grammar', 'lexis', 'Pepys', 'pronoun', 'verb inflection'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3'],
  },

  {
    id: 'ial-wb-ex-11',
    title: 'Evaluating Theories of Language Change',
    termUnit: 'WEN02: Language Change',
    type: 'evaluation',
    instructions:
      '<p>Consider the three theoretical perspectives on the causes of language change: (A) contact and borrowing (Thomason and Kaufman); (B) internal drift (Sapir); (C) social prestige and identity (Labov\'s social stratification research).</p>' +
      '<ol>' +
      '<li>Outline the key claims of ONE of the three theories listed above. (4 marks)</li>' +
      '<li>Evaluate the strengths and weaknesses of your chosen theory using linguistic evidence. (8 marks)</li>' +
      '<li>To what extent is it possible to identify a single dominant cause of language change? (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Labov\'s social stratification theory (recommended choice for richest evaluation): Labov\'s New York department store study (1966) showed that use of post-vocalic /r/ correlated with social class, demonstrating that prestige variants drive change from above, while stigmatised variants drive change from below. His work on Martha\'s Vineyard showed identity as a driver of dialect retention. ' +
      'Strengths: Labov\'s empirical methodology provides reproducible, quantitative evidence. His model explains both the direction and spread of change through social networks (Milroy and Milroy\'s network theory). Weaknesses: over-reliance on urban, English-language contexts limits universality; the model underweights contact-induced change (which better explains post-colonial varieties). ' +
      'On identifying a single dominant cause: most contemporary linguists favour a multi-causal model. Trudgill\'s dialect contact model, Mufwene\'s "feature pool" model, and Croft\'s evolutionary framework all treat language change as the product of multiple interacting pressures -- social, cognitive, typological, and contact-based. Monocausal explanations are pedagogically convenient but empirically inadequate.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['Labov', 'social stratification', 'prestige', 'language change', 'internal drift', 'contact', 'Milroy', 'Trudgill'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  {
    id: 'ial-wb-ex-12',
    title: 'Using Corpus Data to Investigate Language Change',
    termUnit: 'WEN02: Language Change',
    type: 'analysis',
    instructions:
      '<p>You are provided with frequency data from the British National Corpus (BNC, 1994) and the English Web Corpus UK (enTenTen, 2020) for the following words: <em>shall</em>, <em>ought</em>, <em>gotten</em>, <em>like</em> (as discourse marker), <em>innit</em>.</p>' +
      '<ol>' +
      '<li>Describe what the frequency data suggests about the trajectory of each word. (6 marks)</li>' +
      '<li>Analyse the social and stylistic factors that might explain the changing frequency of "like" as a discourse marker. (8 marks)</li>' +
      '<li>What are the methodological advantages and limitations of using corpus data to study language change? (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Likely trends: "shall" and "ought" show decline (modal recession -- Leech et al. "The Change in English Modal Usage"); "gotten" shows increase (Americanisation); "like" as discourse marker shows marked increase (youth language, media spread); "innit" remains stigmatised but shows increased frequency in informal digital contexts. ' +
      'Social and stylistic factors for "like": D\'Arcy\'s research identifies multiple functions (quotative "like", approximator "like", discourse particle). Its spread from US teen speech via 1980s-90s media to British English reflects prestige borrowing and the influence of American popular culture. It now serves complex pragmatic functions: softening, hedging, introducing reported speech. Dismissing it as meaningless ignores its communicative utility. ' +
      'Corpus methodology: advantages include large-scale reproducibility, diachronic comparison across registers, and quantitative rigour. Limitations include the "corpus as mirror" fallacy (what is included reflects collection decisions), lack of contextual metadata for speaker identity, and the difficulty of capturing spoken data comprehensively. Corpus evidence is best supplemented with ethnographic or experimental methods.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['corpus', 'BNC', 'frequency', 'modal recession', 'discourse marker', 'like', 'methodology', 'diachronic', 'quantitative'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  // ---------------------------------------------------------------------------
  // Unit 3: Crafting Language (WEN03) -- 6 exercises
  // ---------------------------------------------------------------------------
  {
    id: 'ial-wb-ex-13',
    title: 'Writing to Persuade: Opinion Column',
    termUnit: 'WEN03: Crafting Language',
    type: 'creative-writing',
    instructions:
      '<p>Write a 600-800 word opinion column for a broadsheet newspaper arguing for OR against the following proposition: <em>"Social media has made political discourse more democratic."</em></p>' +
      '<ul>' +
      '<li>Choose a clear position and sustain it throughout.</li>' +
      '<li>Use at least three distinct rhetorical strategies (e.g., rhetorical question, tricolon, counter-argument with refutation, appeal to authority).</li>' +
      '<li>Pitch your register appropriately for a broadsheet readership.</li>' +
      '<li>Write a brief authorial commentary (100-150 words) explaining your key language choices.</li>' +
      '</ul>',
    modelAnswer:
      'Model column (arguing against): "The Illusion of the Agora" -- opens with a classical allusion to establish intellectual register; uses tricolon to list failings ("siloed, monetised, weaponised"); deploys rhetorical questions to implicate the reader; concedes a limited counter-argument ("Of course, #MeToo and Arab Spring demonstrate social media\'s organising power") before refuting it with reference to algorithmic filtering. Register: formal lexis, complex sentence structures, no contractions in main argument. ' +
      'Commentary should identify: (1) choice of allusion as audience positioning device; (2) tricolon for cumulative rhetorical force; (3) concession-refutation structure as a credibility strategy (demonstrating fair-mindedness); (4) register choices reflecting the broadsheet reader\'s expectation of intellectual engagement. ' +
      'Marking note: AO5 (crafting) is primary -- reward sustained register, rhetorical variety, and authorial control. AO1 (commentary) rewards metalinguistic awareness.',
    marks: 30,
    difficulty: 'secure',
    keywords: ['persuasive writing', 'rhetorical strategies', 'tricolon', 'register', 'opinion column', 'commentary', 'broadsheet', 'rhetoric'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-wb-ex-14',
    title: 'Creative Non-Fiction: Place Writing',
    termUnit: 'WEN03: Crafting Language',
    type: 'creative-writing',
    instructions:
      '<p>Write a 600-800 word piece of creative non-fiction describing a specific place that has personal or cultural significance.</p>' +
      '<ul>' +
      '<li>Use sensory detail, varied sentence structures, and a distinctive narrative voice.</li>' +
      '<li>Experiment with at least two of the following: free indirect discourse, second-person address, fragmented syntax, extended metaphor.</li>' +
      '<li>Write a commentary (100-150 words) in which you analyse your use of narrative voice and structural choices.</li>' +
      '</ul>',
    modelAnswer:
      'Model piece: A description of a derelict cinema. Voice: melancholic, nostalgic, with present-tense fragments evoking memory intrusion. Techniques: free indirect discourse blurs narrator and remembered self; extended metaphor of cinema as a "faded dream factory" sustained across three paragraphs; second-person interjection ("You know the smell -- that particular compound of velvet and dust") implicates the reader in the memory. ' +
      'Structural choices: opening with sensory fragment, building through temporal shift (past-to-present-to-hypothetical future), closing with open-ended image. Commentary should address: (1) the function of free indirect discourse in collapsing temporal distance; (2) how second-person address creates intimacy and universalises the personal; (3) the choice of fragmented syntax to render the unreliability of memory. ' +
      'Reward ambitious experimentation even where execution is partially successful. Penalise description that lacks structural awareness.',
    marks: 30,
    difficulty: 'secure',
    keywords: ['creative non-fiction', 'narrative voice', 'free indirect discourse', 'second-person', 'sensory detail', 'structure', 'metaphor', 'place writing'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-wb-ex-15',
    title: 'Rewriting for Audience: Adapting a Scientific Abstract',
    termUnit: 'WEN03: Crafting Language',
    type: 'creative-writing',
    instructions:
      '<p>Read the provided scientific abstract on climate feedback loops.</p>' +
      '<ol>' +
      '<li>Rewrite the abstract as: (a) a 300-word newspaper article for a general readership; (b) a 200-word entry for a children\'s encyclopaedia (ages 10-12). (20 marks)</li>' +
      '<li>Write a comparative commentary (200 words) analysing how you adapted lexis, syntax, and discourse structure for each audience. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Newspaper version: Topic sentence establishes news angle; scientific terms replaced with everyday analogies ("a thermostat that keeps turning itself up"); active voice and concrete subjects; short paragraphs; direct quote from a named expert to add authority. Register: accessible but not condescending; assumes general literacy but not scientific background. ' +
      'Children\'s encyclopaedia version: second-person address ("Did you know...?"); sequenced explanation using numbered steps; analogy to familiar experience (a blanket trapping warmth); controlled vocabulary; short sentences; subheadings. ' +
      'Commentary should analyse: (1) nominalisation removal (from "atmospheric carbon dioxide concentration increase" to "more CO2 in the air"); (2) how active/passive voice shift affects clarity and engagement; (3) the use of analogy as a discourse strategy for concept mapping; (4) how discourse structure (encyclopaedia\'s classification structure vs. newspaper\'s inverted pyramid) shapes information hierarchy. ' +
      'The exercise develops metalinguistic competence: students must not only produce appropriate texts but articulate the principles governing their choices.',
    marks: 30,
    difficulty: 'developing',
    keywords: ['audience adaptation', 'register', 'nominalisation', 'active voice', 'analogy', 'discourse structure', 'commentary', 'rewriting'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1', 'WEN03.AO2'],
  },

  {
    id: 'ial-wb-ex-16',
    title: 'Commentary Practice: Analysing Your Own Writing',
    termUnit: 'WEN03: Crafting Language',
    type: 'analysis',
    instructions:
      '<p>Re-read a piece of your own creative or persuasive writing (minimum 400 words) produced earlier in this unit.</p>' +
      '<ol>' +
      '<li>Write a 300-word analytical commentary identifying three specific language choices you made and explaining their intended effects. (15 marks)</li>' +
      '<li>Identify one moment where your writing did not achieve the intended effect and explain, with linguistic precision, how you would revise it. (5 marks)</li>' +
      '</ol>' +
      '<p><em>Use the AQA/Edexcel assessment vocabulary: register, lexical field, syntactic structure, semantic field, pragmatic effect.</em></p>',
    modelAnswer:
      'A strong commentary: names specific linguistic features (not vague claims like "I used good vocabulary"); connects choice to effect using conditional "in order to" / "so that" / "which constructs" structures; demonstrates awareness of audience and context as determinants of choice. ' +
      'Example structure: "In paragraph two I used the semantic field of warfare (\'assault\', \'campaign\', \'frontline\') to construct the commercial environment as an aggressive space. This lexical field was chosen to position my audience -- young professionals -- as active combatants rather than passive consumers, reinforcing the assertive ethos of the piece." ' +
      'The revision section rewards honest self-evaluation: a student who identifies vague metaphor, over-long sentences, or inconsistent register, and proposes a specific alternative with justification, demonstrates the metalinguistic awareness central to WEN03 assessment. ' +
      'Common weaknesses to address in feedback: commentaries that list features without analysis; those that describe content rather than language; those that fail to link choices to effect.',
    marks: 20,
    difficulty: 'developing',
    keywords: ['commentary', 'metalanguage', 'self-evaluation', 'semantic field', 'lexical field', 'pragmatic effect', 'register', 'revision'],
    linkedObjectives: ['WEN03.AO1', 'WEN03.AO5'],
  },

  {
    id: 'ial-wb-ex-17',
    title: 'Evaluating Published Writers\' Craft: Autobiography',
    termUnit: 'WEN03: Crafting Language',
    type: 'evaluation',
    instructions:
      '<p>Read the two autobiographical extracts (Maya Angelou, <em>I Know Why the Caged Bird Sings</em>, Chapter 1; Zadie Smith, <em>Feel Free</em>, "On Optimism and Despair").</p>' +
      '<ol>' +
      '<li>Analyse how each writer constructs their narrative voice through lexical and syntactic choices. (10 marks)</li>' +
      '<li>Evaluate which writer more effectively uses structural contrast to create meaning. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Angelou: voice constructed through dialect features and the vernacular of rural Arkansas (lexical authenticity), rhythmic, biblical cadence in sentence structures, and the child\'s-eye perspective which creates dramatic irony (the adult narrator\'s awareness subtly inflecting the child\'s innocence). ' +
      'Smith: voice constructed through essayistic register, complex subordinate clause nesting that enacts intellectual deliberation, and self-interruption (parenthetical asides) that models the process of thinking. Code-switches between intellectual register and colloquial observation. ' +
      'Structural contrast evaluation: Angelou uses the contrast between the lyrical, elevated description of nature and the brutal social reality of Jim Crow America -- the structural juxtaposition is the meaning. Smith uses contrast between abstract philosophical claim and concrete personal anecdote. A strong evaluation argues which use of contrast is more effective with reference to the purpose of each text: Angelou\'s contrast is affective and political; Smith\'s is epistemological. Neither is objectively superior -- the evaluation should be argued rather than asserted.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['autobiography', 'narrative voice', 'structural contrast', 'Angelou', 'Smith', 'dramatic irony', 'register', 'syntax'],
    linkedObjectives: ['WEN03.AO1', 'WEN03.AO5', 'WEN03.AO2'],
  },

  {
    id: 'ial-wb-ex-18',
    title: 'Evaluating Rhetorical Effectiveness in Public Speeches',
    termUnit: 'WEN03: Crafting Language',
    type: 'evaluation',
    instructions:
      '<p>Read the three speech extracts: (A) Malala Yousafzai, UN Youth Assembly, 2013; (B) Greta Thunberg, COP24, 2018; (C) Barack Obama, Democratic National Convention, 2004.</p>' +
      '<ol>' +
      '<li>Identify and analyse the primary rhetorical strategy in each speech. (9 marks)</li>' +
      '<li>Evaluate which speech most effectively uses ethos, pathos, and logos. (11 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Yousafzai: primary strategy is ethos -- personal testimony as a survivor of extremist violence gives her unique moral authority. Grammatical construction of self as both victim and agent ("They thought that the bullets would silence us. But they failed.") is powerful. ' +
      'Thunberg: primary strategy is pathos combined with direct accusation. The truncated, declarative register ("You say you love your children above all else. Yet you are stealing their future.") uses syntactic parallelism and adversative conjunction to construct a moral indictment. Deliberate register simplicity enacts the message (why complicate what is morally obvious?). ' +
      'Obama: primary strategy is logos structured by narrative -- his personal story as evidence for the American Dream thesis. Sophisticated use of anaphora, conditional clauses, and the "there is not a liberal America / there is not a conservative America" antithetical construction performs the unity he is arguing for. ' +
      'Evaluation of ethos/pathos/logos: a strong answer avoids simply labelling and instead argues about the interaction of appeals. Yousafzai\'s ethos amplifies her pathos; Thunberg\'s deliberately underdeveloped logos positions logos itself as a rhetorical failure of the powerful; Obama carefully balances all three. Award highest marks for an argued comparative evaluation rather than separate description.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['rhetoric', 'ethos', 'pathos', 'logos', 'anaphora', 'parallelism', 'speech', 'Aristotle', 'register'],
    linkedObjectives: ['WEN03.AO1', 'WEN03.AO5', 'WEN03.AO2'],
  },

  // ---------------------------------------------------------------------------
  // Unit 4: Language Investigation (WEN04) -- 6 exercises
  // ---------------------------------------------------------------------------
  {
    id: 'ial-wb-ex-19',
    title: 'Designing a Language Investigation: Hypotheses and Methodology',
    termUnit: 'WEN04: Language Investigation',
    type: 'analysis',
    instructions:
      '<p>You are planning an independent language investigation into <em>how gender identity is represented in contemporary UK job advertisements</em>.</p>' +
      '<ol>' +
      '<li>Write a focused research question and two subsidiary hypotheses for this investigation. (4 marks)</li>' +
      '<li>Describe a data collection methodology that would yield a representative corpus. Address: sampling strategy, text selection criteria, corpus size, and ethical considerations. (8 marks)</li>' +
      '<li>Identify two appropriate linguistic frameworks for analysing your data and justify their selection. (8 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Research question: "To what extent do contemporary UK job advertisements employ gendered language that may disadvantage non-binary or female applicants?" ' +
      'Subsidiary hypotheses: (1) Advertisements in traditionally male-dominated sectors will contain significantly more agentic language than those in traditionally female-dominated sectors. (2) The use of explicitly gendered pronouns in job advertisements has declined since 2010 but has been replaced by implicitly gendered lexis. ' +
      'Methodology: stratified random sampling across sectors (STEM, care, finance, creative industries); minimum corpus of 100 advertisements per sector; collected from major UK job boards over a defined two-week period to control for temporal variation; ethical considerations include anonymisation of company names to avoid reputational harm, no collection of applicant personal data. ' +
      'Frameworks: (1) Critical Discourse Analysis (Fairclough) -- appropriate because it links linguistic features to ideological assumptions, directly relevant to the gender/power focus. (2) Corpus stylistics / keyword analysis (Baker) -- appropriate for identifying statistically significant lexical patterns across large data sets, avoiding researcher confirmation bias. Justify the combination: CDA provides the interpretive depth; corpus methodology provides the quantitative rigour.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['research question', 'hypothesis', 'methodology', 'corpus', 'sampling', 'CDA', 'Fairclough', 'Baker', 'ethics'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-wb-ex-20',
    title: 'Quantitative Data Analysis: Frequency and Distribution',
    termUnit: 'WEN04: Language Investigation',
    type: 'analysis',
    instructions:
      '<p>You are provided with a frequency table showing the 20 most common nouns in two sub-corpora: (A) customer service emails from a UK bank, 2010-2015; (B) customer service chatbot responses from the same bank, 2018-2023.</p>' +
      '<ol>' +
      '<li>Describe three significant patterns in the data, using appropriate quantitative language (frequency, percentage, ratio). (6 marks)</li>' +
      '<li>Analyse what these patterns suggest about the linguistic differences between human and AI-generated customer service language. (8 marks)</li>' +
      '<li>What additional data would strengthen or challenge your analysis? (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Pattern description: (1) The noun "account" appears with twice the relative frequency in Corpus B, suggesting that chatbot language is more transactionally focused. (2) Politeness markers such as "pleasure" and "apologise" (as nominal constructions) appear only in Corpus A, suggesting that human agents deploy more explicitly affective language. (3) Corpus B shows higher frequency of imperative-linked nouns ("reference", "number", "details") indicating a more directive discourse structure. ' +
      'Analysis: human customer service language (A) draws on politeness theory (Brown and Levinson) -- positive face strategies through expressions of pleasure and rapport-building. Chatbot language (B) prioritises transactional efficiency -- information density is higher, phatic language lower. This may reflect the design goal of AI customer service: speed and accuracy over relational warmth. However, this risks alienating customers who value a human touch, with implications for satisfaction and brand loyalty. ' +
      'Strengthening the analysis: (1) Qualitative analysis of full texts to capture pragmatic context (frequency alone cannot establish meaning). (2) Customer satisfaction scores correlated with text type. (3) Analysis of syntactic patterns (sentence length, clause complexity) to complement the noun frequency data. (4) A comparable corpus from another industry to test whether patterns are bank-specific or genre-wide.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['quantitative analysis', 'frequency', 'corpus', 'chatbot', 'politeness theory', 'Brown and Levinson', 'data analysis', 'AI language'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3'],
  },

  {
    id: 'ial-wb-ex-21',
    title: 'Qualitative Data Analysis: Discourse and Interaction',
    termUnit: 'WEN04: Language Investigation',
    type: 'analysis',
    instructions:
      '<p>You are provided with a 500-word transcript of a family dinner conversation including three generations (grandparent, parent, teenager). Standard transcription conventions are used (pauses, overlaps, stress marked).</p>' +
      '<ol>' +
      '<li>Apply conversation analysis (CA) methods to identify and describe the turn-taking patterns in the transcript. (6 marks)</li>' +
      '<li>Analyse the relationship between age and interactional power in the data, drawing on specific transcript evidence. (8 marks)</li>' +
      '<li>Discuss the limitations of a single-transcript case study as a basis for generalisations about family discourse. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'CA methods: identify transition relevance places (TRPs), adjacency pairs (question-answer, greeting-greeting), overlaps and interruptions (as power moves or as cooperative "floor-holding"), back-channel signals, repair sequences. Note whether turn allocation is self-selected or other-selected. ' +
      'Age and interactional power: if the grandparent takes longer turns, initiates more topic changes, and performs more directives, this suggests generational status confers interactional authority. If the teenager uses more hedges and minimal responses, this supports the analysis. However, data may complicate expectations -- a teenager who dominates the conversation challenges the age-power assumption and requires explanation. ' +
      'Limitations of single-transcript case study: (1) Cannot support generalisations -- one family\'s interactional norms may be atypical. (2) The "observer\'s paradox" (Labov) -- the presence of a recording device may alter natural behaviour. (3) No demographic information provided about participants -- class, ethnicity, and family dynamic are confounding variables. (4) A single occasion is unrepresentative of this family\'s range of interactional contexts. The discussion should recommend a larger, more varied corpus and consider triangulation with ethnographic observation.',
    marks: 20,
    difficulty: 'secure',
    keywords: ['conversation analysis', 'turn-taking', 'adjacency pairs', 'TRP', 'observer\'s paradox', 'Labov', 'discourse', 'qualitative'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-wb-ex-22',
    title: 'Writing an Investigation Introduction and Literature Review',
    termUnit: 'WEN04: Language Investigation',
    type: 'analysis',
    instructions:
      '<p>Write the introduction and literature review sections of a language investigation into <em>code-switching among bilingual British-Punjabi speakers in informal conversation</em>.</p>' +
      '<ul>' +
      '<li>Introduction (200 words): establish the topic, justify its significance, and state your research question. (10 marks)</li>' +
      '<li>Literature review (300 words): reference at least three relevant theorists or studies (e.g., Myers-Scotton, Milroy, Gardner-Chloros) and show how your investigation extends or challenges existing research. (10 marks)</li>' +
      '</ul>',
    modelAnswer:
      'Introduction model: Opens with a contextualising statistic or observation about multilingualism in the UK (e.g., 2021 census data on Punjabi speakers). Establishes code-switching as a linguistic phenomenon of theoretical and social significance. Identifies a gap: most studies focus on adult formal contexts; this investigation targets informal conversation among younger speakers. States research question precisely: "How do British-Punjabi bilingual speakers aged 18-25 use code-switching in informal peer conversation, and what social functions does switching serve?" ' +
      'Literature review model: Myers-Scotton\'s Markedness Model -- code choice as a social strategy, with marked and unmarked selections signalling relational work. Milroy\'s social network theory -- dense, multiplex networks reinforce vernacular use; looser networks facilitate convergence to a dominant variety. Gardner-Chloros -- challenges the "rational actor" model; code-switching is often automatic and identity-driven rather than strategically calculated. The current investigation extends Myers-Scotton by testing whether the Markedness Model applies to informal, peer-to-peer contexts (she primarily studied institutional settings). A good literature review synthesises rather than summarises: it shows how the studies relate to each other and to the current project.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['code-switching', 'bilingualism', 'Myers-Scotton', 'Gardner-Chloros', 'Milroy', 'literature review', 'academic writing', 'research question'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-wb-ex-23',
    title: 'Writing an Investigation Discussion and Conclusion',
    termUnit: 'WEN04: Language Investigation',
    type: 'analysis',
    instructions:
      '<p>You have completed a small-scale corpus investigation into hedging language in male and female student academic essays (50 essays per group, drawn from a UK sixth-form college). Your data shows female-authored essays contain statistically more epistemic hedges ("it could be argued", "this may suggest") than male-authored essays.</p>' +
      '<ol>' +
      '<li>Write a 300-word discussion section that interprets these findings in relation to linguistic theory. (10 marks)</li>' +
      '<li>Write a 150-word conclusion that summarises your findings, acknowledges limitations, and proposes directions for further research. (5 marks)</li>' +
      '<li>Identify two specific limitations of this study\'s methodology and explain their impact on the validity of the findings. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Discussion model: interprets the hedging difference through multiple theoretical lenses. First, Lakoff\'s deficit model would interpret female hedging as evidence of linguistic insecurity. However, this should be challenged: epistemic hedges in academic writing are a marker of scholarly sophistication (Hyland\'s work on academic hedging shows that experienced writers hedge more than novices). The finding may therefore indicate that female students in this corpus are deploying more advanced academic register. Alternatively, if male students are underusing hedges, this may reflect overconfidence rather than ability. A nuanced discussion holds multiple interpretations in tension. ' +
      'Conclusion model: summarises findings without overclaiming ("This investigation found statistically significant differences in hedging frequency, though the direction of effect\'s meaning remains ambiguous..."); acknowledges limitations (small corpus, single institution, essay genre only); proposes future research (cross-genre comparison, spoken academic discourse, longitudinal study tracking the same students). ' +
      'Limitations: (1) Single-genre corpus -- academic essays may not represent the full range of each student\'s linguistic repertoire. Impact: limits generalisability. (2) No control for essay topic, mark, or year of study -- confounding variables that could independently explain hedging differences. Impact: threatens internal validity.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['discussion', 'conclusion', 'hedging', 'Hyland', 'Lakoff', 'academic writing', 'limitations', 'validity', 'further research'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-wb-ex-24',
    title: 'Evaluating Your Own Investigation: Reflection and Peer Review',
    termUnit: 'WEN04: Language Investigation',
    type: 'evaluation',
    instructions:
      '<p>Using your draft language investigation (coursework), complete the following self-evaluation tasks.</p>' +
      '<ol>' +
      '<li>Write a 200-word critical evaluation of your methodology: what worked, what you would change, and why. (8 marks)</li>' +
      '<li>Exchange your draft with a peer and provide 150-200 words of written feedback focused on: clarity of research question, quality of data analysis, and use of linguistic frameworks. (6 marks)</li>' +
      '<li>In response to your peer\'s feedback, identify one substantive revision you will make to your investigation and justify it with reference to the assessment criteria. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Self-evaluation model: a strong response is honest and specific. It does not simply list what was done; it assesses the gap between intention and outcome. "My sampling strategy was designed to be systematic, but in practice I collected data from only two social media platforms, which limits the generalisability of my findings to those platforms specifically. If I were to repeat the study, I would include a broader range of platforms and conduct a pilot analysis on a small sub-corpus before committing to a final analytical framework." ' +
      'Peer feedback model: specific rather than generic ("Your research question is interesting" is not feedback). Focus on: is the research question falsifiable? Does the analysis attend to the data or does it drift into general claims? Are frameworks applied consistently? ' +
      'Revision justification: the student should map their planned revision onto WEN04 assessment criteria (AO3 -- use of analytical methods; AO4 -- evaluation of findings). For example: "I will add a section explicitly addressing the limitations of my corpus size, as AO4 requires evaluation of methods and findings, and my current draft treats the data as unproblematically representative." ' +
      'This exercise develops the metacognitive skills essential for independent academic work at university level.',
    marks: 20,
    difficulty: 'mastery',
    keywords: ['self-evaluation', 'peer review', 'methodology', 'revision', 'metacognition', 'assessment criteria', 'coursework', 'reflection'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },
];

// =============================================================================
// HOMEWORK TASKS (30 total)
// =============================================================================

export const ialHomeworkTasks: HomeworkTask[] = [

  // ---------------------------------------------------------------------------
  // WEN01 Language & Context -- Tasks 1-8
  // ---------------------------------------------------------------------------
  {
    id: 'ial-hw-01',
    title: 'Extended Reading Log: Language and Power',
    halfTerm: 1,
    weekNumber: 1,
    type: 'reading-response',
    instructions:
      '<p>Read Chapters 1-3 of Norman Fairclough\'s <em>Language and Power</em> (2001 edition, Longman).</p>' +
      '<ol>' +
      '<li>Write a 400-500 word reading log entry summarising Fairclough\'s core argument about the relationship between language and social power. (10 marks)</li>' +
      '<li>Identify two examples from your own experience of language use where power is exercised through discourse. Analyse each briefly (100 words each) using Fairclough\'s vocabulary. (10 marks)</li>' +
      '</ol>' +
      '<p>Use APA referencing for the text you are logging.</p>',
    modelAnswer:
      'Log summary should capture: Fairclough\'s central claim that language is not merely a reflection of social reality but constitutes it; the distinction between discourse as text, as interaction, and as social practice (the three-dimensional model); the concept of "naturalisation" -- how dominant ideological meanings become common sense. ' +
      'Personal examples should demonstrate application of concepts rather than mere labelling. A strong response might identify the language of a job advertisement (Chapter 1 is particularly relevant here) or a news broadcast and analyse how it naturalises particular social relations. ' +
      'Reward: APA referencing correctly formatted; distinction between summary and analysis; use of Fairclough\'s own terminology accurately deployed.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['Fairclough', 'CDA', 'power', 'discourse', 'naturalisation', 'reading log', 'APA'],
    linkedObjectives: ['WEN01.AO2', 'WEN01.AO3'],
  },

  {
    id: 'ial-hw-02',
    title: 'Data Collection: Analysing Register in Professional Emails',
    halfTerm: 1,
    weekNumber: 2,
    type: 'research',
    instructions:
      '<p>Collect a corpus of 10 professional emails (with personal details anonymised). These may be from a work experience placement, a school/college administrator, or a public body (e.g., council, NHS appointment letters).</p>' +
      '<ol>' +
      '<li>Annotate each email identifying: (a) register (formal/informal/mixed); (b) three linguistic features that signal that register; (c) the apparent purpose and audience. (10 marks)</li>' +
      '<li>Write a 300-word preliminary analysis of patterns across your corpus. (10 marks)</li>' +
      '</ol>' +
      '<p><strong>Note:</strong> Ensure all personal information is redacted before submitting.</p>',
    modelAnswer:
      'Annotation checklist: register markers should include lexical choices (Latinate vs. Germanic vocabulary), sentence complexity, use of passive voice, salutation and sign-off conventions, modality (degree of hedging and directness). ' +
      'Patterns analysis: a strong response looks for variation across institutional types (e.g., a council letter vs. a school email from a form tutor) and relates this variation to the power relationship between sender and recipient. Reference to Grice\'s maxims can illuminate cases where emails are deliberately indirect. ' +
      'Award method marks for systematic annotation (not just impressionistic), and analysis marks for generalisations supported by specific evidence from the corpus.',
    marks: 20,
    estimatedMinutes: 90,
    difficulty: 'developing',
    keywords: ['register', 'professional email', 'corpus', 'annotation', 'Grice', 'data collection', 'institutional language'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2'],
  },

  {
    id: 'ial-hw-03',
    title: 'Draft Essay: How Does Social Class Shape Language Use?',
    halfTerm: 1,
    weekNumber: 3,
    type: 'extended-writing',
    instructions:
      '<p>Write a full draft essay (800-1000 words) in response to the question: <em>"How does social class shape language use in contemporary Britain?"</em></p>' +
      '<ul>' +
      '<li>Your essay must refer to at least three linguistic theorists or researchers (e.g., Bernstein, Labov, Trudgill, Cheshire).</li>' +
      '<li>Use a minimum of five pieces of specific linguistic evidence (e.g., data, examples of features).</li>' +
      '<li>Structure your essay with a clear introduction, developed argument, and conclusion.</li>' +
      '<li>Submit with a 100-word reflection on what you found most challenging to argue.</li>' +
      '</ul>',
    modelAnswer:
      'A band 4 response will: argue a coherent position (not simply list points about class and language); use theorists as evidence rather than as authority (i.e., critiques as well as applies them); demonstrate knowledge of the research context (Bernstein\'s restricted/elaborated codes controversy; Labov\'s critique of deficit theory; Trudgill\'s Norwich study); and maintain analytical rather than descriptive register throughout. ' +
      'Common weaknesses: treating Bernstein\'s elaborated/restricted codes as fixed properties of individuals rather than of contexts; failing to acknowledge that class intersects with other variables; conflating accent with dialect. ' +
      'Reflection should be honest: reward students who identify genuine conceptual difficulties rather than practical ones ("I found it hard to write 1000 words" is not a linguistic reflection).',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'secure',
    keywords: ['social class', 'Bernstein', 'Labov', 'Trudgill', 'essay', 'extended writing', 'argument', 'theorists'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3', 'WEN01.AO4'],
  },

  {
    id: 'ial-hw-04',
    title: 'Peer Review: Analysing a Classmate\'s Language and Context Essay',
    halfTerm: 1,
    weekNumber: 4,
    type: 'analysis',
    instructions:
      '<p>You will be given a partner\'s essay (ial-hw-03) to peer review.</p>' +
      '<ol>' +
      '<li>Read the essay carefully and write structured feedback (300-400 words) addressing: (a) the strength of the argument; (b) the quality and range of linguistic evidence; (c) the accuracy of theoretical references; (d) one specific paragraph that could be improved, with a suggested revision. (15 marks)</li>' +
      '<li>In response to the feedback you receive on your own essay, write a 150-word action plan for your final draft. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Peer feedback criteria: strong feedback is specific, referenced to the text ("In paragraph 3, the claim that Bernstein\'s theory has been \"disproven\" overstates the case -- Bernstein himself revised the model in the 1970s"), and constructive (it identifies both strengths and areas for development). It avoids generic praise ("good points") and generic criticism ("needs more analysis"). ' +
      'Action plan: should translate feedback into specific, achievable revision tasks mapped onto assessment objectives. E.g., "AO2 -- I will add a footnote explaining the revised version of Bernstein\'s code theory; AO4 -- I will restructure my conclusion to make the evaluative judgement clearer." ' +
      'The peer review process develops metalinguistic awareness: students must apply assessment vocabulary to someone else\'s writing before they can apply it reflexively to their own.',
    marks: 20,
    estimatedMinutes: 90,
    difficulty: 'developing',
    keywords: ['peer review', 'feedback', 'essay', 'action plan', 'assessment criteria', 'revision', 'metalinguistic'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO4'],
  },

  {
    id: 'ial-hw-05',
    title: 'Extended Reading Log: Gender and Language',
    halfTerm: 1,
    weekNumber: 5,
    type: 'reading-response',
    instructions:
      '<p>Read Deborah Cameron\'s "Verbal Hygiene" (1995), Chapter 4 ("Putting the M back in Grammar"), OR Jennifer Coates\' "Women Talk" (1996), Chapters 1-2.</p>' +
      '<ol>' +
      '<li>Write a 500-word reading log summarising the central argument and its significance for the gender and language debate. (10 marks)</li>' +
      '<li>Identify one claim you agree with and one you would challenge. Support each position with linguistic evidence or counter-examples (150 words each). (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Cameron log: should capture the core argument that prescriptive attitudes to language (verbal hygiene) are not simply about correctness but encode social anxieties about gender, class, and identity. The chapter demonstrates how grammar guides targeted at women reinforce gendered norms. ' +
      'Coates log: should focus on the argument that all-female talk is characterised by collaboration, topic-sharing, and minimal competition -- directly challenging Lakoff\'s deficit model. ' +
      'The agree/challenge section rewards critical engagement: students should not simply assert agreement or disagreement but reason from evidence. A strong challenge might note that Coates\' data is from a specific social class and era, limiting generalisability; or that Cameron\'s focus on prescriptivism, while illuminating, does not fully account for descriptive variation.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['Cameron', 'Coates', 'gender', 'verbal hygiene', 'collaboration', 'reading log', 'critical thinking'],
    linkedObjectives: ['WEN01.AO2', 'WEN01.AO3', 'WEN01.AO4'],
  },

  {
    id: 'ial-hw-06',
    title: 'Data Collection Exercise: Dialect Features in Local Speech',
    halfTerm: 1,
    weekNumber: 6,
    type: 'research',
    instructions:
      '<p>Record (with consent) or transcribe from memory two informal conversations involving speakers who use a distinctive regional dialect. Aim for a minimum of 300 words of data per conversation.</p>' +
      '<ol>' +
      '<li>Produce a clean transcript using basic CA conventions (pause length, overlap, stress). (5 marks)</li>' +
      '<li>Identify and categorise at least six dialect features (lexical, phonological -- represented in spelling -- or grammatical). (6 marks)</li>' +
      '<li>Write a 250-word analysis relating your data to Trudgill\'s dialect continuum model or Chambers and Trudgill\'s concept of dialect levelling. (9 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Transcript quality: basic conventions consistently applied; speaker identification codes used; pauses marked. ' +
      'Dialect features: lexical items (local words, terms not in standard dictionaries); grammatical features (non-standard negation, pronoun use, verb agreement: "we was"); phonological representation (glottal stop rendered as apostrophe, h-dropping, vowel representation). ' +
      'Analysis: Trudgill\'s dialect continuum positions regional dialects on a spectrum from broadest vernacular to standard; dialect levelling describes the process by which geographically proximate dialects converge through contact. A strong analysis considers: does the speaker\'s age affect dialect density? Does context (two family members vs. a speaker addressing a stranger) affect dialect use? This links to audience design and style-shifting.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['dialect', 'Trudgill', 'dialect levelling', 'transcription', 'CA', 'phonology', 'grammar', 'data collection'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO4'],
  },

  {
    id: 'ial-hw-07',
    title: 'Draft Essay: Ethnicity and Language Identity in the UK',
    halfTerm: 2,
    weekNumber: 1,
    type: 'extended-writing',
    instructions:
      '<p>Write an 800-1000 word analytical essay responding to: <em>"To what extent does ethnicity determine language use in contemporary British society?"</em></p>' +
      '<ul>' +
      '<li>Engage with at least two of the following: MLE (Multicultural London English), AAVE influence on British youth language, code-switching studies, Ben Rampton\'s "language crossing" research.</li>' +
      '<li>Ensure you engage with counter-arguments -- avoid an overly deterministic position.</li>' +
      '<li>Submit with a 50-word bibliography (minimum three sources, APA format).</li>' +
      '</ul>',
    modelAnswer:
      'Band 4 criteria: engages with the complexity of the relationship (ethnicity shapes but does not determine); uses specific linguistic evidence (MLE features: innovative use of "man" as a discourse marker, TH-fronting, new prosodic patterns); references Rampton\'s "crossing" research to complicate ethnic determinism (speakers of different ethnic backgrounds adopt each other\'s linguistic features as a form of social performance, not ethnic identification). ' +
      'Counter-argument engagement: strong essays acknowledge that socioeconomic factors, peer networks, and media exposure all independently shape language use, making ethnicity one variable among many. Gilroy\'s concept of "conviviality" provides a useful theoretical frame for understanding how ethnicity and language interact in multicultural urban contexts without reducing one to the other. ' +
      'Bibliography: APA format strictly applied; all three minimum sources should be academic (not Wikipedia or GCSE revision sites).',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['MLE', 'ethnicity', 'language crossing', 'Rampton', 'AAVE', 'code-switching', 'Gilroy', 'essay'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3', 'WEN01.AO4'],
  },

  {
    id: 'ial-hw-08',
    title: 'Timed Practice: 45-Minute Language Analysis Response',
    halfTerm: 2,
    weekNumber: 2,
    type: 'analysis',
    instructions:
      '<p><strong>Timed practice -- complete under timed conditions (45 minutes, no notes).</strong></p>' +
      '<p>Analyse the linguistic strategies used in the provided extract from a BBC Radio 4 documentary on knife crime (transcript, 600 words).</p>' +
      '<p>Your response should address: register and audience; the construction of the subject (young men in urban areas) through grammatical choices; the use of reported speech and its effect; and what the text reveals about the ideological position of the broadcaster. (20 marks)</p>' +
      '<p>After completing the timed response, use your mark scheme to self-assess and write a 100-word reflection on your performance.</p>',
    modelAnswer:
      'Key analytical points: register -- formal but accessible (Radio 4 target audience: educated adult, not specialist); subject construction -- examine whether young men are grammatical agents or patients (transitivity analysis); reported speech -- consider whose voices are quoted, who is ventriloquised, and who is absent; ideology -- BBC\'s editorial positioning (claims of neutrality are themselves ideologically significant: the choice to air the documentary, the selection of voices, the framing questions all encode a perspective). ' +
      'Self-assessment reflection: rewards metacognitive engagement. Students should map their response against band descriptors (not just mark themselves out of 20) and identify specific gaps: "I analysed register but did not connect it to audience; I should have used the term \'transitivity\' and provided a worked example."',
    marks: 20,
    estimatedMinutes: 90,
    difficulty: 'secure',
    keywords: ['timed practice', 'documentary', 'transitivity', 'ideology', 'register', 'reported speech', 'BBC', 'self-assessment'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3'],
  },

  // ---------------------------------------------------------------------------
  // WEN02 Language Change -- Tasks 9-15
  // ---------------------------------------------------------------------------
  {
    id: 'ial-hw-09',
    title: 'Extended Reading Log: Language Change Theories',
    halfTerm: 2,
    weekNumber: 3,
    type: 'reading-response',
    instructions:
      '<p>Read Jean Aitchison\'s <em>Language Change: Progress or Decay?</em> (4th edition, 2012), Chapters 1-3.</p>' +
      '<ol>' +
      '<li>Write a 500-word reading log summarising Aitchison\'s three metaphors for language change (damp spoon, crumbling castle, infectious disease) and evaluating their rhetorical effectiveness. (10 marks)</li>' +
      '<li>Which of the three metaphors do you find most persuasive and why? (200 words, supported with linguistic evidence.) (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Reading log: Aitchison\'s three metaphors describe the most common prescriptivist anxieties -- careless usage (damp spoon), decay from a golden age (crumbling castle), contamination by foreign or lower-class influence (infectious disease). Her own position is descriptive and evolutionary: language change is inevitable, systematic, and not a sign of decay. ' +
      'Persuasion analysis: strong responses evaluate the rhetorical function of each metaphor (not just its accuracy). The infectious disease metaphor is arguably the most powerful because it invokes fear and moral panic -- two affective levers that prescriptivism routinely uses. However, Aitchison\'s point is that these metaphors are misleading, and the strongest responses will turn the evaluative question back on itself: which metaphor is most persuasive as a rhetorical device even while being most misleading as a description of linguistic reality?',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['Aitchison', 'language change', 'prescriptivism', 'metaphor', 'decay', 'reading log', 'evaluation'],
    linkedObjectives: ['WEN02.AO2', 'WEN02.AO3'],
  },

  {
    id: 'ial-hw-10',
    title: 'Data Collection: Tracking Slang Across Generations',
    halfTerm: 2,
    weekNumber: 4,
    type: 'research',
    instructions:
      '<p>Interview three people from different age groups (ideally: under 25, 40-55, 65+) using the following protocol: show each participant 10 slang terms (provided on the stimulus sheet) and ask them to: (a) indicate if they know the term; (b) provide a definition; (c) indicate if they use it; (d) indicate if they find it acceptable in formal contexts.</p>' +
      '<ol>' +
      '<li>Record your data in the provided table and calculate percentage recognition and usage rates by age group. (8 marks)</li>' +
      '<li>Write a 400-word preliminary analysis relating your findings to Labov\'s theory of age-grading or Trudgill\'s diffusion model. (12 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Data recording: all 10 terms x 3 participants x 4 questions = 120 data points; percentage calculations should be shown. ' +
      'Analysis: Labov\'s age-grading suggests some features are associated with adolescent speech and are shed as speakers age (not necessarily evidence of long-term change); Trudgill\'s diffusion model describes how innovations spread from a source population through social networks. A strong analysis will determine whether the data better supports age-grading (the older speakers knew the terms but do not use them, suggesting they were used in youth) or generational change (the oldest speakers have no knowledge of the terms, suggesting the items are genuinely new). ' +
      'Methodological reflection: small sample size; interviewer effect (participants may adjust their responses for a student researcher); the choice of slang terms by the researcher is not random and may skew results.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'developing',
    keywords: ['slang', 'age-grading', 'Labov', 'Trudgill', 'diffusion', 'generational change', 'interview', 'data collection'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO4'],
  },

  {
    id: 'ial-hw-11',
    title: 'Draft Essay: Is Globalisation the Dominant Driver of English Language Change?',
    halfTerm: 2,
    weekNumber: 5,
    type: 'extended-writing',
    instructions:
      '<p>Write an 800-1000 word essay responding to: <em>"Globalisation is the dominant driver of change in contemporary English. How far do you agree?"</em></p>' +
      '<ul>' +
      '<li>Argue a clear, sustained position.</li>' +
      '<li>Consider evidence for globalisation as a driver: American English, internet vocabulary, World Englishes.</li>' +
      '<li>Consider counter-arguments: internal drift, local identity reinforcement (dialect retention), social-media-driven slang among non-English speakers affecting English.</li>' +
      '<li>Reference at least one of: Crystal\'s "English as a Global Language"; Kachru\'s "Three Circles" model; Pennycook\'s post-colonial critique.</li>' +
      '</ul>',
    modelAnswer:
      'Band 4 criteria: the essay should not treat globalisation as an unambiguous force but should interrogate the term itself (whose globalisation? what counts as "dominant"?). Crystal\'s World Englishes framework is useful but should be evaluated: it has been criticised (Pennycook) for underweighting the colonial conditions that made English global. Kachru\'s Inner/Outer/Expanding Circle model provides a structural account of global English spread that can be used to argue that the dominant driver is not globalisation per se but specific geopolitical and economic power relations. ' +
      'Strong essays will note the paradox: globalisation simultaneously drives convergence (English as a lingua franca absorbing American vocabulary) and divergence (new World Englishes developing distinctive grammars and phonologies). This complexity prevents a simple agreement or disagreement with the claim and earns marks for nuanced argumentation.',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['globalisation', 'Crystal', 'Kachru', 'Pennycook', 'World Englishes', 'American English', 'language change', 'essay'],
    linkedObjectives: ['WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  {
    id: 'ial-hw-12',
    title: 'Historical Text Analysis: Shakespeare to the Present',
    halfTerm: 2,
    weekNumber: 6,
    type: 'analysis',
    instructions:
      '<p>Read the provided parallel extracts: (A) Shakespeare\'s <em>Hamlet</em> Act 3 Scene 1 ("To be or not to be" soliloquy); (B) a modern prose adaptation of the same passage by a Year 11 student; (C) a machine-generated contemporary version using GPT-4.</p>' +
      '<ol>' +
      '<li>Identify and analyse four specific grammatical or lexical changes between Extract A and the contemporary versions. (8 marks)</li>' +
      '<li>What do the differences between B (human) and C (AI) tell us about how language change is absorbed differently by humans and machines? (6 marks)</li>' +
      '<li>Reflect on what Shakespeare\'s English reveals about the process of standardisation in Early Modern English. (6 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Grammatical/lexical changes: (1) Second-person pronoun: "thou" (Shakespeare) vs. "you" (both B and C). (2) Verb morphology: "tak\'st" (contracted form) vs. regular forms. (3) Lexical density: Shakespeare\'s syntax is heavily embedded; both B and C reduce syntactic complexity. (4) Modal verbs: Shakespeare\'s use of "may" and "must" with Early Modern meanings contrasts with their current semantic range. ' +
      'Human vs. AI: a Year 11 student\'s adaptation shows idiosyncratic choices that reflect their own idiolect and contemporary teen register; the AI version produces statistically average contemporary English, ironing out idiolect. This reveals that human language change is driven by social identity and creativity, whereas AI language is driven by frequency distributions in training data -- a fundamental difference. ' +
      'Standardisation: Shakespeare\'s spelling inconsistency, flexible syntax, and fluid word class boundaries reflect pre-standardisation English. The 1604 First Quarto and 1623 First Folio show textual variation, undermining any notion of a fixed "standard" Shakespeare.',
    marks: 20,
    estimatedMinutes: 90,
    difficulty: 'mastery',
    keywords: ['Shakespeare', 'Early Modern English', 'standardisation', 'AI language', 'pronoun', 'verb morphology', 'historical text'],
    linkedObjectives: ['WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3'],
  },

  {
    id: 'ial-hw-13',
    title: 'Coursework Preparation: Language Change Investigation Plan',
    halfTerm: 3,
    weekNumber: 1,
    type: 'research',
    instructions:
      '<p>Prepare a full investigation plan (500 words) for a diachronic corpus study on a language change topic of your choice.</p>' +
      '<p>Your plan must include:</p>' +
      '<ul>' +
      '<li>Research question and two sub-questions</li>' +
      '<li>Corpus description: two time periods, text type, source, minimum 5000 words per period</li>' +
      '<li>Analytical methods: at least two (e.g., keyword frequency, grammatical annotation, collocate analysis)</li>' +
      '<li>Expected findings and how you will test them</li>' +
      '<li>A preliminary bibliography of three academic sources (APA format)</li>' +
      '</ul>' +
      '<p>Bring your plan to the next lesson for peer feedback before beginning data collection.</p>',
    modelAnswer:
      'A strong plan: the research question is specific, focused, and feasible within the word limits of the WEN04 coursework. E.g., "Has the frequency and function of the passive voice in British broadsheet editorials changed between 1990 and 2020?" is tighter and more investigable than "How has English changed?". ' +
      'Corpus description: corpora should be comparable (same text type across time periods); the source should be accessible and academically credible (a national newspaper archive rather than random internet pages). 5000 words per period is a minimum for quantitative patterns to emerge reliably. ' +
      'Analytical methods: justification is as important as selection -- why is keyword frequency appropriate? (Because it allows comparison of relative term salience across corpora without being distorted by corpus size.) ' +
      'Bibliography: 3 APA sources, all academic. Reward students who have found subject-specific sources (e.g., a corpus linguistics study on passives in journalism) rather than generic language change texts.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['investigation plan', 'diachronic', 'corpus', 'methodology', 'research question', 'coursework', 'APA', 'keyword frequency'],
    linkedObjectives: ['WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-14',
    title: 'Extended Reading Log: World Englishes and Post-Colonial Linguistics',
    halfTerm: 3,
    weekNumber: 2,
    type: 'reading-response',
    instructions:
      '<p>Read Alastair Pennycook\'s "The Cultural Politics of English as an International Language" (1994), Chapter 1, OR Braj Kachru\'s "The Alchemy of English" (1986), Chapter 2.</p>' +
      '<ol>' +
      '<li>500-word log summarising the central argument and its significance. (10 marks)</li>' +
      '<li>How does the chosen text challenge or complicate Crystal\'s more optimistic account of English as a global language? (250 words) (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Pennycook log: should capture the argument that the spread of English is inseparable from colonial power relations and cannot be understood in purely linguistic or pragmatic terms. English is not a neutral tool; it carries cultural capital and ideological baggage that disadvantages speakers of other languages. ' +
      'Kachru log: should capture the argument that non-native varieties of English (Outer Circle) are not deficient approximations of Inner Circle norms but legitimate, creative varieties with their own grammatical and stylistic standards. "Nativised" English is not an error -- it is a feature. ' +
      'Challenge to Crystal: Crystal\'s argument in "English as a Global Language" celebrates the spread and utility of English without fully confronting the power dynamics that enabled it. Pennycook would argue this is politically naive; Kachru would agree with Crystal on the vitality of World Englishes but would resist the Inner Circle\'s implied normativity. Strong responses hold this tension productively.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'mastery',
    keywords: ['Pennycook', 'Kachru', 'World Englishes', 'post-colonial', 'Crystal', 'global English', 'reading log'],
    linkedObjectives: ['WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  {
    id: 'ial-hw-15',
    title: 'Timed Practice: 45-Minute Language Change Essay',
    halfTerm: 3,
    weekNumber: 3,
    type: 'extended-writing',
    instructions:
      '<p><strong>Timed practice -- complete under exam conditions (45 minutes, notes permitted for this practice only).</strong></p>' +
      '<p>"Describe and evaluate the methods linguists use to study language change." (20 marks)</p>' +
      '<p>After the timed response, annotate your essay using the mark scheme to identify where you have met (or missed) each assessment objective. Submit the annotated version.</p>',
    modelAnswer:
      'Key content: corpora and diachronic corpora (BNC, COHA, Google Ngram Viewer); the comparative method in historical linguistics; sociolinguistic methods (variationist studies, Labov\'s stratification surveys); real-time vs. apparent-time studies; self-report questionnaires; perceptual dialectology. ' +
      'Evaluation of methods: corpora are large-scale and reproducible but over-represent written formal language; real-time studies are the gold standard but logistically demanding; apparent-time studies are efficient but assume age-grading is not occurring. Strong essays will argue that a mixed-methods approach is most reliable. ' +
      'Annotation task: students should mark their essay with AO labels at the margin (AO1 = knowledge and understanding; AO2 = applying frameworks; AO3 = comparing and evaluating; AO4 = methodological awareness). This metacognitive task is as important as the timed writing itself.',
    marks: 20,
    estimatedMinutes: 90,
    difficulty: 'secure',
    keywords: ['methods', 'corpora', 'apparent-time', 'real-time', 'Labov', 'diachronic', 'variationist', 'timed practice'],
    linkedObjectives: ['WEN02.AO2', 'WEN02.AO3', 'WEN02.AO4'],
  },

  // ---------------------------------------------------------------------------
  // WEN03 Crafting Language -- Tasks 16-22
  // ---------------------------------------------------------------------------
  {
    id: 'ial-hw-16',
    title: 'Extended Reading Log: Style in Non-Fiction Prose',
    halfTerm: 3,
    weekNumber: 4,
    type: 'reading-response',
    instructions:
      '<p>Read James Baldwin\'s essay "Notes of a Native Son" (1955) in full.</p>' +
      '<ol>' +
      '<li>Write a 500-word reading log identifying three distinctive aspects of Baldwin\'s prose style (e.g., sentence rhythm, lexical register, use of the first person). (10 marks)</li>' +
      '<li>Write a 200-word imitation of Baldwin\'s style on a topic of your choice, followed by a 100-word commentary explaining which techniques you employed. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Reading log: Baldwin\'s prose style is characterised by long, syntactically complex sentences that build through subordination and apposition -- mirroring the accumulation of historical weight he describes. His register oscillates between the intensely personal (first-person confession) and the abstractly political (racial analysis), creating a distinctive essayistic voice. His use of the second person ("You do not know") implicates the reader in the failure he diagnoses. ' +
      'Imitation: reward structural mimicry (long sentences, periodic structure, lexical register shift) more than thematic similarity. The commentary should use precise linguistic vocabulary to name what has been borrowed: "I used a periodic sentence structure -- delaying the main clause -- to create the same sense of deferred judgement that Baldwin employs." ' +
      'Common weakness: students produce thematically similar content without stylistic imitation. Stress that style is a formal property, not a content property.',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['Baldwin', 'style', 'non-fiction', 'sentence rhythm', 'imitation', 'reading log', 'periodic sentence', 'register'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-hw-17',
    title: 'Coursework Draft: Persuasive Writing (First Full Draft)',
    halfTerm: 3,
    weekNumber: 5,
    type: 'extended-writing',
    instructions:
      '<p>Submit the first full draft of your WEN03 coursework persuasive writing piece (800-1000 words).</p>' +
      '<p>Your piece must:</p>' +
      '<ul>' +
      '<li>Have a clearly defined audience and purpose (state these at the top of your draft).</li>' +
      '<li>Use at least four different rhetorical strategies, each noted in the margin with a brief label.</li>' +
      '<li>Be accompanied by a 200-word initial commentary explaining your key structural and linguistic choices.</li>' +
      '</ul>' +
      '<p>This draft will be returned with written teacher feedback before the final submission.</p>',
    modelAnswer:
      'Assessment focus: AO5 (writing) is weighted at 60% of the coursework mark; AO1 (commentary) at 40%. ' +
      'Band descriptors for draft feedback: Band 4 writing shows sustained rhetorical control, confident variation of sentence structure for effect, and precise lexical choice. Band 3 shows competent use of rhetoric but may slip in register or over-rely on one strategy. Band 2 shows awareness of audience but limited technical control. ' +
      'Commentary assessment: reward metalinguistic precision over quantity. A 200-word commentary that uses 10 accurate technical terms is more valuable than 400 words of paraphrase. Look for: naming the strategy, explaining its function, and connecting the choice to audience and purpose. ' +
      'Draft feedback should prioritise the two most impactful revisions the student can make, tied to specific band descriptors.',
    marks: 30,
    estimatedMinutes: 180,
    difficulty: 'secure',
    keywords: ['coursework', 'persuasive writing', 'rhetorical strategies', 'commentary', 'draft', 'AO5', 'audience', 'purpose'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-hw-18',
    title: 'Comparative Analysis: Two Newspaper Columns on the Same Event',
    halfTerm: 3,
    weekNumber: 6,
    type: 'analysis',
    instructions:
      '<p>Select two newspaper opinion columns from the same week responding to the same news event. These may be from the teacher-provided pack or from your own research (broadsheet or quality press only).</p>' +
      '<ol>' +
      '<li>Write a 600-word comparative analysis of the two columns addressing: register, rhetorical strategies, the construction of the writer\'s persona, and ideological positioning. (20 marks)</li>' +
      '</ol>' +
      '<p>Attach photocopies or printouts of both articles.</p>',
    modelAnswer:
      'Criteria for a strong analysis: uses specific quotation from both texts throughout (not just in one text with vague reference to the other); uses comparative discourse markers ("whereas", "by contrast", "similarly") rather than alternating between texts without synthesis; names and analyses specific linguistic features (not just "uses rhetorical questions" but explains the effect in this specific context). ' +
      'Register comparison: note whether both columns share a register (both broadsheet-formal) or differ (one polemical and colloquial, one measured and formal). If they differ, relate this to persona construction: what relationship does each writer construct with their reader? ' +
      'Ideological analysis: avoid simply labelling "left" or "right" -- instead, show through specific linguistic evidence (lexical choices, what is presupposed, who is quoted) how ideological positions are encoded. Refer to van Dijk\'s ideological square or Fairclough\'s concept of assumed social relations in text.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'mastery',
    keywords: ['newspaper column', 'comparative analysis', 'register', 'rhetoric', 'ideology', 'persona', 'van Dijk', 'Fairclough'],
    linkedObjectives: ['WEN03.AO1', 'WEN03.AO2'],
  },

  {
    id: 'ial-hw-19',
    title: 'Creative Writing: Short Story Opening (Coursework Preparation)',
    halfTerm: 4,
    weekNumber: 1,
    type: 'creative',
    instructions:
      '<p>Write the opening 500 words of a short story or narrative non-fiction piece intended for a literary magazine aimed at adult readers.</p>' +
      '<ul>' +
      '<li>Establish a distinctive narrative voice in the first paragraph.</li>' +
      '<li>Use at least one of the following structural techniques: in medias res, unreliable narrator, non-linear time.</li>' +
      '<li>Submit with a 150-word craft commentary explaining how you have used language to create your opening effects.</li>' +
      '</ul>',
    modelAnswer:
      'Model opening: in medias res -- begins mid-action or mid-thought; the reader is positioned before they are oriented. Narrative voice established through diction and syntax: a flat, affectless narrator creates unease; a hyper-observant narrator creates intimacy; a voice that directly addresses the reader creates complicity. ' +
      'Craft commentary expectations: identifies the specific narrative technique used and explains why it was chosen; names at least three linguistic features (e.g., "I opened with a stative construction -- \'She had always known\' -- to establish that the story is about knowledge already possessed but not yet understood by the reader."). ' +
      'Assessment of openings: the primary criterion is whether the first paragraph compels continued reading. A technically sophisticated but inert opening should receive a lower mark than an opening that is structurally simpler but tonally compelling.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['short story', 'narrative voice', 'in medias res', 'unreliable narrator', 'creative writing', 'craft commentary', 'structure'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-hw-20',
    title: 'Coursework Draft: Creative Writing (First Full Draft)',
    halfTerm: 4,
    weekNumber: 2,
    type: 'extended-writing',
    instructions:
      '<p>Submit the first full draft of your WEN03 coursework creative piece (800-1000 words, any genre).</p>' +
      '<p>Requirements:</p>' +
      '<ul>' +
      '<li>State the intended audience and purpose at the head of the draft.</li>' +
      '<li>Annotate five specific language choices in the margin with a brief note on intended effect.</li>' +
      '<li>Include a 300-word writer\'s commentary explaining your structural and linguistic decisions.</li>' +
      '</ul>' +
      '<p>First drafts are not graded; they receive written developmental feedback only.</p>',
    modelAnswer:
      'Developmental feedback focus: voice consistency (does the narrative voice remain stable? If it shifts, is this intentional?); pacing (sentence length and paragraph breaks as rhythm); imagery (is figurative language doing work, or is it decorative?); structural coherence (does the opening set up what follows?). ' +
      'Commentary assessment (for final draft): strong commentaries make specific, evidenced claims about linguistic choices. Weak commentaries describe content ("In this section, the character feels sad") rather than language ("The use of parataxis in the final paragraph -- short declarative sentences -- creates a sense of emotional numbness rather than explicitly naming the feeling"). ' +
      'The gap between the annotation notes and the commentary is diagnostically useful: students who write "creates tension" in a marginal note but cannot expand this into full analysis in the commentary reveal a mismatch between intuitive and analytical understanding. Feedback should explicitly name and address this gap.',
    marks: 30,
    estimatedMinutes: 180,
    difficulty: 'mastery',
    keywords: ['coursework', 'creative writing', 'draft', 'writer\'s commentary', 'pacing', 'voice', 'imagery', 'developmental feedback'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-hw-21',
    title: 'Peer Review: Exchanging Coursework Drafts',
    halfTerm: 4,
    weekNumber: 3,
    type: 'analysis',
    instructions:
      '<p>Exchange your WEN03 coursework draft (ial-hw-20) with a partner and complete a structured peer review.</p>' +
      '<ol>' +
      '<li>Written feedback (400 words) addressing: narrative voice or rhetorical consistency; structural effectiveness; three specific language choices and whether they achieve their stated intention (as described in the writer\'s commentary). (15 marks)</li>' +
      '<li>Based on feedback received, write a 200-word revision plan for your own draft, identifying the two most important revisions and justifying each against the WEN03 assessment criteria. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Peer review quality rubric: feedback is text-specific (quotes from the draft), evaluative rather than merely descriptive, and forward-looking (suggests concrete improvements). The best feedback identifies a tension between what the writer intended (as stated in their commentary) and what the text actually does -- this requires careful reading of both documents. ' +
      'Revision plan: should be specific and actionable, not vague ("make it better"). E.g., "My reviewer noted that my opening metaphor of a \'cracked mirror\' was not sustained -- it appears once then disappears. I will revise paragraphs 2 and 5 to echo the mirror motif, which will also improve structural coherence (AO5, band 4: \'controlled and sophisticated structural choices\')." ' +
      'Note: the peer review process is itself assessed as part of WEN03 -- it develops the metalinguistic awareness that underpins commentary writing.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['peer review', 'coursework', 'feedback', 'revision plan', 'structural coherence', 'motif', 'AO5', 'metalinguistic'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  {
    id: 'ial-hw-22',
    title: 'Timed Practice: WEN03 Unseen Writing Task',
    halfTerm: 4,
    weekNumber: 4,
    type: 'extended-writing',
    instructions:
      '<p><strong>Timed practice -- complete under exam conditions (50 minutes).</strong></p>' +
      '<p>Write a speech to be delivered to your year group arguing that <em>"Artificial intelligence will never replace human creativity."</em></p>' +
      '<p>Your response will be assessed on: crafting of language for spoken delivery (including prosodic features signalled in writing); rhetorical effectiveness; register appropriateness for a sixth-form audience. (30 marks)</p>' +
      '<p>Self-assessment: after completing the timed piece, write 100 words identifying which rhetorical strategy you feel was most effective and why.</p>',
    modelAnswer:
      'Assessed criteria: crafting for spoken delivery (use of repetition, rhetorical questions, direct address, tricolon -- features that translate to the ear); rhetorical structure (Aristotle\'s three-part structure: exordium, narratio, peroratio -- or modern equivalents); register (formal enough for a public speech; accessible enough for a peer audience). ' +
      'Common weaknesses: essays that read as written texts rather than speeches (no address, no prosodic signalling); over-reliance on one rhetorical device; failure to engage with the counter-argument (AI creativity). ' +
      'Self-assessment: reward specific identification of a strategy (naming it, locating it in the text, explaining why it worked). Penalise vague self-praise. A student who identifies that their tricolon fell flat because the three items were not semantically parallel demonstrates sophisticated metalinguistic awareness.',
    marks: 30,
    estimatedMinutes: 90,
    difficulty: 'secure',
    keywords: ['speech', 'timed practice', 'rhetorical strategy', 'prosodic features', 'tricolon', 'register', 'AI creativity', 'self-assessment'],
    linkedObjectives: ['WEN03.AO5', 'WEN03.AO1'],
  },

  // ---------------------------------------------------------------------------
  // WEN04 Language Investigation -- Tasks 23-30
  // ---------------------------------------------------------------------------
  {
    id: 'ial-hw-23',
    title: 'Extended Reading Log: Research Methodology in Linguistics',
    halfTerm: 4,
    weekNumber: 5,
    type: 'reading-response',
    instructions:
      '<p>Read Chapters 1-2 of John Creswell\'s <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (4th edition, 2014).</p>' +
      '<ol>' +
      '<li>Write a 400-word reading log summarising the key differences between qualitative and quantitative research paradigms and their respective strengths and weaknesses. (10 marks)</li>' +
      '<li>For your own WEN04 investigation, decide whether your primary approach will be qualitative, quantitative, or mixed methods. Write 200 words justifying your choice with reference to Creswell. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Reading log: qualitative approaches prioritise depth over breadth, contextual meaning over statistical significance, and are suited to questions beginning "how" or "why". Quantitative approaches prioritise reproducibility, generalisability, and statistical significance, and are suited to questions beginning "how much" or "how many". Mixed methods (Creswell\'s primary focus) integrate both, using each to compensate for the other\'s weaknesses. ' +
      'Justification: students choosing quantitative should explain how their research question lends itself to frequency/proportion analysis; those choosing qualitative should explain why contextual depth is necessary (e.g., a study of conversational implicature cannot be reduced to frequencies); those choosing mixed should explain the sequential or concurrent design they will use. ' +
      'Common weakness: students choose mixed methods because it sounds more sophisticated without a principled rationale. Creswell explicitly warns against this. Reward clear, argued choices over hedged ones.',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'developing',
    keywords: ['Creswell', 'qualitative', 'quantitative', 'mixed methods', 'research paradigm', 'methodology', 'reading log'],
    linkedObjectives: ['WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-24',
    title: 'Data Collection: Building Your Investigation Corpus',
    halfTerm: 4,
    weekNumber: 6,
    type: 'research',
    instructions:
      '<p>Following your approved investigation plan (ial-hw-13), collect the first 50% of your target corpus.</p>' +
      '<ol>' +
      '<li>Document your data collection process: record the source, date of collection, word count, and any deviations from your original plan. (5 marks)</li>' +
      '<li>Conduct a pilot analysis on a 500-word sample of your corpus. Apply your chosen analytical framework and note any difficulties or unexpected patterns. (10 marks)</li>' +
      '<li>Write a 200-word methodological reflection: what challenges have you encountered and how have you addressed them? (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Data documentation: a systematic log is a WEN04 requirement (it forms part of the appendix). Every text should be sourced with full publication details; deviations from the plan should be noted and justified (e.g., "the planned source was paywalled; I substituted a comparable text from an accessible archive"). ' +
      'Pilot analysis: the purpose is to test whether the analytical framework is workable before committing to the full corpus. Common discoveries: the framework is too coarse-grained (cannot capture the variation in the data); the data does not contain the features expected; the research question needs refining. These discoveries are positive -- they demonstrate methodological reflexivity. ' +
      'Methodological reflection: reward honesty. A student who notes that their initial hypothesis appears to be contradicted by the pilot data, and explains how they will adjust their analysis accordingly, demonstrates the intellectual courage that WEN04 rewards.',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'secure',
    keywords: ['corpus building', 'pilot analysis', 'data collection', 'methodological reflection', 'WEN04', 'coursework', 'framework'],
    linkedObjectives: ['WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-25',
    title: 'Academic Writing Practice: Abstract and Introduction',
    halfTerm: 5,
    weekNumber: 1,
    type: 'extended-writing',
    instructions:
      '<p>Write the abstract (150 words) and introduction (400 words) for your WEN04 investigation.</p>' +
      '<ul>' +
      '<li>The abstract must summarise: topic, methodology, key findings (anticipated if not yet complete), and significance.</li>' +
      '<li>The introduction must: establish the topic\'s relevance, review relevant prior research (minimum three sources), and state the research question clearly.</li>' +
      '<li>Use academic citation conventions (APA 7th edition) throughout.</li>' +
      '</ul>',
    modelAnswer:
      'Abstract assessment: 150 words is a tight constraint that rewards precision. Students often write abstracts that are too vague ("This investigation looks at language change") or that describe methodology without stating findings. Model abstract structure: topic sentence (one sentence); methodology summary (two to three sentences); key findings (two sentences); significance/implications (one sentence). ' +
      'Introduction assessment: the literature review within the introduction should synthesise (not merely list) prior research. Each source should be connected to the research question: "Smith (2015) found that... however, her corpus was limited to formal registers -- the current investigation extends this to informal digital communication." ' +
      'APA 7th edition: common errors include: no page number for direct quotations; ampersand in text ("Smith & Jones" should be "Smith and Jones" in running text); italics absent from journal titles; DOI formatting errors. Treat citation accuracy as an AO1 indicator (precision in scholarship).',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['abstract', 'introduction', 'APA', 'academic writing', 'literature review', 'WEN04', 'coursework', 'citation'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-26',
    title: 'Data Analysis and Discussion: Draft Findings Section',
    halfTerm: 5,
    weekNumber: 2,
    type: 'extended-writing',
    instructions:
      '<p>Write the data analysis and discussion sections of your WEN04 investigation (combined 800-1000 words).</p>' +
      '<ul>' +
      '<li>Present your key findings with appropriate evidence (tables, frequency counts, quoted extracts -- as relevant to your method).</li>' +
      '<li>Interpret each finding with reference to your chosen linguistic framework(s).</li>' +
      '<li>Connect your findings to the prior research reviewed in your introduction.</li>' +
      '<li>Acknowledge at least two limitations of your analysis.</li>' +
      '</ul>',
    modelAnswer:
      'Assessment priorities: the analysis section should distinguish clearly between what the data shows (description) and what it means (interpretation). A common failure is to present a frequency table and then claim far more than the data supports. ' +
      'Framework application: the chosen framework must do analytical work -- it should produce insights that would not be available without it. If CDA is chosen, the analysis should show how specific textual features encode ideological assumptions; if CA is chosen, specific transcript features (overlaps, pauses, topic control) should be connected to interactional power. ' +
      'Connection to prior research: findings should be positioned relative to existing studies -- do they confirm, extend, complicate, or contradict? This is where the literature review pays off. A finding that "agrees with Smith (2015)" is less interesting than one that "extends Smith\'s finding to a new register" or "partially contradicts Smith\'s model in the following respect." ' +
      'Limitations: genuine methodological limitations (sample size, corpus balance, observer\'s paradox) are required; students who claim no limitations have not thought carefully enough.',
    marks: 25,
    estimatedMinutes: 180,
    difficulty: 'mastery',
    keywords: ['findings', 'discussion', 'data analysis', 'framework', 'limitation', 'WEN04', 'coursework', 'interpretation'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-27',
    title: 'Peer Review: WEN04 Investigation Draft',
    halfTerm: 5,
    weekNumber: 3,
    type: 'analysis',
    instructions:
      '<p>Exchange your WEN04 investigation draft with a partner and provide structured peer review feedback.</p>' +
      '<ol>' +
      '<li>Write 400-500 words of feedback addressing: clarity and focus of the research question; appropriateness of methodology; quality of data analysis; quality of academic writing (referencing, precision of language, argument structure). (15 marks)</li>' +
      '<li>In response to feedback received on your draft, write a prioritised revision plan (200 words) mapping each revision to a specific assessment criterion. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Peer feedback rubric: a good peer reviewer reads the investigation as an examiner would, not as a friend. They ask: is the research question answered by the data? Does the analysis actually use the frameworks claimed in the methodology? Are the limitations genuine and honestly stated? Is the academic writing register consistent throughout (no slippage into informal register)? ' +
      'Specific feedback is more useful than general: "Your analysis of Extract 3 makes a claim about politeness strategy but does not connect it to Brown and Levinson\'s model as stated in your methodology section" is actionable; "more analysis needed" is not. ' +
      'Revision plan: must prioritise (students cannot revise everything simultaneously). The plan should identify the single most important structural revision (often: the research question needs tightening or the discussion section needs to connect more explicitly to the literature), the most important analytical revision (often: applying the framework more systematically), and one writing-level revision (often: consistent use of academic register).',
    marks: 20,
    estimatedMinutes: 120,
    difficulty: 'secure',
    keywords: ['peer review', 'WEN04', 'investigation', 'revision plan', 'assessment criteria', 'academic writing', 'feedback'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-28',
    title: 'Final Coursework Preparation: Self-Evaluation Against Mark Scheme',
    halfTerm: 5,
    weekNumber: 4,
    type: 'revision',
    instructions:
      '<p>Using the official Edexcel WEN04 mark scheme (provided), complete a detailed self-evaluation of your investigation draft.</p>' +
      '<ol>' +
      '<li>For each assessment objective (AO1-AO4), identify the band your draft currently sits in and provide a quotation from your own work as evidence. (10 marks)</li>' +
      '<li>For each AO, identify one specific revision that would move you into the next band, and write the revised passage (100 words per AO, 400 words total). (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Self-evaluation model: this is a high-cognition task requiring the student to occupy two positions simultaneously -- writer and examiner. The band descriptors should be quoted verbatim in the self-evaluation to prevent vague claims. ' +
      'E.g., for AO3 (analysis and interpretation): if the student is in Band 2 ("some relevant analysis"), they must identify why their analysis is "some" rather than "sustained" (Band 3) or "perceptive" (Band 4), and produce a revised passage that demonstrates the upgrade. ' +
      'Revised passages: these are the most valuable product of this task -- they represent actionable, specific improvements to the actual coursework. Mark generously for genuine self-awareness and specific revision, even if the revised passage does not yet reach Band 4.',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['self-evaluation', 'mark scheme', 'Edexcel', 'WEN04', 'band descriptors', 'revision', 'AO1', 'AO2', 'AO3', 'AO4'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO3', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-29',
    title: 'Extended Reading Log: Key Linguistics Text (Student Choice)',
    halfTerm: 5,
    weekNumber: 5,
    type: 'reading-response',
    instructions:
      '<p>Choose ONE text from the reading list that you have not yet read (minimum 50 pages). This should be a text directly relevant to your WEN04 investigation topic.</p>' +
      '<ol>' +
      '<li>Write a 600-word critical reading log: summarise the argument, evaluate the methodology (if empirical), and explain how it informs your investigation. (15 marks)</li>' +
      '<li>Write a 150-word additional bibliography entry in APA 7th edition format, including a one-sentence annotation explaining the text\'s relevance to your investigation. (5 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Reading log quality markers: the log is critical, not merely descriptive. It evaluates the text\'s argument -- where it is persuasive, where it overreaches, where its methodology is strong or limited. A student who engages critically with a text they admire (noting both its strengths and its blind spots) demonstrates higher-order reading than one who simply summarises. ' +
      'Connection to investigation: must be substantive and specific. "This text is relevant because it also discusses language" is inadequate. "Myers-Scotton\'s analysis of conversation-internal code-switching in Chapter 3 provides the framework I will use to annotate my transcripts, though I will need to adapt her matrix language criteria for a British Punjabi context" is substantive. ' +
      'APA annotation: the annotated bibliography entry format should follow APA 7th with the annotation on a new line, not indented, in present tense. Award marks for format accuracy and for the precision of the relevance claim.',
    marks: 20,
    estimatedMinutes: 150,
    difficulty: 'mastery',
    keywords: ['reading log', 'critical reading', 'annotated bibliography', 'APA', 'independent research', 'WEN04', 'methodology'],
    linkedObjectives: ['WEN04.AO1', 'WEN04.AO2', 'WEN04.AO4'],
  },

  {
    id: 'ial-hw-30',
    title: 'Exam Preparation: Timed Full-Paper Practice (WEN01 or WEN02)',
    halfTerm: 5,
    weekNumber: 6,
    type: 'revision',
    instructions:
      '<p><strong>Full timed exam practice -- complete under strict exam conditions (2 hours, no notes).</strong></p>' +
      '<p>Complete a full past paper from either WEN01 (Language and Context) or WEN02 (Language Change), sourced from the Edexcel past paper archive.</p>' +
      '<p>After the timed practice:</p>' +
      '<ol>' +
      '<li>Mark your own responses using the mark scheme, assigning a mark to each question and providing a brief rationale for each mark awarded. (10 marks for self-marking accuracy)</li>' +
      '<li>Write a 300-word exam reflection identifying: (a) which question type you found most challenging and why; (b) two specific content gaps to address before the real exam; (c) one strategy for improving your time management in the exam. (10 marks)</li>' +
      '</ol>',
    modelAnswer:
      'Self-marking: students should use the mark scheme band descriptors, not just the indicative content. A response that hits all the indicative content points in bullet-point form but lacks analytical coherence should not receive Band 4. ' +
      'Exam reflection quality: a strong reflection is honest, specific, and diagnostic. It does not simply say "I ran out of time" but analyses why (over-writing on Q1, insufficient planning for Q3, unfamiliar text type). Content gap identification should be precise: not "I need to revise language change" but "I could not remember Labov\'s specific findings from the New York department store study and could not use them as evidence." ' +
      'Time management strategy: should be specific and implementable. E.g., "I will allocate 5 minutes of planning time per question and set a watch alert at the 60-minute mark to check my progress." Vague strategies ("manage my time better") attract no marks. ' +
      'The reflection is as important as the practice paper: metacognitive awareness of exam performance is a predictor of improvement.',
    marks: 20,
    estimatedMinutes: 180,
    difficulty: 'mastery',
    keywords: ['exam practice', 'past paper', 'self-marking', 'exam reflection', 'time management', 'revision', 'WEN01', 'WEN02'],
    linkedObjectives: ['WEN01.AO1', 'WEN01.AO2', 'WEN01.AO3', 'WEN02.AO1', 'WEN02.AO2', 'WEN02.AO3'],
  },
];
