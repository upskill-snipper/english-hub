'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import {
  Sparkles,
  Target,
  FileQuestion,
  Timer,
  BarChart3,
  Layout,
  ClipboardCheck,
  TrendingUp,
  Users,
  Printer,
  GraduationCap,
} from 'lucide-react'

export default function AudienceSection() {
  const t = useT()
  const [audienceTab, setAudienceTab] = useState<'students' | 'teachers'>('students')

  const studentBenefits = [
    {
      icon: Sparkles,
      color: 'text-cyan-400 bg-cyan-500/10',
      title: t('audience.student.benefit.ai_feedback.title'),
      desc: t('audience.student.benefit.ai_feedback.desc'),
    },
    {
      icon: Target,
      color: 'text-primary bg-primary/10',
      title: t('audience.student.benefit.board_specific.title'),
      desc: t('audience.student.benefit.board_specific.desc'),
    },
    {
      icon: FileQuestion,
      color: 'text-blue-400 bg-blue-500/10',
      title: t('audience.student.benefit.practice.title'),
      desc: t('audience.student.benefit.practice.desc'),
    },
    {
      icon: Timer,
      color: 'text-clay-600 bg-orange-500/10',
      title: t('audience.student.benefit.mocks.title'),
      desc: t('audience.student.benefit.mocks.desc'),
    },
    {
      icon: BarChart3,
      color: 'text-emerald-400 bg-emerald-500/10',
      title: t('audience.student.benefit.progress.title'),
      desc: t('audience.student.benefit.progress.desc'),
    },
  ]

  const teacherBenefits = [
    {
      icon: Layout,
      color: 'text-primary bg-primary/10',
      title: t('audience.teacher.benefit.lesson_builder.title'),
      desc: t('audience.teacher.benefit.lesson_builder.desc'),
    },
    {
      icon: BarChart3,
      color: 'text-cyan-400 bg-cyan-500/10',
      title: t('audience.teacher.benefit.analytics.title'),
      desc: t('audience.teacher.benefit.analytics.desc'),
    },
    {
      icon: ClipboardCheck,
      color: 'text-emerald-400 bg-emerald-500/10',
      title: t('audience.teacher.benefit.ai_marking.title'),
      desc: t('audience.teacher.benefit.ai_marking.desc'),
    },
    {
      icon: TrendingUp,
      color: 'text-clay-600 bg-amber-500/10',
      title: t('audience.teacher.benefit.predicted.title'),
      desc: t('audience.teacher.benefit.predicted.desc'),
    },
    {
      icon: Users,
      color: 'text-blue-400 bg-blue-500/10',
      title: t('audience.teacher.benefit.classes.title'),
      desc: t('audience.teacher.benefit.classes.desc'),
    },
    {
      icon: Printer,
      color: 'text-clay-600 bg-orange-500/10',
      title: t('audience.teacher.benefit.printables.title'),
      desc: t('audience.teacher.benefit.printables.desc'),
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-foreground">{t('audience.built_for_everyone')}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            {t('audience.built_for_everyone.sub')}
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setAudienceTab('students')}
            className={cn(
              'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300',
              audienceTab === 'students'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70',
            )}
          >
            <GraduationCap className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            {t('audience.tab.students')}
          </button>
          <button
            onClick={() => setAudienceTab('teachers')}
            className={cn(
              'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300',
              audienceTab === 'teachers'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70',
            )}
          >
            <Users className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            {t('audience.tab.teachers')}
          </button>
        </div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(audienceTab === 'students' ? studentBenefits : teacherBenefits).map((benefit) => (
            <Card
              key={benefit.title}
              className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300"
            >
              <div
                className={cn(
                  'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                  benefit.color,
                )}
              >
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {audienceTab === 'students' ? (
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              {t('audience.cta.start_trial')}
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/for-teachers" />}
            >
              {t('audience.cta.start_teaching')}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
