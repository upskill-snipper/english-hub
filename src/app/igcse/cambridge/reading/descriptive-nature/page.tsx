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
    title: 'Descriptive Nature Passages — Reading Practice Framework — The English Hub',
    description:
      'Cambridge IGCSE Paper 1 reading practice on descriptive nature passages. Structured comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  },
  title: 'Descriptive Nature Passages — Reading Practice Framework',
  description:
    'Cambridge IGCSE Paper 1 reading practice on descriptive nature passages. Structured comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/reading/descriptive-nature',
  },
}

const sources = [
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    href: 'https://www.gutenberg.org/ebooks/113',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    href: 'https://www.gutenberg.org/ebooks/768',
  },
  {
    title: 'The Call of the Wild',
    author: 'Jack London',
    href: 'https://www.gutenberg.org/ebooks/215',
  },
]

const comprehension = [
  'Which of the five senses does the writer draw on most strongly in this passage? Quote a short phrase for each sense you notice.',
  'Pick out one verb that makes a part of the landscape feel alive. Why is it more effective than a plainer verb?',
  'Identify a colour or weather detail that changes during the passage. What does the change suggest about mood?',
  'Where does the writer zoom in on a small detail? What does this close attention tell you about the narrator’s feelings?',
  'Find a simile or metaphor and explain what two things are being compared and why the comparison works.',
  'Is the landscape described as welcoming, threatening, or something in between? Back up your view with two pieces of evidence.',
]

const vocabulary = [
  'imagery',
  'personification',
  'simile',
  'metaphor',
  'sensory',
  'pathetic fallacy',
  'mood',
  'diction',
]

const checklist = [
  'I identified at least two different senses in my answers.',
  'I used quotation marks around every phrase I borrowed.',
  'I explained the effect of each quotation, not just what it meant.',
  'I used the term imagery or sensory at least once, correctly.',
  'My summary was under 120 words and in my own language.',
  'I worked within a 45 minute time limit.',
]

export default async function DescriptiveNaturePage() {
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
        <h1 className="text-display-sm font-heading text-foreground">
          Descriptive Nature Passages
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Nature writing is a playground for sensory language. The writer has to turn leaves, light,
          weather and silence into something you can feel. This framework trains you to track
          imagery, comment on the effect of verbs and colour, and see how landscape shapes mood.
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
            Nature passages test your ability to read imagery closely, to comment on the effect of
            verbs and adjectives, and to recognise how a landscape mirrors or shapes feeling. These
            are core skills for Paper 1 language analysis questions.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Suggested practice texts</h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          Any of these three novels contain rich descriptive nature passages. Dip into a chapter
          where the setting dominates and read roughly 700 words.
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
              &ldquo;How does the writer use language to create a vivid sense of the natural world
              and its mood?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write a paragraph of roughly 150 words. Quote three specific phrases and comment on
              verbs, imagery and sound patterning.
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
              Summarise the passage in <strong>no more than 120 words</strong>. Use your own
              language throughout.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> Where the scene takes place and the time of day or
                season.
              </li>
              <li>
                <strong>Sentence 2:</strong> The dominant sense the writer uses and one key image.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two details that define the mood of the place.
              </li>
              <li>
                <strong>Sentence 5:</strong> The overall feeling the scene leaves the reader with.
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
          Eight terms to use when writing about descriptive nature passages.
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
          render={<Link href="/igcse/cambridge/reading/classic-novel-openings" />}
        >
          <ArrowLeft className="size-3.5" />
          Classic novel openings
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/character-introductions" />}
        >
          Next: Character introductions
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
