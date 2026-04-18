import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Drama,
  FileText,
  Globe,
  Lightbulb,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export type Quotation = {
  quote: string
  who: string
  analysis: string
}

export type Character = {
  name: string
  role: string
  body: string
}

export type Theme = {
  title: string
  body: string
}

export type TextGuideData = {
  title: string
  author: string
  year: string
  category: 'Novel' | 'Novella' | 'Play' | 'Poetry'
  badge: string
  intro: string
  quickInfo: {
    genre: string
    setting: string
    length: string
    published: string
  }
  plotSummary: string[]
  characters: Character[]
  themes: Theme[]
  historicalContext: string[]
  quotations: Quotation[]
}

export function TextGuide({ data }: { data: TextGuideData }) {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to all texts
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Modern Text — {data.category}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              {data.badge}
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {data.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by {data.author} — {data.year}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">{data.intro}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Quick Info</h2>
        </div>
        <Card>
          <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoTile icon={Drama} label="Genre" value={data.quickInfo.genre} />
            <InfoTile icon={Globe} label="Setting" value={data.quickInfo.setting} />
            <InfoTile icon={FileText} label="Length" value={data.quickInfo.length} />
            <InfoTile icon={Calendar} label="Published" value={data.quickInfo.published} />
          </CardContent>
        </Card>
      </section>

      {/* Plot Summary */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Plot Summary</h2>
        </div>
        <Card>
          <CardContent className="space-y-4 p-6 sm:p-8 text-body-sm text-muted-foreground">
            {data.plotSummary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Characters */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Main Characters</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.characters.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{c.name}</CardTitle>
                <CardDescription>{c.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">{c.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Key Themes</h2>
        </div>
        <Card>
          <CardContent className="space-y-5 p-6 sm:p-8 text-body-sm text-muted-foreground">
            {data.themes.map((t) => (
              <div key={t.title}>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Historical Context */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Clock className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Historical Context</h2>
        </div>
        <Card>
          <CardContent className="space-y-4 p-6 sm:p-8 text-body-sm text-muted-foreground">
            {data.historicalContext.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Key Quotations */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Key Quotations</h2>
        </div>
        <div className="grid gap-4">
          {data.quotations.map((q, i) => (
            <Card key={i}>
              <CardContent className="space-y-2 p-5">
                <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
                <p className="text-caption uppercase tracking-wide text-primary">{q.who}</p>
                <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study further CTA */}
      <section>
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-heading-md font-heading text-foreground">Study further</h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                Lock in your quotations and test yourself before the exam.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                size="sm"
                render={<Link href="/revision/flashcards" />}
              >
                Flashcards
                <ArrowRight className="size-3.5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/revision/quiz" />}
              >
                Quiz hub
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BookOpen
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>
      <div>
        <p className="text-caption uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
