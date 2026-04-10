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
    'Character Introductions — Reading Practice Framework — The English Hub',
  description:
    'Cambridge IGCSE Paper 1 reading practice on character introductions. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/character-introductions',
  },
}

const sources = [
  {
    title: 'David Copperfield',
    author: 'Charles Dickens',
    href: 'https://www.gutenberg.org/ebooks/766',
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    href: 'https://www.gutenberg.org/ebooks/158',
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    href: 'https://www.gutenberg.org/ebooks/74',
  },
]

const comprehension = [
  'What is the first physical detail the writer gives you about the character? Why do you think they chose to start with this detail rather than another?',
  'Find a phrase that hints at the character’s social class, age or background without stating it directly.',
  'What action does the character perform in the passage, and what does this action reveal about their personality?',
  'Pick out one thing the character says or thinks. How does the writer use this to shape your opinion of them?',
  'Does the narrator seem to like, dislike or be neutral about this character? Quote a single word that gives their attitude away.',
  'Identify one thing the writer deliberately leaves unclear about the character. Why might they hold that detail back?',
]

const vocabulary = [
  'characterisation',
  'inference',
  'appearance',
  'dialogue',
  'attitude',
  'personality',
  'impression',
  'motivation',
]

const checklist = [
  'I quoted small, precise phrases rather than full sentences.',
  'I made at least two inferences about the character.',
  'I commented on the writer’s choice of words, not just the meaning.',
  'I used one technical term from the vocabulary list.',
  'My summary focused on the character, not the plot.',
  'I finished within 45 minutes.',
]

export default async function CharacterIntroductionsPage() {
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
          Character Introductions
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          The first time a writer introduces a character is your richest
          source of inference. Every detail — their hands, their silence,
          their first word — is a deliberate choice. This framework trains
          you to read those choices closely and explain their effect.
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
            Character introductions test inference: reading between the lines
            to build an opinion of a person from small clues. They also train
            you to comment on the writer’s craft — word choice, sentence
            structure and perspective. These are the central skills Paper 1
            rewards.
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
          Each of these novels opens with, or features early on, a memorable
          character introduction. Read around 600 to 900 words.
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
              &ldquo;How does the writer use language to create a vivid first
              impression of this character?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write roughly 150 words. Quote three short phrases covering
              appearance, action and speech, and comment on the effect of
              each.
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
              Summarise what the reader learns about the character in{' '}
              <strong>no more than 120 words</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> The character’s name, age and
                situation.
              </li>
              <li>
                <strong>Sentence 2:</strong> A key physical or behavioural
                detail.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two personality traits you
                can infer from the passage.
              </li>
              <li>
                <strong>Sentence 5:</strong> Your overall impression of the
                character.
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
          Eight terms to use when writing about character introductions.
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
          render={
            <Link href="/igcse/cambridge/reading/descriptive-nature" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Descriptive nature
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/cambridge/reading/dialogue-analysis" />
          }
        >
          Next: Dialogue analysis
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
