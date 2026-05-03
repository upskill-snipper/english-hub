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

export default function AntonyAndCleopatraPage() {
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
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Antony and Cleopatra &mdash; Complete A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">William Shakespeare, c.1606&ndash;1607</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Comprehensive A-Level notes covering plot through the Rome/Egypt opposition, character
          profiles, thematic essays, Jacobean and classical context, verbatim quotations with
          analysis, symbolic patterns, and exam question plans with comparative angles.
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
            'Symbols',
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
          <Section
            title="Plot Summary &mdash; Acts 1 to 5 (the Rome / Egypt Axis)"
            icon="📖"
            defaultOpen
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Shakespeare structures the play around a relentless geographical oscillation: the
                action shifts more than forty times between Rome (and its battlefields) and Egypt
                (Alexandria, Cleopatra&apos;s court). This restless movement dramatises
                Antony&apos;s divided loyalty and gives the tragedy its peculiar sprawling,
                world-spanning quality, distinct from the tighter domestic settings of Othello or
                Hamlet.
              </p>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act 1 &mdash; Egypt establishes its hold
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens in Alexandria with Philo&apos;s sneering Roman complaint that
                  Antony&apos;s &ldquo;captain&apos;s heart&rdquo; has become &ldquo;the bellows and
                  the fan / To cool a gypsy&apos;s lust.&rdquo; Antony, one of the three rulers of
                  the Roman world, lingers in Egypt with Queen Cleopatra. News arrives from Rome:
                  Antony&apos;s wife Fulvia has waged war and died; Pompey threatens the
                  triumvirate. Antony resolves to leave: &ldquo;I must from this enchanting queen
                  break off.&rdquo; Cleopatra, wounded and theatrical, alternates between rage and
                  sorrow. The Soothsayer warns Charmian and Iras of fates they laugh off.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act 2 &mdash; Rome reasserts itself; the political marriage
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In Rome, Antony reconciles with Octavius Caesar. To cement the alliance, he
                  marries Octavius&apos;s sister Octavia &mdash; a chaste, dutiful Roman matron, the
                  antithesis of Cleopatra. Enobarbus, Antony&apos;s loyal lieutenant, privately
                  predicts the marriage will fail and delivers the famous barge speech describing
                  Cleopatra&apos;s first meeting with Antony at Cydnus. The triumvirs negotiate with
                  Pompey aboard his galley; a drunken feast follows, where Menas offers to murder
                  all three rulers and is refused. In Egypt, Cleopatra hears of Antony&apos;s
                  marriage and beats the messenger.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act 3 &mdash; The triumvirate collapses; Actium
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Antony returns to Egypt and resumes his life with Cleopatra. Octavius deposes
                  Lepidus, removes Pompey, and declares war on Antony. At the sea-battle of Actium,
                  Cleopatra&apos;s ships flee and Antony, in a fatal act of love, follows her,
                  abandoning the engagement. &ldquo;I have offended reputation,&rdquo; he laments.
                  The defeat is shattering. Cleopatra begs forgiveness; Antony grants it.
                  Octavius&apos;s envoy Thidias kisses Cleopatra&apos;s hand and Antony has him
                  whipped in a fit of jealous rage. Enobarbus begins to doubt his master.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Act 4 &mdash; Defeat, defection, suicide
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A brief, unexpected land victory revives Antony&apos;s hopes. He arms for battle;
                  the domestic moment of Cleopatra buckling on his armour is one of the play&apos;s
                  tenderest. Mysterious music under the stage suggests &ldquo;the god Hercules, whom
                  Antony loved, / Now leaves him.&rdquo; Enobarbus deserts to Caesar but, overcome
                  by guilt at Antony&apos;s generous response (sending his treasure after him), dies
                  of a broken heart. The fleet surrenders without a fight. Believing Cleopatra has
                  betrayed him &mdash; and then, falsely, that she is dead &mdash; Antony falls on
                  his sword. Botched and dying, he is hauled up to her monument. The Act closes with
                  Cleopatra&apos;s lament over his body.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Act 5 &mdash; Cleopatra stages her death
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra is now Caesar&apos;s prisoner. He plans to lead her in his Roman
                  triumph. She refuses to be reduced to a spectacle for Roman boys to mock. In a
                  long, deliberately staged scene, she dresses in royal robes, has the asp delivered
                  in a basket of figs by a Clown, applies it to her breast and her arm, and dies
                  declaring &ldquo;I am fire and air.&rdquo; Iras dies first; Charmian follows.
                  Caesar enters, finds the queens dead, and orders that Cleopatra be buried beside
                  Antony. The play ends with Roman order restored and the lovers immortalised in the
                  very fashion Cleopatra has chosen.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Mark Antony"
                description="One of the three triumvirs ruling the Roman world after Julius Caesar's assassination. Antony is a soldier of legendary stature whose identity is split between Roman martial virtue and Egyptian sensual abandon. Philo's opening speech presents him as 'the triple pillar of the world transform'd / Into a strumpet's fool' — but Shakespeare consistently complicates this Roman view. Antony is generous, charismatic, capable of sweeping rhetoric and tender intimacy, yet also rash, jealous and self-destructive. His tragedy is the impossibility of holding together two incompatible selves: the Roman general and the Egyptian lover. His suicide is botched, drawn-out and unheroic, yet Cleopatra's mourning reframes him as 'the crown o' the earth.'"
              />
              <CharacterCard
                name="Cleopatra"
                description="Queen of Egypt and one of Shakespeare's most theatrical, self-aware creations. Cleopatra is mercurial — moving from rage to grief to flirtation in single scenes — and intensely conscious of how she appears to others. Her court is one of music, eunuchs, costume changes, and improvised drama: 'I'll seem the fool I am not.' Critics have read her as anything from political shrewd survivor to manipulative seductress to tragic queen who finally outwits Caesar in death. Shakespeare grants her the play's most extraordinary poetry, and in Act 5 she effectively writes and stages her own death scene, securing immortality on her own terms: 'I have / Immortal longings in me.'"
              />
              <CharacterCard
                name="Octavius Caesar"
                description="Julius Caesar's adopted heir and great-nephew, the youngest of the triumvirs and the future Emperor Augustus. Cold, controlled, calculating — Octavius is the embodiment of the new Roman order. He drinks reluctantly, never loses his temper, and pursues power with patient, bureaucratic efficiency. He calls Antony's behaviour 'a man who is the abstract of all faults,' and is appalled by the Alexandrian feasting. Yet Shakespeare shows him as politically necessary rather than admirable: his victory ends the romantic, larger-than-life world the play has celebrated. His grief over Antony's death — 'The breaking of so great a thing' — feels genuine, but he immediately turns to managing the public image."
              />
              <CharacterCard
                name="Enobarbus"
                description="Antony's blunt, witty lieutenant and the play's unofficial chorus. Enobarbus speaks the most extraordinary celebration of Cleopatra in the language — the barge speech — yet rationally understands she will ruin Antony. He provides ironic commentary on Roman politics and Egyptian excess alike. When Antony's judgement deteriorates, Enobarbus deserts to Caesar, but he cannot live with the betrayal. His death scene, in which he calls out 'O Antony! O Antony!' before collapsing, is one of the most moving in Shakespeare and shows that Antony's magnetism survives even his political collapse."
              />
              <CharacterCard
                name="Charmian"
                description="Cleopatra's chief lady-in-waiting and intimate companion. Charmian is sharp-tongued, irreverent, and devoted. Early on she banters with the Soothsayer about her future ('I love long life better than figs'). Her loyalty is absolute: she dies by the asp moments after her queen, straightening Cleopatra's crown with the dignity Shakespeare gives only to those of the inner circle: 'Your crown's awry; / I'll mend it, and then play.' Her presence keeps Cleopatra grounded as a woman among women, not just an icon."
              />
              <CharacterCard
                name="Iras"
                description="Cleopatra's other lady-in-waiting, less sharply individualised than Charmian but quietly central to the Egyptian household. She receives the Soothsayer's prophecies in Act 1 and dies — strikingly — before Cleopatra applies the asp, possibly from grief alone. Her early death prompts Cleopatra's competitive metaphor about kissing in the underworld and adds urgency to the queen's own suicide. Iras represents the silent, loyal female community that surrounds Cleopatra throughout."
              />
              <CharacterCard
                name="Octavia"
                description="Octavius Caesar's sister, given in marriage to Antony as a political peace-offering. Octavia is everything Cleopatra is not — chaste, modest, dutiful, Roman. Shakespeare gives her real dignity: she pleads with both her brother and her husband to keep peace, and her presence in the play is genuinely sympathetic. Yet she is structurally doomed; the marriage is a political instrument, and Antony returns to Egypt almost as soon as it is contracted. Cleopatra's jealous interrogation of the messenger about Octavia's hair and gait is comic, but it also reveals Cleopatra's anxiety about a rival who genuinely possesses what she cannot: Roman legitimacy."
              />
              <CharacterCard
                name="Pompey (Sextus Pompeius)"
                description="Son of Pompey the Great, who challenges the triumvirate by sea. Pompey is principled but indecisive: when his pirate-captain Menas offers to murder Antony, Octavius and Lepidus on his ship and hand him the world, Pompey refuses, saying it should have been done without his knowledge. He represents an older, more honour-bound style of Roman politics that the new world has no room for. He is reported killed offstage in Act 3 — Shakespeare deliberately denies him a tragic death scene, underlining his marginalisation."
              />
              <CharacterCard
                name="Lepidus"
                description="The third member of the triumvirate, weak, conciliatory and out of his depth. Lepidus tries to mediate between Antony and Octavius, drinks too much at the feast on Pompey's galley (and is carried off snoring), and is later quietly removed from power by Octavius and imprisoned. He is a structural figure rather than a developed character: his function is to demonstrate that the world cannot, in fact, be shared by three. The triumvirate is unstable from the start."
              />
              <CharacterCard
                name="The Soothsayer"
                description="An Egyptian seer who appears twice. In Act 1 he reads Charmian and Iras's fortunes with deliberate, ominous brevity. In Act 2, in Rome, he warns Antony to keep away from Octavius — 'thy daemon, that thy spirit which keeps thee, is / Noble, courageous, high, unmatchable, / Where Caesar's is not; but, near him, thy angel / Becomes a fear.' He gives the play a layer of fated, supernatural inevitability and links Antony's downfall to forces beyond political miscalculation. His presence aligns the play with Egyptian mysticism rather than Roman rationalism."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Love versus Duty"
                description="The central conflict of the play. Antony is torn between his Roman duty as triumvir and his erotic and emotional commitment to Cleopatra. Unlike Romeo and Juliet, where love is pitted against family hatred, here love is pitted against empire itself. Shakespeare refuses to resolve which has the greater claim. Antony's choice to follow Cleopatra's fleeing ships at Actium is professionally catastrophic but emotionally absolute. The play asks whether 'I have offended reputation' is a confession of failure or a redefinition of value: when love is felt this fully, what is reputation worth?"
              />
              <ThemeCard
                title="Roman Stoicism vs Egyptian Sensuality"
                description="Shakespeare structures the play as a debate between two ways of life. Rome stands for restraint, military virtue, sober political calculation, and patrilineal continuity (Octavius's quiet rise). Egypt stands for music, banqueting, costume, theatricality, female power, and the cyclical fertility of the Nile. The Roman characters describe Egypt with revulsion ('a strumpet's fool'); the play itself is far more enchanted. Crucially, Shakespeare gives Egypt the better poetry — the barge speech, the dying queen — while granting Rome the political victory. The contest is unresolved: empire wins, but at the cost of imaginative richness."
              />
              <ThemeCard
                title="Power and Empire"
                description="The play takes place at one of the most consequential moments in Western political history: the transition from the Roman Republic to the Roman Empire. The triumvirate (Antony, Octavius, Lepidus) is unstable; Pompey's threat collapses; Lepidus is sidelined; and finally Antony falls, leaving Octavius as sole master of the Mediterranean — the first emperor. Shakespeare presents this consolidation of power as both inevitable and somehow diminishing: the world becomes smaller and more efficient as Octavius wins. Cleopatra's suicide is also a political act — she refuses to become a trophy in his Roman triumph."
              />
              <ThemeCard
                title="Theatricality and Performance"
                description="Cleopatra is the most self-consciously theatrical character Shakespeare ever wrote. She stages scenes constantly — feigning illness to draw Antony to her, dressing in Isis robes, reportedly hopping forty paces through the public street. Her death is the supreme example: she dresses in 'my robe' and 'my crown,' arranges Charmian and Iras, and times her exit. She even predicts and denigrates the boy actors who will impersonate her in Rome — a brilliant metatheatrical moment, since a boy actor is impersonating her on Shakespeare's stage. Performance is not falseness here; it is how Cleopatra controls her own meaning."
              />
              <ThemeCard
                title="Honour and Reputation"
                description="A classically Roman concern that the play subjects to severe pressure. Antony's 'reputation' is repeatedly invoked — by Caesar, by Enobarbus, by Antony himself. After Actium he says he has 'offended reputation,' and his suicide is partly an attempt to reclaim a Roman death after a Roman defeat. Yet his suicide is botched: he does not die cleanly, and is hauled up the monument like a sack. Shakespeare deflates the heroic-Roman ideal even as he gestures towards it. Cleopatra, by contrast, redefines what is honourable on her own terms: 'It is great / To do that thing that ends all other deeds.'"
              />
              <ThemeCard
                title="Betrayal"
                description="Betrayals are everywhere — political, marital, military. Antony betrays Octavia by returning to Cleopatra; Cleopatra's fleet betrays Antony at Actium (whether deliberately or in panic); Enobarbus betrays Antony by deserting; Antony believes Cleopatra has betrayed him in his final battle. Even the play's geography is a kind of betrayal — Antony cannot be in both Rome and Egypt, so each abandonment is felt as a wound by those he leaves. Crucially, Shakespeare treats betrayal not as black-and-white treachery but as the inevitable consequence of impossible loyalties."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Literary Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Composition: late 1606 / early 1607</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Antony and Cleopatra was almost certainly written in late 1606 or early 1607,
                  sitting between King Lear (1605&ndash;6) and Coriolanus (1608). It was entered in
                  the Stationers&apos; Register on 20 May 1608, but no quarto appeared, and the
                  first printed text is the 1623 Folio. This places the play at the height of
                  Shakespeare&apos;s tragic period, immediately after the four major tragedies
                  (Hamlet, Othello, King Lear, Macbeth).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Source: Plutarch via Sir Thomas North</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s principal source is Plutarch&apos;s &ldquo;Life of Marcus
                  Antonius&rdquo; in the Parallel Lives, read in Sir Thomas North&apos;s 1579
                  English translation (itself made from Jacques Amyot&apos;s French version).
                  Shakespeare follows Plutarch&apos;s narrative closely &mdash; the marriage to
                  Octavia, the battle of Actium, Enobarbus&apos;s defection, the manner of
                  Cleopatra&apos;s death &mdash; and in the famous barge speech he often versifies
                  North&apos;s prose almost word for word. Where he diverges, it is to deepen
                  sympathy for Cleopatra and to give her interior life and theatrical agency
                  Plutarch does not.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Roman Plays sequence</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Antony and Cleopatra is the central panel of Shakespeare&apos;s Roman triptych:
                  Julius Caesar (1599), Antony and Cleopatra (1606&ndash;7), and Coriolanus (1608).
                  Together they trace the trajectory of the Republic: Julius Caesar dramatises the
                  assassination that ends republican Rome; Antony and Cleopatra shows the civil-war
                  aftermath that establishes the Empire under Octavius (Augustus); Coriolanus
                  reaches further back to Rome&apos;s earliest republican struggles. The plays share
                  a fascination with Roman political rhetoric, public versus private virtue, and the
                  costs of empire.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">James I and the union of crowns</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play was written under James I, who had united the crowns of England and
                  Scotland on his accession in 1603 and was actively promoting the idea of a single
                  &ldquo;Britain&rdquo; &mdash; a project of imperial consolidation. Antony and
                  Cleopatra&apos;s preoccupation with the formation of empire, the absorption of
                  foreign queens, and the transition from divided to unified rule has been read as
                  engaging (sometimes critically) with the Jacobean imperial imagination. James
                  styled himself a peacemaker and a new Augustus; Shakespeare&apos;s Octavius is
                  recognisably Augustus-in-the-making.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The post-Republic Roman setting</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play is set roughly between 41 and 30 BCE, in the troubled aftermath of Julius
                  Caesar&apos;s assassination (44 BCE). The triumvirate of Antony, Octavius and
                  Lepidus had been formed in 43 BCE to defeat the conspirators; with that done, the
                  three rulers carved up the Mediterranean. Antony took the East (and met Cleopatra
                  at Tarsus in 41 BCE), Octavius the West, Lepidus a diminishing Africa. The action
                  of the play covers the slow collapse of this arrangement, ending with the battle
                  of Actium (31 BCE) and the deaths of Antony and Cleopatra (30 BCE). Octavius would
                  be granted the title Augustus in 27 BCE, inaugurating the Roman Empire.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Performance and stage history</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Antony and Cleopatra is one of Shakespeare&apos;s most demanding plays for the
                  early modern stage, requiring rapid scene changes between Rome and Egypt, naval
                  action, and the famous &ldquo;monument&rdquo; scene where the dying Antony is
                  hoisted up to Cleopatra. The original boy actor playing Cleopatra would have made
                  her self-mocking line about &ldquo;some squeaking Cleopatra boy my greatness /
                  I&apos; the posture of a whore&rdquo; (5.2) extraordinarily metatheatrical. The
                  play has historically been performed less often than the four major tragedies but
                  is now firmly in the canon of Shakespeare&apos;s greatest works.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              All quotations below are verbatim from the play. Citations follow Folio / standard
              modern editions.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="The triple pillar of the world transform'd / Into a strumpet's fool"
                speaker="Philo, Act 1 Scene 1"
                analysis="The play's opening Roman judgement on Antony. The architectural metaphor 'triple pillar' makes Antony one of three structural supports of empire; 'transform'd' and 'strumpet's fool' reduce him to grotesque comedy. The verb 'transform'd' is loaded — it sets up the play's central question of what kind of change is happening to Antony. Crucially, this is a Roman view; the play will spend five acts complicating it."
              />
              <QuoteCard
                quote="There's beggary in the love that can be reckon'd"
                speaker="Antony, Act 1 Scene 1"
                analysis="Antony's first answer to Cleopatra's flirtatious question 'If it be love indeed, tell me how much.' He rejects Roman accounting metaphors for love. 'Beggary' is striking — quantifiable love is not just diminished but humiliating. The line establishes immediately that Antony embraces a value system Rome cannot register: love as immeasurable and therefore real."
              />
              <QuoteCard
                quote="Let Rome in Tiber melt"
                speaker="Antony, Act 1 Scene 1"
                analysis="One of the play's most defiant lines. Antony imagines the entire Roman state dissolving into its own river rather than choosing Rome over Cleopatra. The verb 'melt' anticipates the play's whole semantic field of dissolution and liquefaction (later Antony's identity 'cannot hold this visible shape'). The line is rhetorical excess, but it stakes a position: love is worth the world."
              />
              <QuoteCard
                quote="O happy horse, to bear the weight of Antony!"
                speaker="Cleopatra, Act 1 Scene 5"
                analysis="Cleopatra, lying on her couch in Antony's absence, fantasises about her absent lover. The exclamation transfers her erotic longing onto an animal — even a horse is enviable for being close to him. The line shows her wit, her physical hunger, and her capacity to make every absent thing into theatre. It is also vulnerable: Cleopatra is not posing here for an audience, only for her women."
              />
              <QuoteCard
                quote="My salad days, / When I was green in judgement"
                speaker="Cleopatra, Act 1 Scene 5"
                analysis="Cleopatra dismisses her earlier affair with Julius Caesar as immature. 'Salad days' (now a common idiom Shakespeare seems to have coined here) and 'green in judgement' use vegetable imagery to suggest unripeness. The line is self-aware and even humorous; Cleopatra is rewriting her own past to flatter Antony, revealing how thoroughly she shapes her own narrative."
              />
              <QuoteCard
                quote="The barge she sat in, like a burnish'd throne, / Burn'd on the water"
                speaker="Enobarbus, Act 2 Scene 2"
                analysis="The opening of the play's most celebrated speech. Enobarbus, in Rome, describes Cleopatra's first meeting with Antony at Cydnus. The simile 'like a burnish'd throne' fuses sovereignty with sensual luxury; the verb 'Burn'd' makes the very water flame. Shakespeare is versifying Plutarch (via North) almost directly, but the sustained sensory pile-up — gold, silver, perfume, music, wind — turns reportage into rhapsody. That this comes from the cynical Enobarbus, in Rome, makes the spell more powerful: even Egypt's enemies must concede her glamour."
              />
              <QuoteCard
                quote="Age cannot wither her, nor custom stale / Her infinite variety"
                speaker="Enobarbus, Act 2 Scene 2"
                analysis="The crowning paradox of the barge speech. Enobarbus argues Cleopatra is exempt from the two great enemies of attraction — time ('age') and familiarity ('custom'). The phrase 'infinite variety' suggests her eroticism is endlessly self-renewing, never used up. The half-line 'Other women cloy / The appetites they feed' makes the contrast explicit. Crucially, this is Enobarbus's analysis, not Cleopatra's self-presentation, so it carries evidential weight."
              />
              <QuoteCard
                quote="O Antony! O Antony!"
                speaker="Enobarbus, Act 4 Scene 9"
                analysis="Enobarbus's dying words after deserting his master. The bare repetition of Antony's name, with no qualifying phrase, is more powerful than any speech could be. The line shows that loyalty to Antony's person — not his cause, not his judgement — is the deepest thing in Enobarbus, and his betrayal of it has literally killed him. It also confirms Antony's magnetism: even in defeat, he commands this kind of love."
              />
              <QuoteCard
                quote="I am dying, Egypt, dying"
                speaker="Antony, Act 4 Scene 15"
                analysis="One of the most famous lines in Shakespeare. The vocative 'Egypt' addresses Cleopatra by her country — fusing his lover with her kingdom, treating them as one. The repetition of 'dying' enacts the slowing of breath. Where Roman heroes typically die with a public sentiment, Antony dies with a private address to his lover, and renames her as the place itself. It is the play's argument in miniature: love and geography have become indistinguishable."
              />
              <QuoteCard
                quote="The crown o' the earth doth melt"
                speaker="Cleopatra, Act 4 Scene 15"
                analysis="Cleopatra's lament over the dying Antony. The image transforms him into a regalia object — the very 'crown' of the world — and uses the verb 'melt' that has run through the play since Antony's 'Let Rome in Tiber melt.' The metaphor universalises his death: it is not a personal loss but a cosmic diminishment. The world has shrunk."
              />
              <QuoteCard
                quote="I have / Immortal longings in me"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="Cleopatra prepares to die. The phrase 'immortal longings' is paradoxical — longing implies lack, immortality implies completion. She is yearning for a state in which yearning is over. The line marks her transformation from political queen to figure of legend; she will die not because she must but because she chooses to, on the way to a self-authored eternity beside Antony."
              />
              <QuoteCard
                quote="Give me my robe, put on my crown"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="Cleopatra dresses for death as if for a coronation. The pair of imperatives — 'Give me,' 'put on' — orchestrates the scene with absolute control. Robe and crown turn suicide into ceremony, and ceremony turns Cleopatra back into queen at the moment Caesar would reduce her to prisoner. This is theatre as resistance: Octavius cannot stage her in a Roman triumph because she has already staged herself."
              />
              <QuoteCard
                quote="Dost thou not see my baby at my breast, / That sucks the nurse asleep?"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="As the asp bites her, Cleopatra recasts the deadly snake as a nursing infant. The substitution is staggering: the instrument of death becomes an image of maternal nourishment, and dying becomes falling asleep while breastfeeding. This is one of Shakespeare's most audacious metaphors, fusing eros, motherhood, and death into a single tableau. It also strips the moment of horror — she dies smiling at a baby."
              />
              <QuoteCard
                quote="I am fire and air; my other elements / I give to baser life"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="In Renaissance physiology, the body was made of four elements (earth, water, air, fire). Cleopatra discards the heavy two and keeps only the rising two: she will literally ascend. The line is elemental theatre — she is rewriting her own physics to escape Rome's gravitational pull. 'Baser life' relegates ordinary mortality to those she leaves behind."
              />
              <QuoteCard
                quote="His delights / Were dolphin-like; they show'd his back above / The element they liv'd in"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="Cleopatra's elegy for Antony. The dolphin metaphor is exquisitely chosen: a creature that lives in water but breaks above its surface. Antony's pleasures, similarly, exceeded the ordinary medium of life; he was always rising above his element. The image grants him grace, exuberance and a kind of natural nobility — the very opposite of Philo's 'strumpet's fool.' Cleopatra's mourning rewrites Antony for posterity."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbols and Symbolic Patterns" icon="🌙">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The serpent / asp</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra is associated with snakes throughout the play: Antony calls her his
                  &ldquo;serpent of old Nile&rdquo; (1.5), and she dies by clasping asps (a small
                  Egyptian viper) to her breast and arm. The serpent is biblical (Eden), Egyptian
                  (the uraeus on the pharaoh&apos;s crown, sacred to Isis), and erotic (sinuous,
                  dangerous, hidden). In the death scene the asp is recast as a nursing infant,
                  transforming the serpent of Eden into an image of life even as it kills.
                  Cleopatra&apos;s self-fashioning culminates in this redefinition of the most
                  ancient symbol of female sin into one of maternal tenderness.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Cleopatra&apos;s barge</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Although the barge appears only in Enobarbus&apos;s reported speech (2.2), it is
                  one of the play&apos;s defining images. Gold poop, purple sails, silver oars,
                  perfumed winds, Cleopatra herself dressed as Venus &mdash; the barge is
                  Egypt&apos;s answer to Roman military display. It conquers without fighting: the
                  air itself, but for a vacuum, would have gone to gaze on her. The barge symbolises
                  the play&apos;s argument that aesthetic power can rival martial power, that
                  theatre can do what armies cannot.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Roman armour and Antony unarmed</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Act 4 Scene 4, Cleopatra helps Antony into his armour (&ldquo;Sooth, la,
                  I&apos;ll help: thus it must be&rdquo;). The image of an Egyptian queen buckling
                  on a Roman general&apos;s breastplate is one of the most thematically loaded in
                  the play: it shows the two worlds physically fused for a moment, and it inverts
                  the conventional gendering of military preparation. Earlier, Cleopatra has joked
                  about wearing Antony&apos;s sword (&ldquo;I drunk him to his bed; / Then put my
                  tires and mantles on him, whilst / I wore his sword Philippan&rdquo; 2.5). The
                  armour and its absence become a barometer of Antony&apos;s identity throughout.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The dolphin</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra&apos;s eulogy for Antony in Act 5 (&ldquo;His delights / Were
                  dolphin-like&rdquo;) invokes a creature that breaks above the surface of its own
                  element. Renaissance emblem books used the dolphin as a sign of swift, royal, and
                  graceful power. The metaphor rehabilitates Antony from Roman charges of sensual
                  indulgence: his &ldquo;delights&rdquo; are not weakness but excess in the noble
                  sense, an exuberance that exceeds the ordinary medium of life. The dolphin is one
                  of Shakespeare&apos;s great metaphorical inventions for what Antony was at his
                  best.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The moon and mutability</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra is associated with the moon, traditionally the planet of inconstancy and
                  of female sovereignty (Diana, Isis). In Act 5, as she prepares to die, she
                  declares &ldquo;Now the fleeting moon / No planet is of mine&rdquo; &mdash;
                  renouncing mutability in favour of fixed, elemental fire and air. The shift marks
                  her transformation from earthly queen, subject to change, into legend, fixed in
                  posterity. The moon symbolises everything Cleopatra has been; relinquishing it
                  makes her something else.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Egypt and Rome as geographical poles</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The two settings function less as locations than as opposing value-systems. Egypt
                  is the Nile, fertility, music, banqueting, female power, and theatricality. Rome
                  is marble, military discipline, bureaucratic patience, and patrilineal succession.
                  The play&apos;s rapid scene-shifts dramatise Antony&apos;s impossible attempt to
                  inhabit both. Even the language differs: Roman scenes tend toward terse political
                  prose; Egyptian scenes pour out hyperbolic, sensual verse. Geography becomes
                  character.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam Questions with Plans" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level style questions with thesis statements and four-paragraph plans. The
              final question is comparative, suitable for AQA Paper 1B (Aspects of Tragedy) and
              Edexcel coursework.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;The play presents Antony as a figure who can no longer choose between
                  Rome and Egypt.&rdquo; In light of this view, explore Shakespeare&apos;s
                  presentation of Antony.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Antony&apos;s tragedy is structural rather than moral: Shakespeare presents
                      him as a man whose identity has become inseparable from two incompatible
                      worlds, so that any choice between them is also a self-mutilation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The Roman opening verdict
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Philo&apos;s &ldquo;triple pillar of the world transform&apos;d / Into a
                      strumpet&apos;s fool&rdquo; sets up a binary the play will not endorse. Argue
                      that Shakespeare frames the Roman view as one perspective, not the truth.
                      Antony&apos;s &ldquo;Let Rome in Tiber melt&rdquo; defies it but does not
                      refute it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Actium and the failure of choice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      At Actium, Antony follows Cleopatra&apos;s ships and abandons the engagement
                      &mdash; a choice, but one made instinctively, not deliberatively. &ldquo;I
                      have offended reputation.&rdquo; The disaster shows that even the act of
                      choosing has become impossible for him.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The botched Roman death
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Antony&apos;s suicide attempts a Roman ending but is botched: &ldquo;I have
                      done my work ill.&rdquo; He cannot even die a Roman death cleanly. The
                      hoisting of his body up to Cleopatra&apos;s monument literalises his
                      geographical impossibility.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Cleopatra&apos;s rewriting
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In Act 5 Cleopatra recasts Antony as &ldquo;the crown o&apos; the earth&rdquo;
                      whose &ldquo;delights / Were dolphin-like.&rdquo; Conclude that Antony cannot
                      resolve the Rome/Egypt contradiction within himself, but Cleopatra&apos;s
                      mourning does &mdash; she makes him mythic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. To what extent does Shakespeare present Cleopatra as the playwright of her own
                  death?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cleopatra&apos;s suicide is the play&apos;s supreme act of authorship: she
                      scripts, stages and performs her death so as to determine her own immortal
                      meaning, defeating Caesar in the only arena left to her &mdash;
                      representation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; A character who stages
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Trace Cleopatra&apos;s theatricality across the play: feigning illness,
                      hopping forty paces in public, beating the messenger, dressing as Isis. Even
                      &ldquo;O happy horse, to bear the weight of Antony!&rdquo; is performance,
                      though private.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The threat of Roman triumph
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cleopatra fears being staged in Caesar&apos;s triumph &mdash; reduced to a
                      captive. Her metatheatrical line about &ldquo;some squeaking Cleopatra boy my
                      greatness / I&apos; the posture of a whore&rdquo; shows acute awareness of
                      representation as power.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The death scene as performance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Give me my robe, put on my crown&rdquo; orchestrates costume;
                      &ldquo;Dost thou not see my baby at my breast&rdquo; rewrites the asp;
                      &ldquo;I am fire and air&rdquo; rewrites her physiology. Each line is a
                      directorial choice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The final tableau
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar arrives to find queens already dead, in royal regalia. He concedes:
                      &ldquo;She shall be buried by her Antony.&rdquo; Cleopatra has imposed her
                      ending on his narrative. The author of Roman history must accept the ending
                      she has written.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. &ldquo;In Antony and Cleopatra, Egypt is granted the better poetry but Rome
                  wins the political world.&rdquo; Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare engineers a deliberate asymmetry: Egypt&apos;s linguistic richness
                      is offered as evidence against Rome&apos;s political success, leaving the
                      reader unsettled about whether the historical victor is also the imaginative
                      one.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Egyptian language
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Examine the barge speech, &ldquo;Age cannot wither her,&rdquo; &ldquo;I am
                      fire and air.&rdquo; Hyperbole, sensory pile-up, paradox. Egypt produces
                      Shakespeare&apos;s most virtuoso poetry in the play.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Roman language
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Octavius&apos;s Rome speaks in dispatches, formal addresses, terse exchanges.
                      Even his lament for Antony &mdash; &ldquo;The breaking of so great a thing
                      should make / A greater crack&rdquo; &mdash; is measured. Roman speech is
                      administrative.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The political outcome
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Octavius wins absolutely. Antony dies, Cleopatra dies, Lepidus is jailed,
                      Pompey is killed offstage. The play ends with Roman order restored. Empire is
                      the verdict of history.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Audience verdict
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      But the audience leaves the theatre with the barge speech and &ldquo;I am
                      dying, Egypt, dying&rdquo; in their ears, not Caesar&apos;s commands.
                      Shakespeare&apos;s asymmetry asks: which victory matters? Conclude that the
                      play offers no answer, and that this is its argument.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. Explore the dramatic significance of Enobarbus.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus functions as the play&apos;s ironic chorus and emotional barometer:
                      he gives Roman judgement its sharpest expression, but his eventual desertion
                      and death become the play&apos;s clinching evidence that Antony&apos;s
                      magnetism cannot be reasoned away.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The witty insider
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus&apos;s prose exchanges with Roman colleagues establish him as
                      worldly, mocking, and clear-sighted. He sees Cleopatra as theatre but cannot
                      look away.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The barge speech
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The barge she sat in, like a burnish&apos;d throne&rdquo; / &ldquo;Age
                      cannot wither her.&rdquo; That the play&apos;s most lyrical celebration of
                      Cleopatra comes from a Roman cynic, in Rome, gives it evidential weight.
                      Enobarbus cannot defend his Roman position because his own poetry has betrayed
                      it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Desertion as moral test
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus&apos;s decision to leave Antony for Caesar is rationally defensible
                      &mdash; Antony&apos;s judgement has collapsed. But Antony&apos;s response
                      (sending his treasure after him) shatters Enobarbus&apos;s reasoning.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The death
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;O Antony! O Antony!&rdquo; Enobarbus dies of grief, the only
                      Shakespearean character to do so without a wound. His death is the play&apos;s
                      strongest argument that Antony&apos;s pull on those who love him cannot be
                      measured by political success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 - comparative */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. Comparative: Compare the presentation of love and political consequence in
                  Antony and Cleopatra and Othello.
                </h4>
                <p className="mt-1 text-xs text-violet-700 dark:text-violet-300">
                  Suitable for AQA Paper 1B (Aspects of Tragedy) or Edexcel coursework. Could
                  substitute Macbeth or Romeo and Juliet for Othello.
                </p>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both plays show love destroying powerful military men, but where
                      Othello&apos;s tragedy is enclosed in domestic space and turns on a single
                      deception, Antony and Cleopatra externalises the conflict onto the
                      geopolitical map: love does not just kill the lovers but reshapes empires.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Scale
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Othello collapses to a bedchamber. Antony and Cleopatra spans the
                      Mediterranean. Argue that Shakespeare&apos;s scale-shift between 1604 and
                      1606&ndash;7 reflects a mature interest in love as a force that operates on
                      history, not just households.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The lovers&apos; agency
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Desdemona is largely passive, the victim of male paranoia. Cleopatra is
                      hyper-active: she causes, choreographs, and finally outwits the political
                      world. Compare Desdemona&apos;s &ldquo;I do beseech you&rdquo; with
                      Cleopatra&apos;s &ldquo;Give me my robe, put on my crown.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The hero&apos;s death
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Othello dies with a public Roman-style speech (&ldquo;I have done the state
                      some service&rdquo;) reasserting his identity. Antony dies privately,
                      addressing Cleopatra as a place: &ldquo;I am dying, Egypt, dying.&rdquo;
                      Othello reaches for honour; Antony reaches for love.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Political aftermath
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Othello ends with Lodovico restoring Venetian order &mdash; a local
                      administrative moment. Antony and Cleopatra ends with Octavius founding the
                      Roman Empire. Conclude that Shakespeare uses love in the later play as a force
                      of geopolitical consequence, while in Othello it is the engine of a single
                      household&apos;s ruin.
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
        <h3 className="text-lg font-bold text-foreground">Exam Tips for Antony and Cleopatra</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the geographical structure.</strong> Examiners reward candidates who treat
              the Rome/Egypt opposition as a deliberate dramatic structure rather than just a
              setting.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Engage with multiple perspectives on Cleopatra.</strong> Roman characters call
              her a strumpet; Enobarbus calls her infinite; she calls herself fire and air. Show you
              can move between these views.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Cite Plutarch and North.</strong> Knowing that Shakespeare versifies
              North&apos;s 1579 prose is a context point that almost always reads as sophisticated.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use precise terminology.</strong> &ldquo;Triumvirate,&rdquo;
              &ldquo;Actium,&rdquo; &ldquo;Augustus,&rdquo; &ldquo;Stoicism,&rdquo; &ldquo;monument
              scene,&rdquo; &ldquo;metatheatricality.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Don&apos;t neglect Enobarbus.</strong> He is the play&apos;s ironic chorus and
              a frequent essay focus. The barge speech and his death scene are exam staples.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Address the writer&apos;s methods.</strong> Discuss verse versus prose,
              scene-shifting, embedded set-piece speeches, and the play&apos;s metatheatrical
              moments.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Know the place in the Roman plays.</strong> Linking to Julius Caesar (1599)
              and Coriolanus (1608) shows mature understanding of Shakespeare&apos;s sustained
              engagement with Rome.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Antony and Cleopatra</em> by William Shakespeare was composed c.1606&ndash;1607 and
          first published in the 1623 First Folio. Shakespeare died in 1616 and the text is in the{' '}
          <strong>public domain</strong>. All quotations on this page are reproduced verbatim from
          the play in standard modern editions.
        </p>
      </footer>
    </>
  )
}
