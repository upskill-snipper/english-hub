'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Eye, MessageSquare, Maximize2, Quote, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ── Walkthrough data ──────────────────────────────────────────────── */

type WalkthroughCard = {
  id: string
  focus: string
  notice: string
  say: string
  zoomOut: string
  devices: string[]
}

const EXTRACT_TITLE = "The Creature's Awakening — Volume I, Chapter 5"

const EXTRACT_OPENER =
  '"It was on a dreary night of November, that I beheld the accomplishment of my toils..."'

const EXTRACT_CLOSER = '"...breathless horror and disgust filled my heart."'

// VERIFIED: 1818 first edition via Project Gutenberg #41445 (https://www.gutenberg.org/files/41445/41445-h/41445-h.htm)
// and Pennsylvania Electronic Edition of the 1818 text. Comma after "November" present in 1818; absent in 1831 (PG #84).
const EXTRACT_PARAGRAPHS: string[] = [
  'It was on a dreary night of November, that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.',
  'How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! — Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun-white sockets in which they were set, his shrivelled complexion and straight black lips.',
  'The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.',
]

const CARDS: WalkthroughCard[] = [
  {
    id: 'pathetic-fallacy',
    focus: 'Gothic pathetic fallacy: "dreary night of November"',
    notice:
      'The opening clause front-loads weather. Shelley delays the main verb ("I beheld") so the reader is steeped in atmosphere before any action begins. "Dreary," "November," "rain pattered dismally," "candle was nearly burnt out" — every detail is grey, dying or about to be extinguished.',
    say: 'Shelley deploys archetypal Gothic pathetic fallacy to frame creation as a funeral rite. The triadic gloom — month, weather, dying candle — externalises Victor\'s psychological collapse and forecloses any possibility of joy at the moment of birth. The "half-extinguished light" is a near-pun on extinction, suggesting that the act of giving life is bound to a dying flame: creation and death are syntactically yoked.',
    zoomOut:
      'Romantic-era Gothic uses landscape as moral commentary. Where Wordsworth\'s nature heals, Shelley\'s nature accuses. Writing in the wake of the "Year Without a Summer" (1816), when volcanic ash darkened European skies during the Villa Diodati ghost-story competition, Shelley fuses meteorological dread with theological warning — the heavens themselves protest the transgression below.',
    devices: ['Pathetic fallacy', 'Gothic atmosphere', 'Delayed verb', 'Symbolism of light'],
  },
  {
    id: 'revulsion',
    focus: 'Victor\'s revulsion: "breathless horror and disgust filled my heart"',
    notice:
      'Victor\'s vocabulary collapses into monosyllables of recoil — "horror," "disgust," "wretch," "catastrophe." The exclamatory rupture "Beautiful! — Great God!" fractures his syntax mid-sentence. Notice the passive verb "filled": horror is a substance entering him, not a response he chooses.',
    say: 'Shelley locates monstrosity not in the Creature\'s body but in Victor\'s rhetoric. The em-dash that severs "Beautiful!" from "Great God!" enacts the cognitive break in real time on the page; punctuation becomes psychology. By labelling his creation a "catastrophe" before it has taken a single action, Victor performs a moral diagnosis that says more about his own aesthetic prejudice than about any quality the Creature possesses.',
    zoomOut:
      "Shelley anticipates a critique of Enlightenment aesthetics: Victor judges by surface, mistaking ugliness for evil. This pre-figures Burke's sublime/beautiful binary turned tragic — what should provoke awe provokes nausea, because Victor lacks the moral imagination to meet what he has made. The reader is invited to indict the looker, not the looked-at.",
    devices: ['Caesura', 'Em-dash rupture', 'Monosyllabic diction', 'Free indirect horror'],
  },
  {
    id: 'catalogue',
    focus: 'Catalogue of physical detail: yellow skin, lustrous hair, watery eyes',
    notice:
      'Shelley constructs a blazon — the Petrarchan inventory of a beloved\'s features — but inverts it. Each item is paired: "yellow skin" / "muscles and arteries," "lustrous black" hair / "watery eyes," "pearly whiteness" teeth / "straight black lips." The grammar of admiration carries the content of revulsion.',
    say: 'The catalogue performs Victor\'s aesthetic confusion. He has "selected his features as beautiful" yet the assembled whole horrifies him: the body parts are individually exquisite, collectively monstrous. Shelley exposes the ethical bankruptcy of treating a person as a sum of selected features — the same logic that drives Victor\'s science also dehumanises his creation. The Creature is presented to us in fragments because Victor has only ever seen him as fragments.',
    zoomOut:
      "In an age of grave-robbing for anatomical study (the Murder Act of 1752, the Anatomy Act would follow in 1832), Shelley's catalogue is uncomfortably close to a dissection report. The novel asks whether the reductive gaze of science — the body as inventory — can ever produce a being that science is willing to call human.",
    devices: ['Inverted blazon', 'Catalogue', 'Antithesis', 'Bodily synecdoche'],
  },
  {
    id: 'abandonment',
    focus: "Foreshadowed abandonment: Victor's flight as moral verdict",
    notice:
      'The extract closes on stillness — but Victor will flee within a paragraph of the chapter\'s continuation. The seeds are already planted: "I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished." The verb "finished" is telling — Victor regards a living being as a completed project.',
    say: 'Shelley uses past-perfect verbs to convert birth into termination: "I had worked," "I had deprived," "I had desired," "I had finished." The Creature is grammatically over before he has begun. The flight Victor will perform on the next page is already encoded here in syntax — a creator who construes his creation as a finished artefact has already abandoned the duty of care that should follow.',
    zoomOut:
      "This is the novel's ethical hinge. Every subsequent death — William, Justine, Clerval, Elizabeth, Victor's father — flows from this moment of refusal. Shelley diagnoses a particular Romantic-era pathology: the artist or scientist who loves the dream of the work but cannot bear the responsibility of its existence in the world.",
    devices: ['Past perfect tense', 'Foreshadowing', 'Project metaphor', 'Moral irony'],
  },
]

const MODEL_PARAGRAPH = `Shelley\'s most radical move in this passage is to relocate monstrosity from the Creature\'s body into Victor\'s response. The Creature does nothing in the extract: he opens an eye, he breathes, his limbs twitch — the actions of any newborn. The horror belongs entirely to his creator, whose language fractures under the weight of his own aesthetic prejudice ("Beautiful! — Great God!"). Shelley uses past-perfect verbs ("I had worked," "I had deprived," "I had desired," "I had finished") to expose Victor\'s catastrophic misconception that creation is a project one can complete and walk away from; the Creature is grammatically over before he has begun. This dovetails with Shelley\'s wider critique of Romantic-era hubris. Victor embodies the solitary genius of Wordsworthian myth — the man who, in pursuit of sublime knowledge, isolates himself from family, community and ethical guidance — and Shelley shows that this isolation produces moral blindness, not moral elevation. The blazon of the Creature\'s features ("yellow skin," "lustrous black hair," "watery eyes") inverts the Petrarchan tradition of loving inventory, exposing the reductive gaze of a science that treats a being as a sum of selected parts. Crucially, the chapter\'s final image — "breathless horror and disgust filled my heart" — uses a passive construction that absolves Victor of agency at precisely the moment he should be claiming it. The true monstrosity, Shelley insists, is not what Victor has made but what he refuses to do next: stay.`

const MODEL_PARAGRAPH_NOTES = [
  {
    quote: '"Shelley\'s most radical move..."',
    note: 'Opens with thesis — argument-led, not narrative-led.',
  },
  {
    quote: '"The Creature does nothing in the extract..."',
    note: 'Evidence-as-argument: itemises what is and is not on the page.',
  },
  {
    quote: '"Shelley uses past-perfect verbs..."',
    note: 'Grammatical analysis — the highest-tariff form of close reading at GCSE.',
  },
  {
    quote: '"This dovetails with Shelley\'s wider critique..."',
    note: 'Pivot to context (AO3) — Romantic-era hubris, solitary genius.',
  },
  {
    quote: '"inverts the Petrarchan tradition..."',
    note: 'Literary tradition — places the writer in dialogue with predecessors.',
  },
  {
    quote: '"the true monstrosity... is what he refuses to do next: stay."',
    note: 'Ends on a single resonant verb. Examiner-friendly close.',
  },
]

/* ── Page ──────────────────────────────────────────────────────────── */

export default function FrankensteinExtractWalkthroughPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Frankenstein', url: 'https://theenglishhub.app/revision/texts/frankenstein' },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/frankenstein/extract-walkthrough',
          },
        ]}
      />

      <main className="container mx-auto max-w-5xl px-4 py-10">
        <Link
          href="/revision/texts/frankenstein"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Frankenstein
        </Link>

        <header className="mb-10">
          <Badge variant="secondary" className="mb-3">
            Volume I · Chapter 5 · The Awakening
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{EXTRACT_TITLE}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A guided extract walkthrough on the moment Victor Frankenstein animates the Creature.
            Each card invites you to <em>notice</em> a feature, <em>say</em> what the writer is
            doing with it, and <em>zoom out</em> to context. A model 250-word paragraph follows.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Extract opens: <span className="italic">{EXTRACT_OPENER}</span>
            <br />
            Extract closes: <span className="italic">{EXTRACT_CLOSER}</span>
          </p>
        </header>

        {/* The extract itself */}
        <Card className="mb-10 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="h-5 w-5 text-primary" />
              The Extract
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            {EXTRACT_PARAGRAPHS.map((para, i) => (
              <p key={i} className="leading-relaxed text-base font-serif">
                {para}
              </p>
            ))}
            <p className="text-xs text-muted-foreground mt-4 not-italic">
              From <em>Frankenstein; or, The Modern Prometheus</em>, Mary Shelley, 1818 (public
              domain).
            </p>
          </CardContent>
        </Card>

        {/* Walkthrough cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Notice / Say / Zoom Out</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Four guided readings tracing pathetic fallacy, Victor&apos;s revulsion, the catalogue of
            physical detail, and the abandonment foreshadowed by Victor&apos;s flight.
          </p>

          <div className="space-y-6">
            {CARDS.map((card, idx) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-muted/40">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <CardTitle className="text-lg leading-snug">{card.focus}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 pt-6 md:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      <Eye className="h-4 w-4" />
                      Notice
                    </div>
                    <p className="text-sm leading-relaxed">{card.notice}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 mb-2">
                      <MessageSquare className="h-4 w-4" />
                      Say
                    </div>
                    <p className="text-sm leading-relaxed">{card.say}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                      <Maximize2 className="h-4 w-4" />
                      Zoom Out
                    </div>
                    <p className="text-sm leading-relaxed">{card.zoomOut}</p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                    {card.devices.map((d) => (
                      <Badge key={d} variant="outline" className="text-xs">
                        {d}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Model paragraph */}
        <section className="mb-12">
          <Card className="border-emerald-500/30">
            <CardHeader className="bg-emerald-500/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Quote className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Model Paragraph (250 words)
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                How Victor&apos;s response — not the Creature&apos;s appearance — is the true
                monstrosity, and how this fits Shelley&apos;s critique of Romantic-era hubris and
                rejection of responsibility.
              </p>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert pt-6">
              <p className="leading-relaxed text-base font-serif">{MODEL_PARAGRAPH}</p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Why this paragraph works
            </h3>
            <ul className="space-y-3">
              {MODEL_PARAGRAPH_NOTES.map((n) => (
                <li
                  key={n.quote}
                  className="rounded-md border border-border/60 bg-card/50 p-4 text-sm"
                >
                  <span className="italic text-muted-foreground">{n.quote}</span>
                  <span className="mx-2 text-muted-foreground">—</span>
                  <span>{n.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Practice nudge */}
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Try it yourself:</strong> close this page and
              re-read the extract. Annotate one feature in each of the four areas (pathetic fallacy,
              revulsion, catalogue, abandonment). Then write a single 250-word paragraph answering:{' '}
              <em>How does Shelley present the moment of creation as a moral failure?</em>
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
