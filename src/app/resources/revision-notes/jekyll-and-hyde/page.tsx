'use client'

import { useState } from 'react'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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

export default function JekyllAndHydePage() {
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
            19th-Century Prose
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
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Strange Case of Dr Jekyll and Mr Hyde &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Robert Louis Stevenson, 1886`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your GCSE English Literature exam. Chapter-by-chapter plot,
          character profiles, themes with evidence, 25+ key quotations with analysis, Gothic
          conventions, historical context, narrative structure, and essay planning guidance.
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
            'Gothic Elements',
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
          <Section title={tr(`Chapter-by-Chapter Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Chapter 1: Story of the Door
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Mr Utterson, a London lawyer, walks with his cousin Mr Enfield. Enfield tells of
                  witnessing a small, deformed man (Hyde) trample a young girl at a doorway. The man
                  paid compensation with a cheque signed by a respectable gentleman &mdash; Dr
                  Jekyll. The mysterious door connects to Jekyll&apos;s laboratory. Utterson is
                  troubled but the two agree never to discuss the matter again, establishing the
                  theme of secrecy that pervades the novella.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Enfield&apos;s eyewitness account of Hyde trampling the girl</li>
                    <li>
                      &bull; The &ldquo;blistered and distained&rdquo; door &mdash; symbol of hidden
                      vice
                    </li>
                    <li>
                      &bull; The cheque from Jekyll &mdash; first link between the two identities
                    </li>
                    <li>
                      &bull; Agreement to suppress the story &mdash; Victorian secrecy established
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Chapter 2: Search for Mr Hyde
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Utterson reads Jekyll&apos;s will, which leaves everything to Edward Hyde.
                  Disturbed, Utterson visits Dr Lanyon, who has fallen out with Jekyll over
                  &ldquo;unscientific balderdash.&rdquo; Utterson haunts the door until he meets
                  Hyde, who gives him his Soho address. Utterson is repulsed by Hyde&apos;s
                  appearance but cannot explain why. He visits Jekyll, who assures him the matter is
                  under control and asks Utterson to honour the will.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Jekyll&apos;s will &mdash; &ldquo;in case of his disappearance&rdquo;
                    </li>
                    <li>&bull; Lanyon&apos;s rift with Jekyll over science</li>
                    <li>
                      &bull; Utterson&apos;s first encounter with Hyde &mdash; instinctive revulsion
                    </li>
                    <li>
                      &bull; &ldquo;If he be Mr Hyde, I shall be Mr Seek&rdquo; &mdash; detective
                      role established
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Chapter 3: Dr Jekyll Was Quite at Ease
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Jekyll hosts a dinner party for his friends. Afterwards, Utterson raises the
                  subject of Hyde and the will. Jekyll becomes uncomfortable but insists he can be
                  rid of Hyde whenever he chooses. He asks Utterson to help Hyde if anything happens
                  to him. This chapter establishes Jekyll&apos;s outward respectability and the
                  contrast between his public and private life.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The dinner party &mdash; facade of Victorian respectability</li>
                    <li>
                      &bull; Jekyll&apos;s confidence he can control Hyde &mdash; dramatic irony
                    </li>
                    <li>&bull; Title &ldquo;Quite at Ease&rdquo; &mdash; ironic foreshadowing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Chapter 4: The Carew Murder Case
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nearly a year later, a maid witnesses Hyde brutally murder Sir Danvers Carew, a
                  distinguished MP, beating him to death with a cane. The murder is unprovoked and
                  savage. Utterson recognises the broken cane as one he gave Jekyll. He leads the
                  police to Hyde&apos;s Soho rooms, which are ransacked. Hyde has disappeared. The
                  violence escalates Stevenson&apos;s exploration of uncontrolled evil.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The brutal, unprovoked murder of Carew &mdash; escalation of violence
                    </li>
                    <li>&bull; The cane &ldquo;shivered&rdquo; with the force of blows</li>
                    <li>&bull; Hyde&apos;s Soho lodgings &mdash; luxury and squalor combined</li>
                    <li>&bull; The maid&apos;s moonlit witness &mdash; Gothic atmosphere</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Chapter 5: Incident of the Letter
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Utterson visits Jekyll, who looks deathly ill. Jekyll claims Hyde has fled and
                  shows Utterson a letter from Hyde. However, Utterson&apos;s head clerk, Mr Guest,
                  notes that Hyde&apos;s handwriting is remarkably similar to Jekyll&apos;s, merely
                  with a different slope. Utterson suspects Jekyll is forging for a murderer,
                  deepening the mystery.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Jekyll&apos;s pallor and distress &mdash; physical deterioration</li>
                    <li>&bull; The forged letter &mdash; matching handwriting as key clue</li>
                    <li>&bull; Utterson suppresses suspicion rather than confront the truth</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  Chapter 6: Remarkable Incident of Dr Lanyon
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Jekyll becomes sociable again briefly, then suddenly refuses visitors. Utterson
                  visits Lanyon, who has received a terrible shock and appears fatally ill. Lanyon
                  says he has had a revelation about Jekyll but refuses to speak of it. He dies
                  shortly after, leaving Utterson a sealed letter, only to be opened after
                  Jekyll&apos;s death or disappearance.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Lanyon&apos;s shocking decline &mdash; knowledge destroys him</li>
                    <li>&bull; The sealed letter &mdash; truth deferred through documents</li>
                    <li>&bull; Jekyll&apos;s brief return to sociability then relapse</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Chapter 7: Incident at the Window
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Utterson and Enfield pass Jekyll&apos;s window. Jekyll sits looking like a
                  prisoner. He begins to converse but suddenly a look of terror crosses his face.
                  The window is shut and the two men walk away in horrified silence. This brief
                  chapter intensifies the sense of dread and suggests Jekyll is losing control.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Jekyll as prisoner &mdash; trapped by his own experiment</li>
                    <li>&bull; The aborted transformation at the window</li>
                    <li>
                      &bull; Utterson and Enfield&apos;s horrified silence &mdash; the unspeakable
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Chapter 8: The Last Night
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Poole, Jekyll&apos;s butler, comes to Utterson in distress. Someone is locked in
                  the laboratory and Poole believes his master has been murdered. They hear a voice
                  crying for a chemical and Poole says it is not Jekyll&apos;s voice. They break
                  down the door and find Hyde&apos;s body, dead from poison (suicide), wearing
                  Jekyll&apos;s clothes. Jekyll is nowhere to be found. They discover letters for
                  Utterson.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Poole&apos;s loyalty and fear &mdash; servant breaks convention</li>
                    <li>&bull; The locked door and changed voice &mdash; Gothic suspense</li>
                    <li>&bull; Hyde&apos;s body in Jekyll&apos;s clothes &mdash; visual duality</li>
                    <li>&bull; Discovery of the letters &mdash; truth finally accessible</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  Chapter 9: Dr Lanyon&apos;s Narrative
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Lanyon&apos;s letter describes receiving instructions from Jekyll to collect
                  chemicals from the laboratory. A small, repulsive man (Hyde) arrived and, before
                  Lanyon&apos;s eyes, drank a potion and transformed into Dr Jekyll. The shock of
                  witnessing this transformation is what killed Lanyon. This is the first direct
                  revelation of the dual identity to another character.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The on-page transformation &mdash; the novella&apos;s climactic
                      revelation
                    </li>
                    <li>
                      &bull; &ldquo;The slime of the pit seemed to utter cries and voices&rdquo;
                    </li>
                    <li>&bull; Lanyon&apos;s death from shock &mdash; knowledge as destruction</li>
                    <li>&bull; Shift to first-person epistolary narration</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    10
                  </span>
                  Chapter 10: Henry Jekyll&apos;s Full Statement of the Case
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Jekyll&apos;s confession explains everything. He describes his respectable life
                  and his secret pleasures. He discovered a potion that separated his good and evil
                  natures, becoming Hyde to indulge without consequence. Over time, Hyde grew
                  stronger and Jekyll found himself transforming involuntarily. When the
                  potion&apos;s ingredients ran out (the original salt was impure and
                  irreplaceable), Jekyll knew Hyde would take over permanently. The statement ends
                  mid-sentence as Jekyll becomes Hyde for the final time.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {tr(`Key Moments`)}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Jekyll&apos;s confession of &ldquo;irregularities&rdquo; &mdash;
                      Victorian euphemism
                    </li>
                    <li>
                      &bull; &ldquo;Man is not truly one, but truly two&rdquo; &mdash; the thesis
                      statement
                    </li>
                    <li>&bull; The involuntary transformations &mdash; loss of control</li>
                    <li>&bull; The impure salt &mdash; science&apos;s unpredictability</li>
                    <li>
                      &bull; The statement ending mid-sentence &mdash; Jekyll consumed by Hyde
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
                name="Dr Henry Jekyll"
                description="A wealthy, respected doctor and scientist who embodies Victorian respectability. Jekyll is torn between his public persona and his secret desires. His experiment stems from a desire to separate these two selves rather than reconcile them. He represents the Victorian gentleman whose outward morality conceals inner conflict. His tragic flaw is his belief that he can indulge his darker side without consequence. Stevenson uses Jekyll to critique a society that demands moral perfection while refusing to acknowledge human complexity. His 'Full Statement' reveals not just guilt but a disturbing pleasure in his double life."
              />
              <CharacterCard
                name="Mr Edward Hyde"
                description="Jekyll's alter ego, representing pure evil unrestrained by conscience or social convention. Hyde is physically smaller than Jekyll (suggesting evil is a stunted part of Jekyll's nature), ape-like, and inspires instinctive revulsion in all who meet him. His violence escalates from trampling a child to murdering Sir Danvers Carew. Hyde embodies Stevenson's suggestion that evil, once released, grows stronger over time. His appearance draws on Victorian anxieties about evolution and degeneration. He is not a separate person but the darkest part of Jekyll given free rein."
              />
              <CharacterCard
                name="Mr Gabriel John Utterson"
                description="Jekyll's lawyer and the novella's primary narrator/investigator. Utterson is rational, loyal, and discreet - the ideal Victorian gentleman. He actively suppresses curiosity and avoids scandal, representing the Victorian value of respectability above truth. His dogged investigation drives the plot but he consistently fails to uncover the truth, suggesting the limits of rationality when confronted with the supernatural. He is 'the last good influence' in Jekyll's life. His restraint contrasts with Hyde's excess."
              />
              <CharacterCard
                name="Dr Hastie Lanyon"
                description="A conventional, mainstream doctor and former friend of Jekyll. Lanyon represents orthodox science and rationality. He dismissed Jekyll's experiments as 'unscientific balderdash,' yet when he witnesses Hyde's transformation, the shock literally kills him. His death demonstrates that confronting the truth of human duality - seeing evil made manifest - can destroy a person. He serves as a warning about the dangers of both ignorance and knowledge."
              />
              <CharacterCard
                name="Poole"
                description="Jekyll's loyal butler who has served him for twenty years. Poole's distress at his master's behaviour and his willingness to break down the laboratory door show the depth of his loyalty. He represents the servant class who observe their masters closely but are bound by duty not to speak. His terror in Chapter 8 helps build the novella's climactic suspense."
              />
              <CharacterCard
                name="Sir Danvers Carew"
                description="An elderly, distinguished Member of Parliament whose brutal murder by Hyde marks the turning point of the novella. Carew is described as having 'an aged and beautiful' gentleness, making Hyde's unprovoked attack especially horrifying. His murder symbolises Hyde's assault on the very pillars of respectable Victorian society - law, government, and civility."
              />
              <CharacterCard
                name="Mr Richard Enfield"
                description="Utterson's distant cousin and walking companion. Enfield is a 'well-known man about town' who first witnesses Hyde trampling the girl. Despite being disturbed, he agrees with Utterson to suppress the story, embodying the Victorian instinct to avoid scandal. His role is primarily as a narrator whose account launches the mystery."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Duality of Human Nature`)}
                description="The central theme of the novella. Stevenson argues that every person contains both good and evil. Jekyll's experiment does not create evil - it releases what was already there. Rather than integrating these two sides, Victorian society forces individuals to suppress their darker impulses, which only makes them more dangerous. Jekyll's fatal error is believing the two can be permanently separated. The novella suggests that denying one's darker nature, rather than acknowledging and controlling it, leads to destruction."
              />
              <ThemeCard
                title={tr(`Reputation and Respectability`)}
                description="Victorian society placed enormous value on public reputation, often at the expense of truth. Every major character prioritises reputation over honesty: Utterson suppresses his suspicions, Enfield agrees not to discuss Hyde, Jekyll creates an alter ego to protect his name. Stevenson shows how this obsession with appearances creates a culture of hypocrisy where evil can flourish behind closed doors. The fog that blankets London symbolises this concealment."
              />
              <ThemeCard
                title={tr(`Science vs Religion`)}
                description="Jekyll's experiment represents the tension between Victorian scientific ambition and religious morality. His attempt to separate good from evil echoes contemporary debates about Darwin's theory of evolution and whether science was trespassing into God's domain. Lanyon's rejection of Jekyll's work as 'unscientific' reflects the conservative establishment's fear of radical experimentation. Stevenson presents science without moral restraint as dangerous - a Promethean overreach."
              />
              <ThemeCard
                title="Secrecy and Silence"
                description="The novella is structured around secrets. Characters repeatedly agree not to discuss disturbing events. Jekyll's laboratory is hidden behind a sinister door. Letters are sealed and locked away. This pervasive secrecy reflects Victorian society's code of discretion, but Stevenson shows it enables evil. The truth only emerges through written confessions after death, suggesting that Victorian society's refusal to speak openly about uncomfortable truths has fatal consequences."
              />
              <ThemeCard
                title={tr(`Victorian Hypocrisy`)}
                description="Stevenson exposes the gap between Victorian moral ideals and private behaviour. Jekyll is not unusual - he is a typical gentleman with 'irregularities' he feels compelled to hide. The entire social circle of respectable men protects each other's secrets. Stevenson suggests that Victorian morality, rather than making people good, simply drives vice underground. Hyde's Soho dwelling - a 'dismal quarter' hidden within respectable London - physically represents this hidden underworld."
              />
              <ThemeCard
                title={tr(`Good vs Evil`)}
                description="While the novella appears to present a simple battle between good and evil, Stevenson complicates this. Jekyll acknowledges that Hyde gave him pleasure. Evil is not external but internal. The potion does not create a monster - it removes the restraints that society imposes. Moreover, Jekyll without Hyde is not purely good; he is merely respectable. The novella questions whether absolute goodness is even possible, suggesting that humanity exists on a spectrum between virtue and vice."
              />
              <ThemeCard
                title="Repression"
                description="Stevenson presents Victorian repression as the root cause of Jekyll's tragedy. Jekyll's 'Full Statement' reveals that he was not inherently wicked but felt forced to hide ordinary human desires behind a facade of total virtue. The longer these desires were suppressed, the more violently they erupted through Hyde. 'My devil had been long caged, he came out roaring' - the caging metaphor directly critiques a society that demands impossible moral purity. Stevenson anticipates Freud's later theories: repression does not destroy dangerous impulses but intensifies them."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              25+ quotations organised by theme and character for exam revision.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="If he be Mr Hyde, I shall be Mr Seek."
                speaker="Utterson"
                analysis="A pun on 'hide and seek' that establishes Utterson's role as detective-figure. It also hints at the theme of concealment - Hyde hides within Jekyll, and behind the respectable facade of Victorian society. The playfulness of the pun contrasts with the darkness of what Utterson will uncover."
              />
              <QuoteCard
                quote="He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable."
                speaker="Enfield"
                analysis="The inability to describe Hyde reflects the idea that evil cannot be rationalised or categorised. The tricolon ('something wrong... displeasing... detestable') shows escalating revulsion. Hyde provokes an instinctive, almost supernatural reaction that transcends rational explanation, suggesting evil operates on a primal level."
              />
              <QuoteCard
                quote="I learned to recognise the thorough and primitive duality of man."
                speaker="Jekyll"
                analysis="Jekyll's key realisation from his 'Full Statement.' The word 'primitive' links duality to humanity's evolutionary past, connecting to Darwin's theories. 'Thorough' suggests this duality is complete and inescapable - not a flaw but a fundamental aspect of human nature."
              />
              <QuoteCard
                quote="Man is not truly one, but truly two."
                speaker="Jekyll"
                analysis="The novella's thesis statement. Jekyll acknowledges that every person contains opposing forces. The repetition of 'truly' emphasises that this is not a metaphor but a literal truth. It challenges the Victorian ideal of the unified, morally consistent self."
              />
              <QuoteCard
                quote="All human beings, as we meet them, are commingled out of good and evil."
                speaker="Jekyll"
                analysis="'Commingled' suggests good and evil are inseparably mixed - like chemicals in a solution. This undercuts Jekyll's own experiment, which attempts to separate them. The phrase 'as we meet them' implies that the public self is always a blend, while the attempt at purity (either purely good or purely evil) is unnatural and destructive."
              />
              <QuoteCard
                quote="I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse."
                speaker="Jekyll"
                analysis="The chiastic structure (original/better, second/worse) mirrors the crossing-over between identities. 'Slowly' repeated twice shows the gradual loss of control. 'Incorporated' literally means 'made into a body' - Hyde is physically consuming Jekyll. This tracks the novella's arc of escalation."
              />
              <QuoteCard
                quote="The last I think; for O my poor old Harry Jekyll, if ever I read Satan's signature upon a face, it is on that of your new friend."
                speaker="Utterson"
                analysis="Religious language ('Satan's signature') frames Hyde as diabolical. Utterson's affectionate 'poor old Harry Jekyll' reveals genuine concern for his friend, while 'your new friend' drips with ironic understatement. The line connects Hyde to Christian imagery of the Devil, linking science to blasphemy."
              />
              <QuoteCard
                quote="With a transport of glee, I mauled the unresisting body, tasting delight from every blow."
                speaker="Jekyll describing Hyde"
                analysis="Describes the murder of Sir Danvers Carew. The semantic field of pleasure ('glee,' 'delight,' 'tasting') is deeply disturbing when paired with extreme violence. 'Mauled' is animalistic. 'Unresisting' emphasises the victim's helplessness and Hyde's cruelty. 'Tasting' makes violence sensory and intimate, suggesting sadistic pleasure."
              />
              <QuoteCard
                quote="I bring the life of that unhappy Henry Jekyll to an end."
                speaker="Jekyll"
                analysis="The final line of Jekyll's statement. The third-person reference ('that unhappy Henry Jekyll') shows he has already become detached from his former identity. 'Unhappy' is a poignant understatement. The sentence could mean either his narrative or his literal life is ending, creating deliberate ambiguity."
              />
              <QuoteCard
                quote="The fog still slept on the wing above the drowned city."
                speaker="Narrator"
                analysis="Stevenson personifies the London fog, making it a sinister, oppressive presence. 'Drowned' suggests the city is submerged - hidden beneath layers of concealment. The fog is a pathetic fallacy for the secrecy and moral murkiness that pervades the novella. It also evokes the real industrial smog of Victorian London."
              />
              <QuoteCard
                quote="He had in his hand a heavy cane, with which he was trifling; but he answered never a word."
                speaker="Narrator, describing Hyde before the murder"
                analysis="The casual 'trifling' with the murder weapon creates menacing understatement. Hyde's silence is more threatening than speech. The cane - a gentleman's accessory - becomes a weapon, symbolising how respectability conceals violence. The weapon belongs to Jekyll's world, not Hyde's."
              />
              <QuoteCard
                quote="It was Hyde, after all, and Hyde alone, that was guilty."
                speaker="Jekyll"
                analysis="Jekyll's attempt to absolve himself of responsibility by blaming Hyde. The self-justification is deeply ironic - Jekyll created Hyde and chose to become him. Stevenson critiques the Victorian tendency to displace guilt onto others. 'After all' reveals Jekyll's need to convince himself."
              />
              <QuoteCard
                quote="I was the chief of sinners, I was the chief of sufferers also."
                speaker="Jekyll"
                analysis="Biblical language (echoing St Paul: 'Christ Jesus came into the world to save sinners, of whom I am chief'). The parallel structure equates sin with suffering - Jekyll is both perpetrator and victim. This duality within a single sentence encapsulates the novella's central theme."
              />
              <QuoteCard
                quote="Something troglodytic... the man seems hardly human."
                speaker="Utterson"
                analysis="'Troglodytic' means cave-dwelling, linking Hyde to primitive, pre-civilised humanity. This connects directly to Victorian anxieties about Darwin's theory of evolution and the fear that humans might 'devolve.' Hyde represents the primitive self that civilisation supposedly suppresses but can never fully eliminate."
              />
              <QuoteCard
                quote="He gave an impression of deformity without any nameable malformation."
                speaker="Narrator"
                analysis="The paradox - deformed yet physically whole - suggests Hyde's evil is metaphysical, not physical. His wrongness is felt instinctively. This connects to physiognomy (the Victorian pseudo-science of reading character from appearance) while simultaneously undermining it: Hyde's evil cannot be pinned to specific features."
              />
              <QuoteCard
                quote="My devil had been long caged, he came out roaring."
                speaker="Jekyll"
                analysis="Animal imagery ('caged,' 'roaring') presents Hyde as a beast. 'My devil' acknowledges ownership - Hyde is part of Jekyll, not an external force. 'Long caged' directly critiques Victorian repression: suppressing desires does not eliminate them but intensifies them. The longer the cage, the more violent the release."
              />
              <QuoteCard
                quote="I felt younger, lighter, happier in body."
                speaker="Jekyll"
                analysis="Jekyll's first transformation into Hyde is described with liberation and pleasure. The tricolon of positive adjectives suggests that releasing one's darker side feels like freedom. This complicates the moral framework - evil is not experienced as evil by the person committing it, which is precisely what makes it dangerous."
              />
              <QuoteCard
                quote="Between these two, I now felt I had to choose."
                speaker="Jekyll"
                analysis="Jekyll frames his dilemma as a binary choice, but Stevenson shows this is a false dichotomy. The impossibility of choosing demonstrates that human nature cannot be divided into neat categories. Jekyll's tragedy is his refusal to accept his whole self - both the respectable doctor and the pleasure-seeker."
              />
              <QuoteCard
                quote="The large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes."
                speaker="Narrator"
                analysis="Physical description foreshadows the transformation. 'Pale to the lips' and 'blackness about his eyes' suggest Hyde bleeding through Jekyll's appearance. The visual contrast of white and black mirrors the novella's central duality. The face - the public self - is literally being darkened."
              />
              <QuoteCard
                quote="This was the shocking thing; that the slime of the pit seemed to utter cries and voices."
                speaker="Lanyon"
                analysis="Religious imagery of Hell ('the pit') combined with visceral disgust ('slime'). Lanyon witnesses the transformation and interprets it through religious rather than scientific language. That evil can 'utter cries' personifies it as a living force. The shock of this revelation kills Lanyon, suggesting some truths are too terrible to survive."
              />
              <QuoteCard
                quote="If I am the chief of sinners, I am the chief of sufferers also. I could not think that this earth contained a place for sufferings and terrors so unmanning."
                speaker="Jekyll"
                analysis="'Unmanning' is significant - Hyde strips Jekyll of his masculine Victorian identity. The superlative 'chief' elevates Jekyll's experience to the extreme. This passage reveals that Jekyll's punishment is not external (the law never catches him) but internal - psychological torment and loss of self."
              />
              <QuoteCard
                quote="That child of Hell had nothing human; nothing lived in him but fear and hatred."
                speaker="Jekyll"
                analysis="Religious language ('child of Hell') combined with absolute negation ('nothing human'). By the end, Hyde is no longer associated with pleasure but only with 'fear and hatred.' This shows how evil, once separated from good, degrades into something purely destructive. The progression from pleasure to terror mirrors addiction."
              />
              <QuoteCard
                quote="God bless me, the man seems hardly human!"
                speaker="Utterson"
                analysis="Utterson's shocked exclamation after meeting Hyde. The involuntary religious oath ('God bless me') suggests an instinctive spiritual recoil. 'Hardly human' connects to evolutionary fears - Hyde represents regression. Even the rational, restrained Utterson cannot maintain composure when confronted with Hyde."
              />
              <QuoteCard
                quote="The door, which was equipped with neither bell nor knocker, was blistered and distained."
                speaker="Narrator"
                analysis="The laboratory door symbolises the hidden, shameful side of Jekyll's life. 'Neither bell nor knocker' means it does not welcome visitors - it exists to conceal. 'Blistered and distained' (stained/discoloured) suggests decay and neglect. The door contrasts sharply with Jekyll's grand front entrance, physically representing the public/private divide."
              />
              <QuoteCard
                quote="The doctor gave one of his pleasant dinners to some five or six old cronies, all intelligent reputable men, and all judges of good wine."
                speaker="Narrator"
                analysis="The emphasis on respectability, intelligence, and social ritual establishes the world Jekyll has to lose. 'Pleasant' and 'old cronies' create warmth and comfort. Every detail - the dinner party, the wine, the gentlemen - represents the Victorian establishment that Jekyll will destroy. The surface calm makes the underlying horror more effective."
              />
              <QuoteCard
                quote="I began to be aware of a change in the temper of my thoughts, a greater boldness, a contempt of danger, a solution of the bonds of obligation."
                speaker="Jekyll"
                analysis="Jekyll describes the psychological shift as Hyde begins to dominate. The list structure shows escalation: from changed thoughts to boldness to contempt to the complete dissolution of moral duty. 'Solution of the bonds' is a chemistry metaphor - obligation dissolves like a substance in liquid, connecting to Jekyll's scientific framework."
              />
              <QuoteCard
                quote="He, I say - I cannot say, I."
                speaker="Jekyll"
                analysis="A moment of profound identity crisis. Jekyll cannot decide whether to refer to Hyde as 'he' (separate) or 'I' (the same person). The grammatical confusion - the dash, the self-correction - mirrors the fragmentation of identity. This single sentence encapsulates the novella's central psychological horror: the inability to distinguish self from other."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── GOTHIC ELEMENTS */}
        <div id="gothic-elements">
          <Section title={tr(`Gothic Conventions in the Novella`)} icon="🏚️">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Setting: Victorian London`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stevenson uses London&apos;s fog, dark alleyways, and gas-lit streets to create a
                  threatening atmosphere. The city becomes a Gothic landscape where respectable
                  streets conceal sinister spaces. The contrast between Jekyll&apos;s grand front
                  door and the &ldquo;blistered and distained&rdquo; laboratory entrance physically
                  represents duality. Soho, where Hyde lives, is described as a &ldquo;dismal
                  quarter&rdquo; &mdash; a geographic representation of moral corruption.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Pathetic Fallacy`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fog is pervasive throughout the novella, symbolising confusion, concealment, and
                  moral ambiguity. Night scenes dominate the narrative, with Hyde&apos;s crimes
                  occurring after dark. The &ldquo;chocolate-coloured pall&rdquo; over London
                  creates claustrophobia. Weather consistently reflects the mood: storms accompany
                  revelations, darkness conceals violence.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`The Monstrous Double (Doppelg&auml;nger)`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The doppelg&auml;nger is a classic Gothic device &mdash; the idea of a dark twin
                  or shadow self. Hyde is Jekyll&apos;s monstrous other. Unlike traditional
                  doppelg&auml;ngers, they share one body, making the horror internal rather than
                  external. This connects to Freudian theory (published later) about the id, ego,
                  and superego. The tradition stretches back to German Romantic literature and
                  appears in works like Shelley&apos;s <em>Frankenstein</em> and Poe&apos;s
                  &ldquo;William Wilson.&rdquo;
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Supernatural Transformation`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The potion-induced transformation is a Gothic trope &mdash; the boundary between
                  science and the supernatural is deliberately blurred. The transformation scene,
                  witnessed by Lanyon, combines scientific apparatus with horrifying physical
                  change, creating the novella&apos;s most viscerally Gothic moment.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Narrative Withholding and Mystery`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Gothic fiction thrives on suspense and concealed truths. The truth about Jekyll
                  and Hyde is withheld until the final two chapters. Sealed letters, locked doors,
                  and characters who refuse to speak all create a sense of hidden knowledge too
                  terrible to reveal. The fragmented narrative structure (multiple narrators,
                  embedded documents) mirrors the fractured identity at the novella&apos;s core.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Violence and Terror`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Gothic fiction often features extreme violence. Hyde&apos;s trampling of the girl
                  and murder of Carew are described with shocking intensity. The broken cane &mdash;
                  &ldquo;shivered&rdquo; with the force of the blows &mdash; emphasises the
                  savagery. Stevenson uses violence to literalise the danger of repressed evil
                  erupting.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Entrapment and Isolation`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Jekyll becomes increasingly imprisoned &mdash; first within his house, then within
                  his laboratory, and finally within Hyde&apos;s body. The locked door of Chapter 8,
                  behind which something terrible lurks, is a quintessentially Gothic image.
                  Jekyll&apos;s isolation from society as Hyde takes over mirrors the Gothic trope
                  of the protagonist trapped in a castle or confined space, unable to escape their
                  fate.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Social Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Victorian Society and Morality`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Victorian era (1837&ndash;1901) prized respectability, moral restraint, and
                  public decency. Gentlemen were expected to be paragons of virtue. However, beneath
                  this surface, Victorian London had a thriving underworld of vice. Stevenson
                  exposes this hypocrisy through Jekyll, who is outwardly respectable but secretly
                  indulges in unnamed &ldquo;pleasures.&rdquo; The novella suggests that rigid moral
                  codes do not eliminate vice but merely drive it underground.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Darwin and the Evolution Debate`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Charles Darwin&apos;s <em>{tr(`On the Origin of Species`)}</em> (1859) shocked
                  Victorian society by suggesting humans evolved from animals. Hyde&apos;s ape-like
                  appearance and &ldquo;troglodytic&rdquo; nature reflect the fear that humans could
                  &ldquo;devolve&rdquo; &mdash; revert to a primitive, bestial state. This
                  &ldquo;degeneration anxiety&rdquo; was widespread in the 1880s. Stevenson taps
                  into the fear that civilisation is a thin veneer over animal instincts.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Repression and the Unconscious`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Although Freud&apos;s theories came later (1890s&ndash;1900s), Stevenson
                  anticipates the idea that repressed desires emerge in dangerous forms.
                  Jekyll&apos;s suppression of his darker impulses makes Hyde more violent. The
                  novella can be read as a psychological case study: Hyde is Jekyll&apos;s id
                  (primitive desires), Jekyll his superego (social conscience), and the two cannot
                  coexist peacefully when forced apart.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">London Setting and Urban Anxiety</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  1880s London was a city of extreme contrasts: wealth and poverty existed side by
                  side. The Jack the Ripper murders (1888, two years after publication) would soon
                  confirm fears that violence lurked in the city&apos;s shadows. Stevenson&apos;s
                  London, with its fog, gas lamps, and sinister back streets, embodies Victorian
                  anxieties about the city as a space where anonymity enables crime.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Doppelg&auml;nger Tradition`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stevenson draws on a rich literary tradition of the &ldquo;double.&rdquo; The
                  German word
                  <em> Doppelg&auml;nger</em> (literally &ldquo;double walker&rdquo;) was
                  popularised by Jean Paul in 1796. Key predecessors include James Hogg&apos;s{' '}
                  <em>The Private Memoirs and Confessions of a Justified Sinner</em> (1824),
                  Poe&apos;s &ldquo;William Wilson&rdquo; (1839), and Dostoevsky&apos;s{' '}
                  <em>The Double</em> (1846). Stevenson&apos;s innovation is making the double
                  literally inhabit the same body rather than being a separate figure, internalising
                  the horror and making duality a physical as well as psychological reality.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Science and Ethics`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Victorian era saw rapid scientific advancement, raising questions about the
                  moral limits of experimentation. Jekyll&apos;s experiment echoes concerns about
                  vivisection, new chemical compounds, and scientific hubris. Lanyon&apos;s
                  dismissal of Jekyll&apos;s work as &ldquo;unscientific balderdash&rdquo; reflects
                  the conservative scientific establishment&apos;s resistance to radical ideas,
                  while Jekyll&apos;s downfall warns against science unchecked by ethics.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── STRUCTURE */}
        <div id="structure">
          <Section title={tr(`Narrative Structure`)} icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  Mystery Narrative / Detective Structure
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novella is structured as a mystery with Utterson as an amateur detective. The
                  reader pieces together clues alongside Utterson, and the truth is only fully
                  revealed in the final two chapters. This structure mirrors the theme of
                  concealment &mdash; just as Victorian society hides its true nature, the narrative
                  hides its central secret.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Multiple Perspectives and Narrators`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novella uses multiple narrative voices: a third-person narrator following
                  Utterson (Chapters 1&ndash;8), Lanyon&apos;s first-person letter (Chapter 9), and
                  Jekyll&apos;s first-person confession (Chapter 10). This fragmented structure
                  reflects the fragmented identity at the story&apos;s heart. No single narrator has
                  the complete truth &mdash; the reader must assemble it from multiple sources, just
                  as Jekyll&apos;s identity is assembled from multiple selves.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Epistolary Elements`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Letters, wills, and written statements are crucial to the plot. The will,
                  Lanyon&apos;s letter, and Jekyll&apos;s confession are all documents within the
                  narrative. This epistolary element adds authenticity and creates dramatic irony
                  &mdash; the reader learns truths that characters discover only after death.
                  Written documents outlast their authors, giving the dead a voice. The reliance on
                  written testimony also reflects Victorian legal and scientific culture, where
                  documentation carried authority.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Chronological Disruption`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The narrative does not unfold chronologically. Events are revisited from different
                  perspectives: the Carew murder is described by the maid (Chapter 4) and then by
                  Jekyll (Chapter 10). This layering forces the reader to reassess earlier events in
                  light of new revelations, creating a richer, more complex reading experience that
                  mirrors the complexity of human nature itself.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The All-Male World`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Women are almost entirely absent from the novella. The world of Jekyll and Hyde is
                  populated exclusively by professional men. This reflects Victorian homosocial
                  networks but also raises questions about what exactly Jekyll&apos;s
                  &ldquo;pleasures&rdquo; involve. The absence of women intensifies the focus on
                  male identity, repression, and the private lives of seemingly respectable men.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              {tr(
                `Model essay plans for the most frequently examined questions. Each plan includes a thesis, paragraph structure, and suggested quotations.`,
              )}
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  {tr(`How does Stevenson present the theme of duality?`)}
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stevenson uses Jekyll and Hyde to argue that duality is an inescapable part of
                      human nature, and that Victorian society&apos;s insistence on moral purity
                      only makes the &ldquo;darker half&rdquo; more dangerous.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 1 &mdash; Jekyll&apos;s confession`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Man is not truly one, but truly two.&rdquo; Analyse the thesis
                      statement. Link to Victorian expectations of moral consistency. Discuss how
                      Jekyll&apos;s experiment is born from the pressure to appear wholly virtuous.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 2 &mdash; Hyde&apos;s physical appearance`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;He gave an impression of deformity without any nameable
                      malformation.&rdquo; Explore how Hyde&apos;s appearance reflects internal
                      evil. Connect to physiognomy, Darwin, and degeneration anxiety.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 3 &mdash; The setting as duality`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The door, which was equipped with neither bell nor knocker, was
                      blistered and distained.&rdquo; Analyse how Jekyll&apos;s house (grand front /
                      decayed back) physically mirrors duality. Link to the geography of respectable
                      London concealing Soho&apos;s vice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 4 &mdash; Loss of control`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;My devil had been long caged, he came out roaring.&rdquo; Discuss how
                      repression intensifies evil. Argue that Stevenson shows the Victorian attempt
                      to cage the &ldquo;Hyde&rdquo; within everyone leads to catastrophe. Connect
                      to Freud&apos;s theories of the unconscious.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stevenson perhaps suggests that accepting human complexity &mdash; rather than
                      forcing an artificial division &mdash; is the only way to prevent
                      self-destruction. The novella remains relevant because it addresses universal
                      human psychology.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  How does Stevenson present Hyde as a frightening outsider?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tr(
                        `Stevenson presents Hyde as frightening precisely because he cannot be categorised or understood &mdash; he exists outside the boundaries of rational Victorian society, embodying everything it represses.`,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 1 &mdash; Indescribable appearance`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;There is something wrong with his appearance; something displeasing,
                      something downright detestable.&rdquo; Analyse the tricolon and the failure of
                      language to capture Hyde. His horror is beyond rational description, making
                      him a Gothic figure of the sublime.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 2 &mdash; Animalistic and primitive`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Something troglodytic&rdquo; and &ldquo;ape-like fury.&rdquo; Connect
                      Hyde&apos;s primitive nature to Darwinian fears. Hyde is frightening because
                      he represents what Victorians feared they truly were beneath the veneer of
                      civilisation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 3 &mdash; Escalating violence`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;With a transport of glee, I mauled the unresisting body.&rdquo; Trace
                      the escalation from trampling a girl to murder. Hyde grows stronger with each
                      act, suggesting evil feeds on itself. The semantic field of pleasure makes the
                      violence especially disturbing.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 4 &mdash; Hyde as internal, not external`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;He, I say &mdash; I cannot say, I.&rdquo; Argue that Hyde&apos;s
                      greatest horror is that he is not a separate monster but part of Jekyll. The
                      outsider is inside. This subverts the Gothic convention of the external threat
                      and makes the horror inescapable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  {tr(`How does Stevenson explore the theme of repression?`)}
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stevenson uses the Jekyll/Hyde narrative to argue that Victorian repression
                      does not eliminate vice but amplifies it, creating a cycle of concealment and
                      eruption that destroys the individual.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 1 &mdash; Jekyll&apos;s secret pleasures`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I concealed my pleasures&rdquo; and &ldquo;I stood already committed to
                      a profound duplicity of life.&rdquo; Analyse how Jekyll&apos;s concealment is
                      driven by social expectation, not genuine evil. He hides
                      &ldquo;irregularities&rdquo; &mdash; Victorian euphemism for behaviours that
                      are ordinary but socially unacceptable.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 2 &mdash; The caged devil`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;My devil had been long caged, he came out roaring.&rdquo; The metaphor
                      shows that repression intensifies desire. The longer Jekyll suppresses Hyde,
                      the more violent Hyde becomes. Connect to Freud&apos;s theory of the return of
                      the repressed.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 3 &mdash; Secrecy as social norm`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Utterson &ldquo;inclined to Cain&apos;s heresy&rdquo; of letting others go
                      their own way. All characters collude in secrecy. Stevenson shows repression
                      is not individual but systemic &mdash; an entire society built on not asking
                      questions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 4 &mdash; The inevitability of eruption`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I felt younger, lighter, happier in body.&rdquo; When repression
                      finally breaks, the release is intoxicating. Jekyll&apos;s pleasure in
                      becoming Hyde shows that repression creates a dangerous desire for freedom.
                      The tragedy is that this freedom can only be achieved through destruction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  {tr(`How does Stevenson use setting to create atmosphere?`)}
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stevenson uses Victorian London as more than a backdrop &mdash; the city
                      itself embodies duality, with its respectable facades concealing sinister
                      spaces, its fog obscuring moral boundaries, and its geography reflecting the
                      divided self.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 1 &mdash; Jekyll&apos;s house as symbol`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The grand front entrance vs the &ldquo;blistered and distained&rdquo; back
                      door. The house physically represents Jekyll&apos;s divided identity: public
                      respectability at the front, hidden depravity at the rear. The laboratory
                      &mdash; a space of dangerous experimentation &mdash; is deliberately
                      concealed.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 2 &mdash; Fog and darkness`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The fog still slept on the wing above the drowned city.&rdquo; Pathetic
                      fallacy creates Gothic atmosphere. Fog symbolises moral ambiguity and
                      concealment. The &ldquo;chocolate-coloured pall&rdquo; suggests suffocation.
                      London is literally obscured, mirroring the hidden truths of the narrative.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 3 &mdash; Soho`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hyde&apos;s Soho lodgings represent the underside of respectable London. The
                      &ldquo;dismal quarter&rdquo; with its &ldquo;muddy ways&rdquo; and
                      &ldquo;slatternly passengers&rdquo; geographically embodies the vice hidden
                      within the city. That Hyde lives here, with furniture of &ldquo;luxury and
                      good taste,&rdquo; shows respectability and corruption coexisting.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 4 &mdash; Night-time London`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Almost all significant events occur at night. Darkness enables Hyde&apos;s
                      crimes and symbolises the hidden world of Victorian vice. Connect to the
                      real-life anxieties about London at night &mdash; crime, prostitution, and the
                      anonymity that darkness provides.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  {tr(`How does Stevenson present the conflict between science and religion?`)}
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stevenson presents Jekyll&apos;s experiment as a Promethean act that
                      trespasses into God&apos;s domain, reflecting wider Victorian anxieties about
                      whether scientific progress was leading humanity towards enlightenment or
                      damnation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 1 &mdash; Jekyll as Promethean scientist`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Jekyll attempts to separate good from evil &mdash; a power that belongs to
                      God. His experiment echoes Frankenstein&apos;s creation of life. The
                      &ldquo;transcendental medicine&rdquo; combines science with the supernatural,
                      blurring boundaries that Victorian society wanted kept separate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 2 &mdash; Lanyon as orthodox science`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Unscientific balderdash.&rdquo; Lanyon represents mainstream,
                      respectable science. His death after witnessing the transformation suggests
                      that the truth shatters conventional scientific understanding. He describes
                      Hyde in religious terms (&ldquo;the slime of the pit&rdquo;), showing science
                      cannot explain what he has seen.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Religious language throughout
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Satan&apos;s signature,&rdquo; &ldquo;child of Hell,&rdquo;
                      &ldquo;chief of sinners.&rdquo; Characters consistently describe Hyde in
                      biblical terms. This religious framework suggests science has released
                      something diabolical &mdash; that Jekyll has committed a sin, not merely a
                      scientific error.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      {tr(`Paragraph 4 &mdash; Darwin and degeneration`)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Something troglodytic.&rdquo; Hyde&apos;s appearance reflects Darwinian
                      fears about evolution in reverse. Connect to the tension between evolutionary
                      science and religious belief in human beings as God&apos;s creation. Hyde
                      suggests humanity&apos;s animal past is not truly left behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ────────────────────────────────── GRADE 9 POINTS */}
      <div id="grade-9">
        <Section title={tr(`Grade 9 Exemplar Points and Interpretations`)} icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            These higher-level interpretations demonstrate the sophisticated analysis needed for top
            grades. Each goes beyond surface reading to consider authorial intent, alternative
            readings, and structural significance.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. Jekyll as Unreliable Narrator
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A sophisticated reading questions whether Jekyll&apos;s &ldquo;Full Statement&rdquo;
                is entirely honest. He frames himself as a victim: &ldquo;It was Hyde, after all,
                and Hyde alone, that was guilty.&rdquo; But this is self-serving. Jekyll created
                Hyde, chose to become him, and experienced pleasure in doing so. His confession is
                an exercise in blame-shifting &mdash; he uses the language of scientific detachment
                to distance himself from his own actions. A Grade 9 response might argue that
                Jekyll&apos;s statement is not a confession but a defence, and that Stevenson
                deliberately makes the reader question whether Jekyll is truly penitent or merely
                performing penitence.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. Hyde as Liberation, Not Just Horror
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lower-grade answers treat Hyde purely as a monster. A sophisticated reading
                acknowledges that Jekyll&apos;s first transformation is described in terms of
                freedom and pleasure: &ldquo;I felt younger, lighter, happier in body.&rdquo; This
                complicates the moral framework &mdash; Hyde is not experienced as evil by the
                person within him. Stevenson suggests that the appeal of vice is precisely what
                makes it dangerous. Hyde represents not just evil but the intoxicating freedom from
                social constraint. This makes the novella a far more nuanced critique of Victorian
                morality: it is not that repressed desires are inherently wicked, but that
                repressing them creates a dangerous craving for release.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. The Failure of Rationality
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Utterson is the embodiment of rational Victorian masculinity. He investigates
                methodically, suppresses emotion, and trusts evidence. Yet he fails completely to
                uncover the truth. The mystery is solved not through rational investigation but
                through written confessions discovered after death. Stevenson suggests that the
                rational, empirical mindset that Victorians prized cannot comprehend the irrational
                depths of human nature. Lanyon, another man of science, dies from the shock of
                witnessing the irrational. The novella argues that some truths are beyond reason
                &mdash; a deeply unsettling message for a society that worshipped rationality.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. The Impure Salt as Anti-Determinism
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Jekyll discovers that his original chemicals contained an unknown impurity that was
                essential to the transformation. He cannot replicate it. This seemingly minor plot
                detail carries enormous thematic weight: it suggests that the experiment was never
                fully under scientific control. The transformation depended on an accident, an
                impurity &mdash; something unplanned and unrepeatable. This undermines the
                deterministic, mechanistic worldview of Victorian science. The universe contains
                elements that cannot be predicted, controlled, or replicated. Stevenson uses this
                detail to argue that humanity&apos;s attempt to master nature through science is
                fundamentally flawed.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. &ldquo;He, I say &mdash; I cannot say, I&rdquo; as the Novella&apos;s Thesis
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                This single sentence encapsulates the novella&apos;s entire philosophical argument.
                Jekyll cannot decide whether Hyde is &ldquo;he&rdquo; (a separate person) or
                &ldquo;I&rdquo; (himself). The grammatical confusion mirrors the metaphysical
                crisis: the boundary between self and other has dissolved. Language itself breaks
                down because identity has broken down. A Grade 9 response might argue that this is
                the most important sentence in the novella &mdash; the moment where Stevenson&apos;s
                exploration of duality moves from theme to form, where the content and the style
                become one.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                6. Stevenson&apos;s Critique of Victorian Masculinity
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novella&apos;s all-male world is not accidental but thematically significant.
                These men socialise through dinner parties and walks, communicate through formal
                letters, and express care through silent loyalty. Emotional expression is entirely
                absent. Stevenson shows that Victorian masculine norms &mdash; restraint,
                discretion, never discussing the personal &mdash; create the very conditions for
                Jekyll&apos;s tragedy. The men around Jekyll could have helped him if they had asked
                direct questions, but their code of gentlemanly discretion prevents it. Stevenson
                argues that a society that forbids men from being emotionally honest will produce
                men who are secretly monstrous.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. The Novella as Addiction Narrative
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Jekyll&apos;s relationship with Hyde follows the pattern of addiction: initial
                pleasure, increasing tolerance, loss of control, failed attempts to stop, and
                eventual destruction. &ldquo;I felt younger, lighter, happier&rdquo; describes the
                first &ldquo;high.&rdquo; The involuntary transformations are withdrawal and
                relapse. The depleting chemical supply parallels a diminishing drug supply. This
                reading does not diminish the novella&apos;s other themes but adds a layer of
                psychological realism that explains why Jekyll cannot simply choose to stop, even
                when he knows the consequences.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. The Ending as Anti-Resolution
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Jekyll&apos;s statement ends mid-sentence, or at least at the point where Jekyll
                ceases to exist: &ldquo;I bring the life of that unhappy Henry Jekyll to an
                end.&rdquo; There is no moral conclusion, no redemption, no lesson learned. Utterson
                presumably reads both letters, but we never see his response. The novella refuses to
                provide the comfort of closure. Stevenson denies the Victorian expectation of a
                moral resolution, leaving the reader with unresolved questions about identity,
                morality, and the nature of evil. This open ending is a radical formal choice that
                mirrors the novella&apos;s refusal to offer easy answers about human nature.
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
          <div className="space-y-3">
            {[
              {
                q: 'How does Stevenson present the theme of duality in the novella? Refer to the whole text in your answer.',
                marks: 30,
              },
              {
                q: 'How does Stevenson use the character of Hyde to explore ideas about evil?',
                marks: 30,
              },
              { q: 'How does Stevenson present Victorian society as hypocritical?', marks: 30 },
              {
                q: 'Starting with the extract, explore how Stevenson creates a sense of mystery and suspense.',
                marks: 30,
              },
              { q: 'How does Stevenson use setting to reflect the theme of duality?', marks: 30 },
              {
                q: 'How does Stevenson present the relationship between science and morality?',
                marks: 30,
              },
              {
                q: 'How does Stevenson use the character of Utterson to explore the theme of secrecy?',
                marks: 30,
              },
              {
                q: 'How does Stevenson present ideas about repression and its consequences?',
                marks: 30,
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

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">{tr(`Exam Tips for Jekyll and Hyde`)}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always link to context.`)}</strong> Connect Jekyll&apos;s experiment to
              Victorian anxieties about science, evolution, and repression.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Stevenson&apos;s methods.`)}</strong> Discuss symbolism (the door,
              fog, the cane), structure (multiple narrators), and language techniques (pathetic
              fallacy, semantic fields).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to the writer&apos;s intentions.`)}</strong> &ldquo;Stevenson
              perhaps suggests...&rdquo; or &ldquo;Stevenson uses Hyde to critique...&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Link multiple themes.`)}</strong> Every quote should connect to at least
              two themes. For example, Hyde&apos;s violence connects to duality, repression, and the
              limits of science.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> Refer to &ldquo;novella&rdquo; not
              &ldquo;novel,&rdquo; &ldquo;semantic field&rdquo; not &ldquo;word choice,&rdquo;
              &ldquo;pathetic fallacy&rdquo; not &ldquo;weather.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole novella.`)}</strong> Don&apos;t focus only on the
              extract &mdash; reference other chapters to show knowledge of the text as a whole.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`The Strange Case of Dr Jekyll and Mr Hyde`)}</em> by Robert Louis Stevenson was
          first published in 1886. Stevenson died in 1894 and the text is in the{' '}
          <strong>public domain</strong>. All quotations on this page are reproduced from the
          original novella.
        </p>
      </footer>
    </>
  )
}
