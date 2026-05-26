import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ShieldCheck,
  FileSearch,
  PenTool,
  BookOpen,
  AlertTriangle,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Mail,
  RefreshCw,
} from 'lucide-react'
import { COMPANY } from '@/config/company'

// Last-reviewed date is rendered visibly so visitors can see how recent
// the methodology is. Update whenever a substantive review pass happens.
const LAST_REVIEWED = '2026-05-15'

export const metadata: Metadata = {
  title: 'Content Verification Methodology',
  description:
    'How The English Hub checks content accuracy, manages AI-assisted feedback, reviews quotations and maintains trusted English learning resources.',
  alternates: { canonical: `${COMPANY.websiteUrl}/about/content-verification` },
  openGraph: {
    title: 'Content Verification Methodology | The English Hub',
    description:
      'How The English Hub checks content accuracy, manages AI-assisted feedback, reviews quotations and maintains trusted English learning resources.',
    type: 'article',
  },
}

const PRINCIPLES = [
  {
    title: 'Accuracy over speed',
    desc: 'A correct, slightly later piece of content is better than a fast, wrong one. We hold material in review before publishing rather than ship it half-checked.',
  },
  {
    title: 'Original content over copied material',
    desc: 'Resources are written for The English Hub, not aggregated from other revision sites. Where we draw on public-domain texts or public specification information, the source is named.',
  },
  {
    title: 'Human review for high-stakes content',
    desc: 'Mark-scheme guidance, set-text analysis and exam-style examples are reviewed by a human before they reach students. AI assists drafting; humans decide what ships.',
  },
  {
    title: 'Transparent AI limitations',
    desc: 'Where AI generates or assists feedback, we say so. Students and teachers should treat AI feedback as formative practice support, not as official grading.',
  },
  {
    title: 'Clear copyright boundaries',
    desc: 'Public-domain texts are used where legally available. Copyright-protected texts are handled within fair dealing for criticism, review and quotation. Official exam-board materials are not reproduced without permission.',
  },
  {
    title: 'Continuous correction',
    desc: 'Verification is not a one-off pass. User-reported errors are logged, reviewed and corrected, and significant corrections are noted on the affected page.',
  },
]

const REVIEW_CATEGORIES = [
  { label: 'Draft', tone: 'neutral', desc: 'Initial draft, not yet published to the public site.' },
  {
    label: 'AI-assisted draft',
    tone: 'neutral',
    desc: 'Drafted with AI assistance and awaiting human review.',
  },
  {
    label: 'Human reviewed',
    tone: 'good',
    desc: 'A human editor has read the content end-to-end and signed it off.',
  },
  {
    label: 'Quote checked',
    tone: 'good',
    desc: 'Quotations cross-referenced against a reliable source where one is available.',
  },
  {
    label: 'Exam-board aligned',
    tone: 'good',
    desc: 'Mapped against public specification information and the relevant assessment objectives.',
  },
  {
    label: 'Updated after user report',
    tone: 'good',
    desc: 'A reader flagged an issue; the content was reviewed and updated.',
  },
  {
    label: 'Archived or replaced',
    tone: 'muted',
    desc: 'No longer in active use. Kept on file for change history; superseded by a newer version.',
  },
] as const

const WORKFLOW_STEPS = [
  {
    n: 1,
    title: 'User reports issue',
    desc: 'A reader spots something that looks wrong and uses the report-a-content-issue link.',
  },
  {
    n: 2,
    title: 'Issue logged',
    desc: "The report is recorded with the page URL, the specific claim or quote, and the reporter's notes.",
  },
  {
    n: 3,
    title: 'Content reviewed',
    desc: 'An editor reviews the original source and the claim, plus surrounding pages that reference the same fact.',
  },
  {
    n: 4,
    title: 'Correction made if needed',
    desc: 'If the report is valid, the page is updated. If it is a matter of interpretation, we note the alternative reading.',
  },
  {
    n: 5,
    title: 'Updated version published',
    desc: 'The corrected version replaces the previous content. The page\'s "Last updated" date is bumped.',
  },
  {
    n: 6,
    title: 'Significant corrections noted',
    desc: 'For corrections that change the meaning of the page, a short note is added so returning visitors see what changed.',
  },
]

const toneClass: Record<'good' | 'neutral' | 'muted', string> = {
  good: 'border-emerald-500/30 bg-emerald-500/[0.06] text-teal-700',
  neutral: 'border-border/60 bg-card/40 text-foreground',
  muted: 'border-border/40 bg-muted/30 text-muted-foreground',
}

export default function ContentVerificationMethodologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: COMPANY.websiteUrl },
          { name: 'About', url: `${COMPANY.websiteUrl}/about` },
          {
            name: 'Content Verification Methodology',
            url: `${COMPANY.websiteUrl}/about/content-verification`,
          },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/[0.06] text-teal-700 text-xs font-semibold mb-5 gap-1.5 px-3 py-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Methodology
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Content Verification Methodology
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            How we check what we publish, where AI is used and where it stops, and how readers can
            raise an issue. Written for parents, teachers and school leaders who need to know what
            stands behind the content their students see.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Last reviewed: {LAST_REVIEWED}
          </p>
        </div>
      </section>

      {/* ── A. Why verification matters ─────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            A. Why verification matters
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            English students rely on accurate sources
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <p>
              English revision depends on accurate quotations, clear interpretation, valid exam
              guidance and trustworthy feedback. A misremembered Macbeth line or a mark-scheme
              guidance point that is half-right can cost a student real marks in a closed-book exam.
              Verification is how we keep that surface area clean.
            </p>
            <p>
              We are an AI-assisted platform, not an AI-only platform. The role of human review is
              to catch the things AI confidently gets wrong: invented quotations, conflated
              characters, plausible-sounding but invalid mark-scheme language, and contextual claims
              that no source supports.
            </p>
          </div>
        </div>
      </section>

      {/* ── B. Verification principles ────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            B. Verification principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            The principles we follow
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {PRINCIPLES.map((p) => (
              <Card key={p.title} className="p-6 border-border/40">
                <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. Review categories ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            C. Review categories
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            Status labels we use internally
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Every published page sits in one or more of these states. Surfacing the labels here
            keeps the framework honest: a reader can ask which category any specific page is in.
          </p>
          <div className="space-y-3">
            {REVIEW_CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className={`rounded-xl border p-4 flex items-start gap-4 ${toneClass[cat.tone]}`}
              >
                <Badge variant="outline" className="font-mono text-xs px-2 py-0.5 shrink-0">
                  {cat.label}
                </Badge>
                <p className="text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. Literature verification ────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            D. Literature verification
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            How we check quotations and analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: BookOpen,
                title: 'Quotations checked against reliable sources',
                desc: 'Where a reliable text source exists (Project Gutenberg public-domain editions, Folger Shakespeare Library, the prescribed edition cited by the exam board), quotations are cross-referenced. If a quote cannot be sourced, it is removed.',
              },
              {
                icon: AlertTriangle,
                title: 'Invented quotes are removed',
                desc: 'AI assistance can invent quotations that sound plausible. Any quote without an identifiable source is treated as suspect and either replaced with a verified line or removed.',
              },
              {
                icon: FileSearch,
                title: 'Unsupported claims are corrected',
                desc: "Claims about a writer's biography, the historical context, or the reception of a text are checked against published criticism. Unverifiable claims are removed or softened.",
              },
              {
                icon: PenTool,
                title: 'Alternative interpretations are allowed',
                desc: 'Where multiple readings of a text are defensible, we say so. We do not pretend a single critical interpretation is the only valid one.',
              },
            ].map((row) => (
              <Card key={row.title} className="p-6 border-border/40">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <row.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{row.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{row.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Language and writing resources ─────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            E. Language and writing resources
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            How we check writing and language guidance
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <ul>
              <li>
                <strong>Examples are checked for clarity and suitability.</strong> Sample sentences,
                annotated extracts and worked answers are reviewed for age-appropriateness and for
                whether they actually demonstrate the technique they claim to.
              </li>
              <li>
                <strong>Terminology is reviewed against published specifications.</strong> Where
                exam boards use specific labels for techniques, assessment objectives or paper
                components, we use the same labels.
              </li>
              <li>
                <strong>Model answers are reviewed for quality.</strong> A "Grade 7" exemplar must
                actually reach Grade 7 against the relevant mark scheme. Drafts that do not are
                rewritten or relabelled.
              </li>
              <li>
                <strong>Mark guidance remains formative, not official.</strong> We can tell a
                student what a strong response looks like and where their writing falls short of
                that. We cannot - and do not - award official marks.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── F. Exam-board alignment ───────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            F. Exam-board alignment
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            Aligned, not endorsed
          </h2>
          <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed">
            <ul>
              <li>
                Resources may be mapped to assessment objectives and public specification
                information so students see the same vocabulary and structure they will meet in the
                exam room.
              </li>
              <li>
                <strong>The English Hub is independent.</strong> No exam board has endorsed,
                approved or partnered with the platform, and we do not represent ourselves as having
                any such relationship.
              </li>
              <li>
                Official exam-board materials (past papers, mark schemes, prescribed editions) are
                not reproduced on the platform without permission. Where we reference them, we point
                readers to the official source.
              </li>
              <li>
                Students preparing for an exam should always check the final requirements with their
                teacher and the board&apos;s official specification.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── G. AI-generated feedback ──────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            G. AI-generated feedback
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
            What AI feedback is and is not
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 border-emerald-500/20 bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <h3 className="font-bold text-foreground">AI feedback can</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>Support formative practice with detailed written responses.</li>
                <li>Highlight where a piece of writing is strong and where it is weak.</li>
                <li>Suggest specific, actionable next steps a student can try.</li>
                <li>Save teachers time on repetitive feedback patterns.</li>
              </ul>
            </Card>
            <Card className="p-6 border-amber-500/20 bg-amber-500/[0.04]">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold text-foreground">AI feedback cannot</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>Replace teacher professional judgement.</li>
                <li>Award official exam marks - that remains with the exam board.</li>
                <li>Guarantee accuracy on every response - errors are possible.</li>
                <li>Substitute for the official specification or mark scheme.</li>
              </ul>
            </Card>
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Students and teachers can challenge or report AI feedback at any point. We treat
            disputed feedback as a content issue and route it through the correction workflow below.
          </p>
        </div>
      </section>

      {/* ── H. Correction workflow ────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            H. Correction workflow
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            How we handle a reported issue
          </h2>
          <ol className="space-y-4">
            {WORKFLOW_STEPS.map((s) => (
              <li
                key={s.n}
                className="flex gap-4 rounded-xl border border-border/40 bg-card/40 p-5"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── I. CTA ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mb-6">
            <RefreshCw className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
            Spotted something that does not look right?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Report it and we will review the page. Reports go to our editorial team, are logged, and
            acknowledged within one working day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="text-base px-8 h-12" render={<Link href="/help/report" />}>
              <ArrowRight className="w-4 h-4 mr-2" />
              Report a content issue
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<a href={`mailto:${COMPANY.legalEmail}`} />}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email {COMPANY.legalEmail}
            </Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            <Link
              href="/about/verified-content"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Read our shorter Verified Content summary →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
