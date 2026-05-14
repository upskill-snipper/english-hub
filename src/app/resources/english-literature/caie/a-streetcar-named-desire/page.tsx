"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/* ─── Data ───────────────────────────────────────────────────── */

const characters = [
  {
    name: "Blanche DuBois",
    description:
      "A former Southern belle and English teacher who arrives at her sister Stella's New Orleans apartment in a state of nervous fragility. Blanche is the play's tragic protagonist, a woman caught between the genteel values of the Old South and the harsh realities of a changing America. She uses fantasy, performance, and deception to shield herself from a past scarred by her young husband Allan Grey's suicide, her sexual indiscretions, and the loss of the family estate Belle Reve. Her dependence on 'the kindness of strangers' reveals both her vulnerability and her inability to survive without the illusions she constructs. Williams presents her with deep sympathy: she is manipulative and dishonest, yet her need for beauty and tenderness is genuine. Her descent into madness is not merely personal collapse but Williams' indictment of a brutal world that destroys those who cannot adapt to it.",
  },
  {
    name: "Stanley Kowalski",
    description:
      "Stella's husband, a Polish-American factory worker and former military man who embodies raw, primal masculinity. Stanley is territorial, sexually dominant, and deeply suspicious of Blanche's pretensions. He represents the new, multicultural, working-class America that has displaced the old plantation aristocracy. His investigation into Blanche's past is methodical and ruthless, and his rape of Blanche in Scene 10 is the play's most devastating act of violence — both physical and symbolic. Williams refuses to make Stanley a simple villain: he is charismatic, genuinely passionate about Stella, and his anger at Blanche's snobbery has some justification. However, his brutality ultimately exposes the destructive potential of unchecked masculine power.",
  },
  {
    name: "Stella Kowalski",
    description:
      "Blanche's younger sister, who has abandoned the DuBois family's fading gentility to live with Stanley in the French Quarter. Stella is caught between her loyalty to Blanche and her sexual and emotional dependence on Stanley. She represents a compromise between the Old South and the New America, choosing desire and physical passion over refinement. Her decision at the end of the play to commit Blanche to a mental institution rather than believe her account of Stanley's rape is the play's most morally complex moment: Stella chooses survival and her marriage over truth and sisterhood. Williams uses Stella to show how complicity and denial sustain systems of power.",
  },
  {
    name: "Harold Mitchell (Mitch)",
    description:
      "Stanley's friend and co-worker at the factory, a gentle, somewhat awkward man who lives with and cares for his dying mother. Mitch represents Blanche's last hope for a stable, respectable future. Their courtship is tender and genuine — both are lonely people seeking companionship. However, when Stanley reveals Blanche's sexual history, Mitch turns on her with cruelty, declaring she is not 'clean enough' to bring into his mother's house. His rejection exposes the sexual double standard at the heart of 1940s American society: men may be sexually experienced, but women who transgress are condemned. Mitch's final appearance, weeping at Blanche's removal, suggests guilt but not redemption.",
  },
  {
    name: "Eunice Hubbell",
    description:
      "Steve's wife, who lives in the apartment above the Kowalskis. Eunice functions as a mirror for Stella: she too endures a volatile relationship marked by arguments and reconciliations. Her advice to Stella in Scene 11 — 'Don't ever believe it. Life has got to go on. No matter what happens, you've got to keep on going' — articulates the play's pragmatic philosophy of survival through wilful denial. Eunice normalises the cycle of male violence and female submission that defines the world of Elysian Fields.",
  },
  {
    name: "Steve Hubbell",
    description:
      "Eunice's husband and one of Stanley's poker-playing friends. Steve and Eunice's relationship provides a parallel to Stanley and Stella's: marked by domestic conflict, physical aggression, and passionate reconciliation. Their fights, audible from upstairs, establish the environment of Elysian Fields as one where violence between men and women is routine and accepted. Steve's presence reinforces the idea that Stanley's behaviour is not exceptional but systemic.",
  },
];

const themes = [
  {
    name: "Desire & Sexuality",
    detail:
      "Desire drives every major character and relationship in the play. The streetcar named 'Desire' that brings Blanche to Elysian Fields is both literal and symbolic: desire is the force that has shaped her past (her love for Allan, her subsequent promiscuity) and will determine her future. Stanley and Stella's relationship is founded on intense sexual attraction that Stella describes in explicitly physical terms. Williams presents desire as a fundamental human force — powerful, amoral, and inescapable — but also as something that can be either tender (Blanche and Mitch's courtship) or violently destructive (Stanley's rape of Blanche). The play refuses to moralise about sexuality; instead, it shows how society's rigid codes around sexual behaviour punish women disproportionately.",
  },
  {
    name: "Fantasy vs Reality",
    detail:
      "Blanche constructs elaborate fantasies to shield herself from painful truths: she lies about her age, her drinking, her sexual history, and the circumstances of her departure from Laurel. She covers the bare lightbulb with a paper lantern, literally refusing to be seen in harsh light. Yet Williams does not simply condemn her dishonesty. In a world as brutal as Stanley's, Blanche's fantasies represent a longing for beauty, kindness, and meaning — values that the 'realistic' characters have abandoned. The tension between Blanche's illusions and Stanley's aggressive truth-telling is the play's central conflict. Williams suggests that pure realism can be as destructive as pure fantasy: Stanley's insistence on 'facts' is itself a form of violence.",
  },
  {
    name: "Masculinity & Power",
    detail:
      "Stanley embodies a raw, aggressive masculinity that dominates the domestic space of the Kowalski apartment. He asserts his authority through physical intimidation (smashing plates, striking Stella), sexual dominance, and the legal and social power that 1940s American society grants to husbands. His investigation of Blanche's past is an exercise of power disguised as truth-seeking. The poker night in Scene 3 is a ritual of masculine territory-marking. Williams critiques this model of masculinity not by making Stanley wholly unsympathetic but by showing its consequences: Stella's submission, Mitch's conformity to the group's values, and Blanche's destruction. The play asks whether a society built on such power structures can accommodate tenderness, vulnerability, or difference.",
  },
  {
    name: "Decline of the Old South",
    detail:
      "Blanche is the last representative of the DuBois family and the plantation culture of Belle Reve ('beautiful dream'). The loss of the estate through the 'epic fornications' of the DuBois men symbolises the collapse of the Old South's moral authority: the aristocratic class that claimed gentility and refinement was built on slavery, exploitation, and hypocrisy. Blanche's arrival in the industrial, multiethnic world of New Orleans marks the historical transition from the agrarian Old South to the urban New America. Williams treats this decline with ambivalence: the Old South's values of beauty, culture, and courtesy are genuinely mourned, even as their foundation in inequality is acknowledged.",
  },
  {
    name: "Madness & Isolation",
    detail:
      "Blanche's psychological fragility is established from her first entrance and deteriorates steadily throughout the play. Williams externalises her inner turmoil through theatrical devices: the Varsouviana polka (the music playing when Allan died) intrudes on her consciousness at moments of stress; the 'lurid reflections' and 'inhuman voices' of Scene 10 represent her dissociation from reality. Her final removal to a mental institution is both a personal tragedy and a social commentary: Blanche is not simply 'mad' but has been driven to breakdown by grief, guilt, sexual violence, and the refusal of those around her to offer genuine compassion. Williams draws on his own sister Rose's lobotomy to infuse this theme with personal anguish.",
  },
];

const sceneSummary = [
  {
    scene: "Scene 1",
    summary:
      "Blanche arrives at Elysian Fields, visibly out of place in the working-class neighbourhood. She finds Stella's cramped two-room apartment and is shocked by the conditions. She reveals that Belle Reve, the family estate, has been lost. Stanley returns from bowling and is immediately suspicious of Blanche. Blanche tells Stella the estate was lost through a series of deaths and debts.",
    keyQuotations: [
      {
        quote: "They told me to take a streetcar named Desire, and then transfer to one called Cemeteries and ride six blocks and get off at — Elysian Fields!",
        analysis:
          "Blanche's journey is an allegory: Desire led to death (Cemeteries) and finally to a pagan afterlife (Elysian Fields). Williams maps her emotional trajectory onto the geography of New Orleans, foreshadowing her fate from the very first lines.",
      },
      {
        quote: "I have always depended on the kindness of strangers",
        analysis:
          "Though this line recurs at the play's end, its thematic significance is established early. It reveals Blanche's vulnerability, her lack of agency, and her dependence on performance and charm to survive. The word 'strangers' carries both pathos and irony: strangers have exploited her as often as they have helped.",
      },
    ],
    stageDirections:
      "Williams describes Blanche as having 'a moth-like quality' and wearing 'a white suit with a fluffy bodice' — the moth symbolism suggests fragility and attraction to destructive light, while white connotes a purity that is already compromised.",
  },
  {
    scene: "Scene 2",
    summary:
      "Stanley confronts Blanche about the loss of Belle Reve, citing the Napoleonic Code which entitles him to Stella's share of any property. He rummages through Blanche's trunk, examining her furs, jewellery, and papers. Blanche flirts with Stanley to deflect his aggression. Stella returns and the sisters leave for dinner while Stanley hosts a poker night.",
    keyQuotations: [
      {
        quote: "In the state of Louisiana we have the Napoleonic code according to which what belongs to the wife belongs to the husband and vice versa.",
        analysis:
          "Stanley's invocation of the law reveals his understanding of marriage as ownership. The Napoleonic Code is a real legal framework, but Williams uses it to expose the property-based logic underlying Stanley's masculinity: he sees Stella — and by extension Blanche — as assets to be controlled.",
      },
    ],
    stageDirections:
      "Stanley's handling of Blanche's possessions — pulling out her clothes, scattering her papers — is a physical violation of her privacy that foreshadows the sexual violation of Scene 10.",
  },
  {
    scene: "Scene 3 — The Poker Night",
    summary:
      "Stanley and his friends play poker. Blanche meets Mitch, who is gentler than the others and cares for his dying mother. They share a moment of connection. Stanley, drunk and angry at the disruption, smashes a radio and strikes Stella. The men restrain him under a cold shower. Stella leaves with Blanche to Eunice's apartment upstairs, but Stanley calls for her with animal desperation and she returns to him.",
    keyQuotations: [
      {
        quote: "STELLA! ... STELL-LAHHHHH!",
        analysis:
          "Stanley's primal scream is one of the most famous moments in American drama. The elongated, animalistic cry reduces language to pure need. It demonstrates the power of desire over reason: despite the violence, Stella is drawn back to Stanley. Williams stages this as both disturbing and magnetic, refusing to let the audience dismiss Stanley entirely.",
      },
      {
        quote: "I can't stand a naked light bulb, any more than I can a rude remark or a vulgar action",
        analysis:
          "Blanche's aversion to harsh light is central to the play's symbolism. Light represents truth, scrutiny, and the ageing she fears. Her preference for softness, dimness, and illusion is both self-protective and self-deceptive. Williams links physical lighting to emotional and moral exposure.",
      },
    ],
    stageDirections:
      "Williams titles his notes for this scene 'The Poker Night' and references Van Gogh's painting 'The Night Cafe' — the lurid primary colours of the poker table contrast with Blanche's preference for soft pastels, visualising the clash between Stanley's world and hers.",
  },
  {
    scene: "Scene 4",
    summary:
      "The morning after the poker night. Blanche is horrified that Stella has returned to Stanley and urges her to leave him. Stella defends her marriage, describing the intensity of her physical relationship with Stanley. Blanche delivers an impassioned speech about Stanley's brutishness, unaware that he is listening from the doorway.",
    keyQuotations: [
      {
        quote: "He acts like an animal, has an animal's habits! ... Thousands of years have passed him right by, and there he is — Stanley Kowalski — survivor of the Stone Age!",
        analysis:
          "Blanche's speech articulates the play's central opposition between civilisation and primitivism. Her rhetoric is eloquent but also snobbish and classist: she equates working-class masculinity with evolutionary regression. Williams ensures the audience hears Stanley overhearing this, creating dramatic irony and sealing Blanche's fate — Stanley will now pursue her destruction with full motivation.",
      },
    ],
    stageDirections:
      "The stage direction 'the 'blue piano' plays softly' underscores Stella's emotional state — the blue piano throughout the play represents the vitality and melancholy of life in the French Quarter.",
  },
  {
    scene: "Scene 5",
    summary:
      "Blanche writes a letter to an old admirer, Shep Huntleigh, fabricating a glamorous social life. She and Stella discuss Blanche's relationship with Mitch. Blanche reveals her anxiety about her reputation from Laurel. She encounters a young newspaper collector and kisses him before sending him away.",
    keyQuotations: [
      {
        quote: "I've got to be good and keep my hands off children",
        analysis:
          "This disturbing line foreshadows the revelation of Blanche's sexual relationship with a seventeen-year-old student in Laurel. Williams makes the audience complicit: we are drawn to sympathise with Blanche, yet this moment complicates that sympathy. It reveals the compulsive nature of her desire and her awareness that it is self-destructive.",
      },
    ],
    stageDirections:
      "The encounter with the Young Man is staged with 'a kind of breathless tenderness' — Williams uses soft lighting and the distant blue piano to create an atmosphere that is both romantic and unsettling.",
  },
  {
    scene: "Scene 6",
    summary:
      "Blanche and Mitch return from a date. They share an intimate conversation in which Blanche tells Mitch about her young husband Allan Grey, who she discovered in a sexual encounter with an older man. At a dance, she told him 'I saw! I know! You disgust me!' — and he ran outside and shot himself. The Varsouviana polka, the music playing at the moment of his death, haunts her still.",
    keyQuotations: [
      {
        quote: "I saw! I know! You disgust me!",
        analysis:
          "These three short, brutal sentences are the cause of Blanche's guilt and psychological disintegration. The monosyllabic rhythm hammers like gunshots (foreshadowing Allan's suicide). Blanche's condemnation of Allan's homosexuality mirrors the intolerance of the society Williams himself faced as a gay man. The line is both Blanche's greatest cruelty and her greatest wound.",
      },
      {
        quote: "And then the searchlight which had been turned on the world was turned off again and never for one moment since has there been any light stronger than this — kitchen — candle",
        analysis:
          "Blanche's metaphor of light and darkness encapsulates her experience: Allan's death extinguished her capacity for genuine happiness. The pause before 'kitchen candle' (indicated by dashes) conveys emotional deflation. Williams uses light as a sustained symbol: Blanche has been living in dimness — literal and emotional — ever since.",
      },
    ],
    stageDirections:
      "The Varsouviana polka begins playing in Blanche's head as she recounts Allan's death — Williams uses this diegetic/non-diegetic sound to blur the boundary between Blanche's inner trauma and the external world.",
  },
  {
    scene: "Scene 7",
    summary:
      "It is Blanche's birthday. While she bathes and sings 'It's Only a Paper Moon', Stanley tells Stella what he has learned about Blanche's past in Laurel: her promiscuity, her affair with a seventeen-year-old student, and her expulsion from the hotel. Stanley reveals he has already told Mitch.",
    keyQuotations: [
      {
        quote: "It's only a paper moon, / Sailing over a cardboard sea",
        analysis:
          "The song Blanche sings offstage is a pointed commentary on the play's central theme: the lyric argues that illusion becomes real if two people believe in it. Williams uses this as contrapuntal irony — even as Blanche sings about the sustaining power of make-believe, Stanley is systematically destroying every illusion she has constructed.",
      },
    ],
    stageDirections:
      "The intercut staging — Blanche singing in the bathroom while Stanley reveals her secrets in the kitchen — is a masterful use of dramatic structure. The audience sees both the fantasy and its destruction simultaneously.",
  },
  {
    scene: "Scene 8",
    summary:
      "A tense, hostile birthday dinner. Mitch does not attend. Stanley gives Blanche a cruel birthday present: a one-way bus ticket back to Laurel. Blanche is devastated. Stella goes into labour and Stanley takes her to the hospital.",
    keyQuotations: [
      {
        quote: "You showed me the snapshot of the place with the columns. I pulled you down off them columns and how you loved it",
        analysis:
          "Stanley's speech to Stella lays bare the class and sexual dynamics of their marriage. 'Pulled you down off them columns' is both literal (from the plantation house) and metaphorical (from her social class). The verb 'pulled' implies force, but 'how you loved it' asserts Stella's complicity. Williams shows that desire has its own logic, operating outside social hierarchy.",
      },
    ],
    stageDirections:
      "Stanley 'hurls a plate to the floor' — his physical violence against objects continues the pattern from Scene 3 and escalates the tension towards Scene 10.",
  },
  {
    scene: "Scene 9",
    summary:
      "Mitch arrives, drunk and aggressive. He confronts Blanche about her lies, tears the paper lantern off the lightbulb to see her face in harsh light, and declares she is not clean enough to bring into his mother's house. Blanche is left alone.",
    keyQuotations: [
      {
        quote: "I don't want realism. I want magic! ... I try to give that to people. I misrepresent things to them. I don't tell truth, I tell what ought to be truth.",
        analysis:
          "Blanche's most self-aware speech is also her most defiant. She articulates Williams' own artistic credo: art, like Blanche's lies, reshapes reality to reveal emotional truth. The distinction between factual truth and imaginative truth is central to Williams' dramaturgy. This speech invites the audience to question whether Stanley's brutal 'realism' is morally superior to Blanche's compassionate fabrications.",
      },
    ],
    stageDirections:
      "Mitch 'tears the paper lantern off the light bulb' — this violent gesture literalises the destruction of Blanche's illusions. The harsh light exposes her, and Williams makes the audience feel the cruelty of forced exposure.",
  },
  {
    scene: "Scene 10",
    summary:
      "Blanche, now alone and drinking, dresses in a faded evening gown and rhinestone tiara, retreating fully into fantasy. Stanley returns from the hospital, triumphant after Stella's delivery. He and Blanche confront each other. Stanley rapes Blanche.",
    keyQuotations: [
      {
        quote: "We've had this date with each other from the beginning!",
        analysis:
          "Stanley's line before the rape presents sexual violence as inevitable — a 'date' that was always going to happen. The word 'date' is grotesquely euphemistic, normalising assault as courtship. Williams forces the audience to confront the logical endpoint of Stanley's unchecked power and Blanche's vulnerability. The line also carries dramatic irony: the audience has watched the collision course develop across ten scenes.",
      },
    ],
    stageDirections:
      "Williams specifies 'lurid reflections appear on the walls ... grotesque and menacing shapes' and 'inhuman voices like cries in a jungle' — the expressionistic staging externalises Blanche's psychological collapse, transforming the realistic set into a nightmare landscape.",
  },
  {
    scene: "Scene 11",
    summary:
      "Weeks later. Stella has decided to have Blanche committed to a mental institution, choosing to believe Stanley's denial of the rape. A Doctor and Matron arrive. Blanche initially resists but goes with the Doctor when he offers his arm with courtesy. Stella weeps, and Stanley comforts her with sexual touch. The poker game continues.",
    keyQuotations: [
      {
        quote: "Whoever you are — I have always depended on the kindness of strangers",
        analysis:
          "Blanche's final line, spoken to the Doctor, brings the play full circle. Its repetition from Scene 1 transforms it from exposition to elegy. The line is simultaneously heartbreaking and ironic: the 'strangers' she depends on are now institutional authorities removing her from society. Williams gives Blanche dignity in her final moment — she leaves on the arm of a gentleman, preserving the illusion of courtesy even as she enters confinement.",
      },
      {
        quote: "Don't ever believe it. Life has got to go on. No matter what happens, you've got to keep on going",
        analysis:
          "Eunice's advice to Stella articulates the pragmatic philosophy that sustains the world of the play: survival requires denial. Williams does not endorse this view but presents it as the only option available to women in a patriarchal society. Stella's complicity is not villainy but a desperate strategy for self-preservation.",
      },
    ],
    stageDirections:
      "The final stage direction — Stanley's hand finding 'the opening of her blouse' — mirrors the play's opening dynamic. The cycle of desire and power continues unchanged. Williams ends the play not with resolution but with repetition, suggesting that the structures that destroyed Blanche remain intact.",
  },
];

const dramaticTechniques = [
  {
    name: "Symbolism: Light",
    detail:
      "Light is the play's most pervasive symbol. Blanche avoids bright light because it reveals her age and, metaphorically, the truths she conceals. She covers the bare bulb with a paper lantern — an act of beautification that is also an act of concealment. When Mitch tears the lantern off in Scene 9, he is stripping away her defences. Stanley's preference for bright, harsh light represents his commitment to unadorned 'reality'. Williams uses lighting design as a dramatic tool to externalise the fantasy-versus-reality conflict: when Blanche is in control, the stage is softly lit; when Stanley dominates, it is glaring and exposed.",
  },
  {
    name: "Symbolism: The Streetcar",
    detail:
      "The streetcar named 'Desire' is both a real New Orleans streetcar line and a symbol of the force that drives human behaviour. Blanche's journey — Desire to Cemeteries to Elysian Fields — maps her trajectory from passion to death to a kind of afterlife (or oblivion). The streetcar also represents fate: Blanche did not choose her desires, yet they have determined her destination. Williams uses the New Orleans geography symbolically throughout, rooting his allegory in a specific, real place.",
  },
  {
    name: "Symbolism: Music — The Varsouviana Polka",
    detail:
      "The Varsouviana polka was playing when Blanche's husband Allan Grey shot himself. It recurs throughout the play as a non-diegetic sound audible only to Blanche (and the audience), representing her trauma and guilt. It typically stops with the sound of a gunshot — the moment of Allan's death replaying in her mind. Williams uses this technique to blur the boundary between objective reality and subjective experience, drawing the audience into Blanche's psychological state. The polka intensifies as her mental condition deteriorates, functioning as an auditory barometer of her fragility.",
  },
  {
    name: "Symbolism: The Blue Piano",
    detail:
      "The blue piano is heard throughout the play, representing the spirit of the French Quarter — its vitality, sensuality, and melancholy. It is the sonic landscape of Elysian Fields, associated with Stanley and Stella's world of physical desire and earthy reality. Williams uses it as a mood-setting device and a counterpoint to the Varsouviana: where the polka represents Blanche's tortured inner world, the blue piano represents the external world she cannot adapt to.",
  },
  {
    name: "Staging & Set Design",
    detail:
      "Williams specifies a two-room apartment with walls that become transparent to reveal the street outside — a technique that dissolves the boundary between private and public space, reflecting how Blanche's secrets are progressively exposed. The cramped set forces characters into physical proximity, heightening tension. The expressionistic elements of Scene 10 (lurid reflections, distorted shadows, jungle noises) break from realism to externalise Blanche's disintegrating psyche. Williams' 'plastic theatre' — his term for drama that uses all theatrical elements expressively — rejects pure realism in favour of emotional truth.",
  },
  {
    name: "Dialogue & Register",
    detail:
      "Williams differentiates characters through language. Blanche speaks in elaborate, literary sentences rich with metaphor and cultural allusion ('I don't want realism. I want magic!'). Stanley's speech is blunt, colloquial, and physically grounded ('I pulled you down off them columns'). The clash of registers dramatises the conflict between the Old South's linguistic refinement and the New America's directness. Williams also uses pauses, ellipses, and broken sentences to convey emotional states that lie beneath spoken language.",
  },
  {
    name: "Tension & Dramatic Structure",
    detail:
      "The play's eleven scenes build tension through a pattern of revelation and confrontation. Each scene strips away another layer of Blanche's fabricated identity: Scene 2 (Belle Reve), Scene 5 (her anxiety about Laurel), Scene 6 (Allan's death), Scene 7 (her sexual history), Scene 9 (Mitch's rejection), Scene 10 (the rape). Williams structures the play as an inexorable process of exposure, creating a tragic inevitability. The absence of act divisions (the play is continuous) reinforces the sense of relentless, unstoppable momentum.",
  },
];

const assessmentObjectives = [
  {
    code: "Textual Knowledge",
    description: "Show detailed knowledge and understanding of the text",
    guidance:
      "Demonstrate thorough knowledge of the play by referring to specific scenes, quoting accurately, and showing understanding of plot, characters, and themes. Do not retell the story; select relevant details to support your argument. For Streetcar, show awareness of the play's structure across eleven scenes and how Williams builds towards the climactic events of Scenes 10 and 11.",
  },
  {
    code: "Writer's Methods",
    description:
      "Analyse the language, form, and structure used by a writer to create meanings and effects",
    guidance:
      "This is where the highest marks are won. Analyse Williams' dramatic techniques: symbolism (light, the polka, the streetcar), staging (the transparent walls, expressionistic effects), dialogue (the contrast between Blanche's literary register and Stanley's colloquial speech), and structure (the pattern of progressive revelation). Always explain the effect on the audience. Use terminology accurately: stage directions, non-diegetic sound, plastic theatre, dramatic irony, motif.",
  },
  {
    code: "Interpretation",
    description:
      "Demonstrate understanding of the relationships between texts and the contexts in which they were written and received",
    guidance:
      "Discuss Williams' personal context (his sister Rose's institutionalisation, his own homosexuality in a hostile society), the social context (post-war America, gender roles, the decline of the Southern plantation economy, attitudes to sexuality and mental health), and the literary context (Southern Gothic tradition, the influence of Chekhov and expressionism). Integrate context into your analysis rather than adding it as a separate paragraph.",
  },
  {
    code: "Personal Response",
    description:
      "Communicate a clear, relevant response using appropriate terminology",
    guidance:
      "Write clearly and analytically. Structure your response with a coherent argument. Use literary and dramatic terminology accurately. Avoid feature-spotting without explanation. Embed short quotations rather than copying long passages. Refer to Williams by name to demonstrate awareness of authorial intent.",
  },
];

const examQuestions = {
  passageBased: [
    {
      question:
        "Re-read the end of Scene 10, from Stanley's line 'We've had this date with each other from the beginning!' to the end of the scene. How does Williams make this a powerful and disturbing moment in the play?",
      guidance: [
        "Analyse Stanley's language: 'date' as grotesque euphemism; 'from the beginning' presents assault as inevitable",
        "Discuss the expressionistic stage directions: 'lurid reflections', 'inhuman voices', 'jungle noises' — Williams externalises Blanche's psychological disintegration",
        "Consider the dramatic context: this is the climax towards which the entire play has been building",
        "Link to themes: masculinity and power, fantasy vs reality (Blanche's illusions are physically destroyed), desire as destructive force",
        "Reference context: Williams' critique of patriarchal violence; the play's challenge to 1940s gender norms",
        "Use terminology: expressionism, plastic theatre, stage directions, climax, dramatic irony",
      ],
    },
    {
      question:
        "Re-read Scene 6, from Blanche's account of Allan Grey's death to the end of the scene. How does Williams make this such an important and moving moment?",
      guidance: [
        "Analyse the Varsouviana polka as non-diegetic sound representing trauma — it stops with the gunshot",
        "Discuss Blanche's language: 'I saw! I know! You disgust me!' — monosyllabic brutality, guilt, internalised homophobia",
        "Examine the light/darkness metaphor: 'the searchlight... was turned off again'",
        "Consider Williams' personal context: his own homosexuality and the social hostility he experienced",
        "Track the effect on Blanche and Mitch's relationship: this moment of honesty creates genuine intimacy",
        "Analyse how this scene provides the psychological key to understanding Blanche's behaviour throughout the play",
      ],
    },
  ],
  essay: [
    {
      question:
        "How does Williams present the conflict between Blanche and Stanley in A Streetcar Named Desire?",
      guidance: [
        "Structure around key confrontations: Scene 2 (Belle Reve), Scene 8 (bus ticket), Scene 10 (rape)",
        "Analyse the symbolic opposition: Old South vs New America, fantasy vs reality, refinement vs primitivism",
        "Discuss Williams' dramatic methods: contrasting dialogue registers, the paper lantern vs the bare bulb, the poker night",
        "Consider who the audience sympathises with at different points — Williams complicates easy judgement",
        "Link to context: the historical transition from agrarian South to industrial, multiethnic America",
        "Discuss Williams' use of the term 'plastic theatre' to convey emotional rather than literal truth",
      ],
    },
    {
      question:
        "How does Williams use symbolism to convey meaning in A Streetcar Named Desire?",
      guidance: [
        "Discuss light/darkness (paper lantern, bare bulb, Blanche's avoidance of light)",
        "Analyse the Varsouviana polka and the blue piano as contrasting musical symbols",
        "Examine the streetcar journey (Desire — Cemeteries — Elysian Fields) as allegory",
        "Consider the set design: transparent walls, the cramped apartment, expressionistic effects in Scene 10",
        "Link each symbol to Williams' wider themes and authorial purpose",
        "Use 'plastic theatre' as a framework: Williams believed all theatrical elements should create meaning expressively",
      ],
    },
  ],
};

/* ─── Sample Model Paragraph ────────────────────────────────── */

const sampleQuestion =
  "How does Williams present Blanche DuBois as a tragic figure in A Streetcar Named Desire?";

const modelParagraph = `Williams presents Blanche as a tragic figure through her desperate and ultimately futile attempt to construct an identity that will protect her from the brutal reality of her situation [Textual Knowledge]. When Blanche tells Mitch 'I don't want realism. I want magic!', Williams uses the stark antithesis between 'realism' and 'magic' to dramatise the central conflict that defines her character [Writer's Methods]. The exclamatory sentence conveys both defiance and desperation: Blanche knows that her illusions are unsustainable, yet she clings to them because the alternative — confronting her guilt over Allan's death, her sexual history, and her social decline — is psychologically unbearable [Textual Knowledge]. Williams' choice of the word 'magic' is significant: it elevates Blanche's lies from mere dishonesty to a form of imaginative resistance, aligning her with the artist's impulse to reshape reality [Writer's Methods]. This speech must be understood in the context of Williams' concept of 'plastic theatre', in which emotional truth takes precedence over literal fact — Blanche's fabrications, like Williams' own expressionistic staging, seek to communicate feelings that plain realism cannot capture [Interpretation]. The tragic dimension arises because the world of Stanley Kowalski — blunt, physical, unaccommodating — has no space for such fragility. Williams invites the audience to recognise that Blanche's destruction is not merely personal but reflects the broader cultural violence of a post-war America that has abandoned the values of beauty and compassion she represents, however imperfectly [Interpretation]. The paragraph demonstrates that Williams' sympathy lies not with 'truth' in the narrow, factual sense, but with the human need for tenderness and meaning — a need that the play's brutal conclusion renders tragic [Personal Response].`;

/* ─── Page Component ─────────────────────────────────────────── */

export default function StreetcarStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Streetcar Named Desire &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Characters, themes, scene-by-scene summary with key quotations,
            Williams&rsquo; dramatic techniques, and Cambridge-specific exam
            guidance.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav
          className="mb-10 flex flex-wrap gap-2 text-sm"
          aria-label="Page sections"
        >
          {[
            "Scene Summaries",
            "Characters",
            "Themes",
            "Dramatic Techniques",
            "What Markers Look For",
            "Exam Questions",
            "Model Paragraph",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-purple-600/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Scene Summaries ───────────────────────────────────────── */}
        <section id="scene-summaries" aria-labelledby="scenes-heading">
          <h2
            id="scenes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Scene-by-Scene Summary
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each scene includes a summary, key quotations with analysis, and
            notable stage directions.
          </p>
          <div className="mt-6 space-y-6">
            {sceneSummary.map((s) => (
              <Card key={s.scene}>
                <CardHeader>
                  <CardTitle>{s.scene}</CardTitle>
                  <CardDescription>{s.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {s.keyQuotations.map((q, i) => (
                    <div
                      key={i}
                      className="rounded-lg border-l-4 border-purple-600 bg-primary/5 p-4"
                    >
                      <blockquote className="text-sm font-medium italic text-foreground">
                        &ldquo;{q.quote}&rdquo;
                      </blockquote>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                  {s.stageDirections && (
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                        Stage Directions
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {s.stageDirections}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <Card key={c.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Themes ──────────────────────────────────────────────── */}
        <section id="themes" aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Themes
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {themes.map((t) => (
              <Card key={t.name}>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Dramatic Techniques ─────────────────────────────────── */}
        <section id="dramatic-techniques" aria-labelledby="techniques-heading">
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Williams&rsquo; Dramatic Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Williams&rsquo; concept of &lsquo;plastic theatre&rsquo; &mdash;
            using lighting, sound, set design, and staging expressively &mdash;
            is essential for Analysis of Writer's Methods. Markers reward responses that analyse{" "}
            <em>how</em> Williams creates meaning, not just <em>what</em>{" "}
            happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {dramaticTechniques.map((d) => (
              <Card key={d.name}>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {d.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section
          id="what-markers-look-for"
          aria-labelledby="ao-heading"
        >
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding the assessment objectives helps you target your
            revision and structure your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-purple-900 px-2.5 py-0.5 text-xs font-bold text-white">
                      {ao.code}
                    </span>
                    <CardTitle>{ao.description}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ao.guidance}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Questions ──────────────────────────────────────── */}
        <section id="exam-questions" aria-labelledby="exam-heading">
          <h2 id="exam-heading" className="text-2xl font-bold text-foreground">
            Cambridge-Style Exam Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE drama questions offer a choice between a
            passage-based (a) question and an essay (b) question. Below are
            examples of both types with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              (a) Passage-Based Questions
            </h3>
            {examQuestions.passageBased.map((q, i) => (
              <Card key={i}>
                <CardHeader>
                  <span className="inline-block w-fit rounded-full bg-purple-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    Passage-Based
                  </span>
                  <CardDescription className="mt-2 font-medium text-foreground">
                    {q.question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded bg-primary/5 p-3">
                    <p className="text-xs font-semibold text-foreground">
                      How to approach:
                    </p>
                    <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                      {q.guidance.map((g, j) => (
                        <li key={j}>&bull; {g}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            <h3 className="text-lg font-semibold text-foreground">
              (b) Essay Questions
            </h3>
            {examQuestions.essay.map((q, i) => (
              <Card key={i}>
                <CardHeader>
                  <span className="inline-block w-fit rounded-full bg-purple-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    Essay Question
                  </span>
                  <CardDescription className="mt-2 font-medium text-foreground">
                    {q.question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded bg-primary/5 p-3">
                    <p className="text-xs font-semibold text-foreground">
                      How to approach:
                    </p>
                    <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                      {q.guidance.map((g, j) => (
                        <li key={j}>&bull; {g}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* ── Exam Technique ───────────────────────────────────── */}
            <div className="rounded-lg border-2 border-purple-600/30 bg-primary/5 p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Cambridge Exam Technique: Key Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Passage-based questions (a):
                  </strong>{" "}
                  Work through the extract methodically. Use short, embedded
                  quotations from the passage. Analyse Williams&rsquo; language,
                  stage directions, and dramatic effects (Writer's Methods). Then connect
                  outward to the rest of the play and relevant context.
                </li>
                <li>
                  <strong className="text-foreground">
                    Essay questions (b):
                  </strong>{" "}
                  Plan before you write. Select 3&ndash;4 key moments from
                  across the play with quotations. Focus on Williams&rsquo;
                  methods and purpose, not just what happens. Integrate context
                  rather than adding it as a separate paragraph.
                </li>
                <li>
                  <strong className="text-foreground">
                    Always use the author&rsquo;s name:
                  </strong>{" "}
                  Write &ldquo;Williams presents...&rdquo; or &ldquo;Williams
                  uses...&rdquo; rather than &ldquo;the play
                  shows...&rdquo;. This demonstrates awareness of authorial
                  intent and helps you discuss methods (Writer's Methods).
                </li>
                <li>
                  <strong className="text-foreground">
                    Discuss &lsquo;plastic theatre&rsquo;:
                  </strong>{" "}
                  Williams coined this term for drama that uses all theatrical
                  elements &mdash; lighting, sound, set design, music &mdash;
                  expressively. Referencing this concept demonstrates
                  sophisticated understanding of his dramatic method.
                </li>
                <li>
                  <strong className="text-foreground">
                    Quote precisely:
                  </strong>{" "}
                  Short, embedded quotations (&lsquo;I don&rsquo;t want
                  realism. I want magic!&rsquo;) are more effective than long
                  block quotes. Aim for at least one quotation per paragraph.
                </li>
                <li>
                  <strong className="text-foreground">
                    Link everything to Williams&rsquo; purpose:
                  </strong>{" "}
                  The strongest answers connect analysis to Williams&rsquo;
                  broader concerns: the destructive consequences of rigid gender
                  roles, the tension between compassion and brutality, and the
                  human need for illusion in an unforgiving world.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Model Paragraph ─────────────────────────────────────── */}
        <section id="model-paragraph" aria-labelledby="model-heading">
          <h2
            id="model-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Question &amp; Model Paragraph
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The following model paragraph demonstrates how to address all four
            assessment objectives in a single, sustained analytical response.
          </p>

          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <span className="inline-block w-fit rounded-full bg-purple-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  Sample Question
                </span>
                <CardDescription className="mt-2 font-medium text-foreground">
                  {sampleQuestion}
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="rounded-lg border-2 border-purple-600/30 bg-primary/5 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Model Paragraph (addressing all 4 skills)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {modelParagraph}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  {
                    code: "Textual Knowledge",
                    label: "Knowledge & understanding of the text",
                  },
                  { code: "Writer's Methods", label: "Analysis of language, form & structure" },
                  { code: "Interpretation", label: "Context integrated into argument" },
                  { code: "Personal Response", label: "Clear, analytical communication" },
                ].map((ao) => (
                  <div
                    key={ao.code}
                    className="rounded border border-border bg-card p-2 text-center"
                  >
                    <span className="block text-xs font-bold text-foreground">
                      {ao.code}
                    </span>
                    <span className="block text-[10px] text-muted-foreground">
                      {ao.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Back link ────────────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>
      </div>
    </>
  );
}
