'use client'

import { useState } from 'react'

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function HamletPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Shakespearean Tragedy
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            A-Level
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hamlet &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          William Shakespeare, c. 1600&ndash;1601
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for GCSE and A-Level. Act-by-act plot, character profiles, themes with
          evidence, 20+ pivotal quotations with analysis, Elizabethan and Jacobean context, and
          exam-style questions with planning notes.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Context',
            'Key Quotations',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── PLOT SUMMARY */}
        <div id="plot-summary">
          <Section title="Act-by-Act Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    I
                  </span>
                  Act 1: The Ghost and the Charge
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  On the battlements of Elsinore, the guards Barnardo and Marcellus, with the
                  scholar Horatio, see the Ghost of the late King Hamlet. Meanwhile, Claudius
                  &mdash; the dead king&apos;s brother &mdash; has married the queen, Gertrude, and
                  taken the throne. He addresses the court, dispatching ambassadors to Norway to
                  neutralise the threat from young Fortinbras. Prince Hamlet appears in mourning
                  black and is publicly chided for prolonged grief. Alone, he delivers his first
                  soliloquy (&ldquo;O, that this too too solid flesh would melt&rdquo;), expressing
                  disgust at his mother&apos;s hasty remarriage. Laertes warns his sister Ophelia
                  against Hamlet&apos;s affections; Polonius forbids her to see him. Horatio brings
                  Hamlet to meet the Ghost, who reveals he was murdered by Claudius and demands
                  revenge. Hamlet swears the others to secrecy and resolves to feign madness &mdash;
                  an &ldquo;antic disposition.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Ghost&apos;s appearance &mdash; supernatural, providential, or
                      demonic?
                    </li>
                    <li>
                      &bull; Claudius&apos;s smooth public rhetoric &mdash; &ldquo;mirth in
                      funeral&rdquo;
                    </li>
                    <li>
                      &bull; Hamlet&apos;s first soliloquy establishes his disgust and inwardness
                    </li>
                    <li>&bull; The Ghost&apos;s command: &ldquo;Remember me&rdquo;</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    II
                  </span>
                  Act 2: The Antic Disposition
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Polonius sends Reynaldo to spy on Laertes in Paris &mdash; a small scene that
                  establishes the play&apos;s pervasive surveillance. Ophelia reports Hamlet&apos;s
                  strange visit to her closet; Polonius decides love-melancholy is the cause.
                  Claudius and Gertrude welcome Rosencrantz and Guildenstern, Hamlet&apos;s
                  university friends, recruited to discover what ails him. The travelling Players
                  arrive. Hamlet, alone, berates himself for inaction in the &ldquo;rogue and
                  peasant slave&rdquo; soliloquy and conceives the Mousetrap plan: he will have the
                  Players perform a re-enactment of his father&apos;s murder to test Claudius&apos;s
                  guilt &mdash; &ldquo;the play&apos;s the thing wherein I&apos;ll catch the
                  conscience of the king.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Surveillance everywhere &mdash; spies, eavesdroppers, false friends
                    </li>
                    <li>&bull; Hamlet&apos;s wit deployed as weapon (&ldquo;fishmonger&rdquo;)</li>
                    <li>
                      &bull; The Player&apos;s emotion for Hecuba shames Hamlet&apos;s passivity
                    </li>
                    <li>&bull; The Mousetrap plan &mdash; Hamlet seeks empirical proof</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    III
                  </span>
                  Act 3: The Mousetrap and the Closet
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Polonius and Claudius hide to observe Hamlet meeting Ophelia. Hamlet delivers
                  &ldquo;To be, or not to be&rdquo; and then, suspecting he is being watched,
                  cruelly rejects Ophelia: &ldquo;Get thee to a nunnery.&rdquo; Claudius concludes
                  Hamlet is dangerous and resolves to send him to England. The Players perform
                  &ldquo;The Murder of Gonzago&rdquo;; Claudius rises in horror and the play breaks
                  off. Hamlet&apos;s suspicion is confirmed. Passing the chapel, he finds Claudius
                  apparently praying and refuses to kill him &mdash; sending a soul to heaven would
                  be &ldquo;hire and salary, not revenge.&rdquo; In Gertrude&apos;s closet, Hamlet
                  rebukes his mother fiercely. Hearing a noise behind the arras, he stabs through it
                  and kills Polonius, mistaking him for Claudius. The Ghost reappears, visible only
                  to Hamlet, to remind him of his task and to spare Gertrude.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; &ldquo;To be, or not to be&rdquo; &mdash; the central meditation on
                      suicide and action
                    </li>
                    <li>&bull; The play-within-the-play succeeds &mdash; Claudius is exposed</li>
                    <li>
                      &bull; Hamlet spares the praying Claudius &mdash; theological hesitation
                    </li>
                    <li>
                      &bull; The killing of Polonius &mdash; Hamlet finally acts, but on the wrong
                      target
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    IV
                  </span>
                  Act 4: Madness, Plotting, and Poison
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Claudius dispatches Hamlet to England with Rosencrantz and Guildenstern, secretly
                  carrying letters ordering his execution. Hamlet sees Fortinbras&apos;s army
                  marching to fight over a worthless patch of Polish land and contrasts their
                  decisive action with his own delay (&ldquo;How all occasions do inform against
                  me&rdquo;). Ophelia, driven mad by her father&apos;s death and Hamlet&apos;s
                  rejection, sings fragmented songs and distributes flowers before drowning in a
                  brook. Laertes returns from France, raging, and is manipulated by Claudius into a
                  plot: a fencing match in which Laertes will use a poisoned, unbated rapier. As
                  insurance, Claudius will prepare a poisoned cup. News arrives that Hamlet&apos;s
                  ship was attacked by pirates and he is back in Denmark. Gertrude reports
                  Ophelia&apos;s death.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Ophelia&apos;s madness &mdash; the cost of patriarchal control</li>
                    <li>
                      &bull; Fortinbras as foil &mdash; honour-driven action vs Hamlet&apos;s delay
                    </li>
                    <li>&bull; Claudius and Laertes hatch the poisoned-rapier plot</li>
                    <li>&bull; Ophelia&apos;s drowning &mdash; reported, not staged</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    V
                  </span>
                  Act 5: The Graveyard and the Duel
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Two gravediggers debate whether Ophelia deserves Christian burial. Hamlet and
                  Horatio arrive; Hamlet contemplates the skull of Yorick, the old court jester
                  (&ldquo;Alas, poor Yorick&rdquo;), reflecting on death&apos;s levelling of all
                  human vanity. Ophelia&apos;s funeral procession enters; Hamlet leaps into the
                  grave to rival Laertes&apos;s grief. Hamlet tells Horatio how he switched the
                  execution letters and sent Rosencrantz and Guildenstern to their deaths. He
                  accepts the fencing match with calm fatalism: &ldquo;The readiness is all.&rdquo;
                  In the duel, Laertes wounds Hamlet with the poisoned blade; in a scuffle they
                  exchange weapons and Hamlet wounds Laertes. Gertrude drinks from the poisoned cup
                  intended for Hamlet and dies. Laertes confesses the plot. Hamlet stabs Claudius
                  and forces him to drink the poison. Dying, Hamlet asks Horatio to live and tell
                  his story; he gives his &ldquo;dying voice&rdquo; to Fortinbras as the next king.
                  Fortinbras enters, surveys the carnage, and orders Hamlet a soldier&apos;s
                  funeral.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The graveyard scene &mdash; memento mori in dramatic form</li>
                    <li>
                      &bull; Hamlet&apos;s new fatalism: &ldquo;There&apos;s a special providence in
                      the fall of a sparrow&rdquo;
                    </li>
                    <li>&bull; Four bodies on stage &mdash; Gertrude, Laertes, Claudius, Hamlet</li>
                    <li>
                      &bull; Fortinbras inherits a stage piled with corpses &mdash; political
                      restoration after personal tragedy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Hamlet"
                description="Prince of Denmark, university student at Wittenberg, and the play's central consciousness. Hamlet is intellectually brilliant, witty, sceptical, and deeply melancholic. His tragedy is not that he is incapable of action — he kills Polonius, dispatches Rosencrantz and Guildenstern, and finally Claudius — but that his philosophical and moral scrupulousness make every action feel insufficient. He oscillates between resolve and self-reproach across seven soliloquies, the most introspective protagonist in Shakespeare. Critics from Coleridge onwards have read him as a thinker paralysed by thought, while Bradley argued his delay stems from melancholy rather than intellect. By Act 5 he has reached a kind of stoic resignation: 'the readiness is all.'"
              />
              <CharacterCard
                name="Claudius"
                description="The play's antagonist: brother of the dead king, husband to Gertrude, usurper of the throne. Crucially, Claudius is not a stage villain but a competent ruler — eloquent, politically shrewd, capable of genuine remorse. His prayer scene ('O, my offence is rank') reveals self-awareness: he knows he cannot be forgiven while still possessing the queen and crown. He embodies Machiavellian statecraft against Hamlet's principled idealism. His use of Polonius, Ophelia, Rosencrantz and Guildenstern, and Laertes as instruments shows how political power corrupts every relationship it touches."
              />
              <CharacterCard
                name="Gertrude"
                description="Queen of Denmark, mother to Hamlet, and arguably the play's most ambiguous figure. Shakespeare leaves crucial questions open: did she know of the murder? Did she love Old Hamlet? Did she love Claudius? Her language is consistently brief and conventional, contrasting with Hamlet's torrents. The closet scene transforms her — Hamlet's accusations break through her composure, and she promises silence. Her death — drinking the poisoned cup, ignoring Claudius's order ('Gertrude, do not drink') — can be read as accident or as a final act of maternal sacrifice. Feminist criticism has rescued her from older readings that simply branded her weak."
              />
              <CharacterCard
                name="Ophelia"
                description="Polonius's daughter, Laertes's sister, and Hamlet's beloved. Ophelia is positioned at the intersection of every patriarchal authority in the play: her father uses her, her brother lectures her, her lover rejects her, and her king watches her. She has no soliloquies; she speaks largely in obedience or in the broken songs of madness. Her descent — caused by losing both Hamlet and her father — is arguably the play's bleakest tragedy because it is so passive. Her drowning, narrated rather than shown, becomes one of the most painted scenes in English literature. She represents the cost of female silence in a court of men."
              />
              <CharacterCard
                name="Polonius"
                description="Lord Chamberlain to Claudius, father to Laertes and Ophelia. Polonius is verbose, sententious ('Brevity is the soul of wit' — said at length), and convinced of his own cunning. He treats his children as instruments and is the play's chief practitioner of surveillance: spying on Laertes through Reynaldo, on Hamlet through Ophelia, on Hamlet through the arras. His death — stabbed behind a curtain — is grimly fitting: he dies eavesdropping. Hamlet's flippant treatment of his corpse ('I'll lug the guts into the neighbour room') reveals an unpleasant streak in the prince and triggers Laertes's revenge plot."
              />
              <CharacterCard
                name="Laertes"
                description="Polonius's son, Ophelia's brother. Laertes is Hamlet's most direct foil: when his father is killed, he returns from France within an act, raises a popular rebellion, and demands instant vengeance. His unhesitating, conventional honour-revenge response throws Hamlet's deliberation into sharp relief. Yet Laertes is easily manipulated by Claudius and agrees to use a poisoned, unbated blade — staining honourable revenge with treachery. His dying confession ('the king, the king's to blame') and forgiveness of Hamlet provide a small moral recovery."
              />
              <CharacterCard
                name="Horatio"
                description="Hamlet's loyal friend from Wittenberg and the play's moral touchstone. Horatio is rational, sceptical (initially of the Ghost), Stoical, and discreet — Hamlet praises him as 'a man / That is not passion's slave.' He is the only major character to survive, and Hamlet's dying request that he 'tell my story' makes Horatio the play's authorised narrator. Structurally he serves as audience surrogate: questions he asks Hamlet allow exposition without artificiality."
              />
              <CharacterCard
                name="The Ghost"
                description="The spirit of Old Hamlet, demanding that his son avenge his murder. The Ghost is theologically ambiguous: he claims to suffer in Purgatory (a Catholic doctrine) but also urges revenge (which Christianity forbids), and he appears in armour like a martial figure of the old heroic world. Protestants in Shakespeare's audience would have suspected he could be a demonic deceiver; Catholics might have accepted him as a genuine soul. Hamlet himself worries 'the spirit that I have seen / May be a devil.' This ambiguity drives the Mousetrap test. The Ghost is the play's link to a vanishing chivalric and Catholic past."
              />
              <CharacterCard
                name="Fortinbras"
                description="Prince of Norway, son of the king Old Hamlet defeated in single combat. Fortinbras shadows the play offstage for most of its length, then arrives at the close to inherit Denmark. He is Hamlet's political foil: a man of decisive martial action who fights for 'an eggshell' to gain honour. Shakespeare uses him to ask whether decisive action is in fact wiser than reflection — the answer is left deliberately uncertain. His final entry restores political order while underlining the human cost of the tragedy."
              />
              <CharacterCard
                name="Rosencrantz and Guildenstern"
                description="Hamlet's old schoolfellows, recruited by Claudius to spy on him. They function almost as a single unit — interchangeable, hollow, conventionally polite. Hamlet sees through them quickly ('You would play upon me') and ultimately rewrites the execution letter so that they, not he, are killed in England. Their offstage deaths are reported with chilling brevity: Hamlet has 'no shriving time allowed' for them. They embody the courtier class who survive by serving power without examining it — and pay the price."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Revenge"
                description="Hamlet is the most famous of the Elizabethan revenge tragedies, but Shakespeare interrogates rather than indulges the genre. The play stages three sons avenging fathers — Hamlet for Old Hamlet, Laertes for Polonius, Fortinbras for his father — and contrasts their methods. Hamlet hesitates because he wants his revenge to be morally and theologically right; Laertes vows to 'cut his throat i' the church'; Fortinbras turns vengeance into politics. Shakespeare exposes the ethical incoherence of revenge: the Ghost, supposedly in Purgatory, demands an act that Christianity forbids; the avenger himself becomes a murderer. By Act 5 Hamlet acts only when reactively trapped, suggesting that 'pure' revenge may be impossible."
              />
              <ThemeCard
                title="Madness and Sanity"
                description="The play sustains a sustained ambiguity about what is real madness and what is performance. Hamlet warns his friends he will 'put an antic disposition on' — explicitly feigned. Yet his erratic behaviour with Ophelia, his rage in the closet, his frantic disposal of Polonius's body all blur the line. Ophelia's madness, by contrast, is unambiguous and devastating — caused by grief and patriarchal pressure. Shakespeare uses madness to expose truth: Ophelia's mad songs hint at sexual exploitation, while Hamlet's 'antic' jests cut closer to political reality than sane courtiers can. Madness is partly a strategy in a court that cannot tolerate honest speech."
              />
              <ThemeCard
                title="Death and Mortality"
                description="From the Ghost in Act 1 to four corpses in Act 5, death saturates the play. Hamlet's most famous soliloquy meditates on suicide; the gravediggers' scene treats death as a working trade; Yorick's skull collapses the distance between courtly wit and rotting bone. Shakespeare draws on the medieval tradition of the danse macabre and the Renaissance memento mori: 'Imperious Caesar, dead and turned to clay'. Death in Hamlet is the great leveller, but it is also the unknown country whose 'dread' paralyses moral choice. The play's tragic logic moves Hamlet from horror at death towards stoic acceptance: 'the readiness is all.'"
              />
              <ThemeCard
                title="Corruption and Decay"
                description="Marcellus's line — 'Something is rotten in the state of Denmark' — sets the play's controlling metaphor. Imagery of disease, ulcers, weeds, foul smells, and unweeded gardens runs throughout, suggesting a body politic poisoned at the head. Hamlet's 'unweeded garden / That grows to seed; things rank and gross in nature' makes corruption literal vegetation. Claudius's literal poisoning of Old Hamlet is the original sin from which the rest follows. The decay is not just political but metaphysical — a fall from a heroic, ordered past into a present of duplicity. The piled bodies of Act 5 are the final purging of the diseased body politic."
              />
              <ThemeCard
                title="Appearance vs Reality"
                description="The play distrusts surfaces. Claudius is a smooth king above and a murderer beneath; Polonius offers wisdom and practises espionage; Rosencrantz and Guildenstern come as friends and arrive as spies. Hamlet rejects 'seems' in his first scene with Gertrude — 'I know not seems' — and the verb haunts the play. The Mousetrap turns this concern into method: a stage performance proves real guilt. Even the Ghost may not be what he seems. Shakespeare asks how, in a court of perfect actors, anyone can know what is true — and answers, painfully, that only by performing your own version back at them."
              />
              <ThemeCard
                title="Action vs Inaction"
                description="The famous 'problem' of Hamlet: why does he delay? Romantic critics (Coleridge, Schlegel) blamed an excess of intellect; Bradley diagnosed melancholy; Freud saw Oedipal paralysis; recent critics emphasise Hamlet's theological caution and his refusal to be merely the genre's avenger. Shakespeare lets Hamlet himself dramatise the question across his soliloquies, repeatedly contrasting his inaction with the decisive Player, Fortinbras, and Laertes. Yet the play also questions whether quick action is wise: Laertes acts and is manipulated; Fortinbras fights for an 'eggshell.' Hamlet's hesitation is also conscience. The play refuses to settle whether thought is the enemy of action, or its only honourable form."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Literary Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The Elizabethan Worldview and the Great Chain of Being
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Elizabethans inherited a hierarchical cosmos: God at the apex, then angels, the
                  king, nobility, commoners, animals, plants, stones. To kill a king was therefore
                  not just political crime but a metaphysical violation that disordered the whole
                  chain. Claudius&apos;s regicide explains why &ldquo;the time is out of
                  joint&rdquo; and why nature itself produces ill omens. Hamlet&apos;s sense that
                  Denmark is a &ldquo;prison&rdquo; and an &ldquo;unweeded garden&rdquo; is not
                  merely personal mood &mdash; it reflects a cosmos that has been knocked askew by
                  an unnatural act.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Catholic and Protestant Tensions</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare wrote in a Protestant England that had violently rejected Catholicism
                  within living memory. The Ghost claims to be &ldquo;confined to fast in
                  fires&rdquo; in Purgatory &mdash; a Catholic doctrine officially abolished by the
                  Church of England. This makes the Ghost theologically suspect: a Protestant
                  audience would worry he could be a demon. Hamlet&apos;s university, Wittenberg,
                  was Luther&apos;s university &mdash; the cradle of Protestantism &mdash; making
                  Hamlet a sceptical Protestant interrogating an apparently Catholic apparition. The
                  graveyard scene&apos;s argument about Ophelia&apos;s burial directly engages
                  Reformation debates over suicide and consecrated ground.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Revenge Tragedy as Genre</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Hamlet is shaped by the revenge tragedy tradition popularised by Thomas Kyd&apos;s
                  <em> The Spanish Tragedy</em> (c. 1587) and influenced by the Roman playwright
                  Seneca. The genre&apos;s conventions include a ghost demanding revenge, feigned
                  madness, a play-within-a-play, and a corpse-strewn finale. Shakespeare uses every
                  convention but tests it against moral and theological scruples Kyd never raised.
                  The result is a revenge play that is also a philosophical critique of revenge.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  James I, Succession, and the Politics of Kingship
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Hamlet was written around 1600&ndash;1601, in the final years of Elizabeth
                  I&apos;s reign, with the question of succession dominating English politics. The
                  play&apos;s anxieties about a usurper, a contested crown, and a foreign prince
                  inheriting a throne resonated sharply. When James VI of Scotland (later James I of
                  England) acceded in 1603, his interest in demonology, kingship, and the divine
                  right would shape Shakespeare&apos;s later tragedies (notably <em>Macbeth</em>).
                  Hamlet sits at the threshold between Elizabethan and Jacobean drama, looking ahead
                  to the darker, more sceptical tragedies that would follow.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Shakespeare&apos;s Late Tragedies and Renaissance Humanism
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Hamlet is the first of the four great tragedies (with <em>Othello</em>,{' '}
                  <em>King Lear</em>, and <em>Macbeth</em>) and the most introspective. It draws on
                  Renaissance humanism &mdash; the recovery of classical learning that placed
                  renewed value on individual conscience, rhetoric, and self-knowledge. Hamlet is a
                  humanist hero: a university scholar, a wit, a critic of theatre, a moral
                  philosopher. But the play also shows humanism in crisis: Hamlet&apos;s &ldquo;What
                  a piece of work is a man&rdquo; speech celebrates and then collapses humanist
                  optimism (&ldquo;and yet, to me, what is this quintessence of dust?&rdquo;). The
                  play asks whether the cultivated, reflective self can still act in a corrupted
                  world.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Twenty pivotal quotations across themes, characters, and the play&apos;s major scenes.
              Memorise the underlined keywords and pair each with at least two themes.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Something is rotten in the state of Denmark."
                speaker="Marcellus, Act 1 Scene 4"
                analysis="The play's controlling metaphor. Disease imagery establishes that the corruption is not just Claudius the man but the political body itself. 'Rotten' suggests the rot has set in beneath the surface and will spread. That Marcellus — a minor guard — voices it shows the disorder is felt even at the periphery of court."
              />
              <QuoteCard
                quote="Frailty, thy name is woman!"
                speaker="Hamlet, Act 1 Scene 2"
                analysis="From the first soliloquy. The personification ('thy name') universalises Hamlet's disgust at Gertrude's hasty remarriage into a misogynistic generalisation. The line reveals Hamlet's collapse from grief over his father into resentment of his mother — the first sign that his interiority is bound up with sexual revulsion at maternal sexuality. Feminist critics read it as Hamlet's psychological wound, not Shakespeare's verdict."
              />
              <QuoteCard
                quote="O, that this too too solid flesh would melt, / Thaw, and resolve itself into a dew!"
                speaker="Hamlet, Act 1 Scene 2"
                analysis="The opening of the first soliloquy. The repeated 'too too', the verbs of dissolution ('melt, / Thaw, and resolve'), and the longing for self-erasure establish Hamlet's depressive, suicidal state before the Ghost has even named the murder. Some editions read 'sullied' (stained) or 'sallied' (assailed) for 'solid', each opening different readings about whether Hamlet's distress is metaphysical or moral."
              />
              <QuoteCard
                quote="The time is out of joint. O cursed spite, / That ever I was born to set it right!"
                speaker="Hamlet, Act 1 Scene 5"
                analysis="The closing couplet of Act 1. 'Out of joint' is a body-politic metaphor: Denmark is a dislocated limb. Hamlet feels reluctantly burdened — 'cursed spite' suggests fate, not vocation. The rhyming couplet gives a sense of grim acceptance, but the burden is the play's central problem: the violence required to 'set it right' is itself unjust."
              />
              <QuoteCard
                quote="Though this be madness, yet there is method in't."
                speaker="Polonius, Act 2 Scene 2"
                analysis="Polonius's famously self-undermining line: he detects Hamlet's coherence inside the chaos but cannot grasp its target — himself. The aphorism captures the play's central question about Hamlet's madness: feigned, real, or both? The dramatic irony is that the 'method' Polonius suspects will eventually kill him."
              />
              <QuoteCard
                quote="What a piece of work is a man! How noble in reason, how infinite in faculty! ... And yet, to me, what is this quintessence of dust?"
                speaker="Hamlet, Act 2 Scene 2"
                analysis="A textbook humanist celebration of human dignity that collapses, mid-speech, into nihilism. The cadence rises with classical confidence and then crashes on 'quintessence of dust' — an alchemical term collapsed back into mere matter. The speech encapsulates Renaissance humanism in crisis: Hamlet knows what humanity is supposed to be, and cannot feel it."
              />
              <QuoteCard
                quote="The play's the thing / Wherein I'll catch the conscience of the king."
                speaker="Hamlet, Act 2 Scene 2"
                analysis="The closing couplet of the 'rogue and peasant slave' soliloquy. Hamlet decides to use theatre as forensic instrument. Note the legal vocabulary ('catch the conscience') — Hamlet wants empirical proof before he acts, not just a ghost's word. The line is also Shakespeare's metatheatrical wink: the play onstage will diagnose the play we are watching."
              />
              <QuoteCard
                quote="To be, or not to be, that is the question."
                speaker="Hamlet, Act 3 Scene 1"
                analysis="The most famous line in English drama. The infinitive 'to be' is deliberately abstract — is it about suicide, or action, or existence itself? The soliloquy weighs ending suffering ('a sea of troubles') against fear of 'something after death.' The answer is unresolved: thought itself ('conscience does make cowards of us all') paralyses choice. The speech is the central case for and against Hamlet's delay."
              />
              <QuoteCard
                quote="Get thee to a nunnery."
                speaker="Hamlet to Ophelia, Act 3 Scene 1"
                analysis="Layered with cruelty. 'Nunnery' meant convent but was Elizabethan slang for brothel, so the line damns Ophelia either way: chastity or prostitution, no middle ground. Hamlet may sense Polonius and Claudius hiding behind the arras and so performs misogynistic rage; alternatively his disgust at Gertrude has spilled onto Ophelia. Either reading places Ophelia as collateral damage in a court of male manipulation."
              />
              <QuoteCard
                quote="The lady doth protest too much, methinks."
                speaker="Gertrude, Act 3 Scene 2"
                analysis="Gertrude watches the Player Queen vow eternal devotion in the Mousetrap and judges the protests excessive. Dramatic irony: Gertrude herself remarried within a month. 'Protest' means 'declare', not 'object' — modern misuse has reversed it. Shakespeare uses Gertrude's critical eye to make her, briefly, seem self-aware: she sees performance even when she cannot see her own."
              />
              <QuoteCard
                quote="Now might I do it pat, now he is praying; / And now I'll do't. And so he goes to heaven."
                speaker="Hamlet, Act 3 Scene 3"
                analysis="The prayer scene. Hamlet refuses to kill Claudius mid-prayer because a soul caught in the act of penitence might be saved — and Hamlet's father, killed without confession, is in Purgatory. The reasoning is theologically serious: Hamlet wants damnation, not just death. Critics divide on whether this is conscience or rationalised cowardice. Note the cold arithmetic — 'hire and salary, not revenge' — at odds with Hamlet's earlier passion."
              />
              <QuoteCard
                quote="A little more than kin, and less than kind."
                speaker="Hamlet, Act 1 Scene 2"
                analysis="Hamlet's first line in the play, an aside about Claudius. The pun on 'kin' (relative) and 'kind' (natural / affectionate) compresses his disgust: Claudius is now twice his relative — uncle and stepfather — but unnatural in being both. The wordplay establishes Hamlet's defining mode: subversive wit beneath formal courtesy."
              />
              <QuoteCard
                quote="I must be cruel only to be kind."
                speaker="Hamlet, Act 3 Scene 4"
                analysis="The closet scene. Hamlet justifies his violent confrontation with Gertrude — and the corpse of Polonius next door — as moral surgery. Now a proverbial phrase, but in context it is disturbing: the speaker has just killed an old man and is verbally savaging his mother. The line shows how Hamlet's moral self-image diverges from what he is actually doing."
              />
              <QuoteCard
                quote="How all occasions do inform against me, / And spur my dull revenge!"
                speaker="Hamlet, Act 4 Scene 4"
                analysis="The final soliloquy, prompted by seeing Fortinbras march to fight for 'an eggshell.' 'Occasions inform against me' is courtroom imagery — every event is a witness to his inaction. 'Dull' suggests blunted, unsharpened. The speech ends with the resolve 'O, from this time forth, / My thoughts be bloody, or be nothing worth' — yet Hamlet is being shipped off to England as he speaks, and will not act decisively until Act 5."
              />
              <QuoteCard
                quote="There's rosemary, that's for remembrance ... and there is pansies, that's for thoughts."
                speaker="Ophelia, Act 4 Scene 5"
                analysis="Ophelia distributes flowers in her madness. Each flower carries Renaissance symbolism (rosemary = remembrance, pansies = thoughts, rue = repentance, daisies = false love), turning the scene into a coded indictment of the court she addresses. The mad scene gives Ophelia, at last, a kind of speech she was denied while sane — fragmented but morally piercing."
              />
              <QuoteCard
                quote="Alas, poor Yorick! I knew him, Horatio."
                speaker="Hamlet, Act 5 Scene 1"
                analysis="The graveyard scene's emblematic image. Yorick was the court jester of Hamlet's childhood; his skull literalises memento mori — a reminder that all flesh, however lively, ends as bone. The line moves Hamlet from horror to a calm meditation on death's universality: 'Alexander died, Alexander was buried, Alexander returneth into dust.' The skull also visually echoes the play's revenge plot: a death that demands remembrance."
              />
              <QuoteCard
                quote="There's a special providence in the fall of a sparrow ... the readiness is all."
                speaker="Hamlet, Act 5 Scene 2"
                analysis="Hamlet's calmest theological statement, alluding to Matthew 10:29 — God's providence extends even to a sparrow. 'The readiness is all' replaces Hamlet's earlier obsessive deliberation with stoic acceptance. He no longer needs to control timing; he is willing to die. This shift is the play's spiritual climax — Hamlet gives up the project of being his own moral engineer."
              />
              <QuoteCard
                quote="The rest is silence."
                speaker="Hamlet, Act 5 Scene 2"
                analysis="Hamlet's dying line. 'Rest' carries multiple senses: remainder, repose, peace. 'Silence' is the play's final answer to its torrents of speech and questioning. After seven soliloquies, Hamlet ends in wordlessness — a refusal of the closure that words might falsely provide. Some editors add 'O, O, O, O' from the First Folio as final groans, but most modern productions keep the silence."
              />
              <QuoteCard
                quote="Good night, sweet prince, / And flights of angels sing thee to thy rest!"
                speaker="Horatio, Act 5 Scene 2"
                analysis="Horatio's blessing over Hamlet's body. After a play soaked in regicide, espionage, and damnation, the ending grants Hamlet a Christian, almost liturgical farewell. 'Sweet prince' restores Hamlet's nobility from the violent figure he had become. Horatio's survival to 'tell my story' makes the line both elegy and authorisation: this is the version of Hamlet we are meant to remember."
              />
              <QuoteCard
                quote="Bid the soldiers shoot."
                speaker="Fortinbras, Act 5 Scene 2"
                analysis="The play's literal final command. Fortinbras orders a military funeral for Hamlet — recognising him, posthumously, as the warrior-prince he barely was in life. The soldier's salute also signals political restoration: Denmark has a king again. The closing gunshots echo offstage as the play ends, completing the move from interior soliloquy to exterior, public, martial action — the world Hamlet always struggled to live in."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five GCSE-style and three A-Level-style questions. GCSE responses focus on
              Shakespeare&apos;s methods and contextual links; A-Level responses additionally engage
              with critical interpretations and ambiguity.
            </p>

            <h4 className="text-base font-bold text-foreground mb-3">GCSE-Style Questions</h4>
            <div className="space-y-6 mb-8">
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Shakespeare present the theme of revenge in <em>Hamlet</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Open with three avenging sons (Hamlet, Laertes, Fortinbras) as foils. Argue
                      Shakespeare uses the revenge-tragedy genre to question revenge itself.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Ghost&apos;s command (&ldquo;Remember me&rdquo;) and Hamlet&apos;s
                      reluctant vow (&ldquo;cursed spite, / That ever I was born to set it
                      right&rdquo;) frame revenge as a duty Hamlet does not want.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The prayer scene (&ldquo;Now might I do it pat&rdquo;): Hamlet refuses easy
                      revenge for theological reasons. Compare with Laertes&apos;s &ldquo;cut his
                      throat i&apos; the church&rdquo; &mdash; honour-revenge unmoored from
                      conscience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Act 5: Hamlet kills Claudius only when forced by the poisoned plot. Revenge
                      succeeds but at the cost of every major character. Link to genre &mdash; the
                      bodies are conventional, the moral cost is Shakespeare&apos;s addition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Shakespeare present madness in <em>Hamlet</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Contrast Hamlet&apos;s feigned madness with Ophelia&apos;s real madness. Argue
                      Shakespeare uses both to expose truths a sane court suppresses.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hamlet&apos;s &ldquo;antic disposition&rdquo; is announced, deliberate, and
                      weaponised &mdash; e.g. &ldquo;fishmonger&rdquo; with Polonius.
                      Polonius&apos;s &ldquo;method in&apos;t&rdquo; shows the strategy is partly
                      visible.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ophelia&apos;s madness is involuntary: caused by losing father and lover. Her
                      &ldquo;rosemary, that&apos;s for remembrance&rdquo; gives her a coded voice
                      she lacked when sane. Connect to context: women&apos;s grief in patriarchal
                      society.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ambiguity: is Hamlet purely pretending? The closet scene&apos;s violence and
                      the graveyard leap into Ophelia&apos;s grave suggest the mask has begun to fit
                      the face. Shakespeare blurs the boundary deliberately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Shakespeare present Claudius as a villain?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue Claudius is a complex Machiavellian, not a stock villain &mdash;
                      eloquent, capable of conscience, but ultimately corrupted by his choices.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Public rhetoric in Act 1 Scene 2 (&ldquo;mirth in funeral&rdquo;) shows
                      political competence. Antithetical balance suggests calculated control of the
                      court.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Prayer scene: &ldquo;O, my offence is rank&rdquo; reveals genuine
                      self-awareness. Yet he cannot repent because he will not surrender crown or
                      queen &mdash; choice over conscience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Act 4: manipulating Laertes shows escalation into pure scheming. Context
                      &mdash; Elizabethan fear of usurpers and the divine right of kings makes
                      Claudius&apos;s regicide a cosmic, not just personal, crime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Shakespeare present Ophelia in <em>Hamlet</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue Ophelia is the play&apos;s great victim of patriarchy: silenced when
                      sane, only voiced in madness, and her death narrated rather than seen.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Act 1 Scene 3: instructed by Laertes and Polonius to reject Hamlet.
                      Ophelia&apos;s &ldquo;I shall obey, my lord&rdquo; shows her position &mdash;
                      speech is permitted only as obedience.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Get thee to a nunnery&rdquo; scene: she becomes the bait in a male
                      trap. Her response (&ldquo;O, what a noble mind is here
                      o&apos;erthrown!&rdquo;) shows generous concern even when wounded.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The mad scene gives Ophelia coded speech (the flowers) that addresses the
                      court&apos;s guilt. Her offstage drowning is the final silencing &mdash; even
                      her death is a story told by Gertrude.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. How does Shakespeare use soliloquies to develop the character of Hamlet?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Track the seven soliloquies as a psychological arc from suicidal grief to
                      stoic readiness.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      First soliloquy (&ldquo;O, that this too too solid flesh&rdquo;): grief,
                      suicidal longing, disgust at Gertrude. Establishes Hamlet&apos;s interiority
                      before the Ghost speaks.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Rogue and peasant slave&rdquo; and &ldquo;To be, or not to be&rdquo;:
                      self-reproach and philosophical paralysis. Shakespeare uses the Player&apos;s
                      tears as a foil for Hamlet&apos;s own real grief that fails to act.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By Act 5 Hamlet has stopped soliloquising &mdash; he speaks plainly to
                      Horatio. &ldquo;The readiness is all&rdquo; replaces the looped
                      self-questioning. The end of soliloquy marks the end of paralysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-foreground mb-3">A-Level-Style Questions</h4>
            <div className="space-y-6">
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  6. &ldquo;<em>Hamlet</em> is a play about the failure of action.&rdquo; To what
                  extent do you agree?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Disagree partially: argue the play questions whether decisive action is even
                      desirable. Engage with Coleridge&apos;s &ldquo;great, almost enormous,
                      intellectual activity&rdquo; reading and Bradley&apos;s melancholic Hamlet.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The &ldquo;failure&rdquo; reading: Hamlet&apos;s soliloquies repeatedly stage
                      his self-criticism (&ldquo;dull revenge&rdquo;), and the body count of Act 5
                      is partly his fault. Cite the killing of Polonius as misdirected action.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Counter-argument: Fortinbras&apos;s decisive action is for &ldquo;an
                      eggshell,&rdquo; Laertes&apos;s decisive action is morally compromised.
                      Shakespeare offers no model of clean, effective action.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Re-read Hamlet&apos;s &ldquo;readiness is all&rdquo; as the play&apos;s
                      positive resolution &mdash; not failure but Stoic acceptance. Engage with
                      critics (Knight, Eliot&apos;s &ldquo;objective correlative&rdquo;) on whether
                      the play succeeds in resolving its own questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  7. Discuss the dramatic significance of the Ghost in <em>Hamlet</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue the Ghost is significant precisely because his status is unresolved
                      &mdash; theological, generic, and political ambiguity all hinge on him.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Theological reading: the Ghost claims Purgatory, suggesting Catholic afterlife
                      in a Protestant England. Reformation context &mdash; Stephen Greenblatt&apos;s{' '}
                      <em>Hamlet in Purgatory</em> &mdash; makes the Ghost a figure of an outlawed
                      faith.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Generic reading: the Ghost is the inherited revenge-tragedy machine, a Senecan
                      import. Shakespeare uses but tests the convention &mdash; Hamlet&apos;s
                      &ldquo;the spirit that I have seen / May be a devil&rdquo; problematises the
                      genre&apos;s standard premise.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Political reading: the Ghost is the murdered legitimate king, a figure of the
                      displaced order. His invisibility to Gertrude in the closet scene reveals he
                      speaks only to those willing to hear &mdash; the past confronts only the
                      morally engaged.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  8. &ldquo;Shakespeare&apos;s tragedies are concerned with the impossibility of
                  self-knowledge.&rdquo; In light of this view, discuss Shakespeare&apos;s
                  presentation of Hamlet.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Argue Hamlet is paradoxically the most self-examining hero in Shakespeare and
                      yet repeatedly mistaken about himself. Engage with Freudian and
                      post-structuralist readings.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hamlet&apos;s soliloquies as humanist self-scrutiny: the play stages an
                      unprecedented depth of inwardness (Harold Bloom&apos;s &ldquo;invention of the
                      human&rdquo;).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Yet Hamlet repeatedly misreads his own motives: he calls his delay cowardice
                      but theology is also at work; he calls himself unfeeling but his grief is
                      overpowering. Freudian reading (Ernest Jones): Hamlet cannot act because
                      Claudius has done what he unconsciously wished.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The closing &ldquo;rest is silence&rdquo; can be read as an admission that
                      self-knowledge has limits &mdash; Hamlet stops trying to articulate himself.
                      Shakespeare grants depth without grant of conclusive self-understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>Hamlet</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the soliloquies as structural backbone.</strong> Tracking Hamlet&apos;s
              seven soliloquies maps his psychological arc and gives any essay a clear chronological
              spine.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Always cite Shakespeare&apos;s methods.</strong> Discuss soliloquy, foil,
              dramatic irony, antithesis, blank verse / prose switches, and the play-within-a-play
              structure.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Anchor every theme in context.</strong> Reformation theology, Renaissance
              humanism, the Great Chain of Being, and the revenge-tragedy genre.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>For A-Level: name your critics.</strong> Coleridge, Bradley, T. S. Eliot,
              Ernest Jones (Freudian), Stephen Greenblatt, Harold Bloom &mdash; each gives a
              different lens.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the foils.</strong> Laertes and Fortinbras are designed as comparison
              cases for Hamlet. Reference them when discussing action, revenge, or honour.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Hold the play&apos;s ambiguities.</strong> Top responses do not resolve the
              question of Hamlet&apos;s madness, the Ghost&apos;s status, or Gertrude&apos;s
              knowledge &mdash; they argue that the ambiguity is the point.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Hamlet</em> by William Shakespeare was first performed c. 1600&ndash;1601 and
          published in quarto in 1603 (Q1) and 1604 (Q2), and in the First Folio of 1623.
          Shakespeare died in 1616 and the text is in the <strong>public domain</strong>. All
          quotations are reproduced from the standard modern editions.
        </p>
      </footer>
    </>
  )
}
