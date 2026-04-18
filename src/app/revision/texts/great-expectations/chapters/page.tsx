import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, MapPin } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Great Expectations Key Chapters | The English Hub',
  description:
    'Detailed analysis of key chapters in Great Expectations by Charles Dickens: the graveyard, Satis House, London, the revelation and the ending.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/great-expectations/chapters',
  },
}

type ChapterAnalysis = {
  chapter: string
  title: string
  setting: string
  summary: string
  significance: string[]
  keyQuote: {
    text: string
    analysis: string
  }
  writersMethods: string[]
}

const CHAPTERS: ChapterAnalysis[] = [
  {
    chapter: 'Chapters 1-3',
    title: 'The Graveyard and the Convict',
    setting: 'The churchyard on the marshes, Kent',
    summary:
      'The novel opens with the orphan Pip visiting his parents\' grave in a bleak churchyard on the Kent marshes. He is seized by an escaped convict, Abel Magwitch, who terrifies the child into bringing him food and a file to remove his leg iron. Pip steals from his sister\'s pantry and returns at dawn to help the desperate man. The convict is recaptured but protects Pip by claiming he stole the food himself.',
    significance: [
      'Establishes Pip\'s isolation, vulnerability and essential goodness — he feels guilt and pity even while terrified.',
      'Introduces the theme of crime and justice: the convict is a victim of a brutal penal system, not simply a villain.',
      'Creates the central ironic connection that drives the entire plot — Pip\'s unknown benefactor is the man he helped as a child.',
      'The marshes are both literal and symbolic: a liminal, unstable landscape that mirrors Pip\'s uncertain identity.',
      'Dickens establishes the first-person retrospective voice, allowing the adult Pip to reflect on his childhood self with irony and compassion.',
    ],
    keyQuote: {
      text: '"Hold your noise!" cried a terrible voice, as a man started up from among the graves at the side of the church porch. "Keep still, you little devil, or I\'ll cut your throat!"',
      analysis:
        'The explosive opening immediately establishes danger and power imbalance. The convict emerges "from among the graves," associating him with death and the underworld. Yet Dickens gradually reveals the convict\'s own desperation, complicating the reader\'s initial fear with sympathy. The violence of the language contrasts sharply with Pip\'s smallness and innocence.',
    },
    writersMethods: [
      'Pathetic fallacy — the raw, bleak marshland reflects Pip\'s emotional exposure and foreshadows the harshness of his life.',
      'First-person retrospective narration creates dramatic irony as the adult Pip can see what the child could not.',
      'Gothic elements — the graveyard, the gibbet, the mist — establish an atmosphere of threat and moral uncertainty.',
    ],
  },
  {
    chapter: 'Chapters 8-11',
    title: 'Satis House',
    setting: 'Satis House, the decayed mansion of Miss Havisham',
    summary:
      'Pip is sent by his Uncle Pumblechook to "play" at the house of the wealthy, reclusive Miss Havisham. He finds a woman dressed in a faded bridal gown, surrounded by the rotting remains of her wedding feast, all clocks stopped at twenty minutes to nine — the moment she was jilted. She introduces Pip to Estella, a beautiful girl his own age, and watches as Estella humiliates him for his coarse hands and thick boots. Pip is devastated and, for the first time, becomes deeply ashamed of his background and his home.',
    significance: [
      'The visit to Satis House is the catalyst for Pip\'s dissatisfaction with his life — it plants the seeds of his "great expectations."',
      'Miss Havisham\'s frozen world embodies the destructive power of living in the past and using others as instruments of revenge.',
      'Estella is deliberately raised as a weapon: "Break their hearts," Miss Havisham instructs her, making her both victim and perpetrator.',
      'Pip\'s shame about being "common" introduces the central theme of social class and its power to distort self-worth.',
      'The house itself is a symbol: "Satis" means "enough" in Latin, but nothing in the house is sufficient — it is a monument to emotional starvation.',
    ],
    keyQuote: {
      text: '"He calls the knaves, Jacks, this boy!" said Estella with disdain, before our first game was out. "And what coarse hands he has! And what thick boots!"',
      analysis:
        'Estella reduces Pip to his class markers — his language and his clothing. The word "knaves" versus "Jacks" reveals how arbitrary social distinctions are, yet they have enormous power to wound. Estella has been trained to despise the lower classes, and Pip internalises her contempt, beginning the self-rejection that drives his ambition. Dickens exposes how class snobbery is taught, not natural.',
    },
    writersMethods: [
      'Symbolism — the stopped clocks, decaying cake and faded dress represent time frozen by trauma and the impossibility of escaping the past.',
      'Contrast between the dark, airless interior of Satis House and the open marshes of Pip\'s home highlights two different kinds of imprisonment.',
      'Miss Havisham is presented through Gothic conventions — the ghostly bride, the ruined mansion — to suggest emotional death in life.',
    ],
  },
  {
    chapter: 'Chapters 17-19',
    title: 'The Great Expectations',
    setting: 'The forge at Joe\'s house; Mr Jaggers\' visit',
    summary:
      'The lawyer Jaggers arrives at the forge to announce that Pip has "great expectations" — an unknown benefactor has arranged for him to be brought up as a gentleman in London. Pip immediately assumes Miss Havisham is his patron and that he is destined to marry Estella. He prepares to leave for London, growing increasingly snobbish and condescending toward Joe and Biddy. On his last evening, he walks alone on the marshes and weeps, sensing that he is leaving behind something precious, but his ambition overwhelms his conscience.',
    significance: [
      'The announcement is the novel\'s structural turning point, dividing Pip\'s life into "before" and "after."',
      'Pip\'s assumption that Miss Havisham is his benefactor reveals his capacity for self-deception — he believes what flatters him.',
      'His growing rudeness to Joe and Biddy exposes how quickly wealth and social aspiration corrupt genuine human bonds.',
      'Dickens uses the marshes walk to show that Pip instinctively knows he is making a moral error, but cannot resist the pull of class ambition.',
      'The phrase "great expectations" is deeply ironic — Pip expects greatness, but his expectations lead him away from the true goodness he already possesses.',
    ],
    keyQuote: {
      text: '"I walked away at a good pace, thinking it was easier to go than I had supposed it would be... But the village was very peaceful and quiet, and the light mists were solemnly rising, as if to show me the world, and I had been so innocent and little there, and all beyond was so unknown and great, that in a moment with a strong heave and sob I broke into tears."',
      analysis:
        'The passage captures Pip\'s divided self. He tries to walk away briskly, performing confidence, but the landscape he has known since childhood overwhelms him with its innocence. The mists "rising as if to show me the world" suggest a revelation he is not yet ready to accept: that what he is leaving behind — simplicity, love, moral clarity — is more valuable than what he is going towards. The "strong heave and sob" breaks through his pretence.',
    },
    writersMethods: [
      'Dramatic irony — the reader senses Pip is wrong about Miss Havisham, but Dickens withholds the truth for maximum impact later.',
      'The motif of the marshes returns as a moral touchstone: the landscape represents Pip\'s authentic self.',
      'Pip\'s tears function as a physical revolt against his conscious decision — Dickens shows the body knowing what the mind denies.',
    ],
  },
  {
    chapter: 'Chapters 39-40',
    title: 'The Revelation',
    setting: 'Pip\'s chambers in the Temple, London, during a storm',
    summary:
      'On a stormy night, a rough, weather-beaten stranger arrives at Pip\'s London lodgings. Pip gradually recognises the man as Magwitch, the convict from the marshes. Magwitch reveals that he — not Miss Havisham — is Pip\'s benefactor. He made his fortune as a sheep farmer in New South Wales and has devoted his entire life to making Pip a gentleman, driven by gratitude for the child who helped him decades earlier. Pip is revolted: his gentlemanly existence has been funded by a transported criminal. Everything he believed about his destiny — his connection to Miss Havisham, his right to Estella — collapses.',
    significance: [
      'The revelation is the novel\'s climactic turning point and forces Pip to confront everything he has valued.',
      'Pip\'s revulsion at Magwitch exposes his snobbery: he is disgusted not by a crime but by the man\'s low social status.',
      'Dickens demolishes the idea that gentility is inherent — Pip\'s "gentleman" status was created by a convict\'s money, proving class is a construction.',
      'Magwitch\'s devotion reveals that true loyalty and generosity exist in the "lowest" levels of society, not in Satis House.',
      'The storm mirrors the upheaval in Pip\'s understanding of himself and anticipates the moral storm he must now navigate.',
    ],
    keyQuote: {
      text: '"Yes, Pip, dear boy, I\'ve made a gentleman on you! It\'s me wot has done it! I swore that time, sure as ever I earned a guinea, that guinea should go to you... \'If I ain\'t a gentleman, nor yet ain\'t got no learning, I\'ll make a better gentleman nor ever I was!\'"',
      analysis:
        'Magwitch\'s dialect ("wot," "nor") and his grammar mark him as uneducated and lower-class, yet his speech overflows with devotion and generosity. The irony is devastating: the man who cannot speak like a gentleman has spent his life creating one. Dickens forces the reader to see that moral worth and social status are entirely separate things. Magwitch\'s pride in Pip is simultaneously touching and troubling — he has treated Pip as a project, a living proof of his own worth.',
    },
    writersMethods: [
      'Pathetic fallacy — the violent storm mirrors Pip\'s psychological turmoil and the destruction of his illusions.',
      'Dramatic irony resolved: the reader now understands the full significance of the opening chapters.',
      'Dickens uses Magwitch\'s non-standard English to expose the reader\'s own class prejudice — we are forced to confront whether we share Pip\'s revulsion.',
    ],
  },
  {
    chapter: 'Chapter 59 (Final Chapter)',
    title: 'The Ending',
    setting: 'The site of Satis House, now demolished',
    summary:
      'Years later, Pip returns to the site where Satis House once stood. The mansion has been demolished and the land cleared. In the evening mist, he meets Estella, who has been deeply changed by her unhappy marriage to Drummle and his subsequent death. She tells Pip that "suffering has been stronger than all other teaching." They walk together out of the ruined garden, and Pip sees "no shadow of another parting from her." Dickens wrote two endings: the original, in which Pip and Estella part for good, and the revised version (published) in which their reunion is implied but left ambiguous.',
    significance: [
      'The demolished Satis House symbolises the destruction of false values — the rotten edifice of class pretension has been cleared away.',
      'Estella\'s transformation through suffering mirrors Pip\'s own moral education: both have learned through loss.',
      'The ambiguity of the ending reflects Dickens\'s uncertainty about whether his characters deserve happiness or have learned enough.',
      'The mist returns from the opening chapter, creating a structural circle: Pip ends where he began, on uncertain ground, but with greater self-knowledge.',
      'Dickens resists a simple happy ending — even the revised version is suffused with sadness, loss and the passage of time.',
    ],
    keyQuote: {
      text: '"I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her."',
      analysis:
        'The final sentence is deliberately ambiguous. "I saw no shadow of another parting" could mean they will never part again, or it could mean Pip simply cannot yet see the parting that awaits. The mists connect back to Chapter 19, when Pip left the forge in tears — the same image of mist and revelation, but now suffused with evening light rather than morning uncertainty. The "ruined place" is both Satis House and the ruins of their former selves. Dickens leaves the reader to decide whether this is a happy ending or a bittersweet one.',
    },
    writersMethods: [
      'Circular structure — the mist motif from the opening returns, giving the novel a sense of completion.',
      'Ambiguity is a deliberate artistic choice: Dickens resists the Victorian convention of tying up every thread neatly.',
      'The demolished house functions as an extended metaphor for the dismantling of illusion and the possibility of rebuilding on honest foundations.',
    ],
  },
]

export default async function GreatExpectationsChaptersPage() {
  const board = await getServerBoard()
  if (board && board !== 'aqa') {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/great-expectations" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Great Expectations
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Chapters
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations — Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five pivotal moments in the novel analysed in depth: the graveyard
            encounter, Satis House, the announcement of expectations, the
            revelation of the true benefactor, and the ambiguous ending.
          </p>
        </div>
      </section>

      {/* Chapter Cards */}
      <div className="space-y-8">
        {CHAPTERS.map((ch) => (
          <Card key={ch.chapter} className="overflow-hidden">
            <CardHeader className="border-b border-border/40 bg-muted/30">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  <MapPin className="mr-1 size-3" />
                  {ch.setting}
                </Badge>
              </div>
              <CardTitle className="text-heading-lg font-heading">
                {ch.chapter}: {ch.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8">
              {/* Summary */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  What happens
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {ch.summary}
                </p>
              </div>

              {/* Significance */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Why it matters
                </h3>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {ch.significance.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Quote */}
              <div className="rounded-xl border border-border/60 bg-muted/20 p-5">
                <p className="mb-2 text-body-md font-medium italic text-foreground">
                  {ch.keyQuote.text}
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {ch.keyQuote.analysis}
                </p>
              </div>

              {/* Writer's Methods */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Writer&apos;s methods
                </h3>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {ch.writersMethods.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Great Expectations by Charles Dickens (1861) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
