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
    'Approaching Victorian Fiction — Reading Practice Framework — The English Hub',
  description:
    'Cambridge IGCSE Paper 1 reading practice on Victorian fiction. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/victorian-fiction',
  },
}

const sources = [
  {
    title: 'Bleak House',
    author: 'Charles Dickens',
    href: 'https://www.gutenberg.org/ebooks/1023',
  },
  {
    title: 'Silas Marner',
    author: 'George Eliot',
    href: 'https://www.gutenberg.org/ebooks/550',
  },
  {
    title: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    href: 'https://www.gutenberg.org/ebooks/43',
  },
]

const comprehension = [
  'Pick the longest sentence in the passage. Break it into its parts. How does the writer hold it together?',
  'Identify a formal or elevated word and offer a plain modern equivalent. What is lost or gained by the older choice?',
  'Find a detail that dates the passage to the nineteenth century (a profession, object, manner). What does it suggest about the society?',
  'Where does the narrator stand back and comment on a character or scene? Quote a short example.',
  'Identify a word or phrase you were unsure about. Work out its meaning from context and explain your reasoning.',
  'How does the pace feel compared with modern fiction? Quote one sentence as evidence.',
]

const vocabulary = [
  'syntax',
  'clause',
  'register',
  'formal',
  'periodic sentence',
  'narrator intrusion',
  'archaic',
  'context',
]

const checklist = [
  'I broke down at least one long sentence into parts.',
  'I commented on register and formality.',
  'I worked out a word from context before guessing.',
  'I used the term syntax or clause at least once.',
  'My summary captured what mattered most in the passage.',
  'I finished within 45 minutes.',
]

export default async function VictorianFictionPage() {
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
          Approaching Victorian Fiction
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Victorian fiction can feel dense at first — long sentences, formal
          vocabulary, leisurely pacing. But once you understand its habits,
          it becomes a pleasure to read. This framework teaches you how to
          break it down.
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
            Victorian passages test your syntactic stamina, your vocabulary
            in context and your sensitivity to register. Paper 1 regularly
            uses nineteenth-century extracts, so learning to read them
            confidently is one of the highest-return skills you can
            develop.
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
          Three Victorian novels that give you a cross-section of the
          period. Dip into any chapter.
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
              &ldquo;How does the writer use language to create a distinctly
              Victorian sense of world and voice?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write roughly 150 words. Quote three phrases and comment on
              syntax, register and period detail.
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
                <strong>Sentence 1:</strong> Who and where the passage is
                about.
              </li>
              <li>
                <strong>Sentence 2:</strong> The main event or observation.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two period details and what
                they tell you about the society.
              </li>
              <li>
                <strong>Sentence 5:</strong> The attitude the narrator seems
                to take towards the scene.
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
          Eight terms that will help you describe nineteenth-century prose.
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
          render={<Link href="/igcse/cambridge/reading/narrative-voice" />}
        >
          <ArrowLeft className="size-3.5" />
          Narrative voice
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/modernist-fiction" />}
        >
          Next: Modernist fiction
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
