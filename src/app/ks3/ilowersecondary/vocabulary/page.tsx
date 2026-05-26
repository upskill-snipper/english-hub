import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { WRITING_SKILLS, YEAR9_CODES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'
import {
  VOCABULARY_THEMES,
  CROSS_CUTTING_THEMES,
  ANALYTICAL_VERBS,
  UPGRADE_TABLE,
} from '@/data/ilowersecondary/vocabulary'
import type { VocabularyTheme, VocabularyWord } from '@/data/ilowersecondary/vocabulary'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/vocabulary'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English vocabulary builder',
    description:
      'A precise vocabulary builder for Pearson iLowerSecondary English (LEH11): themed word banks for Survival, Journeys, the Natural World, Courage, Change and Discovery, an analytical-verb bank and a weak-to-precise upgrade table.',
  },
  title: 'iLowerSecondary English vocabulary builder',
  description:
    'A precise vocabulary builder for Pearson iLowerSecondary English (LEH11): themed word banks for Survival, Journeys, the Natural World, Courage, Change and Discovery, an analytical-verb bank and a weak-to-precise upgrade table.',
  alternates: { canonical: PAGE_URL },
}

// The 2.3 writing skill is the one that names vocabulary explicitly; W9.3G is
// the Year 9 objective that maps to vocabulary for effect. Pulled from the
// canonical spec module so a correction there propagates here.
const VOCAB_SKILL = WRITING_SKILLS.find((s) => s.code === '2.3')
const VOCAB_CODE = YEAR9_CODES.find((c) => c.code === 'W9.3G')

const ALL_THEMES: VocabularyTheme[] = [...VOCABULARY_THEMES, ...CROSS_CUTTING_THEMES]

function WordCard({ entry }: { entry: VocabularyWord }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-base font-semibold text-foreground">{entry.word}</h4>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
          {entry.partOfSpeech}
        </span>
      </div>
      <p className="mt-2 text-sm text-foreground leading-relaxed">{entry.definition}</p>
      <p className="mt-2 text-sm italic text-muted-foreground leading-relaxed">
        “{entry.exampleSentence}”
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entry.synonyms.map((syn) => (
          <span
            key={syn}
            className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary"
          >
            {syn}
          </span>
        ))}
      </div>
    </div>
  )
}

function ThemeSection({ theme }: { theme: VocabularyTheme }) {
  return (
    <section id={theme.id} className="my-10 scroll-mt-24">
      <h2>{theme.title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{theme.blurb}</p>
      <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {theme.words.map((entry) => (
          <WordCard key={entry.word} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export default async function VocabularyPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Vocabulary', url: PAGE_URL },
  ]

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
        <span>Vocabulary</span>
      </p>

      <h1>Vocabulary builder</h1>
      <p className="lead">
        Themed word banks for the topics that recur across the linked Section A and Section B texts
        on the iLowerSecondary English achievement test - built to make your reading answers sharper
        and your writing more ambitious.
      </p>

      {/* ── Why precise vocabulary scores ───────────────────────────── */}
      <section className="my-10">
        <h2 id="why-it-matters" className="scroll-mt-24">
          Why precise vocabulary scores
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Section B is marked on WAO1 (form, communication and purpose) and WAO2 (grammar,
          punctuation and spelling). The highest WAO1 bands reward stylistic features used
          confidently to support purpose, and the highest WAO2 bands reward ambitious vocabulary
          used appropriately. A precise word is not a longer word - it is the word that says exactly
          what you mean, for this audience and this purpose.
        </p>
        {VOCAB_SKILL && (
          <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Spec skill {VOCAB_SKILL.code} - {VOCAB_SKILL.title}
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {VOCAB_SKILL.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            {VOCAB_CODE && (
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                <span className="font-mono text-primary">{VOCAB_CODE.code}</span> -{' '}
                {VOCAB_CODE.descriptor}
              </p>
            )}
          </div>
        )}
      </section>

      {/* ── Jump links ──────────────────────────────────────────────── */}
      <section className="my-10">
        <h2 id="word-banks" className="scroll-mt-24">
          Word banks
        </h2>
        <p className="text-sm text-muted-foreground">
          Six theme banks plus four cross-cutting banks. Each word has a definition, an original
          example sentence and two or three precise synonyms.
        </p>
        <nav aria-label="Jump to a word bank" className="not-prose mt-4 flex flex-wrap gap-2">
          {ALL_THEMES.map((theme) => (
            <a
              key={theme.id}
              href={`#${theme.id}`}
              className="rounded-md border border-border/60 bg-card px-3 py-1.5 text-xs text-foreground hover:border-primary hover:text-primary"
            >
              {theme.title}
            </a>
          ))}
          <a
            href="#analytical-verbs"
            className="rounded-md border border-border/60 bg-card px-3 py-1.5 text-xs text-foreground hover:border-primary hover:text-primary"
          >
            Analytical verbs
          </a>
          <a
            href="#upgrade-table"
            className="rounded-md border border-border/60 bg-card px-3 py-1.5 text-xs text-foreground hover:border-primary hover:text-primary"
          >
            Upgrade table
          </a>
        </nav>
      </section>

      {/* ── Theme sections ──────────────────────────────────────────── */}
      {ALL_THEMES.map((theme) => (
        <ThemeSection key={theme.id} theme={theme} />
      ))}

      {/* ── Analytical verbs bank ───────────────────────────────────── */}
      <section id="analytical-verbs" className="my-10 scroll-mt-24">
        <h2>Analytical verbs for reading answers</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Section A short open responses reward explanation, not lifted quotation. These verbs let
          you state precisely what a writer is doing and the effect it has on the reader - the
          difference between an unexplained lift and a developed point.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Verb
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Meaning
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  How to use it
                </th>
              </tr>
            </thead>
            <tbody>
              {ANALYTICAL_VERBS.map((v) => (
                <tr key={v.verb} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{v.verb}</td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">{v.meaning}</td>
                  <td className="px-4 py-3 text-muted-foreground leading-relaxed">{v.howToUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Upgrade table ───────────────────────────────────────────── */}
      <section id="upgrade-table" className="my-10 scroll-mt-24">
        <h2>The upgrade table</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ten over-used words, each with three precise alternatives. The nuance column matters: do
          not swap a word for a longer one if it changes your meaning. Pick the upgrade that fits
          the exact sentence.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Weak word
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Precise alternatives (with nuance)
                </th>
              </tr>
            </thead>
            <tbody>
              {UPGRADE_TABLE.map((row) => (
                <tr key={row.weak} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary whitespace-nowrap">
                    {row.weak}
                  </td>
                  <td className="px-4 py-3">
                    <ul className="space-y-1.5 text-muted-foreground">
                      {row.upgrades.map((u) => (
                        <li key={u.word} className="flex gap-2">
                          <span className="font-semibold text-foreground whitespace-nowrap">
                            {u.word}
                          </span>
                          <span className="text-muted-foreground">- {u.nuance}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Thesaurus-trap warning ──────────────────────────────────── */}
      <section className="my-10">
        <h2 id="thesaurus-trap" className="scroll-mt-24">
          The thesaurus trap
        </h2>
        <div className="not-prose rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Warning
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            Examiners reward ambitious vocabulary used <em>appropriately</em> - not the longest word
            you can find. A thesaurus lists words with a similar meaning, but synonyms are rarely
            identical: each carries a slightly different shade of meaning, formality or feeling.
            Dropping an unfamiliar word into a sentence where it does not quite fit lowers your
            mark, because it shows the choice was not controlled.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              <span className="leading-relaxed">
                Only use a word you can define and could use in a second original sentence of your
                own.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              <span className="leading-relaxed">
                Check the nuance, the register (formal or informal) and the word class before you
                commit to it.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ·
              </span>
              <span className="leading-relaxed">
                Remember: dictionaries are not allowed in the assessment, so the precise words must
                already be yours before exam day.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
