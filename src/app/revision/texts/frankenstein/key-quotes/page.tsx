import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Frankenstein Key Quotes by Theme | The English Hub',
    description:
      'Twenty-five key quotations from Frankenstein by Mary Shelley organised by theme with detailed analysis for GCSE revision.',
  },
  title: 'Frankenstein Key Quotes by Theme | The English Hub',
  description:
    'Twenty-five key quotations from Frankenstein by Mary Shelley organised by theme with detailed analysis for GCSE revision.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/key-quotes',
  },
}

// ── Quote data ────────────────────────────────────────────────────────────────

type KeyQuote = {
  quote: string
  speaker: string
  chapter: string
  analysis: string
}

type ThemeQuotes = {
  theme: string
  colour: string
  quotes: KeyQuote[]
}

const QUOTES_BY_THEME: ThemeQuotes[] = [
  {
    theme: 'Creation and Responsibility',
    colour: 'bg-emerald-400',
    quotes: [
      {
        quote:
          'I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.',
        speaker: 'Victor',
        chapter: 'Chapter 5',
        analysis:
          'Victor reduces his creation to a "lifeless thing" and positions it "at my feet," establishing a hierarchy of contempt before the Creature even lives. "Spark of being" alludes to both Prometheus stealing fire and galvanic science, grounding the Gothic in real scientific anxiety.',
      },
      {
        quote:
          'I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.',
        speaker: 'Victor',
        chapter: 'Chapter 5',
        analysis:
          'The creation scene pivots on a single moment of revulsion. The shift from "ardour" to "horror and disgust" is instantaneous. Victor\'s response is aesthetic, not ethical -- he rejects the Creature for how it looks, not for what it is. "The beauty of the dream vanished" reveals that Victor was in love with his idea, not its reality.',
      },
      {
        quote:
          'I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.',
        speaker: 'The Creature',
        chapter: 'Chapter 10',
        analysis:
          'The Creature uses Paradise Lost to position Victor as a negligent God. "For no misdeed" is the crucial phrase: unlike Milton\'s Satan, the Creature did not rebel. His exile is unearned, making Victor\'s failure of responsibility absolute.',
      },
      {
        quote: 'You are my creator, but I am your master; -- obey!',
        speaker: 'The Creature',
        chapter: 'Chapter 20',
        analysis:
          'The creator-creation hierarchy is completely inverted. The imperative "obey!" demonstrates that irresponsible creation does not free the creator from consequences -- it enslaves them to those consequences.',
      },
      {
        quote:
          'In a fit of enthusiastic madness I created a rational creature and was bound towards him to assure, as far as was in my power, his happiness and well-being. This was my duty.',
        speaker: 'Victor',
        chapter: 'Chapter 24',
        analysis:
          'Victor\'s belated acknowledgement of duty is self-serving: "enthusiastic madness" rewrites his ambition as temporary insanity, and he uses the admission to justify destroying the female creature. Recognition without action is moral failure.',
      },
    ],
  },
  {
    theme: 'Nature vs Nurture',
    colour: 'bg-blue-400',
    quotes: [
      {
        quote:
          'I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.',
        speaker: 'The Creature',
        chapter: 'Chapter 10',
        analysis:
          'The novel\'s thesis on nature versus nurture: moral character is determined by experience, not innate disposition. "Misery made me" uses the passive voice to place responsibility on society. The conditional offer is both a plea and a challenge.',
      },
      {
        quote:
          'My vices are the children of a forced solitude that I abhor, and my virtues will necessarily arise when I live in communion with an equal.',
        speaker: 'The Creature',
        chapter: 'Chapter 17',
        analysis:
          'The Creature uses Enlightenment philosophical language. "Children of a forced solitude" personifies vices as products of environment. "Necessarily" insists on a deterministic link between social conditions and moral outcomes, echoing Rousseau.',
      },
      {
        quote: 'If I have no ties and no affections, hatred and vice must be my portion.',
        speaker: 'The Creature',
        chapter: 'Chapter 17',
        analysis:
          'The word "must" is deterministic: without love, evil is inevitable. "Ties and affections" are not luxuries but the foundations of moral life. Shelley argues that morality requires a social context to function.',
      },
      {
        quote:
          'Of my creation and creator I was absolutely ignorant, but I knew that I possessed no money, no friends, no kind of property. I was, besides, endued with a figure hideously deformed and loathsome.',
        speaker: 'The Creature',
        chapter: 'Chapter 13',
        analysis:
          'The Creature catalogues his deprivations with painful clarity. The list "no money, no friends, no kind of property" echoes social contract theory: he possesses nothing that grants standing in society. His appearance is listed as an additional injustice, not a defining trait.',
      },
    ],
  },
  {
    theme: 'Isolation',
    colour: 'bg-violet-400',
    quotes: [
      {
        quote:
          'I desire the company of a man who could sympathise with me, whose eyes would reply to mine.',
        speaker: 'Walton',
        chapter: 'Letter II',
        analysis:
          "Walton's loneliness foreshadows both Victor's and the Creature's isolation. \"Eyes that would reply to mine\" expresses the need for emotional reciprocity -- the fundamental human requirement that the Creature is permanently denied.",
      },
      {
        quote:
          'All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!',
        speaker: 'The Creature',
        chapter: 'Chapter 10',
        analysis:
          'A devastating social observation: society hates those it has harmed. The rhetorical question and superlative "beyond all living things" convey an isolation that is absolute. Shelley critiques a social order that punishes vulnerability.',
      },
      {
        quote:
          'I shunned the face of man; all sound of joy or complacency was torture to me; solitude was my only consolation -- deep, dark, deathlike solitude.',
        speaker: 'Victor',
        chapter: 'Chapter 9',
        analysis:
          'The triple adjective "deep, dark, deathlike" links solitude to death through alliteration. Victor\'s isolation is self-imposed but no less destructive. By this point, creator and creature mirror each other, both trapped in emotional wastelands.',
      },
      {
        quote:
          'The more I saw of them, the greater became my desire to claim their protection and kindness; my heart yearned to be known and loved by these amiable creatures.',
        speaker: 'The Creature',
        chapter: 'Chapter 12',
        analysis:
          'The Creature\'s "yearning" is presented as a fundamental need. "Known and loved" are psychological necessities, not optional extras. The word "creatures" unconsciously asserts his kinship with humanity.',
      },
    ],
  },
  {
    theme: 'Dangerous Knowledge and Ambition',
    colour: 'bg-amber-400',
    quotes: [
      {
        quote:
          'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow.',
        speaker: 'Victor',
        chapter: 'Chapter 4',
        analysis:
          'Victor frames the entire novel as a cautionary tale. "Greater than his nature will allow" echoes the sin of pride and the Fall of Man. "Acquirement" makes knowledge a possession that corrupts its owner.',
      },
      {
        quote:
          'So much has been done, exclaimed the soul of Frankenstein -- more, far more, will I achieve: treading in the steps already marked, I will pioneer a new way, explore unknown powers, and unfold to the world the deepest mysteries of creation.',
        speaker: 'Victor',
        chapter: 'Chapter 3',
        analysis:
          'Victor\'s grandiose self-narration ("the soul of Frankenstein") reveals narcissism. "More, far more" escalates beyond moderation. "Deepest mysteries of creation" implies trespass into God\'s domain.',
      },
      {
        quote:
          'You seek for knowledge and wisdom, as I once did; and I ardently hope that the gratification of your wishes may not be a serpent to sting you, as mine has been.',
        speaker: 'Victor',
        chapter: 'Letter IV',
        analysis:
          'The serpent image connects knowledge to the Fall of Man. "Gratification" frames knowledge-seeking as appetite. Victor addresses Walton but speaks to the reader: the warning is universal.',
      },
      {
        quote:
          'A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me.',
        speaker: 'Victor',
        chapter: 'Chapter 4',
        analysis:
          'Victor imagines himself worshipped by his creations. "Bless me as its creator" reveals narcissism beneath altruism. "Owe their being" frames creation as a debt, foreshadowing the Creature\'s demand for reciprocal obligation.',
      },
      {
        quote:
          'I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man.',
        speaker: 'Walton',
        chapter: 'Letter I',
        analysis:
          'Walton\'s language of appetite and conquest mirrors Victor\'s. "Satiate" and "imprinted by the foot" frame ambition as a colonising force. Shelley establishes from the first page that dangerous ambition is a recurring pattern.',
      },
    ],
  },
  {
    theme: 'Monstrosity and Prejudice',
    colour: 'bg-rose-400',
    quotes: [
      {
        quote:
          'How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?',
        speaker: 'Victor',
        chapter: 'Chapter 5',
        analysis:
          'Victor calls his creation a "catastrophe" and "wretch" at the moment of birth, before it has taken a single action. "Delineate" means to define -- the Creature is being constructed as monstrous by Victor\'s language rather than by its own nature.',
      },
      {
        quote:
          'I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on.',
        speaker: 'The Creature',
        chapter: 'Walton in Continuation',
        analysis:
          "The word \"abortion\" -- something that should never have existed -- is the Creature's most extreme expression of internalised self-hatred, delivered to Walton over Victor's corpse in the novel's closing scene. He has absorbed society's judgement so completely that he denies his own right to exist.",
      },
      {
        quote:
          'Hateful day when I received life! Accursed creator! Why did you form a monster so hideous that even you turned from me in disgust?',
        speaker: 'The Creature',
        chapter: 'Chapter 15',
        analysis:
          'The Creature blames Victor not for giving him life but for making him ugly. "Formed" implies deliberate design. The unanswerable question holds Victor responsible for the very appearance that causes universal rejection.',
      },
      {
        quote: 'I was hurried away by fury; revenge alone endowed me with strength and composure.',
        speaker: 'Victor',
        chapter: 'Chapter 24',
        analysis:
          'Victor describes himself in language indistinguishable from the Creature\'s. "Hurried away by fury" suggests uncontrolled, possessed behaviour. By the novel\'s end, the distinction between man and monster has completely collapsed.',
      },
      {
        quote:
          'I was the slave, not the master, of an impulse which I detested yet could not disobey.',
        speaker: 'The Creature',
        chapter: 'Chapter 16',
        analysis:
          'The Creature describes murder as compulsive rather than deliberate. The master/slave imagery reverses the creator-creation power dynamic and suggests that violence, once provoked by total rejection, becomes uncontrollable.',
      },
      {
        quote:
          'She might become ten thousand times more malignant than her mate and delight, for its own sake, in murder and wretchedness.',
        speaker: 'Victor',
        chapter: 'Chapter 20',
        analysis:
          'Victor projects his worst fears onto the unfinished female creature. "For its own sake" attributes motiveless malice to a being that does not yet exist. His reasoning reveals an inability to see his creations as anything other than monsters.',
      },
      {
        quote: 'I shall be with you on your wedding-night.',
        speaker: 'The Creature',
        chapter: 'Chapter 20',
        analysis:
          "The Creature's most famous threat is a masterpiece of ambiguity. Victor assumes it targets him; it means Elizabeth. The misunderstanding dramatises Victor's fatal self-absorption.",
      },
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinKeyQuotesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Frankenstein', url: 'https://theenglishhub.app/revision/texts/frankenstein' },
          {
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/revision/texts/frankenstein/key-quotes',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/frankenstein" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Frankenstein
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Quote className="mr-1 size-3 text-violet-400" />
              Key Quotations
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            25 Key Quotes by Theme
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Frankenstein by Mary Shelley</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Every quotation you need for the exam, organised by theme with detailed analysis. All
            from the public-domain 1818 text.
          </p>
        </div>
      </section>

      {/* Quick-navigation */}
      <section>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-foreground mb-3">Jump to theme</p>
            <div className="flex flex-wrap gap-2">
              {QUOTES_BY_THEME.map((section) => (
                <a
                  key={section.theme}
                  href={`#${section.theme.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <span className={`block size-2 rounded-full ${section.colour}`} />
                  {section.theme}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by theme */}
      {QUOTES_BY_THEME.map((section) => (
        <section key={section.theme} id={section.theme.toLowerCase().replace(/\s+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <span className={`block size-3 rounded-full ${section.colour}`} />
            <h2 className="text-heading-lg font-heading text-foreground">{section.theme}</h2>
            <Badge variant="outline" className="text-muted-foreground">
              {section.quotes.length} quotes
            </Badge>
          </div>

          <div className="grid gap-4">
            {section.quotes.map((q, i) => (
              <Card key={i}>
                <CardContent className="space-y-2 p-5">
                  <p className="text-body-md font-medium italic text-foreground">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                    <span className="text-border">|</span>
                    <p className="text-caption text-muted-foreground">{q.chapter}</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary Shelley is in the public
        domain. All quotations are from the original 1818 text and are reproduced freely.
      </p>
    </div>
  )
}
