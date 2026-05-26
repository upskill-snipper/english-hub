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

export default function JuliusCaesarPage() {
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
            Shakespeare Tragedy
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
          Julius Caesar &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`William Shakespeare, c.1599`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your GCSE and A-Level English Literature exam. Act-by-act plot,
          character profiles, themes with evidence, key quotations with analysis, Roman context,
          rhetorical devices, structural analysis, and essay planning guidance.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">{tr(`Jump to section:`)}</p>
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
            'Grade 9 Points',
            'Practice Questions',
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
          <Section title={tr(`Act-by-Act Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act 1: The Conspiracy Begins
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Rome celebrates Caesar&apos;s triumphal return after defeating Pompey&apos;s sons.
                  The tribunes Flavius and Murellus rebuke the commoners for their fickle loyalty
                  and tear down decorations honouring Caesar. During the Feast of Lupercal, a
                  Soothsayer warns Caesar to &ldquo;beware the Ides of March,&rdquo; but Caesar
                  dismisses him as &ldquo;a dreamer.&rdquo; Cassius begins working on Brutus,
                  planting seeds of resentment against Caesar&apos;s growing power. Casca reports
                  that Mark Antony offered Caesar a crown three times, and three times he refused it
                  &mdash; though Cassius interprets this as performative ambition. A violent storm
                  rages through Rome, accompanied by supernatural omens, which Cassius reads as
                  nature&apos;s protest against tyranny. By the end of Act 1, the conspirators have
                  agreed to recruit Brutus, knowing his moral reputation will legitimise their plot.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The tribunes&apos; rebuke of the commoners &mdash; political fickleness
                      exposed
                    </li>
                    <li>
                      &bull; The Soothsayer&apos;s warning &mdash; &ldquo;Beware the Ides of
                      March&rdquo;
                    </li>
                    <li>&bull; Cassius seduces Brutus through flattery and fabricated letters</li>
                    <li>&bull; The thrice-refused crown &mdash; Antony&apos;s public theatre</li>
                    <li>&bull; The supernatural storm &mdash; cosmic disorder foreshadowing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act 2: The Decision and the Plot
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Brutus, alone in his orchard, wrestles with his conscience. He concludes that
                  Caesar must die not for what he has done but for what he might become &mdash; a
                  pre-emptive killing to protect the Republic. The conspirators meet at
                  Brutus&apos;s house at night. Brutus refuses to allow Cicero to join (claiming he
                  will not follow others) and rejects Cassius&apos;s suggestion that Antony also be
                  killed, insisting they are &ldquo;sacrificers, but not butchers.&rdquo; Portia,
                  Brutus&apos;s wife, begs him to share his troubles, demonstrating her stoic
                  resolve by wounding her own thigh. Meanwhile, Calpurnia has nightmares of
                  Caesar&apos;s statue running with blood and pleads with him to stay home. Caesar
                  agrees, but Decius Brutus reinterprets the dream as a positive omen and persuades
                  him to attend the Senate, mocking him for being ruled by a woman&apos;s fears.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Brutus&apos;s soliloquy &mdash; rationalising assassination</li>
                    <li>&bull; The midnight conspiracy meeting &mdash; secrecy and oath-refusal</li>
                    <li>&bull; Portia&apos;s self-wounding &mdash; demanding emotional honesty</li>
                    <li>&bull; Calpurnia&apos;s prophetic dream &mdash; bleeding statue</li>
                    <li>
                      &bull; Decius reinterprets the dream &mdash; manipulation through flattery
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act 3: The Assassination and Its Aftermath
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At the Senate, Caesar dismisses the Soothsayer&apos;s warning (&ldquo;The Ides of
                  March are come&rdquo; / &ldquo;Ay, Caesar; but not gone&rdquo;) and refuses
                  Metellus Cimber&apos;s petition for his banished brother. The conspirators
                  surround him; Casca strikes first, and the others follow. Caesar, seeing Brutus
                  among them, utters &ldquo;Et tu, Brute? Then fall, Caesar!&rdquo; and dies. The
                  conspirators bathe their hands in his blood. Antony arrives, feigning friendship
                  with the conspirators, but Brutus &mdash; against Cassius&apos;s warning &mdash;
                  permits him to speak at Caesar&apos;s funeral. Brutus addresses the crowd in
                  measured prose, justifying the killing as patriotic duty: he loved Rome more than
                  Caesar. The crowd is convinced. Then Antony delivers his masterpiece of rhetoric
                  &mdash; &ldquo;Friends, Romans, countrymen, lend me your ears&rdquo; &mdash; using
                  verse, irony, and Caesar&apos;s will to turn the crowd into a vengeful mob. Riots
                  erupt. The innocent poet Cinna is torn apart simply because he shares the
                  conspirator&apos;s name. The conspirators flee Rome.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The assassination &mdash; &ldquo;Et tu, Brute? Then fall,
                      Caesar!&rdquo;
                    </li>
                    <li>&bull; The bloody handwashing &mdash; ritual sacrifice imagery</li>
                    <li>&bull; Brutus&apos;s prose oration &mdash; logic and patriotism</li>
                    <li>&bull; Antony&apos;s funeral oration &mdash; rhetorical mastery</li>
                    <li>&bull; Cinna the Poet murdered &mdash; mob irrationality</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Act 4: Civil War and the Quarrel
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In Rome, the Second Triumvirate &mdash; Antony, Octavius, and Lepidus &mdash;
                  coldly draw up a list of political enemies to be executed. Antony privately
                  dismisses Lepidus as a &ldquo;slight unmeritable man,&rdquo; foreshadowing later
                  betrayals among the victors. At Sardis, Brutus and Cassius quarrel bitterly.
                  Cassius accuses Brutus of ingratitude; Brutus accuses Cassius of taking bribes and
                  condemning honest men. They reconcile, but Brutus then reveals that Portia has
                  died, having swallowed fire in despair at his absence and Antony&apos;s growing
                  power. They debate strategy: Cassius argues to wait at Sardis and let the enemy
                  come to them; Brutus insists on marching to Philippi. As ever, Brutus&apos;s view
                  prevails. Alone that night, Brutus is visited by the ghost of Caesar, who promises
                  to meet him &ldquo;at Philippi.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The Triumvirate&apos;s proscription list &mdash; cold political
                      pragmatism
                    </li>
                    <li>&bull; Antony&apos;s contempt for Lepidus &mdash; new tyranny emerging</li>
                    <li>&bull; The Brutus/Cassius quarrel &mdash; cracks in the conspiracy</li>
                    <li>&bull; Portia&apos;s death &mdash; Brutus&apos;s stoic restraint</li>
                    <li>&bull; The ghost of Caesar &mdash; supernatural vengeance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Act 5: Philippi and the Tragic Ending
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At Philippi, the two armies parley before battle. Antony and Octavius taunt the
                  conspirators. The first encounter goes well for Brutus&apos;s wing, which routs
                  Octavius&apos;s forces, but Cassius&apos;s wing is overwhelmed by Antony. Cassius,
                  mistakenly believing his friend Titinius has been captured, asks his servant
                  Pindarus to kill him with the same sword he used on Caesar. Titinius, finding
                  Cassius dead, takes his own life. Brutus laments the loss of his friends and sees
                  that the cause is doomed. In the second battle, Brutus&apos;s forces are defeated.
                  Refusing to be captured and paraded through Rome, Brutus runs onto his own sword,
                  held by his servant Strato. Antony delivers Brutus&apos;s eulogy, calling him
                  &ldquo;the noblest Roman of them all,&rdquo; acknowledging that Brutus alone acted
                  from patriotic conviction rather than envy. Octavius offers Brutus an honourable
                  burial, and the play ends with the new order consolidated under the future
                  Augustus.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The pre-battle parley &mdash; rhetoric replaced by force</li>
                    <li>&bull; Cassius&apos;s suicide on his birthday &mdash; tragic irony</li>
                    <li>&bull; Titinius&apos;s death &mdash; loyalty to the end</li>
                    <li>&bull; Brutus&apos;s suicide &mdash; choosing honour over capture</li>
                    <li>
                      &bull; Antony&apos;s eulogy &mdash; &ldquo;the noblest Roman of them
                      all&rdquo;
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
                name="Julius Caesar"
                description="The play's title character, paradoxically dies at the start of Act 3 yet dominates the entire drama. Caesar is portrayed ambiguously: a victorious general, a politically astute leader, but also physically frail (deaf in one ear, epileptic, infirm), superstitious, and increasingly imperial in self-reference. He speaks of himself in the third person ('Caesar shall forth') as if already a monument. Shakespeare leaves it deliberately unclear whether his fall is tragic loss or necessary corrective. After his death, Caesar's spirit walks abroad, more powerful in death than in life: his ghost haunts Brutus, his will turns the crowd, and the new Caesar (Octavius) rises in his name."
              />
              <CharacterCard
                name="Marcus Brutus"
                description="The play's true tragic hero. Descended from Lucius Junius Brutus, who expelled the last Roman king, he carries an inherited duty to defend the Republic. He is honourable, philosophical, and stoic, but fatally idealistic. He joins the conspiracy from genuine patriotic conviction yet makes three catastrophic decisions: refusing to kill Antony, allowing Antony to speak at the funeral, and insisting on marching to Philippi. His tragic flaw is his belief that good motives produce good outcomes - he assumes others share his integrity. His self-conception as Rome's saviour blinds him to political reality. Antony's final tribute confirms that he alone among the conspirators acted 'in a general honest thought / And common good to all.'"
              />
              <CharacterCard
                name="Caius Cassius"
                description="The conspiracy's mastermind and Brutus's foil. Where Brutus is idealistic, Cassius is pragmatic, perceptive, and emotionally volatile. Caesar himself diagnoses him: 'He thinks too much: such men are dangerous.' Cassius's motives are mixed - genuine republicanism intertwined with personal envy of Caesar. He is a brilliant judge of character (he reads Antony correctly when Brutus does not) but defers to Brutus on every key strategic decision, with disastrous results. His suicide on his birthday, killed by his own sword (the one used on Caesar), is poetically just. Beneath his cynicism lies deep loyalty and even tenderness, especially in his reconciliation with Brutus."
              />
              <CharacterCard
                name="Mark Antony"
                description="A loyal friend to Caesar who transforms into a ruthless political operator. In Acts 1 and 2 he is barely visible; underestimated, dismissed by Brutus as a mere 'limb of Caesar.' This proves catastrophically wrong. His funeral oration is one of the greatest set pieces of persuasive rhetoric in English literature, deploying irony, pathos, ocular proof (Caesar's wounds, his will), and skilled crowd-control to incite rebellion. By Act 4 he has become a cold political operator, pragmatically marking enemies for death and dismissing Lepidus as a mere 'ass' to be used. His final tribute to Brutus shows magnanimity, but also the political shrewdness of co-opting his enemy's reputation."
              />
              <CharacterCard
                name="Octavius Caesar"
                description="Caesar's adopted heir and future Emperor Augustus, though he appears only in Acts 4 and 5. He is reserved, calculating, and quietly assertive. He clashes with Antony from his first appearance - refusing to take Antony's side of the field at Philippi - foreshadowing the future war between them (dramatised in Antony and Cleopatra). Octavius represents the new political order: cold, efficient, imperial. His final speech offering Brutus an honourable burial demonstrates his political shrewdness in claiming continuity with Roman virtue while founding the Empire that ends the Republic."
              />
              <CharacterCard
                name="Calpurnia"
                description="Caesar's wife, whose prophetic dream of his statue running with blood proves accurate. She represents private wisdom set against public ambition. Her pleading with Caesar to stay home is genuine love and intuition; he initially yields ('Mark Antony shall say I am not well, / And, for thy humour, I will stay at home') but then submits to Decius's manipulative reinterpretation. Her role is structurally crucial: she provides the moment where the assassination might have been prevented. Shakespeare emphasises her childlessness ('our elders say, / The barren, touched in this holy chase, / Shake off their sterile curse'), tying her personal anxieties to questions of legacy."
              />
              <CharacterCard
                name="Portia"
                description="Brutus's wife, daughter of the famous Stoic Cato. She demands to share Brutus's burdens, demonstrating her resolve by inflicting a wound on her own thigh: 'I have made strong proof of my constancy, / Giving myself a voluntary wound / Here, in the thigh.' She represents the ideal of Roman wifehood and Stoic philosophy. Her tragic death - she swallowed fire (likely hot coals, an extreme suicide) in grief and madness over Brutus's exile and Antony's victories - is reported with characteristic Brutus restraint. She personifies the cost of Brutus's political choices on those who love him."
              />
              <CharacterCard
                name="Casca"
                description="A blunt, sardonic conspirator who narrates the off-stage events of Act 1: Caesar's thrice-refused crown, his epileptic fit, and Cicero's Greek speech. His prose narration is darkly comic ('it was Greek to me' - the origin of the modern phrase). He is the first to strike Caesar in the assassination ('Speak, hands, for me!'). His readiness to act despite his cynicism makes him a useful conspirator. He represents the witty observer who acts decisively when others hesitate."
              />
              <CharacterCard
                name="Cicero"
                description="The famous Roman orator and senator, present at minor moments. The conspirators consider recruiting him but Brutus rejects the idea, claiming Cicero 'will never follow any thing / That other men begin.' His brief on-stage appearance during the storm shows him calm and rational. He is later executed in the Triumvirate's proscription, mentioned in Act 4. His absence from the conspiracy - a loss of moral authority - is a crucial Brutus error: had Cicero spoken at the funeral, Antony's rhetoric might not have prevailed."
              />
              <CharacterCard
                name="The Soothsayer"
                description="A nameless prophet who delivers the play's most famous warning: 'Beware the Ides of March.' Caesar dismisses him as 'a dreamer.' The Soothsayer reappears at the start of Act 3, where Caesar mockingly tells him 'The Ides of March are come' - only to receive the chilling reply 'Ay, Caesar; but not gone.' He represents the supernatural and prophetic forces that surround the play, whose warnings are clear but always ignored. Like Calpurnia's dream and the omens of Act 1, he embodies the play's central question: are men ruled by fate, or by their own choices?"
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Honour vs Ambition`)}
                description="The central moral conflict of the play. Brutus values honour above all and is celebrated for it; Caesar is killed for ambition. Yet Shakespeare problematises both. Brutus's honour leads him to participate in regicide; Caesar's 'ambition' may be no more than legitimate political success. Antony's ironic refrain in his oration - 'Brutus is an honourable man' - uses the word 'honourable' so often that it becomes hollow, exposing how moral language can be weaponised. The play asks whether honour without political wisdom is itself a kind of vanity, and whether ambition, properly judged, is wickedness or merely human."
              />
              <ThemeCard
                title={tr(`Fate vs Free Will`)}
                description="The play is saturated with omens, prophecies, and dreams - the Soothsayer, Calpurnia's dream, the bleeding statue, the storm, Caesar's ghost. Yet every prophecy is dismissed or ignored, and characters consistently believe they are choosing their own path. Cassius declares 'The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings,' arguing for human agency - yet the play repeatedly shows that the warnings are always right. Shakespeare leaves the question unresolved: do men shape history, or does fate shape them? The very fact that Brutus 'meets' Caesar's ghost at Philippi suggests forces beyond individual will."
              />
              <ThemeCard
                title={tr(`Public vs Private Self`)}
                description="Every major character has a public mask and a private reality. Caesar projects strength but is physically infirm and superstitious. Brutus appears the picture of stoic calm yet wrestles with sleepless agony in his orchard. Cassius performs republican zeal but is partly motivated by personal envy. Antony pretends to befriend the conspirators while plotting their destruction. Even Portia, demanding Brutus reveal himself privately, splits between her stoic public face and her hidden 'voluntary wound.' Shakespeare explores how public roles distort or destroy authentic selves - particularly in a city where political persona is everything."
              />
              <ThemeCard
                title={tr(`Rhetoric and Persuasion`)}
                description="Julius Caesar is, above all, a play about words. The Republic is founded on debate, and the play stages successive scenes of persuasion: Cassius working on Brutus, Decius reinterpreting Calpurnia's dream, Brutus addressing the crowd, Antony's funeral oration, Cassius and Brutus quarrelling. The stark contrast between Brutus's rational, balanced prose ('Romans, countrymen, and lovers') and Antony's emotive, ironic verse ('Friends, Romans, countrymen, lend me your ears') is the play's rhetorical heart. Antony's victory shows how passion outperforms reason in mass politics - a deeply uncomfortable lesson about democracy."
              />
              <ThemeCard
                title={tr(`Power and Tyranny`)}
                description="The play stages a republic poised between democracy and dictatorship. Caesar's growing power threatens the Republic, but his removal does not restore liberty - it produces civil war and a new dictatorship under the Triumvirate. Shakespeare shows how the cycle of power perpetuates itself: Caesar's heirs become more absolute than Caesar. The killing intended to prevent tyranny accelerates it. This pessimistic political vision asks whether power can ever be checked by violence or whether assassination merely rotates the tyrants."
              />
              <ThemeCard
                title={tr(`Friendship and Betrayal`)}
                description="The play's most haunting line - 'Et tu, Brute?' - expresses the wound of betrayal by a trusted friend. Brutus is drawn into the conspiracy partly through Cassius's manipulation of his self-image as Caesar's friend who must rise above private affection for the public good. Antony's friendship for Caesar drives his vengeance, but he then forms and abandons political friendships pragmatically. The Brutus-Cassius reconciliation shows friendship's redemptive power even amid political failure. Shakespeare explores how political action corrodes private bonds, and how the loss of friendship can be more devastating than the loss of power."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              15 verbatim quotations organised by speaker and theme. All quotations match the First
              Folio (1623) text.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Beware the Ides of March."
                speaker="Soothsayer (1.2)"
                analysis="The play's most famous warning. The imperative 'Beware' is direct and prophetic; the specific date ('Ides of March' = 15 March) gives it precision. Caesar's dismissal of this clear warning establishes his pattern of ignoring private wisdom in pursuit of public glory. The phrase has entered English idiom precisely because it dramatises how easily such warnings are mocked even when they prove true."
              />
              <QuoteCard
                quote="The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings."
                speaker="Cassius (1.2)"
                analysis="Cassius's central argument for human agency. He rejects astrological determinism (the 'stars') in favour of personal responsibility, urging Brutus to act. The address 'dear Brutus' is intimate and persuasive. Yet the speech is ironic in context: the play repeatedly shows that the 'stars' (omens, prophecies) are always right. Cassius advocates free will to recruit Brutus into a conspiracy that will ultimately be defeated by what he denies - fate."
              />
              <QuoteCard
                quote="Let me have men about me that are fat; / Sleek-headed men, and such as sleep o' nights: / Yond Cassius has a lean and hungry look; / He thinks too much: such men are dangerous."
                speaker="Caesar (1.2)"
                analysis="Caesar's character-reading of Cassius is acute. The contrast between 'fat / Sleek-headed' contented men and 'lean and hungry' restless men maps physical appearance onto political danger. 'He thinks too much' is paradoxical - Caesar fears intellectual men more than aggressive ones. The judgement is correct but does Caesar no good: he names the danger and yet does nothing about it. The speech reveals both his political shrewdness and his fatal inaction."
              />
              <QuoteCard
                quote="Cowards die many times before their deaths; / The valiant never taste of death but once."
                speaker="Caesar (2.2)"
                analysis="Caesar's reply to Calpurnia's pleading. The aphorism contrasts cowardice (repeated imaginary deaths through fear) with valour (one true death). 'Taste' makes death sensory. The speech is rhetorically magnificent but dramatically ironic: Caesar speaks of his own valour just before walking to his actual death. The pattern of self-mythologising rhetoric - speaking of himself as 'Caesar,' as if already a statue - reaches its peak here."
              />
              <QuoteCard
                quote="Of all the wonders that I yet have heard, / It seems to me most strange that men should fear; / Seeing that death, a necessary end, / Will come when it will come."
                speaker="Caesar (2.2)"
                analysis="Caesar's stoic resignation to mortality immediately before the assassination. The fatalism ('death, a necessary end, / Will come when it will come') contradicts his earlier bravado. The simplicity of 'Will come when it will come' - with its insistent repetition - gives the line a quiet inevitability. Yet Caesar still chooses to walk into the Senate, suggesting fatalism is no defence against political action."
              />
              <QuoteCard
                quote="Et tu, Brute? Then fall, Caesar!"
                speaker="Caesar (3.1)"
                analysis="Caesar's dying words and one of Shakespeare's most famous lines. The Latin 'Et tu, Brute?' (And you, Brutus?) marks the moment betrayal becomes unbearable. The shift from question to imperative ('Then fall, Caesar!') is striking: Caesar speaks of himself in the third person, as a public monument toppling. The line suggests that what kills Caesar is not the daggers but the discovery that Brutus is among them - betrayal by a trusted friend ends his will to live."
              />
              <QuoteCard
                quote="Let's carve him as a dish fit for the gods, / Not hew him as a carcass fit for hounds."
                speaker="Brutus (2.1)"
                analysis="Brutus's vision of the assassination as religious sacrifice. The contrast between 'carve' (precise, ritualistic) and 'hew' (crude, butcher-like) elevates murder into ceremony. 'A dish fit for the gods' frames Caesar's death as sacred offering. The metaphor reveals Brutus's self-deception: he believes he can give violence a moral form. His insistence on this aesthetic is fundamental to his tragedy - he confuses good intention with good outcome."
              />
              <QuoteCard
                quote="Friends, Romans, countrymen, lend me your ears; / I come to bury Caesar, not to praise him."
                speaker="Antony (3.2)"
                analysis="The opening of Antony's funeral oration. The tricolon 'Friends, Romans, countrymen' moves from intimate to civic to imperial, embracing every listener. 'Lend me your ears' is a polite metaphor that becomes ironic - he will give back far more than they bargained for. The disclaimer 'not to praise him' is the masterstroke: by appearing to abide by Brutus's permission, Antony lulls the conspirators while secretly intending the opposite. The whole oration is structured around this technique of saying-by-denying."
              />
              <QuoteCard
                quote="The evil that men do lives after them; / The good is oft interred with their bones."
                speaker="Antony (3.2)"
                analysis="A general philosophical opening that sounds politically neutral but loads the case in Caesar's favour. By framing Brutus's narrative as an 'evil' that will be remembered, while suggesting Caesar's 'good' will be unjustly buried, Antony preemptively reverses the moral coding. The chiasmus (evil/good, lives/interred) gives the line memorable balance. He establishes a frame where his entire speech is read as restoring suppressed truth."
              />
              <QuoteCard
                quote="For Brutus is an honourable man; / So are they all, all honourable men."
                speaker="Antony (3.2)"
                analysis="The repeated refrain that destroys Brutus's argument through irony. With each repetition the word 'honourable' becomes hollower, until it sounds like its opposite. Antony never directly contradicts Brutus - he repeats Brutus's claim until it collapses under its own weight. The technique demonstrates how rhetoric can reverse meaning without explicit denial: he praises 'honour' while emptying the word of force, turning Brutus's strongest claim into his weakest."
              />
              <QuoteCard
                quote="O judgement! thou art fled to brutish beasts, / And men have lost their reason."
                speaker="Antony (3.2)"
                analysis="Antony's apparent lament at the crowd's loss of judgement - ironic given that he himself has just provoked it. The pun on 'brutish' may glance at Brutus, suggesting the conspirator's claim to reason is itself bestial. The line is performed as overcome emotion (he pauses to let the crowd react) but is calculated to push them further. Shakespeare exposes how skilled rhetoric can disguise manipulation as concern."
              />
              <QuoteCard
                quote="This was the noblest Roman of them all: / All the conspirators save only he / Did that they did in envy of great Caesar; / He only, in a general honest thought / And common good to all, made one of them."
                speaker="Antony (5.5)"
                analysis="Antony's eulogy for Brutus, his former enemy. The superlative 'noblest' grants Brutus the highest Roman virtue. The careful distinction between Brutus's 'general honest thought' and the others' 'envy' acknowledges what Antony refused to admit during the funeral oration: Brutus alone acted from principle. This concession is also politically shrewd - by claiming Brutus's nobility, Antony co-opts his moral capital for the new regime. Shakespeare allows the tragic protagonist a posthumous restoration even as his cause is destroyed."
              />
              <QuoteCard
                quote="There is a tide in the affairs of men, / Which, taken at the flood, leads on to fortune; / Omitted, all the voyage of their life / Is bound in shallows and in miseries."
                speaker="Brutus (4.3)"
                analysis="Brutus's argument for marching to Philippi. The extended metaphor of tides and voyages presents action as seizing a fleeting opportunity. The line is rhetorically beautiful but strategically wrong - Cassius is right to wait. The irony is that Brutus, who prides himself on reason, is here making a poetic rather than practical case, and his judgement leads to defeat. The aphorism has become proverbial precisely because it captures a universal temptation: to mistake eloquence for wisdom."
              />
              <QuoteCard
                quote="O, pardon me, thou bleeding piece of earth, / That I am meek and gentle with these butchers!"
                speaker="Antony (3.1)"
                analysis="Antony's private soliloquy over Caesar's body, immediately after pretending friendship with the conspirators. 'Bleeding piece of earth' is a powerful synecdoche - reducing Caesar from mighty leader to mere earthly matter. 'Butchers' contradicts Brutus's earlier 'sacrificers' framing, exposing the conspirators' rhetorical self-deception. The honesty of soliloquy reveals Antony's true assessment beneath his diplomatic mask, and prepares the audience for the rhetorical revolution coming at the funeral."
              />
              <QuoteCard
                quote="Caesar, now be still: / I kill'd not thee with half so good a will."
                speaker="Brutus (5.5)"
                analysis="Brutus's words as he runs onto his own sword. The address to Caesar's spirit acknowledges what the play has dramatised: that Caesar's ghost has won. 'Now be still' suggests a haunting that only Brutus's death can quiet. The chilling honesty of 'half so good a will' admits that he kills himself more willingly than he killed Caesar - an extraordinary confession that the assassination was reluctant duty while suicide is welcome release. The lines complete the moral arc: Brutus accepts that he must pay with his own life for the life he took."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🩸">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Storm</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The night before the assassination, a violent storm rages through Rome. Casca
                  describes marvels: a slave whose hand burned without pain, a lion in the Capitol,
                  an owl shrieking at noon, men on fire walking the streets. Cicero rationalises
                  these as natural phenomena; Cassius interprets them as nature&apos;s protest at
                  Caesar&apos;s tyranny. The storm is Shakespeare&apos;s standard symbol for cosmic
                  disorder, indicating that the political realm has become unnatural. It links
                  Julius Caesar to the storms of Macbeth, King Lear, and The Tempest. The
                  supernatural disturbances signal that the killing of a head of state ruptures the
                  natural order itself.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Wolf and Animal Imagery`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cassius uses the metaphor of Caesar as a wolf preying on Roman sheep. Animal
                  imagery pervades the play: lions, owls, hounds, serpents, kites. The Lupercalia
                  (literally &ldquo;wolf festival&rdquo;) frames the opening, evoking Rome&apos;s
                  mythical origins with Romulus and Remus suckled by a she-wolf. By extending wolf
                  imagery to Caesar, Shakespeare casts him as both predator and founder, the dual
                  nature of Roman power. The animal field also suggests degeneration: civic
                  political life reduced to a food-chain of predators and prey.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Blood</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Blood is the play&apos;s most insistent symbol. Calpurnia dreams of Caesar&apos;s
                  statue running with blood. Brutus instructs the conspirators to bathe their hands
                  in Caesar&apos;s blood and walk to the marketplace, transforming murder into
                  ritual. Antony pretends to shake those bloody hands, then weeps over Caesar&apos;s
                  &ldquo;bleeding piece of earth.&rdquo; In the funeral oration he displays
                  Caesar&apos;s mantle and wounds as ocular proof. Blood signifies both sacred
                  sacrifice (Brutus&apos;s framing) and desecration (Antony&apos;s framing) &mdash;
                  the same liquid carrying opposite meanings depending on the rhetoric applied. The
                  play asks: who controls the meaning of blood?
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Caesar&apos;s Mantle`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The bloodied cloak Caesar wore at the assassination becomes Antony&apos;s most
                  powerful prop. He displays it to the crowd, pointing to specific tears made by
                  specific conspirators, narrating each blow. The mantle materialises Caesar&apos;s
                  body &mdash; making the absent victim physically present. Antony exploits the
                  Roman context that the cloak Caesar wore the day of his triumph over the Nervii is
                  also the cloak in which he died, layering victorious triumph with brutal betrayal.
                  The mantle is a synecdoche for the body, and through it the dead Caesar speaks
                  louder than any living orator.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Omens and Prophecies`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play is dense with portents: the Soothsayer&apos;s warning, the lioness
                  whelping in the streets, graves yielding their dead, blood drizzling on the
                  Capitol, the augurers&apos; failure to find a heart in the sacrificial beast,
                  Calpurnia&apos;s dream, Caesar&apos;s ghost. Every prophecy proves accurate; every
                  prophecy is dismissed by its hearer. Shakespeare uses omens to create the central
                  paradox of the play: warnings are clearly visible yet politically inert. They
                  point to a moral order beyond human comprehension, one that men ignore at their
                  cost. They are also dramatic devices that build the audience&apos;s awareness of
                  doom while characters remain blind.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Fire</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fire imagery threads the play: the slave&apos;s burning hand, men aflame in the
                  storm, the funeral pyres for Caesar (where the rioters carry brands),
                  Portia&apos;s death by swallowing fire. Fire suggests passion, destruction, and
                  the fury of mob emotion that Antony unleashes. The literal funeral pyres become
                  the figurative fires of rebellion. Portia&apos;s extreme suicide returns the
                  symbol to the private sphere, showing how political conflagration consumes
                  domestic life. Fire is at once Promethean energy and apocalyptic destruction, the
                  doubleness of all political action.
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
                <h4 className="font-bold text-primary">44 BC: The End of the Roman Republic</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play dramatises events of February to October 44 BC and the battles of
                  Philippi in 42 BC. Julius Caesar had defeated Pompey and his sons in the civil
                  war, returning to Rome as virtual dictator. He had been declared &ldquo;dictator
                  perpetuo&rdquo; (dictator for life). The Senate &mdash; nominally the governing
                  body of the Republic &mdash; feared that he would accept the title of king (rex),
                  which Romans had hated since the expulsion of Tarquinius Superbus in 509 BC. The
                  conspirators saw themselves as defenders of the 500-year-old Republic against
                  incipient monarchy. Their failure ushered in the Empire under Octavian (Augustus).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Plutarch&apos;s Lives via North&apos;s 1579 Translation
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s primary source was Sir Thomas North&apos;s English translation
                  of Plutarch&apos;s <em>{tr(`Parallel Lives`)}</em>, published in 1579 as{' '}
                  <em>{tr(`The Lives of the Noble Grecians and Romans`)}</em>. North translated from
                  Jacques Amyot&apos;s French version rather than directly from the Greek.
                  Shakespeare drew especially on the lives of Caesar, Brutus, and Antony, often
                  following North&apos;s phrasing closely. Some lines from the play are nearly
                  verbatim from North. Plutarch&apos;s moralistic biographical method &mdash;
                  comparing pairs of Greek and Roman figures to draw ethical lessons &mdash; shaped
                  Shakespeare&apos;s tendency to weigh Caesar and Brutus as moral types rather than
                  purely historical figures.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Elizabethan Succession Anxieties`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  When Shakespeare wrote the play around 1599, Queen Elizabeth I was 66 years old,
                  childless, and refused to name a successor. England feared civil war on her death.
                  The play&apos;s questions &mdash; what to do with an over-mighty ruler, when (if
                  ever) is political assassination justified, how does power transfer peacefully
                  &mdash; were not antiquarian but urgent. Caesar&apos;s death produced civil war
                  and a new dictatorship; Elizabethan audiences would have found the warning highly
                  contemporary. The Earl of Essex&apos;s rebellion in 1601 (against Elizabeth) and
                  the famous use of Shakespeare&apos;s <em>{tr(`Richard II`)}</em> by his supporters
                  confirm how directly Elizabethan theatre engaged with succession politics.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">c.1599 and the Opening of the Globe</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Julius Caesar is widely thought to be one of the first plays performed at the new
                  Globe Theatre, which opened in 1599 on the south bank of the Thames. Thomas
                  Platter, a Swiss tourist, recorded seeing a tragedy of Julius Caesar at a London
                  playhouse on 21 September 1599 &mdash; very likely Shakespeare&apos;s play at the
                  Globe. The Globe&apos;s features (large open-air arena, populist groundlings, no
                  scenery) shaped the play&apos;s rhetorical style: the funeral oration scene
                  depends on the actor commanding a real, noisy crowd. The play&apos;s focus on
                  public speech and crowd manipulation reflects the new theatre&apos;s scale and
                  audience.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Tudor Republicanism and the &ldquo;Brutus Tradition&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The historical Brutus traced his lineage to Lucius Junius Brutus, who expelled
                  Tarquinius Superbus and founded the Republic in 509 BC. This ancestral burden of
                  defending liberty against tyranny shaped his self-image. The Renaissance recovered
                  Roman republicanism as a political tradition, and figures such as Niccol&ograve;
                  Machiavelli and Erasmus had recently engaged with it. Tudor political thought was
                  ambivalent: official ideology defended monarchy and the divine right of kings, yet
                  humanist scholarship celebrated republican virtue. Shakespeare&apos;s Brutus
                  embodies this tension &mdash; revered for principle, doomed for naivety.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Stoicism and Classical Philosophy`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Brutus and Portia are explicitly Stoics. Stoicism taught that virtue is the only
                  good and that the wise man should remain calm in the face of fortune, illness, and
                  death &mdash; even welcoming suicide as the rational response to dishonour. Cato,
                  Portia&apos;s father, was the most famous Stoic of the late Republic, killing
                  himself rather than submit to Caesar at Utica in 46 BC. Brutus&apos;s suppression
                  of grief at Portia&apos;s death and his composed suicide reflect Stoic ideals.
                  Shakespeare treats Stoicism with a mixture of admiration and irony: it produces
                  nobility but also blindness to the emotional and political reality around it.
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
                <h4 className="font-bold text-foreground">
                  Five-Act Structure with Mid-Play Climax
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Unusually, the title character dies at the end of Act 3, scene 1 &mdash; almost
                  exactly the structural midpoint. This challenges Aristotelian convention. The play
                  is really two halves: the first three acts build to the assassination; the last
                  two trace its consequences. This bipartite shape reflects the play&apos;s central
                  question &mdash; what comes after the killing? &mdash; and dramatises how
                  political violence does not produce the resolution its perpetrators imagine.
                  Caesar&apos;s body lies on the stage at the centre of the play, around which the
                  entire structure pivots.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Prose vs Verse`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare&apos;s use of verse and prose is meaningful throughout. Aristocrats
                  speak in blank verse; the plebeians and the Cobbler in prose. Crucially,
                  Brutus&apos;s funeral oration is delivered in measured, balanced prose &mdash; a
                  reasoned, philosophical appeal &mdash; while Antony&apos;s reply is in passionate
                  iambic pentameter. The shift from prose to verse signals the shift from
                  rationality to emotion, and Antony&apos;s rhetorical superiority is partly
                  metrical: his lines have momentum, music, and flow that Brutus&apos;s controlled
                  cadences cannot match.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Soliloquy and Public Speech`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play balances private soliloquy (Brutus in the orchard, Antony alone over the
                  body, Cassius&apos;s aside about Brutus&apos;s &ldquo;honourable metal&rdquo;)
                  with grand public oratory (the funeral orations, the pre-battle parley). The
                  contrast between private deliberation and public performance is itself a theme.
                  Soliloquies show the inner contradictions characters cannot reveal in public;
                  orations show the public selves they construct for political purpose. The audience
                  holds both, gaining a perspective neither private nor public characters possess.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Crowd as Character`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Roman plebeians are a collective character. They appear in Act 1, are central
                  to Act 3&apos;s funeral scene, and are responsible for the murder of Cinna the
                  Poet. Shakespeare presents the crowd as fickle, easily swayed, and dangerously
                  violent when stirred. Their judgement reverses entirely between Brutus&apos;s and
                  Antony&apos;s speeches in minutes. This portrayal raises troubling questions about
                  democracy and popular sovereignty: if the people can be flipped by skilled
                  rhetoric, what is the basis of legitimate political authority?
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Doubling, Mirroring, and Foils`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play is built on paired characters: Brutus and Cassius (idealist vs
                  pragmatist), Brutus and Antony (rational vs emotive orators), Caesar and Brutus
                  (the man with power vs the man with principle), Calpurnia and Portia (private
                  wisdom ignored by husbands), Antony and Octavius (passionate vs cold). These
                  pairings create the play&apos;s moral architecture. Each character defines the
                  other through contrast, showing how the same political situation is read
                  differently by different temperaments. The doubling also extends across plays:
                  Octavius reappears in Antony and Cleopatra, and the Brutus tradition links to
                  Hamlet&apos;s uncle-killing.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Ghostly Return`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Caesar&apos;s ghost appears to Brutus at the end of Act 4, identifying itself as
                  &ldquo;thy evil spirit&rdquo; and promising to meet him at Philippi. Structurally,
                  this is the moment when Caesar &mdash; physically dead since Act 3 &mdash; returns
                  as supernatural force. The ghost personifies the way Caesar&apos;s power outlives
                  his body: through the will, through Antony&apos;s rhetoric, through
                  Octavius&apos;s rise. The ghost also confirms the supernatural framework set up by
                  the omens of Act 1, ensuring that the play&apos;s metaphysical claims are not
                  merely human superstition but dramatically real.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Model essay plans for the most frequently examined questions. Each plan includes a
              thesis, paragraph structure, and suggested quotations.
            </p>

            <div className="space-y-6">
              {/* A-Level Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: How does Shakespeare present the conflict between honour and ambition?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents honour and ambition not as moral opposites but as
                      entangled motivations whose meanings are continually rewritten by rhetoric.
                      The play questions whether honourable intentions can excuse violent action,
                      and whether the charge of ambition can justify violent removal.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Brutus&apos;s self-image as honourable
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Let&apos;s carve him as a dish fit for the gods.&rdquo; Brutus elevates
                      assassination into ritual. Connect to his Stoic ancestry and self-conception
                      as Republic&apos;s defender. Shakespeare critically examines whether
                      Brutus&apos;s honour is genuine virtue or aestheticised vanity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Caesar&apos;s ambiguous ambition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The thrice-refused crown is theatre. Caesar speaks of himself as
                      &ldquo;Caesar&rdquo; in third person, suggesting self-mythologisation. Yet
                      Brutus admits in soliloquy that Caesar has not yet shown tyrannical action.
                      Shakespeare presents Caesar&apos;s ambition as not yet realised tyranny but
                      only feared trajectory.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Antony&apos;s rhetorical inversion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;For Brutus is an honourable man.&rdquo; Antony empties the word through
                      repetition. He recites Caesar&apos;s acts (refusing the crown, weeping for the
                      poor, leaving his estate to the people) to dissolve the
                      &ldquo;ambitious&rdquo; charge. Honour and ambition are not fixed essences but
                      contested rhetorical claims.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Final equilibrium in Antony&apos;s eulogy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;This was the noblest Roman of them all.&rdquo; Antony retroactively
                      grants Brutus genuine honour. Shakespeare balances his moral verdict: Brutus
                      alone among the conspirators acted from &ldquo;a general honest
                      thought,&rdquo; even as his action proved disastrous. Honour is real but
                      politically catastrophic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare leaves the binary unresolved. Brutus is both honourable and a
                      killer; Caesar is both ambitious and worthy of the crown the people seem to
                      offer. The play&apos;s final tragedy is that even genuine virtue cannot save
                      the Republic from the cycle of power.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: Discuss the role of rhetoric and persuasion in the play.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Rhetoric is not a tool that politicians deploy but the very medium of
                      political life in the play. Shakespeare presents speech as decisive action,
                      capable of reshaping reality and revealing dangerous gaps between meaning,
                      intention, and effect.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Cassius&apos;s seduction of Brutus
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The fault, dear Brutus, is not in our stars, / But in ourselves, that
                      we are underlings.&rdquo; Cassius mixes flattery, philosophy, and forged
                      letters. Rhetoric here is private, manipulative, and successful. Brutus is
                      recruited not by argument but by appeal to his self-image.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Brutus&apos;s funeral oration
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus&apos;s prose is balanced, rational, philosophical. The plebeians are
                      persuaded. Shakespeare shows reasoned argument can prevail &mdash; but only
                      when unopposed.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Antony&apos;s funeral oration
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Friends, Romans, countrymen, lend me your ears.&rdquo; Antony reverses
                      the crowd in minutes through irony, ocular proof (the mantle, the wounds),
                      pathos, and the dramatic withholding of Caesar&apos;s will. Poetry defeats
                      prose. The scene exposes the dark side of mass political speech.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Cinna the Poet
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Once rhetoric has unleashed the mob, language no longer functions. Cinna is
                      killed for sharing a name with a conspirator. The ironic conjunction of poetry
                      and lynching shows what happens when political rhetoric collapses meaning into
                      violence.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: To what extent is fate, rather than free will, the driving force of the
                  play?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare deliberately keeps the question unresolved. Characters claim free
                      will but consistently confirm prophecies, while the abundance of accurate
                      omens suggests a metaphysical order. The play&apos;s power comes from its
                      refusal to choose between determinism and agency.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Cassius&apos;s defence of free will
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The fault, dear Brutus, is not in our stars, / But in ourselves.&rdquo;
                      Cassius&apos;s humanism rejects astrological determinism. He uses free will to
                      recruit conspirators &mdash; yet ironically dies on his birthday, suggesting
                      fate has its way regardless.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The omens always prove right
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Soothsayer, Calpurnia&apos;s dream, the storm, the augurers&apos; failure.
                      Each warning is dismissed; each is fulfilled. Caesar dies on the Ides of March
                      exactly as predicted. The supernatural framework is not metaphorical but
                      dramatically true.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Caesar&apos;s ghost at Philippi
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The ghost promises to meet Brutus at Philippi &mdash; and does. The
                      supernatural literally returns to enforce its promise. Brutus&apos;s suicide
                      quotation &mdash; &ldquo;Caesar, now be still: / I kill&apos;d not thee with
                      half so good a will&rdquo; &mdash; acknowledges Caesar&apos;s posthumous
                      victory.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Yet choices still matter
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus&apos;s three crucial choices &mdash; sparing Antony, allowing the
                      funeral oration, marching to Philippi &mdash; show that human decisions shape
                      outcomes. The tragedy is precisely that Brutus had agency to act differently.
                      Determinism and choice coexist as the play&apos;s irreducible paradox.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: How does Shakespeare present the relationship between public and private
                  selves?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Public roles consistently override and damage private selves in the play.
                      Shakespeare critiques a Roman political culture in which performance of virtue
                      replaces virtue itself, and in which intimacy is the casualty of statecraft.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Caesar as public monument
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Caesar speaks of himself in the third person: &ldquo;Caesar shall
                      forth.&rdquo; This grammatical detachment shows how the public self has
                      consumed the private. Yet Calpurnia and his physical infirmities (deafness,
                      epilepsy) keep reminding us of the body beneath the statue.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Brutus&apos;s orchard soliloquy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In private at night, Brutus reveals the agony beneath his stoic surface. The
                      public face of patriotic resolve hides private torment that he cannot share
                      even with Portia.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Portia&apos;s self-wounding
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Giving myself a voluntary wound / Here, in the thigh.&rdquo; Portia
                      must inflict bodily harm to claim a private hearing. The shocking image
                      dramatises the cost when public roles eclipse private bonds.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Antony&apos;s political masks
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In the soliloquy over Caesar&apos;s body, Antony&apos;s grief is private and
                      authentic. In public, his grief is mobilised as political rhetoric. Even his
                      sincere love for Caesar is conscripted into the project of political revenge.
                      The private becomes political through a kind of necessary betrayal.
                    </p>
                  </div>
                </div>
              </div>

              {/* A-Level Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: Is Brutus a tragic hero?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus fits the Aristotelian template of the tragic hero: a man of high
                      standing brought low by a hamartia (excessive idealism). Yet Shakespeare
                      complicates this by making Brutus complicit in another&apos;s death, raising
                      the question whether tragic stature requires innocence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; High standing and noble nature
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus is descended from the founder of the Republic. He carries inherited
                      honour and is universally esteemed. Even Caesar dies addressing him as
                      &ldquo;Brute&rdquo; with shocked intimacy. He has the elevation Aristotle
                      requires.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Hamartia: idealism without political wisdom
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Three fatal errors: sparing Antony, granting the funeral, marching to
                      Philippi. Each follows from his belief that good intentions produce good
                      outcomes. His tragic flaw is not vice but the failure of virtue uncoupled from
                      realism.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Anagnorisis (recognition)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Caesar, now be still: / I kill&apos;d not thee with half so good a
                      will.&rdquo; Brutus dies acknowledging Caesar&apos;s posthumous victory. This
                      is the moment of self-recognition that completes the tragic arc.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Counter-argument: complicity in murder
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Unlike Hamlet or Othello, Brutus participates willingly in killing an unarmed
                      friend. Some critics argue this disqualifies him from full tragic stature. Yet
                      Antony&apos;s eulogy, granting him &ldquo;general honest thought,&rdquo;
                      restores his moral standing within the play&apos;s judgement.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How does Shakespeare present friendship and betrayal?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents friendship as both a source of moral authority and the
                      deepest wound when betrayed. The play asks whether public loyalty can ever
                      replace personal trust.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Caesar and Brutus
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Et tu, Brute? Then fall, Caesar!&rdquo; The Latin marks the moment
                      betrayal becomes unbearable. The trust placed in Brutus is precisely what
                      makes the killing tragic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Antony and Caesar
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;O, pardon me, thou bleeding piece of earth.&rdquo; Antony&apos;s grief
                      in soliloquy contrasts with his public diplomatic mask, revealing genuine
                      friendship beneath political performance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Brutus and Cassius
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Sardis quarrel becomes the play&apos;s most touching reconciliation.
                      Friendship survives political failure even when politics destroys both men.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How does Shakespeare use omens and the supernatural?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare uses omens to create dramatic irony, build atmosphere, and pose
                      the central question of whether men can resist fate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The Soothsayer
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Beware the Ides of March.&rdquo; Caesar dismisses the warning as
                      madness. The audience knows it will be fulfilled, building dramatic irony from
                      Act 1.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The storm and Calpurnia&apos;s dream
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The wild storm and the dream of the bleeding statue create Gothic atmosphere
                      and externalise Rome&apos;s political crisis.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Caesar&apos;s ghost
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The ghost confirms that Caesar&apos;s power outlives his body. The
                      supernatural framework is dramatically real and shapes the play&apos;s ending.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How does Shakespeare present the character of Mark Antony?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare transforms Antony from minor player to dominant force, showing how
                      a skilled rhetorician can rewrite political reality.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Underestimated
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Brutus dismisses Antony as &ldquo;but a limb of Caesar.&rdquo; This judgement
                      proves catastrophically wrong, showing how political naivety reads people
                      through stereotypes.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Master of rhetoric
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Friends, Romans, countrymen, lend me your ears.&rdquo; Antony deploys
                      irony, ocular proof, pathos, and the will. He reverses the mob in minutes.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Cold political operator
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By Act 4 Antony is signing death warrants and dismissing Lepidus. His final
                      eulogy for Brutus shows magnanimity but also strategic absorption of his
                      enemy&apos;s reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ────────────────────────────────── GRADE 9 POINTS */}
      <div id="grade-9-points">
        <Section title="A-Level Top-Band and Grade 9 Exemplar Points" icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            These higher-level interpretations demonstrate the sophisticated analysis needed for top
            grades. Each goes beyond surface reading to consider authorial intent, alternative
            readings, and structural significance.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. The Political Ambiguity of the Play
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Critics from Coleridge onwards have noted Shakespeare&apos;s remarkable refusal to
                take sides. Is Caesar a would-be tyrant whose removal saves the Republic, or a
                strong leader whose death produces civil war? Is Brutus a noble republican or a
                deluded killer? The play allows both readings simultaneously. A top-band response
                argues that this ambiguity is itself the play&apos;s position: in real political
                crises, motives are mixed and outcomes unpredictable, and any single moral verdict
                is a simplification. Shakespeare anticipates a modern political realism that resists
                ideological certainty.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. The Death of the Title Character at the Midpoint
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Caesar dies at the end of Act 3, scene 1 &mdash; the structural midpoint. This is
                unusual in tragedy and signals that the play is not really about Caesar but about
                Caesar&apos;s aftermath. The structural choice argues that political assassination
                does not produce resolution. Caesar&apos;s body lying on stage becomes the centre
                around which the entire play pivots. He grows more powerful in death than in life:
                through his ghost, his will, Antony&apos;s rhetoric, and Octavius&apos;s rise. The
                structure embodies the thematic claim: violence cannot end power, only redistribute
                it.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. The Funeral Orations as Set-Piece Comparison
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The juxtaposition of Brutus&apos;s and Antony&apos;s speeches is one of
                Shakespeare&apos;s great rhetorical experiments. Brutus uses prose, balanced
                antithesis, and abstract appeals to patriotism. Antony uses verse, irony, ocular
                proof, and concrete details (the will, the wounds, the mantle). Brutus addresses
                citizens; Antony addresses individuals. Brutus claims rational authority; Antony
                performs emotional immediacy. The Aristotelian appeals correspond: Brutus relies on
                logos, Antony on pathos and ethos. A top-band reading argues that Shakespeare is
                staging the tension between two models of public discourse, one rational and stoic,
                one emotive and populist &mdash; with the latter winning, sounding a note of warning
                about democratic politics.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. The Crowd as Mirror of the Audience
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The plebeians at the Globe were the &ldquo;groundlings&rdquo; standing in the yard.
                Shakespeare stages two crowds simultaneously: the fictional Romans on stage and the
                real Londoners around them. When Antony addresses &ldquo;Friends, Romans,
                countrymen,&rdquo; he addresses both. This metatheatrical doubling implicates the
                audience in the play&apos;s questions about manipulation and judgement. Are the
                groundlings any less swayable than the plebeians? Could a skilled orator persuade
                them to riot? The play makes its political claims palpable through theatrical
                self-consciousness, asking the audience to examine their own susceptibility to
                rhetoric.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. The Cinna the Poet Scene as Political Microcosm
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The brief scene (3.3) where the mob tears the innocent poet apart for sharing a name
                with a conspirator is structurally crucial. It shows what happens when
                rhetoric&apos;s work is done: language collapses, names lose meaning, violence
                becomes random. The scene is darkly comic and horrifying. It indicts both the mob
                and Antony, who unleashed them. The fate of a poet at the hands of a mob also has
                self-reflexive weight for Shakespeare himself: in a society of weaponised words, the
                poet becomes a target.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                6. Stoicism as Both Strength and Limitation
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Brutus and Portia are explicitly Stoic, and Stoicism gives them their nobility
                &mdash; the composure to face death, the willingness to suffer for principle. Yet
                Shakespeare also shows its dangers. Brutus&apos;s suppression of emotion at
                Portia&apos;s death is admirable but inhuman. His refusal to allow his fellow
                conspirators to swear an oath is principled but politically naive. Stoicism gives
                Brutus the strength to act but blinds him to others&apos; less philosophical
                motivations. Shakespeare critically tests classical philosophy against the messiness
                of political life.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. The Question of Caesar&apos;s Tyranny
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A close reading complicates the conspirators&apos; case. What has Caesar actually
                done? He has won wars, refused the crown three times, and pardoned his enemies
                (including Brutus and Cassius). He shows political prudence in dismissing Cassius as
                dangerous but does nothing against him. Brutus admits in his soliloquy that he must
                kill Caesar not for what he is but for what he might become &mdash; a pre-emptive
                justification that requires speculation rather than evidence. Shakespeare
                deliberately places the audience in a position where the assassination cannot be
                morally certain. This is the play&apos;s most uncomfortable challenge to political
                certainty.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. Octavius&apos;s Rise and the Future of Rome
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play ends with Octavius in command, the future Augustus and first Roman Emperor.
                His clashes with Antony in Act 5 (refusing to take Antony&apos;s side of the field)
                foreshadow their later war (dramatised in Antony and Cleopatra). The play&apos;s
                ending is bleakly cyclical: a new Caesar is rising in the very moment the old
                Caesar&apos;s killers are eulogised. The Republic the conspirators died to defend is
                finished. A top-band reading connects this to Elizabethan succession anxieties,
                presenting the play as a meditation on whether any political form can survive the
                ambitions of its strongest individuals.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* ────────────────────────────────── PRACTICE QUESTIONS */}
      <div id="practice-questions">
        <Section title={tr(`Practice Questions`)} icon="📝">
          <p className="text-sm text-muted-foreground mb-4">
            Exam-style questions covering the most commonly tested areas. Consider how you would
            structure a response using PEEL paragraphs, embedded quotations, and contextual links.
          </p>
          <div className="mb-3 text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            A-Level Questions
          </div>
          <div className="space-y-3 mb-6">
            {[
              {
                q: '"Brutus is a tragic hero whose virtue is also his weakness." To what extent do you agree?',
                marks: 30,
              },
              {
                q: 'Discuss the role of rhetoric and persuasion in shaping political action in Julius Caesar.',
                marks: 30,
              },
              {
                q: 'How far does Shakespeare present the conspirators as motivated by genuine political principle?',
                marks: 30,
              },
              {
                q: 'Explore the relationship between fate and free will in Julius Caesar.',
                marks: 30,
              },
              {
                q: '"Caesar grows more powerful in death than he was in life." Discuss in light of the play\'s structure.',
                marks: 30,
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">A-Level Question {i + 1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mb-3 text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            GCSE Questions
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How does Shakespeare present Mark Antony as a skilled persuader? Refer to the funeral oration in your answer.',
                marks: 30,
              },
              {
                q: 'How does Shakespeare use the supernatural and omens to create atmosphere?',
                marks: 30,
              },
              {
                q: 'How does Shakespeare present the theme of friendship and betrayal in Julius Caesar?',
                marks: 30,
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">GCSE Question {i + 1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">{tr(`Exam Tips for Julius Caesar`)}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always link to context.`)}</strong> Connect the play to 44 BC Roman
              politics, Plutarch via North (1579), Elizabethan succession anxieties, and the c.1599
              opening of the Globe.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Shakespeare&apos;s methods.`)}</strong> Discuss verse vs prose
              (Brutus&apos;s prose vs Antony&apos;s verse oration), soliloquy, dramatic irony,
              omens, and rhetorical devices (anaphora, irony, tricolon, antithesis).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to the writer&apos;s intentions.`)}</strong> &ldquo;Shakespeare
              perhaps suggests...&rdquo; or &ldquo;Shakespeare uses Antony&apos;s rhetoric to
              expose...&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Acknowledge ambiguity.`)}</strong> The play deliberately refuses to side
              with Caesar or the conspirators. Top-band answers engage with this ambiguity rather
              than flatten it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> Refer to &ldquo;Roman
              tragedy,&rdquo; &ldquo;blank verse,&rdquo; &ldquo;hamartia,&rdquo;
              &ldquo;anagnorisis,&rdquo; &ldquo;dramatic irony,&rdquo; not vague description.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole play.`)}</strong> Don&apos;t focus only on the
              assassination scene &mdash; the second half (Acts 4 and 5) is essential for showing
              consequences and Brutus&apos;s tragic arc.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`Julius Caesar`)}</em> by William Shakespeare was first performed c.1599 and first
          printed in the First Folio of 1623. Shakespeare died in 1616 and the text is in the{' '}
          <strong>public domain</strong>. All quotations on this page are reproduced from the First
          Folio text.
        </p>
      </footer>
    </>
  )
}
