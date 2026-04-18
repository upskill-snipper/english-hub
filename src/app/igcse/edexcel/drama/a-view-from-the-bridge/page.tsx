import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Info,
  Quote,
  Drama,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'A View from the Bridge — Edexcel IGCSE IGCSE Literature Study Guide',
  description:
    'Arthur Miller\u2019s A View from the Bridge for Edexcel IGCSE IGCSE Literature: plot, characters, themes, Red Hook context and key quotations.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge',
  },
}

const plotBeats = [
  {
    part: 'Act One — Red Hook',
    summary:
      'Alfieri, an Italian-American lawyer, introduces Eddie Carbone — a longshoreman who lives with his wife Beatrice and orphaned niece Catherine. Two of Beatrice\u2019s cousins, Marco and Rodolpho, arrive illegally from Italy. Catherine and Rodolpho fall in love. Eddie\u2019s protectiveness curdles into jealousy; he visits Alfieri, who warns him that the law cannot help.',
  },
  {
    part: 'Act One, climax',
    summary:
      'At home, Eddie attempts to demonstrate Rodolpho\u2019s "unmanliness" by teaching him to box and punching him. Marco silently lifts a chair over Eddie\u2019s head as a warning. The act ends on this frozen tableau of challenged masculinity.',
  },
  {
    part: 'Act Two — Betrayal and death',
    summary:
      'Eddie returns home drunk to find Catherine and Rodolpho together and forcibly kisses first Catherine and then Rodolpho, "proving" the latter\u2019s sexuality. Eddie calls Immigration. Marco and Rodolpho are arrested; Marco publicly accuses Eddie and spits in his face. At Catherine and Rodolpho\u2019s wedding day, Marco and Eddie confront each other in the street. Eddie pulls a knife, is disarmed and stabbed with his own blade, and dies in Beatrice\u2019s arms.',
  },
]

const characters = [
  {
    name: 'Eddie Carbone',
    note:
      'A longshoreman whose affection for his niece crosses into repressed desire. Miller frames him as a flawed tragic hero: loyal to family and community until those loyalties become incompatible with the feelings he refuses to name.',
  },
  {
    name: 'Beatrice',
    note:
      'Eddie\u2019s wife. Intelligent, perceptive and quietly devastated; she is the first character to name what Eddie cannot admit about his feelings for Catherine.',
  },
  {
    name: 'Catherine',
    note:
      'Eddie and Beatrice\u2019s niece: seventeen, bright, excited by her first job and the possibility of independence. Her growing love for Rodolpho is the catalyst for Eddie\u2019s collapse.',
  },
  {
    name: 'Marco',
    note:
      'The elder Italian cousin — silent, physically imposing, driven by the need to send money back to his starving family. His code of honour is absolute and, ultimately, lethal.',
  },
  {
    name: 'Rodolpho',
    note:
      'The younger cousin: blond, singing, tailoring, cooking. His un-Italian masculinity scandalises Eddie and becomes the axis on which the plot turns.',
  },
  {
    name: 'Alfieri',
    note:
      'Italian-American lawyer and the play\u2019s narrator-chorus. Alfieri\u2019s commentary frames the action as a classical tragedy we are already watching from the future.',
  },
]

const keyQuotations = [
  {
    quote: 'This one\u2019s name was Eddie Carbone.',
    speaker: 'Alfieri (prologue)',
    analysis:
      'The past tense immediately announces tragedy: we are being told a story whose ending Alfieri already knows.',
  },
  {
    quote: 'Most of the time now we settle for half, and I like it better.',
    speaker: 'Alfieri',
    analysis:
      'Alfieri\u2019s diagnosis of Italian-American life: the accommodation between old-country honour and American law. The phrase "settle for half" is the play\u2019s central moral formula.',
  },
  {
    quote: 'As good a man as he had to be in a life that was hard.',
    speaker: 'Alfieri on Eddie',
    analysis:
      'An epitaph, offered early — Miller uses Alfieri to put moral weight on Eddie before we judge him.',
  },
  {
    quote: 'You can\u2019t marry him, Katie, you\u2019re a child, you don\u2019t understand.',
    speaker: 'Eddie',
    analysis:
      'Infantilising Catherine is Eddie\u2019s defence against recognising his desire. The word "child" is doing a lot of work.',
  },
  {
    quote: 'The guy ain\u2019t right.',
    speaker: 'Eddie on Rodolpho',
    analysis:
      'Eddie\u2019s homophobic shorthand — a refusal of expression that Miller uses to show the limits of Eddie\u2019s vocabulary for emotion.',
  },
  {
    quote: 'When am I gonna be a wife again, Eddie?',
    speaker: 'Beatrice',
    analysis:
      'Beatrice\u2019s question about their absent intimacy is the play\u2019s most devastating domestic line — and the clearest diagnosis of Eddie\u2019s repression.',
  },
  {
    quote: 'She\u2019s the madonna type.',
    speaker: 'Eddie',
    analysis:
      'The Madonna-whore framing reveals Eddie\u2019s inability to hold Catherine in a realistic relationship to himself.',
  },
  {
    quote: 'In Sicily… the law? The law is not in a book.',
    speaker: 'Alfieri',
    analysis:
      'Alfieri articulates the clash between Sicilian honour codes and American statute that structures the play.',
  },
  {
    quote: 'He degraded my brother. My blood.',
    speaker: 'Marco',
    analysis:
      'Marco\u2019s commitment to the code of honour. His plain, possessive noun phrases track a worldview Eddie claimed to share.',
  },
  {
    quote: 'You took my name!',
    speaker: 'Eddie (final confrontation)',
    analysis:
      'Eddie frames the whole catastrophe as theft of reputation. Miller lets the audience see what Eddie cannot: he has ruined his own name.',
  },
  {
    quote: 'Oh, B., my B.!',
    speaker: 'Eddie (dying)',
    analysis:
      'Eddie\u2019s final line reveals that his real grief is the loss of Beatrice, not Catherine. Miller gives Beatrice the emotional last word even as Eddie dies.',
  },
  {
    quote: 'He allowed himself to be wholly known\u2026 for that I will love him.',
    speaker: 'Alfieri',
    analysis:
      'The play\u2019s ambiguous closing lines: Miller refuses to condemn Eddie, instead offering the classical tragic gesture of recognition.',
  },
  {
    quote: 'You want somethin\u2019 else, Eddie, and you can never have her!',
    speaker: 'Beatrice',
    analysis:
      'Beatrice finally speaks the unspoken. The line comes too late to save anyone — a characteristic Miller move.',
  },
  {
    quote: 'To promise not to kill is not dishonourable.',
    speaker: 'Alfieri to Marco',
    analysis:
      'Alfieri tries to smuggle legal reason into an honour economy and fails — Marco will keep his promise only in the letter, not the spirit.',
  },
  {
    quote: 'I see it once again, and I will love its memory.',
    speaker: 'Alfieri',
    analysis:
      'The paradox of tragic recognition — love and horror held together. Classical inheritance is visible in the syntax.',
  },
]

export default async function AViewHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel drama
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE IGCSE Literature
            </Badge>
            <Badge variant="secondary">Modern drama</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">
            Arthur Miller · 1955 (revised 1956)
          </p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Miller’s modern Greek tragedy of Red Hook, Brooklyn, in which
            longshoreman Eddie Carbone destroys himself and his family over
            feelings he cannot admit for his niece Catherine.
          </p>
        </div>
      </section>

      <StudyTools textName="A View from the Bridge" textType="play" examBoard="Edexcel" />

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              A View from the Bridge is in copyright. This guide uses short
              extracts for fair-dealing study and criticism.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Plot overview
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plotBeats.map((beat) => (
            <Card key={beat.part}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">
                  {beat.part}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm leading-relaxed text-muted-foreground">
                  {beat.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Drama className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Characters at a glance
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {characters.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-body-md font-semibold text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Deep dive
          </h2>
        </div>
        <Card className="max-w-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-md font-heading leading-tight">
              Themes
            </CardTitle>
            <CardDescription className="text-body-sm">
              Honour, masculinity, law vs justice, family and immigration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              render={
                <Link href="/igcse/edexcel/drama/a-view-from-the-bridge/themes" />
              }
            >
              Open themes
              <ArrowRight className="size-3.5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Key quotations
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {keyQuotations.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                “{q.quote}”
              </blockquote>
              <p className="mt-2 text-body-xs font-medium text-primary">
                — {q.speaker}
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
