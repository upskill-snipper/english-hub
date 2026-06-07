import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Lightbulb, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Frankenstein Themes - Deep Study | The English Hub',
    description:
      'In-depth GCSE theme analysis for Frankenstein by Mary Shelley: Creation & Responsibility, Nature vs Nurture, Isolation, Knowledge, Ambition, and Monstrosity.',
  },
  title: 'Frankenstein Themes - Deep Study',
  description:
    'In-depth GCSE theme analysis for Frankenstein by Mary Shelley: Creation & Responsibility, Nature vs Nurture, Isolation, Knowledge, Ambition, and Monstrosity.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/themes',
  },
}

// ── Theme data ────────────────────────────────────────────────────────────────

type ThemeStudy = {
  title: string
  overview: string
  detailed: string
  keyQuotes: { quote: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeStudy[] = [
  {
    title: 'Creation and Responsibility',
    overview:
      "The novel's central theme: what duties does a creator owe to the thing they have created?",
    detailed:
      "Frankenstein is, at its core, a novel about the ethics of creation. Victor Frankenstein brings a living being into existence and then immediately abandons it, refusing to provide the care, guidance, or companionship that any newborn requires. Shelley frames this as a profound moral failure, drawing explicit parallels to both parenthood and divine creation. The Creature himself articulates the accusation most powerfully: \"I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.\" Unlike Milton's Satan, who chose to rebel, the Creature is cast out for the crime of being ugly. Victor's irresponsibility is not a single moment of weakness but a sustained pattern: he abandons the Creature at birth, refuses to acknowledge him, allows Justine to die rather than reveal the truth, agrees to create a female companion and then destroys her, and finally pursues the Creature not to make amends but to destroy him. Shelley's argument is clear: creation without responsibility is the most dangerous act a person can commit. The theme resonates beyond the novel's immediate plot, speaking to contemporary debates about scientific ethics, parental obligation, and the social contract between those who hold power and those who are affected by it. Mary Shelley, who lost her own mother Mary Wollstonecraft to complications of childbirth and experienced the death of her first child, understood the stakes of creation and abandonment at a deeply personal level.",
    keyQuotes: [
      {
        quote:
          'I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.',
        speaker: 'The Creature -- Chapter 10',
        analysis:
          'The Creature frames his relationship with Victor through Paradise Lost, positioning Victor as a negligent God. The phrase "for no misdeed" is crucial: unlike Milton\'s Satan, the Creature did nothing to deserve his exile. Shelley inverts the creation myth to make the creator, not the creation, morally culpable.',
      },
      {
        quote:
          'In a fit of enthusiastic madness I created a rational creature and was bound towards him to assure, as far as was in my power, his happiness and well-being. This was my duty.',
        speaker: 'Victor -- Chapter 24',
        analysis:
          'Victor finally admits his obligation, but this recognition comes far too late. "Enthusiastic madness" retroactively excuses his ambition as temporary insanity. The admission of duty is used to justify destroying the female creature, revealing Victor\'s selective and self-serving understanding of responsibility.',
      },
      {
        quote: 'You are my creator, but I am your master; -- obey!',
        speaker: 'The Creature -- Chapter 20',
        analysis:
          'The power inversion is complete: the creator is now controlled by the creation. Shelley argues that irresponsible creation does not free the creator from consequences -- it makes them a slave to those consequences. The imperative "obey!" is both a demand and an indictment.',
      },
    ],
    contextLink:
      'Shelley wrote Frankenstein during a period of rapid scientific advancement. Galvanic experiments by Luigi Galvani and his nephew Giovanni Aldini (who had publicly attempted to reanimate a corpse in 1803) raised genuine questions about the boundary between life and death. The novel interrogates whether scientists have a moral obligation to consider the consequences of their discoveries, a question that remains urgent in the age of artificial intelligence, genetic engineering, and climate change.',
    examTip:
      "Always connect this theme to Victor's specific failures: his abandonment at birth, his silence during Justine's trial, and his destruction of the female creature. These are concrete moments where Shelley dramatises the consequences of irresponsible creation.",
  },
  {
    title: 'Nature vs Nurture',
    overview: 'Is the Creature born evil or made evil? Shelley argues powerfully for nurture.',
    detailed:
      'Shelley engages directly with one of the most important philosophical debates of her era: whether human character is determined by innate nature or by social experience. The novel comes down firmly on the side of nurture. The Creature is born without any moral predisposition. He describes his earliest experiences -- light, warmth, hunger, birdsong -- with the wonder of a newborn. He learns goodness by observing the De Lacey family: he is moved by their poverty and secretly helps them; he is delighted by music and language; he weeps at the suffering of others. His first instinct upon encountering humans is not violence but a desire for connection: "my heart yearned to be known and loved by these amiable creatures." It is only after systematic rejection -- by Victor, by the De Laceys, by every human he encounters -- that the Creature turns to violence, and even then he frames his moral descent as a direct consequence of his treatment: "I was benevolent and good; misery made me a fiend." Shelley draws on Jean-Jacques Rousseau\'s theory of the "noble savage" -- the idea that humans are naturally good but corrupted by society -- and on John Locke\'s concept of the mind as a tabula rasa (blank slate) upon which experience writes. The Creature\'s education through books (Paradise Lost, Plutarch\'s Lives, The Sorrows of Young Werther) demonstrates the power of culture to shape moral consciousness. His tragedy is that he develops a full understanding of human values while being permanently excluded from human society. The nature-versus-nurture theme also applies to Victor: raised in a loving family, given every advantage, Victor nonetheless becomes the architect of catastrophe because his curiosity is never properly guided. His father dismisses Agrippa as "sad trash" but offers no alternative, leaving Victor\'s dangerous ambition unchecked.',
    keyQuotes: [
      {
        quote:
          'I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.',
        speaker: 'The Creature -- Chapter 10',
        analysis:
          'The Creature\'s most important statement: virtue is conditional on social conditions, not inherent character. The passive construction "misery made me" locates the cause of evil outside the Creature. The conditional promise -- "Make me happy, and I shall again be virtuous" -- is Shelley\'s thesis that moral behaviour requires a supportive social environment.',
      },
      {
        quote:
          'My vices are the children of a forced solitude that I abhor, and my virtues will necessarily arise when I live in communion with an equal.',
        speaker: 'The Creature -- Chapter 17',
        analysis:
          'The Creature uses Enlightenment language to explain his moral trajectory. "Children of a forced solitude" personifies his vices as products of isolation, not inherent traits. "Necessarily" insists on a causal relationship between social conditions and moral outcomes, echoing Rousseau\'s Social Contract.',
      },
      {
        quote: 'If I have no ties and no affections, hatred and vice must be my portion.',
        speaker: 'The Creature -- Chapter 17',
        analysis:
          'The word "must" is deterministic: without love, evil is inevitable. The Creature presents this not as a threat but as a philosophical truth. "Ties and affections" are the foundations of moral life; without them, morality has no material to work on.',
      },
    ],
    contextLink:
      "Shelley's parents were both radical thinkers. Her mother, Mary Wollstonecraft, argued in A Vindication of the Rights of Woman (1792) that women's perceived intellectual inferiority was the result of poor education, not innate deficiency. Her father, William Godwin, was a political philosopher who believed that human character was entirely shaped by environment. Shelley inherits their emphasis on nurture and uses the Creature to dramatise the devastating consequences of social exclusion.",
    examTip:
      "Use the De Lacey episode as your key evidence: the Creature learns goodness from observation and is driven to evil only by rejection. This demonstrates Shelley's argument that monstrosity is socially constructed.",
  },
  {
    title: 'Isolation',
    overview:
      "Every major character in the novel suffers from loneliness, and isolation is both the cause and the consequence of the novel's tragedies.",
    detailed:
      'Isolation is Frankenstein\'s most pervasive condition. Victor isolates himself to pursue his experiment, cutting himself off from his family, his friend Clerval, and all human warmth for months. The Creature is born into isolation and never escapes it: he is rejected by his creator, attacked by villagers, expelled by the De Laceys, and denied a companion. Walton is isolated in the Arctic, longing for "the company of a man who could sympathise with me." Even secondary characters experience isolation: Elizabeth waits alone in Geneva; Justine dies alone, falsely accused; the De Laceys are exiles. Shelley presents isolation not as a neutral condition but as actively destructive. Victor\'s solitary work in his laboratory is where his moral compass fails: cut off from other people, he loses the ability to judge the ethics of his actions. The Creature\'s isolation is what transforms him from an innocent being into a killer. His most devastating insight is that "all men hate the wretched" -- society is structured to exclude and persecute those it deems different, creating a self-reinforcing cycle of isolation and violence. The novel argues, through both Victor and the Creature, that human beings need connection to remain fully human. Ambition that isolates, knowledge that separates, and creation that does not include care all lead to destruction. The Arctic setting -- vast, frozen, lifeless -- is the novel\'s ultimate symbol of isolation: both Victor and the Creature end their journeys in a landscape stripped of all life and warmth.',
    keyQuotes: [
      {
        quote:
          'I desire the company of a man who could sympathise with me, whose eyes would reply to mine.',
        speaker: 'Walton -- Letter II',
        analysis:
          'Walton\'s loneliness establishes isolation as a condition shared by all three narrators. The specific detail "whose eyes would reply to mine" expresses the need for recognition and emotional reciprocity -- the fundamental human requirements that the Creature is permanently denied.',
      },
      {
        quote:
          'All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!',
        speaker: 'The Creature -- Chapter 10',
        analysis:
          "A devastating social observation: society's hatred is proportional to the sufferer's misery, creating a vicious cycle. The exclamatory syntax and superlative \"beyond all living things\" convey the Creature's unique isolation. Shelley critiques a social order that punishes vulnerability rather than alleviating it.",
      },
      {
        quote:
          'I shunned the face of man; all sound of joy or complacency was torture to me; solitude was my only consolation -- deep, dark, deathlike solitude.',
        speaker: 'Victor -- Chapter 9',
        analysis:
          "Victor's isolation mirrors the Creature's but is self-imposed. The triple adjective \"deep, dark, deathlike\" creates a Gothic intensity that links solitude to death itself. By the novel's midpoint, creator and creature have become doubles, both trapped in the same emotional wasteland.",
      },
    ],
    contextLink:
      'The Romantic movement, to which Shelley belonged, celebrated the individual but also recognised the dangers of excessive individualism. Shelley was influenced by her husband Percy Bysshe Shelley\'s poem "Alastor; or, The Spirit of Solitude" (1816), which warns that the pursuit of an ideal vision can lead to self-destructive isolation. The biographical context is also relevant: Mary Shelley experienced profound personal isolation after the deaths of her children and, later, of Percy himself.',
    examTip:
      "Isolation in Frankenstein works on three levels: physical (the Arctic, the laboratory, the mountains), social (rejection by family and community), and emotional (the inability to share one's thoughts and feelings). Address all three for a comprehensive answer.",
  },
  {
    title: 'Dangerous Knowledge',
    overview:
      'The pursuit of forbidden knowledge destroys Victor and everyone around him. Shelley asks: are there things humans should not know?',
    detailed:
      'The novel\'s subtitle, "The Modern Prometheus," announces its central concern with forbidden knowledge. In Greek mythology, Prometheus stole fire from the gods and was punished by eternal torment. Victor\'s quest to discover "the cause of generation and life" and to "infuse a spark of being into lifeless matter" is a direct parallel: he steals creative power from nature (or God) and suffers catastrophic consequences. Shelley does not condemn knowledge itself -- the Creature\'s education, for example, is presented as ennobling and humanising. What she condemns is the pursuit of knowledge without moral reflection, without social accountability, and without regard for consequences. Victor is warned repeatedly: his father dismisses Agrippa, the death of a tree by lightning should have turned him from "natural philosophy" altogether, and Walton\'s narrative frames the entire story as a cautionary tale. Yet Victor presses on, driven by what he calls an "ardour that far exceeded moderation." The language of excess and appetite runs through all of Victor\'s descriptions of his work, suggesting that the pursuit of knowledge has become a compulsion akin to addiction. The novel makes a crucial distinction between knowledge that connects (Clerval\'s study of languages and literature) and knowledge that isolates (Victor\'s solitary experiments). The former is life-enhancing; the latter is destructive. Professor Waldman\'s seductive lecture -- promising that modern chemists "have acquired new and almost unlimited powers" and can "command the thunders of heaven" -- is the novel\'s equivalent of the serpent\'s temptation in Eden, and Victor, like Eve, cannot resist.',
    keyQuotes: [
      {
        quote:
          'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow.',
        speaker: 'Victor -- Chapter 4',
        analysis:
          'Victor\'s explicit warning to Walton frames the entire novel as a cautionary tale about intellectual hubris. The contrast between the "happy" provincial and the aspiring overreacher echoes the Fall of Man: the desire to "become greater than his nature will allow" is the sin of pride. The word "acquirement" makes knowledge sound like a possession that corrupts its owner.',
      },
      {
        quote:
          'So much has been done, exclaimed the soul of Frankenstein -- more, far more, will I achieve.',
        speaker: 'Victor -- Chapter 3',
        analysis:
          'Victor\'s grandiose self-narration (referring to himself as "the soul of Frankenstein") reveals the narcissism that drives his research. "More, far more" escalates beyond all moderation. Shelley presents the desire to exceed what others have accomplished as inherently dangerous when unmoored from ethical consideration.',
      },
      {
        quote:
          'You seek for knowledge and wisdom, as I once did; and I ardently hope that the gratification of your wishes may not be a serpent to sting you, as mine has been.',
        speaker: 'Victor -- Letter IV',
        analysis:
          'The serpent image connects the pursuit of knowledge to the Garden of Eden and the Fall. "Gratification" frames knowledge-seeking as appetite, something that feels pleasurable but may prove fatal. Victor addresses Walton but speaks to the reader: the warning is universal.',
      },
    ],
    contextLink:
      "Shelley wrote the novel during a period of explosive scientific progress. Humphry Davy's lectures on chemistry (which Shelley read) proclaimed science's power to master nature. Galvanic experiments suggested that electricity might reanimate the dead. The novel asks whether there are natural limits that science should respect -- a question that anticipated twentieth-century debates about nuclear weapons, genetic engineering, and artificial intelligence by nearly two centuries.",
    examTip:
      'Distinguish between knowledge and wisdom. Victor has vast knowledge but no wisdom -- he never asks "should I do this?" before asking "can I do this?" This distinction is key to Shelley\'s critique.',
  },
  {
    title: 'Ambition',
    overview:
      'Victor and Walton share a consuming ambition that isolates them from humanity and leads to destruction.',
    detailed:
      'Ambition in Frankenstein is presented as a force that begins as admirable aspiration but becomes destructive when it overrides moral judgement and human connection. Victor\'s ambition to discover the secret of life is initially framed in heroic terms: he will "pour a torrent of light into our dark world" and "banish disease from the human frame." These goals sound noble, but Shelley carefully shows how ambition corrupts: Victor\'s language shifts from benevolence to possession ("a new species would bless me as its creator and source"), his work isolates him from everyone who loves him, and his single-minded focus blinds him to the ethical implications of what he is doing. Walton\'s parallel ambition to reach the North Pole serves as a structural echo. Like Victor, Walton frames his quest in terms of benefit to humanity ("I may there discover the wondrous power which attracts the needle"), but his real motivation is glory and the desire to "tread a land never before imprinted by the foot of man." Shelley links ambition to colonialism, scientific overreach, and the Romantic cult of the individual genius who imagines himself exempt from ordinary moral constraints. The novel does not condemn ambition per se -- Clerval\'s ambition to learn and to do good is presented positively -- but it insists that ambition must be tempered by responsibility, empathy, and awareness of consequences. Victor\'s tragedy is that he possesses the intellect for creation but lacks the moral imagination to consider what his creation will need.',
    keyQuotes: [
      {
        quote:
          'I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man.',
        speaker: 'Walton -- Letter I',
        analysis:
          'Walton\'s language of appetite and conquest ("satiate," "imprinted by the foot") frames ambition as a colonising force. The desire to go where no one has been before sounds heroic but carries an implicit arrogance: the assumption that the unknown exists to be claimed and mastered.',
      },
      {
        quote:
          'A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me.',
        speaker: 'Victor -- Chapter 4',
        analysis:
          'Victor imagines himself as a benevolent God whose creations will worship him. The phrase "bless me as its creator" reveals that his ambition is driven by a desire for adoration, not by genuine altruism. The contrast between this fantasy and the reality of the Creature\'s rejection is devastating.',
      },
      {
        quote:
          'How dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow.',
        speaker: 'Victor -- Chapter 4',
        analysis:
          'Victor reflects that ignorance may be preferable to the knowledge he has gained. "Greater than his nature will allow" frames his ambition as a violation of natural limits. Shelley echoes the classical Greek concept of hubris: the pride that precedes a fall.',
      },
    ],
    contextLink:
      "The early nineteenth century saw the rise of the Romantic genius -- the idea that exceptional individuals (artists, scientists, explorers) should be free from conventional moral constraints. Percy Shelley, Byron, and other members of Mary Shelley's circle embodied this ideal. Frankenstein can be read as Mary Shelley's critique of the Romantic hero: Victor is brilliant and passionate but his refusal to accept ordinary human obligations makes him monstrous. The novel was also written during the age of European imperial expansion, and Victor's desire to master a \"new species\" carries colonial overtones.",
    examTip:
      "Compare Victor's ambition with Walton's. Both are driven by the desire for glory, but Walton ultimately relents and turns his ship around. This contrast allows you to argue that Shelley presents ambition as dangerous but not inevitably destructive -- it depends on whether the ambitious person is willing to listen to others.",
  },
  {
    title: 'Monstrosity',
    overview:
      'Who is the real monster? Shelley systematically blurs the line between human and creature, victim and villain.',
    detailed:
      'Frankenstein deconstructs the concept of monstrosity more thoroughly than perhaps any other work in English literature. The Creature is called a "monster," "wretch," "fiend," "daemon," and "devil" throughout the novel, primarily by Victor, but Shelley ensures that the reader cannot accept these labels uncritically. The Creature\'s own narrative reveals a being of extraordinary sensitivity, eloquence, and moral awareness -- more articulate, more self-reflective, and in many ways more human than Victor himself. His violence is real and terrible (he murders William, causes Justine\'s execution, kills Clerval and Elizabeth), but it is consistently presented as a response to extreme provocation rather than an expression of inherent evil. The novel asks the reader to consider who is truly monstrous: the Creature, who was born innocent and driven to violence by universal rejection, or Victor, who created a sentient being and then abandoned it to suffer? The answer Shelley provides is deeply unsettling: monstrosity is not a quality that belongs to any single individual but a relationship produced by social conditions. The Creature becomes monstrous because he is treated as a monster; Victor becomes monstrous because he refuses to accept the moral consequences of his actions. By the novel\'s end, the two are virtually indistinguishable: both isolated, both consumed by vengeance, both willing to destroy everything to harm the other. The physical horror of the Creature\'s appearance -- his "yellow skin" that "scarcely covered the work of muscles and arteries beneath" -- is Shelley\'s most pointed social critique: a society that judges by appearance will always create monsters, because it will always reject those who look different, regardless of their character.',
    keyQuotes: [
      {
        quote:
          'I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on.',
        speaker: 'The Creature -- Walton in Continuation',
        analysis:
          'The word "abortion" -- something that should never have been born -- is the most extreme expression of the Creature\'s internalised self-hatred. Delivered to Walton over Victor\'s corpse, it forms part of the Creature\'s final indictment of his creator. The passive verbs ("spurned," "kicked," "trampled") emphasise his powerlessness.',
      },
      {
        quote: 'I was hurried away by fury; revenge alone endowed me with strength and composure.',
        speaker: 'Victor -- Chapter 24',
        analysis:
          'Victor describes himself in language typically reserved for the Creature: fury, vengeance, the consumption of all other feeling. By the final chapters, Shelley has collapsed the distinction between creator and creation. Both are "monsters" in the sense that both have been dehumanised by the cycle of creation, abandonment, and revenge.',
      },
      {
        quote:
          'Hateful day when I received life! Accursed creator! Why did you form a monster so hideous that even you turned from me in disgust?',
        speaker: 'The Creature -- Chapter 15',
        analysis:
          'The Creature blames Victor not for making him alive but for making him ugly. The word "formed" implies deliberate design, holding Victor responsible for the very appearance that repels others. The question is unanswerable: Victor cannot explain why he created something he finds disgusting, which is precisely the point. His revulsion is irrational prejudice, not a reasoned judgement.',
      },
    ],
    contextLink:
      'Shelley was writing at a time when physical appearance was widely believed to reveal moral character (a pseudo-science called physiognomy, popularised by Johann Kaspar Lavater). The novel challenges this assumption directly: the Creature looks monstrous but behaves virtuously, while Victor looks respectable but acts monstrously. Shelley also draws on the tradition of the Gothic "Other" -- the figure who is feared and excluded because they are different -- to explore broader questions about prejudice, disability, and social exclusion.',
    examTip:
      'The strongest essays on monstrosity argue that it is relational, not inherent. Show how both Victor and the Creature become increasingly monstrous over the course of the novel, and argue that Shelley holds society -- not nature -- responsible.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  const tDetailedAnalysis = await t('rev.texts.common.detailed_analysis')
  const tKeyQuotations = await t('rev.texts.common.key_quotations')
  const tContextLink = await t('rev.texts.common.context_link')
  const tExamTip = await t('rev.texts.common.exam_tip_sc')

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Frankenstein', url: 'https://theenglishhub.app/revision/texts/frankenstein' },
          { name: 'Themes', url: 'https://theenglishhub.app/revision/texts/frankenstein/themes' },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/frankenstein" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.texts.fr.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Lightbulb className="mr-1 size-3 text-clay-600" />
              {await t('rev.texts.common.theme_analysis')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.fr.themes.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {await t('rev.texts.fr.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts.fr.themes.intro')}
          </p>
        </div>
      </section>

      {/* Themes */}
      {THEMES.map((t) => (
        <section key={t.title}>
          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="size-5 text-clay-600" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{t.title}</h2>
              <p className="text-body-sm text-muted-foreground">{t.overview}</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Detailed analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{tDetailedAnalysis}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{t.detailed}</p>
              </CardContent>
            </Card>

            {/* Key Quotes */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Quote className="size-5 text-violet-400" />
                  <CardTitle className="text-heading-md font-heading">{tKeyQuotations}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {t.keyQuotes.map((q, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className="text-body-md font-medium italic text-foreground">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Context link */}
            <Card className="border-l-4 border-l-emerald-400">
              <CardContent className="p-5">
                <p className="text-sm font-semibold text-foreground mb-1">{tContextLink}</p>
                <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
              </CardContent>
            </Card>

            {/* Exam tip */}
            <Card className="bg-primary/5">
              <CardContent className="p-5">
                <p className="text-sm font-semibold text-foreground mb-1">{tExamTip}</p>
                <p className="text-body-sm text-muted-foreground">{t.examTip}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts.fr.public_domain')}
      </p>
    </div>
  )
}
