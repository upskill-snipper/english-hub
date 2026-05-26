import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SET_TEXTS } from '@/lib/board/set-texts'

export const metadata: Metadata = {
  openGraph: {
    title: 'Pearson IGCSE Poetry Anthology (4EA1) - Section B - The English Hub',
    description:
      'All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.',
  },
  title: 'Pearson IGCSE Poetry Anthology (4EA1) - Section B',
  description:
    'All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/pearson-igcse',
  },
}

export default function PearsonIgcsePoetryHub() {
  const poems = SET_TEXTS.filter(
    (t) => t.category === 'poetry-anthology' && t.boards.includes('edexcel-igcse-lang'),
  )

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumb
        items={[
          { label: 'Revision', href: '/revision' },
          { label: 'Poetry', href: '/revision/poetry' },
          { label: 'Pearson IGCSE (4EA1)' },
        ]}
      />

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/poetry" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Poetry Hub
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Section B
            </Badge>
            <Badge variant="secondary">{poems.length} poems</Badge>
            <Badge variant="secondary">4EA1</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Pearson IGCSE Poetry Anthology
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A
            (4EA1) Section B anthology. Full study guides are in production. Each poem currently has
            a registry entry, themes and a one-paragraph teaser; line-by-line analysis and
            exam-style practice questions are being added.
          </p>
        </div>
      </section>

      {/* ── Anthology version disclaimer ────────────────────────────── */}
      <section
        aria-label="Anthology version notice"
        className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-5 text-body-sm text-card-foreground"
      >
        <p className="mb-2">
          <strong className="text-foreground">Anthology version:</strong> This site teaches the{' '}
          <strong className="text-foreground">Edexcel IGCSE Anthology Issue 2</strong> (ISBN
          978-1-446-93108-0, Pearson Education). Material differences from Issue 1 and from
          freely-available online versions include:
        </p>
        <ol className="mb-2 list-decimal space-y-1 pl-5 text-muted-foreground">
          <li>
            <em>Half-Caste</em> uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not
            &lsquo;you&rsquo;);
          </li>
          <li>
            <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
            Harrison&rsquo;s original <em>Guardian</em> publication;
          </li>
          <li>
            the adapted non-fiction texts (&lsquo;Explorers or boys messing about?&rsquo; and
            &lsquo;Young and dyslexic?&rsquo;) differ from their online originals - always use the
            anthology version when answering Edexcel questions.
          </li>
        </ol>
        <p className="text-body-xs text-muted-foreground">
          © Pearson Education - quotations on individual set-text pages are short fair-dealing
          extracts under CDPA s.30. The full anthology is available only through Pearson&rsquo;s
          school-licensed editions.
        </p>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-700" />
          <h2 className="text-heading-lg font-heading text-foreground">All 15 anthology poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <Card
              key={poem.slug}
              className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-heading-sm font-heading leading-tight">
                  {poem.title}
                </CardTitle>
                <CardDescription className="pt-1">
                  {poem.author}
                  {poem.year ? ` - ${poem.year}` : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                {poem.keyThemes && poem.keyThemes.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {poem.keyThemes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    render={<Link href={`/revision/poetry/pearson-igcse/${poem.slug}`} />}
                  >
                    Open study notes
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
