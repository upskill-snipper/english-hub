import Link from 'next/link'
import { KS3 } from '@/lib/ks3/curriculum'

export default function KS3LandingPage() {
  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        Key Stage 3 · Years 7, 8 &amp; 9
      </p>
      <h1>The full KS3 English curriculum</h1>
      <p className="lead">
        Years 7, 8 and 9 of secondary English mapped end-to-end. Yearly expectations, termly plans,
        weekly lesson frameworks, marking rubrics, skill progression and the British National
        Curriculum end-of-KS3 standard — all wired to The English Hub&rsquo;s reading diagnostics,
        AI marking, and bilingual (English / Arabic) content layer.
      </p>

      <h2>The KS3 arc — Foundations → Development → Mastery</h2>
      <p>Reading progression at a glance:</p>
      <ul>
        <li>
          <strong>Year 7</strong> — &ldquo;This shows…&rdquo; (identify + simple inference).
        </li>
        <li>
          <strong>Year 8</strong> — &ldquo;This suggests… because…&rdquo; (explain + multiple
          inferences + comparison).
        </li>
        <li>
          <strong>Year 9</strong> — &ldquo;This suggests… which reflects…&rdquo; (analyse methods
          across texts, conceptual interpretations, evaluation).
        </li>
      </ul>
      <p>
        Writing progression: Y7 control + basic structure → Y8 deliberate choices + clearer
        development → Y9 craft + conceptual depth.
      </p>

      <h2>The three years</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-3 my-6">
        {KS3.years.map((y) => (
          <Link
            key={y.number}
            href={`/ks3/year-${y.number}`}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              Year {y.number}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {y.name.en.replace(`Year ${y.number} — `, '')}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{y.overview.en}</p>
            <p className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View Year {y.number} →
            </p>
          </Link>
        ))}
      </div>

      <h2>Weekly framework — the same 5 lessons every week</h2>
      <p>
        Every week in KS3 follows the same shape so students build reflexes, not anxiety. Teachers
        adapt the text, the focus and the scaffolding; the framework holds steady.
      </p>
      <ol>
        <li>
          <strong>Explicit Reading.</strong> Teacher reads aloud, models pronunciation, assesses
          reading ability, teaches an analysis skill (R-focus).
        </li>
        <li>
          <strong>Reading and Discussion.</strong> Deepen understanding via sentence stems and
          structured talk (R + SL).
        </li>
        <li>
          <strong>Explicit Writing.</strong> Live-model a paragraph with explicit SPAG attention
          (W-focus).
        </li>
        <li>
          <strong>Application.</strong> Guided practice — reading → writing transfer with a heavy
          scaffold.
        </li>
        <li>
          <strong>Independent Outcome.</strong> Independent assessable piece — written under the
          scaffolds removed.
        </li>
      </ol>

      <h2>Non-negotiables across KS3</h2>
      <p>Every lesson in this curriculum:</p>
      <ul>
        <li>
          follows a clear learning cycle (input → modelling → guided practice → independence);
        </li>
        <li>includes explicit modelling before independent work;</li>
        <li>ensures reading or stimulus material informs writing outcomes;</li>
        <li>builds in structured talk opportunities to develop ideas;</li>
        <li>teaches vocabulary explicitly and in context (key vocabulary lists every week);</li>
        <li>provides regular opportunities for independent reading.</li>
      </ul>

      <h2>How to use this site</h2>
      <ul>
        <li>
          <strong>Yearly expectations</strong> live on the year page (e.g.{' '}
          <Link href="/ks3/year-7">/ks3/year-7</Link>) — the &ldquo;students can&rdquo; statements
          per strand.
        </li>
        <li>
          <strong>Termly plans</strong> live on the term page (e.g.{' '}
          <Link href="/ks3/year-7/term-1">/ks3/year-7/term-1</Link>) — overview, set text,
          vocabulary themes, big skill jump.
        </li>
        <li>
          <strong>Weekly lesson plans</strong> live on the week page (e.g.{' '}
          <Link href="/ks3/year-7/term-1/week-2">/ks3/year-7/term-1/week-2</Link>) — the full
          5-lesson breakdown with skill codes, tasks, success criteria.
        </li>
        <li>
          <strong>Marking rubrics</strong> at <Link href="/ks3/rubrics">/ks3/rubrics</Link> — 3
          years × 4 strands × 4 levels.
        </li>
        <li>
          <strong>Skill codes</strong> at <Link href="/ks3/skills">/ks3/skills</Link> — every code
          Y7→Y8→Y9 in one place.
        </li>
        <li>
          <strong>End of KS3 standard</strong> at{' '}
          <Link href="/ks3/end-of-ks3">/ks3/end-of-ks3</Link> — what the British National Curriculum
          expects.
        </li>
      </ul>

      <h2>Bilingual — English / Arabic</h2>
      <p>
        Every page here can render in three modes via the language toggle in the site header:
        English only, English + Arabic stacked, or Arabic only. Curriculum copy is translated to
        Modern Standard Arabic (MSA) — the formal register that reads correctly to parents and
        students across the Gulf and Levant. Translation coverage is being progressively filled by
        the round-trip QA pipeline; English-only sections fall back gracefully where Arabic
        isn&rsquo;t yet ready.
      </p>

      <h2>Hooked into the rest of the site</h2>
      <ul>
        <li>
          <strong>AI marking</strong> — the Independent Outcome lesson on every week page links to
          the existing essay-feedback system. A student writes their independent paragraph, submits,
          and gets AO-aligned AI feedback within minutes.
        </li>
        <li>
          <strong>Reading-for-pleasure</strong> picks for each term link to the wider site library.
        </li>
        <li>
          <strong>Vocabulary drills</strong> integrate with the existing flashcards engine — every
          week&rsquo;s key vocabulary is loadable as a deck.
        </li>
        <li>
          <strong>Mock exams</strong> — KS3 mock-exam content (already on the site) is referenced
          from Year 9 Term 3 as the bridge to GCSE.
        </li>
      </ul>
    </>
  )
}
