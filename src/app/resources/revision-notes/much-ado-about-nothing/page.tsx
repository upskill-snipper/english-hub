"use client";

import { useState } from "react";

/* ─── Expandable Section ─────────────────────────────────────── */

function Section({
  title,
  id,
  children,
  defaultOpen = false,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border bg-primary/[0.08] px-5 py-3.5 text-left text-lg font-bold text-foreground transition hover:bg-primary/[0.12]"
        aria-expanded={open}
      >
        <span id={`${id}-heading`}>{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-4 space-y-4">{children}</div>}
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-md">
      {title && <h3 className="font-semibold text-foreground">{title}</h3>}
      <div className={title ? "mt-2" : ""}>{children}</div>
    </div>
  );
}

function QuoteCard({
  quote,
  speaker,
  act,
  analysis,
}: {
  quote: string;
  speaker: string;
  act: string;
  analysis: string;
}) {
  return (
    <div className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
      <blockquote className="text-base font-medium italic text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-1 text-xs font-semibold text-primary">
        {speaker} &mdash; {act}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const sceneSummary = [
  {
    scene: "Act 1, Scene 1 - The Soldiers Return",
    summary:
      "Don Pedro, Prince of Aragon, arrives in Messina with his soldiers after a victorious military campaign. Among them are Claudio and Benedick. Leonato, the Governor of Messina, welcomes them. Claudio immediately falls in love with Leonato's daughter Hero. Beatrice and Benedick engage in a sharp 'merry war' of wits, each claiming to despise the other. Don Pedro offers to woo Hero on Claudio's behalf at the masked ball that evening. Don John, Don Pedro's illegitimate brother, broods resentfully.",
  },
  {
    scene: "Act 1, Scenes 2-3 - Plots Begin",
    summary:
      "Antonio tells Leonato (incorrectly) that Don Pedro intends to woo Hero for himself. Meanwhile, Don John and his followers Borachio and Conrade learn of Claudio's love for Hero. Don John, motivated by malice and resentment of Claudio's favour with Don Pedro, resolves to spoil the match. The parallel misinformation establishes the play's central concern with deception and 'noting' (mishearing, misinterpreting).",
  },
  {
    scene: "Act 2, Scene 1 - The Masked Ball",
    summary:
      "At the ball, Don Pedro woos Hero on Claudio's behalf while masked. Don John tells Claudio (also masked) that Don Pedro is wooing Hero for himself. Claudio is instantly jealous. Beatrice, dancing with a masked Benedick, insults him freely, calling him 'the Prince's jester'. The misunderstanding is quickly resolved: Don Pedro presents Hero to Claudio, and they are betrothed. Don Pedro then proposes a plan to trick Beatrice and Benedick into falling in love with each other.",
  },
  {
    scene: "Act 2, Scene 2 - Don John's Plot",
    summary:
      "Borachio devises the play's central deception: Margaret (Hero's gentlewoman) will appear at Hero's window with Borachio, making it look as though Hero is being unfaithful. Don John will lead Claudio and Don Pedro to witness this scene the night before the wedding. The plan exploits the male anxiety about female chastity that pervades Messina's honour culture.",
  },
  {
    scene: "Act 2, Scene 3 - The Gulling of Benedick",
    summary:
      "Don Pedro, Leonato, and Claudio stage a conversation for Benedick to overhear, claiming that Beatrice is desperately in love with him but fears his mockery. Benedick, hiding in the arbour, takes every word at face value. In a comic soliloquy, he convinces himself that he loves Beatrice too, reinterpreting her insults as signs of hidden affection. His transformation from self-proclaimed bachelor to eager lover is immediate and complete.",
  },
  {
    scene: "Act 3, Scene 1 - The Gulling of Beatrice",
    summary:
      "Hero and Ursula perform the same trick on Beatrice, discussing how Benedick supposedly loves her but she is too proud and scornful to deserve him. Beatrice overhears and, in a soliloquy, resolves to return Benedick's love: 'Benedick, love on; I will requite thee.' Her transformation mirrors Benedick's but is expressed in verse rather than prose, suggesting deeper emotional sincerity.",
  },
  {
    scene: "Act 3, Scenes 2-3 - Building to Crisis",
    summary:
      "Benedick appears love-struck and melancholy; his friends tease him. Don John tells Claudio and Don Pedro that Hero is unfaithful and offers to show them proof that night. Meanwhile, the bumbling constables Dogberry and Verges lead the Watch, who overhear Borachio drunkenly confessing the deception to Conrade. The Watch arrests them, but Dogberry's incompetence delays the truth reaching Leonato.",
  },
  {
    scene: "Act 3, Scenes 4-5 - The Wedding Morning",
    summary:
      "Hero prepares for her wedding with Margaret and Ursula. Margaret's bawdy jokes contrast with Hero's innocence. Dogberry attempts to tell Leonato about the arrested villains, but his verbose, confused speech means Leonato dismisses him and hurries to the wedding. This is the play's most painful moment of dramatic irony: the truth exists but cannot reach the right people in time.",
  },
  {
    scene: "Act 4, Scene 1 - The Broken Wedding",
    summary:
      "At the altar, Claudio publicly rejects Hero, calling her a 'rotten orange' and accusing her of infidelity. Don Pedro and Don John support the accusation. Hero faints; Leonato, initially believing the accusation, wishes her dead. Friar Francis, noting Hero's innocent blush, proposes faking her death to buy time for the truth to emerge. Beatrice and Benedick, left alone, confess their love. Beatrice demands that Benedick prove his love by challenging Claudio: 'Kill Claudio.' Benedick, torn between friendship and love, agrees.",
  },
  {
    scene: "Act 4, Scene 2 - Dogberry's Examination",
    summary:
      "Dogberry comically interrogates Borachio and Conrade. Despite his malapropisms and procedural confusion, the truth emerges: Don John paid Borachio to stage the window scene with Margaret. The scene's comedy provides relief after the intensity of the broken wedding, but also highlights how fragile the truth is: it depends on the competence of fools.",
  },
  {
    scene: "Act 5, Scene 1 - Confrontation and Revelation",
    summary:
      "Leonato and his brother Antonio confront Claudio and Don Pedro, challenging them for destroying Hero. Benedick then challenges Claudio to a duel. Dogberry finally brings Borachio before Don Pedro, and the deception is revealed. Claudio is overcome with remorse. Leonato demands that Claudio mourn at Hero's tomb and agree to marry his 'niece' (actually Hero in disguise). Don John has fled but is captured.",
  },
  {
    scene: "Act 5, Scenes 2-4 - Resolution",
    summary:
      "Benedick and Beatrice engage in witty banter, each reluctant to admit loving the other. Claudio mourns at Hero's tomb with a song of penitence. At the second wedding, Hero is revealed alive. Claudio is joyful and repentant. Beatrice and Benedick initially deny their love, but love letters they each wrote are produced as evidence. They agree to marry, and Benedick silences Beatrice with a kiss. News arrives that Don John has been captured. The play ends with a dance.",
  },
];

const characters = [
  {
    name: "Beatrice",
    description:
      "Leonato's niece and the play's most dynamic character. Beatrice is witty, intelligent, fiercely independent, and deeply sceptical of men and marriage ('I had rather hear my dog bark at a crow than a man swear he loves me'). Her 'merry war' with Benedick is the play's central delight: their verbal sparring is a form of intellectual equality rare in Elizabethan drama. Beneath her sharp tongue, however, lies vulnerability: her quick acceptance of the gulling trick suggests she already has feelings for Benedick. Her most powerful moment is 'Kill Claudio', where she expresses fury at her powerlessness as a woman: 'O that I were a man!' She cannot challenge Claudio herself because women were excluded from the honour code. Beatrice combines comedy with a serious critique of gender inequality, making her one of Shakespeare's most beloved and complex heroines.",
  },
  {
    name: "Benedick",
    description:
      "A soldier and witty bachelor who swears he will never marry ('I will live a bachelor'). His verbal sparring with Beatrice reveals a sharp mind and deep emotional investment that contradicts his professed indifference. His gulling scene is comic masterpiece: he instantly believes Beatrice loves him and reinterprets her every past insult as hidden affection. His decision to challenge Claudio ('Kill Claudio') is the play's most significant character moment: he chooses Beatrice over his male friendships and the soldier's code of honour. This represents genuine moral growth: he moves from superficial wit to principled action. By the end, he has not been tamed but has chosen love willingly, and his final line ('Peace! I will stop your mouth') is a playful reassertion of the verbal dynamic that defines their relationship.",
  },
  {
    name: "Hero",
    description:
      "Leonato's daughter, beautiful, gentle, and obedient. Hero conforms to the Elizabethan ideal of womanhood: she is modest, dutiful, and speaks little in public. Her silence at her own betrothal (Claudio and Don Pedro arrange the marriage; she barely speaks) reflects women's lack of agency in Elizabethan courtship. The public shaming scene is devastating precisely because Hero has done nothing wrong: she is a victim of male assumptions about female sexuality. Her 'death' and resurrection allow her to be symbolically reborn into the marriage, but critics question whether the play adequately addresses Claudio's cruelty. Hero's quiet strength is often underestimated: she orchestrates Beatrice's gulling with skill and humour, showing an intelligence that her dutiful exterior conceals.",
  },
  {
    name: "Claudio",
    description:
      "A young soldier who falls instantly in love with Hero but is equally quick to believe the worst of her. Claudio embodies the contradictions of the Elizabethan male: he idealises Hero's beauty and chastity but views her as property ('Can the world buy such a jewel?'). His public shaming of Hero reveals a capacity for cruelty that is sanctioned by the honour code: his reputation matters more than her feelings. His remorse after learning the truth is genuine but raises questions about whether he has truly changed. Some productions play him as a naive young man manipulated by Don John; others emphasise his self-centred cruelty. Shakespeare may be using Claudio to critique the very conventions of romantic comedy that the play employs.",
  },
  {
    name: "Don Pedro",
    description:
      "The Prince of Aragon, Don Pedro is generous, witty, and socially powerful. He orchestrates both the Claudio-Hero match and the Beatrice-Benedick gulling trick, taking pleasure in playing matchmaker. However, he also participates in the public shaming of Hero without questioning Don John's evidence, revealing how easily authority can be manipulated. His loneliness is a subtle undercurrent: he proposes marriage to Beatrice (possibly in jest) and ends the play without a partner. Don Pedro's role as a benevolent schemer complicates the play's attitude to deception: his 'good' deceptions succeed where Don John's 'evil' one fails, but both rely on the same mechanism of manipulating perception.",
  },
  {
    name: "Don John",
    description:
      "Don Pedro's illegitimate brother and the play's villain. Don John is melancholy, resentful, and self-consciously villainous: 'I am a plain-dealing villain.' His motivation is partly jealousy of Claudio's favour and partly the social stigma of illegitimacy. Unlike Shakespeare's complex villains (Iago, Edmund), Don John is deliberately underdeveloped; he is a plot device more than a character. His flatness may be the point: evil in this play does not need sophisticated motivation; it only needs a society willing to believe the worst about women. His flight at the end is reported rather than dramatised, and his punishment is deferred, suggesting the play is less interested in justice than in reconciliation.",
  },
  {
    name: "Leonato",
    description:
      "Hero's father and Governor of Messina. Leonato is a genial host whose response to Hero's shaming is shockingly violent: he initially believes the accusation and wishes Hero dead ('Do not live, Hero; do not ope thine eyes'). His reaction reveals how deeply patriarchal honour is tied to female chastity: Hero's supposed unchastity dishonours him. His later grief and his challenge to Claudio show genuine parental love, but his initial response exposes the brutality of the honour system. Leonato embodies the contradiction between private affection and public honour that defines Messina's society.",
  },
  {
    name: "Dogberry",
    description:
      "The self-important constable whose malapropisms (using the wrong word: 'Our watch, sir, have indeed comprehended two auspicious persons') provide some of the play's best comedy. Dogberry is crucial to the plot: his Watch discovers the truth about Don John's deception, but his incompetence delays the revelation until after the broken wedding. Shakespeare uses Dogberry to show that truth emerges despite, not because of, institutional authority. His outrage at being called an 'ass' and his insistence that 'I am a wise fellow' satirise petty officialdom. In performance, Dogberry often steals the show.",
  },
];

const themes = [
  {
    name: "Love",
    detail:
      "The play presents two contrasting models of love. Claudio and Hero's love is conventional, rapid, and based largely on appearance: Claudio 'notes' Hero's beauty and immediately wants to possess her. Beatrice and Benedick's love emerges from mutual intellectual respect and emotional honesty; their 'merry war' is a form of intimacy. Shakespeare suggests that the witty, combative love is more durable and genuine than the idealised, Petrarchan model. Both couples require deception to come together (the gulling tricks, the faked death), which raises the question of whether love always involves a degree of self-deception. The play's title itself encodes this: 'nothing' was Elizabethan slang for 'noting' (observing, eavesdropping), and much of the play's love is shaped by what characters overhear and misinterpret.",
  },
  {
    name: "Honour and Reputation",
    detail:
      "Honour drives the play's central crisis. Claudio values Hero's chastity as a reflection of his own honour: her alleged infidelity humiliates him publicly. Leonato's initial wish for Hero's death ('Do not live, Hero') shows that a daughter's unchastity destroys a father's reputation. The honour code demands public shaming, not private resolution, which is why Claudio rejects Hero at the altar rather than in private. Beatrice's cry 'O that I were a man!' exposes the gendered nature of honour: women suffer from the code but cannot defend themselves within it. Shakespeare critiques honour culture by showing its human cost, particularly for women, while also acknowledging its power over even sympathetic characters.",
  },
  {
    name: "Deception and Noting",
    detail:
      "Deception pervades every level of the play: benevolent (the gulling of Beatrice and Benedick), malevolent (Don John's slander of Hero), self-deceptive (Benedick's sudden belief that he loves Beatrice), and institutional (the masked ball, the faked death). The title puns on 'nothing' and 'noting': characters constantly observe, eavesdrop, and misinterpret. The play asks whether truth can ever be reliably perceived: Claudio sees Margaret at the window and 'notes' infidelity; Benedick overhears a staged conversation and 'notes' love. Both are wrong, yet one deception leads to tragedy and the other to happiness. Shakespeare suggests that perception is always mediated by expectation, prejudice, and desire.",
  },
  {
    name: "Gender and Patriarchy",
    detail:
      "The play dramatises the constraints placed on women in a patriarchal society. Hero's silence at her betrothal, her public shaming, and Leonato's reaction all reveal that women are valued primarily for their chastity and obedience. Beatrice challenges these norms through wit and verbal assertiveness, but even she is ultimately constrained: she cannot fight Claudio herself and must ask Benedick to act on her behalf. The play's resolution restores the patriarchal order (marriages, reconciliation under male authority), but Beatrice's refusal to be wholly silenced ('Peace! I will stop your mouth' is spoken while kissing, not submitting) suggests that her independence survives, however tenuously, within the comic structure.",
  },
  {
    name: "Appearance versus Reality",
    detail:
      "The gap between appearance and reality generates both comedy and tragedy. The masked ball literalises the theme: characters interact through disguise and misidentify each other. Hero appears unfaithful but is innocent; Don John appears honest but is villainous; Beatrice and Benedick appear to hate each other but are in love. The window scene is the play's most dangerous moment of misperception: a staged appearance is taken as reality, with devastating consequences. Shakespeare suggests that in a society obsessed with surfaces (beauty, reputation, social performance), truth is always vulnerable to manipulation.",
  },
];

const keyQuotes = [
  {
    quote: "I had rather hear my dog bark at a crow than a man swear he loves me",
    speaker: "Beatrice",
    act: "Act 1, Scene 1",
    analysis:
      "Beatrice's hyperbolic dismissal of romantic love establishes her as a nonconformist. The comparison of a lover's oaths to a dog's barking degrades romance to animal noise. The line is comic but also defensive: Beatrice's extreme rejection of love hints at past hurt (there are suggestions of a previous relationship with Benedick). Her wit is both a weapon and a shield.",
  },
  {
    quote: "I would my horse had the speed of your tongue, and so good a continuer. But keep your way, i' God's name; I have done",
    speaker: "Benedick",
    act: "Act 1, Scene 1",
    analysis:
      "Benedick admits defeat in the wit-combat, comparing Beatrice's tongue to a tireless horse. His concession ('I have done') is significant: Beatrice wins their first exchange, establishing her as his equal or superior in verbal combat. The horsemanship metaphor is characteristically masculine, revealing Benedick's attempt to frame their exchange in his own terms while acknowledging her dominance.",
  },
  {
    quote: "Can the world buy such a jewel?",
    speaker: "Claudio",
    act: "Act 1, Scene 1",
    analysis:
      "Claudio's metaphor reveals that he views Hero as a commodity: beautiful, valuable, and to be acquired. The language of purchase foreshadows the transactional nature of their courtship (Don Pedro negotiates, Leonato agrees to terms). Comparing a woman to a jewel was conventional, but Shakespeare draws attention to its implications: jewels are owned, displayed, and can be judged counterfeit.",
  },
  {
    quote: "She speaks poniards, and every word stabs",
    speaker: "Benedick",
    act: "Act 2, Scene 1",
    analysis:
      "Benedick describes Beatrice's wit as weaponry. 'Poniards' (daggers) transforms verbal sparring into physical combat, suggesting that words have real power to wound. The military imagery is telling: Benedick is a soldier who feels outmatched by a woman's tongue, challenging the masculine hierarchy of his profession. The hyperbole also reveals his obsessive preoccupation with Beatrice.",
  },
  {
    quote: "I do love nothing in the world so well as you: is not that strange?",
    speaker: "Benedick",
    act: "Act 4, Scene 1",
    analysis:
      "Benedick's love confession is characteristically understated: the question 'is not that strange?' acknowledges the absurdity of his transformation. The simplicity of 'I do love nothing in the world so well as you' is more powerful than any Petrarchan sonnet because it comes from a man who has spent the play mocking love. The rhetorical question invites Beatrice to share the joke, maintaining their dynamic of mutual wit even in sincerity.",
  },
  {
    quote: "Kill Claudio",
    speaker: "Beatrice",
    act: "Act 4, Scene 1",
    analysis:
      "Two of the most shocking words in Shakespeare. Beatrice's demand follows immediately after her love confession to Benedick, fusing love and violence. She tests Benedick's commitment: will he choose her over male friendship? The demand also expresses her fury at being unable to act herself: in a patriarchal society, a woman's only recourse is through a man. The bluntness of 'Kill Claudio' (no elaboration, no justification) conveys absolute conviction and rage.",
  },
  {
    quote: "O that I were a man! What, bear her in hand until they come to take hands; and then, with public accusation, uncovered slander, unmitigated rancour \u2014 O God, that I were a man! I would eat his heart in the marketplace",
    speaker: "Beatrice",
    act: "Act 4, Scene 1",
    analysis:
      "Beatrice's most passionate speech exposes the gendered limitation of the honour code. 'O that I were a man!' repeated twice, expresses not a desire to be male but fury at the injustice of being excluded from action by her sex. The violent imagery ('eat his heart in the marketplace') is deliberately public: she wants Claudio's humiliation to match Hero's. The speech is a devastating critique of a society that silences women while allowing men to destroy them publicly.",
  },
  {
    quote: "Thou and I are too wise to woo peaceably",
    speaker: "Benedick",
    act: "Act 5, Scene 2",
    analysis:
      "Benedick redefines their conflict as a form of courtship. 'Too wise' is both a compliment (intelligence prevents conventional romance) and an acknowledgement that their love will always be argumentative. The line suggests that their 'merry war' will continue within marriage, which is presented as a strength: their relationship is honest because it does not rely on false harmony.",
  },
  {
    quote: "Peace! I will stop your mouth",
    speaker: "Benedick",
    act: "Act 5, Scene 4",
    analysis:
      "Benedick silences Beatrice with a kiss in the play's final scene. The line is ambiguous: is it playful (a witty end to their verbal combat) or patriarchal (a man literally silencing a woman)? In performance, the line's meaning depends on the actors. The best productions maintain the tension: Beatrice is 'stopped' but not defeated; the kiss is mutual, not imposed. The line encapsulates the play's unresolved question about whether comic marriage truly resolves gender conflict.",
  },
  {
    quote: "Sigh no more, ladies, sigh no more, / Men were deceivers ever, / One foot in sea and one on shore, / To one thing constant never",
    speaker: "Balthasar (song)",
    act: "Act 2, Scene 3",
    analysis:
      "This song, performed before Benedick's gulling, ironically warns about male deception while being part of a deception. 'Men were deceivers ever' voices a cynicism that the play both supports (Don John, Claudio's fickleness) and challenges (Benedick's transformation). The song's instruction to women ('sigh no more') advises resigned acceptance, which Beatrice's character emphatically rejects.",
  },
  {
    quote: "I am a plain-dealing villain",
    speaker: "Don John",
    act: "Act 1, Scene 3",
    analysis:
      "Don John's self-description is paradoxically honest: he openly declares his villainy. This transparency makes him a simpler character than Iago or Edmund but serves the play's thematic purpose: evil does not need to be clever, because society's structures (male honour, female silence, willing credulity) do the work for it. The oxymoron 'plain-dealing villain' suggests that honesty about one's wickedness is itself a form of deception.",
  },
  {
    quote: "She is fallen / Into a pit of ink, that the wide sea / Hath drops too few to wash her clean again",
    speaker: "Claudio",
    act: "Act 4, Scene 1",
    analysis:
      "Claudio's metaphor of ink staining echoes the blood imagery of Macbeth but applies to reputation rather than guilt. The hyperbole ('the wide sea hath drops too few') suggests that once a woman's reputation is damaged, it can never be restored. The passivity of 'she is fallen' implies that Hero brought this upon herself, absolving Claudio of responsibility. Shakespeare exposes how male rhetoric transforms the accuser into the victim.",
  },
  {
    quote: "But manhood is melted into curtsies, valour into compliment, and men are only turned into tongue, and trim ones too",
    speaker: "Beatrice",
    act: "Act 4, Scene 1",
    analysis:
      "Beatrice attacks the men who stood by while Hero was shamed. 'Manhood is melted' challenges their masculinity: real courage would mean defending the innocent, not performing hollow courtesies. The alliteration ('turned into tongue, and trim ones too') is scathing: men are all talk and appearance. This speech challenges the play's male characters and the audience to reconsider what 'manhood' truly means.",
  },
  {
    quote: "Do not live, Hero; do not ope thine eyes: / For, did I think thou wouldst not quickly die, / Thought I thy spirits were stronger than thy shames, / I myself would, on the rearward of reproaches, / Strike at thy life",
    speaker: "Leonato",
    act: "Act 4, Scene 1",
    analysis:
      "Leonato's most disturbing lines: a father wishing his daughter dead and threatening to kill her himself. This is the logical extreme of the honour code: a daughter's unchastity is worse than her death. 'Rearward of reproaches' is a military metaphor, treating his own child as an enemy. Shakespeare forces the audience to confront the violence inherent in patriarchal honour, even from a character previously presented as loving and genial.",
  },
  {
    quote: "One Hero died defiled, but I do live, / And surely as I live, I am a maid",
    speaker: "Hero",
    act: "Act 5, Scene 4",
    analysis:
      "Hero's self-reinvention at the second wedding is both triumphant and troubling. 'One Hero died defiled' refers to her old identity, destroyed by slander; the living Hero reasserts her virginity. The symbolism of death and rebirth gives Hero narrative power, but critics note that she must perform innocence for male satisfaction. Her identity is still defined by her chastity, even in her moment of vindication.",
  },
  {
    quote: "There was a star danced, and under that was I born",
    speaker: "Beatrice",
    act: "Act 2, Scene 1",
    analysis:
      "Beatrice describes herself as born under a dancing star, associating herself with joy, energy, and perhaps caprice. The image contrasts with the 'star-crossed' lovers of Romeo and Juliet: Beatrice's stars dance rather than doom. The line reveals the exuberance beneath her cynicism and foreshadows the play's comic resolution. It is one of Shakespeare's most delightful character-defining moments.",
  },
  {
    quote: "Comparisons are odorous",
    speaker: "Dogberry",
    act: "Act 3, Scene 5",
    analysis:
      "Dogberry means 'odious' but says 'odorous': a classic malapropism. His misuse of language parodies the elaborate rhetoric of the upper-class characters. Shakespeare uses Dogberry's linguistic incompetence to comic effect, but there is also a thematic point: in a play where language is constantly used to deceive, Dogberry's accidental honesty is refreshing. His garbled speech, ironically, gets closer to the truth than the courtiers' polished lies.",
  },
  {
    quote: "Dost thou not suspect my place? Dost thou not suspect my years? O that he were here to write me down an ass!",
    speaker: "Dogberry",
    act: "Act 4, Scene 2",
    analysis:
      "Dogberry means 'respect' not 'suspect', but his outrage at being called an 'ass' is genuinely felt. The repetition of 'suspect' and his demand to be 'written down' parodies official authority while exposing the fragility of social status. Dogberry's obsession with his own dignity mirrors the upper-class characters' obsession with honour, satirising the entire social hierarchy.",
  },
  {
    quote: "You seem to me as Dian in her orb, / As chaste as is the bud ere it be blown; / But you are more intemperate in your blood / Than Venus, or those pamper'd animals / That rage in savage sensuality",
    speaker: "Claudio",
    act: "Act 4, Scene 1",
    analysis:
      "Claudio's accusation contrasts the virginal Diana with the lustful Venus, framing Hero as a madonna/whore figure. The animal imagery ('pamper'd animals', 'savage sensuality') dehumanises her. The rhetorical structure (praise then reversal) makes the insult more devastating: Claudio first raises Hero to divine status, then casts her below animals. This speech reveals how the male idealization of women inevitably creates the conditions for violent disillusionment.",
  },
  {
    quote: "For it so falls out / That what we have we prize not to the worth / Whiles we enjoy it, but being lack'd and lost, / Why, then we rack the value, then we find / The virtue that possession would not show us / Whiles it was ours",
    speaker: "Friar Francis",
    act: "Act 4, Scene 1",
    analysis:
      "The Friar's plan to fake Hero's death is based on this psychological insight: people value what they have lost more than what they possess. The generalisation ('what we have we prize not to the worth') applies beyond Claudio to the play's broader exploration of perception. 'Rack' means both 'increase' and 'torture', suggesting that loss distorts value rather than simply revealing it. The Friar's wisdom, like Friar Lawrence's in Romeo and Juliet, is genuine but his scheme is risky.",
  },
];

const contextTopics = [
  {
    title: "Elizabethan Women and Marriage",
    content:
      "In Shakespeare's England, women had no legal identity separate from their fathers or husbands. Marriage was an economic and social arrangement, especially among the wealthy. A woman's value was tied to her chastity: loss of virginity before marriage brought shame on the entire family. Hero's public shaming reflects these real stakes. Beatrice's resistance to marriage ('I will not have a husband till I can make one of better stuff') would have been seen as both entertaining and socially transgressive. The play explores whether women can find agency within or against these constraints.",
  },
  {
    title: "Courtship Conventions",
    content:
      "Elizabethan courtship among the upper classes was highly formalised: fathers negotiated matches, and the woman's consent was often secondary. Claudio's courtship of Hero follows this pattern precisely: he tells Don Pedro of his interest, Don Pedro brokers the match with Leonato, and Hero is presented as a gift. Beatrice and Benedick's courtship, by contrast, subverts every convention: it involves no parents, no intermediaries, and is based on mutual wit rather than beauty or wealth. Shakespeare uses the two couples to contrast conventional and unconventional modes of love.",
  },
  {
    title: "Conventions of Comedy",
    content:
      "As a comedy, Much Ado follows established conventions: multiple love plots, misunderstandings resolved, and marriage as the conclusion. However, Shakespeare strains these conventions: Claudio's cruelty, Leonato's violent reaction, and Don John's malice introduce darker elements that sit uneasily with the comic resolution. The play is often classified as a 'problem comedy' because the happy ending feels incomplete: Claudio is rewarded despite his behaviour, and Don John's punishment is deferred. Shakespeare may be questioning whether comic conventions can adequately contain the realities of male violence and female suffering.",
  },
  {
    title: "The Italian Setting and Honour Culture",
    content:
      "Messina, Sicily, provides a setting associated with heat, passion, and an intense honour culture. Italian settings allowed Shakespeare to explore extreme behaviours at a safe distance from English society. The Mediterranean honour code, in which family reputation depended on female chastity and male courage, drives the play's central conflict. The public shaming of Hero is not merely cruel but culturally logical within this system: Claudio believes he is defending his honour. Shakespeare uses the Italian setting to examine how honour culture, when combined with patriarchy, creates structures that destroy the innocent.",
  },
  {
    title: "The 'Merry War' and Wit Culture",
    content:
      "Elizabethan culture prized wit (quick, clever speech) as a social accomplishment. Beatrice and Benedick's verbal sparring reflects a courtly tradition of witty repartee. Their 'merry war' is public performance: other characters watch and comment on their exchanges. Wit in the play is also gendered: Beatrice's wit makes her unusual and potentially threatening to male authority. The play asks whether wit is a barrier to genuine feeling or a means of expressing it: Beatrice and Benedick are most honest when they are funniest.",
  },
];

const examQuestions = [
  {
    type: "Extract-Based",
    question:
      "Read the extract from Act 4, Scene 1, beginning with 'Kill Claudio'. How does Shakespeare present Beatrice's character in this extract and elsewhere in the play?",
    guidance: [
      "Analyse the bluntness of 'Kill Claudio': no qualification, no hesitation. This is fury compressed into two words",
      "Discuss 'O that I were a man!': Beatrice identifies the gendered limitation that prevents her from acting",
      "Link to her earlier wit: the same verbal power is now directed at injustice rather than comedy",
      "Consider how this scene deepens her character beyond the witty nonconformist of the early acts",
      "Discuss Benedick's response: his agreement shows his love is genuine, not just the product of the gulling trick",
      "Context: Elizabethan women had no access to the honour code of duelling; Beatrice's frustration reflects real social constraints",
    ],
  },
  {
    type: "Essay Question",
    question:
      "How does Shakespeare use deception in Much Ado About Nothing?",
    guidance: [
      "Distinguish between benevolent deception (gulling tricks) and malevolent deception (Don John's plot)",
      "Analyse the gulling scenes: how do they work, and what do they reveal about Beatrice and Benedick?",
      "The window scene: Claudio 'sees' Hero's infidelity but misreads the evidence. Discuss the theme of 'noting'",
      "Hero's faked death: necessary deception to restore truth. Is this ironic?",
      "The masked ball: literal disguise as a metaphor for the play's concern with surfaces and hidden truths",
      "Consider the title: 'nothing'/'noting'. The play suggests that human perception is always a form of interpretation, never objective",
    ],
  },
  {
    type: "Essay Question",
    question:
      "How does Shakespeare present attitudes towards women in Much Ado About Nothing?",
    guidance: [
      "Contrast Hero (obedient, silent) with Beatrice (witty, assertive): two models of femininity",
      "Analyse Hero's shaming: Claudio's language dehumanises her; Leonato initially sides with the accusers",
      "Beatrice's 'O that I were a man!' exposes the gendered exclusion from power",
      "Discuss the double standard: male infidelity is unremarked; female infidelity is catastrophic",
      "The play's resolution: both women marry, but on different terms. Does Beatrice retain her independence?",
      "Context: Elizabethan expectations of female silence, chastity, and obedience (Coverture law)",
    ],
  },
  {
    type: "Extract-Based",
    question:
      "Read the gulling scene in Act 2, Scene 3. How does Shakespeare create comedy in this scene?",
    guidance: [
      "Physical comedy: Benedick hiding while the others perform awareness of his presence",
      "Dramatic irony: the audience knows the conversation is staged; Benedick does not",
      "Benedick's asides reveal his gullibility: he believes instantly, despite his proclaimed scepticism",
      "The contrast between Benedick's professed hatred of love and his immediate capitulation is comic",
      "His soliloquy reinterprets Beatrice's past insults as proof of love: comic self-deception",
      "Compare with Act 3, Scene 1 (Beatrice's gulling): Shakespeare gives Beatrice verse, suggesting deeper emotion",
    ],
  },
  {
    type: "Essay Question",
    question:
      "Is Much Ado About Nothing a celebration of love or a critique of it?",
    guidance: [
      "Celebrate: Beatrice and Benedick's love is witty, equal, and genuinely moving",
      "Critique: Claudio's 'love' is possessive, shallow, and destructive",
      "The gulling tricks: love requires deception to begin, even for the most intelligent characters",
      "Hero's death and resurrection: love comes at the cost of a woman's identity and freedom",
      "The title: 'Much Ado About Nothing' can be read as dismissive (love is trivial) or as Shakespeare's wry observation that the play's conflicts arise from misperception",
      "Consider whether the happy ending resolves or papers over the play's darker implications",
    ],
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function MuchAdoStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            GCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Much Ado About Nothing &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Scene-by-scene summary, 8 character analyses, 5 key themes, 20+ quotations with
            detailed analysis, historical context, and essay planning.
          </p>
        </div>
      </section>

      {/* ── Jump-nav ──────────────────────────────────────────── */}
      <nav className="mt-8 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {["Scene Summary", "Characters", "Themes", "Key Quotes", "Context", "Essay Planning"].map(
          (s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ),
        )}
      </nav>

      <div className="mt-10 space-y-6">
        {/* ── Scene Summary ─────────────────────────────────────── */}
        <Section title="Scene-by-Scene Summary" id="scene-summary" defaultOpen>
          {sceneSummary.map((s) => (
            <Card key={s.scene} title={s.scene}>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </Card>
          ))}
        </Section>

        {/* ── Characters ────────────────────────────────────────── */}
        <Section title="Character Analysis" id="characters">
          <div className="grid gap-4 sm:grid-cols-2">
            {characters.map((c) => (
              <Card key={c.name} title={c.name}>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Themes ────────────────────────────────────────────── */}
        <Section title="Key Themes" id="themes">
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.map((t) => (
              <Card key={t.name} title={t.name}>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Key Quotes ────────────────────────────────────────── */}
        <Section title={`Key Quotations (${keyQuotes.length})`} id="key-quotes">
          <p className="text-sm text-muted-foreground">
            Each quotation includes speaker, location, and detailed analysis suitable for GCSE
            responses across all exam boards.
          </p>
          {keyQuotes.map((q, i) => (
            <QuoteCard key={i} {...q} />
          ))}
        </Section>

        {/* ── Context ───────────────────────────────────────────── */}
        <Section title="Historical and Literary Context" id="context">
          {contextTopics.map((c) => (
            <Card key={c.title} title={c.title}>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.content}</p>
            </Card>
          ))}
        </Section>

        {/* ── Essay Planning ────────────────────────────────────── */}
        <Section title="Essay Planning" id="essay-planning">
          <p className="text-sm text-muted-foreground">
            Common exam questions with guidance on how to plan and structure your response.
          </p>
          {examQuestions.map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                {eq.type}
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">{eq.question}</p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  {eq.guidance.map((g, j) => (
                    <li key={j}>&bull; {g}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>
      </div>
    </>
  );
}
