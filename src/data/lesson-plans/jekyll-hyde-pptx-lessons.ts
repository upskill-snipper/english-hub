/**
 * jekyll-hyde-pptx-lessons.ts
 *
 * Three high-quality Jekyll and Hyde lesson plans for PowerPoint generation.
 * Stevenson quotes are public domain — used freely.
 * Uses the LessonPlanData interface from generate-teaching-pdf.
 */

import type { LessonPlanData } from "@/lib/generate-teaching-pdf"

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 1: The Strange Door — Gothic Setting & Duality Introduction
// ═══════════════════════════════════════════════════════════════════════════

const lesson1: LessonPlanData = {
  title: "The Strange Door — Gothic Setting, Atmosphere & the Theme of Duality",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "The Strange Case of Dr Jekyll and Mr Hyde — Robert Louis Stevenson",
  objectives: [
    "Analyse how Stevenson uses Gothic conventions to create atmosphere in the opening chapter",
    "Explore the symbolism of the door as a threshold between respectability and corruption",
    "Understand Victorian London as a setting that embodies the theme of duality — wealthy streets hiding dark secrets",
    "Examine Stevenson's language techniques: personification, semantic fields, and pathetic fallacy",
    "Begin to develop the concept of duality as the novella's central theme",
  ],
  starterActivity: {
    title: "Two Faces of a City",
    duration: "7 minutes",
    instructions:
      "1. Display two images side by side: a grand Victorian London street (wide, gas-lit, imposing architecture) and a narrow, dark Victorian alley (fog, shadows, cramped buildings).\n2. Students write three adjectives for each image silently (2 minutes).\n3. Pair-share: compare adjectives. Teacher collects them on the board in two columns.\n4. Teacher reveals: 'Both of these places exist in the SAME city — sometimes on the SAME street. Victorian London was a city of contradictions: wealth next to poverty, respectability next to crime, daylight next to darkness. This is the world Stevenson chose for his story about a man who is literally two people.'\n5. Write the key term on the board: DUALITY — the existence of two opposing qualities within the same person, place, or thing.\n6. Ask: 'Where do you see duality in your own world? Can a person be good and bad at the same time?' Cold-call two students.",
    differentiation: {
      support: "Provide a word bank of adjectives for each image: grand, imposing, prosperous, bright / cramped, shadowy, menacing, decayed. Define 'duality' on a card: 'the existence of two opposite qualities in the same thing.'",
      core: "Students generate their own adjectives and write a sentence explaining what duality means in their own words.",
      stretch: "Students predict how a city that hides darkness behind respectability might mirror a character who hides darkness behind a respectable appearance. What is Stevenson suggesting about Victorian society?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: The Description of the Door (Chapter 1, 'Story of the Door')",
      duration: "15 minutes",
      instructions:
        "1. Distribute printed copies of the passage describing the mysterious door — from Enfield's walk through the 'by-street' to the description of the door itself.\n2. Teacher reads the passage aloud slowly, emphasising the Gothic atmosphere.\n3. Display the key quotation: 'a certain sinister block of building thrust forward its gable on the street... bore in every feature the marks of prolonged and sordid negligence.'\n4. Annotation tasks (students work in pairs, 8 minutes):\n   (a) Highlight words from the semantic field of DECAY (e.g. 'blistered', 'discoloured', 'sordid negligence'). What picture do these words create?\n   (b) Circle examples of personification ('thrust forward its gable'). Why does Stevenson make the building seem alive and aggressive?\n   (c) Underline the contrast between the prosperous street and the decayed door. What technique is this? (juxtaposition)\n   (d) The door has 'neither bell nor knocker' and is 'blistered and distained'. What does this suggest about what lies behind it?\n5. Cold-call four students, one per task.\n6. Teacher consolidation: 'Stevenson makes the SETTING do the work of characterisation before we even meet Hyde. The door is a physical embodiment of duality: it exists on a respectable street but represents everything the street wants to hide. Like Hyde himself, the door is a secret entrance to the dark side of respectability.'\n7. Students copy this point.",
      differentiation: {
        support: "Provide the extract with key phrases pre-underlined. Include a glossary: semantic field, personification, juxtaposition, Gothic, sordid, negligence, threshold. Pair support students with a confident reader.",
        core: "Students complete all four annotation tasks independently and copy the consolidation point.",
        stretch: "Students write a paragraph exploring the door as a symbol: 'How does Stevenson use the door to introduce the theme of duality?' Consider: a door is a threshold — a boundary between two worlds. What two worlds does this door separate?",
      },
    },
    {
      title: "Gothic Conventions in the Opening Chapter",
      duration: "12 minutes",
      instructions:
        "1. Display a list of six Gothic conventions on the board:\n   (a) Darkness, fog, and night — atmosphere of mystery and concealment\n   (b) Urban decay — buildings that mirror moral corruption\n   (c) The uncanny — something familiar made strange and unsettling\n   (d) Secrecy and locked doors — hidden knowledge, forbidden spaces\n   (e) Violence that erupts without warning\n   (f) A sense of something monstrous lurking beneath the surface\n2. Students work in pairs to find at least one example of each convention from Chapter 1 (6 minutes). Record in a table.\n3. Class feedback (3 minutes): build a class table on the board.\n4. Key question: 'Why does Stevenson choose Gothic conventions for a story about respectability and reputation? What do darkness and secrecy have to do with Victorian gentlemen?'\n5. Teacher makes the point: 'The Gothic genre is perfect for Stevenson's purposes because it specialises in what is HIDDEN. Victorian gentlemen hid their vices behind respectable facades. The Gothic setting externalises this concealment — fog, locked doors, and dark streets become metaphors for the secrets that polite society refuses to acknowledge.'",
      differentiation: {
        support: "Provide the six conventions pre-printed in a table with one example already filled in. Students find one more example for each. Include page references to help them locate evidence.",
        core: "Students complete the full table independently and answer the key question in a written sentence.",
        stretch: "Students compare Stevenson's urban Gothic to the traditional Gothic (castles, ruins, remote landscapes). Why is a London street more frightening than a haunted castle? What does this suggest about where Stevenson locates evil — not in remote, exotic places, but in the heart of civilised society?",
      },
    },
    {
      title: "Enfield's Account of Hyde: First Impressions of Evil (Chapter 1)",
      duration: "12 minutes",
      instructions:
        "1. Read aloud Enfield's account of seeing Hyde trample over a young girl at a street corner.\n2. Display key quotations describing Hyde:\n   - 'It wasn't like a man; it was like some damned Juggernaut.'\n   - 'He was perfectly cool and made no resistance, but gave me one look, so ugly that it brought out the sweat on me like running.'\n   - 'He gives a strong feeling of deformity, although I couldn't specify the point.'\n3. Students answer three questions in their books (6 minutes):\n   (a) What is striking about the violence of Hyde's action? What does trampling a child suggest about his nature?\n   (b) Enfield cannot describe WHAT makes Hyde ugly — 'I couldn't specify the point.' Why might Stevenson deliberately make Hyde's evil impossible to define?\n   (c) What does the word 'Juggernaut' suggest? (An unstoppable, destructive force.)\n4. Class discussion (3 minutes): 'Stevenson never gives us a clear physical description of Hyde. Why is vague horror more frightening than specific detail?'\n5. Key point: 'Hyde embodies the concept of the uncanny — he looks almost human but something is fundamentally wrong. Stevenson's characters cannot articulate what is wrong because Hyde represents something they cannot consciously acknowledge: the evil within respectable men.'",
      differentiation: {
        support: "Provide the three questions on a card with sentence starters: 'The violence is striking because... / Stevenson makes Hyde's appearance vague because... / The word \"Juggernaut\" suggests...'",
        core: "Students answer all three questions independently and participate in the discussion.",
        stretch: "Students connect Hyde's indescribable appearance to Darwin's theory of evolution and Victorian fears of degeneration. Hyde looks 'not quite human' — could he represent the animal nature that Victorians feared lurked beneath civilised behaviour? Write a paragraph exploring this reading.",
      },
    },
  ],
  plenary: {
    title: "Exit Ticket: Three Key Words",
    instructions:
      "1. Students write three key words that capture the most important ideas from today's lesson.\n2. Beneath each word, write one sentence explaining why it matters for understanding the novella.\n3. Share with a partner — discuss any words you have in common and any that are different.\n4. Teacher cold-calls three students and writes their words on the board.\n5. Likely common words: duality, Gothic, secrecy, facade, evil. Teacher adds any that are missing and explains why they are essential for the unit.",
    differentiation: {
      support: "Provide a word bank of six terms to choose from: duality, Gothic, secrecy, respectability, evil, Hyde. Students choose three and write a sentence for each using the stem: 'This word matters because...'",
      core: "Students choose their own three words and write a sentence for each from memory.",
      stretch: "Students choose one word and write a PEEL-style mini-paragraph explaining how it connects to a specific quotation from today's lesson.",
    },
  },
  keyVocabulary: [
    "duality — the existence of two opposing qualities within the same entity",
    "Gothic — a literary genre characterised by darkness, mystery, decay, and the supernatural",
    "facade — an outward appearance that conceals a different reality beneath",
    "Victorian respectability — the extreme emphasis on moral propriety and public reputation in 19th-century England",
    "repression — the suppression of desires, emotions, or behaviours considered unacceptable",
    "the uncanny — something familiar made strange and unsettling; a key Gothic concept",
    "personification — attributing human qualities to non-human things (e.g. a building that 'thrusts forward')",
    "semantic field — a group of words related to the same topic (e.g. decay: blistered, sordid, discoloured)",
    "pathetic fallacy — using weather or setting to reflect mood or character",
    "juxtaposition — placing two contrasting elements side by side for effect",
    "threshold — a boundary or doorway between two different states or worlds",
    "Darwinism — Darwin's theory of evolution; raised Victorian fears about humanity's animal nature",
    "atavism — evolutionary regression to a more primitive state; often applied to Hyde",
    "degeneration — the fear that civilised humans could regress to a primitive or animal state",
    "novella — a short novel, typically focused on a single theme or narrative line",
  ],
  resourcesNeeded: [
    "Printed extract from Chapter 1: description of the door and Enfield's account of Hyde — one per student",
    "Projector for Victorian London images, Gothic conventions list, quotation displays",
    "Gothic conventions table handout (one per student)",
    "Glossary handout for support-tier students",
    "Word bank for support-tier plenary activity",
    "Mini-whiteboards and pens for starter adjective brainstorm",
  ],
  homework:
    "Write a 200–250 word response to the question:\n'How does Stevenson use setting and atmosphere to create a sense of unease in Chapter 1?'\n\nSuccess criteria:\n- Include at least two embedded quotations from the description of the door or the street\n- Identify and analyse at least two language techniques (e.g. personification, semantic field, juxtaposition)\n- Explain how the setting connects to the theme of duality — the idea of something dark hidden behind a respectable surface\n- Include one AO3 sentence about Victorian London or Victorian respectability\n- Use PEEL structure and formal academic register",
  teacherNotes: [
    "The door is the most important symbol in Chapter 1 and one of the most commonly examined features of the novella. Ensure every student can explain what the door represents: a threshold between Jekyll's respectable world and Hyde's hidden world, between the public self and the private self.",
    "Students often struggle with the concept of 'the uncanny' — use concrete examples. A wax figure that looks almost but not quite human. A house that looks normal but feels wrong. Hyde is uncanny because he looks almost human but everyone who sees him feels instinctive revulsion without being able to say why.",
    "Victorian context is crucial but must be specific. Avoid vague statements like 'Victorians were strict.' Instead: Victorian gentlemen were expected to maintain impeccable public reputations while privately engaging in behaviours (gambling, drinking, visiting prostitutes) that their public persona would condemn. This is the hypocrisy Stevenson anatomises.",
    "The Darwinism connection is stretch material but very high-value for top grades. Hyde's ape-like movements and indescribable 'deformity' tap into Victorian anxieties about evolution: if humans evolved from animals, could they devolve back? This fear — called 'degeneration' — haunted the late Victorian imagination.",
    "Reading tip: Stevenson's prose benefits from being read aloud. The description of the door is rhythmic and atmospheric — perform it. Students who hear the language will analyse it more effectively than those who only read it silently.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 2: Hyde's Violence — Characterisation of Evil
// ═══════════════════════════════════════════════════════════════════════════

const lesson2: LessonPlanData = {
  title: "Hyde's Violence — Characterisation of Evil, Darwinism & Victorian Anxiety",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "The Strange Case of Dr Jekyll and Mr Hyde — Robert Louis Stevenson",
  objectives: [
    "Analyse how Stevenson characterises Hyde through language associated with animalism, primitiveness, and the inhuman",
    "Explore the Carew murder scene as a key moment of escalating violence and loss of control",
    "Understand Victorian anxieties about Darwinism, degeneration, and the animal within civilised man",
    "Examine how other characters' reactions to Hyde reveal Victorian attitudes to deviance and 'otherness'",
    "Evaluate whether Hyde is a separate entity or the hidden truth of Jekyll's nature",
  ],
  starterActivity: {
    title: "What Makes Someone 'Evil'?",
    duration: "6 minutes",
    instructions:
      "1. Display the question: 'What makes someone evil? Is evil something you ARE or something you DO?'\n2. Students write two sentences silently: one defining evil, one saying whether it is innate or chosen (2 minutes).\n3. Pair-share (2 minutes).\n4. Cold-call three students. Write key ideas on the board.\n5. Teacher bridges to the text: 'Stevenson asks this exact question. Hyde does not choose to be evil — he IS evil. He has no conscience, no empathy, no restraint. But here is the terrifying part: he comes from INSIDE Jekyll. Every act of Hyde's violence is something Jekyll is capable of. Hyde is not a stranger — he is Jekyll without the mask.'\n6. Display today's key question: 'Is Hyde a monster — or is he the most honest character in the novella?'",
    differentiation: {
      support: "Provide two definitions to choose from: (a) 'Evil is something inside a person — they are born with it' or (b) 'Evil is something a person chooses to do.' Students choose one and explain their reasoning.",
      core: "Students write their own definition of evil and make an argument for innate vs chosen.",
      stretch: "Students consider a third option: evil is the absence of social restraint. If you removed all consequences (laws, reputation, punishment), would everyone behave like Hyde? Is Hyde simply honesty without consequences?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: The Murder of Sir Danvers Carew (Chapter 4)",
      duration: "15 minutes",
      instructions:
        "1. Set the context: Sir Danvers Carew, an elderly MP, approaches Hyde politely on a moonlit street. Hyde responds with extreme, unprovoked violence.\n2. Teacher reads the passage aloud, emphasising the escalation from calm to frenzy.\n3. Display the key quotation: 'And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on... like a madman. The old gentleman took a step back, at which Mr Hyde broke out of all bounds and clubbed him to the earth. And next moment, with ape-like fury, he was trampling his victim underfoot and hailing down a storm of blows, under which the bones were audibly shattered.'\n4. Annotation tasks (pairs, 8 minutes):\n   (a) Highlight words associated with ANIMALS or primitive behaviour ('ape-like fury', 'trampling'). What does this language suggest about Hyde's nature?\n   (b) Circle verbs that show escalating violence: 'stamping', 'brandishing', 'clubbed', 'trampling', 'hailing'. How does the verb choice intensify across the sentence?\n   (c) Underline 'bones were audibly shattered.' Why does Stevenson include the word 'audibly'? What sense does this appeal to? Why is it more disturbing than simply saying 'broke his bones'?\n   (d) Note the phrase 'broke out of all bounds.' This is literally about violence, but what does it suggest symbolically about the relationship between civilisation and savagery?\n5. Cold-call four students.\n6. Teacher consolidation: 'Stevenson characterises Hyde through animalistic language — \"ape-like fury\" — connecting him to Darwin's theory that humans evolved from primates. The Victorians feared that evolution worked both ways: if we came from animals, could we return to animals? Hyde embodies this fear. He is degeneration made flesh — civilisation stripped away to reveal the beast within.'",
      differentiation: {
        support: "Provide the extract with key phrases pre-highlighted in colour groups: animal language (red), violence verbs (blue), sensory detail (green). Include a glossary: atavism, degeneration, bestial, primal, escalation.",
        core: "Students complete all four annotation tasks and write the consolidation point. Identify the escalation pattern in the verbs.",
        stretch: "Students write a paragraph exploring WHY the violence is unprovoked. Carew is polite, elderly, and non-threatening. What does Hyde's response to kindness reveal? Consider: is Stevenson suggesting that evil does not need a reason — that Hyde's violence is pure, motiveless malignity?",
      },
    },
    {
      title: "How Others See Hyde: The Language of Reaction",
      duration: "12 minutes",
      instructions:
        "1. Display four quotations from different characters describing their reactions to Hyde:\n   (a) Enfield: 'I had taken a loathing to my gentleman at first sight.'\n   (b) Utterson: 'God bless me, the man seems hardly human! Something troglodytic.'\n   (c) The maid (Carew murder witness): 'an aged beautiful gentleman... meeting with Mr Hyde... the older man bowed and accosted the other with a very pretty manner of politeness'\n   (d) Lanyon: 'there was something abnormal and misbegotten in the very essence of the creature.'\n2. Students work in pairs (5 minutes): for each quotation, identify what word or phrase is most revealing and explain what it suggests about Hyde.\n3. Key question for discussion (3 minutes): 'None of these characters can explain WHAT is wrong with Hyde. They feel revulsion but cannot articulate its cause. Why does Stevenson make Hyde's evil impossible to define clearly?'\n4. Teacher makes the point: 'Hyde produces instinctive, physical revulsion — not rational objection. Stevenson suggests that evil is felt in the body before it is understood by the mind. The word \"troglodytic\" (cave-dweller) links Hyde to pre-civilised humanity. He triggers a primal fear because he represents what humanity was before civilisation.'\n5. Students copy this point.",
      differentiation: {
        support: "Provide the four quotations on cards with guided questions: 'Which word is most powerful? What does it suggest? What does the character FEEL when they see Hyde?' Define 'troglodytic' and 'misbegotten' on the glossary card.",
        core: "Students identify key words/phrases for all four quotations and contribute to the discussion.",
        stretch: "Students write a paragraph exploring the idea that Hyde is a projection of Victorian fears about 'the other' — anyone who did not conform to the norms of white, middle-class, Protestant masculinity was viewed with suspicion and disgust. Is Stevenson critiquing this reaction or sharing it?",
      },
    },
    {
      title: "Exam Practice: How Does Stevenson Present Hyde as Frightening?",
      duration: "12 minutes",
      instructions:
        "1. Display the exam-style question: 'How does Stevenson present Hyde as a frightening character?'\n2. Teacher models a topic sentence: 'Stevenson presents Hyde as frightening not through specific physical description but through the instinctive, visceral revulsion he provokes in every character who encounters him — a technique that makes his evil feel primal and inescapable.'\n3. Students write a full PEEL paragraph (8 minutes) using evidence from today's lesson.\n4. Peer assessment (3 minutes): partner checks for quotation, technique, effect, and context link.\n5. Two volunteers share. Class votes on the strongest analytical point.",
      differentiation: {
        support: "Provide a PEEL frame: 'Stevenson presents Hyde as frightening by... This is shown when [character] describes him as \"...\" The word \"...\" suggests... Stevenson does this because Victorian readers would have feared...'",
        core: "Write a full PEEL paragraph independently with embedded quotation and technique analysis.",
        stretch: "Write two paragraphs: one analysing Hyde's violence (what he does) and one analysing others' reactions (how he makes people feel). Which method of characterisation is more effective at creating fear?",
      },
    },
  ],
  plenary: {
    title: "Is Hyde Human?",
    instructions:
      "1. Display the question: 'Is Hyde human? Or is he something else entirely?'\n2. Students write HUMAN, NOT HUMAN, or BOTH on mini-whiteboards with one reason.\n3. Hold up boards simultaneously.\n4. Teacher interviews three students: one from each category.\n5. Closing thought from the teacher: 'The most frightening thing about Hyde is not that he is inhuman — it is that he IS human. He is the part of every person that society forces us to hide. Stevenson's genius is making us recognise Hyde while desperately wanting to deny him.'\n6. Students write one final sentence: 'The most disturbing thing about Hyde is...'",
    differentiation: {
      support: "Provide two arguments for each position on a cue card. Students choose and complete: 'I think Hyde is/is not human because...'",
      core: "Students respond independently with textual evidence.",
      stretch: "Students argue that the question itself reveals Victorian anxiety: the need to classify Hyde as 'not human' is the same impulse that drives Jekyll to create him — the desire to separate the 'good' self from the 'bad' self. But Stevenson shows this separation is impossible.",
    },
  },
  keyVocabulary: [
    "atavism — reversion to an earlier, more primitive stage of evolution",
    "degeneration — the Victorian fear that civilised humans could regress to an animal state",
    "bestial — resembling a beast; savage and brutal",
    "troglodytic — cave-dwelling; primitive and pre-civilised",
    "visceral — relating to deep, instinctive feelings rather than rational thought",
    "escalation — a gradual increase in intensity, severity, or violence",
    "motiveless malignity — evil without apparent cause or reason (a concept from Coleridge)",
    "Darwinism — the theory of evolution by natural selection; relevant to fears about humanity's animal nature",
    "the other — a person or group perceived as fundamentally different and therefore threatening",
    "revulsion — intense disgust and horror",
    "innate — inborn; existing from birth rather than acquired",
    "characterisation — the techniques an author uses to create and develop a character",
    "simile — a comparison using 'like' or 'as'",
    "auditory imagery — language that appeals to the sense of hearing",
    "primal — relating to the earliest stage of development; basic and instinctive",
  ],
  resourcesNeeded: [
    "Printed extract: Carew murder passage from Chapter 4 — one per student",
    "Quotation cards: four character reactions to Hyde (one set per pair)",
    "Projector for quotation displays, annotation tasks, and exam question",
    "Glossary handout for support-tier students",
    "PEEL paragraph frame for support-tier students",
    "Mini-whiteboards and pens for starter and plenary",
    "Colour-coded annotation guide for support-tier students",
  ],
  homework:
    "Write a 250-word response to the question:\n'How does Stevenson use animal imagery to characterise Hyde?'\n\nSuccess criteria:\n- Include at least two quotations that use animal or primitive language to describe Hyde\n- Analyse the effect of specific word choices (e.g. 'ape-like', 'troglodytic', 'trampling')\n- Link the animal imagery to Victorian anxieties about Darwinism and degeneration (AO3)\n- Explain what Stevenson suggests about human nature through Hyde's characterisation\n- Use PEEL structure and formal academic register",
  teacherNotes: [
    "The Carew murder is the most commonly examined extract from the novella. Students should be able to analyse 'ape-like fury' and the escalating verb pattern from memory. Drill these during revision lessons.",
    "The 'indescribable' quality of Hyde is a deliberate and sophisticated authorial choice. Students often see it as lazy writing — explain that the opposite is true. Stevenson makes Hyde's evil FELT rather than seen because he wants to represent something that exists below the threshold of rational understanding. This is the uncanny.",
    "Darwinism context is essential for top grades but must be handled precisely. The key point: Darwin published On the Origin of Species in 1859. By 1886, Victorians were terrified by the implication that if humans evolved from animals, they might not be as far from animals as they liked to believe. Hyde embodies this fear.",
    "Sensitive content note: the Carew murder is violent. Frame the discussion in analytical terms — focus on Stevenson's language choices and their effects, not on the violence itself. If any student is uncomfortable, they can focus on the character reaction quotations instead.",
    "The 'Is Hyde human?' plenary question often provokes strong responses. Let the debate develop — the ambiguity is the point. Stevenson does not resolve whether Hyde is a separate creature or Jekyll's true nature, and the best exam answers explore this tension rather than choosing one side.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 3: The Final Confession — Duality, Victorian Context & Resolution
// ═══════════════════════════════════════════════════════════════════════════

const lesson3: LessonPlanData = {
  title: "The Final Confession — Duality, Repression & the Victorian Self (Chapter 10)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "The Strange Case of Dr Jekyll and Mr Hyde — Robert Louis Stevenson",
  objectives: [
    "Analyse Jekyll's 'Full Statement of the Case' as the key to understanding the novella's central theme",
    "Explore how Jekyll's confession reveals that duality is not a flaw but a universal human condition",
    "Examine Stevenson's critique of Victorian repression — the social pressure to hide one's true nature",
    "Understand how the novella's structure (mystery → revelation) mirrors the theme of hidden identity",
    "Evaluate Stevenson's final message: is the moral that humans must accept their dual nature, or that some impulses must be permanently suppressed?",
  ],
  starterActivity: {
    title: "The Mask You Wear",
    duration: "6 minutes",
    instructions:
      "1. Display the quotation from Jekyll's confession: 'I learned to recognise the thorough and primitive duality of man... that man is not truly one, but truly two.'\n2. Ask: 'Do you agree? Is every person actually TWO people — one they show the world, and one they keep hidden?'\n3. Students write two sentences: (a) one thing they show the world about themselves, (b) one thing they keep private (note: this should be innocuous, e.g. 'I pretend to like maths but I hate it', not deeply personal).\n4. Pair-share (1 minute).\n5. Teacher bridges: 'Jekyll is not a mad scientist. He is a respectable Victorian gentleman who feels suffocated by the pressure to be perfect. He creates Hyde not because he is evil, but because he wants a way to express the parts of himself that society forbids. Today we read his confession — and discover that the real horror is not Hyde, but the society that made Hyde necessary.'",
    differentiation: {
      support: "Provide the quotation with key words underlined ('thorough', 'primitive', 'duality', 'truly two'). Define 'duality' and 'repression' on the board. Offer the sentence stem: 'I agree/disagree that people are \"truly two\" because...'",
      core: "Students respond to the quotation independently and offer a verbal prediction about what Jekyll's confession will reveal.",
      stretch: "Students consider the implications: if every person is 'truly two', then is morality a performance? Is being 'good' just hiding the 'bad'? What does this mean for the concept of genuine goodness?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: Jekyll's Confession — The Origin of Hyde (Chapter 10 extracts)",
      duration: "15 minutes",
      instructions:
        "1. Distribute printed extracts from Chapter 10 ('Henry Jekyll's Full Statement of the Case').\n2. Teacher reads aloud the key passage in which Jekyll explains why he created Hyde.\n3. Display three key quotations on the board:\n   (a) 'I was in no sense a hypocrite; both sides of me were in dead earnest.'\n   (b) 'I learned to recognise the thorough and primitive duality of man.'\n   (c) 'I had learned to dwell with pleasure, as a beloved daydream, on the thought of the separation of these elements.'\n4. Annotation tasks (pairs, 8 minutes):\n   (a) What does Jekyll mean when he says he is 'in no sense a hypocrite'? If both sides are genuine, what is he claiming about human nature?\n   (b) What does 'primitive duality' suggest? Why does Stevenson use the word 'primitive'?\n   (c) Jekyll describes the separation of good and evil as a 'beloved daydream.' What does this word choice reveal about his motivation? Is it scientific curiosity or psychological desperation?\n   (d) Why does Jekyll use the first-person singular throughout ('I learned', 'I had')? What is the effect of this confessional voice?\n5. Cold-call four students.\n6. Teacher consolidation: 'Jekyll's confession reveals that he does not create Hyde out of madness or wickedness, but out of exhaustion — the exhaustion of constantly performing respectability. Victorian society demanded that gentlemen suppress every desire, impulse, and pleasure that was not strictly moral. Jekyll's experiment is an attempt to escape this prison. Stevenson is not just telling a horror story — he is diagnosing Victorian society itself as the cause of the horror.'\n7. Students copy this point.",
      differentiation: {
        support: "Provide the three quotations on cards with modern English paraphrases beneath. Include guided questions for each: 'What does this mean in plain English? What does it tell us about why Jekyll created Hyde?'",
        core: "Students complete all four annotation tasks and write the consolidation point. Identify the connection between Jekyll's language and Victorian social pressure.",
        stretch: "Students write a paragraph arguing that Jekyll's confession makes him a sympathetic character — not a villain, but a victim of a repressive society. Use quotations from the confession to support this reading. Consider: does Stevenson want us to blame Jekyll or blame the society that produced him?",
      },
    },
    {
      title: "The Loss of Control: Hyde Takes Over (Chapter 10 later extracts)",
      duration: "12 minutes",
      instructions:
        "1. Read aloud the later passages where Jekyll describes losing control — Hyde begins to emerge without the potion, Jekyll wakes up as Hyde.\n2. Display two key quotations:\n   (a) 'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.'\n   (b) 'He, I say — I cannot say, I.'\n3. Students answer two questions in their books (5 minutes):\n   (a) What does 'becoming incorporated' mean? Why is this metaphor powerful? (Incorporated literally means 'made into one body' — the two identities are merging.)\n   (b) 'He, I say — I cannot say, I.' — Jekyll cannot even use the pronoun 'I' to refer to Hyde. What does this grammatical confusion reveal about identity? At what point does Jekyll stop being Jekyll?\n4. Class discussion (3 minutes): 'What is Stevenson's warning here? If you repress your darker impulses, do they go away — or do they grow stronger?'\n5. Key point on the board: 'Stevenson suggests that repression does not destroy evil — it incubates it. The longer Jekyll suppresses his desires, the more powerful Hyde becomes. The moral is not that humans should indulge their darkest impulses, but that pretending they do not exist makes them more dangerous.'",
      differentiation: {
        support: "Provide the two quotations with key words glossed: 'incorporated = made into one body', 'original = first, real'. Supply sentence starters for the written answers.",
        core: "Students answer both questions independently and contribute to the discussion.",
        stretch: "Students connect the loss of control to addiction. Jekyll begins by choosing to take the potion; eventually he cannot stop. Write a paragraph: 'How does Stevenson use the relationship between Jekyll and Hyde to explore the concept of addiction — the loss of free will?'",
      },
    },
    {
      title: "Whole-Text Evaluation: What Is Stevenson's Message?",
      duration: "12 minutes",
      instructions:
        "1. Display the exam-style question: 'What is Stevenson's message about human nature in Jekyll and Hyde?'\n2. Display three possible thesis statements:\n   (a) 'Stevenson argues that every human being contains both good and evil, and that attempting to separate them is catastrophically dangerous.'\n   (b) 'Stevenson critiques Victorian society for forcing people to repress their true nature, arguing that repression creates monsters.'\n   (c) 'Stevenson warns that science without moral restraint leads to destruction — Jekyll's experiment is a cautionary tale about playing God.'\n3. Students choose the thesis they most agree with — or write their own — and write a PEEL paragraph supporting it (8 minutes).\n4. Quick share (3 minutes): one volunteer per thesis. Class identifies which thesis has the strongest textual support.\n5. Teacher concludes: 'All three are valid — the best essays explore multiple readings. What separates good answers from great answers is the ability to hold two ideas in tension: repression is dangerous, but so is indulgence. Stevenson offers no easy solution — only the warning that pretending evil does not exist makes it worse.'",
      differentiation: {
        support: "Students choose from the three provided thesis statements and use a PEEL frame to write their paragraph: 'Stevenson's message is that... This is shown when Jekyll says \"...\" The word \"...\" suggests... This connects to the theme of...'",
        core: "Students choose a thesis (provided or original) and write a PEEL paragraph with embedded quotation and technique analysis.",
        stretch: "Students write a paragraph that explores the TENSION between two thesis statements — arguing that the novella's power comes from its refusal to offer a simple moral. Use the phrase 'On one hand... but on the other hand...' to demonstrate evaluative thinking.",
      },
    },
  ],
  plenary: {
    title: "Final Question: Who Is the Real Monster?",
    instructions:
      "1. Display the question: 'Who or what is the real monster in Jekyll and Hyde? Hyde? Jekyll? Victorian society? Human nature itself?'\n2. Students write their answer on a sticky note with ONE sentence of justification.\n3. Place sticky notes on a four-quadrant board: HYDE / JEKYLL / SOCIETY / HUMAN NATURE.\n4. Teacher reads three of the most interesting responses aloud.\n5. Closing statement: 'Stevenson's novella endures because it asks a question we still cannot answer: are people good or evil? The answer, like Jekyll himself, is both.'",
    differentiation: {
      support: "Provide four sentence starters, one per quadrant: 'The real monster is Hyde because... / The real monster is Jekyll because... / The real monster is Victorian society because... / The real monster is human nature because...'",
      core: "Students choose independently and write a justified response.",
      stretch: "Students argue that the novella is designed to make ALL four answers equally valid — and that Stevenson's refusal to choose is itself the message. What does narrative ambiguity contribute to a text's lasting power?",
    },
  },
  keyVocabulary: [
    "duality — the coexistence of two opposing qualities within the same entity; the novella's central theme",
    "repression — the psychological suppression of desires or impulses considered unacceptable by society",
    "confession — a formal declaration of wrongdoing; Jekyll's final chapter is a confessional narrative",
    "incorporated — literally 'made into one body'; Jekyll and Hyde merging into a single identity",
    "identity — the qualities, beliefs, and characteristics that define a person",
    "Victorian morality — the strict ethical code of 19th-century England emphasising propriety and self-control",
    "hypocrisy — pretending to have moral standards that one does not actually hold",
    "cautionary tale — a story designed to warn against a particular behaviour or decision",
    "hubris — excessive pride or confidence that leads to downfall; Jekyll's belief he can control Hyde",
    "free will — the ability to make choices independently; Jekyll gradually loses this",
    "determinism — the idea that behaviour is predetermined by forces beyond individual control",
    "allegory — a narrative in which characters and events symbolise broader moral or social ideas",
    "ambiguity — deliberate uncertainty or double meaning in a text",
    "denouement — the final resolution of a narrative's central conflict",
    "epistolary — told through letters, documents, or confessions; the novella uses multiple narrative voices",
  ],
  resourcesNeeded: [
    "Printed extracts from Chapter 10 (Jekyll's Full Statement) — selected passages, one set per student",
    "Projector for quotation displays, thesis statements, and four-quadrant board",
    "Thesis statement cards (three options printed for support-tier students)",
    "PEEL paragraph frame for support-tier students",
    "Glossary handout for support-tier students",
    "Sticky notes for plenary activity",
    "Four-quadrant display board or poster paper for plenary",
  ],
  homework:
    "Write a 300-word essay response to the question:\n'How does Stevenson explore the theme of duality in Jekyll and Hyde?'\n\nSuccess criteria:\n- Present a clear thesis statement in your opening sentence\n- Refer to at least three different chapters or moments in the novella\n- Include embedded quotations from Jekyll's confession (Chapter 10) and at least one other chapter\n- Analyse language techniques and explain their connection to the theme of duality\n- Include AO3 context on Victorian repression, Darwinism, or the Gothic tradition\n- Use PEEL paragraphs and formal academic register\n- Reach a clear conclusion about Stevenson's message",
  teacherNotes: [
    "Chapter 10 is the most important chapter for exam purposes because it contains Jekyll's direct explanation of duality. Students should memorise 'man is not truly one, but truly two' — this quotation can be deployed in almost any Jekyll and Hyde essay.",
    "The pronouns are a subtle but powerful analytical point. When Jekyll says 'He, I say — I cannot say, I', the grammatical confusion mirrors the collapse of identity. This is an AO2 point about form and structure that examiners reward highly.",
    "The repression reading is the most sophisticated AO3 angle. Students who can argue that SOCIETY is the villain — not Hyde — demonstrate the kind of critical thinking that earns top marks. The argument: if Victorian society did not demand impossible levels of moral perfection, Jekyll would never have needed to create Hyde.",
    "The addiction parallel (stretch activity) is a legitimate and insightful reading. Jekyll begins with choice ('I could stop whenever I liked') and ends with compulsion (Hyde emerges without the potion). This mirrors substance addiction and is a powerful way to make the text relevant to modern students.",
    "This lesson works well as a unit-ending lesson. The 'Who is the real monster?' plenary can serve as a revision prompt — students who can argue all four positions have effectively revised the entire text.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export const jekyllHydePptxLessons: LessonPlanData[] = [
  lesson1,
  lesson2,
  lesson3,
]
