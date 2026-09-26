import Link from 'next/link'
import {
  BookMarked,
  BookOpen,
  FileText,
  GitCompare,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  PenLine,
  Quote,
  ScrollText,
  Target,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { t } from '@/lib/i18n/t'
import type { SectionKey, StudyGuide } from '@/lib/study-guides/types'
import { sectionsPresent } from '@/lib/study-guides/sections'
import { quotedTotals } from '@/lib/study-guides/validate'
import { limitsFor } from '@/lib/study-guides/fair-dealing'
import type { GuideExtract } from '@/lib/study-guides/types'
import { ReadTheText } from './read-the-text'

/**
 * The passage with each annotated phrase marked and numbered, in order of
 * appearance. A phrase that appears twice is marked once, at its first
 * occurrence, which is the one the note is about.
 */
function markedPassage(extract: GuideExtract) {
  const text = extract.text ?? ''
  const hits = extract.annotations
    .map((a, i) => ({
      i,
      at: text.toLowerCase().indexOf(a.phrase.toLowerCase()),
      len: a.phrase.length,
    }))
    .filter((h) => h.at >= 0)
    .sort((a, b) => a.at - b.at)
  const parts: (string | { text: string; n: number })[] = []
  let cursor = 0
  for (const h of hits) {
    if (h.at < cursor) continue
    parts.push(text.slice(cursor, h.at))
    parts.push({ text: text.slice(h.at, h.at + h.len), n: h.i + 1 })
    cursor = h.at + h.len
  }
  parts.push(text.slice(cursor))
  return parts
}

/**
 * The shared study-guide sections, rendered from one StudyGuide.
 *
 * Two uses. On a text that had no guide, it is the guide: every section, with
 * h2 headings. On a text whose existing page lacked some sections, it is a
 * supplement mounted on that page, `supplement` set, rendering only what the
 * guide file holds under a single h2 so the page's own outline is not broken.
 *
 * A SERVER COMPONENT ON PURPOSE. The poem-analysis pages lost 76,706 words from
 * their HTML in September 2026 because the analysis was mounted client-side
 * behind a tab and never reached a crawler. Nothing here is behind a toggle.
 */

const ICON: Record<SectionKey, typeof BookOpen> = {
  overview: BookOpen,
  context: Landmark,
  themes: Lightbulb,
  characters: Users,
  keyQuotes: Quote,
  extracts: FileText,
  languageAnalysis: PenLine,
  structureForm: Layers,
  vocabulary: BookMarked,
  examPractice: Target,
  modelAnswer: GraduationCap,
}

type Props = {
  guide: StudyGuide
  /** Render only these, in reading order. Default: every section the guide holds. */
  only?: readonly SectionKey[]
  /** Mounted under an existing page's own content rather than being the page. */
  supplement?: boolean
}

export async function StudyGuideSections({ guide, only, supplement = false }: Props) {
  const keys = sectionsPresent(guide).filter((k) => !only || only.includes(k))
  if (keys.length === 0) return null

  const Heading = supplement ? 'h3' : 'h2'
  const labels = Object.fromEntries(
    await Promise.all(keys.map(async (k) => [k, await t(`study_guide.section.${k}`)] as const)),
  ) as Record<SectionKey, string>

  const [
    navLabel,
    supplementHeading,
    supplementIntro,
    exampleLabel,
    effectLabel,
    howToAnswer,
    tipsLabel,
    questionLabel,
    whyItWorks,
    compareLabel,
    rightsLine,
    quotedLine,
    findItLabel,
  ] = await Promise.all([
    t('study_guide.nav_label'),
    t('study_guide.supplement_heading'),
    t('study_guide.supplement_intro'),
    t('study_guide.technique.example'),
    t('study_guide.technique.effect'),
    t('study_guide.exam.how_to_answer'),
    t('study_guide.exam.tips'),
    t('study_guide.model.question_label'),
    t('study_guide.model.why_it_works'),
    t('study_guide.section.compareWith'),
    t(
      guide.rights.status === 'copyright'
        ? 'study_guide.rights.fair_dealing'
        : 'study_guide.rights.public_domain',
    ),
    t('study_guide.rights.quoted_total'),
    t('study_guide.extract.find_it'),
  ])

  const id = (k: SectionKey | 'compare') => `guide-${guide.slug}-${k}`

  function SectionHead({ k }: { k: SectionKey }) {
    const Icon = ICON[k]
    return (
      <div className="mb-5 flex items-center gap-3">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <Heading id={id(k)} className="font-heading text-heading-lg text-foreground">
          {labels[k]}
        </Heading>
      </div>
    )
  }

  return (
    <div className="space-y-12" data-study-guide={guide.slug}>
      {supplement && (
        <div>
          <h2 className="font-heading text-heading-lg text-foreground">{supplementHeading}</h2>
          <p className="mt-1 text-body-sm text-muted-foreground">{supplementIntro}</p>
        </div>
      )}

      {keys.length >= 3 && (
        <nav aria-label={navLabel} className="rounded-xl border border-border/60 bg-card p-4">
          <p className="mb-2 text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {navLabel}
          </p>
          <ul className="flex flex-wrap gap-2">
            {keys.map((k) => (
              <li key={k}>
                <a
                  href={`#${id(k)}`}
                  className="inline-block rounded-full bg-muted px-3 py-1 text-body-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  {labels[k]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <ReadTheText slug={guide.slug} />

      {keys.includes('overview') && guide.overview && (
        <section aria-labelledby={id('overview')}>
          <SectionHead k="overview" />
          <Card>
            <CardContent className="space-y-4 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
              {guide.overview.summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {keys.includes('context') && guide.context && (
        <section aria-labelledby={id('context')}>
          <SectionHead k="context" />
          <div className="grid gap-4 sm:grid-cols-2">
            {guide.context.map((c) => (
              <Card key={c.heading}>
                <CardHeader>
                  <CardTitle className="font-heading text-heading-sm">{c.heading}</CardTitle>
                </CardHeader>
                <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {keys.includes('themes') && guide.themes && (
        <section aria-labelledby={id('themes')}>
          <SectionHead k="themes" />
          <Card>
            <CardContent className="space-y-6 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
              {guide.themes.map((th) => (
                <div key={th.title}>
                  <p className="mb-1 font-semibold text-foreground">{th.title}</p>
                  <p>{th.body}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {keys.includes('characters') && guide.characters && (
        <section aria-labelledby={id('characters')}>
          <SectionHead k="characters" />
          <div className="grid gap-4 sm:grid-cols-2">
            {guide.characters.map((c) => (
              <Card key={c.name}>
                <CardHeader>
                  <CardTitle className="font-heading text-heading-sm">{c.name}</CardTitle>
                  <CardDescription>{c.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {keys.includes('keyQuotes') && guide.keyQuotes && (
        <section aria-labelledby={id('keyQuotes')}>
          <SectionHead k="keyQuotes" />
          {guide.quoteNote && (
            <p className="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.05] p-4 text-body-sm leading-relaxed text-muted-foreground">
              {guide.quoteNote}
            </p>
          )}
          <ol className="space-y-4">
            {guide.keyQuotes.map((q) => (
              <li
                key={`${q.where}-${q.text}`}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <p className="font-heading text-body-lg italic leading-snug text-foreground">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="mt-1 text-body-xs font-medium text-muted-foreground">{q.where}</p>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                  {q.analysis}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {keys.includes('extracts') && guide.extracts && (
        <section aria-labelledby={id('extracts')}>
          <SectionHead k="extracts" />
          <div className="space-y-6">
            {guide.extracts.map((e) => (
              <Card key={`${e.where}-${e.title}`}>
                <CardHeader>
                  <CardTitle className="font-heading text-heading-sm">{e.title}</CardTitle>
                  <CardDescription>{e.where}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-body-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{findItLabel}: </span>
                    {e.pointer}
                  </p>
                  {/* The passage itself only for a public-domain text. For a
                      copyrighted one the guide points to it and paraphrases it:
                      see src/lib/study-guides/fair-dealing.ts. */}
                  {e.text ? (
                    <blockquote className="whitespace-pre-line rounded-xl border-s-4 border-primary/60 bg-muted/40 p-5 font-heading text-body-md leading-relaxed text-foreground">
                      {markedPassage(e).map((part, i) =>
                        typeof part === 'string' ? (
                          <span key={i}>{part.split(' / ').join('\n')}</span>
                        ) : (
                          <mark key={i} className="rounded bg-primary/15 px-0.5 text-foreground">
                            {part.text.split(' / ').join('\n')}
                            <sup className="ms-0.5 font-sans text-[10px] font-bold text-primary">
                              {part.n}
                            </sup>
                          </mark>
                        ),
                      )}
                    </blockquote>
                  ) : (
                    <p className="rounded-xl border-s-4 border-primary/60 bg-muted/40 p-5 text-body-sm leading-relaxed text-foreground/90">
                      {e.summary}
                    </p>
                  )}
                  <ol className="space-y-2 text-body-sm leading-relaxed text-muted-foreground">
                    {e.annotations.map((a, i) => (
                      <li key={a.phrase} className="flex gap-3">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                          {i + 1}
                        </span>
                        <span>
                          <span className="font-semibold text-foreground">
                            &ldquo;{a.phrase}&rdquo;
                          </span>{' '}
                          {a.note}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="rounded-lg bg-emerald-500/[0.06] p-3 text-body-sm text-foreground">
                    <span className="font-semibold">{questionLabel}: </span>
                    {e.question}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {keys.includes('languageAnalysis') && guide.languageAnalysis && (
        <section aria-labelledby={id('languageAnalysis')}>
          <SectionHead k="languageAnalysis" />
          <div className="grid gap-4 sm:grid-cols-2">
            {guide.languageAnalysis.map((l) => (
              <Card key={l.technique}>
                <CardHeader>
                  <CardTitle className="font-heading text-heading-sm">{l.technique}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm leading-relaxed text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">{exampleLabel}: </span>
                    {l.example}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">{effectLabel}: </span>
                    {l.effect}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {keys.includes('structureForm') && guide.structureForm && (
        <section aria-labelledby={id('structureForm')}>
          <SectionHead k="structureForm" />
          <Card>
            <CardContent className="space-y-6 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
              {guide.structureForm.map((s) => (
                <div key={s.heading}>
                  <p className="mb-1 font-semibold text-foreground">{s.heading}</p>
                  <p>{s.body}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {keys.includes('vocabulary') && guide.vocabulary && (
        <section aria-labelledby={id('vocabulary')}>
          <SectionHead k="vocabulary" />
          <Card>
            <CardContent className="p-6 sm:p-8">
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {guide.vocabulary.map((v) => (
                  <div key={v.term}>
                    <dt className="font-semibold text-foreground">{v.term}</dt>
                    <dd className="text-body-sm leading-relaxed text-muted-foreground">
                      {v.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </section>
      )}

      {keys.includes('examPractice') && guide.examPractice && (
        <section aria-labelledby={id('examPractice')}>
          <SectionHead k="examPractice" />
          <div className="space-y-4">
            {guide.examPractice.questions.map((q) => (
              <Card key={q.question}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {q.skill}
                  </Badge>
                  <CardTitle className="font-heading text-heading-sm leading-snug">
                    {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                  <p className="mb-2 font-semibold text-foreground">{howToAnswer}</p>
                  <ol className="list-decimal space-y-1.5 ps-5">
                    {q.guidance.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
            {guide.examPractice.tips.length > 0 && (
              <Card className="border-emerald-500/30 bg-emerald-500/[0.04]">
                <CardHeader>
                  <CardTitle className="font-heading text-heading-sm">{tipsLabel}</CardTitle>
                </CardHeader>
                <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                  <ul className="list-disc space-y-1.5 ps-5">
                    {guide.examPractice.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {keys.includes('modelAnswer') && guide.modelAnswer && (
        <section aria-labelledby={id('modelAnswer')}>
          <SectionHead k="modelAnswer" />
          <Card>
            <CardContent className="space-y-5 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
              <p>
                <span className="font-semibold text-foreground">{questionLabel}: </span>
                {guide.modelAnswer.question}
              </p>
              <blockquote className="border-s-4 border-primary/50 ps-4 text-foreground/90">
                {guide.modelAnswer.paragraph}
              </blockquote>
              <div>
                <p className="mb-2 font-semibold text-foreground">{whyItWorks}</p>
                <ul className="list-disc space-y-1.5 ps-5">
                  {guide.modelAnswer.commentary.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {!only && guide.compareWith && guide.compareWith.length > 0 && (
        <section aria-labelledby={id('compare')}>
          <div className="mb-5 flex items-center gap-3">
            <GitCompare className="size-5 text-primary" aria-hidden="true" />
            <Heading id={id('compare')} className="font-heading text-heading-lg text-foreground">
              {compareLabel}
            </Heading>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {guide.compareWith.map((c) => {
              const body = (
                <>
                  <p className="font-heading text-heading-sm text-foreground">{c.title}</p>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">
                    {c.reason}
                  </p>
                </>
              )
              return c.href ? (
                <Link
                  key={c.title}
                  href={c.href}
                  className="block rounded-xl border border-border/60 bg-card p-5 transition hover:border-primary/50"
                >
                  {body}
                </Link>
              ) : (
                <div key={c.title} className="rounded-xl border border-border/60 bg-card p-5">
                  {body}
                </div>
              )
            })}
          </div>
        </section>
      )}

      <footer className="flex items-start gap-2 border-t border-border/60 pt-4 text-body-xs leading-relaxed text-muted-foreground">
        <ScrollText className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <p>
          {guide.rights.acknowledgement} {rightsLine}
          {guide.rights.status === 'copyright' && (
            <>
              {' '}
              {/* Computed from the guide, so it cannot drift from what the page
                  shows. The older pages printed "each quote is 15 words or
                  fewer" above quotations of up to 46 words. */}
              {quotedLine
                .replace('{total}', String(quotedTotals(guide).words))
                .replace('{max}', String(limitsFor(guide.form, guide.workLength).quoteWords))}
            </>
          )}
        </p>
      </footer>
    </div>
  )
}
