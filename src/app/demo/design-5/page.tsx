'use client'

import Link from 'next/link'
import {
  BookOpen,
  Award,
  Trophy,
  Crown,
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle,
  Star,
  Medal,
  Flame,
  GraduationCap,
  ScrollText,
  BookMarked,
  BarChart3,
} from 'lucide-react'

// ─── Static Demo Data ────────────────────────────────────────────────────────

const GOLD = '#d4a843'
const GOLD_LIGHT = '#e8c87a'
const GOLD_DIM = 'rgba(212, 168, 67, 0.12)'
const GOLD_BORDER = 'rgba(212, 168, 67, 0.25)'
const BG = '#0d1117'
const SURFACE = '#12181f'
const SURFACE_RAISED = '#171e27'
const BORDER = 'rgba(255,255,255,0.07)'
const TEXT = '#e8e6e1'
const MUTED = '#7a7570'
const SERIF = 'Georgia, "Times New Roman", serif'

const stats = [
  { label: 'Courses Enrolled', value: '4', sub: 'active studies', icon: BookOpen },
  { label: 'Modules Completed', value: '38', sub: 'of 72 total', icon: CheckCircle },
  { label: 'Study Streak', value: '14', sub: 'days consecutive', icon: Flame },
  { label: 'Certificates', value: '2', sub: 'distinctions earned', icon: Trophy },
]

const courses = [
  {
    id: 'igcse-english-language',
    title: 'IGCSE English Language',
    level: 'Cambridge IGCSE',
    progress: 72,
    completedModules: 18,
    totalModules: 25,
    nextLesson: 'Narrative Writing Techniques',
    color: '#7c6af5',
    lastStudied: '2 hours ago',
  },
  {
    id: 'igcse-english-literature',
    title: 'IGCSE English Literature',
    level: 'Cambridge IGCSE',
    progress: 40,
    completedModules: 10,
    totalModules: 25,
    nextLesson: 'Analysing Poetry: Unseen Texts',
    color: '#d4a843',
    lastStudied: 'Yesterday',
  },
  {
    id: 'gcse-english-aqa',
    title: 'GCSE English Language — AQA',
    level: 'AQA GCSE',
    progress: 18,
    completedModules: 4,
    totalModules: 22,
    nextLesson: 'Reading for Meaning: Non-Fiction',
    color: '#4a9eff',
    lastStudied: '3 days ago',
  },
  {
    id: 'a-level-english-lit',
    title: 'A-Level English Literature',
    level: 'A-Level',
    progress: 5,
    completedModules: 1,
    totalModules: 20,
    nextLesson: 'The Victorian Novel: Context & Form',
    color: '#e07070',
    lastStudied: '1 week ago',
  },
]

const achievements = [
  {
    id: 1,
    title: 'IGCSE English Language',
    grade: 'Distinction',
    score: 94,
    issuedAt: '15 January 2026',
    icon: Trophy,
  },
  {
    id: 2,
    title: 'Cambridge Reading Foundations',
    grade: 'Merit',
    score: 81,
    issuedAt: '3 November 2025',
    icon: Award,
  },
  {
    id: 3,
    title: '14-Day Study Streak',
    grade: 'Badge',
    score: null,
    issuedAt: 'Ongoing',
    icon: Flame,
  },
  {
    id: 4,
    title: 'First Perfect Quiz Score',
    grade: 'Badge',
    score: 100,
    issuedAt: '28 October 2025',
    icon: Star,
  },
]

const recentActivity = [
  { id: 1, module: 'Descriptive Writing: Atmosphere', course: 'IGCSE English Language', time: '2h ago', score: 88 },
  { id: 2, module: 'Macbeth — Act V Close Reading', course: 'IGCSE English Literature', time: 'Yesterday', score: 76 },
  { id: 3, module: 'Inference and Deduction Skills', course: 'IGCSE English Language', time: '2 days ago', score: 92 },
  { id: 4, module: 'Comparing Non-Fiction Texts', course: 'GCSE English Language — AQA', time: '3 days ago', score: null },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoldRule() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: `1px solid ${GOLD_BORDER}`,
        margin: '2.5rem 0',
      }}
    />
  )
}

function StatCard({ label, value, sub, icon: Icon }: typeof stats[0]) {
  return (
    <div
      style={{
        backgroundColor: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: '0.75rem',
        padding: '1.5rem',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = GOLD_BORDER
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = BORDER
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.5rem',
            backgroundColor: GOLD_DIM,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={18} color={GOLD} />
        </div>
        <span
          style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: MUTED,
          }}
        >
          {label}
        </span>
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: '2.25rem',
          fontWeight: 700,
          color: TEXT,
          lineHeight: 1,
          marginBottom: '0.375rem',
        }}
      >
        {value}
      </div>
      <p style={{ fontSize: '0.75rem', color: MUTED }}>{sub}</p>
    </div>
  )
}

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div
      style={{
        backgroundColor: SURFACE,
        border: `1px solid ${BORDER}`,
        borderLeft: `3px solid ${GOLD_BORDER}`,
        borderRadius: '0.75rem',
        padding: '1.5rem',
        transition: 'border-color 0.2s, border-left-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = GOLD_BORDER
        el.style.borderLeftColor = GOLD
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = BORDER
        el.style.borderLeftColor = GOLD_BORDER
      }}
    >
      {/* Level badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
        <span
          style={{
            display: 'inline-block',
            width: '0.5rem',
            height: '0.5rem',
            borderRadius: '50%',
            backgroundColor: course.color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: MUTED,
          }}
        >
          {course.level}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: SERIF,
          fontSize: '1.0625rem',
          fontWeight: 600,
          color: TEXT,
          marginBottom: '0.375rem',
          lineHeight: 1.35,
        }}
      >
        {course.title}
      </h3>

      {/* Progress text */}
      <p style={{ fontSize: '0.8125rem', color: MUTED, marginBottom: '0.875rem' }}>
        {course.completedModules} of {course.totalModules} modules &middot; Last studied {course.lastStudied}
      </p>

      {/* Progress bar */}
      <div
        style={{
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderRadius: '9999px',
          marginBottom: '1.125rem',
          overflow: 'hidden',
        }}
        role="progressbar"
        aria-valuenow={course.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${course.progress}% complete`}
      >
        <div
          style={{
            height: '100%',
            width: `${course.progress}%`,
            background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
            borderRadius: '9999px',
            transition: 'width 0.6s ease',
          }}
        />
      </div>

      {/* Next lesson + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ fontSize: '0.6875rem', color: MUTED, marginBottom: '0.125rem', letterSpacing: '0.04em' }}>
            UP NEXT
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              color: TEXT,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {course.nextLesson}
          </p>
        </div>
        <Link
          href={`/courses/${course.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            backgroundColor: GOLD_DIM,
            color: GOLD,
            fontSize: '0.8125rem',
            fontWeight: 500,
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'background-color 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(212, 168, 67, 0.22)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GOLD_DIM
          }}
        >
          Continue
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

function AchievementRow({ item }: { item: typeof achievements[0] }) {
  const Icon = item.icon

  const gradeBg: Record<string, string> = {
    Distinction: 'rgba(212, 168, 67, 0.12)',
    Merit: 'rgba(74, 158, 255, 0.12)',
    Pass: 'rgba(72, 199, 142, 0.12)',
    Badge: 'rgba(255, 255, 255, 0.05)',
  }
  const gradeColor: Record<string, string> = {
    Distinction: GOLD,
    Merit: '#4a9eff',
    Pass: '#48c78e',
    Badge: MUTED,
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        transition: 'background-color 0.15s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = SURFACE_RAISED
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'
      }}
    >
      <div
        style={{
          width: '2.75rem',
          height: '2.75rem',
          borderRadius: '0.5rem',
          backgroundColor: gradeBg[item.grade] ?? GOLD_DIM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={20} color={gradeColor[item.grade] ?? GOLD} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontFamily: SERIF,
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: TEXT,
            marginBottom: '0.25rem',
          }}
        >
          {item.title}
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.125rem 0.5rem',
              borderRadius: '0.25rem',
              backgroundColor: gradeBg[item.grade] ?? GOLD_DIM,
              color: gradeColor[item.grade] ?? GOLD,
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {item.grade}
          </span>
          {item.score !== null && (
            <span style={{ fontSize: '0.8125rem', color: MUTED }}>{item.score}%</span>
          )}
          <span style={{ fontSize: '0.8125rem', color: MUTED, opacity: 0.7 }}>
            &middot; {item.issuedAt}
          </span>
        </div>
      </div>
    </div>
  )
}

function ActivityRow({ item }: { item: typeof recentActivity[0] }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        padding: '0.875rem 0',
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: '0.375rem',
          backgroundColor: GOLD_DIM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <CheckCircle size={16} color={GOLD} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: TEXT,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginBottom: '0.125rem',
          }}
        >
          {item.module}
        </p>
        <p style={{ fontSize: '0.75rem', color: MUTED }}>
          {item.course} &middot; {item.time}
        </p>
      </div>
      {item.score !== null && (
        <span
          style={{
            padding: '0.1875rem 0.5rem',
            borderRadius: '0.25rem',
            backgroundColor: 'rgba(74, 158, 255, 0.1)',
            color: '#4a9eff',
            fontSize: '0.75rem',
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {item.score}%
        </span>
      )}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MidnightScholarDemo() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: BG,
        color: TEXT,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div
        style={{
          borderBottom: `1px solid ${BORDER}`,
          backgroundColor: SURFACE,
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.8125rem',
                color: MUTED,
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = TEXT }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = MUTED }}
            >
              <ArrowLeft size={14} />
              Back to Demo
            </Link>
            <span style={{ color: BORDER, userSelect: 'none' }}>/</span>
            <h1
              style={{
                fontFamily: SERIF,
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: TEXT,
                margin: 0,
              }}
            >
              Design 5: Midnight Scholar
            </h1>
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: `1px solid ${GOLD_BORDER}`,
              backgroundColor: GOLD_DIM,
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: GOLD,
            }}
          >
            <ScrollText size={11} />
            Design Concept
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '3rem 1.5rem 5rem',
        }}
      >

        {/* ── Welcome Heading ───────────────────────────────────────────── */}
        <div style={{ marginBottom: '0.75rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: '0.625rem',
            }}
          >
            Friday, 21 March 2026
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: TEXT,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            Welcome back, Scholar
          </h2>
          <p
            style={{
              marginTop: '0.625rem',
              fontSize: '1rem',
              color: MUTED,
              fontStyle: 'italic',
            }}
          >
            "An investment in knowledge pays the best interest." — Benjamin Franklin
          </p>
        </div>

        {/* Thin gold rule under heading */}
        <GoldRule />

        {/* ── Stats Row ────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <GoldRule />

        {/* ── Your Studies ──────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: '1.625rem',
                  fontWeight: 700,
                  color: TEXT,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Your Studies
              </h2>
              <p style={{ fontSize: '0.875rem', color: MUTED, marginTop: '0.25rem' }}>
                Continue where you left off
              </p>
            </div>
            <Link
              href="/courses"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.875rem',
                color: GOLD,
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Browse all courses
              <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1rem',
            }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <GoldRule />

        {/* ── Two-column: Activity + Achievements ─────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Recent Activity */}
          <section>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: TEXT,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Recent Activity
              </h2>
              <p style={{ fontSize: '0.8125rem', color: MUTED, marginTop: '0.25rem' }}>
                Your latest completed lessons
              </p>
            </div>
            <div
              style={{
                backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
              }}
            >
              {recentActivity.map((item, i) => (
                <div
                  key={item.id}
                  style={i === recentActivity.length - 1 ? { borderBottom: 'none' } : {}}
                >
                  <ActivityRow item={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Recent Achievements */}
          <section>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: TEXT,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Recent Achievements
              </h2>
              <p style={{ fontSize: '0.8125rem', color: MUTED, marginTop: '0.25rem' }}>
                Certificates, distinctions & milestones
              </p>
            </div>
            <div
              style={{
                backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
              }}
            >
              {achievements.map((item) => (
                <AchievementRow key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        <GoldRule />

        {/* ── Quick Navigation ─────────────────────────────────────────── */}
        <section>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: '1.375rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Study Resources
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
            }}
          >
            {[
              { label: 'Practice Questions', href: '/practice', icon: BookMarked },
              { label: 'Revision Cards', href: '/revision', icon: ScrollText },
              { label: 'Grade Analytics', href: '/dashboard/grades', icon: BarChart3 },
              { label: 'Exam Guides', href: '/exam-guide', icon: GraduationCap },
              { label: 'All Courses', href: '/courses', icon: BookOpen },
            ].map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5625rem 1.125rem',
                  borderRadius: '9999px',
                  border: `1px solid ${BORDER}`,
                  backgroundColor: SURFACE,
                  color: TEXT,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.15s, background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = GOLD_BORDER
                  el.style.backgroundColor = SURFACE_RAISED
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = BORDER
                  el.style.backgroundColor = SURFACE
                }}
              >
                <Icon size={15} color={GOLD} />
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Footer flourish ───────────────────────────────────────────── */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            color: MUTED,
            fontSize: '0.8125rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.875rem',
              marginBottom: '0.875rem',
            }}
          >
            <span style={{ flex: 1, height: '1px', backgroundColor: BORDER, maxWidth: '8rem' }} />
            <GraduationCap size={16} color={GOLD} style={{ opacity: 0.6 }} />
            <span style={{ flex: 1, height: '1px', backgroundColor: BORDER, maxWidth: '8rem' }} />
          </div>
          <p>
            English Hub &mdash; Midnight Scholar Design Concept
          </p>
          <p style={{ marginTop: '0.25rem', fontStyle: 'italic', opacity: 0.6 }}>
            Design 5 of 5
          </p>
        </div>

      </div>
    </div>
  )
}
