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
    'Setting and Atmosphere — Reading Practice Framework — The English Hub',
  description:
    'Cambridge IGCSE Paper 1 reading practice on setting and atmosphere. Comprehension, language analysis, summary and self-assessment using free Project Gutenberg texts.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/reading/setting-atmosphere',
  },
}

const sources = [
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    href: 'https://www.gutenberg.org/ebooks/345',
  },
  {
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    href: 'https://www.gutenberg.org/ebooks/2852',
  },
  {
    title: 'The Turn of the Screw',
    author: 'Henry James',
    href: 'https://www.gutenberg.org/ebooks/209',
  },
]

const comprehension = [
  'Where is the scene set, and what time of day or year is it? Quote two short details as evidence.',
  'Which single word in the passage most strongly establishes the atmosphere? Why is it effective?',
  'Find a moment where the weather or light mirrors a character’s emotion. What is that emotion?',
  'Where does the writer use the sense of hearing to build atmosphere? What effect does the sound have?',
  'Identify a contrast between two parts of the setting (inside and outside, near and far, calm and wild). How does the contrast sharpen the mood?',
  'How does the writer make the setting feel unfamiliar or unsettling? Quote one phrase and explain the choice.',
]

const vocabulary = [
  'atmosphere',
  'mood',
  'setting',
  'foreboding',
  'ominous',
  'imagery',
  'pathetic fallacy',
  'tension',
]

const checklist = [
  'I quoted at least three short phrases in my analysis.',
  'I explained how each quotation built mood.',
  'I used the word atmosphere or mood correctly.',
  'I referred to at least two different senses.',
  'My summary clearly stated the overall mood of the setting.',
  'I finished within 45 minutes.',
]

export default function SettingAtmospherePage() {
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
          Setting and Atmosphere
        </h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          Atmosphere is the feeling a place presses into the reader. Writers
          build it from weather, light, sound, scale and pace. This
          framework trains you to identify those building blocks and write
          about their combined effect.
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
            Setting passages test your reading of imagery, your sensitivity
            to mood, and your ability to comment on how a scene is put
            together. These are the exact moves Paper 1 rewards in language
            analysis questions.
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
          Gothic and mystery novels are rich in atmosphere. Each of these
          texts contains early chapters that lean heavily on setting.
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
              &ldquo;How does the writer use language to create a sense of
              unease and atmosphere in this setting?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write a paragraph of roughly 150 words. Quote three specific
              phrases and comment on imagery, sound and sentence length.
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
              Summarise the setting and its atmosphere in{' '}
              <strong>no more than 120 words</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> The location and time.
              </li>
              <li>
                <strong>Sentence 2:</strong> The dominant mood.
              </li>
              <li>
                <strong>Sentences 3–4:</strong> Two concrete details that
                create that mood.
              </li>
              <li>
                <strong>Sentence 5:</strong> How the setting makes the
                reader feel.
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
          Eight terms to use when writing about setting and atmosphere.
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
            <Link href="/igcse/cambridge/reading/dialogue-analysis" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Dialogue analysis
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/narrative-voice" />}
        >
          Next: Narrative voice
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
