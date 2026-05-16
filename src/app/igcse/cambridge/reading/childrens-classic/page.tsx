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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Children',
    description: 'Cambridge IGCSE Paper 1 reading practice using children',
  },
  title: "Children's Classics — Reading Practice Framework",
  description:
    "Cambridge IGCSE Paper 1 reading practice using children's classics. Comprehension, language analysis, summary and self-assessment with free Project Gutenberg texts.",
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/reading/childrens-classic',
  },
}

const sources = [
  {
    title: 'The Wind in the Willows',
    author: 'Kenneth Grahame',
    href: 'https://www.gutenberg.org/ebooks/289',
  },
  {
    title: 'Anne of Green Gables',
    author: 'L. M. Montgomery',
    href: 'https://www.gutenberg.org/ebooks/45',
  },
  {
    title: 'Alice’s Adventures in Wonderland',
    author: 'Lewis Carroll',
    href: 'https://www.gutenberg.org/ebooks/11',
  },
]

const comprehension = [
  'What makes the opening feel welcoming or playful? Quote one specific phrase.',
  'Identify a moment where the writer uses simple words to create a powerful effect.',
  'How does the narrator treat the child (or child-like) character? Quote one line that shows respect, affection or amusement.',
  'Find an image or comparison that a young reader would immediately recognise. Why is it effective?',
  'Where does the writer trust the reader to work something out rather than explaining it?',
  'Is there a serious idea beneath the light surface of the passage? What is it?',
]

const vocabulary = [
  'voice',
  'pace',
  'imagery',
  'diction',
  'wonder',
  'innocence',
  'perspective',
  'clarity',
]

const checklist = [
  'I commented on voice and clarity.',
  'I quoted two short phrases in my analysis.',
  'I identified a serious idea under the light surface.',
  'I used the word voice or perspective correctly.',
  'My summary kept the tone of the original in mind.',
  'I finished within 45 minutes.',
]

export default async function ChildrensClassicPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-8 pb-16">
      <header className="space-y-4">
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/reading" />}>
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
        <h1 className="text-display-sm font-heading text-foreground">Children&rsquo;s Classics</h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Children&rsquo;s classics look easy. That is the whole skill. They use plain words with
          great precision, move quickly without feeling rushed, and carry serious themes beneath
          their light voice. They are ideal practice for training economy and clarity.
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
            These passages sharpen your ability to comment on tone, pace and voice, and to notice
            how simple diction can do sophisticated work. Paper 1 rewards clear, precise observation
            — exactly what children&rsquo;s classics train.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Suggested practice texts</h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          Three classic children&rsquo;s books whose opening chapters are perfect for practice.
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
          <h2 className="text-heading-lg font-heading text-foreground">Comprehension questions</h2>
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
          <h2 className="text-heading-lg font-heading text-foreground">Language analysis prompt</h2>
        </div>
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <p className="text-body-md italic text-foreground">
              &ldquo;How does the writer use language to create a clear, warm and engaging
              voice?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write a paragraph of roughly 150 words. Quote three phrases and comment on verb
              choice, simple imagery and pace.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Summary task template</h2>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-3 text-body-sm text-foreground">
            <p>
              Summarise the passage in <strong>no more than 120 words</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Who the main character is and where we meet them.
              </li>
              <li>
                <strong>Sentence 2:</strong> The tone of the opening.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two events or observations from the passage.
              </li>
              <li>
                <strong>Sentence 5:</strong> The idea or feeling the writer is quietly working
                towards.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <Type className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Vocabulary focus</h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Eight terms to use when writing about children&rsquo;s classics.
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
          render={<Link href="/igcse/cambridge/reading/modernist-fiction" />}
        >
          <ArrowLeft className="size-3.5" />
          Modernist fiction
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/travel-writing" />}
        >
          Next: Travel writing
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
