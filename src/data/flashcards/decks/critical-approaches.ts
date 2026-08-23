// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'critical-approaches',
  title: 'Critical Approaches & Analytical Frameworks',
  description: 'Critical approaches for literary analysis',
  category: 'Criticism',
  board: 'All',
  cards: [
    {
      id: 'ca-1',
      front: 'Marxist Literary Criticism',
      back: `Definition: Analyses literature through the lens of economic systems, class struggle, power, and social inequality.\n\nKey Ideas:\n• Literature reflects economic conditions of its time\n• Class struggle is central to understanding texts\n• Authors and characters are products of their social class\n• Capitalist systems exploit the working class\n\nExample: In An Inspector Calls, Marxist analysis examines how capitalism enables the Birlings\' exploitation of Eva.\n\nHow to Apply: Discuss class conflict, labour, economic power, social hierarchy, exploitation.`,
    },
    {
      id: 'ca-2',
      front: 'Feminist Literary Criticism',
      back: `Definition: Analyses literature to understand how gender is represented, how patriarchy operates, and how women are positioned.\n\nKey Ideas:\n• Literature often reflects male-dominated society\n• Female characters may be marginalised or stereotyped\n• Language itself can be gendered (masculine as universal, feminine as "other")\n• Women writers have different experiences and perspectives\n\nExample: Analysis of how Eva is treated in An Inspector Calls reveals how women\' powerlessness in patriarchal society.\n\nHow to Apply: Discuss female characterisation, gender roles, power dynamics, representation of women\'s agency.`,
    },
    {
      id: 'ca-3',
      front: 'Psychoanalytic Criticism',
      back: `Definition: Applies psychological theories to understand characters, texts, and reader response.\n\nKey Ideas (Freud):\n• The unconscious mind shapes behaviour\n• Repressed desires and childhood trauma influence actions\n• Id (desire), Ego (reality), Superego (morality) are in conflict\n• Dream symbolism reveals hidden truths\n\nExample: Scrooge\'s isolation can be analysed as a psychological defense against pain of abandonment.\n\nHow to Apply: Discuss unconscious motivations, defense mechanisms, childhood trauma, symbolic meaning.`,
    },
    {
      id: 'ca-4',
      front: 'Formalist Criticism',
      back: `Definition: Focuses on the structure and formal elements of a text (language, form, technique) rather than author or context.\n\nKey Ideas:\n• The text itself is the primary object of study\n• Form and content are inseparable\n• Close reading of language and structure reveals meaning\n• Authorial intention is irrelevant; the text speaks for itself\n\nExample: Analysing how Dickens uses short sentences and exclamation marks in certain scenes to create urgency.\n\nHow to Apply: Focus on narrative technique, language choices, structure, form, without referencing author\'s life or social context.`,
    },
    {
      id: 'ca-5',
      front: 'Reader-Response Criticism',
      back: `Definition: Emphasises the role of the reader in creating meaning - different readers interpret texts differently.\n\nKey Ideas:\n• The text is incomplete until read\n• Readers bring their own experiences and interpretations\n• Meaning is created through the interaction of reader and text\n• No single "correct" interpretation exists\n\nExample: A modern reader may interpret Dickens\'s critique of capitalism differently than a Victorian reader.\n\nHow to Apply: Discuss how different readers might respond, what expectations are created and frustrated, how your interpretation differs from others\' because of your perspective.`,
    },
    {
      id: 'ca-6',
      front: 'Historical Criticism',
      back: `Definition: Understands a text through the historical period in which it was written and its historical context.\n\nKey Ideas:\n• Texts are products of their time\n• Historical context shapes themes, concerns, and values\n• Understanding historical facts aids interpretation\n• Authors respond to historical events and social conditions\n\nExample: A Christmas Carol can only be fully understood in the context of Victorian industrialisation, poverty, and workhouse system.\n\nHow to Apply: Reference historical facts, social conditions, political events, technological changes relevant to the text.`,
    },
    {
      id: 'ca-7',
      front: 'Biographical Criticism',
      back: `Definition: Interprets literature through the author\'s life - assumes biography influences the text.\n\nKey Ideas:\n• Author\'s experiences shape their writing\n• Autobiographical elements appear in fiction\n• Understanding the author\'s life clarifies the text\n• Personal struggles become universal themes\n\nExample: Dickens\'s childhood experience of poverty directly influences his championing of the poor in his novels.\n\nHow to Apply: Link author\'s biographical facts to themes, character creation, and authorial purpose.`,
    },
    {
      id: 'ca-8',
      front: 'Post-Colonial Criticism',
      back: `Definition: Analyses literature in the context of colonialism, examining power, representation, and cultural dominance.\n\nKey Ideas:\n• Colonised peoples are often misrepresented in Western literature\n• Colonial texts reflect imperialist ideology\n• Literary analysis can resist colonial narratives\n• Postcolonial literature reclaims voice and agency\n\nExample: Analysing how non-European characters are portrayed in texts, or how colonial authors imagine colonised cultures.\n\nHow to Apply: Examine representation of "other" cultures, power imbalances, stereotypes, resistance to colonial narratives.`,
    },
    {
      id: 'ca-9',
      front: 'Queer Theory',
      back: `Definition: Examines sexuality, gender identity, and non-normative identities in literature.\n\nKey Ideas:\n• Heterosexuality and traditional gender roles are constructed, not natural\n• Queer identities have been marginalised or hidden\n• Literary analysis can reveal queer subtext or representation\n• Sexuality and gender are fluid and complex\n\nExample: Analysing coded language or subtext that suggests same-sex desire in canonical texts.\n\nHow to Apply: Examine representation of LGBTQ+ characters, discuss coded language, analyse gender non-conformity, explore sexuality and desire.`,
    },
    {
      id: 'ca-10',
      front: 'Ecocriticism',
      back: `Definition: Examines literature through the lens of environmental awareness and humanity\'s relationship to nature.\n\nKey Ideas:\n• Texts often represent nature in particular ways\n• Environmental crisis is a modern concern\n• Literature can critique human exploitation of nature\n• Nature writing reveals attitudes toward the environment\n\nExample: Analysing how Romantic poets represent nature as spiritually significant vs. industrial society\'s exploitation of nature.\n\nHow to Apply: Discuss environmental themes, nature imagery, humanity\'s relationship to the natural world, ecological concerns.`,
    },
    {
      id: 'ca-11',
      front: 'Structuralism',
      back: `Definition: Analyses literature by identifying underlying structures (oppositions, patterns, systems) that give it meaning.\n\nKey Ideas:\n• Meaning comes from relationships between signs, not the signs themselves\n• Binary oppositions structure meaning (good/evil, civilised/savage)\n• Deep structures underlie surface meanings\n• All narratives follow archetypal patterns\n\nExample: Identifying how the opposition civilisation vs. savagery structures understanding of characters.\n\nHow to Apply: Identify binary oppositions, trace recurring patterns, analyse how systems of meaning are constructed.`,
    },
    {
      id: 'ca-12',
      front: 'Post-Structuralism / Deconstruction',
      back: `Definition: Questions the stability of meaning, arguing that texts contradict themselves and resist final interpretation.\n\nKey Ideas:\n• Meaning is not fixed or stable\n• Texts deconstruct their own arguments\n• Binary oppositions are hierarchical and unstable\n• Absence and presence are equally significant\n• No final, definitive reading is possible\n\nExample: Deconstructing the Inspector Calls argument by noting how uncertainty about the Inspector\'s identity undermines the moral message.\n\nHow to Apply: Identify contradictions, ambiguities, absences, and how the text resists closure or single interpretation.`,
    },
    {
      id: 'ca-13',
      front: 'Marxist Analysis: Base and Superstructure',
      back: `Definition: Base = economic system; Superstructure = culture, law, politics (all reflections of economic base).\n\nHow It Works:\n• Economic system determines culture and ideology\n• Literature is part of superstructure\n• Texts reflect class interests of their time\n• Dominant ideology appears natural and inevitable\n\nExample: The Birlings\' assumptions about class naturally reflect Victorian capitalist ideology.\n\nAnalysis: How do texts naturalise or critique economic systems? Whose interests do they serve?`,
    },
    {
      id: 'ca-14',
      front: 'Psychoanalytic: The Oedipal Complex',
      back: `Definition: Son\'s unconscious desire to replace father and possess mother; fundamental to human psychological development.\n\nHow It Appears:\n• Conflict between young and old (generational struggle)\n• Desire and taboo\n• Guilt and punishment\n• Authority figures and rebellion\n\nExample: Son\'s conflict with father figure, desire for forbidden object, guilt and self-punishment.\n\nAnalysis: Identify Oedipal patterns, father-son conflicts, transgression and guilt, psychological resolution.`,
    },
    {
      id: 'ca-15',
      front: 'Psychoanalytic: The Castration Complex',
      back: `Definition: Fear of losing power or authority; fear of the mother as threat; fundamental anxiety in patriarchal system.\n\nHow It Appears:\n• Fear of female power or sexuality\n• Male anxiety about inadequacy\n• Need to establish authority and control\n• Symbolic representation of powerlessness\n\nExample: Male characters\' need to assert dominance, fear of female characters, symbolic threats to male power.\n\nAnalysis: Identify male anxiety, female threat, symbolic emasculation, need for control.`,
    },
    {
      id: 'ca-16',
      front: 'Feminist: The Male Gaze',
      back: `Definition: The idea that women are constructed as objects of heterosexual male desire in cinema and literature.\n\nHow It Works:\n• Female characters are viewed through male perspective\n• Women are objectified sexually\n• Female agency is limited by male desire\n• Camera/narrator perspective is "male"\n\nExample: Female characters described in terms of sexual attractiveness rather than personhood.\n\nAnalysis: How are female characters viewed? Who has agency? Is perspective male-centric? How is female sexuality treated?`,
    },
    {
      id: 'ca-17',
      front: 'Feminist: The Woman Question',
      back: `Definition: Nineteenth-century debate about women\'s place in society - their education, work, property rights, and social role.\n\nHistorical Context:\n• Women had limited legal rights\n• Debate about women\'s capabilities and roles\n• Tension between domestic and public spheres\n• Literature engaged with these questions\n\nExample: Victorian texts debate whether women should work, be educated, have political voice.\n\nAnalysis: How do texts engage with the Woman Question? What positions do they take on women\'s rights and roles?`,
    },
    {
      id: 'ca-18',
      front: 'Psychoanalytic: Repression and the Unconscious',
      back: `Definition: Repression = forcing unacceptable thoughts/feelings into unconscious; they return as symptoms, dreams, or slips.\n\nHow It Appears:\n• Characters deny or repress guilt\n• Unconscious desires emerge in behaviour\n• Dreams and fantasies reveal repressed content\n• Psychosomatic symptoms (physical illness from psychological cause)\n\nExample: Scrooge\'s emotional coldness represses guilt over his past; the ghosts force repressed guilt to surface.\n\nAnalysis: What are characters repressing? How does it emerge? What does repression reveal about unconscious desires?`,
    },
    {
      id: 'ca-19',
      front: 'Marxist: Ideology and False Consciousness',
      back: `Definition: Ideology = system of beliefs that justifies power; False Consciousness = accepting ideology that doesn\'t serve your interests.\n\nHow It Works:\n• Ruling class imposes ideology on working class\n• Workers accept beliefs that exploit them\n• Literature can reveal or reinforce ideology\n• True consciousness = recognising exploitation\n\nExample: Workers in capitalism accept low wages because they believe in meritocracy (ideology), when they\'re actually exploited.\n\nAnalysis: What ideology does text promote? Whose interests does it serve? Do characters have false consciousness?`,
    },
    {
      id: 'ca-20',
      front: 'Historical: Historicism vs. New Historicism',
      back: `Definition:\n• Historicism = context explains meaning\n• New Historicism = context and text mutually shape each other; history is constructed through narrative\n\nDifference:\n• Historicism treats history as fixed background\n• New Historicism sees history as interpretive, texts as historical documents\n\nExample: Understanding Dickens requires historical context (industrialisation), but also how his novels shaped Victorian perception of history.\n\nAnalysis: How does text reflect its period? How does text shape historical understanding? What history is constructed?`,
    },
  ],
}

export default deck
