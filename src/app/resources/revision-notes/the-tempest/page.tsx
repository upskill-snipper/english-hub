'use client'

import { useState } from 'react'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
/* ─── Expandable Section Component ──────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = 'bg-primary',
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  badge?: string
  colour?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
          {children}
        </div>
      )}
    </div>
  )
}

function Quote({
  text,
  speaker,
  act,
  analysis,
}: {
  text: string
  speaker: string
  act: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10/40 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {speaker} &mdash; {act}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function TheTempestRevisionPage() {
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
          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
            Shakespeare
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            CAIE
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            OCR
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Tempest &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE English Literature exam. Scene-by-scene plot, 10
          character profiles, 6 key themes with evidence, 20+ quotations with analysis, historical
          context, and essay planning.
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
            'Context',
            'Essay Planning',
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

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section
          id="plot"
          title={tr(`Scene-by-Scene Plot Summary`)}
          badge="9 Scenes"
          colour="bg-blue-600"
          defaultOpen
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  1
                </span>
                Act 1, Scene 1 &mdash; The Storm
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A violent tempest threatens to destroy a ship carrying Alonso (King of Naples), his
                son Ferdinand, Antonio (the usurping Duke of Milan), Sebastian, Gonzalo, and others.
                The Boatswain&apos;s authority over the nobles during the storm introduces the theme
                of power: rank means nothing against nature. The ship appears to break apart. This
                opening scene immediately establishes the play&apos;s central concerns with power,
                social hierarchy, and the natural world.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    &bull; The Boatswain challenges the nobles: &ldquo;What cares these roarers for
                    the name of king?&rdquo;
                  </li>
                  <li>&bull; Social hierarchy collapses under the force of nature</li>
                  <li>
                    &bull; Gonzalo&apos;s patience contrasts with Antonio and Sebastian&apos;s
                    arrogance
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  2
                </span>
                Act 1, Scene 2 &mdash; Prospero&apos;s Story
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                On the island, Prospero reveals to Miranda that he caused the storm using magic. He
                tells their history: twelve years ago, his brother Antonio usurped his dukedom with
                Alonso&apos;s help, setting Prospero and the infant Miranda adrift. They survived
                thanks to Gonzalo, who secretly provided supplies and Prospero&apos;s precious
                books. Prospero has spent twelve years mastering magic. He summons Ariel, a spirit
                bound to his service, who confirms everyone survived the shipwreck. Prospero also
                commands Caliban, the island&apos;s native inhabitant, whom he has enslaved.
                Ferdinand, separated from the others, meets Miranda and they fall in love instantly.
                Prospero pretends to distrust Ferdinand and imprisons him as part of his plan.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Prospero&apos;s exposition: backstory of usurpation and exile</li>
                  <li>&bull; Ariel&apos;s first appearance and plea for freedom (1.2)</li>
                  <li>
                    &bull; Caliban&apos;s claim: &ldquo;This island&apos;s mine, by Sycorax my
                    mother&rdquo; (1.2)
                  </li>
                  <li>&bull; Ferdinand and Miranda&apos;s love at first sight (1.2)</li>
                  <li>&bull; &ldquo;Hell is empty, and all the devils are here&rdquo; (1.2)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  3
                </span>
                Act 2, Scene 1 &mdash; The Nobles on the Island
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The shipwrecked nobles explore the island. Gonzalo optimistically imagines a utopian
                commonwealth without property, class, or labour; Antonio and Sebastian mock him.
                Ariel uses magic to put everyone except Antonio and Sebastian to sleep. Antonio
                tempts Sebastian to murder the sleeping Alonso and seize the throne of Naples,
                mirroring his own usurpation of Prospero. They draw swords, but Ariel wakes Gonzalo
                just in time, preventing the assassination.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    &bull; Gonzalo&apos;s utopian speech (drawn from Montaigne&apos;s &ldquo;Of
                    Cannibals&rdquo;)
                  </li>
                  <li>
                    &bull; Antonio&apos;s temptation of Sebastian &mdash; repeating the cycle of
                    usurpation
                  </li>
                  <li>&bull; Ariel&apos;s invisible intervention saves Alonso&apos;s life</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  4
                </span>
                Act 2, Scene 2 &mdash; Caliban, Stephano, and Trinculo
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Caliban encounters Trinculo (a jester) and Stephano (a drunken butler). Caliban,
                mistaking Stephano&apos;s wine for divine power, pledges to serve him and offers to
                show him the island&apos;s resources. He sings &ldquo;No more dams I&apos;ll make
                for fish&rdquo; in celebration of what he believes is liberation from Prospero. The
                comic subplot parodies the main plot&apos;s themes of power, colonialism, and
                servitude, showing how the desire for mastery repeats across social classes.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    &bull; Caliban&apos;s &ldquo;freedom song&rdquo; &mdash; ironic, as he
                    immediately adopts a new master
                  </li>
                  <li>
                    &bull; Trinculo considers exhibiting Caliban in England &mdash; colonial
                    exploitation
                  </li>
                  <li>
                    &bull; Stephano&apos;s pretension to kingship satirises European claims of
                    superiority
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  5
                </span>
                Act 3, Scene 1 &mdash; Ferdinand and Miranda
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ferdinand carries logs as punishment from Prospero but willingly endures the labour
                for Miranda&apos;s sake. Miranda offers to carry the logs for him, and they declare
                their love, agreeing to marry. Prospero, watching secretly, approves. The scene
                contrasts Ferdinand&apos;s willing service with Caliban&apos;s resentful slavery,
                suggesting that love transforms labour from oppression into devotion.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Ferdinand&apos;s willing servitude &mdash; love vs forced labour</li>
                  <li>&bull; Miranda&apos;s agency in proposing marriage</li>
                  <li>
                    &bull; Prospero&apos;s hidden approval &mdash; still controlling from behind the
                    scenes
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  6
                </span>
                Act 3, Scene 2 &mdash; The Assassination Plot
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Caliban persuades the increasingly drunk Stephano to kill Prospero and become king
                of the island, with Miranda as his queen. Ariel, invisible, disrupts their plotting
                by imitating Trinculo&apos;s voice. Despite the comic tone, the scene seriously
                parallels Antonio&apos;s usurpation and the Sebastian plot, showing how the desire
                for power repeats at every social level. Caliban also delivers his most beautiful
                speech: &ldquo;Be not afeard; the isle is full of noises.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Caliban&apos;s murder plot mirrors Antonio&apos;s usurpation</li>
                  <li>
                    &bull; &ldquo;Be not afeard&rdquo; speech &mdash; Caliban&apos;s poetry and
                    sensitivity (3.2)
                  </li>
                  <li>
                    &bull; Ariel&apos;s invisible disruption &mdash; Prospero&apos;s unseen control
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  7
                </span>
                Act 3, Scene 3 &mdash; The Banquet
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The weary nobles encounter a magical banquet laid by spirits. When they reach for
                the food, Ariel appears as a harpy and denounces Alonso, Antonio, and Sebastian as
                &ldquo;three men of sin.&rdquo; The banquet vanishes. Alonso, overcome with guilt,
                believes Ferdinand&apos;s death is divine punishment for helping Antonio usurp
                Prospero. Antonio and Sebastian remain defiant, refusing to repent.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Ariel as harpy &mdash; instrument of divine justice</li>
                  <li>&bull; The vanishing banquet &mdash; illusory nature of power and wealth</li>
                  <li>
                    &bull; Alonso&apos;s guilt vs Antonio&apos;s defiance &mdash; contrasting
                    responses to judgement
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  8
                </span>
                Act 4, Scene 1 &mdash; The Masque
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Prospero blesses Ferdinand and Miranda&apos;s engagement with a masque (a court
                entertainment) performed by spirits playing Iris, Ceres, and Juno. The masque
                celebrates fertility, harvest, and harmony, but is abruptly interrupted when
                Prospero remembers Caliban&apos;s assassination plot. Prospero delivers his famous
                &ldquo;Our revels now are ended&rdquo; speech, reflecting on the transience of all
                things. He then summons spirit-hounds to chase and punish Caliban, Stephano, and
                Trinculo.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The masque &mdash; Jacobean court entertainment celebrating order</li>
                  <li>
                    &bull; &ldquo;Our revels now are ended&rdquo; speech &mdash; transience of life
                    and art (4.1)
                  </li>
                  <li>&bull; &ldquo;We are such stuff as dreams are made on&rdquo; (4.1)</li>
                  <li>&bull; Caliban, Stephano, and Trinculo punished with spirit-hounds</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-700 dark:text-blue-300">
                  9
                </span>
                Act 5, Scene 1 &amp; Epilogue &mdash; Resolution and Renunciation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ariel reports that the nobles are imprisoned and distressed, especially Alonso.
                Prospero, moved by Ariel&apos;s compassion (&ldquo;Mine would, sir, were I
                human&rdquo;), chooses forgiveness over revenge: &ldquo;The rarer action is in
                virtue than in vengeance.&rdquo; He releases the nobles from their spell. Alonso
                repents and restores Prospero&apos;s dukedom. Prospero reveals Ferdinand and Miranda
                playing chess. He frees Ariel, pardons Caliban, and renounces his magic, breaking
                his staff and drowning his book. In the Epilogue, he asks the audience to set him
                free with their applause.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {tr(`Key Moments`)}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Ariel&apos;s compassion prompts Prospero&apos;s forgiveness (5.1)</li>
                  <li>
                    &bull; &ldquo;The rarer action is in virtue than in vengeance&rdquo; &mdash;
                    moral climax (5.1)
                  </li>
                  <li>&bull; &ldquo;This thing of darkness I acknowledge mine&rdquo; (5.1)</li>
                  <li>
                    &bull; Miranda: &ldquo;O brave new world, that has such people in&apos;t!&rdquo;
                    (5.1)
                  </li>
                  <li>
                    &bull; Prospero breaks his staff and drowns his book &mdash; renunciation of
                    power
                  </li>
                  <li>&bull; Epilogue: the audience must &ldquo;set me free&rdquo;</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section
            id="characters"
            title={tr(`Character Profiles`)}
            badge="10 Characters"
            colour="bg-purple-600"
          >
            <div className="space-y-8">
              {/* Prospero */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Prospero
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The rightful Duke of Milan and the play&apos;s controlling figure. Prospero is a
                  complex, morally ambiguous character: he is a wronged man seeking justice, but
                  also a colonial master who enslaves Caliban and controls Ariel through emotional
                  manipulation and threats. His magic gives him absolute power over the island and
                  its inhabitants, raising questions about the ethics of authority. His decision to
                  choose forgiveness over vengeance in Act 5 is the play&apos;s moral climax, though
                  some critics argue his &ldquo;forgiveness&rdquo; is still controlling (he dictates
                  the terms). His renunciation of magic (&ldquo;this rough magic I here
                  abjure&rdquo;) is widely read as Shakespeare&apos;s own farewell to the theatre.
                  Prospero is simultaneously a loving father, a vengeful exile, a colonial
                  oppressor, and an artist figure.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Our revels now are ended. These our actors, / As I foretold you, were all spirits and / Are melted into air, into thin air"
                    speaker="Prospero"
                    act="Act 4, Scene 1"
                    analysis="Prospero's most famous speech. The metatheatrical language ('actors', 'revels') invites the audience to see Shakespeare reflecting on his own art. 'Melted into air' applies equally to spirits, theatrical illusion, and human life. The speech moves from the specific (the masque) to the universal ('the great globe itself')."
                  />
                  <Quote
                    text="The rarer action is / In virtue than in vengeance"
                    speaker="Prospero"
                    act="Act 5, Scene 1"
                    analysis="The play's moral turning point. Prospero chooses forgiveness over revenge, redefining 'rare' (admirable) action as mercy rather than punishment. This is significant because Prospero has the power to destroy his enemies; his forgiveness is meaningful precisely because vengeance is available."
                  />
                </div>
              </div>

              {/* Miranda */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Miranda
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Prospero&apos;s daughter, raised on the island since infancy. Miranda represents
                  innocence and compassion: her response to the shipwreck (&ldquo;O, I have suffered
                  with those that I saw suffer!&rdquo;) shows instinctive empathy. Her famous
                  exclamation &ldquo;O brave new world&rdquo; is poignantly ironic, as the
                  &ldquo;brave new world&rdquo; contains the men who betrayed her father. She is the
                  only female character in the play, and her role is largely defined by her
                  relationships with men (Prospero, Ferdinand, Caliban). Modern productions often
                  explore whether she is a passive pawn in Prospero&apos;s schemes or a young woman
                  beginning to assert her independence.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="O, I have suffered / With those that I saw suffer!"
                    speaker="Miranda"
                    act="Act 1, Scene 2"
                    analysis="Miranda's opening lines establish her as the play's embodiment of compassion. The active verb 'suffered' reveals instinctive morality that contrasts with the calculated cruelty of Antonio and Sebastian. Her empathy for strangers is remarkable given her isolated upbringing."
                  />
                  <Quote
                    text="O brave new world, / That has such people in't!"
                    speaker="Miranda"
                    act="Act 5, Scene 1"
                    analysis="Deeply ironic: the 'people' she admires include a usurper (Antonio) and a would-be murderer (Sebastian). Prospero's dry response ('Tis new to thee') undercuts her idealism. The phrase captures the gap between innocent perception and experienced knowledge."
                  />
                </div>
              </div>

              {/* Ariel */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Ariel
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A spirit of air who serves Prospero in exchange for eventual freedom. Ariel was
                  imprisoned in a pine tree by the witch Sycorax and freed by Prospero, who then
                  bound Ariel to his own service. Ariel is androgynous, shape-shifting, and capable
                  of great power (controlling the tempest, becoming a harpy, creating the masque).
                  The Prospero-Ariel relationship raises questions about exploitation disguised as
                  benevolence: Ariel serves willingly but constantly asks for freedom. Crucially, it
                  is Ariel who prompts Prospero&apos;s decision to forgive by expressing pity for
                  the nobles. A non-human spirit teaches the human master compassion.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Full fathom five thy father lies; / Of his bones are coral made; / Those are pearls that were his eyes"
                    speaker="Ariel"
                    act="Act 1, Scene 2"
                    analysis="Ariel's song to Ferdinand about his supposedly drowned father is hauntingly beautiful. The transformation of the body into coral and pearls suggests a 'sea-change' that elevates death into art. The song is a lie (Alonso is alive), capturing the play's theme of transformation."
                  />
                  <Quote
                    text="Mine would, sir, were I human"
                    speaker="Ariel"
                    act="Act 5, Scene 1"
                    analysis="When asked if he would feel compassion for the suffering nobles, Ariel says even he, a spirit, would feel pity. This prompts Prospero's forgiveness. The irony is devastating: a non-human being has to teach humanity to the most powerful human on the island."
                  />
                </div>
              </div>

              {/* Caliban */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Caliban
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The son of the witch Sycorax, Caliban is the island&apos;s original inhabitant.
                  His name is likely an anagram of &ldquo;cannibal&rdquo; (from Montaigne&apos;s
                  essay &ldquo;Of Cannibals&rdquo;). Prospero enslaved Caliban after Caliban
                  attempted to assault Miranda, though Caliban claims the island is rightfully his.
                  He is the play&apos;s most debated character: is he a savage who deserves
                  subjugation, or an indigenous person dispossessed by a coloniser? His language is
                  some of the play&apos;s most beautiful (&ldquo;Be not afeard; the isle is full of
                  noises&rdquo;), proving that Prospero&apos;s &ldquo;civilising&rdquo; education
                  gave him poetry as well as servitude. Post-colonial readings see him as a symbol
                  of colonised peoples taught the coloniser&apos;s language to serve the
                  coloniser&apos;s purposes.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="You taught me language, and my profit on't / Is I know how to curse"
                    speaker="Caliban"
                    act="Act 1, Scene 2"
                    analysis="Caliban turns Prospero's 'gift' of language into a weapon. 'Profit' is bitterly ironic: education has brought not advancement but the ability to articulate oppression. Post-colonial critics read this as the colonised subject using the master's language to resist."
                  />
                  <Quote
                    text="Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not"
                    speaker="Caliban"
                    act="Act 3, Scene 2"
                    analysis="Caliban's most beautiful speech. The gentleness of 'hurt not' and the sensory richness reveal poetic sensitivity that contradicts Prospero's dismissal of him as a brute. The 'monster' has more capacity for wonder than the 'civilised' Europeans."
                  />
                </div>
              </div>

              {/* Ferdinand */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Ferdinand
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Alonso&apos;s son and Miranda&apos;s love interest. Ferdinand is noble, loyal, and
                  willing to undergo hardship for love. His willing submission to Prospero&apos;s
                  log-carrying punishment contrasts with Caliban&apos;s forced servitude, suggesting
                  that love makes labour meaningful. His chess game with Miranda in Act 5 symbolises
                  a relationship of playful equality. Ferdinand&apos;s role resolves the political
                  plot (uniting Milan and Naples through marriage) and embodies the ideal of
                  honourable young love that earns its reward through patience and virtue.
                </p>
                <Quote
                  text="Might I but through my prison once a day / Behold this maid: all corners else o' th' earth / Let liberty make use of"
                  speaker="Ferdinand"
                  act="Act 1, Scene 2"
                  analysis="Ferdinand would trade all the world's freedom to see Miranda daily. 'Prison' becomes desirable when love is present -- a radical redefinition of freedom and imprisonment that subverts the play's central theme. Love transforms captivity into willing devotion."
                />
              </div>

              {/* Gonzalo */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Gonzalo
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  An honest old councillor who secretly helped Prospero and Miranda survive their
                  exile by providing food, water, and Prospero&apos;s books. Gonzalo is the
                  play&apos;s moral compass: optimistic, compassionate, and loyal. His utopian
                  speech about an ideal commonwealth (Act 2, Scene 1), drawn from Montaigne, is
                  mocked by Antonio and Sebastian, but it articulates genuine ideals of equality and
                  natural living. Gonzalo&apos;s goodness is consistent and uncomplicated, making
                  him a contrast to the morally ambiguous Prospero.
                </p>
                <Quote
                  text="I' th' commonwealth I would by contraries / Execute all things"
                  speaker="Gonzalo"
                  act="Act 2, Scene 1"
                  analysis="Gonzalo's utopian vision (from Montaigne's 'Of Cannibals') imagines society without property, class, or labour. The paradox that Gonzalo would be 'king' of a society with no sovereignty reveals the difficulty of imagining true equality within existing power structures."
                />
              </div>

              {/* Antonio */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Antonio
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Prospero&apos;s brother, who usurped the dukedom of Milan. Antonio is the
                  play&apos;s most conventionally villainous character: he shows no remorse, even
                  when confronted by Prospero in Act 5. He corrupts Sebastian with the same
                  temptation he himself succumbed to, attempting to repeat the cycle of usurpation.
                  Notably, Antonio never speaks after Prospero&apos;s forgiveness; his silence can
                  be interpreted as shame, defiance, or continued scheming. Shakespeare leaves his
                  reformation deliberately ambiguous, suggesting that forgiveness does not guarantee
                  change.
                </p>
                <Quote
                  text="What's past is prologue"
                  speaker="Antonio"
                  act="Act 2, Scene 1"
                  analysis="Antonio uses this phrase to justify his plot to murder Alonso -- the past merely sets the scene for what comes next. Ironically, it also describes the play's structure: Prospero's past usurpation is the prologue that drives the entire plot towards resolution."
                />
              </div>

              {/* Sebastian */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Sebastian
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Alonso&apos;s brother, who is tempted by Antonio to murder the sleeping king and
                  seize the throne of Naples. Sebastian is a weaker version of Antonio: he needs
                  persuading and lacks Antonio&apos;s initiative. His readiness to murder his
                  brother mirrors Antonio&apos;s betrayal of Prospero, showing how the cycle of
                  usurpation repeats. Like Antonio, he remains silent after Prospero&apos;s
                  revelation in Act 5, leaving his moral status uncertain. He represents how easily
                  corruption spreads when ambition meets opportunity.
                </p>
              </div>

              {/* Stephano */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Stephano
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Alonso&apos;s drunken butler who believes he can become king of the island. His
                  relationship with Caliban parodies colonial power dynamics: Caliban trades one
                  master for another, mistaking alcohol for divine power. Stephano&apos;s
                  pretensions to kingship satirise the idea that European &ldquo;civilisation&rdquo;
                  is inherently superior. The comic subplot he leads (with Trinculo and Caliban)
                  mirrors the serious power struggles of the main plot, proving that the desire for
                  dominance is universal, not confined to the noble classes.
                </p>
              </div>

              {/* Trinculo */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Trinculo
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Alonso&apos;s jester, who joins Stephano&apos;s farcical plot to overthrow
                  Prospero. Trinculo&apos;s initial reaction to Caliban is to consider exhibiting
                  him as a curiosity in England, reflecting real Elizabethan and Jacobean practices
                  of displaying indigenous people for profit. His role is primarily comic, but his
                  casual commodification of Caliban carries serious colonial undertones, revealing
                  how European attitudes reduce other peoples to spectacle and commodity.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title={tr(`Major Themes`)} badge="6 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Power and Control */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Power and Control
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Power operates at every level: Prospero controls the island through magic; Antonio
                  seized power through political betrayal; Stephano attempts to claim power through
                  alcohol and violence; Caliban resists Prospero&apos;s authority. Shakespeare
                  examines whether power can ever be exercised justly. Prospero&apos;s absolute
                  control raises uncomfortable questions: his &ldquo;benevolent&rdquo; rule still
                  involves enslavement (Caliban) and coercion (Ariel, Ferdinand). The play suggests
                  that the ethical exercise of power requires self-limitation: Prospero must
                  renounce his magic to become a just ruler again. Power without restraint, whether
                  political (Antonio) or magical (Prospero), corrupts human relationships.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I'll break my staff, / Bury it certain fathoms in the earth, / And deeper than did ever plummet sound / I'll drown my book"
                    speaker="Prospero"
                    act="Act 5, Scene 1"
                    analysis="Prospero destroys both instruments of his power. 'Deeper than did ever plummet sound' conveys unfathomable depth -- magic is put permanently beyond reach. To become fully human and govern justly, Prospero must become powerless. Power must be voluntarily surrendered, not seized."
                  />
                  <Quote
                    text="This island's mine, by Sycorax my mother, / Which thou tak'st from me"
                    speaker="Caliban"
                    act="Act 1, Scene 2"
                    analysis="Caliban asserts indigenous land rights using inheritance logic. His claim is legally and morally coherent. This line is central to colonial readings: the 'civilised' Prospero is also a dispossessor. Caliban's articulation of injustice challenges the claim that he lacks rational thought."
                  />
                </div>
              </div>

              {/* Colonialism */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Colonialism
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Written during the early period of British colonisation, the play directly engages
                  with colonial ideology. Prospero&apos;s arrival on Caliban&apos;s island mirrors
                  European colonisation of the Americas: he claims the land, dispossesses its native
                  inhabitant, and justifies subjugation through claims of cultural superiority. He
                  &ldquo;civilises&rdquo; Caliban by teaching him language, then uses that education
                  to command him. Caliban&apos;s response is iconic: &ldquo;You taught me language,
                  and my profit on&apos;t is I know how to curse.&rdquo; Trinculo&apos;s desire to
                  exhibit Caliban in England and Stephano&apos;s pretension to kingship further
                  satirise colonial attitudes. However, Shakespeare complicates simple readings:
                  Caliban&apos;s attempted assault on Miranda suggests he is not an uncomplicated
                  &ldquo;noble savage.&rdquo; Post-colonial critics debate whether the play endorses
                  or critiques colonial ideology.
                </p>
                <Quote
                  text="When thou didst not, savage, / Know thine own meaning, but wouldst gabble like / A thing most brutish, I endow'd thy purposes / With words that made them known"
                  speaker="Prospero (to Caliban)"
                  act="Act 1, Scene 2"
                  analysis="Prospero justifies colonisation through the 'gift' of language. 'Savage' and 'brutish' dehumanise Caliban. 'Endow'd' implies generosity, masking the reality that language was taught as a tool of control. This speech captures the rhetoric colonisers used to justify subjugation."
                />
              </div>

              {/* Magic and the Supernatural */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  Magic and the Supernatural
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Prospero&apos;s magic is the mechanism through which all events occur: the
                  tempest, the enchantments, the masque, and the final resolution. Magic represents
                  both art and power. Prospero&apos;s books are the source of his authority (Caliban
                  knows that without his books, &ldquo;he&apos;s but a sot&rdquo;). The masque in
                  Act 4 is explicitly theatrical magic, blurring the line between sorcery and
                  stagecraft. When Prospero breaks his staff and drowns his book, he renounces both
                  magical and artistic power. The Epilogue, where he asks to be
                  &ldquo;released&rdquo; with applause, makes the metatheatrical connection
                  explicit: the playwright, like the magician, depends on the audience&apos;s
                  willing participation. This is the play&apos;s most sustained metaphor.
                </p>
                <Quote
                  text="Now my charms are all o'erthrown, / And what strength I have's mine own, / Which is most faint"
                  speaker="Prospero"
                  act="Epilogue"
                  analysis="The boundary between character and actor dissolves. Stripped of magic, Prospero asks the audience for freedom. 'What strength I have's mine own, which is most faint' is a humbling admission of human vulnerability. If Prospero is Shakespeare, this is the playwright acknowledging that without theatre's 'magic', he is merely a man."
                />
              </div>

              {/* Freedom vs Imprisonment */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal-500" />
                  Freedom versus Imprisonment
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Almost every character experiences imprisonment: Ariel was trapped in a tree by
                  Sycorax and is now bound to Prospero; Caliban is enslaved; Ferdinand is
                  imprisoned; the nobles are enchanted and immobilised; even Prospero is exiled on
                  the island. Freedom is the play&apos;s most desired commodity: Ariel constantly
                  requests it, Caliban sings about it, Ferdinand endures servitude to win it. The
                  play asks what freedom truly means: Caliban exchanges Prospero for Stephano and
                  calls it liberty; Ariel&apos;s freedom depends on completing Prospero&apos;s
                  demands. True freedom may only come through the Epilogue, when Prospero asks the
                  audience to &ldquo;set me free,&rdquo; suggesting that release requires the
                  generosity of others.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="No more dams I'll make for fish; / Nor fetch in firing / At requiring; / Nor scrape trenchering, nor wash dish"
                    speaker="Caliban"
                    act="Act 2, Scene 2"
                    analysis="Caliban's freedom song catalogues his servile tasks. The domestic specificity makes his servitude concrete. The joyful rhythm celebrates liberation, but the irony is devastating: he immediately pledges himself to Stephano, exchanging one master for another."
                  />
                  <Quote
                    text="I must be here confined by you, / Or sent to Naples"
                    speaker="Prospero"
                    act="Epilogue"
                    analysis="The island becomes the stage; the 'spell' is the theatrical illusion. The audience must choose to end the play and free the actor. This makes spectators active participants in the final act of liberation, mirroring the play's theme of freedom requiring others' generosity."
                  />
                </div>
              </div>

              {/* Forgiveness */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Forgiveness and Reconciliation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s climax is not a battle but a choice: Prospero decides to forgive
                  rather than punish. &ldquo;The rarer action is in virtue than in vengeance&rdquo;
                  reframes strength as mercy rather than retribution. However, the quality of
                  Prospero&apos;s forgiveness is debatable. He forgives Alonso, who repents, but
                  also &ldquo;forgives&rdquo; Antonio, who shows no remorse. His forgiveness of
                  Caliban is grudging (&ldquo;this thing of darkness I acknowledge mine&rdquo;).
                  Shakespeare presents forgiveness as necessary but imperfect: it does not undo the
                  past, guarantee change, or resolve all conflicts. The play ends with
                  reconciliation but also with silence (Antonio) and ambiguity (Caliban&apos;s
                  future).
                </p>
                <Quote
                  text="This thing of darkness I / Acknowledge mine"
                  speaker="Prospero"
                  act="Act 5, Scene 1"
                  analysis="One of the play's most ambiguous lines. On one level, he claims ownership (Caliban is his slave). On another, he acknowledges responsibility for Caliban's condition. Psychologically, 'this thing of darkness' can be read as Prospero accepting his own shadow self: the capacity for cruelty he shares with Caliban."
                />
              </div>

              {/* Nature vs Nurture */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Nature versus Nurture
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The debate about whether character is innate or learned centres on Caliban.
                  Prospero claims Caliban is naturally savage: &ldquo;A devil, a born devil, on
                  whose nature nurture can never stick.&rdquo; But this view is complicated by
                  Caliban&apos;s beautiful poetry, his capacity for wonder, and the fact that he
                  learned both language and cruelty from Prospero. Miranda, raised in isolation, is
                  instinctively compassionate, but she has also been shaped by her father&apos;s
                  teaching. Ferdinand&apos;s nobility may be innate or the product of his royal
                  upbringing. The play does not resolve the question: it dramatises its complexity,
                  showing that &ldquo;civilisation&rdquo; can corrupt as well as elevate.
                </p>
                <Quote
                  text="A devil, a born devil, on whose nature / Nurture can never stick"
                  speaker="Prospero"
                  act="Act 4, Scene 1"
                  analysis="Prospero insists Caliban is inherently savage, incapable of learning. But the play contradicts this: Caliban's poetry and emotional depth prove 'nurture' did 'stick'. Prospero's claim reveals more about his need to justify enslavement than about Caliban's actual nature."
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section
            id="quotations"
            title={tr(`Key Quotations`)}
            badge="20+ Quotes"
            colour="bg-amber-600"
          >
            <p className="text-sm text-muted-foreground mb-4">
              These are the most important quotations to learn. Each can be applied to multiple
              themes and characters. Organised by speaker.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Prospero</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I have done nothing but in care of thee"
                    speaker="Prospero"
                    act="Act 1, Scene 2"
                    analysis="Prospero justifies his actions by framing everything as paternal care for Miranda. But the line also reveals his controlling nature: he positions himself as the sole source of protection. Is this genuine love or emotional manipulation to ensure Miranda's compliance?"
                  />
                  <Quote
                    text="Ye elves of hills, brooks, standing lakes, and groves, / And ye that on the sands with printless foot / Do chase the ebbing Neptune"
                    speaker="Prospero"
                    act="Act 5, Scene 1"
                    analysis="Prospero's renunciation speech echoes Medea's incantation in Ovid's Metamorphoses, linking him to a tradition of dangerous sorcery. 'Printless foot' is beautiful: spirits leave no physical trace, emphasising the immateriality of magic and art."
                  />
                  <Quote
                    text="We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep"
                    speaker="Prospero"
                    act="Act 4, Scene 1"
                    analysis="'Stuff as dreams are made on' equates human existence with theatrical illusion: both are temporary, both insubstantial. 'Rounded with a sleep' is a gentle metaphor for death. The first-person 'we' includes the audience. Widely read as Shakespeare's meditation on mortality."
                  />
                  <Quote
                    text="I'll deliver all; / And promise you calm seas, auspicious gales"
                    speaker="Prospero"
                    act="Act 5, Scene 1"
                    analysis="Prospero promises safe passage home after renouncing magic. 'Deliver' carries dual meaning: to set free and to fulfil a promise. Having used nature as a weapon (the tempest), he now promises harmony with it. Nature is restored when power is relinquished."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Caliban</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="When thou cam'st first, / Thou strok'st me and made much of me"
                    speaker="Caliban"
                    act="Act 1, Scene 2"
                    analysis="Caliban recalls the initial kindness of their relationship before it turned to enslavement. 'Strok'st' and 'made much of me' suggest genuine affection, now replaced by domination. This complicates the colonial narrative: there was an initial exchange before exploitation."
                  />
                  <Quote
                    text="In dreaming, / The clouds methought would open and show riches / Ready to drop upon me, that when I waked / I cried to dream again"
                    speaker="Caliban"
                    act="Act 3, Scene 2"
                    analysis="Part of the 'Be not afeard' speech. 'I cried to dream again' is heartbreaking: his reality (enslavement) is so painful that dreams are his only joy. The line humanises Caliban completely, showing profound emotional depth."
                  />
                  <Quote
                    text="I'll show thee every fertile inch o' th' island"
                    speaker="Caliban"
                    act="Act 2, Scene 2"
                    analysis="Caliban offers to share the island's resources with Stephano, repeating exactly what he did with Prospero. The tragic cycle: the colonised teaches the coloniser to survive, then is enslaved using that knowledge. 'Fertile' connects Caliban to the natural world."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Ariel</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Hell is empty, / And all the devils are here"
                    speaker="Ariel (reporting the mariners)"
                    act="Act 1, Scene 2"
                    analysis="Inverts the expected location of evil. The 'devils' are not supernatural but human: the corrupt nobles aboard the ship. Suggests that human wickedness (usurpation, betrayal) is the true source of evil in the play."
                  />
                  <Quote
                    text="You are three men of sin"
                    speaker="Ariel (as a harpy)"
                    act="Act 3, Scene 3"
                    analysis="Ariel delivers Prospero's judgement on Alonso, Antonio, and Sebastian. The direct accusation uses the language of divine justice. The harpy form (classical mythology) combines beauty and terror, reflecting the play's mingling of wonder and menace."
                  />
                  <Quote
                    text="While you here do snoring lie, / Open-ey'd conspiracy / His time doth take"
                    speaker="Ariel"
                    act="Act 2, Scene 1"
                    analysis="Ariel's warning song saves Alonso's life. Personifying 'conspiracy' as an alert predator while the nobles sleep creates menace. The rhyming couplets' nursery-rhyme quality contrasts with the deadly seriousness of the murder plot."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">{tr(`Miranda &amp; Ferdinand`)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I would not wish / Any companion in the world but you"
                    speaker="Miranda"
                    act="Act 3, Scene 1"
                    analysis="Miranda's declaration of love is sincere but also limited by her experience -- Ferdinand is literally the only young man she has ever seen. Shakespeare makes this love both genuine and naively uninformed, inviting the audience to hold both truths."
                  />
                  <Quote
                    text="The mistress which I serve quickens what's dead / And makes my labours pleasures"
                    speaker="Ferdinand"
                    act="Act 3, Scene 1"
                    analysis="Love transforms punishment into pleasure. 'Quickens what's dead' echoes the play's theme of transformation and renewal. Ferdinand's willing service contrasts directly with Caliban's forced servitude, showing that love redefines the meaning of labour."
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">{tr(`Other Characters`)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="What's past is prologue"
                    speaker="Antonio"
                    act="Act 2, Scene 1"
                    analysis="Antonio uses this to justify murdering Alonso: the past merely sets the stage. Ironically, it describes the play's own structure: Prospero's past usurpation is the prologue driving the entire plot. One of Shakespeare's most quoted phrases."
                  />
                  <Quote
                    text="In the name of something holy, sir, why stand you / In this strange stare?"
                    speaker="Gonzalo"
                    act="Act 3, Scene 3"
                    analysis="After the harpy scene, Gonzalo's concern for the traumatised nobles shows his consistent goodness. While others plot or despair, Gonzalo acts with practical compassion. His invocation of 'something holy' contrasts with the dark magic surrounding them."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section
            id="context"
            title={tr(`Historical and Literary Context`)}
            badge="5 Topics"
            colour="bg-cyan-600"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Colonialism and the New World`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`The Tempest`)}</em> was written in 1610&ndash;1611, during the early
                  period of English colonisation of the Americas. In 1609, the ship{' '}
                  <em>{tr(`Sea Venture`)}</em> was wrecked on Bermuda during a voyage to the
                  Virginia colony; accounts of the shipwreck likely influenced Shakespeare. The play
                  engages with contemporary debates about colonial enterprise: Prospero&apos;s
                  arrival on Caliban&apos;s island, his claim to authority, and his
                  &ldquo;civilising&rdquo; mission mirror European justifications for colonising
                  indigenous peoples. Gonzalo&apos;s utopian speech draws from Montaigne&apos;s
                  essay &ldquo;Of Cannibals&rdquo; (1580), which argued that &ldquo;barbarous&rdquo;
                  peoples were morally superior to Europeans. Post-colonial critics such as
                  Aim&eacute; C&eacute;saire have rewritten the play from Caliban&apos;s
                  perspective, reclaiming the &ldquo;monster&rdquo; as a freedom fighter.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Shakespeare&apos;s Farewell to the Theatre`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`The Tempest`)}</em> is widely considered Shakespeare&apos;s last
                  solo-authored play (1611), and Prospero&apos;s renunciation of magic is often read
                  as Shakespeare&apos;s farewell to playwriting. &ldquo;Our revels now are
                  ended&rdquo; and the Epilogue&apos;s plea for release are seen as the dramatist
                  reflecting on his career. Prospero&apos;s magic, like Shakespeare&apos;s art,
                  creates illusions, transforms reality, and depends on an audience&apos;s willing
                  suspension of disbelief. The &ldquo;globe&rdquo; that shall &ldquo;dissolve&rdquo;
                  may refer to both the world and the Globe Theatre itself. While Shakespeare
                  co-wrote later plays (<em>{tr(`Henry VIII`)}</em>,{' '}
                  <em>{tr(`The Two Noble Kinsmen`)}</em>), the autobiographical resonance remains
                  powerful.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`The Jacobean Masque`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The masque in Act 4 reflects the elaborate court entertainments popular under
                  James I. Masques combined poetry, music, dance, and spectacular staging to
                  celebrate royal power and virtue. Ben Jonson and Inigo Jones were the foremost
                  masque creators. Shakespeare incorporates the masque form but subverts it:
                  Prospero&apos;s masque is interrupted, and its beauty is declared insubstantial
                  (&ldquo;melted into air&rdquo;). This can be read as Shakespeare critiquing the
                  masque&apos;s purpose: art that serves power is ultimately as transient as the
                  power it celebrates. The masque was performed at court for James I&apos;s
                  daughter&apos;s wedding in 1613, adding a further layer of occasion-specific
                  meaning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`The Great Chain of Being and Hierarchy`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Jacobean society was structured by a rigid hierarchy (God, monarch, nobles,
                  commoners), and disruption of this order was seen as sinful. Antonio&apos;s
                  usurpation of Prospero mirrors political anxieties about illegitimate succession.
                  The play&apos;s resolution restores the proper hierarchy: Prospero reclaims his
                  dukedom, Ferdinand will inherit Naples through legitimate marriage. However, the
                  play also questions hierarchy: the Boatswain&apos;s authority over nobles in the
                  storm and Caliban&apos;s claim to the island challenge the idea that social rank
                  is natural or divinely ordained.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  {tr(`Magic and Science in the Renaissance`)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The Renaissance distinguished between &ldquo;natural magic&rdquo; (studying hidden
                  properties of nature, associated with scholars like John Dee) and &ldquo;black
                  magic&rdquo; (demonic sorcery). Prospero is aligned with the former: his power
                  comes from study and books, not demonic pacts. This distinction matters because it
                  makes Prospero&apos;s magic legitimate in Renaissance terms, differentiating him
                  from Sycorax, who practised dark witchcraft. His renunciation of magic can be read
                  as a turn from contemplation to action: he must stop being a scholar-magician and
                  become a political ruler, accepting the compromises of real power.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section
            id="essay-planning"
            title={tr(`Essay Planning`)}
            badge="5 Questions"
            colour="bg-rose-600"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Common exam questions with structured guidance on how to plan your response. Use PEEL
              paragraphs (Point, Evidence, Explain, Link) for each point.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Extract-Based
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Read Prospero&apos;s speech beginning &ldquo;Our revels now are ended&rdquo; (Act
                  4, Scene 1). How does Shakespeare use this speech to explore the themes of the
                  play?
                </p>
                <div className="mt-3 rounded bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{tr(`How to approach:`)}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Analyse the metatheatrical imagery: &ldquo;actors,&rdquo;
                      &ldquo;revels,&rdquo; &ldquo;pageant&rdquo; blur the line between magic and
                      theatre
                    </li>
                    <li>
                      &bull; Discuss the movement from specific (the masque) to universal (human
                      life)
                    </li>
                    <li>
                      &bull; &ldquo;We are such stuff as dreams are made on&rdquo; equates human
                      existence with illusion
                    </li>
                    <li>
                      &bull; Link to the wider play: power, control, and art are all temporary
                    </li>
                    <li>
                      &bull; Consider the autobiographical reading: Shakespeare reflecting on his
                      own art
                    </li>
                    <li>
                      &bull; Discuss the tone: melancholy acceptance rather than despair or
                      celebration
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Essay Question
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  How does Shakespeare present the relationship between Prospero and Caliban?
                </p>
                <div className="mt-3 rounded bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{tr(`How to approach:`)}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Examine the master-slave dynamic: Prospero&apos;s language of control
                      (&ldquo;slave,&rdquo; &ldquo;earth,&rdquo; &ldquo;tortoise&rdquo;)
                    </li>
                    <li>
                      &bull; Analyse Caliban&apos;s resistance: his land claim, his cursing, the
                      assassination plot
                    </li>
                    <li>
                      &bull; Discuss the colonial reading: Prospero as coloniser, Caliban as
                      colonised
                    </li>
                    <li>
                      &bull; Consider nature vs nurture: is Caliban inherently savage or made so by
                      Prospero?
                    </li>
                    <li>
                      &bull; Analyse &ldquo;This thing of darkness I acknowledge mine&rdquo;:
                      ownership, responsibility, or psychological recognition?
                    </li>
                    <li>
                      &bull; Compare Caliban&apos;s servitude with Ariel&apos;s: different forms of
                      power and different responses
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Essay Question
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  How does Shakespeare explore the theme of freedom in The Tempest?
                </p>
                <div className="mt-3 rounded bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{tr(`How to approach:`)}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Map the different forms of imprisonment: Ariel (magical), Caliban
                      (physical), Ferdinand (imposed), the nobles (enchantment), Prospero (exile)
                    </li>
                    <li>
                      &bull; Analyse Ariel&apos;s repeated requests for freedom and Prospero&apos;s
                      responses
                    </li>
                    <li>
                      &bull; Discuss Caliban&apos;s &ldquo;freedom song&rdquo; and its ironic
                      outcome (new servitude to Stephano)
                    </li>
                    <li>
                      &bull; Consider the Epilogue: the audience must &ldquo;set me free,&rdquo;
                      making freedom a communal act
                    </li>
                    <li>
                      &bull; Link freedom to forgiveness: Prospero&apos;s release of his enemies is
                      also his own liberation
                    </li>
                    <li>
                      &bull; Context: Jacobean debates about liberty, authority, and the rights of
                      subjects
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Extract-Based
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Re-read Caliban&apos;s speech beginning &ldquo;Be not afeard; the isle is full of
                  noises&rdquo; (Act 3, Scene 2). How does Shakespeare use this speech to present
                  Caliban?
                </p>
                <div className="mt-3 rounded bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{tr(`How to approach:`)}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Analyse the contrast between the beauty of the language and
                      Caliban&apos;s supposed &ldquo;savagery&rdquo;
                    </li>
                    <li>
                      &bull; The sensory imagery (&ldquo;sounds and sweet airs,&rdquo; &ldquo;a
                      thousand twangling instruments&rdquo;) reveals deep sensitivity
                    </li>
                    <li>
                      &bull; &ldquo;I cried to dream again&rdquo; shows emotional depth and
                      vulnerability
                    </li>
                    <li>
                      &bull; Consider why Shakespeare gives Caliban some of the play&apos;s finest
                      poetry
                    </li>
                    <li>
                      &bull; Discuss whether this speech challenges or complicates Prospero&apos;s
                      view of Caliban
                    </li>
                    <li>
                      &bull; Link to the nature/nurture debate and post-colonial interpretations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Essay Question
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Is Prospero a hero or a villain? Explore how Shakespeare presents Prospero in the
                  play.
                </p>
                <div className="mt-3 rounded bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{tr(`How to approach:`)}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Argue both sides: he is a wronged duke seeking justice AND an
                      authoritarian who enslaves
                    </li>
                    <li>
                      &bull; His treatment of Ariel: grateful liberator or exploitative master?
                    </li>
                    <li>
                      &bull; His treatment of Caliban: justified disciplinarian or colonial
                      oppressor?
                    </li>
                    <li>
                      &bull; His control of Miranda: protective father or manipulative patriarch?
                    </li>
                    <li>
                      &bull; The forgiveness scene (Act 5): genuine moral growth or final exercise
                      of control?
                    </li>
                    <li>
                      &bull; His renunciation of magic: heroic self-sacrifice or recognition that
                      power has corrupted him?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>{tr(`The Tempest`)}</em> by William Shakespeare is in the public domain. All
          quotations are reproduced freely.
        </p>
      </footer>
    </>
  )
}
