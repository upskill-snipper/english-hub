"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PicnicAtHangingRockPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/resources" className="hover:text-foreground transition-colors">
          Resources
        </Link>
        {" / "}
        <Link
          href="/resources/english-literature"
          className="hover:text-foreground transition-colors"
        >
          English Literature
        </Link>
        {" / "}
        <Link
          href="/resources/english-literature/caie"
          className="hover:text-foreground transition-colors"
        >
          CAIE
        </Link>
        {" / "}
        <span className="text-foreground">Picnic at Hanging Rock</span>
      </nav>

      {/* Title */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Picnic at Hanging Rock &mdash; Joan Lindsay
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          CAIE IGCSE English Literature (0475 / 0992) &mdash; Complete Study Guide
        </p>
      </header>

      <div className="space-y-12">
        {/* ───────────────────────── CONTEXT ───────────────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Context
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Historical Setting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The novel is set on <strong className="text-foreground">St Valentine&rsquo;s Day, 1900</strong>,
                  at the cusp of Australian Federation (1901). This liminal moment &mdash; between colonial rule
                  and nationhood &mdash; mirrors the novel&rsquo;s preoccupation with thresholds, transitions,
                  and the unknowable.
                </p>
                <p>
                  Lindsay published the novel in 1967 but deliberately presented it as though it were
                  a factual account, blurring the boundary between fiction and reality. The famous
                  prefatory note &mdash; &ldquo;Whether <em>Picnic at Hanging Rock</em> is fact or fiction,
                  my readers must decide for themselves&rdquo; &mdash; has fuelled decades of speculation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Australian Colonial Society</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Turn-of-the-century Australia was still heavily shaped by British cultural expectations.
                  Appleyard College, with its rigid dress codes, French lessons, and emphasis on deportment,
                  represents the transplantation of <strong className="text-foreground">European values</strong> onto
                  an ancient, indifferent landscape.
                </p>
                <p>
                  The collision between the ordered Victorian world and the wild Australian bush is
                  central to the novel&rsquo;s meaning. Lindsay suggests the land itself resists colonial
                  domestication.
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2">
              <CardHeader>
                <CardTitle>Boarding School Life</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Appleyard College is a private girls&rsquo; boarding school run by the authoritarian
                  Mrs Appleyard. The school imposes strict routines &mdash; corseted uniforms, surveillance,
                  and a curriculum designed to produce &ldquo;accomplished&rdquo; young women suitable for
                  marriage. This environment of repression intensifies the novel&rsquo;s themes of
                  sexuality, freedom, and escape. The girls who vanish on the Rock can be read as
                  escaping the constraints placed upon them by patriarchal Victorian society.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ───────────────────────── CHARACTERS ───────────────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Character Analysis
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Miranda */}
            <Card>
              <CardHeader>
                <CardTitle>Miranda</CardTitle>
                <CardDescription>The golden girl &mdash; Botticelli angel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Miranda is the novel&rsquo;s symbolic centre: beautiful, serene, and almost
                  otherworldly. She is repeatedly compared to a
                  &ldquo;<strong className="text-foreground">Botticelli angel</strong>&rdquo; and associated
                  with nature and light. Her calm acceptance of the Rock &mdash; &ldquo;Everything begins and
                  ends at exactly the right time and place&rdquo; &mdash; suggests she is attuned to forces
                  beyond rational understanding.
                </p>
                <p>
                  Miranda functions as an idealised figure whose disappearance triggers a crisis of
                  meaning for everyone who knew her. She represents the beauty and mystery that
                  cannot be contained by the rigid structures of Appleyard College.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;Miranda was a doer, not a dreamer... she radiated happiness as
                  a candle does light.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Irma */}
            <Card>
              <CardHeader>
                <CardTitle>Irma Leopold</CardTitle>
                <CardDescription>The survivor &mdash; wealth and trauma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Irma is the only one of the missing party to be found alive, yet she has
                  no memory of what happened. Her survival deepens the mystery rather than resolving it.
                  She is associated with wealth and sensuality &mdash; her &ldquo;little gold watch&rdquo; and
                  expensive clothes symbolise the material world.
                </p>
                <p>
                  Her return to the school provokes a hysterical, almost violent reaction from the
                  remaining girls, who demand answers she cannot give. This scene exposes the
                  community&rsquo;s desperation for closure and rational explanation.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;The girl on the sofa had the languid elegance of a lazy
                  kitten... Irma Leopold had always been a beautiful girl.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Marion */}
            <Card>
              <CardHeader>
                <CardTitle>Marion Quade</CardTitle>
                <CardDescription>The rational mind</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Marion is the intellectual of the group: practical, scientifically minded, and
                  interested in mathematics and geology. She represents the Enlightenment values of
                  reason and empiricism &mdash; values that prove utterly inadequate in the face of
                  Hanging Rock&rsquo;s ancient power.
                </p>
                <p>
                  Her disappearance alongside the ethereal Miranda suggests that neither reason nor
                  intuition can protect against the unknowable. Lindsay pairs opposites to emphasise
                  the Rock&rsquo;s indiscriminate, overwhelming force.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;Marion with her plain intelligent face had no patience with
                  Miranda&rsquo;s vague gentle ways.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Miss McCraw */}
            <Card>
              <CardHeader>
                <CardTitle>Miss Greta McCraw</CardTitle>
                <CardDescription>Mathematics teacher &mdash; rational authority undone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Miss McCraw is the school&rsquo;s mathematics mistress: austere, logical, and physically
                  ungainly. She is the only adult to vanish. Her disappearance is particularly
                  unsettling because she represents adult authority and scientific rationality &mdash;
                  if she cannot resist the Rock&rsquo;s pull, nobody can.
                </p>
                <p>
                  She is last seen striding purposefully up the Rock without her skirt, a disturbing
                  image that suggests the stripping away of civilised propriety. Her fascination with
                  geological time &mdash; &ldquo;a million years&rdquo; &mdash; foreshadows her absorption into
                  the ancient landscape.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;Miss McCraw... was seen by two of the girls... without her
                  skirt... apparently struggling through some dense bracken.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Sara */}
            <Card>
              <CardHeader>
                <CardTitle>Sara Waybourne</CardTitle>
                <CardDescription>The orphan &mdash; devotion and tragedy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Sara is a vulnerable orphan whose intense, devoted attachment to Miranda
                  gives her emotional life its only anchor. She is forbidden from attending the picnic
                  as punishment, and this exclusion becomes the defining trauma of her short life.
                  Her poetry and emotional sensitivity set her apart from the school&rsquo;s conformist culture.
                </p>
                <p>
                  Sara&rsquo;s eventual death &mdash; which Mrs Appleyard attempts to disguise &mdash; exposes
                  the cruelty beneath the College&rsquo;s respectable facade. She is the novel&rsquo;s most
                  sympathetic victim: destroyed not by the Rock but by the institutional system
                  that was supposed to protect her.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;Sara loved Miranda more than anyone else in the world... she
                  was the one human being who had ever loved her.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Mrs Appleyard */}
            <Card>
              <CardHeader>
                <CardTitle>Mrs Appleyard</CardTitle>
                <CardDescription>The headmistress &mdash; authority, hypocrisy, and collapse</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Mrs Appleyard is the authoritarian headmistress whose rigid control over the school
                  mirrors the broader colonial project of imposing order on chaos. She is physically
                  imposing, emotionally cold, and increasingly reliant on alcohol as the crisis
                  deepens.
                </p>
                <p>
                  Her background is deliberately obscure &mdash; &ldquo;nobody knew where she came from&rdquo;
                  &mdash; which undermines her claims to respectability. As the school disintegrates,
                  so does she, culminating in Sara&rsquo;s death and her own demise at the Rock. She
                  represents the failure of authoritarian structures when confronted with forces
                  beyond their control.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;The Doyen of an exclusive Ladies&rsquo; College... was able to
                  command the instant obedience and respect of her subordinates.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Michael */}
            <Card>
              <CardHeader>
                <CardTitle>Michael Fitzhubert</CardTitle>
                <CardDescription>The Honourable &mdash; obsession and privilege</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Michael is a young English aristocrat visiting his uncle&rsquo;s property at Lake View.
                  He glimpses the girls at the Rock and becomes obsessed with finding Miranda, whom
                  he romanticises as a vision of unattainable beauty.
                </p>
                <p>
                  His obsessive search &mdash; during which he finds Irma but not Miranda &mdash;
                  represents the male gaze and colonial desire to possess the mysterious feminine /
                  landscape. His privileged background offers no advantage against the Rock&rsquo;s
                  impenetrable mystery. He is eventually sent to England, unable to recover from
                  his experience.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;He could think of nothing but the girl with the golden hair...
                  the unknown doings on the Rock filled his mind to the exclusion of all else.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Albert */}
            <Card>
              <CardHeader>
                <CardTitle>Albert Crundall</CardTitle>
                <CardDescription>The coachman &mdash; working-class outsider</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Albert is the young coachman at Colonel Fitzhubert&rsquo;s estate. Unlike the upper-class
                  characters, Albert is practical, unpretentious, and physically capable. He assists
                  Michael in the search and it is Albert who actually discovers Irma on the Rock.
                </p>
                <p>
                  Albert provides a working-class perspective that contrasts with both the College&rsquo;s
                  gentility and Michael&rsquo;s aristocratic background. His connection to Sara &mdash;
                  later revealed to be his long-lost sister &mdash; adds a note of personal tragedy
                  and highlights the class divisions that separate families in colonial Australia.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  Key quotation: &ldquo;Albert Crundall... was a rough diamond, shrewd and
                  dependable.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ───────────────────────── THEMES ───────────────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Key Themes
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Mystery */}
            <Card>
              <CardHeader>
                <CardTitle>Mystery &amp; the Unknowable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The novel&rsquo;s central mystery &mdash; what happened to the girls and Miss McCraw &mdash;
                  is never resolved. Lindsay deliberately withholds explanation, suggesting that some
                  things lie beyond human comprehension. This refusal to provide closure challenges
                  the reader&rsquo;s desire for rational answers and mirrors the limits of colonial
                  knowledge when confronted with the ancient Australian landscape.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;What we see and what we seem / Are but a dream, a dream within a dream.&rdquo;
                  (The Poe epigraph used within the novel reinforces this theme.)
                </p>
              </CardContent>
            </Card>

            {/* Nature vs Civilisation */}
            <Card>
              <CardHeader>
                <CardTitle>Nature vs Civilisation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Hanging Rock is over a million years old; Appleyard College has existed for only a
                  few years. The collision between the two &mdash; the corseted girls climbing the
                  primordial rock formation &mdash; dramatises the fragility of European civilisation
                  in Australia. The girls&rsquo; removal of gloves and the loosening of corsets as they
                  ascend symbolises the shedding of social constraints.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;The hanging Rock itself had been a landmark for a million years... a million
                  years is quite a long time.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Repression & Sexuality */}
            <Card>
              <CardHeader>
                <CardTitle>Repression &amp; Sexuality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The Valentine&rsquo;s Day setting foregrounds desire and romance. The girls are presented
                  as sexually awakening figures &mdash; their beauty is observed and desired by Michael,
                  while their close physical bonds (Miranda and Sara, the girls sleeping together)
                  hint at homoerotic attachment. The school&rsquo;s repressive environment intensifies
                  these undercurrents. The Rock itself is described in terms that evoke both the
                  womb and the phallus, adding a layer of sexual symbolism to the disappearance.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;On this Valentine&rsquo;s Day, the weights of destiny were already loaded.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Time */}
            <Card>
              <CardHeader>
                <CardTitle>Time &amp; Timelessness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Time behaves strangely at Hanging Rock: watches stop at midday, chronological
                  sequence breaks down, and the geological timescale of the Rock dwarfs human
                  history. Lindsay uses the motif of stopped watches to signal the limits of
                  human-measured time. The Rock exists in a different temporal register &mdash;
                  geological deep time &mdash; which swallows the girls as European clock-time
                  literally ceases to function.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;At twelve o&rsquo;clock... all the watches had stopped.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Loss & Grief */}
            <Card>
              <CardHeader>
                <CardTitle>Loss &amp; Grief</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The disappearance sends shockwaves through the community. The novel charts
                  multiple responses to loss: Michael&rsquo;s romantic obsession, Sara&rsquo;s silent
                  despair, Mrs Appleyard&rsquo;s institutional panic, and the town&rsquo;s morbid
                  curiosity. The absence of bodies means grief cannot follow its normal course &mdash;
                  there is no funeral, no burial, no closure. Lindsay shows how unresolved loss
                  corrodes individuals and communities alike.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;The picnic... would be talked of for years to come... nobody would ever forget
                  that Saturday afternoon.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Colonialism */}
            <Card>
              <CardHeader>
                <CardTitle>Colonialism &amp; Landscape</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The Rock is implicitly sacred Indigenous land, yet Lindsay&rsquo;s characters never
                  acknowledge Aboriginal presence or history. This silence is itself significant:
                  the colonists&rsquo; ignorance of the land&rsquo;s deep history leaves them unprepared
                  for its power. The novel can be read as an allegory of colonial hubris &mdash;
                  Europeans who believe they have tamed the landscape discover they understand
                  nothing about it.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;The vast landscape of the Australian bush closed in about the little group of
                  humans.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ──────────────── CHAPTER-BY-CHAPTER KEY EVENTS ──────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Chapter-by-Chapter Key Events
          </h2>

          <div className="space-y-4">
            {[
              {
                chapter: "Chapter 1",
                title: "Valentine's Day Morning",
                events: [
                  "St Valentine's Day, Saturday 14 February 1900 at Appleyard College.",
                  "The girls exchange valentines and prepare for the picnic to Hanging Rock.",
                  "Sara is forbidden from attending as punishment; she watches Miranda leave with anguish.",
                  "Miranda tells Sara: \"You must learn to love someone else apart from me, Sara.\"",
                ],
                quotation:
                  "\"Everything begins and ends at exactly the right time and place.\" — Miranda",
              },
              {
                chapter: "Chapter 2",
                title: "Arrival at the Rock",
                events: [
                  "The party arrives at Hanging Rock by horse-drawn drag, driven by Mr Hussey.",
                  "The ancient volcanic formation is described in geological detail — over a million years old.",
                  "The girls eat lunch in the shade; the atmosphere is drowsy and dreamlike.",
                  "Miss McCraw discourses on the Rock's geological age and formation.",
                ],
                quotation:
                  "\"The Doyen of an exclusive Ladies' College... the Doyen was apt to lose her bearings in this strange country.\"",
              },
              {
                chapter: "Chapter 3",
                title: "The Ascent",
                events: [
                  "Miranda, Marion, Irma, and Edith set off to explore the upper slopes after lunch.",
                  "The girls remove gloves and loosen their corsets in the heat — a symbolic shedding of civilisation.",
                  "The four cross a creek and begin to climb. The atmosphere grows increasingly strange.",
                  "All watches stop at exactly twelve noon.",
                ],
                quotation:
                  "\"They were no longer in the everyday world... all four watches had stopped at exactly twelve o'clock.\"",
              },
              {
                chapter: "Chapter 4",
                title: "The Disappearance",
                events: [
                  "Miranda, Marion, and Irma appear to enter a trance-like state and walk towards a monolith.",
                  "Edith screams and runs back down the Rock alone, terrified but unable to articulate what she saw.",
                  "Miss McCraw is seen heading up the Rock without her skirt.",
                  "By evening, Miranda, Marion, Irma, and Miss McCraw have vanished. A search begins.",
                ],
                quotation:
                  "\"Edith screamed. Again and again... 'A dreadful thing — like a cloud.'\"",
              },
              {
                chapter: "Chapters 5–8",
                title: "The Search & Aftermath",
                events: [
                  "Police and volunteers search the Rock for days without finding any trace.",
                  "Michael Fitzhubert, who glimpsed the girls at the Rock, becomes obsessed with the search.",
                  "The disappearance becomes a media sensation, damaging the school's reputation.",
                  "Parents begin withdrawing their daughters from Appleyard College.",
                ],
                quotation:
                  "\"The search goes on... the Rock keeps its secret well.\"",
              },
              {
                chapter: "Chapters 9–12",
                title: "Finding Irma",
                events: [
                  "Michael, assisted by Albert, conducts his own obsessive search of the Rock.",
                  "Michael collapses from exhaustion but is found alongside the unconscious Irma.",
                  "Irma is alive but has no memory of what happened — her corset is missing but she is unharmed.",
                  "Albert discovers that Irma's gold watch and corset are missing — mystery deepens.",
                ],
                quotation:
                  "\"She was lying across a slab of rock like a broken doll... she remembered nothing.\"",
              },
              {
                chapter: "Chapters 13–15",
                title: "The School's Decline",
                events: [
                  "Irma visits the school to say goodbye; the remaining girls mob her hysterically, demanding answers.",
                  "Mrs Appleyard's drinking increases as the school empties and debts mount.",
                  "Sara, emotionally destroyed by Miranda's loss, becomes increasingly withdrawn.",
                  "Mademoiselle de Poitiers and other staff leave the school.",
                ],
                quotation:
                  "\"The girls closed in... 'Tell us, Irma! Tell us what happened on the Rock!'\"",
              },
              {
                chapter: "Chapters 16–18",
                title: "Sara's Death & Mrs Appleyard's End",
                events: [
                  "Sara is found dead — officially reported as having fallen from the roof, but foul play is implied.",
                  "It is revealed that Albert and Sara are long-lost siblings, separated by the orphanage system.",
                  "Mrs Appleyard is found dead at the base of Hanging Rock, an apparent suicide.",
                  "The College closes permanently. The mystery of the disappearances is never solved.",
                ],
                quotation:
                  "\"The College, like the Rock, brooded in silence over its own unfathomable secrets.\"",
              },
            ].map((ch) => (
              <Card key={ch.chapter}>
                <CardHeader>
                  <CardTitle>
                    {ch.chapter}: {ch.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                  <ul className="list-disc space-y-1.5 pl-5">
                    {ch.events.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                    {ch.quotation}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ───────────────── NARRATIVE TECHNIQUES ───────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Lindsay&rsquo;s Narrative Techniques
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ambiguity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Lindsay&rsquo;s defining technique is the deliberate withholding of explanation.
                  The novel offers multiple possible readings &mdash; supernatural, psychological,
                  allegorical &mdash; without confirming any of them. This structural ambiguity
                  transforms the reader into another searcher, mirroring the characters&rsquo; own
                  frustrated attempts to find answers.
                </p>
                <p>
                  The famous &ldquo;Chapter 18&rdquo; (the final chapter that Lindsay originally wrote
                  but was persuaded to remove) was published posthumously, but even it provides no
                  definitive resolution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unreliable Narration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The third-person narrator moves between multiple perspectives but is never
                  omniscient where it matters most. At the moment of disappearance, the narration
                  shifts away from the missing characters, presenting events only through the
                  limited, unreliable perspectives of Edith and distant observers. Gaps in
                  knowledge are built into the novel&rsquo;s structure.
                </p>
                <p>
                  Lindsay also uses reported speech and newspaper accounts within the narrative,
                  layering unreliable sources to create an epistemological crisis: nobody
                  &mdash; narrator, characters, or readers &mdash; truly knows what happened.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gothic Atmosphere</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Lindsay draws on the tradition of the <strong className="text-foreground">Australian
                  Gothic</strong>: the bush as a place of terror rather than pastoral beauty. She
                  uses dreamlike, hypnotic prose to create a sense of mounting unease. Sensory
                  details &mdash; the oppressive heat, the buzzing of insects, the strange silence
                  &mdash; build an atmosphere where the boundary between the ordinary and the
                  uncanny dissolves.
                </p>
                <p>
                  The Gothic mode allows Lindsay to explore anxieties about sexuality, death, and
                  the failure of rationality within a framework that resists realist resolution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Australian Landscape as Character</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Hanging Rock is not merely a setting but an active force in the narrative. Lindsay
                  personifies the Rock as ancient, watchful, and possessing a power that dwarfs
                  human concerns. The landscape resists colonial mapping and naming; it operates
                  according to its own temporal and spatial logic.
                </p>
                <p>
                  The contrast between the manicured grounds of Appleyard College and the untamed
                  bush reinforces the theme of civilisation&rsquo;s fragility. The Rock&rsquo;s
                  volcanic origins hint at subterranean forces that erupt into the human world.
                </p>
                <p className="text-sm italic border-l-2 border-primary/40 pl-3">
                  &ldquo;Doomed and beautiful, the Rock towers above the plain, dwarfing the insignificant
                  human figures at its base.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2">
              <CardHeader>
                <CardTitle>The Unresolved Ending</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Lindsay&rsquo;s refusal to provide a resolution is the novel&rsquo;s most powerful
                  narrative choice. By denying closure, she forces readers to confront their own
                  need for certainty and rational explanation. The unresolved ending is thematically
                  essential: if the mystery were solved, the novel would lose its central argument
                  that some things &mdash; the landscape, time, desire, death &mdash; resist human
                  understanding.
                </p>
                <p>
                  In CAIE terms, the ending is rich material for discussing authorial intent
                  (Interpretation): Lindsay <em>chooses</em> not to resolve the mystery because resolution would
                  undermine the novel&rsquo;s philosophical and thematic concerns.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ──────────────── CAIE EXAM GUIDANCE ──────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            CAIE Exam Guidance
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Part (a) &mdash; Passage-Based Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  You will be given a printed extract and asked to analyse how Lindsay achieves
                  specific effects. Focus on:
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong className="text-foreground">Language:</strong> imagery, metaphor, simile,
                    personification, sensory detail, diction choices.
                  </li>
                  <li>
                    <strong className="text-foreground">Structure:</strong> sentence length and rhythm,
                    paragraph breaks, shifts in perspective, use of dialogue vs narration.
                  </li>
                  <li>
                    <strong className="text-foreground">Narrative perspective:</strong> whose viewpoint
                    is presented? What is withheld? How does Lindsay control reader access to information?
                  </li>
                  <li>
                    <strong className="text-foreground">Atmosphere:</strong> how do language and structure
                    combine to create mood (dreamlike, threatening, elegiac, claustrophobic)?
                  </li>
                </ul>
                <p className="mt-2 font-medium text-foreground">
                  Always embed short quotations from the extract and analyse individual word choices.
                  Avoid feature-spotting &mdash; link every technique to its effect on the reader.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Part (b) &mdash; Essay Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Essay questions ask you to discuss a theme, character, or aspect of the whole novel.
                  Ensure you:
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong className="text-foreground">Sustain a clear argument</strong> throughout &mdash;
                    avoid simply narrating the plot.
                  </li>
                  <li>
                    <strong className="text-foreground">Range across the text:</strong> refer to events and
                    quotations from different parts of the novel.
                  </li>
                  <li>
                    <strong className="text-foreground">Analyse language:</strong> even in essay questions,
                    close analysis of quotations is expected.
                  </li>
                  <li>
                    <strong className="text-foreground">Consider context:</strong> link your points to the
                    novel&rsquo;s historical and social context (colonial Australia, 1900, gender norms).
                  </li>
                  <li>
                    <strong className="text-foreground">Address authorial intent:</strong> discuss <em>why</em>
                    {" "}Lindsay presents characters, events, or themes in particular ways.
                  </li>
                </ul>
                <p className="mt-2 font-medium text-foreground">
                  The best answers integrate all four Assessment Objectives fluidly rather than treating
                  them as separate checklists.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Assessment Objectives */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>CAIE Assessment Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Skill</th>
                      <th className="py-2 text-left font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-foreground whitespace-nowrap">Textual Knowledge</td>
                      <td className="py-2.5">
                        Show detailed knowledge and understanding of the text — support points with
                        specific references and quotations.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-foreground whitespace-nowrap">Writer's Methods</td>
                      <td className="py-2.5">
                        Analyse the ways in which writers use language, structure, and form to create
                        meanings and effects.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-foreground whitespace-nowrap">Interpretation</td>
                      <td className="py-2.5">
                        Demonstrate understanding of the relationship between texts and contexts —
                        historical, social, cultural, and literary.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-foreground whitespace-nowrap">Personal Response</td>
                      <td className="py-2.5">
                        Develop a personal response, showing engagement with and interpretation of
                        the text — explore alternative readings where appropriate.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ──────────────── SAMPLE QUESTION & MODEL PARAGRAPH ──────────────── */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Sample Question &amp; Model Paragraph
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Sample Question (Part b &mdash; Essay)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-muted-foreground leading-relaxed">
              <div className="rounded-lg bg-muted/50 p-4 border border-border/40">
                <p className="font-medium text-foreground">
                  &ldquo;Hanging Rock is the most important character in the novel.&rdquo; How far do
                  you agree with this view?
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Model Paragraph (addressing all 4 skills)
                </h3>
                <div className="rounded-lg bg-muted/30 p-4 border border-border/40 space-y-3">
                  <p>
                    Lindsay presents Hanging Rock not merely as a backdrop but as an active,
                    almost sentient force that drives the narrative&rsquo;s central crisis.
                    <span className="text-xs text-primary ml-1">[Textual Knowledge — knowledge of text]</span>
                    {" "}The Rock is described as having existed for &ldquo;a million years,&rdquo; a
                    phrase whose deliberate repetition throughout the novel emphasises the vast
                    geological timescale that dwarfs the human drama unfolding at its base. The
                    personification of the landscape &mdash; the Rock &ldquo;brooded in silence
                    over its own unfathomable secrets&rdquo; &mdash; grants it agency and
                    consciousness, transforming setting into character.
                    <span className="text-xs text-primary ml-1">[Writer's Methods — language analysis: repetition, personification]</span>
                  </p>
                  <p>
                    This technique reflects the tradition of Australian Gothic literature, in which
                    the bush is figured as hostile and unknowable rather than pastoral. Writing in
                    1967, Lindsay drew on growing Australian anxieties about the relationship between
                    settler culture and the ancient Indigenous landscape; the Rock&rsquo;s refusal to
                    yield its secrets can be read as the land itself resisting colonial possession.
                    <span className="text-xs text-primary ml-1">[Interpretation — literary and historical context]</span>
                  </p>
                  <p>
                    However, while the Rock is undoubtedly a powerful presence, calling it &ldquo;the
                    most important character&rdquo; risks diminishing the human tragedy at the
                    novel&rsquo;s heart. Sara&rsquo;s death, Mrs Appleyard&rsquo;s psychological
                    disintegration, and Michael&rsquo;s obsessive grief are driven by human emotions
                    &mdash; love, cruelty, desire &mdash; that the Rock merely catalyses. The Rock
                    provides the conditions for tragedy, but it is the characters&rsquo; responses
                    that give the novel its emotional power.
                    <span className="text-xs text-primary ml-1">[Personal Response — personal response, alternative interpretation]</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ──────────────── BACK LINK ──────────────── */}
        <div className="pt-4">
          <Link
            href="/resources/english-literature/caie"
            className="text-sm text-primary hover:underline transition-colors"
          >
            &larr; Back to CAIE Literature Resources
          </Link>
        </div>
      </div>
    </main>
  )
}
