// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons';

// ─── Lesson 1: Walton's Letters and the Frame Narrative ─────────────────────

const lesson1: LessonPlan = {
  id: 'frankenstein-01-walton-frame-narrative',
  title: "Walton's Letters and the Frame Narrative",
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the purpose and effect of the epistolary frame narrative in Frankenstein.',
    'Analyse Walton as a parallel figure to Victor Frankenstein and explore Shelley\'s authorial intention in establishing this connection.',
    'Evaluate how the frame narrative affects the reliability of the narration and the reader\'s interpretation of events.',
  ],
  successCriteria: [
    'I can explain what a frame narrative is and why Shelley uses one in Frankenstein.',
    'I can identify at least two parallels between Walton and Victor and explain their significance.',
    'I can analyse a quotation from Walton\'s letters using PEE structure, commenting on Shelley\'s methods.',
  ],
  keywords: [
    'epistolary', 'frame narrative', 'unreliable narrator',
    'hubris', 'Romantic', 'exploration', 'ambition',
  ],
  starterActivity: {
    title: 'Chinese Whispers and Reliability',
    duration: '8 minutes',
    instructions:
      'Play a quick round of "Chinese Whispers" with a complex sentence about a scientific discovery. After revealing how the message changed, discuss: what happens when a story passes through multiple narrators? Introduce the concept of the frame narrative — Walton tells Margaret about Victor, who tells him about the Creature. Ask: whose version of events do we trust, and why?',
    differentiation: {
      support: 'Provide a simple diagram showing the three narrative layers (Walton → Victor → Creature) for students to annotate.',
      core: 'Students identify potential problems with each layer of narration in a short written response.',
      stretch: 'Students consider why Shelley chose an epistolary form rather than a straightforward first-person narrative, linking to Romantic literary conventions.',
    },
    resources: ['Narrative layers diagram', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: Walton\'s Letters to Margaret',
      duration: '20 minutes',
      instructions:
        'Distribute an extract from Walton\'s first and fourth letters. Students annotate for: (1) evidence of Walton\'s ambition and desire for glory, (2) language that mirrors Victor\'s later obsession, (3) Romantic imagery of the sublime and exploration. Teacher models annotation of one quotation, then students work in pairs to analyse two further quotations. Whole-class feedback: what kind of man is Walton, and why does Shelley begin the novel with him?',
      differentiation: {
        support: 'Provide highlighted key quotations with guiding questions for each (e.g., "What does this word suggest about Walton\'s character?").',
        core: 'Students annotate independently and write one PEE paragraph on Walton\'s ambition.',
        stretch: 'Students compare Walton\'s language to that of real Romantic explorers or poets, considering Shelley\'s critique of Romantic idealism.',
      },
      resources: ['Walton\'s letters extract (Letters 1 and 4)', 'Annotation guide', 'PEE paragraph frame (support tier)'],
    },
    {
      title: 'Walton and Victor: Mirror Characters',
      duration: '20 minutes',
      instructions:
        'Students complete a comparison table identifying parallels between Walton and Victor: ambition, isolation, obsession with discovery, willingness to sacrifice others. Using their completed tables, students write an analytical paragraph answering: "How does Shelley use Walton to foreshadow Victor\'s downfall?" Teacher circulates and selects two or three strong examples to share under the visualiser. Discuss: does Walton learn from Victor\'s story, or is he doomed to repeat it?',
      differentiation: {
        support: 'Provide a partially completed comparison table with sentence starters for the paragraph.',
        core: 'Students complete the table and write a full analytical paragraph independently.',
        stretch: 'Students evaluate whether Walton\'s decision to turn back the ship represents genuine learning or mere cowardice, using textual evidence.',
      },
      resources: ['Comparison table worksheet', 'Key quotations handout', 'Sentence starters (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Why Start with Walton?',
    duration: '7 minutes',
    instructions:
      'Students answer on a slip of paper: "Explain one reason Shelley begins the novel with Walton\'s letters rather than with Victor\'s story." Collect responses to assess understanding of narrative structure and authorial intention.',
    differentiation: {
      support: 'Sentence starter: "Shelley begins with Walton because..."',
      core: 'Full written response expected with reference to narrative structure.',
      stretch: 'Students link their answer to a specific effect on the reader, such as creating suspense or establishing a moral framework.',
    },
  },
  homework:
    'Write a diary entry from Walton\'s perspective after hearing Victor\'s full story. Include at least two reflections on what Walton has learned about the dangers of unchecked ambition.',
  worksheetQuestions: [
    {
      question: 'What is a frame narrative and how does Shelley use this technique in Frankenstein?',
      lines: 5,
      modelAnswer:
        'A frame narrative is a story within a story, where one narrative provides a structure or context for another. In Frankenstein, Shelley uses three layers: Walton\'s letters to Margaret Saville frame Victor\'s confession, which in turn frames the Creature\'s own account. This technique creates multiple perspectives and forces the reader to question whose version of events is most reliable. Shelley uses the frame to build suspense, as Walton\'s encounter with the dying Victor on the ice foreshadows the tragic outcome before the main story even begins.',
      marks: 4,
    },
    {
      question: 'How does Shelley present Walton as a parallel to Victor Frankenstein? Use evidence from the letters.',
      lines: 6,
      modelAnswer:
        'Shelley presents Walton as a mirror of Victor through their shared ambition and willingness to sacrifice everything for knowledge. Walton writes that he would "sacrifice my fortune, my existence, my every hope" to achieve his goal, echoing Victor\'s later obsessive pursuit of creation at the cost of his health, family, and sanity. Both men are isolated — Walton complains of having "no friend," while Victor withdraws from all human connection. Shelley\'s authorial intention is to show that dangerous ambition is not unique to Victor; it is a broader human flaw that Walton must choose to resist.',
      marks: 4,
    },
    {
      question: 'Why might Shelley have chosen an epistolary form (letters) to open the novel?',
      lines: 5,
      modelAnswer:
        'The epistolary form gives the novel an air of authenticity and intimacy, as though the reader is accessing private correspondence. It also establishes the theme of communication and connection — Walton writes to his sister because he is lonely and craves human understanding, a desire that mirrors both Victor\'s and the Creature\'s isolation. Furthermore, letters are inherently one-sided, which introduces the idea of unreliable narration: the reader only receives Walton\'s perspective, filtered through his own biases and desires.',
      marks: 4,
    },
    {
      question: 'What does Walton\'s decision to turn the ship around suggest about his character and about the novel\'s message?',
      lines: 5,
      modelAnswer:
        'Walton\'s decision to turn back suggests that he has learned from Victor\'s cautionary tale — unlike Victor, he chooses human life over personal glory. This positions Walton as the character who breaks the cycle of destructive ambition. However, it is ambiguous: Walton turns back partly because his crew threatens mutiny, so his decision may not be entirely voluntary. Shelley may be suggesting that the desire for forbidden knowledge is so powerful that only external constraints can prevent disaster.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is the opening lesson on Frankenstein and assumes no prior detailed knowledge of the text. Students should have read or been introduced to the plot overview.',
    'Emphasise that AQA treats Frankenstein as a 19th-century novel, so AO3 (context) should focus on Romantic movement, science, and the 1818 publication context.',
    'The Chinese Whispers starter works well for kinaesthetic learners but can be replaced with a written telephone-game exercise if needed.',
    'Walton\'s letters are often overlooked in revision — stress their importance for understanding structure and Shelley\'s warnings about ambition.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Analysis of methods (narrative structure)',
    'AO3: Context (Romantic movement)',
    'Close reading',
    'Comparative analysis',
  ],
};

// ─── Lesson 2: Victor's Ambition and the Creation Scene ─────────────────────

const lesson2: LessonPlan = {
  id: 'frankenstein-02-victors-ambition-creation',
  title: "Victor's Ambition and the Creation Scene",
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shelley presents Victor\'s growing obsession with creating life in Chapters 4-5.',
    'Explore the language and imagery of the creation scene and its connections to the Prometheus myth.',
    'Evaluate Shelley\'s critique of unchecked scientific ambition in the context of Galvanism and the Enlightenment.',
  ],
  successCriteria: [
    'I can identify and analyse key quotations from Chapters 4-5 that reveal Victor\'s obsessive ambition.',
    'I can explain the significance of the Prometheus allusion in the novel\'s subtitle.',
    'I can write an analytical paragraph on the creation scene using evidence and contextual knowledge.',
  ],
  keywords: [
    'Prometheus', 'Galvanism', 'hubris', 'obsession',
    'transgression', 'sublime', 'Enlightenment', 'Gothic',
  ],
  starterActivity: {
    title: 'Playing God: Where Is the Line?',
    duration: '7 minutes',
    instructions:
      'Display a series of modern scientific developments (genetic engineering, AI, cloning) and ask students to place each on a spectrum from "acceptable progress" to "playing God." Discuss as a class: who decides when science has gone too far? Introduce the subtitle "The Modern Prometheus" and briefly explain the myth — Prometheus stole fire from the gods and was punished for eternity. Ask: how might this myth relate to Victor Frankenstein?',
    differentiation: {
      support: 'Provide a brief written summary of the Prometheus myth with key vocabulary defined.',
      core: 'Students explain the Prometheus connection verbally with reference to the concept of hubris.',
      stretch: 'Students consider why Shelley chose the Prometheus myth specifically rather than other transgression myths such as Icarus or Faust.',
    },
    resources: ['Spectrum slide with scientific developments', 'Prometheus myth summary card'],
  },
  mainActivities: [
    {
      title: 'Tracking Victor\'s Descent: Chapter 4 Close Reading',
      duration: '18 minutes',
      instructions:
        'Students read key extracts from Chapter 4 where Victor describes his obsessive work: collecting body parts, neglecting his health and family, losing himself in his "workshop of filthy creation." Students highlight language related to: (1) obsession and compulsion, (2) isolation and neglect, (3) transgression and forbidden knowledge. In pairs, students select the most powerful quotation and annotate it for word-level analysis. Share three examples under the visualiser.',
      differentiation: {
        support: 'Provide pre-selected quotations with colour-coded highlighting categories and guiding questions.',
        core: 'Students select and annotate their own quotations independently, writing brief analytical notes.',
        stretch: 'Students link Victor\'s language to the Romantic concept of the sublime and consider how Shelley both draws on and critiques Romantic ideals of genius.',
      },
      resources: ['Chapter 4 extract handout', 'Annotation colour key', 'Quotation bank (support tier)'],
    },
    {
      title: 'The Creation Scene: Chapter 5 Analysis',
      duration: '22 minutes',
      instructions:
        'Read Chapter 5 aloud from "It was on a dreary night of November" to Victor\'s flight from the room. Students complete a guided analysis table covering: (1) Gothic imagery — identify three examples and explain their effect, (2) Victor\'s emotional response — how does his language shift from excitement to horror?, (3) The Creature — how is it described, and what is notably absent from this description? Students then write one full PEE paragraph answering: "How does Shelley use the creation scene to present Victor\'s ambition as dangerous?" Peer-assess using success criteria.',
      differentiation: {
        support: 'Provide a partially completed analysis table and a PEE frame with sentence starters.',
        core: 'Students complete the analysis table and write a PEE paragraph independently.',
        stretch: 'Students evaluate whether Victor\'s horror at his creation reflects guilt, cowardice, or aesthetic revulsion, linking to Shelley\'s wider critique of superficial judgement.',
      },
      resources: ['Chapter 5 extract', 'Analysis table worksheet', 'PEE frame (support tier)', 'Peer assessment checklist'],
    },
  ],
  plenaryActivity: {
    title: 'One-Sentence Summary',
    duration: '5 minutes',
    instructions:
      'Students write one sentence summarising Shelley\'s message about scientific ambition in Chapters 4-5, beginning with: "Through Victor\'s creation of the Creature, Shelley warns that..." Share three examples and discuss which best captures the authorial intention.',
    differentiation: {
      support: 'Sentence starter provided; students complete the sentence.',
      core: 'Students write the full sentence independently.',
      stretch: 'Students add a second sentence linking Shelley\'s warning to a modern scientific parallel.',
    },
  },
  homework:
    'Research Galvanism and Luigi Galvani\'s experiments with electricity and dead frogs. Write a paragraph explaining how these real scientific experiments influenced Shelley\'s depiction of Victor\'s creation.',
  worksheetQuestions: [
    {
      question: 'How does Shelley present Victor\'s obsession in Chapter 4? Use a quotation in your answer.',
      lines: 6,
      modelAnswer:
        'Shelley presents Victor\'s obsession as all-consuming and dehumanising. He describes how he "pursued nature to her hiding-places" and worked in a "workshop of filthy creation," collecting body parts from "the unhallowed damps of the grave." The verb "pursued" suggests a relentless, predatory quality to his ambition, while "filthy" and "unhallowed" create a sense of moral transgression. Shelley shows that Victor\'s obsession has led him to abandon normal human behaviour — he neglects his family, his health deteriorates, and he loses all sense of ethical boundaries. Her authorial intention is to warn against the dangers of unchecked ambition that isolates the individual from society and moral accountability.',
      marks: 4,
    },
    {
      question: 'Explain the significance of the novel\'s subtitle, "The Modern Prometheus."',
      lines: 5,
      modelAnswer:
        'In Greek mythology, Prometheus stole fire from the gods and gave it to humanity, for which he was eternally punished. Shelley\'s subtitle positions Victor as a modern Prometheus — he steals the secret of life from nature and is punished through the destruction of everyone he loves. The allusion also carries a warning: just as Prometheus\'s gift of fire brought both benefit and suffering to humanity, Victor\'s creation brings knowledge but also devastation. Shelley suggests that transgressing natural boundaries, however well-intentioned, leads to catastrophic consequences.',
      marks: 4,
    },
    {
      question: 'Analyse how Shelley uses Gothic imagery in the creation scene (Chapter 5).',
      lines: 6,
      modelAnswer:
        'Shelley saturates the creation scene with Gothic imagery to create a sense of horror and wrongness. The scene takes place on a "dreary night of November" with "rain pattering dismally," establishing a dark, oppressive atmosphere. The Creature\'s appearance is described through disturbing contrasts: "lustrous black" hair and "teeth of pearly whiteness" set against "yellow skin" that "scarcely covered the work of muscles and arteries beneath." This juxtaposition of beauty and horror reflects the Gothic tradition of the uncanny. The candle is "nearly burnt out," symbolising the dying of Victor\'s rational Enlightenment ideals as the horrifying reality of his creation becomes apparent.',
      marks: 4,
    },
    {
      question: 'How might a reader in 1818 have responded differently to the creation scene compared to a modern reader?',
      lines: 5,
      modelAnswer:
        'A reader in 1818 would have been aware of real experiments with Galvanism — Luigi Galvani had demonstrated that electricity could make dead frogs\' legs twitch, and there were public demonstrations of electrical experiments on human corpses. The creation scene would therefore have felt disturbingly plausible rather than purely fantastical. Additionally, the Romantic audience would have understood Victor\'s transgression in religious terms: he was usurping God\'s role as creator. A modern reader might instead focus on parallels with genetic engineering, AI, or cloning, reading the scene as a prescient warning about the ethics of scientific innovation.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The Prometheus myth can be briefly told rather than requiring students to research it — keep the focus on its thematic relevance.',
    'Galvanism is a key AO3 context point for this text. Ensure students understand the connection between real science and Shelley\'s fiction.',
    'The creation scene is one of the most commonly examined extracts. Drill students on key quotations for retention.',
    'Link back to Walton from Lesson 1: both men are driven by the same dangerous curiosity. This is a deliberate structural choice by Shelley.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Analysis of language and imagery',
    'AO3: Context (Galvanism, Prometheus, Romanticism)',
    'Close reading',
    'PEE paragraph writing',
  ],
};

// ─── Lesson 3: The Creature's Awakening and Rejection ───────────────────────

const lesson3: LessonPlan = {
  id: 'frankenstein-03-creature-awakening-rejection',
  title: "The Creature's Awakening and Rejection",
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shelley presents the Creature\'s first experiences of consciousness and sensory awareness.',
    'Explore the theme of rejection and its consequences through the Creature\'s encounters with humanity.',
    'Evaluate Shelley\'s use of the Creature\'s perspective to challenge the reader\'s sympathies and assumptions.',
  ],
  successCriteria: [
    'I can explain how Shelley uses the Creature\'s narration to generate sympathy for a supposedly monstrous character.',
    'I can analyse at least two quotations from the Creature\'s account of its early experiences.',
    'I can discuss the theme of rejection and link it to Shelley\'s wider commentary on society\'s treatment of outsiders.',
  ],
  keywords: [
    'tabula rasa', 'sympathy', 'otherness', 'rejection',
    'monstrosity', 'innocence', 'sensory imagery',
  ],
  starterActivity: {
    title: 'Born Innocent or Born Evil?',
    duration: '8 minutes',
    instructions:
      'Display the question: "Are people born good or evil, or do they become so through experience?" Students vote using a four-corners activity (Born Good / Born Evil / Shaped by Experience / Mixture). Teacher introduces John Locke\'s concept of tabula rasa — the idea that humans are born as "blank slates" and shaped by their environment. Ask: if this is true, who is responsible when a person becomes violent — the individual or the society that shaped them?',
    differentiation: {
      support: 'Provide a simple definition card for tabula rasa with a visual analogy (blank whiteboard).',
      core: 'Students justify their position with a real-world or literary example.',
      stretch: 'Students consider whether Shelley endorses or complicates the tabula rasa theory through the Creature\'s development.',
    },
    resources: ['Four-corners labels', 'Tabula rasa definition card'],
  },
  mainActivities: [
    {
      title: 'The Creature\'s First Sensations: Close Reading',
      duration: '20 minutes',
      instructions:
        'Students read the extract where the Creature describes its first awareness: discovering light, warmth, hunger, and the natural world. Students annotate for sensory imagery (sight, sound, touch, taste) and identify how Shelley presents the Creature as childlike and innocent rather than monstrous. In pairs, students discuss: how does this description challenge the reader\'s expectations of a "monster"? Students write brief analytical notes on three key quotations.',
      differentiation: {
        support: 'Provide a sensory imagery identification grid with examples already categorised; students add further examples.',
        core: 'Students annotate the extract independently and write analytical notes on three quotations.',
        stretch: 'Students compare the Creature\'s awakening to Adam\'s awakening in Paradise Lost (a text the Creature later reads) and discuss Shelley\'s allusion.',
      },
      resources: ['Creature\'s awakening extract', 'Sensory imagery grid', 'Paradise Lost comparison extract (stretch)'],
    },
    {
      title: 'Rejected by Humanity: Tracking the Pattern',
      duration: '20 minutes',
      instructions:
        'Students create a timeline of the Creature\'s encounters with humans: Victor\'s abandonment, the villagers\' attack, the De Lacey family\'s rejection. For each encounter, students note: (1) what the Creature hoped for, (2) what actually happened, (3) how the Creature responded emotionally. Students then write a paragraph answering: "How does Shelley use the pattern of rejection to explain the Creature\'s turn to violence?" Share examples and discuss: is the Creature a villain or a victim?',
      differentiation: {
        support: 'Provide a pre-structured timeline with events listed; students add the analysis columns.',
        core: 'Students create the timeline and write the paragraph independently.',
        stretch: 'Students consider Shelley\'s possible commentary on the treatment of marginalised groups in Regency society, linking to Mary Wollstonecraft\'s ideas about social justice.',
      },
      resources: ['Timeline template', 'Key quotations from rejection scenes', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Verdict: Monster or Victim?',
    duration: '7 minutes',
    instructions:
      'Students write a verdict slip: "At this point in the novel, the Creature is more [monster/victim] because..." Students hold up their slips and teacher tallies the class split. Discuss: what does our sympathy for the Creature tell us about Shelley\'s authorial intention?',
    differentiation: {
      support: 'Sentence frame provided with key vocabulary to incorporate.',
      core: 'Students write a justified verdict with textual reference.',
      stretch: 'Students explain how Shelley manipulates reader sympathy through narrative perspective — we hear the Creature\'s version precisely because Victor has denied it a voice.',
    },
  },
  homework:
    'Write a short creative piece (200 words) from the Creature\'s perspective describing its first experience of kindness or cruelty. Use sensory imagery and first-person narration in the style of Shelley.',
  worksheetQuestions: [
    {
      question: 'How does Shelley present the Creature as innocent in its early experiences? Use evidence.',
      lines: 6,
      modelAnswer:
        'Shelley presents the Creature as fundamentally innocent through its childlike discovery of the world. It describes basic sensations with wonder — "I felt light, and hunger, and thirst, and darkness" — using simple, pared-back language that mirrors a newborn\'s first awareness. The Creature\'s delight in birdsong and moonlight shows a natural capacity for beauty and joy, challenging the reader\'s assumption that its monstrous appearance reflects a monstrous nature. Shelley draws on Locke\'s tabula rasa philosophy to suggest the Creature is born without malice; its later violence is entirely the product of society\'s cruelty.',
      marks: 4,
    },
    {
      question: 'Explain how the theme of rejection drives the Creature\'s development across the novel.',
      lines: 6,
      modelAnswer:
        'Rejection is the defining experience of the Creature\'s existence and the catalyst for its violence. It is first rejected by Victor, its creator and symbolic father, who flees in horror at its appearance. It is then attacked by villagers who respond only to its physical appearance, and finally rejected by the De Lacey family, its last hope for human connection. Each rejection deepens the Creature\'s despair and resentment. Shelley constructs a clear causal chain: rejection leads to isolation, isolation leads to bitterness, and bitterness leads to revenge. The Creature itself acknowledges this: "I was benevolent; my soul glowed with love and humanity; but am I not alone, miserably alone?"',
      marks: 4,
    },
    {
      question: 'What is the significance of the Creature narrating its own story?',
      lines: 5,
      modelAnswer:
        'By giving the Creature its own narrative voice, Shelley forces the reader to empathise with a character they might otherwise dismiss as a monster. The first-person narration reveals the Creature\'s intelligence, emotional depth, and capacity for suffering, directly contradicting Victor\'s portrayal of it as a "daemon" and "wretch." This narrative choice reflects Shelley\'s broader concern with giving voice to the voiceless and challenging prejudice based on appearance. It also complicates the reader\'s moral judgement: if we sympathise with the Creature, we must question whether Victor — and by extension, society — bears responsibility for creating the very monstrosity it fears.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The tabula rasa concept is essential AO3 context for the Creature\'s development. Ensure students can spell and define it.',
    'This lesson is an opportunity to discuss prejudice and empathy in a way that connects to students\' own experiences of social exclusion.',
    'The "Monster or Victim?" debate will recur throughout the unit — establish it here as a running question.',
    'If time allows, the Paradise Lost allusion (stretch activity) is highly rewarding and frequently tested at GCSE.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Analysis of narrative voice and imagery',
    'AO3: Context (tabula rasa, Locke)',
    'Empathy and perspective-taking',
    'Analytical paragraph writing',
  ],
};

// ─── Lesson 4: The De Lacey Family — Education and Empathy ──────────────────

const lesson4: LessonPlan = {
  id: 'frankenstein-04-de-lacey-education-empathy',
  title: 'The De Lacey Family: Education and Empathy',
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the role of the De Lacey family in the Creature\'s intellectual and emotional development.',
    'Explore how Shelley uses the Creature\'s self-education to engage with Enlightenment ideas about knowledge and civilisation.',
    'Evaluate the significance of the Creature\'s reading of Paradise Lost, Plutarch\'s Lives, and The Sorrows of Young Werther.',
  ],
  successCriteria: [
    'I can explain what the Creature learns from observing the De Lacey family and why this matters.',
    'I can analyse the significance of at least one of the three texts the Creature reads.',
    'I can discuss how Shelley uses the De Lacey episode to develop the themes of education, empathy, and social exclusion.',
  ],
  keywords: [
    'Enlightenment', 'autodidact', 'civilisation', 'empathy',
    'Paradise Lost', 'social contract', 'assimilation',
  ],
  starterActivity: {
    title: 'What Makes Us Human?',
    duration: '7 minutes',
    instructions:
      'Students brainstorm on mini-whiteboards: what qualities or skills make someone "human" (e.g., language, empathy, knowledge, relationships)? Collate answers on the board. Then ask: if the Creature acquires all of these qualities, is it human? Why does society still reject it? Introduce the lesson focus: the Creature\'s self-education through the De Lacey family.',
    differentiation: {
      support: 'Provide a word bank of qualities (language, empathy, love, intelligence, morality) for students to discuss.',
      core: 'Students rank their qualities in order of importance and justify their top choice.',
      stretch: 'Students consider the philosophical distinction between biological humanity and moral/intellectual humanity, linking to Shelley\'s challenge to her readers.',
    },
    resources: ['Mini-whiteboards', 'Word bank (support tier)'],
  },
  mainActivities: [
    {
      title: 'Learning Through Observation: The Creature and the Cottagers',
      duration: '20 minutes',
      instructions:
        'Students read extracts describing the Creature\'s time observing the De Lacey family. Using a two-column table, students track: (1) what the Creature learns (language, emotion, family bonds, history), and (2) what effect this knowledge has on the Creature (desire for connection, awareness of its own isolation, understanding of beauty and injustice). Whole-class discussion: is knowledge a gift or a curse for the Creature? How does Shelley connect this to Victor\'s own pursuit of knowledge?',
      differentiation: {
        support: 'Provide the two-column table with one example per column completed; students add further examples.',
        core: 'Students complete the table independently and write a short response on whether knowledge helps or harms the Creature.',
        stretch: 'Students link the Creature\'s education to Rousseau\'s idea of the "noble savage" and consider whether Shelley suggests the Creature was better off before it learned about human society.',
      },
      resources: ['De Lacey extracts', 'Two-column table worksheet', 'Rousseau context card (stretch)'],
    },
    {
      title: 'The Creature\'s Reading List: Three Texts, Three Lessons',
      duration: '20 minutes',
      instructions:
        'Introduce the three texts the Creature finds: Paradise Lost (Milton), Plutarch\'s Lives, and The Sorrows of Young Werther (Goethe). Provide brief summaries of each. Students work in groups of three, each student taking one text and answering: (1) What does this text teach the Creature? (2) How does it shape the Creature\'s understanding of itself? (3) Which quotation from the Creature\'s response is most significant? Groups then share findings. Focus on Paradise Lost: the Creature identifies with both Adam and Satan — discuss why this is significant.',
      differentiation: {
        support: 'Provide simplified summaries of each text with guiding questions and key quotations pre-selected.',
        core: 'Students work with the original summaries and select their own key quotations.',
        stretch: 'Students write a paragraph comparing the Creature\'s identification with Satan ("I ought to be thy Adam, but I am rather the fallen angel") to Victor\'s own Promethean transgression.',
      },
      resources: ['Three-text summary cards', 'Creature\'s responses extract', 'Group work roles card'],
    },
  ],
  plenaryActivity: {
    title: 'The Creature\'s Letter to Victor',
    duration: '8 minutes',
    instructions:
      'Students write three sentences as the Creature, addressing Victor: "You made me, but the De Laceys taught me to be human. I have learned that... The cruelest lesson is..." Share two or three examples. Discuss how Shelley uses the De Lacey episode to deepen the reader\'s sympathy before the Creature\'s violent turn.',
    differentiation: {
      support: 'Provide the first sentence as a model; students complete the remaining two.',
      core: 'Students write all three sentences independently, incorporating a quotation or keyword.',
      stretch: 'Students reflect on why Shelley positions this episode of sympathy-building immediately before the Creature\'s rejection and descent into violence.',
    },
  },
  homework:
    'Choose one of the three texts the Creature reads (Paradise Lost, Plutarch\'s Lives, or The Sorrows of Young Werther). Write a paragraph explaining how this text shapes the Creature\'s identity and connects to a wider theme in the novel.',
  worksheetQuestions: [
    {
      question: 'What does the Creature learn from observing the De Lacey family, and how does this affect it?',
      lines: 6,
      modelAnswer:
        'The Creature learns language, emotional expression, family bonds, and the history of human civilisation from observing the De Lacey family. It learns to speak and read by watching Safie\'s lessons and discovers concepts like love, poverty, and social class. However, this knowledge is double-edged: the more the Creature understands about human society, the more painfully aware it becomes of its own exclusion from it. It realises it has no family, no name, no place in the world. Shelley uses this to explore the paradox of knowledge — it is both empowering and devastating, giving the Creature the tools to articulate a suffering it might otherwise not have understood.',
      marks: 4,
    },
    {
      question: 'Why is the Creature\'s identification with Satan from Paradise Lost significant?',
      lines: 5,
      modelAnswer:
        'The Creature reads Milton\'s Paradise Lost and initially identifies with Adam, the first created being, but ultimately feels more kinship with Satan, the outcast who declares "Evil, be thou my good." This is significant because it foreshadows the Creature\'s descent into vengeance — like Satan, the Creature is rejected by its creator and turns to destruction as a response. The allusion also complicates the reader\'s sympathy: while Satan is traditionally the villain, Milton\'s portrayal (and Shelley\'s echo of it) presents him as a tragic, wronged figure. Shelley asks the reader to consider who is truly responsible for creating a devil — the being itself, or the God (or creator) who abandoned it.',
      marks: 4,
    },
    {
      question: 'How does the De Lacey episode develop the theme of social exclusion in the novel?',
      lines: 5,
      modelAnswer:
        'The De Lacey episode is the most sustained exploration of social exclusion in the novel. The Creature watches the family from a hiding place, longing to join them but knowing its appearance will provoke fear and violence. When it finally approaches blind old Mr De Lacey — the only person who cannot judge it by sight — the encounter is warm and promising, but the moment Felix sees the Creature, he attacks it violently. Shelley uses this scene to argue that society judges and excludes on the basis of appearance alone, denying the Creature the acceptance it has earned through its intelligence, eloquence, and kindness. The episode is Shelley\'s most direct critique of prejudice.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Students do not need to have read Paradise Lost, Plutarch, or Goethe — brief summaries are sufficient for GCSE.',
    'The De Lacey episode is rich in AO3 opportunities: Enlightenment philosophy, Rousseau, Milton, and Wollstonecraft can all be referenced.',
    'The "noble savage" concept (Rousseau) is a useful stretch point but should not be the main focus at foundation level.',
    'This lesson sets up Lesson 5, where the Creature\'s turn to violence must be understood in the context of its education and repeated rejection.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Analysis of intertextuality',
    'AO3: Context (Enlightenment, Milton, Rousseau)',
    'Group discussion',
    'Comparative analysis',
  ],
};

// ─── Lesson 5: The Creature's Revenge — William and Justine ─────────────────

const lesson5: LessonPlan = {
  id: 'frankenstein-05-creature-revenge-william-justine',
  title: "The Creature's Revenge: William and Justine",
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shelley presents the Creature\'s first act of violence — the murder of William — and its emotional aftermath.',
    'Explore the injustice of Justine\'s trial and execution as a commentary on society\'s failure to protect the innocent.',
    'Evaluate who bears moral responsibility for William\'s death: the Creature, Victor, or society.',
  ],
  successCriteria: [
    'I can analyse the Creature\'s account of William\'s murder, identifying how Shelley maintains sympathy for the Creature even as it commits violence.',
    'I can explain how Justine\'s trial exposes the failures of the justice system in the novel.',
    'I can construct an argument about moral responsibility using evidence from the text.',
  ],
  keywords: [
    'culpability', 'injustice', 'scapegoat', 'moral responsibility',
    'vengeance', 'innocence', 'complicity',
  ],
  starterActivity: {
    title: 'Who Is to Blame?',
    duration: '7 minutes',
    instructions:
      'Present a modern scenario: a child raised in extreme neglect commits a crime. Students discuss in pairs: who is responsible — the child, the parents, or the system that failed to intervene? Take quick feedback, then link to the novel: the Creature kills William, but who is truly responsible? Record initial opinions on a class tally to revisit at the end.',
    differentiation: {
      support: 'Provide a simple "responsibility pyramid" template with three tiers for students to rank the parties involved.',
      core: 'Students justify their position with reasoning and prepare to defend it.',
      stretch: 'Students consider how concepts of moral and legal responsibility differ, and which framework Shelley is more interested in.',
    },
    resources: ['Scenario slide', 'Responsibility pyramid (support tier)'],
  },
  mainActivities: [
    {
      title: 'The Murder of William: Close Reading',
      duration: '18 minutes',
      instructions:
        'Students read the Creature\'s account of murdering William. Annotate for: (1) the Creature\'s emotional state before and after the murder, (2) language that reveals the Creature\'s reasoning (it kills William because he is a Frankenstein, not randomly), (3) how Shelley maintains complexity in the Creature\'s character — it is both violent and articulate, both vengeful and aware of its own corruption. Students write one PEE paragraph analysing how Shelley presents the murder.',
      differentiation: {
        support: 'Provide pre-highlighted key phrases with guided annotation questions for each.',
        core: 'Students annotate independently and write a PEE paragraph with textual evidence.',
        stretch: 'Students consider the significance of William being a child — how does this affect the reader\'s sympathy and complicate their response to the Creature?',
      },
      resources: ['William\'s murder extract', 'Annotation guide', 'PEE frame (support tier)'],
    },
    {
      title: 'Justine\'s Trial: Justice on Trial',
      duration: '22 minutes',
      instructions:
        'Students read extracts from Justine\'s trial, where she is wrongly convicted and executed for William\'s murder. In groups, students complete a "Justice Audit" table: (1) What evidence is used against Justine? (2) How reliable is this evidence? (3) What could Victor do to save her, and why doesn\'t he? (4) What does Shelley suggest about the justice system through Justine\'s fate? Groups present findings. Teacher draws out the key point: Victor\'s silence makes him complicit in Justine\'s death. Students write a paragraph on Shelley\'s presentation of injustice.',
      differentiation: {
        support: 'Provide a partially completed "Justice Audit" table and a paragraph frame with sentence starters.',
        core: 'Students complete the audit and write a paragraph independently.',
        stretch: 'Students link Justine\'s wrongful execution to Mary Wollstonecraft\'s writings on the vulnerability of women in patriarchal legal systems.',
      },
      resources: ['Justine\'s trial extracts', 'Justice Audit table', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Revisiting the Blame Tally',
    duration: '8 minutes',
    instructions:
      'Return to the opening question: who is most responsible for William\'s death? Students re-vote after the lesson. Compare results with the opening tally. Discuss: has your view changed, and if so, what evidence changed it? Teacher consolidates: Shelley deliberately distributes responsibility across multiple characters to complicate simple moral judgements.',
    differentiation: {
      support: 'Students explain their vote in one sentence using a provided frame: "I now think... is most responsible because..."',
      core: 'Students write two sentences explaining any shift in their view and what caused it.',
      stretch: 'Students reflect on how Shelley\'s narrative structure (hearing the Creature\'s perspective) is designed to shift blame away from the Creature and towards Victor.',
    },
  },
  homework:
    'Write a short speech (150-200 words) as either Victor\'s defence lawyer or Justine\'s defence lawyer, arguing that their client is not morally responsible for William\'s death. Use evidence from the novel.',
  worksheetQuestions: [
    {
      question: 'How does Shelley present the Creature\'s murder of William? Is the Creature presented as purely evil?',
      lines: 6,
      modelAnswer:
        'Shelley presents the murder of William as an act born of desperation and accumulated rage rather than innate evil. The Creature does not kill randomly; it targets William specifically because he is a Frankenstein, hoping to hurt the creator who abandoned it. Before the murder, the Creature expresses a desire for connection — it initially hopes the child might be too young to have learned prejudice. When William screams and calls it a "monster" and an "ugly wretch," the Creature\'s hope is destroyed and replaced by fury. Shelley complicates the reader\'s response: while the murder is horrifying, the Creature\'s articulate explanation of its motives prevents us from dismissing it as simply evil. It is a being driven to violence by a society that offered it nothing but rejection.',
      marks: 4,
    },
    {
      question: 'Why does Victor remain silent during Justine\'s trial, and what does this reveal about his character?',
      lines: 5,
      modelAnswer:
        'Victor remains silent during Justine\'s trial because revealing the truth would require him to confess to creating the Creature — an admission that would expose his transgression and likely lead to accusations of madness. His silence reveals his profound moral cowardice: he prioritises his own reputation over an innocent woman\'s life. Shelley presents Victor\'s silence as arguably a greater moral failing than the Creature\'s violence, since Victor has a clear choice and the power to intervene. His failure to act makes him complicit in Justine\'s execution and exposes the hollowness of his claim to be the Creature\'s "victim."',
      marks: 4,
    },
    {
      question: 'What does Justine\'s trial suggest about Shelley\'s view of the justice system?',
      lines: 5,
      modelAnswer:
        'Justine\'s trial reveals a justice system that is superficial, prejudiced, and easily manipulated. She is convicted on circumstantial evidence — the locket found on her person — without any serious investigation into alternative explanations. Her false confession, extracted under pressure from a priest, further highlights the system\'s failure to protect the vulnerable. Shelley, influenced by her parents\' radical politics (William Godwin was a fierce critic of institutional injustice), uses Justine\'s fate to argue that legal systems reflect and reinforce existing power structures rather than delivering true justice. Justine, as a servant and a woman, is disposable in a system designed to serve the interests of wealthy men like Victor.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson involves sensitive discussion of violence and injustice. Ensure appropriate framing and a safe discussion environment.',
    'The moral responsibility debate is an excellent opportunity for AO1 argument construction. Encourage students to use evidence, not just opinion.',
    'Victor\'s complicity in Justine\'s death is a key AO2/AO3 point that examiners value — it shows structural understanding and character analysis.',
    'Link back to the Monster vs. Victim debate from Lesson 3: this lesson should complicate students\' earlier positions.',
  ],
  targetedSkills: [
    'AO1: Constructing arguments',
    'AO2: Analysis of character and structure',
    'AO3: Context (justice, gender, Godwin)',
    'Debate and discussion',
    'Analytical paragraph writing',
  ],
};

// ─── Lesson 6: The Creature's Demand — A Female Companion ───────────────────

const lesson6: LessonPlan = {
  id: 'frankenstein-06-creature-demand-female-companion',
  title: "The Creature's Demand: A Female Companion",
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the Creature\'s argument for a female companion and evaluate its persuasive techniques.',
    'Explore Victor\'s reasons for agreeing to and then destroying the female creature.',
    'Evaluate Shelley\'s exploration of responsibility, fear, and the ethics of creation through this pivotal episode.',
  ],
  successCriteria: [
    'I can explain the Creature\'s argument for a companion and identify the persuasive strategies it uses.',
    'I can analyse Victor\'s internal conflict over creating a second creature.',
    'I can discuss why Victor destroys the female creature and evaluate whether this decision is justified.',
  ],
  keywords: [
    'persuasion', 'social contract', 'ethical dilemma',
    'autonomy', 'companionship', 'destruction', 'consequence',
  ],
  starterActivity: {
    title: 'The Right to Companionship',
    duration: '7 minutes',
    instructions:
      'Display Article 1 of the Universal Declaration of Human Rights: "All human beings are born free and equal in dignity and rights." Ask: does this apply to the Creature? Does every being have a right to companionship? Students discuss in pairs and share views. Introduce the lesson focus: the Creature demands Victor create a female companion, and Victor must decide whether to comply.',
    differentiation: {
      support: 'Provide a simplified version of the UDHR article with a clear discussion question.',
      core: 'Students apply the article to the Creature\'s situation and formulate an argument.',
      stretch: 'Students consider whether "rights" only apply to beings created naturally, and how Shelley\'s novel anticipates modern debates about the rights of artificial beings.',
    },
    resources: ['UDHR Article 1 slide', 'Discussion prompt cards'],
  },
  mainActivities: [
    {
      title: 'The Creature\'s Speech: Persuasive Analysis',
      duration: '20 minutes',
      instructions:
        'Students read the Creature\'s speech demanding a female companion (Chapter 17). Using a persuasive techniques table, students identify and analyse examples of: emotional appeal (pathos), logical reasoning (logos), moral argument (ethos), threats, and promises. Students label each technique and explain its effect on Victor and on the reader. Key quotation: "I am malicious because I am miserable." Discuss: is this a justification, an explanation, or a threat?',
      differentiation: {
        support: 'Provide the persuasive techniques table with categories pre-labelled and one example per category completed.',
        core: 'Students complete the table independently and write a summary of the Creature\'s most effective strategy.',
        stretch: 'Students compare the Creature\'s rhetorical skill to that of Satan in Paradise Lost and discuss how Shelley uses eloquence to unsettle the reader\'s assumptions about monstrosity.',
      },
      resources: ['Chapter 17 extract', 'Persuasive techniques table', 'Key quotation analysis card'],
    },
    {
      title: 'Victor\'s Dilemma: To Create or Destroy?',
      duration: '20 minutes',
      instructions:
        'Students track Victor\'s internal conflict across Chapters 17-20 using a decision-making grid: arguments for creating the female (the Creature\'s suffering, Victor\'s responsibility, the promise of peace) versus arguments against (fear of a new creature, loss of control, the possibility of a "race of devils"). Students then read the extract where Victor destroys the female creature as the Creature watches. Discuss: is Victor\'s destruction an act of moral courage or fearful selfishness? Students write a paragraph evaluating Victor\'s decision.',
      differentiation: {
        support: 'Provide a partially completed decision grid with sentence starters for the evaluation paragraph.',
        core: 'Students complete the grid and write an evaluation paragraph independently.',
        stretch: 'Students consider the gender politics of this episode: Victor fears the female creature might have "desires and passions of her own" — what does this reveal about attitudes to female autonomy?',
      },
      resources: ['Chapters 17-20 key extracts', 'Decision-making grid', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Hot-Seat: Victor on Trial',
    duration: '8 minutes',
    instructions:
      'Teacher (or a confident student) sits in the hot seat as Victor after destroying the female creature. Students ask questions challenging his decision. Victor must justify himself using evidence from the text. Conclude by asking: did Victor make the right choice? Quick show of hands and final discussion point.',
    differentiation: {
      support: 'Provide students with pre-written question cards to ask the hot-seated character.',
      core: 'Students formulate their own questions based on the lesson content.',
      stretch: 'Students ask questions that connect to wider themes: responsibility, playing God, the ethics of creation.',
    },
  },
  homework:
    'Write a letter from the Creature to Victor after the destruction of the female creature. Express the Creature\'s emotions and explain what consequences will follow. Use formal, eloquent language in the style of Shelley.',
  worksheetQuestions: [
    {
      question: 'Analyse how the Creature uses persuasion to convince Victor to create a female companion.',
      lines: 6,
      modelAnswer:
        'The Creature employs a sophisticated combination of emotional appeal, logical argument, and implicit threat. It appeals to Victor\'s guilt — "I am thy creature; I ought to be thy Adam" — invoking the creator\'s moral obligation to its creation. It uses logical reasoning to argue that a companion will end its violence: "My vices are the children of a forced solitude that I abhor." The word "forced" places responsibility on Victor, while "children" ironically echoes the parent-child relationship Victor has denied. Finally, the Creature implies a threat: "I shall be with you on your wedding night," suggesting that Victor\'s refusal will have devastating consequences. Shelley presents the Creature as more articulate and rational than its creator, subverting the reader\'s expectations of a "monster."',
      marks: 4,
    },
    {
      question: 'Why does Victor destroy the female creature, and is his reasoning justified?',
      lines: 6,
      modelAnswer:
        'Victor destroys the female creature because he fears the consequences of creating a second being: she might be more violent than the first, she might refuse to honour the Creature\'s promise to withdraw from humanity, or the two might reproduce and create "a race of devils." These fears reflect Victor\'s inability to control his creations and his horror at the potential consequences. However, his reasoning is arguably selfish rather than moral — he is motivated by fear of what might happen rather than empathy for the Creature\'s suffering. Shelley presents Victor\'s destruction of the female as a second act of abandonment: having failed his first creation, he now refuses to offer even the possibility of redemption, ensuring the Creature\'s complete despair and continued violence.',
      marks: 4,
    },
    {
      question: 'What is significant about the Creature\'s statement, "I am malicious because I am miserable"?',
      lines: 5,
      modelAnswer:
        'This statement encapsulates the novel\'s central argument about the relationship between suffering and violence. The Creature claims its malice is not innate but a direct consequence of its misery, which is itself caused by society\'s rejection and Victor\'s abandonment. The simple parallel structure — "malicious" balanced against "miserable" — creates a powerful cause-and-effect logic. Shelley uses this line to challenge the idea that evil is inherent, instead presenting it as the product of social failure. The statement also functions as both an explanation and a warning: if Victor alleviates the misery by providing a companion, the malice will cease. It places the moral choice — and the moral responsibility — squarely on Victor.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The female creature episode raises important questions about gender and autonomy that resonate with modern students.',
    'Victor\'s fear that the female creature might have "desires and passions of her own" is a key AO3 point linking to Wollstonecraft and contemporary feminism.',
    'The hot-seat activity can be adapted: stronger groups might hot-seat the Creature instead of or as well as Victor.',
    'Emphasise that the destruction of the female creature is the point of no return — it triggers the Creature\'s final vengeance, including the murders of Clerval and Elizabeth.',
  ],
  targetedSkills: [
    'AO1: Constructing arguments',
    'AO2: Analysis of language and persuasion',
    'AO3: Context (gender, ethics, Wollstonecraft)',
    'Evaluative writing',
    'Debate and discussion',
  ],
};

// ─── Lesson 7: Victor and the Creature as Doubles ───────────────────────────

const lesson7: LessonPlan = {
  id: 'frankenstein-07-victor-creature-doubles',
  title: 'Victor and the Creature as Doubles',
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shelley presents Victor and the Creature as doubles or mirror images of each other.',
    'Explore the concept of the doppelganger in Gothic literature and its application to Frankenstein.',
    'Evaluate whether the Creature represents Victor\'s repressed desires, guilt, or darker nature.',
  ],
  successCriteria: [
    'I can identify at least three parallels between Victor and the Creature and explain their significance.',
    'I can use the term "doppelganger" accurately and explain its relevance to the Gothic genre.',
    'I can write a comparative paragraph analysing how Shelley presents Victor and the Creature as interconnected.',
  ],
  keywords: [
    'doppelganger', 'doubling', 'foil', 'Gothic',
    'repression', 'mirroring', 'interconnection',
  ],
  starterActivity: {
    title: 'Spot the Difference — Or the Similarity',
    duration: '7 minutes',
    instructions:
      'Display two columns of quotations — one from Victor, one from the Creature — without labels. Students guess which character said each quotation. Reveal answers and discuss: how similar are Victor and the Creature in their language, emotions, and desires? Introduce the concept of the doppelganger: a literary double who reflects or distorts the protagonist.',
    differentiation: {
      support: 'Provide four quotation pairs with clear thematic links labelled (e.g., both about isolation).',
      core: 'Students match unlabelled quotations and identify the shared theme for each pair.',
      stretch: 'Students consider why Shelley makes Victor and the Creature sound so similar — what is the authorial intention behind linguistic mirroring?',
    },
    resources: ['Quotation matching slide', 'Doppelganger definition card'],
  },
  mainActivities: [
    {
      title: 'Mapping the Doubles: A Parallel Analysis',
      duration: '22 minutes',
      instructions:
        'Students complete a detailed comparison grid examining Victor and the Creature across six categories: (1) isolation from society, (2) desire for companionship, (3) experience of suffering, (4) capacity for revenge, (5) relationship with nature, (6) ultimate fate. For each category, students identify a key quotation from each character and explain the parallel. Teacher models the first category, then students work in pairs. Share findings and discuss: are Victor and the Creature more similar or more different? What does Shelley achieve by making them doubles?',
      differentiation: {
        support: 'Provide the comparison grid with quotations pre-selected; students write the analysis for each parallel.',
        core: 'Students select their own quotations and complete the analysis independently.',
        stretch: 'Students argue whether the Creature can be read as a physical manifestation of Victor\'s repressed guilt and darker impulses, using psychoanalytic reading.',
      },
      resources: ['Comparison grid worksheet', 'Key quotations bank', 'Psychoanalytic reading guide (stretch)'],
    },
    {
      title: 'Writing a Comparative Analysis',
      duration: '20 minutes',
      instructions:
        'Students write two comparative PEE paragraphs answering: "How does Shelley present Victor and the Creature as doubles, and what is the significance of this?" Paragraph 1 should focus on a similarity (e.g., isolation); Paragraph 2 should focus on a difference that complicates the doubling (e.g., the Creature seeks connection while Victor flees from it). Teacher provides a model opening sentence and students continue. Peer-assess one paragraph using the success criteria.',
      differentiation: {
        support: 'Provide a full paragraph frame with sentence starters and a word bank of analytical vocabulary.',
        core: 'Students write both paragraphs independently using the model opening as a guide.',
        stretch: 'Students add a third paragraph evaluating the significance of the doubling for the reader\'s moral judgement — if Victor and the Creature are mirrors, can we condemn one without condemning the other?',
      },
      resources: ['Model paragraph opening', 'Paragraph frame (support tier)', 'Peer assessment checklist'],
    },
  ],
  plenaryActivity: {
    title: 'One Word Summary',
    duration: '6 minutes',
    instructions:
      'Students choose one word that best describes the relationship between Victor and the Creature (e.g., mirrors, symbiosis, destruction, dependency). Students write their word on a sticky note with a one-sentence justification and place it on the board. Teacher groups similar words and discusses the range of interpretations.',
    differentiation: {
      support: 'Provide a choice of five words for students to select from, with definitions.',
      core: 'Students choose their own word and write a full justification sentence.',
      stretch: 'Students explain how their chosen word connects to a specific Gothic convention or Romantic idea.',
    },
  },
  homework:
    'Find two additional quotations (one from Victor, one from the Creature) that demonstrate mirroring or doubling. Write a short comparative analysis explaining the parallel and its effect.',
  worksheetQuestions: [
    {
      question: 'What is a doppelganger and how does this concept apply to Victor and the Creature?',
      lines: 5,
      modelAnswer:
        'A doppelganger is a literary double — a character who mirrors, shadows, or inverts another character, often representing their hidden or repressed self. In Frankenstein, the Creature functions as Victor\'s doppelganger: both are isolated, both suffer, and both are driven to destructive behaviour. Their fates are inextricable — the Creature exists because of Victor, and Victor\'s destruction is caused by the Creature. Shelley uses the doubling to suggest that Victor and the Creature are two aspects of the same being: the rational creator and the emotional, suffering creation. The Creature may represent everything Victor tries to deny about himself — his guilt, his capacity for violence, and his desperate need for connection.',
      marks: 4,
    },
    {
      question: 'Identify and analyse one key parallel between Victor and the Creature.',
      lines: 6,
      modelAnswer:
        'Both Victor and the Creature experience profound isolation that drives them to despair. Victor isolates himself willingly during his creation work, cutting himself off from family and friends in his obsessive pursuit of knowledge. The Creature, by contrast, is isolated involuntarily — rejected by every human it encounters because of its appearance. Despite this difference in cause, the effect is identical: both characters are consumed by misery and driven to harmful actions. Victor\'s self-imposed isolation leads to the act of creation that ruins his life; the Creature\'s enforced isolation leads to the violence that destroys Victor\'s family. Shelley suggests that isolation, regardless of its origin, corrodes the soul and leads to destruction.',
      marks: 4,
    },
    {
      question: 'How does the doubling of Victor and the Creature affect the reader\'s moral judgement?',
      lines: 5,
      modelAnswer:
        'The doubling makes it impossible for the reader to simply condemn the Creature and sympathise with Victor, or vice versa. If we recognise that the Creature mirrors Victor — sharing his suffering, his desire for connection, and his capacity for destructive behaviour — then condemning the Creature requires us to condemn Victor too. Similarly, sympathising with Victor\'s suffering requires us to extend that sympathy to the Creature. Shelley uses the doubling to prevent a simplistic moral reading: there is no clear hero or villain, only two interconnected beings whose fates are tragically bound together. This forces the reader to engage with the novel\'s deeper questions about responsibility, empathy, and the nature of monstrosity.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The doppelganger concept is a key Gothic convention that links to AO2 (methods) and AO3 (genre context).',
    'The quotation-matching starter is a highly effective way to demonstrate the doubling before students encounter the concept theoretically.',
    'Psychoanalytic readings (stretch) are not required for GCSE but can deepen analysis for higher-attaining students.',
    'This lesson works well as a consolidation point before moving to thematic and genre-focused lessons.',
  ],
  targetedSkills: [
    'AO1: Comparative argument',
    'AO2: Analysis of characterisation and doubling',
    'AO3: Context (Gothic conventions)',
    'Comparative writing',
    'Critical thinking',
  ],
};

// ─── Lesson 8: Gothic Elements and the Sublime ─────────────────────────────

const lesson8: LessonPlan = {
  id: 'frankenstein-08-gothic-sublime',
  title: 'Gothic Elements and the Sublime',
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse key Gothic conventions in Frankenstein, including isolation, darkness, the supernatural, and transgression.',
    'Explore Shelley\'s use of the sublime — the overwhelming power of nature — and its thematic significance.',
    'Evaluate how Shelley both uses and subverts Gothic conventions to create a novel that transcends genre boundaries.',
  ],
  successCriteria: [
    'I can identify at least four Gothic conventions in Frankenstein and explain their effect.',
    'I can define "the sublime" and analyse how Shelley uses natural landscapes to reflect characters\' emotional states.',
    'I can write an analytical paragraph on Shelley\'s use of Gothic or sublime elements, linking to authorial intention.',
  ],
  keywords: [
    'Gothic', 'sublime', 'pathetic fallacy', 'transgression',
    'isolation', 'the uncanny', 'Romantic', 'Edmund Burke',
  ],
  starterActivity: {
    title: 'Gothic Bingo',
    duration: '8 minutes',
    instructions:
      'Give each student a bingo card with nine Gothic conventions (e.g., isolated setting, darkness, a secret, a monster, extreme weather, death, an experiment gone wrong, a chase, a tragic ending). Read brief descriptions of scenes from Frankenstein — students mark off the conventions they recognise. First to complete a line wins. Discuss: Frankenstein contains almost every Gothic convention — is it the ultimate Gothic novel?',
    differentiation: {
      support: 'Provide bingo cards with definitions alongside each convention.',
      core: 'Students identify the conventions and recall specific scenes from the novel for each.',
      stretch: 'Students identify one convention Shelley subverts (e.g., the "monster" is eloquent and sympathetic) and explain the effect of this subversion.',
    },
    resources: ['Gothic Bingo cards', 'Scene description cards'],
  },
  mainActivities: [
    {
      title: 'The Sublime in Frankenstein: Landscape and Emotion',
      duration: '20 minutes',
      instructions:
        'Introduce Edmund Burke\'s concept of the sublime: the experience of awe and terror in the face of overwhelming natural power. Students read three key landscape extracts: (1) Victor in the Alps after William\'s murder, (2) the meeting with the Creature on the Mer de Glace, (3) the Arctic pursuit. For each extract, students analyse: what natural imagery does Shelley use? How does the landscape reflect the character\'s emotional state (pathetic fallacy)? What is the effect on the reader? Students complete a table linking setting, emotion, and effect.',
      differentiation: {
        support: 'Provide the analysis table with one extract completed as a model; students complete the other two.',
        core: 'Students complete the table independently for all three extracts.',
        stretch: 'Students compare Shelley\'s use of the sublime to that of other Romantic writers (Wordsworth, Byron) and consider whether Shelley celebrates or critiques the Romantic relationship with nature.',
      },
      resources: ['Three landscape extracts', 'Sublime analysis table', 'Edmund Burke context card'],
    },
    {
      title: 'Gothic Convention Hunt and Analysis',
      duration: '20 minutes',
      instructions:
        'Students work in pairs to complete a "Gothic Convention Hunt" across the novel, identifying examples of: (1) isolated or confined settings, (2) darkness and shadow, (3) secrets and forbidden knowledge, (4) the monstrous or uncanny, (5) transgression of natural boundaries, (6) pursuit and entrapment. For each convention, students note the specific scene, relevant quotation, and its effect. Students then choose their strongest example and write a PEE paragraph analysing Shelley\'s use of that Gothic convention. Share examples.',
      differentiation: {
        support: 'Provide a list of chapter references for each convention so students know where to look.',
        core: 'Students locate examples independently and write a PEE paragraph.',
        stretch: 'Students evaluate whether Frankenstein is better described as a Gothic novel, a Romantic novel, or a science fiction novel, and justify their answer.',
      },
      resources: ['Gothic Convention Hunt worksheet', 'Novel or extract booklet', 'PEE frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Freeze-Frame: The Most Gothic Moment',
    duration: '7 minutes',
    instructions:
      'In groups of three or four, students create a freeze-frame (tableau) of what they consider the most Gothic moment in Frankenstein. Other groups guess the scene and identify the Gothic conventions it contains. Vote on the most effective tableau and discuss why that scene is so powerfully Gothic.',
    differentiation: {
      support: 'Provide a list of three possible scenes for groups to choose from.',
      core: 'Groups choose their own scene and explain their choice using Gothic terminology.',
      stretch: 'Groups explain not just what makes the scene Gothic, but how Shelley subverts reader expectations within it.',
    },
  },
  homework:
    'Write a Gothic-inspired creative piece (200-250 words) describing a setting from Frankenstein in the style of Shelley. Use at least three Gothic conventions and include sublime natural imagery.',
  worksheetQuestions: [
    {
      question: 'What is the sublime, and how does Shelley use it in Frankenstein?',
      lines: 6,
      modelAnswer:
        'The sublime, as defined by Edmund Burke, is the experience of awe, terror, and insignificance in the face of overwhelming natural power. Shelley uses sublime landscapes throughout Frankenstein to reflect her characters\' emotional states and to explore the relationship between humanity and nature. When Victor travels to the Alps after William\'s death, the "awful majesty" of Mont Blanc temporarily soothes his guilt, but the Creature\'s appearance on the Mer de Glace shatters this peace, suggesting that human transgression cannot be escaped even in nature\'s grandeur. The final Arctic setting is the ultimate sublime landscape — vast, empty, and deadly — mirroring the desolation of both Victor\'s and the Creature\'s lives. Shelley uses the sublime to suggest that nature is indifferent to human suffering, a departure from the Romantic ideal of nature as a healing force.',
      marks: 4,
    },
    {
      question: 'Identify three Gothic conventions Shelley uses in Frankenstein and explain their effect.',
      lines: 6,
      modelAnswer:
        'First, Shelley uses isolated settings — Victor\'s laboratory, the Arctic, the Scottish islands — to create a sense of entrapment and to mirror the characters\' psychological isolation. Second, she employs transgression of natural boundaries: Victor\'s creation of life from dead matter is the ultimate Gothic transgression, violating the laws of nature and God. This creates a sense of horror and moral unease. Third, Shelley uses pursuit and entrapment: the Creature pursues Victor across Europe and into the Arctic, creating sustained tension and a sense of inescapable fate. Together, these conventions establish Frankenstein as a Gothic text concerned with the consequences of crossing forbidden boundaries and the impossibility of escaping one\'s own creations.',
      marks: 4,
    },
    {
      question: 'How does Shelley both use and subvert Gothic conventions in Frankenstein?',
      lines: 5,
      modelAnswer:
        'Shelley uses Gothic conventions — the monstrous creature, isolated settings, forbidden knowledge — but subverts them by making the "monster" articulate, sympathetic, and morally complex. In traditional Gothic fiction, the monster is a source of pure horror; in Frankenstein, the Creature is a victim who elicits sympathy. Similarly, the Gothic villain is typically a clear antagonist, but Shelley distributes villainy across Victor, the Creature, and society itself, preventing a simple good-versus-evil reading. Shelley also subverts the Gothic by grounding her supernatural premise in real science (Galvanism) rather than magic or superstition, creating what many critics consider the first science fiction novel. This blending and subversion of conventions is one of the reasons Frankenstein remains so enduringly powerful.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Edmund Burke\'s definition of the sublime is the most useful for GCSE students — keep the theoretical discussion accessible.',
    'Gothic Bingo is an engaging starter that doubles as a retrieval exercise. Laminate cards for reuse.',
    'The genre classification debate (stretch) is not required for GCSE but enriches understanding and can generate strong discussion.',
    'Link the sublime to AO3: it connects Shelley to the Romantic movement and to real scientific/philosophical debates of the early 19th century.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Analysis of setting, atmosphere, and genre conventions',
    'AO3: Context (Gothic genre, Romanticism, Burke)',
    'Creative writing',
    'Genre analysis',
  ],
};

// ─── Lesson 9: Science, Ethics and Responsibility ───────────────────────────

const lesson9: LessonPlan = {
  id: 'frankenstein-09-science-ethics-responsibility',
  title: 'Science, Ethics and Responsibility',
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shelley presents the relationship between scientific progress and moral responsibility.',
    'Explore the novel\'s engagement with Enlightenment and Romantic ideas about the pursuit of knowledge.',
    'Evaluate whether Frankenstein is a warning against science itself or against the irresponsible pursuit of science.',
  ],
  successCriteria: [
    'I can explain Shelley\'s critique of Victor\'s scientific ambition using key quotations.',
    'I can link the novel to its historical context: Galvanism, the Enlightenment, and the Industrial Revolution.',
    'I can construct a sustained argument about the novel\'s message regarding science and ethics.',
  ],
  keywords: [
    'ethics', 'responsibility', 'Galvanism', 'Enlightenment',
    'Industrial Revolution', 'progress', 'consequence', 'moral blindness',
  ],
  starterActivity: {
    title: 'Just Because We Can, Should We?',
    duration: '8 minutes',
    instructions:
      'Display three real scientific breakthroughs that raised ethical debates: nuclear energy, genetic modification, and artificial intelligence. For each, students identify one potential benefit and one potential danger. Then ask: who is responsible when a scientific discovery causes harm — the scientist, the government, or society? Link to Victor: he never considers the ethical implications of his work until it is too late. Introduce the lesson\'s central question: is Shelley anti-science, or anti-irresponsibility?',
    differentiation: {
      support: 'Provide a simple table with the three examples and columns for "benefit" and "danger" pre-structured.',
      core: 'Students complete the table and formulate a position on the responsibility question.',
      stretch: 'Students consider how the ethical frameworks of 1818 (religious morality, natural philosophy) differ from modern scientific ethics and how this shapes Shelley\'s critique.',
    },
    resources: ['Scientific breakthroughs slide', 'Benefit/danger table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Victor as Scientist: A Case Study in Irresponsibility',
      duration: '20 minutes',
      instructions:
        'Students track Victor\'s scientific journey through the novel using a "Responsibility Audit" table: (1) Before creation — what questions does Victor fail to ask?, (2) During creation — what does he sacrifice?, (3) After creation — how does he respond to the consequences? For each stage, students identify key quotations and analyse what they reveal about Victor\'s moral blindness. Key focus: Victor never considers what the Creature might need, feel, or want. He treats creation as a purely intellectual challenge. Students write a paragraph: "How does Shelley present Victor as an irresponsible scientist?"',
      differentiation: {
        support: 'Provide the Responsibility Audit with key moments identified; students find quotations and write analysis.',
        core: 'Students complete the audit independently and write a full analytical paragraph.',
        stretch: 'Students compare Victor\'s approach to creation with the responsibilities of a parent, arguing that Shelley critiques not just bad science but bad parenting.',
      },
      resources: ['Responsibility Audit worksheet', 'Key quotations bank', 'Paragraph frame (support tier)'],
    },
    {
      title: 'Debate: Is Frankenstein Anti-Science?',
      duration: '20 minutes',
      instructions:
        'Divide the class into two groups: (A) Frankenstein is a warning against science — the novel argues that some knowledge is too dangerous for humanity, and (B) Frankenstein is a warning against irresponsible science — the problem is not knowledge itself but Victor\'s failure to consider the consequences. Each group prepares three arguments with textual evidence, then debates. After the debate, students individually write a conclusion paragraph stating their own view, using evidence from both sides.',
      differentiation: {
        support: 'Provide argument cards with pre-written points and quotations for each side; students select and present.',
        core: 'Students develop their own arguments with textual evidence and present them.',
        stretch: 'Students consider a third position: Shelley critiques not science but the Romantic/Enlightenment culture that glorifies individual genius at the expense of communal responsibility.',
      },
      resources: ['Debate preparation sheet', 'Argument cards (support tier)', 'Quotation evidence bank'],
    },
  ],
  plenaryActivity: {
    title: 'Shelley\'s Warning for Today',
    duration: '7 minutes',
    instructions:
      'Students write on a sticky note: "If Shelley were alive today, she would be most concerned about [a modern scientific development] because..." Students place their notes on the board and teacher reads a selection. Discuss: is Frankenstein still relevant as a warning about the ethics of scientific progress?',
    differentiation: {
      support: 'Provide three modern examples to choose from (AI, genetic engineering, nuclear weapons).',
      core: 'Students choose their own example and write a justified response.',
      stretch: 'Students explain specifically which aspect of Shelley\'s critique (abandonment, lack of foresight, playing God) is most relevant to their chosen example.',
    },
  },
  homework:
    'Write a newspaper opinion piece (250-300 words) arguing either that Frankenstein is more relevant today than in 1818, or that modern science has moved beyond the warnings Shelley offers. Use at least two references to the novel.',
  worksheetQuestions: [
    {
      question: 'How does Shelley present Victor as an irresponsible scientist? Use quotations in your answer.',
      lines: 6,
      modelAnswer:
        'Shelley presents Victor\'s irresponsibility as a failure of imagination and empathy rather than intellect. He describes his work in terms of compulsion — "I could not tear my thoughts from my employment" — suggesting he is driven by obsession rather than rational purpose. Crucially, Victor never considers the needs of his creation: he asks "whence did the principle of life proceed?" but never asks what kind of life his creation will have. His "workshop of filthy creation" is hidden away, suggesting he knows his work is morally questionable. After the Creature comes to life, Victor\'s immediate response is to flee, abandoning his creation like a negligent parent. Shelley\'s authorial intention is clear: the danger lies not in the act of creation itself, but in creating without accepting responsibility for the consequences.',
      marks: 4,
    },
    {
      question: 'How does the historical context of Galvanism and the Enlightenment shape the novel\'s treatment of science?',
      lines: 6,
      modelAnswer:
        'Shelley wrote Frankenstein during a period of rapid scientific advancement. Luigi Galvani\'s experiments with electricity on dead tissue had demonstrated that electrical impulses could animate dead muscle, raising genuine speculation about whether science might one day create or restore life. The Enlightenment championed reason, progress, and the pursuit of knowledge as inherently good. Shelley, however, complicates this optimism: Victor embodies the Enlightenment ideal of the brilliant individual pushing the boundaries of knowledge, but the catastrophic consequences of his work suggest that progress without ethical reflection is dangerous. Shelley does not reject science outright but warns that knowledge must be accompanied by responsibility, foresight, and compassion — qualities Victor conspicuously lacks.',
      marks: 4,
    },
    {
      question: 'Is Frankenstein a warning against science itself, or against irresponsible science? Argue your view.',
      lines: 6,
      modelAnswer:
        'Frankenstein is best read as a warning against irresponsible science rather than against science itself. Shelley does not suggest that knowledge is inherently evil — the Creature\'s own education through the De Lacey family shows that learning can foster empathy and understanding. The problem is Victor\'s approach: he pursues knowledge obsessively, in isolation, without considering the ethical implications or accepting responsibility for his creation. He asks whether he can create life but never whether he should. Shelley\'s critique targets the mindset of the solitary genius who believes they are above moral accountability. This is why the novel remains relevant: the warning is not against specific technologies but against the human tendency to pursue power without wisdom.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson is ideal for developing AO3 skills, as students must link the novel to its scientific and philosophical context.',
    'The debate activity works well for developing AO1 argument construction under timed conditions.',
    'Modern parallels (AI, genetic engineering) engage students but ensure the focus remains on the text itself for exam preparation.',
    'Emphasise that the best exam responses avoid sweeping statements like "Shelley thinks science is bad" — nuance is key.',
  ],
  targetedSkills: [
    'AO1: Constructing sustained arguments',
    'AO2: Analysis of characterisation',
    'AO3: Context (Galvanism, Enlightenment, Industrial Revolution)',
    'Debate and persuasion',
    'Evaluative writing',
  ],
};

// ─── Lesson 10: Exam Practice — Extract Analysis ────────────────────────────

const lesson10: LessonPlan = {
  id: 'frankenstein-10-exam-practice-extract',
  title: 'Exam Practice: Extract Analysis',
  text: 'Frankenstein',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply analytical skills to an unseen-style extract from Frankenstein under timed conditions.',
    'Practise structuring an exam response that integrates AO1, AO2, and AO3 effectively.',
    'Use peer and self-assessment to identify strengths and areas for improvement in analytical writing.',
  ],
  successCriteria: [
    'I can write a structured analytical response to an extract question in 25-30 minutes.',
    'I can integrate quotation analysis (AO2) with contextual knowledge (AO3) fluently within paragraphs.',
    'I can identify specific areas for improvement in my own writing using the assessment criteria.',
  ],
  keywords: [
    'extract analysis', 'AO1', 'AO2', 'AO3',
    'topic sentence', 'embedded quotation', 'authorial intention',
  ],
  starterActivity: {
    title: 'Exam Question Anatomy',
    duration: '8 minutes',
    instructions:
      'Display a sample AQA-style question: "Starting with this extract, how does Shelley present the Creature as a sympathetic character?" Break down the question with the class: (1) "Starting with this extract" — what does this mean? (analyse the extract first, then move to wider novel), (2) "how does Shelley present" — focus on methods (AO2), (3) "the Creature as a sympathetic character" — this is the focus for your argument. Students annotate the question, identifying the command words and implicit assessment objectives.',
    differentiation: {
      support: 'Provide a colour-coded annotation key: green for command words, blue for AO2 focus, red for AO3 opportunities.',
      core: 'Students annotate the question independently and identify the AOs they need to address.',
      stretch: 'Students plan a brief response structure (four or five topic sentences) before moving to the main activity.',
    },
    resources: ['Sample question slide', 'Annotation key (support tier)', 'Planning template'],
  },
  mainActivities: [
    {
      title: 'Timed Extract Response',
      duration: '30 minutes',
      instructions:
        'Distribute the extract (the Creature\'s account of approaching the De Lacey family and its subsequent rejection by Felix). Students write a full exam response under timed conditions (25-30 minutes). Question: "Starting with this extract, how does Shelley present the Creature as a sympathetic character? Write about: how Shelley presents the Creature in this extract, and how Shelley presents the Creature as sympathetic in the novel as a whole." Remind students of the structure: introduction with overview, two or three extract paragraphs, one or two wider novel paragraphs, brief conclusion linking to authorial intention.',
      differentiation: {
        support: 'Provide a paragraph-by-paragraph planning frame with sentence starters for the introduction and first body paragraph.',
        core: 'Students write independently with access to the planning template but no sentence starters.',
        stretch: 'Students aim for five or six analytical paragraphs that integrate extract and wider novel analysis seamlessly rather than treating them as separate sections.',
      },
      resources: ['Extract handout (De Lacey rejection)', 'Planning frame (support tier)', 'Lined response paper'],
    },
    {
      title: 'Peer Assessment and Improvement',
      duration: '15 minutes',
      instructions:
        'Students swap responses with a partner. Using the provided assessment criteria grid (based on AQA mark scheme descriptors), students highlight: (1) in green — strong analytical points with embedded quotations, (2) in orange — places where context is used effectively, (3) in pink — areas for improvement (e.g., missing methods analysis, generalised statements, lack of terminology). Partners write two specific "what went well" (WWW) comments and one "even better if" (EBI) target. Students then have 5 minutes to write one improved paragraph based on their EBI feedback.',
      differentiation: {
        support: 'Provide a simplified assessment grid with three criteria and clear examples of each level.',
        core: 'Students use the full assessment criteria grid and write detailed WWW/EBI comments.',
        stretch: 'Students rewrite their weakest paragraph from scratch, incorporating their partner\'s feedback and aiming for the top band of the mark scheme.',
      },
      resources: ['Assessment criteria grid', 'Coloured highlighters', 'Improvement paragraph template'],
    },
  ],
  plenaryActivity: {
    title: 'Top Tips Board',
    duration: '5 minutes',
    instructions:
      'Each student writes one exam tip they have learned or reinforced today on a sticky note (e.g., "always name Shelley\'s method, not just what happens," or "integrate context into analysis paragraphs, don\'t bolt it on"). Collect on a class "Top Tips" display for future revision reference. Teacher highlights the three most common EBI targets observed during circulation.',
    differentiation: {
      support: 'Provide a list of five possible tips for students to choose from.',
      core: 'Students write their own tip based on their personal experience of the timed write.',
      stretch: 'Students write a tip specifically targeting the highest mark band (e.g., "use tentative language — \'Shelley perhaps suggests\' — to show critical thinking").',
    },
  },
  homework:
    'Using the feedback from today\'s peer assessment, rewrite your response in full at home. Aim to address all EBI points and produce a top-band response. Bring both versions to the next lesson for comparison.',
  worksheetQuestions: [
    {
      question: 'How does Shelley use the Creature\'s language in this extract to generate sympathy?',
      lines: 6,
      modelAnswer:
        'Shelley generates sympathy through the Creature\'s eloquent and emotionally articulate language, which contradicts the reader\'s expectation of a "monster." The Creature describes its approach to the De Lacey family with careful, measured language: "my heart beat quick; this was the hour and moment of trial." The phrase "hour and moment of trial" elevates the encounter to a moment of existential significance, showing how deeply the Creature craves acceptance. The verb "beat quick" reveals its vulnerability and anxiety — physical symptoms of hope and fear. Shelley\'s authorial intention is to demonstrate that the Creature possesses a rich inner life that society refuses to acknowledge, challenging the reader\'s own prejudices about appearance and humanity.',
      marks: 8,
    },
    {
      question: 'Analyse how Shelley presents the De Lacey rejection scene as a turning point in the novel.',
      lines: 6,
      modelAnswer:
        'The De Lacey rejection is the novel\'s emotional turning point because it destroys the Creature\'s last hope for human acceptance. Shelley structures the scene to maximise its impact: the Creature\'s conversation with blind Mr De Lacey is warm and promising, creating a brief moment of hope for both the Creature and the reader. When Felix enters and "with supernatural force tore me from his father," the violence is shocking precisely because it follows tenderness. The word "supernatural" is ironic — it is the humans who act monstrously, not the Creature. After this rejection, the Creature declares "everlasting war against the species" — a declaration that echoes Satan\'s war against heaven in Paradise Lost. Shelley shows that society, not nature, creates monsters.',
      marks: 8,
    },
    {
      question: 'How does Shelley present the Creature as sympathetic in the novel as a whole? Consider the wider text.',
      lines: 8,
      modelAnswer:
        'Across the novel, Shelley builds sympathy for the Creature through a careful accumulation of injustice. Its first experience of life is abandonment — Victor flees in horror, denying it the parental care every being needs. The Creature\'s early encounters with humans follow a consistent pattern of unprovoked violence: villagers attack it on sight, and the De Lacey family rejects it despite evidence of its gentleness and intelligence. Shelley gives the Creature its own narrative voice (Chapters 11-16), a structural choice that forces the reader to engage with its perspective. Through this narration, we learn that the Creature was "benevolent; my soul glowed with love and humanity" before society\'s rejection corrupted it. The Creature\'s reading of Paradise Lost provides the most poignant framing: "I ought to be thy Adam, but I am rather the fallen angel." Shelley\'s authorial intention is to challenge the reader\'s assumption that monstrosity is physical rather than moral, and to place responsibility for the Creature\'s violence on the society that created the conditions for it.',
      marks: 8,
    },
  ],
  teacherNotes: [
    'This lesson is designed as exam preparation and should follow the analytical and thematic lessons. Students need prior knowledge of the text.',
    'The timed write can be adjusted: 25 minutes for higher-attaining groups, 30 minutes with a planning frame for foundation groups.',
    'Circulate during the timed write to note common errors for whole-class feedback in the plenary.',
    'The peer assessment activity teaches students to use the mark scheme actively — this metacognitive skill is as valuable as the writing itself.',
    'Consider photographing strong examples (with permission) for use as model answers in future revision lessons.',
  ],
  targetedSkills: [
    'AO1: Sustained critical argument',
    'AO2: Analysis of language, structure, and form',
    'AO3: Contextual integration',
    'Timed writing',
    'Peer assessment and self-improvement',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const frankensteinLessons: LessonPlan[] = [
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
