'use client'

import { useState } from 'react'

/*
 * CORRECTED 26 September 2026 against the verified guide mounted on this route
 * (src/data/study-guides/when-greek-meets-greek.ts), so the two no longer tell
 * students different stories. This page had a plot the text does not contain:
 * a landlord who had lived in India, Chan as an older holy man whom Ram
 * suspected, and a closing stand-off of mutual recognition. In the story
 * Fraser gives Ram the trick, Ram hides from Chan and tries to get him evicted,
 * is evicted himself, and learns from Fraser that Chan is from Jamaica. It also
 * placed the story in Ways of Sunlight (1957), which does not contain it (the
 * earliest printings found are from 1965), said Selvon worked for an Indian
 * High Commission in Trinidad (he was a reporter there, and later a clerk at
 * the Indian Embassy in London), and sent students to a Pearson anthology that
 * does not print it. No board prescribes the text (src/lib/board/set-texts.ts),
 * so the Edexcel IGCSE badge went too. It also set the story in "1950s London",
 * now "post-war London": the story mentions a murder of May 1959 and its
 * earliest printings are from 1965, so it is set some time between the two,
 * which may be 1959 but may equally be the 1960s.
 * Its assessment objectives were named by number (AO2, AO3 for context), which
 * differs between boards: in Edexcel International GCSE Literature AO3 is
 * links between texts (src/lib/marking/mark-schemes/edexcel-igcse-lit.ts), so
 * on a page no board prescribes the skills are now named in words.
 */

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
        className="flex w-full items-center justify-between px-5 py-4 text-start hover:bg-muted transition-colors"
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
    <div className="rounded-lg border-s-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
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

export default function WhenGreekMeetsGreekPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Short Story
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          When Greek Meets Greek &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          Samuel Selvon (earliest printings found: 1965)
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A sharp, funny short story about Caribbean migrants outwitting, and out-bluffing, the
          racism of the post-war London housing market. This guide covers the plot, the characters,
          Selvon&apos;s pioneering creole narrative voice, the Windrush-era context, key phrases for
          analysis, and exam preparation.
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
            'Voice and Techniques',
            'Context',
            'Key Phrases',
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
          <Section title="Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  The search for a room
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The story opens with Ramkilawansingh, whom the narrator immediately and cheerfully
                  renames Ram, studying the notice boards of west London in search of a room to
                  rent. The boards advertise vacancies, but the small print of post-war London is
                  everywhere: lodgings are routinely closed to Black and Caribbean tenants, and Ram
                  trudges through the familiar humiliations of the colour bar. The comedy of the
                  opening (a man making a scholarly &ldquo;study&rdquo; of rental adverts) sits
                  deliberately on top of something bitter: finding a room is a campaign that
                  requires research, strategy, and cunning.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  The disguise: becoming &ldquo;Indian&rdquo;
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Ram meets Fraser, who knows how the game works: he tells Ram of a landlord who
                  will not take West Indians but will take Indians, and says a turban is all Ram
                  needs. Ram protests that he is a born Trinidadian, then takes the address. At the
                  house he claims to be an Untouchable from India, and lets himself be taken for a
                  genuine Indian. The irony is layered: Ram&apos;s name marks him as Indo-Caribbean,
                  descended from Indian indentured labourers shipped to Trinidad in the nineteenth
                  century, so he is &ldquo;Indian&rdquo; by ancestry but Trinidadian through and
                  through. He gets the room by performing a version of himself that exists only in
                  the landlord&apos;s colonial imagination.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  The rival: Chan
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  On the front steps Ram meets another tenant, a man with a big beard and a turban
                  whom the narrator nicknames Chan (his full mouthful of a name, Chandrilaboodoo,
                  gets the same comic shortening treatment as Ram&apos;s). Chan greets him with
                  words that sound like Hindi, Ram bluffs back with the names of Indian dishes, and
                  the landlord gives Ram the room next to Chan&apos;s. Ram takes Chan for a genuine
                  Indian who could expose him at any moment. He never suspects that Chan might be
                  performing too.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Hiding, then plotting
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Living next door to Chan, Ram hides whenever he sees him, afraid of more Hindi or
                  of questions about India, until the strain convinces him that one of them must
                  leave. He goes down to the landlord in the basement and, claiming occult powers,
                  complains that Chan is a dirty, noisy tenant. The landlord says he has had no
                  complaints but will have a word with Chan. As far as Ram can see, the contest is
                  one-sided: he schemes against a man he fears, and the reader, sharing his view,
                  takes Chan for the real thing too.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Exposure, then the twist: Greek meets Greek
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The next evening the landlord finds Ram standing on his head, claiming to practise
                  yoga. Having had a word with Chan, the landlord now suspects that Ram has deceived
                  him and comes from the West Indies. He lists the ways Ram falls short of Chan and,
                  when Ram pleads in creole, tells him to go. A week later Ram is back at the
                  noticeboards, complaining to Fraser about the tenant he had to dodge, and Fraser
                  reveals that Chan is from Jamaica: Fraser sent him to the house himself. The title
                  glosses the ending: the old proverb runs &ldquo;when Greek meets Greek, then comes
                  the tug of war&rdquo;, meaning that when two equally matched schemers collide, the
                  contest is fierce. Ram never knew he was fighting an equal, and he lost to the
                  better performer. That is the story&apos;s real punchline, and its quiet moral: in
                  a city rigged against them, the migrants&apos; tricks are matched only by each
                  other&apos;s.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; The notice boards and the casual racism of the adverts</li>
                    <li>&bull; Fraser&apos;s tip, and Ram&apos;s performance as an Indian</li>
                    <li>&bull; First sight of Chan on the steps, and Ram&apos;s bluff</li>
                    <li>&bull; Ram&apos;s complaint against Chan, and his own eviction</li>
                    <li>&bull; Fraser&apos;s reveal that Chan is from Jamaica</li>
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
                name="Ram (Ramkilawansingh)"
                description="The story's trickster protagonist: a young Trinidadian in London whose immediate problem (finding a room) stands for the larger predicament of the whole Windrush generation. Ram is observant, adaptable, and entirely unsentimental about the rules of the game; when honesty fails, he performs. His Indo-Caribbean name is the story's quiet masterstroke: he genuinely is of Indian descent, yet must impersonate a fantasy 'Indian' to satisfy English prejudice. Selvon invites us to enjoy Ram's resourcefulness while never letting us forget why it is necessary."
              />
              <CharacterCard
                name="Chan (Chandrilaboodoo)"
                description="Ram's mirror and rival: a tenant with a big beard and a turban whom the landlord holds up as the model Indian, measuring Ram against his incense, dress and speech. Ram takes him for a genuine Indian, hides from him and tries to have him evicted. Only in the last line does Fraser reveal that Chan is from Jamaica, sent to the house by Fraser himself: he is running the same masquerade as Ram, and running it better. His view of Ram is never shown, but it is after the landlord has a word with him that Ram is exposed. As a pair, Ram and Chan turn the story from a tale about one trick into a study of an entire survival strategy."
              />
              <CharacterCard
                name="Fraser"
                description="Ram's contact on the street, who appears in the story's first and last scenes. He knows which landlords take whom, gives Ram the address and the idea of the turban, and in the last line reveals that he had sent Chan, a Jamaican, to the same house. He knows what neither Ram nor the landlord knows, and his creole joke, that it is the English who are foolish because they cannot picture an Indian born anywhere but India, sets up the whole plot."
              />
              <CharacterCard
                name="The landlord"
                description="A landlord who has vowed never to take West Indian tenants but will take Indians, while the rest of the rental market hangs out its colour-bar signs, and who holds Mr Chan up as the model of what an Indian should be. He is not the story's villain in any simple way: he is courteous and even generous to those he believes are Indian. But his benevolence is built on a stereotype, the mystic East of incense and turbans, and Selvon's satire cuts at exactly this point: a prejudice that flatters is still a prejudice, and it is just as easily fooled. His model Indian turns out to be from Jamaica."
              />
              <CharacterCard
                name="The narrator"
                description="Not a character in the plot, but the story's most important voice: a Trinidadian storyteller who narrates in creole, addresses the reader like a friend over a drink, and renames the characters for convenience as a calypsonian would. The narrator is an insider to the migrant world he describes, amused, knowing, and entirely on the tricksters' side. His voice turns a story about humiliation into a story about wit, and his refusal to use standard English narration is itself a literary statement: this community will tell its own stories in its own language."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Racism and the colour bar"
                description="The story's engine is the everyday discrimination of post-war London: notice boards and landladies that exclude Black tenants as a matter of course, years before such discrimination became unlawful. Selvon presents racism not as melodrama but as logistics, a practical obstacle his characters must engineer around. This understatement is the point: prejudice is so normal that nobody in the story is surprised by it. The reader, watching Ram absorb each rejection and adjust his strategy, feels the outrage the characters cannot afford."
              />
              <ThemeCard
                title="Identity as performance"
                description="Ram and Chan both win rooms by performing identities that exist mainly in the English imagination. The story asks what 'authenticity' even means for a man like Ram, whose ancestors were moved from India to the Caribbean by empire, and who has now moved again to the imperial capital. Ram is Indian and not Indian, Trinidadian and Londoner, depending on who is looking. Selvon plays this for comedy, but the underlying insight is serious: racial identity in this world is a costume others insist on, so the powerless learn to tailor it."
              />
              <ThemeCard
                title="Survival through wit"
                description="Ram wins his room with Fraser's tip and his own nerve, observation, and performance, and loses it when his scheme against Chan backfires. This celebration of the trickster connects Selvon to a deep Caribbean tradition (the spider-figure Anansi, the calypsonian's verbal one-upmanship) in which the weak outmanoeuvre the strong by cleverness rather than confrontation. The trickster's victory is always partial: Ram wins a room for a while, never justice, and the trickster who keeps his room is the one Ram never suspected. But the story insists that wit, style, and humour are real forms of resistance, not consolation prizes."
              />
              <ThemeCard
                title="Colonial fantasy and its blind spots"
                description="The landlord's preference for Indians is completely uninformed: he venerates a turban and a beard, not a person. Selvon's satire targets the way colonial experience produced not knowledge but mythology, the 'mystic East' of memoirs and music halls. The landlord's home becomes a little theatre of empire in reverse: the colonised perform the coloniser's fantasy back at him for rent. That the fantasy is so easy to fake is the story's sharpest comment on it."
              />
              <ThemeCard
                title="Rivalry within the migrant community"
                description="The title's proverb is about equals in conflict, and the story's central contest is not migrant versus landlord but migrant versus migrant. Selvon refuses to sentimentalise his community into a single solidarity: scarce rooms make rivals of men who share a predicament and, as the last line reveals, a strategy. Yet the ending shows that Fraser sent both men to the same house: the rivals were running one trick, and the joke lands on the landlord. Strong essays notice this double movement: competition on the surface, complicity underneath."
              />
              <ThemeCard
                title="Humour as a lens on injustice"
                description="The story is genuinely funny, and the humour is doing analytical work. Comedy creates the distance that lets Selvon anatomise racism without writing a tract; irony lets readers see what every character misses. Notice where the laughter lands: never on the migrants' accents, and above all on the gap between English self-assurance and English ignorance, though Ram's scheme against Chan also backfires on him. The technique invites comparison with satirists in other traditions, but the warmth of the telling, the narrator's obvious affection for Ram and Chan, is distinctively Selvon."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── VOICE AND TECHNIQUES */}
        <div id="voice-and-techniques">
          <Section title="Narrative Voice and Techniques" icon="🛠️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The creole narrator</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Selvon&apos;s great innovation, here and in <em>The Lonely Londoners</em> (1956),
                  was to narrate in Trinidadian creole rather than confining dialect to dialogue.
                  The third-person narrator speaks the language of the community he describes, with
                  its own grammar, rhythm, and idiom. The effect is double: the reader is pulled
                  inside the migrant world rather than observing it from outside, and the prestige
                  of standard literary English is gently dethroned. For language analysis, pick out
                  specific creole constructions from the story and comment on how they create
                  intimacy, pace, and comic timing.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The oral storytelling frame</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The story behaves like something told aloud: the narrator introduces a man with an
                  unmanageable name and promptly shortens it for everyone&apos;s convenience,
                  comments on the action, and trusts the listener to share his amusement. This is
                  the technique of the calypso and the anecdote, genres built on topical wit and
                  communal knowledge. The renaming joke, applied to both Ram and Chan, also makes a
                  thematic point: names, like identities, are negotiable in this world.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Dramatic irony as structure</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The plot is a machine of layered knowledge, and Selvon holds one layer back until
                  the last line. The landlord knows least; Ram knows his own act is a fake but takes
                  Chan for a genuine Indian; the reader, sharing Ram&apos;s view, laughs at the
                  landlord and then learns, when Fraser reveals that Chan is from Jamaica, that Ram
                  was fooled too. The meeting on the steps plays twice: once as Ram saw it (a real
                  Indian testing an impostor) and again, in memory, as it was (two impostors
                  bluffing each other). Selvon times the gaps between these readings for laughs, but
                  the structure also enacts the story&apos;s theme: in a prejudiced society, the
                  watched always know more than the watchers.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Understatement and tonal control</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The story&apos;s grimmest material, the routine racism of the housing market, is
                  delivered in the same easy, amused register as its jokes. Selvon never raises his
                  voice; rejection is reported as ordinary weather. This restraint forces the reader
                  to supply the indignation, which is far more effective than authorial protest.
                  When you analyse tone, track moments where something painful is mentioned lightly
                  and ask what the lightness costs and achieves.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The proverb title</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;When Greek meets Greek, then comes the tug of war&rdquo; is an old English
                  proverb (descended from a seventeenth-century line about Greeks joined in battle)
                  meaning that a contest between equals is the fiercest kind. Selvon&apos;s
                  application is ironic on several levels: his &ldquo;Greeks&rdquo; are a
                  Trinidadian and a Jamaican, both pretending to be Indian; their battlefield is a
                  lodging house; and Ram learns that his rival is his equal only after he has lost.
                  Titles drawn from proverbs invite the examiner&apos;s favourite question: how far
                  does the story confirm or complicate its own moral?
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Literary Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Samuel Selvon (1923-1994)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Selvon was born in San Fernando, Trinidad, of Indian descent, and moved to London
                  in 1950 with the first wave of post-war Caribbean migration. He had been a
                  reporter on the <em>Trinidad Guardian</em>, and in London he worked for a time as
                  a clerk at the Indian Embassy, before establishing himself as one of the
                  foundational writers of Caribbean literature in Britain. His novel{' '}
                  <em>The Lonely Londoners</em> (1956) and the story collection{' '}
                  <em>Ways of Sunlight</em> (1957) made the migrant experience of London a literary
                  subject and creole a literary language. This story is not in{' '}
                  <em>Ways of Sunlight</em>: its earliest printings found are from 1965, in Andrew
                  Salkey&apos;s anthology <em>Stories from the Caribbean</em> and in the magazine{' '}
                  <em>Argosy</em>. His own Indo-Trinidadian background sits directly behind
                  Ram&apos;s layered identity.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Windrush generation</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The arrival of the <em>Empire Windrush</em> in 1948 symbolically opened two
                  decades of migration from the Caribbean to Britain. Migrants came as British
                  citizens, often answering labour shortages, and met a country that wanted their
                  work but not their presence. Housing was the sharpest point of conflict: many
                  landlords openly refused Black tenants, forcing migrants into overcrowded,
                  overpriced rooms in areas like Notting Hill and Brixton. The Notting Hill riots of
                  1958 made the tension national news, and the story itself mentions the murder of
                  Kelso Cochrane in Notting Hill in May 1959, for which no one was charged. Housing
                  discrimination was not outlawed until the Race Relations Act 1968.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Indo-Caribbean history</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  After the abolition of slavery, the British Empire shipped hundreds of thousands
                  of indentured labourers from India to its Caribbean colonies between the 1830s and
                  1917; their descendants form a large part of Trinidad&apos;s population. This is
                  the history coiled inside Ram&apos;s name. The story&apos;s central joke, a man of
                  Indian descent impersonating an Indian, only works because empire had already
                  scattered and remixed identities across the globe. The masquerade satirises an
                  England that knows nothing of this history it created.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The text you study, and using context</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  No exam specification this site covers prescribes this story, and it is not in the
                  Pearson Edexcel International GCSE English Anthology. Printings differ slightly in
                  spelling and wording, so quote from the printing you study. When writing about
                  context, one or two precise sentences (the colour bar, the Windrush generation,
                  Selvon&apos;s Indo-Trinidadian background) tied to a specific moment in the story
                  will always beat a paragraph of general history.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY PHRASES */}
        <div id="key-phrases">
          <Section title="Key Phrases with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The story is in copyright, so only very short phrases are quoted here for analysis.
              Build your own quotation bank from the story, keeping quotations short and precise.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="after this, we calling this man Ram"
                speaker="The narrator, opening of the story"
                analysis="The narrator interrupts his own first sentence to rename his protagonist, and does it in creole ('we calling') and in the first person plural, conscripting the reader into the storytelling community. The gesture is pure oral tradition: practical, funny, intimate. It also announces the story's theme in miniature, since a name is the first thing London makes negotiable. Analysing this single clause covers voice, register, address, and theme at once, which makes it a high-value quotation."
              />
              <QuoteCard
                quote="making a study of the noticeboards"
                speaker="The narrator, on Ram's room-hunting"
                analysis="The scholarly noun 'study' applied to scanning rental adverts is comic elevation: Ram as researcher, the colour-barred housing market as his academic field. The irony cuts both ways. It mocks the absurd amount of intelligence-gathering a Black migrant needs just to rent a room, and it dignifies Ram, whose survival genuinely does require method and analysis. A model example of Selvon hiding social criticism inside a joke."
              />
              <QuoteCard
                quote="When Greek meets Greek, then comes the tug of war."
                speaker="Proverb alluded to in the title"
                analysis="The proverb describes a clash of perfectly matched opponents, traditionally soldiers or schemers. Selvon's substitution of two disguised migrants, a Trinidadian and a Jamaican, for the 'Greeks' is multiply ironic: the men are matched precisely because they are running the same con, but Ram learns it only after he has lost. He fears Chan as a real Indian, schemes against him as one, and is evicted instead. The title also flatters the reader who knows the proverb and then complicates it: the tug of war is fought blind on Ram's side, and it is won by the impostor he never suspected."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Exam questions on a prose text typically ask how the writer presents a character,
              relationship, idea, or atmosphere. Always answer with the writer&apos;s choices
              (voice, irony, structure) at the centre.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Selvon present Ram&apos;s experience of finding somewhere to live?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thesis: Selvon presents the search comically on the surface and bitterly
                      underneath, so the reader laughs and is implicated at the same time.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The opening: the &ldquo;study&rdquo; of the notice boards, the casualness of
                      exclusion, understatement as tonal strategy (irony, register).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fraser&apos;s tip and Ram&apos;s performance of Indianness: necessity breeding
                      invention; the landlord&apos;s preference for Indians as the loophole Ram
                      exploits.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Context woven in: the post-war colour bar and Windrush housing crisis, one or
                      two sentences anchored to the text. End on the creole narrator turning
                      humiliation into shared comedy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Selvon use humour in the story, and what serious points does the
                  humour make?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thesis: the humour is the argument; every joke exposes a structure of
                      prejudice or a survival strategy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The renaming jokes and oral narration: laughter that builds community between
                      narrator and reader.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Dramatic irony around the landlord: the satire of colonial fantasy; the
                      laughter lands on ignorance, not on accents.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The rivalry between Ram and Chan and the final twist: Ram, evicted after
                      trying to get Chan thrown out, learns from Fraser that Chan is a Jamaican
                      playing the same game. The joke lands on the landlord, and the serious point
                      is how little victory is available to the powerless.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Selvon present ideas about identity in &ldquo;When Greek Meets
                  Greek&rdquo;?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Plan
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thesis: identity in the story is a performance demanded by the audience, and
                      Selvon shows both its absurdity and its cost.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Key moves
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ram&apos;s layered identity (Indian ancestry, Trinidadian culture, London
                      necessity); Chan as the perfected mask; the landlord as the audience whose
                      fantasy scripts the show; the narrator&apos;s creole as the one identity in
                      the story that is performed for its own community rather than for the English
                      gaze. Conclude with the ending: Fraser&apos;s reveal that the landlord&apos;s
                      model Indian is from Jamaica, which unmasks Chan for Ram and the reader but
                      never for the landlord.
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
          Exam Tips for <em>When Greek Meets Greek</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Lead with the narrative voice.</strong> The creole narrator is Selvon&apos;s
              signature technique; almost any question can be answered partly through it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Name the irony precisely.</strong> Distinguish dramatic irony (reader and
              tricksters know what the landlord does not) from situational irony (an Indian
              descendant impersonating an Indian).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Quote from the printing you study.</strong> Keep quotations short; printings
              differ slightly in spelling and wording.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use context as a scalpel, not a shovel.</strong> One sentence on the colour
              bar, one on Selvon&apos;s Indo-Trinidadian background, each tied to a moment in the
              text.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Discuss what the comedy refuses to do.</strong> Selvon never writes the
              landlord as a monster or Ram as a victim; top answers explore why that restraint makes
              the satire stronger.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>End with the title.</strong> The proverb gives every essay a ready-made
              conclusion: a contest of equals, fought blind on Ram&apos;s side and won by the
              impostor he never suspected.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          &ldquo;When Greek Meets Greek&rdquo; by Samuel Selvon (1923-1994) is{' '}
          <strong>in copyright</strong>. In line with fair dealing for criticism and review (CDPA
          1988 s.30), this guide quotes only brief phrases for the purpose of analysis. Students
          should read the full story in a licensed printing. The earliest printings of the story
          found are from 1965, in Andrew Salkey&apos;s anthology <em>Stories from the Caribbean</em>{' '}
          and in <em>Argosy</em> magazine, and school anthologies have reprinted it since. It is not
          in <em>Ways of Sunlight</em> (1957).
        </p>
      </footer>
    </>
  )
}
