// Cycle 4 bundle split: this page is now a server component. The two
// interactive pieces (FAQItem open/close, BookCallForm submission) live
// in client-island components under src/components/for-schools/.
// Previous state: `'use client'` at the top pulled all 1340 lines of
// static marketing JSX + ~40 lucide icons into the client bundle (2.42 MB
// first-load). Server-rendering the page ships only the two small
// islands to the browser.
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TrustBox } from '@/components/trustpilot/TrustBox'
import { FAQItem } from '@/components/for-schools/FAQItem'
import { BookCallForm } from '@/components/for-schools/BookCallForm'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { PRICING } from '@/constants/pricing'
import { InfographicBanner } from '@/components/marketing/InfographicBanner'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t, tMany } from '@/lib/i18n/t'
import {
  BookOpen,
  GraduationCap,
  Award,
  Shield,
  CheckCircle,
  Sparkles,
  Users,
  BarChart3,
  ClipboardList,
  School,
  Building2,
  FileQuestion,
  Layers,
  Clock,
  UserPlus,
  Quote,
  LineChart,
  Brain,
  FileText,
  TrendingUp,
  Layout,
  Target,
  Presentation,
  Star,
  Zap,
  Upload,
  Mail,
  ArrowRight,
  AlertCircle,
  Phone,
  CalendarCheck,
  Lock,
  Eye,
  Settings,
  ChevronRight,
  X,
  Check,
  Table,
} from 'lucide-react'

/* ─────────────── Page Metadata (TICKET-5 + TICKET-7) ─────────────── */

export const metadata = {
  title: 'Whole-department English platform for UK schools',
  description:
    'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
  alternates: { canonical: 'https://theenglishhub.app/for-schools' },
  openGraph: {
    title: 'Whole-department English platform for UK schools - The English Hub',
    description:
      'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
    images: [
      {
        url: '/api/og?title=English+platform+for+UK+schools&subtitle=Whole+department,+one+place',
        width: 1200,
        height: 630,
        alt: 'English platform for UK schools - whole department, one place',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-department English platform for UK schools - The English Hub',
    description:
      'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
    images: ['/api/og?title=English+platform+for+UK+schools&subtitle=Whole+department,+one+place'],
  },
}

/* ─────────────── Founding Schools Programme Benefits ─────────────── */

// i18n keys; resolved at render via t() so AR/EN flips. The list order
// is load-bearing (display order); icons/colors stay inline where used.
const FOUNDING_BENEFIT_KEYS = [
  'mkt.schools.fs.founding.benefit.1',
  'mkt.schools.fs.founding.benefit.2',
  'mkt.schools.fs.founding.benefit.3',
  'mkt.schools.fs.founding.benefit.4',
  'mkt.schools.fs.founding.benefit.5',
  'mkt.schools.fs.founding.benefit.6',
]

/* ─────────────── Feature Cards ─────────────── */

const PLATFORM_FEATURES = [
  {
    icon: BarChart3,
    color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    titleKey: 'mkt.schools.fs.feat.analytics.title',
    // TODO(founder): verify the Ofsted-aligned report templates are live before this claim ships to a school. Soften if not.
    descKey: 'mkt.schools.fs.feat.analytics.desc',
  },
  {
    icon: BookOpen,
    color: 'text-primary bg-primary/10 border-primary/20',
    titleKey: 'mkt.schools.fs.feat.lesson.title',
    descKey: 'mkt.schools.fs.feat.lesson.desc',
  },
  {
    icon: Brain,
    color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
    titleKey: 'mkt.schools.fs.feat.feedback.title',
    descKey: 'mkt.schools.fs.feat.feedback.desc',
  },
  {
    icon: ClipboardList,
    color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
    titleKey: 'mkt.schools.fs.feat.homework.title',
    descKey: 'mkt.schools.fs.feat.homework.desc',
  },
  {
    icon: FileText,
    color: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    titleKey: 'mkt.schools.fs.feat.reports.title',
    descKey: 'mkt.schools.fs.feat.reports.desc',
  },
  {
    icon: GraduationCap,
    color: 'text-red-600 bg-red-500/10 border-red-500/20',
    titleKey: 'mkt.schools.fs.feat.cpd.title',
    descKey: 'mkt.schools.fs.feat.cpd.desc',
  },
]

/* ─────────────── Content Creation Preview ─────────────── */

const CONTENT_CREATION_ITEMS = [
  {
    icon: FileText,
    color: 'text-primary bg-primary/10',
    labelKey: 'mkt.schools.fs.content.lesson_plans.label',
    descKey: 'mkt.schools.fs.content.lesson_plans.desc',
  },
  {
    icon: Layout,
    color: 'text-blue-600 bg-blue-500/10',
    labelKey: 'mkt.schools.fs.content.worksheets.label',
    descKey: 'mkt.schools.fs.content.worksheets.desc',
  },
  {
    icon: Presentation,
    color: 'text-purple-600 bg-purple-500/10',
    labelKey: 'mkt.schools.fs.content.presentations.label',
    descKey: 'mkt.schools.fs.content.presentations.desc',
  },
  {
    icon: ClipboardList,
    color: 'text-teal-700 bg-emerald-500/10',
    labelKey: 'mkt.schools.fs.content.assessments.label',
    descKey: 'mkt.schools.fs.content.assessments.desc',
  },
]

/* ─────────────── Analytics Preview ─────────────── */

const ANALYTICS_METRICS = [
  {
    labelKey: 'mkt.schools.fs.analytics.metric.y11_avg.label',
    value: '72%',
    trendKey: 'mkt.schools.fs.analytics.metric.y11_avg.trend',
    color: 'text-primary',
  },
  {
    labelKey: 'mkt.schools.fs.analytics.metric.at_risk.label',
    value: '3',
    trendKey: 'mkt.schools.fs.analytics.metric.at_risk.trend',
    color: 'text-amber-600',
  },
  {
    labelKey: 'mkt.schools.fs.analytics.metric.completion.label',
    value: '89%',
    trendKey: 'mkt.schools.fs.analytics.metric.completion.trend',
    color: 'text-teal-700',
  },
  {
    labelKey: 'mkt.schools.fs.analytics.metric.top_class.label',
    value: '11B',
    trendKey: 'mkt.schools.fs.analytics.metric.top_class.trend',
    color: 'text-blue-600',
  },
]

/* ─────────────── How It Works ─────────────── */

const HOW_IT_WORKS = [
  {
    step: '1',
    icon: Phone,
    color: 'text-primary bg-primary/10 border-primary/20',
    titleKey: 'mkt.schools.fs.how.1.title',
    descKey: 'mkt.schools.fs.how.1.desc',
  },
  {
    step: '2',
    icon: Upload,
    color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    titleKey: 'mkt.schools.fs.how.2.title',
    descKey: 'mkt.schools.fs.how.2.desc',
  },
  {
    step: '3',
    icon: Zap,
    color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
    titleKey: 'mkt.schools.fs.how.3.title',
    descKey: 'mkt.schools.fs.how.3.desc',
  },
]

/* ─────────────── Pricing Comparison ─────────────── */

const COMPARISON_ROWS = [
  { featureKey: 'mkt.schools.fs.compare.unlimited_students', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.unlimited_teachers', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.dept_analytics', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.bulk_excel', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.admin_controls', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.homework', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.progress_reports', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.ofsted', school: true, individual: false },
  { featureKey: 'mkt.schools.fs.compare.ai_feedback', school: true, individual: true },
  { featureKey: 'mkt.schools.fs.compare.resource_library', school: true, individual: true },
  { featureKey: 'mkt.schools.fs.compare.tailored_content', school: true, individual: true },
]

/* ─────────────── Testimonials ─────────────── */
// REMOVED 2026-04-25: previous TESTIMONIALS array contained fabricated quotes
// attributed to non-existent named-school roles (Birmingham, Kent, Manchester,
// Leeds). Brand-voice rule §9 forbids fabricated stats, quotes, or press
// mentions. We are at launch; real testimonials will be added once consenting
// Founding Schools provide them. The render block below renders an empty-state
// "Founding teachers' words coming soon" call instead.

const TESTIMONIALS: Array<{
  quote: string
  name: string
  school: string
  initials: string
  color: string
}> = []

/* ─────────────── FAQs ─────────────── */

// i18n keys; resolved at render via tMany so display + FAQ JSON-LD share
// the same locale-aware strings.
const FAQ_KEYS = [
  { q: 'mkt.schools.fs.faq.programme.q', a: 'mkt.schools.fs.faq.programme.a' },
  { q: 'mkt.schools.fs.faq.cost.q', a: 'mkt.schools.fs.faq.cost.a' },
  { q: 'mkt.schools.fs.faq.access.q', a: 'mkt.schools.fs.faq.access.a' },
  { q: 'mkt.schools.fs.faq.excel.q', a: 'mkt.schools.fs.faq.excel.a' },
  { q: 'mkt.schools.fs.faq.admin.q', a: 'mkt.schools.fs.faq.admin.a' },
  { q: 'mkt.schools.fs.faq.boards.q', a: 'mkt.schools.fs.faq.boards.a' },
  { q: 'mkt.schools.fs.faq.gdpr.q', a: 'mkt.schools.fs.faq.gdpr.a' },
  { q: 'mkt.schools.fs.faq.after.q', a: 'mkt.schools.fs.faq.after.a' },
]

/* FAQItem moved to src/components/for-schools/FAQItem.tsx as a client
   island so this page can render server-side. */

/* ─────────────── Main Page ─────────────── */

export default async function ForSchoolsPage() {
  const [
    heroBadge,
    heroTitle,
    heroSub,
    ctaBookCall,
    ctaSeePricing,
    bannerBadge,
    bannerTitle,
    bannerDesc,
    bannerWhatReceive,
    finalCtaBadge,
    finalCtaTitle,
    finalCtaTitleEmphasis,
    finalCtaDesc,
    finalCtaNoObligation,
    finalCtaEmailDirect,
    sectionFeaturesTitle,
    sectionFeaturesSub,
    sectionDemoTitle,
    sectionDemoSub,
    ctaViewDemo,
  ] = await tMany([
    'audience.schools.hero.badge',
    'audience.schools.hero.title',
    'audience.schools.hero.sub',
    'pricing.cta.book_20min_call',
    'audience.schools.cta.see_pricing',
    'audience.schools.banner.badge',
    'pricing.founding_schools_2026',
    'audience.schools.banner.desc',
    'audience.schools.what_receive',
    'audience.schools.final.badge',
    'audience.schools.final.title',
    'audience.schools.final.title_emphasis',
    'audience.schools.final.desc',
    'audience.schools.final.no_obligation',
    'audience.schools.final.email_direct',
    'audience.schools.features.title',
    'audience.schools.features.sub',
    'audience.schools.demo.title',
    'audience.schools.demo.sub',
    'pricing.cta.view_demo',
  ])
  // Resolve FAQ copy once; shared by the visible accordion and the
  // FAQPage JSON-LD so both stay locale-consistent.
  const resolvedFaqs = await Promise.all(
    FAQ_KEYS.map(async (f) => ({ question: await t(f.q), answer: await t(f.a) })),
  )
  // Module-scope copy arrays are rendered inside synchronous .map()s, so
  // resolve them up-front into display-ready arrays (icons/colors carried
  // through unchanged).
  const platformFeatures = await Promise.all(
    PLATFORM_FEATURES.map(async (f) => ({
      ...f,
      title: await t(f.titleKey),
      desc: await t(f.descKey),
    })),
  )
  const contentCreationItems = await Promise.all(
    CONTENT_CREATION_ITEMS.map(async (i) => ({
      ...i,
      label: await t(i.labelKey),
      desc: await t(i.descKey),
    })),
  )
  const analyticsMetrics = await Promise.all(
    ANALYTICS_METRICS.map(async (m) => ({
      ...m,
      label: await t(m.labelKey),
      trend: await t(m.trendKey),
    })),
  )
  const comparisonRows = await Promise.all(
    COMPARISON_ROWS.map(async (r) => ({ ...r, feature: await t(r.featureKey) })),
  )
  const howItWorks = await Promise.all(
    HOW_IT_WORKS.map(async (s) => ({
      ...s,
      title: await t(s.titleKey),
      desc: await t(s.descKey),
    })),
  )
  const demoExplore = await t('mkt.schools.fs.demo.explore')
  const gettingStartedStep = await t('mkt.schools.fs.getting_started.step')
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'For Schools', url: 'https://theenglishhub.app/for-schools' },
        ]}
      />
      {/* ════════════════ INFOGRAPHIC BANNER ════════════════
          Whole-school overview: students-on-track, YoY uplift,
          AI-identified focus areas, time saved, on-demand reports */}
      <InfographicBanner
        src="/infographics/for-schools.png"
        alt="Infographic: whole-school insight, smarter decisions, stronger outcomes. Shows 68% of students on track, predicted +5-15% YoY improvement, AI-identified focus areas (analysing language, structuring writing, vocabulary range, reading inference, spelling), 4.5+ teacher hours and 12+ school hours saved per week, and on-demand reports for classes, year groups, students."
      />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <School className="w-4 h-4" />
            {heroBadge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            {heroTitle}
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroSub}
          </p>

          {/* Loom dashboard walk-through deferred until the recording is produced.
              Restore by inserting a 16:9 iframe with the Loom embed URL once available. */}

          <div className="mt-8 max-w-3xl mx-auto">
            <TrustBox variant="starter" />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base px-8 h-13 shadow-lg shadow-primary/25 gap-2 font-semibold"
              render={<Link href="/contact" />}
            >
              <Phone className="w-4 h-4" />
              {ctaBookCall}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13 border-primary/40 text-primary hover:bg-primary/10 gap-2 font-semibold"
              render={<Link href="/for-schools#pricing" />}
            >
              {ctaSeePricing}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {[
              await t('mkt.schools.fs.hero.pill.1'),
              await t('mkt.schools.fs.hero.pill.2'),
              await t('mkt.schools.fs.hero.pill.3'),
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FOUNDING SCHOOLS PROGRAMME BANNER ════════════════ */}
      <section className="border-y border-primary/30 bg-primary/[0.04]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <Badge className="bg-primary/15 text-primary border-primary/30 font-bold text-sm px-3 py-1">
                  {bannerBadge}
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
                {bannerTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">{bannerDesc}</p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[320px]">
              <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-6">
                <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                  {bannerWhatReceive}
                </p>
                <ul className="space-y-3">
                  {await Promise.all(
                    FOUNDING_BENEFIT_KEYS.map(async (benefitKey) => (
                      <li
                        key={benefitKey}
                        className="flex items-start gap-3 text-sm text-foreground/90"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {await t(benefitKey)}
                      </li>
                    )),
                  )}
                </ul>
                <Button
                  className="w-full font-semibold gap-2 mt-6"
                  render={<Link href="/contact" />}
                >
                  <Phone className="w-4 h-4" />
                  {ctaBookCall}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TRY BEFORE YOU BUY ════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/[0.06] text-primary mb-5 text-xs font-semibold uppercase tracking-wide gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              {await t('mkt.schools.fs.demo.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.demo.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              {await t('mkt.schools.fs.demo.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                icon: BarChart3,
                color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
                title: await t('mkt.schools.fs.demo.card.dashboard.title'),
                desc: await t('mkt.schools.fs.demo.card.dashboard.desc'),
                href: '/demo/school',
              },
              {
                icon: Users,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: await t('mkt.schools.fs.demo.card.analytics.title'),
                desc: await t('mkt.schools.fs.demo.card.analytics.desc'),
                href: '/demo/school/analytics',
              },
              {
                icon: FileText,
                color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
                title: await t('mkt.schools.fs.demo.card.reports.title'),
                desc: await t('mkt.schools.fs.demo.card.reports.desc'),
                href: '/demo/school/reports',
              },
              {
                icon: GraduationCap,
                color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
                title: await t('mkt.schools.fs.demo.card.teachers.title'),
                desc: await t('mkt.schools.fs.demo.card.teachers.desc'),
                href: '/demo/school/teachers',
              },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <Card className="p-6 border-border/40 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer h-full group">
                  <div
                    className={cn(
                      'w-11 h-11 rounded-xl flex items-center justify-center mb-4 border',
                      card.color,
                    )}
                  >
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {demoExplore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-lg shadow-primary/25 gap-2 font-bold"
              render={<Link href="/demo/school" />}
            >
              <Layers className="w-5 h-5" />
              {await t('mkt.schools.fs.demo.launch')}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {await t('mkt.schools.fs.demo.no_signup')}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ VALUE PROPOSITION ════════════════ */}
      <section className="py-24 sm:py-32 bg-card/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.value.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.value.body')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Founding School Programme */}
            <div className="relative rounded-2xl border-2 border-primary/40 bg-primary/[0.04] p-8 flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1">
                  {await t('mkt.schools.fs.value.founding_partner')}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {await t('mkt.schools.fs.value.programme_name')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {await t('mkt.schools.fs.value.programme_sub')}
                  </p>
                </div>
              </div>
              <div className="mb-6 space-y-3">
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3">
                  <span className="inline-block rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-2">
                    {await t('mkt.schools.fs.value.founding_tag')}
                  </span>
                  <p className="text-2xl font-extrabold text-foreground">
                    £{PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}{' '}
                    <span className="text-sm font-normal text-muted-foreground">
                      {await t('mkt.schools.fs.value.year')}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
                  <span className="inline-block rounded-full bg-muted/40 border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    {await t('mkt.schools.fs.value.standard_tag')}
                  </span>
                  <p className="text-2xl font-extrabold text-muted-foreground">
                    £{PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}{' '}
                    <span className="text-sm font-normal">
                      {await t('mkt.schools.fs.value.year')}
                    </span>
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 mt-2">
                    ⚡ {PRICING.PRICE_INCREASE_MESSAGE}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {await t('mkt.schools.fs.value.locked_note')}
                </p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  await t('mkt.schools.fs.value.feat.1'),
                  await t('mkt.schools.fs.value.feat.2'),
                  await t('mkt.schools.fs.value.feat.3'),
                  await t('mkt.schools.fs.value.feat.4'),
                  await t('mkt.schools.fs.value.feat.5'),
                  await t('mkt.schools.fs.value.feat.6'),
                  await t('mkt.schools.fs.value.feat.7'),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full font-semibold gap-2 mt-7" render={<Link href="/contact" />}>
                <Phone className="w-4 h-4" />
                {await t('mkt.schools.fs.value.cta_book')}
              </Button>
            </div>

            {/* Post-programme pricing teaser */}
            <div className="rounded-2xl border border-border/40 bg-card/40 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-muted/40 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {await t('mkt.schools.fs.value.post.title')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {await t('mkt.schools.fs.value.post.sub')}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-lg font-bold text-foreground">
                  {await t('mkt.schools.fs.value.post.higher')}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {await t('mkt.schools.fs.value.post.higher_sub')}
                </p>
              </div>
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 mb-6">
                <p className="text-sm font-semibold text-amber-600 mb-1">
                  {await t('mkt.schools.fs.value.post.why_join')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {await t('mkt.schools.fs.value.post.why_body')}
                </p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { label: await t('mkt.schools.fs.value.post.no_early'), available: false },
                  { label: await t('mkt.schools.fs.value.post.no_input'), available: false },
                  { label: await t('mkt.schools.fs.value.post.no_locked'), available: false },
                  { label: await t('mkt.schools.fs.value.post.no_recognition'), available: false },
                  {
                    label: await t('mkt.schools.fs.value.post.standard_onboarding'),
                    available: true,
                  },
                  { label: await t('mkt.schools.fs.value.post.full_access'), available: true },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    {row.available ? (
                      <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                    )}
                    {row.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {await t('mkt.schools.fs.value.reserved_note')}
          </p>
          <p className="text-center text-xs text-muted-foreground/80 mt-4 max-w-2xl mx-auto">
            {VAT_LABEL}
          </p>
        </div>
      </section>

      {/* ════════════════ FEATURE SHOWCASE ════════════════ */}
      <section id="features" className="py-24 sm:py-32 border-b border-border/40 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {sectionFeaturesTitle}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {sectionFeaturesSub}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.showcase.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformFeatures.map((item) => (
              <Card
                key={item.title}
                className={cn(
                  'p-6 flex flex-col border-border/40 hover:border-border/70 transition-all duration-300 hover:shadow-lg hover:shadow-black/5',
                )}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5 border',
                    item.color,
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CONTENT CREATION PREVIEW ════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
              >
                {await t('mkt.schools.fs.content.eyebrow')}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-5">
                {await t('mkt.schools.fs.content.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {await t('mkt.schools.fs.content.body')}
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  await t('mkt.schools.fs.content.point.1'),
                  await t('mkt.schools.fs.content.point.2'),
                  await t('mkt.schools.fs.content.point.3'),
                  await t('mkt.schools.fs.content.point.4'),
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="border-border/60 gap-2"
                render={<Link href="/demo" />}
              >
                {await t('mkt.schools.fs.content.cta')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {contentCreationItems.map((item) => (
                <Card
                  key={item.label}
                  className="p-5 border-border/40 hover:border-border/60 transition-colors duration-300"
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
                      item.color,
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-foreground mb-1.5">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
              <div className="col-span-2">
                <div className="rounded-xl border border-border/40 bg-card/60 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {await t('mkt.schools.fs.content.gen.title')}
                    </p>
                  </div>
                  <div className="bg-background/60 rounded-lg border border-border/40 p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      {await t('mkt.schools.fs.content.gen.prompt')}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {await t('mkt.schools.fs.content.gen.example')}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-primary/20">
                        <div className="h-1.5 w-3/4 rounded-full bg-primary animate-pulse" />
                      </div>
                      <span className="text-xs text-primary font-medium">
                        {await t('mkt.schools.fs.content.gen.generating')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ ANALYTICS PREVIEW ════════════════ */}
      <section className="py-24 sm:py-32 bg-card/20 border-y border-border/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Analytics mock-up */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-xl shadow-black/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-bold text-foreground">
                      {await t('mkt.schools.fs.analytics.dept_overview')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {await t('mkt.schools.fs.analytics.all_groups')}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 text-teal-700 bg-emerald-500/10 text-xs"
                  >
                    {await t('mkt.schools.fs.analytics.live')}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {analyticsMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-background/60 border border-border/40 p-4"
                    >
                      <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                      <p className={cn('text-2xl font-extrabold', metric.color)}>{metric.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{metric.trend}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-background/60 border border-border/40 p-4">
                  <p className="text-xs font-semibold text-foreground mb-3">
                    {await t('mkt.schools.fs.analytics.year_comparison')}
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Year 11', pct: 78, color: 'bg-primary' },
                      { label: 'Year 10', pct: 64, color: 'bg-blue-400' },
                      { label: 'Year 9', pct: 71, color: 'bg-emerald-400' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-14 shrink-0">
                          {row.label}
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-muted/40">
                          <div
                            className={cn('h-2 rounded-full', row.color)}
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-foreground w-8 text-right">
                          {row.pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge
                variant="outline"
                className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
              >
                {await t('mkt.schools.fs.analytics.eyebrow')}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-5">
                {await t('mkt.schools.fs.analytics.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {await t('mkt.schools.fs.analytics.body')}
              </p>
              <ul className="space-y-4">
                {[
                  await t('mkt.schools.fs.analytics.point.1'),
                  await t('mkt.schools.fs.analytics.point.2'),
                  await t('mkt.schools.fs.analytics.point.3'),
                  await t('mkt.schools.fs.analytics.point.4'),
                  await t('mkt.schools.fs.analytics.point.5'),
                  await t('mkt.schools.fs.analytics.point.6'),
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-primary/[0.06] border border-primary/20 p-4">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {await t('mkt.schools.fs.analytics.disclaimer')}
                </p>
              </div>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 gap-2 font-semibold"
                  render={<Link href="/demo/school/analytics" />}
                >
                  <BarChart3 className="w-4 h-4" />
                  {await t('mkt.schools.fs.analytics.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ USER MANAGEMENT ════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {await t('mkt.schools.fs.users.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.users.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.users.body')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: Settings,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: await t('mkt.schools.fs.users.admin.title'),
                points: [
                  await t('mkt.schools.fs.users.admin.point.1'),
                  await t('mkt.schools.fs.users.admin.point.2'),
                  await t('mkt.schools.fs.users.admin.point.3'),
                  await t('mkt.schools.fs.users.admin.point.4'),
                ],
              },
              {
                icon: Upload,
                color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
                title: await t('mkt.schools.fs.users.excel.title'),
                points: [
                  await t('mkt.schools.fs.users.excel.point.1'),
                  await t('mkt.schools.fs.users.excel.point.2'),
                  await t('mkt.schools.fs.users.excel.point.3'),
                  await t('mkt.schools.fs.users.excel.point.4'),
                ],
              },
              {
                icon: UserPlus,
                color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
                title: await t('mkt.schools.fs.users.self.title'),
                points: [
                  await t('mkt.schools.fs.users.self.point.1'),
                  await t('mkt.schools.fs.users.self.point.2'),
                  await t('mkt.schools.fs.users.self.point.3'),
                  await t('mkt.schools.fs.users.self.point.4'),
                ],
              },
            ].map((card) => (
              <Card key={card.title} className="p-6 border-border/40">
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5 border',
                    card.color,
                  )}
                >
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Excel template visual */}
          <div className="rounded-2xl border border-border/40 bg-card/60 p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Table className="w-4 h-4 text-teal-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  student-upload-template.xlsx
                </p>
                <p className="text-xs text-muted-foreground">
                  {await t('mkt.schools.fs.users.template.sub')}
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border/40 overflow-hidden text-xs">
              <div className="grid grid-cols-4 bg-muted/40 text-muted-foreground font-semibold">
                {[
                  await t('mkt.schools.fs.users.template.col.first'),
                  await t('mkt.schools.fs.users.template.col.last'),
                  await t('mkt.schools.fs.users.template.col.email'),
                  await t('mkt.schools.fs.users.template.col.year'),
                ].map((h) => (
                  <div key={h} className="px-3 py-2 border-r border-border/30 last:border-r-0">
                    {h}
                  </div>
                ))}
              </div>
              {[
                ['Sophie', 'Williams', 's.williams@school.ac.uk', 'Year 11'],
                ['James', 'Patel', 'j.patel@school.ac.uk', 'Year 11'],
                ['Amara', 'Johnson', 'a.johnson@school.ac.uk', 'Year 10'],
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 border-t border-border/30 text-muted-foreground"
                >
                  {row.map((cell, j) => (
                    <div key={j} className="px-3 py-2 border-r border-border/30 last:border-r-0">
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
              <div className="grid grid-cols-4 border-t border-border/30 text-muted-foreground/40 italic">
                {['...', '...', '...', '...'].map((cell, j) => (
                  <div key={j} className="px-3 py-2 border-r border-border/30 last:border-r-0">
                    {cell}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              {await t('mkt.schools.fs.users.template.note')}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <section className="py-24 sm:py-32 bg-card/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {await t('mkt.schools.fs.getting_started.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.getting_started.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.getting_started.body')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-start">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%-1rem)] w-8 h-px bg-border/60" />
                )}
                <div
                  className={cn(
                    'w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border',
                    step.color,
                  )}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="text-5xl font-black text-foreground/[0.05] absolute top-0 right-0 leading-none">
                  {step.step}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  {gettingStartedStep} {step.step}
                </p>
                <h3 className="font-bold text-foreground text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20 gap-2 font-semibold"
              render={<Link href="/contact" />}
            >
              <Phone className="w-4 h-4" />
              {await t('mkt.schools.fs.getting_started.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {await t('mkt.schools.fs.testi.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.testi.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.testi.body')}
            </p>
          </div>

          {TESTIMONIALS.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="p-6 border-border/40 flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-primary/15 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0',
                        t.color,
                      )}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.school}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 border-dashed border-border/60 bg-card/40">
                <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground italic">
                  {await t('mkt.schools.fs.testi.empty')}
                </p>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE ════════════════ */}
      <section className="py-24 sm:py-32 bg-card/20 border-y border-border/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {await t('mkt.schools.fs.compare.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.compare.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.compare.body')}
            </p>
          </div>

          <div className="rounded-2xl border border-border/40 overflow-hidden">
            <div className="grid grid-cols-3 bg-card text-sm font-semibold">
              <div className="px-5 py-4 text-foreground border-r border-border/40">
                {await t('mkt.schools.fs.compare.col.feature')}
              </div>
              <div className="px-5 py-4 text-primary text-center border-r border-border/40">
                {await t('mkt.schools.fs.compare.col.school')}
                <div className="text-xs font-normal text-muted-foreground">
                  {await t('mkt.schools.fs.compare.col.school_founding')}{' '}
                  <span className="text-muted-foreground/60 line-through">£8,000</span>
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-amber-600 mt-0.5">
                  {await t('mkt.schools.fs.compare.col.school_first10')}
                </div>
              </div>
              <div className="px-5 py-4 text-muted-foreground text-center">
                {await t('mkt.schools.fs.compare.col.individual')}
                <div className="text-xs font-normal">
                  {await t('mkt.schools.fs.compare.col.per_student')}
                </div>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  'grid grid-cols-3 text-sm border-t border-border/40',
                  i % 2 === 0 ? 'bg-background/40' : 'bg-card/40',
                )}
              >
                <div className="px-5 py-3.5 text-foreground/80 border-r border-border/40">
                  {row.feature}
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center border-r border-border/40">
                  {row.school ? (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  ) : (
                    <X className="w-4 h-4 text-destructive/50" />
                  )}
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center">
                  {row.individual ? (
                    <CheckCircle className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <X className="w-4 h-4 text-destructive/50" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground/80 mt-6 max-w-2xl mx-auto">
            {VAT_LABEL}
          </p>
        </div>
      </section>

      {/* ════════════════ COMPLIANCE PACK ════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Compliance documents will be published here once finalised. Currently available on request. */}
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {await t('mkt.schools.fs.compliance.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {await t('mkt.schools.fs.compliance.body_pre')}{' '}
              <a
                href="mailto:legal@theenglishhub.app"
                className="text-primary underline underline-offset-4"
              >
                legal@theenglishhub.app
              </a>{' '}
              {await t('mkt.schools.fs.compliance.body_post')}
            </p>
            <ul className="space-y-2 mb-4 text-muted-foreground">
              <li>
                {await t('mkt.schools.fs.compliance.dpa')}{' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  {await t('mkt.schools.fs.compliance.dpa_note')}
                </span>
              </li>
              <li>
                {await t('mkt.schools.fs.compliance.dpia')}{' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  {await t('mkt.schools.fs.compliance.dpia_note')}
                </span>
              </li>
              <li>
                {await t('mkt.schools.fs.compliance.safeguard')}{' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  {await t('mkt.schools.fs.compliance.safeguard_note')}
                </span>
              </li>
              <li>
                {await t('mkt.schools.fs.compliance.cyber')}{' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  {await t('mkt.schools.fs.compliance.cyber_note')}
                </span>
              </li>
              <li>
                {await t('mkt.schools.fs.compliance.vpat')}{' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  {await t('mkt.schools.fs.compliance.vpat_note')}
                </span>
              </li>
            </ul>
            <p className="text-sm text-slate-600">
              ICO ref: ZC016690 · Hosting via EU-region cloud sub-processors (Supabase, Vercel) ·
              Full sub-processor list with purpose and location on request (legal@theenglishhub.app)
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ FAQs ════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-border/50 text-muted-foreground mb-5 text-xs font-semibold uppercase tracking-wide"
            >
              {await t('mkt.schools.fs.faq.badge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.faq.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {await t('mkt.schools.fs.faq.sub')}
            </p>
          </div>

          <div className="space-y-3">
            {resolvedFaqs.map((faq) => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
          <FAQPageJsonLd faqs={resolvedFaqs} />

          <p className="text-center text-sm text-muted-foreground mt-10">
            {await t('mkt.schools.fs.faq.contact_pre')}{' '}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              {await t('mkt.schools.fs.faq.contact_book')}
            </Link>{' '}
            {await t('mkt.schools.fs.faq.contact_or_email')}{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              info@Upskillenergy.com
            </a>{' '}
            {await t('mkt.schools.fs.faq.contact_post')}
          </p>
        </div>
      </section>

      {/* ════════════════ BOOK A CALL / CONTACT FORM ════════════════ */}
      <section
        id="demo"
        className="py-24 sm:py-32 bg-card/20 border-y border-border/40 scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 items-center justify-center mb-6 border border-primary/20">
              <CalendarCheck className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {await t('mkt.schools.fs.book.title')}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              {await t('mkt.schools.fs.book.body')}
            </p>
          </div>

          <Card className="p-6 sm:p-8 border-border/40">
            <BookCallForm />
          </Card>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-primary/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Badge className="bg-primary/15 text-primary border-primary/30 font-bold text-sm px-4 py-1.5 mb-8 gap-2">
            <Award className="w-4 h-4" />
            {finalCtaBadge}
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-5">
            {finalCtaTitle} <span className="text-primary">{finalCtaTitleEmphasis}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {finalCtaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-xl shadow-primary/25 gap-2 font-bold"
              render={<Link href="/contact" />}
            >
              <Phone className="w-5 h-5" />
              {ctaBookCall}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13 border-border/60 gap-2"
              render={<Link href="/demo" />}
            >
              <Eye className="w-4 h-4" />
              {ctaViewDemo}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-6">{finalCtaNoObligation}</p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            {finalCtaEmailDirect}{' '}
            <a href="mailto:info@Upskillenergy.com" className="text-primary hover:underline">
              info@Upskillenergy.com
            </a>
          </p>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="border-t border-border/40 bg-card/20">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5 text-primary" />
                The English Hub
              </Link>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                {await t('mkt.schools.fs.footer.tagline')}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { label: await t('mkt.schools.fs.footer.link.schools'), href: '/for-schools' },
                { label: await t('mkt.schools.fs.footer.link.courses'), href: '/courses' },
                { label: await t('mkt.schools.fs.footer.link.practice'), href: '/practice' },
                { label: await t('mkt.schools.fs.footer.link.revision'), href: '/revision' },
                { label: await t('mkt.schools.fs.footer.link.login'), href: '/auth/login' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground/70 space-y-1">
            <p>
              &copy; {new Date().getFullYear()} The English Hub.{' '}
              {await t('mkt.schools.fs.footer.rights')}
            </p>
            <p>
              <a
                href="mailto:info@Upskillenergy.com"
                className="hover:text-foreground transition-colors"
              >
                info@Upskillenergy.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
