'use client'

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

export default function AnitaAndMePage() {
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
          Anita and Me &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Meera Syal, 1996</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A semi-autobiographical novel narrated by nine-year-old Meena Kumar, the only Punjabi girl
          in the fictional ex-mining village of Tollington in the West Midlands. Everything you need
          for AQA GCSE English Literature: plot, characters, themes, key quotations with analysis,
          symbolism, context, and exam-style questions with planning guidance.
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
            'Symbols',
            'Context',
            'Essay Planning',
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
          <Section title="Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Setting and Frame`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in 1972 in Tollington, a fictional ex-mining village in the West
                  Midlands of England. Meena Kumar &mdash; nine years old at the start &mdash; is
                  the only child of Punjabi parents who emigrated to Britain. The narrative is
                  retrospective: an adult Meena looks back on the year that changed her, framing
                  childhood through storytelling and memory. The village is on the brink of change
                  as a new motorway is planned, and the close-knit, predominantly white
                  working-class community begins to fracture.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Opening: Meena&apos;s World
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Meena introduces Tollington and her parents (Mama and Papa), recalling the
                  gatherings of family friends she calls &ldquo;Aunties&rdquo; and
                  &ldquo;Uncles.&rdquo; She is a compulsive liar &mdash; storytelling is how she
                  navigates the gap between her Indian home life and her English village life. She
                  steals a charity collection tin from Mr Ormerod&apos;s shop, an early sign of her
                  moral confusion and her desire to be more like the village children.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Meena Meets Anita
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Anita Rutter, three years older, becomes the queen of the village children and the
                  object of Meena&apos;s fascination. Anita is bold, glamorous, and rebellious
                  &mdash; everything Meena&apos;s parents are not. Meena begins to copy Anita&apos;s
                  slang, her walk, and her contempt for adult authority. The friendship pulls Meena
                  away from her family and toward a tougher, more violent peer culture.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  The Birth of Sunil
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Mama becomes pregnant and gives birth to Meena&apos;s baby brother, Sunil. Meena
                  is jealous of the attention he receives and resents the way her parents&apos;
                  world now centres on him. The pregnancy and birth coincide with Meena drawing
                  closer to Anita and the village gang, accelerating her drift from family.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Nanima Arrives from India
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Meena&apos;s maternal grandmother &mdash; Nanima &mdash; comes from the Punjab to
                  live with the family. She speaks little English but communicates with Meena
                  through stories, food, and physical warmth. Nanima becomes a counterweight to
                  Anita, reconnecting Meena to her Punjabi heritage. For the first time, Meena
                  begins to see her Indian identity as a source of pride rather than embarrassment.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  The F&ecirc;te and Sam Lowbridge
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At the village f&ecirc;te, Sam Lowbridge &mdash; the local skinhead and
                  Anita&apos;s boyfriend &mdash; makes a racist outburst about &ldquo;them
                  blackies&rdquo; in front of the assembled community, including Meena&apos;s
                  family. The moment shatters Meena&apos;s sense of belonging in Tollington. The
                  community&apos;s embarrassed silence reveals how thin the village&apos;s tolerance
                  has been all along. Meena realises that the racism she has tried to ignore is
                  closer to home than she wanted to believe.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  The Bicycle Accident
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Meena rides a bicycle she cannot fully control and crashes, breaking her leg. The
                  accident takes her out of the village social scene and into hospital. The forced
                  stillness becomes a turning point: physically immobilised, she has time to think,
                  to read, and to reconsider what she wants from her friendships and her future.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    7
                  </span>
                  Hospital and Robert
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In hospital, Meena befriends Robert, a sick boy who shares her love of stories and
                  treats her as an equal rather than as &ldquo;the Indian girl.&rdquo; His later
                  death is one of the novel&apos;s key losses of innocence. The hospital becomes a
                  space of reflection, separated from both Anita&apos;s world and the family home,
                  where Meena begins to imagine a different life for herself.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    8
                  </span>
                  Climax: Tracey and the Pond
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tracey, Anita&apos;s younger sister, falls into the village pond. Meena helps
                  rescue her. The episode dramatises the difference between Meena&apos;s moral
                  instincts and Anita&apos;s neglectful indifference, exposing the violence and
                  dysfunction of the Rutter household and confirming Meena&apos;s break from Anita.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    9
                  </span>
                  Resolution: The Eleven-Plus and Departure
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Meena passes her eleven-plus exam and wins a place at grammar school. The family
                  prepares to leave Tollington. Nanima returns to India. The novel closes with Meena
                  on the cusp of adolescence, no longer the child she was, having reconciled (at
                  least partly) the two halves of her identity. The final tone is bittersweet:
                  Tollington has both nurtured and wounded her, and she leaves it with both grief
                  and determination.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Characters" icon="👥">
            <CharacterCard
              name="Meena Kumar — Narrator and Protagonist"
              description="Nine years old at the novel's opening. Punjabi-British, the only Indian child in Tollington. Imaginative, rebellious, and a self-confessed compulsive liar. Her voice mixes child-like immediacy with adult retrospection. Over the course of the novel she moves from wanting to be Anita Rutter to recognising the value of her own family and heritage. Syal uses Meena's first-person narration to dramatise the internal negotiation of British-Indian dual identity, and to examine how a child processes (and sometimes mis-processes) racism, class, and family."
            />
            <CharacterCard
              name="Anita Rutter"
              description="Three years older than Meena, the magnetic 'queen' of the village children. Bold, foul-mouthed, contemptuous of authority, neglected at home. She represents the seductive glamour of unsupervised English working-class girlhood. Her racism, when it surfaces, is casual and devastating. She is at once an idol and a warning: Syal shows that the freedoms Meena envies are bound up with cruelty, neglect, and limited horizons."
            />
            <CharacterCard
              name="Mama (Daljit Kumar)"
              description="Meena's mother. A teacher; warm, articulate, and quietly heroic. She holds her family together with cooking, hospitality, and moral seriousness. She experiences racism with dignified restraint and tries to give Meena both Indian heritage and English opportunity. Syal uses Mama to challenge stereotypes of the silent, submissive immigrant woman: she is the ethical centre of the household."
            />
            <CharacterCard
              name="Papa (Shyam Kumar)"
              description="Meena's father. Educated, cultured, and homesick for Punjab. He sings ghazals at family gatherings, embodying a memory of India that Meena half-understands. He is gentler than Mama and more visibly wounded by the racism the family encounters. Through Papa, Syal explores how the first generation of Punjabi immigrants carried partition, displacement, and longing into their new English lives."
            />
            <CharacterCard
              name="Sunil"
              description="Meena's baby brother, born during the novel. His arrival initially provokes jealousy in Meena but eventually softens her, as she learns to share affection and responsibility. Sunil also represents the family's continuing rootedness in Britain — a second-generation child who will know Tollington only through Meena's stories."
            />
            <CharacterCard
              name="Nanima"
              description="Meena's maternal grandmother, who arrives from the Punjab to live with the family. She speaks almost no English but communicates through touch, food, and Punjabi storytelling. She is the most important character in Meena's reconciliation with her heritage. Through Nanima, Syal embodies a living link to India that recasts Meena's Punjabi identity from embarrassment into pride."
            />
            <CharacterCard
              name="Mr Ormerod"
              description="The village shopkeeper and chapel collector for missions to 'darkest Africa.' Outwardly friendly and charitable, he embodies a particular kind of paternalistic, faintly colonial English Christianity. His charity tin — which Meena steals — symbolises the contradictions of a community that 'helps' distant black children while struggling to accept the brown family in its own street."
            />
            <CharacterCard
              name="Sam Lowbridge"
              description="Local teenage skinhead, briefly Anita's boyfriend. Initially an ambiguous figure — a damaged village boy whom Meena pities — he becomes the novel's clearest face of British racism when he makes a public racist outburst at the fête. Syal uses Sam to dramatise how 1970s far-right rhetoric (post-Powell, pre-National Front rallies) seeped into ordinary working-class boys with no obvious ideology of their own."
            />
            <CharacterCard
              name="Tracey Rutter"
              description="Anita's younger sister: timid, neglected, often left in Anita's reluctant care. Her near-drowning in the pond becomes the moment that finally separates Meena from Anita. Tracey reveals the dysfunction of the Rutter household and the cost, for vulnerable children, of the freedoms Meena once envied."
            />
            <CharacterCard
              name="Sally"
              description="Another village girl, part of Anita's circle. Functions as a hanger-on and shows how Anita's gang operates as a hierarchy: someone is always lower in the pecking order. Her presence highlights the casual cruelty within the friendship group and the precariousness of Meena's place inside it."
            />
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Themes" icon="🎭">
            <ThemeCard
              title={tr(`Identity and Belonging — British-Indian Dual Identity`)}
              description="The novel's central concern. Meena lives between two cultures: the Punjabi household of cooked dahl, Hindi films, and family gatherings, and the English village of chip-shop visits, sweets, and pop songs. Syal refuses to present these as a simple either/or. Meena is not 'half' anything — she is fully both, even when the two halves contradict each other. The eleven-plus and the move out of Tollington at the end suggest that integration on white English terms requires loss as well as gain. Syal's deeper argument is that 'Britishness' itself must be expanded to include Meena, not the other way around."
            />
            <ThemeCard
              title="Coming of Age"
              description="Anita and Me is a Bildungsroman. Over roughly two years, Meena moves from credulous childhood (lies, theft, hero-worship of Anita) to a more grounded adolescence (passing the eleven-plus, choosing family over Anita, beginning to ask harder questions). The narrative voice itself dramatises this: an adult Meena looks back on her younger self with both affection and ironic distance. Syal's coming-of-age is not a triumph but a necessary loss — the child Meena cannot survive intact what she sees and hears."
            />
            <ThemeCard
              title={tr(`Race and Racism in 1970s Britain`)}
              description="The novel is set in the immediate aftermath of Enoch Powell's 'Rivers of Blood' speech (1968) and during the rise of the National Front. Racism in Tollington is rarely organised — it leaks out as everyday casual remarks, the shopkeeper's charitable condescension, Sam Lowbridge's fête outburst. Syal shows that the most damaging racism may be the kind that the perpetrators do not consider racism at all. She also resists letting the village off the hook by suggesting that 'good' white characters are passively complicit when they fall silent at the crucial moment."
            />
            <ThemeCard
              title="Class — Working-Class West Midlands"
              description="Tollington is a post-industrial ex-mining village whose pit has closed. Its families are working-class, often financially strained, sometimes violent. Syal does not romanticise this community: the Rutters' household is dysfunctional, drink-soaked, and emotionally cold. But she also refuses the easy sneer. Mama and Papa, as middle-class educated immigrants, occupy an awkward position: ethnically marked as outsiders yet socially 'above' their neighbours. Class and race intersect in painful, specific ways throughout the novel."
            />
            <ThemeCard
              title={tr(`Family and Cultural Heritage`)}
              description="The Kumar household, with its rotating cast of 'Aunties' and 'Uncles,' is the moral and emotional centre of the novel. Family meals, Punjabi songs, religious observance, and Nanima's stories transmit a heritage that Meena initially resists and eventually treasures. Syal uses the family to argue that cultural identity is not abstract — it is carried in food, language, music, and the small daily rituals of a household. When Nanima returns to India, the loss for Meena is not just personal but cultural."
            />
            <ThemeCard
              title={tr(`Friendship and Loss of Innocence`)}
              description="Anita is Meena's first proper friend outside the family, and the friendship's trajectory mirrors Meena's loss of innocence. Initially, Anita represents freedom and grown-up glamour. Gradually, Meena sees her cruelty, her racism, and the bleakness of her home life. The bicycle accident, the pond rescue of Tracey, and Sam's outburst are all stages in Meena's growing realisation that her friend is not who she imagined. The novel mourns the friendship even as it argues that Meena is right to leave it behind."
            />
            <ThemeCard
              title={tr(`Storytelling and Memory`)}
              description="Meena calls herself a liar, but Syal reframes her lies as a child's first attempt at authorship. Her instinct to embellish, to perform, and to invent versions of herself is the same instinct that produces the novel we are reading. The retrospective narration (adult Meena recalling 1972) makes memory itself a theme: what survives, what is reshaped, what is lost. Nanima's oral tales from the Punjab and Papa's ghazals show that storytelling is also how culture moves across generations and continents."
            />
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations`)} icon="💬">
            <p className="text-sm text-muted-foreground mb-4 italic">
              The quotations below are widely cited from <em>{tr(`Anita and Me`)}</em>. Because the
              novel is less canonically &ldquo;quote-mined&rdquo; than older texts, you should
              always cross-check exact wording against your own copy of the novel before relying on
              a quotation in the exam. Where a phrase is paraphrased rather than verbatim, treat it
              as a reference and put the idea in your own words.
            </p>

            <h4 className="font-bold text-foreground mt-4 mb-2">{tr(`On Identity and Lying`)}</h4>
            <QuoteCard
              quote="I'm really not a liar, I just learned very early on that those of us deprived of history sometimes need to turn to mythology to feel complete, to belong."
              speaker="Meena (narrator, opening)"
              analysis="The novel's opening salvo. Meena reframes her childhood lies as a survival strategy — the daughter of immigrants without an inherited British history must invent stories to feel she belongs. Syal collapses the line between 'lying' and 'mythology,' suggesting that all communities tell themselves stories. The phrase 'deprived of history' is politically loaded: it implicates the British host culture for not making space for Punjabi history within the national story. [VERIFY against own copy: paraphrase if uncertain.]"
            />
            <QuoteCard
              quote="The fact that I am not really a liar I will leave to your discretion."
              speaker="Meena (narrator, opening pages)"
              analysis="The narrator immediately destabilises her own authority, inviting the reader to read her cautiously. This is a self-aware coming-of-age narrator who knows that childhood memory is unreliable. The ironic adult voice frames the entire novel: Meena's lies are also Syal's storytelling craft. [VERIFY.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">{tr(`On Tollington`)}</h4>
            <QuoteCard
              quote="I cannot pretend I did not enjoy being the only dark-skinned child in Tollington, although I did not always enjoy the attention it brought me."
              speaker="Meena (narrator)"
              analysis="The doubled feeling — pleasure in distinctiveness, pain in scrutiny — is at the heart of the novel's identity politics. Syal refuses easy victimhood: Meena enjoys her uniqueness even as it isolates her. The careful adult phrasing (the qualifying clause) shows the older narrator weighing the contradictions of childhood feeling honestly. [VERIFY.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">On Anita</h4>
            <QuoteCard
              quote="Anita Rutter was the cock of our yard."
              speaker="Meena (narrator, on first meeting Anita)"
              analysis="The Black Country slang ('cock' = leader, dominant one) places the narrator inside the local working-class lexicon. Meena absorbs Anita's language even as she observes her power. The image positions Anita as masculine, predatory, in charge — and Meena, by extension, as dazzled subordinate. Syal shows the friendship as a hierarchy from the outset. [VERIFY.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">{tr(`On Race and Belonging`)}</h4>
            <QuoteCard
              quote="If you can't respect what we believe in, then you don't respect us, and if you don't respect us, you can't love us."
              speaker="Mama, to Meena"
              analysis="Mama articulates the moral logic of cultural identity: respect for heritage is not optional or decorative but a precondition of love. Syal uses Mama as the family's ethical voice. The cumulative if-then structure has the rhythm of an argument she has already had with herself, and which Meena will eventually understand. [VERIFY.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">{tr(`On Sam Lowbridge`)}</h4>
            <QuoteCard
              quote="We don't want them no more, none of them, sponging off us..."
              speaker="Sam Lowbridge, at the f&ecirc;te"
              analysis="Sam's outburst echoes the language of post-Powell anti-immigrant politics: the rhetoric of 'them,' the accusation of 'sponging,' the implied national 'us.' Syal places this language in the mouth of a damaged village boy to show how far-right rhetoric travels through ordinary people who cannot articulate where their resentment comes from. The community's embarrassed silence after Sam speaks is, for Meena, almost as devastating as the words themselves. [VERIFY exact wording — Sam's outburst is widely paraphrased; if unsure, summarise.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">
              On Mr Ormerod and the Charity Tin
            </h4>
            <QuoteCard
              quote="darkest Africa"
              speaker="Phrasing associated with the chapel collection in Mr Ormerod's shop"
              analysis="The phrase ('darkest Africa') is colonial-era missionary language preserved into 1972. Syal weaponises the cliché: a community that congratulates itself on 'saving' distant black children proves unwilling to welcome the brown family living down the street. The charity tin sits on the counter as a visible monument to the village's moral self-image — an image the novel takes apart. [VERIFY exact phrasing in your edition.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">
              {tr(`On Family and Hospitality`)}
            </h4>
            <QuoteCard
              quote="Aunties and Uncles"
              speaker="Meena (narrator, throughout)"
              analysis="Meena's habitual term for the wide network of Punjabi family friends who circulate through the Kumar household. The capitalisation in the narrator's voice signals their semi-mythic status to the child Meena. Syal uses this language to evoke the texture of immigrant community life: 'Auntie' and 'Uncle' name fictive kin, a chosen extended family that compensates for the relatives left behind in India."
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">
              {tr(`On Nanima and Punjabi Heritage`)}
            </h4>
            <QuoteCard
              quote="Nanima"
              speaker="Meena's name for her grandmother (Punjabi: maternal grandmother)"
              analysis="The word itself is a small but loaded act of cultural transmission. Meena does not call her 'Granny' — she uses the Punjabi term, importing the language of her heritage into her English-language narration. Throughout the novel, Punjabi words (Nanima, dhal, ghazal, names of foods and rituals) sit untranslated inside English sentences, dramatising the bilingual mind of the second-generation child."
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">On Storytelling</h4>
            <QuoteCard
              quote="mythology... to feel complete, to belong"
              speaker="Meena (narrator)"
              analysis="A keyword from the opening passage. Syal links storytelling to the deepest psychic needs of the immigrant child: completeness, belonging. The argument runs through the novel — Papa's ghazals, Nanima's tales, Meena's own lies all function as 'mythology' in this expanded sense. The novel itself, as adult Meena's act of narration, is the most complete of these myths. [VERIFY.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">{tr(`On Dual Identity`)}</h4>
            <QuoteCard
              quote="too mouthy, clumsy and scabby to be a real Indian girl, too Indian to be a real Tollington wench"
              speaker="Meena (narrator)"
              analysis="The double exclusion — too much for one community, too Indian for the other — is Syal's most concise statement of the dual-identity predicament. The vocabulary itself is split: 'real Indian girl' uses standard English; 'Tollington wench' uses Black Country dialect. The sentence performs the bilingual splitting it describes. The harsh self-description ('mouthy,' 'scabby') captures childhood self-loathing without indulging it: the adult narrator sees the cruelty of the binary that produced these feelings. [VERIFY exact wording.]"
            />

            <h4 className="font-bold text-foreground mt-6 mb-2">{tr(`On Tollington as Place`)}</h4>
            <QuoteCard
              quote="Tollington"
              speaker="The village itself, treated as a refrain"
              analysis="The fictional village's name recurs throughout the novel as an almost ritual incantation. Tollington stands for a particular kind of late-industrial English place: ex-mining, fading, white, working-class, soon to be reshaped by the motorway. Syal uses the name as a kind of refrain, the way a memoirist returns to the name of a lost home. By the end, when Meena leaves, the word carries grief as well as criticism."
            />

            <div className="mt-6 rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
              <h4 className="font-bold text-amber-700 dark:text-amber-300">
                Quotation safety note
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <em>{tr(`Anita and Me`)}</em> is a contemporary novel still in copyright. Its
                quotations are not as standardised across study guides as the lines from Shakespeare
                or Dickens. For the exam, you do not need long verbatim quotations &mdash; short,
                embedded phrases are usually more effective. If you cannot remember the exact
                wording, use a clear paraphrase: &ldquo;Meena describes herself as too Indian for
                Tollington and not Indian enough to be a 'real' Indian girl.&rdquo; Examiners credit
                accurate reference even without verbatim quotation. Items marked [VERIFY] above
                should be cross-checked against your own copy of the novel before exam use.
              </p>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🔣">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  1. The Two Languages &mdash; English and Punjabi
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Punjabi words (Nanima, dhal, the names of foods and rituals) sit untranslated
                  inside English sentences throughout Meena&apos;s narration. The mixed register is
                  itself a symbol of Meena&apos;s dual identity. When she absorbs Anita&apos;s Black
                  Country slang (&ldquo;wench,&rdquo; &ldquo;cock of the yard&rdquo;), the
                  linguistic mixture thickens further. Syal uses code-switching not as a marker of
                  confusion but as a texture of bilingual life. The reader is asked to live,
                  briefly, inside the multilingual mind of a second-generation child.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">2. The Village Pond</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Tollington&apos;s pond is the locus of the novel&apos;s climax: the rescue of
                  Tracey. Stagnant, dangerous, and central to village geography, the pond is a
                  symbol of Tollington itself &mdash; superficially familiar, in fact perilous,
                  particularly for the children left unsupervised inside it. The rescue is also the
                  moment Meena chooses her own moral compass over Anita&apos;s indifference, so the
                  pond becomes the literal ground on which her break with Anita is enacted.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  3. Anita&apos;s Vanity Bag / Possessions
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Anita&apos;s little prized possessions &mdash; her bag, her makeup, the small kit
                  of early-teenage femininity she parades in front of the younger children &mdash;
                  symbolise the &ldquo;grown-up&rdquo; English girlhood Meena envies. To Meena,
                  these objects represent freedom, glamour, and acceptance. Syal slowly exposes them
                  as cheap, performative, and bound up with the cruelty of the Rutter household. The
                  objects shrink in value as Meena grows.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">4. Indian Sweets vs English Sweets</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Food is one of the novel&apos;s most consistent symbolic systems. Indian sweets
                  (jalebis, gulab jamun, barfi at family gatherings) and English sweets (Mr
                  Ormerod&apos;s shop counter, the village kids&apos; pocket-money treats) stand for
                  the two cultures Meena navigates. Early in the novel she prefers the English
                  sweets and is embarrassed by the Indian ones. By the end, after Nanima&apos;s
                  arrival, the Indian sweets carry her grandmother&apos;s warmth and become a
                  positive marker of belonging. The change in her palate tracks her change in
                  identity.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">5. The Bicycle</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The bicycle is Meena&apos;s attempt to claim the mobility, independence, and
                  recklessness she has watched in the village children. Riding it is a small act of
                  becoming-Anita. The accident that breaks her leg punishes that wish: the freedom
                  she imagined is also a danger she cannot control. The bicycle is a classic
                  coming-of-age symbol &mdash; the first vehicle, the first crash &mdash; weaponised
                  by Syal to engineer the stillness Meena needs in order to think.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">6. The Hospital</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  After the bicycle accident, the hospital becomes a third space, separate from both
                  the Kumar home and the Tollington street. There Meena befriends Robert, who treats
                  her without ethnic or social filters. The hospital symbolises a neutral interior
                  in which Meena can be just Meena, neither Indian girl nor Tollington wench.
                  Robert&apos;s later death darkens this space and confirms the novel&apos;s lesson:
                  every refuge in childhood is provisional.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Meera Syal &mdash; Author Biography`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Meera Syal was born in 1961 in Wolverhampton and grew up in Essington, a small
                  former mining village in Staffordshire on which Tollington is closely based. She
                  is of Punjabi heritage. Trained as an actor, she became a leading figure in
                  British Asian comedy and drama. <em>{tr(`Anita and Me`)}</em> (1996) was her first
                  novel and draws heavily on her childhood; she has described it as
                  semi-autobiographical rather than literal memoir. Knowing Syal&apos;s background
                  is useful for context but the novel should be read as a work of fiction.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Goodness Gracious Me and The Kumars at No. 42
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Syal was a writer and performer on the BBC sketch series{' '}
                  <em>{tr(`Goodness Gracious Me`)}</em>
                  (Radio 4 1996, BBC2 1998&ndash;2001) and on the spoof chat show
                  <em> The Kumars at No. 42</em> (2001&ndash;2006, with later revivals). Both shows
                  satirised British-Asian family life and English assumptions about it, making
                  British-Asian voices unprecedentedly visible in mainstream UK television.{' '}
                  <em>{tr(`Anita and Me`)}</em> belongs to the same cultural project: British-Asian
                  experience moved from the margins to the centre of the story.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The 1972 Setting and the Heath Government
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in 1972, during the Conservative government of Edward Heath.
                  Britain was preparing to enter the European Economic Community (1973), industrial
                  unrest was rising, and the post-war consensus was beginning to fracture. The
                  Tollington pit has already closed: the village is on the wrong side of
                  de-industrialisation. The planned motorway running through the village symbolises
                  top-down modernisation that will physically remake the community. The 1972 setting
                  is not nostalgic scenery; it is the specific historical moment in which
                  Meena&apos;s identity is formed.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Post-Powell Anti-Immigrant Politics`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Enoch Powell&apos;s &ldquo;Rivers of Blood&rdquo; speech in April 1968 had
                  legitimised open anti-immigration rhetoric in mainstream British politics. The
                  early 1970s saw the rise of the National Front and the arrival of Ugandan Asians
                  expelled by Idi Amin in 1972. The casual racism of Tollington &mdash; the stares,
                  the charity tin, Sam Lowbridge&apos;s outburst &mdash; sits inside this political
                  weather. Syal is not inventing a hostile climate; she is recording one. The novel
                  asks the reader to see how high-profile rhetoric reaches down into a small village
                  street.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Punjabi Heritage and Partition`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Meena&apos;s parents are Punjabi. The Punjab was violently divided between India
                  and Pakistan at Partition in 1947, with mass displacement and communal killings.
                  Many Punjabi families who later emigrated to Britain carried that displacement as
                  a recent memory. Papa&apos;s ghazals, Nanima&apos;s stories, and the family&apos;s
                  emotional weather are all coloured by a partitioned homeland that the child Meena
                  only half-understands. The novel can be read as a study of how second-generation
                  British Asian children inherit unspoken trauma.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`British Asian Literature`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`Anita and Me`)}</em> sits within an emerging British Asian literary
                  tradition that includes Hanif Kureishi (<em>{tr(`The Buddha of Suburbia`)}</em>,
                  1990), Monica Ali (<em>{tr(`Brick Lane`)}</em>, 2003) and Zadie Smith (
                  <em>{tr(`White Teeth`)}</em>, 2000). Syal&apos;s novel was an early and
                  influential entry in this canon, distinctive for being set in a working-class West
                  Midlands village rather than London, and for centring a child&apos;s point of
                  view. Its 2002 film adaptation (screenplay by Syal) brought it to a wider
                  audience.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Genre &mdash; The Bildungsroman`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Anita and Me is a Bildungsroman (a coming-of-age novel) in the tradition of
                  <em> Great Expectations</em>, <em>{tr(`To Kill a Mockingbird`)}</em>, and Maya
                  Angelou&apos;s
                  <em> I Know Why the Caged Bird Sings</em>. Like those books, it uses a child
                  protagonist to defamiliarise the adult world&apos;s racial and class injustices.
                  The first-person retrospective narration &mdash; an adult voice looking back
                  &mdash; is a defining feature of the form, allowing simultaneous childhood
                  immediacy and adult interpretive distance.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The 1990s of Publication`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <em>{tr(`Anita and Me`)}</em> was published in 1996, in a Britain that had become
                  much more multicultural than the Tollington of 1972 but which was still
                  negotiating what that multiculturalism meant. The 1990s saw the Stephen Lawrence
                  inquiry, the rise of New Labour, and renewed debate about national identity.
                  Syal&apos;s retrospective look at 1972 was therefore also a contribution to a
                  contemporary argument: a reminder that &ldquo;modern&rdquo; British identity has
                  Punjabi, Caribbean, and other immigrant histories woven into its fabric.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five model plans for the kind of question AQA sets on <em>{tr(`Anita and Me`)}</em>.
              Each plan includes a thesis, paragraph structure, and AO links (AO1 = response to text
              and ideas; AO2 = writer&apos;s methods; AO3 = context).
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Syal explore ideas about identity and belonging in{' '}
                  <em>{tr(`Anita and Me`)}</em>? [30 marks + AO4]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal presents Meena&apos;s identity as genuinely dual rather than divided, and
                      uses the village of Tollington both as a place that excludes her and as a
                      place she partly belongs to. By the end, Syal argues that Britishness must
                      expand to include Meena, not the other way around.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2) &mdash; The bilingual narrative voice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Punjabi words sit untranslated inside English sentences. Black Country slang
                      (&ldquo;wench,&rdquo; &ldquo;cock of the yard&rdquo;) is absorbed alongside
                      &ldquo;Nanima&rdquo; and food-words. The form of the prose itself enacts the
                      dual identity it describes.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO1/AO2) &mdash; &ldquo;too Indian / not Indian enough&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Use Meena&apos;s self-description (too mouthy, scabby, etc.) to argue that the
                      novel rejects the binary that produces such self-loathing. The sentence&apos;s
                      split vocabulary mirrors the split feeling.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2) &mdash; Nanima as cultural anchor
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nanima reverses the polarity of Meena&apos;s feelings about her heritage.
                      Meena moves from embarrassment to pride. Use the food motif (Indian sweets,
                      dhal) as evidence of the change.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3) &mdash; 1972 context
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Post-Powell political weather; arrival of Ugandan Asians; Heath government.
                      Identity is being formed at a moment when the British nation is openly arguing
                      about who counts as British. Syal&apos;s 1996 publication is a contribution to
                      that ongoing argument.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By the end of the novel, Meena is leaving Tollington for grammar school: she
                      is not assimilating but renegotiating. The dual identity is not a problem to
                      be solved but a fact to be lived.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Syal present racism in <em>{tr(`Anita and Me`)}</em>? [30 marks + AO4]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal shows that the most damaging racism in 1972 Tollington is the kind that
                      the perpetrators do not consider racism at all: the charity tin, the stares,
                      the silences. Sam Lowbridge&apos;s outburst is the visible tip of an iceberg
                      of casual everyday prejudice.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2) &mdash; Casual racism / Mr Ormerod
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The &ldquo;darkest Africa&rdquo; charity tin. Syal weaponises a colonial-era
                      cliché to expose the contradictions of paternalistic English Christianity.
                      Charity to distant black children co-exists with discomfort about the brown
                      family in the next street.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2) &mdash; Sam Lowbridge at the f&ecirc;te
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The post-Powell language of &ldquo;them,&rdquo; &ldquo;sponging,&rdquo; the
                      implied national &ldquo;us.&rdquo; Syal dramatises the moment when far-right
                      rhetoric reaches the village street. The community&apos;s embarrassed silence
                      is part of the offence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2) &mdash; Casual racism in the friendship group
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Anita and the gang use racial slurs as ordinary playground vocabulary. Syal
                      shows Meena absorbing these words even when they are aimed at people like her,
                      dramatising the psychic cost of internalised racism in a child.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3) &mdash; Historical context
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Powell&apos;s 1968 speech, rise of the National Front, 1972 arrival of Ugandan
                      Asians. Tollington is not exceptional &mdash; it is a typical British village
                      in a politically charged decade.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal&apos;s argument is structural: she shows racism not as the property of
                      bad individuals but as a climate that ordinary people generate together, often
                      without naming it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Syal use the friendship between Meena and Anita to explore the loss of
                  innocence? [30 marks + AO4]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Anita is the agent of Meena&apos;s loss of innocence. Through the friendship,
                      Meena learns about cruelty, racism, neglect and the limits of glamour. By
                      breaking with Anita, Meena does not return to innocence but enters a more
                      grounded adolescence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2) &mdash; Anita as idol
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Cock of our yard.&rdquo; Anita is initially pure glamour, freedom,
                      English-girlhood. Meena imitates her language, walk, and contempt for adults.
                      The vanity bag stands for the world Meena wants in.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2) &mdash; The cracks open
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sam Lowbridge&apos;s outburst (Anita is his girlfriend); Anita&apos;s casual
                      racism; the bicycle accident. Each episode strips a layer of glamour off the
                      friendship.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2) &mdash; The pond / Tracey
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The rescue of Tracey is the moral climax. Meena&apos;s instincts diverge from
                      Anita&apos;s indifference. The pond is the literal ground of the break.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3) &mdash; Bildungsroman tradition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Place the novel in the Bildungsroman lineage (Dickens, Lee, Angelou). The
                      defamiliarising child narrator is a generic feature; Syal uses it to make
                      familiar British racism strange.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The end of the friendship is also the beginning of a more reliable Meena. Loss
                      of innocence here is gain of moral seriousness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Syal present the importance of family and cultural heritage in{' '}
                  <em>{tr(`Anita and Me`)}</em>? [30 marks + AO4]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal argues that cultural identity is carried in the small daily rituals of
                      family life &mdash; food, language, music, gathering. Meena&apos;s
                      reconciliation with her Punjabi heritage is achieved not by abstraction but
                      through Nanima&apos;s body, voice, and cooking.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2) &mdash; The Aunties and Uncles
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The fictive-kin community of family friends. Capitalisation in the narration
                      signals their semi-mythic status. Syal evokes a textured immigrant social
                      world, not a generic &ldquo;background.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2) &mdash; Mama&apos;s ethics
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;If you can&apos;t respect what we believe in, then you don&apos;t
                      respect us.&rdquo; Mama is the moral centre. Syal uses her to refuse the
                      stereotype of the silent immigrant mother.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2) &mdash; Nanima
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Communication through touch, food, Punjabi tales rather than English speech.
                      Heritage as embodied, not abstract. The food-symbolism (Indian sweets) tracks
                      Meena&apos;s shift in feeling.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO3) &mdash; Partition and diaspora
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Punjabi heritage carries the unspoken weight of 1947 Partition. Papa&apos;s
                      ghazals and Nanima&apos;s presence are remnants of a divided homeland.
                      Second-generation children inherit this charge half-knowingly.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Family is not a backdrop but the engine of the novel&apos;s positive moral
                      world. When Nanima leaves, the loss is cultural as well as personal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. How does Syal use Tollington as a setting to explore class and community? [30
                  marks + AO4]
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tollington is more than a backdrop: it is the working-class, post-industrial
                      English place inside which the novel&apos;s questions of race and identity are
                      forced to play out. Syal neither romanticises the village nor dismisses it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 (AO2/AO3) &mdash; The closed pit and the motorway
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tollington is post-industrial; the planned motorway is top-down modernisation.
                      Class precarity sets the emotional weather. Sam Lowbridge&apos;s racism is
                      partly a displaced reaction to this loss.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 (AO2) &mdash; The Rutter household
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Drink, neglect, casual cruelty. Anita&apos;s glamour conceals a damaged home.
                      Tracey is the family&apos;s most vulnerable victim. Syal refuses to
                      romanticise the white working class.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 (AO2) &mdash; The Kumars&apos; awkward class position
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Educated, middle-class immigrants in a working-class village: ethnically
                      marked as outsiders but socially &ldquo;above&rdquo; their neighbours. Class
                      and race intersect in painful, specific ways.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 (AO2) &mdash; Tollington as character
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The repeated ritual naming of Tollington in the narration. The pond, the
                      f&ecirc;te, Mr Ormerod&apos;s shop are all named features of an emotional
                      geography. Meena&apos;s eventual departure is a leaving of a person as well as
                      a place.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      By the end, Tollington is both lost and remembered: the bittersweet structure
                      of the Bildungsroman insists that we cannot get the place back, but also that
                      we cannot stop carrying it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section title={tr(`Practice Questions`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4">
              AQA-style essay questions (30 marks plus 4 marks for AO4: Spelling, Punctuation and
              Grammar). Practise planning each in 5 minutes and writing the introduction in another
              5.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: 'How does Syal explore ideas about identity and belonging in Anita and Me? Refer to the whole novel in your answer.',
                  marks: 30,
                },
                { q: 'How does Syal present the theme of racism in Anita and Me?', marks: 30 },
                {
                  q: 'How does Syal use the friendship between Meena and Anita to explore the loss of innocence?',
                  marks: 30,
                },
                {
                  q: 'How does Syal present the importance of family and cultural heritage in Anita and Me?',
                  marks: 30,
                },
                {
                  q: 'How does Syal use the setting of Tollington to explore class and community?',
                  marks: 30,
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.q} <span className="font-semibold">[{item.marks} marks + AO4]</span>
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">{tr(`Exam Tips for Anita and Me`)}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the AO triangle.</strong> AQA wants AO1 (response), AO2 (writer&apos;s
              methods), and AO3 (context) braided through every paragraph &mdash; not separated.
              Plus AO4 (SPaG).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to Syal&apos;s methods explicitly.`)}</strong> The bilingual
              narrative voice, the retrospective adult narrator, food motifs, dialect, free indirect
              style. Don&apos;t just say &ldquo;Syal shows.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Anchor context in 1972.`)}</strong> Powell&apos;s 1968 speech, the Heath
              government, Ugandan Asians (1972), the rise of the National Front, the closure of the
              pits.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Short embedded quotation beats long block-quote.`)}</strong> The novel is
              in copyright and you do not need verbatim slabs. A precise paraphrase plus one or two
              short embedded phrases is plenty.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the term &ldquo;Bildungsroman.&rdquo;</strong> Naming the genre lets you
              make structural points about the retrospective narrator, the loss of innocence arc,
              and the connection to Dickens, Harper Lee and Maya Angelou.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole novel.`)}</strong> Don&apos;t over-focus on the
              f&ecirc;te or the pond. Move from the opening (Meena as liar) to the end (passing the
              eleven-plus, leaving Tollington) inside every essay.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`Anita and Me`)}</em> by Meera Syal was first published in 1996 and remains in
          copyright. Quotations on this page are cited briefly for the purpose of academic study and
          criticism. Students should always verify exact wording against an authorised edition of
          the novel before relying on a quotation in the exam.
        </p>
      </footer>
    </>
  )
}
