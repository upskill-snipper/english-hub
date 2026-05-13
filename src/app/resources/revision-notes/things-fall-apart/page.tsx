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
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function ThingsFallApartPage() {
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
            Cambridge IGCSE
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel A-Level
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Things Fall Apart &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          {tr(`Chinua Achebe (1930&ndash;2013), 1958`)}
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your IGCSE or A-Level English Literature exam on Achebe&rsquo;s
          landmark novel about the Igbo society of Umuofia and the arrival of British colonial rule.
          Three-part structure, 12 character profiles, 7 themes with evidence, key quotations with
          analysis, Igbo cultural detail, historical and post-colonial context, narrative technique,
          and essay planning guidance.
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
            'Igbo Culture',
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
        {/* ─── Plot Summary ─── */}
        <div id="plot-summary">
          <Section title="Plot Summary" icon="📖" defaultOpen>
            <p className="mb-4 text-sm text-muted-foreground">
              The novel is divided into three parts. Part One (chapters 1&ndash;13) is the longest
              and establishes Igbo life in Umuofia in painstaking detail. Parts Two and Three are
              progressively shorter, mirroring how quickly the colonial encounter dismantles a
              culture the novel has spent so long presenting on its own terms.
            </p>

            <h4 className="font-bold mt-4 mb-2 text-primary">
              Part One &mdash; Umuofia (chapters 1&ndash;13)
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong>{tr(`Chapter 1.`)}</strong> Okonkwo is introduced as a famous wrestler and
                warrior whose fame &ldquo;rested on solid personal achievements&rdquo;. His father
                Unoka was a debt-ridden flute-player whom the clan called
                <em> agbala</em> (the same word means &ldquo;woman&rdquo;).
              </li>
              <li>
                <strong>{tr(`Chapter 2.`)}</strong> Umuofia receives word that a daughter of the
                clan has been murdered in the neighbouring village of Mbaino. As compensation,
                Mbaino sends a young virgin and a fifteen-year-old boy,
                <em> Ikemefuna</em>, who is placed in Okonkwo&rsquo;s household.
              </li>
              <li>
                <strong>{tr(`Chapters 3&ndash;4.`)}</strong> Flashback to Okonkwo borrowing yam
                seeds from <em>Nwakibie</em> as a young man, surviving a disastrous farming year,
                and building his wealth despite his father&rsquo;s ruin. His impatience and quick
                temper are flagged early.
              </li>
              <li>
                <strong>{tr(`Chapter 5.`)}</strong> The Feast of the New Yam. Okonkwo, restless
                without work, beats his second wife <em>Ekwefi</em> and shoots at her during the
                festival.
              </li>
              <li>
                <strong>{tr(`Chapter 6.`)}</strong> The wrestling match. Okonkwo&rsquo;s nephew
                <em> Maduka</em> wins; a public spectacle of the values Okonkwo prizes.
              </li>
              <li>
                <strong>{tr(`Chapter 7.`)}</strong> Ikemefuna has lived with Okonkwo&rsquo;s family
                for three years; Nwoye looks up to him &ldquo;like an elder brother&rdquo;. The
                Oracle of the Hills and the Caves declares that Ikemefuna must be killed. The elder{' '}
                <em>Ezeudu</em> warns Okonkwo to take no part. Okonkwo accompanies the men, and when
                the boy runs to him crying &ldquo;My father, they have killed me!&rdquo; Okonkwo
                &mdash; afraid of being thought weak &mdash; cuts him down with his machete.
              </li>
              <li>
                <strong>{tr(`Chapter 8.`)}</strong> Okonkwo cannot eat for two days. Obierika
                rebukes him: the killing was a thing the Earth would not approve.
              </li>
              <li>
                <strong>{tr(`Chapters 9&ndash;11.`)}</strong> Ezinma, Ekwefi&rsquo;s only surviving
                child, falls ill. The priestess <em>Chielo</em> carries her through the night to the
                cave of Agbala. Ekwefi follows in terror; Okonkwo joins her. The scene is one of the
                novel&rsquo;s most lyrical.
              </li>
              <li>
                <strong>{tr(`Chapter 12.`)}</strong> The <em>uri</em> (bride-price ceremony) of
                Obierika&rsquo;s daughter Akueke. A picture of communal celebration that is also a
                record of how Igbo justice and family work.
              </li>
              <li>
                <strong>{tr(`Chapter 13.`)}</strong> The funeral of Ezeudu. Okonkwo&rsquo;s gun
                explodes and accidentally kills Ezeudu&rsquo;s sixteen-year-old son. The killing of
                a clansman is a &ldquo;female&rdquo; crime (inadvertent), so Okonkwo and his family
                are exiled for seven years to his motherland, <em>Mbanta</em>. His compound is burnt
                the morning after.
              </li>
            </ul>

            <h4 className="font-bold mt-6 mb-2 text-primary">
              Part Two &mdash; Mbanta and the missionaries (chapters 14&ndash;19)
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong>{tr(`Chapter 14.`)}</strong> Okonkwo&rsquo;s mother&rsquo;s kinsman
                <em> Uchendu</em> receives him kindly but reminds him: &ldquo;Mother is
                Supreme&rdquo; &mdash; a man flees to his motherland in sorrow.
              </li>
              <li>
                <strong>{tr(`Chapter 15.`)}</strong> Obierika visits and reports the destruction of{' '}
                <em>Abame</em>: a white man rode in on an &ldquo;iron horse&rdquo; (bicycle), the
                village killed him, and three other white men later returned with soldiers and wiped
                out the market.
              </li>
              <li>
                <strong>{tr(`Chapter 16.`)}</strong> Two years later, Obierika returns and reports
                that Christian missionaries have come to Umuofia. Nwoye is among the converts.
              </li>
              <li>
                <strong>{tr(`Chapter 17.`)}</strong> The missionaries in Mbanta ask for land and are
                mockingly granted the Evil Forest, where the abandoned twins are left to die. When
                the church does not fall, the village is unsettled. Nwoye, drawn to the
                missionaries&rsquo; questions about the killing of Ikemefuna and the abandonment of
                twins, leaves his father.
              </li>
              <li>
                <strong>{tr(`Chapter 18.`)}</strong> The church admits <em>osu</em>
                (caste-outcasts), splitting clan opinion. A convert kills a sacred python; village
                punishment is imposed but the convert dies of illness first, which the village reads
                as the gods striking him.
              </li>
              <li>
                <strong>{tr(`Chapter 19.`)}</strong> Okonkwo&rsquo;s exile ends. He thanks his
                mother&rsquo;s kinsmen with a great feast before returning to Umuofia.
              </li>
            </ul>

            <h4 className="font-bold mt-6 mb-2 text-primary">
              Part Three &mdash; Return and collapse (chapters 20&ndash;25)
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong>{tr(`Chapter 20.`)}</strong> Okonkwo returns to a transformed Umuofia. The
                white government has built a court at Umuofia and a District Commissioner tries
                cases &ldquo;in ignorance&rdquo; of Igbo custom. Obierika&rsquo;s lament: &ldquo;he
                has put a knife on the things that held us together and we have fallen apart&rdquo;.
              </li>
              <li>
                <strong>{tr(`Chapter 21.`)}</strong> Mr Brown, the first missionary, befriends the
                elder <em>Akunna</em> and listens. Theological exchanges of comparable seriousness.
                He builds a school and a small hospital.
              </li>
              <li>
                <strong>{tr(`Chapter 22.`)}</strong> Mr Brown leaves on health grounds and is
                replaced by <em>{tr(`Reverend James Smith`)}</em>, who sees no compromise.
                <em> Enoch</em>, an over-zealous convert, unmasks an
                <em> egwugwu</em> (a masked ancestral spirit) at a public festival &mdash; in Igbo
                terms, &ldquo;killing&rdquo; the ancestor. The egwugwu burn the church.
              </li>
              <li>
                <strong>{tr(`Chapter 23.`)}</strong> The District Commissioner invites the Umuofia
                leaders to a meeting, then has them seized, beaten, and held to ransom. Okonkwo is
                among them. Their heads are shaved and they are fined two hundred bags of cowries.
              </li>
              <li>
                <strong>{tr(`Chapter 24.`)}</strong> The clan gathers to decide on war. A court
                messenger arrives to disperse the meeting. Okonkwo beheads him with a machete. The
                crowd lets the other messengers go. Okonkwo realises in that moment that Umuofia
                will not fight.
              </li>
              <li>
                <strong>{tr(`Chapter 25.`)}</strong> The District Commissioner arrives at
                Okonkwo&rsquo;s compound to arrest him. Obierika leads them to the back, where
                Okonkwo&rsquo;s body hangs from a tree. Suicide is, in Igbo custom, an offence
                against the Earth; clansmen cannot touch the body. The Commissioner reflects that
                the story might make &ldquo;a reasonable paragraph&rdquo; in his planned book,{' '}
                <em>The Pacification of the Primitive Tribes of the Lower Niger</em>.
              </li>
            </ul>

            <p className="mt-4 text-sm italic text-muted-foreground">
              The closing image &mdash; Okonkwo&rsquo;s long-resisted death reduced to a footnote in
              someone else&rsquo;s book &mdash; is the novel&rsquo;s central irony. Achebe is
              rebuking exactly the colonial historiography this fictional Commissioner intends to
              write.
            </p>
          </Section>
        </div>

        {/* ─── Characters ─── */}
        <div id="characters">
          <Section title="Characters" icon="👥">
            <CharacterCard
              name="Okonkwo"
              description="Wealthy yam farmer, three-time wrestling champion, leader in Umuofia. Three wives, several children. His public reputation is built on the rejection of everything his father Unoka represented: idleness, debt, cowardice. The flaw is that the rejection is never finished. Okonkwo confuses gentleness with weakness, and his fear of being like his father drives him to participate in Ikemefuna&rsquo;s killing, beat his wives, and ultimately kill the court messenger. Achebe is careful to make him both the cultural exemplar of certain Igbo values (industry, courage, public achievement) and a figure tragically out of step with the values the novel weighs against them (compassion, patience, listening)."
            />
            <CharacterCard
              name="Unoka"
              description="Okonkwo&rsquo;s father. A talented flute-player and amiable conversationalist who could not feed his family, took loans he never repaid, and died of the &lsquo;swelling sickness&rsquo; (probably yaws or oedema). His corpse was carried to the Evil Forest because the disease was an abomination to the Earth. He represents what Okonkwo will spend his life trying not to be &mdash; and, more uncomfortably, the artistic, gentle qualities that the novel does not finally condemn."
            />
            <CharacterCard
              name="Nwoye"
              description="Okonkwo&rsquo;s eldest son. From his earliest scenes he is described as preferring his mother&rsquo;s stories to his father&rsquo;s war tales. His attachment to Ikemefuna is the closest emotional bond he has, and the killing breaks something in him. The Christian hymn he hears in chapter 16 answers the questions that have haunted him &mdash; the abandoned twins, Ikemefuna&rsquo;s death &mdash; and he converts, taking the new name Isaac. Achebe uses him to dramatise how the church recruits where the clan has wounded."
            />
            <CharacterCard
              name="Ikemefuna"
              description="The boy from Mbaino who lives with Okonkwo&rsquo;s family for three years as a peace-pledge. He calls Okonkwo &lsquo;father&rsquo;. The Oracle of the Hills and the Caves orders his death. Okonkwo, told by Ezeudu not to take part, joins the killing-party anyway and strikes the blow when the boy runs to him for protection. The scene is the novel&rsquo;s ethical hinge."
            />
            <CharacterCard
              name="Ezinma"
              description="Ekwefi&rsquo;s only surviving child after nine deaths in infancy &mdash; a suspected ogbanje (a child who repeatedly dies and returns). Ezinma is precocious, fearless, and the daughter Okonkwo loves most openly: he wishes more than once that she had been a boy. Her bond with her mother during the night-journey to Agbala&rsquo;s cave is the novel&rsquo;s most tender sequence."
            />
            <CharacterCard
              name="Ekwefi"
              description="Okonkwo&rsquo;s second wife. Ran from her first husband to marry Okonkwo. Endures repeated infant losses; her devotion to Ezinma is unconditional. The chapter in which she follows Chielo through the night without question shows the kind of courage the novel approves but Okonkwo cannot recognise."
            />
            <CharacterCard
              name="Obierika"
              description="Okonkwo&rsquo;s closest friend and the novel&rsquo;s reflective conscience. He questions practices Okonkwo accepts unthinkingly: he refuses to join the party that kills Ikemefuna, and he asks whether the Earth has not been offended. He is also the bringer of news during Okonkwo&rsquo;s exile, and the novel uses his perspective to deliver the famous line about the knife on the things that held them together."
            />
            <CharacterCard
              name="Ezeudu"
              description="The oldest man in Okonkwo&rsquo;s village and a leader of egwugwu rituals. He warns Okonkwo not to take part in Ikemefuna&rsquo;s killing. His funeral is the scene at which Okonkwo&rsquo;s gun explodes, killing Ezeudu&rsquo;s son and triggering the seven-year exile."
            />
            <CharacterCard
              name="Uchendu"
              description="Okonkwo&rsquo;s maternal uncle in Mbanta. Welcomes Okonkwo into exile and delivers the lesson on the supremacy of the mother: &lsquo;when there is sorrow and bitterness he finds refuge in his motherland&rsquo;. His five-question speech is a corrective to Okonkwo&rsquo;s patriarchal absolutism."
            />
            <CharacterCard
              name="Mr Brown"
              description="The first white missionary in Umuofia. Conciliatory; learns about Igbo religion through long conversations with Akunna, an elder, and refrains from attacking the clan&rsquo;s gods directly. His school and his small hospital draw converts on something other than fear. He withdraws on health grounds before the final crisis."
            />
            <CharacterCard
              name="Reverend James Smith"
              description="Brown&rsquo;s replacement. Doctrinally rigid; sees only good and evil. Encourages confrontation with the clan and presides over the moment Enoch unmasks the egwugwu. Achebe is precise: it is not the church alone but the Smith-style church that finally provokes the clan&rsquo;s armed response."
            />
            <CharacterCard
              name="The District Commissioner"
              description="Unnamed throughout. He arrives at the very end to arrest Okonkwo and finds him already dead. His final reflection &mdash; that Okonkwo&rsquo;s story might make &lsquo;a reasonable paragraph&rsquo; in his book The Pacification of the Primitive Tribes of the Lower Niger &mdash; is the novel&rsquo;s closing irony and its target. Achebe wrote against precisely the kind of book this Commissioner is planning."
            />
          </Section>
        </div>

        {/* ─── Themes ─── */}
        <div id="themes">
          <Section title="Themes" icon="🎭">
            <ThemeCard
              title={tr(`Masculinity and the fear of weakness`)}
              description="Okonkwo&rsquo;s public success is built on the rejection of his father; the rejection becomes a phobia. His &lsquo;whole life was dominated by fear, the fear of failure and of weakness&rsquo;. Crucial line: it is not weakness itself but the fear of being thought weak that makes him kill Ikemefuna. The novel never simply endorses Igbo masculinity (the clan elders themselves disapprove of his rashness) but it shows how a culture that rewards visible strength can corner one of its own most diligent sons."
            />
            <ThemeCard
              title={tr(`Tradition and the question of change`)}
              description="Igbo society is shown as resilient, internally argued, capable of self-criticism. Twins are abandoned; osu are excluded; women can be beaten in some circumstances; the killing of Ikemefuna is contested even before the missionaries arrive. The novel does not stage a pure tradition versus a pure modernity. It shows a society whose own tensions the missionaries are able to exploit. The collapse is double-acted: by Smith-style mission, and by the gaps the clan already had."
            />
            <ThemeCard
              title={tr(`Colonialism, language, and the &lsquo;civilising&rsquo; story`)}
              description="The District Commissioner&rsquo;s book title is the theme spelled out: an entire civilisation reduced to &lsquo;Primitive Tribes of the Lower Niger&rsquo;, and conquest reframed as &lsquo;pacification&rsquo;. Achebe&rsquo;s 1958 reply is the rest of the novel itself. Where Conrad&rsquo;s Heart of Darkness (1899) makes Africans inarticulate, Achebe gives Umuofia a full language of proverbs, kinship terms, ritual, and naming. The form of the novel is the argument."
            />
            <ThemeCard
              title="Religion and worldview"
              description="Igbo religion is polytheistic, integrated into farming, kinship and ancestry, and answerable to the Earth (Ani). Christianity arrives as a competing total system. Achebe contrasts Akunna&rsquo;s sophisticated theology (chapter 21) with Smith&rsquo;s flat dualism. The scene in which the village waits for the lightning that should strike the church but does not is one of several where the novel registers the slow erosion of a worldview by quiet evidence."
            />
            <ThemeCard
              title="Father and son"
              description="Three generations: Unoka (gentle, artistic, broken); Okonkwo (his repudiation); Nwoye (Okonkwo&rsquo;s refusal turned against him). Achebe traces how a father&rsquo;s shame can shape a son&rsquo;s violence and how that violence in turn drives the next son into another father&rsquo;s arms &mdash; in Nwoye&rsquo;s case, the church&rsquo;s. The pattern is psychological and political at once."
            />
            <ThemeCard
              title={tr(`Fate and chi (personal god)`)}
              description="The Igbo concept of chi is the personal &lsquo;god&rsquo; or destiny that walks alongside each person. The narrator notes the proverb that &lsquo;when a man says yes his chi says yes also&rsquo; and reverses it for Okonkwo: a man whose chi said &lsquo;nay&rsquo;. Free will and fate are not separated in Igbo thought as they are in some Western theologies. Okonkwo&rsquo;s downfall is read by the clan partly as bad chi, partly as the Earth&rsquo;s judgement after Ikemefuna and the funeral killing."
            />
            <ThemeCard
              title={tr(`The art of language and the proverb`)}
              description="The novel&rsquo;s most-quoted opening line establishes proverbs as the &lsquo;palm-oil&rsquo; with which words are eaten. Achebe writes English in Igbo rhythms: idiomatic translations rather than glossed Igbo phrases. This is a deliberate political choice. He argued in &lsquo;The African Writer and the English Language&rsquo; (1965) that English could be carried into new territory, and that the new English would be &lsquo;in full communion with its ancestral home but altered to suit new African surroundings&rsquo;."
            />
          </Section>
        </div>

        {/* ─── Key Quotations ─── */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations`)} icon="💬">
            <p className="mb-4 text-sm text-muted-foreground">
              The quotations below are drawn from the standard Heinemann African Writers Series
              edition (1958, reissued 1962 onwards). Page numbers vary between editions; chapter
              references are given. A small number are tagged <strong>[VERIFY]</strong> &mdash; the
              wording is widely cited in this form but you should check it against your school
              edition before using in an exam.
            </p>

            <QuoteCard
              quote="Okonkwo was well known throughout the nine villages and even beyond."
              speaker="Narrator, opening line of chapter 1"
              analysis="The novel&rsquo;s first sentence establishes Okonkwo&rsquo;s public stature and the geographical scope (nine villages of Umuofia). Achebe deliberately opens on a named African man, in a named African society, refusing the anonymous &lsquo;Africa&rsquo; of colonial fiction."
            />

            <QuoteCard
              quote="Among the Ibo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."
              speaker="Narrator, chapter 1"
              analysis="The novel&rsquo;s most famous metaphor for Igbo speech. Palm-oil is essential to Igbo cooking; proverbs are essential to Igbo discourse. Tone matters: this is the narrator speaking with the cultural authority colonial novels denied African speakers."
            />

            <QuoteCard
              quote="His whole life was dominated by fear, the fear of failure and of weakness."
              speaker="Narrator, chapter 2"
              analysis="The most-cited line on Okonkwo&rsquo;s psychology. Fear, not strength, is the engine. Achebe locates the source in Okonkwo&rsquo;s shame at his father, then traces every subsequent action &mdash; the killing of Ikemefuna, the wife-beating, the suicide &mdash; back to it."
            />

            <QuoteCard
              quote="My father, they have killed me!"
              speaker="Ikemefuna, chapter 7"
              analysis="The boy&rsquo;s last words as he runs to Okonkwo for protection. The address &lsquo;my father&rsquo; is the moral weight: Okonkwo has been Ikemefuna&rsquo;s father for three years. The killing that follows is, in the boy&rsquo;s own words, a parricide in reverse. The phrase fixes the act ethically."
            />

            <QuoteCard
              quote="When did you become a shivering old woman, Okonkwo, you, who are known in all the nine villages for your valour in war?"
              speaker="Okonkwo, in interior monologue, chapter 7"
              analysis="Okonkwo asks himself this immediately before striking Ikemefuna. The internal voice uses the language of the clan&rsquo;s gendered insult (&lsquo;old woman&rsquo;) to override his own grief. Achebe shows fear of being seen as weak winning over moral conscience in a single sentence. [VERIFY] exact wording against your edition."
            />

            <QuoteCard
              quote="That boy calls you father. Do not bear a hand in his death."
              speaker="Ezeudu to Okonkwo, chapter 7"
              analysis="The elder warns Okonkwo to stand back from the killing. The clan therefore did not require Okonkwo to participate &mdash; the participation is a private decision driven by his fear of being thought weak. This matters for any essay on whether Igbo culture &lsquo;forces&rsquo; the killing: it does not. Okonkwo chooses."
            />

            <QuoteCard
              quote="Mother is Supreme."
              speaker="Uchendu, chapter 14"
              analysis="The motto behind Uchendu&rsquo;s sermon during Okonkwo&rsquo;s exile in Mbanta. A cultural balance to the patriarchal Umuofia: a man flees to his motherland in sorrow and is healed there. The line undercuts any reading of Igbo culture as monolithically patriarchal."
            />

            <QuoteCard
              quote="The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness and allowed him to stay. Now he has won our brothers, and our clan can no longer act like one. He has put a knife on the things that held us together and we have fallen apart."
              speaker="Obierika, chapter 20"
              analysis="The most quotable diagnosis in the novel and the source of the title&rsquo;s explicit echo (&lsquo;fallen apart&rsquo;). Notice the rhetorical move: Obierika does not blame the colonisers&rsquo; force, but their patience and their wedge. The clan&rsquo;s undoing is internal &mdash; converts, the osu admission, the unmasking &mdash; once the wedge is in."
            />

            <QuoteCard
              quote="An abominable religion has settled among you. A man can now leave his father and his brothers."
              speaker="Uchendu (in Mbanta) on the missionaries, chapter 17"
              analysis="The grievance is not theological in the abstract; it is the dissolution of kinship. Achebe is precise: the church&rsquo;s offence to Igbo culture is that it lets a son walk away from his father&rsquo;s compound. Nwoye is the immediate example. [VERIFY] wording."
            />

            <QuoteCard
              quote="Living fire begets cold, impotent ash."
              speaker="Okonkwo, of Nwoye, chapter 17"
              analysis="Okonkwo&rsquo;s lament for his son. The metaphor is precise: he is the fire, Nwoye the ash. Note the gendered word &lsquo;impotent&rsquo;: the son&rsquo;s gentleness is read as failed manhood. The sentence is also self-condemning &mdash; a fire that produces only ash has produced nothing."
            />

            <QuoteCard
              quote="The story should not be told."
              speaker="Narrator, on Okonkwo&rsquo;s suicide, chapter 25"
              analysis="The clan refuses to handle the body: suicide is an offence to the Earth. The understatement is Achebe&rsquo;s. Compare it with the District Commissioner&rsquo;s contemporaneous reflection that the same death might make &lsquo;a reasonable paragraph&rsquo;. Two ways of telling the same end &mdash; one silent and ritual, one bureaucratic and dismissive. [VERIFY] exact phrasing."
            />

            <QuoteCard
              quote="The story of this man who had killed a messenger and hanged himself would make interesting reading. One could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph, at any rate."
              speaker="The District Commissioner, chapter 25"
              analysis="The novel&rsquo;s closing irony. A man whose interior life Achebe has just spent two hundred and forty pages tracing is reduced, in the colonist&rsquo;s mind, from a chapter to a paragraph. The book the Commissioner intends to write &mdash; The Pacification of the Primitive Tribes of the Lower Niger &mdash; is the kind of writing Things Fall Apart was published in 1958 to answer."
            />

            <QuoteCard
              quote="Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world."
              speaker="W.B. Yeats, &lsquo;The Second Coming&rsquo; (1919) &mdash; epigraph"
              analysis="The novel&rsquo;s title comes from Yeats&rsquo;s post-First-World-War poem about civilisational breakdown. Achebe&rsquo;s use is double-edged: the line fits Umuofia&rsquo;s collapse, but Yeats&rsquo;s poem also imagines a &lsquo;rough beast&rsquo; arriving from the desert &mdash; an image that Western readers in 1958 might project onto Africa. By giving the line back to Igbo experience, Achebe redirects it."
            />
          </Section>
        </div>

        {/* ─── Igbo Culture ─── */}
        <div id="igbo-culture">
          <Section title={tr(`Igbo Culture in the Novel`)} icon="🌾">
            <p className="mb-4 text-sm text-muted-foreground">
              The novel teaches Igbo culture as it goes. Examiners reward students who can name and
              use Igbo terms and explain what they mean to Achebe&rsquo;s argument. The list below
              gives the working vocabulary the novel expects you to read in.
            </p>

            <CharacterCard
              name="Chi"
              description="A person&rsquo;s personal god or spiritual double; loosely, &lsquo;destiny&rsquo;. The proverb &lsquo;when a man says yes his chi says yes also&rsquo; is a near-Igbo equivalent of self-determination. The narrator notes that Okonkwo&rsquo;s chi said &lsquo;nay&rsquo; despite his affirmation &mdash; an unusual reversal that signals tragic mismatch."
            />
            <CharacterCard
              name="Egwugwu"
              description="Masked dancers who embody the ancestral spirits of the clan. They preside at trials and at major ceremonies. To unmask one in public is to &lsquo;kill&rsquo; that ancestor &mdash; the act Enoch performs in chapter 22, which precipitates the burning of the church."
            />
            <CharacterCard
              name="Obi"
              description="The man&rsquo;s personal hut within a compound. Each of Okonkwo&rsquo;s wives has her own hut in his compound, with the obi as the household&rsquo;s public-facing room."
            />
            <CharacterCard
              name="Osu"
              description="A caste of people dedicated to a deity, separated from full clan life. They cannot marry freeborn Igbo, are buried separately, and live near shrines. The church&rsquo;s decision to admit osu (chapter 18) is one of the most concrete ways the new religion offers status to those Igbo society excluded."
            />
            <CharacterCard
              name="Ogbanje"
              description="A child believed to repeatedly die in infancy and return to its mother to die again. Ezinma is suspected of being one. The medicine-man digs up an iyi-uwa (a buried stone) to break the cycle. The episode is one of several in which the novel takes Igbo metaphysics seriously rather than glossing it as superstition."
            />
            <CharacterCard
              name="The Oracle of the Hills and the Caves (Agbala)"
              description="The most powerful spiritual authority in Umuofia, mediated by the priestess Chielo. The Oracle declares that Ikemefuna must be killed; later, Chielo carries Ezinma through the night to Agbala&rsquo;s cave."
            />
            <CharacterCard
              name="Iba and the swelling sickness"
              description="Iba is malarial fever; the &lsquo;swelling sickness&rsquo; that took Unoka was probably yaws or oedematous filariasis &mdash; conditions read by the clan as an abomination of the Earth, requiring burial in the Evil Forest."
            />
            <CharacterCard
              name="Yams and the agricultural year"
              description="Yams are &lsquo;the king of crops&rsquo; and &lsquo;a man&rsquo;s crop&rsquo;. The Feast of the New Yam, share-cropping arrangements, and the year of bad harvest in Okonkwo&rsquo;s youth all use yam-economics as their measure. To grow yams in quantity is to be visibly a man."
            />
          </Section>
        </div>

        {/* ─── Context ─── */}
        <div id="context">
          <Section title={tr(`Historical &amp; Literary Context`)} icon="📜">
            <CharacterCard
              name="Chinua Achebe (1930–2013)"
              description="Born Albert Chinualumogu Achebe in Ogidi, eastern Nigeria. His father was an early Igbo Christian convert; his grandfather kept traditional Igbo beliefs. Educated at the Government College Umuahia and University College Ibadan; first worked at the Nigerian Broadcasting Service. Things Fall Apart (1958) was his first novel. Later novels include Arrow of God (1964) and A Man of the People (1966). Survived the Biafran War (1967–1970) as a propagandist for the secessionist state; afterwards taught at universities in Nigeria and the United States. Died in Boston in 2013."
            />
            <CharacterCard
              name="Setting (late 1890s, eastern Nigeria)"
              description="The novel is set in the closing years of the nineteenth century, on the eve of formal British colonisation. The Royal Niger Company surrendered its charter in 1899; the Protectorate of Southern Nigeria was declared in 1900. The District Commissioner who arrives in Umuofia is an early administrator of that protectorate. The Abame massacre Obierika reports (chapter 15) is Achebe&rsquo;s composite of several real punitive expeditions of the period."
            />
            <CharacterCard
              name="The Christian missions"
              description="By the 1890s, Anglican (Church Missionary Society) and Catholic (Holy Ghost Fathers) missions were active in Igboland. Mr Brown is a fictional figure but typical of the more conciliatory missionary tradition; Smith of the more confrontational. The first Igbo translation of the Bible appeared in 1913; the church&rsquo;s admission of osu is a real and politically loaded historical choice."
            />
            <CharacterCard
              name="Joseph Conrad and Heart of Darkness (1899)"
              description="Achebe&rsquo;s 1975 essay &lsquo;An Image of Africa: Racism in Conrad&rsquo;s Heart of Darkness&rsquo; argues that Conrad&rsquo;s novella reduces Africa to &lsquo;a metaphysical battlefield&rsquo; and Africans to inarticulate background. Things Fall Apart is the prior, narrative reply: it gives an Igbo society its full speech, naming, kinship and history before any European arrives. You can write convincingly about how the novel dismantles the &lsquo;darkest Africa&rsquo; convention by formal means."
            />
            <CharacterCard
              name="W.B. Yeats and the title"
              description="The title is from the second line of W.B. Yeats&rsquo;s &lsquo;The Second Coming&rsquo; (composed 1919, published 1920): &lsquo;Things fall apart; the centre cannot hold&rsquo;. Yeats wrote about post-First-World-War European disorder. Achebe&rsquo;s borrowing is double-edged: the words fit Umuofia&rsquo;s collapse, but Yeats&rsquo;s &lsquo;rough beast slouching towards Bethlehem&rsquo; is itself the kind of dehumanising image of the South that Achebe is writing against. Citing the Yeats source is the easy point; explaining the irony of the borrowing is the higher-grade point."
            />
            <CharacterCard
              name="The African Writers Series"
              description="Heinemann launched its African Writers Series in 1962; Things Fall Apart was the first title (number 1) in the orange-jacketed reprint series, edited initially by Achebe himself. The series carried African writing into classrooms across the Commonwealth. By the time of Achebe&rsquo;s death the novel had sold over twenty million copies and been translated into more than fifty languages."
            />
            <CharacterCard
              name="Nigerian independence (1960) and the post-colonial moment"
              description="Things Fall Apart was published in 1958, two years before Nigerian independence. It is therefore a late-colonial novel, written by a generation that would inherit the post-independence state. Achebe&rsquo;s own later work (especially A Man of the People, 1966) turned to the failures of independent African governments. Read alongside, Things Fall Apart is not a nostalgic plea for a lost Igbo past so much as a refusal of the colonial story about that past."
            />
            <CharacterCard
              name="Language: writing English in Igbo rhythms"
              description="In &lsquo;The African Writer and the English Language&rsquo; (1965) Achebe argued that he chose English because of its reach, but that the English he wrote &lsquo;in full communion with its ancestral home but altered to suit new African surroundings&rsquo; was deliberately Igbo-inflected. The proverbs, the litany of names, the elder&rsquo;s cadences, the untranslated terms (chi, egwugwu, osu) &mdash; all are part of the argument that English can carry, not erase, the cultures it travels into."
            />
          </Section>
        </div>

        {/* ─── Structure ─── */}
        <div id="structure">
          <Section title={tr(`Structure &amp; Narrative Technique`)} icon="🏛️">
            <CharacterCard
              name="Three-part architecture"
              description="Part One (chapters 1–13) is the longest and slowest: the novel takes nearly two-thirds of its length to present Igbo life in Umuofia before any white man appears. Part Two (chapters 14–19) is the exile, where the missionaries enter the frame. Part Three (chapters 20–25) is the return and rapid collapse. The asymmetry is deliberate: the culture takes a long time to build and almost no time to fall."
            />
            <CharacterCard
              name="Free indirect style"
              description="The narrator slides in and out of Okonkwo&rsquo;s consciousness without scare-quotes. When Okonkwo asks himself &lsquo;when did you become a shivering old woman?&rsquo;, the narration is briefly Okonkwo&rsquo;s. This means Achebe can show the gendered self-rebuke as Okonkwo&rsquo;s own thought, without endorsing it. The technique is borrowed from the European realist novel and bent to Igbo material."
            />
            <CharacterCard
              name="Dual perspective on Igbo culture"
              description="The narrator is sympathetic to Igbo society but not uncritical. Twins are abandoned; osu are excluded; Okonkwo&rsquo;s wife-beating is recorded without endorsement. The novel asks the reader to take Igbo culture seriously enough to argue with it. This is the formal answer to Conrad: not idealisation, but full presence."
            />
            <CharacterCard
              name="Proverbs and embedded folktales"
              description="Proverbs are quoted constantly (&lsquo;a man who pays respect to the great paves the way for his own greatness&rsquo;, &lsquo;a chick that will grow into a cock can be spotted the very day it hatches&rsquo;). Embedded folktales &mdash; the tortoise and the birds, told by Ekwefi to Ezinma in chapter 11 &mdash; carry thematic weight (cunning leads to a fall) without breaking the realist surface."
            />
            <CharacterCard
              name="The closing point-of-view shift"
              description="The novel&rsquo;s most striking structural move is the final chapter, where the narration jumps into the District Commissioner&rsquo;s point of view. We have lived with Okonkwo for two hundred and forty pages; now he is &lsquo;the man&rsquo; and his life is &lsquo;a reasonable paragraph&rsquo;. The shift performs the colonial reduction the novel is written to refuse."
            />
          </Section>
        </div>

        {/* ─── Essay Planning ─── */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning`)} icon="✍️">
            <p className="mb-4 text-sm text-muted-foreground">
              Five fully-planned IGCSE/A-Level questions. Each plan gives a working thesis and
              three-paragraph framework with assessment-objective annotations (AO1: knowledge &amp;
              response, AO2: language &amp; structure, AO3: context).
            </p>

            <div className="rounded-lg border border-border bg-muted p-4 mb-3">
              <h4 className="font-bold text-primary mb-2">
                1. &ldquo;Okonkwo&rsquo;s downfall is entirely his own fault.&rdquo; How far do you
                agree?
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Thesis.</strong> Partly: his choices &mdash; killing Ikemefuna, killing the
                messenger &mdash; are decisive. But the choices are made under cultural and
                historical pressures the novel takes seriously, so &lsquo;entirely&rsquo; is too
                strong.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>{tr(`Para 1 (AO1/AO2).`)}</strong> The choices Okonkwo could have made
                differently. Ezeudu&rsquo;s warning before Ikemefuna&rsquo;s death; Obierika&rsquo;s
                refusal to take part. The killing of the messenger is unsupported by the clan in the
                moment.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 2 (AO2/AO3).`)}</strong> The pressures: a culture that publicly
                equates gentleness with effeminacy, and a colonial encounter that breaks the
                clan&rsquo;s unity behind him. Use Obierika&rsquo;s &lsquo;he has put a knife on the
                things that held us together&rsquo;.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 3 (AO2/AO3).`)}</strong> The chi proverb: &lsquo;when a man says
                yes his chi says yes&rsquo; &mdash; reversed for Okonkwo. The Igbo conceptual frame
                already holds individual choice and external destiny in balance, refusing the binary
                the question implies.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4 mb-3">
              <h4 className="font-bold text-primary mb-2">
                2. How does Achebe present the relationship between fathers and sons?
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Thesis.</strong> A three-generation pattern: Unoka, Okonkwo, Nwoye. Each
                son&rsquo;s relation to his father drives the next generation&rsquo;s choices, and
                the pattern is broken only by Nwoye walking out of the compound altogether.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>{tr(`Para 1 (AO1/AO2).`)}</strong> Unoka–Okonkwo: shame as inheritance. The
                opening chapters set Unoka&rsquo;s debts and effeminacy and Okonkwo&rsquo;s reactive
                masculinity.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 2 (AO2).`)}</strong> Okonkwo–Nwoye: violence transmitted as
                scolding and beating. Ikemefuna&rsquo;s death is the breaking point; Nwoye becomes
                the listener Okonkwo cannot.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 3 (AO3).`)}</strong> The mission as an alternative father. Mr
                Brown&rsquo;s school takes Nwoye in; the new name Isaac displaces the patrilineage.
                The pattern shows colonial recruitment working through existing family wounds.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4 mb-3">
              <h4 className="font-bold text-primary mb-2">
                3. To what extent is Things Fall Apart a tragedy?
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Thesis.</strong> Yes, in classical form: a man of public stature destroyed
                by a flaw rooted in fear; the fall registered communally; an ending that withholds
                catharsis. But the tragedy is doubled: it is also the tragedy of a society, not only
                of an individual.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Para 1.</strong> Aristotelian fit: hamartia (fear of weakness), peripeteia
                (the killing of the messenger), anagnorisis (Okonkwo&rsquo;s realisation in the
                moment that the clan will not fight).
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Para 2.</strong> The communal dimension: Obierika&rsquo;s lament is choric.
                Suicide is an offence to the Earth; clansmen cannot touch the body. Ritual silence
                does the work catharsis usually does.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 3 (AO3).`)}</strong> The District Commissioner&rsquo;s closing
                reflection inverts catharsis into bureaucratic erasure. The novel refuses the
                consolation a tragedy traditionally offers, because the colonial project is still in
                motion at the close.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4 mb-3">
              <h4 className="font-bold text-primary mb-2">
                4. How does Achebe use language and form to answer colonial fiction?
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Thesis.</strong> The novel&rsquo;s answer to Conrad is structural, not just
                thematic. Igbo proverbs, untranslated terms, free indirect style giving Okonkwo
                interiority, and the Commissioner&rsquo;s closing point-of-view jump &mdash;
                together they refuse the colonial novel&rsquo;s reduction of Africa to silent
                background.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Para 1.</strong> Proverbs as &lsquo;palm-oil&rsquo;; Igbo terms (chi,
                egwugwu, osu) carried into English without footnotes. The reader is asked to learn
                the culture, not look it up.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Para 2.</strong> Free indirect style giving Okonkwo a full inner life; the
                contrast with Heart of Darkness, where Africans speak only to make Marlow more
                articulate.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 3 (AO3).`)}</strong> The Commissioner&rsquo;s &lsquo;reasonable
                paragraph&rsquo;. The novel ends by quoting the kind of book it has been written to
                refuse. Use Achebe&rsquo;s &lsquo;An Image of Africa&rsquo; (1975) for the explicit
                theory.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4 mb-3">
              <h4 className="font-bold text-primary mb-2">
                5. How important is the role of women in the novel?
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Thesis.</strong> The Umuofian world is patriarchal; the novel does not
                pretend otherwise. But the female figures &mdash; Ekwefi, Ezinma, Chielo, the figure
                of Ani (the Earth) and Uchendu&rsquo;s &lsquo;mother is supreme&rsquo; &mdash; carry
                a counter-pressure the male protagonist cannot recognise but the narrator weighs
                against him.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Para 1.</strong> Ekwefi and Ezinma: courage in the night journey to Agbala.
                The mother-daughter scene is the novel&rsquo;s most tender; courage here is patient,
                not aggressive.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Para 2.</strong> Chielo as priestess of Agbala: female religious authority,
                untouched by Okonkwo&rsquo;s masculinity. The ritual frame the male elders cannot
                interrupt.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{tr(`Para 3 (AO3).`)}</strong> Uchendu&rsquo;s &lsquo;mother is
                supreme&rsquo; speech (chapter 14). The motherland is the place of refuge; the Earth
                (Ani) is the deity Okonkwo&rsquo;s killings have offended. The novel&rsquo;s ethical
                centre is, in this sense, female.
              </p>
            </div>
          </Section>
        </div>

        {/* ─── Grade 9 Points ─── */}
        <div id="grade-9-points">
          <Section title={tr(`Grade 9 / A* Points`)} icon="🌟">
            <ul className="space-y-3 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong>{tr(`The structural irony of the closing chapter.`)}</strong> Achebe spends
                240 pages giving Okonkwo a full interior life, then jumps in the final pages into
                the District Commissioner&rsquo;s consciousness, where Okonkwo is an anonymous
                &lsquo;man&rsquo;. The point-of-view shift is the colonial reduction in formal
                terms.
              </li>
              <li>
                <strong>{tr(`The novel&rsquo;s argument with Yeats.`)}</strong> The title borrows
                Yeats&rsquo;s &lsquo;Things fall apart; the centre cannot hold&rsquo;, but
                Yeats&rsquo;s poem also imagines the &lsquo;rough beast slouching towards
                Bethlehem&rsquo; &mdash; an image of post-imperial dread that colonialism would
                project onto the South. By giving the line back to Igbo experience, Achebe redirects
                it.
              </li>
              <li>
                <strong>{tr(`The reversal of the chi proverb.`)}</strong> &lsquo;When a man says yes
                his chi says yes also&rsquo;; the narrator reverses it for Okonkwo (his chi said
                &lsquo;nay&rsquo;). Igbo metaphysics holds choice and destiny together rather than
                apart, which is why a Western free-will-versus-fate frame mishandles the novel.
              </li>
              <li>
                <strong>{tr(`Achebe&rsquo;s 1965 essay on language as evidence.`)}</strong>
                &lsquo;The African Writer and the English Language&rsquo; defends the use of English
                &lsquo;altered to suit new African surroundings&rsquo;. The novel&rsquo;s proverbial
                style is the practice of the theory; both are part of the answer to colonial
                cultural authority.
              </li>
              <li>
                <strong>{tr(`The asymmetry of the three-part structure.`)}</strong> Part One takes
                thirteen chapters to establish Igbo life; Parts Two and Three take twelve to
                dismantle it. The acceleration is part of the argument: cultures take time to build
                and almost none to break.
              </li>
              <li>
                <strong>{tr(`The Mr Brown / James Smith contrast as historical claim.`)}</strong>
                Mr Brown&rsquo;s school and dialogue with Akunna are not sentimental; they are
                Achebe&rsquo;s acknowledgement that the missions did real educational work and
                recruited some converts on something other than fear. Smith is the alternative. The
                novel locates the final crisis in Smith-style mission and Enoch-style zeal, not in
                the church as such.
              </li>
              <li>
                <strong>{tr(`The novel&rsquo;s internal critique of Igbo society.`)}</strong>
                Twins are abandoned; osu are excluded; Ikemefuna is killed; women are beaten. Achebe
                does not present a paradisal pre-colonial society. The colonial argument is not that
                Umuofia was perfect, but that it was articulate enough to argue with itself before
                the missionaries arrived &mdash; and that the missionaries exploited gaps the clan
                had been arguing about for generations.
              </li>
              <li>
                <strong>{tr(`The Earth (Ani) as the novel&rsquo;s ethical centre.`)}</strong>
                Each of Okonkwo&rsquo;s major transgressions &mdash; killing Ikemefuna, killing
                Ezeudu&rsquo;s son, his suicide &mdash; is read explicitly as an offence against
                Ani. The deity who matters most in the moral accounting is female. This complicates
                any reading of the novel as straightforwardly patriarchal.
              </li>
            </ul>
          </Section>
        </div>

        {/* ─── Practice Questions ─── */}
        <div id="practice-questions">
          <Section title={tr(`Practice Questions`)} icon="📝">
            <ul className="space-y-3 text-sm leading-relaxed list-disc pl-5">
              <li>
                &ldquo;Okonkwo is a victim of his society as much as of himself.&rdquo; Discuss.
              </li>
              <li>
                How does Achebe present the role of women in <em>{tr(`Things Fall Apart`)}</em>?
              </li>
              <li>
                How does Achebe use proverbs and storytelling to give the reader access to Igbo
                culture?
              </li>
              <li>
                {tr(`How does Achebe present the arrival and effect of Christianity in Umuofia?`)}
              </li>
              <li>
                Compare the two missionaries, Mr Brown and Reverend James Smith. What is Achebe
                asking the reader to notice?
              </li>
              <li>
                How does the final chapter change the reader&rsquo;s relationship with Okonkwo?
              </li>
              <li>{tr(`How important is the relationship between Okonkwo and his son Nwoye?`)}</li>
              <li>
                To what extent is <em>{tr(`Things Fall Apart`)}</em> a tragedy in the classical
                sense?
              </li>
              <li>
                How does Achebe answer Joseph Conrad&rsquo;s <em>{tr(`Heart of Darkness`)}</em>{' '}
                through the form of his novel?
              </li>
              <li>
                How does Achebe use Igbo religion (chi, Ani, the Oracle, the egwugwu) to structure
                the moral argument of the novel?
              </li>
            </ul>
          </Section>
        </div>

        {/* ─── Exam Tips ─── */}
        <Section title="Exam Tips" icon="🎯">
          <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5">
            <li>
              <strong>{tr(`Use Igbo terms accurately.`)}</strong> Examiners reward students who can
              name <em>chi</em>, <em>egwugwu</em>, <em>osu</em>, <em>ogbanje</em>,<em> obi</em>, and
              Ani. Don&rsquo;t cluster them ornamentally; use them where the novel uses them.
            </li>
            <li>
              <strong>{tr(`Quote the title&rsquo;s source line and explain the irony.`)}</strong>
              Most candidates know the title comes from Yeats. Few explain that Yeats&rsquo;s poem
              is itself the kind of European framing the novel is writing against. Doing so signals
              AO3 confidence.
            </li>
            <li>
              <strong>{tr(`Cite the closing chapter&rsquo;s point-of-view shift.`)}</strong> If a
              question lets you, end on it: 240 pages of interiority collapsed into &lsquo;a
              reasonable paragraph&rsquo;. The form is the argument.
            </li>
            <li>
              <strong>{tr(`Don&rsquo;t idealise Igbo society.`)}</strong> Achebe doesn&rsquo;t. The
              strongest essays read the novel&rsquo;s own internal criticisms of twins, <em>osu</em>
              , the killing of Ikemefuna &mdash; and use them to show Achebe&rsquo;s argument is
              documentary, not nostalgic.
            </li>
            <li>
              <strong>{tr(`Use Achebe&rsquo;s essays for AO3.`)}</strong> &lsquo;The African Writer
              and the English Language&rsquo; (1965) and &lsquo;An Image of Africa&rsquo; (1975) are
              both short and quotable. Examiners recognise them as canonical context.
            </li>
            <li>
              <strong>Watch the proverb count.</strong> One or two embedded proverbs used
              analytically (not paraded) lift a paragraph. Don&rsquo;t list five.
            </li>
          </ul>
        </Section>

        {/* ─── Footer ─── */}
        <div className="mt-8 rounded-lg border border-border bg-muted p-5 text-xs text-muted-foreground">
          <p>
            <strong>{tr(`Copyright notice.`)}</strong> <em>{tr(`Things Fall Apart`)}</em> is © 1958
            Chinua Achebe / William Heinemann Ltd; rights now held by his estate via Penguin Random
            House. All quotations on this page are short fair-dealing extracts under the Copyright,
            Designs and Patents Act 1988 §30 (criticism, review, quotation). For the full text,
            students should consult an authorised edition (Heinemann African Writers Series; Penguin
            Modern Classics; or your school&rsquo;s set edition).
          </p>
          <p className="mt-2">
            <strong>[VERIFY] tags</strong> in the quotation list flag wording widely cited in this
            form but worth checking against your school edition before quoting in an exam. Page
            numbers are not given here because they vary between editions; chapter numbers are
            stable across all Heinemann and Penguin printings since 1962.
          </p>
        </div>
      </div>
    </>
  )
}
