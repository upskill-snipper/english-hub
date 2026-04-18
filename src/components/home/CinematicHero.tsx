'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

/* ─────────────────────────────────────────────────────────────
   DATA — chapter definitions with phases
   ───────────────────────────────────────────────────────────── */

interface Phase {
  id: string
  label: string
}

interface Chapter {
  numeral: string
  label: string
  audience: string
  subtitle: string
  duration: number // ms for the entire chapter
  phases: Phase[]
}

const CHAPTERS: Chapter[] = [
  {
    numeral: 'I',
    label: 'Schools',
    audience: 'For Schools',
    subtitle: 'Whole-school licence',
    duration: 34000,
    phases: [
      { id: 'trends', label: 'Trends' },
      { id: 'department', label: 'Department' },
      { id: 'class', label: 'Class drill-down' },
      { id: 'student', label: 'Student view' },
      { id: 'intervention', label: 'Intervention' },
    ],
  },
  {
    numeral: 'II',
    label: 'Teachers',
    audience: 'For Teachers',
    subtitle: 'AI marker \u00B7 300 resources',
    duration: 20000,
    phases: [
      { id: 'lessons', label: 'Lesson builder' },
      { id: 'marking', label: 'AI marking' },
      { id: 'assignments', label: 'Assignment tracker' },
      { id: 'ppt', label: 'PPT generator' },
    ],
  },
  {
    numeral: 'III',
    label: 'Students',
    audience: 'For Students',
    subtitle: '470 lessons \u00B7 130 mocks',
    duration: 40000,
    phases: [
      { id: 'courses', label: 'Courses' },
      { id: 'annotate', label: 'Annotate' },
      { id: 'feedback', label: 'AI feedback' },
      { id: 'coach', label: 'Writing coach' },
      { id: 'mocks', label: 'Mock exams' },
      { id: 'revise', label: 'Revise \u00B7 predict' },
    ],
  },
  {
    numeral: 'IV',
    label: 'Parents',
    audience: 'For Parents',
    subtitle: 'Progress \u00B7 plain English',
    duration: 20000,
    phases: [
      { id: 'dashboard', label: 'Progress dashboard' },
      { id: 'reports', label: 'Weekly reports' },
      { id: 'prediction', label: 'Grade prediction' },
    ],
  },
]

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */

export default function CinematicHero() {
  const [chapterIdx, setChapterIdx] = useState(0)
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const startedAtRef = useRef(Date.now())
  const pausedProgressRef = useRef(0)
  const stageRef = useRef<HTMLDivElement>(null)

  const chapter = CHAPTERS[chapterIdx]

  // Jump to a chapter
  const goToChapter = useCallback(
    (idx: number, userInit = false) => {
      const i = ((idx % CHAPTERS.length) + CHAPTERS.length) % CHAPTERS.length
      setChapterIdx(i)
      setPhaseIdx(0)
      setProgress(0)
      startedAtRef.current = Date.now()
      pausedProgressRef.current = 0
      if (userInit) {
        setPaused(true)
        setTimeout(() => {
          setPaused(false)
          startedAtRef.current = Date.now()
          pausedProgressRef.current = 0
        }, 1500)
      }
    },
    []
  )

  // Phase advancing within a chapter
  useEffect(() => {
    if (paused) return
    const ch = CHAPTERS[chapterIdx]
    const perPhase = Math.floor(ch.duration / ch.phases.length)

    const timer = setInterval(() => {
      setPhaseIdx((prev) => {
        if (prev < ch.phases.length - 1) return prev + 1
        return prev
      })
    }, perPhase)

    return () => clearInterval(timer)
  }, [chapterIdx, paused])

  // Progress bar + chapter advance
  useEffect(() => {
    let raf: number
    const tick = () => {
      if (!paused) {
        const elapsed = Date.now() - startedAtRef.current
        const ch = CHAPTERS[chapterIdx]
        const adjustedElapsed = elapsed + pausedProgressRef.current
        const pct = Math.min(1, adjustedElapsed / ch.duration)
        setProgress(pct)
        if (adjustedElapsed >= ch.duration) {
          goToChapter(chapterIdx + 1)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [chapterIdx, paused, goToChapter])

  // Pause / resume on hover
  const handleMouseEnter = useCallback(() => {
    pausedProgressRef.current = (Date.now() - startedAtRef.current) + pausedProgressRef.current
    setPaused(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    startedAtRef.current = Date.now()
    setPaused(false)
  }, [])

  const numerals = ['I', 'II', 'III', 'IV']

  return (
    <section className="cinematic-hero-wrap">
      {/* Meta bar */}
      <div className="hero-meta">
        <span>The English Hub &middot; Cinematic Edition &middot; MMXXVI</span>
        <span className="chapter-tag">
          Now playing:{' '}
          <em>
            Chapter {numerals[chapterIdx]} &mdash; {chapter.label}
          </em>
        </span>
        <span className="live-indicator">
          <span className="blink-dot" />
          Chapters auto-advance &middot; hover to pause
        </span>
      </div>

      {/* Stage */}
      <div
        ref={stageRef}
        className="stage"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Progress bar */}
        <div className="stage-progress">
          <i style={{ width: `${progress * 100}%` }} />
        </div>

        {/* Scenes */}
        <SchoolsScene active={chapterIdx === 0} phaseIdx={chapterIdx === 0 ? phaseIdx : 0} />
        <TeachersScene active={chapterIdx === 1} phaseIdx={chapterIdx === 1 ? phaseIdx : 0} />
        <StudentsScene active={chapterIdx === 2} phaseIdx={chapterIdx === 2 ? phaseIdx : 0} />
        <ParentsScene active={chapterIdx === 3} phaseIdx={chapterIdx === 3 ? phaseIdx : 0} />

        {/* Bottom dots */}
        <div className="stage-dots">
          {CHAPTERS.map((_, i) => (
            <button
              key={i}
              className={i === chapterIdx ? 'on' : ''}
              onClick={() => goToChapter(i, true)}
              aria-label={`Chapter ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Chapter tabs */}
      <div className="chapter-tabs">
        {CHAPTERS.map((ch, i) => (
          <button
            key={i}
            className={i === chapterIdx ? 'on' : ''}
            onClick={() => goToChapter(i, true)}
            style={
              i === chapterIdx
                ? ({ '--p': `${progress * 100}%` } as React.CSSProperties)
                : ({ '--p': '0%' } as React.CSSProperties)
            }
          >
            <span className="n">Chapter {ch.numeral}</span>
            <span className="t">
              For <em>{ch.label}</em>
            </span>
            <span className="s">{ch.subtitle}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CHAPTER 1 — SCHOOLS
   ═══════════════════════════════════════════════════════════════ */

function SchoolsScene({ active, phaseIdx }: { active: boolean; phaseIdx: number }) {
  return (
    <div className={`scene scene-schools ${active ? 'active' : ''}`}>
      <div className="scene-header">
        <span className="scene-tag">
          <span className="dot" /> Chapter I &middot; For Schools
        </span>
        <span className="scene-kicker">One licence &middot; every student &middot; every teacher</span>
      </div>
      <div className="scene-numeral">I</div>

      {/* Phase rail */}
      <div className="phase-rail">
        {['Trends', 'Department', 'Class drill-down', 'Student view', 'Intervention'].map((label, i) => (
          <div key={i} className={`p ${phaseIdx === i ? 'on' : ''}`}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span> {label}
          </div>
        ))}
      </div>

      <div className="scene-content" style={{ gridTemplateColumns: '0.75fr 1.25fr' }}>
        <div className="scene-text">
          <h2 className="scene-title">
            From trends, to cohort, <em>to the one student</em>.
          </h2>
          <p className="scene-desc">
            Department analytics that drill from year-level trends to a flagged student in four
            clicks &mdash; with every essay, mock and AO score attached, plus the intervention that
            closed the gap.
          </p>
          <div className="scene-actions">
            <a className="scene-cta">Book a call &rarr;</a>
            <a className="scene-btn-ghost">See the demo</a>
          </div>
        </div>

        <div className="scene-viz" style={{ position: 'relative', alignItems: 'stretch' }}>
          {/* Phase 0 — Trends */}
          <div className={`subscene ${phaseIdx === 0 ? 'on' : ''}`}>
            <div className="panel-head">
              <span className="crumb">
                Oakwood Academy &middot; <b>Year 11 English</b> &middot; 12-week trend
              </span>
              <span className="s">Autumn &rarr; Spring &apos;26 &middot; live</span>
            </div>
            <div className="trend-wrap">
              <div className="linechart">
                <div className="lc-head">
                  <span className="t">Cohort average &middot; AO2 &middot; weekly active</span>
                  <div className="chips">
                    <span className="avg">Grade avg</span>
                    <span className="eng">Weekly active</span>
                    <span className="tgt">At/above target</span>
                  </div>
                </div>
                <div className="lc-svg">
                  <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                    <g className="grid">
                      <line x1="0" y1="40" x2="400" y2="40" />
                      <line x1="0" y1="80" x2="400" y2="80" />
                      <line x1="0" y1="120" x2="400" y2="120" />
                      <line x1="0" y1="160" x2="400" y2="160" />
                    </g>
                    <path
                      className="ln"
                      stroke="#5A9A94"
                      d="M 10 140 L 50 132 L 90 128 L 130 118 L 170 110 L 210 98 L 250 88 L 290 76 L 330 68 L 370 52"
                    />
                    <path
                      className="ln"
                      stroke="#E4BA4E"
                      style={{ animationDelay: '600ms' }}
                      d="M 10 110 L 50 102 L 90 96 L 130 94 L 170 82 L 210 76 L 250 62 L 290 54 L 330 46 L 370 42"
                    />
                    <path
                      className="ln"
                      stroke="#D97A4E"
                      style={{ animationDelay: '1000ms' }}
                      d="M 10 160 L 50 156 L 90 150 L 130 140 L 170 128 L 210 118 L 250 102 L 290 88 L 330 74 L 370 62"
                    />
                    <circle className="dot pulse-dot" cx="370" cy="52" r="4" fill="#5A9A94" />
                    <circle className="dot" cx="370" cy="42" r="3" fill="#E4BA4E" />
                    <circle className="dot" cx="370" cy="62" r="3" fill="#D97A4E" />
                    <text x="10" y="195" className="ax">W1</text>
                    <text x="105" y="195" className="ax">W4</text>
                    <text x="205" y="195" className="ax">W8</text>
                    <text x="345" y="195" className="ax">W12</text>
                  </svg>
                </div>
              </div>
              <div className="lc-compare">
                <div className="kpi-mini">
                  <span className="l">Avg grade</span>
                  <span className="v"><em>6.4</em></span>
                  <span className="d">&uarr; 1.4 since term 1</span>
                  <div className="spark">
                    {[40, 48, 55, 62, 70, 78, 88].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="kpi-mini">
                  <span className="l">Weekly active</span>
                  <span className="v">92<em>%</em></span>
                  <span className="d">&uarr; 18 pts vs term 1</span>
                </div>
                <div className="kpi-mini flag">
                  <span className="l">AO2 gap &middot; still open</span>
                  <span className="v">11E &middot; 8G</span>
                  <span className="d">2 classes below target</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 1 — Cohort Heatmap */}
          <div className={`subscene ${phaseIdx === 1 ? 'on' : ''}`}>
            <div className="panel">
              <div className="panel-head">
                <span className="crumb">
                  Oakwood Academy &middot; <b>Year 11 English</b>
                </span>
                <span className="s">Spring &apos;26 &middot; 184 students &middot; 7 classes</span>
              </div>
              <div className="kpi-row">
                <div className="kpi"><span className="v">+<em>1.4</em></span><span className="l">Avg grade uplift</span><span className="delta">&uarr; 0.3 vs term 1</span></div>
                <div className="kpi"><span className="v">92<em>%</em></span><span className="l">Weekly active</span><span className="delta">&uarr; 8%</span></div>
                <div className="kpi"><span className="v">68<em>%</em></span><span className="l">At/above target</span><span className="delta">&uarr; 12%</span></div>
                <div className="kpi"><span className="v">14</span><span className="l">Flagged &middot; attention</span><span className="delta down">&darr; 5</span></div>
              </div>
              <div>
                <div className="cohort-label">Class x AO performance &middot; hover a cell to drill</div>
                <div className="cohort">
                  <span></span>
                  {['AO1','AO2','AO3','AO4','AO5','AO6','Mocks','Essays','Read','Avg'].map(c => (
                    <span key={c} className="col-label">{c}</span>
                  ))}
                  {[
                    { label: '11A', vals: [4,5,4,4,5,4,5,4,5,5] },
                    { label: '11B', vals: [3,4,3,4,4,3,4,4,3,4] },
                    { label: '11C', vals: [3,2,3,3,3,2,3,3,3,3] },
                    { label: '11D', vals: [2,2,3,2,3,3,3,2,3,3] },
                    { label: '11E', vals: [1,1,2,2,2,2,2,1,2,2] },
                    { label: '11F', vals: [3,3,4,3,4,3,4,3,4,4] },
                    { label: '11G', vals: [4,4,4,5,4,5,4,4,5,4] },
                  ].map(row => (
                    <React.Fragment key={row.label}>
                      <span className="row-label">{row.label}</span>
                      {row.vals.map((v, i) => (
                        <span
                          key={i}
                          className={`cell ${row.label === '11E' && i === 1 ? 'pulse' : ''}`}
                          data-v={v}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 — Class Detail */}
          <div className={`subscene ${phaseIdx === 2 ? 'on' : ''}`}>
            <div className="panel">
              <div className="panel-head">
                <span className="crumb">
                  Oakwood &middot; Year 11 &middot; <b>11E &mdash; Ms Whitmore</b>
                </span>
                <span className="s">28 students &middot; AO2 = intervention</span>
              </div>
              <div className="class-detail">
                <div>
                  <div className="cohort-label">AO breakdown &middot; 11E avg</div>
                  <div className="ao-grid">
                    {[
                      { label: 'AO1', w: 62 },
                      { label: 'AO2', w: 44 },
                      { label: 'AO3', w: 58 },
                      { label: 'AO4', w: 55 },
                      { label: 'AO5', w: 66 },
                      { label: 'AO6', w: 60 },
                    ].map(ao => (
                      <div key={ao.label} className="ao-bar2">
                        <span className="label">{ao.label}</span>
                        <div className="track"><i style={{ width: `${ao.w}%` }} /></div>
                        <span className="v">{ao.w}</span>
                      </div>
                    ))}
                  </div>
                  <div className="recommendation-box">
                    <b>Recommendation:</b> AO2 (language analysis) consistently 14-18 points below
                    other AOs. Assign the &ldquo;Language Analysis Booster&rdquo; pathway to 22 students.
                  </div>
                </div>
                <div>
                  <div className="cohort-label">Students &middot; sorted by trend</div>
                  <div className="student-list">
                    {[
                      { name: 'Jamie P.', grade: 3, trend: '\u2193 1.2', cls: 'flag', dir: 'down' },
                      { name: 'Aisha R.', grade: 4, trend: '\u2193 0.8', cls: 'flag', dir: 'down' },
                      { name: 'Evie M.', grade: 5, trend: '\u2191 1.6', cls: 'highlight', dir: 'up' },
                      { name: 'Noah K.', grade: 5, trend: '\u2192 0.1', cls: '', dir: 'flat' },
                      { name: 'Priya S.', grade: 6, trend: '\u2191 0.4', cls: '', dir: 'up' },
                      { name: 'Liam D.', grade: 6, trend: '\u2191 0.9', cls: '', dir: 'up' },
                    ].map((s, i) => (
                      <div key={i} className={`slist-row ${s.cls}`}>
                        <span className="name">{s.name}</span>
                        <span className="grade">{s.grade}</span>
                        <span className={`trend ${s.dir}`}>{s.trend}</span>
                        <div className="bar"><i style={{ width: `${30 + s.grade * 7}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 — Student View */}
          <div className={`subscene ${phaseIdx === 3 ? 'on' : ''}`}>
            <div className="panel" style={{ padding: 18 }}>
              <div className="panel-head">
                <span className="crumb">
                  11E &middot; <b>Evie Matthews</b> &middot; student #2418
                </span>
                <span className="s">Last active &middot; 2h ago</span>
              </div>
              <div className="student-card">
                <div className="avatar">EM</div>
                <div>
                  <div className="sc-name">Evie Matthews</div>
                  <div className="sc-meta">Year 11 &middot; 11E &middot; AQA &middot; Joined Sep &apos;25</div>
                  <div className="sc-grades">
                    <div className="gchip"><span className="l">Working at</span><span className="v">5</span></div>
                    <div className="gchip"><span className="l">Predicted</span><span className="v">7<small>.8</small></span></div>
                    <div className="gchip target"><span className="l">Target</span><span className="v">8</span></div>
                    <div className="gchip flag"><span className="l">Gap</span><span className="v">AO2</span></div>
                  </div>
                  <div className="sc-note">
                    <strong>Pattern:</strong> Strong in essay structure and close reading. Slipping on
                    language analysis under timed conditions &mdash; mocks 4 &amp; 5 both dropped 8+ marks
                    on AO2. Assigned: <em>Language Analysis Booster</em>, 3x flashcard decks, 1x model
                    answer walkthrough.
                  </div>
                </div>
              </div>
              <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="kpi"><span className="v">47</span><span className="l">Lessons complete</span><span className="delta">&uarr; 12 this month</span></div>
                <div className="kpi"><span className="v">9</span><span className="l">Essays marked</span><span className="delta">Avg grade 6.8</span></div>
                <div className="kpi"><span className="v">6</span><span className="l">Mocks sat</span><span className="delta">Best: 72/80</span></div>
              </div>
            </div>
          </div>

          {/* Phase 4 — Intervention */}
          <div className={`subscene ${phaseIdx === 4 ? 'on' : ''}`}>
            <div className="panel-head">
              <span className="crumb">
                Evie Matthews &middot; <b>Language Analysis Booster</b>
              </span>
              <span className="s">Intervention &middot; week 4 of 4</span>
            </div>
            <div className="intervention">
              <div className="pipeline">
                <span className="pipeline-title">The closed loop &middot; flag &rarr; act &rarr; prove</span>
                {[
                  { n: 1, title: 'Flagged by analytics', sub: 'AO2 14 pts below class \u00B7 auto-surfaced', meta: 'Week 1 \u00B7 Mon' },
                  { n: 2, title: 'Pathway assigned \u00B7 4 lessons', sub: '"Language analysis booster" \u00B7 by Ms Whitmore', meta: 'Week 1 \u00B7 Tue' },
                  { n: 3, title: 'Student completed lessons + 2 mocks', sub: '6.5 hrs on task \u00B7 AI feedback on 3 drafts', meta: 'Week 2\u20133' },
                  { n: 4, title: 'AO2 re-tested \u00B7 +16 points', sub: 'Gap closed \u00B7 now above class average', meta: 'Week 4 \u00B7 live' },
                ].map(step => (
                  <div key={step.n} className="pipe-row done">
                    <span className="n">{step.n}</span>
                    <div className="line"><b>{step.title}</b><small>{step.sub}</small></div>
                    <span className="meta">{step.meta}</span>
                  </div>
                ))}
              </div>
              <div className="impact">
                <span className="impact-title">Before &middot; after &middot; evidence</span>
                <h4>4 weeks. Gap closed.</h4>
                <div className="before-after">
                  <div className="col before"><span className="l">AO2 &middot; before</span><span className="v">44</span></div>
                  <div className="arrow">&rarr;</div>
                  <div className="col after"><span className="l">AO2 &middot; after</span><span className="v">60</span></div>
                </div>
                <ul className="impact-list">
                  <li><b>Predicted grade:</b> 6 &rarr; 7.8 in 4 weeks</li>
                  <li><b>14 students</b> on parallel pathways this term</li>
                  <li>Full audit trail &mdash; <b>exportable for parents&apos; evening</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scene-foot">
        <p className="scene-quote">
          &ldquo;The analytics dashboard alone saves me hours each week. We can track every student
          across all year groups.&rdquo; &mdash; Mrs Patterson, Head of English
        </p>
        <div className="scene-counter">01 / 04</div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CHAPTER 2 — TEACHERS
   ═══════════════════════════════════════════════════════════════ */

function TeachersScene({ active, phaseIdx }: { active: boolean; phaseIdx: number }) {
  return (
    <div className={`scene scene-teachers ${active ? 'active' : ''}`}>
      <div className="scene-header">
        <span className="scene-tag">
          <span className="dot" /> Chapter II &middot; For Teachers
        </span>
        <span className="scene-kicker">Plan &middot; teach &middot; mark &mdash; in one hour, not ten</span>
      </div>
      <div className="scene-numeral">II</div>

      <div className="scene-content">
        <div className="scene-text">
          <h2 className="scene-title">
            An <em>AI marker</em> that reads like you do.
          </h2>
          <p className="scene-desc">
            Generate differentiated lesson plans in seconds. Mark a whole class in minutes, with
            paragraph-by-paragraph feedback aligned to your exam board.
          </p>
          <div className="scene-actions">
            <a className="scene-cta">Try the teacher demo &rarr;</a>
            <a className="scene-btn-ghost">Plans &amp; pricing</a>
          </div>
        </div>

        <div className="scene-viz" style={{ flexDirection: 'column', gap: 16 }}>
          {/* Lesson cards stack */}
          <div className={`lesson-stack ${active ? 'active' : ''}`}>
            {[
              {
                tag: 'AQA \u00B7 Language Paper 1',
                title: 'Descriptive writing \u2014 pathetic fallacy',
                body: 'Starter \u2192 model \u2192 shared write \u2192 independent paragraph \u2192 peer swap \u2192 plenary.',
                grid: ['Starter \u00B7 5m', 'Model \u00B7 10m', 'Write \u00B7 25m', 'Plenary \u00B7 10m'],
              },
              {
                tag: 'OCR \u00B7 Component 01',
                title: 'Non-fiction synthesis (Q3)',
                body: 'Compare two extracts on travel. Cross-reference viewpoints with evidence stems provided.',
                grid: ['Text A \u00B7 Victorian', 'Text B \u00B7 Modern', 'Sentence starters', 'Grade 6-7 model'],
              },
              {
                tag: 'Edexcel \u00B7 Literature',
                title: "An Inspector Calls \u2014 Sheila\u2019s arc",
                body: 'Character development across Acts I\u2013III. Key quotations mapped to AO1/AO2/AO3.',
                grid: ['Act I \u00B7 Act II', 'Act III', 'Quote bank', 'Essay stems'],
              },
            ].map((card, i) => (
              <div key={i} className="slide-card" style={{ animationDelay: `${500 + i * 3000}ms` }}>
                <div className="sc-tag">{card.tag}</div>
                <div className="sc-title">{card.title}</div>
                <div className="sc-body">{card.body}</div>
                <div className="sc-grid">
                  {card.grid.map((g, gi) => (
                    <div key={gi}>{g}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI marking panel */}
          <div className={`mark-panel ${active ? 'active' : ''}`} style={{ maxWidth: 480 }}>
            <div className="mark-label">AI marking &middot; Student #2418</div>
            The writer uses{' '}
            <span className="hl-good">pathetic fallacy effectively</span> to mirror
            Sheila&apos;s guilt, though{' '}
            <span className="hl-imp">
              the final paragraph lacks a clear thematic thread
            </span>{' '}
            back to responsibility.
            <div className="grade">
              <div className="grade-pill">7</div>
              <div className="ao">
                <div className="ao-row">
                  AO1 <div className="ao-bar"><i style={{ '--w': '78%' } as React.CSSProperties} /></div> 78
                </div>
                <div className="ao-row">
                  AO2 <div className="ao-bar"><i style={{ '--w': '82%' } as React.CSSProperties} /></div> 82
                </div>
                <div className="ao-row">
                  AO3 <div className="ao-bar"><i style={{ '--w': '65%' } as React.CSSProperties} /></div> 65
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scene-foot">
        <p className="scene-quote">
          &ldquo;Finally an English resource that covers all the boards properly. The lesson builder
          has halved my planning time.&rdquo; &mdash; Mr Davies, English Teacher
        </p>
        <div className="scene-counter">02 / 04</div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CHAPTER 3 — STUDENTS
   ═══════════════════════════════════════════════════════════════ */

function StudentsScene({ active, phaseIdx }: { active: boolean; phaseIdx: number }) {
  return (
    <div className={`scene scene-students ${active ? 'active' : ''}`}>
      <div className="scene-header">
        <span className="scene-tag">
          <span className="dot" /> Chapter III &middot; For Students
        </span>
        <span className="scene-kicker">Learn &middot; practise &middot; get feedback &middot; improve</span>
      </div>
      <div className="scene-numeral">III</div>

      {/* Phase rail */}
      <div className="phase-rail tall">
        {['Courses', 'Annotate', 'AI feedback', 'Writing coach', 'Mock exams', 'Revise \u00B7 predict'].map(
          (label, i) => (
            <div key={i} className={`p ${phaseIdx === i ? 'on' : ''}`}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span> {label}
            </div>
          )
        )}
      </div>

      <div className="scene-content" style={{ gridTemplateColumns: '0.75fr 1.25fr' }}>
        <div className="scene-text">
          <h2 className="scene-title">
            Everything you need to <em>land the grade you want</em>.
          </h2>
          <p className="scene-desc">
            Structured courses you can actually follow. AI feedback that reads like a teacher&apos;s.
            Flashcards, mocks and grade-predicting games &mdash; all mapped to your exam board.
          </p>
          <div className="scene-actions">
            <a className="scene-cta">Start free &mdash; no card &rarr;</a>
            <a className="scene-btn-ghost">Browse courses</a>
          </div>
        </div>

        <div className="scene-viz" style={{ position: 'relative', alignItems: 'stretch' }}>
          {/* Phase 0 — Structured courses */}
          <div className={`subscene ${phaseIdx === 0 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>Structured courses</h3>
              <span className="chip">470+ lessons</span>
            </div>
            <div className="feat-body">
              <div className="card-white">
                <span className="ch">AQA &middot; Language Paper 1 &middot; Week 3 of 8</span>
                <h4>Analysing language in fiction extracts</h4>
                <div className="course-progress">
                  <span>38%</span>
                  <div className="track"><i style={{ width: '38%' }} /></div>
                  <span>18 / 47</span>
                </div>
                <ul className="lesson-list">
                  <li className="done"><span className="tick">&check;</span> Identifying methods &mdash; similes &amp; metaphors</li>
                  <li className="done"><span className="tick">&check;</span> Effect on the reader &mdash; starter phrases</li>
                  <li className="current"><span className="tick">&blacktriangleright;</span> Zoom in: single-word analysis</li>
                  <li className="next"><span className="tick"></span> Writing a full AO2 paragraph</li>
                  <li className="next"><span className="tick"></span> Checkpoint quiz &middot; grade predictor</li>
                </ul>
              </div>
              <div className="card-white card-dark">
                <span className="ch">&ldquo;Don&apos;t just name the technique &mdash; show its job.&rdquo;</span>
                <div className="video-placeholder">
                  <div className="play-btn">&blacktriangleright;</div>
                  <div className="video-bar"><div style={{ width: '42%' }} /></div>
                </div>
                <p className="video-caption">
                  Chapter 3 of 6 &middot; Ms Hughes explains why &ldquo;freezing&rdquo; matters more than
                  &ldquo;cold&rdquo; in an extract from <em>Frankenstein</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 1 — Annotated texts */}
          <div className={`subscene ${phaseIdx === 1 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>Annotated texts</h3>
              <span className="chip">30 poems &middot; 15 set texts</span>
            </div>
            <div className="feat-body" style={{ gridTemplateColumns: '1.1fr 0.9fr' }}>
              <div className="card-white">
                <span className="ch">AQA anthology &middot; Power &amp; Conflict &middot; &ldquo;Ozymandias&rdquo;</span>
                <div className="poem-text">
                  I met a <span className="hl-narrator">traveller</span> from an antique land,<br />
                  Who said &mdash; &ldquo;<span className="hl-imagery">Two vast and trunkless legs of stone</span><br />
                  Stand in the desert. . . . Near them, on the sand,<br />
                  Half sunk a <span className="hl-quote">shattered visage</span> lies, whose frown,<br />
                  And wrinkled lip, and <span className="hl-theme">sneer of cold command</span>,<br />
                  Tell that its sculptor well those passions read
                </div>
                <div className="anno-tags">
                  <span className="tag-narrator">Narrator frame</span>
                  <span className="tag-imagery">Imagery of decay</span>
                  <span className="tag-quote">Key quote</span>
                  <span className="tag-theme">Theme &middot; power</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="card-white" style={{ padding: '14px 16px' }}>
                  <span className="ch">Click to reveal &middot; &ldquo;sneer of cold command&rdquo;</span>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
                    Shelley fuses the facial <b>sneer</b> with military <b>command</b> &mdash; the
                    despot&apos;s contempt is inseparable from his authority.
                  </p>
                </div>
                <div className="card-white" style={{ padding: '14px 16px' }}>
                  <span className="ch">Context card &middot; 1818</span>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
                    Published as Napoleon&apos;s legacy was collapsing. Shelley, a radical, read the ruin
                    of tyrants as inevitable.
                  </p>
                </div>
                <div className="card-white card-ochre" style={{ padding: '14px 16px' }}>
                  <span className="ch">Grade 9 hinge</span>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
                    <em>&ldquo;Shelley&apos;s traveller is a mediating voice &mdash; we never meet
                    Ozymandias, only his wreckage, retold.&rdquo;</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 — AI Essay Feedback */}
          <div className={`subscene ${phaseIdx === 2 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>AI essay feedback</h3>
              <span className="chip">Grade &middot; AO scores &middot; rewrites</span>
            </div>
            <div className="feat-body">
              <div className="ai-panel">
                <span className="ch">Your submission &middot; An Inspector Calls &middot; 428 words</span>
                <div className="ess">
                  Priestley presents Sheila as <span className="g">the emotional conscience</span> of the
                  Birling family. At the start of Act I, her silly exclamations show she is still a child
                  of privilege &mdash; <span className="r">but by the end of the play</span> she has become
                  the character who most sharply condemns her parents. When she says{' '}
                  <span className="g">&ldquo;these girls aren&apos;t cheap labour&rdquo;</span>, Priestley
                  uses her voice to critique the capitalist assumptions her father takes for granted.
                  <span className="i">
                    {' '}Her transformation is important because it shows that change is possible
                  </span>
                  , especially in the younger generation.
                </div>
                <div className="fb-row">
                  <div className="fb-grade">
                    <div className="big">7</div>
                    <div className="small">est. grade</div>
                  </div>
                  <ul className="feedback-list">
                    <li className="strength"><b>AO1 &middot; 82</b> &mdash; clear thesis, well-chosen quote embedded early.</li>
                    <li className="strength"><b>AO3 &middot; 78</b> &mdash; links 1945 context to Priestley&apos;s political purpose.</li>
                    <li className="improve"><b>AO2 &middot; 58</b> &mdash; zoom into &ldquo;cheap labour&rdquo; at word level, not just idea level.</li>
                    <li className="improve"><b>Structure</b> &mdash; the <em>but by the end</em> jump skips Act II. Add a pivot sentence.</li>
                  </ul>
                </div>
              </div>
              <div className="card-white card-teal">
                <span className="ch">AI tutor &middot; next step</span>
                <h4>&ldquo;You&apos;re a Grade 7 now. Here&apos;s what a Grade 9 would add.&rdquo;</h4>
                <div className="tutor-quote">
                  &ldquo;Notice how Priestley splits the word: <b>cheap</b> (economic) and <b>labour</b>{' '}
                  (moral). Sheila refuses the first adjective as a way of refusing the whole ideology.&rdquo;
                </div>
                <div className="tutor-footer">
                  <span>Pathway: Language analysis booster &middot; 4 lessons</span>
                  <span>Start &rarr;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 — Live Writing Coach */}
          <div className={`subscene ${phaseIdx === 3 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>Live writing coach</h3>
              <span className="chip">AO2 hints as you type</span>
            </div>
            <div className="coach-grid">
              <div className="writer">
                <div className="writer-head">
                  <span className="t">Practice &middot; &ldquo;How is Sheila presented as powerful?&rdquo;</span>
                  <span className="count">287 words &middot; 14 min</span>
                </div>
                <div className="writer-body">
                  <span className="type-seg">From the opening of Act I, Sheila is </span>
                  <span className="weak" title="Weak verb">shown</span>
                  <span className="type-seg"> as </span>
                  <span className="weak" title="Vague adjective">nice</span>
                  <span className="type-seg"> and </span>
                  <span className="weak" title="Prompt wording reused">powerful</span>
                  <span className="type-seg">. Priestley&apos;s stage directions describe her as
                    &ldquo;very pleased with life&rdquo;, which </span>
                  <span className="strong">
                    sets up a fragile innocence the Inspector systematically dismantles
                  </span>
                  <span className="type-seg">. Her repetition of &ldquo;</span>
                  <span className="technique">Mother, I think it&apos;s a rotten shame</span>
                  <span className="type-seg">&rdquo; marks the</span>
                  <span className="caret" />
                </div>
                <div className="writer-foot">
                  <span>AO1 &middot; idea strong</span>
                  <span className="hot">AO2 &middot; 3 weak verbs flagged</span>
                  <span>AO3 &middot; not yet</span>
                </div>
              </div>
              <div className="tips">
                <div className="tips-head">
                  <span className="t">Coach &middot; suggestions</span>
                  <span className="live"><span className="d" /> Reading your draft</span>
                </div>
                <div className="tip">
                  <span className="lead">Word choice &middot; AO2</span>
                  &ldquo;<b>shown</b>&rdquo; is doing too little work. A verb like <b>positioned</b>,{' '}
                  <b>framed</b> or <b>constructed</b> foregrounds Priestley as a craftsman.
                  <div className="suggest">&ldquo;Sheila is <b>positioned</b> as the emotional conscience...&rdquo;</div>
                </div>
                <div className="tip">
                  <span className="lead">Structure &middot; AO1</span>
                  You&apos;ve picked a strong quote but <b>haven&apos;t said why it matters politically</b>.
                  Add one sentence linking &ldquo;rotten shame&rdquo; to Priestley&apos;s 1945 audience.
                </div>
                <div className="tip">
                  <span className="lead">Technique &middot; AO2</span>
                  You&apos;ve named repetition. Name its <b>effect</b>: repetition here mimics conviction
                  &mdash; Sheila is finding her voice in real time.
                </div>
                <div className="ao-live">
                  <div className="ao-chip up"><span className="l">AO1</span><span className="v">7</span></div>
                  <div className="ao-chip"><span className="l">AO2</span><span className="v">5</span></div>
                  <div className="ao-chip up"><span className="l">AO3</span><span className="v">6</span></div>
                  <div className="ao-chip"><span className="l">AO4</span><span className="v">&mdash;</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 — Mock Exams */}
          <div className={`subscene ${phaseIdx === 4 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>Timed mock papers</h3>
              <span className="chip">130+ papers &middot; all boards</span>
            </div>
            <div className="mock-grid">
              <div className="mock-paper">
                <div className="head">
                  <span>AQA &middot; English Lit &middot; Paper 2</span>
                  <span>45m &middot; Section A</span>
                </div>
                <h4>Power &amp; Conflict &mdash; &lsquo;Ozymandias&rsquo; &amp; one other</h4>
                <div className="qlist">
                  <div className="q">
                    <span className="qn">Q1 &middot; 30 marks</span>
                    Compare how poets present the effects of power in &lsquo;Ozymandias&rsquo; and{' '}
                    <b>one other</b> poem from Power and Conflict.
                  </div>
                  <div className="q" style={{ opacity: 0.55 }}>
                    <span className="qn">Q2 &middot; 8 marks</span>
                    AO4 &mdash; accurate use of vocabulary for effect.
                  </div>
                </div>
                <div className="mock-meta">
                  <span>&diam; 287 words written</span>
                  <span>&middot; 2 drafts saved</span>
                </div>
              </div>
              <div className="mock-panel">
                <div className="mock-timer-label">Live timer &middot; exam conditions</div>
                <div className="timer-ring">
                  <svg viewBox="0 0 140 140">
                    <circle className="t-bg" cx="70" cy="70" r="60" />
                    <circle className="t-fg" cx="70" cy="70" r="60" />
                  </svg>
                  <div className="t-label">
                    <div>
                      <div className="tt">31<small>:24</small></div>
                      <div className="tl">Of 45:00 remaining</div>
                    </div>
                  </div>
                </div>
                <div className="mock-stats">
                  <div className="ms"><div className="v">287</div><div className="l">Words</div></div>
                  <div className="ms"><div className="v">6.4/m</div><div className="l">Pace</div></div>
                  <div className="ms"><div className="v">2/2</div><div className="l">Quotes cited</div></div>
                </div>
                <div className="mock-hint">
                  <span className="icon">i</span>
                  <div>
                    <b>Pace alert:</b> you&apos;re on track for 450 words. Grade 9 answers average 520+
                    &mdash; consider tightening intro and starting Q1b.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5 — Revise & Predict */}
          <div className={`subscene ${phaseIdx === 5 ? 'on' : ''}`}>
            <div className="feat-header">
              <h3>Revise &amp; predict</h3>
              <span className="chip">2,000 flashcards &middot; 7 games</span>
            </div>
            <div className="feat-body" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="card-white">
                  <span className="ch">Flashcards &middot; smart review</span>
                  <div className="flash-stack">
                    <div className="fc">
                      <span className="tag">Literary device</span>
                      <span className="term">Sibilance</span>
                      <span className="ex">&ldquo;the silver sea&rdquo; &mdash; clustered &apos;s&apos; sounds for softness or menace.</span>
                    </div>
                    <div className="fc">
                      <span className="tag">Poetic form</span>
                      <span className="term">Volta</span>
                      <span className="ex">A turn in thought &mdash; often between octet and sestet.</span>
                    </div>
                    <div className="fc">
                      <span className="tag">Theme</span>
                      <span className="term">Pathetic fallacy</span>
                      <span className="ex">Weather or nature mirroring a character&apos;s mood.</span>
                    </div>
                  </div>
                  <div className="flash-footer">
                    <span>Deck &middot; Literary terms &middot; 52</span>
                    <span className="mastered">47 / 52 mastered</span>
                  </div>
                </div>
                <div className="card-white card-dark">
                  <span className="ch">Grade-climber game &middot; live</span>
                  <h4>You hit Grade 8 on the last round.</h4>
                  <div className="grade-rounds">
                    {[
                      { label: 'Round 1', grade: '6', active: false },
                      { label: 'Round 2', grade: '7', active: false },
                      { label: 'Round 3', grade: '8', active: true },
                      { label: 'Next', grade: '?', active: false, dashed: true },
                    ].map((r, i) => (
                      <div key={i} className={`round ${r.active ? 'on' : ''} ${r.dashed ? 'dashed' : ''}`}>
                        <div className="round-label">{r.label}</div>
                        <div className="round-grade">{r.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-white">
                <span className="ch">Grade predictor &middot; Spring &apos;26</span>
                <h4>Your predicted GCSE grade, updated live.</h4>
                <div className="predictor-row">
                  <div className="predictor-ring">
                    <div className="ring-value">8</div>
                  </div>
                  <div className="predictor-info">
                    <div className="pred-line"><span>Working at</span><b>6</b></div>
                    <div className="pred-line"><span>Predicted</span><b className="clay">8</b></div>
                    <div className="pred-line"><span>Target</span><b className="teal">9</b></div>
                    <div className="pred-hint">
                      Complete <b>3 more AO2 lessons</b> + <b>1 mock</b> to unlock a 9.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scene-foot">
        <p className="scene-quote">
          &ldquo;I went from a Grade 4 to a 7 in six months. The structured courses and model
          answers made everything click.&rdquo; &mdash; Sophie T., Year 11 AQA
        </p>
        <div className="scene-counter">03 / 04</div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CHAPTER 4 — PARENTS
   ═══════════════════════════════════════════════════════════════ */

function ParentsScene({ active, phaseIdx }: { active: boolean; phaseIdx: number }) {
  return (
    <div className={`scene scene-parents ${active ? 'active' : ''}`}>
      <div className="scene-header">
        <span className="scene-tag">
          <span className="dot" /> Chapter IV &middot; For Parents
        </span>
        <span className="scene-kicker">See the progress &middot; without the pressure</span>
      </div>
      <div className="scene-numeral">IV</div>

      <div className="scene-content">
        <div className="scene-text">
          <h2 className="scene-title">
            Their <em>confidence</em>, on a dashboard you can read.
          </h2>
          <p className="scene-desc">
            Weekly progress summaries. Streaks, focus areas and predicted grades in plain English.
            First month free &mdash; cancel any time from your account.
          </p>
          <div className="scene-actions">
            <a className="scene-cta">Start first month free &rarr;</a>
            <a className="scene-btn-ghost">Read the parent guide</a>
          </div>
        </div>

        <div className="scene-viz" style={{ flexDirection: 'column', gap: 20 }}>
          <div className="parent-dash">
            <div className="head">
              <div className="h-title">Evie, Year 11</div>
              <div className="h-sub">Week 12 &middot; Spring</div>
            </div>
            <div className="ring-row">
              <div className="pring">
                <div className="v">7<small>.8</small></div>
              </div>
              <div className="ring-info">
                <h4>Predicted grade</h4>
                <p>Up from 6.2 four weeks ago. AO2 (language analysis) now her strongest area.</p>
              </div>
            </div>
            <div>
              <div className="streak-label">14-day streak</div>
              <div className="streak">
                {[1,1,1,1,1,0,1, 1,1,1,1,1,1,2].map((v, i) => (
                  <div
                    key={i}
                    style={{
                      background: v === 2 ? '#D97A4E' : v === 1 ? '#6B8A6B' : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={`focus ${active ? 'active' : ''}`}>
              <span className="dot" />
              This week&apos;s focus: <strong>Unseen poetry &mdash; structural analysis</strong>
            </div>
          </div>

          <div className={`trend ${active ? 'active' : ''}`}>
            <div className="trend-title">Mock score trend &middot; last 6 weeks</div>
            <div className="trend-chart">
              {[30, 38, 48, 58, 72, 90].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${4000 + i * 200}ms` } as React.CSSProperties}
                  className={i === 5 ? 'highlight' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scene-foot">
        <p className="scene-quote">
          &ldquo;My daughter&apos;s confidence has completely changed. She actually wants to revise
          now and her mock results have gone up two grades.&rdquo; &mdash; Mark H., Parent
        </p>
        <div className="scene-counter">04 / 04</div>
      </div>
    </div>
  )
}

