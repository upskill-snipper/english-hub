'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

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
        <p className="mt-1 text-lg text-muted-foreground">
          {tr(`William Shakespeare, c.1606&ndash;1607`)}
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Comprehensive A-Level notes covering plot through the Rome/Egypt opposition, character
          profiles, thematic essays, Jacobean and classical context, verbatim quotations from the
          First Folio with analysis, symbolic patterns, and exam question plans with comparative
          angles for paper-2 and coursework essays.
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
            'Key Quotations',
            'Symbols',
            'Context',
            'Structure',
            'Essay Planning',
            'A* Points',
            'Practice Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-').replace(/\*/g, 'star')}`}
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
            title={tr(`Act-by-Act Summary: The Rome/Egypt Opposition`)}
            icon="📖"
            defaultOpen
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    I
                  </span>
                  Act 1: Egypt &mdash; Pleasure and the Roman Summons
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens in Alexandria with Philo lamenting that Antony&apos;s
                  &ldquo;captain&apos;s heart&rdquo; has become &ldquo;the bellows and the fan / To
                  cool a gypsy&apos;s lust.&rdquo; Antony and Cleopatra flirt and quarrel; Antony
                  refuses to hear messengers from Rome until news of his wife Fulvia&apos;s death
                  and Pompey&apos;s rebellion compels him to return. Cleopatra alternately mocks and
                  pines for him. In Rome, Octavius Caesar criticises Antony&apos;s dissolution to
                  Lepidus. Back in Egypt, Cleopatra recalls her past affairs (&ldquo;my salad
                  days&rdquo;) and dispatches messengers to Italy. The act establishes the
                  play&apos;s dialectic structure: every Egyptian scene of revelry is followed by a
                  Roman scene of political calculation.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Philo&apos;s opening lament &mdash; Roman judgement frames the
                      audience&apos;s first view
                    </li>
                    <li>
                      &bull; Antony&apos;s &ldquo;Let Rome in Tiber melt&rdquo; &mdash;
                      world-renouncing love
                    </li>
                    <li>
                      &bull; Soothsayer reads Charmian and Iras&apos;s fortunes &mdash; tragic
                      foreshadowing
                    </li>
                    <li>&bull; News of Fulvia&apos;s death &mdash; one tie to Rome severed</li>
                    <li>
                      &bull; Antony resolves to return: &ldquo;I must from this enchanting queen
                      break off&rdquo;
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    II
                  </span>
                  Act 2: Rome &mdash; Reconciliation, Marriage, and Pompey&apos;s Galley
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Antony arrives in Rome and is reconciled with Caesar through a politically
                  expedient marriage to Caesar&apos;s sister Octavia. Enobarbus, in the celebrated
                  &ldquo;barge&rdquo; speech, describes Cleopatra&apos;s first meeting with Antony
                  at Cydnus and predicts that &ldquo;he will to his Egyptian dish again.&rdquo; The
                  triumvirs negotiate peace with Pompey aboard his galley; the drunken feast that
                  follows reveals the precariousness of Roman alliances when Menas offers to murder
                  all three rulers and is refused. In Egypt, Cleopatra learns of Antony&apos;s
                  marriage and beats the messenger. The act juxtaposes Roman political theatre with
                  Egyptian emotional volatility.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The political marriage to Octavia &mdash; Antony binds himself to
                      Caesar
                    </li>
                    <li>
                      &bull; Enobarbus&apos;s &ldquo;barge&rdquo; speech &mdash; Cleopatra
                      mythologised in verse
                    </li>
                    <li>
                      &bull; Soothsayer warns Antony that Caesar&apos;s fortune will outshine his
                    </li>
                    <li>
                      &bull; Cleopatra interrogates the messenger about Octavia&apos;s appearance
                    </li>
                    <li>
                      &bull; Pompey&apos;s galley feast &mdash; Lepidus drunk, Menas&apos;s
                      assassination offer
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    III
                  </span>
                  Act 3: The Triumvirate Breaks &mdash; Actium
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Antony returns to Cleopatra. Caesar removes Lepidus from the triumvirate and
                  renews war. Antony, against the counsel of Enobarbus and his soldiers, fights
                  Caesar at sea to please Cleopatra. At the battle of Actium, Cleopatra&apos;s
                  flagship flees and Antony follows &ldquo;like a doting mallard,&rdquo; abandoning
                  his fleet. The defeat is catastrophic. Antony rages at Cleopatra, then forgives
                  her. He sends Cleopatra&apos;s schoolmaster as ambassador to Caesar; Caesar sends
                  Thidias, who flatters Cleopatra. Antony has Thidias whipped and challenges Caesar
                  to single combat. Enobarbus begins to question his loyalty: &ldquo;I&apos;ll seek
                  some way to leave him.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Lepidus removed &mdash; the triumvirate becomes a duumvirate</li>
                    <li>
                      &bull; Antony fights at sea against military advice &mdash; tragic error
                    </li>
                    <li>&bull; Cleopatra&apos;s flight at Actium &mdash; the turning point</li>
                    <li>
                      &bull; Thidias whipped &mdash; honour-driven response, politically disastrous
                    </li>
                    <li>
                      &bull; Enobarbus&apos;s growing doubts &mdash; reason yielding to disillusion
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    IV
                  </span>
                  Act 4: Defeat, Defection, and Death of Antony
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Antony wins a brief land victory but is defeated again at sea when his fleet
                  surrenders. Believing Cleopatra has betrayed him, he vows to kill her. Strange
                  music in the streets signals that &ldquo;the god Hercules, whom Antony loved, /
                  Now leaves him.&rdquo; Enobarbus, having defected to Caesar, dies of grief:
                  &ldquo;O Antony!&rdquo; Cleopatra, terrified, sends word that she is dead. Antony,
                  hearing this, asks his servant Eros to kill him; Eros kills himself instead, and
                  Antony falls on his own sword but botches the wound. He is hauled up to Cleopatra
                  in her monument and dies in her arms with Roman dignity recovered. Cleopatra
                  laments that &ldquo;the crown o&apos; the earth doth melt&rdquo; and resolves to
                  die &ldquo;after the high Roman fashion.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Hercules&apos;s music &mdash; the protective god abandons Antony</li>
                    <li>
                      &bull; Enobarbus&apos;s death of grief &mdash; loyalty&apos;s posthumous
                      return
                    </li>
                    <li>
                      &bull; Antony&apos;s botched suicide &mdash; failure even in Roman death
                    </li>
                    <li>
                      &bull; Antony hauled to the monument &mdash; visual emblem of fallen greatness
                    </li>
                    <li>
                      &bull; &ldquo;I am dying, Egypt, dying&rdquo; &mdash; final reconciliation in
                      dying
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    V
                  </span>
                  Act 5: Cleopatra&apos;s Apotheosis
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Caesar tries to manipulate Cleopatra so she will live to grace his Roman triumph.
                  Cleopatra plays for time, dreaming of Antony as a colossal demi-god in her great
                  speech to Dolabella. Dolabella warns her that Caesar intends to display her in
                  Rome. She prepares for death with theatrical splendour, putting on her royal robe
                  and crown. A clown brings the asp in a basket of figs. Cleopatra applies the asp
                  to her breast, imagining the bite as a lover&apos;s kiss; Iras dies first,
                  Charmian after. Caesar enters, finds the women dead, and orders that the lovers be
                  buried together: &ldquo;No grave upon the earth shall clip in it / A pair so
                  famous.&rdquo; Caesar&apos;s control over the political world is complete, but
                  Cleopatra has eluded his triumph through the theatre of her death.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Dream of the colossal Antony &mdash; mythologising the dead lover
                    </li>
                    <li>
                      &bull; The clown with the figs &mdash; comic-grotesque interlude before death
                    </li>
                    <li>&bull; Cleopatra&apos;s royal robing &mdash; theatre of dying as queen</li>
                    <li>&bull; The asp at the breast &mdash; eros and death fused</li>
                    <li>
                      &bull; Caesar&apos;s closing order &mdash; politics absorbs the lovers&apos;
                      legend
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title={tr(`Character Profiles`)} icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Mark Antony"
                description="The Roman triumvir torn between Egypt and Rome, between Cleopatra and Caesar's sister Octavia, between the soldier he was and the lover he is becoming. Shakespeare draws on Plutarch's portrait of Antony as a man of immense capacity and equally immense weakness. Roman characters describe him through the language of erosion and dissolution: he 'reels' the world about, his 'goodly eyes' once 'glow'd like plated Mars'. His tragedy is that the very magnanimity which makes him heroic — generosity, sensual openness, refusal of cold calculation — is what unfits him for the new Augustan world. His botched suicide is one of Shakespeare's most painful ironies: the soldier cannot even die a soldier's death."
              />
              <CharacterCard
                name="Cleopatra"
                description="Queen of Egypt, the play's most paradoxical character. She is by turns regal, jealous, theatrical, cowardly, sublime, and cruel. Enobarbus's 'infinite variety' is the critical descriptor: she contains contradictions other characters can only choose between. Shakespeare gives her some of the play's most baroque verse — the dream of Antony as a colossus, the 'immortal longings' speech — alongside violent prose when she beats the messenger. Critics divide on whether Cleopatra is a serious tragic heroine or a self-dramatising figure who finally rises to her own legend; the play deliberately leaves the question open. Her death scene is one of the most extended and symbolically loaded suicide sequences in Shakespeare."
              />
              <CharacterCard
                name="Octavius Caesar"
                description="The young triumvir who will become the Emperor Augustus. Cold, controlled, and politically gifted, Caesar represents the new Roman order in which calculation replaces magnanimity. He is the antithesis of Antony in every register: where Antony is generous, Caesar is meticulous; where Antony is voluble, Caesar is strategically silent. He is not a villain but a successful politician — a darker figure than the heroic Octavius of 'Julius Caesar'. His love for his sister Octavia is the only emotional opening in his character, and even that is instrumentalised politically. He triumphs militarily but loses the symbolic battle when Cleopatra evades his planned triumph."
              />
              <CharacterCard
                name="Enobarbus"
                description="Antony's friend and chief lieutenant, who functions as the play's choric voice. He delivers the 'barge' speech describing Cleopatra at Cydnus and is Shakespeare's principal addition to Plutarch's narrative shape. Enobarbus speaks Roman common sense in clear-eyed prose but is moved to elevated verse when describing Cleopatra. His tragedy is one of misplaced reason: he abandons Antony when reason dictates desertion, only to die of shame and grief when Antony forgives him and sends his treasure after him. His final cry 'O Antony!' is one of the most affecting moments of vassal-loyalty in Shakespeare."
              />
              <CharacterCard
                name="Charmian"
                description="Cleopatra's chief lady-in-waiting and closest companion. She shares the queen's wit and theatricality; her exchanges with the soothsayer in Act 1 reveal the comic-erotic atmosphere of Cleopatra's court. Charmian's role becomes profoundly serious in the death scene, where she stays beside her queen, adjusts Cleopatra's crown after death — 'Your crown's awry; / I'll mend it' — and dies last of the three women. She represents the loyalty within Cleopatra's domestic sphere, paralleling Eros's loyalty to Antony."
              />
              <CharacterCard
                name="Iras"
                description="A second lady-in-waiting to Cleopatra, paired with Charmian. Iras is quieter than Charmian and dies first in Act 5, perhaps from sheer grief, perhaps from her own asp. Cleopatra fears Iras will reach Antony first and receive his kiss in the afterlife. Together with Charmian, Iras forms the female chorus that surrounds Cleopatra and ensures the queen's death is witnessed within an intimate, female community rather than under Roman male surveillance."
              />
              <CharacterCard
                name="Octavia"
                description="Caesar's sister, given in marriage to Antony to cement the Roman alliance. Plutarch describes her as a model Roman matron, and Shakespeare follows this — she is patient, virtuous, and politically obedient. She is structurally the antithesis of Cleopatra: silent where Cleopatra is voluble, modest where Cleopatra is theatrical, dutiful where Cleopatra is desiring. Antony's rejection of Octavia is also a rejection of the marriage-alliance world of Roman politics. Octavia is treated by the play with sympathy but also with a clear sense that her virtues belong to a smaller emotional scale than Cleopatra's."
              />
              <CharacterCard
                name="Pompey (Sextus Pompeius)"
                description="The son of Pompey the Great, leading a rebellion against the triumvirate at the start of the play. Pompey represents the residue of the older republican Rome that Caesar's eventual empire will erase. He negotiates peace with the triumvirs aboard his galley, refuses Menas's offer to murder them all because honour forbids it, and is reported killed offstage in Act 3. His brief presence reminds the audience that the Roman world contains more than the duel between Antony and Caesar — and that honourable scruple, in this political universe, is a fatal weakness."
              />
              <CharacterCard
                name="Lepidus"
                description="The third triumvir, the weakest of the three. Lepidus tries to mediate between Antony and Caesar but lacks the political weight to do so. He is mocked for his drunkenness aboard Pompey's galley, where he is carried off insensible. Caesar removes him from power offstage in Act 3, accusing him of conspiracy with Pompey. Lepidus represents the impossibility of triangular power-sharing in a world where two ambitious men remain. His casual elimination demonstrates Caesar's ruthlessness without requiring any direct cruelty on stage."
              />
              <CharacterCard
                name="Soothsayer"
                description="An Egyptian fortune-teller who appears twice. In Act 1 he reads the futures of Charmian and Iras with grim and erotic ambiguity. In Act 2 he warns Antony in Rome that Caesar's fortune is the stronger and that Antony must keep distance from him to retain his own daemon. His function is to introduce a layer of fate and prophecy that the rationalistic Roman world cannot absorb but which the audience knows will be fulfilled. He is the play's principal voice of pre-Roman, Egyptian, oracular knowledge."
              />
              <CharacterCard
                name="Eros"
                description="Antony's loyal manservant, who has sworn to kill his master rather than see him captured. When Antony commands him to do so, Eros kills himself instead, providing the pattern Antony then imitates in his own botched suicide. Eros's name (Greek for 'love') is significant: in this play, even military loyalty is described in the language of eros, just as Cleopatra's death is described as a lover's bite. He is the male counterpart to Charmian and Iras."
              />
              <CharacterCard
                name="Philo, Demetrius, Scarus, Canidius, Ventidius"
                description="The Roman soldiers and lieutenants who frame and comment on the action. Philo and Demetrius open the play with the Roman judgement on Antony's degeneration. Scarus delivers furious commentary on the cowardice at Actium. Ventidius wins a victory in Parthia but is afraid to gain too much glory because greatness in subordinates is dangerous in this regime. Together they show that Roman military culture is hierarchical, competitive, and watchful — incompatible with the open generosity Antony brings from Egypt."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Love vs Duty`)}
                description="The play's central conflict is the irreconcilability of erotic devotion and political obligation. Antony cannot serve both Cleopatra and Rome; the choice that will allow him to live with himself is the choice that destroys him as a triumvir. Shakespeare refuses easy resolution: love is not simply ennobling, nor is duty simply correct. The play offers Antony's repeated attempts at compromise — marriage to Octavia, fighting at sea to please Cleopatra — and shows each compromise hastening his ruin. The lovers achieve dignity only by abandoning compromise altogether and choosing death together."
              />
              <ThemeCard
                title={tr(`Roman Stoicism vs Egyptian Sensuality`)}
                description="The play's geography is also a moral and aesthetic dialectic. Rome stands for restraint, hierarchy, military discipline, and the language of measurement; Egypt stands for excess, fluidity, sensual abundance, and the language of metaphor. The opening scene literalises this opposition: Philo's stern tetrameter judgement collides with Antony's expansive 'new heaven, new earth'. Shakespeare avoids endorsing either pole: Roman virtue is also coldness, Egyptian variety is also infidelity. The tragedy occurs in the impossible space between the two worlds."
              />
              <ThemeCard
                title={tr(`Power and Empire`)}
                description="The play stages the foundational moment of the Roman empire — the transition from triumvirate to Augustan principate. Power in this universe is not declamatory but shrewd; Caesar wins because he calculates, waits, and instrumentalises kinship. Shakespeare juxtaposes Antony's heroic style with Caesar's bureaucratic style and shows the latter triumphing. The play asks whether the new world that Caesar's victory inaugurates is worth what is lost in the process — whether magnanimity, sensual generosity, and personal greatness can survive the politics of empire."
              />
              <ThemeCard
                title={tr(`Theatricality and Performance`)}
                description="The play is suffused with self-conscious theatricality. Cleopatra dresses for her death as an actor dresses for a role; she fears that Roman boys will 'boy' her greatness on stage, and Shakespeare's audience watched a boy actor speak that line. Antony understands his life through public performance. Enobarbus narrates Cleopatra at Cydnus as a staged tableau. The asp scene is the most elaborately stage-managed suicide in Shakespeare. The play's interest is not just in what happens but in how characters dramatise what happens — and in whether tragedy can survive its own theatricality."
              />
              <ThemeCard
                title={tr(`Honour and Reputation`)}
                description="Honour drives most of the play's catastrophic decisions. Antony challenges Caesar to single combat after Actium; he has Thidias whipped to defend Cleopatra's honour; he attempts the Roman death because it is the only honourable end available. Cleopatra's final theatrical suicide is also a reputation-managing performance: she dies 'after the high Roman fashion' to deny Caesar's triumph. The play explores how honour, originally a moral category, becomes in the Roman political world a kind of currency that can be lost as well as kept."
              />
              <ThemeCard
                title={tr(`Betrayal and Loyalty`)}
                description="Betrayal is everywhere: Cleopatra appears to betray Antony at Actium; Antony's fleet surrenders; Enobarbus deserts; Pompey's allies negotiate behind his back; Caesar betrays Lepidus; even Cleopatra's treasurer Seleucus betrays her to Caesar. Yet Shakespeare also shows extraordinary loyalty: Eros killing himself, Charmian and Iras dying with Cleopatra, Enobarbus dying of remorse. The play asks whether loyalty is possible in the imperial-political world Caesar represents, or whether it survives only in private, doomed enclaves."
              />
              <ThemeCard
                title={tr(`Time, Mutability, and Dissolution`)}
                description="The play's verbal texture is saturated with imagery of melting, dissolution, and slipping away. 'Let Rome in Tiber melt'; 'the crown o' the earth doth melt'; 'the sides of nature will not sustain it'. The world repeatedly liquefies in the play's metaphors. Critics from A. C. Bradley onwards have noted this hyperbolic, world-collapsing imagery as central to the play's tragic effect: the lovers' death is literally the dissolution of the cosmos as they perceive it. Time, too, is ungovernable: messengers carry old news, plans arrive too late, suicides miscarry by minutes."
              />
              <ThemeCard
                title={tr(`Gender and Political Identity`)}
                description="Antony complains that he is 'unqualitied' by emotion, that Cleopatra has 'unmanned' him; Cleopatra dresses Antony in her 'tires and mantles' while she wears his sword; the play repeatedly stages the porousness of gender categories. Roman discourse polices manhood through restraint and continence, and its own anxieties about Antony are framed as anxieties about gender. Cleopatra in her final scene calls herself 'fire and air', surrendering her 'baser' elements — even her gendered embodiment is reconstructed in death. A-Level candidates often profitably read the play through gender criticism."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Verbatim quotations from the First Folio (1623), the only authoritative early text.
              Modern editions sometimes differ in punctuation and line-break.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Let Rome in Tiber melt, and the wide arch / Of the rang'd empire fall!"
                speaker="Antony, Act 1 Scene 1"
                analysis="Antony's first major utterance is a hyperbolic renunciation of empire. The verb 'melt' will recur throughout the play as the dominant image of dissolution; Rome here is not merely abandoned but liquefied into its own river. 'Rang'd empire' (with its image of imperial order) and 'wide arch' (architectural permanence) make the renunciation cosmically vast. Shakespeare immediately establishes that this love operates on the scale that destroys, not the scale that compromises."
              />
              <QuoteCard
                quote="There's beggary in the love that can be reckoned."
                speaker="Antony, Act 1 Scene 1"
                analysis="The play's opening scene refusal of measurement. 'Reckoned' is a Roman bookkeeper's verb; Antony's love refuses Caesar's accounting world. The gnomic, self-contained line establishes the Egyptian aesthetic of excess — love that can be quantified is impoverished. The language anticipates the later Roman accusation that Antony has lost the ability to measure correctly: empires, fleets, his own honour."
              />
              <QuoteCard
                quote="The nobleness of life / Is to do thus."
                speaker="Antony, Act 1 Scene 1"
                analysis="As Antony embraces Cleopatra. The deictic 'thus' substitutes the body of Cleopatra for the abstract noun 'nobleness'. Antony reframes the Roman value system around the present erotic moment. The pause at the line-break ('life / Is to do thus') performs the substitution: Roman concepts are abstract, Egyptian ones embodied."
              />
              <QuoteCard
                quote="My salad days, / When I was green in judgment, cold in blood."
                speaker="Cleopatra, Act 1 Scene 5"
                analysis="Cleopatra's dismissive description of her affair with Julius Caesar. 'Green' connects youthfulness to immaturity through vegetable imagery; 'cold in blood' recalls Roman stoic rhetoric only to disown it. The phrase has entered standard English; its self-mocking irony shows Cleopatra's distance from her own past, and underlines how the play presents her as a constructed self rather than a fixed identity."
              />
              <QuoteCard
                quote="The barge she sat in, like a burnish'd throne, / Burn'd on the water."
                speaker="Enobarbus, Act 2 Scene 2"
                analysis="The opening of the Cydnus speech. The simile 'like a burnish'd throne' converts a vessel into royalty; the verb 'burn'd' literalises the gleam into combustion. Cleopatra is presented before she is described — Shakespeare delays her appearance with a stage of objects (barge, sails, oars) all heightened by metaphor. Enobarbus, the play's choric realist, is the speaker, which authenticates the spectacle: even the Roman cynic cannot escape the rhetorical pull of Egyptian display."
              />
              <QuoteCard
                quote="Age cannot wither her, nor custom stale / Her infinite variety."
                speaker="Enobarbus, Act 2 Scene 2"
                analysis="Perhaps the play's most quoted line. The two negations ('cannot... nor') are then countered with the superlative 'infinite variety'. 'Wither' applies to plants and skin alike; 'stale' applies to bread and to repetition. Cleopatra resists both biological and cultural laws of decay. 'Infinite variety' is an oxymoron — variety implies plurality, infinity implies completeness — and that paradox is Cleopatra. Critics including A. C. Bradley regard this line as the play's central interpretive crux."
              />
              <QuoteCard
                quote="I have / Immortal longings in me."
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="Cleopatra preparing for her death. The enjambment isolates 'I have' on one line, suspending grammar across the line-break and giving the predicate 'immortal longings' the force of revelation. The word 'longings' is bodily and erotic; 'immortal' is theological. Cleopatra fuses the two into a death-aspiration that is at once sensual and transcendent. The rhythm contains a half-line of stillness before the longing arrives."
              />
              <QuoteCard
                quote="I am dying, Egypt, dying."
                speaker="Antony, Act 4 Scene 15"
                analysis="Antony's most famous dying line. 'Egypt' is his vocative for Cleopatra: he addresses her as the country itself, completing the play's identification of Cleopatra with her kingdom. The repetition 'dying... dying' makes the line spondaic and slow, a long exhalation. The reduction of the play's vast political world to the intimate scene at the monument is concentrated in this one address: Egypt is no longer the geopolitical other-place but the beloved person."
              />
              <QuoteCard
                quote="O, see, my women, / The crown o' the earth doth melt."
                speaker="Cleopatra on Antony's death, Act 4 Scene 15"
                analysis="Cleopatra's grief uses the play's signature dissolution-imagery. 'The crown o' the earth' makes Antony cosmic; 'doth melt' returns to Antony's own first-act verb. Antony's death is not an event within the world but a partial collapse of the world. The imperative 'see' invites her women — and the audience — to witness a metaphysical not just political loss. This line completes a circuit begun with 'Let Rome in Tiber melt'."
              />
              <QuoteCard
                quote="Husband, I come."
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="Two stressed monosyllables. 'Husband' is significant: Cleopatra and Antony were never legally married, and her use of the word in death rewrites the relationship as marriage rather than affair. The verb 'come' with its erotic double-meaning fuses death with consummation. The compression of the line to four syllables in a play of expansive verse marks it as a moment of arrival and finality."
              />
              <QuoteCard
                quote="Dost thou not see my baby at my breast, / That sucks the nurse asleep?"
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="As the asp bites her. The transformation of poison into infant, killer into nurseling, is one of Shakespeare's most disturbing tropes. The asp becomes Cleopatra's child; the nurse (Cleopatra) is rocked into death by the suckling baby. Maternity, eroticism, and self-destruction collapse into a single image. Critics have read the line through psychoanalytic, gender, and theological lenses; its ambiguity is foundational."
              />
              <QuoteCard
                quote="Give me my robe, put on my crown; I have / Immortal longings in me."
                speaker="Cleopatra, Act 5 Scene 2"
                analysis="The full death-preparation couplet. The two imperatives ('give', 'put on') are stage-direction-like commands that organise the visual tableau: Cleopatra is being dressed by her women into a queen for her last appearance. She is staging her death as a coronation, a wedding, and a theatrical entrance simultaneously. The act of robing literalises the play's interest in performance: dying is a costumed role."
              />
              <QuoteCard
                quote="O Antony!"
                speaker="Enobarbus, Act 4 Scene 9"
                analysis="Enobarbus's dying cry, the only words he speaks before death. The exclamation is reduced to two words and a vocative. After the long speeches of the 'barge' description, Enobarbus's death is verbally minimal — a contraction that mirrors the moral collapse of the speaker. Loyalty, having been severed by reason, returns as inarticulate grief. The sentry who hears him notes 'his face is downward'; even his physical posture obeys the gravity of repentance."
              />
              <QuoteCard
                quote="No grave upon the earth shall clip in it / A pair so famous."
                speaker="Caesar, Act 5 Scene 2"
                analysis="Caesar's closing tribute. Even the victorious Roman cannot deny the lovers' fame. 'Clip' (embrace, encircle) is a tender verb for what a grave does — Caesar lapses, momentarily, into the play's Egyptian register. The line acknowledges that Caesar has won the political war but lost the symbolic one: Antony and Cleopatra will be remembered, not as Augustus's defeated enemies, but as 'a pair so famous'. The play closes by burying them together, undoing the geopolitical separation it began with."
              />
              <QuoteCard
                quote="The triple pillar of the world transform'd / Into a strumpet's fool."
                speaker="Philo, Act 1 Scene 1"
                analysis="The opening Roman judgement. 'Triple pillar' is Antony as one-third of the triumvirate; the architectural metaphor casts him as load-bearing. 'Transform'd' is the verb of degeneration. 'Strumpet's fool' is brutally reductive — Cleopatra a whore, Antony her clown. The play opens by giving the audience the Roman frame, which it will then complicate; we hear about Antony before we see him, and what we hear is contempt."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Recurring Images`)} icon="🐍">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Asp</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Egyptian cobra Cleopatra applies to her breast in Act 5. The asp is at once
                  instrument of suicide, royal Egyptian symbol (the uraeus on the Pharaoh&apos;s
                  crown), and lover-substitute through Cleopatra&apos;s figuration of it as a baby
                  at her breast. The asp arrives in a basket of figs delivered by a clown whose
                  malapropisms produce an unsettling blend of comedy and death. By dying through a
                  poison that masquerades as both an infant and a sacred animal, Cleopatra denies
                  Caesar his triumph and converts political defeat into theatrical apotheosis.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Cleopatra&apos;s Barge`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The barge at Cydnus, narrated rather than staged, is the play&apos;s defining
                  symbol of Egyptian aesthetic excess. Enobarbus&apos;s description converts every
                  detail (sails, oars, attendants, Cleopatra herself) into mythological ornament.
                  The barge carries no immediate plot weight; its function is purely symbolic. It
                  establishes Cleopatra as a public spectacle whose private self is permanently
                  inaccessible. Critics have read the barge as proto-cinematic spectacle, as
                  Renaissance court masque, and as Shakespeare&apos;s answer to Plutarch&apos;s
                  prose original.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Roman Armour and the Sword`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Antony&apos;s armour is invested with his Roman identity. Cleopatra is reported to
                  have cross-dressed Antony in her &ldquo;tires and mantles&rdquo; while she wore
                  his sword. After Actium, Antony asks Eros to arm him and unarm him in scenes of
                  intense intimacy. The sword on which he attempts to fall, and which botches his
                  suicide, is the symbol of his Roman self that he can no longer wield correctly.
                  The visual contrast between Egyptian textiles and Roman steel structures the
                  play&apos;s costume language.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Dolphin`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Cleopatra&apos;s great Act 5 dream of Antony, she describes him as &ldquo;a
                  dolphin-like&rdquo; figure who &ldquo;showed his back above / The element they
                  lived in.&rdquo; The dolphin is classical iconography for transcendence and the
                  bridge between elements. Cleopatra&apos;s Antony rises above the medium of
                  ordinary mortality. The image is part of the play&apos;s posthumous mythologising:
                  Antony in life was flawed, but in Cleopatra&apos;s narrative he becomes a colossus
                  that bestrides the ocean. The dolphin functions as a counter-symbol to
                  Caesar&apos;s prosaic land-and-paperwork imagery.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Moon</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra is repeatedly associated with lunar imagery, in line with the classical
                  identification of Egyptian queens with Isis (a moon goddess). In her death speech
                  she renounces the moon along with her &ldquo;baser&rdquo; elements: &ldquo;I am
                  fire and air; my other elements / I give to baser life.&rdquo; The play sets
                  Cleopatra&apos;s mutability against Caesar&apos;s solar steadiness. The
                  moon&apos;s phases mirror her &ldquo;infinite variety&rdquo;: a satellite that is
                  never the same shape twice, yet always recognisable.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Egypt vs Rome as Geographic Poles`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s most pervasive symbolic structure is binary: Egypt and Rome are
                  not just settings but moral, sensual, climatic, and aesthetic opposites. Egypt:
                  heat, the Nile, fertility, feminine rule, sensuality, hyperbolic verse. Rome: cold
                  marble, military discipline, masculine hierarchy, prose calculation, austerity.
                  The play&apos;s scene-structure ricochets between the two poles, forcing the
                  audience to undergo the same disorientation Antony experiences. Neither pole is
                  endorsed as correct; the play&apos;s tragedy is generated in the impossible space
                  between them.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Literary Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Composition Date: 1606&ndash;1607`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play was composed in 1606&ndash;1607, in the central period of
                  Shakespeare&apos;s major tragedies (after <em>Macbeth</em> and <em>King Lear</em>,
                  before <em>Coriolanus</em>). It was entered in the Stationers&apos; Register on 20
                  May 1608 but was first printed only in the First Folio of 1623. There is no
                  surviving quarto. The Folio text, despite some corruption, is therefore the only
                  authoritative early version and the source of all modern editions. The play was
                  almost certainly performed at the Globe and possibly at court.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Source: Plutarch&apos;s &ldquo;Life of Marcus Antonius&rdquo; (North&apos;s 1579
                  translation)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s primary source is Plutarch&apos;s biography of Mark Antony in
                  the
                  <em> Parallel Lives</em>, in Sir Thomas North&apos;s English translation of 1579
                  (from Jacques Amyot&apos;s French of 1559). North&apos;s prose is itself a
                  masterpiece, and Shakespeare frequently lifts whole phrases verbatim or
                  near-verbatim, especially in Enobarbus&apos;s &ldquo;barge&rdquo; speech, which
                  paraphrases North closely. Comparative reading of Plutarch and Shakespeare is
                  fundamental to A-Level analysis: Shakespeare retains Plutarch&apos;s narrative
                  skeleton but invents Enobarbus as a structural choric figure and expands
                  Cleopatra&apos;s death scene from a paragraph to a 300-line set-piece.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Roman Plays Sequence`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`Antony and Cleopatra`)}</em> is part of Shakespeare&apos;s sequence of
                  Roman plays, which also includes <em>{tr(`Titus Andronicus`)}</em>,{' '}
                  <em>{tr(`Julius Caesar`)}</em>, and <em>Coriolanus</em>. Together these plays
                  examine the Roman political imagination at three different historical moments: the
                  late Republic (<em>{tr(`Julius Caesar`)}</em>), its breakdown (
                  <em>{tr(`Antony and Cleopatra`)}</em>), and the early Republic (
                  <em>Coriolanus</em>). The Octavius of <em>{tr(`Julius Caesar`)}</em> is a junior
                  figure; the Octavius/Caesar of <em>{tr(`Antony and Cleopatra`)}</em>, set some
                  fourteen years later, is the man who will become Augustus. A-Level candidates
                  often pair the two plays profitably, contrasting the assassination of Julius with
                  the suicide of Antony as different kinds of Roman political ending.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`James I and the Union of the Crowns`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare wrote the play under James I, who in 1603 had united the crowns of
                  England and Scotland and styled himself &ldquo;King of Great Britain.&rdquo; James
                  was preoccupied with political union, the limits of royal power, and the figure of
                  the monarch as Augustus. The play&apos;s Roman politics &mdash; in which a
                  triumvirate gives way to single rule under a calm, calculating young leader
                  &mdash; would have resonated with debates about James&apos;s centralising
                  ambitions. Shakespeare&apos;s presentation of Caesar is notably ambivalent: he is
                  competent and victorious but emotionally diminished, suggesting the play asks
                  searching questions about the human cost of political consolidation.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Post-Triumvirate Rome and the Augustan Settlement
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The historical events the play dramatises &mdash; the battle of Actium (31 BC),
                  Antony&apos;s death (30 BC), the fall of Ptolemaic Egypt &mdash; established the
                  Roman empire as the political form that would dominate the Mediterranean for
                  centuries. Shakespeare&apos;s Renaissance audience read Roman history through
                  humanist scholarship and saw the Augustan settlement as the foundational political
                  achievement of the ancient world. The play&apos;s decision to make this triumph
                  also a tragedy &mdash; to mourn what is lost when Caesar wins &mdash; is itself a
                  critical comment on the Renaissance veneration of Augustan stability.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`The Genre Question: Tragedy or History?`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The First Folio classifies <em>{tr(`Antony and Cleopatra`)}</em> as a tragedy, but
                  it is unlike Shakespeare&apos;s other tragedies in scale and structure. It has
                  more than forty scenes, scattered across the Mediterranean, with rapid changes of
                  location and a refusal of unity of place. The protagonists die at different points
                  (Antony at the end of Act 4, Cleopatra in Act 5). Some critics treat it as a
                  hybrid Roman history-tragedy. The breadth of canvas is closer to <em>Henry V</em>{' '}
                  than to <em>Hamlet</em>, while the verbal magnificence is closer to{' '}
                  <em>King Lear</em>.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Boy Actors and Cleopatra&apos;s Self-Reference
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Shakespeare&apos;s theatre Cleopatra would have been played by a young male
                  actor. When Cleopatra fears that Roman captors will display her in a triumph where
                  some &ldquo;squeaking Cleopatra boy my greatness&rdquo; in &ldquo;the posture of a
                  whore,&rdquo; the line is metatheatrical: a boy actor speaks the line about a boy
                  actor playing Cleopatra. This collapses the levels of fiction in a way
                  characteristic of Jacobean theatre&apos;s self-consciousness.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Renaissance Egypt`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Renaissance imagination of Egypt was filtered through classical sources
                  (Plutarch, Herodotus, Plotinus) and through hieroglyphic mysticism revived by
                  humanists such as Marsilio Ficino. Egypt was the land of ancient wisdom, occult
                  knowledge, sensual abandon, and feminine rule &mdash; a cluster of ideas
                  Shakespeare draws on without ethnographic accuracy. The Egypt of the play is a
                  poetic construct, set against an equally constructed Rome, and the binary should
                  be read as imaginative geography rather than history.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── STRUCTURE */}
        <div id="structure">
          <Section title={tr(`Dramatic Structure`)} icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Forty-Scene Cinema-Like Structure</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play has more than forty scenes, ricocheting between Egypt, Rome, Athens,
                  Misenum, Actium, Syria, and Parthia. This violates the neoclassical unity of place
                  and gives the play a panoramic, almost cinematic feel. The constant scene-change
                  forces the audience to undergo the same rhetorical disorientation that the
                  protagonists experience: every emotional commitment in Egypt is undercut by a
                  Roman scene of cold judgement, and vice versa. The structure is itself a thematic
                  device.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Bipartite Tragic Death Pattern`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Unusually, the play has two tragic deaths separated by a full act. Antony dies at
                  the end of Act 4; Cleopatra survives through the whole of Act 5. This gives
                  Cleopatra her own posthumous tragedy in which she becomes the play&apos;s sole
                  protagonist. Some critics argue the play has two protagonists who never share a
                  tragic climax; others, that Cleopatra&apos;s Act 5 makes her the play&apos;s
                  ultimate centre of consciousness.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Verse and Prose Distribution</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Egyptian scenes use predominantly hyperbolic, mythologising verse; Roman political
                  scenes often use plainer, more transactional verse and prose. Enobarbus, the
                  play&apos;s hinge character, switches between verse (the &ldquo;barge&rdquo;
                  speech) and prose (his cynical Roman commentary), embodying the play&apos;s
                  stylistic dialectic in a single mouth. Shakespeare&apos;s late style here is
                  unusually fluid: blank verse becomes irregular, enjambed, and rhythmically
                  expansive.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Choric Commentary`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Enobarbus, Philo, Demetrius, and Scarus all function as choric voices commenting
                  on the central pair. Enobarbus is the most developed: he interprets Cleopatra to a
                  Roman audience, predicts Antony&apos;s defeat, and finally collapses under the
                  weight of his own clarity. The play&apos;s use of multiple Roman commentators
                  constructs the protagonists from outside as well as from within &mdash; a
                  structural device unusual in Shakespearean tragedy.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Monument as Visual Climax</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Acts 4 and 5, Cleopatra retreats to her monument, an elevated stage space
                  probably represented by the Globe&apos;s gallery. Antony is hauled up to her,
                  dying. The visual emblem of the queen elevated above the dying hero structures the
                  second half of the play and gives the suicide scenes a vertical theatricality
                  &mdash; a self-conscious tableau. The monument also iconographically anticipates
                  Cleopatra&apos;s funeral monument and the play&apos;s own status as monument to
                  the lovers.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  Reported Action and Withheld Spectacle
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Major events &mdash; the meeting at Cydnus, the battle of Actium, Pompey&apos;s
                  death, Antony&apos;s suicide attempt &mdash; are reported rather than enacted.
                  This places enormous rhetorical weight on the messengers and witnesses: Enobarbus
                  does not show the barge, he describes it; Scarus narrates Actium rather than
                  staging it. The play makes its language carry what other plays would stage,
                  creating a verbal-visual tension that is itself a thematic device.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title="A-Level Essay Plans with Comparative Angles" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five exam-ready plans with thesis, paragraph structure, and a comparative angle
              suitable for paper-2 and coursework essays.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;The play&apos;s love is more rhetoric than reality.&rdquo; In light of
                  this, examine Shakespeare&apos;s presentation of love between Antony and
                  Cleopatra.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare deliberately makes the lovers&apos; love performative without
                      thereby making it false: in this play, rhetoric is not the opposite of reality
                      but the medium through which the most real emotions are constructed.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Hyperbolic opening
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Let Rome in Tiber melt&rdquo; and &ldquo;there&apos;s beggary in the
                      love that can be reckoned&rdquo;. Examine the world-renouncing scale of the
                      rhetoric, and the question whether Antony believes it or is performing it for
                      Cleopatra.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Cleopatra&apos;s theatricality
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;My salad days&rdquo; and the messenger scene. Cleopatra constructs her
                      love-self through performance. Argue that the dichotomy between rhetoric and
                      reality is itself Roman; in Egyptian aesthetics they are continuous.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The death scenes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I am dying, Egypt, dying&rdquo; and &ldquo;Husband, I come.&rdquo;
                      Argue that the rhetorical performance becomes most intense at the moments of
                      greatest sincerity. The lovers convert their deaths into rhetoric without
                      thereby cheapening them.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The play&apos;s formal endorsement
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar&apos;s closing tribute and Enobarbus&apos;s Cydnus speech. Both Roman
                      authorities, in different registers, validate the lovers&apos; rhetoric
                      posthumously. Shakespeare gives the rhetorical Egyptian view the last word.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Comparative Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with the more compressed lyrical love of{' '}
                      <em>{tr(`Romeo and Juliet`)}</em>, where the rhetorical scaffolding is
                      sonnet-form rather than imperial scale; or with <em>Othello</em>, where
                      Othello&apos;s &ldquo;round unvarnish&apos;d tale&rdquo; sets rhetoric against
                      military plainness in the opposite direction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. &ldquo;Cleopatra&apos;s greatness lies entirely in her ability to die.&rdquo;
                  Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cleopatra&apos;s death scene is unquestionably the play&apos;s most sustained
                      achievement, but Shakespeare prepares for it through 4 acts of variety,
                      comedy, and apparent triviality, suggesting that her greatness is the
                      integration of these qualities, not merely her capacity for the high Roman
                      fashion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The case for the death
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I have / Immortal longings in me&rdquo;; &ldquo;Give me my robe, put on
                      my crown&rdquo;; &ldquo;Husband, I come.&rdquo; The death is staged with
                      theatrical complexity, dressing-as-coronation, asp-as-baby. Acknowledge the
                      strength of the case.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The case against
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cleopatra&apos;s flight at Actium, her ambiguous courting of Caesar through
                      Thidias, her attempted concealment of treasure. These moments complicate any
                      reading of her as straightforwardly heroic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; &ldquo;Infinite variety&rdquo; as Cleopatra&apos;s real
                      claim
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus&apos;s &ldquo;Age cannot wither her, nor custom stale / Her infinite
                      variety.&rdquo; Argue that the death is the integration of all her variety
                      into a single act &mdash; not a discontinuous greatness but the culmination of
                      a continuous one.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The metatheatrical dimension
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The boy-actor reference. Cleopatra fears being boyed; she dies a fully
                      orchestrated theatrical death that prevents that fate. The play&apos;s
                      greatness and Cleopatra&apos;s greatness are aligned: both succeed by
                      self-conscious performance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Comparative Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with Webster&apos;s Duchess of Malfi, whose &ldquo;I am Duchess of
                      Malfi still&rdquo; offers a different model of female-aristocratic dying. Or
                      compare Cleopatra&apos;s self-mythologising end with the more chaotic Lady
                      Macbeth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. &ldquo;The play stages the birth of the Roman empire and finds it
                  disappointing.&rdquo; In light of this, explore Shakespeare&apos;s presentation of
                  Octavius Caesar.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar is the play&apos;s political victor, but Shakespeare presents the
                      Augustan settlement as a contraction of human possibility &mdash; competence
                      achieved at the cost of magnanimity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Caesar&apos;s political competence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      His handling of Pompey, Lepidus, and Antony. Caesar wins by waiting, by
                      calculation, by manipulating kinship. He embodies the bureaucratic-imperial
                      mode the play knows is the future.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The emotional cost
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar&apos;s coldness towards Octavia&apos;s feelings; his cynical use of his
                      sister; his strategic management of Cleopatra in Act 5. Shakespeare lets the
                      audience see the emotional reductions that competence requires.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Caesar&apos;s closing tribute
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;No grave upon the earth shall clip in it / A pair so famous.&rdquo;
                      Even the victor must concede the defeated their fame. The play closes with
                      Caesar acknowledging that political victory does not translate into legendary
                      stature.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Jacobean political resonance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      James I&apos;s self-styling as Augustus; the union of crowns; Renaissance
                      ambivalence about the price of consolidated rule. Shakespeare&apos;s Caesar is
                      a thoughtful intervention in 1606&ndash;7 political debate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Comparative Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with the Octavius of <em>{tr(`Julius Caesar`)}</em>, set fourteen
                      years earlier, where he is junior to Antony. Or compare with the Henry V of
                      the second tetralogy, who also embodies political competence won at the cost
                      of warmth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. &ldquo;Enobarbus is the truth-telling chorus of the play.&rdquo; Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus speaks more clearly than any other character but is, like the play
                      itself, divided between Roman judgement and Egyptian wonder; his death
                      dramatises the impossibility of choosing between them.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Roman cynic
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus&apos;s prose commentaries on Antony&apos;s decisions. He sees
                      clearly that fighting at sea is a mistake; he predicts the catastrophe. Roman
                      reason has its proper voice in him.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Egyptian celebrant
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Cydnus speech: &ldquo;The barge she sat in, like a burnish&apos;d throne,
                      / Burn&apos;d on the water&rdquo; and &ldquo;Age cannot wither her, nor custom
                      stale / Her infinite variety.&rdquo; Cynical Enobarbus can also produce the
                      play&apos;s most baroque imagery.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The defection
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enobarbus reasons his way to leaving Antony, and reason proves catastrophic
                      for him. His final cry &ldquo;O Antony!&rdquo; collapses his elaborate verse
                      into two words. Reason fails him, just as it failed Antony from the opposite
                      direction.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The chorus that fails
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A traditional chorus survives the action; Enobarbus dies in the middle of it.
                      Shakespeare denies the play any external truth-position. The chorus is
                      implicated, divided, and tragic, like the protagonists.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Comparative Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with the Fool in <em>King Lear</em>, who also speaks truth to a master
                      and disappears in the middle of the play. Or with Horatio in <em>Hamlet</em>,
                      the truth-telling friend who survives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. Examine the significance of the Egypt/Rome opposition in Shakespeare&apos;s
                  presentation of the tragedy.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The geographic binary structures every level of the play &mdash; verse,
                      scene-pattern, costume, gender &mdash; and the tragedy is generated not in
                      either pole but in the impossibility of inhabiting both at once.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The opening scene as model
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Philo&apos;s austere Roman framing followed immediately by Antony&apos;s
                      &ldquo;Let Rome in Tiber melt.&rdquo; The first 50 lines establish the
                      structural method of the entire play: Roman judgement clashes with Egyptian
                      self-assertion within seconds.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Verse as geography
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Egyptian verse uses hyperbole, dissolution-imagery (&ldquo;the crown o&apos;
                      the earth doth melt&rdquo;), mythological reference. Roman verse is terser,
                      transactional, focused on tactics. Style is geography.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The forty-scene structure
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The play ricochets between settings; the audience feels the moral
                      disorientation Antony feels. Refusal of unity of place is itself a thematic
                      statement.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The lovers&apos; death as geographic union
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I am dying, Egypt, dying&rdquo; identifies Cleopatra with her country
                      and dissolves the geographic binary at the moment of death. Caesar&apos;s
                      closing &ldquo;a pair so famous&rdquo; concedes their joint posthumous status
                      across the divide.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Comparative Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Compare with the Venice/Cyprus opposition in <em>Othello</em>, where the move
                      from civilised centre to military periphery enables the tragedy. Or with the
                      court/forest binary of <em>{tr(`As You Like It`)}</em>, used for comic rather
                      than tragic ends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── A* POINTS */}
        <div id="astar-points">
          <Section title="A* Exemplar Points and Critical Interpretations" icon="⭐">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Higher-order interpretations for top-band candidates. Each demonstrates the kind of
              synthesis of close reading, structural awareness, and critical context expected at
              A*/grade 9.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  1. The Dissolution Trope as Structural Device
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The verb &ldquo;melt&rdquo; appears in Antony&apos;s &ldquo;Let Rome in Tiber
                  melt&rdquo; (Act 1.1) and recurs in Cleopatra&apos;s &ldquo;the crown o&apos; the
                  earth doth melt&rdquo; (Act 4.15). The same word marks Antony&apos;s opening
                  renunciation and his death. The play&apos;s vocabulary of dissolution &mdash;
                  melting, drowning, fading &mdash; is structurally circular: what Antony invokes
                  hyperbolically as gesture in Act 1 is enacted literally in Act 4. An A* candidate
                  can trace the verb across the play and argue that Shakespeare&apos;s tragic
                  mechanism is to make the metaphors of love come true as the metaphors of death.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  2. The Asp&apos;s Triple Symbolism
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  When Cleopatra applies the asp, the moment carries three superimposed
                  identifications: the asp as instrument of suicide, the asp as the Egyptian uraeus
                  (royal serpent on the Pharaoh&apos;s crown), and the asp as the imagined infant at
                  her breast. The line &ldquo;Dost thou not see my baby at my breast, / That sucks
                  the nurse asleep?&rdquo; performs all three at once: queen, mother, suicide. A
                  top-band reading explores the simultaneity rather than choosing one meaning, and
                  connects the multivalence to the play&apos;s wider commitment to &ldquo;infinite
                  variety&rdquo;.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  3. Plutarch and Shakespeare&apos;s Verbal Borrowings
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Comparison with North&apos;s 1579 translation of Plutarch reveals that Shakespeare
                  lifts entire phrases for the &ldquo;barge&rdquo; speech (e.g. North: &ldquo;the
                  poop whereof was of gold, the sails of purple&rdquo;; Shakespeare: &ldquo;the poop
                  was beaten gold; / Purple the sails&rdquo;). The transformations are subtle but
                  instructive: Shakespeare strips North&apos;s syntactic ornament and intensifies
                  the metaphors. An A* discussion shows that source-criticism is not pedantry but a
                  tool for analysing Shakespeare&apos;s characteristic compression.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  4. The Boy Actor and Metatheatrical Risk
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra&apos;s line about a &ldquo;squeaking Cleopatra&rdquo; boy
                  &ldquo;boying&rdquo; her greatness was, in 1607, spoken by a boy actor. The play
                  exposes its own theatrical condition with extraordinary self-awareness. A top-band
                  reading argues that Cleopatra&apos;s elaborate, tableau-like death is itself the
                  response to the metatheatrical anxiety: Cleopatra escapes the Roman triumph and
                  the boy-actor&apos;s reduction by becoming an even more elaborate piece of theatre
                  under her own direction. The play is asking whether tragedy can survive its own
                  theatricality, and answers yes &mdash; but only by absorbing the theatricality
                  into the tragedy.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  5. Roman Stoicism Reconsidered
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A common A-Level reading aligns Rome with order and Egypt with chaos. A more
                  sophisticated reading notes that Rome itself is fractured: Pompey&apos;s
                  rebellion, the dissolution of the triumvirate, the elimination of Lepidus, the
                  tension between Antony and Caesar. Roman virtue, far from being unitary, is a
                  contested ideological category that different Romans claim for incompatible
                  projects. Caesar&apos;s Roman virtue (calculation, restraint) is not Antony&apos;s
                  Roman virtue (generosity, soldiership) is not Pompey&apos;s Roman virtue
                  (republican honour). A* answers refuse the simple Egypt/Rome binary and trace its
                  instabilities.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  6. Cleopatra&apos;s Dream as Reverse Apotheosis
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cleopatra&apos;s great Act 5 speech to Dolabella imagining Antony as a colossal
                  demi-god &mdash; legs bestriding the ocean, arm crowning the world &mdash;
                  constructs Antony&apos;s posthumous greatness through Cleopatra&apos;s rhetoric.
                  Crucially, Antony in life was diminished, defeated, botched; he becomes great only
                  in Cleopatra&apos;s mythologising. An A* reading argues that this is
                  Shakespeare&apos;s philosophical claim: greatness is not a property of persons but
                  a posthumous construction of language. The speech is a meditation on how legend is
                  made, and on the play&apos;s own role in making legends.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  7. The Play&apos;s Refusal of Tragic Unity
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Where Aristotelian and Renaissance tragic theory expects unity of place, time, and
                  action, this play disperses across the Mediterranean over years and stages two
                  protagonists who die in different acts. The tragic form is itself stretched to its
                  limit. Top-band candidates can argue that this formal expansion mirrors the
                  play&apos;s thematic concern with the limits of imperial scale: the form refuses
                  to be contained for the same reason Antony refuses to be contained, and
                  Caesar&apos;s eventual victory parallels the way more conservative tragic forms
                  eventually contain unruly material.
                </p>
              </div>
              <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
                <h4 className="font-bold text-violet-700 dark:text-violet-300">
                  8. The Critical Tradition: From Bradley to Adelman
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A. C. Bradley in <em>{tr(`Oxford Lectures on Poetry`)}</em> (1909) argued that the
                  play, despite its excellence, is not a tragedy of the same order as{' '}
                  <em>Hamlet</em> or <em>Othello</em>: the protagonists do not have the same
                  intensity of internal struggle. Janet Adelman in <em>{tr(`The Common Liar`)}</em>{' '}
                  (1973) reframed the play around the question of Cleopatra&apos;s reliability and
                  the audience&apos;s difficulty assessing her. More recently, feminist and
                  postcolonial critics have read Egypt/Rome as racialised and gendered geography. A
                  top-band candidate references at least one critical position and uses it as a
                  springboard rather than a conclusion.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section title="A-Level Practice Questions" icon="📝">
            <p className="text-sm text-muted-foreground mb-4">
              Exam-style questions in the style of AQA, OCR, and Edexcel A-Level. Plan a 45-minute
              response using the structure: thesis &rarr; four PEEL paragraphs each with verbatim
              quotation &rarr; comparative angle &rarr; brief conclusion.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: '“In Antony and Cleopatra Shakespeare presents love as a destructive force.” In light of this view, examine Shakespeare’s presentation of love in the play.',
                  marks: 25,
                },
                {
                  q: 'Discuss the view that Octavius Caesar represents a kind of victory the play does not value.',
                  marks: 25,
                },
                {
                  q: 'Examine the significance of the Egypt/Rome opposition in Shakespeare’s presentation of the tragedy.',
                  marks: 25,
                },
                {
                  q: '“Cleopatra is finally less a tragic heroine than a self-dramatising performer.” Discuss.',
                  marks: 25,
                },
                {
                  q: 'Examine the role of Enobarbus in Shakespeare’s presentation of the play’s central relationship.',
                  marks: 25,
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          A-Level Exam Tips for Antony and Cleopatra
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote verbatim from the Folio.`)}</strong> A-Level examiners reward
              accurate textual citation; modern editions sometimes differ in spelling and
              punctuation, but the words must be Shakespeare&apos;s.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Plutarch.`)}</strong> Plutarch&apos;s &ldquo;Life of Marcus
              Antonius&rdquo; (North&apos;s 1579 English) is the principal source. Comparisons of
              source and play are particularly rewarded in OCR and Edexcel coursework.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the genre question.`)}</strong> The play is unusual in scope and
              structure; explicit awareness of how it stretches tragic form earns marks at the top
              band.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Connect Jacobean context.`)}</strong> James I as Augustus, the union of
              crowns, debates about consolidated rule. The play is not just Roman; it speaks to
              1606&ndash;7 England.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Reference critical positions.`)}</strong> Bradley, Adelman, feminist
              criticism, postcolonial criticism. A* requires engaging with the critical tradition,
              not summarising it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Trace verbal patterns.`)}</strong> &ldquo;Melt,&rdquo;
              &ldquo;variety,&rdquo; &ldquo;Egypt&rdquo; as vocative for Cleopatra, the
              dolphin/colossus imagery. Showing word-recurrence across acts demonstrates close
              reading at the highest level.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Don&apos;t simplify the binary.`)}</strong> Egypt and Rome are
              imaginative geographies, not historical ones. The opposition is the play&apos;s
              structuring device but Shakespeare repeatedly destabilises it.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`Antony and Cleopatra`)}</em> by William Shakespeare was composed
          c.1606&ndash;1607 and first printed in the First Folio of 1623. Shakespeare died in 1616
          and the text is in the <strong>public domain</strong>. All quotations on this page are
          reproduced from the First Folio text via standard scholarly editions; act and scene
          divisions follow the editorial tradition established by Rowe (1709) and refined by modern
          editors.
        </p>
      </footer>
    </>
  )
}
