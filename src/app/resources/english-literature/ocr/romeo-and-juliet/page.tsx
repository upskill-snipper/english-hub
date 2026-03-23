import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Romeo and Juliet Study Guide for OCR | The English Hub",
  description:
    "Comprehensive Romeo and Juliet study guide for OCR GCSE English Literature. Characters, themes, key quotations, context, and essay planning.",
};

/* ─── Quotation data ─────────────────────────────────────────── */

const keyQuotations = [
  {
    quote: "Two households, both alike in dignity, / In fair Verona, where we lay our scene, / From ancient grudge break to new mutiny, / Where civil blood makes civil hands unclean",
    speaker: "Prologue",
    analysis:
      "The Prologue establishes the play's central conflict and its tragic inevitability. The oxymoron 'civil blood makes civil hands unclean' highlights the paradox of civilised citizens committing violent acts. The sonnet form of the Prologue is significant — sonnets are traditionally associated with love poetry, yet here Shakespeare uses the form to describe hatred and death, foreshadowing the intertwining of love and violence throughout the play. By revealing the ending at the start, Shakespeare shifts the audience's focus from what happens to why it happens.",
  },
  {
    quote: "O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / Like a rich jewel in an Ethiope's ear",
    speaker: "Romeo (Act 1, Scene 5)",
    analysis:
      "Romeo's first sight of Juliet is expressed through light and dark imagery. The hyperbole 'teach the torches to burn bright' elevates Juliet above the natural world — she is brighter than fire itself. The simile 'like a rich jewel in an Ethiope's ear' presents Juliet as something precious and radiant against darkness, establishing the play's recurring motif of light versus dark. This imagery also foreshadows the doomed nature of their love — beauty that shines brightest in darkness suggests something that cannot survive in the ordinary light of day.",
  },
  {
    quote: "My only love sprung from my only hate! / Too early seen unknown, and known too late!",
    speaker: "Juliet (Act 1, Scene 5)",
    analysis:
      "Juliet's reaction upon learning Romeo is a Montague uses antithesis ('love' / 'hate') to capture the central paradox of the play. The exclamatory tone conveys shock and despair. 'Too early seen unknown, and known too late' suggests the cruelty of fate — she fell in love before she knew his identity, and now the knowledge comes too late to undo her feelings. The rhyming couplet gives the line a sense of finality, as though their fate is already sealed.",
  },
  {
    quote: "But soft, what light through yonder window breaks? / It is the East, and Juliet is the sun",
    speaker: "Romeo (Act 2, Scene 2)",
    analysis:
      "The balcony scene opens with Romeo's metaphor comparing Juliet to the sun — the source of all light and life. This is more than romantic hyperbole; it positions Juliet as the centre of Romeo's universe, replacing everything else. The verb 'breaks' suggests sudden illumination, as though Juliet's appearance shatters the darkness. The East is where the sun rises, associating Juliet with new beginnings and hope. Yet the audience, knowing the Prologue, understands this 'sun' is destined to set.",
  },
  {
    quote: "What's in a name? That which we call a rose / By any other name would smell as sweet",
    speaker: "Juliet (Act 2, Scene 2)",
    analysis:
      "Juliet's philosophical reflection challenges the power of names and, by extension, the feud itself. She argues that identity is not determined by labels — a 'rose' is defined by its essence, not its name. This is a radical idea in a society governed by family honour and patriarchal authority. Juliet is essentially arguing that the feud is arbitrary and meaningless. However, the play ultimately proves her wrong — names and family allegiances do have the power to destroy, no matter how irrational they may be.",
  },
  {
    quote: "These violent delights have violent ends / And in their triumph die, like fire and powder, / Which, as they kiss, consume",
    speaker: "Friar Lawrence (Act 2, Scene 6)",
    analysis:
      "The Friar's warning is one of the play's most important pieces of foreshadowing. The oxymoron 'violent delights' captures the destructive potential within passionate love. The simile 'like fire and powder' compares their love to an explosion — beautiful but devastating, instant and all-consuming. The verb 'consume' suggests total destruction. The Friar functions as a choric voice here, articulating the play's central warning: that extremes of passion — whether love or hate — lead to destruction.",
  },
  {
    quote: "A plague o' both your houses!",
    speaker: "Mercutio (Act 3, Scene 1)",
    analysis:
      "Mercutio's dying curse is the play's turning point. Repeated three times, it condemns both the Montagues and Capulets equally, refusing to take sides in the feud that has cost him his life. The word 'plague' invokes disease and divine punishment — Mercutio sees the feud as a sickness infecting all of Verona. His death transforms the play from comedy to tragedy, and his curse proves prophetic: the 'plague' of the feud will indeed claim Romeo and Juliet. Shakespeare uses Mercutio to voice the audience's frustration at the senseless violence.",
  },
  {
    quote: "O, I am fortune's fool!",
    speaker: "Romeo (Act 3, Scene 1)",
    analysis:
      "Romeo's cry after killing Tybalt acknowledges the role of fate in his downfall. The metaphor 'fortune's fool' presents Romeo as a plaything of destiny — the word 'fool' suggests both a victim and a jester, someone manipulated for entertainment. This links to the Prologue's description of 'star-cross'd lovers' and reinforces the theme of fate versus free will. However, Romeo's exclamation also deflects personal responsibility — is he truly fate's victim, or has his own impulsive nature led him here?",
  },
  {
    quote: "Give me my Romeo; and, when I shall die, / Take him and cut him out in little stars, / And he will make the face of heaven so fine / That all the world will be in love with night",
    speaker: "Juliet (Act 3, Scene 2)",
    analysis:
      "Juliet's epithalamium (wedding-night speech) transforms Romeo into celestial imagery. The idea of cutting Romeo 'in little stars' is both beautiful and violent — the verb 'cut' foreshadows death while creating an image of eternal beauty. The conceit that Romeo would make 'all the world' fall 'in love with night' inverts the normal association of love with daylight. This speech exemplifies how Romeo and Juliet's love exists in darkness, hidden from the feuding world. The imagery also prefigures their deaths — they will indeed become immortal through their story.",
  },
  {
    quote: "Wisely and slow. They stumble that run fast",
    speaker: "Friar Lawrence (Act 2, Scene 3)",
    analysis:
      "The Friar's proverbial warning about haste proves tragically prophetic. The antithesis between 'wisely and slow' and 'run fast' captures the play's central tension between caution and impulsiveness. Romeo and Juliet's love moves at breakneck speed — they meet, marry, and die within four days. The verb 'stumble' is a gentle understatement for the catastrophe to come. The Friar's own advice, ironically, is something he himself fails to follow when he devises the sleeping potion plan.",
  },
  {
    quote: "O serpent heart hid with a flow'ring face! / Did ever dragon keep so fair a cave?",
    speaker: "Juliet (Act 3, Scene 2)",
    analysis:
      "Juliet's reaction to Romeo killing Tybalt is expressed through a series of oxymorons and antithetical images. The 'serpent heart' with a 'flow'ring face' echoes Lady Macbeth's 'look like the innocent flower / But be the serpent under't,' connecting deception with the Biblical Fall. Yet Juliet's anger is short-lived — she quickly defends Romeo, showing that her love transcends even the murder of her cousin. The passage reveals the impossible position the feud places her in: torn between family loyalty and romantic love.",
  },
  {
    quote: "Death, that hath suck'd the honey of thy breath, / Hath had no power yet upon thy beauty",
    speaker: "Romeo (Act 5, Scene 3)",
    analysis:
      "Romeo's words over Juliet's apparently dead body are charged with dramatic irony — she is not dead but drugged. The personification of Death as a creature that 'suck'd the honey' of her breath is both tender and grotesque. The fact that Juliet still looks beautiful is taken by Romeo as evidence of death's gentleness, when it is actually evidence that she lives. Shakespeare forces the audience to watch Romeo make a fatal mistake based on incomplete knowledge, heightening the tragedy unbearably.",
  },
  {
    quote: "Then I defy you, stars!",
    speaker: "Romeo (Act 5, Scene 1)",
    analysis:
      "Romeo's declaration upon hearing of Juliet's death is a moment of tragic defiance. By defying the 'stars' (fate), Romeo ironically fulfils the destiny foretold in the Prologue — his attempt to overcome fate through suicide is itself the completion of fate's plan. The exclamatory brevity of the line conveys desperate, impulsive energy. This moment encapsulates the play's exploration of free will versus destiny: Romeo believes he is taking control, but he is actually sealing his doom.",
  },
  {
    quote: "For never was a story of more woe / Than this of Juliet and her Romeo",
    speaker: "Prince Escalus (Act 5, Scene 3)",
    analysis:
      "The Prince's closing couplet frames the tragedy as a cautionary tale for Verona and the audience. The rhyming couplet gives a sense of formal closure, like the ending of a sonnet. The possessive 'her Romeo' is significant — in death, Romeo belongs to Juliet rather than to either family. The superlative 'never' and 'more woe' insist on the unique intensity of this tragedy. The Prince's words are also an indictment — the 'woe' was preventable, caused by the adults' hatred rather than the lovers' passion.",
  },
  {
    quote: "My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite",
    speaker: "Juliet (Act 2, Scene 2)",
    analysis:
      "Juliet's declaration of love uses the sea as a metaphor for limitless generosity. The simile 'boundless as the sea' and the paradox that giving increases rather than diminishes her love present an idealised vision of love as infinitely renewable. The iambic regularity and flowing enjambment mirror the boundless quality she describes. This is one of the most mature expressions of love in the play — Juliet articulates a love that is selfless and abundant, contrasting with the possessive, destructive love that the feud imposes.",
  },
  {
    quote: "Do you bite your thumb at us, sir?",
    speaker: "Abraham (Act 1, Scene 1)",
    analysis:
      "The play opens with a petty, almost comical confrontation between servants. Thumb-biting was an Elizabethan insult, and Shakespeare uses this trivial provocation to show how easily the feud escalates into violence. The legalistic quibbling ('Do you bite your thumb at us?') exposes the absurdity of the conflict — men are ready to kill over a gesture. This opening scene establishes that the feud is sustained not by genuine grievance but by performative masculinity and blind loyalty to family honour.",
  },
  {
    quote: "It is the East, and Juliet is the sun. / Arise, fair sun, and kill the envious moon",
    speaker: "Romeo (Act 2, Scene 2)",
    analysis:
      "Romeo's extended metaphor positions Juliet as the sun that eclipses Diana, the moon goddess associated with chastity and virginity. The imperative 'arise' and 'kill' inject urgency and violence into a love declaration, foreshadowing the entwining of love and death throughout the play. By asking Juliet to 'kill the envious moon,' Romeo is symbolically asking her to abandon chastity — a subversive request in Elizabethan society where female virginity was paramount. The celestial imagery elevates their love above the earthly feud.",
  },
  {
    quote: "O happy dagger, / This is thy sheath. There rust, and let me die",
    speaker: "Juliet (Act 5, Scene 3)",
    analysis:
      "Juliet's final words are devastatingly brief compared to Romeo's lengthy final speech, reflecting her decisive nature. The oxymoron 'happy dagger' redefines death as a joyful reunion with Romeo. The sexual connotation of 'sheath' connects death and consummation — the Elizabethan pun on 'die' (meaning both death and orgasm) makes their final union both tragic and intimate. Juliet's agency in choosing death is significant — throughout the play she has been controlled by her father, but in death she makes her own choice.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRRomeoAndJulietPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Romeo and Juliet: Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to know about Romeo and Juliet for OCR GCSE
            English Literature Component 01, Section A.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Exam format */}
        <section aria-labelledby="format-heading">
          <h2
            id="format-heading"
            className="text-2xl font-bold text-foreground"
          >
            OCR Exam Format
          </h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
              <p className="font-semibold text-primary">Component 01: Exploring Modern and Literary Heritage Texts</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Section A &mdash; Shakespeare. You will be given an extract
                from Romeo and Juliet and asked a question about a theme or
                character. You must analyse the extract <strong>and</strong>{" "}
                refer to the wider play. The question is worth{" "}
                <strong>40 marks</strong> and you should spend approximately{" "}
                <strong>50 minutes</strong> on it.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Plot summary */}
        <section aria-labelledby="plot-heading">
          <h2
            id="plot-heading"
            className="text-2xl font-bold text-foreground"
          >
            Plot Summary
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 1: The Feud and the Meeting</p>
                <p className="mt-2 text-sm">
                  The Prologue reveals that two feuding families in Verona
                  &mdash; the Montagues and Capulets &mdash; will lose their
                  children to a tragic love story. A street brawl between
                  servants escalates, and Prince Escalus threatens death to
                  anyone who disturbs the peace again. Romeo, lovesick over
                  Rosaline, is persuaded by Benvolio and Mercutio to attend a
                  Capulet feast. There, he sees Juliet and they fall instantly
                  in love. Tybalt recognises Romeo and vows revenge. Romeo and
                  Juliet share a sonnet and a kiss, only to discover they
                  belong to rival families.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 2: The Secret Marriage</p>
                <p className="mt-2 text-sm">
                  Romeo sneaks into the Capulet orchard and overhears Juliet on
                  her balcony declaring her love for him. They exchange vows of
                  love and plan to marry in secret. Romeo asks Friar Lawrence to
                  perform the ceremony; the Friar agrees, hoping the marriage
                  will end the feud. Juliet&rsquo;s Nurse acts as a
                  go-between. Romeo and Juliet are secretly married that
                  afternoon. The entire courtship and marriage takes place
                  within a single day, establishing the play&rsquo;s breakneck
                  pace.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 3: The Turning Point</p>
                <p className="mt-2 text-sm">
                  Tybalt challenges Romeo to a duel. Romeo, now secretly
                  Tybalt&rsquo;s kinsman by marriage, refuses to fight.
                  Mercutio fights Tybalt instead and is fatally stabbed when
                  Romeo tries to intervene. Enraged, Romeo kills Tybalt and is
                  banished from Verona by Prince Escalus. Juliet is torn
                  between grief for Tybalt and love for Romeo. Romeo spends one
                  night with Juliet before fleeing to Mantua. Lord Capulet
                  arranges Juliet&rsquo;s marriage to Count Paris, and when she
                  refuses, he threatens to disown her.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 4: The Desperate Plan</p>
                <p className="mt-2 text-sm">
                  Desperate and abandoned by the Nurse (who advises her to marry
                  Paris), Juliet turns to Friar Lawrence. He gives her a potion
                  that will make her appear dead for 42 hours. The plan is for
                  her to be placed in the Capulet tomb, where Romeo will come to
                  rescue her. Juliet takes the potion and is discovered
                  &ldquo;dead&rdquo; on the morning of her wedding to Paris.
                  The Capulet household is plunged into grief.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 5: The Tragedy</p>
                <p className="mt-2 text-sm">
                  The Friar&rsquo;s letter explaining the plan fails to reach
                  Romeo in Mantua. Instead, Romeo hears that Juliet is dead. He
                  buys poison and rushes to the tomb. There he encounters Paris,
                  kills him, and drinks the poison beside Juliet&rsquo;s body.
                  Juliet wakes to find Romeo dead and stabs herself with his
                  dagger. The Prince, the Montagues, and the Capulets arrive to
                  discover the bodies. The Friar explains the truth, and the
                  two families, devastated by the loss of their children, agree
                  to end the feud.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Characters */}
        <section aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>

          <div className="mt-6 space-y-6">
            {/* Romeo */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Romeo</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Romeo Montague is the play&rsquo;s tragic hero &mdash; a
                passionate, impulsive young man whose capacity for intense love
                is matched by his tendency towards rash action. When we first
                meet him, he is lovesick over Rosaline, using elaborate
                Petrarchan conceits (&ldquo;O brawling love, O loving
                hate&rdquo;) that suggest his love is more performative than
                genuine. His instant shift to Juliet raises questions about
                the depth of his feelings, yet his language transforms from
                clich&eacute;d to transcendent when he meets her.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Romeo&rsquo;s fatal flaw is his impulsiveness. He rushes into
                love, rushes into marriage, kills Tybalt in a moment of rage,
                and kills himself without pausing to verify Juliet&rsquo;s
                death. His cry &ldquo;O, I am fortune&rsquo;s fool!&rdquo;
                suggests he sees himself as a victim of fate, yet Shakespeare
                invites the audience to question whether his own choices are to
                blame. Romeo embodies the play&rsquo;s central tension between
                passion and reason, love and violence, youth and experience.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-accent-50 p-3">
                <p className="text-sm font-medium text-accent-700">Key character arc</p>
                <p className="mt-1 text-sm text-accent-800">
                  Lovesick Petrarchan lover &rarr; Genuinely transformed by
                  love &rarr; Impulsive avenger &rarr; Desperate exile &rarr;
                  Tragic, defiant death
                </p>
              </div>
            </div>

            {/* Juliet */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Juliet</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Juliet Capulet is only thirteen years old, yet she emerges as
                the play&rsquo;s most mature and articulate character.
                Initially presented as an obedient daughter (&ldquo;I&rsquo;ll
                look to like, if looking liking move&rdquo;), she rapidly
                develops into a young woman of extraordinary courage,
                intelligence, and emotional depth. Her balcony speech
                demonstrates philosophical sophistication as she questions the
                arbitrary power of names and family allegiances.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Unlike Romeo, Juliet is pragmatic as well as passionate. She
                insists on marriage rather than mere declarations of love, and
                she is more aware of the dangers they face. When abandoned by
                her parents and the Nurse, she shows remarkable resilience,
                choosing to take the Friar&rsquo;s potion despite her terror.
                Her final act &mdash; stabbing herself with Romeo&rsquo;s
                dagger &mdash; is both a declaration of love and an assertion
                of autonomy in a society that has denied her any choice.
                Shakespeare uses Juliet to challenge Elizabethan expectations
                of female passivity.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-accent-50 p-3">
                <p className="text-sm font-medium text-accent-700">Key character arc</p>
                <p className="mt-1 text-sm text-accent-800">
                  Obedient, sheltered daughter &rarr; Passionate lover &rarr;
                  Secret wife &rarr; Isolated and desperate &rarr; Courageous,
                  autonomous death
                </p>
              </div>
            </div>

            {/* Friar Lawrence */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Friar Lawrence</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Friar Lawrence is a complex figure who functions as both a
                mentor and a catalyst for tragedy. His knowledge of herbs and
                potions (&ldquo;Within the infant rind of this small
                flower / Poison hath residence, and medicine power&rdquo;)
                symbolises the play&rsquo;s central duality: the same substance
                can heal or destroy. He agrees to marry Romeo and Juliet
                hoping to end the feud, showing good intentions but flawed
                judgement.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Friar repeatedly warns against haste (&ldquo;Wisely and
                slow. They stumble that run fast&rdquo;), yet ironically
                devises the most reckless plan of all &mdash; the sleeping
                potion. His failure to deliver the letter to Romeo is the
                immediate cause of the tragedy. Shakespeare uses the Friar to
                explore the gap between wisdom and action, and to suggest that
                well-meaning adults can cause as much harm as the feuding
                families through their interference.
              </p>
            </div>

            {/* Mercutio */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Mercutio</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Mercutio is Romeo&rsquo;s closest friend and the play&rsquo;s
                most charismatic character &mdash; witty, irreverent, and
                scornful of romantic love. His Queen Mab speech (Act 1, Scene
                4) reveals a darker side beneath the humour, as the fairy
                fantasy descends into images of violence and corruption. He
                mocks Romeo&rsquo;s love as weakness and reduces everything to
                bawdy physicality, offering a counterpoint to Romeo&rsquo;s
                idealism.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Mercutio is neither Montague nor Capulet, which makes his death
                at Tybalt&rsquo;s hands particularly tragic &mdash; he is an
                innocent casualty of a feud that is not his own. His dying
                curse, &ldquo;A plague o&rsquo; both your houses!&rdquo;
                condemns both families and marks the play&rsquo;s irreversible
                turn from comedy to tragedy. His death removes the play&rsquo;s
                primary source of humour and lightness, leaving only darkness.
              </p>
            </div>

            {/* Tybalt */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Tybalt</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Tybalt is the embodiment of the feud &mdash; aggressive,
                honour-driven, and defined entirely by his hatred of the
                Montagues. Known as the &ldquo;Prince of Cats&rdquo; for his
                fencing skill, he represents the toxic masculinity and
                violence that pervades Verona. His fury at Romeo&rsquo;s
                presence at the Capulet feast (&ldquo;This, by his voice,
                should be a Montague. / Fetch me my rapier, boy&rdquo;) shows
                how the feud makes enemies of strangers.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Tybalt&rsquo;s death is the play&rsquo;s pivotal moment. His
                killing of Mercutio provokes Romeo&rsquo;s revenge, which
                leads to Romeo&rsquo;s banishment and ultimately to the
                lovers&rsquo; deaths. Shakespeare uses Tybalt to show how the
                older generation&rsquo;s hatred is transmitted to the young,
                perpetuating a cycle of violence that can only be broken by
                catastrophic loss.
              </p>
            </div>

            {/* The Nurse */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">The Nurse</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Nurse is Juliet&rsquo;s closest confidante and surrogate
                mother, providing comic relief with her bawdy humour and
                rambling speeches. She has raised Juliet since infancy and
                loves her deeply, yet her understanding of love is purely
                physical and pragmatic. She initially supports the secret
                marriage and acts as a go-between, showing loyalty to
                Juliet&rsquo;s happiness over her parents&rsquo; wishes.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                However, the Nurse&rsquo;s betrayal in Act 3, Scene 5 &mdash;
                advising Juliet to forget Romeo and marry Paris (&ldquo;I
                think it best you married with the County&rdquo;) &mdash; is a
                turning point in Juliet&rsquo;s isolation. The Nurse cannot
                comprehend the depth of Juliet&rsquo;s love because she sees
                marriage as a practical arrangement rather than a spiritual
                bond. Her abandonment drives Juliet to the Friar and towards
                the desperate plan that ends in tragedy.
              </p>
            </div>

            {/* Lord Capulet */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Lord Capulet</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Lord Capulet is initially presented as a reasonable father who
                tells Paris that Juliet is too young for marriage and that her
                consent matters (&ldquo;My will to her consent is but a
                part&rdquo;). However, after Tybalt&rsquo;s death, he becomes
                tyrannical, arranging Juliet&rsquo;s marriage without her
                knowledge and erupting in violent fury when she refuses
                (&ldquo;Hang thee, young baggage! Disobedient wretch!&rdquo;).
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                His transformation reveals the patriarchal power structures of
                Elizabethan society, where daughters were essentially their
                fathers&rsquo; property. Shakespeare uses Capulet to show how
                even loving parents can become instruments of oppression when
                they prioritise honour, social status, and control over their
                children&rsquo;s autonomy and happiness.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Themes */}
        <section aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Themes
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Love
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Shakespeare explores multiple forms of love: the shallow,
                Petrarchan love Romeo feels for Rosaline; the transcendent,
                transformative love between Romeo and Juliet; the bawdy,
                physical love described by Mercutio and the Nurse; the
                possessive, patriarchal love of Lord Capulet; and the
                well-meaning but ineffective love of the Friar. Romeo and
                Juliet&rsquo;s love is presented as genuine and
                all-consuming, but also as dangerously intense and hasty.
                Their love exists in opposition to the hate that surrounds it,
                and Shakespeare suggests that such extreme passion can only
                exist briefly before it is destroyed.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;My bounty is as boundless
                as the sea, / My love as deep; the more I give to thee, / The
                more I have, for both are infinite&rdquo; &mdash; Juliet
                presents love as infinitely renewable, contrasting with the
                zero-sum game of the feud.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Fate and Free Will
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Prologue introduces Romeo and Juliet as &ldquo;star-cross&rsquo;d
                lovers,&rdquo; suggesting their fate is written in the stars.
                Throughout the play, references to fate, fortune, and destiny
                create a sense of inevitability. Romeo calls himself
                &ldquo;fortune&rsquo;s fool&rdquo; and later defies the stars.
                Yet Shakespeare also presents the tragedy as the result of
                human choices &mdash; the feud, impulsive decisions, failed
                communication, and the adults&rsquo; inability to protect
                their children. The play invites the audience to question
                whether the lovers are truly fated, or whether their tragedy
                is the consequence of a society poisoned by hatred.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;Then I defy you, stars!&rdquo;
                &mdash; Romeo&rsquo;s attempt to defy fate ironically fulfils
                it.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Conflict and Violence
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The feud between the Montagues and Capulets is the engine of
                the tragedy. Shakespeare presents the conflict as senseless
                and self-perpetuating &mdash; an &ldquo;ancient grudge&rdquo;
                whose original cause is never explained. Violence erupts from
                trivial provocations (thumb-biting) and escalates to murder
                and suicide. The play connects violence to masculine honour:
                Tybalt fights to defend family pride, Mercutio fights because
                he despises cowardice, and Romeo kills in a rage he cannot
                control. Shakespeare suggests that such violence is ultimately
                futile &mdash; the feud achieves nothing except the
                destruction of the families&rsquo; own children.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;A plague o&rsquo; both your
                houses!&rdquo; &mdash; Mercutio&rsquo;s dying curse condemns
                the senselessness of the feud.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Light and Dark
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Light and dark imagery permeates the play. Romeo repeatedly
                associates Juliet with light (&ldquo;Juliet is the
                sun,&rdquo; &ldquo;she doth teach the torches to burn
                bright&rdquo;), yet their love flourishes only in darkness
                &mdash; they meet at a night-time feast, declare their love
                under cover of night, and are separated by the dawn. This
                paradox suggests that their love is too brilliant for the dark
                world of the feud, and that it can only exist in the hidden
                spaces between day and night, public and private. Ultimately,
                both lovers die in the darkness of the Capulet tomb, where
                their &ldquo;light&rdquo; is extinguished.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;It is the East, and Juliet
                is the sun&rdquo; &mdash; Romeo elevates Juliet to a cosmic
                force, yet the sun must always set.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Youth vs Age
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play dramatises a generational divide. The young lovers
                represent hope, passion, and the possibility of change, while
                the older generation &mdash; Lord Capulet, Lord Montague, and
                to some extent the Friar and the Nurse &mdash; represent
                tradition, authority, and the status quo. The adults&rsquo;
                failure to protect their children is central to the tragedy:
                Lord Capulet forces an unwanted marriage, the Nurse abandons
                Juliet, and the Friar&rsquo;s plan fails catastrophically.
                Shakespeare suggests that the older generation bears the
                greatest responsibility for the tragedy because they
                perpetuate the feud and fail to understand the intensity of
                youthful love.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;These violent delights have
                violent ends&rdquo; &mdash; the Friar understands the danger
                but cannot prevent it.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Death and Time
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Death haunts the play from the Prologue&rsquo;s revelation of
                the &ldquo;death-mark&rsquo;d&rdquo; love. Shakespeare
                repeatedly personifies Death as Juliet&rsquo;s rival lover
                &mdash; Lord Capulet says Death &ldquo;hath lain with&rdquo;
                Juliet, and Romeo finds Death has not marred her beauty. Time
                is compressed to an extraordinary degree: the entire action
                unfolds over four days, creating a relentless momentum that
                mirrors the lovers&rsquo; urgency and leaves no space for
                reflection or reconciliation. The haste itself becomes a cause
                of the tragedy &mdash; if Romeo had waited even moments
                longer, Juliet would have woken.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;Wisely and slow. They
                stumble that run fast&rdquo; &mdash; the Friar&rsquo;s
                warning about the danger of haste proves tragically prophetic.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Gender and Patriarchy
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Juliet exists within a patriarchal society where women are
                expected to obey their fathers and husbands. Lord Capulet
                treats her as property to be given in marriage (&ldquo;An you
                be mine, I&rsquo;ll give you to my friend&rdquo;), and the
                Nurse sees marriage as a practical transaction. Juliet&rsquo;s
                rebellion &mdash; choosing her own husband, defying her
                father, and ultimately choosing death over a life without
                Romeo &mdash; represents a radical challenge to patriarchal
                authority. Shakespeare invites sympathy for Juliet&rsquo;s
                position, presenting her father&rsquo;s rage as tyrannical
                rather than justified. The male characters&rsquo; obsession
                with honour and violence is also critiqued as a form of toxic
                masculinity that destroys everything it claims to protect.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Key quote:</strong> &ldquo;O happy dagger, / This is
                thy sheath&rdquo; &mdash; Juliet&rsquo;s final act is one of
                agency and self-determination.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Key quotations */}
        <section aria-labelledby="quotations-heading">
          <h2
            id="quotations-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations for the closed-book exam. Each one can be
            applied to multiple themes and characters.
          </p>

          <div className="mt-6 space-y-6">
            {keyQuotations.map((q) => (
              <div
                key={q.quote}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <blockquote className="border-l-4 border-accent pl-4 text-lg font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-2 text-sm font-medium text-primary">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Context */}
        <section aria-labelledby="context-heading">
          <h2
            id="context-heading"
            className="text-2xl font-bold text-foreground"
          >
            Elizabethan Context
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding context is essential for AO3. Here are the key
              contextual areas to know for Romeo and Juliet:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Elizabethan Marriage and Patriarchy</h3>
                <p className="mt-2 text-sm">
                  In Elizabethan England, marriages were typically arranged by
                  parents, especially among the wealthy. Women were legally the
                  property of their fathers and then their husbands. Daughters
                  were expected to be obedient and had little say in whom they
                  married. Juliet&rsquo;s defiance of her father would have
                  been shocking to an Elizabethan audience, yet Shakespeare
                  presents her position sympathetically, inviting the audience
                  to question the justice of patriarchal authority.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Honour and the Code of Vengeance</h3>
                <p className="mt-2 text-sm">
                  Italian and Elizabethan societies placed enormous value on
                  family honour. An insult to one family member demanded a
                  response from the entire clan. Duelling, though increasingly
                  outlawed, was still practised as a means of settling disputes.
                  Tybalt&rsquo;s challenge to Romeo and Mercutio&rsquo;s
                  intervention reflect this code of honour. Shakespeare
                  critiques this system by showing how it escalates trivial
                  conflicts into fatal violence.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Role of the Church</h3>
                <p className="mt-2 text-sm">
                  The Church was central to Elizabethan life, and Friar
                  Lawrence represents its authority. Marriage was a sacrament
                  that could not be undone, which is why Juliet cannot simply
                  marry Paris after secretly marrying Romeo. The Friar&rsquo;s
                  involvement in the secret marriage and his use of potions
                  would have been morally ambiguous to an Elizabethan audience
                  &mdash; he is acting against parental authority and using
                  deception, even if his intentions are good.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Petrarchan Love Poetry</h3>
                <p className="mt-2 text-sm">
                  Romeo&rsquo;s early language draws on the conventions of
                  Petrarchan love poetry &mdash; a tradition where the male
                  lover worships an unattainable woman using elaborate conceits,
                  oxymorons, and hyperbole. Shakespeare both uses and subverts
                  this tradition: Romeo&rsquo;s Petrarchan language for
                  Rosaline is exposed as shallow when contrasted with the more
                  genuine, mutual love he shares with Juliet. The sonnet form
                  &mdash; used in the Prologue and in Romeo and Juliet&rsquo;s
                  first exchange &mdash; connects the play to this poetic
                  tradition.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Fate and Fortune in Elizabethan Thought</h3>
                <p className="mt-2 text-sm">
                  Elizabethans believed in the influence of the stars and
                  fortune on human affairs. The concept of the &ldquo;wheel of
                  fortune&rdquo; &mdash; where individuals rise and fall
                  according to fate &mdash; was widely understood. Romeo and
                  Juliet as &ldquo;star-cross&rsquo;d lovers&rdquo; would have
                  resonated with an audience who believed that celestial forces
                  could determine human destiny. However, Shakespeare also
                  allows for human agency, creating a deliberate ambiguity
                  about whether the tragedy is fated or self-inflicted.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Italian Setting and Civil Disorder</h3>
                <p className="mt-2 text-sm">
                  Shakespeare set the play in Verona, Italy, drawing on Arthur
                  Brooke&rsquo;s poem <em>The Tragicall Historye of Romeus and
                  Juliet</em> (1562). Italy was associated in the English
                  imagination with passion, violence, and intrigue. The
                  Prince&rsquo;s repeated interventions to restore order
                  reflect Elizabethan anxieties about civil disorder and the
                  importance of strong governance. The play&rsquo;s message
                  &mdash; that private feuds endanger the entire community
                  &mdash; would have resonated in a society that had experienced
                  its own religious and political conflicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Essay planning */}
        <section aria-labelledby="essay-heading">
          <h2
            id="essay-heading"
            className="text-2xl font-bold text-foreground"
          >
            OCR Exam Technique
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Remember that the OCR Shakespeare question gives you an extract.
              You must analyse the extract <strong>and</strong> explore the
              wider play. Here is a recommended structure:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Introduction (3&ndash;4 sentences)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Address the question directly. State how Shakespeare
                  presents the theme/character in the extract and across the
                  play. Mention relevant context briefly.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 1: Extract analysis</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Close analysis of language in the extract. Quote specific
                  words and phrases. Explore connotations and effects. Use
                  subject terminology. Link to context where relevant.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 2: Extract analysis (continued)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Second key point from the extract. Consider structural
                  features, dramatic techniques, or a different aspect of the
                  language.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 3: Wider play (earlier in the text)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explore how the same theme/character is presented earlier in
                  the play. Use a memorised quotation. Compare with the
                  extract.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 4: Wider play (later in the text)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explore how the theme/character develops or changes later.
                  Track the character&rsquo;s arc or the theme&rsquo;s
                  progression. Link to Shakespeare&rsquo;s message.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Conclusion</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Final evaluative judgement. What is Shakespeare&rsquo;s
                  overall message about this theme/character? Why does it
                  matter? Consider the effect on the audience.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">
                Example OCR-Style Questions
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    1. Explore how Shakespeare presents the theme of love in this extract and elsewhere in the play.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    2. How does Shakespeare present conflict in this extract and elsewhere in the play?
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    3. Explore how Shakespeare presents the character of Juliet in this extract and elsewhere in the play.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    4. How does Shakespeare present ideas about fate in this extract and elsewhere in the play?
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    5. Explore how Shakespeare presents the relationship between parents and children in this extract and elsewhere in the play.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    6. How does Shakespeare use the character of Romeo to explore ideas about masculinity in this extract and elsewhere in the play?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
