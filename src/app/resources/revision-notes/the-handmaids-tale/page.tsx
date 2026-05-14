'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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

export default function HandmaidsTalePage() {
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
            A-Level Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Handmaid&apos;s Tale &mdash; Complete A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Margaret Atwood, 1985`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Comprehensive notes for A-Level English Literature: plot summary including the
          &ldquo;Historical Notes&rdquo; coda, character profiles, themes with critical
          interpretation, 15+ key quotations with detailed analysis, contextual material on
          Atwood&apos;s 1980s Reagan-era America, the genre of dystopia, symbol study, and
          exam-style questions with planning guidance.
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
          <Section title={tr(`Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  The Republic of Gilead &mdash; The Present Tense
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel opens in the Rachel and Leah Re-education Centre, a converted gymnasium
                  where Aunts supervise Handmaids in training. Offred, the first-person narrator
                  whose pre-Gilead name is withheld throughout the main narrative, describes the
                  regimented routine, the whispered exchange of names at night, and the Aunts&apos;
                  catechism on female purpose. Gilead is a near-future Christian theocracy that has
                  overthrown the United States government and reorganised society into rigid castes.
                  Following a widespread fertility crisis, the few fertile women are conscripted as
                  Handmaids, assigned to the households of high-ranking Commanders, and ritually
                  raped each month in the hope of producing a child. Offred has been assigned to a
                  Commander whom she addresses as &ldquo;Fred&rdquo; and his wife, Serena Joy. Her
                  own name, &ldquo;Of-Fred,&rdquo; is patronymic, marking her status as his
                  property.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Daily Life in the Commander&apos;s Household
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Offred&apos;s days are structured by shopping trips with her Handmaid partner
                  Ofglen, prayer services, and the monthly &ldquo;Ceremony.&rdquo; She passes the
                  Wall, where executed dissidents are displayed, and notes the &ldquo;Eyes&rdquo;
                  (secret police) circulating in black vans. In her room, she discovers a Latin
                  inscription scratched into the cupboard by her predecessor: &ldquo;Nolite te
                  bastardes carborundorum.&rdquo; The household includes Marthas (domestic servants
                  Cora and Rita), the chauffeur Nick, and Serena Joy &mdash; once a public advocate
                  for women&apos;s confinement to the home, now bitterly trapped within it.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Flashbacks: The Time Before
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Interleaved with present-tense Gilead chapters are Offred&apos;s memories of the
                  world before: her job at a library digitising books, her husband Luke, their
                  daughter, her best friend Moira, and her feminist mother. She recalls the
                  &ldquo;sudden&rdquo; coup &mdash; the President shot, Congress machine-gunned,
                  women&apos;s bank accounts frozen overnight, jobs terminated. She remembers the
                  failed escape with Luke and their daughter to Canada, captured at the border; her
                  daughter taken; Luke&apos;s fate unknown. These analeptic chapters force the
                  reader to reckon with how rapidly civil society can collapse.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Transgressions and Forbidden Pleasures
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Commander begins summoning Offred to his study at night, where they play
                  Scrabble &mdash; an illicit, intimate act, since women are forbidden to read. He
                  gives her old magazines and hand lotion. Serena Joy, desperate for a baby and
                  suspecting the Commander is sterile, arranges for Offred to sleep with Nick, in
                  exchange for news of her daughter. Offred and Nick begin an affair that becomes
                  emotional as well as physical. The Commander takes Offred to Jezebel&apos;s, an
                  underground brothel for officials, where she encounters Moira, who has been
                  recaptured and chosen sex work over the Colonies.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Resistance and Disappearance
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Ofglen reveals herself to be connected to the Mayday resistance and presses Offred
                  for information on the Commander. After a horrifying &ldquo;Particicution&rdquo;
                  (a public execution carried out by Handmaids), Ofglen is replaced by a new Ofglen,
                  who tells Offred the original Ofglen hanged herself before the Eyes could collect
                  her. Serena Joy discovers Offred&apos;s visit to Jezebel&apos;s and confronts her.
                  The novel ends ambiguously: a black van arrives at the house. Nick tells Offred to
                  trust him and that the men are Mayday. Offred cannot know whether this is rescue
                  or arrest. The narrative closes as she steps into the van.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    6
                  </span>
                  Historical Notes (Coda)
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel concludes with the &ldquo;Historical Notes on The Handmaid&apos;s
                  Tale,&rdquo; the partial transcript of a Twelfth Symposium on Gileadean Studies
                  held in 2195 at the University of Denay, Nunavit. Professor Pieixoto explains that
                  Offred&apos;s narrative survived as some thirty audio cassettes discovered in an
                  army-surplus footlocker in what was once Bangor, Maine. He treats her testimony
                  with patronising scepticism, cautions the audience against passing moral judgment
                  upon the Gileadean society, makes jokes about her name and the Underground
                  Femaleroad, and laments that she did not provide more political detail about the
                  regime&apos;s inner workings. Atwood&apos;s coda implicates academia &mdash; and
                  her readers &mdash; in the patriarchal habits of mind that produced Gilead.
                  Offred&apos;s ultimate fate, and her daughter&apos;s, is never confirmed.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Structural Effects
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; The fragmented chronology mimics traumatic memory and the unreliability
                      of testimony
                    </li>
                    <li>
                      &bull; The shift from oral cassette tape to written academic transcript
                      foregrounds questions of textual authority
                    </li>
                    <li>
                      &bull; Pieixoto&apos;s mockery in 2195 echoes the Commanders&apos; in 2005,
                      suggesting misogyny is not safely historical
                    </li>
                    <li>&bull; The deferred ending denies the reader the comfort of resolution</li>
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
                name="Offred"
                description="The narrator and protagonist, a Handmaid assigned to a Commander she addresses as Fred. Her real name is suppressed throughout the main narrative; readers have long inferred that she is the 'June' whispered among names at the Red Centre, but the novel itself never confirms this (the 2017 TV adaptation made the identification explicit). She is in her thirties, formerly married to Luke, mother to a daughter taken from her at the border, and previously worked transferring books to digital format at a library. Her voice is Atwood's central technical achievement: hesitant, self-revising, poetic, deeply ironic. She is neither hero nor martyr but a survivor — complicit at times, paralysed at others, capable of small acts of resistance through wordplay, memory, and her affair with Nick."
              />
              <CharacterCard
                name="The Commander (Fred)"
                description="An older, fatherly figure who is a senior official in the Gilead regime — the novel implies he was involved in its early ideological design but does not confirm a specific role. (The TV series gave him the surname 'Waterford'; the 1985 novel does not.) He summons Offred to his study at night for forbidden Scrabble games, gives her old magazines and hand lotion, and takes her to the underground brothel Jezebel's. He reveals himself as both lonely and self-pitying: he wants intimacy but not equality. Atwood uses him to show how the architects of authoritarianism rationalise their system through bureaucratic complacency."
              />
              <CharacterCard
                name="Serena Joy"
                description="The Commander's wife, a former public figure (a television singer of gospel music and a public advocate for women's traditional role) now silenced by the regime she helped build. Bitter, lonely, often cruel to Offred, she knits endlessly — a bleakly ironic image of feminine confinement — and tends a meticulous garden of tulips and irises. It is Serena who arranges the affair with Nick in the hope of getting Offred pregnant. She is one of Atwood's most chilling creations: a woman whose pre-Gilead campaigning helped produce the cage she now inhabits. Her name is satirical: there is no joy in her household."
              />
              <CharacterCard
                name="Nick"
                description="The household's chauffeur, a Guardian who lives above the garage. Watchful, taciturn, of ambiguous loyalty — possibly an Eye, possibly a Mayday agent, possibly both. He becomes Offred's lover with Serena's consent and develops what appears to be genuine feeling for her. At the novel's end he tells her to trust the men in the van and identifies them as Mayday, but the reader is given no proof. Atwood uses Nick to dramatise the impossibility of trust under totalitarianism: Offred has to choose to believe him, with no guarantee."
              />
              <CharacterCard
                name="Moira"
                description="Offred's best friend from before Gilead — a lesbian, a feminist, sharp-tongued and rebellious. She is sent to the Red Centre, escapes by stealing an Aunt's uniform, and for a time becomes a folk hero among the Handmaids. Offred encounters her again, much later, at Jezebel's, where she has chosen sex work over being shipped to the toxic Colonies. Her former defiance has been worn down. She represents both the most courageous form of individual resistance and its limits: even she can be broken."
              />
              <CharacterCard
                name="Aunt Lydia"
                description="A senior Aunt at the Red Centre, indoctrinator-in-chief. She quotes scripture, supervises the use of cattle prods, and parrots the regime's slogans about women's purpose. Atwood gives her some of the novel's most chilling lines, including the distinction between 'freedom to' and 'freedom from' and the satirical 'Pen Is Envy' joke. She represents the female collaborator whose authority within the system depends on enforcing the subjugation of other women."
              />
              <CharacterCard
                name="Ofglen"
                description="Offred's shopping partner and, eventually, a contact with the Mayday resistance. At first Offred suspects her of being an informant; once trust is established, the two exchange coded political phrases. She participates in the Particicution to spare a fellow rebel from a worse death, then disappears. The replacement Ofglen quietly tells Offred that the original Ofglen hanged herself before the Eyes could collect her. She demonstrates that resistance exists, but is fragile and mortal."
              />
              <CharacterCard
                name="Janine / Ofwarren"
                description="A vulnerable Handmaid who is broken by the regime's pressure. At the Red Centre she is forced to recount her gang rape and is led by Aunt Lydia and the other Handmaids in a chant that it was her fault. She becomes pregnant, is briefly feted as a successful Handmaid, then her baby is declared 'unbaby' and taken from her. By the end she is mentally adrift, holding a tuft of bloody hair after the Particicution. She represents the human cost of internalised oppression."
              />
              <CharacterCard
                name="Luke"
                description="Offred's husband from the Time Before. A divorced man whose first wife Offred displaced, which under Gilead's laws retroactively renders their marriage void and their daughter illegitimate. He is captured during their attempted escape; his fate is never confirmed. In Offred's flashbacks he is loving but somewhat politically obtuse: when she loses her job and her bank account is closed, he tries to reassure her in a way that does not register the gravity of what has happened. Atwood uses him to show how easily even decent men accommodate to women's loss of rights."
              />
              <CharacterCard
                name="The Marthas: Cora and Rita"
                description="The household's domestic servants, named for the New Testament sister of Mary who served Christ practically. Rita is older and resents the presence of a Handmaid in the kitchen; Cora is younger, gentler, and at one point mistakes Offred's collapse for a possible conception. They wear dull green and are women considered infertile. They represent the lower-tier women whose labour sustains the regime, and whose ordinary kindness or hostility shapes Offred's daily survival."
              />
              <CharacterCard
                name="The Eyes"
                description="Gilead's secret police. They drive black vans with the regime's winged-eye insignia and disappear citizens. They are everywhere and nowhere — a panoptic apparatus enforced as much by the fear of informants as by visible patrols. The black van that arrives at the end of the novel may belong to them or to Mayday agents posing as them. The name appropriates the Old Testament motif of the all-seeing 'Eyes of the Lord' — surveillance dressed as theology."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Theocracy and State Control`)}
                description="Gilead's regime fuses religious fundamentalism with totalitarian state power. Atwood draws on the historical pattern of theocratic governments — 17th-century Puritan New England, Khomeini's Iran — to show how scripture can be weaponised to legitimise oppression. The state controls reproduction, language, movement, dress, and reading. Caste is colour-coded (red Handmaids, blue Wives, green Marthas, black Commanders). The 'Salvagings,' 'Prayvaganzas,' and 'Particicutions' show how spectacle and ritual are used to consolidate power. Atwood's epigraph from Genesis 30 (Rachel and Bilhah) shows how theology is selectively quoted to justify a system that the regime's own architects acknowledge is constructed."
              />
              <ThemeCard
                title={tr(`Gender and Patriarchy`)}
                description="The novel anatomises a society organised entirely around the control of women's bodies. Women are stripped of names, work, money, education, and movement, and assigned roles based on reproductive utility. Atwood is careful to show that patriarchy is not simply 'men oppressing women': women like Serena Joy and the Aunts actively enforce the system, often against other women. The Wives perform the Ceremony with the Handmaid pinned between their legs; the Aunts beat the Handmaids; the Marthas police the household. Atwood draws on second-wave feminist insights (especially Andrea Dworkin and Adrienne Rich) but complicates the picture: 'Better never means better for everyone... It always means worse, for some.'"
              />
              <ThemeCard
                title={tr(`Language as Power`)}
                description="Gilead controls language to control thought. Reading and writing are forbidden to women; shop signs are replaced with pictures; the Bible is locked in a wooden box opened only by the Commander. Names are stripped (the Handmaids become 'Of-Fred,' 'Of-Glen'). Doublespeak is everywhere: rape is 'the Ceremony,' executions are 'Salvagings,' brothels are 'Jezebel's.' Offred's narrative is itself a linguistic act of resistance: she hoards words, plays with etymologies ('chair, charity, chastity'), and recites the Latin pun in her wardrobe. The novel argues, with Orwell, that 'if thought corrupts language, language can also corrupt thought' — and the inverse: that to keep language alive is to keep thought alive."
              />
              <ThemeCard
                title={tr(`Memory and Resistance`)}
                description="Memory is Offred's most powerful weapon. Through her flashbacks she keeps her daughter, Luke, Moira, and her mother alive. She also keeps alive the 'Time Before,' refusing to let Gilead colonise her past as well as her present. The narrative's fragmented, non-chronological structure embodies the work of memory under trauma — looping, returning, rewriting. Resistance in the novel is rarely heroic: it is the recital of forbidden words, the kept name, the refusal to forget. Atwood writes against the totalitarian instinct to erase history. Significantly, the novel itself is presented as a kind of recovered testimony — cassette tapes hidden in a footlocker — making the act of remembering and recording the central political action of the book."
              />
              <ThemeCard
                title={tr(`Complicity and Survival`)}
                description="Atwood resists the romance of pure resistance. Offred is not Moira, and she knows it. She enters into the affair with Nick partly out of desire, partly out of terror; she takes Serena's deal; she fails to ask the new Ofglen if she is Mayday, and afterwards is relieved not to know. Her refrain — 'I would like to believe this is a story I'm telling' — captures the survivor's need to distance herself from her own choices. Atwood implies that most of us, under Gilead, would not be martyrs but Offreds: 'Better' people accommodate themselves to power. The novel is unflinching about the moral costs of survival, but refuses to condemn the survivor."
              />
              <ThemeCard
                title={tr(`Religion as Justification`)}
                description="Atwood's Gilead is not anti-religious — it is over-religious in a particular, distorted way. The regime cherry-picks Old Testament passages (Rachel and Bilhah, Jacob's wives) while ignoring Christ's ethics of mercy and the New Testament's egalitarian strands. Bible verses are quoted by the Aunts to justify Handmaid status; the Beatitudes are even rewritten ('Blessed are the silent'). Atwood's targets are not Christianity itself but the political instrumentalisation of religion. She drew specifically on the Christian Right of the Reagan era, which she watched argue for the rollback of women's rights in language indistinguishable from Aunt Lydia's. Religion here is shown as a tool — 'a thing without a hand or a face,' as Offred reflects — that can be picked up by anyone who wants power."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Literary Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Reagan-Era America (1980&ndash;1985)`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Atwood wrote <em>{tr(`The Handmaid&apos;s Tale`)}</em> in West Berlin in 1984,
                  then living near the Iron Curtain. Reagan&apos;s America was a period of resurgent
                  religious conservatism: the Moral Majority, founded by Jerry Falwell in 1979, was
                  lobbying to overturn <em>{tr(`Roe v. Wade`)}</em>, reintroduce school prayer, and
                  roll back the Equal Rights Amendment (which failed to be ratified in 1982).
                  Phyllis Schlafly led the STOP-ERA campaign, arguing publicly that women&apos;s
                  liberation was destroying the family. Atwood has said in interviews that she
                  included nothing in the novel that had not happened somewhere on Earth. Serena Joy
                  is modelled on televangelist figures like Tammy Faye Bakker and Schlafly herself.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Iran and Religious Fundamentalism`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Iranian Revolution of 1979 saw a secular monarchy replaced overnight by the
                  Islamic Republic under Ayatollah Khomeini. Women lost the right to dress as they
                  chose, work in many professions, travel without male permission, or appear in
                  public without veiling. Atwood has cited this as a direct influence: the speed
                  with which a modern, partly-Westernised society could be reorganised around a
                  religious-patriarchal code. Gilead&apos;s sudden coup, frozen bank accounts, and
                  enforced modest dress all draw on this template.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Puritan New England and the Salem Witch Trials
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Atwood is a descendant of Mary Webster, a 17th-century Puritan woman tried for
                  witchcraft in Massachusetts. The novel&apos;s setting in what was Cambridge,
                  Massachusetts is deliberate: Gilead arises in the same New England that birthed
                  American Puritanism and the Salem trials of 1692. The novel is dedicated &ldquo;in
                  memory of Mary Webster and Perry Miller&rdquo; (her Harvard Puritan-studies
                  professor). Aunt Lydia&apos;s rhetoric, the public Salvagings, and the
                  scapegoating of women as sources of social pollution all draw on this historical
                  inheritance.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  &ldquo;Nolite te bastardes carborundorum&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Latin graffito Offred finds in her wardrobe is mock-Latin schoolboy slang
                  &mdash; not real Latin. It translates roughly as &ldquo;Don&apos;t let the
                  bastards grind you down.&rdquo; Atwood has explained that it was a joke phrase she
                  remembered from school. Its presence is a coded message of solidarity from the
                  previous Offred (who, the Commander reveals, hanged herself), but its falseness is
                  also the point: it is a private joke, untranslatable to Gilead, a piece of the
                  pre-regime educated past that the regime cannot read or destroy. The
                  Commander&apos;s ability to translate it &mdash; and his amusement &mdash; is one
                  of the most sinister moments in the novel.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`The Genre of Dystopia: Orwell and Huxley`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is in dialogue with the great 20th-century dystopias: Orwell&apos;s{' '}
                  <em>1984</em>
                  (1949) and Huxley&apos;s <em>{tr(`Brave New World`)}</em> (1932). Atwood inherits
                  Orwell&apos;s interest in totalitarian language control, surveillance, and the
                  rewriting of history; the &ldquo;Historical Notes&rdquo; coda directly echoes the
                  appendix on Newspeak in <em>1984</em>. From Huxley she takes the use of
                  conditioning, drugged passivity, and the spectacle of state-managed sexuality. But
                  Atwood insists her novel is &ldquo;speculative fiction&rdquo; rather than science
                  fiction: every element is drawn from somewhere in human history. Where
                  Orwell&apos;s Winston is broken by torture, Offred is broken (or not) by the
                  everyday: the slow attrition of small humiliations.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Environmental Anxiety and Declining Fertility
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The 1980s saw rising public concern about pollution, nuclear accidents (Three Mile
                  Island in 1979), pesticides, and reproductive toxicity. Atwood attributes
                  Gilead&apos;s fertility crisis to environmental contamination: the
                  &ldquo;Unwomen&rdquo; sent to clean up toxic waste in the Colonies, the high rate
                  of stillbirths and so-called &ldquo;Unbabies.&rdquo; This anchors the novel in
                  concrete 1980s anxieties rather than fantastical premise.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              15+ quotations selected for A-Level analysis. Use these for AO2 (language and form)
              and AO3 (context).
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Nolite te bastardes carborundorum."
                speaker="Inscription in Offred's wardrobe"
                analysis="Mock-Latin schoolboy slang, translated by the Commander as 'Don't let the bastards grind you down.' The phrase is a literal piece of pre-Gilead culture surviving in a private space. It functions as a coded message of solidarity from the previous Offred (who hanged herself), and as a metaphor for resistance through the preservation of language. The fact that it is fake Latin — the pseudo-classical joke of an educated woman — emphasises how thoroughly Gilead has tried, and failed, to erase a literate female past."
              />
              <QuoteCard
                quote="Don't let the bastards grind you down."
                speaker="Offred (translating the Latin)"
                analysis="Once the Commander translates the inscription for Offred, the phrase becomes her interior mantra. The blunt English idiom, set against the elaborate Latin, foregrounds the gap between elite knowledge and ordinary endurance. Atwood uses this register-shift to suggest that survival under tyranny is at once intellectual and visceral — both the wit to encode and the stubbornness to refuse to be ground down."
              />
              <QuoteCard
                quote="Better never means better for everyone, he says. It always means worse, for some."
                speaker="The Commander to Offred"
                analysis="The Commander's defence of Gilead. The chiastic structure ('better... worse') is rhetorically polished but morally chilling: the regime is justified through the language of zero-sum trade-offs. Atwood uses the line to suggest that authoritarian thinking is not crude but seductive — couched in the syntax of reasonableness. The italicised 'some' invites the reader to ask: which 'some'? Always, in the novel, women."
              />
              <QuoteCard
                quote="We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories."
                speaker="Offred"
                analysis="A retrospective reflection on pre-Gilead complacency. The metaphor of 'blank white spaces' and 'gaps between stories' is deeply ironic: what felt like freedom was actually invisibility, and invisibility is what allowed the coup to succeed. Atwood is writing directly to her 1980s reader: the warning is that to be apolitical, to be 'not in the papers,' is to be unprepared when politics comes for you."
              />
              <QuoteCard
                quote="I would like to believe this is a story I'm telling. I need to believe it. I must believe it."
                speaker="Offred"
                analysis="The narrator's central self-revising sentence. The escalating sequence of modal verbs — 'would like... need... must' — performs the rising desperation behind the act of narration. Atwood foregrounds the constructed nature of the narrative even as she insists on its psychological necessity: storytelling as survival. The line connects Offred to centuries of women who told stories to live through what they could not change."
              />
              <QuoteCard
                quote="Pen Is Envy, Aunt Lydia would say, quoting another Centre motto, warning us away from such objects."
                speaker="Offred recalling Aunt Lydia"
                analysis="Atwood's most explicit Freudian joke: the slogan reads as both a parody of feminist analysis and a sound-pun on 'penis envy.' Aunt Lydia uses it to ridicule women's desire to write; Offred, narrating, registers the deeper truth — the pen, not the penis, is the instrument of male power in Gilead. The line crystallises the novel's argument that the patriarchy's deepest theft is the theft of literacy."
              />
              <QuoteCard
                quote="There is more than one kind of freedom, said Aunt Lydia. Freedom to and freedom from. In the days of anarchy, it was freedom to. Now you are being given freedom from. Don't underrate it."
                speaker="Aunt Lydia"
                analysis="Aunt Lydia's most-quoted line, drawing (and distorting) Isaiah Berlin's famous distinction between positive and negative liberty. Atwood uses the Aunt's voice to expose how authoritarian regimes always claim to be liberating: women are 'free from' street harassment, abortion, divorce. The chiasmus is rhetorically neat but conceals the lie that captivity can be a gift."
              />
              <QuoteCard
                quote="A rat in a maze is free to go anywhere, as long as it stays inside the maze."
                speaker="Offred"
                analysis="A devastating metaphor for life under Gilead. The aphorism turns Aunt Lydia's 'freedom from' rhetoric inside out: the appearance of choice within a closed system is not freedom. The image of the rat — vermin, experimental subject, scurrying — also reflects Offred's diminished sense of self. The line is one of Atwood's most epigrammatic critiques of negative liberty."
              />
              <QuoteCard
                quote="Blessed be the fruit."
                speaker="Standard Handmaid greeting"
                analysis="The required greeting between Handmaids, drawn from Luke 1:42 ('Blessed art thou among women, and blessed is the fruit of thy womb'). The response is 'May the Lord open.' The greeting reduces women to their wombs through liturgical formula — every encounter is framed by the regime's reproductive imperative. Atwood's ear for the way real Christian liturgy is plagiarised and twisted by Gilead is one of the novel's sharpest satirical instruments."
              />
              <QuoteCard
                quote="My name isn't Offred, I have another name, which nobody uses now because it's forbidden. I tell myself it doesn't matter, your name is like your telephone number, useful only to others; but what I tell myself is wrong, it does matter."
                speaker="Offred"
                analysis="The narrator's most explicit reflection on naming. The self-correction ('what I tell myself is wrong') models the constant interior negotiation of resistance: rationalising loss, then refusing to rationalise it. The simile 'like your telephone number' is comic in its banality and tragic in its inadequacy: a name is precisely not like a phone number. Atwood places identity-by-naming at the centre of her political analysis."
              />
              <QuoteCard
                quote="I want to steal something."
                speaker="Offred"
                analysis="A starkly simple sentence in a narrative full of qualified ones. Offred's wish is for any small object she could call her own, in a system that has stripped her of property, name, and movement. The line connects desire to theft and to self-recovery: even wanting is, in Gilead, an act of resistance against the regime's claim on every aspect of her life."
              />
              <QuoteCard
                quote="Give me children, or else I die. Am I in God's stead, who hath withheld from thee the fruit of the womb? Behold my maid Bilhah. She shall bear upon my knees, that I may also have children by her."
                speaker="Genesis 30:1–3 (epigraph)"
                analysis="Atwood's first epigraph, from the Old Testament. Rachel's plea, and Jacob's surrogate child by her handmaid Bilhah, is the literal scriptural justification for Gilead's Ceremony. The epigraph anchors Atwood's argument that Gilead is not foreign to the Western tradition but a literal reading of one strand of it. The Wife who 'has children' through her Handmaid is enacting a story already in scripture."
              />
              <QuoteCard
                quote="Context is all."
                speaker="Offred / Pieixoto"
                analysis="A pivot phrase repeated by both Offred and, in the Historical Notes, by Professor Pieixoto. In Offred's mouth it is rueful: any single act can mean its opposite depending on context. In Pieixoto's mouth it is a justification for refusing to judge Gilead. Atwood lets the same words mean almost opposite things in two voices, teaching the reader to read with attention to who is speaking and why."
              />
              <QuoteCard
                quote="We are two-legged wombs, that's all: sacred vessels, ambulatory chalices."
                speaker="Offred"
                analysis="Offred's bitter summary of the Handmaid's status. The juxtaposition of clinical anatomy ('two-legged wombs') with elevated religious diction ('sacred vessels, ambulatory chalices') exposes how Gilead disguises biological reduction as theological honour. The tricolon escalates into Latinate ecclesiastical vocabulary, mimicking the regime's own euphemistic register before turning it back on itself with the ironic 'that's all.'"
              />
              <QuoteCard
                quote="Nothing changes instantaneously: in a gradually heating bathtub you'd be boiled to death before you knew it."
                speaker="Offred"
                analysis="The 'boiled frog' metaphor for the slow erosion of liberty. Atwood is speaking directly to her 1980s reader: the takeover of America did not feel like a takeover at the time. The image is comic-domestic (the bathtub) and lethal — exactly Atwood's tonal signature. The line is one of the novel's clearest political messages: pay attention to small changes."
              />
              <QuoteCard
                quote="Ordinary, said Aunt Lydia, is what you are used to. This may not seem ordinary to you now, but after a time it will. It will become ordinary."
                speaker="Aunt Lydia, recalled by Offred"
                analysis="Aunt Lydia's lesson that the body and mind acclimatise to anything. The triple repetition of 'ordinary' — definition, prediction, certainty — performs the very habituation it describes. Atwood uses this line to articulate one of the novel's central political insights: that authoritarianism survives by becoming familiar. The horror of Gilead is not that it is shocking but that it stops being shocking."
              />
              <QuoteCard
                quote="And so I step up, into the darkness within; or else the light."
                speaker="Offred (final line of her narrative)"
                analysis="The novel's final image before the Historical Notes: Offred steps into the black van. The grammatical alternative ('or else the light') deliberately refuses closure. Atwood gives the reader the choice — capture or rescue, death or freedom — and refuses to confirm. The line places the burden of belief on the reader and connects to Offred's earlier self-storytelling: meaning is what survivors and witnesses make of it."
              />
              <QuoteCard
                quote="As all historians know, the past is a great darkness, and filled with echoes."
                speaker="Professor Pieixoto, Historical Notes"
                analysis="Pieixoto's pompous opening from the 2195 conference. The line is academic in tone but functions as Atwood's meta-commentary: the past — Offred's present — is to be interpreted, archived, and joked over. The 'echoes' are the reader's: Pieixoto's own world is implicated in the patterns Gilead made literal. The line invites the question, 'Are we Pieixoto?'"
              />
              <QuoteCard
                quote="Are there any questions?"
                speaker="Professor Pieixoto (final line of the novel)"
                analysis="The last line of the entire book. The question is rhetorical within the conference but pointed within Atwood's frame: yes, the reader has questions. What happened to Offred? To her daughter? Why is the academic still patronising? The deflation from Offred's lyric prose to a banal academic chair-question is one of Atwood's sharpest formal devices: the testimony is over, but the misogyny that produced it is not."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🔍">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Colour Red`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Handmaids wear red &mdash; the colour of menstrual blood, of fertility, of the
                  scarlet letter worn by Hawthorne&apos;s Hester Prynne (a deliberate Atwood echo,
                  given the New England setting). Red also marks the women as visible from a
                  distance: there is no hiding. Offred reflects that &ldquo;everything except the
                  wings around my face is red: the colour of blood, which defines us.&rdquo; The
                  colour combines biological essentialism, religious shame, and visibility into a
                  single uniform. In contrast, Wives wear blue (the Virgin Mary), Marthas dull
                  green, Aunts brown.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Wall</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Wall, where executed bodies are displayed in white sacks with placards naming
                  their offences, is a public spectacle of state violence. Offred pauses there with
                  Ofglen on every shopping trip, searching among the hooded faces for Luke&apos;s.
                  The Wall encloses what is strongly implied to be a former university campus (the
                  Historical Notes locate the action in Cambridge, Massachusetts), a sardonic
                  juxtaposition of intellectual heritage and execution ground. The motif draws on
                  the public displays of executed criminals at sites such as London Bridge and on
                  the public executions of post-revolutionary Iran.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Eyes / Wings`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The state&apos;s secret police are called the &ldquo;Eyes,&rdquo; their vehicles
                  bear winged-eye logos, and the phrase &ldquo;Under His Eye&rdquo; is the standard
                  greeting. Yet Handmaids&apos; bonnets are designed with white &ldquo;wings&rdquo;
                  that obstruct their own peripheral vision &mdash; women cannot see, but are always
                  seen. Atwood inverts the divine providence of the Old Testament &ldquo;Eyes of the
                  Lord&rdquo; into a panoptic surveillance state.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Flowers and Serena&apos;s Garden`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Serena Joy tends an immaculate garden of tulips and irises &mdash; one of the few
                  activities available to her. The flowers are described in language that
                  recurrently sexualises them (&ldquo;the tulips are red, a darker crimson towards
                  the stem, as if they have been cut and are beginning to heal there&rdquo;). The
                  garden is a displaced site of Serena&apos;s own thwarted fertility and creativity.
                  Atwood draws on the long iconography of women-as-gardens (the{' '}
                  <em>hortus conclusus</em>) to expose Serena&apos;s confinement.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Bath</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Offred&apos;s monthly compulsory bath before the Ceremony is a moment of forced
                  ritual purification that she experiences as humiliation. Yet it is also a rare
                  moment of nakedness, privacy, and contact with her own body: &ldquo;My nakedness
                  is strange to me already.&rdquo; The bath becomes a paradoxical space where state
                  ritual and individual interiority overlap, and where Offred remembers her daughter
                  being bathed.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Scrabble</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Scrabble in the Commander&apos;s study is one of the novel&apos;s sharpest images:
                  a children&apos;s word game becomes erotic and dangerous, because words themselves
                  are forbidden to women. Offred describes the tiles as &ldquo;delicious&rdquo; and
                  &ldquo;like sweets.&rdquo; The motif compresses the novel&apos;s linguistic
                  argument into a single domestic object: literacy as contraband, as intimacy, as
                  bribe.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Latin Graffiti`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The wardrobe inscription &ldquo;Nolite te bastardes carborundorum&rdquo; is the
                  textual ghost of the previous Offred. Like Scrabble, it is a piece of female
                  literacy that the regime cannot read or extinguish. The fact that it is mock-Latin
                  (a schoolboy joke) is part of its meaning: educated, ironic, irreducible to
                  Gilead&apos;s scriptural register.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Ceremony`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The monthly state-sanctioned rape, framed by Genesis 30 and conducted with the
                  Wife pinning the Handmaid by the wrists, is a piece of choreographed theology. By
                  calling it the &ldquo;Ceremony,&rdquo; the regime turns rape into ritual, and
                  ritual into law. Offred&apos;s flat description (&ldquo;What he is fucking is the
                  lower part of my body. I do not say making love, because this is not what
                  he&apos;s doing. Copulating too would be inaccurate&rdquo;) refuses the
                  regime&apos;s euphemism by refusing all available words.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Cassette Tapes`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Historical Notes reveal that Offred&apos;s narrative survives as audio
                  cassettes labelled with old pop song titles (Elvis Presley&apos;s &ldquo;Hound
                  Dog,&rdquo; etc.) hidden in a footlocker. The medium matters: oral testimony,
                  dependent on a particular machine, framed by trivial cultural detritus. Atwood
                  emphasises both the precarity of women&apos;s testimony and the way 1980s pop
                  culture itself becomes a vector for resistance.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level style questions modelled on AQA and OCR specifications, with planning
              guidance. Each plan suggests a thesis, paragraph structure, key quotations, and
              contextual links suitable for AO1 (argument), AO2 (language/form), AO3 (context), and
              AO5 (interpretations).
            </p>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;In <em>{tr(`The Handmaid&apos;s Tale`)}</em>, Atwood exposes the dangers
                  of theocratic government.&rdquo; To what extent do you agree?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atwood&apos;s critique is not of religion as such, but of the political
                      weaponisation of religion. Gilead&apos;s danger lies in how its theology
                      selectively quotes scripture to legitimise pre-existing patriarchal power.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Scripture as instrument
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Genesis 30 epigraph and the Ceremony&apos;s scriptural framing.
                      Bible-as-pretext rather than Bible-as-source. Quote Aunt Lydia&apos;s
                      catechism and the locked Bible box.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Spectacle: Salvagings, Particicutions, Prayvaganzas
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Public ritual as instrument of theocratic control. Foucault on disciplinary
                      spectacle. Compare to Iranian and Puritan public executions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The Commanders&apos; private hypocrisy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Jezebel&apos;s, Scrabble, the Commander&apos;s lipstick gift. The architects
                      of theocracy do not believe its sexual rules apply to themselves. &ldquo;The
                      problem wasn&apos;t only with the women.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Counter-argument and AO5
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Some critics (e.g. Mary McCarthy) argued the novel is too schematic. Counter:
                      Atwood&apos;s strict refusal to invent any practice not historically attested
                      grounds her critique. Reagan&apos;s America, Khomeini&apos;s Iran, Puritan
                      Massachusetts.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atwood&apos;s critique is precise: not religion but its political
                      conscription. The Historical Notes show that even the secular academy in 2195
                      reproduces the same patriarchal interpretive habits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Discuss Atwood&apos;s presentation of women as both victims and perpetrators in{' '}
                  <em>{tr(`The Handmaid&apos;s Tale`)}</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atwood&apos;s feminism is unsparing: she shows that women under patriarchy are
                      not only oppressed by men but actively recruited as enforcers of one
                      another&apos;s oppression.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Serena Joy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Former televangelist who argued women belonged in the home, now confined in
                      one. The bitterness of the woman who got what she campaigned for. Compare
                      Phyllis Schlafly. &ldquo;She doesn&apos;t make speeches anymore. She has
                      become speechless.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The Aunts
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aunt Lydia&apos;s rhetoric of &ldquo;freedom from.&rdquo; Female collaborators
                      with disciplinary authority. Their power exists only within the system that
                      subordinates them. Discuss the cattle prods and the Particicution.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Janine
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Janine&apos;s public confession of her rape, led by Aunt Lydia and chanted by
                      the other Handmaids: &ldquo;Her fault, her fault, her fault.&rdquo; The rape
                      victim made to perform her own blame. Internalised oppression at its most
                      intimate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Offred&apos;s complicity
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Offred is not exempt: she takes Serena&apos;s deal, sleeps with Nick, fails to
                      engage with Mayday at the critical moment. Atwood&apos;s realism: most women
                      are not Moiras. AO5: feminist debates over &ldquo;perfect victim&rdquo;
                      narratives.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atwood refuses to let women off the hook of moral agency, even when their
                      agency is desperately constrained. The novel is the more searing for it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. Explore the significance of language and storytelling in{' '}
                  <em>{tr(`The Handmaid&apos;s Tale`)}</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atwood&apos;s Gilead is built and resisted in language. The control of words
                      is the deepest form of state power, and the preservation of words is the
                      deepest form of resistance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Language as instrument of power
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Newspeak parallels: &ldquo;Salvaging,&rdquo; &ldquo;Ceremony,&rdquo;
                      &ldquo;Particicution,&rdquo; &ldquo;Unwomen.&rdquo; The forbidding of female
                      literacy. Pictograms instead of shop signs. The renaming of women.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Language as resistance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nolite te bastardes carborundorum. Offred&apos;s wordplay (&ldquo;chair,
                      charity, chastity&rdquo;). Scrabble. The hoarded etymologies. Atwood&apos;s
                      argument that to keep language alive is to keep self alive.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The narrative voice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Offred&apos;s self-revising sentences: &ldquo;I would like to believe this is
                      a story I&apos;m telling.&rdquo; The constructed-ness of the narrative.
                      Storytelling as survival. Compare Scheherazade.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The Historical Notes and the question of testimony
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The cassette tapes, the academic transcript, Pieixoto&apos;s mockery. AO5:
                      Linda Hutcheon on &ldquo;historiographic metafiction.&rdquo; Whose voices
                      survive, and how are they read?
                    </p>
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. Compare and contrast Atwood&apos;s presentation of dystopia in{' '}
                  <em>{tr(`The Handmaid&apos;s Tale`)}</em> with that of Orwell in{' '}
                  <em>{tr(`Nineteen Eighty-Four`)}</em>.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both novels diagnose totalitarianism through language, surveillance, and the
                      destruction of individual interiority &mdash; but Atwood&apos;s focus on
                      gendered embodiment marks a decisive feminist intervention in the dystopian
                      tradition.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Shared inheritances
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Surveillance (Big Brother / the Eyes), language control (Newspeak / Gileadean
                      euphemism), the rewriting of history, the appendix-coda structure (the
                      Newspeak appendix and the Historical Notes).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The body as battleground
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Where Orwell&apos;s state controls thought through torture, Gilead controls
                      thought through reproduction. The Ceremony, the Birth Days, the
                      &ldquo;containers.&rdquo; Atwood&apos;s feminist re-reading: the body is
                      always already political.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The protagonist&apos;s defeat
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Winston&apos;s explicit ideological defeat (&ldquo;he loved Big
                      Brother&rdquo;) versus Offred&apos;s ambiguous fate. Atwood refuses
                      Orwell&apos;s closure. AO5: which is more frightening &mdash; certainty of
                      defeat or unresolved disappearance?
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The reader&apos;s implication
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pieixoto&apos;s 2195 mockery of Offred&apos;s testimony has no clear Orwellian
                      parallel: it implicates the reader&apos;s present. Atwood asks whether we are
                      Pieixoto. Compare Huxley&apos;s soft dystopia in{' '}
                      <em>{tr(`Brave New World`)}</em> and Le Guin&apos;s anti-dystopia in{' '}
                      <em>{tr(`The Dispossessed`)}</em>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. &ldquo;The Historical Notes do not relieve the novel&apos;s bleakness; they
                  extend it.&rdquo; Discuss.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The Historical Notes are often misread as offering hope (Gilead has fallen).
                      In fact they extend the novel&apos;s critique into the implied present: the
                      misogyny of 2195 is the misogyny of 1985 in academic dress.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The apparent relief
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Concede the surface reading: Gilead is gone, replaced by a multicultural
                      academy in Nunavit, with female professors. The regime did fall.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Pieixoto&apos;s misogyny
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      His joking puns at the conference, his audible preference for the
                      Commanders&apos; political detail over Offred&apos;s personal testimony, his
                      repeated framing of her narrative as &ldquo;the document.&rdquo; The academic
                      patriarchy reproduces Gilead&apos;s own habits in milder form.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; &ldquo;We must be cautious about passing moral
                      judgment&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pieixoto&apos;s insistence on contextual relativism. The professional
                      historian&apos;s habit of refusing to condemn. Atwood&apos;s sharpest rebuke:
                      when even atrocity is filed under &ldquo;context,&rdquo; the future is not
                      safe.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Form and reader address
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The shift from Offred&apos;s lyric voice to Pieixoto&apos;s academic prose
                      forces the reader to feel the loss. The final &ldquo;Are there any
                      questions?&rdquo; redirects every question outward to us. AO5: structurally,
                      the coda is not relief but indictment.
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
          Exam Tips for The Handmaid&apos;s Tale
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Atwood&apos;s own framing.`)}</strong> She insists the novel is
              &ldquo;speculative&rdquo; not &ldquo;science&rdquo; fiction &mdash; nothing in it has
              not happened on Earth. Cite this for AO3.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote precisely.`)}</strong> Atwood&apos;s lines &mdash; especially the
              chiasmuses and self-revisions &mdash; reward close attention. Don&apos;t paraphrase:
              quote.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always include the Historical Notes.`)}</strong> They are part of the
              novel and frequently come up in essay questions about narrative structure and reader
              address.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Connect form and content.`)}</strong> The fragmented, non-chronological
              narrative <em>is</em> the trauma it describes. Comment on form, not just plot.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use comparative dystopias.`)}</strong> Orwell, Huxley, Zamyatin, Le Guin,
              Ishiguro&apos;s <em>{tr(`Never Let Me Go`)}</em>. AO5 examiners reward genre-aware
              reading.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Distinguish Atwood&apos;s feminism from a one-note one.`)}</strong>{' '}
              Serena Joy and the Aunts complicate any simple &ldquo;men bad / women good&rdquo;
              reading.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`The Handmaid&apos;s Tale`)}</em> by Margaret Atwood was first published in 1985.
          The novel is in copyright; quotations are reproduced for educational purposes under
          fair-dealing provisions for criticism and review.
        </p>
      </footer>
    </>
  )
}
