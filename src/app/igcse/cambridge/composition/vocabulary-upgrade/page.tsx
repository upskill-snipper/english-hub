import type { Metadata } from 'next'
import Link from 'next/link'
import { Type, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Vocabulary Upgrade - Cambridge IGCSE Composition',
    description:
      'Replace tired, overused words with precise alternatives for Cambridge IGCSE composition. Said, big, small, good, bad, walked, looked and more.',
  },
  title: 'Vocabulary Upgrade - Cambridge IGCSE Composition',
  description:
    'Replace tired, overused words with precise alternatives for Cambridge IGCSE composition. Said, big, small, good, bad, walked, looked and more.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/vocabulary-upgrade',
  },
}

type Upgrade = {
  word: string
  upgrades: { word: string; means: string }[]
  note?: string
}

const groups: { category: string; words: Upgrade[] }[] = [
  {
    category: 'Speech verbs',
    words: [
      {
        word: 'said',
        note: 'Said is invisible and usually correct. Upgrade only when the tone changes.',
        upgrades: [
          { word: 'murmured', means: 'low, confidential, half-heard' },
          { word: 'muttered', means: 'resentful, reluctant' },
          { word: 'whispered', means: 'deliberate, secret' },
          { word: 'bellowed', means: 'loud, uncontrolled' },
          { word: 'snapped', means: 'sharp, angry, brief' },
          { word: 'stammered', means: 'nervous, broken speech' },
          { word: 'hissed', means: 'quiet but furious' },
          { word: 'conceded', means: 'reluctantly agreed' },
        ],
      },
    ],
  },
  {
    category: 'Size adjectives',
    words: [
      {
        word: 'big',
        upgrades: [
          { word: 'colossal', means: 'very large, often overwhelming' },
          { word: 'immense', means: 'huge in scale' },
          { word: 'substantial', means: 'considerable, noticeable' },
          { word: 'vast', means: 'open, wide, boundless' },
          { word: 'towering', means: 'impressively tall' },
          { word: 'sprawling', means: 'spread over a wide area' },
          { word: 'cavernous', means: 'huge and echoing (interior)' },
        ],
      },
      {
        word: 'small',
        upgrades: [
          { word: 'slight', means: 'delicate, minor' },
          { word: 'cramped', means: 'uncomfortably small' },
          { word: 'compact', means: 'efficient, tidy smallness' },
          { word: 'diminutive', means: 'very small, often cute' },
          { word: 'fragile', means: 'small and easily damaged' },
          { word: 'minute', means: 'extremely tiny' },
        ],
      },
    ],
  },
  {
    category: 'Quality adjectives',
    words: [
      {
        word: 'good',
        upgrades: [
          { word: 'accomplished', means: 'skilled, experienced' },
          { word: 'commendable', means: 'worthy of praise' },
          { word: 'admirable', means: 'inspiring respect' },
          { word: 'remarkable', means: 'noticeable, out of the ordinary' },
          { word: 'competent', means: 'capable, reliable' },
        ],
      },
      {
        word: 'bad',
        upgrades: [
          { word: 'dismal', means: 'gloomy and disappointing' },
          { word: 'abysmal', means: 'extremely bad' },
          { word: 'wretched', means: 'miserable, unpleasant' },
          { word: 'appalling', means: 'shockingly bad' },
          { word: 'deficient', means: 'lacking, inadequate' },
        ],
      },
      {
        word: 'nice',
        upgrades: [
          { word: 'pleasant', means: 'agreeable, mild' },
          { word: 'charming', means: 'delightful, attractive' },
          { word: 'gracious', means: 'kind in manner' },
          { word: 'considerate', means: 'thoughtful of others' },
          { word: 'agreeable', means: 'easy to like' },
        ],
      },
    ],
  },
  {
    category: 'Movement verbs',
    words: [
      {
        word: 'walked',
        upgrades: [
          { word: 'strolled', means: 'relaxed, unhurried' },
          { word: 'trudged', means: 'slow, tired, reluctant' },
          { word: 'strode', means: 'long, confident steps' },
          { word: 'ambled', means: 'casual, no destination' },
          { word: 'shuffled', means: 'feet barely lifted' },
          { word: 'hurried', means: 'fast, anxious' },
          { word: 'limped', means: 'uneven, injured' },
        ],
      },
      {
        word: 'ran',
        upgrades: [
          { word: 'sprinted', means: 'short burst of full speed' },
          { word: 'dashed', means: 'sudden, urgent' },
          { word: 'bolted', means: 'sudden, panicked' },
          { word: 'hurtled', means: 'reckless, out of control' },
          { word: 'darted', means: 'quick, small, changing direction' },
          { word: 'scampered', means: 'light, playful, usually small animal or child' },
        ],
      },
    ],
  },
  {
    category: 'Perception verbs',
    words: [
      {
        word: 'looked',
        upgrades: [
          { word: 'glanced', means: 'brief, casual look' },
          { word: 'stared', means: 'long, focused, often intense' },
          { word: 'peered', means: 'careful, straining to see' },
          { word: 'glared', means: 'angry look' },
          { word: 'gazed', means: 'long, soft, dreamy' },
          { word: 'scanned', means: 'quick, systematic' },
          { word: 'studied', means: 'careful, thoughtful' },
        ],
      },
      {
        word: 'saw',
        upgrades: [
          { word: 'noticed', means: 'became aware of' },
          { word: 'spotted', means: 'picked out from a background' },
          { word: 'glimpsed', means: 'briefly, incompletely' },
          { word: 'witnessed', means: 'saw an event of significance' },
          { word: 'observed', means: 'watched carefully' },
        ],
      },
    ],
  },
  {
    category: 'Emotion (show, don’t tell)',
    words: [
      {
        word: 'happy',
        note: 'Where possible, show the feeling through body language instead of upgrading the adjective.',
        upgrades: [
          { word: 'elated', means: 'very happy, light-headed' },
          { word: 'jubilant', means: 'openly celebrating' },
          { word: 'content', means: 'quiet satisfaction' },
          { word: 'giddy', means: 'excited, slightly silly' },
          { word: 'relieved', means: 'happy because worry has ended' },
        ],
      },
      {
        word: 'sad',
        upgrades: [
          { word: 'despondent', means: 'low, hopeless' },
          { word: 'heartbroken', means: 'acute emotional pain' },
          { word: 'melancholy', means: 'quiet, lingering sadness' },
          { word: 'crestfallen', means: 'visibly disappointed' },
          { word: 'forlorn', means: 'lonely and pitiful' },
        ],
      },
      {
        word: 'angry',
        upgrades: [
          { word: 'furious', means: 'very angry, barely controlled' },
          { word: 'seething', means: 'controlled but intense anger' },
          { word: 'livid', means: 'extreme anger, visible on the face' },
          { word: 'indignant', means: 'angry at unfairness' },
          { word: 'irritated', means: 'mildly annoyed' },
        ],
      },
      {
        word: 'scared',
        upgrades: [
          { word: 'terrified', means: 'very afraid, frozen' },
          { word: 'apprehensive', means: 'worried about something coming' },
          { word: 'uneasy', means: 'vague sense of wrongness' },
          { word: 'alarmed', means: 'startled into fear' },
          { word: 'horrified', means: 'shocked and disgusted' },
        ],
      },
    ],
  },
]

export default async function VocabularyUpgradePage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/composition" />}>
        <ChevronLeft className="size-3.5" />
        Back to composition
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Style and accuracy</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Vocabulary upgrade
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Precise vocabulary is one of the quickest ways to move up a band. The goal is not longer
            words - it is more <em>exact</em> words. Each upgrade below has a short definition so
            you pick the one that fits your sentence, not just the biggest one.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6">
        <h2 className="text-heading-md font-heading text-foreground">The rule of precision</h2>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          A shorter, precise word beats a longer, vague one. <em>Trudged</em> is better than{' '}
          <em>walked</em>. <em>Muttered</em> is better than <em>vociferated</em> - not because
          it\u2019s longer or fancier, but because it tells the reader exactly how the character
          spoke. Precision is what examiners reward; thesaurus-mining is what they flag.
        </p>
      </section>

      {groups.map((g) => (
        <section key={g.category}>
          <div className="mb-5 flex items-center gap-3">
            <Type className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">{g.category}</h2>
          </div>
          <div className="space-y-4">
            {g.words.map((w) => (
              <Card key={w.word}>
                <CardHeader>
                  <CardTitle className="text-heading-sm font-heading">
                    <span className="text-muted-foreground">instead of </span>
                    <span className="italic">{w.word}</span>
                  </CardTitle>
                  {w.note && <p className="pt-1 text-body-xs text-muted-foreground">{w.note}</p>}
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {w.upgrades.map((u) => (
                      <div
                        key={u.word}
                        className="rounded-lg border border-border/60 bg-muted/30 p-3"
                      >
                        <p className="text-body-sm font-semibold text-foreground">{u.word}</p>
                        <p className="text-body-xs text-muted-foreground">{u.means}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          A warning about thesaurus writing
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          Swapping every word for a longer synonym is one of the clearest markers of Band 3 writing.
          If a reader has to reach for a dictionary twice in one paragraph, something has gone
          wrong. The aim of this page is not to sound clever - it is to sound <em>exact</em>.
          Replace only the words that are doing vague work.
        </p>
      </section>
    </div>
  )
}
