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

export default function FrankensteinPage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frankenstein; or, The Modern Prometheus
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          {tr(`Mary Shelley, 1818 (revised 1831)`)}
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A pioneering Gothic novel exploring the consequences of unchecked scientific ambition.
          Victor Frankenstein creates a living being from dead matter but abandons it in horror,
          setting in motion a chain of tragedy. Shelley interrogates what it means to be human, the
          responsibilities of creation, and the devastating effects of isolation and prejudice.
        </p>
      </div>

      {/* Volume-by-Volume Summary */}
      <Section title={tr(`Volume-by-Volume Summary`)} icon="📖" defaultOpen>
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Walton&apos;s Letters (Frame Narrative)`)}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Captain Robert Walton writes letters to his sister Margaret Saville from a ship
              heading to the North Pole. He is driven by ambition to discover new lands. His crew
              rescue a half-frozen stranger &mdash; Victor Frankenstein &mdash; who begins to tell
              his story as a warning against obsessive ambition. Walton mirrors Victor&apos;s
              dangerous desire for glory, establishing the theme of unchecked ambition from the
              outset.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Volume I (Chapters 1&ndash;7)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 1&ndash;2: Victor&apos;s Childhood`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Victor describes his idyllic childhood in Geneva with his devoted parents, his
                  adopted sister Elizabeth Lavenza, and his friend Henry Clerval. He becomes
                  fascinated by the works of alchemists (Cornelius Agrippa, Paracelsus, Albertus
                  Magnus), seeking the &ldquo;elixir of life.&rdquo; A lightning strike on a tree
                  introduces him to modern electricity, foreshadowing his later experiments.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 3&ndash;4: University and Obsession`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Victor attends the University of Ingolstadt, where Professor Waldman inspires him
                  to study modern science. His mother dies of scarlet fever before he leaves. At
                  university, Victor becomes obsessed with discovering the &ldquo;cause of
                  generation and life.&rdquo; He isolates himself for two years, neglecting family
                  and health, as he assembles a creature from body parts collected from charnel
                  houses and dissecting rooms.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">{tr(`Chapter 5: The Creation`)}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On a &ldquo;dreary night of November,&rdquo; Victor brings the Creature to life.
                  Instead of the beauty he envisioned, he sees a horrifying being with yellow skin,
                  watery eyes, and black lips. Victor flees in horror and disgust, abandoning his
                  creation immediately. He falls ill with a nervous fever; Clerval nurses him back
                  to health. Victor refuses to speak of what he has done.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 6&ndash;7: William&apos;s Murder`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Victor receives a letter from his father: his youngest brother William has been
                  murdered. Returning to Geneva, Victor sees the Creature near the murder scene and
                  instantly suspects it. However, the family&apos;s servant Justine Moritz is
                  accused after a miniature portrait of Victor&apos;s mother is found in her
                  possession. Despite Victor&apos;s private certainty of her innocence, Justine
                  confesses under pressure and is executed. Victor is consumed by guilt but says
                  nothing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Volume II (Chapters 8&ndash;16)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 8&ndash;10: The Creature Speaks`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Victor retreats to the Alps to find solace. On the Mer de Glace glacier, the
                  Creature confronts him and demands to be heard. Despite his revulsion, Victor
                  agrees to listen. The Creature&apos;s narrative begins &mdash; the novel&apos;s
                  innermost frame. This is a pivotal moment: Shelley gives the supposedly monstrous
                  Creature the most articulate, sympathetic voice in the novel.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 11&ndash;12: The Creature&apos;s Early Life`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Creature describes his first experiences: sensory confusion, hunger, cold, and
                  discovering fire. He finds shelter beside a cottage inhabited by the De Lacey
                  family. Through a gap in the wall, he observes them and learns about human
                  relationships, language, and emotions. He performs secret acts of kindness
                  (gathering firewood) but dares not reveal himself.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 13&ndash;14: Education and the De Laceys`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Safie, a Turkish woman, arrives at the cottage. As the De Laceys teach her French,
                  the Creature learns alongside her. He reads <em>Paradise Lost</em>,{' '}
                  <em>Plutarch&apos;s Lives</em>, and <em>{tr(`The Sorrows of Young Werther`)}</em>,
                  which shape his understanding of humanity. He discovers Victor&apos;s journal in
                  his coat pocket and learns the horrifying circumstances of his creation. He
                  identifies with Satan in <em>Paradise Lost</em>: rejected by his creator and cast
                  out.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 15&ndash;16: Rejection and Revenge`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Creature approaches the blind old De Lacey, who responds kindly. But when
                  Felix, Agatha, and Safie return, Felix attacks the Creature, who flees. The De
                  Laceys abandon the cottage. This rejection &mdash; by the people he loved most
                  &mdash; is the turning point. The Creature travels to Geneva, saves a drowning
                  girl, and is shot for his trouble. His faith in humanity destroyed, he murders
                  William and frames Justine.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-base mb-2">
              {tr(`Volume III (Chapters 17&ndash;24)`)}
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 17&ndash;18: The Bargain`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Creature demands that Victor create a female companion. He promises to
                  disappear to South America if Victor complies. Victor reluctantly agrees,
                  recognising the justice of the Creature&apos;s request. He delays the work,
                  travelling to England and Scotland with Clerval.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 19&ndash;20: Destruction of the Female`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On a remote Orkney island, Victor begins building the female creature but is
                  overcome by fear &mdash; what if they breed and create a race of monsters? He
                  destroys the unfinished female as the Creature watches through the window. The
                  Creature vows revenge: &ldquo;I shall be with you on your wedding-night.&rdquo;
                  Victor disposes of the remains at sea, drifts to Ireland, and is arrested for
                  murder.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 21&ndash;22: Clerval&apos;s Death and Marriage`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The murder victim is Henry Clerval, strangled by the Creature. Victor suffers
                  another breakdown and is eventually acquitted. He returns to Geneva and marries
                  Elizabeth, despite the Creature&apos;s threat. On their wedding night, Victor
                  patrols the house with a pistol, misunderstanding the threat &mdash; the Creature
                  kills Elizabeth, not Victor. Victor&apos;s father dies of grief shortly after.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">
                  {tr(`Chapters 23&ndash;24: The Pursuit`)}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Victor vows to hunt the Creature to the ends of the earth. The pursuit takes him
                  across Europe and into the Arctic, where Walton&apos;s ship rescues him. Victor
                  dies aboard the ship. The Creature appears, mourning over Victor&apos;s body. He
                  expresses remorse and declares he will end his own life on a funeral pyre. He
                  disappears into the Arctic darkness.
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
            name="Victor Frankenstein"
            description="A brilliant but fatally flawed scientist whose ambition leads to catastrophe. Victor's desire to 'penetrate the secrets of nature' drives him to create life, but he takes no responsibility for his creation. He abandons the Creature at birth, refuses to acknowledge his role in the ensuing tragedies, and repeatedly prioritises his own suffering over others'. Shelley presents him as a modern Prometheus - stealing the power of creation from God/nature and suffering eternal punishment. His self-pity and passivity make him an increasingly unsympathetic narrator. He warns Walton against ambition yet simultaneously urges the crew to press on into the ice."
          />
          <CharacterCard
            name="The Creature"
            description="Created from dead body parts and brought to life through science, the Creature is the novel's most complex and sympathetic character. Born innocent, he is driven to violence by universal rejection. He is eloquent, sensitive, and desperate for companionship. He teaches himself to read, appreciates beauty, and performs acts of kindness before being brutalised by humanity's prejudice. Shelley forces the reader to question who the real 'monster' is - the Creature who kills in despair, or the creator who abandons his child. He identifies with both Adam (wanting a creator's love) and Satan (cast out and vengeful)."
          />
          <CharacterCard
            name="Robert Walton"
            description="An Arctic explorer whose letters frame the narrative. Walton mirrors Victor in his dangerous ambition and desire for glory. He is lonely, craving 'the company of a man who could sympathise with me.' His friendship with Victor is intense but brief. Crucially, Walton makes the choice Victor could not - he listens to his crew and turns back, rejecting the destructive path of obsession. He is the novel's moral compass, the character who learns from Victor's tragedy."
          />
          <CharacterCard
            name="Elizabeth Lavenza"
            description="Victor's adopted sister and later wife. Elizabeth is presented as idealised feminine virtue - patient, loving, and devoted. She waits faithfully for Victor despite his long absences and strange behaviour. Her murder on her wedding night is the Creature's most devastating revenge. Shelley uses Elizabeth to critique the passive role assigned to women in Romantic fiction - she has no agency and exists primarily in relation to Victor. Her death is the consequence of Victor's choices, not her own."
          />
          <CharacterCard
            name="Henry Clerval"
            description="Victor's closest friend and his moral opposite. Where Victor is obsessive and isolated, Clerval is sociable, creative, and humane. He studies languages and poetry rather than science. He represents what Victor could have been without his destructive ambition. Clerval repeatedly rescues Victor (nursing him through his breakdown) but receives no protection in return. His murder by the Creature punishes Victor by destroying the one person who kept his humanity alive."
          />
          <CharacterCard
            name="Justine Moritz"
            description="A servant in the Frankenstein household, wrongly accused and executed for William's murder. Justine confesses under pressure from her confessor, highlighting the corruption of institutional religion. Her death is the first innocent life destroyed by Victor's silence - he knows the Creature is responsible but says nothing for fear of being thought mad. Justine represents the vulnerable members of society who suffer for the crimes of the powerful."
          />
          <CharacterCard
            name="William Frankenstein"
            description="Victor's youngest brother, murdered by the Creature. William is only a child, making his death especially shocking. When confronted by the Creature, William calls him an 'ogre' and boasts of his father's power - 'M. Frankenstein - he will punish you.' The Creature kills him partly in rage and partly because William is a Frankenstein. William's innocence and his casual cruelty towards the Creature encapsulate the novel's ambiguity about who is truly monstrous."
          />
          <CharacterCard
            name="The De Lacey Family"
            description="Felix, Agatha, and their blind father, along with Safie. The De Laceys unknowingly educate the Creature through their daily life. The blind father's kindness - he cannot see the Creature's appearance - contrasts with Felix's violent rejection. They represent a microcosm of humanity: capable of both compassion and prejudice. Their story of exile (helping Safie's father, a Turkish merchant) parallels the Creature's experience of injustice. Their abandonment of their cottage after the Creature's discovery is the turning point of the novel."
          />
        </div>
      </Section>

      {/* Themes */}
      <Section title={tr(`Key Themes`)} icon="💡">
        <div className="grid gap-4 sm:grid-cols-2">
          <ThemeCard
            title={tr(`Creation and Responsibility`)}
            description="The novel's central theme. Victor creates life but takes no responsibility for it. He is a negligent 'parent' who abandons his 'child' at birth because it does not meet his aesthetic expectations. Shelley, who lost her own mother at birth and later lost children, explores the devastating consequences of parental rejection. The Creature repeatedly frames his argument in terms of a creator's duty: 'You are my creator... you owe me.' Victor's refusal to accept responsibility leads to the destruction of everyone he loves."
          />
          <ThemeCard
            title={tr(`Nature vs Nurture`)}
            description="Is the Creature born evil or made evil by society? Shelley strongly implies the latter. The Creature is born innocent - his first experiences are wonder at nature, and he instinctively performs acts of kindness. It is rejection, violence, and isolation that transform him into a killer. This connects to Rousseau's philosophy that humanity is naturally good but corrupted by society. The novel asks whether any being, denied love and companionship, would not eventually become 'monstrous.'"
          />
          <ThemeCard
            title={tr(`Isolation and Loneliness`)}
            description="Nearly every character suffers from isolation. Victor isolates himself during creation, cutting off from family and society. The Creature is isolated by his appearance - 'everywhere I see bliss, from which I alone am irrevocably excluded.' Walton is lonely at sea. Elizabeth waits alone. Shelley presents isolation as both a cause and consequence of obsession. The Creature's loneliness is the most poignant: he desires nothing more than companionship yet is denied it by every human he encounters."
          />
          <ThemeCard
            title={tr(`Ambition and Hubris`)}
            description="Victor's 'fervent longing to penetrate the secrets of nature' drives him to play God. His ambition is Promethean - he steals creative power from nature and is punished for it. The novel's subtitle, 'The Modern Prometheus,' explicitly links Victor to the Titan who stole fire from the gods. Shelley warns that ambition without moral consideration leads to destruction. Victor never truly repents - even on his deathbed, he is ambivalent about whether his ambition was wrong or merely unlucky."
          />
          <ThemeCard
            title={tr(`Prejudice and Appearance`)}
            description="The Creature is judged entirely by his appearance. Despite his intelligence, eloquence, and capacity for kindness, he is attacked, shot, and rejected by every sighted person he meets. Only the blind De Lacey responds to him with compassion. Shelley forces the reader to confront their own prejudices - the Creature's narrative is deliberately more sympathetic than Victor's. The novel argues that monstrosity is a social construct: it is society that creates monsters by refusing to look beyond the surface."
          />
          <ThemeCard
            title={tr(`Knowledge and Discovery`)}
            description="Knowledge is presented as both liberating and dangerous. Victor's pursuit of scientific knowledge destroys him. The Creature's education - reading Paradise Lost, learning about human society - gives him self-awareness but also the capacity for suffering. Walton seeks geographical knowledge at the risk of his crew's lives. Shelley draws on the Romantic ambivalence towards knowledge: the Enlightenment promised progress through reason, but the novel asks whether some knowledge is too dangerous to pursue."
          />
          <ThemeCard
            title="Monstrosity"
            description="The novel constantly questions what 'monster' means. Victor calls the Creature a 'daemon,' 'wretch,' and 'fiend,' yet Victor himself is arguably more monstrous - he creates and abandons life, allows an innocent woman to be executed, and destroys the female creature out of selfish fear. The Creature becomes violent only after being denied basic humanity. Shelley suggests that the true monsters are those who refuse compassion, not those who look different."
          />
        </div>
      </Section>

      {/* Key Quotations */}
      <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
        <div className="space-y-1">
          <QuoteCard
            quote="I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs."
            speaker="Victor"
            analysis="The moment of creation is described with revulsion rather than triumph. The 'dull yellow eye' reduces the Creature to a single grotesque detail. 'Convulsive motion' suggests the unnatural violence of the act. Victor's use of 'it' rather than 'he' immediately dehumanises his creation, foreshadowing his refusal to treat the Creature as a person."
          />
          <QuoteCard
            quote="Beware; for I am fearless, and therefore powerful."
            speaker="The Creature"
            analysis="The Creature's threat to Victor before departing for the Arctic. Having lost everything - hope, companionship, the possibility of love - he has nothing left to fear. Shelley presents a terrifying insight: a being with nothing to lose is the most dangerous force of all. The sentence structure is chillingly logical, almost philosophical."
          />
          <QuoteCard
            quote="I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed."
            speaker="The Creature"
            analysis="A direct allusion to Milton's Paradise Lost. The Creature identifies with both Adam (created by God, deserving of love) and Satan (rejected and cast out). 'For no misdeed' emphasises his innocence at the time of his rejection. The biblical register elevates the Creature's speech, making him eloquent and sympathetic - he argues with more moral clarity than his creator."
          />
          <QuoteCard
            quote="Did I request thee, Maker, from my clay / To mould me Man?"
            speaker="Epigraph, from Paradise Lost"
            analysis="Shelley places this quotation from Milton's Adam at the novel's opening. It frames the entire narrative as a question about the responsibility of creators towards their creations. The Creature did not ask to be made; Victor chose to create him and then abandoned him. This epigraph demands that the reader consider the ethics of creation before the story even begins."
          />
          <QuoteCard
            quote="I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on."
            speaker="The Creature"
            analysis="'Abortion' means something incomplete, a failed creation. The Creature sees himself as fundamentally unfinished - made but not cared for. The passive voice ('to be spurned at, kicked, trampled') emphasises his powerlessness. The tricolon of verbs escalates in violence, reflecting how society treats those it deems different. This is among the novel's most emotionally devastating lines."
          />
          <QuoteCard
            quote="Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge."
            speaker="Victor"
            analysis="Victor's warning to Walton frames the entire narrative as a cautionary tale. Yet the irony is that Victor never fully learns his own lesson - he remains ambivalent about his experiment to the end. 'Dangerous' knowledge echoes the Tree of Knowledge in Genesis and Prometheus's stolen fire. Shelley positions Victor as an unreliable moral authority."
          />
          <QuoteCard
            quote="Everywhere I see bliss, from which I alone am irrevocably excluded."
            speaker="The Creature"
            analysis="Encapsulates the Creature's existential loneliness. 'Everywhere' and 'alone' create a painful contrast between the universal and the singular. 'Irrevocably' means permanently - there is no hope. This is not self-pity but an accurate assessment: the Creature is the only one of his kind and can never be accepted by human society."
          />
          <QuoteCard
            quote="I was benevolent and good; misery made me a fiend."
            speaker="The Creature"
            analysis="A direct statement of the nature vs nurture argument. The Creature was not born evil - suffering and rejection corrupted him. 'Benevolent' contrasts sharply with 'fiend,' showing the extremity of his transformation. Shelley places responsibility not on the Creature's nature but on society's treatment of him. This echoes Rousseau's philosophy that humans are naturally good."
          />
          <QuoteCard
            quote="A new species would bless me as its creator and source."
            speaker="Victor"
            analysis="Reveals Victor's God complex - he wants to be worshipped, not merely to advance science. 'Bless' is religious language, positioning Victor as a divine figure. His motivation is glory, not altruism. The irony is devastating: his creation does not bless him but curses him. Shelley critiques the masculine desire for power disguised as scientific progress."
          />
          <QuoteCard
            quote="How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?"
            speaker="Victor"
            analysis="The moment Victor sees his completed creation. 'Catastrophe' (literally 'overturning') reveals that even Victor sees creation as disaster. 'Wretch' dehumanises the Creature instantly. The irony of 'infinite pains and care' is that Victor's care was only for the scientific process, never for the being itself. His first instinct is to describe his own emotions, not to consider his creation's experience."
          />
          <QuoteCard
            quote="If I cannot inspire love, I will cause fear!"
            speaker="The Creature"
            analysis="The Creature's declaration of war on humanity. The conditional structure ('if... I will') shows this is a rational decision, not blind rage. Love and fear are presented as the only two ways to matter - if denied one, the Creature will claim the other. This connects to Machiavelli's principle that it is better to be feared than loved, subverted by the Creature's clear preference for the latter."
          />
          <QuoteCard
            quote="I shall be with you on your wedding-night."
            speaker="The Creature"
            analysis="The Creature's most famous threat. Victor interprets it as a threat against himself, but the Creature means Elizabeth. This misunderstanding is typical of Victor's self-absorption - he assumes he is the target, unable to imagine the Creature targeting those he loves. The sentence is chillingly calm and measured, the more terrifying for its restraint."
          />
          <QuoteCard
            quote="Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it."
            speaker="The Creature"
            analysis="Despite his suffering, the Creature values his own existence. 'Accumulation of anguish' acknowledges the totality of his pain, yet 'dear to me' asserts his right to live. This contradicts Victor's assumption that the Creature is worthless. Shelley gives the Creature a philosophical depth that challenges the reader to recognise his humanity."
          />
          <QuoteCard
            quote="The fallen angel becomes a malignant devil. Yet even that enemy of God and man had friends and associates in his desolation; I am alone."
            speaker="The Creature"
            analysis="The Creature claims his suffering exceeds even Satan's - at least Satan had fellow fallen angels. The allusion to Paradise Lost positions the Creature as the most isolated being in literature. 'I am alone' is devastating in its simplicity. Shelley argues that total isolation is the ultimate suffering, worse even than damnation."
          />
          <QuoteCard
            quote="Nothing is so painful to the human mind as a great and sudden change."
            speaker="Victor"
            analysis="A moment of genuine psychological insight from Victor, though typically applied to his own suffering rather than the Creature's. The 'great and sudden change' describes his losses but also ironically describes the Creature's experience of being brought to life and immediately abandoned. The aphoristic style gives it a universal quality."
          />
          <QuoteCard
            quote="What was I? Of my creation and creator I was absolutely ignorant."
            speaker="The Creature"
            analysis="The Creature's existential crisis. Unlike every other being, he has no parents, no species, no origin story. 'Absolutely ignorant' is a state of total existential abandonment. The questions echo those of any child seeking to understand their identity. Shelley uses the Creature to explore what it means to be human when denied all the usual markers of identity."
          />
          <QuoteCard
            quote="I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health."
            speaker="Victor"
            analysis="Victor describes his obsessive creation process. 'Sole purpose' reveals the dangerous narrowness of his focus. 'Deprived myself of rest and health' shows the physical cost, yet Victor presents himself as martyr rather than acknowledging his hubris. 'Inanimate body' - he never thinks of the Creature as a future person, only as an experiment."
          />
          <QuoteCard
            quote="Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature."
            speaker="Walton, describing Victor"
            analysis="Walton's observation connects Victor to the Romantic tradition of finding solace in nature. The Alps and Arctic landscapes serve as sublime settings that dwarf human concerns. Yet 'broken in spirit' acknowledges that nature cannot heal Victor's guilt. Shelley both celebrates and critiques the Romantic ideal - nature inspires but cannot undo human wrongs."
          />
          <QuoteCard
            quote="The world was to me a secret which I desired to divine."
            speaker="Victor"
            analysis="'Divine' carries a double meaning: to discover and to play God. Victor's desire to unlock nature's secrets is presented as inherently transgressive - he seeks knowledge reserved for the divine. The world as 'secret' connects to the Prometheus myth (stealing fire) and the Garden of Eden (eating the forbidden fruit). Shelley warns against the assumption that all secrets should be revealed."
          />
          <QuoteCard
            quote="I compassionated him and sometimes felt a wish to console him, but when I looked upon him, when I saw the filthy mass that moved and talked, my heart sickened and my feelings were altered to those of horror and hatred."
            speaker="Victor"
            analysis="Victor's internal conflict encapsulated in a single sentence. He experiences compassion, but it is immediately overridden by disgust at the Creature's appearance. 'Filthy mass' reduces the Creature to formless matter. The sequence - compassion, sight, revulsion - demonstrates how prejudice based on appearance destroys moral instincts. Victor knows he should care but cannot overcome his visual revulsion."
          />
          <QuoteCard
            quote="There is something at work in my soul which I do not understand."
            speaker="Walton"
            analysis="Walton's self-awareness contrasts with Victor's self-deception. He recognises that his ambition operates below the level of rational thought - it is instinctive, compulsive, dangerous. This line could apply to Victor, the Creature, or any human being driven by forces they cannot fully comprehend. Shelley suggests that the most dangerous drives are those we do not understand in ourselves."
          />
          <QuoteCard
            quote="My heart was fashioned to be susceptible of love and sympathy, and when wrenched by misery to vice and hatred, it did not endure the violence of the change without torture."
            speaker="The Creature"
            analysis="The Creature explains that becoming violent was itself a form of suffering. 'Fashioned' implies design - he was made for love, not hatred. 'Wrenched' conveys violent force - he was torn from his natural state. This complicates any simple reading of the Creature as villain. His violence tortures him as much as his victims, making him a truly tragic figure."
          />
          <QuoteCard
            quote="How mutable are our feelings, and how strange is that clinging love we have of life even in the excess of misery!"
            speaker="Victor"
            analysis="A rare moment of philosophical depth from Victor. 'Mutable' (changeable) describes human emotional instability, while the paradox of loving life despite suffering echoes the Creature's similar observation. For once, Victor and the Creature share a sentiment, subtly reinforcing their connection as creator and creation, father and son."
          />
          <QuoteCard
            quote="All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!"
            speaker="The Creature"
            analysis="A devastating generalisation about human nature. The Creature argues that society despises suffering rather than alleviating it. The rhetorical question ('how, then, must I be hated') uses logic to demonstrate the impossibility of his acceptance. 'Beyond all living things' is precise - he is not just the most hated but the most 'wretched,' a superlative that defies comparison because he is unique."
          />
          <QuoteCard
            quote="You are my creator, but I am your master; - obey!"
            speaker="The Creature"
            analysis="A chilling inversion of the creator-creation hierarchy. The Creature asserts dominance over Victor, reversing the expected power dynamic. The dash and exclamation mark give the line a commanding, almost regal authority. 'Creator' and 'master' are deliberately contrasted - creation does not guarantee control. Shelley suggests that those who create without responsibility ultimately lose all power over their creations."
          />
          <QuoteCard
            quote="I, who irretrievably destroyed thee by destroying all thou lovedst."
            speaker="The Creature, mourning over Victor"
            analysis="The Creature's final recognition of what he has done. 'Irretrievably' echoes his earlier 'irrevocably excluded' - permanence is the defining quality of his tragedy. He understands that he destroyed Victor not by killing him directly but by killing everyone Victor loved. The reflexive structure - destroying by destroying - captures the cyclical, self-perpetuating nature of revenge."
          />
        </div>
      </Section>

      {/* Narrative Structure */}
      <Section title={tr(`Narrative Structure`)} icon="🔗">
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`Frame Narrative (Chinese Box Structure)`)}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel uses three nested narratives: Walton&apos;s letters contain Victor&apos;s
              story, which contains the Creature&apos;s story. This structure mirrors Russian dolls
              or Chinese boxes. The Creature&apos;s tale is at the innermost layer &mdash; the heart
              of the novel &mdash; forcing the reader to work through layers of mediation to reach
              the most important voice. Each narrator filters the story through their own biases and
              limitations.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Unreliable Narrators`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              All three narrators are unreliable. Victor self-pities and self-justifies. The
              Creature may exaggerate his innocence to gain sympathy. Walton is dazzled by Victor
              and may idealise him. The reader must actively evaluate each account, which
              complicates moral judgements. Who is telling the truth? Shelley deliberately makes
              this impossible to determine, reflecting the novel&apos;s ambiguity about who is the
              real &ldquo;monster.&rdquo;
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Epistolary Elements`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Walton&apos;s letters to Margaret Saville ground the fantastic events in a seemingly
              real correspondence. Letters also appear within the narrative (from Elizabeth,
              Alphonse, and others), creating a web of communication and miscommunication. The
              epistolary form was popular in 18th-century fiction and gives the novel an air of
              documentary authenticity.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Parallelism and Doubling`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel is structured around parallels: Victor and the Creature mirror each other;
              Walton mirrors Victor; the Creature&apos;s education mirrors Victor&apos;s. Both
              Victor and the Creature lose everything; both end up in the Arctic. These doublings
              reinforce the theme that creator and creation are bound together, and that the monster
              is not &ldquo;other&rdquo; but a reflection of humanity.
            </p>
          </div>
        </div>
      </Section>

      {/* Gothic Conventions */}
      <Section title={tr(`Gothic Conventions`)} icon="🏚️">
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Sublime Landscapes`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The Alps, the Arctic, and the Scottish Highlands provide sublime settings that
              overwhelm human characters with their scale and power. These landscapes reflect the
              characters&apos; emotional states &mdash; Victor finds temporary peace in mountain
              scenery but is ultimately dwarfed by nature. The Creature inhabits these wild spaces,
              existing outside civilisation. Shelley draws on Romantic ideas of the sublime as both
              beautiful and terrifying.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`The Transgressive Scientist`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Victor is the Gothic &ldquo;overreacher&rdquo; who transgresses natural and divine
              boundaries. Like Faust, Prometheus, and later Dr Moreau, he seeks forbidden knowledge
              and pays the ultimate price. The laboratory scene &mdash; the &ldquo;dreary night of
              November,&rdquo; the candle guttering &mdash; creates a classic Gothic atmosphere of
              dread.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`The Monster and the Doppelganger`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The Creature is both a literal monster (physically grotesque) and Victor&apos;s
              psychological double. They haunt each other, and neither can exist peacefully while
              the other lives. The Creature may be read as Victor&apos;s repressed guilt and
              unconscious desires given physical form &mdash; a Gothic externalisation of inner
              conflict.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">{tr(`Death and Decay`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel is saturated with death: Victor&apos;s mother, William, Justine, Clerval,
              Elizabeth, Alphonse, and eventually Victor and the Creature. The creation scene
              involves &ldquo;charnel houses&rdquo; and body parts, blending scientific ambition
              with bodily horror. Shelley connects the desire to conquer death with death itself.
            </p>
          </div>
        </div>
      </Section>

      {/* Context */}
      <Section title="Historical and Social Context" icon="🏛️">
        <div className="space-y-4">
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">{tr(`Mary Shelley&apos;s Life`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Mary Shelley (1797&ndash;1851) wrote <em>Frankenstein</em> when she was just 18,
              beginning it during the famous &ldquo;ghost story competition&rdquo; at Lake Geneva in
              1816 with Percy Shelley, Lord Byron, and John Polidori. Her mother, the feminist Mary
              Wollstonecraft, died giving birth to her &mdash; a fact that profoundly shapes the
              novel&apos;s exploration of creation and parental responsibility. Shelley also lost
              her own premature baby and dreamed of warming it back to life by the fire, an image
              eerily echoed in the novel.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">Romanticism</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              <em>Frankenstein</em> both embraces and critiques Romanticism. The novel celebrates
              nature&apos;s sublime power and individual emotional experience, but it warns against
              the Romantic elevation of the individual genius. Victor is a Romantic hero gone wrong
              &mdash; his passion and ambition, traits celebrated by Romantic poets, lead to
              destruction. Shelley, surrounded by Romantic poets (her husband Percy Shelley and
              Byron), understood the movement&apos;s appeal but also its dangers.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">{tr(`Galvanism and Science`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Luigi Galvani&apos;s experiments (1780s&ndash;90s) showed that electrical impulses
              could make dead frogs&apos; legs twitch, raising the possibility that electricity
              could reanimate the dead. His nephew Giovanni Aldini publicly applied electrical
              currents to executed criminals. Shelley attended scientific lectures and was aware of
              these experiments. The novel never specifies <em>how</em> Victor creates the Creature,
              but contemporary readers would have associated it with galvanism.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">{tr(`Industrial Revolution`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The early 19th century saw rapid industrialisation, creating both wonder and anxiety.
              New technologies were transforming society, raising questions about the moral
              responsibility of inventors and scientists. The Creature can be read as a metaphor for
              the working class &mdash; created by the powerful to serve their interests, then
              abandoned and demonised when no longer convenient.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">{tr(`Paradise Lost Connections`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Milton&apos;s <em>Paradise Lost</em> (1667) is directly referenced throughout the
              novel. The Creature reads it and identifies with both Adam (the first created being)
              and Satan (the fallen angel who rebels against his creator). Victor parallels God
              &mdash; a creator who abandons his creation. The novel&apos;s epigraph is from{' '}
              <em>Paradise Lost</em>. Shelley uses Milton to explore the relationship between
              creator and created, free will and determinism, and the nature of evil.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-bold text-primary">{tr(`Prometheus Myth`)}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              The novel&apos;s subtitle, &ldquo;The Modern Prometheus,&rdquo; references the Greek
              Titan who stole fire from the gods and gave it to humanity, for which Zeus punished
              him eternally. Victor steals the &ldquo;spark&rdquo; of life and suffers endlessly. In
              some versions of the myth, Prometheus also <em>created</em> humanity from clay.
              Shelley combines both aspects: Victor is creator and fire-thief, playing God and
              paying the price.
            </p>
          </div>
        </div>
      </Section>

      {/* Essay Planning */}
      <Section title={tr(`Essay Planning`)} icon="📝">
        <div className="space-y-5">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`How to Structure a Frankenstein Essay`)}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              GCSE literature essays on <em>Frankenstein</em> typically require you to respond to an
              extract and then write about the wider novel. Use the <strong>PEEL</strong> structure
              (Point, Evidence, Explain, Link) or <strong>What-How-Why</strong> (What is Shelley
              saying? How does she convey it through language, structure, and form? Why &mdash; what
              is the effect on the reader and what is the contextual significance?). Always consider
              Shelley&apos;s intentions as a writer.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-bold text-foreground">{tr(`Sample Question 1: Responsibility`)}</h4>
            <p className="mt-1 text-sm italic text-muted-foreground">
              &ldquo;How does Shelley present ideas about responsibility in Frankenstein?&rdquo;
            </p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Introduction:</strong> Define responsibility in context. Shelley explores
                parental, scientific, and moral responsibility. Thesis: Victor&apos;s failure of
                responsibility is the novel&apos;s driving tragedy.
              </p>
              <p>
                <strong>{tr(`Paragraph 1 &mdash; Victor as negligent creator:`)}</strong> &ldquo;I
                had worked hard for nearly two years&rdquo; shows obsessive creation without thought
                for consequences. He abandons the Creature at birth. Link to Shelley&apos;s own
                experience of motherlessness and Wollstonecraft&apos;s ideas about parental duty.
              </p>
              <p>
                <strong>{tr(`Paragraph 2 &mdash; Silence over Justine:`)}</strong> Victor knows the
                Creature killed William but allows Justine to be executed. His responsibility
                extends beyond creation to active moral cowardice. Connect to Shelley&apos;s
                critique of male passivity.
              </p>
              <p>
                <strong>{tr(`Paragraph 3 &mdash; The Creature&apos;s argument:`)}</strong> &ldquo;I
                ought to be thy Adam&rdquo; &mdash; the Creature uses biblical language to frame
                responsibility as a creator&apos;s <em>duty</em>. Link to Paradise Lost and the idea
                that God has obligations to his creations.
              </p>
              <p>
                <strong>{tr(`Paragraph 4 &mdash; Walton as contrast:`)}</strong> Walton ultimately
                takes responsibility for his crew and turns back. He is the character who learns
                from Victor&apos;s failure. Structural significance: the frame narrative allows the
                reader to see what responsible choice looks like.
              </p>
              <p>
                <strong>Conclusion:</strong> Shelley argues that creation without responsibility is
                the ultimate act of monstrosity. The novel remains relevant in debates about
                scientific ethics (genetic engineering, AI).
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-bold text-foreground">{tr(`Sample Question 2: Monstrosity`)}</h4>
            <p className="mt-1 text-sm italic text-muted-foreground">
              &ldquo;Who is the real monster in Frankenstein? How does Shelley present ideas about
              monstrosity?&rdquo;
            </p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Introduction:</strong> Challenge the assumption that the Creature is the
                monster. Shelley deliberately blurs the line between creator and creation, human and
                &ldquo;monster.&rdquo;
              </p>
              <p>
                <strong>{tr(`Paragraph 1 &mdash; The Creature&apos;s appearance:`)}</strong>{' '}
                &ldquo;dull yellow eye&rdquo; &mdash; Victor judges entirely on looks. Discuss how
                the novel critiques prejudice. Only the blind De Lacey shows kindness. Link to
                contemporary debates about physiognomy.
              </p>
              <p>
                <strong>{tr(`Paragraph 2 &mdash; Victor&apos;s moral monstrosity:`)}</strong> Victor
                abandons his creation, allows Justine to die, and destroys the female creature out
                of selfish fear. &ldquo;I compassionated him&rdquo; but revulsion overrides
                compassion &mdash; appearance defeats morality.
              </p>
              <p>
                <strong>{tr(`Paragraph 3 &mdash; The Creature&apos;s transformation:`)}</strong>{' '}
                &ldquo;I was benevolent and good; misery made me a fiend.&rdquo; Nature vs nurture
                &mdash; monstrosity is created by society, not born. Link to Rousseau and Romantic
                philosophy.
              </p>
              <p>
                <strong>{tr(`Paragraph 4 &mdash; Structural presentation:`)}</strong> The frame
                narrative places the Creature&apos;s voice at the centre &mdash; the heart of the
                novel. Shelley gives him the most eloquent speech, undermining Victor&apos;s
                characterisation of him as a &ldquo;wretch.&rdquo;
              </p>
              <p>
                <strong>Conclusion:</strong> Shelley argues that monstrosity is a social construct.
                The true monster is not the Creature but a society that refuses to look beyond the
                surface.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-bold text-foreground">{tr(`Sample Question 3: Isolation`)}</h4>
            <p className="mt-1 text-sm italic text-muted-foreground">
              &ldquo;How does Shelley present isolation in Frankenstein?&rdquo;
            </p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Introduction:</strong> Isolation is both chosen and imposed. Shelley
                presents it as the root cause of tragedy for both Victor and the Creature.
              </p>
              <p>
                <strong>{tr(`Paragraph 1 &mdash; Victor&apos;s self-imposed isolation:`)}</strong>{' '}
                He cuts himself off for two years during creation. &ldquo;I shunned my fellow
                creatures as if I had been guilty of a crime.&rdquo; His isolation mirrors the
                Creature&apos;s later exclusion. Link to Romantic ideas about solitary genius.
              </p>
              <p>
                <strong>{tr(`Paragraph 2 &mdash; The Creature&apos;s enforced isolation:`)}</strong>{' '}
                &ldquo;Everywhere I see bliss, from which I alone am irrevocably excluded.&rdquo; He
                is isolated by his unique existence and by human prejudice. His loneliness drives
                him to demand a companion.
              </p>
              <p>
                <strong>{tr(`Paragraph 3 &mdash; Walton&apos;s loneliness:`)}</strong> &ldquo;I
                desire the company of a man who could sympathise with me.&rdquo; Walton&apos;s
                isolation at sea parallels both Victor and the Creature. The three narrators are all
                fundamentally alone.
              </p>
              <p>
                <strong>{tr(`Paragraph 4 &mdash; Structural isolation:`)}</strong> The nested
                narrative itself enacts isolation &mdash; each voice is contained within another,
                unable to speak directly to the reader. The Arctic setting symbolises ultimate
                isolation: cold, empty, lifeless.
              </p>
              <p>
                <strong>Conclusion:</strong> Shelley presents isolation as both a cause and
                consequence of obsession. The novel argues that human beings need companionship to
                remain moral and sane.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-bold text-foreground">
              {tr(`Key Verbs for Discussing Shelley&apos;s Methods`)}
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                'presents',
                'conveys',
                'suggests',
                'implies',
                'critiques',
                'challenges',
                'subverts',
                'reinforces',
                'foreshadows',
                'juxtaposes',
                'parallels',
                'symbolises',
                'reflects',
                'undermines',
                'exposes',
              ].map((verb) => (
                <span
                  key={verb}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {verb}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Writer's Methods */}
      <Section title={tr(`Writer&rsquo;s Methods &amp; Techniques`)} icon="&#9997;">
        <div className="space-y-4">
          {[
            {
              method: 'Frame Narrative (Chinese Box Structure)',
              detail:
                "Shelley uses three nested narratives: Walton's letters contain Victor's story, which contains the Creature's story. This structure forces the reader to evaluate multiple perspectives and biases. The Creature's voice, buried at the novel's centre, is paradoxically the most eloquent and sympathetic. The layering also mirrors the theme of responsibility: each narrator passes judgement on the others while avoiding self-examination.",
            },
            {
              method: 'Unreliable Narrators',
              detail:
                "All three narrators are unreliable. Victor self-pities and self-justifies, presenting himself as a victim rather than acknowledging his culpability. The Creature may exaggerate his early innocence to gain sympathy. Walton is dazzled by Victor and may idealise him. Shelley forces the reader to actively evaluate competing accounts, complicating moral judgements and reflecting the novel's ambiguity about who is the real 'monster'.",
            },
            {
              method: 'Gothic Conventions',
              detail:
                "Shelley deploys and subverts Gothic conventions: sublime landscapes, transgressive science, the doppelganger, death and decay, and the atmosphere of dread. The creation scene on a 'dreary night of November' is quintessentially Gothic. However, Shelley subverts the genre by making the 'monster' the most sympathetic character, challenging the reader's assumptions about what is truly monstrous.",
            },
            {
              method: 'Allusion to Paradise Lost',
              detail:
                "Milton's Paradise Lost is directly referenced throughout. The Creature reads it and identifies with both Adam (the first created being, abandoned by his creator) and Satan (the fallen angel who rebels). Victor parallels God as a negligent creator. The novel's epigraph is from Paradise Lost: 'Did I request thee, Maker, from my clay / To mould me Man?' These allusions elevate the Creature's personal tragedy into a universal meditation on creation, abandonment, and rebellion.",
            },
            {
              method: 'Doubling and Parallelism',
              detail:
                "Victor and the Creature are structured as doubles: both are isolated, both lose everyone they love, both end up in the Arctic, both are consumed by obsession. Walton mirrors Victor, pursuing dangerous ambition in frozen wastes. The doubling reinforces the theme that creator and creation are inextricably bound, and that the monster is not 'other' but a reflection of humanity's own capacity for destruction.",
            },
            {
              method: 'Pathetic Fallacy and Sublime Landscapes',
              detail:
                "Shelley aligns landscape with emotional and moral states. The Alps represent the sublime --- both beautiful and terrifying. The Arctic represents isolation, obsession, and death. Victor finds temporary peace in mountain scenery but is dwarfed by nature's scale. The Creature inhabits wild, inhospitable spaces, existing outside civilisation. Shelley draws on Romantic ideas of the sublime to create settings that overwhelm human characters.",
            },
            {
              method: 'Epistolary Elements',
              detail:
                "Walton's letters to Margaret Saville ground the fantastic events in seemingly authentic correspondence. Letters within the narrative (from Elizabeth, Alphonse, and others) create a web of communication and miscommunication. The epistolary form was popular in 18th-century fiction and gives the novel documentary authenticity while reinforcing the theme that truth is always mediated through individual perspective.",
            },
            {
              method: 'Ambiguity and Moral Complexity',
              detail:
                "Shelley refuses to provide simple moral answers. Victor is both victim and villain; the Creature is both sympathetic and monstrous; creation is both magnificent and horrifying. The novel's multiple narrators prevent any single perspective from dominating. This moral ambiguity is the novel's greatest strength: it forces the reader to make their own judgements about responsibility, justice, and what it means to be human.",
            },
          ].map((m) => (
            <div key={m.method} className="rounded-lg border border-border bg-muted p-4">
              <h4 className="font-semibold text-foreground">{m.method}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Grade 9 Exemplar Points */}
      <Section title={tr(`Grade 9 Exemplar Points`)} icon="&#11088;">
        <p className="mb-4 text-sm text-muted-foreground">
          These sophisticated, conceptualised arguments distinguish Grade 9 responses.
        </p>
        <div className="space-y-3">
          {[
            "Shelley's frame narrative structure is itself an argument about the nature of truth: by filtering the Creature's story through Victor, and Victor's story through Walton, she demonstrates that all knowledge is mediated and that the most marginalised voices are the hardest to hear. The reader must work through layers of privilege to reach the most important perspective --- a structural enactment of how society silences those it has created and abandoned.",
            "The Creature's self-education through Paradise Lost, Plutarch's Lives, and The Sorrows of Young Werther is not merely a plot device but a philosophical argument. Shelley suggests that literature can create empathy and moral understanding, but it can also heighten suffering by making the educated outcast aware of exactly what he has been denied. Knowledge without belonging is a form of torture.",
            "Victor's failure is not that he created life but that he refused to take responsibility for it. Shelley makes a proto-feminist argument about parental duty: Victor plays God (the 'masculine' act of creation) but refuses to mother his creation (the 'feminine' act of nurture). Shelley, whose own mother died giving her life, understood that creation without care is the ultimate act of cruelty.",
            "The Arctic setting at the novel's beginning and end functions as a moral landscape. The ice represents the endpoint of both Victor's and the Creature's obsessions: a place where nothing can live, where pursuit has consumed everything. Shelley argues that unchecked ambition leads not to discovery but to desolation. The Arctic is what remains when obsession has destroyed every human connection.",
            "The Creature's demand for a female companion raises questions Shelley deliberately leaves unresolved. Victor destroys the female creature because he fears reproduction --- that the Creature might found a race. His fear is both rational (the consequences are unknowable) and deeply prejudiced (he assumes the offspring would be monstrous). Shelley forces the reader to consider whether Victor's decision is responsible caution or selfish cruelty --- and the novel supports both readings.",
            "The novel can be read as Shelley's critique of Romanticism from within. Victor embodies the Romantic ideal --- passionate, brilliant, driven by a desire to transcend human limitations --- yet these very qualities destroy him. Shelley, surrounded by Romantic poets who celebrated individual genius (Percy Shelley, Byron), understood the movement's appeal but saw its dangers. The novel argues that genius without empathy is monstrous.",
            "The blind De Lacey is the only character who shows the Creature kindness, precisely because he cannot see him. Shelley uses this to argue that human prejudice is primarily visual: we judge by appearance and reject what we cannot assimilate aesthetically. The Creature's physical appearance is the sole barrier to his acceptance. Shelley's argument anticipates modern debates about prejudice and challenges the reader to examine their own responses to difference.",
            "The Creature's final words --- 'I shall ascend my funeral pile triumphantly and exult in the agony of the torturing flames' --- fuse suffering with triumph in a way that undermines any simple reading of his character. He is simultaneously victim and villain, destroyed by others and by himself, seeking peace through self-destruction. Shelley refuses to grant him either redemption or damnation, leaving the reader with the uncomfortable recognition that the most human response to an inhuman world may be self-annihilation.",
          ].map((point, i) => (
            <div key={i} className="rounded-lg border-l-4 border-accent bg-muted p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">Exam Tips for Frankenstein</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Consider whose perspective you trust.</strong> The frame narrative structure
              means every statement is filtered through a narrator. Discuss reliability.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Shelley&apos;s context.`)}</strong> Her mother&apos;s death, the
              Galvanism debates, and the Romantic movement are all directly relevant.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Challenge the idea of the &ldquo;monster.&rdquo;</strong> The best essays
              explore who is truly monstrous &mdash; the Creature or Victor.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Reference Paradise Lost.</strong> The Creature&apos;s identification with Adam
              and Satan is crucial to understanding his character and Shelley&apos;s intentions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Analyse language closely.`)}</strong> Pick apart individual words &mdash;
              &ldquo;wretch,&rdquo; &ldquo;daemon,&rdquo; &ldquo;abortion&rdquo; &mdash; to show how
              Shelley shapes the reader&apos;s response through diction.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Link themes together.`)}</strong> The strongest essays connect multiple
              themes &mdash; e.g., ambition leads to isolation, which leads to failed
              responsibility, which leads to monstrosity.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Discuss Gothic conventions.`)}</strong> Show awareness of the genre
              &mdash; sublime landscapes, transgressive science, the doppelg&auml;nger &mdash; and
              how Shelley uses and subverts them.
            </span>
          </li>
        </ul>
      </div>

      {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
      <Section title={tr(`Practice Questions`)} icon="✍️">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE
          English Literature mark schemes. Aim for at least 150 words per response to get meaningful
          feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">{tr(`Question 1`)}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shelley present the theme of ambition and its consequences in{' '}
              <em>Frankenstein</em>? Refer to the whole novel in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Frankenstein - How Shelley presents the theme of ambition and its consequences"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">{tr(`Question 2`)}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shelley use the Creature to explore ideas about responsibility and rejection?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Frankenstein - How Shelley uses the Creature to explore responsibility and rejection"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">{tr(`Question 3`)}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shelley present the theme of isolation in <em>Frankenstein</em>? Consider
              both Victor and the Creature in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Frankenstein - How Shelley presents the theme of isolation through Victor and the Creature"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">{tr(`Question 4`)}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Shelley use Gothic conventions to explore what it means to be human in{' '}
              <em>Frankenstein</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder={tr(`Write your essay response here...`)}
              label="Your answer"
              subject="English Literature"
              topic="Frankenstein - How Shelley uses Gothic conventions to explore what it means to be human"
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
          <em>Frankenstein</em> by Mary Shelley (first published 1818) is in the public domain. All
          quotations are reproduced freely.
        </p>
      </footer>
    </>
  )
}
