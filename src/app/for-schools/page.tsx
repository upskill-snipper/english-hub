'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  BookOpen,
  GraduationCap,
  Award,
  Shield,
  CheckCircle,
  ChevronDown,
  Sparkles,
  Users,
  BarChart3,
  ClipboardList,
  School,
  Building2,
  Send,
  FileQuestion,
  Layers,
  Monitor,
  Clock,
  UserPlus,
  Quote,
} from 'lucide-react'

/* ───────────────────── School Pricing Tiers ───────────────────── */

const SCHOOL_TIERS = [
  {
    name: 'Department',
    seats: 'Up to 50 students',
    price: '£500',
    period: '/year',
    perStudent: '£10/student',
    icon: Users,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    features: [
      'Full access for up to 50 students',
      'Teacher dashboard & analytics',
      'Bulk student onboarding',
      'Priority email support',
    ],
  },
  {
    name: 'School',
    seats: 'Up to 200 students',
    price: '£1,500',
    period: '/year',
    perStudent: '£7.50/student',
    icon: School,
    color: 'text-primary bg-primary/10 border-primary/20',
    popular: true,
    features: [
      'Full access for up to 200 students',
      'Teacher dashboard & analytics',
      'Bulk student onboarding',
      'Progress reports for parents',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Multi-Academy Trust',
    seats: 'Unlimited students',
    price: '£2,000',
    period: '/year per school',
    perStudent: 'Best value',
    icon: Building2,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    features: [
      'Unlimited students per school',
      'Trust-wide analytics dashboard',
      'Bulk student onboarding',
      'Centralised billing',
      'Dedicated account manager',
      'Custom onboarding session',
    ],
  },
]

/* ───────────────────── Features for Schools ───────────────────── */

const SCHOOL_FEATURES = [
  {
    icon: BookOpen,
    color: 'text-primary bg-primary/10',
    title: 'Board-Specific Content',
    desc: 'Courses mapped to AQA, Edexcel, OCR, WJEC, and IGCSE specifications. Students only study what their exam board requires.',
  },
  {
    icon: BarChart3,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Teacher Dashboard',
    desc: 'Track class progress in real time. Identify weak areas, monitor completion rates, and see which students need extra support.',
  },
  {
    icon: ClipboardList,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: 'Homework Ready',
    desc: 'Assign specific modules, practice questions, or revision sets as homework. Track completion and results automatically.',
  },
  {
    icon: GraduationCap,
    color: 'text-amber-400 bg-amber-500/10',
    title: 'Exam Season Support',
    desc: 'Mock exams, revision flashcards, exam guides, and practice questions with triple-graded model answers to boost results.',
  },
  {
    icon: UserPlus,
    color: 'text-purple-400 bg-purple-500/10',
    title: 'No Setup Required',
    desc: 'Students sign up with a simple school code. No complex IT integration, no software to install, no training needed.',
  },
  {
    icon: Shield,
    color: 'text-red-400 bg-red-500/10',
    title: 'Safe & Compliant',
    desc: 'GDPR-compliant platform with no ads, no third-party tracking, and no social features. Just focused learning.',
  },
]

/* ───────────────────── Stats ───────────────────── */

const STATS = [
  { value: '2,400+', label: 'Students Learning', icon: Users, color: 'text-primary bg-primary/10' },
  { value: '6', label: 'Exam Boards Covered', icon: Award, color: 'text-blue-400 bg-blue-500/10' },
  { value: '17', label: 'Structured Courses', icon: BookOpen, color: 'text-emerald-400 bg-emerald-500/10' },
  { value: '40+', label: 'Practice Questions', icon: FileQuestion, color: 'text-amber-400 bg-amber-500/10' },
]

/* ───────────────────── FAQ ───────────────────── */

const SCHOOL_FAQS = [
  {
    q: 'How do students access the platform?',
    a: 'Each school receives a unique school code. Students visit The English Hub, create an account, and enter the school code during registration. They get instant access — no IT support needed.',
  },
  {
    q: 'Can we trial the platform before committing?',
    a: 'Absolutely. We offer a free 30-day pilot for up to 30 students. No payment details required. Just fill in the form below and we\'ll set everything up for you.',
  },
  {
    q: 'What exam boards do you cover?',
    a: 'We cover AQA GCSE, Edexcel GCSE, OCR GCSE, WJEC/Eduqas GCSE, and Edexcel International GCSE (IGCSE). Each course is mapped to the specific exam board specification.',
  },
  {
    q: 'Can teachers track individual student progress?',
    a: 'Yes. The teacher dashboard shows completion rates, quiz scores, time spent, and weak areas for every student. You can filter by class, year group, or individual student.',
  },
  {
    q: 'How does billing work for schools?',
    a: 'We invoice annually. Payment can be made via bank transfer, purchase order, or card. Multi-Academy Trusts receive centralised billing across all schools.',
  },
  {
    q: 'Is the platform GDPR compliant?',
    a: 'Yes. We are fully GDPR compliant. Student data is stored securely in the UK, we don\'t share data with third parties, and we don\'t run any advertising or tracking on the platform.',
  },
  {
    q: 'Can we use this alongside our existing curriculum?',
    a: 'The English Hub is designed to complement your teaching, not replace it. Teachers can assign specific modules as homework, revision, or independent study to reinforce classroom learning.',
  },
  {
    q: 'What happens if we need more seats mid-year?',
    a: 'You can upgrade your plan at any time. We\'ll pro-rata the cost for the remainder of the year. Just contact your account manager or email us.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className="overflow-hidden border-border/40">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/30 transition-colors duration-200"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300',
            open ? 'rotate-180' : ''
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </Card>
  )
}

/* ───────────────────── Contact Form ───────────────────── */

function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      school_name: formData.get('school_name') as string,
      teacher_name: formData.get('teacher_name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      num_students: formData.get('num_students') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/school-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setFormState('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <Card className="p-8 border-primary/20 bg-primary/[0.03] text-center">
        <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          We&rsquo;ve received your inquiry and will be in touch within one working day. Check your inbox for a confirmation email.
        </p>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="school_name">School Name *</Label>
          <Input
            id="school_name"
            name="school_name"
            placeholder="e.g. St Mary's Academy"
            required
            minLength={2}
            maxLength={200}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="teacher_name">Your Name *</Label>
          <Input
            id="teacher_name"
            name="teacher_name"
            placeholder="e.g. Mrs J. Smith"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="j.smith@school.ac.uk"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Your Role *</Label>
          <select
            id="role"
            name="role"
            required
            className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 dark:bg-input/20"
          >
            <option value="" disabled>Select your role</option>
            <option value="head_of_english">Head of English</option>
            <option value="english_teacher">English Teacher</option>
            <option value="head_of_department">Head of Department</option>
            <option value="assistant_head">Assistant Headteacher</option>
            <option value="deputy_head">Deputy Headteacher</option>
            <option value="headteacher">Headteacher</option>
            <option value="mat_leader">MAT Leader</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="num_students">Approximate Number of Students *</Label>
        <select
          id="num_students"
          name="num_students"
          required
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 dark:bg-input/20"
        >
          <option value="" disabled>Select range</option>
          <option value="1-30">1 – 30 students</option>
          <option value="31-50">31 – 50 students</option>
          <option value="51-100">51 – 100 students</option>
          <option value="101-200">101 – 200 students</option>
          <option value="201-500">201 – 500 students</option>
          <option value="500+">500+ students (Multi-Academy Trust)</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your school's needs, any questions, or preferred demo time..."
          rows={4}
          maxLength={1000}
        />
      </div>

      {formState === 'error' && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full text-base h-12 shadow-lg shadow-primary/20"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Request a Demo
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground/60 text-center">
        We&rsquo;ll respond within one working day. No spam, no obligation.
      </p>
    </form>
  )
}

/* ───────────────────── Main Page ───────────────────── */

export default function ForSchoolsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5">
            <School className="w-4 h-4" />
            For Schools &amp; Multi-Academy Trusts
          </Badge>

          <h1 className="text-foreground">
            Boost Your English
            <br />
            <span className="text-primary">Department&rsquo;s Results</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Give every student access to board-specific revision, practice questions with model answers, and exam guides — for less than {' '}
            <span className="text-foreground font-semibold">£10 per student per year</span>.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<a href="#contact" />}>
              Request a Demo
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<a href="#pricing" />}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            Trusted by{' '}
            <span className="text-foreground font-bold">2,400+</span>{' '}
            students across the UK
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border/50" />}
                <div className="flex items-center gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', stat.color)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURES FOR SCHOOLS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Built for English Departments
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything your department needs to raise attainment and save planning time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCHOOL_FEATURES.map((item) => (
              <Card key={item.title} className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300">
                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', item.color)}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ PRICING ━━━ */}
      <section id="pricing" className="py-24 sm:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              One annual fee. Full access. No hidden costs. All plans include every course, practice question, and revision tool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SCHOOL_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'p-6 flex flex-col border-border/40 relative',
                  tier.popular && 'border-primary/40 shadow-lg shadow-primary/5'
                )}
              >
                {tier.popular && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-0.5">
                    Most Popular
                  </Badge>
                )}

                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', tier.color)}>
                  <tier.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-5">{tier.seats}</p>

                <div className="mb-5">
                  <span className="text-3xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                  <p className="text-sm text-primary font-semibold mt-1">{tier.perStudent}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'default' : 'secondary'}
                  className="w-full"
                  render={<a href="#contact" />}
                >
                  Request a Demo
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans are invoiced annually. Need a custom plan?{' '}
            <a href="#contact" className="text-primary hover:underline">Get in touch</a>.
          </p>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ TESTIMONIALS PLACEHOLDER ━━━ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              What Teachers Are Saying
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Hear from English departments already using The English Hub.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                quote: 'The board-specific content saves my department hours of resource creation each week. Students love having everything in one place.',
                name: 'Head of English',
                school: 'Secondary School, London',
              },
              {
                quote: 'We rolled this out to our Year 11s during exam season and saw a noticeable improvement in their practice essay scores within weeks.',
                name: 'English Teacher',
                school: 'Academy, Manchester',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="p-6 border-border/40">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.school}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you need to know about The English Hub for schools.
            </p>
          </div>

          <div className="space-y-3">
            {SCHOOL_FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ CONTACT / DEMO REQUEST FORM ━━━ */}
      <section id="contact" className="py-24 sm:py-32 bg-card/20 scroll-mt-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 items-center justify-center mb-6">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-foreground">
              Request a Demo
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-body-lg">
              Fill in the form below and we&rsquo;ll arrange a free demo and a 30-day pilot for your department.
            </p>
          </div>

          <Card className="p-6 sm:p-8 border-border/40">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
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
                { label: 'Exam Guide', href: '/exam-guide' },
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

          <Separator className="mt-10 mb-6 opacity-40" />
          <div className="text-center text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} The English Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
