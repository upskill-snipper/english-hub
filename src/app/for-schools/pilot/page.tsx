import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { COMPANY } from '@/config/company'
import { PRICING } from '@/constants/pricing'
import {
  CalendarCheck,
  ClipboardList,
  Users,
  BarChart3,
  CheckCircle,
  School,
  GraduationCap,
  FileText,
  Building2,
  Globe2,
  Sparkles,
  Mail,
  Printer,
  ArrowRight,
  Target,
  Brain,
  PieChart,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'School Pilot Pack | The English Hub for Schools',
  description:
    'Run a structured 90-day English improvement pilot with student access, teacher tools, analytics and school progress reporting. Designed for British curriculum schools.',
  alternates: { canonical: `${COMPANY.websiteUrl}/for-schools/pilot` },
  openGraph: {
    title: 'School Pilot Pack | The English Hub for Schools',
    description:
      'Run a structured 90-day English improvement pilot with student access, teacher tools, analytics and school progress reporting.',
  },
}

const AUDIENCE = [
  { icon: GraduationCap, label: 'Heads of English and English teaching teams' },
  { icon: Building2, label: 'Senior Leadership Teams (SLT) reviewing English provision' },
  { icon: School, label: 'British curriculum schools — UK and international' },
  { icon: Target, label: 'GCSE and IGCSE cohorts preparing for terminal exams' },
  { icon: Brain, label: 'KS3 intervention groups closing skills gaps' },
  { icon: Globe2, label: 'EAL learners where the school needs structured English support' },
  {
    icon: Sparkles,
    label: 'Gulf and international British curriculum schools using IGCSE pathways',
  },
]

const PHASE_1 = {
  number: 1,
  title: 'Setup and baseline',
  duration: 'Weeks 1–3',
  points: [
    'Confirm the year group(s) and cohort the pilot will cover',
    'Onboard nominated teachers and create student accounts in bulk',
    'Select the exam board or pathway content should align to',
    'Run baseline reading, writing and practice tasks across the cohort',
    'Identify priority skill gaps — language analysis, structure, AO coverage, vocabulary, reading inference',
  ],
}

const PHASE_2 = {
  number: 2,
  title: 'Targeted practice',
  duration: 'Weeks 4–11',
  points: [
    'Assign practice tasks aligned to the gaps identified in Phase 1',
    'Use AI-assisted feedback to give students faster formative responses',
    'Support mock exam preparation with exam-style practice and walkthroughs',
    'Track student engagement and submission patterns',
    'Review class-level weaknesses with teachers in fortnightly check-ins',
  ],
}

const PHASE_3 = {
  number: 3,
  title: 'Review and impact report',
  duration: 'Weeks 12–13',
  points: [
    'Usage summary across teachers and student cohort',
    'Skill-gap trends from baseline to end of pilot',
    'Student progress indicators against the gaps identified',
    'Teacher feedback on workload, content quality and student response',
    'Recommendations for the next term and beyond',
    'Annual school licence proposal if the pilot warrants it',
  ],
}

const WHAT_YOU_RECEIVE = [
  'Teacher access for every nominated member of the English department',
  'Student access for every learner in the agreed cohort',
  'Onboarding support — guided setup walkthrough and an admin checklist',
  'Reporting dashboard for the cohort and per-class breakdowns',
  'A written pilot review report at the end of the 90 days',
  'A recommended intervention plan for the next academic block',
  'Optional staff walkthrough with the schools team',
]

const SUCCESS_METRICS = [
  {
    icon: Users,
    label: 'Student activation',
    desc: 'Percentage of the cohort that signs in and starts using the platform.',
  },
  {
    icon: CalendarCheck,
    label: 'Weekly usage',
    desc: 'Active sessions per student per week, by class and overall.',
  },
  {
    icon: ClipboardList,
    label: 'Tasks completed',
    desc: 'Number of practice tasks, reading exercises and writing submissions.',
  },
  {
    icon: FileText,
    label: 'Writing submissions',
    desc: 'Volume and length of student writing submitted for feedback.',
  },
  {
    icon: PieChart,
    label: 'Skill gaps identified',
    desc: 'Specific weaknesses surfaced by the analytics — by class and student.',
  },
  {
    icon: Brain,
    label: 'Teacher feedback',
    desc: 'Qualitative feedback collected from each pilot teacher.',
  },
  {
    icon: BarChart3,
    label: 'Reports generated',
    desc: 'Class, student and parent reports produced through the platform.',
  },
  {
    icon: Target,
    label: 'Intervention groups created',
    desc: 'Targeted groups set up off the back of skill-gap data.',
  },
]

export default function SchoolPilotPackPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: COMPANY.websiteUrl },
          { name: 'For Schools', url: `${COMPANY.websiteUrl}/for-schools` },
          { name: 'School Pilot Pack', url: `${COMPANY.websiteUrl}/for-schools/pilot` },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24 border-b border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-[180px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-8 gap-2 px-4 py-1.5"
          >
            <School className="w-4 h-4" />
            School Pilot Pack
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            A 90-day English improvement pilot for schools.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A structured pilot to help schools baseline English needs, support targeted practice and
            review progress with clear usage and reporting data. Designed for British curriculum
            schools in the UK and overseas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25 gap-2 font-semibold"
              render={<Link href="/contact" />}
            >
              <Mail className="w-4 h-4" />
              Request a school pilot
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-border/60 gap-2"
              render={<Link href="/for-schools" />}
            >
              <Printer className="w-4 h-4" />
              Back to For Schools
            </Button>
          </div>
          {/* TODO(founder): commission a designed PDF version of the
              Pilot Pack and replace this with a real download link.
              Pages are print-friendly so Cmd/Ctrl+P → Save as PDF works
              in the meantime. */}
          <p className="mt-4 text-xs text-muted-foreground/80">
            A designed downloadable PDF is on the way. The page is print-friendly: use your
            browser&apos;s print menu to save a copy for your team.
          </p>
        </div>
      </section>

      {/* ── A. Who it is for ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            A. Who it is for
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            Built for English departments — UK and international British curriculum
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {AUDIENCE.map((row) => (
              <div
                key={row.label}
                className="flex items-start gap-3 rounded-xl border border-border/40 bg-card/40 p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <row.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed pt-1">{row.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B. Pilot structure ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            B. Pilot structure
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            Three phases over 90 days
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            A structured cycle: get the cohort live, run targeted practice, and finish with a
            written review that a head of English can put in front of SLT.
          </p>

          <div className="space-y-6">
            {[PHASE_1, PHASE_2, PHASE_3].map((phase) => (
              <Card key={phase.number} className="p-7 border-border/40">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                    {phase.number}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
                      Phase {phase.number} · {phase.duration}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2.5 pl-1">
                  {phase.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. What schools receive ───────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            C. What schools receive
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            What is included with every pilot
          </h2>
          <Card className="p-7 border-border/40">
            <ul className="space-y-3">
              {WHAT_YOU_RECEIVE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* ── D. Success measures ───────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            D. Success measures
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            What we measure during the pilot
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            We measure usage, engagement and identifiable skill gaps — not grade improvement. A
            12-week pilot is too short to claim a causal grade lift, and we will not present it as
            one.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUCCESS_METRICS.map((m) => (
              <Card key={m.label} className="p-5 border-border/40">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <m.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1.5">{m.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 border-amber-500/20 bg-amber-500/[0.04]">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">
                  We do not promise grade improvement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Grade outcomes depend on too many factors outside the platform — cohort, teaching
                  time, teacher experience, prior attainment, exam day performance. We measure
                  engagement, gap-identification and teacher-reported impact, and let the school
                  decide whether that adds up to grade change.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── E. Pricing ────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            E. Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            Recurring school pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-7 border-primary/30 bg-primary/[0.04]">
              <Badge className="bg-primary/15 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-4">
                Founding School Pilot
              </Badge>
              <p className="text-3xl font-extrabold text-foreground">
                from £{PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}
                <span className="text-base font-normal text-muted-foreground"> / year</span>
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Recurring annual licence, sized to cohort and scope. The first 10 founding schools
                lock in this preferential rate for 2–3 years.
              </p>
            </Card>

            <Card className="p-7 border-border/40 bg-card/40">
              <Badge
                variant="outline"
                className="border-border/60 text-foreground font-bold text-xs px-3 py-1 mb-4"
              >
                School Licence
              </Badge>
              <p className="text-3xl font-extrabold text-foreground">
                from £{PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}
                <span className="text-base font-normal text-muted-foreground"> / year</span>
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Standard annual licence for schools joining after the founding cohort closes. Full
                platform access for all teachers and students in the agreed cohort.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-xl border border-border/40 bg-card/30 p-6">
            <h3 className="font-bold text-foreground mb-3">School pricing is based on</h3>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground">
              {[
                'Number of students in the cohort',
                'Number of teachers requiring access',
                'Year groups covered (KS3 / GCSE / IGCSE)',
                'Reporting and analytics needs',
                'Onboarding and training scope',
                'Pilot or full annual licence structure',
              ].map((row) => (
                <li key={row} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground/80">
              Larger schools, multi-academy trusts (MATs) and international school groups are priced
              on a custom annual licence. Optional onboarding, training or implementation support
              may be included depending on package.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="text-base px-8 h-12 gap-2"
              render={<Link href="/contact" />}
            >
              Request school pricing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── F. CTA ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mb-6">
            <CalendarCheck className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
            Bring clearer English insight into your school.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your year group, cohort size and exam board. We will come back within one
            working day with a tailored pilot proposal — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="text-base px-8 h-12" render={<Link href="/contact" />}>
              <Mail className="w-4 h-4 mr-2" />
              Request a school pilot
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<a href={`mailto:${COMPANY.contactEmail}`} />}
            >
              Email {COMPANY.contactEmail}
            </Button>
          </div>

          <Separator className="my-10 opacity-40" />

          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            {COMPANY.fullDisclosureLine}
          </p>
        </div>
      </section>
    </main>
  )
}
