import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { COMPANY } from '@/config/company'
import { PRICING } from '@/constants/pricing'
import { t } from '@/lib/i18n/t'
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
  title: 'School Pilot Pack',
  description:
    'Run a structured 90-day English improvement pilot with student access, teacher tools, analytics and school progress reporting. Designed for British curriculum schools.',
  alternates: { canonical: `${COMPANY.websiteUrl}/for-schools/pilot` },
  openGraph: {
    title: 'School Pilot Pack | The English Hub for Schools',
    description:
      'Run a structured 90-day English improvement pilot with student access, teacher tools, analytics and school progress reporting.',
  },
}

// i18n keys; resolved at render via t(). Icons stay inline.
const AUDIENCE = [
  { icon: GraduationCap, labelKey: 'mkt.schools.pilot.who.1' },
  { icon: Building2, labelKey: 'mkt.schools.pilot.who.2' },
  { icon: School, labelKey: 'mkt.schools.pilot.who.3' },
  { icon: Target, labelKey: 'mkt.schools.pilot.who.4' },
  { icon: Brain, labelKey: 'mkt.schools.pilot.who.5' },
  { icon: Globe2, labelKey: 'mkt.schools.pilot.who.6' },
  { icon: Sparkles, labelKey: 'mkt.schools.pilot.who.7' },
]

const PHASE_1 = {
  number: 1,
  titleKey: 'mkt.schools.pilot.phase1.title',
  durationKey: 'mkt.schools.pilot.phase1.duration',
  pointKeys: [
    'mkt.schools.pilot.phase1.point.1',
    'mkt.schools.pilot.phase1.point.2',
    'mkt.schools.pilot.phase1.point.3',
    'mkt.schools.pilot.phase1.point.4',
    'mkt.schools.pilot.phase1.point.5',
  ],
}

const PHASE_2 = {
  number: 2,
  titleKey: 'mkt.schools.pilot.phase2.title',
  durationKey: 'mkt.schools.pilot.phase2.duration',
  pointKeys: [
    'mkt.schools.pilot.phase2.point.1',
    'mkt.schools.pilot.phase2.point.2',
    'mkt.schools.pilot.phase2.point.3',
    'mkt.schools.pilot.phase2.point.4',
    'mkt.schools.pilot.phase2.point.5',
  ],
}

const PHASE_3 = {
  number: 3,
  titleKey: 'mkt.schools.pilot.phase3.title',
  durationKey: 'mkt.schools.pilot.phase3.duration',
  pointKeys: [
    'mkt.schools.pilot.phase3.point.1',
    'mkt.schools.pilot.phase3.point.2',
    'mkt.schools.pilot.phase3.point.3',
    'mkt.schools.pilot.phase3.point.4',
    'mkt.schools.pilot.phase3.point.5',
    'mkt.schools.pilot.phase3.point.6',
  ],
}

const WHAT_YOU_RECEIVE_KEYS = [
  'mkt.schools.pilot.receive.1',
  'mkt.schools.pilot.receive.2',
  'mkt.schools.pilot.receive.3',
  'mkt.schools.pilot.receive.4',
  'mkt.schools.pilot.receive.5',
  'mkt.schools.pilot.receive.6',
  'mkt.schools.pilot.receive.7',
]

const SUCCESS_METRICS = [
  {
    icon: Users,
    labelKey: 'mkt.schools.pilot.metric.activation.label',
    descKey: 'mkt.schools.pilot.metric.activation.desc',
  },
  {
    icon: CalendarCheck,
    labelKey: 'mkt.schools.pilot.metric.weekly.label',
    descKey: 'mkt.schools.pilot.metric.weekly.desc',
  },
  {
    icon: ClipboardList,
    labelKey: 'mkt.schools.pilot.metric.tasks.label',
    descKey: 'mkt.schools.pilot.metric.tasks.desc',
  },
  {
    icon: FileText,
    labelKey: 'mkt.schools.pilot.metric.writing.label',
    descKey: 'mkt.schools.pilot.metric.writing.desc',
  },
  {
    icon: PieChart,
    labelKey: 'mkt.schools.pilot.metric.gaps.label',
    descKey: 'mkt.schools.pilot.metric.gaps.desc',
  },
  {
    icon: Brain,
    labelKey: 'mkt.schools.pilot.metric.teacher.label',
    descKey: 'mkt.schools.pilot.metric.teacher.desc',
  },
  {
    icon: BarChart3,
    labelKey: 'mkt.schools.pilot.metric.reports.label',
    descKey: 'mkt.schools.pilot.metric.reports.desc',
  },
  {
    icon: Target,
    labelKey: 'mkt.schools.pilot.metric.groups.label',
    descKey: 'mkt.schools.pilot.metric.groups.desc',
  },
]

export default async function SchoolPilotPackPage() {
  // Resolve keyed copy arrays up-front (rendered inside sync .map()s).
  const audience = await Promise.all(
    AUDIENCE.map(async (a) => ({ icon: a.icon, label: await t(a.labelKey) })),
  )
  const phases = await Promise.all(
    [PHASE_1, PHASE_2, PHASE_3].map(async (p) => ({
      number: p.number,
      title: await t(p.titleKey),
      duration: await t(p.durationKey),
      points: await Promise.all(p.pointKeys.map((k) => t(k))),
    })),
  )
  const whatYouReceive = await Promise.all(WHAT_YOU_RECEIVE_KEYS.map((k) => t(k)))
  const successMetrics = await Promise.all(
    SUCCESS_METRICS.map(async (m) => ({
      icon: m.icon,
      label: await t(m.labelKey),
      desc: await t(m.descKey),
    })),
  )
  const phaseWord = await t('mkt.schools.pilot.phase_word')
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
            {await t('mkt.schools.pilot.hero.badge')}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            {await t('mkt.schools.pilot.hero.title')}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {await t('mkt.schools.pilot.hero.body')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25 gap-2 font-semibold"
              render={<Link href="/contact" />}
            >
              <Mail className="w-4 h-4" />
              {await t('mkt.schools.pilot.hero.cta_request')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-border/60 gap-2"
              render={<Link href="/for-schools" />}
            >
              <Printer className="w-4 h-4" />
              {await t('mkt.schools.pilot.hero.cta_back')}
            </Button>
          </div>
          {/* TODO(founder): commission a designed PDF version of the
              Pilot Pack and replace this with a real download link.
              Pages are print-friendly so Cmd/Ctrl+P → Save as PDF works
              in the meantime. */}
          <p className="mt-4 text-xs text-muted-foreground/80">
            {await t('mkt.schools.pilot.hero.pdf_note')}
          </p>
        </div>
      </section>

      {/* ── A. Who it is for ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            {await t('mkt.schools.pilot.who.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            {await t('mkt.schools.pilot.who.title')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((row) => (
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
            {await t('mkt.schools.pilot.structure.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {await t('mkt.schools.pilot.structure.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            {await t('mkt.schools.pilot.structure.body')}
          </p>

          <div className="space-y-6">
            {phases.map((phase) => (
              <Card key={phase.number} className="p-7 border-border/40">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                    {phase.number}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
                      {phaseWord} {phase.number} · {phase.duration}
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
            {await t('mkt.schools.pilot.receive.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            {await t('mkt.schools.pilot.receive.title')}
          </h2>
          <Card className="p-7 border-border/40">
            <ul className="space-y-3">
              {whatYouReceive.map((item) => (
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
            {await t('mkt.schools.pilot.measure.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {await t('mkt.schools.pilot.measure.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            {await t('mkt.schools.pilot.measure.body')}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {successMetrics.map((m) => (
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
                  {await t('mkt.schools.pilot.measure.no_promise.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {await t('mkt.schools.pilot.measure.no_promise.body')}
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
            {await t('mkt.schools.pilot.pricing.eyebrow')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            {await t('mkt.schools.pilot.pricing.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-7 border-primary/30 bg-primary/[0.04]">
              <Badge className="bg-primary/15 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-4">
                {await t('mkt.schools.pilot.pricing.founding.badge')}
              </Badge>
              <p className="text-3xl font-extrabold text-foreground">
                {await t('mkt.schools.pilot.pricing.from')} £
                {PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}
                <span className="text-base font-normal text-muted-foreground">
                  {' '}
                  {await t('mkt.schools.pilot.pricing.year')}
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {await t('mkt.schools.pilot.pricing.founding.body')}
              </p>
            </Card>

            <Card className="p-7 border-border/40 bg-card/40">
              <Badge
                variant="outline"
                className="border-border/60 text-foreground font-bold text-xs px-3 py-1 mb-4"
              >
                {await t('mkt.schools.pilot.pricing.licence.badge')}
              </Badge>
              <p className="text-3xl font-extrabold text-foreground">
                {await t('mkt.schools.pilot.pricing.from')} £
                {PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}
                <span className="text-base font-normal text-muted-foreground">
                  {' '}
                  {await t('mkt.schools.pilot.pricing.year')}
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {await t('mkt.schools.pilot.pricing.licence.body')}
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-xl border border-border/40 bg-card/30 p-6">
            <h3 className="font-bold text-foreground mb-3">
              {await t('mkt.schools.pilot.pricing.based_on.title')}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground">
              {[
                await t('mkt.schools.pilot.pricing.based_on.1'),
                await t('mkt.schools.pilot.pricing.based_on.2'),
                await t('mkt.schools.pilot.pricing.based_on.3'),
                await t('mkt.schools.pilot.pricing.based_on.4'),
                await t('mkt.schools.pilot.pricing.based_on.5'),
                await t('mkt.schools.pilot.pricing.based_on.6'),
              ].map((row) => (
                <li key={row} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground/80">
              {await t('mkt.schools.pilot.pricing.note')}
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="text-base px-8 h-12 gap-2"
              render={<Link href="/contact" />}
            >
              {await t('mkt.schools.pilot.pricing.cta')}
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
            {await t('mkt.schools.pilot.cta.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {await t('mkt.schools.pilot.cta.body')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="text-base px-8 h-12" render={<Link href="/contact" />}>
              <Mail className="w-4 h-4 mr-2" />
              {await t('mkt.schools.pilot.cta.request')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<a href={`mailto:${COMPANY.contactEmail}`} />}
            >
              {await t('mkt.schools.pilot.cta.email')} {COMPANY.contactEmail}
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
