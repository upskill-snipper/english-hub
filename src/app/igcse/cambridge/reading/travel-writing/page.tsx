import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  ExternalLink,
  Target,
  MessageSquare,
  ListChecks,
  ClipboardCheck,
  Type,
  FileText,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title:
    'Travel Writing — Reading Practice Framework — The English Hub',
  description:
    'Cambridge IGCSE Paper 1 reading practice on travel writing. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/travel-writing',
  },
}

const sources = [
  {
    title: 'The Innocents Abroad',
    author: 'Mark Twain',
    href: 'https://www.gutenberg.org/ebooks/3176',
  },
  {
    title: 'Eothen',
    author: 'Alexander Kinglake',
    href: 'https://www.gutenberg.org/ebooks/4076',
  },
  {
    title: 'Travels with a Donkey in the Cévennes',
    author: 'Robert Louis Stevenson',
    href: 'https://www.gutenberg.org/ebooks/535',
  },
]

const comprehension = [
  'Where is the writer, and how do they get there? Quote a detail that places you in the scene.',
  'Find one observation that only someone new to the place could make. Why is it effective?',
  'Identify a moment where the writer compares the place to something familiar. What does the comparison reveal about the writer?',
  'Does the writer sound admiring, critical, amused or surprised? Quote one phrase as evidence.',
  'Where does the writer include a small human detail — a face, a gesture, a voice? Why is it included?',
  'Is the writer visible in the passage, or hidden behind the description? Quote one sentence as evidence.',
]

const vocabulary = [
  'observation',
  'traveller',
  'voice',
  'imagery',
  'perspective',
  'cultural',
  'anecdote',
  'tone',
]

const checklist = [
  'I commented on voice as well as description.',
  'I quoted at least three short phrases.',
  'I identified the writer’s attitude towards the place.',
  'I used the word observation or perspective correctly.',
  'My summary captured place and attitude.',
  'I finished within 45 minutes.',
]

export default async function TravelWritingPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-8 pb-16">
      <header className="space-y-4">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading" />}
        >
          <ArrowLeft className="size-3.5" />
          All reading frameworks
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="mr-1 size-3" />
            Cambridge IGCSE
          </Badge>
          <Badge variant="secondary">Reading framework</Badge>
          <Badge variant="secondary">Paper 1</Badge>
        </div>
        <h1 className="text-display-sm font-heading text-foreground">
          Travel Writing
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Travel writing is where reportage meets memoir. The writer is
          describing a real place, but their voice, biases and surprise are
          all part of the story. This framework trains you to read both
          landscape and writer at the same time.
        </p>
      </header>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Target className="size-4 text-primary" />
            </div>
            <CardTitle className="text-heading-sm font-heading">
              What this framework practises
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-body-sm text-foreground">
            Travel passages test your ability to read non-fiction voice, to
            track observation and attitude, and to comment on how a writer
            presents an unfamiliar place to a home audience. Non-fiction is
            a regular feature of Paper 1.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Suggested practice texts
          </h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          Three classic travel writers whose books are in the public domain.
          Pick a chapter that describes arrival in a new place.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {sources.map((s) => (
            <Card key={s.href} className="flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-heading-sm font-heading leading-tight">
                  {s.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">by {s.author}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Read on Project Gutenberg
                  <ExternalLink className="size-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Comprehension questions
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal space-y-3 pl-5 text-body-sm text-foreground">
              {comprehension.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <MessageSquare className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Language analysis prompt
          </h2>
        </div>
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <p className="text-body-md italic text-foreground">
              &ldquo;How does the writer use language to present this place
              and their own reaction to it?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write a paragraph of roughly 150 words. Quote three specific
              phrases covering place, people and the writer&rsquo;s voice.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Summary task template
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-3 text-body-sm text-foreground">
            <p>
              Summarise the passage in <strong>no more than 120 words</strong>
              .
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Where the writer is.
              </li>
              <li>
                <strong>Sentence 2:</strong> Their first impression.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two specific observations of
                place or people.
              </li>
              <li>
                <strong>Sentence 5:</strong> The writer&rsquo;s overall
                attitude by the end.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <Type className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Vocabulary focus
          </h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Eight terms to use when writing about travel writing.
        </p>
        <div className="flex flex-wrap gap-2">
          {vocabulary.map((v) => (
            <Badge key={v} variant="secondary" className="text-sm">
              {v}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <ClipboardCheck className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Self-assessment checklist
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-body-sm text-foreground">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-border bg-muted" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-between border-t border-border pt-6">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/childrens-classic" />}
        >
          <ArrowLeft className="size-3.5" />
          Children&rsquo;s classics
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading" />}
        >
          All frameworks
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
