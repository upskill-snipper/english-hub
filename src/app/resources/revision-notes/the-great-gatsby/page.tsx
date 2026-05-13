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

export default function TheGreatGatsbyPage() {
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
            20th-Century Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR A-Level
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Great Gatsby &mdash; A-Level Revision Notes
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">F. Scott Fitzgerald, 1925</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Substantive revision notes for A-Level English Literature: chapter-by-chapter plot, eight
          character profiles, six major themes, 1920s context (Jazz Age, Prohibition, the Lost
          Generation, Fitzgerald and Zelda), 18 key quotations with analysis, the novel&apos;s
          symbolic system, and AQA / OCR / Edexcel-style exam questions with planning notes.
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
          <Section title={tr(`Chapter-by-Chapter Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Chapter 1
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nick Carraway, the narrator, has moved from the Midwest to West Egg, Long Island,
                  in summer 1922 to learn the bond business. He visits his cousin Daisy and her
                  husband Tom Buchanan in fashionable East Egg, where he meets the golfer Jordan
                  Baker. Tom takes a phone call from his mistress; Jordan reveals the affair.
                  Returning home, Nick glimpses his mysterious neighbour Jay Gatsby standing on the
                  lawn, arms stretched toward a single green light across the bay.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Nick&apos;s opening reflection on his father&apos;s advice about
                      reserving judgement
                    </li>
                    <li>
                      &bull; The Buchanan dinner &mdash; Tom&apos;s racism, Daisy&apos;s
                      &ldquo;beautiful little fool&rdquo; speech
                    </li>
                    <li>&bull; First sighting of Gatsby and the green light</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Chapter 2
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tom takes Nick to the Valley of Ashes, the desolate industrial wasteland between
                  West Egg and New York, watched over by the faded billboard of Doctor T. J.
                  Eckleburg. Tom collects his mistress Myrtle Wilson, wife of the garage owner
                  George, and the three travel to a vulgar party at a Manhattan apartment Tom keeps
                  for the affair. The evening ends when Myrtle taunts Tom with Daisy&apos;s name and
                  he breaks her nose.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; First description of the Valley of Ashes &mdash; &ldquo;ash-grey
                      men&rdquo;
                    </li>
                    <li>&bull; The eyes of Doctor T. J. Eckleburg introduced</li>
                    <li>&bull; Tom&apos;s violence &mdash; the broken nose</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Chapter 3
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nick attends one of Gatsby&apos;s legendary parties for the first time, having
                  been formally invited. He finds an extravagant spectacle of champagne, jazz, and
                  uninvited guests. He meets Gatsby almost by accident, struck by his sudden, formal
                  smile. Rumours about Gatsby circulate: that he killed a man, that he was a German
                  spy. Nick begins a relationship with Jordan Baker.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The party &mdash; orchestral excess and anonymous crowds</li>
                    <li>
                      &bull; &ldquo;Owl Eyes&rdquo; in the library marvels at the real, uncut books
                    </li>
                    <li>&bull; Nick first meets Gatsby and his famous smile</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Chapter 4
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Gatsby drives Nick into New York in his cream-coloured car and tells an improbable
                  life story: educated at Oxford, family money from the Midwest, war hero. Nick
                  lunches with Gatsby and the gangster Meyer Wolfsheim, who fixed the 1919 World
                  Series. That afternoon, Jordan reveals the truth: Gatsby loved Daisy in Louisville
                  in 1917 before the war, and his entire fortune and house exist to win her back. He
                  asks Nick to arrange a tea so he can meet her again.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Gatsby&apos;s self-mythologising biography</li>
                    <li>
                      &bull; Wolfsheim and the fixed World Series &mdash; corruption beneath the
                      wealth
                    </li>
                    <li>&bull; Jordan reveals the Daisy backstory</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Chapter 5
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nick hosts the reunion. Gatsby is paralysed by nerves; the meeting is awkward
                  until the three move to Gatsby&apos;s mansion, where Gatsby shows Daisy his wealth
                  in a display of almost desperate intensity, hurling shirts onto the bed until she
                  weeps. The chapter is the emotional centre of the novel: Gatsby has achieved his
                  dream, but Nick notices that the real Daisy cannot match the version Gatsby has
                  built in five years of imagination.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The reunion in Nick&apos;s cottage &mdash; rain and broken clocks
                    </li>
                    <li>&bull; The shirt scene &mdash; wealth as substitute for self</li>
                    <li>&bull; Nick&apos;s recognition that the dream exceeds the reality</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  Chapter 6
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nick reveals Gatsby&apos;s true origins: he was born James Gatz, the son of poor
                  North Dakota farmers, and reinvented himself at seventeen after meeting the
                  millionaire Dan Cody. Tom and Daisy attend one of Gatsby&apos;s parties; Daisy is
                  appalled by the crowd. Afterwards Gatsby insists to Nick that he can repeat the
                  past. Nick&apos;s warning &mdash; &ldquo;You can&apos;t repeat the past&rdquo;
                  &mdash; is dismissed.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The James Gatz / Dan Cody backstory &mdash; the self-made man</li>
                    <li>&bull; Daisy&apos;s recoil from the party</li>
                    <li>
                      &bull; &ldquo;Can&apos;t repeat the past?... Why of course you can!&rdquo;
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Chapter 7
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s longest and most violent chapter. On a sweltering day, the group
                  lunches at the Buchanans&apos; before driving to the Plaza Hotel in New York.
                  There Tom confronts Gatsby, exposing him as a bootlegger and demanding Daisy
                  choose. Daisy cannot say she never loved Tom. Driving home, Gatsby&apos;s yellow
                  car &mdash; with Daisy at the wheel &mdash; strikes and kills Myrtle Wilson, who
                  has run into the road thinking the yellow car contains Tom (she had seen him
                  driving it earlier that day). Gatsby resolves to take the blame.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The Plaza Hotel confrontation &mdash; Tom dismantles Gatsby</li>
                    <li>&bull; Daisy&apos;s inability to deny loving Tom</li>
                    <li>
                      &bull; Myrtle&apos;s death &mdash; the climax of the novel&apos;s violence
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Chapter 8
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Gatsby tells Nick the full story of his courtship of Daisy in Louisville. The next
                  morning, half-believing she might still call, he takes a swim in his pool. George
                  Wilson, deranged by Myrtle&apos;s death and pointed toward Gatsby by Tom, finds
                  him and shoots him, then turns the gun on himself. The chapter ends with the
                  abandoned pool, the floating mattress, and Gatsby&apos;s ruined dream.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Gatsby&apos;s confession of his Louisville love affair</li>
                    <li>
                      &bull; Wilson&apos;s breakdown &mdash; he sees God in Eckleburg&apos;s eyes
                    </li>
                    <li>&bull; The pool, the rifle, and the murder-suicide</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  Chapter 9
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Two years later, Nick narrates the aftermath. Almost no one attends Gatsby&apos;s
                  funeral &mdash; not Daisy, not Wolfsheim, only Nick, Owl Eyes, the servants, and
                  Gatsby&apos;s father, who arrives with a schedule the boy James Gatz once wrote
                  for self-improvement. Nick breaks with Jordan, encounters Tom on Fifth Avenue and
                  refuses his hand at first, and returns to the Midwest. The novel ends on the beach
                  in front of Gatsby&apos;s empty mansion with one of the most famous closing
                  passages in American literature.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The empty funeral &mdash; the carelessness of Gatsby&apos;s world
                    </li>
                    <li>&bull; James Gatz&apos;s boyhood schedule of self-improvement</li>
                    <li>
                      &bull; Nick&apos;s closing meditation &mdash; the green light, the boats, the
                      past
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
                name="Nick Carraway"
                description="The novel's first-person narrator, a Yale-educated Midwesterner who moves East to learn the bond business in 1922. Nick claims in the opening pages to be 'one of the few honest people that I have ever known' and to reserve judgement, but this self-presentation is one of the novel's central tensions: he facilitates Gatsby's affair with his married cousin, lies to Tom about who was driving, and admires Gatsby in spite of everything. He acts as both observer and participant, and his retrospective narration is shaped by grief and admiration. Critics have read him variously as a reliable moral centre, an unreliable narrator drawn to wealth, and a closeted observer of male beauty (the encounter with Mr McKee in Chapter 2 is often cited). For exam purposes, treat his perspective as deliberately partial: every judgement on the Buchanans, on Gatsby, on the East itself is filtered through his disillusionment."
              />
              <CharacterCard
                name="Jay Gatsby (James Gatz)"
                description="The title character: a self-made millionaire whose entire identity is an act of will. Born James Gatz to poor farmers in North Dakota, he reinvents himself at seventeen on Dan Cody's yacht and accumulates a bootlegging fortune in order to recover Daisy, whom he met and lost in Louisville in 1917. Fitzgerald presents him as 'a son of God' who 'sprang from his Platonic conception of himself' &mdash; an almost mythic figure of American self-creation. His repeated affectation 'old sport' marks the strain of the disguise. He is simultaneously a fraud and the most admirable figure in the novel, a criminal whose dream Nick calls 'incorruptible.' His tragedy is that the woman he has rebuilt his life around cannot match the idealised image he has carried for five years, and his refusal to accept this ('Can't repeat the past? Why of course you can!') seals his ruin."
              />
              <CharacterCard
                name="Daisy Buchanan"
                description="Nick's second cousin once removed, Tom's wife, and the object of Gatsby's obsession. Her voice, Gatsby tells Nick, 'is full of money' &mdash; a metaphor that fuses her romantic appeal with her class status. Daisy is charming, sad, and morally hollow: she lets Gatsby take the blame for Myrtle's death and disappears with Tom rather than choose. Her famous wish that her daughter be 'a beautiful little fool' is both a critique of women's options in the 1920s and a confession of her own willed superficiality. She is not simply the shallow heiress some readings make her: there is genuine feeling in the reunion, and the cruelty of her choice in Chapter 7 carries the weight of someone who has glimpsed an alternative life and rejected it. Modern critics increasingly read her as trapped within Tom's wealth as much as protected by it."
              />
              <CharacterCard
                name="Tom Buchanan"
                description="Daisy's husband, an immensely wealthy ex-Yale football player who represents inherited 'old money' East Egg society. Tom is a bully, a serial adulterer, a casual racist (he is reading 'The Rise of the Coloured Empires' in Chapter 1), and a hypocrite who attacks Gatsby's lower-class origins while keeping a mistress in a Manhattan flat. Fitzgerald gives him real menace: his 'cruel body' breaks Myrtle's nose with one open hand. Crucially, Tom is the novel's only character whose worldview survives the summer intact. He prospers, Gatsby dies, and in Chapter 9 he tells Nick without remorse that Wilson's gun went where it should. He embodies the durability of inherited privilege."
              />
              <CharacterCard
                name="Jordan Baker"
                description="A professional golfer, friend of Daisy, and Nick's summer love interest. Jordan is poised, athletic, and 'incurably dishonest' &mdash; rumour has it she moved her ball from a bad lie at her first big tournament. Her sportsmanship and faint masculinity made her a model of the post-war 'New Woman' to Fitzgerald's first readers. She functions as a bridge between the Buchanan circle and Gatsby's, and as a foil for Daisy: cooler, more independent, less in thrall to Tom. The relationship ends in Chapter 9: Nick says he is 'five years too old to lie to myself and call it honor.' Jordan delivers the novel's final sting, accusing Nick of being just another careless driver."
              />
              <CharacterCard
                name="Myrtle Wilson"
                description="George Wilson's wife and Tom's mistress, the only major character from the working class. Living above a garage in the Valley of Ashes, Myrtle aspires furiously to the wealth she sees in Tom. Fitzgerald describes her as having 'an immediately perceptible vitality' &mdash; a physical energy that contrasts with Daisy's languor. The Manhattan apartment, the change of dress, the puppy, the social pretensions: these are her attempt at class mobility, and Tom indulges them with cold enjoyment. Her death under Gatsby's car &mdash; struck while running toward what she thinks is Tom's vehicle &mdash; literalises the novel's central irony: she is killed by the very wealth she chases."
              />
              <CharacterCard
                name="George Wilson"
                description="The garage owner in the Valley of Ashes; husband of Myrtle. Pale, dust-covered, and exhausted, he is 'an ash-grey man' formed by the wasteland he inhabits. George is the most unambiguously sympathetic figure in the novel, but Fitzgerald uses his fate to indict American class rigidity: he is destroyed by forces he cannot see. After Myrtle's death he equates the eyes of T. J. Eckleburg with the eyes of God, and in this state Tom is able to direct him toward Gatsby. He shoots Gatsby and then himself, an act that consumes the novel's two principal male characters and leaves the careless rich untouched."
              />
              <CharacterCard
                name="Meyer Wolfsheim"
                description="A Jewish gangster, modelled on the real-life Arnold Rothstein, who fixed the 1919 World Series and serves as Gatsby's mentor in organised crime. He wears human molars as cuff-buttons. Wolfsheim provides the source of Gatsby's wealth and a glimpse of the underworld that financed the Jazz Age. His characterisation is uncomfortably antisemitic by modern standards &mdash; an aspect worth flagging in any exam answer that engages with the novel's representation of race and ethnicity. After Gatsby's death he refuses to come to the funeral, claiming a policy of not getting involved &lsquo;when a man gets killed.&rsquo; His absence completes the pattern of betrayal."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`The American Dream`)}
                description="Fitzgerald's most famous theme. Gatsby embodies the dream's most romantic version &mdash; that anyone, however humbly born, can remake himself through will and desire. James Gatz's boyhood schedule of self-improvement, recovered by his father in Chapter 9, is a Benjamin-Franklin-style document of American aspiration. But Gatsby's wealth is bootlegging money and his goal is another man's wife: the dream is corrupted at the source. The novel's ending pulls the dream backwards, comparing Gatsby's green light to the 'fresh, green breast of the new world' that the Dutch sailors saw &mdash; suggesting that the American Dream was always a backwards-looking fantasy of recovered innocence, doomed to outpace reality. Fitzgerald is both elegist and critic: he mourns the dream and exposes it."
              />
              <ThemeCard
                title={tr(`Class and Wealth`)}
                description="The novel's geography is the novel's class system. East Egg is old money; West Egg, where Gatsby builds his Norman-style mansion, is new money; the Valley of Ashes is the dust into which industrial wealth is converted. Tom's contempt for Gatsby is not really about morality &mdash; Tom is corrupt himself &mdash; but about lineage. Daisy chooses East Egg because it is permanent. Fitzgerald presents American class as a fortress with the door pulled shut behind those already inside: Gatsby's bootlegging buys him a house but never an identity. The novel anticipates later sociological accounts of how 'old money' polices its own borders by aesthetic means: dress, accent, sport, and casual cruelty."
              />
              <ThemeCard
                title={tr(`Love versus Obsession`)}
                description="What Gatsby feels for Daisy is not love in any reciprocal sense. He has spent five years building a fantasy version of her, and when the real woman fails to match it, he refuses to accept the gap. Nick observes that 'no amount of fire or freshness can challenge what a man can store up in his ghostly heart.' This is the novel's most penetrating insight into romantic obsession: the beloved becomes a screen for the lover's projection. Daisy is both real (she has feelings, fears, a child) and a function of Gatsby's dream. Her tragedy is that she cannot live up to either role, and in Chapter 7 she stops trying. Fitzgerald is unflinching about the self-centredness inside what looks like devotion."
              />
              <ThemeCard
                title={tr(`Time and Memory`)}
                description="Clocks and calendars haunt the novel. Gatsby knocks Nick's mantel clock during the reunion in Chapter 5 &mdash; a comic image of his attempt to stop time. He insists, against Nick, that the past can be repeated. The book's recurring autumn imagery, its compression of action into a single summer, its closing image of 'boats against the current, borne back ceaselessly into the past' all dramatise the impossibility of recovering what is gone. Fitzgerald, writing in 1924&ndash;25, is also conscious of post-war time: the trenches have made innocence retrospectively impossible for an entire generation, and Gatsby's dream of Louisville-before-the-war shares in that wider grief."
              />
              <ThemeCard
                title={tr(`Moral Decay`)}
                description="Beneath the surface glamour, the novel charts the rotting of post-war American values. Wolfsheim has fixed the World Series. Gatsby is a bootlegger. Tom is a casual racist and adulterer. Daisy lets a man die for her. Even Nick, who claims honesty, lies and looks the other way. The Valley of Ashes is the novel's literal symbol of this decay &mdash; the by-product of a society that produces wealth without producing meaning. Fitzgerald, who wrote during the Harding-administration corruption scandals, presents the Jazz Age as a society in moral free-fall, its hollowness exposed by the violence of one summer. The blue lawn parties exist because nothing else holds together."
              />
              <ThemeCard
                title={tr(`East versus West / Old Money versus New`)}
                description="Nick's closing reflection identifies the novel as 'a story of the West, after all.' Tom, Daisy, Jordan, Gatsby, and Nick are all Midwesterners; only the East has the wealth and the social machinery to undo them. East Egg's old money is established, dynastic, and self-protecting; West Egg's new money is gaudy, anxious, and disposable. Fitzgerald uses this geographical opposition to explore American identity: the Midwest as a site of supposed innocence, the East as the site of corruption, with the Buchanans as people who shuttle between the two and damage everything they touch. Nick's retreat to the Midwest in Chapter 9 is the novel's only available, and only partially convincing, moral resolution."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Biographical Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Jazz Age`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fitzgerald himself coined the phrase &ldquo;the Jazz Age&rdquo; for the decade
                  between the end of the First World War in 1918 and the Wall Street Crash of 1929.
                  Jazz, born in African-American communities in New Orleans and Chicago, became the
                  soundtrack of urban modernity: syncopated, improvisational, racially ambiguous,
                  and threatening to the older generation. The flapper &mdash; bobbed hair, short
                  skirts, cocktails &mdash; replaced the Victorian woman. Gatsby&apos;s parties,
                  with their orchestras and dancers, are the novel&apos;s set-piece rendering of
                  this culture.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Prohibition (1920&ndash;1933)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Eighteenth Amendment banned the manufacture and sale of alcohol in the United
                  States from January 1920. The result was not sobriety but the largest
                  organised-crime boom in American history: bootleggers smuggled liquor, speakeasies
                  served it, and figures like Arnold Rothstein (the model for Wolfsheim) ran the
                  supply chains. Gatsby&apos;s fortune is implied to come from this trade, perhaps
                  combined with fraudulent bond-trading. Tom uses this in Chapter 7 to destroy him:
                  bootlegging is the wound that respectable East Egg can press.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Post-War Disillusionment`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The First World War (1914&ndash;1918) had killed roughly 116,000 Americans and
                  destroyed the late-Victorian belief in moral progress. Gatsby and Nick are
                  veterans; Gatsby&apos;s officer&apos;s uniform is what makes him acceptable to
                  Daisy in 1917. The aimless, drunken parties, the casual cruelty, the obsession
                  with making and spending money are responses to a generation&apos;s loss of moral
                  certainty. Fitzgerald shares this with contemporaries Ernest Hemingway, John Dos
                  Passos, and T. S. Eliot.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Lost Generation`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Gertrude Stein&apos;s phrase, popularised by Hemingway, named the generation of
                  writers who had come of age during or just after the war and gathered as
                  expatriates in Paris in the 1920s. Fitzgerald wrote much of{' '}
                  <em>{tr(`The Great Gatsby`)}</em> on the French Riviera in 1924. The Lost
                  Generation&apos;s themes &mdash; the failure of pre-war ideals, the search for
                  meaning in style and sensation, the conviction that something fundamental had
                  broken &mdash; shape the novel&apos;s whole atmosphere.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Wall Street Boom`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stock prices roughly tripled between 1922 and 1929. Easy credit, new consumer
                  goods (the radio, the automobile), and a wave of speculative wealth created the
                  conditions for both Gatsby&apos;s parties and his bond-trading career. Nick has
                  come East specifically to enter the bond business. Fitzgerald, writing in
                  1924&ndash;25, could not know that the boom would end in October 1929, but the
                  novel&apos;s sense of unsustainable surface wealth reads, in hindsight, as
                  uncannily prophetic.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Fitzgerald and Zelda`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Fitzgerald (1896&ndash;1940) met Zelda Sayre, a Southern belle from Montgomery,
                  Alabama, in 1918 while stationed there as an army officer. She broke off their
                  engagement in 1919, citing his lack of prospects, and accepted him only after his
                  first novel,
                  <em> This Side of Paradise</em> (1920), made him famous. The parallel with
                  Gatsby&apos;s courtship of Daisy &mdash; the soldier rejected by a wealthy
                  Southern girl who only relents when he can match her class &mdash; is exact. The
                  Fitzgeralds became international celebrities of the Jazz Age, then descended into
                  alcoholism and Zelda&apos;s mental illness. Much of <em>Gatsby</em>
                  was written in 1924 on the Riviera while their marriage was already fraying.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Eighteen quotations covering plot, character, and theme. Memorise the short ones.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. &lsquo;Whenever you feel like criticising any one,&rsquo; he told me, &lsquo;just remember that all the people in this world haven't had the advantages that you've had.&rsquo;"
                speaker="Nick (opening of Chapter 1)"
                analysis="The novel's opening establishes Nick as a narrator who claims, unusually, to suspend judgement. The advice is paternal, Midwestern, and class-conscious (note &lsquo;advantages&rsquo;). It frames everything that follows: every cruelty Nick records is filtered through this stated tolerance. Whether the principle survives the summer is a central question of the book, and most readers conclude that Nick abandons it &mdash; he ends the novel with strong moral verdicts."
              />
              <QuoteCard
                quote="I hope she'll be a fool&mdash;that's the best thing a girl can be in this world, a beautiful little fool."
                speaker="Daisy (Chapter 1)"
                analysis="One of the most quoted lines in the novel. On the surface it is a piece of Jazz-Age cynicism, but it is also a confession: Daisy knows the female position in 1920s society is to be ornamental and unthinking, and she has chosen to inhabit it because the alternative &mdash; intelligence, awareness &mdash; is unbearable. The phrase prefigures her behaviour in Chapter 7: she refuses to know what she clearly knows."
              />
              <QuoteCard
                quote="This is a valley of ashes&mdash;a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens."
                speaker="Nick (Chapter 2)"
                analysis="The Valley of Ashes is the novel's great industrial wasteland. The simile &lsquo;like wheat&rsquo; turns industrial waste into a perverse harvest, suggesting that what the Jazz Age cultivates is dust. &lsquo;Grotesque&rsquo; is the key Gothic term: this is the underside of Tom and Daisy's lawns. T. S. Eliot's <em>{tr(`The Waste Land`)}</em> (1922) is a clear influence."
              />
              <QuoteCard
                quote="The eyes of Doctor T. J. Eckleburg are blue and gigantic&mdash;their retinas are one yard high. They look out of no face, but, instead, from a pair of enormous yellow spectacles which pass over a non-existent nose."
                speaker="Nick (Chapter 2)"
                analysis="The faded oculist's billboard is the novel's most discussed symbol: an absent God watching over the wasteland. The face is &lsquo;non-existent&rsquo; &mdash; the divine has been reduced to advertising. Wilson, in his grief, is the only character who reads the eyes as God's eyes, and Fitzgerald uses that misreading to suggest that religion in this world has dwindled to a half-erased commercial image."
              />
              <QuoteCard
                quote="He smiled understandingly&mdash;much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it."
                speaker="Nick (Chapter 3)"
                analysis="Nick's first close encounter with Gatsby. The smile is given mythic, almost religious weight (&lsquo;eternal reassurance&rsquo;), but it is also a performance &mdash; one that, Nick notes, &lsquo;concentrated on you with an irresistible prejudice in your favour.&rsquo; Gatsby's charm is both genuine and a tool. The passage establishes the novel's ambivalence: he is admirable, and he is fake, simultaneously."
              />
              <QuoteCard
                quote="I am one of the few honest people that I have ever known."
                speaker="Nick (Chapter 3)"
                analysis="A line worth interrogating. Nick claims honesty in the same chapter in which he begins a relationship with the &lsquo;incurably dishonest&rsquo; Jordan and starts to facilitate Gatsby's pursuit of his married cousin. Most A-Level answers earn marks by treating this self-description sceptically: Nick is an unreliable narrator who, like everyone else in the book, edits the past to suit his preferred self-image."
              />
              <QuoteCard
                quote="The truth was that Jay Gatsby of West Egg, Long Island, sprang from his Platonic conception of himself."
                speaker="Nick (Chapter 6)"
                analysis="The novel's key sentence about identity. &lsquo;Platonic conception&rsquo; refers to Plato's theory of ideal forms: Gatsby has invented an ideal self and willed himself into matching it. He is therefore, in a strange way, more authentic than the Buchanans, because his self is a deliberate creation rather than an accident of birth. But it is also fragile, as Tom will demonstrate."
              />
              <QuoteCard
                quote="&lsquo;Can't repeat the past?&rsquo; he cried incredulously. &lsquo;Why of course you can!&rsquo;"
                speaker="Gatsby (Chapter 6)"
                analysis="The novel's defining statement of Gatsby's tragedy. The &lsquo;incredulously&rsquo; is doing huge work: he genuinely cannot conceive that the past is closed. Critics often read this as the American imagination's own delusion: a country built on reinvention struggling to accept that some things are irreversible. The exclamation is both heroic and pitiable."
              />
              <QuoteCard
                quote="Her voice is full of money."
                speaker="Gatsby, of Daisy (Chapter 7)"
                analysis="A four-word line that opens the entire critique of romantic obsession in the novel. Gatsby thinks he is praising Daisy's charm; he is actually confessing that what he loves about her is inseparable from her class. The romantic dream and the financial dream are the same dream. Nick instantly extrapolates: &lsquo;That was it... High in a white palace the king's daughter, the golden girl.&rsquo;"
              />
              <QuoteCard
                quote="High in a white palace the king's daughter, the golden girl."
                speaker="Nick (Chapter 7)"
                analysis="Nick's gloss on Gatsby's observation about Daisy's voice. Fairy-tale imagery (palace, princess) reveals the mythic structure underneath Gatsby's desire. &lsquo;Golden girl&rsquo; gathers up the novel's recurrent yellow-and-gold imagery (Daisy's name, Gatsby's car, the &lsquo;yellow cocktail music&rsquo;), aligning Daisy with both wealth and the sun &mdash; a dazzling, untouchable object."
              />
              <QuoteCard
                quote="So we beat on, boats against the current, borne back ceaselessly into the past."
                speaker="Nick (closing line, Chapter 9)"
                analysis="The most famous closing sentence in twentieth-century American fiction. The first-person plural (&lsquo;we&rsquo;) extends Gatsby's tragedy to the reader and to America itself. The metaphor &mdash; rowing forward but pushed backward &mdash; captures the paradox of a culture committed to progress while still mourning a lost past. The rhythm is iambic and elegiac; Fitzgerald is consciously writing an epitaph not just for Gatsby but for the American Dream."
              />
              <QuoteCard
                quote="Gatsby believed in the green light, the orgastic future that year by year recedes before us."
                speaker="Nick (Chapter 9)"
                analysis="The penultimate sentence of the novel. The green light at the end of Daisy's dock has expanded into a symbol of all American striving. &lsquo;Orgastic&rsquo; (often misquoted as &lsquo;orgiastic&rsquo;) fuses sexual longing with spiritual yearning. &lsquo;Recedes&rsquo; is crucial: the future is not approaching but retreating, faster than we can run after it."
              />
              <QuoteCard
                quote="They were careless people, Tom and Daisy&mdash;they smashed up things and creatures and then retreated back into their money or their vast carelessness, or whatever it was that kept them together, and let other people clean up the mess they had made."
                speaker="Nick (Chapter 9)"
                analysis="The novel's moral verdict on the Buchanans. The repetition of &lsquo;careless / carelessness&rsquo; turns negligence into a class trait. &lsquo;Smashed up things and creatures&rsquo; is deliberately childish, as if Tom and Daisy are spoiled children whose toys include human beings. &lsquo;Their money&rsquo; is the bunker they retreat into &mdash; old money insulating them from consequence."
              />
              <QuoteCard
                quote="The colossal vitality of his illusion."
                speaker="Nick, of Gatsby (Chapter 5)"
                analysis="Nick's formulation captures Gatsby's peculiar grandeur. &lsquo;Colossal&rsquo; gives the illusion the scale of architecture or myth; &lsquo;vitality&rsquo; gives it life. The phrase concedes that Gatsby's dream of Daisy is an illusion while still admiring its sheer animating force. It is one of the lines that justifies Nick's claim that Gatsby was &lsquo;worth the whole damn bunch put together.&rsquo;"
              />
              <QuoteCard
                quote="They're a rotten crowd. You're worth the whole damn bunch put together."
                speaker="Nick to Gatsby (Chapter 8)"
                analysis="The only compliment Nick ever pays Gatsby aloud, shouted across the lawn the morning before Gatsby's death. &lsquo;Rotten&rsquo; condenses everything Nick has come to despise about East Egg. The line is also a moral judgement Nick never delivers to the Buchanans themselves: he is brave with Gatsby, careful with the people who matter to his class position. The contradiction is part of his unreliability."
              />
              <QuoteCard
                quote="If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life."
                speaker="Nick (Chapter 1)"
                analysis="An early definition of Gatsby that prefigures his entire arc. &lsquo;Successful gestures&rsquo; reduces personality to performance &mdash; a deeply modernist idea. &lsquo;Promises of life&rsquo; is the romantic counter-weight: Gatsby is sensitive to what life keeps offering and never quite delivers. The sentence sets up Gatsby as a study of style and yearning together."
              />
              <QuoteCard
                quote="No amount of fire or freshness can challenge what a man will store up in his ghostly heart."
                speaker="Nick (Chapter 5)"
                analysis="Nick's observation as he watches Gatsby with the actual Daisy after the reunion. &lsquo;Ghostly heart&rsquo; suggests that Gatsby's love has become a phantom &mdash; an object more powerful than anything real life can offer. This is the novel's most precise statement of how obsession works: the imagined version always outcompetes the real."
              />
              <QuoteCard
                quote="So he waited, listening for a moment longer to the tuning fork that had been struck upon a star."
                speaker="Nick, on Gatsby kissing Daisy (Chapter 6)"
                analysis="Fitzgerald's description of the moment Gatsby commits himself to Daisy in Louisville. The metaphor is extraordinary: a tuning fork struck on a star turns desire into a cosmic, almost musical event. Just before the kiss, Nick says Gatsby's &lsquo;mind would never romp again like the mind of God&rsquo; &mdash; he has tied his entire imagination to one woman. The romantic absurdity is also the romantic grandeur."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🪞">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Green Light`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  At the end of Daisy&apos;s dock in East Egg, visible from Gatsby&apos;s lawn
                  across the bay. In Chapter 1 it is a private signal: Gatsby stretches his arms
                  toward it. In Chapter 5, with Daisy beside him, it becomes &ldquo;again a green
                  light on a dock&rdquo; &mdash; the symbol collapses back into a domestic object.
                  In the closing pages it expands again into a metaphor for the entire American
                  future. The shifting size of the symbol &mdash; intimate, then trivial, then
                  national &mdash; is the novel&apos;s structural argument about how desire inflates
                  and deflates objects.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Valley of Ashes`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The industrial dumping ground between West Egg and Manhattan. Modelled on the
                  Corona Ash Dumps in Queens, it is the literal substrate of the novel&apos;s
                  wealth: someone has to burn the coal that powers the parties, and the ash collects
                  here. The Wilsons live in it and are formed by it. Symbolically the Valley is the
                  consequence of the Jazz Age &mdash; the by-product nobody on Long Island will look
                  at &mdash; and the literary heir of the wasteland in T. S. Eliot&apos;s 1922 poem.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`The Eyes of Doctor T. J. Eckleburg`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A faded billboard advertising an oculist, looming over the Valley of Ashes. The
                  eyes &ldquo;dimmed a little by many paintless days under sun and rain, brood on
                  over the solemn dumping ground.&rdquo; In Chapter 8, the broken-down Wilson tells
                  his neighbour Michaelis that &ldquo;God sees everything,&rdquo; while staring at
                  the billboard. Fitzgerald&apos;s symbol works on two levels: religion in this
                  world has decayed into commercial advertising, and the only thing watching over
                  American capitalism is a forgotten ad.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Colour Gold (and Yellow)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s richest colour scheme. Daisy is the &ldquo;golden girl&rdquo;;
                  her name is a flower with a yellow centre. Gatsby&apos;s car is a &ldquo;rich
                  cream colour&rdquo; that becomes &ldquo;the yellow car&rdquo; in Wilson&apos;s
                  account. Music at the parties is &ldquo;yellow cocktail music.&rdquo; Gold
                  connotes wealth, sun, glamour; yellow connotes its decay (the dying leaves of
                  autumn, the dust of the Valley). Fitzgerald distinguishes carefully: gold is the
                  dream, yellow is what the dream curdles into.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Gatsby&apos;s Parties`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Saturday-night spectacles thrown by Gatsby in the hope that Daisy will one day
                  wander in. They are exhaustively catalogued in Chapter 3 &mdash; the orchestra,
                  the cars, the crates of oranges juiced by a machine. Symbolically they are signal
                  flares, vast expensive gestures aimed at one woman. They are also
                  Fitzgerald&apos;s finest set-piece anatomy of Jazz-Age excess: people who do not
                  know the host eating his food, drinking his liquor, and inventing rumours about
                  him. After Daisy attends one in Chapter 6 and is repelled, the parties stop
                  &mdash; their function is exhausted.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`East Egg and West Egg`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The two peninsulas of Long Island in which the novel takes place: East Egg holds
                  old, inherited wealth (Tom and Daisy); West Egg holds new, often suspect wealth
                  (Gatsby, Nick). The names are deliberately childish &mdash; eggs, not estates
                  &mdash; gently mocking American pretension. Geographically they sit a few hundred
                  yards apart across a small bay; socially they are uncrossable. Daisy&apos;s
                  decision in Chapter 7 to remain in East Egg is, more than a romantic choice, a
                  class one. The geography <em>is</em> the conflict.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Owl-Eyed Man`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A minor but symbolically loaded figure. Drunk in Gatsby&apos;s library in Chapter
                  3, he marvels that the books are real (their pages uncut, never read) and mutters
                  that if one brick were removed &ldquo;the whole library was liable to
                  collapse.&rdquo; The metaphor is the whole novel: Gatsby&apos;s identity is a
                  real- looking facade that depends on no one inspecting it too closely. Owl Eyes is
                  also one of the very few people to attend Gatsby&apos;s funeral, which gives him a
                  quiet moral stature.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Cars</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Cars are emblems of Jazz-Age modernity and instruments of damage. Gatsby&apos;s
                  yellow Rolls is his most public display of wealth; it is also the weapon that
                  kills Myrtle. Tom&apos;s blue coupe takes Myrtle to the city. Jordan&apos;s casual
                  driving (&lsquo;careless drivers&rsquo;) provides the metaphor that Nick later
                  turns on Tom and Daisy. Fitzgerald uses the automobile to dramatise his theme of
                  speed without responsibility.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam-Style Questions and Plans" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level questions in the style of the AQA, OCR, and Edexcel A-Level English
              Literature specifications. Each comes with a thesis and paragraph-level planning. Use
              these as templates for your own practice.
            </p>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &lsquo;The Great Gatsby is a novel about the failure of the American
                  Dream.&rsquo; In the light of this view, examine how Fitzgerald presents
                  Gatsby&apos;s pursuit of Daisy. (AQA-style; 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fitzgerald uses Gatsby&apos;s pursuit of Daisy not as a love story but as a
                      vehicle to expose the structural impossibility of the American Dream: the
                      dream and the obsession are the same machine, and both are doomed by class.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Gatsby as the Dream personified
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Sprang from his Platonic conception of himself.&rdquo; The James Gatz /
                      Dan Cody backstory; the boyhood schedule. Connect to Benjamin Franklin&apos;s
                      autobiography and the self-help tradition.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The romantic and the financial as one dream
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Her voice is full of money.&rdquo; The shirts scene as the chapter
                      where wealth and seduction are indistinguishable. Daisy is not separable from
                      her class.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The structural failure
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tom&apos;s exposure of bootlegging at the Plaza. East Egg protects its own.
                      Counter-argument: a critic such as Marius Bewley reads Gatsby&apos;s dream as
                      &lsquo;incorruptible&rsquo; &mdash; engage with this and qualify it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The closing pages
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Boats against the current, borne back ceaselessly into the past.&rdquo;
                      Fitzgerald universalises Gatsby&apos;s failure into the American condition.
                      Conclude: the dream is a backward- looking fantasy that the country mistakes
                      for a forward-looking promise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Examine the view that Nick Carraway is an unreliable narrator. (OCR-style
                  comparative essay; 30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nick&apos;s first-person narration is unreliable not because he lies but
                      because his class loyalties, his admiration for Gatsby, and his retrospective
                      grief shape every judgement he makes; Fitzgerald deliberately constructs him
                      as a partial witness.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The opening claim of honesty
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I am one of the few honest people that I have ever known.&rdquo; Read
                      against his behaviour in Chapter 5 (arranges a meeting between his married
                      cousin and Gatsby) and Chapter 9 (his role in concealing who was driving the
                      car). Note the gap between self-image and conduct.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The retrospective frame
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nick narrates two years after Gatsby&apos;s death. Time and grief have shaped
                      the story. Compare Wayne Booth&apos;s definition of unreliable narration: a
                      narrator whose values diverge from the implied author&apos;s.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Nick&apos;s erotic ambivalence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The encounter with Mr McKee in Chapter 2 (often read by modern critics as
                      queer-coded). The breaking-off with Jordan. What does Nick conceal from us
                      about himself, and how does that shape his narration?
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Nick as the moral voice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Counter-argument: by the closing pages Nick&apos;s judgements (&ldquo;careless
                      people&rdquo;) are clearly endorsed by the structure of the novel. Conclude:
                      Nick is unreliable about himself but largely reliable about everyone else
                      &mdash; a productive contradiction Fitzgerald exploits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. Discuss the significance of the Valley of Ashes and the eyes of Doctor T. J.
                  Eckleburg in <em>{tr(`The Great Gatsby`)}</em>. (Edexcel-style; 35 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Valley of Ashes and Eckleburg&apos;s eyes function together as
                      Fitzgerald&apos;s indictment of the Jazz Age: the wasteland is what the
                      parties produce, and the abandoned billboard is what the divine has been
                      reduced to in a society that has replaced God with advertising.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Industrial wasteland
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Ashes grow like wheat into ridges and hills and grotesque
                      gardens.&rdquo; Connection to T. S. Eliot&apos;s{' '}
                      <em>{tr(`The Waste Land`)}</em> (1922). The Valley as the literal substrate of
                      modern wealth.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Class geography
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Wilsons are formed by the Valley as the Buchanans are formed by East Egg.
                      Tom can leave the Valley (he just drives through); the Wilsons cannot.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Eckleburg as commercial divinity
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Their retinas are one yard high.&rdquo; Wilson&apos;s identification of
                      the eyes with God in Chapter 8. Religion in Fitzgerald&apos;s America has been
                      reduced to leftover advertising &mdash; the spiritual substituted by the
                      commercial.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The two symbols together
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Valley is the consequence of the parties; Eckleburg is the witness who
                      cannot intervene. Conclude: the symbols are mutually completing, and they do
                      the moral work that the novel&apos;s human characters refuse to do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. &lsquo;Daisy Buchanan is a victim of the world she lives in, not a
                  villain.&rsquo; To what extent do you agree? (AQA-style; 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Daisy is both: Fitzgerald constructs her with enough psychological detail to
                      register the costs of her position in 1920s America, and enough moral failure
                      to forbid simple sympathy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Daisy as victim
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;A beautiful little fool.&rdquo; The position of women in the Jazz Age.
                      Tom&apos;s violence (the broken nose &mdash; Myrtle&apos;s, but witnessed).
                      Feminist readings (Judith Fetterley, Sarah Beebe Fryer).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Daisy as villain
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      She lets Gatsby take the blame for Myrtle. She does not attend his funeral.
                      &ldquo;Careless people, Tom and Daisy.&rdquo; Class privilege as moral
                      exemption.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The Gatsby projection
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Daisy is also a victim of Gatsby&apos;s fantasy of her: she cannot be the
                      thing he has built. &ldquo;No amount of fire or freshness can challenge what a
                      man can store up in his ghostly heart.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Resolution
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Conclude: Fitzgerald presents Daisy as someone whose limited options narrow
                      her to a person capable of cowardice. She is shaped by the system she
                      ultimately upholds. Both readings are true, and the novel needs both.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. How does Fitzgerald use the symbolic and the concrete in{' '}
                  <em>{tr(`The Great Gatsby`)}</em>? You should refer to specific passages in your
                  answer. (OCR-style close-reading question; 30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fitzgerald&apos;s great formal achievement is to keep his symbols (the green
                      light, Eckleburg&apos;s eyes, the Valley) simultaneously concrete and
                      metaphysical &mdash; never letting them harden into allegory while still
                      allowing them to carry the novel&apos;s philosophical weight.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The green light
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Track the light&apos;s three appearances (Chapters 1, 5, 9). In Chapter 5 it
                      shrinks back to a literal light bulb: &ldquo;a green light on a dock.&rdquo;
                      Fitzgerald protects the symbol from over-reading by repeatedly returning it to
                      the everyday.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The shirts
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The shirt scene in Chapter 5: a stack of literal clothing becomes the climax
                      of the reunion. Daisy weeps &lsquo;at the beautiful shirts,&rsquo; not at
                      Gatsby. The concrete carries the symbolic without being announced as a symbol.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The car
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Gatsby&apos;s yellow Rolls is a real machine; it kills Myrtle. It is also a
                      symbol of Jazz-Age modernity, the speed without responsibility that Nick
                      attributes to Jordan and later to the Buchanans. Fitzgerald lets the concrete
                      object do both jobs.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The closing pages
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In the final passage, the green light, the Dutch sailors&apos; &lsquo;fresh,
                      green breast of the new world,&rsquo; and the boats against the current are
                      stacked together. Fitzgerald is explicit about the symbolic system only after
                      the story is over &mdash; the technique is to let the reader build it first,
                      then to confirm it.
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
          {tr(`Exam Tips for The Great Gatsby`)}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Read Nick sceptically.`)}</strong> Always treat his judgements as
              filtered. The phrase &ldquo;Fitzgerald presents Nick as&hellip;&rdquo; opens better
              answers than &ldquo;Nick says&hellip;&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Anchor every theme to a date.`)}</strong> 1922 setting, 1925 publication,
              Prohibition begins 1920, the Wall Street Crash is in 1929 (after the novel ends but
              inside its logic).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use AO3 (context) precisely.`)}</strong> Bootlegging, the Lost
              Generation, Fitzgerald and Zelda&apos;s biographical parallel, T. S. Eliot&apos;s
              influence on the Valley of Ashes.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use AO5 (interpretation) as a discriminator.`)}</strong> Reference at
              least one named critical position (e.g. Marius Bewley on the &lsquo;incorruptible
              dream&rsquo;, feminist readings of Daisy) and qualify it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote tightly.`)}</strong> Short embedded quotations beat long blocks.
              &ldquo;Her voice is full of money&rdquo; in three words gets you both AO1 and AO2.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use the right form word.`)}</strong> Call{' '}
              <em>{tr(`The Great Gatsby`)}</em> a novel, not a book. Refer to chapters, not
              sections.
            </span>
          </li>
        </ul>
      </div>

      {/* Footer notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`The Great Gatsby`)}</em> by F. Scott Fitzgerald was first published by Charles
          Scribner&apos;s Sons in April 1925. The novel entered the public domain in the United
          States on 1 January 2021. All quotations on this page are reproduced from the published
          text of the novel.
        </p>
      </footer>
    </>
  )
}
