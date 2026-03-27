import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/romeo-and-juliet' },
  title: "Romeo and Juliet Study Guide - AQA English Literature GCSE",
  description:
    "Complete Romeo and Juliet revision guide for AQA GCSE English Literature. Act-by-act plot summary, character analysis, themes, 20+ key quotations with analysis, Elizabethan context, AQA exam format, and essay planning.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const actSummaries = [
  {
    act: "Act 1",
    title: "The Feud and the Meeting",
    scenes: [
      {
        scene: "Prologue",
        summary:
          "The Chorus delivers a sonnet revealing the entire plot: 'two star-cross'd lovers' from 'two households, both alike in dignity' will die, and only their deaths will end their families' feud. This prologue removes suspense and creates dramatic irony — the audience knows the lovers are doomed from the start.",
      },
      {
        scene: "1.1",
        summary:
          "Servants of the Capulets and Montagues brawl in the streets of Verona. Benvolio tries to keep peace but Tybalt escalates the violence: 'I hate the word [peace], as I hate hell, all Montagues, and thee.' Prince Escalus threatens death for further disturbances. Romeo is revealed to be lovesick over Rosaline.",
      },
      {
        scene: "1.2-1.3",
        summary:
          "Paris asks Capulet for Juliet's hand in marriage. Capulet says Juliet is too young (nearly 14) but invites Paris to the feast. Romeo and Benvolio learn of the feast. Lady Capulet and the Nurse discuss Juliet's marriage prospects. Juliet is obedient: 'I'll look to like, if looking liking move.'",
      },
      {
        scene: "1.4",
        summary:
          "Romeo, Benvolio, and Mercutio prepare to gatecrash the Capulet feast. Mercutio delivers the 'Queen Mab' speech about dreams and fantasy. Romeo has a premonition of his own death: 'my mind misgives / Some consequence yet hanging in the stars.'",
      },
      {
        scene: "1.5",
        summary:
          "Romeo sees Juliet at the feast and falls in love instantly: 'Did my heart love till now?' They share a sonnet and kiss. Tybalt recognises Romeo and is furious, but Capulet prevents a fight. Both Romeo and Juliet discover the other belongs to their enemy family.",
      },
    ],
  },
  {
    act: "Act 2",
    title: "Secret Love and Marriage",
    scenes: [
      {
        scene: "2.1-2.2",
        summary:
          "Romeo climbs the Capulet orchard wall. In the balcony scene, Juliet questions the importance of names: 'What's in a name? That which we call a rose / By any other word would smell as sweet.' They declare their love and plan to marry in secret. Juliet is practical about the danger; Romeo is reckless with passion.",
      },
      {
        scene: "2.3",
        summary:
          "Romeo visits Friar Lawrence at dawn and asks him to marry them. The Friar is surprised at how quickly Romeo has moved from Rosaline to Juliet but agrees, hoping the marriage will end the feud: 'For this alliance may so happy prove / To turn your households' rancour to pure love.'",
      },
      {
        scene: "2.4-2.5",
        summary:
          "Mercutio and Benvolio joke about Romeo. The Nurse acts as a go-between, arranging the secret wedding. Juliet waits impatiently for news, showing her youthful eagerness.",
      },
      {
        scene: "2.6",
        summary:
          "Romeo and Juliet are secretly married by Friar Lawrence. The Friar warns: 'These violent delights have violent ends.' This foreshadows the tragedy ahead. The marriage happens offstage.",
      },
    ],
  },
  {
    act: "Act 3",
    title: "The Turning Point",
    scenes: [
      {
        scene: "3.1",
        summary:
          "The pivotal scene. Tybalt challenges Romeo, who refuses to fight because Tybalt is now his kinsman by marriage. Mercutio fights Tybalt instead and is fatally stabbed when Romeo intervenes: 'A plague o' both your houses!' Romeo, enraged, kills Tybalt: 'O, I am fortune's fool!' Prince Escalus banishes Romeo from Verona.",
      },
      {
        scene: "3.2",
        summary:
          "Juliet awaits her wedding night. The Nurse brings news of Tybalt's death and Romeo's banishment. Juliet's conflicting loyalties are expressed through oxymorons: 'Beautiful tyrant! Fiend angelical!' She concludes that Romeo's banishment is worse than Tybalt's death.",
      },
      {
        scene: "3.3",
        summary:
          "Romeo hides in Friar Lawrence's cell, distraught at his banishment. He attempts suicide but the Friar intervenes, urging him to go to Juliet then flee to Mantua. Romeo's emotional extremity contrasts with the Friar's rationalism.",
      },
      {
        scene: "3.4-3.5",
        summary:
          "Capulet arranges Juliet's marriage to Paris for Thursday. Romeo and Juliet share their wedding night before Romeo leaves for Mantua. Lady Capulet tells Juliet of the arranged marriage. When Juliet refuses, Capulet explodes in rage, threatening to disown her: 'hang, beg, starve, die in the streets.' The Nurse advises Juliet to marry Paris, losing Juliet's trust.",
      },
    ],
  },
  {
    act: "Act 4",
    title: "Desperation and Deception",
    scenes: [
      {
        scene: "4.1",
        summary:
          "Juliet goes to Friar Lawrence in desperation. He devises a plan: she will take a potion that makes her appear dead for 42 hours. Her family will place her in the Capulet tomb, and Romeo will come to rescue her. Juliet, showing immense courage, agrees: 'Give me, give me! O, tell not me of fear!'",
      },
      {
        scene: "4.2-4.3",
        summary:
          "Juliet pretends to agree to the marriage. Alone, she takes the potion despite terrifying visions of waking in the tomb surrounded by dead bodies. Her soliloquy reveals her fear but also her determination — love outweighs terror.",
      },
      {
        scene: "4.4-4.5",
        summary:
          "The Capulets prepare for the wedding. The Nurse discovers Juliet apparently dead. The family's grief is intense, though Paris's and Capulet's laments focus on their lost plans rather than Juliet herself. Friar Lawrence urges calm, knowing Juliet is alive.",
      },
    ],
  },
  {
    act: "Act 5",
    title: "Fate and Death",
    scenes: [
      {
        scene: "5.1",
        summary:
          "In Mantua, Romeo's servant Balthasar brings news that Juliet is dead (not knowing about the plan). Romeo immediately resolves to die beside her: 'Then I defy you, stars!' He buys poison from an Apothecary. The Friar's letter explaining the plan never reached Romeo.",
      },
      {
        scene: "5.2",
        summary:
          "Friar Lawrence learns that his letter to Romeo was not delivered because Friar John was quarantined due to plague. Friar Lawrence rushes to the tomb, knowing Juliet will wake soon with no one to help her.",
      },
      {
        scene: "5.3",
        summary:
          "Paris is at Juliet's tomb and fights Romeo. Romeo kills Paris. Romeo drinks poison beside Juliet: 'Here's to my love... Thus with a kiss I die.' Juliet wakes, finds Romeo dead, and stabs herself with his dagger: 'O happy dagger! This is thy sheath.' The Prince, Montagues, and Capulets arrive. The Friar explains everything. The families are finally reconciled in grief. The Prince concludes: 'All are punished.'",
      },
    ],
  },
];

const characters = [
  {
    name: "Romeo",
    role: "Protagonist / Tragic Lover",
    description:
      "Romeo is a young Montague who moves from shallow infatuation with Rosaline to a deep, passionate love for Juliet. He is impulsive, emotionally extreme, and driven by passion rather than reason. Shakespeare presents him as both a romantic ideal and a cautionary figure — his intensity is beautiful but also reckless, and his impulsive actions directly cause the tragedy.",
    keyPoints: [
      "His love for Rosaline is superficial and conventional (Petrarchan love poetry); his love for Juliet transforms him",
      "Impulsive actions drive the tragedy: killing Tybalt, buying poison, dying minutes before Juliet wakes",
      "He oscillates between extremes — ecstatic joy and suicidal despair — showing emotional immaturity",
      "His language shifts from artificial rhyming couplets (about Rosaline) to genuine blank verse (about Juliet)",
      "'Then I defy you, stars!' — he challenges fate itself, but his defiance only fulfils the prophecy",
    ],
    keyQuotes: [
      "'Did my heart love till now? Forswear it, sight! / For I ne'er saw true beauty till this night'",
      "'But, soft! What light through yonder window breaks? / It is the east, and Juliet is the sun'",
      "'O, I am fortune's fool!'",
      "'Then I defy you, stars!'",
      "'Thus with a kiss I die'",
    ],
  },
  {
    name: "Juliet",
    role: "Protagonist / Tragic Heroine",
    description:
      "Juliet begins as an obedient, sheltered 13-year-old girl and rapidly matures into a decisive, courageous young woman. She is more practical and rational than Romeo, questioning the absurdity of the feud and taking bold action. Shakespeare gives her some of the play's most intelligent and self-aware speeches, challenging Elizabethan expectations of passive femininity.",
    keyPoints: [
      "Her transformation from dutiful daughter ('I'll look to like') to independent woman is one of the play's key arcs",
      "More rational than Romeo: she recognises the danger of their love and questions the meaning of names",
      "Takes decisive action: agrees to the potion plan, defies her father, chooses death over life without Romeo",
      "Her soliloquies reveal intelligence and emotional complexity beyond her years",
      "Her death by dagger (a phallic symbol) can be read as a final act of masculine agency in a patriarchal world",
    ],
    keyQuotes: [
      "'What's in a name? That which we call a rose / By any other word would smell as sweet'",
      "'My bounty is as boundless as the sea, / My love as deep'",
      "'Give me my Romeo; and, when I shall die, / Take him and cut him out in little stars'",
      "'O happy dagger! / This is thy sheath; there rust, and let me die'",
    ],
  },
  {
    name: "Mercutio",
    role: "Romeo's Friend / Catalyst",
    description:
      "Mercutio is Romeo's witty, cynical friend who mocks romantic love and social conventions. He is neither Montague nor Capulet but becomes a victim of the feud. His death is the play's turning point — it transforms the comedy of Acts 1-2 into tragedy. His 'Queen Mab' speech reveals both his brilliance and his instability.",
    keyPoints: [
      "His cynicism about love contrasts with Romeo's idealism — he reduces love to physical desire",
      "The Queen Mab speech starts playfully but becomes dark and frantic, suggesting suppressed anxiety",
      "His death is caused by Romeo's intervention — Romeo's love for Tybalt (as kinsman) leads to Mercutio's death",
      "'A plague o' both your houses!' — he curses both families, articulating the play's central message",
      "He exists outside the feud but dies because of it — showing the feud destroys everyone, not just the families",
    ],
    keyQuotes: [
      "'If love be rough with you, be rough with love'",
      "'O, then, I see Queen Mab hath been with you'",
      "'A plague o' both your houses!'",
      "'Ask for me tomorrow, and you shall find me a grave man'",
    ],
  },
  {
    name: "Tybalt",
    role: "Antagonist / Catalyst of Violence",
    description:
      "Tybalt is Juliet's cousin and the embodiment of the feud's destructive aggression. He lives by a code of honour that demands violence in response to any perceived insult. Shakespeare uses him to show how toxic masculinity and family loyalty can become deadly forces that destroy the innocent.",
    keyPoints: [
      "Called 'Prince of Cats' — skilled, proud, and aggressive in his swordsmanship",
      "'I hate the word [peace]' — he defines himself through conflict and hatred",
      "His challenge to Romeo at the feast shows he values family honour above Capulet's direct orders",
      "His death triggers the tragedy: Romeo's banishment, Juliet's forced marriage, and the chain of events leading to death",
      "Represents the older generation's values imposed on the younger — honour and violence over love and peace",
    ],
    keyQuotes: [
      "'What, drawn, and talk of peace! I hate the word, / As I hate hell, all Montagues, and thee'",
      "'Boy, this shall not excuse the injuries / That thou hast done me; therefore turn and draw'",
    ],
  },
  {
    name: "Friar Lawrence",
    role: "Mentor / Failed Mediator",
    description:
      "Friar Lawrence is a well-meaning but ultimately ineffective figure who represents the failure of the adult world to protect the young. He agrees to marry Romeo and Juliet hoping it will end the feud, but his increasingly desperate schemes lead directly to the tragedy. He functions as a chorus figure, offering moral commentary.",
    keyPoints: [
      "His opening speech about herbs that can heal or kill foreshadows the play's central paradox — love and death intertwined",
      "He agrees to the marriage for political reasons ('to turn your households' rancour to pure love'), not purely for the lovers' sake",
      "His plans become increasingly risky: secret marriage, sleeping potion, faked death",
      "He abandons Juliet in the tomb when he hears the watch — prioritising self-preservation over his duty of care",
      "Represents the failure of authority: the Church, like the Prince and the parents, cannot prevent the tragedy",
    ],
    keyQuotes: [
      "'These violent delights have violent ends'",
      "'Wisely and slow; they stumble that run fast'",
      "'For this alliance may so happy prove / To turn your households' rancour to pure love'",
    ],
  },
  {
    name: "The Nurse",
    role: "Juliet's Confidante / Comic Figure",
    description:
      "The Nurse is Juliet's closest companion, having raised her from birth. She is bawdy, garrulous, and loyal — until Act 3, when she advises Juliet to abandon Romeo and marry Paris. This betrayal forces Juliet to act alone and marks Juliet's final separation from childhood. The Nurse represents a pragmatic, survival-focused worldview that cannot comprehend Juliet's absolute love.",
    keyPoints: [
      "Her rambling speeches provide comic relief and reveal her lower social status (prose vs verse)",
      "She has lost her own daughter Susan — Juliet is a surrogate child, making her betrayal more painful",
      "She enables the secret marriage, acting as go-between, showing initial support for Juliet's happiness",
      "Her advice to marry Paris ('I think it best you married with the County') is practical but destroys Juliet's trust",
      "After the betrayal, Juliet never confides in the Nurse again — 'Thou and my bosom henceforth shall be twain'",
    ],
    keyQuotes: [
      "'Thou wast the prettiest babe that e'er I nursed'",
      "'His name is Romeo, and a Montague; / The only son of your great enemy'",
      "'I think it best you married with the County'",
    ],
  },
  {
    name: "Lord Capulet",
    role: "Juliet's Father / Patriarchal Authority",
    description:
      "Capulet initially appears reasonable, telling Paris that Juliet is too young for marriage and that her consent matters. However, when Juliet defies him in Act 3, he becomes tyrannical and verbally abusive, threatening to disown her. Shakespeare uses Capulet to expose the violence of patriarchal authority — his 'love' for Juliet is conditional on her obedience.",
    keyPoints: [
      "His transformation from protective father (Act 1) to domestic tyrant (Act 3) exposes patriarchal control",
      "He arranges Juliet's marriage to Paris partly as a business transaction — Paris is a 'worthy gentleman'",
      "'Hang, beg, starve, die in the streets' — his threats reveal that daughters are property, not people",
      "His grief at Juliet's 'death' seems genuine but also self-centred — 'Death is my heir'",
      "He only learns the truth when it is too late — representing the older generation's failure to listen",
    ],
    keyQuotes: [
      "'My child is yet a stranger in the world'",
      "'Hang, beg, starve, die in the streets, / For, by my soul, I'll ne'er acknowledge thee'",
      "'Death is my son-in-law, Death is my heir'",
    ],
  },
];

const themes = [
  {
    title: "Love",
    colour: "bg-red-50 border-red-200",
    analysis:
      "Shakespeare presents multiple types of love throughout the play. Romeo's initial infatuation with Rosaline is shallow, conventional Petrarchan love, using tired cliches. His love for Juliet is presented as transformative and genuine — a spiritual and physical union expressed through shared sonnets and religious imagery. However, Shakespeare also questions whether their love is truly different from infatuation, given its speed and intensity. The play ultimately presents love as a force powerful enough to overcome hatred, but only through sacrifice and death.",
    keyPoints: [
      "Petrarchan love (Romeo/Rosaline) vs genuine love (Romeo/Juliet) — Shakespeare distinguishes shallow convention from authentic passion",
      "Love and death are intertwined throughout: 'My grave is like to be my wedding bed'",
      "Religious imagery (pilgrim, saint, shrine) elevates their love to something sacred",
      "Their love exists outside society's structures — it can only survive in darkness (balcony scene, wedding night) and ultimately in death",
      "The speed of their love (meeting to death in five days) raises the question: is this genuine love or adolescent intensity?",
    ],
    keyQuotes: [
      "'My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite'",
      "'Did my heart love till now? Forswear it, sight!'",
      "'These violent delights have violent ends'",
    ],
  },
  {
    title: "Fate and Free Will",
    colour: "bg-purple-50 border-purple-200",
    analysis:
      "The prologue announces Romeo and Juliet are 'star-cross'd' — destined to die. Shakespeare creates a tension between this predetermined fate and the characters' free choices. Romeo's impulsive decisions (killing Tybalt, buying poison) could be seen as fate working through his character, or as avoidable mistakes. The play asks whether tragedy is inevitable or whether different choices could have changed the outcome. Every moment of bad timing (the undelivered letter, Romeo arriving minutes too early) reinforces the sense of cosmic injustice.",
    keyPoints: [
      "'Star-cross'd lovers' — the prologue frames the play as predetermined, removing suspense and creating dramatic irony",
      "Romeo's premonition in Act 1 ('Some consequence yet hanging in the stars') suggests fate is already in motion",
      "'O, I am fortune's fool!' — Romeo blames fate but his own impulsiveness caused Tybalt's death",
      "'Then I defy you, stars!' — Romeo challenges fate but his defiance only fulfils the prophecy",
      "The missed letter is a moment of terrible coincidence — is it fate or simply bad luck?",
    ],
    keyQuotes: [
      "'A pair of star-cross'd lovers take their life'",
      "'Some consequence yet hanging in the stars'",
      "'O, I am fortune's fool!'",
      "'Then I defy you, stars!'",
    ],
  },
  {
    title: "Conflict and Violence",
    colour: "bg-orange-50 border-orange-200",
    analysis:
      "The feud between the Montagues and Capulets is the engine of the tragedy. Shakespeare never explains its origin — it is simply inherited hatred, making it all the more absurd and destructive. Violence is presented as cyclical and self-perpetuating: each act of aggression demands retaliation. The play moves between private love scenes and public violence, showing how the feud invades every aspect of life in Verona. Only the lovers' deaths can break the cycle, suggesting that entrenched hatred can only be overcome through catastrophic sacrifice.",
    keyPoints: [
      "The feud's cause is never explained — Shakespeare emphasises its irrationality",
      "Violence is linked to toxic masculinity: honour codes demand aggression and punish peacemaking",
      "The street brawls use sexual language ('thrust his maids to the wall'), linking violence to male dominance",
      "Act 3 Scene 1 is the structural turning point: Mercutio's death transforms comedy into tragedy",
      "'All are punished' — the Prince's final judgement holds everyone accountable, not just the lovers",
    ],
    keyQuotes: [
      "'Two households, both alike in dignity, / In fair Verona, where we lay our scene'",
      "'A plague o' both your houses!'",
      "'All are punished'",
      "'What, drawn, and talk of peace! I hate the word'",
    ],
  },
  {
    title: "Youth vs Age / Generational Conflict",
    colour: "bg-green-50 border-green-200",
    analysis:
      "The play presents a stark contrast between the passionate, idealistic young characters and the rigid, controlling older generation. The parents perpetuate the feud; the children pay for it with their lives. Capulet's authoritarian control over Juliet reflects the patriarchal power structures of Elizabethan society. The Friar and the Nurse, both adult authority figures, fail the lovers through well-meaning but inadequate intervention. Shakespeare implies that the older generation's values — honour, obedience, social status — are destructive when imposed without compassion.",
    keyPoints: [
      "The feud belongs to the parents' generation — Romeo and Juliet reject it through their love",
      "Capulet's attitude shifts from protective to tyrannical when Juliet disobeys — his love is conditional",
      "The Nurse and Friar both fail as substitute parents — neither can protect the lovers from society's structures",
      "Juliet's rapid maturation (from obedient child to independent woman) is forced by adult failures",
      "Only the children's deaths teach the parents the cost of their hatred — 'All are punished'",
    ],
    keyQuotes: [
      "'Hang, beg, starve, die in the streets'",
      "'These violent delights have violent ends'",
      "'Is she not proud? Doth she not count her blest?'",
    ],
  },
  {
    title: "Light and Darkness",
    colour: "bg-indigo-50 border-indigo-200",
    analysis:
      "Shakespeare uses light and dark imagery paradoxically throughout the play. Conventionally, light represents goodness and dark represents evil, but Shakespeare inverts this. Romeo and Juliet's love flourishes in darkness (the balcony scene, the wedding night) and is threatened by daylight (which brings separation and public violence). Juliet is consistently associated with light — 'the sun,' 'a rich jewel in an Ethiope's ear' — suggesting she illuminates Romeo's world. However, this light imagery is always set against darkness, foreshadowing the idea that their love can only truly exist beyond the world of the living.",
    keyPoints: [
      "Juliet is compared to the sun, stars, and light — she represents truth and beauty in Romeo's world",
      "Their love exists in darkness: the feast, the balcony, the bedroom — daylight means separation",
      "The aubade (dawn song) in Act 3 Scene 5: they argue over whether it is the lark or nightingale — dawn means Romeo must leave",
      "'Give me my Romeo; and, when I shall die, / Take him and cut him out in little stars' — Juliet imagines Romeo transforming darkness into light after death",
      "The tomb scene inverts natural light: Romeo calls Juliet's beauty a 'lantern' that makes the vault 'a feasting presence full of light'",
    ],
    keyQuotes: [
      "'It is the east, and Juliet is the sun'",
      "'O, she doth teach the torches to burn bright!'",
      "'Give me my Romeo; and, when I shall die, / Take him and cut him out in little stars'",
    ],
  },
  {
    title: "Gender and Patriarchy",
    colour: "bg-teal-50 border-teal-200",
    analysis:
      "The play exposes the rigid gender roles of Elizabethan society and their devastating consequences. Men are expected to be aggressive and honour-bound — those who refuse to fight (like Romeo after his marriage) are mocked. Women are treated as property: Juliet's marriage is arranged without her consent, and her refusal is met with threats of disownment. Shakespeare uses Juliet to challenge these norms: she is the play's most intelligent and decisive character, yet she is trapped by a patriarchal system that denies her autonomy. The tragedy is partly caused by a society that values male honour over female agency.",
    keyPoints: [
      "Juliet is treated as property: Capulet 'gives' her to Paris as if she were an object to be traded",
      "Male honour codes drive the violence: Tybalt, Mercutio, and Romeo all fight to prove their masculinity",
      "Romeo's refusal to fight Tybalt is seen as emasculating — Mercutio fights in his place to restore honour",
      "Juliet's defiance of her father is revolutionary: she rejects the patriarchal system that controls her life",
      "The Nurse's pragmatic advice to marry Paris reflects how women survive in a world where they have no power",
    ],
    keyQuotes: [
      "'My child is yet a stranger in the world'",
      "'Hang, beg, starve, die in the streets'",
      "'Is she not proud? Doth she not count her blest?'",
      "'O happy dagger! / This is thy sheath; there rust, and let me die'",
    ],
  },
];

const keyQuotations = [
  {
    quote: "Two households, both alike in dignity, / In fair Verona, where we lay our scene",
    speaker: "Chorus (Prologue)",
    analysis:
      "The opening line establishes the setting and the social equality of the feuding families — 'both alike in dignity' means neither is morally superior. 'Fair Verona' is ironic: the city is torn apart by violence. The sonnet form of the prologue is fitting for a love story, but its content is tragic — foreshadowing death from the very first line.",
  },
  {
    quote: "A pair of star-cross'd lovers take their life",
    speaker: "Chorus (Prologue)",
    analysis:
      "This reveals the ending before the play begins, creating dramatic irony that pervades every scene. 'Star-cross'd' suggests their fate is written in the stars — they are cosmically doomed. 'Take their life' has a double meaning: they live their life together and they end their life. The audience watches knowing every joyful moment is temporary.",
  },
  {
    quote: "O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / Like a rich jewel in an Ethiope's ear",
    speaker: "Romeo (1.5)",
    analysis:
      "Romeo's first sight of Juliet. The light/dark imagery presents Juliet as a source of illumination against darkness. 'Teach the torches' personifies the torches as her students — she outshines artificial light. The simile 'rich jewel in an Ethiope's ear' emphasises her preciousness and radiance. His language shifts from the artificial Petrarchan style he used about Rosaline to something more vivid and genuine.",
  },
  {
    quote: "Did my heart love till now? Forswear it, sight! / For I ne'er saw true beauty till this night",
    speaker: "Romeo (1.5)",
    analysis:
      "Romeo dismisses all previous feelings as false, presenting his love for Juliet as an awakening. The rhetorical question challenges his own past. However, the speed of this transformation (he was lovesick for Rosaline hours ago) raises questions about whether this is genuine love or another infatuation. Shakespeare leaves this ambiguity deliberate.",
  },
  {
    quote: "My only love sprung from my only hate! / Too early seen unknown, and known too late!",
    speaker: "Juliet (1.5)",
    analysis:
      "Juliet discovers Romeo is a Montague. The antithesis of 'love' and 'hate' encapsulates the play's central paradox — love born from hatred. 'Too early seen unknown, and known too late' expresses the cruel irony of falling in love before discovering the obstacle. The rhyming couplet gives it a sense of fatalistic finality.",
  },
  {
    quote: "But, soft! What light through yonder window breaks? / It is the east, and Juliet is the sun",
    speaker: "Romeo (2.2)",
    analysis:
      "The balcony scene's opening metaphor. Romeo elevates Juliet to a celestial body — she is not merely compared to the sun but identified as it. The sun is the centre of the universe (a bold claim in Elizabethan England), suggesting Juliet is the centre of Romeo's existence. 'Breaks' implies her light pierces the darkness forcefully.",
  },
  {
    quote: "What's in a name? That which we call a rose / By any other word would smell as sweet",
    speaker: "Juliet (2.2)",
    analysis:
      "Juliet argues that names are arbitrary social constructs — Romeo's identity as a Montague is merely a label, not his essence. This is philosophically radical: she challenges the entire basis of the feud. The rose metaphor is simple but powerful — identity lies in nature, not in what society calls us. She is more rational and analytical than Romeo in this scene.",
  },
  {
    quote: "My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite",
    speaker: "Juliet (2.2)",
    analysis:
      "Juliet's declaration of limitless love uses the sea as a metaphor for infinite depth and abundance. The paradox ('the more I give... the more I have') presents love as inexhaustible — it grows through giving. This is one of Shakespeare's most beautiful articulations of love. The boundless imagery contrasts with the confined, walled world of Verona.",
  },
  {
    quote: "These violent delights have violent ends",
    speaker: "Friar Lawrence (2.6)",
    analysis:
      "The Friar's warning before the marriage. 'Violent' means both passionate and destructive — the intensity of their love will lead to destruction. The symmetrical structure (violent... violent) mirrors the idea that beginnings predict endings. This is the play's most direct piece of foreshadowing and encapsulates its central tragedy: extreme love leads to extreme loss.",
  },
  {
    quote: "A plague o' both your houses!",
    speaker: "Mercutio (3.1)",
    analysis:
      "Mercutio's dying curse is repeated three times, giving it the weight of a prophecy. He blames both families equally — neither Montague nor Capulet is innocent. 'Plague' invokes divine punishment for collective sin. Mercutio is the play's most significant casualty: an outsider destroyed by a feud that was not his. His curse articulates the play's moral judgement on the feud.",
  },
  {
    quote: "O, I am fortune's fool!",
    speaker: "Romeo (3.1)",
    analysis:
      "Romeo's cry after killing Tybalt. 'Fortune's fool' suggests he is a plaything of fate — a helpless victim. But the audience has seen Romeo choose to fight. This tension between fate and choice is central to the play. The alliteration emphasises his despair. He externalises blame onto 'fortune' rather than accepting responsibility for his impulsive actions.",
  },
  {
    quote: "Beautiful tyrant! Fiend angelical! / Dove-feather'd raven! Wolvish-ravening lamb!",
    speaker: "Juliet (3.2)",
    analysis:
      "Juliet's string of oxymorons expresses her impossible position — her husband has killed her cousin. The contradictions ('beautiful tyrant,' 'fiend angelical') mirror the play's central paradox of love and hate coexisting. Each oxymoron pairs beauty with violence, reflecting how Romeo is both her beloved and a killer. The rapid accumulation shows her mind racing to process the shock.",
  },
  {
    quote: "Hang, beg, starve, die in the streets, / For, by my soul, I'll ne'er acknowledge thee",
    speaker: "Lord Capulet (3.5)",
    analysis:
      "Capulet's explosive rage when Juliet refuses to marry Paris. The list of monosyllabic verbs ('hang, beg, starve, die') is brutally direct. He threatens to abandon his daughter to destitution and death. This reveals that his parental 'love' is conditional on obedience — Juliet is property, not a person. The violence of his language mirrors the physical violence of the feud.",
  },
  {
    quote: "Give me, give me! O, tell not me of fear!",
    speaker: "Juliet (4.1)",
    analysis:
      "Juliet demands the Friar's potion with urgent imperatives. The repetition of 'give me' shows her desperation and determination. 'Tell not me of fear' is a direct rejection of the timidity expected of young women. At 13, Juliet shows more courage than any adult in the play. She is willing to risk apparent death rather than betray her love — this is a profoundly radical act of female agency.",
  },
  {
    quote: "Then I defy you, stars!",
    speaker: "Romeo (5.1)",
    analysis:
      "Romeo's response to Juliet's apparent death is to challenge fate itself. The exclamation mark conveys passionate defiance. However, his 'defiance' of the stars (fate) actually fulfils their decree — by rushing to die beside Juliet, he ensures the tragedy the stars predicted. This is Shakespeare's deepest irony: free will and fate are indistinguishable. Romeo thinks he is choosing; the audience knows he is being led.",
  },
  {
    quote: "O happy dagger! / This is thy sheath; there rust, and let me die",
    speaker: "Juliet (5.3)",
    analysis:
      "Juliet's final words. 'Happy' is bitterly ironic — the dagger is 'happy' because it will reunite her with Romeo. 'Sheath' is a sexual metaphor (her body sheathes the dagger as in their marriage), linking love and death one final time. 'Rust' implies permanence — she will never be separated from Romeo again. Her death by stabbing contrasts with Romeo's poison: she chooses a more violent, traditionally masculine method.",
  },
  {
    quote: "All are punished",
    speaker: "Prince Escalus (5.3)",
    analysis:
      "The Prince's final judgement. The universality of 'all' refuses to assign blame to any single character — the tragedy is collective. The passive voice ('are punished') suggests a force greater than human justice is at work — God, fate, or the natural consequences of hatred. This line echoes the prologue's message: the feud has consumed innocent and guilty alike. It is Shakespeare's most concise statement of the play's moral.",
  },
  {
    quote: "For never was a story of more woe / Than this of Juliet and her Romeo",
    speaker: "Prince Escalus (5.3)",
    analysis:
      "The play's closing couplet. The rhyme gives it the finality of an epitaph. 'Her Romeo' — the possessive pronoun is significant: in death, Romeo belongs to Juliet, not to the Montague family. The superlative 'never... more woe' elevates their story to universal significance. Shakespeare closes the play as it began — with a formal poetic structure that frames the tragedy as a completed narrative.",
  },
];

const contextPoints = [
  {
    title: "Elizabethan England and Love",
    detail:
      "Romeo and Juliet was written around 1594-96 during the reign of Elizabeth I. Marriage was primarily a financial and social arrangement, especially among the upper classes. Romantic love as a basis for marriage was a relatively new and radical idea. Juliet's refusal to marry Paris for love of Romeo would have been seen as both romantic and dangerously rebellious by an Elizabethan audience.",
  },
  {
    title: "Patriarchal Society",
    detail:
      "Women in Elizabethan England had very limited rights. Daughters were legally the property of their fathers until marriage, when they became the property of their husbands. Capulet's rage at Juliet's disobedience reflects the legal and social reality: daughters who refused arranged marriages could be disowned. Juliet's defiance is therefore an extraordinary act of rebellion against the entire social order.",
  },
  {
    title: "The Sonnet Tradition and Petrarchan Love",
    detail:
      "Romeo's love for Rosaline parodies the Petrarchan sonnet tradition — exaggerated declarations of love for an unattainable woman. Shakespeare satirises this literary convention through Romeo's cliched language. When Romeo meets Juliet, their first conversation forms a shared sonnet (1.5), suggesting their love is a genuine collaboration rather than one-sided worship. Shakespeare is both using and critiquing the literary conventions of his time.",
  },
  {
    title: "Honour Culture and Masculinity",
    detail:
      "Elizabethan society placed enormous value on male honour. Insults demanded violent retaliation; refusing to fight was seen as cowardly and emasculating. Tybalt and Mercutio embody this honour code. Romeo's refusal to fight Tybalt (because of his secret marriage) is seen as shameful — Mercutio fights and dies to defend Romeo's honour. Shakespeare shows how this code of masculinity destroys young men.",
  },
  {
    title: "The Role of Fate and Fortune",
    detail:
      "Elizabethans held complex beliefs about fate. Christianity taught that God controlled human destiny, but there was also a classical tradition of Fortune (personified as a goddess turning a wheel). Shakespeare draws on both: the lovers are 'star-cross'd' (astrological fate) and Romeo calls himself 'fortune's fool.' The play asks whether tragedy is divinely ordained, cosmically fated, or the result of human choices.",
  },
  {
    title: "Italian Setting and Source Material",
    detail:
      "Shakespeare based the play on Arthur Brooke's poem 'The Tragicall Historye of Romeus and Juliet' (1562). Setting it in Verona, Italy, gave it an exotic, passionate atmosphere for English audiences. Italy was associated with both romance and violence (feuding families, vendetta culture). The Italian setting allowed Shakespeare to explore extreme passions that might have seemed improper in an English context.",
  },
];

const aqaExamFormat = {
  paper: "Paper 1: Shakespeare and the 19th-Century Novel",
  section: "Section A: Shakespeare",
  marks: "30 marks + 4 marks for SPaG (34 total)",
  time: "Approximately 50-55 minutes (of a 1 hour 45 minute paper)",
  format:
    "You will be given a short extract from the play and asked a question about a theme or character. You must write about the extract AND the play as a whole.",
  assessmentObjectives: [
    {
      code: "AO1",
      description: "Read, understand and respond to texts. Use textual references to support interpretations.",
      marks: "12 marks",
      tip: "Make a clear argument. Use short, embedded quotations. Every point must be supported by evidence from the text.",
    },
    {
      code: "AO2",
      description: "Analyse the language, form and structure used by a writer to create meanings and effects.",
      marks: "12 marks",
      tip: "Zoom into individual words and techniques. Analyse HOW Shakespeare creates meaning, not just WHAT he says. Discuss form (sonnet, soliloquy, prose vs verse) and structure (where events are placed in the play).",
    },
    {
      code: "AO3",
      description: "Show understanding of the relationships between texts and the contexts in which they were written.",
      marks: "6 marks",
      tip: "Integrate context into your analysis — do not bolt it on. Link Elizabethan attitudes to love, gender, honour, and fate to your points about the text.",
    },
    {
      code: "AO4",
      description: "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
      marks: "4 marks",
      tip: "Write in formal academic English. Use literary terminology accurately. Proofread for spelling and punctuation errors.",
    },
  ],
};

const commandWords = [
  {
    word: "How does Shakespeare present...",
    meaning:
      "Focus on Shakespeare's methods — language, structure, form, dramatic techniques. Discuss his deliberate choices as a writer. Always refer to Shakespeare as the craftsman, not just the characters.",
  },
  {
    word: "Starting with this extract...",
    meaning:
      "You MUST begin with the extract. Spend roughly half your essay on the extract and half on the wider play. Use the extract as a springboard — find connections between the extract and the rest of the play.",
  },
  {
    word: "...explore...",
    meaning:
      "Consider multiple interpretations. Use phrases like 'alternatively,' 'a modern audience might,' 'Shakespeare could be suggesting.' Show that meanings are not fixed and that different readers may interpret the text differently.",
  },
  {
    word: "...write about...",
    meaning:
      "This is broad — cover the topic from multiple angles. Include analysis of language, structure, context, and different interpretations. Aim for breadth and depth.",
  },
];

const essayQuestions = [
  {
    question:
      "Starting with this extract, how does Shakespeare present love in Romeo and Juliet?",
    plan: [
      "Extract analysis: identify how the specific extract presents love (e.g., the shared sonnet in Act 1 Scene 5 — religious imagery elevates love; the sonnet form suggests perfect harmony; 'pilgrim' and 'saint' metaphors make love sacred)",
      "Wider play — Love vs infatuation: contrast Romeo's Petrarchan love for Rosaline (artificial, self-pitying) with his love for Juliet (genuine, transformative). Shakespeare uses language shifts to show the difference.",
      "Wider play — Love and death: 'These violent delights have violent ends' — the Friar warns that extreme love leads to destruction. Love and death are intertwined throughout: 'My grave is like to be my wedding bed.' The tomb becomes their final marriage bed.",
      "Wider play — Love vs society: their love exists only in secret (darkness, the balcony, the Friar's cell) because society cannot accommodate it. The public world (daylight, the streets) is a place of violence and family control.",
      "Context: Elizabethan arranged marriages, the sonnet tradition, love as a radical force that challenges patriarchal authority. Shakespeare presents love as both transcendent and destructive.",
    ],
  },
  {
    question:
      "How does Shakespeare use conflict to explore the theme of family loyalty in Romeo and Juliet?",
    plan: [
      "Extract analysis: e.g., Act 3 Scene 1 — the fight scene. Tybalt's challenge, Romeo's refusal to fight (torn between love for Juliet and family honour), Mercutio's intervention and death. Language of honour and masculinity.",
      "Wider play — The feud as inherited hatred: the Prologue establishes the 'ancient grudge.' The servants fight without knowing why (Act 1 Scene 1) — the feud is mindless, cyclical violence passed down through generations.",
      "Wider play — Juliet's divided loyalties: Act 3 Scene 2 — 'Beautiful tyrant! Fiend angelical!' Oxymorons express her impossible position. She ultimately chooses Romeo over family, showing love transcends blood loyalty.",
      "Wider play — Capulet's conditional love: Act 3 Scene 5 — 'Hang, beg, starve, die in the streets.' Family loyalty is revealed as patriarchal control: Juliet is expected to obey, not to have her own desires.",
      "Context: Elizabethan family structures, male honour codes, the expectation of female obedience. 'All are punished' — Shakespeare shows the feud destroys both families and the innocent.",
    ],
  },
  {
    question:
      "How does Shakespeare present Juliet as a strong female character?",
    plan: [
      "Extract analysis: e.g., Act 2 Scene 2 — the balcony scene. Juliet is rational and philosophical ('What's in a name?'), questioning social constructs. She is practical about danger while Romeo is reckless. She drives the conversation towards marriage.",
      "Wider play — Transformation: from obedient daughter ('I'll look to like, if looking liking move') to independent woman who defies her father, deceives her family, and chooses death over compromise.",
      "Wider play — Courage: Act 4 Scene 1 — 'Give me, give me! O, tell not me of fear!' She takes the potion despite terrifying visions. She shows more courage than any male character in the play.",
      "Wider play — Agency in death: 'O happy dagger! This is thy sheath' — even her death is a choice. She refuses to let the Friar remove her agency. Her death by stabbing (masculine method) contrasts with Romeo's poison (passive consumption).",
      "Context: patriarchal Elizabethan society, women as property, arranged marriages. Juliet's rebellion is extraordinary for a 13-year-old girl in this context. Shakespeare presents her as intellectually and morally superior to the adults around her.",
    ],
  },
  {
    question:
      "How does Shakespeare present the theme of fate in Romeo and Juliet?",
    plan: [
      "Extract analysis: e.g., Act 5 Scene 1 — 'Then I defy you, stars!' Romeo's defiance of fate is ironic: his 'defiance' (rushing to die) actually fulfils the fate the stars predicted. Shakespeare shows that characters cannot escape their destiny.",
      "Wider play — Prologue: 'star-cross'd lovers' and 'death-mark'd love' — fate is announced before the play begins. Every joyful scene is shadowed by dramatic irony because the audience knows the outcome.",
      "Wider play — Premonitions: Romeo's 'Some consequence yet hanging in the stars' (1.4); Juliet's 'My grave is like to be my wedding bed' (1.5) — characters sense their fate but cannot avoid it.",
      "Wider play — The missed letter: Friar John's quarantine prevents the plan from working. Is this fate or coincidence? Shakespeare leaves it ambiguous. The accumulation of 'bad luck' creates a pattern that feels like destiny.",
      "Context: Elizabethan beliefs in Fortune's wheel, astrology, and divine providence. The play asks whether God, the stars, or human choices determine our lives — and refuses to give a simple answer.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function RomeoAndJulietPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-200">
            AQA English Literature &middot; Paper 1
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Romeo and Juliet &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            William Shakespeare &middot; Written c. 1594&ndash;96 &middot;
            Tragedy
          </p>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border px-4 py-3 overflow-x-auto">
        <div className="mx-auto flex max-w-5xl gap-2 text-xs font-medium sm:text-sm sm:gap-4 whitespace-nowrap">
          {[
            ["#exam-format", "Exam Format"],
            ["#plot", "Plot"],
            ["#characters", "Characters"],
            ["#themes", "Themes"],
            ["#quotations", "Quotations"],
            ["#context", "Context"],
            ["#command-words", "Command Words"],
            ["#essays", "Essay Planning"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-border px-3 py-1 text-muted-foreground transition hover:bg-primary hover:text-white hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── AQA Exam Format ────────────────────────────────────────── */}
      <section
        id="exam-format"
        className="mx-auto max-w-5xl px-4 py-12 sm:py-16"
      >
        <h2 className="text-2xl font-bold text-foreground">
          AQA Exam Format: What to Expect
        </h2>
        <p className="mt-2 text-muted-foreground">
          Understanding the exam structure is essential for maximising your marks.
          Romeo and Juliet appears in{" "}
          <strong>{aqaExamFormat.paper}</strong>,{" "}
          <strong>{aqaExamFormat.section}</strong>.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Marks Available
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">
                {aqaExamFormat.marks}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Recommended Time
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">
                {aqaExamFormat.time}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Question Format
            </p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {aqaExamFormat.format}
            </p>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-bold text-foreground">
          Assessment Objectives Breakdown
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {aqaExamFormat.assessmentObjectives.map((ao) => (
            <div
              key={ao.code}
              className="rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <div className="flex items-baseline gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {ao.code}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {ao.marks}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ao.description}
              </p>
              <p className="mt-2 text-sm text-accent font-medium leading-relaxed">
                Tip: {ao.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Plot Summary ─────────────────────────────────────────── */}
      <section id="plot" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Plot Summary: Act by Act
          </h2>
          <p className="mt-2 text-muted-foreground">
            The action of Romeo and Juliet takes place over just five days,
            creating a breathless pace that mirrors the intensity of the
            lovers&apos; passion.
          </p>

          <div className="mt-8 space-y-10">
            {actSummaries.map((act) => (
              <div key={act.act}>
                <h3 className="text-lg font-bold text-primary">
                  {act.act}: {act.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {act.scenes.map((scene) => (
                    <div
                      key={scene.scene}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {scene.scene.includes("Prologue")
                          ? scene.scene
                          : `Scene ${scene.scene}`}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {scene.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Characters ───────────────────────────────────────────── */}
      <section id="characters" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Character Analysis
        </h2>
        <p className="mt-2 text-muted-foreground">
          Understanding characters as constructs &mdash; Shakespeare made
          deliberate choices about how to present each character to convey
          meaning.
        </p>

        <div className="mt-8 space-y-8">
          {characters.map((char) => (
            <div
              key={char.name}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  {char.name}
                </h3>
                <span className="text-sm text-accent font-medium">
                  {char.role}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {char.description}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Points for Analysis
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {char.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Quotations
                </h4>
                <div className="mt-2 space-y-1">
                  {char.keyQuotes.map((q) => (
                    <p
                      key={q}
                      className="text-sm italic text-primary-700 bg-primary-50 rounded px-3 py-1.5"
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section id="themes" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Themes &mdash; AQA Focus
          </h2>
          <p className="mt-2 text-muted-foreground">
            Themes are the big ideas Shakespeare explores through the plot,
            characters, and language of the play.
          </p>

          <div className="mt-8 space-y-8">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className={`rounded-xl border p-6 ${theme.colour}`}
              >
                <h3 className="text-xl font-bold text-foreground">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {theme.analysis}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Points
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {theme.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="mt-2 space-y-1">
                    {theme.keyQuotes.map((q) => (
                      <p
                        key={q}
                        className="text-sm italic text-muted-foreground bg-card/60 rounded px-3 py-1.5"
                      >
                        {q}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Quotations ───────────────────────────────────────── */}
      <section id="quotations" className="bg-primary-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations and their analysis. In the exam, embed short
            phrases rather than copying entire quotes. AQA rewards analysis of
            individual words and techniques (AO2).
          </p>

          <div className="mt-8 space-y-4">
            {keyQuotations.map((q, i) => (
              <div
                key={i}
                className="rounded-xl bg-card p-5 shadow-md border border-border"
              >
                <p className="text-base font-semibold italic text-primary">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context ──────────────────────────────────────────────── */}
      <section id="context" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Historical and Social Context
        </h2>
        <p className="mt-2 text-muted-foreground">
          Context (AO3) is worth 6 marks. Integrate it into your analysis rather
          than writing separate &quot;context paragraphs.&quot;
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {contextPoints.map((ctx) => (
            <div
              key={ctx.title}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="font-bold text-primary">{ctx.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ctx.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AQA Command Words ──────────────────────────────────── */}
      <section
        id="command-words"
        className="bg-muted px-4 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            AQA Command Words &mdash; What They Really Mean
          </h2>
          <p className="mt-2 text-muted-foreground">
            Understanding the question wording is crucial. Here are the key
            phrases AQA uses and what they require from you.
          </p>

          <div className="mt-8 space-y-4">
            {commandWords.map((cw) => (
              <div
                key={cw.word}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <p className="font-bold text-primary italic">
                  &ldquo;{cw.word}&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cw.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essay Planning ───────────────────────────────────────── */}
      <section id="essays" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Essay Planning: Sample AQA Questions
        </h2>
        <p className="mt-2 text-muted-foreground">
          Practise planning essays in 5 minutes. These reflect the style of AQA
          Paper 1 Section A questions. Remember: start with the extract, then
          move to the wider play.
        </p>

        <div className="mt-8 space-y-6">
          {essayQuestions.map((eq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <h3 className="font-bold text-foreground">Q: {eq.question}</h3>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Suggested Paragraph Plan
                </p>
                <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                  {eq.plan.map((p, j) => (
                    <li key={j} className="leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/resources/english-literature/aqa"
          className="text-sm font-medium text-accent hover:text-accent-600 transition"
        >
          &larr; Back to AQA English Literature
        </Link>
      </section>

    </>
  );
}
