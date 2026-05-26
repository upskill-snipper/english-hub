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
    title: 'Dialogue Analysis - Reading Practice Framework - The English Hub',
    description:
      'Cambridge IGCSE Paper 1 reading practice for analysing dialogue in fiction. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  },
  title: 'Dialogue Analysis - Reading Practice Framework',
  description:
    'Cambridge IGCSE Paper 1 reading practice for analysing dialogue in fiction. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/reading/dialogue-analysis',
  },
}

const sources = [
  {
    title: 'The Importance of Being Earnest',
    author: 'Oscar Wilde',
    href: 'https://www.gutenberg.org/ebooks/844',
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    href: 'https://www.gutenberg.org/ebooks/1661',
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    href: 'https://www.gutenberg.org/ebooks/514',
  },
]

const comprehension = [
  'Who is speaking to whom, and what is the relationship between them? Find one line that makes the relationship clear.',
  'What is the subject of the conversation on the surface, and is there a second, hidden subject beneath it?',
  'Pick out one line that shows a difference in status or power between the speakers.',
  'How do the speech tags (said, whispered, muttered, cried) shape your reading of the exchange?',
  'Does any character avoid answering a question or change the subject? What does this avoidance tell you about them?',
  'By the end of the dialogue, has anything changed between the speakers? Quote one line as evidence.',
]

const vocabulary = [
  'dialogue',
  'subtext',
  'tone',
  'register',
  'speech tag',
  'interruption',
  'pause',
  'idiolect',
]

const checklist = [
  'I named which character was speaking in each quotation.',
  'I identified at least one moment of subtext.',
  'I commented on speech tags and punctuation.',
  'I used the word subtext or register at least once.',
  'My summary focused on what changed between the speakers.',
  'I stayed within the 45 minute time limit.',
]

export default async function DialogueAnalysisPage() {
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
        <h1 className="text-display-sm font-heading text-foreground">Dialogue Analysis</h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Dialogue is where fiction does its most compressed work. A good exchange reveals
          character, relationship, conflict and change in a handful of lines. This framework trains
          you to read beneath the surface of what people say.
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
            Dialogue passages test your ability to infer relationships and power, to spot subtext,
            and to comment on the effect of speech tags, interruptions and pauses. All of these are
            rewarded on Paper 1.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Suggested practice texts</h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          These three texts all feature dialogue-rich scenes. Look for an exchange between two or
          three characters of around 600 to 900 words.
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
              &ldquo;How does the writer use language to create tension and reveal character through
              this dialogue?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write roughly 150 words. Quote three short phrases, each from a different character if
              possible, and comment on tone, subtext and speech tags.
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
              Summarise the exchange in <strong>no more than 120 words</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Who is speaking and where they are.
              </li>
              <li>
                <strong>Sentence 2:</strong> The topic on the surface of the conversation.
              </li>
              <li>
                <strong>Sentences 3-4:</strong> What the dialogue really reveals about the
                relationship.
              </li>
              <li>
                <strong>Sentence 5:</strong> What has changed by the end of the exchange.
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
          Eight terms to use when analysing dialogue.
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
          render={<Link href="/igcse/cambridge/reading/character-introductions" />}
        >
          <ArrowLeft className="size-3.5" />
          Character introductions
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/setting-atmosphere" />}
        >
          Next: Setting and atmosphere
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
