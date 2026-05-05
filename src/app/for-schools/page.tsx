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
  title: 'Whole-department English platform for UK schools — The English Hub',
  description:
    'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
  alternates: { canonical: 'https://theenglishhub.app/for-schools' },
  openGraph: {
    title: 'Whole-department English platform for UK schools — The English Hub',
    description:
      'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
    images: [
      {
        url: '/api/og?title=English+platform+for+UK+schools&subtitle=Whole+department,+one+place',
        width: 1200,
        height: 630,
        alt: 'English platform for UK schools — whole department, one place',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole-department English platform for UK schools — The English Hub',
    description:
      'AI lesson planning, AI essay marking, department analytics, and resources mapped to your exam board. Founding Schools programme open now.',
    images: ['/api/og?title=English+platform+for+UK+schools&subtitle=Whole+department,+one+place'],
  },
}

/* ─────────────── Founding Schools Programme Benefits ─────────────── */

const FOUNDING_BENEFITS = [
  'Full platform access for ALL students and ALL teachers',
  'Early access to new features before general release',
  'Direct product input -- help shape the platform',
  'Priority onboarding and dedicated support',
  'Locked preferential pricing for 2-3 years',
  'Founding partner recognition on the platform',
]

/* ─────────────── Feature Cards ─────────────── */

const PLATFORM_FEATURES = [
  {
    icon: BarChart3,
    color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    title: 'Department Analytics Dashboard',
    // TODO(founder): verify the Ofsted-aligned report templates are live before this claim ships to a school. Soften if not.
    desc: 'Real-time progress across every year group. Spot at-risk students early, compare class performance, and generate department reports aligned to common Ofsted English subject deep-dive criteria — ready to share at your next inspection.',
  },
  {
    icon: BookOpen,
    color: 'text-primary bg-primary/10 border-primary/20',
    title: 'Lesson Builder & Resource Library',
    desc: 'Instantly generate lesson plans, worksheets, and presentations from the platform. A growing library of resources mapped to AQA, Edexcel, OCR, WJEC and Cambridge IGCSE specifications.',
  },
  {
    icon: Brain,
    color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
    title: 'AI Essay Feedback',
    desc: 'Students get instant, detailed feedback on their essays based on exam board mark schemes. Frees up teacher time while keeping every student on track.',
  },
  {
    icon: ClipboardList,
    color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
    title: 'Homework Management',
    desc: 'Set assignments in seconds, track completion automatically, and let the platform handle routine marking. Teachers reclaim hours every week.',
  },
  {
    icon: FileText,
    color: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    title: 'Progress Reports',
    desc: 'Auto-generated progress reports for parents, heads of year, and senior leadership. Always up to date, always audit-ready.',
  },
  {
    icon: GraduationCap,
    color: 'text-red-600 bg-red-500/10 border-red-500/20',
    title: 'Teacher CPD & Onboarding',
    desc: 'Built-in CPD materials and guided onboarding walkthroughs so every member of your department is confident and productive from day one.',
  },
]

/* ─────────────── Content Creation Preview ─────────────── */

const CONTENT_CREATION_ITEMS = [
  {
    icon: FileText,
    color: 'text-primary bg-primary/10',
    label: 'Lesson Plans',
    desc: 'Full lesson plans mapped to your exam board specification, generated in under 30 seconds.',
  },
  {
    icon: Layout,
    color: 'text-blue-600 bg-blue-500/10',
    label: 'Worksheets',
    desc: 'Printable, editable worksheets aligned to any topic or text your class is studying.',
  },
  {
    icon: Presentation,
    color: 'text-purple-600 bg-purple-500/10',
    label: 'Presentations',
    desc: 'Classroom-ready slide decks with teacher notes, discussion prompts, and learning objectives.',
  },
  {
    icon: ClipboardList,
    color: 'text-teal-700 bg-emerald-500/10',
    label: 'Assessments',
    desc: 'Practice papers and formative assessments with auto-marking for multiple choice and short answer.',
  },
]

/* ─────────────── Analytics Preview ─────────────── */

const ANALYTICS_METRICS = [
  { label: 'Year 11 Avg Score', value: '72%', trend: '+4% this month', color: 'text-primary' },
  {
    label: 'At-Risk Students',
    value: '3',
    trend: 'Flagged for intervention',
    color: 'text-amber-600',
  },
  {
    label: 'Completion Rate',
    value: '89%',
    trend: 'Across all year groups',
    color: 'text-teal-700',
  },
  { label: 'Top Performing Class', value: '11B', trend: '84% average', color: 'text-blue-600' },
]

/* ─────────────── How It Works ─────────────── */

const HOW_IT_WORKS = [
  {
    step: '1',
    icon: Phone,
    color: 'text-primary bg-primary/10 border-primary/20',
    title: 'Book a 20-Minute Call',
    desc: 'Speak with our schools team. We will walk you through the platform, discuss your department needs, and agree a tailored package. No obligation.',
  },
  {
    step: '2',
    icon: Upload,
    color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    title: 'We Set Up Your School',
    desc: 'We handle onboarding for you. Your exam board is configured, accounts are created in bulk, and your admin dashboard is ready to go.',
  },
  {
    step: '3',
    icon: Zap,
    color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
    title: 'Everyone Has Instant Access',
    desc: 'Students and teachers receive login details and can start using the full platform immediately. Your admin dashboard is live from day one.',
  },
]

/* ─────────────── Pricing Comparison ─────────────── */

const COMPARISON_ROWS = [
  { feature: 'Unlimited students', school: true, individual: false },
  { feature: 'Unlimited teachers', school: true, individual: false },
  { feature: 'Department analytics', school: true, individual: false },
  { feature: 'Bulk Excel upload', school: true, individual: false },
  { feature: 'Admin controls', school: true, individual: false },
  { feature: 'Homework management', school: true, individual: false },
  { feature: 'Progress reports', school: true, individual: false },
  { feature: 'Ofsted-aligned department reporting', school: true, individual: false },
  { feature: 'AI essay feedback', school: true, individual: true },
  { feature: 'Resource library mapped to your exam board', school: true, individual: true },
  { feature: 'Content tailored to your exam board', school: true, individual: true },
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

const FAQS = [
  {
    question: 'What is the Founding Schools Programme?',
    answer:
      'The Founding Schools Programme is a strategic partnership for the 2026 academic year. The first 10 schools to sign are designated as founding partners and receive early features, direct product input, priority onboarding, founding partner recognition, and locked preferential pricing for 2-3 years. Additional schools are welcome on the platform at standard rates once the founding cohort closes. This is not a free trial -- it is a discounted, long-term partnership tailored to your department size.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Founding Schools Programme pricing starts at £4,000 per year for the first 10 schools only -- heavily anchored against our projected Standard Pricing of £8,000 per year from August 2026. Exact package scales with department size and is agreed during your onboarding call. Schools that joined in wave 1 at £3,000 are grandfathered at that rate. Book a call to lock in your founding price before the cohort closes.',
  },
  {
    question: 'How do students and teachers get access?',
    answer:
      'Once your school is onboarded, we set up your admin account and bulk-create all student and teacher accounts for you. Students and teachers can also join by entering your unique school code when they register themselves.',
  },
  {
    question: 'How does the Excel bulk upload work?',
    answer:
      'Download our simple Excel template from your admin dashboard. Add your students and teachers (name, email, year group), save the file, and upload it. The platform creates all accounts instantly and sends login details by email. No IT support or technical setup required.',
  },
  {
    question: 'What admin controls does the school have?',
    answer:
      'Your school admin account lets you manage all student and teacher accounts, view department-wide analytics, set and track assignments, generate progress reports, and control which features are visible to students. You can also create sub-admin accounts for heads of year or class teachers.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer:
      "We support all major boards: AQA, Edexcel, OCR, WJEC/Eduqas, and IGCSE/CAIE. Your school selects one exam board during setup and all content -- lessons, resources, mark schemes, and AI feedback -- is tailored to that board's specification.",
  },
  {
    question: 'Is the platform GDPR compliant?',
    answer:
      'Yes. We are fully GDPR compliant. All student data is stored securely on UK-based servers. We do not share data with third parties, run no advertising or tracking on the platform, and can sign a Data Processing Agreement with your school.',
  },
  {
    question: 'What happens after the Founding Schools Programme?',
    answer:
      'Founding schools lock in preferential pricing for 2-3 years. Post-programme standard pricing will be significantly higher. The exact terms are agreed during your onboarding call.',
  },
]

/* FAQItem moved to src/components/for-schools/FAQItem.tsx as a client
   island so this page can render server-side. */

/* ─────────────── Main Page ─────────────── */

export default function ForSchoolsPage() {
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
            For Schools &amp; Multi-Academy Trusts
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Whole-department English platform for UK schools
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bulk onboarding, teacher dashboards, AI essay marking, and Head&apos;s Reports &mdash;
            see what every department gets when they join.
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
              Book a 20-min call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13 border-primary/40 text-primary hover:bg-primary/10 gap-2 font-semibold"
              render={<Link href="/for-schools#pricing" />}
            >
              See pricing
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {[
              'Only 10 founding schools',
              'Significant time saved on planning and marking',
              'Ofsted-aligned department reporting',
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
                  FIRST 10 SCHOOLS &mdash; FOUNDING PARTNER PRICING
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
                Founding Schools Programme &mdash; 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                We are partnering with the first 10 schools to sign as founding partners to shape
                the future of English teaching. This is not a free trial &mdash; it is a strategic
                partnership. Founding schools receive heavily discounted pricing, early features,
                direct product input, and locked preferential rates for 2-3 years. Schools joining
                after the founding cohort are welcome at our standard rates.
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[320px]">
              <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-6">
                <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                  What founding schools receive
                </p>
                <ul className="space-y-3">
                  {FOUNDING_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full font-semibold gap-2 mt-6"
                  render={<Link href="/contact" />}
                >
                  <Phone className="w-4 h-4" />
                  Book a 20-Minute Call
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
              Interactive Demo
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Explore the Full Platform -- No Signup Required
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Navigate a complete school dashboard with sample data. Click through students,
              classes, analytics, and reports. See exactly what your school gets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                icon: BarChart3,
                color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
                title: 'School Dashboard',
                desc: 'Overview of all year groups',
                href: '/demo/school',
              },
              {
                icon: Users,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: 'Student Analytics',
                desc: 'Drill down to individual student level',
                href: '/demo/school/analytics',
              },
              {
                icon: FileText,
                color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
                title: 'Class Reports',
                desc: 'Personalised reports per class',
                href: '/demo/school/reports',
              },
              {
                icon: GraduationCap,
                color: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
                title: 'Teacher Insights',
                desc: 'See teacher-level performance data',
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
                    Explore
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
              Launch Interactive Demo
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No signup, no email, completely free to explore
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ VALUE PROPOSITION ════════════════ */}
      <section className="py-24 sm:py-32 bg-card/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Why Schools Join the Founding Programme
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Founding schools get more than a platform -- they get a partnership that shapes the
              future of English teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Founding School Programme */}
            <div className="relative rounded-2xl border-2 border-primary/40 bg-primary/[0.04] p-8 flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1">
                  FOUNDING PARTNER
                </Badge>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Founding Schools Programme</p>
                  <p className="text-xs text-muted-foreground">
                    First 10 schools -- 2026 founding rate
                  </p>
                </div>
              </div>
              <div className="mb-6 space-y-3">
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3">
                  <span className="inline-block rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-2">
                    Founding Pricing · 10 only
                  </span>
                  <p className="text-2xl font-extrabold text-foreground">
                    £{PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}{' '}
                    <span className="text-sm font-normal text-muted-foreground">/ year</span>
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
                  <span className="inline-block rounded-full bg-muted/40 border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Standard Pricing (estimated)
                  </span>
                  <p className="text-2xl font-extrabold text-muted-foreground">
                    £{PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}{' '}
                    <span className="text-sm font-normal">/ year</span>
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 mt-2">
                    ⚡ {PRICING.PRICE_INCREASE_MESSAGE}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Founding rate locked for 2&ndash;3 years. Tailored to your department size and
                  discussed during your onboarding call.
                </p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  'Full platform access -- all features, all students, all teachers',
                  'Choose your exam board (AQA, Edexcel, OCR, WJEC, IGCSE/CAIE)',
                  'Early access to new features',
                  'Direct product input and feedback loop',
                  'Priority onboarding and dedicated support',
                  'Locked preferential pricing for 2-3 years',
                  'Founding partner recognition',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full font-semibold gap-2 mt-7" render={<Link href="/contact" />}>
                <Phone className="w-4 h-4" />
                Book a Call to Discuss
              </Button>
            </div>

            {/* Post-programme pricing teaser */}
            <div className="rounded-2xl border border-border/40 bg-card/40 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-muted/40 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Post-Programme Pricing</p>
                  <p className="text-xs text-muted-foreground">After the founding cohort closes</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-lg font-bold text-foreground">Significantly higher</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Standard pricing will reflect the full value of the platform.
                </p>
              </div>
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 mb-6">
                <p className="text-sm font-semibold text-amber-600 mb-1">Why join now?</p>
                <p className="text-sm text-muted-foreground">
                  The first 10 schools to sign lock in founding-partner rates for 2-3 years. Schools
                  joining after the founding cohort closes pay standard (higher) rates.
                </p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  { label: 'No early features access', available: false },
                  { label: 'No direct product input', available: false },
                  { label: 'No locked preferential pricing', available: false },
                  { label: 'No founding partner recognition', available: false },
                  { label: 'Standard onboarding', available: true },
                  { label: 'Full platform access', available: true },
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
            Founding partner pricing is reserved for the first 10 schools to sign. Book a call to
            secure your founding place -- later schools are welcome at standard rates.
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
              Platform Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Everything Your Department Needs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Built to raise attainment, reduce workload, and give leadership full visibility across
              every class and year group.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLATFORM_FEATURES.map((item) => (
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
                For Teachers
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-5">
                Generate Lessons, Worksheets &amp; Presentations Instantly
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Stop spending evenings making resources. Teachers on The English Hub can instantly
                generate fully-formed lesson plans, printable worksheets, and classroom
                presentations from the platform -- all mapped to your exam board specification.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Lesson plans with teacher notes and differentiation built in',
                  'Printable worksheets editable before download',
                  'Slide decks with learning objectives and discussion prompts',
                  'Practice assessments with auto-marking',
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
                See It in a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CONTENT_CREATION_ITEMS.map((item) => (
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
                    <p className="text-sm font-semibold text-foreground">AI Lesson Generator</p>
                  </div>
                  <div className="bg-background/60 rounded-lg border border-border/40 p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Generate a lesson plan for...
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      &quot;AQA Language Paper 2 -- Viewpoints &amp; Perspectives, Year 11&quot;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-primary/20">
                        <div className="h-1.5 w-3/4 rounded-full bg-primary animate-pulse" />
                      </div>
                      <span className="text-xs text-primary font-medium">Generating...</span>
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
                    <p className="font-bold text-foreground">Department Overview</p>
                    <p className="text-xs text-muted-foreground">All Year Groups -- Live Data</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 text-teal-700 bg-emerald-500/10 text-xs"
                  >
                    Live
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {ANALYTICS_METRICS.map((metric) => (
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
                    Year Group Comparison
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
                For School Leaders
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-5">
                Real-Time Progress Across Every Year Group
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                School admins and heads of department get a live overview of progress across all
                classes and year groups. Identify at-risk students before results day. Compare class
                performance. Generate department reports aligned to common Ofsted English subject
                deep-dive criteria.
              </p>
              <ul className="space-y-4">
                {[
                  'Live dashboard across all year groups and classes',
                  'At-risk student alerts with suggested interventions',
                  'Class-by-class and student-by-student drill down',
                  'Department reports aligned to Ofsted English subject deep-dive criteria',
                  'Comparison against previous cohorts and national averages',
                  'Predicted grades for students who miss exams, based on continuous assessment and mock performance',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-primary/[0.06] border border-primary/20 p-4">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Our platform provides predicted grades based on continuous assessment, mock
                  performance, and coursework data &mdash; supporting fair outcomes when students
                  miss exams for any reason.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 gap-2 font-semibold"
                  render={<Link href="/demo/school/analytics" />}
                >
                  <BarChart3 className="w-4 h-4" />
                  See Full Demo
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
              Admin Controls
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Bulk Upload. Instant Access. Zero Friction.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              No IT department needed. Get your entire school live in one afternoon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: Settings,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: 'School Admin Account',
                points: [
                  'Manage all student and teacher accounts',
                  'Create sub-admin accounts for teachers',
                  'Set school-wide and class-level permissions',
                  'View department-wide analytics',
                ],
              },
              {
                icon: Upload,
                color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
                title: 'Excel Bulk Upload',
                points: [
                  'Download our simple Excel template',
                  'Add names, emails, year groups',
                  'Upload once -- all accounts created instantly',
                  'Login details sent to each student and teacher',
                ],
              },
              {
                icon: UserPlus,
                color: 'text-teal-700 bg-emerald-500/10 border-emerald-500/20',
                title: 'Self-Registration Option',
                points: [
                  'Share your unique school code',
                  'Students register themselves using the code',
                  'Auto-linked to your school account',
                  'Admin approval toggle available',
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
                <p className="text-xs text-muted-foreground">Download from your admin dashboard</p>
              </div>
            </div>
            <div className="rounded-lg border border-border/40 overflow-hidden text-xs">
              <div className="grid grid-cols-4 bg-muted/40 text-muted-foreground font-semibold">
                {['First Name', 'Last Name', 'Email', 'Year Group'].map((h) => (
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
              Upload this file and all accounts are created instantly. No IT support needed.
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
              Getting Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Up and Running in 3 Steps
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Most schools are fully live within a single afternoon. No IT department required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
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
                  Step {step.step}
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
              Book a 20-Minute Call
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
              From Schools Using the Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Founding teachers' words, coming soon.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We are launching now. Real testimonials will appear here as the first Founding Schools
              join the programme. Be one of them.
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
                  We are at launch and we say so plainly. As Founding Schools come on board, their
                  teachers' words will sit here — verified, attributable, and used only with
                  explicit consent.
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
              Value Comparison
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              School Partnership vs Individual Subscriptions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              The school partnership is not just better value -- it unlocks features that individual
              subscriptions simply do not include.
            </p>
          </div>

          <div className="rounded-2xl border border-border/40 overflow-hidden">
            <div className="grid grid-cols-3 bg-card text-sm font-semibold">
              <div className="px-5 py-4 text-foreground border-r border-border/40">Feature</div>
              <div className="px-5 py-4 text-primary text-center border-r border-border/40">
                School Partnership
                <div className="text-xs font-normal text-muted-foreground">
                  Founding: £4,000/year{' '}
                  <span className="text-muted-foreground/60 line-through">£8,000</span>
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-amber-600 mt-0.5">
                  First 10 schools only
                </div>
              </div>
              <div className="px-5 py-4 text-muted-foreground text-center">
                Individual Subs
                <div className="text-xs font-normal">Per student</div>
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
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
              Compliance pack — available on request
            </h3>
            <p className="text-muted-foreground mb-4">
              For DPOs and bursars. Email{' '}
              <a
                href="mailto:legal@theenglishhub.app"
                className="text-primary underline underline-offset-4"
              >
                legal@theenglishhub.app
              </a>{' '}
              and we will send the latest versions within one working day.
            </p>
            <ul className="space-y-2 mb-4 text-muted-foreground">
              <li>
                Data Processing Agreement (Word){' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  — coming soon
                </span>
              </li>
              <li>
                Data Protection Impact Assessment (PDF){' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  — coming soon
                </span>
              </li>
              <li>
                Safeguarding Policy (PDF){' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  — coming soon
                </span>
              </li>
              <li>
                Cyber Essentials certificate (filing Q3 2026){' '}
                <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  — coming soon
                </span>
              </li>
            </ul>
            <p className="text-sm text-slate-600">
              ICO ref: ZC016690 · Hosting: Supabase (EU) + Vercel (EU) · Sub-processors list on
              request (legal@theenglishhub.app)
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
              FAQs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Everything you need to know about The English Hub for schools.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
          <FAQPageJsonLd faqs={FAQS} />

          <p className="text-center text-sm text-muted-foreground mt-10">
            Got a question not answered here?{' '}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Book a call
            </Link>{' '}
            or email{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              info@Upskillenergy.com
            </a>{' '}
            and we will get back to you within one working day.
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
              Book a 20-Minute Call
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Speak with our schools team. We will walk you through the platform, discuss pricing
              tailored to your department, and answer every question you have.
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
            ONLY 10 FOUNDING SCHOOLS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-5">
            Join the Founding Schools Programme{' '}
            <span className="text-primary">Before It Closes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
            First 10 schools get founding-partner pricing, locked for 2-3 years. Early features.
            Direct product input. Additional schools welcome at standard rates after the cohort
            closes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-xl shadow-primary/25 gap-2 font-bold"
              render={<Link href="/contact" />}
            >
              <Phone className="w-5 h-5" />
              Book a 20-Minute Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13 border-border/60 gap-2"
              render={<Link href="/demo" />}
            >
              <Eye className="w-4 h-4" />
              View the Demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-6">
            No obligation. No hard sell. Just a conversation about whether the programme is right
            for your school.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Or email us directly at{' '}
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
                Expert English courses for KS3, GCSE, IGCSE, and all major exam boards.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { label: 'For Schools', href: '/for-schools' },
                { label: 'Courses', href: '/courses' },
                { label: 'Practice', href: '/practice' },
                { label: 'Revision', href: '/revision' },
                { label: 'Log in', href: '/auth/login' },
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
            <p>&copy; {new Date().getFullYear()} The English Hub. All rights reserved.</p>
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
