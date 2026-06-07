import type { Metadata } from 'next'
import Link from 'next/link'
import { ListChecks, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: '30 Descriptive Practice Prompts - Cambridge IGCSE',
    description:
      'Thirty Cambridge IGCSE-style descriptive writing prompts graded by difficulty, with planning tips for each.',
  },
  title: '30 Descriptive Practice Prompts - Cambridge IGCSE',
  description:
    'Thirty Cambridge IGCSE-style descriptive writing prompts graded by difficulty, with planning tips for each.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/descriptive/practice-prompts',
  },
}

type Level = 'Foundation' | 'Intermediate' | 'Advanced'

const prompts: { title: string; level: Level; hint: string }[] = [
  {
    title: 'A busy market',
    level: 'Foundation',
    hint: 'Cinematic zoom works perfectly. Pick one stall-holder for the close-up.',
  },
  {
    title: 'An empty beach',
    level: 'Foundation',
    hint: 'Use taste and touch - salt, sand, wind - not just sight.',
  },
  {
    title: 'A childhood home',
    level: 'Foundation',
    hint: 'One specific, strange detail (a broken clock, a squeaky stair) beats a list of rooms.',
  },
  {
    title: 'A crowded train station',
    level: 'Foundation',
    hint: 'Movement and sound. The narrator can be still; everyone else is hurrying.',
  },
  {
    title: 'A garden at dawn',
    level: 'Foundation',
    hint: 'Light quality is your best tool. Describe it as a colour.',
  },
  {
    title: 'A kitchen during a family meal',
    level: 'Foundation',
    hint: 'Smell, steam, half-heard conversation. Hold the camera low.',
  },
  {
    title: 'A bedroom that has not been used for years',
    level: 'Foundation',
    hint: 'Dust, silence, preserved objects. Treat it as a museum exhibit.',
  },
  {
    title: 'A school corridor between lessons',
    level: 'Foundation',
    hint: 'Start with the noise, cut to the silence after the bell.',
  },
  {
    title: 'A storm approaching',
    level: 'Intermediate',
    hint: 'Weather frame. Describe the light before the noise.',
  },
  {
    title: 'A late-night supermarket',
    level: 'Intermediate',
    hint: 'Fluorescent light, bored cashier, one strange customer. Use the extended metaphor of an aquarium.',
  },
  {
    title: 'A hospital waiting room',
    level: 'Intermediate',
    hint: 'Avoid sentimentality. Describe the objects (chairs, posters, vending machine) instead of the emotions.',
  },
  {
    title: 'A funfair at closing time',
    level: 'Intermediate',
    hint: 'Lights dimming, one ride still turning, a solitary worker. Echo the opening.',
  },
  {
    title: 'A railway carriage on a long journey',
    level: 'Intermediate',
    hint: 'The reflection in the window and the reflection in the narrator both matter.',
  },
  {
    title: 'A library on a rainy afternoon',
    level: 'Intermediate',
    hint: 'Sound contrast - the rain outside, the hush inside.',
  },
  {
    title: 'A snow-covered street',
    level: 'Intermediate',
    hint: 'Silence as sound. One detail of colour (a red postbox, a yellow car) against the white.',
  },
  {
    title: 'A lighthouse at dusk',
    level: 'Intermediate',
    hint: 'The light sweeping across the rocks is your natural rhythm - let your sentences imitate it.',
  },
  {
    title: 'A cafe you used to visit',
    level: 'Intermediate',
    hint: 'Then and now. Let memory do the structural work.',
  },
  {
    title: 'A long car journey with family',
    level: 'Intermediate',
    hint: 'Interior (car) and exterior (landscape passing) can be two alternating layers.',
  },
  {
    title: 'A derelict fairground',
    level: 'Advanced',
    hint: 'Extended metaphor: funfair as abandoned theatre. Echo at the end.',
  },
  {
    title: 'A crowded religious festival',
    level: 'Advanced',
    hint: 'You are describing a crowd, but zoom to one face, one hand, one object.',
  },
  {
    title: 'A city from a high window',
    level: 'Advanced',
    hint: 'Wide shot throughout - the challenge is maintaining detail without going closer.',
  },
  {
    title: 'A submarine interior',
    level: 'Advanced',
    hint: 'Unusual, enclosed space. Sound (pings, hums), pressure, metallic taste in the air.',
  },
  {
    title: 'A place that frightens you',
    level: 'Advanced',
    hint: 'Specific fear beats general dread. Pick one sense (usually sound) and sharpen it.',
  },
  {
    title: 'The moment a power cut happens',
    level: 'Advanced',
    hint: 'A time shift technique. The same room described twice - lit and unlit.',
  },
  {
    title: 'A tropical rainforest',
    level: 'Advanced',
    hint: 'Layer sound above sight. Do not forget taste (humidity) and touch (insects, leaves).',
  },
  {
    title: 'An airport departures lounge at 3 a.m.',
    level: 'Advanced',
    hint: 'Artificial light, exhausted travellers, the overhead announcement as the one voice.',
  },
  {
    title: 'A theatre after the final performance',
    level: 'Advanced',
    hint: 'Inverted cinematic zoom: close-up first (a dropped programme), then pulling back to empty seats.',
  },
  {
    title: 'The view from a mountain summit',
    level: 'Advanced',
    hint: 'Weather and silence. Resist the temptation to explain the feeling - describe it.',
  },
  {
    title: 'A bus station in a foreign city',
    level: 'Advanced',
    hint: 'Translate the disorientation into unfamiliar sound combinations - you do not understand the announcements.',
  },
  {
    title: 'An abandoned factory at dawn',
    level: 'Advanced',
    hint: 'Machines as skeletons. Extended metaphor of a sleeping giant brought back and inverted at the end.',
  },
]

const levelStyle: Record<Level, string> = {
  Foundation: 'bg-primary/10 text-primary border-primary/20',
  Intermediate: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600',
  Advanced: 'bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-400',
}

export default async function DescriptivePromptsPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition/descriptive" />}
      >
        <ChevronLeft className="size-3.5" />
        {await t('igcse.page.back_to_descriptive')}
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_igcse')}
            </Badge>
            <Badge variant="secondary">30 prompts</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Descriptive practice prompts
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Thirty Cambridge-style descriptive titles, graded from foundation to advanced. Each
            comes with a short planning tip pointing you at the technique most likely to lift your
            response.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Prompts</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((p, i) => (
            <Card key={p.title}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-body-md font-heading leading-tight">
                    {i + 1}. {p.title}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-[10px] ${levelStyle[p.level]}`}
                  >
                    {p.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-xs text-muted-foreground leading-relaxed">{p.hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6">
        <h2 className="text-heading-md font-heading text-foreground">How to practise</h2>
        <ul className="mt-4 space-y-2 text-body-sm text-muted-foreground list-disc pl-5">
          <li>Set a 45-minute timer. 5 minutes to plan, 35 to write, 5 to check.</li>
          <li>Aim for 400 words - not fewer, not many more.</li>
          <li>Pick one technique from the hint and commit to it for the whole piece.</li>
          <li>Read your opening and closing lines last. Do they echo?</li>
        </ul>
      </section>
    </div>
  )
}
