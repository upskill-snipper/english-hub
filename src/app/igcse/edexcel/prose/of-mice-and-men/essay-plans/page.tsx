import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, PenLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Of Mice and Men Essay Plans — Edexcel IGCSE Literature',
  description:
    'Five IGCSE essay plans for Of Mice and Men with PEEL paragraphs: the American Dream, loneliness, Curley\u2019s wife, George and Lennie\u2019s relationship, and Steinbeck\u2019s use of setting.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/of-mice-and-men/essay-plans',
  },
}

const essayPlans = [
  {
    title: 'How does Steinbeck present the American Dream in the novella?',
    introduction:
      'Define the American Dream as the belief that hard work leads to land, independence and self-determination. Thesis: Steinbeck presents the Dream as both a necessary psychological survival mechanism and a cruel illusion that the novella\u2019s cyclical structure was always going to deny.',
    paragraphs: [
      {
        point: 'The Dream is introduced as a ritual between George and Lennie, repeated rather than planned.',
        evidence: '"An\u2019 live off the fatta the lan\u2019."',
        explanation: 'The phrase is Lennie\u2019s refrain, learned by heart. Steinbeck presents the Dream as a verbal ritual \u2014 a story told for comfort rather than a realistic ambition. Its repetition sustains the men emotionally.',
        link: 'Context: during the Great Depression, itinerant workers had almost no chance of buying land, making the Dream a shared fiction of the era.',
      },
      {
        point: 'Candy\u2019s investment makes the Dream briefly concrete, which paradoxically signals its death.',
        evidence: '"Le\u2019s get that place now."',
        explanation: 'The moment the Dream becomes financially possible is, in Steinbeck\u2019s fatalistic structure, the moment it begins to collapse. Candy\u2019s urgency is driven by the loss of his dog \u2014 he needs a reason to live.',
        link: 'Steinbeck structures the novella so that hope and disaster are tightly interlocked: the Dream peaks in Chapter 3 and dies in Chapter 5.',
      },
      {
        point: 'Curley\u2019s wife\u2019s Hollywood dream is a gendered variant of the same illusion.',
        evidence: '"I coulda made somethin\u2019 of myself. Maybe I will yet."',
        explanation: 'Her dream is no less unrealistic than George\u2019s farm. Steinbeck shows that the American Dream fails women as thoroughly as it fails men, but through different mechanisms \u2014 marriage rather than employment traps her.',
        link: 'Link to the Burns epigraph: all "best laid schemes" in the novella are defeated, regardless of the dreamer.',
      },
    ],
    conclusion:
      'Steinbeck presents the American Dream as emotionally essential but structurally doomed. The novella\u2019s cyclical form, returning to the same pool where the Dream was first told, confirms that the Dream was always a story, not a plan.',
  },
  {
    title: 'How does Steinbeck present loneliness in the novella?',
    introduction:
      'Note that the novella is set near Soledad ("solitude" in Spanish). Thesis: Steinbeck presents loneliness as the ranch workers\u2019 universal condition, using Crooks, Candy and Curley\u2019s wife to show how race, age and gender intensify an isolation the economic system already imposes.',
    paragraphs: [
      {
        point: 'Crooks\u2019s segregated room dramatises loneliness as racial exclusion.',
        evidence: '"A guy needs somebody \u2014 to be near him. A guy goes nuts if he ain\u2019t got nobody."',
        explanation: 'Crooks diagnoses loneliness as a pathology, not merely a feeling. His medical language ("goes nuts") elevates loneliness from mood to illness. His isolated room is a physical manifestation of Jim Crow segregation.',
        link: 'Context: Steinbeck wrote during the Depression when Black workers faced double marginalisation \u2014 economic precarity and racial segregation.',
      },
      {
        point: 'Candy\u2019s loss of his dog removes his only companion and drives him towards the Dream.',
        evidence: '"I ought to of shot that dog myself, George."',
        explanation: 'The line is functional and structural: it prepares George\u2019s final decision. But it is also about loneliness \u2014 Candy\u2019s regret is that a stranger ended his most important relationship.',
        link: 'Link to the ending: George shoots Lennie himself, having learned from Candy\u2019s mistake.',
      },
      {
        point: 'Curley\u2019s wife\u2019s loneliness is gendered: she is isolated by marriage, not by work.',
        evidence: '"I coulda made somethin\u2019 of myself."',
        explanation: 'She is the only woman on the ranch, unnamed by Steinbeck to signal her social erasure. Her loneliness drives her to seek conversation from the men, which the narrative frames as dangerous.',
        link: 'Gender: Steinbeck shows that the ranch economy marginalises women completely, offering no community at all.',
      },
    ],
    conclusion:
      'Steinbeck presents loneliness as the condition that unites the ranch but that no character can escape. Race, age and gender are the specific mechanisms, but the economic system is the underlying cause.',
  },
  {
    title: 'How does Steinbeck present Curley\u2019s wife?',
    introduction:
      'Acknowledge the critical debate: Steinbeck was later accused of creating a sexist portrait. Thesis: Steinbeck initially presents Curley\u2019s wife through the men\u2019s hostile gaze but gradually reveals her humanity, culminating in a death scene that restores what the narrative withheld.',
    paragraphs: [
      {
        point: 'In her introduction Curley\u2019s wife is defined entirely by her appearance and the men\u2019s reaction.',
        evidence: '"She had full, rouged lips and wide-spaced eyes, heavily made up."',
        explanation: 'Steinbeck filters her through visual description and male suspicion. She has no name, no interiority, and is labelled "jailbait" and a "tart" by the other characters. The technique reproduces the ranch\u2019s sexism.',
        link: 'Context: in 1930s California, women on ranches had almost no independent social existence.',
      },
      {
        point: 'In the barn she reveals her lost dream and her loneliness.',
        evidence: '"I coulda made somethin\u2019 of myself. Maybe I will yet."',
        explanation: 'Steinbeck delays her interiority until Chapter 5, giving her a dream that mirrors George\u2019s. The "maybe I will yet" is heartbreaking in retrospect: she is about to die.',
        link: 'This links to the American Dream theme: her dream is thwarted by gender just as the men\u2019s is thwarted by class.',
      },
      {
        point: 'In death Steinbeck finally sees her as a person, not a threat.',
        evidence: '"She was very pretty and simple, and her face was sweet and young."',
        explanation: 'The narrator\u2019s register shifts from suspicion to tenderness. "Sweet and young" is language the narrative withheld while she was alive, implying that the ranch\u2019s misogyny shaped how we saw her too.',
        link: 'Steinbeck implicates the reader: we accepted the men\u2019s framing, and the death scene reveals that complicity.',
      },
    ],
    conclusion:
      'Steinbeck presents Curley\u2019s wife through a deliberately restricted lens that the novella ultimately breaks. Her characterisation is a structural argument about how social prejudice shapes perception.',
  },
  {
    title: 'How does Steinbeck present the relationship between George and Lennie?',
    introduction:
      'Establish the relationship as the novella\u2019s emotional core and structural spine. Thesis: Steinbeck presents their friendship as ritualised, unequal and ultimately unsustainable, using the dream speech as a refrain that binds them and the ending as the relationship\u2019s tragic fulfilment.',
    paragraphs: [
      {
        point: 'The dream speech is a ritual that maintains the relationship through shared language.',
        evidence: '"I got you to look after me, and you got me to look after you."',
        explanation: 'Lennie\u2019s echo of George\u2019s words creates the illusion of reciprocity. In practice, the care flows one way \u2014 but the ritual itself is the relationship\u2019s sustaining mechanism.',
        link: 'Slim\u2019s observation "Ain\u2019t many guys travel around together" marks this friendship as exceptional in a world of isolation.',
      },
      {
        point: 'George\u2019s private confession to Slim reveals the relationship\u2019s complexity: love mixed with resentment.',
        evidence: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
        explanation: 'George knows the dream is a fiction but performs it anyway because it sustains both of them. His resentment surfaces in unguarded moments, which makes the relationship feel real rather than sentimental.',
        link: 'This complexity prevents the reader from sentimentalising the ending: George\u2019s grief includes relief, which makes it more devastating.',
      },
      {
        point: 'The ending transforms the relationship from one of protection to one of mercy killing.',
        evidence: '"I ain\u2019t mad. I never been mad, an\u2019 I ain\u2019t now."',
        explanation: 'George\u2019s final words are spoken in the same gentle, conversational register as the dream speech. The killing is an act of love \u2014 more humane than the lynch mob \u2014 but it ends the relationship that defined him.',
        link: 'Structural echo: Candy\u2019s regret about his dog ("I ought to of shot that dog myself") directly informs George\u2019s decision.',
      },
    ],
    conclusion:
      'Steinbeck presents George and Lennie\u2019s friendship as the novella\u2019s only genuine human connection. Its destruction is the final proof that the world of the ranch cannot accommodate tenderness.',
  },
  {
    title: 'How does Steinbeck use setting to convey meaning in the novella?',
    introduction:
      'Note the novella\u2019s five locations (pool, bunkhouse, Crooks\u2019s room, barn, pool). Thesis: Steinbeck uses a deliberately circular structure and increasingly claustrophobic settings to show that nature offers a temporary refuge from human cruelty but cannot ultimately protect anyone.',
    paragraphs: [
      {
        point: 'The opening pool is presented as a natural paradise that exists apart from the ranch.',
        evidence: '"The deep green pool of the Salinas River was still in the late afternoon."',
        explanation: 'Steinbeck\u2019s descriptive language is Edenic: still water, sycamores, rabbits. The pastoral beauty contrasts with the human violence that will intrude. Nature is indifferent and beautiful.',
        link: 'The pool\u2019s return in Chapter 6 transforms the pastoral from paradise to execution site.',
      },
      {
        point: 'The bunkhouse and barn are progressively more enclosed, reflecting the novella\u2019s tightening structure.',
        evidence: '"The bunk house was a long, rectangular building."',
        explanation: 'Steinbeck\u2019s stage-direction prose strips the interiors to bare surfaces. Each interior space is more confined: bunkhouse, then Crooks\u2019s tiny room, then the barn. The claustrophobia mirrors the characters\u2019 shrinking options.',
        link: 'Steinbeck originally titled the novella "Something That Happened" \u2014 the settings are stages in a predetermined plot.',
      },
      {
        point: 'The return to the pool in Chapter 6 transforms the opening setting into a site of tragedy.',
        evidence: '"A silent head and beak lanced down and plucked it out by the head."',
        explanation: 'The heron eating the water snake replaces the opening\u2019s tranquillity with predation. Nature is no longer a refuge but a mirror of the violence about to occur. The cyclical structure makes the ending feel inevitable.',
        link: 'The circular structure (pool\u2013ranch\u2013pool) enacts the Burns epigraph: the best-laid plans always return to their starting point.',
      },
    ],
    conclusion:
      'Steinbeck uses setting as a structural and symbolic device. The journey from open pool to enclosed ranch and back enacts the novella\u2019s fatalism: there is nowhere the characters can go that the world will not follow.',
  },
]

export default async function OmamEssayPlansPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/prose/of-mice-and-men" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to Of Mice and Men
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Essay plans</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men: Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five common IGCSE essay questions with full PEEL paragraph
            plans. Each plan includes an introduction, three developed
            paragraphs (Point, Evidence, Explanation, Link) and a
            conclusion.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing (CDPA 1988) for
              study and criticism. These plans are revision aids, not model
              answers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {essayPlans.map((plan, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-border/60 bg-card overflow-hidden"
          >
            <div className="border-b border-border/60 bg-muted/30 p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                  {idx + 1}
                </span>
                <h2 className="text-heading-md font-heading text-foreground">
                  {plan.title}
                </h2>
              </div>
            </div>

            <div className="p-5 space-y-5">
              <div>
                <h3 className="text-body-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1.5">
                  <PenLine className="size-3.5" />
                  Introduction
                </h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {plan.introduction}
                </p>
              </div>

              {plan.paragraphs.map((para, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-lg border border-border/40 bg-muted/10 p-4 space-y-2"
                >
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Paragraph {pIdx + 1}
                  </h4>
                  <div className="grid gap-2">
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Point:{' '}
                      </span>
                      {para.point}
                    </p>
                    <blockquote className="border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                      {para.evidence}
                    </blockquote>
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Explanation:{' '}
                      </span>
                      {para.explanation}
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Link:{' '}
                      </span>
                      {para.link}
                    </p>
                  </div>
                </div>
              ))}

              <div>
                <h3 className="text-body-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1.5">
                  <PenLine className="size-3.5" />
                  Conclusion
                </h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {plan.conclusion}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the
        CDPA 1988 for criticism and review. Full text available from your
        school or local library.
      </p>
    </div>
  )
}
