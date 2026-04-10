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
    'Classic Novel Openings — Reading Practice Framework — The English Hub',
  description:
    'Practise Cambridge IGCSE Paper 1 reading on classic novel openings. Structured comprehension, language analysis, summary and self-assessment using free public-domain texts from Project Gutenberg.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/classic-novel-openings',
  },
}

const sources = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    href: 'https://www.gutenberg.org/ebooks/1342',
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    href: 'https://www.gutenberg.org/ebooks/1260',
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    href: 'https://www.gutenberg.org/ebooks/1400',
  },
]

const comprehension = [
  'What situation or moment does the writer choose to open the novel with, and why do you think they start here rather than earlier or later?',
  'Identify two details in the first paragraph that tell you something about the time period or social world of the novel.',
  'What impression do you get of the narrator or main character by the end of the opening, and which specific words create that impression?',
  'Find one sentence that feels like a promise or a hook for the rest of the novel. Explain what question it makes you want to answer.',
  'Pick out a moment where the writer uses contrast (e.g. light and dark, calm and tension). How does the contrast affect the reader?',
  'Is the opening fast-paced or slow? Quote one piece of evidence and comment on the effect.',
]

const vocabulary = [
  'exposition',
  'tone',
  'register',
  'narrator',
  'hook',
  'setting',
  'foreshadowing',
  'perspective',
]

const checklist = [
  'I quoted directly from the passage using quotation marks.',
  'Every point I made was supported by evidence from the text.',
  'I wrote about effect on the reader, not just what the words mean.',
  'My summary was in my own words.',
  'I used at least three words from the vocabulary focus list.',
  'I managed my time: no more than 45 minutes for the whole framework.',
]

export default function ClassicNovelOpeningsPage() {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
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
          Classic Novel Openings
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          First pages do an enormous amount of work. They set the tone,
          introduce the narrator, plant a question in the reader&rsquo;s mind
          and quietly teach you how the rest of the book wants to be read.
          This framework trains you to notice those moves and to write about
          them in the tight, evidence-led way Cambridge rewards.
        </p>
      </header>

      {/* Skills */}
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
            Reading a novel opening tests your ability to infer character and
            setting from small details, to identify tone and narrative voice,
            to explain how a writer creates expectation, and to summarise a
            whole scene in a few accurate sentences. These are the core
            skills Paper 1 is looking for across questions 1, 2 and 3.
          </p>
        </CardContent>
      </Card>

      {/* Sources */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Suggested practice texts
          </h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          Open any of the three links below on Project Gutenberg and read the
          first chapter. Each is free, in the public domain, and loads
          straight in your browser.
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

      {/* Comprehension */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Comprehension questions
          </h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          Work through these six questions after reading your chosen passage.
          Aim for a sentence or two per answer and always quote directly.
        </p>
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

      {/* Language analysis */}
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
              &ldquo;How does the writer use language to create a strong sense
              of voice and world in the opening pages?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write a single paragraph of roughly 150 words. Quote two or
              three specific phrases and comment on the effect of each one.
              Aim to use at least one technical term (e.g. tone, register,
              syntax) correctly.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Summary task */}
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
              Write a summary of the opening in{' '}
              <strong>no more than 120 words</strong>, using your own
              language. Structure your summary like this:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Who the main character is and
                where we first meet them.
              </li>
              <li>
                <strong>Sentence 2:</strong> The situation or conflict that
                the opening establishes.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two specific things we learn
                about the character&rsquo;s world, mood or personality.
              </li>
              <li>
                <strong>Sentence 5:</strong> The question or expectation the
                writer leaves the reader with.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Vocabulary */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <Type className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Vocabulary focus
          </h2>
        </div>
        <p className="mb-3 text-body-sm text-muted-foreground">
          Eight terms you should be comfortable using when you write about
          novel openings.
        </p>
        <div className="flex flex-wrap gap-2">
          {vocabulary.map((v) => (
            <Badge key={v} variant="secondary" className="text-sm">
              {v}
            </Badge>
          ))}
        </div>
      </section>

      {/* Self-assessment */}
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

      {/* Footer nav */}
      <div className="flex justify-between border-t border-border pt-6">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading" />}
        >
          <ArrowLeft className="size-3.5" />
          All frameworks
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/cambridge/reading/descriptive-nature" />
          }
        >
          Next: Descriptive nature
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
