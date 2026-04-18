'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Globe } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ─── Types ──────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  overview: string
  detailed: string
  examRelevance: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const CONTEXT_SECTIONS: ContextSection[] = [
  {
    title: 'The Victorian Era',
    overview:
      'Stevenson published the novella in 1886, during the height of the Victorian period -- an age of rapid industrialisation, imperial expansion, and intense moral anxiety.',
    detailed:
      'Queen Victoria\'s reign (1837-1901) was defined by apparent contradictions. Britain was the world\'s richest and most powerful nation, yet its cities were plagued by poverty, overcrowding and disease. The Victorian middle and upper classes placed enormous value on respectability, self-discipline and public morality, while privately many led double lives -- frequenting opium dens, prostitutes and illicit gambling. This gap between public image and private behaviour is the central subject of Stevenson\'s novella. Victorian society was rigidly hierarchical. Gentlemen were expected to embody restraint, propriety and Christian virtue. Any deviation from these standards could result in social ruin. Stevenson\'s all-male cast of characters -- Utterson, Enfield, Lanyon, Jekyll -- are products of this system: they suppress their desires, guard their reputations, and refuse to ask uncomfortable questions. The novella argues that this culture of repression does not eliminate human darkness but drives it underground, where it festers and becomes more dangerous. The period also saw rising anxiety about degeneration: the fear that civilisation was not progressing but declining, and that beneath the veneer of progress lurked the primitive and the bestial.',
    examRelevance:
      'Use Victorian respectability to explain why Jekyll\'s experiment is necessary in the first place. He creates Hyde not because he is uniquely evil but because his society forces him to hide perfectly normal human desires. This positions the novella as a critique of Victorian culture, earning strong AO3 marks.',
  },
  {
    title: 'Darwin and Evolution',
    overview:
      'Charles Darwin\'s On the Origin of Species (1859) had transformed understanding of human nature, suggesting that humans descended from animals and carried primitive instincts beneath their civilised exteriors.',
    detailed:
      'Darwin\'s theory of evolution by natural selection was one of the most revolutionary ideas of the nineteenth century. It challenged the biblical account of creation and suggested that humans were not separate from animals but descended from them. This had profound implications for Victorian morality: if humans were essentially evolved apes, then the "beast within" was not a metaphor but a biological reality. Stevenson reflects this anxiety directly in Hyde. He is described with "ape-like fury," is "hardly human," and inspires instinctive revulsion in everyone he meets. His physical appearance -- small, stunted, deformed -- suggests evolutionary regression, a return to a more primitive form. Jekyll\'s explanation that Hyde is smaller because the evil side has been "less exercised" gives this a moral dimension: repression does not eliminate the beast but stunts its growth, making it concentrated and dangerous. The concept of degeneration -- the fear that evolution could reverse, that civilised humans could revert to savagery -- was widespread in the 1880s. Cesare Lombroso\'s theory of the "born criminal" (1876) argued that criminals could be identified by their physical features, which resembled those of earlier evolutionary stages. Stevenson draws on this anxiety while also critiquing it: Hyde is not a separate species but Jekyll\'s own hidden self.',
    examRelevance:
      'Link Hyde\'s "ape-like" behaviour and stunted physique to Victorian anxieties about evolution. Show how Stevenson uses Hyde to dramatise the fear that the animal self could erupt through the civilised surface. This demonstrates contextual understanding beyond simple historical facts.',
  },
  {
    title: 'Repression and Respectability',
    overview:
      'Victorian gentlemen were expected to suppress all base desires. Stevenson argues that this repression creates the very monstrosity it claims to prevent.',
    detailed:
      'The concept of respectability was central to Victorian identity. For middle- and upper-class men, reputation was everything: a gentleman\'s worth was measured by his public conduct, his moral standing in the community, and his ability to control his appetites. The merest hint of scandal -- sexual impropriety, financial dishonesty, substance abuse -- could destroy a career and a family. This created enormous pressure to hide any behaviour that deviated from the expected norm. Stevenson\'s novella is populated by men who have internalised this pressure completely. Utterson drinks gin to "mortify a taste for vintages" -- he punishes himself for having preferences. Jekyll conceals his "pleasures" behind a "morbid sense of shame." Enfield refuses to ask questions about anything that "looks like Queer Street." The entire social world of the novella is built on a foundation of deliberate self-deception. Stevenson\'s argument is that repression is counterproductive. By forcing Jekyll to hide his normal human desires, Victorian respectability ensures that when those desires finally emerge, they do so in their most extreme and dangerous form. Hyde is not Jekyll\'s opposite; he is Jekyll\'s desires stripped of all social restraint. The more completely respectability suppresses the self, the more violently that suppressed self will eventually break free.',
    examRelevance:
      'This is one of the most important contextual areas for the exam. Show how Jekyll\'s creation of Hyde is a response to the impossible standards of Victorian respectability. The novella argues that the demand for perfection creates the imperfection it fears.',
  },
  {
    title: 'Edinburgh\'s Influence on Stevenson',
    overview:
      'Stevenson grew up in Edinburgh, a city of dramatic physical and social duality, which profoundly shaped the novella\'s themes and settings.',
    detailed:
      'Robert Louis Stevenson was born in Edinburgh in 1850 and spent his formative years in a city that physically embodied duality. Edinburgh\'s Old Town -- medieval, cramped, chaotic -- sits alongside its New Town -- Georgian, orderly, elegant. The two are separated by a deep valley, creating a geographical divide that mirrors the social and moral divisions Stevenson explores in the novella. Although the story is set in London, the physical landscape draws heavily on Edinburgh: the fog, the narrow passages, the respectable facades concealing squalid interiors. Stevenson was also influenced by the real case of Deacon William Brodie (1741-1788), an Edinburgh cabinet-maker and city councillor who led a double life as a burglar. Brodie was a respected craftsman by day and a thief by night, using his access to wealthy homes to rob them. He was eventually caught and executed. Stevenson and his friend W.E. Henley wrote a play about Brodie in 1880, six years before Jekyll and Hyde. The case demonstrated that respectability and criminality could coexist in the same person -- the central insight of the novella. Stevenson\'s own family background contributed to the theme of duality. His father was a devout Presbyterian who expected his son to follow a conventional path; Stevenson himself was drawn to bohemian life, frequenting Edinburgh\'s underworld and rejecting his father\'s religion. This personal tension between respectability and rebellion informs Jekyll\'s inner conflict.',
    examRelevance:
      'Reference Edinburgh\'s Old Town/New Town divide when discussing how Stevenson uses setting to embody duality. The Deacon Brodie case is also useful evidence that the novella draws on real examples of Victorian double lives.',
  },
  {
    title: 'The Gothic Genre',
    overview:
      'Jekyll and Hyde belongs to the Gothic literary tradition, which uses horror, the supernatural and the uncanny to explore fears that rational society refuses to confront.',
    detailed:
      'The Gothic genre originated in the late eighteenth century with Horace Walpole\'s The Castle of Otranto (1764) and flourished through works like Ann Radcliffe\'s The Mysteries of Udolpho (1794), Mary Shelley\'s Frankenstein (1818), and Bram Stoker\'s Dracula (1897). Key Gothic conventions include: a dark, oppressive setting; a sense of mystery and dread; the transgression of boundaries (between life and death, human and animal, self and other); and a rational character confronted by the irrational. Stevenson uses all of these. London\'s fog functions like a Gothic castle, concealing and distorting; Hyde\'s unnameable horror follows the tradition of Gothic monsters who defy description; Jekyll\'s experiment transgresses the boundary between good and evil; and Utterson, the rational lawyer, is gradually overwhelmed by events that exceed his understanding. However, Stevenson also modernises the Gothic by locating horror in the everyday rather than the exotic. There are no castles, no foreign settings, no supernatural creatures. The horror is domestic: it lives in a respectable London townhouse, wears a gentleman\'s clothes, and is created by a doctor. This relocation of Gothic terror from the remote to the familiar made the novella uniquely disturbing for Victorian readers: the monster was not "out there" but inside the very houses they lived in.',
    examRelevance:
      'Reference the Gothic genre when discussing Stevenson\'s techniques for creating horror. Show how he modernises the Gothic by placing it in everyday London rather than exotic settings. This demonstrates genre awareness and strengthens your analysis of atmosphere and setting.',
  },
  {
    title: 'Freud and the Id / Ego / Superego',
    overview:
      'Although Freud developed his theories after the novella was published, his model of the mind maps remarkably onto Jekyll and Hyde.',
    detailed:
      'Sigmund Freud published The Interpretation of Dreams in 1900 and developed his structural model of the psyche (id, ego, superego) in the 1920s -- decades after Stevenson\'s novella. However, the parallels are striking and are widely used in critical analysis of the text. Hyde corresponds to the id: the primitive, instinct-driven part of the mind that seeks immediate gratification without moral restraint. He is pure desire, pure aggression, governed by the pleasure principle. Jekyll\'s public persona corresponds to the superego: the moralising, self-critical part that internalises society\'s rules and demands perfection. The "original" Jekyll -- before the experiment -- functions as the ego: the mediator between desire and duty, trying to balance the demands of both. Stevenson\'s novella anticipates Freud\'s insight that repressing the id does not eliminate it but makes it more dangerous. The superego\'s demand for perfection creates unbearable pressure, and the id, denied legitimate expression, erupts in distorted and violent forms. This is precisely what happens to Jekyll: his attempt to be perfectly respectable intensifies his "imperious desire" for pleasure until it can only be expressed through the monstrous form of Hyde. While it is anachronistic to claim Stevenson "intended" a Freudian reading, the novella demonstrates that the psychological insights Freud would later systematise were already being explored in Victorian literature.',
    examRelevance:
      'You can reference Freud retrospectively in essays, framing it as a critical lens rather than an influence. For example: "A Freudian reading positions Hyde as the id freed from the superego\'s control." This shows critical sophistication. Always note that Freud came after Stevenson.',
  },
  {
    title: 'London Fog and the Dual City',
    overview:
      'Stevenson uses London\'s setting -- particularly its fog, gaslight and contrasting neighbourhoods -- to physically embody the novella\'s themes of concealment and duality.',
    detailed:
      'London in the 1880s was a city of extreme contrasts. Grand West End streets existed alongside the poverty and vice of the East End. Wealthy professionals lived minutes from slums they never visited. The famous London fog -- actually smog, produced by thousands of coal fires -- was a real and dangerous phenomenon: it obscured vision, confused navigation, and created an atmosphere of permanent moral ambiguity. Stevenson exploits this real geography and atmosphere systematically. Jekyll\'s house has a respectable front on a "square of ancient, handsome houses" and a sinister rear entrance on a "dingy" by-street. The two faces of the building mirror Jekyll\'s two selves. The fog that pervades the novella functions as a moral metaphor: it obscures boundaries, hides identities, and makes the familiar strange. The murder of Sir Danvers Carew takes place on a moonlit night that is then swallowed by fog, as if the city itself is concealing the crime. Stevenson describes London\'s streets as having "the air of an invitation" -- the city is seductive and treacherous, like Hyde himself. Gaslight and shadow create pockets of visibility surrounded by darkness, replicating the novella\'s structure of partial revelation: we see fragments of the truth, never the whole picture, until the final chapters.',
    examRelevance:
      'When analysing setting and atmosphere, connect the fog to the theme of concealment. Show how Stevenson uses London\'s physical duality (respectable front, squalid rear) to mirror Jekyll\'s psychological duality. This elevates your analysis from plot description to thematic interpretation.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function JekyllAndHydeContextPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Jekyll and Hyde" textType="novella" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/jekyll-and-hyde" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Jekyll and Hyde
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Globe className="mr-1 size-3 text-emerald-400" />
                Historical Context
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Context — Deep Study
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Essential historical, social and literary context for top-grade GCSE responses.
              Every section includes exam relevance to help you apply context effectively.
            </p>
          </div>
        </section>

        {/* Context sections */}
        <div className="mt-10 space-y-10">
          {CONTEXT_SECTIONS.map((s) => (
            <section key={s.title}>
              <div className="mb-5 flex items-center gap-3">
                <BookOpen className="size-5 text-emerald-400" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{s.title}</h2>
                  <p className="text-body-sm text-muted-foreground">{s.overview}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Detailed content */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">In Detail</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{s.detailed}</p>
                  </CardContent>
                </Card>

                {/* Exam relevance */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-amber-400" />
                      <p className="text-sm font-semibold text-foreground">Exam relevance (AO3)</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{s.examRelevance}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis Stevenson
          is in the public domain. Context information is drawn from standard historical and
          literary scholarship.
        </p>
      </div>
    </div>
  )
}
