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

export default function PigeonEnglishPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            21st-Century Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pigeon English &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Stephen Kelman, 2011</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for AQA GCSE English Literature Paper 2 (Modern Texts). Plot summary,
          character profiles, themes with evidence, key quotations, symbolism, context (including
          the Damilola Taylor case that inspired Kelman), and AO1/AO2/AO3 essay planning.
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
          <Section title="Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Setting and Premise</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Pigeon English is narrated by Harrison &ldquo;Harri&rdquo; Opoku, an
                  eleven-year-old Ghanaian boy who has recently moved to a high-rise estate in south
                  London with his mother (Mamma) and older sister Lydia. His father (Papa), baby
                  sister Agnes, and grandmother (Grandma Ama) remain in Ghana, with the family
                  hoping they can one day join them. The novel opens shortly after the murder of an
                  unnamed local boy, stabbed outside Chicken Joe&apos;s. Harri did not know the dead
                  boy well, but the killing fascinates and frightens him.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Harri&apos;s Investigation</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Inspired by detective shows like CSI, Harri and his friend Dean decide to
                  investigate the murder themselves. They hunt for clues, take fingerprints with
                  Sellotape and chalk dust, follow suspects, and keep a notebook of evidence.
                  Harri&apos;s perspective is comically innocent &mdash; he treats the investigation
                  as a game &mdash; but the novel makes clear that the violence around him is real
                  and adult. He goes to school, runs sprints with the class athlete Poppy Morgan
                  (his crush), worships Jordan Manny&apos;s trainers, and tries to learn the rules
                  of London playground life.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Dell Farm Crew</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The estate is dominated by the Dell Farm Crew, an older gang led by X-Fire and
                  including Killa and Clipz. They intimidate younger children, run minor crime on
                  the estate, and are widely suspected of being involved in the murder. X-Fire
                  repeatedly tries to recruit Harri, both because Harri runs fast and because Harri
                  witnessed something the crew want to know about. Harri&apos;s reluctant
                  interactions with them &mdash; a mixture of fear, fascination, and bravado &mdash;
                  structure the central tension of the novel. Lydia, more streetwise than Harri,
                  becomes entangled with Miquita (X-Fire&apos;s sister) and is increasingly drawn
                  into the gang&apos;s orbit.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Family Pressures</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Mamma works long shifts as a midwife at the hospital. Auntie Sonia, her sister,
                  lives nearby and burns her own fingerprints off to escape immigration trouble.
                  Sonia&apos;s violent partner Julius extorts money and creates fear in the
                  household. Papa phones from Ghana asking for money to bring himself and Agnes to
                  England. The family is stretched thin: financially, emotionally, and across two
                  continents.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Pigeon&apos;s Voice</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Interspersed throughout the novel are short italicised sections narrated by a
                  pigeon that watches over Harri. The pigeon&apos;s voice is poetic, mythic, and
                  knowing &mdash; in stark contrast to Harri&apos;s naive prose. It speaks of divine
                  purpose, the souls of children, and the patterns of the city from above. The
                  pigeon is both literal (Harri feeds it bread on the balcony) and symbolic: a
                  guardian, a witness, a soul, perhaps even a god.
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Climax</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tensions escalate. Harri identifies Killa as carrying the murder weapon. He faces
                  increasing pressure from the Dell Farm Crew. After a confrontation where Harri
                  appears to have escaped real danger, he walks home across an open area near the
                  estate. In a sudden, almost off-hand passage, Harri is stabbed. The narrative cuts
                  to the pigeon&apos;s perspective for the closing pages: the pigeon describes
                  Harri&apos;s death from above, lifting his soul. The reader is left with a shock
                  that mirrors the reality of estate violence: random, pointless, and devastating.
                  Kelman refuses to provide neat resolution, just as the real-world cases that
                  inspired him offered none.
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
                name="Harrison &ldquo;Harri&rdquo; Opoku"
                description="The eleven-year-old narrator. A recent Ghanaian immigrant trying to navigate a violent London estate while remaining a child. He is fast (a sprinter), curious, devout, kind to pigeons, infatuated with Poppy Morgan, and obsessed with his Diadora trainers. His voice mixes Ghanaian Pidgin English (asweh, hutious, bo-styles, gowayou) with London playground slang (bare, dope-fine, blates) — a hybrid that captures the in-between space of the migrant child. Harri's defining quality is his innocence: he reports adult violence in a child's register, and the gap between what he sees and what he understands creates the novel's tragic irony. Kelman's choice to kill him at the end is a deliberate refusal of the bildungsroman: Harri never gets to grow up."
              />
              <CharacterCard
                name="Lydia"
                description="Harri's older sister, around thirteen or fourteen. More worldly, more knowing, and more frightened than Harri. She tries to protect her brother and, simultaneously, to fit in with Miquita and the older girls connected to the Dell Farm Crew. Lydia experiences the sexualised violence of the estate that Harri largely cannot see — Miquita's grooming, the older boys' pressure. Her arc shows the harder truth Harri is partly insulated from: that being female on the estate carries its own dangers. She is the family member most aware of what is really happening."
              />
              <CharacterCard
                name="Mamma"
                description="Harri and Lydia's mother. A midwife working long, exhausting hospital shifts to support the family and save money to bring Papa and Agnes to England. She is religious, strict, exhausted, and loving. Mamma represents the migrant mother carrying the entire weight of the family's project of belonging in Britain. Her scenes — coming home tired, praying, scolding, telling Harri stories of Ghana — anchor the novel's emotional centre. Her grief at the end is the emotional weight Kelman leaves with the reader."
              />
              <CharacterCard
                name="Papa and Agnes"
                description="Harri's father and baby sister, still in Ghana throughout the novel. Papa phones the family asking for money to bring himself and Agnes over. The reader never meets them in person; they exist only through phone calls and Harri's memories. Their absence shapes the family: Mamma's exhaustion, Lydia's premature responsibility, and Harri's idealisation of Ghana all flow from the family's split across continents. Papa becomes a symbol of what migration costs."
              />
              <CharacterCard
                name="Auntie Sonia"
                description="Mamma's sister, also in London. She has burned the prints off her fingertips to evade immigration authorities — one of the novel's most haunting images of what migrants endure. Her plot strand is parallel to Harri's: her fingerprintless hands echo the fingerprint dust Harri collects from the estate. Sonia's experience reveals the precarity behind even the family's everyday life."
              />
              <CharacterCard
                name="Julius"
                description="Auntie Sonia's partner. Violent, manipulative, and exploitative; he extorts money from the family and is feared by Sonia. Julius represents adult male violence within the migrant community — a counterpoint to the gang violence outside. He shows that danger to women and children is not confined to the estate's gangs but exists at home too. He is one of the novel's clearest portraits of a bad man."
              />
              <CharacterCard
                name="Dean"
                description="Harri's school friend and partner-in-detection. Mixed-race, born in London, more confident in British culture than Harri. Dean introduces the CSI-inspired investigation: fingerprints, evidence bags, suspect lists. His role is partly comic — the boys take their investigation extremely seriously despite its absurdity — but also tragic: their childish detective game runs alongside a real murder they cannot understand."
              />
              <CharacterCard
                name="Poppy Morgan"
                description="A girl in Harri's year, the school sprint champion until Harri arrives. Harri is in love with her. Their romance — passing notes, holding hands at the swings, racing each other — provides the novel's lightest, sweetest moments and emphasises that Harri is still a child. Poppy is a symbol of the ordinary childhood Harri ought to be having."
              />
              <CharacterCard
                name="The Dell Farm Crew (X-Fire, Killa, Clipz)"
                description="The teenage gang that dominates the estate. X-Fire is the leader: charismatic, threatening, and sharp enough to see Harri as both useful and dangerous. Killa is the most overtly violent and is implicated in carrying the knife. Clipz hovers at the edge. They represent the absorption of working-class British and migrant boys into a violent peer culture — the world Harri is being recruited into. Kelman portrays them not as cartoon villains but as products of the same estate, the same neglect, the same precarity that shapes Harri's family."
              />
              <CharacterCard
                name="Miquita"
                description="X-Fire's sister and the older girl Lydia gravitates toward. Miquita pressures Lydia to grow up faster than she should — into make-up, boys, and gang-affiliated risk. Her relationship with Lydia is the parallel female track to Harri's recruitment by X-Fire."
              />
              <CharacterCard
                name="The Pigeon"
                description="The novel's second, omniscient narrator. The pigeon's italicised passages frame Harri from above: poetic, mythic, allusive, sometimes almost biblical. The pigeon claims a divine or guardian role; it watches Harri, comments on the city, and ultimately bears witness to his death. The pigeon is symbolically rich — soul, conscience, witness, god, Holy Spirit (a dove), even Harri himself in another register. Its voice is the formal counterpoint to Harri's voice: where Harri is naive and slangy, the pigeon is solemn and lyrical."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Childhood vs Violence"
                description="The novel's central tension is the gulf between Harri's childlike consciousness and the adult violence around him. Harri reports a stabbing in the same register he reports school sprints. He treats his murder investigation as a game; the gang's intimidation as something he can outrun. Kelman uses this gap to devastating effect: the reader sees clearly what Harri only half-perceives. The shocking ending — Harri stabbed — is the moment childhood and violence collide. Kelman's argument is that childhood on a violent estate cannot survive intact: sooner or later the world breaks through. The novel is a protest against the social conditions that put children like Harri in mortal danger while still children."
              />
              <ThemeCard
                title="Migration and Belonging"
                description="Harri is in-between: too Ghanaian to be wholly British, too British already to be wholly Ghanaian. His language is the most obvious sign — Pidgin words sit alongside London slang in every paragraph. His family is split across two continents, with Papa and Agnes still in Ghana. Auntie Sonia's burned fingerprints show what undocumented migrants endure simply to remain. Mamma's exhausting work funds an Atlantic-wide family project. Kelman portrays migration not as a single arrival but as a permanent state of negotiation: between languages, between countries, between identities. Belonging, for Harri, is provisional — and ultimately denied to him."
              />
              <ThemeCard
                title="Faith and Hope"
                description="Harri is a believer. He prays, attends church with Mamma, and reads moral meaning into everyday events. His faith is uncomplicated and sincere — he asks God to look after the dead boy, to make Mamma's shifts shorter, to make Poppy like him. The pigeon's voice strengthens this thread: it speaks in religious cadences, hinting at souls, judgement, and divine watching. Hope in the novel is fragile but persistent: hope that the family will reunite, that Harri will grow up, that the estate is not the whole world. The ending tests this hope to breaking point. Kelman does not entirely destroy faith — the pigeon's closing passage offers something like consolation — but the novel insists that hope on an estate like Harri's is precious and easily extinguished."
              />
              <ThemeCard
                title="Family"
                description="Family is the novel's emotional centre. Mamma's exhaustion, Lydia's protective fierceness, Papa's distant phone calls, Agnes's absence, Auntie Sonia's vulnerability — every adult relationship is shaped by the family's split between London and Ghana. Kelman shows that the migrant family is held together by enormous, often invisible, labour: financial, emotional, transatlantic. He also shows its fragility. Julius represents the danger inside; the estate represents the danger outside. The closing pages — Mamma without Harri — leave the family broken in a way that no remittance can repair."
              />
              <ThemeCard
                title="Friendship and Group Dynamics"
                description="The novel explores how children form alliances under pressure. Dean is Harri's chosen friend — a true peer, equal partner in the detective game. The Dell Farm Crew, by contrast, is the opposite: a group that demands loyalty through fear. Harri is constantly being asked which group he belongs to, and the recruitment by X-Fire is one of the novel's chief threats. Kelman shows that group identity on the estate is not optional: refusing the gang has consequences too. Lydia's drift toward Miquita is the female version of the same pressure. Friendship in the novel is a form of resistance to gang dynamics — and that is partly why Harri's friendships are so movingly drawn."
              />
              <ThemeCard
                title="Storytelling and Voice"
                description="Pigeon English is, above all, a novel of voice. Harri's narration mixes Ghanaian Pidgin English (asweh, hutious, dey, bo-styles) with British playground slang (bare, dope-fine, blates) and his own private vocabulary. This hybrid is the novel's central formal achievement. Voice is identity here: Harri is who he is because of how he talks. The pigeon's voice — italicised, poetic, knowing — provides a second register, almost a chorus. The juxtaposition of the two voices is the novel's structure. Kelman is making an argument about whose voices count in British fiction and on the British estate: Harri's voice, often dismissed in real life, is given the dignity of literature."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Social Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Damilola Taylor (2000) and Kelman&apos;s Inspiration
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stephen Kelman has stated in interviews that the novel was inspired by the 2000
                  murder of Damilola Taylor, a ten-year-old Nigerian boy who bled to death on a
                  Peckham stairwell after being stabbed in the leg with a broken bottle on his way
                  home from the library. The case generated enormous public attention in Britain
                  about child violence, urban poverty, and the failure of police investigations on
                  inner-city estates. Kelman has said he wanted to imagine what kind of boy Damilola
                  was, what his interior life might have been &mdash; not to retell the case, but to
                  honour the person behind the headline. Harri is a fictional creation but
                  unmistakably owes his existence to that act of imaginative empathy.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  London Estates and &ldquo;Knife Crime&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel emerges from the post-2000s media discourse around &ldquo;knife
                  crime&rdquo; in British cities, particularly London. High-rise estates &mdash;
                  many built in the 1960s and 70s as social housing &mdash; had become symbols of
                  urban deprivation, underfunding, and gang activity. The Dell Farm estate is
                  fictional but composite: based on real London estates Kelman researched.
                  Harri&apos;s world is shaped by youth services cuts, overcrowded schools, and the
                  everyday presence of older boys with knives. Kelman&apos;s portrayal humanises
                  this world without romanticising it, and resists the moral panic framing of the
                  early-2000s press.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">West African and Ghanaian Diaspora</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Britain has a long and growing Ghanaian community, particularly in London. Many
                  families, like Harri&apos;s, migrate in stages: one parent first, then children,
                  then the rest. Pidgin English is the everyday language of much of Ghana, and
                  Harri&apos;s &ldquo;asweh&rdquo; (a marker of emphasis derived from &ldquo;I
                  swear&rdquo;), &ldquo;hutious&rdquo; (frightened), and &ldquo;dey swell&rdquo;
                  constructions reflect that real linguistic context. Kelman is a white British
                  writer, and the choice to narrate from a Ghanaian boy&apos;s perspective drew both
                  praise and debate &mdash; some critics questioned whether a white author should
                  inhabit a Black migrant child&apos;s voice. The novel sits inside that ongoing
                  conversation about authorship, empathy, and representation.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Booker Prize Shortlist (2011)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Pigeon English was shortlisted for the Man Booker Prize in 2011, a remarkable
                  achievement for a debut novel. The shortlisting brought it major attention and
                  controversy. Some readers and critics found the child&apos;s-voice narration
                  uncomfortable or sentimental; others praised it as a fresh and honest portrait of
                  contemporary London childhood. The book&apos;s prominence on the Booker list is
                  why it is now studied at GCSE.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Stephen Kelman&apos;s Background</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stephen Kelman was born in Luton in 1976. Before Pigeon English &mdash; his debut
                  novel &mdash; he worked in a series of jobs including warehousing and care work,
                  and did not come from a literary or academic background. He has described writing
                  the novel partly as an act of empathy following the Damilola Taylor case and
                  partly drawing on his own childhood on a council estate. His outsider position
                  vis-&agrave;-vis the literary establishment is part of what made his shortlisting
                  notable. He has continued to write since, but Pigeon English remains his most
                  widely read work.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The Bildungsroman Tradition (and Its Refusal)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A bildungsroman is a coming-of-age novel: the protagonist begins as a child and,
                  over the course of the narrative, grows into adulthood through experience. Pigeon
                  English looks like a bildungsroman &mdash; it has all the conventions: the child
                  narrator, the new environment, the school world, the first crush, the growing
                  awareness of adult realities. But Kelman ends it before Harri can grow up. The
                  novel deliberately refuses the genre&apos;s promise of arrival into adulthood.
                  This refusal is the novel&apos;s political point: a society that fails to protect
                  its children writes itself a literature in which children do not get to come of
                  age.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Quotations selected for AO2 (language and structure) analysis. Pigeon English is in
              copyright, so this list is conservative: only quotations Kelman&apos;s narrators use
              repeatedly or that are widely cited in published criticism. Where exact wording should
              be confirmed against your edition before quoting in an exam, the quotation is flagged
              with [VERIFY].
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Asweh"
                speaker="Harri (recurring)"
                analysis="Harri's signature verbal tic. A contraction of 'I swear', drawn from West African Pidgin English, used by Harri to emphasise a claim or express conviction. It appears throughout the novel — sometimes several times per page — and functions as Harri's linguistic signature. The repetition tells us we are inside Harri's head; it also marks his hybrid identity, sitting alongside London playground slang. AO2: a short, single-word marker of voice; AO3: the lexical residue of West African migration in a London child's speech."
              />
              <QuoteCard
                quote="Hutious"
                speaker="Harri (recurring)"
                analysis="Pidgin English for 'frightened' or 'terrified'. Harri uses it to describe people, places, and feelings throughout the novel — from gang members to the dark stairwells of the estate. Like 'asweh', the word is one of the recurring lexical anchors of Harri's voice. It also performs the novel's central irony: a child describing very real terror in a vocabulary that the British reader half-understands. AO2: register; AO3: the linguistic experience of a Ghanaian child in London."
              />
              <QuoteCard
                quote="Bare"
                speaker="Harri (recurring) [VERIFY usage in your edition]"
                analysis="London playground slang meaning 'a lot of' or 'very'. Harri picks it up from his peers and uses it constantly ('bare jokes', 'bare cold'). It is the British half of his hybrid voice, sitting alongside his Pidgin words. The mixing of registers within a single sentence is the novel's signature stylistic move. AO2: code-switching; AO3: London adolescent speech of the late-2000s."
              />
              <QuoteCard
                quote="Dope-fine"
                speaker="Harri (recurring) [VERIFY exact form]"
                analysis="A compound coinage Harri uses to mean 'excellent', merging American hip-hop ('dope') with a British/Pidgin intensifier ('fine'). The word exemplifies how children invent vocabulary by collaging registers. Harri's voice is not just hybrid — it is creative; he is inventing English as he speaks it. AO2: neologism; AO3: globalised youth culture."
              />
              <QuoteCard
                quote="The pigeon"
                speaker="(narrator of italicised sections)"
                analysis="The novel's second narrator, whose voice opens and closes the book and recurs in italicised interludes. The pigeon's register is poetic, allusive, and almost biblical, in deliberate contrast with Harri's slangy prose. The pigeon's role as omniscient witness, guardian, and (at the end) soul-bearer makes its voice the formal counterweight to Harri's. AO2: structure (a second narrator framing the first); AO3: the dove as Holy Spirit, Noah's dove, an old image of soul and survival reworked for a London estate."
              />
              <QuoteCard
                quote="Chicken Joe's"
                speaker="Harri"
                analysis="The fictional fast-food shop outside which the dead boy is stabbed. The name is mundane and almost comic — a child's-eye landmark — and that mundanity is the point. Murder happens in the most ordinary place on the estate. AO2: setting as character; AO3: the chicken-shop economy of London estates is real social texture."
              />
              <QuoteCard
                quote="Dell Farm"
                speaker="Harri"
                analysis="The estate where Harri lives and the gang takes its name. 'Farm' is incongruous — there is no farm, only concrete — and the dissonance captures the failed pastoral of post-war social housing: estates named for the countryside they replaced. AO3: the irony of estate names ('Farm', 'Garden', 'Park') is a recurring feature of British council architecture."
              />
              <QuoteCard
                quote="The dead boy"
                speaker="Harri (recurring)"
                analysis="Harri never uses the dead boy's full name — he refers to him as 'the dead boy' throughout. The phrase becomes a refrain. The flat, repeated formula captures the way the murder hovers over the novel: known and unprocessed. It also echoes how Harri himself will be referred to at the end. AO2: epithet; AO3: the public anonymity of victims in real estate murders."
              />
              <QuoteCard
                quote="Adidas / Diadora trainers"
                speaker="Harri (recurring)"
                analysis="Harri's prized possession. Trainers, brand-named, are status objects on the estate — a child's first form of capital. Harri's love for his trainers is innocent (they make him faster) but the wider world weaponises that same status: trainers are stolen, killed for, fought over. The trainer becomes a small symbol of how childhood material delight is shaped by adult economies of violence. AO3: branded sportswear and estate masculinity in the 2000s."
              />
              <QuoteCard
                quote="Poppy Morgan"
                speaker="Harri"
                analysis="The name of Harri's school crush is itself a kind of motif: he says it, thinks it, writes it. The romance is a parallel narrative that proves Harri is still a child — passing notes, holding hands, racing each other. The lightness of these scenes makes the violence elsewhere more devastating by contrast. AO2: structural counterweight."
              />
              <QuoteCard
                quote="Auntie Sonia's fingers"
                speaker="Harri (paraphrased — confirm exact wording in your edition) [VERIFY]"
                analysis="Auntie Sonia has burned the prints off her fingertips so that immigration cannot identify her. The image is one of the novel's most haunting: the literal erasure of identity to survive in Britain. It also rhymes with the fingerprint dust Harri uses in his detective game — making explicit the gulf between his investigation (a game with chalk) and the real, irreversible kinds of identity-erasure that adult migrants endure. AO3: the lived precarity of undocumented status."
              />
              <QuoteCard
                quote="X-Fire"
                speaker="Harri"
                analysis="The Dell Farm Crew leader's chosen street name. Like all gang names in the novel ('Killa', 'Clipz'), it is performative — a brand of fearsomeness adopted in adolescence. Kelman's gang members are not faceless monsters but boys playing at being men, in a world where that performance has lethal stakes. AO3: gang nomenclature in real London estates."
              />
              <QuoteCard
                quote="The pigeon takes Harri's soul / final pigeon passage"
                speaker="(the pigeon — closing section)"
                analysis="In the novel's final pages, after Harri is stabbed, the narrative shifts entirely to the pigeon's voice. The pigeon describes Harri's last moments and lifts his soul — the image draws on Christian iconography of the dove and on much older images of soul-birds. The shift in register from Harri's slangy first person to the pigeon's lyrical address is the novel's most devastating structural move: Harri's voice is silenced, and the pigeon takes over the telling. AO2: a structural ending that forces the reader to confront the loss of Harri's voice itself. [VERIFY exact final wording in your edition.]"
              />
              <QuoteCard
                quote="Brother from another"
                speaker="Harri (school slang) [VERIFY]"
                analysis="Harri's playground formulation of close friendship — typically used about Dean. Phrases like this carry the global pop culture (American hip-hop) running through London playgrounds in the 2000s. AO3: British adolescent speech as a tributary of global Black cultural production."
              />
              <QuoteCard
                quote="Just gone"
                speaker="Harri (recurring) [VERIFY exact phrasing]"
                analysis="A Pidgin-flavoured intensifier Harri uses for emphasis ('it was just gone amazing'). The phrase is part of his hybrid lexicon and one of the recurring formulas that mark his voice. AO2: voice marker."
              />
            </div>
            <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-2">
                [VERIFY] flags
              </p>
              <p className="text-sm text-muted-foreground">
                Pigeon English (2011) is in copyright and not freely available. Quotations marked
                [VERIFY] should be checked against your physical edition before being reproduced in
                a coursework essay or exam-board approved response. The recurring single-word voice
                markers (asweh, hutious) are well-attested across published criticism and interviews
                with Kelman; the longer phrases require confirmation. Always cite by page number
                from your edition where possible.
              </p>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbolism" icon="🕊️">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Pigeon</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s richest symbol. Literally a pigeon Harri feeds on the balcony
                  &mdash; symbolically, much more. As an italicised second narrator, the pigeon is
                  at once: a guardian (it watches Harri); an omniscient witness (it sees the whole
                  estate from above); a soul (it lifts Harri at the end); a god or angel (its voice
                  carries religious cadences); the Holy Spirit (a dove); and possibly Harri himself
                  in another register. The pigeon&apos;s humble urban species &mdash; the most
                  common, most despised London bird &mdash; mirrors Harri&apos;s position: a child
                  the city scarcely notices, but who carries weight the city refuses to see. The
                  title itself fuses pigeon and English: the bird and the language, the migrant
                  child and the broken English of the estate.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Trainers</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Harri&apos;s prized branded trainers are a symbol of status, identity, and
                  childhood material desire. To Harri they are simply joyful objects that make him
                  faster. To the estate&apos;s economy they are currency, status markers, and
                  potential targets. The trainer captures the novel&apos;s argument that ordinary
                  childhood pleasures are entangled with adult violences: the same shoe is a
                  child&apos;s delight and a stolen object on the estate. AO3: branded sportswear
                  has been central to British estate culture since the 1990s, and Kelman foregrounds
                  it deliberately.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The River</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The river running near the estate &mdash; where Harri and Dean go to play and to
                  stake out suspects &mdash; is one of the novel&apos;s few open, natural spaces. It
                  carries traditional symbolic weight: flow, transition, time, escape, the boundary
                  between worlds. For Harri it is freedom; structurally, it is the boundary between
                  childhood and the adult violence the novel ends with. The river never quite
                  carries Harri away from the estate; the estate catches up with him on the way
                  home.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Broken Concrete</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The physical fabric of the estate &mdash; cracked walkways, broken lifts,
                  graffiti, flickering stairwell lights &mdash; is a constant background presence in
                  the novel. The disrepair is a symbol of social abandonment: the state has built
                  and forgotten this place. The detail &ldquo;the lift smells of pee&rdquo; is the
                  kind of recurring sensory note that captures it. The broken estate is the setting
                  against which Harri&apos;s liveliness reads as protest.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">&ldquo;Asweh&rdquo;</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  More than a verbal tic, &ldquo;asweh&rdquo; functions as a small symbol of
                  Harri&apos;s whole identity. It is West African in origin, conviction-bearing in
                  function, and embedded in a London child&apos;s speech &mdash; the syllable
                  carries his entire migration in compressed form. Critics have noted it as the
                  novel&apos;s most concentrated linguistic image of hybridity.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Fingerprint Dust</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Harri and Dean dust for fingerprints with chalk and Sellotape, copying CSI. The
                  image is comic in itself, but it is built into a brutal symbolic rhyme with Auntie
                  Sonia&apos;s burned fingertips. Two kinds of fingerprint sit side by side: the
                  child&apos;s playful detective dust, and the adult migrant&apos;s literal erasure
                  of her own prints to survive. Kelman uses this rhyme to ironise the gap between
                  play and reality: Harri thinks he is solving a crime through fingerprints;
                  meanwhile his own family is unmaking its prints to stay in the country at all.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="Exam Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five AQA-GCSE-style questions on Pigeon English with full planning notes. Each plan
              flags the AO1 (read, understand and respond to texts), AO2 (analyse the language, form
              and structure used by a writer), and AO3 (the relationship between texts and their
              contexts) targets. Use these as model approaches; in the exam, spend 5 minutes
              planning before writing.
            </p>

            <div className="space-y-6">
              {/* Question 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Kelman present Harri&apos;s response to the violence of the estate in
                  Pigeon English? [30 marks + 4 SPaG]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Kelman uses Harri&apos;s child-narrator perspective to expose the violence of
                      the estate without sensationalising it: Harri reports adult brutality in a
                      register of curiosity and play, and the gap between what he says and what we
                      understand is the novel&apos;s moral force.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2 voice)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri&apos;s register: mixing &ldquo;asweh&rdquo;, &ldquo;hutious&rdquo;, and
                      London slang. Discuss how the recurring vocabulary is calibrated for
                      childhood; the violence is reported in the same register as PE class.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2 structure)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The detective game with Dean: chalk, Sellotape, fingerprint dust. Argue that
                      the structural device of the &ldquo;investigation&rdquo; allows Kelman to
                      track adult violence through a child&apos;s framework, making the irony do the
                      work.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2 ending)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The shocking final passage: Harri stabbed; the narrative handed to the pigeon.
                      Argue that the structural choice &mdash; silencing Harri&apos;s voice &mdash;
                      is the most devastating response Kelman can offer to estate violence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3 context)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Damilola Taylor (2000) and the post-2000s &ldquo;knife crime&rdquo; coverage.
                      Argue Kelman is not chasing the headline but writing against its dehumanising
                      frame &mdash; restoring the child to the news story.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Explore how Kelman presents the experience of migration in Pigeon English. [30
                  marks + 4 SPaG]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Kelman presents migration not as a single arrival but as a permanent state of
                      negotiation &mdash; linguistic, familial, legal, and emotional &mdash;
                      embodied above all in Harri&apos;s hybrid voice and his split family.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2 language)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri&apos;s code-switching: &ldquo;asweh&rdquo;, &ldquo;hutious&rdquo;
                      sitting next to British slang within single sentences. Argue that the
                      novel&apos;s sentences themselves enact migration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2 family)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The split between London (Mamma, Lydia, Harri) and Ghana (Papa, Agnes, Grandma
                      Ama). Mamma&apos;s exhaustion as the visible cost. Phone calls as thinly
                      stretched ropes across the Atlantic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2 image)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Auntie Sonia&apos;s burned fingertips: the literal erasure of identity under
                      immigration pressure. Read alongside Harri&apos;s fingerprint dust for irony.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3 context)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      West African / Ghanaian diaspora in London; staged migration; the legal
                      precarity of undocumented status. Mention the debate about Kelman as a white
                      author writing a Black migrant child if your teacher wants AO3 on authorial
                      position.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How significant is the pigeon as a narrator in Pigeon English? [30 marks + 4
                  SPaG]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pigeon is structurally and thematically essential: it provides the formal
                      counterweight to Harri&apos;s child voice, witnesses what Harri cannot, and
                      ultimately replaces Harri as narrator at the moment of his death.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2 register)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Italicised, lyrical, almost biblical register. Contrast with Harri&apos;s
                      slangy first-person voice. Argue that the novel&apos;s structure is built from
                      the alternation of these two voices.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2 symbolic role)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pigeon as guardian, soul, witness; the urban pigeon as a deliberately
                      humble version of the divine bird. The dove and the Holy Spirit; Noah&apos;s
                      dove returning; the ancient soul-bird tradition.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2 ending)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The closing pigeon passage as the novel&apos;s emotional climax. The handover
                      of voice from Harri to pigeon at the moment of his death. The reader is forced
                      to mourn through a non-human narrator.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3 context)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The dove in Christian iconography; pigeons as the typical &ldquo;dirty&rdquo;
                      city bird; Kelman&apos;s recovery of the despised urban species as the bearer
                      of meaning. The title yokes pigeon and English.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Kelman use voice and language to create Harri as a character? [30
                  marks + 4 SPaG]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri is constructed almost entirely through voice: a hybrid lexicon mixing
                      Pidgin English and London slang, a child&apos;s syntax, and a rhythm of
                      repeated formulas. Voice is identity in this novel.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2 lexis)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Recurring markers: &ldquo;asweh&rdquo;, &ldquo;hutious&rdquo;,
                      &ldquo;dey&rdquo;. Their West African origin. Argue that these are not
                      flavouring but the load-bearing structure of the voice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2 syntax)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Short clauses, declarative rhythm, present-tense recounting. The way Harri
                      lists facts and observations like inventory. Discuss how the syntax keeps us
                      in a child&apos;s real-time perception.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2 register-shift)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Code-switching within sentences: Pidgin meeting London estate slang. Argue
                      that the very sentence is the novel&apos;s political claim about who counts as
                      a London voice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3 context)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ghanaian diaspora; the sociolinguistics of the Multicultural London English
                      (MLE) of the 2000s; the literary tradition of child narrators (Huckleberry
                      Finn, Frank McCourt, Mark Haddon). Kelman&apos;s outsider position in literary
                      fiction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. &ldquo;Pigeon English is ultimately a novel about the failure of society to
                  protect its children.&rdquo; To what extent do you agree? [30 marks + 4 SPaG]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Largely agree: the structural choice to kill Harri makes the novel a protest
                      against a society that fails its children &mdash; but Kelman complicates this
                      with Harri&apos;s vivid agency, the pigeon&apos;s consoling presence, and the
                      insistence on Harri&apos;s humanity over the fact of his death.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2 ending)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The shocking stabbing of Harri at the end. The bildungsroman cut short. Read
                      as the novel&apos;s central indictment: a child has not been protected.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2 institutions)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The state&apos;s failures across the novel: the police investigation that
                      cannot solve the dead boy&apos;s murder; the under-resourced school;
                      Mamma&apos;s impossible workload. Argue the novel indicts not individuals but
                      a system.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2 counter)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Counter-argument: the novel is also full of love &mdash; Mamma, Lydia, Dean,
                      Poppy. Harri is not unprotected by his family, only by the world his family
                      has been placed in. The pigeon&apos;s closing voice provides something like
                      consolation. The novel mourns; it does not despair.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3 context)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Damilola Taylor; the post-2000s estate context; austerity-era cuts to youth
                      services. Kelman&apos;s explicit framing of the novel as a response to a real
                      failure of protection. The Booker shortlist as evidence the argument was
                      heard.
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
        <h3 className="text-lg font-bold text-foreground">Exam Tips for Pigeon English</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Always link to context (AO3).</strong> The Damilola Taylor case (2000), the
              post-2000s &ldquo;knife crime&rdquo; discourse, and the Ghanaian diaspora in London
              are the three context anchors examiners reward.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Analyse voice, not just content (AO2).</strong> &ldquo;Asweh&rdquo;,
              &ldquo;hutious&rdquo;, code-switching between Pidgin English and London slang &mdash;
              this is the novel&apos;s central method.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Treat the pigeon as a structural device, not a curiosity.</strong> The
              italicised passages frame the novel; the closing handover from Harri to pigeon is the
              novel&apos;s climax.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Refer to the writer&apos;s intentions.</strong> &ldquo;Kelman uses
              Harri&apos;s voice to&hellip;&rdquo;, &ldquo;Kelman refuses the conventional
              bildungsroman ending in order to&hellip;&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Verify any longer quotation in your edition.</strong> Pigeon English is in
              copyright; only quote phrases you can confirm verbatim. Single-word voice markers
              (&ldquo;asweh&rdquo;, &ldquo;hutious&rdquo;) are widely cited and safe.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Reference the whole novel.</strong> Use detail from openings (the dead boy
              outside Chicken Joe&apos;s), middle (the detective game, Auntie Sonia&apos;s fingers),
              and ending (the pigeon&apos;s closing passage). This signals AO1 confidence with the
              whole text.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Pigeon English</em> by Stephen Kelman was first published in 2011 by Bloomsbury and
          remains in copyright. The notes on this page are a study summary; quotations are kept
          deliberately brief and limited to widely cited single-word voice markers and clearly
          paraphrased descriptions. Students should always cite the page reference from their own
          edition when quoting in coursework or examinations. Items marked [VERIFY] should be
          confirmed against the printed text before being reproduced verbatim.
        </p>
      </footer>
    </>
  )
}
