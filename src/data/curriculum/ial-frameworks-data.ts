// IAL A-Level English Language: Linguistic Frameworks and Language Theories Reference Data

export interface LinguisticFramework {
  id: string;
  name: string;
  abbreviation: string;
  definition: string;
  keyTerms: { term: string; definition: string; example: string }[];
  analyticQuestions: string[];
  examApplication: string;
  theorists: { name: string; theory: string; keyIdea: string }[];
}

export interface LanguageTheory {
  id: string;
  theorist: string;
  theory: string;
  keyPoints: string[];
  critiques: string[];
  examApplication: string;
  unitRelevance: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// LINGUISTIC FRAMEWORKS
// ─────────────────────────────────────────────────────────────────────────────

export const linguisticFrameworks: LinguisticFramework[] = [
  {
    id: "phonology",
    name: "Phonology",
    abbreviation: "PHON",
    definition:
      "The study of the sound system of a language, including the inventory of sounds (phonemes), how they combine, and how they vary in connected speech. Phonology focuses on meaningful sound contrasts rather than mere physical articulation.",
    keyTerms: [
      {
        term: "Phoneme",
        definition:
          "The smallest unit of sound that can distinguish meaning in a language. English has approximately 44 phonemes despite having only 26 letters.",
        example:
          "The words 'cat' and 'bat' differ by one phoneme (/k/ vs /b/), producing different meanings.",
      },
      {
        term: "Allophone",
        definition:
          "A phonetic variant of a phoneme that does not change meaning. Allophones are conditioned by their phonological environment.",
        example:
          "The /p/ in 'pin' is aspirated [p(h)] while the /p/ in 'spin' is unaspirated [p]; both are allophones of the phoneme /p/.",
      },
      {
        term: "Stress",
        definition:
          "The relative emphasis placed on a syllable within a word (lexical stress) or on a word within an utterance (sentence stress). Stressed syllables are louder, longer, and higher in pitch.",
        example:
          "'PERmit' (noun) vs 'perMIT' (verb) -- stress placement changes the word class and meaning.",
      },
      {
        term: "Intonation",
        definition:
          "The rise and fall of pitch across an utterance. Intonation conveys meaning, attitude, and grammatical information such as question vs statement.",
        example:
          "A rising tone on 'Really?' signals a genuine question; a falling tone signals scepticism or confirmation-seeking.",
      },
      {
        term: "Elision",
        definition:
          "The omission of sounds in connected speech to ease articulation. Common in rapid, informal speech.",
        example:
          "'Next please' often becomes 'nex please' with elision of the final /t/ in 'next'.",
      },
      {
        term: "Assimilation",
        definition:
          "A process in connected speech where a sound takes on features of an adjacent sound, making pronunciation smoother.",
        example:
          "'Ten buses' often sounds like 'tem buses' because /n/ assimilates to the bilabial /b/ that follows.",
      },
      {
        term: "Rhythm",
        definition:
          "The pattern of stressed and unstressed syllables across an utterance. English tends toward stress-timed rhythm, where stressed syllables occur at roughly equal intervals.",
        example:
          "Poetry exploits rhythmic patterns: 'Shall I COMpare THEE to a SUMmer's DAY' uses iambic pentameter.",
      },
      {
        term: "Rhyme",
        definition:
          "The repetition of identical or similar sounds at the end of words, most commonly at line endings in poetry. Used for aesthetic effect and to create cohesion.",
        example:
          "In a nursery rhyme: 'Jack and Jill went up the HILL / To fetch a pail of WATER' (near rhyme / slant rhyme).",
      },
      {
        term: "Onomatopoeia",
        definition:
          "Words whose pronunciation mimics or evokes the sound they describe. Creates auditory imagery in written and spoken texts.",
        example:
          "'Buzz', 'hiss', 'crash', and 'murmur' all sound like the phenomena they describe.",
      },
      {
        term: "Alliteration",
        definition:
          "The repetition of the same initial consonant sound in closely placed words. Used for emphasis, memorability, and aesthetic effect.",
        example:
          "'Peter Piper picked a peck of pickled pepper' repeats the /p/ phoneme for comic effect.",
      },
      {
        term: "Assonance",
        definition:
          "The repetition of vowel sounds in nearby words without the consonants needing to match. Creates internal music in poetry and rhetoric.",
        example:
          "'The rain in Spain stays mainly in the plain' repeats the /eI/ vowel sound.",
      },
    ],
    analyticQuestions: [
      "What sounds are foregrounded and what effect does this create?",
      "How does stress and intonation affect meaning in this spoken text?",
      "Are there patterns of alliteration, assonance, or onomatopoeia and what is their purpose?",
      "How do features of connected speech (elision, assimilation) reflect the register or relationship between speakers?",
      "Does the rhythm of this text feel regular or irregular, and why?",
      "How does the speaker's accent or dialect manifest phonologically?",
    ],
    examApplication:
      "In Unit 1 (language analysis) and Unit 4 (spoken language), phonology is assessed when analysing speech transcripts, poetry, or rhetoric. Comment on how sounds reinforce meaning, establish tone, or signal social identity. In spoken language data, note features of connected speech as markers of informality or regional accent. Always link phonological choices to purpose and context rather than listing features in isolation.",
    theorists: [
      {
        name: "Daniel Jones",
        theory: "Phoneme theory and received pronunciation",
        keyIdea:
          "Codified the concept of the phoneme and described Received Pronunciation (RP) as a prestige accent in British English, influencing how accents are evaluated socially.",
      },
      {
        name: "Peter Trudgill",
        theory: "Accent variation and social factors",
        keyIdea:
          "Demonstrated that phonological variation (accent features) correlates with social class, region, gender, and identity, showing that no accent is inherently superior.",
      },
      {
        name: "David Crystal",
        theory: "Prosodic features in communication",
        keyIdea:
          "Argued that prosodic features -- stress, rhythm, intonation, tempo, and pause -- carry as much communicative meaning as the words themselves.",
      },
    ],
  },

  {
    id: "lexis-semantics",
    name: "Lexis and Semantics",
    abbreviation: "LEX/SEM",
    definition:
      "Lexis refers to the vocabulary of a language -- its words and their formation. Semantics is the study of meaning: how words, phrases, and sentences convey meaning, including connotation, ambiguity, and sense relations between words.",
    keyTerms: [
      {
        term: "Denotation",
        definition:
          "The literal, dictionary definition of a word -- its core, objective meaning stripped of emotional or cultural associations.",
        example:
          "'Home' denotes a place where a person lives, but its connotations extend far beyond this.",
      },
      {
        term: "Connotation",
        definition:
          "The secondary, associative, or emotional meanings a word carries beyond its denotation. Connotations can be positive, negative, or neutral and vary by culture and context.",
        example:
          "'Slim' and 'skinny' both denote thinness, but 'slim' carries positive connotations while 'skinny' may imply unattractiveness.",
      },
      {
        term: "Semantic field",
        definition:
          "A group of words related in meaning because they refer to the same area of experience or subject. Analysing semantic fields reveals thematic focus.",
        example:
          "In a war poem: 'trenches', 'shells', 'mud', 'rifles', 'barrage' all belong to the semantic field of military conflict.",
      },
      {
        term: "Collocation",
        definition:
          "The tendency of words to occur together regularly. Native speakers develop strong expectations about which words naturally co-occur.",
        example:
          "'Rancid butter' collocates naturally; 'rancid joy' is an unusual collocation that creates a striking effect.",
      },
      {
        term: "Synonym",
        definition:
          "A word with the same or very similar meaning to another. True synonyms (identical meaning in all contexts) are rare; most synonyms differ in connotation, register, or frequency.",
        example:
          "'Angry', 'furious', 'irate', and 'livid' are synonyms that differ in intensity and register.",
      },
      {
        term: "Antonym",
        definition:
          "A word that is opposite in meaning to another. Types include gradable antonyms (tall/short), complementary antonyms (alive/dead), and relational antonyms (teacher/student).",
        example:
          "'Hot' and 'cold' are gradable antonyms; 'married' and 'unmarried' are complementary antonyms.",
      },
      {
        term: "Hyponym",
        definition:
          "A word whose meaning is included within the meaning of a more general word (the hypernym). The relationship is one of class inclusion.",
        example:
          "'Spaniel', 'labrador', and 'poodle' are all hyponyms of the hypernym 'dog'.",
      },
      {
        term: "Metaphor",
        definition:
          "A figure of speech in which one thing is described as being another, transferring qualities between them. Metaphors shape understanding by mapping familiar concepts onto less familiar ones.",
        example:
          "'Life is a journey' frames life in terms of travel, implying direction, obstacles, and destinations.",
      },
      {
        term: "Register",
        definition:
          "A variety of language used in a particular social or professional context, defined by field (subject matter), tenor (relationship between participants), and mode (spoken/written).",
        example:
          "A medical consultation uses specialised lexis ('myocardial infarction') in a formal tenor very different from casual conversation about the same topic.",
      },
      {
        term: "Amelioration",
        definition:
          "A process of semantic change whereby a word's meaning becomes more positive or socially acceptable over time.",
        example:
          "'Knight' originally meant 'servant boy' but ameliorated to mean a nobleman of high honour.",
      },
      {
        term: "Pejoration",
        definition:
          "A process of semantic change whereby a word acquires more negative connotations over time.",
        example:
          "'Villain' originally meant 'farm worker' but pejorated to mean a person guilty of a crime or wickedness.",
      },
      {
        term: "Neologism",
        definition:
          "A newly coined word or phrase, or an existing word given a new meaning, often arising from technological, social, or cultural change.",
        example:
          "'Selfie', 'ghosting', and 'doomscrolling' are recent neologisms arising from digital culture.",
      },
    ],
    analyticQuestions: [
      "What semantic field dominates this text and what does it reveal about the writer's/speaker's world view?",
      "Are words chosen for their denotative or connotative meanings, and what effect does this create?",
      "How do metaphors shape the reader's/listener's understanding of the topic?",
      "What does the register of this text tell us about the audience and context?",
      "Are there examples of deliberate lexical ambiguity or irony?",
      "How does word choice position the reader ideologically?",
    ],
    examApplication:
      "Lexis and semantics are central to almost every unit. In Unit 1 analysis, identify semantic fields and comment on connotation to show how language constructs meaning and ideology. In Unit 2 (language variation), track semantic change over time or across social groups. In Units 3 and 4, discuss how writers and speakers select vocabulary to achieve specific effects on their audience. Always move from identification to interpretation -- explain WHY a lexical choice is significant.",
    theorists: [
      {
        name: "George Lakoff and Mark Johnson",
        theory: "Conceptual metaphor theory",
        keyIdea:
          "In 'Metaphors We Live By' (1980), they argued that metaphor is not merely decorative but structures our conceptual system -- we understand abstract concepts through physical or concrete ones (e.g., 'argument is war').",
      },
      {
        name: "Benjamin Lee Whorf and Edward Sapir",
        theory: "Sapir-Whorf hypothesis (linguistic relativity)",
        keyIdea:
          "The vocabulary available in a language shapes or constrains the thoughts and perceptions of its speakers -- the words we have influence what we notice and how we categorise the world.",
      },
      {
        name: "Norman Fairclough",
        theory: "Critical discourse analysis",
        keyIdea:
          "Lexical choices in texts are never neutral; they reflect and reproduce ideological positions and power relations. Analysing word choice reveals whose interests a text serves.",
      },
    ],
  },

  {
    id: "grammar",
    name: "Grammar",
    abbreviation: "GRAM",
    definition:
      "The structural rules governing the composition of sentences, phrases, and words in a language. Grammar encompasses morphology (word structure) and syntax (sentence structure), and describes how language units are combined to create meaning.",
    keyTerms: [
      {
        term: "Syntax",
        definition:
          "The set of rules governing how words are arranged to form grammatically correct sentences and phrases. Different languages have different canonical word orders.",
        example:
          "Standard English follows SVO order: 'The cat (S) chased (V) the mouse (O).' Inverting this creates a marked, literary effect.",
      },
      {
        term: "Morphology",
        definition:
          "The study of the internal structure of words, including how morphemes (the smallest meaningful units) combine to form words through inflection and derivation.",
        example:
          "'Unhappiness' contains three morphemes: 'un-' (prefix, negation) + 'happy' (root) + '-ness' (suffix, nominalisation).",
      },
      {
        term: "Noun phrase",
        definition:
          "A phrase with a noun or pronoun as its head, which may include pre-modifiers (articles, adjectives) and post-modifiers (prepositional phrases, relative clauses).",
        example:
          "'The tall woman in the red coat' is a noun phrase with pre-modifiers ('the', 'tall') and a post-modifier ('in the red coat').",
      },
      {
        term: "Verb phrase",
        definition:
          "A phrase centred on a verb, potentially including auxiliaries, adverbs, and complements. Verb phrases carry tense, aspect, voice, and mood.",
        example:
          "'Has been carefully considering' is a verb phrase showing perfect aspect, progressive aspect, and adverbial modification.",
      },
      {
        term: "Clause",
        definition:
          "A grammatical unit containing at least a subject and a verb. Clauses can be main (independent) or subordinate (dependent on a main clause).",
        example:
          "In 'She left because she was tired', 'She left' is the main clause and 'because she was tired' is a subordinate adverbial clause.",
      },
      {
        term: "Coordination",
        definition:
          "The linking of clauses, phrases, or words of equal grammatical status using coordinating conjunctions (and, but, or, nor, yet, so).",
        example:
          "'He ran fast but he arrived late' coordinates two main clauses of equal weight with 'but'.",
      },
      {
        term: "Subordination",
        definition:
          "The embedding of a subordinate clause within a main clause, creating a hierarchical relationship. Subordination creates complex sentences and can show logical relationships.",
        example:
          "'Although it was raining, they continued the match' embeds a concessive subordinate clause within the main clause.",
      },
      {
        term: "Passive voice",
        definition:
          "A grammatical construction in which the object of an action becomes the grammatical subject. The passive can omit the agent, allowing responsibility to be obscured.",
        example:
          "'Mistakes were made' (passive, no agent named) vs 'We made mistakes' (active, agent named). Politicians favour the agentless passive.",
      },
      {
        term: "Deixis",
        definition:
          "Words whose interpretation depends on context, particularly the identity of the speaker, listener, location, and time. Deictic expressions 'point' to elements of the situation.",
        example:
          "Pronouns ('I', 'you'), demonstratives ('this', 'that'), and adverbs ('here', 'now') are deictic expressions that shift meaning with context.",
      },
      {
        term: "Anaphora (grammatical)",
        definition:
          "The use of a word or phrase (usually a pronoun) to refer back to something already mentioned in the text. Anaphora creates cohesion and avoids repetition.",
        example:
          "In 'Maria arrived late. She apologised immediately', 'She' is an anaphoric reference to 'Maria'.",
      },
      {
        term: "Nominalisation",
        definition:
          "The process of converting a verb or adjective into a noun or noun phrase. Nominalisation is associated with formal, bureaucratic, and academic registers and can obscure agency.",
        example:
          "'The government decided to reduce funding' becomes 'The government's decision involved a reduction in funding' -- the actions are nominalised.",
      },
      {
        term: "Parallelism",
        definition:
          "The repetition of grammatical structure across successive clauses or sentences. Creates rhythm, balance, and emphasis in both written and spoken texts.",
        example:
          "Martin Luther King's 'I have a dream...' speech uses parallelism extensively to build rhetorical momentum and memorability.",
      },
    ],
    analyticQuestions: [
      "What sentence types dominate (simple, compound, complex) and what effect does this create?",
      "How does the use of active vs passive voice affect how agency and responsibility are represented?",
      "Are there patterns of grammatical parallelism and what rhetorical purpose do they serve?",
      "How does sentence length and structure contribute to the pace and tone of the text?",
      "What do modifications within noun phrases tell us about the writer's focus or attitude?",
      "How is deixis used to position the reader/listener in relation to the text?",
    ],
    examApplication:
      "Grammar analysis is assessed in all IAL units. In Unit 1 close analysis, comment on sentence structure to show how writers control pacing, emphasis, and argument. Note how passive constructions obscure agency in political or media texts. In Unit 2, examine grammatical variation across dialects (e.g., multiple negation, non-standard verb forms). In Units 3 and 4, grammar choices demonstrate control of form for effect. Always link structural observations to meaning and purpose.",
    theorists: [
      {
        name: "Noam Chomsky",
        theory: "Transformational generative grammar",
        keyIdea:
          "All human languages share a deep structure governed by Universal Grammar, an innate cognitive capacity. Surface structures vary, but the underlying rules are universal and biologically specified.",
      },
      {
        name: "Michael Halliday",
        theory: "Systemic functional grammar",
        keyIdea:
          "Grammar is a set of choices that serve three simultaneous metafunctions: ideational (representing the world), interpersonal (enacting relationships), and textual (organising messages). Every grammatical choice is meaningful.",
      },
      {
        name: "David Crystal",
        theory: "Descriptive vs prescriptive grammar",
        keyIdea:
          "Linguists should describe how grammar is actually used by speakers rather than prescribe how it 'should' be used. Variation is natural and systematic, not evidence of decline.",
      },
    ],
  },

  {
    id: "discourse",
    name: "Discourse",
    abbreviation: "DISC",
    definition:
      "Discourse refers to language in use above the level of the sentence -- how stretches of spoken or written language are organised and structured to create coherent, meaningful communication. Discourse analysis examines cohesion, coherence, genre conventions, and the social contexts in which texts are produced and received.",
    keyTerms: [
      {
        term: "Cohesion",
        definition:
          "The linguistic mechanisms that link sentences and clauses to create a connected text. Cohesion operates through lexical repetition, pronoun reference, substitution, ellipsis, and discourse connectives.",
        example:
          "'The Prime Minister gave a speech. She addressed three key issues. The first was the economy.' Multiple cohesive devices link these sentences.",
      },
      {
        term: "Coherence",
        definition:
          "The property of a text that makes it hang together meaningfully for readers or listeners. Coherence is partly a product of cohesion but also depends on shared knowledge and logical inference.",
        example:
          "'I'm hungry.' 'There's a restaurant on the corner.' These two utterances cohere because we infer a logical connection despite no explicit connective.",
      },
      {
        term: "Genre",
        definition:
          "A recognisable category of text defined by shared conventions of form, content, style, and purpose. Genre knowledge allows producers and audiences to have shared expectations.",
        example:
          "A job application letter follows generic conventions: formal address, structured paragraphs, specific lexis, and a conventional close.",
      },
      {
        term: "Discourse marker",
        definition:
          "A word or phrase that signals a transition, relationship, or organisational structure in a text. Discourse markers guide the audience through the text's logic.",
        example:
          "'However', 'furthermore', 'in contrast', 'to summarise', and 'on the other hand' are discourse markers signalling contrast, addition, or structure.",
      },
      {
        term: "Topic management",
        definition:
          "The ways in which speakers in conversation introduce, develop, change, and close topics. Topic control is often linked to power and status.",
        example:
          "In a formal interview, the interviewer controls topic management by asking questions; the interviewee is largely constrained to respond.",
      },
      {
        term: "Turn-taking",
        definition:
          "The mechanisms by which speakers manage the transition from one speaker to another in conversation. Turns are allocated through verbal and non-verbal cues.",
        example:
          "A falling intonation and eye contact signal that a speaker is yielding the floor; interruptions violate turn-taking conventions and may signal power.",
      },
      {
        term: "Adjacency pair",
        definition:
          "A sequence of two utterances by different speakers where the first utterance makes the second expected and appropriate. Adjacency pairs are a fundamental structure of conversation.",
        example:
          "Question/answer, greeting/greeting, invitation/acceptance or refusal, and apology/acceptance are all adjacency pairs.",
      },
      {
        term: "Hedging",
        definition:
          "Linguistic devices that reduce the certainty or directness of an assertion, protecting the speaker from being held to a definite claim and showing epistemic modesty.",
        example:
          "'It seems to me that perhaps the evidence might suggest...' uses multiple hedges, softening an academic claim.",
      },
      {
        term: "Intertextuality",
        definition:
          "The ways in which a text refers to, echoes, or is shaped by other texts. Intertextual references create layers of meaning for readers who recognise them.",
        example:
          "An advert that parodies a famous novel or film relies on intertextuality; readers who recognise the reference gain additional meaning.",
      },
      {
        term: "Narrative structure",
        definition:
          "The way in which a text organises events or information into a sequence. Labov's narrative model identifies orientation, complicating action, evaluation, resolution, and coda.",
        example:
          "A personal anecdote follows narrative structure: setting the scene (orientation), describing a problem (complicating action), and reflecting on its significance (evaluation).",
      },
    ],
    analyticQuestions: [
      "How is cohesion achieved across the text -- what devices are used and what effect do they create?",
      "Does the text follow recognisable genre conventions or does it subvert them?",
      "How is power reflected in topic management and turn-taking in this spoken interaction?",
      "What discourse markers are used and what do they reveal about the logical structure of the argument?",
      "How is narrative organised and what evaluative stance does the narrator take?",
      "Are there intertextual references and what additional meaning do they create for an informed reader?",
    ],
    examApplication:
      "Discourse analysis is essential in Unit 1 (written and spoken texts), Unit 3 (original writing), and Unit 4 (spoken language). When analysing transcripts, comment on turn-taking, adjacency pairs, and topic management to reveal power dynamics and relationships. In written texts, examine cohesive devices and genre conventions. In Unit 3, show that your own writing demonstrates confident control of discourse-level features. Reference Labov's narrative model when analysing personal narrative texts.",
    theorists: [
      {
        name: "William Labov",
        theory: "Narrative structure",
        keyIdea:
          "From analysis of oral narratives, Labov identified six structural elements: abstract, orientation, complicating action, evaluation, result/resolution, and coda. Evaluation is the most important, revealing the narrator's purpose.",
      },
      {
        name: "Norman Fairclough",
        theory: "Critical discourse analysis (CDA)",
        keyIdea:
          "Discourse is a form of social practice: texts both reflect and reproduce social structures, ideologies, and power relations. CDA aims to make these hidden relations visible.",
      },
      {
        name: "Michael Halliday",
        theory: "Systemic functional linguistics and text",
        keyIdea:
          "Texts are shaped by three contextual variables: field (what is being talked about), tenor (the relationship between participants), and mode (the channel of communication). These combine to determine register.",
      },
    ],
  },

  {
    id: "pragmatics",
    name: "Pragmatics",
    abbreviation: "PRAG",
    definition:
      "Pragmatics is the study of how context shapes the interpretation of meaning. It examines how speakers use language to perform actions (speech acts), how they imply meanings beyond what they literally say, and how they navigate social relationships through language choices.",
    keyTerms: [
      {
        term: "Speech act",
        definition:
          "An utterance considered as an action. Austin distinguished locutionary acts (the literal meaning), illocutionary acts (the intended communicative function), and perlocutionary acts (the effect on the listener).",
        example:
          "'It's cold in here' has the locutionary meaning of a temperature statement, but the illocutionary force of a request to close the window.",
      },
      {
        term: "Implicature",
        definition:
          "Meaning that is implied rather than directly stated. Coined by Grice, implicature arises when speakers appear to violate his conversational maxims and listeners infer an intended meaning.",
        example:
          "Asked 'Can you pass the salt?', we infer a request (not a question about physical ability) -- the literal question implies the action.",
      },
      {
        term: "Presupposition",
        definition:
          "Background information that a speaker assumes the listener already knows or accepts. Presuppositions are embedded in utterances and can be used to smuggle in contested claims.",
        example:
          "'Have you stopped cheating on your exams?' presupposes that the listener has been cheating; the question cannot be answered without accepting this premise.",
      },
      {
        term: "Face",
        definition:
          "Goffman's concept of the public self-image that individuals wish to maintain. Brown and Levinson extended this to positive face (wanting approval) and negative face (wanting autonomy and freedom from imposition).",
        example:
          "Asking someone for a favour threatens their negative face (autonomy); criticising them threatens their positive face (desire for approval).",
      },
      {
        term: "Politeness strategies",
        definition:
          "Linguistic strategies used to minimise face-threatening acts. Brown and Levinson identified positive politeness (showing solidarity), negative politeness (showing deference), and off-record strategies (being indirect).",
        example:
          "'I don't suppose you'd be able to help me move, would you?' uses negative politeness strategies to soften a request.",
      },
      {
        term: "Cooperative principle",
        definition:
          "Grice's proposal that participants in conversation generally follow four maxims -- quantity, quality, relation, and manner -- to make communication efficient and effective.",
        example:
          "When someone responds to 'How was the film?' with 'The popcorn was nice', they appear to violate the maxim of relation, implying the film was not good.",
      },
      {
        term: "Maxim of quantity",
        definition:
          "Grice's maxim requiring that contributions be as informative as required, and not more informative than required. Over- or under-informing generates implicatures.",
        example:
          "If asked your name and you reply 'John Smith, born 1998, residing in Leeds', you have provided far more than required, implying something unusual.",
      },
      {
        term: "Maxim of quality",
        definition:
          "Grice's maxim requiring that speakers say only what they believe to be true and have adequate evidence for. Violations may indicate irony, sarcasm, or tact.",
        example:
          "Saying 'What a brilliant idea!' sarcastically violates quality, generating the implicature that the idea is actually poor.",
      },
      {
        term: "Deixis",
        definition:
          "Words that depend on context for their interpretation, pointing to people ('I', 'you'), places ('here', 'there'), or times ('now', 'then'). Deictic choices shape how speakers position themselves and others.",
        example:
          "Politicians use inclusive 'we' to create solidarity with voters: 'Together we will build a better future' positions speaker and audience as a unified group.",
      },
      {
        term: "Context",
        definition:
          "The physical, social, and cultural circumstances surrounding a communicative event. Context includes the setting, participants' relationships, shared knowledge, and the co-text (surrounding language).",
        example:
          "The word 'sick' means 'ill' in most contexts, but in youth slang contexts it means 'excellent' -- context determines interpretation.",
      },
      {
        term: "Indirectness",
        definition:
          "The use of language where the intended meaning differs from the literal meaning, typically to be polite, to hedge, or to allow plausible deniability.",
        example:
          "'I wonder if you might possibly consider...' is highly indirect; the speaker is clearly making a request but frames it as a hypothetical inquiry.",
      },
    ],
    analyticQuestions: [
      "What is the illocutionary force of this utterance -- what action is the speaker performing?",
      "Are Grice's maxims being observed or flouted, and what implicatures arise from apparent violations?",
      "How do speakers manage face threats through politeness strategies?",
      "What does the speaker presuppose, and does this reveal an ideological stance?",
      "How does context shape the interpretation of ambiguous or indirect utterances?",
      "How does power or social distance influence the degree of directness or indirectness?",
    ],
    examApplication:
      "Pragmatics is vital in Unit 1 and Unit 4 (spoken language). When analysing conversations, identify speech acts (requests, commands, promises) and comment on whether they are realised directly or indirectly. Apply Grice's maxims to explain implied meanings. Use Brown and Levinson's face theory to analyse why speakers choose certain politeness strategies. In political speeches or media interviews, presupposition analysis reveals how speakers embed ideological assumptions. Always explain what the pragmatic feature achieves in context.",
    theorists: [
      {
        name: "H. P. Grice",
        theory: "Cooperative principle and conversational maxims",
        keyIdea:
          "Communication depends on a cooperative principle and four maxims (quantity, quality, relation, manner). When maxims appear to be flouted, listeners infer 'conversational implicatures' -- meanings beyond the literal words.",
      },
      {
        name: "Erving Goffman",
        theory: "Face theory and impression management",
        keyIdea:
          "Social interaction involves the management of 'face' -- a claimed social identity. Speakers use face-work to protect their own face and that of others, shaping linguistic choices profoundly.",
      },
      {
        name: "Penelope Brown and Stephen Levinson",
        theory: "Politeness theory",
        keyIdea:
          "Building on Goffman, they developed a systematic account of positive politeness (building solidarity), negative politeness (showing deference/respect for autonomy), and off-record strategies as responses to face-threatening acts.",
      },
    ],
  },

  {
    id: "graphology",
    name: "Graphology",
    abbreviation: "GRAPH",
    definition:
      "Graphology is the study of the visual and written elements of a text -- the system of writing itself. In linguistic analysis, it covers typography, layout, punctuation, capitalisation, and the visual presentation of written texts. It examines how visual features contribute to meaning and the overall impression a text creates.",
    keyTerms: [
      {
        term: "Typography",
        definition:
          "The visual appearance of type, including font choice, size, weight (bold/light), and style (serif/sans-serif/italic). Typography affects readability and carries connotative meaning.",
        example:
          "A legal document uses Times New Roman to connote formality and authority; a children's book might use rounded, playful fonts to suggest accessibility and fun.",
      },
      {
        term: "Layout",
        definition:
          "The spatial arrangement of text and images on a page or screen. Layout guides the reader's eye and creates a hierarchy of information through placement, white space, and visual grouping.",
        example:
          "A newspaper front page uses a large headline at the top, a dominant image, and columns of body text, directing the reader's attention hierarchically.",
      },
      {
        term: "Capitalisation",
        definition:
          "The use of capital letters beyond standard conventions, either for emphasis, to mark proper nouns, or for stylistic effect. Non-standard capitalisation signals deviation from norms.",
        example:
          "In advertising: 'The Best Holiday You Will Ever Take' uses title case for emphasis; in social media, ALL CAPS signals shouting or strong emotion.",
      },
      {
        term: "Punctuation",
        definition:
          "Marks used in writing to organise meaning, indicate pauses, and signal grammatical structures. Punctuation choices affect rhythm, tone, and how the reader moves through a text.",
        example:
          "Ellipsis (...) creates suspense or implies omitted information; heavy use of exclamation marks connotes enthusiasm or informality; minimal punctuation can suggest breathless urgency.",
      },
      {
        term: "Colour",
        definition:
          "The use of colour in texts to attract attention, convey meaning, and create emotional responses. Colour choices in multimodal texts are significant pragmatic and semantic choices.",
        example:
          "Red is used in warning signs, sales promotions, and political branding because it connotes urgency, danger, or passion depending on context.",
      },
      {
        term: "Orthography",
        definition:
          "The conventional system of spelling and writing in a language. Non-standard orthography (deliberate misspelling, phonetic spelling) can signal informality, dialect, or stylistic intent.",
        example:
          "In texting and social media: 'ur', 'gr8', 'luv' use non-standard orthography that signals informality and in-group identity among digital users.",
      },
      {
        term: "Multimodality",
        definition:
          "The use of multiple semiotic modes (text, image, sound, colour, gesture) together in a single text. Multimodal texts require analysis of how different modes interact and reinforce meaning.",
        example:
          "A magazine advertisement combines image, headline, body copy, logo, and colour -- each mode contributes to the overall message and these modes interact to create meaning.",
      },
      {
        term: "White space",
        definition:
          "The empty areas of a page or screen not occupied by text or images. White space is used to separate elements, direct attention, create a sense of luxury or simplicity, and aid readability.",
        example:
          "Luxury brand websites use extensive white space to connote exclusivity and elegance; cheap promotional leaflets often fill all available space.",
      },
      {
        term: "Bullet points and lists",
        definition:
          "Graphological devices that organise information into discrete, visually separated items. They suggest clarity, efficiency, and prioritisation, and are common in instructional and informational texts.",
        example:
          "Government public health guidance uses bullet points to present key actions clearly, making information accessible and memorable for a general audience.",
      },
      {
        term: "Heading hierarchy",
        definition:
          "The use of headings and subheadings of different sizes and weights to signal the structure of a text and help readers navigate it. Hierarchy reflects the relative importance of content.",
        example:
          "A textbook uses H1 headings for chapters, H2 for major sections, and H3 for subsections, creating a visual hierarchy that maps the text's conceptual structure.",
      },
    ],
    analyticQuestions: [
      "How does typography (font choice, size, weight) contribute to the text's overall meaning and effect?",
      "What does the layout of the text tell us about its intended audience and purpose?",
      "How is punctuation used beyond its standard grammatical function for expressive effect?",
      "How do visual elements interact with verbal content in this multimodal text?",
      "Does non-standard capitalisation or orthography serve a communicative or stylistic purpose?",
      "How does white space direct the reader's attention or shape the tone of the text?",
    ],
    examApplication:
      "Graphology is particularly relevant in Unit 1 when analysing printed or digital texts, advertising, journalism, or any text with visual elements. When writing about graphological features, always link them to meaning and audience effect -- do not simply describe what you can see. In Unit 3 original writing, your graphological choices (paragraph length, punctuation density) reflect compositional control. For digital and multimodal texts, consider how layout and visual hierarchy guide interpretation. Graphology is less applicable to pure spoken texts but relevant to prepared speeches or scripted material.",
    theorists: [
      {
        name: "Gunther Kress and Theo van Leeuwen",
        theory: "Social semiotics and multimodality",
        keyIdea:
          "In 'Reading Images' (1996), they proposed that visual grammar operates similarly to verbal grammar, and that images and layouts carry meaning through composition, framing, and salience -- requiring analytical tools beyond those developed for written language.",
      },
      {
        name: "David Crystal",
        theory: "Netspeak and digital graphology",
        keyIdea:
          "In 'Language and the Internet' (2001), Crystal argued that internet and digital communication has developed its own graphological conventions (emoticons, abbreviations, non-standard spelling) that represent a genuinely new medium rather than degraded written language.",
      },
      {
        name: "Roland Barthes",
        theory: "Semiotics and the rhetoric of the image",
        keyIdea:
          "Visual texts carry denotative (literal) and connotative (cultural/symbolic) meanings. Images in texts are anchored by language (captions, headlines), which directs the range of meanings a viewer might take.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGE THEORIES
// ─────────────────────────────────────────────────────────────────────────────

export const languageTheories: LanguageTheory[] = [
  {
    id: "chomsky-lad",
    theorist: "Noam Chomsky",
    theory: "Language Acquisition Device (LAD) and Universal Grammar",
    keyPoints: [
      "Children are born with an innate Language Acquisition Device -- a biologically specified cognitive module dedicated to language learning.",
      "All human languages share a deep Universal Grammar (UG) -- an underlying set of principles and parameters that constrain the form languages can take.",
      "The LAD explains the 'poverty of the stimulus' problem: children acquire complex grammar despite receiving incomplete and error-laden input.",
      "Language acquisition is not primarily dependent on imitation or reinforcement but on triggering the LAD through sufficient exposure to language.",
      "Children pass through a critical period (approximately birth to puberty) during which the LAD is fully operational and acquisition occurs most readily.",
    ],
    critiques: [
      "The LAD is a theoretical construct -- it has never been directly observed or located neurologically, making it difficult to test empirically.",
      "Critics argue that social interaction and input quality (child-directed speech) play a larger role than Chomsky allows.",
      "Cross-linguistic studies show more variation in acquisition patterns than a strict UG model would predict.",
      "Connectionist models (Elman et al.) suggest that a general learning mechanism, rather than a dedicated language module, could account for acquisition.",
      "Chomsky's model largely ignores pragmatic and communicative competence -- children learn to use language, not just construct grammatical sentences.",
    ],
    examApplication:
      "Apply Chomsky's LAD when discussing child language acquisition in Unit 1 and when contrasting nativist and behaviourist approaches to language development. The concept of a critical period is also relevant to second-language acquisition discussions. Use 'poverty of the stimulus' to explain why the nativist position has intuitive appeal: children regularly produce grammatically correct structures they have never heard modelled.",
    unitRelevance: [
      "Unit 1 (Language and the Self -- child language acquisition)",
      "Unit 2 (Language Diversity -- comparing acquisition across languages)",
      "Unit 4 (Language Development -- debates about nature vs nurture in acquisition)",
    ],
  },

  {
    id: "skinner-behaviourism",
    theorist: "B. F. Skinner",
    theory: "Behaviourist Theory of Language Acquisition",
    keyPoints: [
      "Language is a learned behaviour, acquired through operant conditioning -- specifically through imitation, reinforcement, and shaping.",
      "Children imitate the language they hear from caregivers (positive modelling) and are reinforced (rewarded) when they produce correct or communicative utterances.",
      "Incorrect or unsuccessful utterances are not reinforced or are corrected, gradually shaping the child toward adult-like language use.",
      "Skinner's 'Verbal Behavior' (1957) attempted to analyse all aspects of language use (mands, tacts, echoics) in behaviourist terms.",
      "Language learning is fundamentally no different from other forms of learning; no special language module is required.",
    ],
    critiques: [
      "Chomsky's 1959 review of 'Verbal Behavior' is widely regarded as having demolished the behaviourist account: children produce novel utterances they have never heard, which imitation cannot explain.",
      "Children's systematic errors (overregularisation such as 'goed', 'mouses') show they are abstracting rules, not merely imitating.",
      "Reinforcement studies show that parents rarely correct grammatical errors explicitly; they respond to truth value, not grammatical form.",
      "The poverty of the stimulus argument: the input children receive is too limited and impoverished to account for the speed and complexity of acquisition through learning alone.",
      "The theory cannot adequately account for the creativity of language -- the ability to produce and understand an infinite number of novel sentences.",
    ],
    examApplication:
      "Behaviourism is most useful as a counterpoint to nativist theories in acquisition debates. When discussing child language acquisition, you can acknowledge that imitation and reinforcement play some role (particularly in vocabulary acquisition and pragmatic norms) while noting that they cannot fully account for grammatical acquisition. Referencing Chomsky vs Skinner is a classic debate that demonstrates critical awareness of theoretical disagreements in linguistics.",
    unitRelevance: [
      "Unit 1 (Language and the Self -- child language acquisition)",
      "Unit 4 (Language Development -- nature vs nurture debates)",
    ],
  },

  {
    id: "piaget-cognitive",
    theorist: "Jean Piaget",
    theory: "Cognitive Developmental Theory of Language",
    keyPoints: [
      "Language development is secondary to and dependent upon cognitive development -- children must first develop the relevant cognitive structures before acquiring the language to express them.",
      "Piaget identified four stages of cognitive development: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), and formal operational (11+).",
      "Language emerges from action and object permanence in the sensorimotor stage -- children first understand the world through physical interaction.",
      "Early language is 'egocentric' -- children talk to themselves as much as to others, reflecting their inability to take another's perspective.",
      "The development of object permanence (understanding objects exist when out of sight) underpins early vocabulary acquisition -- children name things they understand to be permanent.",
    ],
    critiques: [
      "Vygotsky challenged Piaget's position, arguing that language drives cognitive development rather than following from it; social interaction and language precede and shape thought.",
      "Research has shown children are less egocentric than Piaget claimed -- even young children adjust their speech to suit their listener.",
      "Piaget underestimated the role of social and cultural context in cognitive and linguistic development.",
      "His stage model has been criticised as too rigid; development is more continuous and variable than discrete stages suggest.",
      "The relationship between language and thought remains contested; the Sapir-Whorf hypothesis suggests language shapes thought, complicating Piaget's one-directional model.",
    ],
    examApplication:
      "Apply Piaget when discussing child language acquisition and the relationship between cognitive and linguistic development. His stage model is useful for explaining why certain language structures emerge at predictable developmental points. Contrasting Piaget with Vygotsky gives a richer picture of how social and cognitive factors interact in language acquisition. Relevant to any discussion of whether thought precedes language or language shapes thought.",
    unitRelevance: [
      "Unit 1 (Language and the Self -- child language and cognitive development)",
      "Unit 4 (Language Development -- theories of acquisition)",
    ],
  },

  {
    id: "labov-social-variation",
    theorist: "William Labov",
    theory: "Sociolinguistic Variation and Language Change",
    keyPoints: [
      "Labov pioneered variationist sociolinguistics, demonstrating that language variation is systematic and socially conditioned, not random.",
      "His New York department store study (1966) showed that /r/ pronunciation post-vocalically correlated with social class and was subject to style-shifting.",
      "Labov introduced the concept of the sociolinguistic variable -- a linguistic feature that varies systematically with social factors (class, age, gender, ethnicity, style).",
      "Speakers engage in style-shifting: using more prestigious variants in formal or careful speech and more vernacular variants in casual contexts.",
      "Labov distinguished between indicators (variables that correlate with social groups but are not consciously noticed), markers (variables that are consciously noticed and subject to evaluation), and stereotypes (variables that become socially salient).",
      "His narrative analysis identified the structural elements of oral narratives, with evaluation as the key element revealing the narrator's purpose.",
    ],
    critiques: [
      "Early variationist studies were criticised for focusing predominantly on male, working-class speakers and marginalising women and other groups.",
      "The quantitative methodology has been challenged as imposing artificial boundaries on what is actually gradient and continuous variation.",
      "Labov's model has been criticised for treating social categories (class, gender) as fixed variables rather than dynamic, performed identities.",
      "The observer's paradox (the presence of a researcher alters behaviour) remains methodologically challenging even with Labov's attempts to overcome it.",
    ],
    examApplication:
      "Labov is one of the most widely cited theorists in A-Level English Language. Apply his work in any discussion of accent and dialect variation (Unit 2), social class and language, style-shifting, or language change. His narrative model is essential for Unit 4 spoken language analysis. When analysing transcripts, comment on whether speakers show style-shifting and what social pressures might motivate this. His concept of covert prestige explains why working-class speakers may maintain non-standard variants despite awareness of standard forms.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- narrative structure)",
      "Unit 2 (Language Diversity -- social variation, style-shifting)",
      "Unit 4 (Spoken Language -- narrative analysis, accent and dialect)",
    ],
  },

  {
    id: "trudgill-dialect",
    theorist: "Peter Trudgill",
    theory: "Dialect Levelling and Social Dialectology",
    keyPoints: [
      "Trudgill extended Labov's variationist approach to British English, demonstrating similar correlations between phonological variation and social class in Norwich (1974).",
      "He documented dialect levelling -- the process by which regional dialect differences reduce over time through contact between dialect speakers, producing more geographically widespread, intermediate forms.",
      "Trudgill introduced the concept of covert prestige: non-standard dialect forms have a hidden status for their speakers, associated with solidarity, toughness, and local identity, explaining why speakers maintain non-standard forms despite social pressure.",
      "His work on dialect contact and koineisation showed how new dialects form when speakers of different varieties come into prolonged contact.",
      "Trudgill argued strongly for a descriptive rather than prescriptive approach to dialect, contesting the idea that standard forms are inherently superior.",
      "He documented the influence of American English on British varieties, arguing this is largely driven by popular culture rather than direct contact.",
    ],
    critiques: [
      "The concept of covert prestige has been questioned -- it may project a uniform attitude onto working-class speakers who hold varied views about their own dialect.",
      "Dialect levelling does not result in a single uniform variety; new regional dialects (such as Estuary English) emerge even as some features level.",
      "Trudgill's quantitative methods, like Labov's, have been critiqued for treating social categories as pre-given rather than constructed through language.",
      "More recent research suggests dialect levelling is uneven and context-dependent rather than an inexorable process.",
    ],
    examApplication:
      "Trudgill is central to any discussion of British dialect variation, dialect levelling, and the social evaluation of accents and dialects. Apply his concept of covert prestige when discussing why speakers maintain non-standard forms, and dialect levelling when discussing language change over time. In discussions of Standard English vs dialect, Trudgill's descriptive approach supports the argument that all dialects are equally systematic and valid. Relevant to Units 2 and 4.",
    unitRelevance: [
      "Unit 2 (Language Diversity -- dialect, social variation, language attitudes)",
      "Unit 4 (Spoken Language -- accent and dialect in spontaneous speech)",
    ],
  },

  {
    id: "tannen-gender-difference",
    theorist: "Deborah Tannen",
    theory: "Genderlect and Difference Model of Language and Gender",
    keyPoints: [
      "In 'You Just Don't Understand' (1990), Tannen proposed that men and women are socialised into different communication cultures, producing different genderlects.",
      "Men's language is characterised by 'report talk' -- focused on information, status, and independence.",
      "Women's language is characterised by 'rapport talk' -- focused on relationships, connection, and support.",
      "Miscommunication between men and women arises from these different communicative goals, not from ill will or sexism.",
      "Tannen rejects the notion that women's language is deficient; instead, both styles are valid but different, like cross-cultural communication.",
      "The difference model contrasts with the dominance model (e.g., Lakoff), which sees women's language as a product of subordination rather than cultural difference.",
    ],
    critiques: [
      "The model has been accused of reinforcing gender stereotypes by presenting gendered communication styles as natural and fixed.",
      "It ignores the enormous variation within gender groups -- not all women use 'rapport talk' nor all men 'report talk'.",
      "Feminist critics argue that framing gender communication as 'difference' rather than 'power' depoliticises inequality.",
      "The model was largely based on white, middle-class American speakers and may not generalise across cultures, classes, or contexts.",
      "Research consistently shows that context, topic, and relationship matter more than gender in predicting communication style.",
    ],
    examApplication:
      "Tannen is frequently cited in gender and language discussions in Units 2 and 4. When analysing conversations involving male and female speakers, consider whether the difference model offers explanatory power, but balance it against the dominance model (Lakoff) and the more recent dynamic model (Cameron). Avoid uncritically accepting Tannen's binary model -- demonstrating awareness of its limitations shows analytical sophistication. Her concept of genderlect is useful for discussing how gender identity is performed through language.",
    unitRelevance: [
      "Unit 2 (Language Diversity -- gender and language)",
      "Unit 4 (Spoken Language -- gender in interaction)",
    ],
  },

  {
    id: "lakoff-womens-language",
    theorist: "Robin Lakoff",
    theory: "Deficit Model and Women's Language",
    keyPoints: [
      "In 'Language and Woman's Place' (1975), Lakoff argued that women's language is characterised by features that reflect and reinforce their subordinate social position.",
      "She identified features of 'women's language' including: hedges ('sort of', 'I think'), tag questions ('It's cold, isn't it?'), empty adjectives ('divine', 'lovely'), rising intonation on declaratives, hyper-polite forms, and avoidance of strong expletives.",
      "These features reflect women's lack of confidence and their internalisation of their marginalised status -- language both reflects and perpetuates gender inequality.",
      "Lakoff's model is known as the deficit model: women's language is seen as deficient relative to a (male) standard.",
      "Her later work extended to an examination of language and politics, including the language used to discuss and address women.",
    ],
    critiques: [
      "Lakoff's original work was based on introspection rather than empirical data, making her claims difficult to verify.",
      "Subsequent empirical studies have failed to consistently confirm that the features she identifies are used more by women than men.",
      "Tag questions serve many functions beyond expressing uncertainty -- they can be facilitating, softening, or challenging.",
      "The deficit model has been largely superseded by the difference model (Tannen) and the dynamic/performance model (Cameron), which see gender not as a fixed property but as something speakers do.",
      "Lakoff's model risks making women responsible for their own oppression through their language choices.",
    ],
    examApplication:
      "Lakoff provides the foundational framework for gender and language debates. In exam essays, use her deficit model as a starting point and then complicate it with later theories (Tannen's difference model, Cameron's dynamic model). Her specific linguistic features (hedges, tag questions) are useful analytical tools when examining transcripts, but demonstrate critical awareness by noting that context and function matter enormously. Her work connects language analysis to feminist theory and broader debates about power.",
    unitRelevance: [
      "Unit 2 (Language Diversity -- gender and language, power and language)",
      "Unit 4 (Spoken Language -- gender in conversation)",
    ],
  },

  {
    id: "crystal-internet-language",
    theorist: "David Crystal",
    theory: "Language and the Internet / Language Change",
    keyPoints: [
      "In 'Language and the Internet' (2001) and 'Txtng: The Gr8 Db8' (2008), Crystal argued that digital communication has created a genuinely new linguistic medium, not simply a degraded form of writing.",
      "Netspeak (internet language) borrows features from both speech (spontaneity, informal register) and writing (visual, permanent) but is distinct from both.",
      "Text messaging and internet language do not damage literacy; users of texting features tend to be better at phonological awareness, not worse.",
      "Crystal is a prominent defender of linguistic diversity and change: he argues that language change is natural and inevitable, not evidence of decline.",
      "He coined the concept of 'graphological' play in digital communication -- the creative use of spelling, capitalisation, and punctuation for expressive purposes.",
      "Crystal argues that English as a global language exists in many legitimate varieties, and no single variety should be considered the sole 'correct' form.",
    ],
    critiques: [
      "Crystal's optimism about digital language may underestimate the potential impact of reduced formal writing practice on some learners.",
      "The pace of change in digital communication makes some of Crystal's early observations (from 2001) already dated.",
      "His descriptive approach may be seen as insufficiently attentive to the ways in which digital platforms shape and constrain communication.",
      "Critics from a prescriptive tradition argue that his dismissal of language decline narratives ignores genuine concerns about literacy standards.",
    ],
    examApplication:
      "Crystal is highly relevant to any discussion of language change, digital communication, and prescriptivism vs descriptivism. Apply his work in Unit 2 (language change, digital varieties) and Unit 1 when analysing digital texts. His argument that text language does not damage literacy is a useful counterargument in debates about language change. When analysing social media, gaming chat, or online texts, his framework for Netspeak provides useful analytical vocabulary.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- digital and multimodal texts)",
      "Unit 2 (Language Diversity and Change -- digital language, language change debates)",
      "Unit 4 (Language in the Media -- new media varieties)",
    ],
  },

  {
    id: "fairclough-cda",
    theorist: "Norman Fairclough",
    theory: "Critical Discourse Analysis (CDA)",
    keyPoints: [
      "Critical Discourse Analysis examines language as a form of social practice embedded in relations of power and ideology.",
      "Every text is produced and interpreted within a particular social context; meaning is never purely in the words but in the interaction between text, context, and reader.",
      "Fairclough's three-dimensional framework analyses texts at the level of text (linguistic features), discourse practice (how texts are produced and consumed), and social practice (the broader social context and power relations).",
      "Language both reflects and constitutes social reality -- it does not merely describe power relations but actively produces and reproduces them.",
      "The concept of hegemony (from Gramsci) is central: dominant groups maintain power partly by making their ideological frameworks seem natural and common-sense through discourse.",
      "Fairclough coined 'technologisation of discourse' to describe how institutions systematically shape and control the discourse of their members.",
    ],
    critiques: [
      "CDA has been accused of selecting texts that confirm the analyst's pre-existing political views, undermining its claim to be systematic analysis.",
      "The framework assumes that hidden ideological meanings can be 'decoded' by an expert analyst, raising questions about who has the authority to interpret texts in this way.",
      "CDA can over-interpret: not every linguistic choice necessarily reflects a deliberate ideological strategy.",
      "The framework is better at analysing written, planned texts than spontaneous spoken interaction.",
      "It has been criticised for focusing predominantly on texts produced by powerful institutions while paying less attention to how ordinary people resist or reinterpret dominant discourses.",
    ],
    examApplication:
      "Fairclough's CDA is invaluable for analysing political speeches, media texts, advertising, and institutional language in Unit 1 and Unit 2. Apply it when identifying how lexical and grammatical choices naturalise particular world views or exclude certain groups. The concept of discourse shaping reality is useful for discussing how language represents and constructs social categories such as gender, class, and ethnicity. Demonstrating awareness of CDA's limitations shows evaluative depth.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- power, ideology in texts)",
      "Unit 2 (Language Diversity -- language and power, media language)",
      "Unit 3 (Original Writing -- understanding how discourse choices create effects)",
    ],
  },

  {
    id: "cameron-gender-performance",
    theorist: "Deborah Cameron",
    theory: "Language, Gender, and the Dynamic/Performance Model",
    keyPoints: [
      "Cameron's 'The Myth of Mars and Venus' (2007) challenges the popular 'different cultures' model of gender communication (Tannen), arguing it is not supported by rigorous evidence.",
      "Gender is not a fixed property that people have but a performance -- something people do through language and behaviour in interaction (drawing on Butler's performativity).",
      "The 'gender differences in language' literature has been distorted by confirmation bias -- researchers find what they expect to find.",
      "Cameron argues that differences within gender groups are greater than differences between them on most linguistic measures.",
      "Language is used to construct gender identity, not merely to reflect it; speakers 'do gender' in contextually specific ways.",
      "She argues against essentialist accounts that attribute fixed communicative styles to biological sex or fixed cultural socialisation.",
    ],
    critiques: [
      "Some researchers argue that Cameron goes too far in dismissing gender differences; even if differences are smaller than popular accounts suggest, they are not zero.",
      "The performativity model may underestimate the structural constraints that limit speakers' freedom to 'perform' gender differently.",
      "Cameron's critique of Tannen has itself been criticised as overstated; she may underestimate the usefulness of the genderlect concept in certain contexts.",
      "The model can be difficult to apply in exam contexts as it requires analysing individual instances rather than generalising about groups.",
    ],
    examApplication:
      "Cameron provides the most nuanced and contemporary framework for gender and language analysis. In exam essays, use her dynamic model to move beyond simplistic claims that 'women do X' or 'men do Y'. When analysing transcripts, identify how speakers perform gender in specific ways in specific contexts rather than attributing behaviour to gender as a fixed category. Her work is most relevant to Units 2 and 4 and is a strong basis for critically evaluating Lakoff and Tannen.",
    unitRelevance: [
      "Unit 2 (Language Diversity -- gender and language, critical approaches)",
      "Unit 4 (Spoken Language -- identity performance in conversation)",
    ],
  },

  {
    id: "bernstein-codes",
    theorist: "Basil Bernstein",
    theory: "Restricted and Elaborated Codes",
    keyPoints: [
      "Bernstein proposed that speakers have access to different linguistic codes depending on their social class background.",
      "The restricted code is characterised by context-dependent, implicit, and condensed language; it assumes shared knowledge between speakers and relies heavily on context.",
      "The elaborated code is characterised by context-independent, explicit, and syntactically complex language; it makes meaning explicit and does not assume shared knowledge.",
      "Middle-class children have access to both codes; working-class children are more likely to have access only to the restricted code.",
      "Educational success requires the elaborated code; the mismatch between the code some children use and the code the school demands creates systematic educational disadvantage.",
      "Bernstein emphasised that the restricted code is not inferior as a form of communication; it is highly effective for its purposes and contexts.",
    ],
    critiques: [
      "Labov's critique of Bernstein's framework argued that so-called 'restricted code' language (especially African American Vernacular English) is in fact linguistically complex and logically rigorous.",
      "The model has been seen as stigmatising working-class language by implying it is inadequate for academic purposes.",
      "Empirical research has failed to find consistent evidence for the two-code model as Bernstein described it.",
      "The framework arguably blames linguistic factors for what are structural economic and social inequalities in the education system.",
      "Later researchers found that context and task demands shape code use more than class background alone.",
    ],
    examApplication:
      "Bernstein is relevant to discussions of language and social class, language and education, and language and inequality. His code theory can be applied in Unit 2 when discussing how language variation reflects social structures. It is also relevant to discussions of Standard English vs dialect in education. When using Bernstein, engage critically with Labov's counter-argument and avoid presenting the restricted code as straightforwardly inferior. The framework highlights how educational institutions privilege particular language varieties.",
    unitRelevance: [
      "Unit 2 (Language Diversity -- language and social class, language and education)",
      "Unit 1 (Language Analysis -- register and context-dependence)",
    ],
  },

  {
    id: "halliday-functions",
    theorist: "Michael Halliday",
    theory: "Systemic Functional Linguistics and Language Functions",
    keyPoints: [
      "Halliday proposed that language simultaneously fulfils three metafunctions: the ideational (representing the world and experience), the interpersonal (enacting social relationships and roles), and the textual (organising language into coherent messages).",
      "His model of child language development identified seven functions of early language: instrumental, regulatory, interactional, personal, heuristic, imaginative, and informative.",
      "Systemic Functional Linguistics (SFL) treats grammar as a network of choices; every grammatical choice is meaningful and serves communicative functions.",
      "Register theory: language varies systematically according to field (what is happening), tenor (who is involved and what their relationship is), and mode (the channel and role of language).",
      "Halliday's concept of transitivity describes how processes, participants, and circumstances are represented in clauses -- analysing transitivity reveals how texts represent who does what to whom.",
      "He argued that language is the primary means through which humans make and share meaning -- semiotic rather than merely referential.",
    ],
    critiques: [
      "SFL's complexity and technical vocabulary make it difficult to apply fully in secondary and A-Level exam contexts.",
      "The metafunctional framework can be hard to apply cleanly to specific texts as the three functions are always simultaneously present.",
      "Some linguists find SFL too language-specific in its formalism, despite its claim to be a universal theory.",
      "Transitivity analysis can lead to over-interpretation if analysts assume that every grammatical choice is a deliberate ideological strategy.",
    ],
    examApplication:
      "Halliday's functions of early language are widely used in child language acquisition discussions (Unit 1 and Unit 4). The seven early functions framework is a productive way to classify and analyse children's early utterances. Register theory (field, tenor, mode) is an extremely useful framework for any text analysis -- identify all three variables and explain how they shape language choices. Transitivity analysis is relevant to CDA-style analysis of media or political texts in Units 1 and 2.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- register, transitivity, text analysis)",
      "Unit 2 (Language Diversity -- register variation)",
      "Unit 4 (Language Development -- child language functions)",
    ],
  },

  {
    id: "sapir-whorf",
    theorist: "Edward Sapir and Benjamin Lee Whorf",
    theory: "Sapir-Whorf Hypothesis (Linguistic Relativity)",
    keyPoints: [
      "The hypothesis proposes that the language we speak influences or determines the way we think and perceive the world.",
      "The strong version (linguistic determinism) holds that language determines thought: we can only think thoughts that our language allows us to express.",
      "The weak version (linguistic relativity) holds that language influences thought: having more words or grammatical categories for a concept makes it easier to perceive and remember distinctions in that domain.",
      "Whorf's analysis of Hopi time concepts suggested that their language encoded time differently from European languages and that Hopi speakers therefore conceptualised time differently.",
      "Evidence from colour terminology research has provided some support for the weak version: speakers of languages with more basic colour terms may distinguish colours more readily in perception tasks.",
      "The hypothesis connects linguistics to cognitive science, anthropology, and philosophy of mind.",
    ],
    critiques: [
      "Whorf's claims about the Hopi have been largely discredited by later anthropological and linguistic research.",
      "The strong version (linguistic determinism) is generally rejected: people clearly can think about and learn concepts for which they had no prior vocabulary.",
      "Pinker's 'language of thought' (Mentalese) argument holds that thought is independent of language and that translation between languages is possible precisely because thought is not language-bound.",
      "The evidence for the weak version, while more robust, shows only modest effects and is contested in cognitive psychology.",
      "It can be difficult to separate the direction of causation: does language shape thought, or do differences in conceptual systems produce different languages?",
    ],
    examApplication:
      "The Sapir-Whorf hypothesis is relevant to discussions of language and thought, language and identity, and how vocabulary shapes perception. It can be applied in Unit 2 (language change and diversity -- does having different words change how we think?) and Unit 1 (how does lexical choice shape readers' perceptions?). Use the distinction between the strong and weak versions to demonstrate nuanced engagement with the theory. The weak version is most defensible and most applicable to linguistic analysis of word choice and framing.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- how lexical choice shapes meaning and perception)",
      "Unit 2 (Language Diversity -- language, culture, and thought; semantic change)",
      "Unit 4 (Language and Thought -- theoretical debates)",
    ],
  },

  {
    id: "grice-cooperative-principle",
    theorist: "H. P. Grice",
    theory: "Cooperative Principle and Conversational Maxims",
    keyPoints: [
      "Grice proposed that speakers in conversation generally follow a cooperative principle: 'Make your conversational contribution such as is required, at the stage at which it occurs, by the accepted purpose or direction of the talk exchange in which you are engaged.'",
      "He identified four maxims that operationalise the cooperative principle: quantity (be as informative as required, no more), quality (say only what you believe to be true), relation (be relevant), and manner (be clear, brief, and orderly).",
      "When speakers appear to violate (flout) a maxim, listeners infer a 'conversational implicature' -- a meaning beyond the literal words that explains the apparent violation.",
      "Implicatures are cancellable (unlike logical implications) and are worked out by listeners using the assumption that the speaker is being cooperative at some level.",
      "Grice distinguished conventional implicature (meaning carried by certain words regardless of context, e.g., 'but') from conversational implicature (context-dependent inferred meaning).",
      "The framework explains how speakers convey meanings such as irony, sarcasm, politeness, and implication without saying them directly.",
    ],
    critiques: [
      "The maxims are culturally variable: what counts as sufficient information, relevant, or politely direct differs across cultures.",
      "Sperber and Wilson's relevance theory argues that 'relevance' is the single organising principle and Grice's other maxims can be derived from it, simplifying the framework.",
      "Some linguists argue that the maxims describe an idealised Western rational communication style and are not universal.",
      "The notion of 'flouting' can become circular: the analyst always finds a way to explain apparent violations as intentional and cooperative.",
      "Grice's framework is primarily descriptive and has limited predictive power about when and how implicatures will arise.",
    ],
    examApplication:
      "Grice is one of the most applicable theorists in exam contexts. Use the cooperative principle and maxims in any analysis of spoken or written texts where implied meaning is important. When a speaker appears to give too little information, is evasive, changes the subject, or uses irony, explain this in terms of maxim flouting and the resulting implicature. Particularly useful in Unit 1 (media texts, political language) and Unit 4 (spoken interaction analysis). Always specify which maxim is being flouted and what implicature the flouting generates.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- implied meaning in texts)",
      "Unit 2 (Language Diversity -- how indirect communication varies across contexts)",
      "Unit 4 (Spoken Language -- pragmatic analysis of conversation)",
    ],
  },

  {
    id: "goffman-face",
    theorist: "Erving Goffman",
    theory: "Face Theory and Impression Management",
    keyPoints: [
      "In 'The Presentation of Self in Everyday Life' (1959) and 'Interaction Ritual' (1967), Goffman proposed that social interaction resembles a theatrical performance in which people manage impressions of themselves.",
      "Face is the positive social value a person effectively claims in an interaction -- the public self-image we want to maintain.",
      "Face-threatening acts (FTAs) are utterances or actions that potentially damage a participant's face; speakers develop strategies to mitigate FTAs.",
      "Goffman distinguished between the 'face' we claim (our desired self-image) and the 'face' that is attributed to us by others in interaction.",
      "Face-work refers to the actions people take to maintain their own face and that of others during potentially damaging interactions.",
      "Goffman's framework was extended by Brown and Levinson (1987) into a formal politeness theory distinguishing positive face (desire for approval) and negative face (desire for autonomy).",
    ],
    critiques: [
      "The theatrical metaphor can seem reductive -- people may experience themselves as sincere rather than performing.",
      "The concept of face is culturally variable: the relative importance of positive vs negative face, and the specific acts that are face-threatening, differ markedly across cultures.",
      "Brown and Levinson's formalization has been criticised for over-systematising what is a complex, dynamic, and culturally variable phenomenon.",
      "The framework focuses primarily on face-threat and its mitigation; it is less developed in accounting for face-enhancement and affiliation-building.",
      "Later work in interactional sociolinguistics suggests that face is co-constructed in interaction rather than individually held and managed.",
    ],
    examApplication:
      "Goffman's face theory is essential for analysing politeness, power, and relationships in spoken language (Unit 4) and written texts. When analysing conversations, identify face-threatening acts (criticisms, requests, interruptions, topic changes) and explain the strategies speakers use to mitigate them. In service encounters, interviews, or formal interactions, face management is central to understanding language choices. Combine with Grice's maxims for a full pragmatic analysis. In Unit 1, face theory can illuminate how texts manage the relationship between writer and reader.",
    unitRelevance: [
      "Unit 1 (Language Analysis -- writer-reader relationship, politeness in texts)",
      "Unit 2 (Language Diversity -- politeness variation across cultures and contexts)",
      "Unit 4 (Spoken Language -- face management in interaction, power and solidarity)",
    ],
  },
];
