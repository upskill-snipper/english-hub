import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
;('use client')

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

export default function StreetcarNamedDesirePage() {
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
            20th-Century American Drama
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A Streetcar Named Desire &mdash; Complete A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Tennessee Williams, 1947`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your A-Level English Literature exam. Scene-by-scene plot
          analysis, character profiles, themes with evidence, 15+ key quotations with analysis,
          symbolism, post-war context, Williams&apos;s biographical influences, and exam-style essay
          planning aligned to AQA and OCR specifications.
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
          <Section title={tr(`Scene-by-Scene Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Scene 1: Arrival at Elysian Fields
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Blanche DuBois arrives at her sister Stella&apos;s cramped two-room flat in the
                  New Orleans French Quarter, having taken &ldquo;a streetcar named Desire,&rdquo;
                  transferred to one called Cemeteries, and ridden &ldquo;six blocks&rdquo; to
                  Elysian Fields. Dressed in white like a moth, she is visibly shaken by the
                  &ldquo;raffish&rdquo; multi-ethnic neighbourhood. Stella&apos;s husband Stanley
                  Kowalski enters with a bloody package of meat; he is presented as a primal,
                  masculine force. Blanche reveals that the family plantation Belle Reve has been
                  &ldquo;lost.&rdquo; Tension is established between Blanche&apos;s genteel
                  pretensions and Stanley&apos;s raw physicality.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The streetcar journey &mdash; Desire to Cemeteries to Elysian Fields
                    </li>
                    <li>
                      &bull; Stanley&apos;s entrance with the meat package &mdash; primal
                      masculinity
                    </li>
                    <li>&bull; Blanche&apos;s confession that Belle Reve has been lost</li>
                    <li>&bull; Blanche drinks secretly &mdash; first hint of alcoholism</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Scene 2: The Napoleonic Code
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Stanley, suspicious that Blanche has cheated Stella out of her share of Belle
                  Reve, invokes the &ldquo;Napoleonic code&rdquo; under which a wife&apos;s property
                  belongs to her husband. He ransacks Blanche&apos;s trunk, examining her furs and
                  costume jewellery. Blanche flirts with him to deflect, asking him to button her
                  dress. Stanley reveals that Stella is pregnant. Blanche reads aloud old love
                  letters from her dead husband, which Stanley brutally seizes and inspects.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Stanley invokes the Napoleonic Code &mdash; legal patriarchy</li>
                    <li>&bull; The trunk searched &mdash; violation of intimate space</li>
                    <li>&bull; Blanche&apos;s flirtation &mdash; first sexual undercurrent</li>
                    <li>&bull; Revelation that Stella is pregnant</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Scene 3: The Poker Night
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Stanley hosts a drunken poker game with his friends Mitch, Steve and Pablo.
                  Williams describes the kitchen as a &ldquo;raw,&rdquo; primary-coloured scene,
                  &ldquo;bright as a child&apos;s spectrum.&rdquo; Mitch is set apart by his
                  sensitivity and concern for his dying mother. He meets Blanche; she covers the
                  naked light bulb with a Chinese paper lantern and they dance to the radio. When
                  Stanley smashes the radio in fury, he beats Stella. Stella flees upstairs to
                  Eunice. Famously, Stanley stands bellowing &ldquo;STELLA!&rdquo; and she returns
                  to him. Blanche is horrified.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The poker night &mdash; ritual of male homosocial violence</li>
                    <li>
                      &bull; Mitch and Blanche meet &mdash; the paper lantern placed on the bulb
                    </li>
                    <li>&bull; Stanley smashes the radio and beats Stella</li>
                    <li>
                      &bull; The famous &ldquo;STELLAAAAAAA!&rdquo; cry &mdash; sexual
                      reconciliation
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Scene 4: The Morning After
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The next morning Stella appears narcotised, glowing with sexual satisfaction.
                  Blanche urges her to leave Stanley, calling him a &ldquo;survivor of the stone
                  age&rdquo; and an &ldquo;animal.&rdquo; She proposes they wire her old millionaire
                  admirer Shep Huntleigh for help. Stella defends her marriage in physical terms
                  (&ldquo;there are things that happen between a man and a woman in the
                  dark&rdquo;). Stanley overhears Blanche&apos;s tirade against him. His face
                  hardens; the seed of revenge is planted.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Blanche&apos;s &ldquo;ape&rdquo; / &ldquo;stone age&rdquo; speech
                      &mdash; class disgust
                    </li>
                    <li>&bull; Stella&apos;s defence of physical desire</li>
                    <li>&bull; Stanley overhears &mdash; antagonism becomes vendetta</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Scene 5: The Young Man
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Stanley starts probing Blanche about a man named Shaw and the Hotel Flamingo,
                  planting fears that her past is catching up with her. A young newspaper collector
                  arrives; Blanche kisses him &ldquo;just once, softly and sweetly,&rdquo; before
                  sending him away. The encounter reveals her predatory attraction to youth and
                  hints darkly at her unspecified history with young men. Mitch arrives with roses
                  for their evening date.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Stanley mentions Shaw and the Hotel Flamingo</li>
                    <li>&bull; The kiss with the young paper-boy</li>
                    <li>&bull; Mitch arrives with roses &mdash; courtship begins</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  Scene 6: Allan Grey
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Returning from a date, Mitch and Blanche speak with unusual tenderness. Blanche
                  confesses the central trauma of her life: she married a young poet, Allan Grey, at
                  sixteen. She discovered him with an older male lover; later, on the dance floor at
                  Moon Lake Casino, she told him he &ldquo;disgusted&rdquo; her. He ran out and shot
                  himself. The Varsouviana polka &mdash; the music playing when Allan died &mdash;
                  recurs in Blanche&apos;s mind whenever she remembers. Mitch promises &ldquo;You
                  need somebody. And I need somebody, too.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The Allan Grey backstory &mdash; trauma at the heart of the play</li>
                    <li>&bull; The Varsouviana polka introduced as an auditory memory</li>
                    <li>&bull; Mitch&apos;s implicit proposal &mdash; brief hope for Blanche</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Scene 7: Birthday Revelations
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  It is Blanche&apos;s birthday. As Blanche bathes (her ritualistic cleansing),
                  Stanley tells Stella the truth he has gathered from supply-man contacts in Laurel:
                  Blanche was forced from the town because of her promiscuity at the Hotel Flamingo,
                  and was sacked from her teaching post for an affair with a seventeen-year-old
                  pupil. Stella refuses to believe it fully, but Stanley has already told Mitch.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Stanley exposes Blanche&apos;s past in Laurel</li>
                    <li>&bull; The Hotel Flamingo and the seventeen-year-old pupil</li>
                    <li>&bull; Mitch is told &mdash; the courtship is destroyed</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Scene 8: The Bus Ticket
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At the disastrous birthday dinner Mitch is conspicuously absent. Stanley presents
                  Blanche with a &ldquo;little birthday remembrance&rdquo;: a one-way Greyhound
                  ticket back to Laurel for Tuesday. Blanche flees to the bathroom and is heard
                  retching. Stella, horrified, goes into labour; Stanley takes her to the hospital.
                  The cruelty here is unsparing.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The birthday dinner &mdash; Mitch&apos;s absence</li>
                    <li>
                      &bull; Stanley&apos;s &ldquo;birthday present&rdquo; &mdash; the bus ticket
                    </li>
                    <li>&bull; Stella goes into labour</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  Scene 9: Mitch&apos;s Confrontation
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Mitch arrives unshaven and drunk. He tears the paper lantern from the bulb to look
                  at Blanche under the harsh light: &ldquo;I&apos;ve never had a real good look at
                  you, Blanche.&rdquo; Blanche admits her past. From the street comes the cry of the
                  Mexican blind woman selling tin flowers &mdash; &ldquo;Flores. Flores para los
                  muertos. Flowers for the dead&rdquo; &mdash; an emblem of her psychic
                  disintegration. Mitch tries to force himself on her; she screams
                  &ldquo;Fire!&rdquo; and he flees.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The paper lantern torn off &mdash; brutal exposure</li>
                    <li>&bull; The Mexican woman&apos;s &ldquo;Flores para los muertos&rdquo;</li>
                    <li>
                      &bull; Mitch attempts assault &mdash; Blanche&apos;s &ldquo;Fire!&rdquo;
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    10
                  </span>
                  Scene 10: The Rape
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Stanley returns from the hospital while Stella is in labour. Blanche, drinking
                  heavily, has dressed in a soiled white satin gown and a rhinestone tiara, talking
                  deliriously of Shep Huntleigh and a Caribbean cruise. Stanley exposes her
                  fantasies as &ldquo;lies and conceit and tricks.&rdquo; The walls become
                  transparent and shadows take grotesque human shapes; the &ldquo;blue piano&rdquo;
                  rises to a roar. Stanley advances, sneers &ldquo;We&apos;ve had this date with
                  each other from the beginning,&rdquo; and rapes her.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The transparent walls &mdash; expressionist technique</li>
                    <li>&bull; Stanley dismantles Blanche&apos;s fantasies</li>
                    <li>&bull; The rape &mdash; the play&apos;s catastrophe</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    11
                  </span>
                  Scene 11: Departure
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Some weeks later, the men play another poker game. Blanche, now living in
                  delusion, believes she is leaving on a Caribbean cruise with Shep Huntleigh.
                  Stella has chosen to disbelieve Blanche&apos;s account of the rape: &ldquo;I
                  couldn&apos;t believe her story and go on living with Stanley.&rdquo; A doctor and
                  matron arrive to take Blanche to a state asylum. Initially terrified, Blanche
                  calms when the doctor offers her his arm; she utters the play&apos;s final,
                  devastating line. Stella sobs as Stanley comforts her.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Blanche taken to the asylum</li>
                    <li>&bull; Stella&apos;s decision to remain with Stanley</li>
                    <li>&bull; &ldquo;The kindness of strangers&rdquo; &mdash; closing line</li>
                    <li>&bull; The poker game resumes &mdash; cyclical violence</li>
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
                name="Blanche DuBois"
                description="Stella's older sister and the play's tragic protagonist. A former English teacher from Laurel, Mississippi, in her thirties, she arrives at Elysian Fields ostensibly on summer leave but is in fact homeless, jobless and ruined. Her surname &mdash; French for 'of the woods' &mdash; and her first name (meaning 'white') align her with paleness, fragility and a vanishing aristocratic past. Williams's stage directions describe her as resembling a moth attracted to light yet destroyed by it. She drinks compulsively, bathes ritualistically and avoids electric light, all signs of a woman trying to obliterate trauma. Her tragedy is rooted in the suicide of her young husband Allan Grey, whom she shamed for his homosexuality; since then she has sought 'protection' through serial sexual encounters culminating in disgrace at the Hotel Flamingo and her sacking for an affair with a seventeen-year-old pupil. She represents the death of the genteel Old South, but Williams refuses to romanticise her: she is simultaneously cruel, snobbish, deluded, and one of the most sympathetic figures in twentieth-century drama. Her descent into madness is the play's catastrophe."
              />
              <CharacterCard
                name="Stella Kowalski"
                description="Blanche's younger sister, in her mid-twenties, married to Stanley and pregnant throughout the play. Williams describes her as 'gentle' and of a 'background obviously quite different from her husband's.' She has chosen physical desire and working-class New Orleans over the dying gentility of Belle Reve, and frankly defends the sexual heart of her marriage: 'there are things that happen between a man and a woman in the dark that sort of make everything else seem &mdash; unimportant.' Critics divide on Stella: some see her as morally compromised for staying with Stanley after the rape; others see her as a realist who recognises that to believe Blanche would be to lose her child's father. Her final sobs and the crucial line 'I couldn't believe her story and go on living with Stanley' make her complicity central to the play's tragic vision."
              />
              <CharacterCard
                name="Stanley Kowalski"
                description="Stella's husband, a Polish-American working-class veteran of the Second World War. Williams's stage directions describe his 'animal joy in his being' and the 'centre' he forms in the all-male world of bowling alleys, factories and poker tables. He is sexually charismatic, territorial, and brutally direct &mdash; the antithesis of Blanche's gentility. Played originally by Marlon Brando, Stanley defined a new kind of American stage masculinity: rough, virile, ethnically marked. He represents the new urban America &mdash; democratic, aggressive, hostile to inherited privilege. He invokes the Napoleonic Code, weaponises information, and ultimately rapes Blanche. Williams resists turning him into a simple villain: he genuinely loves Stella, is loyal to his friends, and his suspicion of Blanche's stories is not always unfounded. He embodies the play's unresolved tension between honesty and cruelty, vitality and brutality."
              />
              <CharacterCard
                name="Harold 'Mitch' Mitchell"
                description="Stanley's poker friend and Blanche's brief suitor, a factory worker who lives with his dying mother. Mitch is set apart from the other men by sensitivity, awkwardness and concern for his mother's health; he carries a silver cigarette case engraved with a quotation from Elizabeth Barrett Browning. He represents a tentative, decent masculinity and offers Blanche her last chance of refuge. After Stanley reveals her past, Mitch arrives drunk in scene 9 to demand the truth and to attempt assault. His failure of nerve &mdash; he is unwilling to marry her once she is 'not clean enough to bring in the house with my mother' &mdash; shows that even decent men in this world are policed by codes of female purity. He is the play's failed possibility of rescue."
              />
              <CharacterCard
                name="Eunice and Steve Hubbell"
                description="The upstairs neighbours and the Kowalskis' landlords. Their noisy, reconciliatory marriage &mdash; comic violence followed by rapid forgiveness &mdash; functions as a working-class echo of Stella and Stanley's, normalising domestic conflict in the world of Elysian Fields. Eunice is generous and direct; she shelters Stella after Stanley beats her and ultimately delivers the play's bleak realist creed: 'Don't ever believe it. Life has got to go on. No matter what happens, you've got to keep on going.' Steve is one of the poker-playing men, anonymous within the male collective. Together the Hubbells dramatise the working-class community Blanche refuses to be assimilated into."
              />
              <CharacterCard
                name="Pablo Gonzales"
                description="A Hispanic friend of Stanley who completes the poker quartet with Steve and Mitch. Pablo has few individual lines but his presence is significant: alongside the Mexican flower-seller and the Negro woman who opens the play, he marks the multi-ethnic, multilingual character of the New Orleans setting. Williams uses Pablo to underline that Elysian Fields is not the white-owned plantation society of Belle Reve but a polyglot, post-war, urban America in which Blanche's claims to genteel exclusivity are obsolete. He is part of the male chorus whose poker games structure the play."
              />
              <CharacterCard
                name="Allan Grey"
                description="Blanche's young husband, who appears only in memory. A 'tenderness which wasn't like a man's,' he was a poet who, as Blanche discovered, was in a relationship with an older man. After Blanche told him on the dance floor at Moon Lake Casino that he 'disgusted' her, he ran outside and shot himself. The Varsouviana polka, playing at the moment of his death, recurs in Blanche's mind throughout the play. Allan is the absent centre of Blanche's trauma: her cruelty to him is the source of her guilt, her sympathy for sensitive young men, and her need for 'protection' from the dark."
              />
              <CharacterCard
                name="Shep Huntleigh"
                description="A wealthy Texan oilman from Blanche's past whom she invokes repeatedly as a future rescuer. He never appears and almost certainly does not exist in the form Blanche imagines. Shep represents Blanche's flight into fantasy: a male saviour who will deliver her from squalor, debt and shame. His function in the play is purely as illusion."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Desire vs Death`)}
                description="The play's structuring opposition. Blanche says 'the opposite is death' &mdash; the opposite, that is, of desire. Williams pairs the streetcar named Desire with the streetcar named Cemeteries, which Blanche must take to reach Elysian Fields (the Greek paradise of the dead). Sex in the play is presented as the only force strong enough to hold off mortality, but it is also linked to it: Blanche's promiscuity follows the deaths at Belle Reve, and Stanley's rape of her destroys what little remains of her sanity. Desire and death are not opposites but a single, inescapable continuum."
              />
              <ThemeCard
                title={tr(`Illusion vs Reality`)}
                description="Blanche openly champions illusion over fact: 'I don't want realism. I want magic!' She covers naked bulbs with paper lanterns, avoids daylight, and invents stories about plantations, telegrams and millionaires. Stanley, by contrast, is the play's relentless investigator of fact &mdash; the one who tears off the lantern, exposes Laurel's gossip, and confronts Blanche with the bus ticket. Williams refuses an easy moral: Stanley's brutal truth-telling is itself destructive, and Blanche's lies offer her dignity in the face of unbearable reality. The audience is asked whether truth, in such circumstances, is always preferable."
              />
              <ThemeCard
                title={tr(`Class & The Old South vs New America`)}
                description="The play stages the collision between the dying agrarian aristocracy of the Old South and the working-class, multi-ethnic, urban modernity of post-war America. Blanche represents Belle Reve &mdash; the white plantation, the genteel teacher, the French surname, the cultivated reading of poetry. Stanley represents the new America &mdash; Polish, urban, industrial, democratic, brusque. Williams refuses to take a simple side. The Old South is shown to be already dead (Belle Reve foreclosed, the &lsquo;epic fornications&rsquo; of the male DuBois ancestors having ruined the estate), but the new America is figured as violent and crude. The play stages the historical defeat of one class by another."
              />
              <ThemeCard
                title={tr(`Sexual Violence`)}
                description="Williams puts rape at the dramatic centre of the play. Stanley's assault on Blanche in Scene 10 is preceded by Mitch's attempt in Scene 9, and follows the long pattern of violence in the Kowalski marriage (the radio smashed, Stella struck on poker night). Williams shows sexual violence in this milieu as habitual rather than aberrant; Eunice's advice is that Stella must &lsquo;not believe&rsquo; the rape in order to keep her family. The play, written before the language of sexual consent existed in American public discourse, is unflinching about the way patriarchal communities silence women's testimony."
              />
              <ThemeCard
                title={tr(`Gender and Patriarchy`)}
                description="The play exposes the asymmetric sexual codes of mid-century America. Blanche's promiscuity ruins her socially and professionally; Stanley's appetite is celebrated as masculine vitality. Mitch refuses to marry Blanche because she is 'not clean enough'; no equivalent purity is demanded of him. The Napoleonic Code Stanley invokes makes a wife's property her husband's. Stella is economically and biologically tied to Stanley. Even the doctor in the closing scene removes his coat and offers his arm: only an acceptably gallant masculine figure can finally lead Blanche away. Williams shows a world in which female autonomy is structurally impossible."
              />
              <ThemeCard
                title={tr(`Mental Illness and Trauma`)}
                description="Williams was haunted by his own sister Rose's lobotomy in 1943 and Blanche's breakdown is informed by that biographical wound. The Varsouviana polka in Blanche's head, her dissociative monologues, her fixations on cleanliness and light, and her ultimate removal to a state asylum are presented sympathetically as the consequences of cumulative trauma: the deaths at Belle Reve, the suicide of Allan Grey, the disgrace at Laurel, and finally the rape. Williams's portrayal anticipates later understandings of post-traumatic stress and the ways patriarchal medicine policed female sexuality through psychiatric committal."
              />
              <ThemeCard
                title={tr(`Light, Bathing and Cleansing`)}
                description="Throughout the play Blanche bathes obsessively (&lsquo;hydrotherapy&rsquo;, she calls it) and avoids direct light. Both rituals are forms of psychic cleansing. Bathing is a futile attempt to wash off the shame of her sexual past; the avoidance of light hides her ageing body and, more profoundly, the truth of her history. When Mitch tears the paper lantern off the bulb in Scene 9, the literal exposure mirrors moral exposure. Light in the play is ruthless, masculine and modern; soft light is the property of fantasy."
              />
              <ThemeCard
                title={tr(`The American Dream and Its Failure`)}
                description="Stanley embodies a particular post-war fantasy of upward mobility: ex-soldier, married, factory job, drinking buddies, a baby on the way. Blanche, conversely, is the figure of declining gentility for whom the new America has no place. Williams complicates the optimism of the post-war American myth by showing how it depends on the destruction of its weakest. The play implicitly questions whether the &lsquo;Elysian Fields&rsquo; of the new America are paradise at all or merely an illusion bought at someone else's cost."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Biographical Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Post-War New Orleans and Elysian Fields`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Williams sets the play in the spring and summer of 1947 in the French Quarter of
                  New Orleans, on a real street called Elysian Fields. The Quarter was famously
                  cosmopolitan: Creole, Black, Hispanic, Italian and Polish populations lived in
                  close quarters; jazz and blues drifted from bars at all hours. Williams&apos;s
                  stage directions describe a &ldquo;blue piano&rdquo; in a nearby tonk, a
                  saxophone, the cries of street vendors. This multi-ethnic working-class world
                  stands in deliberate contrast to the white plantation society of the DuBois family
                  at Belle Reve, and the whole play is structured around Blanche&apos;s collision
                  with it.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Williams&apos;s Biography and His Sister Rose
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Tennessee Williams (1911&ndash;1983), born Thomas Lanier Williams, was raised in
                  Mississippi and Missouri in a household marked by his mother&apos;s Southern
                  gentility and his father&apos;s alcoholic violence. His older sister Rose suffered
                  from severe mental illness and in 1943 was given a prefrontal lobotomy authorised
                  by their parents, which left her permanently institutionalised. Williams was
                  devastated and the figure of the fragile, sensitive woman destroyed by a brutal
                  world recurs across his plays (Laura in <em>{tr(`The Glass Menagerie`)}</em>,
                  Blanche, Catherine in <em>{tr(`Suddenly Last Summer`)}</em>). Williams was also a
                  gay man at a time when homosexuality was criminalised; this experience informs
                  both the Allan Grey backstory and the play&apos;s sympathy for those policed by
                  conventional morality.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Southern Gothic Tradition`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Williams writes within the Southern Gothic tradition of William Faulkner, Carson
                  McCullers and Flannery O&apos;Connor. Recurring features &mdash; decaying
                  mansions, fading aristocratic families, sexual secrets, mental illness, the
                  haunting weight of a violent past &mdash; are all central to <em>Streetcar</em>.
                  Belle Reve (literally &lsquo;beautiful dream&rsquo;) is a quintessential Southern
                  Gothic ruin: lost to mortgages and the &lsquo;epic fornications&rsquo; of the male
                  ancestors, it haunts Blanche as a vanished paradise. Williams updates the
                  tradition by transferring it from the plantation to the urban tenement.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Loss of the Old South`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Belle Reve is the DuBois ancestral plantation in Laurel, Mississippi, &ldquo;a
                  great big place with white columns.&rdquo; By the time the play opens it has been
                  lost piece by piece to mortgages and the medical bills of dying relatives.
                  Blanche&apos;s indictment to Stella &mdash; &ldquo;all of those deaths! The long
                  parade to the graveyard!&rdquo; &mdash; positions Belle Reve as the place where
                  the Old South literally died. The play is set within two years of the end of the
                  Second World War, when the racial and economic order of the South was already
                  under pressure; Williams stages, on a domestic scale, the historical displacement
                  of the planter class by industrial modernity.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Streetcar Lines as Symbol`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Williams takes the title and central image from the real streetcars of New
                  Orleans. The Desire line ran along Royal and Bourbon Streets through the French
                  Quarter; the Cemeteries line, named for the cemeteries at its terminus,
                  intersected the city&apos;s graveyards. In the opening scene Blanche describes her
                  route literally: &ldquo;They told me to take a streetcar named Desire, and then
                  transfer to one called Cemeteries, and ride six blocks and get off at &mdash;
                  Elysian Fields!&rdquo; The route is also an emblem of her life: from Desire,
                  through Cemeteries (the parade of family deaths), to Elysian Fields (the
                  underworld of the dead). Williams turns a literal map of the city into a symbolic
                  map of her psyche.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`The 1947 Production and Marlon Brando`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play opened on Broadway in December 1947, directed by Elia Kazan with Jessica
                  Tandy as Blanche and the unknown Marlon Brando as Stanley. Brando&apos;s
                  Method-influenced, t-shirted, sweaty Stanley became iconic and shifted American
                  screen and stage masculinity for a generation. The 1951 film version (also
                  directed by Kazan, with Vivien Leigh replacing Tandy) was heavily censored by the
                  Production Code Administration: the rape and Allan Grey&apos;s homosexuality were
                  obscured. Knowing the censorship history of the play helps us see what Williams
                  was risking by staging both.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              15+ quotations organised by theme and character for A-Level revision.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="They told me to take a streetcar named Desire, and then transfer to one called Cemeteries, and ride six blocks and get off at &mdash; Elysian Fields!"
                speaker="Blanche, Scene 1"
                analysis="Blanche's opening account of her route into the play is also Williams's thesis statement. The three named stops &mdash; Desire, Cemeteries, Elysian Fields &mdash; form a symbolic itinerary from sexual desire, through death, to a Greek paradise of the dead. The dash before &lsquo;Elysian Fields&rsquo; is a typical Williams stage rhythm: a beat of disbelief. From the first scene the play tells us Blanche has ridden Desire to its terminus."
              />
              <QuoteCard
                quote="I have always depended on the kindness of strangers."
                speaker="Blanche, Scene 11 (final line)"
                analysis="The play's closing line. Spoken to the doctor as he leads her to the asylum, the line is at once dignified and devastating. &lsquo;Strangers&rsquo; have wrecked Blanche's life (the men at Laurel, finally Stanley) and yet she rests her dignity on their courtesy. The line crystallises the play's tragic vision of female dependence within a hostile patriarchal world. Williams ends not with judgement but with this almost ceremonial exit."
              />
              <QuoteCard
                quote="Stella! Hey, Stella!"
                speaker="Stanley, Scene 3"
                analysis="The famous bellowing cry from the street after Stanley has beaten Stella. The primal, animal call &mdash; reduced to her name &mdash; expresses both his violence and his erotic dependence. Stella's descent of the staircase to him stages the inseparability of desire and abuse in their marriage. Brando's 1947 delivery made the line one of the most quoted in American drama."
              />
              <QuoteCard
                quote="I don't want realism. I want magic! Yes, yes, magic! I try to give that to people. I misrepresent things to them. I don't tell truth, I tell what ought to be truth."
                speaker="Blanche, Scene 9"
                analysis="Blanche's defence of illusion to Mitch after he has torn the lantern from the bulb. The exclamatory tricolon (&lsquo;magic! Yes, yes, magic!&rsquo;) and the careful distinction between &lsquo;truth&rsquo; and &lsquo;what ought to be truth&rsquo; show Williams's sympathy for the lie as a form of moral creativity. Williams refuses to side simply with Stanley's &lsquo;truth&rsquo; against Blanche's &lsquo;magic.&rsquo;"
              />
              <QuoteCard
                quote="The opposite is desire."
                speaker="Blanche, Scene 9"
                analysis="Blanche replies to Mitch's mention of death with this stark counter. The line crystallises the play's structuring opposition: against the long parade of family deaths at Belle Reve, the only force she has known to set against mortality is sexual desire &mdash; which is also what has destroyed her. The line stands as the play's explicit philosophical statement."
              />
              <QuoteCard
                quote="He acts like an animal, has an animal's habits! Eats like one, moves like one, talks like one!"
                speaker="Blanche, Scene 4"
                analysis="Blanche's denunciation of Stanley to Stella, overheard by him. The repetitive parallelism (&lsquo;eats... moves... talks&rsquo;) reduces Stanley to bestial functions. The speech is laced with class disgust &mdash; Stanley as the &lsquo;survivor of the stone age&rsquo; &mdash; and provokes his vendetta. Williams ironises Blanche: her revulsion is rooted in Old-South snobbery, but the audience is asked to weigh that against the genuine danger Stanley poses."
              />
              <QuoteCard
                quote="Maybe we are a long way from being made in God's image, but Stella &mdash; my sister &mdash; there has been some progress since then!"
                speaker="Blanche, Scene 4"
                analysis="Within the &lsquo;ape&rsquo; speech. The reference to the human as &lsquo;made in God's image&rsquo; situates the quarrel in a Christian-classical frame Blanche shares with the dying gentility of the Old South. &lsquo;Some progress&rsquo; is dryly understated; the implication is that Stanley represents a regression from civilisation. Williams gives Blanche a moralist's vocabulary even at her most snobbish."
              />
              <QuoteCard
                quote="There are things that happen between a man and a woman in the dark that sort of make everything else seem &mdash; unimportant."
                speaker="Stella, Scene 4"
                analysis="Stella's defence of her marriage. The euphemistic &lsquo;things that happen... in the dark&rsquo; refuses to specify but plainly invokes sex. The dash before &lsquo;unimportant&rsquo; is Williams's favourite mark for a half-acknowledged truth. Stella articulates the play's theme of desire as an obliterating force; everything else &mdash; abuse, class, decency &mdash; is rendered &lsquo;unimportant&rsquo; by it."
              />
              <QuoteCard
                quote="We've had this date with each other from the beginning."
                speaker="Stanley, Scene 10 (immediately before the rape)"
                analysis="Stanley's sneering line as he advances on Blanche. The diction is chilling: &lsquo;date&rsquo; reframes assault as romantic appointment, and &lsquo;from the beginning&rsquo; suggests inevitability. The line implicates the antagonism that has run through the play and refuses any reading of the rape as a sudden act; Stanley figures it as the predetermined outcome of their conflict. Williams forces the audience to recognise how rape is rationalised as mutual destiny."
              />
              <QuoteCard
                quote="Flores. Flores. Flores para los muertos. Flores. Flores."
                speaker="The Mexican Woman, Scene 9"
                analysis="The blind flower-seller's street cry breaks into the scene as Blanche confesses her past to Mitch. &lsquo;Flowers for the dead&rsquo; functions as a lament for Allan Grey, for Belle Reve, and proleptically for Blanche herself. The Spanish underlines the multi-ethnic New Orleans setting and adds a foreign, ritualistic resonance. Williams uses sound expressionistically: the cry is realistic but also internal, an auditory hallucination of impending death."
              />
              <QuoteCard
                quote="I've never had a real good look at you, Blanche."
                speaker="Mitch, Scene 9"
                analysis="As Mitch rips the paper lantern from the bulb. The ordinary phrase &lsquo;real good look&rsquo; carries the weight of moral exposure: he is determined to see her literally and figuratively. The line marks the play's decisive turn from courtship to humiliation; from this moment Blanche has nowhere to retreat."
              />
              <QuoteCard
                quote="I couldn't believe her story and go on living with Stanley."
                speaker="Stella, Scene 11"
                analysis="Stella's explanation to Eunice for committing Blanche to the asylum. The grammar is exact: not &lsquo;I don't believe&rsquo; but &lsquo;I couldn't believe.&rsquo; She admits the disbelief is a chosen necessity, not a verdict. Williams puts the play's moral burden on the spectator: Stella's complicity is conscious. The line implicates wider patriarchal structures in which women survive by refusing other women's testimony."
              />
              <QuoteCard
                quote="Don't ever believe it. Life has got to go on. No matter what happens, you've got to keep on going."
                speaker="Eunice, Scene 11"
                analysis="Eunice's consolation to Stella. The unsentimental working-class realism stands as the play's alternative ethic to Blanche's &lsquo;magic.&rsquo; Williams places it deliberately just before the asylum scene: it both supports Stella's decision and indicts it. &lsquo;Don't ever believe it&rsquo; is a chilling injunction to refuse a woman's testimony in order to keep the household intact."
              />
              <QuoteCard
                quote="I can't stand a naked light bulb, any more than I can a rude remark or a vulgar action."
                speaker="Blanche, Scene 3"
                analysis="Blanche to Mitch as she covers the bulb with the paper lantern. The triple equation &mdash; bulb, rude remark, vulgar action &mdash; collapses literal and moral exposure. The bare bulb is rude; rudeness is a kind of bare bulb. Williams gives Blanche an aesthetic creed in a sentence: she requires soft light, soft speech, soft handling, and the world of Elysian Fields will deny her all three."
              />
              <QuoteCard
                quote="Whoever you are &mdash; I have always depended on the kindness of strangers."
                speaker="Blanche, Scene 11"
                analysis="The full closing line, addressed to the Doctor whose face she has not properly seen. &lsquo;Whoever you are&rsquo; is the most painful phrase in the line: she no longer asks for identity, only courtesy. The triple dependence &mdash; on strangers, on kindness, on the protection of an unknown male hand &mdash; is Williams's final image of her condition. The Matron has been cruel; the Doctor is gentle; Blanche walks out on the gentle one."
              />
              <QuoteCard
                quote="Don't &mdash; don't hang back with the brutes!"
                speaker="Blanche, Scene 4"
                analysis="The climax of Blanche's ape-speech to Stella, urging her to leave Stanley. &lsquo;Brutes&rsquo; is a charged word in 1947 America, with overtones of bestiality and atavism. Stanley overhears the line, weaponising the insult into the personal antagonism that drives the second half of the play. Williams marks the moment at which their conflict becomes unavoidable."
              />
              <QuoteCard
                quote="Poems a dead boy wrote."
                speaker="Blanche, Scene 2"
                analysis="When Stanley seizes the bundle of Allan Grey's papers. The four-word line &mdash; quietly devastating &mdash; is Blanche's most direct invocation of her dead husband. &lsquo;A dead boy&rsquo; refuses the dignity of a name and yet carries the entire weight of her grief. The scene establishes early that Blanche's past is mourned rather than boastful, and that Stanley's hands are an instinctive violation of the inner life he will keep tearing into."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Key Symbols`)} icon="🎭">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Paper Lantern`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Chinese paper lantern Blanche places over the naked light bulb in Scene 3 is
                  the play&apos;s defining domestic symbol. She tells Mitch &ldquo;I can&apos;t
                  stand a naked light bulb, any more than I can a rude remark or a vulgar
                  action.&rdquo; The lantern is a metonym for her whole project of illusion: it
                  softens harsh light, hides her ageing face, and spares her her own past. When
                  Mitch tears it from the bulb in Scene 9 the literal destruction enacts her
                  psychological unmasking. Stanley likewise rips it off and shoves it at her in the
                  play&apos;s dying minutes, completing the symbolic violence.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  The Streetcar Lines: Desire, Cemeteries, Elysian Fields
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The three streetcar names in Blanche&apos;s opening account form the symbolic
                  spine of the play. Desire is the engine of her ruin (the Hotel Flamingo, the
                  seventeen-year-old, Allan); Cemeteries is the long parade of deaths at Belle Reve;
                  Elysian Fields is the Greek underworld of the blessed dead, the address of the
                  Kowalski flat. The literal map of New Orleans becomes a mythic itinerary: a woman
                  riding Desire through Cemeteries to a final paradise that is no paradise but an
                  ending. The streetcar is also visible and audible throughout the play, a constant
                  urban thrum behind the dialogue.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Varsouviana / Polka Music`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The polka tune Williams calls &lsquo;the Varsouviana&rsquo; is the music that was
                  playing on the Moon Lake Casino dance floor when Blanche told Allan Grey he
                  disgusted her, moments before he shot himself. Across the play it returns whenever
                  Blanche remembers Allan; the audience hears it but the other characters do not,
                  locating it inside her head. The Varsouviana is Williams&apos;s most striking
                  expressionist device: it lets us hear trauma directly, without verbal explanation.
                  As the play moves toward catastrophe the polka is heard more frequently,
                  signalling Blanche&apos;s loss of contact with the present.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Blanche&apos;s Costumes`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Williams describes Blanche&apos;s costumes with care. She enters in a &lsquo;white
                  suit with a fluffy bodice, necklace and earrings of pearl, white gloves and
                  hat,&rsquo; an ensemble that recalls a wedding outfit and underlines the moth
                  motif. She owns rhinestones that Stanley mistakes for diamonds, a soiled satin
                  gown, a tiara. The trunk-full of furs and costume jewellery, ransacked by Stanley
                  in Scene 2, is a metonym for the whole Old-South performance Blanche puts on. By
                  Scene 10 the white satin is &lsquo;crumpled&rsquo;: the costume has lost its power
                  to deceive even herself.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  The Mexican Flower-Seller: &lsquo;Flores para los muertos&rsquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The blind Mexican woman who passes through the street in Scene 9 selling tin
                  flowers and crying &lsquo;Flores. Flores para los muertos&rsquo; is one of
                  Williams&apos;s purest expressionist intrusions. She is realistic enough as a New
                  Orleans street character but her entrance synchronises with Blanche&apos;s
                  confession of the deaths at Belle Reve. The Spanish phrase &lsquo;flowers for the
                  dead&rsquo; intones a ritual lament. Williams uses her blindness to figure the
                  play&apos;s broader theme of unseeing: she neither sees Blanche nor is fully seen.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Bathing and Cleansing`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Blanche bathes obsessively across the play: Scene 2, Scene 7, Scene 8, before the
                  rape in Scene 10. She calls it &lsquo;hydrotherapy&rsquo; and tells Stella the
                  long bath has &lsquo;cooled and quieted&rsquo; her nerves. Symbolically the
                  bathing is a futile rite of cleansing: she is washing off the shame of her past,
                  especially the disgrace at Laurel and the death of Allan. Stanley, by contrast,
                  strips off his sweaty work clothes and emerges cleansed of physical labour:
                  cleanliness in his world is straightforward, while in Blanche&apos;s it is
                  metaphysical and unattainable.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`The &lsquo;Blue Piano&rsquo; and Jazz`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Williams&apos;s opening stage directions describe a &lsquo;blue piano&rsquo;
                  &lsquo;expressing the spirit of the life which goes on here.&rsquo; A jazz piano
                  drifts in from a tonk around the corner, joined sometimes by a saxophone. The blue
                  piano is the realistic soundtrack of Elysian Fields, but it is also a chorus: in
                  Scene 10, as the rape becomes inevitable, the piano &lsquo;goes into a hectic
                  breakdown.&rsquo; Music in <em>Streetcar</em> is always commenting on the action,
                  blurring the line between the external New Orleans and Blanche&apos;s internal
                  world.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Poker Game`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poker games of Scenes 3 and 11 frame the play structurally: the same male
                  ritual at the start of the catastrophe and at its end. Williams describes the
                  kitchen at the poker night as &lsquo;raw colors of childhood&apos;s
                  spectrum,&rsquo; locating the men in a regressed, primary visual field. The game
                  stands for the homosocial world of the new America: rule-bound, competitive,
                  indifferent to women. By repeating the poker game in the final scene Williams
                  suggests that nothing has changed and that the destruction of Blanche has not
                  interrupted the men&apos;s lives at all.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level style questions modelled on AQA and OCR specifications. Each question
              includes a thesis, paragraph plan, and suggested quotations.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &lsquo;Williams presents Blanche as both a victim and an architect of her own
                  destruction.&rsquo; To what extent do you agree? (AQA-style, 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams stages Blanche as primarily a victim &mdash; of bereavement,
                      patriarchy, sexual violence and class displacement &mdash; but does not exempt
                      her from agency: her cruelty to Allan Grey, her snobbery, and her
                      self-deceptions are her own. The play&apos;s power lies in refusing to choose
                      between these readings.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Victim of historical displacement
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Belle Reve, the &lsquo;long parade to the graveyard&rsquo;, the lost teaching
                      post. Blanche arrives at Elysian Fields already destroyed by historical forces
                      beyond her control: the death of the planter class, Williams&apos;s post-war
                      America. Quote the streetcar route as symbolic itinerary.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Architect of her own ruin: Allan Grey
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;You disgust me.&rsquo; The dance-floor confession in Scene 6.
                      Blanche&apos;s cruelty to Allan kills him and shapes the rest of her life.
                      Williams refuses to absolve her: the Varsouviana is the auditory mark of her
                      guilt, not just her grief.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Victim of patriarchal sexual codes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Hotel Flamingo, the seventeen-year-old, Mitch&apos;s &lsquo;not clean
                      enough&rsquo;, Stanley&apos;s rape. Blanche is punished by structures that do
                      not punish men for the same conduct. She is constructed as &lsquo;dirty&rsquo;
                      by a culture that needs her to be.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Architect through illusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The paper lantern, &lsquo;magic&rsquo;, Shep Huntleigh, the rhinestone tiara.
                      Blanche&apos;s lies, while a defence, also accelerate her destruction: they
                      fuel Stanley&apos;s investigation and Mitch&apos;s revulsion. Williams treats
                      illusion ambivalently, both as protection and as collusion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams refuses the binary. Blanche is the work of historical forces that
                      crush her and of choices for which she is morally accountable. The play&apos;s
                      tragic vision depends on holding both at once.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Discuss the dramatic significance of Stanley Kowalski in{' '}
                  <em>A Streetcar Named Desire</em>. (OCR-style)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Stanley is dramatically significant not as a simple villain but as the
                      embodiment of post-war American masculinity displacing the dying genteel
                      South. Williams insists on his vitality and on his violence and refuses to let
                      the audience separate them.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The new America
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Polish-American, working-class, ex-soldier. Williams&apos;s opening stage
                      directions describe his &lsquo;animal joy in his being.&rsquo; Stanley is the
                      centre of the homosocial world of poker, bowling, factory. He embodies the
                      world Blanche has lost to.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Truth-teller
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Napoleonic Code, the Hotel Flamingo, the bus ticket. Stanley relentlessly
                      investigates and exposes Blanche. Williams partly endorses this:
                      Blanche&apos;s lies do exist. But he frames the truth-telling as itself
                      violent, a stripping that destroys the woman it exposes.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Sexuality and violence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;STELLA!&rsquo;, the smashed radio, the rape. Williams insists on
                      Stanley&apos;s sexual charisma and on his brutality as inseparable. The
                      bedrock of the Kowalski marriage and the catastrophe of Scene 10 are the same
                      physical force.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Refusal of melodrama
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The closing poker game, Stanley comforting Stella as Blanche is led out.
                      Williams ends with Stanley intact, his life uninterrupted. The play implicates
                      the audience in his survival; we have watched what he is and now watch him
                      resume his evening. This is the deeper political shock.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. Explore Williams&apos;s use of expressionist staging in{' '}
                  <em>A Streetcar Named Desire</em>. (AQA-style)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams uses sound, lighting and set as expressionist projections of
                      Blanche&apos;s inner state, making the audience experience trauma directly
                      rather than learn about it secondhand. Realism alone, he implies, cannot
                      represent the breakdown of a mind.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Sound: the Varsouviana
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Polka music tied to Allan Grey&apos;s suicide; only Blanche hears it;
                      intensifies as the play approaches catastrophe. The audience occupies her
                      interior. Reference Scene 6&apos;s confession and Scene 10&apos;s rape.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Sound: the blue piano and the street
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The blue piano &lsquo;goes into a hectic breakdown&rsquo; in Scene 10; the cry
                      of &lsquo;Flores para los muertos&rsquo; in Scene 9. Williams uses
                      naturalistic New Orleans sound expressionistically: every street noise
                      comments on the action.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Light and the paper lantern
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The paper lantern as physical metaphor for self-protection; Mitch tearing it
                      off; the bare bulb. Light in this play is not natural illumination but moral
                      exposure. Reference Blanche&apos;s avoidance of daylight and Williams&apos;s
                      stage directions on lamp colour.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The transparent walls of Scene 10
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In the rape scene the walls of the flat &lsquo;become transparent&rsquo; and
                      grotesque shadows of pursuit are projected on the back wall. Williams abandons
                      realism entirely at the play&apos;s climactic moment: the audience is shown
                      the inside of Blanche&apos;s collapse. This is the theatrical correlative of
                      psychic disintegration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Expressionism in <em>Streetcar</em> is not decorative but ethical: it is the
                      only way to put a traumatised consciousness on stage without reducing it to
                      dialogue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. &lsquo;<em>A Streetcar Named Desire</em> presents desire as inseparable from
                  death.&rsquo; Discuss. (OCR-style)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams stages desire and death not as opposites but as a continuum. The
                      play&apos;s symbolic geography (Desire-Cemeteries-Elysian Fields), its
                      narrative shape (each act of desire produces a death) and its closing line all
                      enforce the connection.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The streetcar itinerary
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Blanche&apos;s opening journey. Desire to Cemeteries to Elysian Fields. The
                      literal map of New Orleans is a mythic map of the play&apos;s thematic spine.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Allan Grey
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Blanche&apos;s desire for the &lsquo;tenderness&rsquo; of a young man, her
                      recoil at his homosexuality, her cruelty, his suicide. The first death in the
                      play&apos;s backstory is caused by the rejection of a particular form of
                      desire.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Belle Reve and the &lsquo;long parade&rsquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The &lsquo;epic fornications&rsquo; of the male DuBois ancestors that ruin the
                      estate; the long parade of relatives dying in &lsquo;the bed&rsquo;. Desire
                      and death cohabit in the family&apos;s decline, the Old South corrupted from
                      within.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Stanley&apos;s rape
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;We&apos;ve had this date with each other from the beginning.&rsquo; The
                      play&apos;s climactic act of desire is also its central act of psychic
                      killing. Williams forces the audience to see sexual violence as the terminal
                      point of the desire-death continuum.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Blanche&apos;s reply to Mitch &mdash; &lsquo;The opposite is desire&rsquo;
                      &mdash; turns out to be the play&apos;s false premise. Desire is not the
                      opposite of death but its companion, perhaps even its agent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. Examine Williams&apos;s presentation of women in{' '}
                  <em>A Streetcar Named Desire</em>. (AQA-style)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams presents the women of <em>Streetcar</em> as caught in a patriarchal
                      economy where survival requires either the suppression of testimony (Stella)
                      or the embrace of illusion (Blanche). The play exposes the structural
                      conditions of women&apos;s lives in 1947 America rather than blaming
                      individuals.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Blanche and the policing of female sexuality
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The double standard at Laurel: she is sacked, Stanley&apos;s appetites are
                      unremarked. Mitch&apos;s &lsquo;not clean enough&rsquo;. Williams shows how
                      female sexuality is managed by a moral vocabulary (&lsquo;dirty&rsquo;,
                      &lsquo;clean&rsquo;) not applied to men.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Stella&apos;s economic and biological dependence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pregnancy, the Napoleonic Code, the inability to leave. Stella&apos;s
                      &lsquo;I couldn&apos;t believe her story and go on living with Stanley&rsquo;
                      is not malice but survival arithmetic. Williams insists we see the structures,
                      not just the individual.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Eunice and working-class women
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;Don&apos;t ever believe it. Life has got to go on.&rsquo; Eunice&apos;s
                      realism is the working-class counterpart of Stella&apos;s decision: women keep
                      going by refusing other women&apos;s testimony. The Hubbell marriage offers
                      the comic-bleak template the Kowalski one matches.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Rose Williams and the asylum
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams&apos;s sister Rose, lobotomised in 1943, stands behind Blanche&apos;s
                      committal. The doctor and matron, the gentle gesture and the straitjacket:
                      psychiatric institutions as the final patriarchal solution to the inconvenient
                      woman. The biographical context sharpens the political reading.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Williams writes the play as an indictment, not a portrait. The women of{' '}
                      <em>Streetcar</em> are products of the world they inhabit; their compromises
                      and breakdowns are the cost of female life within it.
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
          A-Level Exam Tips for <em>A Streetcar Named Desire</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Treat the play as a play.`)}</strong> AQA and OCR examiners reward
              analysis of stagecraft. Discuss Williams&apos;s stage directions, the Varsouviana, the
              blue piano, transparent walls, the paper lantern &mdash; these are dramatic methods,
              not background detail.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Anchor every argument in context.`)}</strong> Post-war New Orleans, the
              decline of the planter South, the censorship of homosexuality, Williams&apos;s sister
              Rose. The 2015 AQA specification (LITB3) and the OCR closed-book paper both award
              explicit AO3 marks for context.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Hold opposing readings simultaneously.`)}</strong> AO5 (interpretations)
              is a major discriminator at A-Level. Stanley as villain vs Stanley as truth-teller.
              Blanche as victim vs Blanche as architect. Stella as complicit vs Stella as realist.
              Top answers refuse to choose.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise dramatic vocabulary.`)}</strong> Refer to
              &lsquo;expressionism&rsquo;, &lsquo;Southern Gothic&rsquo;, &lsquo;homosocial&rsquo;,
              &lsquo;Method acting&rsquo;, &lsquo;stage direction&rsquo;, &lsquo;dramatic
              irony&rsquo;, &lsquo;chorus&rsquo;. The vocabulary signals critical fluency.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote precisely and economically.`)}</strong> Embed short fragments
              rather than long blocks. &lsquo;magic&rsquo;, &lsquo;the kindness of strangers&rsquo;,
              &lsquo;the opposite is desire&rsquo;, &lsquo;Flores para los muertos&rsquo;. Examiners
              reward integrated quotation over quotation that interrupts the argument.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole play.`)}</strong> The opening streetcar route, the
              closing kindness of strangers, the recurring poker games. Top responses move freely
              across all eleven scenes rather than dwelling on extracts.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>A Streetcar Named Desire</em> by Tennessee Williams was first performed on Broadway on
          3 December 1947 and published the same year. Williams died in 1983; the play remains in
          copyright. All quotations on this page are reproduced for the purposes of education and
          critical commentary.
        </p>
      </footer>
    </>
  )
}
