import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_SKILLS,
  YEAR9_CODES,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import {
  WORD_CLASSES,
  SENTENCE_TYPES,
  PUNCTUATION,
  SPELLING_TRAPS,
  SELF_TEST,
} from '@/data/ilowersecondary/grammar-lab'
import type { SelfTestKind } from '@/data/ilowersecondary/grammar-lab'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/grammar-lab'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grammar lab — iLowerSecondary English (LEH11)',
    description:
      'A complete grammar, punctuation and spelling skill-builder for LEH11: word classes, sentence types, punctuation rules, UK spelling traps and a self-test.',
  },
  title: 'Grammar lab — iLowerSecondary English (LEH11)',
  description:
    'A complete grammar, punctuation and spelling skill-builder for LEH11: word classes, sentence types, punctuation rules, UK spelling traps and a self-test.',
  alternates: { canonical: PAGE_URL },
}

const TEST_KIND_LABEL: Record<SelfTestKind, string> = {
  'identify-class': 'Identify the word class',
  'fix-punctuation': 'Fix the punctuation',
  'correct-spelling': 'Correct the spelling',
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
      {children}
    </p>
  )
}

export default async function GrammarLabPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Grammar lab', url: PAGE_URL },
  ]

  const writingSkill23 = WRITING_SKILLS.find((s) => s.code === '2.3')
  const wao2 = ASSESSMENT_OBJECTIVES.WAO2
  const rao4 = ASSESSMENT_OBJECTIVES.RAO4
  const grammarTermCode = YEAR9_CODES.find((c) => c.code === 'W9.3J')

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>Grammar lab</span>
      </p>

      <h1>Grammar lab</h1>
      <p className="lead">
        A complete grammar, punctuation and spelling skill-builder for the LEH11 achievement test.
        Precise definitions, original examples and a self-test to sharpen accuracy in your own
        writing and to read writers&rsquo; choices closely.
      </p>

      {/* ── Why this matters ────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Why this matters</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <SectionLabel>For your writing</SectionLabel>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-mono text-primary">{wao2.code}</span> ({wao2.weightPct}% of the
              qualification): {wao2.descriptor}
            </p>
            {writingSkill23 && (
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {writingSkill23.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <SectionLabel>For your reading</SectionLabel>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-mono text-primary">{rao4.code}</span> ({rao4.weightPct}% of the
              qualification): {rao4.descriptor}
            </p>
            {grammarTermCode && (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                <span className="font-mono text-primary">{grammarTermCode.code}</span> —{' '}
                {grammarTermCode.descriptor}
              </p>
            )}
          </div>
        </div>
        <nav className="not-prose mt-4 flex flex-wrap gap-2 text-sm">
          {[
            ['#word-classes', 'Word classes'],
            ['#sentence-types', 'Sentence types'],
            ['#punctuation', 'Punctuation'],
            ['#spelling', 'Spelling traps'],
            ['#self-test', 'Self-test'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-md border border-border/60 px-3 py-1 font-mono text-[11px] text-primary hover:bg-card"
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* ── Word classes ────────────────────────────────────────────── */}
      <section id="word-classes" className="my-10 scroll-mt-24">
        <h2>Word classes</h2>
        <p className="text-sm text-muted-foreground">
          Every word in English belongs to a word class. Naming them precisely is the foundation of
          analysing a writer&rsquo;s choices and controlling your own sentences.
        </p>
        <div className="not-prose mt-4 space-y-5">
          {WORD_CLASSES.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="scroll-mt-24 rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{group.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{group.summary}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {group.entries.map((entry) => (
                  <div
                    key={entry.id}
                    id={entry.id}
                    className="scroll-mt-24 rounded-lg border border-border/60 p-4"
                  >
                    <p className="text-sm font-semibold text-foreground">{entry.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {entry.definition}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground">
                      {entry.examples.map((ex) => (
                        <li key={ex} className="flex gap-2">
                          <span className="text-primary" aria-hidden>
                            ›
                          </span>
                          <span className="italic leading-relaxed">{ex}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {entry.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sentence types ──────────────────────────────────────────── */}
      <section id="sentence-types" className="my-10 scroll-mt-24">
        <h2>Sentence types</h2>
        <p className="text-sm text-muted-foreground">
          Varying your sentence types — and recognising them in unseen texts — is rewarded across
          both the reading and writing marks.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {SENTENCE_TYPES.map((type) => (
            <div
              key={type.id}
              id={type.id}
              className="scroll-mt-24 rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{type.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {type.definition}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-foreground">
                {type.examples.map((ex) => (
                  <li key={ex} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ›
                    </span>
                    <span className="italic leading-relaxed">{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                When to use
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{type.whenToUse}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Punctuation ─────────────────────────────────────────────── */}
      <section id="punctuation" className="my-10 scroll-mt-24">
        <h2>Punctuation</h2>
        <p className="text-sm text-muted-foreground">
          The spec names five marks you must use with accuracy and confidence (flagged below). The
          remaining marks lift accurate writing to a more sophisticated level.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {PUNCTUATION.map((mark) => (
            <div
              key={mark.id}
              id={mark.id}
              className="scroll-mt-24 rounded-xl border border-border/60 bg-card p-5"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold text-foreground">{mark.name}</h3>
                {mark.specNamed && (
                  <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
                    Spec-named
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{mark.rule}</p>
              <p className="mt-2 text-sm text-foreground italic leading-relaxed">
                <span className="text-primary not-italic" aria-hidden>
                  ›{' '}
                </span>
                {mark.example}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Common error:{' '}
                </span>
                {mark.commonError}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spelling traps ──────────────────────────────────────────── */}
      <section id="spelling" className="my-10 scroll-mt-24">
        <h2>UK spelling traps</h2>
        <p className="text-sm text-muted-foreground">
          Thirty words that regularly cost marks. Spellings follow UK English conventions; learn the
          memory tip, then test yourself.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Word
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Why it&rsquo;s tricky
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Memory tip
                </th>
              </tr>
            </thead>
            <tbody>
              {SPELLING_TRAPS.map((trap) => (
                <tr key={trap.word} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{trap.word}</td>
                  <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                    {trap.whyTricky}
                  </td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">{trap.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Self-test ───────────────────────────────────────────────── */}
      <section id="self-test" className="my-10 scroll-mt-24">
        <h2>Self-test</h2>
        <p className="text-sm text-muted-foreground">
          Twenty mixed questions. Decide your answer first, then open the reveal to check it.
        </p>
        <div className="not-prose mt-4 space-y-2">
          {SELF_TEST.map((item) => (
            <details key={item.id} className="group rounded-xl border border-border/60 bg-card p-4">
              <summary className="cursor-pointer list-none">
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">Q{item.id}</span>
                  <span className="flex-1 text-sm text-foreground leading-relaxed">
                    {item.prompt}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground group-open:hidden">
                    Reveal
                  </span>
                </span>
                <span className="mt-1 block font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  {TEST_KIND_LABEL[item.kind]}
                </span>
              </summary>
              <p className="mt-3 border-t border-border/60 pt-3 text-sm text-muted-foreground leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
                  Answer:{' '}
                </span>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
