'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  GraduationCap,
  BookOpen,
  Users,
  Share2,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Shield,
  Heart,
  Target,
  Layers,
  Award,
} from 'lucide-react'

/* ───────────────────── SEO metadata (exported from layout) ───────────────────── */

// Metadata is set via the layout or generateMetadata in a sibling file.
// Since this is a 'use client' page, metadata is exported from a parallel layout.

/* ───────────────────── FAQ ───────────────────── */

const faqs = [
  {
    q: 'Is it really free for teachers?',
    a: 'Yes. Verified teachers receive a free premium account for as long as they actively share The English Hub with their students. There is no catch and no credit card required.',
  },
  {
    q: 'What counts as a "school email"?',
    a: 'Any email address on a recognised school or educational institution domain (e.g. .sch.uk, .ac.uk, .edu). If your school uses a non-standard domain, we can verify manually.',
  },
  {
    q: 'How much discount do my students get?',
    a: 'Students who sign up with your referral code receive 20% off their first 3 months of any plan. After that, they continue at the standard rate.',
  },
  {
    q: 'Can I track which students signed up?',
    a: 'Yes. Your teacher dashboard shows the number of students who used your referral code, when they signed up, and which plan they chose. Student names and personal data are not shared for privacy reasons.',
  },
  {
    q: 'Which exam boards do you cover?',
    a: 'We cover AQA, Edexcel (including IGCSE), OCR, and WJEC Eduqas. All courses are mapped to the relevant specification so students only study what they need.',
  },
  {
    q: 'Can I recommend specific courses to my students?',
    a: 'Absolutely. From your teacher dashboard you can set recommended courses that appear highlighted for any student who signed up via your code.',
  },
  {
    q: 'How long does verification take?',
    a: 'Most applications are verified within 24 hours on weekdays. We will email you at your school address once your account is approved.',
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

/* ───────────────────── Signup Form ───────────────────── */

const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Multiple']
const STUDENT_COUNTS = ['1-30', '31-60', '61-120', '121-200', '200+']

function TeacherSignupForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    school_email: '',
    school_name: '',
    exam_board: '',
    student_count: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [referralCode, setReferralCode] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/teacher-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setReferralCode(data.referralCode || '')
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <Card className="p-8 border-primary/30 bg-primary/[0.04]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Application Submitted!</h3>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            We&rsquo;ll verify your school email and activate your free premium account within 24 hours.
            Check your inbox for a confirmation email.
          </p>
          {referralCode && (
            <div className="mt-6 p-4 rounded-xl bg-background border border-border/60">
              <p className="text-sm text-muted-foreground mb-2">Your referral code (pending verification):</p>
              <p className="text-xl font-mono font-bold text-primary tracking-wider">{referralCode}</p>
            </div>
          )}
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 border-border/40">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            placeholder="e.g. Sarah Johnson"
            required
            minLength={2}
            maxLength={100}
            value={formData.full_name}
            onChange={(e) => setFormData((prev) => ({ ...prev, full_name: e.target.value }))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="school_email">School Email</Label>
          <Input
            id="school_email"
            type="email"
            placeholder="s.johnson@school.sch.uk"
            required
            value={formData.school_email}
            onChange={(e) => setFormData((prev) => ({ ...prev, school_email: e.target.value }))}
          />
          <p className="text-xs text-muted-foreground">
            We use this to verify you are a teacher. Must be a school or institution email.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="school_name">School Name</Label>
          <Input
            id="school_name"
            placeholder="e.g. Oakwood Academy"
            required
            minLength={2}
            maxLength={200}
            value={formData.school_name}
            onChange={(e) => setFormData((prev) => ({ ...prev, school_name: e.target.value }))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="exam_board">Exam Board Taught</Label>
          <select
            id="exam_board"
            required
            value={formData.exam_board}
            onChange={(e) => setFormData((prev) => ({ ...prev, exam_board: e.target.value }))}
            className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 dark:bg-input/20"
          >
            <option value="" disabled>Select exam board</option>
            {EXAM_BOARDS.map((board) => (
              <option key={board} value={board}>{board === 'Multiple' ? 'Multiple boards' : board}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="student_count">Approximate Number of Students</Label>
          <select
            id="student_count"
            required
            value={formData.student_count}
            onChange={(e) => setFormData((prev) => ({ ...prev, student_count: e.target.value }))}
            className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 dark:bg-input/20"
          >
            <option value="" disabled>Select range</option>
            {STUDENT_COUNTS.map((count) => (
              <option key={count} value={count}>{count} students</option>
            ))}
          </select>
        </div>

        {status === 'error' && (
          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full text-base h-12 shadow-lg shadow-primary/20"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Apply for Free Teacher Access'}
        </Button>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By applying, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </Card>
  )
}

/* ───────────────────── Main Page ───────────────────── */

export default function ForTeachersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5">
            <GraduationCap className="w-4 h-4" />
            Teacher Referral Programme
          </Badge>

          <h1 className="text-foreground">
            Free Access for Teachers
            <br />
            <span className="text-primary">Share The English Hub With Your Students</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get free premium access to every course and resource on The English Hub.
            Share your unique referral code with students and give them 20% off their first 3 months.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply for Free Access
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ VALUE PROPOSITION ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { icon: Shield, color: 'text-primary bg-primary/10', value: 'Free', label: 'Premium Access' },
              { icon: Users, color: 'text-blue-400 bg-blue-500/10', value: '20%', label: 'Student Discount' },
              { icon: BookOpen, color: 'text-purple-400 bg-purple-500/10', value: '13+', label: 'Courses Available' },
              { icon: Award, color: 'text-amber-400 bg-amber-500/10', value: '4', label: 'Exam Boards' },
            ].map((stat, i) => (
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

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Four simple steps to free access and student discounts.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 1,
                icon: GraduationCap,
                title: 'Sign up as a teacher',
                desc: 'Fill in the form below with your school email. We verify your identity to keep the programme exclusive to real educators.',
              },
              {
                step: 2,
                icon: Sparkles,
                title: 'Get your unique referral code',
                desc: 'Once verified, you receive a personalised referral code and instant free premium access to all courses and resources.',
              },
              {
                step: 3,
                icon: Share2,
                title: 'Share with students',
                desc: 'Give your referral code to your students. When they sign up, they automatically get 20% off their first 3 months.',
              },
              {
                step: 4,
                icon: BarChart3,
                title: 'Track signups from your dashboard',
                desc: 'See how many students signed up via your code, monitor their progress, and set recommended courses for your classes.',
              },
            ].map((item) => (
              <Card key={item.step} className="flex items-start gap-5 p-6 border-border/40">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-base font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ BENEFITS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Teacher Benefits</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you get when you join the Teacher Referral Programme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {[
              {
                icon: Shield,
                color: 'text-primary bg-primary/10',
                title: 'Free Premium Access',
                desc: 'Full, unlimited access to every course, practice question, flashcard deck, and revision tool on The English Hub. No credit card, no time limit.',
              },
              {
                icon: Users,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'See Which Students Signed Up',
                desc: 'Your teacher dashboard shows signups via your referral code in real time. Track adoption without seeing private student data.',
              },
              {
                icon: Target,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: 'Board-Specific Content',
                desc: 'All content is mapped to AQA, Edexcel, OCR, and WJEC specifications. Students only study what is relevant to their exam board.',
              },
              {
                icon: Layers,
                color: 'text-purple-400 bg-purple-500/10',
                title: 'Set Recommended Courses',
                desc: 'Highlight specific courses for your students from your dashboard. They see your recommendations when they log in, keeping everyone on track.',
              },
              {
                icon: Heart,
                color: 'text-red-400 bg-red-500/10',
                title: 'Student Discounts',
                desc: 'Every student who signs up with your code gets 20% off their first 3 months. A meaningful saving that makes it easier for families to invest in their education.',
              },
              {
                icon: Award,
                color: 'text-amber-400 bg-amber-500/10',
                title: 'Certificates & Progress Tracking',
                desc: 'Students earn verifiable digital certificates on course completion. You can see aggregate progress data for students referred via your code.',
              },
            ].map((item) => (
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

      {/* ━━━ SIGNUP FORM ━━━ */}
      <section id="signup" className="py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground">Apply for Free Teacher Access</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-body-lg">
              Fill in the form below and we&rsquo;ll verify your school email within 24 hours.
            </p>
          </div>

          <TeacherSignupForm />
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you need to know about the Teacher Referral Programme.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join hundreds of English teachers who already use The English Hub to support their students&rsquo; learning.
          </p>
          <Button
            variant="default"
            size="lg"
            className="text-base px-10 h-12 shadow-lg shadow-primary/20"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for Free Access
          </Button>
        </div>
      </section>
    </main>
  )
}
