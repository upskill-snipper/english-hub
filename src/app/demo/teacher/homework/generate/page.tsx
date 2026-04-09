"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import {
  generateHomeworkPdf,
  generateHomeworkMarkSchemePdf,
} from "@/lib/generate-teaching-pdf"
import type { HomeworkData } from "@/lib/generate-teaching-pdf"
import { generateHomeworkWord } from "@/lib/generate-docx"
import DemoBanner from "@/components/demo/DemoBanner"

// ─── Types ────────────────────────────────────────────────────────────────────

interface HomeworkQuestion {
  question: string
  marks: number
  lines: number
  modelAnswer?: string
}

interface GeneratedHomework {
  id: string
  title: string
  topic: string
  homeworkType: string
  yearGroup: string
  targetGrade: string
  estimatedTime: string
  instructions: string
  questions: HomeworkQuestion[]
  successCriteria: string[]
  extensionTasks: string[]
  markScheme: string[]
}

// ─── Form Options ─────────────────────────────────────────────────────────────

const TOPICS = [
  "Macbeth",
  "An Inspector Calls",
  "A Christmas Carol",
  "Of Mice and Men",
  "Poetry Anthology",
  "Romeo and Juliet",
  "Unseen Poetry",
  "Creative Writing",
  "Rhetoric and Persuasion",
] as const

const HOMEWORK_TYPES = [
  "Reading Comprehension",
  "Essay",
  "Quote Analysis",
  "Creative Writing",
  "Vocabulary",
  "Revision Questions",
] as const

const YEAR_GROUPS = [
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
  "Year 13",
] as const

const TARGET_GRADES = [
  "Grade 3-4 (Foundation)",
  "Grade 4-5 (Developing)",
  "Grade 5-6 (Secure)",
  "Grade 6-7 (Strong)",
  "Grade 7-8 (Excellent)",
  "Grade 8-9 (Exceptional)",
] as const

// ─── Pre-built Homework Templates ─────────────────────────────────────────────

const HOMEWORK_TEMPLATES: GeneratedHomework[] = [
  // Macbeth - Quote Analysis
  {
    id: "hw-macbeth-quotes",
    title: "Macbeth Act 1: Key Quotation Analysis",
    topic: "Macbeth",
    homeworkType: "Quote Analysis",
    yearGroup: "Year 10",
    targetGrade: "Grade 5-6 (Secure)",
    estimatedTime: "40-50 minutes",
    instructions:
      "Analyse each quotation from Act 1 of Macbeth. For each quote, identify the speaker, explain the meaning in context, identify at least one language technique, and explain how it links to a key theme. Write in full sentences using PEEL paragraphs where indicated.",
    questions: [
      {
        question:
          "Read the quotation: 'Fair is foul, and foul is fair.' (Act 1, Scene 1). Who speaks this line? Explain what it means literally and what it suggests about the themes of the play.",
        marks: 4,
        lines: 6,
        modelAnswer:
          "The three witches speak this line in the opening scene. Literally, it means that what appears good is actually evil, and what seems evil may be good. This establishes the theme of appearance versus reality that runs throughout the play. The antithesis creates a sense of moral confusion, warning the audience that nothing in this world is as it seems. The chiasmus structure mirrors the inversion of natural order that Macbeth's actions will cause.",
      },
      {
        question:
          "Analyse the quotation: 'Stars, hide your fires; / Let not light see my black and deep desires.' (Act 1, Scene 4). What language techniques does Shakespeare use and what do they reveal about Macbeth's state of mind?",
        marks: 5,
        lines: 8,
        modelAnswer:
          "Shakespeare uses apostrophe as Macbeth addresses the stars, personifying them as witnesses to his guilt. The imperative 'hide' reveals his desire to conceal his ambition. The metaphor of 'black and deep desires' uses colour symbolism -- black connoting evil -- and the adjective 'deep' suggests these desires are buried within him, fundamental to his character. The juxtaposition of 'light' and 'black' reinforces the play's thematic contrast between good and evil. This soliloquy reveals Macbeth is already contemplating regicide but is ashamed of his ambition.",
      },
      {
        question:
          "Explore the significance of Lady Macbeth's command: 'Look like the innocent flower, / But be the serpent under't.' (Act 1, Scene 5). How does this connect to the context of the play?",
        marks: 5,
        lines: 8,
        modelAnswer:
          "Lady Macbeth uses a simile comparing Macbeth to both a flower and a serpent, instructing him to hide his murderous intent behind a pleasant exterior. The serpent image carries biblical connotations of the devil in the Garden of Eden, linking Lady Macbeth to temptation and the Fall. This connects to Jacobean beliefs about equivocation and the dangers of deception. A Jacobean audience would recognise the serpent as Satan's form, making Lady Macbeth's instruction doubly transgressive -- she is actively encouraging evil.",
      },
      {
        question:
          "Explain the dramatic significance of Macbeth's soliloquy: 'If it were done when 'tis done, then 'twere well / It were done quickly.' (Act 1, Scene 7). How does the language reveal his internal conflict?",
        marks: 6,
        lines: 10,
        modelAnswer:
          "Shakespeare uses conditional language ('If') to show Macbeth's uncertainty. The euphemism 'it' for murder reveals his inability to name the act directly, suggesting moral discomfort. The repetition of 'done' creates a restless, circular rhythm that mirrors his conflicted mind. The soliloquy is significant because it occurs just before the murder, placing the audience in Macbeth's psychological turmoil. He recognises that actions have consequences beyond the immediate moment, yet his 'vaulting ambition' will ultimately override his conscience -- establishing him as a tragic hero who knowingly chooses his destruction.",
      },
      {
        question:
          "Compare two quotations from Act 1 that present the theme of ambition. Explain how Shakespeare develops this theme across the act.",
        marks: 6,
        lines: 10,
        modelAnswer:
          "In the opening, Macbeth is described as 'brave Macbeth' and 'valiant', presenting ambition as noble and martial. However, by Act 1 Scene 7, his ambition has become 'vaulting ambition, which o'erleaps itself', presented through a metaphor of a horse jumping too high and falling. Shakespeare develops the theme by showing how ambition transforms from a positive quality to a destructive force. The equestrian metaphor suggests Macbeth has lost control, and the verb 'o'erleaps' implies excess. Shakespeare's development warns the Jacobean audience that unchecked ambition disrupts the Great Chain of Being and leads inevitably to downfall.",
      },
    ],
    successCriteria: [
      "I can identify language techniques and explain their effect on the reader/audience",
      "I can link quotations to key themes of the play",
      "I can embed contextual understanding (AO3) within my analysis",
      "I can write in PEEL paragraphs with embedded quotations",
      "I can use subject terminology accurately (soliloquy, metaphor, imperative, etc.)",
    ],
    extensionTasks: [
      "Choose one quotation and write a paragraph exploring an alternative interpretation -- how might a modern audience respond differently from a Jacobean one?",
      "Research the historical context of the Gunpowder Plot (1605) and write three sentences explaining how it connects to the themes of treason and deception in Macbeth.",
      "Create a quotation map for Act 1, linking five key quotes with arrows showing how they connect thematically.",
    ],
    markScheme: [
      "Award marks for identification of language techniques with accurate terminology (1 mark per technique identified)",
      "Award marks for explanation of effect on reader/audience (1-2 marks depending on depth)",
      "Award marks for contextual links where the question requires it (1-2 marks)",
      "Full marks require a developed, perceptive response with embedded quotation and fluent analytical writing",
      "Deduct no marks for spelling errors but note SPaG for feedback purposes",
    ],
  },

  // An Inspector Calls - Reading Comprehension
  {
    id: "hw-aic-comprehension",
    title: "An Inspector Calls: Responsibility and Social Class",
    topic: "An Inspector Calls",
    homeworkType: "Reading Comprehension",
    yearGroup: "Year 11",
    targetGrade: "Grade 6-7 (Strong)",
    estimatedTime: "45-55 minutes",
    instructions:
      "Answer all questions in full sentences. Use quotations from the play to support your answers where appropriate. Each question tests your ability to read, analyse, and evaluate Priestley's methods and messages. Aim for two to three sentences minimum per short answer and a full PEEL paragraph for extended responses.",
    questions: [
      {
        question:
          "Explain what Priestley means by 'collective responsibility'. How does the Inspector represent this idea?",
        marks: 4,
        lines: 6,
        modelAnswer:
          "Collective responsibility is the idea that everyone in society is responsible for the welfare of others, not just themselves. The Inspector represents this through his final speech where he warns that 'We are responsible for each other.' The first-person plural pronoun 'we' includes the audience, making Priestley's socialist message direct. The Inspector functions as Priestley's mouthpiece, using his authority to challenge the Birlings' -- and by extension the audience's -- individualism.",
      },
      {
        question:
          "How does Priestley use the character of Sheila to show that change is possible? Support your answer with evidence from the play.",
        marks: 5,
        lines: 8,
        modelAnswer:
          "Priestley presents Sheila as the character most capable of moral growth. Initially described as 'a pretty girl in her early twenties, very pleased with life', she transforms through the course of the play into someone who accepts responsibility. Her admission that getting Eva fired was motivated by jealousy shows self-awareness. By the end, she recognises that 'these girls aren't cheap labour -- they're people', directly opposing her father's capitalist values. Priestley uses Sheila to suggest that the younger generation can learn and change, embodying his hope for post-war Britain.",
      },
      {
        question:
          "Why does Priestley set the play in 1912 but write it in 1945? What effect does this have on the audience?",
        marks: 5,
        lines: 8,
        modelAnswer:
          "Priestley sets the play in 1912 -- before two world wars -- so that the audience in 1945 can see the dramatic irony in Mr Birling's confident predictions that there will be no war and that the Titanic is 'absolutely unsinkable'. The audience knows Birling is catastrophically wrong, undermining his credibility and his capitalist philosophy. This technique encourages the 1945 audience, emerging from World War II, to reject Birling's selfishness and embrace the collective responsibility Priestley advocates through the Inspector.",
      },
      {
        question:
          "Analyse how Priestley uses Mr Birling to criticise capitalism. Consider his language, his values, and how the audience is positioned to respond to him.",
        marks: 6,
        lines: 10,
        modelAnswer:
          "Priestley presents Mr Birling as pompous and self-serving, using him as a vehicle to criticise capitalist individualism. His long speeches are full of first-person pronouns and possessive language, revealing his self-centred worldview. His dismissal of community as 'nonsense' directly opposes the play's socialist message. Priestley positions the audience against Birling through dramatic irony, ensuring his confident predictions are proved disastrously wrong. The stage directions describe him as 'heavy-looking, rather portentous', physically embodying the weight and self-importance of his class. By making Birling so thoroughly unsympathetic, Priestley ensures the audience sides with the Inspector's moral vision.",
      },
      {
        question:
          "Do you think the Inspector is a real police inspector? Evaluate the evidence for and against, and explain what effect his ambiguous identity has on the play's message.",
        marks: 6,
        lines: 10,
        modelAnswer:
          "There is strong evidence that the Inspector is not real: he knows events before they happen, his name 'Goole' sounds like 'ghoul', and no Inspector Goole exists at the local police station. However, his knowledge of Eva Smith's life is detailed and accurate. Priestley deliberately leaves the question unanswered because the Inspector's identity is less important than his message. If he were simply a policeman, his authority would be legal and limited. By making him potentially supernatural, Priestley gives him moral authority that transcends ordinary power. The ambiguity forces the audience to focus on the message -- collective responsibility -- rather than dismissing it as merely a police investigation.",
      },
    ],
    successCriteria: [
      "I can explain Priestley's key messages about responsibility and social class",
      "I can support my answers with relevant quotations from the text",
      "I can analyse how Priestley uses characters to convey his socialist message",
      "I can evaluate the effectiveness of Priestley's dramatic techniques",
      "I can integrate contextual understanding into my responses",
    ],
    extensionTasks: [
      "Write a diary entry as Sheila Birling, set the morning after the Inspector's visit. What has she learned? How has she changed?",
      "Research the creation of the NHS in 1948. Write a paragraph explaining how the Inspector's message about collective responsibility connects to the post-war welfare state.",
      "Compare Mr Birling and the Inspector as speakers. Create a table showing three differences in their language, tone, and message.",
    ],
    markScheme: [
      "Award 1-2 marks for basic understanding and identification of relevant content",
      "Award 3-4 marks for developed explanations with supporting quotations",
      "Award 5-6 marks for perceptive analysis integrating technique, effect, and context",
      "Quotations must be embedded rather than free-standing for full marks",
      "Contextual understanding should be woven into analysis, not bolted on as a separate paragraph",
    ],
  },

  // Poetry - Essay
  {
    id: "hw-poetry-essay",
    title: "Poetry Comparison: Power and Conflict",
    topic: "Poetry Anthology",
    homeworkType: "Essay",
    yearGroup: "Year 10",
    targetGrade: "Grade 5-6 (Secure)",
    estimatedTime: "50-60 minutes",
    instructions:
      "Write a comparative essay responding to the question below. You should compare two poems from the Power and Conflict cluster, analysing how the poets present their ideas about power. Your essay should include an introduction, at least three comparative paragraphs, and a conclusion. Use the 'similarly/however' framework to structure your comparisons.",
    questions: [
      {
        question:
          "Introduction: Set up your argument. Which two poems will you compare? What is your thesis about how they present power?",
        marks: 3,
        lines: 8,
        modelAnswer:
          "Both 'Ozymandias' by Shelley and 'My Last Duchess' by Browning explore the destructive nature of unchecked power, yet they approach this theme through contrasting perspectives. While Shelley presents power as ultimately impermanent, reduced to ruins by the passage of time, Browning depicts power as a present and ongoing force capable of destroying those closest to it. Both poets use dramatic voices to expose the flaws of powerful men, inviting the reader to judge figures who cannot see their own corruption.",
      },
      {
        question:
          "Paragraph 1: Compare how the poets use voice and perspective to present powerful figures. Include quotations from both poems and analyse language techniques.",
        marks: 6,
        lines: 14,
        modelAnswer:
          "Both Shelley and Browning use indirect voices to create distance between the powerful figure and the reader. In 'Ozymandias', the story is told through a 'traveller from an antique land', placing multiple layers of narration between the reader and the king, which diminishes his importance. Similarly, Browning uses the dramatic monologue form, but here the Duke speaks directly, unknowingly revealing his cruelty. However, while the Duke's uninterrupted monologue mirrors his controlling personality, Ozymandias is only heard through his inscription, suggesting his voice has been silenced by time.",
      },
      {
        question:
          "Paragraph 2: Compare how the poets use imagery and symbolism to critique power. Embed quotations and analyse their effects.",
        marks: 6,
        lines: 14,
        modelAnswer:
          "Both poets use art as a symbol of power's attempt to outlast mortality. Shelley describes a 'shattered visage' lying in the desert, the damaged statue symbolising the inevitable decay of even the greatest empires. Browning, by contrast, presents the painting of the Duchess as a possession the Duke controls from behind a curtain. While Ozymandias's art has been destroyed by nature, the Duke's art remains intact -- but this is more disturbing, as it represents his ability to control his wife even after her death. The 'curtain' becomes a metaphor for his absolute authority over others.",
      },
      {
        question:
          "Paragraph 3: Compare how the form and structure of each poem reinforce the theme of power. Consider the effects of the sonnet form and the dramatic monologue.",
        marks: 6,
        lines: 14,
        modelAnswer:
          "Shelley's disrupted sonnet form mirrors the destruction of Ozymandias's empire. The traditional sonnet is associated with order and control, but Shelley's irregular rhyme scheme and enjambment break these conventions, suggesting that power cannot maintain order indefinitely. Browning's unbroken dramatic monologue, with its relentless enjambment and absence of stanza breaks, mirrors the Duke's desire for total control. He never pauses or allows interruption, just as he never allowed his wife independence. Both poets use form to embody their themes: Shelley shows power crumbling, while Browning shows it suffocating.",
      },
      {
        question:
          "Conclusion: Evaluate which poem presents a more powerful message about the nature of power. Justify your view.",
        marks: 5,
        lines: 8,
        modelAnswer:
          "While both poems offer compelling critiques of power, Browning's 'My Last Duchess' is arguably more disturbing because the Duke's power is ongoing. Ozymandias's tyranny has been neutralised by time, offering the reader comfort that all empires fall. The Duke, however, is actively negotiating his next marriage, suggesting his destructive power will continue unchecked. Browning denies the reader the reassurance that Shelley provides, making his critique of power more unsettling and more urgent.",
      },
    ],
    successCriteria: [
      "I can compare two poems using a clear comparative framework (similarly/however)",
      "I can analyse language techniques from both poems with embedded quotations",
      "I can discuss how form and structure contribute to meaning",
      "I can integrate contextual understanding where relevant",
      "I can write a structured essay with introduction, comparative paragraphs, and conclusion",
    ],
    extensionTasks: [
      "Write an additional paragraph comparing how both poems comment on the relationship between power and art. Consider what each poet suggests about whether art serves power or exposes its weaknesses.",
      "Research the historical context of one poem and write a paragraph explaining how understanding the context deepens your interpretation.",
      "Choose a third poem from the cluster that presents power differently. Write a paragraph explaining how it adds to or challenges the arguments in your essay.",
    ],
    markScheme: [
      "Introduction: 1 mark for identifying poems, 1 mark for thesis, 1 mark for sophistication of opening argument",
      "Body paragraphs: 2 marks for comparison with quotations, 2 marks for language analysis, 2 marks for contextual/structural awareness",
      "Conclusion: 2 marks for evaluative judgement, 2 marks for justified personal response, 1 mark for connection to wider themes",
      "Deduct marks if paragraphs discuss poems separately rather than comparatively",
      "Full marks require fluent academic register with embedded quotations and precise terminology",
    ],
  },

  // A Christmas Carol - Creative Writing
  {
    id: "hw-acc-creative",
    title: "Creative Writing: A Dickensian Scene",
    topic: "A Christmas Carol",
    homeworkType: "Creative Writing",
    yearGroup: "Year 9",
    targetGrade: "Grade 4-5 (Developing)",
    estimatedTime: "35-45 minutes",
    instructions:
      "Using the techniques you have studied in A Christmas Carol, write a descriptive piece inspired by Dickens's style. Choose ONE of the prompts below and write 250-350 words. Focus on sensory language, varied sentence structures, and creating atmosphere. Your writing should demonstrate that you can apply techniques from your reading to your own work.",
    questions: [
      {
        question:
          "Prompt 1: Describe a cold winter's night in a Victorian city. Use sensory details to create a vivid and atmospheric scene. Think about what you can see, hear, feel, and smell.",
        marks: 10,
        lines: 20,
        modelAnswer:
          "Fog crept through the alleyways like a living thing, curling around lamp posts and smothering the weak gaslight until the street existed only as a series of amber halos suspended in grey nothing. The cobblestones glistened with frost, each one a small, treacherous mirror reflecting the darkness above. A man hurried past, his collar turned up, his breath hanging in the air like speech bubbles emptied of words. From somewhere beyond the fog, a church bell tolled -- a single, solemn note that seemed to freeze in the air before dissolving. The smell of coal smoke and something sharper -- perhaps gin, perhaps despair -- drifted from the doorways where shadows huddled. A child, barefoot, pressed against a bakery window. Inside, the warm glow of an oven. Outside, nothing but the cold, which was not merely a temperature but a presence, a companion that walked beside the poor and never left them.",
      },
      {
        question:
          "Prompt 2: Describe a character who is alone on Christmas Day. Use Dickens's technique of revealing character through their environment and their physical appearance.",
        marks: 10,
        lines: 20,
        modelAnswer:
          "The room told you everything about its occupant before you met him. A single chair, positioned precisely in front of a fireplace that held no fire. A table set for one, with a plate so clean it might never have been used. The curtains, once burgundy, had faded to the colour of old wounds. Mr Hartwell sat in his chair as he sat every Christmas Day -- upright, still, and utterly alone. His hands, thin as the legs of winter birds, rested on the arms of the chair. His eyes, which had once been the blue of summer, were now grey, washed out by years of looking at nothing worth seeing. On the mantelpiece, a clock ticked. It was the loudest sound in the house. It was the only sound. Somewhere in the street below, children were singing.",
      },
      {
        question:
          "Prompt 3: Write the opening of a ghost story set on Christmas Eve, using Dickens's technique of building suspense through short sentences and atmospheric detail.",
        marks: 10,
        lines: 20,
        modelAnswer:
          "It began with the knocker. That is a fact that must be established before anything else, because without the knocker, none of what followed could have occurred. The knocker was brass, shaped like a lion's head, and it had hung on the front door of 14 Marsh Street for forty-seven years without incident. But on Christmas Eve, at precisely eleven minutes past midnight, the knocker moved. Not as knockers are supposed to move -- struck by a human hand -- but slowly, deliberately, as though pushed by invisible fingers. The door did not open. Nothing entered. But inside the house, the temperature dropped by six degrees in four seconds. A glass of water on the hallway table began to freeze from the edges inward. And from the top of the stairs, where nobody stood, came the sound of breathing.",
      },
    ],
    successCriteria: [
      "I can use sensory language to create a vivid scene (sight, sound, smell, touch, taste)",
      "I can vary my sentence structure for deliberate effect (short sentences for impact, complex sentences for detail)",
      "I can use at least three literary techniques (e.g. simile, metaphor, personification, juxtaposition)",
      "I can create atmosphere and mood through my word choices",
      "I can write 250-350 words that demonstrate control and craftsmanship",
    ],
    extensionTasks: [
      "Rewrite your opening paragraph in a completely different tone -- transform a gloomy scene into a joyful one, or vice versa. Annotate the changes you made and explain the effect.",
      "Write a paragraph in the style of Dickens that describes your own school. Use his techniques of exaggeration, listing, and vivid characterisation.",
      "Read the opening of Stave 1 of A Christmas Carol. Identify three techniques Dickens uses that you did not include in your own writing. Write a sentence for each, applying the technique to your scene.",
    ],
    markScheme: [
      "Band 1 (1-3 marks): Basic descriptive writing with limited techniques. Simple sentence structures with some relevant vocabulary.",
      "Band 2 (4-6 marks): Developed descriptive writing with some effective techniques. Varied sentence structures beginning to create atmosphere.",
      "Band 3 (7-8 marks): Effective descriptive writing with well-chosen techniques. Deliberate sentence variation creating clear atmosphere and mood.",
      "Band 4 (9-10 marks): Sophisticated descriptive writing with precise, controlled techniques. Impressive vocabulary and sentence craftsmanship. Writing demonstrates real flair.",
      "Award extra credit for genuine stylistic echoes of Dickens that go beyond surface-level imitation.",
    ],
  },

  // Of Mice and Men - Vocabulary
  {
    id: "hw-omam-vocab",
    title: "Of Mice and Men: Key Vocabulary and Terminology",
    topic: "Of Mice and Men",
    homeworkType: "Vocabulary",
    yearGroup: "Year 11",
    targetGrade: "Grade 5-6 (Secure)",
    estimatedTime: "30-40 minutes",
    instructions:
      "Complete all vocabulary tasks below. These are designed to build your understanding of key terminology for discussing Of Mice and Men in your examination. Use a dictionary or your revision guide if needed, but aim to work from memory first.",
    questions: [
      {
        question:
          "Define each of the following literary terms and provide an example from Of Mice and Men: (a) foreshadowing, (b) symbolism, (c) microcosm, (d) allegory, (e) pathos.",
        marks: 5,
        lines: 10,
        modelAnswer:
          "(a) Foreshadowing: a hint of what will happen later. Example: The shooting of Candy's dog foreshadows the shooting of Lennie. (b) Symbolism: using an object to represent an idea. Example: The dream farm symbolises hope and the American Dream. (c) Microcosm: a small world representing the larger world. Example: The ranch is a microcosm of 1930s American society. (d) Allegory: a story with a hidden moral or political meaning. Example: The novel is an allegory for the failure of the American Dream. (e) Pathos: a quality that evokes pity or sadness. Example: Crooks's loneliness and Candy's loss of his dog create deep pathos.",
      },
      {
        question:
          "Match each quotation to the correct character and explain what the quotation reveals about their personality or situation: (a) 'A guy needs somebody -- to be near him.' (b) 'I could get you strung up on a tree so easy.' (c) 'I ought to of shot that dog myself.' (d) 'I could live so easy and maybe have a girl.'",
        marks: 4,
        lines: 8,
        modelAnswer:
          "(a) Crooks -- reveals his isolation and desperate need for companionship; the word 'needs' suggests loneliness is a psychological necessity. (b) Curley's wife -- reveals her awareness of racial power dynamics; she threatens Crooks, showing how even the most powerless white person holds power over Black Americans. (c) Candy -- reveals his guilt about allowing someone else to kill his dog; this foreshadows George's decision to shoot Lennie himself. (d) Lennie -- reveals his childlike simplicity; the 'girl' and 'easy' life represent an innocent, unrealistic version of the American Dream.",
      },
      {
        question:
          "Write five sentences about Of Mice and Men, each using one of the following subject-specific words correctly: proletariat, itinerant, segregation, hierarchy, futility.",
        marks: 5,
        lines: 10,
        modelAnswer:
          "(1) Steinbeck portrays the proletariat -- the working class -- as exploited by ranch owners who profit from their labour. (2) The itinerant workers move from ranch to ranch, never able to settle or build lasting relationships. (3) Crooks experiences racial segregation, forced to live apart from the other workers in a separate room. (4) The ranch operates within a strict hierarchy, with the boss at the top, Slim commanding respect, and Crooks and Lennie at the bottom. (5) The cyclical structure of the novel reinforces the futility of the American Dream for men like George and Lennie.",
      },
      {
        question:
          "Explain the connotations of three of these words as used by Steinbeck: 'bindle', 'solitary', 'tart', 'jailbait', 'paradise'. How do these word choices reveal Steinbeck's attitudes or themes?",
        marks: 4,
        lines: 8,
        modelAnswer:
          "'Bindle' -- a bundle carried by migrant workers, connoting poverty, impermanence, and rootlessness. It symbolises the itinerant lifestyle forced on the proletariat. 'Solitary' -- used to describe workers, connoting isolation and loneliness as a fundamental condition of their existence. 'Tart' -- used by the men to describe Curley's wife, connoting sexualised judgment and revealing the misogynistic attitudes of the ranch workers. Steinbeck's decision to have multiple characters use this word exposes how endemic sexism is.",
      },
      {
        question:
          "Create a revision flashcard set: write five key quotations from the novel on one side, and on the other write the technique, theme, and a one-sentence analysis for each.",
        marks: 5,
        lines: 10,
        modelAnswer:
          "Example: Front: 'Guys like us, that work on ranches, are the loneliest guys in the world.' Back: Technique: Superlative ('loneliest'). Theme: Loneliness and isolation. Analysis: George's recognition that ranch workers are defined by their loneliness makes the dream farm -- a place of belonging -- all the more poignant and its loss all the more tragic.",
      },
    ],
    successCriteria: [
      "I can define key literary terminology and apply it to the text",
      "I can identify quotations and link them to characters and themes",
      "I can use subject-specific vocabulary accurately in sentences",
      "I can explain the connotations of Steinbeck's word choices",
      "I can create useful revision materials from my learning",
    ],
    extensionTasks: [
      "Create a glossary of twenty key terms for discussing Of Mice and Men, organised alphabetically, with definitions and examples from the text.",
      "Write a paragraph using at least five subject-specific terms to analyse Steinbeck's presentation of loneliness in Chapter 4.",
      "Research three facts about the Great Depression that help explain the world Steinbeck depicts. Present them as a mini fact file.",
    ],
    markScheme: [
      "Award 1 mark per correct definition with relevant textual example",
      "Award 1 mark per correct character identification and 1 mark per explanation of significance",
      "Award 1 mark per correct use of subject-specific vocabulary in a meaningful sentence",
      "Deduct marks if quotations are inaccurate (minor errors acceptable, wholesale invention not)",
      "Extension tasks assessed for depth of engagement rather than length",
    ],
  },

  // Macbeth - Revision Questions
  {
    id: "hw-macbeth-revision",
    title: "Macbeth: Revision Questions for Exam Preparation",
    topic: "Macbeth",
    homeworkType: "Revision Questions",
    yearGroup: "Year 11",
    targetGrade: "Grade 7-8 (Excellent)",
    estimatedTime: "45-55 minutes",
    instructions:
      "Answer all questions in full, using quotations from the text where possible. These questions are designed to prepare you for the type of analysis expected in your examination. Focus on writing concise, analytical responses that demonstrate your understanding of Shakespeare's methods, not just the plot.",
    questions: [
      {
        question:
          "How does Shakespeare present the witches as a subversive force in Act 1? Consider their language, their prophecies, and their effect on Macbeth.",
        marks: 5,
        lines: 8,
        modelAnswer:
          "Shakespeare presents the witches as agents of chaos who subvert natural order. Their language uses trochaic tetrameter rather than the iambic pentameter of other characters, creating a chanting, spell-like rhythm that separates them from humanity. Their paradoxical language ('fair is foul') inverts moral categories, creating confusion. Their prophecies exploit Macbeth's existing ambition rather than creating it, making them catalysts for destruction rather than its sole cause. A Jacobean audience would have viewed them as genuinely demonic, given James I's published belief in witchcraft.",
      },
      {
        question:
          "Analyse how Shakespeare uses the motif of blood in the play. Track its development from Act 1 to Act 5 and explain its symbolic significance.",
        marks: 6,
        lines: 10,
        modelAnswer:
          "Blood evolves from a symbol of honour to one of guilt. In Act 1, Macbeth is praised for being covered in blood from battle -- it represents loyalty. After Duncan's murder, blood becomes guilt: Macbeth's 'bloody hands' horrify him, and he asks whether 'all great Neptune's ocean' could wash them clean. The hyperbole reveals his psychological torment. Lady Macbeth initially dismisses guilt ('a little water clears us of this deed') but in Act 5, she compulsively washes her hands, crying 'Out, damned spot.' The blood motif comes full circle: what she dismissed becomes inescapable. Shakespeare uses this development to show that guilt, like blood, stains permanently.",
      },
      {
        question:
          "Evaluate whether Macbeth is a villain or a victim. Use evidence from across the play to support your argument.",
        marks: 6,
        lines: 10,
        modelAnswer:
          "Macbeth is both villain and victim, which is the source of his tragic power. He is a victim of the witches' manipulation and Lady Macbeth's goading, and his soliloquies reveal genuine moral torment that prevents the audience from viewing him as purely evil. However, he is a villain in that he chooses to act: nobody forces his hand, and his murders escalate from necessity to paranoia. Shakespeare constructs him as a tragic hero whose hamartia -- ambition -- makes his downfall inevitable. The play is most effective because Macbeth is not simply one or the other; his complexity forces the audience to wrestle with questions of free will, fate, and moral responsibility.",
      },
      {
        question:
          "How does Shakespeare use the relationship between Macbeth and Lady Macbeth to explore the theme of power? Consider how their dynamic shifts across the play.",
        marks: 5,
        lines: 8,
        modelAnswer:
          "In Act 1, Lady Macbeth holds power: she commands, plans, and manipulates her husband. The imperative 'leave all the rest to me' establishes her dominance. However, after the murder, their relationship inverts. Macbeth becomes increasingly secretive, planning Banquo's murder without consulting her. By Act 5, they are entirely disconnected -- her death barely registers for him. Shakespeare uses their deteriorating relationship to show that power gained through violence destroys intimacy. Their partnership, built on shared ambition, cannot survive the guilt that follows.",
      },
      {
        question:
          "Write a practice exam paragraph in response to: 'How does Shakespeare present the theme of guilt in Macbeth?' Focus on one key moment and analyse Shakespeare's methods in detail.",
        marks: 6,
        lines: 12,
        modelAnswer:
          "Shakespeare presents guilt as an inescapable psychological force through Lady Macbeth's sleepwalking scene in Act 5 Scene 1. Her obsessive repetition of 'Out, damned spot' reveals that the guilt she dismissed in Act 2 has returned with devastating power. The monosyllabic, fragmented language contrasts sharply with her earlier eloquent speeches, suggesting her mind is breaking down under the weight of conscience. The Doctor's observation that 'unnatural deeds / Do breed unnatural troubles' frames her guilt in religious terms, linking her suffering to divine punishment. Shakespeare's structural choice to place this scene near the end is significant: it demonstrates that guilt delayed is not guilt avoided. For a Jacobean audience who believed in divine retribution, Lady Macbeth's fate would confirm that sin always finds its reckoning.",
      },
    ],
    successCriteria: [
      "I can analyse Shakespeare's methods (language, structure, form) with precise terminology",
      "I can track motifs and themes across the whole play, not just individual scenes",
      "I can construct evaluative arguments that consider multiple perspectives",
      "I can embed quotations fluently and analyse them in detail",
      "I can integrate contextual understanding naturally within my analysis",
    ],
    extensionTasks: [
      "Write a second exam paragraph answering the same question from a different angle -- choose a different key moment and analyse different methods.",
      "Create a revision timeline of the play, plotting how the theme of guilt develops scene by scene. Use quotations at each key point.",
      "Compare Macbeth's guilt with Lady Macbeth's. Write a paragraph arguing who Shakespeare presents as more consumed by guilt, and why.",
    ],
    markScheme: [
      "Award 1-2 marks for basic understanding of the text with some relevant reference",
      "Award 3-4 marks for developed analysis with embedded quotations and technique identification",
      "Award 5-6 marks for perceptive, conceptualised responses that demonstrate sophisticated understanding of Shakespeare's methods and purposes",
      "Evaluative questions must consider multiple perspectives for full marks",
      "Practice exam paragraph should be assessed against exam mark scheme band descriptors",
    ],
  },
]

// ─── Helper: Find Best Matching Homework ──────────────────────────────────────

function findBestMatch(
  topic: string,
  homeworkType: string,
  yearGroup: string,
  targetGrade: string,
): GeneratedHomework {
  let bestScore = -1
  let bestPlan = HOMEWORK_TEMPLATES[0]

  for (const hw of HOMEWORK_TEMPLATES) {
    let score = 0
    if (hw.topic === topic) score += 10
    if (hw.homeworkType === homeworkType) score += 8
    if (hw.yearGroup === yearGroup) score += 3
    if (hw.targetGrade === targetGrade) score += 2

    if (score > bestScore) {
      bestScore = score
      bestPlan = hw
    }
  }

  return {
    ...bestPlan,
    yearGroup,
    targetGrade,
    id: `hw-generated-${Date.now()}`,
  }
}

// ─── Helper: Homework to Plain Text ───────────────────────────────────────────

function homeworkToText(hw: GeneratedHomework): string {
  const lines: string[] = []
  lines.push(`HOMEWORK: ${hw.title}`)
  lines.push(`Topic: ${hw.topic} | Type: ${hw.homeworkType}`)
  lines.push(`Year Group: ${hw.yearGroup} | Target Grade: ${hw.targetGrade}`)
  lines.push(`Estimated Time: ${hw.estimatedTime}`)
  lines.push("")
  lines.push("INSTRUCTIONS:")
  lines.push(hw.instructions)
  lines.push("")
  lines.push("SUCCESS CRITERIA:")
  hw.successCriteria.forEach((s) => lines.push(`  - ${s}`))
  lines.push("")
  lines.push("QUESTIONS:")
  hw.questions.forEach((q, i) => {
    lines.push(`${i + 1}. ${q.question} [${q.marks} marks]`)
    if (q.modelAnswer) lines.push(`   Model Answer: ${q.modelAnswer}`)
    lines.push("")
  })
  lines.push("EXTENSION TASKS:")
  hw.extensionTasks.forEach((t) => lines.push(`  - ${t}`))
  lines.push("")
  lines.push("MARK SCHEME:")
  hw.markScheme.forEach((m) => lines.push(`  - ${m}`))
  return lines.join("\n")
}

// ─── Typing Effect Lines ─────────────────────────────────────────────────────

const TYPING_LINES = [
  "Analysing topic and curriculum requirements...",
  "Mapping assessment objectives to homework structure...",
  "Selecting question types for target grade range...",
  "Generating questions with appropriate challenge level...",
  "Writing model answers with examiner-level detail...",
  "Building success criteria and marking guidance...",
  "Adding extension tasks for higher-ability students...",
  "Estimating completion time...",
  "Finalising homework assignment...",
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeworkGeneratorDemo() {
  const [topic, setTopic] = useState<string>(TOPICS[0])
  const [homeworkType, setHomeworkType] = useState<string>(HOMEWORK_TYPES[0])
  const [yearGroup, setYearGroup] = useState<string>(YEAR_GROUPS[3])
  const [targetGrade, setTargetGrade] = useState<string>(TARGET_GRADES[2])

  const [isGenerating, setIsGenerating] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [generatedHomework, setGeneratedHomework] = useState<GeneratedHomework | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isGenerating) return
    if (typingIndex >= TYPING_LINES.length) {
      const hw = findBestMatch(topic, homeworkType, yearGroup, targetGrade)
      setGeneratedHomework(hw)
      setIsGenerating(false)
      setTypingIndex(0)
      return
    }
    const timer = setTimeout(() => {
      setTypingIndex((prev) => prev + 1)
    }, 250)
    return () => clearTimeout(timer)
  }, [isGenerating, typingIndex, topic, homeworkType, yearGroup, targetGrade])

  const handleGenerate = useCallback(() => {
    setGeneratedHomework(null)
    setCopied(false)
    setIsGenerating(true)
    setTypingIndex(0)
  }, [])

  const handleReset = useCallback(() => {
    setGeneratedHomework(null)
    setCopied(false)
    setIsGenerating(false)
    setTypingIndex(0)
  }, [])

  const toHomeworkData = useCallback(
    (hw: GeneratedHomework): HomeworkData => ({
      title: hw.title,
      topic: hw.topic,
      homeworkType: hw.homeworkType,
      yearGroup: hw.yearGroup,
      targetGrade: hw.targetGrade,
      estimatedTime: hw.estimatedTime,
      instructions: hw.instructions,
      questions: hw.questions,
      successCriteria: hw.successCriteria,
      extensionTasks: hw.extensionTasks,
      markScheme: hw.markScheme,
    }),
    [],
  )

  const handleDownloadPDF = useCallback(() => {
    if (!generatedHomework) return
    generateHomeworkPdf(toHomeworkData(generatedHomework))
    showToast("Homework opened for printing/saving as PDF")
  }, [generatedHomework, toHomeworkData])

  const handleDownloadMarkScheme = useCallback(() => {
    if (!generatedHomework) return
    generateHomeworkMarkSchemePdf(toHomeworkData(generatedHomework))
    showToast("Mark scheme opened for printing/saving as PDF")
  }, [generatedHomework, toHomeworkData])

  const handleDownloadWord = useCallback(() => {
    if (!generatedHomework) return
    generateHomeworkWord(toHomeworkData(generatedHomework))
    showToast("Homework downloaded as Word document")
  }, [generatedHomework, toHomeworkData])

  const handleCopy = useCallback(async () => {
    if (!generatedHomework) return
    try {
      await navigator.clipboard.writeText(homeworkToText(generatedHomework))
      setCopied(true)
      showToast("Copied to clipboard")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      showToast("Failed to copy -- try again")
    }
  }, [generatedHomework])

  const handleAssign = useCallback(() => {
    showToast("Assignment set for class (demo mode)")
  }, [])

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in">
          {toast}
        </div>
      )}

      <DemoBanner message="This is a preview of the homework generator. Generated assignments use pre-built templates to demonstrate the format." />

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-2">
          <Link
            href="/demo/teacher/homework"
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            &larr; Back to Homework Dashboard
          </Link>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
          The English Hub
        </p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-3">
          Homework Generator
        </h1>
        <p className="text-neutral-400 text-lg mb-8 max-w-2xl">
          Generate complete, differentiated homework assignments in seconds.
          Select your topic, homework type, year group, and target grade -- then
          preview, download, or assign directly.
        </p>

        {/* Demo Banner */}
        <div className="mb-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-amber-400 text-lg">*</span>
            <div>
              <p className="text-amber-200 font-medium text-sm">Demo Mode</p>
              <p className="text-amber-200/60 text-sm mt-1">
                This is a preview of the homework generator. Generated
                assignments use pre-built templates to demonstrate format and
                quality. With a full account, every homework is uniquely
                generated to your exact specification.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Configuration Form ─────────────────────────────────────── */}
        {!generatedHomework && !isGenerating && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-medium text-white/90 mb-6">
              Configure Your Homework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormSelect
                label="Topic / Text"
                value={topic}
                onChange={setTopic}
                options={[...TOPICS]}
              />
              <FormSelect
                label="Homework Type"
                value={homeworkType}
                onChange={setHomeworkType}
                options={[...HOMEWORK_TYPES]}
              />
              <FormSelect
                label="Year Group"
                value={yearGroup}
                onChange={setYearGroup}
                options={[...YEAR_GROUPS]}
              />
              <FormSelect
                label="Target Grade Range"
                value={targetGrade}
                onChange={setTargetGrade}
                options={[...TARGET_GRADES]}
              />
            </div>
            <button
              onClick={handleGenerate}
              className="mt-8 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3.5 px-6 transition-colors text-sm"
            >
              Generate Homework
            </button>
          </div>
        )}

        {/* ─── Loading Animation ──────────────────────────────────────── */}
        {isGenerating && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:300ms]" />
              </div>
              <span className="text-sm text-emerald-400 font-medium">
                Generating homework assignment...
              </span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {TYPING_LINES.slice(0, typingIndex).map((line, i) => (
                <div key={i} className="text-neutral-400 animate-fade-in">
                  <span className="text-emerald-500/60 mr-2">&gt;</span>
                  {line}
                  {i === typingIndex - 1 && (
                    <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Generated Homework Preview ─────────────────────────────── */}
        {generatedHomework && (
          <>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-6">
              {/* Header */}
              <div className="border-b border-white/10 bg-emerald-500/5 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                    Generated Homework Assignment
                  </span>
                </div>
                <h2 className="text-2xl font-medium text-white mb-2">
                  {generatedHomework.title}
                </h2>
                <div className="flex flex-wrap gap-3 text-xs text-neutral-400">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {generatedHomework.topic}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {generatedHomework.homeworkType}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {generatedHomework.yearGroup}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {generatedHomework.targetGrade}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {generatedHomework.estimatedTime}
                  </span>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-6 space-y-8">
                {/* Instructions */}
                <Section title="Instructions">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {generatedHomework.instructions}
                  </p>
                </Section>

                {/* Success Criteria */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-medium mb-3">
                    Success Criteria
                  </h3>
                  <ul className="space-y-1.5 text-sm text-neutral-300">
                    {generatedHomework.successCriteria.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5 shrink-0">
                          --
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Questions */}
                <Section title="Questions">
                  <div className="space-y-5">
                    {generatedHomework.questions.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-sm text-white font-medium">
                            {i + 1}. {q.question}
                          </p>
                          <span className="shrink-0 text-xs text-neutral-500 bg-white/5 px-2 py-0.5 rounded">
                            {q.marks} marks
                          </span>
                        </div>
                        {q.modelAnswer && (
                          <details className="mt-2">
                            <summary className="text-xs text-emerald-400/70 cursor-pointer hover:text-emerald-400 transition-colors">
                              Show model answer
                            </summary>
                            <p className="mt-2 text-xs text-neutral-400 leading-relaxed pl-4 border-l border-emerald-500/20">
                              {q.modelAnswer}
                            </p>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Extension Tasks */}
                <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
                  <h3 className="text-xs uppercase tracking-wider text-violet-400 font-medium mb-3">
                    Extension Tasks (Higher Ability)
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {generatedHomework.extensionTasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-400 mt-0.5 shrink-0">
                          {i + 1}.
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mark Scheme */}
                <Section title="Mark Scheme / Marking Guidance">
                  <ul className="space-y-2 text-sm text-neutral-400">
                    {generatedHomework.markScheme.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400/60 mt-0.5 shrink-0">
                          *
                        </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </div>

            {/* ─── Action Buttons ──────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              <ActionButton
                onClick={handleDownloadPDF}
                label="Download PDF"
              />
              <ActionButton
                onClick={handleDownloadMarkScheme}
                label="Mark Scheme (PDF)"
              />
              <ActionButton
                onClick={handleDownloadWord}
                label="Download Word"
              />
              <ActionButton
                onClick={handleCopy}
                label={copied ? "Copied!" : "Copy to Clipboard"}
              />
              <ActionButton onClick={handleReset} label="Generate Another" />
              <ActionButton onClick={handleAssign} label="Assign to Class" />
            </div>

            {/* ─── Assign to Class Panel ───────────────────────────────── */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10">
              <h3 className="text-lg font-medium text-white/90 mb-4">
                Assign to Class
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormSelect
                  label="Class"
                  value="Select class..."
                  onChange={() => showToast("Class selection available with full account")}
                  options={[
                    "Select class...",
                    "Year 10A - English Literature",
                    "Year 11B - English Literature",
                    "Year 9C - English Language",
                    "Year 8D - English Language",
                  ]}
                />
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>
              <button
                onClick={handleAssign}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-medium py-3 px-6 transition-opacity hover:opacity-90 text-sm"
              >
                Set Homework for Class
              </button>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8 text-center mb-10">
              <p className="text-lg text-white font-medium mb-2">
                Generate unlimited homework in seconds.
              </p>
              <p className="text-neutral-400 text-sm mb-5">
                Start your free month to access the full homework generator --
                every assignment uniquely created, with mark schemes and
                extension tasks included.
              </p>
              <button className="rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-8 transition-colors text-sm">
                Start Free Month
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-neutral-900 text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-medium">
        {title}
      </h3>
      {children}
    </div>
  )
}

function ActionButton({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-neutral-300 hover:text-white text-xs font-medium py-2.5 px-3 transition-colors"
    >
      {label}
    </button>
  )
}
