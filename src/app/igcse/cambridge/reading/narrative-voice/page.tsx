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
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Narrative Voice - Reading Practice Framework - The English Hub',
    description:
      'Cambridge IGCSE Paper 1 reading practice on first-person vs third-person narration. Comprehension, language analysis, summary and self-assessment with free Project Gutenberg texts.',
  },
  title: 'Narrative Voice - Reading Practice Framework',
  description:
    'Cambridge IGCSE Paper 1 reading practice on first-person vs third-person narration. Comprehension, language analysis, summary and self-assessment with free Project Gutenberg texts.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/reading/narrative-voice',
  },
}

const sources = [
  {
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    href: 'https://www.gutenberg.org/ebooks/120',
  },
  {
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    href: 'https://www.gutenberg.org/ebooks/219',
  },
  {
    title: 'Middlemarch',
    author: 'George Eliot',
    href: 'https://www.gutenberg.org/ebooks/145',
  },
]

const comprehension = [
  'Is the passage narrated in first person, third-person limited or third-person omniscient? Quote a pronoun or phrase that proves it.',
  'How close does the narrator feel to the main character? Back up your answer with one specific word choice.',
  'Find a moment where the narrator gives an opinion or judgement. What does this tell you about their voice?',
  'Does the narrator seem reliable? Is there any reason to doubt what they are telling us?',
  'Identify one thing only the main character can know (a feeling, a memory) and one thing only an outside viewer can know (a gesture, a sound). How does the narrator handle each?',
  'How would the passage feel different if it were told from another character’s point of view?',
]

const vocabulary = [
  'narrator',
  'first person',
  'third person',
  'omniscient',
  'limited',
  'reliable',
  'perspective',
  'voice',
]

const checklist = [
  'I named the narrative voice using correct terminology.',
  'I quoted at least two pronouns or phrases as evidence.',
  'I commented on reliability, not just presence.',
  'I explained how the voice shaped my reading of a character.',
  'My summary focused on point of view, not plot.',
  'I finished within 45 minutes.',
]

export default async function NarrativeVoicePage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  const gutenbergLabel = await t('igcse.page.reading.read_on_gutenberg')

  return (
    <div className="space-y-8 pb-16">
      <header className="space-y-4">
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/reading" />}>
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.reading.all_frameworks')}
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="mr-1 size-3" />
            {await t('igcse.cambridge.badge.cambridge_igcse')}
          </Badge>
          <Badge variant="secondary">{await t('igcse.page.reading.framework_badge')}</Badge>
          <Badge variant="secondary">{await t('igcse.cambridge.badge.paper_1')}</Badge>
        </div>
        <h1 className="text-display-sm font-heading text-foreground">Narrative Voice</h1>
        <p className="max-w-3xl text-body-lg text-muted-foreground">
          The narrator is not neutral. They choose what to show you and what to hide, what to praise
          and what to mock. Understanding point of view transforms how you read a passage and how
          well you can analyse it.
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
            Narrative voice passages sharpen your vocabulary for perspective, your eye for implicit
            judgement, and your ability to distinguish what is seen from who is seeing. Paper 1
            often asks candidates to write about the effect of a narrator’s voice.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Suggested practice texts</h2>
        </div>
        <p className="mb-4 text-body-sm text-muted-foreground">
          These three novels each take a different approach to narrative voice. Read a passage of
          around 700 words from whichever one interests you.
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
                  {gutenbergLabel}
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
              &ldquo;How does the writer use language to shape the reader’s trust in the
              narrator?&rdquo;
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Write roughly 150 words. Quote three phrases and comment on pronouns, judgements and
              any moment of doubt or confidence.
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
              Summarise the narrative voice in <strong>no more than 120 words</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sentence 1:</strong> The type of narration used.
              </li>
              <li>
                <strong>Sentence 2:</strong> How close the narrator feels to the main character.
              </li>
              <li>
                <strong>Sentences 3-4:</strong> Two specific traits of the narrator’s voice.
              </li>
              <li>
                <strong>Sentence 5:</strong> The effect of the chosen perspective on the reader.
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
          Eight terms you should be fluent in when writing about narrative voice.
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
          render={<Link href="/igcse/cambridge/reading/setting-atmosphere" />}
        >
          <ArrowLeft className="size-3.5" />
          Setting and atmosphere
        </Button>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading/victorian-fiction" />}
        >
          Next: Victorian fiction
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
