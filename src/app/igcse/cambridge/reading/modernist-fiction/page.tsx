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

export const metadata: Metadata = {
  title:
    'Approaching Modernist Fiction — Reading Practice Framework — The English Hub',
  description:
    'Cambridge IGCSE Paper 1 reading practice on modernist fiction. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/modernist-fiction',
  },
}

const sources = [
  {
    title: 'The Garden Party and Other Stories',
    author: 'Katherine Mansfield',
    href: 'https://www.gutenberg.org/ebooks/1429',
  },
  {
    title: 'Dubliners',
    author: 'James Joyce',
    href: 'https://www.gutenberg.org/ebooks/2814',
  },
  {
    title: 'The Voyage Out',
    author: 'Virginia Woolf',
    href: 'https://www.gutenberg.org/ebooks/144',
  },
]

const comprehension = [
  'Whose thoughts are you inside in this passage? Quote the moment you first realise.',
  'Find a sentence that seems to interrupt itself or drift into a memory. Why does the writer use that form?',
  'Identify a sensory fragment (a smell, a sound) that triggers a shift in the narrator’s attention.',
  'Where does the writer refuse to explain something? What effect does that refusal have?',
  'Pick out a moment of stream of consciousness — associative, not logical. Describe what holds it together.',
  'What seems to be important to this character that would probably pass unnoticed in a more traditional novel?',
]

const vocabulary = [
  'modernism',
  'stream of consciousness',
  'interior monologue',
  'free indirect discourse',
  'fragment',
  'epiphany',
  'ambiguity',
  'impressionism',
]

const checklist = [
  'I named a modernist technique using correct terminology.',
  'I quoted a short fragment, not a long sentence.',
  'I commented on ambiguity or gaps in the text.',
  'I used the term stream of consciousness or interior monologue.',
  'My summary accepted uncertainty instead of inventing it.',
  'I finished within 45 minutes.',
]

export default function ModernistFictionPage() {
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
          Approaching Modernist Fiction
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Modernist writers were more interested in how the mind moves than
          in plot or explanation. Learning to read their fragmented,
          impressionistic prose will sharpen your sense of voice and widen
          your analytical vocabulary.
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
            Modernist passages push you to read for interiority, to notice
            gaps and ambiguity, and to comment on how form shapes meaning.
            These are advanced skills that push a Paper 1 answer into the
            top band.
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
          Three early modernist writers whose work sits in the public
          domain. Short stories are ideal for this framework.
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
              &ldquo;How does the writer use language to capture the movement
              of a character’s mind?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write roughly 150 words. Quote three short fragments and
              comment on syntax, pace and interiority.
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
              Summarise what you understand of the passage in{' '}
              <strong>no more than 120 words</strong>. Ambiguity is allowed
              — name it.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Whose consciousness we are
                inside.
              </li>
              <li>
                <strong>Sentence 2:</strong> Where and when the scene seems
                to be set.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two impressions or feelings
                dominating the character.
              </li>
              <li>
                <strong>Sentence 5:</strong> What the passage leaves
                deliberately unclear.
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
          Eight terms that unlock modernist prose.
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
          render={<Link href="/igcse/cambridge/reading/victorian-fiction" />}
        >
          <ArrowLeft className="size-3.5" />
          Victorian fiction
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/childrens-classic" />}
        >
          Next: Children&rsquo;s classics
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
