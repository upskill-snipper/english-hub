import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Sparkles,
  Globe,
  Info,
  Quote,
  Drama,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'An Inspector Calls — Edexcel IGCSE IGCSE Literature Study Guide',
  description:
    'J. B. Priestley\u2019s An Inspector Calls for Edexcel IGCSE IGCSE Literature: plot summary, characters, themes, post-war context and key quotations.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls',
  },
}

const plotBeats = [
  {
    part: 'Act One — The dinner party',
    summary:
      'The Birlings celebrate Sheila\u2019s engagement to Gerald Croft. Arthur Birling expounds on progress, "unsinkable" ships and the foolishness of talking about "community and all that nonsense". Inspector Goole arrives with news that a young woman, Eva Smith, has killed herself. He begins with Birling, who sacked Eva for leading a wage strike.',
  },
  {
    part: 'Act Two — The investigation deepens',
    summary:
      'Sheila is exposed as having had Eva dismissed from Milwards in a jealous tantrum. Gerald admits to a summer-long affair with "Daisy Renton", the same girl. Mrs Birling, pressed by the Inspector, denies responsibility for refusing Eva charity — unaware the father of Eva\u2019s unborn child is her own son.',
  },
  {
    part: 'Act Three — The twist',
    summary:
      'Eric confesses to the affair, the stolen money and the refused charity. The Inspector delivers his "fire and blood and anguish" speech and leaves. Gerald and the parents reassure themselves that "Goole" may not be a real inspector, and that no girl may have died. The phone rings: a young woman has just been taken to the infirmary after drinking disinfectant, and a police inspector is on his way.',
  },
]

const themes = [
  {
    title: 'Social responsibility',
    blurb:
      'Priestley\u2019s socialism structures the play: the Inspector\u2019s final speech argues that "we are members of one body" and that refusing that responsibility invites catastrophe.',
  },
  {
    title: 'Class and inequality',
    blurb:
      'The Birlings\u2019 dining room stands in for Edwardian England. The unseen Eva/Daisy moves through its exploitative economy from factory to shop to affair to charity refusal.',
  },
  {
    title: 'Gender and patriarchy',
    blurb:
      'Sheila and Mrs Birling offer opposite models of women\u2019s agency in 1912; Eva exists as the disposable woman the Birling men treat as a "pretty thing".',
  },
  {
    title: 'Age versus youth',
    blurb:
      'The younger Birlings absorb the Inspector\u2019s lesson; the older ones refuse it. Priestley stages generational change as the play\u2019s only real source of hope.',
  },
]

const subPages = [
  {
    href: '/igcse/edexcel/drama/an-inspector-calls/characters',
    title: 'Characters',
    description:
      'The Birlings, Gerald Croft, Eva Smith/Daisy Renton and Inspector Goole.',
    icon: Users,
  },
  {
    href: '/igcse/edexcel/drama/an-inspector-calls/themes',
    title: 'Themes',
    description:
      'Social responsibility, class, gender, age vs youth and morality.',
    icon: Sparkles,
  },
  {
    href: '/igcse/edexcel/drama/an-inspector-calls/context',
    title: 'Context',
    description:
      '1912 vs 1945, Priestley\u2019s socialism, post-war Britain and dramatic inheritance.',
    icon: Globe,
  },
]

const keyQuotations = [
  {
    quote: 'A man has to make his own way — has to look after himself.',
    speaker: 'Arthur Birling',
    analysis:
      'Priestley\u2019s target capitalist creed. The line is placed just before the Inspector\u2019s arrival so the play can spend the next two acts dismantling it.',
  },
  {
    quote: 'The Titanic… unsinkable, absolutely unsinkable.',
    speaker: 'Arthur Birling',
    analysis:
      'Dramatic irony to a 1945 audience — Priestley uses Birling\u2019s confident predictions to discredit the worldview they express.',
  },
  {
    quote: 'We are members of one body. We are responsible for each other.',
    speaker: 'Inspector Goole',
    analysis:
      'The Inspector\u2019s socialist thesis. The metaphor of the "one body" is borrowed from the New Testament, giving it moral weight beyond political argument.',
  },
  {
    quote: 'They will be taught it in fire and blood and anguish.',
    speaker: 'Inspector Goole',
    analysis:
      'Post-WW1 and WW2 resonance: the audience hears the wars as the "fire and blood" the Birling class refused to learn from in 1912.',
  },
  {
    quote: 'But these girls aren\u2019t cheap labour — they\u2019re people.',
    speaker: 'Sheila Birling',
    analysis:
      'Sheila\u2019s moral shift. Priestley uses her youth and gender to open a space the older Birlings cannot occupy.',
  },
  {
    quote: 'I know I\u2019m to blame — and I\u2019m desperately sorry.',
    speaker: 'Sheila Birling',
    analysis:
      'Genuine acceptance of responsibility — a direct contrast to her mother\u2019s deflection.',
  },
  {
    quote: 'Girls of that class —',
    speaker: 'Mrs Birling',
    analysis:
      'The sentence the Inspector interrupts. The ellipsis is itself the play\u2019s point: Mrs Birling cannot see Eva as a full person.',
  },
  {
    quote: 'I\u2019m not a child, don\u2019t forget. I\u2019ve a right to know.',
    speaker: 'Sheila Birling',
    analysis:
      'Signals generational revolt. Priestley aligns "the right to know" with the younger Birlings throughout.',
  },
  {
    quote: 'You\u2019re beginning to pretend now that nothing\u2019s really happened at all.',
    speaker: 'Sheila Birling',
    analysis:
      'Sheila sees through the attempted retrenchment of Act Three. Her sarcasm is one of the play\u2019s sharpest moments.',
  },
  {
    quote: 'Public men, Mr Birling, have responsibilities as well as privileges.',
    speaker: 'Inspector Goole',
    analysis:
      'Reverses Birling\u2019s "every man for himself". The Inspector is staging a genuinely different moral order.',
  },
  {
    quote: 'Millions and millions of Eva Smiths and John Smiths still left with us.',
    speaker: 'Inspector Goole',
    analysis:
      'The Inspector universalises: Eva is a case but not an exception. The triple "millions" suits a speech meant to feel like a sermon.',
  },
  {
    quote: 'You and I aren\u2019t the same people who sat down to dinner here.',
    speaker: 'Sheila Birling',
    analysis:
      'Sheila\u2019s transformation is the play\u2019s measure of hope; Gerald\u2019s failure to share it is the play\u2019s measure of despair.',
  },
  {
    quote: 'I hate to think how much he knows that we don\u2019t know yet.',
    speaker: 'Sheila Birling',
    analysis:
      'Marks the Inspector\u2019s quasi-supernatural knowledge. The line is one of Priestley\u2019s chief tools for making Goole feel more than human.',
  },
  {
    quote: 'I made her go to Morgan Terrace because I was sorry for her.',
    speaker: 'Gerald Croft',
    analysis:
      'Gerald\u2019s self-serving distinction — useful for discussing how Priestley characterises the upper-middle-class male.',
  },
  {
    quote: 'A girl has just died — after swallowing some disinfectant.',
    speaker: 'Arthur Birling (final line)',
    analysis:
      'Priestley\u2019s final trick: the Birlings\u2019 certainty collapses at the curtain. The dashes mimic the shock on the page and in performance.',
  },
]

export default async function InspectorCallsHubPage() {
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
            An Inspector Calls
          </h1>
          <p className="mt-1 text-body-sm text-muted-foreground">
            J. B. Priestley · 1945 (set 1912)
          </p>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A three-act morality play in which the mysterious Inspector Goole
            interrupts the Birlings’ smug dinner party to ask who is
            responsible for the suicide of a young woman called Eva Smith.
          </p>
        </div>
      </section>

      <StudyTools textName="An Inspector Calls" textType="play" examBoard="Edexcel" />

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              An Inspector Calls is in copyright. This guide includes short
              extracts under fair dealing. Read or watch the full play alongside
              these notes.
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
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Core themes
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-body-md font-semibold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {theme.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Drama className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Deep dives
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {subPages.map((p) => {
            const Icon = p.icon
            return (
              <Card
                key={p.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    render={<Link href={p.href} />}
                  >
                    Open
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
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
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.
      </p>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
