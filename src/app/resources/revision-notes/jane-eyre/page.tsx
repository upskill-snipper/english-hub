'use client'

import { useState } from 'react'
import { AITextArea } from '@/components/AITextArea'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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
    <div className="rounded-lg border-l-4 border-border bg-muted/50 p-4 mb-3">
      <p className="text-sm font-semibold text-foreground italic">&ldquo;{quote}&rdquo;</p>
      {speaker && (
        <p className="mt-1 text-xs font-medium text-muted-foreground">&mdash; {speaker}</p>
      )}
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
    <div className="rounded-lg border border-border bg-muted/30 p-4 mb-3">
      <h4 className="font-bold text-foreground">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function JaneEyrePage() {
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
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            19th-Century Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Jane Eyre</h1>
        <p className="mt-1 text-lg text-muted-foreground">Charlotte Bront&euml;, 1847</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A groundbreaking Bildungsroman tracing the moral and spiritual development of its orphaned
          heroine from childhood abuse to independent womanhood. Jane Eyre challenged Victorian
          conventions of gender, class, and religion, giving voice to a plain, poor, and passionate
          woman who insists on equality in love and life. The novel blends Gothic suspense, social
          realism, and a fierce first-person narrative that shocked and captivated its original
          audience.
        </p>
      </div>

      {/* Chapter Summary by Location */}
      <Section title={tr(`Chapter Summary by Location`)} icon="📖" defaultOpen>
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Gateshead (Chapters 1&ndash;4)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">Chapter 1: The Red Room Prelude</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ten-year-old orphan Jane lives with her cruel aunt, Mrs Reed, and three cousins at
                  Gateshead Hall. John Reed bullies Jane, throwing a book at her head. Jane fights
                  back for the first time, declaring the injustice of her treatment. She is punished
                  by being locked in the red room &mdash; the chamber where her uncle died.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">{tr(`Chapter 2: The Red Room`)}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Imprisoned in the red room, Jane sees what she believes is her uncle&apos;s ghost.
                  She screams in terror and is ignored by the servants. The red room symbolises
                  Jane&apos;s entrapment, powerlessness, and the suppression of her passionate
                  nature. She faints from fear and distress. This traumatic episode establishes the
                  Gothic atmosphere and Jane&apos;s status as an imprisoned, voiceless child.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 3&ndash;4: Escape from Gateshead`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The apothecary Mr Lloyd suggests Jane be sent to school. Jane confronts Mrs Reed
                  in a powerful speech: &ldquo;You think I have no feelings&hellip; I shall remember
                  how you thrust me back.&rdquo; Mr Brocklehurst, the hypocritical head of Lowood
                  School, visits and interrogates Jane about her character. Mrs Reed tells him Jane
                  is deceitful. Jane leaves Gateshead, asserting her first act of independence.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Lowood Institution (Chapters 5&ndash;10)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 5&ndash;6: Arrival and Helen Burns`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane arrives at Lowood, a charity school for orphans. Conditions are harsh: burnt
                  porridge, freezing dormitories, and cruel discipline. She meets Helen Burns, a
                  deeply religious girl who endures punishment with patience and forgiveness. Helen
                  introduces Jane to Christian stoicism, offering an alternative to Jane&apos;s
                  fierce resistance. Miss Temple, the kind superintendent, provides a model of
                  dignified female authority.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 7&ndash;8: Public Humiliation`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brocklehurst visits Lowood and publicly brands Jane a liar, making her stand on a
                  stool before the school. Helen passes and gives Jane a subtle smile of support.
                  Miss Temple investigates and clears Jane&apos;s name by writing to Mr Lloyd.
                  Brocklehurst&apos;s hypocrisy is exposed: he preaches austerity for the girls
                  while his own wife and daughters arrive in furs and silks. Bront&euml; satirises
                  Evangelical hypocrisy through him.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapter 9: The Typhus Epidemic and Helen&apos;s Death`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A typhus epidemic sweeps Lowood, killing many pupils due to the school&apos;s
                  neglect. Helen Burns dies of consumption (tuberculosis) in Jane&apos;s arms,
                  speaking of her faith in heaven. Her death profoundly shapes Jane&apos;s character
                  &mdash; she absorbs Helen&apos;s patience and self-control but never fully adopts
                  her passive acceptance. The epidemic leads to an investigation and reform of the
                  school.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapter 10: Leaving Lowood`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane spends eight years at Lowood &mdash; six as a pupil, two as a teacher. After
                  Miss Temple marries and leaves, Jane feels restless and yearns for freedom. She
                  advertises for a position as a governess and receives a reply from Thornfield
                  Hall. Before leaving, she is visited by Bessie, the former Gateshead servant, who
                  tells her that a paternal uncle (John Eyre) came looking for her.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Thornfield Hall (Chapters 11&ndash;27)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 11&ndash;12: Arrival and Restlessness`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane arrives at Thornfield and meets Mrs Fairfax, the housekeeper, and
                  Ad&egrave;le Varens, her young pupil (Rochester&apos;s ward). The house is grand
                  but mysterious. Jane hears strange laughter from the third storey, attributed to
                  the servant Grace Poole. Jane paces the third-floor corridor, reflecting on
                  women&apos;s need for action and intellectual stimulation &mdash; a key feminist
                  passage.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 13&ndash;15: Meeting Rochester`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane meets Edward Rochester when his horse slips on ice and she helps him. He is
                  brusque, unconventional, and intrigued by Jane&apos;s directness. Their
                  conversations are intellectual sparring matches between equals. Rochester confides
                  in Jane about Ad&egrave;le&apos;s mother, C&eacute;line Varens, a French opera
                  dancer who betrayed him. One night, Jane saves Rochester&apos;s life when his bed
                  curtains catch fire &mdash; set alight by the mysterious third-storey occupant.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 16&ndash;18: Blanche Ingram and Jealousy`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rochester leaves and returns with a party of fashionable guests, including the
                  beautiful Blanche Ingram. Jane is tormented by jealousy but forces herself to draw
                  portraits comparing her plain face with Blanche&apos;s beauty. Blanche is revealed
                  as shallow, mercenary, and cruel &mdash; she mocks governesses openly. Rochester
                  appears to court Blanche but shows no genuine affection. A mysterious stranger, Mr
                  Mason, arrives from the West Indies.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 19&ndash;20: The Gypsy and Mason&apos;s Attack`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rochester disguises himself as a gypsy fortune-teller to probe Jane&apos;s
                  feelings. Jane is not deceived and is angry at the deception. That night, Mason is
                  attacked and bitten on the third storey. Rochester secretly tends to him and sends
                  him away before dawn, begging Jane to trust him. The violence and secrecy deepen
                  the Gothic mystery of Thornfield.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 21&ndash;22: Return to Gateshead`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane returns to Gateshead where Mrs Reed lies dying. Mrs Reed confesses that she
                  told Jane&apos;s uncle John Eyre that Jane was dead, depriving Jane of a potential
                  inheritance. Jane forgives her aunt, but Mrs Reed dies unrepentant. Jane returns
                  to Thornfield, and Rochester hints at his feelings during a moonlit garden
                  conversation. The chapter establishes Jane&apos;s capacity for forgiveness and her
                  growing emotional bond with Rochester.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">{tr(`Chapter 23: The Proposal`)}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In the orchard on Midsummer Eve, Rochester asks Jane to marry him. Jane initially
                  believes he is mocking her, as she expects him to marry Blanche. When she realises
                  his sincerity, she accepts. Jane delivers her famous speech: &ldquo;Do you think,
                  because I am poor, obscure, plain, and little, I am soulless and heartless?&rdquo;
                  A lightning bolt strikes the chestnut tree, splitting it in two &mdash; a Gothic
                  omen of the fractured relationship to come.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 24&ndash;25: Wedding Preparations and Omens`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rochester showers Jane with gifts and tries to dress her in finery; Jane resists,
                  uncomfortable with being made into a doll or possession. She insists on
                  maintaining her independence by continuing as Ad&egrave;le&apos;s governess. The
                  night before the wedding, Jane has disturbing dreams and wakes to find a
                  terrifying figure in her room, ripping her wedding veil in two. Rochester
                  dismisses it as a dream, but Jane knows what she saw.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 26&ndash;27: The Impediment and Departure`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  At the altar, a solicitor halts the wedding: Rochester is already married to
                  Bertha Mason, a Creole woman from Jamaica, now confined to Thornfield&apos;s third
                  storey as a violent lunatic. Rochester shows the wedding party Bertha, who attacks
                  him. He argues that his marriage was arranged by his father for money and that
                  Bertha&apos;s madness makes his marriage void. He begs Jane to live with him as
                  his mistress in the south of France. Jane refuses &mdash; despite her love, she
                  will not compromise her moral principles or self-respect. She leaves Thornfield in
                  the dead of night.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Moor House / Morton (Chapters 28&ndash;35)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 28&ndash;29: Destitution and Rescue`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane wanders the moors, starving and sleeping outdoors. She begs for food and is
                  refused. On the point of death, she collapses on the doorstep of Moor House (Marsh
                  End), home of St John, Diana, and Mary Rivers. St John reluctantly takes her in.
                  Jane gives a false name &mdash; &ldquo;Jane Elliott&rdquo; &mdash; to conceal her
                  identity. Her destitution demonstrates the vulnerability of women without family,
                  money, or connections in Victorian society.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  Chapters 30&ndash;32: Recovery and the Village School
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane recovers and finds companionship with Diana and Mary Rivers. St John secures
                  her a position as teacher of the village school at Morton. Jane finds the work
                  humble but fulfilling. She befriends Rosamond Oliver, a local heiress whom St John
                  clearly loves but refuses to pursue because she would distract him from his
                  missionary calling. Jane begins to rebuild her life through honest work and
                  self-reliance.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 33&ndash;34: The Inheritance and St John&apos;s Proposal`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  St John discovers Jane&apos;s true identity and reveals that their uncle, John
                  Eyre, has died and left Jane twenty thousand pounds. Jane is overjoyed to discover
                  that the Rivers siblings are her cousins. She insists on dividing the inheritance
                  equally four ways. St John asks Jane to marry him and accompany him as a
                  missionary to India. His proposal is cold and dutiful &mdash; he does not love
                  Jane but considers her useful. Jane recognises that marriage to St John would
                  destroy her spirit.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapter 35: &ldquo;Jane! Jane! Jane!&rdquo;`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  St John intensifies his pressure on Jane to accept his proposal, using religion as
                  emotional manipulation. Jane nearly succumbs, but at the crucial moment she hears
                  Rochester&apos;s voice calling her name across the moors: &ldquo;Jane! Jane!
                  Jane!&rdquo; This supernatural or psychological event breaks St John&apos;s hold
                  over her. Jane resolves to return to Thornfield and discover what has become of
                  Rochester.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Ferndean (Chapters 36&ndash;38)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapter 36: Return to Rochester`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane returns to find Thornfield Hall a burned ruin. She learns that Bertha Mason
                  set the fire and leapt from the roof to her death. Rochester tried to save the
                  servants and Bertha, losing his sight and his left hand in the blaze. Jane finds
                  Rochester at Ferndean, a remote manor house. He is blind, scarred, and broken
                  &mdash; physically diminished but morally humbled.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 37&ndash;38: Reunion and Marriage`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jane and Rochester are reunited. The power dynamic has shifted &mdash; Jane is now
                  financially independent and Rochester is dependent on her. They marry as equals.
                  Rochester confesses that he called out Jane&apos;s name in despair, and she heard
                  him at exactly that moment. After two years, Rochester partially regains his
                  sight, enough to see their first child. The novel ends with Jane&apos;s famous
                  declaration: &ldquo;Reader, I married him.&rdquo; St John&apos;s letter from
                  India, where he is dying in missionary service, closes the novel, contrasting his
                  self-denying path with Jane&apos;s fulfilment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Character Analysis */}
      <Section title={tr(`Character Analysis`)} icon="👤">
        <div className="grid gap-4 sm:grid-cols-2">
          <CharacterCard
            name="Jane Eyre"
            description="The novel's narrator and protagonist. Jane is passionate, morally principled, and fiercely independent. Orphaned and abused, she refuses to accept the submissive role Victorian society assigns to poor, plain women. Her journey traces a balance between passion and reason, desire and duty. She rejects Rochester when accepting him would compromise her self-respect, and rejects St John when accepting him would crush her spirit. Jane's plainness is central to Bront&euml;'s argument: worth is not determined by beauty, birth, or wealth. She insists on being treated as Rochester's equal &mdash; 'as if both had passed through the grave, and we stood at God's feet, equal &mdash; as we are!' Jane is both a Romantic heroine (driven by feeling) and a moral agent (governed by principle)."
          />
          <CharacterCard
            name="Edward Rochester"
            description="Master of Thornfield Hall. Rochester is a Byronic hero: brooding, passionate, morally flawed, and haunted by a secret past. His marriage to Bertha Mason was arranged for money; he has since lived a dissolute life, taking mistresses across Europe. He genuinely loves Jane but deceives her by concealing his existing marriage. His attempt to make Jane his mistress reveals his willingness to compromise her morality for his own happiness. His blinding and maiming in the Thornfield fire can be read as symbolic punishment for his deceptions, or as the necessary humbling that allows a truly equal marriage. He is restored only after repenting and praying for the first time."
          />
          <CharacterCard
            name="St John Rivers"
            description="Jane's cousin, a clergyman preparing for missionary work in India. St John is handsome, cold, and rigidly self-disciplined. He suppresses his love for Rosamond Oliver because she would distract from his vocation. His proposal to Jane is framed as religious duty, not love: he wants a useful helpmate, not a wife. He represents the danger of religious fanaticism &mdash; his God is one of duty and sacrifice, not compassion or love. Jane recognises that marriage to St John would be spiritual death: 'If I join St John, I abandon half myself.' He serves as a foil to Rochester: where Rochester is all passion, St John is all repression. Bront&euml; critiques both extremes."
          />
          <CharacterCard
            name="Mrs Reed"
            description="Jane's maternal aunt who raises her at Gateshead out of obligation to her dying husband. Mrs Reed is cold, unjust, and vindictive. She favours her own spoilt children (especially the bullying John) and punishes Jane for asserting herself. She tells Brocklehurst that Jane is deceitful and later conceals Jane's uncle's letter, depriving her of an inheritance. Even on her deathbed, Mrs Reed refuses to forgive Jane or ask for forgiveness. She represents the cruelty of class prejudice within the family: Jane is punished for being a dependent relation, not a true family member."
          />
          <CharacterCard
            name="Helen Burns"
            description="Jane's friend at Lowood, based on Charlotte Bront&euml;'s own sister Maria. Helen is intelligent, deeply religious, and endures unjust punishment with patience, turning the other cheek as a matter of Christian principle. She believes in an afterlife where earthly suffering is redeemed. Her death in Jane's arms is one of the novel's most moving scenes. Helen offers Jane a spiritual education that tempers her fierce rebelliousness. Jane absorbs Helen's self-control and patience but never fully accepts her passive submission to injustice. Helen's gravestone, initially unmarked, eventually bears the word 'Resurgam' ('I shall rise again')."
          />
          <CharacterCard
            name="Bertha Mason"
            description="Rochester's first wife, a Creole woman from Jamaica, confined to Thornfield's third storey. Bertha is described as violent, animalistic, and insane. She functions as the Gothic 'madwoman in the attic' &mdash; a dark double for Jane, representing uncontrolled female passion. Feminist critics (notably Jean Rhys in 'Wide Sargasso Sea') have reinterpreted Bertha as a victim: forcibly married, removed from her homeland, imprisoned, and silenced. Her racial and colonial identity raises questions about Bront&euml;'s treatment of race. Rochester's account of her 'madness' is unreliable &mdash; we never hear Bertha's side. Her destruction of Thornfield liberates both herself and Jane."
          />
          <CharacterCard
            name="Ad&egrave;le Varens"
            description="Rochester's young French ward, possibly his illegitimate daughter by the opera dancer C&eacute;line Varens. Ad&egrave;le is cheerful, affectionate, and fond of pretty things. Jane treats her with genuine kindness and professionalism as her governess. Ad&egrave;le represents the governess's position in Victorian society &mdash; responsible for a child who is socially above her but dependent on her care. Rochester is dismissive of Ad&egrave;le, refusing to acknowledge her as his daughter. Jane's affection for Ad&egrave;le shows her capacity for nurturing love."
          />
          <CharacterCard
            name="Blanche Ingram"
            description="A beautiful, aristocratic woman whom Rochester appears to court. Blanche is tall, dark, and accomplished but shallow, mercenary, and cruel. She openly mocks governesses as 'detestable' and 'ridiculous,' unaware that Jane is listening. She pursues Rochester for his wealth, not his character. Bront&euml; uses Blanche as a foil to Jane: Blanche has every external advantage (beauty, rank, money) but lacks genuine feeling, intelligence, or moral depth. Rochester uses his apparent courtship of Blanche to provoke Jane's jealousy, testing whether Jane loves him."
          />
        </div>
      </Section>

      {/* Themes */}
      <Section title={tr(`Key Themes`)} icon="💡">
        <div className="grid gap-4 sm:grid-cols-2">
          <ThemeCard
            title={tr(`Independence and Self-Respect`)}
            description="The novel's defining theme. Jane repeatedly chooses self-respect over comfort or security. She leaves Gateshead rather than endure injustice, refuses to become Rochester's mistress despite loving him, and rejects St John's proposal because it would deny her emotional identity. Her insistence on earning her own living, dividing her inheritance equally, and returning to Rochester only when she can do so as his equal reflects Bront&euml;'s radical argument that women's moral and spiritual independence must not be sacrificed for love, money, or religious duty. Jane's final marriage works precisely because she enters it freely, financially independent, and on equal terms."
          />
          <ThemeCard
            title={tr(`Social Class and Inequality`)}
            description="Jane occupies an ambiguous class position throughout: a gentleman's daughter raised as a dependent, educated but forced to earn her living as a governess. The governess was the most visible example of class instability in Victorian England &mdash; educated enough to teach the children of the wealthy, yet treated as a servant. Blanche Ingram sneers at governesses; Lady Ingram calls them 'a nuisance.' Jane's inheritance at the novel's end resolves her class instability, but Bront&euml;'s critique of a system that values birth over worth remains powerful. John Reed squanders his wealth and dies in disgrace, while Jane's merit brings her fulfilment."
          />
          <ThemeCard
            title="Gender and the Role of Women"
            description="Bront&euml; was explicitly feminist in her portrayal of Jane's inner life. Jane's famous declaration on the third floor of Thornfield &mdash; 'Women feel just as men feel&hellip; they suffer from too rigid a restraint' &mdash; is a direct challenge to the Victorian ideology of separate spheres. Every institution in the novel constrains women: the family (Gateshead), the school (Lowood), the household (Thornfield), and the church (St John's proposal). Jane refuses each form of constraint. Her marriage to the blinded, maimed Rochester reverses the conventional power dynamic: he is dependent on her, not she on him."
          />
          <ThemeCard
            title={tr(`Religion and Morality`)}
            description="Three models of religion are presented and critiqued. Brocklehurst's Evangelical hypocrisy uses religion to justify cruelty and control. Helen Burns's Christian endurance offers spiritual comfort but accepts suffering too passively. St John Rivers's Calvinist self-denial is presented as coldly inhumane &mdash; he would sacrifice Jane's happiness (and his own) for a rigid conception of duty. Jane develops her own moral code: she believes in God but refuses to accept religious authority that contradicts her conscience. Her morality is personal, not institutional. She leaves Rochester not because the church forbids bigamy, but because staying would violate her own self-respect."
          />
          <ThemeCard
            title={tr(`Love and Passion`)}
            description="The novel explores multiple forms of love. Jane and Rochester's love is passionate, intellectual, and based on genuine equality of spirit. Their famous dialogue ('Do you think I am an automaton?') establishes love as a meeting of minds and souls, not a transaction of beauty and money. Bront&euml; contrasts this with St John's loveless proposal, Blanche's mercenary pursuit of Rochester, and Rochester's past liaisons with mistresses. True love in the novel requires honesty, equality, and mutual respect. The supernatural connection between Jane and Rochester &mdash; she hears him call across miles &mdash; suggests love transcends the physical world."
          />
          <ThemeCard
            title={tr(`Morality and Conscience`)}
            description="Jane's moral compass is internal and absolute. When tempted to stay with Rochester as his mistress, she does not appeal to social convention or legal rules but to her own principles: 'I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.' Her morality is tested repeatedly &mdash; by poverty, by love, by religious pressure &mdash; and she never compromises. Bront&euml; argues that true morality comes from within, not from external authority. This was radical in an age that expected women's moral decisions to be made by fathers, husbands, or clergymen."
          />
          <ThemeCard
            title={tr(`Forgiveness and Redemption`)}
            description="Jane forgives Mrs Reed on her deathbed, even though Mrs Reed refuses to reciprocate. She forgives Rochester for his deception, returning to him after he has been punished and humbled. Rochester's blindness and maiming can be read as purgatorial suffering that redeems his moral failings. He prays sincerely for the first time, and his partial restoration of sight symbolises spiritual renewal. The novel suggests that genuine forgiveness requires the wrongdoer to acknowledge their fault &mdash; Mrs Reed, who never repents, dies unforgiven by herself, while Rochester, who humbles himself, is redeemed through Jane's love."
          />
          <ThemeCard
            title={tr(`Gothic Elements`)}
            description="Bront&euml; draws heavily on Gothic conventions: the brooding manor with a terrible secret, the madwoman in the attic, mysterious laughter, fire, prophetic dreams, and the supernatural voice across the moors. The red room at Gateshead, Bertha's nocturnal appearances, the splitting of the chestnut tree, and the burning of Thornfield all create Gothic atmosphere. However, Bront&euml; subverts the Gothic tradition by making her heroine not a passive victim but an active moral agent who confronts terror and makes her own choices. The Gothic elements externalise Jane's internal psychological states: imprisonment, passion, and the desire for freedom."
          />
        </div>
      </Section>

      {/* Key Quotations */}
      <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
        <div className="space-y-1">
          <QuoteCard
            quote="I am no bird; and no net ensnares me: I am a free human being with an independent will."
            speaker="Jane (Chapter 23)"
            analysis="Jane's declaration of autonomy at the moment Rochester proposes. The bird metaphor recurs throughout the novel &mdash; Rochester calls Jane his 'caged bird.' Jane rejects this: she is not a creature to be trapped or kept. 'Free human being' asserts her personhood in a society that defined women by their relationships to men. 'Independent will' is the novel's central value."
          />
          <QuoteCard
            quote="Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! &mdash; I have as much soul as you &mdash; and full as much heart!"
            speaker="Jane (Chapter 23)"
            analysis="Jane's most famous speech, challenging Rochester's apparent intention to marry Blanche. She systematically lists every disadvantage Victorian society holds against her &mdash; poverty, obscurity, plainness, small stature &mdash; and refuses to accept that these diminish her inner worth. The exclamation marks convey passionate conviction. This is Bront&euml;'s feminist manifesto: worth is measured by soul and heart, not appearance or status."
          />
          <QuoteCard
            quote="I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself."
            speaker="Jane (Chapter 27)"
            analysis="Spoken as Jane resolves to leave Rochester after the failed wedding. This is her moral bedrock: self-respect is non-negotiable, even at the cost of love and companionship. The triple repetition ('the more... the more... the more') builds to a climax of resolve. Bront&euml; presents self-respect as the foundation of all other virtues &mdash; without it, love becomes servitude."
          />
          <QuoteCard
            quote="Women feel just as men feel; they need exercise for their faculties, and a field for their efforts, as much as their brothers do."
            speaker="Jane (Chapter 12)"
            analysis="Jane's direct address to the reader while pacing the third floor at Thornfield. This passage was considered shocking and 'unfeminine' by contemporary reviewers. Jane explicitly argues for gender equality in intellectual and emotional life. The language is deliberately plain and rational, not hysterical &mdash; Bront&euml; undercuts the accusation that women's demands for equality are mere emotional outbursts."
          />
          <QuoteCard
            quote="Reader, I married him."
            speaker="Jane (Chapter 38)"
            analysis="The novel's most iconic sentence. Jane &mdash; not Rochester &mdash; is the grammatical subject: she married him, not he married her. The direct address to the reader is characteristically bold and intimate. The simplicity of the sentence belies its radicalism: Jane has chosen her own husband, on her own terms, with her own money. It is a statement of agency, not submission."
          />
          <QuoteCard
            quote="I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh: it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God's feet, equal &mdash; as we are!"
            speaker="Jane (Chapter 23)"
            analysis="Jane strips away every social barrier between herself and Rochester. 'Custom, conventionalities' are the social rules that separate governess from master. 'Mortal flesh' removes the physical body, which society judges by beauty and sex. Only at the level of the spirit can Jane and Rochester be truly equal. The religious language ('God's feet') appeals to a higher authority than human social hierarchy."
          />
          <QuoteCard
            quote="I would always rather be happy than dignified."
            speaker="Jane (Chapter 24)"
            analysis="A disarmingly simple statement that challenges Victorian propriety. 'Dignity' in Jane's world means conforming to social expectations &mdash; being quiet, grateful, and submissive. Jane chooses happiness, which requires independence and authenticity. The contrast between 'happy' and 'dignified' exposes the gap between true fulfilment and mere respectability."
          />
          <QuoteCard
            quote="Laws and principles are not for the times when there is no temptation: they are for such moments as this, when body and soul rise in mutiny against their rigour."
            speaker="Jane (Chapter 27)"
            analysis="Jane articulates why she must leave Rochester. Her argument is moral philosophy: principles exist precisely for the moments when breaking them is most tempting. 'Body and soul rise in mutiny' acknowledges the overwhelming power of her desire. 'Rigour' acknowledges that morality is hard. This is not cold duty but passionate self-governance &mdash; the novel's most mature ethical statement."
          />
          <QuoteCard
            quote="Prejudices, it is well known, are most difficult to eradicate from the heart whose soil has never been loosened or fertilised by education."
            speaker="Narrator (Chapter 29)"
            analysis="Bront&euml; connects prejudice to ignorance. The agricultural metaphor ('soil,' 'loosened,' 'fertilised') suggests that minds, like fields, must be cultivated to produce anything worthwhile. This applies to the class prejudice Jane faces throughout the novel and to broader Victorian social attitudes. Education is presented as the antidote to bigotry."
          />
          <QuoteCard
            quote="There was no possibility of taking a walk that day."
            speaker="Jane (Chapter 1, opening line)"
            analysis="The novel's famous opening sets the tone immediately: confinement, restriction, impossibility. Jane is trapped &mdash; physically by the weather, socially by her dependent position. The passive construction ('no possibility') emphasises her powerlessness. The entire novel is the story of Jane finding the 'possibility' that this opening denies her."
          />
          <QuoteCard
            quote="I resisted all the way: a new thing for me."
            speaker="Jane (Chapter 2)"
            analysis="Jane's first act of rebellion, as she is dragged to the red room. 'A new thing for me' signals the birth of her resistance. Until this moment, she has endured passively. The novel proper begins when Jane starts fighting back. The brevity of the sentence mirrors the decisiveness of the act. This resistance will define her character throughout."
          />
          <QuoteCard
            quote="Unjust! &mdash; unjust!"
            speaker="Jane (Chapter 2)"
            analysis="Jane's cry in the red room, repeated for emphasis. The word 'unjust' is fundamental: Jane's moral compass is oriented by justice, not obedience. Her sense of injustice propels every major decision. Bront&euml; gives a child the language of moral philosophy &mdash; Jane does not cry 'unfair' but 'unjust,' appealing to a principle, not merely a feeling."
          />
          <QuoteCard
            quote="You think I have no feelings, and that I can do without one bit of love or kindness; but I cannot live so."
            speaker="Jane to Mrs Reed (Chapter 4)"
            analysis="Jane's explosive confrontation with her aunt before leaving for Lowood. For the first time, she speaks her truth to an authority figure. 'You think I have no feelings' accuses Mrs Reed of denying Jane's humanity. 'I cannot live so' is both a statement of emotional need and a declaration of independence. This speech is the template for every later assertion of her rights."
          />
          <QuoteCard
            quote="It is in vain to say human beings ought to be satisfied with tranquillity: they must have action; and they will make it if they cannot find it."
            speaker="Jane (Chapter 12)"
            analysis="Part of Jane's feminist passage on the third floor. 'In vain' dismisses the Victorian prescription that women should be content with domestic life. 'They must have action' is a universal psychological truth. Bront&euml; links women's restlessness not to irrationality but to a natural human need for purpose and stimulation. The statement applies equally to men and women."
          />
          <QuoteCard
            quote="Gentle reader, may you never feel what I then felt! May your eyes never shed such stormy, scalding, heart-wrung tears as poured from mine."
            speaker="Jane (Chapter 27)"
            analysis="Jane addresses the reader directly after leaving Rochester. The intensity of 'stormy, scalding, heart-wrung' conveys physical anguish. This is not sentimental self-pity but genuine suffering. Bront&euml; makes the reader a confidant, creating an intimacy that is central to the novel's power. Jane's pain is real precisely because her moral choice is real."
          />
          <QuoteCard
            quote="I could not unlove him now, merely because I found that he had ceased to notice me."
            speaker="Jane (Chapter 17)"
            analysis="Jane reflects on her feelings during Rochester's apparent courtship of Blanche. 'Unlove' is a coinage &mdash; love, once given, cannot simply be withdrawn. Jane's love is presented as involuntary and irreversible, beyond rational control. Yet she does not surrender to it: she forces herself to accept her feelings without acting on them inappropriately. This is the tension between passion and principle that drives the novel."
          />
          <QuoteCard
            quote="If all the world hated you, and believed you wicked, while your own conscience approved you, and absolved you from guilt, you would not be without friends."
            speaker="Helen Burns (Chapter 8)"
            analysis="Helen's response to Jane's fear of being branded a liar by Brocklehurst. Helen argues that conscience is the only judge that matters. 'The world' versus 'your own conscience' establishes the novel's central moral framework: external opinion is worthless compared to inner integrity. Jane absorbs this lesson, and it becomes the foundation of her self-respect."
          />
          <QuoteCard
            quote="I am no bird; and no net ensnares me."
            speaker="Jane (Chapter 23)"
            analysis="Rochester repeatedly compares Jane to a bird &mdash; a caged bird, a wild bird, a bird that will fly away. Jane rejects the metaphor entirely. She is not a creature to be caught, kept, or admired in a cage. The 'net' represents all the social traps that could ensnare a woman: financial dependence, marriage as ownership, beauty as currency. Jane insists on being fully, unmetaphorically human."
          />
          <QuoteCard
            quote="The soul, fortunately, has an interpreter &mdash; often an unconscious but still a faithful interpreter &mdash; in the eye."
            speaker="Jane (Chapter 28)"
            analysis="Jane reflects on how Diana Rivers's kind expression communicated trustworthiness before any words were spoken. The 'eye as interpreter' connects to the novel's broader interest in seeing and being seen. Rochester, blinded at the novel's end, must see Jane with his soul rather than his eyes &mdash; the truest form of seeing. Appearance deceives; the soul does not."
          />
          <QuoteCard
            quote="I will hold to the principles received by me when I was sane, and not mad &mdash; as I am now."
            speaker="Jane (Chapter 27)"
            analysis="Jane acknowledges that her grief at leaving Rochester is a form of temporary madness, but insists that her principles, formed in rational moments, must override her current anguish. This is Bront&euml;'s most sophisticated moral argument: we must live by rules established in clarity, not decisions made in crisis. The contrast between 'sane' and 'mad' also echoes Bertha's condition, distinguishing Jane's chosen self-control from Bertha's forced confinement."
          />
          <QuoteCard
            quote="I was experiencing an ordeal: a hand of fiery iron grasped my vitals."
            speaker="Jane (Chapter 26)"
            analysis="Jane's physical reaction to the revelation of Rochester's existing marriage. 'Hand of fiery iron' and 'grasped my vitals' convey visceral, bodily agony. The Gothic imagery transforms emotional pain into physical torture. Bront&euml; insists that women's emotional suffering is not trivial or performative but genuinely destructive. The 'ordeal' is both a trial and a judgement."
          />
          <QuoteCard
            quote="Human beings never enjoy complete happiness in this world."
            speaker="Jane (Chapter 38)"
            analysis="Spoken in the final chapter, tempering the novel's happy ending with mature realism. Jane does not promise a fairy tale but an honest, imperfect fulfilment. This sobriety distinguishes Jane Eyre from conventional romance: happiness is possible but never 'complete.' The statement reflects Bront&euml;'s Protestant sensibility that earthly life always falls short of perfection."
          />
        </div>
      </Section>

      {/* Historical and Literary Context */}
      <Section title={tr(`Historical and Literary Context`)} icon="🏛️">
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`Victorian Women and the &ldquo;Angel in the House&rdquo;`)}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Victorian ideology confined middle-class women to the domestic sphere. Coventry
              Patmore&apos;s poem &ldquo;The Angel in the House&rdquo; (1854) idealised women as
              pure, passive, and selflessly devoted to husband and children. Women could not vote,
              own property after marriage (until the Married Women&apos;s Property Act, 1882), or
              attend university. Jane&apos;s insistence on equality, independence, and the right to
              feel passion directly challenged these conventions. Contemporary reviewers called the
              novel &ldquo;anti-Christian&rdquo; and &ldquo;coarse&rdquo; for its depiction of
              female desire and rebellion.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`The Governess`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The governess occupied an uncomfortable position in the Victorian class system:
              educated and genteel but forced to earn a living, she was neither family nor servant.
              She was expected to be invisible, compliant, and grateful. Charlotte Bront&euml;
              herself worked as a governess and hated the experience, writing to her sister Emily of
              feeling &ldquo;wretched&rdquo; and &ldquo;isolated.&rdquo; Jane&apos;s refusal to
              accept this marginalisation &mdash; her insistence on being seen and heard &mdash; was
              radical for its time. The &ldquo;governess novel&rdquo; became a significant Victorian
              subgenre, exploring class anxiety and female agency.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Colonialism and Empire`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel engages with the British Empire in several ways. Rochester&apos;s wealth
              comes from his first marriage to Bertha Mason, a Creole heiress from Jamaica &mdash;
              wealth built on the slave trade (abolished in 1833, but its economic legacy
              persisted). Bertha&apos;s &ldquo;madness&rdquo; and her racialised description
              (&ldquo;dark&rdquo; features, animalistic behaviour) have been critiqued by
              postcolonial scholars as reflecting Victorian racism. St John&apos;s missionary zeal
              to &ldquo;save&rdquo; India represents the paternalistic imperialism of the period.
              Jean Rhys&apos;s <em>{tr(`Wide Sargasso Sea`)}</em> (1966) retells Bertha&apos;s
              story, revealing the violence of colonial marriage and identity.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`The Bront&euml; Sisters`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Charlotte, Emily, and Anne Bront&euml; published under male pseudonyms (Currer, Ellis,
              and Acton Bell) to avoid the prejudice faced by female authors. <em>Jane Eyre</em> was
              published in 1847 as &ldquo;by Currer Bell,&rdquo; the same year as Emily&apos;s{' '}
              <em>Wuthering Heights</em> and Anne&apos;s <em>{tr(`Agnes Grey`)}</em>. The sisters
              grew up in Haworth parsonage, Yorkshire, and many elements of <em>Jane Eyre</em> are
              autobiographical: the Clergy Daughters&apos; School at Cowan Bridge (the model for
              Lowood), where Charlotte&apos;s sisters Maria and Elizabeth died; Charlotte&apos;s
              experience as a governess; and her intense, possibly unrequited feelings for her
              Brussels teacher, Constantin H&eacute;ger.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Religion in Victorian England`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel engages critically with several strands of Victorian Christianity.
              Brocklehurst represents Evangelical hypocrisy &mdash; using religion to justify
              cruelty towards the poor. Helen Burns represents a sincere but overly passive
              Christianity. St John embodies Calvinist rigour &mdash; a demanding, self-denying
              faith that leaves no room for human warmth. Jane&apos;s own faith is personal and
              intuitive: she believes in God but refuses to accept religious authority that
              contradicts her conscience. This was considered dangerously unorthodox by some
              Victorian readers, who expected women to submit to clerical authority.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`The Bildungsroman Tradition`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              <em>Jane Eyre</em> is a Bildungsroman (novel of formation), tracing the
              protagonist&apos;s growth from childhood to maturity. Each location represents a stage
              of Jane&apos;s moral and psychological development: Gateshead (oppression and
              rebellion), Lowood (education and endurance), Thornfield (passion and temptation),
              Moor House (independence and self-discovery), Ferndean (fulfilment and equality). The
              form was more commonly used for male protagonists &mdash; Bront&euml;&apos;s
              innovation was to apply it to a woman&apos;s inner life, insisting that women&apos;s
              intellectual and moral development was as worthy of novelistic attention as
              men&apos;s.
            </p>
          </div>
        </div>
      </Section>

      {/* Essay Planning */}
      <Section title={tr(`Essay Planning`)} icon="✍️">
        <div className="space-y-5">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              How does Bront&euml; present the theme of independence in <em>Jane Eyre</em>?
            </h4>
            <div className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 1: Independence as rebellion (Gateshead)`)}
              </p>
              <p>
                Jane&apos;s confrontation with Mrs Reed: &ldquo;You think I have no feelings.&rdquo;
                Independence begins as fierce resistance to injustice. Link to Bront&euml;&apos;s
                critique of class and the dependant&apos;s position.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 2: Moral independence (leaving Rochester)`)}
              </p>
              <p>
                &ldquo;I care for myself&hellip; the more I will respect myself.&rdquo; Jane chooses
                self-respect over love. Laws and principles &ldquo;are for such moments as
                this.&rdquo; Link to Victorian morality and women&apos;s lack of legal protection.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 3: Spiritual independence (rejecting St John)`)}
              </p>
              <p>
                &ldquo;If I join St John, I abandon half myself.&rdquo; Jane refuses religious
                coercion. Her faith is personal, not institutional. Contrast St John&apos;s cold
                duty with Jane&apos;s warm conviction.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 4: Financial independence (the inheritance)`)}
              </p>
              <p>
                The inheritance transforms Jane from dependant to equal. She divides it equally
                &mdash; generosity, not accumulation. She returns to Rochester as a free agent:
                &ldquo;Reader, I married him&rdquo; &mdash; she is the subject, not the object.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              How does Bront&euml; use Gothic elements in <em>Jane Eyre</em>?
            </h4>
            <div className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">{tr(`Paragraph 1: The red room`)}</p>
              <p>
                Gothic imprisonment and psychological terror. The ghost, the mirrors, the red and
                white colour symbolism. Jane&apos;s confinement mirrors her social position. Link to
                Gothic tradition of trapped heroines.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 2: Bertha Mason and the madwoman in the attic`)}
              </p>
              <p>
                {tr(
                  `Strange laughter, nocturnal attacks, the ripped veil. Bertha as Gothic double for Jane (uncontrolled passion vs. disciplined self-control). Explore postcolonial readings of Bertha&apos;s confinement.`,
                )}
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 3: Pathetic fallacy and symbolism`)}
              </p>
              <p>
                {tr(
                  `The split chestnut tree, storms during emotional crises, the fire that destroys Thornfield. Nature reflects and foreshadows the characters&apos; fates. Link to Romantic and Gothic traditions.`,
                )}
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 4: Subversion of Gothic conventions`)}
              </p>
              <p>
                Jane is not a passive Gothic victim but an active moral agent. She investigates the
                mystery, confronts Rochester, and leaves of her own will. Bront&euml; uses Gothic
                conventions but gives her heroine agency within them.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`How does Bront&euml; present the relationship between Jane and Rochester?`)}
            </h4>
            <div className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 1: Unconventional beginnings`)}
              </p>
              <p>
                Their first meeting subverts romance conventions: Rochester falls from his horse,
                and Jane helps him. He is not handsome; she is not beautiful. Their attraction is
                based on intellectual equality, not physical appearance.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 2: Equality of spirit`)}
              </p>
              <p>
                &ldquo;It is my spirit that addresses your spirit&hellip; equal &mdash; as we
                are!&rdquo; Jane insists on equality despite the gulf of class, wealth, and gender.
                Rochester values Jane&apos;s honesty and directness &mdash; qualities absent in
                Blanche.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 3: Power and deception`)}
              </p>
              <p>
                Rochester&apos;s concealment of Bertha represents a fundamental imbalance of power.
                His gypsy disguise and use of Blanche to provoke jealousy are manipulative. Jane
                must leave to preserve her moral autonomy.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 4: Restored equality`)}
              </p>
              <p>
                The fire redistributes power: Rochester is blind and dependent; Jane is wealthy and
                free. Their final marriage is genuinely equal. &ldquo;Reader, I married him&rdquo;
                &mdash; Jane is the agent of her own destiny.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              How does Bront&euml; explore the theme of religion in <em>Jane Eyre</em>?
            </h4>
            <div className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 1: Brocklehurst &mdash; Evangelical hypocrisy`)}
              </p>
              <p>
                Uses religion to control and punish. Preaches austerity for orphans while his family
                wears silks. Bront&euml; satirises the use of Christianity to justify class
                oppression. Link to Dickens&apos;s similar critiques.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 2: Helen Burns &mdash; Christian endurance`)}
              </p>
              <p>
                Genuine faith that offers comfort but accepts suffering too passively. &ldquo;If all
                the world hated you&hellip; you would not be without friends.&rdquo; Jane learns
                from Helen but cannot adopt her complete submission to injustice.
              </p>
              <p className="font-semibold text-foreground">
                Paragraph 3: St John Rivers &mdash; Calvinist rigour
              </p>
              <p>
                Duty without love. His proposal is religious coercion: he uses God&apos;s will as an
                argument Jane cannot easily refuse. His missionary zeal connects to imperialism.
                Jane recognises that his religion lacks warmth and humanity.
              </p>
              <p className="font-semibold text-foreground">
                {tr(`Paragraph 4: Jane&apos;s personal faith`)}
              </p>
              <p>
                Jane develops a moral code rooted in conscience, not doctrine. She prays but trusts
                her own sense of right and wrong. Her morality is internal, not institutional. This
                was radical and controversial in Victorian England.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Exam Tips */}
      <Section title="Exam Tips" icon="🎯">
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Use the Correct Terminology`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Refer to the novel as a <strong>Bildungsroman</strong> (novel of formation/growth).
              Call Bront&euml; the <strong>author</strong> and Jane the <strong>narrator</strong>{' '}
              &mdash; do not confuse the two. Use terms like <strong>first-person narration</strong>
              ,<strong> direct address to the reader</strong>, <strong>{tr(`Byronic hero`)}</strong>{' '}
              (for Rochester), <strong>pathetic fallacy</strong>, and{' '}
              <strong>{tr(`Gothic conventions`)}</strong>. Refer to <strong>postcolonial</strong> or{' '}
              <strong>feminist</strong> readings when appropriate.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`Structure Your Essay Around the Author&apos;s Intentions`)}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Always frame your analysis as &ldquo;Bront&euml;
              presents/explores/challenges&hellip;&rdquo; rather than &ldquo;Jane
              feels&hellip;&rdquo; The examiner wants to see that you understand the novel is a
              constructed text with authorial purpose. Ask: why does Bront&euml; include this scene?
              What does she want the reader to think or feel? How does this connect to Victorian
              society and attitudes?
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Connect Themes to Context`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Every theme links to Victorian social issues. Independence &rarr; women&apos;s legal
              status and the &ldquo;Angel in the House&rdquo; ideology. Class &rarr; the
              governess&apos;s ambiguous position. Religion &rarr; Evangelical hypocrisy and
              Calvinist rigour. Gothic elements &rarr; female confinement and the &ldquo;madwoman in
              the attic.&rdquo; Colonialism &rarr; the source of Rochester&apos;s wealth and
              Bertha&apos;s Creole identity. Context should be woven into your analysis, not bolted
              on as a separate paragraph.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Compare Characters as Foils`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Examiners love to see you compare characters. Jane vs. Bertha (controlled vs.
              uncontrolled passion). Rochester vs. St John (all passion vs. all repression). Jane
              vs. Helen Burns (resistance vs. acceptance). Jane vs. Blanche (inner worth vs. outward
              beauty). These pairings allow you to explore themes through contrast and demonstrate a
              sophisticated understanding of the novel&apos;s structure.
            </p>
          </div>
        </div>
      </Section>

      {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
      <Section title={tr(`Practice Questions`)} icon="✏️">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE
          English Literature mark schemes. Aim for at least 150 words per response to get meaningful
          feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-bold text-foreground mb-1">{tr(`Question 1`)}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              How does Bront&euml; present Jane as a strong, independent female character? Refer to
              the novel as a whole.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Jane Eyre - How Bront&euml; presents Jane as a strong, independent female character across the novel"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="font-bold text-foreground mb-1">{tr(`Question 2`)}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              How does Bront&euml; use Gothic elements to explore themes of confinement and freedom
              in <em>Jane Eyre</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Jane Eyre - How Bront&euml; uses Gothic conventions to explore confinement and freedom"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="font-bold text-foreground mb-1">{tr(`Question 3`)}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              How does Bront&euml; present the theme of social class and inequality in{' '}
              <em>Jane Eyre</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Jane Eyre - How Bront&euml; presents social class and inequality throughout the novel"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="font-bold text-foreground mb-1">{tr(`Question 4`)}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              How does Bront&euml; present the relationship between Jane and Rochester? Consider how
              it develops throughout the novel.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Jane Eyre - How Bront&euml; presents and develops the relationship between Jane and Rochester"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>
        </div>
      </Section>

      {/* Public-domain notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>Jane Eyre</em> by Charlotte Bront&euml; (first published 1847) is in the public
          domain. All quotations are reproduced freely.
        </p>
      </footer>
    </>
  )
}
