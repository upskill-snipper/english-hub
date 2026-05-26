import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 9 Descriptive Model Answers - Cambridge IGCSE',
    description:
      'Three full Grade 9 Cambridge IGCSE descriptive compositions with paragraph-by-paragraph examiner commentary on vocabulary, imagery and structure.',
  },
  title: 'Grade 9 Descriptive Model Answers - Cambridge IGCSE',
  description:
    'Three full Grade 9 Cambridge IGCSE descriptive compositions with paragraph-by-paragraph examiner commentary on vocabulary, imagery and structure.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/descriptive/model-answers',
  },
}

const models = [
  {
    title: 'Describe a busy market',
    mark: '40/40',
    paragraphs: [
      {
        text: 'The market sprawled across the square like a dropped blanket, stalls overlapping at every edge, the canvas roofs catching the low September sun in uneven flashes of orange. Even from the top of the steps, I could hear it before I could see it properly - a thousand overlapping noises stitched together: the slap of fish on wet slate, the hiss of oil, a radio two stalls over stuttering between stations, and underneath it all the low mutter of haggling.',
        note: 'Opens with an extended metaphor (market as dropped blanket) and immediately combines sight and sound. No "it was a sunny day" cliché. Specific named detail: September sun, wet slate, radio.',
      },
      {
        text: 'Nearer the centre, the colours thickened. Pomegranates were stacked in trembling red pyramids; courgettes lay in polished green rows as if they had been buffed for a portrait. A woman in a mustard cardigan was picking through peppers with the careful attention of a jeweller, lifting each one to the light before rejecting it with a small, final shake of her head.',
        note: 'Mid shot. Notice the precise verbs ("trembling", "buffed", "rejecting") and the unexpected comparison (shopper as jeweller). The "mustard cardigan" is the kind of specific detail examiners reward as "precise and unusual".',
      },
      {
        text: 'The fisherman was the one I kept coming back to. His hands were the colour of soaked rope, thick-knuckled and careful, and a crescent of silver scale was stuck to his thumbnail, catching the light whenever he gestured. He scooped mackerel from the ice with a kind of tired tenderness, as if each one were an apology he was handing over in silver paper.',
        note: 'Close-up on a single figure. All five senses are possible here but the writer holds steady on sight and touch. The final simile ("apology in silver paper") is controlled - metaphor not laid on thick.',
      },
      {
        text: 'I walked out through the far edge of the square as the stalls began folding themselves up for the evening. The dropped blanket was being quietly gathered in, corner by corner, leaving the cobblestones darker where the crates had stood. A single pomegranate seed glowed in the gutter - the last bright full-stop of the afternoon.',
        note: 'Inner shot. The opening image returns - "dropped blanket... gathered in" - giving the piece a crafted shape. The final sentence is a short, arresting image. Note the full-stop metaphor is literal and visual.',
      },
    ],
  },
  {
    title: 'Describe an empty beach',
    mark: '40/40',
    paragraphs: [
      {
        text: 'The beach was a room with the furniture pushed back against the walls. The tide had gone out so far that the sand stretched out in glistening, ribbed plains where only the wind and a few arguing gulls were left to move. The air tasted of rust and old weather.',
        note: 'Extended metaphor declared immediately: beach as emptied room. Taste used in sentence three - a rare sense for an opening. "Rust and old weather" is specific and strange.',
      },
      {
        text: 'Nothing had been forgotten here, exactly, but nothing had been taken away either. A single plastic bucket, pale blue, its handle snapped, sat upright in the dimple where a child must have left it that morning. A length of orange fishing line was winding itself slowly round a piece of driftwood as if it had somewhere to be.',
        note: 'Mid shot moves through small abandoned objects. The personified fishing line ("as if it had somewhere to be") is exactly the kind of controlled flourish that separates top band work.',
      },
      {
        text: 'The rock pools held the only colour. Bend down, and each one was a stained-glass window set into the flat sand: orange anemones half-open in the warm water, the slow, considered scribble of a hermit crab, a strand of emerald weed tilting with the current as if listening for something underground.',
        note: 'Close-up. Stained-glass window is a fresh image - it also echoes the "room" metaphor (rooms have windows). Notice the triple structure and the present-tense verbs ("scribble", "tilting").',
      },
      {
        text: 'The tide would come back. It always did. For now, though, the beach kept its empty room to itself, and when I turned to leave, my footprints were already filling with bright, slow water - the tide closing the door behind me, politely, one step at a time.',
        note: 'Final paragraph closes the metaphor (empty room, closed door) and acknowledges change (the tide returning). The single-line paragraph-opener ("The tide would come back.") is deliberate sentence variation.',
      },
    ],
  },
  {
    title: 'Describe a place from your childhood',
    mark: '40/40',
    paragraphs: [
      {
        text: 'My grandmother\u2019s kitchen was always warmer than the rest of the house, even in August. The heat came from the old gas stove, which purred constantly and smelled faintly of sulphur, and from the tiled walls, which held on to every summer\u2019s worth of sunlight and gave it back slowly throughout the year.',
        note: 'Personal, specific opening. Sound (the stove purring) and smell (sulphur) in the first two sentences - and the tiles personified as memory-holders. Not a generic "my grandmother was kind" cliché.',
      },
      {
        text: 'There was a clock above the sink with a face like a dinner plate. It lost five minutes every day and nobody had ever bothered to fix it, so the kitchen ran on its own quiet, incorrect time. When I was small I believed, half-seriously, that the clock was doing it on purpose to keep us there a little longer.',
        note: 'Unusual specific detail (clock losing five minutes) built into a small, touching interpretation. This is character description disguised as setting description - a Band 5 move.',
      },
      {
        text: 'Under the table, the lino was patterned with faint blue anchors that had worn away to ghosts where our feet had always rested. I remember running my fingers along the grain of the wood underneath, finding the place where I had once carved a wobbly M with a fork and been spanked for it - the scar still there, softened now, almost affectionate.',
        note: 'Close-up through tactile detail. "Ghosts" is a precise metaphor for faded pattern. The carved M and the physical memory of being punished are unexpected and earn the specificity marks.',
      },
      {
        text: 'She is gone now, and the kitchen has been painted a colour I don\u2019t recognise. But when I am tired, or hungry, or homesick in a city that is not mine, I can still put my hand under an imaginary table and find that small, stubborn M waiting for me - and the clock, five minutes slow, keeping its patient, wrong time.',
        note: 'Final paragraph reaches out of the remembered scene into the present. Echo of every image from the piece: kitchen, clock, carved letter. Read as "controlled, evocative" in examiner report language.',
      },
    ],
  },
]

export default async function DescriptiveModelAnswersPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition/descriptive" />}
      >
        <ChevronLeft className="size-3.5" />
        Back to descriptive
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Grade 9 models</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Model descriptive compositions
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Three full Grade 9 descriptive compositions at Cambridge IGCSE length. Each paragraph is
            followed by an examiner-style annotation showing exactly what is being rewarded and why.
          </p>
        </div>
      </section>

      {models.map((m) => (
        <section key={m.title} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-primary" />
              <h2 className="text-heading-lg font-heading text-foreground">{m.title}</h2>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">{m.mark}</Badge>
          </div>

          {m.paragraphs.map((p, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                  Paragraph {i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-md leading-relaxed text-foreground">{p.text}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                    Examiner note
                  </p>
                  <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      ))}
    </div>
  )
}
