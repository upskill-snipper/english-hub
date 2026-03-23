import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Macbeth Study Guide for OCR | The English Hub",
  description:
    "Comprehensive Macbeth study guide for OCR GCSE English Literature. Characters, themes, key quotations, context, and essay planning.",
};

/* ─── Quotation data ─────────────────────────────────────────── */

const keyQuotations = [
  {
    quote: "Fair is foul, and foul is fair",
    speaker: "The Witches (Act 1, Scene 1)",
    analysis:
      "The Witches' paradox establishes the play's central theme of moral inversion. The chiasmus (reversal of structure) mirrors the topsy-turvy world Macbeth is about to enter, where appearance and reality are indistinguishable. This line foreshadows Macbeth's own moral corruption — what seems 'fair' (the prophecy of kingship) will lead to 'foul' consequences.",
  },
  {
    quote: "Stars, hide your fires; / Let not light see my black and deep desires",
    speaker: "Macbeth (Act 1, Scene 4)",
    analysis:
      "Macbeth invokes darkness to conceal his ambition, revealing that he already harbours murderous thoughts even before Lady Macbeth's influence. The metaphor of 'black and deep desires' associates his ambition with something hidden, shameful, and bottomless. The imperative 'hide' shows Macbeth's awareness that his desires are morally wrong — he knows he must conceal them from the world and from God.",
  },
  {
    quote: "Look like th'innocent flower, / But be the serpent under't",
    speaker: "Lady Macbeth (Act 1, Scene 5)",
    analysis:
      "Lady Macbeth uses the Biblical allusion of the serpent (the Devil in the Garden of Eden) to advise Macbeth on deception. The juxtaposition of 'innocent flower' and 'serpent' encapsulates the theme of appearance versus reality. This also aligns Lady Macbeth with the forces of evil, as she explicitly instructs Macbeth to adopt duplicity.",
  },
  {
    quote: "Is this a dagger which I see before me, / The handle toward my hand?",
    speaker: "Macbeth (Act 2, Scene 1)",
    analysis:
      "This soliloquy reveals Macbeth's deteriorating mental state as he hallucinates before Duncan's murder. The rhetorical question suggests uncertainty and internal conflict. The dagger pointing towards his hand could symbolise fate drawing him towards the act, or his own guilty conscience manifesting his intentions. The ambiguity is deliberate — Shakespeare leaves it to the audience to decide whether Macbeth is driven by supernatural forces or his own ambition.",
  },
  {
    quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
    speaker: "Macbeth (Act 2, Scene 2)",
    analysis:
      "Hyperbole conveys the enormity of Macbeth's guilt. The classical allusion to Neptune (god of the sea) suggests that even divine power cannot absolve him. The blood is not literal but symbolic — it represents the stain of murder on his conscience. This contrasts with Lady Macbeth's earlier dismissal: 'A little water clears us of this deed,' showing how differently they initially process guilt.",
  },
  {
    quote: "Out, damned spot! Out, I say!",
    speaker: "Lady Macbeth (Act 5, Scene 1)",
    analysis:
      "Lady Macbeth's sleepwalking scene reveals the psychological destruction caused by guilt. The exclamatory 'Out!' is desperate and frantic, contrasting sharply with her earlier composed ruthlessness. The 'spot' of blood she tries to wash away mirrors Macbeth's earlier blood imagery — both characters are consumed by guilt, but Lady Macbeth's manifests as madness. The word 'damned' carries religious connotations, suggesting she believes her soul is beyond salvation.",
  },
  {
    quote: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other",
    speaker: "Macbeth (Act 1, Scene 7)",
    analysis:
      "Macbeth uses the extended metaphor of horse-riding to describe his ambition. 'Vaulting ambition' suggests something that overreaches — jumping too high and falling. This reveals Macbeth's self-awareness: he knows his ambition is excessive and will lead to his downfall. The word 'only' is significant — it suggests ambition is his sole motivation, stripped of any moral justification.",
  },
  {
    quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more",
    speaker: "Macbeth (Act 5, Scene 5)",
    analysis:
      "Macbeth's nihilistic soliloquy after learning of Lady Macbeth's death reveals total despair. The extended metaphor of life as a theatrical performance ('poor player', 'struts and frets', 'stage') suggests that life is meaningless, temporary, and performative. The phrase 'walking shadow' implies something insubstantial and fleeting. This is the culmination of Macbeth's tragic arc — from ambitious warrior to despairing nihilist.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRMacbethPage() {
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
            Macbeth: Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to know about Macbeth for OCR GCSE English
            Literature Paper 2, Section A.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
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
                <p className="font-semibold text-foreground">Act 1: The Prophecy and Temptation</p>
                <p className="mt-2 text-sm">
                  Three witches prophecy that Macbeth will become Thane of
                  Cawdor and King of Scotland. When the first prophecy comes
                  true, Macbeth and his wife begin plotting to murder King
                  Duncan, who is staying at their castle. Macbeth hesitates,
                  but Lady Macbeth questions his manhood and persuades him.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 2: The Murder</p>
                <p className="mt-2 text-sm">
                  Macbeth murders Duncan in his sleep and is immediately
                  consumed by guilt. Lady Macbeth takes charge, planting the
                  bloody daggers on Duncan&rsquo;s guards. Duncan&rsquo;s sons,
                  Malcolm and Donalbain, flee Scotland, making them look
                  guilty. Macbeth is crowned King.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 3: Paranoia and Tyranny</p>
                <p className="mt-2 text-sm">
                  Macbeth, now King, is paranoid about Banquo, whose
                  descendants the witches said would be kings. He hires
                  murderers to kill Banquo and his son Fleance. Banquo is
                  killed but Fleance escapes. At a banquet, Macbeth sees
                  Banquo&rsquo;s ghost and is publicly humiliated by his
                  terrified reaction.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 4: False Security</p>
                <p className="mt-2 text-sm">
                  Macbeth returns to the witches, who give him three new
                  prophecies: beware Macduff; no man &ldquo;of woman born&rdquo;
                  can harm him; he will not be defeated until Birnam Wood
                  comes to Dunsinane. Feeling invincible, Macbeth orders the
                  murder of Macduff&rsquo;s family. Malcolm and Macduff plan
                  to reclaim Scotland with English support.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 5: Downfall</p>
                <p className="mt-2 text-sm">
                  Lady Macbeth, tormented by guilt, sleepwalks and eventually
                  dies (implied suicide). Malcolm&rsquo;s army camouflages
                  itself with branches from Birnam Wood, fulfilling the
                  prophecy. Macduff reveals he was &ldquo;from his
                  mother&rsquo;s womb untimely ripp&rsquo;d&rdquo; (born by
                  Caesarean section), fulfilling the second prophecy. Macduff
                  kills Macbeth and Malcolm is crowned King.
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
            {/* Macbeth */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Macbeth</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Macbeth is Shakespeare&rsquo;s tragic hero &mdash; a brave and
                loyal warrior who is corrupted by ambition and supernatural
                influence. At the start of the play, he is celebrated as
                &ldquo;brave Macbeth&rdquo; and &ldquo;Bellona&rsquo;s
                bridegroom,&rdquo; a valiant soldier fighting for his king.
                However, the witches&rsquo; prophecy awakens a latent ambition
                that, combined with Lady Macbeth&rsquo;s manipulation, drives
                him to regicide.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                What makes Macbeth a tragic figure is his awareness of his own
                moral deterioration. His soliloquies reveal intense inner
                conflict &mdash; he knows murder is wrong, yet he cannot resist
                the pull of ambition. As the play progresses, he becomes
                increasingly isolated, paranoid, and tyrannical, ordering
                murders without the hesitation he showed before Duncan&rsquo;s
                death. By Act 5, he has lost everything &mdash; his wife, his
                honour, his humanity &mdash; and is reduced to nihilistic
                despair.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-accent-50 p-3">
                <p className="text-sm font-medium text-accent-700">Key character arc</p>
                <p className="mt-1 text-sm text-accent-800">
                  Honourable warrior &rarr; Tempted by ambition &rarr;
                  Reluctant murderer &rarr; Tyrannical king &rarr; Nihilistic
                  despair &rarr; Defiant death
                </p>
              </div>
            </div>

            {/* Lady Macbeth */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Lady Macbeth</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Lady Macbeth is one of Shakespeare&rsquo;s most complex female
                characters. She is ambitious, ruthless, and manipulative,
                challenging Jacobean gender roles by taking on what would be
                considered masculine traits. Her invocation to &ldquo;unsex
                me here&rdquo; reveals her desire to shed feminine weakness
                and become capable of violence.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                She is the driving force behind Duncan&rsquo;s murder,
                questioning Macbeth&rsquo;s manhood (&ldquo;When you durst do
                it, then you were a man&rdquo;) and taking practical charge of
                the plot. Yet her earlier composure crumbles as guilt
                overwhelms her. The sleepwalking scene (Act 5, Scene 1) shows
                her psychological destruction &mdash; she compulsively washes
                imaginary blood from her hands, echoing Macbeth&rsquo;s
                earlier guilt. Her death (implied suicide) represents the
                ultimate consequence of suppressing conscience.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-accent-50 p-3">
                <p className="text-sm font-medium text-accent-700">Key character arc</p>
                <p className="mt-1 text-sm text-accent-800">
                  Ambitious and controlling &rarr; Orchestrates the murder
                  &rarr; Begins to lose control &rarr; Consumed by guilt
                  &rarr; Madness and death
                </p>
              </div>
            </div>

            {/* The Witches */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">The Witches</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The three witches (or &ldquo;Weird Sisters&rdquo;) are agents
                of chaos and moral disruption. They open the play with their
                paradoxical chant and return to give Macbeth the prophecies
                that drive his ambition. Shakespeare leaves their nature
                ambiguous &mdash; are they supernatural beings with real power,
                or do they merely reveal desires that already exist within
                Macbeth?
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                For a Jacobean audience, the witches would have been genuinely
                terrifying. King James I had a personal interest in witchcraft
                and had written <em>Daemonologie</em> (1597), a treatise on
                the reality of witches. Shakespeare&rsquo;s portrayal would
                have reinforced the audience&rsquo;s fears and James&rsquo;s
                beliefs. The witches represent the dangers of the supernatural,
                the fragility of moral order, and the seductive power of
                temptation.
              </p>
            </div>

            {/* Banquo */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Banquo</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Banquo serves as a moral foil to Macbeth. Both hear the
                witches&rsquo; prophecies, but while Macbeth acts on them,
                Banquo remains cautious and loyal. He warns that &ldquo;the
                instruments of darkness tell us truths / Win us with honest
                trifles, to betray&rsquo;s / In deepest consequence,&rdquo;
                showing moral wisdom that Macbeth lacks. His murder by
                Macbeth represents the destruction of loyalty and friendship,
                and his ghost haunts Macbeth as a symbol of inescapable guilt.
              </p>
            </div>

            {/* Macduff */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Macduff</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Macduff represents loyalty, honour, and righteous vengeance.
                He is the first to suspect Macbeth (&ldquo;O horror, horror,
                horror!&rdquo;) and refuses to attend his coronation. His
                reaction to the murder of his family (&ldquo;He has no
                children&rdquo;) is one of the most emotionally powerful
                moments in the play. As the man &ldquo;not of woman born,&rdquo;
                he fulfils the prophecy and kills Macbeth, restoring moral
                order to Scotland.
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
                Ambition
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ambition is the play&rsquo;s central driving force. Shakespeare
                presents ambition as inherently dangerous when it becomes
                unchecked and is separated from morality. Macbeth&rsquo;s
                &ldquo;vaulting ambition&rdquo; overrides his conscience, his
                loyalty, and his humanity. Lady Macbeth&rsquo;s ambition leads
                her to suppress her femininity and humanity, with devastating
                psychological consequences. The play is a cautionary tale
                about the destructive power of ambition without moral
                restraint.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Guilt and Conscience
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Guilt permeates the play through imagery of blood,
                sleeplessness, and madness. Macbeth&rsquo;s guilt manifests
                immediately after Duncan&rsquo;s murder (&ldquo;Will all
                great Neptune&rsquo;s ocean wash this blood clean from my
                hand?&rdquo;), while Lady Macbeth&rsquo;s suppressed guilt
                surfaces later in her sleepwalking scene. Shakespeare suggests
                that guilt is an inescapable consequence of immoral action
                &mdash; it cannot be washed away or hidden forever.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                The Supernatural
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The supernatural pervades the play through the witches, the
                floating dagger, Banquo&rsquo;s ghost, and the prophecies.
                Shakespeare uses the supernatural to explore the boundaries
                between fate and free will. Did the witches cause
                Macbeth&rsquo;s actions, or did they merely reveal what was
                already in his heart? The play presents the supernatural as
                both a genuine force and a mirror of human psychology.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Kingship and Power
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Shakespeare contrasts legitimate kingship (Duncan, Malcolm)
                with tyranny (Macbeth). Duncan is described as a gracious,
                generous king whose murder disrupts the natural order. Macbeth
                rules through fear and violence. The play reflects Jacobean
                beliefs in the Divine Right of Kings &mdash; that monarchs
                were appointed by God, and to kill a king was to defy God
                Himself. This would have been particularly relevant for
                James I, who had survived the Gunpowder Plot (1605).
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Appearance vs Reality
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play is saturated with deception and duplicity. The witches
                declare &ldquo;fair is foul, and foul is fair.&rdquo; Lady
                Macbeth instructs her husband to &ldquo;look like the innocent
                flower / But be the serpent under&rsquo;t.&rdquo; Macbeth
                himself becomes a master of deception, performing the role of
                loyal subject, grieving friend, and noble king while
                committing increasingly terrible acts. Nothing in the play is
                as it seems.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Gender and Masculinity
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lady Macbeth challenges gender norms by associating masculinity
                with violence and ruthlessness (&ldquo;unsex me here&rdquo;).
                She manipulates Macbeth by questioning his manhood. Macbeth
                himself equates being a man with being brave enough to kill.
                However, Macduff offers a different model of masculinity
                &mdash; one that includes emotional vulnerability
                (&ldquo;I must also feel it as a man&rdquo;). Shakespeare
                suggests that true courage is moral, not merely physical.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Order and Chaos
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The murder of Duncan disturbs the natural order. Shakespeare
                uses pathetic fallacy to reflect this: &ldquo;The night has
                been unruly&rdquo;, storms rage, and an owl kills a falcon
                (a lower creature killing a higher one). By the end of the
                play, order is restored with Malcolm&rsquo;s coronation. The
                play follows a pattern of order &rarr; disruption &rarr;
                restoration that was central to Jacobean political thought.
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
            Historical and Social Context
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding context is essential for AO3. Here are the key
              contextual areas to know for Macbeth:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">King James I</h3>
                <p className="mt-2 text-sm">
                  Shakespeare wrote Macbeth around 1606, shortly after James I
                  became King of England and Scotland. James was fascinated by
                  witchcraft and had written <em>Daemonologie</em>. The play
                  flatters James by: featuring Scottish history; portraying
                  Banquo (James&rsquo;s supposed ancestor) as noble and loyal;
                  showing the witches as dangerous and real; and reinforcing
                  the Divine Right of Kings.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Gunpowder Plot (1605)</h3>
                <p className="mt-2 text-sm">
                  The failed Catholic conspiracy to blow up Parliament and
                  kill James I. Macbeth can be read as a warning against
                  regicide and treason. The play demonstrates that killing a
                  divinely appointed king brings chaos, guilt, and
                  destruction.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Divine Right of Kings</h3>
                <p className="mt-2 text-sm">
                  The Jacobean belief that monarchs were chosen by God and
                  that challenging their authority was a sin. Duncan is
                  described in almost saintly terms, and his murder disrupts
                  the natural and divine order. The Great Chain of Being
                  &mdash; a hierarchy with God at the top, then the king, then
                  nobles, then commoners &mdash; was believed to govern the
                  universe.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Jacobean Attitudes to Witchcraft</h3>
                <p className="mt-2 text-sm">
                  In early 17th-century England and Scotland, witchcraft was
                  widely believed to be real and was a capital offence. The
                  Witchcraft Act of 1604 made conjuring spirits punishable by
                  death. Shakespeare&rsquo;s audience would have viewed the
                  witches as genuinely dangerous rather than as symbolic
                  figures.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Gender Roles</h3>
                <p className="mt-2 text-sm">
                  Women in Jacobean society were expected to be passive,
                  obedient, and nurturing. Lady Macbeth&rsquo;s ambition,
                  aggression, and manipulation of her husband would have
                  shocked and disturbed the original audience. Her downfall
                  can be read as a punishment for transgressing gender
                  boundaries.
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
            Essay Planning for OCR
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
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
