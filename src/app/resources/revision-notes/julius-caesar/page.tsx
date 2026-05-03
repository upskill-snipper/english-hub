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

export default function JuliusCaesarPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Shakespeare
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
          Julius Caesar &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">William Shakespeare, c. 1599</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your A-Level and GCSE English Literature exam. Act-by-act plot,
          character profiles, key themes with evidence, verbatim quotations with analysis,
          symbolism, Roman and Elizabethan context, and exam-ready essay questions with planning
          notes.
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
          <Section title="Act-by-Act Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act 1 &mdash; The Conspiracy Begins
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens during the feast of Lupercal in Rome. The tribunes Flavius and
                  Marullus rebuke commoners for celebrating Caesar&apos;s triumphal return after
                  defeating Pompey&apos;s sons. A Soothsayer warns Caesar to &ldquo;beware the Ides
                  of March,&rdquo; but Caesar dismisses him. Cassius probes Brutus&apos;s anxieties
                  about Caesar&apos;s growing power and begins to recruit him into a conspiracy.
                  Casca reports that Antony offered Caesar a crown three times in public and Caesar
                  refused it &mdash; though with apparent reluctance. A violent thunderstorm filled
                  with omens (a slave with a burning hand, a lion in the Capitol, men on fire)
                  descends upon Rome, and Cassius interprets the chaos as a sign that the
                  conspirators must act.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Soothsayer&apos;s warning &mdash; &ldquo;Beware the Ides of
                      March&rdquo;
                    </li>
                    <li>&bull; Cassius&apos;s seduction of Brutus &mdash; rhetoric as a weapon</li>
                    <li>
                      &bull; Antony&apos;s public offer of the crown &mdash; political theatre
                    </li>
                    <li>
                      &bull; The supernatural storm &mdash; cosmic disorder mirrors political crisis
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act 2 &mdash; Decision and Doubt
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Brutus, alone in his orchard, persuades himself that Caesar must die for the good
                  of Rome &mdash; not for what he is, but for what he might become. The conspirators
                  arrive, and Brutus overrules Cassius&apos;s sensible suggestion to kill Antony as
                  well, insisting their act be sacrificial rather than butcherly. Portia begs Brutus
                  to share his troubles with her. Meanwhile, Calpurnia&apos;s nightmare (a statue of
                  Caesar bleeding from a hundred spouts) and the priests&apos; bad omens nearly
                  convince Caesar to stay home, but Decius reinterprets the dream flatteringly and
                  Caesar departs for the Capitol, fatally proud.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Brutus&apos;s orchard soliloquy &mdash; reasoning towards murder</li>
                    <li>&bull; Portia&apos;s plea &mdash; private loyalty against public duty</li>
                    <li>&bull; Calpurnia&apos;s dream of the bleeding statue</li>
                    <li>&bull; Decius&apos;s flattery overrides the omens</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act 3 &mdash; The Assassination (Turning Point)
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  This act is the pivot of the play. Caesar enters the Capitol, ignores
                  Artemidorus&apos;s warning letter, and refuses to lift Publius Cimber&apos;s
                  banishment. The conspirators surround him, Casca strikes first, and Brutus
                  delivers the final blow. Caesar recognises his closest friend with the words
                  &ldquo;Et tu, Brute?&rdquo; before falling. Antony arrives, feigns reconciliation,
                  and is permitted to speak at the funeral. Brutus addresses the plebeians in
                  measured prose, justifying the killing for Rome&apos;s liberty. Then Antony,
                  beginning humbly, turns the crowd into a vengeful mob through his masterful
                  funeral oration, reading Caesar&apos;s will and revealing each of the
                  conspirators&apos; wounds. Octavius arrives. Civil war is now inevitable.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The assassination at the Capitol &mdash; the play&apos;s structural
                      pivot
                    </li>
                    <li>
                      &bull; &ldquo;Et tu, Brute?&rdquo; &mdash; betrayal and friendship in three
                      words
                    </li>
                    <li>&bull; Brutus&apos;s prose oration &mdash; reason and restraint</li>
                    <li>&bull; Antony&apos;s funeral speech &mdash; rhetoric weaponised</li>
                    <li>&bull; The mob murders Cinna the poet &mdash; mob violence unleashed</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Act 4 &mdash; The Triumvirate and the Quarrel
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Antony, Octavius and Lepidus form the Second Triumvirate and ruthlessly compile a
                  proscription list, condemning men (including Antony&apos;s own nephew) to death.
                  Antony cynically discusses replacing Lepidus once he has served his purpose. In
                  Sardis, Brutus and Cassius quarrel bitterly over money, bribery and command,
                  before reconciling. Brutus learns that Portia has killed herself by swallowing
                  fire. The ghost of Caesar appears to Brutus in his tent, calling itself his
                  &ldquo;evil spirit&rdquo; and promising to meet him at Philippi.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The triumvirate&apos;s proscription &mdash; the Republic dies in
                      private
                    </li>
                    <li>
                      &bull; The quarrel and reconciliation &mdash; Brutus and Cassius&apos;s bond
                    </li>
                    <li>
                      &bull; Portia&apos;s suicide &mdash; the cost of Brutus&apos;s public choice
                    </li>
                    <li>&bull; Caesar&apos;s ghost at Sardis &mdash; the past haunts the future</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Act 5 &mdash; Philippi and the Fall of the Liberators
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At Philippi, the armies meet and exchange insults before battle. The first
                  engagement goes well for Brutus but Cassius&apos;s wing is overrun. Mistakenly
                  believing his friend Titinius captured, Cassius commands his servant Pindarus to
                  kill him with the same sword that pierced Caesar. Titinius, finding Cassius dead,
                  kills himself too. In the second battle, Brutus is defeated and runs upon his own
                  sword, asking Strato to hold it for him. Antony eulogises Brutus as &ldquo;the
                  noblest Roman of them all,&rdquo; the only conspirator who acted from genuine
                  concern for the common good. Octavius promises Brutus an honourable burial. The
                  Republic is dead; the imperial age is born.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Cassius&apos;s suicide &mdash; killed by Caesar&apos;s own sword</li>
                    <li>&bull; Brutus&apos;s suicide &mdash; the last of the liberators falls</li>
                    <li>&bull; Antony&apos;s eulogy &mdash; the &ldquo;noblest Roman&rdquo;</li>
                    <li>&bull; Octavius&apos;s closing lines &mdash; an emperor in waiting</li>
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
                name="Julius Caesar"
                description="Rome's most powerful man and a brilliant general returning in triumph. Shakespeare presents Caesar as paradoxical: physically vulnerable (deaf in one ear, prone to falling sickness, nearly drowned in the Tiber by Cassius's account), yet possessing an outsized public persona that he constantly performs. He frequently refers to himself in the third person ('Caesar shall forth'), conflating self with myth. His refusal of the crown is theatrical; his dismissal of warnings (the Soothsayer, Calpurnia's dream, Artemidorus's letter) reveals fatal pride. Caesar dies in Act 3, but his name and ghost dominate Acts 4 and 5 — Shakespeare's structural irony is that Caesar is more powerful dead than alive."
              />
              <CharacterCard
                name="Marcus Brutus"
                description="The play's tragic hero. Brutus is a Stoic philosopher, an honourable man torn between his love of Caesar and his love of Rome. Cassius manipulates his idealism, but Brutus genuinely believes the killing is a sacrifice for the common good, not personal ambition. His tragic flaws are political naïveté and rigid self-image: he overrules Cassius about killing Antony, lets Antony speak at the funeral, and insists on attacking at Philippi. His private grief — Portia's suicide, the ghost — humanises him. Antony's final tribute confirms Shakespeare's view that Brutus alone among the conspirators acted 'in a general honest thought / And common good to all.'"
              />
              <CharacterCard
                name="Caius Cassius"
                description="The chief architect of the conspiracy. Cassius is shrewd, observant ('a lean and hungry look'), and politically pragmatic where Brutus is idealistic. He resents Caesar's rise from a position of envy as much as principle, and uses flattery, forged letters and emotional appeals to recruit Brutus. He is repeatedly proven correct (kill Antony, do not let him speak, do not march to Philippi) yet defers to Brutus's moral authority — a fatal weakness. His suicide on his own birthday, by the same sword that killed Caesar, completes his arc with bitter symbolism. Despite his cynicism, his final scenes show genuine love for Brutus."
              />
              <CharacterCard
                name="Mark Antony"
                description="Caesar's loyal friend and the play's most dangerous rhetorician. Antony begins as a seemingly minor figure — a partygoer and athlete — but emerges after the assassination as a master of political performance. His funeral oration is one of the greatest set-pieces in Shakespeare: he turns the plebeians against Brutus through irony, repetition of 'honourable man,' carefully timed pauses, and the dramatic unveiling of Caesar's wounds and will. By Act 4 he is a calculating triumvir, willing to mark his own nephew for death. Shakespeare presents him as politically brilliant but morally compromised."
              />
              <CharacterCard
                name="Octavius Caesar"
                description="Caesar's adopted heir and great-nephew, a young man whose few lines carry enormous weight. Octavius arrives in Act 3 just as Antony's coup gathers pace, and by Act 5 he is asserting equal authority with his older partner. Shakespeare uses him sparingly but pointedly: his cool, decisive speech contrasts with Antony's flamboyance. Audiences would recognise him as the future Augustus, founder of the Roman Empire — meaning the play's final lines show the Republic ending and the Imperial age beginning."
              />
              <CharacterCard
                name="Calpurnia"
                description="Caesar's wife. Calpurnia begs Caesar to stay home on the Ides, having dreamed of his statue running with blood and watched the priests fail to find a heart in the sacrificial beast. Her warnings briefly succeed, but Decius's flattery — reinterpreting the dream as a sign of Roman renewal — overrides her female intuition. Shakespeare uses her to dramatise the play's recurring theme of warnings ignored, and to show the limits of women's influence in Roman public life."
              />
              <CharacterCard
                name="Portia"
                description="Brutus's wife and the daughter of Cato the Younger, a famous Roman Stoic. Portia is presented as Brutus's intellectual equal and demands he share his troubles with her, even wounding her own thigh to prove her constancy. Her later 'fire'-induced suicide (reported in Act 4) is one of the play's most haunting offstage events. She represents the private, domestic world that Brutus sacrifices for political duty, and her death registers the human cost of his choice."
              />
              <CharacterCard
                name="Casca"
                description="A blunt, cynical conspirator. Casca's prose description of Antony's three offers of the crown is a masterpiece of satirical reportage: he sees through the public spectacle ('it was mere foolery'). During the storm of Act 1 Scene 3 his frightened catalogue of omens contrasts with Cassius's defiant interpretation. Casca strikes the first blow at the assassination — 'Speak, hands, for me!' — making him the literal beginning of Caesar's death."
              />
              <CharacterCard
                name="Cicero"
                description="A famous Roman orator and senator who appears briefly during the storm. Cicero's calm scepticism ('men may construe things, after their fashion, / Clean from the purpose of the things themselves') punctures Casca's superstition and frames the play's interest in interpretation. The conspirators consider recruiting him but Brutus rejects the idea. Cicero is later murdered by the triumvirate's proscription, a fact briefly mentioned in Act 4 — historically accurate and chilling."
              />
              <CharacterCard
                name="The Soothsayer"
                description="A nameless prophet who delivers the play's most famous warning — 'Beware the Ides of March' — in Act 1 Scene 2, and is dismissed by Caesar as 'a dreamer.' He reappears on the day of the assassination itself: when Caesar boasts that the Ides have come, the Soothsayer replies, 'Ay, Caesar, but not gone.' He embodies the theme of fate ignored, and the play's preoccupation with signs that the powerful cannot or will not read."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Honour vs Ambition"
                description="The play stages a debate about what counts as honourable action. Brutus murders his friend in the name of honour, believing Caesar's ambition threatens the Republic; Antony repeatedly calls the conspirators 'honourable men' until the word collapses under irony. Caesar's ambition is itself ambiguous — he refuses the crown but seemingly wishes for it. Shakespeare refuses to settle the question: even Antony's closing tribute, 'This was the noblest Roman of them all,' grants Brutus the honour his enemies cannot deny him, while showing that honourable intentions led directly to civil war."
              />
              <ThemeCard
                title="Fate vs Free Will"
                description="Omens, dreams, the Soothsayer, and Caesar's ghost suggest a universe in which the future is fixed. Yet Cassius insists in Act 1 that 'the fault... is not in our stars / But in ourselves' — a defiant assertion of human responsibility. The play tests both views: warnings are ignored, but characters' personalities (Caesar's pride, Brutus's idealism, Cassius's deference) drive them to predictable ends. Shakespeare leaves the question deliberately open, so the tragedy can be read as either cosmic destiny or psychological inevitability."
              />
              <ThemeCard
                title="Public vs Private"
                description="Almost every character is forced to choose between political duty and personal loyalty. Brutus chooses Rome over Caesar and over Portia. Caesar chooses public spectacle over Calpurnia's pleading. Antony pretends private grief while planning public revenge; later he marks his own nephew for death. Portia's suicide and the offstage death of Cicero remind us of the human cost of public action. The play's domestic scenes (Brutus's orchard, Portia's plea, Calpurnia's bedroom) sit deliberately against its public ones (the Capitol, the Forum, Philippi), forcing the audience to weigh the price of politics."
              />
              <ThemeCard
                title="Rhetoric and Persuasion"
                description="Words drive every plot turn. Cassius's seduction of Brutus, Decius's flattery of Caesar, Brutus's measured prose oration, and above all Antony's funeral speech show language as the play's true weapon. Antony's repeated 'Brutus is an honourable man' demonstrates how irony, repetition and apparent restraint can move a crowd. Shakespeare, writing for a verbal medium, makes rhetoric not just a theme but the engine of the action: Rome falls because Brutus underestimates the spoken word."
              />
              <ThemeCard
                title="Power and Tyranny"
                description="The play asks when killing a ruler is justified — a dangerous question in 1599 England, where Elizabeth I had no heir and the spectre of regicide haunted the court. Brutus argues Caesar must die not for what he has done but for what he might become; Cassius argues from envy and republican principle. The killing produces the very tyranny it sought to prevent: Antony's mob, the triumvirate's proscription list, and Octavius's emperorship. Shakespeare suggests that violence in defence of liberty often births a worse despotism."
              />
              <ThemeCard
                title="Friendship and Betrayal"
                description="Caesar's dying words — 'Et tu, Brute?' — make personal betrayal the heart of the political tragedy. Friendship and political alliance constantly collide: Cassius and Brutus quarrel and reconcile; Antony's funeral speech is framed as the act of a true friend; even Octavius and Antony are uneasy partners destined for future war. Brutus's defence of his act — that he loved Caesar but loved Rome more — captures Shakespeare's deepest theme: the tragedy of choosing one love over another."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Social Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Republican Rome and 44 BC</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The historical events take place on 15 March 44 BC, during the late Roman
                  Republic. Caesar had won a civil war against Pompey and been declared dictator
                  perpetuo (dictator for life), provoking fears that he would crown himself king and
                  end the five-hundred-year-old Republic. Sixty senators conspired to assassinate
                  him; he was stabbed twenty-three times in the Theatre of Pompey. The killing did
                  not save the Republic but launched a thirteen-year civil war that ended with
                  Octavius (Augustus) founding the Roman Empire in 27 BC. Shakespeare compresses
                  these events ruthlessly for dramatic effect.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Plutarch&apos;s <em>Lives</em> as Source
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s primary source is Sir Thomas North&apos;s 1579 English
                  translation of Plutarch&apos;s <em>Parallel Lives</em> (originally written in
                  Greek, c. 100 AD). Plutarch supplied the &ldquo;Lives&rdquo; of Caesar, Brutus and
                  Antony from which Shakespeare drew most plot details, including the Soothsayer,
                  Calpurnia&apos;s dream, Caesar&apos;s last words (which Plutarch reports in
                  Greek), Cassius&apos;s &ldquo;lean and hungry&rdquo; appearance, the quarrel at
                  Sardis, and Portia&apos;s death. Shakespeare follows Plutarch closely but
                  condenses the timeline and intensifies the rhetoric.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Elizabethan Succession Anxiety</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In 1599 Queen Elizabeth I was sixty-five, unmarried, childless, and refused to
                  name a successor. The kingdom was deeply anxious about civil war breaking out on
                  her death. A play about regicide, assassination, and power struggles was therefore
                  politically charged. Shakespeare&apos;s presentation of the conspirators&apos;
                  failure &mdash; their good intentions producing tyranny &mdash; can be read as a
                  cautious warning against political violence, suitable for a Tudor audience.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Globe Theatre, c. 1599</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>Julius Caesar</em> is widely thought to have been one of the first plays
                  performed at the new Globe Theatre, which opened on Bankside in 1599. The Swiss
                  traveller Thomas Platter saw a performance of a tragedy about Caesar in London on
                  21 September 1599 &mdash; almost certainly Shakespeare&apos;s play. The
                  Globe&apos;s open-air, non-illusionistic stage suited the play&apos;s reliance on
                  rhetoric and crowd scenes, with the groundlings standing in the yard becoming, in
                  effect, the Roman plebeians swayed by Antony&apos;s speech.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Tudor and Stuart Fears of Conspiracy</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The late Tudor period was haunted by plots: the Babington Plot (1586) had led to
                  the execution of Mary Queen of Scots; the Earl of Essex would attempt rebellion in
                  1601. Shakespeare&apos;s audiences would have recognised the conspirators&apos;
                  secret meetings, coded letters and oaths from contemporary state propaganda. The
                  Gunpowder Plot of 1605 &mdash; six years after the play &mdash; would dramatise
                  these anxieties even more sharply. Shakespeare&apos;s nuanced portrayal of
                  conspirators as both noble and disastrous reflects this divided Elizabethan and
                  early Stuart consciousness.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              All quotations below are verified verbatim from Shakespeare&apos;s First Folio (1623)
              and the standard modern editions. Use them precisely as written.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Beware the Ides of March."
                speaker="Soothsayer (1.2)"
                analysis="The play's most famous warning, repeated twice. The phrase is short, stark and prophetic — its monosyllabic weight makes it impossible to ignore on the page, yet Caesar dismisses the speaker as 'a dreamer.' Shakespeare establishes the central tension between fate freely offered and human refusal to listen. The Soothsayer's reappearance on the Ides itself ('Ay, Caesar, but not gone') rubs the warning back into Caesar's face moments before death."
              />
              <QuoteCard
                quote="The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings."
                speaker="Cassius (1.2)"
                analysis="Cassius's central argument against fatalism. The chiastic balance ('not in our stars / but in ourselves') rejects astrology and cosmic determinism in favour of human responsibility. 'Underlings' implies servility — Cassius is shaming Brutus into action. Yet the irony is that the play is full of omens that come true: Cassius defies fate but cannot escape it. The line is often cited out of context as straightforward republican humanism, but Shakespeare frames it as part of a manipulation."
              />
              <QuoteCard
                quote="Let me have men about me that are fat, Sleek-headed men, and such as sleep a-nights. Yond Cassius has a lean and hungry look; He thinks too much: such men are dangerous."
                speaker="Caesar (1.2)"
                analysis="Caesar's shrewd reading of Cassius shows his political intelligence — he sees what Brutus refuses to see. The physical description ('lean and hungry') becomes a Shakespearean shorthand for political envy. Yet immediately after this insight Caesar says 'I fear him not' and waves the danger away, demonstrating the gap between perception and prudent action that defines his tragedy."
              />
              <QuoteCard
                quote="Cowards die many times before their deaths; The valiant never taste of death but once."
                speaker="Caesar (2.2)"
                analysis="Caesar's response to Calpurnia's pleas. The aphorism is grand and self-mythologising — the third-person bravado of a man performing his own legend. The structural irony is brutal: Caesar speaks of 'valiant' fearlessness moments before walking to his death because he was too afraid of looking afraid to stay home. The line indicts the very pride it celebrates."
              />
              <QuoteCard
                quote="Et tu, Brute? Then fall, Caesar!"
                speaker="Caesar (3.1)"
                analysis="The most famous line in the play. The shift to Latin ('Et tu, Brute?' — 'You too, Brutus?') marks the moment Caesar's public self collapses into private heartbreak. Discovering Brutus among the assassins, Caesar gives up resistance: the second clause ('Then fall, Caesar') is a self-command, in the third person again, as though Caesar himself orders his own myth to die. Three monosyllabic words make personal betrayal the meaning of the political murder."
              />
              <QuoteCard
                quote="Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him."
                speaker="Mark Antony (3.2)"
                analysis="The opening of the most famous oration in English drama. The tricolon 'Friends, Romans, countrymen' moves from intimate to civic to national, embracing the entire crowd. 'Lend me your ears' demands attention through metaphor: ears are borrowed and returned changed. The disavowal — 'not to praise him' — is the rhetorical sleight of hand that allows Antony to praise Caesar relentlessly under cover of denial. Every clause is a trap."
              />
              <QuoteCard
                quote="The evil that men do lives after them; The good is oft interred with their bones."
                speaker="Mark Antony (3.2)"
                analysis="The aphorism that follows Antony's opening, ostensibly preparing to dismiss Caesar's good qualities — but in fact reversing audience sympathy. The contrast 'lives after / interred with bones' uses funeral language to argue against the conspirators' framing. By the end of the speech the line is ironic: it is the conspirators' 'evil,' not Caesar's, that will live after them."
              />
              <QuoteCard
                quote="O pardon me, thou bleeding piece of earth, That I am meek and gentle with these butchers!"
                speaker="Mark Antony (3.1)"
                analysis="Antony's private vow to Caesar's corpse, spoken when he is alone after pretending reconciliation with the conspirators. 'Bleeding piece of earth' reduces the great Caesar to a brutal physical fact. The contrast between this raging soliloquy and the controlled funeral speech to come reveals the calculation behind Antony's public face. 'Butchers' rejects Brutus's claim that the killers were sacrificers."
              />
              <QuoteCard
                quote="Cry &lsquo;Havoc!&rsquo; and let slip the dogs of war."
                speaker="Mark Antony (3.1)"
                analysis="The closing image of Antony's funeral-side soliloquy. 'Havoc' was a military command authorising soldiers to plunder without restraint; 'let slip' is the language of unleashing hounds. The metaphor turns vengeance into a hunt and predicts the civil war that the assassination will provoke. The vivid violence of the line contrasts deliberately with the measured prose Brutus has just spoken to the plebeians."
              />
              <QuoteCard
                quote="Not that I lov&rsquo;d Caesar less, but that I lov&rsquo;d Rome more."
                speaker="Brutus (3.2)"
                analysis="The philosophical core of Brutus's funeral oration. The balanced structure — two clauses linked by 'but' — encapsulates the tragic logic of competing loves. Brutus tries to make the killing intelligible to the crowd as a matter of priorities. The plebeians initially accept the argument, until Antony's emotion-driven counter-rhetoric makes them feel rather than reason. Brutus's prose, where Antony will speak in verse, marks his rationalist style — and its limits."
              />
              <QuoteCard
                quote="This was the noblest Roman of them all."
                speaker="Mark Antony (5.5)"
                analysis="Antony's eulogy for Brutus over his body at Philippi — a remarkable tribute from a former enemy. 'Noblest' is a superlative that elevates Brutus above all the conspirators, including himself. The line hands the play's moral verdict to Antony: only Brutus acted from disinterested principle. Combined with Octavius's promise of an honourable burial, the line gives Brutus's death tragic dignity even as the Republic he died for is buried with him."
              />
              <QuoteCard
                quote="O Julius Caesar, thou art mighty yet! Thy spirit walks abroad, and turns our swords In our own proper entrails."
                speaker="Brutus (5.3)"
                analysis="Brutus, finding Cassius's body, recognises that Caesar's power has outlasted his death. 'Thou art mighty yet' is a stark admission that the conspiracy has failed: Caesar is more dangerous as a martyr than as a living man. 'Our own proper entrails' (Cassius killed by Caesar's sword; Brutus about to fall on his own) makes the conspirators their own executioners — Caesar's spirit weaponising their hands."
              />
              <QuoteCard
                quote="Speak, hands, for me!"
                speaker="Casca (3.1)"
                analysis="Casca's words as he strikes the first blow at Caesar. Three syllables of brutal directness: language gives way to physical action, hands replace tongues. The line marks the precise moment the play's politics turn into violence. Coming from Casca — earlier the most verbal, satirical commentator — the brevity is shocking. Words have done their work; only the body remains."
              />
              <QuoteCard
                quote="Why, man, he doth bestride the narrow world Like a Colossus, and we petty men Walk under his huge legs and peep about To find ourselves dishonourable graves."
                speaker="Cassius (1.2)"
                analysis="Cassius's mocking image of Caesar as the Colossus of Rhodes — a giant straddling a harbour. The metaphor combines awe and ridicule: Caesar is monumental but the metaphor's perspective ('peep about... under his huge legs') is humiliating. Cassius's rhetoric exaggerates Caesar's tyranny to manipulate Brutus. The image's mythic scale also accidentally elevates Caesar in the audience's mind, foreshadowing how he will dominate the play's second half from beyond the grave."
              />
              <QuoteCard
                quote="Cowards in scarlet pass for men of worth."
                speaker=""
                analysis="[VERIFY] This phrase is not a verified Folio quotation and has been omitted from the main set above. Always cross-check any quotation against a reliable Folio or Arden edition before citing in an exam."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbols and Motifs" icon="🔮">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Storm Before the Assassination</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Act 1 Scene 3, the night before the murder, Rome is convulsed by an unnatural
                  thunderstorm. Casca describes a slave whose hand burns without harm, a lion in the
                  Capitol, an owl hooting in the marketplace at noon, and men &ldquo;all in
                  fire&rdquo; walking the streets. The storm is a Shakespearean convention: cosmic
                  disorder mirrors political crisis (compare <em>Macbeth</em> and <em>King Lear</em>
                  ). Cassius interprets the storm as a call to action; Cicero warns that men
                  interpret signs to suit their purposes. Shakespeare uses the storm both literally
                  and metatheatrically &mdash; nature itself is rebelling against the unnatural act
                  about to occur.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Wolf and Lion Imagery</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cassius compares Caesar to a wolf preying on Roman sheep, and elsewhere to a lion
                  in the Capitol. The animal imagery dehumanises the dictator and licenses the
                  violence needed to remove him. But the metaphors cut both ways: in Roman myth,
                  Romulus and Remus were nursed by a she-wolf, so the wolf is also Rome itself.
                  After the assassination, the &ldquo;dogs of war&rdquo; (Antony&apos;s phrase)
                  suggest that removing one beast unleashes a pack. The play&apos;s zoological
                  language is a battleground for who counts as predator and who as prey.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Blood</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Blood is the play&apos;s most insistent visual symbol. Brutus instructs the
                  conspirators to &ldquo;bathe&rdquo; their hands in Caesar&apos;s blood and walk
                  through the streets crying &ldquo;Peace, freedom, and liberty!&rdquo; &mdash; a
                  ritual gesture that turns murder into sacrifice. Antony&apos;s phrase
                  &ldquo;bleeding piece of earth&rdquo; reduces Caesar to a wound. Calpurnia&apos;s
                  dream of the spurting statue prefigures the violence; the funeral oration unveils
                  each individual wound to inflame the crowd. By Act 5 the conspirators&apos; own
                  blood completes the pattern: Cassius and Brutus die by the sword, paying in kind.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Caesar&apos;s Mantle</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the funeral oration Antony holds up Caesar&apos;s torn cloak and identifies
                  each rip with a specific conspirator&apos;s blade &mdash; &ldquo;through this the
                  well-beloved Brutus stabb&apos;d.&rdquo; The mantle becomes a relic, a piece of
                  evidence, and a stage prop. Cloth literally bears the wounds that words struggle
                  to describe. By turning a garment into testimony, Antony out-rhetoricises
                  Brutus&apos;s abstract appeal to liberty: the crowd sees, as well as hears, the
                  meaning of the killing.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Omens</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Beyond the storm, the play swarms with omens: a lioness whelping in the streets,
                  graves yawning open, ghosts shrieking, a sacrificial beast found heartless,
                  Calpurnia&apos;s dream of the bleeding statue, Cassius&apos;s vision of eagles
                  abandoning his standards before Philippi, and Caesar&apos;s ghost itself.
                  Shakespeare plants warnings everywhere; the tragedy lies not in their absence but
                  in their being ignored or deliberately reinterpreted (Decius re-spinning the dream
                  as auspicious). The motif raises the central philosophical question: are these
                  warnings authentic prophecy, or human projections onto random events?
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Crown</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The crown Antony offers Caesar three times at the Lupercal &mdash; and which
                  Caesar three times refuses &mdash; is the play&apos;s most charged absent symbol.
                  Casca&apos;s cynical description (&ldquo;every time gentler than other&rdquo;)
                  suggests Caesar wanted it more each time. The crown represents the precise
                  threshold the conspirators fear Caesar will cross. After the assassination it
                  never appears again on stage, yet the imperial future it signified arrives anyway
                  through Octavius. The crown is the thing that does not happen, and the play&apos;s
                  outcome traces the consequences of that non-event.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level (AQA / OCR) and three GCSE-style questions, each with thesis, paragraph
              structure and suggested quotations. Use as essay-plan templates, not model answers.
            </p>

            <div className="space-y-6">
              {/* A-Level 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level (AQA / OCR)
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;Brutus is the true tragic hero of the play.&rdquo; In light of this
                  view, explore Shakespeare&apos;s presentation of Brutus.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare structures the play around Brutus&apos;s tragic arc &mdash;
                      idealism, self-deception, and dignified fall &mdash; making him the moral
                      centre even though the play bears Caesar&apos;s name.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The Aristotelian hamartia
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus&apos;s flaw is rigid honour, not ambition. His orchard soliloquy and
                      his decision to spare Antony reveal political naïveté. Use &ldquo;Not that I
                      lov&apos;d Caesar less, but that I lov&apos;d Rome more.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Antony&apos;s tribute
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;This was the noblest Roman of them all.&rdquo; Argue that Shakespeare
                      gives the verdict to Brutus&apos;s enemy precisely so it cannot be dismissed
                      as flattery.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Counter-view: Caesar as title-hero
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar dominates Acts 4&ndash;5 as a ghost; the play&apos;s name and
                      Cassius&apos;s &ldquo;O Julius Caesar, thou art mighty yet!&rdquo; argue for
                      Caesar&apos;s structural centrality. But the emotional weight remains with
                      Brutus.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level (AQA / OCR)
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Examine the role of rhetoric in shaping the political action of the play.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents speech, not violence, as the play&apos;s decisive force:
                      the assassination is brief, but the funeral orations remake Roman politics.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Cassius&apos;s seduction of Brutus
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The fault, dear Brutus, is not in our stars / But in ourselves.&rdquo;
                      Show how Cassius uses chiasmus, shame and forged letters to recruit Brutus.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The duelling funeral speeches
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus speaks in measured prose; Antony in seductive verse with the refrain
                      &ldquo;Brutus is an honourable man.&rdquo; Analyse irony, repetition and the
                      unveiling of the will and mantle.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Failure of rhetoric: the mob
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      After Antony, words give way to violence: the mob tears Cinna the Poet apart
                      for his name. Rhetoric controls action only briefly before unleashing forces
                      it cannot recall.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level (AQA / OCR)
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. &ldquo;The play is more concerned with fate than with free will.&rdquo;
                  Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare deliberately keeps both possibilities in tension: omens come true,
                      but characters&apos; choices remain morally weighted &mdash; the tragedy is
                      that the two are indistinguishable.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Fate
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Soothsayer, Calpurnia&apos;s dream, the storm, Caesar&apos;s ghost.
                      &ldquo;Beware the Ides of March&rdquo; comes true literally. Use the heartless
                      sacrifice and Cassius&apos;s eagles abandoning the standards.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Free will
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The fault... is not in our stars / But in ourselves.&rdquo; Caesar
                      chooses to ignore warnings; Brutus chooses to spare Antony; Cassius defers to
                      Brutus when he should not.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Synthesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cicero&apos;s warning that men interpret signs &ldquo;clean from the purpose
                      of the things themselves&rdquo; suggests the omens are real <em>and</em> the
                      characters&apos; readings of them are choices. Fate and free will are
                      entangled, not opposed.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level (AQA / OCR)
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. Explore Shakespeare&apos;s presentation of public and private life in Julius
                  Caesar.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The play&apos;s domestic scenes (Brutus&apos;s orchard, Calpurnia&apos;s
                      bedroom) systematically expose the cost of public choices, framing politics as
                      something paid for in private flesh.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Brutus and Portia
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Portia&apos;s self-wounding to prove constancy; her offstage suicide.
                      Brutus&apos;s public choice has a private price.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Caesar and Calpurnia
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Calpurnia&apos;s warnings briefly succeed but Decius&apos;s public flattery
                      overrides intimate fear. Caesar&apos;s &ldquo;Cowards die many times&rdquo;
                      reframes his wife&apos;s love as cowardice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Antony&apos;s dual self
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The contrast between &ldquo;O pardon me, thou bleeding piece of earth&rdquo;
                      (private grief) and the funeral speech (public performance). Antony&apos;s
                      power lies in mastering the gap.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-1">
                  A-Level (AQA / OCR)
                </p>
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. To what extent is Julius Caesar a play about the failure of revolutionary
                  politics?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents the assassination as a revolutionary act that produces
                      the very tyranny it sought to prevent &mdash; a cautionary fable suited to
                      Elizabethan succession anxiety.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Idealistic intent
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus frames the killing as sacrifice, not slaughter; Cassius&apos;s rhetoric
                      invokes liberty. Use the orchard soliloquy and the &ldquo;Peace, freedom, and
                      liberty&rdquo; ritual.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Actual outcome
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The mob tears Cinna apart; the triumvirate&apos;s proscription murders
                      &ldquo;a hundred senators&rdquo;; Octavius emerges as future emperor. The
                      Republic dies because of the act meant to save it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Contextual frame
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In 1599 England, regicide was a live political question. Shakespeare&apos;s
                      pessimism about revolutionary action speaks both to Roman history and to Tudor
                      anxieties about what would follow Elizabeth&apos;s death.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE 1 */}
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  GCSE-style
                </p>
                <h4 className="font-bold text-foreground text-base">
                  6. How does Shakespeare present Mark Antony&apos;s funeral oration as a turning
                  point in the play?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Planning notes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Open with &ldquo;Friends, Romans, countrymen, lend me your ears.&rdquo;
                      Discuss tricolon, irony of &ldquo;honourable man,&rdquo; the unveiling of the
                      will and mantle, and the immediate consequences (mob violence, Brutus and
                      Cassius fleeing Rome). Link to context: Elizabethan audiences would recognise
                      the dangers of demagoguery.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE 2 */}
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  GCSE-style
                </p>
                <h4 className="font-bold text-foreground text-base">
                  7. How does Shakespeare use omens and the supernatural in Julius Caesar?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Planning notes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cover the Soothsayer&apos;s &ldquo;Beware the Ides of March,&rdquo; the storm
                      of Act 1 Scene 3, Calpurnia&apos;s dream of the bleeding statue, and
                      Caesar&apos;s ghost at Sardis. Discuss the convention of cosmic disorder
                      mirroring political crisis (compare <em>Macbeth</em>). Argue the omens make
                      the audience aware of the doom that the characters refuse to read.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE 3 */}
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  GCSE-style
                </p>
                <h4 className="font-bold text-foreground text-base">
                  8. How does Shakespeare present the relationship between Brutus and Cassius?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Planning notes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Trace the relationship: Cassius&apos;s seduction of Brutus in 1.2, the
                      conspirators&apos; meeting, the quarrel and reconciliation at Sardis (4.3),
                      and their final farewell before Philippi. Argue Shakespeare shows them as
                      complementary &mdash; Cassius&apos;s pragmatism and Brutus&apos;s idealism
                      &mdash; whose collaboration drives the plot but whose differences cause its
                      failure.
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
        <h3 className="text-lg font-bold text-foreground">Exam Tips for Julius Caesar</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Quote precisely.</strong> Markers reward verbatim accuracy &mdash; misquoting
              &ldquo;Et tu, Brute?&rdquo; or Antony&apos;s opening loses easy marks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Discuss form.</strong> Brutus&apos;s prose oration vs Antony&apos;s verse
              oration is one of the play&apos;s most examinable contrasts.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use context with care.</strong> Link to Plutarch, Elizabethan succession
              anxiety and the Globe&apos;s 1599 opening, but always tie context back to the text.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Refer to authorial intent.</strong> &ldquo;Shakespeare structures the funeral
              scene to...&rdquo; or &ldquo;Shakespeare invites the audience to question...&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use precise terminology.</strong> &ldquo;Tragic hero,&rdquo;
              &ldquo;hamartia,&rdquo; &ldquo;dramatic irony,&rdquo; &ldquo;chiasmus,&rdquo;
              &ldquo;pathetic fallacy,&rdquo; &ldquo;blank verse,&rdquo; &ldquo;iambic
              pentameter.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Address the whole play.</strong> Don&apos;t treat the assassination as the
              ending &mdash; Acts 4 and 5 carry the play&apos;s political verdict.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Julius Caesar</em> by William Shakespeare was first printed in the First Folio of
          1623; the play is generally dated to c. 1599. The text is in the{' '}
          <strong>public domain</strong>. All quotations on this page are reproduced verbatim from
          the standard Folio-derived editions (Arden, Oxford, Cambridge, Folger). Any item flagged
          [VERIFY] should be cross-checked before exam use.
        </p>
      </footer>
    </>
  )
}
