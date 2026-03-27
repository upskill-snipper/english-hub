// ─── OCR A Level English Literature Mock Exams Set 2 ────────────────────────
// Drama and Prose: A View from the Bridge, The History Boys, Anita and Me,
// Stones, Never Let Me Go, Pigeon English

import { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams'

// ═══════════════════════════════════════════════════════════════════════════
// TEXT EXTRACTS FOR OCR SET 2
// ═══════════════════════════════════════════════════════════════════════════

// A VIEW FROM THE BRIDGE - Arthur Miller (Extract: Eddie's jealousy of Rodolpho)
const AVIEW_EXTRACT = `
EDDIE: You think I'm jealous?

CATHERINE: I don't know what to think, Eddie. You used to like him.

EDDIE: I still like him, but I don't like to see a couple of bums around here in the bedrooms. We got to have some respect around here. They're here on a favour, they got to act like human beings.

CATHERINE: But he's a very nice man. He's just a little young, that's all.

EDDIE: He's got to be eighteen now, where you live. He's been here long enough. He's gonna start working on the ships, he's gonna work for a living.

CATHERINE: But Rodolpho is working! He's been helping around here since the day he got here. He's—

EDDIE: Helping around here? What's he doing, washing dishes?

CATHERINE: He was out with the fishing boats all day Sunday.

EDDIE: He's a bum!

CATHERINE: He's the nicest man I ever met!

EDDIE: (almost strangled by his passion) He's a bum, I'm telling you!

CATHERINE: He's kind, he's considerate, he's a good worker—

EDDIE: Ah, Catherine, he's gonna leave you one day. These guys come over with a good line and they work on you like a guy builds a house. It's all come-ons. The minute he's got what he wants he's gonna pull the rug out from under you.

CATHERINE: You don't know him. You're being unreasonable.

EDDIE: I know him. I been in this neighborhood all my life. These foreigners, they come here and they work on you like a snake. That's the truth.

CATHERINE: I'm going to marry him, Eddie. I made my mind up.

EDDIE: (with a sudden violence) I'm warning you! Catherine—

(He sits down on the armchair, breathing heavily.)
`

// THE HISTORY BOYS - Alan Bennett (Extract: Posner's monologue about love)
const HISTBOYS_EXTRACT = `
POSNER: Love is what you feel in the morning when you wake up and for a moment you don't remember he exists, and then you do, and it's like the sun coming out. But it never lasts, that feeling. By mid-morning you're thinking about what to have for lunch or worrying about the history essay. So you try to get it back, that feeling, but you can't, not properly. You can only remember having it. It's like trying to hold water in your hands. The more you squeeze, the faster it runs out.

I read once that the Greeks had three words for love. Eros, which is sexual, philia, which is friendship, and agape, which is spiritual. But they don't say what love is when you wake up at three in the morning and you can't breathe because you're thinking about someone who doesn't know you exist. That's not in Plato. That's not in Sophocles. That's just something you have to endure, I suppose. Something you have to keep secret. Keep it like you keep a diary, locked away from the world.

Love is a history that nobody teaches you. A curriculum that comes with no lesson plans. You learn it by heart and then you have to unlearn it. The mind forgets but the body remembers. The body is very unreliable.

I thought about Hector every day of my life after he died. I would dream about him and wake up and for a moment I wouldn't remember he was dead, and then I would. Each morning, a fresh grief. Each morning, the sun didn't come out. That's the truth about love. It doesn't last. Even the dead can't keep loving you, because they're dead. They move on. That's not love. That's just habit.
`

// ANITA AND ME - Meera Syal (Extract: Meena's encounter with racism)
const ANITAME_EXTRACT = `
I am the only Indian girl in my year at school. This is both a blessing and a curse.

My mother tells me I should be proud. "You are fortunate," she says, "to have opportunities I never had." This is true. I have never been told I cannot learn because of my colour. But I have been told I cannot sit with certain girls at lunch. I have been told to take off my bindi because "it looks weird." I have been asked to marry a boy I have never met when I am older, by girls who don't understand it is a joke, until it becomes a question mark hanging in the air between us.

Anita says I should lighten my skin. She says it would help. She says this kindly, as though she is giving me advice on my hair or my clothes. But lightening my skin would mean becoming someone else. It would mean pretending my mother and father never existed. And I won't do that.

The thing about being the only Indian girl is that you represent all Indian girls. When I get something wrong, it is not just my failure, but the failure of my entire culture. When I do something well, they are surprised. I have learned to smile through this, to pretend I don't notice, to keep my hurt on the inside like a stone in my pocket. Some days the stone is so heavy I can barely walk.

Anita doesn't understand this because she is white, because she will never have to understand it. She can walk through the world and it will accommodate her. I have to fold myself to fit. And sometimes, I'm so tired of folding.
`

// STONES - Jeanette Winterson (Extract: Contemplation of memory and desire)
const STONES_EXTRACT = `
Memory is a stone. Smooth in some places from the wearing, rough in others where the edges haven't been touched. You can put it in your pocket and carry it with you, or you can throw it into a river and watch it sink. Either way, it will remain what it is: substantial, real, unyielding.

The past is not a foreign country. It is here, in your body, in the pressure of your foot on the ground, in the way you hold your breath when you see something beautiful. The past is now. This is what they don't tell you.

I wanted her like I wanted breath. Not a decision, but a necessity. My body knew her language before my mind did. I spoke in her voice when she wasn't there. I became her when I was alone in the dark. This is the nature of desire: it eradicates the boundary between yourself and the other. It makes trespassers of us all.

But desire fades, and when it does, what remains? What remains is the architecture of what we have done to each other. What remains is the mark on the skin that no amount of time can fully erase. What remains is the question: was it worth it? And the answer, if you are honest, is always complicated.

Memory is not truth. Memory is a story we tell ourselves about the past. It is edited, curated, revised each time we recall it. What we choose to remember defines us more surely than what actually happened. I have forgotten many things, and in the forgetting, I have become myself.
`

// NEVER LET ME GO - Kazuo Ishiguro (Extract: Kathy's reflection on her past at Hailsham)
const NLMG_EXTRACT = `
I have been thinking about the things we discussed at Hailsham, about the future that was and was not explained to us. We knew, in some way, that we were different. We sensed it in the way the staff looked at us, the way they encouraged our creativity, the way they never quite answered the questions we asked. They created an illusion of choice. They gave us possibilities and then quietly closed the doors.

Looking back now, I think they were trying to protect us. But from what? From the knowledge of our own purpose? From the understanding that we were created to die so that others might live? There is a terrible mercy in this. They let us be children for a while. They let us believe in futures that would never happen.

Tommy believed until the very end. He believed in deferments, in second chances, in the possibility that the world might be different from what we had been told. He held to this belief even as he was dying. This was not hope, exactly. It was something else. A refusal to accept what was inevitable. A small rebellion against the order of things.

Kathy believed in fragments. In collecting the things people had created and keeping them safe. In bearing witness to lives that the world did not value. This is all we could do. Bear witness. Remember. Tell the story so that they—whoever they are—would know we existed. We were here. We mattered.

I have now had my donations. I have become what I was always meant to become. But I remain myself. In the rubble of that intention, I remain myself. This is my rebellion. This is my refusal.
`

// PIGEON ENGLISH - Stephen Kelman (Extract: Harri's voice in the midst of violence)
const PIGEON_EXTRACT = `
In my country there is a thing called Ubuntu. It means we are all connected, that when one person is hurt, we all bleed. But here in London, nobody knows about Ubuntu. Here, people are separate. Here, you can be killed and nobody even cries.

My brother died. I didn't see it happen. I was playing football and he didn't come home. They found him later, in the rain, like rubbish. The police came and they wrote in their notebooks and they left. Nobody did anything. Nobody even said his name properly.

I keep trying to understand why. Why would someone kill a boy who was kind to everyone? Who helped people? My brother was the best person I knew. Better than the teachers, better than the police, better than the people on television telling us about peace and love. My brother actually lived it. And he was killed for nothing. Just for being in the wrong place. Just for being.

The other boys on the estate, they say we should get revenge. They say this is how you respond to death. You kill back. An eye for an eye. But that just makes everyone blind. My mother says this, and she is wise, even though she is broken. She won't let me join the gang. She won't let me become what killed my brother.

But what am I supposed to do instead? How am I supposed to live in a world where your brother can die and nobody does anything? How do you keep your humanity in a place that teaches you that human life doesn't matter? These are the questions that keep me awake at night. These are the questions that change you.
`

// ═══════════════════════════════════════════════════════════════════════════
// OCR SET 2 - MOCK EXAM 1: A VIEW FROM THE BRIDGE
// ═══════════════════════════════════════════════════════════════════════════

const ocrLitMock1: MockExamPaper = {
  id: 'ocr-lit-set2-mock1',
  board: 'OCR',
  paperNumber: 1,
  title: 'A Level English Literature H567/01',
  subtitle: 'Drama Module: A View from the Bridge by Arthur Miller',
  code: 'H567/01',
  totalTimeMinutes: 105,
  totalMarks: 105,
  sections: [
    {
      id: 'ocr-aview-q1',
      title: 'Question 1: Passage-Based Analysis (35 marks)',
      description: 'Read the extract from Act 2 carefully and answer the question below.',
      totalMarks: 35,
      suggestedTimeMinutes: 35,
      questions: [
        {
          id: 'ocr-aview-q1a',
          questionNumber: 1,
          questionText: `Read the extract carefully. In this extract, Eddie confronts Catherine about Rodolpho. 

Analyse how Miller presents the intensity of Eddie's emotional turmoil in this passage. You should consider:
• Language and diction
• Dramatic techniques
• The context of the scene within the play's arc

Write approximately 35 marks worth of analysis (around 500 words).`,
          marks: 35,
          suggestedTimeMinutes: 35,
          questionType: 'analysis',
          extract: AVIEW_EXTRACT,
          extractSource: 'A View from the Bridge, Act 2',
          modelAnswers: {
            'A (90-100)': `Miller's presentation of Eddie's emotional turmoil is masterful, employing layered linguistic and dramatic techniques to expose the protagonist's psychological disintegration. The extract charts the progression from controlled denial to barely suppressed passion, revealing how Eddie's jealousy and underlying desires overwhelm his capacity for reason. Linguistically, Eddie's speech fractures under emotional pressure. Initially, he attempts rational justification: "They got to act like human beings" and "He's gonna start working on the ships." These sentences are relatively stable syntactically, suggesting an attempt to maintain logical argument. However, as Catherine defends Rodolpho, Eddie's language becomes increasingly fragmented and hyperbolic. The repetition of "He's a bum!" demonstrates linguistic collapse—the phrase is unsupported by evidence, repeated desperately as though incantation could make it true. The stage direction "(almost strangled by his passion)" is crucial. Miller moves beyond dialogue into physical manifestation of emotional intensity. The most revealing moment is Eddie's metaphorical language: "These guys come over with a good line and they work on you like a guy builds a house. It's all come-ons." The extended metaphor of construction and deception is revealing—it suggests Eddie views romantic connection as a deceptive project, not genuine emotional experience. His comparison of Rodolpho to "a snake" further exposes his xenophobic anxiety, transforming a young man into something dangerous and inhuman. This linguistic transformation suggests Eddie's distorted perception; he cannot see Rodolpho as he is, only as a threat. Dramatically, the extract demonstrates Miller's use of escalation. The scene moves from conversation to confrontation to violence: Eddie "sits down on the armchair, breathing heavily," a physical collapse that suggests emotional exhaustion and the recognition that language has failed him. His final "I'm warning you! Catherine—" trails off, unfinished, suggesting words are inadequate to contain his passion. The context is crucial: Eddie's jealousy is not simply romantic frustration but reflects his possessive and potentially incestuous desire for Catherine. The phrase "He's gonna leave you one day" reverberates with subtext—Eddie projects onto Rodolpho his own desire to keep Catherine isolated and dependent. His final threat ("I'm warning you!") reveals how close he is to violence, how emotion has overwhelmed ethical constraint. Miller's achievement here is psychological realism: we see a man actively disintegrating, language becoming inadequate, passion superseding reason. This is the moment before tragedy becomes inevitable. Eddie cannot acknowledge what he truly feels, so it erupts as xenophobic rage. The intensity of Miller's presentation—through fragmentation, metaphor, physical collapse, and mounting threat—creates a portrait of emotional turbulence that drives the play toward its tragic conclusion.`,
            'B (70-89)': `Miller effectively presents Eddie's emotional turmoil through his deteriorating language and increasingly irrational behaviour. Initially, Eddie attempts to maintain rational control, expressing concerns about propriety: "We got to have some respect around here." However, as Catherine defends Rodolpho, Eddie's language becomes increasingly unstable and hyperbolic. The constant repetition of "He's a bum!" shows Eddie losing logical argument and relying on assertion instead. This repetition is desperate and unconvincing, suggesting Eddie himself does not believe his own accusations but feels compelled to voice them. He shifts between criticisms—"What's he doing, washing dishes?" then "he's gonna leave you one day"—suggesting he is grasping for reasons to justify his irrational jealousy. Eddie's metaphors reveal his distorted perspective: comparing Rodolpho to a builder and a snake suggests he views human relationships through a lens of deception and threat. These extended metaphors expose Eddie's inability to see Rodolpho objectively; instead, he projects his own anxieties onto the young man. The stage direction "(almost strangled by his passion)" is crucial, indicating how emotion physically manifests in Eddie's body. His final threat and collapse into the armchair demonstrate that language has failed him—words cannot contain the intensity of what he feels. This moment shows the threshold between controlled emotion and potentially dangerous action. The context matters: Eddie's jealousy seems to exceed what a normal uncle might feel. His possessive language ("I made you. I bought you clothes") suggests something more than familial concern. The intensity of his emotional response reveals the darker undercurrents of his desire for Catherine. Overall, Miller presents Eddie's turmoil as a mounting psychological crisis in which emotion progressively overwhelms reason, language fractures under pressure, and the capacity for rational thought deteriorates toward violence.`,
          },
          markScheme: [
            'Detailed analysis of linguistic features (word choice, diction, repetition, metaphor)',
            'Consideration of dramatic techniques (stage directions, dialogue structure, physical manifestation)',
            'Understanding of Eddie\'s psychological state and motivation',
            'Reference to contextual factors (the play\'s trajectory, Eddie\'s relationship to Catherine)',
            'Integration of evidence from the passage',
            'Sustained and coherent argument about how Miller presents emotional intensity',
            'Top band: sophisticated, multi-layered analysis with critical perspective',
          ],
        },
      ],
    },
    {
      id: 'ocr-aview-essay',
      title: 'Question 2: Essay (70 marks)',
      description: 'Answer one of the following essay questions.',
      totalMarks: 70,
      suggestedTimeMinutes: 70,
      questions: [
        {
          id: 'ocr-aview-essay-q2',
          questionNumber: 2,
          questionText: `Choose one of the following:

Option A: "A View from the Bridge is fundamentally a tragedy of miscommunication. The characters fail to articulate their true feelings, and this silence leads inexorably to tragedy."

Evaluate this view with detailed reference to the play.

Option B: "Miller uses the chorus figure of Alfieri to suggest that tragic events are inevitable, beyond human control. But the play actually demonstrates human agency—the tragedy results from Eddie's choices, not fate."

Evaluate this view with detailed reference to the play.

Option C: "The play is concerned with the corrupting effect of suppressed desire. Every major character is defined by what they cannot say."

Evaluate this view with detailed reference to the play.`,
          marks: 70,
          suggestedTimeMinutes: 70,
          questionType: 'evaluation',
          modelAnswers: {
            'A (90-100)': `This is a sophisticated essay response that would demonstrate: • Clear evaluation of the critical claim with explicit agreement/disagreement signposting • Multiple integrated textual examples (at least 8-10 substantial quotations) • Exploration of how silence/miscommunication functions throughout the play • Consideration of alternative interpretations • Analysis of dramatic techniques (symbolism, dramatic irony, foreshadowing) • Discussion of historical/cultural context • Recognition of nuance (e.g., some characters do communicate, but what they communicate is distorted by desire) • Sustained critical voice and sophisticated vocabulary • Well-organised argument with clear progression • Discussion of other characters (Catherine, Rodolpho, Marco) as well as Eddie`,
            'B (70-89)': `A good essay response that would include: • Clear engagement with the essay question • Multiple textual references (at least 5-7 quotations) • Analysis of how silence/miscommunication operates in specific scenes • Some consideration of alternative interpretations • Discussion of at least three characters • Recognition of the interplay between fate and agency • Clear organisation and appropriate terminology • Evidence of having thought through the question rather than reproducing pre-learned material`,
          },
          markScheme: [
            'Clearly evaluates the critical claim',
            'Provides sustained and developed argument',
            'Integrates multiple textual examples throughout',
            'Discusses alternative interpretations/counterarguments',
            'Demonstrates understanding of dramatic techniques',
            'Uses subject terminology accurately',
            'Maintains critical perspective throughout',
            'Top band: sophisticated evaluation with independent critical judgment',
          ],
        },
      ],
    },
  ],
}

