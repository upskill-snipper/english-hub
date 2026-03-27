// @ts-nocheck
import { LessonPlan } from "../../types";

export const animalFarmLessons: LessonPlan[] = [
  // ── Lesson 1: Introduction – Orwell, Russian Revolution & Allegory ───
  {
    id: "af-01-introduction",
    title: "Animal Farm: Orwell, the Russian Revolution & Allegory",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the life and political views of George Orwell",
      "Identify the key events of the Russian Revolution that inspired the novella",
      "Define and explain the concept of allegory with reference to Animal Farm",
      "Map major characters to their real-world historical counterparts"
    ],
    successCriteria: [
      "I can explain at least three facts about Orwell's life that influenced his writing",
      "I can describe the key stages of the Russian Revolution in simple terms",
      "I can define 'allegory' and explain how Animal Farm functions as one",
      "I can match at least four characters to their historical counterparts"
    ],
    keywords: [
      "allegory",
      "totalitarianism",
      "communism",
      "socialism",
      "propaganda",
      "revolution",
      "satire",
      "novella"
    ],
    starterActivity: {
      title: "What Makes a Revolution?",
      duration: "8 minutes",
      instructions:
        "Display an image of a protest/revolution on the board. Students brainstorm in pairs: What conditions cause people to rebel? What do they hope to achieve? What can go wrong after a revolution succeeds? Collect responses on a class mind-map. Teacher introduces the concept of the Russian Revolution as background.",
      differentiation: {
        support: "Provide a word bank: inequality, oppression, freedom, power, corruption, betrayal.",
        core: "Students generate their own ideas and justify them to their partner.",
        stretch:
          "Students consider a modern example of revolution and predict parallels with a story about power."
      },
      resources: ["Revolution image slide", "Mini-whiteboards", "Word bank cards (support tier)"]
    },
    mainActivities: [
      {
        title: "Orwell's Life and Political Context – Guided Reading",
        duration: "18 minutes",
        instructions:
          "Distribute the 'Who Was George Orwell?' information sheet covering key biographical details: his time at Eton, experiences in Burma, fighting in the Spanish Civil War, his opposition to Stalinism, and democratic socialist beliefs. Students read in pairs, highlight key facts, and complete a timeline of Orwell's life. Class discussion: How did these experiences shape his desire to write Animal Farm?",
        differentiation: {
          support:
            "Provide a partially completed timeline with key dates given. Simplified reading level on information sheet.",
          core: "Students complete the timeline independently and write a one-sentence summary of each event's significance.",
          stretch:
            "Students write a paragraph arguing which single experience was most important in shaping Orwell's political writing."
        },
        resources: [
          "'Who Was George Orwell?' information sheet",
          "Orwell timeline worksheet",
          "Highlighters"
        ]
      },
      {
        title: "The Russian Revolution & Allegory Matching Task",
        duration: "22 minutes",
        instructions:
          "Teacher delivers a concise overview of the Russian Revolution using annotated slides (Tsar Nicholas II, Karl Marx, Lenin, Trotsky, Stalin, the working class). Students then complete a 'Character–History Match' grid: given a list of Animal Farm characters (Old Major, Napoleon, Snowball, Boxer, Squealer, Mr Jones, Moses, Benjamin) and a list of historical figures/groups, they match pairs and write one sentence justifying each choice. Conclude with class feedback and teacher confirmation of key matches.",
        differentiation: {
          support:
            "Provide a cut-and-stick version of the matching task with clue sentences for each character.",
          core: "Students complete the matching grid with full justification sentences.",
          stretch:
            "Students add a third column predicting how each character's story might mirror the fate of their historical counterpart."
        },
        resources: [
          "Russian Revolution annotated slides",
          "Character–History Match grid worksheet",
          "Cut-and-stick cards (support tier)",
          "Scissors and glue (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Exit Ticket: Define Allegory",
      duration: "7 minutes",
      instructions:
        "Students complete an exit ticket: 'Define the word allegory. Explain how Animal Farm is an allegory by giving one example of a character and their historical counterpart.' Collect and use responses to gauge understanding before Lesson 2.",
      differentiation: {
        support: "Sentence starter provided: 'An allegory is... Animal Farm is an allegory because...'",
        core: "Full written response expected using key vocabulary.",
        stretch:
          "Students explain why Orwell chose to write an allegory using animals rather than writing a straightforward political essay."
      }
    },
    homework:
      "Research one additional fact about Stalin's rise to power and write a paragraph explaining how it might be reflected in Animal Farm.",
    worksheetQuestions: [
      {
        question:
          "What is an allegory? Explain in your own words.",
        lines: 3,
        modelAnswer:
          "An allegory is a story in which characters, events, and settings represent deeper meanings, usually political or moral. The surface narrative acts as a symbolic representation of real-world issues, allowing the author to make a point indirectly.",
        marks: 2
      },
      {
        question:
          "Name two experiences from Orwell's life that influenced him to write Animal Farm.",
        lines: 4,
        modelAnswer:
          "Orwell fought in the Spanish Civil War where he witnessed communist infighting and Stalinist betrayal of genuine socialists, which deeply disillusioned him. He also lived among the poor in England and Paris, experiencing inequality first-hand, which strengthened his belief in democratic socialism and opposition to totalitarianism.",
        marks: 4
      },
      {
        question:
          "Match each character to their historical counterpart and explain one pairing in detail: Old Major, Napoleon, Snowball, Mr Jones.",
        lines: 6,
        modelAnswer:
          "Old Major represents Karl Marx (and partly Lenin) — the idealist whose vision of equality inspires the revolution. Napoleon represents Stalin — the ruthless leader who seizes power for himself. Snowball represents Trotsky — the intelligent rival who is expelled. Mr Jones represents Tsar Nicholas II — the negligent ruler overthrown by the oppressed. For example, Napoleon mirrors Stalin because both eliminated their rivals (Snowball/Trotsky) and ruled through fear and propaganda.",
        marks: 5
      },
      {
        question:
          "Why do you think Orwell chose to use animals in a farmyard setting rather than writing directly about Russian politicians?",
        lines: 5,
        modelAnswer:
          "Orwell used animals because the fable form makes the political message accessible to a wide audience and harder to censor. The simplicity of the farmyard setting creates a stark contrast with the cruelty and corruption depicted, making the satire more powerful. It also allows readers to see the universal patterns of tyranny rather than viewing it as solely a Russian problem.",
        marks: 4
      },
      {
        question:
          "What is the difference between communism and totalitarianism as presented in Animal Farm?",
        lines: 5,
        modelAnswer:
          "Communism, as Old Major envisions it, is a system of shared ownership where all animals are equal and work together for the common good. Totalitarianism, which Napoleon establishes, is a system where one leader holds absolute power through fear, propaganda, and violence. Orwell's point is that revolutions promising equality can be hijacked by those seeking personal power, turning communism into dictatorship.",
        marks: 4
      },
      {
        question:
          "Explain why understanding the Russian Revolution is important for a reader studying Animal Farm.",
        lines: 4,
        modelAnswer:
          "Understanding the Russian Revolution allows the reader to recognise the allegorical parallels Orwell draws, deepening their interpretation of characters and events. It also helps the reader appreciate Orwell's critique — that the revolution betrayed its ideals — and respond to exam questions on context (AO3) with specific historical knowledge.",
        marks: 3
      }
    ],
    teacherNotes: [
      "This lesson assumes no prior knowledge of Animal Farm or the Russian Revolution. Pitch the historical content accessibly.",
      "The character-matching task is essential for the rest of the unit — ensure all students leave with a completed grid for their folders.",
      "Consider displaying a simple Russian Revolution timeline on the classroom wall for the duration of the unit.",
      "Sensitive handling may be needed when discussing revolution, violence, and political systems — frame as historical study.",
      "Collect exit tickets to identify students who need additional context support in subsequent lessons."
    ],
    targetedSkills: [
      "AO3: Context",
      "Reading comprehension",
      "Note-taking",
      "Inference",
      "Making connections between text and context"
    ]
  },

  // ── Lesson 2: Old Major's Speech – Propaganda & Persuasion ───────────
  {
    id: "af-02-old-major-speech",
    title: "Animal Farm: Old Major's Speech – Propaganda & Persuasion",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Analyse Old Major's speech in Chapter 1 as a piece of political rhetoric",
      "Identify persuasive techniques used: rhetorical questions, repetition, emotive language, inclusive pronouns",
      "Explore how Orwell uses the speech to introduce Animalism and the seeds of revolution",
      "Evaluate the effectiveness of Old Major's propaganda"
    ],
    successCriteria: [
      "I can identify at least four persuasive techniques in Old Major's speech",
      "I can analyse how specific language choices make the speech persuasive",
      "I can explain how the speech introduces the ideology of Animalism",
      "I can link Old Major's speech to real-world political propaganda"
    ],
    keywords: [
      "rhetoric",
      "propaganda",
      "persuasion",
      "rhetorical question",
      "emotive language",
      "inclusive pronoun",
      "repetition",
      "Animalism"
    ],
    starterActivity: {
      title: "What Makes a Great Speech?",
      duration: "7 minutes",
      instructions:
        "Play a 60-second clip of a famous speech (e.g. Martin Luther King Jr.'s 'I Have a Dream'). Students note down three things that make it powerful. Class feedback builds a list of persuasive techniques on the board. Teacher explains that today they will find these same techniques in a very different speaker — a prize-winning boar.",
      differentiation: {
        support: "Provide a checklist of persuasive techniques to tick off while listening.",
        core: "Students identify techniques independently and explain their effect.",
        stretch:
          "Students consider why politicians and leaders use these techniques and whether it is always ethical."
      },
      resources: ["Speech video clip and speaker", "Persuasive techniques checklist (support tier)"]
    },
    mainActivities: [
      {
        title: "Close Reading: Old Major's Speech (Chapter 1)",
        duration: "22 minutes",
        instructions:
          "Distribute printed extract of Old Major's speech ('Now, comrades, what is the nature of this life of ours?...'). Read aloud with dramatic expression. Students annotate for: (1) rhetorical questions, (2) repetition, (3) emotive language, (4) inclusive pronouns ('comrades', 'we', 'us'), (5) contrast between animals' suffering and Man's luxury, (6) imperative verbs. Use colour-coding: one colour per technique. After annotation, students write two analytical paragraphs (PEEL structure) on how Orwell makes the speech persuasive.",
        differentiation: {
          support:
            "Provide a pre-highlighted version with technique labels. Paragraph frame with sentence starters for PEEL.",
          core: "Students annotate independently and write two full PEEL paragraphs.",
          stretch:
            "Students write a third paragraph comparing Old Major's rhetoric to a real political speech and evaluating Orwell's satirical intent."
        },
        resources: [
          "Printed extract of Old Major's speech",
          "Colour highlighters (4 colours)",
          "PEEL paragraph frame (support tier)",
          "Persuasive techniques reference sheet"
        ]
      },
      {
        title: "Propaganda or Genuine Inspiration? – Class Debate",
        duration: "18 minutes",
        instructions:
          "Divide the class into two groups: (A) Old Major is a genuine visionary who inspires hope, (B) Old Major is a propagandist who manipulates the animals' emotions. Each side prepares three arguments with textual evidence (8 minutes). Conduct a structured debate with rebuttals (10 minutes). Teacher chairs and concludes by connecting to Orwell's exploration of how revolutionary ideals can be co-opted.",
        differentiation: {
          support:
            "Provide argument starter cards with pre-selected quotations for each side.",
          core: "Students select their own evidence and structure arguments independently.",
          stretch:
            "Students act as 'swing voters' who must weigh both sides and write a concluding judgement with evidence."
        },
        resources: [
          "Debate preparation worksheet",
          "Argument starter cards (support tier)",
          "Quotation bank"
        ]
      }
    ],
    plenaryActivity: {
      title: "Technique Takeaway",
      duration: "8 minutes",
      instructions:
        "Students complete a 'Technique Takeaway' grid: for each technique (rhetorical question, repetition, emotive language, inclusive pronoun), they write one quotation from Old Major's speech and explain its effect in one sentence. Peer-mark using the teacher's model answers on the board.",
      differentiation: {
        support: "Quotations provided; students explain the effect only.",
        core: "Students find quotations and explain effects independently.",
        stretch:
          "Students add a column explaining how each technique connects to real-world propaganda."
      }
    },
    homework:
      "Write a short speech (150–200 words) from Old Major's perspective, persuading the animals to rebel, using at least three persuasive techniques studied in class. Label each technique used.",
    worksheetQuestions: [
      {
        question:
          "Identify and explain the effect of one rhetorical question used by Old Major in his speech.",
        lines: 4,
        modelAnswer:
          "Old Major asks, 'Is it not crystal clear, comrades?' This rhetorical question is designed to make the animals feel that the answer is obvious and beyond dispute. It pressures them into agreement without allowing space for doubt, which is a classic propaganda technique that shuts down independent thinking.",
        marks: 3
      },
      {
        question:
          "How does Orwell use repetition in Old Major's speech to create a persuasive effect?",
        lines: 5,
        modelAnswer:
          "Orwell has Old Major repeat the word 'comrades' throughout the speech, which creates a sense of unity and solidarity among the animals. The repetition of 'All men are enemies. All animals are comrades' uses the parallel structure to simplify a complex political situation into a clear binary, making the message easy to remember and emotionally compelling — mirroring how real propagandists use slogans.",
        marks: 4
      },
      {
        question:
          "What is the purpose of Old Major's use of inclusive pronouns such as 'we' and 'us'?",
        lines: 4,
        modelAnswer:
          "Inclusive pronouns like 'we' and 'us' make the animals feel they are part of a collective struggle, fostering a sense of shared identity and purpose. It implies that Old Major is one of them, not above them, which builds trust. This mirrors how political leaders use inclusive language to create loyalty and a sense of common cause.",
        marks: 3
      },
      {
        question:
          "Explain how Old Major uses contrast to persuade the animals. Use a quotation in your answer.",
        lines: 5,
        modelAnswer:
          "Old Major contrasts the animals' miserable existence — 'our lives are miserable, laborious, and short' — with Man's comfort, arguing that Man 'consumes without producing.' This stark contrast between suffering and luxury provokes anger and resentment, making rebellion seem not only justified but morally necessary. Orwell uses this to show how propaganda exploits genuine grievances.",
        marks: 4
      },
      {
        question:
          "To what extent is Old Major a positive figure in the novella? Explain your view with evidence.",
        lines: 6,
        modelAnswer:
          "Old Major can be seen as positive because his vision of equality — 'all animals are equal' — represents a genuine desire for justice, mirroring Marx's ideals. However, Orwell also suggests that Old Major's idealistic rhetoric is dangerously simplistic and open to exploitation. He dies before the revolution, meaning he never has to confront the gap between ideals and reality. This ambiguity is central to Orwell's message: good intentions do not guarantee good outcomes.",
        marks: 5
      },
      {
        question:
          "How does Old Major's speech foreshadow the events of the rest of the novella?",
        lines: 5,
        modelAnswer:
          "Old Major's speech foreshadows the revolution by inspiring the animals to overthrow Mr Jones, but it also foreshadows the corruption that follows. His warning that 'all the habits of Man are evil' is later ironically broken by Napoleon walking on two legs and sleeping in a bed. The idealistic commandments born from this speech are gradually distorted, showing how revolutionary promises are betrayed — exactly as Orwell witnessed with Stalinism.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Have students keep their annotated extract — it will be referenced again in the Squealer lesson (Lesson 4) for comparison.",
      "The debate works best with clear ground rules established beforehand. Model respectful disagreement.",
      "If time is short, the debate can be replaced with a written argument for/against on a worksheet.",
      "Link to Language Paper 2, Question 5 (writing to persuade) for cross-curricular skill development.",
      "Consider displaying key quotations from the speech on the classroom wall for ongoing reference."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language analysis",
      "AO3: Context",
      "Persuasive writing techniques",
      "Debate and oracy",
      "PEEL paragraph structure"
    ]
  },

  // ── Lesson 3: Napoleon & Snowball – Leadership & Power Struggle ──────
  {
    id: "af-03-napoleon-snowball",
    title: "Animal Farm: Napoleon & Snowball – Leadership Styles & Power Struggle",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Compare and contrast the leadership styles of Napoleon and Snowball",
      "Analyse how Orwell presents the power struggle in Chapters 3–5",
      "Explore how Napoleon uses fear and force to seize control",
      "Connect the Napoleon–Snowball conflict to the Stalin–Trotsky rivalry"
    ],
    successCriteria: [
      "I can describe at least three differences between Napoleon's and Snowball's leadership",
      "I can analyse key quotations showing how each character seeks power",
      "I can explain the significance of the expulsion of Snowball",
      "I can link the power struggle to the historical context of Stalin vs. Trotsky"
    ],
    keywords: [
      "autocracy",
      "democracy",
      "tyranny",
      "expulsion",
      "scapegoat",
      "dogs",
      "windmill",
      "power struggle"
    ],
    starterActivity: {
      title: "Leadership Styles Spectrum",
      duration: "7 minutes",
      instructions:
        "Display a spectrum on the board from 'Democratic Leader' to 'Dictator'. Students are given six leadership scenario cards (e.g. 'Listens to everyone's ideas before deciding', 'Makes decisions alone and punishes disagreement'). They place each card on the spectrum and justify their positioning. Introduce Napoleon and Snowball as contrasting leadership models.",
      differentiation: {
        support: "Key vocabulary defined on the scenario cards.",
        core: "Students place and justify independently.",
        stretch:
          "Students add their own scenario cards and predict which leader — Napoleon or Snowball — each describes."
      },
      resources: ["Leadership spectrum display slide", "Scenario cards (x6)", "Blu-tack"]
    },
    mainActivities: [
      {
        title: "Dual Character Analysis: Napoleon vs. Snowball",
        duration: "22 minutes",
        instructions:
          "Students complete a dual-column character analysis grid using Chapters 3–5. For each category (Vision for the Farm, How They Communicate, How They Handle Disagreement, Attitude to Other Animals, Methods of Gaining Power), students find a quotation for each character and write an analytical sentence explaining what it reveals. Model the first row as a class. After completion, discuss: Which leader would you follow, and why?",
        differentiation: {
          support:
            "Provide a quotation bank with page references. First two rows partially completed as models.",
          core: "Students find quotations and write analysis independently.",
          stretch:
            "Students add a third column comparing each pair to Stalin and Trotsky with historical evidence."
        },
        resources: [
          "Dual character analysis grid worksheet",
          "Chapter 3–5 extracts",
          "Quotation bank (support tier)"
        ]
      },
      {
        title: "The Expulsion of Snowball – Close Analysis",
        duration: "20 minutes",
        instructions:
          "Read the extract describing Snowball's expulsion by Napoleon's dogs (Chapter 5). Students annotate for: (1) verbs suggesting violence and aggression, (2) the symbolism of the dogs, (3) the reaction of the other animals, (4) Orwell's use of short, dramatic sentences. In pairs, write a PEEL paragraph answering: 'How does Orwell present Napoleon's seizure of power as terrifying?' Share examples under the visualiser.",
        differentiation: {
          support:
            "Key quotations pre-underlined. PEEL frame provided with sentence starters.",
          core: "Students annotate and write independently with PEEL structure.",
          stretch:
            "Students compare the expulsion to a real historical event (Trotsky's exile) and evaluate Orwell's allegorical technique."
        },
        resources: [
          "Printed extract: Snowball's expulsion (Chapter 5)",
          "Annotation guide sheet",
          "PEEL frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Who's to Blame? Diamond-9 Ranking",
      duration: "8 minutes",
      instructions:
        "Give groups nine statement cards about why Snowball was expelled (e.g. 'Napoleon secretly trained the dogs', 'The animals were too afraid to speak up', 'Snowball trusted Napoleon too much'). Groups arrange them in a diamond-9 ranking from most to least important. Each group shares their top choice and justifies it. Teacher draws out the theme of complicity.",
      differentiation: {
        support: "Reduce to six cards; provide a simpler ranking frame.",
        core: "Full diamond-9 with verbal justifications.",
        stretch:
          "Groups write a concluding sentence explaining who bears the most responsibility and why."
      }
    },
    homework:
      "Write two paragraphs comparing Napoleon and Snowball's leadership. Use at least two quotations for each character. Conclude by explaining which leader is more dangerous and why.",
    worksheetQuestions: [
      {
        question:
          "How does Orwell present Snowball as an effective leader in the early chapters?",
        lines: 5,
        modelAnswer:
          "Orwell presents Snowball as an energetic and intelligent leader who genuinely works for the good of the farm. He organises committees, teaches the animals to read, and devises the windmill plan to improve their lives. The description of him as 'a more vivacious pig than Napoleon' and 'quicker in speech and more inventive' presents him as the superior leader in terms of ideas and communication, mirroring Trotsky's intellectual reputation.",
        marks: 4
      },
      {
        question:
          "How does Napoleon consolidate his power after Snowball's expulsion?",
        lines: 5,
        modelAnswer:
          "After expelling Snowball, Napoleon abolishes the Sunday meetings where animals debated decisions, replacing democracy with orders issued by a committee of pigs. He uses the dogs as a private army to intimidate dissenters. He also takes credit for Snowball's windmill plan, rewriting history to present himself as the true visionary. This mirrors Stalin's use of the secret police and propaganda to consolidate total control.",
        marks: 4
      },
      {
        question:
          "What is the symbolic significance of Napoleon's dogs?",
        lines: 4,
        modelAnswer:
          "Napoleon's dogs symbolise the secret police (the NKVD/KGB) used by Stalin to enforce obedience through fear and violence. Napoleon takes the puppies from their mothers and raises them in private, showing how dictators cultivate instruments of terror from an early stage. The dogs do not think independently — they are weapons of the state, representing how power can corrupt even natural loyalty.",
        marks: 4
      },
      {
        question:
          "Explain how Snowball is used as a scapegoat after his expulsion.",
        lines: 5,
        modelAnswer:
          "After Snowball's expulsion, Napoleon blames him for everything that goes wrong on the farm — from the windmill's destruction to sabotage and theft. Squealer spreads propaganda claiming Snowball was 'Jones's agent' from the very beginning. This mirrors how Stalin blamed Trotsky for failures, using him as a scapegoat to deflect criticism. Orwell shows how dictators need an external enemy to maintain fear and justify their authority.",
        marks: 4
      },
      {
        question:
          "Why do the other animals fail to prevent Napoleon's rise to power? Use evidence from the text.",
        lines: 6,
        modelAnswer:
          "The other animals fail to resist because of a combination of fear, ignorance, and misplaced loyalty. The dogs physically intimidate anyone who questions Napoleon, as seen when 'four young porkers...uttered shrill squeals of disapproval' and the dogs 'growled so threateningly' they fell silent. Many animals, like Boxer, believe Napoleon is always right ('Napoleon is always right'), substituting trust for critical thinking. Orwell suggests that tyranny thrives when citizens are too afraid or too uneducated to challenge authority.",
        marks: 5
      },
      {
        question:
          "Compare how Napoleon and Snowball try to gain the support of the other animals. Which approach is more effective, and why?",
        lines: 6,
        modelAnswer:
          "Snowball uses democratic persuasion — he delivers eloquent speeches, engages in debate, and tries to win support through ideas and shared decision-making. Napoleon, by contrast, uses minimal speech but maximum force: he secretly trains the dogs and relies on Squealer to spread propaganda on his behalf. Ultimately, Napoleon's approach is more effective because it removes the possibility of opposition entirely. Orwell's message is bleak: in a corrupt system, force will always defeat reason.",
        marks: 5
      }
    ],
    teacherNotes: [
      "This lesson is central to the unit — the Napoleon/Snowball dynamic underpins almost every subsequent theme.",
      "If students have not yet read Chapters 3–5, provide a clear summary before the main activities.",
      "The diamond-9 plenary works best with physical cards that can be moved around on desks.",
      "Encourage students to see the other animals' passivity as complicity — this links to themes of education and responsibility.",
      "Display a key quotation wall: add Napoleon and Snowball quotations after this lesson."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language and structural analysis",
      "AO3: Context (Stalin vs. Trotsky)",
      "Comparative analysis",
      "PEEL paragraph structure",
      "Evaluative judgement"
    ]
  },

  // ── Lesson 4: Squealer – Language, Propaganda & Manipulation ─────────
  {
    id: "af-04-squealer",
    title: "Animal Farm: Squealer – Language, Propaganda & Manipulation",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Analyse how Orwell presents Squealer as a master of propaganda and manipulation",
      "Identify specific language techniques Squealer uses to control the animals",
      "Explore the relationship between language and power in the novella",
      "Connect Squealer to the role of state-controlled media and propaganda in totalitarian regimes"
    ],
    successCriteria: [
      "I can explain Squealer's role in maintaining Napoleon's power",
      "I can identify and analyse at least three manipulation techniques used by Squealer",
      "I can explain how Orwell uses Squealer to show that language can be a weapon",
      "I can link Squealer to real-world propaganda and state-controlled media"
    ],
    keywords: [
      "propaganda",
      "manipulation",
      "rhetoric",
      "euphemism",
      "statistics",
      "fear-mongering",
      "revision",
      "Pravda"
    ],
    starterActivity: {
      title: "Spot the Spin",
      duration: "7 minutes",
      instructions:
        "Display three pairs of sentences describing the same event — one truthful, one 'spun' (e.g. 'The food rations were cut by half' vs. 'A readjustment of food rations has been announced for the benefit of all animals'). Students identify which is the propaganda version and explain how language has been manipulated. Introduce Squealer as the master of this technique.",
      differentiation: {
        support: "Key manipulation techniques labelled next to each pair.",
        core: "Students identify and explain the spin independently.",
        stretch:
          "Students write their own 'truthful vs. spun' pair for a school scenario."
      },
      resources: ["'Spot the Spin' slide", "Mini-whiteboards"]
    },
    mainActivities: [
      {
        title: "Squealer's Toolkit – Analysing Propaganda Techniques",
        duration: "22 minutes",
        instructions:
          "Students work through four key Squealer extracts from across the novella: (1) justifying the pigs taking the milk and apples, (2) rewriting the history of the Battle of the Cowshed, (3) explaining Boxer's removal to the 'hospital', (4) justifying the commandment changes. For each extract, students identify the propaganda technique (euphemism, fear-mongering, false statistics, historical revisionism, appeal to authority), highlight key language, and write an analytical sentence explaining how Squealer manipulates the animals. Complete a 'Squealer's Toolkit' grid.",
        differentiation: {
          support:
            "Technique names provided alongside each extract. Sentence starters for analysis.",
          core: "Students identify techniques and write analysis independently.",
          stretch:
            "Students rank the four extracts from least to most manipulative and justify their ranking in a paragraph."
        },
        resources: [
          "Four printed Squealer extracts",
          "'Squealer's Toolkit' analysis grid",
          "Propaganda techniques reference card",
          "Sentence starters (support tier)"
        ]
      },
      {
        title: "Rewriting History – Creative & Analytical Task",
        duration: "20 minutes",
        instructions:
          "Part A (10 mins): Students are given a simple factual account of an event on the farm (e.g. 'Napoleon ordered the execution of four pigs who confessed under duress'). They rewrite it as Squealer would present it to the animals, using at least three propaganda techniques. Part B (10 mins): Students then write an analytical paragraph explaining how Orwell uses Squealer to show that 'he who controls language controls thought.' Share examples under the visualiser.",
        differentiation: {
          support:
            "Provide a Squealer 'voice' word bank and a writing frame for the analytical paragraph.",
          core: "Students complete both parts independently using key terminology.",
          stretch:
            "Students compare Squealer's methods to a modern example of media manipulation and evaluate the parallel."
        },
        resources: [
          "Factual account card",
          "Squealer voice word bank (support tier)",
          "Analytical paragraph frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Could You See Through Squealer?",
      duration: "8 minutes",
      instructions:
        "Teacher reads a new 'Squealer speech' aloud (created by teacher, in Squealer's style, about a fictional farm decision). Students hold up green cards if they believe the speech, red if they see through the propaganda. Discuss: Why is it harder to see through propaganda when you are living inside the system? Link to Orwell's broader message about critical thinking.",
      differentiation: {
        support: "Students explain one technique they spotted.",
        core: "Students identify two techniques and explain how they create a false impression.",
        stretch:
          "Students explain why the other animals believed Squealer despite the obvious manipulation."
      }
    },
    homework:
      "Find a real-world example of propaganda or 'spin' (from advertising, politics, or media). Write a paragraph analysing the techniques used and comparing them to Squealer's methods.",
    worksheetQuestions: [
      {
        question:
          "How does Squealer justify the pigs taking the milk and apples? What techniques does he use?",
        lines: 5,
        modelAnswer:
          "Squealer claims it is 'scientifically proven' that milk and apples are essential for pigs' brain function. He uses false statistics to sound authoritative and then resorts to fear-mongering: 'Do you know what would happen if we pigs failed in our duty? Jones would come back!' This combination of pseudo-science and fear is designed to silence objections by making the animals feel their survival depends on the pigs' privileges.",
        marks: 4
      },
      {
        question:
          "Explain the significance of Squealer being described as someone who 'could turn black into white.'",
        lines: 4,
        modelAnswer:
          "This description establishes Squealer as so skilled in manipulation that he can make the animals believe the opposite of the truth. It foreshadows how he will rewrite history, change the commandments, and justify every injustice. Orwell is warning that language, in the hands of a skilled propagandist, can distort reality entirely — a theme central to both Animal Farm and his later novel Nineteen Eighty-Four.",
        marks: 4
      },
      {
        question:
          "How does Squealer rewrite the history of the Battle of the Cowshed?",
        lines: 5,
        modelAnswer:
          "Squealer gradually transforms the narrative so that Snowball, who was actually a hero of the battle, is presented as a traitor and coward who fought on Jones's side. He claims to have 'documents' proving Snowball's treachery and uses Napoleon's authority to override the animals' own memories. This mirrors Stalinist propaganda where Trotsky was airbrushed out of photographs and history was rewritten to glorify Stalin.",
        marks: 4
      },
      {
        question:
          "What is a euphemism? Give an example of how Squealer uses euphemism in the novella.",
        lines: 4,
        modelAnswer:
          "A euphemism is a mild or indirect expression used to disguise something unpleasant. When Boxer is sent to the knacker's yard to be slaughtered, Squealer tells the animals he was taken to a 'hospital' and died peacefully. The van's sign reading 'Horse Slaughterer' is explained away as an old van that had not been repainted. This euphemism conceals a horrifying betrayal behind comforting language.",
        marks: 3
      },
      {
        question:
          "Why is Squealer essential to Napoleon's power? Could Napoleon rule without him?",
        lines: 5,
        modelAnswer:
          "Squealer is essential because he provides the ideological justification for Napoleon's actions, making tyranny appear reasonable and necessary. While Napoleon has the dogs for physical intimidation, Squealer controls the animals' understanding of reality. Without Squealer, the animals might recognise the injustice and rebel. However, one could argue that fear alone (the dogs) might be sufficient — but Orwell's point is that true totalitarianism requires both force and propaganda working together.",
        marks: 5
      },
      {
        question:
          "How does Orwell use Squealer to comment on the power of media and language in society?",
        lines: 6,
        modelAnswer:
          "Through Squealer, Orwell shows that state-controlled media is one of the most powerful tools of oppression. Squealer represents Pravda, the Soviet state newspaper, which spread propaganda as truth. Orwell argues that when one group controls all information, citizens lose the ability to think critically. The animals' acceptance of Squealer's lies reflects how populations under totalitarian regimes can be conditioned to accept absurdities — a theme Orwell developed further with the concept of 'doublethink' in Nineteen Eighty-Four.",
        marks: 5
      }
    ],
    teacherNotes: [
      "This lesson links powerfully to Language Paper 2 (viewpoints and perspectives) — make the cross-curricular connection explicit.",
      "The creative rewriting task often produces excellent work — consider displaying the best examples.",
      "Students should retain the 'Squealer's Toolkit' grid as a revision resource.",
      "Sensitive discussion may be needed around modern propaganda — encourage critical thinking without promoting cynicism.",
      "If time allows, compare a Squealer extract with an Old Major extract from Lesson 2 to show different uses of persuasion."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language analysis",
      "AO3: Context (propaganda, Pravda, Stalinism)",
      "Critical thinking",
      "Creative writing",
      "Evaluative writing"
    ]
  },

  // ── Lesson 5: Boxer – Loyalty, Exploitation & the Working Class ──────
  {
    id: "af-05-boxer",
    title: "Animal Farm: Boxer – Loyalty, Exploitation & the Working Class",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Analyse how Orwell presents Boxer as a symbol of the exploited working class",
      "Explore the significance of Boxer's two mottoes and what they reveal about blind loyalty",
      "Examine Boxer's fate as Orwell's most powerful critique of totalitarianism",
      "Evaluate reader response to Boxer's treatment and its emotional impact"
    ],
    successCriteria: [
      "I can explain how Boxer represents the loyal but exploited working class",
      "I can analyse key quotations about Boxer using PEEL paragraphs",
      "I can explain the significance of Boxer's death and what Orwell is saying about power",
      "I can link Boxer to the Stakhanovite workers and the Soviet exploitation of labour"
    ],
    keywords: [
      "exploitation",
      "proletariat",
      "loyalty",
      "naivety",
      "betrayal",
      "Stakhanovite",
      "martyr",
      "pathos"
    ],
    starterActivity: {
      title: "Loyalty: Virtue or Weakness?",
      duration: "7 minutes",
      instructions:
        "Display the statement: 'Loyalty is always a good thing.' Students stand on a 'Strongly Agree' to 'Strongly Disagree' continuum. Selected students justify their position. Teacher steers discussion towards: when can loyalty be exploited? When does it become dangerous? Introduce Boxer as a character who embodies this tension.",
      differentiation: {
        support: "Provide example scenarios to help students decide their position.",
        core: "Students justify their position with a reason and an example.",
        stretch:
          "Students argue for both sides before choosing, demonstrating nuanced thinking."
      },
      resources: ["Continuum labels (Strongly Agree / Strongly Disagree)", "Statement slide"]
    },
    mainActivities: [
      {
        title: "Tracking Boxer: From Hope to Betrayal",
        duration: "22 minutes",
        instructions:
          "Students complete a 'Boxer's Journey' tracking grid across the novella. For each stage (Chapters 1–2: the Revolution; Chapters 3–4: Building the Farm; Chapters 5–7: Under Napoleon's Rule; Chapters 8–9: Boxer's Decline and Death), students find a key quotation, identify what it reveals about Boxer, and explain how the reader's response changes. Focus on his mottoes: 'I will work harder' and 'Napoleon is always right.' Discuss how these shift from admirable to tragic as the novella progresses.",
        differentiation: {
          support:
            "Quotations provided with page references. 'What it reveals' column has sentence starters.",
          core: "Students find quotations and complete analysis independently.",
          stretch:
            "Students write a paragraph charting how Orwell deliberately builds reader sympathy for Boxer to make his fate more devastating."
        },
        resources: [
          "'Boxer's Journey' tracking grid",
          "Chapter extracts booklet",
          "Quotation bank (support tier)"
        ]
      },
      {
        title: "Boxer's Death – Close Reading & Emotional Response",
        duration: "20 minutes",
        instructions:
          "Read the extract describing Boxer's removal in the knacker's van (Chapter 9). Students annotate for: (1) the animals' reactions, (2) Benjamin's rare emotional outburst, (3) dramatic irony — what the reader knows vs. what the animals are told, (4) Squealer's euphemistic explanation, (5) Orwell's use of pathos. Students then write two PEEL paragraphs: 'How does Orwell make Boxer's fate the most emotionally powerful moment in the novella?' Include context on how Stalin discarded loyal workers.",
        differentiation: {
          support:
            "Pre-annotated extract with key words underlined. PEEL frame with sentence starters.",
          core: "Independent annotation and two full PEEL paragraphs.",
          stretch:
            "Students write a third paragraph evaluating whether Boxer is entirely a victim or partly responsible for his own fate through willful ignorance."
        },
        resources: [
          "Printed extract: Boxer's removal (Chapter 9)",
          "Annotation guide",
          "PEEL frame (support tier)",
          "Context card: Stakhanovite workers in the USSR"
        ]
      }
    ],
    plenaryActivity: {
      title: "Boxer's Epitaph",
      duration: "8 minutes",
      instructions:
        "Students write a short epitaph (2–3 sentences) for Boxer's gravestone, capturing what he represented and how he was betrayed. Share examples. Teacher concludes by asking: 'What is Orwell's message about the relationship between the rulers and the working class?' Students write their answer on a sticky note and place it on the board as they leave.",
      differentiation: {
        support: "Provide a sentence frame: 'Here lies Boxer, who...'",
        core: "Students write their own epitaph using emotive language.",
        stretch:
          "Students write two epitaphs — one as Squealer would write it, one as Orwell would — and explain the difference."
      }
    },
    homework:
      "Write a diary entry from Boxer's perspective on the night before he is taken away. Include his reflections on his life, his loyalty to Napoleon, and any doubts he might have had. Aim for 200–250 words.",
    worksheetQuestions: [
      {
        question:
          "What do Boxer's two mottoes — 'I will work harder' and 'Napoleon is always right' — reveal about his character?",
        lines: 5,
        modelAnswer:
          "'I will work harder' reveals Boxer's incredible dedication, selflessness, and belief that hard work alone can solve problems. It makes him admirable but also tragically naive, as no amount of personal effort can fix a corrupt system. 'Napoleon is always right' reveals his blind loyalty and willingness to surrender independent thought to authority. Together, the mottoes show a character whose greatest virtues — loyalty and work ethic — are exploited by those in power, making him Orwell's most sympathetic and tragic figure.",
        marks: 5
      },
      {
        question:
          "How does Orwell use Boxer to represent the working class? Refer to the historical context.",
        lines: 5,
        modelAnswer:
          "Boxer represents the loyal Soviet working class (proletariat), particularly the Stakhanovite workers who were celebrated for exceeding production targets. Like these workers, Boxer gives everything to the system and receives nothing in return. Orwell shows that the working class built the revolution through their labour but were ultimately discarded by the ruling elite. Boxer's fate — sent to the knacker's when no longer useful — is Orwell's damning verdict on how totalitarian regimes exploit and then betray their most loyal citizens.",
        marks: 4
      },
      {
        question:
          "Explain the dramatic irony in the scene where Boxer is taken away by the knacker's van.",
        lines: 5,
        modelAnswer:
          "The dramatic irony lies in the gap between what the reader (and Benjamin) knows and what most of the animals believe. The van is clearly labelled 'Horse Slaughterer and Glue Boiler,' yet Squealer tells the animals it was a hospital van with an old sign. The reader knows Boxer is being sent to his death, but the animals' trust in Squealer overrides the evidence of their own eyes. This irony makes the scene devastatingly powerful and reinforces Orwell's theme that propaganda can make people deny observable reality.",
        marks: 4
      },
      {
        question:
          "Why is Benjamin's reaction to Boxer's removal significant?",
        lines: 4,
        modelAnswer:
          "Benjamin, the cynical donkey who usually refuses to express opinions, breaks his silence to desperately shout the truth about the van. This is significant because it shows that even the most detached observer is moved by this ultimate betrayal. Benjamin represents those who see through the propaganda but normally choose not to act — his outburst suggests that there are limits to political apathy. However, his intervention comes too late, reinforcing Orwell's warning that silence in the face of injustice is a form of complicity.",
        marks: 4
      },
      {
        question:
          "To what extent is Boxer responsible for his own fate? Argue both sides.",
        lines: 6,
        modelAnswer:
          "On one hand, Boxer is entirely a victim: he is uneducated, trusting, and systematically lied to by Squealer and Napoleon. He has no access to alternative information and his good nature is deliberately exploited. On the other hand, Boxer chooses not to think critically — his motto 'Napoleon is always right' shows a voluntary surrender of independent judgement. When he has moments of doubt, he suppresses them. Orwell uses this ambiguity to argue that totalitarianism requires the complicity of the oppressed: the rulers are guilty of cruelty, but the refusal to question authority also enables tyranny.",
        marks: 5
      },
      {
        question:
          "How does Orwell use the character of Boxer to create pathos? Use quotations in your answer.",
        lines: 6,
        modelAnswer:
          "Orwell builds pathos by making Boxer the most likeable and hardworking character, then subjecting him to the cruellest fate. Boxer's dedication — 'his answer to every problem, every setback, was I will work harder' — earns the reader's deep admiration. His physical decline, collapsing while 'a thin stream of blood had trickled out of his mouth,' evokes pity. The ultimate betrayal — being sold for whiskey money — transforms pity into outrage. Orwell crafts Boxer's arc to create maximum emotional impact, ensuring the reader feels the injustice of totalitarianism not just intellectually but viscerally.",
        marks: 5
      }
    ],
    teacherNotes: [
      "Boxer's death is often the most emotionally impactful moment for students — allow space for genuine emotional responses.",
      "The creative homework (diary entry) tends to produce students' best writing — consider using it as a display piece.",
      "Link to the 'complicity' theme from Lesson 3 — the animals' failure to save Boxer connects to their failure to stop Napoleon.",
      "Stakhanovite context may need explicit teaching — prepare a brief slide or handout if needed.",
      "This lesson works well as a double with Lesson 6 (Commandments) to show the full arc of betrayal."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language analysis (pathos, irony)",
      "AO3: Context (Stakhanovites, working class exploitation)",
      "Empathetic and creative writing",
      "Evaluative argument",
      "PEEL paragraph structure"
    ]
  },

  // ── Lesson 6: The Commandments – Corruption, Hypocrisy & Revision ───
  {
    id: "af-06-commandments",
    title: "Animal Farm: The Commandments – Corruption, Hypocrisy & Revision of History",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Track the changes to the Seven Commandments throughout the novella",
      "Analyse how the commandment changes represent the gradual corruption of the revolution",
      "Explore the concept of historical revisionism and its real-world parallels",
      "Evaluate the significance of the final commandment: 'All animals are equal, but some animals are more equal than others'"
    ],
    successCriteria: [
      "I can identify how each commandment is altered and explain what each change reveals",
      "I can analyse the language of the altered commandments to show manipulation",
      "I can explain the concept of historical revisionism with reference to Stalinism",
      "I can write an analytical paragraph on the significance of the final commandment"
    ],
    keywords: [
      "commandment",
      "corruption",
      "hypocrisy",
      "revisionism",
      "gradual",
      "oxymoron",
      "equality",
      "totalitarianism"
    ],
    starterActivity: {
      title: "Rule Change Challenge",
      duration: "7 minutes",
      instructions:
        "Display a simple classroom rule (e.g. 'No student may use their phone in class'). Tell students you are going to 'update' it: 'No student may use their phone in class without good reason.' Then: 'No student may use their phone in class without the teacher's permission.' Then: 'Students may use their phones in class.' Students discuss: How did the rule change from a restriction to a permission? How were the changes made to seem reasonable? Link to the commandments in Animal Farm.",
      differentiation: {
        support: "Teacher explicitly narrates how each change weakens the rule.",
        core: "Students identify the pattern of gradual erosion independently.",
        stretch:
          "Students predict how this technique could be used to dismantle more important rights."
      },
      resources: ["Rule change slides (x4)"]
    },
    mainActivities: [
      {
        title: "Tracking the Commandments: Original vs. Revised",
        duration: "22 minutes",
        instructions:
          "Students complete a 'Commandment Tracker' table with columns: Original Commandment | Revised Version | What Changed | What It Reveals About the Pigs | Chapter Reference. Work through all seven commandments plus the final single commandment. For each, students explain how the revision benefits the pigs and what it takes away from the other animals. Discuss: Why do the animals not notice or object? Link to the themes of education, memory, and propaganda.",
        differentiation: {
          support:
            "Provide the original and revised commandments pre-filled. Students complete the analysis columns only.",
          core: "Students find both versions from the text and complete full analysis.",
          stretch:
            "Students add a column comparing each change to a real-world example of governments changing laws to benefit those in power."
        },
        resources: [
          "'Commandment Tracker' worksheet",
          "Animal Farm text/extracts booklet",
          "Commandment reference sheet (support tier)"
        ]
      },
      {
        title: "The Final Commandment – Close Analysis & Discussion",
        duration: "20 minutes",
        instructions:
          "Display the final commandment: 'All animals are equal, but some animals are more equal than others.' Students first discuss: Is this sentence a contradiction, a paradox, or something else? Introduce the term 'oxymoron' (or paradox). Students then write a detailed analytical paragraph explaining: (1) how this single line encapsulates the entire message of the novella, (2) the irony of its placement where the Seven Commandments once stood, (3) how it reflects the real outcome of the Russian Revolution. Share paragraphs under the visualiser and peer-assess using the mark scheme.",
        differentiation: {
          support:
            "Paragraph frame provided with embedded sentence starters. Key terms defined on a reference card.",
          core: "Students write independently using PEEL structure and key terminology.",
          stretch:
            "Students compare this commandment to a line from Nineteen Eighty-Four ('War is Peace, Freedom is Slavery, Ignorance is Strength') and evaluate Orwell's use of paradox across his work."
        },
        resources: [
          "Final commandment display slide",
          "Paragraph frame (support tier)",
          "GCSE mark scheme extract",
          "Peer assessment checklist"
        ]
      }
    ],
    plenaryActivity: {
      title: "If the Walls Could Talk",
      duration: "8 minutes",
      instructions:
        "Students imagine they are the barn wall on which the commandments are painted. Write 3–4 sentences from the wall's perspective, describing what it has witnessed. This creative micro-task consolidates understanding of the commandments' transformation. Share two or three examples and discuss which captures Orwell's message most effectively.",
      differentiation: {
        support: "Sentence starter: 'I am the barn wall. I have seen the words change from...'",
        core: "Students write independently using emotive and descriptive language.",
        stretch:
          "Students adopt an ironic or satirical tone in the style of Orwell himself."
      }
    },
    homework:
      "Design a poster showing the original Seven Commandments on one side and the corrupted versions on the other. Below, write a paragraph explaining what Orwell is saying about how power corrupts ideals.",
    worksheetQuestions: [
      {
        question:
          "List three of the original Seven Commandments and explain how each is broken by the pigs.",
        lines: 6,
        modelAnswer:
          "(1) 'No animal shall sleep in a bed' — the pigs move into the farmhouse and sleep in beds, then alter the commandment to 'No animal shall sleep in a bed with sheets.' (2) 'No animal shall drink alcohol' — Napoleon and the pigs begin drinking whiskey, and the commandment is changed to 'No animal shall drink alcohol to excess.' (3) 'No animal shall kill any other animal' — Napoleon orders the execution of 'traitors,' and the commandment becomes 'No animal shall kill any other animal without cause.' Each change bends the rule to excuse the pigs' behaviour.",
        marks: 6
      },
      {
        question:
          "Why do the other animals fail to notice or challenge the changes to the commandments?",
        lines: 5,
        modelAnswer:
          "Most animals cannot read well enough to check the commandments for themselves — only the pigs and Benjamin are fully literate. They rely on Squealer's explanations and their own faulty memories. When they sense something has changed, Squealer convinces them they are misremembering. Orwell shows that a lack of education makes the population vulnerable to manipulation, and that those who can see the truth (like Benjamin) often choose not to speak up.",
        marks: 4
      },
      {
        question:
          "Explain the significance of the final commandment: 'All animals are equal, but some animals are more equal than others.'",
        lines: 5,
        modelAnswer:
          "This line is the climax of the novella's political message. It is an oxymoron — equality cannot have degrees — which exposes the pigs' complete hypocrisy. It replaces the original seven commandments with a single statement that openly enshrines inequality while maintaining the language of equality. It mirrors how totalitarian regimes use the rhetoric of the revolution to justify the very oppression they overthrew, and it encapsulates Orwell's central argument: that power corrupts, and revolutions can end up recreating the injustice they sought to destroy.",
        marks: 5
      },
      {
        question:
          "What is historical revisionism, and how does Orwell depict it in Animal Farm?",
        lines: 5,
        modelAnswer:
          "Historical revisionism is the deliberate distortion or rewriting of history to serve a political agenda. In Animal Farm, Napoleon and Squealer systematically rewrite the past: Snowball is transformed from hero to traitor, Napoleon is credited with the windmill plan, and the commandments are altered as if they were always that way. This mirrors Stalin's regime, where photographs were doctored, encyclopaedia entries rewritten, and opponents erased from official records. Orwell shows that controlling the past is essential to controlling the present.",
        marks: 4
      },
      {
        question:
          "How does the gradual nature of the commandment changes contribute to Orwell's message?",
        lines: 5,
        modelAnswer:
          "The gradual nature of the changes is crucial to Orwell's message. If the pigs had abolished all commandments overnight, the animals would have resisted. Instead, each small change seems reasonable in isolation — a single word added here, a qualifying clause there. This mirrors how real authoritarian regimes erode freedoms incrementally, so that no single change provokes rebellion. Orwell warns that corruption often happens not in dramatic coups but in quiet, incremental compromises that people accept because each individual step seems small.",
        marks: 5
      },
      {
        question:
          "Compare the commandments at the beginning and end of the novella. What has changed and what does this tell us about the revolution?",
        lines: 6,
        modelAnswer:
          "At the beginning, the Seven Commandments represent the idealistic principles of Animalism — equality, freedom, and solidarity. By the end, they have been reduced to a single paradoxical statement that openly justifies the pigs' supremacy. The transformation from seven idealistic rules to one cynical justification for inequality mirrors the arc of the Russian Revolution: from the hopeful ideals of Marx and Lenin to the brutal dictatorship of Stalin. Orwell's message is that revolutions which do not safeguard their principles through education and accountability will inevitably be corrupted by those who seek power.",
        marks: 5
      }
    ],
    teacherNotes: [
      "The starter activity about changing classroom rules is highly effective — students immediately grasp the manipulation technique.",
      "Ensure students understand that the commandments change at different points in the novella, not all at once.",
      "The 'barn wall' creative plenary often produces surprisingly powerful writing — consider extending it if time allows.",
      "Link explicitly to AO3 (context) by discussing Stalinist revision of photographs, encyclopaedias, and historical records.",
      "This lesson pairs well with Lesson 4 (Squealer) — the commandment changes are Squealer's work in action."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language analysis (irony, paradox, oxymoron)",
      "AO3: Context (Stalinism, historical revisionism)",
      "Tracking structural development",
      "Evaluative writing",
      "Creative writing"
    ]
  },

  // ── Lesson 7: Key Themes – Power, Corruption, Class, Education ───────
  {
    id: "af-07-themes",
    title: "Animal Farm: Key Themes – Power, Corruption, Class & Education",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Identify and explore the four key themes: power and corruption, class and inequality, education and ignorance, language and control",
      "Select and analyse key quotations that illustrate each theme",
      "Understand how themes interconnect across the novella",
      "Prepare thematic evidence banks for exam revision"
    ],
    successCriteria: [
      "I can explain each of the four key themes with reference to the text",
      "I can select and analyse at least two quotations per theme",
      "I can explain how themes connect to one another",
      "I can write a thematic paragraph suitable for an exam response"
    ],
    keywords: [
      "theme",
      "power",
      "corruption",
      "class",
      "inequality",
      "education",
      "ignorance",
      "control"
    ],
    starterActivity: {
      title: "Theme Word Cloud",
      duration: "7 minutes",
      instructions:
        "Display a word cloud containing 15–20 words associated with Animal Farm (power, corruption, betrayal, loyalty, equality, education, propaganda, class, revolution, fear, ignorance, language, control, hope, freedom). Students select the five words they think are most important to the novella's message and rank them. Compare rankings in pairs and justify choices. Teacher uses this to introduce the four key thematic areas for the lesson.",
      differentiation: {
        support: "Reduce to ten words; definitions provided.",
        core: "Students select and rank independently with justification.",
        stretch:
          "Students identify connections between their five chosen words and predict how themes interrelate."
      },
      resources: ["Theme word cloud slide", "Mini-whiteboards"]
    },
    mainActivities: [
      {
        title: "Thematic Evidence Bank – Group Expert Task",
        duration: "25 minutes",
        instructions:
          "Divide the class into four 'expert' groups, one per theme: (1) Power & Corruption, (2) Class & Inequality, (3) Education & Ignorance, (4) Language & Control. Each group receives a theme guide card with key questions to consider. Groups find 4–5 key quotations for their theme, write analytical notes on each, and identify which characters and events best illustrate the theme. After 15 minutes, regroup into 'jigsaw' groups (one expert per theme) and each expert teaches their theme to the others. All students complete a full four-theme evidence bank grid.",
        differentiation: {
          support:
            "Theme guide cards include suggested quotations with page references. Evidence bank grid has sentence starters.",
          core: "Students find quotations and write analysis independently.",
          stretch:
            "Students add a 'connections' row at the bottom of their grid, explaining how two or more themes work together."
        },
        resources: [
          "Theme guide cards (x4 sets)",
          "Four-theme evidence bank grid",
          "Animal Farm text/extracts booklet",
          "Quotation bank (support tier)"
        ]
      },
      {
        title: "Themes in Action – Exam-Style Paragraph Practice",
        duration: "18 minutes",
        instructions:
          "Teacher models a thematic paragraph on the board responding to: 'How does Orwell explore the theme of power in Animal Farm?' using PEEL structure with embedded quotations and context. Students then choose one of the remaining three themes and write their own exam-style paragraph. Peer-assess using a simplified mark scheme checklist (Does it include: a clear point? An embedded quotation? Language analysis? Context? A link to Orwell's message?).",
        differentiation: {
          support:
            "Paragraph frame provided with the structure modelled and key phrases given.",
          core: "Students write independently using PEEL and the mark scheme checklist.",
          stretch:
            "Students write two paragraphs on different themes and include a linking sentence showing how they connect."
        },
        resources: [
          "Model paragraph on board/slide",
          "Paragraph frame (support tier)",
          "Simplified mark scheme checklist",
          "Peer assessment traffic-light cards"
        ]
      }
    ],
    plenaryActivity: {
      title: "Theme Hierarchy Debate",
      duration: "7 minutes",
      instructions:
        "Quick-fire class vote: Which is the most important theme in Animal Farm? Students hold up numbered cards (1–4). Teacher selects students from each group to justify their choice in 30 seconds. Conclude by explaining that the best exam answers show how themes interconnect rather than treating them in isolation.",
      differentiation: {
        support: "Students vote and give one reason.",
        core: "Students justify their choice with a quotation.",
        stretch:
          "Students argue why their chosen theme encompasses all the others."
      }
    },
    homework:
      "Using your evidence bank, write a practice paragraph on the theme you did NOT cover in class. Use PEEL structure with an embedded quotation and a context point. Self-assess against the mark scheme checklist.",
    worksheetQuestions: [
      {
        question:
          "Explain how Orwell explores the theme of power and corruption in Animal Farm. Use at least two examples.",
        lines: 6,
        modelAnswer:
          "Orwell shows that power corrupts absolutely through Napoleon's transformation from a quiet pig to a brutal dictator. Initially, the revolution promises equality, but Napoleon gradually accumulates privileges — moving into the farmhouse, drinking alcohol, wearing clothes — until he is indistinguishable from the human farmers. The pigs' adoption of the whip, which Jones used against them, symbolises the complete corruption of the revolution. Orwell argues that power, without checks and accountability, will always corrupt those who hold it.",
        marks: 5
      },
      {
        question:
          "How does Orwell present the theme of class and inequality in the novella?",
        lines: 5,
        modelAnswer:
          "Orwell creates a clear class hierarchy: the pigs become the ruling elite, the dogs are the enforcers, and the other animals are the exploited workers. Despite the promise that 'all animals are equal,' the pigs immediately take privileges such as the milk and apples. Boxer works himself to death while the pigs grow fat. The final scene, where pigs and humans are indistinguishable, shows that one ruling class has simply been replaced by another. Orwell argues that class inequality is self-perpetuating unless actively resisted.",
        marks: 4
      },
      {
        question:
          "Why is education such an important theme in Animal Farm?",
        lines: 5,
        modelAnswer:
          "Education — or the lack of it — is the mechanism that allows the pigs to maintain power. The pigs are the only animals who become fully literate, giving them exclusive control over the commandments, records, and propaganda. The other animals' inability to read means they cannot verify Squealer's claims or check the commandments for themselves. Orwell argues that an uneducated population is defenceless against manipulation, and that education is the most important safeguard against tyranny.",
        marks: 4
      },
      {
        question:
          "How are the themes of language and control connected in the novella?",
        lines: 5,
        modelAnswer:
          "Language is the pigs' primary tool of control. Squealer uses propaganda, euphemism, and fear-mongering to justify the pigs' actions and rewrite history. The commandments are altered through language, the past is rewritten through language, and the animals' understanding of reality is shaped entirely by what the pigs tell them. Orwell shows that controlling language means controlling thought — an idea he explored further in Nineteen Eighty-Four with 'Newspeak.' The novella argues that language is never neutral; it is always a tool of power.",
        marks: 5
      },
      {
        question:
          "Choose two themes and explain how they are connected in Animal Farm.",
        lines: 6,
        modelAnswer:
          "Power and education are deeply connected. The pigs seize power partly because they are the most educated animals on the farm — they can read, write, and argue effectively. They then use their intellectual advantage to control the other animals, who cannot verify claims or challenge propaganda. Napoleon does not educate the other animals because an informed population would be harder to control. Orwell shows that knowledge is power in the most literal sense: those who control information control everything. This connection reinforces his argument that education is the first line of defence against tyranny.",
        marks: 5
      },
      {
        question:
          "Which theme do you think is most central to Orwell's message in Animal Farm? Justify your answer.",
        lines: 6,
        modelAnswer:
          "Power and corruption is the most central theme because it underpins all the others. The corruption of power drives the class inequality (the pigs elevate themselves), the manipulation of language (Squealer serves Napoleon's power), and the suppression of education (knowledge threatens power). Orwell's central argument is that power, without accountability, inevitably corrupts — and the novella traces this process step by step. However, a strong counter-argument could be made for education, since Orwell suggests that an educated population could have prevented the corruption entirely.",
        marks: 5
      }
    ],
    teacherNotes: [
      "The jigsaw activity requires clear time management — use a visible timer and give a 2-minute warning before regrouping.",
      "Ensure every student leaves with a completed four-theme evidence bank — this is their core revision resource.",
      "The model paragraph should be co-constructed with the class if possible, rather than simply presented.",
      "Encourage students to see themes as interconnected rather than separate — this is what distinguishes top-band responses.",
      "This lesson works as an excellent mid-unit consolidation point before moving to symbolism and exam practice."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language analysis",
      "AO3: Context",
      "Thematic analysis",
      "PEEL paragraph structure",
      "Peer assessment",
      "Collaborative learning"
    ]
  },

  // ── Lesson 8: Symbolism & Allegory – Mapping Characters to History ───
  {
    id: "af-08-symbolism-allegory",
    title: "Animal Farm: Symbolism & Allegory – Mapping Characters to History",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Distinguish between symbolism and allegory as literary techniques",
      "Analyse what each major character and event symbolises in relation to the Russian Revolution",
      "Explore symbolic settings and objects: the farmhouse, the windmill, the flag, the whip",
      "Evaluate the effectiveness of Orwell's allegorical approach"
    ],
    successCriteria: [
      "I can define and distinguish between symbolism and allegory",
      "I can explain the symbolic significance of at least five characters",
      "I can analyse symbolic settings and objects with reference to context",
      "I can evaluate why Orwell chose allegory as his method of political critique"
    ],
    keywords: [
      "symbol",
      "allegory",
      "fable",
      "metaphor",
      "representation",
      "parallel",
      "satire",
      "irony"
    ],
    starterActivity: {
      title: "Symbol Snap",
      duration: "7 minutes",
      instructions:
        "Display ten everyday symbols (e.g. a red cross, a dove, a crown, a skull and crossbones). Students identify what each represents and how we 'read' symbols without being told their meaning. Teacher defines symbolism and distinguishes it from allegory: 'A symbol represents one thing; an allegory is an entire story that represents something else.' Transition to Animal Farm as an extended allegory.",
      differentiation: {
        support: "Meanings provided in a matching task format.",
        core: "Students identify meanings independently and explain how they know.",
        stretch:
          "Students explain why authors use symbols instead of stating meaning directly."
      },
      resources: ["Symbol images slide", "Matching cards (support tier)"]
    },
    mainActivities: [
      {
        title: "The Allegorical Map – Characters, Events & Settings",
        duration: "25 minutes",
        instructions:
          "Students complete a large 'Allegorical Map' grid with three sections: Characters, Events, and Settings/Objects. For Characters: Old Major, Napoleon, Snowball, Squealer, Boxer, Benjamin, Mollie, Moses, Mr Jones, Mr Frederick, Mr Pilkington, the Dogs, the Sheep. For Events: the Revolution, the Battle of the Cowshed, the Executions, the Windmill construction, the Final Scene. For Settings/Objects: Manor Farm/Animal Farm, the Farmhouse, the Windmill, the Flag, the Whip. Students write: what it represents historically, one key quotation, and one sentence explaining Orwell's purpose. Teacher circulates and discusses with groups.",
        differentiation: {
          support:
            "Historical counterparts provided for characters. Students write quotations and purpose sentences only.",
          core: "Students complete all three columns independently.",
          stretch:
            "Students identify which allegorical parallels are most exact and which are loose, writing a paragraph evaluating the limitations of reading Animal Farm as pure allegory."
        },
        resources: [
          "'Allegorical Map' A3 worksheet",
          "Historical counterparts reference sheet (support tier)",
          "Animal Farm text/extracts booklet"
        ]
      },
      {
        title: "Symbolic Close Reading: The Final Scene",
        duration: "18 minutes",
        instructions:
          "Read the final scene aloud (the pigs and humans playing cards). Students annotate for: (1) the pigs walking on two legs — what this symbolises, (2) the pigs wearing clothes — what this symbolises, (3) the animals looking from pig to man and man to pig — what this symbolises, (4) the card game — what this symbolises. Write a PEEL paragraph: 'How does Orwell use symbolism in the final scene to convey his message about revolution and power?' Share and discuss.",
        differentiation: {
          support:
            "Key symbolic elements pre-identified on the extract. PEEL frame with sentence starters.",
          core: "Students annotate and write independently.",
          stretch:
            "Students evaluate whether the final scene suggests Orwell believed revolution is always doomed, or whether there is hope in the novella."
        },
        resources: [
          "Printed extract: Final scene",
          "Annotation guide for symbolism",
          "PEEL frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Most Powerful Symbol Vote",
      duration: "7 minutes",
      instructions:
        "Students nominate their choice for the most powerful symbol in Animal Farm and explain why in one sentence on a sticky note. Vote by placing sticky notes in labelled columns on the board. Count and discuss the winner. Teacher concludes: great exam answers don't just identify symbols — they explain why Orwell chose them and what effect they have on the reader.",
      differentiation: {
        support: "Choose from a shortlist of five symbols.",
        core: "Free choice with one-sentence justification.",
        stretch:
          "Students explain why their chosen symbol is more effective than the runner-up."
      }
    },
    homework:
      "Choose one character and one object/setting from Animal Farm. Write a paragraph on each, explaining what they symbolise and how Orwell uses them to convey his political message. Use quotations and context.",
    worksheetQuestions: [
      {
        question:
          "What is the difference between a symbol and an allegory?",
        lines: 3,
        modelAnswer:
          "A symbol is a single object, character, or image that represents a broader idea (e.g. the windmill symbolises industrialisation and false promises). An allegory is an entire narrative in which characters, events, and settings systematically represent real-world equivalents to convey a moral or political message. Animal Farm is an allegory because the whole story maps onto the Russian Revolution.",
        marks: 3
      },
      {
        question:
          "What does the windmill symbolise in Animal Farm? Explain with reference to the text and context.",
        lines: 5,
        modelAnswer:
          "The windmill symbolises the grand industrial projects of the Soviet Union, particularly Stalin's Five-Year Plans. Like those plans, the windmill promises prosperity but delivers only exhaustion and suffering for the workers. It is built and rebuilt through the animals' backbreaking labour, benefiting only the pigs. The windmill also represents false hope — the promise of a better future that never arrives — and Snowball's original vision being co-opted and distorted by Napoleon.",
        marks: 4
      },
      {
        question:
          "What is the symbolic significance of the farmhouse?",
        lines: 4,
        modelAnswer:
          "The farmhouse initially symbolises the luxury and corruption of the ruling class under Mr Jones. After the revolution, the animals agree that no animal should ever live there. When Napoleon and the pigs move into the farmhouse, sleep in beds, and drink alcohol, it symbolises the revolution's complete betrayal: the new rulers have become identical to the old ones. The farmhouse is a physical symbol of how power corrupts idealists into the very oppressors they replaced.",
        marks: 4
      },
      {
        question:
          "Explain the symbolism of the final scene where the animals look from pig to man and cannot tell the difference.",
        lines: 5,
        modelAnswer:
          "This iconic image symbolises the complete failure of the revolution: the pigs, who promised liberation, have become indistinguishable from the human oppressors they overthrew. It represents Orwell's argument that the Soviet regime under Stalin was no better than the Tsarist autocracy it replaced. The image of the animals looking 'from pig to man, and from man to pig' uses repetition and symmetry to emphasise the cyclical nature of oppression — revolution replaces one tyranny with another.",
        marks: 5
      },
      {
        question:
          "Why might Orwell have chosen to write a fable/allegory rather than a straightforward political essay?",
        lines: 5,
        modelAnswer:
          "Orwell chose allegory because it makes a complex political argument accessible and memorable. A farmyard fable reaches a wider audience, including those unfamiliar with Russian history. The simplicity of the animal characters creates emotional engagement — readers care about Boxer and are outraged by his fate in ways they might not be by statistics about Soviet workers. The allegorical form also makes the story universal: it is not only about Russia but about any revolution that is betrayed by its leaders. Additionally, in 1945, the USSR was a British ally, and direct criticism was harder to publish.",
        marks: 5
      },
      {
        question:
          "Choose one minor character (Benjamin, Mollie, or Moses) and explain their symbolic significance.",
        lines: 5,
        modelAnswer:
          "Benjamin the donkey represents the cynical intellectuals who see through the propaganda but refuse to act. He is the oldest animal and can read as well as the pigs, yet he chooses not to share this knowledge or intervene until it is too late (Boxer's death). Benjamin symbolises those in Soviet society — and all societies — who recognise injustice but remain passive. Orwell suggests that their silence makes them complicit in the oppression they claim to see through, offering a powerful critique of political apathy.",
        marks: 4
      }
    ],
    teacherNotes: [
      "The Allegorical Map is a major revision resource — consider printing on A3 and encouraging students to display it in their folders or on their walls.",
      "Some students may argue that reading Animal Farm only as allegory is limiting — encourage this critical thinking.",
      "The final scene close reading can be revisited in the exam practice lesson (Lesson 10) as model material.",
      "Ensure students understand that allegory is not one-to-one mapping — some elements serve the story's internal logic as well as the political parallel.",
      "This lesson builds on all previous lessons — reference the character and theme work from Lessons 1–7."
    ],
    targetedSkills: [
      "AO1: Textual reference and inference",
      "AO2: Language and structural analysis",
      "AO3: Context (Russian Revolution parallels)",
      "Understanding literary techniques",
      "Evaluative writing",
      "Annotation"
    ]
  },

  // ── Lesson 9: Language, Satire & Orwell's Craft ──────────────────────
  {
    id: "af-09-language-satire",
    title: "Animal Farm: Language, Satire & Orwell's Craft",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Analyse Orwell's use of irony, satire, and understated prose style",
      "Explore how Orwell uses simple language to convey complex political ideas",
      "Examine structural choices: the fable form, the circular narrative, pacing",
      "Evaluate the effectiveness of Orwell's writing craft in achieving his political purpose"
    ],
    successCriteria: [
      "I can identify and explain examples of irony and satire in Animal Farm",
      "I can analyse how Orwell's prose style contributes to the novella's effect",
      "I can explain how structural choices shape the reader's response",
      "I can write an analytical paragraph focusing on Orwell's craft (AO2)"
    ],
    keywords: [
      "satire",
      "irony",
      "dramatic irony",
      "understatement",
      "fable",
      "circular narrative",
      "tone",
      "prose style"
    ],
    starterActivity: {
      title: "Say One Thing, Mean Another",
      duration: "7 minutes",
      instructions:
        "Display three examples of verbal irony/sarcasm from everyday life (e.g. saying 'What lovely weather' during a storm). Students identify the gap between what is said and what is meant. Define irony, satire, and understatement. Teacher explains that Orwell is a master of all three and that today's lesson focuses on how he writes, not just what he writes.",
      differentiation: {
        support: "Definitions of irony, satire, and understatement provided on a reference card.",
        core: "Students generate their own examples of irony before definitions are given.",
        stretch:
          "Students distinguish between verbal irony, dramatic irony, and situational irony with Animal Farm examples."
      },
      resources: ["Irony examples slide", "Literary terms reference card (support tier)"]
    },
    mainActivities: [
      {
        title: "Orwell's Irony: Four Key Moments",
        duration: "22 minutes",
        instructions:
          "Students analyse four extracts chosen for their ironic power: (1) the pigs drinking the milk (situational irony — promises of equality broken immediately), (2) Squealer's 'readjustment' of rations (verbal irony — a cut disguised as an improvement), (3) the animals confessing to crimes they did not commit (dramatic irony — the reader sees the manipulation), (4) the final scene — pigs and humans indistinguishable (situational irony — revolution recreates the original oppression). For each extract, students identify the type of irony, analyse the language used, and explain how Orwell uses irony to convey his political message. Complete an 'Irony Analysis' grid.",
        differentiation: {
          support:
            "Irony types pre-labelled on each extract. Analysis prompts provided for each.",
          core: "Students identify irony types and write analysis independently.",
          stretch:
            "Students rank the four moments by satirical effectiveness and write a paragraph justifying their choice of the most powerful."
        },
        resources: [
          "Four printed extracts",
          "'Irony Analysis' grid worksheet",
          "Irony types reference card"
        ]
      },
      {
        title: "Orwell's Prose Style & Structural Choices",
        duration: "20 minutes",
        instructions:
          "Teacher-led discussion on Orwell's distinctive craft: (1) his deliberately simple, clear prose — why does he avoid complex language in a political text? (2) the fable structure — how does the fairy tale tone contrast with the dark content? (3) the circular narrative — the farm ends where it began, under tyranny. (4) pacing — how Orwell accelerates the descent into corruption. Students select two craft features and write an analytical paragraph on each, explaining how the feature contributes to Orwell's purpose. Use the sentence stem: 'Orwell's use of [technique] is effective because...'",
        differentiation: {
          support:
            "Writing frame with sentence stems and a bank of useful analytical phrases.",
          core: "Students write two independent paragraphs with embedded quotations.",
          stretch:
            "Students compare Orwell's style to another political writer they know (e.g. Steinbeck, Dickens, Atwood) and evaluate which approach is more effective."
        },
        resources: [
          "Orwell's craft discussion slides",
          "Paragraph writing frame (support tier)",
          "Analytical phrase bank"
        ]
      }
    ],
    plenaryActivity: {
      title: "Orwell's Craft in One Sentence",
      duration: "8 minutes",
      instructions:
        "Challenge: summarise Orwell's writing craft in one sentence. Students write their sentence on a strip of paper. Read five or six aloud and vote on the most accurate and eloquent. Display the winning sentence. Teacher concludes: 'Orwell's genius is in making the simple seem profound and the obvious seem invisible — and the best exam answers show awareness of how he achieves this.'",
      differentiation: {
        support: "Sentence starter: 'Orwell uses simple language to...'",
        core: "Students write independently — aim for precision and sophistication.",
        stretch:
          "Students write a second sentence explaining why Orwell's craft still resonates with readers today."
      }
    },
    homework:
      "Select one passage (10–15 lines) from Animal Farm that you find particularly well-written. Write a detailed analysis (200 words) of Orwell's craft in that passage, focusing on language, tone, irony, and effect on the reader.",
    worksheetQuestions: [
      {
        question:
          "Define satire and explain how Animal Farm functions as a satire.",
        lines: 5,
        modelAnswer:
          "Satire is the use of humour, irony, and exaggeration to criticise and expose human failings, particularly in politics and society. Animal Farm is a satire because it uses the absurd premise of talking animals running a farm to mock the Soviet regime and the corruption of revolutionary ideals. The humour lies in the gap between the animals' naive beliefs and the reality of their exploitation. By making readers laugh at the pigs' hypocrisy, Orwell makes them think critically about real-world political corruption.",
        marks: 4
      },
      {
        question:
          "Identify and explain one example of dramatic irony in Animal Farm.",
        lines: 4,
        modelAnswer:
          "When the animals see the knacker's van taking Boxer away, Benjamin reads the sign ('Horse Slaughterer') and the reader knows Boxer is being sent to his death. However, Squealer tells the animals the van belonged to a hospital and the sign had not been repainted. The dramatic irony lies in the reader knowing the truth while the animals accept the lie, creating outrage and reinforcing Orwell's message about propaganda's power to override observable reality.",
        marks: 4
      },
      {
        question:
          "Why does Orwell write in such simple, clear prose? How does this serve his purpose?",
        lines: 5,
        modelAnswer:
          "Orwell famously advocated for clear, simple English and believed that political writing was often deliberately obscure to hide uncomfortable truths. His simple prose in Animal Farm mirrors the fable form and makes the political message accessible to all readers, regardless of education. The clarity also creates a powerful contrast with the dark events described — the horror is intensified by the matter-of-fact tone. Furthermore, Orwell's plain language enacts his argument: that truth should be stated clearly, in direct opposition to the convoluted propaganda of Squealer and real-world politicians.",
        marks: 5
      },
      {
        question:
          "Explain how the circular structure of Animal Farm (beginning and ending with tyranny) contributes to Orwell's message.",
        lines: 5,
        modelAnswer:
          "The novella begins with the animals oppressed by Mr Jones and ends with them oppressed by Napoleon, who is indistinguishable from a human. This circular structure reinforces Orwell's pessimistic message that revolutions, without safeguards, will simply replace one form of tyranny with another. The cyclical nature suggests that the problem is not specific to individuals but is inherent in how power operates. It leaves the reader with a sense of futility but also urgency — the cycle will repeat unless citizens remain vigilant.",
        marks: 4
      },
      {
        question:
          "How does Orwell use the contrast between the 'fairy story' subtitle and the dark content to create meaning?",
        lines: 5,
        modelAnswer:
          "Orwell subtitled Animal Farm 'A Fairy Story,' which creates an ironic tension between the gentle, childlike connotations of a fairy tale and the brutal political reality the story depicts. Fairy stories typically end happily; Animal Farm ends in despair. This contrast is itself a form of satire — Orwell uses the reader's expectations of a simple moral tale to deliver a devastating critique. The innocent tone makes the corruption more shocking, just as the animals' naive trust makes their betrayal more tragic.",
        marks: 4
      },
      {
        question:
          "Choose one passage from Animal Farm and analyse Orwell's craft. Focus on language choices, tone, and effect on the reader.",
        lines: 8,
        modelAnswer:
          "In the passage describing the executions (Chapter 7), Orwell writes: 'And so the tale of confessions and executions went on, until there was a pile of corpses lying before Napoleon's feet and the air was heavy with the smell of blood.' The matter-of-fact tone ('and so the tale...went on') creates a chilling understatement — mass murder is described with the casual rhythm of routine. The physical detail of the 'pile of corpses' and 'smell of blood' punctures any abstraction and forces the reader to confront the visceral horror. The word 'tale' ironically connects to the 'fairy story' subtitle, reminding us that this 'tale' is about real political violence. Orwell's craft here lies in the restraint: he does not tell the reader to be horrified — the simple, precise language does that work.",
        marks: 6
      }
    ],
    teacherNotes: [
      "This lesson is essential for AO2 — many students default to writing about what happens rather than how Orwell writes.",
      "The irony analysis grid is a key revision resource — ensure all students complete it.",
      "Orwell's essay 'Politics and the English Language' (1946) is excellent extension reading for high-ability students.",
      "Stress that the exam rewards analysis of Orwell's methods (language, structure, form) not just retelling of plot.",
      "This lesson works best after all plot-based lessons are complete, as students need familiarity with the whole novella."
    ],
    targetedSkills: [
      "AO2: Language, form, and structure analysis",
      "AO1: Textual reference",
      "Understanding literary techniques",
      "Analytical paragraph writing",
      "Evaluative judgement",
      "Close reading"
    ]
  },

  // ── Lesson 10: Exam Practice – Writing a Top-Band Essay ──────────────
  {
    id: "af-10-exam-practice",
    title: "Animal Farm: Exam Practice – Writing a Top-Band Animal Farm Essay",
    text: "Animal Farm",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and requirements of a GCSE Animal Farm essay question",
      "Deconstruct the mark scheme to identify what examiners reward at the top band",
      "Plan and write a timed essay response using a clear and effective structure",
      "Self-assess and improve their response using examiner-level feedback criteria"
    ],
    successCriteria: [
      "I can decode an exam question and identify its key demands",
      "I can plan an essay using a clear structure (introduction, 3–4 PEEL paragraphs, conclusion)",
      "I can write an essay that includes quotations, language analysis, and context",
      "I can self-assess my work and identify specific targets for improvement"
    ],
    keywords: [
      "thesis",
      "topic sentence",
      "embedded quotation",
      "AO1",
      "AO2",
      "AO3",
      "evaluation",
      "mark scheme"
    ],
    starterActivity: {
      title: "Question Deconstruction",
      duration: "8 minutes",
      instructions:
        "Display a GCSE-style question: 'How does Orwell use the character of Napoleon to explore the theme of power in Animal Farm?' Students underline key words and annotate what each requires. Teacher models the deconstruction: 'How does Orwell use' = methods/craft (AO2); 'the character of Napoleon' = character focus; 'explore the theme of power' = thematic analysis. Discuss what the examiner is really asking for. Introduce the essay structure: introduction, 3–4 analytical paragraphs, conclusion.",
      differentiation: {
        support: "Key words pre-highlighted; AO translation provided.",
        core: "Students deconstruct independently and identify AO focus areas.",
        stretch:
          "Students rewrite the question in their own words and predict what a top-band response would include."
      },
      resources: ["Exam question display slide", "AO summary card", "Question deconstruction frame"]
    },
    mainActivities: [
      {
        title: "Planning a Top-Band Response",
        duration: "12 minutes",
        instructions:
          "Teacher models a five-box essay plan on the board: (1) Introduction: thesis statement and brief context, (2) Paragraph 1: Napoleon's early acquisition of power (dogs, expulsion of Snowball), (3) Paragraph 2: Napoleon's methods of control (Squealer, propaganda, fear), (4) Paragraph 3: Napoleon's complete corruption (final scene, commandments, living as a human), (5) Conclusion: Orwell's message about power and the Russian Revolution. Students create their own plan, selecting quotations and context points for each paragraph. Teacher circulates and checks plans before writing begins.",
        differentiation: {
          support:
            "Planning template with paragraph starters, suggested quotations, and AO prompts for each section.",
          core: "Students plan independently using the five-box structure.",
          stretch:
            "Students plan a sixth paragraph that offers an alternative interpretation or evaluates a counter-argument."
        },
        resources: [
          "Five-box essay plan template",
          "Planning template with scaffolding (support tier)",
          "Quotation bank from Lessons 1–9"
        ]
      },
      {
        title: "Timed Writing: Essay Response",
        duration: "30 minutes",
        instructions:
          "Students write their essay response in timed conditions (30 minutes to mirror exam pacing). Remind them: every paragraph needs a clear point, an embedded quotation, analysis of Orwell's language/methods (AO2), and a context link (AO3). Teacher circulates and offers brief verbal nudges (not full feedback) to keep students on track. At 20 minutes, give a time check and remind students to leave time for a conclusion.",
        differentiation: {
          support:
            "Paragraph frames available for students who need them. Aim for introduction + 2 paragraphs + conclusion.",
          core: "Full essay expected: introduction + 3 paragraphs + conclusion.",
          stretch:
            "Students aim for introduction + 4 paragraphs (including evaluation/counter-argument) + conclusion with a wider Orwell reference."
        },
        resources: [
          "Lined essay paper or exercise books",
          "Paragraph frames (support tier, available on request)",
          "Timer displayed on board"
        ]
      }
    ],
    plenaryActivity: {
      title: "Self-Assessment Against the Mark Scheme",
      duration: "10 minutes",
      instructions:
        "Distribute a student-friendly mark scheme grid with descriptors for AO1, AO2, AO3, and AO4 (SPaG). Students read through their essay with a coloured pen and: (1) tick where they have met each AO, (2) identify one strength and one specific target for improvement, (3) write their target at the bottom of their essay. Teacher collects essays for marking but emphasises that the self-assessment process is a vital exam skill in itself.",
      differentiation: {
        support: "Simplified mark scheme with 'I have / I need to' checklist format.",
        core: "Full student-friendly mark scheme with band descriptors.",
        stretch:
          "Students estimate their own band/mark and justify their self-assessment with specific evidence from their essay."
      }
    },
    homework:
      "Redraft one paragraph from your essay, improving it based on your self-assessment target. Write the original paragraph and the improved version side by side, annotating what you changed and why.",
    worksheetQuestions: [
      {
        question:
          "What does AO1 require in an Animal Farm essay? Give an example of how you might meet this assessment objective.",
        lines: 4,
        modelAnswer:
          "AO1 requires students to demonstrate a clear understanding of the text and support their ideas with relevant quotations or textual references. For example, when arguing that Napoleon is a tyrant, you might write: 'Napoleon uses the dogs to enforce obedience, as seen when they \"growled so threateningly\" that the protesting pigs fell silent. This shows that Napoleon's power is built on intimidation, not consent.'",
        marks: 3
      },
      {
        question:
          "What does AO2 require? Write a sentence that demonstrates strong AO2 analysis of a quotation from Animal Farm.",
        lines: 5,
        modelAnswer:
          "AO2 requires analysis of the writer's use of language, form, and structure and their effects on the reader. Example: 'Orwell's use of the verb \"growled\" — typically associated with a predatory animal — dehumanises the dogs and, by extension, Napoleon's regime. The threatening sound of the word itself creates a visceral sense of fear for the reader, mirroring the terror felt by the other animals. This choice of language reveals how Napoleon has weaponised nature itself to serve his dictatorship.'",
        marks: 4
      },
      {
        question:
          "What does AO3 require? Write a sentence linking Napoleon to Stalin that demonstrates strong contextual knowledge.",
        lines: 4,
        modelAnswer:
          "AO3 requires students to show understanding of the relationship between the text and its contexts. Example: 'Napoleon's use of the dogs as a private army mirrors Stalin's secret police (the NKVD), who eliminated political opponents through show trials, execution, and exile to the Gulag. Orwell, having witnessed Stalinist purges during the Spanish Civil War, uses Napoleon to warn that revolutionary leaders can become indistinguishable from the tyrants they replace.'",
        marks: 4
      },
      {
        question:
          "Write an effective introduction for the question: 'How does Orwell use the character of Napoleon to explore the theme of power?'",
        lines: 6,
        modelAnswer:
          "In Animal Farm, Orwell uses the character of Napoleon to trace the corruption of revolutionary ideals into brutal dictatorship, mirroring Stalin's transformation of Soviet communism into totalitarian rule. Through Napoleon's calculated seizure of power — his use of the dogs as enforcers, Squealer as propagandist, and the commandments as tools of control — Orwell argues that power, unchecked by education and accountability, will always corrupt those who hold it. Napoleon is not merely a villain; he is a warning about the universal pattern of tyranny that Orwell witnessed first-hand in the twentieth century.",
        marks: 5
      },
      {
        question:
          "Write an effective conclusion for the same essay question.",
        lines: 5,
        modelAnswer:
          "Ultimately, Orwell uses Napoleon to deliver a devastating warning: that the desire for power is humanity's most dangerous impulse. Napoleon's journey from revolutionary to dictator, culminating in the chilling final image where pigs and humans become indistinguishable, encapsulates the novella's central argument that revolutions which do not safeguard equality through education and vigilance will inevitably recreate the oppression they sought to destroy. Orwell's message, written in 1945, remains urgently relevant wherever power operates without accountability.",
        marks: 4
      },
      {
        question:
          "Identify three common mistakes students make in Animal Farm essays and explain how to avoid each one.",
        lines: 8,
        modelAnswer:
          "(1) Retelling the plot instead of analysing: Students describe what happens rather than explaining how and why Orwell writes it. Avoid this by always linking points back to Orwell's methods and purpose — use phrases like 'Orwell uses this to show...' or 'The effect on the reader is...' (2) Including context as a separate section rather than embedding it: Context should support analysis, not replace it. Weave contextual references into analytical paragraphs rather than writing a standalone context paragraph. (3) Using quotations without analysing them: Every quotation needs a follow-up sentence that zooms in on specific word choices and explains their effect. Simply inserting a quotation does not demonstrate understanding — the analysis is what earns the marks.",
        marks: 6
      }
    ],
    teacherNotes: [
      "This lesson works best at the end of the unit when students have covered all content from Lessons 1–9.",
      "The timed writing can be used as a formal assessment if desired — adjust timing and conditions accordingly.",
      "Collect responses to assess progress and identify students who need intervention before mocks/exams.",
      "The self-assessment is most effective when students are trained on using the mark scheme — consider modelling with an anonymous example response first.",
      "Encourage students to keep their redrafted homework as a revision resource alongside their evidence banks from earlier lessons.",
      "For multi-board suitability, the question structure works for AQA, Edexcel, OCR, and WJEC — adapt mark scheme descriptors to the specific board as needed."
    ],
    targetedSkills: [
      "AO1: Textual reference and understanding",
      "AO2: Language, form, and structure analysis",
      "AO3: Context",
      "AO4: SPaG",
      "Exam technique",
      "Essay planning and structure",
      "Self-assessment",
      "Timed writing"
    ]
  }
];
