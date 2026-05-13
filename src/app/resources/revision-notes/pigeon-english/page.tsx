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

export default function PigeonEnglishPage() {
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
            Modern Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pigeon English &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Stephen Kelman, 2011`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your AQA GCSE English Literature exam on Stephen Kelman&apos;s
          Booker-shortlisted debut novel. Plot summary, character profiles, themes with evidence,
          key quotations, contextual links to the Damilola Taylor case, the pigeon&apos;s narrative
          interventions, Harri&apos;s mixed Pidgin-English voice, and full essay planning guidance.
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
            'Structure & Voice',
            'Essay Planning',
            'Grade 9 Points',
            'Practice Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
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
          <Section title={tr(`Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Opening: A Boy is Murdered
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel opens after a boy has been stabbed and bled to death outside Chicken
                  Joe&apos;s on a London estate. Harrison &ldquo;Harri&rdquo; Opoku, an
                  eleven-year-old recently arrived from Ghana with his mother (Mamma) and older
                  sister Lydia, narrates the scene. Harri stares at the dead boy&apos;s blood drying
                  on the pavement and resolves, with his friend Dean, to investigate the murder
                  using CSI-style detective methods. Kelman immediately establishes Harri&apos;s
                  innocent voice clashing with brutal urban violence.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Family Life: Half a Family in London
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Harri lives in a high-rise flat with Mamma (a midwife working long shifts) and
                  Lydia. Papa and baby Agnes are still in Ghana, waiting to be brought over. Auntie
                  Sonia visits and burns her fingerprints off with an iron to evade immigration
                  authorities. The family prays, attends church and tries to maintain Ghanaian
                  customs. Harri misses Papa and Agnes desperately, writing letters home in his
                  head.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  School and Friendships
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Harri attends a multi-ethnic London school. He is a fast runner and counts his
                  trainers as precious possessions. He befriends Dean, who provides forensic
                  theories from CSI. Harri develops an innocent crush on Poppy Morgan, a white
                  classmate. He also encounters Julius, a violent boy whose cruelty foreshadows the
                  older gang culture.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  The Detective Game Intensifies
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Harri and Dean dust for fingerprints with a make-do kit, set up surveillance, and
                  shadow possible suspects. They focus on the Dell Farm Crew &mdash; the local gang
                  led by X-Fire, with Killa and Clipz. Their investigation is comically inept but
                  genuinely brave; the boys do not yet understand the danger of poking at real
                  criminals.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  The Pigeon as Watching Voice
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Throughout the novel, italicised passages narrated by a pigeon interrupt
                  Harri&apos;s account. The pigeon watches Harri from above, commenting on the
                  estate, the violence, and his vulnerability. These short, poetic interludes give
                  the novel an omniscient, almost religious second perspective &mdash; the pigeon as
                  guardian angel, cosmic witness, and symbol of the natural world surviving on the
                  margins of human cruelty.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  Initiation Pressures
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  As Harri&apos;s investigation deepens, the Dell Farm Crew take an interest in him.
                  X-Fire and the older boys try to recruit Harri, offering protection and status in
                  exchange for loyalty and small criminal acts. Harri is fascinated and frightened
                  in equal measure. He resists, but the pressure to belong is enormous in his
                  father&apos;s absence. Lydia is drawn into a parallel orbit through older friends.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Auntie Sonia, Julius and Domestic Violence
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Auntie Sonia is in an abusive relationship with Julius, a brutal man whose
                  presence terrifies Harri. The novel reveals adult violence as a parallel threat to
                  the street gangs. Mamma tries to protect Sonia. The episode shows cruelty is not
                  confined to strangers; it operates inside family as well as outside it.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Lydia&apos;s Growing Fear
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Lydia senses that Harri&apos;s investigation has been noticed and warns him off,
                  but Harri persists. Their sibling relationship oscillates between teasing rivalry
                  and fierce protection. Mamma works long hospital nights and is largely unaware of
                  how exposed both her children are.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  The Confrontation
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Harri&apos;s investigation finally produces a name &mdash; one of the Dell Farm
                  Crew, identified by a pattern of evidence Harri has gathered. The crew confront
                  Harri, demanding he stop. Their threats escalate, and Harri realises he is no
                  longer playing a game. He has crossed a line he did not see, and the consequences
                  are real.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    10
                  </span>
                  The Shocking Ending
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In the closing pages, Harri is stabbed in the street, exactly mirroring the fate
                  of the unnamed boy whose murder he had been investigating. The novel refuses
                  readerly comfort: no last-minute rescue, no detective triumph. The narration tilts
                  decisively to the pigeon&apos;s perspective, watching from above as Harri lies
                  bleeding. The closing passages are poetic, grief-soaked, devastating. The cycle of
                  violence has claimed another child, and the pigeon &mdash; the only witness who
                  cannot speak to the police &mdash; bears it away.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Harri stabbed &mdash; the investigator becomes the victim</li>
                    <li>&bull; Narrative shift to the pigeon &mdash; Harri&apos;s voice cut off</li>
                    <li>&bull; Echo of the opening murder &mdash; circular structure</li>
                    <li>&bull; No resolution, no justice &mdash; Kelman refuses comfort</li>
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
                name="Harrison &lsquo;Harri&rsquo; Opoku"
                description="The eleven-year-old Ghanaian narrator of the novel. Harri is curious, kind, athletic and imaginative. He is fascinated by everything in his new English world: the trainers, the slang, the girls, the gangs, the pigeons. Kelman makes Harri's voice the engine of the novel — a mix of Pidgin English ('Asweh'), Ghanaian exclamations ('Adjei!'), and absorbed London slang ('hutless', 'bo-styles'). Harri's investigation of the murder is part play, part moral courage — he genuinely believes the world should be fair. His tragic flaw is his innocence: he cannot conceive that real harm could come to him for asking questions. His murder at the end completes a circle of violence and turns the reader into a witness."
              />
              <CharacterCard
                name="Lydia"
                description="Harri's older teenage sister. Lydia is sharp-tongued, protective, and caught between worlds. She mocks Harri but defends him fiercely when she senses real danger. Lydia is navigating her own pressures — older friends, gendered violence, the temptations of conformity — but she remains the moral compass closest to Harri. She repeatedly tells him to stop investigating; her warnings, ignored, take on tragic weight by the novel's end. Lydia represents the second-generation immigrant child whose protective love stands in for absent adults."
              />
              <CharacterCard
                name="Mamma"
                description="Harri and Lydia's mother. She works exhausting shifts as a midwife at a London hospital, sending money home and praying for the family's reunification. Mamma is devoutly Christian, strict, warm, and worn out. Her absence — caused by the work she has to do to keep the family afloat — is one of the structural ironies of the novel: she is sacrificing her presence to provide for her children, and that absence creates the gap into which the gangs step. Her faith is genuine and sustaining; she sees prayer as protection."
              />
              <CharacterCard
                name="Papa and Baby Agnes"
                description="Still in Ghana, waiting to be brought over once the family in London has earned and saved enough. Their absence is the emotional centre of Harri's interior life. He thinks of them constantly, narrating his English adventures as if he is writing letters home. Papa represents masculine authority and warmth Harri does not have access to in London; Agnes is pure tenderness, the baby sister he longs to meet. Their physical absence is an open wound the novel never closes."
              />
              <CharacterCard
                name="Auntie Sonia"
                description="Harri's aunt, also living in London. Sonia has burnt off her own fingerprints with an iron to evade immigration authorities — a horrifying detail Harri reports with a child's matter-of-factness. She is in an abusive relationship with Julius. Sonia's plotline shows that immigrant women face violence from both the state (deportation) and partners (Julius). She is also tender with Harri, slipping him sweets and treating him with the indulgence of an aunt. Her ruined fingertips are one of the novel's most disturbing symbols."
              />
              <CharacterCard
                name="Julius"
                description="Auntie Sonia's violent partner. Julius beats Sonia and frightens Harri with his unpredictable temper. He is a portrait of adult male brutality inside the family unit, paralleling the gang violence outside it. Kelman uses Julius to show that violence is not just a teenage-boy problem on the estate but a structural pattern that crosses generations and settings. Julius is also a counter-image to Harri's absent Papa — a presence in place of an absence, and a malign one at that."
              />
              <CharacterCard
                name="Dean"
                description="Harri's English best friend at school. Dean watches CSI and supplies the forensic vocabulary for the boys' detective game (fingerprint dust, evidence bags, surveillance). He is loyal, funny, and equally out of his depth. Dean represents Harri's successful integration into multi-ethnic English schoolboy culture — friendships do exist across race and background, and Dean is proof. But Dean's TV-derived expertise is also the novel's joke and its tragedy: pop-culture detective methods are no defence against real knives."
              />
              <CharacterCard
                name="Poppy Morgan"
                description="A white English girl in Harri's class on whom he develops a tender, awkward crush. Poppy is bright, friendly and just out of reach — Harri imagines kissing her, gifting her things, marrying her. She represents adolescent innocence, Harri's hopeful future, and a kind of integration into English life that operates on a register of love rather than violence. Poppy is one of the few unambiguously hopeful presences in Harri's London."
              />
              <CharacterCard
                name="The Dell Farm Crew &mdash; X-Fire, Killa, Clipz"
                description="The local gang on the estate. X-Fire is the leader — older, charismatic, dangerous. Killa and Clipz are his lieutenants. Their street names announce their persona: cinematic, aggressive, performative. The crew patrols territory, deals, intimidates, and recruits younger boys. Kelman gives them moments of casual menace and moments of swagger; he resists making them simple villains while never glamorising them. They embody the social trap the novel anatomises: young black and mixed-race boys for whom the gang is the only available structure of belonging, status, and protection."
              />
              <CharacterCard
                name="The Pigeon (Omniscient Narrator)"
                description="The novel's second narrator — a London pigeon whose italicised passages punctuate Harri's narrative. The pigeon watches Harri from balconies, rooftops, the sky. Its voice is poetic, sometimes sorrowful, sometimes wry. It functions as guardian, witness, prophet, and spirit-presence. Critics have read the pigeon variously as an angel, as the voice of nature surviving in the city, as the watching dead. By the novel's close, when Harri can no longer narrate, the pigeon's voice takes over completely — making the bird the novel's most haunting structural choice."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Childhood vs Violence`)}
                description="The central tension of the novel. Harri narrates with a child's freshness — finding joy in a sweet, a race, a girl, a pigeon — while moving through a landscape of stabbings, gangs, and domestic abuse. Kelman writes the collision of these registers without sentimentality. Harri's very innocence is what makes the violence so unbearable, and what makes it possible: he cannot believe people will really hurt him for asking honest questions. The novel argues that childhood and street violence cannot coexist; one will eventually destroy the other, and it is almost always the child who loses."
              />
              <ThemeCard
                title={tr(`Migration &amp; Belonging`)}
                description="Harri is in the middle of becoming English. He absorbs slang, copies fashion, befriends Dean and crushes on Poppy — but he also says 'Asweh' and 'Adjei', misses Ghana, and remains visibly different. The family is split across continents, with Papa and Agnes still in Accra. Auntie Sonia's burnt fingerprints dramatise the immigration system's cruelty. Kelman shows belonging as a long, difficult, often violent process — and asks what it means that English society's first major gift to Harri is murder."
              />
              <ThemeCard
                title={tr(`Faith &amp; Hope`)}
                description="Mamma's Christianity is sincere, daily, and load-bearing. Prayer structures the Opoku household in London. Harri tries to keep faith — speaking to God, hoping for miracles, believing the world is fair. The pigeon, with its aerial, almost angelic perspective, gives the novel a religious texture even where its world is faithless. Kelman is too honest to let faith save anyone, but he refuses to mock it; faith is presented as a real force of survival, even when it cannot prevent tragedy."
              />
              <ThemeCard
                title="Family"
                description="Family in the novel is plural and stretched: Mamma in London, Papa in Ghana, Lydia bossing and shielding, Auntie Sonia loving and battered, the absent baby Agnes. Kelman shows family as the strongest defence Harri has against the estate's violence — and shows how the demands of immigration tear at that defence. Mamma's working hours, Papa's absence, Sonia's exposure to Julius — each rip in the family fabric corresponds to a danger that creeps closer to Harri. The novel asks whether the immigrant family can ever be reassembled, and whether London allows time."
              />
              <ThemeCard
                title={tr(`Friendship &amp; Group Dynamics`)}
                description="Friendship has two faces in the novel. With Dean, friendship is play, loyalty, shared imagination — the detective game, the running, the in-jokes. With the Dell Farm Crew, group dynamics turn predatory: belonging means initiation, hierarchy, violence, and silence. Kelman shows the same human need — to be part of something — producing wildly different outcomes depending on what is available. For boys without strong adult presence, the gang's offer of belonging is dangerously seductive."
              />
              <ThemeCard
                title={tr(`Storytelling &amp; Voice`)}
                description="Harri's voice is the novel's main achievement and its central theme. He mixes Pidgin English ('Asweh' — meaning 'I swear'), Ghanaian exclamations, BBC English from school, and London street slang into a single, shifting register. Through this voice, Kelman explores how language carries identity, how a child arrives at an idiom for a world that is too big and too violent for him. The pigeon's poetic interludes form a counter-voice — and when Harri's voice ends, the pigeon's is what is left. Storytelling, in the novel, is what makes a child a person; the loss of that voice at the end is the loss of Harri himself."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Verbatim quotations from <em>{tr(`Pigeon English`)}</em> (Stephen Kelman, Bloomsbury
              2011), grouped by theme and character. Items flagged <strong>[VERIFY]</strong> are
              paraphrases or commonly-cited lines whose exact wording you should confirm against
              your edition before using in an exam.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Asweh"
                speaker="Harri (used throughout)"
                analysis="Harri's signature verbal tic, derived from Ghanaian Pidgin English meaning roughly 'I swear (to God)'. He sprinkles it through his narration as emphasis. The word marks his Ghanaian roots and his religious culture surviving inside London speech, and is one of the most distinctive features of Kelman's narrative voice. Every time Harri says 'Asweh' he is, however casually, calling on God to witness — which makes the novel's ending especially unbearable."
              />
              <QuoteCard
                quote="Adjei!"
                speaker="Harri"
                analysis="A Ghanaian exclamation of pain, surprise or dismay used by Harri throughout the novel. Like 'Asweh', it is a marker of his Pidgin-English voice. Kelman keeps these phrases untranslated — the reader must absorb them by context, replicating Harri's own immersion in unfamiliar English speech. The bilingual texture insists on Harri's specific cultural identity rather than letting him be generic."
              />
              <QuoteCard
                quote="Hutless!"
                speaker="Harri"
                analysis="A piece of London slang meaning 'fearless' or 'reckless' that Harri picks up from older boys and uses with delight. The word demonstrates Harri's hunger to belong: he absorbs the estate's vocabulary even when he doesn't fully grasp its connotations. The very thing that thrills him — being 'hutless' — is what gets boys killed in the world he is investigating. The slang is innocent on his lips but lethal in its proper context."
              />
              <QuoteCard
                quote="Bo-styles"
                speaker="Harri"
                analysis="Another item of estate slang meaning roughly 'best style' or 'cool'. Harri uses it to praise trainers, hair, moves. Like 'hutless', it shows Harri performing membership in London street culture. The slang is glamour — the surface he can copy. The deeper structure of the gang world (loyalty, violence, silence) is what he cannot copy and ultimately cannot survive."
              />
              <QuoteCard
                quote="[VERIFY] The dead boy's blood is just sitting there in the street."
                speaker="Harri (paraphrased opening image)"
                analysis="Confirm the exact wording in your edition. The novel famously opens on the static image of the murdered boy's blood, which Harri studies with appalled curiosity. The flat, present-tense observation, free of adult euphemism, sets the novel's whole project: a child's eye on adult violence. The blood does not move; the world does not move; the only thing that moves is Harri's quiet decision to investigate. Treat this as paraphrase unless verified."
              />
              <QuoteCard
                quote="[VERIFY] You have to swear, on your life."
                speaker="Harri / Dean (detective-game oath)"
                analysis="A line of the kind the boys exchange when sealing their detective pact. Verify the wording in your edition before quoting verbatim. Whatever the exact phrasing, the structural point is: the children swear on their lives in play, and one of them will lose his life in earnest. The childish ritual prefigures the adult violence. Use this as a thematic reference even if you cannot lock the exact words."
              />
              <QuoteCard
                quote="[VERIFY] Auntie Sonia burned her fingerprints off with the iron."
                speaker="Harri (describing Sonia)"
                analysis="One of the novel's most-discussed images. Confirm Kelman's exact phrasing. The detail — reported by Harri without judgement — is appalling: a woman burns her own fingertips smooth so that the immigration authorities cannot identify her. It compresses a whole politics of borders, fear, and self-erasure into a single domestic object. Sonia is willing to mutilate her own body to remain in Britain; Britain's reward is that she is then beaten by Julius."
              />
              <QuoteCard
                quote="[VERIFY] Lydia said leave it alone."
                speaker="Harri (paraphrasing Lydia)"
                analysis="Lydia repeatedly warns Harri off the investigation. Verify exact wording in your edition. The structural function of her warnings is dramatic irony: the reader (and Lydia) sense the danger Harri does not, and her unheeded protective voice deepens the tragedy of the ending. Quote a verified Lydia warning if you can find one in your text; otherwise paraphrase."
              />
              <QuoteCard
                quote="[VERIFY] Pigeon's eye view: poetic interlude on London"
                speaker="The pigeon (italicised)"
                analysis="The pigeon's italicised sections offer a poetic, aerial perspective on the estate, on Harri, on the city. They are short, lyrical, often rhythmic — more prose-poem than prose. Pull a verified passage from your edition for direct quotation. Analytically, the pigeon's voice serves several functions: (i) it gives the reader information Harri cannot access; (ii) it lifts the novel into a register of myth and prayer; (iii) it provides the closing voice of the book when Harri is silenced."
              />
              <QuoteCard
                quote="[VERIFY] Harri describes a Dell Farm Crew member with awe and fear."
                speaker="Harri"
                analysis="Find a verified description in your edition. Harri's adjective choices reveal that the gang is glamorised in his eyes — they have power, money, the right trainers, the right walk. Kelman lets this glamour be felt, which is what makes his critique of gang culture far more unsettling than a simple denunciation."
              />
              <QuoteCard
                quote="[VERIFY] Mamma prayed for the family."
                speaker="Harri (describing Mamma)"
                analysis="Confirm the exact phrasing in your edition. Prayer functions as both genuine comfort and tragic insufficiency — the novel respects the prayer while showing its failure to prevent the final violence. Kelman avoids easy mockery and easy salvation alike."
              />
              <QuoteCard
                quote="[VERIFY] Harri imagines Poppy Morgan."
                speaker="Harri"
                analysis="Harri's crush on Poppy is the novel's most unguarded moment of hope. Verify a passage of his daydreaming about her. The Poppy episodes preserve pure adolescent tenderness inside an otherwise frightening narrative — proof that Harri is still a child capable of pure feeling."
              />
              <QuoteCard
                quote="[VERIFY] Closing pigeon passage as Harri lies bleeding."
                speaker="The pigeon"
                analysis="The novel's final passages shift to the pigeon's voice as Harri is dying. Confirm the exact wording in your edition; this is the most quoted passage in critical work on the novel. Analytically: the bird becomes Harri's elegist. Where Harri's voice has anchored the whole book, the pigeon now lifts it skyward. The shift is a formal mourning. Once you have verified the wording, use it as the spine of any answer on Kelman's structural / tonal choices."
              />
              <QuoteCard
                quote="[VERIFY] Harri thinks about Papa and Agnes back in Ghana."
                speaker="Harri"
                analysis="Throughout the novel Harri returns to Papa and Agnes in his mind. Verify a specific line in your edition. Analytically these passages keep alive the alternative London where the family is whole. That Harri is killed before the family can be reunited is, structurally, one of the cruellest decisions in the novel."
              />
              <QuoteCard
                quote="[VERIFY] It's only pretend."
                speaker="Harri / Dean"
                analysis="The boys repeatedly remind themselves their detective work is a game. Verify the exact phrasing. The reassurance becomes evidence that the game is, in fact, dangerous — a child's protective magic that the novel's ending dismantles."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🪶">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">1. The Pigeon</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s richest symbol and its co-narrator. The pigeon is variously read
                  as guardian angel, Holy-Spirit figure, soul of the city, the dead boy watching,
                  and unsentimental nature. Kelman elevates a despised urban scavenger into the
                  novel&apos;s moral and lyrical conscience. When Harri dies, the pigeon&apos;s
                  voice carries the novel out of the human world and into something close to prayer.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">2. Trainers as Status</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Trainers are the novel&apos;s most explicit symbol of consumer pressure on
                  children. Harri thinks constantly about his trainers and ranks other boys by
                  theirs. On the estate, brand-new trainers are status, belonging and target. The
                  trainers compress the whole logic of the gang economy into a single object:
                  visible wealth, visible vulnerability.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">3. The River</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  London&apos;s river runs alongside the novel&apos;s geography. For Harri, it is a
                  place of escape and awe &mdash; bigger than the estate, older than the gangs,
                  indifferent to them. The river symbolises a London beyond immediate violence:
                  history, scale, the natural world surviving in the city.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">4. Broken Concrete</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The estate&apos;s broken pavements, cracked walls and graffiti form a motif of
                  urban decay. Broken concrete is the literal ground of the novel &mdash; the
                  surface on which the murdered boy&apos;s blood pools, on which Harri runs, on
                  which children are stabbed. It symbolises social neglect: the estate as a place
                  society has stopped maintaining, where cracks have been allowed to spread until
                  violence falls into them.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  5. &lsquo;Asweh&rsquo; (Language as Identity)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Beyond its literal sense (&lsquo;I swear&rsquo;), &lsquo;Asweh&rsquo; is a symbol
                  &mdash; the audible trace of Ghana inside London speech, the marker of cultural
                  identity refusing to be smoothed away. Each appearance is a small act of religious
                  witness: a child invoking God dozens of times, in a novel about whether anyone is
                  watching.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">6. Fingerprint Dust</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Harri and Dean&apos;s improvised detective kit symbolises children playing at
                  adult authority. The motif rhymes painfully with Auntie Sonia&apos;s burnt-off
                  fingerprints: in one direction, fingerprints are a child&apos;s game of catching
                  the bad guy; in the other, fingerprints are what an adult woman destroys to escape
                  the state. Same image, two ages, two meanings &mdash; typical Kelman compression.
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
                <h4 className="font-bold text-primary">{tr(`The Damilola Taylor Case (2000)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Kelman has stated in interviews that the novel was inspired by the 2000 murder of
                  Damilola Taylor, a ten-year-old Nigerian boy who bled to death on a stairwell in
                  Peckham, south London, after being stabbed in the leg with a broken bottle. The
                  case shocked Britain. Kelman&apos;s Harri is not Damilola, but the moral pressure
                  of that real-life loss is felt on every page. The novel is a refusal to let a real
                  child&apos;s death become a statistic.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Post-2000s UK Knife-Crime Anxiety`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The 2000s and early 2010s saw sustained public anxiety about teenage knife crime
                  in British cities, especially London. Headlines, Government initiatives, and
                  coverage of &lsquo;road&rsquo; / &lsquo;gang&rsquo; cultures formed the backdrop
                  against which <em>{tr(`Pigeon English`)}</em> was written. Kelman intervenes by
                  insisting on the inner life of one specific child rather than letting the category
                  &lsquo;youth gang&rsquo; absorb him.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Booker Shortlist 2011`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`Pigeon English`)}</em> was shortlisted for the 2011 Man Booker Prize, the
                  most prestigious literary award in the UK and Commonwealth. The shortlisting
                  brought enormous attention to a debut novel and to its bold formal choices &mdash;
                  particularly the child narrator&apos;s mixed Pidgin-English voice and the pigeon
                  interludes. The recognition placed Kelman in a tradition of literary fiction using
                  vernacular voice for serious moral purpose (compare Roddy Doyle&apos;s
                  <em> Paddy Clarke Ha Ha Ha</em> or Mark Haddon&apos;s{' '}
                  <em>{tr(`Curious Incident`)}</em>).
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Stephen Kelman: Background`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stephen Kelman was born in Luton in 1976 and grew up on a council estate in
                  Bedfordshire. He worked in non-literary jobs before the novel&apos;s success.
                  Kelman is a white English writer narrating from the perspective of an
                  eleven-year-old Ghanaian boy &mdash; a choice that drew significant critical
                  discussion. Examiners expect awareness of this ethical dimension in higher-grade
                  answers.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  West African / Ghanaian Diaspora in London
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  London has a large and long-established Ghanaian community with historic
                  Commonwealth roots, intensifying from the 1980s onward. Many Ghanaian families
                  experience the structural pattern Kelman dramatises: members in the UK working to
                  remit and to bring the rest over. Pentecostal Christianity provides vital social
                  structure. Mamma&apos;s church-going and Harri&apos;s bilingual voice are all
                  rooted in this real diaspora experience.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The London Council Estate`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  &lsquo;Dell Farm&rsquo; is invented but recognisable: a high-rise post-war council
                  estate of the type built in the 1960s and 70s. Kelman writes the estate as it is
                  &mdash; concrete walkways, broken lifts, balconies &mdash; without exoticising or
                  demonising it. Examiners reward candidates who place the estate inside a longer
                  history of British social housing.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── STRUCTURE & VOICE */}
        <div id="structure-and-voice">
          <Section title={tr(`Structure and Voice`)} icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`First-Person Child Narrator`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is narrated almost entirely by Harri in the first person, present tense.
                  The choice has two consequences. First, the reader is locked into Harri&apos;s
                  vision &mdash; we cannot see what he cannot see, and we share his blind spots
                  about danger. Second, the present tense gives the novel an immediacy and innocence
                  that throws every dark event into sharper relief. Harri does not have hindsight;
                  he is making sense of events as they happen.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  Pidgin English / British Slang Hybrid Voice
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Harri&apos;s register mixes Ghanaian Pidgin words (&lsquo;Asweh&rsquo;,
                  &lsquo;Adjei&rsquo;), Christian phrasing, school Standard English, and absorbed
                  London street slang (&lsquo;hutless&rsquo;, &lsquo;bo-styles&rsquo;). Kelman
                  rarely glosses words; the reader learns them from context, replicating
                  Harri&apos;s own immersion. The voice is the novel&apos;s most original technical
                  achievement and its most powerful political statement.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  The Pigeon&apos;s Italicised Interludes
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Italicised passages narrated from a pigeon&apos;s perspective punctuate the novel.
                  These short, lyrical units offer an aerial view, a poetic register, and a second
                  consciousness watching Harri. They are the only voice besides Harri&apos;s &mdash;
                  which makes the ending&apos;s shift to pigeon-only narration so devastating.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Circular Structure`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel opens with the murder of an unnamed boy and closes with the murder of
                  Harri. The structural circle is unmistakable: Harri begins as a witness outside
                  violence and ends as a victim inside it. The shape of the book makes its argument
                  &mdash; that on this estate, this is the cycle, and a child who asks the wrong
                  questions can be moved from one position in the cycle to the other. Kelman refuses
                  any escape from the structural pattern.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Episodic Pacing`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel proceeds episodically: school days, detective adventures, family scenes,
                  gang encounters, pigeon interludes. This mosaic structure mimics how a child
                  experiences time &mdash; not as plot but as vivid present moments. The reader,
                  reading backwards after the ending, must do the connecting work.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Final Tonal Shift`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the closing pages the narrative tilts decisively into the pigeon&apos;s poetic
                  register as Harri is killed. The voice that has carried the entire book &mdash;
                  bright, inquisitive, proud of its slang &mdash; is silenced, and a mournful,
                  hymn-like voice closes the book. This is one of the most examinable technical
                  features: it answers questions on structure, voice and Kelman&apos;s purpose at
                  once.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              AQA-style essay plans for the most likely questions on <em>{tr(`Pigeon English`)}</em>
              . Each plan provides a thesis, paragraph structure, and suggested evidence (verify all
              quotations against your edition before committing them to memory).
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Kelman present the relationship between childhood and violence in{' '}
                  <em>{tr(`Pigeon English`)}</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Kelman uses Harri&apos;s innocent voice to dramatise the collision between
                      childhood and adult street violence, suggesting that on the estate the two
                      cannot coexist &mdash; and that the cost of that incompatibility is paid
                      almost entirely by children.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The opening image
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel opens on the dead boy&apos;s blood, narrated in Harri&apos;s flat
                      present tense. Analyse how the child&apos;s perspective makes the violence
                      stranger and crueler than an adult narrator could. Use &lsquo;Asweh&rsquo; as
                      evidence of voice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Play turning into evidence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri and Dean&apos;s detective game, with its CSI fingerprint dust, is
                      structured as childhood play. As the investigation produces real names, the
                      play becomes lethal. Discuss how Kelman stages this slippage from game to
                      danger.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Innocence preserved alongside danger
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri&apos;s crush on Poppy, his races, his pigeon-feeding all preserve
                      childhood inside the novel. The continued presence of innocence is what makes
                      the violence intolerable when it arrives. Kelman refuses to let the estate
                      cancel out childhood &mdash; until, at the end, it does.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The closing murder
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri&apos;s death mirrors the dead boy of the opening. Discuss the circular
                      structure: childhood does not survive contact with the gang economy, and
                      Kelman makes the reader feel that loss as an indictment.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Link to the Damilola Taylor case as biographical context. Argue that
                      Kelman&apos;s purpose is to refuse the abstraction of &lsquo;youth
                      violence&rsquo; statistics by making one specific child unforgettable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Kelman present migration and belonging in the novel?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Migration in <em>{tr(`Pigeon English`)}</em> is shown as a long, uneven, often
                      violent process; the novel anatomises the costs of belonging in a city that
                      does not yet welcome the family reuniting inside it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Family split across continents
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Papa and Agnes still in Ghana; Mamma working long hospital shifts to bring
                      them over. Migration is structurally unfinished &mdash; the family is
                      mid-journey for the entire novel.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Auntie Sonia&apos;s burnt fingerprints
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The single most shocking image of immigration politics in the novel. Discuss
                      how the detail compresses borders, fear and self-erasure into one domestic
                      object.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Harri&apos;s hybrid voice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;Asweh&rsquo;, &lsquo;Adjei&rsquo;, &lsquo;hutless&rsquo;,
                      &lsquo;bo-styles&rsquo; &mdash; Harri&apos;s voice is the linguistic record of
                      a migration in progress. Belonging happens, partly, through speech.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The cost of arrival
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri is murdered before the family can be reunited. London&apos;s welcome is
                      fatal. Connect to the Damilola Taylor case and the wider history of West
                      African migration to Britain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Kelman use the pigeon&apos;s voice in <em>{tr(`Pigeon English`)}</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pigeon&apos;s italicised interludes give the novel a second, omniscient
                      and quasi-religious consciousness whose poetic register both witnesses
                      Harri&apos;s world and ultimately mourns it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Form and italics
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Discuss the formal choice to set the pigeon passages apart in italics. Their
                      brevity, lyricism and aerial perspective contrast with Harri&apos;s
                      present-tense first-person narration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Multiple symbolic readings
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pigeon as guardian angel, as Holy Spirit, as soul of the city, as the dead
                      boy watching over Harri. Kelman keeps these readings open; argue that the
                      polyvalence is itself the point.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Aerial witness
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The pigeon sees what Harri cannot. Discuss how the bird&apos;s perspective
                      gives the reader information about danger without breaking Harri&apos;s
                      innocence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The closing pigeon passage
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel ends in pigeon-only narration. Argue that this tonal shift is the
                      novel&apos;s most devastating formal decision &mdash; a hymn replacing a
                      child&apos;s voice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Kelman explore family in <em>{tr(`Pigeon English`)}</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Family is plural, fragmented and load-bearing &mdash; the strongest defence
                      Harri has against the estate&apos;s violence, and the institution most
                      strained by immigration.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Mamma as worn-out protector
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mamma&apos;s long hospital shifts and prayer life. The structural irony: she
                      is sacrificing her presence to provide, and her absence is what the gang
                      fills.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Lydia as substitute parent
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lydia&apos;s warnings to Harri, her parallel pressures, her sibling tenderness
                      beneath the bickering. The protective older sister stands in for the absent
                      parents.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Auntie Sonia and Julius
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The abusive relationship inside the family unit. Julius&apos;s violence
                      parallels the gang&apos;s, showing danger is structural not local.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Papa and Agnes as imagined family
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The family Harri carries inside himself across continents. The unreached
                      reunion is the novel&apos;s emotional centre and its tragic shape.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. How does Kelman use Harri&apos;s narrative voice to shape the reader&apos;s
                  response?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Harri&apos;s mixed Pidgin-English / British-slang voice is the novel&apos;s
                      engine: it generates sympathy, cultural specificity, and the unbearable
                      contrast between innocent perspective and brutal events.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Pidgin-English markers
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;Asweh&rsquo;, &lsquo;Adjei&rsquo;. The untranslated Ghanaian terms
                      refuse to assimilate Harri to a generic English child-narrator.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Absorbed London slang
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;Hutless&rsquo;, &lsquo;bo-styles&rsquo;. Harri&apos;s slang is evidence
                      of his hunger to belong &mdash; the same hunger that makes the gang&apos;s
                      offer of belonging so dangerous.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; First-person present tense
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel never offers retrospective wisdom. The reader experiences events at
                      Harri&apos;s pace, with his blind spots, generating intense dramatic irony.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The voice silenced
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel&apos;s ending takes Harri&apos;s voice away. The pigeon&apos;s elegy
                      replaces it. The loss of voice is itself the novel&apos;s argument.
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
        <Section title={tr(`Grade 9 Exemplar Points and Interpretations`)} icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            Higher-level interpretations that move beyond surface reading. Use these to demonstrate
            sophisticated engagement with Kelman&apos;s purpose, form, and ethical stakes.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. The Pigeon as Theological Witness
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A Grade 9 reading argues that the pigeon&apos;s aerial, italicised voice gives the
                novel a quasi-religious frame: a witness above the city, a Holy-Spirit echo in a
                faith-saturated household, the speaker of the closing elegy. Harri says
                &lsquo;Asweh&rsquo; (&lsquo;I swear&rsquo;) hundreds of times; the pigeon is the
                witness those oaths invoke. That the pigeon cannot speak to police is the
                novel&apos;s bleak theology &mdash; the watcher exists, but cannot intervene.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. Trainers and Fingerprints as Mirror Symbols
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A Grade 9 reading sees the trainers and fingerprint motifs as a pair: both involve
                marks on the body that indicate identity, status and vulnerability. Harri prizes his
                trainers; gangs target boys for them. Auntie Sonia destroys her fingerprints to
                escape the state. Harri and Dean dust for fingerprints as a child&apos;s game. Same
                body-mark image, two ages, two opposite uses.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. The Novel&apos;s Refusal of Detective Catharsis
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <em>{tr(`Pigeon English`)}</em> sets up the conventions of a child-detective story
                and refuses every genre payoff. The killer is not caught. The investigator does not
                triumph. Instead, the investigator is killed. This generic subversion is itself the
                novel&apos;s argument: case-closed comforts are a luxury this material cannot
                afford. Kelman makes the reader feel the absence of catharsis as an ethical loss.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. Mamma&apos;s Absence as Structural Violence
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Mamma is not a neglectful parent. She works long NHS shifts because the family is
                paying to bring Papa and Agnes to London. Her absence is the consequence of
                immigration policy and economic necessity. The gang fills the gap. The violence
                Harri suffers is therefore, indirectly, a product of borders and wages.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. The Ethics of Kelman&apos;s Voice-Choice
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A Grade 9 answer engages with Kelman&apos;s position as a white English writer
                ventriloquising an eleven-year-old Ghanaian boy. The strongest answers note that
                Kelman researched the voice carefully, that the novel is informed by the Damilola
                Taylor case, and that the choice to inhabit Harri&apos;s perspective is itself an
                ethical claim &mdash; that the interior life of a Ghanaian child on a London estate
                matters enough to be imagined.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                6. Hybrid Voice as Anti-Assimilation
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Harri&apos;s voice does not become more English as the novel progresses; it remains
                stubbornly hybrid, with &lsquo;Asweh&rsquo; intact at the very end. This is a
                deliberate refusal of the assimilationist narrative arc &mdash; the immigrant child
                does not shed his Ghanaian markers in exchange for English ones. London does not
                erase him; it kills him. The novel makes hybridity a fact, not a phase.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. Circular Structure and Statistical Numbness
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novel begins and ends with the murder of a child. A Grade 9 reading connects
                this to public-discourse numbness about youth violence &mdash; the way knife murders
                become additions to a number rather than singular losses. Kelman&apos;s circularity
                stages that numbness only to explode it: Harri&apos;s death has been earned by the
                reader through 250 pages of intimate company, so we cannot count him as a statistic.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. Faith Without Salvation
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Mamma&apos;s prayers do not save Harri. Auntie Sonia&apos;s mutilations do not
                protect her. Harri&apos;s &lsquo;Asweh&rsquo; oaths invoke a witness who watches but
                cannot intervene. The novel keeps faith present without ever letting it resolve
                anything. The pigeon &mdash; the closest thing to a watching spirit &mdash; mourns
                rather than rescues. Faith stripped of consolation, which is in some ways its truest
                form.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* ────────────────────────────────── PRACTICE QUESTIONS */}
      <div id="practice-questions">
        <Section title={tr(`Practice Questions`)} icon="📝">
          <p className="text-sm text-muted-foreground mb-4">
            AQA-style exam questions for <em>{tr(`Pigeon English`)}</em>. Plan your response using
            PEEL paragraphs, embedded quotations, and contextual links to the Damilola Taylor case
            and post-2000s knife-crime anxiety.
          </p>
          <div className="space-y-3">
            {[
              {
                q: 'How does Kelman present the relationship between childhood and violence in Pigeon English? Refer to the whole text in your answer.',
                marks: 30,
              },
              {
                q: "How does Kelman use the pigeon as a narrator? Explore the effects of the pigeon's italicised passages on the reader.",
                marks: 30,
              },
              {
                q: 'How does Kelman explore the experience of migration and belonging through Harri and his family?',
                marks: 30,
              },
              {
                q: "How does Kelman use Harri's narrative voice to shape the reader's response to the events of the novel?",
                marks: 30,
              },
              {
                q: 'How far does Kelman present family as a source of protection in Pigeon English? Refer to Mamma, Lydia, Auntie Sonia and the absent Papa.',
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
        <h3 className="text-lg font-bold text-foreground">{tr(`Exam Tips for Pigeon English`)}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always link to Damilola Taylor.`)}</strong> Kelman has stated the 2000
              Peckham murder of Damilola Taylor inspired the novel. This is the single most
              examinable contextual fact.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Kelman&apos;s methods.`)}</strong> Discuss the hybrid voice (Pidgin
              English, slang, first-person present tense), the pigeon&apos;s italicised interludes,
              the circular structure, and the closing tonal shift.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to Kelman&apos;s intentions.`)}</strong> &lsquo;Kelman perhaps
              suggests...&rsquo; or &lsquo;Kelman uses Harri&apos;s voice to...&rsquo; &mdash; treat
              the novel as a designed object.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Verify quotations.`)}</strong> Always confirm wording against your
              edition before committing quotes to memory. Where this revision page flags{' '}
              <strong>[VERIFY]</strong>, treat the line as paraphrase until you have checked it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> &lsquo;Hybrid narrative
              voice&rsquo;, &lsquo;Pidgin English&rsquo;, &lsquo;first-person present tense&rsquo;,
              &lsquo;circular structure&rsquo;, &lsquo;dramatic irony&rsquo;.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole novel.`)}</strong> Reference the opening murder, the
              middle section (gang pressure, family scenes, the pigeon), and the closing tonal
              shift. Examiners reward candidates who show command of the entire arc.
            </span>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`Pigeon English`)}</em> by Stephen Kelman was first published by Bloomsbury in
          2011 and shortlisted for the Man Booker Prize the same year. The novel is in copyright.
          Quotations on this page are used for educational analysis under fair-dealing provisions
          for criticism and review; items flagged
          <strong> [VERIFY]</strong> should be confirmed against your edition before use in an exam.
        </p>
      </footer>
    </>
  )
}
