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

export default function AnitaAndMePage() {
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
          Everything you need for your AQA GCSE English Literature exam. Plot summary, character
          profiles, themes with evidence, key quotations with analysis, the historical and cultural
          context of 1970s Britain, symbolism, and exam planning guidance.
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                <em>Anita and Me</em> is a semi-autobiographical Bildungsroman narrated
                retrospectively by Meena Kumar, a nine-year-old British-Punjabi girl growing up in
                the fictional ex-mining village of Tollington in the West Midlands. The novel is set
                in the early 1970s and traces roughly two years of Meena&apos;s life, from her ninth
                birthday to the eve of her Eleven-Plus examination. It is at once a comic memoir of
                childhood, a portrait of a working-class English community, and a serious account of
                how racism and family disruption push a child out of innocence and into
                self-knowledge.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The novel opens with Meena introducing her family and the village. Mama and Papa are
                university-educated Punjabi immigrants who have settled, somewhat improbably, in the
                only Indian household in Tollington. They are surrounded by the pit cottages of
                former miners and the residual culture of an industrial community in decline. Meena
                is bright, mischievous and addicted to stories &mdash; she lies habitually, both to
                her parents and to herself, and this fluid relationship with truth is one of the
                engines of the novel&apos;s comedy and its moral seriousness.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The decisive event of Meena&apos;s ninth year is her infatuation with Anita Rutter,
                the blonde, foul-mouthed twelve-year-old who rules the village children. Anita
                represents everything Meena&apos;s parents disapprove of and everything Meena
                privately wants: glamour, English-ness, freedom from rules, sexual knowledge,
                cruelty as a kind of power. Their friendship gives Meena access to the
                village&apos;s social hierarchy &mdash; and to its ugliness. Anita&apos;s home life
                is unhappy: her mother Deirdre is unstable and eventually runs off with the milkman;
                her younger sister Tracey is silent and damaged.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The arrival of Meena&apos;s baby brother Sunil, and shortly afterwards her
                grandmother Nanima from India, begin to pull Meena back towards her family. Nanima
                cannot speak English, yet she becomes a magnetic, almost sacred presence: through
                her, Meena begins to understand Punjabi storytelling, food and history as
                inheritance rather than embarrassment. Around the same time, the village fete
                becomes the scene of the novel&apos;s most violent public moment: Sam Lowbridge, a
                local skinhead Meena has previously had a soft spot for, makes an explicitly racist
                speech and attacks an Indian bus passenger, exposing the hatred that
                Tollington&apos;s nostalgic communalism has been concealing.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The climax comes when Meena, riding a horse called Sherrie&apos;s, is thrown and
                breaks her leg. The long convalescence in hospital becomes a turning point. Forced
                to be still, separated from Anita, attended by her family and an Indian doctor,
                Meena re-evaluates everything. The friendship with Anita curdles. Meena passes the
                Eleven-Plus and is bound for grammar school in nearby Wolverhampton. The Kumars
                prepare to leave Tollington for a more middle-class suburb. The novel closes with
                Meena looking back on the village from a position of irrevocable change &mdash;
                older, more honest, no longer a child &mdash; while Anita is left behind with Sam,
                Tracey and the diminished village. The Bildungsroman ends not with triumph but with
                the bittersweet recognition that growing up is a form of loss as well as gain.
              </p>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Meena Kumar"
                description="The nine-year-old narrator and protagonist. Meena is bright, imaginative, funny and an inveterate liar — habits Syal connects to her position between two cultures. As a British-born Punjabi girl in an all-white village, she experiences her identity as hyphenated and contradictory: at home she is the obedient Indian daughter, in the village she longs to be a Tollington 'wench'. Her narrative voice is double — the adult writer recovers the child's perceptions but also frames them with adult irony. Her arc is a classic Bildungsroman: through Anita's friendship, Sam's racism, Sunil's birth, Nanima's arrival and her own physical injury, she moves from imitation to self-knowledge."
              />
              <CharacterCard
                name="Anita Rutter"
                description="A blonde, twelve-year-old white English girl who leads the village children. Anita is glamorous, cruel, sexually knowing and entirely without sentimentality. She fascinates Meena precisely because she represents what Meena cannot easily be: confidently English, free of parental supervision, comfortable with violence and exclusion. Her family — an absent father, the unstable mother Deirdre, a damaged sister Tracey — is the novel's portrait of working-class breakdown. Syal does not demonise Anita: she is a product of her environment, and her later alignment with Sam Lowbridge feels less like choice than like inheritance. Her relationship with Meena is the novel's central friendship and its central betrayal."
              />
              <CharacterCard
                name="Mama (Daljit Kumar)"
                description="Meena's mother, a Punjabi school teacher who has had to remake her identity in England. Mama is the moral and emotional centre of the Kumar household: she cooks, hosts the 'Aunties' and 'Uncles' of the diaspora, manages the children, and represents the cultural memory Meena half-resists and half-needs. She is gentle but capable of fierceness in defence of her family. Through Mama, Syal portrays the immigrant mother's labour of preserving a homeland inside an English house — and the loneliness this involves."
              />
              <CharacterCard
                name="Papa (Shyam Kumar)"
                description="Meena's father, a clerk and amateur singer. Papa is dignified, witty, sometimes melancholic; he sings ghazals at the Kumars' parties and tells Meena stories of Partition and his student years. He represents a more reflective, lyrical relationship to Indian culture than Mama's domestic practicality. He is also the family's quiet intellectual, conscious of the racism the Kumars face but determined to maintain a public composure. His tenderness with Sunil and with Nanima reveals the emotional centre beneath his reserved manner."
              />
              <CharacterCard
                name="Sunil"
                description="Meena's baby brother, born during the novel. Sunil's arrival is initially a shock — Meena is jealous and frightened of being displaced — but becomes one of the catalysts of her growth. Caring for him, watching her parents care for him, and ultimately defending him give Meena a stake in the family she had previously experienced mainly as a constraint. Sunil also represents continuity: the next generation of British-Asian childhood, born here and raised here from the start."
              />
              <CharacterCard
                name="Nanima"
                description="Meena's maternal grandmother, who arrives from India to stay with the Kumars. Nanima speaks no English and is at first an exotic, slightly comic presence, but becomes a profoundly important figure for Meena. Through Nanima, Meena gains direct contact with Punjabi storytelling, ritual and memory — and through Nanima's calm, watchful authority, she encounters a model of femininity that owes nothing to Anita's or Tollington's. Nanima's eventual return to India is one of the novel's quiet heartbreaks; her presence has changed Meena permanently."
              />
              <CharacterCard
                name="Mr Ormerod"
                description="The village shopkeeper and a lay preacher. Ormerod combines a sentimental Christian piety with a cosy paternalism towards the Kumars: he treats them with friendly condescension, raises money for missionary work in 'the heathen lands', and embodies the everyday, well-meaning racism of the village. Syal uses him to show that racism in 1970s England is not only the violent, skinhead variety; it also wears a Methodist hymnbook and an apron."
              />
              <CharacterCard
                name="Mr Worrell"
                description="An elderly villager and one of Tollington's residual mining-community figures. Worrell stands for the older, settled, working-class Englishness of the village — a tradition that is dying with the pits and that the novel views with a mixture of affection and clear-sightedness. He is part of the chorus of villagers whose cumulative perspective gives Tollington its texture."
              />
              <CharacterCard
                name="Tracey Rutter"
                description="Anita's younger sister: small, silent, and watchful. Tracey is the casualty of the Rutter household. She is sexually vulnerable and the novel gradually makes clear that her childhood is not safe. Her near-drowning in the village pond is one of the novel's most disturbing moments and a key part of Meena's break with Anita. Tracey represents what Anita would never admit to: the cost, on a child, of the world Anita inhabits."
              />
              <CharacterCard
                name="Sam Lowbridge"
                description="A local teenage tearaway who becomes a skinhead. Meena has a sentimental crush on Sam early in the novel; he is a Tollington boy with a motorbike and a kind of glamour. His public turn into open racism — at the village fete, in front of the whole community — is the most shocking moment in the novel. Sam embodies the way 1970s British racism grew out of working-class disenfranchisement (post-Powell, post-industrial decline) and how easily local cultures of toughness could curdle into hatred. His final relationship with Anita ties the novel's two strands of damage together."
              />
              <CharacterCard
                name="Sally"
                description="One of the village children in Anita's circle. Sally is part of the gang's dynamics of inclusion and exclusion. She functions, like several of the minor village children, to show how social hierarchies among children mirror the adult hierarchies of the village — and how Meena's place in those hierarchies is always provisional, always conditional on Anita's favour."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Identity and Belonging"
                description="The novel's central concern. Meena's identity is hyphenated — British and Punjabi, Tollington wench and Indian daughter — and the book traces her movement from trying to choose one side to learning to inhabit both. Syal shows that identity is not a private psychological matter but a constant negotiation with how others see you: shopkeepers, teachers, friends, racists. Meena's growth lies in beginning to author her own story rather than borrowing Anita's, while still drawing on the inheritance Nanima represents."
              />
              <ThemeCard
                title="Childhood and Coming of Age"
                description="Anita and Me is a Bildungsroman. Its structure is the loss of innocence: from the comic, mischief-making child of the opening chapters to the more sombre, self-aware adolescent of the closing pages. Key passages — Tracey's near-drowning, Sam's racist outburst, Meena's broken leg, Nanima's return to India — each strip away a layer of childhood. Syal is careful to keep the comedy of childhood alive even as her narrator outgrows it; growing up is portrayed as both a release and a bereavement."
              />
              <ThemeCard
                title="Race and Racism in 1970s Britain"
                description="Set in the years after Enoch Powell's 1968 'Rivers of Blood' speech and during the Heath government's hostile rhetoric on immigration, the novel offers a careful anatomy of racism. Syal distinguishes between violent skinhead racism (Sam at the fete), institutional or 'polite' racism (Ormerod's sentimental paternalism, the constant stares, the assumption that Meena's family does not 'belong'), and internalised racism (Meena's own desire to be blonder, to have 'tomato sauce sandwiches' and be unmarked). The novel insists that racism in Britain is an ordinary, daily, English phenomenon, not an aberration."
              />
              <ThemeCard
                title="Class and the Working-Class West Midlands"
                description="Tollington is a working-class, ex-mining village in the post-industrial West Midlands. Syal renders its accents, food, pubs, fetes and prejudices with affection and exactness. The novel resists a simple racial story by insisting that the village is also a class: its inhabitants have their own losses (the pits, the mines, the certainties of the old industry) and their own dignities. Meena's parents — university-educated, middle-class — are in a complex position relative to their neighbours: socially superior in some ways, racially marked in others."
              />
              <ThemeCard
                title="Family and Cultural Heritage"
                description="The Kumar household is the novel's emotional anchor. Through the Aunties' and Uncles' parties, the food, the songs, the language, Syal portrays the diaspora as a sustaining structure rather than a burden. Nanima's arrival deepens this: she embodies a heritage that cannot be translated into English and that, precisely because of that, has authority. Meena's reconciliation with her family is not a rejection of England but a recognition that her Englishness will always be Punjabi-inflected — and that this is a strength."
              />
              <ThemeCard
                title="Friendship and Loss of Innocence"
                description="Meena's friendship with Anita is the novel's central relationship and its central disillusionment. Anita gives Meena a way to be a Tollington child; she also exposes Meena to cruelty, exclusion, and the casual racism of the village's children. The friendship's slow disintegration — through Tracey, through Sam, through the changes in Meena's own family — is the engine of Meena's growing-up. Syal treats the friendship with seriousness: Anita is not a villain but a fellow child, equally caught in forces larger than herself."
              />
              <ThemeCard
                title="Storytelling and Memory"
                description="Meena is a habitual liar, her father a singer of ghazals, her mother a teacher, her grandmother a teller of Indian tales. The novel itself is a retrospective narration: an adult Meena reconstructing her childhood. Storytelling is presented both as a defence (Meena's lies) and as inheritance (Nanima's stories, Papa's songs, the Aunties' gossip). Syal suggests that for a diaspora community, the act of remembering and retelling is a form of survival, and that fiction — including the novel we are reading — is the proper medium for a doubled identity."
              />
              <ThemeCard
                title="Place, Nostalgia and Change"
                description="Tollington is a village on the edge of disappearance. The pits have closed; the motorway is coming; the old culture of mining clubs and chapel teas is fading. Syal's affectionate but unsentimental portrait of the village shows how nostalgia for an imagined English past — white, rural, communal — was one of the engines of 1970s racism. The Kumars' eventual departure is set against this backdrop of a community already losing itself for reasons that have nothing to do with immigration."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Social Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Meera Syal&apos;s Biography</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Meera Syal was born in 1961 in Wolverhampton to Punjabi parents who had emigrated
                  from India. She grew up in the mining village of Essington, Staffordshire &mdash;
                  the recognisable original of Tollington in the novel. She studied English and
                  Drama at Manchester University and went on to a major career as an actress,
                  comedian and writer. She is best known for the BBC sketch series{' '}
                  <em>Goodness Gracious Me</em> (1998&ndash;2001) and the sitcom{' '}
                  <em>The Kumars at No. 42</em> (2001&ndash;2006), both of which placed
                  British-Asian comedy in the mainstream. <em>Anita and Me</em> (1996) was her first
                  novel and was longlisted for the Booker Prize. Although Syal is clear that the
                  book is fiction, she has acknowledged that it draws extensively on her own
                  childhood; the novel is semi-autobiographical rather than memoir.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Britain in the Early 1970s</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in the early 1970s, under the Conservative government of Edward
                  Heath (1970&ndash;1974). It was a period of acute economic anxiety: industrial
                  disputes, the three-day week, oil shocks, and the long contraction of the coal
                  industry that had sustained communities like Tollington. Syal places her story
                  precisely against this background of decline, when working-class English
                  communities were losing their economic basis and their political voice.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Post-Powell Anti-Immigrant Politics</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Enoch Powell &mdash; MP for Wolverhampton South West, ten miles from Syal&apos;s
                  childhood village &mdash; delivered his &ldquo;Rivers of Blood&rdquo; speech in
                  1968, predicting racial conflict if non-white immigration continued. The speech
                  was hugely influential in legitimising public anti-immigrant rhetoric. The early
                  1970s also saw the rise of the National Front, increasingly visible skinhead
                  violence, and the 1971 Immigration Act, which sharply restricted Commonwealth
                  immigration. Sam Lowbridge&apos;s speech at the village fete is set inside this
                  very specific political moment.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  British Asian Literature and the Bildungsroman
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Anita and Me belongs to a generation of British-Asian writing that emerged in the
                  1980s and 1990s, including Hanif Kureishi&apos;s <em>The Buddha of Suburbia</em>{' '}
                  (1990) and Salman Rushdie&apos;s <em>Midnight&apos;s Children</em> (1981). It is
                  also a Bildungsroman &mdash; a novel of growth and education &mdash; in the
                  tradition that runs from Dickens&apos;s
                  <em> Great Expectations</em> through Joyce&apos;s{' '}
                  <em>A Portrait of the Artist as a Young Man</em>
                  to Harper Lee&apos;s <em>To Kill a Mockingbird</em>. Syal uses the form&apos;s
                  familiar shape (the child narrator, the journey from innocence to experience) to
                  insist that the British-Asian girl&apos;s story belongs in this canonical
                  tradition.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Punjabi Cultural References</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Kumars are Punjabis who have arrived in Britain in the wake of the 1947
                  Partition of India, an event that displaced millions and shaped a generation of
                  South Asian migration. The novel is full of specifically Punjabi reference: the
                  food (samosas, sabzi, mithai), the music (the ghazals Papa sings), the language
                  (Punjabi words woven into the Kumars&apos; English), and the Aunties&apos; and
                  Uncles&apos; networks that recreate the village inside the diaspora. Syal expects
                  her reader to encounter these references partly through Meena&apos;s eyes &mdash;
                  sometimes embarrassedly, sometimes lovingly &mdash; and to take their authority
                  seriously alongside the English ones.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Quotations should always be checked against your edition before being used in the
              exam. Page references vary between the 1996 Flamingo first edition and the more recent
              reissues that schools tend to use.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="I'm really English. [VERIFY exact phrasing in your edition]"
                speaker="Meena (paraphrase)"
                analysis="Meena's repeated childhood insistence that she is 'really' English is the engine of the novel's identity theme. The very need to assert it betrays the doubt: a child who has unquestioned belonging never has to claim it. Syal uses Meena's English-ness as a desire rather than a fact, and the novel charts the slow movement from this kind of claim to a more honest, hyphenated self-understanding. Always check your edition for the exact wording."
              />
              <QuoteCard
                quote="I do not remember the words, but I remember the tune. [VERIFY]"
                speaker="Meena (paraphrase, opening passages)"
                analysis="The opening pages establish Meena as a narrator for whom memory is musical and unreliable. This positions the whole novel as a reconstructed, partly imagined account — important for AO2 analysis of narrative voice. Confirm the precise wording from your school's edition before quoting in the exam."
              />
              <QuoteCard
                quote="We don't want them, here, none of them..."
                speaker="Sam Lowbridge at the village fete [VERIFY exact phrasing]"
                analysis="Sam's speech at the fete is the novel's most explicit articulation of racism. The collective pronoun ('we') claims to speak for the village; the dismissive 'them' refuses to name the people he is excluding. Syal stages this in public, in front of Meena and her family, so that the racism that has been hinted at throughout the novel is finally said out loud. The shock for Meena is partly that she had romanticised Sam — her own complicity in his appeal is part of what is exposed. Verify the exact wording from your edition."
              />
              <QuoteCard
                quote="darkies"
                speaker="Sam Lowbridge / villagers [VERIFY context and surrounding sentence]"
                analysis="The slur appears at the moment of Sam's outburst and elsewhere in village dialogue. Syal's choice not to soften the language is part of the novel's realism: 1970s England used these words, and pretending otherwise would falsify the book's social testimony. In an exam, quote sparingly and always frame the analysis around Syal's authorial purpose: the language belongs to the characters, not the narrator, and is condemned by the structure of the novel."
              />
              <QuoteCard
                quote="wench"
                speaker="Tollington idiom [VERIFY surrounding sentence]"
                analysis="'Wench' is a West Midlands dialect word for a girl or young woman. Anita uses it; the village uses it; Meena, longing to belong, tries it on. The word becomes a small but precise marker of the Englishness Meena wants to inhabit. Syal's careful reproduction of regional dialect is part of her insistence that 'England' in this novel is a specific, working-class, West Midlands place — not the generic Englishness of national myth."
              />
              <QuoteCard
                quote="tomato sauce sandwiches [VERIFY surrounding sentence]"
                speaker="Meena's observation of village food"
                analysis="Tomato-sauce-on-white-bread sandwiches are one of the small, exact details that mark the village's English food culture. For Meena, raised on her mother's sabzi and rotis, they are simultaneously alien, slightly disgusting, and intensely desirable: the food of belonging. The contrast between Indian home food and English village food is one of the novel's most economical ways of dramatising the identity theme. Verify wording from your edition."
              />
              <QuoteCard
                quote="lies / lying"
                speaker="Meena, on her own habit [VERIFY exact sentence]"
                analysis="Meena's lying is one of the novel's recurring motifs and an explicit marker of her doubled identity: she lies because she has more than one self and more than one audience. Syal connects this child's habit to the larger adult activity of the novel — storytelling as inheritance, as defence, as art. In an exam, the link between Meena's childish lying and the adult writer's narrative reconstruction is a strong AO2 point."
              />
              <QuoteCard
                quote="Pictures of England [VERIFY]"
                speaker="Meena / Papa, recounting arrival narratives"
                analysis="The novel returns repeatedly to the idea of an imagined England — the England that the Kumars expected before arriving, the England that Tollington's older inhabitants believe still exists, the England that exists only in pictures and stories. Syal uses this gap between imagined and lived England as one of the novel's structuring ironies. Confirm the precise wording in your edition before quoting."
              />
              <QuoteCard
                quote="If you ever change your name... [VERIFY full sentence]"
                speaker="Meena's family / cultural injunction"
                analysis="The question of whether a name can or should be Anglicised — Meena, Sunil, the various Aunties' children — runs through the novel as a small, sharp test of identity. To change a name to fit in is to accept that the original name is a problem. Syal treats the question with care, neither romanticising the original name nor endorsing the change. Check your edition for the precise wording before using in an exam."
              />
              <QuoteCard
                quote="our village [VERIFY surrounding sentence]"
                speaker="Meena, of Tollington"
                analysis="Meena's use of 'our' for Tollington is one of the novel's most quietly important moves. She insists on belonging to the village even while the village hesitates to belong to her. The possessive pronoun is a small act of claiming. By the novel's end, 'our' is complicated: the Kumars are leaving, Meena is going to grammar school, the village is changing — but the word, used early, has carried a real argument."
              />
              <QuoteCard
                quote="Nanima [contextual reference]"
                speaker="Meena, of her grandmother"
                analysis="The name 'Nanima' is itself important: it is the Punjabi word for maternal grandmother and Meena uses it consistently. Even when she is speaking English, this Punjabi term carries authority. Nanima cannot be translated into English without loss. Syal uses the untranslatedness of the name as a small symbol of the larger argument: parts of Meena's inheritance are not available in English at all, and that is one of their values. Where you can quote a precise sentence about Nanima from your edition, do so; if not, paraphrase carefully."
              />
              <QuoteCard
                quote="the pond [VERIFY surrounding sentence]"
                speaker="Narrator, of the village pond"
                analysis="The pond is one of the novel's recurring locations and the site of Tracey's near-drowning. It is at once a real Tollington feature and a symbolic space — quiet on the surface, dangerous beneath. Syal uses it to literalise the novel's argument that the village's apparent calm conceals real danger, especially for the most vulnerable children."
              />
              <QuoteCard
                quote="my leg [VERIFY surrounding sentence]"
                speaker="Meena, after the riding accident"
                analysis="Meena's broken leg is the novel's physical turning point. The convalescence in hospital separates her from Anita, returns her to her family, and gives her the stillness in which growth becomes possible. The injury is small in plot terms but vast in structural ones: it is the device by which the Bildungsroman closes its first arc. Quote a precise sentence from the hospital chapters if you can; otherwise paraphrase and reference accurately."
              />
              <QuoteCard
                quote="grammar school [VERIFY surrounding sentence]"
                speaker="Meena, on her exam result"
                analysis="The Eleven-Plus and the grammar school in Wolverhampton mark Meena's exit from Tollington's social world. Syal handles this carefully: it is a triumph but also a separation, both from Anita's village and from a particular kind of childhood. The grammar school stands for the upward mobility of the immigrant family and for the loss of community that mobility entails."
              />
              <QuoteCard
                quote="vanity bag [VERIFY surrounding sentence]"
                speaker="Anita / Meena, on Anita's prized possession"
                analysis="Anita's vanity bag is a small but precise object: a piece of cheap glamour that, for Meena, condenses everything Anita represents — femininity-as-performance, English-girl style, the right to take up space. Syal lets this single accessory do a great deal of work in characterising Anita and in dramatising Meena's longing. As with all the quoted nouns above, verify the exact phrasing in your edition."
              />
            </div>
            <div className="mt-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                A note on quotation
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Anita and Me is still in copyright and the standard online quotation banks for it
                are less reliable than for canonical 19th-century texts. Several of the phrases
                above (marked <strong>[VERIFY]</strong>) are well-attested in critical discussions
                of the novel but should be confirmed in your own copy before being reproduced in an
                exam. Examiners reward accurate, embedded quotation; they also reward confident
                paraphrase where exact wording is not available. If in doubt, paraphrase precisely
                and reference the chapter or scene rather than quoting incorrectly.
              </p>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbols and Motifs" icon="🔮">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">English and Punjabi as Dual Languages</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Language itself is the novel&apos;s most pervasive symbol. Meena speaks English in
                  the village, Punjabi (or a hybrid) at home; Nanima speaks no English at all; Papa
                  code-switches between the registers of his English clerical job and his Punjabi
                  songs. The Aunties&apos; and Uncles&apos; conversations slide between languages,
                  and Meena&apos;s narration itself is bilingual. Syal uses this linguistic
                  doubleness to argue that identity is a matter of which words you have access to.
                  The Punjabi terms she leaves untranslated &mdash; Nanima, the names of foods, the
                  affectionate diminutives &mdash; refuse to be assimilated into English. They stand
                  as a constant marker that some inheritance is irreducibly other.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Village Pond</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Tollington pond is a real Midlands village feature and the novel&apos;s most
                  charged location. On the surface it is a children&apos;s play space: somewhere to
                  dare each other, to cool off, to be unsupervised. Beneath the surface it is
                  dangerous &mdash; the site of Tracey&apos;s near-drowning. The pond becomes the
                  symbolic embodiment of the village itself: deceptively calm, communal in
                  appearance, capable of swallowing the most vulnerable. Meena&apos;s growing
                  recognition of this duality &mdash; the pond as both playground and threat &mdash;
                  tracks her larger loss of innocence about Tollington.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Anita&apos;s Vanity Bag</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Anita&apos;s vanity bag is the totem of everything Meena&apos;s longing
                  crystallises around: cheap, sparkly, English-girl glamour, the right to a public
                  femininity that Meena&apos;s Punjabi household does not authorise. It is a small
                  object that condenses class, gender and racial difference simultaneously.
                  Syal&apos;s use of such ordinary objects &mdash; a bag, a sandwich, a sweet
                  &mdash; as carriers of huge meaning is one of the book&apos;s characteristic
                  methods.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Indian Sweets (Mithai)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Mithai &mdash; Indian sweets &mdash; recur at the Aunties&apos; gatherings, at
                  festivals, and as gifts. They function as the counterweight to the village&apos;s
                  tomato-sauce sandwiches: the home food, the inheritance food, the food that says
                  you are part of a larger diaspora community. The sweets are also literal: dense,
                  intensely flavoured, not English. They stand for everything in Meena&apos;s
                  identity that is not assimilable to Tollington and that, by the novel&apos;s end,
                  she has stopped trying to assimilate.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Bicycle</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Bicycles and, later, motorbikes (Sam&apos;s) are the novel&apos;s symbols of
                  village childhood freedom. To have a bike is to have access to Tollington&apos;s
                  lanes, the pond, the fields beyond &mdash; a kind of independence that the
                  children of the village take for granted and that Meena negotiates more
                  cautiously. The bicycle stands for the ordinary, granted freedom of the English
                  child, against which Meena&apos;s more supervised, family-bound childhood is set.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Hospital</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The hospital where Meena recovers from her broken leg is the novel&apos;s most
                  important symbolic interior. It is white, clean, institutional &mdash; a space
                  outside both the village and the home. In it, Meena is forced into stillness; she
                  is treated by an Indian doctor; she is visited by her family; she is separated
                  from Anita. The hospital becomes the novel&apos;s threshold space: the room in
                  which one identity (the wild Tollington child) is set down and another (the
                  Wolverhampton grammar-school girl, the writer-to-be) is picked up.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Village Fete</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The fete is the novel&apos;s most public set-piece and its most concentrated
                  symbol of Englishness. Bunting, cake stalls, sack races, the chapel, the war
                  memorial: it is Tollington at its most self-consciously communal. Sam&apos;s
                  racist outburst at the fete is therefore doubly devastating: the racism is uttered
                  inside the very ritual by which the village imagines itself as innocent. Syal uses
                  the setting to argue that English nostalgia and English racism are not opposed but
                  bound together.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="AQA-Style Exam Questions with Plans" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five practice questions in the AQA GCSE English Literature style, each anchored to the
              relevant Assessment Objectives: <strong>AO1</strong> (informed personal response,
              accurate reference), <strong>AO2</strong> (writer&apos;s methods and effects), and{' '}
              <strong>AO3</strong>
              (relationships between text and context). On the AQA paper, AO4 (technical accuracy)
              is also assessed.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. How does Syal present Meena&apos;s changing sense of identity in{' '}
                  <em>Anita and Me</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal traces Meena&apos;s movement from a child who tries to choose between
                      English-ness and Indian-ness to an adolescent who begins, painfully, to
                      inhabit both at once.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The early imitation of Anita (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Discuss Meena&apos;s lying, her wanting tomato-sauce sandwiches, her use of
                      &lsquo;wench&rsquo;. Syal&apos;s narrative voice doubles the child&apos;s
                      desire and the adult&apos;s irony.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Nanima&apos;s arrival (AO2 / AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Punjabi inheritance becomes available not as embarrassment but as authority.
                      Connect to the post-Partition Punjabi diaspora.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The fete and Sam&apos;s outburst (AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Meena&apos;s identity is forced into focus by being attacked. Locate this in
                      post-Powell, Heath-era Britain.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The hospital and grammar school (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Bildungsroman&apos;s threshold: Meena emerges as a writer-narrator,
                      hyphenated by choice rather than confusion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal suggests that identity is not a single answer but an ongoing translation
                      &mdash; and that the novel itself is the form proper to that work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Syal explore the friendship between Meena and Anita?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The friendship is presented as both love and use: Meena loves Anita but also
                      wants to <em>be</em> her, and the novel charts the slow recognition of how
                      unequal and damaging that desire is.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Anita as glamour (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The vanity bag, the swearing, the cruelty as power. Syal&apos;s style: short
                      sharp sentences for Anita; lyrical, discursive ones for the world Anita
                      ignores.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Tracey (AO2 / AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tracey is the cost of Anita&apos;s world. Her near-drowning is a structural
                      turning point. Connect to the novel&apos;s realism about working-class
                      childhood damage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Anita and Sam (AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Anita&apos;s alignment with Sam after his racist outburst is the
                      friendship&apos;s death. Locate in the politics of 1970s skinhead culture.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Syal&apos;s refusal to villainise Anita (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Bildungsroman recognises Anita as a fellow child, equally caught in forces
                      larger than herself. The novel&apos;s tenderness is part of its argument.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. How does Syal present racism in <em>Anita and Me</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Syal presents racism not as an aberration but as an ordinary, everyday English
                      phenomenon &mdash; a continuum running from polite paternalism to skinhead
                      violence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; &lsquo;Polite&rsquo; racism: Mr Ormerod (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sentimental Christianity, missionary collections, friendly condescension. Syal
                      exposes the racism inside good manners.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Violent racism: Sam at the fete (AO2 / AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The public stage of the fete; the slurs; the attack. Locate in post-Powell,
                      post-1971-Immigration-Act Britain.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Internalised racism: Meena (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The desire to be blonder, to eat the village&apos;s food, to be unmarked. Syal
                      shows racism&apos;s deepest work is on the self-image of its targets.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The Kumars&apos; resistance (AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Composure, the Aunties&apos; gatherings, eventually departure. Syal portrays
                      community as the principal answer to racist isolation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Syal use the setting of Tollington to develop the novel&apos;s ideas?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tollington is presented as a specific, working-class, ex-mining village whose
                      decline and nostalgia are essential to the novel&apos;s analysis of identity
                      and racism.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The pit cottages and the lost pits (AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Locate in the early-1970s decline of British coal. The village&apos;s economic
                      loss is the soil in which its racism grows.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The pond and the dangerous &lsquo;outside&rsquo; (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The village&apos;s spaces (pond, fields, lanes) are presented as both
                      childhood freedom and concealed risk. Tracey&apos;s near-drowning literalises
                      this.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The fete (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Englishness staging itself: bunting, chapel, war memorial, cake stalls. The
                      irony of Sam&apos;s outburst inside this ritual.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The Kumars&apos; departure (AO2 / AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The motorway, the suburbs of Wolverhampton, the grammar school. Tollington as
                      a place that the novel both loves and outgrows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. How does Syal present family and cultural inheritance in <em>Anita and Me</em>?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (AO1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Family is presented as the primary structure that sustains Meena against the
                      village&apos;s pressures &mdash; not as a static tradition but as a living,
                      evolving inheritance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Mama and Papa (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The household&apos;s rituals: cooking, the Aunties&apos; parties, Papa&apos;s
                      ghazals. Syal&apos;s style shifts to mark the home&apos;s music and warmth.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Nanima (AO2 / AO3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Untranslated Punjabi as inheritance. Locate in post-Partition Punjabi diaspora
                      and in the 1970s Britain that has no language for what Nanima carries.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Sunil (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The next generation; Meena&apos;s growing protectiveness; family as future as
                      well as past.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Storytelling as inheritance (AO2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel itself as Meena&apos;s contribution to the chain of stories &mdash;
                      Papa&apos;s songs, Nanima&apos;s tales, the Aunties&apos; gossip, Meena&apos;s
                      lies, this book.
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
          Exam Tips for <em>Anita and Me</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Be precise about period.</strong> The novel is set in the early 1970s under
              Heath, after Powell&apos;s 1968 speech &mdash; not in the 1960s, not in the 1980s.
              Anchoring AO3 here is essential.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Distinguish Meera Syal from Meena Kumar.</strong> The novel is
              semi-autobiographical, not memoir. Refer to &lsquo;Syal&apos;s Meena&rsquo; or
              &lsquo;the narrator&rsquo; rather than collapsing the two.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the Bildungsroman frame.</strong> Anita and Me is a coming-of-age novel:
              structure your essays around Meena&apos;s movement from innocence to experience.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Quote accurately or paraphrase confidently.</strong> If you are unsure of
              exact wording, a precisely located paraphrase (&lsquo;at the village fete, Sam attacks
              the Indian bus passenger&apos;) will score higher than a misquotation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Discuss multiple kinds of racism.</strong> Don&apos;t reduce racism in the
              novel to Sam Lowbridge. Ormerod&apos;s paternalism, internalised racism in Meena, and
              the village&apos;s nostalgic Englishness all matter.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Treat Tollington as specific.</strong> Refer to the West Midlands, ex-mining,
              working-class, dialect-speaking specifics &mdash; not a generic English village.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use precise terminology.</strong> &lsquo;Bildungsroman,&rsquo;
              &lsquo;diaspora,&rsquo; &lsquo;hyphenated identity,&rsquo; &lsquo;dual narrative
              voice,&rsquo; &lsquo;dialect&rsquo; &mdash; all earn AO2 marks when used accurately.
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>Anita and Me</em> by Meera Syal was first published by Flamingo in 1996. The novel
          remains in copyright. All quotations on this page are reproduced for educational
          commentary and criticism. Phrases marked <strong>[VERIFY]</strong> should be checked
          against your school&apos;s edition before being reproduced in an exam answer.
        </p>
      </footer>
    </>
  )
}
