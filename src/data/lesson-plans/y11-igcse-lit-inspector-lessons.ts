import type { LessonPlan } from '@/types';

export const y11IgcseLitInspectorLessons: LessonPlan[] = [

  // ---------------------------------------------------------------------------
  // Lesson 1: Priestley's Context -- 1912 vs 1945
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-01',
    title: "Priestley's Context: 1912 vs 1945, Class, and the Socialist Message",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Explain why Priestley set the play in 1912 and wrote it in 1945, and the significance of the dual time frame",
      "Identify key historical events between 1912 and 1945 that underpin the play's dramatic irony",
      "Understand Priestley's socialist beliefs and how they shape his dramatic purpose",
      "Begin to embed contextual knowledge into analytical writing (AO3)",
    ],
    successCriteria: [
      "I can explain at least three ways in which the 1912 setting and 1945 audience create dramatic irony",
      "I can describe Priestley's political beliefs and link them to the Inspector's role in the play",
      "I can write a paragraph that integrates contextual knowledge into analysis rather than treating it as separate background",
      "I can use key terms: dramatic irony, socialist, welfare state, collective responsibility, Edwardian",
    ],
    keywords: [
      'dramatic irony',
      'socialist',
      'welfare state',
      'collective responsibility',
      'Edwardian',
      'capitalism',
      'class system',
      'political theatre',
      'mouthpiece',
      'post-war',
    ],
    starterActivity: {
      title: 'Then and Now: 1912 vs 1945 Timeline',
      duration: '8 minutes',
      instructions:
        "Display a split-screen timeline on the board. One side shows key events of 1912 (Titanic sinking, no women's suffrage, no NHS, workers with minimal rights) and the other shows 1945 (end of WWII, Labour landslide, welfare state being planned). Students work in pairs to discuss: Why might an author in 1945 choose to set a play in 1912? What effect does knowing the future have on how we read the characters? Take brief class feedback and record responses. Introduce the term dramatic irony.",
      differentiation: {
        support:
          "Provide a glossary card with brief definitions of: dramatic irony, welfare state, socialism, Edwardian era.",
        core: "Students discuss both sides of the timeline and generate two specific examples of dramatic irony that the dual time frame creates.",
        stretch:
          "Students consider why Priestley chose 1912 specifically rather than any other pre-war year, and what the Titanic represents symbolically.",
      },
      resources: ['1912 vs 1945 timeline slide', 'Glossary cards', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: "Guided Reading: Priestley's World",
        duration: '18 minutes',
        instructions:
          "Teacher-led guided reading of a short contextual information sheet covering: (1) England in 1912 -- rigid class system, no welfare provision, women cannot vote; (2) England in 1945 -- post-war desire for change, Labour election victory, NHS and welfare state; (3) Priestley the socialist -- his Postscripts broadcasts and belief in collective responsibility. Students complete a KWL grid: what they Knew, what they have now Learned, and what they still Want to know.",
        differentiation: {
          support:
            "Provide the information sheet with key sentences underlined and three comprehension questions.",
          core: "Students read and complete the KWL grid independently, then compare with a partner.",
          stretch:
            "Students annotate the information sheet, identifying which contextual details are most relevant to AO3 marks in an exam essay.",
        },
        resources: ["Priestley Context information sheet", 'KWL grid worksheet'],
      },
      {
        title: 'Embedding Context in Analysis: Modelled Writing',
        duration: '22 minutes',
        instructions:
          "Teacher displays two versions of an analytical paragraph about Mr Birling's claim that the Titanic is \"absolutely unsinkable\": Version A places context in a separate opening paragraph; Version B weaves context into the analytical point. Class discusses which is more effective. Students then write their own paragraph analysing Birling's dismissal of the idea of war, using the PETAL structure (Point, Evidence, Technique, Analysis, Link to context). Teacher circulates and provides live feedback.",
        differentiation: {
          support:
            "Provide a PETAL writing frame with sentence starters: Priestley presents Birling as...; He uses the quotation...; The technique of dramatic irony is created here because...; Priestley's 1945 audience would have known that...",
          core: "Students write the full PETAL paragraph independently using the model on the board as a guide.",
          stretch:
            "Students write two linked paragraphs: one analysing the Titanic quotation and one on the war quotation, developing an argument about how Priestley systematically undermines Birling's credibility.",
        },
        resources: ['Two-version paragraph slide', 'PETAL writing frame', 'Play text (Act 1)'],
      },
    ],
    plenaryActivity: {
      title: 'Context Card Sort and Exit Ticket',
      duration: '7 minutes',
      instructions:
        "Students receive five contextual statements on cards. In pairs, they rank the statements from most to least useful for an essay about Priestley's purpose. Students then write a one-sentence exit ticket: Priestley chose the dual time setting of 1912/1945 because...",
      differentiation: {
        support: "Provide sentence starter: The 1945 audience would have known that... which means Birling appears...",
        core: "Students rank and justify independently before sharing.",
        stretch: "Students write two sentences: one on the 1912 audience effect and one on the 1945 audience effect.",
      },
    },
    homework:
      "Learn two key quotations from Mr Birling's Act 1 speeches (one prediction about the Titanic and one about war or self-interest). For each quotation, write three sentences: one identifying the technique, one analysing the effect, and one linking to Priestley's socialist context.",
    worksheetQuestions: [
      {
        question:
          "Explain why Priestley set An Inspector Calls in 1912 rather than writing a contemporary play set in 1945. What effect does this choice have on the audience?",
        lines: 6,
        modelAnswer:
          "Priestley set the play in 1912 to exploit dramatic irony. The 1945 audience already knew that Mr Birling's confident predictions -- that the Titanic was unsinkable and that war was impossible -- had proved catastrophically wrong. This undermines Birling's authority and credibility from the very first scene, prompting the audience to question his entire philosophy. The 1912 setting also allows Priestley to contrast the rigid, unjust class system of the Edwardian era with the post-war desire for change in 1945, reinforcing his argument that society must reform.",
        marks: 6,
      },
      {
        question:
          "What were Priestley's political beliefs and how do they shape An Inspector Calls?",
        lines: 5,
        modelAnswer:
          "Priestley was a democratic socialist who believed in collective responsibility and the redistribution of wealth. These beliefs directly shape the play: the Inspector functions as Priestley's mouthpiece, arguing that we are all responsible for one another's welfare. The play is a didactic piece of political theatre designed to persuade the 1945 audience to support the welfare state and reject the selfish individualism represented by Mr Birling. Priestley's famous wartime Postscripts broadcasts reveal his belief that the working class deserved better conditions after their sacrifices in WWII.",
        marks: 5,
      },
      {
        question:
          "How does the Inspector's famous final speech summarise Priestley's socialist message?",
        lines: 5,
        modelAnswer:
          "The Inspector's speech before he leaves explicitly states Priestley's socialist thesis: if individuals do not learn to care for one another voluntarily, they will be forced to learn through collective tragedy -- fire, blood and anguish. The speech is prophetic and threatening, alluding to the two World Wars that the 1945 audience had lived through. The elevated, almost biblical register marks a shift from detective drama to moral sermon. Priestley's use of a supernatural or ambiguous Inspector to deliver this message reinforces the idea that the call to social responsibility transcends any individual historical moment.",
        marks: 5,
      },
      {
        question:
          "Why is dramatic irony so important to Priestley's dramatic method in An Inspector Calls?",
        lines: 4,
        modelAnswer:
          "Dramatic irony arises when the audience knows something a character does not. In An Inspector Calls, Birling's confident prediction that there will be no war and that the Titanic is unsinkable is already proven wrong before the first act ends -- to the 1945 audience. This makes Birling appear ridiculous and undermines his authority on everything that follows. Priestley uses dramatic irony to make the audience distrust the capitalist worldview Birling espouses, priming them to accept the Inspector's socialist counter-argument.",
        marks: 4,
      },
      {
        question:
          "How does Priestley use the play's setting -- a comfortable dining room in 1912 -- to establish his themes?",
        lines: 4,
        modelAnswer:
          "The comfortable dining room signals the Birling family's wealth and complacency. The detailed stage directions describe a room that is 'not cosy and homelike' but rather formal and self-satisfied -- a space designed to impress rather than to welcome. By confining the action to this single room for the entire play, Priestley creates a sense of entrapment: the family cannot escape either the Inspector's questions or the consequences of their actions. The domestic setting also foregrounds the private sphere, suggesting that moral failures begin at home, within families and individual choices, before manifesting in public injustice.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Students often struggle to understand why the 1912/1945 gap matters. Use the analogy of watching a film knowing how it ends: dramatic irony creates a distance between character confidence and audience awareness that Priestley exploits throughout.",
      "Contextual references should always be integrated into analysis, not bolted on as a separate opening sentence. Model this distinction explicitly before the main writing task.",
      "The lighting change from pink and intimate to brighter and harder is worth mentioning here as an early example of how Priestley uses theatrical elements to signal the shift from self-satisfaction to moral scrutiny.",
      "AO3 -- Relationships between texts and the contexts in which they were written and received",
    ],
    targetedSkills: [
      'AO1 -- Personal response and textual evidence',
      'AO2 -- Analysis of language, form, and structure',
      'AO3 -- Context: 1912 setting and 1945 audience',
      'Embedding contextual knowledge in analytical writing',
      'Understanding the playwright as a deliberate craftsman with a political purpose',
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 2: Act 1 -- The Comfortable Birlings and Capitalism
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-02',
    title: "The Comfortable Birlings: Act 1, Capitalism, and Stage Directions",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley uses stage directions and setting to establish the Birlings' complacency",
      "Examine Mr Birling's key speeches as expressions of capitalist ideology",
      "Explore how stage directions function as literary and symbolic devices",
      "Write analytically about dramatic technique, connecting AO2 and AO3",
    ],
    successCriteria: [
      "I can explain what the stage directions at the start of Act 1 reveal about the Birling family's values",
      "I can analyse at least two of Mr Birling's key speeches and explain what they reveal about his worldview",
      "I can write a paragraph that analyses stage directions as literary choices rather than simply describing them",
      "I can use the terms: stage direction, pathetic fallacy, capitalism, self-interest, dramatic irony",
    ],
    keywords: [
      'stage directions',
      'pathetic fallacy',
      'symbolism',
      'capitalism',
      'self-interest',
      'collective responsibility',
      'dramatic irony',
      'exposition',
      'portentous',
      'engagement',
    ],
    starterActivity: {
      title: "What Do Stage Directions Tell Us?",
      duration: '8 minutes',
      instructions:
        "Display the opening stage direction from An Inspector Calls on the board. Students annotate it in pairs: What does each detail tell us about the Birlings? What kind of atmosphere is Priestley creating? What might the lighting suggest? Pairs share one observation each. Teacher highlights key choices -- the word 'not cosy and homelike' and the 'pink and intimate' lighting -- asking: Why does Priestley not just say they are comfortable and well-off? What does the specific language add?",
      differentiation: {
        support:
          "Provide three focus questions on a card: What does the setting tell us about the family's wealth? What does the lighting suggest about the mood? Why is the word 'not' used?",
        core: "Students annotate freely and share two key observations.",
        stretch:
          "Students consider how the stage directions foreshadow the shift in atmosphere that the Inspector's arrival will create.",
      },
      resources: ['Stage direction extract slide', 'Annotation copies'],
    },
    mainActivities: [
      {
        title: "Mr Birling's Speeches: Capitalist Ideology in Action",
        duration: '20 minutes',
        instructions:
          "Students read three key speeches by Mr Birling from Act 1: (1) his dismissal of community responsibility -- 'a man has to mind his own business and look after himself and his own'; (2) his Titanic prediction; (3) his war prediction. For each speech, students complete a three-column grid: What does Birling say? What does this reveal about his worldview? What effect does dramatic irony have on how the audience receives this? Class reviews as a whole, with teacher modelling how to name Birling's philosophy as capitalist self-interest.",
        differentiation: {
          support:
            "Provide the three speeches printed out with key phrases highlighted to guide annotation.",
          core: "Students complete the grid independently and compare with a partner.",
          stretch:
            "Students write a short evaluative response: Does Priestley present Birling as simply foolish or as genuinely dangerous? Use evidence from all three speeches.",
        },
        resources: ['Mr Birling speech extracts', 'Three-column analysis grid'],
      },
      {
        title: "Sustained Analytical Paragraph: How Priestley Presents Birling",
        duration: '20 minutes',
        instructions:
          "Students write a sustained analytical paragraph (minimum eight sentences) responding to the question: How does Priestley use Mr Birling in Act 1 to present the dangers of capitalist self-interest? The paragraph should: open with a clear analytical point; embed at least two quotations; name at least two techniques; include a contextual reference to 1945; end with a link to Priestley's overall purpose. Teacher models the opening sentence, then students write independently.",
        differentiation: {
          support:
            "Provide sentence starters for the paragraph: Priestley presents Birling as a caricature of the capitalist class by...; He uses the quotation '...' to show...; The 1945 audience would have recognised that...",
          core: "Students write the full paragraph independently using the scaffold on the board.",
          stretch:
            "Students write a second paragraph arguing that Birling is not merely a villain but a product of his society -- and consider whether this changes our judgement of him.",
        },
        resources: ['Writing frame', 'Play text Act 1'],
      },
    ],
    plenaryActivity: {
      title: "Lighting as Symbol: Exit Ticket",
      duration: '7 minutes',
      instructions:
        "Teacher returns to the opening stage directions and asks: Why does the lighting change from 'pink and intimate' to 'brighter and harder' when the Inspector arrives? Students write a two-sentence explanation linking the lighting to the play's central theme. Teacher selects three responses to share, using them to consolidate the idea of pathetic fallacy and Priestley's use of theatrical devices as tools of meaning.",
      differentiation: {
        support: "Provide the sentence frame: The lighting changes from ... to ... which suggests that...",
        core: "Students write their explanation independently.",
        stretch: "Students explain why Priestley chose lighting rather than a character's speech to mark this shift.",
      },
    },
    homework:
      "Learn the quotation 'a man has to mind his own business and look after himself and his own' and write three analytical sentences: one identifying the grammatical structure, one explaining its effect, and one linking it to Priestley's purpose.",
    worksheetQuestions: [
      {
        question:
          "How does Priestley use the stage directions at the start of Act 1 to establish the Birlings' world and prepare the audience for the Inspector's arrival?",
        lines: 6,
        modelAnswer:
          "Priestley uses the stage directions as a form of pathetic fallacy. The pink, intimate light before the Inspector arrives represents the Birlings' comfortable, rose-tinted view of their own lives -- a self-satisfied world in which they feel no guilt or moral scrutiny. When the Inspector enters and the light becomes 'brighter and harder', it symbolises the harsh scrutiny of truth. The change signals to the audience that the warm illusions the family have been living under are about to be exposed. The word 'not cosy and homelike' is also significant: by telling us what the room is not, Priestley hints at the absence of genuine warmth beneath the comfortable surface.",
        marks: 5,
      },
      {
        question:
          "What does Mr Birling's speech about 'a man has to mind his own business' reveal about his worldview?",
        lines: 5,
        modelAnswer:
          "Birling's speech is a direct statement of the capitalist philosophy of self-interest. The imperative 'has to' suggests obligation, as if selfishness is not just acceptable but necessary and inevitable. The reflexive pronoun 'himself' emphasises the individual rather than the collective, placing the burden of welfare on each person rather than on society. Priestley presents this speech with dramatic irony: the 1945 audience knew that this individualist philosophy had led to the very inequality and exploitation that caused two World Wars. By having Birling state his philosophy so baldly, Priestley invites the audience to reject it.",
        marks: 5,
      },
      {
        question:
          "The word 'portentous' is used to describe Birling's manner in the stage directions. What does this word mean and why does Priestley use it?",
        lines: 4,
        modelAnswer:
          "Portentous means self-important and pompous, carrying an ominous undertone suggesting impending disaster. Priestley uses it to signal that Birling is a man whose self-confidence vastly exceeds his wisdom. The word is also ironic in its second meaning -- something portentous hints at disaster to come -- which foreshadows the Inspector's arrival and the catastrophic revelation of the family's shared guilt. By choosing this word for a stage direction, Priestley makes his authorial attitude towards Birling clear even before the Inspector arrives.",
        marks: 4,
      },
      {
        question:
          "How does the timing of the Inspector's arrival -- immediately after Birling's speech about self-interest -- create dramatic impact?",
        lines: 4,
        modelAnswer:
          "The timing of the Inspector's arrival is a deliberate dramatic choice. By interrupting Birling at precisely the moment he is stating his philosophy of selfish individualism, Priestley creates an immediate structural contrast: Birling's creed of looking after oneself is challenged the instant it is expressed. The Inspector represents the consequences of that creed -- Eva Smith is the human cost of Birling's 'mind your own business' philosophy. The juxtaposition is structural as well as thematic: Priestley uses the architecture of the play itself to refute Birling's argument.",
        marks: 4,
      },
      {
        question:
          "How does the engagement party atmosphere in Act 1 contrast with the mood by the end of the play?",
        lines: 4,
        modelAnswer:
          "The engagement party atmosphere of Act 1 is one of self-congratulation and social performance. The family is celebrating a union that will merge two successful businesses, and the dialogue is full of comfortable complacency. By the end of the play, this atmosphere has been entirely dismantled: secrets have been exposed, Gerald's relationship with Daisy Renton has ended the engagement, and the family is divided between those who accept moral responsibility (Sheila and Eric) and those who retreat to self-interest (Mr and Mrs Birling). The structural arc from celebration to crisis is central to Priestley's argument that comfortable denial has consequences.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The stage direction analysis in the starter is often students' first experience of treating non-dialogue elements of a playscript as literary choices. Emphasise that Priestley wrote these directions as carefully as any speech.",
      "Some students will focus only on what Birling says and ignore how he says it. Redirect them to specific language features: the declarative mood of his predictions, the dismissive tone of 'these people', and the imperative in his self-interest speech.",
      "The lighting change is one of the most commonly examined elements in this play. Ensure students can write about it fluently using terms like pathetic fallacy, symbolism, and visual metaphor.",
      "If students have time, ask them to find the stage direction about the furniture and prompt them to notice the words 'not cosy and homelike' -- this is an early signal that the Birlings' domestic comfort masks emotional coldness.",
    ],
    targetedSkills: [
      'AO1 -- Personal response and textual evidence',
      'AO2 -- Analysis of language, form, and structure',
      'AO3 -- Contextual embedding (capitalism, Edwardian era)',
      'Close reading of stage directions',
      'Analytical paragraph writing',
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 3: Sheila's Moral Awakening
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-03',
    title: "Sheila's Moral Awakening: Character Arc and Generational Divide",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Trace Sheila's character arc from privileged naivety to moral awareness across the play",
      "Analyse specific language choices that show Sheila's evolving response to the Inspector's questions",
      "Understand the concept of the generational divide and its significance to Priestley's message",
      "Write analytically about character development, integrating AO1, AO2, and AO3",
    ],
    successCriteria: [
      "I can describe at least three stages in Sheila's character development with textual evidence for each",
      "I can explain why Sheila's response differs from her parents' and what this reveals about Priestley's message",
      "I can analyse specific word choices in Sheila's dialogue to show how language reflects her changing attitude",
      "I can write a comparative point connecting Sheila's arc to Priestley's 1945 message about social change",
    ],
    keywords: [
      'character arc',
      'moral awakening',
      'generational divide',
      'complicity',
      'self-awareness',
      'jealousy',
      'remorse',
      'transformation',
      'naivety',
      'collective responsibility',
    ],
    starterActivity: {
      title: "Sheila's Journey: Before and After",
      duration: '7 minutes',
      instructions:
        "Display two quotations from Sheila side by side: (1) 'Oh -- it's wonderful! Look -- Mummy -- isn't it a beauty?' (Act 1, admiring her engagement ring) and (2) 'I suppose we're all nice people now' (Act 3, sarcastically after the family tries to dismiss the Inspector's visit). Students write three observations: what Sheila cared about before, what she cares about now, and what this change tells us about Priestley's purpose. Pairs share with the class. Teacher introduces the concept of a character arc.",
      differentiation: {
        support: "Provide two guiding questions: What does each quotation show Sheila values? What has changed between Act 1 and Act 3?",
        core: "Students write three independent observations and share one.",
        stretch: "Students write a sentence linking Sheila's change to what Priestley wants the audience to learn.",
      },
      resources: ['Two-quotation comparison slide'],
    },
    mainActivities: [
      {
        title: "Sheila's Arc: Evidence Gathering",
        duration: '20 minutes',
        instructions:
          "Teacher divides students into three groups. Group 1 focuses on Sheila in Act 1 (engagement celebration, her involvement in Eva's dismissal from Milwards). Group 2 focuses on Sheila in Act 2 (acting as a second inspector, confronting Gerald, warning her mother). Group 3 focuses on Sheila in Act 3 (refusing to return engagement ring, rejecting her parents' dismissal of the Inspector's visit). Each group identifies two key quotations and what each reveals about Sheila at that point. Groups present findings; teacher builds a character arc timeline on the board.",
        differentiation: {
          support:
            "Provide page references and pre-selected quotations for each group, so students focus on analysis rather than searching.",
          core: "Groups select their own quotations from the play within the designated section.",
          stretch:
            "Students additionally consider what Sheila's behaviour at their stage reveals about the theme of generational divide.",
        },
        resources: ['Class copies of An Inspector Calls', 'Character arc timeline template'],
      },
      {
        title: "Focused Writing: Sheila as Priestley's Hope",
        duration: '21 minutes',
        instructions:
          "Students write a full analytical response to the question: How does Priestley use Sheila to express his hope that society can change? They must refer to at least three moments across the play, use at least two specific techniques, and include one reference to Priestley's context. Teacher models the opening on the board. After 15 minutes, students swap work with a partner for peer feedback: Has the writer made a clear argument? Is every quotation followed by analysis? Is context embedded?",
        differentiation: {
          support:
            "Provide a structured planning frame: Opening claim about Sheila -- Act 1 evidence -- Act 2 evidence -- Act 3 evidence -- Link to Priestley's purpose.",
          core: "Students plan briefly in bullet points before writing the full response.",
          stretch:
            "Students include a counter-argument: acknowledging that some critics argue Sheila's change is unconvincing because it happens too quickly, then refuting this view.",
        },
        resources: ['Essay writing frame', 'Play text'],
      },
    ],
    plenaryActivity: {
      title: 'Generational Divide Pyramid',
      duration: '7 minutes',
      instructions:
        "Students draw a triangle. At the top: one sentence summarising Sheila's final moral position. In the middle: one quotation that best captures her transformation. At the bottom: one sentence linking her to Priestley's message for 1945. Teacher asks two or three students to share their pyramid.",
      differentiation: {
        support: "Teacher provides the quotation for the middle tier.",
        core: "Students complete all three tiers independently.",
        stretch: "Students write a fourth tier: one sentence connecting Sheila's arc to the play's structural ending.",
      },
    },
    homework:
      "Write a full PETAL paragraph analysing the moment Sheila returns her engagement ring to Gerald. Explain what this action reveals about her changed values, analyse the language she uses to explain her decision, and link to Priestley's message about the generational divide.",
    worksheetQuestions: [
      {
        question:
          "Sheila says 'I know I'm to blame -- and I'm desperately sorry.' What does this reveal about her character at this point in the play? How does it differ from her father's response?",
        lines: 5,
        modelAnswer:
          "Sheila's immediate admission of guilt contrasts sharply with Mr Birling's refusal to accept responsibility. The adverb 'desperately' shows the intensity of her remorse -- she does not try to minimise her actions or justify them with business logic. Her honesty and self-awareness mark the beginning of her transformation. Unlike Birling, who views Eva Smith as a unit of labour, Sheila recognises Eva as a person whose life she damaged. Priestley uses this contrast to establish the generational divide: the older generation will not change; the younger generation can.",
        marks: 5,
      },
      {
        question:
          "How does Priestley present Sheila as acting like a second inspector in Act 2? Use at least one quotation.",
        lines: 5,
        modelAnswer:
          "In Act 2, Sheila increasingly anticipates the Inspector's questions and challenges her family's evasions. When her mother attempts to dismiss the Inspector's line of questioning, Sheila warns her: 'Mother, I begged you and begged you to stop.' The repetition of 'begged' shows Sheila's increasing desperation and her awareness of the moral trap her mother is walking into. She has understood what the Inspector is doing -- methodically revealing each family member's guilt -- and she aligns herself with his project rather than her family's self-protection. Priestley uses this to suggest that Sheila has genuinely changed, not merely for show.",
        marks: 5,
      },
      {
        question:
          "Why does Sheila refuse to return her engagement ring at the end of the play? What does this suggest about her transformation?",
        lines: 5,
        modelAnswer:
          "Sheila refuses to return the ring because she recognises that the moral basis of the relationship has been destroyed, regardless of whether the Inspector was genuine. Her statement 'You and I aren't the same people who sat down to dinner here' shows a profound awareness of change in herself and Gerald. The engagement ring symbolised a social contract built on comfortable illusion -- the same illusion the Inspector has shattered. By refusing the ring, Sheila is refusing to pretend that nothing has happened. Priestley presents this as a sign of genuine moral growth rather than performance.",
        marks: 5,
      },
      {
        question:
          "How does Priestley use Sheila to represent the possibility of social change?",
        lines: 4,
        modelAnswer:
          "Priestley wrote the play in 1945 for an audience standing at a historical turning point. Sheila represents the possibility that individuals -- particularly the young -- can learn from the past and choose to build a more just society. Her transformation from complicit privilege to moral clarity mirrors the trajectory Priestley hoped post-war Britain would follow. Unlike her parents, who retreat to self-interest when the immediate threat passes, Sheila retains her changed perspective. She is Priestley's argument in human form: collective responsibility is achievable if individuals are willing to confront uncomfortable truths.",
        marks: 4,
      },
      {
        question:
          "In what sense is Sheila 'trapped' at the start of the play, and how does this make her development more significant?",
        lines: 4,
        modelAnswer:
          "At the start of the play, Sheila is trapped within the conventions of her class and gender: she is expected to be decorative, grateful, and compliant. Her delight in the engagement ring and her childish pleasure in family approval reflect a young woman who has not yet been confronted with the consequences of her privileged life. This is why her development is so significant: Priestley shows that even someone who has been shaped entirely by a comfortable, unjust system can break free of it. Sheila's change suggests that moral awakening is possible for those willing to look honestly at themselves.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Students often underestimate Sheila because she begins the play as seemingly shallow. Encourage them to re-read Act 1 with attention to her reactions -- she is not simply naive but actively complicit in Eva's dismissal, which makes her transformation all the more meaningful.",
      "The group work activity works best if groups are given clear time limits and accountability -- ask each group to appoint a spokesperson and prepare a two-minute presentation.",
      "Sheila uses bitter sarcasm -- saying the opposite of what she means -- when she says 'we're all nice people now.' Model how to identify and analyse irony as a technique before the writing task.",
    ],
    targetedSkills: [
      'AO1 -- Understanding and response to character development',
      'AO2 -- Analysis of technique: sarcasm, language choices, stage directions',
      'AO3 -- Generational divide and Priestley\'s 1945 message',
      'Character arc tracking across a whole text',
      'Peer feedback and self-assessment',
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 4: Gerald Croft -- Class, Power, and Moral Ambiguity
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-04',
    title: 'Gerald Croft: Class, Power, and Moral Ambiguity',
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley constructs Gerald as a morally ambiguous character",
      "Examine the power imbalance between Gerald and Daisy Renton (Eva Smith)",
      "Explore how Gerald's behaviour reflects the class and gender inequalities of 1912",
      "Write analytically using two contrasting readings of Gerald's character",
    ],
    successCriteria: [
      "I can explain the power imbalance between Gerald and Daisy Renton and link it to class and gender",
      "I can write two contrasting readings of Gerald's behaviour: one sympathetic, one critical",
      "I can analyse specific language choices Gerald uses when describing his relationship with Daisy",
      "I can use the terms: power imbalance, exploitation, class privilege, moral ambiguity",
    ],
    keywords: [
      'power imbalance',
      'exploitation',
      'class privilege',
      'moral ambiguity',
      'self-presentation',
      'Daisy Renton',
      'Palace Bar',
      'mistress',
      'agency',
      'complicity',
    ],
    starterActivity: {
      title: "Two-Colour Annotation: Gerald's Language",
      duration: '8 minutes',
      instructions:
        "Students are given the extract where Gerald explains his relationship with Daisy Renton (Act 2). Using two colours of pen, they annotate: colour 1 -- evidence that Gerald genuinely cared for Daisy; colour 2 -- evidence that Gerald's behaviour was exploitative or shaped by class privilege. After 5 minutes, pairs compare annotations and discuss: which colour has more evidence? Does Gerald's behaviour suggest genuine affection, exploitation, or both?",
      differentiation: {
        support:
          "Provide a printed copy of the extract with three pre-identified quotes in each colour as starting points.",
        core: "Students annotate freely and discuss their findings.",
        stretch:
          "Students consider whether it is possible for a relationship to involve genuine affection and exploitation simultaneously.",
      },
      resources: ['Gerald extract handout', 'Coloured pens'],
    },
    mainActivities: [
      {
        title: "The Palace Bar: Class and Gender in 1912",
        duration: '18 minutes',
        instructions:
          "Teacher provides brief contextual information about the Palace Bar (a respectable hotel bar frequented by wealthy men and socially vulnerable women). Class discusses: What does the setting of the Palace Bar tell us about how gender and class operated in 1912? Teacher introduces the concept of a power imbalance: Gerald has money, social connections, and access to accommodation; Daisy is penniless and homeless. Students write a paragraph explaining how the context of 1912 shapes the moral reading of Gerald's behaviour.",
        differentiation: {
          support:
            "Provide a sentence frame: The power imbalance between Gerald and Daisy is shown by... This is important because in 1912...",
          core: "Students write the paragraph independently using the contextual information provided.",
          stretch:
            "Students consider how the same relationship might be interpreted differently in 2024, and what this reveals about social progress.",
        },
        resources: ['Palace Bar contextual card', 'Writing frame'],
      },
      {
        title: 'Building a Balanced Argument',
        duration: '20 minutes',
        instructions:
          "Teacher models how to build a balanced analytical argument: first present a reading sympathetic to Gerald with evidence, then challenge it with a counter-reading. Students then write two linked paragraphs: Paragraph 1 -- One reading of Gerald is that he is a genuine rescuer who cared for Daisy Renton; Paragraph 2 -- However, a closer reading reveals that Gerald's behaviour is shaped by class privilege and power imbalance. Students attempt both paragraphs independently.",
        differentiation: {
          support:
            "Provide a writing frame with the opening sentence of each paragraph and three bullet-pointed prompts for quotation selection.",
          core: "Students write both paragraphs independently using the teacher model as a guide.",
          stretch:
            "Students add a concluding sentence to their second paragraph linking Gerald to Priestley's wider argument about systemic exploitation.",
        },
        resources: ['Modelled paragraph slides', 'Writing frame'],
      },
    ],
    plenaryActivity: {
      title: 'One Quotation, Two Readings',
      duration: '7 minutes',
      instructions:
        "Teacher displays the quotation: 'She was young and fresh and charming.' Students write two brief interpretations -- one that presents this as evidence of genuine affection, one that questions it as a man describing a woman he used. Teacher concludes: The best essays acknowledge both readings and then use evidence to argue which is more convincing in the light of Priestley's purpose.",
      differentiation: {
        support: "Provide sentence starters: This suggests genuine feeling because... / However, this could be seen as exploitative because...",
        core: "Students write both interpretations independently.",
        stretch: "Students add a third reading arguing which interpretation Priestley intended and why.",
      },
    },
    homework:
      "Write a full exam-style paragraph responding to: How does Priestley use Gerald Croft to explore the theme of class exploitation? Refer to at least two quotations, name at least one technique, and include a counter-argument before reaching a conclusion.",
    worksheetQuestions: [
      {
        question:
          "What is meant by a power imbalance? Identify one specific way in which Gerald held power over Daisy Renton.",
        lines: 4,
        modelAnswer:
          "A power imbalance exists when one person holds significantly more social, economic, or political power than another. In Gerald's relationship with Daisy, the imbalance is extreme: Gerald is wealthy, socially connected, and has access to accommodation and money. Daisy is penniless and homeless when Gerald meets her. She is therefore entirely dependent on him -- unable to refuse his arrangements on equal terms. This economic dependency means that any relationship between them cannot be truly consensual in any meaningful social sense.",
        marks: 4,
      },
      {
        question:
          "Gerald describes Daisy as 'young and fresh and charming.' Analyse the language and consider two different interpretations of this description.",
        lines: 6,
        modelAnswer:
          "The adjectives 'young and fresh and charming' focus entirely on how Daisy appealed to Gerald rather than on her inner life or humanity. One reading is that this reflects genuine affection: Gerald is describing the qualities that attracted him. However, a critical reading notes that all three adjectives are aesthetic, reducing Daisy to an object of appreciation rather than acknowledging her as a full person. The list of three has a tricolon quality that makes her sound like an item being appraised. This could suggest Priestley is inviting the audience to see beyond Gerald's self-presentation.",
        marks: 6,
      },
      {
        question:
          "How does Priestley use the Palace Bar setting to comment on class and gender in Edwardian society?",
        lines: 5,
        modelAnswer:
          "The Palace Bar is a place where socially marginalised women go out of desperation. By having Gerald meet Daisy there, Priestley makes clear that Eva's desperation had already driven her to a precarious social position. The fact that a man like Gerald could enter the bar, select a woman he found attractive, and invite her to live in a friend's rooms reveals the gender and class inequality of the era: wealthy men could exploit economically vulnerable women without social censure, while the women themselves were judged as morally fallen.",
        marks: 5,
      },
      {
        question:
          "In what ways is Gerald's behaviour after the Inspector leaves similar to Mr Birling's? What does this suggest about Priestley's view of the upper-middle-class male?",
        lines: 5,
        modelAnswer:
          "After the Inspector leaves, Gerald -- like Mr Birling -- immediately focuses on whether the Inspector was genuine rather than on the moral reality of what he did. He takes a walk to 'steady his nerves' and returns having established that there is no Inspector Goole on the police force. His relief is palpable. Like Birling, Gerald is more concerned with social consequences than genuine moral responsibility. Priestley suggests that both men have been shaped by the same class system that teaches them to value reputation over conscience.",
        marks: 5,
      },
      {
        question:
          "Do you think Priestley wants the audience to sympathise with Gerald? Explain your view with evidence.",
        lines: 5,
        modelAnswer:
          "Priestley presents Gerald as the most morally complex character, and some sympathy is possible: he is the only one to show genuine affection for Eva/Daisy. However, Priestley ultimately exposes the limitations of Gerald's self-presentation. Despite his claims of caring, Gerald ended the affair when it was convenient for him, leaving Daisy with nothing. His post-Inspector behaviour -- seeking to discredit the investigation -- aligns him with the older generation. Priestley may be suggesting that good intentions are not enough: the system Gerald operates within makes exploitation inevitable.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The two-colour annotation technique is particularly effective for Gerald because it forces students to hold both readings simultaneously rather than committing to one view too quickly.",
      "Some students will have a strong reaction to Gerald and dismiss him as simply a bad person. Push them to consider the systemic argument: Priestley is not just criticising Gerald but the class system that makes his behaviour possible and consequence-free.",
      "Gerald's re-entry after going for a walk is an important moment that students sometimes overlook. His tone shifts from guilt to a kind of business-like problem-solving -- model how to analyse this shift.",
      "The Palace Bar context is important for AO3: it shows how gender and class inequality intersect in 1912, creating a situation where working-class women had almost no protection from exploitation by wealthy men.",
    ],
    targetedSkills: [
      'AO1 -- Personal and critical response to complex character',
      'AO2 -- Analysis of language choices and self-presentation',
      'AO3 -- Class and gender exploitation in 1912',
      'Critical interpretation: constructing and challenging readings',
      'Balanced analytical paragraph writing',
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 5: Mrs Birling's Denial
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-05',
    title: "Mrs Birling's Denial: Class Prejudice, Hypocrisy, and the Failure of Charity",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley presents Mrs Birling as the embodiment of class prejudice and institutional hypocrisy",
      "Examine the dramatic irony created when Mrs Birling demands that the father of Eva's child be punished",
      "Explore how Priestley uses Mrs Birling to criticise the failure of charitable institutions",
      "Write analytically about a complex character, integrating language analysis with thematic argument",
    ],
    successCriteria: [
      "I can explain Mrs Birling's reasons for rejecting Eva's application to the charity and analyse her language",
      "I can explain the dramatic irony of Mrs Birling's demand that the father be punished",
      "I can analyse how Mrs Birling's use of language reveals her class prejudice",
      "I can write a paragraph arguing that Mrs Birling is the least morally sympathetic character in the play",
    ],
    keywords: [
      'class prejudice',
      'hypocrisy',
      'dramatic irony',
      'institutional power',
      'charity',
      'respectability',
      'denial',
      'culpability',
      'moral blindness',
      'self-righteousness',
    ],
    starterActivity: {
      title: "What Makes a Character Unsympathetic?",
      duration: '7 minutes',
      instructions:
        "Students list three things a playwright might do to make an audience dislike a character. Class shares ideas. Teacher introduces the question: Is Mrs Birling more unsympathetic than Mr Birling -- and why might Priestley want us to feel this way? Students make an initial prediction before reading.",
      differentiation: {
        support: "Provide three categories to prompt thinking: What the character says; What the character does; How other characters respond to them.",
        core: "Students list and discuss freely.",
        stretch: "Students consider whether making a character completely unsympathetic is a weakness or a strength in a playwright.",
      },
      resources: ['Discussion prompt card'],
    },
    mainActivities: [
      {
        title: "Close Reading: Mrs Birling at the Charity",
        duration: '20 minutes',
        instructions:
          "Students read Mrs Birling's account of why she rejected Eva Smith's application to the Brumley Women's Charity (Act 2). In pairs, they answer: What reasons does Mrs Birling give? What do these reasons actually reveal about her values? How does Priestley use language to expose her hypocrisy? Teacher takes whole-class feedback, modelling how to use the phrase 'what she says reveals that' to move from evidence to analysis.",
        differentiation: {
          support: "Provide three focus questions printed on a card with line references for each.",
          core: "Students answer all three questions independently before sharing with the class.",
          stretch: "Students write a paragraph explaining how Mrs Birling's behaviour reveals a systemic problem with charitable institutions rather than just personal failing.",
        },
        resources: ['Act 2 charity extract', 'Analysis frame'],
      },
      {
        title: "Dramatic Irony: The Father Must Be Punished",
        duration: '20 minutes',
        instructions:
          "Teacher reads aloud Mrs Birling's speech demanding that the father of Eva's child be made responsible. Students annotate for dramatic irony: what does Mrs Birling not know? What does the audience gradually realise? How does Priestley time this revelation for maximum impact? Students write a paragraph analysing the dramatic irony and its effect on the audience's response to Mrs Birling.",
        differentiation: {
          support: "Provide a timeline showing what Mrs Birling knows vs what the audience knows at this point.",
          core: "Students annotate and write the paragraph independently.",
          stretch: "Students consider what the dramatic irony reveals about Mrs Birling's moral blindness: even when the evidence is in front of her, she cannot see her own family's guilt.",
        },
        resources: ['Play text Act 2', 'Dramatic irony timeline'],
      },
    ],
    plenaryActivity: {
      title: "Most Culpable -- Class Vote and Debate",
      duration: '8 minutes',
      instructions:
        "Teacher asks: Who is most responsible for Eva Smith's death? Students vote for one character. Teacher reveals results and selects students from different positions to give a one-sentence justification. Particular attention is given to students who chose Mrs Birling -- what is their argument? Teacher summarises: Priestley presents culpability as distributed, but Mrs Birling's combination of institutional power and wilful denial makes her a particularly powerful symbol of systemic injustice.",
      differentiation: {
        support: "Provide a sentence frame for the justification: I chose ... because ... which shows...",
        core: "Students justify their vote independently.",
        stretch: "Students consider how Priestley structures the Inspector's questioning to build towards Mrs Birling as the penultimate revelation.",
      },
    },
    homework:
      "Write a full analytical paragraph in response to: How does Priestley present Mrs Birling as a hypocrite? Use two quotations and include a reference to dramatic irony.",
    worksheetQuestions: [
      {
        question:
          "Why does Mrs Birling reject Eva Smith's application to the charity? What does her reasoning reveal about her values?",
        lines: 5,
        modelAnswer:
          "Mrs Birling rejects Eva's application because Eva used the name 'Mrs Birling' to gain sympathy, and because Mrs Birling considers Eva's 'sort' undeserving of help. The phrase 'her sort' reveals class prejudice: Mrs Birling categorises Eva as a social inferior whose claims to distress are inherently less credible. The irony is profound -- Mrs Birling runs a charity for women in need and yet refuses to help a woman in desperate need because she resents being associated with her. Priestley uses this to expose how charitable institutions in 1912 often reproduced class inequality rather than challenging it.",
        marks: 5,
      },
      {
        question:
          "Explain the dramatic irony in Mrs Birling's demand that the father of Eva's child should be 'made publicly responsible.' How does Priestley use this moment?",
        lines: 6,
        modelAnswer:
          "The dramatic irony is devastating: Mrs Birling demands that the unnamed father be made to face 'the responsibility and the blame' -- unaware that she is describing her own son, Eric. The audience gradually realises this as her speech escalates in righteous indignation. Priestley times the revelation of Eric's involvement to immediately follow Mrs Birling's most self-righteous moment, so that her demand is fulfilled in the worst possible way. The irony strips away her moral authority: the woman who refused to help Eva has unknowingly condemned her own son. This is Priestley's most precise piece of dramatic engineering in the play.",
        marks: 6,
      },
      {
        question:
          "How does Priestley use Mrs Birling's language to reveal her class prejudice?",
        lines: 5,
        modelAnswer:
          "Mrs Birling repeatedly uses dismissive phrases -- 'these girls', 'her sort', 'girls of that class' -- that reduce Eva to a type rather than a person. The use of plural nouns removes Eva's individuality: she is not a specific human being but a category. The phrase 'I did my duty' reveals Mrs Birling's belief that attending a charity committee discharges her social obligations, regardless of whether that charity actually helps anyone. The formal, controlled register she maintains throughout reveals a woman who is entirely comfortable with her own authority and entirely unwilling to question it.",
        marks: 5,
      },
      {
        question:
          "In what sense is Mrs Birling the most powerful character in the play -- and also the least self-aware?",
        lines: 4,
        modelAnswer:
          "Mrs Birling holds institutional power through her role on the charity committee, social power through her status and connections, and domestic power through her control of the family's self-presentation. Yet she is entirely blind to her own culpability. While Mr Birling at least shows a flicker of concern about scandal, Mrs Birling is imperturbable: she is convinced of her own righteousness throughout. This combination of power and moral blindness makes her Priestley's most potent critique of the ruling class -- she has the authority to help others and chooses not to, yet cannot see this as a failing.",
        marks: 4,
      },
      {
        question:
          "How does Mrs Birling's response to the revelations at the end of the play differ from Sheila's and Eric's?",
        lines: 4,
        modelAnswer:
          "When the Inspector's authenticity is questioned, Mrs Birling immediately reverts to relief and social self-interest, joining Mr Birling in hoping the whole affair can be dismissed. She shows no indication of genuine moral change. This contrasts sharply with Sheila and Eric, who insist that regardless of whether the Inspector was real, what they did was real -- their guilt and responsibility do not depend on external authority. Priestley uses this contrast to reinforce his generational argument: the older generation uses the doubt about the Inspector's identity as an excuse to resume their comfortable self-deception.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The dramatic irony of Mrs Birling's speech is one of the most powerful moments in the play for an audience. Consider reading it aloud dramatically -- the impact of realising she is condemning her own son lands very differently when heard.",
      "Some students struggle with the idea that a person running a charity can be morally culpable. Introduce the concept of systemic racism or class bias in institutions: charity can be a tool of social control as well as a genuine aid.",
      "Mrs Birling's refusal to change is as important as her initial crime. Her character arc is not an arc at all -- she ends the play exactly as she began it. This static quality is itself Priestley's point.",
    ],
    targetedSkills: [
      "AO1 -- Critical response to character and moral argument",
      "AO2 -- Dramatic irony and language of class prejudice",
      "AO3 -- Charitable institutions and class in 1912",
      "Identifying and analysing dramatic irony",
      "Evaluating how a playwright controls audience response",
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 6: Eric Birling -- Guilt, Responsibility, and the Role of Alcohol
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-06',
    title: "Eric Birling: Guilt, Responsibility, and the Role of Alcohol",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley presents Eric as both victim and perpetrator",
      "Examine the role of Eric's alcoholism as a symptom of family dysfunction",
      "Explore how Eric's response to guilt differs from his parents' denial",
      "Write analytically about Eric's relationship with Eva Smith and its implications",
    ],
    successCriteria: [
      "I can explain Eric's role in Eva Smith's story and analyse his culpability",
      "I can discuss how his alcoholism is presented as both personal failing and product of family dysfunction",
      "I can compare Eric's response to guilt with his parents' response",
      "I can use the terms: culpability, agency, dependency, generational divide",
    ],
    keywords: [
      'culpability',
      'agency',
      'alcoholism',
      'dysfunction',
      'generational divide',
      'moral growth',
      'complicity',
      'foreshadowing',
      'remorse',
      'class privilege',
    ],
    starterActivity: {
      title: "Eric's Clues: Tracking Foreshadowing",
      duration: '7 minutes',
      instructions:
        "Students look back through Act 1 and identify any moments that might foreshadow Eric's later revelations. Consider: his nervous laughter, his drinking, his behaviour at the dinner table. Class shares findings. Teacher explains the concept of dramatic foreshadowing and asks: how does knowing what Eric does make us reread these early signals?",
      differentiation: {
        support: "Provide line references for three moments of foreshadowing to locate and annotate.",
        core: "Students search the text independently and identify two or three examples.",
        stretch: "Students consider how Priestley uses Eric's Act 1 behaviour to make his later revelations feel inevitable.",
      },
      resources: ['Play text Act 1', 'Annotation frame'],
    },
    mainActivities: [
      {
        title: "Close Reading: Eric's Confession",
        duration: '20 minutes',
        instructions:
          "Students read Eric's confession in Act 3 carefully. They answer: What exactly did Eric do? What language does Eric use to describe his own behaviour? What does this language reveal about his self-awareness? Teacher models the analysis of Eric's use of 'I was in that state when a chap easily turns nasty' -- a moment of self-awareness that also hints at the social excuse-making of his class.",
        differentiation: {
          support: "Provide three focused questions with line references.",
          core: "Students answer independently and then compare with a partner.",
          stretch: "Students write a paragraph evaluating whether Eric deserves more or less sympathy than Gerald, with reference to specific language.",
        },
        resources: ['Act 3 Eric confession extract', 'Analysis frame'],
      },
      {
        title: "Eric vs His Parents: A Generational Reading",
        duration: '20 minutes',
        instructions:
          "Teacher displays two contrasting quotations: Eric's 'the fact remains that I did what I did' vs Mr Birling's relief when he discovers the Inspector may not be genuine. Students write a comparative paragraph analysing what these two responses reveal about the generational divide. Teacher models how to use discourse markers of comparison: whereas, in contrast, unlike, while.",
        differentiation: {
          support: "Provide a writing frame with comparative sentence starters.",
          core: "Students write the comparative paragraph independently.",
          stretch: "Students include a third voice -- Sheila's -- to create a three-way comparison arguing that Eric and Sheila together represent Priestley's hope for social change.",
        },
        resources: ['Two-quotation comparison slide', 'Comparative paragraph frame'],
      },
    ],
    plenaryActivity: {
      title: "Sympathy Scale",
      duration: '8 minutes',
      instructions:
        "Teacher draws a sympathy scale on the board from 0 (no sympathy) to 10 (full sympathy). Students place Eric, Gerald, Sheila, Mrs Birling, and Mr Birling on the scale. Pairs compare their placements and justify. Teacher asks: does where you place characters on the scale change depending on whether you are judging actions or intentions? How might a 1945 audience have placed Eric differently from a modern audience?",
      differentiation: {
        support: "Provide a sentence frame for the justification.",
        core: "Students place and justify independently.",
        stretch: "Students write a concluding sentence about whether sympathy is a useful tool for analysing Priestley's purpose.",
      },
    },
    homework:
      "Write a full analytical paragraph in response to: How does Priestley use Eric's character to explore the theme of responsibility? Include references to both his actions and his response to the Inspector's questioning.",
    worksheetQuestions: [
      {
        question:
          "What exactly did Eric do to Eva Smith? How does Priestley control the revelation of this information?",
        lines: 5,
        modelAnswer:
          "Eric met Eva Smith (then calling herself Daisy Renton) at the Palace Bar, began an affair with her, and when she became pregnant, stole money from his father's office to support her. When Eva refused to continue taking stolen money, Eric lost her financial support. Priestley controls the revelation carefully: the audience pieces together Eric's story through hints and interruptions before the full confession in Act 3. This delayed revelation builds dramatic tension and forces the audience to reassess everything they thought they understood about Eric's nervous, uncomfortable behaviour in Act 1.",
        marks: 5,
      },
      {
        question:
          "How does Eric's alcoholism function in the play? Is it a personal failing or a product of his environment?",
        lines: 5,
        modelAnswer:
          "Eric's alcoholism is both a personal failing and a symptom of the dysfunctional family environment the Birlings have created. His parents did not notice his drinking because they were too concerned with social appearances. The family's failure to address Eric's obvious problem before the Inspector's arrival suggests that the comfortable surface the Birlings maintain conceals a deeper dysfunction. Priestley uses Eric's alcoholism as a metaphor for the family's broader problem: they are adept at suppressing uncomfortable truths. Eric drinks to cope with the pressures of a life he did not choose and cannot speak about honestly.",
        marks: 5,
      },
      {
        question:
          "Unlike his parents, Eric insists on the reality of what he did. What does this reveal about the generational divide?",
        lines: 4,
        modelAnswer:
          "Unlike his parents, who attempt to discredit the Inspector and celebrate when they believe he was not genuine, Eric insists on the reality of what he did: 'the fact remains that I did what I did.' He is furious with his mother for turning Eva away from the charity. His emotional honesty aligns him with Sheila rather than with the older generation. Priestley suggests that the younger generation is capable of genuine moral growth, while the older generation is too invested in self-protection and reputation to ever truly change.",
        marks: 4,
      },
      {
        question:
          "How does Eric's relationship with his father change over the course of the play?",
        lines: 4,
        modelAnswer:
          "At the start of the play, Eric is clearly in awe of and intimidated by his father -- his nervous laugh, his discomfort during Birling's speeches, his heavy drinking all suggest a son who cannot live up to paternal expectations. By Act 3, this relationship has collapsed: Eric accuses his father of never being the kind of man he could talk to openly, and he expresses contempt for his father's retreat to social self-interest. Priestley uses the deterioration of this relationship to suggest that the comfortable authority figures of the older generation have failed in their most basic responsibility -- to provide moral guidance to their children.",
        marks: 4,
      },
      {
        question:
          "Does Priestley present Eric as a villain? Explain your view.",
        lines: 4,
        modelAnswer:
          "Priestley does not present Eric as a straightforward villain. While Eric's actions -- forcing himself on Eva Smith when drunk, stealing from his employer -- are undeniably wrong, Priestley contextualises them within a system that failed Eric as well as Eva. His parents provided no moral framework, no emotional openness, and no support. His class gave him access to power he was unprepared to exercise responsibly. Unlike Birling or Mrs Birling, Eric acknowledges his guilt and does not retreat into denial. Priestley seems to suggest that Eric's failings are both personal and systemic -- and that his willingness to accept responsibility distinguishes him from the truly culpable older generation.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Eric's revelation is often the most uncomfortable for students because it involves a sexual assault. Handle this sensitively: the focus should be on Priestley's purpose and the power imbalance, not on graphic description.",
      "The parallel between Eric and Gerald (both had relationships with Eva/Daisy) invites productive comparison. Eric is younger, less polished, and more emotionally honest -- but his actions were more aggressive. Encourage students to resist simple hierarchies of guilt.",
      "Eric's accusation that his father was never the kind of man he could talk to is one of the most revealing lines in the play. It shifts the focus from individual moral failing to family dysfunction as a systemic problem.",
    ],
    targetedSkills: [
      "AO1 -- Complex character analysis with textual evidence",
      "AO2 -- Dramatic foreshadowing and language of guilt",
      "AO3 -- Family dysfunction and class expectations",
      "Comparative paragraph writing",
      "Evaluating degrees of culpability",
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 7: The Inspector -- Character, Symbol, or Dramatic Device?
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-07',
    title: "The Inspector: Character, Symbol, or Dramatic Device?",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley constructs the Inspector as a multi-layered dramatic device",
      "Explore the ambiguity surrounding the Inspector's identity and what it contributes to meaning",
      "Examine the Inspector's interrogation technique and how it controls the dramatic structure",
      "Write analytically about the Inspector as both character and symbol",
    ],
    successCriteria: [
      "I can explain at least three interpretations of who or what the Inspector represents",
      "I can analyse the Inspector's language and interrogation technique",
      "I can explain how Priestley uses the Inspector's ambiguous identity to create meaning",
      "I can write a paragraph evaluating whether the Inspector is primarily a character or a dramatic device",
    ],
    keywords: [
      'dramatic device',
      'symbol',
      'ambiguity',
      'interrogation',
      'omniscience',
      'mouthpiece',
      'moral authority',
      'collective guilt',
      'socialist message',
      'supernatural',
    ],
    starterActivity: {
      title: "Who Is Inspector Goole?",
      duration: '8 minutes',
      instructions:
        "Students read four possible interpretations of the Inspector on cards: (1) A real police officer; (2) A ghost or supernatural figure; (3) Priestley himself / a socialist mouthpiece; (4) The conscience of the audience. In pairs, students rank these from most to least convincing with a one-sentence justification for each. Class shares rankings. Teacher explains that the Inspector's ambiguity is deliberate: Priestley refuses to resolve it.",
      differentiation: {
        support: "Provide one piece of textual evidence for each interpretation.",
        core: "Students rank and justify independently.",
        stretch: "Students consider: does the Inspector need to have a single identity, or does Priestley's purpose require him to mean different things to different audience members?",
      },
      resources: ['Interpretation cards', 'Ranking frame'],
    },
    mainActivities: [
      {
        title: "The Inspector's Technique: Controlling the Drama",
        duration: '20 minutes',
        instructions:
          "Students read three key moments of the Inspector's interrogation: his opening statement about Eva Smith's death; his handling of Mr Birling; his questioning of Mrs Birling. For each, they annotate: What technique does the Inspector use? How does he control the conversation? What effect does this have on the character being questioned? Teacher models how to use discourse analysis terms: topic control, turn-taking, imperative mood.",
        differentiation: {
          support: "Provide a printed extract for each moment with three annotation prompts.",
          core: "Students annotate all three moments and share one observation per moment.",
          stretch: "Students write a paragraph arguing that the Inspector's interrogation technique is designed to expose collective rather than individual guilt.",
        },
        resources: ['Three interrogation extracts', 'Discourse analysis prompt card'],
      },
      {
        title: "Character or Device? Building an Argument",
        duration: '20 minutes',
        instructions:
          "Teacher displays the essay question: 'The Inspector is less a character and more a dramatic device.' How far do you agree? Students plan a response using a three-column frame: evidence the Inspector is a character; evidence he is a device; evidence he is both simultaneously. Students write the introduction and two body paragraphs under timed conditions (15 minutes).",
        differentiation: {
          support: "Provide the introduction on the board for students to adapt or use as a model.",
          core: "Students plan and write independently.",
          stretch: "Students write a third paragraph arguing that the distinction between character and device is a false one -- that Priestley deliberately blurs the line to create a more theatrically powerful figure.",
        },
        resources: ['Essay question slide', 'Planning frame'],
      },
    ],
    plenaryActivity: {
      title: "Goole / Ghoul: The Name's Significance",
      duration: '7 minutes',
      instructions:
        "Teacher reveals the homophone: Goole / Ghoul. Students write three sentences exploring what this name implies about Priestley's intentions. What does the pun suggest about the Inspector's nature? How does it affect our interpretation of his role? Teacher takes two or three responses and uses them to consolidate the lesson's exploration of ambiguity.",
      differentiation: {
        support: "Define 'ghoul' for students and provide a sentence frame.",
        core: "Students write three sentences independently.",
        stretch: "Students consider whether calling the Inspector a 'ghoul' strengthens or weakens readings of him as Priestley's conscience figure.",
      },
    },
    homework:
      "Write a full essay response (400-500 words) to: How does Priestley use the Inspector to deliver his socialist message? Include references to the Inspector's language, his interrogation technique, and his final speech.",
    worksheetQuestions: [
      {
        question:
          "What is the significance of the Inspector's name, Goole? How does this contribute to the play's ambiguity?",
        lines: 4,
        modelAnswer:
          "The name Goole is a homophone of 'ghoul' -- a supernatural creature associated with death and the dead. This ambiguity is deliberate: Priestley never resolves whether the Inspector is a real policeman, a ghost, or a symbol. The name suggests the supernatural, which supports readings of the Inspector as the embodiment of collective guilt or as an agent of divine justice. At the same time, the ambiguity allows the play to work on multiple levels -- realistic police drama and morality play simultaneously.",
        marks: 4,
      },
      {
        question:
          "How does the Inspector's final speech summarise the play's central message?",
        lines: 5,
        modelAnswer:
          "The Inspector's final speech directly states Priestley's socialist thesis: if people do not learn to look after one another, they will be taught to do so through collective suffering -- fire and blood and anguish. The elevated, prophetic register shifts the play from domestic drama to moral parable. The speech addresses not just the Birlings but the entire audience, implicating everyone in the failures it describes. The biblical cadence of the language and the references to mass suffering make clear that Priestley is writing about the real consequences of the individualist philosophy Birling has espoused.",
        marks: 5,
      },
      {
        question:
          "How does the Inspector control each character's confession? What techniques does he use?",
        lines: 5,
        modelAnswer:
          "The Inspector interrogates each character in sequence, having established their connection to Eva before they can deny it. He controls topic management -- determining what is discussed and when -- and refuses to be deflected by social status or indignation. With Birling, he simply dismisses his bluster; with Sheila, he allows genuine emotion to guide the confession; with Mrs Birling, he allows her self-righteousness to condemn her through dramatic irony. The Inspector's technique mirrors a real interrogator's approach: he already knows the answers and is controlling the pace of revelation rather than genuinely seeking information.",
        marks: 5,
      },
      {
        question:
          "Why might Priestley have chosen to make the Inspector's identity ambiguous?",
        lines: 4,
        modelAnswer:
          "By making the Inspector's identity ambiguous, Priestley prevents the play from being dismissed as a simple ghost story or a realistic police procedural. The ambiguity means the Inspector can function simultaneously as a real character, a supernatural figure, and a theatrical symbol of collective conscience. It also allows different audience members to respond differently: those who prefer a realistic reading can see him as a genuine investigator; those who prefer a symbolic reading can see him as moral reckoning made flesh. The ambiguity is structurally essential to the play's final image -- even if the Inspector was not real, the moral truth he uncovered is.",
        marks: 4,
      },
      {
        question:
          "How does the Inspector's 'massiveness, solidity and purposefulness' contrast with the Birlings' world?",
        lines: 4,
        modelAnswer:
          "The stage direction describes the Inspector as creating an impression of 'massiveness, solidity and purposefulness' -- qualities that are the opposite of the Birlings' comfortable, performative world. The Birlings are concerned with surface appearances and social rituals; the Inspector is concerned only with moral truth. His physical presence -- described as not large but somehow imposing -- suggests that moral authority does not require social status. The contrast establishes from his first entrance that the Inspector operates by different rules than the world he is entering.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Students often want to 'solve' the Inspector's identity as if there is a right answer. Emphasise that Priestley's deliberate ambiguity is a strength, not a puzzle to be resolved -- the play works precisely because we cannot be certain.",
      "The name Goole/Ghoul is usually a moment of genuine surprise for students. Use it as a hook to discuss how playwrights embed meaning in apparently minor details.",
      "The Inspector's final speech can be read aloud dramatically -- its prophetic, almost sermon-like quality has real impact when performed. Consider asking a confident student to read it.",
    ],
    targetedSkills: [
      "AO1 -- Interpretation of ambiguous character",
      "AO2 -- Dramatic technique: interrogation method, language of authority",
      "AO3 -- Socialist message and theatrical tradition of the morality play",
      "Constructing and evaluating multiple interpretations",
      "Essay planning and timed writing",
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 8: Responsibility and the Play's Central Theme
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-08',
    title: "Responsibility: The Play's Central Theme and Priestley's Argument",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley uses each character to explore a different aspect of social responsibility",
      "Examine the play's structure as a systematic exposure of collective guilt",
      "Evaluate how Priestley positions the audience in relation to the theme of responsibility",
      "Write a full essay response integrating all five characters' relationships to responsibility",
    ],
    successCriteria: [
      "I can explain how each of the five main characters relates differently to the theme of responsibility",
      "I can analyse how the play's structure reinforces the theme of collective responsibility",
      "I can write a sustained essay argument that integrates AO1, AO2, and AO3",
      "I can reach an evaluative conclusion that goes beyond description to offer a personal, justified judgement",
    ],
    keywords: [
      'collective responsibility',
      'individual responsibility',
      'moral responsibility',
      'social class',
      'welfare state',
      'socialist',
      'denial',
      'acceptance',
      'generational divide',
      'dramatic structure',
    ],
    starterActivity: {
      title: "Responsibility Spectrum",
      duration: '7 minutes',
      instructions:
        "Students place the five main characters on a responsibility spectrum from 'fully accepts responsibility' to 'completely denies responsibility.' They place characters at different points on the line and write a one-sentence justification for each. Class compares placements and discusses where disagreements arise. Teacher frames the question: does the level of responsibility a character accepts tell us something about Priestley's hope for social change?",
      differentiation: {
        support: "Provide a printed spectrum with the five characters' names for students to place.",
        core: "Students draw the spectrum independently and justify each placement.",
        stretch: "Students consider whether the characters' placements change at different points in the play.",
      },
      resources: ['Responsibility spectrum template'],
    },
    mainActivities: [
      {
        title: "Mapping Responsibility Across the Play",
        duration: '20 minutes',
        instructions:
          "Students create a structured summary of how each character relates to the theme of responsibility. For each character, they note: their initial attitude to responsibility; the moment of maximum exposure; their final position at the end of the play. This creates a comparative framework for the essay. Teacher circulates and checks accuracy of evidence.",
        differentiation: {
          support: "Provide a pre-formatted table with some cells pre-filled.",
          core: "Students complete the table independently.",
          stretch: "Students add a fifth column: what Priestley wants the audience to conclude from each character's trajectory.",
        },
        resources: ['Five-character comparison table', 'Play text'],
      },
      {
        title: "Full Essay Writing: Responsibility",
        duration: '25 minutes',
        instructions:
          "Students write a full essay response (under exam conditions, no notes) to the question: How does Priestley explore the theme of responsibility in An Inspector Calls? They should refer to at least three characters and integrate context. Teacher sets a timer: 5 minutes planning, 20 minutes writing. Students are reminded: every paragraph must make an argument, not just describe.",
        differentiation: {
          support: "Provide a paragraph planning frame with opening sentence prompts for each section.",
          core: "Students plan and write independently.",
          stretch: "Students write a conclusion that evaluates which character's treatment of responsibility Priestley finds most significant, and why.",
        },
        resources: ['Essay question slide', 'Timer'],
      },
    ],
    plenaryActivity: {
      title: "Self-Assessment Against the Mark Scheme",
      duration: '5 minutes',
      instructions:
        "Teacher shares the key descriptors for Level 4 (top band) responses. Students read their own essay and highlight: one sentence that demonstrates a clear argument (AO1); one embedded quotation with word-level analysis (AO2); one contextual reference that is integrated into the analysis (AO3). Students then write one target for their next essay attempt.",
      differentiation: {
        support: "Provide a simplified version of the mark scheme descriptors.",
        core: "Students self-assess independently.",
        stretch: "Students identify and annotate a second quote where the analysis is less developed, and write an improved version.",
      },
    },
    homework:
      "Revise the essay written in class. Using the self-assessment targets, rewrite two paragraphs to improve the quality of AO2 analysis and AO3 contextual embedding. Submit both the original and the revised version.",
    worksheetQuestions: [
      {
        question:
          "How does Priestley use the play's structure to explore collective responsibility?",
        lines: 5,
        modelAnswer:
          "Priestley structures the play so that each character is revealed as complicit in Eva Smith's death in sequence, accumulating a sense of shared guilt. The Inspector interrogates each family member in turn, and each revelation adds to the weight of collective responsibility. By the end of the play, no single character is solely responsible -- instead, the whole family's choices have combined to destroy Eva's life. This structural choice embodies Priestley's socialist argument: social injustice is not the product of one villain but of the systemic attitudes of an entire class.",
        marks: 5,
      },
      {
        question:
          "Compare how Mr Birling and Sheila respond to the theme of responsibility. What does this contrast reveal about Priestley's message?",
        lines: 6,
        modelAnswer:
          "Mr Birling's response to responsibility is consistent denial: he argues that his actions as an employer were legitimate, that community responsibility is 'nonsense', and that the Inspector is a fraud when doubt arises. Sheila, by contrast, accepts responsibility immediately and maintains her position even when the Inspector's authenticity is questioned. This contrast is Priestley's argument made structural: the older generation, shaped by capitalism and self-interest, cannot change; the younger generation, given the chance, can. The contrast also implies hope: if Sheila can change, so can the post-war audience Priestley is addressing.",
        marks: 6,
      },
      {
        question:
          "Why is Eva Smith never given a voice in the play? What effect does this have?",
        lines: 4,
        modelAnswer:
          "Eva Smith's silence is a deliberate structural choice. She is always spoken about by other characters, never given the opportunity to speak for herself. This mirrors her actual social position: as a working-class woman in 1912, she had no voice, no legal protection, and no institutional support. Her silence in the play forces the audience to construct her from others' accounts -- accounts which are always partial and self-serving. Priestley uses her absence to make the audience feel the injustice of her voicelessness. She represents everyone whose story is told by those with power rather than by themselves.",
        marks: 4,
      },
      {
        question:
          "How does the play's ending reinforce the theme of responsibility?",
        lines: 5,
        modelAnswer:
          "The final telephone call -- confirming that a real Inspector is on his way to investigate a real suicide -- reinstates the moral weight of what the family has done, just as they were about to escape into comfortable relief. This cyclical structure suggests that moral responsibility cannot be evaded indefinitely: even if this particular Inspector was a fraud, the reality of Eva Smith's suffering and the family's contribution to it remain. Priestley's ending refuses to let the audience off the hook: they cannot leave the theatre reassured. The characters who deny responsibility -- Mr and Mrs Birling -- are implicitly condemned to relive the experience until they learn the lesson.",
        marks: 5,
      },
      {
        question:
          "Why does Priestley choose to dramatise responsibility through a mystery rather than a straightforward morality play?",
        lines: 4,
        modelAnswer:
          "By embedding his socialist message within a detective mystery, Priestley makes his argument dramatically compelling rather than didactic. The audience is engaged in solving the puzzle of Eva's death, and in doing so they absorb the moral argument without feeling lectured. The mystery structure also allows each revelation to build on the last, creating cumulative emotional impact. The ambiguity about the Inspector's identity adds a further layer: the play refuses to let its moral argument be dismissed as mere fantasy. Priestley understood that theatre must entertain as well as instruct -- the mystery genre is his vehicle for social critique.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is best placed near the end of the scheme when students have a full picture of all five characters. The essay task requires them to synthesise knowledge rather than acquiring new information.",
      "The self-assessment activity works best if students have seen the mark scheme descriptors before. If this is their first exposure, take time to explain what 'perceptive' and 'convincing interpretation' mean in practice.",
      "Eva Smith's absence from the play is a rich topic that students often overlook. Her silence is a form of Priestley's argument: systems of oppression silence their victims.",
    ],
    targetedSkills: [
      "AO1 -- Sustained essay argument across a whole play",
      "AO2 -- Structural analysis and pattern of revelation",
      "AO3 -- Collective responsibility and socialist politics",
      "Essay planning and timed writing",
      "Self-assessment against examination criteria",
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 9: The Final Scene and Structural Meaning
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-09',
    title: "The Final Scene: Cyclical Structure, Dramatic Irony, and Unresolved Judgement",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Analyse how Priestley uses the final scene to reinforce the play's central themes",
      "Understand the concept of cyclical dramatic structure and its significance",
      "Examine how the telephone call creates dramatic irony and a sense of unresolved reckoning",
      "Write analytically about the function of an ending in a work of political drama",
    ],
    successCriteria: [
      "I can explain what happens in the final scene and why it is structurally significant",
      "I can analyse how Priestley uses dramatic irony in the final telephone call",
      "I can compare the characters' responses to the final revelation",
      "I can write a paragraph arguing that the ending is the most important moment in the play",
    ],
    keywords: [
      'cyclical structure',
      'dramatic irony',
      'resolution',
      'unresolved',
      'reckoning',
      'symbol',
      'false resolution',
      'moral judgement',
      'theatrical impact',
      'catharsis',
    ],
    starterActivity: {
      title: "Endings That Refuse to End",
      duration: '7 minutes',
      instructions:
        "Teacher presents two types of dramatic ending: a resolution (where the conflict is settled) and a cyclical or unresolved ending (where the play loops back or refuses closure). Students predict: which type of ending does An Inspector Calls have? Why would a political playwright choose an unresolved ending? Class discusses briefly before reading the final scene.",
      differentiation: {
        support: "Provide definitions of resolution and cyclical ending with one example each.",
        core: "Students predict and discuss in pairs.",
        stretch: "Students consider what a resolved ending would look like for An Inspector Calls -- and why Priestley rejected it.",
      },
      resources: ['Ending types slide'],
    },
    mainActivities: [
      {
        title: "Close Reading of the Final Scene",
        duration: '22 minutes',
        instructions:
          "Students read the final pages of the play carefully. They annotate for: (1) dramatic irony -- what do the characters not know that creates irony for the audience? (2) character contrast -- how do Sheila and Eric respond differently from their parents? (3) theatrical effect -- how does the stage direction at the very end create impact? (4) the final telephone call -- why is this so powerful? Class shares annotations. Teacher builds towards the argument that the ending is the play's most powerful structural moment.",
        differentiation: {
          support: "Provide a pre-printed copy of the final scene with three key moments highlighted for annotation.",
          core: "Students annotate freely across all four categories.",
          stretch: "Students write a paragraph arguing that the ending makes the play a moral fable rather than a realistic drama.",
        },
        resources: ['Final scene extract', 'Annotation frame'],
      },
      {
        title: "Writing About Endings",
        duration: '20 minutes',
        instructions:
          "Students write a response (minimum three paragraphs) to the question: How does Priestley use the ending of An Inspector Calls to leave the audience with a clear moral message? Paragraph 1 -- analyse the characters' contrasting responses to the false resolution. Paragraph 2 -- analyse the dramatic irony of the final telephone call. Paragraph 3 -- evaluate what the ending suggests about Priestley's argument. Students peer-assess after 15 minutes.",
        differentiation: {
          support: "Provide an opening sentence for each paragraph.",
          core: "Students write three paragraphs independently.",
          stretch: "Students add a fourth paragraph evaluating whether the ending is more effective than a conventional resolution would have been.",
        },
        resources: ['Writing frame', 'Peer assessment criteria'],
      },
    ],
    plenaryActivity: {
      title: "Final Thoughts: What Has the Inspector Achieved?",
      duration: '6 minutes',
      instructions:
        "Students write a two-sentence final reflection: What has the Inspector actually achieved by the end of the play? Has anything been resolved? Teacher takes four or five responses. The lesson closes with the argument that the Inspector's achievement is not resolution but revelation: he has exposed who each character really is.",
      differentiation: {
        support: "Provide a sentence frame: The Inspector has achieved... because... However...",
        core: "Students write two sentences independently.",
        stretch: "Students consider whether the Inspector's lack of resolution is a weakness of the play or its greatest strength.",
      },
    },
    homework:
      "Write a full analytical response (400-500 words) to the question: How does the ending of An Inspector Calls reinforce Priestley's socialist message? Include references to the cyclical structure, the final telephone call, and the contrasting responses of the characters.",
    worksheetQuestions: [
      {
        question:
          "What happens in the final scene of An Inspector Calls? Why is it dramatically significant?",
        lines: 5,
        modelAnswer:
          "In the final scene, Gerald returns having discovered that there is no Inspector Goole on the police force. The family is relieved -- except for Sheila and Eric, who insist that the moral reality of what they did does not depend on the Inspector's authenticity. As the older Birlings begin to relax into relief, the telephone rings: a real Inspector is coming to investigate the death of a girl. The scene is dramatically significant because it reinstates all the weight the family had just escaped. The false resolution is revealed as illusory. Priestley refuses to let the audience experience comfort.",
        marks: 5,
      },
      {
        question:
          "How does the final telephone call create dramatic irony?",
        lines: 4,
        modelAnswer:
          "The telephone call creates dramatic irony because the audience has just witnessed the family celebrate their apparent escape, and the relief has made them momentarily forget the moral truth. The call immediately undermines this relief: a real investigation is coming. The dramatic irony lies in the audience's awareness that the family's celebration was premature, and in the implication that even a 'fake' Inspector has been succeeded by a real one. The message is clear: moral reckoning cannot be indefinitely avoided, regardless of whether the particular instrument of judgement was genuine.",
        marks: 4,
      },
      {
        question:
          "How do Sheila and Eric respond to the false resolution differently from their parents?",
        lines: 4,
        modelAnswer:
          "When Gerald returns with the news that the Inspector was not genuine, Mr and Mrs Birling immediately retreat to relief and self-congratulation: 'Everything's all right now.' Sheila and Eric insist that nothing has been resolved. Sheila's 'you and I aren't the same people who sat down to dinner here' makes clear that she views her own change as the relevant reality, not the Inspector's credentials. Eric echoes this: the fact of what he did is independent of who discovered it. Their response shows that genuine moral growth does not require external authority to sustain it.",
        marks: 4,
      },
      {
        question:
          "Why is the cyclical structure of An Inspector Calls important to Priestley's purpose?",
        lines: 5,
        modelAnswer:
          "The cyclical structure -- the play begins and ends with the Birlings in their dining room, facing the same moral reckoning -- suggests that individuals who refuse to learn from experience are condemned to repeat it. For the Birlings who denied responsibility, nothing has changed: another Inspector is coming, and the cycle will begin again. For Sheila and Eric, who accepted responsibility, the cycle may be broken. Priestley uses this structure to argue that history -- personal and social -- repeats itself for those who refuse to learn. The welfare state the 1945 audience was being asked to support was precisely Priestley's proposed mechanism for breaking this cycle.",
        marks: 5,
      },
      {
        question:
          "How does the play's ending leave the audience feeling? Is this the response Priestley intended?",
        lines: 4,
        modelAnswer:
          "The ending leaves the audience unsettled rather than reassured. The false resolution of Gerald's revelation offered a brief moment of relief that the final telephone call immediately shatters. This is almost certainly Priestley's intention: a comfortable ending would allow the audience to leave the theatre without engaging with the moral argument. By denying resolution, Priestley ensures that the audience must continue to think about responsibility after the curtain falls. The theatrical experience itself enacts the Inspector's message: there is no comfortable escape from moral accountability.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The moment when Gerald returns with good news is often greeted with genuine relief by students -- which makes the final telephone call land with real impact. Consider performing a reading of the final five minutes of the play for maximum effect.",
      "The cyclical structure is best taught with a visual: draw a circle showing how the play begins and ends in the same place. Students should understand that for the characters who change (Sheila and Eric), the circle is broken.",
      "Connect the ending to the Inspector's speech: he said they would be taught through fire and blood and anguish. The final telephone call is the first step of that teaching. The play's ending is not just unresolved -- it is ominous.",
    ],
    targetedSkills: [
      "AO1 -- Interpretation of dramatic endings and structural choices",
      "AO2 -- Cyclical structure, dramatic irony, stage directions",
      "AO3 -- Political purpose and theatrical impact",
      "Close reading of a key dramatic moment",
      "Evaluating the effectiveness of authorial choices",
    ],
  },

  // ---------------------------------------------------------------------------
  // Lesson 10: Exam Preparation and Essay Technique
  // ---------------------------------------------------------------------------
  {
    id: 'y11insp-10',
    title: "Exam Preparation: Essay Technique, Timing, and Final Revision",
    text: 'An Inspector Calls',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Practise answering exam-style questions on An Inspector Calls under timed conditions",
      "Develop effective essay planning strategies for the Literature examination",
      "Consolidate knowledge of all five characters, the play's themes, and contextual factors",
      "Self-assess against mark scheme descriptors to identify areas for final revision",
    ],
    successCriteria: [
      "I can plan a well-structured essay response in 5 minutes",
      "I can write a Level 4 (top band) introduction that states a clear argument",
      "I can integrate AO1, AO2, and AO3 consistently across my essay",
      "I can accurately self-assess my response against the Edexcel Literature mark scheme",
    ],
    keywords: [
      'essay structure',
      'mark scheme',
      'AO1',
      'AO2',
      'AO3',
      'timed writing',
      'argument',
      'evidence',
      'analysis',
      'evaluation',
    ],
    starterActivity: {
      title: "Good vs Outstanding: Comparing Two Responses",
      duration: '8 minutes',
      instructions:
        "Teacher displays two student responses to the question: How does Priestley present the theme of responsibility? Response A is a competent Level 3 answer; Response B is a Level 4 answer. Students annotate both: what makes Response B stronger? Class identifies three specific differences. Teacher draws out the key distinctions: perceptive interpretation vs description; embedded analysis vs technique-spotting; integrated context vs bolted-on context.",
      differentiation: {
        support: "Provide three criteria on a card: (1) Does it make an argument? (2) Does it analyse language specifically? (3) Is context woven in?",
        core: "Students annotate both responses and identify three differences.",
        stretch: "Students rewrite one weak sentence from Response A using the techniques of Response B.",
      },
      resources: ['Two model response handout'],
    },
    mainActivities: [
      {
        title: "Timed Essay Practice: Full Exam Conditions",
        duration: '35 minutes',
        instructions:
          "Students complete a full timed essay response (35 minutes) to one of the following questions: (A) How does Priestley present the Inspector as a powerful dramatic figure? (B) How does Priestley use the character of Sheila to explore the theme of moral change? (C) How does Priestley present the relationship between social class and moral responsibility? Students spend 5 minutes planning (bullet-point plan on exam paper), then write continuously for 30 minutes. No notes, no play text.",
        differentiation: {
          support: "Provide a planning template with paragraph prompts for each question.",
          core: "Students choose their own question and plan independently.",
          stretch: "Students attempt the question they find least comfortable to extend their range.",
        },
        resources: ['Three question options slide', 'Exam paper', 'Timer'],
      },
      {
        title: "Self and Peer Assessment Against Mark Scheme",
        duration: '10 minutes',
        instructions:
          "Students swap their essay with a partner. Using the Edexcel mark scheme descriptors (provided), they mark their partner's essay: assign a band (1-4); identify one strength in AO1, one in AO2, one in AO3; write one specific target for improvement. Partners return work and discuss feedback for 3 minutes. Each student then writes a self-assessment comment on their own work.",
        differentiation: {
          support: "Provide a simplified two-criteria version of the mark scheme for initial self-assessment.",
          core: "Students use the full mark scheme independently.",
          stretch: "Students write a detailed commentary explaining their mark allocation with specific textual references.",
        },
        resources: ['Edexcel IGCSE Literature mark scheme (simplified)', 'Peer assessment proforma'],
      },
    ],
    plenaryActivity: {
      title: "Rapid Revision: Key Quotations and Essay Phrases",
      duration: '5 minutes',
      instructions:
        "Teacher reads aloud ten key quotations from An Inspector Calls. Students call out the speaker and the thematic significance of each. Teacher then reads five essay phrases (e.g., 'Priestley presents... as a vehicle for...'; 'The structural choice of... reinforces...'). Students write each phrase and add an example from the play. This consolidates both knowledge and academic vocabulary for the examination.",
      differentiation: {
        support: "Provide a quotation bank card that students can refer to during the activity.",
        core: "Students recall quotations and meanings from memory.",
        stretch: "Students generate their own essay phrases for each quotation rather than using teacher prompts.",
      },
    },
    homework:
      "Write a revision summary card for An Inspector Calls covering: five key quotations with technique and effect; three contextual points with specific textual links; one evaluative judgement about the play's most important theme. Bring the card to the next lesson as a revision resource.",
    worksheetQuestions: [
      {
        question:
          "Write a Level 4 introduction (approximately 80 words) to the following question: How does Priestley use Mr Birling to present the dangers of capitalism?",
        lines: 8,
        modelAnswer:
          "In An Inspector Calls, Priestley uses Mr Birling as a deliberate caricature of the capitalist class, constructing him as a figure whose confident self-interest is systematically exposed as dangerous and delusional. Written in 1945 but set in 1912, the play exploits dramatic irony to undermine Birling's authority: his famous predictions about the Titanic and the impossibility of war have already been proven catastrophically wrong before the audience. Through Birling's language, stage directions, and moral trajectory, Priestley argues that the philosophy of individual self-interest -- of minding one's own business -- is not merely selfish but actively destructive to the social fabric.",
        marks: 8,
      },
      {
        question:
          "What are the three Assessment Objectives for Edexcel IGCSE English Literature? Give one example of how to demonstrate each in an essay about An Inspector Calls.",
        lines: 6,
        modelAnswer:
          "AO1 requires a personal, critical response supported by textual evidence -- for example, arguing that Mrs Birling is the most morally culpable character because she holds institutional power and uses it to actively harm Eva. AO2 requires analysis of language, form, and structure -- for example, analysing how the phrase 'her sort' reduces Eva to a category and reveals Mrs Birling's class prejudice. AO3 requires awareness of context and how it shapes meaning -- for example, explaining that charitable institutions in 1912 were often tools of class control rather than genuine welfare.",
        marks: 6,
      },
      {
        question:
          "What are the five most important quotations from An Inspector Calls for examination purposes? Justify each choice.",
        lines: 8,
        modelAnswer:
          "1) 'A man has to mind his own business and look after himself and his own' (Birling, Act 1): demonstrates capitalist self-interest and is directly contradicted by the Inspector's thesis. 2) 'We are members of one body. We are responsible for each other' (Inspector): states the play's central socialist argument explicitly. 3) 'I know I'm to blame -- and I'm desperately sorry' (Sheila): marks the beginning of genuine moral change. 4) 'You and I aren't the same people who sat down to dinner here' (Sheila, Act 3): confirms the generational divide and the reality of moral growth. 5) 'If men will not learn that lesson, then they will be taught it in fire and blood and anguish' (Inspector): prophetic warning that connects the play's events to the two World Wars.",
        marks: 8,
      },
      {
        question:
          "Explain the difference between describing what a character does and analysing what a playwright does. Give one example of each from An Inspector Calls.",
        lines: 5,
        modelAnswer:
          "Description tells the reader what happens: 'The Inspector enters and questions each character in turn.' Analysis explains how and why the playwright has made specific choices: 'Priestley structures the Inspector's interrogation to move from least to most morally culpable, ensuring that the greatest shock -- Mrs Birling's role -- comes at the moment of maximum dramatic tension.' The second example names the playwright's technique (structural ordering), explains its effect (building to maximum impact), and implies purpose (making the audience respond with maximum outrage). IGCSE mark schemes reward analysis, not description.",
        marks: 5,
      },
      {
        question:
          "Write a concluding paragraph (approximately 60 words) for an essay on the theme of responsibility.",
        lines: 6,
        modelAnswer:
          "Ultimately, Priestley's treatment of responsibility in An Inspector Calls is both a moral argument and a structural achievement. By distributing guilt across every member of the Birling family, he demonstrates that social injustice is systemic rather than individual. The play's refusal to resolve this guilt -- the final telephone call ensures the cycle begins again -- makes his argument inescapable: responsibility is not a matter of being caught, but of being willing to look honestly at what we have done.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "This lesson works best as the final lesson before examination or mock examination. Students should arrive having revised key quotations at home.",
      "The comparison of Level 3 and Level 4 responses is the most valuable learning activity in this lesson. Source genuine student responses (anonymised) if possible -- they are more credible than teacher-written examples.",
      "The timed essay should be completed in full silence with a visible timer. Resist the temptation to offer support during the 30-minute writing period -- students need practice operating without a safety net.",
      "Peer assessment is most useful when students are given specific criteria. Vague feedback ('this is good') is not helpful. Insist on specific, textually referenced feedback.",
    ],
    targetedSkills: [
      "AO1 -- Sustained independent argument under timed conditions",
      "AO2 -- Embedded analysis without teacher support",
      "AO3 -- Contextual integration in essay writing",
      "Examination technique: planning, timing, self-assessment",
      "Metacognitive skills: identifying strengths and targets",
    ],
  },
];
