import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { t } from '@/lib/i18n/t'
import { ANTHOLOGY_SOURCE } from '@/lib/board/edexcel-igcse-anthology'

export const metadata: Metadata = {
  openGraph: {
    title: 'Pearson IGCSE Poetry Anthology (4EA1) - Section B',
    description:
      'All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.',
    images: [
      {
        url: '/api/og?title=Pearson+IGCSE+Poetry+Anthology+(4EA1)+-+Section+B',
        width: 1200,
        height: 630,
        alt: 'Pearson IGCSE Poetry Anthology (4EA1) - Section B',
      },
    ],
  },
  title: 'Pearson IGCSE Poetry Anthology (4EA1) - Section B',
  description:
    'All 15 prescribed poems for the Pearson Edexcel International GCSE English Language A (4EA1) Section B poetry anthology.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/pearson-igcse',
  },
}

export default async function PearsonIgcsePoetryHub() {
  const poems = SET_TEXTS.filter(
    (st) => st.category === 'poetry-anthology' && st.boards.includes('edexcel-igcse-lang'),
  )
  const openNotesLabel = await t('rev.poetry2.pearson.open_notes')

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
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href="/revision/poetry" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.poetry2.pearson.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="me-1 size-3" />
              {await t('rev.poetry2.pearson.badge_section_b')}
            </Badge>
            <Badge variant="secondary">
              {poems.length} {await t('rev.poetry2.pearson.poems')}
            </Badge>
            <Badge variant="secondary">4EA1</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.poetry2.pearson.hero_title')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {await t('rev.poetry2.pearson.hero_lead')}
          </p>
        </div>
      </section>

      {/* ── Anthology version disclaimer ────────────────────────────── */}
      <section
        aria-label={await t('rev.poetry2.pearson.version_notice_aria')}
        className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-5 text-body-sm text-card-foreground"
      >
        {/* Until 26 September 2026 this notice named Issue 2 and said the full
            anthology was available only through Pearson's school-licensed
            editions. The current issue is 8 (February 2026), and Pearson
            publishes it free as a PDF, so no licensed copy is needed. */}
        <p className="mb-2">
          <strong className="text-foreground">Anthology version:</strong> This site teaches{' '}
          <strong className="text-foreground">
            Issue 8 (February 2026) of the Pearson Edexcel International GCSE English Anthology
          </strong>{' '}
          (ISBN 978-1-446-93108-0). Material differences from freely-available online versions
          include:
        </p>
        <ol className="mb-2 list-decimal space-y-1 ps-5 text-muted-foreground">
          <li>
            <em>Half-Caste</em> uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not
            &lsquo;you&rsquo;);
          </li>
          <li>
            <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
            Harrison&rsquo;s original <em>Guardian</em> publication;
          </li>
          <li>
            {/* Until 10 October 2026 this said Young and dyslexic? also differs from
                its online original. The anthology says only that it prints the article
                The Guardian published, itself adapted from a book (Issue 8, page 12). */}
            the adapted non-fiction text &lsquo;Explorers or boys messing about?&rsquo; differs from
            the <em>Guardian</em> article it was adapted from - always use the anthology version
            when answering Edexcel questions.
          </li>
        </ol>
        <p className="text-body-xs text-muted-foreground">
          Anthology © Pearson Education Limited 2026 - quotations on individual set-text pages are
          short fair-dealing extracts under CDPA s.30. Pearson publishes the full anthology free as
          a{' '}
          <a
            href={ANTHOLOGY_SOURCE.url}
            className="underline underline-offset-2 hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            PDF on its qualifications website
          </a>
          .
        </p>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-700" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.poetry2.pearson.all_poems')}
          </h2>
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
                    {poem.keyThemes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {theme}
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
                    {openNotesLabel}
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
