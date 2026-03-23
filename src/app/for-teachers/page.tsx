'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  GraduationCap,
  BookOpen,
  Users,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Target,
  Layers,
  FileText,
  PenTool,
  ClipboardList,
  TrendingUp,
  Printer,
  Clock,
  LineChart,
  FolderOpen,
  Star,
} from 'lucide-react'

/* ───────────────────── FAQ ───────────────────── */

const faqs = [
  {
    q: 'What does the subscription include?',
    a: 'Your subscription gives you full access to the Lesson Builder, Student Analytics Dashboard, AI Essay Marking, Class Management tools, Predicted Grades, and Printable Resources. All features are included at no extra cost.',
  },
  {
    q: 'How does billing work?',
    a: 'You will be billed £9.99 per month from the date you subscribe. You can cancel at any time from your account settings and retain access until the end of your current billing period.',
  },
  {
    q: 'Which exam boards do you cover?',
    a: 'We cover AQA, Edexcel (including IGCSE), OCR, and WJEC Eduqas. All lessons and resources are mapped to the relevant specification so you and your students only work with what is needed.',
  },
  {
    q: 'How does AI Essay Marking work?',
    a: 'Students submit essays through the platform. Our AI analyses the response against mark scheme criteria for the relevant exam board, provides detailed feedback on Areas for Improvement, and generates a predicted grade. You can review and adjust the feedback before it reaches the student.',
  },
  {
    q: 'Can I use this alongside my existing school systems?',
    a: 'Absolutely. The English Hub is designed to complement your existing workflow. You can export student data, print resources for offline use, and use the platform as much or as little as you need.',
  },
  {
    q: 'Is there a school or department pricing option?',
    a: 'Yes. If you need licences for multiple teachers, please contact us at schools@theenglishhub.co.uk for volume pricing. Discounts are available for departments of 3 or more teachers.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const triggerId = `faq-trigger-${id}`
  const panelId = `faq-panel-${id}`
  return (
    <Card className="overflow-hidden border-border/40">
      <button
        id={triggerId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
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
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
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
            For English Teachers
          </Badge>

          <h1 className="text-foreground">
            Built for English Teachers
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Save hours on lesson planning, track every student&rsquo;s progress in real time,
            and let AI-powered feedback do the heavy lifting on essay marking.
            Everything you need to teach English effectively, in one platform.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Get Started &mdash; &pound;9.99/month
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ STATS BAR ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { icon: Clock, color: 'text-primary bg-primary/10', value: '5hrs+', label: 'Saved Per Week' },
              { icon: PenTool, color: 'text-blue-400 bg-blue-500/10', value: 'AI', label: 'Essay Marking' },
              { icon: BookOpen, color: 'text-purple-400 bg-purple-500/10', value: '4', label: 'Exam Boards' },
              { icon: TrendingUp, color: 'text-amber-400 bg-amber-500/10', value: '100%', label: 'Curriculum Aligned' },
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

      {/* ━━━ FEATURES ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Everything You Need to Teach Smarter</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Powerful tools designed specifically for English teachers. Less admin, more teaching.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Layers,
                color: 'text-primary bg-primary/10',
                title: 'Lesson Builder',
                desc: 'Create structured, specification-aligned lessons in minutes. Drag and drop resources, add activities, and share with your classes instantly.',
              },
              {
                icon: BarChart3,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'Student Analytics Dashboard',
                desc: 'Track every student\'s progress, identify strengths and weaknesses, and spot students who need intervention before they fall behind.',
              },
              {
                icon: PenTool,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: 'AI Essay Marking',
                desc: 'Instant, detailed feedback on student essays with grade predictions aligned to exam board mark schemes. Review and adjust before sharing.',
              },
              {
                icon: Users,
                color: 'text-purple-400 bg-purple-500/10',
                title: 'Class Management',
                desc: 'Manage multiple classes, set homework assignments, track submissions, and monitor deadlines all from a single dashboard.',
              },
              {
                icon: Target,
                color: 'text-amber-400 bg-amber-500/10',
                title: 'Predicted Grades',
                desc: 'AI-powered grade predictions based on student performance data, with targeted improvement recommendations for each student.',
              },
              {
                icon: Printer,
                color: 'text-red-400 bg-red-500/10',
                title: 'Printable Resources',
                desc: 'Generate and download worksheets, handouts, and assessment materials. Ready to print and use in the classroom.',
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

      {/* ━━━ DASHBOARD PREVIEW ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Your Teaching Dashboard</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything at a glance. A centralised hub for managing your classes, tracking progress, and staying on top of submissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Dashboard mock cards */}
            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Class Overview</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Year 11 - Set 1</span>
                  <span className="text-foreground font-medium">28 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Year 10 - Set 2</span>
                  <span className="text-foreground font-medium">31 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Year 13 - A Level</span>
                  <span className="text-foreground font-medium">14 students</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <ClipboardList className="w-4.5 h-4.5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">Homework Tracker</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Submitted</span>
                  <span className="text-emerald-400 font-medium">64 / 73</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pending review</span>
                  <span className="text-amber-400 font-medium">12 essays</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overdue</span>
                  <span className="text-red-400 font-medium">9 students</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <LineChart className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">Grade Predictions</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">On target</span>
                  <span className="text-emerald-400 font-medium">47 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Below target</span>
                  <span className="text-amber-400 font-medium">18 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg. predicted grade</span>
                  <span className="text-foreground font-medium">Grade 6</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-4.5 h-4.5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-foreground">AI Marking Queue</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Auto-marked today</span>
                  <span className="text-foreground font-medium">23 essays</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Awaiting your review</span>
                  <span className="text-amber-400 font-medium">5 essays</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg. marking time</span>
                  <span className="text-primary font-medium">8 seconds</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <FolderOpen className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-semibold text-foreground">Resource Library</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Your lessons</span>
                  <span className="text-foreground font-medium">34 saved</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Worksheets generated</span>
                  <span className="text-foreground font-medium">56 files</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shared with classes</span>
                  <span className="text-foreground font-medium">21 resources</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/40 bg-card/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Star className="w-4.5 h-4.5 text-red-400" />
                </div>
                <h3 className="font-semibold text-foreground">Student Spotlight</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Most improved</span>
                  <span className="text-emerald-400 font-medium">3 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Needs attention</span>
                  <span className="text-red-400 font-medium">4 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Highest streak</span>
                  <span className="text-foreground font-medium">21 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ PRICING ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-body-lg max-w-xl mx-auto mb-12">
            One plan. Every feature. No hidden costs.
          </p>

          <Card className="p-8 sm:p-10 border-primary/30 bg-primary/[0.03] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
              All Features Included
            </div>

            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-foreground tracking-tight">£9.99</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">per teacher, billed monthly</p>
            </div>

            <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
              {[
                'Lesson Builder with drag-and-drop',
                'Student Analytics Dashboard',
                'AI Essay Marking with grade predictions',
                'Class Management and homework tracking',
                'Predicted Grades with improvement plans',
                'Printable worksheets and resources',
                'All exam boards included (AQA, Edexcel, OCR, WJEC)',
                'Cancel any time',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20 w-full sm:w-auto"
              render={<Link href="/auth/register" />}
            >
              Subscribe Now
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Cancel any time from your account settings.
            </p>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you need to know about The English Hub for teachers.
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
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join hundreds of English teachers who save hours every week with The English Hub.
            Subscribe today for just &pound;9.99/month.
          </p>
          <Button
            variant="default"
            size="lg"
            className="text-base px-10 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/auth/register" />}
          >
            Subscribe Now
          </Button>
        </div>
      </section>
    </main>
  )
}
